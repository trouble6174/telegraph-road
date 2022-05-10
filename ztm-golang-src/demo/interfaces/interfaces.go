package main

import "fmt"

type Preparer interface {
	PrepareDish()
}

type Chicken string
type Salad string

func (p Chicken) PrepareDish() {
	fmt.Println("prepare", p)
	fmt.Println("chicken step 1")
	fmt.Println("chicken step 2")
}

func (p Salad) PrepareDish() {
	fmt.Println("prepare", p)
	fmt.Println("salad step 1")
	fmt.Println("salad step 2")
	fmt.Println("salad step 3")
}

func prepareDishes(dishes []Preparer) {
	for _, dish := range dishes {
		dish.PrepareDish()
	}
}

func main() {
	Run()
	prepareDishes([]Preparer{Chicken("ck1"), Salad("sl1")})
}
