AOS.init();
const dataDoEvento = new Date("Oct 10, 2024 21:00:00");
const timeStampDoEvento = dataDoEvento.getDate.time();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 86400000; //UM DIA EM MILISEGUNDOS
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const segundoEmMs = 1000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMs / horaEmMs);
    const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs);
    const segundosAteOEvento = Math.floor(distanciaAteOEvento % minutoEmMs / segundoEmMs);
    document.getElementById("#contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("#contador").innerHTML = "Evento expirado";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
