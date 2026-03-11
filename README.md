# 👥 Sistema de Gestión de Clientes (Fullstack)

Este proyecto es un sistema **CRUD** (Crear, Leer, Actualizar, Borrar) completo, diseñado para la gestión eficiente de clientes. Utiliza una arquitectura desacoplada con un backend robusto y un frontend de última generación.

## 🚀 Tecnologías y Versiones

* **Frontend:** Angular 21 (vanguardia en componentes y señales).
* **Backend:** Spring Boot 4.0.3 (arquitectura escalable).
* **Gestor de Dependencias:** Maven.
* **Base de Datos:** MySQL.
* **Lenguaje:** Java 17.
* **Estilos y Alertas:** Bootstrap 5 & SweetAlert2.

## 📂 Estructura del Proyecto

El repositorio está organizado en dos carpetas principales para separar las responsabilidades:

* `/backend-spring`: API RESTful construida con Java y Spring Data JPA.
* `/frontend-angular`: Interfaz de usuario interactiva y consumo de servicios.

## 🛠️ Instalación y Configura tu Entorno

### 1. Backend (Java/Maven)

1. Navega a la carpeta: `cd backend-spring`.
2. Asegúrate de tener instalado **JDK 17**.
3. Configura tus credenciales de base de datos en `src/main/resources/application.properties`.
4. Ejecuta el servidor:

    ```bash
    mvn spring-boot:run
    ```

### 2. Frontend (Angular)

1. Navega a la carpeta: `cd frontend-angular`.
2. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

3. Inicia la aplicación:

    ```bash
    ng serve
    ```

4. Abre tu navegador en `http://localhost:4200`.

## 🔐 Seguridad y Buenas Prácticas
>
> **Nota:** Por seguridad, las credenciales de MySQL en `application.properties` se incluyen como configuración base. En entornos de producción, se recomienda el uso de variables de entorno para proteger los datos sensibles.

---
Desarrollado con pasión por [JCGadeaDev](https://github.com/JCGadeaDev) - Juan Carlos Gadea Brenes.
