import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// 整個伺服器只開一次連線，開過就留著重複用。
let _db: ReturnType<typeof drizzle<typeof schema>> | null = null

// 「給我資料庫」。第一次呼叫才真的連，之後都拿同一條。
export function useDb() {
  if (_db) return _db
  // 連線字串從 nuxt.config.ts 的 runtimeConfig.databaseUrl 來；.env 裡叫 NUXT_DATABASE_URL
  const url = useRuntimeConfig().databaseUrl
  if (!url) {
    throw createError({ statusCode: 500, statusMessage: 'NUXT_DATABASE_URL 沒設定，看 .env.example' })
  }
  // prepare: false 是給 Supabase pooler 用的。本機 Docker 不需要，但留著以後部署不用改。
  const client = postgres(url, { prepare: false, max: 5, idle_timeout: 20 })
  _db = drizzle(client, { schema })
  return _db
}

export { schema }
export type Db = ReturnType<typeof useDb>
