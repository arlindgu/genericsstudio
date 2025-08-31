import PageTitle from "@/components/ui/PageTitle";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.legal);

export default function ImprintPage() {
  return (
    <main>
      <PageTitle title="Imprint">Last updated on: 09.07.2025</PageTitle>

      <section>
        <div className="container">
          <h2>Responsible entity</h2>
          <p>
            Gurgurovci Generics Studio
            <br />
            Bergholzstrasse 21 A
            <br />
            9500 Wil SG
            <br />
            Switzerland
            <br />
            <a href="mailto:info@generics.studio">info@generics.studio</a>
            <br />
            <a href="tel:+41794059955">+41 79 405 99 55</a>
          </p>
          <h2>Persons</h2>
          <p>Arlind Gurgurovci</p>
          <h2>Company Name</h2>
          <p>Gurgurovci Generics Studio</p>
          <h2>Disclaimer</h2>
          <p>
            The author assumes no liability for the correctness, accuracy,
            timeliness, reliability and completeness of the information.
            <br />
            Liability claims against the author for material or immaterial
            damage resulting from access to, use or non-use of the published
            information, from misuse of the connection or from technical
            malfunctions are excluded.
            <br />
            All offers are non-binding. The author expressly reserves the right
            to change, add to, or delete parts of the pages or the entire offer
            without prior notice, or to temporarily or permanently cease
            publication.
          </p>
          <h2>Disclaimer for content and links</h2>
          <p>
            References and links to third party websites are outside our area of
            responsibility. It rejected any responsibility for such websites.
          </p>
          Access to and use of such websites is at the user his own risk.
          <h2>Copyright declaration</h2>
          <p>
            The copyrights and all other rights to content, images, photos or
            other files on this website belong exclusively to Gurgurovci
            Generics Studio or the specifically named rights holders. The
            written consent of the copyright holder must be obtained in advance
            for the reproduction of any elements.
          </p>
        </div>
      </section>
    </main>
  );
}
