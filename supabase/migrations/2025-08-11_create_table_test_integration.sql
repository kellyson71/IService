create table if not exists public.test_integration (
  id bigserial primary key,
  name text not null,
  note text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

