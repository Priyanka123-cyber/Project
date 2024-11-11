import React, { useState } from 'react'
import { Await, useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { setLoading } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    });
    const { loading, user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleInputs = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleFile = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();    //formdata object
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`http://localhost:8000/api/user/register`, formData, {
                headers: { 'Content-Type': "multipart/form-data" },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.res.data.message);
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <Navbar />
            <br />
            <Box
                sx={{
                    maxWidth: 400,
                    margin: '0 auto',
                    padding: 2,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    boxShadow: 2,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Sign-Up
                </Typography>

                <form >
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={input.fullname}
                        name="fullname"
                        onChange={handleInputs}
                    />

                    <TextField
                        label="Email id"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={input.email}
                        margin="normal"
                        name="email"
                        onChange={handleInputs}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={input.password}
                        name="password"
                        onChange={handleInputs}
                    />

                    <TextField
                        label="Phone Number"
                        type="text"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="phoneNumber"
                        value={input.phoneNumber}
                        onChange={handleInputs}
                    />
                    <label className="text-gray-700 font-medium">
                        Profile
                    </label>
                    <input
                        id="profilePhoto"
                        accept="image/*"
                        type="file"
                        onChange={handleFile}
                        className="cursor-pointer border border-gray-300 rounded px-2 py-1 text-sm"
                    />
                    <FormControl>
                        <FormLabel id="role-radio-buttons-group">Role</FormLabel>
                        <RadioGroup
                            aria-labelledby="role-radio-buttons-group"
                            name="role"
                            value={input.role}
                            className="flex items-center gap-4 my-5"
                        >
                            <FormControlLabel
                                value="student"
                                control={<Radio />}
                                label="Student"
                                onChange={handleInputs}
                                className="flex items-center space-x-2"
                            />
                            <FormControlLabel
                                value="recruiter"
                                control={<Radio />}
                                label="Recruiter"
                                onChange={handleInputs}
                                className="flex items-center space-x-2"
                            />
                        </RadioGroup>
                    </FormControl>


                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                        onClick={handleSubmit} // Add the onClick handler for the button
                        className="my-4"
                    >
                        {loading ? (
                            <>
                                <CircularProgress size={24} /> Please wait
                            </>
                        ) : (
                            "Sign-up"
                        )}
                    </Button>
                    <Link to={'/login'}><span >Already have an account?</span></Link>
                </form>
            </Box>
        </div>
    )
}

export default Signup