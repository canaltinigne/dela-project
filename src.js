/* TODO:
    - Username gathering from dropdown
    - E-Mail score sending 
*/

var count = 0;
var user = "";
var answers = [];
var mainPage = true;
var selectedCountry = "";

let questions = [
    "Which country are you in when you want to say 'No' by putting your chin upward ?",
    "Which country are you in when you want to imply 'Good Luck' with the both thumbs pressed?",
    "Which country are you in if you do 'Call me' sign by meaning the number 6?"
];

let realAnswers = [
    countries.features[77].properties.name,
    countries.features[42].properties.name,
    countries.features[31].properties.name
]

let qNum = questions.length;

$('#startButton').on('click', function(event) {

    event.preventDefault();
    mainPage = false;

    console.log(realAnswers);

    if (count > 0 && count < qNum+1) {
        answers.push(selectedCountry)
    }

    $('#answer').html('');

    if (count < qNum) {
        
        $('#questionArea').html( "<p><b>Q" + (count+1) + ") </b>" + questions[count] + "</p>");
        $('#startButton').html( "Next");
        count += 1
    
    } else if (count == qNum) {
        
        $('#questionArea').html("You finished the task, Please click <b>Send</b> !");
        $('#startButton').html("Send");
        count += 1;
    
    } else {
        
        var trueNum = 0;

        for (let index = 0; index < realAnswers.length; index++) {
            if (realAnswers[index] == answers[index]) {
                trueNum += 1
            }
        }

        $("#startButton").remove();

        realStr = realAnswers.join('<br>')
        pred = answers.join('<br>')

        $('#questionArea').html("<h3>Your Score: " + trueNum + "/" + qNum + '</h3><hr style="border-color: white;"><h5>Your answers:</h5>' + pred + '<h5 style="padding-top: 2vh">Correct answers:</h5>' + realStr);
    }

});

function countryClick(e) {
    if (mainPage == false) {
        $('#answer').html('<h3 style="text-align: center">You think you are in ' + e.target.feature.properties.name + ' !</h3>');
        selectedCountry = e.target.feature.properties.name;
    }  
}

