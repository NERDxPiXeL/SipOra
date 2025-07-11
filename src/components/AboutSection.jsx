import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#f5e6d7] py-20 text-[#4a3c31]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="md:w-1/2 relative">
            <img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
              alt="Cafe interior"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-24 h-24 border-2 border-[#4a3c31] rotate-12 -translate-x-6 -translate-y-6"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-[#4a3c31] -rotate-12 translate-x-6 translate-y-6"></div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold">Coffee Heaven</h2>
            <p className="text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="self-start bg-[#4a3c31] text-white px-6 py-3 rounded shadow hover:bg-[#3a2c21] transition">
              View All
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
        >
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 order-2 md:order-1">
            <h2 className="text-4xl font-bold">Jean’s Coffee</h2>
            <p className="text-lg leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="self-start bg-[#4a3c31] text-white px-6 py-3 rounded shadow hover:bg-[#3a2c21] transition">
              View All
            </button>
          </div>
          <div className="md:w-1/2 relative order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg"
              alt="Coffee cup"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-24 h-24 border-2 border-[#4a3c31] rotate-12 -translate-x-6 -translate-y-6"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-2 border-[#4a3c31] -rotate-12 translate-x-6 translate-y-6"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default AboutSection
