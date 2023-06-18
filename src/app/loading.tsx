import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
    return (
        <>
            <div className="mt-20 flex flex-col items-center justify-center">
                <p>Carregando, aguarde...</p>
                <BeatLoader color="#FF5757" className="mt-8"/>
            </div>
        </>
    )
}