// Meta information for FlowZH games
import type { GameCardData } from '@/types'

export const gameMetaInfoList: GameCardData[] = [
  {
    // imgPath // Comment out for now, don't have an img yet, use default
    viewName: 'PinyinTyperGame',
    name: 'Pinyin Typer',
    description: 'Practise your Pinyin recognitions skills.',
    categories: ['Pinyin', 'Typing'],
  },

  // Empty games, make the site look a bit fuller for now
  { viewName: 'PageNotFoundPage' },
  { viewName: 'PageNotFoundPage' },
  { viewName: 'PageNotFoundPage' },
]
