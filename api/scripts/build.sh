#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
API_DIR="$ROOT_DIR/api"

cd "$API_DIR"

echo "Building API jar..."

mvn clean package

echo "Done."
echo "Jar output:"
ls -1 target/*.jar