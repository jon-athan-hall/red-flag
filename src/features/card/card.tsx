// Import dependencies from external libraries.
import { CSSProperties } from 'react';

import { CardObject, CardType } from './card-types';

// Import styles.
import './card.css';

interface CardProps extends CardObject {
  current?: boolean,
  handleClick?: (type: CardType, value: number) => void,
  style?: CSSProperties
};

/**
 * Visual component for a single card.
 * @return {JSX.Element}
 */
const Card = ({ value, type, handleClick, current, style }: CardProps): JSX.Element => {
  let classList = "Card";

  classList += current ? ' Card--current' : '';

  // Note the optional chaining syntax for the handleClick function call.
  return (
    <div className={classList} onClick={() => handleClick?.(type, value)} style={style}>
      <div className="Card-value">{value}</div>
      <div className="Card-type">{type.charAt(0)}</div>
    </div>
  );
};

export default Card;