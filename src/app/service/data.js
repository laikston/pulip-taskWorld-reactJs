const baseUrl = 'http://taskapi.pulipinc.com';
const header = {
    'POST' : {
        'Content-Type': 'application/json'
    }
}
const methodInit = {
    'POST' : {
        method: 'POST',
        headers: header.POST,
        body: JSON.stringify({"memberid":"schemak"})
    }    
};
export function getProjectListData(_params) {
    methodInit.POST.body = JSON.stringify(_params);   
    return fetch(baseUrl + '/getProjectList', methodInit.POST)
        .then(_response =>  _response.json())
        .catch(err => console.log(err));
}