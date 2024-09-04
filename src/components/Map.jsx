'use client';
import { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';

import { sampleGeoJSON } from '@/libs/data';

const Map = () => {
  const [geoJSONText, setGeoJSONText] = useState("");
  const [clearCurrent, setClearCurrent] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [doUpdate, setDoUpdate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    Point: false,
    LineString: false,
    Polygon: false,
    Feature: false,
    GeometryCollection: false,
  });

  const closeAllDropdowns = () => {
    setDropdownOpen({
      Point: false,
      LineString: false,
      Polygon: false,
      Feature: false,
      GeometryCollection: false,
    });
  };

  const toggleDropdown = (menu) => {
    closeAllDropdowns();
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleGeoJSONChange = (event) => {
    setGeoJSONText(event.target.value);
  };

  const handleClearCurrentChange = (event) => {
    setClearCurrent(event.target.checked);
  };

  const handleTestGeoJSON = async () => {
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ geoJSON: geoJSONText }),
      });

      const data = await response.json();

      if (data.errors.length > 0) {
        const errorMessage = data.errors
          .map((error) => `Line ${error.line}: ${error.message}`)
          .join('<br>');
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage('');
        if (clearCurrent) {
          setGeoJSONText('');
        }
        setDoUpdate(true);
      }
    } catch (error) {
      console.error('Error validating GeoJSON:', error);
      setErrorMessage(
        'An error occurred while validating the GeoJSON. Please check your input.'
      );
    }
  };

  const handleClearGeoJSON = () => {
    setGeoJSONText('');
  };

  const displayGeoJSONType = (geoJSONType) => {
    setGeoJSONText(JSON.stringify(sampleGeoJSON[geoJSONType], null, 4));
    setDoUpdate(true);
  };

  const MyGeoJSONLayer = () => {
    const map = useMap();
    if (geoJSONText) {
      const geoJSON = JSON.parse(geoJSONText);
      map.fitBounds(new L.GeoJSON(geoJSON).getBounds());
      return <GeoJSON data={geoJSON} />;
    }
    return null;
  };

  return (
    <div>
     <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-gray-800 font-semibold text-xl">GeoJSONLint</div>
          <div className="space-x-4 flex flex-wrap items-center">
            {/* Point Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => toggleDropdown('Point')}
                  className="text-gray-800 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none"
                >
                  Point
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen.Point && (
                <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[99999999]">
                  <div className="py-1">
                    <button
                      onClick={() => displayGeoJSONType('Point')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      Point
                    </button>
                    <button
                      onClick={() => displayGeoJSONType('MultiPoint')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      MultiPoint
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* LineString Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => toggleDropdown('LineString')}
                  className="text-gray-800 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none"
                >
                  LineString
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen.LineString && (
                <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[99999999]">
                  <div className="py-1">
                    <button
                      onClick={() => displayGeoJSONType('LineString')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      LineString
                    </button>
                    <button
                      onClick={() => displayGeoJSONType('MultiLineString')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      MultiLineString
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Polygon Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => toggleDropdown('Polygon')}
                  className="text-gray-800 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none"
                >
                  Polygon
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen.Polygon && (
                <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[99999999]">
                  <div className="py-1">
                    <button
                      onClick={() => displayGeoJSONType('Polygon')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      Polygon
                    </button>
                    <button
                      onClick={() => displayGeoJSONType('MultiPolygon')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      MultiPolygon
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feature Dropdown */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => toggleDropdown('Feature')}
                  className="text-gray-800 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none"
                >
                  Feature
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen.Feature && (
                <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[99999999]">
                  <div className="py-1">
                    <button
                      onClick={() => displayGeoJSONType('Feature')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      Feature
                    </button>
                    <button
                      onClick={() => displayGeoJSONType('FeatureCollection')}
                      className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                    >
                      FeatureCollection
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* GeometryCollection Button */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  onClick={() => { closeAllDropdowns(); displayGeoJSONType('GeometryCollection') }}
                  className="text-gray-800 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-100 focus:outline-none"
                >
                  GeometryCollection
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4 px-4">
        <p className="mb-4">
          Use this site to validate and view your GeoJSON. For details about GeoJSON,{' '}
          <a
            href="https://tools.ietf.org/html/rfc7946"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className="text-blue-500 underline"
          >
            read the spec
          </a>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <textarea
              id="geojson-input"
              placeholder="Paste GeoJSON here"
              className="form-control w-full mb-2 p-2 border border-gray-300 rounded text-black h-96"
              value={geoJSONText}
              onChange={handleGeoJSONChange}
            />

            <div className="mb-2 flex items-center">
              <input
                id="clear-current"
                type="checkbox"
                checked={clearCurrent}
                onChange={handleClearCurrentChange}
                className="mr-2"
              />
              <label htmlFor="clear-current" className="text-gray-700">
                Clear Current Features
              </label>
            </div>

            <div className="flex space-x-2">
              <button
                id="submit"
                className="btn bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleTestGeoJSON}
              >
                Test GeoJSON
              </button>
              <button
                id="clear"
                className="btn bg-gray-300 text-gray-800 py-2 px-4 rounded"
                onClick={handleClearGeoJSON}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="col-span-2">
            <MapContainer center={[37.92686, -96.76757]} zoom={4} style={{ height: "384px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {doUpdate && <MyGeoJSONLayer />}
            </MapContainer>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-[9999999]">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-900">Invalid JSON</h3>
              <p className="text-gray-700">{errorMessage}</p>
            </div>
            <div className="px-6 py-4 bg-gray-100 text-right">
              <button
                className="btn bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setErrorMessage('')}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Map;