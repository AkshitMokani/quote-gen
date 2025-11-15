"use client";

import { useEffect } from 'react';

export default function FarcasterMeta() {
  useEffect(() => {
    // Remove any existing fc:miniapp meta tag
    const existingMeta = document.querySelector('meta[name="fc:miniapp"]');
    if (existingMeta) {
      existingMeta.remove();
    }

    // Create and add the fc:miniapp meta tag
    const meta = document.createElement('meta');
    meta.name = 'fc:miniapp';
    meta.content = JSON.stringify({
      version: "1",
      imageUrl: "https://quotegen-omega.vercel.app/icon.png",
      button: {
        title: "Open QuoteGen",
        action: {
          type: "open_url",
          url: "https://quotegen-omega.vercel.app/"
        }
      }
    });
    document.head.appendChild(meta);

    // Cleanup function
    return () => {
      const metaToRemove = document.querySelector('meta[name="fc:miniapp"]');
      if (metaToRemove) {
        metaToRemove.remove();
      }
    };
  }, []);

  return null;
}

