$(document).foundation();


$( document ).ready(function() {

    //////////// Grab user input from local storage here ////////////
    var numberWeeks = 5;
    var numberDays = 4;  

    // Load number of tabs according to user input
    for( var i = 1; i <= numberWeeks; i++){
        // Create tab
        var newTab = $("<li>").addClass("tabs-title");
        newTab.attr("role", "presentation");

        // Create anchor tag within tab
        var newTabAnchor = $(`<a href="#panel${i}"
        role="tab"
        aria-controls="panel${i}"
        id="panel${i}-label"
        tabindex="${1-i}">
        </a>`);
     
        // If this is the first tab, add these attributes to display it
        if( i === 1 ){
            newTab.addClass('is-active');
            newTabAnchor.attr("aria-selected", "true");
        } else {
        // Else, add these attributes to hide
            newTabAnchor.attr("data-tabs-target", `panel${i}`);
            newTabAnchor.attr("aria-selected", "false");
        }

        // Add label for tab
        newTabAnchor.html(`Week ${i}`);

        // Display tab
        newTab.append(newTabAnchor);
        $("#example-tabs").append(newTab);


        // Create tab panel
        var newTabPanel = $(`<div id="panel${i}">`).addClass("tabs-panel");
         if( i === 1 ){
            newTabPanel.addClass("is-active");
        }
        // Load number of days per tab according to user input
        for( var j = 1; j <= numberDays; j++){
            // Create div to contain the day
            var newDayDiv = $("<div class='dayDiv'>");

            // Create day title
            var newdayTitle = $("<div class='dayTitle'>");
            newdayTitle.append($(`<h4>Day ${j}</h4>`))
            newDayDiv.append(newdayTitle);

            // Create day div to contain workout
            var newWorkoutDiv = $("<div class='workoutDiv'></div>");

            /////////////////////////////////////////////////////////////
            /////////////// Add content for workouts here ///////////////
            /////////////////////////////////////////////////////////////

            // Create checkbox to mark workout completed
            var newCheckbox = $("<div class='checkbox'>");
            newCheckbox.append($(`<input id="checkbox${j}" type="checkbox"><label for="checkbox${j}">Workout Completed</label>`))
            newWorkoutDiv.append(newCheckbox);

            newDayDiv.append(newWorkoutDiv);
            newTabPanel.append(newDayDiv);
        }

        // Display tab panel
        $(".tabs-content").append(newTabPanel);
    }

    //////////// Start temporary exercise data to be updated ////////////
    var newExerciseNameDiv = $("<div class='exerciseNameDiv'>");
    newExerciseNameDiv.append($("<p class='exerciseName'>Exercise name here</p>"));
    newExerciseNameDiv.append($("<p class='exerciseReps'>5 sets x 5 reps</p>"))
    var newExerciseDesc = $("<div class='exerciseDescDiv'>");
    newExerciseDesc.append($("<img class='exercisePhoto' src='https://images.pond5.com/beautiful-energetic-fitness-girl-doing-footage-099013654_iconl.jpeg'/>"))
    newExerciseDesc.append($("<p class='exerciseDesc'>Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here </p>"));
    
    $(".workoutDiv").prepend(newExerciseDesc);
    $(".workoutDiv").prepend(newExerciseNameDiv);
    //////////// Finish temporary exercise data to be updated ////////////


});