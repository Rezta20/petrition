<script setup lang="ts">
// 階段 0 的首頁，只是確認頁面和 API 都跑得起來。階段 1 會換成「選狗或貓」。
const { data: health } = await useFetch('/api/health')
</script>

<template>
  <UContainer class="max-w-md py-8">
    <h1 class="text-2xl font-bold">
      寵物飲食報告
    </h1>
    <p class="mt-1 text-sm text-muted">
      階段 0：專案骨架
    </p>

    <UCard class="mt-6">
      <p>資料庫：{{ health?.db ?? '還沒回' }}</p>
      <p>select 1：{{ health?.selectOne ?? '—' }}</p>
      <p>時間：{{ health?.time ?? '還沒填（看 server/api/health.get.ts 的 TODO）' }}</p>
    </UCard>

    <UButton
      to="/api/health"
      external
      variant="link"
      class="mt-4 px-0"
    >
      看 /api/health 原始回傳
    </UButton>
  </UContainer>
</template>
