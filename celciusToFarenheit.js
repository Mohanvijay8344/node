console.log("🔥🔥🔥 Celcius to Farenheit 🔥🔥🔥")

const celciustofarenheit = (celcius) => {
    return (celcius * (9/5) + 32).toFixed(2);
}
const [,,celcius] = process.argv;
console.log("🌡 " + celciustofarenheit(celcius))