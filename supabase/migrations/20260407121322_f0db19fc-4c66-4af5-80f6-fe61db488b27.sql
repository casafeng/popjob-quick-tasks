CREATE POLICY "Deny direct client lead reads" ON public.leads_clients FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "Deny direct client lead creation" ON public.leads_clients FOR INSERT TO anon, authenticated WITH CHECK (false);
CREATE POLICY "Deny direct client lead updates" ON public.leads_clients FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "Deny direct client lead deletion" ON public.leads_clients FOR DELETE TO anon, authenticated USING (false);

CREATE POLICY "Deny direct worker lead reads" ON public.leads_workers FOR SELECT TO anon, authenticated USING (false);
CREATE POLICY "Deny direct worker lead creation" ON public.leads_workers FOR INSERT TO anon, authenticated WITH CHECK (false);
CREATE POLICY "Deny direct worker lead updates" ON public.leads_workers FOR UPDATE TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "Deny direct worker lead deletion" ON public.leads_workers FOR DELETE TO anon, authenticated USING (false);