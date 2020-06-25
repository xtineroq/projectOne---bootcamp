$(document).foundation();

// Grab user input from local storage here/////////////////////////////
// var numberWeeks;
// var numberDays;

$( document ).ready(function() {
    // User input ************************ to be updated to retrieve from Settings page input
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
            // Create day title
            newTabPanel.append($(`<h3>Day ${j}</h3>`));

            // Create day div to contain workout
            var newWorkoutDiv = $("<div class='workoutDiv'></div>");

            /////////////////////////////////////////////////////////////
            /////////////// Add content for workouts here ///////////////
            /////////////////////////////////////////////////////////////

            // Create switch to mark workout completed
            // var newWorkoutSwitch = $(`<div class="switch tiny"><input class="switch-input" id="tinySwitch${j}" type="checkbox" name="exampleSwitch"><label class="switch-paddle" for="tinySwitch${j}"><span class="show-for-sr">Tiny Sandwiches Enabled</span></label></div>`);
            // newWorkoutDiv.append(newWorkoutSwitch);

            // Create checkbox to mark workout completed
            var newCheckbox = $("<div class='checkbox'>");
            newCheckbox.append($(`<input id="checkbox${j}" type="checkbox"><label for="checkbox${j}">Workout Completed</label>`))
            newWorkoutDiv.append(newCheckbox);

            newTabPanel.append(newWorkoutDiv);
        }

        // Display tab panel
        $(".tabs-content").append(newTabPanel);
    }

    var exerciseName = $("<p class='exerciseName'>Exercise name here</p>");
    var exerciseSetsReps = $("<p>5 sets x 5 reps</p>");
    var exerciseDescription = $("<p>Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here Exercise description here </p>");

    $(".workoutDiv").prepend(exerciseName, exerciseSetsReps, exerciseDescription);

});