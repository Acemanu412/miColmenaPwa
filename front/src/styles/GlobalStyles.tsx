import styled from "styled-components";
import { HomeMessage } from "../components/HomeMessage";
import { Warning } from "../components/Warning";
import { color } from "../themes/index";

export const StyledWarning = styled(Warning)`
    color:${color.blanco};
    font-weight: bold;
    height: 1rem;
    text-align: center;
    align-self:center
`;

export const StyledHomeMessage = styled(HomeMessage)`
    color:${color.blanco};
    font-weight: bold;
    height: 1rem;
    text-align: center;
    align-self:center
`;
