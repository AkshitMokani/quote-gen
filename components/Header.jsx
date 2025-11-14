// components/Header.jsx
'use client'
import React from 'react'

export default function Header({ subtitle = 'Blockchain quotes • Share to Farcaster & X' }) {
  return (
    <header className="app-header mb-6">
      <div className="brand">
        <div className="logo">QG</div>
        <div>
          <h1 className="text-2xl font-semibold">QuoteGen</h1>
          <div className="small">{subtitle}</div>
        </div>
      </div>
    </header>
  )
}
