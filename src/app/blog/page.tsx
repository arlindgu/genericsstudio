import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter"; // npm install gray-matter

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  content: string;
}

export default function BlogPage() {
  const postsDirectory = './src/posts';
  const files = fs.readdirSync(postsDirectory);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  const posts: BlogPost[] = mdFiles.map(file => {
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Frontmatter parsen
    const { data, content } = matter(fileContent);
    
    return {
      title: data.title || file.replace('.md', ''),
      description: data.description || '',
      date: data.date || '',
      author: data.author,
      tags: data.tags,
      slug: file.replace('.md', ''),
      content: content
    };
  });

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <main className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        
        <div className="grid">
          {posts.map((post, index) => (
            <article key={index} className="rounded-lg shadow w-full flex flex-row gap-4">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className="flex gap-2">
                <span>{post.date}</span>
              </div>
              <a href={`/blog/${post.slug}`} className="link"> read more
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}