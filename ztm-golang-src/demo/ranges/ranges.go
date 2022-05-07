package main

import "fmt"

func main() {
	slice := []string{"hi", "mom"}
	for i, v := range slice {
		fmt.Println(i, v)
		for _, r := range v {
			fmt.Printf("rune [q %q] [d %d]\n", r, r)
		}
	}
}
