import {observer} from "mobx-react";
import React from "react";
import { useStores } from "../hooks/useStore";

interface IWarningProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Warning = observer((props: IWarningProps) => {
    const store = useStores();
    return <div {...props}>{store.warning}</div>;
});
