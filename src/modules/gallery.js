function* shuffle(array) {
  var i = array.length;
  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
  }
}

var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

const images = [];

for (let i = 0; i < 20; i++) {
  images.push(
    `
    <picture class="image">
      <img src="/images/image-${ranNums.next().value}.jpg" alt="Grid Gallery Image">
    </picture>
    `
  )
}

console.log(images.join(''))

document.getElementById('gallery').innerHTML = images.join('');
