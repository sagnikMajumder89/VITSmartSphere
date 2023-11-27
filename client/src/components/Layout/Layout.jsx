
import { Outlet } from "react-router-dom";
import NavBar from "./AppBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BottomBar from "./BottomBar";
import { CssBaseline } from '@mui/material';

export default function Layout() {

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
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Outlet />
            <BottomBar />
        </ThemeProvider>
    )
}
