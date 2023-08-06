import { IoLogoGithub } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";


const LeftSide = () => {
    return <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-3">
            <a href="https://github.com/pragyavs" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-a;; duration-300">
                    <IoLogoGithub />
                </span>
            </a>
            <a href="https://www.youtube.com/channel/UCTIxAOH9DQoD8Nkb01Ify3Q" rel="canonical" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-a;; duration-300">
                    <FaYoutube />
                </span>
            </a>

            <a href="https://www.linkedin.com/in/pragya-singh-285bb5178/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-a;; duration-300">
                    <FiLinkedin />
                </span>
            </a>
            <a href="https://twitter.com/singh__pragya" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-a;; duration-300">
                    <FiTwitter />
                </span>
            </a>

        </div>
        <div className="w-[2px] h-56 bg-textDark">

        </div>
    </div>
}
export default LeftSide;
