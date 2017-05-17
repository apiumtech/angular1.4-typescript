/**
 * Created by ecobos on 5/16/17.
 */
export class AppComponent implements ng.IDirective {
    public template: string = require("./app.html");
    public restrict: string = "E";
    public replace: boolean = true;
    public controller: Function = AppComponentCtrl;
    public controllerAs: string = 'Ctrl';
    public scope: any = {};
}

export interface IAppComponentScope  extends ng.IScope {
    SearchedValue: string;
    FoundResult: string;
    Ctrl: AppComponentCtrl;
    varContent: string ;
}

export class AppComponentCtrl {
    public static $inject: any = ["$scope", "$http"];
    constructor(public $scope: IAppComponentScope,
                public $http: ng.IHttpService) {
        $scope.SearchedValue = "This is the search value";
    }

    public DoSearch(): void {
        this.$scope.FoundResult = "Loading from controller";
    }
}