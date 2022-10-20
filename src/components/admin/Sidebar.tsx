import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import {Box, Divider, IconButton, Typography, useTheme} from "@mui/material";
import React, {useState} from "react";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../../pages/theme";
import Link from "next/link";


const dashBoardItems = () => [
    {
        title: "Dashboard",
        to: "/dashboard",
        icon: <HomeOutlinedIcon/>,
    },
];
const dataItems = () => [
    {
        title: "Home Team",
        to: "/team",
        icon: <PeopleOutlinedIcon/>,
    },
    {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon/>,
    },
];
const pageItems = () => [
    {
        title: "Invodices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon/>,
    },
    {
        title: "Profile Form",
        to: "/form",
        icon: <PersonOutlinedIcon/>,
    },
    {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon/>,
    },
    {
        title: "FAQ",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon/>,
    },
];
const chartsItems = () => [
    {
        title: "Bar Chart",
        to: "/bar",
        icon: <BarChartOutlinedIcon/>,
    },
    {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon/>,
    },
    {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon/>,
    },
    {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon/>,
    },
];

const Sidebar = ({isSidebar, path}: { isSidebar: any, path: any }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(isSidebar);
    const [selected, setSelected] = useState(path);
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    backgroundColor: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[200],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/* USER */}
                    <Box>
                        {/* MENU ITEMS */}
                        <Box>
                            {dashBoardItems().map((item) => (
                                <Item
                                    title={item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                    isCollapsed={isCollapsed}
                                />
                            ))}

                            <Divider>
                                <Typography variant="h5" color={colors.grey[300]}>
                                    Data
                                </Typography>
                            </Divider>

                            {dataItems().map((item) => (
                                <Item
                                    title={item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                    isCollapsed={isCollapsed}
                                />
                            ))}

                            <Divider>
                                <Typography variant="h5" color={colors.grey[300]}>
                                    Pages
                                </Typography>
                            </Divider>

                            {pageItems().map((item) => (
                                <Item
                                    title={item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                    isCollapsed={isCollapsed}
                                />
                            ))}

                            <Divider>
                                <Typography variant="h5" color={colors.grey[300]}>
                                    Charts
                                </Typography>
                            </Divider>

                            {chartsItems().map((item) => (
                                <Item
                                    title={item.title}
                                    to={item.to}
                                    icon={item.icon}
                                    selected={selected}
                                    setSelected={setSelected}
                                    isCollapsed={isCollapsed}
                                />
                            ))}
                        </Box>
                    </Box>
                    {!isCollapsed && (
                        <Box>
                            <Box position="absolute" bottom={0}>
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            {/* <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0" }}
                  >
                    Bruno Bastidas{" "}
                  </Typography>
                  <Typography>Admin</Typography>
                </Box> */}
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    );
};

const Item = ({
                  title,
                  to,
                  icon,
                  selected,
                  setSelected,
                  isCollapsed,
              }: {
    title: string;
    to: string;
    icon: any;
    selected: any;
    setSelected: any;
    isCollapsed: any;
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
            <Link href={to === '/admin' ? "" : "/admin" + to}>
                <MenuItem
                    active={selected === title || selected === to}
                    style={{color: colors.grey[100]}}
                    onClick={() => setSelected(title)}
                    icon={icon}
                >
                    {!isCollapsed && <Typography>{title}</Typography>}

                </MenuItem>
            </Link>

        </Box>


    );
};

export default Sidebar;
