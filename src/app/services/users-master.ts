import { Table1TypeUsersMaster } from '../models/UsersMaster/table1-type-users-master';
import { createClient } from '@supabase/supabase-js'

export async function getTable1List(): Promise<Table1TypeUsersMaster[]> {

const supabaseUrl = 'https://byvjmjafiuologmqohmw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmptamFmaXVvbG9nbXFvaG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzQwMjUsImV4cCI6MjAyNDg1MDAyNX0.U7bpSNirGUETw4qS0o6gd2gHS4tnRS6hiqMQPSpqpw8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const { data } = await supabase
  .from('users')
  .select('*')
  .eq('customer_id', 1);

//console.log(data);

  // const url = 'https://byvjmjafiuologmqohmw.supabase.co/rest/v1/users';
  // const headers = {
  //   'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmptamFmaXVvbG9nbXFvaG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzQwMjUsImV4cCI6MjAyNDg1MDAyNX0.U7bpSNirGUETw4qS0o6gd2gHS4tnRS6hiqMQPSpqpw8',
  //   'Content-Type': 'application/json'
  // };

  // return await FetchApi.fetchApiResponse<Table1TypeUsersMaster[]>(url, [], 'GET', undefined, headers);

  return data as Table1TypeUsersMaster[];
}
