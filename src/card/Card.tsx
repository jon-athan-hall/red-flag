import { CardObject } from './card-types';
import './card.css';

interface CardProps extends CardObject {
  handleClick?: (value: number) => void
};

/**
 * Visual component for a single card.
 */
const Card = ({ value, type, handleClick }: CardProps): JSX.Element => {
  // Note the optional chaining syntax for the handleClick function call.
  return (
    <div className="Card" onClick={() => handleClick?.(value)}>
      <div className="Card-value">{value}</div>
      <div className="Card-type">{type.charAt(0)}</div>
    </div>
  );
};

export default Card;
