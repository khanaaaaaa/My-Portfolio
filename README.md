# Interactive Portfolio

A visual novel style interactive portfolio with branching dialogue paths, character sprites, and dynamic backgrounds.

## Features

- **Typewriter dialogue effect** - Text appears character by character
- **Branching story paths** - Multiple dialogue choices leading to different conversations across Tech, Creative, and Leadership routes
- **Character expressions** - Sprite changes based on emotion (neutral, happy)
- **Dynamic backgrounds** - Background shifts based on scene (default, school, night, magical)
- **Day/Night theme toggle** - Switch between light and dark themes
- **Visitor sticker board** - Interactive message board where visitors can leave notes
- **Progress tracking** - Track exploration progress through the portfolio
- **Sound effects** - Optional audio feedback for interactions
- **Smooth animations** - Fade-ins, slide-ups, and hover effects
- **Fully responsive** - Works on all screen sizes

## File Structure

```
├── index.html              # Main HTML structure
├── style.css               # Styling with custom aesthetics
├── script.js               # Dialogue system and game logic
├── character-neutral.png   # Neutral expression sprite
├── character-happy.png     # Happy expression sprite
└── stickers/               # Sticker images for visitor board
    ├── sticker1.png
    ├── sticker2.png
    └── ...
```

## Content Sections

### Routes
- **Tech Route**: Showcases technical projects, hackathon experience, and developer community involvement
- **Creative Route**: Highlights visual design, storytelling, content creation, and poetry
- **Leadership Route**: Demonstrates team leadership, community building, and organizational skills

### Experiences
- DEV Community Nepal (Social Media & Creative Lead)
- Code for Impact Hackathon (Team Leader)
- Intercity Poetry Recitation Competition
- Nepal In Words (Founder)
- Interact Club (General Member)
- Scout

## Customization

### Adding Your Own Character Sprites

Replace the PNG files with your own character artwork:

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
- `default` - Soft pink gradient
- `school` - Warm peach gradient
- `night` - Deep blue gradient
- `magical` - Pink shimmer with animation

### Customizing Colors

Edit the CSS gradients in `style.css`:
- `.background` classes for scene backgrounds
- `.name-tag` for character name styling
- `.choice-btn:hover` for button hover effects
- `body.theme-night` for dark theme colors

### Sticker Board

The visitor sticker board allows guests to leave messages with custom sticker images. To customize:

1. Add PNG sticker images to the `stickers/` folder
2. Update the sticker picker in `showStickerModal()` function in `script.js`
3. Stickers are stored in browser localStorage

## Features in Detail

### Name Input
When starting a new game, visitors are prompted to enter their name, which personalizes the experience throughout the portfolio.

### Progress Tracking
The profile panel shows:
- Visitor name
- Tech, Creative, and Leadership stats
- Current route
- Exploration progress percentage

### Theme Toggle
Switch between Day and Night themes using the theme button in the top bar. The theme preference is saved in localStorage.

### Sound Effects
Toggle sound effects on/off using the SFX button. Includes sounds for:
- Button hover
- Button click
- Dialogue advance
- Typing effect

## Tips for Best Results

1. **Character sprites**: Use transparent PNG images with consistent sizing
2. **Dialogue length**: Keep text concise for better readability
3. **Story structure**: Plan your branching paths before coding
4. **Testing**: Click through all dialogue paths to ensure no dead ends
5. **Sticker images**: Use clear, recognizable icons or illustrations

## Technical Details

- Pure vanilla JavaScript (no frameworks required)
- CSS animations and transitions
- LocalStorage for save states and visitor data
- Web Audio API for sound effects
- Responsive design with mobile support

## Usage

Simply open `index.html` in a web browser. No server required!

## Contact

- Email: khanalaastha88@gmail.com
- LinkedIn: linkedin.com/in/aastha-khanal
- Instagram: instagram.com/pastaisnotnasta
- GitHub: github.com/khanaaaaaa

---

**Note**: The current sprites are placeholder images. Replace them with your own character artwork for the full effect!
