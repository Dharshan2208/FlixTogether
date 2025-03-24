import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "Unraveling the mysteries to seduce your group with the ultimate movie night...",
  "Diving into IMDb's deepest secrets for ratings that thrill...",
  "Weaving everyone's desires into a tapestry of cinematic bliss...",
  "Handpicking a flick so perfect it'll steal the spotlight...",
  "Cue the climax—your movie night masterpiece is about to drop!",
];

const Preloader = ({ isLoading, progress, setLoading }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(phraseInterval);
  }, [isLoading]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="preloader-title"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.2 }}
      >
        🎬 Flix Together
      </motion.h1>

      <motion.div
        className="progress-bar"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      ></motion.div>

      <AnimatePresence mode="wait">
        <motion.p
          className="loading-phrase"
          key={phraseIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } }}
        >
          {phrases[phraseIndex]}
        </motion.p>
      </AnimatePresence>

      <motion.p
        className="progress-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default Preloader;