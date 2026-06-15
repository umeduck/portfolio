import type { PrivateData } from './profile'

// scripts/encrypt-private-data.mjs が出力する形式
interface EncryptedPayload {
  v: number
  salt: string
  iv: string
  data: string
}

const PBKDF2_ITERATIONS = 210_000

function base64ToBytes(b64: string): Uint8Array {
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0))
}

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const baseKey = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveKey'],
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: salt as BufferSource, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt'],
  )
}

/** パスワードで暗号化済みデータを復号する。パスワード不一致なら null を返す。 */
export async function fetchAndDecrypt(password: string): Promise<PrivateData | null> {
  const res = await fetch(`${import.meta.env.BASE_URL}private-data.enc.json`)
  if (!res.ok) throw new Error(`暗号化データの取得に失敗しました (${res.status})`)
  const payload = (await res.json()) as EncryptedPayload

  const key = await deriveKey(password, base64ToBytes(payload.salt))
  try {
    const plain = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: base64ToBytes(payload.iv) as BufferSource },
      key,
      base64ToBytes(payload.data) as BufferSource,
    )
    return JSON.parse(new TextDecoder().decode(plain)) as PrivateData
  } catch {
    return null
  }
}
