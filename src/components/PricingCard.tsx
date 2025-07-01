export interface PricingCardProps {
    title?: string;
    description?: string;
    price?: string;
    currency?: string;
    features?: string[];
    buttonText?: string;
    buttonUrl?: string;
}

export default function PricingCard(props: PricingCardProps) {
    return (
        <div className="relative flex flex-col gap-3 border-licorice border shadow-md p-4 w-full h-fit justify-baseline">
            <h2 className="font-serif">{props.title}</h2>
            <p>{props.description}</p>
            <h3 className="font-serif italic">{props.currency}<span className="font-bold"> {props.price}</span></h3>
            <ul>
                {props.features?.map((feature, index) => (
                    <li key={index} className="list-none before:content-['-'] before:mr-2">{feature}</li>
                ))}
            </ul>
            <button>{props.buttonText}</button>
        </div>
    )
}