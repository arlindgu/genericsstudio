import Logo from "@/components/svgs/genericsstudio.svg"
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.home);

export default function Home() {

  return (
    <>
      <div className="container border h-screen flex flex-col justify-center items-center -mb-[93px] -mt-[73px] md:-mb-[61px]">
        <h1>
          <Logo className="w-64 md:w-80 lg:w-96 fill-current -mb-4" />
        </h1>

        <p>Until logic breaks or beauty wins</p>
      </div>
    </>
  );
}
