package main

import "fmt"

type Counter struct{ hits int }

func incr(counter *Counter) {
	// because counter is a struct, so we don't need *counter to derefrence
	counter.hits += 1
	fmt.Println("Counter", counter)
}

func replace(old *string, new string, counter *Counter) {
	*old = new
	incr(counter)
}

func main() {
	c := Counter{}
	incr(&c)
	s1 := "aaa"
	s2 := "AAA"
	replace(&s1, "bbb", &c)

	phrase := []string{s1, s2}
	fmt.Println(phrase)
	replace(&phrase[1], "XXX", &c)
	fmt.Println(phrase)

}
