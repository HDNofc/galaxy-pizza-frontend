import { StyledMainLayout } from './styles';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children, ...otherProps }: IMainLayoutProps): React.ReactElement => {
  return <StyledMainLayout {...otherProps}>{children}</StyledMainLayout>;
};

export default MainLayout;
