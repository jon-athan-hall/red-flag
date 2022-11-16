import './Card.css';

interface CardProps {
  value: number
};

const Card = ({ value }: CardProps): JSX.Element => {
  return (
    <div className="Card">
      <div className="Card-value">{value}</div>
    </div>
  );
};

export default Card;
