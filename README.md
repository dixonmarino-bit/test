# Zendesk Metrics Board (base)

API + Frontend simple con FastAPI para exponer localhost con **ngrok**.

## Ejecutar local

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Abrir `http://localhost:8000`.

## Endpoint de prueba

- `GET /api/status` devuelve:

```json
{"message": "corriendo en ngrok"}
```

## Exponer con ngrok

En otra terminal:

```bash
ngrok http 8000
```

Usa la URL HTTPS de ngrok para compartir el tablero.

> Nota: si ya tienes un `.env` con credenciales, no hace falta tocarlo para este MVP.
