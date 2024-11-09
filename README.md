# Prueba técnica en Angular

Este proyecto es una aplicación simple en Angular que demuestra un formulario de registro con validación de correo electrónico y contraseña, y una página de éxito.

## Requisitos previos

Antes de comenzar, asegúrate de cumplir con los siguientes requisitos:

* Tienes instalado Node.js (v14.x o superior) y npm (v6.x o superior)
* Has instalado el Angular CLI de manera global (`npm install -g @angular/cli`)

## Instalación del Proyecto de Prueba en Angular

Para instalar el Proyecto de Prueba en Angular, sigue estos pasos:

1. Clona el repositorio
2. Navega al directorio del proyecto
3. Ejecuta `npm install` para instalar las dependencias

## Uso del Proyecto de Prueba en Angular

Para usar el Proyecto de Prueba en Angular, sigue estos pasos:

1. Ejecuta `ng serve` para iniciar el servidor de desarrollo
2. Abre tu navegador y navega a `http://localhost:4200`

## Ejecución de Pruebas

Para ejecutar las pruebas de este proyecto, sigue estos pasos:

1. Asegúrate de estar en el directorio raíz del proyecto
2. Ejecuta `ng test` para ejecutar las pruebas unitarias a través de Karma

### Comprensión de las Pruebas

Las pruebas de este proyecto se centran en el FormComponent, que contiene la lógica principal del formulario de registro. Esto es lo que cubren las pruebas:

1. Creación del componente
2. Inicialización del formulario
3. Validación del formato de correo electrónico
4. Validación de la longitud de la contraseña
5. Estado del botón de envío según la validez del formulario
6. Navegación a la página de éxito en el envío de un formulario válido

Para ver los resultados de las pruebas, revisa la salida en tu terminal después de ejecutar `ng test`. También puedes ver un informe más detallado abriendo la carpeta `coverage` generada en tu navegador.

## Contribuir al Proyecto de Prueba en Angular

Para contribuir al Proyecto de Prueba en Angular, sigue estos pasos:

1. Haz un fork de este repositorio
2. Crea una rama: `git checkout -b <nombre_rama>`
3. Realiza tus cambios y haz un commit: `git commit -m '<mensaje_del_commit>'`
4. Haz push a la rama original: `git push origin <nombre_proyecto>/<ubicación>`
5. Crea el pull request

## Contacto

Si deseas contactar al mantenedor, puedes escribir a jesusperez_14@hotmail.com.
