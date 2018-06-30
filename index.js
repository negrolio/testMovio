const generatePINs = () => {
    let library = [];

    while (library.length < 1000) {
        let pinArray = []
        for (i=0; i<4; i++){
            pinArray.push(Math.floor(Math.random() * 10))
        }
        let pin = pinArray.join('')
        if (!twoSameDigits(pin) && !threeIncrementalDigits(pin) && !library.find(e=>e===pin)) library.push(pin)
    }

    return library
}

const twoSameDigits = (strNum) => {
    let arrOfNum = strNum.split('')
    return arrOfNum.filter((e,i,a)=>{return a.indexOf(e)===i}).length !== 4
}
const threeIncrementalDigits = (strNum) => {
    let arrOfNum = strNum.split('').map(e=>parseInt(e))
    return (arrOfNum[1] === (arrOfNum[0] + 1) &&
            arrOfNum[2] === (arrOfNum[1] + 1)) ||
            (arrOfNum[2] === (arrOfNum[1] + 1) &&
            arrOfNum[3] === (arrOfNum[2] + 1))
}

module.exports = {
    generatePINs: generatePINs,
    twoSameDigits: twoSameDigits,
    threeIncrementalDigits: threeIncrementalDigits
}