import Image from "next/image";
import Footer from "@/components/footer";

export default function ReferencesPage() {

    interface ReferencesContent {
        title: string;
        href: string;
        description: string;
        imageSrc: string;
    }

    const referencesContent: ReferencesContent[] = [
        {
            title: "Digital Portfolio Platform",
            href: "https://example.com/portfolio",
            description: "A modern portfolio platform for creative professionals featuring drag-and-drop layouts, custom domains, and client collaboration tools. Built with React and Next.js for optimal performance.",
            imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
        },
        {
            title: "E-commerce Dashboard",
            href: "https://example.com/ecommerce",
            description: "Comprehensive analytics dashboard for online retailers with real-time sales tracking, inventory management, and customer insights. Features advanced charting and automated reporting.",
            imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        },
        {
            title: "Food Delivery App",
            href: "https://example.com/food",
            description: "Mobile-first food delivery application with GPS tracking, real-time order updates, and integrated payment processing. Supports multiple restaurants and dietary preferences.",
            imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
        },
        {
            title: "Fitness Tracking Platform",
            href: "https://example.com/fitness",
            description: "Comprehensive fitness tracking platform with workout planning, nutrition logging, and progress visualization. Integrates with popular wearable devices and health apps.",
            imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        },
        {
            title: "Social Media Analytics",
            href: "https://example.com/social",
            description: "Advanced social media analytics tool providing insights across multiple platforms. Features sentiment analysis, competitor tracking, and automated reporting for marketing teams.",
            imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
        },
        {
            title: "Learning Management System",
            href: "https://example.com/lms",
            description: "Modern LMS for educational institutions with interactive course creation, student progress tracking, and virtual classroom features. Supports multimedia content and assessments.",
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        },
        {
            title: "Project Management Tool",
            href: "https://example.com/project",
            description: "Collaborative project management platform with Kanban boards, Gantt charts, and team communication tools. Integrates with popular development and design tools.",
            imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800",
        },
        {
            title: "Real Estate Platform",
            href: "https://example.com/realestate",
            description: "Modern real estate platform with virtual tours, mortgage calculators, and neighborhood insights. Features advanced search filters and saved property lists.",
            imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        },
        {
            title: "Music Streaming Interface",
            href: "https://example.com/music",
            description: "Sleek music streaming interface with personalized playlists, social sharing, and high-quality audio streaming. Features offline downloads and cross-device synchronization.",
            imageSrc: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        },
        {
            title: "Travel Planning App",
            href: "https://example.com/travel",
            description: "Comprehensive travel planning application with itinerary creation, booking integration, and local recommendations. Supports group travel and budget tracking.",
            imageSrc: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
        },
        {
            title: "Healthcare Portal",
            href: "https://example.com/healthcare",
            description: "Patient portal for healthcare providers with appointment scheduling, medical records access, and telemedicine capabilities. HIPAA compliant with secure messaging.",
            imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800",
        },
        {
            title: "Banking Dashboard",
            href: "https://example.com/banking",
            description: "Secure online banking dashboard with account management, transaction history, and financial planning tools. Features fraud detection and mobile deposit.",
            imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
        },
        {
            title: "Gaming Community Platform",
            href: "https://example.com/gaming",
            description: "Social platform for gamers with tournament organization, streaming integration, and achievement tracking. Supports multiple gaming platforms and voice chat.",
            imageSrc: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
        },
        {
            title: "Weather Monitoring System",
            href: "https://example.com/weather",
            description: "Advanced weather monitoring system with real-time data visualization, severe weather alerts, and historical climate analysis. Features interactive maps and forecasting.",
            imageSrc: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
        },
        {
            title: "Cryptocurrency Exchange",
            href: "https://example.com/crypto",
            description: "Secure cryptocurrency trading platform with real-time market data, portfolio tracking, and advanced trading tools. Features multi-layer security and mobile trading.",
            imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
        },
        {
            title: "Recipe Sharing Platform",
            href: "https://example.com/recipes",
            description: "Community-driven recipe sharing platform with meal planning, shopping lists, and nutritional information. Features video tutorials and dietary restriction filters.",
            imageSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        },
        {
            title: "Event Management System",
            href: "https://example.com/events",
            description: "Comprehensive event management platform with ticketing, attendee tracking, and networking features. Supports virtual and hybrid events with live streaming.",
            imageSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
        },
        {
            title: "Digital Art Gallery",
            href: "https://example.com/gallery",
            description: "Virtual art gallery platform for artists and collectors with 3D exhibition spaces, NFT integration, and art marketplace features. Supports VR viewing experiences.",
            imageSrc: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
        },
        {
            title: "Inventory Management",
            href: "https://example.com/inventory",
            description: "Smart inventory management system with barcode scanning, automated reordering, and supplier integration. Features predictive analytics and mobile warehouse management.",
            imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
        },
        {
            title: "Video Conferencing Platform",
            href: "https://example.com/video",
            description: "Enterprise video conferencing solution with screen sharing, recording capabilities, and integration with productivity tools. Features end-to-end encryption and large meeting support.",
            imageSrc: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
        },
    ];

    return (
        <main className="flex flex-col items-center justify-between h-full w-full">
            <h1 className="font-bold text-3xl italic">References</h1>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-10 w-full max-w-6xl">
                {referencesContent.map((item, index) => (
                    <div key={index} className="break-inside-avoid mb-4 flex flex-col border p-4">
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="link text-xl">
                            {item.title}
                        </a>
                        <p className="text-sm">{item.description}</p>
                        <div>
                            <Image
                                src={item.imageSrc}
                                alt={item.title}
                                width={0}
                                height={0}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                className="w-full h-auto rounded mt-2"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div />
        </main>
    );
}
