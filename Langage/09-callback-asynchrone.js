setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('END');

// Dans quel ordre sorte les lettres ???
// pile d'appels
// ^
// |
// |                              lg         lg    lg          lg
// |st - st - st - st - lg ..⟳.. cbB  ..⟳.. cbA - cbD  ..⟳.. cbC
// +-----0------------------------12---------------------------------> temps
//                      END       B           A     D          C

// task queue (file d'attente de callback) à 0ms : cbB
// task queue (file d'attente de callback) à 12ms :
// task queue (file d'attente de callback) à 500ms : cbA - cbD
// task queue (file d'attente de callback) à 501ms : cbD
// task queue (file d'attente de callback) à 502ms :
// task queue (file d'attente de callback) à 1000ms : cbC
// task queue (file d'attente de callback) à 1001ms :
// Dans node si plus de pile d'appel plus de callback suceptible d'arriver en file d'attente
// -> le programme s'arrête

// Event Loop / Boucle d'événement
// do {
//   execSyncJS();
// }
// while(listCallbacks = getFromTaskQueue());

// Jake Archibald - JSConf Asia 2018
// In the loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

