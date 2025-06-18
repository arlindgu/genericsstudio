export interface PricingCardProps {
    title?: string;
    description?: string;
    price?: string;
    features?: string[];
    buttonText?: string;
    buttonUrl?: string;
}

export default function PricingCard(props: PricingCardProps) {
    return (
        <div  className="flex flex-col gap-3 border-white border shadow-md p-4 w-full h-fit">
            <h1 className="text-2xl font-serif font-bold">{props.title}</h1>
            <p className="text-sm text-neutral-500">{props.description}</p>
            <h2 className="text-3xl font-serif italic font-bold">{props.price}</h2>
            <ul>
                {props.features?.map((feature, index) => (
                    <li key={index} className="list-none before:content-['-'] before:mr-2">{feature}</li>
                ))}
            </ul>
            <button className="p-2 border bg-white text-black w-full">{props.buttonText}</button>
        </div>
    )
}