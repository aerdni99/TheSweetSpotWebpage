/*
    supabase.js

    Connection file for our Supabase Database
*/

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.DB_URL,
    process.env.DB_KEY
);

export default supabase;
