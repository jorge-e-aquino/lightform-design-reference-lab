---
name: capture-lightform-reference
description: Capture a website as a Lightform design reference, not as a clone. Use when Jorge wants to study a site for reusable design intelligence, taste notes, pattern cards, and future build retrieval.
argument-hint: "<url>"
user-invocable: true
---

# Capture Lightform Reference

Capture `$ARGUMENTS` as a Lightform design reference.

This is not a clone task. Do not build a copy of the site.

## Goal

Create a compact, useful reference entry that can improve future Lightform site generation.

## Output Folder

Create a slug from the site name or domain:

`docs/references/<slug>/`

Recommended files:

- `reference.json`
- `taste-notes.md`
- `section-map.md`
- `tokens.md`
- `screenshots/desktop.png`
- `screenshots/tablet.png`
- `screenshots/phone.png`
- `patterns/<pattern-name>.md`

## Capture Only What Helps Future Builds

Collect:

- screenshots for desktop, tablet, and phone
- colors, typography, spacing, radius, shadows, motion feel
- section order and CTA rhythm
- customer psychology
- visual DNA
- trust strategy
- copy posture
- reusable patterns
- do-not-copy notes
- risk flags
- scores

Do not collect:

- full HTML/CSS as source of truth
- exact copy blocks beyond short reference snippets
- proprietary images, icons, videos, or fonts as reusable assets
- protected pages or private booking flows
- pixel-perfect clone instructions

## Required Verdict

At the end of the entry, decide:

- approved
- candidate
- anti_pattern
- rejected

Approve only if:

- taste score is 4 or higher
- conversion score is 4 or higher
- vertical fit score is 4 or higher
- mobile homepage was reviewed
- one key subpage was reviewed when available
- at least one reusable pattern is named
- at least one do-not-copy note is written

## Retrieval Framing

Write the reference so future agents can retrieve it by job:

- vertical
- business model
- primary conversion
- audience
- offer complexity
- trust need
- risk tier
- visual temperature
- layout patterns
- trust patterns
- best_for
- avoid_using_for

## Final Response

Keep the response short:

- folder created
- status
- strongest lesson
- biggest warning
- whether it should enter the approved registry
