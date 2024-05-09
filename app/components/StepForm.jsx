import { redirect } from '@remix-run/node';
import { useState } from 'react';

export default function StepForm() {
  
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
      // Lógica para enviar os dados do formulário
    console.log({ id, title, content });
      // Limpar os campos após o envio (opcional)
    setId('');
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    return redirect('/explore/trail-1');
  };
  return(
    <form className="w-[680px] h-[586px] bg-white p-12 rounded-3xl " onSubmit={handleSubmit}>
    <h2 className="text-3xl leading-10 font-semibold text-dark mb-10">Adicionar Passo</h2>
    <div className="flex flex-col mb-4">
      <label className="text-sm leading-6 font-semibold mb-1"  htmlFor="id">id</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="h-12 w-[584px] bg-scndgray border border-thrdgray rounded-xl py-3 px-4"
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="text-sm leading-6 font-semibold mb-1" htmlFor="title">Titulo</label>
      <input
        type="text"
        id="titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="h-12 w-[584px] bg-scndgray border border-thrdgray rounded-xl py-3 px-4"
      />
    </div>
    <div className="flex flex-col mb-4">
      <label className="text-sm leading-6 font-semibold mb-1" htmlFor="content">Conteúdo</label>
      <textarea
        id="conteudo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="h-[100px] w-[584px] bg-scndgray border border-thrdgray rounded-xl py-3 px-4 resize-none no-scrollbar"
      ></textarea>
    </div>
    <div className="flex justify-end gap-x-6 mt-10">
      <button className="w-[140px] h-12 p-3 rounded-xl text-purple text-base font-semibold py-3 px-4 bg-white border border-purple hover:bg-purple hover:text-white" type="button" onClick={handleCancel}>Cancelar</button>
      <button className="w-[140px] h-12 p-3 rounded-xl text-white text-base font-semibold py-3 px-4 bg-purple" type="submit">Criar passo</button>
    </div>
  </form>
  );
}