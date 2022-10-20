import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {Box, IconButton, useTheme} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../pages/theme";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);

    function handleClick() {
        colorMode.toggleColorMode();
    }

    return (
        <Box display="flex" justifyContent="space-between" p="20px">
            {/* SEARCH BAR */}
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: `${colors.primary[400]}`,
                    borderRadius: "30px",
                }}
            >
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box
                sx={{
                    display: "flex",
                    backgroundColor: `${colors.primary[400]}`,
                    borderRadius: "3px",
                }}
            >
                <IconButton onClick={handleClick}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon/>
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default TopBar;
