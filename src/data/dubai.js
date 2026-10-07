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

/* Featured catalogue — prices strictly in AED */
export const products = ref([
  {
    id: 'sig-01',
    name: 'Signature Chrome Hookah',
    tag: 'Signature',
    price: 249,
    rating: 4.9,
    img: '/media/product-hookah.webp',
    exclusive: true,
  },
  {
    id: 'flv-02',
    name: 'Flavour Collection · 5 Pack',
    tag: 'Flavours',
    price: 129,
    rating: 4.8,
    img: '/media/product-flavours.webp',
  },
  {
    id: 'col-03',
    name: 'Natural Coconut Coals · 1kg',
    tag: 'Coals',
    price: 59,
    rating: 4.7,
    img: '/media/product-coals.webp',
  },
])
