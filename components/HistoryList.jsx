// components/HistoryList.jsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function HistoryList({ items = [], onShareFarcaster, onShareX }) {
  if (!items.length) return <div className="small">No saved quotes yet.</div>

  return (
    <div className="space-y-3">
      {items.map(it => (
        <motion.div key={it.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
          <div className="historyItem">
            <div style={{flex:1}}>
              <div className="small text-slate-400 capitalize">{it.cat}</div>
              <div className="mt-2">{it.text}</div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <button className="btn btn-ghost" onClick={() => onShareFarcaster(it.text)}>Farcaster</button>
              <button className="btn btn-ghost" onClick={() => onShareX(it.text)}>X</button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
