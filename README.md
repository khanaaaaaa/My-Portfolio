# Dating Sim Personal Website 💫

A Madoka Magica-inspired visual novel style personal website with branching dialogue paths and character sprites.

## Features

- **Typewriter dialogue effect** - Text appears character by character
- **Branching story paths** - Multiple dialogue choices leading to different conversations
- **Character expressions** - Sprite changes based on emotion (neutral, happy)
- **Dynamic backgrounds** - Background shifts based on scene (default, school, night, magical)
- **Smooth animations** - Fade-ins, slide-ups, and hover effects
- **Fully responsive** - Works on all screen sizes

## File Structure

```
├── index.html          # Main HTML structure
├── style.css           # Styling with Madoka-inspired aesthetics
├── script.js           # Dialogue system and game logic
├── character-neutral.png   # Neutral expression sprite
└── character-happy.png     # Happy expression sprite
```

## Customization

### Adding Your Own Character Sprites

Replace the SVG placeholder files with actual PNG images:

1. **character-neutral.png** - Default/neutral expression (300x500px recommended)
2. **character-happy.png** - Happy/excited expression (300x500px recommended)

You can add more expressions by:
1. Adding new PNG files (e.g., `character-sad.png`, `character-surprised.png`)
2. Updating the `sprite` property in `dialogueData` in `script.js`

### Editing Dialogue

Open `script.js` and modify the `dialogueData` object. Each dialogue node has:

```javascript
dialogueKey: {
    character: "Character Name",
    sprite: "character-neutral.png",  // Which sprite to show
    background: "magical",             // Background theme
    text: "Dialogue text here",
    next: "nextDialogueKey"           // OR choices array
}
```

For branching paths, use choices:

```javascript
choices: [
    { text: "Choice text", next: "targetDialogueKey" }
]
```

### Background Themes

Available backgrounds in `style.css`:
- `default` - Purple gradient
- `school` - Warm peach gradient
- `night` - Dark blue gradient
- `magical` - Pink shimmer with animation

### Customizing Colors

Edit the CSS gradients in `style.css`:
- `.background` classes for scene backgrounds
- `.name-tag` for character name styling
- `.choice-btn:hover` for button hover effects

## Tips for Best Results

1. **Character sprites**: Use transparent PNG images with consistent sizing
2. **Dialogue length**: Keep text concise for better readability
3. **Story structure**: Plan your branching paths before coding
4. **Testing**: Click through all dialogue paths to ensure no dead ends

## Inspiration

Inspired by Madoka Magica's visual novel aesthetic with:
- Soft pastel color palettes
- Magical girl themes
- Emotional character expressions
- Atmospheric backgrounds

## Usage

Simply open `index.html` in a web browser. No server required!

---

**Note**: The current sprites are SVG placeholders. Replace them with your own character artwork for the full effect! 🎨✨
