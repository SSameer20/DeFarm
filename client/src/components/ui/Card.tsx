import "../../styles/app.css";

export default function Card({ title, description, key }) {
  return (
    <div className="feature" key={key}>
      <p className="card-title">{title}</p>
      <p>{description}</p>
    </div>
  );
}
