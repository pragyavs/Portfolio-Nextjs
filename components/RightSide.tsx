import React from "react";
const RightSide = () => {
    return (
        <div className="w-full h-full hidden flex-col items-center justify-end gap-4 text-textLight mdl:flex">
            <a href="mailto:singhpragya989@gmail.com">
                <p className="text-xl rotate-90 w-72 tracking-wide text-textGreen">My Email</p>
            </a>
            <div className="w-[2px] h-56 bg-textDark">

            </div>
        </div>
    )
}
export default RightSide;