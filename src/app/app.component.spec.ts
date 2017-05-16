/**
 * Created by ecobos on 5/16/17.
 */
import "./index";
import "angular-mocks";
import {ComponentTest} from "../util/ComponentTest";
import "phantomjs-polyfill";
import {AppComponent} from "./app.component";
describe("Component AppComponent", () => {
    console.log("I'm here");
    var directiveTest: ComponentTest<AppComponent>;
    beforeEach(() => {
        directiveTest = new ComponentTest<AppComponent>("<app-component></app-component>", "pageTweets");
    });

    it("should expose the sharedModel", () => {
        var vm: AppComponent = directiveTest.createComponent({});
        expect(vm).toBeDefined();
    });
});