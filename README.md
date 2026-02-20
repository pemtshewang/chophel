# Chöpel Library

A comprehensive Tibetan Prayer Library application built with a **Next.js** frontend and a **Go** backend. This project provides an immersive experience for browsing, reading, and practicing Tibetan prayers and mantras.

## 🏗️ Architecture

The project is structured as a decoupled application:
- **`/frontend`**: Next.js 15 application utilizing the App Router, Tailwind CSS, and React 19.
- **`/backend`**: Go-based REST API serving prayer data, categories, and deity information.

## ✨ Features

- **Prayer Browser**: Searchable and categorizable list of prayers with lineage and estimated reading duration.
- **Immersive Reader**: Support for multiple themes ("Ivory" and "Monastery") and language toggles (Tibetan Script, Phonetic, and English Translation).
- **Mala Counter**: Integrated digital bead counter with "Dedicate" functionality to track your practice.
- **Categories & Deities**: Explore prayers organized by lineage, ritual type, or specific deities (e.g., Medicine Buddha, Tara).
- **Personal Library**: Save prayers to your "My Book" collection for quick access.
- **Custom Design System**: Meticulously crafted UI using Tibetan typography (`Noto Serif Tibetan`) and a sacred color palette.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Go](https://golang.org/) (v1.20+)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the server:
   ```bash
   go run .
   ```
   The API will be available at `http://localhost:8080`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS.
- **Backend**: Go (Standard Library).
- **Icons**: Material Symbols Outlined.
- **Fonts**: Noto Serif Tibetan, Noto Serif, Noto Sans.

## 🧪 Testing

- **Backend**: Run Go unit tests with `go test ./...` in the `/backend` directory.
- **Frontend**: Run build checks with `npm run build` in the `/frontend` directory.
