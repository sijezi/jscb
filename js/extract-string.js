/**
 * Before: 'This is a list of items: cherries, limes, oranges, apples.''
 * After:['cherries','limes','oranges','apples']
 */

const str = 'This is a list of items: cherries, limes, oranges, apples.';

const start = str.indexOf(":");

const end = str.indexOf(".");

const fruits = str.substring( start + 1, end).split(",");
