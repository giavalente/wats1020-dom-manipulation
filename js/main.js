//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script
//////////////////////////////////////////////////

// Run script when DOM is ready for JS
$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 1,
        greatest: 1,
        total: 2
    };
  
    // Listen for clicks on login button
   $('.btn-sm').on('click', function(event) {
       console.log(event);
       var login = '.navbar-form';
       var info = '.user-info';
       var targetElement = event.target;
     // If login is visible, fade out login and replace with user info 
     // "Login effect"
     if ($(login).is(':visible')){
       $(login).hide();
       $(info).show();
     // Fill in user info
       $('.user-fullname').replaceWith(userInfo.firstName, ' ', userInfo.lastName);
     // Else, fade out user info and replace with login 
     // "Logout effect"
         } else { 
       $(info).hide();
       $(login).show();
         }         
   });

    // Listen for clicks on "View Details" buttons 
    $('.view-details').on('click', function(event) {
       console.log(event);
       var targetElement = event.target;
    // Find the parent of element, within parent find elements with class "details"
       var container = targetElement.parentElement.parentElement;
       $(container).find('.details').each(function(index, el) {
    // If details visible, hide details and change button text to View
         if ($(el).is(':visible')){
            $(el).fadeOut();
            targetElement.innerText = "View Details"
    // Else, show details and change button text to Hide
         } else {
            $(el).fadeIn();
           targetElement.innerText = "Hide Details"
         }
       });                            
    });
  
    // Listen for clicks on voting buttons, increment total counter
  $('.vote').on('click', function(event) {
       console.log(event);
       voteCounts.total++;
       var targetElement = event.target;
       var voteGreat = ((voteCounts.great * 100) / voteCounts.total);
       var voteGreatest = ((voteCounts.greatest * 100) / voteCounts.total);
     //  If vote element equals great, increment voteCounts for great, calculate percentage total
     if ($(targetElement).data('vote') === 'great'){
           voteCounts.great++;
           $('.great-progress').width(voteGreat + '%');
     // Else vote element equals greatest, increment voteCounts for greatest, calculate percentage total
         } else { ($(targetElement).data('vote') === 'greatest')
           voteCounts.greatest++;
           $('.greatest-progress').width(voteGreatest + '%');
         }
  }); 
   
//closes entire function!  
                });