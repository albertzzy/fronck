let resStr = '<ul>';
let objArr = [];

function parseJson(json){
    Object.keys(json).forEach( k => {
        let val = json[k];
    
        if(typeof val === 'object'){
            resStr += '<li>'+k+':'+'...</li>';
            parseJson(json[k]);
        }else{
            resStr += '<li>'+k+':'+val+'</li>'；
        }


    })




}