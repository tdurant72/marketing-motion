"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionButtonProps {
    children: React.ReactNode;
    stiffness?: number;
    damping?: number;
    className?: string;
}
const MotionButton = ({ children, stiffness = 300, damping = 15, className }: MotionButtonProps) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 0 }}
            transition={{ type: "spring", stiffness: stiffness, damping: damping }}
            className={cn("px-6 py-3 bg-blue-800 text-white rounded-md shadow-md hover:bg-blue-900 cursor-pointer", className)}>
            {children}
        </motion.button>
    );
}

export default MotionButton;