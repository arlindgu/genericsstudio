import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import SectionTitle from "../sectiontitle";

export default function Pricing() {
  return (
    <section className="min-h-[50vh] bg-foreground py-24 flex flex-col items-center justify-center">
      <div className="flex flex-col container px-10">
        <SectionTitle dark title="Good Design Shouldn't Break the Bank">
          Ironically, bad design is often the most expensive investment a
          company makes. Hidden costs of poor performance, lost conversions, and
          constant fixes drain budgets invisibly. We believe exceptional design
          should be accessible—not a luxury reserved for the few. That's why
          we've structured our pricing to be transparent, fair, and focused on
          real value.
        </SectionTitle>

        <div className="flex items-end gap-4 mt-6">
          <Card className="flex-3 rounded-none shadow-none relative h-124">
            <CardHeader>
              <CardTitle className="text-2xl">
                Web Design and Development
              </CardTitle>
              <CardDescription>
                Ideal for startups and small businesses looking to establish a
                strong online presence with essential features and clean design.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Custom website design tailored to your brand</li>
                <li>Responsive design for mobile and desktop</li>
                <li>Basic SEO optimization</li>
                <li>Content management system integration</li>
                <li>Initial content upload (up to 10 pages)</li>
                <li>1 month of post-launch support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Starting at $2,000 - Custom quotes available based on project
                scope.
              </p>
            </CardFooter>
            <Button className="mx-6">Get Started</Button>
          </Card>
          <Card className="flex-3 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">Analysis</CardTitle>
              <CardDescription>
                Perfect for growing businesses needing in-depth market research,
                user behavior insights, and strategic recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive market research and competitor analysis</li>
                <li>User behavior and journey mapping</li>
                <li>Data-driven insights and recommendations</li>
                <li>Performance benchmarking report</li>
                <li>Strategic roadmap development</li>
                <li>3 months of consultation support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Starting at $3,000 - Custom quotes available based on project
                scope.
              </p>
            </CardFooter>
            <Button className="mx-6">Get Started</Button>
          </Card>
          <Card className="flex-3 rounded-none shadow-none relative">
            <CardHeader>
              <CardTitle className="text-2xl">Restoration</CardTitle>
              <CardDescription>
                Designed for established brands aiming to revamp their digital
                presence with modern design and improved functionality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website audit and performance analysis</li>
                <li>Modern design refresh and redesign</li>
                <li>Performance optimization and speed improvements</li>
                <li>Security updates and compliance review</li>
                <li>Content restructuring and updates</li>
                <li>3 months of ongoing support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-background">
                Starting at $5,000 - Custom quotes available based on project
                scope.
              </p>
            </CardFooter>
            <Button className="mx-6">Get Started</Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
