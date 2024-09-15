import { createClient } from '@supabase/supabase-js'
import { Table1Type } from '../models/PlannnersTable/table1-type';

export async function getTable1List(): Promise<Table1Type[]> {

  const supabaseUrl = 'https://byvjmjafiuologmqohmw.supabase.co';
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dmptamFmaXVvbG9nbXFvaG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzQwMjUsImV4cCI6MjAyNDg1MDAyNX0.U7bpSNirGUETw4qS0o6gd2gHS4tnRS6hiqMQPSpqpw8';

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const { data } = await supabase
    .from('planners')
    .select('*')
    .eq('customer_id', 1);

    return data as Table1Type[];

}
