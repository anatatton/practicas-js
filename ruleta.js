for (i=1; i<11; i++) {
    vueltas= Math.floor(Math.random()*(11-5)+5);
    caido = Math.floor(Math.random()*(37-0)+0);
    alea = vueltas * caido;
    console.log("Nro de Juego:"+i+"\n"+"Valor Aleatorio Generado:"+alea+"\n"+"Nro que cayó en la ruleta:"+caido);
}