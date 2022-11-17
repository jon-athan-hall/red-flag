import { CardType } from '../types';
import './CardBack.css';

interface CardBackProps {
  type: CardType,
  handleClick(type: CardType): void
}

const CardBack = ({ type, handleClick }: CardBackProps): JSX.Element => {
  return (
    <div className="CardBack" onClick={() => handleClick(type)}>
      <div className="CardBack-type">{type.charAt(0)}</div>
    </div>
  )
};

export default CardBack;
