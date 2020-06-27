$(document).foundation();

$(document).ready(function () {

    // Global variables
    var selectedGoal = "";
    var muscleGroup = "";
    var daysMoved = false;
    var weeksMoved = false;

    // Goal select box event
    // $(".myGoal").change(function() {

    //     // assign select box value to selectedGoal
    //     selectedGoal = $(this, ":selected").val();

    //     // save goal to LocalStorage
    //     goal = selectedGoal;
    //     localStorage.setItem("goal", JSON.stringify(goal));
    // });


    // Event listener for Days Slider
    $("#sliderDays").on("change changed.zf.slider", function() {

        // get value of selected days
        var days = $(this).data().zfPlugin.$input[0].value;

        // display slider value to h5 next to it
        $("#sliderDaysText").text(days);

        // 
        $("#sliderDays").on("change moved.zf.slider", function() {
            daysMoved = true;
        });

        // save days to localStorage
        localStorage.setItem("days", JSON.stringify(days));

    });

    // Event listener for Weeks Slider
    $("#sliderWeeks").on("change changed.zf.slider", function() {

        // get value of selected weeks
        var weeks = $(this).data().zfPlugin.$input[0].value;

        // display slider value to h5 next to it
        $("#sliderWeeksText").text(weeks);

        $("#sliderWeeks").on("change moved.zf.slider", function() {
            weeksMoved = true;
        });
        
        // save weeks to localStorage
        localStorage.setItem("weeks", JSON.stringify(weeks));
    });


    // Event listener for each of the Muscle Group Buttons
    $("#fullBodyBtn").on("click", function() {
        // assign muscleGroup value to "full"
        muscleGroup = "full";

        // call function to save data to localStorage and add pressed effect
        saveMuscleGroup();

    });

    $("#upperBtn").on("click", function() {
        // assign muscleGroup value to "upper"
        muscleGroup = "upper";

        // call function to save data to localStorage and add pressed effect
        saveMuscleGroup();
    });

    $("#lowerBtn").on("click", function() {
        // assign muscleGroup value to "lower"
        muscleGroup = "lower";

        // call function to save data to localStorage and add pressed effect
        saveMuscleGroup();
    });

    // this function is being in each Muscle Group buttons
    function saveMuscleGroup() {

        // addClass clicked styling to selected MGButton
        if (muscleGroup === "full") {
            $("#upperBtn").removeClass("MGButtons-clicked");
            $("#lowerBtn").removeClass("MGButtons-clicked");
            $("#fullBodyBtn").addClass("MGButtons-clicked");
        } else if (muscleGroup === "upper") {
            $("#fullBodyBtn").removeClass("MGButtons-clicked");
            $("#lowerBtn").removeClass("MGButtons-clicked");
            $("#upperBtn").addClass("MGButtons-clicked");
        } else if (muscleGroup === "lower") {
            $("#fullBodyBtn").removeClass("MGButtons-clicked");
            $("#upperBtn").removeClass("MGButtons-clicked");
            $("#lowerBtn").addClass("MGButtons-clicked");
        }

        // save muscleGroup data to localStorage 
        localStorage.setItem("muscleGroup", JSON.stringify(muscleGroup));
    }
    

    // Get My Plan event listener
    $(".GMPBtn").on("click", function() {

        // if user did not select a goal
        if (daysMoved === false || weeksMoved === false || muscleGroup === "") {

            // add modal attribute
            $(".GMPBtn").attr("data-open", "settings-modal");

            // run animation when modal appears
            $("#settings-modal").on("closeme.zf.reveal", function(e) {
                Foundation.Motion.animateIn(e.target, "slide-in-right");
            });

            // Goal: condition for check or x icon to appear
            // if (selectedGoal === "" || selectedGoal === "0") {
            //     $("#liGoal").removeAttr("class", "fi-check");
            //     $("#liGoal").attr("class", "fi-x");
            // } else {
            //     $("#liGoal").removeAttr("class", "fi-x");
            //     $("#liGoal").attr("class", "fi-check");
            // }

            // Days: condition for check or x icon to appear
            if (daysMoved === false) {
                $("#liDays").removeAttr("class", "fi-check");
                $("#liDays").attr("class", "fi-x");
            } else {
                $("#liDays").removeAttr("class", "fi-x");
                $("#liDays").attr("class", "fi-check");
            }

            // Weeks: condition for check or x icon to appear
            if (weeksMoved === false) {
                $("#liWeeks").removeAttr("class", "fi-check");
                $("#liWeeks").attr("class", "fi-x");
            } else {
                $("#liWeeks").removeAttr("class", "fi-x");
                $("#liWeeks").attr("class", "fi-check");
            }

            // Muscle Group: condition for check or x icon to appear
            if (muscleGroup === "") {
                $("#liMuscle").removeAttr("class", "fi-check");
                $("#liMuscle").attr("class", "fi-x");
            } else {
                $("#liMuscle").removeAttr("class", "fi-x");
                $("#liMuscle").attr("class", "fi-check");
            }
        
        // if one option has been selected from each category
        } else {
            // remove modal attribute
            $(".GMPBtn").removeAttr("data-open", "settings-modal");

            // switch window to Personal Planner
            window.location.href = "PersonalPlanner.html";
        }
        
    });

});

