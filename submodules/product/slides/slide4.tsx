"use client"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { TrendingUp, MessageSquare, Star, Award, Users, BarChart3 } from "lucide-react"
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

const Slide4 = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div
      className={`w-full h-full bg-white flex flex-col p-12 ${inter.variable} ${gilroy.variable} relative overflow-hidden`}
    >
      {/* Slide title with vertical accent line */}
      <motion.div
        className="relative pl-5 mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#2c5282] to-[#ed8936]"></div>

        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2c5282] to-[#4a69bd] font-gilroy mb-2">
          Early traction shows strong emotional resonance
        </h1>
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-12 gap-4 z-10 flex-1">
        {/* Left column - Key metrics */}
        <motion.div
          className="col-span-4 flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Website Hits */}
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Website Hits</h3>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2c5282] to-[#4a69bd] font-gilroy">
                16K+
              </span>
            </div>
            <p className="text-gray-600 mt-1 text-sm">in 72 hours after launch</p>
          </motion.div>

          {/* Conversations */}
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Conversations</h3>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2c5282] to-[#4a69bd] font-gilroy">
                1688+
              </span>
            </div>
            <p className="text-gray-600 mt-1 text-sm">with Ki till date</p>
          </motion.div>

          {/* Star Rating */}
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1 flex flex-col transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Star Rating</h3>
            </div>
            <div className="flex items-baseline">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2c5282] to-[#4a69bd] font-gilroy">
                4.9
              </span>
            </div>
            <p className="text-gray-600 mt-1 text-sm">user satisfaction</p>
          </motion.div>
        </motion.div>

        {/* Middle column - Marketing validation and partnerships */}
        <motion.div
          className="col-span-4 flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
        >
          {/* Marketing Validation */}
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Marketing Validation</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 text-sm">•</span>
                <p className="text-sm text-gray-700 font-inter">
                  Instagram campaign in India validated our messaging hypothesis with{" "}
                  <span className="font-semibold">3.2% CTR</span>{" "}
                  <span className="text-gray-500">(industry avg: 0.8%)</span>
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1 text-sm">•</span>
                <p className="text-sm text-gray-700 font-inter">
                  Mobile-first behavior confirms our product strategy{" "}
                  <span className="font-semibold">(76% mobile users)</span>
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Partnerships */}
          <motion.div
            className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex-1 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            variants={itemVariants}
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 font-gilroy">Supported by</h3>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 justify-center">
                {/* Google Logo */}
                <div className="h-10 relative w-20 bg-white rounded-lg shadow-sm p-1 flex items-center justify-center">
                  <Image
                    src="/images/google-logo.png"
                    alt="Google"
                    width={60}
                    height={24}
                    style={{ objectFit: "contain" }}
                    className="opacity-90"
                  />
                </div>

                {/* Hume Logo */}
                <div className="h-10 relative w-20 bg-white rounded-lg shadow-sm p-1 flex items-center justify-center">
                  <Image
                    src="/images/hume-logo.png"
                    alt="Hume"
                    width={60}
                    height={24}
                    style={{ objectFit: "contain" }}
                    className="opacity-90"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-500 mb-2">Social Impact partner of</h4>
                <div className="bg-white rounded-lg shadow-sm p-2 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/rural-wash-partners-forum-logo.jpeg"
                      alt="Rural Wash Partners Forum"
                      width={28}
                      height={28}
                      className="rounded-md"
                    />
                    <span className="text-sm font-medium text-gray-800">Rural Wash Partners Forum 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column - User feedback */}
        <motion.div
          className="col-span-4 bg-white rounded-lg shadow-md border border-gray-100 p-4 transform transition-all duration-300 hover:shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center flex-shrink-0 mr-3 shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-gilroy">User Feedback</h3>
          </div>

          <div className="space-y-3 max-h-[250px] overflow-y-auto pr-1">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-[#2c5282] shadow-sm"
              variants={itemVariants}
              whileHover={{ x: 3, boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
            >
              <p className="text-gray-700 italic text-sm">"I conversed with it twice and I was satisfied both times"</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-[#2c5282] shadow-sm"
              variants={itemVariants}
              whileHover={{ x: 3, boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
            >
              <p className="text-gray-700 italic text-sm">
                "It's was a mini therapy for me haha. Always heard about this use case never actually tried it"
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-[#2c5282] shadow-sm"
              variants={itemVariants}
              whileHover={{ x: 3, boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
            >
              <p className="text-gray-700 italic text-sm">
                "I started in an emotional state it help me calm down by 30%"
              </p>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-[#2c5282] shadow-sm"
              variants={itemVariants}
              whileHover={{ x: 3, boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}
            >
              <p className="text-gray-700 italic text-sm">
                "It worked well to simplify what I discussed and I felt it broke it down very well and gave me good
                insights"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom conclusion */}
      <motion.div
        className="mt-auto pt-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-[#2c5282] rounded-full px-6 py-2 shadow-md">
          <p className="text-center text-white font-medium font-inter text-sm">
            Early user engagement confirms our hypothesis: people are seeking emotional support through AI
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide4
