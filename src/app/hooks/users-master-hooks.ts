import { useCallback, useEffect, useState } from 'react';
import { getTable1List } from '../services/users-master';
import { Table1TypeUsersMaster } from '../models/UsersMaster/table1-type-users-master';

export const useGetTable1List = () => {
  const [table1, setTable1] = useState<Table1TypeUsersMaster[]>([]);

  const requestTable1 = useCallback(() => {
    let ignore = false;
    getTable1List()
      .then((data) => {
        if (!ignore) {
          setTable1(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestTable1();
  }, [requestTable1]);

  return { requestUsersMasterTable1: requestTable1, usersMasterTable1: table1, setUsersMasterTable1: setTable1 };
}
