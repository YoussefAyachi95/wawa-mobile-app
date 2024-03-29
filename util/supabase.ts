import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL; 
const supabaseKey = process.env.EXPO_PUBLIC_API_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;