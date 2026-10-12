import 'dotenv/config' // 這個檔在 Nuxt 外面跑，所以要自己讀 .env
import { defineConfig } from 'drizzle-kit'

// 給 drizzle-kit 指令用的地圖，不是給網站跑的。
export default defineConfig({
  schema: './server/db/schema.ts', // 貨架圖在哪
  out: './server/db/migrations', // 施工單（.sql）放哪。以後每次 db:generate 都要打開讀
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL || '' // 倉庫在哪
  },
  strict: true,
  verbose: true
})
