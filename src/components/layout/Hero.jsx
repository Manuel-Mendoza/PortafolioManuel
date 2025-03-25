import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="hero min-h-96 bg-primary text-primary-content pt-48">
      <div className="hero-content text-center">
        <div className="flex">
          <motion.div
            className="flex !z-10 animate-in slide-in-from-left duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.2
            }}
          >
            <h1 className="text-9xl font-bold hover:text-balance">Manuel Mendoza</h1>
            <p className="text-9xl text-[#d8973c] animate-bounce">.</p>
          </motion.div>
          
          <motion.img
            src="/src/assets/saludo.webp"
            alt="yo"
            className="!z-0 h-2/3 fixed right-0 object-cover object-center max-h-screen animate-in zoom-in-50 duration-1000"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: 0.5
            }}
          />
        </div>
      </div>
    </div>
  );
}; 