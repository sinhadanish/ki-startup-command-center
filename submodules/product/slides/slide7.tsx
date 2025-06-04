"use client"
import { motion } from "framer-motion"
import { DollarSign, Users, Database, Building } from "lucide-react"

const Slide7 = () => {
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
    <div className="w-full h-full bg-white flex flex-col justify-start items-start p-12 relative overflow-hidden">
      {/* Light accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 z-0"></div>

      {/* Slide title with accent line */}
      <motion.div
        className="relative pl-6 mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2c5282]"></div>

        <h1 className="text-4xl font-bold text-[#1a202c] mb-1">Trust-First Monetization</h1>
        <h2 className="text-xl text-[#4a5568]">Freemium → Premium Companion with trust-led upgrades</h2>
      </motion.div>

      {/* Pricing tiers */}
      <motion.div
        className="grid grid-cols-3 gap-4 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Basic tier */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-4"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold text-[#2c5282] mb-1">Basic</h3>
          <p className="text-2xl font-bold text-[#1a202c] mb-2">Free</p>
          <div className="border-t border-gray-200 pt-2 mb-2"></div>
          <p className="text-base text-[#4a5568] mb-1 font-medium">User acquisition, limited features</p>
          <p className="text-sm text-[#4a5568]">Ki's basic emotional 1:1 guidance</p>
        </motion.div>

        {/* Premium tier */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border-2 border-[#ed8936] p-4 relative"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="absolute top-0 right-0 bg-[#ed8936] text-white px-2 py-0.5 text-xs font-medium rounded-bl-lg rounded-tr-lg">
            POPULAR
          </div>
          <h3 className="text-xl font-bold text-[#2c5282] mb-1">Premium</h3>
          <p className="text-2xl font-bold text-[#1a202c] mb-2">$8-15/month</p>
          <div className="border-t border-gray-200 pt-2 mb-2"></div>
          <p className="text-base text-[#4a5568] mb-1 font-medium">Individual users seeking growth</p>
          <p className="text-sm text-[#4a5568]">Deep emotional memory, insights, voice</p>
        </motion.div>

        {/* Partners tier */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-4"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold text-[#2c5282] mb-1">Partners</h3>
          <p className="text-2xl font-bold text-[#1a202c] mb-2">$20-30/month</p>
          <div className="border-t border-gray-200 pt-2 mb-2"></div>
          <p className="text-base text-[#4a5568] mb-1 font-medium">Couples committed to improvement</p>
          <p className="text-sm text-[#4a5568]">Shared space, conflict resolution mode</p>
        </motion.div>
      </motion.div>

      {/* Revenue levers */}
      <motion.div
        className="mt-6 w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-xl font-bold text-[#1a202c] mb-3 pl-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ed8936]"></div>
          Long term Revenue Levers:
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <motion.div
            className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
            variants={itemVariants}
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-2">
                <Users className="w-4 h-4 text-[#2c5282]" />
              </div>
              <h4 className="text-base font-semibold text-[#1a202c]">Therapist Channel</h4>
            </div>
            <p className="text-xs text-[#4a5568]">B2B2C distribution via professional recommendations</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
            variants={itemVariants}
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f7fafc] flex items-center justify-center flex-shrink-0 mr-2">
                <DollarSign className="w-4 h-4 text-[#ed8936]" />
              </div>
              <h4 className="text-base font-semibold text-[#1a202c]">LTV Expansion</h4>
            </div>
            <p className="text-xs text-[#4a5568]">Value grows with relationship history and emotional memory</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
            variants={itemVariants}
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-2">
                <Database className="w-4 h-4 text-[#2c5282]" />
              </div>
              <h4 className="text-base font-semibold text-[#1a202c]">Emotional Data</h4>
            </div>
            <p className="text-xs text-[#4a5568]">Privacy-first secure backup of relationship insights</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
            variants={itemVariants}
            whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-[#f7fafc] flex items-center justify-center flex-shrink-0 mr-2">
                <Building className="w-4 h-4 text-[#ed8936]" />
              </div>
              <h4 className="text-base font-semibold text-[#1a202c]">Enterprise (Later)</h4>
            </div>
            <p className="text-xs text-[#4a5568]">Ki for teams - emotional alignment for co-founders</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-auto w-full z-10"
      >
        <div className="bg-[#f7fafc] border border-[#e2e8f0] rounded-lg p-3 shadow-sm">
          <p className="text-center text-sm text-[#2c5282] font-medium">
            <span className="font-semibold">Key Metrics:</span> Blended ARPU $19.99/mo | LTV ≈ $140 (7-mo life) |
            LTV/CAC ≥ 3× across phases
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide7
