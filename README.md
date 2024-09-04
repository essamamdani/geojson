# GeoJSON Viewer with Leaflet Integration

## Overview

This repository hosts a Next.js 14 application for visualizing and validating GeoJSON data using React and the Leaflet library. The application provides a seamless interface for users to interact with GeoJSON data types, such as Points, LineStrings, and Polygons, on an interactive map rendered with OpenStreetMap tiles.

## Features

- **GeoJSON Input:** Input GeoJSON data via a text area to visualize on the map.
- **Dynamic Map Interaction:** Render GeoJSON features on an interactive map powered by Leaflet and OpenStreetMap.
- **Type Selection:** Easily switch between different GeoJSON types (Point, LineString, Polygon, etc.) via dropdown menus.
- **Property Popups:** Display feature properties in popups on the map.
- **Validation Feedback:** Validate GeoJSON data with real-time error messages.
- **Clear Map Features:** Option to clear existing features before rendering new data.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine. [Download Node.js](https://nodejs.org/).
- **npm** or **yarn**: This project uses npm or yarn for dependency management.


### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fessamamdani%2Fgeojson&project-name=geojson&repo-name=geojson)

### Installation

1. **Clone the Repository**: Clone this repository to your local machine.

   ```bash
   git clone https://github.com/essamamdani/geojson.git
   cd geojson
   ```

2. **Install Dependencies**: Install the necessary dependencies.

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the Next.js development server, use:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This command generates an optimized build of your application in the `.next` folder.

### Deployment

This Next.js app can be deployed to platforms like Vercel, Netlify, or any hosting provider that supports Node.js applications. If deploying to Vercel, no additional configuration is needed; simply push your repository, and Vercel will handle the rest.

### Usage

1. **Input GeoJSON**: Paste your GeoJSON data into the text area provided.
2. **Select GeoJSON Type**: Use the dropdown menus to select the GeoJSON type you wish to visualize.
3. **Test GeoJSON**: Click the "Test GeoJSON" button to validate and render the data on the map.
4. **Clear Data**: Use the "Clear" button to remove the current GeoJSON data.

### Built With

- **Next.js**: A React framework for building fast and scalable web applications.
- **React**: A JavaScript library for building user interfaces.
- **Leaflet**: A leading open-source JavaScript library for interactive maps.
- **OpenStreetMap**: A free, editable map of the world that provides the tile layer for the map.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**: Fork this repo to your own GitHub account.
2. **Create a feature branch**: Create a new branch for your feature or bugfix (`git checkout -b feature/your-feature`).
3. **Commit your changes**: Commit your changes to the branch (`git commit -m 'Add some feature'`).
4. **Push to GitHub**: Push your changes to GitHub (`git push origin feature/your-feature`).
5. **Open a Pull Request**: Submit a pull request to the main branch for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **Leaflet Documentation**: [Leaflet Documentation](https://leafletjs.com/documentation.html) for guidance on map integration.
- **GeoJSON Specification**: [GeoJSON Spec](https://tools.ietf.org/html/rfc7946) for the standard format used.
- **OpenStreetMap**: [OpenStreetMap](https://www.openstreetmap.org/) for providing the map tiles used in this project.
- **Next.js**: [Next.js Documentation](https://nextjs.org/docs) for documentation on the framework.