export const fetchNewsApi = async () => {
	return await fetch('https://chroniclingamerica.loc.gov/lccn/sn86069873/1900-02-27/ed-1.json')
	  .then(res => {
	  	if(!res.ok) {
	  		throw Error('Failed to retrieve News')
	  	}
	  	return res.json()})
}