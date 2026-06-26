# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static, no-build children's educational game app in Uzbek ("Nutqiy O'yinlar"). No framework, no dependencies, no build step — just HTML/CSS/JS served directly via GitHub Pages at `https://userlog000.github.io/fun-knowledge/`.

## Architecture

Three files do all the work:

- **`js/data.js`** — All game content in a single `DATA` object with four keys: `ta`, `tn`, `bh`, `hk`. Each is an array of question objects. Edit this file to add/change questions.
- **`js/app.js`** — All game logic. Screen navigation (`show`, `go`, `home`), per-game load/pick/next functions named `loadTa/pickTa/nxtTa` etc. State is three globals: `cur`, `idx`, `lastCur`.
- **`css/style.css`** — All styles. Uses `clamp()` throughout for responsive sizing — no media queries except for breakpoints at 600px, 900px, and landscape/short screens.

## Game Structure

Four games, each identified by a two-letter code:

| Code | Game | Mechanic |
|------|------|----------|
| `ta` | Nutqiy Tahlil | Multiple correct answers — click any correct one to proceed |
| `tn` | Muammoli Tanlov | Same mechanic as `ta` |
| `bh` | Mini Bahs | Pick a side → pick a reason chip → always accepted |
| `hk` | Hikoya Tanlovi | Same mechanic as `ta`/`tn` |

All games share the same flow: `go(code)` → `load*()` → `pick*()` → `nxt*()` → `done()` (after last question shows result screen).

## Deployment

Push to `main` — GitHub Pages auto-deploys. No build step needed.
