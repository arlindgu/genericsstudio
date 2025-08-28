import FormComponent from "./Form"
import PageTitle from "@/components/ui/PageTitle";

export default function ContactPage() {
    return (
      <main>
        <PageTitle title="Contact Us.">
          Have a project idea or questions about our services? We look forward
          to hearing from you and are happy to provide personal consultation.
          Let&apos;s plan your next digital venture together.
        </PageTitle>
        <section>
          <div className="container">
            <FormComponent />
          </div>
        </section>
      </main>
    );
}
