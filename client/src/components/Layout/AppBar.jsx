
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import logo from '../../assets/images/Icon.png';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    return (
        <Box>
            <AppBar className='bg-inherit w-screen' elevation={0}>
                <Toolbar className='w-screen'>
                    <Box sx={{ textTransform: 'none' }} className='flex flex-row justify-between w-screen m-5'>
                        <Box>
                            <Typography variant="h6" component="div" className='font-display font-bold text-white'>
                                VIT SmartSphere
                            </Typography>
                        </Box>
                        <Box>
                            <Button className='bg-tertiary w-36 h-8 rounded-full shadow-lg font-display text-primary font-bold hover:bg-primary hover:text-tertiary hover:border-2 hover:border-tertiary hover:border-solid' variant='contained'>
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}