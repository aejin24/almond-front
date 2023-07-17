import { createContext, PropsWithChildren, useState } from "react";

import { modalList } from "../../utils/modalList";

import { ModalType } from "../../types/common";

type TShow = <T>(type: ModalType, props?: T) => void;

type TGlobalModalContextProps = {
  show: TShow;
  hide: () => void;
  store: {
    type: number;
    props: {};
  };
};

export const GlobalModalContext = createContext<TGlobalModalContextProps>({
  show: () => {},
  hide: () => {},
  store: {
    type: 0,
    props: {},
  },
});

export default function GlobalModal({ children }: PropsWithChildren) {
  const [store, setStore] = useState({
    type: 0,
    props: {},
  });

  const show: TShow = (type, props) => {
    setStore({
      type,
      props: props || {},
    });
  };

  const hide = () => {
    setStore({
      type: 0,
      props: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = modalList[store.type];

    if (!ModalComponent) {
      return null;
    }

    return <ModalComponent {...store.props} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, show, hide }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
}
