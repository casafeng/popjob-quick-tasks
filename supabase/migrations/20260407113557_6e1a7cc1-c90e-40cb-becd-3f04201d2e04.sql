-- Remove public INSERT policies (submissions now go through edge function with service role)
DROP POLICY IF EXISTS "Anyone can insert client leads" ON public.leads_clients;
DROP POLICY IF EXISTS "Anyone can insert worker leads" ON public.leads_workers;