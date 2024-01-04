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

// deleteBusiness(3)

function createOwner(ownerName, ownerAge) {
    fetch('/api/coc/owner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': ownerName,
            'age': ownerAge
        })
    })
    .then((response) => {
        if (!response.ok){
            throw new Error (`HTTP Error status: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log('Data: ', data)
    })
    .catch((error) => {
        console.error('Fetch Error: ', error)
    })
}

// createOwner('Jack', 23)

function createBusiness(name, numEmployees, ownerId){
    fetch('/api/coc/business', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'numEmployees': numEmployees,
            'ownerId': ownerId
        })
    })
    .then((response) => {
        if (!response.ok){
            return response.json()
        }
    })   
    .then((data) => console.log('Success, data: ', data))
    .catch((error) => console.error(error))
}

// createBusiness('Albertsons', 153, 6)

function putBusiness(name, numEmployees, ownerId, id){
    fetch(`/api/coc/business/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'numEmployees': numEmployees,
            'ownerId': ownerId
        })
    })
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP Status Error: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => console.log('Successfully PUT business: ', data))
    .catch((error) => console.error(error))
}

// putBusiness('ABCD Co', 33, 6, 1)

function putOwner(name, age, id){
    fetch(`/api/coc/owner/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'age': age
        })  
    })
    .then((response) => {
        if (!response.ok){
            throw new Error(`HTTP status error: ${response.status}`)
        }
        return response.json()
    })
    .then((data) => console.log('Successful PUT', data))
    .catch((error) => console.error(error))
}


putOwner('Alicia', 31, 1)


