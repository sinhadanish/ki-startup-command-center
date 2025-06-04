"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const Slide8 = () => {
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
      {/* Light accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 z-0"></div>

      {/* Slide title with accent line */}
      <motion.div
        className="relative pl-6 mb-8 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2c5282]"></div>

        <h1 className="text-5xl font-bold text-[#1a202c] mb-2">Ki Team & Advisors</h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-12 gap-8 w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Co-founders section */}
        <motion.div className="col-span-6 space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-[#f7fafc] relative shadow-md">
              <Image src="/images/ria.png" alt="Ria Kapila" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">Ria Kapila</h3>
              <p className="text-lg font-medium text-[#4a5568]">CEO & Co-founder</p>
              <ul className="mt-2 space-y-1">
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  20+ years global market expertise
                </li>
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  Built and scaled AI/ML and NLP products globally
                </li>
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  MBA from Columbia Business School
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-span-6 space-y-6" variants={itemVariants}>
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-[#f7fafc] relative shadow-md">
              <Image src="/images/danish_sinha.png" alt="Danish Sinha" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2c5282]">Danish Sinha</h3>
              <p className="text-lg font-medium text-[#4a5568]">CTO & Co-Founder</p>
              <ul className="mt-2 space-y-1">
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  Serial entrepreneur with 10+ years
                </li>
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  3x 30 Under 30 (2022-2024)
                </li>
                <li className="text-base text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  Built and scaled 17+ tech products
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Founding Team section */}
        <motion.div className="col-span-12 mt-6" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-[#2c5282] mb-4 pl-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ed8936]"></div>
            Founding Team
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#f7fafc] relative shadow-md">
                <Image src="/images/supriya.png" alt="Supriya Jaiswal" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c5282]">Supriya Jaiswal</h3>
                <p className="text-base font-medium text-[#4a5568]">Head of Marketing & Growth</p>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm text-[#4a5568] flex items-center">
                    <span className="text-[#ed8936] mr-2">•</span>
                    MBA from IESE Business School (Forte Fellow)
                  </li>
                  <li className="text-sm text-[#4a5568] flex items-center">
                    <span className="text-[#ed8936] mr-2">•</span>
                    Led 2x MoM revenue growth at Testline
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#f7fafc] relative shadow-md">
                <Image src="/images/aviraj_khare.png" alt="Aviraj Khare" fill style={{ objectFit: "cover" }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c5282]">Aviraj Khare</h3>
                <p className="text-base font-medium text-[#4a5568]">Founding Engineer</p>
                <ul className="mt-1 space-y-1">
                  <li className="text-sm text-[#4a5568] flex items-center">
                    <span className="text-[#ed8936] mr-2">•</span>7 years experience in Generative AI and Cloud
                  </li>
                  <li className="text-sm text-[#4a5568] flex items-center">
                    <span className="text-[#ed8936] mr-2">•</span>
                    Expert in AI embeddings and vector databases
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advisors section */}
        <motion.div className="col-span-12 mt-6" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-[#2c5282] mb-4 pl-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ed8936]"></div>
            Advisors
          </h2>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#f7fafc] relative shadow-md">
              <Image src="/images/anamika_sharma.png" alt="Anamika Sharma" fill style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#2c5282]">Anamika Sharma, PhD</h3>
              <p className="text-base font-medium text-[#4a5568]">Organizational Psychologist & Behavioral Scientist</p>
              <ul className="mt-1 space-y-1">
                <li className="text-sm text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  22 years consulting experience in behavioral analytics
                </li>
                <li className="text-sm text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  Expert in AI & behavioral change management
                </li>
                <li className="text-sm text-[#4a5568] flex items-center">
                  <span className="text-[#ed8936] mr-2">•</span>
                  Executive coach for Fortune 500 leadership teams
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team tagline */}
        <motion.div className="col-span-12 mt-auto z-10" variants={itemVariants}>
          <div className="bg-[#f7fafc] border border-[#e2e8f0] rounded-lg p-4 shadow-sm">
            <p className="text-center text-lg text-[#2c5282] font-medium italic">
              "We've built AI products and lived the emotional realities of modern relationships—we know the tech and
              the pain!"
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide8
