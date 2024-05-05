"use client";
import { persistor, store } from "@redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <QueryParamProvider adapter={NextAdapterApp} options={{ enableBatching: true }}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </QueryParamProvider>
    </Provider>
  );
}
