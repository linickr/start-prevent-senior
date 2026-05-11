#!/bin/bash

echo "============================================"
echo " Start Prevent Senior - Inicializando..."
echo "============================================"
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "[ERRO] Node.js não encontrado!"
    echo "Instale em: https://nodejs.org"
    exit 1
fi

# Instalar dependências se não existir
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências... isso pode demorar 1-2 minutos"
    echo ""
    npm install
    if [ $? -ne 0 ]; then
        echo ""
        echo "[ERRO] Falha ao instalar dependências"
        exit 1
    fi
fi

# Copiar .env se não existir
if [ ! -f ".env.local" ] && [ -f ".env.example" ]; then
    cp .env.example .env.local
    echo "Arquivo .env.local criado a partir do .env.example"
    echo ""
fi

echo "============================================"
echo " Servidor iniciando em http://localhost:3000"
echo " Painel admin em http://localhost:3000/admin"
echo " Senha padrão: startcorretora2025"
echo "============================================"
echo ""

npm run dev
