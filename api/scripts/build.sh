#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
API_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${API_DIR}"

echo "Building API from ${API_DIR}..."

if [[ -x "./mvnw" ]]; then
  ./mvnw clean package
else
  mvn clean package
fi

echo "API build complete."