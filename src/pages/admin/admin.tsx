import {NextPage} from 'next';
import {AppProps} from 'next/app';
import Admin from '.';

const AdminPage: NextPage<AppProps> = ({Component, pageProps}) => {
    return (
        // @ts-ignore
        <Admin Component={Component} pageProps={pageProps}/>

    )
}

export default AdminPage
