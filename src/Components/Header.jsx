import { useState } from "react";
import NavButton from "./NavButton"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ onClickAbout, onClickProject }) => {
    const [isOpen, setIsOpen] = useState(false);

    const btns = (
        <>
            <NavButton buttonText={"About"} onClickEvent={onClickAbout} />
            <NavButton buttonText={"Projects"} onClickEvent={onClickProject} />
            <NavButton buttonText={"Resume"} link={'Cori_Mori_Resume.pdf'} />
        </>
    )

    const btnsImg = (
        <>
            <NavButton buttonText={"Github"} img={"github.png"} link={"https://github.com/CoriMori"} />
            <NavButton buttonText={"LinkedIn"} img={"linkedin.png"} link={"https://www.linkedin.com/in/cori-mori/"} />
        </>
    )
    return (
        <nav className='w-full max-w-7xl px-4 mt-5 mb-5 sm:px-6 lg:px-8 bg-transparent fixed top-0 z-20'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row justify-between'>
                    <div className='hidden md:block'>
                        <div className='flex space-x-2 justify-items-center'>
                            {btnsImg}
                            {btns}
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <button onClick={() => { setIsOpen(!isOpen) }} type="button">
                            <RxHamburgerMenu className="text-white text-5xl" />
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="bg-black/75 rounded-xl pt-2">
                        <div className='flex flex-row space-x-2 mb-2 ml-4 md:hidden'>
                            {btnsImg}
                        </div>
                        <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                            {btns}
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default Header;