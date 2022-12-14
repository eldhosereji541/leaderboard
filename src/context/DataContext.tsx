import React, { useEffect, useState } from 'react';
import { Board } from '../components/leaderboarditem/LeaderboardItem';
import { generateNextData, getInitialData } from '../data/DataHandler';

interface DataContextType {
  dataList: Board[]
}

export const DataContext = React.createContext<DataContextType>({
  dataList: [],
});

const DataContextProvider = ({ children }: Props) => {
  const [ dataList, setDataList ] = useState<Board[]>([]);
  useEffect(() => {
    setDataList(getInitialData());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setDataList(generateNextData()), 1000);
    return () => clearInterval(timer);
  }, [dataList])

  return (
    <DataContext.Provider value={{ dataList }}>
      { children }
    </DataContext.Provider>);
}

interface Props {
  children: JSX.Element|JSX.Element[]
}

export default DataContextProvider;
