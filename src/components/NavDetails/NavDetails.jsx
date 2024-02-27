import { NavContainer, StyledNavLink } from './NavDetails.styled';

const NavDetails = () => {
  return (
    <NavContainer>
      <StyledNavLink to={'cast'}>Cast</StyledNavLink>

      <StyledNavLink to={'reviews'}>Reviews</StyledNavLink>
    </NavContainer>
  );
};

export default NavDetails;
