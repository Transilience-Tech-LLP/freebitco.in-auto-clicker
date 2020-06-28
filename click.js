window.addEventListener('load', function () {
    // alert("It's loaded!");
    document.getElementById('free_play_form_button').click();
  })


var diff = 60*60*1000; // num * 1000 ms 
// var diff = 30*1000;

const now = new Date().getTime();

let run = setInterval(function (){
        diff = diff - 1000;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
       
        document.getElementById("lambo_contest_msg").innerHTML =
          "<div class=\"time\"><p> " + days + " days " + hours + " hours " + minutes + " minutes " + seconds + " secs LEFT";
        
        if (diff <= 0){
            location.reload();
        }
       
}, 900);

document.body.style.border = "5px solid green"; // to know that the addon is functional



// counter += 1000;
    // if (counter == diff) {
    //     loadFunction();
    // }

    // if (counter == diff + 10000) {
          // }
      
    //   let countdown = setInterval(function() {
         // location.reload();
    // var node = document.createElement("p");                 // Create a <li> node
    // var textnode = document.createTextNode("Refreshing");         // Create a text node
    // node.appendChild(textnode);                              // Append the text to <li>
         // Append <li> to <ul> with id="myList" 
    // alert('trying to refresh page');
    // document.getElementById("lambo_contest_msg").appendChild(node);
    // 
    // await sleep(5000);
    // try {
            // document.getElementById('').appendChild()
        
    // } catch (error) {
    //     alert('button not found');
    // }
    // location.reload();
    // function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

// var diff = 1800000;
// var diff = 10*1000; // num * 1000 ms 