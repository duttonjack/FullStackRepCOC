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
// getOwner()


function getBusinesses() {
    fetch("/api/coc/business", {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log('Data:', data))
    .catch((error) => console.error('FETCH GET error business: ', error))
}

// getBusinesses()


function deleteOwner(id){
    fetch(`/api/coc/owner/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log('Entry Deleted')
    })
    .catch((error) => console.error('Client Error deleting entry: ', error))
}

// deleteOwner(2)

function deleteBusiness(id){
    fetch(`/api/coc/business/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP Status Error:  ${response.status}`)
        }
        return response.json()
    })
    .then((data) => console.log('Business Deleted', data))
    .catch((error) => console.error('Client Error deleting entry: ', error))
}
deleteBusiness(3)
