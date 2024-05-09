import { json, redirect } from '@remix-run/node';
import { getTrailAndSteps } from '../services/trailService';
import { createStep } from '../services/stepService';
import { useLoaderData } from "@remix-run/react";
import Steps from '../components/Steps';
import StepForm from '../components/StepForm';

export const loader = async ({ params, request }) => {
  const { trailId } = params;
  console.log('trailId:', trailId);

  if (request.method === 'POST') {
    const body = await request.json();
    const newStep = await createStep(body);
    return redirect(`/explore/trail-${newStep.properties.trailId}`);
  }

  if (!trailId) {
    return json({ error: 'Trail ID not provided' }, { status: 400 });
  }

  const data = await getTrailAndSteps(trailId);
  console.log(data)
  return json(data);
};

export default function Explore() {
  const { t: trail, s: steps} = useLoaderData();
  return (
    <div className="w-[800px] mx-auto overflow-hidden md:max-w-2xl my-16">
      <div className="flex justify-between ">
        <h1 className="text-3xl text-dark font-semibold py-3">{trail.title}</h1>
        <button className="w-48 h-12 p-3 rounded-xl text-white text-base font-semibold py-3 px-4 bg-purple">+ Adicionar Passo</button>
      </div>
      <Steps steps={steps} />
      <StepForm />
    </div>
  );
}
