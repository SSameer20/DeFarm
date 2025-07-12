import "../../styles/app.css";


export function Card({ title, description, key, image }) {
  return (
    <div className="feature" key={key}>
      <div
        className="h-auto bg-red-200 rounded-[6px]"
        style={{ marginBottom: "10px" }}
      >
        <img src={image} alt={title} />
      </div>
      <p className="card-title">{title}</p>
      <p className="opacity-60">{description}</p>

    </div>
  );
}
export const StepCard = ({ stepNumber, title, description, bgColor }) => (
  <div className="flex flex-col items-center text-center ">
    <div
      className={`w-15 h-15 rounded-full flex items-center justify-center mb-6 ${bgColor}`}
      style={{ marginBottom: "1.5rem" }}

    >
      <span className="text-3xl font-bold text-green-800">{stepNumber}</span>
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white text-lg leading-relaxed opacity-60">
      {description}
    </p>
  </div>
);
