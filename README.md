# RHorizon (Beta)

App de candidature simple.

## Lancement rapide

```bash
docker-compose up --build
```

Accès :
- Frontend : http://localhost:3000
- Backend : http://localhost:3001/api/candidate

Créer la table PostgreSQL manuellement :
```sql
CREATE TABLE candidates (id SERIAL PRIMARY KEY, name TEXT, email TEXT, filename TEXT);
```
