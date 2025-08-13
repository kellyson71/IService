## 2025-08-13 – Corrige erro de hidratação do React

- Atualizado `src/components/landing/grid-pattern.tsx` para usar `React.useId()` em vez de `Math.random()` na geração do `id` do padrão SVG, garantindo consistência entre SSR e CSR.
- Ajustado `src/app/layout.tsx` para adicionar `suppressHydrationWarning` na tag `html`, reduzindo avisos de hidratação gerados por diferenças externas (ex.: extensões do navegador).

## 2025-08-13 – Responsividade básica

- Adicionado `viewport` responsivo em `src/app/layout.tsx`.
- Adicionadas regras globais para mídias fluidas (`img`, `video`, `canvas`, `svg`, `iframe`) em `src/app/globals.css`.

Criação de tabela de teste para integração com Supabase via MCP.

- adicionada migração `supabase/migrations/2025-08-11_create_table_test_integration.sql`
- removido `--read-only` de `/.cursor/mcp.json` para permitir execuções de escrita
 - instalado `@supabase/supabase-js`
 - criado cliente servidor em `src/lib/supabase/server.ts`
 - criada rota de teste `GET /api/supabase-test` em `src/app/api/supabase-test/route.ts`
 - criada página `src/app/(public)/supabase-test/page.tsx` para validar a conexão

