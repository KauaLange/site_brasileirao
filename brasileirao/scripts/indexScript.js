
const header = {
    "x-rapidapi-key": "0f6e4b87d1adf5a6c3a06ae31a4bce5e",
    "x-rapidapi-host": "v3.football.api-sports.io"
};

async function getLeague(){
    const response = await fetch("https://v3.football.api-sports.io/leagues?id=71&season=2024",{
        method: "GET",
        headers: header
    });
    const result = await response.json();
    console.log(result);
}

async function getLeagueFixture(){
    const response = await fetch("https://v3.football.api-sports.io/fixtures?season=2024&league=71",{
        method: "GET",
        headers: header
    });
    const result = await response.json();
    console.log(result);
}

//Pegar Times
async function getTeams(){
    const response = await fetch("https://v3.football.api-sports.io/teams?season=2024&league=71",{
        method: "GET",
        headers: header
    });
    const result = await response.json();
    console.log(result);
}

getTeams()

//pegar time
//pegar ultimas 5 partidas do time
//popular tela
//repetir