import Card from '../card/Card';
import './Hand.css';

interface HandProps {
  values: number[],
  handleCardClick(value: number): void
};

const Hand = ({ values, handleCardClick }: HandProps): JSX.Element => {
  return (
    <div className="Hand">
      {values.map((value, index) => (
        <Card key={index} value={value} handleClick={handleCardClick} />
      ))}
    </div>
  )
};

export default Hand;
