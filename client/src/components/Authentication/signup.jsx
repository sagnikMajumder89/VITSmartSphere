import { Box, Typography, TextField, Button } from '@mui/material'
import Lottie from "lottie-react";
import loginAnimation from "../../assets/lottie/login.json"
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from 'react-router-dom';
export default function SingUp() {
    return (
        <Box className="flex flex-row   h-screen items-center justify-center bg-primary">
            <Box className="flex w-full">
                <Lottie animationData={loginAnimation} loop={true} />
            </Box>
            <Box className="flex flex-col w-full p-5 m-20 justify-center items-center border-2 border-tertiary border-solid">
                <Box className="flex flex-col p-5">
                    <Typography className="font-bold text-4xl font-display pb-4 text-white">New here?</Typography>
                    <Typography className="font-display text-white">Signup to continue</Typography>
                </Box>
                <Box className="flex flex-col p-5 gap-4">
                    <Box className='flex items-end'>
                        <EmailIcon sx={{ color: '#a1efe3', mr: 1, my: 0.5 }} />
                        <TextField id="email" label="Email" variant="standard" className='w-80' InputProps={{
                            style: { color: 'white', }
                        }} InputLabelProps={{
                            style: { color: '#fff' },
                        }} />
                    </Box>
                    <Box className='flex items-end'>
                        <PasswordIcon sx={{ color: '#a1efe3', mr: 1, my: 0.5 }} />
                        <TextField id="password" label="Password" type='password' variant="standard" className='w-80 text-white' InputProps={{
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
                <Box className="flex flex-row p-5 gap-28">
                    <Button className="bg-tertiary m-5 rounded-full w-32 shadow-lg font-display text-primary font-bold text-base hover:bg-primary hover:text-tertiary hover:border-2 hover:border-tertiary hover:border-solid" variant="contained">
                        Signup</Button>
                </Box>
                <Box className='flex flex-row mb-2 items-center gap-4'>
                    <Typography className="font-display text-white">Already have an account?
                    </Typography>
                    <Link to='/login'>
                        <Typography className="font-display text-white font-medium hover:text-tertiary">
                            Login
                        </Typography>
                    </Link>
                </Box>
                <Box className="flex flex-row items-center gap-16 pl-5">
                    <Typography className="font-display text-white">Or Signup with</Typography>
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
