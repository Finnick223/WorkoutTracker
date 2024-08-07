import { motion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';

const animation = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};
const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 1 },
};
export const AnimatePage = ({ children }: PropsWithChildren) => (
  <motion.div {...animation(opacity)}>{children}</motion.div>
);
