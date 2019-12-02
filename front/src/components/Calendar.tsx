import React from "react";
import { Dot, Day } from "../styles/CalendarStyles";

export const Calendar: React.FC = () =>
    <ol>
        <li>
            <Day>L</Day>
            <Dot />
        </li>
        <li>
            <Day>M</Day>
            <Dot />
        </li>
        <li>
            <Day>M</Day>
            <Dot />
        </li>
        <li>
            <Day>J</Day>
            <Dot />
        </li>
        <li>
            <Day>V</Day>
            <Dot />
        </li>
        <li>
            <Day>S</Day>
            <Dot />
        </li>
        <li>
            <Day>D</Day>
            <Dot />
        </li>
    </ol>

//https://codepen.io/jessyca27/pen/vGoBex