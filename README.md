**Hospital PWA**

Descripción
Este proyecto es una aplicación web progresiva (PWA) desarrollada en React para la gestión de almacenamiento de datos en la web del hospital. Implementa LocalStorage, SessionStorage e IndexedDB para la persistencia de datos y utiliza un Service Worker personalizado para habilitar la funcionalidad offline.

**Tecnologías Utilizadas**
React.js
LocalStorage y SessionStorage
IndexedDB con la biblioteca idb
Service Workers
Lighthouse para evaluación de rendimiento
Instalación
Requisitos previos
Node.js instalado
npm o yarn

**Instalar dependencias**
npm install
Uso

**Ejecutar en modo desarrollo**
npm start
La aplicación se ejecutará en http://localhost:3000/.

**Construir para producción**
npm run build
Funcionalidades Implementadas

**1. Almacenamiento Web (LocalStorage & SessionStorage)**
Permite almacenar y recuperar datos de usuario entre sesiones.
Se implementa en src/storage.js.

**2. Almacenamiento en IndexedDB**
Base de datos para gestionar información de citas, doctores o pacientes.
Implementado con la biblioteca idb en src/indexedDB.js.

**3. Service Worker**
Gestión de caché para acceso offline.
Implementado en public/sw.js.

**4. Pruebas con Lighthouse**
Evaluación del rendimiento y accesibilidad de la PWA.

**Para ejecutar:**
npx serve -s build
Abrir Chrome DevTools > Lighthouse > Generar reporte.
Despliegue
Puedes desplegar la aplicación en Vercel o Netlify.

**Autor**
Desarrollado por Cristina Guzmán para el ejercicio práctico del módulo 6.

