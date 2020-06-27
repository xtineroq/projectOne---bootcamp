
    // global variables 
    //  first 3 are for actual use 
    var upperArray = [];
    var lowerArray = [];
    var fullBodyArray = [];

    // object to store all workouts 
    var workOut = {
            upperBody: {
                days: [{
                    day: 1,
                    exercises: []
                },{
                    day: 2,
                    exercises: []
                },{
                    day: 3,
                    exercises: []
                },{
                    day: 4,
                    exercises: []
                },{
                    day: 5,
                    exercises: []
                }]
            },
            lowerBody: {
                days: [{
                    day: 1,
                    exercises: []
                },{
                    day: 2,
                    exercises: []
                },{
                    day: 3,
                    exercises: []
                },{
                    day: 4,
                    exercises: []
                },{
                    day: 5,
                    exercises: []
                }]
            },
            fullBody: {
                days: [{
                    day: 1,
                    exercises: []
                },{
                    day: 2,
                    exercises: []
                },{
                    day: 3,
                    exercises: []
                },{
                    day: 4,
                    exercises: []
                },{
                    day: 5,
                    exercises: []
                }]
            },
        }
        var numDays = 2;

    // bunch of arrays to hold the search results split into there muscle catagories
    var absArray = [];
    var armsArray = [];
    var legsArray = [];
    var chestArray = [];
    var backArray = [];
    var calvesArray = [];
    var shouldersArray = [];

    //used for holding the random choices to make up a leg day 
    var lowerWorkout = []
    

    // var queryUrl = "https://wger.de//api/v2/exercisecategory/"
    
    var queryUrl = "https://wger.de/api/v2/exercise/?language=2&status=2&limit=200"

    // Things to accomplish:
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var exerciseObject = response.results

     

        for (var i = 0; i < exerciseObject.length; i++ ){
            if(exerciseObject[i].category === 10) {
                // console.log("this is abs " + exerciseObject[i].name)
              
                absArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 8) {
                // console.log("this is arms " + exerciseObject[i].name)
                armsArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 12) {
                // console.log("this is back " + exerciseObject[i].name)
                backArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 14) {
                // console.log("this is calves " + exerciseObject[i].name)
                calvesArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 11) {
                // console.log("this is chest " + exerciseObject[i].name)
                chestArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 9) {
                // console.log("this is legs " + exerciseObject[i].name)
                legsArray.push(exerciseObject[i]);

            } else if(exerciseObject[i].category === 13) {
                // console.log("this is shoulders " + exerciseObject[i].name)
                shouldersArray.push(exerciseObject[i]);
            } else {
                // console.log("this exercise doesn't mTCH A CATEGORY" + exerciseObject[i].name)
            }
        
        }
        
        // length of array variables for each of the functions to use with math.random
        var aLength = armsArray.length;
        var bLength = backArray.length;
        var cLength = chestArray.length;
        var sLength = shouldersArray.length;
        var calLength = calvesArray.length;
        var lLength = legsArray.length;
        var absLength = absArray.length;

        var getUpper = function() {
            // get length of each upperBody array
            var tempArray = []

            for (b = 0; b < numDays; b++) {
                console.log("i am the outer loop")
            
                for (var i = 0; i < 2; i++) {
                    // //take 2 random arms exercises
                    console.log("b: " + b + " i: " + i)
                    var rngA = Math.floor(Math.random()* aLength)
                    var rngC = Math.floor(Math.random()* cLength)
                    var rngB = Math.floor(Math.random()* bLength)
                    var rngS = Math.floor(Math.random()* sLength)

                    // uses rngNum to find index of 
                    upperArray.push(armsArray[rngA])
                    upperArray.push(chestArray[rngC])
                    upperArray.push(backArray[rngB])
                    upperArray.push(shouldersArray[rngS])
                }
                // console.log("this is the combined random upperArray ----------------")
                // console.log(upperArray)

                //want to add upperArray
                workOut.upperBody.days[b].exercises = tempArray.concat(upperArray)
                
                //clear upperArray
                upperArray = [];
            } 
            // creating a heading for the uppebody object
            $("#upper").append($("<h1>", {
                text: "Upperbody Workouts"
            }))

            // running a loop to go through the number of days the user enters
            for (var i = 0; i < numDays; i++) {
            var newHeading = $("<h3>", {
                text: "Day " + (i + 1),
            })  
            $("#upper").append(newHeading, $("<br/>"))
                workOut.upperBody.days[i].exercises.forEach(function(element) {
                    var name = element.name;
                    var description = element.description;

                    var nameDiv = $("<div>", {
                        text: name
                    })
                    var desDiv = $("<div>", {
                        html: description
                    })
                    $("#upper").append(nameDiv, desDiv)
                })
            }
        }
       
        var getLower = function() {
            // temp array so i can concat
            var tempArray = []

            //two for loops to create an overall lowerBody Array 
            for (var i =0; i < legsArray.length; i++) {
                lowerArray.push(legsArray[i]);
            }

            for (var i = 0; i < calvesArray.length; i++) {
                lowerArray.push(calvesArray[i])
            }
            
            console.log("this is the lower Array")
            console.log(lowerArray)
            var legsLength = legsArray.length;

            for (var b = 0; b < numDays; b++) {
                // this is the outer loop for number of days 

                for(var i = 0; i < 8; i++) {
                    // this inner loop is for getting random exercises 
                    var rngLegs = Math.floor(Math.random() * legsLength);
                    lowerWorkout.push(legsArray[rngLegs]);
                }

                //adds the randomly generated leg workout and adds it to the exercises array based on the day
                workOut.lowerBody.days[b].exercises = tempArray.concat(lowerWorkout)

                //clear lowerWork
                lowerWorkout = []
            }

            // creating a heading for the lowerBody object
            $("#lower").append($("<h1>", {
                text: "Lowerbody Workouts"
            }))

            // running a loop to go through the number of days the user enters
            for (var i = 0; i < numDays; i++) {
                //creating the day heading
                var newHeading = $("<h3>", {
                    text: "Day " + (i + 1),
                })  

                //appending heading 
                $("#lower").append(newHeading, $("<br/>"))

                //running the foreach loop to create and populate content 
                workOut.lowerBody.days[i].exercises.forEach(function(element) {
                    var name = element.name;
                    var description = element.description;

                    var nameDiv = $("<div>", {
                        text: name
                    })
                    var desDiv = $("<div>", {
                        html: description
                    })
                    $("#lower").append(nameDiv, desDiv)
                })
            }
        }

        // got to code this to pull random exercises 
        // once i have 7 exercises add an extra back exercise 
        // need two loops for randomizing and one of creating multiple days 
        // then add the code to push the content to the screen 

        var getFullBody = function() {
            // used to get a random index position
            var rngA = Math.floor(Math.random()* aLength);
            var rngC = Math.floor(Math.random()* cLength);
            var rngB = Math.floor(Math.random()* bLength);
            var rngS = Math.floor(Math.random()* sLength);
            var rngCal = Math.floor(Math.random() * calLength);
            var rngL = Math.floor(Math.random()*lLength);
            var rngAbs = Math.floor(Math.random() * absLength);
            
            // temp array so i can concat
            var tempArray = []

            for (var b = 0; b < numDays; b++) {

            
                for (var i = 0; i < 1; i++) {
                    //add one exercise from legs
                    fullBodyArray.push(legsArray[rngL])

                    //add one exercise from chest 
                    fullBodyArray.push(chestArray[rngC])

                    //add one back exercise
                    fullBodyArray.push(backArray[rngB])

                    //add one exercise from shoulders
                    fullBodyArray.push(shouldersArray[rngS])

                    //add one exercise from calves
                    fullBodyArray.push(calvesArray[rngCal])

                    //add one exercise from arms
                    fullBodyArray.push(armsArray[rngA])

                    //add one exercise from abs
                    fullBodyArray.push(absArray[i]);
                }

                //take one extra back exercise to make 8 total exercises
                fullBodyArray.push(backArray[rngB])

                //adds the randomly generated leg workout and adds it to the exercises array based on the day
                workOut.fullBody.days[b].exercises = tempArray.concat(fullBodyArray)
            
                // clear fullbody array
                fullBodyArray = []

            }

            // creating a heading for the lowerBody object
            $("#fullbody").append($("<h1>", {
                text: "Fullbody Workouts"
            }))

            // running a loop to go through the number of days the user enters
            for (var i = 0; i < numDays; i++) {
                //creating the day heading
                var newHeading = $("<h3>", {
                    text: "Day " + (i + 1),
                })  

                //appending heading 
                $("#fullbody").append(newHeading, $("<br/>"))

                //running the foreach loop to create and populate content 
                workOut.fullBody.days[i].exercises.forEach(function(element) {
                    var name = element.name;
                    var description = element.description;

                    var nameDiv = $("<div>", {
                        text: name
                    })
                    var desDiv = $("<div>", {
                        html: description
                    })
                    $("#fullbody").append(nameDiv, desDiv)
                })
            }
        }

        getUpper();
    
        getLower();
        getFullBody();

    });