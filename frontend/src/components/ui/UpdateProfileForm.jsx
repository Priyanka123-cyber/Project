import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, TextField, Button, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/authSlice';


const UpdateProfileForm = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.map(skill => skill) || "",
        file: null // Handle the file state separately
    });

    const dispatch = useDispatch();

    const handleInputs = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("bio", input.bio);
        formData.append("skills", input.skills);

        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            setLoading(true);
            const res = await axios.post('http://localhost:8000/api/user/profile/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                alert(res.data.message);
            } 
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
            setLoading(false);
        }
        onClose(); // Close dialog after submission
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    Update Profile
                </DialogTitle>
                <TextField
                    label="Full Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={input.fullname}
                    onChange={handleInputs}
                    name="fullname"
                />
                <TextField
                    label="Email id"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={input.email}
                    onChange={handleInputs}
                    name="email"
                />
                <TextField
                    label="Phone Number"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={input.phoneNumber}
                    onChange={handleInputs}
                    name="phoneNumber"
                />
                <TextField
                    label="Bio"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={input.bio}
                    onChange={handleInputs}
                    name="bio"
                />
                <TextField
                    label="Skills"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={input.skills}
                    onChange={handleInputs}
                    name="skills"
                />
                <label className="text-gray-700 font-medium">
                    Resume
                </label>
                <input
                    id="Resume"
                    accept="application/pdf"
                    name="file"
                    type="file"
                    onChange={handleFile}
                    className="cursor-pointer border border-gray-300 rounded px-2 py-1 text-sm"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={handleSubmit}
                    className="my-4"
                >
                    {loading ? (
                        <>
                            <CircularProgress size={24} /> Please wait
                        </>
                    ) : (
                        "Update"
                    )}
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileForm;
