# Lifebite - The Daily insight & personalized life advice
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-support-yellow?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/austinwin)  

[Lifebite App](https://austinwin.github.io/lifebite/): https://austinwin.github.io/lifebite/  
LifeBite is a privacy-first Progressive Web App (PWA) for logging the small but important moments of daily life. Designed for kids, adults, or anyone who wants to capture their day, it stores everything locally on your device - no accounts, no servers, no tracking.

Every “bite” is short and raw (max 256 characters) - once written it cannot be edited, and after a daily summary is generated, logs cannot be deleted. This ensures authenticity and keeps your reflections unfiltered.

At the end of the day, LifeBite summarizes your bites into key themes, highlights what’s working, where to improve, and even suggests new ideas, trends, or developments to explore tomorrow.  
👉 A “bite” is just that — a small, honest piece of your day. Log, reflect, learn, repeat.  

## Features

- 📝 **Quick Logging**: Easily record moments throughout your day (limited to 280 characters per entry)
- 📅 **Date Navigation**: Browse through your entries with intuitive calendar and week strip navigation
- 🧠 **AI-Powered Insights**: AI generates personalized reflections before bedtime  
- 📊 **Structured Feedback**: Receive specific recommendations for what to keep doing, improve, adjust in your schedule, and next actions
- 🔄 **Offline Support**: Continue logging even when offline - your data will sync when connection is restored
- 🌙 **Theme Options**: Choose between light, dark, or system theme
- 💾 **Data Control**: Export and import your data for backup or migration
- 📱 **Mobile-First Design**: Optimized for mobile devices with responsive layout
- 🔄 **Immutable logs**: Capture raw, authentic thoughts with no edits after summary.
- 🔄 **For all ages**: Simple UI that works for both kids and adults.
- 🔄 **Daily streaks**: Track how many days in a row you’ve logged.
- 🔄 **Privacy-first**: All data stored in local storage only, no log.  

## Installation

LifeBite is a Progressive Web App that can be installed on your device:

1. Visit the LifeBite website
2. On mobile devices, tap the "Add to Home Screen" option in your browser menu
3. On desktop, look for the install icon in your browser's address bar

Or run it locally:

1. Clone this repository
2. Navigate to the `test` directory
3. Open `index.html` in your browser (or use a local server)

## Usage

### Adding Entries
- Type your thoughts, activities, or moments in the text field at the bottom of the screen
- Press the paper plane button or hit Enter to save the entry
- Each entry is limited to 280 characters

### Navigating Dates
- Use the left/right arrows to move between days
- Tap the date to open the calendar for quick navigation
- Use the week strip to jump between days of the current week
- Tap "Today" to return to the current date

### Getting Insights
- Add at least one log entry for the day
- Click the "Summary" button to generate AI-powered insights
- View personalized recommendations in four categories:
  - Keep Doing
  - Areas to Improve
  - Schedule Adjustments
  - Next Actions

### Managing Your Data
- Click the settings gear icon to access settings
- Export your data as a JSON file for backup
- Import previously exported data
- Clear all logs for a specific day with the "Clear" button

## Technical Details

- Built with vanilla JavaScript, HTML, and CSS
- Uses local storage for data persistence
- Connects to an AI endpoint for generating personalized advice
- Implements offline functionality with request queuing
- Designed as a Progressive Web App with installability

## Customization

You can customize the AI endpoint in the settings menu if you want to use your own backend service.

## Privacy

All your logs are stored locally on your device. Only when generating summaries is your data temporarily sent to the AI service.
