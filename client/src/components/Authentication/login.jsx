import { Box, Typography, TextField, Button } from '@mui/material'
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/login.json"
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const checkAuth = async () => {
        await fetch('http://localhost:3000/auth/checkAuth', {
            method: 'GET',
            credentials: 'include'
        }).then(res =>
            res.json()
        ).then(data => {
            console.log(data)
        })
            .catch(err => {
                console.log(err)
            })
    }
    const handleLogin = async () => {
        const res = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password,

            })
        })

        console.log(res.status)
        const data = await res.json()
        console.log(data)
    }
    const handleUserNameChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <Box className="flex flex-row   h-screen items-center justify-center bg-primary">
            <Box className="flex w-full">
                <Lottie animationData={loginAnimation} loop={true} />
            </Box>
            <Box className="flex flex-col w-full p-5 m-20 justify-center items-center border-2 border-tertiary border-solid">
                <Box className="flex flex-col p-5">
                    <Typography className="font-bold text-4xl font-display pb-4 text-white">Welcome!</Typography>
                    <Typography className="font-display text-white">Login to continue</Typography>
                </Box>
                <Box className="flex flex-col p-5 gap-4">
                    <Box className='flex items-end'>
                        <EmailIcon sx={{ color: '#a1efe3', mr: 1, my: 0.5 }} />
                        <TextField onChange={handleUserNameChange} value={email} id="email" label="Email" variant="standard" className='w-80' InputProps={{
                            style: { color: 'white', }
                        }} InputLabelProps={{
                            style: { color: '#fff' },
                        }} />
                    </Box>
                    <Box className='flex items-end'>
                        <PasswordIcon sx={{ color: '#a1efe3', mr: 1, my: 0.5 }} />
                        <TextField onChange={handlePasswordChange} value={password} id="password" label="Password" type='password' variant="standard" className='w-80 text-white' InputProps={{
                            style: {
                                color: 'white',
                            }
                        }}
                            InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                        />
                    </Box>

                </Box>
                <Box className="flex flex-row gap-28">
                    <Button onClick={handleLogin} className="bg-tertiary h-8 rounded-full w-32 shadow-lg font-display text-primary font-bold text-base hover:bg-primary hover:text-tertiary hover:border-2 hover:border-tertiary hover:border-solid" variant="contained">
                        Login</Button>
                    <Button onClick={checkAuth} className="bg-tertiary h-8 rounded-full w-32 shadow-lg font-display text-primary font-bold text-base hover:bg-primary hover:text-tertiary hover:border-2 hover:border-tertiary hover:border-solid" variant="contained">
                        CheckAuth</Button>
                </Box>
                <Box className="flex flex-row justify-center items-center py-3">
                    <Button className=" font-display text-white" variant="text">
                        Forgot password?</Button>
                    <Link to='/signup'>
                        <Typography className="font-display text-white font-medium hover:text-tertiary">
                            Signup
                        </Typography>
                    </Link>
                </Box>


                <Box className="flex flex-col items-center">
                    <Typography className="font-display text-white">Or Login With</Typography>
                    <Button variant='Text' sx={{ color: 'white' }} startIcon={<GoogleIcon />}>
                        <Typography className='font-display text-white'>
                            Google
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
