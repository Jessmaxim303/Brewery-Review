export const fetchStateNewsApi = async (state) => {
	return await fetch(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${state}&format=json&page=5`)
	  .then(res => {
	  	if(!res.ok) {
	  		throw Error('Failed to retrieve all News')
	  	}
	  	return res.json()})
}
