package main

import "fmt"

func greet() {
	fmt.Println("greeting")
}

func double(n int) int {
	return n * 2
}

func add(n1, n2 int) int {
	return n1 + n2
}

func main() {
	greet()
	dozen := double(6)
	bakersDozen := add(dozen, 1)
	anotherBakersDozen := add(double(6), 1)
	fmt.Println(bakersDozen, anotherBakersDozen)
}
