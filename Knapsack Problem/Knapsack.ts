export class Item {
  public name: string
  public value: number
  public weight: number
  public ratio: number
  constructor(value: number, weight: number, name: string) {
    this.value = value
    this.weight = weight
    this.name = name
    this.ratio = this.value / this.weight
  }
}

export default class Knapsack {
  public currentCapacity: number
  public maxCapacity: number
  public totalValue: number
  public item: Item[]

  constructor(maxCapacity: number) {
    this.maxCapacity = maxCapacity
    this.currentCapacity = 0
    this.totalValue = 0
    this.item = []
  }

  addItem(newItem: Item): void {
    if (newItem.weight > this.maxCapacity - this.currentCapacity) {

      newItem.weight = this.maxCapacity - this.currentCapacity
      newItem.value = newItem.ratio * newItem.weight

    }
    this.item.push(newItem)
    this.currentCapacity += newItem.weight
    this.totalValue += newItem.value
  }
}

/*
** index.ts
-------------
import Knapsack, { Item } from "./Knapsack Problem/Knapsack"
import MergeSort from "./Knapsack Problem/MergeSortByRatio"

const value: number[] = [4, 9, 12, 11, 6, 5]
const weight: number[] = [1, 2, 10, 4, 3, 5]
let items: Item[] = []

for (let i = 0; i < value.length; i++) {
  const newItem: Item = new Item(value[i], weight[i], `#${i}`)
  items.push(newItem)
}
items = MergeSort(items)

const bag: Knapsack = new Knapsack(12)
let j = 0
while (bag.maxCapacity > bag.currentCapacity) {
  bag.addItem(items[j])
  j++
}
console.log(bag);
 */