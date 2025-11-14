// components/QuoteCard.jsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function QuoteCard({ text }) {
  if (!text) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.22 }}
      className="w-full"
    >
      <div className="text-lg leading-7 font-medium">{text}</div>
      <div className="small mt-3 text-slate-500"> - via QuoteGen</div>
    </motion.div>
  )
}
