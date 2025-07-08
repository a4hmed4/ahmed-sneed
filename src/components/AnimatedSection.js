import React from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1,
  ...props 
}) => {
  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      case "rotate":
        return { opacity: 0, rotate: -10 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "rotate":
        return { opacity: 1, rotate: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const variants = {
    hidden: getInitialState(),
    visible: getAnimateState()
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, threshold }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        ...props.transition
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Specialized section components
export const FadeInSection = ({ children, ...props }) => (
  <AnimatedSection direction="up" {...props}>
    {children}
  </AnimatedSection>
);

export const SlideInLeft = ({ children, ...props }) => (
  <AnimatedSection direction="left" {...props}>
    {children}
  </AnimatedSection>
);

export const SlideInRight = ({ children, ...props }) => (
  <AnimatedSection direction="right" {...props}>
    {children}
  </AnimatedSection>
);

export const ScaleInSection = ({ children, ...props }) => (
  <AnimatedSection direction="scale" {...props}>
    {children}
  </AnimatedSection>
);

export const RotateInSection = ({ children, ...props }) => (
  <AnimatedSection direction="rotate" {...props}>
    {children}
  </AnimatedSection>
);

// Staggered children animation
export const StaggeredContainer = ({ 
  children, 
  staggerDelay = 0.1,
  className = "",
  ...props 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: props.delay || 0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax section
export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      style={{
        y: useTransform(useScroll().scrollYProgress, [0, 1], [0, -100 * speed])
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hover animations
export const HoverCard = ({ 
  children, 
  scale = 1.05,
  rotate = 0,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale, 
        rotate,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Typing animation
export const TypingText = ({ 
  text, 
  speed = 0.05,
  className = "",
  ...props 
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
      {...props}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

// Floating animation
export const FloatingElement = ({ 
  children, 
  amplitude = 10,
  duration = 2,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Pulse animation
export const PulseElement = ({ 
  children, 
  scale = 1.1,
  duration = 2,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      animate={{ scale: [1, scale, 1] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Bounce animation
export const BounceElement = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Shake animation
export const ShakeElement = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      animate={{ x: [0, -10, 10, -10, 10, 0] }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection; 