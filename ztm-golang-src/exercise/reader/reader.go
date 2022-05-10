//--Summary:
//  Create an interactive command line application that supports arbitrary
//  commands. When the user enters a command, the program will respond
//  with a message. The program should keep track of how many commands
//  have been ran, and how many lines of text was entered by the user.
//
//--Requirements:
//* When the user enters either "hello" or "bye", the program
//  should respond with a message after pressing the enter key.
//* Whenever the user types a "Q" or "q", the program should exit.
//* Upon program exit, some usage statistics should be printed
//  ('Q' and 'q' do not count towards these statistics):
//  - The number of non-blank lines entered
//  - The number of commands entered
//
//--Notes
//* Use any Reader implementation from the stdlib to implement the program

package main

import (
	"bufio"
	"fmt"
	"io"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	// scanner := bufio.NewScanner(os.Stdin)
	// for scanner.Scan() {
	// 	fmt.Println(scanner.Text())
	// }

	fmt.Println(">")
	responseMap := map[string]string{"hello": "how are you?", "bye": "see you~"}
	commandCount := 0
	lineCount := 0
	for {
		text, inputErr := reader.ReadString('\n')
		text = strings.ToLower(strings.TrimSpace(text))
		if text == "" {
			continue
		}
		if inputErr == io.EOF || text == "q" {
			break
		}
		if res, ok := responseMap[text]; ok {
			fmt.Println(res)
			commandCount++
		}
		lineCount++
	}
	fmt.Printf("The number of non-blank lines entered: %d\nThe number of commands entered: %d\n", commandCount, lineCount)
}
