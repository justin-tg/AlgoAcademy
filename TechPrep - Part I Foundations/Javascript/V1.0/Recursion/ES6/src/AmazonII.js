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
 * Complete the 'maximizeGroups' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY products as parameter.
 */

// determine the max number of batches (arrays or products) to ship

function maximizeGroups(products) {
    // n = 5
    // products = [2, 3, 1, 4, 2]
    
    let batchNum = 1;
    
    // recursion
    
    function sendOutBatch(productsArray) {
        
        // base case
        // iterate over the productsArray
        // when the products array is entirely 0's all products have been shipped
        if (productsArray.every(prod => prod === 0)) {
            // if every element is 0 then return the batchNum
            return batchNum;
        }
        
        let batchedProducts = new Set();
        let batchToShip = [];
            
        // iterate through the products array
        for (let productType = 0; productType < productsArray.length; productType++) {
            // if the items in the next batch is equal to the bathNum
            if (batchToShip.length === batchNum) {
                //then ship the batch by incrementing the batchNum and calling the function again to ship another batch;
                batchNum++;
                sendOutBatch(productsArray);
            }
            
            let prod = productsArray[productType];
            
            //otherwise we need to add more products to the batch
            // if the batchToShip does not include an item for the next productType
            // and there are 1 or more items remaining for that product type
            if (!batchedProducts.has(productType) && prod > 0) {
                // add the product type to the batchedProducts set
                batchedProducts.add(productType);
                // decrement 1 for that product type from the products array
                productsArray[productType] = productsArray[productType] - 1;
            }
        }
        
        // if the loop has finished and a batch has not yet been shipped then leave it and return
            
    }
    
    sendOutBatch(products);
    
    return batchNum;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const productsCount = parseInt(readLine().trim(), 10);

    let products = [];

    for (let i = 0; i < productsCount; i++) {
        const productsItem = parseInt(readLine().trim(), 10);
        products.push(productsItem);
    }

    const result = maximizeGroups(products);

    ws.write(result + '\n');

    ws.end();
}

//
//////


/**
 * Problem 2: Maximize Groups of Products for Shipment
 * 
 * You are given an array `products`, where `products[i]` represents the number of available units of product type `i`.
 * 
 * Each batch of shipments must follow these rules:
 *   1. Each batch must contain only unique product types (i.e., you cannot use more than one of the same type in a single batch).
 *   2. Each consecutive batch must be larger than the previous batch (i.e., the first batch contains 1 product, the second contains 2, the third contains 3, and so on).
 * 
 * The goal is to determine the maximum number of valid batches you can form before running out of available products.
 * 
 * Function: maximizeGroups(products: number[]): number
 * - Returns the maximum number of batches that can be formed.
 * 
 * Constraints:
 *   - 1 ≤ products.length ≤ 1000
 *   - 0 ≤ products[i] ≤ 1000
 * 
 * Example 1:
 * Input: products = [2, 3, 1, 4, 2]
 * Output: 4
 */

function maximizeGroups(products, batch = 1) {
    // Create a new set to store unique product types for the current batch
    let batchSet = new Set();
    
    // Try to form a batch of size 'batch'
    for (let productType = 0; productType < products.length; productType++) {
        if (products[productType] > 0 && !batchSet.has(productType)) {
            batchSet.add(productType);
            products[productType]--; // Reduce count as we use one
        }
        
        // Stop when we reach the required batch size
        if (batchSet.size === batch) {
            break;
        }
    }

    // If we couldn't form a full batch, return the last successful batch count
    if (batchSet.size < batch) {
        return batch - 1;
    }

    // Recur with incremented batch number
    return maximizeGroups(products, batch + 1);
}
