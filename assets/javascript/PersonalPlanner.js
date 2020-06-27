$(document).foundation();


$( document ).ready(function() {

    //////////// Grab user input from local storage here ////////////
    var numberWeeks = parseInt(localStorage.getItem("weeks").slice(1, -1));
    var numberDays = parseInt(localStorage.getItem("days").slice(1, -1)); 
    var workout = JSON.parse(localStorage.getItem("workout"));
    var workoutType = localStorage.getItem("muscleGroup").slice(1, -1);
    console.log(workout)

    var checkboxObj = {};
    // Storing whether workouts have been marked completed or not
    if( localStorage.getItem("checkboxString") ){
        checkboxObj = JSON.parse(localStorage.getItem("checkboxString"));
    }

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
            var newDayDiv = $("<div>", {
                class: 'dayDiv',
                id: "day" + j,
            })

            // Create day title
            var newdayTitle = $("<div class='dayTitle'>");
            newdayTitle.append($(`<h4>Day ${j}</h4>`))
            newDayDiv.append(newdayTitle);


            /////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            /////////////// Add content for workouts below //////////////
            /////////////////////////////////////////////////////////////

            // Create day div to contain workout
            var newWorkoutDiv = $("<div>", {
                class: "workoutDiv",
            })
                
            workout[workoutType+"Body"].days[j-1].exercises.forEach(function(element) { 
                var name = element.name;
                var description = element.description;

                var desDiv = $("<div>", {
                    class: "exerciseDesc",
                    html: description,
                })

                //////////// Start temporary exercise data to be updated ////////////
                var newExerciseNameDiv = $("<div class='exerciseNameDiv'>");
                newExerciseNameDiv.append($(`<p class='exerciseName'>${name}</p>`));
                newExerciseNameDiv.append($("<p class='exerciseReps'>5 sets x 5 reps</p>"))

                var newExerciseDesc = $("<div class='exerciseDescDiv'>");
                // newExerciseDesc.append($("<img class='exercisePhoto' src='https://images.pond5.com/beautiful-energetic-fitness-girl-doing-footage-099013654_iconl.jpeg'/>"))
                newExerciseDesc.append(desDiv);
                
                newWorkoutDiv.append(newExerciseNameDiv, newExerciseDesc);
                //////////// Finish temporary exercise data to be updated ////////////
            })

            /////////////////////////////////////////////////////////////
            /////////////// Add content for workouts above //////////////
            /////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////

            // Create checkbox to mark workout completed
            var newCheckbox = $("<div class='checkbox'>");
            var newCheckboxInput = $(`<input id="checkbox${j}" type="checkbox" class="checked"><label class="checked">Workout Completed</label>`);
            
            newCheckbox.append(newCheckboxInput)
            newWorkoutDiv.append(newCheckbox);

            // Get local storage data to load styling for already completed workout
            // If there's data about whether the workout is completed or not
            if( checkboxObj[`panel${i}checkbox${j}`] ){
                newCheckboxInput.attr("state", checkboxObj[`panel${i}checkbox${j}`]);
                newDayDiv.attr("state", checkboxObj[`panel${i}checkbox${j}`]);
                newCheckboxInput.prop("checked", checkboxObj[`panel${i}checkbox${j}`]==="true");

            // Otherwise the workout is not completed
            } else {
                newCheckboxInput.attr("state", "false");
                newDayDiv.attr("state", "false");
            }
            
            newDayDiv.append(newWorkoutDiv);
            newTabPanel.append(newDayDiv);
        }

        // Display tab panel
        $(".tabs-content").append(newTabPanel);
    }



    // Event listener for when 'Workout Completed' checkbox is ticked
    $(document).on("change", "input:checkbox" , function() {
        var checkedState = $(this).attr("state");
        var dayCheckedBox = $(this).closest(".dayDiv");
        var weekDayID = $(this).closest(".tabs-panel").attr("id") + $(this).attr("id");
        if (checkedState === "false") {
            dayCheckedBox.attr("state", "true")
            setAttr = $(this).attr("state", "true");
            // Log this change in local storage
            checkboxObj[weekDayID] = "true";
            localStorage.setItem("checkboxString", JSON.stringify(checkboxObj));
        } else if (checkedState === "true") {
            setAttr = $(this).attr("state", "false");
            dayCheckedBox.attr("state", "false")
            // Log this change in local storage
            checkboxObj[weekDayID] = "false";
            localStorage.setItem("checkboxString", JSON.stringify(checkboxObj));
        };
    });



});