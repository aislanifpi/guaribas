import { useState } from 'react';
import { Button } from './Button';
import { Toast } from './Toast';
import { supabase } from '../lib/supabase';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    startup: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setShowToast(true);
      setFormData({ name: '', email: '', startup: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="startup" className="block text-sm font-medium text-gray-700">
            Startup/Projeto (opcional)
          </label>
          <input
            type="text"
            id="startup"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            value={formData.startup}
            onChange={(e) => setFormData({ ...formData, startup: e.target.value })}
          />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
      </form>

      {showToast && (
        <Toast
          message="Cadastro realizado com sucesso!"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}