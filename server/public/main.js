const socket = io();

socket.on('humo', function (data) {
    let humo = document.getElementById('humo');

    let alerta = document.getElementById('alerta');

    try{

        if(parseInt(data) > 100){
            alerta.innerHTML = `${"¡ALERTA DE INCENDIO O FUGA DE GAS!"}`
        }else{
            alerta.innerHTML = `${"Aire normal "}`
        }

        humo.innerHTML = `${data}`

    }catch (error){

        console.error(error);
        humo.innerHTML = `${'Sistema Caido'}`
    }
});