// 係數：常見值，待獸醫確認（10/15）
export const FACTORS = {
    dog: { neutered: 1.6, intact: 1.8 },
    cat: { neutered: 1.2, intact: 1.4 },
  }
  
  export function rer(weightKg: number) {
    return 70 * weightKg ** 0.75
  }
  
  export function dailyKcal(
    species: 'dog' | 'cat',
    weightKg: number,
    neutered: boolean,
  ) {
    const key = neutered ? 'neutered' : 'intact'
    const factor = FACTORS[species as keyof typeof FACTORS][key as keyof typeof FACTORS[typeof species]]
    return rer(weightKg) * factor
  }