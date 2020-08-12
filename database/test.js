const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //Inserir dados
    
    proffyValue = {
        name: 'Artur Braga',
        avatar: 'https://scontent.fnat1-1.fna.fbcdn.net/v/t1.0-9/73409374_102886124510450_7106802399515246592_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=GyoljJvzW4IAX-wWoDG&_nc_ht=scontent.fnat1-1.fna&oh=3a6e59bc2b95190c9cadd0577a82e7a1&oe=5F57293D',
        whatsapp: '994526410',
        bio: 'Entusiasta de Crash Bandicoot',
    }

    classValue = {
        subject: 1,
        cost: '20',
        //o proffy_id vira pelo banco de dados
    }

    classScheduleValues = [
        //o class_id vira pelo banco de dados
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]


    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //Consultar os dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    

    //consultar as classes de um determinado professor e
    //trazer junto os dados do prof
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})