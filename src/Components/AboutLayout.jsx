import React from 'react'

const AboutLayout = () => {
    return (
        <>
            <div>
                <h3 className='text-center text-xl font-bold'><i>"A jack of all trades is a master of none, but often times better than a master of one." - William Shakespeare</i></h3>
                <p className='pt-2 text-lg'>
                    The quote above is something I take to heart in almost every aspect of my life, but especially in my work.
                    I firmly believe that there is strength is being able to do a bit of everything, rather than being hyper focused on one subsection of a discipline.
                    If you’re looking for someone who has only ever done one type of programming, you won’t find them here.
                    I pride myself on being well versed in multiple programming languages, engines, libraries, and disciplines.
                    So if you’re looking for someone to fill a hole in your team or someone who can learn just about anything, then look no further.
                </p>
            </div>

            <div className='flex flex-col items-center justify-center pt-10'>
                <div className='flex flex-row pb-2'>
                    <div className='lg:w-[250px] xs:w-[150px]'>
                        <h4 className='font-bold'>Languages:</h4>
                        <ul className='pl-5 list-disc'>
                            <li>C++</li>
                            <li>UE Blueprints</li>
                            <li>C#</li>
                            <li>Javascript</li>
                            <li>Kotlin</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>

                    <div className='lg:w-[250px] xs:w-[150px]'>
                        <h4 className='font-bold'>Libraries & Frameworks:</h4>
                        <ul className='pl-5 list-disc'>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li>NextJS</li>
                            <li>Spine (Phaser)</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='lg:w-[250px] xs:w-[150px]'>
                        <h4 className='font-bold'>Engines:</h4>
                        <ul className='pl-5 list-disc'>
                            <li>Unreal Engine 5</li>
                            <li>Unity</li>
                            <li>Phaser</li>
                            <li>Android Studios</li>
                        </ul>
                    </div>

                    <div className='lg:w-[250px] xs:w-[150px]'>
                        <h4 className='font-bold'>Special Skills:</h4>
                        <ul className='pl-5 list-disc'>
                            <li>Gameplay Ability System (UE5)</li>
                            <li>Steam Advanced Sessions (UE5)</li>
                            <li>Multiplayer Programming (UE5)</li>
                            <li>Super cool 😎 (all the time)</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutLayout