import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


function Video() {

    return (
        <div className="w-full lg:h-screen md:h-screen h-[25vh]  flex items-center justify-center">
            <video
                src="/ufo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full lg:h-screen md:h-screen h-[25vh] object-cover "
            />
            <div className="relative z-10  p-8 flex flex-col items-center justify-center">
                <h1 className="lg:text-7xl md:text-7xl text-2xl font-bold text-center text-[var(--custom-white)]
                lg:mt-0 md:mt-0 mt-12
                ">Aluminum Engenharia</h1>
                <h2 className="lg:text-3xl md:text-3xl text-md text-center text-[var(--custom-white)] 
                lg:mt-10 md:mt-10 mt-2
                lg:w-full lg:w-full w-[90%]
                ">Laudos, Segurança do Trabalho e Engenharia Mecânica</h2>

                <a href="#advantages" className="md:block lg:block hidden cursor-pointer mt-10 
                bg-[var(--current-color)] text-[var(--current-bg-color)] 
               hover:bg-[var(--current-bg-color)] hover:text-[var(--current-color)] 
                hover:scale-102 transition-all duration-150
                md:text-3xl lg:text-3xl text-sm   md:p-6  lg:p-6 p-2 rounded-full text-center font-semibold">
                    {/* Conheçer */}
                    <FontAwesomeIcon icon={faArrowDown} />
                </a>

            </div>
        </div>
    )

}


export default Video;