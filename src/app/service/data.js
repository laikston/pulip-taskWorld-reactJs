// 로 실행시키고 호스트에

// 127.0.0.1. localtask.pulipinc.com

// 등로갛고 localtask.pulipinc.com로 접속하시면됩니다
const baseUrl = 'http://taskapi.pulipinc.com'; //yarn start —disable-host-check —port 7000
const header = {
    'POST' : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}
const methodInit = {
    'POST' : {
        method: 'POST',
        headers: header.POST,
        credentials: 'include',
        body: ''
    }    
};
export function getProjectListData(_params) {
    methodInit.POST.body = JSON.stringify(_params);   
    return fetch(baseUrl + '/getProjectList', methodInit.POST)
        .then(_response => _response.json() )
        .catch(err => console.log(err));
}

export function getProjectData(_params) {
    methodInit.POST.body = JSON.stringify(_params);
    return fetch(baseUrl + '/getData', methodInit.POST)
        .then(_response => _response.json())
        .catch(err => console.log(err));
}