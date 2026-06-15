# Portfolio-2

A personal developer portfolio built with React and Vite. This project showcases a modern landing experience, project highlights, skills, and a contact form that sends email via EmailJS.

## Live Demo

> Add your deployed portfolio URL here once the site is live.

## Repository

- Source: https://github.com/AnuragA1727/Portfolio-2

## Overview

This portfolio includes:

- Animated hero section with typed role titles
- About section describing skills and learning goals
- Skills section grouped by front-end, back-end, database, and tools
- Project cards linking to live project demos
- Contact section with a working email form powered by EmailJS
- Smooth motion and scroll-based animations with Framer Motion

## Features

- Responsive design for desktop and mobile
- Interactive project cards with live demo links
- Animated text effect using Typed.js
- Contact form with EmailJS integration
- Clean React component structure and CSS styling

## Technologies

- React 19
- Vite
- Framer Motion
- Typed.js
- EmailJS Browser SDK
- React Icons
- HTML5 / CSS3 / JavaScript

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal to view the portfolio in your browser.

### Build for production

```bash
npm run build
```

## Environment Variables

This project uses EmailJS environment variables for the contact form.

Create a `.env` file at the project root and add the following values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

- `src/App.jsx` — top-level page layout and section order
- `src/components/Hero` — landing section with typed animation
- `src/components/About` — about section and experience summary
- `src/components/Skills` — skill categories and technology list
- `src/components/Projects` — featured project cards and links
- `src/components/Contact` — email contact form and social links
- `src/components/Footer` — footer content

## Contact

Connect with me through the portfolio contact form, or use the following links:

- GitHub: https://github.com/AnuragA1727
- LinkedIn: https://www.linkedin.com/in/anurag-arora-b4a151192/
- Email: anurag.arora1727@gmail.com

## Notes

Update the live demo section when the portfolio is deployed, and verify EmailJS credentials before testing the contact form.
