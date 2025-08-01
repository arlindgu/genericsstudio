import PageTitle from "@/components/ui/PageTitle";

export default function ImprintPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 mb-24 max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <PageTitle title="Imprint"> </PageTitle>
        <div className="card">
          <b>Responsible entity</b>
          <p>Gurgurovci Generics Studio</p>
          <p>Bergholzstrasse 21 A</p>
          <p>9500 Wil SG</p>
          <p>Switzerland</p>
          <p>info@generics.studio</p>
          <p>+41 79 405 99 55</p>
        </div>

        <div className="card">
          <strong>Persons</strong>
          <p>Arlind Gurgurovci</p>
        </div>

        <div className="card">
          <p className="font-bold">Company Name</p>
          <p>Gurgurovci Generics Studio</p>
        </div>

        <div className="card">
          <p className="font-bold">Disclaimer</p>
          The author assumes no liability for the correctness, accuracy,
          timeliness, reliability and completeness of the information.
          <p>
            Liability claims against the author for material or immaterial
            damage resulting from access to, use or non-use of the published
            information, from misuse of the connection or from technical
            malfunctions are excluded.
          </p>
          <p>
            All offers are non-binding. The author expressly reserves the right
            to change, add to, or delete parts of the pages or the entire offer
            without prior notice, or to temporarily or permanently cease
            publication.
          </p>
        </div>
        <div className="card">
          {" "}
          <p className="font-bold">Disclaimer for content and links</p>
          <p>
            References and links to third party websites are outside our area of
            responsibility. It rejected any responsibility for such websites.
            Access to and use of such websites is at the user his own risk.
          </p>
        </div>
        <div className="card">
          <p className="font-bold">Copyright declaration</p>
          <p>
            The copyrights and all other rights to content, images, photos or
            other files on this website belong exclusively to Gurgurovci
            Generics Studio or the specifically named rights holders. The
            written consent of the copyright holder must be obtained in advance
            for the reproduction of any elements.
          </p>
        </div>
      </div>
    </main>
  );
}
