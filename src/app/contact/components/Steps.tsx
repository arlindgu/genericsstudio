type StepsProps = {
    step: number;
    children: React.ReactNode;
};

export default function Steps(props: StepsProps) {
    return (
        <div className="flex flex-row w-full">
            <div className="flex justify-center items-center border-l border-t border-b w-1/10">
                <h3 className="text-center">{props.step}</h3>
            </div>
            <div className="border-1 border-licorice w-full h-fit p-4 flex-row flex gap-4 items-center">
                <p className="flex-1">{props.children}</p>
            </div>
        </div>
    );
}
