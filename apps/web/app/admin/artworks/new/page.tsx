import Link from 'next/link';
import { ArtworkForm } from '@/components/admin/artwork-form';

export default function NewArtworkPage() {
    return (
        <main className="mx-auto max-w-4xl p-6">
            <div className="mb-6">
                <Link href="/admin/artworks" className="text-sm text-gray-600 underline">
                    ← Volver al listado
                </Link>
            </div>
            
            <h1 className="md-2 text-3xl font-bold">Nueva Obra</h1>
            <p className="mb-8 text-gray-600">
                Completá los datos para crear una nueva obra.
            </p>
            
            <ArtworkForm />
        </main>
    );
}