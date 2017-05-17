/**
 * Created by ecobos on 5/16/17.
 */
import "./index";
import "angular-mocks";
import * as angular from "angular";
import "phantomjs-polyfill";
describe("Component AppComponent", () => {
    var $compile: any;
    var $rootScope: any;
    beforeEach(() => {
        angular.module("app.application");
    });
    beforeEach(inject(function(_$compile_: any, _$rootScope_: any): any{
        // the injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it("Replaces the element with the appropriate content", () => {
        // compile a piece of HTML containing the directive
        var element: any = $compile("<app-component></app-component>")($rootScope);
        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
        console.log(element);
        // check that the compiled element contains the templated content
        expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
    });
});