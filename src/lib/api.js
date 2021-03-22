import CryptoFunctions from './crypto.js';

const api = {
  saveBlob: saveBlob,
  loadBlob: loadBlob,
}

function saveBlob(blob) {
  var mutation = `mutation createBlob($data: String!) { createBlob(data: $data) { id, data }}`;
  
  return fetch(`graphql`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: mutation,
      variables: { data: blob }
    })
  }).then( (response) => {
    if (response.status == 200) {
      return response.json()
    }
  }).then( (json) => {
    return json.data.createBlob;
  });
}

function loadBlob(id) {
  var query = `query blob($id: String!) { blob(id: $id) { id, data }}`;
  
  return fetch(`graphql`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { id: id }
    })
  }).then( (response) => {
    if (response.status == 200) {
      return response.json()
    }
  }).then( (json) => {
    return json.data.blob;
  });
}

export default api;
