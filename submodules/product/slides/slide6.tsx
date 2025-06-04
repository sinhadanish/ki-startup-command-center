"use client"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Image from "next/image"

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load Gilroy font for headlines
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

const Slide6 = () => {
  return (
    <div
      className={`w-full h-full bg-white flex flex-col p-16 ${inter.variable} ${gilroy.variable} relative overflow-hidden`}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 z-0"></div>

      {/* Slide title with vertical accent line */}
      <motion.div
        className="relative pl-6 mb-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600"></div>

        <h1 className="text-4xl font-extrabold text-gray-900 font-gilroy mb-2">Early Traction & Partnerships</h1>
        <h2 className="text-2xl font-medium text-gray-700 font-gilroy">
          Building credibility with key industry partners
        </h2>
      </motion.div>

      {/* Main content */}
      <div className="grid grid-cols-2 gap-10 z-10 flex-1">
        {/* Left column - Featured partnerships */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-6 h-full">
            <h3 className="text-2xl font-semibold text-gray-900 font-gilroy mb-6">Featured Partnerships</h3>

            <div className="space-y-8">
              {/* Hume Partnership */}
              <motion.div
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-32 h-16 relative flex-shrink-0 bg-[#faf5f0] rounded-lg flex items-center justify-center p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hume-h07hkmfnZ4H8Yt8om7hMslh7vdeLYR.png"
                    alt="Hume Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 font-gilroy">Hume</h4>
                  <p className="text-gray-600 font-inter">
                    Strategic AI research partnership for emotional intelligence algorithms
                  </p>
                </div>
              </motion.div>

              {/* Rural Wash Partners Forum */}
              <motion.div
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-32 h-16 relative flex-shrink-0 bg-[#f0f9ff] rounded-lg flex items-center justify-center p-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rural_wash_partners_forum_logo-JHZNlJsyP2hpNIc3QequBBudIB43FK.jpeg"
                    alt="Rural Wash Partners Forum Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 font-gilroy">Rural Wash Partners Forum 2025</h4>
                  <p className="text-gray-600 font-inter">
                    Expanding Ki's relationship support to underserved communities
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right column - Traction metrics */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 font-gilroy mb-6">Early Traction Metrics</h3>

            <div className="space-y-6">
              {/* User Growth */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium text-gray-800 font-gilroy">User Growth</h4>
                  <span className="text-sm text-indigo-600 font-medium font-inter">+127% MoM</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              {/* Retention */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium text-gray-800 font-gilroy">30-Day Retention</h4>
                  <span className="text-sm text-indigo-600 font-medium font-inter">78%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>

              {/* Engagement */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium text-gray-800 font-gilroy">Daily Active Usage</h4>
                  <span className="text-sm text-indigo-600 font-medium font-inter">3.2 sessions/day</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 text-white">
            <p className="text-lg italic mb-4 font-inter">
              "Ki has transformed how we understand relationship dynamics in our community outreach programs."
            </p>
            <p className="font-medium font-gilroy">— Partnership Director, Rural Wash Partners Forum</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide6
