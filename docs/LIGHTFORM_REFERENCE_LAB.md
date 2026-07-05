# Lightform Design Reference Lab

This fork is not primarily a website cloner.

It is a reference extraction system for building Lightform's design memory: examples, screenshots, tokens, section patterns, taste notes, and showability gates that make future AI website builds less generic.

## Purpose

Use this project to answer one question before any client build starts:

> What proven visual and strategic patterns should this new site learn from?

The output is not a copied site. The output is a reusable reference entry that can guide a new, original Lightform build.

## Operating Rule

No showable design should be generated from category facts alone.

Before an AI agent builds a site for an existing business, it must have:

- brand archaeology for the client
- customer psychology for the visitor
- at least 3 relevant reference entries
- a visual thesis
- a showability verdict

If those are missing, the work is internal scrap, not a concept.

## Reference Workflow

1. Pick a reference URL.
2. Capture screenshots at desktop, tablet, and phone.
3. Extract tokens: color, type, spacing, radius, shadow, motion, imagery.
4. Map sections and conversion flow.
5. Write taste notes in Jorge's language.
6. Create pattern cards for reusable ideas.
7. Score the reference for Lightform use.
8. Store all files under `docs/references/<slug>/`.

## Recommended Folder Shape

```text
docs/references/<slug>/
  reference.md
  screenshots/
    desktop.png
    tablet.png
    phone.png
  tokens.md
  section-map.md
  taste-notes.md
  patterns/
    patient-uncertainty-hero.md
    location-choice-section.md
```

## Reference Categories

Use these labels when useful:

- med-spa-aesthetic
- physical-therapy-rehab
- holistic-wellness
- reiki-spiritual
- product-wellness
- local-service
- luxury-editorial
- clinical-minimal
- warm-human-local
- conversion-heavy
- bad-example

## Output Quality

A useful reference entry should make future design easier by saying:

- what to copy as a principle
- what not to copy literally
- what kind of client it fits
- what customer state it solves
- what visual failure it helps prevent

## Do Not

- clone a third-party brand for client work
- reuse logos, copy, photos, or proprietary assets without permission
- treat pretty screenshots as strategy
- treat token extraction as taste
- let visual novelty override client trust
