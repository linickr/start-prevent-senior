import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Opção 1: Resend (recomendado para Vercel)
    // Para usar, instale: npm install resend
    // E adicione RESEND_API_KEY na Vercel
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Site Start Corretora <noreply@startcorretora.com.br>',
        to: ['gustavo@startcorretora.com.br', 'flavio@startcorretora.com.br'],
        subject: `Nova cotação - ${name}`,
        html: `
          <h2>Nova solicitação de cotação</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message || 'Sem observações'}</p>
        `,
      });
    } else {
      // Modo de desenvolvimento - apenas loga
      console.log('📧 Nova cotação recebida:', { name, phone, email, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao processar contato:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
