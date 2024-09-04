// src/page.tsx

import dynamic from "next/dynamic";
import { useMemo } from "react";

export default async function Page() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Map'),
        {
            loading: () => <div className="flex justify-center font-sans text-2xl items-center font-bold h-[100vh]"><p>Loading...</p></div>,
            ssr: false
        }
    ), [])

    return (
        <Map />
    )
}