function toggleFields() {
    const dispositivo = document.getElementById("dispositivo").value;
    const diadema = document.getElementById("diadema").value;
    const segundoMonitor = document.getElementById("segundoMonitor").value;

    const isLaptop = dispositivo === "Portatil";
    const isDesktop = dispositivo === "Escritorio";

    // Toggle sections visibility
    document.getElementById("sectionPortatil").style.display = isLaptop ? 'block' : 'none';
    document.getElementById("sectionEscritorio").style.display = isDesktop ? 'block' : 'none';

    // Toggle diadema fields
    document.getElementById("serialDiadema").disabled = diadema !== "Si";

    // Toggle segundo monitor fields
    document.getElementById("serialMonitor2").disabled = !(isDesktop && segundoMonitor === "Si");
    document.getElementById("activoMonitor2").disabled = !(isDesktop && segundoMonitor === "Si");

    // Toggle fields based on dispositivo type
    document.getElementById("serialDispositivo").disabled = dispositivo === "";
    document.getElementById("activoDispositivo").disabled = dispositivo === "";
    document.getElementById("estadoDispositivo").disabled = dispositivo === "";
}