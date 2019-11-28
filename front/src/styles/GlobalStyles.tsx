import styled from "styled-components";

import { Warning } from "../components/Warning";
import { color } from "../themes/index";

export const StyledWarning = styled(Warning)`
    color:${color.blanco};
    font-weight: bold;
    height: 1rem;
    text-align: center;
    align-self:center

`;
