const subjects = [
    "Artes",
    "Biologia",
    "Geografia",
    "Francês",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
]


function getSubject (subjectNumber) {
    const position = subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour,minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = [
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
]