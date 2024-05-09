export default function ProfileTeaser({ user: { username, name, email } }) {
  const usernameConcat = `(${username})`;

  return (
    <>
      <div className="ms-2 me-auto">
        <h2 className="fw-bold mb-1">{name}</h2>
        <h5 className="mb-1">{usernameConcat}</h5>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </>
  );
}
