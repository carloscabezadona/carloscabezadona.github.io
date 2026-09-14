@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo  Pega la URL del repositorio que has creado en GitHub
echo  (ejemplo: https://github.com/tuusuario/tuusuario.github.io.git)
echo.
set /p REPO=URL:
git remote remove origin 2>nul
git remote add origin %REPO%
git push -u origin main
echo.
echo  Listo. Ahora en GitHub: Settings - Pages - Source: GitHub Actions
echo  A partir de aqui, cada cambio se publica con:  git add . ^&^& git commit -m "cambios" ^&^& git push
pause
