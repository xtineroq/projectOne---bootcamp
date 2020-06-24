$( document ).ready(function() {
    // User input -- to be updated to retrieve from Settings page input
    var numberWeeks = 5;
    var numberDays = 3;
      
    // Load number of tabs and days according to user input
    for( var i = 1; i < numberWeeks+1; i++){
        // Create tab
        if( i === 1 ){
            var newTab = $(`<li class="active"><a href="#tab${i}">Week ${i}</a></li>`);
        } else {
            var newTab = $(`<li><a href="#tab${i}">Week ${i}</a></li>`);
        }
        $("#tabslist").append(newTab);

        // Create tab panel
        var newTabPanel = $(`<div id="tab${i}">`);
        var newTabPanelContent = $(`<p>Your workouts for Week${i}</p>`);
        newTabPanel.append(newTabPanelContent);
        $(".tabs-content").append(newTabPanel);
    }

    $(function() { ////////////////////// What is this line?
        $('.tabs-nav a').click(function() {
    
        // Check for active
        $('.tabs-nav li').removeClass('active');
        $(this).parent().addClass('active');
    
        // Display active tab
        let currentTab = $(this).attr('href');
        $('.tabs-content div').hide();
        $(currentTab).show();
    
        return false;
        });
    });

});