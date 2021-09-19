import * as S from './styles';

const Footer = (): React.ReactElement => {
  return (
    <S.Footer>
      <S.Content>
        <S.Copyright>© Copyright</S.Copyright>

        <S.MenuFooter>
          <S.ContactLink href="tel:+78009999999" alternative>
            8 (800) 999-99-99
          </S.ContactLink>

          <S.ContactLink href="mailto:mail@example.com" alternative>
            mail@example.com
          </S.ContactLink>
        </S.MenuFooter>
      </S.Content>
    </S.Footer>
  );
};

export default Footer;
