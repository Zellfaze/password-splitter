import CryptoFunctions from './crypto.js';

const api = {
  saveBlob: saveBlob,
  loadBlob: loadBlob,
  loginUser: loginUser,
  checkLogin: checkLogin,
  logout: logout,
  registerUser: registerUser,
}

async function saveBlob(blob) {
  var mutation = `mutation createBlob($data: String!) { createBlob(data: $data) { id, data }}`;
  
  try {
    let response = await fetch(`graphql`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables: { data: blob }
      })
    });
    
    if (response.status == 200) {
      let json = await response.json();
      return json.data.createBlob;
    }
    
    return Promise.reject("Error saving blob");
  } catch (err) {
    return Promise.reject("Error saving blob");
  }
}

async function loadBlob(id) {
  var query = `query blob($id: String!) { blob(id: $id) { id, data }}`;
  
  try {
    let response = await fetch(`graphql`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: { id: id }
      })
    });
    
    if (response.status == 200) {
      let json = await response.json();
      return json.data.blob;
    }
    
    return Promise.reject("Error loading blob");
  } catch (err) {
    return Promise.reject("Error loading blob");
  }
}

async function loginUser(username, password) {
  try {
    let response = await fetch(`login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username, password
      })
    });
    
    if (response.status == 401) {
      return Promise.reject("Invalid username/password");
    }
    
    if (response.status == 200) {
      let json = await response.json();
      return json;
    }
    return Promise.reject("Error logging in");
  } catch (err) {
    return Promise.reject("Error logging in");
  }
}

async function checkLogin() {
  try {
    let response = await fetch(`login`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    
    if (response.status == 401) {
      return Promise.resolve(false);
    }
    
    if (response.status == 200) {
      return response.json();
    }
    
    return Promise.reject("Error checking login");
  } catch (err) {
    return Promise.reject("Error checking login");
  }
}

async function logout() {
  try {
    let response = await fetch(`logout`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    
    if (response.status != 200) {
      return Promise.reject("Error logging out");
    }
    
    let json = await response.json();
    if (json.message !== "Success") {
      return Promise.reject("Error logging out");
    }
  } catch (err) {
    return Promise.reject("Error logging out");
  }
}

async function registerUser(username, password) {
  try {
    let response = await fetch(`register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username, password
      })
    });
    
    if (response.status == 200) {
      return response.json()
    }
    
    return Promise.reject("Server unable to register user");
  } catch (err) {
    return Promise.reject("Error registering user");
  }
}

export default api;
