import { deleteStep } from '../services/stepService';
import {  redirect } from '@remix-run/node';

export const loader = async ({ params }) => {
  const { trailId, stepId } = params;

  await deleteStep(stepId);

  return redirect(`/explore/${trailId}`)
};