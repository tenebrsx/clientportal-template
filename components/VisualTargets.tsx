'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'bs_visual_refs_v1';

export default function VisualTargets() {
    const [images, setImages] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            try {
                setImages(JSON.parse(storedData));
            } catch (e) {
                console.error('Failed to parse images', e);
            }
        }
        setIsLoaded(true);
    }, []);

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files?.length) return;

        const readers = Array.from(files).map(file => new Promise<string>(resolve => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target?.result as string);
            reader.readAsDataURL(file);
        }));

        const results = await Promise.all(readers);
        const newData = [...images, ...results];

        setImages(newData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));

        // Reset input
        event.target.value = '';
    };

    const removeRef = (index: number) => {
        const newData = [...images];
        newData.splice(index, 1);
        setImages(newData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    };

    if (!isLoaded) return null;

    return (
        <section className="max-w-7xl mx-auto mb-40 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-8 border-b border-accent/20 pb-4">
                <h3 className="text-xs font-bold text-accent">[ VISUAL TARGETS - REFERENCIAS ]</h3>

                <label className="cursor-pointer text-[10px] hover:bg-accent hover:text-black px-3 py-1 transition-colors">
                    <input type="file" accept="image/*" multiple className="hidden" onChange={handleImageUpload} />
                    [ + UPLOAD ]
                </label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.length === 0 ? (
                    <div className="col-span-full border border-accent/20 border-dashed p-12 text-center">
                        <p className="text-[10px] text-accent/50">NO DATA</p>
                    </div>
                ) : (
                    images.map((imgData, index) => (
                        <div key={index} className="aspect-video relative group overflow-hidden bg-zinc-900 border border-zinc-800">
                            <img
                                src={imgData}
                                alt={`Reference ${index + 1}`}
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="monospaced-metadata text-[8px] text-white">REF_0{index + 1}</p>
                            </div>
                            <button
                                onClick={() => removeRef(index)}
                                className="absolute top-2 right-2 bg-black text-white hover:bg-accent w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 cursor-pointer"
                            >
                                <span className="monospaced-metadata text-[10px]">✕</span>
                            </button>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
