import FormComponent from "./Form"
import PageTitle from "@/components/ui/PageTitle";

export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <PageTitle title="Contact Us.">
            Connect. Collaborate. Create.
          </PageTitle>
        </div>
        <FormComponent />
      </main>
    );
}
