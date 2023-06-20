import { BiTrendingUp } from "react-icons/bi"

export default function Top() {
    return(<>
        <div className="flex flex-col items-center w-64 h-fit bg-opacity-40 rounded-lg bg-black">
            <div className="flex items-center bg-opacity-80 bg-gray-700 p-3 m-3 rounded-lg">
            <p className="text-white mr-2">Populares</p>
            <BiTrendingUp color='#FFFFFf'/>
            </div>
           <div className="bg-opacity-80 bg-gray-700 m-6 rounded-lg">
            <div className="h-[270px] w-[200px] bg-[url('/images/covers/spider2.jpg')] mb-5 m-3 bg-cover rounded-lg">

            </div>
            <div className="h-[270px] w-[200px] bg-[url('/images/covers/fast.jpg')] mb-5 m-3 bg-cover rounded-lg">

            </div>
            <div className="h-[270px] w-[200px] bg-[url('/images/covers/mario.jpg')] mb-5 m-3 bg-cover rounded-lg">
                <div className="h-full w-full bg-black bg-opacity-0 hover:bg-opacity-40">

                </div>
            </div>
           </div>
        </div>
    </>)
};
