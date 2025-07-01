import fs from 'fs';
import path from 'path';



export default function AboutPage() {

    const svgDir = path.join(process.cwd(), 'public', 'svg');
    const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));
    console.log('SVG Files:', svgFiles);

    return (
        <main className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-8">
                <h1>About</h1>
                <div className="gap-2 flex flex-col">
                    <p>I’m an interdisciplinary designer and developer focused on modern, high-quality web solutions. My strength lies at the intersection of aesthetics and function. I believe great web design isn’t just about how it looks — it’s about clarity, structure, and a seamless user experience. I’m tech-agnostic but design-driven. Every project starts with a simple question: What’s the core goal — for the user, the brand, the product? From there, I build everything else: design systems, components, content, performance, and interaction.</p>
                </div>
                <div className="gap-2 flex flex-col">
                    <h2>Our Vision</h2>
                    <p>At Generics Studio, I envision a digital landscape where every brand can express its unique identity and connect with its audience in meaningful ways. I strive to push the boundaries of creativity and technology, crafting experiences that are not only visually striking but also highly functional and user-centric.</p>
                </div>
                <div className="gap-2 flex flex-col">
                    <p>I believe in the power of collaboration and transparency. My process is built on open communication, working closely with clients to understand their needs and goals. This approach allows me to create tailored solutions that truly resonate with their audience.</p>
                </div>
                <div className="gap-2 flex flex-col">
                    <p className="italic">For me, design isn’t decoration. It’s structure, content, and identity in one.</p>
                </div>
            </div>
        </main>
    );
}
