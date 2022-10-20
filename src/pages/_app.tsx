import {NextPage} from 'next';
import {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '../styles/globals.css';
import AdminPage from './admin/admin';

const MyApp: NextPage<AppProps> = ({Component, pageProps, router}) => {
    const path = useRouter().pathname;
    if (path.startsWith("/admin")) {
        return (<AdminPage Component={Component} pageProps={pageProps} router={router}/>);
    } else {
        return (<Component {...pageProps} />)
    }
}

export default MyApp
