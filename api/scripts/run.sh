#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
API_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${API_DIR}"

echo "Starting API..."

if [[ -x "./mvnw" ]]; then
  ./mvnw spring-boot:run
else
  mvn spring-boot:run
fi