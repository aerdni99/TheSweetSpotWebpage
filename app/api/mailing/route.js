/*
    mailing/route.js

    api route for adding emails to our database
*/


import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
    }

    try {
        const { data, error } = await supabase
            .from('Mailing List')
            .insert([{ email }]);

            if (error) throw error;

            return res.status(200).json({ success: true, data });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to add email' });
    }
}

