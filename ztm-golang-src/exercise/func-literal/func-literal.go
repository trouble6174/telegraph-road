//--Summary:
//  Create a program that can create a report of rune information from
//  lines of text.
//
//--Requirements:
//* Create a single function to iterate over each line of text that is
//  provided in main().
//  - The function must return nothing and must execute a closure
//* Using closures, determine the following information about the text and
//  print a report to the terminal:
//  - Number of letters
//  - Number of digits
//  - Number of spaces
//  - Number of punctuation marks
//
//--Notes:
//* The `unicode` stdlib package provides functionality for rune classification

package main

import (
	"fmt"
	"unicode"
)

type Mark int

const (
	LETTER Mark = iota
	Digit
	Space
	PunctuationMark
)

func (m Mark) String() string {
	switch m {
	case LETTER:
		return "Letter"
	case Digit:
		return "Digit"
	case Space:
		return "Space"
	case PunctuationMark:
		return "Punctuation Mark"
	default:
		return "Unknown"
	}
}

func compute(ss []string, res *map[Mark]int, counter func(s string, res *map[Mark]int)) {
	for _, s := range ss {
		counter(s, res)
	}
}

func countLetter(s string, res *map[Mark]int) {
	for _, r := range s {
		if unicode.IsLetter(r) {
			(*res)[LETTER]++
		}
	}
}

func countDigit(s string, res *map[Mark]int) {
	for _, r := range s {
		if unicode.IsDigit(r) {
			(*res)[Digit]++
		}
	}
}

func countSpace(s string, res *map[Mark]int) {
	for _, r := range s {
		if unicode.IsSpace(r) {
			(*res)[Space]++
		}
	}
}

func countPM(s string, res *map[Mark]int) {
	for _, r := range s {
		if unicode.IsPunct(r) {
			(*res)[PunctuationMark]++
		}
	}
}

func main() {
	lines := []string{
		"There are",
		"68 letters,",
		"five digits,",
		"12 spaces,",
		"and 4 punctuation marks in these lines of text!",
	}
	resDict := map[Mark]int{LETTER: 0, Digit: 0, Space: 0, PunctuationMark: 0}
	compute(lines, &resDict, countLetter)
	compute(lines, &resDict, countDigit)
	compute(lines, &resDict, countSpace)
	compute(lines, &resDict, countPM)
	for k, v := range resDict {
		fmt.Printf("%d %ss\n", v, k)
	}
}
