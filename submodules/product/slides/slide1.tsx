"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load Gilroy font for headlines (using local font as Gilroy isn't on Google Fonts)
const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
})

const Slide1 = () => {
  return (
    <div className={`w-full h-full bg-white flex p-16 ${inter.variable} ${gilroy.variable} relative overflow-hidden`}>
      {/* Left content area with vertical accent line */}
      <motion.div
        className="w-[55%] flex flex-col justify-center relative pl-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600"></div>

        {/* Company name/logo - small, understated */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-600 tracking-wide font-gilroy">Ki</h2>
        </motion.div>

        {/* Headline - split into two parts with different weights */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="font-gilroy leading-tight tracking-tight">
            <span className="text-7xl font-extrabold text-gray-900 block mb-2">AI Companion</span>
            <span className="text-5xl font-medium text-gray-800">for healthier relationships</span>
          </h1>
        </motion.div>

        {/* Subheadline with adequate spacing */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-2xl text-gray-600 font-inter">Empathetic AI. Built for two. Psychology backed.</p>
        </motion.div>

        {/* Metrics in a clean horizontal row with clear labels - with subtle background */}
        <motion.div
          className="relative rounded-lg bg-indigo-50/30 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-indigo-600 font-gilroy">16K+</p>
              <p className="text-sm uppercase tracking-wider text-gray-700 font-inter">Website Hits</p>
              <p className="text-xs text-gray-500 font-inter mt-1">in 72 hours after launch</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-purple-600 font-gilroy">1688+</p>
              <p className="text-sm uppercase tracking-wider text-gray-700 font-inter">Conversations</p>
              <p className="text-xs text-gray-500 font-inter mt-1">with Ki till date</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-indigo-600 font-gilroy">4.9</p>
              <p className="text-sm uppercase tracking-wider text-gray-700 font-inter">Star Rating</p>
              <p className="text-xs text-gray-500 font-inter mt-1">user satisfaction</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right visualization area - approximately 45% */}
      <motion.div
        className="w-[45%] flex items-center justify-center pl-12 relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-md">
          {/* Duotone effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-600/30 mix-blend-color z-10"></div>

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 z-10"></div>

          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b45L2bgwmogzNvk3ZUQEc.jpg-dfQ3okZCuFw99FUMuLzQOGExMHjo5i.jpeg"
            alt="Happy couple connecting in purple ambient lighting"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Slide1
