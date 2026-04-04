#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

docker compose -f "$ROOT_DIR/docker/compose/docker-compose.yml" down || true
docker compose -f "$ROOT_DIR/docker/compose/docker-compose.dev.yml" down || true

echo "Stopped all homelab playground containers."