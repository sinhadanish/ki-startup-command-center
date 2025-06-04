"use client"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { BarChart3, Clock, Brain, Bot } from "lucide-react"

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

const Slide3 = () => {
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

        <h1 className="text-4xl font-extrabold text-gray-900 font-gilroy mb-2">
          The 4 Destructive Communication Patterns
        </h1>
        <h2 className="text-2xl font-medium text-gray-700 font-gilroy">
          Evidence-Based Interventions for Relationship Success
        </h2>
      </motion.div>

      {/* Main content - 4 key insights in a grid */}
      <div className="grid grid-cols-2 gap-6 z-10 flex-1">
        {/* Insight 1: Communication Patterns */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mr-3">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Communication Patterns</h3>
              <p className="text-sm text-gray-500 font-inter opacity-0 group-hover:opacity-100 transition-opacity">
                American Psychological Association, 2022
              </p>
            </div>
          </div>

          <p className="text-5xl font-extrabold text-indigo-600 font-gilroy mb-3">70%</p>

          <p className="text-base text-gray-700 font-inter mb-3">
            of conflicts are primarily caused by destructive communication patterns between couples.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-2 rounded flex items-center">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 text-red-500 text-xs font-bold">
                1
              </span>
              <p className="text-sm text-gray-700 font-inter">Criticism</p>
            </div>
            <div className="bg-gray-50 p-2 rounded flex items-center">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 text-red-500 text-xs font-bold">
                2
              </span>
              <p className="text-sm text-gray-700 font-inter">Contempt</p>
            </div>
            <div className="bg-gray-50 p-2 rounded flex items-center">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 text-red-500 text-xs font-bold">
                3
              </span>
              <p className="text-sm text-gray-700 font-inter">Defensiveness</p>
            </div>
            <div className="bg-gray-50 p-2 rounded flex items-center">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-2 text-red-500 text-xs font-bold">
                4
              </span>
              <p className="text-sm text-gray-700 font-inter">Stonewalling</p>
            </div>
          </div>
        </motion.div>

        {/* Insight 2: Critical Timing */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Critical Timing</h3>
              <p className="text-sm text-gray-500 font-inter opacity-0 group-hover:opacity-100 transition-opacity">
                Journal of Family Psychology, 2023
              </p>
            </div>
          </div>

          <p className="text-5xl font-extrabold text-purple-600 font-gilroy mb-3">3.4×</p>

          <p className="text-base text-gray-700 font-inter mb-3">
            more effective when intervention happens within the first hour of conflict.
          </p>

          <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden mb-2">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-green-100 flex items-center justify-center">
              <p className="text-xs font-medium text-green-700 font-inter">1hr: 80%</p>
            </div>
            <div className="absolute top-0 left-1/3 w-1/3 h-full bg-yellow-50 flex items-center justify-center">
              <p className="text-xs font-medium text-yellow-700 font-inter">6hrs: 50%</p>
            </div>
            <div className="absolute top-0 left-2/3 right-0 h-full bg-red-50 flex items-center justify-center">
              <p className="text-xs font-medium text-red-700 font-inter">24hrs+: 30%</p>
            </div>
          </div>
        </motion.div>

        {/* Insight 3: Emotional Regulation */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Emotional Regulation</h3>
              <p className="text-sm text-gray-500 font-inter opacity-0 group-hover:opacity-100 transition-opacity">
                Relationship Research Institute, 2021
              </p>
            </div>
          </div>

          <p className="text-5xl font-extrabold text-blue-600 font-gilroy mb-3">92%</p>

          <p className="text-base text-gray-700 font-inter mb-3">
            of successful long-term couples demonstrate strong emotional regulation skills during conflicts.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-blue-50 p-2 rounded">
              <p className="text-sm font-medium text-blue-700 font-inter">43% lower</p>
              <p className="text-xs text-gray-600 font-inter">amygdala activation</p>
            </div>
            <div className="bg-blue-50 p-2 rounded">
              <p className="text-sm font-medium text-blue-700 font-inter">67% higher</p>
              <p className="text-xs text-gray-600 font-inter">heart rate variability</p>
            </div>
          </div>
        </motion.div>

        {/* Insight 4: AI Therapeutic Efficacy */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mr-3">
              <Bot className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">AI Therapeutic Efficacy</h3>
              <p className="text-sm text-gray-500 font-inter opacity-0 group-hover:opacity-100 transition-opacity">
                JAMA Psychiatry, 2024
              </p>
            </div>
          </div>

          <p className="text-5xl font-extrabold text-teal-600 font-gilroy mb-3">94%</p>

          <p className="text-base text-gray-700 font-inter mb-3">
            effectiveness rate of AI therapy compared to traditional therapy with significant accessibility advantages.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-teal-50 p-2 rounded">
              <p className="text-sm font-medium text-teal-700 font-inter">78% higher</p>
              <p className="text-xs text-gray-600 font-inter">disclosure comfort</p>
            </div>
            <div className="bg-teal-50 p-2 rounded">
              <p className="text-sm font-medium text-teal-700 font-inter">24/7</p>
              <p className="text-xs text-gray-600 font-inter">availability</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide3
