import dynamic from "next/dynamic";
import { useMemo } from "react";
export default function Page() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        {
            loading: () => <div className="flex justify-center font-sans text-2xl items-center font-bold h-[100vh]"><p>Loading...</p></div>,
            ssr: false
        }
    ), []);

    return (
        <>
            <Map />
            <footer className="bg-gray-800 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>Powered by <a href="https://www.essamamdani.com" className="underline">Essa Mamdani</a></p>
                    <div className="mt-2">
                        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fessamamdani%2Fgeojson&project-name=geojson&repo-name=geojson" className="inline-block">
                            <img src="https://vercel.com/button" alt="Deploy with Vercel" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}