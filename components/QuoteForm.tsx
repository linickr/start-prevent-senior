'use client';

import { useState } from 'react';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

interface QuoteFormProps {
  variant?: 'light' | 'dark';
  title?: string;
}

export default function QuoteForm({ variant = 'light', title }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Erro ao enviar');

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Não foi possível enviar. Tente novamente ou nos chame no WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-8 rounded-2xl text-center ${variant === 'dark' ? 'bg-white/10 backdrop-blur' : 'bg-green-50'}`}>
        <FaCheckCircle className="text-brand-green mx-auto mb-4" size={48} />
        <h3 className={`text-2xl font-bold mb-2 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          Mensagem enviada!
        </h3>
        <p className={variant === 'dark' ? 'text-gray-200' : 'text-gray-700'}>
          Recebemos seu contato e retornaremos o mais breve possível.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-brand-green font-semibold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  const inputClass = variant === 'dark'
    ? 'w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green'
    : 'input-field';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <h3 className={`text-2xl font-bold mb-4 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          {title}
        </h3>
      )}

      <div>
        <label htmlFor="name" className={`block text-sm font-semibold mb-1 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          Nome *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="phone" className={`block text-sm font-semibold mb-1 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="(21) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="email" className={`block text-sm font-semibold mb-1 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-semibold mb-1 ${variant === 'dark' ? 'text-white' : 'text-brand-blue'}`}>
          Alguma observação?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Conte-nos como podemos ajudar"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3.5 rounded-full transition-all disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <FaSpinner className="animate-spin" /> Enviando...
          </>
        ) : (
          'Enviar'
        )}
      </button>

      {errorMsg && (
        <p className="text-red-500 text-sm text-center">{errorMsg}</p>
      )}

      <p className={`text-xs text-center ${variant === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
        🔒 Seus dados são criptografados e protegidos.
      </p>
    </form>
  );
}
