#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MODE="${1:-prod}"

if [[ "$MODE" != "prod" && "$MODE" != "dev" ]]; then
  echo "Usage: ./run.sh [prod|dev]"
  exit 1
fi

if [[ "$MODE" == "prod" ]]; then
  COMPOSE_FILE="$ROOT_DIR/docker/compose/docker-compose.yml"
  UI_URL="http://localhost:3000"
else
  COMPOSE_FILE="$ROOT_DIR/docker/compose/docker-compose.dev.yml"
  UI_URL="http://localhost:5173"
fi

echo "Using compose file: $COMPOSE_FILE"

docker compose -f "$COMPOSE_FILE" up --build -d

gnome-terminal \
  --tab --title="Homelab Compose Logs" -- bash -c "cd \"$ROOT_DIR\" && docker compose -f \"$COMPOSE_FILE\" logs -f; exec bash" \
  --tab --title="Homelab Container Status" -- bash -c "watch -n 2 docker ps; exec bash" \
  --tab --title="Homelab URLs" -- bash -c "echo 'UI: $UI_URL'; echo 'API: http://localhost:8080/api/info'; exec bash"

echo "Started in $MODE mode."
echo "UI: $UI_URL"
echo "API: http://localhost:8080/api/info"