/* eslint-disable prettier/prettier */
import { createClient } from '@supabase/supabase-js'

const url = 'https://ejtmiprzuackwxtjcfij.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdG1pcHJ6dWFja3d4dGpjZmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3OTI4ODMsImV4cCI6MTk3NzM2ODg4M30.Zi-W3u2V1l_Aso3uWKnjNyoAa899ZebRe4U-bJqBIUs'

export const supabase = createClient(url, key)
