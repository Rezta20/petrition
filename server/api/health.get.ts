import { sql } from 'drizzle-orm'
import { useDb } from '../db'

// GET /api/health：回資料庫 select 1 的結果，和現在時間。
export default defineEventHandler(async () => {
  let db: 'ok' | 'error' = 'ok'
  let selectOne: unknown = null
  try {
    const rows = await useDb().execute(sql`select 1 as one`)
    selectOne = rows[0] // 連得上會是 { one: 1 }
  } catch {
    db = 'error' // 連不上就標 error，不要整個炸掉
  }
  return {
    ok: db === 'ok',
    db,
    selectOne,
    // TODO(你填)：把 null 換成現在時間的 ISO 字串。
    // 提示：jlpt-trainer 的 server/api/health.get.ts 最後一行有一樣的東西。
    time: null
  }
})
