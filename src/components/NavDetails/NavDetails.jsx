import { Button } from "components/MoviesInfoList/MovieInfoList.styled";
import { useLocation } from "react-router-dom";
import { StyledNavLink } from "./NavDetails.styled";
// import clsx from "clsx";

const NavDetails = () => {
  const location = useLocation();
  const prevLocation = location.state;

    return (
    <div>
<Button>
          <StyledNavLink to={"cast"} state={prevLocation}>Cast</StyledNavLink>
        </Button>
        <Button>
        <StyledNavLink  to={"reviews"} state={prevLocation}>Reviews</StyledNavLink>
        </Button>
    </div>
  );
};

export default NavDetails;
