import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Slick = styled(Slider)`
  /* .slick-slider {
    position: none;
    width: 100px;
    height: 1000px;
    background-color: red;
  } */
`;

interface ImageProps {
  image: any;
}

export const SlickBox1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: ImageProps) => props.image});
  background-size: cover;
`;
export const SlickBox2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("./img/travel2.jpg");
  background-size: cover;
`;
export const SlickBox3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),
    url("./img/travel3.jpg");
  background-size: cover;
`;
export const SlickBox4 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
    url("./img/travel4.jpg");
  background-size: cover;
`;

export const Box = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: white;
`;
