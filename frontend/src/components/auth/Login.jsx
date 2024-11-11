import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import { Box, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../../redux/authSlice';
const Login = () => {
    const navigate = useNavigate();
    const { loading, user } = useSelector(store => store.auth);
    //dispatch actions to the Redux store
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""
    })
    const handleInputs = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`http://localhost:8000/api/user/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                alert(res.data.message);
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        } finally {
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
                    Log-in
                </Typography>

                <form >

                    <TextField
                        label="Email id"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={input.email}
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
                                label="Candidate"
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
                        onClick={handleSubmit} 
                        className="my-4"
                    >
                        {loading ? (
                            <>
                                <CircularProgress size={24} /> Please wait
                            </>
                        ) : (
                            "Login"
                        )}
                    </Button>
                    <Link to={'/signup'}><span >Dont have an account?</span></Link>
                </form>
            </Box>
        </div>
    )
}

export default Login