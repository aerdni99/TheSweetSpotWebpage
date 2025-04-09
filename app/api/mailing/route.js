/*
    mailing/route.js

    api route for adding emails to our database
*/


import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
    const { email } = await req.json();

    if (!email) {
        return new Response(JSON.stringify({ error: 'Email is required.' }), {
            status: 400,
        });
    }

    try {
        const { data, error } = await supabase
            .from('Mailing List')
            .insert([{ email }]);

        if (error) throw error;

        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message || 'Failed to add email' }), {
            status: 500,
        });
    }
}
