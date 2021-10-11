function getParameterByName() {
    a = window.location.href;
    thutu = a.indexOf('?id=') + 4
    str = "";
    for (i = thutu; i < a.length; i++) {
        str += a[i];
    }
    return str;
} 


// `http://localhost:8080/boclinkads/public/checklink?id=${id}`

if (boclinkads==''){
    let id=getParameterByName();
}else{
    let id=boclinkads;
}


   
    let url = `http://localhost:8080/boclinkads/public/js/library.js?id=${id}`;

    var request = new XMLHttpRequest();
    request.open('GET', url, false);  
    request.send(null);

    if (request.status === 200) {// That's HTTP for 'ok'
        if(request.responseText!=''){
          
            window.location.href = request.responseText;
        } ;
    }

