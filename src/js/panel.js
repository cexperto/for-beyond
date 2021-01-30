function btnmenu(){
    navegacion = document.getElementById('menubox')
    console.log(navegacion);
    
    if(navegacion.style.display == 'block'){
        navegacion.style.display = 'none';
    }else{
        navegacion.style.display = 'block';
    }
}