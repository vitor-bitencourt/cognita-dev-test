import { Form } from "@remix-run/react";
import { useState } from 'react';

export default function StepForm(props) {
  
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return(props.trigger) ? (  
    <div className="h-screen w-screen fixed inset-0 top-32 z-20">
      <div className="opacity-100 flex justify-center">
        <Form method="post"  action="/explore/trail-1/create"  className="w-[680px] h-[586px] bg-white p-12 rounded-3xl" onSubmit={() => props.setTrigger(false)}>
          <h2 className="text-3xl leading-10 font-semibold text-dark mb-10">Adicionar Passo</h2>
          <div className="flex flex-col mb-4">
            <label className="text-sm leading-6 font-semibold mb-1 text-lightdark"  htmlFor="id">id</label>
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="h-12 w-[584px] text-base font-semibold font-sans bg-scndgray border-1 border-thrdgray rounded-xl py-3 px-4 focus:outline-purple focus:outline-1 focus:ring-offset-0 focus:ring focus:ring-purple/[.40]"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-sm leading-6 font-semibold mb-1 text-lightdark" htmlFor="title">Titulo</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 w-[584px] text-base font-semibold font-sans bg-scndgray border border-thrdgray rounded-xl py-3 px-4 focus:outline-purple focus:outline-1 focus:ring-offset-0 focus:ring focus:ring-purple/[.40]"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-sm leading-6 font-semibold mb-1 text-lightdark" htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-[100px] w-[584px] text-base font-semibold font-sans bg-scndgray border border-thrdgray rounded-xl py-3 px-4 resize-none no-scrollbar focus:outline-purple focus:outline-1 focus:ring-offset-0 focus:ring focus:ring-purple/[.40]"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-x-6 mt-10">
            <button className="w-[140px] h-12 p-3 rounded-xl text-purple text-base font-semibold py-3 px-4 bg-white border border-lightpurple hover:bg-lightpurple hover:text-white" type="button" onClick={() => props.setTrigger(false)}>Cancelar</button>
            <button className="w-[140px] h-12 p-3 rounded-xl text-white text-base font-semibold py-3 px-4 bg-purple" type="submit">Criar passo</button>
          </div>
        </Form>
      </div>
  </div>
  ) : "";
}