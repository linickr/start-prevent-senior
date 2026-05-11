import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/posts';
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import QuoteForm from '@/components/QuoteForm';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post não encontrado' };

  return {
    title: `${post.title} - Start Corretora`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <article className="pt-32 pb-12 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6 transition-colors">
            <FaArrowLeft size={12} /> Voltar para o blog
          </Link>

          <span className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-200">
            <span className="flex items-center gap-2">
              <FaCalendar /> {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <FaUser /> {post.author}
            </span>
          </div>
        </div>
      </article>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-8 shadow-lg" />
          )}

          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gray-light">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="text-center mb-6">
              <p className="section-subtitle">Cotação Grátis</p>
              <h2 className="text-3xl font-bold text-brand-blue mb-2">
                Gostou do conteúdo? Receba uma cotação personalizada
              </h2>
              <p className="text-gray-600">
                Nossos especialistas estão prontos para encontrar o plano ideal para você.
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Leia também</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="aspect-video bg-gradient-to-br from-brand-green to-brand-blue"></div>
                  <div className="p-5">
                    <span className="text-xs text-brand-green font-semibold">{p.category}</span>
                    <h3 className="font-bold text-brand-blue mt-2 group-hover:text-brand-green transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
