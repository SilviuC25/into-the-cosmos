module.exports = {

"[project]/src/app/data/timeline.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"year\":\"1609\",\"title\":\"Galileo's Telescope\",\"description\":\"Galileo Galilei improves the telescope and observes the Moon, Jupiter's moons, and phases of Venus, shifting the paradigm of celestial understanding.\",\"image\":\"/images/timeline/galileo.avif\"},{\"year\":\"1865\",\"title\":\"From the Earth to the Moon\",\"description\":\"Jules Verne publishes the science fiction novel 'From the Earth to the Moon', inspiring generations of scientists and space dreamers.\",\"image\":\"/images/timeline/verne.jpg\"},{\"year\":\"1926\",\"title\":\"First Liquid-Fueled Rocket\",\"description\":\"Robert Goddard successfully launches the world's first liquid-fueled rocket, paving the way for modern rocketry.\",\"image\":\"/images/timeline/goddard.webp\"},{\"year\":\"1957\",\"title\":\"Sputnik 1 Launch\",\"description\":\"The Soviet Union launches the first artificial satellite, Sputnik 1, initiating the space age and triggering the space race.\",\"image\":\"/images/timeline/sputnik.jpg\"},{\"year\":\"1961\",\"title\":\"First Human in Space\",\"description\":\"Yuri Gagarin becomes the first human to travel into space aboard Vostok 1, completing one orbit of Earth in 108 minutes.\",\"image\":\"/images/timeline/gagarin.jpg\"},{\"year\":\"1969\",\"title\":\"Moon Landing\",\"description\":\"Apollo 11 lands the first humans on the Moon. Neil Armstrong and Buzz Aldrin walk the lunar surface while Michael Collins orbits above.\",\"image\":\"/images/timeline/moon-landing.avif\"},{\"year\":\"1971\",\"title\":\"First Space Station\",\"description\":\"The Soviet Union launches Salyut 1, the first space station, ushering in the era of long-term human habitation in orbit.\",\"image\":\"/images/timeline/salyut1.webp\"},{\"year\":\"1981\",\"title\":\"First Space Shuttle Flight\",\"description\":\"NASA's Columbia becomes the first reusable spacecraft to launch into orbit, revolutionizing access to space.\",\"image\":\"/images/timeline/columbia.jpg\"},{\"year\":\"1990\",\"title\":\"Hubble Space Telescope\",\"description\":\"Hubble is launched and begins sending detailed images of deep space, transforming astronomy with never-before-seen clarity.\",\"image\":\"/images/timeline/hubble.webp\"},{\"year\":\"1998\",\"title\":\"International Space Station\",\"description\":\"Construction of the ISS begins, marking an unprecedented international collaboration in space science and engineering.\",\"image\":\"/images/timeline/iss.jpg\"},{\"year\":\"2012\",\"title\":\"Curiosity Rover on Mars\",\"description\":\"NASA's Curiosity rover lands on Mars to explore the planet's geology and climate, searching for signs of past life.\",\"image\":\"/images/timeline/curiosity.webp\"},{\"year\":\"2021\",\"title\":\"James Webb Telescope Launch\",\"description\":\"The JWST is launched, offering a powerful new eye on the cosmos with infrared capabilities that reach far back into the early universe.\",\"image\":\"/images/timeline/webb.webp\"}]"));}}),
"[project]/src/app/components/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const baseClasses = 'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-2xl transition-colors duration-300 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
const variants = {
    primary: 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg',
    secondary: 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-100',
    ghost: 'bg-transparent text-blue-700 hover:bg-blue-100'
};
const Button = ({ variant = 'primary', className = '', children, ...props })=>{
    const combinedClassName = `${baseClasses} ${variants[variant] || ''} ${className}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        whileTap: {
            scale: 0.96
        },
        whileHover: {
            scale: 1.03
        },
        className: combinedClassName.trim(),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/components/Button.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;
}}),
"[project]/src/app/components/TimelineEvent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TimelineEvent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TimelineEvent({ event, onPrev, onNext, hasPrev, hasNext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-10 sm:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: -100
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "max-w-4xl w-full text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-widest uppercase",
                            children: event.year
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        event.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-64 sm:h-80 mb-6 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 dark:ring-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: event.image,
                                alt: event.title,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/TimelineEvent.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed",
                            children: event.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, event.year, true, {
                    fileName: "[project]/src/app/components/TimelineEvent.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/TimelineEvent.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: onPrev,
                        disabled: !hasPrev,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TimelineEvent.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: onNext,
                        disabled: !hasNext,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/TimelineEvent.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/TimelineEvent.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/TimelineEvent.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/TimelineEvent.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/timeline/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TimelinePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$timeline$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/data/timeline.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TimelineEvent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/TimelineEvent.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TimelinePage() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentEvent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$timeline$2e$json__$28$json$29$__["default"][index];
    const goPrev = ()=>{
        if (index > 0) setIndex(index - 1);
    };
    const goNext = ()=>{
        if (index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$timeline$2e$json__$28$json$29$__["default"].length - 1) setIndex(index + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-10 pb-20 px-4 sm:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-center mb-10 text-blue-950",
                children: "Milestones of Space Exploration"
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$TimelineEvent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                event: currentEvent,
                onPrev: goPrev,
                onNext: goNext,
                hasPrev: index > 0,
                hasNext: index < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$2f$timeline$2e$json__$28$json$29$__["default"].length - 1
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_cdec2d7f._.js.map