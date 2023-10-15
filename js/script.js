window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const date = document.querySelector("#date")
    const title = document.querySelector("title")
    const h1 = document.querySelector("h1")


    const now = new Date()
    let year = now.getFullYear()

    if (now.getMonth() > 9) {
        year += 1
    }

    const halloween = new Date(`October 11, ${year} 00:00:00`)
    const timeUntil = halloween.getTime() - now.getTime()
    const daysUntil = Math.abs(Math.ceil(timeUntil / (1000 * 60 * 60 * 24)))

    switch (daysUntil) {
        case 1:
            h1.innerHTML = `Silus Birthday is <span id="date">${daysUntil}</span> days away!`
            title.innerHTML = `${daysUntil} Day Until Silus' Birthday !`
            break;
        case 0:
            h1.innerHTML = `<span id="date">Today is Silus Birthday!</span> Eat, drink and be scary!`
            title.innerHTML = "Ahhhh! Today is Silus' Birthday!"
            break;
        default:
            date.innerHTML = daysUntil
            title.innerHTML = "${daysUntil} Days Until Silus' Birthday!"
            break;
    }

});
