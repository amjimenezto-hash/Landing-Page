# Antigravity — Landing Page Personal

Experiencia web premium construida con **React + Vite + TypeScript**.

## Stack

| Tecnología | Uso |
|---|---|
| React 18 | UI |
| Vite 5 | Bundler |
| TypeScript | Tipado estático |
| CSS Modules | Estilos encapsulados |
| Framer Motion | Animaciones |
| React Three Fiber | Escena 3D |
| @react-three/drei | Helpers 3D |
| Three.js | Motor 3D |
| Lucide React | Iconos |

## Paleta de colores

```
#174220  Deep forest   (fondo profundo)
#246B34  Mid dark      (gradientes)
#329447  Mid green     (acentos medios)
#3FB759  Brand green   (marca)
#4EE56F  Neon accent   (principal / glow)
```

## Instalación

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
npm run preview
```

## Arquitectura

```
src/
├── assets/                    # Imágenes, fuentes, SVGs
├── components/
│   ├── Navbar/                # Navbar fija con scroll detection
│   ├── Hero/                  # Hero + Three.js canvas
│   ├── About/                 # Sección sobre mí + stats
│   ├── Services/              # Grid de servicios
│   ├── Portfolio/             # Lista de proyectos
│   ├── Testimonials/          # Cards de testimonios
│   ├── CTA/                   # Call to action final
│   ├── Footer/                # Footer con socials
│   └── UI/                    # Componentes reutilizables
│       ├── MagneticButton     # Botón magnético animado
│       ├── MouseGlow          # Efecto de glow del cursor
│       └── SectionLabel       # Etiqueta de sección
├── hooks/
│   ├── useMousePosition.ts    # Posición del cursor
│   ├── useScrolled.ts         # Detección de scroll
│   └── useScrollProgress.ts   # Progreso de scroll
├── styles/
│   └── global.css             # Variables CSS + reset
├── data/
│   ├── index.ts               # Datos de la app
│   └── types.ts               # TypeScript interfaces
├── animations/
│   └── variants.ts            # Framer Motion variants
├── App.tsx
└── main.tsx
```
