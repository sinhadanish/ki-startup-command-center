"use client"
import { motion } from "framer-motion"

const Slide3b = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-start p-16">
      {/* Slide title */}
      <motion.h1
        className="text-5xl font-bold text-[#2c5282] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ki in Action
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-2xl font-medium text-[#1a202c] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Helping Communicate Before Things Break Down
      </motion.p>

      {/* Demo content */}
      <motion.div
        className="grid grid-cols-1 gap-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Tension point */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
          <p className="text-xl font-bold text-red-600 mb-3">Tension Point — Real Moment 🔴</p>
          <div className="space-y-3">
            <p className="text-lg text-[#1a202c]">
              <span className="font-medium">Partner 1:</span> "You just never listen when I need support."
            </p>
            <p className="text-lg text-[#1a202c]">
              <span className="font-medium">Partner 2:</span> "That's not fair. I'm trying my best—you don't see that."
            </p>
            <p className="text-lg italic text-gray-500">(Tension escalates... silence, hurt)</p>
          </div>
        </div>

        {/* Ki intervention */}
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <p className="text-xl font-bold text-indigo-600 mb-3">Ki Steps In</p>
          <div className="space-y-3">
            <p className="text-lg text-[#1a202c]">
              <span className="font-medium text-indigo-600">Ki:</span> "It sounds like you're both feeling unseen in
              different ways. Would it help if we slowed down and tried to hear what each other needs right now?"
            </p>
            <p className="text-lg italic text-gray-500">(pause)</p>
            <p className="text-lg text-[#1a202c]">
              <span className="font-medium text-indigo-600">Ki:</span> "Partner 1, can you share what you needed in that
              moment—without blame? Partner 2, just listen."
            </p>
            <p className="text-lg italic text-gray-500">(Both reflect, Ki guides a repair micro-conversation)</p>
            <p className="text-lg text-[#1a202c]">
              <span className="font-medium text-indigo-600">Ki:</span> "You just created space for emotional repair.
              That's rare—and powerful."
            </p>
          </div>
        </div>

        {/* Resolution */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <p className="text-xl font-bold text-purple-600 mb-3">
            Repaired: Real-Time Emotional Co-Regulation & Repair 💜
          </p>
          <p className="text-lg text-[#1a202c]">
            Ki combines psychology, AI, and shared insights to help couples reflect, connect, and grow—together
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide3b
