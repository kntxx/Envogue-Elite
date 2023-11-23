"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
         initial={{ opacity: 0, x: -90 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 50 }} 
         transition={{ duration: 0.5, ease: "easeInOut" }} 
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
