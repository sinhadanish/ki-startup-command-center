"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Lock, Brain, Zap } from "lucide-react"

const Slide4b = () => {
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

        <h1 className="text-4xl font-bold text-[#1a202c] mb-1">Human-AI-Human (HAH) framework</h1>
        <h2 className="text-xl text-[#4a5568]">The first AI that truly understands emotions</h2>
      </motion.div>

      {/* Framework diagram */}
      <motion.div
        className="flex justify-center w-full my-4 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-[70%] max-w-2xl relative h-48">
          <Image
            src="/images/human-ai-human-framework.png"
            alt="Human-AI-Human Framework"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </motion.div>

      {/* Framework components */}
      <motion.div
        className="grid grid-cols-2 gap-4 w-full mt-2 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Dual-Perspective Intelligence */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-2">
              <Users className="w-4 h-4 text-[#2c5282]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a202c]">Dual-Perspective Intelligence</h3>
          </div>
          <p className="text-sm text-[#4a5568]">
            Simultaneously understands and responds to both partners' emotional states
          </p>
        </motion.div>

        {/* Privacy-Preserving Design */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-[#f7fafc] flex items-center justify-center flex-shrink-0 mr-2">
              <Lock className="w-4 h-4 text-[#ed8936]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a202c]">Privacy-Preserving Design</h3>
          </div>
          <p className="text-sm text-[#4a5568]">
            Individual channels with end-to-end encryption ensure trust and security
          </p>
        </motion.div>

        {/* Context-Aware Relationship Support */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mr-2">
              <Brain className="w-4 h-4 text-[#2c5282]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a202c]">Context-Aware Support</h3>
          </div>
          <p className="text-sm text-[#4a5568]">
            Combines shared history and emotional signals for personalized guidance
          </p>
        </motion.div>

        {/* Built for Two */}
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-[#e2e8f0] p-3"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-[#f7fafc] flex items-center justify-center flex-shrink-0 mr-2">
              <Zap className="w-4 h-4 text-[#ed8936]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a202c]">Built for Two</h3>
          </div>
          <p className="text-sm text-[#4a5568]">
            Real-time co-regulation and communication support tailored to couples
          </p>
        </motion.div>
      </motion.div>

      {/* Conclusion */}
      <motion.div
        className="mt-auto w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-[#f7fafc] border border-[#e2e8f0] rounded-lg p-3 shadow-sm">
          <p className="text-center text-base text-[#2c5282] font-medium">
            The fundamental architecture enables Ki to mediate and support relationships in ways traditional AI cannot.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide4b
