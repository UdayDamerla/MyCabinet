# Uday's Cabinet of Curiosities

A literary, archival personal website designed to feel like a scholar's study from the early 1900s. Built with patience, empathy, and deep understanding.

## Features

- **Old-world aesthetic**: Parchment textures, serif typography (EB Garamond, Lora), brass accents
- **Dark mode**: "Night in the study" theme with sepia tones
- **Responsive**: Mobile-first design that feels like reading a book
- **Fast**: Plain HTML + Tailwind CSS, loads in under 1 second
- **Keyboard shortcuts**: Navigate without touching the mouse
- **Serendipity button**: Discover random artifacts

## Pages

1. **Homepage** ([index.html](index.html))
   - Hero with title and tagline
   - Welcome letter from Uday
   - "Currently on the desk" - 3 featured artifacts with marginalia

2. **The Library** ([library.html](library.html))
   - Index-card style artifact listing
   - Filter tabs: All, Psychology, Myth, History, Politics, Thought, My Writing
   - Each artifact shows title, author, year, and Uday's marginalia

3. **Artifact Page** ([artifact.html](artifact.html))
   - Full article view with "Uday's Marginalia" section
   - Reading progress indicator
   - Link to original source
   - Full content with beautiful typography

4. **About** ([about.html](about.html))
   - Letter-style explanation of why this cabinet exists
   - Core values: Deep Understanding, Patience, Empathy

## Design System

### Colors
- **Parchment**: `#F4F1EA` - Main background
- **Ink**: `#1C1B1A` - Main text
- **Brass**: `#BFA76A` - Accents, highlights
- **Forest**: `#3A4D41` - Secondary accent
- **Sepia Dark**: `#2A2622` - Dark mode background
- **Sepia Medium**: `#3D3732` - Dark mode secondary

### Typography
- **Headings**: EB Garamond (serif)
- **Body**: Lora (serif)
- Large margins, generous line-height
- Drop caps on opening paragraphs

### Textures
- Subtle paper grain (CSS repeating-linear-gradient)
- Thin line dividers
- Brass-colored accents

## Keyboard Shortcuts

- `D` - Toggle dark mode
- `H` - Go to homepage
- `L` - Go to library
- `R` - Random artifact (serendipity)

## Adding New Artifacts

To add a new artifact, edit [artifact.html](artifact.html) and add a new entry to the `artifacts` object:

```javascript
'4': {
    category: '[Category]',
    title: 'Title of Work',
    author: 'by Author Name',
    year: '2024',
    link: 'https://link-to-original.com',
    marginalia: `Your reflection on what this taught you...`,
    content: `
        <blockquote>Optional quote...</blockquote>
        <p>Full content...</p>
    `
}
```

Then add the corresponding card to [library.html](library.html) and optionally to the homepage featured section.

## Technical Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling via CDN
- **Vanilla JavaScript**: No frameworks, no dependencies
- **Google Fonts**: EB Garamond, Lora

## Philosophy

This is not a blog. This is a room.

Three values guide every design decision:
1. **Deep Understanding** - Insight over information
2. **Patience** - Wisdom takes time
3. **Empathy** - Understanding others is foundational

No popups. No modals. No social share counts. No trending sections. Just things worth sitting with.

Built slowly, with care, as if someone will treasure this for 10 years.

---

**Collected slowly, by Uday**

*"Wisdom is not what you know. It is how you hold what you know."*