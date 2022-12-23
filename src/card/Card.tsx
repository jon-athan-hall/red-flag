import { CardObject, CardType } from './card-types';
import './card.css';

interface CardProps extends CardObject {
  handleClick?: (type: CardType, value: number) => void,
  current?: boolean
};

/**
 * Visual component for a single card.
 */
const Card = ({ value, type, handleClick, current }: CardProps): JSX.Element => {
  let classList = "Card";

  classList += current ? ' Card--current' : '';

  // Note the optional chaining syntax for the handleClick function call.
  return (
    <div className={classList} onClick={() => handleClick?.(type, value)}>
      <div className="Card-value">{value}</div>
      <div className="Card-type">{type.charAt(0)}</div>
    </div>
  );
};

export default Card;
