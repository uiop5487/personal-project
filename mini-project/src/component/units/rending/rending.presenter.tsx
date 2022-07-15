import { useCallback, useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import * as S from "./rending.styles";

const imageArr = [
  "./img/travel1.jpg",
  "./img/travel2.jpg",
  "./img/travel3.jpg",
  "./img/travel4.jpg",
];

export default function RendingPagePresenter() {
  const [image, setImage] = useState("");

  const aaa = useCallback(() => {
    let count = 0;
    console.log(count);
    setInterval(() => {
      setImage(imageArr[count]);
      if (count === 3) {
        count = 0;
      }
      count++;
    }, 2500);
  }, []);

  useEffect(() => {
    aaa();
  }, []);

  return (
    <div>
      <S.Wrapper>
        <S.SlickBox1 image={image}></S.SlickBox1>
      </S.Wrapper>
    </div>
  );
}
