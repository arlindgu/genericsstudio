type StepsProps = {
    step: number;
    children: React.ReactNode;
};

export default function Steps(props: StepsProps) {
    return (
        <div className="border-1 border-licorice w-full h-fit p-4 flex-row flex gap-4 items-center">
            <h3 className="text-center">{props.step}</h3>
            <div className="w-px h-10 bg-licorice" />
            <p className="flex-1">{props.children}</p>
        </div>
    );
}
