//SERVICE

(function(){

    angular.module('chatApp')
        .service('DataService', DataServiceFn); //initialize Angular Service

    DataServiceFn.$inject =['$http','$q'];

    function DataServiceFn($http,$q){
        var self = this;

        self.getActivities = function (){  //promise to get data from server
            var defer = $q.defer();

            $http({
                method:'GET',
                url:'http://localhost:3000/recentActivities'
            })
                .then(function(data){
                    defer.resolve(data);  //return data if success
                },
                function(error){
                    defer.reject(error);  //return error
                });
            return defer.promise;
        };

    }
})();