// private-data.json をパスワードで暗号化して public/private-data.enc.json に出力する。
// 使い方: node scripts/encrypt-private-data.mjs <パスワード>
// パスワードを変えたいときは、新しいパスワードでこのスクリプトを再実行して
// 出力ファイルをコミット・デプロイし直すだけでよい。
import { pbkdf2Sync, randomBytes, createCipheriv } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const PBKDF2_ITERATIONS = 210_000 // src/data/privateCrypto.ts と一致させること

const password = process.argv[2]
if (!password) {
  console.error('使い方: node scripts/encrypt-private-data.mjs <パスワード>')
  process.exit(1)
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const plaintext = readFileSync(join(root, 'private-data.json'), 'utf8')
JSON.parse(plaintext) // JSONとして壊れていないか事前チェック

const salt = randomBytes(16)
const iv = randomBytes(12)
const key = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 32, 'sha256')

const cipher = createCipheriv('aes-256-gcm', key, iv)
const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()])
// WebCrypto の AES-GCM は「暗号文 + 認証タグ」を連結した形式を期待する
const data = Buffer.concat([encrypted, cipher.getAuthTag()])

const payload = {
  v: 1,
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  data: data.toString('base64'),
}

const outPath = join(root, 'public', 'private-data.enc.json')
writeFileSync(outPath, JSON.stringify(payload) + '\n')
console.log(`書き出しました: ${outPath}`)
