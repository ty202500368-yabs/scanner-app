# Scanner App

Scanner App is a modern web-based attendance system designed to simplify class and event check-ins using generated QR codes. It provides a fast, contactless, and organized way for students, participants, or attendees to mark their presence without relying on manual sheets or long queues.

## Overview

This project is built as a React + Vite application and focuses on the user-facing experience of a Smart Attendance System. The platform is intended for universities, seminars, workshops, and other organized events where attendance needs to be recorded quickly and accurately.

## What the system does

- Generates or supports QR-code-based attendance sessions
- Allows attendees to scan a QR code to confirm their presence
- Supports attendance tracking for classes, seminars, and events
- Provides a clean and responsive interface for easy use
- Helps reduce paperwork and improve attendance organization

## Key features

- Fast and contactless attendance check-in
- Suitable for classrooms, university events, and conferences
- Cleaner and more efficient alternative to manual attendance recording
- Responsive layout for desktop and mobile devices
- Easy-to-understand interface for users and organizers

## How it works

1. An organizer creates or opens an attendance session.
2. A QR code is generated for that session.
3. Attendees scan the QR code using a mobile device.
4. Attendance is recorded digitally for the class or event.

## Tech stack

- React.js
- Vite
- Tailwind CSS
- ESLint
- GitHub Pages deployment support

## Project structure

```bash
scanner-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Getting started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd scanner-app
npm install
```

### Run locally

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

## Build for production

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for deployment using GitHub Pages.

To deploy:

```bash
npm run deploy
```

## Future enhancements

Possible improvements for the system include:

- A backend database for storing attendance records
- User authentication for admins and students
- Attendance reports and analytics
- Real-time monitoring of attendance status
- QR code generation and scanning management for multiple sessions

## Live demo

A live demo of the application is available at:

https://ty202500368-yabs.github.io/scanner-app/

## Contact

If you want to improve or extend this project, feel free to contact the development team behind the Smart Attendance System.
