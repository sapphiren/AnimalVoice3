function start()
{
    navigator.mediaDevices.getUserMedia({ausio: true});
    classifier = ml5.soundClassifier("model.json", modelReady);

}
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');
        img = document.getElementById('ear')

        if (results[0].label == Dog) {
            img1.src = 'dog.jpeg';
        } else if {
            img2.src = 'cutecat.png';

        } else {
            img.src = 'ear.png';
        }
        




    
}