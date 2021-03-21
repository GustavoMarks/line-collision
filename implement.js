const collisionTest = require("./collisionTest");

// Teste, possuem interseção
collisionTest([1,1], [5,5], [1, 4], [4, 1]);
// Teste, não possui interseção
collisionTest([1,1], [5,5], [1, 4], [4, 6]);