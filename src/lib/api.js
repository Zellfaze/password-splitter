import CryptoFunctions from './crypto.js';

const api = {
  saveBlob: saveBlob,
  loadBlob: loadBlob,
  loginUser: loginUser,
  checkLogin: checkLogin,
  logout: logout,
  registerUser: registerUser,
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
    return Promise.reject("Error saving blob");
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
    return Promise.reject("Error loading blob");
  }).then( (json) => {
    return json.data.blob;
  });
}

function loginUser(username, password) {
  return fetch(`login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username, password
    })
  }).then( (response) => {
    if (response.status == 401) {
      return Promise.reject("Invalid username/password");
    }
    if (response.status == 200) {
      return response.json()
    }
    return Promise.reject("Error logging in");
  }).then( (json) => {
    return json;
  });
}

function checkLogin() {
  return fetch(`login`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }).then( (response) => {
    if (response.status == 401) {
      return Promise.resolve(false);
    }
    if (response.status == 200) {
      return response.json()
    }
    return Promise.reject("Error checking login");
  }).then( (json) => {
    return json;
  });
}

function logout() {
  return fetch(`logout`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }).then( (response) => {
    if (response.status == 200) {
      return response.json()
    }
    return Promise.reject("Error logging out");
  }).then( (json) => {
    if (json.message === "Success") {
      return Promise.resolve();
    }
    return Promise.reject("Error logging out");
  });
}

function registerUser(username, password) {
  return fetch(`register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      username, password
    })
  }).then( (response) => {
    if (response.status == 400) {
      return Promise.reject("Server unable to register user");
    }
    if (response.status == 200) {
      return response.json()
    }
    return Promise.reject("Error registering user");
  }).then( (json) => {
    return json;
  });
}

export default api;
