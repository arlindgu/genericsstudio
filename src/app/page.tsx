import Logo from "@/components/svgs/genericsstudio.svg"
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.home);

export default function Home() {

  return (
    <>
      <div className="container h-screen -mt-34 flex flex-col items-center justify-center">
        <h1 className="sr-only">Generics Studio Homepage</h1>
        <Logo className="w-64 md:w-80 lg:w-96 fill-current -mb-4" />
        <p>
          Until logic breaks or beauty wins
        </p>
      </div>
    </>
  );
}
