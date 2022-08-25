var questions = ['What is your favourite color?', 'What kinda cream do you like?', 'What feature matters most?', 'hmm?', 'Black or White?'];
var answers1 = [['blue', 'black', 'pink'], ['smooth', 'dirty', 'wet'], ['booty', 'love', 'eyes'], ['rpg', 'fps', 'club penguin'], ['Black fo sho', 'White is nice', 'Neither, i prefer Asian']];
var i = 0;
var a = 0;
var final = 0;
var ans = document.getElementsByClassName('answer');
//on click the quiz will start
document.getElementById('click').onclick = function start(){
    document.getElementById('click').style.display = 'none';
    selection_maker();
     document.getElementById('Quest').innerHTML = questions[i];  
    i++;
};
    
    

document.getElementById('answ1').onclick = function(){
    a++;
    relapse();
    selection_maker();
    final += 1
};
document.getElementById('answ2').onclick = function(){
    a++;
    relapse();
    selection_maker();
    final += 3
};
document.getElementById('answ3').onclick = function(){
    a++;
    relapse();
    selection_maker();
    final -= 1
};

function relapse(){  
    if(questions[i] !== undefined){
    document.getElementById('Quest').innerHTML = questions[i];
    i++;
    }else if(final === 15){
        alert('you are just weird tbh');
        location.reload();
    } else if(final >= 10 && final <= 14){
        alert('Congrats, Your color id navy blue')
         location.reload();
    }else if(final < 10 && final >= 5){
        alert('Congrats, Your color is ruby red')
         location.reload();
    }else if(final < 5 && final >= 3){
        alert('Congrats, Your color is vacuum black')
         location.reload();
    }else if(final < 3 && final >= 0){
        alert('Congrats, Your color is nature green')
         location.reload();
    } else{
        alert('While you took this quiz i was doing push ups, lol loser')
         location.reload();
    };
}; // changes the question each time the user clicks answer

function selection_maker(){
    for(var x = 0; x < ans.length; x++){    //to display every possible answer i target every div with the classname
        ans[x].style.display = 'block';
        ans[x].innerHTML = answers1[a][x];
}
};