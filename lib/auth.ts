// lib/auth.ts
// Modul otentikasi sederhana untuk purwarupa riset PD Jati Mulya

export const DUMMY_ADMIN = {
  username: 'admin',
  password: 'admin123',
  name: 'Administrator Toko',
  role: 'Super Admin',
} as const

export const AUTH_STORAGE_KEY = 'pd_jati_mulya_admin_auth'

export interface AuthSession {
  username: string
  name: string
  role: string
  loginTime: string
}

/**
 * Validasi kredensial login (hardcoded untuk tahap purwarupa)
 */
export function validateAdminCredentials(username: string, password: string): boolean {
  return (
    username.trim() === DUMMY_ADMIN.username &&
    password.trim() === DUMMY_ADMIN.password
  )
}

/**
 * Simpan sesi login ke browser storage (sessionStorage)
 */
export function setAdminSession(): AuthSession {
  const session: AuthSession = {
    username: DUMMY_ADMIN.username,
    name: DUMMY_ADMIN.name,
    role: DUMMY_ADMIN.role,
    loginTime: new Date().toISOString(),
  }
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session))
    // Simpan juga di cookie sederhana agar kompatibel jika dibutuhkan middleware
    document.cookie = `pd_admin_logged=true; path=/; max-age=86400; SameSite=Lax`
  }
  return session
}

/**
 * Periksa apakah admin sedang login
 */
export function getAdminSession(): AuthSession | null {
  if (typeof window === 'undefined') return null
  const stored = sessionStorage.getItem(AUTH_STORAGE_KEY)
  if (!stored) return null
  try {
    return JSON.parse(stored) as AuthSession
  } catch {
    return null
  }
}

/**
 * Hapus sesi login (Logout)
 */
export function clearAdminSession(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(AUTH_STORAGE_KEY)
    document.cookie = 'pd_admin_logged=; path=/; max-age=0'
  }
}
