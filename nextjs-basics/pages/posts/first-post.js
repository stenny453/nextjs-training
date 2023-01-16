import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
      <Layout>
        <Head>
            <title>First Blog</title>
        </Head>
        <h1>Première Post</h1>        
          {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
            /> */}
    </Layout>
  );
}