AOS.init();

const dataDoEvento = new Date("Oct 10, 2024 21:00:00");
const timeStampDoEvento = dataDoEvento.getDate.time();

const contaAsHoras = setInterval(function () {
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24; //UM DIA EM MILISEGUNDOS
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;
  const segundoEmMs = 1000;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diaEmMs) / horaEmMs
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horaEmMs) / minutoEmMs
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / segundoEmMs
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
