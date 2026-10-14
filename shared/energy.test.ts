// shared/energy.test.ts
import { test, expect } from 'vitest'
import { dailyKcal } from './energy'

test('10kg 結紮的狗', () => {
  const kcal =dailyKcal('dog', 10,true)
  expect(kcal).toBeCloseTo(629.82, 1)
})