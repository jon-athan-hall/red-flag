import { CardType } from './card-types';
import './card-back.css';

type CardBackProps = {
  type: CardType;
}

const CardBack = ({ type }: CardBackProps): JSX.Element => {
  return (
    <div className="CardBack">
      <div className="CardBack-type">{type.charAt(0)}</div>
    </div>
  );
};

export default CardBack;
