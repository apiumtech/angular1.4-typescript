config.$inject = ["$routeProvider"];
export function config($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
        .when("/", {
            template: "Hello friends"
        })
        .when("/about", {
            template: "<page-about></page-about>"
        });
}