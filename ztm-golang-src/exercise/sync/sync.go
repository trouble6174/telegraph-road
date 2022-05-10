//--Summary:
//  Create a program that can read text from standard input and count the
//  number of letters present in the input.
//
//--Requirements:
//* Count the total number of letters in any chosen input
//* The input must be supplied from standard input
//* Input analysis must occur per-word, and each word must be analyzed
//  within a goroutine
//* When the program finishes, display the total number of letters counted
//
//--Notes:
//* Use CTRL+D (Mac/Linux) or CTRL+Z (Windows) to signal EOF, if manually
//  entering data
//* Use `cat FILE | go run ./exercise/sync` to analyze a file
//* Use any synchronization techniques to implement the program:
//  - Channels / mutexes / wait groups

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"sync"
	"unicode"
)

type Count struct {
	count int
	sync.Mutex
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	counter := Count{}
	var wg sync.WaitGroup
	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			continue
		}
		words := strings.Split(line, " ")
		for _, w := range words {
			wg.Add(1)
			go func(word string, wg *sync.WaitGroup) {
				counter.Lock()
				defer counter.Unlock()
				defer wg.Done()
				lc := 0
				for _, r := range word {
					if unicode.IsLetter(r) {
						lc += 1
					}
				}
				counter.count += lc
			}(w, &wg)
		}
	}
	fmt.Println("waiting goroutine")
	wg.Wait()
	counter.Lock()
	c := counter.count
	counter.Unlock()
	fmt.Println("char count", c)
}
