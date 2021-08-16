import { IPizza } from '../../redux/store/types';
import PizzaBlockContainer from '../pizza-block-container';
import { StyledPizzaSection } from './styles';

interface IPizzasSectionProps {
  pizzas: IPizza[];
}

const PizzasSection = ({ pizzas }: IPizzasSectionProps): React.ReactElement => {
  return (
    <StyledPizzaSection>
      {pizzas && pizzas.map((pizza) => <PizzaBlockContainer key={pizza._id} pizzaItem={pizza} />)}
    </StyledPizzaSection>
  );
};

export default PizzasSection;
