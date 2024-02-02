export const rarityColor = (rarity: string) => {
  switch (rarity) {
    case '언커먼':
      return 'text-neutral-400'
    case '커먼':
      return 'text-teal-400'
    case '레어':
      return 'text-purple-400'
    case '유니크':
      return 'text-pink-400'
    case '레전더리':
      return 'text-orange-400'
    case '에픽':
      return 'text-yellow-400'
    default:
      return ''
  }
}

// 적용이 안되는 이유 찾아야함..
