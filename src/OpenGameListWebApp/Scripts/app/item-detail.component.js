System.register(["@angular/core", "@angular/router", "./item.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, item_service_1;
    var ItemDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ItemDetailComponent = (function () {
                function ItemDetailComponent(itemService, router, activatedRoute) {
                    this.itemService = itemService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                ItemDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.activatedRoute.snapshot.params["id"];
                    if (id) {
                        this.itemService.get(id).subscribe(function (item) { return _this.item = item; });
                        console.log("loading the details for item:  " + id + ", \ncontent: " + this.item);
                    }
                    else {
                        console.log("Invalid id: routing back to home...");
                        this.router.navigate([""]);
                    }
                };
                ItemDetailComponent = __decorate([
                    core_1.Component({
                        selector: "item-detail",
                        template: "\n        <div *ngIf=\"item\" class=\"item-details\">\n            <h2>{{item.Title}} - Detail View</h2>\n            <ul>\n                <li>\n                    <label>Title:</label>\n                    <input [(ngModel)]=\"item.Title\" placeholder=\"Insert the title...\" />\n                </li>\n                <li>\n                    <label>Description:</label>\n                    <textarea [(ngModel)]=\"item.Description\" placeholder=\"Insert a suitable description...\"></textarea>\n                </li>\n            </ul>\n        </div>",
                        styles: ["\n        .item-details { margin: 5px; padding: 5px 10px; border: 1px solid black; background-color: #dddddd; width: 300px; }\n        .item-details * { vertical-align: middle; }\n        .item-details ul li { padding: 5px 0; }\n        .item-details ul li textarea { height: 100px; }\n    "]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService, router_1.Router, router_1.ActivatedRoute])
                ], ItemDetailComponent);
                return ItemDetailComponent;
            }());
            exports_1("ItemDetailComponent", ItemDetailComponent);
        }
    }
});
