import { IPizza } from '../../redux/store/types';
import PizzaBlockContainer from '../pizza-block-container';
import * as S from './styles';

interface Props {
  pizzas: IPizza[];
}

const PizzasSection = ({ pizzas }: Props): React.ReactElement => {
  return (
    <S.PizzaSection>
      {pizzas && pizzas.map((pizza) => <PizzaBlockContainer key={pizza._id} pizzaItem={pizza} />)}
    </S.PizzaSection>
  );
};

export default PizzasSection;
