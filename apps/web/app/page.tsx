import Image from "next/image";

export const dynamic = 'force-dynamic';

async function getArtworks() {
  const baseUrl = process.env.API_URL || 'http://localhost:4000';
  const res = await fetch(`${baseUrl}/artworks`, {
    cache: 'no-store',
  });

  if(!res.ok) {
    throw new Error('Failed to fetch artworks');
  }

  return res.json();
}

export default async function Home() {
  const artworks = await getArtworks();

  return (
    <main>
      <h1>Galeria</h1>
      <ul>
        {artworks.map((a: any) => (
          <li key={a.id}>
            {a.title} - ${a.price}
          </li>
        ))}
      </ul>

    </main>
  );
}
