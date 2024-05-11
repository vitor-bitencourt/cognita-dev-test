import {  redirect } from '@remix-run/node';
import { deleteStep } from '../services/stepService';


export const loader = async ({ params }) => {
  const { trailId, stepId } = params;

  await deleteStep(stepId);

  return redirect(`/explore/${trailId}`)
};