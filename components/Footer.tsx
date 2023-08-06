import { IoLogoGithub } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="hidden mdl:inline-flex xl-hidden items-center justify--center w-full py-6 gap-4">
            <a href="https://github.com/pragyavs" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <IoLogoGithub />
                </span>
            </a>

            <a href="https://www.youtube.com/channel/UCTIxAOH9DQoD8Nkb01Ify3Q" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FaYoutube />
                </span>
            </a>
            {/* <a href="h" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FiFacebook />
                </span>
            </a> */}
            <a href="https://www.linkedin.com/in/pragya-singh-285bb5178/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FiLinkedin />
                </span>
            </a>
            <a href="https://twitter.com/singh__pragya" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <FiTwitter />
                </span>
            </a>

        </div>
    );
};
export default Footer;