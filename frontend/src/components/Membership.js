import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Membership(props) {
  const { membership } = props;
  return (
    <Card>
      <img
        src={membership.image}
        className="card-img-top"
        alt={membership.name}
        width="500px"
        height="300px"
      ></img>
      <Card.Body>
        <Card.Title>{membership.name}</Card.Title>
        <Card.Text>{membership.price} RSD</Card.Text>
        <Link to={`/membership/${membership.slug}`}>
          <Button>See more details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
