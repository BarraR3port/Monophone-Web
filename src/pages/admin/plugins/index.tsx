import {Box, useTheme} from "@mui/material";
import {DataGrid, GridToolbarColumnsButton} from "@mui/x-data-grid";
import {tokens} from "../../../styles/theme";
import mongoClient from "../../database/mongodb";
import Header from "../../../components/admin/Header";
import React from "react";
import Image from "next/image";

export async function getServerSideProps() {
    try {
        const client = await mongoClient
        const db = await client.db("yandere")
        const plugins: any = await db.collection("plugins").find({}).toArray();
        return {props: {isConnected: true, plugins: JSON.parse(JSON.stringify(plugins))}}
    } catch (e) {
        console.error(e)
        return {props: {isConnected: false, plugins: null}}
    }
}

const Plugins = (props: any) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "uuid", headerName: "UUID", hide: true},
        {
            field: "avatar",
            headerName: "Avatar",
            renderCell: ({row: {uuid}}: any) => {
                return (
                    <Box>
                        <Image
                            alt={"Jar File"}
                            width="50px"
                            height="50px"
                            src={"/svg/java-jar.svg"}
                        />
                    </Box>
                );
            }
        },
        {field: "name", headerName: "Name"},
        {field: "bukkitName", headerName: "Bukkit Name"},
        {field: "version", headerName: "Version", hide: true},
        {field: "fileExtension", headerName: "File Extension", hide: true},
        {field: "fileName", headerName: "File Name", hide: true},
        {field: "hash", headerName: "Hash", hide: true},
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
                        rows={props.plugins}
                        experimentalFeatures={{columnGrouping: true, newEditingApi: true}}
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
export default Plugins;








