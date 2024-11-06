AOS.init();

// Definir momento do evento
const eventDate = new Date("Jun 6, 2025 08:00:00");
const eventTimeStamp = eventDate.getTime();

const countDown = setInterval(function() {
    // Definir momento atual
    const now = new Date();
    const nowTimeStamp = now.getTime();

    // Definir tempo até o evento
    const timeUntilEvent = eventTimeStamp - nowTimeStamp;

    // Definir constantes auxiliares
    const minInMS = 1000 * 60;
    const hoursInMs = minInMS * 60;
    const daysInMs = hoursInMs * 24;

    // Quebra do tempo em unidades
    const daysUntilEvent = Math.floor(timeUntilEvent / daysInMs);
    const hoursUntilEvent = Math.floor((timeUntilEvent % daysInMs) / hoursInMs);
    const minUntilEvent = Math.floor((timeUntilEvent % hoursInMs) / minInMS);
    const secUntilEvent = Math.floor((timeUntilEvent % minInMS) / 1000);

    // Substituir conteúdo do span
    document.getElementById('contador').innerHTML = `O maior campeonato de Speedcubing que Rio Preto já viu começa em ${daysUntilEvent}d ${hoursUntilEvent}d ${minUntilEvent}m e ${secUntilEvent}s`;
}, 1000);