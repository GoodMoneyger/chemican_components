import * as v from "react";
import _, { forwardRef as Hp, createElement as Bc, useState as at, useLayoutEffect as Vd, createContext as Zs, useContext as Ds, useCallback as ke, useRef as pt, useEffect as wn, useMemo as ho, useInsertionEffect as E1, memo as M1, startTransition as P1, useImperativeHandle as N1 } from "react";
import * as Qs from "react-dom";
import A1, { flushSync as Pl } from "react-dom";
var Pa = { exports: {} }, Zo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xf;
function R1() {
  if (Xf) return Zo;
  Xf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Zo.Fragment = t, Zo.jsx = n, Zo.jsxs = n, Zo;
}
var Qo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zf;
function O1() {
  return Zf || (Zf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === j ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case x:
          return "Fragment";
        case b:
          return "Profiler";
        case C:
          return "StrictMode";
        case M:
          return "Suspense";
        case k:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case m:
            return "Portal";
          case S:
            return N.displayName || "Context";
          case y:
            return (N._context.displayName || "Context") + ".Consumer";
          case w:
            var P = N.render;
            return N = N.displayName, N || (N = P.displayName || P.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case E:
            return P = N.displayName || null, P !== null ? P : e(N.type) || "Memo";
          case A:
            P = N._payload, N = N._init;
            try {
              return e(N(P));
            } catch {
            }
        }
      return null;
    }
    function t(N) {
      return "" + N;
    }
    function n(N) {
      try {
        t(N);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var L = P.error, z = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return L.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(N);
      }
    }
    function r(N) {
      if (N === x) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === A)
        return "<...>";
      try {
        var P = e(N);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var N = $.A;
      return N === null ? null : N.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(N) {
      if (V.call(N, "key")) {
        var P = Object.getOwnPropertyDescriptor(N, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function i(N, P) {
      function L() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var N = e(this.type);
      return X[N] || (X[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function l(N, P, L, z, Z, U) {
      var I = L.ref;
      return N = {
        $$typeof: g,
        type: N,
        key: P,
        props: L,
        _owner: z
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function f(N, P, L, z, Z, U) {
      var I = P.children;
      if (I !== void 0)
        if (z)
          if (D(I)) {
            for (z = 0; z < I.length; z++)
              d(I[z]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(I);
      if (V.call(P, "key")) {
        I = e(N);
        var J = Object.keys(P).filter(function(de) {
          return de !== "key";
        });
        z = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", oe[I + z] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          I,
          J,
          I
        ), oe[I + z] = !0);
      }
      if (I = null, L !== void 0 && (n(L), I = "" + L), a(P) && (n(P.key), I = "" + P.key), "key" in P) {
        L = {};
        for (var re in P)
          re !== "key" && (L[re] = P[re]);
      } else L = P;
      return I && i(
        L,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), l(
        N,
        I,
        L,
        o(),
        Z,
        U
      );
    }
    function d(N) {
      h(N) ? N._store && (N._store.validated = 1) : typeof N == "object" && N !== null && N.$$typeof === A && (N._payload.status === "fulfilled" ? h(N._payload.value) && N._payload.value._store && (N._payload.value._store.validated = 1) : N._store && (N._store.validated = 1));
    }
    function h(N) {
      return typeof N == "object" && N !== null && N.$$typeof === g;
    }
    var p = _, g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), $ = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, D = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var F, X = {}, T = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), W = B(r(s)), oe = {};
    Qo.Fragment = x, Qo.jsx = function(N, P, L) {
      var z = 1e4 > $.recentlyCreatedOwnerStacks++;
      return f(
        N,
        P,
        L,
        !1,
        z ? Error("react-stack-top-frame") : T,
        z ? B(r(N)) : W
      );
    }, Qo.jsxs = function(N, P, L) {
      var z = 1e4 > $.recentlyCreatedOwnerStacks++;
      return f(
        N,
        P,
        L,
        !0,
        z ? Error("react-stack-top-frame") : T,
        z ? B(r(N)) : W
      );
    };
  })()), Qo;
}
var Qf;
function D1() {
  return Qf || (Qf = 1, process.env.NODE_ENV === "production" ? Pa.exports = R1() : Pa.exports = O1()), Pa.exports;
}
var u = D1();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var I1 = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = (e, t, n, r) => {
  const o = Hp(
    ({ color: s = "currentColor", size: a = 24, stroke: i = 2, title: c, className: l, children: f, ...d }, h) => Bc(
      "svg",
      {
        ref: h,
        ...I1[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, l].join(" "),
        ...e === "filled" ? {
          fill: s
        } : {
          strokeWidth: i,
          stroke: s
        },
        ...d
      },
      [
        c && Bc("title", { key: "svg-title" }, c),
        ...r.map(([p, g]) => Bc(p, g)),
        ...Array.isArray(f) ? f : [f]
      ]
    )
  );
  return o.displayName = `${n}`, o;
};
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], j1 = De("outline", "alert-circle", "AlertCircle", T1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], W1 = De("outline", "calendar-event", "CalendarEvent", $1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Gp = De("outline", "check", "Check", L1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Js = De("outline", "chevron-down", "ChevronDown", F1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], z1 = De("outline", "chevron-left", "ChevronLeft", V1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], zd = De("outline", "chevron-right", "ChevronRight", B1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], G1 = De("outline", "chevron-up", "ChevronUp", H1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], K1 = De("outline", "circle-check", "CircleCheck", Y1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], q1 = De("outline", "cloud-up", "CloudUp", U1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X1 = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Z1 = De("outline", "dots-vertical", "DotsVertical", X1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = [["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], Yp = De("outline", "grip-vertical", "GripVertical", Q1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J1 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], e2 = De("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", J1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], n2 = De("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", t2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], o2 = De("outline", "loader", "Loader", r2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [["path", { d: "M5 12l14 0", key: "svg-0" }]], a2 = De("outline", "minus", "Minus", s2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Kp = De("outline", "pencil", "Pencil", i2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Up = De("outline", "restore", "Restore", c2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Bd = De("outline", "search", "Search", l2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], u2 = De("outline", "trash-x", "TrashX", d2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], qp = De("outline", "trash", "Trash", f2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], p2 = De("outline", "user", "User", h2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Nl = De("outline", "x", "X", m2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], g2 = De("filled", "alert-circle-filled", "AlertCircleFilled", v2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], Xp = De("filled", "circle-check-filled", "CircleCheckFilled", y2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Jf = De("filled", "exclamation-circle-filled", "ExclamationCircleFilled", b2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], eh = De("filled", "folder-filled", "FolderFilled", x2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], ei = De("filled", "info-circle-filled", "InfoCircleFilled", w2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], S2 = De("filled", "lock-filled", "LockFilled", C2);
function th(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Vn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = th(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : th(e[o], null);
        }
      };
  };
}
function be(...e) {
  return v.useCallback(Vn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  const t = /* @__PURE__ */ _2(e), n = v.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = v.Children.toArray(s), c = i.find(E2);
    if (c) {
      const l = c.props.children, f = i.map((d) => d === c ? v.Children.count(l) > 1 ? v.Children.only(null) : v.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ u.jsx(t, { ...a, ref: o, children: v.isValidElement(l) ? v.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ro = /* @__PURE__ */ or("Slot");
// @__NO_SIDE_EFFECTS__
function _2(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (v.isValidElement(o)) {
      const a = P2(o), i = M2(s, o.props);
      return o.type !== v.Fragment && (i.ref = r ? Vn(r, a) : a), v.cloneElement(o, i);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zp = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Qp(e) {
  const t = ({ children: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Zp, t;
}
var k2 = /* @__PURE__ */ Qp("Slottable");
function E2(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zp;
}
function M2(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function P2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var N2 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ne = N2.reduce((e, t) => {
  const n = /* @__PURE__ */ or(`Primitive.${t}`), r = v.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Hd(e, t) {
  e && Qs.flushSync(() => e.dispatchEvent(t));
}
var Jp = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), A2 = "VisuallyHidden", Hi = v.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...Jp, ...e.style }
    }
  )
);
Hi.displayName = A2;
var R2 = Hi;
function O2(e, t) {
  const n = v.createContext(t), r = (s) => {
    const { children: a, ...i } = s, c = v.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = v.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function lt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = v.createContext(a), c = n.length;
    n = [...n, a];
    const l = (d) => {
      var C;
      const { scope: h, children: p, ...g } = d, m = ((C = h == null ? void 0 : h[e]) == null ? void 0 : C[c]) || i, x = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ u.jsx(m.Provider, { value: x, children: p });
    };
    l.displayName = s + "Provider";
    function f(d, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || i, g = v.useContext(p);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [l, f];
  }
  const o = () => {
    const s = n.map((a) => v.createContext(a));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || s;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, D2(o, ...t)];
}
function D2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(s)[`__scope${l}`];
        return { ...i, ...d };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ea(e) {
  const t = e + "CollectionProvider", [n, r] = lt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: x, children: C } = m, b = _.useRef(null), y = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: x, itemMap: y, collectionRef: b, children: C });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ or(i), l = _.forwardRef(
    (m, x) => {
      const { scope: C, children: b } = m, y = s(i, C), S = be(x, y.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: S, children: b });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ or(f), p = _.forwardRef(
    (m, x) => {
      const { scope: C, children: b, ...y } = m, S = _.useRef(null), w = be(x, S), M = s(f, C);
      return _.useEffect(() => (M.itemMap.set(S, { ref: S, ...y }), () => void M.itemMap.delete(S))), /* @__PURE__ */ u.jsx(h, { [d]: "", ref: w, children: b });
    }
  );
  p.displayName = f;
  function g(m) {
    const x = s(e + "CollectionConsumer", m);
    return _.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (M, k) => y.indexOf(M.ref.current) - y.indexOf(k.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    g,
    r
  ];
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var ct = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, I2 = v[" useInsertionEffect ".trim().toString()] || ct;
function kt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = T2({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const f = v.useRef(e !== void 0);
    v.useEffect(() => {
      const d = f.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const l = v.useCallback(
    (f) => {
      var d;
      if (i) {
        const h = j2(f) ? f(e) : f;
        h !== e && ((d = a.current) == null || d.call(a, h));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function T2({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = v.useState(e), o = v.useRef(n), s = v.useRef(t);
  return I2(() => {
    s.current = t;
  }, [t]), v.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function j2(e) {
  return typeof e == "function";
}
function $2(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var mt = (e) => {
  const { present: t, children: n } = e, r = W2(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), s = be(r.ref, L2(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: s }) : null;
};
mt.displayName = "Presence";
function W2(e) {
  const [t, n] = v.useState(), r = v.useRef(null), o = v.useRef(e), s = v.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = $2(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return v.useEffect(() => {
    const l = Na(r.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), ct(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = s.current, p = Na(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ct(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, d = (p) => {
        const m = Na(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && m && (c("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = Na(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: v.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Na(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function L2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var F2 = v[" useId ".trim().toString()] || (() => {
}), V2 = 0;
function Ze(e) {
  const [t, n] = v.useState(F2());
  return ct(() => {
    n((r) => r ?? String(V2++));
  }, [e]), t ? `radix-${t}` : "";
}
var Gi = "Collapsible", [z2, em] = lt(Gi), [B2, Gd] = z2(Gi), tm = v.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, l] = kt({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: Gi
    });
    return /* @__PURE__ */ u.jsx(
      B2,
      {
        scope: n,
        disabled: s,
        contentId: Ze(),
        open: c,
        onOpenToggle: v.useCallback(() => l((f) => !f), [l]),
        children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            "data-state": Kd(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
tm.displayName = Gi;
var nm = "CollapsibleTrigger", rm = v.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Gd(nm, n);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Kd(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
rm.displayName = nm;
var Yd = "CollapsibleContent", om = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Gd(Yd, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(mt, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ u.jsx(H2, { ...r, ref: t, present: s }) });
  }
);
om.displayName = Yd;
var H2 = v.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = Gd(Yd, n), [i, c] = v.useState(r), l = v.useRef(null), f = be(t, l), d = v.useRef(0), h = d.current, p = v.useRef(0), g = p.current, m = a.open || i, x = v.useRef(m), C = v.useRef(void 0);
  return v.useEffect(() => {
    const b = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), ct(() => {
    const b = l.current;
    if (b) {
      C.current = C.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const y = b.getBoundingClientRect();
      d.current = y.height, p.current = y.width, x.current || (b.style.transitionDuration = C.current.transitionDuration, b.style.animationName = C.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ u.jsx(
    ne.div,
    {
      "data-state": Kd(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function Kd(e) {
  return e ? "open" : "closed";
}
var G2 = tm, Y2 = rm, K2 = om, U2 = v.createContext(void 0);
function Oo(e) {
  const t = v.useContext(U2);
  return e || t || "ltr";
}
var cn = "Accordion", q2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Ud, X2, Z2] = ea(cn), [Yi] = lt(cn, [
  Z2,
  em
]), qd = em(), sm = _.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ u.jsx(Ud.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ u.jsx(tC, { ...s, ref: t }) : /* @__PURE__ */ u.jsx(eC, { ...o, ref: t }) });
  }
);
sm.displayName = cn;
var [am, Q2] = Yi(cn), [im, J2] = Yi(
  cn,
  { collapsible: !1 }
), eC = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = kt({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: cn
    });
    return /* @__PURE__ */ u.jsx(
      am,
      {
        scope: e.__scopeAccordion,
        value: _.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: _.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ u.jsx(im, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ u.jsx(cm, { ...a, ref: t }) })
      }
    );
  }
), tC = _.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = kt({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: cn
  }), c = _.useCallback(
    (f) => i((d = []) => [...d, f]),
    [i]
  ), l = _.useCallback(
    (f) => i((d = []) => d.filter((h) => h !== f)),
    [i]
  );
  return /* @__PURE__ */ u.jsx(
    am,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(im, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(cm, { ...s, ref: t }) })
    }
  );
}), [nC, Ki] = Yi(cn), cm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = _.useRef(null), c = be(i, t), l = X2(n), d = Oo(o) === "ltr", h = q(e.onKeyDown, (p) => {
      var E;
      if (!q2.includes(p.key)) return;
      const g = p.target, m = l().filter((A) => {
        var O;
        return !((O = A.ref.current) != null && O.disabled);
      }), x = m.findIndex((A) => A.ref.current === g), C = m.length;
      if (x === -1) return;
      p.preventDefault();
      let b = x;
      const y = 0, S = C - 1, w = () => {
        b = x + 1, b > S && (b = y);
      }, M = () => {
        b = x - 1, b < y && (b = S);
      };
      switch (p.key) {
        case "Home":
          b = y;
          break;
        case "End":
          b = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (d ? w() : M());
          break;
        case "ArrowDown":
          s === "vertical" && w();
          break;
        case "ArrowLeft":
          s === "horizontal" && (d ? M() : w());
          break;
        case "ArrowUp":
          s === "vertical" && M();
          break;
      }
      const k = b % C;
      (E = m[k].ref.current) == null || E.focus();
    });
    return /* @__PURE__ */ u.jsx(
      nC,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ u.jsx(Ud.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            ...a,
            "data-orientation": s,
            ref: c,
            onKeyDown: r ? void 0 : h
          }
        ) })
      }
    );
  }
), vi = "AccordionItem", [rC, Xd] = Yi(vi), lm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Ki(vi, n), a = Q2(vi, n), i = qd(n), c = Ze(), l = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      rC,
      {
        scope: n,
        open: l,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          G2,
          {
            "data-orientation": s.orientation,
            "data-state": mm(l),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: l,
            onOpenChange: (d) => {
              d ? a.onItemOpen(r) : a.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
lm.displayName = vi;
var dm = "AccordionHeader", um = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ki(cn, n), s = Xd(dm, n);
    return /* @__PURE__ */ u.jsx(
      ne.h3,
      {
        "data-orientation": o.orientation,
        "data-state": mm(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
um.displayName = dm;
var Al = "AccordionTrigger", fm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ki(cn, n), s = Xd(Al, n), a = J2(Al, n), i = qd(n);
    return /* @__PURE__ */ u.jsx(Ud.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
      Y2,
      {
        "aria-disabled": s.open && !a.collapsible || void 0,
        "data-orientation": o.orientation,
        id: s.triggerId,
        ...i,
        ...r,
        ref: t
      }
    ) });
  }
);
fm.displayName = Al;
var hm = "AccordionContent", pm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Ki(cn, n), s = Xd(hm, n), a = qd(n);
    return /* @__PURE__ */ u.jsx(
      K2,
      {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": o.orientation,
        ...a,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
pm.displayName = hm;
function mm(e) {
  return e ? "open" : "closed";
}
var nh = sm, oC = lm, sC = um, aC = fm, iC = pm;
function Rt(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function cC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var lC = "DismissableLayer", Rl = "dismissableLayer.update", dC = "dismissableLayer.pointerDownOutside", uC = "dismissableLayer.focusOutside", rh, vm = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tr = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, l = v.useContext(vm), [f, d] = v.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), g = be(t, (k) => d(k)), m = Array.from(l.layers), [x] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = m.indexOf(x), b = f ? m.indexOf(f) : -1, y = l.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= C, w = hC((k) => {
      const E = k.target, A = [...l.branches].some((O) => O.contains(E));
      !S || A || (o == null || o(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h), M = pC((k) => {
      const E = k.target;
      [...l.branches].some((O) => O.contains(E)) || (s == null || s(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h);
    return cC((k) => {
      b === l.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && i && (k.preventDefault(), i()));
    }, h), v.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (rh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), oh(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = rh);
        };
    }, [f, h, n, l]), v.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), oh());
    }, [f, l]), v.useEffect(() => {
      const k = () => p({});
      return document.addEventListener(Rl, k), () => document.removeEventListener(Rl, k);
    }, []), /* @__PURE__ */ u.jsx(
      ne.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: y ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: q(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: q(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = lC;
var fC = "DismissableLayerBranch", gm = v.forwardRef((e, t) => {
  const n = v.useContext(vm), r = v.useRef(null), o = be(t, r);
  return v.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(ne.div, { ...e, ref: o });
});
gm.displayName = fC;
function hC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          ym(
            dC,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function pC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && ym(uC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function oh() {
  const e = new CustomEvent(Rl);
  document.dispatchEvent(e);
}
function ym(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Hd(o, s) : o.dispatchEvent(s);
}
var mC = Tr, vC = gm, Hc = "focusScope.autoFocusOnMount", Gc = "focusScope.autoFocusOnUnmount", sh = { bubbles: !1, cancelable: !0 }, gC = "FocusScope", ta = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = v.useState(null), l = Rt(o), f = Rt(s), d = v.useRef(null), h = be(t, (m) => c(m)), p = v.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  v.useEffect(() => {
    if (r) {
      let m = function(y) {
        if (p.paused || !i) return;
        const S = y.target;
        i.contains(S) ? d.current = S : Un(d.current, { select: !0 });
      }, x = function(y) {
        if (p.paused || !i) return;
        const S = y.relatedTarget;
        S !== null && (i.contains(S) || Un(d.current, { select: !0 }));
      }, C = function(y) {
        if (document.activeElement === document.body)
          for (const w of y)
            w.removedNodes.length > 0 && Un(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", x);
      const b = new MutationObserver(C);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), b.disconnect();
      };
    }
  }, [r, i, p.paused]), v.useEffect(() => {
    if (i) {
      ih.add(p);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const C = new CustomEvent(Hc, sh);
        i.addEventListener(Hc, l), i.dispatchEvent(C), C.defaultPrevented || (yC(SC(bm(i)), { select: !0 }), document.activeElement === m && Un(i));
      }
      return () => {
        i.removeEventListener(Hc, l), setTimeout(() => {
          const C = new CustomEvent(Gc, sh);
          i.addEventListener(Gc, f), i.dispatchEvent(C), C.defaultPrevented || Un(m ?? document.body, { select: !0 }), i.removeEventListener(Gc, f), ih.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const g = v.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, C = document.activeElement;
      if (x && C) {
        const b = m.currentTarget, [y, S] = bC(b);
        y && S ? !m.shiftKey && C === S ? (m.preventDefault(), n && Un(y, { select: !0 })) : m.shiftKey && C === y && (m.preventDefault(), n && Un(S, { select: !0 })) : C === b && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ u.jsx(ne.div, { tabIndex: -1, ...a, ref: h, onKeyDown: g });
});
ta.displayName = gC;
function yC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n) return;
}
function bC(e) {
  const t = bm(e), n = ah(t, e), r = ah(t.reverse(), e);
  return [n, r];
}
function bm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ah(e, t) {
  for (const n of e)
    if (!xC(n, { upTo: t })) return n;
}
function xC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function wC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Un(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && wC(e) && t && e.select();
  }
}
var ih = CC();
function CC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ch(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ch(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ch(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function SC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _C = "Portal", jr = v.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = v.useState(!1);
  ct(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? A1.createPortal(/* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t }), a) : null;
});
jr.displayName = _C;
var Yc = 0;
function Ui() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? lh()), document.body.insertAdjacentElement("beforeend", e[1] ?? lh()), Yc++, () => {
      Yc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Yc--;
    };
  }, []);
}
function lh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var vn = function() {
  return vn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, vn.apply(this, arguments);
};
function xm(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function kC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ti = "right-scroll-bar-position", ni = "width-before-scroll-bar", EC = "with-scroll-bars-hidden", MC = "--removed-body-scroll-bar-size";
function Kc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function PC(e, t) {
  var n = at(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var NC = typeof window < "u" ? v.useLayoutEffect : v.useEffect, dh = /* @__PURE__ */ new WeakMap();
function AC(e, t) {
  var n = PC(null, function(r) {
    return e.forEach(function(o) {
      return Kc(o, r);
    });
  });
  return NC(function() {
    var r = dh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || Kc(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Kc(i, a);
      });
    }
    dh.set(n, e);
  }, [e]), n;
}
function RC(e) {
  return e;
}
function OC(e, t) {
  t === void 0 && (t = RC);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var c = function() {
        var f = a;
        a = [], f.forEach(s);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(f) {
          a.push(f), l();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function DC(e) {
  e === void 0 && (e = {});
  var t = OC(null);
  return t.options = vn({ async: !0, ssr: !1 }, e), t;
}
var wm = function(e) {
  var t = e.sideCar, n = xm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, vn({}, n));
};
wm.isSideCarExport = !0;
function IC(e, t) {
  return e.useMedium(t), wm;
}
var Cm = DC(), Uc = function() {
}, qi = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Uc,
    onWheelCapture: Uc,
    onTouchMoveCapture: Uc
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, p = e.noRelative, g = e.noIsolation, m = e.inert, x = e.allowPinchZoom, C = e.as, b = C === void 0 ? "div" : C, y = e.gapMode, S = xm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, M = AC([n, t]), k = vn(vn({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    f && v.createElement(w, { sideCar: Cm, removeScrollBar: l, shards: d, noRelative: p, noIsolation: g, inert: m, setCallbacks: s, allowPinchZoom: !!x, lockRef: n, gapMode: y }),
    a ? v.cloneElement(v.Children.only(i), vn(vn({}, k), { ref: M })) : v.createElement(b, vn({}, k, { className: c, ref: M }), i)
  );
});
qi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
qi.classNames = {
  fullWidth: ni,
  zeroRight: ti
};
var TC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = TC();
  return t && e.setAttribute("nonce", t), e;
}
function $C(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function WC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var LC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = jC()) && ($C(t, n), WC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, FC = function() {
  var e = LC();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Sm = function() {
  var e = FC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, VC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, qc = function(e) {
  return parseInt(e || "", 10) || 0;
}, zC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [qc(n), qc(r), qc(o)];
}, BC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return VC;
  var t = zC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, HC = Sm(), po = "data-scroll-locked", GC = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(EC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(po, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(ti, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ni, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ti, " .").concat(ti, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ni, " .").concat(ni, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(po, `] {
    `).concat(MC, ": ").concat(i, `px;
  }
`);
}, uh = function() {
  var e = parseInt(document.body.getAttribute(po) || "0", 10);
  return isFinite(e) ? e : 0;
}, YC = function() {
  v.useEffect(function() {
    return document.body.setAttribute(po, (uh() + 1).toString()), function() {
      var e = uh() - 1;
      e <= 0 ? document.body.removeAttribute(po) : document.body.setAttribute(po, e.toString());
    };
  }, []);
}, KC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  YC();
  var s = v.useMemo(function() {
    return BC(o);
  }, [o]);
  return v.createElement(HC, { styles: GC(s, !t, o, n ? "" : "!important") });
}, Ol = !1;
if (typeof window < "u")
  try {
    var Aa = Object.defineProperty({}, "passive", {
      get: function() {
        return Ol = !0, !0;
      }
    });
    window.addEventListener("test", Aa, Aa), window.removeEventListener("test", Aa, Aa);
  } catch {
    Ol = !1;
  }
var Hr = Ol ? { passive: !1 } : !1, UC = function(e) {
  return e.tagName === "TEXTAREA";
}, _m = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !UC(e) && n[t] === "visible")
  );
}, qC = function(e) {
  return _m(e, "overflowY");
}, XC = function(e) {
  return _m(e, "overflowX");
}, fh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = km(e, r);
    if (o) {
      var s = Em(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, ZC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, QC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, km = function(e, t) {
  return e === "v" ? qC(t) : XC(t);
}, Em = function(e, t) {
  return e === "v" ? ZC(t) : QC(t);
}, JC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eS = function(e, t, n, r, o) {
  var s = JC(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, d = 0, h = 0;
  do {
    if (!i)
      break;
    var p = Em(e, i), g = p[0], m = p[1], x = p[2], C = m - x - s * g;
    (g || C) && km(e, i) && (d += C, h += g);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, Ra = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, hh = function(e) {
  return [e.deltaX, e.deltaY];
}, ph = function(e) {
  return e && "current" in e ? e.current : e;
}, tS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rS = 0, Gr = [];
function oS(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(rS++)[0], s = v.useState(Sm)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = kC([e.lockRef.current], (e.shards || []).map(ph), !0).filter(Boolean);
      return m.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = v.useCallback(function(m, x) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var C = Ra(m), b = n.current, y = "deltaX" in m ? m.deltaX : b[0] - C[0], S = "deltaY" in m ? m.deltaY : b[1] - C[1], w, M = m.target, k = Math.abs(y) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && k === "h" && M.type === "range")
      return !1;
    var E = fh(k, M);
    if (!E)
      return !0;
    if (E ? w = k : (w = k === "v" ? "h" : "v", E = fh(k, M)), !E)
      return !1;
    if (!r.current && "changedTouches" in m && (y || S) && (r.current = w), !w)
      return !0;
    var A = r.current || w;
    return eS(A, x, m, A === "h" ? y : S);
  }, []), c = v.useCallback(function(m) {
    var x = m;
    if (!(!Gr.length || Gr[Gr.length - 1] !== s)) {
      var C = "deltaY" in x ? hh(x) : Ra(x), b = t.current.filter(function(w) {
        return w.name === x.type && (w.target === x.target || x.target === w.shadowParent) && tS(w.delta, C);
      })[0];
      if (b && b.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!b) {
        var y = (a.current.shards || []).map(ph).filter(Boolean).filter(function(w) {
          return w.contains(x.target);
        }), S = y.length > 0 ? i(x, y[0]) : !a.current.noIsolation;
        S && x.cancelable && x.preventDefault();
      }
    }
  }, []), l = v.useCallback(function(m, x, C, b) {
    var y = { name: m, delta: x, target: C, should: b, shadowParent: sS(C) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== y;
      });
    }, 1);
  }, []), f = v.useCallback(function(m) {
    n.current = Ra(m), r.current = void 0;
  }, []), d = v.useCallback(function(m) {
    l(m.type, hh(m), m.target, i(m, e.lockRef.current));
  }, []), h = v.useCallback(function(m) {
    l(m.type, Ra(m), m.target, i(m, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Gr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Hr), document.addEventListener("touchmove", c, Hr), document.addEventListener("touchstart", f, Hr), function() {
      Gr = Gr.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", c, Hr), document.removeEventListener("touchmove", c, Hr), document.removeEventListener("touchstart", f, Hr);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(s, { styles: nS(o) }) : null,
    p ? v.createElement(KC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function sS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const aS = IC(Cm, oS);
var na = v.forwardRef(function(e, t) {
  return v.createElement(qi, vn({}, e, { ref: t, sideCar: aS }));
});
na.classNames = qi.classNames;
var iS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yr = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), Da = {}, Xc = 0, Mm = function(e) {
  return e && (e.host || Mm(e.parentNode));
}, cS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Mm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, lS = function(e, t, n, r) {
  var o = cS(t, Array.isArray(e) ? e : [e]);
  Da[n] || (Da[n] = /* @__PURE__ */ new WeakMap());
  var s = Da[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var f = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), g = p !== null && p !== "false", m = (Yr.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          Yr.set(h, m), s.set(h, x), a.push(h), m === 1 && g && Oa.set(h, !0), x === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return f(t), i.clear(), Xc++, function() {
    a.forEach(function(d) {
      var h = Yr.get(d) - 1, p = s.get(d) - 1;
      Yr.set(d, h), s.set(d, p), h || (Oa.has(d) || d.removeAttribute(r), Oa.delete(d)), p || d.removeAttribute(n);
    }), Xc--, Xc || (Yr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Oa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Xi = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = iS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), lS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Zi = "Dialog", [Pm] = lt(Zi), [dS, ln] = Pm(Zi), Nm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = v.useRef(null), c = v.useRef(null), [l, f] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Zi
  });
  return /* @__PURE__ */ u.jsx(
    dS,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Ze(),
      titleId: Ze(),
      descriptionId: Ze(),
      open: l,
      onOpenChange: f,
      onOpenToggle: v.useCallback(() => f((d) => !d), [f]),
      modal: a,
      children: n
    }
  );
};
Nm.displayName = Zi;
var Am = "DialogTrigger", uS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ln(Am, n), s = be(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Jd(o.open),
        ...r,
        ref: s,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
  }
);
uS.displayName = Am;
var Zd = "DialogPortal", [fS, Rm] = Pm(Zd, {
  forceMount: void 0
}), Om = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = ln(Zd, t);
  return /* @__PURE__ */ u.jsx(fS, { scope: t, forceMount: n, children: v.Children.map(r, (a) => /* @__PURE__ */ u.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: a }) })) });
};
Om.displayName = Zd;
var gi = "DialogOverlay", Dm = v.forwardRef(
  (e, t) => {
    const n = Rm(gi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = ln(gi, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ u.jsx(pS, { ...o, ref: t }) }) : null;
  }
);
Dm.displayName = gi;
var hS = /* @__PURE__ */ or("DialogOverlay.RemoveScroll"), pS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ln(gi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(na, { as: hS, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-state": Jd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Pr = "DialogContent", Im = v.forwardRef(
  (e, t) => {
    const n = Rm(Pr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = ln(Pr, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(mS, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(vS, { ...o, ref: t }) });
  }
);
Im.displayName = Pr;
var mS = v.forwardRef(
  (e, t) => {
    const n = ln(Pr, e.__scopeDialog), r = v.useRef(null), o = be(t, n.contentRef, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return Xi(s);
    }, []), /* @__PURE__ */ u.jsx(
      Tm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: q(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), vS = v.forwardRef(
  (e, t) => {
    const n = ln(Pr, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Tm,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Tm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = ln(Pr, n), c = v.useRef(null), l = be(t, c);
    return Ui(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        ta,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ u.jsx(
            Tr,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Jd(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(yS, { titleId: i.titleId }),
        /* @__PURE__ */ u.jsx(xS, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Qd = "DialogTitle", jm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ln(Qd, n);
    return /* @__PURE__ */ u.jsx(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
jm.displayName = Qd;
var $m = "DialogDescription", gS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ln($m, n);
    return /* @__PURE__ */ u.jsx(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
gS.displayName = $m;
var Wm = "DialogClose", Lm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ln(Wm, n);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Lm.displayName = Wm;
function Jd(e) {
  return e ? "open" : "closed";
}
var Fm = "DialogTitleWarning", [Aj, Vm] = O2(Fm, {
  contentName: Pr,
  titleName: Qd,
  docsSlug: "dialog"
}), yS = ({ titleId: e }) => {
  const t = Vm(Fm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, bS = "DialogDescriptionWarning", xS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Vm(bS).contentName}}.`;
  return v.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, eu = Nm, tu = Om, nu = Dm, ru = Im, zm = jm, wS = Lm;
function Qi(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Ji(e) {
  const [t, n] = v.useState(void 0);
  return ct(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, i = l.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ec = "Checkbox", [CS] = lt(ec), [SS, ou] = CS(ec);
function _S(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: l,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [h, p] = kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ec
  }), [g, m] = v.useState(null), [x, C] = v.useState(null), b = v.useRef(!1), y = g ? !!a || !!g.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: s,
    setChecked: p,
    control: g,
    setControl: m,
    name: i,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: l,
    defaultChecked: rr(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: x,
    setBubbleInput: C
  };
  return /* @__PURE__ */ u.jsx(
    SS,
    {
      scope: t,
      ...S,
      children: kS(d) ? d(S) : r
    }
  );
}
var Bm = "CheckboxTrigger", Hm = v.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: c,
      required: l,
      setControl: f,
      setChecked: d,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: p,
      bubbleInput: g
    } = ou(Bm, e), m = be(o, f), x = v.useRef(c);
    return v.useEffect(() => {
      const C = s == null ? void 0 : s.form;
      if (C) {
        const b = () => d(x.current);
        return C.addEventListener("reset", b), () => C.removeEventListener("reset", b);
      }
    }, [s, d]), /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": rr(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": Xm(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: m,
        onKeyDown: q(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: q(n, (C) => {
          d((b) => rr(b) ? !0 : !b), g && p && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
        })
      }
    );
  }
);
Hm.displayName = Bm;
var Gm = v.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c,
      onCheckedChange: l,
      form: f,
      ...d
    } = e;
    return /* @__PURE__ */ u.jsx(
      _S,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: l,
        name: r,
        form: f,
        value: c,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            Hm,
            {
              ...d,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ u.jsx(
            qm,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Gm.displayName = ec;
var Ym = "CheckboxIndicator", Km = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = ou(Ym, n);
    return /* @__PURE__ */ u.jsx(
      mt,
      {
        present: r || rr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          ne.span,
          {
            "data-state": Xm(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Km.displayName = Ym;
var Um = "CheckboxBubbleInput", qm = v.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: l,
      value: f,
      form: d,
      bubbleInput: h,
      setBubbleInput: p
    } = ou(Um, e), g = be(n, p), m = Qi(s), x = Ji(r);
    v.useEffect(() => {
      const b = h;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, M = !o.current;
      if (m !== s && w) {
        const k = new Event("click", { bubbles: M });
        b.indeterminate = rr(s), w.call(b, rr(s) ? !1 : s), b.dispatchEvent(k);
      }
    }, [h, m, s, o]);
    const C = v.useRef(rr(s) ? !1 : s);
    return /* @__PURE__ */ u.jsx(
      ne.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? C.current,
        required: i,
        disabled: c,
        name: l,
        value: f,
        form: d,
        ...t,
        tabIndex: -1,
        ref: g,
        style: {
          ...t.style,
          ...x,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
qm.displayName = Um;
function kS(e) {
  return typeof e == "function";
}
function rr(e) {
  return e === "indeterminate";
}
function Xm(e) {
  return rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const ES = ["top", "right", "bottom", "left"], sr = Math.min, Wt = Math.max, yi = Math.round, Ia = Math.floor, Cn = (e) => ({
  x: e,
  y: e
}), MS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, PS = {
  start: "end",
  end: "start"
};
function Dl(e, t, n) {
  return Wt(e, sr(t, n));
}
function zn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bn(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function su(e) {
  return e === "x" ? "y" : "x";
}
function au(e) {
  return e === "y" ? "height" : "width";
}
const NS = /* @__PURE__ */ new Set(["top", "bottom"]);
function bn(e) {
  return NS.has(Bn(e)) ? "y" : "x";
}
function iu(e) {
  return su(bn(e));
}
function AS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = iu(e), s = au(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = bi(a)), [a, bi(a)];
}
function RS(e) {
  const t = bi(e);
  return [Il(e), t, Il(t)];
}
function Il(e) {
  return e.replace(/start|end/g, (t) => PS[t]);
}
const mh = ["left", "right"], vh = ["right", "left"], OS = ["top", "bottom"], DS = ["bottom", "top"];
function IS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? vh : mh : t ? mh : vh;
    case "left":
    case "right":
      return t ? OS : DS;
    default:
      return [];
  }
}
function TS(e, t, n, r) {
  const o = Do(e);
  let s = IS(Bn(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Il)))), s;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => MS[t]);
}
function jS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zm(e) {
  return typeof e != "number" ? jS(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xi(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function gh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = bn(t), a = iu(t), i = au(a), c = Bn(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Do(t)) {
    case "start":
      p[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[a] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const $S = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: d
  } = gh(l, r, c), h = r, p = {}, g = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: x,
      fn: C
    } = i[m], {
      x: b,
      y,
      data: S,
      reset: w
    } = await C({
      x: f,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = b ?? f, d = y ?? d, p = {
      ...p,
      [x]: {
        ...p[x],
        ...S
      }
    }, w && g <= 50 && (g++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: f,
      y: d
    } = gh(l, h, c)), m = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Is(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = zn(t, e), g = Zm(p), x = i[h ? d === "floating" ? "reference" : "floating" : d], C = xi(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = xi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: y,
    strategy: c
  }) : b);
  return {
    top: (C.top - w.top + g.top) / S.y,
    bottom: (w.bottom - C.bottom + g.bottom) / S.y,
    left: (C.left - w.left + g.left) / S.x,
    right: (w.right - C.right + g.right) / S.x
  };
}
const WS = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: f = 0
    } = zn(e, t) || {};
    if (l == null)
      return {};
    const d = Zm(f), h = {
      x: n,
      y: r
    }, p = iu(o), g = au(p), m = await a.getDimensions(l), x = p === "y", C = x ? "top" : "left", b = x ? "bottom" : "right", y = x ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[p] - h[p] - s.floating[g], w = h[p] - s.reference[p], M = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = M ? M[y] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(M))) && (k = i.floating[y] || s.floating[g]);
    const E = S / 2 - w / 2, A = k / 2 - m[g] / 2 - 1, O = sr(d[C], A), j = sr(d[b], A), $ = O, V = k - m[g] - j, D = k / 2 - m[g] / 2 + E, B = Dl($, D, V), F = !c.arrow && Do(o) != null && D !== B && s.reference[g] / 2 - (D < $ ? O : j) - m[g] / 2 < 0, X = F ? D < $ ? D - $ : D - V : 0;
    return {
      [p]: h[p] + X,
      data: {
        [p]: B,
        centerOffset: D - B - X,
        ...F && {
          alignmentOffset: X
        }
      },
      reset: F
    };
  }
}), LS = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...x
      } = zn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Bn(o), b = bn(i), y = Bn(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = h || (y || !m ? [bi(i)] : RS(i)), M = g !== "none";
      !h && M && w.push(...TS(i, m, g, S));
      const k = [i, ...w], E = await Is(t, x), A = [];
      let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && A.push(E[C]), d) {
        const D = AS(o, a, S);
        A.push(E[D[0]], E[D[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: A
      }], !A.every((D) => D <= 0)) {
        var j, $;
        const D = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, B = k[D];
        if (B && (!(d === "alignment" ? b !== bn(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((T) => bn(T.placement) === b ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: O
            },
            reset: {
              placement: B
            }
          };
        let F = ($ = O.filter((X) => X.overflows[0] <= 0).sort((X, T) => X.overflows[1] - T.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!F)
          switch (p) {
            case "bestFit": {
              var V;
              const X = (V = O.filter((T) => {
                if (M) {
                  const W = bn(T.placement);
                  return W === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((W) => W > 0).reduce((W, oe) => W + oe, 0)]).sort((T, W) => T[1] - W[1])[0]) == null ? void 0 : V[0];
              X && (F = X);
              break;
            }
            case "initialPlacement":
              F = i;
              break;
          }
        if (o !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
function yh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function bh(e) {
  return ES.some((t) => e[t] >= 0);
}
const FS = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = zn(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Is(t, {
            ...o,
            elementContext: "reference"
          }), a = yh(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: bh(a)
            }
          };
        }
        case "escaped": {
          const s = await Is(t, {
            ...o,
            altBoundary: !0
          }), a = yh(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: bh(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Qm = /* @__PURE__ */ new Set(["left", "top"]);
async function VS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Bn(n), i = Do(n), c = bn(n) === "y", l = Qm.has(a) ? -1 : 1, f = s && c ? -1 : 1, d = zn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof g == "number" && (p = i === "end" ? g * -1 : g), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const zS = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await VS(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, BS = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (x) => {
            let {
              x: C,
              y: b
            } = x;
            return {
              x: C,
              y: b
            };
          }
        },
        ...c
      } = zn(e, t), l = {
        x: n,
        y: r
      }, f = await Is(t, c), d = bn(Bn(o)), h = su(d);
      let p = l[h], g = l[d];
      if (s) {
        const x = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", b = p + f[x], y = p - f[C];
        p = Dl(b, p, y);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", b = g + f[x], y = g - f[C];
        g = Dl(b, g, y);
      }
      const m = i.fn({
        ...t,
        [h]: p,
        [d]: g
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: s,
            [d]: a
          }
        }
      };
    }
  };
}, HS = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = zn(e, t), f = {
        x: n,
        y: r
      }, d = bn(o), h = su(d);
      let p = f[h], g = f[d];
      const m = zn(i, t), x = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const y = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[y] + x.mainAxis, w = s.reference[h] + s.reference[y] - x.mainAxis;
        p < S ? p = S : p > w && (p = w);
      }
      if (l) {
        var C, b;
        const y = h === "y" ? "width" : "height", S = Qm.has(Bn(o)), w = s.reference[d] - s.floating[y] + (S && ((C = a.offset) == null ? void 0 : C[d]) || 0) + (S ? 0 : x.crossAxis), M = s.reference[d] + s.reference[y] + (S ? 0 : ((b = a.offset) == null ? void 0 : b[d]) || 0) - (S ? x.crossAxis : 0);
        g < w ? g = w : g > M && (g = M);
      }
      return {
        [h]: p,
        [d]: g
      };
    }
  };
}, GS = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = zn(e, t), f = await Is(t, l), d = Bn(o), h = Do(o), p = bn(o) === "y", {
        width: g,
        height: m
      } = s.floating;
      let x, C;
      d === "top" || d === "bottom" ? (x = d, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = d, x = h === "end" ? "top" : "bottom");
      const b = m - f.top - f.bottom, y = g - f.left - f.right, S = sr(m - f[x], b), w = sr(g - f[C], y), M = !t.middlewareData.shift;
      let k = S, E = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y), (r = t.middlewareData.shift) != null && r.enabled.y && (k = b), M && !h) {
        const O = Wt(f.left, 0), j = Wt(f.right, 0), $ = Wt(f.top, 0), V = Wt(f.bottom, 0);
        p ? E = g - 2 * (O !== 0 || j !== 0 ? O + j : Wt(f.left, f.right)) : k = m - 2 * ($ !== 0 || V !== 0 ? $ + V : Wt(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: E,
        availableHeight: k
      });
      const A = await a.getDimensions(i.floating);
      return g !== A.width || m !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function tc() {
  return typeof window < "u";
}
function Io(e) {
  return Jm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pn(e) {
  var t;
  return (t = (Jm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Jm(e) {
  return tc() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function sn(e) {
  return tc() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function _n(e) {
  return tc() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function xh(e) {
  return !tc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
}
const YS = /* @__PURE__ */ new Set(["inline", "contents"]);
function ra(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !YS.has(o);
}
const KS = /* @__PURE__ */ new Set(["table", "td", "th"]);
function US(e) {
  return KS.has(Io(e));
}
const qS = [":popover-open", ":modal"];
function nc(e) {
  return qS.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const XS = ["transform", "translate", "scale", "rotate", "perspective"], ZS = ["transform", "translate", "scale", "rotate", "perspective", "filter"], QS = ["paint", "layout", "strict", "content"];
function cu(e) {
  const t = lu(), n = sn(e) ? an(e) : e;
  return XS.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ZS.some((r) => (n.willChange || "").includes(r)) || QS.some((r) => (n.contain || "").includes(r));
}
function JS(e) {
  let t = ar(e);
  for (; _n(t) && !xo(t); ) {
    if (cu(t))
      return t;
    if (nc(t))
      return null;
    t = ar(t);
  }
  return null;
}
function lu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const e_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xo(e) {
  return e_.has(Io(e));
}
function an(e) {
  return Ft(e).getComputedStyle(e);
}
function rc(e) {
  return sn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ar(e) {
  if (Io(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    xh(e) && e.host || // Fallback.
    Pn(e)
  );
  return xh(t) ? t.host : t;
}
function ev(e) {
  const t = ar(e);
  return xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && ra(t) ? t : ev(t);
}
function Ts(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ev(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ft(o);
  if (s) {
    const i = Tl(a);
    return t.concat(a, a.visualViewport || [], ra(o) ? o : [], i && n ? Ts(i) : []);
  }
  return t.concat(o, Ts(o, [], n));
}
function Tl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tv(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = yi(n) !== s || yi(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function du(e) {
  return sn(e) ? e : e.contextElement;
}
function mo(e) {
  const t = du(e);
  if (!_n(t))
    return Cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = tv(t);
  let a = (s ? yi(n.width) : n.width) / r, i = (s ? yi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const t_ = /* @__PURE__ */ Cn(0);
function nv(e) {
  const t = Ft(e);
  return !lu() || !t.visualViewport ? t_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function n_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t;
}
function Nr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = du(e);
  let a = Cn(1);
  t && (r ? sn(r) && (a = mo(r)) : a = mo(e));
  const i = n_(s, n, r) ? nv(s) : Cn(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, d = o.height / a.y;
  if (s) {
    const h = Ft(s), p = r && sn(r) ? Ft(r) : r;
    let g = h, m = Tl(g);
    for (; m && r && p !== g; ) {
      const x = mo(m), C = m.getBoundingClientRect(), b = an(m), y = C.left + (m.clientLeft + parseFloat(b.paddingLeft)) * x.x, S = C.top + (m.clientTop + parseFloat(b.paddingTop)) * x.y;
      c *= x.x, l *= x.y, f *= x.x, d *= x.y, c += y, l += S, g = Ft(m), m = Tl(g);
    }
  }
  return xi({
    width: f,
    height: d,
    x: c,
    y: l
  });
}
function oc(e, t) {
  const n = rc(e).scrollLeft;
  return t ? t.left + n : Nr(Pn(e)).left + n;
}
function rv(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - oc(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function r_(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Pn(r), i = t ? nc(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Cn(1);
  const f = Cn(0), d = _n(r);
  if ((d || !d && !s) && ((Io(r) !== "body" || ra(a)) && (c = rc(r)), _n(r))) {
    const p = Nr(r);
    l = mo(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !d && !s ? rv(a, c) : Cn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function o_(e) {
  return Array.from(e.getClientRects());
}
function s_(e) {
  const t = Pn(e), n = rc(e), r = e.ownerDocument.body, o = Wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + oc(e);
  const i = -n.scrollTop;
  return an(r).direction === "rtl" && (a += Wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const wh = 25;
function a_(e, t) {
  const n = Ft(e), r = Pn(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = lu();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = oc(r);
  if (l <= 0) {
    const f = r.ownerDocument, d = f.body, h = getComputedStyle(d), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(r.clientWidth - d.clientWidth - p);
    g <= wh && (s -= g);
  } else l <= wh && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const i_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function c_(e, t) {
  const n = Nr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = _n(e) ? mo(e) : Cn(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Ch(e, t, n) {
  let r;
  if (t === "viewport")
    r = a_(e, n);
  else if (t === "document")
    r = s_(Pn(e));
  else if (sn(t))
    r = c_(t, n);
  else {
    const o = nv(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return xi(r);
}
function ov(e, t) {
  const n = ar(e);
  return n === t || !sn(n) || xo(n) ? !1 : an(n).position === "fixed" || ov(n, t);
}
function l_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ts(e, [], !1).filter((i) => sn(i) && Io(i) !== "body"), o = null;
  const s = an(e).position === "fixed";
  let a = s ? ar(e) : e;
  for (; sn(a) && !xo(a); ) {
    const i = an(a), c = cu(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && i_.has(o.position) || ra(a) && !c && ov(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = ar(a);
  }
  return t.set(e, r), r;
}
function d_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? nc(t) ? [] : l_(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((l, f) => {
    const d = Ch(t, f, o);
    return l.top = Wt(d.top, l.top), l.right = sr(d.right, l.right), l.bottom = sr(d.bottom, l.bottom), l.left = Wt(d.left, l.left), l;
  }, Ch(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function u_(e) {
  const {
    width: t,
    height: n
  } = tv(e);
  return {
    width: t,
    height: n
  };
}
function f_(e, t, n) {
  const r = _n(t), o = Pn(t), s = n === "fixed", a = Nr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Cn(0);
  function l() {
    c.x = oc(o);
  }
  if (r || !r && !s)
    if ((Io(t) !== "body" || ra(o)) && (i = rc(t)), r) {
      const p = Nr(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const f = o && !r && !s ? rv(o, i) : Cn(0), d = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: d,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Zc(e) {
  return an(e).position === "static";
}
function Sh(e, t) {
  if (!_n(e) || an(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pn(e) === n && (n = n.ownerDocument.body), n;
}
function sv(e, t) {
  const n = Ft(e);
  if (nc(e))
    return n;
  if (!_n(e)) {
    let o = ar(e);
    for (; o && !xo(o); ) {
      if (sn(o) && !Zc(o))
        return o;
      o = ar(o);
    }
    return n;
  }
  let r = Sh(e, t);
  for (; r && US(r) && Zc(r); )
    r = Sh(r, t);
  return r && xo(r) && Zc(r) && !cu(r) ? n : r || JS(e) || n;
}
const h_ = async function(e) {
  const t = this.getOffsetParent || sv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: f_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function p_(e) {
  return an(e).direction === "rtl";
}
const m_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: r_,
  getDocumentElement: Pn,
  getClippingRect: d_,
  getOffsetParent: sv,
  getElementRects: h_,
  getClientRects: o_,
  getDimensions: u_,
  getScale: mo,
  isElement: sn,
  isRTL: p_
};
function av(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function v_(e, t) {
  let n = null, r;
  const o = Pn(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: d,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const g = Ia(d), m = Ia(o.clientWidth - (f + h)), x = Ia(o.clientHeight - (d + p)), C = Ia(f), y = {
      rootMargin: -g + "px " + -m + "px " + -x + "px " + -C + "px",
      threshold: Wt(0, sr(1, c)) || 1
    };
    let S = !0;
    function w(M) {
      const k = M[0].intersectionRatio;
      if (k !== c) {
        if (!S)
          return a();
        k ? a(!1, k) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !av(l, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, y);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function g_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = du(e), f = o || s ? [...l ? Ts(l) : [], ...Ts(t)] : [];
  f.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const d = l && i ? v_(l, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = p) == null || y.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let g, m = c ? Nr(e) : null;
  c && x();
  function x() {
    const C = Nr(e);
    m && !av(m, C) && n(), m = C, g = requestAnimationFrame(x);
  }
  return n(), () => {
    var C;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), d == null || d(), (C = p) == null || C.disconnect(), p = null, c && cancelAnimationFrame(g);
  };
}
const y_ = zS, b_ = BS, x_ = LS, w_ = GS, C_ = FS, _h = WS, S_ = HS, __ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: m_,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return $S(e, t, {
    ...o,
    platform: s
  });
};
var k_ = typeof document < "u", E_ = function() {
}, ri = k_ ? Vd : E_;
function wi(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!wi(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !wi(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function iv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kh(e, t) {
  const n = iv(e);
  return Math.round(t * n) / n;
}
function Qc(e) {
  const t = v.useRef(e);
  return ri(() => {
    t.current = e;
  }), t;
}
function M_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [f, d] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = v.useState(r);
  wi(h, r) || p(r);
  const [g, m] = v.useState(null), [x, C] = v.useState(null), b = v.useCallback((T) => {
    T !== M.current && (M.current = T, m(T));
  }, []), y = v.useCallback((T) => {
    T !== k.current && (k.current = T, C(T));
  }, []), S = s || g, w = a || x, M = v.useRef(null), k = v.useRef(null), E = v.useRef(f), A = c != null, O = Qc(c), j = Qc(o), $ = Qc(l), V = v.useCallback(() => {
    if (!M.current || !k.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: h
    };
    j.current && (T.platform = j.current), __(M.current, k.current, T).then((W) => {
      const oe = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: $.current !== !1
      };
      D.current && !wi(E.current, oe) && (E.current = oe, Qs.flushSync(() => {
        d(oe);
      }));
    });
  }, [h, t, n, j, $]);
  ri(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [l]);
  const D = v.useRef(!1);
  ri(() => (D.current = !0, () => {
    D.current = !1;
  }), []), ri(() => {
    if (S && (M.current = S), w && (k.current = w), S && w) {
      if (O.current)
        return O.current(S, w, V);
      V();
    }
  }, [S, w, V, O, A]);
  const B = v.useMemo(() => ({
    reference: M,
    floating: k,
    setReference: b,
    setFloating: y
  }), [b, y]), F = v.useMemo(() => ({
    reference: S,
    floating: w
  }), [S, w]), X = v.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!F.floating)
      return T;
    const W = kh(F.floating, f.x), oe = kh(F.floating, f.y);
    return i ? {
      ...T,
      transform: "translate(" + W + "px, " + oe + "px)",
      ...iv(F.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: oe
    };
  }, [n, i, F.floating, f.x, f.y]);
  return v.useMemo(() => ({
    ...f,
    update: V,
    refs: B,
    elements: F,
    floatingStyles: X
  }), [f, V, B, F, X]);
}
const P_ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? _h({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? _h({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, N_ = (e, t) => ({
  ...y_(e),
  options: [e, t]
}), A_ = (e, t) => ({
  ...b_(e),
  options: [e, t]
}), R_ = (e, t) => ({
  ...S_(e),
  options: [e, t]
}), O_ = (e, t) => ({
  ...x_(e),
  options: [e, t]
}), D_ = (e, t) => ({
  ...w_(e),
  options: [e, t]
}), I_ = (e, t) => ({
  ...C_(e),
  options: [e, t]
}), T_ = (e, t) => ({
  ...P_(e),
  options: [e, t]
});
var j_ = "Arrow", cv = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ u.jsx(
    ne.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ u.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
cv.displayName = j_;
var $_ = cv, uu = "Popper", [lv, dr] = lt(uu), [W_, dv] = lv(uu), uv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ u.jsx(W_, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
uv.displayName = uu;
var fv = "PopperAnchor", hv = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = dv(fv, n), a = v.useRef(null), i = be(t, a), c = v.useRef(null);
    return v.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ u.jsx(ne.div, { ...o, ref: i });
  }
);
hv.displayName = fv;
var fu = "PopperContent", [L_, F_] = lv(fu), pv = v.forwardRef(
  (e, t) => {
    var I, J, re, de, me, ge;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: g,
      ...m
    } = e, x = dv(fu, n), [C, b] = v.useState(null), y = be(t, (Se) => b(Se)), [S, w] = v.useState(null), M = Ji(S), k = (M == null ? void 0 : M.width) ?? 0, E = (M == null ? void 0 : M.height) ?? 0, A = r + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, j = Array.isArray(l) ? l : [l], $ = j.length > 0, V = {
      padding: O,
      boundary: j.filter(z_),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: D, floatingStyles: B, placement: F, isPositioned: X, middlewareData: T } = M_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...Se) => g_(...Se, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        N_({ mainAxis: o + E, alignmentAxis: a }),
        c && A_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? R_() : void 0,
          ...V
        }),
        c && O_({ ...V }),
        D_({
          ...V,
          apply: ({ elements: Se, rects: Ie, availableWidth: je, availableHeight: dt }) => {
            const { width: Xe, height: rt } = Ie.reference, vt = Se.floating.style;
            vt.setProperty("--radix-popper-available-width", `${je}px`), vt.setProperty("--radix-popper-available-height", `${dt}px`), vt.setProperty("--radix-popper-anchor-width", `${Xe}px`), vt.setProperty("--radix-popper-anchor-height", `${rt}px`);
          }
        }),
        S && T_({ element: S, padding: i }),
        B_({ arrowWidth: k, arrowHeight: E }),
        h && I_({ strategy: "referenceHidden", ...V })
      ]
    }), [W, oe] = gv(F), N = Rt(g);
    ct(() => {
      X && (N == null || N());
    }, [X, N]);
    const P = (I = T.arrow) == null ? void 0 : I.x, L = (J = T.arrow) == null ? void 0 : J.y, z = ((re = T.arrow) == null ? void 0 : re.centerOffset) !== 0, [Z, U] = v.useState();
    return ct(() => {
      C && U(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: X ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Z,
          "--radix-popper-transform-origin": [
            (de = T.transformOrigin) == null ? void 0 : de.x,
            (me = T.transformOrigin) == null ? void 0 : me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ge = T.hide) == null ? void 0 : ge.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          L_,
          {
            scope: n,
            placedSide: W,
            onArrowChange: w,
            arrowX: P,
            arrowY: L,
            shouldHideArrow: z,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                "data-side": W,
                "data-align": oe,
                ...m,
                ref: y,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: X ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
pv.displayName = fu;
var mv = "PopperArrow", V_ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, vv = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = F_(mv, r), a = V_[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ u.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ u.jsx(
          $_,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
vv.displayName = mv;
function z_(e) {
  return e !== null;
}
var B_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, C, b;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = gv(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let g = "", m = "";
    return l === "bottom" ? (g = a ? d : `${h}px`, m = `${-c}px`) : l === "top" ? (g = a ? d : `${h}px`, m = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, m = a ? d : `${p}px`) : l === "left" && (g = `${r.floating.width + c}px`, m = a ? d : `${p}px`), { data: { x: g, y: m } };
  }
});
function gv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sc = uv, oa = hv, ac = pv, ic = vv, Jc = "rovingFocusGroup.onEntryFocus", H_ = { bubbles: !1, cancelable: !0 }, sa = "RovingFocusGroup", [jl, yv, G_] = ea(sa), [Y_, To] = lt(
  sa,
  [G_]
), [K_, U_] = Y_(sa), bv = v.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(jl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(jl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(q_, { ...e, ref: t }) }) })
);
bv.displayName = sa;
var q_ = v.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: f = !1,
    ...d
  } = e, h = v.useRef(null), p = be(t, h), g = Oo(s), [m, x] = kt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: sa
  }), [C, b] = v.useState(!1), y = Rt(l), S = yv(n), w = v.useRef(!1), [M, k] = v.useState(0);
  return v.useEffect(() => {
    const E = h.current;
    if (E)
      return E.addEventListener(Jc, y), () => E.removeEventListener(Jc, y);
  }, [y]), /* @__PURE__ */ u.jsx(
    K_,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: m,
      onItemFocus: v.useCallback(
        (E) => x(E),
        [x]
      ),
      onItemShiftTab: v.useCallback(() => b(!0), []),
      onFocusableItemAdd: v.useCallback(
        () => k((E) => E + 1),
        []
      ),
      onFocusableItemRemove: v.useCallback(
        () => k((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          tabIndex: C || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: q(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: q(e.onFocus, (E) => {
            const A = !w.current;
            if (E.target === E.currentTarget && A && !C) {
              const O = new CustomEvent(Jc, H_);
              if (E.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const j = S().filter((F) => F.focusable), $ = j.find((F) => F.active), V = j.find((F) => F.id === m), B = [$, V, ...j].filter(
                  Boolean
                ).map((F) => F.ref.current);
                Cv(B, f);
              }
            }
            w.current = !1;
          }),
          onBlur: q(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), xv = "RovingFocusGroupItem", wv = v.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Ze(), l = s || c, f = U_(xv, n), d = f.currentTabStopId === l, h = yv(n), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: m } = f;
    return v.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ u.jsx(
      jl.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          ne.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: q(e.onMouseDown, (x) => {
              r ? f.onItemFocus(l) : x.preventDefault();
            }),
            onFocus: q(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: q(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const C = Q_(x, f.orientation, f.dir);
              if (C !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let y = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (C === "last") y.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && y.reverse();
                  const S = y.indexOf(x.currentTarget);
                  y = f.loop ? J_(y, S + 1) : y.slice(S + 1);
                }
                setTimeout(() => Cv(y));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
wv.displayName = xv;
var X_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Z_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Q_(e, t, n) {
  const r = Z_(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return X_[r];
}
function Cv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function J_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var hu = bv, pu = wv, $l = ["Enter", " "], ek = ["ArrowDown", "PageUp", "Home"], Sv = ["ArrowUp", "PageDown", "End"], tk = [...ek, ...Sv], nk = {
  ltr: [...$l, "ArrowRight"],
  rtl: [...$l, "ArrowLeft"]
}, rk = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, aa = "Menu", [js, ok, sk] = ea(aa), [$r, _v] = lt(aa, [
  sk,
  dr,
  To
]), cc = dr(), kv = To(), [ak, Wr] = $r(aa), [ik, ia] = $r(aa), Ev = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = cc(t), [c, l] = v.useState(null), f = v.useRef(!1), d = Rt(s), h = Oo(o);
  return v.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(sc, { ...i, children: /* @__PURE__ */ u.jsx(
    ak,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        ik,
        {
          scope: t,
          onClose: v.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Ev.displayName = aa;
var ck = "MenuAnchor", mu = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = cc(n);
    return /* @__PURE__ */ u.jsx(oa, { ...o, ...r, ref: t });
  }
);
mu.displayName = ck;
var vu = "MenuPortal", [lk, Mv] = $r(vu, {
  forceMount: void 0
}), Pv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Wr(vu, t);
  return /* @__PURE__ */ u.jsx(lk, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
Pv.displayName = vu;
var Yt = "MenuContent", [dk, gu] = $r(Yt), Nv = v.forwardRef(
  (e, t) => {
    const n = Mv(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Wr(Yt, e.__scopeMenu), a = ia(Yt, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(js.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ u.jsx(js.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ u.jsx(uk, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(fk, { ...o, ref: t }) }) }) });
  }
), uk = v.forwardRef(
  (e, t) => {
    const n = Wr(Yt, e.__scopeMenu), r = v.useRef(null), o = be(t, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return Xi(s);
    }, []), /* @__PURE__ */ u.jsx(
      yu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: q(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), fk = v.forwardRef((e, t) => {
  const n = Wr(Yt, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    yu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), hk = /* @__PURE__ */ or("MenuContent.ScrollLock"), yu = v.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: h,
      onDismiss: p,
      disableOutsideScroll: g,
      ...m
    } = e, x = Wr(Yt, n), C = ia(Yt, n), b = cc(n), y = kv(n), S = ok(n), [w, M] = v.useState(null), k = v.useRef(null), E = be(t, k, x.onContentChange), A = v.useRef(0), O = v.useRef(""), j = v.useRef(0), $ = v.useRef(null), V = v.useRef("right"), D = v.useRef(0), B = g ? na : v.Fragment, F = g ? { as: hk, allowPinchZoom: !0 } : void 0, X = (W) => {
      var I, J;
      const oe = O.current + W, N = S().filter((re) => !re.disabled), P = document.activeElement, L = (I = N.find((re) => re.ref.current === P)) == null ? void 0 : I.textValue, z = N.map((re) => re.textValue), Z = kk(z, oe, L), U = (J = N.find((re) => re.textValue === Z)) == null ? void 0 : J.ref.current;
      (function re(de) {
        O.current = de, window.clearTimeout(A.current), de !== "" && (A.current = window.setTimeout(() => re(""), 1e3));
      })(oe), U && setTimeout(() => U.focus());
    };
    v.useEffect(() => () => window.clearTimeout(A.current), []), Ui();
    const T = v.useCallback((W) => {
      var N, P;
      return V.current === ((N = $.current) == null ? void 0 : N.side) && Mk(W, (P = $.current) == null ? void 0 : P.area);
    }, []);
    return /* @__PURE__ */ u.jsx(
      dk,
      {
        scope: n,
        searchRef: O,
        onItemEnter: v.useCallback(
          (W) => {
            T(W) && W.preventDefault();
          },
          [T]
        ),
        onItemLeave: v.useCallback(
          (W) => {
            var oe;
            T(W) || ((oe = k.current) == null || oe.focus(), M(null));
          },
          [T]
        ),
        onTriggerLeave: v.useCallback(
          (W) => {
            T(W) && W.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: v.useCallback((W) => {
          $.current = W;
        }, []),
        children: /* @__PURE__ */ u.jsx(B, { ...F, children: /* @__PURE__ */ u.jsx(
          ta,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: q(s, (W) => {
              var oe;
              W.preventDefault(), (oe = k.current) == null || oe.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ u.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: l,
                onPointerDownOutside: f,
                onFocusOutside: d,
                onInteractOutside: h,
                onDismiss: p,
                children: /* @__PURE__ */ u.jsx(
                  hu,
                  {
                    asChild: !0,
                    ...y,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: q(c, (W) => {
                      C.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      ac,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Gv(x.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...b,
                        ...m,
                        ref: E,
                        style: { outline: "none", ...m.style },
                        onKeyDown: q(m.onKeyDown, (W) => {
                          const N = W.target.closest("[data-radix-menu-content]") === W.currentTarget, P = W.ctrlKey || W.altKey || W.metaKey, L = W.key.length === 1;
                          N && (W.key === "Tab" && W.preventDefault(), !P && L && X(W.key));
                          const z = k.current;
                          if (W.target !== z || !tk.includes(W.key)) return;
                          W.preventDefault();
                          const U = S().filter((I) => !I.disabled).map((I) => I.ref.current);
                          Sv.includes(W.key) && U.reverse(), Sk(U);
                        }),
                        onBlur: q(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(A.current), O.current = "");
                        }),
                        onPointerMove: q(
                          e.onPointerMove,
                          $s((W) => {
                            const oe = W.target, N = D.current !== W.clientX;
                            if (W.currentTarget.contains(oe) && N) {
                              const P = W.clientX > D.current ? "right" : "left";
                              V.current = P, D.current = W.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Nv.displayName = Yt;
var pk = "MenuGroup", bu = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { role: "group", ...r, ref: t });
  }
);
bu.displayName = pk;
var mk = "MenuLabel", Av = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t });
  }
);
Av.displayName = mk;
var Ci = "MenuItem", Eh = "menu.itemSelect", lc = v.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = v.useRef(null), a = ia(Ci, e.__scopeMenu), i = gu(Ci, e.__scopeMenu), c = be(t, s), l = v.useRef(!1), f = () => {
      const d = s.current;
      if (!n && d) {
        const h = new CustomEvent(Eh, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Eh, (p) => r == null ? void 0 : r(p), { once: !0 }), Hd(d, h), h.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      Rv,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: q(e.onClick, f),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, d), l.current = !0;
        },
        onPointerUp: q(e.onPointerUp, (d) => {
          var h;
          l.current || (h = d.currentTarget) == null || h.click();
        }),
        onKeyDown: q(e.onKeyDown, (d) => {
          const h = i.searchRef.current !== "";
          n || h && d.key === " " || $l.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
lc.displayName = Ci;
var Rv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = gu(Ci, n), i = kv(n), c = v.useRef(null), l = be(t, c), [f, d] = v.useState(!1), [h, p] = v.useState("");
    return v.useEffect(() => {
      const g = c.current;
      g && p((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ u.jsx(
      js.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ u.jsx(pu, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: q(
              e.onPointerMove,
              $s((g) => {
                r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: q(
              e.onPointerLeave,
              $s((g) => a.onItemLeave(g))
            ),
            onFocus: q(e.onFocus, () => d(!0)),
            onBlur: q(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), vk = "MenuCheckboxItem", Ov = v.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ u.jsx($v, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u.jsx(
      lc,
      {
        role: "menuitemcheckbox",
        "aria-checked": Si(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": wu(n),
        onSelect: q(
          o.onSelect,
          () => r == null ? void 0 : r(Si(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ov.displayName = vk;
var Dv = "MenuRadioGroup", [gk, yk] = $r(
  Dv,
  { value: void 0, onValueChange: () => {
  } }
), Iv = v.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = Rt(r);
    return /* @__PURE__ */ u.jsx(gk, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ u.jsx(bu, { ...o, ref: t }) });
  }
);
Iv.displayName = Dv;
var Tv = "MenuRadioItem", jv = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = yk(Tv, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ u.jsx($v, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ u.jsx(
      lc,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": wu(s),
        onSelect: q(
          r.onSelect,
          () => {
            var a;
            return (a = o.onValueChange) == null ? void 0 : a.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jv.displayName = Tv;
var xu = "MenuItemIndicator", [$v, bk] = $r(
  xu,
  { checked: !1 }
), Wv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = bk(xu, n);
    return /* @__PURE__ */ u.jsx(
      mt,
      {
        present: r || Si(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          ne.span,
          {
            ...o,
            ref: t,
            "data-state": wu(s.checked)
          }
        )
      }
    );
  }
);
Wv.displayName = xu;
var xk = "MenuSeparator", Lv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(
      ne.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Lv.displayName = xk;
var wk = "MenuArrow", Fv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = cc(n);
    return /* @__PURE__ */ u.jsx(ic, { ...o, ...r, ref: t });
  }
);
Fv.displayName = wk;
var Ck = "MenuSub", [Rj, Vv] = $r(Ck), os = "MenuSubTrigger", zv = v.forwardRef(
  (e, t) => {
    const n = Wr(os, e.__scopeMenu), r = ia(os, e.__scopeMenu), o = Vv(os, e.__scopeMenu), s = gu(os, e.__scopeMenu), a = v.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, l = { __scopeMenu: e.__scopeMenu }, f = v.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return v.useEffect(() => f, [f]), v.useEffect(() => {
      const d = i.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [i, c]), /* @__PURE__ */ u.jsx(mu, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      Rv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Gv(n.open),
        ...e,
        ref: Vn(t, o.onTriggerChange),
        onClick: (d) => {
          var h;
          (h = e.onClick) == null || h.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: q(
          e.onPointerMove,
          $s((d) => {
            s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: q(
          e.onPointerLeave,
          $s((d) => {
            var p, g;
            f();
            const h = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (h) {
              const m = (g = n.content) == null ? void 0 : g.dataset.side, x = m === "right", C = x ? -5 : 5, b = h[x ? "left" : "right"], y = h[x ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + C, y: d.clientY },
                  { x: b, y: h.top },
                  { x: y, y: h.top },
                  { x: y, y: h.bottom },
                  { x: b, y: h.bottom }
                ],
                side: m
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(d), d.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: q(e.onKeyDown, (d) => {
          var p;
          const h = s.searchRef.current !== "";
          e.disabled || h && d.key === " " || nk[r.dir].includes(d.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
zv.displayName = os;
var Bv = "MenuSubContent", Hv = v.forwardRef(
  (e, t) => {
    const n = Mv(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Wr(Yt, e.__scopeMenu), a = ia(Yt, e.__scopeMenu), i = Vv(Bv, e.__scopeMenu), c = v.useRef(null), l = be(t, c);
    return /* @__PURE__ */ u.jsx(js.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ u.jsx(js.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      yu,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var d;
          a.isUsingKeyboardRef.current && ((d = c.current) == null || d.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: q(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: q(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: q(e.onKeyDown, (f) => {
          var p;
          const d = f.currentTarget.contains(f.target), h = rk[a.dir].includes(f.key);
          d && h && (s.onOpenChange(!1), (p = i.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Hv.displayName = Bv;
function Gv(e) {
  return e ? "open" : "closed";
}
function Si(e) {
  return e === "indeterminate";
}
function wu(e) {
  return Si(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Sk(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _k(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function kk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = _k(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Ek(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, d = c.x, h = c.y;
    f > r != h > r && n < (d - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function Mk(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ek(n, t);
}
function $s(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Pk = Ev, Nk = mu, Ak = Pv, Rk = Nv, Ok = bu, Dk = Av, Ik = lc, Tk = Ov, jk = Iv, $k = jv, Wk = Wv, Lk = Lv, Fk = Fv, Vk = zv, zk = Hv, dc = "DropdownMenu", [Bk] = lt(
  dc,
  [_v]
), Et = _v(), [Hk, Yv] = Bk(dc), Kv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Et(t), l = v.useRef(null), [f, d] = kt({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: dc
  });
  return /* @__PURE__ */ u.jsx(
    Hk,
    {
      scope: t,
      triggerId: Ze(),
      triggerRef: l,
      contentId: Ze(),
      open: f,
      onOpenChange: d,
      onOpenToggle: v.useCallback(() => d((h) => !h), [d]),
      modal: i,
      children: /* @__PURE__ */ u.jsx(Pk, { ...c, open: f, onOpenChange: d, dir: r, modal: i, children: n })
    }
  );
};
Kv.displayName = dc;
var Uv = "DropdownMenuTrigger", qv = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Yv(Uv, n), a = Et(n);
    return /* @__PURE__ */ u.jsx(Nk, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Vn(t, s.triggerRef),
        onPointerDown: q(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: q(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
qv.displayName = Uv;
var Gk = "DropdownMenuPortal", Xv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Et(t);
  return /* @__PURE__ */ u.jsx(Ak, { ...r, ...n });
};
Xv.displayName = Gk;
var Zv = "DropdownMenuContent", Qv = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Yv(Zv, n), s = Et(n), a = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Rk,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: q(e.onInteractOutside, (i) => {
          const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, f = c.button === 2 || l;
          (!o.modal || f) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Qv.displayName = Zv;
var Yk = "DropdownMenuGroup", Kk = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ u.jsx(Ok, { ...o, ...r, ref: t });
  }
);
Kk.displayName = Yk;
var Uk = "DropdownMenuLabel", Jv = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ u.jsx(Dk, { ...o, ...r, ref: t });
  }
);
Jv.displayName = Uk;
var qk = "DropdownMenuItem", eg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ u.jsx(Ik, { ...o, ...r, ref: t });
  }
);
eg.displayName = qk;
var Xk = "DropdownMenuCheckboxItem", Zk = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(Tk, { ...o, ...r, ref: t });
});
Zk.displayName = Xk;
var Qk = "DropdownMenuRadioGroup", Jk = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(jk, { ...o, ...r, ref: t });
});
Jk.displayName = Qk;
var eE = "DropdownMenuRadioItem", tE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx($k, { ...o, ...r, ref: t });
});
tE.displayName = eE;
var nE = "DropdownMenuItemIndicator", rE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(Wk, { ...o, ...r, ref: t });
});
rE.displayName = nE;
var oE = "DropdownMenuSeparator", tg = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(Lk, { ...o, ...r, ref: t });
});
tg.displayName = oE;
var sE = "DropdownMenuArrow", aE = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ u.jsx(Fk, { ...o, ...r, ref: t });
  }
);
aE.displayName = sE;
var iE = "DropdownMenuSubTrigger", cE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(Vk, { ...o, ...r, ref: t });
});
cE.displayName = iE;
var lE = "DropdownMenuSubContent", dE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ u.jsx(
    zk,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
dE.displayName = lE;
var uE = Kv, fE = qv, hE = Xv, pE = Qv, mE = Jv, Mh = eg, vE = tg;
function Ph(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var uc = "Popover", [ng] = lt(uc, [
  dr
]), ca = dr(), [gE, ur] = ng(uc), rg = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = ca(t), c = v.useRef(null), [l, f] = v.useState(!1), [d, h] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: uc
  });
  return /* @__PURE__ */ u.jsx(sc, { ...i, children: /* @__PURE__ */ u.jsx(
    gE,
    {
      scope: t,
      contentId: Ze(),
      triggerRef: c,
      open: d,
      onOpenChange: h,
      onOpenToggle: v.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: v.useCallback(() => f(!0), []),
      onCustomAnchorRemove: v.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
rg.displayName = uc;
var og = "PopoverAnchor", sg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(og, n), s = ca(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return v.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ u.jsx(oa, { ...s, ...r, ref: t });
  }
);
sg.displayName = og;
var ag = "PopoverTrigger", ig = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(ag, n), s = ca(n), a = be(t, o.triggerRef), i = /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": fg(o.open),
        ...r,
        ref: a,
        onClick: q(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ u.jsx(oa, { asChild: !0, ...s, children: i });
  }
);
ig.displayName = ag;
var Cu = "PopoverPortal", [yE, bE] = ng(Cu, {
  forceMount: void 0
}), cg = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ur(Cu, t);
  return /* @__PURE__ */ u.jsx(yE, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
cg.displayName = Cu;
var wo = "PopoverContent", lg = v.forwardRef(
  (e, t) => {
    const n = bE(wo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ur(wo, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(wE, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(CE, { ...o, ref: t }) });
  }
);
lg.displayName = wo;
var xE = /* @__PURE__ */ or("PopoverContent.RemoveScroll"), wE = v.forwardRef(
  (e, t) => {
    const n = ur(wo, e.__scopePopover), r = v.useRef(null), o = be(t, r), s = v.useRef(!1);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return Xi(a);
    }, []), /* @__PURE__ */ u.jsx(na, { as: xE, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      dg,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: q(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: q(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), CE = v.forwardRef(
  (e, t) => {
    const n = ur(wo, e.__scopePopover), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      dg,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), dg = v.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: f,
      ...d
    } = e, h = ur(wo, n), p = ca(n);
    return Ui(), /* @__PURE__ */ u.jsx(
      ta,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ u.jsx(
          Tr,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ u.jsx(
              ac,
              {
                "data-state": fg(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), ug = "PopoverClose", SE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(ug, n);
    return /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
SE.displayName = ug;
var _E = "PopoverArrow", kE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ca(n);
    return /* @__PURE__ */ u.jsx(ic, { ...o, ...r, ref: t });
  }
);
kE.displayName = _E;
function fg(e) {
  return e ? "open" : "closed";
}
var hg = rg, EE = sg, pg = ig, mg = cg, Su = lg, _u = "Progress", ku = 100, [ME] = lt(_u), [PE, NE] = ME(_u), vg = v.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = AE,
      ...a
    } = e;
    (o || o === 0) && !Nh(o) && console.error(RE(`${o}`, "Progress"));
    const i = Nh(o) ? o : ku;
    r !== null && !Ah(r, i) && console.error(OE(`${r}`, "Progress"));
    const c = Ah(r, i) ? r : null, l = _i(c) ? s(c, i) : void 0;
    return /* @__PURE__ */ u.jsx(PE, { scope: n, value: c, max: i, children: /* @__PURE__ */ u.jsx(
      ne.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": _i(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": bg(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
vg.displayName = _u;
var gg = "ProgressIndicator", yg = v.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = NE(gg, n);
    return /* @__PURE__ */ u.jsx(
      ne.div,
      {
        "data-state": bg(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
yg.displayName = gg;
function AE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function bg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function _i(e) {
  return typeof e == "number";
}
function Nh(e) {
  return _i(e) && !isNaN(e) && e > 0;
}
function Ah(e, t) {
  return _i(e) && !isNaN(e) && e <= t && e >= 0;
}
function RE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ku}\`.`;
}
function OE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ku} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var DE = vg, IE = yg, Eu = "Radio", [TE, xg] = lt(Eu), [jE, $E] = TE(Eu), wg = v.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: c,
      form: l,
      ...f
    } = e, [d, h] = v.useState(null), p = be(t, (x) => h(x)), g = v.useRef(!1), m = d ? l || !!d.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(jE, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": kg(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: p,
          onClick: q(e.onClick, (x) => {
            o || c == null || c(), m && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ u.jsx(
        _g,
        {
          control: d,
          bubbles: !g.current,
          name: r,
          value: i,
          checked: o,
          required: s,
          disabled: a,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
wg.displayName = Eu;
var Cg = "RadioIndicator", Sg = v.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = $E(Cg, n);
    return /* @__PURE__ */ u.jsx(mt, { present: r || s.checked, children: /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": kg(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Sg.displayName = Cg;
var WE = "RadioBubbleInput", _g = v.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = be(a, s), c = Qi(n), l = Ji(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== n && p) {
        const g = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ u.jsx(
      ne.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
_g.displayName = WE;
function kg(e) {
  return e ? "checked" : "unchecked";
}
var LE = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], fc = "RadioGroup", [FE] = lt(fc, [
  To,
  xg
]), Eg = To(), Mg = xg(), [VE, zE] = FE(fc), Pg = v.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: c,
      dir: l,
      loop: f = !0,
      onValueChange: d,
      ...h
    } = e, p = Eg(n), g = Oo(l), [m, x] = kt({
      prop: s,
      defaultProp: o ?? null,
      onChange: d,
      caller: fc
    });
    return /* @__PURE__ */ u.jsx(
      VE,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: m,
        onValueChange: x,
        children: /* @__PURE__ */ u.jsx(
          hu,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: g,
            loop: f,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: g,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Pg.displayName = fc;
var Ng = "RadioGroupItem", Ag = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = zE(Ng, n), a = s.disabled || r, i = Eg(n), c = Mg(n), l = v.useRef(null), f = be(t, l), d = s.value === o.value, h = v.useRef(!1);
    return v.useEffect(() => {
      const p = (m) => {
        LE.includes(m.key) && (h.current = !0);
      }, g = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ u.jsx(
      pu,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          wg,
          {
            disabled: a,
            required: s.required,
            checked: d,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: q((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: q(o.onFocus, () => {
              var p;
              h.current && ((p = l.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Ag.displayName = Ng;
var BE = "RadioGroupIndicator", Rg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Mg(n);
    return /* @__PURE__ */ u.jsx(Sg, { ...o, ...r, ref: t });
  }
);
Rg.displayName = BE;
var HE = Pg, GE = Ag, YE = Rg, KE = [" ", "Enter", "ArrowUp", "ArrowDown"], UE = [" ", "Enter"], Ar = "Select", [hc, pc, qE] = ea(Ar), [jo] = lt(Ar, [
  qE,
  dr
]), mc = dr(), [XE, fr] = jo(Ar), [ZE, QE] = jo(Ar), Og = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: f,
    autoComplete: d,
    disabled: h,
    required: p,
    form: g
  } = e, m = mc(t), [x, C] = v.useState(null), [b, y] = v.useState(null), [S, w] = v.useState(!1), M = Oo(l), [k, E] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ar
  }), [A, O] = kt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Ar
  }), j = v.useRef(null), $ = x ? g || !!x.closest("form") : !0, [V, D] = v.useState(/* @__PURE__ */ new Set()), B = Array.from(V).map((F) => F.props.value).join(";");
  return /* @__PURE__ */ u.jsx(sc, { ...m, children: /* @__PURE__ */ u.jsxs(
    XE,
    {
      required: p,
      scope: t,
      trigger: x,
      onTriggerChange: C,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: w,
      contentId: Ze(),
      value: A,
      onValueChange: O,
      open: k,
      onOpenChange: E,
      dir: M,
      triggerPointerDownPosRef: j,
      disabled: h,
      children: [
        /* @__PURE__ */ u.jsx(hc.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          ZE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((F) => {
              D((X) => new Set(X).add(F));
            }, []),
            onNativeOptionRemove: v.useCallback((F) => {
              D((X) => {
                const T = new Set(X);
                return T.delete(F), T;
              });
            }, []),
            children: n
          }
        ) }),
        $ ? /* @__PURE__ */ u.jsxs(
          oy,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: A,
            onChange: (F) => O(F.target.value),
            disabled: h,
            form: g,
            children: [
              A === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
Og.displayName = Ar;
var Dg = "SelectTrigger", Ig = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = mc(n), a = fr(Dg, n), i = a.disabled || r, c = be(t, a.onTriggerChange), l = pc(n), f = v.useRef("touch"), [d, h, p] = ay((m) => {
      const x = l().filter((y) => !y.disabled), C = x.find((y) => y.value === a.value), b = iy(x, m, C);
      b !== void 0 && a.onValueChange(b.value);
    }), g = (m) => {
      i || (a.onOpenChange(!0), p()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(oa, { asChild: !0, ...s, children: /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": sy(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: q(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && g(m);
        }),
        onPointerDown: q(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const x = m.target;
          x.hasPointerCapture(m.pointerId) && x.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (g(m), m.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (m) => {
          const x = d.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(x && m.key === " ") && KE.includes(m.key) && (g(), m.preventDefault());
        })
      }
    ) });
  }
);
Ig.displayName = Dg;
var Tg = "SelectValue", jg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = fr(Tg, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, d = be(t, c.onValueNodeChange);
    return ct(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ u.jsx(
      ne.span,
      {
        ...i,
        ref: d,
        style: { pointerEvents: "none" },
        children: sy(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: a }) : s
      }
    );
  }
);
jg.displayName = Tg;
var JE = "SelectIcon", $g = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
$g.displayName = JE;
var eM = "SelectPortal", Wg = (e) => /* @__PURE__ */ u.jsx(jr, { asChild: !0, ...e });
Wg.displayName = eM;
var Rr = "SelectContent", Lg = v.forwardRef(
  (e, t) => {
    const n = fr(Rr, e.__scopeSelect), [r, o] = v.useState();
    if (ct(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Qs.createPortal(
        /* @__PURE__ */ u.jsx(Fg, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(hc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(Vg, { ...e, ref: t });
  }
);
Lg.displayName = Rr;
var en = 10, [Fg, hr] = jo(Rr), tM = "SelectContentImpl", nM = /* @__PURE__ */ or("SelectContent.RemoveScroll"), Vg = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: x,
      //
      ...C
    } = e, b = fr(Rr, n), [y, S] = v.useState(null), [w, M] = v.useState(null), k = be(t, (I) => S(I)), [E, A] = v.useState(null), [O, j] = v.useState(
      null
    ), $ = pc(n), [V, D] = v.useState(!1), B = v.useRef(!1);
    v.useEffect(() => {
      if (y) return Xi(y);
    }, [y]), Ui();
    const F = v.useCallback(
      (I) => {
        const [J, ...re] = $().map((ge) => ge.ref.current), [de] = re.slice(-1), me = document.activeElement;
        for (const ge of I)
          if (ge === me || (ge == null || ge.scrollIntoView({ block: "nearest" }), ge === J && w && (w.scrollTop = 0), ge === de && w && (w.scrollTop = w.scrollHeight), ge == null || ge.focus(), document.activeElement !== me)) return;
      },
      [$, w]
    ), X = v.useCallback(
      () => F([E, y]),
      [F, E, y]
    );
    v.useEffect(() => {
      V && X();
    }, [V, X]);
    const { onOpenChange: T, triggerPointerDownPosRef: W } = b;
    v.useEffect(() => {
      if (y) {
        let I = { x: 0, y: 0 };
        const J = (de) => {
          var me, ge;
          I = {
            x: Math.abs(Math.round(de.pageX) - (((me = W.current) == null ? void 0 : me.x) ?? 0)),
            y: Math.abs(Math.round(de.pageY) - (((ge = W.current) == null ? void 0 : ge.y) ?? 0))
          };
        }, re = (de) => {
          I.x <= 10 && I.y <= 10 ? de.preventDefault() : y.contains(de.target) || T(!1), document.removeEventListener("pointermove", J), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [y, T, W]), v.useEffect(() => {
      const I = () => T(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [T]);
    const [oe, N] = ay((I) => {
      const J = $().filter((me) => !me.disabled), re = J.find((me) => me.ref.current === document.activeElement), de = iy(J, I, re);
      de && setTimeout(() => de.ref.current.focus());
    }), P = v.useCallback(
      (I, J, re) => {
        const de = !B.current && !re;
        (b.value !== void 0 && b.value === J || de) && (A(I), de && (B.current = !0));
      },
      [b.value]
    ), L = v.useCallback(() => y == null ? void 0 : y.focus(), [y]), z = v.useCallback(
      (I, J, re) => {
        const de = !B.current && !re;
        (b.value !== void 0 && b.value === J || de) && j(I);
      },
      [b.value]
    ), Z = r === "popper" ? Wl : zg, U = Z === Wl ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ u.jsx(
      Fg,
      {
        scope: n,
        content: y,
        viewport: w,
        onViewportChange: M,
        itemRefCallback: P,
        selectedItem: E,
        onItemLeave: L,
        itemTextRefCallback: z,
        focusSelectedItem: X,
        selectedItemText: O,
        position: r,
        isPositioned: V,
        searchRef: oe,
        children: /* @__PURE__ */ u.jsx(na, { as: nM, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          ta,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: q(o, (I) => {
              var J;
              (J = b.trigger) == null || J.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...C,
                    ...U,
                    onPlaced: () => D(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: q(C.onKeyDown, (I) => {
                      const J = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !J && I.key.length === 1 && N(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let de = $().filter((me) => !me.disabled).map((me) => me.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (de = de.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const me = I.target, ge = de.indexOf(me);
                          de = de.slice(ge + 1);
                        }
                        setTimeout(() => F(de)), I.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Vg.displayName = tM;
var rM = "SelectItemAlignedPosition", zg = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = fr(Rr, n), a = hr(Rr, n), [i, c] = v.useState(null), [l, f] = v.useState(null), d = be(t, (k) => f(k)), h = pc(n), p = v.useRef(!1), g = v.useRef(!0), { viewport: m, selectedItem: x, selectedItemText: C, focusSelectedItem: b } = a, y = v.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && m && x && C) {
      const k = s.trigger.getBoundingClientRect(), E = l.getBoundingClientRect(), A = s.valueNode.getBoundingClientRect(), O = C.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const me = O.left - E.left, ge = A.left - me, Se = k.left - ge, Ie = k.width + Se, je = Math.max(Ie, E.width), dt = window.innerWidth - en, Xe = Ph(ge, [
          en,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(en, dt - je)
        ]);
        i.style.minWidth = Ie + "px", i.style.left = Xe + "px";
      } else {
        const me = E.right - O.right, ge = window.innerWidth - A.right - me, Se = window.innerWidth - k.right - ge, Ie = k.width + Se, je = Math.max(Ie, E.width), dt = window.innerWidth - en, Xe = Ph(ge, [
          en,
          Math.max(en, dt - je)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = Xe + "px";
      }
      const j = h(), $ = window.innerHeight - en * 2, V = m.scrollHeight, D = window.getComputedStyle(l), B = parseInt(D.borderTopWidth, 10), F = parseInt(D.paddingTop, 10), X = parseInt(D.borderBottomWidth, 10), T = parseInt(D.paddingBottom, 10), W = B + F + V + T + X, oe = Math.min(x.offsetHeight * 5, W), N = window.getComputedStyle(m), P = parseInt(N.paddingTop, 10), L = parseInt(N.paddingBottom, 10), z = k.top + k.height / 2 - en, Z = $ - z, U = x.offsetHeight / 2, I = x.offsetTop + U, J = B + F + I, re = W - J;
      if (J <= z) {
        const me = j.length > 0 && x === j[j.length - 1].ref.current;
        i.style.bottom = "0px";
        const ge = l.clientHeight - m.offsetTop - m.offsetHeight, Se = Math.max(
          Z,
          U + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (me ? L : 0) + ge + X
        ), Ie = J + Se;
        i.style.height = Ie + "px";
      } else {
        const me = j.length > 0 && x === j[0].ref.current;
        i.style.top = "0px";
        const Se = Math.max(
          z,
          B + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (me ? P : 0) + U
        ) + re;
        i.style.height = Se + "px", m.scrollTop = J - z + m.offsetTop;
      }
      i.style.margin = `${en}px 0`, i.style.minHeight = oe + "px", i.style.maxHeight = $ + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    l,
    m,
    x,
    C,
    s.dir,
    r
  ]);
  ct(() => y(), [y]);
  const [S, w] = v.useState();
  ct(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const M = v.useCallback(
    (k) => {
      k && g.current === !0 && (y(), b == null || b(), g.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ u.jsx(
    sM,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: M,
      children: /* @__PURE__ */ u.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ u.jsx(
            ne.div,
            {
              ...o,
              ref: d,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
zg.displayName = rM;
var oM = "SelectPopperPosition", Wl = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = en,
    ...s
  } = e, a = mc(n);
  return /* @__PURE__ */ u.jsx(
    ac,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Wl.displayName = oM;
var [sM, Mu] = jo(Rr, {}), Ll = "SelectViewport", Bg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = hr(Ll, n), a = Mu(Ll, n), i = be(t, s.onViewportChange), c = v.useRef(0);
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ u.jsx(hc.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
        ne.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: q(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && d) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const g = window.innerHeight - en * 2, m = parseFloat(d.style.minHeight), x = parseFloat(d.style.height), C = Math.max(m, x);
                if (C < g) {
                  const b = C + p, y = Math.min(g, b), S = b - y;
                  d.style.height = y + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Bg.displayName = Ll;
var Hg = "SelectGroup", [aM, iM] = jo(Hg), Gg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ze();
    return /* @__PURE__ */ u.jsx(aM, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Gg.displayName = Hg;
var Yg = "SelectLabel", Kg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = iM(Yg, n);
    return /* @__PURE__ */ u.jsx(ne.div, { id: o.id, ...r, ref: t });
  }
);
Kg.displayName = Yg;
var ki = "SelectItem", [cM, Ug] = jo(ki), qg = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = fr(ki, n), c = hr(ki, n), l = i.value === r, [f, d] = v.useState(s ?? ""), [h, p] = v.useState(!1), g = be(
      t,
      (b) => {
        var y;
        return (y = c.itemRefCallback) == null ? void 0 : y.call(c, b, r, o);
      }
    ), m = Ze(), x = v.useRef("touch"), C = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      cM,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: l,
        onItemTextChange: v.useCallback((b) => {
          d((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          hc.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ u.jsx(
              ne.div,
              {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: g,
                onFocus: q(a.onFocus, () => p(!0)),
                onBlur: q(a.onBlur, () => p(!1)),
                onClick: q(a.onClick, () => {
                  x.current !== "mouse" && C();
                }),
                onPointerUp: q(a.onPointerUp, () => {
                  x.current === "mouse" && C();
                }),
                onPointerDown: q(a.onPointerDown, (b) => {
                  x.current = b.pointerType;
                }),
                onPointerMove: q(a.onPointerMove, (b) => {
                  var y;
                  x.current = b.pointerType, o ? (y = c.onItemLeave) == null || y.call(c) : x.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: q(a.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c));
                }),
                onKeyDown: q(a.onKeyDown, (b) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (UE.includes(b.key) && C(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
qg.displayName = ki;
var ss = "SelectItemText", Xg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = fr(ss, n), i = hr(ss, n), c = Ug(ss, n), l = QE(ss, n), [f, d] = v.useState(null), h = be(
      t,
      (C) => d(C),
      c.onItemTextChange,
      (C) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, C, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, g = v.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: x } = l;
    return ct(() => (m(g), () => x(g)), [m, x, g]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(ne.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Qs.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Xg.displayName = ss;
var Zg = "SelectItemIndicator", Qg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ug(Zg, n).isSelected ? /* @__PURE__ */ u.jsx(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Qg.displayName = Zg;
var Fl = "SelectScrollUpButton", Jg = v.forwardRef((e, t) => {
  const n = hr(Fl, e.__scopeSelect), r = Mu(Fl, e.__scopeSelect), [o, s] = v.useState(!1), a = be(t, r.onScrollButtonChange);
  return ct(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    ty,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Jg.displayName = Fl;
var Vl = "SelectScrollDownButton", ey = v.forwardRef((e, t) => {
  const n = hr(Vl, e.__scopeSelect), r = Mu(Vl, e.__scopeSelect), [o, s] = v.useState(!1), a = be(t, r.onScrollButtonChange);
  return ct(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    ty,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ey.displayName = Vl;
var ty = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = hr("SelectScrollButton", n), a = v.useRef(null), i = pc(n), c = v.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return v.useEffect(() => () => c(), [c]), ct(() => {
    var f;
    const l = i().find((d) => d.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u.jsx(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: q(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: q(o.onPointerMove, () => {
        var l;
        (l = s.onItemLeave) == null || l.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: q(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), lM = "SelectSeparator", ny = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
ny.displayName = lM;
var zl = "SelectArrow", ry = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = mc(n), s = fr(zl, n), a = hr(zl, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ u.jsx(ic, { ...o, ...r, ref: t }) : null;
  }
);
ry.displayName = zl;
var dM = "SelectBubbleInput", oy = v.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = v.useRef(null), s = be(r, o), a = Qi(t);
    return v.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && f) {
        const d = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(d);
      }
    }, [a, t]), /* @__PURE__ */ u.jsx(
      ne.select,
      {
        ...n,
        style: { ...Jp, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
oy.displayName = dM;
function sy(e) {
  return e === "" || e === void 0;
}
function ay(e) {
  const t = Rt(e), n = v.useRef(""), r = v.useRef(0), o = v.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = v.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return v.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function iy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = uM(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function uM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var fM = Og, hM = Ig, pM = jg, mM = $g, vM = Wg, gM = Lg, yM = Bg, bM = Gg, xM = Kg, wM = qg, CM = Xg, SM = Qg, _M = Jg, kM = ey, EM = ny, MM = ry, vc = "Switch", [PM] = lt(vc), [NM, AM] = PM(vc), cy = v.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c = "on",
      onCheckedChange: l,
      form: f,
      ...d
    } = e, [h, p] = v.useState(null), g = be(t, (y) => p(y)), m = v.useRef(!1), x = h ? f || !!h.closest("form") : !0, [C, b] = kt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: vc
    });
    return /* @__PURE__ */ u.jsxs(NM, { scope: n, checked: C, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": a,
          "data-state": fy(C),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...d,
          ref: g,
          onClick: q(e.onClick, (y) => {
            b((S) => !S), x && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ u.jsx(
        uy,
        {
          control: h,
          bubbles: !m.current,
          name: r,
          value: c,
          checked: C,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cy.displayName = vc;
var ly = "SwitchThumb", dy = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = AM(ly, n);
    return /* @__PURE__ */ u.jsx(
      ne.span,
      {
        "data-state": fy(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
dy.displayName = ly;
var RM = "SwitchBubbleInput", uy = v.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = be(a, s), c = Qi(n), l = Ji(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== n && p) {
        const g = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
uy.displayName = RM;
function fy(e) {
  return e ? "checked" : "unchecked";
}
var OM = cy, DM = dy, gc = "Tabs", [IM] = lt(gc, [
  To
]), hy = To(), [TM, Pu] = IM(gc), py = v.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...l
    } = e, f = Oo(i), [d, h] = kt({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: gc
    });
    return /* @__PURE__ */ u.jsx(
      TM,
      {
        scope: n,
        baseId: Ze(),
        value: d,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            dir: f,
            "data-orientation": a,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
py.displayName = gc;
var my = "TabsList", vy = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Pu(my, n), a = hy(n);
    return /* @__PURE__ */ u.jsx(
      hu,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          ne.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
vy.displayName = my;
var gy = "TabsTrigger", yy = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Pu(gy, n), i = hy(n), c = xy(a.baseId, r), l = wy(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ u.jsx(
      pu,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ u.jsx(
          ne.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": l,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...s,
            ref: t,
            onMouseDown: q(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: q(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && a.onValueChange(r);
            }),
            onFocus: q(e.onFocus, () => {
              const d = a.activationMode !== "manual";
              !f && !o && d && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
yy.displayName = gy;
var by = "TabsContent", jM = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Pu(by, n), c = xy(i.baseId, r), l = wy(i.baseId, r), f = r === i.value, d = v.useRef(f);
    return v.useEffect(() => {
      const h = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(mt, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      ne.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: l,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: d.current ? "0s" : void 0
        },
        children: h && s
      }
    ) });
  }
);
jM.displayName = by;
function xy(e, t) {
  return `${e}-trigger-${t}`;
}
function wy(e, t) {
  return `${e}-content-${t}`;
}
var $M = py, WM = vy, LM = yy, Nu = "ToastProvider", [Au, FM, VM] = ea("Toast"), [Cy] = lt("Toast", [VM]), [zM, yc] = Cy(Nu), Sy = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = v.useState(null), [l, f] = v.useState(0), d = v.useRef(!1), h = v.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Nu}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(Au.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    zM,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: l,
      viewport: i,
      onViewportChange: c,
      onToastAdd: v.useCallback(() => f((p) => p + 1), []),
      onToastRemove: v.useCallback(() => f((p) => p - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: h,
      children: a
    }
  ) });
};
Sy.displayName = Nu;
var _y = "ToastViewport", BM = ["F8"], Bl = "toast.viewportPause", Hl = "toast.viewportResume", ky = v.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = BM,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = yc(_y, n), i = FM(n), c = v.useRef(null), l = v.useRef(null), f = v.useRef(null), d = v.useRef(null), h = be(t, d, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = a.toastCount > 0;
    v.useEffect(() => {
      const x = (C) => {
        var y;
        r.length !== 0 && r.every((S) => C[S] || C.code === S) && ((y = d.current) == null || y.focus());
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [r]), v.useEffect(() => {
      const x = c.current, C = d.current;
      if (g && x && C) {
        const b = () => {
          if (!a.isClosePausedRef.current) {
            const M = new CustomEvent(Bl);
            C.dispatchEvent(M), a.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (a.isClosePausedRef.current) {
            const M = new CustomEvent(Hl);
            C.dispatchEvent(M), a.isClosePausedRef.current = !1;
          }
        }, S = (M) => {
          !x.contains(M.relatedTarget) && y();
        }, w = () => {
          x.contains(document.activeElement) || y();
        };
        return x.addEventListener("focusin", b), x.addEventListener("focusout", S), x.addEventListener("pointermove", b), x.addEventListener("pointerleave", w), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          x.removeEventListener("focusin", b), x.removeEventListener("focusout", S), x.removeEventListener("pointermove", b), x.removeEventListener("pointerleave", w), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [g, a.isClosePausedRef]);
    const m = v.useCallback(
      ({ tabbingDirection: x }) => {
        const b = i().map((y) => {
          const S = y.ref.current, w = [S, ...nP(S)];
          return x === "forwards" ? w : w.reverse();
        });
        return (x === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return v.useEffect(() => {
      const x = d.current;
      if (x) {
        const C = (b) => {
          var w, M, k;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const E = document.activeElement, A = b.shiftKey;
            if (b.target === x && A) {
              (w = l.current) == null || w.focus();
              return;
            }
            const $ = m({ tabbingDirection: A ? "backwards" : "forwards" }), V = $.findIndex((D) => D === E);
            el($.slice(V + 1)) ? b.preventDefault() : A ? (M = l.current) == null || M.focus() : (k = f.current) == null || k.focus();
          }
        };
        return x.addEventListener("keydown", C), () => x.removeEventListener("keydown", C);
      }
    }, [i, m]), /* @__PURE__ */ u.jsxs(
      vC,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ u.jsx(
            Gl,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const x = m({
                  tabbingDirection: "forwards"
                });
                el(x);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(Au.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(ne.ol, { tabIndex: -1, ...s, ref: h }) }),
          g && /* @__PURE__ */ u.jsx(
            Gl,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const x = m({
                  tabbingDirection: "backwards"
                });
                el(x);
              }
            }
          )
        ]
      }
    );
  }
);
ky.displayName = _y;
var Ey = "ToastFocusProxy", Gl = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = yc(Ey, n);
    return /* @__PURE__ */ u.jsx(
      Hi,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          var l;
          const i = a.relatedTarget;
          !((l = s.viewport) != null && l.contains(i)) && r();
        }
      }
    );
  }
);
Gl.displayName = Ey;
var la = "Toast", HM = "toast.swipeStart", GM = "toast.swipeMove", YM = "toast.swipeCancel", KM = "toast.swipeEnd", My = v.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = kt({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: la
    });
    return /* @__PURE__ */ u.jsx(mt, { present: n || i, children: /* @__PURE__ */ u.jsx(
      XM,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Rt(e.onPause),
        onResume: Rt(e.onResume),
        onSwipeStart: q(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: q(e.onSwipeMove, (l) => {
          const { x: f, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: q(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: q(e.onSwipeEnd, (l) => {
          const { x: f, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
My.displayName = la;
var [UM, qM] = Cy(la, {
  onClose() {
  }
}), XM = v.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: s,
      onClose: a,
      onEscapeKeyDown: i,
      onPause: c,
      onResume: l,
      onSwipeStart: f,
      onSwipeMove: d,
      onSwipeCancel: h,
      onSwipeEnd: p,
      ...g
    } = e, m = yc(la, n), [x, C] = v.useState(null), b = be(t, (D) => C(D)), y = v.useRef(null), S = v.useRef(null), w = o || m.duration, M = v.useRef(0), k = v.useRef(w), E = v.useRef(0), { onToastAdd: A, onToastRemove: O } = m, j = Rt(() => {
      var B;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((B = m.viewport) == null || B.focus()), a();
    }), $ = v.useCallback(
      (D) => {
        !D || D === 1 / 0 || (window.clearTimeout(E.current), M.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(j, D));
      },
      [j]
    );
    v.useEffect(() => {
      const D = m.viewport;
      if (D) {
        const B = () => {
          $(k.current), l == null || l();
        }, F = () => {
          const X = (/* @__PURE__ */ new Date()).getTime() - M.current;
          k.current = k.current - X, window.clearTimeout(E.current), c == null || c();
        };
        return D.addEventListener(Bl, F), D.addEventListener(Hl, B), () => {
          D.removeEventListener(Bl, F), D.removeEventListener(Hl, B);
        };
      }
    }, [m.viewport, w, c, l, $]), v.useEffect(() => {
      s && !m.isClosePausedRef.current && $(w);
    }, [s, w, m.isClosePausedRef, $]), v.useEffect(() => (A(), () => O()), [A, O]);
    const V = v.useMemo(() => x ? Ty(x) : null, [x]);
    return m.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      V && /* @__PURE__ */ u.jsx(
        ZM,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: V
        }
      ),
      /* @__PURE__ */ u.jsx(UM, { scope: n, onClose: j, children: Qs.createPortal(
        /* @__PURE__ */ u.jsx(Au.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
          mC,
          {
            asChild: !0,
            onEscapeKeyDown: q(i, () => {
              m.isFocusedToastEscapeKeyDownRef.current || j(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              ne.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...g,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: q(e.onKeyDown, (D) => {
                  D.key === "Escape" && (i == null || i(D.nativeEvent), D.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: q(e.onPointerDown, (D) => {
                  D.button === 0 && (y.current = { x: D.clientX, y: D.clientY });
                }),
                onPointerMove: q(e.onPointerMove, (D) => {
                  if (!y.current) return;
                  const B = D.clientX - y.current.x, F = D.clientY - y.current.y, X = !!S.current, T = ["left", "right"].includes(m.swipeDirection), W = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, oe = T ? W(0, B) : 0, N = T ? 0 : W(0, F), P = D.pointerType === "touch" ? 10 : 2, L = { x: oe, y: N }, z = { originalEvent: D, delta: L };
                  X ? (S.current = L, Ta(GM, d, z, {
                    discrete: !1
                  })) : Rh(L, m.swipeDirection, P) ? (S.current = L, Ta(HM, f, z, {
                    discrete: !1
                  }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(B) > P || Math.abs(F) > P) && (y.current = null);
                }),
                onPointerUp: q(e.onPointerUp, (D) => {
                  const B = S.current, F = D.target;
                  if (F.hasPointerCapture(D.pointerId) && F.releasePointerCapture(D.pointerId), S.current = null, y.current = null, B) {
                    const X = D.currentTarget, T = { originalEvent: D, delta: B };
                    Rh(B, m.swipeDirection, m.swipeThreshold) ? Ta(KM, p, T, {
                      discrete: !0
                    }) : Ta(
                      YM,
                      h,
                      T,
                      {
                        discrete: !0
                      }
                    ), X.addEventListener("click", (W) => W.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        m.viewport
      ) })
    ] }) : null;
  }
), ZM = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = yc(la, t), [s, a] = v.useState(!1), [i, c] = v.useState(!1);
  return eP(() => a(!0)), v.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ u.jsx(jr, { asChild: !0, children: /* @__PURE__ */ u.jsx(Hi, { ...r, children: s && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, QM = "ToastTitle", Py = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t });
  }
);
Py.displayName = QM;
var JM = "ToastDescription", Ny = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(ne.div, { ...r, ref: t });
  }
);
Ny.displayName = JM;
var Ay = "ToastAction", Ry = v.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ u.jsx(Iy, { altText: n, asChild: !0, children: /* @__PURE__ */ u.jsx(Dy, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Ay}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Ry.displayName = Ay;
var Oy = "ToastClose", Dy = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = qM(Oy, n);
    return /* @__PURE__ */ u.jsx(Iy, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
Dy.displayName = Oy;
var Iy = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ u.jsx(
    ne.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Ty(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), tP(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Ty(r));
    }
  }), t;
}
function Ta(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Hd(o, s) : o.dispatchEvent(s);
}
var Rh = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function eP(e = () => {
}) {
  const t = Rt(e);
  ct(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function tP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function nP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function el(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var rP = Sy, oP = ky, sP = My, aP = Py, iP = Ny, cP = Ry, [bc] = lt("Tooltip", [
  dr
]), xc = dr(), jy = "TooltipProvider", lP = 700, Yl = "tooltip.open", [dP, Ru] = bc(jy), $y = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = lP,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = v.useRef(!0), i = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    dP,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: v.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: v.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: v.useCallback((l) => {
        i.current = l;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
$y.displayName = jy;
var Ws = "Tooltip", [uP, da] = bc(Ws), Wy = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Ru(Ws, e.__scopeTooltip), l = xc(t), [f, d] = v.useState(null), h = Ze(), p = v.useRef(0), g = a ?? c.disableHoverableContent, m = i ?? c.delayDuration, x = v.useRef(!1), [C, b] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Yl))) : c.onClose(), s == null || s(k);
    },
    caller: Ws
  }), y = v.useMemo(() => C ? x.current ? "delayed-open" : "instant-open" : "closed", [C]), S = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, b(!0);
  }, [b]), w = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b(!1);
  }, [b]), M = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, b(!0), p.current = 0;
    }, m);
  }, [m, b]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ u.jsx(sc, { ...l, children: /* @__PURE__ */ u.jsx(
    uP,
    {
      scope: t,
      contentId: h,
      open: C,
      stateAttribute: y,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: v.useCallback(() => {
        c.isOpenDelayedRef.current ? M() : S();
      }, [c.isOpenDelayedRef, M, S]),
      onTriggerLeave: v.useCallback(() => {
        g ? w() : (window.clearTimeout(p.current), p.current = 0);
      }, [w, g]),
      onOpen: S,
      onClose: w,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Wy.displayName = Ws;
var Kl = "TooltipTrigger", Ly = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = da(Kl, n), s = Ru(Kl, n), a = xc(n), i = v.useRef(null), c = be(t, i, o.onTriggerChange), l = v.useRef(!1), f = v.useRef(!1), d = v.useCallback(() => l.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ u.jsx(oa, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: q(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: q(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: q(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: q(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: q(e.onBlur, o.onClose),
        onClick: q(e.onClick, o.onClose)
      }
    ) });
  }
);
Ly.displayName = Kl;
var Ou = "TooltipPortal", [fP, hP] = bc(Ou, {
  forceMount: void 0
}), Fy = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = da(Ou, t);
  return /* @__PURE__ */ u.jsx(fP, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
Fy.displayName = Ou;
var Co = "TooltipContent", Vy = v.forwardRef(
  (e, t) => {
    const n = hP(Co, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = da(Co, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(mt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ u.jsx(zy, { side: o, ...s, ref: t }) : /* @__PURE__ */ u.jsx(pP, { side: o, ...s, ref: t }) });
  }
), pP = v.forwardRef((e, t) => {
  const n = da(Co, e.__scopeTooltip), r = Ru(Co, e.__scopeTooltip), o = v.useRef(null), s = be(t, o), [a, i] = v.useState(null), { trigger: c, onClose: l } = n, f = o.current, { onPointerInTransitChange: d } = r, h = v.useCallback(() => {
    i(null), d(!1);
  }, [d]), p = v.useCallback(
    (g, m) => {
      const x = g.currentTarget, C = { x: g.clientX, y: g.clientY }, b = bP(C, x.getBoundingClientRect()), y = xP(C, b), S = wP(m.getBoundingClientRect()), w = SP([...y, ...S]);
      i(w), d(!0);
    },
    [d]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (c && f) {
      const g = (x) => p(x, f), m = (x) => p(x, c);
      return c.addEventListener("pointerleave", g), f.addEventListener("pointerleave", m), () => {
        c.removeEventListener("pointerleave", g), f.removeEventListener("pointerleave", m);
      };
    }
  }, [c, f, p, h]), v.useEffect(() => {
    if (a) {
      const g = (m) => {
        const x = m.target, C = { x: m.clientX, y: m.clientY }, b = (c == null ? void 0 : c.contains(x)) || (f == null ? void 0 : f.contains(x)), y = !CP(C, a);
        b ? h() : y && (h(), l());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, f, a, l, h]), /* @__PURE__ */ u.jsx(zy, { ...e, ref: s });
}), [mP, vP] = bc(Ws, { isInside: !1 }), gP = /* @__PURE__ */ Qp("TooltipContent"), zy = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = da(Co, n), l = xc(n), { onClose: f } = c;
    return v.useEffect(() => (document.addEventListener(Yl, f), () => document.removeEventListener(Yl, f)), [f]), v.useEffect(() => {
      if (c.trigger) {
        const d = (h) => {
          const p = h.target;
          p != null && p.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ u.jsx(
      Tr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ u.jsxs(
          ac,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ u.jsx(gP, { children: r }),
              /* @__PURE__ */ u.jsx(mP, { scope: n, isInside: !0, children: /* @__PURE__ */ u.jsx(R2, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Vy.displayName = Co;
var By = "TooltipArrow", yP = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = xc(n);
    return vP(
      By,
      n
    ).isInside ? null : /* @__PURE__ */ u.jsx(ic, { ...o, ...r, ref: t });
  }
);
yP.displayName = By;
function bP(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function xP(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function wP(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function CP(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, d = c.x, h = c.y;
    f > r != h > r && n < (d - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function SP(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), _P(t);
}
function _P(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var kP = $y, EP = Wy, MP = Ly, PP = Fy, NP = Vy;
function Hy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Hy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Gy() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Hy(e)) && (r && (r += " "), r += t);
  return r;
}
const Oh = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Dh = Gy, pe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Dh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], d = s == null ? void 0 : s[l];
    if (f === null) return null;
    const h = Oh(f) || Oh(d);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [d, h] = f;
    return h === void 0 || (l[d] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: d, className: h, ...p } = f;
    return Object.entries(p).every((g) => {
      let [m, x] = g;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === x;
    }) ? [
      ...l,
      d,
      h
    ] : l;
  }, []);
  return Dh(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Du = "-", AP = (e) => {
  const t = OP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Du);
      return i[0] === "" && i.length !== 1 && i.shift(), Yy(i, t) || RP(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, Yy = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Yy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Du);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Ih = /^\[(.+)\]$/, RP = (e) => {
  if (Ih.test(e)) {
    const t = Ih.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, OP = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Ul(n[o], r, o, t);
  return r;
}, Ul = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Th(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (DP(o)) {
        Ul(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Ul(a, Th(t, s), n, r);
    });
  });
}, Th = (e, t) => {
  let n = e;
  return t.split(Du).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, DP = (e) => e.isThemeGetter, IP = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, a) => {
    n.set(s, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    }
  };
}, ql = "!", Xl = ":", TP = Xl.length, jP = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    for (let g = 0; g < o.length; g++) {
      let m = o[g];
      if (a === 0 && i === 0) {
        if (m === Xl) {
          s.push(o.slice(c, g)), c = g + TP;
          continue;
        }
        if (m === "/") {
          l = g;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(c), d = $P(f), h = d !== f, p = l && l > c ? l - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + Xl, s = r;
    r = (a) => a.startsWith(o) ? s(a.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, $P = (e) => e.endsWith(ql) ? e.substring(0, e.length - 1) : e.startsWith(ql) ? e.substring(1) : e, WP = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let s = [];
    return r.forEach((a) => {
      a[0] === "[" || t[a] ? (o.push(...s.sort(), a), s = []) : s.push(a);
    }), o.push(...s.sort()), o;
  };
}, LP = (e) => ({
  cache: IP(e.cacheSize),
  parseClassName: jP(e),
  sortModifiers: WP(e),
  ...AP(e)
}), FP = /\s+/, VP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(FP);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: d,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = n(f);
    if (d) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let x = !!m, C = r(x ? g.substring(0, m) : g);
    if (!C) {
      if (!x) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(g), !C) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      x = !1;
    }
    const b = s(h).join(":"), y = p ? b + ql : b, S = y + C;
    if (a.includes(S))
      continue;
    a.push(S);
    const w = o(C, x);
    for (let M = 0; M < w.length; ++M) {
      const k = w[M];
      a.push(y + k);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function zP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ky(t)) && (r && (r += " "), r += n);
  return r;
}
const Ky = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ky(e[r])) && (n && (n += " "), n += t);
  return n;
};
function jh(e, ...t) {
  let n, r, o, s = a;
  function a(c) {
    const l = t.reduce((f, d) => d(f), e());
    return n = LP(l), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const f = VP(c, n);
    return o(c, f), f;
  }
  return function() {
    return s(zP.apply(null, arguments));
  };
}
const Je = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Uy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qy = /^\((?:(\w[\w-]*):)?(.+)\)$/i, BP = /^\d+\/\d+$/, HP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, GP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, YP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, KP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, UP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Kr = (e) => BP.test(e), Ce = (e) => !!e && !Number.isNaN(Number(e)), Yn = (e) => !!e && Number.isInteger(Number(e)), tl = (e) => e.endsWith("%") && Ce(e.slice(0, -1)), jn = (e) => HP.test(e), qP = () => !0, XP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  GP.test(e) && !YP.test(e)
), Xy = () => !1, ZP = (e) => KP.test(e), QP = (e) => UP.test(e), JP = (e) => !se(e) && !ae(e), eN = (e) => $o(e, Jy, Xy), se = (e) => Uy.test(e), vr = (e) => $o(e, eb, XP), nl = (e) => $o(e, sN, Ce), $h = (e) => $o(e, Zy, Xy), tN = (e) => $o(e, Qy, QP), ja = (e) => $o(e, tb, ZP), ae = (e) => qy.test(e), Jo = (e) => Wo(e, eb), nN = (e) => Wo(e, aN), Wh = (e) => Wo(e, Zy), rN = (e) => Wo(e, Jy), oN = (e) => Wo(e, Qy), $a = (e) => Wo(e, tb, !0), $o = (e, t, n) => {
  const r = Uy.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Wo = (e, t, n = !1) => {
  const r = qy.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Zy = (e) => e === "position" || e === "percentage", Qy = (e) => e === "image" || e === "url", Jy = (e) => e === "length" || e === "size" || e === "bg-size", eb = (e) => e === "length", sN = (e) => e === "number", aN = (e) => e === "family-name", tb = (e) => e === "shadow", Lh = () => {
  const e = Je("color"), t = Je("font"), n = Je("text"), r = Je("font-weight"), o = Je("tracking"), s = Je("leading"), a = Je("breakpoint"), i = Je("container"), c = Je("spacing"), l = Je("radius"), f = Je("shadow"), d = Je("inset-shadow"), h = Je("text-shadow"), p = Je("drop-shadow"), g = Je("blur"), m = Je("perspective"), x = Je("aspect"), C = Je("ease"), b = Je("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [...S(), ae, se], M = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], E = () => [ae, se, c], A = () => [Kr, "full", "auto", ...E()], O = () => [Yn, "none", "subgrid", ae, se], j = () => ["auto", {
    span: ["full", Yn, ae, se]
  }, Yn, ae, se], $ = () => [Yn, "auto", ae, se], V = () => ["auto", "min", "max", "fr", ae, se], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...E()], X = () => [Kr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], T = () => [e, ae, se], W = () => [...S(), Wh, $h, {
    position: [ae, se]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", rN, eN, {
    size: [ae, se]
  }], P = () => [tl, Jo, vr], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ae,
    se
  ], z = () => ["", Ce, Jo, vr], Z = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [Ce, tl, Wh, $h], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    ae,
    se
  ], re = () => ["none", Ce, ae, se], de = () => ["none", Ce, ae, se], me = () => [Ce, ae, se], ge = () => [Kr, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [jn],
      breakpoint: [jn],
      color: [qP],
      container: [jn],
      "drop-shadow": [jn],
      ease: ["in", "out", "in-out"],
      font: [JP],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [jn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [jn],
      shadow: [jn],
      spacing: ["px", Ce],
      text: [jn],
      "text-shadow": [jn],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Kr, se, ae, x]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ce, se, ae, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: M()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": M()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": M()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Yn, "auto", ae, se]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Kr, "full", "auto", i, ...E()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ce, Kr, "auto", "initial", "none", se]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, ae, se]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, ae, se]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Yn, "first", "last", "none", ae, se]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": O()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": O()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: E()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": E()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": E()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...D(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": D()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: E()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: E()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: E()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: E()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: E()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: E()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: E()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: E()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: E()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": E()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": E()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: X()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Jo, vr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, ae, nl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tl, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nN, se, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, ae, se]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", ae, nl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...E()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae, se]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ae, se]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", ae, vr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", ae, se]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae, se]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ae, se]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: W()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: oe()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: N()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Yn, ae, se],
          radial: ["", ae, se],
          conic: [Yn, ae, se]
        }, oN, tN]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: P()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: P()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: P()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, ae, se]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ce, Jo, vr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          f,
          $a,
          ja
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, $a, ja]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ce, vr]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, $a, ja]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, ae, se]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ce]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [ae, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ce]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": I()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: W()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: N()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ae, se]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ae,
          se
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: J()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ce, ae, se]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, ae, se]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          $a,
          ja
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, ae, se]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, ae, se]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, ae, se]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, ae, se]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, ae, se]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ae,
          se
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": J()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ce, ae, se]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, ae, se]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, ae, se]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, ae, se]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, ae, se]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, ae, se]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, ae, se]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, ae, se]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": E()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": E()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": E()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ae, se]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ce, "initial", ae, se]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", C, ae, se]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, ae, se]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, ae, se]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [m, ae, se]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: re()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": re()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": re()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": re()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: de()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": de()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": de()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": de()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: me()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": me()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": me()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ae, se, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ge()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ge()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ge()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ge()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae, se]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ae, se]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Jo, vr, nl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, iN = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: s = {}
}) => (as(e, "cacheSize", t), as(e, "prefix", n), as(e, "experimentalParseClassName", r), Wa(e.theme, s.theme), Wa(e.classGroups, s.classGroups), Wa(e.conflictingClassGroups, s.conflictingClassGroups), Wa(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), as(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), La(e.theme, o.theme), La(e.classGroups, o.classGroups), La(e.conflictingClassGroups, o.conflictingClassGroups), La(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), nb(e, o, "orderSensitiveModifiers"), e), as = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Wa = (e, t) => {
  if (t)
    for (const n in t)
      as(e, n, t[n]);
}, La = (e, t) => {
  if (t)
    for (const n in t)
      nb(e, t, n);
}, nb = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, cN = (e, ...t) => typeof e == "function" ? jh(Lh, e, ...t) : jh(() => iN(Lh(), e), ...t), lN = cN({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    },
    classGroups: {
      "bg-image": [{ bg: ["row-overlay-fade"] }],
      z: [
        {
          z: [
            "slight",
            "sticky-content",
            "sticky-bar",
            "page-header",
            "navigation",
            "floating",
            "action-bar",
            "drawer",
            "dialog",
            "dropdown",
            "tooltip",
            "toast",
            "max"
          ]
        }
      ]
    }
  }
}), R = (...e) => lN(Gy(e)), it = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return _.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return _.createElement(o, { size: n, className: r });
  }
  return e;
}, rb = (e, t) => {
  if (typeof e == "string" || typeof e == "number") return e;
  if (e !== null && typeof e == "object" && "id" in e) {
    const { id: n } = e;
    if (typeof n == "string" || typeof n == "number") return n;
  }
  throw new Error(
    `${t}: values must be strings, numbers, or objects with a string or number \`id\`. Pass \`getItemValue\` for any other shape.`
  );
}, dN = pe(
  `bg-surface-primary border-divider-default shadow-overlay text-body-primary
  py-xxs rounded-md z-dropdown min-w-32 overflow-hidden`,
  {
    variants: {
      size: {
        sm: "min-w-32",
        md: "min-w-48",
        lg: "min-w-64"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), uN = pe(
  `focus:bg-interactive-neutral-hover px-md min-h-10 py-1.5 relative flex
  cursor-pointer items-center transition-colors outline-none select-none
  data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
  {
    variants: {
      intent: {
        default: "text-body-primary hover:bg-interactive-neutral-hover",
        danger: `text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover`
      }
    },
    defaultVariants: {
      intent: "default"
    }
  }
), Zl = _.forwardRef(
  ({
    children: e,
    onSelect: t,
    disabled: n,
    intent: r = "default",
    icon: o,
    className: s,
    asChild: a = !1,
    ...i
  }, c) => {
    const l = {
      ref: c,
      asChild: a,
      className: R(uN({ intent: r }), s),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), a ? /* @__PURE__ */ u.jsx(Mh, { ...l, children: e }) : /* @__PURE__ */ u.jsxs(Mh, { ...l, children: [
      it(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Zl.displayName = "DropdownItem";
const fN = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  vE,
  {
    ref: n,
    className: R(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
fN.displayName = "DropdownSeparator";
const hN = _.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  mE,
  {
    ref: r,
    className: R(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
hN.displayName = "DropdownLabel";
const Iu = _.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(hE, { children: /* @__PURE__ */ u.jsx(
  pE,
  {
    ref: o,
    className: R(dN({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Iu.displayName = "DropdownContent";
const Tu = ({
  children: e,
  open: t,
  onOpenChange: n,
  modal: r = !0,
  ...o
}) => {
  const s = {
    modal: r,
    ...o
  };
  return t !== void 0 && (s.open = t), n !== void 0 && (s.onOpenChange = n), /* @__PURE__ */ u.jsx(uE, { ...s, children: e });
};
Tu.displayName = "Dropdown";
const ju = _.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ u.jsx(
  fE,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
ju.displayName = "DropdownTrigger";
const Oj = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ u.jsx("div", { className: r, children: /* @__PURE__ */ u.jsxs(Tu, { children: [
  /* @__PURE__ */ u.jsx(
    ju,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ u.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ u.jsx(p2, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ u.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ u.jsx(
          Js,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ u.jsxs(Iu, { align: "end", className: "py-0 min-w-auto", children: [
    /* @__PURE__ */ u.jsxs(
      "p",
      {
        className: `h-6.75 px-3 py-0 text-sm font-medium leading-6.75
              text-body-success border-b-surface-default border-b text-center`,
        children: [
          /* @__PURE__ */ u.jsx(
            "span",
            {
              className: `bg-shape-accent-lime-soft w-2 h-2 mr-1 inline-block
                rounded-[50%]`
            }
          ),
          t
        ]
      }
    ),
    n
  ] })
] }) }), ob = _.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...s
  }, a) => e === "single" ? /* @__PURE__ */ u.jsx(
    nh,
    {
      ref: a,
      type: "single",
      collapsible: t,
      ...n !== void 0 && { value: n },
      ...r !== void 0 && {
        defaultValue: r
      },
      ...o !== void 0 && {
        onValueChange: o
      },
      ...s
    }
  ) : /* @__PURE__ */ u.jsx(
    nh,
    {
      ref: a,
      type: "multiple",
      ...n !== void 0 && { value: n },
      ...r !== void 0 && {
        defaultValue: r
      },
      ...o !== void 0 && {
        onValueChange: o
      },
      ...s
    }
  )
);
ob.displayName = "Accordion";
const sb = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
    oC,
    {
      ref: n,
      className: R(
        `bg-surface-primary rounded-sm mt-2 first:mt-0 overflow-hidden
        data-[disabled]:opacity-30`,
        e
      ),
      ...t
    }
  )
);
sb.displayName = "AccordionItem";
const ab = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(sC, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  aC,
  {
    ref: r,
    className: R(
      `text-body-primary py-sm px-md text-lg font-bold
        focus-visible:ring-interactive-focused flex flex-1 items-center
        justify-between leading-[1.2] transition-all focus-visible:ring-4
        focus-visible:outline-none data-[disabled]:pointer-events-none
        [&[data-state=open]>svg]:rotate-180`,
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ u.jsx(
        Js,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
ab.displayName = "AccordionTrigger";
const ib = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  iC,
  {
    ref: r,
    className: R(
      "text-body-secondary px-md pt-xs pb-md overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
ib.displayName = "AccordionContent";
const Dj = Object.assign(ob, {
  Item: sb,
  Trigger: ab,
  Content: ib
}), Fh = pe(
  `px-xxs text-xs font-bold h-4.5 relative inline-flex flex-shrink-0
  items-center justify-center leading-none`,
  {
    variants: {
      intent: {
        default: `rounded-sm bg-shape-accent-lime-pale
        text-shape-interactive-primary-selected`,
        new: "rounded-sm text-accent-purple-soft bg-shape-accent-purple-pale",
        autofill: "rounded-sm bg-shape-accent-green-pale text-accent-green-soft",
        danger: `rounded-sm border-interactive-alert-default text-body-alert
        pl-4.5 border border-dashed`
      }
    },
    defaultVariants: {
      intent: "default"
    }
  }
), pN = _.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...s
  }, a) => {
    const c = t || (e === "danger" ? g2 : void 0);
    return o ? /* @__PURE__ */ u.jsx(
      Ro,
      {
        className: R(Fh({ intent: e }), n),
        ref: a,
        ...s,
        children: r
      }
    ) : /* @__PURE__ */ u.jsxs(
      "span",
      {
        className: R(Fh({ intent: e }), n),
        ref: a,
        ...s,
        children: [
          e === "danger" && c && it(c, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
pN.displayName = "Badge";
const mN = pe("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Fa = pe(
  `text-body-primary hover:text-interactive-primary-hover
  focus-visible:ring-interactive-focused rounded truncate overflow-hidden
  transition-colors focus-visible:ring-2 focus-visible:outline-none`,
  {
    variants: {
      isActive: {
        true: "text-body-primary font-normal cursor-default",
        false: "text-body-primary cursor-pointer underline"
      }
    },
    defaultVariants: {
      isActive: !1
    }
  }
), vN = pe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), gN = _.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = zd,
    maxItems: r,
    className: o,
    "aria-label": s = "breadcrumb",
    ...a
  }, i) => {
    let c = e;
    if (r && e.length > r) {
      const l = e[0], f = e.slice(-(r - 1));
      c = [l, { label: "…" }, ...f];
    }
    return /* @__PURE__ */ u.jsx(
      "nav",
      {
        ref: i,
        "aria-label": s,
        className: R(mN({ size: t }), o),
        ...a,
        children: /* @__PURE__ */ u.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: c.map((l, f) => {
          const d = f === c.length - 1, h = l.label === "…";
          return /* @__PURE__ */ u.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ u.jsx("li", { className: "min-w-0 flex items-center", children: h ? /* @__PURE__ */ u.jsx(
              "span",
              {
                className: R(Fa({ isActive: !0 })),
                children: l.label
              }
            ) : l.asChild ? /* @__PURE__ */ u.jsx(
              Ro,
              {
                onClick: l.onClick,
                className: R(
                  Fa({ isActive: d })
                ),
                "aria-current": d ? "page" : void 0,
                children: l.label
              }
            ) : l.href || l.onClick ? /* @__PURE__ */ u.jsx(
              "a",
              {
                href: l.href,
                onClick: l.onClick,
                className: R(
                  Fa({ isActive: d })
                ),
                "aria-current": d ? "page" : void 0,
                children: l.label
              }
            ) : /* @__PURE__ */ u.jsx(
              "span",
              {
                className: R(Fa({ isActive: !0 })),
                "aria-current": d ? "page" : void 0,
                children: l.label
              }
            ) }),
            !d && /* @__PURE__ */ u.jsx(
              "li",
              {
                className: "flex items-center",
                "aria-hidden": "true",
                role: "presentation",
                children: /* @__PURE__ */ u.jsx(
                  n,
                  {
                    className: R(vN({ size: t }))
                  }
                )
              }
            )
          ] }, `${l.label}-${f}`);
        }) })
      }
    );
  }
);
gN.displayName = "Breadcrumbs";
const yN = pe(
  "bg-surface-disabled rounded relative w-full overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
), cb = _.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...s
  }, a) => /* @__PURE__ */ u.jsx(
    DE,
    {
      ref: a,
      className: R(yN({ size: r }), o),
      value: e,
      max: t,
      ...s,
      children: /* @__PURE__ */ u.jsx(
        IE,
        {
          className: R(
            "bg-shape-interactive-primary-default h-full transition-transform",
            {
              "animate-indeterminate": n
            }
          ),
          style: n ? void 0 : { transform: `translateX(-${100 - e / t * 100}%)` }
        }
      )
    }
  )
);
cb.displayName = "ProgressIndicator.Linear";
const bN = pe("flex items-center", {
  variants: {
    size: {
      sm: "gap-x-xs",
      md: "gap-x-md gap-y-md"
    },
    layout: {
      row: "flex-row",
      column: "flex-col"
    }
  },
  defaultVariants: {
    size: "md",
    layout: "row"
  }
}), xN = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Ei = {
  sm: 12,
  md: 10
}, Vh = {
  sm: (50 - Ei.sm / 2).toString(),
  md: (50 - Ei.md / 2).toString()
}, lb = _.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, s) => /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      role: "status",
      className: R(bN({ size: t, layout: e }), r),
      ...o,
      children: [
        /* @__PURE__ */ u.jsxs(
          "svg",
          {
            width: "100",
            height: "100",
            viewBox: "0 0 100 100",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: R(xN[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ u.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Vh[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Ei[t]
                }
              ),
              /* @__PURE__ */ u.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Vh[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: Ei[t],
                  strokeLinecap: "round",
                  strokeDasharray: "141.37 282.74",
                  strokeDashoffset: "0"
                }
              )
            ]
          }
        ),
        n
      ]
    }
  )
);
lb.displayName = "ProgressIndicator.Circular";
const wc = {
  Linear: cb,
  Circular: lb
}, rl = pe(
  `gap-xxs rounded font-normal box-border inline-flex shrink-0 cursor-pointer
  items-center justify-center border whitespace-nowrap decoration-1
  focus-visible:ring-4 focus-visible:outline-none disabled:cursor-not-allowed
  disabled:no-underline`,
  {
    variants: {
      intent: {
        primary: `bg-interactive-primary-default text-interactive-inverse
        hover:bg-interactive-primary-hover active:bg-interactive-primary-active
        disabled:text-interactive-disabled disabled:bg-interactive-disabled
        border-transparent`,
        secondary: `bg-interactive-neutral-default
        text-interactive-primary-default hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active disabled:bg-interactive-disabled
        disabled:text-interactive-disabled
        enabled:border-interactive-primary-default border`,
        tertiary: `bg-interactive-neutral-default text-interactive-heavy
        hover:bg-interactive-neutral-hover active:bg-interactive-neutral-active
        enabled:border-interactive-default disabled:bg-interactive-disabled
        disabled:text-interactive-disabled border`,
        text: `text-interactive-primary-default
        hover:text-interactive-primary-hover hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        active:text-interactive-primary-active
        disabled:text-interactive-disabled border-transparent
        disabled:bg-transparent`
      },
      danger: {
        true: "focus-visible:ring-interactive-alert-focused",
        false: "focus-visible:ring-interactive-focused"
      },
      size: {
        icon: "",
        // To be used with icon-only buttons only
        xs: "px-sm h-8 min-w-15",
        sm: "px-md h-10 min-w-20",
        md: "min-w-24 h-11.5",
        lg: "h-14 min-w-34 text-lg",
        xl: "h-17 min-w-43 text-xl"
      },
      iconOnly: {
        true: "min-w-0 p-0! aspect-square h-auto"
      },
      textOnly: {
        true: ""
      }
    },
    compoundVariants: [
      {
        iconOnly: !0,
        intent: "text",
        class: "text-shape-interactive-primary-default"
      },
      { textOnly: !0, size: "md", class: "px-lg" },
      { textOnly: !0, size: "lg", class: "px-xl" },
      { textOnly: !0, size: "xl", class: "px-xxl" },
      { iconOnly: !1, size: "md", class: "px-lg" },
      { iconOnly: !1, size: "lg", class: "px-xl" },
      { iconOnly: !1, size: "xl", class: "px-xxl" },
      { iconOnly: !1, size: "icon", class: "px-sm h-8 min-w-15 text-sm" },
      // Fallback, should only be used with icon only
      { iconOnly: !0, size: "icon", class: "p-0" },
      { iconOnly: !0, size: "xs", class: "size-8" },
      { iconOnly: !0, size: "sm", class: "size-10" },
      { iconOnly: !0, size: "md", class: "size-11.5" },
      { iconOnly: !0, size: "lg", class: "size-14" },
      { iconOnly: !0, size: "xl", class: "size-17" },
      {
        intent: "primary",
        danger: !0,
        class: `bg-interactive-alert-default hover:bg-interactive-alert-hover
        active:bg-interactive-alert-active`
      },
      {
        intent: "secondary",
        danger: !0,
        class: `bg-interactive-neutral-default text-interactive-alert-default
        hover:bg-interactive-neutral-alert-active
        active:bg-interactive-neutral-alert-active
        enabled:border-interactive-alert-default`
      },
      {
        intent: "tertiary",
        danger: !0,
        class: `text-interactive-alert-default
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active border-none`
      },
      {
        intent: "text",
        danger: !0,
        class: `text-interactive-alert-default
        hover:text-interactive-alert-hover
        hover:bg-interactive-neutral-alert-hover
        active:bg-interactive-neutral-alert-active
        active:text-interactive-alert-active`
      }
    ],
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), Va = pe("", {
  variants: {
    text: {
      true: ""
    },
    iconOnly: {
      true: ""
    },
    size: {
      icon: "size-4",
      xs: "size-4",
      sm: "size-5",
      md: "size-5",
      lg: "size-6",
      xl: "size-7"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), He = _.forwardRef(
  ({
    intent: e,
    size: t,
    className: n,
    icon: r,
    trailingIcon: o,
    asChild: s = !1,
    loading: a = !1,
    danger: i = !1,
    children: c,
    ...l
  }, f) => {
    const d = s ? Ro : "button", h = !!((r || o) && !c && !(r && o)), p = !!(c && !r && !o), g = a || l.disabled;
    return a ? /* @__PURE__ */ u.jsxs(
      d,
      {
        ref: f,
        className: R(
          rl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          "relative",
          n
        ),
        ...l,
        disabled: g,
        children: [
          /* @__PURE__ */ u.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            it(r, {
              className: R(
                Va({ size: t, iconOnly: h, text: e === "text" })
              )
            }),
            c,
            it(o, {
              className: R(
                Va({ size: t, iconOnly: h, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ u.jsx(wc.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ u.jsxs(
      d,
      {
        ref: f,
        className: R(
          rl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          n
        ),
        ...l,
        disabled: g,
        children: [
          it(r, {
            className: R(
              Va({ size: t, iconOnly: h, text: e === "text" })
            )
          }),
          c,
          it(o, {
            className: R(
              Va({ size: t, iconOnly: h, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ u.jsx(
      d,
      {
        ref: f,
        className: R(
          rl({ intent: e, size: t, textOnly: p, danger: i }),
          n
        ),
        children: c,
        ...l,
        disabled: g
      }
    );
  }
);
He.displayName = "Button";
function wN(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ol = {}, is = {};
function Mr(e, t) {
  try {
    const r = (ol[e] || (ol[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in is ? is[r] : zh(r, r.split(":"));
  } catch {
    if (e in is) return is[e];
    const n = e == null ? void 0 : e.match(CN);
    return n ? zh(e, n.slice(1)) : NaN;
  }
}
const CN = /([+-]\d\d):?(\d\d)?/;
function zh(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return is[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class xn extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Mr(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), db(this), Ql(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new xn(...n, t) : new xn(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new xn(+this, t);
  }
  getTimezoneOffset() {
    const t = -Mr(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ql(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new xn(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Bh = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Bh.test(e)) return;
  const t = e.replace(Bh, "$1UTC");
  xn.prototype[t] && (e.startsWith("get") ? xn.prototype[e] = function() {
    return this.internal[t]();
  } : (xn.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), SN(this), +this;
  }, xn.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ql(this), +this;
  }));
});
function Ql(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Mr(e.timeZone, e) * 60));
}
function SN(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), db(e);
}
function db(e) {
  const t = Mr(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, d = Math.round(-(Mr(e.timeZone, e) * 60)) % 60;
  (d || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + f));
  const h = Mr(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), m = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, x = p !== n, C = m - c;
  if (x && C) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C);
    const b = Mr(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), S = p - y;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class xt extends xn {
  //#region static
  static tz(t, ...n) {
    return n.length ? new xt(...n, t) : new xt(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${wN(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new xt(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new xt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ub = 6048e5, _N = 864e5, Hh = Symbol.for("constructDateFrom");
function nt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Hh in e ? e[Hh](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Oe(e, t) {
  return nt(t || e, e);
}
function fb(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in);
  return isNaN(t) ? nt(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function hb(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return nt(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = nt(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let kN = {};
function ua() {
  return kN;
}
function So(e, t) {
  var i, c, l, f;
  const n = ua(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Oe(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Ls(e, t) {
  return So(e, { ...t, weekStartsOn: 1 });
}
function pb(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = nt(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Ls(o), a = nt(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Ls(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Gh(e) {
  const t = Oe(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Lo(e, ...t) {
  const n = nt.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Fs(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function mb(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Fs(r), a = Fs(o), i = +s - Gh(s), c = +a - Gh(a);
  return Math.round((i - c) / _N);
}
function EN(e, t) {
  const n = pb(e, t), r = nt(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ls(r);
}
function MN(e, t, n) {
  return fb(e, t * 7, n);
}
function PN(e, t, n) {
  return hb(e, t * 12, n);
}
function NN(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = nt.bind(null, o));
    const s = Oe(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), nt(r, n || NaN);
}
function AN(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = nt.bind(null, o));
    const s = Oe(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), nt(r, n || NaN);
}
function RN(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Fs(r) == +Fs(o);
}
function vb(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ON(e) {
  return !(!vb(e) && typeof e != "number" || isNaN(+Oe(e)));
}
function DN(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function IN(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function TN(e, t) {
  const [n, r] = Lo(e, t.start, t.end);
  return { start: n, end: r };
}
function jN(e, t) {
  const { start: n, end: r } = TN(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(nt(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function $N(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function WN(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function gb(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function yb(e, t) {
  var i, c, l, f;
  const n = ua(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Oe(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function LN(e, t) {
  return yb(e, { ...t, weekStartsOn: 1 });
}
const FN = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, VN = (e, t, n) => {
  let r;
  const o = FN[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function vo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const zN = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, BN = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, HN = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, GN = {
  date: vo({
    formats: zN,
    defaultWidth: "full"
  }),
  time: vo({
    formats: BN,
    defaultWidth: "full"
  }),
  dateTime: vo({
    formats: HN,
    defaultWidth: "full"
  })
}, YN = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, KN = (e, t, n, r) => YN[e];
function gn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const UN = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, qN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, XN = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ZN = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, QN = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, JN = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, e4 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, t4 = {
  ordinalNumber: e4,
  era: gn({
    values: UN,
    defaultWidth: "wide"
  }),
  quarter: gn({
    values: qN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gn({
    values: XN,
    defaultWidth: "wide"
  }),
  day: gn({
    values: ZN,
    defaultWidth: "wide"
  }),
  dayPeriod: gn({
    values: QN,
    defaultWidth: "wide",
    formattingValues: JN,
    defaultFormattingWidth: "wide"
  })
};
function yn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? r4(i, (d) => d.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      n4(i, (d) => d.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const f = t.slice(a.length);
    return { value: l, rest: f };
  };
}
function n4(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function r4(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function bb(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = t.slice(o.length);
    return { value: a, rest: i };
  };
}
const o4 = /^(\d+)(th|st|nd|rd)?/i, s4 = /\d+/i, a4 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, i4 = {
  any: [/^b/i, /^(a|c)/i]
}, c4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, l4 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, d4 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, u4 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, f4 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, h4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, p4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, m4 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, v4 = {
  ordinalNumber: bb({
    matchPattern: o4,
    parsePattern: s4,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yn({
    matchPatterns: a4,
    defaultMatchWidth: "wide",
    parsePatterns: i4,
    defaultParseWidth: "any"
  }),
  quarter: yn({
    matchPatterns: c4,
    defaultMatchWidth: "wide",
    parsePatterns: l4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yn({
    matchPatterns: d4,
    defaultMatchWidth: "wide",
    parsePatterns: u4,
    defaultParseWidth: "any"
  }),
  day: yn({
    matchPatterns: f4,
    defaultMatchWidth: "wide",
    parsePatterns: h4,
    defaultParseWidth: "any"
  }),
  dayPeriod: yn({
    matchPatterns: p4,
    defaultMatchWidth: "any",
    parsePatterns: m4,
    defaultParseWidth: "any"
  })
}, Cc = {
  code: "en-US",
  formatDistance: VN,
  formatLong: GN,
  formatRelative: KN,
  localize: t4,
  match: v4,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function g4(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in);
  return mb(n, gb(n)) + 1;
}
function xb(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = +Ls(n) - +EN(n);
  return Math.round(r / ub) + 1;
}
function wb(e, t) {
  var f, d, h, p;
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ua(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = nt((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = So(a, t), c = nt((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const l = So(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function y4(e, t) {
  var i, c, l, f;
  const n = ua(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = wb(e, t), s = nt((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), So(s, t);
}
function Cb(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = +So(n, t) - +y4(n, t);
  return Math.round(r / ub) + 1;
}
function Ae(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Kn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ae(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ae(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ae(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Ae(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ae(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ae(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ae(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ae(o, t.length);
  }
}, Ur = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yh = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Kn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = wb(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Ae(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ae(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = pb(e);
    return Ae(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Ae(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Ae(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Ae(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Kn.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Ae(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Cb(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ae(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = xb(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ae(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Kn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = g4(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ae(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return Ae(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return Ae(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return Ae(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = Ur.noon : r === 0 ? o = Ur.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = Ur.evening : r >= 12 ? o = Ur.afternoon : r >= 4 ? o = Ur.morning : o = Ur.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Kn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Kn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ae(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ae(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Kn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Kn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Kn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Uh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return yr(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return yr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Uh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return yr(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return yr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Kh(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + yr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Kh(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + yr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Ae(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Ae(+e, t.length);
  }
};
function Kh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Ae(s, 2);
}
function Uh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ae(Math.abs(e) / 60, 2) : yr(e, t);
}
function yr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ae(Math.trunc(r / 60), 2), s = Ae(r % 60, 2);
  return n + o + t + s;
}
const qh = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Sb = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, b4 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return qh(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", qh(r, t)).replace("{{time}}", Sb(o, t));
}, x4 = {
  p: Sb,
  P: b4
}, w4 = /^D+$/, C4 = /^Y+$/, S4 = ["D", "DD", "YY", "YYYY"];
function _4(e) {
  return w4.test(e);
}
function k4(e) {
  return C4.test(e);
}
function E4(e, t, n) {
  const r = M4(e, t, n);
  if (console.warn(r), S4.includes(e)) throw new RangeError(r);
}
function M4(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const P4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, N4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, A4 = /^'([^]*?)'?$/, R4 = /''/g, O4 = /[a-zA-Z]/;
function D4(e, t, n) {
  var f, d, h, p, g, m, x, C;
  const r = ua(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Cc, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((C = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : C.weekStartsOn) ?? 0, i = Oe(e, n == null ? void 0 : n.in);
  if (!ON(i))
    throw new RangeError("Invalid time value");
  let c = t.match(N4).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const S = x4[y];
      return S(b, o.formatLong);
    }
    return b;
  }).join("").match(P4).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: I4(b) };
    if (Yh[y])
      return { isToken: !0, value: b };
    if (y.match(O4))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((b) => {
    if (!b.isToken) return b.value;
    const y = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && k4(y) || !(n != null && n.useAdditionalDayOfYearTokens) && _4(y)) && E4(y, t, String(e));
    const S = Yh[y[0]];
    return S(i, y, o.localize, l);
  }).join("");
}
function I4(e) {
  const t = e.match(A4);
  return t ? t[1].replace(R4, "'") : e;
}
function T4(e, t) {
  const n = Oe(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), s = nt(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function j4(e, t) {
  return Oe(e, t == null ? void 0 : t.in).getMonth();
}
function $4(e, t) {
  return Oe(e, t == null ? void 0 : t.in).getFullYear();
}
function W4(e, t) {
  return +Oe(e) > +Oe(t);
}
function L4(e, t) {
  return +Oe(e) < +Oe(t);
}
function F4(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function V4(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function z4(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in), o = r.getFullYear(), s = r.getDate(), a = nt(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = T4(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function B4(e, t, n) {
  const r = Oe(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? nt(e, NaN) : (r.setFullYear(t), r);
}
const Xh = 5, H4 = 4;
function G4(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Xh * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Xh : H4;
}
function _b(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Y4(e, t) {
  const n = _b(e, t), r = G4(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Vt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? xt.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, s) => {
      var a;
      return (a = this.overrides) != null && a.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new xt(r, o, s, this.options.timeZone) : new Date(r, o, s);
    }, this.addDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addDays ? this.overrides.addDays(r, o) : fb(r, o);
    }, this.addMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addMonths ? this.overrides.addMonths(r, o) : hb(r, o);
    }, this.addWeeks = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addWeeks ? this.overrides.addWeeks(r, o) : MN(r, o);
    }, this.addYears = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addYears ? this.overrides.addYears(r, o) : PN(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : mb(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : DN(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : jN(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Y4(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : LN(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : IN(r);
    }, this.endOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.endOfWeek ? this.overrides.endOfWeek(r, o) : yb(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : WN(r);
    }, this.format = (r, o, s) => {
      var i;
      const a = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : D4(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : xb(r);
    }, this.getMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getMonth ? this.overrides.getMonth(r, this.options) : j4(r, this.options);
    }, this.getYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getYear ? this.overrides.getYear(r, this.options) : $4(r, this.options);
    }, this.getWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getWeek ? this.overrides.getWeek(r, this.options) : Cb(r, this.options);
    }, this.isAfter = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isAfter ? this.overrides.isAfter(r, o) : W4(r, o);
    }, this.isBefore = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isBefore ? this.overrides.isBefore(r, o) : L4(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : vb(r);
    }, this.isSameDay = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameDay ? this.overrides.isSameDay(r, o) : RN(r, o);
    }, this.isSameMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameMonth ? this.overrides.isSameMonth(r, o) : F4(r, o);
    }, this.isSameYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameYear ? this.overrides.isSameYear(r, o) : V4(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : NN(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : AN(r);
    }, this.setMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setMonth ? this.overrides.setMonth(r, o) : z4(r, o);
    }, this.setYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setYear ? this.overrides.setYear(r, o) : B4(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : _b(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Fs(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Ls(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : $N(r);
    }, this.startOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfWeek ? this.overrides.startOfWeek(r, this.options) : So(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : gb(r);
    }, this.options = { locale: Cc, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    var n;
    const t = (n = this.options.locale) == null ? void 0 : n.code;
    return t && Vt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n == null ? void 0 : n.code;
    if (s && Vt.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const a = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, a);
  }
}
Vt.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Nn = new Vt();
class kb {
  constructor(t, n, r = Nn) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r;
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class K4 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class U4 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function q4(e) {
  return _.createElement("button", { ...e });
}
function X4(e) {
  return _.createElement("span", { ...e });
}
function Z4(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    _.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && _.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && _.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && _.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && _.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Q4(e) {
  const { day: t, modifiers: n, ...r } = e;
  return _.createElement("td", { ...r });
}
function J4(e) {
  const { day: t, modifiers: n, ...r } = e, o = _.useRef(null);
  return _.useEffect(() => {
    var s;
    n.focused && ((s = o.current) == null || s.focus());
  }, [n.focused]), _.createElement("button", { ref: o, ...r });
}
var fe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(fe || (fe = {}));
var Fe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Fe || (Fe = {}));
var nn;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(nn || (nn = {}));
var jt;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(jt || (jt = {}));
function eA(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[fe.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === s.value);
  return _.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[fe.DropdownRoot] },
    _.createElement(r.Select, { className: a, ...s }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: f }) => _.createElement(r.Option, { key: c, value: c, disabled: f }, l))),
    _.createElement(
      "span",
      { className: o[fe.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      _.createElement(r.Chevron, { orientation: "down", size: 18, className: o[fe.Chevron] })
    )
  );
}
function tA(e) {
  return _.createElement("div", { ...e });
}
function nA(e) {
  return _.createElement("div", { ...e });
}
function rA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r }, e.children);
}
function oA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r });
}
function sA(e) {
  return _.createElement("table", { ...e });
}
function aA(e) {
  return _.createElement("div", { ...e });
}
const Eb = Zs(void 0);
function fa() {
  const e = Ds(Eb);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function iA(e) {
  const { components: t } = fa();
  return _.createElement(t.Dropdown, { ...e });
}
function cA(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: l } } = fa(), f = ke((h) => {
    o && (n == null || n(h));
  }, [o, n]), d = ke((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return _.createElement(
    "nav",
    { ...s },
    _.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[fe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      _.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[fe.Chevron], orientation: "left" })
    ),
    _.createElement(
      a.NextMonthButton,
      { type: "button", className: i[fe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      _.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[fe.Chevron] })
    )
  );
}
function lA(e) {
  const { components: t } = fa();
  return _.createElement(t.Button, { ...e });
}
function dA(e) {
  return _.createElement("option", { ...e });
}
function uA(e) {
  const { components: t } = fa();
  return _.createElement(t.Button, { ...e });
}
function fA(e) {
  const { rootRef: t, ...n } = e;
  return _.createElement("div", { ...n, ref: t });
}
function hA(e) {
  return _.createElement("select", { ...e });
}
function pA(e) {
  const { week: t, ...n } = e;
  return _.createElement("tr", { ...n });
}
function mA(e) {
  return _.createElement("th", { ...e });
}
function vA(e) {
  return _.createElement(
    "thead",
    { "aria-hidden": !0 },
    _.createElement("tr", { ...e })
  );
}
function gA(e) {
  const { week: t, ...n } = e;
  return _.createElement("th", { ...n });
}
function yA(e) {
  return _.createElement("th", { ...e });
}
function bA(e) {
  return _.createElement("tbody", { ...e });
}
function xA(e) {
  const { components: t } = fa();
  return _.createElement(t.Dropdown, { ...e });
}
const wA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: q4,
  CaptionLabel: X4,
  Chevron: Z4,
  Day: Q4,
  DayButton: J4,
  Dropdown: eA,
  DropdownNav: tA,
  Footer: nA,
  Month: rA,
  MonthCaption: oA,
  MonthGrid: sA,
  Months: aA,
  MonthsDropdown: iA,
  Nav: cA,
  NextMonthButton: lA,
  Option: dA,
  PreviousMonthButton: uA,
  Root: fA,
  Select: hA,
  Week: pA,
  WeekNumber: gA,
  WeekNumberHeader: yA,
  Weekday: mA,
  Weekdays: vA,
  Weeks: bA,
  YearsDropdown: xA
}, Symbol.toStringTag, { value: "Module" }));
function $n(e, t, n = !1, r = Nn) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function Mb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function $u(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Pb(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Nb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ab(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Rb(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Wn(e, t, n = Nn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Rb(i, n))
      return i.includes(e);
    if ($u(i))
      return $n(i, e, !1, n);
    if (Ab(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Mb(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, d = l < 0;
      return a(i.before, i.after) ? d && f : f || d;
    }
    return Pb(i) ? s(e, i.after) > 0 : Nb(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function CA(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f } = t, { isSameDay: d, isSameMonth: h, startOfMonth: p, isBefore: g, endOfMonth: m, isAfter: x } = o, C = n && p(n), b = r && m(r), y = {
    [Fe.focused]: [],
    [Fe.outside]: [],
    [Fe.disabled]: [],
    [Fe.hidden]: [],
    [Fe.today]: []
  }, S = {};
  for (const w of e) {
    const { date: M, displayMonth: k } = w, E = !!(k && !h(M, k)), A = !!(C && g(M, C)), O = !!(b && x(M, b)), j = !!(s && Wn(M, s, o)), $ = !!(a && Wn(M, a, o)) || A || O || // Broadcast calendar will show outside days as default
    !l && !c && E || l && c === !1 && E, V = d(M, f ?? o.today());
    E && y.outside.push(w), j && y.disabled.push(w), $ && y.hidden.push(w), V && y.today.push(w), i && Object.keys(i).forEach((D) => {
      const B = i == null ? void 0 : i[D];
      B && Wn(M, B, o) && (S[D] ? S[D].push(w) : S[D] = [w]);
    });
  }
  return (w) => {
    const M = {
      [Fe.focused]: !1,
      [Fe.disabled]: !1,
      [Fe.hidden]: !1,
      [Fe.outside]: !1,
      [Fe.today]: !1
    }, k = {};
    for (const E in y) {
      const A = y[E];
      M[E] = A.some((O) => O === w);
    }
    for (const E in S)
      k[E] = S[E].some((A) => A === w);
    return {
      ...M,
      // custom modifiers should override all the previous ones
      ...k
    };
  };
}
function SA(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[Fe[s]] ? o.push(t[Fe[s]]) : t[nn[s]] && o.push(t[nn[s]]), o), [t[fe.Day]]);
}
function _A(e) {
  return {
    ...wA,
    ...e
  };
}
function kA(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Ob() {
  const e = {};
  for (const t in fe)
    e[fe[t]] = `rdp-${fe[t]}`;
  for (const t in Fe)
    e[Fe[t]] = `rdp-${Fe[t]}`;
  for (const t in nn)
    e[nn[t]] = `rdp-${nn[t]}`;
  for (const t in jt)
    e[jt[t]] = `rdp-${jt[t]}`;
  return e;
}
function Db(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const EA = Db;
function MA(e, t, n) {
  return (n ?? new Vt(t)).format(e, "d");
}
function PA(e, t = Nn) {
  return t.format(e, "LLLL");
}
function NA(e, t, n) {
  return (n ?? new Vt(t)).format(e, "cccccc");
}
function AA(e, t = Nn) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function RA() {
  return "";
}
function Ib(e, t = Nn) {
  return t.format(e, "yyyy");
}
const OA = Ib, DA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Db,
  formatDay: MA,
  formatMonthCaption: EA,
  formatMonthDropdown: PA,
  formatWeekNumber: AA,
  formatWeekNumberHeader: RA,
  formatWeekdayName: NA,
  formatYearCaption: OA,
  formatYearDropdown: Ib
}, Symbol.toStringTag, { value: "Module" }));
function IA(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...DA,
    ...e
  };
}
function TA(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), g = l(h), m = t && h < s(t) || n && h > s(n) || !1;
    return { value: g, label: p, disabled: m };
  });
}
function jA(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[fe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function $A(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), s = [];
  for (let a = 0; a < 7; a++) {
    const i = e.addDays(o, a);
    s.push(i);
  }
  return s;
}
function WA(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, addYears: i, getYear: c, isBefore: l, isSameYear: f } = r, d = s(e), h = a(t), p = [];
  let g = d;
  for (; l(g, h) || f(g, h); )
    p.push(g), g = i(g, 1);
  return o && p.reverse(), p.map((m) => {
    const x = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: x,
      disabled: !1
    };
  });
}
function Tb(e, t, n, r) {
  let o = (r ?? new Vt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const LA = Tb;
function jb(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const FA = jb;
function VA(e, t, n, r) {
  let o = (r ?? new Vt(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function zA(e) {
  return "Choose the Month";
}
function BA() {
  return "";
}
function HA(e) {
  return "Go to the Next Month";
}
function GA(e) {
  return "Go to the Previous Month";
}
function YA(e, t, n) {
  return (n ?? new Vt(t)).format(e, "cccc");
}
function KA(e, t) {
  return `Week ${e}`;
}
function UA(e) {
  return "Week Number";
}
function qA(e) {
  return "Choose the Year";
}
const XA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: FA,
  labelDay: LA,
  labelDayButton: Tb,
  labelGrid: jb,
  labelGridcell: VA,
  labelMonthDropdown: zA,
  labelNav: BA,
  labelNext: HA,
  labelPrevious: GA,
  labelWeekNumber: KA,
  labelWeekNumberHeader: UA,
  labelWeekday: YA,
  labelYearDropdown: qA
}, Symbol.toStringTag, { value: "Module" })), ha = (e) => e instanceof HTMLElement ? e : null, sl = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], ZA = (e) => ha(e.querySelector("[data-animated-month]")), al = (e) => ha(e.querySelector("[data-animated-caption]")), il = (e) => ha(e.querySelector("[data-animated-weeks]")), QA = (e) => ha(e.querySelector("[data-animated-nav]")), JA = (e) => ha(e.querySelector("[data-animated-weekdays]"));
function eR(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = pt(null), i = pt(r), c = pt(!1);
  Vd(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), d = s.isAfter(r[0].date, l[0].date), h = d ? n[jt.caption_after_enter] : n[jt.caption_before_enter], p = d ? n[jt.weeks_after_enter] : n[jt.weeks_before_enter], g = a.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (sl(m).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const S = ZA(y);
      S && y.contains(S) && y.removeChild(S);
      const w = al(y);
      w && w.classList.remove(h);
      const M = il(y);
      M && M.classList.remove(p);
    }), a.current = m) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const x = g instanceof HTMLElement ? sl(g) : [], C = sl(e.current);
    if (C != null && C.every((b) => b instanceof HTMLElement) && x && x.every((b) => b instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const b = QA(e.current);
      b && (b.style.zIndex = "1"), C.forEach((y, S) => {
        const w = x[S];
        if (!w)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const M = al(y);
        M && M.classList.add(h);
        const k = il(y);
        k && k.classList.add(p);
        const E = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(h), k && k.classList.remove(p), y.style.position = "", y.style.overflow = "", y.contains(w) && y.removeChild(w);
        };
        w.style.pointerEvents = "none", w.style.position = "absolute", w.style.overflow = "hidden", w.setAttribute("aria-hidden", "true");
        const A = JA(w);
        A && (A.style.opacity = "0");
        const O = al(w);
        O && (O.classList.add(d ? n[jt.caption_before_exit] : n[jt.caption_after_exit]), O.addEventListener("animationend", E));
        const j = il(w);
        j && j.classList.add(d ? n[jt.weeks_before_exit] : n[jt.weeks_after_exit]), y.insertBefore(w, y.firstChild);
      });
    }
  });
}
function tR(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: d, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: g, endOfWeek: m, isAfter: x, startOfBroadcastWeek: C, startOfISOWeek: b, startOfWeek: y } = r, S = c ? C(o, r) : a ? b(o) : y(o), w = c ? h(s) : a ? p(g(s)) : m(g(s)), M = f(w, S), k = d(s, o) + 1, E = [];
  for (let j = 0; j <= M; j++) {
    const $ = l(S, j);
    if (t && x($, t))
      break;
    E.push($);
  }
  const O = (c ? 35 : 42) * k;
  if (i && E.length < O) {
    const j = O - E.length;
    for (let $ = 0; $ < j; $++) {
      const V = l(E[E.length - 1], 1);
      E.push(V);
    }
  }
  return E;
}
function nR(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function rR(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function Zh(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: d } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), d(c);
}
function oR(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: d, startOfISOWeek: h, startOfWeek: p } = r, g = e.reduce((m, x) => {
    const C = n.broadcastCalendar ? d(x, r) : n.ISOWeek ? h(x) : p(x), b = n.broadcastCalendar ? s(x) : n.ISOWeek ? a(i(x)) : c(i(x)), y = t.filter((k) => k >= C && k <= b), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < S) {
      const k = t.filter((E) => {
        const A = S - y.length;
        return E > b && E <= o(b, A);
      });
      y.push(...k);
    }
    const w = y.reduce((k, E) => {
      const A = n.ISOWeek ? l(E) : f(E), O = k.find(($) => $.weekNumber === A), j = new kb(E, x, r);
      return O ? O.days.push(j) : k.push(new U4(A, [j])), k;
    }, []), M = new K4(x, w);
    return m.push(M), m;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function sR(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: d } = t, { fromYear: h, toYear: p, fromMonth: g, toMonth: m } = e;
  !n && g && (n = g), !n && h && (n = t.newDate(h, 0, 1)), !r && m && (r = m), !r && p && (r = f(p, 11, 31));
  const x = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && x && (n = o(c(e.today ?? d(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && x && (r = l(e.today ?? d())), [
    n && s(n),
    r && s(r)
  ];
}
function aR(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s : 1, f = a(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < s))
    return i(f, l);
}
function iR(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -l);
  if (!(c(f, t) <= 0))
    return i(f, -l);
}
function cR(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Sc(e, t) {
  const [n, r] = at(e);
  return [t === void 0 ? n : t, r];
}
function lR(e, t) {
  const [n, r] = sR(e, t), { startOfMonth: o, endOfMonth: s } = t, a = Zh(e, n, r, t), [i, c] = Sc(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  wn(() => {
    const M = Zh(e, n, r, t);
    c(M);
  }, [e.timeZone]);
  const l = rR(i, r, e, t), f = tR(l, e.endMonth ? s(e.endMonth) : void 0, e, t), d = oR(l, f, e, t), h = cR(d), p = nR(d), g = iR(i, n, e, t), m = aR(i, r, e, t), { disableNavigation: x, onMonthChange: C } = e, b = (M) => h.some((k) => k.days.some((E) => E.isEqualTo(M))), y = (M) => {
    if (x)
      return;
    let k = o(M);
    n && k < o(n) && (k = o(n)), r && k > o(r) && (k = o(r)), c(k), C == null || C(k);
  };
  return {
    months: d,
    weeks: h,
    days: p,
    navStart: n,
    navEnd: r,
    previousMonth: g,
    nextMonth: m,
    goToMonth: y,
    goToDay: (M) => {
      b(M) || y(M.date);
    }
  };
}
var hn;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(hn || (hn = {}));
function Qh(e) {
  return !e[Fe.disabled] && !e[Fe.hidden] && !e[Fe.outside];
}
function dR(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    Qh(i) && (i[Fe.focused] && s < hn.FocusedModifier ? (o = a, s = hn.FocusedModifier) : r != null && r.isEqualTo(a) && s < hn.LastFocused ? (o = a, s = hn.LastFocused) : n(a.date) && s < hn.Selected ? (o = a, s = hn.Selected) : i[Fe.today] && s < hn.Today && (o = a, s = hn.Today));
  }
  return o || (o = e.find((a) => Qh(t(a)))), o;
}
function uR(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: d, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: g, endOfWeek: m, max: x, min: C, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: S } = a;
  let M = {
    day: l,
    week: d,
    month: f,
    year: h,
    startOfWeek: (k) => c ? b(k, a) : i ? y(k) : S(k),
    endOfWeek: (k) => c ? p(k) : i ? g(k) : m(k)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? M = x([r, M]) : t === "after" && o && (M = C([o, M])), M;
}
function $b(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = uR(e, t, n.date, r, o, s, a), l = !!(s.disabled && Wn(c, s.disabled, a)), f = !!(s.hidden && Wn(c, s.hidden, a)), d = c, h = new kb(c, d, a);
  return !l && !f ? h : $b(e, t, h, r, o, s, a, i + 1);
}
function fR(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = at(), c = dR(t.days, n, r || (() => !1), a), [l, f] = at(s ? c : void 0);
  return {
    isFocusTarget: (m) => !!(c != null && c.isEqualTo(m)),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (m, x) => {
      if (!l)
        return;
      const C = $b(m, x, l, t.navStart, t.navEnd, e, o);
      C && (t.goToDay(C), f(C));
    }
  };
}
function hR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Sc(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((g) => c(g, p))) ?? !1, { min: f, max: d } = e;
  return {
    selected: i,
    select: (p, g, m) => {
      let x = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        x = i == null ? void 0 : i.filter((C) => !c(C, p));
      } else
        (i == null ? void 0 : i.length) === d ? x = [p] : x = [...x, p];
      return o || a(x), o == null || o(x, p, g, m), x;
    },
    isSelected: l
  };
}
function pR(e, t, n = 0, r = 0, o = !1, s = Nn) {
  const { from: a, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: f } = s;
  let d;
  if (!a && !i)
    d = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !i)
    c(a, e) ? n === 0 ? d = { from: a, to: e } : o ? d = { from: a, to: void 0 } : d = void 0 : f(e, a) ? d = { from: e, to: a } : d = { from: a, to: e };
  else if (a && i)
    if (c(a, e) && c(i, e))
      o ? d = { from: a, to: i } : d = void 0;
    else if (c(a, e))
      d = { from: a, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      d = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, a))
      d = { from: e, to: i };
    else if (l(e, a))
      d = { from: a, to: e };
    else if (l(e, i))
      d = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (d != null && d.from && (d != null && d.to)) {
    const h = s.differenceInCalendarDays(d.to, d.from);
    r > 0 && h > r ? d = { from: e, to: void 0 } : n > 1 && h < n && (d = { from: e, to: void 0 });
  }
  return d;
}
function mR(e, t, n = Nn) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), a = Math.min(s, 6);
  for (let i = 0; i <= a; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Jh(e, t, n = Nn) {
  return $n(e, t.from, !1, n) || $n(e, t.to, !1, n) || $n(t, e.from, !1, n) || $n(t, e.to, !1, n);
}
function vR(e, t, n = Nn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? $n(e, i, !1, n) : Rb(i, n) ? i.some((c) => $n(e, c, !1, n)) : $u(i) ? i.from && i.to ? Jh(e, { from: i.from, to: i.to }, n) : !1 : Ab(i) ? mR(e, i.dayOfWeek, n) : Mb(i) ? n.isAfter(i.before, i.after) ? Jh(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Wn(e.from, i, n) || Wn(e.to, i, n) : Pb(i) || Nb(i) ? Wn(e.from, i, n) || Wn(e.to, i, n) : !1))
    return !0;
  const a = r.filter((i) => typeof i == "function");
  if (a.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (a.some((f) => f(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function gR(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Sc(o, a ? o : void 0), l = a ? o : i;
  return {
    selected: l,
    select: (h, p, g) => {
      const { min: m, max: x } = e, C = h ? pR(h, l, m, x, s, t) : void 0;
      return r && n && (C != null && C.from) && C.to && vR({ from: C.from, to: C.to }, n, t) && (C.from = h, C.to = void 0), a || c(C), a == null || a(C, h, p, g), C;
    },
    isSelected: (h) => l && $n(l, h, !1, t)
  };
}
function yR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Sc(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (d, h, p) => {
      let g = d;
      return !r && i && i && c(d, i) && (g = void 0), o || a(g), o == null || o(g, d, h, p), g;
    },
    isSelected: (d) => i ? c(i, d) : !1
  };
}
function bR(e, t) {
  const n = yR(e, t), r = hR(e, t), o = gR(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function xR(e) {
  var Q;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new xt(t.today, t.timeZone)), t.month && (t.month = new xt(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new xt(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new xt(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new xt(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new xt(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Q = t.selected) == null ? void 0 : Q.map((G) => new xt(G, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new xt(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new xt(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: s, locale: a, classNames: i } = ho(() => {
    const G = { ...Cc, ...t.locale };
    return {
      dateLib: new Vt({
        locale: G,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: _A(t.components),
      formatters: IA(t.formatters),
      labels: { ...XA, ...t.labels },
      locale: G,
      classNames: { ...Ob(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]), { captionLayout: c, mode: l, navLayout: f, numberOfMonths: d = 1, onDayBlur: h, onDayClick: p, onDayFocus: g, onDayKeyDown: m, onDayMouseEnter: x, onDayMouseLeave: C, onNextClick: b, onPrevClick: y, showWeekNumber: S, styles: w } = t, { formatCaption: M, formatDay: k, formatMonthDropdown: E, formatWeekNumber: A, formatWeekNumberHeader: O, formatWeekdayName: j, formatYearDropdown: $ } = r, V = lR(t, s), { days: D, months: B, navStart: F, navEnd: X, previousMonth: T, nextMonth: W, goToMonth: oe } = V, N = CA(D, t, F, X, s), { isSelected: P, select: L, selected: z } = bR(t, s) ?? {}, { blur: Z, focused: U, isFocusTarget: I, moveFocus: J, setFocused: re } = fR(t, V, N, P ?? (() => !1), s), { labelDayButton: de, labelGridcell: me, labelGrid: ge, labelMonthDropdown: Se, labelNav: Ie, labelPrevious: je, labelNext: dt, labelWeekday: Xe, labelWeekNumber: rt, labelWeekNumberHeader: vt, labelYearDropdown: We } = o, Ge = ho(() => $A(s, t.ISOWeek), [s, t.ISOWeek]), Qe = l !== void 0 || p !== void 0, Dt = ke(() => {
    T && (oe(T), y == null || y(T));
  }, [T, oe, y]), Pt = ke(() => {
    W && (oe(W), b == null || b(W));
  }, [oe, W, b]), ve = ke((G, ce) => (K) => {
    K.preventDefault(), K.stopPropagation(), re(G), L == null || L(G.date, ce, K), p == null || p(G.date, ce, K);
  }, [L, p, re]), Xt = ke((G, ce) => (K) => {
    re(G), g == null || g(G.date, ce, K);
  }, [g, re]), It = ke((G, ce) => (K) => {
    Z(), h == null || h(G.date, ce, K);
  }, [Z, h]), un = ke((G, ce) => (K) => {
    const ie = {
      ArrowLeft: [
        K.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        K.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [K.shiftKey ? "year" : "week", "after"],
      ArrowUp: [K.shiftKey ? "year" : "week", "before"],
      PageUp: [K.shiftKey ? "year" : "month", "before"],
      PageDown: [K.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ie[K.key]) {
      K.preventDefault(), K.stopPropagation();
      const [he, le] = ie[K.key];
      J(he, le);
    }
    m == null || m(G.date, ce, K);
  }, [J, m, t.dir]), fn = ke((G, ce) => (K) => {
    x == null || x(G.date, ce, K);
  }, [x]), Rn = ke((G, ce) => (K) => {
    C == null || C(G.date, ce, K);
  }, [C]), Zt = ke((G) => (ce) => {
    const K = Number(ce.target.value), ie = s.setMonth(s.startOfMonth(G), K);
    oe(ie);
  }, [s, oe]), Qt = ke((G) => (ce) => {
    const K = Number(ce.target.value), ie = s.setYear(s.startOfMonth(G), K);
    oe(ie);
  }, [s, oe]), { className: On, style: Nt } = ho(() => ({
    className: [i[fe.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[fe.Root], ...t.style }
  }), [i, t.className, t.style, w]), ot = kA(t), H = pt(null);
  eR(H, !!t.animate, {
    classNames: i,
    months: B,
    focused: U,
    dateLib: s
  });
  const ee = {
    dayPickerProps: t,
    selected: z,
    select: L,
    isSelected: P,
    months: B,
    nextMonth: W,
    previousMonth: T,
    goToMonth: oe,
    getModifiers: N,
    components: n,
    classNames: i,
    styles: w,
    labels: o,
    formatters: r
  };
  return _.createElement(
    Eb.Provider,
    { value: ee },
    _.createElement(
      n.Root,
      { rootRef: t.animate ? H : void 0, className: On, style: Nt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...ot },
      _.createElement(
        n.Months,
        { className: i[fe.Months], style: w == null ? void 0 : w[fe.Months] },
        !t.hideNavigation && !f && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Pt, previousMonth: T, nextMonth: W }),
        B.map((G, ce) => _.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[fe.Month],
            style: w == null ? void 0 : w[fe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ce,
            displayIndex: ce,
            calendarMonth: G
          },
          f === "around" && !t.hideNavigation && ce === 0 && _.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[fe.PreviousMonthButton], tabIndex: T ? void 0 : -1, "aria-disabled": T ? void 0 : !0, "aria-label": je(T), onClick: Dt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: T ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          _.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[fe.MonthCaption], style: w == null ? void 0 : w[fe.MonthCaption], calendarMonth: G, displayIndex: ce }, c != null && c.startsWith("dropdown") ? _.createElement(
            n.DropdownNav,
            { className: i[fe.Dropdowns], style: w == null ? void 0 : w[fe.Dropdowns] },
            (() => {
              const K = c === "dropdown" || c === "dropdown-months" ? _.createElement(n.MonthsDropdown, { key: "month", className: i[fe.MonthsDropdown], "aria-label": Se(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Zt(G.date), options: TA(G.date, F, X, r, s), style: w == null ? void 0 : w[fe.Dropdown], value: s.getMonth(G.date) }) : _.createElement("span", { key: "month" }, E(G.date, s)), ie = c === "dropdown" || c === "dropdown-years" ? _.createElement(n.YearsDropdown, { key: "year", className: i[fe.YearsDropdown], "aria-label": We(s.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Qt(G.date), options: WA(F, X, r, s, !!t.reverseYears), style: w == null ? void 0 : w[fe.Dropdown], value: s.getYear(G.date) }) : _.createElement("span", { key: "year" }, $(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [ie, K] : [K, ie];
            })(),
            _.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, M(G.date, s.options, s))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            _.createElement(n.CaptionLabel, { className: i[fe.CaptionLabel], role: "status", "aria-live": "polite" }, M(G.date, s.options, s))
          )),
          f === "around" && !t.hideNavigation && ce === d - 1 && _.createElement(
            n.NextMonthButton,
            { type: "button", className: i[fe.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": dt(W), onClick: Pt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === d - 1 && f === "after" && !t.hideNavigation && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Pt, previousMonth: T, nextMonth: W }),
          _.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": ge(G.date, s.options, s) || void 0, className: i[fe.MonthGrid], style: w == null ? void 0 : w[fe.MonthGrid] },
            !t.hideWeekdays && _.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[fe.Weekdays], style: w == null ? void 0 : w[fe.Weekdays] },
              S && _.createElement(n.WeekNumberHeader, { "aria-label": vt(s.options), className: i[fe.WeekNumberHeader], style: w == null ? void 0 : w[fe.WeekNumberHeader], scope: "col" }, O()),
              Ge.map((K) => _.createElement(n.Weekday, { "aria-label": Xe(K, s.options, s), className: i[fe.Weekday], key: String(K), style: w == null ? void 0 : w[fe.Weekday], scope: "col" }, j(K, s.options, s)))
            ),
            _.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[fe.Weeks], style: w == null ? void 0 : w[fe.Weeks] }, G.weeks.map((K) => _.createElement(
              n.Week,
              { className: i[fe.Week], key: K.weekNumber, style: w == null ? void 0 : w[fe.Week], week: K },
              S && // biome-ignore lint/a11y/useSemanticElements: react component
              _.createElement(n.WeekNumber, { week: K, style: w == null ? void 0 : w[fe.WeekNumber], "aria-label": rt(K.weekNumber, {
                locale: a
              }), className: i[fe.WeekNumber], scope: "row", role: "rowheader" }, A(K.weekNumber, s)),
              K.days.map((ie) => {
                const { date: he } = ie, le = N(ie);
                if (le[Fe.focused] = !le.hidden && !!(U != null && U.isEqualTo(ie)), le[nn.selected] = (P == null ? void 0 : P(he)) || le.selected, $u(z)) {
                  const { from: ut, to: Ye } = z;
                  le[nn.range_start] = !!(ut && Ye && s.isSameDay(he, ut)), le[nn.range_end] = !!(ut && Ye && s.isSameDay(he, Ye)), le[nn.range_middle] = $n(z, he, !0, s);
                }
                const Ve = jA(le, w, t.modifiersStyles), Tt = SA(le, i, t.modifiersClassNames), Jt = !Qe && !le.hidden ? me(he, le, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  _.createElement(n.Day, { key: `${s.format(he, "yyyy-MM-dd")}_${s.format(ie.displayMonth, "yyyy-MM")}`, day: ie, modifiers: le, className: Tt.join(" "), style: Ve, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": Jt, "data-day": s.format(he, "yyyy-MM-dd"), "data-month": ie.outside ? s.format(he, "yyyy-MM") : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": ie.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && Qe ? _.createElement(n.DayButton, { className: i[fe.DayButton], style: w == null ? void 0 : w[fe.DayButton], type: "button", day: ie, modifiers: le, disabled: le.disabled || void 0, tabIndex: I(ie) ? 0 : -1, "aria-label": de(he, le, s.options, s), onClick: ve(ie, le), onBlur: It(ie, le), onFocus: Xt(ie, le), onKeyDown: un(ie, le), onMouseEnter: fn(ie, le), onMouseLeave: Rn(ie, le) }, k(he, s.options, s)) : !le.hidden && k(ie.date, s.options, s))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      _.createElement(n.Footer, { className: i[fe.Footer], style: w == null ? void 0 : w[fe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const wR = {
  lessThanXSeconds: {
    one: "1秒未満",
    other: "{{count}}秒未満",
    oneWithSuffix: "約1秒",
    otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
    one: "1秒",
    other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
    one: "1分未満",
    other: "{{count}}分未満",
    oneWithSuffix: "約1分",
    otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
    one: "1分",
    other: "{{count}}分"
  },
  aboutXHours: {
    one: "約1時間",
    other: "約{{count}}時間"
  },
  xHours: {
    one: "1時間",
    other: "{{count}}時間"
  },
  xDays: {
    one: "1日",
    other: "{{count}}日"
  },
  aboutXWeeks: {
    one: "約1週間",
    other: "約{{count}}週間"
  },
  xWeeks: {
    one: "1週間",
    other: "{{count}}週間"
  },
  aboutXMonths: {
    one: "約1か月",
    other: "約{{count}}か月"
  },
  xMonths: {
    one: "1か月",
    other: "{{count}}か月"
  },
  aboutXYears: {
    one: "約1年",
    other: "約{{count}}年"
  },
  xYears: {
    one: "1年",
    other: "{{count}}年"
  },
  overXYears: {
    one: "1年以上",
    other: "{{count}}年以上"
  },
  almostXYears: {
    one: "1年近く",
    other: "{{count}}年近く"
  }
}, CR = (e, t, n) => {
  n = n || {};
  let r;
  const o = wR[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, SR = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, _R = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, kR = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, ER = {
  date: vo({
    formats: SR,
    defaultWidth: "full"
  }),
  time: vo({
    formats: _R,
    defaultWidth: "full"
  }),
  dateTime: vo({
    formats: kR,
    defaultWidth: "full"
  })
}, MR = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, PR = (e, t, n, r) => MR[e], NR = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, AR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, RR = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ]
}, OR = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, DR = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, IR = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, TR = (e, t) => {
  const n = Number(e);
  switch (String(t == null ? void 0 : t.unit)) {
    case "year":
      return `${n}年`;
    case "quarter":
      return `第${n}四半期`;
    case "month":
      return `${n}月`;
    case "week":
      return `第${n}週`;
    case "date":
      return `${n}日`;
    case "hour":
      return `${n}時`;
    case "minute":
      return `${n}分`;
    case "second":
      return `${n}秒`;
    default:
      return `${n}`;
  }
}, jR = {
  ordinalNumber: TR,
  era: gn({
    values: NR,
    defaultWidth: "wide"
  }),
  quarter: gn({
    values: AR,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: gn({
    values: RR,
    defaultWidth: "wide"
  }),
  day: gn({
    values: OR,
    defaultWidth: "wide"
  }),
  dayPeriod: gn({
    values: DR,
    defaultWidth: "wide",
    formattingValues: IR,
    defaultFormattingWidth: "wide"
  })
}, $R = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, WR = /\d+/i, LR = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, FR = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, VR = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, zR = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, BR = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, HR = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, GR = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, YR = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, KR = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, UR = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
}, qR = {
  ordinalNumber: bb({
    matchPattern: $R,
    parsePattern: WR,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: yn({
    matchPatterns: LR,
    defaultMatchWidth: "wide",
    parsePatterns: FR,
    defaultParseWidth: "any"
  }),
  quarter: yn({
    matchPatterns: VR,
    defaultMatchWidth: "wide",
    parsePatterns: zR,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yn({
    matchPatterns: BR,
    defaultMatchWidth: "wide",
    parsePatterns: HR,
    defaultParseWidth: "any"
  }),
  day: yn({
    matchPatterns: GR,
    defaultMatchWidth: "wide",
    parsePatterns: YR,
    defaultParseWidth: "any"
  }),
  dayPeriod: yn({
    matchPatterns: KR,
    defaultMatchWidth: "any",
    parsePatterns: UR,
    defaultParseWidth: "any"
  })
}, XR = {
  code: "ja",
  formatDistance: CR,
  formatLong: ER,
  formatRelative: PR,
  localize: jR,
  match: qR,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ZR = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, za = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Wb = _.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: s = !1,
    className: a,
    showOutsideDays: i = !0,
    fixedWeeks: c = !0,
    defaultMonth: l,
    inline: f = !1,
    locale: d = "ja",
    ...h
  }, p) => {
    const [g, m] = _.useState(
      () => za(n || null)
    ), x = e !== void 0, C = x ? za(e) : g, b = _.useMemo(
      () => za(r || null),
      [r]
    ), y = _.useMemo(
      () => za(o || null),
      [o]
    ), S = _.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), w = _.useMemo(() => {
      if (y) return y;
      const k = /* @__PURE__ */ new Date();
      return new Date(k.getFullYear() + 10, 11, 31);
    }, [y]), M = (k) => {
      const E = k || null;
      x || m(E), t == null || t(E);
    };
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: p,
        className: R(ZR(f), a),
        ...h,
        children: /* @__PURE__ */ u.jsx(
          xR,
          {
            animate: !1,
            mode: "single",
            selected: C || void 0,
            onSelect: M,
            locale: d === "ja" ? XR : Cc,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (k) => `${k.getFullYear()}${d === "ja" ? "年" : ""}`
            },
            disabled: S ? [
              ...b ? [{ before: b }] : [],
              ...y ? [{ after: y }] : [],
              ...s ? [{ before: /* @__PURE__ */ new Date("3000-01-01") }] : []
            ] : [
              {
                before: /* @__PURE__ */ new Date("1900-01-01"),
                after: /* @__PURE__ */ new Date("1899-12-31")
              }
            ],
            ...b ? { startMonth: b } : {},
            endMonth: w,
            showOutsideDays: i,
            fixedWeeks: c,
            defaultMonth: l || C || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const k = Ob(), E = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${k.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
                // Month wrapper - CSS Grid with 2 columns for header row
                month: "grid grid-cols-[1fr_auto] auto-rows-auto",
                // Header elements - dropdowns on left (col 1, row 1)
                month_caption: "col-start-1 row-start-1 px-xxs mb-md flex items-center",
                caption_label: "hidden",
                dropdowns: "flex gap-xxs items-center",
                dropdown: "border border-shape-interactive-neutral-default rounded-xs px-xs pr-xxs py-xxs gap-xxxs flex items-center text-lg font-bold text-body-primary cursor-pointer hover:border-shape-interactive-neutral-hover focus:outline-none focus:ring-2 focus:ring-interactive-focused transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                dropdown_root: "relative",
                // Navigation - on right (col 2, row 1)
                nav: "col-start-2 row-start-1 flex gap-xxs items-center px-xxs mb-md",
                // Calendar grid below (spans both columns, row 2)
                month_grid: "col-span-2 row-start-2",
                weekdays: "mb-xs",
                weekday: "text-body-secondary text-[0.8125rem] font-normal leading-5 tracking-normal text-center",
                button_previous: `${E} flex items-center justify-center`,
                button_next: `${E} flex items-center justify-center`,
                chevron: "fill-current text-interactive-primary-default w-5 h-5",
                // Day states
                day: "rounded-md transition-colors text-body-primary text-md !w-9 !h-9",
                day_button: "!w-full !h-full border border-transparent rounded-sm active:text-interactive-primary-active hover:bg-interactive-neutral-hover  cursor-pointer",
                today: "text-interactive-primary-active border-surface-warning [&>button]:!border-interactive-default",
                selected: "[&>button]:!bg-input-selected [&>button]:!text-body-inverse [&>button]:!font-bold hover:[&>button]:!bg-input-selected hover:[&>button]:!border-transparent hover:[&>button]:!text-body-inverse",
                outside: "text-body-secondary text-md border border-transparent",
                disabled: "text-body-disabled text-md leading-none tracking-normal cursor-not-allowed"
              };
            })()
          }
        )
      }
    );
  }
);
Wb.displayName = "Calendar";
const ep = pe(
  `font-normal inline-flex items-baseline justify-center border
  border-transparent decoration-solid decoration-from-font
  underline-offset-[0.1875rem] transition-colors duration-75`,
  {
    variants: {
      intent: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active
        [:not(:hover):not(:active)]:underline`,
        secondary: "text-body-primary [:not(:hover):not(:active)]:underline",
        tertiary: `text-body-secondary [&_svg]:text-shape-primary
        hover:underline active:underline`,
        inverse: `text-shape-interactive-inverse
        [&_svg]:text-shape-interactive-inverse not-[:hover]:underline`
      },
      size: {
        lg: "gap-xxs text-lg",
        md: "gap-xxxs text-md",
        sm: "gap-xxxs text-sm",
        xs: "gap-xxxs text-xs",
        inherit: "gap-xxxs"
      },
      disabled: {
        true: `text-body-disabled [&_svg]:text-shape-interactive-disabled
        pointer-events-none`
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "inherit"
    }
  }
), QR = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Vs = _.forwardRef(
  ({
    className: e,
    intent: t = "primary",
    size: n = "inherit",
    asChild: r = !1,
    disabled: o,
    leadingIcon: s,
    trailingIcon: a,
    children: i,
    ...c
  }, l) => {
    const f = r ? Ro : "a", h = QR[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ u.jsx(
      f,
      {
        ref: l,
        className: R(
          ep({ intent: t, size: n, disabled: o }),
          e
        ),
        ...c,
        children: i
      }
    ) : /* @__PURE__ */ u.jsxs(
      f,
      {
        ref: l,
        className: R(ep({ intent: t, size: n, disabled: o }), e),
        ...c,
        children: [
          s && /* @__PURE__ */ u.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: it(s, { size: h }) }),
          i,
          a && /* @__PURE__ */ u.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: it(a, { size: h }) })
        ]
      }
    );
  }
);
Vs.displayName = "TextLink";
const JR = pe(
  "rounded-sm gap-xxs py-sm px-md flex items-start overflow-hidden border",
  {
    variants: {
      intent: {
        info: "bg-surface-inprogress border-surface-info",
        success: "bg-surface-success border-surface-success",
        warning: "bg-surface-warning border-surface-warning",
        alert: "bg-surface-alert border-surface-alert",
        paid: "bg-surface-primary border-surface-success"
      }
    },
    defaultVariants: {
      intent: "info"
    }
  }
), eO = pe("size-5 shrink-0", {
  variants: {
    intent: {
      info: "text-shape-status-info",
      success: "text-shape-status-success",
      warning: "text-shape-status-warning",
      alert: "text-shape-status-alert",
      paid: "text-shape-status-success"
    }
  },
  defaultVariants: {
    intent: "info"
  }
}), tO = pe("font-bold text-md", {
  variants: {
    intent: {
      info: "text-body-primary",
      success: "text-body-primary",
      warning: "text-body-primary",
      alert: "text-body-primary",
      paid: "text-body-success"
    }
  },
  defaultVariants: {
    intent: "info"
  }
}), nO = pe(
  "text-body-primary font-normal leading-6 text-md"
), rO = pe("min-w-0 gap-xxxs flex flex-1 flex-col"), oO = {
  info: ei,
  success: Xp,
  warning: ei,
  alert: ei,
  paid: S2
}, sO = _.forwardRef(
  ({
    className: e,
    intent: t = "info",
    title: n,
    description: r,
    children: o,
    action: s,
    icon: a,
    ...i
  }, c) => {
    const l = a || oO[t];
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: c,
        className: R(JR({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ u.jsxs("div", { className: R(rO()), children: [
          n && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: R(eO({ intent: t }), "top-0.5 relative"),
                  children: it(l, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: R(tO({ intent: t })), children: n })
            ] }),
            s && (s.href ? /* @__PURE__ */ u.jsx(
              Vs,
              {
                href: s.href,
                target: s.target,
                rel: s.rel,
                intent: "primary",
                size: "sm",
                children: s.label
              }
            ) : /* @__PURE__ */ u.jsx(
              Vs,
              {
                onClick: s.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ u.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ u.jsx("div", { className: R(nO()), children: o || r })
        ] })
      }
    );
  }
);
sO.displayName = "Callout";
const aO = pe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), iO = pe(
  `border-interactive-default text-body-primary
  focus-visible:ring-interactive-focused rounded-xs size-[1.125rem]
  cursor-[inherit] border-[1.5px] outline-none focus-visible:ring-4
  data-[state=checked]:hover:border-transparent
  data-[state=indeterminate]:hover:border-transparent`,
  {
    variants: {
      disabled: {
        true: "bg-interactive-disabled border-transparent",
        false: "bg-shape-interactive-inverse"
      },
      invalid: { true: "" }
    },
    compoundVariants: [
      {
        disabled: !1,
        invalid: !0,
        class: `border-interactive-alert-default text-body-alert
        data-[state=checked]:bg-status-alert
        data-[state=indeterminate]:bg-status-alert
        focus-visible:ring-interactive-alert-focused
        data-[state=checked]:hover:bg-interactive-alert-hover
        data-[state=indeterminate]:hover:bg-interactive-alert-hover`
      },
      {
        disabled: !1,
        invalid: !1,
        class: `hover:enabled:border-interactive-hover
        focus-visible:border-interactive-default
        data-[state=checked]:bg-input-selected
        data-[state=checked]:border-interactive-selected
        data-[state=checked]:hover:bg-interactive-primary-hover
        data-[state=indeterminate]:hover:bg-interactive-primary-hover
        data-[state=indeterminate]:border-interactive-selected
        data-[state=indeterminate]:bg-input-selected`
      }
    ],
    defaultVariants: {
      disabled: !1,
      invalid: !1
    }
  }
), go = ({
  disabled: e,
  invalid: t,
  indeterminate: n,
  label: r,
  id: o,
  children: s,
  className: a,
  ...i
}) => {
  const c = o || `checkbox-${r}`;
  return /* @__PURE__ */ u.jsxs("div", { className: R(aO({ disabled: e }), a), children: [
    /* @__PURE__ */ u.jsx(
      Gm,
      {
        id: c,
        className: R(iO({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ u.jsx(
          Km,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ u.jsx(a2, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ u.jsx(Gp, { style: { strokeWidth: 3 } })
          }
        )
      }
    ),
    (r || s) && /* @__PURE__ */ u.jsxs(
      "label",
      {
        htmlFor: c,
        className: `gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,
        children: [
          r,
          s
        ]
      }
    )
  ] });
};
go.displayName = "Checkbox";
const cO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ u.jsx("div", { className: R("gap-xs flex flex-col", t), children: e });
cO.displayName = "CheckboxGroup";
const lO = pe(
  `px-sm py-xxs text-md h-8 focus-visible:ring-interactive-focused inline-flex
  cursor-pointer items-center justify-center rounded-full border
  transition-colors select-none focus-visible:ring-4 focus-visible:outline-none`,
  {
    variants: {
      selected: {
        true: `border-interactive-selected bg-interactive-neutral-selected
        text-body-primary`,
        false: `border-interactive-default bg-surface-primary
        text-body-secondary hover:border-interactive-hover
        hover:bg-interactive-neutral-hover`
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: ""
      }
    },
    compoundVariants: [
      {
        selected: !0,
        disabled: !0,
        class: "hover:bg-interactive-neutral-selected"
      },
      {
        selected: !1,
        disabled: !0,
        class: "hover:border-interactive-default hover:bg-surface-primary"
      }
    ],
    defaultVariants: {
      selected: !1,
      disabled: !1
    }
  }
), dO = _.forwardRef(
  ({
    selected: e = !1,
    disabled: t = !1,
    className: n,
    children: r,
    onClick: o,
    ...s
  }, a) => {
    const i = (c) => {
      t || o == null || o(c);
    };
    return /* @__PURE__ */ u.jsx(
      "button",
      {
        ref: a,
        type: "button",
        role: "option",
        "aria-selected": e,
        "aria-disabled": t,
        disabled: t,
        className: R(lO({ selected: e, disabled: t }), n),
        onClick: i,
        ...s,
        children: r
      }
    );
  }
);
dO.displayName = "ChoiceChip";
const uO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ u.jsx("div", { role: "listbox", className: R("gap-xs flex flex-wrap", t), children: e });
uO.displayName = "ChoiceChipGroup";
const fO = pe(
  `px-sm py-xs rounded-sm text-sm font-normal max-w-110 z-tooltip w-full
  leading-[1.5] tracking-[0] break-all`,
  {
    variants: {
      intent: {
        normal: "text-body-inverse bg-surface-tooltip-neutral shadow-high",
        accent: "text-body-inverse bg-surface-tooltip-primary shadow-high"
      }
    },
    defaultVariants: {
      intent: "normal"
    }
  }
), Ij = kP, rn = _.forwardRef(
  ({
    children: e,
    content: t,
    intent: n,
    side: r = "top",
    sideOffset: o = 4,
    align: s = "center",
    alignOffset: a,
    delayDuration: i,
    disableHoverableContent: c,
    open: l,
    onOpenChange: f,
    className: d,
    ...h
  }, p) => t ? /* @__PURE__ */ u.jsxs(
    EP,
    {
      ...i !== void 0 && { delayDuration: i },
      ...l !== void 0 && { open: l },
      ...f !== void 0 && { onOpenChange: f },
      ...c !== void 0 && {
        disableHoverableContent: c
      },
      children: [
        /* @__PURE__ */ u.jsx(MP, { asChild: !0, children: e }),
        /* @__PURE__ */ u.jsx(PP, { children: /* @__PURE__ */ u.jsx(
          NP,
          {
            ref: p,
            side: r,
            sideOffset: o,
            align: s,
            ...a !== void 0 && { alignOffset: a },
            className: R(fO({ intent: n }), d),
            ...h,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ u.jsx(u.Fragment, { children: e })
);
rn.displayName = "Tooltip";
const hO = pe("space-y-md w-full", {
  variants: {
    variant: {
      default: "bg-inherit",
      bordered: `rounded-sm border-divider-default bg-surface-primary
      overflow-hidden border`
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Lb = _.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: o,
      className: R(hO({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
Lb.displayName = "DataSheet";
const pO = pe(
  "px-0 py-xs text-body-primary leading-[1.2]",
  {
    variants: {
      variant: {
        primary: "text-md font-bold",
        table: `text-sm font-bold bg-surface-tertiary px-xs py-xxs mb-xxs
        leading-tight`
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
), Fb = _.forwardRef(
  ({
    className: e,
    variant: t,
    children: n,
    isDeleted: r = !1,
    ariaLabels: o,
    tooltipMessages: s,
    onEdit: a,
    onRemove: i,
    onRestore: c,
    ...l
  }, f) => {
    const d = a || i || c;
    return /* @__PURE__ */ u.jsxs(
      "header",
      {
        ref: f,
        className: R(
          pO({ variant: t }),
          d && "flex items-center justify-between",
          e
        ),
        ...l,
        children: [
          /* @__PURE__ */ u.jsx("div", { className: R(r && "line-through opacity-60"), children: n }),
          d && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
            a && /* @__PURE__ */ u.jsx(
              rn,
              {
                content: r ? null : (s == null ? void 0 : s.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Kp,
                    disabled: r,
                    onClick: a,
                    className: R(
                      "text-shape-primary [&_svg]:!size-5",
                      r && "cursor-not-allowed!"
                    )
                  }
                )
              }
            ),
            i && !r && /* @__PURE__ */ u.jsx(
              rn,
              {
                content: (s == null ? void 0 : s.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: qp,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            c && r && /* @__PURE__ */ u.jsx(
              rn,
              {
                content: (s == null ? void 0 : s.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Up,
                    onClick: c,
                    className: "text-shape-primary [&_svg]:!size-5"
                  }
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
Fb.displayName = "DataSheetHeader";
const Vb = _.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
    "section",
    {
      ref: r,
      className: R("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
Vb.displayName = "DataSheetSection";
const mO = pe("py-sm", {
  variants: {
    orientation: {
      vertical: "gap-xxs flex flex-col",
      horizontal: "px-0 py-0 min-h-11 flex items-center"
    },
    spacing: {
      default: "",
      compact: "py-xxs min-h-0 border-none"
    }
  },
  defaultVariants: {
    orientation: "vertical",
    spacing: "default"
  }
}), vO = pe(
  "font-normal text-body-secondary text-sm",
  {
    variants: {
      orientation: {
        vertical: "leading-none",
        horizontal: "w-[7.5rem] shrink-0 leading-[1.5]"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
), gO = pe(
  "font-normal text-body-primary leading-[1.5]",
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "flex-1"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
), zb = _.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...s }, a) => {
  const i = _.useId(), c = _.Children.map(o, (l) => {
    if (!_.isValidElement(l)) return l;
    const d = l.props["aria-labelledby"];
    return _.cloneElement(
      l,
      {
        "aria-labelledby": d ? `${d} ${i}` : i
      }
    );
  });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: a,
      className: R(
        mO({ orientation: n, spacing: r }),
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ u.jsx(
          "div",
          {
            id: i,
            className: R(vO({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: R(gO({ orientation: n })), children: c })
      ]
    }
  );
});
zb.displayName = "DataSheetKeyValue";
const yO = {
  actionsColumnParts: 10
}, Bb = _.createContext(
  yO
), bO = () => _.useContext(Bb), Hb = _.createContext({}), Gb = () => _.useContext(
  Hb
);
function xO({
  className: e,
  children: t,
  onEditRow: n,
  onRemoveRow: r,
  onRestoreRow: o,
  actionsColumnParts: s = 10,
  ...a
}, i) {
  const c = {
    actionsColumnParts: s,
    ...n && { onEditRow: n },
    ...r && { onRemoveRow: r },
    ...o && { onRestoreRow: o }
  };
  return /* @__PURE__ */ u.jsx(
    Bb.Provider,
    {
      value: c,
      children: /* @__PURE__ */ u.jsx("div", { ref: i, className: R("overflow-x-auto", e), ...a, children: /* @__PURE__ */ u.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const Yb = _.forwardRef(xO);
Yb.displayName = "DataSheetTable";
const Kb = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("thead", { ref: r, className: R("", e), ...n, children: t }));
Kb.displayName = "DataSheetTableHeader";
const Ub = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("tbody", { ref: r, className: R("", e), ...n, children: t }));
Ub.displayName = "DataSheetTableBody";
function wO({
  className: e,
  header: t,
  item: n,
  isDeleted: r = !1,
  ariaLabels: o,
  tooltipMessages: s,
  children: a,
  ...i
}, c) {
  const l = _.useMemo(() => {
    let d = 0;
    return _.Children.forEach(a, (h) => {
      _.isValidElement(h) && typeof h.props.parts == "number" && (d += h.props.parts);
    }), d > 0 ? d : void 0;
  }, [a]), f = {
    ...n !== void 0 && { item: n },
    ...l !== void 0 && { totalParts: l },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...s && { tooltipMessages: s }
  };
  return /* @__PURE__ */ u.jsx(
    Hb.Provider,
    {
      value: f,
      children: /* @__PURE__ */ u.jsx(
        "tr",
        {
          ref: c,
          className: R(
            t ? "h-[1.125rem]" : "border-surface-default border-t",
            r && "opacity-60",
            e
          ),
          ...i,
          children: a
        }
      )
    }
  );
}
const qb = _.forwardRef(wO);
qb.displayName = "DataSheetTableRow";
const Mi = _.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...s }, a) => {
  const i = t ? "th" : "td", { totalParts: c, isDeleted: l } = Gb(), f = n !== void 0 && c !== void 0 ? { width: `${n / c * 100}%`, ...o } : o, d = typeof r == "string" ? r.trim() : String(r || ""), h = l && !t && d !== "" && d !== "-";
  return /* @__PURE__ */ u.jsx(
    i,
    {
      ref: a,
      className: R(
        "py-xs text-left align-top",
        "first:pl-0 last:pr-0 px-xs",
        t ? "text-body-secondary text-sm font-normal leading-[1.5]" : "text-body-primary font-normal leading-[1.5]",
        h && "line-through",
        e
      ),
      style: f,
      ...s,
      children: r
    }
  );
});
Mi.displayName = "DataSheetTableCell";
function CO({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, s) {
  const { onEditRow: a, onRemoveRow: i, onRestoreRow: c, actionsColumnParts: l } = bO(), {
    item: f,
    isDeleted: d,
    ariaLabels: h,
    tooltipMessages: p
  } = Gb(), g = n ?? f;
  return t ? /* @__PURE__ */ u.jsx(
    Mi,
    {
      ref: s,
      header: !0,
      parts: l,
      className: e,
      ...o,
      children: r
    }
  ) : a || i || c ? /* @__PURE__ */ u.jsx(
    Mi,
    {
      ref: s,
      parts: l,
      className: R("align-top", e),
      ...o,
      children: /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
        a && g && /* @__PURE__ */ u.jsx(
          rn,
          {
            content: d ? null : (p == null ? void 0 : p.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Kp,
                disabled: d,
                onClick: () => a(g),
                className: R(
                  "text-shape-primary [&_svg]:size-5!",
                  d && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && g && !d && /* @__PURE__ */ u.jsx(
          rn,
          {
            content: (p == null ? void 0 : p.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: qp,
                onClick: () => i(g),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        c && g && d && /* @__PURE__ */ u.jsx(
          rn,
          {
            content: (p == null ? void 0 : p.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Up,
                onClick: () => c(g),
                className: "text-shape-primary [&_svg]:!size-5"
              }
            )
          }
        )
      ] })
    }
  ) : null;
}
const Xb = _.forwardRef(
  CO
);
Xb.displayName = "DataSheetTableActionsCell";
const Zb = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(He, { ref: n, className: R("w-full", e), ...t }));
Zb.displayName = "DataSheetAction";
const Tj = Object.assign(Lb, {
  Header: Fb,
  Section: Vb,
  KeyValue: zb,
  Table: Yb,
  TableHeader: Kb,
  TableBody: Ub,
  TableRow: qb,
  TableCell: Mi,
  TableActionsCell: Xb,
  Action: Zb
}), SO = (e, t) => {
  const [n, r] = at(e);
  return wn(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, _c = () => {
  const e = pt(!1), t = ke(() => {
    e.current = !0;
  }, []), n = ke(() => {
    e.current = !1;
  }, []), r = ke(
    (o) => {
      if (o)
        return (s) => {
          const a = s.nativeEvent;
          e.current || a.isComposing === !0 || o(s);
        };
    },
    []
  );
  return {
    compositionHandlers: { onCompositionStart: t, onCompositionEnd: n },
    guardKeyHandler: r,
    isComposingRef: e
  };
}, Qb = pe(
  `border-interactive-default bg-surface-primary
  has-[>input:enabled]:hover:border-interactive-hover
  has-[:disabled]:bg-surface-disabled has-[:focus]:ring-interactive-focused
  h-11.5 rounded has-[:focus]:border-interactive-primary-default relative flex
  w-full items-center border has-[:focus]:ring-4 has-[:focus]:outline-0`,
  {
    variants: {
      invalid: {
        false: "",
        true: `border-interactive-alert-default!
        has-[:focus]:ring-interactive-alert-focused`
      }
    }
  }
), _O = pe(
  `px-md py-sm text-body-primary placeholder:text-body-placeholder
  disabled:text-body-disabled w-full flex-1 bg-transparent [text-align:inherit]
  outline-none`,
  {
    variants: {
      hasPrefix: {
        true: "pl-0",
        false: ""
      },
      hasTrailing: {
        true: "pr-0",
        false: ""
      },
      isNumeric: {
        true: "pr-xxs",
        false: ""
      }
    }
  }
), _s = pe(
  "text-body-secondary flex items-center justify-center",
  {
    variants: {
      position: {
        prefix: "pl-md pr-xs",
        trailing: "px-md h-full"
      },
      interactive: {
        true: "hover:text-body-primary cursor-pointer transition-colors",
        false: ""
      }
    },
    defaultVariants: {
      interactive: !1
    }
  }
), kc = _.forwardRef(
  ({
    invalid: e,
    prefixIcon: t,
    trailingIcon: n,
    onTrailingIconClick: r,
    trailingIconSize: o = 14,
    prefixIconSize: s = 14,
    className: a,
    onKeyDown: i,
    onKeyUp: c,
    onCompositionStart: l,
    onCompositionEnd: f,
    ...d
  }, h) => {
    const p = !!t, g = !!n, m = !!r, x = d.type === "number", { compositionHandlers: C, guardKeyHandler: b } = _c(), y = (w) => {
      C.onCompositionStart(w), l == null || l(w);
    }, S = (w) => {
      C.onCompositionEnd(w), f == null || f(w);
    };
    return /* @__PURE__ */ u.jsxs("div", { className: R(Qb({ invalid: e }), a), children: [
      t && /* @__PURE__ */ u.jsx(
        "div",
        {
          className: _s({ position: "prefix", interactive: !1 }),
          children: it(t, { size: s })
        }
      ),
      /* @__PURE__ */ u.jsx(
        "input",
        {
          ref: h,
          className: _O({ hasPrefix: p, hasTrailing: g, isNumeric: x }),
          ...d,
          onKeyDown: b(i),
          onKeyUp: b(c),
          onCompositionStart: y,
          onCompositionEnd: S
        }
      ),
      n && /* @__PURE__ */ u.jsx(u.Fragment, { children: m ? /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: _s({
            position: "trailing",
            interactive: !0
          }),
          disabled: d.disabled,
          onClick: r,
          children: it(n, { size: o })
        }
      ) : /* @__PURE__ */ u.jsx(
        "div",
        {
          className: _s({
            position: "trailing",
            interactive: !1
          }),
          children: it(n, { size: o })
        }
      ) })
    ] });
  }
);
kc.displayName = "Input";
const kO = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Ba = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, EO = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), MO = _.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: s = !1,
    error: a = !1,
    invalid: i = !1,
    icon: c,
    iconSize: l = 14,
    placeholder: f,
    formatDate: d = EO,
    className: h,
    contentClassName: p,
    defaultOpen: g = !1,
    open: m,
    onOpenChange: x,
    side: C = "bottom",
    locale: b = "ja",
    ...y
  }, S) => {
    const [w, M] = _.useState(
      () => Ba(n || null)
    ), [k, E] = _.useState(g), A = e !== void 0, O = A ? Ba(e) : w, j = m !== void 0 ? m : k, $ = _.useMemo(
      () => Ba(r || null),
      [r]
    ), V = _.useMemo(
      () => Ba(o || null),
      [o]
    ), D = _.useMemo(() => !$ || !V ? !0 : $ <= V, [$, V]), B = (W) => {
      const oe = W || null;
      A || M(oe), t == null || t(oe), oe && (m === void 0 && E(!1), x == null || x(!1));
    }, F = (W) => {
      m === void 0 && E(W), x == null || x(W);
    }, X = (W) => {
      switch (W.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          W.preventDefault(), j || F(!0);
          break;
        case "Escape":
          j && (W.preventDefault(), F(!1));
          break;
      }
    };
    return /* @__PURE__ */ u.jsxs(hg, { open: j, onOpenChange: F, children: [
      /* @__PURE__ */ u.jsx(pg, { asChild: !0, children: /* @__PURE__ */ u.jsx(
        kc,
        {
          ...y,
          ref: S,
          type: "text",
          readOnly: !0,
          placeholder: f,
          value: O ? d(O) : "",
          disabled: s,
          invalid: a || i,
          trailingIcon: c || W1,
          trailingIconSize: l,
          onTrailingIconClick: () => !s && F(!j),
          className: R(
            j && "ring-interactive-focused ring-4",
            h
          ),
          onKeyDown: X,
          onClick: () => !s && F(!j),
          "aria-expanded": j,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ u.jsx(mg, { children: /* @__PURE__ */ u.jsx(
        Su,
        {
          className: R(kO, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: C,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => F(!1),
          onPointerDownOutside: () => F(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ u.jsx(
            Wb,
            {
              value: O,
              onChange: B,
              ...$ && { minDate: $ },
              ...V && { maxDate: V },
              disabled: !D,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: O || /* @__PURE__ */ new Date(),
              locale: b
            }
          )
        }
      ) })
    ] });
  }
);
MO.displayName = "DatePicker";
const PO = /* @__PURE__ */ new Set([
  "text",
  "search",
  "email",
  "url",
  "tel",
  "number",
  "password"
]), NO = 'input, textarea, select, [role="combobox"], [contenteditable="true"]';
function AO(e) {
  var n;
  if (e.hasAttribute("hidden") || e.closest('[aria-hidden="true"]') || e instanceof HTMLInputElement && e.type === "hidden")
    return !1;
  const t = (n = e.ownerDocument.defaultView) == null ? void 0 : n.getComputedStyle(e);
  return (t == null ? void 0 : t.display) !== "none" && (t == null ? void 0 : t.visibility) !== "hidden";
}
function RO(e) {
  if (e.getAttribute("aria-disabled") === "true") return !1;
  const t = e;
  return !t.disabled && !t.readOnly;
}
function OO(e) {
  const t = e.getAttribute("role");
  return t !== null && t !== "textbox" || e.hasAttribute("aria-autocomplete") || e.hasAttribute("aria-haspopup") ? !1 : e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? PO.has(e.type) : !1;
}
function DO(e) {
  const t = Array.from(
    e.querySelectorAll(NO)
  ).filter(AO).filter(RO), n = t[0];
  return !n || !OO(n) || n.value.trim() !== "" && t.length > 1 ? null : n;
}
function IO(e) {
  e.preventDefault();
  const t = e.currentTarget instanceof HTMLElement ? e.currentTarget : e.target;
  if (!(t instanceof HTMLElement)) return;
  const n = DO(t);
  if (!n) {
    t.focus();
    return;
  }
  n.focus(), n.value !== "" && n.select();
}
const TO = {
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg"
}, jO = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], jj = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: s,
  actions: a = jO,
  cancellable: i = !0,
  cancelButtonLabel: c = "キャンセル",
  allowClickOutside: l = !0,
  onOpenAutoFocus: f = IO,
  bodyClassName: d,
  size: h = "md"
}) => {
  const [p, g] = _.useState(-1), x = s !== void 0 ? s : p !== -1, C = async (w) => {
    const M = a.indexOf(w);
    if (w.onAction) {
      g(M);
      const k = await w.onAction(t);
      if (g(-1), k === !1)
        return;
    } else
      g(-1);
    e && t(w.value);
  }, b = () => {
    n(t);
  }, y = (w) => {
    w.preventDefault(), i && !x && l && n(t);
  }, S = (w) => {
    if (x) {
      w.preventDefault();
      return;
    }
    w.preventDefault(), n(t);
  };
  return /* @__PURE__ */ u.jsx(eu, { open: e, onOpenChange: t, children: /* @__PURE__ */ u.jsx(tu, { children: /* @__PURE__ */ u.jsx(
    nu,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ u.jsxs(
        ru,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: y,
          onEscapeKeyDown: S,
          onOpenAutoFocus: f,
          className: R(
            `bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,
            TO[h]
          ),
          children: [
            /* @__PURE__ */ u.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ u.jsx(
              zm,
              {
                className: `text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,
                children: r
              }
            ) }),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: R(
                  `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,
                  d
                ),
                children: o
              }
            ),
            /* @__PURE__ */ u.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
              i && /* @__PURE__ */ u.jsx(
                He,
                {
                  intent: "tertiary",
                  onClick: b,
                  disabled: x,
                  children: c
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: a.map((w, M) => {
                const { label: k, classNames: E, onAction: A, value: O, ...j } = w;
                return /* @__PURE__ */ u.jsx(
                  He,
                  {
                    loading: p === M,
                    ...j,
                    intent: w.intent || "primary",
                    className: E,
                    onClick: () => C(w),
                    children: k
                  },
                  M
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, Jb = Zs(void 0), Wu = () => {
  const e = Ds(Jb);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, $O = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (l) => l(),
  children: r,
  initialStep: o = 0,
  currentStep: s,
  cancellable: a = !0,
  allowClickOutside: i = !0,
  onStepChange: c
}) => {
  const [l, f] = at(o), d = s !== void 0 ? s : l, h = _.Children.toArray(r).filter(
    (w) => _.isValidElement(w) && w.type === e0
  ), p = h.length, g = (w) => {
    w >= 0 && w < p && (s === void 0 && f(w), c == null || c(w));
  }, m = () => g(d + 1), x = () => g(d - 1), C = (w) => {
    s === void 0 && f(o), t(w);
  }, b = (w) => {
    w.preventDefault(), a && i && n(C);
  }, y = (w) => {
    w.preventDefault(), a && n(C);
  }, S = {
    currentStep: d,
    totalSteps: p,
    goToStep: g,
    nextStep: m,
    prevStep: x,
    isFirstStep: d === 0,
    isLastStep: d === p - 1,
    cancellable: a,
    onClose: C,
    onCancel: n
  };
  return /* @__PURE__ */ u.jsx(Jb.Provider, { value: S, children: /* @__PURE__ */ u.jsx(eu, { open: e, onOpenChange: C, children: /* @__PURE__ */ u.jsx(tu, { children: /* @__PURE__ */ u.jsx(
    nu,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ u.jsx(
        ru,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform`,
          onPointerDownOutside: b,
          onEscapeKeyDown: y,
          children: h[d]
        }
      )
    }
  ) }) }) });
}, e0 = ({ children: e }) => /* @__PURE__ */ u.jsx("div", { className: "flex flex-col", children: e }), WO = ({ children: e }) => /* @__PURE__ */ u.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ u.jsx(
  zm,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), LO = ({ children: e, className: t }) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: R(
      `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary max-h-[calc(100vh-40px-68px-78px)] overflow-hidden
        overflow-y-auto border-y-1`,
      t
    ),
    children: e
  }
), FO = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: s, cancellable: a } = Wu(), i = () => {
    r && r(), o(s);
  };
  return /* @__PURE__ */ u.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ u.jsx("div", { className: "gap-xs flex", children: t && a && /* @__PURE__ */ u.jsx(He, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ u.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, VO = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const s = Wu(), a = {
    nextStep: s.nextStep,
    prevStep: s.prevStep,
    goToStep: s.goToStep,
    currentStep: s.currentStep,
    totalSteps: s.totalSteps,
    isFirstStep: s.isFirstStep,
    isLastStep: s.isLastStep
  }, i = async () => {
    t && await t(a);
  };
  return r ? /* @__PURE__ */ u.jsx(wS, { asChild: !0, children: /* @__PURE__ */ u.jsx(He, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ u.jsx(He, { ...o, onClick: i, children: e });
}, $j = {
  Root: $O,
  Step: e0,
  Header: WO,
  Body: LO,
  Footer: FO,
  Action: VO,
  useMultiStepDialog: Wu
}, Wj = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: s,
  optional: a
}) => {
  const i = _.isValidElement(t) ? _.cloneElement(
    t,
    {
      id: r,
      name: r,
      invalid: !!o
    }
  ) : t;
  return /* @__PURE__ */ u.jsxs("div", { className: R("min-w-0", n), children: [
    e && /* @__PURE__ */ u.jsxs(
      "label",
      {
        htmlFor: r,
        className: `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
        children: [
          /* @__PURE__ */ u.jsx("span", { children: e }),
          a && /* @__PURE__ */ u.jsx("span", { className: "text-body-secondary", children: "(任意)" })
        ]
      }
    ),
    i,
    o && /* @__PURE__ */ u.jsx("p", { className: "mt-xxs text-body-alert text-sm font-normal leading-[1.5]", children: o }),
    s && /* @__PURE__ */ u.jsx(
      "p",
      {
        className: `mt-xxs text-body-secondary text-sm font-normal
            leading-[1.5]`,
        children: s
      }
    )
  ] });
}, t0 = hg, zO = pg, BO = EE, Lu = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(mg, { children: /* @__PURE__ */ u.jsx(
  Su,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: R(
      // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
      // but we can add them later as needed.
      `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-dropdown border outline-none`,
      e
    ),
    ...r
  }
) }));
Lu.displayName = Su.displayName;
const HO = (e) => typeof e == "string" ? e : e.label || e.value || String(e), GO = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, n0 = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: s,
      onSelect: a,
      renderSuggestion: i,
      getSuggestionValue: c = HO,
      getSuggestionKey: l = GO,
      debounceMs: f = 300,
      minQueryLength: d = 0,
      loadingText: h = "Loading...",
      disabled: p,
      onFocus: g,
      onBlur: m,
      onKeyDown: x,
      ...C
    } = e, [b, y] = at(!1), [S, w] = at(
      []
    ), [M, k] = at(!1), E = pt(null), [A, O] = at(0), j = pt([]), $ = SO(n, f), V = ho(() => {
      if (!o)
        return S;
      if (!n || n.length < d)
        return o;
      const N = n.toLowerCase();
      return o.filter((P) => c(P).toLowerCase().includes(N));
    }, [
      o,
      S,
      n,
      d,
      c
    ]);
    wn(() => {
      if (s) {
        if ($.length < d) {
          w([]), y(!1), k(!1);
          return;
        }
        return E.current && E.current.abort(), E.current = new AbortController(), k(!0), s($).then((N) => {
          w(N);
        }).catch((N) => {
          N.name !== "AbortError" && console.debug("AutoSuggest search failed:", N), w([]);
        }).finally(() => {
          k(!1);
        }), () => {
          E.current && E.current.abort();
        };
      }
    }, [$, s, d]);
    const D = ke(
      (N) => {
        const P = c(N);
        r(P), a == null || a(N), y(!1);
      },
      [r, a, c]
    ), B = ke(
      (N) => {
        p || y(!0), g == null || g(N);
      },
      [p, g]
    ), F = ke(
      (N) => {
        y(!1), m == null || m(N);
      },
      [m]
    ), X = ke(
      (N) => {
        const P = N.target.value;
        r(P), !b && V.length > 0 && y(!0);
      },
      [r, b, V.length]
    );
    wn(() => {
      O(0), j.current = [];
    }, [V]), wn(() => {
      var N;
      b && A >= 0 && j.current[A] && ((N = j.current[A]) == null || N.scrollIntoView({
        block: "nearest"
      }));
    }, [A, b]);
    const T = ke(
      (N) => {
        if (!b) {
          x == null || x(N);
          return;
        }
        switch (N.key) {
          case "Escape":
            N.preventDefault(), y(!1);
            break;
          case "Enter": {
            N.preventDefault();
            const P = V[A];
            P && D(P);
            break;
          }
          case "ArrowDown":
            N.preventDefault(), O(
              (P) => P < V.length - 1 ? P + 1 : P
            );
            break;
          case "ArrowUp":
            N.preventDefault(), O((P) => P > 0 ? P - 1 : P);
            break;
        }
        x == null || x(N);
      },
      [b, A, V, D, x]
    ), W = b && !p && (V.length > 0 || M), oe = W && A >= 0 ? `autosuggest-item-${A}` : void 0;
    return /* @__PURE__ */ u.jsxs(t0, { open: W, children: [
      /* @__PURE__ */ u.jsx(BO, { asChild: !0, children: /* @__PURE__ */ u.jsx(
        kc,
        {
          ref: t,
          value: n,
          onChange: X,
          onFocus: B,
          onBlur: F,
          onKeyDown: T,
          disabled: p,
          role: "combobox",
          "aria-expanded": W,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": oe,
          "aria-autocomplete": "list",
          ...C
        }
      ) }),
      /* @__PURE__ */ u.jsx(
        Lu,
        {
          align: "start",
          sideOffset: 4,
          className: "p-0",
          style: {
            width: "var(--radix-popover-trigger-width)",
            maxWidth: "37.5rem"
          },
          onOpenAutoFocus: (N) => {
            N.preventDefault();
          },
          children: M ? /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ u.jsx(o2, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: h })
              ]
            }
          ) : /* @__PURE__ */ u.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: R(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: V.map((N, P) => {
                const L = c(N), z = P === A, Z = `autosuggest-item-${P}`;
                return /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    id: Z,
                    ref: (U) => {
                      j.current[P] = U;
                    },
                    role: "option",
                    "aria-selected": z,
                    "data-value": L,
                    onClick: () => D(N),
                    onPointerDown: (U) => {
                      U.preventDefault(), D(N);
                    },
                    onMouseEnter: () => O(P),
                    className: R(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      z && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(N) : c(N)
                  },
                  l(N, P)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
n0.displayName = "AutoSuggest";
var _e = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(_e || {}), te = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(te || {});
const YO = [
  {
    backgroundColor: te.AccentSunSoft,
    textColor: _e.AccentSunStrong,
    iconColor: te.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: te.AccentSunPale,
    textColor: _e.AccentSunStrong,
    iconColor: te.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: te.AccentWoodSoft,
    textColor: _e.AccentWoodStrong,
    iconColor: te.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: te.AccentWoodPale,
    textColor: _e.AccentWoodStrong,
    iconColor: te.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: te.AccentOrangeSoft,
    textColor: _e.AccentOrangeStrong,
    iconColor: te.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: te.AccentOrangePale,
    textColor: _e.AccentOrangeStrong,
    iconColor: te.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: te.AccentYellowSoft,
    textColor: _e.AccentYellowStrong,
    iconColor: te.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: te.AccentYellowPale,
    textColor: _e.AccentYellowStrong,
    iconColor: te.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: te.AccentLemonSoft,
    textColor: _e.AccentLemonStrong,
    iconColor: te.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: te.AccentLemonPale,
    textColor: _e.AccentLemonStrong,
    iconColor: te.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: te.AccentGrassSoft,
    textColor: _e.AccentGrassStrong,
    iconColor: te.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: te.AccentGrassPale,
    textColor: _e.AccentGrassStrong,
    iconColor: te.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: te.AccentLimeSoft,
    textColor: _e.AccentLimeStrong,
    iconColor: te.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: te.AccentLimePale,
    textColor: _e.AccentLimeStrong,
    iconColor: te.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: te.AccentGreenSoft,
    textColor: _e.AccentGreenStrong,
    iconColor: te.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: te.AccentGreenPale,
    textColor: _e.AccentGreenStrong,
    iconColor: te.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: te.AccentPeacockSoft,
    textColor: _e.AccentPeacockStrong,
    iconColor: te.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: te.AccentPeacockPale,
    textColor: _e.AccentPeacockStrong,
    iconColor: te.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: te.AccentCyanSoft,
    textColor: _e.AccentCyanStrong,
    iconColor: te.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: te.AccentCyanPale,
    textColor: _e.AccentCyanStrong,
    iconColor: te.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: te.AccentSkySoft,
    textColor: _e.AccentSkyStrong,
    iconColor: te.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: te.AccentSkyPale,
    textColor: _e.AccentSkyStrong,
    iconColor: te.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: te.AccentSeaSoft,
    textColor: _e.AccentSeaStrong,
    iconColor: te.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: te.AccentSeaPale,
    textColor: _e.AccentSeaStrong,
    iconColor: te.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: te.AccentVioletSoft,
    textColor: _e.AccentVioletStrong,
    iconColor: te.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: te.AccentVioletPale,
    textColor: _e.AccentVioletStrong,
    iconColor: te.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: te.AccentPurpleSoft,
    textColor: _e.AccentPurpleStrong,
    iconColor: te.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: te.AccentPurplePale,
    textColor: _e.AccentPurpleStrong,
    iconColor: te.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: te.AccentMagentaSoft,
    textColor: _e.AccentMagentaStrong,
    iconColor: te.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: te.AccentMagentaPale,
    textColor: _e.AccentMagentaStrong,
    iconColor: te.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: te.AccentCharcoalSoft,
    textColor: _e.AccentCharchoalStrong,
    iconColor: te.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: te.AccentCharcoalPale,
    textColor: _e.AccentCharchoalStrong,
    iconColor: te.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: te.AccentGraySoft,
    textColor: _e.AccentGrayStrong,
    iconColor: te.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: te.AccentGrayPale,
    textColor: _e.AccentGrayStrong,
    iconColor: te.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: te.AccentGrayPale,
    textColor: _e.AccentGrayStrong,
    iconColor: te.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: te.AccentBambooPale,
    textColor: _e.AccentBambooStrong,
    iconColor: te.AccentBambooStrong,
    code: 10
  }
], KO = pe(
  `gap-xxs px-xs h-5.5 inline-flex max-w-full items-center rounded-full border
  border-transparent leading-none`,
  {
    variants: {
      size: {
        sm: "text-sm",
        md: ""
      },
      selected: {
        false: "",
        true: "border-interactive-selected"
      },
      interactive: {
        true: "cursor-pointer select-none"
      },
      variant: {
        primary: "",
        secondary: "bg-surface-disabled"
      },
      disabled: {
        true: "text-body-disabled",
        false: ""
      }
    },
    compoundVariants: [
      {
        variant: "secondary",
        disabled: !0,
        className: "bg-interactive-disabled"
      },
      {
        disabled: !0,
        className: "cursor-default"
      }
    ],
    defaultVariants: {
      size: "md",
      selected: !1,
      variant: "primary",
      disabled: !1
    }
  }
), Jl = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: s = "md",
  style: a,
  selected: i = !1,
  variant: c = "primary",
  icon: l,
  disabled: f = !1,
  asChild: d = !1
}) => {
  const h = YO.find(
    (C) => C.code === e
  ), p = () => c === "secondary" ? `var(${h == null ? void 0 : h.iconColor})` : `var(${h == null ? void 0 : h.textColor})`, g = R(
    KO({
      size: s,
      selected: f ? !1 : i,
      interactive: !!o && !f,
      variant: c,
      disabled: f
    }),
    n
  ), m = {
    // Only apply accent background for primary variant
    // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
    ...c === "primary" && {
      backgroundColor: `var(${h == null ? void 0 : h.backgroundColor})`
    },
    // Only apply inline color when not disabled (Tailwind class handles disabled state)
    ...!f && { color: `var(${h == null ? void 0 : h.textColor})` },
    ...a
  }, x = d ? Ro : "div";
  return /* @__PURE__ */ u.jsxs(
    x,
    {
      className: g,
      style: m,
      onClick: f ? void 0 : o,
      role: !d && o ? "button" : void 0,
      "aria-disabled": f || void 0,
      children: [
        l && /* @__PURE__ */ u.jsx(
          "span",
          {
            className: R(
              "shrink-0",
              f && "text-shape-interactive-disabled"
            ),
            style: f ? void 0 : { color: p() },
            children: it(l, { size: 14 })
          }
        ),
        d ? /* @__PURE__ */ u.jsx(k2, { children: t }) : /* @__PURE__ */ u.jsx("div", { className: "pt-0.25 relative h-full truncate", children: t }),
        !!r && !f && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: R(
              `bg-interactive-neutral-default hover:border-interactive-hover h-3.5
            w-3.5 box-border flex shrink-0 cursor-pointer items-center
            justify-center rounded-full border border-transparent leading-none
            transition-colors`
            ),
            onClick: r,
            children: /* @__PURE__ */ u.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "text-shape-primary h-1.25 w-1.25",
                viewBox: "0 0 5 5",
                fill: "none",
                children: [
                  /* @__PURE__ */ u.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.54884 0.117831C4.70594 0.274938 4.70594 0.52966 4.54884 0.686767L0.686767 4.54884C0.52966 4.70594 0.274938 4.70594 0.117831 4.54884C-0.0392769 4.39173 -0.0392769 4.13701 0.117831 3.9799L3.9799 0.117831C4.13701 -0.0392769 4.39173 -0.0392769 4.54884 0.117831Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M0.117831 0.117831C0.274938 -0.0392769 0.52966 -0.0392769 0.686767 0.117831L4.54884 3.9799C4.70594 4.13701 4.70594 4.39173 4.54884 4.54884C4.39173 4.70594 4.13701 4.70594 3.9799 4.54884L0.117831 0.686767C-0.0392769 0.52966 -0.0392769 0.274938 0.117831 0.117831Z",
                      fill: "currentColor"
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, r0 = _.forwardRef(
  ({
    value: e,
    onChange: t,
    maxTags: n,
    allowDuplicates: r = !0,
    separators: o = [",", "、"],
    placeholder: s = "Add tags...",
    inputValue: a,
    onInputChange: i,
    helperText: c,
    prefixIcon: l,
    trailingIcon: f,
    trailingIconSize: d = 14,
    prefixIconSize: h = 14,
    invalid: p,
    disabled: g,
    className: m,
    onValidateTag: x,
    defaultValidationError: C = "Invalid tag",
    ...b
  }, y) => {
    const [S, w] = at(""), M = a ?? S, k = i ?? w, [E, A] = at(!1), { compositionHandlers: O, guardKeyHandler: j } = _c(), [$, V] = at(null), D = pt(null);
    _.useImperativeHandle(y, () => D.current);
    const B = _.useMemo(() => {
      const U = o.map(
        (I) => I.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(U.join("|"));
    }, [o]), F = ke(
      (U) => !(!U || !r && e.includes(U) || n && e.length >= n),
      [e, r, n]
    ), X = ke(
      (U) => {
        const I = U.trim();
        if (F(I)) {
          if (x) {
            const J = x(I);
            if (!J.valid) {
              V(
                J.error ?? C
              );
              return;
            }
          }
          t([...e, I]), k(""), V(null);
        }
      },
      [
        e,
        t,
        F,
        k,
        x,
        C
      ]
    ), T = ke(
      (U) => {
        const I = e.filter((J, re) => re !== U);
        t(I);
      },
      [e, t]
    ), W = ke(
      (U) => {
        const I = U.target.value, J = I[I.length - 1];
        if (J && o.includes(J)) {
          const de = I.slice(0, -1);
          de && X(de);
          return;
        }
        const re = I.split(B);
        if (re.length > 1) {
          re.filter(Boolean).forEach((de) => X(de));
          return;
        }
        k(I);
      },
      [o, B, X, k]
    ), oe = ke(
      (U) => {
        U.key === "Enter" && M.trim() && (U.preventDefault(), X(M)), (U.key === "Backspace" || U.key === "Delete") && !M && e.length > 0 && (U.preventDefault(), T(e.length - 1));
      },
      [M, e.length, X, T]
    ), N = ke(() => {
      M.trim() && X(M), A(!1), V(null);
    }, [M, X]), P = g || (n ? e.length >= n : !1), L = e.length === 0 && !M, z = !!l, Z = !!f;
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: R(
            Qb({ invalid: p }),
            "min-h-11.5 !h-auto max-h-[12.5rem] overflow-y-auto",
            m
          ),
          children: [
            l && /* @__PURE__ */ u.jsx(
              "div",
              {
                className: _s({
                  position: "prefix"
                }),
                children: it(l, { size: h })
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: R(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  z ? "pl-0" : "pl-sm",
                  Z ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((U, I) => /* @__PURE__ */ u.jsx(
                    Jl,
                    {
                      ...!g && { onRemove: () => T(I) },
                      children: U
                    },
                    I
                  )),
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      ref: D,
                      value: M,
                      onChange: W,
                      onKeyDown: j(oe),
                      onFocus: () => A(!0),
                      onBlur: N,
                      onCompositionStart: O.onCompositionStart,
                      onCompositionEnd: O.onCompositionEnd,
                      placeholder: L ? s : "",
                      disabled: P,
                      className: R(
                        "min-w-24 min-h-6 flex-1 bg-transparent outline-none",
                        "text-body-primary placeholder:text-body-placeholder",
                        "disabled:text-body-disabled py-0 px-0 leading-[100%]"
                      ),
                      ...b
                    }
                  )
                ]
              }
            ),
            f && /* @__PURE__ */ u.jsx(
              "div",
              {
                className: _s({
                  position: "trailing"
                }),
                children: it(f, { size: d })
              }
            )
          ]
        }
      ),
      (c || $) && /* @__PURE__ */ u.jsx(
        "p",
        {
          className: R(
            "mt-xxs text-sm",
            $ ? "text-body-alert" : "text-body-secondary",
            !$ && !E && "invisible"
          ),
          children: $ || c
        }
      )
    ] });
  }
);
r0.displayName = "TagInput";
const Lj = Object.assign(kc, {
  AutoSuggest: n0,
  TagInput: r0
});
var tp = 1, UO = 0.9, qO = 0.8, XO = 0.17, cl = 0.1, ll = 0.999, ZO = 0.9999, QO = 0.99, JO = /[\\\/_+.#"@\[\(\{&]/, eD = /[\\\/_+.#"@\[\(\{&]/g, tD = /[\s-]/, o0 = /[\s-]/g;
function ed(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? tp : QO;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), l = n.indexOf(c, o), f = 0, d, h, p, g; l >= 0; ) d = ed(e, t, n, r, l + 1, s + 1, a), d > f && (l === o ? d *= tp : JO.test(e.charAt(l - 1)) ? (d *= qO, p = e.slice(o, l - 1).match(eD), p && o > 0 && (d *= Math.pow(ll, p.length))) : tD.test(e.charAt(l - 1)) ? (d *= UO, g = e.slice(o, l - 1).match(o0), g && o > 0 && (d *= Math.pow(ll, g.length))) : (d *= XO, o > 0 && (d *= Math.pow(ll, l - o))), e.charAt(l) !== t.charAt(s) && (d *= ZO)), (d < cl && n.charAt(l - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(l - 1) !== r.charAt(s)) && (h = ed(e, t, n, r, l + 1, s + 2, a), h * cl > d && (d = h * cl)), d > f && (f = d), l = n.indexOf(c, l + 1);
  return a[i] = f, f;
}
function np(e) {
  return e.toLowerCase().replace(o0, " ");
}
function nD(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ed(e, t, np(e), np(t), 0, 0, {});
}
var es = '[cmdk-group=""]', dl = '[cmdk-group-items=""]', rD = '[cmdk-group-heading=""]', s0 = '[cmdk-item=""]', rp = `${s0}:not([aria-disabled="true"])`, td = "cmdk-item-select", to = "data-value", oD = (e, t, n) => nD(e, t, n), a0 = v.createContext(void 0), pa = () => v.useContext(a0), i0 = v.createContext(void 0), Fu = () => v.useContext(i0), c0 = v.createContext(void 0), l0 = v.forwardRef((e, t) => {
  let n = no(() => {
    var P, L;
    return { search: "", value: (L = (P = e.value) != null ? P : e.defaultValue) != null ? L : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = no(() => /* @__PURE__ */ new Set()), o = no(() => /* @__PURE__ */ new Map()), s = no(() => /* @__PURE__ */ new Map()), a = no(() => /* @__PURE__ */ new Set()), i = d0(e), { label: c, children: l, value: f, onValueChange: d, filter: h, shouldFilter: p, loop: g, disablePointerSelection: m = !1, vimBindings: x = !0, ...C } = e, b = Ze(), y = Ze(), S = Ze(), w = v.useRef(null), M = mD();
  Or(() => {
    if (f !== void 0) {
      let P = f.trim();
      n.current.value = P, k.emit();
    }
  }, [f]), Or(() => {
    M(6, V);
  }, []);
  let k = v.useMemo(() => ({ subscribe: (P) => (a.current.add(P), () => a.current.delete(P)), snapshot: () => n.current, setState: (P, L, z) => {
    var Z, U, I, J;
    if (!Object.is(n.current[P], L)) {
      if (n.current[P] = L, P === "search") $(), O(), M(1, j);
      else if (P === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let re = document.getElementById(S);
          re ? re.focus() : (Z = document.getElementById(b)) == null || Z.focus();
        }
        if (M(7, () => {
          var re;
          n.current.selectedItemId = (re = D()) == null ? void 0 : re.id, k.emit();
        }), z || M(5, V), ((U = i.current) == null ? void 0 : U.value) !== void 0) {
          let re = L ?? "";
          (J = (I = i.current).onValueChange) == null || J.call(I, re);
          return;
        }
      }
      k.emit();
    }
  }, emit: () => {
    a.current.forEach((P) => P());
  } }), []), E = v.useMemo(() => ({ value: (P, L, z) => {
    var Z;
    L !== ((Z = s.current.get(P)) == null ? void 0 : Z.value) && (s.current.set(P, { value: L, keywords: z }), n.current.filtered.items.set(P, A(L, z)), M(2, () => {
      O(), k.emit();
    }));
  }, item: (P, L) => (r.current.add(P), L && (o.current.has(L) ? o.current.get(L).add(P) : o.current.set(L, /* @__PURE__ */ new Set([P]))), M(3, () => {
    $(), O(), n.current.value || j(), k.emit();
  }), () => {
    s.current.delete(P), r.current.delete(P), n.current.filtered.items.delete(P);
    let z = D();
    M(4, () => {
      $(), (z == null ? void 0 : z.getAttribute("id")) === P && j(), k.emit();
    });
  }), group: (P) => (o.current.has(P) || o.current.set(P, /* @__PURE__ */ new Set()), () => {
    s.current.delete(P), o.current.delete(P);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: S, labelId: y, listInnerRef: w }), []);
  function A(P, L) {
    var z, Z;
    let U = (Z = (z = i.current) == null ? void 0 : z.filter) != null ? Z : oD;
    return P ? U(P, n.current.search, L) : 0;
  }
  function O() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let P = n.current.filtered.items, L = [];
    n.current.filtered.groups.forEach((Z) => {
      let U = o.current.get(Z), I = 0;
      U.forEach((J) => {
        let re = P.get(J);
        I = Math.max(re, I);
      }), L.push([Z, I]);
    });
    let z = w.current;
    B().sort((Z, U) => {
      var I, J;
      let re = Z.getAttribute("id"), de = U.getAttribute("id");
      return ((I = P.get(de)) != null ? I : 0) - ((J = P.get(re)) != null ? J : 0);
    }).forEach((Z) => {
      let U = Z.closest(dl);
      U ? U.appendChild(Z.parentElement === U ? Z : Z.closest(`${dl} > *`)) : z.appendChild(Z.parentElement === z ? Z : Z.closest(`${dl} > *`));
    }), L.sort((Z, U) => U[1] - Z[1]).forEach((Z) => {
      var U;
      let I = (U = w.current) == null ? void 0 : U.querySelector(`${es}[${to}="${encodeURIComponent(Z[0])}"]`);
      I == null || I.parentElement.appendChild(I);
    });
  }
  function j() {
    let P = B().find((z) => z.getAttribute("aria-disabled") !== "true"), L = P == null ? void 0 : P.getAttribute(to);
    k.setState("value", L || void 0);
  }
  function $() {
    var P, L, z, Z;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (let I of r.current) {
      let J = (L = (P = s.current.get(I)) == null ? void 0 : P.value) != null ? L : "", re = (Z = (z = s.current.get(I)) == null ? void 0 : z.keywords) != null ? Z : [], de = A(J, re);
      n.current.filtered.items.set(I, de), de > 0 && U++;
    }
    for (let [I, J] of o.current) for (let re of J) if (n.current.filtered.items.get(re) > 0) {
      n.current.filtered.groups.add(I);
      break;
    }
    n.current.filtered.count = U;
  }
  function V() {
    var P, L, z;
    let Z = D();
    Z && (((P = Z.parentElement) == null ? void 0 : P.firstChild) === Z && ((z = (L = Z.closest(es)) == null ? void 0 : L.querySelector(rD)) == null || z.scrollIntoView({ block: "nearest" })), Z.scrollIntoView({ block: "nearest" }));
  }
  function D() {
    var P;
    return (P = w.current) == null ? void 0 : P.querySelector(`${s0}[aria-selected="true"]`);
  }
  function B() {
    var P;
    return Array.from(((P = w.current) == null ? void 0 : P.querySelectorAll(rp)) || []);
  }
  function F(P) {
    let L = B()[P];
    L && k.setState("value", L.getAttribute(to));
  }
  function X(P) {
    var L;
    let z = D(), Z = B(), U = Z.findIndex((J) => J === z), I = Z[U + P];
    (L = i.current) != null && L.loop && (I = U + P < 0 ? Z[Z.length - 1] : U + P === Z.length ? Z[0] : Z[U + P]), I && k.setState("value", I.getAttribute(to));
  }
  function T(P) {
    let L = D(), z = L == null ? void 0 : L.closest(es), Z;
    for (; z && !Z; ) z = P > 0 ? hD(z, es) : pD(z, es), Z = z == null ? void 0 : z.querySelector(rp);
    Z ? k.setState("value", Z.getAttribute(to)) : X(P);
  }
  let W = () => F(B().length - 1), oe = (P) => {
    P.preventDefault(), P.metaKey ? W() : P.altKey ? T(1) : X(1);
  }, N = (P) => {
    P.preventDefault(), P.metaKey ? F(0) : P.altKey ? T(-1) : X(-1);
  };
  return v.createElement(ne.div, { ref: t, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (P) => {
    var L;
    (L = C.onKeyDown) == null || L.call(C, P);
    let z = P.nativeEvent.isComposing || P.keyCode === 229;
    if (!(P.defaultPrevented || z)) switch (P.key) {
      case "n":
      case "j": {
        x && P.ctrlKey && oe(P);
        break;
      }
      case "ArrowDown": {
        oe(P);
        break;
      }
      case "p":
      case "k": {
        x && P.ctrlKey && N(P);
        break;
      }
      case "ArrowUp": {
        N(P);
        break;
      }
      case "Home": {
        P.preventDefault(), F(0);
        break;
      }
      case "End": {
        P.preventDefault(), W();
        break;
      }
      case "Enter": {
        P.preventDefault();
        let Z = D();
        if (Z) {
          let U = new Event(td);
          Z.dispatchEvent(U);
        }
      }
    }
  } }, v.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: gD }, c), Ec(e, (P) => v.createElement(i0.Provider, { value: k }, v.createElement(a0.Provider, { value: E }, P))));
}), sD = v.forwardRef((e, t) => {
  var n, r;
  let o = Ze(), s = v.useRef(null), a = v.useContext(c0), i = pa(), c = d0(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  Or(() => {
    if (!l) return i.item(o, a == null ? void 0 : a.id);
  }, [l]);
  let f = u0(o, s, [e.value, e.children, s], e.keywords), d = Fu(), h = ir((M) => M.value && M.value === f.current), p = ir((M) => l || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  v.useEffect(() => {
    let M = s.current;
    if (!(!M || e.disabled)) return M.addEventListener(td, g), () => M.removeEventListener(td, g);
  }, [p, e.onSelect, e.disabled]);
  function g() {
    var M, k;
    m(), (k = (M = c.current).onSelect) == null || k.call(M, f.current);
  }
  function m() {
    d.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: x, value: C, onSelect: b, forceMount: y, keywords: S, ...w } = e;
  return v.createElement(ne.div, { ref: Vn(s, t), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!h, "data-disabled": !!x, "data-selected": !!h, onPointerMove: x || i.getDisablePointerSelection() ? void 0 : m, onClick: x ? void 0 : g }, e.children);
}), aD = v.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = Ze(), i = v.useRef(null), c = v.useRef(null), l = Ze(), f = pa(), d = ir((p) => o || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Or(() => f.group(a), []), u0(a, i, [e.value, e.heading, c]);
  let h = v.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return v.createElement(ne.div, { ref: Vn(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && v.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Ec(e, (p) => v.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, v.createElement(c0.Provider, { value: h }, p))));
}), iD = v.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = v.useRef(null), s = ir((a) => !a.search);
  return !n && !s ? null : v.createElement(ne.div, { ref: Vn(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), cD = v.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Fu(), a = ir((l) => l.search), i = ir((l) => l.selectedItemId), c = pa();
  return v.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), v.createElement(ne.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (l) => {
    o || s.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), lD = v.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = v.useRef(null), a = v.useRef(null), i = ir((l) => l.selectedItemId), c = pa();
  return v.useEffect(() => {
    if (a.current && s.current) {
      let l = a.current, f = s.current, d, h = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let p = l.offsetHeight;
          f.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return h.observe(l), () => {
        cancelAnimationFrame(d), h.unobserve(l);
      };
    }
  }, []), v.createElement(ne.div, { ref: Vn(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Ec(e, (l) => v.createElement("div", { ref: Vn(a, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), dD = v.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return v.createElement(eu, { open: n, onOpenChange: r }, v.createElement(tu, { container: a }, v.createElement(nu, { "cmdk-overlay": "", className: o }), v.createElement(ru, { "aria-label": e.label, "cmdk-dialog": "", className: s }, v.createElement(l0, { ref: t, ...i }))));
}), uD = v.forwardRef((e, t) => ir((n) => n.filtered.count === 0) ? v.createElement(ne.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), fD = v.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return v.createElement(ne.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ec(e, (a) => v.createElement("div", { "aria-hidden": !0 }, a)));
}), Ot = Object.assign(l0, { List: lD, Item: sD, Input: cD, Group: aD, Separator: iD, Dialog: dD, Empty: uD, Loading: fD });
function hD(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function pD(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function d0(e) {
  let t = v.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
var Or = typeof window > "u" ? v.useEffect : v.useLayoutEffect;
function no(e) {
  let t = v.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ir(e) {
  let t = Fu(), n = () => e(t.snapshot());
  return v.useSyncExternalStore(t.subscribe, n, n);
}
function u0(e, t, n, r = []) {
  let o = v.useRef(), s = pa();
  return Or(() => {
    var a;
    let i = (() => {
      var l;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (l = f.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    s.value(e, i, c), (a = t.current) == null || a.setAttribute(to, i), o.current = i;
  }), o;
}
var mD = () => {
  let [e, t] = v.useState(), n = no(() => /* @__PURE__ */ new Map());
  return Or(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function vD(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ec({ asChild: e, children: t }, n) {
  return e && v.isValidElement(t) ? v.cloneElement(vD(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var gD = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const f0 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ot,
  {
    ref: n,
    className: R(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
f0.displayName = Ot.displayName;
const h0 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: "border-divider-default py-sm px-md flex items-center border-b",
    "cmdk-input-wrapper": "",
    children: /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `border-interactive-default bg-surface-primary
        hover:border-interactive-hover
        has-[:disabled]:border-interactive-disabled
        has-[:disabled]:bg-surface-disabled
        has-[:focus]:ring-interactive-focused h-10 rounded px-sm relative flex
        w-full items-center border
        has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
        has-[:focus]:outline-0`,
        children: [
          /* @__PURE__ */ u.jsx(Bd, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ u.jsx(
            Ot.Input,
            {
              ref: n,
              className: R(
                `placeholder:text-body-placeholder h-11 rounded-md py-3 flex w-full
          bg-transparent outline-none disabled:cursor-not-allowed
          disabled:opacity-50`,
                e
              ),
              ...t
            }
          )
        ]
      }
    )
  }
));
h0.displayName = Ot.Input.displayName;
const p0 = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ot.List,
  {
    ref: n,
    className: R(
      "max-h-[18.75rem] overflow-x-hidden overflow-y-auto",
      e
    ),
    ...t
  }
));
p0.displayName = Ot.List.displayName;
const m0 = _.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  Ot.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
m0.displayName = Ot.Empty.displayName;
const oi = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ot.Group,
  {
    ref: n,
    className: R(
      `text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,
      e
    ),
    ...t
  }
));
oi.displayName = Ot.Group.displayName;
const yD = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ot.Separator,
  {
    ref: n,
    className: R(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
yD.displayName = Ot.Separator.displayName;
const si = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  Ot.Item,
  {
    ref: n,
    className: R(
      `hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center wrap-anywhere outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,
      e
    ),
    ...t
  }
));
si.displayName = Ot.Item.displayName;
const op = pe("ease-in-out transition-all duration-300", {
  variants: {
    variant: {
      default: `border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,
      secondary: `border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,
      destructive: `bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), bD = ({
  options: e,
  onValueChange: t = (rt) => rt,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: s = (rt) => rt,
  variant: a,
  defaultValue: i = [],
  value: c,
  placeholder: l = "選択してください",
  placeholderAriaLabel: f = "選択してください",
  triggerDescription: d = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: h = "オプションが選択されていません",
  searchHelpText: p = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: g = "利用可能なオプションを検索",
  optionsListAriaLabel: m = "利用可能なオプション",
  selectAllLabel: x = "すべて選択",
  selectAllCountLabel: C = "オプション",
  clearAllLabel: b = "すべてクリア",
  closeLabel: y = "閉じる",
  footerContent: S,
  moreSelectedLabel: w = "その他",
  searchPlaceholder: M = "オプションを検索...",
  maxCount: k = 10,
  maxSelected: E,
  maxSelectedReachedLabel: A = "選択できる上限に達しました。",
  modalPopover: O = !1,
  className: j,
  hideSelectAll: $ = !1,
  searchable: V = !0,
  emptyIndicator: D = "結果が見つかりません。",
  noOptionsIndicator: B = "利用可能なオプションがありません。",
  autoSize: F = !1,
  singleLine: X = !1,
  popoverClassName: T,
  disabled: W = !1,
  invalid: oe = !1,
  responsive: N,
  minWidth: P,
  maxWidth: L,
  deduplicateOptions: z = !1,
  resetOnDefaultValueChange: Z = !0,
  closeOnSelect: U = !1,
  filterByValueAndLabel: I = !1,
  filterOption: J,
  renderOption: re,
  customTrigger: de,
  selectionDisplayMode: me = "default",
  hideSelection: ge = !1,
  maxDisplayedOptions: Se,
  totalOptionsCount: Ie,
  moreOptionsLabel: je = (rt) => `検索テキストを入力して他${rt}件を表示`,
  ...dt
}, Xe) => {
  const [rt, vt] = _.useState(i), [We, Ge] = _.useState(!1), [Qe, Dt] = _.useState(""), Pt = c !== void 0, ve = Pt ? c : rt, Xt = E !== void 0 && ve.length >= E, [It, un] = _.useState(""), [fn, Rn] = _.useState(""), Zt = _.useRef(ve.length), Qt = _.useRef(We), On = _.useRef(Qe), Nt = _.useCallback(
    (Y, ue = "polite") => {
      ue === "assertive" ? (Rn(Y), setTimeout(() => Rn(""), 100)) : (un(Y), setTimeout(() => un(""), 100));
    },
    []
  ), ot = _.useCallback(
    (Y) => {
      Pt || vt(Y), t(Y);
    },
    [Pt, t]
  ), H = _.useId(), ee = `${H}-listbox`, Q = `${H}-description`, G = `${H}-count`, ce = _.useRef(i), K = _.useCallback(
    (Y) => {
      const ue = Y[0];
      return !!(ue && typeof ue == "object" && "heading" in ue);
    },
    []
  ), ie = _.useCallback((Y, ue) => {
    if (Y.length !== ue.length) return !1;
    const ye = [...Y].sort(), Ne = [...ue].sort();
    return ye.every((Te, st) => Te === Ne[st]);
  }, []), he = _.useCallback(() => {
    Ge(!1), Dt(""), ot(i);
  }, [i, ot]), le = _.useRef(null);
  _.useImperativeHandle(
    Xe,
    () => ({
      reset: he,
      getSelectedValues: () => ve,
      setSelectedValues: ot,
      clear: () => ot([]),
      focus: () => {
        if (le.current) {
          le.current.focus();
          const Y = le.current.style.outline, ue = le.current.style.outlineOffset;
          le.current.style.outline = "2px solid hsl(var(--ring))", le.current.style.outlineOffset = "2px", setTimeout(() => {
            le.current && (le.current.style.outline = Y, le.current.style.outlineOffset = ue);
          }, 1e3);
        }
      }
    }),
    [he, ve, ot]
  );
  const [Ve, Tt] = _.useState("desktop");
  _.useEffect(() => {
    if (typeof window > "u") return;
    const Y = () => {
      const ue = window.innerWidth;
      ue < 640 ? Tt("mobile") : ue < 1024 ? Tt("tablet") : Tt("desktop");
    };
    return Y(), window.addEventListener("resize", Y), () => {
      typeof window < "u" && window.removeEventListener("resize", Y);
    };
  }, []);
  const ut = (() => {
    if (!N)
      return {
        maxCount: k,
        compactMode: !1
      };
    if (N === !0) {
      const ye = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ve];
      return {
        maxCount: (ye == null ? void 0 : ye.maxCount) ?? k,
        compactMode: (ye == null ? void 0 : ye.compactMode) ?? !1
      };
    }
    const Y = N[Ve];
    return {
      maxCount: (Y == null ? void 0 : Y.maxCount) ?? k,
      compactMode: (Y == null ? void 0 : Y.compactMode) ?? !1
    };
  })(), Ye = _.useCallback(() => {
    if (e.length === 0) return [];
    let Y;
    K(e) ? Y = e.flatMap((Te) => Te.options) : Y = e;
    const ue = /* @__PURE__ */ new Set(), ye = [], Ne = [];
    return Y.forEach((Te) => {
      ue.has(Te.value) ? (ye.push(Te.value), z || Ne.push(Te)) : (ue.add(Te.value), Ne.push(Te));
    }), process.env.NODE_ENV === "development" && ye.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${z ? "automatically removed" : "detected"}: ${ye.join(
        ", "
      )}. ${z ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), z ? Ne : Y;
  }, [e, z, K]), Dn = _.useCallback(
    (Y) => {
      const ue = Ye().find((ye) => ye.value === Y);
      return !ue && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${Y}" not found in options list`
      ), ue;
    },
    [Ye]
  ), pr = _.useCallback(
    (Y, ue) => {
      const [ye, Ne] = Y.split(":");
      if (!I)
        return Ne && Ne.toLowerCase().includes(ue.toLowerCase()) ? 1 : 0;
      const Te = ue.toLowerCase();
      return Ne && Ne.toLowerCase().includes(Te) || ye && ye.toLowerCase().includes(Te) ? 1 : 0;
    },
    [I]
  ), ka = (Y) => {
    if (Y.key === "Enter")
      Ge(!0);
    else if (Y.key === "Backspace" && !Y.currentTarget.value) {
      const ue = [...ve];
      ue.pop(), ot(ue);
    }
  }, In = (Y) => {
    if (W) return;
    const ue = Dn(Y);
    if (ue != null && ue.disabled) return;
    const ye = ve.includes(Y);
    if (!ye && Xt) {
      Nt(A, "assertive");
      return;
    }
    const Ne = ye ? ve.filter((Te) => Te !== Y) : [...ve, Y];
    ot(Ne), U && Ge(!1);
  }, Yf = () => {
    W || ot([]);
  }, C1 = () => {
    W || Ge((Y) => !Y);
  }, S1 = () => {
    if (W) return;
    const Y = ve.slice(
      0,
      ut.maxCount
    );
    ot(Y);
  }, _1 = () => {
    if (W) return;
    const Y = Ye().filter((ue) => !ue.disabled);
    E !== void 0 && Y.length > E || (ve.length === Y.length ? Yf() : ot(Y.map((ue) => ue.value)), U && Ge(!1));
  }, Fc = re || ((Y) => {
    const { option: ue, location: ye, onRemove: Ne, disabled: Te } = Y;
    return ye === "badge" ? /* @__PURE__ */ u.jsx(
      Jl,
      {
        className: R(
          op({ variant: a }),
          ut.compactMode && "text-xs px-1.5 py-0.5",
          Ve === "mobile" && "max-w-[7.5rem] truncate",
          X && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Te && "cursor-not-allowed"
        ),
        ...!Te && { onRemove: Ne },
        children: ue.label
      }
    ) : ue.label;
  }), Vc = Ye().length > 0, Xo = Qe.trim(), Ea = !!Xo, Kf = !!J && Ea, mr = _.useMemo(() => !J || !Xo ? e : K(e) ? e.map((Y) => ({
    ...Y,
    options: Y.options.filter(
      (ue) => J(ue, Xo)
    )
  })) : e.filter((Y) => J(Y, Xo)), [e, J, Xo, K]), Ma = Se !== void 0 && (!Ea || !!n || !!J), Uf = _.useCallback(
    (Y) => !!Y.disabled || Xt && !ve.includes(Y.value),
    [Xt, ve]
  ), k1 = E !== void 0 && Ye().filter((Y) => !Y.disabled).length > E;
  _.useEffect(() => {
    if (!Z || Pt) return;
    const Y = ce.current;
    ie(Y, i) || (ie(ve, i) || vt(i), ce.current = [...i]);
  }, [
    i,
    ve,
    ie,
    Z,
    Pt
  ]);
  const zc = {
    minWidth: P || (Ve === "mobile" ? "0px" : "12.5rem"),
    maxWidth: L || "100%",
    popoverMaxWidth: L || "32rem",
    width: F ? "auto" : "100%"
  }, qf = _.useMemo(() => me === "default" || ve.length === 0 ? l : ve.map((Y) => {
    var ue;
    return (ue = Dn(Y)) == null ? void 0 : ue.label;
  }).filter(Boolean).join(", "), [ve, Dn, l, me]);
  return _.useEffect(() => {
    We || Dt("");
  }, [We]), _.useEffect(() => {
    const Y = ve.length, ue = Ye(), ye = ue.filter((Ne) => !Ne.disabled).length;
    if (Y !== Zt.current) {
      const Ne = Y - Zt.current;
      if (Ne > 0) {
        const st = ve.slice(-Ne).map((gt) => {
          var Tn;
          return (Tn = ue.find((Br) => Br.value === gt)) == null ? void 0 : Tn.label;
        }).filter(Boolean);
        st.length === 1 ? Nt(
          `${st[0]} selected. ${Y} of ${ye} options selected.`
        ) : Nt(
          `${st.length} options selected. ${Y} of ${ye} total selected.`
        );
      } else Ne < 0 && Nt(
        `Option removed. ${Y} of ${ye} options selected.`
      );
      Zt.current = Y;
    }
    We !== Qt.current && (Nt(
      We ? `Dropdown opened. ${ye} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), Qt.current = We), Qe !== On.current && Qe !== void 0 && (Qe && We && Nt(`Searching for "${Qe}"`), On.current = Qe);
  }, [ve, We, Qe, Nt, Ye]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ u.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: It }),
      /* @__PURE__ */ u.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: fn })
    ] }),
    /* @__PURE__ */ u.jsxs(
      t0,
      {
        open: We,
        onOpenChange: Ge,
        modal: O,
        children: [
          /* @__PURE__ */ u.jsx("div", { id: Q, className: "sr-only", children: d }),
          /* @__PURE__ */ u.jsx("div", { id: G, className: "sr-only", "aria-live": "polite", children: ve.length === 0 ? h : `${ve.length} option${ve.length === 1 ? "" : "s"} selected: ${ve.map((Y) => {
            var ue;
            return (ue = Dn(Y)) == null ? void 0 : ue.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ u.jsxs("div", { className: R(F && "w-auto", j), children: [
            /* @__PURE__ */ u.jsx(zO, { asChild: !0, children: de || /* @__PURE__ */ u.jsx(
              "button",
              {
                ref: le,
                ...dt,
                onClick: C1,
                disabled: W,
                className: R(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  F ? "w-auto" : "w-full",
                  !oe && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  oe && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  ut.compactMode && "min-h-8 text-sm",
                  Ve === "mobile" && "min-h-12"
                ),
                style: {
                  ...zc,
                  maxWidth: `min(${zc.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": We,
                "aria-haspopup": "listbox",
                "aria-controls": We ? ee : void 0,
                "aria-describedby": `${Q} ${G}`,
                "aria-label": `Multi-select: ${ve.length} of ${Ye().length} options selected. ${f}`,
                children: /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ u.jsx(
                        "span",
                        {
                          className: R(
                            "mx-sm",
                            me === "inline" && "truncate",
                            W ? "text-body-disabled" : We || me === "inline" && qf !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: qf
                        }
                      ),
                      /* @__PURE__ */ u.jsx(
                        Js,
                        {
                          className: R(
                            "h-4 mx-xs cursor-pointer",
                            W ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(ge || me === "inline") && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              ve.slice(0, ut.maxCount).map((Y) => {
                const ue = Dn(Y);
                return ue ? /* @__PURE__ */ u.jsx(_.Fragment, { children: Fc({
                  option: ue,
                  location: "badge",
                  onRemove: () => In(Y),
                  disabled: W
                }) }, Y) : null;
              }).filter(Boolean),
              ve.length > ut.maxCount && /* @__PURE__ */ u.jsxs(
                Jl,
                {
                  className: R(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    op({ variant: a }),
                    ut.compactMode && "text-xs px-1.5 py-0.5",
                    X && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    W && "cursor-not-allowed"
                  ),
                  ...!W && { onRemove: S1 },
                  children: [
                    "+ ",
                    ve.length - ut.maxCount,
                    " ",
                    w
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsx(
            Lu,
            {
              id: ee,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: R(
                "p-0 w-auto",
                Ve === "mobile" && "w-[85vw] max-w-[17.5rem]",
                Ve === "tablet" && "max-w-md w-[70vw]",
                Ve === "desktop" && "min-w-[18.75rem]",
                T
              ),
              style: {
                maxWidth: `min(${zc.popoverMaxWidth}, 85vw)`,
                maxHeight: Ve === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ u.jsxs(
                f0,
                {
                  filter: pr,
                  shouldFilter: !n && !J,
                  children: [
                    V && /* @__PURE__ */ u.jsxs("header", { children: [
                      /* @__PURE__ */ u.jsx("div", { id: `${H}-search-help`, className: "sr-only", children: p }),
                      /* @__PURE__ */ u.jsx(
                        h0,
                        {
                          placeholder: M,
                          onKeyDown: ka,
                          value: Qe,
                          onValueChange: (Y) => {
                            Dt(Y), n == null || n(Y);
                          },
                          "aria-label": g,
                          "aria-describedby": `${H}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ u.jsxs(
                      p0,
                      {
                        className: R(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          Ve === "mobile" && "max-h-[calc(50vh-56px)]"
                        ),
                        style: { overscrollBehaviorY: "contain" },
                        children: [
                          r && /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                              children: /* @__PURE__ */ u.jsx(wc.Circular, { size: "sm", children: o })
                            }
                          ),
                          !r && (Vc || Ea) && /* @__PURE__ */ u.jsx(m0, { children: D }),
                          !r && !Vc && !Ea && /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: B
                            }
                          ),
                          !r && !$ && !k1 && !Qe && Vc && /* @__PURE__ */ u.jsx(oi, { children: /* @__PURE__ */ u.jsxs(
                            si,
                            {
                              value: "select-all",
                              onSelect: _1,
                              role: "option",
                              "aria-selected": ve.length === Ye().filter((Y) => !Y.disabled).length,
                              "aria-label": `Select all ${Ye().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ u.jsx(
                                  go,
                                  {
                                    className: "mr-xs",
                                    checked: ve.length === Ye().filter((Y) => !Y.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ u.jsxs("span", { children: [
                                  "(",
                                  x,
                                  Ye().length > 20 ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                                    " - ",
                                    Ye().length,
                                    " ",
                                    C
                                  ] }) : null,
                                  ")"
                                ] })
                              ]
                            },
                            "all"
                          ) }),
                          !r && (K(mr) ? (() => {
                            let Y = 0;
                            const ue = mr.reduce(
                              (st, gt) => st + gt.options.length,
                              0
                            ), ye = mr.map((st) => {
                              const gt = Ma ? st.options.filter(
                                (Tn) => Y++ < Se || ve.includes(Tn.value)
                              ) : st.options;
                              return { ...st, options: gt };
                            }), Ne = ye.reduce(
                              (st, gt) => st + gt.options.length,
                              0
                            ), Te = (Kf ? ue : Ie ?? ue) - Ne;
                            return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                              ye.map((st) => st.options.length === 0 ? null : /* @__PURE__ */ u.jsx(
                                oi,
                                {
                                  heading: st.heading,
                                  children: st.options.map((gt) => {
                                    const Tn = ve.includes(
                                      gt.value
                                    ), Br = Uf(gt);
                                    return /* @__PURE__ */ u.jsxs(
                                      si,
                                      {
                                        value: `${gt.value}:${gt.label}`,
                                        onSelect: () => In(gt.value),
                                        role: "option",
                                        "aria-selected": Tn,
                                        "aria-disabled": Br,
                                        "aria-label": `${gt.label}${Tn ? ", selected" : ", not selected"}${Br ? ", disabled" : ""}`,
                                        className: R(
                                          "cursor-pointer",
                                          Br && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                        ),
                                        disabled: Br,
                                        children: [
                                          /* @__PURE__ */ u.jsx(
                                            go,
                                            {
                                              className: "mr-xs",
                                              checked: Tn
                                            }
                                          ),
                                          /* @__PURE__ */ u.jsx("span", { className: "min-w-0 overflow-hidden", children: Fc({
                                            option: gt,
                                            location: "dropdown",
                                            isSelected: Tn
                                          }) })
                                        ]
                                      },
                                      gt.value
                                    );
                                  })
                                },
                                st.heading
                              )),
                              Ma && Te > 0 && /* @__PURE__ */ u.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: je(Te) })
                            ] });
                          })() : /* @__PURE__ */ u.jsx(oi, { children: (() => {
                            const Y = Ma ? mr.filter(
                              (ye, Ne) => Ne < Se || ve.includes(ye.value)
                            ) : mr, ue = (Kf ? mr.length : Ie ?? mr.length) - Y.length;
                            return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                              Y.map((ye) => {
                                const Ne = ve.includes(
                                  ye.value
                                ), Te = Uf(ye);
                                return /* @__PURE__ */ u.jsxs(
                                  si,
                                  {
                                    value: `${ye.value}:${ye.label}`,
                                    onSelect: () => In(ye.value),
                                    role: "option",
                                    "aria-selected": Ne,
                                    "aria-disabled": Te,
                                    "aria-label": `${ye.label}${Ne ? ", selected" : ", not selected"}${Te ? ", disabled" : ""}`,
                                    className: R(
                                      "cursor-pointer",
                                      Te && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: Te,
                                    children: [
                                      /* @__PURE__ */ u.jsx(
                                        go,
                                        {
                                          className: "mr-xs",
                                          checked: Ne
                                        }
                                      ),
                                      /* @__PURE__ */ u.jsx("span", { className: "min-w-0 overflow-hidden", children: Fc({
                                        option: ye,
                                        location: "dropdown",
                                        isSelected: Ne
                                      }) })
                                    ]
                                  },
                                  ye.value
                                );
                              }),
                              Ma && ue > 0 && /* @__PURE__ */ u.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: je(ue) })
                            ] });
                          })() }))
                        ]
                      }
                    ),
                    /* @__PURE__ */ u.jsxs(
                      "footer",
                      {
                        className: `bg-surface-primary bottom-0 border-t-divider-default
                border-t`,
                        children: [
                          S && /* @__PURE__ */ u.jsx("div", { className: "px-md pt-sm text-body-secondary text-sm", children: S }),
                          /* @__PURE__ */ u.jsxs("div", { className: "px-md py-sm flex items-center justify-between", children: [
                            /* @__PURE__ */ u.jsx(
                              He,
                              {
                                intent: "text",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: Yf,
                                disabled: ve.length === 0,
                                children: b
                              }
                            ),
                            /* @__PURE__ */ u.jsx(
                              He,
                              {
                                intent: "primary",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: () => {
                                  s(ve), Ge(!1);
                                },
                                children: y
                              }
                            )
                          ] })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
      }
    )
  ] });
}, xD = _.forwardRef(
  bD
);
xD.displayName = "MultiSelect";
const wD = pe(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  [&[data-placeholder]]:text-body-placeholder
  disabled:[&[data-placeholder]]:text-body-disabled inline-flex items-center
  justify-between border focus-visible:ring-4 focus-visible:outline-none
  enabled:cursor-pointer data-[state=open]:ring-4`,
  {
    variants: {
      variant: {
        default: "border-interactive-default p-md rounded gap-xs h-11.5 w-full",
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover max-w-62 h-[1.625rem] w-fit
        border-transparent`
      },
      intent: {
        primary: "",
        secondary: ""
      },
      invalid: {
        false: `hover:border-interactive-hover
        focus-visible:ring-interactive-focused
        data-[state=open]:ring-interactive-focused
        data-[state=open]:border-interactive-primary-default`,
        true: `border-interactive-alert-default
        hover:border-interactive-alert-default
        focus-visible:ring-interactive-alert-focused
        data-[state=open]:ring-interactive-alert-focused`
      }
    },
    compoundVariants: [
      {
        intent: "secondary",
        class: "bg-surface-tertiary"
      }
    ],
    defaultVariants: {
      variant: "default",
      intent: "primary"
    }
  }
), CD = pe(
  "bg-surface-primary z-dropdown relative overflow-hidden border",
  {
    variants: {
      variant: {
        default: `border-interactive-default max-h-96 rounded
        min-w-[var(--radix-select-trigger-width)]`,
        compact: `border-divider-default max-h-96 rounded-sm
        min-w-[var(--radix-select-trigger-width)]
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), SD = pe(
  `disabled:bg-surface-disabled disabled:text-interactive-disabled
  data-[disabled]:text-interactive-disabled flex cursor-pointer items-center
  border-0 wrap-anywhere ring-0 focus:outline-0 disabled:cursor-not-allowed
  data-[disabled]:cursor-not-allowed`,
  {
    variants: {
      variant: {
        default: `gap-xs px-md text-body-primary
        hover:bg-interactive-neutral-hover focus:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active py-sm min-h-[2.75rem]`,
        compact: `px-md text-body-primary hover:bg-interactive-neutral-hover
        focus:bg-interactive-neutral-hover min-h-10 py-sm`
      },
      isSelected: {
        false: "",
        true: ""
      }
    },
    compoundVariants: [
      {
        variant: "compact",
        isSelected: !0,
        class: "bg-interactive-neutral-selected text-body-secondary"
      }
    ],
    defaultVariants: {
      variant: "default",
      isSelected: !1
    }
  }
), nd = ({
  options: e,
  placeholder: t,
  className: n,
  icon: r,
  invalid: o = !1,
  variant: s = "default",
  intent: a = "primary",
  value: i,
  hideChevron: c = !1,
  onValueChange: l,
  searchPlaceholder: f = "Search...",
  searchThreshold: d = 7,
  renderValue: h,
  ...p
}) => {
  const [g, m] = _.useState(""), x = _.useRef(null), b = e.filter(
    (E) => !("type" in E) || E.type === "Option" || E.type === void 0
  ).length >= d, y = (E) => {
    if (typeof E == "string") return E;
    if (typeof E == "number") return String(E);
    if (Array.isArray(E)) return E.map(y).join("");
    if (_.isValidElement(E)) {
      const { children: A } = E.props;
      if (A) return y(A);
    }
    return "";
  }, S = (E) => !b || !g || "type" in E && (E.type === "Group" || E.type === "Separator") ? !0 : "label" in E ? y(E.label).toLowerCase().includes(g.toLowerCase()) : !0, w = {
    ...p
  }, M = i !== void 0 ? String(i) : void 0, k = (E) => {
    const A = e.find(
      (O) => "value" in O && String(O.value) === E
    );
    return A && "value" in A ? A.value : E;
  };
  return M !== void 0 && (w.value = M), l && (w.onValueChange = (E) => {
    const A = k(E);
    l(A);
  }), /* @__PURE__ */ u.jsxs(
    fM,
    {
      ...w,
      onOpenChange: (E) => {
        var A;
        E || m(""), (A = w.onOpenChange) == null || A.call(w, E);
      },
      children: [
        /* @__PURE__ */ u.jsxs(
          hM,
          {
            className: R(
              wD({ variant: s, intent: a, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ u.jsxs("div", { className: "inline-flex items-center truncate", children: [
                it(r, {
                  className: R("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ u.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ u.jsx(
                  pM,
                  {
                    placeholder: t || "Select an option",
                    className: R("hidden", {
                      "text-sm": s === "compact"
                    }),
                    children: h
                  }
                ) })
              ] }),
              !c && /* @__PURE__ */ u.jsx(
                mM,
                {
                  className: R("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": p.disabled
                  }),
                  children: /* @__PURE__ */ u.jsx(
                    Js,
                    {
                      className: `top-0.5 relative h-full w-full transition-transform
                duration-200 group-data-[state=open]:rotate-180`
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(vM, { children: /* @__PURE__ */ u.jsxs(
          gM,
          {
            position: "popper",
            sideOffset: -1,
            className: R(CD({ variant: s }), n),
            children: [
              b && /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ u.jsx(Bd, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: x,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: f,
                        value: g,
                        onChange: (E) => m(E.target.value),
                        onKeyDown: (E) => E.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ u.jsx(_M, {}),
              /* @__PURE__ */ u.jsx(yM, { children: e.map((E, A) => {
                const O = S(E);
                switch (E.type) {
                  case "Group":
                    return /* @__PURE__ */ u.jsx(
                      bM,
                      {
                        className: R(!O && "hidden"),
                        children: /* @__PURE__ */ u.jsx(xM, { children: E.label })
                      },
                      A
                    );
                  case "Separator":
                    return /* @__PURE__ */ u.jsx(
                      EM,
                      {
                        className: R(
                          "border-divider-default h-px border-b",
                          !O && "hidden"
                        )
                      },
                      A
                    );
                  default:
                    return /* @__PURE__ */ u.jsxs(
                      wM,
                      {
                        value: String(E.value),
                        disabled: E.disabled ?? !1,
                        className: R(
                          SD({
                            variant: s,
                            isSelected: i === E.value
                          }),
                          !O && "hidden"
                        ),
                        children: [
                          it(E.icon, {
                            className: R("h-5 w-5", {
                              "-ml-xxs": s === "default",
                              "mr-xxs": s === "compact",
                              "text-interactive-disabled": E.disabled
                            })
                          }),
                          /* @__PURE__ */ u.jsx(
                            CM,
                            {
                              className: R("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": E.disabled
                              }),
                              children: E.label
                            }
                          ),
                          /* @__PURE__ */ u.jsx(SM, {})
                        ]
                      },
                      A
                    );
                }
              }) }),
              /* @__PURE__ */ u.jsx(kM, {}),
              /* @__PURE__ */ u.jsx(MM, {})
            ]
          }
        ) })
      ]
    }
  );
};
nd.displayName = "Select";
const _D = pe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), sp = pe(
  "text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"
), kD = _.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    totalItems: n,
    onPageChange: r,
    rowsPerPage: o,
    rowsPerPageOptions: s = [50, 100, 200],
    onRowsPerPageChange: a,
    rowsPerPageLabel: i = "表示行数",
    pageSelectLabel: c = "ページ選択",
    formatPageOption: l = (x, C) => `${x} / ${C}`,
    formatPageValue: f = (x, C, b) => `${x} / ${C}（全${b}件）`,
    showNavigation: d = !0,
    size: h,
    className: p,
    ...g
  }, m) => {
    const x = () => {
      e > 1 && r(e - 1);
    }, C = () => {
      e < t && r(e + 1);
    }, b = (k) => {
      const E = parseInt(k, 10);
      a(E), e > 1 && r(1);
    }, y = (k) => {
      const E = parseInt(k, 10);
      r(E);
    }, S = s.map((k) => ({
      value: k.toString(),
      label: k.toString()
    })), w = Math.max(t, 1), M = Array.from(
      { length: w },
      (k, E) => E + 1
    ).map((k) => ({
      value: k.toString(),
      label: l(k, w, n)
    }));
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: m,
        className: R(_D({ size: h }), p),
        ...g,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ u.jsx("span", { className: R(sp()), children: i }),
            /* @__PURE__ */ u.jsx(
              nd,
              {
                value: o.toString(),
                onValueChange: b,
                options: S
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ u.jsx("span", { className: R(sp()), children: c }),
            /* @__PURE__ */ u.jsx(
              nd,
              {
                value: e.toString(),
                onValueChange: y,
                options: M,
                disabled: n === 0,
                renderValue: f(
                  e,
                  w,
                  n
                ),
                searchThreshold: 1 / 0
              }
            )
          ] }),
          d && /* @__PURE__ */ u.jsxs("div", { className: "gap-md flex items-center", children: [
            /* @__PURE__ */ u.jsx(
              He,
              {
                intent: "text",
                size: "sm",
                icon: z1,
                onClick: x,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ u.jsx(
              He,
              {
                intent: "text",
                size: "sm",
                icon: zd,
                onClick: C,
                disabled: e >= t,
                "aria-label": "Next page"
              }
            )
          ] })
        ]
      }
    );
  }
);
kD.displayName = "Pagination";
const ED = pe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), MD = pe(
  `border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[1.25rem] cursor-[inherit]
  rounded-full border-[1.5px] outline-none focus-visible:ring-4`,
  {
    variants: {
      disabled: {
        true: `bg-interactive-disabled
        data-[state=checked]:bg-shape-interactive-inverse
        data-[state=checked]:disabled:border-shape-interactive-neutral-disabled
        text-body-disabled border-transparent`
      },
      invalid: { true: "" }
    },
    compoundVariants: [
      {
        disabled: !1,
        invalid: !0,
        class: `border-shape-interactive-alert-default text-body-alert
        hover:border-shape-interactive-alert-hover
        data-[state=checked]:border-shape-interactive-alert-default
        data-[state=checked]:hover:border-shape-interactive-alert-hover
        focus-visible:ring-interactive-alert-focused`
      },
      {
        disabled: !1,
        invalid: !1,
        class: `data-[state=checked]:border-interactive-selected
        hover:border-shape-interactive-primary-hover
        data-[state=checked]:hover:border-interactive-hover`
      }
    ],
    defaultVariants: {
      disabled: !1,
      invalid: !1
    }
  }
), PD = pe(
  `group-disabled:after:bg-interactive-disabled relative flex size-full
  cursor-[inherit] items-center justify-center after:block after:size-[.5rem]
  after:rounded-full`,
  {
    variants: {
      invalid: {
        true: `after:bg-interactive-alert-default
        group-hover:after:bg-interactive-alert-hover`,
        false: `after:bg-shape-interactive-primary-selected
        group-hover:after:bg-interactive-primary-hover`
      }
    }
  }
), Fj = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: s = !1,
  ...a
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ u.jsxs("div", { className: R(ED({ disabled: o })), children: [
    /* @__PURE__ */ u.jsx(
      GE,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": s,
        className: R(
          MD({
            disabled: o,
            invalid: s
          })
        ),
        ...a,
        children: /* @__PURE__ */ u.jsx(YE, { className: R(PD({ invalid: s })) })
      }
    ),
    /* @__PURE__ */ u.jsxs(
      "label",
      {
        htmlFor: i,
        className: `gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,
        children: [
          t,
          r
        ]
      }
    )
  ] });
}, Vj = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ u.jsx(
  HE,
  {
    className: R("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), ND = pe(
  `rounded-sm bg-surface-primary border-interactive-default
  hover:border-interactive-hover focus-within:border-interactive-hover
  focus-within:ring-interactive-focused flex w-auto overflow-hidden border
  transition-all focus-within:ring-4`,
  {
    variants: {
      size: {
        sm: "min-h-8 text-sm",
        md: "min-h-10 text-md",
        lg: "min-h-12 text-md"
      },
      state: {
        default: "",
        filled: "",
        disabled: `!border-interactive-default bg-input-disabled
        text-body-disabled pointer-events-none cursor-not-allowed`
      }
    },
    defaultVariants: {
      size: "md",
      state: "default"
    }
  }
), AD = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", RD = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, OD = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, DD = pe(
  `bg-shape-accent-gray-pale px-sm text-md text-shape-primary
  border-l-interactive-default hover:bg-interactive-neutral-hover
  hover:text-interactive-primary-hover focus:bg-shape-accent-gray-pale
  focus:text-interactive-primary-hover
  group-hover/wrapper:bg-shape-accent-gray-pale
  disabled:bg-shape-accent-gray-pale disabled:text-body-disabled
  disabled:hover:bg-shape-accent-gray-pale disabled:hover:text-body-disabled
  focus:ring-interactive-focused
  group-focus-within:border-l-interactive-primary-default cursor-pointer
  items-center justify-center border-l text-center focus:ring-4
  focus:outline-none disabled:cursor-not-allowed`,
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-md"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), ID = "gap-xs text-sm text-body-inverse flex-row", TD = pe(
  `gap-xxs bg-shape-accent-gray-pale px-xs text-md text-accent-gray-strong flex
  items-center rounded-full`,
  {
    variants: {
      size: {
        sm: "h-5 text-sm",
        md: "h-6",
        lg: "h-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), jD = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, $D = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", WD = _.forwardRef(
  ({
    size: e = "md",
    state: t,
    value: n = "",
    className: r,
    onChange: o,
    onSearch: s,
    placeholder: a,
    disabled: i,
    supportText: c,
    searchButtonText: l = "検索",
    searchOnKeywordAdd: f = !1,
    initialKeywords: d,
    ...h
  }, p) => {
    const g = i || t === "disabled", [m, x] = _.useState(
      d ?? []
    ), [C, b] = _.useState(!1);
    let y;
    typeof t == "string" ? y = t : g ? y = "disabled" : m.length > 0 ? y = "filled" : y = "default";
    const S = _.useRef(y), { compositionHandlers: w, guardKeyHandler: M } = _c();
    wn(() => {
      S.current === "filled" && y !== "filled" && x([]), S.current = y;
    }, [y]);
    const k = (O) => {
      g || o && o(O);
    }, E = (O) => {
      if (!g) {
        if (O.key === "Enter" && n.trim()) {
          const j = [...m, n.trim()];
          if (x(j), o) {
            const $ = {
              ...O,
              target: { value: "" }
            };
            o($);
          }
          f && s && s(j), O.preventDefault();
        }
        if ((O.key === "Backspace" || O.key === "Delete") && !n && m.length > 0) {
          const j = m.slice(0, -1);
          x(j), f && s && s(j), O.preventDefault();
        }
      }
    }, A = (O) => {
      if (g) return;
      const j = m.filter(($, V) => V !== O);
      x(j), f && s && s(j);
    };
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: R(
          "group relative flex flex-col",
          g ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": g ? "true" : void 0,
        children: [
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: R(
                ND({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: R(AD), children: [
                  /* @__PURE__ */ u.jsxs("div", { className: R($D, RD), children: [
                    /* @__PURE__ */ u.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ u.jsx(Bd, { size: 20 })
                      }
                    ),
                    m.map((O, j) => /* @__PURE__ */ u.jsxs("span", { className: TD({ size: e }), children: [
                      /* @__PURE__ */ u.jsx("span", { children: O }),
                      /* @__PURE__ */ u.jsx(
                        "button",
                        {
                          type: "button",
                          className: R(
                            jD,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: ($) => {
                            $.stopPropagation(), $.preventDefault(), A(j);
                          },
                          onMouseDown: ($) => {
                            $.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: g,
                          children: /* @__PURE__ */ u.jsx(Nl, { size: 8 })
                        }
                      )
                    ] }, j)),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: p,
                        className: R(OD),
                        type: "text",
                        value: n,
                        onChange: k,
                        onKeyDown: M(E),
                        onCompositionStart: w.onCompositionStart,
                        onCompositionEnd: w.onCompositionEnd,
                        onFocus: (O) => {
                          var j;
                          b(!0), (j = h.onFocus) == null || j.call(h, O);
                        },
                        onBlur: (O) => {
                          var j;
                          b(!1), (j = h.onBlur) == null || j.call(h, O);
                        },
                        placeholder: y === "filled" || m.length > 0 ? "" : a,
                        disabled: g,
                        ...h
                      }
                    )
                  ] }),
                  (n || m.length > 0) && !g && /* @__PURE__ */ u.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), s == null || s([]), x([]);
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ u.jsx(Nl, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: R(
                      DD({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let O = m;
                      n.trim() && (O = [...m, n.trim()], x(O), o && o({
                        target: { value: "" }
                      })), s == null || s(O);
                    },
                    disabled: g,
                    children: l
                  }
                )
              ]
            }
          ),
          c && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: R(
                ID,
                `z-tooltip bg-surface-tooltip-neutral rounded-sm px-xs py-xxs
              leading-tight left-0 mt-xxs absolute top-full`,
                C ? "flex" : "hidden"
              ),
              children: c
            }
          )
        ]
      }
    );
  }
);
WD.displayName = "SearchBar";
const v0 = _.createContext(null), LD = () => {
  const e = _.useContext(v0);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, FD = pe(
  `rounded [&>*+*]:border-surface-default [&>*:first-child]:rounded-l
  [&>*:last-child]:rounded-r flex w-full border [&>*+*]:border-l`,
  {
    variants: {
      invalid: {
        true: "border-surface-alert",
        false: "border-surface-default"
      }
    },
    defaultVariants: { invalid: !1 }
  }
), g0 = _.forwardRef(
  ({
    name: e,
    value: t,
    defaultValue: n,
    onValueChange: r,
    invalid: o = !1,
    disabled: s = !1,
    id: a,
    className: i,
    children: c,
    ...l
  }, f) => {
    const d = _.useId(), h = a ?? `segmented-control-${d}`, p = t !== void 0, [g, m] = _.useState(n), x = p ? t : g, C = _.useCallback(
      (y) => {
        p || m(y), r == null || r(y);
      },
      [p, r]
    ), b = _.useMemo(
      () => ({
        name: e,
        idPrefix: h,
        value: x,
        disabled: s,
        invalid: o,
        onValueChange: C
      }),
      [e, h, x, s, o, C]
    );
    return /* @__PURE__ */ u.jsx(v0.Provider, { value: b, children: /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: f,
        id: a,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": s || void 0,
        className: R(FD({ invalid: o }), i),
        ...l,
        children: c
      }
    ) });
  }
);
g0.displayName = "SegmentedControl.Group";
const VD = pe(
  `gap-xxs px-lg py-sm text-md
  has-[input:focus-visible]:ring-interactive-focused flex flex-1 cursor-pointer
  items-center justify-center select-none has-[input:focus-visible]:relative
  has-[input:focus-visible]:z-10 has-[input:focus-visible]:ring-4`,
  {
    variants: {
      selected: { true: "font-medium", false: "" },
      disabled: { true: "cursor-not-allowed", false: "" }
    },
    compoundVariants: [
      {
        selected: !0,
        disabled: !1,
        class: "bg-interactive-primary-default text-body-inverse"
      },
      {
        selected: !1,
        disabled: !1,
        class: `bg-surface-primary text-body-primary
        hover:bg-interactive-neutral-hover`
      },
      {
        selected: !0,
        disabled: !0,
        class: "bg-interactive-primary-default/50 text-body-inverse opacity-50"
      },
      {
        selected: !1,
        disabled: !0,
        class: "bg-surface-disabled text-body-primary opacity-50"
      }
    ],
    defaultVariants: { selected: !1, disabled: !1 }
  }
), y0 = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: s
}) => {
  const a = LD(), i = a.value !== void 0 && String(a.value) === String(e), c = t || a.disabled, l = r ?? `${a.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ u.jsxs(
    "label",
    {
      htmlFor: l,
      className: R(VD({ selected: i, disabled: c }), o),
      children: [
        /* @__PURE__ */ u.jsx(
          "input",
          {
            id: l,
            type: "radio",
            name: a.name,
            value: String(e),
            checked: i,
            disabled: c,
            "aria-invalid": a.invalid || void 0,
            onChange: () => a.onValueChange(e),
            className: "sr-only"
          }
        ),
        n && it(n, { size: 16, className: "shrink-0" }),
        s
      ]
    }
  );
};
y0.displayName = "SegmentedControl.Option";
const zj = {
  Group: g0,
  Option: y0
}, b0 = Zs(void 0), x0 = Zs(!1), zD = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = _.useState(e), o = _.useCallback(() => {
    r((a) => !a);
  }, []), s = _.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ u.jsx(b0.Provider, { value: s, children: t });
}, BD = ({
  children: e
}) => /* @__PURE__ */ u.jsx(x0.Provider, { value: !0, children: e }), ma = () => {
  const e = Ds(b0);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = Ds(x0);
  return { ...e, isInFooter: t };
}, w0 = _.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: s, toggleCollapsed: a } = ma(), i = s ? n : t, c = /* @__PURE__ */ u.jsx(
    "button",
    {
      ref: o,
      className: R(
        `p-xxs bg-surface-primary text-interactive-primary-default top-2.5
        right-0 rounded ease-in-out z-slight absolute cursor-pointer
        transition-all duration-200`,
        e
      ),
      style: {
        transform: "translateX(50%)"
      },
      onClick: a,
      ...r,
      children: s ? /* @__PURE__ */ u.jsx(n2, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ u.jsx(e2, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ u.jsx(rn, { content: i, side: "right", delayDuration: 0, children: c }) : c;
});
w0.displayName = "SideNavigationCollapseButton";
const HD = pe(
  `bg-surface-primary shadow-overlay top-0 z-navigation fixed flex h-full
  flex-col overflow-visible`,
  {
    variants: {
      width: {
        expanded: "w-(--cc-side-navigation-width-expanded)",
        collapsed: "gap-sm w-(--cc-side-navigation-width-collapsed)"
      }
    },
    defaultVariants: {
      width: "expanded"
    }
  }
), GD = _.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ u.jsx(zD, { defaultCollapsed: e, children: /* @__PURE__ */ u.jsx(C0, { ref: n, ...t }) }));
GD.displayName = "SideNavigation";
const C0 = _.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: s = !1,
    collapseLabel: a,
    expandLabel: i,
    ...c
  }, l) => {
    const { isCollapsed: f } = ma(), d = t || (f ? "collapsed" : "expanded");
    return /* @__PURE__ */ u.jsxs(
      "nav",
      {
        ref: l,
        className: R(
          HD({ width: d }),
          "group",
          e
        ),
        "data-cc-side-navigation": "",
        "data-collapsed": d === "collapsed",
        ...c,
        children: [
          n && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: R(
                "p-sm",
                f ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ u.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ u.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ u.jsx(BD, { children: r }) }),
          s && /* @__PURE__ */ u.jsx(
            w0,
            {
              collapseLabel: a,
              expandLabel: i
            }
          )
        ]
      }
    );
  }
);
C0.displayName = "SideNavigationContent";
const YD = pe(
  `gap-xs px-xs py-xs focus-visible:ring-interactive-focused
  aria-[current="page"]:bg-interactive-neutral-selected
  aria-[current="page"]:text-interactive-primary-active mb-0 rounded-sm
  box-border flex w-full items-center transition-colors focus:outline-none
  focus-visible:ring-2`,
  {
    variants: {
      variant: {
        default: `text-body-primary hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active`,
        selected: "bg-interactive-neutral-selected text-interactive-primary-active",
        disabled: "text-interactive-disabled cursor-not-allowed"
      },
      size: {
        sm: "h-8 text-sm",
        md: "text-md h-8"
      },
      collapsed: {
        true: "px-xxs justify-center"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), KD = _.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    label: o,
    tooltipLabel: s,
    children: a,
    disabled: i,
    ...c
  }, l) => {
    const { isCollapsed: f, isInFooter: d } = ma(), h = r ? Ro : "button", p = i ? "disabled" : t, g = /* @__PURE__ */ u.jsx(
      h,
      {
        ref: l,
        className: R(
          YD({
            variant: p,
            size: n,
            collapsed: f
          }),
          !d && "font-bold",
          e
        ),
        disabled: i,
        ...c,
        children: a || o
      }
    );
    return f && s ? /* @__PURE__ */ u.jsx(rn, { content: s, side: "right", delayDuration: 0, children: g }) : g;
  }
);
KD.displayName = "SideNavigationItem";
const UD = pe("flex flex-col", {
  variants: {
    isCollapsed: {
      true: "px-xs gap-sm",
      false: "px-sm items-start"
    },
    isLast: { true: "" }
  },
  compoundVariants: [
    {
      isCollapsed: !0,
      isLast: !1,
      className: "after:border-divider-default items-center after:w-full after:border-b"
    }
  ],
  defaultVariants: {
    isCollapsed: !1,
    isLast: !1
  }
}), qD = _.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, s) => {
  const { isCollapsed: a } = ma();
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      className: R(
        UD({ isCollapsed: a, isLast: r }),
        e
      ),
      ...o,
      children: [
        t && !a && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: `text-body-secondary px-xxs py-xxs mb-xxs text-xs
            font-medium leading-none`,
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: "space-y-xxxs w-full", children: n })
      ]
    }
  );
});
qD.displayName = "SideNavigationSection";
const XD = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ZD = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Bj = () => {
  const { isCollapsed: e } = ma();
  return /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ u.jsx(
      "img",
      {
        src: XD,
        alt: "SDS管理",
        className: `h-auto w-[5.8125rem] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ u.jsx(
      "img",
      {
        src: ZD,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
};
var QD = Object.defineProperty, JD = Object.defineProperties, e5 = Object.getOwnPropertyDescriptors, ap = Object.getOwnPropertySymbols, t5 = Object.prototype.hasOwnProperty, n5 = Object.prototype.propertyIsEnumerable, ip = (e, t, n) => t in e ? QD(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qr = (e, t) => {
  for (var n in t || (t = {}))
    t5.call(t, n) && ip(e, n, t[n]);
  if (ap)
    for (var n of ap(t))
      n5.call(t, n) && ip(e, n, t[n]);
  return e;
}, Xr = (e, t) => JD(e, e5(t));
function r5(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ha(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function ul(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function o5(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (y, S) => y === S || y !== null && typeof y == "object" && "id" in y && y.id === S;
  if (Array.isArray(e)) {
    const y = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (y === -1 || S === -1) {
      if (ul(s)) {
        const w = s.initialIndex, M = s.index;
        return w === M || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, M);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== y)
        return n(e, y, w);
    }
    return n(e, y, S);
  }
  const l = Object.entries(e);
  let f = -1, d, h = -1, p;
  for (const [y, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (d = y)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = y)), f !== -1 && h !== -1)
      break;
  if (f === -1 && ul(s)) {
    const y = s.initialGroup == null ? void 0 : Ha(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ha(e, s.group), M = s.index;
    if (y == null || w == null || y === w && S === M)
      return "preventDefault" in t && t.preventDefault(), e;
    if (y === w)
      return Xr(qr({}, e), {
        [y]: n(e[y], S, M)
      });
    const k = e[y][S];
    return Xr(qr({}, e), {
      [y]: [
        ...e[y].slice(0, S),
        ...e[y].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, M),
        k,
        ...e[w].slice(M)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: g } = s.manager, m = (o = (r = g.shape) == null ? void 0 : r.current.center) != null ? o : g.position.current;
  if (p == null) {
    const y = Ha(e, a.id);
    if (y != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[y].length : 0;
      p = y, h = S;
    }
  }
  if (d == null || p == null || d === p && f === h) {
    if (d != null && d === p && f === h && ul(s)) {
      const y = s.group == null ? void 0 : Ha(e, s.group), S = s.group != null && y !== d, w = s.index !== f;
      if (S || w) {
        const M = s.group == null ? d : y;
        if (M != null) {
          if (d === M)
            return Xr(qr({}, e), {
              [d]: n(
                e[d],
                f,
                s.index
              )
            });
          const k = e[d][f];
          return Xr(qr({}, e), {
            [d]: [
              ...e[d].slice(0, f),
              ...e[d].slice(f + 1)
            ],
            [M]: [
              ...e[M].slice(0, s.index),
              k,
              ...e[M].slice(s.index)
            ]
          });
        }
      }
    }
    return "preventDefault" in t && t.preventDefault(), e;
  }
  if (d === p)
    return Xr(qr({}, e), {
      [d]: n(e[d], f, h)
    });
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[d][f];
  return Xr(qr({}, e), {
    [d]: [
      ...e[d].slice(0, f),
      ...e[d].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      b,
      ...e[p].slice(h + C)
    ]
  });
}
function s5(e, t) {
  return o5(e, t, r5);
}
var a5 = Symbol.for("preact-signals");
function Mc() {
  if (Ln > 1)
    Ln--;
  else {
    var e, t = !1;
    for ((function() {
      var o = Ni;
      for (Ni = void 0; o !== void 0; ) {
        var s = o.S;
        if (s.v === o.v) for (var a = s.t; a !== void 0; a = a.x) a.i === o.i && (a.i = s.i);
        o = o.o;
      }
    })(); Es !== void 0; ) {
      var n = Es;
      for (Es = void 0, Pi++; n !== void 0; ) {
        var r = n.u;
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && _0(n)) try {
          n.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        n = r;
      }
    }
    if (Pi = 0, Ln--, t) throw e;
  }
}
function Be(e) {
  if (Ln > 0) return e();
  rd = ++i5, Ln++;
  try {
    return e();
  } finally {
    Mc();
  }
}
var ks, Le = void 0;
function Ee(e) {
  var t = Le, n = ks;
  Le = void 0, ks = void 0;
  try {
    return e();
  } finally {
    Le = t, ks = n;
  }
}
var Es = void 0, Ln = 0, Pi = 0, i5 = 0, rd = 0, Ni = void 0, Ai = 0;
function S0(e) {
  if (Le !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== Le)
      return t = { i: 0, S: e, p: Le.s, n: void 0, t: Le, e: void 0, x: void 0, r: t }, Le.s !== void 0 && (Le.s.n = t), Le.s = t, e.n = t, 32 & Le.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = Le.s, t.n = void 0, Le.s.n = t, Le.s = t), t;
  }
}
function Mt(e, t) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
Mt.prototype.brand = a5;
Mt.prototype.h = function() {
  return !0;
};
Mt.prototype.S = function(e) {
  var t = this, n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Ee(function() {
    var r;
    (r = t.W) == null || r.call(t);
  }));
};
Mt.prototype.U = function(e) {
  var t = this;
  if (this.t !== void 0) {
    var n = e.e, r = e.x;
    n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && Ee(function() {
      var o;
      (o = t.Z) == null || o.call(t);
    }));
  }
};
Mt.prototype.subscribe = function(e) {
  var t = this;
  return Ut(function() {
    var n = t.value;
    Ee(function() {
      return e(n);
    });
  }, { name: "sub" });
};
Mt.prototype.valueOf = function() {
  return this.value;
};
Mt.prototype.toString = function() {
  return this.value + "";
};
Mt.prototype.toJSON = function() {
  return this.value;
};
Mt.prototype.peek = function() {
  var e = this;
  return Ee(function() {
    return e.value;
  });
};
Object.defineProperty(Mt.prototype, "value", { get: function() {
  var e = S0(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Pi > 100) throw new Error("Cycle detected");
    (function(n) {
      Ln !== 0 && Pi === 0 && n.l !== rd && (n.l = rd, Ni = { S: n, v: n.v, i: n.i, o: Ni });
    })(this), this.v = e, this.i++, Ai++, Ln++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Mc();
    }
  }
} });
function Fo(e, t) {
  return new Mt(e, t);
}
function _0(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function k0(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function E0(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Lr(e, t) {
  Mt.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Ai - 1, this.f = 4;
}
Lr.prototype = new Mt();
Lr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ai)) return !0;
  if (this.g = Ai, this.f |= 1, this.i > 0 && !_0(this))
    return this.f &= -2, !0;
  var e = Le;
  try {
    k0(this), Le = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return Le = e, E0(this), this.f &= -2, !0;
};
Lr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Mt.prototype.S.call(this, e);
};
Lr.prototype.U = function(e) {
  if (this.t !== void 0 && (Mt.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
  }
};
Lr.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(Lr.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = S0(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function cp(e, t) {
  return new Lr(e, t);
}
function M0(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    Ln++;
    var n = Le;
    Le = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Vu(e), r;
    } finally {
      Le = n, Mc();
    }
  }
}
function Vu(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, M0(e);
}
function c5(e) {
  if (Le !== this) throw new Error("Out-of-order effect");
  E0(this), Le = e, this.f &= -2, 8 & this.f && Vu(this), Mc();
}
function Vo(e, t) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t == null ? void 0 : t.name, ks && ks.push(this);
}
Vo.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var t = this.x();
    typeof t == "function" && (this.m = t);
  } finally {
    e();
  }
};
Vo.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, M0(this), k0(this), Ln++;
  var e = Le;
  return Le = this, c5.bind(this, e);
};
Vo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = Es, Es = this);
};
Vo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Vu(this);
};
Vo.prototype.dispose = function() {
  this.d();
};
function Ut(e, t) {
  var n = new Vo(e, t);
  try {
    n.c();
  } catch (o) {
    throw n.d(), o;
  }
  var r = n.d.bind(n);
  return r[Symbol.dispose] = r, r;
}
var l5 = Object.create, zu = Object.defineProperty, d5 = Object.defineProperties, u5 = Object.getOwnPropertyDescriptor, f5 = Object.getOwnPropertyDescriptors, lp = Object.getOwnPropertySymbols, h5 = Object.prototype.hasOwnProperty, p5 = Object.prototype.propertyIsEnumerable, m5 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), zo = (e) => {
  throw TypeError(e);
}, od = (e, t, n) => t in e ? zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, v5 = (e, t) => {
  for (var n in t || (t = {}))
    h5.call(t, n) && od(e, n, t[n]);
  if (lp)
    for (var n of lp(t))
      p5.call(t, n) && od(e, n, t[n]);
  return e;
}, g5 = (e, t) => d5(e, f5(t)), dp = (e, t) => zu(e, "name", { value: t, configurable: !0 }), y5 = (e) => {
  var t;
  return [, , , l5((t = void 0) != null ? t : null)];
}, P0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], cs = (e) => e !== void 0 && typeof e != "function" ? zo("Function expected") : e, b5 = (e, t, n, r, o) => ({ kind: P0[e], name: t, metadata: r, addInitializer: (s) => n._ ? zo("Already initialized") : o.push(cs(s || null)) }), N0 = (e, t) => od(t, m5("metadata"), e[3]), gr = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Bo = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), g = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, m = P0[d + 5], x = d > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && u5(d < 4 ? o : { get [n]() {
    return Bt(this, s);
  }, set [n](S) {
    return Zn(this, s, S);
  } }, n));
  d ? p && d < 4 && dp(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : dp(o, n);
  for (var y = r.length - 1; y >= 0; y--)
    l = b5(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => x5(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? Bt : w5)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => Zn(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[y])(d ? d < 4 ? p ? s : b[m] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? cs(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? zo("Object expected") : (cs(a = i.get) && (b.get = a), cs(a = i.set) && (b.set = a), cs(a = i.init) && x.unshift(a));
  return d || N0(e, o), b && zu(o, n, b), p ? d ^ 4 ? s : b : o;
}, Bu = (e, t, n) => t.has(e) || zo("Cannot " + n), x5 = (e, t) => Object(t) !== t ? zo('Cannot use the "in" operator on this value') : e.has(t), Bt = (e, t, n) => (Bu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ls = (e, t, n) => t.has(e) ? zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zn = (e, t, n, r) => (Bu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), w5 = (e, t, n) => (Bu(e, t, "access private method"), n);
function sd(e, t) {
  if (t) {
    let n;
    return cp(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return cp(e);
}
function mn(e, t) {
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null) return !1;
  if (typeof e == "function" && typeof t == "function")
    return e === t;
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size)
      return !1;
    for (const n of e)
      if (!t.has(n))
        return !1;
    return !0;
  }
  if (Array.isArray(e))
    return !Array.isArray(t) || e.length !== t.length ? !1 : !e.some(
      (r, o) => !mn(r, t[o])
    );
  if (typeof e == "object" && typeof t == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    return n.length !== r.length ? !1 : !n.some(
      (s) => !mn(e[s], t[s])
    );
  }
  return !1;
}
function Me({ get: e }, t) {
  return {
    init(n) {
      return Fo(n);
    },
    get() {
      return e.call(this).value;
    },
    set(n) {
      const r = e.call(this);
      r.peek() !== n && (r.value = n);
    }
  };
}
function Ue(e, t) {
  const n = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = n.get(this);
    return r || (r = sd(e.bind(this)), n.set(this, r)), r.value;
  };
}
function fl(e = !0) {
  return function(t, n) {
    n.addInitializer(function() {
      const r = n.kind === "field" ? this : n.static ? this : Object.getPrototypeOf(this), o = Object.getOwnPropertyDescriptor(r, n.name);
      o && Object.defineProperty(r, n.name, g5(v5({}, o), { enumerable: e }));
    });
  };
}
function va(...e) {
  const t = e.map((n) => Ut(n));
  return () => t.forEach((n) => n());
}
var A0, R0, O0, D0, I0, T0, Ct, Hu, hl, ad, id, bt, Gu, pl, j0, cd, Yu, ml, ld, dd;
T0 = [Me], I0 = [Me], D0 = [Me], O0 = [fl()], R0 = [fl()], A0 = [fl()];
var Fr = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, gr(Ct, 5, this), ls(this, bt), ls(this, Hu, gr(Ct, 8, this)), gr(Ct, 11, this), ls(this, Gu, gr(Ct, 12, this)), gr(Ct, 15, this), ls(this, Yu, gr(Ct, 16, this)), gr(Ct, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return Bt(this, bt, ld);
  }
  get initial() {
    return Bt(this, bt, ad);
  }
  get previous() {
    return Bt(this, bt, j0);
  }
  /** Set the current value */
  set current(e) {
    const t = Ee(() => Bt(this, bt, ld));
    e && t && this.equals(t, e) || Be(() => {
      Bt(this, bt, ad) || Zn(this, bt, e, id), Zn(this, bt, t, cd), Zn(this, bt, e, dd);
    });
  }
  /** Reset the state to the initial value */
  reset(e = this.defaultValue) {
    Be(() => {
      Zn(this, bt, void 0, cd), Zn(this, bt, e, id), Zn(this, bt, e, dd);
    });
  }
};
Ct = y5();
Hu = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakSet();
Gu = /* @__PURE__ */ new WeakMap();
Yu = /* @__PURE__ */ new WeakMap();
hl = Bo(Ct, 20, "#initial", T0, bt, Hu), ad = hl.get, id = hl.set;
pl = Bo(Ct, 20, "#previous", I0, bt, Gu), j0 = pl.get, cd = pl.set;
ml = Bo(Ct, 20, "#current", D0, bt, Yu), ld = ml.get, dd = ml.set;
Bo(Ct, 2, "current", O0, Fr);
Bo(Ct, 2, "initial", R0, Fr);
Bo(Ct, 2, "previous", A0, Fr);
N0(Ct, Fr);
function vl(e) {
  return Ee(() => {
    const t = {};
    for (const n in e)
      t[n] = e[n];
    return t;
  });
}
var br, C5 = class {
  constructor() {
    ls(this, br, /* @__PURE__ */ new WeakMap());
  }
  get(e, t) {
    var n;
    return e ? (n = Bt(this, br).get(e)) == null ? void 0 : n.get(t) : void 0;
  }
  set(e, t, n) {
    var r;
    if (e)
      return Bt(this, br).has(e) || Bt(this, br).set(e, /* @__PURE__ */ new Map()), (r = Bt(this, br).get(e)) == null ? void 0 : r.set(t, n);
  }
  clear(e) {
    var t;
    return e ? (t = Bt(this, br).get(e)) == null ? void 0 : t.clear() : void 0;
  }
};
br = /* @__PURE__ */ new WeakMap();
var S5 = Object.create, $0 = Object.defineProperty, _5 = Object.getOwnPropertyDescriptor, up = Object.getOwnPropertySymbols, k5 = Object.prototype.hasOwnProperty, E5 = Object.prototype.propertyIsEnumerable, W0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Pc = (e) => {
  throw TypeError(e);
}, fp = Math.pow, ud = (e, t, n) => t in e ? $0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, M5 = (e, t) => {
  for (var n in t || (t = {}))
    k5.call(t, n) && ud(e, n, t[n]);
  if (up)
    for (var n of up(t))
      E5.call(t, n) && ud(e, n, t[n]);
  return e;
}, P5 = (e) => {
  var t;
  return [, , , S5((t = e == null ? void 0 : e[W0("metadata")]) != null ? t : null)];
}, L0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], F0 = (e) => e !== void 0 && typeof e != "function" ? Pc("Function expected") : e, N5 = (e, t, n, r, o) => ({ kind: L0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Pc("Already initialized") : o.push(F0(s || null)) }), A5 = (e, t) => ud(t, W0("metadata"), e[3]), R5 = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, V0 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, d = !1, h = !1, p = 2, g = L0[f + 5], m = e[p] || (e[p] = []), x = (o = o.prototype, _5(o, n)), C = r.length - 1; C >= 0; C--)
    c = N5(f, n, i = {}, e[3], m), c.static = d, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(x[g], c), i._ = 1, F0(a) && (x[g] = a);
  return x && $0(o, n, x), o;
}, z0 = (e, t, n) => t.has(e) || Pc("Cannot " + n), O5 = (e, t, n) => (z0(e, t, "read from private field"), t.get(e)), D5 = (e, t, n) => t.has(e) ? Pc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), I5 = (e, t, n, r) => (z0(e, t, "write to private field"), t.set(e, n), n), Ht = class fd {
  /**
   * @param {number} Coordinate of the point on the horizontal axis
   * @param {number} Coordinate of the point on the vertical axis
   */
  constructor(t, n) {
    this.x = t, this.y = n;
  }
  /**
   * Returns the delta between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static delta(t, n) {
    return new fd(t.x - n.x, t.y - n.y);
  }
  /**
   * Returns the distance (hypotenuse) between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static distance(t, n) {
    return Math.hypot(t.x - n.x, t.y - n.y);
  }
  /**
   * Returns true if both points are equal.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static equals(t, n) {
    return t.x === n.x && t.y === n.y;
  }
  static from({ x: t, y: n }) {
    return new fd(t, n);
  }
}, kn = class xr {
  constructor(t, n, r, o) {
    this.left = t, this.top = n, this.width = r, this.height = o, this.scale = {
      x: 1,
      y: 1
    };
  }
  get inverseScale() {
    return {
      x: 1 / this.scale.x,
      y: 1 / this.scale.y
    };
  }
  translate(t, n) {
    const { top: r, left: o, width: s, height: a, scale: i } = this, c = new xr(o + t, r + n, s, a);
    return c.scale = M5({}, i), c;
  }
  get boundingRectangle() {
    const { width: t, height: n, left: r, top: o, right: s, bottom: a } = this;
    return { width: t, height: n, left: r, top: o, right: s, bottom: a };
  }
  get center() {
    const { left: t, top: n, right: r, bottom: o } = this;
    return new Ht((t + r) / 2, (n + o) / 2);
  }
  get area() {
    const { width: t, height: n } = this;
    return t * n;
  }
  equals(t) {
    if (!(t instanceof xr))
      return !1;
    const { left: n, top: r, width: o, height: s } = this;
    return n === t.left && r === t.top && o === t.width && s === t.height;
  }
  containsPoint(t) {
    const { top: n, left: r, bottom: o, right: s } = this;
    return n <= t.y && t.y <= o && r <= t.x && t.x <= s;
  }
  intersectionArea(t) {
    return t instanceof xr ? T5(this, t) : 0;
  }
  intersectionRatio(t) {
    const { area: n } = this, r = this.intersectionArea(t);
    return r / (t.area + n - r);
  }
  get bottom() {
    const { top: t, height: n } = this;
    return t + n;
  }
  get right() {
    const { left: t, width: n } = this;
    return t + n;
  }
  get aspectRatio() {
    const { width: t, height: n } = this;
    return t / n;
  }
  get corners() {
    return [
      { x: this.left, y: this.top },
      { x: this.right, y: this.top },
      { x: this.left, y: this.bottom },
      { x: this.right, y: this.bottom }
    ];
  }
  static from({ top: t, left: n, width: r, height: o }) {
    return new xr(n, t, r, o);
  }
  static delta(t, n, r = { x: "center", y: "center" }) {
    const o = (s, a) => {
      const i = r[a], c = a === "x" ? s.left : s.top, l = a === "x" ? s.width : s.height;
      return i == "start" ? c : i == "end" ? c + l : c + l / 2;
    };
    return Ht.delta(
      { x: o(t, "x"), y: o(t, "y") },
      { x: o(n, "x"), y: o(n, "y") }
    );
  }
  static intersectionRatio(t, n) {
    return xr.from(t).intersectionRatio(xr.from(n));
  }
};
function T5(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), a = o - r, i = s - n;
  return r < o && n < s ? a * i : 0;
}
var B0, H0, hd, ai, ga, Nc = class extends (hd = Fr, H0 = [Ue], B0 = [Ue], hd) {
  constructor(t) {
    const n = Ht.from(t);
    super(n, (r, o) => Ht.equals(r, o)), R5(ga, 5, this), D5(this, ai, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return Ht.delta(this.current, this.initial);
  }
  get direction() {
    const { current: t, previous: n } = this;
    if (!n) return null;
    const r = {
      x: t.x - n.x,
      y: t.y - n.y
    };
    return !r.x && !r.y ? null : Math.abs(r.x) > Math.abs(r.y) ? r.x > 0 ? "right" : "left" : r.y > 0 ? "down" : "up";
  }
  get current() {
    return super.current;
  }
  set current(t) {
    const { current: n } = this, r = Ht.from(t), o = {
      x: r.x - n.x,
      y: r.y - n.y
    }, s = Date.now(), a = s - O5(this, ai), i = (c) => Math.round(c / a * 100);
    Be(() => {
      I5(this, ai, s), this.velocity = {
        x: i(o.x),
        y: i(o.y)
      }, super.current = r;
    });
  }
  reset(t = this.defaultValue) {
    super.reset(Ht.from(t)), this.velocity = { x: 0, y: 0 };
  }
};
ga = P5(hd);
ai = /* @__PURE__ */ new WeakMap();
V0(ga, 2, "delta", H0, Nc);
V0(ga, 2, "direction", B0, Nc);
A5(ga, Nc);
function pd({ x: e, y: t }, n) {
  const r = Math.abs(e), o = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(fp(r, 2) + fp(o, 2)) > n : "x" in n && "y" in n ? r > n.x && o > n.y : "x" in n ? r > n.x : "y" in n ? o > n.y : !1;
}
var G0 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(G0 || {}), Y0 = Object.values(G0), j5 = Object.create, Ku = Object.defineProperty, $5 = Object.defineProperties, W5 = Object.getOwnPropertyDescriptor, L5 = Object.getOwnPropertyDescriptors, Ri = Object.getOwnPropertySymbols, K0 = Object.prototype.hasOwnProperty, U0 = Object.prototype.propertyIsEnumerable, q0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ho = (e) => {
  throw TypeError(e);
}, md = (e, t, n) => t in e ? Ku(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Uu = (e, t) => {
  for (var n in t || (t = {}))
    K0.call(t, n) && md(e, n, t[n]);
  if (Ri)
    for (var n of Ri(t))
      U0.call(t, n) && md(e, n, t[n]);
  return e;
}, qu = (e, t) => $5(e, L5(t)), hp = (e, t) => Ku(e, "name", { value: t, configurable: !0 }), X0 = (e, t) => {
  var n = {};
  for (var r in e)
    K0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ri)
    for (var r of Ri(e))
      t.indexOf(r) < 0 && U0.call(e, r) && (n[r] = e[r]);
  return n;
}, Go = (e) => {
  var t;
  return [, , , j5((t = e == null ? void 0 : e[q0("metadata")]) != null ? t : null)];
}, Z0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ds = (e) => e !== void 0 && typeof e != "function" ? Ho("Function expected") : e, F5 = (e, t, n, r, o) => ({ kind: Z0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ho("Already initialized") : o.push(ds(s || null)) }), Vr = (e, t) => md(t, q0("metadata"), e[3]), we = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Pe = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), g = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, m = Z0[d + 5], x = d > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && W5(d < 4 ? o : { get [n]() {
    return Ke(this, s);
  }, set [n](S) {
    return Lt(this, s, S);
  } }, n));
  d ? p && d < 4 && hp(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : hp(o, n);
  for (var y = r.length - 1; y >= 0; y--)
    l = F5(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => V5(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? Ke : Q0)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => Lt(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[y])(d ? d < 4 ? p ? s : b[m] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? ds(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? Ho("Object expected") : (ds(a = i.get) && (b.get = a), ds(a = i.set) && (b.set = a), ds(a = i.init) && x.unshift(a));
  return d || Vr(e, o), b && Ku(o, n, b), p ? d ^ 4 ? s : b : o;
}, Xu = (e, t, n) => t.has(e) || Ho("Cannot " + n), V5 = (e, t) => Object(t) !== t ? Ho('Cannot use the "in" operator on this value') : e.has(t), Ke = (e, t, n) => (Xu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Re = (e, t, n) => t.has(e) ? Ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Lt = (e, t, n, r) => (Xu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Q0 = (e, t, n) => (Xu(e, t, "access private method"), n);
function J0(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function ya(e) {
  return (t) => J0(e, t);
}
function zs(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var ex, Bs, Zu, ii;
ex = [Me];
var wt = class {
  /**
   * Creates a new plugin instance.
   *
   * @param manager - The drag and drop manager that owns this plugin
   * @param options - Optional configuration for the plugin
   */
  constructor(e, t) {
    this.manager = e, this.options = t, Re(this, Zu, we(Bs, 8, this, !1)), we(Bs, 11, this), Re(this, ii, /* @__PURE__ */ new Set());
  }
  /**
   * Enables a disabled plugin instance.
   *
   * @remarks
   * This method triggers effects when called.
   */
  enable() {
    this.disabled = !1;
  }
  /**
   * Disables an enabled plugin instance.
   *
   * @remarks
   * This method triggers effects when called.
   */
  disable() {
    this.disabled = !0;
  }
  /**
   * Checks if the plugin instance is disabled.
   *
   * @returns true if the plugin is disabled
   * @remarks
   * This method does not trigger effects when accessed.
   */
  isDisabled() {
    return Ee(() => this.disabled);
  }
  /**
   * Configures a plugin instance with new options.
   *
   * @param options - The new options to apply
   */
  configure(e) {
    this.options = e;
  }
  /**
   * Registers an effect that will be cleaned up when the plugin is destroyed.
   *
   * @param callback - The effect callback to register
   * @returns A function to dispose of the effect
   */
  registerEffect(e) {
    const t = Ut(e.bind(this));
    return Ke(this, ii).add(t), t;
  }
  /**
   * Destroys a plugin instance and cleans up its resources.
   *
   * @remarks
   * This method:
   * - Calls all registered cleanup functions
   * - Should be overridden by subclasses to clean up additional resources
   */
  destroy() {
    Ke(this, ii).forEach((e) => e());
  }
  /**
   * Configures a plugin constructor with options.
   *
   * @param options - The options to configure the constructor with
   * @returns The configured plugin constructor
   *
   * @remarks
   * This method is used to configure the options that the
   * plugin constructor will use to create plugin instances.
   */
  static configure(e) {
    return J0(this, e);
  }
};
Bs = Go(null);
Zu = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
Pe(Bs, 4, "disabled", ex, wt, Zu);
Vr(Bs, wt);
var ba = class extends wt {
}, ci, gl = class {
  /**
   * Creates a new plugin registry.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), Re(this, ci, []);
  }
  /**
   * Gets all registered plugin instances.
   *
   * @returns An array of all active plugin instances
   */
  get values() {
    return Array.from(this.instances.values());
  }
  /**
   * Sets the list of plugins to be used by the registry.
   *
   * @param entries - Array of plugin constructors or descriptors
   * @remarks
   * This method:
   * - Filters out duplicate plugins
   * - Unregisters plugins that are no longer in use
   * - Registers new plugins with their options
   */
  set values(e) {
    const t = e.map(zs).reduce((r, o) => {
      const s = r.find(({ plugin: a }) => a === o.plugin);
      return s ? (s.options = o.options, r) : [...r, o];
    }, []), n = t.map(({ plugin: r }) => r);
    for (const r of Ke(this, ci))
      if (!n.includes(r)) {
        if (r.prototype instanceof ba)
          continue;
        this.unregister(r);
      }
    for (const { plugin: r, options: o } of t)
      this.register(r, o);
    Lt(this, ci, n);
  }
  /**
   * Gets a plugin instance by its constructor.
   *
   * @param plugin - The plugin constructor to look up
   * @returns The plugin instance or undefined if not found
   */
  get(e) {
    return this.instances.get(e);
  }
  /**
   * Registers a new plugin instance.
   *
   * @param plugin - The plugin constructor to register
   * @param options - Optional configuration for the plugin
   * @returns The registered plugin instance
   * @remarks
   * If the plugin is already registered, its options will be updated
   * and the existing instance will be returned.
   */
  register(e, t) {
    const n = this.instances.get(e);
    if (n)
      return n.options !== t && (n.options = t), n;
    const r = new e(this.manager, t);
    return this.instances.set(e, r), r;
  }
  /**
   * Unregisters a plugin instance.
   *
   * @param plugin - The plugin constructor to unregister
   * @remarks
   * This method:
   * - Destroys the plugin instance
   * - Removes it from the registry
   */
  unregister(e) {
    const t = this.instances.get(e);
    t && (t.destroy(), this.instances.delete(e));
  }
  /**
   * Destroys all registered plugin instances.
   *
   * @remarks
   * This method:
   * - Calls destroy() on all plugin instances
   * - Clears the registry
   */
  destroy() {
    for (const e of this.instances.values())
      e.destroy();
    this.instances.clear();
  }
};
ci = /* @__PURE__ */ new WeakMap();
function z5(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Ga = [], ro, oo, B5 = class extends wt {
  /**
   * Creates a new CollisionObserver instance.
   *
   * @param manager - The drag drop manager instance
   */
  constructor(e) {
    super(e), Re(this, ro), Re(this, oo), this.computeCollisions = this.computeCollisions.bind(this), Lt(this, oo, Fo(Ga)), this.destroy = va(
      () => {
        const t = this.computeCollisions(), n = Ee(
          () => this.manager.dragOperation.position.current
        );
        if (t !== Ga) {
          const r = Ke(this, ro);
          if (Lt(this, ro, n), r && n.x == r.x && n.y == r.y)
            return;
        } else
          Lt(this, ro, void 0);
        Ke(this, oo).value = t;
      },
      () => {
        const { dragOperation: t } = this.manager;
        t.status.initialized && this.forceUpdate();
      }
    );
  }
  /**
   * Forces an immediate update of collision detection.
   *
   * @param immediate - If true, updates collisions immediately. If false, resets previous coordinates.
   */
  forceUpdate(e = !0) {
    Ee(() => {
      e ? Ke(this, oo).value = this.computeCollisions() : Lt(this, ro, void 0);
    });
  }
  /**
   * Computes collisions between draggable and droppable elements.
   *
   * @param entries - Optional array of droppable elements to check. If not provided, uses all registered droppables.
   * @param collisionDetector - Optional custom collision detector function
   * @returns Array of detected collisions, sorted by priority
   */
  computeCollisions(e, t) {
    const { registry: n, dragOperation: r } = this.manager, { source: o, shape: s, status: a } = r;
    if (!a.initialized || !s)
      return Ga;
    const i = [], c = [];
    for (const l of e ?? n.droppables) {
      if (l.disabled || o && !l.accepts(o))
        continue;
      const f = t ?? l.collisionDetector;
      if (!f)
        continue;
      c.push(l), l.shape;
      const d = Ee(
        () => f({
          droppable: l,
          dragOperation: r
        })
      );
      d && (l.collisionPriority != null && (d.priority = l.collisionPriority), i.push(d));
    }
    return c.length === 0 ? Ga : (i.sort(z5), i);
  }
  /**
   * Gets the current collisions signal value.
   */
  get collisions() {
    return Ke(this, oo).value;
  }
};
ro = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakMap();
var tx, nx, rx, Qu, ox, tn, Ju, uo, ef, tf;
rx = [Me], nx = [Me], tx = [Me];
var Hn = class wr {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(t, n) {
    Re(this, Ju, we(tn, 8, this)), we(tn, 11, this), Re(this, uo), Re(this, ef, we(tn, 12, this)), we(tn, 15, this), Re(this, tf, we(tn, 16, this)), we(tn, 19, this);
    const { effects: r, id: o, data: s = {}, disabled: a = !1, register: i = !0 } = t;
    let c = o;
    Lt(this, uo, Fo(o)), this.manager = n, this.data = s, this.disabled = a, this.effects = () => {
      var l;
      return [
        () => {
          const { id: f, manager: d } = this;
          if (f !== c)
            return c = f, d == null || d.registry.register(this), () => d == null ? void 0 : d.registry.unregister(this);
        },
        ...(l = r == null ? void 0 : r()) != null ? l : []
      ];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), n && i && queueMicrotask(this.register);
  }
  get id() {
    var t, n;
    const r = Ke(this, uo).value;
    return (n = (t = wr.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? n : r;
  }
  set id(t) {
    var n, r;
    const o = (r = (n = wr.pendingIdChanges) == null ? void 0 : n.get(this)) != null ? r : Ke(this, uo).peek();
    t !== o && (wr.pendingIdChanges || (wr.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var s;
      return Q0(s = wr, Qu, ox).call(s);
    })), wr.pendingIdChanges.set(this, t));
  }
  /**
   * A method that registers the entity with the manager.
   * @returns CleanupFunction | void
   */
  register() {
    var t;
    return (t = this.manager) == null ? void 0 : t.registry.register(this);
  }
  /**
   * A method that unregisters the entity from the manager.
   * @returns void
   */
  unregister() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
  /**
   * A method that cleans up the entity when it is no longer needed.
   * @returns void
   */
  destroy() {
    var t;
    (t = this.manager) == null || t.registry.unregister(this);
  }
};
tn = Go(null);
Qu = /* @__PURE__ */ new WeakSet();
ox = function() {
  const e = Hn.pendingIdChanges;
  Hn.pendingIdChanges = null, e && Be(() => {
    for (const [t, n] of e)
      Ke(t, uo).value = n;
  });
};
Ju = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
ef = /* @__PURE__ */ new WeakMap();
tf = /* @__PURE__ */ new WeakMap();
Pe(tn, 4, "manager", rx, Hn, Ju);
Pe(tn, 4, "data", nx, Hn, ef);
Pe(tn, 4, "disabled", tx, Hn, tf);
Re(Hn, Qu);
Vr(tn, Hn);
Hn.pendingIdChanges = null;
var Ac = Hn, pp = class {
  constructor() {
    this.map = Fo(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
      const n = this.map.peek(), r = n.get(e), o = () => this.unregister(e, t);
      if (r === t) return o;
      if (r && r.id === e) {
        const i = this.cleanupFunctions.get(r);
        i == null || i(), this.cleanupFunctions.delete(r);
      }
      const s = new Map(n);
      for (const [i, c] of n)
        if (c === t && i !== e) {
          s.delete(i);
          break;
        }
      s.set(e, t), this.map.value = s;
      const a = va(...t.effects());
      return this.cleanupFunctions.set(t, a), o;
    }, this.unregister = (e, t) => {
      const n = this.map.peek();
      if (n.get(e) !== t)
        return;
      const r = this.cleanupFunctions.get(t);
      r == null || r(), this.cleanupFunctions.delete(t);
      const o = new Map(n);
      o.delete(e), this.map.value = o;
    };
  }
  /**
   * Iterator for the EntityRegistry class.
   * @returns An iterator for the values in the map.
   */
  [Symbol.iterator]() {
    return this.map.peek().values();
  }
  get value() {
    return this.map.value.values();
  }
  /**
   * Checks if a entity with the given identifier exists in the registry.
   * @param identifier - The unique identifier of the entity.
   * @returns True if the entity exists, false otherwise.
   */
  has(e) {
    return this.map.value.has(e);
  }
  /**
   * Retrieves a entity from the registry using its identifier.
   * @param identifier - The unique identifier of the entity.
   * @returns The entity if it exists, undefined otherwise.
   */
  get(e) {
    return this.map.value.get(e);
  }
  /**
   * Destroys all entries in the registry and clears the registry.
   */
  destroy() {
    for (const e of this) {
      const t = this.cleanupFunctions.get(e);
      t == null || t(), e.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
}, sx, ax, ix, cx, lx, dx, vd, St, nf, rf, of, En = class extends (vd = Ac, dx = [Me], lx = [Me], cx = [Me], ix = [Ue], ax = [Ue], sx = [Ue], vd) {
  constructor(t, n) {
    var r = t, { modifiers: o, type: s, sensors: a, plugins: i, effects: c } = r, l = X0(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(
      qu(Uu({}, l), {
        effects: () => {
          var f;
          return [
            ...(f = c == null ? void 0 : c()) != null ? f : [],
            () => {
              const { manager: d, plugins: h } = this;
              if (!(!d || !h))
                for (const p of h) {
                  const { plugin: g } = zs(p);
                  d.registry.plugins.register(g);
                }
            }
          ];
        }
      }),
      n
    ), we(St, 5, this), Re(this, nf, we(St, 8, this)), we(St, 11, this), Re(this, rf, we(St, 12, this)), we(St, 15, this), Re(this, of, we(St, 16, this, this.isDragSource ? "dragging" : "idle")), we(St, 19, this), this.type = s, this.sensors = a, this.modifiers = o, this.alignment = l.alignment, this.plugins = i;
  }
  /**
   * Look up per-entity options for a given plugin constructor.
   */
  pluginConfig(t) {
    if (this.plugins)
      for (const n of this.plugins) {
        const r = zs(n);
        if (r.plugin === t) return r.options;
      }
  }
  get isDropping() {
    return this.status === "dropping" && this.isDragSource;
  }
  get isDragging() {
    return this.status === "dragging" && this.isDragSource;
  }
  get isDragSource() {
    var t, n;
    return ((n = (t = this.manager) == null ? void 0 : t.dragOperation.source) == null ? void 0 : n.id) === this.id;
  }
};
St = Go(vd);
nf = /* @__PURE__ */ new WeakMap();
rf = /* @__PURE__ */ new WeakMap();
of = /* @__PURE__ */ new WeakMap();
Pe(St, 4, "type", dx, En, nf);
Pe(St, 4, "modifiers", lx, En, rf);
Pe(St, 4, "status", cx, En, of);
Pe(St, 2, "isDropping", ix, En);
Pe(St, 2, "isDragging", ax, En);
Pe(St, 2, "isDragSource", sx, En);
Vr(St, En);
var ux, fx, hx, px, mx, vx, gd, et, sf, af, cf, lf, df, Mn = class extends (gd = Ac, vx = [Me], mx = [Me], px = [Me], hx = [Me], fx = [Me], ux = [Ue], gd) {
  constructor(t, n) {
    var r = t, { accept: o, collisionDetector: s, collisionPriority: a, type: i } = r, c = X0(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, n), we(et, 5, this), Re(this, sf, we(et, 8, this)), we(et, 11, this), Re(this, af, we(et, 12, this)), we(et, 15, this), Re(this, cf, we(et, 16, this)), we(et, 19, this), Re(this, lf, we(et, 20, this)), we(et, 23, this), Re(this, df, we(et, 24, this)), we(et, 27, this), this.accept = o, this.collisionDetector = s, this.collisionPriority = a, this.type = i;
  }
  /**
   * Checks whether or not the droppable accepts a given draggable.
   *
   * @param draggable - The draggable to check
   * @returns true if the draggable can be dropped here
   */
  accepts(t) {
    const { accept: n } = this;
    return n ? typeof n == "function" ? n(t) : t.type ? Array.isArray(n) ? n.includes(t.type) : t.type === n : !1 : !0;
  }
  get isDropTarget() {
    var t, n;
    return ((n = (t = this.manager) == null ? void 0 : t.dragOperation.target) == null ? void 0 : n.id) === this.id;
  }
};
et = Go(gd);
sf = /* @__PURE__ */ new WeakMap();
af = /* @__PURE__ */ new WeakMap();
cf = /* @__PURE__ */ new WeakMap();
lf = /* @__PURE__ */ new WeakMap();
df = /* @__PURE__ */ new WeakMap();
Pe(et, 4, "accept", vx, Mn, sf);
Pe(et, 4, "type", mx, Mn, af);
Pe(et, 4, "collisionDetector", px, Mn, cf);
Pe(et, 4, "collisionPriority", hx, Mn, lf);
Pe(et, 4, "shape", fx, Mn, df);
Pe(et, 2, "isDropTarget", ux, Mn);
Vr(et, Mn);
var H5 = class {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  /**
   * Adds an event listener for the specified event type.
   *
   * @param name - The name of the event to listen for
   * @param handler - The function to call when the event occurs
   * @returns A function to remove the event listener
   */
  addEventListener(e, t) {
    const { registry: n } = this, r = new Set(n.get(e));
    return r.add(t), n.set(e, r), () => this.removeEventListener(e, t);
  }
  /**
   * Removes an event listener for the specified event type.
   *
   * @param name - The name of the event
   * @param handler - The function to remove
   */
  removeEventListener(e, t) {
    const { registry: n } = this, r = new Set(n.get(e));
    r.delete(t), n.set(e, r);
  }
  /**
   * Dispatches an event to all registered listeners.
   *
   * @param name - The name of the event to dispatch
   * @param args - Arguments to pass to the event handlers
   */
  dispatch(e, ...t) {
    const { registry: n } = this, r = n.get(e);
    if (r)
      for (const o of r)
        o(...t);
  }
}, G5 = class extends H5 {
  /**
   * Creates a new drag and drop monitor.
   *
   * @param manager - The drag and drop manager to monitor
   */
  constructor(e) {
    super(), this.manager = e;
  }
  /**
   * Dispatches a drag and drop event.
   *
   * @param type - The type of event to dispatch
   * @param event - The event data to dispatch
   */
  dispatch(e, t) {
    const n = [t, this.manager];
    super.dispatch(e, ...n);
  }
};
function li(e, t = !0) {
  let n = !1;
  return qu(Uu({}, e), {
    cancelable: t,
    get defaultPrevented() {
      return n;
    },
    preventDefault() {
      t && (n = !0);
    }
  });
}
var Y5 = class extends ba {
  constructor(e) {
    super(e);
    const t = (r, o) => r.map(({ id: s }) => s).join("") === o.map(({ id: s }) => s).join("");
    let n = [];
    this.destroy = va(
      () => {
        const { dragOperation: r, collisionObserver: o } = e;
        r.status.initializing && (n = [], o.enable());
      },
      () => {
        const { collisionObserver: r, monitor: o } = e, { collisions: s } = r;
        if (r.isDisabled() || Ac.pendingIdChanges)
          return;
        const a = li({
          collisions: s
        });
        if (o.dispatch("collision", a), a.defaultPrevented || t(s, n))
          return;
        n = s;
        const [i] = s;
        Ee(() => {
          var c;
          (i == null ? void 0 : i.id) !== ((c = e.dragOperation.target) == null ? void 0 : c.id) && (r.disable(), e.actions.setDropTarget(i == null ? void 0 : i.id).then(() => {
            r.enable();
          }));
        });
      }
    );
  }
}, Rc = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Rc || {}), Oc = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Oc || {}), gx, yx, bx, xx, wx, Cx, Sx, Kt, uf;
Sx = [Me], Cx = [Ue], wx = [Ue], xx = [Ue], bx = [Ue], yx = [Ue], gx = [Ue];
var Gn = class {
  constructor() {
    we(Kt, 5, this), Re(this, uf, we(
      Kt,
      8,
      this,
      "idle"
      /* Idle */
    )), we(Kt, 11, this);
  }
  get current() {
    return this.value;
  }
  get idle() {
    return this.value === "idle";
  }
  get initializing() {
    return this.value === "initializing";
  }
  get initialized() {
    const { value: e } = this;
    return e !== "idle" && e !== "initialization-pending";
  }
  get dragging() {
    return this.value === "dragging";
  }
  get dropped() {
    return this.value === "dropped";
  }
  /**
   * Sets the current status value.
   *
   * @param value - The new status value
   */
  set(e) {
    this.value = e;
  }
};
Kt = Go(null);
uf = /* @__PURE__ */ new WeakMap();
Pe(Kt, 4, "value", Sx, Gn, uf);
Pe(Kt, 2, "current", Cx, Gn);
Pe(Kt, 2, "idle", wx, Gn);
Pe(Kt, 2, "initializing", xx, Gn);
Pe(Kt, 2, "initialized", bx, Gn);
Pe(Kt, 2, "dragging", yx, Gn);
Pe(Kt, 2, "dropped", gx, Gn);
Vr(Kt, Gn);
var K5 = class {
  /**
   * Creates a new instance of drag actions.
   *
   * @param manager - The drag and drop manager instance
   */
  constructor(e) {
    this.manager = e;
  }
  /**
   * Sets the source of the drag operation.
   *
   * @param source - The draggable entity or its unique identifier
   */
  setDragSource(e) {
    const { dragOperation: t } = this.manager;
    t.sourceIdentifier = typeof e == "string" || typeof e == "number" ? e : e.id;
  }
  /**
   * Sets the target of the drop operation.
   *
   * @param identifier - The unique identifier of the droppable entity or null/undefined
   * @returns A promise that resolves to true if the drop was prevented
   */
  setDropTarget(e) {
    return Ee(() => {
      const { dragOperation: t } = this.manager, n = e ?? null;
      if (t.targetIdentifier === n)
        return Promise.resolve(!1);
      t.targetIdentifier = n;
      const r = li({
        operation: t.snapshot()
      });
      return t.status.dragging && this.manager.monitor.dispatch("dragover", r), this.manager.renderer.rendering.then(() => r.defaultPrevented);
    });
  }
  /**
   * Starts a new drag operation.
   *
   * @param args - Configuration for the drag operation
   * @param args.event - The event that initiated the drag
   * @param args.source - The source draggable entity or its identifier
   * @param args.coordinates - The initial coordinates of the drag
   * @returns true if the drag operation started successfully
   * @throws {Error} If there is no drag source or another operation is active
   */
  start(e) {
    return Ee(() => {
      const { dragOperation: t } = this.manager;
      if (e.source != null && this.setDragSource(e.source), !t.source)
        throw new Error("Cannot start a drag operation without a drag source");
      if (!t.status.idle)
        throw new Error(
          "Cannot start a drag operation while another is active"
        );
      const r = new AbortController(), { event: o, coordinates: s } = e;
      Be(() => {
        t.status.set(
          "initialization-pending"
          /* InitializationPending */
        ), t.shape = null, t.canceled = !1, t.activatorEvent = o ?? null, t.position.reset(s);
      });
      const a = li({
        operation: t.snapshot()
      });
      return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), r.abort(), r) : (t.status.set(
        "initializing"
        /* Initializing */
      ), t.controller = r, this.manager.renderer.rendering.then(() => {
        if (r.signal.aborted) return;
        const { status: i } = t;
        i.current === "initializing" && Be(() => {
          t.status.set(
            "dragging"
            /* Dragging */
          ), this.manager.monitor.dispatch("dragstart", {
            nativeEvent: o,
            operation: t.snapshot(),
            cancelable: !1
          });
        });
      }), r);
    });
  }
  /**
   * Moves the dragged entity to a new position.
   *
   * @param args - Configuration for the move operation
   * @param args.by - Relative coordinates to move by
   * @param args.to - Absolute coordinates to move to
   * @param args.event - The event that triggered the move
   * @param args.cancelable - Whether the move can be canceled
   * @param args.propagate - Whether to dispatch dragmove events
   */
  move(e) {
    return Ee(() => {
      var t, n;
      const { dragOperation: r } = this.manager, { status: o, controller: s } = r;
      if (!o.dragging || !s || s.signal.aborted)
        return;
      const a = li(
        {
          nativeEvent: e.event,
          operation: r.snapshot(),
          by: e.by,
          to: e.to
        },
        (t = e.cancelable) != null ? t : !0
      );
      ((n = e.propagate) == null || n) && this.manager.monitor.dispatch("dragmove", a), queueMicrotask(() => {
        var i, c, l, f, d;
        if (a.defaultPrevented)
          return;
        const h = (d = e.to) != null ? d : {
          x: r.position.current.x + ((c = (i = e.by) == null ? void 0 : i.x) != null ? c : 0),
          y: r.position.current.y + ((f = (l = e.by) == null ? void 0 : l.y) != null ? f : 0)
        };
        r.position.current = h;
      });
    });
  }
  /**
   * Stops the current drag operation.
   *
   * @param args - Configuration for stopping the operation
   * @param args.event - The event that triggered the stop
   * @param args.canceled - Whether the operation was canceled
   * @remarks
   * This method:
   * - Dispatches a dragend event
   * - Allows suspension of the operation
   * - Handles cleanup of the operation state
   */
  stop(e = {}) {
    return Ee(() => {
      var t, n;
      const { dragOperation: r } = this.manager, { controller: o } = r;
      if (!o || o.signal.aborted) return;
      let s;
      const a = () => {
        const c = {
          resume: () => {
          },
          abort: () => {
          }
        };
        return s = new Promise((l, f) => {
          c.resume = l, c.abort = f;
        }), c;
      };
      o.abort();
      const i = () => {
        this.manager.renderer.rendering.then(() => {
          r.status.set(
            "dropped"
            /* Dropped */
          );
          const c = Ee(
            () => {
              var f;
              return ((f = r.source) == null ? void 0 : f.status) === "dropping";
            }
          ), l = () => {
            r.controller === o && (r.controller = void 0), r.reset();
          };
          if (c) {
            const { source: f } = r, d = Ut(() => {
              (f == null ? void 0 : f.status) === "idle" && (d(), l());
            });
          } else
            this.manager.renderer.rendering.then(l);
        });
      };
      r.canceled = (t = e.canceled) != null ? t : !1, this.manager.monitor.dispatch("dragend", {
        nativeEvent: e.event,
        operation: r.snapshot(),
        canceled: (n = e.canceled) != null ? n : !1,
        suspend: a
      }), s ? s.then(i).catch(() => r.reset()) : i();
    });
  }
}, _o = class extends wt {
  /**
   * Creates a new sensor instance.
   *
   * @param manager - The drag drop manager instance
   * @param options - Optional sensor configuration
   */
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, U5 = class extends AbortController {
  constructor(e, t) {
    super(), this.constraints = e, this.onActivate = t, this.activated = !1;
    for (const n of e ?? [])
      n.controller = this;
  }
  onEvent(e) {
    var t;
    if (!this.activated)
      if ((t = this.constraints) != null && t.length)
        for (const n of this.constraints)
          n.onEvent(e);
      else
        this.activate(e);
  }
  activate(e) {
    this.activated || (this.activated = !0, this.onActivate(e));
  }
  abort(e) {
    this.activated = !1, super.abort(e);
  }
}, di, _x = class {
  constructor(e) {
    this.options = e, Re(this, di);
  }
  set controller(e) {
    Lt(this, di, e), e.signal.addEventListener("abort", () => this.abort());
  }
  /**
   * Called when the activation is triggered.
   */
  activate(e) {
    var t;
    (t = Ke(this, di)) == null || t.activate(e);
  }
};
di = /* @__PURE__ */ new WeakMap();
var mp = class extends wt {
  /**
   * Creates a new modifier instance.
   *
   * @param manager - The drag and drop manager that owns this modifier
   * @param options - Optional configuration for the modifier
   */
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
  /**
   * Applies the modifier to the current drag operation.
   *
   * @param operation - The current state of the drag operation
   * @returns The transformed coordinates
   *
   * @remarks
   * Override this method to implement custom transformation logic.
   * The default implementation returns the original transform unchanged.
   */
  apply(e) {
    return e.transform;
  }
}, q5 = class {
  /**
   * Creates a new registry instance.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.draggables = new pp(), this.droppables = new pp(), this.plugins = new gl(e), this.sensors = new gl(e), this.modifiers = new gl(e);
  }
  register(e, t) {
    if (e instanceof En)
      return this.draggables.register(e.id, e);
    if (e instanceof Mn)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof mp)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof _o)
      return this.sensors.register(e, t);
    if (e.prototype instanceof wt)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Ac)
      return e instanceof En ? this.draggables.unregister(e.id, e) : e instanceof Mn ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof mp)
      return this.modifiers.unregister(e);
    if (e.prototype instanceof _o)
      return this.sensors.unregister(e);
    if (e.prototype instanceof wt)
      return this.plugins.unregister(e);
    throw new Error("Invalid instance type");
  }
  /**
   * Destroys all registered entities and cleans up resources.
   *
   * @remarks
   * This method:
   * - Destroys all draggable and droppable entities
   * - Destroys all plugins, sensors, and modifiers
   * - Cleans up any associated resources
   */
  destroy() {
    this.draggables.destroy(), this.droppables.destroy(), this.plugins.destroy(), this.sensors.destroy(), this.modifiers.destroy();
  }
}, kx, Ex, Mx, Px, Nx, Ax, Rx, Ox, Dx, us, ui, so, ze, ff, hf, pf, mf, vf, fs;
Dx = [Ue], Ox = [Me], Rx = [Me], Ax = [Me], Nx = [Me], Px = [Me], Mx = [Ue], Ex = [Ue], kx = [Ue];
var dn = class {
  /**
   * Creates a new drag operation instance.
   *
   * @param manager - The drag and drop manager that owns this operation
   */
  constructor(e) {
    we(ze, 5, this), Re(this, us), Re(this, ui), Re(this, so, new Fr(
      void 0,
      (t, n) => t && n ? t.equals(n) : t === n
    )), this.status = new Gn(), Re(this, ff, we(ze, 8, this, !1)), we(ze, 11, this), Re(this, hf, we(ze, 12, this, null)), we(ze, 15, this), Re(this, pf, we(ze, 16, this, null)), we(ze, 19, this), Re(this, mf, we(ze, 20, this, null)), we(ze, 23, this), Re(this, vf, we(ze, 24, this, [])), we(ze, 27, this), this.position = new Nc({ x: 0, y: 0 }), Re(this, fs, { x: 0, y: 0 }), Lt(this, us, e);
  }
  get shape() {
    const { current: e, initial: t, previous: n } = Ke(this, so);
    return !e || !t ? null : { current: e, initial: t, previous: n };
  }
  /**
   * Sets the shape of the dragged entity.
   *
   * @param value - The new shape or null to reset
   */
  set shape(e) {
    e ? Ke(this, so).current = e : Ke(this, so).reset();
  }
  get source() {
    var e;
    const t = this.sourceIdentifier;
    if (t == null) return null;
    const n = Ke(this, us).registry.draggables.get(t);
    return n && Lt(this, ui, n), (e = n ?? Ke(this, ui)) != null ? e : null;
  }
  get target() {
    var e;
    const t = this.targetIdentifier;
    return t != null && (e = Ke(this, us).registry.droppables.get(t)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: t } = this.position.delta;
    let n = { x: e, y: t };
    for (const r of this.modifiers)
      n = r.apply(qu(Uu({}, this.snapshot()), {
        transform: n
      }));
    return Lt(this, fs, n), n;
  }
  /**
   * Creates a snapshot of the current drag operation state.
   *
   * @returns An immutable snapshot of the current operation state
   */
  snapshot() {
    return Ee(() => ({
      source: this.source,
      target: this.target,
      activatorEvent: this.activatorEvent,
      transform: Ke(this, fs),
      shape: this.shape ? vl(this.shape) : null,
      position: vl(this.position),
      status: vl(this.status),
      canceled: this.canceled
    }));
  }
  /**
   * Resets the drag operation to its initial state.
   *
   * @remarks
   * This method:
   * - Sets status to idle
   * - Clears source and target identifiers
   * - Resets shape history
   * - Resets position and transform
   * - Clears modifiers
   */
  reset() {
    Be(() => {
      this.status.set(
        "idle"
        /* Idle */
      ), this.sourceIdentifier = null, this.targetIdentifier = null, Ke(this, so).reset(), this.position.reset({ x: 0, y: 0 }), Lt(this, fs, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
ze = Go(null);
us = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
ff = /* @__PURE__ */ new WeakMap();
hf = /* @__PURE__ */ new WeakMap();
pf = /* @__PURE__ */ new WeakMap();
mf = /* @__PURE__ */ new WeakMap();
vf = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
Pe(ze, 2, "shape", Dx, dn);
Pe(ze, 4, "canceled", Ox, dn, ff);
Pe(ze, 4, "activatorEvent", Rx, dn, hf);
Pe(ze, 4, "sourceIdentifier", Ax, dn, pf);
Pe(ze, 4, "targetIdentifier", Nx, dn, mf);
Pe(ze, 4, "modifiers", Px, dn, vf);
Pe(ze, 2, "source", Mx, dn);
Pe(ze, 2, "target", Ex, dn);
Pe(ze, 2, "transform", kx, dn);
Vr(ze, dn);
var X5 = {
  get rendering() {
    return Promise.resolve();
  }
};
function on(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var Z5 = class {
  /**
   * Creates a new drag and drop manager instance.
   *
   * @param config - Optional configuration for plugins, sensors, modifiers, and renderer
   */
  constructor(t) {
    this.destroy = () => {
      this.dragOperation.status.idle || this.actions.stop({ canceled: !0 }), this.dragOperation.modifiers.forEach((h) => h.destroy()), this.registry.destroy(), this.collisionObserver.destroy();
    };
    var n;
    const r = t ?? {}, o = on(r.plugins, []), s = on(r.sensors, []), a = on(r.modifiers, []), i = (n = r.renderer) != null ? n : X5, c = new G5(this), l = new q5(this);
    this.registry = l, this.monitor = c, this.renderer = i, this.actions = new K5(this), this.dragOperation = new dn(this), this.collisionObserver = new B5(this), this.plugins = [Y5, ...o], this.modifiers = a, this.sensors = s;
    const { destroy: f } = this, d = va(() => {
      var h, p, g;
      const m = Ee(() => this.dragOperation.modifiers), x = this.modifiers;
      for (const C of m)
        x.includes(C) || C.destroy();
      this.dragOperation.modifiers = (g = (p = (h = this.dragOperation.source) == null ? void 0 : h.modifiers) == null ? void 0 : p.map((C) => {
        const { plugin: b, options: y } = zs(C);
        return new b(this, y);
      })) != null ? g : x;
    });
    this.destroy = () => {
      d(), f();
    };
  }
  /**
   * Gets the list of active plugins.
   *
   * @returns Array of active plugin instances
   */
  get plugins() {
    return this.registry.plugins.values;
  }
  /**
   * Sets the list of plugins to be used by the manager.
   *
   * @param plugins - Array of plugin constructors or instances
   */
  set plugins(t) {
    this.registry.plugins.values = t;
  }
  /**
   * Gets the list of active modifiers.
   *
   * @returns Array of active modifier instances
   */
  get modifiers() {
    return this.registry.modifiers.values;
  }
  /**
   * Sets the list of modifiers to be used by the manager.
   *
   * @param modifiers - Array of modifier constructors or instances
   */
  set modifiers(t) {
    this.registry.modifiers.values = t;
  }
  /**
   * Gets the list of active sensors.
   *
   * @returns Array of active sensor instances
   */
  get sensors() {
    return this.registry.sensors.values;
  }
  /**
   * Sets the list of sensors to be used by the manager.
   *
   * @param sensors - Array of sensor constructors or instances
   */
  set sensors(t) {
    this.registry.sensors.values = t;
  }
}, Ix = (e) => {
  throw TypeError(e);
}, gf = (e, t, n) => t.has(e) || Ix("Cannot " + n), xe = (e, t, n) => (gf(e, t, "read from private field"), t.get(e)), At = (e, t, n) => t.has(e) ? Ix("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $t = (e, t, n, r) => (gf(e, t, "write to private field"), t.set(e, n), n), Tx = (e, t, n) => (gf(e, t, "access private method"), n);
function Dc(e) {
  return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function jx(e, t) {
  const n = e.getAnimations();
  let r = null;
  for (const o of n) {
    if (o.playState !== "running") continue;
    const { effect: s } = o, i = (Dc(s) ? s.getKeyframes() : []).filter(t);
    i.length > 0 && (r = [i[i.length - 1], o]);
  }
  return r;
}
function Ic(e) {
  const { width: t, height: n, top: r, left: o, bottom: s, right: a } = e.getBoundingClientRect();
  return { width: t, height: n, top: r, left: o, bottom: s, right: a };
}
function yf(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function xa(e) {
  return "nodeType" in e;
}
function zt(e) {
  var t, n, r;
  return e ? yf(e) ? e : xa(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function bf(e) {
  const { Document: t } = zt(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function cr(e) {
  return !e || yf(e) ? !1 : e instanceof zt(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function $x(e) {
  return e instanceof zt(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Yo(e) {
  return e ? yf(e) ? e.document : xa(e) ? bf(e) ? e : cr(e) || $x(e) ? e.ownerDocument : document : document : document;
}
function Q5(e) {
  var t, n, r, o;
  const { documentElement: s } = Yo(e), a = zt(e).visualViewport, i = (t = a == null ? void 0 : a.width) != null ? t : s.clientWidth, c = (n = a == null ? void 0 : a.height) != null ? n : s.clientHeight, l = (r = a == null ? void 0 : a.offsetTop) != null ? r : 0, f = (o = a == null ? void 0 : a.offsetLeft) != null ? o : 0;
  return {
    top: l,
    left: f,
    right: f + i,
    bottom: l + c,
    width: i,
    height: c
  };
}
function J5(e, t) {
  if (eI(e) && e.open === !1)
    return !1;
  const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(e);
  return n === "visible" && r === "visible" && o === "visible";
}
function eI(e) {
  return e.tagName === "DETAILS";
}
function Hs(e, t = e.getBoundingClientRect(), n = 0) {
  var r, o, s, a, i;
  let c = t;
  const { ownerDocument: l } = e, f = (r = l.defaultView) != null ? r : window;
  let d = e.parentElement;
  for (; d && d !== l.documentElement; ) {
    if (!J5(d)) {
      const y = d.getBoundingClientRect(), S = n * (y.bottom - y.top), w = n * (y.right - y.left), M = n * (y.bottom - y.top), k = n * (y.right - y.left);
      c = {
        top: Math.max(c.top, y.top - S),
        right: Math.min(c.right, y.right + w),
        bottom: Math.min(c.bottom, y.bottom + M),
        left: Math.max(c.left, y.left - k),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, c.width = c.right - c.left, c.height = c.bottom - c.top;
    }
    d = d.parentElement;
  }
  const h = f.visualViewport, p = (o = h == null ? void 0 : h.offsetTop) != null ? o : 0, g = (s = h == null ? void 0 : h.offsetLeft) != null ? s : 0, m = (a = h == null ? void 0 : h.width) != null ? a : f.innerWidth, x = (i = h == null ? void 0 : h.height) != null ? i : f.innerHeight, C = n * x, b = n * m;
  return c = {
    top: Math.max(c.top, p - C),
    right: Math.min(
      c.right,
      g + m + b
    ),
    bottom: Math.min(
      c.bottom,
      p + x + C
    ),
    left: Math.max(c.left, g - b),
    width: 0,
    // Will be calculated next
    height: 0
    // Will be calculated next
  }, c.width = c.right - c.left, c.height = c.bottom - c.top, c.width < 0 && (c.width = 0), c.height < 0 && (c.height = 0), c;
}
function ko(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
var Wx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function yd(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(
    e.querySelectorAll("iframe, frame")
  ))
    try {
      const o = r.contentDocument;
      o && !t.has(o) && n.push(...yd(o, t));
    } catch {
    }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const o = r.parent;
      o && o.document && o.document !== e && n.push(...yd(o.document, t));
    }
  } catch {
  }
  return n;
}
function xf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Lx() {
  var e, t;
  const n = xf() ? window.visualViewport : null;
  return {
    x: (e = n == null ? void 0 : n.offsetLeft) != null ? e : 0,
    y: (t = n == null ? void 0 : n.offsetTop) != null ? t : 0
  };
}
function wf(e) {
  return !e || !xa(e) ? !1 : e instanceof zt(e).ShadowRoot;
}
function Oi(e) {
  if (e && xa(e)) {
    let t = e.getRootNode();
    if (wf(t))
      return t;
    if (t instanceof Document)
      return t;
  }
  return Yo(e);
}
function Cf(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function tI(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((s, a) => {
    const i = r[a];
    if (vp(s) && vp(i) && (s.type !== "file" && (s.value = i.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), gp(s) && gp(i) && i.width > 0 && i.height > 0) {
      const c = s.getContext("2d");
      c == null || c.drawImage(i, 0, 0);
    }
  }), n;
}
function vp(e) {
  return "value" in e;
}
function gp(e) {
  return e.tagName === "CANVAS";
}
function Fx(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (nI(r)) {
    const { contentDocument: o } = r;
    if (o) {
      const { left: s, top: a } = r.getBoundingClientRect();
      return Fx(o, {
        x: t - s,
        y: n - a
      });
    }
  }
  return r;
}
function nI(e) {
  return (e == null ? void 0 : e.tagName) === "IFRAME";
}
var bd = /* @__PURE__ */ new WeakMap();
function rI(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var Vx = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set(), this.clear = () => {
      for (const e of this.entries) {
        const [t, { type: n, listener: r, options: o }] = e;
        t.removeEventListener(n, r, o);
      }
      this.entries.clear();
    };
  }
  bind(e, t) {
    const n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t], o = [];
    for (const a of n)
      for (const i of r) {
        const { type: c, listener: l, options: f } = i, d = [a, i];
        a.addEventListener(c, l, f), this.entries.add(d), o.push(d);
      }
    const s = this.entries;
    return function() {
      for (const i of o) {
        const [c, { type: l, listener: f, options: d }] = i;
        c.removeEventListener(l, f, d), s.delete(i);
      }
    };
  }
};
function Eo(e) {
  const t = e == null ? void 0 : e.ownerDocument.defaultView;
  if (t && t.self !== t.parent)
    return t.frameElement;
}
function oI(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Eo(e);
  for (; n; )
    t.add(n), n = Eo(n);
  return t;
}
function sI(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function zx(e, t) {
  const n = () => performance.now();
  let r, o;
  return function(...s) {
    const a = this;
    o ? (r == null || r(), r = sI(
      () => {
        e.apply(a, s), o = n();
      },
      t - (n() - o)
    )) : (e.apply(a, s), o = n());
  };
}
function aI(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function iI(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = Hs(
    e,
    t
  );
  return n > 0 && r > 0;
}
var cI = Wx ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, fi, lI = class extends cI {
  constructor(e) {
    super((t) => {
      if (!xe(this, fi)) {
        $t(this, fi, !0);
        return;
      }
      e(t, this);
    }), At(this, fi, !1);
  }
};
fi = /* @__PURE__ */ new WeakMap();
var yp = Array.from({ length: 100 }, (e, t) => t / 100), Bx = 75, Cr, Di, qn, Sr, hs, ht, Ms, ps, Ii, Hx, Gx, Yx = class {
  constructor(e, t, n = {
    debug: !1,
    skipInitial: !1
  }) {
    this.element = e, this.callback = t, At(this, Ii), this.disconnect = () => {
      var s, a, i;
      $t(this, Ms, !0), (s = xe(this, qn)) == null || s.disconnect(), (a = xe(this, Sr)) == null || a.disconnect(), xe(this, hs).disconnect(), (i = xe(this, ht)) == null || i.remove();
    }, At(this, Cr, !0), At(this, Di), At(this, qn), At(this, Sr), At(this, hs), At(this, ht), At(this, Ms, !1), At(this, ps, zx(() => {
      var s, a, i;
      const { element: c } = this;
      if ((s = xe(this, Sr)) == null || s.disconnect(), xe(this, Ms) || !xe(this, Cr) || !c.isConnected)
        return;
      const l = (a = c.ownerDocument) != null ? a : document, { innerHeight: f, innerWidth: d } = (i = l.defaultView) != null ? i : window, h = c.getBoundingClientRect(), p = Hs(c, h), { top: g, left: m, bottom: x, right: C } = p, b = -Math.floor(g), y = -Math.floor(m), S = -Math.floor(d - C), w = -Math.floor(f - x), M = `${b}px ${S}px ${w}px ${y}px`;
      this.boundingClientRect = h, $t(this, Sr, new IntersectionObserver(
        (k) => {
          const [E] = k, { intersectionRect: A } = E;
          (E.intersectionRatio !== 1 ? E.intersectionRatio : kn.intersectionRatio(
            A,
            Hs(c)
          )) !== 1 && xe(this, ps).call(this);
        },
        {
          threshold: yp,
          rootMargin: M,
          root: l
        }
      )), xe(this, Sr).observe(c), Tx(this, Ii, Hx).call(this);
    }, Bx)), this.boundingClientRect = e.getBoundingClientRect(), $t(this, Cr, iI(e, this.boundingClientRect));
    let r = !0;
    this.callback = (s) => {
      r && (r = !1, n.skipInitial) || t(s);
    };
    const o = e.ownerDocument;
    n != null && n.debug && ($t(this, ht, document.createElement("div")), xe(this, ht).style.background = "rgba(0,0,0,0.15)", xe(this, ht).style.position = "fixed", xe(this, ht).style.pointerEvents = "none", o.body.appendChild(xe(this, ht))), $t(this, hs, new IntersectionObserver(
      (s) => {
        var a, i;
        const c = s[s.length - 1], { boundingClientRect: l, isIntersecting: f } = c, { width: d, height: h } = l, p = xe(this, Cr);
        $t(this, Cr, f), !(!d && !h) && (p && !f ? ((a = xe(this, Sr)) == null || a.disconnect(), this.callback(null), (i = xe(this, qn)) == null || i.disconnect(), $t(this, qn, void 0), xe(this, ht) && (xe(this, ht).style.visibility = "hidden")) : xe(this, ps).call(this), f && !xe(this, qn) && ($t(this, qn, new lI(xe(this, ps))), xe(this, qn).observe(e)));
      },
      {
        threshold: yp,
        root: o
      }
    )), xe(this, Cr) && !n.skipInitial && this.callback(this.boundingClientRect), xe(this, hs).observe(e);
  }
};
Cr = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
ht = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
Hx = function() {
  xe(this, Ms) || (Tx(this, Ii, Gx).call(this), !aI(this.boundingClientRect, xe(this, Di)) && (this.callback(this.boundingClientRect), $t(this, Di, this.boundingClientRect)));
};
Gx = function() {
  if (xe(this, ht)) {
    const { top: e, left: t, width: n, height: r } = Hs(
      this.element
    );
    xe(this, ht).style.overflow = "hidden", xe(this, ht).style.visibility = "visible", xe(this, ht).style.top = `${Math.floor(e)}px`, xe(this, ht).style.left = `${Math.floor(t)}px`, xe(this, ht).style.width = `${Math.floor(n)}px`, xe(this, ht).style.height = `${Math.floor(r)}px`;
  }
};
var Ya = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap();
function dI(e, t) {
  let n = Ya.get(e);
  return n || (n = { disconnect: new Yx(
    e,
    (o) => {
      const s = Ya.get(e);
      s && s.callbacks.forEach((a) => a(o));
    },
    { skipInitial: !0 }
  ).disconnect, callbacks: /* @__PURE__ */ new Set() }), n.callbacks.add(t), Ya.set(e, n), () => {
    n.callbacks.delete(t), n.callbacks.size === 0 && (Ya.delete(e), n.disconnect());
  };
}
function uI(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = dI(r, t);
    n.add(o);
  }
  return () => n.forEach((r) => r());
}
function fI(e, t) {
  var n;
  const r = e.ownerDocument;
  if (!Ka.has(r)) {
    const a = new AbortController(), i = /* @__PURE__ */ new Set();
    document.addEventListener(
      "scroll",
      (c) => i.forEach((l) => l(c)),
      {
        capture: !0,
        passive: !0,
        signal: a.signal
      }
    ), Ka.set(r, { disconnect: () => a.abort(), listeners: i });
  }
  const { listeners: o, disconnect: s } = (n = Ka.get(r)) != null ? n : {};
  return !o || !s ? () => {
  } : (o.add(t), () => {
    o.delete(t), o.size === 0 && (s(), Ka.delete(r));
  });
}
var ms, vs, hi, xd, hI = class {
  constructor(e, t, n) {
    this.callback = t, At(this, ms), At(this, vs, !1), At(this, hi), At(this, xd, zx((a) => {
      if (!xe(this, vs) && a.target && "contains" in a.target && typeof a.target.contains == "function") {
        for (const i of xe(this, hi))
          if (a.target.contains(i)) {
            this.callback(xe(this, ms).boundingClientRect);
            break;
          }
      }
    }, Bx));
    const r = oI(e), o = uI(r, t), s = fI(e, xe(this, xd));
    $t(this, hi, r), $t(this, ms, new Yx(e, t, n)), this.disconnect = () => {
      xe(this, vs) || ($t(this, vs, !0), o(), s(), xe(this, ms).disconnect());
    };
  }
};
ms = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
xd = /* @__PURE__ */ new WeakMap();
function wd(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function yo(e) {
  try {
    wd(e) && e.isConnected && e.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
    !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function bp(e) {
  return !Wx || !e ? !1 : e === Yo(e).scrollingElement;
}
function Kx(e) {
  var t, n;
  const r = zt(e), o = bp(e) ? Q5(e) : Ic(e), s = r.visualViewport, a = bp(e) ? {
    height: (t = s == null ? void 0 : s.height) != null ? t : r.innerHeight,
    width: (n = s == null ? void 0 : s.width) != null ? n : r.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, i = {
    current: {
      x: e.scrollLeft,
      y: e.scrollTop
    },
    max: {
      x: e.scrollWidth - a.width,
      y: e.scrollHeight - a.height
    }
  }, c = i.current.y <= 0, l = i.current.x <= 0, f = i.current.y >= i.max.y, d = i.current.x >= i.max.x;
  return {
    rect: o,
    position: i,
    isTop: c,
    isLeft: l,
    isBottom: f,
    isRight: d
  };
}
function pI(e, t) {
  const { isTop: n, isBottom: r, isLeft: o, isRight: s, position: a } = Kx(e), { x: i, y: c } = t ?? { x: 0, y: 0 }, l = !n && a.current.y + c > 0, f = !r && a.current.y + c < a.max.y, d = !o && a.current.x + i > 0, h = !s && a.current.x + i < a.max.x;
  return {
    top: l,
    bottom: f,
    left: d,
    right: h,
    x: d || h,
    y: l || f
  };
}
var Sf = class {
  constructor(t) {
    this.scheduler = t, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: n, resolvers: r } = this;
      this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const o of n)
        o();
      for (const o of r)
        o();
    };
  }
  schedule(t) {
    return this.tasks.add(t), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((n) => this.resolvers.add(n));
  }
}, Ti = new Sf((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), mI = new Sf((e) => setTimeout(e, 50)), ji = /* @__PURE__ */ new Map(), vI = ji.clear.bind(ji);
function An(e, t = !1) {
  if (!t) return xp(e);
  let n = ji.get(e);
  return n || (n = xp(e), ji.set(e, n), mI.schedule(vI), n);
}
function xp(e) {
  return zt(e).getComputedStyle(e);
}
function gI(e, t = An(e, !0)) {
  return t.position === "fixed" || t.position === "sticky";
}
function yI(e, t = An(e, !0)) {
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
var bI = {
  excludeElement: !0,
  escapeShadowDOM: !0
};
function Cd(e, t = bI) {
  const { limit: n, excludeElement: r, escapeShadowDOM: o } = t, s = /* @__PURE__ */ new Set();
  function a(i) {
    if (n != null && s.size >= n || !i)
      return s;
    if (bf(i) && i.scrollingElement != null && !s.has(i.scrollingElement))
      return s.add(i.scrollingElement), s;
    if (o && wf(i))
      return a(i.host);
    if (!cr(i))
      return $x(i) ? a(i.parentElement) : s;
    if (s.has(i))
      return s;
    const c = An(i, !0);
    if (r && i === e || yI(i, c) && s.add(i), gI(i, c)) {
      const { scrollingElement: l } = i.ownerDocument;
      return l && s.add(l), s;
    }
    return a(i.parentNode);
  }
  return e ? a(e) : s;
}
function Mo(e, t = window.frameElement) {
  const n = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!e) return n;
  let r = Eo(e);
  for (; r; ) {
    if (r === t)
      return n;
    const o = Ic(r), { x: s, y: a } = xI(r, o);
    n.x = n.x + o.left, n.y = n.y + o.top, n.scaleX = n.scaleX * s, n.scaleY = n.scaleY * a, r = Eo(r);
  }
  return n;
}
function xI(e, t = Ic(e)) {
  const n = Math.round(t.width), r = Math.round(t.height);
  if (cr(e))
    return {
      x: n / e.offsetWidth,
      y: r / e.offsetHeight
    };
  const o = An(e, !0);
  return {
    x: (parseFloat(o.width) || n) / n,
    y: (parseFloat(o.height) || r) / r
  };
}
function wI(e) {
  if (!e || e === "none")
    return null;
  const t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
  return isNaN(n) && isNaN(r) ? null : {
    x: isNaN(n) ? r : n,
    y: isNaN(r) ? n : r
  };
}
function Gs(e) {
  if (!e || e === "none")
    return null;
  const [t, n, r = "0"] = e.split(" "), o = { x: parseFloat(t), y: parseFloat(n), z: parseInt(r, 10) };
  return isNaN(o.x) && isNaN(o.y) ? null : {
    x: isNaN(o.x) ? 0 : o.x,
    y: isNaN(o.y) ? 0 : o.y,
    z: isNaN(o.z) ? 0 : o.z
  };
}
function Tc(e) {
  var t, n, r, o, s, a, i, c, l;
  const { scale: f, transform: d, translate: h } = e, p = wI(f), g = Gs(h), m = CI(d);
  if (!m && !p && !g)
    return null;
  const x = {
    x: (t = p == null ? void 0 : p.x) != null ? t : 1,
    y: (n = p == null ? void 0 : p.y) != null ? n : 1
  }, C = {
    x: (r = g == null ? void 0 : g.x) != null ? r : 0,
    y: (o = g == null ? void 0 : g.y) != null ? o : 0
  }, b = {
    x: (s = m == null ? void 0 : m.x) != null ? s : 0,
    y: (a = m == null ? void 0 : m.y) != null ? a : 0,
    scaleX: (i = m == null ? void 0 : m.scaleX) != null ? i : 1,
    scaleY: (c = m == null ? void 0 : m.scaleY) != null ? c : 1
  };
  return {
    x: C.x + b.x,
    y: C.y + b.y,
    z: (l = g == null ? void 0 : g.z) != null ? l : 0,
    scaleX: x.x * b.scaleX,
    scaleY: x.y * b.scaleY
  };
}
function CI(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
var Gt = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Gt || {}), SI = {
  x: 0.2,
  y: 0.2
}, _I = {
  x: 10,
  y: 10
};
function kI(e, t, n, r = 25, o = SI, s = _I) {
  const { x: a, y: i } = t, { rect: c, isTop: l, isBottom: f, isLeft: d, isRight: h } = Kx(e), p = Mo(e), g = An(e, !0), m = Tc(g), x = m !== null ? (m == null ? void 0 : m.scaleX) < 0 : !1, C = m !== null ? (m == null ? void 0 : m.scaleY) < 0 : !1, b = new kn(
    c.left * p.scaleX + p.x,
    c.top * p.scaleY + p.y,
    c.width * p.scaleX,
    c.height * p.scaleY
  ), y = {
    x: 0,
    y: 0
    /* Idle */
  }, S = {
    x: 0,
    y: 0
  }, w = {
    height: b.height * o.y,
    width: b.width * o.x
  };
  return w.height > 0 && (!l || C && !f) && i <= b.top + w.height && (n == null ? void 0 : n.y) !== 1 && a >= b.left - s.x && a <= b.right + s.x ? (y.y = C ? 1 : -1, S.y = r * Math.abs(
    (b.top + w.height - i) / w.height
  )) : w.height > 0 && (!f || C && !l) && i >= b.bottom - w.height && (n == null ? void 0 : n.y) !== -1 && a >= b.left - s.x && a <= b.right + s.x && (y.y = C ? -1 : 1, S.y = r * Math.abs(
    (b.bottom - w.height - i) / w.height
  )), w.width > 0 && (!h || x && !d) && a >= b.right - w.width && (n == null ? void 0 : n.x) !== -1 && i >= b.top - s.y && i <= b.bottom + s.y ? (y.x = x ? -1 : 1, S.x = r * Math.abs(
    (b.right - w.width - a) / w.width
  )) : w.width > 0 && (!d || x && !h) && a <= b.left + w.width && (n == null ? void 0 : n.x) !== 1 && i >= b.top - s.y && i <= b.bottom + s.y && (y.x = x ? 1 : -1, S.x = r * Math.abs(
    (b.left + w.width - a) / w.width
  )), {
    direction: y,
    speed: S
  };
}
function Ux(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!cr(e))
    return;
  const r = Cd(e), o = [];
  for (const s of r) {
    if (!cr(s))
      continue;
    const { top: a, left: i } = EI(e, s);
    let c = a, l = i;
    for (const f of o)
      c -= f.scrollTop, l -= f.scrollLeft;
    if (t !== "none") {
      const f = c < s.scrollTop, d = c + e.offsetHeight > s.scrollTop + s.clientHeight;
      f !== d && (t === "center" ? s.scrollTop = c - s.clientHeight / 2 + e.offsetHeight / 2 : f ? s.scrollTop = c : s.scrollTop = c + e.offsetHeight - s.clientHeight);
    }
    if (n !== "none") {
      const f = l < s.scrollLeft, d = l + e.offsetWidth > s.scrollLeft + s.clientWidth;
      f !== d && (n === "center" ? s.scrollLeft = l - s.clientWidth / 2 + e.offsetWidth / 2 : f ? s.scrollLeft = l : s.scrollLeft = l + e.offsetWidth - s.clientWidth);
    }
    o.push(s);
  }
}
function wp(e) {
  let t = 0, n = 0, r = e;
  for (; r; ) {
    t += r.offsetTop, n += r.offsetLeft;
    const o = r.offsetParent;
    if (!cr(o))
      break;
    t += o.clientTop, n += o.clientLeft, r = o;
  }
  return { top: t, left: n };
}
function EI(e, t) {
  const n = wp(e), r = wp(t);
  return {
    top: n.top - r.top - t.clientTop,
    left: n.left - r.left - t.clientLeft
  };
}
function MI(e, t, n) {
  const { scaleX: r, scaleY: o, x: s, y: a } = t, i = e.left + s + (1 - r) * parseFloat(n), c = e.top + a + (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width * r : e.width, f = o ? e.height * o : e.height;
  return {
    width: l,
    height: f,
    top: c,
    right: i + l,
    bottom: c + f,
    left: i
  };
}
function PI(e, t, n) {
  const { scaleX: r, scaleY: o, x: s, y: a } = t, i = e.left - s - (1 - r) * parseFloat(n), c = e.top - a - (1 - o) * parseFloat(n.slice(n.indexOf(" ") + 1)), l = r ? e.width / r : e.width, f = o ? e.height / o : e.height;
  return {
    width: l,
    height: f,
    top: c,
    right: i + l,
    bottom: c + f,
    left: i
  };
}
function qx({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function Cp(e, t = An(e).translate, n = !0) {
  if (n) {
    const r = jx(
      e,
      (o) => "translate" in o
    );
    if (r) {
      const { translate: o = "" } = r[0];
      if (typeof o == "string") {
        const s = Gs(o);
        if (s)
          return s;
      }
    }
  }
  if (t) {
    const r = Gs(t);
    if (r)
      return r;
  }
  return { x: 0, y: 0, z: 0 };
}
var NI = new Sf((e) => setTimeout(e, 0)), Ps = /* @__PURE__ */ new Map(), AI = Ps.clear.bind(Ps);
function RI(e) {
  const t = e.ownerDocument;
  let n = Ps.get(t);
  if (n) return n;
  n = t.getAnimations(), Ps.set(t, n), NI.schedule(AI);
  const r = n.filter(
    (o) => Dc(o.effect) && o.effect.target === e
  );
  return Ps.set(e, r), n;
}
function OI(e, t) {
  const n = RI(e).filter((r) => {
    var o, s;
    if (Dc(r.effect)) {
      const { target: a } = r.effect;
      if ((s = a && ((o = t.isValidTarget) == null ? void 0 : o.call(t, a))) != null ? s : !0)
        return r.effect.getKeyframes().some((c) => {
          for (const l of t.properties)
            if (c[l]) return !0;
        });
    }
  }).map((r) => {
    const { effect: o, currentTime: s } = r, a = o == null ? void 0 : o.getComputedTiming().duration;
    if (!(r.pending || r.playState === "finished") && typeof a == "number" && typeof s == "number" && s < a)
      return r.currentTime = a, () => {
        r.currentTime = s;
      };
  });
  if (n.length > 0)
    return () => n.forEach((r) => r == null ? void 0 : r());
}
var Sn = class extends kn {
  constructor(e, t = {}) {
    var n, r, o, s;
    const {
      frameTransform: a = Mo(e),
      ignoreTransforms: i,
      getBoundingClientRect: c = Ic
    } = t, l = OI(e, {
      properties: ["transform", "translate", "scale", "width", "height"],
      isValidTarget: (w) => (w !== e || xf()) && w.contains(e)
    }), f = c(e);
    let { top: d, left: h, width: p, height: g } = f, m;
    const x = An(e), C = Tc(x), b = {
      x: (n = C == null ? void 0 : C.scaleX) != null ? n : 1,
      y: (r = C == null ? void 0 : C.scaleY) != null ? r : 1
    }, y = DI(e, x);
    l == null || l(), C && (m = PI(
      f,
      C,
      x.transformOrigin
    ), (i || y) && (d = m.top, h = m.left, p = m.width, g = m.height));
    const S = {
      width: (o = m == null ? void 0 : m.width) != null ? o : p,
      height: (s = m == null ? void 0 : m.height) != null ? s : g
    };
    if (y && !i && m) {
      const w = MI(
        m,
        y,
        x.transformOrigin
      );
      d = w.top, h = w.left, p = w.width, g = w.height, b.x = y.scaleX, b.y = y.scaleY;
    }
    a && (i || (h *= a.scaleX, p *= a.scaleX, d *= a.scaleY, g *= a.scaleY), h += a.x, d += a.y), super(h, d, p, g), this.scale = b, this.intrinsicWidth = S.width, this.intrinsicHeight = S.height;
  }
};
function DI(e, t) {
  const n = e.getAnimations();
  if (!n.length) return null;
  let r, o, s, a = !1;
  for (const i of n) {
    if (i.playState !== "running") continue;
    const c = Dc(i.effect) ? i.effect.getKeyframes() : [], l = c[c.length - 1];
    if (!l) continue;
    const { transform: f, translate: d, scale: h } = l;
    typeof f == "string" && f && (r = f, a = !0), typeof d == "string" && d && (o = d, a = !0), typeof h == "string" && h && (s = h, a = !0);
  }
  return a ? Tc({
    transform: r ?? t.transform,
    translate: o ?? t.translate,
    scale: s ?? t.scale
  }) : null;
}
function Ns(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var II = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, t = "") {
    const { element: n } = this;
    if (Ns(n))
      for (const [r, o] of Object.entries(e)) {
        const s = `${t}${r}`;
        this.initial.has(s) || this.initial.set(s, n.style.getPropertyValue(s)), n.style.setProperty(
          s,
          typeof o == "string" ? o : `${o}px`
        );
      }
  }
  remove(e, t = "") {
    const { element: n } = this;
    if (Ns(n))
      for (const r of e) {
        const o = `${t}${r}`;
        n.style.removeProperty(o);
      }
  }
  reset() {
    const { element: e } = this;
    if (Ns(e)) {
      for (const [t, n] of this.initial)
        e.style.setProperty(t, n);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function Dr(e) {
  return e ? e instanceof zt(e).Element || xa(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function Ys(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = zt(e.target);
  return e instanceof t;
}
function TI(e) {
  if (!e) return !1;
  const { PointerEvent: t } = zt(e.target);
  return e instanceof t;
}
function jI(e) {
  if (!Dr(e)) return !1;
  const { tagName: t } = e;
  return t === "INPUT" || t === "TEXTAREA" || $I(e);
}
function $I(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var yl = {};
function Sd(e) {
  const t = yl[e] == null ? 0 : yl[e] + 1;
  return yl[e] = t, `${e}-${t}`;
}
var WI = ({
  dragOperation: e,
  droppable: t
}) => {
  const n = e.position.current;
  if (!n)
    return null;
  const { id: r } = t;
  if (!t.shape)
    return null;
  if (t.shape.containsPoint(n)) {
    const o = Ht.distance(t.shape.center, n);
    return {
      id: r,
      value: 1 / o,
      type: Oc.PointerIntersection,
      priority: Rc.High
    };
  }
  return null;
}, LI = ({
  dragOperation: e,
  droppable: t
}) => {
  const { shape: n } = e;
  if (!t.shape || !(n != null && n.current))
    return null;
  const r = n.current.intersectionArea(t.shape);
  if (r) {
    const { position: o } = e, s = Ht.distance(t.shape.center, o.current), i = r / (n.current.area + t.shape.area - r) / s;
    return {
      id: t.id,
      value: i,
      type: Oc.ShapeIntersection,
      priority: Rc.Normal
    };
  }
  return null;
}, Xx = (e) => {
  var t;
  return (t = WI(e)) != null ? t : LI(e);
}, FI = (e) => {
  const { dragOperation: t, droppable: n } = e, { shape: r, position: o } = t;
  if (!n.shape)
    return null;
  const s = r ? kn.from(r.current.boundingRectangle).corners : void 0, i = kn.from(
    n.shape.boundingRectangle
  ).corners.reduce(
    (c, l, f) => {
      var d;
      return c + Ht.distance(
        Ht.from(l),
        (d = s == null ? void 0 : s[f]) != null ? d : o.current
      );
    },
    0
  ) / 4;
  return {
    id: n.id,
    value: 1 / i,
    type: Oc.Collision,
    priority: Rc.Normal
  };
}, VI = Object.create, _f = Object.defineProperty, zI = Object.defineProperties, BI = Object.getOwnPropertyDescriptor, HI = Object.getOwnPropertyDescriptors, $i = Object.getOwnPropertySymbols, Zx = Object.prototype.hasOwnProperty, Qx = Object.prototype.propertyIsEnumerable, Jx = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ko = (e) => {
  throw TypeError(e);
}, _d = (e, t, n) => t in e ? _f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ks = (e, t) => {
  for (var n in t || (t = {}))
    Zx.call(t, n) && _d(e, n, t[n]);
  if ($i)
    for (var n of $i(t))
      Qx.call(t, n) && _d(e, n, t[n]);
  return e;
}, kf = (e, t) => zI(e, HI(t)), Sp = (e, t) => _f(e, "name", { value: t, configurable: !0 }), ew = (e, t) => {
  var n = {};
  for (var r in e)
    Zx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $i)
    for (var r of $i(e))
      t.indexOf(r) < 0 && Qx.call(e, r) && (n[r] = e[r]);
  return n;
}, Uo = (e) => {
  var t;
  return [, , , VI((t = e == null ? void 0 : e[Jx("metadata")]) != null ? t : null)];
}, tw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], gs = (e) => e !== void 0 && typeof e != "function" ? Ko("Function expected") : e, GI = (e, t, n, r, o) => ({ kind: tw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ko("Already initialized") : o.push(gs(s || null)) }), zr = (e, t) => _d(t, Jx("metadata"), e[3]), tt = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, qt = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), g = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, m = tw[d + 5], x = d > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && BI(d < 4 ? o : { get [n]() {
    return $e(this, s);
  }, set [n](S) {
    return _t(this, s, S);
  } }, n));
  d ? p && d < 4 && Sp(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Sp(o, n);
  for (var y = r.length - 1; y >= 0; y--)
    l = GI(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => YI(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? $e : Ir)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => _t(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[y])(d ? d < 4 ? p ? s : b[m] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? gs(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? Ko("Object expected") : (gs(a = i.get) && (b.get = a), gs(a = i.set) && (b.set = a), gs(a = i.init) && x.unshift(a));
  return d || zr(e, o), b && _f(o, n, b), p ? d ^ 4 ? s : b : o;
}, Ef = (e, t, n) => t.has(e) || Ko("Cannot " + n), YI = (e, t) => Object(t) !== t ? Ko('Cannot use the "in" operator on this value') : e.has(t), $e = (e, t, n) => (Ef(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => t.has(e) ? Ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _t = (e, t, n, r) => (Ef(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ir = (e, t, n) => (Ef(e, t, "access private method"), n), _p = {
  role: "button",
  roleDescription: "draggable"
}, KI = "dnd-kit-description", UI = "dnd-kit-announcement", qI = {
  draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."
}, XI = {
  dragstart({ operation: { source: e } }) {
    if (e)
      return `Picked up draggable item ${e.id}.`;
  },
  dragover({ operation: { source: e, target: t } }) {
    if (!(!e || e.id === (t == null ? void 0 : t.id)))
      return t ? `Draggable item ${e.id} was moved over droppable target ${t.id}.` : `Draggable item ${e.id} is no longer over a droppable target.`;
  },
  dragend({ operation: { source: e, target: t }, canceled: n }) {
    if (e)
      return n ? `Dragging was cancelled. Draggable item ${e.id} was dropped.` : t ? `Draggable item ${e.id} was dropped over droppable target ${t.id}` : `Draggable item ${e.id} was dropped.`;
  }
};
function ZI(e) {
  const t = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(t);
}
function QI(e, t) {
  const n = document.createElement("div");
  return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function JI(e) {
  const t = document.createElement("div");
  return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var e3 = ["dragover", "dragmove"], t3 = class extends wt {
  constructor(e, t) {
    super(e);
    const {
      id: n,
      idPrefix: {
        description: r = KI,
        announcement: o = UI
      } = {},
      announcements: s = XI,
      screenReaderInstructions: a = qI,
      debounce: i = 500
    } = t ?? {}, c = n ? `${r}-${n}` : Sd(r), l = n ? `${o}-${n}` : Sd(o);
    let f, d, h, p;
    const g = (w = p) => {
      !h || !w || (h == null ? void 0 : h.nodeValue) !== w && (h.nodeValue = w);
    }, m = () => Ti.schedule(g), x = n3(
      m,
      i
    ), C = Object.entries(s).map(
      ([w, M]) => this.manager.monitor.addEventListener(
        w,
        (k, E) => {
          const A = h;
          if (!A) return;
          const O = M == null ? void 0 : M(k, E);
          O && A.nodeValue !== O && (p = O, e3.includes(w) ? x() : (m(), x.cancel()));
        }
      )
    ), b = () => {
      let w = [];
      f != null && f.isConnected || (f = QI(
        c,
        a.draggable
      ), w.push(f)), d != null && d.isConnected || (d = JI(l), h = document.createTextNode(""), d.appendChild(h), w.push(d)), w.length > 0 && document.body.append(...w);
    }, y = /* @__PURE__ */ new Set();
    function S() {
      for (const w of y)
        w();
    }
    this.registerEffect(() => {
      var w;
      y.clear();
      for (const M of this.manager.registry.draggables.value) {
        const k = (w = M.handle) != null ? w : M.element;
        if (k) {
          (!f || !d) && y.add(b), (!ZI(k) || xf()) && !k.hasAttribute("tabindex") && y.add(() => k.setAttribute("tabindex", "0")), !k.hasAttribute("role") && k.tagName.toLowerCase() !== "button" && y.add(
            () => k.setAttribute("role", _p.role)
          ), k.hasAttribute("aria-roledescription") || y.add(
            () => k.setAttribute(
              "aria-roledescription",
              _p.roleDescription
            )
          ), k.hasAttribute("aria-describedby") || y.add(
            () => k.setAttribute("aria-describedby", c)
          );
          for (const A of ["aria-pressed", "aria-grabbed"]) {
            const O = String(M.isDragging);
            k.getAttribute(A) !== O && y.add(() => k.setAttribute(A, O));
          }
          const E = String(M.disabled);
          k.getAttribute("aria-disabled") !== E && y.add(
            () => k.setAttribute("aria-disabled", E)
          );
        }
      }
      y.size > 0 && Ti.schedule(S);
    }), this.destroy = () => {
      super.destroy(), f == null || f.remove(), d == null || d.remove(), C.forEach((w) => w());
    };
  }
};
function n3(e, t) {
  let n;
  const r = () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
  return r.cancel = () => clearTimeout(n), r;
}
var Wi = /* @__PURE__ */ new Map(), nw, rw, ow, sw, kd, As, Fn, Mf, Po, aw, iw, cw, lw, lr = class extends (kd = ba, sw = [Me], ow = [Ue], rw = [Ue], nw = [Ue], kd) {
  constructor(t, n) {
    super(t, n), tt(Fn, 5, this), qe(this, Po), qe(this, As, /* @__PURE__ */ new Set()), qe(this, Mf, tt(Fn, 8, this, /* @__PURE__ */ new Set())), tt(Fn, 11, this), this.registerEffect(Ir(this, Po, aw));
  }
  /**
   * Registers CSS rules to be injected into the active drag operation's
   * document and shadow roots. The StyleInjector handles tracking
   * which roots need the styles and cleaning up when they're no longer needed.
   *
   * Returns a cleanup function that unregisters the rules.
   */
  register(t) {
    return $e(this, As).add(t), () => {
      $e(this, As).delete(t);
    };
  }
  /**
   * Adds an additional root to track for style injection.
   * Returns a cleanup function that removes the root.
   */
  addRoot(t) {
    return Ee(() => {
      const n = new Set(this.additionalRoots);
      n.add(t), this.additionalRoots = n;
    }), () => {
      Ee(() => {
        const n = new Set(this.additionalRoots);
        n.delete(t), this.additionalRoots = n;
      });
    };
  }
  get sourceRoot() {
    var t;
    const { source: n } = this.manager.dragOperation;
    return Oi((t = n == null ? void 0 : n.element) != null ? t : null);
  }
  get targetRoot() {
    var t;
    const { target: n } = this.manager.dragOperation;
    return Oi((t = n == null ? void 0 : n.element) != null ? t : null);
  }
  get roots() {
    const { status: t } = this.manager.dragOperation;
    if (t.initializing || t.initialized) {
      const n = [this.sourceRoot, this.targetRoot].filter(
        (r) => r != null
      );
      return /* @__PURE__ */ new Set([...n, ...this.additionalRoots]);
    }
    return /* @__PURE__ */ new Set();
  }
};
Fn = Uo(kd);
As = /* @__PURE__ */ new WeakMap();
Mf = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
aw = function() {
  const { roots: e } = this, t = [];
  for (const n of e)
    for (const r of $e(this, As))
      t.push(Ir(this, Po, iw).call(this, n, r));
  return () => {
    for (const n of t)
      n();
  };
};
iw = function(e, t) {
  let n = Wi.get(e);
  n || (n = /* @__PURE__ */ new Map(), Wi.set(e, n));
  let r = n.get(t);
  if (!r) {
    const s = bf(e) ? Ir(this, Po, cw).call(this, e, n, t) : Ir(this, Po, lw).call(this, e, n, t);
    if (!s)
      return () => {
      };
    r = s, n.set(t, r);
  }
  r.refCount++;
  let o = !1;
  return () => {
    o || (o = !0, r.refCount--, r.refCount === 0 && r.cleanup());
  };
};
cw = function(e, t, n) {
  var r;
  const o = e.createElement("style"), { nonce: s } = (r = this.options) != null ? r : {};
  s && o.setAttribute("nonce", s), o.textContent = n, e.head.prepend(o);
  const a = new MutationObserver((i) => {
    for (const c of i)
      for (const l of Array.from(c.removedNodes))
        if (l === o) {
          e.head.prepend(o);
          return;
        }
  });
  return a.observe(e.head, { childList: !0 }), {
    refCount: 0,
    cleanup: () => {
      a.disconnect(), o.remove(), t.delete(n), t.size === 0 && Wi.delete(e);
    }
  };
};
lw = function(e, t, n) {
  !("adoptedStyleSheets" in e && Array.isArray(e.adoptedStyleSheets)) && process.env.NODE_ENV !== "production" && console.error(
    "Cannot inject styles: This browser doesn't support adoptedStyleSheets"
  );
  const r = e.ownerDocument.defaultView, { CSSStyleSheet: o } = r ?? {};
  if (!o)
    return process.env.NODE_ENV !== "production" && console.error(
      "Cannot inject styles: CSSStyleSheet constructor not available"
    ), null;
  const s = new o();
  return s.replaceSync(n), e.adoptedStyleSheets.push(s), {
    refCount: 0,
    cleanup: () => {
      var a;
      if (wf(e) && ((a = e.host) != null && a.isConnected)) {
        const i = e.adoptedStyleSheets.indexOf(s);
        i !== -1 && e.adoptedStyleSheets.splice(i, 1);
      }
      t.delete(n), t.size === 0 && Wi.delete(e);
    }
  };
};
qt(Fn, 4, "additionalRoots", sw, lr, Mf);
qt(Fn, 2, "sourceRoot", ow, lr);
qt(Fn, 2, "targetRoot", rw, lr);
qt(Fn, 2, "roots", nw, lr);
zr(Fn, lr);
lr.configure = ya(lr);
var jc = lr, r3 = class extends wt {
  constructor(e, t) {
    super(e, t), this.manager = e;
    const { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(
      jc
    ), o = r == null ? void 0 : r.register(
      `* { cursor: ${n} !important; }`
    );
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
  }
}, wa = "data-dnd-", Ed = `${wa}dropping`, ft = "--dnd-", pn = `${wa}dragging`, Li = `${wa}placeholder`, o3 = [
  pn,
  Li,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], s3 = ["view-transition-name"], a3 = `
  :is(:root,:host) [${pn}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${ft}top, 0px) !important;
    left: var(${ft}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${ft}width, auto);
    max-width: var(${ft}width, auto);
    height: var(${ft}height, auto);
    max-height: var(${ft}height, auto);
    transform: var(${ft}transform, none) !important;
    transition: var(${ft}transition) !important;
  }

  :is(:root,:host) [${Li}] {
    transition: none;
  }

  :is(:root,:host) [${Li}='hidden'] {
    visibility: hidden;
  }

  [${pn}] * {
    pointer-events: none !important;
  }

  [${pn}]:not([${Ed}]) {
    translate: var(${ft}translate) !important;
  }

  [${pn}][style*='${ft}scale'] {
    scale: var(${ft}scale) !important;
    transform-origin: var(${ft}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${pn}][popover]) {
      overflow: visible;
      background: unset;
      border: unset;
      margin: unset;
      padding: unset;
      color: inherit;

      &:is(input, button) {
        border: revert;
        background: revert;
      }
    }
  }
  [${pn}]::backdrop, [${wa}overlay]:not([${pn}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function i3(e, t = "hidden") {
  return Ee(() => {
    const { element: n, manager: r } = e;
    if (!n || !r) return;
    const o = c3(
      n,
      r.registry.droppables
    ), s = [], a = tI(n), { remove: i } = a;
    return l3(o, a, s), d3(a, t), a.remove = () => {
      s.forEach((c) => c()), i.call(a);
    }, a;
  });
}
function c3(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    if (r.element && (e === r.element || e.contains(r.element))) {
      const o = `${wa}${Sd("dom-id")}`;
      r.element.setAttribute(o, ""), n.set(r, o);
    }
  return n;
}
function l3(e, t, n) {
  for (const [r, o] of e) {
    if (!r.element) continue;
    const s = `[${o}]`, a = t.matches(s) ? t : t.querySelector(s);
    if (r.element.removeAttribute(o), !a) continue;
    const i = r.element;
    r.proxy = a, a.removeAttribute(o), bd.set(i, a), n.push(() => {
      bd.delete(i), r.proxy = void 0;
    });
  }
}
function d3(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Li, t);
}
function dw(e, t) {
  return e === t ? !0 : Eo(e) === Eo(t);
}
function kp(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && Dr(t) && t.hasAttribute("popover") && requestAnimationFrame(() => yo(t));
}
function Md(e) {
  return e.tagName === "TR";
}
function u3(e, t, n) {
  const r = new MutationObserver((o) => {
    let s = !1;
    for (const a of o) {
      if (a.target !== e) {
        s = !0;
        continue;
      }
      if (a.type !== "attributes")
        continue;
      const i = a.attributeName;
      if (i.startsWith("aria-") || o3.includes(i))
        continue;
      const c = e.getAttribute(i);
      if (i === "style") {
        if (Ns(e) && Ns(t)) {
          const l = e.style;
          for (const f of Array.from(t.style))
            l.getPropertyValue(f) === "" && t.style.removeProperty(f);
          for (const f of Array.from(l)) {
            if (s3.includes(f) || f.startsWith(ft))
              continue;
            const d = l.getPropertyValue(f);
            t.style.setProperty(f, d);
          }
        }
      } else c !== null ? t.setAttribute(i, c) : t.removeAttribute(i);
    }
    s && n && t.replaceChildren(...e.cloneNode(!0).childNodes);
  });
  return r.observe(e, {
    attributes: !0,
    subtree: !0,
    childList: !0
  }), r;
}
function f3(e, t, n) {
  const r = new MutationObserver((o) => {
    for (const s of o)
      if (s.addedNodes.length !== 0)
        for (const a of Array.from(s.addedNodes)) {
          if (a.contains(e) && e.nextElementSibling !== t) {
            e.insertAdjacentElement("afterend", t), yo(n);
            return;
          }
          if (a.contains(t) && t.previousElementSibling !== e) {
            t.insertAdjacentElement("beforebegin", e), yo(n);
            return;
          }
        }
    e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), yo(n));
  });
  return r.observe(e.ownerDocument.body, {
    childList: !0,
    subtree: !0
  }), r;
}
function h3(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const o = new Sn(e.placeholder, {
      frameTransform: e.frameTransform,
      ignoreTransforms: !0
    }), s = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, a = (e.width - o.width) * s.x + e.delta.x, i = (e.height - o.height) * s.y + e.delta.y, c = Lx();
    if (e.styles.set(
      {
        width: o.width - e.widthOffset,
        height: o.height - e.heightOffset,
        top: e.top + i + c.y,
        left: e.left + a + c.x
      },
      ft
    ), (n = e.getElementMutationObserver()) == null || n.takeRecords(), Md(e.element) && Md(e.placeholder)) {
      const m = Array.from(e.element.cells), x = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(m.map((C) => C.style.width));
      for (const [C, b] of m.entries()) {
        const y = x[C];
        b.style.width = `${y.getBoundingClientRect().width}px`;
      }
    }
    const l = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, f = e.left + a + c.x + l.x, d = e.top + i + c.y + l.y, h = o.width - e.widthOffset, p = o.height - e.heightOffset, g = e.frameTransform;
    e.dragOperation.shape = new kn(
      f * g.scaleX + g.x,
      d * g.scaleY + g.y,
      h * g.scaleX,
      p * g.scaleY
    );
  });
}
var p3 = 250, m3 = "ease";
function v3(e) {
  var t, n, r, o;
  const { animation: s } = e;
  if (typeof s == "function") {
    const b = s({
      source: e.source,
      element: e.element,
      feedbackElement: e.feedbackElement,
      placeholder: e.placeholder,
      translate: e.translate,
      moved: e.moved
    });
    Promise.resolve(b).then(() => {
      e.cleanup(), requestAnimationFrame(e.restoreFocus);
    });
    return;
  }
  const {
    duration: a = p3,
    easing: i = m3
  } = s ?? {};
  yo(e.feedbackElement);
  const [, c] = (t = jx(
    e.feedbackElement,
    (b) => "translate" in b
  )) != null ? t : [];
  c == null || c.pause();
  const l = (n = e.placeholder) != null ? n : e.element, f = {
    frameTransform: dw(e.feedbackElement, l) ? null : void 0
  }, d = new Sn(e.feedbackElement, f), h = (r = Gs(An(e.feedbackElement).translate)) != null ? r : e.translate, p = new Sn(l, f), g = kn.delta(d, p, e.alignment), m = {
    x: h.x - g.x,
    y: h.y - g.y
  }, x = Math.round(d.intrinsicHeight) !== Math.round(p.intrinsicHeight) ? {
    minHeight: [
      `${d.intrinsicHeight}px`,
      `${p.intrinsicHeight}px`
    ],
    maxHeight: [
      `${d.intrinsicHeight}px`,
      `${p.intrinsicHeight}px`
    ]
  } : {}, C = Math.round(d.intrinsicWidth) !== Math.round(p.intrinsicWidth) ? {
    minWidth: [
      `${d.intrinsicWidth}px`,
      `${p.intrinsicWidth}px`
    ],
    maxWidth: [
      `${d.intrinsicWidth}px`,
      `${p.intrinsicWidth}px`
    ]
  } : {};
  e.styles.set({ transition: e.transition }, ft), e.feedbackElement.setAttribute(Ed, ""), (o = e.getElementMutationObserver()) == null || o.takeRecords(), qx({
    element: e.feedbackElement,
    keyframes: kf(Ks(Ks({}, x), C), {
      translate: [
        `${h.x}px ${h.y}px 0`,
        `${m.x}px ${m.y}px 0`
      ]
    }),
    options: {
      duration: Cf(zt(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? a : 0,
      easing: i
    }
  }).then(() => {
    e.feedbackElement.removeAttribute(Ed), c == null || c.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var uw, Pd, Us, Pf, pi, fw, hw, No = class extends (Pd = wt, uw = [Me], Pd) {
  constructor(t, n) {
    super(t, n), qe(this, pi), qe(this, Pf, tt(Us, 8, this)), tt(Us, 11, this), this.state = {
      initial: {},
      current: {}
    };
    const r = t.registry.plugins.get(jc), o = r == null ? void 0 : r.register(a3);
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
    this.registerEffect(Ir(this, pi, fw).bind(this, r)), this.registerEffect(Ir(this, pi, hw));
  }
};
Us = Uo(Pd);
Pf = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakSet();
fw = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = Oi(t);
  if (n)
    return e.addRoot(n);
};
hw = function() {
  var e, t, n, r, o, s, a;
  const { state: i, manager: c, options: l } = this, { dragOperation: f } = c, { position: d, source: h, status: p } = f;
  if (p.idle) {
    i.current = {}, i.initial = {};
    return;
  }
  if (!h) return;
  const { element: g } = h, m = h.pluginConfig(No), x = (t = (e = m == null ? void 0 : m.feedback) != null ? e : l == null ? void 0 : l.feedback) != null ? t : "default", C = typeof x == "function" ? x(h, c) : x;
  if (!g || C === "none" || !p.initialized || p.initializing)
    return;
  const { initial: b } = i, y = (n = this.overlay) != null ? n : g, S = Mo(y), w = Mo(g), M = !dw(g, y), k = new Sn(g, {
    frameTransform: M ? w : null,
    ignoreTransforms: !M
  }), E = {
    x: w.scaleX / S.scaleX,
    y: w.scaleY / S.scaleY
  };
  let { width: A, height: O, top: j, left: $ } = k;
  M && (A = A / E.x, O = O / E.y);
  const V = new II(y), D = An(g), {
    transition: B,
    translate: F,
    boxSizing: X,
    paddingBlockStart: T,
    paddingBlockEnd: W,
    paddingInlineStart: oe,
    paddingInlineEnd: N,
    borderInlineStartWidth: P,
    borderInlineEndWidth: L,
    borderBlockStartWidth: z,
    borderBlockEndWidth: Z
  } = D, U = B.split(",").filter((K) => !/^\s*(transform|translate|scale)\b/.test(K)).join(","), I = Tc(D), J = D.transform, re = C === "clone", de = X === "content-box", me = de ? parseInt(oe) + parseInt(N) + parseInt(P) + parseInt(L) : 0, ge = de ? parseInt(T) + parseInt(W) + parseInt(z) + parseInt(Z) : 0, Se = C !== "move" && !this.overlay ? i3(h, re ? "clone" : "hidden") : null, Ie = Ee(
    () => Ys(c.dragOperation.activatorEvent)
  );
  if (!b.translate) {
    if (this.overlay && I)
      b.translate = { x: I.x, y: I.y };
    else if (F !== "none") {
      const K = Gs(F);
      K && (b.translate = K);
    }
  }
  if (!b.transformOrigin) {
    const K = Ee(() => d.current), ie = $ + ((r = I == null ? void 0 : I.x) != null ? r : 0), he = j + ((o = I == null ? void 0 : I.y) != null ? o : 0);
    b.transformOrigin = {
      x: (K.x - ie * S.scaleX - S.x) / (A * S.scaleX),
      y: (K.y - he * S.scaleY - S.y) / (O * S.scaleY)
    };
  }
  const { transformOrigin: je } = b, dt = j * S.scaleY + S.y, Xe = $ * S.scaleX + S.x;
  if (!b.coordinates && (b.coordinates = {
    x: Xe,
    y: dt
  }, E.x !== 1 || E.y !== 1)) {
    const { scaleX: K, scaleY: ie } = w, { x: he, y: le } = je;
    b.coordinates.x += (A * K - A) * he, b.coordinates.y += (O * ie - O) * le;
  }
  b.dimensions || (b.dimensions = { width: A, height: O }), b.frameTransform || (b.frameTransform = S);
  const rt = {
    x: b.coordinates.x - Xe,
    y: b.coordinates.y - dt
  }, vt = {
    width: (b.dimensions.width * b.frameTransform.scaleX - A * S.scaleX) * je.x,
    height: (b.dimensions.height * b.frameTransform.scaleY - O * S.scaleY) * je.y
  }, We = {
    x: rt.x / S.scaleX + vt.width,
    y: rt.y / S.scaleY + vt.height
  }, Ge = {
    left: $ + We.x,
    top: j + We.y
  };
  y.setAttribute(pn, "true");
  const Qe = Ee(() => f.transform), Dt = (s = b.translate) != null ? s : { x: 0, y: 0 }, Pt = Qe.x * S.scaleX + Dt.x, ve = Qe.y * S.scaleY + Dt.y, Xt = Lx();
  V.set(
    {
      width: A - me,
      height: O - ge,
      top: Ge.top + Xt.y,
      left: Ge.left + Xt.x,
      translate: `${Pt}px ${ve}px 0`,
      transform: this.overlay ? "none" : J,
      transition: U ? `${U}, translate 0ms linear` : "translate 0ms linear",
      scale: M ? `${E.x} ${E.y}` : "",
      "transform-origin": `${je.x * 100}% ${je.y * 100}%`
    },
    ft
  ), Se && (g.insertAdjacentElement("afterend", Se), l != null && l.rootElement && (typeof l.rootElement == "function" ? l.rootElement(h) : l.rootElement).appendChild(g)), wd(y) && (y.hasAttribute("popover") || y.setAttribute("popover", "manual"), yo(y), y.addEventListener("beforetoggle", kp));
  let It, un, fn;
  const Rn = h3({
    placeholder: Se,
    element: g,
    feedbackElement: y,
    frameTransform: S,
    transformOrigin: je,
    width: A,
    height: O,
    top: j,
    left: $,
    widthOffset: me,
    heightOffset: ge,
    delta: We,
    styles: V,
    dragOperation: f,
    getTranslate: () => i.current.translate,
    getElementMutationObserver: () => It,
    getSavedCellWidths: () => fn,
    setSavedCellWidths: (K) => {
      fn = K;
    }
  }), Zt = new Sn(y);
  Ee(() => f.shape = Zt);
  const Qt = zt(y), On = (K) => {
    this.manager.actions.stop({ event: K });
  }, Nt = Cf(Qt);
  Ie && Qt.addEventListener("resize", On), Ee(() => h.status) === "idle" && requestAnimationFrame(() => h.status = "dragging"), Se && (Rn.observe(Se), It = u3(
    g,
    Se,
    re
  ), un = f3(
    g,
    Se,
    y
  ));
  const ot = (a = c.dragOperation.source) == null ? void 0 : a.id, H = () => {
    var K;
    if (!Ie || ot == null) return;
    const ie = c.registry.draggables.get(ot), he = (K = ie == null ? void 0 : ie.handle) != null ? K : ie == null ? void 0 : ie.element;
    cr(he) && he.focus();
  }, ee = () => {
    It == null || It.disconnect(), un == null || un.disconnect(), Rn.disconnect(), Qt.removeEventListener("resize", On), wd(y) && (y.removeEventListener(
      "beforetoggle",
      kp
    ), y.removeAttribute("popover")), y.removeAttribute(pn), V.reset();
    const K = () => {
      var ie;
      if (fn && Md(g)) {
        const Ve = Array.from(g.cells);
        for (const [Tt, Jt] of Ve.entries())
          Jt.style.width = (ie = fn[Tt]) != null ? ie : "";
      }
      h.status = "idle";
      const he = i.current.translate != null, le = f.status.dragging;
      Se && (!le && he || Se.parentElement !== y.parentElement) && y.isConnected && Se.replaceWith(y), Se == null || Se.remove();
    };
    y === this.overlay ? setTimeout(K, 0) : K();
  }, Q = l == null ? void 0 : l.dropAnimation, G = this, ce = va(
    // Update transform on move
    () => {
      var K, ie, he;
      const { transform: le, status: Ve } = f;
      if (!(!le.x && !le.y && !i.current.translate) && Ve.dragging) {
        const Tt = (K = b.translate) != null ? K : { x: 0, y: 0 }, Jt = {
          x: le.x / S.scaleX + Tt.x,
          y: le.y / S.scaleY + Tt.y
        }, ut = i.current.translate, Ye = Ee(() => f.modifiers), Dn = Ee(() => {
          var In;
          return (In = f.shape) == null ? void 0 : In.current;
        }), pr = l == null ? void 0 : l.keyboardTransition, ka = Ie && !Nt && pr !== null ? `${(ie = pr == null ? void 0 : pr.duration) != null ? ie : 250}ms ${(he = pr == null ? void 0 : pr.easing) != null ? he : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        if (V.set(
          {
            transition: U ? `${U}, translate ${ka}` : `translate ${ka}`,
            translate: `${Jt.x}px ${Jt.y}px 0`
          },
          ft
        ), It == null || It.takeRecords(), Dn && Dn !== Zt && ut && !Ye.length) {
          const In = Ht.delta(Jt, ut);
          f.shape = kn.from(
            Dn.boundingRectangle
          ).translate(
            In.x * S.scaleX,
            In.y * S.scaleY
          );
        } else
          f.shape = new Sn(y);
        i.current.translate = Jt;
      }
    },
    // Drop animation
    function() {
      if (f.status.dropped) {
        this.dispose(), h.status = "dropping";
        const K = (m == null ? void 0 : m.dropAnimation) !== void 0 ? m.dropAnimation : G.dropAnimation !== void 0 ? G.dropAnimation : Q;
        let ie = i.current.translate;
        const he = ie != null;
        if (!ie && g !== y && (ie = { x: 0, y: 0 }), !ie || K === null) {
          ee();
          return;
        }
        c.renderer.rendering.then(() => {
          v3({
            source: h,
            element: g,
            feedbackElement: y,
            placeholder: Se,
            translate: ie,
            moved: he,
            transition: B,
            alignment: h.alignment,
            styles: V,
            animation: K ?? void 0,
            getElementMutationObserver: () => It,
            cleanup: ee,
            restoreFocus: H
          });
        });
      }
    }
  );
  return () => {
    ee(), ce();
  };
};
qt(Us, 4, "overlay", uw, No, Pf);
zr(Us, No);
No.configure = ya(No);
var pw = No, ts = !0, g3 = !1, mw, vw, gw, yw, Qn, Nf, Af;
yw = (gw = [Me], Gt.Forward), vw = (mw = [Me], Gt.Reverse);
var qs = class {
  constructor() {
    qe(this, Nf, tt(Qn, 8, this, ts)), tt(Qn, 11, this), qe(this, Af, tt(Qn, 12, this, ts)), tt(Qn, 15, this);
  }
  isLocked(e) {
    return e === Gt.Idle ? !1 : e == null ? this[Gt.Forward] === ts && this[Gt.Reverse] === ts : this[e] === ts;
  }
  unlock(e) {
    e !== Gt.Idle && (this[e] = g3);
  }
};
Qn = Uo(null);
Nf = /* @__PURE__ */ new WeakMap();
Af = /* @__PURE__ */ new WeakMap();
qt(Qn, 4, yw, gw, qs, Nf);
qt(Qn, 4, vw, mw, qs, Af);
zr(Qn, qs);
var y3 = [Gt.Forward, Gt.Reverse], Ep = class {
  constructor() {
    this.x = new qs(), this.y = new qs();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, b3 = class extends wt {
  constructor(e) {
    super(e);
    const t = Fo(new Ep());
    let n = null;
    this.signal = t, Ut(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new Ep();
        return;
      }
      const { delta: o } = e.dragOperation.position;
      if (n) {
        const s = {
          x: Mp(o.x, n.x),
          y: Mp(o.y, n.y)
        }, a = t.peek();
        Be(() => {
          for (const i of Y0)
            for (const c of y3)
              s[i] === c && a[i].unlock(c);
          t.value = a;
        });
      }
      n = o;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function Mp(e, t) {
  return Math.sign(e - t);
}
var bw, Nd, Xs, Rf, Xn, Ad, Ca = class extends (Nd = ba, bw = [Me], Nd) {
  constructor(e) {
    super(e), qe(this, Rf, tt(Xs, 8, this, !1)), tt(Xs, 11, this), qe(this, Xn), qe(this, Ad, () => {
      if (!$e(this, Xn))
        return;
      const { element: s, by: a } = $e(this, Xn);
      a.y && (s.scrollTop += a.y), a.x && (s.scrollLeft += a.x);
    }), this.scroll = (s, a) => {
      var i;
      if (this.disabled)
        return !1;
      const c = this.getScrollableElements();
      if (!c)
        return _t(this, Xn, void 0), !1;
      const { position: l } = this.manager.dragOperation, f = l == null ? void 0 : l.current;
      if (f) {
        const { by: d } = s ?? {}, h = d ? {
          x: Pp(d.x),
          y: Pp(d.y)
        } : void 0, p = h ? void 0 : this.scrollIntentTracker.current;
        if (p != null && p.isLocked())
          return !1;
        for (const g of c) {
          const m = pI(g, d);
          if (m.x || m.y) {
            const { speed: x, direction: C } = kI(
              g,
              f,
              h,
              a == null ? void 0 : a.acceleration,
              a == null ? void 0 : a.threshold
            );
            if (p)
              for (const b of Y0)
                p[b].isLocked(C[b]) && (x[b] = 0, C[b] = 0);
            if (C.x || C.y) {
              const { x: b, y } = d ?? C, S = b * x.x, w = y * x.y;
              if (S || w) {
                const M = (i = $e(this, Xn)) == null ? void 0 : i.by;
                if (this.autoScrolling && M && (M.x && !S || M.y && !w))
                  continue;
                return _t(this, Xn, {
                  element: g,
                  by: {
                    x: S,
                    y: w
                  }
                }), Ti.schedule($e(this, Ad)), !0;
              }
            }
          }
        }
      }
      return _t(this, Xn, void 0), !1;
    };
    let t = null, n = null;
    const r = sd(() => {
      const { position: s, source: a } = e.dragOperation;
      if (!s)
        return null;
      const i = Fx(
        Oi(a == null ? void 0 : a.element),
        s.current
      );
      return i && (t = i), i ?? t;
    }), o = sd(() => {
      const s = r.value, { documentElement: a } = Yo(s);
      if (!s || s === a) {
        const { target: i } = e.dragOperation, c = i == null ? void 0 : i.element;
        if (c) {
          const l = Cd(c, {
            excludeElement: !1
          });
          return n = l, l;
        }
      }
      if (s) {
        const i = Cd(s, {
          excludeElement: !1
        });
        return this.autoScrolling && n && i.size < (n == null ? void 0 : n.size) ? n : (n = i, i);
      }
      return n = null, null;
    }, mn);
    this.getScrollableElements = () => o.value, this.scrollIntentTracker = new b3(e), this.destroy = e.monitor.addEventListener("dragmove", (s) => {
      this.disabled || s.defaultPrevented || !Ys(e.dragOperation.activatorEvent) || !s.by || this.scroll({ by: s.by }) && s.preventDefault();
    });
  }
};
Xs = Uo(Nd);
Rf = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
Ad = /* @__PURE__ */ new WeakMap();
qt(Xs, 4, "autoScrolling", bw, Ca, Rf);
zr(Xs, Ca);
function Pp(e) {
  return e > 0 ? Gt.Forward : e < 0 ? Gt.Reverse : Gt.Idle;
}
var x3 = class {
  constructor(e) {
    this.scheduler = e, this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set(), this.flush = () => {
      const { tasks: t, resolvers: n } = this;
      this.pending = !1, this.tasks = /* @__PURE__ */ new Set(), this.resolvers = /* @__PURE__ */ new Set();
      for (const r of t)
        r();
      for (const r of n)
        r();
    };
  }
  schedule(e) {
    return this.tasks.add(e), this.pending || (this.pending = !0, this.scheduler(this.flush)), new Promise((t) => this.resolvers.add(t));
  }
}, w3 = new x3((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), C3 = 10, Rd = class extends wt {
  constructor(t, n) {
    super(t, n);
    const r = t.registry.plugins.get(Ca);
    if (!r)
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = Ut(() => {
      var o, s, a;
      if (this.disabled)
        return;
      const { position: i, status: c } = t.dragOperation;
      if (c.dragging) {
        const l = {
          acceleration: (o = this.options) == null ? void 0 : o.acceleration,
          threshold: typeof ((s = this.options) == null ? void 0 : s.threshold) == "number" ? { x: this.options.threshold, y: this.options.threshold } : (a = this.options) == null ? void 0 : a.threshold
        };
        if (r.scroll(void 0, l)) {
          r.autoScrolling = !0;
          const d = setInterval(
            () => w3.schedule(
              () => r.scroll(void 0, l)
            ),
            C3
          );
          return () => {
            clearInterval(d);
          };
        } else
          r.autoScrolling = !1;
      }
    });
  }
};
Rd.configure = ya(Rd);
var xw = Rd, Np = {
  capture: !0,
  passive: !0
}, ys, S3 = class extends ba {
  constructor(e) {
    super(e), qe(this, ys), this.handleScroll = () => {
      $e(this, ys) == null && _t(this, ys, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), _t(this, ys, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = Ut(() => {
      var n, r, o;
      if (t.status.dragging) {
        const a = (o = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? o : document;
        return a.addEventListener("scroll", this.handleScroll, Np), () => {
          a.removeEventListener(
            "scroll",
            this.handleScroll,
            Np
          );
        };
      }
    });
  }
};
ys = /* @__PURE__ */ new WeakMap();
var _3 = "* { user-select: none !important; -webkit-user-select: none !important; }", k3 = class extends wt {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(
      jc
    ), n = t == null ? void 0 : t.register(_3);
    if (this.destroy = Ut(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized)
        return bl(), document.addEventListener("selectionchange", bl, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", bl, {
            capture: !0
          });
        };
    }), n) {
      const r = this.destroy.bind(this);
      this.destroy = () => {
        n(), r();
      };
    }
  }
};
function bl() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var bs = Object.freeze({
  offset: 10,
  keyboardCodes: {
    start: ["Space", "Enter"],
    cancel: ["Escape"],
    end: ["Space", "Enter", "Tab"],
    up: ["ArrowUp"],
    down: ["ArrowDown"],
    left: ["ArrowLeft"],
    right: ["ArrowRight"]
  },
  preventActivation(e, t) {
    var n;
    const r = (n = t.handle) != null ? n : t.element;
    return e.target !== r;
  }
}), ao, Fi = class extends _o {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, ao, []), this.listeners = new Vx(), this.handleSourceKeyDown = (r, o, s) => {
      if (this.disabled || r.defaultPrevented || !Dr(r.target) || o.disabled)
        return;
      const {
        keyboardCodes: a = bs.keyboardCodes,
        preventActivation: i = bs.preventActivation
      } = s ?? {};
      a.start.includes(r.code) && this.manager.dragOperation.status.idle && (i != null && i(r, o) || this.handleStart(r, o, s));
    };
  }
  bind(t, n = this.options) {
    return Ut(() => {
      var o;
      const s = (o = t.handle) != null ? o : t.element, a = (i) => {
        Ys(i) && this.handleSourceKeyDown(i, t, n);
      };
      if (s)
        return s.addEventListener("keydown", a), () => {
          s.removeEventListener("keydown", a);
        };
    });
  }
  handleStart(t, n, r) {
    const { element: o } = n;
    if (!o)
      throw new Error("Source draggable does not have an associated element");
    t.preventDefault(), t.stopImmediatePropagation(), Ux(o);
    const { center: s } = new Sn(o);
    if (this.manager.actions.start({
      event: t,
      coordinates: {
        x: s.x,
        y: s.y
      },
      source: n
    }).signal.aborted) return this.cleanup();
    this.sideEffects();
    const i = Yo(o), c = [
      this.listeners.bind(i, [
        {
          type: "keydown",
          listener: (l) => this.handleKeyDown(l, n, r),
          options: { capture: !0 }
        }
      ])
    ];
    $e(this, ao).push(...c);
  }
  handleKeyDown(t, n, r) {
    const { keyboardCodes: o = bs.keyboardCodes } = r ?? {};
    if (Zr(t, [...o.end, ...o.cancel])) {
      t.preventDefault();
      const s = Zr(t, o.cancel);
      this.handleEnd(t, s);
      return;
    }
    Zr(t, o.up) ? this.handleMove("up", t) : Zr(t, o.down) && this.handleMove("down", t), Zr(t, o.left) ? this.handleMove("left", t) : Zr(t, o.right) && this.handleMove("right", t);
  }
  handleEnd(t, n) {
    this.manager.actions.stop({
      event: t,
      canceled: n
    }), this.cleanup();
  }
  handleMove(t, n) {
    var r, o;
    const { shape: s } = this.manager.dragOperation, a = n.shiftKey ? 5 : 1;
    let i = {
      x: 0,
      y: 0
    }, c = (o = (r = this.options) == null ? void 0 : r.offset) != null ? o : bs.offset;
    if (typeof c == "number" && (c = { x: c, y: c }), !!s) {
      switch (t) {
        case "up":
          i = { x: 0, y: -c.y * a };
          break;
        case "down":
          i = { x: 0, y: c.y * a };
          break;
        case "left":
          i = { x: -c.x * a, y: 0 };
          break;
        case "right":
          i = { x: c.x * a, y: 0 };
          break;
      }
      (i.x || i.y) && (n.preventDefault(), this.manager.actions.move({
        event: n,
        by: i
      }));
    }
  }
  sideEffects() {
    const t = this.manager.registry.plugins.get(xw);
    (t == null ? void 0 : t.disabled) === !1 && (t.disable(), $e(this, ao).push(() => {
      t.enable();
    }));
  }
  cleanup() {
    $e(this, ao).forEach((t) => t()), _t(this, ao, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
ao = /* @__PURE__ */ new WeakMap();
Fi.configure = ya(Fi);
Fi.defaults = bs;
var ww = Fi;
function Zr(e, t) {
  return t.includes(e.code);
}
var _r, E3 = class extends _x {
  constructor() {
    super(...arguments), qe(this, _r);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        _t(this, _r, ko(e));
        break;
      case "pointermove":
        if (!$e(this, _r)) return;
        const { x: t, y: n } = ko(e), r = {
          x: t - $e(this, _r).x,
          y: n - $e(this, _r).y
        }, { tolerance: o } = this.options;
        if (o && pd(r, o)) {
          this.abort();
          return;
        }
        pd(r, this.options.value) && this.activate(e);
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    _t(this, _r, void 0);
  }
};
_r = /* @__PURE__ */ new WeakMap();
var io, kr, M3 = class extends _x {
  constructor() {
    super(...arguments), qe(this, io), qe(this, kr);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        _t(this, kr, ko(e)), _t(this, io, setTimeout(
          () => this.activate(e),
          this.options.value
        ));
        break;
      case "pointermove":
        if (!$e(this, kr)) return;
        const { x: t, y: n } = ko(e), r = {
          x: t - $e(this, kr).x,
          y: n - $e(this, kr).y
        };
        pd(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    $e(this, io) && (clearTimeout($e(this, io)), _t(this, kr, void 0), _t(this, io, void 0));
  }
};
io = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakMap();
var fo = class {
};
fo.Delay = M3;
fo.Distance = E3;
var Od = Object.freeze({
  activationConstraints(e, t) {
    var n;
    const { pointerType: r, target: o } = e;
    if (!(r === "mouse" && Dr(o) && (t.handle === o || (n = t.handle) != null && n.contains(o))))
      return r === "touch" ? [
        new fo.Delay({ value: 250, tolerance: 5 })
      ] : jI(o) && !e.defaultPrevented ? [
        new fo.Delay({ value: 200, tolerance: 0 })
      ] : [
        new fo.Delay({ value: 200, tolerance: 10 }),
        new fo.Distance({ value: 5 })
      ];
  },
  preventActivation(e, t) {
    var n;
    const { target: r } = e;
    if (r === t.element || r === t.handle || !Dr(r) || (n = t.handle) != null && n.contains(r)) return !1;
    const o = rI(r);
    return o === t.element ? !1 : !!o;
  }
}), co, Vi = class extends _o {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, co, /* @__PURE__ */ new Set()), this.listeners = new Vx(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, this.handleMove = () => {
      const { event: r, coordinates: o } = this.latest;
      !r || !o || this.manager.actions.move({ event: r, to: o });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: o = Od.activationConstraints } = r ?? {};
    return typeof o == "function" ? o(t, n) : o;
  }
  bind(t, n = this.options) {
    return Ut(() => {
      var o;
      const s = new AbortController(), { signal: a } = s, i = (l) => {
        TI(l) && this.handlePointerDown(l, t, n);
      };
      let c = [(o = t.handle) != null ? o : t.element];
      n != null && n.activatorElements && (Array.isArray(n.activatorElements) ? c = n.activatorElements : c = n.activatorElements(t));
      for (const l of c)
        l && (A3(l.ownerDocument.defaultView), l.addEventListener("pointerdown", i, { signal: a }));
      return () => s.abort();
    });
  }
  handlePointerDown(t, n, r) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !Dr(t.target) || n.disabled || P3(t) || !this.manager.dragOperation.status.idle)
      return;
    const { preventActivation: o = Od.preventActivation } = r ?? {};
    if (o != null && o(t, n))
      return;
    const { target: s } = t, a = cr(s) && s.draggable && s.getAttribute("draggable") === "true", i = Mo(n.element), { x: c, y: l } = ko(t);
    this.initialCoordinates = {
      x: c * i.scaleX + i.x,
      y: l * i.scaleY + i.y
    };
    const f = this.activationConstraints(t, n, r);
    t.sensor = this;
    const d = new U5(
      f,
      (m) => this.handleStart(n, m)
    );
    d.signal.onabort = () => this.handleCancel(t), d.onEvent(t), this.controller = d;
    const h = yd(), p = this.listeners.bind(h, [
      {
        type: "pointermove",
        listener: (m) => this.handlePointerMove(m, n)
      },
      {
        type: "pointerup",
        listener: this.handlePointerUp,
        options: {
          capture: !0
        }
      },
      {
        type: "pointercancel",
        listener: this.handleCancel
      },
      {
        // Cancel activation if there is a competing Drag and Drop interaction
        type: "dragstart",
        listener: a ? this.handleCancel : Ua,
        options: {
          capture: !0
        }
      }
    ]), g = () => {
      p(), this.initialCoordinates = void 0;
    };
    $e(this, co).add(g);
  }
  handlePointerMove(t, n) {
    var r, o;
    if (((r = this.controller) == null ? void 0 : r.activated) === !1) {
      (o = this.controller) == null || o.onEvent(t);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const s = ko(t), a = Mo(n.element);
      s.x = s.x * a.scaleX + a.x, s.y = s.y * a.scaleY + a.y, t.preventDefault(), t.stopPropagation(), this.latest.event = t, this.latest.coordinates = s, Ti.schedule(this.handleMove);
    }
  }
  handlePointerUp(t) {
    const { status: n } = this.manager.dragOperation;
    if (!n.idle) {
      t.preventDefault(), t.stopPropagation();
      const r = !n.initialized;
      this.manager.actions.stop({ event: t, canceled: r });
    }
    this.cleanup();
  }
  handleKeyDown(t) {
    t.key === "Escape" && (t.preventDefault(), this.handleCancel(t));
  }
  handleStart(t, n) {
    const { manager: r, initialCoordinates: o } = this;
    if (!o || !r.dragOperation.status.idle || n.defaultPrevented)
      return;
    if (r.actions.start({
      coordinates: o,
      event: n,
      source: t
    }).signal.aborted) return this.cleanup();
    n.preventDefault();
    const i = Yo(n.target).body;
    try {
      i.setPointerCapture(n.pointerId);
    } catch {
      this.handleCancel(n);
      return;
    }
    const c = Dr(n.target) ? [n.target, i] : i, l = this.listeners.bind(c, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: Ua,
        options: {
          passive: !1
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: Ua
      },
      {
        type: "contextmenu",
        listener: Ua
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    $e(this, co).add(l);
  }
  handleCancel(t) {
    const { dragOperation: n } = this.manager;
    n.status.initialized && this.manager.actions.stop({ event: t, canceled: !0 }), this.cleanup();
  }
  cleanup() {
    const { controller: t } = this;
    this.controller = void 0, t && !t.signal.aborted && t.abort(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, $e(this, co).forEach((n) => n()), $e(this, co).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
co = /* @__PURE__ */ new WeakMap();
Vi.configure = ya(Vi);
Vi.defaults = Od;
var Cw = Vi;
function P3(e) {
  return "sensor" in e;
}
function Ua(e) {
  e.preventDefault();
}
function N3() {
}
var Ap = /* @__PURE__ */ new WeakSet();
function A3(e) {
  !e || Ap.has(e) || (e.addEventListener("touchmove", N3, {
    capture: !1,
    passive: !1
  }), Ap.add(e));
}
var bo = {
  modifiers: [],
  plugins: [t3, xw, r3, pw, k3],
  sensors: [Cw, ww]
}, Sw = class extends Z5 {
  constructor(e = {}) {
    const t = on(e.plugins, bo.plugins), n = on(e.sensors, bo.sensors), r = on(
      e.modifiers,
      bo.modifiers
    );
    super(kf(Ks({}, e), {
      plugins: [S3, Ca, jc, ...t],
      sensors: n,
      modifiers: r
    }));
  }
}, _w, kw, Dd, Jn, Of, Df, $c = class extends (Dd = En, kw = [Me], _w = [Me], Dd) {
  constructor(e, t) {
    var n = e, {
      element: r,
      effects: o = () => [],
      handle: s
    } = n, a = ew(n, [
      "element",
      "effects",
      "handle"
    ]);
    super(
      Ks({
        effects: () => [
          ...o(),
          () => {
            var i, c;
            const { manager: l } = this;
            if (!l) return;
            const d = ((c = (i = this.sensors) == null ? void 0 : i.map(zs)) != null ? c : [
              ...l.sensors
            ]).map((h) => {
              const p = h instanceof _o ? h : l.registry.register(h.plugin), g = h instanceof _o ? void 0 : h.options;
              return p.bind(this, g);
            });
            return function() {
              d.forEach((p) => p());
            };
          }
        ]
      }, a),
      t
    ), qe(this, Of, tt(Jn, 8, this)), tt(Jn, 11, this), qe(this, Df, tt(Jn, 12, this)), tt(Jn, 15, this), this.element = r, this.handle = s;
  }
};
Jn = Uo(Dd);
Of = /* @__PURE__ */ new WeakMap();
Df = /* @__PURE__ */ new WeakMap();
qt(Jn, 4, "handle", kw, $c, Of);
qt(Jn, 4, "element", _w, $c, Df);
zr(Jn, $c);
var Ew, Mw, Id, er, If, xl, Pw, Nw, Rs, Tf, jf = class extends (Id = Mn, Mw = [Me], Ew = [Me], Id) {
  constructor(e, t) {
    var n = e, { element: r, effects: o = () => [] } = n, s = ew(n, ["element", "effects"]);
    const { collisionDetector: a = Xx } = s, i = (l) => {
      const { manager: f, element: d } = this;
      if (!d || l === null) {
        this.shape = void 0;
        return;
      }
      if (!f) return;
      const h = new Sn(d), p = Ee(() => this.shape);
      return h && (p != null && p.equals(h)) ? p : (this.shape = h, h);
    }, c = Fo(!1);
    super(
      kf(Ks({}, s), {
        collisionDetector: a,
        effects: () => [
          ...o(),
          () => {
            const { element: l, manager: f } = this;
            if (!f) return;
            const { dragOperation: d } = f, { source: h } = d;
            c.value = !!(h && d.status.initialized && l && !this.disabled && this.accepts(h));
          },
          () => {
            const { element: l } = this;
            if (c.value && l) {
              const f = new hI(
                l,
                i
              );
              return () => {
                f.disconnect(), this.shape = void 0;
              };
            }
          },
          () => {
            var l;
            if ((l = this.manager) != null && l.dragOperation.status.initialized)
              return () => {
                this.shape = void 0;
              };
          }
        ]
      }),
      t
    ), qe(this, Rs), qe(this, If, tt(er, 8, this)), tt(er, 11, this), qe(this, Tf, tt(er, 12, this)), tt(er, 15, this), this.element = r, this.refreshShape = () => i();
  }
  set element(e) {
    _t(this, Rs, e, Nw);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : $e(this, Rs, Pw);
  }
};
er = Uo(Id);
If = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakSet();
Tf = /* @__PURE__ */ new WeakMap();
xl = qt(er, 20, "#element", Mw, Rs, If), Pw = xl.get, Nw = xl.set;
qt(er, 4, "proxy", Ew, jf, Tf);
zr(er, jf);
function R3(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Os(e) {
  var t;
  if (e != null)
    return R3(e) ? (t = e.current) != null ? t : void 0 : e;
}
var O3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = O3 ? Vd : wn;
function D3() {
  const e = at(0)[1];
  return ke(() => {
    e((t) => t + 1);
  }, [e]);
}
function I3(e, t) {
  const n = pt(/* @__PURE__ */ new Map()), r = D3();
  return qo(() => {
    if (!e) {
      n.current.clear();
      return;
    }
    return Ut(() => {
      var o;
      let s = !1, a = !1;
      for (const i of n.current) {
        const [c] = i, l = Ee(() => i[1]), f = e[c];
        l !== f && (s = !0, n.current.set(c, f), a = (o = t == null ? void 0 : t(c, l, f)) != null ? o : !1);
      }
      s && (a ? queueMicrotask(() => Pl(r)) : r());
    });
  }, [e]), ho(
    () => e && new Proxy(e, {
      get(o, s) {
        const a = o[s];
        return n.current.set(s, a), a;
      }
    }),
    [e]
  );
}
function T3(e, t) {
  e();
}
function Qr(e) {
  const t = pt(e);
  return qo(() => {
    t.current = e;
  }, [e]), t;
}
function yt(e, t, n = wn, r = Object.is) {
  const o = pt(e);
  n(() => {
    const s = o.current;
    r(e, s) || (o.current = e, t(e, s));
  }, [t, e]);
}
function wl(e, t) {
  const n = pt(Os(e));
  qo(() => {
    const r = Os(e);
    r !== n.current && (n.current = r, t(r));
  });
}
var Rp = Object.getOwnPropertySymbols, j3 = Object.prototype.hasOwnProperty, $3 = Object.prototype.propertyIsEnumerable, W3 = (e, t) => {
  var n = {};
  for (var r in e)
    j3.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Rp)
    for (var r of Rp(e))
      t.indexOf(r) < 0 && $3.call(e, r) && (n[r] = e[r]);
  return n;
}, L3 = new Sw(), Aw = Zs(
  L3
), F3 = M1(
  Hp(({ children: e }, t) => {
    const [n, r] = at(0), o = pt(null), s = pt(null), a = ho(
      () => ({
        renderer: {
          get rendering() {
            var i;
            return (i = o.current) != null ? i : Promise.resolve();
          }
        },
        trackRendering(i) {
          o.current || (o.current = new Promise((c) => {
            s.current = c;
          })), P1(() => {
            i(), r((c) => c + 1);
          });
        }
      }),
      []
    );
    return qo(() => {
      var i;
      (i = s.current) == null || i.call(s), o.current = null;
    }, [e, n]), N1(t, () => a), null;
  })
), Cl = [void 0, mn];
function Rw(e) {
  var t = e, {
    children: n,
    onCollision: r,
    onBeforeDragStart: o,
    onDragStart: s,
    onDragMove: a,
    onDragOver: i,
    onDragEnd: c
  } = t, l = W3(t, [
    "children",
    "onCollision",
    "onBeforeDragStart",
    "onDragStart",
    "onDragMove",
    "onDragOver",
    "onDragEnd"
  ]);
  const f = pt(null), {
    plugins: d,
    modifiers: h,
    sensors: p
  } = l, g = on(d, bo.plugins), m = on(p, bo.sensors), x = on(
    h,
    bo.modifiers
  ), C = Qr(o), b = Qr(s), y = Qr(i), S = Qr(a), w = Qr(c), M = Qr(r), k = V3(() => {
    var E;
    return (E = l.manager) != null ? E : new Sw(l);
  });
  return wn(() => {
    if (!f.current) throw new Error("Renderer not found");
    const { renderer: E, trackRendering: A } = f.current, { monitor: O } = k;
    k.renderer = E;
    const j = [
      O.addEventListener("beforedragstart", ($) => {
        const V = C.current;
        V && A(() => V($, k));
      }),
      O.addEventListener(
        "dragstart",
        ($) => {
          var V;
          return (V = b.current) == null ? void 0 : V.call(b, $, k);
        }
      ),
      O.addEventListener("dragover", ($) => {
        const V = y.current;
        V && A(() => V($, k));
      }),
      O.addEventListener("dragmove", ($) => {
        const V = S.current;
        V && A(() => V($, k));
      }),
      O.addEventListener("dragend", ($) => {
        const V = w.current;
        V && A(() => V($, k));
      }),
      O.addEventListener(
        "collision",
        ($) => {
          var V;
          return (V = M.current) == null ? void 0 : V.call(M, $, k);
        }
      )
    ];
    return () => j.forEach(($) => $());
  }, [k]), yt(
    g,
    () => k && (k.plugins = g),
    ...Cl
  ), yt(
    m,
    () => k && (k.sensors = m),
    ...Cl
  ), yt(
    x,
    () => k && (k.modifiers = x),
    ...Cl
  ), /* @__PURE__ */ u.jsxs(Aw.Provider, { value: k, children: [
    /* @__PURE__ */ u.jsx(F3, { ref: f, children: n }),
    n
  ] });
}
function V3(e) {
  const t = pt(null);
  return t.current || (t.current = e()), E1(() => () => {
    var n;
    return (n = t.current) == null ? void 0 : n.destroy();
  }, []), t.current;
}
function z3() {
  return Ds(Aw);
}
function B3(e) {
  var t;
  const n = (t = z3()) != null ? t : void 0, [r] = at(() => e(n));
  return r.manager !== n && (r.manager = n), qo(r.register, [n, r]), r;
}
var H3 = Object.create, Ow = Object.defineProperty, G3 = Object.getOwnPropertyDescriptor, Dw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Wc = (e) => {
  throw TypeError(e);
}, Y3 = (e, t, n) => t in e ? Ow(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, K3 = (e) => {
  var t;
  return [, , , H3((t = e == null ? void 0 : e[Dw("metadata")]) != null ? t : null)];
}, Iw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Tw = (e) => e !== void 0 && typeof e != "function" ? Wc("Function expected") : e, U3 = (e, t, n, r, o) => ({ kind: Iw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Wc("Already initialized") : o.push(Tw(s || null)) }), q3 = (e, t) => Y3(t, Dw("metadata"), e[3]), X3 = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, jw = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, d = !1, h = !1, p = 2, g = Iw[f + 5], m = e[p] || (e[p] = []), x = (o = o.prototype, G3(o, n)), C = r.length - 1; C >= 0; C--)
    c = U3(f, n, i = {}, e[3], m), c.static = d, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(x[g], c), i._ = 1, Tw(a) && (x[g] = a);
  return x && Ow(o, n, x), o;
}, $w = (e, t, n) => t.has(e) || Wc("Cannot " + n), Z3 = (e, t, n) => ($w(e, t, "read from private field"), t.get(e)), Q3 = (e, t, n) => t.has(e) ? Wc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), J3 = (e, t, n, r) => ($w(e, t, "write to private field"), t.set(e, n), n), ns = class Td {
  /**
   * @param {number} Coordinate of the point on the horizontal axis
   * @param {number} Coordinate of the point on the vertical axis
   */
  constructor(t, n) {
    this.x = t, this.y = n;
  }
  /**
   * Returns the delta between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static delta(t, n) {
    return new Td(t.x - n.x, t.y - n.y);
  }
  /**
   * Returns the distance (hypotenuse) between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static distance(t, n) {
    return Math.hypot(t.x - n.x, t.y - n.y);
  }
  /**
   * Returns true if both points are equal.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static equals(t, n) {
    return t.x === n.x && t.y === n.y;
  }
  static from({ x: t, y: n }) {
    return new Td(t, n);
  }
}, Ww, Lw, jd, mi, Sa, $f = class extends (jd = Fr, Lw = [Ue], Ww = [Ue], jd) {
  constructor(e) {
    const t = ns.from(e);
    super(t, (n, r) => ns.equals(n, r)), X3(Sa, 5, this), Q3(this, mi, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return ns.delta(this.current, this.initial);
  }
  get direction() {
    const { current: e, previous: t } = this;
    if (!t) return null;
    const n = {
      x: e.x - t.x,
      y: e.y - t.y
    };
    return !n.x && !n.y ? null : Math.abs(n.x) > Math.abs(n.y) ? n.x > 0 ? "right" : "left" : n.y > 0 ? "down" : "up";
  }
  get current() {
    return super.current;
  }
  set current(e) {
    const { current: t } = this, n = ns.from(e), r = {
      x: n.x - t.x,
      y: n.y - t.y
    }, o = Date.now(), s = o - Z3(this, mi), a = (i) => Math.round(i / s * 100);
    Be(() => {
      J3(this, mi, o), this.velocity = {
        x: a(r.x),
        y: a(r.y)
      }, super.current = n;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(ns.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
Sa = K3(jd);
mi = /* @__PURE__ */ new WeakMap();
jw(Sa, 2, "delta", Lw, $f);
jw(Sa, 2, "direction", Ww, $f);
q3(Sa, $f);
var Fw = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Fw || {});
Object.values(Fw);
var eT = Object.create, Vw = Object.defineProperty, tT = Object.defineProperties, nT = Object.getOwnPropertyDescriptor, rT = Object.getOwnPropertyDescriptors, zi = Object.getOwnPropertySymbols, zw = Object.prototype.hasOwnProperty, Bw = Object.prototype.propertyIsEnumerable, oT = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), _a = (e) => {
  throw TypeError(e);
}, $d = (e, t, n) => t in e ? Vw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sl = (e, t) => {
  for (var n in t || (t = {}))
    zw.call(t, n) && $d(e, n, t[n]);
  if (zi)
    for (var n of zi(t))
      Bw.call(t, n) && $d(e, n, t[n]);
  return e;
}, _l = (e, t) => tT(e, rT(t)), sT = (e, t) => {
  var n = {};
  for (var r in e)
    zw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && zi)
    for (var r of zi(e))
      t.indexOf(r) < 0 && Bw.call(e, r) && (n[r] = e[r]);
  return n;
}, aT = (e) => {
  var t;
  return [, , , eT((t = void 0) != null ? t : null)];
}, Hw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], xs = (e) => e !== void 0 && typeof e != "function" ? _a("Function expected") : e, iT = (e, t, n, r, o) => ({ kind: Hw[e], name: t, metadata: r, addInitializer: (s) => n._ ? _a("Already initialized") : o.push(xs(s || null)) }), cT = (e, t) => $d(t, oT("metadata"), e[3]), qa = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Gw = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f, d = t & 7, h = !1, p = !1, g = e.length + 1, m = Hw[d + 5], x = e[g - 1] = [], C = e[g] || (e[g] = []), b = (o = o.prototype, nT({ get [n]() {
    return ws(this, s);
  }, set [n](S) {
    return Er(this, s, S);
  } }, n)), y = r.length - 1; y >= 0; y--)
    l = iT(d, n, c = {}, e[3], C), l.static = h, l.private = p, f = l.access = { has: (S) => n in S }, f.get = (S) => S[n], f.set = (S, w) => S[n] = w, i = (0, r[y])({ get: b.get, set: b.set }, l), c._ = 1, i === void 0 ? xs(i) && (b[m] = i) : typeof i != "object" || i === null ? _a("Object expected") : (xs(a = i.get) && (b.get = a), xs(a = i.set) && (b.set = a), xs(a = i.init) && x.unshift(a));
  return b && Vw(o, n, b), o;
}, Yw = (e, t, n) => t.has(e) || _a("Cannot " + n), ws = (e, t, n) => (Yw(e, t, "read from private field"), t.get(e)), rs = (e, t, n) => t.has(e) ? _a("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Er = (e, t, n, r) => (Yw(e, t, "write to private field"), t.set(e, n), n);
function tr(e) {
  return e instanceof Ff || e instanceof Xw;
}
var Xa = 10, lT = class extends wt {
  constructor(e) {
    super(e);
    const t = Ut(() => {
      const { dragOperation: r } = e;
      if (Ys(r.activatorEvent) && tr(r.source) && r.status.initialized) {
        const o = e.registry.plugins.get(Ca);
        if (o)
          return o.disable(), () => o.enable();
      }
    }), n = e.monitor.addEventListener(
      "dragmove",
      (r, o) => {
        queueMicrotask(() => {
          if (this.disabled || r.defaultPrevented || !r.nativeEvent)
            return;
          const { dragOperation: s } = o;
          if (!Ys(r.nativeEvent) || !tr(s.source) || !s.shape)
            return;
          const { actions: a, collisionObserver: i, registry: c } = o, { by: l } = r;
          if (!l)
            return;
          const f = dT(l), { source: d, target: h } = s, { center: p } = s.shape.current, g = [], m = [];
          Be(() => {
            for (const w of c.droppables) {
              const { id: M } = w;
              if (!w.accepts(d) || M === (h == null ? void 0 : h.id) && tr(w) || !w.element)
                continue;
              let k = w.shape;
              const E = new Sn(w.element, {
                getBoundingClientRect: (A) => Hs(A, void 0, 0.2)
              });
              !E.height || !E.width || (f == "down" && p.y + Xa < E.center.y || f == "up" && p.y - Xa > E.center.y || f == "left" && p.x - Xa > E.center.x || f == "right" && p.x + Xa < E.center.x) && (g.push(w), w.shape = E, m.push(() => w.shape = k));
            }
          }), r.preventDefault(), i.disable();
          const x = i.computeCollisions(
            g,
            FI
          );
          Be(() => m.forEach((w) => w()));
          const [C] = x;
          if (!C)
            return;
          const { id: b } = C, { index: y, group: S } = d.sortable;
          a.setDropTarget(b).then(() => {
            const { source: w, target: M, shape: k } = s;
            if (!w || !tr(w) || !k)
              return;
            const {
              index: E,
              group: A,
              target: O
            } = w.sortable, j = y !== E || S !== A, $ = j ? O : M == null ? void 0 : M.element;
            if (!$) return;
            Ux($);
            const V = new Sn($);
            if (!V)
              return;
            const D = kn.delta(
              V,
              kn.from(k.current.boundingRectangle),
              w.alignment
            );
            a.move({
              by: D
            }), j ? a.setDropTarget(w.id).then(() => i.enable()) : i.enable();
          });
        });
      }
    );
    this.destroy = () => {
      n(), t();
    };
  }
};
function dT(e) {
  const { x: t, y: n } = e;
  if (t > 0)
    return "right";
  if (t < 0)
    return "left";
  if (n > 0)
    return "down";
  if (n < 0)
    return "up";
}
var uT = Object.defineProperty, fT = Object.defineProperties, hT = Object.getOwnPropertyDescriptors, Op = Object.getOwnPropertySymbols, pT = Object.prototype.hasOwnProperty, mT = Object.prototype.propertyIsEnumerable, Dp = (e, t, n) => t in e ? uT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jr = (e, t) => {
  for (var n in t || (t = {}))
    pT.call(t, n) && Dp(e, n, t[n]);
  if (Op)
    for (var n of Op(t))
      mT.call(t, n) && Dp(e, n, t[n]);
  return e;
}, eo = (e, t) => fT(e, hT(t));
function vT(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Za(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function kl(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function gT(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (y, S) => y === S || y !== null && typeof y == "object" && "id" in y && y.id === S;
  if (Array.isArray(e)) {
    const y = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (y === -1 || S === -1) {
      if (kl(s)) {
        const w = s.initialIndex, M = s.index;
        return w === M || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, M);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== y)
        return n(e, y, w);
    }
    return n(e, y, S);
  }
  const l = Object.entries(e);
  let f = -1, d, h = -1, p;
  for (const [y, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (d = y)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = y)), f !== -1 && h !== -1)
      break;
  if (f === -1 && kl(s)) {
    const y = s.initialGroup == null ? void 0 : Za(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Za(e, s.group), M = s.index;
    if (y == null || w == null || y === w && S === M)
      return "preventDefault" in t && t.preventDefault(), e;
    if (y === w)
      return eo(Jr({}, e), {
        [y]: n(e[y], S, M)
      });
    const k = e[y][S];
    return eo(Jr({}, e), {
      [y]: [
        ...e[y].slice(0, S),
        ...e[y].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, M),
        k,
        ...e[w].slice(M)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: g } = s.manager, m = (o = (r = g.shape) == null ? void 0 : r.current.center) != null ? o : g.position.current;
  if (p == null) {
    const y = Za(e, a.id);
    if (y != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[y].length : 0;
      p = y, h = S;
    }
  }
  if (d == null || p == null || d === p && f === h) {
    if (d != null && d === p && f === h && kl(s)) {
      const y = s.group == null ? void 0 : Za(e, s.group), S = s.group != null && y !== d, w = s.index !== f;
      if (S || w) {
        const M = s.group == null ? d : y;
        if (M != null) {
          if (d === M)
            return eo(Jr({}, e), {
              [d]: n(
                e[d],
                f,
                s.index
              )
            });
          const k = e[d][f];
          return eo(Jr({}, e), {
            [d]: [
              ...e[d].slice(0, f),
              ...e[d].slice(f + 1)
            ],
            [M]: [
              ...e[M].slice(0, s.index),
              k,
              ...e[M].slice(s.index)
            ]
          });
        }
      }
    }
    return "preventDefault" in t && t.preventDefault(), e;
  }
  if (d === p)
    return eo(Jr({}, e), {
      [d]: n(e[d], f, h)
    });
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[d][f];
  return eo(Jr({}, e), {
    [d]: [
      ...e[d].slice(0, f),
      ...e[d].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      b,
      ...e[p].slice(h + C)
    ]
  });
}
function yT(e, t) {
  return gT(e, t, vT);
}
function Ip(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e)
    for (const r of n)
      t.set(r.id, r.index);
  return t;
}
function Tp(e, t, n) {
  var r;
  for (const [o, s] of t)
    for (const a of s) {
      const i = e.get(a.id);
      if (a.index !== i || a.group !== o || !((r = n.get(o)) != null && r.has(a)))
        return !0;
    }
  return !1;
}
var jp = "__default__", bT = class extends wt {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const o of e.registry.droppables)
        if (o instanceof Ff) {
          const { sortable: s } = o, { group: a } = s;
          let i = r.get(a);
          i || (i = /* @__PURE__ */ new Set(), r.set(a, i)), i.add(s);
        }
      return r;
    }, n = [
      e.monitor.addEventListener("dragover", (r, o) => {
        if (this.disabled)
          return;
        const { dragOperation: s } = o, { source: a, target: i } = s;
        if (!tr(a) || !tr(i) || a.sortable === i.sortable)
          return;
        const c = t(), l = Ip(c), f = a.sortable.group === i.sortable.group, d = c.get(a.sortable.group), h = f ? d : c.get(i.sortable.group);
        !d || !h || queueMicrotask(() => {
          r.defaultPrevented || o.renderer.rendering.then(() => {
            var p, g;
            const m = t();
            if (Tp(l, c, m))
              return;
            const x = a.sortable.element, C = i.sortable.element;
            if (!C || !x || !f && i.id === a.sortable.group)
              return;
            const b = Qa(d), y = f ? b : Qa(h), S = (p = a.sortable.group) != null ? p : jp, w = (g = i.sortable.group) != null ? g : jp, M = {
              [S]: b,
              [w]: y
            }, k = yT(M, r);
            if (M === k) return;
            const E = k[w].indexOf(a.sortable), A = k[w].indexOf(i.sortable);
            o.collisionObserver.disable(), $p(x, E, C, A), Be(() => {
              for (const [O, j] of k[S].entries())
                j.index = O;
              if (!f)
                for (const [O, j] of k[w].entries())
                  j.group = i.sortable.group, j.index = O;
            }), o.actions.setDropTarget(a.id).then(() => o.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (r, o) => {
        if (!r.canceled)
          return;
        const { dragOperation: s } = o, { source: a } = s;
        tr(a) && (a.sortable.initialIndex === a.sortable.index && a.sortable.initialGroup === a.sortable.group || queueMicrotask(() => {
          const i = t(), c = Ip(i), l = i.get(
            a.sortable.initialGroup
          );
          l && o.renderer.rendering.then(() => {
            const f = t();
            if (Tp(c, i, f))
              return;
            const d = Qa(l), h = Qa(
              l,
              wT
            ), p = a.sortable.element, g = h.indexOf(a.sortable), m = d[g], x = m == null ? void 0 : m.element;
            !m || !x || !p || ($p(p, m.index, x, a.index), Be(() => {
              for (const C of i.values()) {
                const b = Array.from(C).values();
                for (const y of b)
                  y.index = y.initialIndex, y.group = y.initialGroup;
              }
            }));
          });
        }));
      })
    ];
    this.destroy = () => {
      for (const r of n)
        r();
    };
  }
};
function $p(e, t, n, r) {
  const o = r < t ? "afterend" : "beforebegin";
  n.insertAdjacentElement(o, e);
}
function xT(e, t) {
  return e.index - t.index;
}
function wT(e, t) {
  return e.initialIndex - t.initialIndex;
}
function Qa(e, t = xT) {
  return Array.from(e).sort(t);
}
var Wp = [
  lT,
  bT
], Kw = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
};
function Lp(e) {
  var t, n;
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : {
    draggable: (t = e == null ? void 0 : e.draggable) != null ? t : !1,
    droppable: (n = e == null ? void 0 : e.droppable) != null ? n : !1
  };
}
var Ja = new C5(), Uw, qw, nr, Wf, Cs, Ss, Lf, lo;
qw = [Me], Uw = [Me];
var Lc = class {
  constructor(e, t) {
    rs(this, Wf, qa(nr, 8, this)), qa(nr, 11, this), rs(this, Cs), rs(this, Ss), rs(this, Lf, qa(nr, 12, this)), qa(nr, 15, this), rs(this, lo), this.register = () => (Be(() => {
      var g, m;
      (g = this.manager) == null || g.registry.register(this.droppable), (m = this.manager) == null || m.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      Be(() => {
        var g, m;
        (g = this.manager) == null || g.registry.unregister(this.droppable), (m = this.manager) == null || m.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      Be(() => {
        this.droppable.destroy(), this.draggable.destroy();
      });
    };
    var n = e, {
      effects: r = () => [],
      disabled: o,
      group: s,
      index: a,
      sensors: i,
      type: c,
      transition: l = Kw,
      plugins: f
    } = n, d = sT(n, [
      "effects",
      "disabled",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    const h = on(f, Wp), p = Lp(o);
    this.droppable = new Ff(
      _l(Sl({}, d), { disabled: p.droppable }),
      t,
      this
    ), this.draggable = new Xw(
      _l(Sl({}, d), {
        disabled: p.draggable,
        plugins: h,
        effects: () => [
          () => {
            var g, m, x;
            const C = (g = this.manager) == null ? void 0 : g.dragOperation.status;
            C != null && C.initializing && this.id === ((x = (m = this.manager) == null ? void 0 : m.dragOperation.source) == null ? void 0 : x.id) && Ja.clear(this.manager), C != null && C.dragging && Ja.set(
              this.manager,
              this.id,
              Ee(() => ({
                initialIndex: this.index,
                initialGroup: this.group
              }))
            );
          },
          () => {
            const { index: g, group: m, manager: x } = this, C = ws(this, Ss), b = ws(this, Cs);
            (g !== C || m !== b) && (Er(this, Ss, g), Er(this, Cs, m), this.animate());
          },
          () => {
            var g, m;
            const { target: x } = this, { isDragSource: C } = this.draggable;
            ((m = (g = this.draggable.pluginConfig(pw)) == null ? void 0 : g.feedback) != null ? m : "default") === "move" && C && (this.droppable.disabled = !x);
          },
          ...r()
        ],
        type: c,
        sensors: i
      }),
      t,
      this
    ), Er(this, lo, d.element), this.manager = t, this.index = a, Er(this, Ss, a), this.group = s, Er(this, Cs, s), this.type = c, this.transition = l;
  }
  get initialIndex() {
    var e, t;
    return (t = (e = Ja.get(this.manager, this.id)) == null ? void 0 : e.initialIndex) != null ? t : this.index;
  }
  get initialGroup() {
    var e, t;
    return (t = (e = Ja.get(this.manager, this.id)) == null ? void 0 : e.initialGroup) != null ? t : this.group;
  }
  animate() {
    Ee(() => {
      const { manager: e, transition: t } = this, { shape: n } = this.droppable;
      if (!e) return;
      const { idle: r } = e.dragOperation.status;
      !n || !t || r && !t.idle || e.renderer.rendering.then(() => {
        const { element: o } = this;
        if (!o)
          return;
        for (const f of o.getAnimations())
          "transitionProperty" in f && (f.transitionProperty === "transform" || f.transitionProperty === "translate" || f.transitionProperty === "scale") && f.cancel();
        const s = this.refreshShape();
        if (!s)
          return;
        const a = {
          x: n.boundingRectangle.left - s.boundingRectangle.left,
          y: n.boundingRectangle.top - s.boundingRectangle.top
        }, { translate: i } = An(o), c = Cp(o, i, !1), l = Cp(o, i);
        if (a.x || a.y) {
          const f = Cf(zt(o)) ? _l(Sl({}, t), { duration: 0 }) : t;
          qx({
            element: o,
            keyframes: {
              translate: [
                `${c.x + a.x}px ${c.y + a.y}px ${c.z}`,
                `${l.x}px ${l.y}px ${l.z}`
              ]
            },
            options: f
          }).then(() => {
            e.dragOperation.status.dragging || (this.droppable.shape = void 0);
          });
        }
      });
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(e) {
    Be(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    Be(() => {
      const t = ws(this, lo), n = this.droppable.element, r = this.draggable.element;
      (!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Er(this, lo, e);
    });
  }
  get element() {
    var e, t;
    const n = ws(this, lo);
    if (n)
      return (t = (e = bd.get(n)) != null ? e : n) != null ? t : this.droppable.element;
  }
  set target(e) {
    this.droppable.element = e;
  }
  get target() {
    return this.droppable.element;
  }
  set source(e) {
    this.draggable.element = e;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    const { disabled: e } = this.draggable, { disabled: t } = this.droppable;
    return e === t ? e : { draggable: e, droppable: t };
  }
  set plugins(e) {
    this.draggable.plugins = on(e, Wp);
  }
  set disabled(e) {
    const t = Lp(e);
    Be(() => {
      this.droppable.disabled = t.droppable, this.draggable.disabled = t.draggable;
    });
  }
  set data(e) {
    Be(() => {
      this.droppable.data = e, this.draggable.data = e;
    });
  }
  set handle(e) {
    this.draggable.handle = e;
  }
  set id(e) {
    this.droppable.id = e, this.draggable.id = e;
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(e) {
    this.draggable.sensors = e;
  }
  set modifiers(e) {
    this.draggable.modifiers = e;
  }
  set collisionPriority(e) {
    this.droppable.collisionPriority = e;
  }
  set collisionDetector(e) {
    this.droppable.collisionDetector = e ?? Xx;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    Be(() => {
      this.droppable.type = e, this.draggable.type = e;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(e) {
    this.droppable.accept = e;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  /**
   * A boolean indicating whether the sortable item is the source of a drag operation.
   */
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  /**
   * A boolean indicating whether the sortable item is being dragged.
   */
  get isDragging() {
    return this.draggable.isDragging;
  }
  /**
   * A boolean indicating whether the sortable item is being dropped.
   */
  get isDropping() {
    return this.draggable.isDropping;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(e) {
    return this.droppable.accepts(e);
  }
};
nr = aT();
Wf = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
Lf = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakMap();
Gw(nr, 4, "index", qw, Lc, Wf);
Gw(nr, 4, "group", Uw, Lc, Lf);
cT(nr, Lc);
var Xw = class extends $c {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get initialIndex() {
    return this.sortable.initialIndex;
  }
  get group() {
    return this.sortable.group;
  }
  get initialGroup() {
    return this.sortable.initialGroup;
  }
}, Ff = class extends jf {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
}, CT = Object.defineProperty, ST = Object.defineProperties, _T = Object.getOwnPropertyDescriptors, Fp = Object.getOwnPropertySymbols, kT = Object.prototype.hasOwnProperty, ET = Object.prototype.propertyIsEnumerable, Vp = (e, t, n) => t in e ? CT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, El = (e, t) => {
  for (var n in t || (t = {}))
    kT.call(t, n) && Vp(e, n, t[n]);
  if (Fp)
    for (var n of Fp(t))
      ET.call(t, n) && Vp(e, n, t[n]);
  return e;
}, MT = (e, t) => ST(e, _T(t));
function Zw(e) {
  const {
    accept: t,
    collisionDetector: n,
    collisionPriority: r,
    id: o,
    data: s,
    element: a,
    handle: i,
    index: c,
    group: l,
    disabled: f,
    modifiers: d,
    sensors: h,
    target: p,
    type: g,
    plugins: m
  } = e, x = El(El({}, Kw), e.transition), C = B3((y) => new Lc(
    MT(El({}, e), {
      transition: x,
      register: !1,
      handle: Os(i),
      element: Os(a),
      target: Os(p)
    }),
    y
  )), b = I3(C, PT);
  return yt(o, () => C.id = o), qo(() => {
    Be(() => {
      C.group = l, C.index = c;
    });
  }, [C, l, c]), yt(g, () => C.type = g), yt(
    t,
    () => C.accept = t,
    void 0,
    mn
  ), yt(s, () => s && (C.data = s)), yt(
    c,
    () => {
      var y;
      (y = C.manager) != null && y.dragOperation.status.idle && (x != null && x.idle) && C.refreshShape();
    },
    T3
  ), wl(i, (y) => C.handle = y), wl(a, (y) => C.element = y), wl(p, (y) => C.target = y), yt(
    f,
    () => C.disabled = f ?? !1,
    void 0,
    mn
  ), yt(
    h,
    () => C.sensors = h,
    void 0,
    mn
  ), yt(
    n,
    () => C.collisionDetector = n
  ), yt(
    r,
    () => C.collisionPriority = r
  ), yt(
    m,
    () => C.plugins = m,
    void 0,
    mn
  ), yt(
    x,
    () => C.transition = x,
    void 0,
    mn
  ), yt(
    d,
    () => C.modifiers = d,
    void 0,
    mn
  ), yt(
    e.alignment,
    () => C.alignment = e.alignment
  ), {
    sortable: b,
    get isDragging() {
      return b.isDragging;
    },
    get isDropping() {
      return b.isDropping;
    },
    get isDragSource() {
      return b.isDragSource;
    },
    get isDropTarget() {
      return b.isDropTarget;
    },
    handleRef: ke(
      (y) => {
        C.handle = y ?? void 0;
      },
      [C]
    ),
    ref: ke(
      (y) => {
        var S, w;
        !y && ((S = C.element) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.element = y ?? void 0);
      },
      [C]
    ),
    sourceRef: ke(
      (y) => {
        var S, w;
        !y && ((S = C.source) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.source = y ?? void 0);
      },
      [C]
    ),
    targetRef: ke(
      (y) => {
        var S, w;
        !y && ((S = C.target) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.target = y ?? void 0);
      },
      [C]
    )
  };
}
function PT(e, t, n) {
  return !!(e === "isDragSource" && !n && t);
}
const Qw = _.createContext(null), NT = () => {
  const e = _.useContext(Qw);
  if (!e)
    throw new Error("Sortable.Item must be rendered inside Sortable.Container");
  return e;
}, AT = (e) => rb(e, "Sortable.Container");
function RT({
  value: e,
  onValueChange: t,
  getItemValue: n = AT,
  disabled: r = !1,
  className: o,
  children: s
}, a) {
  const i = _.useMemo(
    () => e.map((f) => n(f)),
    [e, n]
  ), c = _.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    i.forEach((p, g) => f.set(p, g));
    const d = (p) => f.get(p) ?? -1;
    return { getIndex: d, moveItem: (p, g) => {
      const m = d(p), x = m + g;
      if (m < 0 || x < 0 || x >= e.length)
        return;
      const C = [...e], [b] = C.splice(m, 1);
      b !== void 0 && (C.splice(x, 0, b), t(C));
    }, count: i.length, disabled: r };
  }, [i, e, t, r]), l = (f) => {
    const d = s5(i, f);
    if (d === i)
      return;
    const h = /* @__PURE__ */ new Map();
    e.forEach((g) => h.set(n(g), g));
    const p = [];
    d.forEach((g) => {
      const m = h.get(g);
      m !== void 0 && p.push(m);
    }), t(p);
  };
  return /* @__PURE__ */ u.jsx(Qw.Provider, { value: c, children: /* @__PURE__ */ u.jsx(Rw, { onDragEnd: l, children: /* @__PURE__ */ u.jsx("ul", { ref: a, className: R("gap-xs flex flex-col", o), children: s }) }) });
}
const Jw = _.forwardRef(RT);
Jw.displayName = "Sortable.Container";
const e1 = _.forwardRef(
  ({
    value: e,
    disabled: t = !1,
    showMoveButtons: n = !0,
    actions: r,
    ariaLabels: o,
    className: s,
    children: a
  }, i) => {
    const {
      getIndex: c,
      moveItem: l,
      count: f,
      disabled: d
    } = NT(), h = c(e), p = t || d, { ref: g, isDragging: m } = Zw({
      id: e,
      index: h,
      disabled: p
    }), x = (o == null ? void 0 : o.moveUp) ?? "Move up", C = (o == null ? void 0 : o.moveDown) ?? "Move down";
    return /* @__PURE__ */ u.jsxs(
      "li",
      {
        ref: (b) => {
          g(b), typeof i == "function" ? i(b) : i && (i.current = b);
        },
        "data-dragging": m || void 0,
        className: R(
          `rounded-sm p-2 gap-xxs border-interactive-default bg-surface-primary
          hover:border-interactive-hover flex cursor-grab items-center border
          transition-colors`,
          s
        ),
        children: [
          /* @__PURE__ */ u.jsx(Yp, { size: 16, className: "text-shape-light" }),
          /* @__PURE__ */ u.jsx("div", { className: "min-w-0 flex-1", children: a }),
          (n || r) && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex shrink-0 items-center", children: [
            n && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(rn, { content: x, disableHoverableContent: !0, children: /* @__PURE__ */ u.jsx(
                He,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: G1,
                  "aria-label": x,
                  className: "h-6 w-6",
                  disabled: p || h <= 0,
                  onClick: () => l(e, -1)
                }
              ) }),
              /* @__PURE__ */ u.jsx(rn, { content: C, disableHoverableContent: !0, children: /* @__PURE__ */ u.jsx(
                He,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: Js,
                  "aria-label": C,
                  className: "h-6 w-6",
                  disabled: p || h < 0 || h >= f - 1,
                  onClick: () => l(e, 1)
                }
              ) })
            ] }),
            r
          ] })
        ]
      }
    );
  }
);
e1.displayName = "Sortable.Item";
const t7 = {
  Container: Jw,
  Item: e1
}, OT = pe(
  `px-xs py-xxs text-interactive-inverse inline-flex max-w-full items-center
  rounded-full`,
  {
    variants: {
      size: {
        sm: "text-sm leading-none",
        md: "leading-none"
      },
      hasRemove: {
        true: "gap-xxs",
        false: ""
      },
      hasIndicator: {
        true: "gap-xxs",
        false: ""
      },
      level: {
        success: "bg-status-success",
        inProgress: "bg-status-inprogress",
        queue: "bg-status-queue",
        alert: "bg-status-alert",
        warning: "bg-status-warning",
        neutral: "bg-status-neutral",
        undefined: ""
      },
      indicator: {
        valid: "bg-status-success",
        invalid: "bg-interactive-disabled text-body-secondary",
        undefined: ""
      }
    },
    defaultVariants: {
      size: "md",
      hasRemove: !1,
      hasIndicator: !1,
      level: void 0,
      indicator: void 0
    }
  }
), DT = pe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), n7 = ({
  children: e,
  className: t,
  level: n,
  customColor: r,
  size: o = "md",
  onRemove: s,
  indicator: a
}) => {
  const i = !!a;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: R(
        OT({
          size: o,
          hasRemove: !!s,
          hasIndicator: i,
          level: a ? void 0 : n,
          indicator: a
        }),
        t
      ),
      style: !a && r ? {
        backgroundColor: `var(${r})`
      } : void 0,
      children: [
        i && a && /* @__PURE__ */ u.jsx("div", { className: DT({ indicator: a }) }),
        /* @__PURE__ */ u.jsx("div", { className: "truncate", children: e }),
        !!s && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: R(
              `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
            items-center justify-center rounded-full`
            ),
            onClick: s,
            children: /* @__PURE__ */ u.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "text-shape-primary h-2 w-2",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ u.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ u.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, IT = _.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...s
  }, a) => {
    const i = _.useMemo(() => n !== void 0 ? t.map((c, l) => ({
      ...c,
      status: l < n ? "completed" : l === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ u.jsx(
      t1,
      {
        ref: a,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...s
      }
    ) : /* @__PURE__ */ u.jsxs("div", { ref: a, className: R("px-xxl w-full", e), ...s, children: [
      /* @__PURE__ */ u.jsx("div", { className: "gap-sm flex items-center", children: i.map((c, l) => /* @__PURE__ */ u.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: R(
                    `relative box-content flex items-center justify-center
                      rounded-full transition-colors`,
                    c.status === "completed" ? `bg-shape-interactive-primary-default
                          text-interactive-inverse size-4.5` : void 0,
                    c.status === "active" ? `bg-shape-interactive-primary-default
                          text-interactive-inverse
                          ring-shape-interactive-primary-active/20 size-2.5
                          ring-4` : void 0,
                    c.status === "upcoming" ? `bg-shape-interactive-disabled text-body-primary
                          size-2.5` : void 0
                  ),
                  children: c.status === "completed" && /* @__PURE__ */ u.jsx(
                    Gp,
                    {
                      className: "text-interactive-inverse h-2.5 w-2.5"
                    }
                  )
                }
              )
            }
          ),
          r && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: R(
                `max-w-20 mt-1.5 absolute top-full min-w-max text-center
                      break-words transition-colors`,
                c.status === "completed" || c.status === "active" ? "text-body-primary font-medium" : void 0,
                c.status === "upcoming" ? "text-body-primary" : void 0
              ),
              children: c.label
            }
          )
        ] }),
        l < i.length - 1 && /* @__PURE__ */ u.jsx(
          "div",
          {
            className: R(
              "h-0.25 flex-1 transition-colors",
              c.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, c.id)) }),
      r && /* @__PURE__ */ u.jsx("div", { className: "h-8" })
    ] });
  }
), t1 = _.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const s = t.length, a = n !== void 0 ? n : t.findIndex((p) => p.status === "active"), i = Math.max(
    0,
    Math.min(a, s - 1)
  ), c = t[i] || t[0], l = s > 0 ? (i + 1) / s * 100 : 0, f = 2 * Math.PI * 24, d = f, h = f - l / 100 * f;
  return /* @__PURE__ */ u.jsx("div", { ref: o, className: R("space-y-6", e), ...r, children: /* @__PURE__ */ u.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
    /* @__PURE__ */ u.jsx("div", { className: "h-13 w-13 flex flex-shrink-0", children: /* @__PURE__ */ u.jsxs("div", { className: "relative h-full w-full", children: [
      /* @__PURE__ */ u.jsxs(
        "svg",
        {
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          className: "-rotate-90 transform",
          children: [
            /* @__PURE__ */ u.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                className: "stroke-shape-accent-gray-soft stroke-[4]"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeDasharray: d,
                strokeDashoffset: h,
                strokeLinecap: "round",
                className: `text-interactive-primary-default ease-in-out
                  transition-all duration-500`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ u.jsx("div", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ u.jsxs(
        "svg",
        {
          width: "24",
          height: "20",
          viewBox: "0 0 24 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ u.jsx(
              "text",
              {
                x: "5",
                y: "9",
                fill: "currentColor",
                dominantBaseline: "central",
                textAnchor: "middle",
                className: `text-interactive-primary-default text-lg
                      font-bold`,
                children: i + 1
              }
            ),
            /* @__PURE__ */ u.jsx(
              "path",
              {
                d: "M17.5 6.5L11 18",
                stroke: "currentColor",
                className: "text-shape-accent-gray-soft stroke-1"
              }
            ),
            /* @__PURE__ */ u.jsx(
              "text",
              {
                x: "19.5",
                y: "14",
                fill: "currentColor",
                dominantBaseline: "central",
                textAnchor: "middle",
                className: "text-body-secondary text-sm font-normal",
                children: s
              }
            )
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "gap-xxxs flex w-auto flex-col items-start justify-center",
        children: c && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
          /* @__PURE__ */ u.jsx(
            "span",
            {
              className: "text-lg font-bold text-body-primary leading-[1.2]",
              children: c.title || c.label
            }
          ),
          c.description && /* @__PURE__ */ u.jsx(
            "p",
            {
              className: `text-md font-normal text-body-primary
                    leading-[1.5]`,
              children: c.description
            }
          )
        ] })
      }
    )
  ] }) });
});
t1.displayName = "RadialStepper";
IT.displayName = "Stepper";
const TT = v.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const s = n || (t ? `switch-${t}` : void 0), a = /* @__PURE__ */ u.jsx(
    OM,
    {
      ref: o,
      id: s,
      "data-slot": "switch",
      className: R(
        `peer data-[state=checked]:enabled:bg-status-success
        data-[state=unchecked]:enabled:bg-shape-accent-gray-soft
        data-[state=checked]:disabled:bg-interactive-neutral-selected
        data-[state=unchecked]:disabled:bg-interactive-disabled h-6 w-10
        data-[state=checked]:enabled:hover:bg-shape-interactive-primary-hover
        data-[state=unchecked]:enabled:hover:bg-shape-accent-gray-strong
        focus-visible:ring-interactive-focused inline-flex shrink-0
        cursor-pointer items-center rounded-full transition-all outline-none
        focus-visible:ring-[3px] disabled:cursor-not-allowed`,
        e
      ),
      ...r,
      children: /* @__PURE__ */ u.jsx(
        DM,
        {
          "data-slot": "switch-thumb",
          className: R(
            `data-[state=checked]:bg-shape-interactive-inverse size-4
          data-[state=unchecked]:not-data-disabled:bg-shape-accent-gray-pale
          data-[state=unchecked]:data-disabled:bg-shape-interactive-inverse
          data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-1 pointer-events-none block
          rounded-full ring-0 transition-transform`
          )
        }
      )
    }
  );
  return t ? /* @__PURE__ */ u.jsxs("div", { className: "gap-3 flex items-center", children: [
    a,
    /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: s,
        className: "text-body-primary font-semibold cursor-pointer select-none",
        children: t
      }
    )
  ] }) : a;
});
TT.displayName = "Switch";
const Wd = {
  loading: !1,
  loadingText: "ローディング中…"
}, n1 = _.createContext(
  Wd
), r1 = () => _.useContext(n1), jT = _.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Wd.loading,
    loadingText: r = Wd.loadingText,
    ...o
  }, s) => {
    const a = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ u.jsx(n1.Provider, { value: a, children: /* @__PURE__ */ u.jsx(
      "table",
      {
        ref: s,
        className: R(
          `border-surface-default bg-surface-primary relative caption-bottom
            border`,
          e
        ),
        ...o,
        children: t
      }
    ) });
  }
);
jT.displayName = "Table";
const $T = _.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: s } = r1(), a = t ?? s;
    return /* @__PURE__ */ u.jsxs(
      "thead",
      {
        ref: o,
        className: R(
          "text-sm bg-surface-tertiary top-0 z-slight sticky",
          e
        ),
        ...r,
        children: [
          n,
          a && /* @__PURE__ */ u.jsx("tr", { children: /* @__PURE__ */ u.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ u.jsx(
            wc.Linear,
            {
              indeterminate: !0,
              className: `bg-surface-primary border-b-divider-default
                  box-content border-b`
            }
          ) }) })
        ]
      }
    );
  }
);
$T.displayName = "TableHeader";
const o1 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ u.jsx(
  "td",
  {
    className: `py-sm min-h-12 sticky
        left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] block w-fit
        text-center align-middle`,
    children: /* @__PURE__ */ u.jsx(
      "div",
      {
        className: R(
          "flex w-max -translate-x-1/2 transform items-center",
          e
        ),
        children: t
      }
    )
  }
) }));
o1.displayName = "TableCoverMessage";
const WT = _.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, s) => {
    const { loading: a, loadingText: i } = r1(), c = t ?? a, l = n ?? i;
    return /* @__PURE__ */ u.jsx("tbody", { ref: s, className: e, ...o, children: c ? /* @__PURE__ */ u.jsx(o1, { className: "text-body-secondary", children: l }) : r });
  }
);
WT.displayName = "TableBody";
const LT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
LT.displayName = "TableFooter";
const FT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tr",
  {
    ref: n,
    className: R(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
FT.displayName = "TableRow";
const VT = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  "th",
  {
    ref: r,
    className: R(
      `text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,
      e
    ),
    ...n,
    children: /* @__PURE__ */ u.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
VT.displayName = "TableHead";
const zT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: n,
    className: R(
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
      e
    ),
    ...t
  }
));
zT.displayName = "TableCell";
const BT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: n,
    className: R("text-body-primary mt-md text-sm", e),
    ...t
  }
));
BT.displayName = "TableCaption";
const r7 = _.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
  "button",
  {
    ref: r,
    className: R(
      `text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Sort" }),
      /* @__PURE__ */ u.jsxs(
        "svg",
        {
          className: "size-4",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ u.jsxs("g", { clipPath: "url(#clip0_24993_1396)", children: [
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",
                  fill: e === "asc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",
                  fill: e === "desc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx("defs", { children: /* @__PURE__ */ u.jsx("clipPath", { id: "clip0_24993_1396", children: /* @__PURE__ */ u.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
          ]
        }
      )
    ]
  }
)), HT = _.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: r,
    className: R(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ u.jsx(
      "div",
      {
        className: R(
          // Position at right edge of row, vertically centered
          "right-0 top-0 bottom-0 absolute flex items-center",
          // Padding for content spacing, max-content width
          "pr-md pl-16 w-max",
          // Z-index above other cells
          "z-slight",
          // Fade from transparent into the row hover background
          "bg-row-overlay-fade",
          // Visibility control
          e ? "opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100",
          t
        ),
        children: /* @__PURE__ */ u.jsx("div", { className: "gap-xs flex items-center", children: n })
      }
    )
  }
));
HT.displayName = "TableRowOverlay";
const GT = pe("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), YT = pe(
  `text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 hover:after:bg-shape-interactive-primary-default
  data-[state=active]:text-interactive-primary-default
  data-[state=active]:after:bg-shape-interactive-primary-selected relative
  inline-flex cursor-pointer items-center justify-center border-b leading-[100%]
  tracking-[0] whitespace-nowrap transition-colors after:absolute
  after:bottom-[-1px] after:w-full after:transition-all after:content-['']
  hover:after:h-[2px] disabled:cursor-not-allowed
  data-[state=active]:after:h-[2px]`,
  {
    variants: {
      size: {
        normal: "p-md h-12 text-lg",
        small: "p-sm h-9.5 text-md"
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
), KT = pe(
  `text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,
  {
    variants: {
      size: {
        normal: "p-md h-12 text-lg",
        small: "p-sm h-9.5 text-md"
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
);
function UT() {
  const [e, t] = _.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return _.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function qT(e) {
  const t = [];
  return _.Children.forEach(e, (n) => {
    _.isValidElement(n) && n.type === s1 && t.push(n);
  }), t;
}
const XT = _.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, s) => {
  const a = t ?? "normal", i = UT(), c = _.useRef(null), l = _.useRef(null), f = _.useRef(/* @__PURE__ */ new Map()), d = _.useRef(/* @__PURE__ */ new Map()), h = _.useMemo(() => qT(n), [n]), [p, g] = _.useState(h.length), [m, x] = _.useState(!1), C = _.useCallback(() => {
    if (!i) {
      g(h.length), x(!0);
      return;
    }
    const k = c.current;
    if (!k) return;
    f.current.forEach((D, B) => {
      const F = D.offsetWidth;
      F > 0 && d.current.set(B, F);
    });
    const E = k.clientWidth, A = l.current, O = A ? A.offsetWidth + 8 : 80;
    let j = 0;
    for (const D of h)
      j += d.current.get(D.props.value) ?? 0;
    if (j <= E) {
      g(h.length), x(!0);
      return;
    }
    let $ = 0, V = 0;
    for (const D of h) {
      const B = d.current.get(D.props.value) ?? 0;
      if ($ + B + O <= E)
        $ += B, V++;
      else
        break;
    }
    g(Math.max(V, 1)), x(!0);
  }, [h, i]);
  _.useEffect(() => {
    const k = c.current;
    if (!k) return;
    const E = new ResizeObserver(() => {
      C();
    });
    return E.observe(k), C(), () => E.disconnect();
  }, [C]);
  const b = h.slice(p), y = b.length > 0, S = o.value ?? o.defaultValue, w = b.some(
    (k) => k.props.value === S
  ), M = r ?? ((k) => `${k} more`);
  return /* @__PURE__ */ u.jsx($M, { ref: s, className: R("w-full", e), ...o, children: /* @__PURE__ */ u.jsxs(
    WM,
    {
      ref: c,
      className: R(
        GT({ size: a }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        h.map(
          (k, E) => _.cloneElement(k, {
            key: k.props.value,
            size: a,
            ref: (A) => {
              A ? f.current.set(k.props.value, A) : f.current.delete(k.props.value);
            },
            className: R(
              k.props.className,
              m && E >= p && "hidden"
            )
          })
        ),
        y && m && /* @__PURE__ */ u.jsx("div", { ref: l, className: "inline-flex shrink-0", children: /* @__PURE__ */ u.jsxs(Tu, { children: [
          /* @__PURE__ */ u.jsx(ju, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: R(
                KT({ size: a }),
                w && "font-bold text-interactive-primary-default"
              ),
              children: [
                /* @__PURE__ */ u.jsx(
                  Z1,
                  {
                    size: a === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                M(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ u.jsx(Iu, { align: "end", size: "sm", children: b.map((k) => {
            const { value: E, disabled: A, asChild: O, children: j } = k.props, $ = R(
              E === S && "font-bold text-interactive-primary-default"
            );
            return O && _.isValidElement(j) ? /* @__PURE__ */ u.jsx(
              Zl,
              {
                disabled: A ?? !1,
                asChild: !0,
                className: $,
                children: j
              },
              E
            ) : /* @__PURE__ */ u.jsx(
              Zl,
              {
                disabled: A ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(E);
                },
                className: $,
                children: j
              },
              E
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
XT.displayName = "TabBar";
const s1 = _.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ u.jsx(
    LM,
    {
      ref: r,
      className: R(YT({ size: o }), e),
      ...n
    }
  );
});
s1.displayName = "Tab";
const ZT = pe(
  `border-interactive-default bg-surface-primary px-md py-sm text-body-primary
  focus:border-interactive-selected disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  hover:border-interactive-hover h-12 min-h-30 rounded
  focus:ring-interactive-focused w-full border focus:ring-4 focus:outline-0`,
  {
    variants: {
      invalid: {
        false: "",
        true: `!border-shape-interactive-alert-default
        focus:ring-interactive-alert-focused`
      }
    }
  }
), QT = _.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, s) => {
    const {
      onKeyDown: a,
      onKeyUp: i,
      onCompositionStart: c,
      onCompositionEnd: l,
      onChange: f,
      value: d,
      ...h
    } = o, [p, g] = at(o.value);
    wn(() => {
      g(o.value);
    }, [o.value]);
    const { compositionHandlers: m, guardKeyHandler: x } = _c(), C = (S) => {
      m.onCompositionStart(S), c == null || c(S);
    }, b = (S) => {
      m.onCompositionEnd(S), l == null || l(S);
    }, y = (S) => {
      if (n && S.target.value.length > n) {
        S.preventDefault();
        return;
      }
      g(S.target.value), f && f(S);
    };
    return /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ u.jsx(
        "textarea",
        {
          ref: s,
          className: R(ZT({ invalid: e }), t),
          ...h,
          value: p,
          onChange: y,
          onKeyDown: x(a),
          onKeyUp: x(i),
          onCompositionStart: C,
          onCompositionEnd: b
        }
      ),
      !!(n && r) && /* @__PURE__ */ u.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        (p == null ? void 0 : p.toString().length) || 0,
        "/",
        n
      ] })
    ] });
  }
);
QT.displayName = "TextArea";
const o7 = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ u.jsx(
  sP,
  {
    open: n,
    onOpenChange: r,
    className: `border-surface-default bg-surface-primary p-sm
        text-body-primary shadow-high w-96 rounded
        data-[state=open]:animate-slide-in data-[state=closed]:animate-hide
        data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:translate-x-0
        border-1 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]`,
    children: /* @__PURE__ */ u.jsxs("div", { className: "gap-xs flex items-start justify-between", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex items-start", children: [
        /* @__PURE__ */ u.jsxs("div", { children: [
          o === "success" && /* @__PURE__ */ u.jsx(
            Xp,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ u.jsx(
            Jf,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ u.jsx(
            Jf,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ u.jsx(ei, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          t && /* @__PURE__ */ u.jsx(
            aP,
            {
              className: R("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ u.jsx(
                "h5",
                {
                  className: R("text-md leading-none", {
                    "mb-xs": !!e
                  }),
                  children: t
                }
              )
            }
          ),
          /* @__PURE__ */ u.jsx(iP, { children: /* @__PURE__ */ u.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx(cP, { asChild: !0, altText: "Close", children: /* @__PURE__ */ u.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ u.jsx(Nl, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), s7 = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ u.jsxs(rP, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ u.jsx(
    oP,
    {
      className: `gap-md bottom-0 right-0 m-0 z-toast fixed flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Ld = (e) => e.valueKey !== void 0, Fd = (e, t) => e.element.compareDocumentPosition(t.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, JT = (e) => {
  const t = /* @__PURE__ */ new Map();
  e.forEach((o) => {
    const s = t.get(o.parentKey);
    s ? s.push(o) : t.set(o.parentKey, [o]);
  });
  const n = /* @__PURE__ */ new Map(), r = (o) => {
    const s = [];
    (t.get(o.key) ?? []).forEach((i) => {
      i.kind === "group" ? s.push(...r(i)) : Ld(i) && s.push(i);
    });
    const a = s.length === 0 && Ld(o) ? [o] : s;
    return n.set(o.key, a), a;
  };
  return (t.get(null) ?? []).forEach((o) => {
    o.kind === "group" && r(o);
  }), n;
}, ej = (e, t) => {
  const n = e.filter((a) => !a.disabled), r = (a) => a.filter((i) => t(i.valueKey)).length, o = r(e);
  return { state: o === 0 ? "none" : o === e.length || n.length > 0 && r(n) === n.length ? "all" : "some", selectable: n.length > 0 };
}, tj = 600, nj = 2e3, rj = 300, Vf = "data-dnd-placeholder", Ao = (e, t) => Array.from(e.children).filter(
  (n) => n !== t && !n.hasAttribute(Vf)
), zf = (e, t) => {
  let n = e.nextElementSibling;
  for (; n && (n === t || n.hasAttribute(Vf)); )
    n = n.nextElementSibling;
  return n;
}, a1 = (e, t, n) => {
  Array.from(t.values()).sort(Fd).forEach((o) => {
    const s = o.element.parentElement, a = e.registry.droppables.get(o.key);
    o !== n && s && a && tr(a) && (a.sortable.index = Ao(s).indexOf(o.element));
  });
}, i1 = (e, t, n, r, o) => {
  const { element: s } = n.node;
  !s.isConnected || o === s || s.parentElement === r && zf(s, s) === o || (r.insertBefore(s, o), a1(e, t, n.node), window.requestAnimationFrame(() => {
    t.forEach((a) => {
      var i;
      (i = e.registry.droppables.get(a.key)) == null || i.refreshShape();
    });
  }));
}, oj = (e, t, n) => {
  let r;
  return e.forEach((o) => {
    var a;
    if (o === n) return;
    const s = (a = o.element.firstElementChild) == null ? void 0 : a.getBoundingClientRect();
    s && s.height > 0 && t.y >= s.top && t.y < s.bottom && t.x >= s.left && t.x < s.right && (r = o);
  }), r;
}, Ml = (e, t, n, r) => {
  var p, g;
  const o = oj(t, r, n.node), s = o == null ? void 0 : o.element.parentElement, a = (p = o == null ? void 0 : o.element.firstElementChild) == null ? void 0 : p.getBoundingClientRect();
  if (!o || !s || !a || a.height === 0 || (g = n.nodeOf(s.parentElement)) != null && g.disabled) return;
  const i = (r.y - a.top) / a.height, c = o.kind === "group" ? o.element.querySelector(":scope > ul") : null, l = o.element.getAttribute("aria-expanded"), f = n.node.element, d = (m, x) => i1(e, t, n, m, x), h = !o.disabled;
  c && l === "true" && h ? i < 0.5 ? d(s, o.element) : d(c, Ao(c, f)[0] ?? null) : c && l === null && h && i >= 0.25 && i <= 0.75 ? d(c, null) : i < 0.5 ? d(s, o.element) : d(s, zf(o.element, f));
}, sj = (e, t) => {
  const n = [], r = t.node.element, o = (s) => {
    var a;
    (a = t.nodeOf(s.parentElement)) != null && a.disabled || (Ao(s, r).forEach((i) => {
      n.push({ list: s, before: i });
      const c = t.nodeOf(i), l = i.querySelector(":scope > ul");
      if (!c || !l || c.disabled) return;
      const f = i.getAttribute("aria-expanded");
      f === "true" ? o(l) : f === null && n.push({ list: l, before: null });
    }), n.push({ list: s, before: null }));
  };
  return o(e), n;
}, aj = (e, t, n, r, o) => {
  const s = n.node.element, a = s.parentElement;
  if (!a) return;
  const i = zf(s, s), c = sj(r, n), l = c.findIndex(
    (d) => d.list === a && d.before === i
  ), f = l === -1 ? void 0 : c[l + o];
  f && i1(e, t, n, f.list, f.before);
}, zp = ({ node: e, originList: t, originIndex: n }) => {
  const r = Ao(t, e.element)[n] ?? null;
  t.insertBefore(e.element, r);
}, a7 = (e, t, n) => {
  const { getKey: r, getChildren: o, withChildren: s } = n, a = t.kind === "group";
  let i;
  const c = (h, p, g) => h.map((m, x) => x === p ? g : m), l = (h) => {
    for (let p = 0; p < h.length; p += 1) {
      const g = h[p], m = o(g);
      if (r(g) === t.key && m !== void 0 === a)
        return i = g, h.filter((x, C) => C !== p);
      if (m) {
        const x = l(m);
        if (x !== m)
          return c(h, p, s(g, x));
      }
    }
    return h;
  }, f = (h, p) => {
    const { parentKey: g, index: m } = t.to;
    if (g === null)
      return [...h.slice(0, m), p, ...h.slice(m)];
    for (let x = 0; x < h.length; x += 1) {
      const C = h[x], b = o(C);
      if (b === void 0) continue;
      const y = r(C) === g ? [...b.slice(0, m), p, ...b.slice(m)] : f(b, p);
      if (y !== void 0)
        return c(h, x, s(C, y));
    }
  }, d = l(e);
  return i === void 0 ? e : f(d, i) ?? e;
}, ij = (e, { getItemValue: t, getParentKey: n, getOrder: r }) => {
  const o = /* @__PURE__ */ new Set();
  e.forEach((a) => o.add(t(a)));
  const s = /* @__PURE__ */ new Map();
  return e.forEach((a) => {
    const i = n(a) ?? null, c = i !== null && o.has(i) ? i : null, l = s.get(c);
    l ? l.push(a) : s.set(c, [a]);
  }), r && s.forEach(
    (a) => a.sort((i, c) => r(i) - r(c))
  ), s;
}, c1 = (e) => rb(e, "Tree"), l1 = _.createContext(null), d1 = _.createContext({
  parentKey: null,
  depth: 0,
  disabled: !1
}), Bf = () => {
  const e = _.useContext(l1);
  if (!e)
    throw new Error("Tree.Group and Tree.Item must be rendered inside Tree");
  return e;
}, cj = (e) => Array.from(e.querySelectorAll('[role="treeitem"]')).filter(
  (t) => !t.closest("ul[hidden]") && !t.closest(`[${Vf}]`)
), u1 = (e) => {
  const t = e.currentTarget.closest('[role="treeitem"]');
  t instanceof HTMLElement && t.focus();
};
function lj({
  defaultCollapsed: e = !1,
  selectable: t = !1,
  selected: n,
  defaultSelected: r,
  onSelectedChange: o,
  getItemValue: s = c1,
  sortable: a = !1,
  onMove: i,
  size: c = "md",
  indentBase: l = "sm",
  indentStep: f = "xl",
  onExpandedCountChange: d,
  ariaLabels: h,
  onFocus: p,
  onKeyDown: g,
  className: m,
  style: x,
  children: C,
  ...b
}, y) {
  const S = _.useRef(/* @__PURE__ */ new Map()), [w, M] = _.useState(
    () => ({ nodes: S.current })
  ), k = _.useRef(/* @__PURE__ */ new WeakMap()), E = _.useCallback((H) => {
    const ee = S.current, Q = k.current;
    return ee.has(H.key) && console.warn(
      `Tree: duplicate node key "${String(H.key)}". Item values must resolve to unique keys across the whole tree.`
    ), ee.set(H.key, H), Q.set(H.element, H), M({ nodes: ee }), () => {
      ee.get(H.key) === H && ee.delete(H.key), Q.get(H.element) === H && Q.delete(H.element), M({ nodes: ee });
    };
  }, []), [A, O] = _.useState(() => ({
    overrides: /* @__PURE__ */ new Map()
  })), j = _.useCallback(
    (H, ee) => A.overrides.get(H) ?? A.all ?? ee ?? !e,
    [A, e]
  ), $ = _.useCallback((H, ee) => {
    O((Q) => ({
      ...Q,
      overrides: new Map(Q.overrides).set(H, ee)
    }));
  }, []);
  _.useImperativeHandle(
    y,
    () => ({
      collapseAll: () => O({ all: !1, overrides: /* @__PURE__ */ new Map() }),
      expandAll: () => O({ all: !0, overrides: /* @__PURE__ */ new Map() })
    }),
    []
  );
  const V = _.useCallback(
    (H) => H ? k.current.get(H) : void 0,
    []
  ), D = _.useCallback(
    (H) => {
      const ee = S.current;
      for (let Q = H.parentKey === null ? void 0 : ee.get(H.parentKey); Q; Q = Q.parentKey === null ? void 0 : ee.get(Q.parentKey))
        if (!j(Q.key, Q.defaultOpen)) return !1;
      return !0;
    },
    [j]
  ), B = _.useMemo(
    () => {
      var H;
      return ((H = Array.from(w.nodes.values()).filter((ee) => ee.parentKey === null).sort(Fd)[0]) == null ? void 0 : H.key) ?? null;
    },
    [w]
  ), F = _.useRef(null), X = _.useRef(null), T = _.useCallback((H) => {
    const ee = X.current;
    ee && ee !== H && (ee.tabIndex = -1), H && (H.tabIndex = 0), X.current = H;
  }, []);
  _.useLayoutEffect(() => {
    const H = w.nodes, ee = F.current, Q = ee === null ? void 0 : H.get(ee), G = Q && D(Q) ? Q : B === null ? void 0 : H.get(B);
    T((G == null ? void 0 : G.element) ?? null);
  }, [w, D, B, T]);
  const W = _.useRef(null);
  _.useEffect(() => {
    if (!d) return;
    let H = 0, ee = 0;
    w.nodes.forEach((G) => {
      G.kind !== "group" || !G.hasChildren || (H += 1, j(G.key, G.defaultOpen) && (ee += 1));
    });
    const Q = W.current;
    (Q == null ? void 0 : Q.expandableCount) === H && Q.openCount === ee || (W.current = { expandableCount: H, openCount: ee }, d({ expandableCount: H, openCount: ee }));
  }, [d, w, j]);
  const oe = n !== void 0, [N, P] = _.useState(
    () => r ?? []
  ), L = n ?? N, z = _.useMemo(
    () => new Set(L.map((H) => s(H))),
    [L, s]
  ), Z = _.useMemo(
    () => t ? JT(w.nodes) : /* @__PURE__ */ new Map(),
    [t, w]
  ), U = _.useCallback(
    (H, ee) => {
      let Q;
      if (ee) {
        const G = H.filter((ce) => !z.has(ce.valueKey)).sort(Fd);
        if (G.length === 0) return;
        Q = [...L, ...G.map((ce) => ce.getValue())];
      } else {
        const G = new Set(H.map((ce) => ce.valueKey));
        if (Q = L.filter(
          (ce) => !G.has(s(ce))
        ), Q.length === L.length) return;
      }
      oe || P(Q), o == null || o(Q);
    },
    [
      z,
      L,
      s,
      oe,
      o
    ]
  ), I = _.useCallback(
    (H) => z.has(H),
    [z]
  ), J = _.useCallback(
    (H) => ej(
      Z.get(H) ?? [],
      (ee) => z.has(ee)
    ),
    [Z, z]
  ), re = _.useCallback(
    (H) => {
      const ee = S.current.get(H);
      ee && Ld(ee) && U([ee], !z.has(ee.valueKey));
    },
    [U, z]
  ), de = _.useCallback(
    (H, ee) => U(
      (Z.get(H) ?? []).filter((Q) => !Q.disabled),
      ee
    ),
    [U, Z]
  ), me = (H) => {
    p == null || p(H);
    const ee = V(
      H.target.closest('[role="treeitem"]')
    );
    ee && (F.current = ee.key, T(ee.element));
  }, ge = (H) => {
    var le;
    if (g == null || g(H), H.defaultPrevented) return;
    const ee = H.target, Q = ee.getAttribute("role") === "treeitem" ? V(ee) : void 0, G = Se.current;
    if (!Q || !G) return;
    const ce = cj(G), K = ce.indexOf(ee), ie = Q.hasChildren && j(Q.key, Q.defaultOpen), he = (Ve) => {
      Ve instanceof HTMLElement && Ve.focus();
    };
    switch (H.key) {
      case "ArrowDown":
        he(ce[K + 1]);
        break;
      case "ArrowUp":
        he(ce[K - 1]);
        break;
      case "ArrowRight":
        if (!Q.hasChildren) return;
        ie ? he(ce[K + 1]) : $(Q.key, !0);
        break;
      case "ArrowLeft":
        if (ie) $(Q.key, !1);
        else if (Q.parentKey !== null)
          he((le = S.current.get(Q.parentKey)) == null ? void 0 : le.element);
        else return;
        break;
      case "Home":
        he(ce[0]);
        break;
      case "End":
        he(ce[ce.length - 1]);
        break;
      case "Enter":
        if (!Q.hasChildren) return;
        $(Q.key, !ie);
        break;
      case " ":
        if (!t || Q.disabled) return;
        Q.kind === "item" ? re(Q.key) : de(
          Q.key,
          J(Q.key).state !== "all"
        );
        break;
      default:
        return;
    }
    H.preventDefault();
  }, Se = _.useRef(null), Ie = _.useRef(null), je = _.useRef(null), dt = _.useRef(null), Xe = _.useRef(null), rt = () => {
    je.current && window.clearTimeout(je.current.timer), je.current = null;
  }, vt = () => {
    Xe.current !== null && (window.clearTimeout(Xe.current), Xe.current = null);
  }, We = _.useRef(null), Ge = _.useRef(null), Qe = () => {
    Ge.current !== null && (window.cancelAnimationFrame(Ge.current), Ge.current = null);
    const H = We.current;
    We.current = null, H == null || H();
  }, Dt = (H, ee) => {
    Qe(), We.current = ee;
    const Q = performance.now() + nj, G = () => {
      Ge.current = null, We.current === ee && (H.dragOperation.status.idle || performance.now() > Q ? (We.current = null, ee()) : Ge.current = window.requestAnimationFrame(G));
    };
    Ge.current = window.requestAnimationFrame(G);
  };
  _.useEffect(
    () => () => {
      je.current && window.clearTimeout(je.current.timer), Xe.current !== null && window.clearTimeout(Xe.current), Ge.current !== null && window.cancelAnimationFrame(Ge.current), We.current = null;
    },
    []
  );
  const Pt = _.useCallback(
    (H, ee) => {
      const Q = S.current;
      for (let G = Q.get(ee); G; G = G.parentKey === null ? void 0 : Q.get(G.parentKey))
        if (G.key === H) return !1;
      return !0;
    },
    []
  ), ve = (H) => H === Se.current ? null : V(H.parentElement), Xt = (H, ee) => ({
    parentKey: H ? H.valueKey ?? H.key : null,
    parentValue: H == null ? void 0 : H.getValue(),
    index: ee
  }), It = (H, ee) => {
    Qe();
    const Q = H.operation.source, G = Q ? S.current.get(Q.id) : void 0, ce = G == null ? void 0 : G.element.parentElement;
    if (!G || !ce) return;
    const K = G.element.getAttribute("aria-expanded") === "true";
    K && Pl(() => $(G.key, !1)), Ie.current = {
      node: G,
      originList: ce,
      originIndex: Ao(ce).indexOf(G.element),
      reopen: K,
      nodeOf: V,
      keyboard: !1
    }, dt.current = null, vt(), a1(ee, S.current);
  }, un = (H, ee) => {
    const Q = Ie.current, G = Se.current;
    if (!Q || !G) return;
    if (H.by) {
      if (Q.keyboard = !0, H.by.y !== 0) {
        const he = H.by.y > 0 ? 1 : -1;
        aj(ee, S.current, Q, G, he);
      }
      return;
    }
    const { x: ce, y: K } = H.to ?? ee.dragOperation.position.current, ie = { x: ce, y: K };
    dt.current = ie, Ml(ee, S.current, Q, ie), vt(), Xe.current = window.setTimeout(() => {
      Xe.current = null;
      const he = Ie.current, le = dt.current;
      he === Q && !he.keyboard && le && Ml(ee, S.current, he, le);
    }, rj);
  }, fn = (H, ee) => {
    var ie;
    const { source: Q, target: G } = H.operation, ce = Ie.current;
    if (!Q || !G || !ce || ce.keyboard) {
      rt();
      return;
    }
    if (Ml(
      ee,
      S.current,
      ce,
      dt.current ?? ee.dragOperation.position.current
    ), G.id === Q.id || ((ie = je.current) == null ? void 0 : ie.key) === G.id) return;
    rt();
    const K = window.setTimeout(() => {
      je.current = null;
      const he = S.current.get(G.id);
      (he == null ? void 0 : he.element.getAttribute("aria-expanded")) === "false" && $(he.key, !0);
    }, tj);
    je.current = { key: G.id, timer: K };
  }, Rn = (H, ee) => {
    const Q = Ie.current;
    if (Ie.current = null, rt(), vt(), !Q) return;
    const { node: G, originList: ce, originIndex: K, reopen: ie } = Q;
    if (!G.element.isConnected || !ce.isConnected) return;
    const he = G.element.parentElement, le = he ? Ao(he).indexOf(G.element) : -1, Ve = ve(ce), Tt = he ? ve(he) : void 0, Jt = he !== ce || le !== K, ut = () => {
      ie && $(G.key, !0);
    };
    if (H.canceled || !i || !Jt || Ve === void 0 || Tt === void 0) {
      zp(Q), Dt(ee, ut);
      return;
    }
    const Ye = {
      key: G.valueKey ?? G.key,
      kind: G.kind,
      value: G.getValue(),
      from: Xt(Ve, K),
      to: Xt(Tt, le)
    };
    Dt(ee, () => {
      !G.element.isConnected || !ce.isConnected || (zp(Q), Pl(() => {
        ut(), i(Ye);
      }));
    });
  }, Zt = (h == null ? void 0 : h.dragHandle) ?? "Drag to reorder", Qt = c === "lg" ? 48 : 40, On = _.useMemo(
    () => [
      Cw,
      ww.configure({ offset: { x: 0, y: Qt } })
    ],
    [Qt]
  ), Nt = _.useMemo(
    () => ({
      selectable: t,
      sortable: a,
      size: c,
      ariaLabels: { dragHandle: Zt },
      resolveKey: s,
      register: E,
      isOpen: j,
      setOpen: $,
      isSelected: I,
      getGroupSelection: J,
      toggleItem: re,
      setGroupSelected: de,
      canDrop: Pt
    }),
    [
      t,
      a,
      c,
      Zt,
      s,
      E,
      j,
      $,
      I,
      J,
      re,
      de,
      Pt
    ]
  ), ot = /* @__PURE__ */ u.jsx(l1.Provider, { value: Nt, children: /* @__PURE__ */ u.jsx(
    "ul",
    {
      ref: Se,
      role: "tree",
      ...b,
      onFocus: me,
      onKeyDown: ge,
      className: R(
        `border-divider-default divide-divider-default bg-surface-primary
          rounded-sm divide-y overflow-hidden border`,
        a && gj,
        m
      ),
      style: {
        "--tree-indent-base": `var(--token-spacing-${l})`,
        "--tree-indent-step": `var(--token-spacing-${f})`,
        ...m1(0),
        ...x
      },
      children: C
    }
  ) });
  return a ? /* @__PURE__ */ u.jsx(
    Rw,
    {
      sensors: On,
      onBeforeDragStart: It,
      onDragMove: un,
      onDragOver: fn,
      onDragEnd: Rn,
      children: ot
    }
  ) : ot;
}
const f1 = _.forwardRef(lj);
f1.displayName = "Tree";
const Bi = _.forwardRef(
  ({ forceVisible: e = !1, className: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: o,
      "data-force-visible": e || void 0,
      ...r,
      className: R(
        `right-0 top-0 bottom-0 pr-md pl-16 z-slight bg-row-overlay-fade
        pointer-events-none absolute flex w-max items-center`,
        e ? "opacity-100" : `opacity-0 transition-opacity group-hover:opacity-100
            group-has-[:focus-visible]:opacity-100
            [li:focus-visible>div>&]:opacity-100`,
        t
      ),
      children: /* @__PURE__ */ u.jsx("div", { className: "gap-xs pointer-events-auto flex items-center", children: n })
    }
  )
);
Bi.displayName = "Tree.RowOverlay";
const h1 = (e, t) => {
  if (e === void 0 || !t) return null;
  const n = t(e);
  return n == null || typeof n == "boolean" ? null : _.isValidElement(n) && n.type === Bi ? n : /* @__PURE__ */ u.jsx(Bi, { children: n });
}, dj = `group relative gap-xxs pr-md py-xxs text-md
  text-body-primary hover:bg-interactive-neutral-hover
  has-[:focus-visible]:bg-interactive-neutral-hover
  has-[[data-force-visible]]:bg-interactive-neutral-hover flex items-center
  transition-colors`, uj = {
  md: "min-h-10",
  lg: "min-h-12"
}, fj = `data-[dragging]:border-interactive-default
  data-[dragging]:bg-surface-primary data-[dragging]:rounded-sm
  data-[dragging]:border`, hj = `text-shape-light rounded-xs
  hover:bg-interactive-neutral-active flex size-6 shrink-0 cursor-pointer
  items-center justify-center`, p1 = `[&:focus-visible>div]:ring-interactive-focused
  [&:focus-visible>div]:bg-interactive-neutral-hover outline-none
  [&:focus-visible>div]:ring-4 [&:focus-visible>div]:ring-inset`, pj = (e) => e === "some" ? "mixed" : e === "all", mj = `text-shape-light rounded-xs
  focus-visible:ring-interactive-focused group-hover:opacity-100
  group-data-[dragging]:opacity-100 pointer-coarse:opacity-100 flex size-6
  shrink-0 cursor-grab touch-none items-center justify-center opacity-0
  transition-opacity focus-visible:opacity-100 focus-visible:ring-4
  focus-visible:outline-none active:cursor-grabbing`, Hf = "size-6 shrink-0", vj = "size-[1.125rem] shrink-0", Gf = (e) => `calc(var(--tree-indent-base) + ${e} * var(--tree-indent-step))`, m1 = (e) => ({ "--tree-indent": Gf(e) }), gj = `[&_[data-dnd-placeholder]]:relative
  [&_[data-dnd-placeholder]]:!visible [&_[data-dnd-placeholder]>*]:invisible
  [&_[data-dnd-placeholder]]:after:inset-y-xxs
  [&_[data-dnd-placeholder]]:after:right-md
  [&_[data-dnd-placeholder]]:after:left-(--tree-indent)
  [&_[data-dnd-placeholder]]:after:rounded-sm
  [&_[data-dnd-placeholder]]:after:border-interactive-selected
  [&_[data-dnd-placeholder]]:after:bg-interactive-neutral-hover
  [&_[data-dnd-placeholder]]:after:absolute
  [&_[data-dnd-placeholder]]:after:border
  [&_[data-dnd-placeholder]]:after:border-dashed
  [&_[data-dnd-placeholder]]:after:content-['']`, v1 = (e, t, n) => R(
  dj,
  uj[e],
  t && "text-body-disabled",
  n
), yj = ({
  nodeKey: e,
  elementRef: t,
  depth: n,
  disabled: r,
  children: o
}) => {
  const { size: s, ariaLabels: a, canDrop: i } = Bf(), { targetRef: c, handleRef: l, isDragging: f } = Zw({
    id: e,
    // Rows are numbered from the DOM while dragging; see `syncIndexes`.
    index: 0,
    accept: (d) => i(d.id, e),
    // A disabled row cannot be dragged but stays a drop target, so the gap
    // can still be placed next to it.
    disabled: { draggable: r, droppable: !1 },
    element: t,
    // The tree moves rows itself, so dnd-kit's optimistic and keyboard sorting stay off.
    plugins: []
  });
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: c,
      "data-dragging": f || void 0,
      className: v1(s, r, fj),
      style: { paddingLeft: Gf(n) },
      children: [
        r ? /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, className: Hf }) : /* @__PURE__ */ u.jsx(
          "button",
          {
            type: "button",
            ref: l,
            "aria-label": a.dragHandle,
            className: mj,
            children: /* @__PURE__ */ u.jsx(Yp, { size: 16 })
          }
        ),
        o
      ]
    }
  );
}, g1 = (e) => {
  const { sortable: t, size: n } = Bf();
  return t ? /* @__PURE__ */ u.jsx(yj, { ...e }) : /* @__PURE__ */ u.jsx(
    "div",
    {
      className: v1(n, e.disabled),
      style: { paddingLeft: Gf(e.depth) },
      children: e.children
    }
  );
}, y1 = (e) => _.Children.toArray(e).reduce(
  (t, n) => t + (_.isValidElement(n) && n.type === _.Fragment ? y1(n.props.children) : 1),
  0
), b1 = ({ kind: e, value: t, disabled: n, hasChildren: r = !1, defaultOpen: o }, s) => {
  const a = Bf(), i = _.useContext(d1), c = _.useId(), l = t === void 0 ? void 0 : a.resolveKey(t);
  if (e === "item" && t !== void 0 && typeof l != "string" && typeof l != "number")
    throw new Error(
      "Tree.Item: `getItemValue` must return a string or number for every Item value."
    );
  const f = l === void 0 ? c : e === "group" ? `group:${String(l)}` : l, d = n || i.disabled, h = _.useRef(t);
  _.useLayoutEffect(() => {
    h.current = t;
  });
  const p = _.useRef(null), g = _.useCallback(
    (C) => {
      p.current = C, typeof s == "function" ? s(C) : s && (s.current = C);
    },
    [s]
  ), { register: m } = a, { parentKey: x } = i;
  return _.useLayoutEffect(() => {
    const C = p.current;
    return C ? m({
      key: f,
      valueKey: l,
      parentKey: x,
      kind: e,
      disabled: d,
      hasChildren: r,
      defaultOpen: o,
      element: C,
      getValue: () => h.current
    }) : void 0;
  }, [
    m,
    f,
    l,
    x,
    e,
    d,
    r,
    o
  ]), {
    ctx: a,
    depth: i.depth,
    key: f,
    valueKey: l,
    isDisabled: d,
    id: c,
    setElement: g,
    elementRef: p
  };
};
function bj({
  label: e,
  value: t,
  renderRowOverlay: n,
  defaultOpen: r,
  disabled: o = !1,
  className: s,
  children: a,
  ...i
}, c) {
  const l = y1(a) > 0, { ctx: f, depth: d, key: h, isDisabled: p, id: g, setElement: m, elementRef: x } = b1(
    { kind: "group", value: t, disabled: o, hasChildren: l, defaultOpen: r },
    c
  ), C = t !== void 0;
  _.useEffect(() => {
    f.sortable && !C && console.warn(
      "Tree.Group: give every Group a `value` in a sortable tree, so `onMove` can name it as a parent."
    );
  }, [f.sortable, C]);
  const b = `${g}-label`, y = `${g}-group`, S = !l || f.isOpen(h, r), w = f.selectable ? f.getGroupSelection(h) : null, M = () => f.setOpen(h, !S);
  return /* @__PURE__ */ u.jsxs(
    "li",
    {
      ref: m,
      role: "treeitem",
      "aria-labelledby": b,
      "aria-expanded": l ? S : void 0,
      "aria-level": d + 1,
      "aria-disabled": p || void 0,
      "aria-checked": w != null && w.selectable ? pj(w.state) : void 0,
      "data-state": l ? S ? "open" : "closed" : void 0,
      ...i,
      tabIndex: -1,
      className: R(p1, s),
      children: [
        /* @__PURE__ */ u.jsxs(
          g1,
          {
            nodeKey: h,
            elementRef: x,
            depth: d,
            disabled: p,
            children: [
              l ? /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, onClick: M, className: hj, children: /* @__PURE__ */ u.jsx(
                zd,
                {
                  size: 14,
                  className: R(
                    "transition-transform duration-200",
                    S && "rotate-90"
                  )
                }
              ) }) : /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, className: Hf }),
              w && /* @__PURE__ */ u.jsx(
                go,
                {
                  id: `${g}-checkbox`,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  onFocus: u1,
                  checked: w.state === "all",
                  indeterminate: w.state === "some",
                  disabled: p || !w.selectable,
                  onCheckedChange: (k) => f.setGroupSelected(h, k === !0),
                  className: "shrink-0"
                }
              ),
              /* @__PURE__ */ u.jsx(
                "span",
                {
                  id: b,
                  onClick: l ? M : void 0,
                  className: R(
                    "min-w-0 flex-1 truncate select-none",
                    l && "cursor-pointer"
                  ),
                  children: e
                }
              ),
              h1(t, n)
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(
          d1.Provider,
          {
            value: { parentKey: h, depth: d + 1, disabled: p },
            children: /* @__PURE__ */ u.jsx(
              "ul",
              {
                role: "group",
                id: y,
                hidden: !S,
                className: `border-divider-default divide-divider-default divide-y
            border-t empty:hidden`,
                style: m1(d + 1),
                children: a
              }
            )
          }
        )
      ]
    }
  );
}
const x1 = _.forwardRef(bj);
x1.displayName = "Tree.Group";
function xj({
  value: e,
  renderRowOverlay: t,
  disabled: n = !1,
  className: r,
  children: o,
  ...s
}, a) {
  const { ctx: i, depth: c, key: l, valueKey: f, isDisabled: d, id: h, setElement: p, elementRef: g } = b1({ kind: "item", value: e, disabled: n }, a), m = `${h}-label`, x = `${h}-checkbox`, C = i.selectable && f !== void 0, b = f !== void 0 && i.isSelected(f);
  return /* @__PURE__ */ u.jsx(
    "li",
    {
      ref: p,
      role: "treeitem",
      "aria-labelledby": m,
      "aria-level": c + 1,
      "aria-disabled": d || void 0,
      "aria-checked": C ? b : void 0,
      ...s,
      tabIndex: -1,
      className: R(p1, r),
      children: /* @__PURE__ */ u.jsxs(
        g1,
        {
          nodeKey: l,
          elementRef: g,
          depth: c,
          disabled: d,
          children: [
            /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, className: Hf }),
            i.selectable && (C ? /* @__PURE__ */ u.jsx(
              go,
              {
                id: x,
                "aria-hidden": !0,
                tabIndex: -1,
                onFocus: u1,
                checked: b,
                disabled: d,
                onCheckedChange: () => i.toggleItem(l),
                className: "shrink-0"
              }
            ) : /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, className: vj })),
            C ? /* @__PURE__ */ u.jsx(
              "label",
              {
                id: m,
                htmlFor: x,
                className: R(
                  "min-w-0 flex-1 select-none",
                  d ? "cursor-not-allowed" : "cursor-pointer"
                ),
                children: o
              }
            ) : /* @__PURE__ */ u.jsx("span", { id: m, className: "min-w-0 flex-1", children: o }),
            h1(e, t)
          ]
        }
      )
    }
  );
}
const w1 = _.forwardRef(xj);
w1.displayName = "Tree.Item";
const Bp = Object.assign(f1, {
  Group: x1,
  Item: w1,
  RowOverlay: Bi
}), wj = (e, t, n) => {
  const { getItemValue: r, getParentKey: o, getOrder: s, withPlacement: a } = n, i = e.find((d) => r(d) === t.key);
  if (!i) return e;
  const c = (d) => e.filter(
    (h) => (o(h) ?? null) === d && r(h) !== t.key
  ).sort((h, p) => s(h) - s(p)), l = /* @__PURE__ */ new Map(), f = c(t.to.parentKey);
  return f.splice(t.to.index, 0, i), f.forEach(
    (d, h) => l.set(r(d), [t.to.parentKey, h])
  ), t.from.parentKey !== t.to.parentKey && c(t.from.parentKey).forEach(
    (d, h) => l.set(r(d), [t.from.parentKey, h])
  ), e.map((d) => {
    const h = l.get(r(d));
    return h ? a(d, h[0], h[1]) : d;
  });
};
function Cj({
  items: e,
  getParentKey: t,
  getLabel: n,
  getOrder: r,
  header: o,
  actions: s,
  isItemDisabled: a,
  labels: i,
  onItemsChange: c,
  withPlacement: l,
  onMove: f,
  onSelectedChange: d,
  getItemValue: h = c1,
  className: p,
  style: g,
  ...m
}, x) {
  const C = _.useRef(null), b = _.useId(), y = m["aria-label"] !== void 0 || m["aria-labelledby"] !== void 0;
  _.useImperativeHandle(
    x,
    () => ({
      collapseAll: () => {
        var D;
        return (D = C.current) == null ? void 0 : D.collapseAll();
      },
      expandAll: () => {
        var D;
        return (D = C.current) == null ? void 0 : D.expandAll();
      }
    }),
    []
  );
  const [S, w] = _.useState({
    expandableCount: 0,
    openCount: 0
  }), M = _.useMemo(
    () => ij(e, {
      getItemValue: h,
      getParentKey: t,
      ...r && { getOrder: r }
    }),
    [e, h, t, r]
  ), k = _.useRef(null);
  _.useEffect(() => {
    if (k.current === e) return;
    let D = 0;
    const B = (F) => (M.get(F) ?? []).forEach((X) => {
      D += 1, B(h(X));
    });
    B(null), D < e.length && (k.current = e, console.warn(
      `TreeList: ${e.length - D} item(s) cannot be reached from the top level. Check \`getParentKey\` for cycles.`
    ));
  }, [e, M, h]);
  const E = _.useMemo(() => {
    const D = /* @__PURE__ */ new Set();
    if (!a) return D;
    const B = (F, X) => (M.get(F) ?? []).forEach((T) => {
      const W = h(T);
      X && D.add(W), B(W, X || a(T));
    });
    return B(null, !1), D;
  }, [M, h, a]), A = _.useMemo(
    () => s ? (D) => {
      const B = s(D, {
        ancestorDisabled: E.has(h(D))
      });
      return B.length === 0 ? null : /* @__PURE__ */ u.jsx(u.Fragment, { children: B.map((F) => /* @__PURE__ */ u.jsx(
        He,
        {
          type: "button",
          intent: F.intent ?? "secondary",
          size: "xs",
          danger: F.danger ?? !1,
          "aria-label": F.ariaLabel ?? (typeof F.label == "string" ? F.label : F.key),
          disabled: F.disabled ?? !1,
          onClick: () => F.onAction(D),
          children: F.label
        },
        F.key
      )) });
    } : void 0,
    [s, E, h]
  ), O = _.useMemo(() => {
    const D = (B) => (M.get(B) ?? []).map((F) => {
      const X = h(F);
      return /* @__PURE__ */ u.jsx(
        Bp.Group,
        {
          value: F,
          label: n(F),
          disabled: (a == null ? void 0 : a(F)) ?? !1,
          ...A && { renderRowOverlay: A },
          children: D(X)
        },
        X
      );
    });
    return D(null);
  }, [
    M,
    h,
    n,
    a,
    A
  ]), j = c ? (D) => {
    c(
      wj(e, D, {
        getItemValue: h,
        getParentKey: t,
        getOrder: r,
        withPlacement: l
      })
    ), f == null || f(D);
  } : f, $ = S.expandableCount > 0 && S.openCount < S.expandableCount, V = S.openCount > 0;
  return /* @__PURE__ */ u.jsxs("div", { className: R("flex w-full flex-col", p), style: g, children: [
    /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: `gap-xs pb-sm text-sm text-body-secondary flex items-center
          justify-end`,
        children: [
          /* @__PURE__ */ u.jsx(Vs, { asChild: !0, intent: "tertiary", disabled: !$, children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              disabled: !$,
              onClick: () => {
                var D;
                return (D = C.current) == null ? void 0 : D.expandAll();
              },
              children: i.expandAll
            }
          ) }),
          /* @__PURE__ */ u.jsx("span", { "aria-hidden": !0, children: "|" }),
          /* @__PURE__ */ u.jsx(Vs, { asChild: !0, intent: "tertiary", disabled: !V, children: /* @__PURE__ */ u.jsx(
            "button",
            {
              type: "button",
              disabled: !V,
              onClick: () => {
                var D;
                return (D = C.current) == null ? void 0 : D.collapseAll();
              },
              children: i.collapseAll
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs("div", { className: "border-surface-default bg-surface-primary border-y", children: [
      /* @__PURE__ */ u.jsx("div", { className: "bg-surface-tertiary pl-xs h-10 flex items-center", children: /* @__PURE__ */ u.jsx(
        "div",
        {
          id: b,
          className: "px-md text-sm text-body-secondary truncate",
          children: o
        }
      ) }),
      /* @__PURE__ */ u.jsx(
        Bp,
        {
          ref: C,
          size: "lg",
          "aria-labelledby": y ? void 0 : b,
          getItemValue: h,
          ...d && { onSelectedChange: d },
          onExpandedCountChange: w,
          ...j && { onMove: j },
          className: `border-surface-default divide-surface-default rounded-none
            border-x-0 border-t border-b-0`,
          indentBase: "xl",
          indentStep: "lg",
          ...m,
          children: O
        }
      )
    ] })
  ] });
}
const Sj = _.forwardRef(Cj);
Sj.displayName = "TreeList";
const _j = pe(
  `focus-visible:ring-interactive-focused relative cursor-pointer border-1
  border-dashed transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      size: {
        small: "pt-md pb-lg min-h-20 rounded-sm",
        large: "pt-6.5 pb-9.75 px-xl rounded-lg"
      },
      state: {
        default: `border-interactive-default bg-surface-primary
        hover:bg-surface-secondary`,
        dragging: "bg-surface-success border-interactive-focused border-solid",
        success: "border-shape-status-success bg-surface-success",
        error: "border-shape-status-alert bg-surface-alert",
        inProgress: "border-interactive-default bg-surface-primary"
      },
      disabled: {
        true: `border-interactive-disabled bg-surface-disabled
        cursor-not-allowed opacity-50`,
        false: ""
      }
    },
    compoundVariants: [],
    defaultVariants: {
      size: "small",
      state: "default"
    }
  }
), kj = _.forwardRef(
  ({
    className: e,
    size: t,
    state: n,
    onFileSelect: r,
    accept: o,
    multiple: s = !1,
    disabled: a = !1,
    progress: i,
    fileName: c,
    fileSize: l,
    errorMessage: f,
    successMessage: d,
    onFileRemove: h,
    dragDropText: p = "ここにドラッグ&ドロップ",
    orText: g = "または",
    selectFileText: m = "ファイルを選択",
    dropFilesText: x = "ここにファイルをドロップ",
    uploadingText: C = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: y = "アップロードに失敗しました",
    ...S
  }, w) => {
    const [M, k] = at(!1), E = pt(null), A = ke(
      (P) => {
        P.preventDefault(), P.stopPropagation(), M || k(!0);
      },
      [M]
    ), O = ke((P) => {
      P.preventDefault(), P.stopPropagation(), k(!1);
    }, []), j = ke((P) => {
      P.preventDefault(), P.stopPropagation();
    }, []), $ = ke(
      (P) => {
        if (P.preventDefault(), P.stopPropagation(), k(!1), a) return;
        const L = P.dataTransfer.files;
        L && L.length > 0 && (r == null || r(L));
      },
      [a, r]
    ), V = ke(() => {
      var P;
      a || (P = E.current) == null || P.click();
    }, [a]), D = ke(
      (P) => {
        const L = P.target.files;
        L && L.length > 0 && (r == null || r(L));
      },
      [r]
    ), B = M ? "dragging" : n, F = () => /* @__PURE__ */ u.jsx(
      q1,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), X = () => /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-body-secondary", children: p }),
        /* @__PURE__ */ u.jsx("p", { className: "text-body-secondary text-sm", children: g })
      ] }),
      /* @__PURE__ */ u.jsx(
        He,
        {
          size: "xs",
          intent: "tertiary",
          className: M ? "" : "z-10",
          icon: eh,
          onClick: (P) => {
            P.stopPropagation(), V();
          },
          children: m
        }
      )
    ] }), T = () => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      F(),
      /* @__PURE__ */ u.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        x,
        " ",
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: g })
      ] }),
      /* @__PURE__ */ u.jsx(
        He,
        {
          size: "xs",
          intent: "tertiary",
          className: M ? "" : "z-10",
          icon: eh,
          onClick: (P) => {
            P.stopPropagation(), V();
          },
          children: m
        }
      )
    ] }), W = () => {
      const P = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return B === "inProgress" && i !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-body-primary", children: c || P }),
          /* @__PURE__ */ u.jsxs("div", { className: "text-body-secondary flex", children: [
            /* @__PURE__ */ u.jsxs("span", { children: [
              "（",
              l || "12kb",
              "）"
            ] }),
            /* @__PURE__ */ u.jsx("span", { children: C })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsx(
          wc.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : B === "success" ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-body-primary", children: c || P }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (L) => {
                L.stopPropagation(), h == null || h();
              },
              children: /* @__PURE__ */ u.jsx(u2, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ u.jsx(
            K1,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ u.jsx("p", { className: "text-interactive-primary-default", children: d || b })
        ] })
      ] }) : B === "error" ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("p", { className: "text-body-alert", children: c || P }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ u.jsx(j1, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-body-alert", children: f || y })
        ] })
      ] }) : null;
    }, oe = () => t === "small" ? X() : T(), N = () => /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: A,
        onDragLeave: O,
        onDragOver: j,
        onDrop: $
      }
    );
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          ref: w,
          className: R(
            "relative",
            _j({ size: t, state: B, disabled: a }),
            e
          ),
          onClick: V,
          role: "button",
          tabIndex: a ? -1 : 0,
          "aria-disabled": a,
          ...S,
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: E,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: s,
                onChange: D,
                disabled: a
              }
            ),
            N(),
            oe()
          ]
        }
      ),
      (B === "inProgress" && i !== void 0 || B === "success" || B === "error") && W()
    ] });
  }
);
kj.displayName = "FileUploader";
export {
  Dj as Accordion,
  Oj as AccountMenu,
  n0 as AutoSuggest,
  pN as Badge,
  gN as Breadcrumbs,
  He as Button,
  Wb as Calendar,
  sO as Callout,
  go as Checkbox,
  cO as CheckboxGroup,
  dO as ChoiceChip,
  uO as ChoiceChipGroup,
  Tj as DataSheet,
  Zb as DataSheetAction,
  Fb as DataSheetHeader,
  zb as DataSheetKeyValue,
  Vb as DataSheetSection,
  Yb as DataSheetTable,
  Xb as DataSheetTableActionsCell,
  Ub as DataSheetTableBody,
  Mi as DataSheetTableCell,
  Kb as DataSheetTableHeader,
  qb as DataSheetTableRow,
  MO as DatePicker,
  jj as Dialog,
  Tu as Dropdown,
  Iu as DropdownContent,
  Zl as DropdownItem,
  hN as DropdownLabel,
  fN as DropdownSeparator,
  ju as DropdownTrigger,
  kj as FileUploader,
  BD as FooterProvider,
  Wj as FormField,
  Bj as Logo,
  xD as MultiSelect,
  $j as MultiStepDialog,
  kD as Pagination,
  wc as ProgressIndicator,
  Fj as RadioButton,
  Vj as RadioButtonGroup,
  WD as SearchBar,
  zj as SegmentedControl,
  nd as Select,
  GD as SideNavigation,
  w0 as SideNavigationCollapseButton,
  KD as SideNavigationItem,
  zD as SideNavigationProvider,
  qD as SideNavigationSection,
  t7 as Sortable,
  n7 as StatusIndicator,
  IT as Stepper,
  TT as Switch,
  s1 as Tab,
  XT as TabBar,
  jT as Table,
  WT as TableBody,
  BT as TableCaption,
  zT as TableCell,
  o1 as TableCoverMessage,
  LT as TableFooter,
  VT as TableHead,
  r7 as TableHeadSortButton,
  $T as TableHeader,
  FT as TableRow,
  HT as TableRowOverlay,
  Jl as Tag,
  r0 as TagInput,
  QT as TextArea,
  Lj as TextField,
  Vs as TextLink,
  o7 as ToastItem,
  s7 as ToastProvider,
  rn as Tooltip,
  Ij as TooltipProvider,
  Bp as Tree,
  Sj as TreeList,
  wj as applyTreeListMove,
  a7 as applyTreeMove,
  YO as colorCodeToTokenMap,
  IO as focusFirstTextField,
  ij as groupFlatTreeItems,
  _s as iconVariants,
  _O as inputVariants,
  Qb as inputWrapperVariants,
  c1 as resolveTreeValue,
  ma as useSideNavigation
};
