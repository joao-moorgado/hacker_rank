'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function staircase(n) {
    
    for(let i = 1; i <= n; i++) {
        for(let j = n; j > 0; j--) {
            if (i < j) {
                process.stdout.write(' ');
            } else {
                process.stdout.write('#');
            }
        }
        console.log();
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
