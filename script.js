// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLhKEz8vR7qX9wJ3nF5mP2tY6uI8oA4cB",
    authDomain: "my-portfolio-5f4a3.firebaseapp.com",
    databaseURL: "https://my-portfolio-5f4a3-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-5f4a3"
};

try {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database();
} catch(e) {
    console.error('Firebase init failed:', e);
}

// Extend dialogue with branch intro and route nodes
const dialogueData = {
    menu_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I am Pasta. I build with code, design for clarity, and lead with care. Explore any of these to begin.",
        choices: [
            { text: "Start with Tech", next: "route_tech_quote" },
            { text: "Start with Creative", next: "route_creative_quote" },
            { text: "Start with Leadership", next: "route_leadership_quote" }
        ]
    },
    route_tech_quote: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "\"Talk is cheap. Show me the code.\" — Linus Torvalds",
        next: "route_tech_path",
        apply: (s) => { s.player.tech += 2; s.player.route = 'Tech'; }
    },
    route_creative_quote: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "\"Creativity is intelligence having fun.\" — often attributed to Einstein",
        next: "route_creative_path",
        apply: (s) => { s.player.creative += 2; s.player.route = 'Creative'; }
    },
    route_leadership_quote: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "\"Leadership is not about being in charge. It’s about taking care of those in your charge.\" — Simon Sinek",
        next: "route_leadership_path",
        apply: (s) => { s.player.leadership += 2; s.player.route = 'Leadership'; }
    },    route_tech_path: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "Let's explore the tech side of my journey.",
        next: "experiences_hub"
    },
    route_creative_path: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Let's dive into the creative world.",
        next: "experiences_hub"
    },
    route_leadership_path: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "Let's explore leadership experiences.",
        next: "experiences_hub"
    },



    experiences_hub: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Beyond projects, this is my story in action. Which would you like to explore?",
        choices: [
            { text: "DEV Community Nepal (Social Media & Creative Lead)", next: "x_dev_intro" },
            { text: "Code for Impact Hackathon", next: "x_hackathon_intro" },
            { text: "Intercity Poetry Recitation", next: "x_poetry_intro" },
            { text: "Nepal In Words (Founder)", next: "x_niw_intro" },
            { text: "Interact Club", next: "x_interact_intro" },
            { text: "Scout", next: "x_scout_intro" }
        ]
    },
    x_dev_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Selected from 30 applicants as the youngest Core Team Lead at DEV Community Nepal. I led social media strategy, visual branding, and creative campaigns to increase community engagement, promote tech events, and highlight developer stories across platforms.",
        next: "x_dev_choice",
        apply: (s) => { s.player.creative += 2; s.player.leadership += 1; }
    },
    x_dev_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "What aspect interests you most?",
        choices: [
            { text: "Social media strategy and engagement", next: "x_dev_social" },
            { text: "Visual branding and creative campaigns", next: "x_dev_creative" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_dev_social: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I crafted content strategies that resonated with developers—balancing technical depth with accessibility, timing posts for maximum reach, and fostering genuine community conversations.",
        next: "experiences_hub",
        apply: (s) => { s.player.creative += 1; }
    },
    x_dev_creative: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "I designed visual identities for campaigns, created cohesive branding across platforms, and told developer stories through compelling visuals that captured attention and sparked engagement.",
        next: "experiences_hub",
        apply: (s) => { s.player.creative += 1; }
    },
    x_hackathon_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "Selected as one of 35 teams nationwide from 170+ applicants at the Code for Impact Hackathon by the U.S. Embassy in Nepal. I was the youngest team leader, coordinating development, distributing tasks, and presenting our solution under pressure—growing through hands-on technical workshops while learning to lead as the youngest team in the cohort.",
        next: "x_hackathon_choice",
        apply: (s) => { s.player.leadership += 2; s.player.tech += 1; }
    },
    x_hackathon_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "Which part interests you most?",
        choices: [
            { text: "Technical workshops and rapid prototyping", next: "x_hackathon_tech" },
            { text: "Team coordination under pressure", next: "x_hackathon_lead" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_hackathon_tech: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "Prototyping at speed taught me to iterate quickly, evaluate trade-offs, and stay calm while debugging under a deadline.",
        next: "experiences_hub",
        apply: (s) => { s.player.tech += 1; }
    },
    x_hackathon_lead: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "As the youngest team leader, I aligned the team, clarified goals, and presented our solution—learning to lead with clarity and empathy.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },

    x_poetry_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Selected as one of 100 participants and one of two representatives from Dharan in an intercity poetry recitation competition organized by White Moon Pad & Birat Medical College Teaching Hospital. Representing my school at the intercity level, I connected with like-minded young writers, exchanged perspectives on literature, and grew more confident in expressing ideas through spoken word on a competitive stage.",
        next: "x_poetry_choice",
        apply: (s) => { s.player.creative += 2; }
    },
    x_poetry_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "What would you like to hear more about?",
        choices: [
            { text: "Stage presence and delivery", next: "x_poetry_stage" },
            { text: "Connecting with the audience", next: "x_poetry_connect" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_poetry_stage: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I practiced breath control, pacing, and intent—letting silence carry meaning as much as words.",
        next: "experiences_hub",
        apply: (s) => { s.player.creative += 1; }
    },
    x_poetry_connect: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "I focused on how a poem lands with the listener—meeting people where they are and guiding them through feeling.",
        next: "experiences_hub",
        apply: (s) => { s.player.creative += 1; }
    },

    x_niw_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I founded Nepal In Words—a storytelling platform highlighting underrecognized Nepali authors through accessible, engaging content. It’s about transforming overlooked voices into narratives that spark curiosity and connection among young readers. TikTok: @NepalInWords",
        next: "x_niw_choice",
        apply: (s) => { s.player.creative += 2; s.player.leadership += 1; }
    },
    x_niw_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "If you were to curate a post with me today, what would you optimize for?",
        choices: [
            { text: "Cultural resonance and clarity", next: "x_niw_resonance" },
            { text: "Format for reach and accessibility", next: "x_niw_format" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_niw_resonance: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "We foreground voice and context—why this story matters now—so it resonates beyond the screen.",
        next: "experiences_hub",
        apply: (s) => { s.player.creative += 1; }
    },
    x_niw_format: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "We structure content with hooks, captions, and accessible formats to invite young readers in.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },

    x_interact_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "As a general member of the Interact Club at Bishnu Memorial School, I organized food waste awareness with practical, school-ready solutions, and supported book drives, events, and fundraisers—seeing how small actions scale through teamwork.",
        next: "x_interact_choice",
        apply: (s) => { s.player.leadership += 2; }
    },
    x_interact_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "Pick a focus area to explore.",
        choices: [
            { text: "Design a food-waste reduction plan", next: "x_interact_plan" },
            { text: "Community engagement and events", next: "x_interact_events" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_interact_plan: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "We mapped cafeteria flows, set simple rules, and measured outcomes—turning awareness into habit.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },
    x_interact_events: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "We organized drives and fundraisers that invited peers to contribute—making service collaborative and fun.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },

    x_scout_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Scouting taught me to observe and act. I still remember when a monkey tried to attack a student—panic rose, but a fellow scout stepped in. I realized courage isn’t the absence of fear, but action in spite of it.",
        next: "x_scout_choice",
        apply: (s) => { s.player.leadership += 2; }
    },
    x_scout_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "How does that resonate with you?",
        choices: [
            { text: "Courage is choosing action with care", next: "x_scout_courage" },
            { text: "Lead calmly when it matters most", next: "x_scout_lead" },
            { text: "Back to experiences", next: "experiences_hub" }
        ]
    },
    x_scout_courage: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Bravery shows up in small choices—steady hands, clear eyes, and care for others.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },
    x_scout_lead: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "Leadership is calm direction under pressure—aligning action while keeping people safe.",
        next: "experiences_hub",
        apply: (s) => { s.player.leadership += 1; }
    },
    start: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "default",
        text: "Hi! I'm Pasta. I'm glad you're here. (ᵔ◡ᵔ)",
        next: "intro1"
    },
    intro1: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Welcome! This portfolio is a small interactive story where you can get to know me better.",
        next: "intro2"
    },
    intro2: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "Are you up for it? Would you like to explore?",
        choices: [
            { text: "Yes, I'd love to know more about you!", next: "about_yes" },
            { text: "This is... unusual. What is this place?", next: "about_confused" },
            { text: "Tell me about your projects first.", next: "projects_intro" }
        ]
    },
    about_yes: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I love that! I build things and care about clear, kind experiences. (˶ᵔ ᵕ ᵔ˶)",
        next: "about_details"
    },
    about_confused: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "default",
        text: "That's totally fair! This is my portfolio. I wanted it to feel more like me.",
        next: "about_details"
    },
    about_details: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "Good stories make the web feel human. I try to make every click feel intentional.",
        next: "about_choice"
    },
    about_choice: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "So, what would you like to explore?",
        choices: [
            { text: "Show me your projects!", next: "projects_intro" },
            { text: "What are your skills?", next: "skills_intro" },
            { text: "How can I contact you?", next: "contact_intro" },
            { text: "Tell me about your experiences", next: "experiences_hub" }
        ]
    },
    projects_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "night",
        text: "Ah, my projects! Each one is like a spell I've woven with code and creativity.",
        next: "projects_list"
    },
    projects_list: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "night",
        text: "I've built web applications, interactive experiences, and tools that make people's lives easier. Each project has taught me something valuable. Check out my GitHub: github.com/khanaaaaaa",
        next: "projects_choice"
    },
    projects_choice: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "night",
        text: "Would you like to see my portfolio, or shall we talk about something else?",
        choices: [
            { text: "What technologies do you use?", next: "skills_intro" },
            { text: "Tell me about yourself personally.", next: "personal_intro" },
            { text: "I'd like to work with you!", next: "contact_intro" },
            { text: "Tell me about your experiences", next: "experiences_hub" }
        ]
    },
    skills_intro: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "My technical toolkit includes JavaScript, React, Node.js, Python, and more. I'm always learning new technologies!",
        next: "skills_details"
    },
    skills_details: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "school",
        text: "I specialize in creating immersive web experiences, full-stack development, and bringing creative ideas to life.",
        next: "skills_choice"
    },
    skills_choice: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "school",
        text: "What else would you like to know?",
        choices: [
            { text: "Show me your projects!", next: "projects_intro" },
            { text: "Tell me more about you.", next: "personal_intro" },
            { text: "How can I reach you?", next: "contact_intro" },
            { text: "Tell me about your experiences", next: "experiences_hub" }
        ]
    },
    personal_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Beyond the code, I'm someone who believes in the magic of human connection and creative expression.",
        next: "personal_details"
    },
    personal_details: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "magical",
        text: "I love anime, visual novels, and creating experiences that blur the line between art and technology.",
        next: "personal_choice"
    },
    personal_choice: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I'm glad we got to talk. What would you like to do now?",
        choices: [
            { text: "Let's talk about your work.", next: "projects_intro" },
            { text: "I want to collaborate with you!", next: "contact_intro" },
            { text: "This was wonderful. Goodbye!", next: "ending_good" },
            { text: "Tell me about your experiences", next: "experiences_hub" }
        ]
    },
    contact_intro: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "I'd love to hear from you! (ᵔ◡ᵔ) Whether you want to collaborate, chat about projects, or just say hi~ Let's connect!",
        next: "contact_details"
    },
    contact_details: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "default",
        text: "Email: khanalaastha88@gmail.com\nLinkedIn: linkedin.com/in/aastha-khanal\nInstagram: instagram.com/pastaisnotnasta\nGitHub: github.com/khanaaaaaa\n\nFeel free to reach out anytime! I'm always excited to connect with fellow creators~ (˶ᵔ ᵕ ᵔ˶)",
        next: "contact_choice"
    },
    contact_choice: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Before you go, is there anything else you'd like to know?",
        choices: [
            { text: "Tell me about your projects.", next: "projects_intro" },
            { text: "What are your skills again?", next: "skills_intro" },
            { text: "No, thank you. This was great!", next: "ending_good" }
        ]
    },
    ending_good: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Thank you for visiting my world. I hope our paths cross again soon. Until then... stay magical! ✨ (˶ᵔ ᵕ ᵔ˶)",
        next: "restart"
    },
    restart: {
        character: "Pasta",
        sprite: "character-neutral.png",
        background: "default",
        text: "Would you like to start over?",
        choices: [
            { text: "Yes, let's talk again!", next: "start" },
            { text: "No, I'll just stay here a moment.", next: "idle" }
        ]
    },
    idle: {
        character: "Pasta",
        sprite: "character-happy.png",
        background: "magical",
        text: "Take all the time you need. I'll be here when you're ready. ✨",
        next: null
    }
};

// Progress tracking keys
const TRACK_KEYS = Object.keys(dialogueData);

let currentDialogue = "start";
let isTyping = false;
let sfxEnabled = JSON.parse(localStorage.getItem("sfxEnabled") ?? "true");
let textScale = parseFloat(localStorage.getItem("textScale") ?? "1");
// music disabled (no music button)
let musicEnabled = false;
let theme = localStorage.getItem("theme") || 'day';
let backlog = [];
let currentBg = "default";

// Game state
const DEFAULT_STATE = {
    player: { name: 'You', tech: 0, creative: 0, leadership: 0, route: 'None' },
    node: 'start',
    backlog: [],
    exploreVisited: [],
    progress: 0
};
let state = loadState() || structuredClone(DEFAULT_STATE);
let visitedSet = new Set((state && state.exploreVisited) || []);

function saveState() {
    try { localStorage.setItem('pinkworld_save', JSON.stringify(state)); } catch (e) {}
}
function loadState() {
    try { return JSON.parse(localStorage.getItem('pinkworld_save') || 'null'); } catch (e) { return null; }
}
function clearState() { try { localStorage.removeItem('pinkworld_save'); } catch (e) {} }

const dialogueText = document.getElementById("dialogue-text");
const toggleSfxBtn = document.getElementById("toggle-sfx");
const toggleThemeBtn = document.getElementById('toggle-theme');
const transitionLayer = document.getElementById('transition-layer');
const toastContainer = document.getElementById('toast-container');
const nameTag = document.getElementById("name-tag");
const characterSprite = document.getElementById("character-sprite");
const choicesContainer = document.getElementById("choices");
const continueIndicator = document.getElementById("continue");
const background = document.getElementById("background");
const topbarControls = document.querySelector('.controls');
const startScreen = document.getElementById('start-screen');
const btnNewGame = document.getElementById('btn-new-game');
const btnContinue = document.getElementById('btn-continue');
const profilePanel = document.getElementById('profile-panel');
const statTech = document.getElementById('stat-tech');
const statCreative = document.getElementById('stat-creative');
const statLeadership = document.getElementById('stat-leadership');
const profileRoute = document.getElementById('profile-route');
const profileName = document.getElementById('profile-name');

// Audio engine (WebAudio fallback; no external files required)
const AudioEngine = (() => {
    let ctx;
    let bgmNodes = [];
    let masterGain;

    function ensureCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        return ctx;
    }

    function envGain(duration = 0.1, peak = 0.8) {
        const c = ensureCtx();
        const g = c.createGain();
        const t = c.currentTime;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(peak, t + Math.min(0.01, duration * 0.2));
        g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
        return g;
    }

    function playTone({ freq = 440, type = "sine", duration = 0.08, volume = 0.4, sweep = 0 }) {
        const c = ensureCtx();
        const o = c.createOscillator();
        const g = envGain(duration, volume);
        o.type = type;
        o.frequency.value = freq;
        if (sweep) {
            o.frequency.linearRampToValueAtTime(freq + sweep, c.currentTime + duration);
        }
        o.connect(g).connect(c.destination);
        o.start();
        o.stop(c.currentTime + duration);
    }

    function playSfx(name) {
        switch (name) {
            case "hover":
                playTone({ freq: 650, duration: 0.06, volume: 0.2, type: "sine" });
                break;
            case "click":
                playTone({ freq: 240, duration: 0.05, volume: 0.35, type: "square" });
                playTone({ freq: 480, duration: 0.04, volume: 0.25, type: "square" });
                break;
            case "advance":
                playTone({ freq: 400, duration: 0.12, volume: 0.3, type: "triangle", sweep: -120 });
                break;
            case "type":
                playTone({ freq: 1200, duration: 0.025, volume: 0.12, type: "square" });
                break;
            default:
                break;
        }
    }

    function startBgm() {
        const c = ensureCtx();
        if (bgmNodes.length) return; // already playing

        masterGain = c.createGain();
        masterGain.gain.value = 0.08; // gentle
        masterGain.connect(c.destination);

        const createVoice = (freq, detune) => {
            const o = c.createOscillator();
            o.type = "sawtooth";
            o.frequency.value = freq;
            o.detune.value = detune;

            const lpf = c.createBiquadFilter();
            lpf.type = "lowpass";
            lpf.frequency.value = 800;

            // Slow LFO for subtle movement
            const lfo = c.createOscillator();
            const lfoGain = c.createGain();
            lfo.frequency.value = 0.15;
            lfoGain.gain.value = 60;
            lfo.connect(lfoGain).connect(lpf.detune);

            o.connect(lpf).connect(masterGain);

            o.start();
            lfo.start();

            return [o, lpf, lfo, lfoGain, master];
        };

        const voices = [
            ...createVoice(220, -5),
            ...createVoice(330, 7),
        ];

        bgmNodes = voices;
    }

    function stopBgm() {
        const c = ensureCtx();
        const t = c.currentTime + 0.3;
        if (bgmNodes.length) {
            bgmNodes.forEach(node => {
                if (node && node.stop) {
                    try { node.stop(t); } catch(e) {}
                }
            });
            bgmNodes = [];
        }
    }

    async function init() {
        const c = ensureCtx();
        if (c.state === "suspended") {
            try { await c.resume(); } catch(e) {}
        }
    }

    return { init, playSfx, startBgm, stopBgm };
})();

function updateMusic() {
    AudioEngine.stopBgm();
}

function applyTheme() {
    if (theme === 'night') document.body.classList.add('theme-night');
    else document.body.classList.remove('theme-night');
    if (toggleThemeBtn) {
        toggleThemeBtn.textContent = `Theme: ${theme === 'night' ? 'Night' : 'Day'}`;
        toggleThemeBtn.setAttribute('aria-pressed', String(theme === 'night'));
    }
}

function showToast(text) {
    if (!toastContainer) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = text;
    toastContainer.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

// Achievements
const Achievements = {
    unlocked: new Set(JSON.parse(localStorage.getItem('pw_ach') || '[]')),
    save() { localStorage.setItem('pw_ach', JSON.stringify([...this.unlocked])); },
    unlock(key, label) {
        if (this.unlocked.has(key)) return;
        this.unlocked.add(key);
        this.save();
        playSfx('advance');
        showToast(`Achievement: ${label}`);
    }
};

function initAudioOnce() {
    AudioEngine.init().then(() => AudioEngine.stopBgm());
}
["click", "keydown", "touchstart"].forEach(evt => document.addEventListener(evt, initAudioOnce, { once: true }));

function applyTextScale() {}

function updateSfxButton() {
    if (!toggleSfxBtn) return;
    toggleSfxBtn.textContent = `SFX: ${sfxEnabled ? 'On' : 'Off'}`;
    toggleSfxBtn.setAttribute('aria-pressed', String(!sfxEnabled ? false : true));
}

function playSfx(name) { if (sfxEnabled) AudioEngine.playSfx(name); }

function createTopbarButton(id, label, ariaLabel) {
    if (!topbarControls || document.getElementById(id)) return null;
    const b = document.createElement('button');
    b.id = id;
    b.className = 'topbar-btn';
    b.textContent = label;
    if (ariaLabel) b.setAttribute('aria-label', ariaLabel);
    topbarControls.appendChild(b);
    return b;
}

function ensureInjectedStyles() {
    applyTheme();
    if (document.getElementById('pink-extras-style')) return;
    const style = document.createElement('style');
    style.id = 'pink-extras-style';
    style.textContent = `
    .sparkle { position: fixed; pointer-events: none; font-size: 14px; will-change: transform, opacity; }
    @keyframes sparkleFloat { to { transform: translateY(-60px) scale(1.3); opacity: 0; } }
    .progress-section { margin-top: 8px; }
    .progress-header { display:flex; justify-content: space-between; align-items:center; margin-bottom:4px; color:#c2185b; font-weight:700; font-size:14px; }
    .progress-bar { width:100%; height:10px; background: var(--pink-200); border:1px solid var(--pink-300); border-radius:8px; overflow:hidden; }
    .progress-fill { height:100%; width:0%; background: linear-gradient(90deg, var(--pink-400), var(--pink-600)); box-shadow: inset 0 2px 8px rgba(255,105,180,0.35); transition: width 300ms ease; }
    .progress-value { font-size: 12px; color: #5a2d3a; }
    .name-overlay { position: fixed; inset: 0; display: none; align-items: center; justify-content: center; background: rgba(0,0,0,0.2); z-index: 1500; }
    .name-overlay.open { display: flex; }
    .name-card { width: 92%; max-width: 420px; background: white; border: 2px solid var(--pink-200); border-radius: 14px; box-shadow: 0 10px 30px rgba(255,105,180,0.25); padding: 18px 20px; }
    .name-card h3 { margin: 0 0 8px 0; color: #c2185b; }
    .name-row { display: flex; gap: 8px; }
    .name-row input { flex: 1; padding: 12px 14px; border: 2px solid var(--pink-300); border-radius: 8px; font-size: 15px; }
    .name-row button { padding: 8px 12px; border-radius: 8px; border: 2px solid var(--pink-300); background: var(--pink-50); cursor: pointer; }
    `;
    document.head.appendChild(style);
}

let backlogEl;

function initUiControls() {
    ensureInjectedStyles();
    updateSfxButton();
    if (toggleSfxBtn) {
        toggleSfxBtn.addEventListener('click', () => {
            sfxEnabled = !sfxEnabled;
            localStorage.setItem('sfxEnabled', JSON.stringify(sfxEnabled));
            updateSfxButton();
        });
    }
    updateMusic();
    if (toggleThemeBtn) {
        toggleThemeBtn.addEventListener('click', () => {
            theme = theme === 'night' ? 'day' : 'night';
            localStorage.setItem('theme', theme);
            applyTheme();
            updateBackground(currentBg);
            playSfx('click');
        });
        applyTheme();
    }
    document.addEventListener('click', (e) => sparkleAt(e.clientX, e.clientY));
}

function sparkleAt(x, y) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = Math.random() > 0.5 ? '✦' : '❤';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.color = ['#ff9ec0','#ff7aa3','#ffc1d6','#ffd6e7'][Math.floor(Math.random()*4)];
    el.style.animation = 'sparkleFloat 800ms ease-out forwards';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
}

function ensureProgressUI() {
    if (!profilePanel) return;
    if (document.getElementById('progress-fill')) return;
    const sec = document.createElement('div');
    sec.className = 'progress-section';
    sec.innerHTML = `
        <div class="progress-header">
            <span>Knowing Pasta</span>
            <span class="progress-value" id="progress-value">0%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width:0%"></div></div>
    `;
    profilePanel.appendChild(sec);
}

function updateProgressBar() {
    const fill = document.getElementById('progress-fill');
    const val = document.getElementById('progress-value');
    if (!fill || !val) return;
    const total = TRACK_KEYS.length || 1;
    const pct = Math.min(100, Math.round((visitedSet.size / total) * 100));
    fill.style.width = pct + '%';
    val.textContent = pct + '%';
    state.progress = pct;
    state.exploreVisited = Array.from(visitedSet);
    saveState();
}

let typingState = { cancel: null };
function typeWriter(text, element, speed = 24) {
    return new Promise((resolve) => {
        const renderText = String(text).replace(/[\u2014]/g, ' - ');
        element.textContent = "";
        let i = 0;
        isTyping = true;
        let tm;
        typingState.cancel = () => {
            if (tm) clearTimeout(tm);
            element.textContent = renderText;
            isTyping = false;
            resolve();
        };
        function step() {
            if (i < renderText.length) {
                const ch = renderText.charAt(i);
                element.textContent += ch;
                if (i % 6 === 0 && ch.trim().length) playSfx('type');
                i++;
                tm = setTimeout(step, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }
        step();
    });
}
function skipTyping() { if (isTyping && typingState.cancel) typingState.cancel(); }

function updateBackground(bgType) {
    // Scene transition
    if (transitionLayer) {
        transitionLayer.classList.add('show');
        setTimeout(() => transitionLayer.classList.remove('show'), 300);
    }
    // Lighter aesthetic pink backgrounds adjusted by theme
    currentBg = bgType || currentBg;
    background.className = "background"; // keep base styles
    const night = theme === 'night';
    let bg = night ? 'linear-gradient(135deg, #fbd0df 0%, #f7b8cf 100%)' : 'linear-gradient(135deg, #fff6fa 0%, #ffeaf3 100%)';
    if (currentBg === 'school') bg = night ? 'linear-gradient(135deg, #fcd8e6 0%, #f6c2da 100%)' : 'linear-gradient(135deg, #fff7fb 0%, #ffddea 100%)';
    if (currentBg === 'night') bg = night ? 'linear-gradient(135deg, #f8aec8 0%, #f59bbe 60%, #ffd9ea 100%)' : 'linear-gradient(135deg, #ffd5e5 0%, #ffc2d9 60%, #ffecf6 100%)';
    if (currentBg === 'magical') bg = night ? 'linear-gradient(135deg, #fcd2e7 0%, #f8bedd 50%, #ffe9f4 100%)' : 'linear-gradient(135deg, #fff0f8 0%, #ffd6e7 50%, #fff9fc 100%)';
    background.style.background = bg;
}


async function showDialogue(dialogueKey) {
    const dialogue = dialogueData[dialogueKey];
    if (!dialogue) return;

    currentDialogue = dialogueKey;
    state.node = dialogueKey;
    visitedSet.add(dialogueKey);
    updateProgressBar();
    choicesContainer.innerHTML = "";
    continueIndicator.style.display = "none";

    nameTag.textContent = "Pasta";
    characterSprite.src = dialogue.sprite;
    characterSprite.style.animation = "fadeIn 0.5s ease";
    
    updateBackground(dialogue.background);

    await typeWriter(dialogue.text, dialogueText);

    // Make URLs clickable
    const urlRegex = /(https?:\/\/[^\s]+|[a-z]+\.com\/[^\s]+|github\.com\/[^\s]+|linkedin\.com\/[^\s]+|instagram\.com\/[^\s]+)/gi;
    if (urlRegex.test(dialogueText.textContent)) {
        dialogueText.innerHTML = dialogueText.textContent.replace(urlRegex, (url) => {
            const fullUrl = url.startsWith('http') ? url : 'https://' + url;
            return `<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" style="color: #ff69b4; text-decoration: underline;">${url}</a>`;
        });
    }

    // Apply node effect if present
    if (typeof dialogue.apply === 'function') {
        dialogue.apply(state);
        updateProfile();
    }

    // Add to backlog
    const entry = { character: dialogue.character, text: dialogue.text };
    backlog.push(entry);
    state.backlog.push(entry);
    if (backlog.length > 200) backlog.shift();
    if (state.backlog.length > 200) state.backlog.shift();

    saveState();

    if (dialogue.choices) {
        showChoices(dialogue.choices);
    } else if (dialogue.next) {
        continueIndicator.style.display = "block";
        document.addEventListener("click", handleContinue);
    }
    // Unlock achievements for first route pick or stat thresholds
    if (dialogueKey.startsWith('route_')) {
        Achievements.unlock('first_route', 'First Steps on a Path');
    }
    if (state.player.tech >= 3) Achievements.unlock('tech_3', 'Tech Novice');
    if (state.player.creative >= 3) Achievements.unlock('creative_3', 'Creative Novice');
    if (state.player.leadership >= 3) Achievements.unlock('leader_3', 'Leadership Novice');
    if (dialogueKey === 'x_hackathon_intro') Achievements.unlock('young_lead', 'Youngest Team Leader');
    if (dialogueKey === 'x_poetry_intro') Achievements.unlock('stage_voice', 'Stage Voice');
    if (dialogueKey === 'x_niw_intro') Achievements.unlock('storyteller', 'Storyteller');
    if (dialogueKey === 'x_interact_intro') Achievements.unlock('community_builder', 'Community Builder');
    if (dialogueKey === 'x_scout_intro') Achievements.unlock('bravery_action', 'Bravery in Action');
}

function showChoices(choices) {
    choicesContainer.innerHTML = "";
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = choice.text;
        button.addEventListener("mouseenter", () => playSfx("hover"));
        button.addEventListener("click", () => playSfx("click"));
        button.onclick = () => {
            if (!isTyping) {
                const nextNode = dialogueData[choice.next];
                if (nextNode && typeof nextNode.apply === 'function') {
                    nextNode.apply(state);
                    updateProfile();
                }
                showDialogue(choice.next);
            }
        };
        choicesContainer.appendChild(button);
    });
}

function handleContinue(e) {
    if (!isTyping && !e.target.classList.contains("choice-btn")) {
        playSfx("advance");
        document.removeEventListener("click", handleContinue);
        const dialogue = dialogueData[currentDialogue];
        if (dialogue.next) {
            showDialogue(dialogue.next);
        }
    }
}

characterSprite.onerror = function() {
    this.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='500'%3E%3Crect fill='%23667eea' width='300' height='500' rx='20'/%3E%3Ctext x='150' y='250' font-size='24' fill='white' text-anchor='middle'%3ECharacter%3C/text%3E%3C/svg%3E";
};

// Start menu + profile wiring
function updateProfile() {
    if (!profilePanel) return;
    profileName.textContent = state.player.name;
    statTech.textContent = state.player.tech;
    statCreative.textContent = state.player.creative;
    statLeadership.textContent = state.player.leadership;
    profileRoute.textContent = state.player.route;
    ensureProgressUI();
    updateProgressBar();
}

function showGameUI() {
    startScreen.style.display = 'none';
    profilePanel.style.display = 'block';
    ensureProgressUI();
    updateProgressBar();
}

function showStartMenu() {
    startScreen.style.display = 'flex';
    profilePanel.style.display = 'none';
}

function showNameOverlay(next) {
    if (document.getElementById('name-overlay')) return; // already open
    const ov = document.createElement('div');
    ov.id = 'name-overlay';
    ov.className = 'name-overlay open';
    ov.innerHTML = `
      <div class="name-card">
        <h3>Before we start</h3>
        <p>What should I call you?</p>
        <div class="name-row">
          <input id="visitor-name" type="text" maxlength="24" placeholder="Your name" />
          <button id="visitor-go">Start</button>
        </div>
      </div>
    `;
    document.body.appendChild(ov);
    const input = ov.querySelector('#visitor-name');
    const go = ov.querySelector('#visitor-go');
    const commit = () => {
        const clean = (input.value || '').trim().replace(/\s+/g, ' ').slice(0,24) || 'friend';
        try { localStorage.setItem('pw_visitor_name', clean); } catch(e) {}
        if (state && state.player) state.player.name = clean;
        updateProfile();
        ov.remove();
        next && next();
    };
    go.addEventListener('click', commit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') commit(); });
    input.focus();
}

function ensureName(next) {
    const current = (localStorage.getItem('pw_visitor_name') || '').trim();
    if (current) {
        if (state && state.player) state.player.name = current;
        next && next();
    } else {
        showNameOverlay(() => next && next());
    }
}

function bindMenu() {
    if (btnNewGame) btnNewGame.addEventListener('click', () => {
        playSfx('click');
        clearState();
        state = structuredClone(DEFAULT_STATE);
        backlog = [];
        visitedSet = new Set();
        ensureName(() => {
            updateProfile();
            showGameUI();
            ensureProgressUI();
            updateProgressBar();
            showDialogue('menu_intro');
        });
    });
    if (btnContinue) btnContinue.addEventListener('click', () => {
        playSfx('click');
        const saved = loadState();
        const proceed = () => {
            if (saved) {
                state = saved;
                backlog = saved.backlog || [];
                visitedSet = new Set((saved && saved.exploreVisited) || []);
                if (!state.player.name) state.player.name = (localStorage.getItem('pw_visitor_name')||'friend');
                updateProfile();
                showGameUI();
                ensureProgressUI();
                updateProgressBar();
                showDialogue(state.node || 'start');
            } else {
                state = structuredClone(DEFAULT_STATE);
                updateProfile();
                showGameUI();
                showDialogue('start');
            }
        };
        const current = (localStorage.getItem('pw_visitor_name')||'').trim();
        if (!current) ensureName(proceed); else proceed();
    });
}

function initStart() {
    updateProfile();
    if (loadState()) {
        showStartMenu();
    } else {
        showStartMenu();
    }
    bindMenu();
}

// Sticker Board System
function initStickerBoard() {
    const board = document.getElementById('sticker-board');
    const addBtn = document.getElementById('add-sticker-btn');
    
    loadStickers();
    
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    
    const startDrag = (e) => {
        if (e.target.closest('.sticker-item') || e.target.closest('.sticker-container')) return;
        
        isDragging = true;
        board.classList.add('dragging');
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        initialX = clientX - board.offsetLeft;
        initialY = clientY - board.offsetTop;
        e.preventDefault();
    };
    
    const moveDrag = (e) => {
        if (isDragging) {
            e.preventDefault();
            
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            
            currentX = clientX - initialX;
            currentY = clientY - initialY;
            board.style.left = currentX + 'px';
            board.style.top = currentY + 'px';
            board.style.right = 'auto';
            board.style.bottom = 'auto';
        }
    };
    
    const endDrag = () => {
        if (isDragging) {
            isDragging = false;
            board.classList.remove('dragging');
        }
    };
    
    board.addEventListener('mousedown', startDrag);
    board.addEventListener('touchstart', startDrag, { passive: false });
    
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('touchmove', moveDrag, { passive: false });
    
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
    
    addBtn.addEventListener('click', () => {
        playSfx('click');
        showStickerModal();
    });
}

function loadStickers() {
    const board = document.getElementById('sticker-board');
    const container = document.createElement('div');
    container.className = 'sticker-container';
    
    const existingContainer = board.querySelector('.sticker-container');
    if (existingContainer) existingContainer.remove();
    
    if (!db) {
        container.innerHTML = '<div style="padding:10px;color:#c2185b;">Stickers unavailable</div>';
        board.appendChild(container);
        return;
    }
    db.ref('stickers').limitToLast(20).on('value', (snapshot) => {
        container.innerHTML = '';
        const stickers = [];
        snapshot.forEach(child => stickers.push(child.val()));
        stickers.reverse().forEach(sticker => {
            const item = document.createElement('div');
            item.className = 'sticker-item';
            item.innerHTML = `
                <img src="${sticker.emoji}" alt="sticker" class="sticker-emoji" onerror="this.style.display='none'">
                <div class="sticker-note">${escapeHtml(sticker.note)}</div>
                <div class="sticker-name">~ ${escapeHtml(sticker.name)}</div>
            `;
            container.appendChild(item);
        });
    });
    board.appendChild(container);
}

function showStickerModal() {
    const modal = document.createElement('div');
    modal.className = 'sticker-modal open';
    modal.innerHTML = `
        <div class="sticker-modal-card">
            <h3>Leave a Sticker for Pasta</h3>
            <div class="emoji-picker">
                <button class="emoji-btn" data-emoji="stickers/sticker1.png"><img src="stickers/sticker1.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker2.png"><img src="stickers/sticker2.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker3.png"><img src="stickers/sticker3.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker4.png"><img src="stickers/sticker4.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker5.png"><img src="stickers/sticker5.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker6.png"><img src="stickers/sticker6.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker7.png"><img src="stickers/sticker7.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker8.png"><img src="stickers/sticker8.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker9.png"><img src="stickers/sticker9.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker10.png"><img src="stickers/sticker10.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker11.png"><img src="stickers/sticker11.png" alt=""></button>
                <button class="emoji-btn" data-emoji="stickers/sticker12.png"><img src="stickers/sticker12.png" alt=""></button>
            </div>
            <input type="text" id="sticker-name" placeholder="Your name" maxlength="20" />
            <textarea id="sticker-note" placeholder="Leave a sweet message..." maxlength="100"></textarea>
            <div class="sticker-modal-buttons">
                <button class="sticker-cancel">Cancel</button>
                <button class="sticker-submit">Leave Sticker</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    let selectedEmoji = 'stickers/sticker1.png';
    modal.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedEmoji = btn.dataset.emoji;
            playSfx('click');
        });
    });
    modal.querySelector('.emoji-btn').classList.add('selected');
    
    modal.querySelector('.sticker-cancel').addEventListener('click', () => {
        playSfx('click');
        modal.remove();
    });
    
    modal.querySelector('.sticker-submit').addEventListener('click', () => {
        const nameInput = document.getElementById('sticker-name');
        const name = nameInput ? nameInput.value.trim() || 'Anonymous' : (state.player.name || 'Anonymous');
        const note = document.getElementById('sticker-note').value.trim();
        
        if (note) {
            if (db) {
                db.ref('stickers').push({
                    emoji: selectedEmoji,
                    name,
                    note,
                    date: Date.now()
                });
            }
            showToast('Sticker added');
            playSfx('advance');
            document.getElementById('sticker-note').value = '';
            document.getElementById('sticker-name').value = '';
            modal.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
            modal.querySelector('.emoji-btn').classList.add('selected');
            selectedEmoji = 'stickers/sticker1.png';
        } else {
            showToast('Please write a message!');
        }
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            playSfx('click');
            modal.remove();
        }
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

initUiControls();
updateMusic();
applyTheme();
initStart();
initStickerBoard();















