'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, Card, CardContent, CardMedia, Typography, CircularProgress, Avatar } from '@mui/material'
import Link from 'next/link'
import { Send as TelegramIcon, Menu as MenuIcon } from '@mui/icons-material'

const bots = [
  {
    id: 1,
    name: 'Nekozu Music',
    description: 'Download your favourite music from many platform with our bots!.',
    image: '/down.svg?height=150&width=150',
    link: 'https://t.me/NekoMuBot',
  },
  {
    id: 2,
    name: 'Nekozu Translate',
    description: 'Translate text between multiple languages instantly. With also voice to text and translate from photo!',
    image: '/trans.svg?height=150&width=150',
    link: 'https://t.me/NekoTransBot',
  },
]

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [typedText, setTypedText] = useState('')
  const [navbarOpen, setNavbarOpen] = useState(false)
  const fullText = "Best Telegram Bots for Your Needs :3"

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
    }
  }, [typedText])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar
              src="/project.svg?height=40&width=40"
              alt="Nekozu Logo"
              className="cursor-pointer"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
            <Link href="/" className="text-2xl font-bold text-blue-600">Nekozu</Link>
          </div>
          <AnimatePresence>
            {navbarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-16 left-0 right-0 bg-white shadow-md p-4"
              >
                <Link href="https://t.me/nekozuX" className="block py-2 text-blue-600 hover:text-blue-800">
                  Telegram Channel
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-screen"
          >
            <CircularProgress size={60} style={{ color: '#3B82F6' }} />
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <section className="py-20">
              <div className="container mx-auto text-center px-4">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {typedText}
                </motion.h1>
                <motion.p
                  className="text-xl mb-8 text-gray-600"
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Giving your Telegram experience with our bots! 
                </motion.p>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    variant="contained"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                    size="large"
                    startIcon={<TelegramIcon />}
                    href="https://t.me/nekozuX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our Channel
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Bot List */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Telegram Bots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {bots.map((bot) => (
                    <motion.div
                      key={bot.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href={bot.link} target="_blank" rel="noopener noreferrer">
                        <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                          <CardMedia
                            component="img"
                            height="100"
                            image={bot.image}
                            alt={bot.name}
                            className="w-24 h-24 mx-auto mt-4"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h6" component="div" className="text-blue-600 font-bold text-center">
                              {bot.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="text-center">
                              {bot.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-8">
              <div className="container mx-auto text-center">
                <p>&copy; 2024 Nekozu Network. All rights reserved.</p>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}
