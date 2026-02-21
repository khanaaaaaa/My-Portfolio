# Firebase Setup Instructions

1. Go to https://console.firebase.google.com/
2. Click "Add project" or "Create a project"
3. Enter project name (e.g., "portfolio-stickers")
4. Disable Google Analytics (optional)
5. Click "Create project"

## Add Web App:
1. Click the web icon (</>)
2. Register app nickname: "Portfolio"
3. Copy the config values
4. Click "Continue to console"

## Setup Realtime Database:
1. In left sidebar, click "Realtime Database"
2. Click "Create Database"
3. Choose location (us-central1)
4. Start in "test mode"
5. Click "Enable"

## Set Database Rules:
1. Click "Rules" tab
2. Replace with:
```json
{
  "rules": {
    "stickers": {
      ".read": true,
      ".write": true
    }
  }
}
```
3. Click "Publish"

## Update script.js:
Replace the firebaseConfig values at the top of script.js with your actual values from Firebase console.

Current placeholder values need to be replaced:
- apiKey: "YOUR_ACTUAL_API_KEY"
- authDomain: "YOUR_PROJECT.firebaseapp.com"
- databaseURL: "https://YOUR_PROJECT.firebaseio.com"
- projectId: "YOUR_PROJECT_ID"
