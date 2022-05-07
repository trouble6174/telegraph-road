package main

import "fmt"

func sum(nums ...int) int {
	res := 0
	for _, v := range nums {
		res += v
	}
	return res
}

func main() {
	fmt.Println(sum(1, 5, 5, 8))
	a := []int{1, 2, 4}
	b := []int{6, 7}
	all := append(a, b...)
	fmt.Println(sum(all...))
}
