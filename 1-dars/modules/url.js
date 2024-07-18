const url = require('url')

const newUrl = new URL('http://devis.ru:7777/users/user.html?name=Devis&status=active&age=16')

// total url 
// console.log(newUrl.href);

//name
// console.log(newUrl.host);

// hostname
// console.log(newUrl.hostname);

// path
// console.log(newUrl.pathname);

//query
// console.log(newUrl.search);


// console.log(newUrl.searchParams)

// newUrl.searchParams.append('firstName','Jobs')
// console.log(newUrl.searchParams);

// tsikl
console.log(newUrl.searchParams.forEach((name,value) => {
  console.log(`${value} : ${name}`);
}));