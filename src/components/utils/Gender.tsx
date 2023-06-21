export default function Gender({gender}: any) {
    return(<>
        <div className="w-44 h-44 rounded-lg">
            <div className="h-full w-full bg-black bg-opacity-30 hover:bg-opacity-70 flex items-center justify-center">
                <p className="text-white">{gender.name}</p>
            </div>
        </div>
    </>)
};
