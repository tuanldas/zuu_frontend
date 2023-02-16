# Zuu Front End

## Cài đặt

Chuẩn bị môi trường

```bash
cp .env.example .env
```

Build Docker images and containers

```bash
docker compose build
docker compose up --no-start
```

Chạy dịch vụ

```bash
docker compose up -d
```

Copy node_modules ra môi trường dev

```bash
docker compose cp app:/app/node_modules ./
```
