
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

const ArchiveCard = ({ title, des, link }: any) => {
    return (
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
            {/* <a href={link} target="_blank"> */}
            <div className="flex justify-between items-center p-2">
                <FaRegFolder className="text-4xl text-textGreen" />
                <a className="text-4xl hover:text-textGreen duration-300" href={link} target="_blank"><RxOpenInNewWindow /></a>
            </div>
            <div>
                <h2 className="text-xl justify-between font-titleFont font-semibold tracking-wide group-hover:text-textGreen">{title}
                </h2>
                <p className="text-sm mt-3">{des}</p>
            </div>
            {/* </a> */}
        </div>
    )
}
export default ArchiveCard