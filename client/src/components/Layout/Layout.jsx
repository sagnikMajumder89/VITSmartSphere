
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./AppBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BottomBar from "./BottomBar";
import { CssBaseline } from '@mui/material';
import { useEffect } from "react";

export default function Layout() {
    const navigate = useNavigate();
    const theme = createTheme({
        palette: {
            primary: {
                main: "#B4D8AE",
            },
            secondary: {
                main: "#E6FFE1",
            },
            tertiary: {
                main: "#a1efe3",
            },
        },
    });

    // useEffect(() => async () => {
    //     await fetch('http://localhost:3000/auth/checkAuth', {
    //         method: 'GET',
    //         credentials: 'include'
    //     }).then(res => {
    //         console.log(res.status)
    //         if (res.status !== 200) {
    //             navigate('/');
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [])
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Outlet />
            <BottomBar />
        </ThemeProvider>
    )
}
