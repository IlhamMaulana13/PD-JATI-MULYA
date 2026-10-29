// app/api/auth/login/route.ts
import { NextResponse } from 'next/server'
import { validateAdminCredentials, DUMMY_ADMIN } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username dan password wajib diisi!' },
        { status: 400 }
      )
    }

    const isValid = validateAdminCredentials(username, password)

    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Username atau Password salah!' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Login berhasil!',
      user: {
        username: DUMMY_ADMIN.username,
        name: DUMMY_ADMIN.name,
        role: DUMMY_ADMIN.role,
      },
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan sistem.' },
      { status: 500 }
    )
  }
}
