'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createArtwork } from '@/services/artworks';
import { CreateArtworkInput } from '@/types/artwork';

const initialForm: CreateArtworkInput = {
    slug: '',
    title: '',
    description: '',
    price: 0,
    currency: 'UYU',
    widthCm: 1,
    heightCm: 1,
    technique: '',
    collection: '',
    images: [],
    available: true,
    featured: false,
};

export  function ArtworkForm() {
    const router = useRouter();

    const [form, setForm] = useState<CreateArtworkInput>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function updateField<K extends keyof CreateArtworkInput>(
        field: K,
        value: CreateArtworkInput[K],
    ) {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            await createArtwork(form);
            router.push('/admin/artworks');
            router.refresh();
        } catch(err) {
            setError(
                err instanceof Error ? err.message : 'Ocurrió un error inesperado',
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium">Slug</label>
                    <input
                        value={form.slug}
                        onChange={(e) => updateField('slug', e.target.value)}
                        className="w-full rounded-md border p3"
                        placeholder="foto-obra"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">Título</label>
                    <input
                        value={form.title}
                        onChange={(e) => updateField('title', e.target.value)}
                        className="w-full rounded-md border p-3"
                        placeholder="Titulo obra"
                    />
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium">Descripción</label>
                <textarea
                    value={form.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    className="min-h-32 w-full rounded-md border p-3"
                    placeholder="Descripción de la obra"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium">Precio</label>
                    <input
                        type="number"
                        value={form.price}
                        onChange={(e) => updateField('price', Number(e.target.value))}
                        className="w-full rounded-md border p-3"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">Moneda</label>
                    <select
                        value={form.currency}
                        onChange={(e) =>
                            updateField('currency', e.target.value as 'UYU' | 'USD')
                        }
                        className="w-full rounded-md border p-3"
                    >
                        <option value="UYU">UYU</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-1 block text-sm font-medium">Ancho (cm)</label>
                    <input
                        type="number"
                        value={form.widthCm}
                        onChange={(e) => updateField('widthCm', Number(e.target.value))}
                        className="w-full rounded-md border p-3"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium">Alto (cm)</label>
                    <input
                        type="number"
                        value={form.heightCm}
                        onChange={(e) => updateField('heightCm', Number(e.target.value))}
                        className="w-full rounded-md border p-3"
                    />
                </div>

                
            </div>

            <div>
                <div className="grid gap-4 md:grid-cols-2">
                    <label className="mb-1 block text-sm font-medium">Colección</label>
                    <input 
                        value={form.collection}
                        onChange={(e) => updateField('collection', e.target.value)}
                        className="w-full rounded-md border p-3"
                        placeholder="Abstractos"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium">Técnica</label>
                    <input 
                        value={form.technique}
                        onChange={(e) => updateField('technique', e.target.value)}
                        className="w-full rounded-md border p-3"
                        placeholder="Acuarela, óleo, etc."
                    />
                </div>
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium">URL de imagen</label>
                <input
                    value={form.images[0] ?? ''}
                    onChange={(e) => updateField('images', [e.target.value])}
                    className="w-full rounded-md border p-3"
                    placeholder="https://ejemplo.com/imagen.jpg"
                />
            </div>

            <div className="flex gap-6">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={form.available}
                        onChange={(e) => updateField('available', e.target.checked)}
                    />
                    Disponible
                </label>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) => updateField('featured', e.target.checked)}
                    />
                    Destacada
                </label>
            </div>

            {error ? (
                <div className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                    {error}
                </div>
            ) : null}

            <button
                type="submit"
                className="rounded-md bg-black px-5 py-3 text-white disabled:opacity-60"
            >
                {isSubmitting ? 'Guardando...' : 'Guardar obra'}
            </button>
        </form>
    );
}