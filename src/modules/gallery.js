function* shuffle(array) {
  var i = array.length;
  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
  }
}

var randomNumbers = shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

var images = [];

for (let i = 0; i < 20; i++) {
  images.push(
    `
    <picture class="image">
      <img src="./images/image-${randomNumbers.next().value}.jpg" alt="Grid Gallery Image">
    </picture>
    `
  )
}

document.getElementById('gallery').innerHTML = images.join('');


setInterval(function(){

  document.getElementById('gallery').classList.add('out');

  let newArray = [];

  let numberGenerator = function(arr) {
    if (arr.length >= 20) return;
    let newNumber = Math.floor(Math.random() * 20 + 1);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
    }
    numberGenerator(arr);
  };
  
  numberGenerator(newArray);
  //console.log(newArray);

  images = [];

  for (let i = 0; i < newArray.length; i++) {

    var setClass = Math.floor(Math.random() * 3)

    //console.log(setClass)

    images.push(
      `
      <picture class="image grid-${setClass}">
        <img src="./images/image-${newArray[i]}.jpg" alt="Grid Gallery Image">
      </picture>
      `
    )
  }

  //console.log(images)
  
  
  setTimeout(function(){
    document.getElementById('gallery').innerHTML = images.join('');
    document.getElementById('gallery').classList.remove('out');
  }, 300)

}, 4500)




