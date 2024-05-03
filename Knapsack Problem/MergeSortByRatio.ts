/**
 * Input: Array[ {..., ration: number}, {..., ration: number} ]
 * Output Sorted Array
 * Process: MergeSort
*/

import { Item } from "./Knapsack"

export default function MergeSort(items: Item[]): Item[] {
  if (items.length === 1) return items

  const midpoint: number = Math.floor(items.length / 2)
  const left: Item[] = items.slice(0, midpoint)
  const right: Item[] = items.slice(midpoint)

  return merge(MergeSort(left), MergeSort(right))
}

const merge = (left: Item[], right: Item[]) : Item[] => {
  

  let items: Item[] = []

  while (left.length && right.length) {
    if (left[0].ratio >= right[0].ratio) {
      items.push(left.shift()!)

    } else {
      items.push(right.shift()!)

    }
  }
  return [...items, ...left, ...right]
}