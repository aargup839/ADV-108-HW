function startClassifying() {
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/esVHZOWtd/model.json', modelReady);
}
function modelReady() {
  classifier.classify(gotResults);
}
function gotResults(error,results) {
    if (error) {
    console.error(error);
  } else {
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "cyan"
    document.getElementById("result_confidence").style.color = "cyan";

    img = document.getElementById('imgae');

    if (results[0].label == "Barking") {
      img.src = 'img.gif';
    }
    else if (results[0].label == "Meowing") {
      img.src = 'kittykitty.gif';
    }
    else if (results[0].label == "Mooing") {
      img.src = 'milk.gif';
    }
    else if (results[0].label == "Oinking") {
      img.src = 'piggy.gif';
    }
    else {
      img.src = 'e.gif';
    }
  }
}