import './Card.css';

interface CardProps {
  value: number,
  handleClick(value: number): void
};

/**
 * Visual component for a single card.
 */
const Card = ({ value, handleClick }: CardProps): JSX.Element => {
  return (
    <div className="Card" onClick={() => handleClick(value)}>
      <div className="Card-value">{value}</div>
    </div>
  );
};

export default Card;
