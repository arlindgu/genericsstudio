import Link from 'next/link';

export interface PricingCardProps {
    title?: string;
    description?: string;
    price?: string;
    currency?: string;
    features?: string[];
    buttonText?: string;
    buttonUrl?: string;
    tag?: string;
}

export default function PricingCard(props: PricingCardProps) {
    return (
        <div className="relative flex flex-col gap-3 border-licorice border p-4 w-full min-fit justify-baseline">
            <h2 className="font-serif">{props.title}</h2>
            <p>{props.description}</p>
            <h3 className="font-serif italic">{props.currency}<span className="font-bold"> {props.price}</span></h3>
            <ul>
                {props.features?.map((feature, index) => (
                    <li key={index} className="list-none before:content-['-'] before:mr-2">{feature}</li>
                ))}
            </ul>
            {props.buttonUrl?  <button><Link href={props.buttonUrl}>{props.buttonText}</Link>
            </button> : null}
            {props.tag ? <span className="bg-licorice-500 text-background py-1 px-2 self-center w-full text-center">
                {props.tag}
            </span> : null}
            
        </div>
    )
}