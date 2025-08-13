import { redirect } from 'next/navigation'
import { getSupabaseServerClient } from '../../../../utils/supabase/server'

export default async function ClientDashboard() {
  const supabase = getSupabaseServerClient()
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user
  if (!user) {
    redirect('/login?next=/dashboard/client')
  }

  const { data: profileMaybe } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user!.id)
    .maybeSingle()

  const role = (profileMaybe?.role as 'client' | 'provider' | undefined) ?? (user!.user_metadata?.role as 'client' | 'provider' | undefined)
  if (role !== 'client') {
    redirect('/dashboard/provider')
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard do Cliente</h1>
      <p>Área protegida para usuários com role "client".</p>
    </div>
  )
}


