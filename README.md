### Si te da pereza iniciar xampp, puedes usar "Live Server" (funciona gracias a VS Code)
http://127.0.0.1:5500/
o
http://127.0.0.1:5500/JQuery_Ajax/
http://127.0.0.1:5500/JQuery_Efectos/

Si quieres hacerlo con xampp


### XAMPP
### Instalar XAMPP  
sudo wget https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/8.1.25/xampp-linux-x64-8.1.25-0-installer.run

sudo chmod 777 xampp-linux-x64-8.1.25-0-installer.run 

sudo ./xampp-linux-x64-8.1.25-0-installer.run 

### Iniciar XAMPP y detener apache2 para que no colisionen.
sudo systemctl stop apache2

sudo /opt/lampp/lampp stop

sudo lsof -i :3306

sudo systemctl stop mysql

sudo /opt/lampp/lampp start

Ejemplo de cómo entrar en los ejercicios desde el navegador:
http://localhost/AJAX/Ej1/Ej1.html

Teoría:
https://www.tutorialesprogramacionya.com/ajaxya/ 



