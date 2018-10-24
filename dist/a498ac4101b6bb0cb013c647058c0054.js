// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({196:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = exports.__assign = function () {
    exports.__assign = __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function (v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
    }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
            resolve({ value: v, done: d });
        }, reject);
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}
},{}],118:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFunction = isFunction;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map
},{}],17:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/new Error();
            /*@__PURE__*/console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};
//# sourceMappingURL=config.js.map
},{}],121:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hostReportError = hostReportError;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () {
        throw err;
    });
}
//# sourceMappingURL=hostReportError.js.map
},{}],111:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = undefined;

var _config = require('./config');

var _hostReportError = require('./util/hostReportError');

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = exports.empty = {
    closed: true,
    next: function (value) {},
    error: function (err) {
        if (_config.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        } else {
            (0, _hostReportError.hostReportError)(err);
        }
    },
    complete: function () {}
};
//# sourceMappingURL=Observer.js.map
},{"./config":17,"./util/hostReportError":121}],116:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = exports.isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};
//# sourceMappingURL=isArray.js.map
},{}],117:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObject = isObject;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x != null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map
},{}],120:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map
},{}],119:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tryCatch = tryCatch;

var _errorObject = require('./errorObject');

var tryCatchTarget; /** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */

function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    } catch (e) {
        _errorObject.errorObject.e = e;
        return _errorObject.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
//# sourceMappingURL=tryCatch.js.map
},{"./errorObject":120}],33:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
        return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var UnsubscriptionError = exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map
},{}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subscription = undefined;

var _isArray = require('./util/isArray');

var _isObject = require('./util/isObject');

var _isFunction = require('./util/isFunction');

var _tryCatch = require('./util/tryCatch');

var _errorObject = require('./util/errorObject');

var _UnsubscriptionError = require('./util/UnsubscriptionError');

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if ((0, _isFunction.isFunction)(_unsubscribe)) {
            var trial = (0, _tryCatch.tryCatch)(_unsubscribe).call(this);
            if (trial === _errorObject.errorObject) {
                hasErrors = true;
                errors = errors || (_errorObject.errorObject.e instanceof _UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(_errorObject.errorObject.e.errors) : [_errorObject.errorObject.e]);
            }
        }
        if ((0, _isArray.isArray)(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if ((0, _isObject.isObject)(sub)) {
                    var trial = (0, _tryCatch.tryCatch)(sub.unsubscribe).call(sub);
                    if (trial === _errorObject.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = _errorObject.errorObject.e;
                        if (err instanceof _UnsubscriptionError.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        } else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new _UnsubscriptionError.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || teardown === Subscription.EMPTY) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                } else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        } else if (!_parents) {
            this._parents = [parent];
        } else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription());
    return Subscription;
}();
exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof _UnsubscriptionError.UnsubscriptionError ? err.errors : err);
    }, []);
}
//# sourceMappingURL=Subscription.js.map
},{"./util/isArray":116,"./util/isObject":117,"./util/isFunction":118,"./util/tryCatch":119,"./util/errorObject":120,"./util/UnsubscriptionError":33}],114:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = exports.rxSubscriber = typeof Symbol === 'function' ? /*@__PURE__*/Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/Math.random();
var $$rxSubscriber = exports.$$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map
},{}],16:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeSubscriber = exports.Subscriber = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isFunction = require('./util/isFunction');

var _Observer = require('./Observer');

var _Subscription = require('./Subscription');

var _rxSubscriber = require('../internal/symbol/rxSubscriber');

var _config = require('./config');

var _hostReportError = require('./util/hostReportError');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Subscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    } else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_rxSubscriber.rxSubscriber] = function () {
        return this;
    };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(_Subscription.Subscription); /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
exports.Subscriber = Subscriber;

var SafeSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if ((0, _isFunction.isFunction)(observerOrNext)) {
            next = observerOrNext;
        } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer.empty) {
                context = Object.create(observerOrNext);
                if ((0, _isFunction.isFunction)(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                (0, _hostReportError.hostReportError)(err);
            } else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                } else {
                    (0, _hostReportError.hostReportError)(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () {
                    return _this._complete.call(_this._context);
                };
                if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            } else {
                (0, _hostReportError.hostReportError)(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            } else {
                (0, _hostReportError.hostReportError)(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber);
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map
},{"tslib":196,"./util/isFunction":118,"./Observer":111,"./Subscription":14,"../internal/symbol/rxSubscriber":114,"./config":17,"./util/hostReportError":121}],112:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canReportError = canReportError;

var _Subscriber = require('../Subscriber');

function canReportError(observer) {
    while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        } else if (destination && destination instanceof _Subscriber.Subscriber) {
            observer = destination;
        } else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
},{"../Subscriber":16}],113:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require('../Subscriber');

var _rxSubscriber = require('../symbol/rxSubscriber');

var _Observer = require('../Observer');

function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[_rxSubscriber.rxSubscriber]) {
            return nextOrObserver[_rxSubscriber.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber.Subscriber(_Observer.empty);
    }
    return new _Subscriber.Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
},{"../Subscriber":16,"../symbol/rxSubscriber":114,"../Observer":111}],20:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map
},{}],27:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
//# sourceMappingURL=noop.js.map
},{}],26:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _noop = require('./noop');

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
} /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
function pipeFromArray(fns) {
    if (!fns) {
        return _noop.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) {
            return fn(prev);
        }, input);
    };
}
//# sourceMappingURL=pipe.js.map
},{"./noop":27}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = undefined;

var _canReportError = require('./util/canReportError');

var _toSubscriber = require('./util/toSubscriber');

var _observable = require('../internal/symbol/observable');

var _pipe = require('./util/pipe');

var _config = require('./config');

var Observable = /*@__PURE__*/function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        } else {
            sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (_config.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if ((0, _canReportError.canReportError)(sink)) {
                sink.error(err);
            } else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_observable.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return (0, _pipe.pipeFromArray)(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) {
                return value = x;
            }, function (err) {
                return reject(err);
            }, function () {
                return resolve(value);
            });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}(); /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map
},{"./util/canReportError":112,"./util/toSubscriber":113,"../internal/symbol/observable":20,"./util/pipe":26,"./config":17}],32:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var ObjectUnsubscribedError = exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map
},{}],110:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubjectSubscription = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/function (_super) {
    tslib_1.__extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription.Subscription);
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map
},{"tslib":196,"./Subscription":14}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Observable = require('./Observable');

var _Subscriber = require('./Subscriber');

var _Subscription = require('./Subscription');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

var _SubjectSubscription = require('./SubjectSubscription');

var _rxSubscriber = require('../internal/symbol/rxSubscriber');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SubjectSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber.Subscriber); /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
exports.SubjectSubscriber = SubjectSubscriber;

var Subject = /*@__PURE__*/function (_super) {
    tslib_1.__extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_rxSubscriber.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription.Subscription.EMPTY;
        } else if (this.isStopped) {
            subscriber.complete();
            return _Subscription.Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            return new _SubjectSubscription.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable.Observable);
exports.Subject = Subject;

var AnonymousSubject = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        } else {
            return _Subscription.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject);
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map
},{"tslib":196,"./Observable":8,"./Subscriber":16,"./Subscription":14,"./util/ObjectUnsubscribedError":32,"./SubjectSubscription":110,"../internal/symbol/rxSubscriber":114}],135:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refCount = refCount;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}();
var RefCountSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber.Subscriber);
//# sourceMappingURL=refCount.js.map
},{"tslib":196,"../Subscriber":16}],18:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('../Subject');

var _Observable = require('../Observable');

var _Subscriber = require('../Subscriber');

var _Subscription = require('../Subscription');

var _refCount = require('../operators/refCount');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription.Subscription();
            connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription.Subscription.EMPTY;
            } else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return (0, _refCount.refCount)()(this);
    };
    return ConnectableObservable;
}(_Observable.Observable);
exports.ConnectableObservable = ConnectableObservable;

var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject.SubjectSubscriber);
var RefCountOperator = /*@__PURE__*/function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}();
var RefCountSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber.Subscriber);
//# sourceMappingURL=ConnectableObservable.js.map
},{"tslib":196,"../Subject":9,"../Observable":8,"../Subscriber":16,"../Subscription":14,"../operators/refCount":135}],19:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupedObservable = undefined;
exports.groupBy = groupBy;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

var _Subscription = require('../Subscription');

var _Observable = require('../Observable');

var _Subject = require('../Subject');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
} /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */

var GroupByOperator = /*@__PURE__*/function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}();
var GroupBySubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        } catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            } catch (err) {
                this.error(err);
            }
        } else {
            element = value;
        }
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new _Subject.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                } catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber.Subscriber);
var GroupDurationSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this,
            parent = _a.parent,
            key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber.Subscriber);
var GroupedObservable = /*@__PURE__*/function (_super) {
    tslib_1.__extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription.Subscription();
        var _a = this,
            refCountSubscription = _a.refCountSubscription,
            groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable.Observable);
exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription = /*@__PURE__*/function (_super) {
    tslib_1.__extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription.Subscription);
//# sourceMappingURL=groupBy.js.map
},{"tslib":196,"../Subscriber":16,"../Subscription":14,"../Observable":8,"../Subject":9}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BehaviorSubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var BehaviorSubject = /*@__PURE__*/function (_super) {
    tslib_1.__extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        } else if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        } else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map
},{"tslib":196,"./Subject":9,"./util/ObjectUnsubscribedError":32}],190:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Action = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/function (_super) {
    tslib_1.__extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription.Subscription);
exports.Action = Action;
//# sourceMappingURL=Action.js.map
},{"tslib":196,"../Subscription":14}],136:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncAction = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Action = require('./Action');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action.Action);
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map
},{"tslib":196,"./Action":190}],142:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueAction = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction = /*@__PURE__*/function (_super) {
    tslib_1.__extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction.AsyncAction);
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map
},{"tslib":196,"./AsyncAction":136}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Scheduler = /*@__PURE__*/function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () {
        return Date.now();
    };
    return Scheduler;
}();
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map
},{}],137:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Scheduler = require("../Scheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            } else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        } else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler.Scheduler);
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map
},{"tslib":196,"../Scheduler":13}],143:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map
},{"tslib":196,"./AsyncScheduler":137}],23:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = undefined;

var _QueueAction = require('./QueueAction');

var _QueueScheduler = require('./QueueScheduler');

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queue = /*@__PURE__*/exports.queue = new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
//# sourceMappingURL=queue.js.map
},{"./QueueAction":142,"./QueueScheduler":143}],40:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY = undefined;
exports.empty = empty;
exports.emptyScheduled = emptyScheduled;

var _Observable = require('../Observable');

var EMPTY = /*@__PURE__*/exports.EMPTY = new _Observable.Observable(function (subscriber) {
    return subscriber.complete();
}); /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable.Observable(function (subscriber) {
        return scheduler.schedule(function () {
            return subscriber.complete();
        });
    });
}
//# sourceMappingURL=empty.js.map
},{"../Observable":8}],145:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isScheduler = isScheduler;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map
},{}],191:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = exports.subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map
},{}],147:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromArray = fromArray;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _subscribeToArray = require('../util/subscribeToArray');

function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable((0, _subscribeToArray.subscribeToArray)(input));
    } else {
        return new _Observable.Observable(function (subscriber) {
            var sub = new _Subscription.Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromArray.js.map
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
},{"../Observable":8,"../Subscription":14,"../util/subscribeToArray":191}],157:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scalar = scalar;

var _Observable = require('../Observable');

function scalar(value) {
    var result = new _Observable.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
},{"../Observable":8}],50:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.of = of;

var _isScheduler = require('../util/isScheduler');

var _fromArray = require('./fromArray');

var _empty = require('./empty');

var _scalar = require('./scalar');

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if ((0, _isScheduler.isScheduler)(scheduler)) {
        args.pop();
    } else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return (0, _empty.empty)(scheduler);
        case 1:
            return scheduler ? (0, _fromArray.fromArray)(args, scheduler) : (0, _scalar.scalar)(args[0]);
        default:
            return (0, _fromArray.fromArray)(args, scheduler);
    }
}
//# sourceMappingURL=of.js.map
},{"../util/isScheduler":145,"./fromArray":147,"./empty":40,"./scalar":157}],55:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwError = throwError;

var _Observable = require('../Observable');

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable(function (subscriber) {
            return subscriber.error(error);
        });
    } else {
        return new _Observable.Observable(function (subscriber) {
            return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber });
        });
    }
} /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function dispatch(_a) {
    var error = _a.error,
        subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map
},{"../Observable":8}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Notification = undefined;

var _empty = require('./observable/empty');

var _of = require('./observable/of');

var _throwError = require('./observable/throwError');

var Notification = /*@__PURE__*/function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        } else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return (0, _of.of)(this.value);
            case 'E':
                return (0, _throwError.throwError)(this.error);
            case 'C':
                return (0, _empty.empty)();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}(); /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
},{"./observable/empty":40,"./observable/of":50,"./observable/throwError":55}],115:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = undefined;
exports.observeOn = observeOn;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

var _Notification = require('../Notification');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
} /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */

var ObserveOnOperator = /*@__PURE__*/function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}();
exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification,
            destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber.Subscriber);
exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage = /*@__PURE__*/function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}();
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map
},{"tslib":196,"../Subscriber":16,"../Notification":15}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplaySubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _queue = require('./scheduler/queue');

var _Subscription = require('./Subscription');

var _observeOn = require('./operators/observeOn');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

var _SubjectSubscription = require('./SubjectSubscription');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ReplaySubject = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        } else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
        } else if (this.isStopped || this.hasError) {
            subscription = _Subscription.Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        } else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        } else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _queue.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if (now - _events[spliceCount].time < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
exports.ReplaySubject = ReplaySubject;

var ReplayEvent = /*@__PURE__*/function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}();
//# sourceMappingURL=ReplaySubject.js.map
},{"tslib":196,"./Subject":9,"./scheduler/queue":23,"./Subscription":14,"./operators/observeOn":115,"./util/ObjectUnsubscribedError":32,"./SubjectSubscription":110}],12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncSubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _Subscription = require('./Subscription');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AsyncSubject = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription.Subscription.EMPTY;
        } else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map
},{"tslib":196,"./Subject":9,"./Subscription":14}],189:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = exports.Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () {
            return runIfPresent(handle);
        });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    }
};
//# sourceMappingURL=Immediate.js.map
},{}],140:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapAction = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Immediate = require('../util/Immediate');

var _AsyncAction = require('./AsyncAction');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AsapAction = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _Immediate.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction.AsyncAction); /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map
},{"tslib":196,"../util/Immediate":189,"./AsyncAction":136}],141:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map
},{"tslib":196,"./AsyncScheduler":137}],21:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = undefined;

var _AsapAction = require('./AsapAction');

var _AsapScheduler = require('./AsapScheduler');

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asap = /*@__PURE__*/exports.asap = new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
//# sourceMappingURL=asap.js.map
},{"./AsapAction":140,"./AsapScheduler":141}],22:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = undefined;

var _AsyncAction = require('./AsyncAction');

var _AsyncScheduler = require('./AsyncScheduler');

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var async = /*@__PURE__*/exports.async = new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
//# sourceMappingURL=async.js.map
},{"./AsyncAction":136,"./AsyncScheduler":137}],138:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameAction = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
            return scheduler.flush(null);
        }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction.AsyncAction);
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map
},{"tslib":196,"./AsyncAction":136}],139:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map
},{"tslib":196,"./AsyncScheduler":137}],24:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = undefined;

var _AnimationFrameAction = require('./AnimationFrameAction');

var _AnimationFrameScheduler = require('./AnimationFrameScheduler');

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrame = /*@__PURE__*/exports.animationFrame = new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map
},{"./AnimationFrameAction":138,"./AnimationFrameScheduler":139}],25:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require('./AsyncAction');

var _AsyncScheduler = require('./AsyncScheduler');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var VirtualTimeScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this,
            actions = _a.actions,
            maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler); /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = /*@__PURE__*/function (_super) {
    tslib_1.__extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            } else if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        } else if (a.delay > b.delay) {
            return 1;
        } else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction.AsyncAction);
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map
},{"tslib":196,"./AsyncAction":136,"./AsyncScheduler":137}],28:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identity = identity;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
},{}],29:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObservable = isObservable;

var _Observable = require('../Observable');

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
//# sourceMappingURL=isObservable.js.map
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
},{"../Observable":8}],30:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var ArgumentOutOfRangeError = exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map
},{}],31:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var EmptyError = exports.EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map
},{}],34:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var TimeoutError = exports.TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map
},{}],144:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapOperator = undefined;
exports.map = map;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}();
exports.MapOperator = MapOperator;

var MapSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber.Subscriber);
//# sourceMappingURL=map.js.map
},{"tslib":196,"../Subscriber":16}],35:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallback = bindCallback;

var _Observable = require('../Observable');

var _AsyncSubject = require('../AsyncSubject');

var _map = require('../operators/map');

var _canReportError = require('../util/canReportError');

var _isArray = require('../util/isArray');

var _isScheduler = require('../util/isScheduler');

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0, _isScheduler.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        } else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
                    return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
                }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler
        };
        return new _Observable.Observable(function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    } catch (err) {
                        if ((0, _canReportError.canReportError)(subject)) {
                            subject.error(err);
                        } else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            } else {
                var state = {
                    args: args, subscriber: subscriber, params: params
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args,
        subscriber = state.subscriber,
        params = state.params;
    var callbackFunc = params.callbackFunc,
        context = params.context,
        scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        } catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value,
        subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err,
        subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map
},{"../Observable":8,"../AsyncSubject":12,"../operators/map":144,"../util/canReportError":112,"../util/isArray":116,"../util/isScheduler":145}],36:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require('../Observable');

var _AsyncSubject = require('../AsyncSubject');

var _map = require('../operators/map');

var _canReportError = require('../util/canReportError');

var _isScheduler = require('../util/isScheduler');

var _isArray = require('../util/isArray');

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0, _isScheduler.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        } else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
                    return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
                }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this
        };
        return new _Observable.Observable(function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject.AsyncSubject();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    } catch (err) {
                        if ((0, _canReportError.canReportError)(subject)) {
                            subject.error(err);
                        } else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            } else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params,
        subscriber = state.subscriber,
        context = state.context;
    var callbackFunc = params.callbackFunc,
        args = params.args,
        scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject.AsyncSubject();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            } else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        } catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value,
        subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err,
        subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map
},{"../Observable":8,"../AsyncSubject":12,"../operators/map":144,"../util/canReportError":112,"../util/isScheduler":145,"../util/isArray":116}],134:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OuterSubscriber = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber.Subscriber);
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map
},{"tslib":196,"./Subscriber":16}],188:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InnerSubscriber = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber.Subscriber);
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map
},{"tslib":196,"./Subscriber":16}],192:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToPromise = undefined;

var _hostReportError = require('./hostReportError');

var subscribeToPromise = exports.subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) {
            return subscriber.error(err);
        }).then(null, _hostReportError.hostReportError);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
},{"./hostReportError":121}],160:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSymbolIterator = getSymbolIterator;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/exports.iterator = getSymbolIterator();
var $$iterator = exports.$$iterator = iterator;
//# sourceMappingURL=iterator.js.map
},{}],193:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToIterable = undefined;

var _iterator = require('../symbol/iterator');

var subscribeToIterable = exports.subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_iterator.iterator]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
},{"../symbol/iterator":160}],194:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToObservable = undefined;

var _observable = require('../symbol/observable');

var subscribeToObservable = exports.subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_observable.observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
},{"../symbol/observable":20}],150:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
//# sourceMappingURL=isArrayLike.js.map
},{}],149:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPromise = isPromise;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map
},{}],156:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeTo = undefined;

var _Observable = require('../Observable');

var _subscribeToArray = require('./subscribeToArray');

var _subscribeToPromise = require('./subscribeToPromise');

var _subscribeToIterable = require('./subscribeToIterable');

var _subscribeToObservable = require('./subscribeToObservable');

var _isArrayLike = require('./isArrayLike');

var _isPromise = require('./isPromise');

var _isObject = require('./isObject');

var _iterator = require('../symbol/iterator');

var _observable = require('../symbol/observable');

/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = exports.subscribeTo = function (result) {
    if (result instanceof _Observable.Observable) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            } else {
                return result.subscribe(subscriber);
            }
        };
    } else if (result && typeof result[_observable.observable] === 'function') {
        return (0, _subscribeToObservable.subscribeToObservable)(result);
    } else if ((0, _isArrayLike.isArrayLike)(result)) {
        return (0, _subscribeToArray.subscribeToArray)(result);
    } else if ((0, _isPromise.isPromise)(result)) {
        return (0, _subscribeToPromise.subscribeToPromise)(result);
    } else if (result && typeof result[_iterator.iterator] === 'function') {
        return (0, _subscribeToIterable.subscribeToIterable)(result);
    } else {
        var value = (0, _isObject.isObject)(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map
},{"../Observable":8,"./subscribeToArray":191,"./subscribeToPromise":192,"./subscribeToIterable":193,"./subscribeToObservable":194,"./isArrayLike":150,"./isPromise":149,"./isObject":117,"../symbol/iterator":160,"../symbol/observable":20}],146:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require('../InnerSubscriber');

var _subscribeTo = require('./subscribeTo');

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) {
        destination = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    }
    if (destination.closed) {
        return;
    }
    return (0, _subscribeTo.subscribeTo)(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map
},{"../InnerSubscriber":188,"./subscribeTo":156}],37:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CombineLatestSubscriber = exports.CombineLatestOperator = undefined;
exports.combineLatest = combineLatest;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isScheduler = require('../util/isScheduler');

var _isArray = require('../util/isArray');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

var _fromArray = require('./fromArray');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
        observables = observables[0];
    }
    return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}();
exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        } else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add((0, _subscribeToResult.subscribeToResult)(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            } else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber.OuterSubscriber);
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map
},{"tslib":196,"../util/isScheduler":145,"../util/isArray":116,"../OuterSubscriber":134,"../util/subscribeToResult":146,"./fromArray":147}],152:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require('../symbol/observable');

function isInteropObservable(input) {
    return input && typeof input[_observable.observable] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
},{"../symbol/observable":20}],151:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIterable = isIterable;

var _iterator = require('../symbol/iterator');

function isIterable(input) {
    return input && typeof input[_iterator.iterator] === 'function';
}
//# sourceMappingURL=isIterable.js.map
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
},{"../symbol/iterator":160}],153:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromPromise = fromPromise;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _subscribeToPromise = require('../util/subscribeToPromise');

function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable((0, _subscribeToPromise.subscribeToPromise)(input));
    } else {
        return new _Observable.Observable(function (subscriber) {
            var sub = new _Subscription.Subscription();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () {
                            return subscriber.complete();
                        }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () {
                        return subscriber.error(err);
                    }));
                });
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromPromise.js.map
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */
},{"../Observable":8,"../Subscription":14,"../util/subscribeToPromise":192}],154:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromIterable = fromIterable;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _iterator = require('../symbol/iterator');

var _subscribeToIterable = require('../util/subscribeToIterable');

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new _Observable.Observable((0, _subscribeToIterable.subscribeToIterable)(input));
    } else {
        return new _Observable.Observable(function (subscriber) {
            var sub = new _Subscription.Subscription();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[_iterator.iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    } catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    } else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromIterable.js.map
},{"../Observable":8,"../Subscription":14,"../symbol/iterator":160,"../util/subscribeToIterable":193}],155:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromObservable = fromObservable;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _observable = require('../symbol/observable');

var _subscribeToObservable = require('../util/subscribeToObservable');

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable((0, _subscribeToObservable.subscribeToObservable)(input));
    } else {
        return new _Observable.Observable(function (subscriber) {
            var sub = new _Subscription.Subscription();
            sub.add(scheduler.schedule(function () {
                var observable = input[_observable.observable]();
                sub.add(observable.subscribe({
                    next: function (value) {
                        sub.add(scheduler.schedule(function () {
                            return subscriber.next(value);
                        }));
                    },
                    error: function (err) {
                        sub.add(scheduler.schedule(function () {
                            return subscriber.error(err);
                        }));
                    },
                    complete: function () {
                        sub.add(scheduler.schedule(function () {
                            return subscriber.complete();
                        }));
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromObservable.js.map
},{"../Observable":8,"../Subscription":14,"../symbol/observable":20,"../util/subscribeToObservable":194}],41:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.from = from;

var _Observable = require('../Observable');

var _isPromise = require('../util/isPromise');

var _isArrayLike = require('../util/isArrayLike');

var _isInteropObservable = require('../util/isInteropObservable');

var _isIterable = require('../util/isIterable');

var _fromArray = require('./fromArray');

var _fromPromise = require('./fromPromise');

var _fromIterable = require('./fromIterable');

var _fromObservable = require('./fromObservable');

var _subscribeTo = require('../util/subscribeTo');

/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable.Observable) {
            return input;
        }
        return new _Observable.Observable((0, _subscribeTo.subscribeTo)(input));
    }
    if (input != null) {
        if ((0, _isInteropObservable.isInteropObservable)(input)) {
            return (0, _fromObservable.fromObservable)(input, scheduler);
        } else if ((0, _isPromise.isPromise)(input)) {
            return (0, _fromPromise.fromPromise)(input, scheduler);
        } else if ((0, _isArrayLike.isArrayLike)(input)) {
            return (0, _fromArray.fromArray)(input, scheduler);
        } else if ((0, _isIterable.isIterable)(input) || typeof input === 'string') {
            return (0, _fromIterable.fromIterable)(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=from.js.map
},{"../Observable":8,"../util/isPromise":149,"../util/isArrayLike":150,"../util/isInteropObservable":152,"../util/isIterable":151,"./fromArray":147,"./fromPromise":153,"./fromIterable":154,"./fromObservable":155,"../util/subscribeTo":156}],195:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MergeMapSubscriber = exports.MergeMapOperator = undefined;
exports.mergeMap = mergeMap;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _subscribeToResult = require('../util/subscribeToResult');

var _OuterSubscriber = require('../OuterSubscriber');

var _InnerSubscriber = require('../InnerSubscriber');

var _map = require('./map');

var _from = require('../observable/from');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) {
            return source.pipe(mergeMap(function (a, i) {
                return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
                    return resultSelector(a, b, i, ii);
                }));
            }, concurrent));
        };
    } else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) {
        return source.lift(new MergeMapOperator(project, concurrent));
    };
}
var MergeMapOperator = /*@__PURE__*/function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}();
exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        } else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);
exports.MergeMapSubscriber = MergeMapSubscriber;
//# sourceMappingURL=mergeMap.js.map
},{"tslib":196,"../util/subscribeToResult":146,"../OuterSubscriber":134,"../InnerSubscriber":188,"./map":144,"../observable/from":41}],158:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require('./mergeMap');

var _identity = require('../util/identity');

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
},{"./mergeMap":195,"../util/identity":28}],148:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatAll = concatAll;

var _mergeAll = require('./mergeAll');

function concatAll() {
    return (0, _mergeAll.mergeAll)(1);
}
//# sourceMappingURL=concatAll.js.map
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
},{"./mergeAll":158}],38:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = concat;

var _isScheduler = require('../util/isScheduler');

var _of = require('./of');

var _from = require('./from');

var _concatAll = require('../operators/concatAll');

/** PURE_IMPORTS_START _util_isScheduler,_of,_from,_operators_concatAll PURE_IMPORTS_END */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1 || observables.length === 2 && (0, _isScheduler.isScheduler)(observables[1])) {
        return (0, _from.from)(observables[0]);
    }
    return (0, _concatAll.concatAll)()(_of.of.apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map
},{"../util/isScheduler":145,"./of":50,"./from":41,"../operators/concatAll":148}],39:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defer = defer;

var _Observable = require('../Observable');

var _from = require('./from');

var _empty = require('./empty');

function defer(observableFactory) {
    return new _Observable.Observable(function (subscriber) {
        var input;
        try {
            input = observableFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? (0, _from.from)(input) : (0, _empty.empty)();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
},{"../Observable":8,"./from":41,"./empty":40}],42:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forkJoin = forkJoin;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _empty = require('./empty');

var _subscribeToResult = require('../util/subscribeToResult');

var _OuterSubscriber = require('../OuterSubscriber');

var _map = require('../operators/map');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && (0, _isArray.isArray)(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return _empty.EMPTY;
    }
    if (resultSelector) {
        return forkJoin(sources).pipe((0, _map.map)(function (args) {
            return resultSelector.apply(void 0, args);
        }));
    }
    return new _Observable.Observable(function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
} /** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */

var ForkJoinSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = (0, _subscribeToResult.subscribeToResult)(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this,
            destination = _a.destination,
            haveValues = _a.haveValues,
            values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(_OuterSubscriber.OuterSubscriber);
//# sourceMappingURL=forkJoin.js.map
},{"tslib":196,"../Observable":8,"../util/isArray":116,"./empty":40,"../util/subscribeToResult":146,"../OuterSubscriber":134,"../operators/map":144}],43:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEvent = fromEvent;

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _isFunction = require('../util/isFunction');

var _map = require('../operators/map');

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if ((0, _isFunction.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0, _map.map)(function (args) {
            return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
    }
    return new _Observable.Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            } else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () {
            return source_1.removeEventListener(eventName, handler, options);
        };
    } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () {
            return source_2.off(eventName, handler);
        };
    } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () {
            return source_3.removeListener(eventName, handler);
        };
    } else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    } else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map
},{"../Observable":8,"../util/isArray":116,"../util/isFunction":118,"../operators/map":144}],44:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _isFunction = require('../util/isFunction');

var _map = require('../operators/map');

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe((0, _map.map)(function (args) {
            return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
    }
    return new _Observable.Observable(function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!(0, _isFunction.isFunction)(removeHandler)) {
            return undefined;
        }
        return function () {
            return removeHandler(handler, retValue);
        };
    });
}
//# sourceMappingURL=fromEventPattern.js.map
},{"../Observable":8,"../util/isArray":116,"../util/isFunction":118,"../operators/map":144}],45:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = generate;

var _Observable = require('../Observable');

var _identity = require('../util/identity');

var _isScheduler = require('../util/isScheduler');

function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _identity.identity;
        scheduler = options.scheduler;
    } else if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _identity.identity;
        scheduler = resultSelectorOrObservable;
    } else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable.Observable(function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                } catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
} /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

function dispatch(state) {
    var subscriber = state.subscriber,
        condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
    } else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    } catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map
},{"../Observable":8,"../util/identity":28,"../util/isScheduler":145}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iif = iif;

var _defer = require('./defer');

var _empty = require('./empty');

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty.EMPTY;
    }
    if (falseResult === void 0) {
        falseResult = _empty.EMPTY;
    }
    return (0, _defer.defer)(function () {
        return condition() ? trueResult : falseResult;
    });
}
//# sourceMappingURL=iif.js.map
},{"./defer":39,"./empty":40}],159:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumeric = isNumeric;

var _isArray = require('./isArray');

function isNumeric(val) {
    return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
//# sourceMappingURL=isNumeric.js.map
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
},{"./isArray":116}],47:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = interval;

var _Observable = require('../Observable');

var _async = require('../scheduler/async');

var _isNumeric = require('../util/isNumeric');

function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _async.async;
    }
    if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _async.async;
    }
    return new _Observable.Observable(function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
} /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

function dispatch(state) {
    var subscriber = state.subscriber,
        counter = state.counter,
        period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map
},{"../Observable":8,"../scheduler/async":22,"../util/isNumeric":159}],48:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = merge;

var _Observable = require('../Observable');

var _isScheduler = require('../util/isScheduler');

var _mergeAll = require('../operators/mergeAll');

var _fromArray = require('./fromArray');

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if ((0, _isScheduler.isScheduler)(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    } else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable.Observable) {
        return observables[0];
    }
    return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}
//# sourceMappingURL=merge.js.map
},{"../Observable":8,"../util/isScheduler":145,"../operators/mergeAll":158,"./fromArray":147}],49:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NEVER = undefined;
exports.never = never;

var _Observable = require('../Observable');

var _noop = require('../util/noop');

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER = /*@__PURE__*/exports.NEVER = new _Observable.Observable(_noop.noop);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map
},{"../Observable":8,"../util/noop":27}],51:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require('../Observable');

var _from = require('./from');

var _isArray = require('../util/isArray');

var _empty = require('./empty');

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty.EMPTY;
    }
    var first = sources[0],
        remainder = sources.slice(1);
    if (sources.length === 1 && (0, _isArray.isArray)(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable.Observable(function (subscriber) {
        var subNext = function () {
            return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
        };
        return (0, _from.from)(first).subscribe({
            next: function (value) {
                subscriber.next(value);
            },
            error: subNext,
            complete: subNext
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map
},{"../Observable":8,"./from":41,"../util/isArray":116,"./empty":40}],52:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    } else {
        return new _Observable.Observable(function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription.Subscription();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys,
        index = state.index,
        subscriber = state.subscriber,
        subscription = state.subscription,
        obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        } else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map
},{"../Observable":8,"../Subscription":14}],53:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RaceSubscriber = exports.RaceOperator = undefined;
exports.race = race;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isArray = require('../util/isArray');

var _fromArray = require('./fromArray');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if ((0, _isArray.isArray)(observables[0])) {
            observables = observables[0];
        } else {
            return observables[0];
        }
    }
    return (0, _fromArray.fromArray)(observables, undefined).lift(new RaceOperator());
} /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

var RaceOperator = /*@__PURE__*/function () {
    function RaceOperator() {}
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}();
exports.RaceOperator = RaceOperator;

var RaceSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        } else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber.OuterSubscriber);
exports.RaceSubscriber = RaceSubscriber;
//# sourceMappingURL=race.js.map
},{"tslib":196,"../util/isArray":116,"./fromArray":147,"../OuterSubscriber":134,"../util/subscribeToResult":146}],54:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require('../Observable');

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    if (count === void 0) {
        count = 0;
    }
    return new _Observable.Observable(function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        } else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
} /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function dispatch(state) {
    var start = state.start,
        index = state.index,
        count = state.count,
        subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map
},{"../Observable":8}],56:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = timer;

var _Observable = require('../Observable');

var _async = require('../scheduler/async');

var _isNumeric = require('../util/isNumeric');

var _isScheduler = require('../util/isScheduler');

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if ((0, _isNumeric.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    } else if ((0, _isScheduler.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0, _isScheduler.isScheduler)(scheduler)) {
        scheduler = _async.async;
    }
    return new _Observable.Observable(function (subscriber) {
        var due = (0, _isNumeric.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index,
        period = state.period,
        subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    } else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map
},{"../Observable":8,"../scheduler/async":22,"../util/isNumeric":159,"../util/isScheduler":145}],57:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.using = using;

var _Observable = require('../Observable');

var _from = require('./from');

var _empty = require('./empty');

function using(resourceFactory, observableFactory) {
    return new _Observable.Observable(function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? (0, _from.from)(result) : _empty.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
},{"../Observable":8,"./from":41,"./empty":40}],58:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZipSubscriber = exports.ZipOperator = undefined;
exports.zip = zip;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _fromArray = require('./fromArray');

var _isArray = require('../util/isArray');

var _Subscriber = require('../Subscriber');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

var _iterator = require('../../internal/symbol/iterator');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return (0, _fromArray.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
} /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */

var ZipOperator = /*@__PURE__*/function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}();
exports.ZipOperator = ZipOperator;

var ZipSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if ((0, _isArray.isArray)(value)) {
            iterators.push(new StaticArrayIterator(value));
        } else if (typeof value[_iterator.iterator] === 'function') {
            iterators.push(new StaticIterator(value[_iterator.iterator]()));
        } else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            } else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        } else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber.Subscriber);
exports.ZipSubscriber = ZipSubscriber;

var StaticIterator = /*@__PURE__*/function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}();
var StaticArrayIterator = /*@__PURE__*/function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_iterator.iterator] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}();
var ZipBufferIterator = /*@__PURE__*/function (_super) {
    tslib_1.__extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_iterator.iterator] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        } else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        } else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return (0, _subscribeToResult.subscribeToResult)(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(_OuterSubscriber.OuterSubscriber);
//# sourceMappingURL=zip.js.map
},{"tslib":196,"./fromArray":147,"../util/isArray":116,"../Subscriber":16,"../OuterSubscriber":134,"../util/subscribeToResult":146,"../../internal/symbol/iterator":160}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Observable = require('./internal/Observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});

var _ConnectableObservable = require('./internal/observable/ConnectableObservable');

Object.defineProperty(exports, 'ConnectableObservable', {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});

var _groupBy = require('./internal/operators/groupBy');

Object.defineProperty(exports, 'GroupedObservable', {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});

var _observable = require('./internal/symbol/observable');

Object.defineProperty(exports, 'observable', {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});

var _Subject = require('./internal/Subject');

Object.defineProperty(exports, 'Subject', {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});

var _BehaviorSubject = require('./internal/BehaviorSubject');

Object.defineProperty(exports, 'BehaviorSubject', {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});

var _ReplaySubject = require('./internal/ReplaySubject');

Object.defineProperty(exports, 'ReplaySubject', {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});

var _AsyncSubject = require('./internal/AsyncSubject');

Object.defineProperty(exports, 'AsyncSubject', {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});

var _asap = require('./internal/scheduler/asap');

Object.defineProperty(exports, 'asapScheduler', {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});

var _async = require('./internal/scheduler/async');

Object.defineProperty(exports, 'asyncScheduler', {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});

var _queue = require('./internal/scheduler/queue');

Object.defineProperty(exports, 'queueScheduler', {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});

var _animationFrame = require('./internal/scheduler/animationFrame');

Object.defineProperty(exports, 'animationFrameScheduler', {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});

var _VirtualTimeScheduler = require('./internal/scheduler/VirtualTimeScheduler');

Object.defineProperty(exports, 'VirtualTimeScheduler', {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, 'VirtualAction', {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});

var _Scheduler = require('./internal/Scheduler');

Object.defineProperty(exports, 'Scheduler', {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});

var _Subscription = require('./internal/Subscription');

Object.defineProperty(exports, 'Subscription', {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});

var _Subscriber = require('./internal/Subscriber');

Object.defineProperty(exports, 'Subscriber', {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});

var _Notification = require('./internal/Notification');

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});

var _pipe = require('./internal/util/pipe');

Object.defineProperty(exports, 'pipe', {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});

var _noop = require('./internal/util/noop');

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});

var _identity = require('./internal/util/identity');

Object.defineProperty(exports, 'identity', {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});

var _isObservable = require('./internal/util/isObservable');

Object.defineProperty(exports, 'isObservable', {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});

var _ArgumentOutOfRangeError = require('./internal/util/ArgumentOutOfRangeError');

Object.defineProperty(exports, 'ArgumentOutOfRangeError', {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});

var _EmptyError = require('./internal/util/EmptyError');

Object.defineProperty(exports, 'EmptyError', {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});

var _ObjectUnsubscribedError = require('./internal/util/ObjectUnsubscribedError');

Object.defineProperty(exports, 'ObjectUnsubscribedError', {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});

var _UnsubscriptionError = require('./internal/util/UnsubscriptionError');

Object.defineProperty(exports, 'UnsubscriptionError', {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});

var _TimeoutError = require('./internal/util/TimeoutError');

Object.defineProperty(exports, 'TimeoutError', {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});

var _bindCallback = require('./internal/observable/bindCallback');

Object.defineProperty(exports, 'bindCallback', {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});

var _bindNodeCallback = require('./internal/observable/bindNodeCallback');

Object.defineProperty(exports, 'bindNodeCallback', {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});

var _combineLatest = require('./internal/observable/combineLatest');

Object.defineProperty(exports, 'combineLatest', {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});

var _concat = require('./internal/observable/concat');

Object.defineProperty(exports, 'concat', {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});

var _defer = require('./internal/observable/defer');

Object.defineProperty(exports, 'defer', {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});

var _empty = require('./internal/observable/empty');

Object.defineProperty(exports, 'empty', {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});

var _forkJoin = require('./internal/observable/forkJoin');

Object.defineProperty(exports, 'forkJoin', {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});

var _from = require('./internal/observable/from');

Object.defineProperty(exports, 'from', {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});

var _fromEvent = require('./internal/observable/fromEvent');

Object.defineProperty(exports, 'fromEvent', {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});

var _fromEventPattern = require('./internal/observable/fromEventPattern');

Object.defineProperty(exports, 'fromEventPattern', {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});

var _generate = require('./internal/observable/generate');

Object.defineProperty(exports, 'generate', {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});

var _iif = require('./internal/observable/iif');

Object.defineProperty(exports, 'iif', {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});

var _interval = require('./internal/observable/interval');

Object.defineProperty(exports, 'interval', {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});

var _merge = require('./internal/observable/merge');

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});

var _never = require('./internal/observable/never');

Object.defineProperty(exports, 'never', {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});

var _of = require('./internal/observable/of');

Object.defineProperty(exports, 'of', {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});

var _onErrorResumeNext = require('./internal/observable/onErrorResumeNext');

Object.defineProperty(exports, 'onErrorResumeNext', {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});

var _pairs = require('./internal/observable/pairs');

Object.defineProperty(exports, 'pairs', {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});

var _race = require('./internal/observable/race');

Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});

var _range = require('./internal/observable/range');

Object.defineProperty(exports, 'range', {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});

var _throwError = require('./internal/observable/throwError');

Object.defineProperty(exports, 'throwError', {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});

var _timer = require('./internal/observable/timer');

Object.defineProperty(exports, 'timer', {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});

var _using = require('./internal/observable/using');

Object.defineProperty(exports, 'using', {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});

var _zip = require('./internal/observable/zip');

Object.defineProperty(exports, 'zip', {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, 'EMPTY', {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, 'NEVER', {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});

var _config = require('./internal/config');

Object.defineProperty(exports, 'config', {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});
},{"./internal/Observable":8,"./internal/observable/ConnectableObservable":18,"./internal/operators/groupBy":19,"./internal/symbol/observable":20,"./internal/Subject":9,"./internal/BehaviorSubject":10,"./internal/ReplaySubject":11,"./internal/AsyncSubject":12,"./internal/scheduler/asap":21,"./internal/scheduler/async":22,"./internal/scheduler/queue":23,"./internal/scheduler/animationFrame":24,"./internal/scheduler/VirtualTimeScheduler":25,"./internal/Scheduler":13,"./internal/Subscription":14,"./internal/Subscriber":16,"./internal/Notification":15,"./internal/util/pipe":26,"./internal/util/noop":27,"./internal/util/identity":28,"./internal/util/isObservable":29,"./internal/util/ArgumentOutOfRangeError":30,"./internal/util/EmptyError":31,"./internal/util/ObjectUnsubscribedError":32,"./internal/util/UnsubscriptionError":33,"./internal/util/TimeoutError":34,"./internal/observable/bindCallback":35,"./internal/observable/bindNodeCallback":36,"./internal/observable/combineLatest":37,"./internal/observable/concat":38,"./internal/observable/defer":39,"./internal/observable/empty":40,"./internal/observable/forkJoin":42,"./internal/observable/from":41,"./internal/observable/fromEvent":43,"./internal/observable/fromEventPattern":44,"./internal/observable/generate":45,"./internal/observable/iif":46,"./internal/observable/interval":47,"./internal/observable/merge":48,"./internal/observable/never":49,"./internal/observable/of":50,"./internal/observable/onErrorResumeNext":51,"./internal/observable/pairs":52,"./internal/observable/race":53,"./internal/observable/range":54,"./internal/observable/throwError":55,"./internal/observable/timer":56,"./internal/observable/using":57,"./internal/observable/zip":58,"./internal/config":17}],4:[function(require,module,exports) {
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxjs = require('rxjs');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var observable$ = (0, _rxjs.from)([1, 2, 3, 4, 5]);

var subscribe = {
  next: function next(value) {
    return console.log(value);
  },
  complete: function complete() {
    return console.log('done');
  },
  error: function error() {
    return console.log('error');
  }
};

var DoubleSubscriber = function (_Subscriber) {
  _inherits(DoubleSubscriber, _Subscriber);

  function DoubleSubscriber() {
    _classCallCheck(this, DoubleSubscriber);

    return _possibleConstructorReturn(this, (DoubleSubscriber.__proto__ || Object.getPrototypeOf(DoubleSubscriber)).apply(this, arguments));
  }

  _createClass(DoubleSubscriber, [{
    key: '_next',
    value: function _next(value) {
      console.log('*:', value);
      this.destination.next(value * 2);
    }
  }]);

  return DoubleSubscriber;
}(_rxjs.Subscriber);

// observable$.subscribe(new DoubleSubscriber(subscribe))

// const o$ = new Observable()
// o$.source = observable$
// o$.operator = {
//   call(sub, source) {
//     source.subscribe(new DoubleSubscriber(sub))
//   }
// }
// o$.subscribe(subscribe)
// observable$.subscribe(subscribe) // 缺少了 source


// 方法1
// const double = source => {
//   const o$ = new Observable()
//   o$.source = observable$
//   o$.operator = {
//     call(sub, source) {
//       source.subscribe(new DoubleSubscriber(sub))
//     }
//   }
//   return o$
// }

// 使用 lift


var double = function double(source) {
  return source.lift({
    call: function call(sub, source) {
      source.subscribe(new DoubleSubscriber(sub));
    }
  });
};
// 用 pipe 解决
observable$.pipe(double).subscribe(subscribe);
},{"rxjs":6}],197:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '56842' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[197,4])
//# sourceMappingURL=/dist/a498ac4101b6bb0cb013c647058c0054.map