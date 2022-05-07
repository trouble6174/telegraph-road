//--Summary:
//  Create a program to calculate the area and perimeter
//  of a rectangle.
//
//--Requirements:
//* Create a rectangle structure containing its coordinates
//* Using functions, calculate the area and perimeter of a rectangle,
//  - Print the results to the terminal
//  - The functions must use the rectangle structure as the function parameter
//* After performing the above requirements, double the size
//  of the existing rectangle and repeat the calculations
//  - Print the new results to the terminal
//
//--Notes:
//* The area of a rectangle is length*width
//* The perimeter of a rectangle is the sum of the lengths of all sides

package main

import "fmt"

type Point struct {
	x, y int
}

type Rectangle struct {
	ul, ur, ll, lr Point
}

func perimeter(rec Rectangle) int {
	return (rec.lr.x-rec.ll.x)*2 + (rec.ul.y-rec.ll.y)*2
}
func area(rec Rectangle) int {
	return (rec.lr.x - rec.ll.x) * (rec.ul.y - rec.ll.y)
}
func double(rec Rectangle) Rectangle {
	rec.lr = Point{(rec.lr.x - rec.ll.x) * 2, rec.lr.y}
	rec.ul = Point{rec.ul.x, (rec.ul.y - rec.ll.y) * 2}
	rec.ur = Point{rec.lr.x, rec.ul.y}
	return rec
}
func main() {
	rec := Rectangle{Point{0, 3}, Point{5, 3}, Point{0, 0}, Point{5, 0}}
	doubledRec := double(rec)
	fmt.Println(rec, doubledRec)
	fmt.Println("perimeter rec", perimeter(rec))
	fmt.Println("perimeter recD", perimeter(doubledRec))
	fmt.Println("area rec", area(rec))
	fmt.Println("area recD", area(doubledRec))
}
