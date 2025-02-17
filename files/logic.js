function bereken() {
    // Lees de waarden in
    let A = parseFloat(document.getElementById("aantalA").value);
    let Z = parseFloat(document.getElementById("aantalZ").value);
    let atoomMassa = parseFloat(document.getElementById("atoomMassa").value);
    
    // Controleer of de waarden geldig zijn
    if (isNaN(A) || isNaN(Z) || isNaN(atoomMassa)) {
      alert("Vul alle velden correct in.");
      return;
    }
    
    /**
     * Basis getallen
     */
    let lichtsnelheid = 931.4938;
    let massaProton = 1.007276;
    let massaNeutron = 1.008665;
    let massaElektron = 0.0005486;
    
    /**
     * Berekeningen
     */
    let neutronen = A - Z;
    let massaOngebonden = (Z * massaProton) + (neutronen * massaNeutron);
    let massaKern = atoomMassa - (Z * massaElektron);
    let massaDefect = massaOngebonden - massaKern;
    let bindingsEnergie = massaDefect * lichtsnelheid;
    let rustEnergie = massaKern * lichtsnelheid;
    let specifiekeRustenergie = rustEnergie / A;
    let specifiekeBindingsenergie = bindingsEnergie / A;
    
    // Vul de tabel met resultaten
    let tbody = document.querySelector("#resultaat tbody");
    tbody.innerHTML = ` 
      <tr><td>Massa Ongebonden</td><td>${massaOngebonden.toFixed(6)} u</td></tr>
      <tr><td>Massa Kern</td><td>${massaKern.toFixed(6)} u</td></tr>
      <tr><td>Massadefect</td><td>${massaDefect.toFixed(6)} u</td></tr>
      <tr><td>Bindingsenergie</td><td>${bindingsEnergie.toFixed(6)} MeV</td></tr>
      <tr><td>Rustenergie</td><td>${rustEnergie.toFixed(6)} MeV</td></tr>
      <tr><td>Specifieke Rustenergie</td><td>${specifiekeRustenergie.toFixed(6)}</td></tr>
      <tr><td>Specifieke Bindingsenergie</td><td>${specifiekeBindingsenergie.toFixed(6)}</td></tr>
    `;
  }


  window.onload = function() {
    document.body.style.opacity = "1"; // Zorgt ervoor dat alles zichtbaar wordt na laden
};