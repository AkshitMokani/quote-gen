// utils/farcasterShare.js

export function shareOnFarcaster(text) {
  const encoded = encodeURIComponent(text);

  // Warpcast share URL
  const url = `https://warpcast.com/~/compose?text=${encoded}`;

  // Open popup window
  window.open(url, "_blank", "width=600,height=700");
}
