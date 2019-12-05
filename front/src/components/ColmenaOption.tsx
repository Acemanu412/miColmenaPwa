import React from "react";

import { MiColmenaButton,
         OptionsContainer,
         OptionsImage,
         OptionsSpan } from "../styles/AgregarColmenaStyles";

interface IColmenaOptionProps extends React.HTMLAttributes<HTMLDivElement> {
    imageSource: any;
    text: string;
}

export const ColmenaOption = ({imageSource,
                               text,
                              ...rest}: IColmenaOptionProps) => {

  return <OptionsContainer {...rest}>
            <OptionsImage src={imageSource}></OptionsImage>
            <OptionsSpan>{text}</OptionsSpan>
            <MiColmenaButton>Mi colmena</MiColmenaButton>
         </OptionsContainer>;
};
