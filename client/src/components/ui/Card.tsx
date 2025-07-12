import "../../styles/app.css";

export function Card({ title, description, key }) {
  return (
    <div className="feature" key={key}>
      <p className="card-title">{title}</p>
      <p>{description}</p>
    </div>
  );
}
export const StepCard = ({ stepNumber, title, description, bgColor }) => (
  <div className="flex flex-col items-center text-center ">
    <div
      className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${bgColor}`}
    >
      <span className="text-3xl font-bold text-green-800">{stepNumber}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white text-lg leading-relaxed opacity-60">
      {description}
    </p>
  </div>
);
