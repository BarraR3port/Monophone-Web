import {Box, useTheme} from "@mui/material";
import {DataGrid, GridToolbarFilterButton} from "@mui/x-data-grid";
import {tokens} from "../../../styles/theme";
import mongoClient from "../../database/mongodb";
import Header from "../../../components/admin/Header";
import React from "react";
import Image from "next/image";

export async function getServerSideProps() {
    try {
        const client = await mongoClient
        const db = await client.db("yandere")
        const logs: any = await db.collection("logs").find({}).toArray();
        return {props: {isConnected: true, logs: JSON.parse(JSON.stringify(logs))}}
    } catch (e) {
        console.error(e)
        return {props: {isConnected: false, logs: null}}
    }
}

const Logs = (props: any) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "uuid", headerName: "UUID", hide: true},
        {
            field: "avatar",
            headerName: "Avatar",
            renderCell: ({row: {owner}}: any) => {
                return (
                    <Box>
                        <Image
                            alt={owner}
                            width="50px"
                            height="50px"
                            src={`https://mc-heads.net/avatar/${owner}/50`}
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
        {field: "owner", headerName: "Owner"},
        {field: "msg", headerName: "Message"},
        {field: "type", headerName: "Type", hide: true},
        {field: "server", headerName: "Server"},
        {field: "createDate", headerName: "createDate", type: "date"},
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
                        rows={props.logs}
                        experimentalFeatures={{columnGrouping: true, newEditingApi: true}}
                        checkboxSelection
                        disableSelectionOnClick
                        components={{Toolbar: GridToolbarFilterButton}}
                    />
                </Box>
            </Box>
        )
    } else {
        return (<Box>Loading</Box>)
    }

}
export default Logs;








