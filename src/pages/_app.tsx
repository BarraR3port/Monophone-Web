import {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '../styles/globals.css';
import AdminDashBoard from "../components/admin/AdminBar";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps}: AppProps) {
    const path = useRouter().pathname;
    return (
        <SessionProvider session={pageProps.session}>
            {(path.startsWith("/admin")) ?
                <AdminDashBoard Component={Component} pageProps={pageProps}/> :
                <Component {...pageProps} />}
        </SessionProvider>
    );

}

