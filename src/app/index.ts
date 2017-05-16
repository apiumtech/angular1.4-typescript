import * as angular from "angular";
import "angular-route";
import {config as routesConfig} from "./routes";

import {PageAboutComponent} from "../pages/about/about";
import {AppComponent} from "./app.component";
angular.module("app.application", ["ngRoute"])
    .directive("appComponent", () => new AppComponent())
    .directive("pageAbout", () => new PageAboutComponent())
    .config(routesConfig);