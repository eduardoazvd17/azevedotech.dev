# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio site for Azevedo Tech Solutions, served at https://azevedotech.dev (GitHub Pages, see `CNAME`). Plain HTML/CSS/vanilla JS: no build step, package manager, linter or tests. To preview locally, serve the repo root with any static server (e.g. `python3 -m http.server`) and open `http://localhost:8000`. Use a server rather than `file://` so the relative paths and `localStorage` behave like production.

Code comments are written in Portuguese. Match that when you edit.

## Page types

- **Home** (`index.html`): text comes from `js/i18n.js` (a `translations` object keyed by `pt`/`en`/`es`). `js/main.js` handles scroll spy, footer height and copy buttons.
- **Project pages** (`projects/<app>/index.html`): each page defines its own dictionaries inline as `window.PROJECT_I18N = { pt, en, es }`, and `js/project.js` applies them. Styles: `css/styles.css` + `css/project.css`.
- **Legal pages** (`projects/<app>/termsAndPolicy/index.html`): each language is a separate `<article class="legal-doc" data-doc-lang="..." data-title="...">`, and `js/legal.js` shows only the active one. Styles: `css/styles.css` + `css/legal.css`. The published mobile apps link to these URLs directly (without `?lang`), so keep the paths stable.

## Shared i18n and theme (`js/preferences.js`)

Every page loads `preferences.js` first, includes `<div class="pref-menu" data-lang-menu>` and `<div class="pref-menu" data-theme-menu>`, and calls `Preferences.init({ fallback, onChange })`.
- Supported languages are `pt`, `en` and `es`. Elements are translated through `data-i18n` (text) and `data-i18n-aria` attributes. When you add a string, add its key to all three languages.
- The language is resolved from `?lang=`, then the saved choice, then the browser language, then the fallback. `?lang=` and `?theme=` are saved and then removed from the URL.
- Theme is `system`/`light`/`dark`, applied as `data-theme` on `<html>`. Every page has a small inline script in `<head>` that applies the saved theme before first paint, so that script is duplicated across all pages. In CSS, dark tokens are defined both under `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` and under `:root[data-theme="dark"]`.

## Conventions to keep in sync

- **Cache busting:** CSS and JS are referenced with a manual `?v=YYYYMMDD<letter>` query (e.g. `styles.css?v=20261003h`). After changing a CSS/JS file, bump its version in **every** HTML file that references it (the home page, all 4 project pages and all 4 legal pages). Use `grep -rn "<file>?v=" --include=*.html .` to find them.
- **Adding a project:** create `projects/<app>/index.html` and `termsAndPolicy/index.html` based on an existing app, add the card and its i18n keys to the home page, add an OG image at `images/og/<app>.png` (1200×630), and add entries to `sitemap.xml`.
- **SEO:** each page has `hreflang` alternates (`?lang=pt|en|es`, with `x-default` = `en`). The home and project pages also have Open Graph tags and JSON-LD. `sitemap.xml` lists every page once per language with `xhtml:link` alternates. Update `lastmod` when content changes.
- `app-ads.txt` at the root is used for mobile ad verification. Don't remove it.
