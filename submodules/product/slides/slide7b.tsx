"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const Slide7b = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-start p-16 relative overflow-hidden">
      {/* Vertical accent line */}
      <div className="absolute left-16 top-16 bottom-16 w-[3px] bg-indigo-600"></div>

      {/* Title section */}
      <motion.div
        className="pl-8 mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          <span className="text-indigo-600">Market</span> Opportunity
        </h1>
        <h2 className="text-2xl text-gray-700">A $98.6B underserved market—ripe for Human-AI-Human intelligence</h2>
      </motion.div>

      {/* Main content area */}
      <div className="w-full flex z-10">
        {/* Left side: TAM-SAM-SOM Funnel */}
        <motion.div className="w-1/2 pr-8" variants={containerVariants} initial="hidden" animate="visible">
          {/* TAM */}
          <motion.div className="relative mb-6 flex items-center" variants={itemVariants}>
            <div className="w-[400px] h-[100px] bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-lg shadow-lg flex flex-col justify-center pl-6 text-white">
              <h3 className="text-xl font-bold">Total Addressable Market</h3>
              <p className="text-3xl font-bold mt-1">$98.6 Billion</p>
            </div>
            <div className="ml-4 bg-white rounded-lg px-4 py-2 shadow-md border border-indigo-100 flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
              <p className="font-medium text-indigo-700">493M Couples</p>
            </div>
          </motion.div>

          <div className="flex justify-center ml-[180px] -mt-2 mb-2">
            <ChevronDown className="text-indigo-500 w-8 h-8" />
          </div>

          {/* SAM */}
          <motion.div
            className="relative mb-6 flex items-center ml-[50px]"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="w-[350px] h-[90px] bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-lg flex flex-col justify-center pl-6 text-white">
              <h3 className="text-lg font-bold">Serviceable Available Market</h3>
              <p className="text-2xl font-bold mt-1">$6.39 Billion</p>
            </div>
            <div className="ml-4 bg-white rounded-lg px-4 py-2 shadow-md border border-blue-100 flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <p className="font-medium text-blue-700">31.9M Couples</p>
            </div>
          </motion.div>

          <div className="flex justify-center ml-[160px] -mt-2 mb-2">
            <ChevronDown className="text-blue-500 w-8 h-8" />
          </div>

          {/* SOM */}
          <motion.div
            className="relative flex items-center ml-[100px]"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="w-[300px] h-[80px] bg-gradient-to-r from-teal-500 to-teal-400 rounded-lg shadow-lg flex flex-col justify-center pl-6 text-white">
              <h3 className="text-lg font-bold">5-Year SOM</h3>
              <p className="text-2xl font-bold mt-1">$134 Million</p>
            </div>
            <div className="ml-4 bg-white rounded-lg px-4 py-2 shadow-md border border-teal-100 flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
              <p className="font-medium text-teal-700">670K Couples</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side: Key assumptions and projections */}
        <motion.div
          className="w-1/2 pl-8 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Market breakdown */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">Market Breakdown</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">Global adults 20-45</span>
                  <span className="text-indigo-600 font-bold">1.16B</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">Couples with smartphones</span>
                  <span className="text-indigo-600 font-bold">493M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">Launch markets coverage</span>
                  <span className="text-blue-500 font-bold">31.9M</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "27%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-700 font-medium">5-Year target (2% of SAM)</span>
                  <span className="text-teal-500 font-bold">670K</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Year projection */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-indigo-600 pl-3">
              5-Year Projection
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700 text-sm">Year 5 ARR</p>
                <p className="text-2xl font-bold text-indigo-600">$72M</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700 text-sm">Avg. Revenue/Couple</p>
                <p className="text-2xl font-bold text-indigo-600">$200</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700 text-sm">Monthly Active Payers</p>
                <p className="text-2xl font-bold text-indigo-600">30K</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-700 text-sm">Market Penetration</p>
                <p className="text-2xl font-bold text-indigo-600">2%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-auto w-full z-10"
      >
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100 mt-8">
          <p className="text-center text-lg text-indigo-700 font-medium">
            Our conservative 5-year plan captures just 2% of SAM, with significant room for expansion.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide7b
