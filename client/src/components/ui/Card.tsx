import "../../styles/app.css"

export default function Card({title, description, key}) {
  return (
    <div className="feature" key={key}>
          <h2>{title}</h2>
          <p>
           {description}</p>
    </div>
  )
}
