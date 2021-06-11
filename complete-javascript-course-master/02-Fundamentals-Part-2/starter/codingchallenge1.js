calcAverage = (score1 , score2 , score3) => {
    return (score1+score2+score3)/3;
}

checkWinner = (avgDolphins, avgKoalas) => {

    if(avgDolphins > (2*avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
    }else if(avgKoalas > (2*avgDolphins)){
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas} )`);
    } else {
        console.log('No Team Wins');
    }
}

//DATA1 D - 44, 23, 71; K - 65 , 54, 49 
//Data2 D - 85, 54, 41 ; K - 23, 34, 27

checkWinner(calcAverage(44,23,71),calcAverage(65,54,49));

checkWinner(calcAverage(85,54,41),calcAverage(23,34,27));
