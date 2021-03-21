// Função de teste de interseção entre as retas AB e CD
// Cada ponto será um vetor [x, y]
function collisionTest(pointA, pointB, pointC, pointD) {
  const xA = pointA[0];
  const yA = pointA[1];
  const xB = pointB[0];
  const yB = pointB[1];
  const xC = pointC[0];
  const yC = pointC[1];
  const xD = pointD[0];
  const yD = pointD[1];

  // Verificando se retas são colineares pela razão entre B e D, e A e C
  const relXDB = xD / xB;
  const relyDB = yD / yB;
  const relxCA = xC / xA;
  const relyCA = yC / yA;
  if (relXDB === relyDB && relxCA === relyCA) {
    return console.log("Retas colineares!");
  }

  // Aplicando produto vetorial para teste de interseção
  const vectorAB = [(xB - xA), (yB - yA)];
  const vectorAC = [(xC - xA), (yC - yA)];
  const vectorAD = [(xD - xA), (yD - yA)];

  const prodBC = (vectorAB[0] * vectorAC[1]) - (vectorAB[1] * vectorAC[0]);
  const prodBD = (vectorAB[0] * vectorAD[1]) - (vectorAB[1] * vectorAD[0]);

  if ((prodBC < 0 && prodBD < 0) || (prodBC > 0 && prodBD > 0)) {
    return console.log("Retas não possuem interseção!");
  }

  const vectorCD = [(xD - xC), (yD - yC)];
  const vectorCA = [(xA - xC), (yA - yC)];
  const vectorCB = [(xB - xC), (yB - yC)];

  const prodDA = (vectorCD[0] * vectorCA[1]) - (vectorCD[1] * vectorCA[0]);
  const prodDB = (vectorCD[0] * vectorCB[1]) - (vectorCD[1] * vectorCB[0]);

  if ((prodDA < 0 && prodDB < 0) || (prodDA > 0 && prodDB > 0)) {
    return console.log("Retas não possuem interseção!");
  }

  return console.log("Retas possuem interseção!");
}

module.exports = collisionTest