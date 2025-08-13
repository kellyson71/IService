import { NextRequest, NextResponse } from 'next/server'

type Body = {
  role: 'client' | 'provider'
  display_name?: string | null
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<Body>
    if (!body.role) {
      return NextResponse.json({ ok: false, error: 'Role é obrigatório' }, { status: 400 })
    }

    const mockUser = {
      id: 'mock-' + body.role,
      email: `${body.role}@mock.local`,
      display_name: body.display_name ?? (body.role === 'client' ? 'Cliente Demo' : 'Prestador Demo'),
      role: body.role,
    }

    const res = NextResponse.json({ ok: true, user: mockUser })
    res.cookies.set('mock_auth', JSON.stringify(mockUser), {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    })
    return res
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}


