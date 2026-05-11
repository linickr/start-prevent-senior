#!/bin/bash

# Script para baixar todas as imagens do WordPress original
# Execute na raiz do projeto: bash scripts/download-images.sh

set -e

DEST="public/images"
mkdir -p "$DEST"

echo "📥 Baixando imagens do site original..."
echo ""

# Lista de imagens identificadas no site
declare -A IMAGES=(
  ["logo-start.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/logo-start-corretora-de-seguros-2-1024x213.png"
  ["logo-start-3.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/logo-start-corretora-de-seguros-3-scaled.png"
  ["prevent-senior.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/prevent-senior-scaled.png"
  ["prevent-senior-2.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/prevent-senior-2-1024x422.png"
  ["start-02.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/START-02-1024x407.png"
  ["favicon.png"]="https://startcorretora.com.br/wp-content/uploads/2025/12/cropped-icone-1-1-270x270.png"
  ["financial-plan.jpg"]="https://startcorretora.com.br/wp-content/uploads/2025/12/making-a-financial-plan-1-150x150.jpg"
  ["woman-budgeting.jpg"]="https://startcorretora.com.br/wp-content/uploads/2025/12/young-beautiful-woman-budgeting-managing-utilities-expenses-writing-financial-plan-1-150x150.jpg"
  ["male-financier.jpg"]="https://startcorretora.com.br/wp-content/uploads/2025/12/handsome-caucasian-male-financier-planning-budget-for-expenses-dating-1-150x150.jpg"
)

for filename in "${!IMAGES[@]}"; do
  url="${IMAGES[$filename]}"
  if curl -sL -f -o "$DEST/$filename" "$url"; then
    size=$(du -h "$DEST/$filename" | cut -f1)
    echo "  ✓ $filename ($size)"
  else
    echo "  ✗ Falhou: $filename"
  fi
done

echo ""
echo "✅ Concluído! Imagens salvas em $DEST/"
echo ""
echo "📝 Próximo passo: para usar as imagens locais ao invés das URLs do WP,"
echo "   rode: bash scripts/use-local-images.sh"
