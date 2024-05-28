function main() {
    const matriz = [
        [1,2,5,6,7,51],
        [3,4,24,66,33,77],
        [5,6,333,213,0,-1]
    ];   

    matriz[1].splice(2)
    /* const vector = [5,6,333,213,0,-1];
    vector.splice(4,1)
    console.log(vector); */

    /* matriz[1][2]="z"; */

    /* console.table(matriz); */
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            process.stdout.write("["+String(matriz[i][j])+"]");
        }
        process.stdout.write("\n");
    }



}

main();