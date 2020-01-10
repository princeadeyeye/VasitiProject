const create = ( todo ) => {
  return fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify(todo)
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}

const update = (params) => {
  return fetch('http://localhost:3000/'+ params.id, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const read = (params) => {
  return fetch('http://localhost:3000/'+ params.id, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(response => {
    return response.json()
  }).catch((err) => console.log(err))
}

const remove = (params) => {
  return fetch('http://localhost:3000/' + params.id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    return response.json()
  }).catch((err) => {
    console.log(err)
  })
}


const list = () => {
  return fetch('http://localhost:3000/', {
    method: 'GET',
    })
    .then(response => {
      return response.json()
  })
  .catch((err) => console.log(err))
}

export {
  create,
  remove,
  read,
  update,
  list,
}