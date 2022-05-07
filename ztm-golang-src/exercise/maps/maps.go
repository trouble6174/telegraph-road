//--Summary:
//  Create a program to display server status. The server statuses are
//  defined as constants, and the servers are represented as strings
//  in the `servers` slice.
//
//--Requirements:
//* Create a function to print server status displaying:
//  - number of servers
//  - number of servers for each status (Online, Offline, Maintenance, Retired)
//* Create a map using the server names as the key and the server status
//  as the value
//* Set all of the server statuses to `Online` when creating the map
//* After creating the map, perform the following actions:
//  - call display server info function
//  - change server status of `darkstar` to `Retired`
//  - change server status of `aiur` to `Offline`
//  - call display server info function
//  - change server status of all servers to `Maintenance`
//  - call display server info function

package main

import "fmt"

const (
	Online      = 0
	Offline     = 1
	Maintenance = 2
	Retired     = 3
)

func showServerInfo(serverStatus map[string]int) {
	fmt.Println("\nnum of servers", len(serverStatus))
	statusCounter := map[int]int{Online: 0, Offline: 0, Maintenance: 0, Retired: 0}
	for _, status := range serverStatus {
		statusCounter[status]++
	}
	fmt.Printf("Server Status Statistics:\nOnline %d\nOffline %d\nMantenance %d\nRetired %d\n",
		statusCounter[Online], statusCounter[Offline], statusCounter[Maintenance], statusCounter[Retired])
}

func main() {
	servers := []string{"darkstar", "aiur", "omicron", "w359", "baseline"}
	serverStatusMap := make(map[string]int)
	for _, v := range servers {
		serverStatusMap[v] = Online
	}
	showServerInfo(serverStatusMap)
	serverStatusMap["darkstar"] = Retired
	serverStatusMap["aiur"] = Offline
	showServerInfo(serverStatusMap)
	for k, _ := range serverStatusMap {
		serverStatusMap[k] = Maintenance
	}
	showServerInfo(serverStatusMap)
}

//  - call display server info function
//  - change server status of `darkstar` to `Retired`
//  - change server status of `aiur` to `Offline`
//  - call display server info function
//  - change server status of all servers to `Maintenance`
//  - call display server info function
