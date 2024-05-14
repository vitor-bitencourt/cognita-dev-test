import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import { useState, useEffect } from 'react';

import { getTrailAndSteps } from '../services/trailService';
import { useLocation, useNavigate } from 'react-router-dom';

import Steps from '../components/Steps';
import StepForm from '../components/StepForm';


export const loader = async ({ params }) => {
  
  /*Creating the DB Nodes*/
  /*CREATE (s:Step { 
    id: 'step-1', 
    title: 'O primeiro passo', 
    content: 'O conteúdo do primeiro passo' 
  })
  CREATE (t:Trail {
    id: 'trail-1',
    title: 'A primeira trilha'
  })  
  CREATE (tm:Theme {
    id: 'theme-1',
    title: 'O primeiro tema'
  })
  CREATE (a:Academy {
    id: 'academy-1',
    title: 'A primeira academia'
  })*/

  /*Creating the Relationships*/
  //MATCH (s:Step { id: 'step-1'}), (t:Trail { id: 'trail-1' }) CREATE (t)-[:HAS_STEP]->(s)
  //MATCH (tm:Theme { id: 'theme-1'}), (t:Trail { id: 'trail-1' }) CREATE (tm)-[:HAS_TRAIL]->(t)
  //MATCH (a:Academy { id: 'academy-1'}), (tm:Theme { id: 'theme-1' }) CREATE (a)-[:HAS_THEME]->(tm)
  
  const { trailId } = params;
  
  const data = await getTrailAndSteps(trailId);

  return json(data);

};


export default function Explore() {
  const { t: trail, s: steps} = useLoaderData();

  const [showForm, setShowForm] = useState(false); 

  const location = useLocation();
  const navigate = useNavigate();
  const error = useLocation().search.includes('error') ? `O Passo com esse ID já existe!` : '';
  const [errorMessage, setErrorMessage] = useState('');
 
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      const timer = setTimeout(() => {
        setErrorMessage('');
        navigate.replace({ ...location, search: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, navigate, location]);

  function handleForm() {
    setShowForm(!showForm);
  }

  return (
      <div className="w-[800px] h-auto mx-auto overflow-hidden my-16">
        <div className="flex justify-between ">
          <h1 className="text-3xl text-dark font-semibold py-3">{trail.title}</h1>
          <button onClick={handleForm} type="button" className="w-48 h-12 p-3 rounded-xl flex gap-2 place-items-center text-white text-base font-semibold py-3 px-4 bg-purple">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
            <div>
              Adicionar Passo
            </div>
            </button>
        </div>
        {showForm && <div className="fixed inset-0 bg-dark opacity-65 z-10"></div>}
        {showForm && <StepForm trigger={showForm} setTrigger={setShowForm} />}


        {errorMessage && (
          <div className="flex justify-around h-16 mt-12 border border-red-800 rounded-lg bg-red-200">
            <h3 className="mt-3 font-medium text-2xl text-red-500">{errorMessage}</h3>        
          </div>
        )}

        {steps.length > 0 && <Steps steps={steps} />}
        {steps.length === 0 && <div className="flex flex-col items-center h-32 mt-12 border border-lightpurple rounded-lg bg-white"><h3 className="mt-12 font-medium text-2xl text-purple">Nenhum passo foi encontrado. Mas você pode criar o seu!</h3></div>}
      </div>
  );
}


