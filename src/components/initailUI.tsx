import { useLocation } from 'react-router-dom';
import { motion,type Variants } from 'framer-motion';

const ComingSoon = () => {
  const location = useLocation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const pathVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const dotsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="flex w-full bg-white justify-center items-center h-full overflow-y-auto p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl"
      >
        {/* Animated decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-black w-24 mx-auto mb-12"
        />

        {/* Path display */}
        <motion.div
          variants={pathVariants}
          className="mb-8"
        >
          <motion.p
            className="text-sm font-mono tracking-wider text-gray-400 mb-2"
          >
            REQUESTED PATH
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 border-2 border-black rounded-lg"
          >
            <p className="font-mono text-lg text-black">
              {location.pathname}
            </p>
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-black mb-6 tracking-tight"
        >
          Coming Soon
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
        >
          We're working on something exciting.
          <br />
          Stay tuned for updates.
        </motion.p>

        {/* Animated dots */}
        <motion.div
          variants={dotsVariants}
          className="flex justify-center gap-3 mb-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={dotVariants}
              className="w-3 h-3 bg-black rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gray-200 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-gray-300 rounded-full"
          />
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-px bg-black w-24 mx-auto mt-12"
        />
      </motion.div>
    </div>
  );
};

export default ComingSoon;