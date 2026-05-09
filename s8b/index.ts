type ReportType = {
    [key: string]: number
}
type FieldDetail = {
        name: string,
        score: number
    }


const myReport: ReportType = {
    math: 12,
    science: 10,
    gym: 20,
    history: 16
}

// return Average Score (from 20)
const getAverage = (report: ReportType): number => {
    const arr = Object.values(report)
    
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

console.log(
    getAverage(myReport)
)

// return Worst Field Performance
const getWorstField = (report: ReportType): string => {
    let worstField: FieldDetail | null  = null

    Object.entries(report).forEach(([name, score]) => {
        if (!worstField) {
            worstField = {
                name,
                score
            }
            return
        }

        if (score < worstField.score) {
            worstField = {
                name,
                score
            }
        }
    })

    if (worstField && worstField !== null) {
        return (worstField as FieldDetail).name
    }

    return 'N/A'
}
const getWorstField2 = (report: ReportType): string => {
    let worstField: string = 'N/A'

    for (const key in report) {
        if (worstField === 'N/A') {
            worstField = key
            continue;
        }

        if (report[key] < report[worstField]) {
            worstField = key
        }
    }

    return worstField
}
console.log(
    getWorstField2(myReport)
)

// Create a List of Fields With B+ Grade (B+ = +15)
// Expected output: ['gym', 'history']