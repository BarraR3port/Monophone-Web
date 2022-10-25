import {Box} from "@mui/material";
import Header from "../../components/admin/Header";


const Dashboard = () => {

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Main Dashboard" subtitle="Admin dashboard"/>
            </Box>
        </Box>
    );

}

export default Dashboard;
