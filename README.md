# IziMetrics

IziMetrics es una herramienta diseñada para empoderar a pequeños comerciantes (bodegas, minimarkets, farmacias y restaurantes) mediante informes claros, recomendaciones inteligentes y capacitación práctica usando canales que ya conocen, como WhatsApp.

---

## Funcionalidades principales

- Dashboard intuitivo para visualizar ventas, patrones por fecha, ubicación y método de pago.
- Recomendaciones basadas en IA para promociones, horarios óptimos e inventarios eficientes.
- Reportes automáticos por WhatsApp con resúmenes en PDF (diario, semanal, mensual).
- Predicción de demanda e inventario con modelos simples de tendencia.
- Segmentación de clientes por ticket promedio y frecuencia de compra.
- IziAcademy integrada con módulos educativos de finanzas, inventario y marketing.

---

## Estado de esta maqueta

- Backend: Node.js + Express
- Vistas: EJS
- Estilos: CSS en `public/styles.css`
- Gráficos: SVG ligeros sin dependencias
- Páginas implementadas:
  - `/` Izimetrics (dashboard de negocio)
  - `/academy` IziAcademy (grilla de cursos)
  - `/admin` Panel Admin (tarjetas, donuts, barras, línea y tabla)

---

## Requisitos

- Node.js 18+ (probado con Node 24 en WSL2 Ubuntu 24.04)
- npm 8+

---

## Instalación y ejecución

```bash
npm install
npm run dev  # recarga con nodemon
# o
npm start    # ejecución con node
```

Servidor: `http://localhost:3000`

Rutas: `/`, `/academy`, `/admin`

Scripts en `package.json`:

```json
{
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

---

## Estructura del proyecto

```text
Izimetrics/
├── public/
│   └── styles.css
├── src/
│   └── server.js
├── views/
│   ├── index.ejs
│   ├── academy.ejs
│   ├── admin.ejs
│   └── partials/
│       └── course-card.ejs
├── package.json
├── .gitignore
└── README.md
```

---

## ¿Por qué IziMetrics?

- Accesible: pensado para comerciantes con poca experiencia digital.
- Práctico: usa canales familiares como WhatsApp.
- Integrado: datos, educación y soporte en un único ecosistema.
- Retentivo: ayuda a crecer y fidelizar clientes de Izipay.

---

## Roadmap sugerido

- Conectar datos reales vía API/JSON para gráficos y tarjetas.
- Autenticación y control de acceso para el panel administrador.
- Exportación de reportes a PDF y envío por WhatsApp.
- Componentización (design system) y refinamiento visual.

---

## Equipo

- Sebastián André Lizárraga Calderón – CEO & Co‑founder
- Fransua Mijail León Sánchez – CPO & Co‑founder
- Sarai Esther Alejandro Casas – CCO & Co‑founder
- Diego Rojas Vera – CTO & Co‑founder

---

## Contribuciones

¡Bienvenidas! Abre un issue o PR. Sigue buenas prácticas: código claro, pruebas cuando apliquen y documentación actualizada.

---

## Contacto

- Fransua León Sánchez – GitHub: https://github.com/FransuaLeonSanchez
- Equipo Izipay / Hackathon IziMetrics
