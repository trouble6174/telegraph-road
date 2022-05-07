//--Summary:
//  Create a program to manage lending of library books.
//
//--Requirements:
//* The library must have books and members, and must include:
//  - Which books have been checked out
//  - What time the books were checked out
//  - What time the books were returned
//* Perform the following:
//  - Add at least 4 books and at least 3 members to the library
//  - Check out a book
//  - Check in a book
//  - Print out initial library information, and after each change
//* There must only ever be one copy of the library in memory at any time
//
//--Notes:
//* Use the `time` package from the standard library for check in/out times
//* Liberal use of type aliases, structs, and maps will help organize this project

package main

import (
	"fmt"
	"time"
)

type LendAudit struct {
	checkedOut time.Time
	checkedIn  time.Time
}

type Member struct {
	name  string
	books map[string]LendAudit
}

type Book struct {
	name   string
	total  int
	lended int
}

type Library struct {
	books   map[string]Book
	members map[string]Member
}

func showLibraryInfo(library *Library) {
	fmt.Printf("%+v\n", *library)
}

func main() {
	fujino := Member{name: "Ayumu Fujino", books: make(map[string]LendAudit)}
	kyomoto := Member{name: "Kyomoto", books: make(map[string]LendAudit)}
	fujimoto := Member{name: "Tatsuki Fujimoto", books: make(map[string]LendAudit)}
	library := Library{members: map[string]Member{fujino.name: fujino, kyomoto.name: kyomoto, fujimoto.name: fujimoto},
		books: make(map[string]Book)}
	for i := 1; i < 11; i++ {
		book := Book{name: fmt.Sprintf("Chainsaw Man vol.%d", i)}
		library.books[book.name] = book
	}
	showLibraryInfo(&library)
}
