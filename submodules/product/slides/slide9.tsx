"use client"
import { motion } from "framer-motion"
import { Calendar, Heart, Clock, ArrowRight } from "lucide-react"

const Slide9 = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-start p-12 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 z-0"></div>

      {/* Main content container */}
      <div className="w-full h-full flex flex-col z-10">
        {/* Hero section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative pl-6">
            {/* Vertical accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600"></div>

            <h1 className="text-4xl font-bold mb-2">
              <span className="text-indigo-600">Ki</span> becomes the{" "}
              <span className="text-gray-900">Relationship Operating System</span>
            </h1>

            <div className="flex items-center">
              <h2 className="text-lg text-gray-700 font-medium">One companion</h2>
              <div className="mx-2 w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
              <h2 className="text-lg text-gray-700 font-medium">Two people</h2>
              <div className="mx-2 w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
              <h2 className="text-lg text-gray-700 font-medium">Lifetime Memory</h2>
            </div>
          </div>
        </motion.div>

        {/* Relationship stages */}
        <motion.div
          className="grid grid-cols-3 gap-4 w-full mb-6"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* Before you meet */}
          <motion.div
            className="bg-indigo-50 rounded-lg shadow-sm border border-indigo-100 p-3 h-full transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                <Calendar className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Before you meet</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ki calms nerves, scripts intros, and books the perfect date spot.
            </p>
          </motion.div>

          {/* When you are together */}
          <motion.div
            className="bg-purple-50 rounded-lg shadow-sm border border-purple-100 p-3 h-full transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                <Heart className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">When together</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Ki helps you feel heard and diffuses heated arguments in real-time.
            </p>
          </motion.div>

          {/* Healing if separated */}
          <motion.div
            className="bg-indigo-50 rounded-lg shadow-sm border border-indigo-100 p-3 h-full transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-3 shadow-sm">
                <Clock className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Healing if separated</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Panic spikes? Ki grounds you and rebuilds self-worth, step by step.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative pl-6 mb-4">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-600"></div>
            <h2 className="text-xl font-bold text-gray-900">
              Conflict Resolution <ArrowRight className="inline h-4 w-4 mx-1" /> Lifelong Relationship Intelligence
            </h2>
          </div>

          <div className="relative mt-6">
            {/* Timeline line with gradient */}
            <div className="absolute left-0 right-0 h-1 bg-gray-200 rounded-full top-1/2 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-3 gap-4 relative z-10">
              <motion.div
                className="bg-indigo-50 rounded-lg shadow-sm border border-indigo-100 p-3 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex flex-col items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mb-2 shadow-sm">
                    Now
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">2025</h4>
                </div>
                <p className="text-sm text-indigo-600 font-medium text-center">Emotional Repair Mode</p>
              </motion.div>

              <motion.div
                className="bg-purple-50 rounded-lg shadow-sm border border-purple-100 p-3 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex flex-col items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mb-2 shadow-sm">
                    Next
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">2025-26</h4>
                </div>
                <p className="text-sm text-purple-600 font-medium text-center">Relationship Hygiene</p>
              </motion.div>

              <motion.div
                className="bg-indigo-50 rounded-lg shadow-sm border border-indigo-100 p-3 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex flex-col items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold mb-2 shadow-sm">
                    Future
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">2026+</h4>
                </div>
                <p className="text-sm text-indigo-600 font-medium text-center">Lifelong Companion</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          className="mt-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 shadow-sm">
            <p className="text-center text-sm text-indigo-700 font-medium">
              Ki evolves with your relationship, providing the right support at each stage of your journey together.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide9
