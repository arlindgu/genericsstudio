export default function Footer() {

    const FooterLinks = {
        "Home": "/",
        "About": "/about",
        "Case Studies": "/case-studies",
        "Contact": "/contact",
        "Imprint": "/imprint",
        "Pricing": "/pricing"
    }

    return (
        <footer>
                <div className="flex flex-col flex-wrap">
                    {Object.entries(FooterLinks).map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="border-t last:border-b p-2 font-sans text-sm"
                        >
                            {label}
                        </a>
                    ))}
                </div>
        </footer>
    );
    }