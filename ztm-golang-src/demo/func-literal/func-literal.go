package main

import "fmt"

func add(a, b int) int {
	return a + b
}

func compute(a, b int, op func(a, b int) int) int {
	return op(a, b)
}

func main() {
	fmt.Println(compute(1, 2, add))

	mul := func(a, b int) int {
		return a * b
	}

	fmt.Println(compute(1, 2, mul))
}
