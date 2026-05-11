import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { FaCalendar, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

export const metadata = {
  title: 'Novidades - Start Corretora',
  description: 'Últimas novidades sobre planos de saúde, Prevent Senior e o mercado de seguros.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
        <div className="container-custom text-center">
          <p className="text-brand-green font-semibold uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Novidades</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades do mercado de seguros e planos de saúde.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-gray-500 text-lg mb-4">
                Em breve, novos artigos serão publicados aqui.
              </p>
              <p className="text-gray-600">
                Cadastre seu e-mail no rodapé para receber as novidades em primeira mão!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-brand-green to-brand-blue relative overflow-hidden">
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-30">
                        {post.title.charAt(0)}
                      </div>
                    )}
                    <span className="absolute top-4 left-4 bg-white text-brand-green text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar size={10} />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser size={10} />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm group-hover:gap-3 transition-all">
                      Ler mais <FaArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
