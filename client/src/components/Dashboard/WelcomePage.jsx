
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import welcomeAnimation from "../../assets/lottie/welcome.json"

export default function Home() {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    const goToSignUp = () => {
        navigate("/signup");
    }
    return (
        <Box className='bg-primary flex flex-col justify-between h-screen'>
            <Box className='flex flex-row justify-center items-center ml-36 mt-52'>
                <Box className='w-2/4 h-2/4'>
                    <Typography className="font-bold text-5xl p-3 font-display text-white">
                        VIT SmartSphere
                    </Typography>
                    <Typography className="font-mediumtext-gray-600 p-3 italic font-display text-white">
                        A place to learn, a chance to grow
                    </Typography>
                    <Typography className="font-mediumtext-gray-600 p-3 font-display text-white">
                        VIT SmartSphere is a classroom management system that provides a modern, easy-to-use, mobile-friendly, fully-featured solution for VITians.
                    </Typography>
                    <Box className='flex flex-row m-4 gap-5'>
                        <Button onClick={goToLogin} className="bg-tertiary rounded-full w-32 h-12 shadow-lg font-display text-primary font-extrabold text-base hover:bg-primary hover:text-tertiary hover:border-2 hover:border-tertiary hover:border-solid" variant="contained">
                            Login
                        </Button>
                        <Button onClick={goToSignUp} className="bg-transparent rounded-full w-32 h-12 font-display font-extrabold text-base text-tertiary border-2 border-tertiary border-solid hover:bg-tertiary hover:text-primary" variant="contained">
                            Signup
                        </Button>
                    </Box>
                </Box>
                <Box className="flex items-center w-2/4 h-16 p-5">
                    <Lottie animationData={welcomeAnimation} loop={true} />
                </Box>
            </Box>
            <Box className='flex flex-row justify-around items-center bg-secondary h-24'>
                <Box className=' flex flex-col'>
                    <Typography className="font-display font-medium text-3xl text-white">60  K+</Typography>
                    <Typography className="font-display font-light text-white">Students</Typography>
                </Box>

                <Box className=' flex flex-col'>
                    <Typography className="font-display font-medium text-3xl text-white">40+</Typography>
                    <Typography className="font-display font-light text-white">Years of experience</Typography>
                </Box>
                <Box className=' flex flex-col'>
                    <Typography className="font-display font-medium text-3xl text-white">100+</Typography>
                    <Typography className="font-display font-light text-white">Excellence Awards</Typography>
                </Box>
                <Box className=' flex flex-col'>
                    <Typography className="font-display font-medium text-3xl text-white">A++</Typography>
                    <Typography className="font-display font-light text-white">Accreditation by MHRD</Typography>
                </Box>
            </Box>
        </Box>
    )
}
