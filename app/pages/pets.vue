<script setup lang="ts">
import { petSchema, type PetInput } from '#shared/pet'

const form = reactive<Omit<PetInput, 'ageMonths'>>({
  species: 'dog', name: '', weightKg: 0, neutered: true, activity: 'normal',
})
const years = ref(1)
const months = ref(0)
const errorMsg = ref('')
const { data: list, refresh } = await useFetch('/api/pets')

async function save() {
  errorMsg.value = ''
  
  const ageMonths = years.value * 12 + months.value
  const body = { ...form, ageMonths }

  // 先在前端檢查，不過就顯示第一條中文訊息，不送出
  const result = petSchema.safeParse(body)
  if (!result.success) {
    errorMsg.value = result.error.issues[0]?.message ?? '資料有誤'
    return
  }

  try {
    await $fetch('/api/pets', { method: 'POST', body: result.data })
    await refresh()
  } catch {
    errorMsg.value = '存檔失敗，請再試一次'
  }
}
</script>

<template>
  <div class="p-4 max-w-md mx-auto space-y-4">
    <h1 class="text-xl font-bold">寵物資料</h1>

    <UFormField label="物種">
      <USelect v-model="form.species" :items="[{ label: '狗', value: 'dog' }, { label: '貓', value: 'cat' }]" class="w-full" />
    </UFormField>

    <UFormField label="名字">
      <UInput v-model="form.name" placeholder="例如：麻糬" class="w-full" />
    </UFormField>

    <UFormField label="體重（公斤）" help="例如 4.5">
      <UInput v-model.number="form.weightKg" type="number" step="0.1" min="0.1" class="w-full" />
    </UFormField>

    <UFormField label="年齡">
      <div class="flex gap-2 items-center">
        <UInput v-model.number="years" type="number" min="0" class="w-20" /> 歲
        <UInput v-model.number="months" type="number" min="0" max="11" class="w-20" /> 個月
      </div>
    </UFormField>

    <UFormField label="結紮">
      <UCheckbox v-model="form.neutered" label="已結紮" />
    </UFormField>

    <UFormField label="活動量">
      <USelect v-model="form.activity" :items="[{ label: '低（多半在睡）', value: 'low' }, { label: '普通', value: 'normal' }, { label: '高（每天跑很多）', value: 'high' }]" class="w-full" />
    </UFormField>

    <UButton block @click="save">存檔</UButton>
    <p v-if="errorMsg" class="text-red-500 text-sm">{{ errorMsg }}</p>

    <ul class="pt-4 space-y-1">
      <li v-for="p in list" :key="p.id">
        {{ p.name }}（{{ p.species === 'dog' ? '狗' : '貓' }}）{{ p.weightKg }} kg，{{ Math.floor(p.ageMonths / 12) }} 歲 {{ p.ageMonths % 12 }} 個月
      </li>
    </ul>
  </div>
</template>