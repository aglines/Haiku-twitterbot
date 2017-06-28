const datamuse = require('datamuse');

datamuse.request('words?sp=flower&md=s&max=1')
.then((json) => {
  console.log(json);
  //do it!
});
