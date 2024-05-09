import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';

export default function ProfileDetailed({ user }) {
  return (
    <div className="card">
      <CardHeader user={user} />
      <CardBody company={user.company} address={user.address} />
    </div>
  );
}
