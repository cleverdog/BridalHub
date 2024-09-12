import { useCallback, useEffect, useState } from 'react';
import { getTable1List } from '../services/plannners-table';
import { Table1Type } from '../models/PlannnersTable/table1-type';

export const useGetTable1List = () => {
  const [table1, setTable1] = useState<Table1Type[]>([]);

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

  return { requestPlannnersTableTable1: requestTable1, plannnersTableTable1: table1, setPlannnersTableTable1: setTable1 };
}
