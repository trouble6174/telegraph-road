package main

import "fmt"

func main() {
	sl := make(map[string]int)
	sl["egg"] = 180
	sl["cat food"] = 8
	sl["bread"] = 6
	sl["egg"] += 30
	fmt.Println(len(sl))
	fmt.Printf("sl: %+v\n", sl)
	delete(sl, "not exists")
	fmt.Println(sl)
	delete(sl, "bread")
	fmt.Println(sl)
	if egg, found := sl["egg"]; found {
		fmt.Println("found egg", egg)
	}
	fmt.Println()
	for k, v := range sl {
		fmt.Println(k, v)
	}
}
