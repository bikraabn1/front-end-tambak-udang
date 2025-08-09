import React, { createContext, useMemo } from 'react';
import useWebsocketData from '../hooks/useWebsocketData';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const { data, isConnected, error, reconnect } = useWebsocketData(`${import.meta.env.VITE_WS_URL}`, 50);

  const doData = data.doValue

  const contextValue = useMemo(() => ({
    data,
    doData,
    isConnected,
    error,
    reconnect
  }), [data, isConnected, error, reconnect]);

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;