import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useStores } from "../hooks/useStore";

interface IWarningProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Warning = observer((props: IWarningProps) => {

  const store = useStores();

  useEffect(() => {
    return () => {
      store.updateWarning({ message: "" });
    };
  }, [store]);
  return <div {...props}>{store.warning}</div>;
});
