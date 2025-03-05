/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//  Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

//  According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// input - given
// output - return the first common parent fir two nodes

var lowestCommonAncestor = function(root, p, q) {
  // edge cases
    // make sure the root node exist
    // make sure the nodes p and q exist in the tree
      // make some helper functions to check existence of the ndoes in the tree

      
  // base case - check if root is p then return the root
  if (!root || root === p || root === q) {
    // if the root doesn't exists (is null) or the root is p or the root is q
      // then you've found one of the nodes your're looking for
        // return the root
      return root;
  }

  let leftLCA = lowestCommonAncestor(root.left, p, q); // node id 6
  // recurively call the root left node into lowestCommonAncestor

  // recurively call the root right node into lowestCommonAncestor
  let rightLCA = lowestCommonAncestor(root.right, p, q); // node id 4

  // if the left node LCA and the right node LCA exist
  if (left && right) {
    // then i can reutnr the root
    return root;
  }

  return left ? left : right;
  // otherwise if the left LCA exists then return that
  // otherwise return the right LCA

};

// The variables do not scale O(1)  - there are always a constant amount of variables are the tree node approaches infinity

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
//  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
/**
* @param {TreeNode} root
* @return {number[]}
*/

//      3                                             row1
//   5     1          < youre standing here           row2
// 7  2                                               row3

// output = [ 3, 1, 2];

var rightSideView = function(root) {

// edge cases
  // check the existence of the tree given the root node
  // make sure the root isnt the only node

// initialize my result array
let result = [];
// initialize a queue and put the root in it
let queue = [root];
// initialize the rightmost value
let rightMostVal = null;

function getRightMostNodeForRow(root, rowNum) {

}

// traverse the root and pass each left and right node into the recusirve function

// check if the right node exiss
  // push the node into the queue
// otherwise check if the left node exists
  // push the node into the queue

  


};

//      3                                             row1
//   5     1          < youre standing here           row2
// 7  2                                               row3
// [3, 5, 7]
// [3, 1, 2]
var rightSideView = function(root) {
if (!root) return [];
let output = [];

var recurse = function(element, row) {
  if (!element) return;
  output[row] = element;
  recurse(element.left, row+1);
  recurse(element.right, row+1);
}

recurse(root, 0)
return output;
}