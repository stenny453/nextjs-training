import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
  return (
      <>
        <Head>
            <title>First Blog</title>
        </Head>
        <h1>Première Post</h1>
        <h2>
            <Link href="/">Page d'acccueil</Link>
        </h2>
          <Image src="/images/profile.jpg" height={144} width={144} alt="my profile" />
          
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
    </>
  );
}