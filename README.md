# Wayne Enterprises Dashboard

A full-stack business intelligence dashboard for Wayne Enterprises, featuring a FastAPI backend and a Next.js frontend. The dashboard visualizes key financial, HR, and operational metrics for executive decision-making.

---

## Project Structure

```
wayne-enterprises-dashboard-react/
  backend/         # FastAPI backend (API, data processing)
  frontend-next/   # Next.js frontend (dashboard UI)
```

---

## Setup Instructions

### 1. Backend (FastAPI)

```bash
cd backend
# (Optional) Create a virtual environment
# python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload --port 8000
```

- The backend will be available at http://127.0.0.1:8000
- API docs: http://127.0.0.1:8000/docs

### 2. Frontend (Next.js)

```bash
cd frontend-next
npm install
npm run dev
```

- The frontend will be available at http://localhost:3000 (default Next.js port)

---

## Features
- Executive summary with live metrics
- Revenue trends and profit charts
- Department performance and employee distribution
- Data narrative section with headline and supporting visualization
- Professional, executive-ready UI (Tailwind CSS)
- Server-side rendering and optimized performance with Next.js

---

## Data
- Sample/mock data is located in `backend/data/` as CSV files.
- The backend processes and serves analytics via API endpoints.

---

## API Endpoints
- `/summary` — Key metrics (revenue, profit, employees, avg salary)
- `/revenue-trends` — Revenue and profit over years
- `/department-performance` — Department KPIs
- `/employee-distribution` — Employee counts per department
- `/data-narrative` — Headline, narrative, and supporting data

---

## Development Notes
- For rapid prototyping, CORS is enabled for all origins (update for production).
- To change mock data, edit the CSVs in `backend/data/` and restart the backend.
- The dashboard is accessible at `/dashboard` route in the Next.js app.

---

## License
Fictional project for demonstration purposes only.
