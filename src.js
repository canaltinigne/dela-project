/* TODO:
    - Username gathering from dropdown
    - Answer checking and score calculating in the end
    - E-Mail score sending 
    - Remove send button after sending
    - Create the webpage
*/

var count = 0;
var user = "";
var answers = [];
var mainPage = true;
var selectedCountry = "";

let questions = [
    "Which country are you in when you want to say 'No' by putting your chin upward ?",
    "Which country are you in when you want to imply 'Good Luck' with the both thumbs pressed?",
    "Which country are you in if you do 'Call me' sign by meaning can I get a drink?"
];

let qNum = questions.length;

$('#startButton').on('click', function(event) {

    event.preventDefault();
    mainPage = false;

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
        /* Send the answers to e-mail */
        console.log(answers);
    }

});

function countryClick(e) {
    if (mainPage == false) {
        $('#answer').html('<h3 style="text-align: center">You think you are in ' + e.target.feature.properties.name + ' !</h3>');
        selectedCountry = e.target.feature.properties.name;
    }  
}

