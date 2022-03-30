// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => (new Date()).toLocaleDateString('en-US',
    {hour: 'numeric', minute: 'numeric'}).replace(",", "").slice(0, -3)
console.log(showDateTime())


