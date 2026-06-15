# Red Light Therapy Lamps

Site e-commerce cu plată MAIB Checkout.

## Structură

```
frontend/   — React + Vite (site-ul, port 8080)
backend/    — Node.js + Express (API plăți, port 3001)
```

## Development local

Deschide **2 terminale**:

**Terminal 1 — backend**
```sh
cd backend
cp .env.example .env   # prima dată: completează credențialele
npm install
npm run dev
```

**Terminal 2 — frontend**
```sh
cd frontend
npm install
npm run dev
```

Site: http://localhost:8080  
API: http://localhost:3001  

Frontend-ul face proxy de la `/api/*` către backend (vezi `frontend/vite.config.ts`).

## Deploy

| Componentă | Unde se deployează |
|---|---|
| `frontend/` | GitHub Pages (static, CI existent) |
| `backend/` | VPS / Railway / Render etc. (Node.js, HTTPS public) |

Variabilele de mediu pentru plăți sunt în `backend/.env.example`.
