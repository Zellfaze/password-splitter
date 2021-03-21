import Jquery from 'jquery';

const api = {
  saveBlob: saveBlob,
  loadBlob: loadBlob
}

function saveBlob(blob) {
  return Jquery.post(`/api/store/`, {blob: blob}).then( (response) => {
    // Make sure that the data was saved
    if (response.status !== 201) { return Promise.reject("Unable to store data on the server!"); }
    
    // Return the ID number
    return response.data.id;
  });
}

function loadBlob(id) {
  return Jquery.get(`/api/get/${id}`).then( (data) => {
    // Validate that this blob is good
    if ((data.status !== 200) || (!CryptoFunctions.validateBlob(data.data.blob))) { return Promise.reject("Could not load blob!"); }
    
    // Return the data
    return data.data.blob;
  });
}

export default api;
