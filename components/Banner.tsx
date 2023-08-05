import React from "react";
import { motion } from "framer-motion"
import AnimationPage from '@/components/AnimationPage';
const Banner = () => {
    return <section id="home" className="max-w-contentContainer mx-auto py-05 mdl:py-18 flex flex-col gap-2 lgl:gap:8 mdl:px-10 xl:px-2 p-2">
        <div className="text-base md:max-w-[650px] text-textDark font-medium"><AnimationPage /></div>

        <motion.h3
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}>Hii, I am</motion.h3>
        <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">Pragya Singh {" "}<span className="text-textDark mt-2 lgl:mt-4">Backend Developer</span></motion.h1>
        <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} className="text-base md:max-w-[650px] text-textDark font-medium">{" "}A passionate and experienced backend developer with expertise in Node.js and AWS.
            I'm thrilled to have you visit my website, where I showcase my skills, projects, and journey as a developer.{" "}</motion.p>
    </section>
}
export default Banner;