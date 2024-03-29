webpackJsonp([1,4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterURLService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterURLService = (function () {
    function MasterURLService() {
        this._url = "http://localhost:1337/";
    }
    Object.defineProperty(MasterURLService.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (nuevoUrl) {
            this._url = nuevoUrl;
        },
        enumerable: true,
        configurable: true
    });
    MasterURLService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MasterURLService);
    return MasterURLService;
}());
//# sourceMappingURL=master-url.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroeComponent = (function () {
    function HeroeComponent(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = "Aquí podrás ingresar tus héroes favoritos";
        this.nuevoHeroe = {};
        this.heroes = [];
        this.disabledButtons = {
            NuevoHeroeFormSubmitButton: false
        };
    }
    HeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get(this._masterURL.url + "Heroe")
            .subscribe(function (res) {
            _this.heroes = res.json()
                .map(function (value) {
                value.formularioCerrado = true;
                return value;
            });
        }, function (err) {
            console.log(err);
        });
    };
    HeroeComponent.prototype.crearHeroe = function (formulario) {
        var _this = this;
        this.disabledButtons.NuevoHeroeFormSubmitButton = true;
        console.log(formulario);
        var heroe = {
            nombreHeroe: formulario.value.nombreHeroe,
            castilloHeroe: formulario.value.castilloHeroe,
            nivelHeroe: formulario.value.nivelHeroe,
            imagenHeroe: formulario.value.imagenHeroe
        };
        this._http.post(this._masterURL.url + "Heroe", heroe)
            .subscribe(function (res) {
            console.log("No hubo Errores");
            console.log(res);
            _this.heroes.push(res.json());
            _this.nuevoHeroe = {};
            _this.disabledButtons.NuevoHeroeFormSubmitButton = false;
        }, function (err) {
            _this.disabledButtons.NuevoHeroeFormSubmitButton = false;
            console.log("Ocurrio un error", err);
        });
    };
    HeroeComponent.prototype.borrarHeroe = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Heroe/" + id)
            .subscribe(function (res) {
            var heroeBorrado = res.json();
            _this.heroes = _this.heroes.filter(function (value) { return heroeBorrado.id != value.id; });
        }, function (err) {
            console.log("Ocurrio un error", err);
        });
    };
    HeroeComponent.prototype.editarHeroe = function (heroe) {
        var parametos = {
            nombreHeroe: heroe.nombreHeroe,
            castilloHeroe: heroe.castilloHeroe,
            nivelHeroe: heroe.nivelHeroe,
            imagenHeroe: heroe.imagenHeroe
        };
        this._http.put(this._masterURL.url + "Heroe/" + heroe.id, parametos)
            .subscribe(function (res) {
            heroe.formularioCerrado = !heroe.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error:", err);
        });
    };
    HeroeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-heroe',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _b) || Object])
    ], HeroeComponent);
    return HeroeComponent;
    var _a, _b;
}());
//# sourceMappingURL=heroe.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoderComponent = (function () {
    function PoderComponent(_ActivatedRoute, _http, _masterURL) {
        this._ActivatedRoute = _ActivatedRoute;
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = "Ingresa los poderes de tus héroes favoritos";
        this.poderes = [];
        this.nuevoPoder = {};
        this.disabledButtons = {
            NuevoPoderFormSubmitButton: false
        };
    }
    PoderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute
            .params
            .subscribe(function (parametros) {
            _this._parametros = parametros;
            _this._http.get(_this._masterURL.url + 'Poder?idHeroe=' + _this._parametros.idHeroe)
                .subscribe(function (res) {
                _this.poderes = res.json()
                    .map(function (value) {
                    value.formularioCerrado = true;
                    return value;
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    PoderComponent.prototype.crearPoder = function (formulario) {
        var _this = this;
        this.disabledButtons.NuevoPoderFormSubmitButton = true;
        console.log(formulario);
        var poder = {
            nombrePoder: formulario.value.nombrePoder,
            danioPoder: formulario.value.danioPoder,
            nivelPoder: formulario.value.nivelPoder,
            idHeroe: this._parametros.idHeroe
        };
        this._http.post(this._masterURL.url + "Poder", poder)
            .subscribe(function (res) {
            _this.poderes.push(res.json());
            _this.nuevoPoder = {};
            _this.disabledButtons.NuevoPoderFormSubmitButton = false;
        }, function (err) {
            _this.disabledButtons.NuevoPoderFormSubmitButton = false;
            console.log("Ocurrio un error", err);
        });
    };
    PoderComponent.prototype.borrarPoder = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Poder/" + id)
            .subscribe(function (res) {
            var poderBorrado = res.json();
            _this.poderes = _this.poderes.filter(function (value) { return poderBorrado.id != value.id; });
        }, function (err) {
            console.log("Ocurrio un error", err);
        });
    };
    PoderComponent.prototype.editarPoder = function (poder, id) {
        var parametos = {
            nombrePoder: poder.nombrePoder,
            danioPoder: poder.danioPoder,
            nivelPoder: poder.nivelHeroe
        };
        this._http.put(this._masterURL.url + "Poder/" + poder.id, parametos)
            .subscribe(function (res) {
            poder.formularioCerrado = !poder.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error:", err);
        });
    };
    PoderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-poder',
            template: __webpack_require__(518),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURLService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURLService */]) === 'function' && _c) || Object])
    ], PoderComponent);
    return PoderComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=poder.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__heroe_heroe_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__poder_poder_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__heroe_heroe_component__["a" /* HeroeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__poder_poder_component__["a" /* PoderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_master_url_service__["a" /* MasterURLService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroe_heroe_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poder_poder_component__ = __webpack_require__(306);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'heroe', component: __WEBPACK_IMPORTED_MODULE_2__heroe_heroe_component__["a" /* HeroeComponent */] },
    { path: 'heroe/:idHeroe/poder', component: __WEBPACK_IMPORTED_MODULE_3__poder_poder_component__["a" /* PoderComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span>MENU</span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Aplicación de tus Héroes</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"['/home']\">Home</a></li>\n        <li><a [routerLink]=\"['/heroe']\">Héroes Registrados</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Tus Héroes Favoritos</h1>\n<h2 class=\"text-center\">\n  {{title}}\n</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <form class=\"animated bounceIn\" (ngSubmit)=\"crearHeroe(NuevoHeroeForm)\" #NuevoHeroeForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Nombre del Héroe:</label>\n          <input required\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el nombre del Héroe\"\n                 name=\"nombreHeroe\"\n                 [(ngModel)]=\"nuevoHeroe.nombreHeroe\"\n                 #nombreHeroe=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Castillo del Héroe:</label>\n          <input required\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el castillo del Héroe\"\n                 name=\"castilloHeroe\"\n                 [(ngModel)]=\"nuevoHeroe.castilloHeroe\"\n                 #castilloHeroe=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Nivel del Héroe:</label>\n          <input required\n                 type=\"number\"\n                 min=\"0\"\n                 max=\"10\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el nivel del Héroe\"\n                 name=\"nivelHeroe\"\n                 [(ngModel)]=\"nuevoHeroe.nivelHeroe\"\n                 #nivelHeroe=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <div class=\"form-group\">\n          <label>Imagen del Héroe:</label>\n          <input required\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el url de la imagen del Héroe\"\n                 name=\"imagenHeroe\"\n                 [(ngModel)]=\"nuevoHeroe.imagenHeroe\"\n                 #imagenHeroe=\"ngModel\"\n                 #nombreElm>\n        </div>\n        <button [disabled]=\"disabledButtons.NuevoHeroeFormSubmitButton || !NuevoHeroeForm.valid\" type=\"submit\" class=\"btn btn-block btn-success\">Crear Héroe</button>\n      </form>\n    </div>\n    <div class=\"col-sm-6\">\n      <h1>{{nuevoHeroe.nombreHeroe}}</h1>\n    </div>\n  </div>\n\n  <br><br>\n  <br><br>\n\n  <h1 class=\"text-center\" style=\"border-top: solid; padding-top: 1cm\">Lista de Héroes Registrados</h1>\n\n  <div class=\"row\" >\n    <div class=\"col-sm-12 animated flipInX\" style=\"border-bottom: solid; padding-bottom: 1cm; padding-top: 1cm\" *ngFor=\"let heroe of heroes\">\n      <div class=\"row\">\n        <div class=\"col-sm-5 text-center\">\n          <h3>{{heroe.nombreHeroe}}</h3>\n        </div>\n\n        <div class=\"col-sm-7 text-center\">\n          <p> Castillo: {{heroe.castilloHeroe}} </p>\n          <p> Nivel: {{heroe.nivelHeroe}}</p>\n          <img [src]=\"heroe.imagenHeroe\" width=\"150\" height=\"150\">\n          <br>\n          <a [routerLink]=\"[heroe.id,'poder']\">Ir a Poderes</a>\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"padding-top: 1cm\" [hidden]=\"!heroe.formularioCerrado\">\n        <div class=\"col-sm-5\">\n          <button class=\"btn btn-block btn-info\"\n                  (click)=\"heroe.formularioCerrado = !heroe.formularioCerrado\">Actualizar Héroe</button>\n        </div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-5\">\n          <button class=\"btn btn-block btn-danger\" (click)=\"borrarHeroe(heroe.id)\">X</button>\n        </div>\n\n      </div>\n      <div class=\"row animated flipInY\" [hidden]=\"heroe.formularioCerrado\">\n        <form action=\"\">\n          <form class=\"animated bounceIn\" (ngSubmit)=\"editarHeroe(heroe)\" #NuevoHeroeForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label>Nombre del Héroe:</label>\n              <input required\n                     type=\"text\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el nombre del Héroe\"\n                     name=\"nombreHeroe\"\n                     [(ngModel)]=\"heroe.nombreHeroe\"\n                     #nombreHeroe=\"ngModel\"\n                     #nombreElm>\n            </div>\n            <div class=\"form-group\">\n              <label>Castillo del Héroe:</label>\n              <input required\n                     type=\"text\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el castillo del Héroe\"\n                     name=\"castilloHeroe\"\n                     [(ngModel)]=\"heroe.castilloHeroe\"\n                     #castilloHeroe=\"ngModel\"\n                     #nombreElm>\n            </div>\n            <div class=\"form-group\">\n              <label>Nivel del Héroe:</label>\n              <input required\n                     type=\"number\"\n                     min=\"0\"\n                     max=\"10\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el nivel del Héroe\"\n                     name=\"nivelHeroe\"\n                     [(ngModel)]=\"heroe.nivelHeroe\"\n                     #nivelHeroe=\"ngModel\"\n                     #nombreElm>\n            </div>\n            <div class=\"form-group\">\n              <label>Imagen del Héroe:</label>\n              <input required\n                     type=\"text\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el url de la imagen del Héroe\"\n                     name=\"imagenHeroe\"\n                     [(ngModel)]=\"heroe.imagenHeroe\"\n                     #imagenHeroe=\"ngModel\"\n                     #nombreElm>\n            </div>\n            <div class=\"col-sm-6\">\n              <button [disabled]=\"disabledButtons.NuevoHeroeFormSubmitButton ||!NuevoHeroeForm.valid\" type=\"submit\"\n                      class=\"btn btn-block btn-success\">Actualizar Héroe\n              </button>\n            </div>\n            <div class=\"col-sm-6\">\n              <button type=\"button\" class=\"btn btn-block btn-warning\" (click)=\"heroe.formularioCerrado=!heroe.formularioCerrado\">\n                Cancelar\n              </button>\n            </div>\n          </form>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Bienvenidos a una aplicación que te permite regitrar tus héroes favoritos con sus respectivos poderes</h1>\n\n  <div class=\"jumbotron\">\n    <h1>Héroes y Poderes!</h1>\n    <p>Registra tus héroes favoritos junto a sus poderes :) </p>\n    <p><a class=\"btn btn-primary btn-lg\" href=\"/heroe\" role=\"button\">Registra Héroes</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Poderes de Héroes</h1>\n<h2 class=\"text-center\">\n  {{title}}\n</h2>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <form class=\"animated bounceIn\" (ngSubmit)=\"crearPoder(NuevoPoderForm)\" #NuevoPoderForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Nombre del Poder:</label>\n          <input required\n                 type=\"text\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el nombre del Poder\"\n                 name=\"nombrePoder\"\n                 [(ngModel)]=\"nuevoPoder.nombrePoder\"\n                 #nombrePoder=\"ngModel\"\n                 #nombreElm>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Danio del Poder:</label>\n          <input required\n                 type=\"number\"\n                 min=\"0\"\n                 max=\"100\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el danio ocasionado por el poder\"\n                 name=\"danioPoder\"\n                 [(ngModel)]=\"nuevoPoder.danioPoder\"\n                 #danioPoder=\"ngModel\"\n                 #nombreElm>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Nivel del Poder:</label>\n          <input required\n                 type=\"number\"\n                 min=\"0\"\n                 max=\"10\"\n                 class=\"form-control\"\n                 placeholder=\"Ingrese el nivel del poder\"\n                 name=\"nivelPoder\"\n                 [(ngModel)]=\"nuevoPoder.nivelPoder\"\n                 #nivelPoder=\"ngModel\"\n                 #nombreElm>\n        </div>\n\n        <button [disabled]=\"disabledButtons.NuevoPoderFormSubmitButton || !NuevoPoderForm.valid\" type=\"submit\" class=\"btn btn-block btn-success\">Crear Poder</button>\n      </form>\n    </div>\n    <div class=\"col-sm-6\">\n      <h1>{{nuevoPoder.nombrePoder}}</h1>\n    </div>\n  </div>\n\n  <br><br>\n  <br><br>\n\n  <h1 class=\"text-center\" style=\"border-top: solid; padding-top: 1cm\">Lista de Poderes para cada Héroe</h1>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 animated flipInX\" style=\"border-bottom: solid; padding-bottom: 1cm; padding-top: 1cm\"  *ngFor=\"let poder of poderes\">\n      <div class=\"col-sm-5 text-center\">\n        <h3>{{poder.nombrePoder}}</h3>\n      </div>\n\n      <div class=\"col-sm-7 text-center\">\n        <p> Danio: {{poder.danioPoder}} </p>\n        <p> Nivel: {{poder.nivelPoder}}</p>\n      </div>\n\n      <div class=\"row\" [hidden]=\"!poder.formularioCerrado\">\n        <div class=\"col-sm-5\">\n          <button class=\"btn btn-block btn-info\"\n                  (click)=\"poder.formularioCerrado = !poder.formularioCerrado\">Actualizar Poder</button>\n        </div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-5\">\n          <button class=\"btn btn-block btn-danger\" (click)=\"borrarPoder(poder.id)\">X</button>\n        </div>\n\n      </div>\n      <div class=\"row animated flipInY\" [hidden]=\"poder.formularioCerrado\">\n        <form action=\"\">\n          <form class=\"animated bounceIn\" (ngSubmit)=\"editarPoder(poder, poder.id)\" #NuevoPoderForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label>Nombre del Poder:</label>\n              <input required\n                     type=\"text\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el nombre del Poder\"\n                     name=\"nombrePoder\"\n                     [(ngModel)]=\"poder.nombrePoder\"\n                     #nombrePoder=\"ngModel\"\n                     #nombreElm>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Danio del Poder:</label>\n              <input required\n                     type=\"number\"\n                     min=\"0\"\n                     max=\"100\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el danio ocasionado por el poder\"\n                     name=\"danioPoder\"\n                     [(ngModel)]=\"poder.danioPoder\"\n                     #danioPoder=\"ngModel\"\n                     #nombreElm>\n            </div>\n\n            <div class=\"form-group\">\n              <label>Nivel del Poder:</label>\n              <input required\n                     type=\"number\"\n                     min=\"0\"\n                     max=\"10\"\n                     class=\"form-control\"\n                     placeholder=\"Ingrese el nivel del poder\"\n                     name=\"nivelPoder\"\n                     [(ngModel)]=\"poder.nivelPoder\"\n                     #nivelPoder=\"ngModel\"\n                     #nombreElm>\n            </div>\n            <div class=\"col-sm-6\">\n              <button [disabled]=\"disabledButtons.NuevoPoderFormSubmitButton ||!NuevoPoderForm.valid\" type=\"submit\"\n                      class=\"btn btn-block btn-success\">Actualizar Poder\n              </button>\n            </div>\n            <div class=\"col-sm-6\">\n              <button type=\"button\" class=\"btn btn-block btn-warning\" (click)=\"poder.formularioCerrado=!poder.formularioCerrado\">\n                Cancelar\n              </button>\n            </div>\n          </form>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map