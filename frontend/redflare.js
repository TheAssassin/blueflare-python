var redflareApp = angular.module("redflare", [])

redflareApp.controller("ServerTableCtrl", function($scope, $http, $interval) {
    var fetch = function() {
        $scope.loading = 1
        $http.get("api/servers.json").then(function(response) {
            var servers = response.data.servers
            servers.forEach(function(server) {
                server.mutators = server.mutators.join("-")

                server.players.forEach(function(player) {
                    player.icon_url = "privicons/" + player.privilege + ".png"
                })
            })
            $scope.servers = servers
            $scope.loading = 0
        })
    }
    $interval(fetch, 10000)
    fetch()
})
