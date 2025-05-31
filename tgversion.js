import gplay from "google-play-scraper";

async function getTelegramVersion() {
  try {
    const appData = await gplay.app({ appId: 'org.telegram.messenger' });
    console.log(appData.version);
  } catch (error) {
    console.error('Failed to fetch version:', error.message);
  }
}

getTelegramVersion();
