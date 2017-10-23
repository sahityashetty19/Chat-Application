//CONTROLLER

(function(){
  angular.module('chatApp',[])
  .controller('ChatAppController',ChatAppController); //initialize Angular Controller
  ChatAppController.$inject=['$scope','DataService']; 
  function ChatAppController($scope,DataService){

    DataService.getActivities().then(function(data){  //call getActivities function in service.js to get JSON data

            $scope.recentActivities = data.data; 
            $scope.displayDate();
            $scope.displayActivity();
            console.log($scope.recentActivities);
        }, function(error){
            console.log(error);
        })
 
  
  $scope.displayDate = function(){           //Display date when activity was posted 
        var d1 = new Date("September 19, 2017 10:47:00 ");      
        angular.forEach($scope.recentActivities,function(a){
          var d2 = new Date(parseInt(a.postDate,10));
          var diff = (d1 - d2)/1000;
          diff = Math.abs(Math.floor(diff)); //calculate difference between dates
    
          var days = Math.floor(diff/(24*60*60)); //find how many days ago the activity was posted
          var timeLeft = diff - days * 24*60*60;

          if(days<1){                             //if day is less then one display how many hours ago the comment was posted 
            var hrs = Math.floor(timeLeft/(60*60)); //find how many hours ago the activity was posted
            timeLeft = timeLeft - hrs * 60*60;

            if(hrs<1){                            //if hour is less then one display how many minutes ago the comment was posted
              var min = Math.floor(timeLeft/(60)); //find how many minutes ago the activity was posted
              a.postDate=min+" minutes ago";
            }
            else{
              a.postDate=hrs+ "hours ago";
            }
      
          }
          else{
            a.postDate=days+ " days ago";
          }
      });
  }

   $scope.displayActivity = function(){                  
      angular.forEach($scope.recentActivities,function(s){ //display what activity is posted
        if(s.nodeType==2)
          s.nodeTypeString="posted an idea";
        else if(s.nodeType==17)
          s.nodeTypeString="commented on the idea";
        else if(s.nodeType==18)
          s.nodeTypeString="replied to a comment on the idea";
      });
  }
 
 }
  
})();