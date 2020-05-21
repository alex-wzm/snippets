/* enum values as list */
enum E { A, B };
const keys = Object.keys(E);
const values = keys.map(k => E[k as any]);

const enumAsList = Object.keys(E).map(k => {
    E[k as any];
}); // condensed