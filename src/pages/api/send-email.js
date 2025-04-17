import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Verificar que la API_KEY está configurada
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no está configurada');
    }

    const { data, error } = await resend.emails.send({
      from: 'Portafolio <contacto@devmanuel.lat>',
      to: 'developermanuel@icloud.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <strong>Nuevo mensaje de contacto</strong>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
      replyTo: email
    });

    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
}
