"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface MotionHeadingProps {
    as?: HeadingTag;
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

const motionHeadings = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,
};

/**
 * Animated Heading that smoothly reveals when scrolled into view
 */
export function MotionHeading({
    as = "h2",
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    once = true,
}: MotionHeadingProps) {
    const Component = motionHeadings[as] || motion.h2;

    const initialOffsets = {
        up: { y: 28, x: 0 },
        down: { y: -28, x: 0 },
        left: { x: 28, y: 0 },
        right: { x: -28, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = initialOffsets[direction];

    return (
        <Component
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </Component>
    );
}

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
    scale?: number;
}

/**
 * Universal Scroll Reveal wrapper for cards, paragraphs, and sections
 */
export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    once = true,
    scale = 1,
}: ScrollRevealProps) {
    const initialOffsets = {
        up: { y: 25, x: 0 },
        down: { y: -25, x: 0 },
        left: { x: 25, y: 0 },
        right: { x: -25, y: 0 },
        none: { x: 0, y: 0 },
    };

    const offset = initialOffsets[direction];

    return (
        <motion.div
            initial={{ opacity: 0, scale, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once, margin: "-40px" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

/**
 * Container that automatically cascades/staggers animations for child cards
 */
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.12,
    once = true,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-40px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
