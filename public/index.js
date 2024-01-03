function getOwner() {
    fetch("/api/coc/owner", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((result) => result.json())
    .then((data) => console.log('Data', data))
    .catch((error) => console.error('Fetch GET error owners:', error))
}
getOwner()


function getBusinesses() {
    fetch("/api/coc/business", {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((data) => console.log('Data:', data))
    .catch((error) => console.error('FETCH GET error business: ', error))
}

getBusinesses()