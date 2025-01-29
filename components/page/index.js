import Head from 'next/head';
import Navigation from '../../components/navigation';



const Page = ({ children }) => (
    <div>
        <Head>
            <link rel="icon" href="../logo2.png" />
        </Head>
        <div className="h-full flex flex-col">
            <Navigation />
            {children}
        </div>
    </div>
);

export default Page;
