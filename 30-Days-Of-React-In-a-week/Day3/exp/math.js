export const sum = (...args) => args.reduce((a, b) => a + b)
export const prod = (...args) => args.reduce((a, b) => a * b)

export default (function mathUtils() {
    return {sum, prod}
})()