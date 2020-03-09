export const fetchStateNewsApi = async (state) => {
	  let stateUrl = state.replace(" ","_")
	  console.log(stateUrl)
  return await fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
  .then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve movies.')
    }
    return res.json()})
}

// export const fetchStateNewsApi = async (state) => {
// const option = {headers: {"Access-Control-Allow-Origin": "*"}}
// 	return await fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=colorado&format=json`)
// 	  .then(res => {
// 	  	if(!res.ok) {
// 	  		throw Error('Failed to retrieve all News')
// 	  	}
// 	  	return res.json()})
//   }

  
