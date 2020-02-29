export const fetchNewsApi = async () => {
	return await fetch('https://chroniclingamerica.loc.gov/lccn/sn86069873/1900-02-27/ed-1.json')
	  .then(res => {
	  	if(!res.ok) {
	  		throw Error('Failed to retrieve old News')
	  	}
	  	return res.json()})
}

export const fetchAllNewsApi = async () => {
	return await fetch('https://chroniclingamerica.loc.gov/search/titles/results/?terms=colorado&format=json&page=5')
	  .then(res => {
	  	if(!res.ok) {
	  		throw Error('Failed to retrieve all News')
	  	}
	  	return res.json()})
}
