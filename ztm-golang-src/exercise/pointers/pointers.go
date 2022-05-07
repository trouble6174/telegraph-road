//--Summary:
//  Create a program that can activate and deactivate security tags
//  on products.
//
//--Requirements:
//* Create a structure to store items and their security tag state
//  - Security tags have two states: active (true) and inactive (false)
//* Create functions to activate and deactivate security tags using pointers
//* Create a checkout() function which can deactivate all tags in a slice
//* Perform the following:
//  - Create at least 4 items, all with active security tags
//  - Store them in a slice or array
//  - Deactivate any one security tag in the array/slice
//  - Call the checkout() function to deactivate all tags
//  - Print out the array/slice after each change

package main

import "fmt"

const (
	ACTIVE   = true
	INACTIVE = false
)

type SecurityTag bool

type Item struct {
	tag  SecurityTag
	name string
}

func active(item *Item) {
	(*item).tag = ACTIVE
}

func factive(item Item) {
	fmt.Printf("F %p\n", &item)
	item.tag = ACTIVE
}

func deactive(item *Item) {
	(*item).tag = INACTIVE
}

func checkout(items []Item) {
	for i := range items {
		deactive(&items[i])
	}
}

func main() {
	items := []Item{{name: "A"}, {name: "B"}, {name: "C"}, {name: "D"}}
	fmt.Println(items)
	for i := range items {
		fmt.Printf("A %p\n", &items[i])
		// active(&items[i])
		factive(items[i])
	}
	deactive(&items[2])
	fmt.Println(items)
	checkout(items)
	fmt.Println(items)
}
