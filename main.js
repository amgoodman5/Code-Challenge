/*****************************************************************************************
* Part 2
****************************************************************************************/

// Part 2 Answer Here

var employees = [
  { first: 'Amanda', last: 'Byron', group: 'Sales' },
  { first: 'Ye', last: 'Xia', group: 'Receiving', nameOrder: 'reverse' },
  { first: 'Miltiades', last: 'Crescens', group: 'Sales' }
];

function group(arr, pkey) {
  return arr
    .map(user => {
      return { name: user.first + ' ' + user.last, group: user.group };
    })
    .reduce((obj, item) => {
      let key = item[pkey].toLowerCase();
      let namedUser = { name: item.name };
      obj[key] ? obj[key].push(namedUser) : (obj[key] = [namedUser]);
      return obj;
    }, {});
}

var result = group(users, 'group');
console.log(result);
