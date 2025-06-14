import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKEY = process.env.SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKEY);