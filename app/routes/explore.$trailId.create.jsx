import { createStep } from '../services/stepService';
import {  redirect } from '@remix-run/node';

export async function action({ request, params }) {
 
  const { trailId } = params;

  const data = await request.formData(); 

  const form = new URLSearchParams(data);

  const id = form.get("id");
  const title = form.get("title");
  const content = form.get("content");
  //const type = request.headers.get("content-type")
  
  await createStep(id, title, content, trailId);

  return redirect(`/explore/${trailId}`)

}

