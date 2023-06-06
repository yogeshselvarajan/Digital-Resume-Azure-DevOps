window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const remotefunctionApi = 'https://getyogeshresumecounter.azurewebsites.net/api/GetResumeCounter?code=dRNCiMFvcH-_iB6n2wan3AwlluPe_ZL2VgjyDM6x1xmDAzFuYLS4uA=='
const getVisitCount = () => {
    let count = 30;
    fetch(remotefunctionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
}
