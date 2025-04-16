import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Handler para OPTIONS (necesario para CORS)
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};

export const POST: APIRoute = async ({ request }) => {
  console.log('Request recibida en /api/send-email');
  try {
    const { to, from, name, message } = await request.json();

    console.log('Intentando enviar email a:', to);
    const { data, error } = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: 'developermanuel@icloud.com', // Forzamos el destino para testing
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <strong>Nuevo mensaje de contacto</strong>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${from}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: from
    });

    if (error) {
      console.error('Error de Resend:', error);
      throw error;
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Email enviado correctamente',
      data
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error enviando email:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Error al enviar el email. Por favor intente nuevamente.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
