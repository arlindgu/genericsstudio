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
        <div className="flex flex-col gap-2 border-licorice border-[1.5px] p-4 w-full shadow-md">
            <h2 className="font-body">{props.title}</h2>
            <p>{props.description}</p>
            <h3 className="font-body">{props.currency}<span className="font-bold"> {props.price}</span></h3>
            <ul>
                {props.features?.map((feature, index) => (
                    <li key={index} className="list-none before:content-['-'] before:mr-2">{feature}</li>
                ))}
            </ul>
            {props.buttonUrl?  <Link href={props.buttonUrl} ><button className='w-full'>{props.buttonText}</button></Link>
             : null}
            {props.tag ? <span className="bg-night text-powder py-1 px-2 self-center w-full text-center">
                {props.tag}
            </span> : null}
            
        </div>
    )
}