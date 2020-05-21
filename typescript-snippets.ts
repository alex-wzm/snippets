/* ENUM VALUES AS LIST */
enum E { A, B };
const keys = Object.keys(E);
const values = keys.map(k => E[k as any]);
// credit: https://github.com/microsoft/TypeScript/issues/17198#issuecomment-315400819

// condensed
const enumAsList = Object.keys(E).map(k => {
    E[k as any];
}); 

