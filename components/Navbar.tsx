import Link from "next/link";
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { onResumeButtonClick } from "@/config/utils";


const Navbar = () => {
    const ref = useRef<string | any>("");
    const [showMenu, setShowMenu] = useState(false);
    function handleClick(e: any) {
        if (e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    return (
        <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4" >
            <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <div></div>
                <div></div>
                <div></div>
                <div className="hidden mdl:inline-flex items-center justify-center gap-12">
                    <ul className="flex text-[40px] gap-14 ">
                        <Link href="/" className="flex items-center  justify-center gap-3  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }}>
                                Home
                            </motion.li>
                        </Link>
                        <Link href="About" className="flex items-center justify-center gap-3  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.1 }}>
                                About
                            </motion.li>
                        </Link>
                        <Link href="Projects" className="flex items-center justify-center gap-3  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link" >
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.2 }}>
                                Projects
                            </motion.li>
                        </Link>
                        <Link href="Blog" className="flex items-center justify-center gap-3  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.3 }}>
                                Blog
                            </motion.li>
                        </Link>
                        <Link href="Contact" className="flex items-center justify-center gap-3  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.1 }}>
                                Contact
                            </motion.li>
                        </Link>
                    </ul>
                    <a href="/assets/Pragya_Singh.pdf" target="_blank  ">
                        <motion.button
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.1, delay: 0.4 }}
                            onClick={() => onResumeButtonClick()}
                            className="px-4 py-2 rounded-md text-textGreen text-[35px] border border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button></a>
                </div>
                <div></div>
                <div></div>
                <div onClick={() => setShowMenu(true)} className="mdl:hidden w-6 h-5 flex flex-col justify-between items-center  text-4xl text-textGreen cursor-pointer ovverflow-hidden group">
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300">
                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300">
                    </span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300">
                    </span>
                </div>
                {
                    showMenu ? (
                        <div ref={(node) => ref.current = node}
                            onClick={handleClick}
                            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.1 }} className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
                                <MdOutlineClose onClick={() => setShowMenu(false)} className="text-3xl text-textGreeen cursor-pointer hover:text-red-500 absolute top-4 right-4" />
                                <div className="flex flex-col utems-center gap-7">
                                    <ul className="flex flex-col text-base gap-7 ">
                                        <Link href="/" className="flex items-center  gap-1  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: 0.1,
                                                    ease: "easeIn"
                                                }}>
                                                Home
                                            </motion.li>
                                        </Link>
                                        <Link href="About" className="flex items-center  gap-1  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: 0.2,
                                                    ease: "easeIn"
                                                }}>
                                                About
                                            </motion.li>
                                        </Link>
                                        <Link href="Projects" className="flex items-center  gap-1  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link" >
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: 0.1,
                                                    ease: "easeIn"
                                                }}>
                                                Projects
                                            </motion.li>
                                        </Link>
                                        <Link href="Blog" className="flex items-center  gap-1  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: 0.4,
                                                    ease: "easeIn"
                                                }}>
                                                Blog
                                            </motion.li>
                                        </Link>
                                        <Link href="Contact" className="flex items-center  gap-1  font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
                                            <motion.li
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.2,
                                                    delay: 0.5,
                                                    ease: "easeIn"
                                                }}>
                                                Contact
                                            </motion.li>
                                        </Link>
                                    </ul>
                                    <a href="/assets/Pragya_Singh.pdf" target="_blank  ">
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            onClick={() => onResumeButtonClick()}
                                            transition={{
                                                duration: 0.2,
                                                delay: 0.6,
                                                ease: "easeIn"
                                            }}
                                            className="px-4 py-2 rounded-md text-textGreen text-[35px] border border-textGreen hover:bg-hoverColor duration-300">Resume</motion.button></a>

                                    <div className="flex gap-4">
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 1,
                                                ease: "easeIn"
                                            }} href="https://github.com/pragyavs" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <IoLogoGithub />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 1,
                                                ease: "easeIn"
                                            }} rel="canonical" href="https://www.youtube.com/channel/UCTIxAOH9DQoD8Nkb01Ify3Q" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 p-2">
                                                <FaYoutube />
                                            </span>
                                        </motion.a>
                                        {/* <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 1,
                                                ease: "easeIn"
                                            }} href="h" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300 p-2">
                                                <FiFacebook />
                                            </span>
                                        </motion.a> */}
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 1,
                                                ease: "easeIn"
                                            }} href="https://www.linkedin.com/in/pragya-singh-285bb5178/" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700  hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                                                <FiLinkedin />
                                            </span>
                                        </motion.a>
                                        <motion.a
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: 1,
                                                ease: "easeIn"
                                            }} href="https://twitter.com/singh__pragya" target="_blank">
                                            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-a;; duration-300">
                                                <FiTwitter />
                                            </span>
                                        </motion.a>
                                    </div>

                                </div>

                                <motion.a
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 1.2,
                                        ease: "easeIn"
                                    }} className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"><p>singhpragya989@gmail.com</p></motion.a>
                            </motion.div>
                        </div>
                    ) : null
                }


            </div>
        </div>
    );
};
export default Navbar;