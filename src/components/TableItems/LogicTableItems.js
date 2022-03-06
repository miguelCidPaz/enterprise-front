import Company from "../CustomTools/Company";

export const uploadItems = () => {
    const prelib = []; //Prelib donde cargamos los items a lo bestia
    const result = []; //Result donde cargamos los recortes para crear el arr bidi
    for (let i = 0; i < 100; i++) {
        const company = new Company();
        prelib.push(company)
    }
    while (prelib.length > 0) {
        result.push(prelib.splice(0, 6));
    }
    return result
}

export const reviserArrs = (arr1, arr2, max) => {
    let countLess = 0; //Contador arr de menores
    let countHigh = 0; //Contador arr de mayores

    //Contamos las posibles incidencias ya que de natural ambos tiene el mismo length, nos servira
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] < 0) {
            countLess++;
        }
        if (arr2[i] > max) {
            countHigh++;
        }
    }
    if (countLess > countHigh) {
        for (let i = 0; i < countLess; i++) {
            let max = Math.max(...arr2)
            arr2.push(max + 1)
        }
    } else if (countLess < countHigh) {
        for (let i = 0; i < countHigh; i++) {
            let min = Math.min(...arr1)
            arr1.unshift(min - 1)
        }
    }
    return [...arr1, ...arr2]
}

export const generateNumPags = (arr) => {
    return arr !== undefined
        && arr !== null
        && arr[0] !== NaN > 0
        ? arr.map((e, i) => i + 1)
        : 0
}

export const generatePags = (index, max) => {
    const arr1 = [];
    const arr2 = [];

    for (let i = 0; i < 3; i++) {
        let toBottom = index - i;
        let toTop = index + i;
        arr1.unshift(toBottom);
        arr2.push(toTop);
    }
    let data = reviserArrs(arr1, arr2, max)
    data = new Set(data);

    let result = [...data]

    result = result.filter(e => e < max)

    return result
}