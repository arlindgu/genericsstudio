type data = {
  leftTitle: string;
  content: { title: string; subtitle?: string; text: string, tags?: string[] }[];
};

import { Badge } from "@/components/ui/badge";

export default function GridContent({ data }: { data: data }) {
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-12 border-t border-dotted pt-8">
          <h2 className="col-span-3 font-mono">{data.leftTitle}</h2>
          <div className="col-span-1" />
          <div className="lg:col-span-8 lg:grid lg:grid-cols-2 gap-8 space-y-8 ">
            {data.content.map((statement, index) => (
              <div key={index}>
                <h3 className="lg:mt-0 font-mono">{statement.title}</h3>
                <p>{statement.text}</p>
                {statement.subtitle && <p className="muted italic">{statement.subtitle}</p>}
                {statement.tags && (
                  <>
                    <div className="mt-4">
                      {statement.tags.map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
