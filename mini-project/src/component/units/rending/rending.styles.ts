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

interface IsActiveProps {
  isActive: boolean;
}

export const ImgBox1 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: ImageProps) => props.image});
  background-size: cover;
`;

export const ImgBox2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: ImageProps) => props.image});
  background-size: cover;
`;

export const ImgBox3 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: ImageProps) => props.image});
  background-size: cover;
`;

export const ImgBox4 = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: ImageProps) => props.image});
  background-size: cover;
`;
