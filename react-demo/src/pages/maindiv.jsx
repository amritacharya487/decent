import styled, { keyframes } from 'styled-components';
import bcdImage from '../../Assets/bcd.jpg';
import cdeImage from '../../Assets/cde.jpg';
import defImage from '../../Assets/def.jpg';
import efgImage from '../../Assets/efg.jpg';

const sliderAnimation = keyframes`
  0% {
    background-image: url(${bcdImage});
    background-position: center;
  }
  35% {
    background-image: url(${cdeImage});
    background-position: center;
  }
  64% {
    background-image: url(${defImage});
    background-position: center;
  }
  85% {
    background-image: url(${efgImage});
    background-position: center;
  }
`;
const MainDiv = styled.div`
  width: 50%;
  height: 400px;
  position: absolute;
  left: 30%;
  top: 60%;
  transform: translate(-50%, -50%);
  background-image: url(${abcImage});
  background-position: center;
  box-shadow: 1px 2px white;
  animation: ${sliderAnimation} 9s infinite linear;
  /* Additional styles for the container */
`;
const SliderContainer = styled.div`
  animation: ${sliderAnimation} 4s infinite;
  /* Additional styles for the container */
`;

const slider = () => {
  return (
    <SliderContainer>
      {/* Your component content */}
    </SliderContainer>
  );
};

export default slider;
