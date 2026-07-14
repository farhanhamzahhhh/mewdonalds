import { pumpfunLink } from "@/constants";

const MewDon = () => {
    return (
        <a href={pumpfunLink} target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center group cursor-pointer">
            <button
                className="transition duration-200 font-stopbuck text-body rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 font-medium text-white bg-mewdonRed border-2 border-mewdonYellow shadow-inner text-center group-hover:scale-105 pointer-events-none"
            >
                $MEWDON
            </button>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-mewdonYellow text-black border border-black px-1.5 py-px rounded-full text-micro font-extrabold tracking-widest uppercase transform rotate-[-4deg] shadow-sm whitespace-nowrap z-10 group-hover:rotate-0 transition-transform">
                Buy on pump.fun
            </span>
        </a>
    )
}

export default MewDon