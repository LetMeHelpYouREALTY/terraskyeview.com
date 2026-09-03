#!/usr/bin/env bash
# Upload git-backed originals to Cloudflare R2 (primary CDN).
# Requires: CLOUDFLARE_API_TOKEN, wrangler auth, bucket terraskyeview-media
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUCKET="${R2_BUCKET:-terraskyeview-media}"

shopt -s nullglob
for file in "$ROOT"/public/images/* "$ROOT"/public/og-image.jpg; do
  [ -f "$file" ] || continue
  key="$(basename "$file")"
  echo "put ${BUCKET}/${key}"
  npx wrangler r2 object put "${BUCKET}/${key}" --file="$file" --content-type="$(file --mime-type -b "$file")"
done
