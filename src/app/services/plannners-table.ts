import { FetchApi } from './fetch-api';
import { Table1Type } from '../models/PlannnersTable/table1-type';

export async function getTable1List(): Promise<Table1Type[]> {
  return await FetchApi.fetchApiResponse<Table1Type[]>('https://excel2json.io/api/share/ba9e054c-e8a4-4eca-ebea-08dcd16d1347', []);
}
