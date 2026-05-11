import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/posts');

function checkAuth(request: Request) {
  const password = request.headers.get('x-admin-password');
  const adminPass = process.env.ADMIN_PASSWORD || 'startcorretora2025';
  return password === adminPass;
}

function ensureDir() {
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });
}

// GET - list all posts
export async function GET(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  ensureDir();
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      category: data.category || 'Geral',
      author: data.author || 'Start Corretora',
      content,
    };
  });

  return NextResponse.json({ posts });
}

// POST - create or update
export async function POST(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { slug, title, date, excerpt, category, author, content } = await request.json();
    if (!slug || !title) {
      return NextResponse.json({ error: 'slug e title são obrigatórios' }, { status: 400 });
    }

    ensureDir();
    const fileContent = matter.stringify(content || '', {
      title,
      date: date || new Date().toISOString().split('T')[0],
      excerpt: excerpt || '',
      category: category || 'Geral',
      author: author || 'Start Corretora',
    });

    fs.writeFileSync(path.join(postsDir, `${slug}.md`), fileContent, 'utf8');
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 });
  }
}

// DELETE
export async function DELETE(request: Request) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'slug obrigatório' }, { status: 400 });
  }

  const filePath = path.join(postsDir, `${slug}.md`);
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  return NextResponse.json({ success: true });
}
