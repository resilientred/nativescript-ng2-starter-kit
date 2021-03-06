"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var app_component_1 = require("./app.component");
var element_registry_1 = require("nativescript-angular/element-registry");
var platform_1 = require("nativescript-angular/platform");
var app_routing_1 = require("./app.routing");
element_registry_1.registerElement("DropDown", function () { return require("nativescript-drop-down/drop-down").DropDown; });
element_registry_1.registerElement('CardView', function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
element_registry_1.registerElement("Tags", function () { return require("nativescript-tag").Tags; });
element_registry_1.registerElement("TagGroup", function () { return require("nativescript-tag").TagGroup; });
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
element_registry_1.registerElement("CircleProgressBar", function () { return require("nativescript-progressbar").CircleProgressBar; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents),
        providers: [modal_dialog_1.ModalDialogService],
        entryComponents: [],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLHNEQUF1RTtBQUN2RSxrRUFBMEc7QUFDMUcsaURBQStDO0FBQy9DLDBFQUF3RTtBQUN4RSwwREFBZ0c7QUFHaEcsNkNBQThEO0FBRTlELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxRQUFRLEVBQXBELENBQW9ELENBQUMsQ0FBQztBQUN4RixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFFN0Usa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBRTdFLGtDQUFlLENBQUMsTUFBTSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQWhDLENBQWdDLENBQUMsQ0FBQztBQUNoRSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxFQUFwQyxDQUFvQyxDQUFDLENBQUM7QUFDdkUsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUVuRixrQ0FBZSxDQUFDLG1CQUFtQixFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxpQkFBaUIsRUFBckQsQ0FBcUQsQ0FBQyxDQUFDO0FBQ2xHLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQXdCL0UsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBdEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ04sNkJBQWtCO1lBQ3JCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1NBQ3ZDO1FBQ0QsWUFBWTtZQUNWLDRCQUFZO2lCQUNYLG1DQUFxQixDQUN2QjtRQUNELFNBQVMsRUFBQyxDQUFDLGlDQUFrQixDQUFDO1FBQzlCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FFVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nSG9zdH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYywgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IHJvdXRlcywgbmF2aWdhdGFibGVDb21wb25lbnRzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcblxucmVnaXN0ZXJFbGVtZW50KFwiRHJvcERvd25cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kcm9wLWRvd24vZHJvcC1kb3duXCIpLkRyb3BEb3duKTtcbnJlZ2lzdGVyRWxlbWVudCgnQ2FyZFZpZXcnLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcblxucmVnaXN0ZXJFbGVtZW50KFwiQ2hlY2tCb3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jaGVja2JveFwiKS5DaGVja0JveCk7XG5cbnJlZ2lzdGVyRWxlbWVudChcIlRhZ3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10YWdcIikuVGFncyk7XG5yZWdpc3RlckVsZW1lbnQoXCJUYWdHcm91cFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRhZ1wiKS5UYWdHcm91cCk7XG4gdmFyIExvYWRpbmdJbmRpY2F0b3IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCIpLkxvYWRpbmdJbmRpY2F0b3I7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkNpcmNsZVByb2dyZXNzQmFyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcHJvZ3Jlc3NiYXJcIikuQ2lyY2xlUHJvZ3Jlc3NCYXIpO1xucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgIC4uLm5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOltNb2RhbERpYWxvZ1NlcnZpY2VdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG4iXX0=