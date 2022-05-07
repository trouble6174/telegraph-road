//--Summary:
//  Create a program that can store a shopping list and print
//  out information about the list.
//
//--Requirements:
//* Using an array, create a shopping list with enough room
//  for 4 products
//  - Products must include the price and the name
//* Insert 3 products into the array
//* Print to the terminal:
//  - The last item on the list
//  - The total number of items
//  - The total cost of the items
//* Add a fourth product to the list and print out the
//  information again

package main

import "fmt"

type Product struct {
	price int
	name  string
}

func main() {
	shoppingList := [4]Product{}
	shoppingList[0] = Product{name: "itemA", price: 10}
	shoppingList[1] = Product{name: "itemB", price: 20}
	shoppingList[2] = Product{name: "itemC", price: 30}
	var itemNum, totalCost int
	for i := 0; i < len(shoppingList); i++ {
		item := shoppingList[i]
		if item.name == "" {
			continue
		}
		totalCost += item.price
		itemNum += 1
	}
	fmt.Println("last item", shoppingList[itemNum-1])
	fmt.Println("total cost", totalCost)
	fmt.Println("total num", itemNum)

}
