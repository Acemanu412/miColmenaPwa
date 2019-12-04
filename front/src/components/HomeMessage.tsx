import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useStores } from "../hooks/useStore";

interface IHomeMessageProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const HomeMessage = observer((props: IHomeMessageProps) => {

  const store = useStores();

  useEffect(() => {
    return () => {
      store.updateHomeMessage({ message: "" });
    };
  }, [store]);

  return <div {...props}>{store.homeMessage}</div>;
});
