import Link from 'next/link';

export default function AdminPage() {
    return (
        <main className="mx-auto max-w-4xl p-6">
            
            <h1 className="text-3xl font-bold">Administración</h1>

            <div className="mt-6">
                <Link
                    href="/admin/artworks"
                    className="rounded-md bg-black px-4 py-2 text-white"
                >
                    Gestionar obras
                </Link>
            </div> 
        </main>
    );
}