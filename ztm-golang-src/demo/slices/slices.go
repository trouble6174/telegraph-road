package main

import "fmt"

func printSlice(title string, slice []string) {
	fmt.Println("\n---", title, "---")
	for i := 0; i < len(slice); i++ {
		ele := slice[i]
		fmt.Println(ele)
	}
}

func main() {
	route := []string{"Grocery", "Department Store", "Salon"}
	printSlice("Route 1", route)
	route = append(route, "Home")
	printSlice("Route 2", route)

	fmt.Printf("\n[2:]%+v", route[2:])
}
