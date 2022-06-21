function football(request, response) {
    const apiSecret = process.env.FOOTBALL_DATA_API_SECRET;
    const dynamicDate = new Date();

    const areasResponse = await fetch("https://api.football-data.org/v4/areas")
    const areasResponseJson = await areasResponse.json();

    const competitionsResponse = await fetch("https://api.football-data.org/v4/areas")
    const competitionsResponseJson = await competitionsResponse.json();
    

    response.json({
        areas: areasResponseJson,
        competitions: competitionsResponseJson
    })
}

export default football;