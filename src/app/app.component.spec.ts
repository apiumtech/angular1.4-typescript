/**
 * Created by ecobos on 5/17/17.
 */
import "../index";
import * as angular from "angular";
import "angular-mocks";
import {ComponentTest} from "../util/ComponentTest";
import {AppComponentCtrl} from "./app.component";

describe("Component AppComponent", () => {
    var directiveTest: ComponentTest<AppComponentCtrl>;
    beforeEach(angular.mock.module("app.application", ($provide: any) => {
        $provide.service();
    }));
    beforeEach(() => {
        directiveTest = new ComponentTest<AppComponentCtrl>("<app-component></app-component>", "appComponent");
    });

    it("should init the scope var", () => {
        var vm: AppComponentCtrl = directiveTest.createComponent({});
        expect(vm.$scope.SearchedValue).toBe("This is the search value");
    });
});