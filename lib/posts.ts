import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function ensureDir() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export function getAllPosts(): PostMeta[] {
  ensureDir();
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Sem título',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'Start Corretora',
      category: data.category || 'Geral',
      image: data.image || null,
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensureDir();
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || 'Sem título',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    author: data.author || 'Start Corretora',
    category: data.category || 'Geral',
    image: data.image || null,
    content: contentHtml,
  };
}

export function getAllSlugs(): string[] {
  ensureDir();
  return fs.readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
