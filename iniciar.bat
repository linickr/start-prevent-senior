@echo off
echo ============================================
echo  Start Prevent Senior - Inicializando...
echo ============================================
echo.

REM Verificar Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao encontrado!
    echo Instale em: https://nodejs.org
    pause
    exit /b 1
)

REM Verificar se ja tem node_modules
if not exist "node_modules" (
    echo Instalando dependencias... isso pode demorar 1-2 minutos
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERRO] Falha ao instalar dependencias
        pause
        exit /b 1
    )
)

REM Copiar .env se nao existir
if not exist ".env.local" (
    if exist ".env.example" (
        copy .env.example .env.local >nul
        echo Arquivo .env.local criado a partir do .env.example
        echo.
    )
)

echo ============================================
echo  Servidor iniciando em http://localhost:3000
echo  Painel admin em http://localhost:3000/admin
echo  Senha padrao: startcorretora2025
echo ============================================
echo.

call npm run dev
