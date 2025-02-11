import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const Carousel = ({ images }) => {
    const [currentImg, setCurrentImg] = useState(0);
    if (images.length == 0) {
        images.push('/project_images/coming_soon.png');
    }
    let prevImg = () => {
        if (currentImg == 0) setCurrentImg(images.length - 1);
        else setCurrentImg(currentImg - 1);
    }

    let nextImg = () => {
        if (currentImg == images.length - 1) setCurrentImg(0);
        else setCurrentImg(currentImg + 1);
    }

    return (
        <div className="overflow-hidden relative carousel">
            <div className='flex transition ease-out duration-700 rounded-t-lg aspect-16/9' style={{ transform: `translateX(-${(currentImg * 100)}%)` }}>
                {images.map((i) => {
                    return <img key={i} className='rounded-t-lg' src={i}></img>;
                })}
            </div>
            {
                images.length > 1 && (
                    <div>
                        {GetIndicatorIcons(prevImg, nextImg)}
                        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                            {images.map((s, i) => {
                                return (
                                    <div
                                        onClick={() => {
                                            setCurrentImg(i);
                                        }}
                                        key={"circle" + i}
                                        className={`rounded-full w-1 h-1 ${i == currentImg ? "bg-white" : "bg-gray-500"
                                            }`}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>

                )
            }


        </div>
    )
}


const GetIndicatorIcons = (prevImg, nextImg) => {

    return (
        <div className="absolute inset-0 flex items-center justify-between p-4">
            < button onClick={prevImg} className='btns' >
                <MdKeyboardArrowLeft />
            </button >

            <button onClick={nextImg} className='btns'>
                <MdKeyboardArrowRight />
            </button>
        </div >
    )
}

export default Carousel