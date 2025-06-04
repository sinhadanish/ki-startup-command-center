"use client"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { AlertTriangle, DollarSign, Users, BookOpen, Bot } from "lucide-react"

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

const Slide2 = () => {
  return (
    <div
      className={`w-full h-full bg-white flex flex-col p-12 ${inter.variable} ${gilroy.variable} relative overflow-hidden`}
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

        <h1 className="text-4xl font-extrabold text-gray-900 font-gilroy mb-1">Modern relationships in crisis</h1>
        <h2 className="text-2xl font-medium text-gray-700 font-gilroy">Support systems broken</h2>
      </motion.div>

      {/* Main content */}
      <div className="flex flex-1 flex-col gap-6 z-10">
        {/* Top row: Key statistics */}
        <motion.div
          className="grid grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm group">
            <p className="text-4xl font-extrabold text-indigo-600 font-gilroy mb-1">51%</p>
            <p className="text-base text-gray-800 font-inter">Marriages end in divorce</p>
            <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              U.S. Census Bureau, 2021
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-sm group">
            <p className="text-4xl font-extrabold text-purple-600 font-gilroy mb-1">61%</p>
            <p className="text-base text-gray-800 font-inter">Couples feel misunderstood</p>
            <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Pew Research, 2023
            </p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg shadow-sm group">
            <p className="text-4xl font-extrabold text-indigo-600 font-gilroy mb-1">6 yrs</p>
            <p className="text-base text-gray-800 font-inter">Average wait for help</p>
            <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Gottman Institute, 2021
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-sm group">
            <p className="text-4xl font-extrabold text-purple-600 font-gilroy mb-1">37%</p>
            <p className="text-base text-gray-800 font-inter">Couples seek help</p>
            <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              APA Survey, 2022
            </p>
          </div>
        </motion.div>

        {/* Divider with text */}
        <div className="flex items-center gap-4 my-1">
          <div className="h-px bg-gray-200 flex-grow"></div>
          <h3 className="text-lg font-semibold text-gray-700 font-gilroy whitespace-nowrap">
            Why Current Solutions Fail
          </h3>
          <div className="h-px bg-gray-200 flex-grow"></div>
        </div>

        {/* Bottom row: Why solutions fail */}
        <motion.div
          className="grid grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Pain Point 1 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group"
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mr-2">
                <DollarSign className="w-4 h-4 text-red-500" />
              </div>
              <h4 className="text-base font-medium text-gray-900 font-gilroy">Therapy</h4>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-700 font-inter">Too expensive and couples wait too long to seek help</p>
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 text-amber-500 mr-1" />
                <p className="text-xs text-gray-500 font-inter">
                  <span className="font-medium">81%</span> seek help after crisis point
                </p>
              </div>
              <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Gottman Institute, 2022
              </p>
            </div>
          </motion.div>

          {/* Pain Point 2 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group"
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mr-2">
                <Users className="w-4 h-4 text-red-500" />
              </div>
              <h4 className="text-base font-medium text-gray-900 font-gilroy">Friends & Family</h4>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-700 font-inter">Often take sides and make conflicts worse</p>
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 text-amber-500 mr-1" />
                <p className="text-xs text-gray-500 font-inter">
                  <span className="font-medium">73%</span> report increased tension
                </p>
              </div>
              <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Relationship Australia, 2023
              </p>
            </div>
          </motion.div>

          {/* Pain Point 3 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group"
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mr-2">
                <BookOpen className="w-4 h-4 text-red-500" />
              </div>
              <h4 className="text-base font-medium text-gray-900 font-gilroy">Apps & Books</h4>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-700 font-inter">
                Generic advice that doesn't adapt to specific situations
              </p>
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 text-amber-500 mr-1" />
                <p className="text-xs text-gray-500 font-inter">
                  <span className="font-medium">78%</span> say advice doesn't fit
                </p>
              </div>
              <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Harvard Family Study, 2023
              </p>
            </div>
          </motion.div>

          {/* Pain Point 4 */}
          <motion.div
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group"
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mr-2">
                <Bot className="w-4 h-4 text-red-500" />
              </div>
              <h4 className="text-base font-medium text-gray-900 font-gilroy">General AI</h4>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-700 font-inter">Biased one-sided perspective that reinforces conflicts</p>
              <div className="flex items-center">
                <AlertTriangle className="w-3 h-3 text-amber-500 mr-1" />
                <p className="text-xs text-gray-500 font-inter">
                  <span className="font-medium">78%</span> report emotional distance
                </p>
              </div>
              <p className="text-xs text-gray-500 font-inter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Stanford HCI Lab, 2023
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          className="mt-auto bg-indigo-50 p-3 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center text-sm text-indigo-700 font-medium font-inter">
            Relationships need real-time, personalized support that's accessible when conflicts actually happen
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2
