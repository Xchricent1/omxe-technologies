CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  organization text CHECK (organization IS NULL OR char_length(organization) <= 150),
  service text NOT NULL CHECK (char_length(service) <= 100),
  description text NOT NULL CHECK (char_length(description) BETWEEN 10 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an inquiry" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);