import Image from "next/image";

async function getArtworks() {
  const res = await fetch('http://localhost:4000/artworks');
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
