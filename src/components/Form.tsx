import { FaWindowClose } from "react-icons/fa";

export default function Form() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    console.log('Form data:', Object.fromEntries(formData.entries()));
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'developermanuel@icloud.com',
          from: formData.get('email'),
          name: formData.get('name'),
          message: formData.get('message')
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Error al enviar el mensaje');
      }

      alert('Mensaje enviado con éxito!');
      form.reset();
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Error al enviar el mensaje. Por favor intente nuevamente.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      method="POST"
      className="bg-base-200 w-full grid grid-cols-2 gap-4 p-8 rounded-lg justify-items-center"
    >
      <h1 className="text-center text-2xl font-bold col-span-2">Contactame</h1>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        className="input input-bordered input-success w-full max-w-xs"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input input-bordered input-success w-full max-w-xs"
        required
      />
      <textarea
        name="message"
        id="message"
        placeholder="Escribe tu mensaje"
        rows={5}
        className="textarea textarea-bordered w-full max-w-full col-span-2"
      ></textarea>
      <button type="submit" className="btn btn-primary col-span-2 mt-4">
        Enviar
      </button>
    </form>
  );
}
