import geojsonhint from '@mapbox/geojsonhint';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    const json = await req.json();
    
    const { geoJSON } = json;
    try {
        const errors = geojsonhint.hint(geoJSON);
        return NextResponse.json({
            json,
            errors
        })
    } catch(e){
        return NextResponse.json({
            errors:e
        })

    }

}
