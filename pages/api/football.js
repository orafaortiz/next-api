async function football(request, response) {
    const apiSecret = process.env.FOOTBALL_DATA_API_SECRET;
    const dynamicDate = new Date();

    // const areasResponse = await fetch("https://api.football-data.org/v4/areas")
    // const areasResponseJson = await areasResponse.json();

    // const competitionsResponse = await fetch("https://api.football-data.org/v4/competitions")
    // const competitionsResponseJson = await competitionsResponse.json();

    const brasileiraoUrl = "https://api.football-data.org/v4/competitions/2013/standings"
    const brasileiraoResponse = await fetch(brasileiraoUrl, {headers: {
        "X-Auth-Token": apiSecret
    }})
    const brasileiraoResponseJson = await brasileiraoResponse.json()
    
    // essa linha coloca o retorno da API em cache por 10 segundos
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json({
        // areas: areasResponseJson,
        // competitions: competitionsResponseJson,
        brasileirao: brasileiraoResponseJson,
    })
}

export default football;