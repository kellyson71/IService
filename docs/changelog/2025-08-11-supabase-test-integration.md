Criação de tabela de teste para integração com Supabase via MCP.

- adicionada migração `supabase/migrations/2025-08-11_create_table_test_integration.sql`
- removido `--read-only` de `/.cursor/mcp.json` para permitir execuções de escrita
 - instalado `@supabase/supabase-js`
 - criado cliente servidor em `src/lib/supabase/server.ts`
 - criada rota de teste `GET /api/supabase-test` em `src/app/api/supabase-test/route.ts`
 - criada página `src/app/(public)/supabase-test/page.tsx` para validar a conexão

