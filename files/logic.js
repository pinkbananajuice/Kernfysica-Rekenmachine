/**
 * Basis getalen
 */

let lichtsnelheid = 931.4938;
let massaProton = 1.007276;
let massaNeutron = 1.008665;
let massaElektron = 0.0005486;


/**
 * Formules voor de berekeningen 
 */
let neutronen = A - Z;
let massaOngebonden = (Z * massaProton) + (neutronen * massaNeutron);
let massaKern = atoomMassa - (Z * massaElektron);
let massaDefect = massaOngebonden - massaKern;
let bindingsEnergie = massaDefect * lichtsnelheid;
let rustEnergie = massaKern * lichtsnelheid;
let specifiekeRustenergie = rustEnergie / A;
let specifiekeBindingsenergie = bindingsEnergie / A;