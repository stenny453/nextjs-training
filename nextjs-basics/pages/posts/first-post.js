import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Première Post</h1>
      <h2>
        <Link href="/">Page d'acccueil</Link>
      </h2>
    </>
  );
}