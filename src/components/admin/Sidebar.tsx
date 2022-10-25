import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import {Box, Divider, IconButton, Typography, useTheme} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "../../styles/theme";
import Link from "next/link";
import Image from "next/image";


const dashBoardItems = () => [
    {
        title: "Dashboard",
        to: "/",
        icon: <HomeOutlinedIcon/>,
    },
];
const dataItems = () => [
    /*    {
            title: "Staff",
            to: "/staff",
            icon: <PeopleOutlinedIcon/>,
        },*/
    {
        title: "Users",
        to: "/users",
        icon: <ContactsOutlinedIcon/>,
    },
    {
        title: "Logs",
        to: "/logs",
        icon: <AssignmentOutlinedIcon/>,
    },
];
const pluginItems = () => [
    {
        title: "Plugin List",
        to: "/plugins",
        icon: <ExtensionOutlinedIcon/>,
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
    useEffect(() => {
        setSelected(path);
    }, [path]);

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
                                <Item key={item.title}
                                      title={item.title}
                                      to={item.to}
                                      icon={item.icon}
                                      selected={selected}
                                      setSelected={setSelected}
                                      isCollapsed={isCollapsed}
                                />
                            ))}
                            {dataItems().map((item) => (
                                <Item key={item.title}
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

                            {pluginItems().map(item => (
                                <Item key={item.title}
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
                                <Item key={item.title}
                                      title={item.title}
                                      to={item.to}
                                      icon={item.icon}
                                      selected={selected}
                                      setSelected={setSelected}
                                      isCollapsed={isCollapsed}
                                />
                            ))}
                        </Box>
                        {!isCollapsed && (
                            <Box sx={{display: "block", marginLeft: "auto", textAlign: "center"}}>
                                <Image
                                    width="100px"
                                    height="100px"
                                    src={`https://mc-heads.net/avatar/BarraR3port`}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        border: "2px solid #fff",
                                        color: colors.blueAccent[200],
                                    }}
                                />
                                <Typography variant="h4" color={colors.blueAccent[600]}>
                                    BarraR3port
                                </Typography>
                            </Box>
                        )}
                    </Box>

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
                  isCollapsed
              }: { title: string; to: string; icon: any; selected: any; setSelected: any; isCollapsed: any; }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (

        <Link href={to === '/admin' ? "" : "/admin" + to}>
            <MenuItem
                style={{color: colors.grey[100]}}
                active={selected === "/admin" + title || selected === "/admin" + to}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                {!isCollapsed && <Typography>{title}</Typography>}

            </MenuItem>
        </Link>

    );
};

export default Sidebar;
