import styled from "styled-components";
import { color } from "../themes/index";

export const MiColmenaButton = styled.button`
  background-color: ${color.amarillo};
  border-radius: 8px;

  font-weight: bold;

  display: block;
  margin: 0 auto;

  height: 30px;
  width: 150px;
`;

export const OptionsImage = styled.img`
  height: 9vh;
`;

export const OptionsSpan = styled.span`
  display: block;
  font-weight: bold;
  margin: 5%;
`;

export const LogoYellowBanner = styled.img`
  height: 12vh;
`;

export const OptionsContainer = styled.div`
    background-color: ${color.blanco};
    height: flex;
    flex-direction: columns;
    padding: 9%;
    text-align: center;
`;

export const SpanBanner = styled.span`
display: block;
font-weight: bold;
position: absolute;
top: 23vh;
text-align: center;
width: 100%;
`;

export const YellowBanner = styled.div`
  background-color: ${color.amarillo};
  height: 20vh;
  margin-top: 8vh;
`;

export const WrapperDivForImages = styled.div`
    position: absolute;
    height: 12vh;
    top: 10vh;
    left: 38vw;
`;
