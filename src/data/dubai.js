import { ref } from 'vue'

/* UAE / Dubai localization constants */
export const CURRENCY = 'AED'
export const DIAL_CODE = '+971'
export const PHONE_MASK = '+971 XX XXX XXXX'

/* Core Dubai shipping zones (reactive) */
export const zones = ref([
  'Dubai Marina',
  'Downtown Dubai',
  'Palm Jumeirah',
  'JBR',
  'Business Bay',
  'JVC',
  'Dubai Hills Estate',
  'Al Barsha',
  'Sheikh Zayed Road',
])

export const categories = ['Shisha', 'Flavours', 'Coals', 'Accessories']

export const flavours = ['Double Apple', 'Mint Ice', 'Blueberry', 'Grape Mint', 'Love 66']
