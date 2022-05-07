//--Summary:
//  Create a program to manage parts on an assembly line.
//
//--Requirements:
//* Using a slice, create an assembly line that contains type Part
//* Create a function to print out the contents of the assembly line
//* Perform the following:
//  - Create an assembly line having any three parts
//  - Add two new parts to the line
//  - Slice the assembly line so it contains only the two new parts
//  - Print out the contents of the assembly line at each step
//--Notes:
//* Your program output should list 3 parts, then 5 parts, then 2 parts

package main

import "fmt"

type Part string

func printPartAssemblyLine(title string, al []Part) {
	fmt.Println(title, al)
}

func main() {
	// al := make([]Part, 3)
	// al[0] = Part("x1")
	// al[1] = Part("x2")
	// al[2] = Part("x3")
	assemblyLine := []Part{Part("p1"), Part("p2"), Part("p3")}
	printPartAssemblyLine("step 1", assemblyLine)

	assemblyLine = append(assemblyLine, Part("p4"), Part("p5"))
	printPartAssemblyLine("step 2", assemblyLine)

	assemblyLine = assemblyLine[3:]
	printPartAssemblyLine("step 3", assemblyLine)

}
