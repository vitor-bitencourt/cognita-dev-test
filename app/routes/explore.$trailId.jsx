import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import { useState } from 'react';

import { getTrailAndSteps } from '../services/trailService';

import Steps from '../components/Steps';
import StepForm from '../components/StepForm';


export const loader = async ({ params }) => {
  const { trailId } = params;
  console.log('trailId:', trailId);
  const data = await getTrailAndSteps(trailId);
  console.log(data)
  return json(data);
};


export default function Explore() {
  const { t: trail, s: steps} = useLoaderData();

  const [showForm, setShowForm] = useState(false); 

  return (
      <div className="w-[800px] h-auto mx-auto overflow-hidden my-16">
        <div className="flex justify-between ">
          <h1 className="text-3xl text-dark font-semibold py-3">{trail.title}</h1>
          <button onClick={() => setShowForm(true)} type="button" className="w-48 h-12 p-3 rounded-xl text-white text-base font-semibold py-3 px-4 bg-purple">+ Adicionar Passo</button>
        </div>
        {showForm && <div className="fixed inset-0 bg-dark opacity-65 z-10"></div>}
        {showForm && <StepForm trigger={showForm} setTrigger={setShowForm} />}

        {steps.length > 0 && <Steps steps={steps} />}
        {steps.length === 0 && <p>Nenhum passo encontrado.</p>}
      </div>
  );
}


