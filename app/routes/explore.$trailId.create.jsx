import {  redirect } from '@remix-run/node';
import { createStep } from '../services/stepService';


export async function action({ request, params }) {
 
  const { trailId } = params;

  const data = await request.formData(); 

  const form = new URLSearchParams(data);


  const id = form.get("id");
  const title = form.get("title");
  const content = form.get("content");
  
  const result = await createStep(id, title, content, trailId);

  if (!result.success) {
    return redirect(`/explore/${trailId}?error`);
  }

  return redirect(`/explore/${trailId}`)

}
