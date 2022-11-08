function creatGame(teamHome, hour, teamAway){
    return`
    <li>
        <img src="assets/teams/icon-${teamHome}.svg" alt="${teamHome}_flag"><strong>${hour} - Yuor Time</strong><img src="assets/teams/icon-${teamAway}.svg" alt="${teamAway}_flag">
    </li>
    `
}

//Variável de controle
let delay = -0.3;
function creatCard(date, day, games){
    delay = delay + 0.3; 
    return`
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} - <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
        creatCard('11/20/2022', 'Sunday',creatGame('qatar', '13:00', 'ecuador')) 
        +
        creatCard('11/21/2022', 'Monday',
        creatGame('england', '10:00', 'iran') + 
        creatGame('senegal', '13:00', 'netherlands') + 
        creatGame('usa', '16:00', 'wales')) 
        +
        creatCard('11/22/2022', 'Tuesday',
        creatGame('argentina', '07:00', 'saudi_arabia') +
        creatGame('denmark', '10:00', 'tunisia') + 
        creatGame('mexico', '13:00', 'poland') + 
        creatGame('france', '16:00', 'australia')) 
        +
        creatCard('11/23/2022', 'Wednesday',
        creatGame('marocco', '07:00', 'croatia') + 
        creatGame('germany', '10:00', 'japan') + 
        creatGame('spain', '13:00', 'costa_rica') + 
        creatGame('belgiun', '16:00', 'canada')) 
        +
        creatCard('11/24/2022', 'Thursday',
        creatGame('switzerland', '07:00', 'cameroon') + 
        creatGame('uruguay', '10:00', 'south_korea') + 
        creatGame('portugal', '13:00', 'ghana') + 
        creatGame('brazil', '16:00', 'serbia')) 
        +
        creatCard('11/25/2022', 'Friday',
        creatGame('wales', '07:00', 'iran') + 
        creatGame('qatar', '10:00', 'senegal') + 
        creatGame('netherlands', '13:00', 'ecuador') + 
        creatGame('england', '16:00', 'usa')) 
        +
        creatCard('11/26/2022', 'Saturday',
        creatGame('tunisia', '07:00', 'australia') + 
        creatGame('poland', '10:00', 'saudi_arabia') + 
        creatGame('france', '13:00', 'denmark') + 
        creatGame('argentina', '16:00', 'mexico'))
        +
        creatCard('11/27/2022', 'Sunday',
        creatGame('japan', '07:00', 'costa_rica') + 
        creatGame('belgiun', '10:00', 'marocco') + 
        creatGame('croatia', '13:00', 'canada') + 
        creatGame('spain', '16:00', 'germany'))
        +
        creatCard('11/28/2022', 'Monday',
        creatGame('cameroon', '07:00', 'serbia') + 
        creatGame('south_korea', '10:00', 'ghana') + 
        creatGame('brazil', '13:00', 'switzerland') + 
        creatGame('portugal', '16:00', 'uruguay'))
        +
        creatCard('11/29/2022', 'Tuesday',
        creatGame('ecuador', '12:00', 'senegal') + 
        creatGame('netherlands', '12:00', 'qatar') + 
        creatGame('iran', '16:00', 'usa') + 
        creatGame('wales', '16:00', 'england'))
        +
        creatCard('11/30/2022', 'Wednesday',
        creatGame('tunisia', '12:00', 'france') + 
        creatGame('australia', '12:00', 'denmark') + 
        creatGame('poland', '16:00', 'argentina') + 
        creatGame('saudi_arabia', '16:00', 'mexico'))
        +
        creatCard('12/01/2022', 'Thursday',
        creatGame('croatia', '12:00', 'belgiun') + 
        creatGame('canada', '12:00', 'marocco') + 
        creatGame('japan', '16:00', 'spain') + 
        creatGame('costa_rica', '16:00', 'germany'))
        +
        creatCard('12/02/2022', 'Friday',
        creatGame('south_korea', '12:00', 'portugal') + 
        creatGame('ghana', '12:00', 'uruguay') + 
        creatGame('serbia', '16:00', 'switzerland') + 
        creatGame('cameroon', '16:00', 'brazil'));