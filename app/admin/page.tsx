'use client';

import { useState, useEffect } from 'react';
import { FaLock, FaPlus, FaTrash, FaEdit, FaSignOutAlt, FaSpinner, FaCheck } from 'react-icons/fa';

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  content: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [posts, setPosts] = useState<PostData[]>([]);
  const [editing, setEditing] = useState<PostData | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_auth');
    if (stored === 'ok') setAuthenticated(true);
  }, []);

  useEffect(() => {
    if (authenticated) loadPosts();
  }, [authenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const res = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'x-admin-password': password },
      });
      if (!res.ok) {
        setAuthError('Senha incorreta');
        return;
      }
      sessionStorage.setItem('admin_auth', 'ok');
      sessionStorage.setItem('admin_password', password);
      setAuthenticated(true);
    } catch {
      setAuthError('Erro de conexão');
    }
  };

  const getPassword = () => sessionStorage.getItem('admin_password') || '';

  const loadPosts = async () => {
    const res = await fetch('/api/posts', {
      headers: { 'x-admin-password': getPassword() },
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data.posts);
    }
  };

  const handleSave = async (post: PostData) => {
    setSaving(true);
    setSavedMsg('');
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': getPassword(),
        },
        body: JSON.stringify(post),
      });
      if (res.ok) {
        setSavedMsg('Salvo com sucesso!');
        await loadPosts();
        setEditing(null);
        setShowForm(false);
      } else {
        setSavedMsg('Erro ao salvar');
      }
    } catch {
      setSavedMsg('Erro ao salvar');
    } finally {
      setSaving(false);
      setTimeout(() => setSavedMsg(''), 3000);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm('Tem certeza que deseja excluir este post?')) return;
    const res = await fetch(`/api/posts?slug=${slug}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': getPassword() },
    });
    if (res.ok) await loadPosts();
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    sessionStorage.removeItem('admin_password');
    setAuthenticated(false);
  };

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-blue-dark p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue">Painel Administrativo</h1>
            <p className="text-gray-600 text-sm mt-1">Start Corretora</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-blue mb-1">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                placeholder="Digite a senha"
                required
              />
            </div>
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <button type="submit" className="btn-primary w-full">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Form
  if (showForm || editing) {
    const initial: PostData = editing || {
      slug: '',
      title: '',
      date: new Date().toISOString().split('T')[0],
      excerpt: '',
      category: 'Geral',
      author: 'Start Corretora',
      content: '',
    };
    return <PostForm initial={initial} onSave={handleSave} onCancel={() => { setShowForm(false); setEditing(null); }} saving={saving} />;
  }

  // List
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-blue">Painel Admin</h1>
            <p className="text-gray-600">Gerencie os posts do blog</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowForm(true)} className="btn-primary flex items-center gap-2">
              <FaPlus size={14} /> Novo Post
            </button>
            <button onClick={handleLogout} className="text-gray-600 hover:text-red-500 flex items-center gap-2 px-4">
              <FaSignOutAlt /> Sair
            </button>
          </div>
        </div>

        {savedMsg && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
            <FaCheck /> {savedMsg}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {posts.length === 0 ? (
            <div className="p-12 text-center text-gray-500">Nenhum post ainda. Clique em &quot;Novo Post&quot; para começar.</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-brand-blue">Título</th>
                  <th className="text-left p-4 text-sm font-semibold text-brand-blue hidden md:table-cell">Categoria</th>
                  <th className="text-left p-4 text-sm font-semibold text-brand-blue hidden md:table-cell">Data</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p.slug} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-semibold text-brand-blue">{p.title}</td>
                    <td className="p-4 text-sm text-gray-600 hidden md:table-cell">{p.category}</td>
                    <td className="p-4 text-sm text-gray-600 hidden md:table-cell">
                      {new Date(p.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={() => setEditing(p)} className="text-brand-blue hover:text-brand-green p-2" aria-label="Editar">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(p.slug)} className="text-gray-500 hover:text-red-500 p-2" aria-label="Excluir">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function PostForm({
  initial,
  onSave,
  onCancel,
  saving,
}: {
  initial: PostData;
  onSave: (p: PostData) => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [data, setData] = useState<PostData>(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const slugify = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = data.slug || slugify(data.title);
    onSave({ ...data, slug });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold text-brand-blue mb-8">
          {initial.slug ? 'Editar Post' : 'Novo Post'}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-brand-blue mb-1">Título *</label>
            <input name="title" required value={data.title} onChange={handleChange} className="input-field" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-brand-blue mb-1">Categoria</label>
              <input name="category" value={data.category} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-blue mb-1">Autor</label>
              <input name="author" value={data.author} onChange={handleChange} className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-blue mb-1">Data</label>
              <input type="date" name="date" value={data.date.split('T')[0]} onChange={handleChange} className="input-field" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-blue mb-1">Resumo</label>
            <textarea name="excerpt" rows={2} value={data.excerpt} onChange={handleChange} className="input-field" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-blue mb-1">Conteúdo (Markdown)</label>
            <textarea
              name="content"
              rows={20}
              value={data.content}
              onChange={handleChange}
              className="input-field font-mono text-sm"
              placeholder="## Título da seção&#10;&#10;Texto do post..."
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Suporta Markdown: ## Título, **negrito**, *itálico*, [link](url), - lista
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
              {saving ? <><FaSpinner className="animate-spin" /> Salvando...</> : 'Salvar'}
            </button>
            <button type="button" onClick={onCancel} className="text-gray-600 hover:text-red-500 px-6">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
