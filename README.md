# BRILL VIBE — multilingual interactive preview (GitHub Pages)

Public test site: https://sergoneon.github.io/brill-vibe-demo/

## Global-first language policy

- Automatic language detection from `navigator.languages`; the user's manual choice is remembered locally.
- Searchable selector currently lists **188 language and regional-locale options** using native and English display names.
- **13 complete UI language packs:** Russian, English, Hebrew, Spanish, French, German, Portuguese, Arabic, Hindi, Simplified Chinese, Japanese, Turkish and Ukrainian.
- Correct right-to-left layout for RTL languages (Hebrew and Arabic are translated; other RTL locale choices use a fallback).
- Other offered languages are selectable but **not translated yet**; the app displays an explicit English-language fallback notice, never a false claim of full translation.
- Community room language can be selected from the language registry even if the interface translation is not ready.
- UI language and user-generated chat content are separate. No automatic message translation is implemented in the static preview.
- Add translations as maintained language packs with GitHub checks; no third-party application service is required to display the static preview.

## What can be tested

Responsive mobile and desktop layout, navigation, room discovery and search, creating local rooms, sending local messages, editing a demo profile, local report form, and persistence in browser localStorage. The app makes clear that actions are local.

## Not part of this static preview

There is no backend API here, no real accounts, shared chat, cross-device synchronization, actual moderation, voice/video service, payments or automatic cross-language chat translation. The backend application is kept in the private GitHub repository [SergoNeon/brill-vibe](https://github.com/SergoNeon/brill-vibe).

Static GitHub Pages deployment runs from GitHub Actions on each commit. CI checks JavaScript syntax and language-package completeness before publishing.

Developed by Brill Team Project.
