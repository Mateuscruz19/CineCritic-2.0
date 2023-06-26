import Link from "next/link"


export default function Genrer({genrer}: any) {
    return(<>
    <Link href={`/dashboard/gender/${genrer.id}`}>
        <div className="w-44 h-44 rounded-lg" key={genrer.id}>
            <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-70 flex items-center justify-center">
                <p className="text-white">{genrer.name}</p>
            </div>
        </div>
        </Link>
    </>)
};
