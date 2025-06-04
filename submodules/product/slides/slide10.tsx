"use client"
import { motion } from "framer-motion"
import { Calendar, Users, DollarSign } from "lucide-react"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

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

const Slide10 = () => {
  return (
    <div
      className={`w-full h-full bg-white flex flex-col justify-start items-start p-16 ${inter.variable} ${gilroy.variable} relative overflow-hidden`}
    >
      {/* Vertical accent line */}
      <div className="absolute left-4 top-16 bottom-16 w-[3px] bg-indigo-600"></div>

      {/* Slide title */}
      <motion.div
        className="relative z-10 pl-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-gilroy text-6xl font-extrabold text-gray-900 mb-2">
          Join us in transforming <span className="text-indigo-600">relationships!</span>
        </h1>
        <h2 className="font-inter text-2xl text-gray-600">Raised funds will be tracked towards:</h2>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-12 w-full relative z-10">
        {/* Left column - Fund allocation */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="flex items-start bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="mt-1 mr-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800 font-inter">
                <span className="font-semibold">Product launch</span> with full feature set by Q4 2025
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="mt-1 mr-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800 font-inter">
                <span className="font-semibold">Reaching 5,000 active users</span> milestone
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start bg-white rounded-lg shadow-md border border-[#e2e8f0] p-6 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="mt-1 mr-4">
              <DollarSign className="h-8 w-8 text-indigo-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800 font-inter">
                <span className="font-semibold">Achieving $100K ARR</span> by end of 2025
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column - Pie chart */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="relative w-80 h-80 shadow-xl rounded-full overflow-hidden border-4 border-white">
            <PieChart />
          </div>
        </motion.div>
      </div>

      {/* Call to action banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-auto w-full relative z-10"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <p className="text-3xl text-white font-medium font-gilroy text-center">
              Ready to invest in the future of relationship technology?
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Programmatic Pie Chart Component
const PieChart = () => {
  // Define segments
  const segments = [
    { percent: 50, color: "rgb(79, 70, 229)", startAngle: 0, label: "Product & AI" }, // indigo-600
    { percent: 30, color: "rgb(147, 51, 234)", startAngle: 50 * 3.6, label: "GTM & Growth" }, // purple-600
    { percent: 20, color: "rgb(59, 130, 246)", startAngle: (50 + 30) * 3.6, label: "Data & Compliance" }, // blue-500
  ]

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Add subtle gradient overlay */}
      <defs>
        <radialGradient id="pieGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {segments.map((segment, index) => {
        // Convert percentage to radians (1% = 3.6 degrees = 0.0628 radians)
        const angle = segment.percent * 3.6 * (Math.PI / 180)
        const startAngle = segment.startAngle * (Math.PI / 180)
        const endAngle = startAngle + angle

        // Calculate the coordinates
        const x1 = 50 + 50 * Math.cos(startAngle)
        const y1 = 50 + 50 * Math.sin(startAngle)
        const x2 = 50 + 50 * Math.cos(endAngle)
        const y2 = 50 + 50 * Math.sin(endAngle)

        // Calculate position for the text (middle of the segment)
        const midAngle = startAngle + angle / 2
        // Position text at 60% of the radius to ensure it's inside the segment
        const textX = 50 + 30 * Math.cos(midAngle)
        const textY = 50 + 30 * Math.sin(midAngle)

        // Determine if the arc should be drawn as a large arc
        const largeArcFlag = segment.percent > 50 ? 1 : 0

        // Create the path for the segment
        const path = [`M 50 50`, `L ${x1} ${y1}`, `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(" ")

        return (
          <g key={index}>
            <path d={path} fill={segment.color} />
            <text
              x={textX}
              y={textY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="6"
              fontWeight="bold"
              className="drop-shadow-md"
            >
              {segment.percent}%
            </text>
            <text
              x={textX}
              y={textY + 7}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="4"
              className="drop-shadow-md"
            >
              {segment.label}
            </text>
          </g>
        )
      })}

      {/* Add subtle overlay for depth */}
      <circle cx="50" cy="50" r="50" fill="url(#pieGradient)" />
    </svg>
  )
}

export default Slide10
