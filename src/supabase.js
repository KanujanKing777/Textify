import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabasePublishableKey = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;

export const supabaseConfigError = !supabaseUrl || !supabasePublishableKey
  ? 'Supabase Storage is not configured. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_PUBLISHABLE_KEY.'
  : '';

export const supabase = supabaseConfigError
  ? null
  : createClient(supabaseUrl, supabasePublishableKey);

export const supabaseStorageBucket = 'textifybucket';
