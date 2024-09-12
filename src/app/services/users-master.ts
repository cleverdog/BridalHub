import { FetchApi } from './fetch-api';
import { Table1TypeUsersMaster } from '../models/UsersMaster/table1-type-users-master';

export async function getTable1List(): Promise<Table1TypeUsersMaster[]> {
  return await FetchApi.fetchApiResponse<Table1TypeUsersMaster[]>('https://excel2json.io/api/share/76473de8-cc25-40a3-ebe9-08dcd16d1347', []);
}
