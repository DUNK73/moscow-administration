(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/analitics/components/analitics-bottom-tile-for-subindusry/analitics-bottom-tile-for-subindusry.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/analitics/components/analitics-bottom-tile-for-subindusry/analitics-bottom-tile-for-subindusry.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AnaliticsBottomTileForSubIndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsBottomTileForSubIndustryComponent", function() { return AnaliticsBottomTileForSubIndustryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/activity-type.enum */ "./src/app/analitics/models/activity-type.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dtata-services/analitics-data.service */ "./src/app/shared/dtata-services/analitics-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class AnaliticsBottomTileForSubIndustryComponent {
    constructor(analiticsDataService, router, activatedRoute, zone) {
        this.analiticsDataService = analiticsDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.unsubscribe$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(params => {
            this.activityType = params['activityType'];
            this.activityTypeLabel = _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_5__["ActivityTypeMapper"].getLabel(this.activityType);
            this.industryId = params['industry'];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(params => {
            this.ngAfterViewInit();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$$))
            .subscribe();
    }
    ngOnInit() {
    }
    initChart(data) {
        if (!data || !data.subIndustry) {
            return;
        }
        const chartData = data.subIndustry.map(item => {
            return {
                category: item.title,
                value: item.exportDataList[item.exportDataList.length - 1].value
            };
        });
        this.zone.runOutsideAngular(() => {
            /* Set themes */
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
            /* Create chart instance */
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]('analiticsInfoChartDiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieChart"]);
            // Add data
            this.chart.data = chartData;
            // Add and configure Series
            const pieSeries = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieSeries"]());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'category';
            pieSeries.slices.template.tooltipText = '{category}: {value}';
            // Let's cut a hole in our Pie chart the size of 40% the radius
            this.chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
            // Disable ticks and labels
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            // Disable tooltips
            // pieSeries.slices.template.tooltipText = '';
            // Add a legend
            // this.chart.legend = new am4charts.Legend();
        });
    }
    ngAfterViewInit() {
        this.analiticsDataService.getAnalitics()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            const industry = data.find(x => x.id === +this.industryId);
            if (industry) {
                this.industryLabel = industry.title;
                this.initChart(industry);
            }
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
        this.unsubscribe$$.next();
    }
}
AnaliticsBottomTileForSubIndustryComponent.ɵfac = function AnaliticsBottomTileForSubIndustryComponent_Factory(t) { return new (t || AnaliticsBottomTileForSubIndustryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__["AnaliticsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnaliticsBottomTileForSubIndustryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnaliticsBottomTileForSubIndustryComponent, selectors: [["app-analitics-bottom-tile-for-subindusry"]], decls: 22, vars: 1, consts: [[1, "container", "tile--selected"], [1, "container__item", "chart-container"], ["id", "analiticsInfoChartDiv"], [1, "container__item"], [1, "indicator"], [1, "indicator__value"], [1, "progress"], [1, "progress__bar-1"], [1, "progress__bar-2"]], template: function AnaliticsBottomTileForSubIndustryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "KPI \u043F\u043E \u0410\u041F\u041A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u0446. \u043F\u0440\u043E\u0435\u043A\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " TODO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.industryLabel);
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.container__item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n#analiticsInfoChartDiv[_ngcontent-%COMP%] {\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n.indicator__value[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n\r\n.progress__bar-1[_ngcontent-%COMP%], .progress__bar-2[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.progress__bar-1[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #3f92c2;\r\n}\r\n\r\n.progress__bar-2[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  background-color: #4eb092;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGl0aWNzL2NvbXBvbmVudHMvYW5hbGl0aWNzLWJvdHRvbS10aWxlLWZvci1zdWJpbmR1c3J5L2FuYWxpdGljcy1ib3R0b20tdGlsZS1mb3Itc3ViaW5kdXNyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1ib3R0b20tdGlsZS1mb3Itc3ViaW5kdXNyeS9hbmFsaXRpY3MtYm90dG9tLXRpbGUtZm9yLXN1YmluZHVzcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyX19pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2FuYWxpdGljc0luZm9DaGFydERpdiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uaW5kaWNhdG9yX192YWx1ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2dyZXNzX19iYXItMSxcclxuLnByb2dyZXNzX19iYXItMiB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnByb2dyZXNzX19iYXItMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmOTJjMjtcclxufVxyXG4ucHJvZ3Jlc3NfX2Jhci0yIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWIwOTI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsBottomTileForSubIndustryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analitics-bottom-tile-for-subindusry',
                templateUrl: './analitics-bottom-tile-for-subindusry.component.html',
                styleUrls: ['./analitics-bottom-tile-for-subindusry.component.css']
            }]
    }], function () { return [{ type: src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__["AnaliticsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/analitics/components/analitics-bottom-tile/analitics-bottom-tile.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/analitics/components/analitics-bottom-tile/analitics-bottom-tile.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AnaliticsBottomTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsBottomTileComponent", function() { return AnaliticsBottomTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/activity-type.enum */ "./src/app/analitics/models/activity-type.enum.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dtata-services/analitics-data.service */ "./src/app/shared/dtata-services/analitics-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










class AnaliticsBottomTileComponent {
    constructor(analiticsDataService, router, activatedRoute, zone) {
        this.analiticsDataService = analiticsDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.unsubscribe$$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.activityType = this.activatedRoute.snapshot.params['activityType'];
        this.activityTypeLabel = _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_5__["ActivityTypeMapper"].getLabel(this.activityType);
        this.activatedRoute.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(params => {
            this.activityType = params['activityType'];
            this.activityTypeLabel = _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_5__["ActivityTypeMapper"].getLabel(this.activityType);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$$))
            .subscribe();
    }
    initChart(data) {
        let chartData = data.map(item => {
            return {
                category: item.title,
                value: item.exportSum
            };
        });
        this.zone.runOutsideAngular(() => {
            /* Set themes */
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
            /* Create chart instance */
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]('analiticsInfoChartDiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieChart"]);
            // Add data
            this.chart.data = chartData;
            // Add and configure Series
            const pieSeries = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieSeries"]());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'category';
            pieSeries.slices.template.tooltipText = '{category}: {value}';
            // Let's cut a hole in our Pie chart the size of 40% the radius
            this.chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
            // Disable ticks and labels
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            // Disable tooltips
            // pieSeries.slices.template.tooltipText = '';
            // Add a legend
            // this.chart.legend = new am4charts.Legend();
        });
    }
    ngAfterViewInit() {
        this.analiticsDataService.getAnalitics()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            this.initChart(data);
        }))
            .subscribe();
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
        this.unsubscribe$$.next();
    }
}
AnaliticsBottomTileComponent.ɵfac = function AnaliticsBottomTileComponent_Factory(t) { return new (t || AnaliticsBottomTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__["AnaliticsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnaliticsBottomTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnaliticsBottomTileComponent, selectors: [["app-analitics-bottom-tile"]], decls: 22, vars: 2, consts: [[1, "container", "tile--selected"], [1, "container__item", "chart-container"], ["id", "analiticsInfoChartDiv"], [1, "container__item"], [1, "indicator"], [1, "indicator__value"], [1, "progress"], [1, "progress__bar-1"], [1, "progress__bar-2"]], template: function AnaliticsBottomTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u0446. \u043F\u0440\u043E\u0435\u043A\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435 \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " TODO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activityTypeLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("KPI \u043F\u043E ", ctx.activityTypeLabel, "");
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.container__item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n#analiticsInfoChartDiv[_ngcontent-%COMP%] {\r\n  -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n.indicator__value[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  position: relative;\r\n}\r\n\r\n.progress__bar-1[_ngcontent-%COMP%], .progress__bar-2[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.progress__bar-1[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #3f92c2;\r\n}\r\n\r\n.progress__bar-2[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  background-color: #4eb092;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGl0aWNzL2NvbXBvbmVudHMvYW5hbGl0aWNzLWJvdHRvbS10aWxlL2FuYWxpdGljcy1ib3R0b20tdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUlBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFZO1VBQVosWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1ib3R0b20tdGlsZS9hbmFsaXRpY3MtYm90dG9tLXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyX19pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYW5hbGl0aWNzSW5mb0NoYXJ0RGl2IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5pbmRpY2F0b3JfX3ZhbHVlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfX2Jhci0xLFxyXG4ucHJvZ3Jlc3NfX2Jhci0yIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NfX2Jhci0xIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MmMyO1xyXG59XHJcbi5wcm9ncmVzc19fYmFyLTIge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlYjA5MjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsBottomTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analitics-bottom-tile',
                templateUrl: './analitics-bottom-tile.component.html',
                styleUrls: ['./analitics-bottom-tile.component.css']
            }]
    }], function () { return [{ type: src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_7__["AnaliticsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/analitics/components/analitics-right-tile-for-subindusry/analitics-right-tile-for-subindusry.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/analitics/components/analitics-right-tile-for-subindusry/analitics-right-tile-for-subindusry.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: AnaliticsRightTileForSubIndustryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsRightTileForSubIndustryComponent", function() { return AnaliticsRightTileForSubIndustryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");





const _c0 = ["chartContainer"];
class AnaliticsRightTileForSubIndustryComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create map instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](this.chartContainer.nativeElement, _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
            const chart = this.chart;
            // Set map definition
            chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
            // Set projection
            chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
            // Create map polygon series
            const polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = '{name}';
            polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('gray');
            // Create hover state and set alternative fill color
            const hs = polygonTemplate.states.create('hover');
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
            // Remove Antarctica
            polygonSeries.exclude = ['AQ'];
            const color1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F05C5C');
            const color2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('rgb(92, 240, 183)');
            // Add some data
            polygonSeries.data = [
                {
                    id: 'US',
                    name: 'United States',
                    value: 100,
                    fill: color1
                },
                {
                    id: 'FR',
                    name: 'France',
                    value: 50,
                    fill: color1
                },
                {
                    id: 'CN',
                    name: 'China',
                    value: 500,
                    fill: color2
                },
                {
                    id: 'BH',
                    name: 'Bahrain',
                    value: 50,
                    fill: color2
                },
                {
                    id: 'BR',
                    name: 'Brazil',
                    value: 50,
                    fill: color2
                },
            ];
            // Bind "fill" property to "fill" key in data
            polygonTemplate.propertyFields.fill = 'fill';
            // Create image series
            const imageSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapImageSeries"]());
            // Create a circle image in image series template so it gets replicated to all new images
            const imageSeriesTemplate = imageSeries.mapImages.template;
            const circle = imageSeriesTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Circle"]);
            circle.radius = 4;
            circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#B27799');
            circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#FFFFFF');
            circle.strokeWidth = 2;
            circle.nonScaling = true;
            circle.tooltipText = '{title}';
            // Set property fields
            imageSeriesTemplate.propertyFields.latitude = 'latitude';
            imageSeriesTemplate.propertyFields.longitude = 'longitude';
            // Add data for the three cities
            imageSeries.data = [{
                    latitude: 48.856614,
                    longitude: 2.352222,
                    title: 'Paris'
                }, {
                    latitude: 40.712775,
                    longitude: -74.005973,
                    title: 'New York'
                }, {
                    latitude: 49.282729,
                    longitude: -123.120738,
                    title: 'Vancouver'
                }];
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
AnaliticsRightTileForSubIndustryComponent.ɵfac = function AnaliticsRightTileForSubIndustryComponent_Factory(t) { return new (t || AnaliticsRightTileForSubIndustryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnaliticsRightTileForSubIndustryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnaliticsRightTileForSubIndustryComponent, selectors: [["app-analitics-right-tile-for-subindusry"]], viewQuery: function AnaliticsRightTileForSubIndustryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, decls: 20, vars: 0, consts: [[1, "container", "tile--selected"], [1, "container__item"], [1, "widget__title", "widget__title--black"], [1, "widget__chart"], [1, "chart-container"], ["chartContainer", ""], [1, "line-bar"]], template: function AnaliticsRightTileForSubIndustryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 20px;\n}\n.container__item[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #5cf0b7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGl0aWNzL2NvbXBvbmVudHMvYW5hbGl0aWNzLXJpZ2h0LXRpbGUtZm9yLXN1YmluZHVzcnkvZDovTXlXb3JrL21vc2Nvdy1hZG1pbmlzdHJhdGlvbi9zcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1yaWdodC10aWxlLWZvci1zdWJpbmR1c3J5L2FuYWxpdGljcy1yaWdodC10aWxlLWZvci1zdWJpbmR1c3J5LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hbmFsaXRpY3MvY29tcG9uZW50cy9hbmFsaXRpY3MtcmlnaHQtdGlsZS1mb3Itc3ViaW5kdXNyeS9hbmFsaXRpY3MtcmlnaHQtdGlsZS1mb3Itc3ViaW5kdXNyeS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1yaWdodC10aWxlLWZvci1zdWJpbmR1c3J5L2FuYWxpdGljcy1yaWdodC10aWxlLWZvci1zdWJpbmR1c3J5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uY29udGFpbmVyX19pdGVtIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYig5MiwgMjQwLCAxODMpO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmNvbnRhaW5lcl9faXRlbSB7XG4gIGhlaWdodDogNTAlO1xufVxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzVjZjBiNztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsRightTileForSubIndustryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analitics-right-tile-for-subindusry',
                templateUrl: './analitics-right-tile-for-subindusry.component.html',
                styleUrls: ['./analitics-right-tile-for-subindusry.component.less']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { chartContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/analitics/components/analitics-right-tile/analitics-right-tile.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/analitics/components/analitics-right-tile/analitics-right-tile.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AnaliticsRightTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsRightTileComponent", function() { return AnaliticsRightTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");





const _c0 = ["chartContainer"];
class AnaliticsRightTileComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create map instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](this.chartContainer.nativeElement, _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
            const chart = this.chart;
            // Set map definition
            chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
            // Set projection
            chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
            // Create map polygon series
            const polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = '{name}';
            polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('gray');
            // Create hover state and set alternative fill color
            const hs = polygonTemplate.states.create('hover');
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
            // Remove Antarctica
            polygonSeries.exclude = ['AQ'];
            const color1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F05C5C');
            const color2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('rgb(92, 240, 183)');
            // Add some data
            polygonSeries.data = [
                {
                    id: 'US',
                    name: 'United States',
                    value: 100,
                    fill: color1
                },
                {
                    id: 'FR',
                    name: 'France',
                    value: 50,
                    fill: color1
                },
                {
                    id: 'CN',
                    name: 'China',
                    value: 500,
                    fill: color2
                },
                {
                    id: 'BH',
                    name: 'Bahrain',
                    value: 50,
                    fill: color2
                },
                {
                    id: 'BR',
                    name: 'Brazil',
                    value: 50,
                    fill: color2
                },
            ];
            // Bind "fill" property to "fill" key in data
            polygonTemplate.propertyFields.fill = 'fill';
            // Create image series
            const imageSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapImageSeries"]());
            // Create a circle image in image series template so it gets replicated to all new images
            const imageSeriesTemplate = imageSeries.mapImages.template;
            const circle = imageSeriesTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Circle"]);
            circle.radius = 4;
            circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#B27799');
            circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#FFFFFF');
            circle.strokeWidth = 2;
            circle.nonScaling = true;
            circle.tooltipText = '{title}';
            // Set property fields
            imageSeriesTemplate.propertyFields.latitude = 'latitude';
            imageSeriesTemplate.propertyFields.longitude = 'longitude';
            // Add data for the three cities
            imageSeries.data = [{
                    latitude: 48.856614,
                    longitude: 2.352222,
                    title: 'Paris'
                }, {
                    latitude: 40.712775,
                    longitude: -74.005973,
                    title: 'New York'
                }, {
                    latitude: 49.282729,
                    longitude: -123.120738,
                    title: 'Vancouver'
                }];
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
AnaliticsRightTileComponent.ɵfac = function AnaliticsRightTileComponent_Factory(t) { return new (t || AnaliticsRightTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AnaliticsRightTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnaliticsRightTileComponent, selectors: [["app-analitics-right-tile"]], viewQuery: function AnaliticsRightTileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, decls: 20, vars: 0, consts: [[1, "container", "tile--selected"], [1, "container__item"], [1, "widget__title", "widget__title--black"], [1, "widget__chart"], [1, "chart-container"], ["chartContainer", ""], [1, "line-bar"]], template: function AnaliticsRightTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0421\u0442\u0440\u0430\u043D\u0430 - \u0421\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0 20px;\n}\n.container__item[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #5cf0b7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGl0aWNzL2NvbXBvbmVudHMvYW5hbGl0aWNzLXJpZ2h0LXRpbGUvZDovTXlXb3JrL21vc2Nvdy1hZG1pbmlzdHJhdGlvbi9zcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1yaWdodC10aWxlL2FuYWxpdGljcy1yaWdodC10aWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hbmFsaXRpY3MvY29tcG9uZW50cy9hbmFsaXRpY3MtcmlnaHQtdGlsZS9hbmFsaXRpY3MtcmlnaHQtdGlsZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FuYWxpdGljcy9jb21wb25lbnRzL2FuYWxpdGljcy1yaWdodC10aWxlL2FuYWxpdGljcy1yaWdodC10aWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uY29udGFpbmVyX19pdGVtIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYig5MiwgMjQwLCAxODMpO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmNvbnRhaW5lcl9faXRlbSB7XG4gIGhlaWdodDogNTAlO1xufVxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzVjZjBiNztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsRightTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analitics-right-tile',
                templateUrl: './analitics-right-tile.component.html',
                styleUrls: ['./analitics-right-tile.component.less']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { chartContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/analitics/components/analitics-top-tile/analitics-top-tile.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/analitics/components/analitics-top-tile/analitics-top-tile.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AnaliticsTopTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsTopTileComponent", function() { return AnaliticsTopTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/activity-type.enum */ "./src/app/analitics/models/activity-type.enum.ts");
/* harmony import */ var src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dtata-services/analitics-data.service */ "./src/app/shared/dtata-services/analitics-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AnaliticsTopTileComponent_ng_container_13_ng_container_7_tr_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exportDataList_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, exportDataList_r15.date), " ", exportDataList_r15.value, " ");
} }
function AnaliticsTopTileComponent_ng_container_13_ng_container_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnaliticsTopTileComponent_ng_container_13_ng_container_7_tr_1_li_5_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subItem_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r13.exportDataList);
} }
function AnaliticsTopTileComponent_ng_container_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnaliticsTopTileComponent_ng_container_13_ng_container_7_tr_1_Template, 6, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.subIndustry);
} }
const _c0 = function (a0) { return { selected: a0 }; };
function AnaliticsTopTileComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnaliticsTopTileComponent_ng_container_13_Template_a_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r10 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toggleSelected(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnaliticsTopTileComponent_ng_container_13_ng_container_7_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r8.selected === item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.exportSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.selected === item_r10);
} }
function AnaliticsTopTileComponent_ng_container_31_ng_container_7_tr_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exportDataList_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, exportDataList_r24.date, "y"), ": ", exportDataList_r24.value, " ");
} }
function AnaliticsTopTileComponent_ng_container_31_ng_container_7_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnaliticsTopTileComponent_ng_container_31_ng_container_7_tr_1_li_5_Template, 3, 5, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subItem_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", subItem_r22.exportDataList);
} }
function AnaliticsTopTileComponent_ng_container_31_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnaliticsTopTileComponent_ng_container_31_ng_container_7_tr_1_Template, 6, 2, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19.subIndustry);
} }
function AnaliticsTopTileComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnaliticsTopTileComponent_ng_container_31_Template_a_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r19 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.toggleSelected(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AnaliticsTopTileComponent_ng_container_31_ng_container_7_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r9.selected === item_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r19.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19.exportSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.selected === item_r19);
} }
class AnaliticsTopTileComponent {
    constructor(analiticsDataService, router, activatedRoute) {
        this.analiticsDataService = analiticsDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            turnoverSum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            exportSum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        this.activityType = this.activatedRoute.snapshot.params['activityType'];
        this.activityTypeLabel = _models_activity_type_enum__WEBPACK_IMPORTED_MODULE_3__["ActivityTypeMapper"].getLabel(this.activityType);
        this.data$ = this.analiticsDataService.getAnalitics()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((clients) => {
            return this.searchForm.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((searchValue) => {
                if (searchValue) {
                    return clients.filter(f => {
                        return (f.title || '').toUpperCase().includes((searchValue.title || '').toUpperCase());
                        //  && (f.turnoverSum && f.turnoverSum.toString() || '')
                        //    .includes((searchValue.turnoverSum && searchValue.turnoverSum.toString() || ''))
                        //  && (f.exportSum && f.exportSum.toString() || '')
                        //    .includes((searchValue.exportSum && searchValue.exportSum.toString() || ''));
                    });
                }
                else {
                    return clients;
                }
            }));
        }));
    }
    // [routerLink]="[
    //   '../',
    //     {
    //       outlets: {
    //         right-tile-outlet: ['client-info-results', item.id],
    //         'bottom-tile-outlet': ['../','client-info', item.id]
    //       }
    //     }
    //   ]"
    toggleSelected(item) {
        let outlets;
        if (this.selected === item) {
            this.selected = null;
            outlets = {
                'bottom-tile-outlet': ['analitics-bottom-tile', this.activityType],
                'right-tile-outlet': ['analitics-right-tile', this.activityType],
            };
        }
        else {
            this.selected = item;
            outlets = {
                'bottom-tile-outlet': ['analitics-bottom-tile-for-subindustry', this.activityType, item.id],
                'right-tile-outlet': ['analitics-right-tile-for-subindustry', this.activityType, item.id],
            };
        }
        this.router.navigate([
            {
                outlets: outlets,
            }
        ], { relativeTo: this.activatedRoute.parent });
    }
}
AnaliticsTopTileComponent.ɵfac = function AnaliticsTopTileComponent_Factory(t) { return new (t || AnaliticsTopTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_4__["AnaliticsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
AnaliticsTopTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnaliticsTopTileComponent, selectors: [["app-analitics-top-tile"]], decls: 33, vars: 8, consts: [[1, "container", "table-wrapper", "tile--selected"], [1, "table", "tile--selected", 2, "display", "none"], [1, "table__row", "table__row-head"], [1, "table__head"], [3, "formControl"], [4, "ngFor", "ngForOf"], [1, "table-fixed"], [1, "table-fixed-header"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], [1, ""], [1, "table-fixed-content"], [1, "table__row", "table__row-data", 3, "ngClass"], [1, "table__date"], ["href", "javascript:void(0)", 3, "click"], [4, "ngIf"], ["class", "table__row table__row-sub-data", 4, "ngFor", "ngForOf"], [1, "table__row", "table__row-sub-data"], [1, "table__date", "table__date-detail"], ["href", "javascript:void(0)", 1, "toggle-link", 3, "click"], [1, "ul-progress"], ["class", "ul-progress__item", 4, "ngFor", "ngForOf"], [1, "ul-progress__item"]], template: function AnaliticsTopTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u0442\u0440\u0430\u0441\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AnaliticsTopTileComponent_ng_container_13_Template, 8, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E\u0442\u0440\u0430\u0441\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AnaliticsTopTileComponent_ng_container_31_Template, 8, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchForm.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 4, ctx.data$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchForm.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 6, ctx.data$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.table-fixed[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.table-fixed[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n}\n.table-fixed-content[_ngcontent-%COMP%] {\n  border: none;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n}\n.table__row-data[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.table__row-data[_ngcontent-%COMP%]:nth-child(even), .table__row-data[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: transparent;\n}\n.table__row-data[_ngcontent-%COMP%]:hover {\n  background-color: #263c49;\n}\n.table__row-head[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 18px;\n}\n.table_date-detail[_ngcontent-%COMP%] {\n  -webkit-column-span: 3;\n     -moz-column-span: 3;\n          column-span: 3;\n}\n.ul-progress[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0;\n}\n.ul-progress__item[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0;\n}\n.table__head[_ngcontent-%COMP%], .table__date[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.table__row.selected[_ngcontent-%COMP%] {\n  background-color: #233541;\n}\n.table__row.selected[_ngcontent-%COMP%]    ~ .table__row-sub-data[_ngcontent-%COMP%] {\n  background-color: #273a47;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbGl0aWNzL2NvbXBvbmVudHMvYW5hbGl0aWNzLXRvcC10aWxlL2Q6L015V29yay9tb3Njb3ctYWRtaW5pc3RyYXRpb24vc3JjL2FwcC9hbmFsaXRpY3MvY29tcG9uZW50cy9hbmFsaXRpY3MtdG9wLXRpbGUvYW5hbGl0aWNzLXRvcC10aWxlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hbmFsaXRpY3MvY29tcG9uZW50cy9hbmFsaXRpY3MtdG9wLXRpbGUvYW5hbGl0aWNzLXRvcC10aWxlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FER0E7RUFDRSxZQUFBO0FDREY7QURJQTtFQUNFLGlCQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7QUNIRjtBRFNBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7QUNSRjtBRFVFOztFQUVFLDZCQUFBO0FDUko7QURXRTtFQUNFLHlCQUFBO0FDVEo7QURlQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDYkY7QURpQkE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO1VBQUEsY0FBQTtBQ2ZGO0FEa0JBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFVBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtBQ2pCRjtBRG9CQTs7RUFFRSxrQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLHlCQUFBO0FDbkJGO0FEc0JBO0VBQ0UseUJBQUE7QUNwQkYiLCJmaWxlIjoic3JjL2FwcC9hbmFsaXRpY3MvY29tcG9uZW50cy9hbmFsaXRpY3MtdG9wLXRpbGUvYW5hbGl0aWNzLXRvcC10aWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4udGFibGUtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YWJsZS1maXhlZCB0aCB7XG4gIHBhZGRpbmc6IDVweCAxNHB4O1xufVxuXG4udGFibGUtZml4ZWQtY29udGVudCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuXG5cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFibGVfX3Jvdy1kYXRhIHtcbiAgY29sb3I6ICNmZmZmZmY7XG5cbiAgJjpudGgtY2hpbGQoZXZlbiksXG4gICY6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2M2M0OTtcbiAgfVxufVxuXG5cblxuLnRhYmxlX19yb3ctaGVhZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDE7XG59XG5cbi50YWJsZV9kYXRlLWRldGFpbCB7XG4gIGNvbHVtbi1zcGFuOiAzO1xufVxuXG4udWwtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDA7XG59XG5cbi51bC1wcm9ncmVzc19faXRlbSB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG5cbi50YWJsZV9faGVhZCxcbi50YWJsZV9fZGF0ZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRhYmxlX19yb3cuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNTQxO1xufVxuXG4udGFibGVfX3Jvdy5zZWxlY3RlZH4udGFibGVfX3Jvdy1zdWItZGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzNhNDc7XG4gIC8vIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2ZmZmZmZjtcbn1cbiIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFibGUtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFibGUtZml4ZWQgdGgge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbi50YWJsZS1maXhlZC1jb250ZW50IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnRhYmxlX19yb3ctZGF0YSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnRhYmxlX19yb3ctZGF0YTpudGgtY2hpbGQoZXZlbiksXG4udGFibGVfX3Jvdy1kYXRhOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udGFibGVfX3Jvdy1kYXRhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2M2M0OTtcbn1cbi50YWJsZV9fcm93LWhlYWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRhYmxlX2RhdGUtZGV0YWlsIHtcbiAgY29sdW1uLXNwYW46IDM7XG59XG4udWwtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDA7XG59XG4udWwtcHJvZ3Jlc3NfX2l0ZW0ge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLnRhYmxlX19oZWFkLFxuLnRhYmxlX19kYXRlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnRhYmxlX19yb3cuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNTQxO1xufVxuLnRhYmxlX19yb3cuc2VsZWN0ZWQgfiAudGFibGVfX3Jvdy1zdWItZGF0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzNhNDc7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsTopTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analitics-top-tile',
                templateUrl: './analitics-top-tile.component.html',
                styleUrls: ['./analitics-top-tile.component.less']
            }]
    }], function () { return [{ type: src_app_shared_dtata_services_analitics_data_service__WEBPACK_IMPORTED_MODULE_4__["AnaliticsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/analitics/models/activity-type.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/analitics/models/activity-type.enum.ts ***!
  \********************************************************/
/*! exports provided: ActivityType, ActivityTypeMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityType", function() { return ActivityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityTypeMapper", function() { return ActivityTypeMapper; });
var ActivityType;
(function (ActivityType) {
    ActivityType[ActivityType["apk"] = 0] = "apk";
    ActivityType[ActivityType["prom"] = 1] = "prom";
})(ActivityType || (ActivityType = {}));
class ActivityTypeMapper {
    static getLabel(type) {
        switch (+type) {
            case ActivityType.apk:
                return 'АПК';
                break;
            case ActivityType.prom:
                return 'ПРОМ';
                break;
        }
        return undefined;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _analitics_components_analitics_right_tile_for_subindusry_analitics_right_tile_for_subindusry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analitics/components/analitics-right-tile-for-subindusry/analitics-right-tile-for-subindusry.component */ "./src/app/analitics/components/analitics-right-tile-for-subindusry/analitics-right-tile-for-subindusry.component.ts");
/* harmony import */ var _first_page_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-page/pie-chart/pie-chart.component */ "./src/app/first-page/pie-chart/pie-chart.component.ts");
/* harmony import */ var _shared_ChildComponent_ChildComponent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ChildComponent/ChildComponent.component */ "./src/app/shared/ChildComponent/ChildComponent.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/outlet/outlet.component */ "./src/app/shared/outlet/outlet.component.ts");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/shared/shared.component.ts");
/* harmony import */ var _shared_RootPrimaryComponent_RootPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/RootPrimaryComponent/RootPrimaryComponent.component */ "./src/app/shared/RootPrimaryComponent/RootPrimaryComponent.component.ts");
/* harmony import */ var _shared_RootSecondaryComponent_RootSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/RootSecondaryComponent/RootSecondaryComponent.component */ "./src/app/shared/RootSecondaryComponent/RootSecondaryComponent.component.ts");
/* harmony import */ var _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ChildPrimaryComponent/ChildPrimaryComponent.component */ "./src/app/shared/ChildPrimaryComponent/ChildPrimaryComponent.component.ts");
/* harmony import */ var _shared_ChildSecondaryComponent_ChildSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ChildSecondaryComponent/ChildSecondaryComponent.component */ "./src/app/shared/ChildSecondaryComponent/ChildSecondaryComponent.component.ts");
/* harmony import */ var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./first-page/first-page.component */ "./src/app/first-page/first-page.component.ts");
/* harmony import */ var _clients_components_client_info_results_tile_client_info_results_tile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/components/client-info-results-tile/client-info-results-tile.component */ "./src/app/clients/components/client-info-results-tile/client-info-results-tile.component.ts");
/* harmony import */ var _clients_components_client_info_tile_client_info_tile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/components/client-info-tile/client-info-tile.component */ "./src/app/clients/components/client-info-tile/client-info-tile.component.ts");
/* harmony import */ var _general_information_components_top_tile_top_tile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./general-information/components/top-tile/top-tile.component */ "./src/app/general-information/components/top-tile/top-tile.component.ts");
/* harmony import */ var _general_information_components_bottom_tile_bottom_tile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./general-information/components/bottom-tile/bottom-tile.component */ "./src/app/general-information/components/bottom-tile/bottom-tile.component.ts");
/* harmony import */ var _clients_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/components/clients/clients.component */ "./src/app/clients/components/clients/clients.component.ts");
/* harmony import */ var _general_information_components_right_tile_right_tile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./general-information/components/right-tile/right-tile.component */ "./src/app/general-information/components/right-tile/right-tile.component.ts");
/* harmony import */ var _analitics_components_analitics_top_tile_analitics_top_tile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./analitics/components/analitics-top-tile/analitics-top-tile.component */ "./src/app/analitics/components/analitics-top-tile/analitics-top-tile.component.ts");
/* harmony import */ var _analitics_components_analitics_bottom_tile_analitics_bottom_tile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./analitics/components/analitics-bottom-tile/analitics-bottom-tile.component */ "./src/app/analitics/components/analitics-bottom-tile/analitics-bottom-tile.component.ts");
/* harmony import */ var _analitics_components_analitics_right_tile_analitics_right_tile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./analitics/components/analitics-right-tile/analitics-right-tile.component */ "./src/app/analitics/components/analitics-right-tile/analitics-right-tile.component.ts");
/* harmony import */ var _analitics_components_analitics_bottom_tile_for_subindusry_analitics_bottom_tile_for_subindusry_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./analitics/components/analitics-bottom-tile-for-subindusry/analitics-bottom-tile-for-subindusry.component */ "./src/app/analitics/components/analitics-bottom-tile-for-subindusry/analitics-bottom-tile-for-subindusry.component.ts");
























const routes = [
    {
        path: 'p',
        //loadChildren: () => import('./first-page/first-page.module').then(module => module.FirstPageModule)
        component: _shared_shared_component__WEBPACK_IMPORTED_MODULE_6__["SharedComponent"],
        children: [
            {
                path: 'pathName',
                component: _shared_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_5__["OutletComponent"],
                outlet: 'outletName'
            },
        ]
    },
    {
        path: 'first-page',
        loadChildren: () => __webpack_require__.e(/*! import() | first-page-first-page-module */ "first-page-first-page-module").then(__webpack_require__.bind(null, /*! ./first-page/first-page.module */ "./src/app/first-page/first-page.module.ts")).then(module => module.FirstPageModule)
    },
    {
        path: 'pathName',
        component: _shared_outlet_outlet_component__WEBPACK_IMPORTED_MODULE_5__["OutletComponent"],
        outlet: 'outletName'
    },
    // {
    //   path: '',
    //   component: SharedComponent,
    //
    // },
    {
        path: '',
        redirectTo: 'first-page',
        pathMatch: 'full'
    },
];
const appRoutes = [
    { path: '', component: _shared_RootPrimaryComponent_RootPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_7__["RootPrimaryComponent"] },
    { path: 'rootSecondaryPath', component: _shared_RootSecondaryComponent_RootSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_8__["RootSecondaryComponent"], outlet: 'rootSecondary' },
    {
        path: 'child', component: _shared_ChildComponent_ChildComponent_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"],
        children: [
            { path: '', component: _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__["ChildPrimaryComponent"] },
            { path: 'childSecondaryPath', component: _shared_ChildSecondaryComponent_ChildSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_10__["ChildSecondaryComponent"], outlet: 'childSecondary' },
        ]
    },
    // {
    //   path: 'first-page',
    //   loadChildren: () => import('./first-page/first-page.module').then(module => module.FirstPageModule)
    // },
    {
        path: 'first-page', component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_11__["FirstPageComponent"],
        children: [
            { path: '', component: _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__["ChildPrimaryComponent"] },
            { path: 'childSecondaryPath', component: _first_page_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__["PieChartComponent"], outlet: 'right-tile-outlet' },
            { path: 'client-info-results/:clientId', component: _clients_components_client_info_results_tile_client_info_results_tile_component__WEBPACK_IMPORTED_MODULE_12__["ClientInfoResultsTileComponent"], outlet: 'right-tile-outlet' },
            { path: 'client-info/:clientId', component: _clients_components_client_info_tile_client_info_tile_component__WEBPACK_IMPORTED_MODULE_13__["ClientInfoTileComponent"], outlet: 'bottom-tile-outlet' },
            { path: 'clients-top-tile', component: _clients_components_clients_clients_component__WEBPACK_IMPORTED_MODULE_16__["ClientsComponent"], outlet: 'top-tile-outlet' },
            { path: 'clients-right-tile', component: _clients_components_client_info_results_tile_client_info_results_tile_component__WEBPACK_IMPORTED_MODULE_12__["ClientInfoResultsTileComponent"], outlet: 'right-tile-outlet' },
            { path: 'analitics-top-tile/:activityType', component: _analitics_components_analitics_top_tile_analitics_top_tile_component__WEBPACK_IMPORTED_MODULE_18__["AnaliticsTopTileComponent"], outlet: 'top-tile-outlet' },
            { path: 'analitics-bottom-tile/:activityType', component: _analitics_components_analitics_bottom_tile_analitics_bottom_tile_component__WEBPACK_IMPORTED_MODULE_19__["AnaliticsBottomTileComponent"], outlet: 'bottom-tile-outlet' },
            {
                path: 'analitics-bottom-tile-for-subindustry/:activityType/:industry',
                component: _analitics_components_analitics_bottom_tile_for_subindusry_analitics_bottom_tile_for_subindusry_component__WEBPACK_IMPORTED_MODULE_21__["AnaliticsBottomTileForSubIndustryComponent"], outlet: 'bottom-tile-outlet'
            },
            { path: 'analitics-right-tile/:activityType', component: _analitics_components_analitics_right_tile_analitics_right_tile_component__WEBPACK_IMPORTED_MODULE_20__["AnaliticsRightTileComponent"], outlet: 'right-tile-outlet' },
            {
                path: 'analitics-right-tile-for-subindustry/:activityType/:industry',
                component: _analitics_components_analitics_right_tile_for_subindusry_analitics_right_tile_for_subindusry_component__WEBPACK_IMPORTED_MODULE_0__["AnaliticsRightTileForSubIndustryComponent"], outlet: 'right-tile-outlet'
            },
            { path: 'general-top-tile', component: _general_information_components_top_tile_top_tile_component__WEBPACK_IMPORTED_MODULE_14__["TopTileComponent"], outlet: 'top-tile-outlet' },
            { path: 'general-bottom-tile', component: _general_information_components_bottom_tile_bottom_tile_component__WEBPACK_IMPORTED_MODULE_15__["BottomTileComponent"], outlet: 'bottom-tile-outlet' },
            { path: 'general-right-tile', component: _general_information_components_right_tile_right_tile_component__WEBPACK_IMPORTED_MODULE_17__["RightTileComponent"], outlet: 'right-tile-outlet' },
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'moscow-administration';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_ChildSecondaryComponent_ChildSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ChildSecondaryComponent/ChildSecondaryComponent.component */ "./src/app/shared/ChildSecondaryComponent/ChildSecondaryComponent.component.ts");
/* harmony import */ var _shared_RootPrimaryComponent_RootPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/RootPrimaryComponent/RootPrimaryComponent.component */ "./src/app/shared/RootPrimaryComponent/RootPrimaryComponent.component.ts");
/* harmony import */ var _shared_RootSecondaryComponent_RootSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/RootSecondaryComponent/RootSecondaryComponent.component */ "./src/app/shared/RootSecondaryComponent/RootSecondaryComponent.component.ts");
/* harmony import */ var _shared_ChildComponent_ChildComponent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/ChildComponent/ChildComponent.component */ "./src/app/shared/ChildComponent/ChildComponent.component.ts");
/* harmony import */ var _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ChildPrimaryComponent/ChildPrimaryComponent.component */ "./src/app/shared/ChildPrimaryComponent/ChildPrimaryComponent.component.ts");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/shared/shared.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_RootPrimaryComponent_RootPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_6__["RootPrimaryComponent"],
        _shared_RootSecondaryComponent_RootSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_7__["RootSecondaryComponent"],
        _shared_ChildComponent_ChildComponent_component__WEBPACK_IMPORTED_MODULE_8__["ChildComponent"],
        _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__["ChildPrimaryComponent"],
        _shared_ChildSecondaryComponent_ChildSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_5__["ChildSecondaryComponent"],
        _shared_shared_component__WEBPACK_IMPORTED_MODULE_10__["SharedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_RootPrimaryComponent_RootPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_6__["RootPrimaryComponent"],
                    _shared_RootSecondaryComponent_RootSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_7__["RootSecondaryComponent"],
                    _shared_ChildComponent_ChildComponent_component__WEBPACK_IMPORTED_MODULE_8__["ChildComponent"],
                    _shared_ChildPrimaryComponent_ChildPrimaryComponent_component__WEBPACK_IMPORTED_MODULE_9__["ChildPrimaryComponent"],
                    _shared_ChildSecondaryComponent_ChildSecondaryComponent_component__WEBPACK_IMPORTED_MODULE_5__["ChildSecondaryComponent"],
                    _shared_shared_component__WEBPACK_IMPORTED_MODULE_10__["SharedComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clients/components/client-info-results-tile/client-info-results-tile.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/clients/components/client-info-results-tile/client-info-results-tile.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ClientInfoResultsTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoResultsTileComponent", function() { return ClientInfoResultsTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");





const _c0 = ["chartContainer"];
class ClientInfoResultsTileComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create map instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](this.chartContainer.nativeElement, _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
            const chart = this.chart;
            // Set map definition
            chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_3__["default"];
            // Set projection
            chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
            // Create map polygon series
            const polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = '{name}';
            polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('gray');
            // Create hover state and set alternative fill color
            const hs = polygonTemplate.states.create('hover');
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
            // Remove Antarctica
            polygonSeries.exclude = ['AQ'];
            const color1 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F05C5C');
            const color2 = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('rgb(92, 240, 183)');
            // Add some data
            polygonSeries.data = [
                {
                    id: 'US',
                    name: 'United States',
                    value: 100,
                    fill: color1
                },
                {
                    id: 'FR',
                    name: 'France',
                    value: 50,
                    fill: color1
                },
                {
                    id: 'CN',
                    name: 'China',
                    value: 500,
                    fill: color2
                },
                {
                    id: 'BH',
                    name: 'Bahrain',
                    value: 50,
                    fill: color2
                },
                {
                    id: 'BR',
                    name: 'Brazil',
                    value: 50,
                    fill: color2
                },
            ];
            // Bind "fill" property to "fill" key in data
            polygonTemplate.propertyFields.fill = 'fill';
            // Create image series
            const imageSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapImageSeries"]());
            // Create a circle image in image series template so it gets replicated to all new images
            const imageSeriesTemplate = imageSeries.mapImages.template;
            const circle = imageSeriesTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Circle"]);
            circle.radius = 4;
            circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#B27799');
            circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#FFFFFF');
            circle.strokeWidth = 2;
            circle.nonScaling = true;
            circle.tooltipText = '{title}';
            // Set property fields
            imageSeriesTemplate.propertyFields.latitude = 'latitude';
            imageSeriesTemplate.propertyFields.longitude = 'longitude';
            // Add data for the three cities
            imageSeries.data = [{
                    latitude: 48.856614,
                    longitude: 2.352222,
                    title: 'Paris'
                }, {
                    latitude: 40.712775,
                    longitude: -74.005973,
                    title: 'New York'
                }, {
                    latitude: 49.282729,
                    longitude: -123.120738,
                    title: 'Vancouver'
                }];
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
ClientInfoResultsTileComponent.ɵfac = function ClientInfoResultsTileComponent_Factory(t) { return new (t || ClientInfoResultsTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ClientInfoResultsTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientInfoResultsTileComponent, selectors: [["app-client-info-results-tile"]], viewQuery: function ClientInfoResultsTileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, decls: 17, vars: 0, consts: [[1, "container", "tile--selected"], [1, "container__item"], [1, "widget__title", "widget__title--black"], [1, "widget__chart"], [1, "chart-container"], ["chartContainer", ""], [1, "line-bar"]], template: function ClientInfoResultsTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  padding: 0 20px;\r\n}\r\n\r\n.container__item[_ngcontent-%COMP%] {\r\n  height: 50%;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  color: rgb(92, 240, 183);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jb21wb25lbnRzL2NsaWVudC1pbmZvLXJlc3VsdHMtdGlsZS9jbGllbnQtaW5mby1yZXN1bHRzLXRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnQtaW5mby1yZXN1bHRzLXRpbGUvY2xpZW50LWluZm8tcmVzdWx0cy10aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcl9faXRlbSB7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiByZ2IoOTIsIDI0MCwgMTgzKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientInfoResultsTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-info-results-tile',
                templateUrl: './client-info-results-tile.component.html',
                styleUrls: ['./client-info-results-tile.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { chartContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/clients/components/client-info-tile/client-info-tile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/clients/components/client-info-tile/client-info-tile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClientInfoTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoTileComponent", function() { return ClientInfoTileComponent; });
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





class ClientInfoTileComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            /* Set themes */
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__["default"]);
            /* Create chart instance */
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('clientInfoChartDiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarChart"]);
            const chart = this.chart;
            chart.data = [
                {
                    category: 'Оборот	компании',
                    value1: 153,
                },
                {
                    category: 'Экспортный	оборот',
                    value2: 132
                },
            ];
            chart.colors.step = 4;
            // chart.dateFormatter.inputDateFormat = 'YYYY-MM-dd';
            chart.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](90);
            chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
            const categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'category';
            categoryAxis.renderer.labels.template.location = 0.5;
            categoryAxis.renderer.labels.template.horizontalCenter = 'right';
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.tooltipLocation = 0.5;
            categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
            categoryAxis.renderer.minGridDistance = 10;
            // categoryAxis.mouseEnabled = false;
            categoryAxis.tooltip.disabled = true;
            categoryAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#ffffff');
            const valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["ValueAxis"]());
            //  valueAxis.renderer.labels.template.horizontalCenter = 'center';
            valueAxis.strictMinMax = true;
            valueAxis.renderer.maxLabelPosition = 0.99;
            valueAxis.renderer.grid.template.strokeOpacity = 0.07;
            valueAxis.min = 0;
            valueAxis.max = 200;
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            const series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarColumnSeries"]());
            series1.name = 'Series 1';
            // series1.dataFields.openDateX = 'startDate2';
            series1.dataFields.valueX = 'value1';
            series1.dataFields.categoryY = 'category';
            // series1.clustered = false;
            series1.columns.template.radarColumn.cornerRadius = 30;
            series1.columns.template.tooltipText = '{category}: {valueX}';
            series1.zIndex = 3;
            const series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarColumnSeries"]());
            series2.name = 'Series 2';
            // series2.dataFields.openDateX = 'startDate2';
            series2.dataFields.valueX = 'value2';
            series2.dataFields.categoryY = 'category';
            // series2.clustered = false;
            series2.columns.template.radarColumn.cornerRadius = 30;
            series2.columns.template.tooltipText = '{category}: {valueX}';
            series2.zIndex = 2;
            chart.seriesContainer.zIndex = -1;
            // chart.scrollbarX = new am4core.Scrollbar();
            // chart.scrollbarY = new am4core.Scrollbar();
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarCursor"]();
            chart.cursor.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
            chart.cursor.lineY.disabled = true;
            const yearLabel = chart.radarContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]);
            yearLabel.text = '200';
            yearLabel.fontSize = 30;
            yearLabel.horizontalCenter = 'middle';
            yearLabel.verticalCenter = 'middle';
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
ClientInfoTileComponent.ɵfac = function ClientInfoTileComponent_Factory(t) { return new (t || ClientInfoTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
ClientInfoTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClientInfoTileComponent, selectors: [["app-client-info-tile"]], decls: 14, vars: 0, consts: [[1, "container", "tile--selected"], [1, "container__item"], ["id", "clientInfoChartDiv"]], template: function ClientInfoTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n}\r\n\r\n.container__item[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n#clientInfoChartDiv[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jb21wb25lbnRzL2NsaWVudC1pbmZvLXRpbGUvY2xpZW50LWluZm8tdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnQtaW5mby10aWxlL2NsaWVudC1pbmZvLXRpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyX19pdGVtIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jY2xpZW50SW5mb0NoYXJ0RGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ClientInfoTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-client-info-tile',
                templateUrl: './client-info-tile.component.html',
                styleUrls: ['./client-info-tile.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/clients/components/clients/clients.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/clients/components/clients/clients.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_dtata_services_clients_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dtata-services/clients-data.service */ "./src/app/shared/dtata-services/clients-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ClientsComponent_ng_container_21_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.segment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.product);
} }
const _c0 = function (a0) { return { selected: a0 }; };
function ClientsComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClientsComponent_ng_container_21_Template_a_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggleSelected(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ClientsComponent_ng_container_21_tr_9_Template, 11, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r2.selected === item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.turnoverSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.exportSum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selected === item_r3);
} }
class ClientsComponent {
    constructor(clientsDataService, router, activatedRoute) {
        this.clientsDataService = clientsDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            turnoverSum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            exportSum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    }
    ngOnInit() {
        this.clients$ = this.clientsDataService.getClients()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((clients) => {
            return this.searchForm.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((searchValue) => {
                if (searchValue) {
                    return clients.filter(f => {
                        return (f.title || '').toUpperCase().includes((searchValue.title || '').toUpperCase())
                            && (f.turnoverSum && f.turnoverSum.toString() || '')
                                .includes((searchValue.turnoverSum && searchValue.turnoverSum.toString() || ''))
                            && (f.exportSum && f.exportSum.toString() || '')
                                .includes((searchValue.exportSum && searchValue.exportSum.toString() || ''));
                    });
                }
                else {
                    return clients;
                }
            }));
        }));
    }
    // [routerLink]="[
    //   '../',
    //     {
    //       outlets: {
    //         right-tile-outlet: ['client-info-results', item.id],
    //         'bottom-tile-outlet': ['../','client-info', item.id]
    //       }
    //     }
    //   ]"
    toggleSelected(item) {
        let outlets;
        if (this.selected === item) {
            this.selected = null;
            outlets = {
                'bottom-tile-outlet': ['general-bottom-tile'],
                'right-tile-outlet': ['general-right-tile'],
            };
        }
        else {
            this.selected = item;
            outlets = {
                'right-tile-outlet': ['client-info-results', 0],
                'bottom-tile-outlet': ['client-info', 0]
            };
        }
        this.router.navigate([
            {
                outlets: outlets,
            }
        ], { relativeTo: this.activatedRoute.parent });
    }
}
ClientsComponent.ɵfac = function ClientsComponent_Factory(t) { return new (t || ClientsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_dtata_services_clients_data_service__WEBPACK_IMPORTED_MODULE_3__["ClientsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ClientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsComponent, selectors: [["app-clients"]], decls: 23, vars: 6, consts: [[1, "container", "table-wrapper", "tile--selected"], [1, "table-fixed"], [1, "table-fixed-header"], ["cellpadding", "0", "cellspacing", "0", "border", "0"], [1, ""], [1, "table__head"], [3, "formControl"], [1, "table-fixed-content"], [4, "ngFor", "ngForOf"], [1, "table__row", "table__row-data", 3, "ngClass"], [1, "table__date"], ["href", "javascript:void(0)", 1, "toggle-link", 3, "click"], ["class", "table__row", 4, "ngIf"], [1, "table__row"], ["colspan", "3", 1, "table__date", "table__date__detail"]], template: function ClientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0431\u043E\u0440\u043E\u0442 (\u043C\u043B\u043D \u0440\u0443\u0431.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 (\u043C\u043B\u043D \u0440\u0443\u0431.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClientsComponent_ng_container_21_Template, 10, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchForm.get("title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchForm.get("turnoverSum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchForm.get("exportSum"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 4, ctx.clients$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.table-fixed[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.table-fixed[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px 14px;\n}\n.table-fixed-content[_ngcontent-%COMP%] {\n  border: none;\n}\n.table__row-data[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.table__row-data[_ngcontent-%COMP%]:nth-child(even), .table__row-data[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: transparent;\n}\n.table__row-data[_ngcontent-%COMP%]:hover {\n  background-color: #263c49;\n}\n.table__row-head[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 18px;\n}\n.table_date__detail[_ngcontent-%COMP%] {\n  -webkit-column-span: 3;\n     -moz-column-span: 3;\n          column-span: 3;\n}\n.table__head[_ngcontent-%COMP%], .table__date[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.table__row.selected[_ngcontent-%COMP%], .table__row.selected[_ngcontent-%COMP%]    + .table__row[_ngcontent-%COMP%] {\n  background-color: #233541;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50cy9jb21wb25lbnRzL2NsaWVudHMvZDovTXlXb3JrL21vc2Nvdy1hZG1pbmlzdHJhdGlvbi9zcmMvYXBwL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2NsaWVudHMvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsaUJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtBQ0ZGO0FES0E7RUFDRSxjQUFBO0FDSEY7QURLRTs7RUFFRSw2QkFBQTtBQ0hKO0FETUU7RUFDRSx5QkFBQTtBQ0pKO0FEUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ05GO0FEVUE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO1VBQUEsY0FBQTtBQ1JGO0FEV0E7O0VBRUUsa0JBQUE7QUNURjtBRFlBOztFQUVFLHlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRhYmxlLWZpeGVkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFibGUtZml4ZWQgdGgge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cblxuLnRhYmxlLWZpeGVkLWNvbnRlbnQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50YWJsZV9fcm93LWRhdGEge1xuICBjb2xvcjogI2ZmZmZmZjtcblxuICAmOm50aC1jaGlsZChldmVuKSxcbiAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzYzQ5O1xuICB9XG59XG5cbi50YWJsZV9fcm93LWhlYWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNTQxO1xufVxuXG4udGFibGVfZGF0ZV9fZGV0YWlsIHtcbiAgY29sdW1uLXNwYW46IDM7XG59XG5cbi50YWJsZV9faGVhZCxcbi50YWJsZV9fZGF0ZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnRhYmxlX19yb3cuc2VsZWN0ZWQsXG4udGFibGVfX3Jvdy5zZWxlY3RlZCsudGFibGVfX3JvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDE7XG4gIC8vIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2ZmZmZmZjtcbn1cbiIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFibGUtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFibGUtZml4ZWQgdGgge1xuICBwYWRkaW5nOiA1cHggMTRweDtcbn1cbi50YWJsZS1maXhlZC1jb250ZW50IHtcbiAgYm9yZGVyOiBub25lO1xufVxuLnRhYmxlX19yb3ctZGF0YSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnRhYmxlX19yb3ctZGF0YTpudGgtY2hpbGQoZXZlbiksXG4udGFibGVfX3Jvdy1kYXRhOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udGFibGVfX3Jvdy1kYXRhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2M2M0OTtcbn1cbi50YWJsZV9fcm93LWhlYWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRhYmxlX2RhdGVfX2RldGFpbCB7XG4gIGNvbHVtbi1zcGFuOiAzO1xufVxuLnRhYmxlX19oZWFkLFxuLnRhYmxlX19kYXRlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLnRhYmxlX19yb3cuc2VsZWN0ZWQsXG4udGFibGVfX3Jvdy5zZWxlY3RlZCArIC50YWJsZV9fcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzU0MTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clients',
                templateUrl: './clients.component.html',
                styleUrls: ['./clients.component.less']
            }]
    }], function () { return [{ type: src_app_shared_dtata_services_clients_data_service__WEBPACK_IMPORTED_MODULE_3__["ClientsDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/bar-chart/bar-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/first-page/bar-chart/bar-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");




class BarChartComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            const data = [];
            let visits = 10;
            for (let i = 1; i < 12; i++) {
                visits += Math.round((Math.random()) * Math.random() * 10);
                data.push({
                    date: new Date(2019, i, 0),
                    name: 'name' + i,
                    value: visits,
                });
            }
            // Create chart instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('barchartdiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            // Add data
            this.chart.data = data;
            // Create axes
            const categoryAxis = this.chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
            categoryAxis.renderer.grid.template.strokeOpacity = 0;
            categoryAxis.renderer.labels.template.disabled = true;
            // categoryAxis
            // categoryAxis.title.text = 'Countries';
            const valueAxis = this.chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            valueAxis.renderer.grid.template.strokeOpacity = 0;
            valueAxis.renderer.labels.template.disabled = true;
            // valueAxis.tooltip
            // valueAxis.title.text = 'Litres sold (M)';
            // Create series
            const series = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ColumnSeries"]());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'value';
            series.name = 'Sales';
            series.columns.template.tooltipText = '{date}\nПоказатель: {valueY}';
            series.columns.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('rgb(47,151,214)'); // fill
            var columnTemplate = series.columns.template;
            columnTemplate.width = 10;
            // columnTemplate.column.cornerRadiusTopLeft = 20;
            // columnTemplate.column.cornerRadiusTopRight = 20;
            columnTemplate.strokeOpacity = 0;
            // let series2 = this.chart.series.push(new am4charts.LineSeries());
            // series2.name = 'Units';
            // series2.stroke = am4core.color('#CDA2AB');
            // series2.strokeWidth = 3;
            // series2.dataFields.valueY = 'units';
            // series2.dataFields.categoryX = 'country';
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], decls: 1, vars: 0, consts: [["id", "barchartdiv", 2, "width", "100%", "height", "100%"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/chart/chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/first-page/chart/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");




class ChartComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            const chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('chartdiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChart"]);
            chart.paddingRight = 20;
            const data = [];
            let visits = 10;
            let visits2 = 15;
            for (let i = 1; i < 10; i++) {
                visits += Math.round((Math.random()) * Math.random() * 10);
                visits2 += Math.round((Math.random()) * Math.random() * 10);
                data.push({
                    date: new Date(2010 + i, 0, 0),
                    name: 'name' + i,
                    value: visits,
                    value2: visits2,
                });
            }
            chart.data = data;
            const dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["DateAxis"]());
            dateAxis.renderer.grid.template.location = 0;
            dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#ffffff');
            const valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.minWidth = 35;
            valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#ffffff');
            valueAxis.title.text = 'млрд $';
            valueAxis.title.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#ffffff');
            const series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
            // series.data = data;
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'value';
            series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]());
            const series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["LineSeries"]());
            series2.dataFields.dateX = 'date';
            series2.dataFields.valueY = 'value2';
            series2.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]());
            series.tooltipText = '{valueY.value}';
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYCursor"]();
            const scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["XYChartScrollbar"]();
            scrollbarX.series.push(series);
            // scrollbarX.series.push(series2);
            // chart.scrollbarX = scrollbarX;
            this.chart = chart;
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 1, vars: 0, consts: [["id", "chartdiv", 2, "width", "100%", "height", "100%"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvY2hhcnQvY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/first-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/first-page/first-page.component.ts ***!
  \****************************************************/
/*! exports provided: FirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function() { return FirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analitics/models/activity-type.enum */ "./src/app/analitics/models/activity-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/first-page/bar-chart/bar-chart.component.ts");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ "./src/app/first-page/pie-chart/pie-chart.component.ts");







const _c0 = function (a0) { return { "tile--selected": a0 }; };
class FirstPageComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.router.navigate([
            {
                outlets: {
                    'top-tile-outlet': ['general-top-tile'],
                    'bottom-tile-outlet': ['general-bottom-tile'],
                    'right-tile-outlet': ['general-right-tile'],
                }
            },
        ], { relativeTo: this.activatedRoute });
    }
    toggle(tab) {
        let rout;
        const oulets = {
            'top-tile-outlet': ['general-top-tile'],
            'bottom-tile-outlet': ['general-bottom-tile'],
            'right-tile-outlet': ['general-right-tile'],
        };
        if (this.currentTab === tab) {
            this.currentTab = null;
            rout = 'general-top-tile';
        }
        else {
            this.currentTab = tab;
            switch (tab) {
                case 'client':
                    oulets['top-tile-outlet'] = ['clients-top-tile'];
                    break;
                case 'apk':
                    oulets['top-tile-outlet'] = ['analitics-top-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].apk];
                    oulets['bottom-tile-outlet'] = ['analitics-bottom-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].apk];
                    oulets['right-tile-outlet'] = ['analitics-right-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].apk];
                    break;
                case 'prom':
                    oulets['top-tile-outlet'] = ['analitics-top-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].prom];
                    oulets['bottom-tile-outlet'] = ['analitics-bottom-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].prom];
                    oulets['right-tile-outlet'] = ['analitics-right-tile', _analitics_models_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityType"].prom];
                    break;
                default:
                    break;
            }
        }
        this.router.navigate([
            {
                outlets: oulets
            },
        ], { relativeTo: this.activatedRoute });
    }
}
FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) { return new (t || FirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstPageComponent, selectors: [["app-first-page"]], decls: 38, vars: 6, consts: [[1, "page"], [1, "workspace"], [1, "workspace__column1"], [1, "logo"], ["src", "assets/images/logo.png"], [1, "widget", "widget-clients", "tile-tab", 3, "ngClass", "click"], [1, "widget__title", "widget__title-clients"], [1, "widget__title"], [1, "line-bar"], [1, "line-bar__value", "line-bar__value1"], [1, "line-bar__value", "line-bar__value2"], [1, "line-bar__value", "line-bar__value3"], [1, "widget", "widget-analytics", 3, "ngClass"], [1, "widget__chart"], [1, "widget-analytics__buttons"], ["href", "javascript:void(0)", 3, "click"], [1, "widget", "widget-kpi"], [1, "workspace__column2"], [1, "widget"], ["name", "top-tile-outlet"], ["name", "bottom-tile-outlet"], [1, "workspace__column3"], ["name", "right-tile-outlet"]], template: function FirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstPageComponent_Template_section_click_6_listener($event) { return ctx.toggle("client"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-bar-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstPageComponent_Template_a_click_21_listener($event) { return ctx.toggle("apk"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0410\u043F\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstPageComponent_Template_a_click_23_listener($event) { return ctx.toggle("prom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041F\u0440\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "KPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-pie-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.currentTab === "client"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.currentTab === "apk" || ctx.currentTab === "prom"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["BarChartComponent"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["PieChartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".page[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #1e2f39;\n}\n.workspace[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n.workspace__column1[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.workspace__column2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.workspace__column3[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  background-color: #233947;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.tile-tab[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.logo[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n  background-color: #00142b;\n  margin: 0px 6px 6px 0;\n}\n.widget[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding-top: 0;\n}\n  .widget__block {\n  margin: 0px 6px 6px 0;\n}\n  .widget__block--black {\n  background-color: #233541;\n}\n  .widget__block--light {\n  background-color: #233543;\n}\n.block-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: normal;\n}\n.workspace__column1[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: calc((100vh - 62px) / 3);\n  background-color: #233947;\n  margin: 0px 6px 6px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0;\n}\n.workspace__column1[_ngcontent-%COMP%]   .widget--selected[_ngcontent-%COMP%] {\n  background-color: #19272f;\n}\n.widget__title[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: normal;\n  margin: 0 20px 0 20px;\n}\n.widget__title--black[_ngcontent-%COMP%] {\n  background-color: #233541;\n  padding: 20px;\n}\n.widget__title--light[_ngcontent-%COMP%] {\n  background-color: #233543;\n  padding: 20px;\n}\n.workspace__column1[_ngcontent-%COMP%]   .widget-clients[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.widget-clients[_ngcontent-%COMP%]   .widget__title[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n}\n.widget__title-clients[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.line-bar[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  margin: 0 60px;\n}\n.line-bar__value[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 10px;\n  margin-right: 2px;\n}\n.line-bar__value1[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: #4eb092;\n}\n.line-bar__value2[_ngcontent-%COMP%] {\n  width: 30%;\n  background-color: #36a7b6;\n}\n.line-bar__value3[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #3f92c2;\n}\n.widget__chart[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.widget-analytics__buttons[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n.workspace__column2[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: calc(100vh / 2);\n  margin: 0px 6px 6px 0;\n  border-bottom: 2px solid #233947;\n  overflow-y: auto;\n}\n.widget-export__chart[_ngcontent-%COMP%] {\n  position: relative;\n  height: 250px;\n}\n.workspace__column3[_ngcontent-%COMP%]   .widget[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QtcGFnZS9kOi9NeVdvcmsvbW9zY293LWFkbWluaXN0cmF0aW9uL3NyYy9hcHAvZmlyc3QtcGFnZS9maXJzdC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9maXJzdC1wYWdlL2ZpcnN0LXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUNDRjtBREVBO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZGO0FES0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0pGO0FET0E7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDUEY7QURXQTtFQUNFLGVBQUE7QUNURjtBRGVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ2JGO0FEZ0JBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDZEY7QURrQkE7RUFDRSxxQkFBQTtBQ2hCRjtBRGtCRTtFQUNFLHlCQUFBO0FDaEJKO0FEbUJFO0VBQ0UseUJBQUE7QUNqQko7QURxQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDbkJGO0FEc0JBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxxQkFBQTtBQ3ZCRjtBRHlCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ3ZCSjtBRDBCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ3hCSjtBRCtCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUM3QkY7QURnQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsZUFBQTtBQy9CRjtBRGtDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxjQUFBO0FDakNGO0FEb0NBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNyQ0Y7QUQwQ0E7RUFDRSxtQkFBQTtVQUFBLFlBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtBQ3pDRjtBRDZDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUMzQ0Y7QUQrQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUM3Q0Y7QURrREE7RUFDRSxZQUFBO0FDaERGIiwiZmlsZSI6InNyYy9hcHAvZmlyc3QtcGFnZS9maXJzdC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMmYzOTtcbn1cblxuLndvcmtzcGFjZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLndvcmtzcGFjZV9fY29sdW1uMSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud29ya3NwYWNlX19jb2x1bW4yIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53b3Jrc3BhY2VfX2NvbHVtbjMge1xuXG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzk0NztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vLyAjcmVnaW9uIHRhYlxuLnRpbGUtdGFiIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vLyAjZW5kcmVnaW9uXG5cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxNDJiO1xuICBtYXJnaW46IDBweCA2cHggNnB4IDA7XG59XG5cbi53aWRnZXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuXG46Om5nLWRlZXAgLndpZGdldF9fYmxvY2sge1xuICBtYXJnaW46IDBweCA2cHggNnB4IDA7XG5cbiAgJi0tYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDE7XG4gIH1cblxuICAmLS1saWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzU0MztcbiAgfVxufVxuXG4uYmxvY2stdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ud29ya3NwYWNlX19jb2x1bW4xIC53aWRnZXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNjJweCkgLyAzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzk0NztcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLndvcmtzcGFjZV9fY29sdW1uMSAud2lkZ2V0LS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MmY7XG59XG5cbi53aWRnZXRfX3RpdGxlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuXG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcblxuICAmLS1ibGFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzU0MTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgJi0tbGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG59XG5cblxuXG4ud29ya3NwYWNlX19jb2x1bW4xIC53aWRnZXQtY2xpZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2lkZ2V0LWNsaWVudHMgLndpZGdldF9fdGl0bGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi53aWRnZXRfX3RpdGxlLWNsaWVudHMge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5saW5lLWJhciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcblxuICBtYXJnaW46IDAgNjBweDtcbn1cblxuLmxpbmUtYmFyX192YWx1ZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5saW5lLWJhcl9fdmFsdWUxIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlYjA5Mjtcbn1cblxuLmxpbmUtYmFyX192YWx1ZTIge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzZhN2I2O1xufVxuXG4ubGluZS1iYXJfX3ZhbHVlMyB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjkyYzI7XG59XG5cblxuXG4ud2lkZ2V0X19jaGFydCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLndpZGdldC1hbmFseXRpY3NfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuXG4ud29ya3NwYWNlX19jb2x1bW4yIC53aWRnZXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLyAyKTtcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzMzk0NztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuXG4ud2lkZ2V0LWV4cG9ydF9fY2hhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cblxuXG4ud29ya3NwYWNlX19jb2x1bW4zIC53aWRnZXQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIucGFnZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyZjM5O1xufVxuLndvcmtzcGFjZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi53b3Jrc3BhY2VfX2NvbHVtbjEge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud29ya3NwYWNlX19jb2x1bW4yIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndvcmtzcGFjZV9fY29sdW1uMyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzk0NztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50aWxlLXRhYiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTQyYjtcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xufVxuLndpZGdldCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuOjpuZy1kZWVwIC53aWRnZXRfX2Jsb2NrIHtcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xufVxuOjpuZy1kZWVwIC53aWRnZXRfX2Jsb2NrLS1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDE7XG59XG46Om5nLWRlZXAgLndpZGdldF9fYmxvY2stLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzU0Mztcbn1cbi5ibG9jay10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ud29ya3NwYWNlX19jb2x1bW4xIC53aWRnZXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoKDEwMHZoIC0gNjJweCkgLyAzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzk0NztcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi53b3Jrc3BhY2VfX2NvbHVtbjEgLndpZGdldC0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyNzJmO1xufVxuLndpZGdldF9fdGl0bGUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbn1cbi53aWRnZXRfX3RpdGxlLS1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzM1NDE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ud2lkZ2V0X190aXRsZS0tbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzNTQzO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLndvcmtzcGFjZV9fY29sdW1uMSAud2lkZ2V0LWNsaWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53aWRnZXQtY2xpZW50cyAud2lkZ2V0X190aXRsZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cbi53aWRnZXRfX3RpdGxlLWNsaWVudHMge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4ubGluZS1iYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2MHB4O1xufVxuLmxpbmUtYmFyX192YWx1ZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4ubGluZS1iYXJfX3ZhbHVlMSB7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZWIwOTI7XG59XG4ubGluZS1iYXJfX3ZhbHVlMiB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNmE3YjY7XG59XG4ubGluZS1iYXJfX3ZhbHVlMyB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjkyYzI7XG59XG4ud2lkZ2V0X19jaGFydCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi53aWRnZXQtYW5hbHl0aWNzX19idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ud29ya3NwYWNlX19jb2x1bW4yIC53aWRnZXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLyAyKTtcbiAgbWFyZ2luOiAwcHggNnB4IDZweCAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIzMzk0NztcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi53aWRnZXQtZXhwb3J0X19jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi53b3Jrc3BhY2VfX2NvbHVtbjMgLndpZGdldCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-first-page',
                templateUrl: './first-page.component.html',
                styleUrls: ['./first-page.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/map-chart/map-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/first-page/map-chart/map-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: MapChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChartComponent", function() { return MapChartComponent; });
/* harmony import */ var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4-geodata/worldLow */ "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/maps */ "./node_modules/@amcharts/amcharts4/maps.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





class MapChartComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create map instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('mapchartdiv', _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapChart"]);
            const chart = this.chart;
            // Set map definition
            chart.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_0__["default"];
            // Set projection
            chart.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["projections"].Miller();
            // Create map polygon series
            const polygonSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapPolygonSeries"]());
            // Make map load polygon (like country names) data from GeoJSON
            polygonSeries.useGeodata = true;
            // Configure series
            const polygonTemplate = polygonSeries.mapPolygons.template;
            polygonTemplate.tooltipText = '{name}';
            polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#74B266');
            // Create hover state and set alternative fill color
            const hs = polygonTemplate.states.create('hover');
            hs.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#367B25');
            // Remove Antarctica
            polygonSeries.exclude = ['AQ'];
            // Add some data
            polygonSeries.data = [{
                    id: 'US',
                    name: 'United States',
                    value: 100,
                }, {
                    id: 'FR',
                    name: 'France',
                    value: 50,
                }];
            // Bind "fill" property to "fill" key in data
            polygonTemplate.propertyFields.fill = 'fill';
            // Create image series
            const imageSeries = chart.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_2__["MapImageSeries"]());
            // Create a circle image in image series template so it gets replicated to all new images
            const imageSeriesTemplate = imageSeries.mapImages.template;
            const circle = imageSeriesTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Circle"]);
            circle.radius = 4;
            circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#B27799');
            circle.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#FFFFFF');
            circle.strokeWidth = 2;
            circle.nonScaling = true;
            circle.tooltipText = '{title}';
            // Set property fields
            imageSeriesTemplate.propertyFields.latitude = 'latitude';
            imageSeriesTemplate.propertyFields.longitude = 'longitude';
            // Add data for the three cities
            imageSeries.data = [{
                    latitude: 48.856614,
                    longitude: 2.352222,
                    title: 'Paris'
                }, {
                    latitude: 40.712775,
                    longitude: -74.005973,
                    title: 'New York'
                }, {
                    latitude: 49.282729,
                    longitude: -123.120738,
                    title: 'Vancouver'
                }];
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
MapChartComponent.ɵfac = function MapChartComponent_Factory(t) { return new (t || MapChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
MapChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MapChartComponent, selectors: [["app-map-chart"]], decls: 1, vars: 0, consts: [["id", "mapchartdiv"]], template: function MapChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvbWFwLWNoYXJ0L21hcC1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MapChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-map-chart',
                templateUrl: './map-chart.component.html',
                styleUrls: ['./map-chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/pie-chart/pie-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/first-page/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class PieChartComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            // Create chart instance
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('piechartdiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["PieChart"]);
            // Add data
            this.chart.data = [
                {
                    kpi: 'kpi 1',
                    value: 501.9
                },
                {
                    kpi: 'kpi 2',
                    value: 301.9
                },
                {
                    kpi: 'kpi 3',
                    value: 201.1
                },
            ];
            // Add and configure Series
            const pieSeries = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["PieSeries"]());
            pieSeries.dataFields.value = 'value';
            pieSeries.dataFields.category = 'kpi';
            pieSeries.slices.template.tooltipText = '{category}: {value}';
            // Let's cut a hole in our Pie chart the size of 40% the radius
            this.chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
            // Disable ticks and labels
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            // Disable tooltips
            // pieSeries.slices.template.tooltipText = '';
            // Add a legend
            // this.chart.legend = new am4charts.Legend();
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
PieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["app-pie-chart"]], decls: 1, vars: 0, consts: [["id", "piechartdiv"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-pie-chart',
                templateUrl: './pie-chart.component.html',
                styleUrls: ['./pie-chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/first-page/radar-chart/radar-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/first-page/radar-chart/radar-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: RadarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarChartComponent", function() { return RadarChartComponent; });
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





class RadarChartComponent {
    constructor(zone) {
        this.zone = zone;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            /* Set themes */
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
            /* Create chart instance */
            this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"]('radarchartdiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarChart"]);
            const chart = this.chart;
            chart.data = [
                {
                    category: 'Цель к 2024 г.',
                    value1: 133,
                },
                {
                    category: 'Контракты',
                    value2: 152
                },
                {
                    category: 'Соглашения',
                    value3: 132
                },
            ];
            chart.colors.step = 4;
            // chart.dateFormatter.inputDateFormat = 'YYYY-MM-dd';
            chart.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](90);
            chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
            const categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["CategoryAxis"]());
            categoryAxis.dataFields.category = 'category';
            categoryAxis.renderer.labels.template.location = 0.5;
            categoryAxis.renderer.labels.template.horizontalCenter = 'right';
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.tooltipLocation = 0.5;
            categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
            categoryAxis.renderer.minGridDistance = 10;
            // categoryAxis.mouseEnabled = false;
            categoryAxis.tooltip.disabled = true;
            categoryAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#ffffff');
            const valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["ValueAxis"]());
            //  valueAxis.renderer.labels.template.horizontalCenter = 'center';
            valueAxis.strictMinMax = true;
            valueAxis.renderer.maxLabelPosition = 0.99;
            valueAxis.renderer.grid.template.strokeOpacity = 0.07;
            valueAxis.min = 0;
            valueAxis.max = 200;
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            const series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarColumnSeries"]());
            series1.name = 'Series 1';
            // series1.dataFields.openDateX = 'startDate2';
            series1.dataFields.valueX = 'value1';
            series1.dataFields.categoryY = 'category';
            // series1.clustered = false;
            series1.columns.template.radarColumn.cornerRadius = 30;
            series1.columns.template.tooltipText = '{category}: {valueX}';
            series1.zIndex = 3;
            const series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarColumnSeries"]());
            series2.name = 'Series 2';
            // series2.dataFields.openDateX = 'startDate2';
            series2.dataFields.valueX = 'value2';
            series2.dataFields.categoryY = 'category';
            // series2.clustered = false;
            series2.columns.template.radarColumn.cornerRadius = 30;
            series2.columns.template.tooltipText = '{category}: {valueX}';
            series2.zIndex = 2;
            const series3 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarColumnSeries"]());
            series3.name = 'Series 3';
            // series3.dataFields.valueX = 'startDate3';
            series3.dataFields.valueX = 'value3';
            series3.dataFields.categoryY = 'category';
            // series3.clustered = false;
            series3.columns.template.radarColumn.cornerRadius = 30;
            series3.columns.template.tooltipText = '{category}: {valueX}';
            chart.seriesContainer.zIndex = -1;
            // chart.scrollbarX = new am4core.Scrollbar();
            // chart.scrollbarY = new am4core.Scrollbar();
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_0__["RadarCursor"]();
            chart.cursor.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
            chart.cursor.lineY.disabled = true;
            const yearLabel = chart.radarContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]);
            yearLabel.text = '200';
            yearLabel.fontSize = 30;
            yearLabel.horizontalCenter = 'middle';
            yearLabel.verticalCenter = 'middle';
        });
    }
    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
RadarChartComponent.ɵfac = function RadarChartComponent_Factory(t) { return new (t || RadarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); };
RadarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RadarChartComponent, selectors: [["app-radar-chart"]], decls: 1, vars: 0, consts: [["id", "radarchartdiv"]], template: function RadarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#radarchartdiv[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QtcGFnZS9yYWRhci1jaGFydC9yYWRhci1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvcmFkYXItY2hhcnQvcmFkYXItY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyYWRhcmNoYXJ0ZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RadarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-radar-chart',
                templateUrl: './radar-chart.component.html',
                styleUrls: ['./radar-chart.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/general-information/components/bottom-tile/bottom-tile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/general-information/components/bottom-tile/bottom-tile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: BottomTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomTileComponent", function() { return BottomTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _first_page_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../first-page/radar-chart/radar-chart.component */ "./src/app/first-page/radar-chart/radar-chart.component.ts");
/* harmony import */ var _shared_components_kpi_value_kpi_value_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/kpi-value/kpi-value.component */ "./src/app/shared/components/kpi-value/kpi-value.component.ts");




class BottomTileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BottomTileComponent.ɵfac = function BottomTileComponent_Factory(t) { return new (t || BottomTileComponent)(); };
BottomTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomTileComponent, selectors: [["app-bottom-tile"]], decls: 11, vars: 6, consts: [[1, "widget", "widget-common-kpi"], [1, "widget-common-kpi__chart"], [1, "widget-common-kpi__info"], [1, "info__title", "widget__block", "widget__block--light", "block-title"], [1, "info__values", "widget__block"], [3, "value", "status", "percent"], [1, "info__title2", "widget__block", "widget__block--light", "block-title"]], template: function BottomTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-radar-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " KPI \u041C\u043E\u0441\u043F\u0440\u043E\u043C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-kpi-value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-kpi-value", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u042D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 45)("status", "\u0441\u0434\u0435\u043B\u0430\u043D\u043E")("percent", 28.4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 145)("status", "\u0432 \u0440\u0430\u0431\u043E\u0442\u0435")("percent", 71.6);
    } }, directives: [_first_page_radar_chart_radar_chart_component__WEBPACK_IMPORTED_MODULE_1__["RadarChartComponent"], _shared_components_kpi_value_kpi_value_component__WEBPACK_IMPORTED_MODULE_2__["KpiValueComponent"]], styles: [".widget-common-kpi[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.widget-common-kpi__chart[_ngcontent-%COMP%], .widget-common-kpi__info[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.info__title[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.info__values[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n}\r\n\r\n.info__title2[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding: 36px 20px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC1pbmZvcm1hdGlvbi9jb21wb25lbnRzL2JvdHRvbS10aWxlL2JvdHRvbS10aWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtaW5mb3JtYXRpb24vY29tcG9uZW50cy9ib3R0b20tdGlsZS9ib3R0b20tdGlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ud2lkZ2V0LWNvbW1vbi1rcGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53aWRnZXQtY29tbW9uLWtwaV9fY2hhcnQsXHJcbi53aWRnZXQtY29tbW9uLWtwaV9faW5mbyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmluZm9fX3RpdGxlIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mb19fdmFsdWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5mb19fdGl0bGUyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDM2cHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-tile',
                templateUrl: './bottom-tile.component.html',
                styleUrls: ['./bottom-tile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/general-information/components/right-tile/right-tile.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/general-information/components/right-tile/right-tile.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RightTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTileComponent", function() { return RightTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _first_page_map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../first-page/map-chart/map-chart.component */ "./src/app/first-page/map-chart/map-chart.component.ts");



class RightTileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RightTileComponent.ɵfac = function RightTileComponent_Factory(t) { return new (t || RightTileComponent)(); };
RightTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightTileComponent, selectors: [["app-right-tile"]], decls: 22, vars: 0, consts: [[1, "container"], [1, "widget", "widget-contracts"], [1, "widget__title", "widget__title--black"], [1, "widget-contracts__info", "contracts-info"], [1, "contracts-info__item"], [1, "contracts-info__value"], [1, "contracts-info__description"], [1, "widget", "widget-map"], [1, "widget__chart"], [1, "widget", "widget-contracts-2"], [1, "line-bar"]], template: function RightTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "46 \u043C\u043B\u043D $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-map-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u044B \u0438 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_first_page_map_chart_map_chart_component__WEBPACK_IMPORTED_MODULE_1__["MapChartComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  padding: 0 20px;\r\n}\r\n\r\n.widget-contracts__info[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.contracts-info__item[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.widget-map[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC1pbmZvcm1hdGlvbi9jb21wb25lbnRzL3JpZ2h0LXRpbGUvcmlnaHQtdGlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmFsLWluZm9ybWF0aW9uL2NvbXBvbmVudHMvcmlnaHQtdGlsZS9yaWdodC10aWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4ud2lkZ2V0LWNvbnRyYWN0c19faW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNvbnRyYWN0cy1pbmZvX19pdGVtIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53aWRnZXQtbWFwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-tile',
                templateUrl: './right-tile.component.html',
                styleUrls: ['./right-tile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/general-information/components/top-tile/top-tile.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/general-information/components/top-tile/top-tile.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TopTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopTileComponent", function() { return TopTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _first_page_chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../first-page/chart/chart.component */ "./src/app/first-page/chart/chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class TopTileComponent {
    constructor() {
        this.currentDate = new Date();
    }
    ngOnInit() {
    }
}
TopTileComponent.ɵfac = function TopTileComponent_Factory(t) { return new (t || TopTileComponent)(); };
TopTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopTileComponent, selectors: [["app-top-tile"]], decls: 22, vars: 3, consts: [[1, "widget", "widget-export"], [1, "widget-export__title"], [1, "export-title__title"], [1, "export-title__title-info", "widget__block--light", "block-title"], [1, "export-title__title-date"], [1, "export-title__legend"], [1, "legend-list", "widget__block--light"], [1, "legend-list__item"], [1, "legend-list__export-type"], [1, "widget-export__chart"]], template: function TopTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u041E\u0431\u044A\u0435\u043C\u044B \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u0440\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u044D\u043A\u0441\u043F\u043E\u0440\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0410\u043F\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u044D\u043A\u0441\u043F\u043E\u0440\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.currentDate));
    } }, directives: [_first_page_chart_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".widget-export__title[_ngcontent-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.export-title__title-info[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  margin: 0;\r\n}\r\n.export-title__legend[_ngcontent-%COMP%] {}\r\n.legend-list[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n.legend-list__item[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  list-style: none;\r\n  padding: 0 60px 0 20px;\r\n}\r\n.legend-list__export-type[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n  text-transform: uppercase;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhbC1pbmZvcm1hdGlvbi9jb21wb25lbnRzL3RvcC10aWxlL3RvcC10aWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUVBLHVCQUF1QjtBQUV2QjtFQUNFLHNCQUFzQjtFQUN0QixvQkFBYTtFQUFiLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtBQUNmO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtaW5mb3JtYXRpb24vY29tcG9uZW50cy90b3AtdGlsZS90b3AtdGlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53aWRnZXQtZXhwb3J0X190aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmV4cG9ydC10aXRsZV9fdGl0bGUtaW5mbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5leHBvcnQtdGl0bGVfX2xlZ2VuZCB7fVxyXG5cclxuLmxlZ2VuZC1saXN0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5sZWdlbmQtbGlzdF9faXRlbSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgNjBweCAwIDIwcHg7XHJcbn1cclxuXHJcbi5sZWdlbmQtbGlzdF9fZXhwb3J0LXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-tile',
                templateUrl: './top-tile.component.html',
                styleUrls: ['./top-tile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/ChildComponent/ChildComponent.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/ChildComponent/ChildComponent.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ChildComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-ChildComponent"]], decls: 5, vars: 0, consts: [[2, "border", "solid 1px red"], ["name", "right-tile-outlet"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ChildComponent works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9DaGlsZENvbXBvbmVudC9DaGlsZENvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ChildComponent',
                templateUrl: './ChildComponent.component.html',
                styleUrls: ['./ChildComponent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/ChildPrimaryComponent/ChildPrimaryComponent.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/ChildPrimaryComponent/ChildPrimaryComponent.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChildPrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildPrimaryComponent", function() { return ChildPrimaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ChildPrimaryComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    setChildSecondary() {
        this.router.navigate(
        // [ 'fp2' ],
        [{ outlets: { 'right-tile-outlet': ['client-info-results'] } }], 
        // { skipLocationChange: true }
        { relativeTo: this.route });
    }
}
ChildPrimaryComponent.ɵfac = function ChildPrimaryComponent_Factory(t) { return new (t || ChildPrimaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ChildPrimaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildPrimaryComponent, selectors: [["app-ChildPrimaryComponent"]], decls: 5, vars: 0, consts: [[3, "click"]], template: function ChildPrimaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ChildPrimaryComponent works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildPrimaryComponent_Template_button_click_3_listener($event) { return ctx.setChildSecondary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Set child secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9DaGlsZFByaW1hcnlDb21wb25lbnQvQ2hpbGRQcmltYXJ5Q29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildPrimaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ChildPrimaryComponent',
                templateUrl: './ChildPrimaryComponent.component.html',
                styleUrls: ['./ChildPrimaryComponent.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/ChildSecondaryComponent/ChildSecondaryComponent.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shared/ChildSecondaryComponent/ChildSecondaryComponent.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ChildSecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildSecondaryComponent", function() { return ChildSecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChildSecondaryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ChildSecondaryComponent.ɵfac = function ChildSecondaryComponent_Factory(t) { return new (t || ChildSecondaryComponent)(); };
ChildSecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildSecondaryComponent, selectors: [["app-ChildSecondaryComponent"]], decls: 2, vars: 0, template: function ChildSecondaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ChildSecondaryComponent works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9DaGlsZFNlY29uZGFyeUNvbXBvbmVudC9DaGlsZFNlY29uZGFyeUNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildSecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ChildSecondaryComponent',
                templateUrl: './ChildSecondaryComponent.component.html',
                styleUrls: ['./ChildSecondaryComponent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/RootPrimaryComponent/RootPrimaryComponent.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/RootPrimaryComponent/RootPrimaryComponent.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RootPrimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPrimaryComponent", function() { return RootPrimaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RootPrimaryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RootPrimaryComponent.ɵfac = function RootPrimaryComponent_Factory(t) { return new (t || RootPrimaryComponent)(); };
RootPrimaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootPrimaryComponent, selectors: [["app-RootPrimaryComponent"]], decls: 2, vars: 0, template: function RootPrimaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RootPrimaryComponent works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9Sb290UHJpbWFyeUNvbXBvbmVudC9Sb290UHJpbWFyeUNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootPrimaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-RootPrimaryComponent',
                templateUrl: './RootPrimaryComponent.component.html',
                styleUrls: ['./RootPrimaryComponent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/RootSecondaryComponent/RootSecondaryComponent.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/RootSecondaryComponent/RootSecondaryComponent.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RootSecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootSecondaryComponent", function() { return RootSecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RootSecondaryComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RootSecondaryComponent.ɵfac = function RootSecondaryComponent_Factory(t) { return new (t || RootSecondaryComponent)(); };
RootSecondaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootSecondaryComponent, selectors: [["app-RootSecondaryComponent"]], decls: 2, vars: 0, template: function RootSecondaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RootSecondaryComponent works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9Sb290U2Vjb25kYXJ5Q29tcG9uZW50L1Jvb3RTZWNvbmRhcnlDb21wb25lbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootSecondaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-RootSecondaryComponent',
                templateUrl: './RootSecondaryComponent.component.html',
                styleUrls: ['./RootSecondaryComponent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/kpi-value/kpi-value.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/kpi-value/kpi-value.component.ts ***!
  \********************************************************************/
/*! exports provided: KpiValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpiValueComponent", function() { return KpiValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KpiValueComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
KpiValueComponent.ɵfac = function KpiValueComponent_Factory(t) { return new (t || KpiValueComponent)(); };
KpiValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KpiValueComponent, selectors: [["app-kpi-value"]], inputs: { value: "value", status: "status", percent: "percent" }, decls: 12, vars: 3, consts: [[1, "kpi-block"], [1, "kpi-block__value-block"], [1, "value-block__value", "widget__block--light"], [1, "value"], [1, "unit"], [1, "value-block__status", "widget__block--light"], [1, "kpi-block__percent-block"], [1, "percent-block", "widget__block--light"]], template: function KpiValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u043C\u043B\u043D $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.percent, " %");
    } }, styles: [".kpi-block__value-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 6px 6px 0;\n  box-sizing: border-box;\n}\n.value-block__value[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 6px;\n  margin: 0;\n}\n.value-block__value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n}\n.value-block__value[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.value-block__status[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.kpi-block__percent-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n.percent-block[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMva3BpLXZhbHVlL2Q6L015V29yay9tb3Njb3ctYWRtaW5pc3RyYXRpb24vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9rcGktdmFsdWUva3BpLXZhbHVlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9rcGktdmFsdWUva3BpLXZhbHVlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FERUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQUY7QURHQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDREY7QURJQTtFQUNFLFNBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNIRjtBRE1BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2twaS12YWx1ZS9rcGktdmFsdWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3BpLWJsb2NrX192YWx1ZS1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2cHggNnB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52YWx1ZS1ibG9ja19fdmFsdWUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZhbHVlLWJsb2NrX192YWx1ZSAudmFsdWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZhbHVlLWJsb2NrX192YWx1ZSAudW5pdCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZhbHVlLWJsb2NrX19zdGF0dXMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5rcGktYmxvY2tfX3BlcmNlbnQtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucGVyY2VudC1ibG9jayB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbiIsIi5rcGktYmxvY2tfX3ZhbHVlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDZweCA2cHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi52YWx1ZS1ibG9ja19fdmFsdWUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cbi52YWx1ZS1ibG9ja19fdmFsdWUgLnZhbHVlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG59XG4udmFsdWUtYmxvY2tfX3ZhbHVlIC51bml0IHtcbiAgbWFyZ2luOiAwO1xufVxuLnZhbHVlLWJsb2NrX19zdGF0dXMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ua3BpLWJsb2NrX19wZXJjZW50LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wZXJjZW50LWJsb2NrIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KpiValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kpi-value',
                templateUrl: './kpi-value.component.html',
                styleUrls: ['./kpi-value.component.less']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/dtata-services/analitics-data.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/dtata-services/analitics-data.service.ts ***!
  \*****************************************************************/
/*! exports provided: AnaliticsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnaliticsDataService", function() { return AnaliticsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AnaliticsDataService {
    constructor(http) {
        this.http = http;
    }
    getAnalitics() {
        const result = [];
        for (let index = 0; index < 20; index++) {
            result.push({
                id: index,
                title: `Отрасль ${index}`,
                exportSum: 100 * index,
                subIndustry: []
            });
            for (let j = 0; j < 10; j++) {
                result[index].subIndustry.push({
                    title: `Подотрасль Отрасл ${j}`,
                    exportDataList: [
                        { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
                        { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
                        { date: new Date(), value: Math.round((Math.random()) * Math.random() * 10) },
                    ]
                });
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        // return this.http
    }
}
AnaliticsDataService.ɵfac = function AnaliticsDataService_Factory(t) { return new (t || AnaliticsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AnaliticsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnaliticsDataService, factory: AnaliticsDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnaliticsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/dtata-services/clients-data.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/dtata-services/clients-data.service.ts ***!
  \***************************************************************/
/*! exports provided: ClientsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsDataService", function() { return ClientsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ClientsDataService {
    constructor(http) {
        this.http = http;
    }
    getClients() {
        const clients = [];
        for (let index = 0; index < 20; index++) {
            clients.push({
                id: index,
                title: `Компания ${index}`,
                turnoverSum: 150 * index,
                exportSum: 100 * index,
                description: `description ${index}`,
                segment: `segment ${index}`,
                industry: `industry ${index}`,
                product: `product ${index}`,
                contactPerson: {
                    fio: `fio ${index}`,
                    position: `position ${index}`
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(clients);
        // return this.http
    }
}
ClientsDataService.ɵfac = function ClientsDataService_Factory(t) { return new (t || ClientsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ClientsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientsDataService, factory: ClientsDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/outlet/outlet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/outlet/outlet.component.ts ***!
  \***************************************************/
/*! exports provided: OutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletComponent", function() { return OutletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OutletComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OutletComponent.ɵfac = function OutletComponent_Factory(t) { return new (t || OutletComponent)(); };
OutletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutletComponent, selectors: [["app-outlet"]], decls: 2, vars: 0, template: function OutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " outlet works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9vdXRsZXQvb3V0bGV0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-outlet',
                templateUrl: './outlet.component.html',
                styleUrls: ['./outlet.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.component.ts":
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SharedComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["app-shared"]], decls: 5, vars: 0, consts: [[2, "border", "solid 1px red"], ["name", "right-tile-outlet"]], template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " shared works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGFyZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared',
                templateUrl: './shared.component.html',
                styleUrls: ['./shared.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\MyWork\moscow-administration\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);