import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
        },
        body: JSON.stringify({
          from: 'Portafolio <onboarding@resend.dev>',
          to: 'developermanuel@icloud.com',
          subject: `Nuevo mensaje de ${formData.name}`,
          html: `
            <strong>Nuevo mensaje de contacto</strong>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mensaje:</strong> ${formData.message}</p>
          `,
          replyTo: formData.email
        })
      });

      if (!response.ok) throw new Error('Error al enviar');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
      {submitStatus === 'success' && <p>¡Mensaje enviado con éxito!</p>}
      {submitStatus === 'error' && <p>Error al enviar el mensaje</p>}
    </form>
  );
}
