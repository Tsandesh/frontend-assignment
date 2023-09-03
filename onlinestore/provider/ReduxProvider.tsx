"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

interface tenstackProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: tenstackProviderProps) => {
  return (
    // Provide the client to your App
    <Provider store={store}>{children}</Provider>
  );
};

export default ReduxProvider;
