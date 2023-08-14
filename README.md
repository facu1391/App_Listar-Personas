# Aplicación de Listar Personas con Angular y Firebase
Esta es una aplicación desarrollada con Angular que permite a los usuarios listar y gestionar información de personas. Los datos de las personas se almacenan en una base de datos Firebase, y para acceder a la aplicación, los usuarios deben iniciar sesión.

## Características principales
* Inicio de Sesión: Los usuarios deben iniciar sesión antes de acceder a la aplicación. Se utiliza Firebase Authentication para gestionar la autenticación.
* Lista de Personas: Una vez que los usuarios han iniciado sesión, pueden ver una lista de personas registradas en la base de datos. Cada persona en la lista muestra información básica, como nombre, edad y ubicación.
* Detalles de Persona: Al hacer clic en una persona de la lista, se muestra una vista detallada con información más completa sobre esa persona, como dirección, número de teléfono, etc.
* Agregar Persona: Los usuarios autenticados tienen la capacidad de agregar nuevas personas a la base de datos. Pueden ingresar detalles como nombre, edad, ubicación, etc.
* Editar Persona: Además de agregar personas, los usuarios también pueden editar la información existente de una persona. Esto incluye modificar detalles como la edad, la dirección y otros atributos.
* Eliminar Persona: Los usuarios pueden eliminar personas de la lista si ya no son relevantes o necesarias. Se muestra un mensaje de confirmación antes de eliminar cualquier registro.
* Cerrar Sesión: Los usuarios tienen la opción de cerrar sesión cuando hayan terminado de usar la aplicación. Esto garantiza la seguridad y privacidad de su información.

## Tecnologías utilizadas
* Angular: La aplicación está construida utilizando el framework Angular, lo que permite una estructura modular y un flujo de desarrollo eficiente.
* Firebase: Se utiliza Firebase como backend para almacenar los datos de las personas y gestionar la autenticación de usuarios.
* Firebase Authentication: Para la autenticación de usuarios, se utiliza Firebase Authentication, lo que proporciona métodos seguros y eficientes para el inicio de sesión y el registro de usuarios.
* Firebase Firestore: Los datos de las personas se almacenan en Firebase Firestore, una base de datos en tiempo real que permite una rápida recuperación y actualización de la información.
* Bootstrap: Se utiliza el framework Bootstrap para mejorar el diseño y la interfaz de usuario de la aplicación, asegurando una experiencia agradable para los usuarios.

## Instalación
1. Clona el repositorio desde enlace-al-repositorio.
2. Navega a la carpeta del proyecto y ejecuta npm install para instalar las dependencias.
3. Configura tus credenciales de Firebase en la aplicación.
4. Ejecuta ng serve para iniciar el servidor de desarrollo.
5. Abre tu navegador y accede a http://localhost:4200 para usar la aplicación.

