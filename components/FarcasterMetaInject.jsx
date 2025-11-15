"use client";

import { useEffect } from 'react';

export default function FarcasterMetaInject() {
  useEffect(() => {
    // Ensure the meta tag exists (fallback if metadata API doesn't render it)
    const fcMiniappMeta = JSON.stringify({
      version: "1",
      imageUrl: "https://quotegen-omega.vercel.app/QuoteGen.png",
      button: {
        title: "Open QuoteGen",
        action: {
          type: "open_url",
          url: "https://quotegen-omega.vercel.app/"
        }
      }
    });

    // Check if meta tag already exists
    let existingMeta = document.querySelector('meta[name="fc:miniapp"]');
    if (!existingMeta) {
      // Create and add fc:miniapp meta tag
      existingMeta = document.createElement('meta');
      existingMeta.name = 'fc:miniapp';
      existingMeta.content = fcMiniappMeta;
      document.head.appendChild(existingMeta);
    } else {
      // Update if it exists but content is different
      existingMeta.content = fcMiniappMeta;
    }

    // Also ensure fc:frame exists
    let existingFrame = document.querySelector('meta[name="fc:frame"]');
    if (!existingFrame) {
      existingFrame = document.createElement('meta');
      existingFrame.name = 'fc:frame';
      existingFrame.content = fcMiniappMeta;
      document.head.appendChild(existingFrame);
    } else {
      existingFrame.content = fcMiniappMeta;
    }
  }, []);

  return null;
}

