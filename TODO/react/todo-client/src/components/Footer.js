export default function Footer(props) {
    const {pageLoadCost, dbInfo: {dbQueryCount, dbCost}, serverInfo: {cpu, memory, disk}, currentEvent} = props
    return (
        <footer className="footer">
            <div className="footer-load-time">page load time: {pageLoadCost}s</div>
            <div className="footer-db-time">db operation: totally {dbQueryCount} times finish in {dbCost}ms</div>
            <div className="footer-monitor">cpu load: {cpu}%, memory: {memory}%, disk: {disk}%</div>
            <div className="footer-event">recent event: {currentEvent}</div>
        </footer>
    )
}