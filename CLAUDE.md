# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio site for Azevedo Tech Solutions, served at https://azevedotech.dev (GitHub Pages, see `CNAME`). Plain HTML/CSS/vanilla JS: no build step, package manager, linter or tests. To preview locally, serve the repo root with any static server (e.g. `python3 -m http.server`) and open `http://localhost:8000`. Use a server rather than `file://` so the relative paths and `localStorage` behave like production.

Code comments are written in Portuguese. Match that when you edit.

## Page types

- **Home** (`index.html`): text comes from `js/i18n.js` (a `translations` object keyed by `pt`/`en`/`es`). `js/main.js` handles scroll spy, footer height and copy buttons.
- **Project pages** (`projects/<app>/index.html`): each page defines its own dictionaries inline as `window.PROJECT_I18N = { pt, en, es }`, and `js/project.js` applies them. Styles: `css/styles.css` + `css/project.css`.
- **Legal pages** (`projects/<app>/termsAndPolicy/index.html`): each language is a separate `<article class="legal-doc" data-doc-lang="..." data-title="...">`, and `js/legal.js` shows only the active one. Styles: `css/styles.css` + `css/legal.css`. The published mobile apps link to these URLs directly (without `?lang`), so keep the paths stable.
- **404** (`404.html`): GitHub Pages serves it for any missing path, so it has a static `<base href="/">` and every URL in the page is relative to it. The inline script right after it repoints the base to the file's folder on `file://`. Keep both at the top of `<head>`. It reuses `project.css` and `project.js` with an inline `PROJECT_I18N`.

## Shared i18n and theme (`js/preferences.js`)

Every page loads `preferences.js` first, includes `<div class="pref-menu" data-lang-menu>` and `<div class="pref-menu" data-theme-menu>`, and calls `Preferences.init({ fallback, onChange })`.
- Supported languages are `pt`, `en` and `es`. Elements are translated through `data-i18n` (text), `data-i18n-aria` (aria-label) and `data-i18n-alt` (image alt) attributes. When you add a string, add its key to all three languages.
- The language is resolved from `?lang=`, then the saved choice, then the browser language, then the fallback. `?lang=` and `?theme=` are saved and then removed from the URL.
- Theme is `system`/`light`/`dark`, applied as `data-theme` on `<html>`. Every page has a small inline script in `<head>` that applies the saved theme before first paint, so that script is duplicated across all pages. In CSS, dark tokens are defined both under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` and under `:root[data-theme="dark"]`.

## Conventions to keep in sync

- **Cache busting:** CSS and JS are referenced with a manual `?v=YYYYMMDD<letter>` query (e.g. `styles.css?v=20261003h`). After changing a CSS/JS file, bump its version in **every** HTML file that references it (the home page, all 4 project pages, all 4 legal pages and `404.html`). Use `grep -rn "<file>?v=" --include=*.html .` to find them.
- **Adding a project:** create `projects/<app>/index.html` and `termsAndPolicy/index.html` based on an existing app, add the card and its i18n keys to the home page, add a 256px icon at `images/thumbs/<app>.png` (`sips -Z 256 <icon> --out images/thumbs/<app>.png`), which is what the home card, project header and legal page display, add store screenshots at `images/screens/<app>/<n>.jpg` (460px wide; the first one is the home card preview, all of them feed the project page's "Telas" gallery, with `screen_<i>` alt keys), add an OG image at `images/og/<app>.png` (1200×630), and add entries to `sitemap.xml`.
- **SEO:** each page has `hreflang` alternates (`?lang=pt|en|es`, with `x-default` = `en`). The home and project pages also have Open Graph tags and JSON-LD. `sitemap.xml` lists every page once per language with `xhtml:link` alternates. Update `lastmod` when content changes.
- **Audience:** recruiters first, companies second. The home leads with experience (hero, About facts, experiences) and keeps the Services section compact, near Contact. The numbers in `.facts` must stay true: update them when apps or experiences change.
- **Icons:** UI icons are inline SVGs (`<svg class="icon" viewBox="…" aria-hidden="true"><path d="…"/></svg>`), copied from the catalog in `icons/ui.svg` (official Font Awesome Free paths). Don't reference the sprite with `<use href="icons/ui.svg#…">`: external `<use>` is blocked on `file://` and the icons disappear. Font Awesome is no longer loaded.
- **Accessibility:** the home and project pages start with a `.skip-link` to `<main id="content" tabindex="-1">`. Give `<img>` explicit `width`/`height`, and mark brand names with `translate="no"`.
- `app-ads.txt` at the root is used for mobile ad verification. Don't remove it.
