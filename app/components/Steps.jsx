export default function Steps({ steps }) {
  return (
    <ul className="mt-10">
    {steps.map(step => (
      <li className="flex flex-col gap-2 h-32 mb-6 p-6 border border-gray rounded-lg bg-white" key={step.id}>
        <span className="text-lg font-semibold leading-6 text-dark">{step.title}</span>
        <span className="text-base font-medium text-lightdark">{step.content}</span>
      </li>
    ))}
  </ul>
  );
} 