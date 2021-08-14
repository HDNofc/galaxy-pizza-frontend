import { IPizza } from '../../redux/store/types';
import PizzaBlockContainer from '../pizza-block-container';
import { StyledPizzaLayout } from './styles';

interface IPizzasLayoutProps {
  pizzas: IPizza[];
}

const PizzasLayout: React.FC<IPizzasLayoutProps> = ({ pizzas }): React.ReactElement => {
  return (
    <StyledPizzaLayout>
      {pizzas && pizzas.map((pizza) => <PizzaBlockContainer key={pizza._id} pizzaItem={pizza} />)}
    </StyledPizzaLayout>
  );
};

export default PizzasLayout;
