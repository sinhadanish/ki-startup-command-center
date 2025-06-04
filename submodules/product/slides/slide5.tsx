"use client"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Code, Heart, BarChart3, Award, Shield } from "lucide-react"

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

const Slide5 = () => {
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

        <h1 className="text-5xl font-extrabold text-gray-900 font-gilroy mb-2">Our Defensibility Strategy</h1>
        <h2 className="text-3xl font-medium text-gray-700 font-gilroy">Building competitive advantage from Day One!</h2>
      </motion.div>

      {/* Main content - 4 key defensibility areas in a grid */}
      <div className="grid grid-cols-2 gap-6 z-10 flex-1">
        {/* Technical IP */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Code className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Technical IP</h3>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Developing Human-AI-Human Framework™</p>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Anxiety detection prototype + patent research</p>
            </li>
          </ul>
        </motion.div>

        {/* Relationship Framework */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Heart className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Relationship Framework</h3>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Conflict resolution (Gottman + NVC)</p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Attachment & timing-based personalization</p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Emotion regulation via Polyvagal + DBT methods</p>
            </li>
          </ul>
        </motion.div>

        {/* Smart Data Flywheel */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-3">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Smart Data Flywheel</h3>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Structured data loops with longitudinal learning</p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Network effects: More couples → smarter AI</p>
            </li>
          </ul>
        </motion.div>

        {/* Category Leadership */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Award className="w-5 h-5 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Category Leadership</h3>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">First AI-native companion for couples</p>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Privacy-first design</p>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 mr-2 mt-1">•</span>
              <p className="text-base text-gray-700 font-inter">Backed by expert advisors</p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom conclusion */}
      <motion.div
        className="mt-auto bg-indigo-50 p-4 rounded-lg flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mr-4">
          <Shield className="w-5 h-5 text-indigo-600" />
        </div>
        <p className="text-center text-indigo-700 font-medium font-inter">
          These moats compound, making Ki harder to compete with every day!
        </p>
      </motion.div>
    </div>
  )
}

export default Slide5
