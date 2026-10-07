import { ref } from 'vue'

/* Shared reactive shopping bag counter */
export const bagCount = ref(2)

export function addToBag() {
  bagCount.value += 1
}

export function removeFromBag() {
  bagCount.value = Math.max(0, bagCount.value - 1)
}
