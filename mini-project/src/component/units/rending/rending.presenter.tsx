import { useCallback, useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import * as S from "./rending.styles";
// @ts-ignore
import Fade from "react-reveal/Fade";

const imageArr = [
  "./img/travel1.jpg",
  "./img/travel2.jpg",
  "./img/travel3.jpg",
  "./img/travel4.jpg",
];

export default function RendingPagePresenter() {
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState([true, false, false, false]);

  const aaa = () => {
    if (isActive[0]) {
      const arr = [false, true, false, false];
      setIsActive(arr);
    }
    if (isActive[1]) {
      const arr = [false, false, true, false];
      setIsActive(arr);
    }
    if (isActive[2]) {
      const arr = [false, false, false, true];
      setIsActive(arr);
    }
    if (isActive[3]) {
      const arr = [true, false, false, false];
      setIsActive(arr);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      aaa();
    }, 4500);
  }, [isActive]);
  return (
    <S.Wrapper>
      {isActive[0] && (
        <Fade>
          <S.ImgBox1 image={imageArr[0]}></S.ImgBox1>
        </Fade>
      )}
      {isActive[1] && (
        <Fade>
          <S.ImgBox2 image={imageArr[1]}></S.ImgBox2>
        </Fade>
      )}
      {isActive[2] && (
        <Fade>
          <S.ImgBox3 image={imageArr[2]}></S.ImgBox3>
        </Fade>
      )}
      {isActive[3] && (
        <Fade>
          <S.ImgBox4 image={imageArr[3]}></S.ImgBox4>
        </Fade>
      )}
    </S.Wrapper>
  );
}
