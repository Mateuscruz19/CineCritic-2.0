import { BiTrendingUp } from "react-icons/bi"

export default function Top() {
    return(<>
        <div className="flex flex-col items-center w-64 h-full bg-opacity-40 rounded-lg bg-white">
            <div className="flex mt-5">
            <p className="text-white mr-2">Populares</p>
            <BiTrendingUp color='#FFFFFf'/>
            </div>
            <img src="/images/covers/joker.jpg" className="p-4"/>
        </div>
    </>)
};
