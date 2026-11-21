import { createClient } from '@supabase/supabase-js';
import { auth } from './firebase';

const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY;

export const supabaseConfigError = !supabaseUrl || !supabasePublishableKey
  ? 'Supabase Storage is not configured. Set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_PUBLISHABLE_KEY.'
  : '';

export const supabase = supabaseConfigError
  ? null
  : createClient(supabaseUrl, supabasePublishableKey, {
    accessToken: async () => (await auth?.currentUser?.getIdToken()) ?? null,
  });

export const supabaseStorageBucket = 'textifybucket';
