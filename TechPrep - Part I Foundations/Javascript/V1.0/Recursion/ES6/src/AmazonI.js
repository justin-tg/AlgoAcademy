'use strict';

const fs = require('fs');

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


/*
 * Complete the 'findMinSyncTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER total_servers
 *  2. INTEGER_ARRAY servers
 */

function findMinSyncTime(total_servers, servers) {
    // will total_servers always equal servers.length?
    
    // n is the number of elements in the servers
    
    // from any one server find the minimum time required to the furthest away server
        
        // inputs
            // given 8 servers
            // from server 2 the furthest away server is server 6
        // output
            // they are 4 nodes apart
            
        // edge cases
            // if total_servers is < 1 or servers.length is falsy then return empty array or null?
            // if the servers length is longer than the total_servers then 
            
        if (!Array.isArray(servers) || servers.length === 0) {
            return;
        }
            
        // for every server/node passed it takes 1 unit of time
        // return the shortest length
        
    // initialize the return output which represents the shortest length shortestLength
    let shortestPath = servers.length -1;
    
    // servers = [ 1, 2, 3, 4, 5, 6, 7, 8];
    // let startServer = servers[0];
    // let endServer = servers[Math.ceil(servers.length / 2) = 4];

    // each server is connected to the one before it and the one after it linearly
    // then iterate through the servers both forwards and backwards until the destination is reached
    for (let i = 0; i < servers.length; i++) {
        for (let j = 0; j < servers.length; j++) {
            // if server i and server j are the same one then skip this iteration
            
            // determine the path from server i to server j
            let path = shortestPath;
            
            // get the distance from server i to server j (lower number to higher --> forwards check)
            if (i < j) {
                path = servers.slice(i, j + 1);
            //otherwise j is before i, so get the distance from i to j in the other direction --> backwards
            // or just get it from j to i
            } else {
                path = servers.slice(j, i + 1).reverse();
            }
            
            // then set the shortestLength to the minimum of itself and the next solution
            shortestPath = Math.min(shortestPath, path);
            
        }
    }    
    
    return shortestPath;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const total_servers = parseInt(readLine().trim(), 10);

    const serversCount = parseInt(readLine().trim(), 10);

    let servers = [];

    for (let i = 0; i < serversCount; i++) {
        const serversItem = parseInt(readLine().trim(), 10);
        servers.push(serversItem);
    }

    const result = findMinSyncTime(total_servers, servers);

    ws.write(result + '\n');

    ws.end();
}


//
//////

/**
 * Problem 1: Find Minimum Synchronization Time
 * 
 * You are managing a system of `total_servers` servers, numbered from `1` to `total_servers`.
 * Some servers are designated as active, represented in the array `servers`, which contains unique values.
 * 
 * Each server is bidirectionally connected to its adjacent servers in a circular fashion:
 *   - Server `1` is connected to `2` and `total_servers`.
 *   - Server `n` is connected to `n-1` and `1`.
 *   - All other servers are connected to their immediate neighbors and it takes 1 unit of time to sync from one server to the next
 * 
 * A synchronization process starts from one of the active servers and spreads to all other active servers.
 * The goal is to determine the **minimum time required** to synchronize the furthest apart active servers.
 * 
 * Function: findMinSyncTime(total_servers: number, servers: number[]): number
 * - Returns the minimum time required for synchronization.
 * 
 * Constraints:
 *   - 2 ≤ total_servers ≤ 10^6
 *   - 1 ≤ servers.length ≤ total_servers
 *   - 1 ≤ servers[i] ≤ total_servers
 * 
*/

//////
//

function findMinSyncTime(total_servers, servers) {
    if (!Array.isArray(servers) || servers.length === 0) {
        return 0;
    }

    // Sort the active servers to easily calculate gaps
    servers.sort((a, b) => a - b);

    let maxGap = 0;

    // Find max gap between consecutive servers
    for (let i = 0; i < servers.length - 1; i++) {
        maxGap = Math.max(maxGap, servers[i + 1] - servers[i]);
    }

    // Also check the wraparound gap (last server to first server in circular order)
    let wraparoundGap = (total_servers - servers[servers.length - 1]) + servers[0];
    maxGap = Math.max(maxGap, wraparoundGap);

    // Minimum sync time is half of the largest gap (rounded up)
    return Math.ceil(maxGap / 2);
}

//
//////