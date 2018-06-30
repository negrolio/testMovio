const generatePINs = () => {
    let pinsArray = [];

    while (pinsArray.length < 1000) {
        let pinComponents = []
        for (i=0; i<4; i++){
            pinComponents.push(Math.floor(Math.random() * 10))
        }
        let pin = pinComponents.join('')
        if (!checkContigousEquality(pin) && !checkConsecutiveIncrements(pin) && !pinsArray.find(p=>p===pin)) pinsArray.push(pin)
    }

    return pinsArray
}

const checkContigousEquality = (strNum) => {
    let arrOfNum = strNum.split('')
    return arrOfNum.filter((n,i,a)=>{return a.indexOf(n)===i}).length !== 4
}
const checkConsecutiveIncrements = (st) => {
    let group = []
    return st.split('').some((n, index) => {
        const number = parseInt(n)
        const isIncrement = (group[group.length - 1] + 1) === number
        if (isIncrement) group.push(number)
        if (group.length >= 3) return true
        if (!isIncrement) group = [number]
        return false
    })
}

module.exports = {
    generatePINs: generatePINs,
    checkContigousEquality: checkContigousEquality,
    checkConsecutiveIncrements: checkConsecutiveIncrements
}