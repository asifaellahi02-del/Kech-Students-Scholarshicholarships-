# Kech Students Scholarships — Updated Milestone 1

A MERN foundation for a scholarship discovery platform starting in Kech/Turbat and intended to expand across Balochistan.

## What is included

### Frontend
- React 18 + Vite
- Tailwind CSS v4
- Responsive landing page and mobile navigation
- Scholarship search and category filtering
- Axios API service
- Demo fallback when the backend is unavailable
- Clear labels distinguishing demo content from approved listings

### Backend
- Node.js + Express
- MongoDB + Mongoose connection
- Helmet, CORS, rate limiting, and request logging
- Health-check endpoint
- Scholarship model and public listing endpoint
- Public endpoint returns only `approved` and non-demo records
- Centralized error handling

## Important project status

This ZIP is an improved **Milestone 1 foundation**, not a complete production platform. It does not yet include user registration, login, student dashboards, admin dashboard, application submissions, document uploads, notifications, multilingual translations, or AI features. These should be added in later milestones with proper testing and security.

No real scholarship is included. The local cards are sample demonstration records and must not be presented as genuine opportunities.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- MongoDB Atlas account or local MongoDB
- VS Code or another code editor

## Setup

### 1. Configure the backend

Open a terminal in the project root:

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and set your own MongoDB connection string:

```env
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER/kech_scholarships
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Do not commit `.env` or share your database password.

Start the backend:

```bash
npm run dev
```

The API should run at `http://localhost:5000`.

Check:
- `http://localhost:5000/`
- `http://localhost:5000/api/health`
- `http://localhost:5000/api/scholarships`

### 2. Start the frontend

Open a second terminal in the project root:

```bash
cd client
npm install
```

Create `client/.env` from `client/.env.example` if you need a different API URL.

Start Vite:

```bash
npm run dev
```

Open `http://localhost:5173`.

## API

### `GET /api/health`
Reports whether MongoDB is connected.

### `GET /api/scholarships`
Returns published scholarship records only.

Optional query parameters:
- `search`: matches title, provider, location, or description
- `category`: category name, or `All`
- `location`: location text

Examples:

```text
GET /api/scholarships?search=undergraduate
GET /api/scholarships?category=Need-Based
GET /api/scholarships?location=Kech
```

A record is visible publicly only when:
- `status` is `approved`
- `isDemo` is `false`

There is intentionally no public create/update/delete endpoint in this milestone. Admin authentication and authorization must be implemented before adding those actions.

## Folder structure

```text
kech-students-scholarships/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scripts/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
└── README.md
```

## Recommended next milestone

Build authentication and role-based dashboards for Students, Admins, Scholarship Providers, and University Representatives. Never allow public registration to grant Admin permissions. Then build the admin review workflow before allowing scholarship publishing.
