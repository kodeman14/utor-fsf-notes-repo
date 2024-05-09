export default function CardCompany({ name, catchPhrase }) {
  return (
    <section className="ms-2 me-auto">
      <h4>{name}:</h4>
      <h5 className="card-text">{catchPhrase}</h5>
    </section>
  );
}
