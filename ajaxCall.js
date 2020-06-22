$(document).ready(function() {


     // global variables 
    //  first 3 are for actual use 
    var upperArray = [];
    var lowerArray = [];
    var fullBodyArray = [];

    // bunch of arrays to hold the search results split into there muscle catagories
    var absArray = [];
    var armsArray = [];
    var legsArray = [];
    var chestArray = [];
    var backArray = [];
    var calvesArray = [];
    var shouldersArray = [];

    //  queryUrl contains, limits to language english(language=2)
    // &status=2 contains only those exercises approved by wreg
    // limit the search to 50 entries
    var queryUrl = "https://wger.de/api/v2/exercise/?language=2&status=2&limit=50"

    // Things to accomplish:
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      console.log(response.time);
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
            console.log("this is legs array ---------------------")
            console.log(legsArray);
            console.log("this is calves array ---------------------")
            console.log(calvesArray);
            console.log("this is arms array ---------------------")
            console.log(armsArray);
            console.log("this is chest array ---------------------")
            console.log(chestArray);
            console.log("this is shoulders array ---------------------")
            console.log(shouldersArray);
            console.log("this is abs array ---------------------")
            console.log(absArray);
            console.log("this is back array ---------------------")
            console.log(backArray);

       
        var getUpper = function() {
               
            for (var i = 0; i < 2; i++) {
                //take 2 arms exercises
                upperArray.push(armsArray[i])

                //take 2 chest exercises
                upperArray.push(chestArray[i+3])

                //take 2 back exercises
                upperArray.push(backArray[i+2])

                //take 2 shoulder exercises
                upperArray.push(shouldersArray[i])
            }
            console.log("this is the combined upperArray ----------------")
            console.log(upperArray)
        }

        var getLower = function() {

            for (var i =0; i < legsArray.length; i++) {
                lowerArray.push(legsArray[i]);
            }

            for (var i = 0; i < calvesArray.length; i++) {
                lowerArray.push(calvesArray[i])
            }

            console.log("this is the lower Array")
            console.log(lowerArray)
        }

        var getFullBody = function() {
            for (var i = 0; i < 1; i++) {
                //add one exercise from legs
                fullBodyArray.push(legsArray[i])

                //add one exercise from chest 
                fullBodyArray.push(chestArray[i])

                //add one back exercise
                fullBodyArray.push(backArray[i])

                //add one exercise from shoulders
                fullBodyArray.push(shouldersArray[i])

                //add one exercise from calves
                fullBodyArray.push(calvesArray[i])

                //add one exercise from arms
                fullBodyArray.push(armsArray[i])

                //add one exercise from abs
                fullBodyArray.push(absArray[i]);
            }

            console.log("this is a full body array")
            console.log(fullBodyArray)
        }

        getUpper();
        getLower();
        getFullBody();

    });

})
