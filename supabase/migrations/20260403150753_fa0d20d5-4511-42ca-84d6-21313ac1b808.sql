
CREATE TABLE public.leads_clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT,
  help TEXT,
  "when" TEXT,
  budget TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.leads_workers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT,
  skills TEXT,
  availability TEXT,
  pay TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leads_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads_workers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert client leads" ON public.leads_clients FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert worker leads" ON public.leads_workers FOR INSERT WITH CHECK (true);
