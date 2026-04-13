document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');

    // Auto-refresh logic (optional for digital signage, but good practice)
    // The system might handle this, but adding a log for visibility
    const now = new Date();
    console.log(`Current Time: ${now.toLocaleTimeString()}`);
});
