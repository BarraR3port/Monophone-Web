import {CssBaseline, ThemeProvider} from "@mui/material";
import TopBar from "./TopBar";
import {ColorModeContext, useMode} from "../../styles/theme";
import Sidebar from "./Sidebar"
import {useSession} from "next-auth/react"
/* import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import From from "./scenes/from";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar"; */
import {useState} from 'react';
import {useRouter} from 'next/router';
import {NextPage} from "next";
import {AppProps} from "next/app";

const AdminDashBoard: NextPage<AppProps> = ({Component, pageProps}) => {
    const router = useRouter();
    const path = router.pathname;
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(false);
    const {data: session, status} = useSession()
    const loading = status === 'loading'
    if (loading) {
        return null;
    }
    if (!session && !loading) {
        router.push('/api/auth/signin');
        return null;
    } else {
        return <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Sidebar isSidebar={isSidebar} path={path}/>
                    <main className="content">
                        <TopBar/>
                        <Component {...pageProps} />

                        {

                            /*             <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/from" element={<From />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
              */}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    }
};

export default AdminDashBoard;


