# Relaunch Homepage – Frontend-Prototyp

Dieses Repo enthält einen **responsiven Frontend-Prototyp** für die neue Startseite gemäß Designentwurf.

## Enthalten

- `index.html` – Seitenstruktur mit Hero, Navigation, Services, Workflow, Referenzen, Blog und Footer
- `styles.css` – visuelles Design, Responsive-Breakpoints und Mobile-Navigation
- `assets/logo.svg` – aktuelles co.medical Logo als eingebundenes Asset

## Mobile/Responsive umgesetzt

- Mobile-First Optimierungen für 980px, 760px und 500px Breakpoints
- Hamburger-Menü auf kleinen Viewports (ohne JavaScript)
- Flexible Grids für Karten-Sektionen (Desktop 3-spaltig, Tablet 2-spaltig, Mobile 1-spaltig)
- Buttons und Inhaltstexte auf kleinen Geräten lesbar und touch-optimiert

## WordPress-ready Ansatz (nächster Schritt)

Die Struktur ist so vorbereitet, dass ein Übergang auf WordPress als CMS leicht möglich ist:

1. Header/Footer nach `header.php` / `footer.php` auslagern
2. Bereiche (Hero, Services, Projekte, Blog) als ACF-Blöcke modellieren
3. Wiederholbare Karten (Services/Blog/Projekte) via CPTs oder Repeater-Felder pflegen
4. Platzhaltertexte/Bilder durch WP-Felder dynamisch rendern

## Lokal ausführen

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Dann im Browser öffnen: `http://localhost:4173`
