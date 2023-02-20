# Zuu Front End

## Cài đặt

Chuẩn bị môi trường

```bash
cp .env.example .env
```

Với môi trường phát triển

```bash
cp docker-compose-local.yml docker-compose.override.yml
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
