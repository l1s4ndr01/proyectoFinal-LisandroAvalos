
// Agrega al subtitulo contacto la funcion para desplegar el panel con los datos

// document.getElementById('contacto').addEventListener('click', function () {
//     if(document.getElementById('pnl-contacto').style.display == 'none'){
//         document.getElementById('pnl-contacto').style.display = 'contents';
//     }
//     else{
//         document.getElementById('pnl-contacto').style.display = 'none';
//     }
    
// });

// funcion para agregar la funcion para desplegar el panel con los datos

// genera una colección con todos los elementos de la clase 'subtitulo'
const collection = document.getElementsByClassName('subtitulo');

for (let i=0; i < collection.length; i++) {

    let nombreElemento = collection[i].id;
    

    // a cada elemento le agrega la función que desplega/contrae el panel con la información
    
    document.getElementById(nombreElemento).addEventListener('click', function () {

        let nombrePanel = "pnl-"+nombreElemento;
        if(document.getElementById(nombrePanel).style.display == 'none'){
            document.getElementById(nombrePanel).style.display = 'contents';
        }
        else{
            document.getElementById(nombrePanel).style.display = 'none';
        }
        
    });
}



