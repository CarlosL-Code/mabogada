# Claudia Mendoza - Abogada Corporativa ⚖️

Este proyecto es una **Landing Page Profesional y Corporativa** diseñada exclusivamente para los servicios legales y de constitución de sociedades extranjeras en Chile de la abogada Claudia Mendoza.

El sitio está enfocado en transmitir **confianza, elegancia y agilidad**, brindando una experiencia de usuario (UX) premium adaptada a inversionistas y clientes empresariales.

---

## 🎨 Estilo y Diseño

El diseño de la web sigue lineamientos modernos inspirados en firmas internacionales de alto prestigio ("Estilo Editorial Premium").

*   **Paleta Corporativa:**
    *   **Azul Marino/Noche (`#0a192f`):** Utilizado en las secciones de alto impacto (Hero, Servicios, CTA Final) para transmitir seriedad, lujo y autoridad legal.
    *   **Blanco Puro (`#ffffff`) y Gris Claro (`#f8f9fa`):** Para mantener las secciones de lectura (Perfil, Proceso) respirables, minimalistas y estructuradas.
    *   **Azul Rey / Énfasis (`#0056b3`):** Para acentos, botones, íconos de interacción y títulos.
*   **Tipografía:** 
    *   Se utilizó **Montserrat**, una fuente sin serifa geométrica y limpia que aporta modernidad, legibilidad en entornos corporativos y un toque sofisticado en sus grosores altos (`800` para títulos, `400/500` para cuerpos de texto).
*   **Interactividad y Animaciones (UI):**
    *   **Menú Dinámico:** Navbar de cristal (transparente) que pasa a blanco sólido al hacer scroll.
    *   **Slider Infinito Sutil:** Hero interactivo con aparición suave de imágenes por desvanecimiento transversal (Crossfade) para no marear al usuario.
    *   **Pestañas (Tabs) Dinámicas:** El "Proceso de Constitución" evita un scroll infinito vertical aglomerando la información de las etapas en pestañas interactuables.
    *   **Efecto Hover (Tarjetas de Servicios):** Efectos visuales de iluminación sutil al pasar el mouse por las áreas de servicio (Portafolio Legal).
    *   **Fondo Parallax (Contacto):** Un CTA final inmersivo con una imagen de oficinas superpuesta con un velo semitransparente.

---

## 🛠 Herramientas y Tecnologías Utilizadas

La arquitectura técnica se construyó priorizando el **rendimiento, la escalabilidad y una carga ultrarrápida**:

1.  **[React 18](https://react.dev/):** Biblioteca principal de JavaScript utilizada para construir una interfaz modular, basada en componentes reutilizables (Hero, Navbar, Contact, etc.).
2.  **[Vite](https://vitejs.dev/):** Entorno de desarrollo (Bundler) ultrarrápido empleado para compilar y empaquetar el proyecto. Garantiza actualizaciones en caliente (HMR) inmediatas.
3.  **CSS3 Puro (Vanilla CSS):**
    *   No se utilizaron frameworks pesados de CSS como Bootstrap o Tailwind. El diseño es 100% hecho a medida con CSS puro.
    *   Uso avanzado de **CSS Grid y Flexbox** para estructuras responsivas.
    *   Implementación de variables globales (`:root`) para mantener la consistencia del tema.
4.  **[Iconify (@iconify/react)](https://iconify.design/):** Framework de íconos que provee SVGs optimizados. Se utilizaron íconos del set de *Material Design* para ilustrar servicios y ventajas competitivas sin afectar el rendimiento.
5.  **Despliegue y Hosting:**
    *   **Vercel:** Despliegue en producción con CI/CD automatizado conectado a GitHub.
    *   **Gestión de Assets:** Los recursos estáticos e imágenes locales están correctamente estructurados en el directorio `/public/images/` para asegurar compatibilidad con compiladores web.

---

## 📂 Estructura de Componentes

*   `Navbar`: Navegación principal, responsiva y con botón de llamada a la acción.
*   `Hero`: Portada de impacto con Slider infinito.
*   `Profile`: Presentación de la abogada Claudia Mendoza.
*   `ValueProposition`: Destaca ventajas competitivas de operar en Chile.
*   `ConstitutionProcess`: Pestañas dinámicas explicando el paso a paso.
*   `Services`: Portafolio legal con grilla interactiva y fondos dinámicos.
*   `Contact`: Formulario real superpuesto sobre un fondo inmersivo, datos directos.
*   `Footer`: Pie de página profesional, mapa del sitio y créditos del desarrollador.

---
> **Desarrollado por Carlos Lozano**
> [carloslozanodev.com](https://carloslozanodev.com/)
