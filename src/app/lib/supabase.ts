import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://dlhhexwdemtfxojmivhv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsaGhleHdkZW10Znhvam1pdmh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNTg3MTEsImV4cCI6MjA1NjgzNDcxMX0.kVi51Ro0NxAXA9AHLm-zd_wpDrfb2Bhwazc_uvaCjfw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
