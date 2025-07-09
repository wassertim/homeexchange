# HomeExchange Guide - Lindau Apartment

A comprehensive guide website for guests staying at our apartment in Lindau, Lake Constance. This site provides essential information about the apartment, local attractions, transportation, and practical tips for an enjoyable stay.

## About

This is a static website built with Eleventy (11ty) that serves as a digital welcome guide for HomeExchange guests. The site includes all the essential information guests need for their stay, from coffee machine instructions to local restaurant recommendations.

## Features

- **Welcome Information**: Essential details about the apartment and stay
- **House Rules**: Guidelines for maintaining the apartment
- **Coffee Machine Guide**: Step-by-step instructions for using the Sage Oracle coffee machine
- **Departure Checklist**: Tasks to complete before leaving
- **Restaurant Recommendations**: Curated list of local dining options
- **Transportation Guide**: Information about trains, boats, and bike rentals
- **Excursions**: Day trips and activities around Lake Constance
- **Practical Information**: Waste disposal, troubleshooting, and emergency contacts

## Technology Stack

- **Static Site Generator**: Eleventy (11ty)
- **Templating**: Nunjucks
- **Styling**: SCSS/CSS with Bootstrap framework
- **JavaScript**: Vanilla JS for interactive elements
- **Deployment**: Static hosting ready

## Project Structure

```
homeexchange/
├── src/
│   ├── _data/           # Global data files
│   ├── _includes/       # Layout templates and components
│   ├── assets/          # CSS, JS, and other static assets
│   ├── images/          # Images and graphics
│   └── en/              # English content pages
├── .eleventy.js         # Eleventy configuration
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Building for Production

Build the static site:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Content Management

### Adding New Pages

1. Create a new `.md` file in the appropriate language directory (`src/en/`)
2. Add the page to the navigation in `src/_data/navigation.js`
3. Include proper front matter with layout, title, and description

### Updating Content

Content is written in Markdown with front matter. Each page includes:
- Layout specification
- Page title and description
- Language code
- Content in Markdown format

## Deployment

This site is designed for static hosting and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Customization

### Styling

- Main styles are in `src/assets/scss/main.scss`
- Uses Bootstrap for responsive design
- Custom styles are organized by component

### Configuration

- Site configuration is in `src/_data/site.js`
- Navigation is configured in `src/_data/navigation.js`
- Eleventy configuration is in `.eleventy.js`

## License

This project is created for personal use as a HomeExchange guest guide. All content is specific to the Lindau apartment and local area recommendations.

## Contact

For questions about the apartment or this guide, please contact Maria & Tim through the HomeExchange platform.