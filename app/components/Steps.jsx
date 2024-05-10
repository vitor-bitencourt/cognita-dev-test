import { Form } from '@remix-run/react'

export default function Steps({ steps }) {
  return (
    <ul className="mt-10">
    {steps.map(step => (
      <li className="flex flex-col gap-2 h-32 mb-6 p-6 border border-gray rounded-lg bg-white" key={step.id}>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold leading-6 text-dark">{step.title}</span>
          <span className="text-base font-medium text-lightdark">{step.content}</span>
        </div>
        <div className="absolute mt-14 ml-[343px]">
          <Form method="get" action={`/explore/trail-1/remove/${step.id}`}>
            <button className="px-1 py-1 rounded-lg border border-red-600 text-black text-sm font-semibold ml-96 hover:border-white hover:bg-red-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
          </Form>
          
        </div>
      </li>
    ))}
  </ul>
  );
} 