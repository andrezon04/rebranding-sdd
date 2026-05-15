# SdD - Suporte de Domingo

A modern React project built with Vite for a responsive web application.

## Project Structure

```
rebranding-sdd/
├── public/                 # Static assets served directly
│   └── assets/
│       └── icons/         # SVG icons
├── src/                    # Source code
│   ├── components/        # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── MainContent.jsx
│   │   └── MainContent.css
│   ├── styles/           # Global styles
│   │   ├── global.css
│   │   └── reset.css
│   ├── App.jsx           # Main App component
│   ├── App.css
│   ├── main.jsx          # React entry point
│   └── index.css         # Global index styles
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── .eslintrc.cjs         # ESLint configuration
```

## Getting Started

### Installation

Install dependencies using npm:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`.

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Features

- ⚡ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Modern UI library
- 🎨 **CSS Modules** - Component-scoped styling
- 📱 **Responsive Design** - Mobile-friendly layout
- 🎯 **ESLint** - Code quality checking

## Design System

The project uses a custom design system with CSS variables:

- **Primary Color**: `#EBEBFF` (Light)
- **Secondary Color**: `#677BE5` (Blue)
- **Contrast Color**: `#FF7375` (Red)
- **Font**: Arima (Google Fonts)

### Font Weights

- `--font-thin`: 100
- `--font-regular`: 400
- `--font-medium`: 500
- `--font-bold`: 700

## Migration Notes

This project was converted from a static HTML website to a modern React + Vite application. The original HTML structure was refactored into reusable React components:

- **Header Component**: Manages navigation and social links
- **MainContent Component**: Displays main page content

Assets remain organized in the `public/` directory for easy static serving.
