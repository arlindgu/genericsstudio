import PageTitle from "@/components/ui/PageTitle";
import { generateSEO, seoConfig } from "@/lib/seo";

export const metadata = generateSEO(seoConfig.legal);

export default function ImprintPage() {
  return (
    <main>
      <PageTitle title="Rechtliche Informationen & Impressum">
        Zuletzt aktualisiert am: 09.09.2025
      </PageTitle>

      <section>
        <div className="container">
          <h2>Zuständige Stelle</h2>
          <p>
            Gurgurovci Generics Studio
            <br />
            Bergholzstrasse 21 A
            <br />
            9500 Wil SG
            <br />
            Schweiz
            <br />
            <a href="mailto:info@generics.studio">info@generics.studio</a>
            <br />
            <a href="tel:+41794059955">+41 79 405 99 55</a>
          </p>
          <h2>Personen</h2>
          <p>Arlind Gurgurovci</p>
          <h2>Firmenname</h2>
          <p>Gurgurovci Generics Studio</p>
          <h2>Haftungsausschluss</h2>
          <p>
            Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit,
            Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            <br />
            Haftungsansprüche gegen den Autor wegen Schäden materieller oder
            immaterieller , die aus dem Zugriff oder der Nutzung bzw.
            Nichtnutzung der veröffentlichten Informationen, durch Missbrauch
            der Verbindung oder durch technische Störungen entstanden sind,
            werden ausgeschlossen.
            <br />
            Alle Angebote sind freibleibend und unverbindlich. Der Autor behält
            es sich ausdrücklich vor, , Teile der Seiten oder das gesamte
            Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
            löschen oder die Veröffentlichung von zeitweise oder endgültig
            einzustellen.
          </p>
          <h2>Haftungsausschluss für Inhalte und Links</h2>
          <p>
            Verweise und Links auf Webseiten Dritter liegen außerhalb des
            Verantwortungsbereiches von . Es wird jegliche Verantwortung für
            solche Websites abgelehnt.
          </p>
          Der Zugang zu und die Nutzung von solchen Websites erfolgt auf eigenes
          Risiko des Nutzers.
          <h2>Erklärung zum Urheberrecht</h2>
          <p>
            Die Urheberrechte und alle anderen Rechte an Inhalten, Bildern,
            Fotos oder anderen Dateien auf dieser Website gehören ausschließlich
            Gurgurovci Generics Studio oder den speziell genannten
            Rechteinhabern. Für die Vervielfältigung jeglicher Elemente muss im
            Voraus die schriftliche Zustimmung des Rechteinhabers eingeholt
            werden.
          </p>
        </div>
      </section>
    </main>
  );
}
