import { CardType } from './card-types';
import './card-back.css';

type CardBackProps = {
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
