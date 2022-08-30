/* eslint-disable prettier/prettier */
import { createClient } from '@supabase/supabase-js'

const url = 'https://rlxkutozjmuvqovkpjdu.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJseGt1dG96am11dnFvdmtwamR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4MjA4MTcsImV4cCI6MTk3NzM5NjgxN30.rhHEV82Zy6NfTB38cn2QE05zGWz8zsv0PsLPKqWau44'

export const supabase = createClient(url, key)
