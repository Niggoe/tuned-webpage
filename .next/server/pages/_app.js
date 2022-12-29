"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Shared/Loader.js


class Loader extends external_react_.Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: `preloader ${this.props.loading ? "" : "preloader-deactivate"}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: "d-table",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: "d-table-cell",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "spinner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "rect1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "rect2"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "rect3"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "rect4"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                                className: "rect5"
                            })
                        ]
                    })
                })
            })
        });
    }
}
/* harmony default export */ const Shared_Loader = (Loader);

;// CONCATENATED MODULE: ./components/Shared/GoTop.js


class GoTop extends external_react_.Component {
    constructor(props){
        super(props);
        this.state = {
            is_visible: false
        };
    }
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
            scrollComponent.toggleVisibility();
        });
    }
    toggleVisibility() {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        const { is_visible  } = this.state;
        return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: "scroll-to-top",
            children: is_visible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top",
                onClick: ()=>this.scrollToTop(),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                        className: "bx bx-chevrons-up"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("i", {
                        className: "bx bx-chevrons-up bx-fade-up"
                    })
                ]
            })
        });
    }
};

;// CONCATENATED MODULE: ./pages/_app.js








// Global styles






class MyApp extends app["default"] {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(()=>this.setState({
                loading: false
            }), 2000);
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    render() {
        const { Component , pageProps  } = this.props;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("title", {
                            children: "Jumpx - React Next.js AI & IT Startup Template"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Shared_Loader, {
                    loading: this.state.loading
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(GoTop, {
                    scrollStepInPx: "100",
                    delayInMs: "10.50"
                })
            ]
        });
    }
};


/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,544], () => (__webpack_exec__(7365)));
module.exports = __webpack_exports__;

})();