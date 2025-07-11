import { motion } from 'framer-motion'
import heroImage from '../assets/image/coffe.jpg'
import logo from '../assets/image/Text2.png'

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#1a0f00] text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 20 }}
        transition={{ duration: 4, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <img src={logo} alt="Sipora Cafe Logo" className="h-28 mx-auto mb-6 mt-2" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          Discover The <br /> Art Of Perfect Coffee
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg mt-4"
        >
          Experience The Rich And Bold Flavors Of Our Exquisite Coffee Blends, Crafted To Awaken Your Senses And Start Your Day Right
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          <button className="bg-white text-[#1a0f00] font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-[#1a0f00] transition">
            Explore More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center gap-8 mt-8 text-center"
        >
          <div>
            <p className="text-2xl font-bold">50+</p>
            <p className="text-sm">Item of Coffee</p>
          </div>
          <div>
            <p className="text-2xl font-bold">20+</p>
            <p className="text-sm">Order Running</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2k+</p>
            <p className="text-sm">Happy Customer</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
