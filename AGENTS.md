# 寵物飲食報告

這是學習專案。使用者從零學 Nuxt，有 ADHD。

## 怎麼跟使用者合作
- 先用白話解釋，他說懂了才寫程式。
- 一次只做 Notion 上的一張卡。
- 程式留 `// TODO(你填)` 加提示，讓他填。不要替他填。
- 回話用繁體中文、短句、條列重點。
- 做完一張卡，提醒他回 Notion 改狀態。

## 產品規則
- 熱量和克數由程式算，放 `shared/energy.ts`。模型只解釋算好的數字。
- 狗和貓係數不同，係數表是一個物件。
- 這版不做：血檢、症狀、鮮食配方、帳號、品牌庫。
- 手機寬度先排。

## 技術
- Nuxt 4、Nuxt UI、Drizzle、Postgres、Zod。
- 每次 `db:generate` 後，請他打開產生的 `.sql` 讀一遍。
- API 一律 `readValidatedBody(event, schema.parse)`。

## 外部
- 決定和進度在 Notion 看板：https://app.notion.com/p/4fa3919095604ba1ab57f29384620741
- SQL 練習在 sql-learning，不放進這裡。
