import {Box, Typography, useTheme} from "@mui/material";
import {DataGrid, GridToolbarColumnsButton} from "@mui/x-data-grid";
import {tokens} from "../../../styles/theme";
import mongoClient from "../../database/mongodb";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import Header from "../../../components/admin/Header";
import React from "react";
import Image from "next/image";

export async function getServerSideProps() {
    try {
        const client = await mongoClient
        const db = await client.db("yandere")
        const users: any = await db.collection("players").find({}).toArray();
        return {props: {isConnected: true, users: JSON.parse(JSON.stringify(users))}}
    } catch (e) {
        console.error(e)
        return {props: {isConnected: false, users: null}}
    }
}

const Users = (props: any) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "uuid", headerName: "UUID", hide: true},
        {
            field: "avatar",
            headerName: "Avatar",
            renderCell: ({row: {name}}: any) => {
                return (
                    <Box>
                        <Image
                            alt={name}
                            width="50px"
                            height="50px"
                            src={`https://mc-heads.net/avatar/${name}/50`}
                            style={{
                                cursor: "pointer",
                                border: "2px solid #fff",
                                color: colors.blueAccent[200],
                            }}
                        />
                    </Box>
                );
            }
        },
        {field: "name", headerName: "Name"},
        {field: "address", headerName: "Address", hide: true},
        {
            field: "rank",
            headerName: "Rank",
            editable: true,
            renderCell: ({row: {rank}}: any) => {
                // @ts-ignore
                return <Box
                    width={"60%"}
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        rank === "ADMIN" ? colors.redAccent[500] : null
                    }
                    borderRadius="4px"
                >
                    <Typography>
                        {rank === "ADMIN" && <AdminPanelSettingsOutlinedIcon/>}
                        {rank !== "ADMIN" && rank}
                    </Typography>
                </Box>


            }
        },
        {field: "rewards", headerName: "rewards"},
        {field: "coins", headerName: "coins"},
        {field: "level", headerName: "level"},
        {field: "createDate", headerName: "createDate", type: "date"},
        {field: "punishments", headerName: "punishments"},
    ]

    if (props.isConnected) {
        return (
            <Box m={"20px"}>
                <Header title="Index" subtitle="Manage your staff members"/>
                <Box m={"40px 0 0"}
                     height={"75vh"} sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[800],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[800]
                    },
                    "& .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                        color: colors.blueAccent[100]
                    },
                }}>
                    <DataGrid
                        getRowId={(row: any) => row._id}
                        columns={columns}
                        rows={props.users}
                        experimentalFeatures={{columnGrouping: true, newEditingApi: true}}
                        checkboxSelection
                        disableSelectionOnClick
                        components={{Toolbar: GridToolbarColumnsButton}}
                    />
                </Box>
            </Box>
        )
    } else {
        return (<Box>Loading</Box>)
    }

}
export default Users;








