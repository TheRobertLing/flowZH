export interface GameCardData {
  imgPath?: string
  viewName?: string
  name?: string
  description?: string
  categories?: string[]
}

// v1 for the game, change later
export interface GameSettingsV1 {
  count: 10 | 20 | 50,
  tones: 'On' | 'Off',
  preset: 1 | 2 | 3
}

// Obtained from the backend, refactor later
export interface Character {
  simplified: string
  pinyin: string
}
