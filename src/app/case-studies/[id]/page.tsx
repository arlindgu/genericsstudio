import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default async function Post({ params }: { params: { id: string } }) {
  const id = (await params).id;
  
  try {
    const filePath = path.join(process.cwd(), 'src/app/case-studies/[id]/posts', `${id}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    const { data, content } = matter(fileContent);
    
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="text-center mb-12 border-b-2 border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            {data.title}
          </h1>
          
          <div className="flex justify-center items-center space-x-6 text-sm">
            <span className="flex items-center">
              <span className="mr-2">👤</span>
              {data.author}
            </span>
            <span className="flex items-center">
              <span className="mr-2">📅</span>
              {String(data.date)}
            </span>
          </div>
          
          {data.summary && (
            <p className="mt-6 text-lg  italic max-w-2xl mx-auto leading-relaxed">
              {data.summary}
            </p>
          )}
        </header>
        
        {/* Rendered Markdown */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold my-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-semibold my-3">{children}</h2>,
              ul: ({ children }) => <ul className="list-disc pl-5 my-3">{children}</ul>,
              p: ({ children }) => <p className="my-3">{children}</p>,
              a: ({ children, href }) => (
                <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post nicht gefunden</h1>
          <p className=" mb-2">Die Datei {id}.mdx existiert nicht.</p>
          <p className="text-sm">
            Fehler: {error instanceof Error ? error.message : 'Unbekannter Fehler'}
          </p>
        </div>
      </div>
    );
  }
}