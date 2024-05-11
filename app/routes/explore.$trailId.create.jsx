import {  redirect } from '@remix-run/node';
import { createStep } from '../services/stepService';


export async function action({ request, params }) {
 
  const { trailId } = params;

  const data = await request.formData(); 

  const form = new URLSearchParams(data);


  const id = form.get("id");
  const title = form.get("title");
  const content = form.get("content");
  
  await createStep(id, title, content, trailId);

  return redirect(`/explore/${trailId}`)

}
