import * as v from "react";
import _, { forwardRef as Zp, createElement as Xc, useState as tt, useLayoutEffect as Kd, createContext as Qs, useContext as Is, useCallback as ke, useRef as ct, useEffect as on, useMemo as po, useInsertionEffect as H1, memo as G1, startTransition as Y1, useImperativeHandle as K1 } from "react";
import * as Js from "react-dom";
import U1, { flushSync as jl } from "react-dom";
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
var eh;
function q1() {
  if (eh) return Zo;
  eh = 1;
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
var th;
function X1() {
  return th || (th = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === I ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case b:
          return "Fragment";
        case x:
          return "Profiler";
        case C:
          return "StrictMode";
        case k:
          return "Suspense";
        case E:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case m:
            return "Portal";
          case S:
            return A.displayName || "Context";
          case g:
            return (A._context.displayName || "Context") + ".Consumer";
          case w:
            var N = A.render;
            return A = A.displayName, A || (A = N.displayName || N.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case M:
            return N = A.displayName || null, N !== null ? N : e(A.type) || "Memo";
          case P:
            N = A._payload, A = A._init;
            try {
              return e(A(N));
            } catch {
            }
        }
      return null;
    }
    function t(A) {
      return "" + A;
    }
    function n(A) {
      try {
        t(A);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, z = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(A);
      }
    }
    function r(A) {
      if (A === b) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === P)
        return "<...>";
      try {
        var N = e(A);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var A = D.A;
      return A === null ? null : A.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(A) {
      if (L.call(A, "key")) {
        var N = Object.getOwnPropertyDescriptor(A, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function i(A, N) {
      function F() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: F,
        configurable: !0
      });
    }
    function c() {
      var A = e(this.type);
      return Y[A] || (Y[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function l(A, N, F, z, Z, q) {
      var $ = F.ref;
      return A = {
        $$typeof: y,
        type: A,
        key: N,
        props: F,
        _owner: z
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, N, F, z, Z, q) {
      var $ = N.children;
      if ($ !== void 0)
        if (z)
          if (j($)) {
            for (z = 0; z < $.length; z++)
              u($[z]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u($);
      if (L.call(N, "key")) {
        $ = e(A);
        var J = Object.keys(N).filter(function(de) {
          return de !== "key";
        });
        z = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", oe[$ + z] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          $,
          J,
          $
        ), oe[$ + z] = !0);
      }
      if ($ = null, F !== void 0 && (n(F), $ = "" + F), a(N) && (n(N.key), $ = "" + N.key), "key" in N) {
        F = {};
        for (var re in N)
          re !== "key" && (F[re] = N[re]);
      } else F = N;
      return $ && i(
        F,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), l(
        A,
        $,
        F,
        o(),
        Z,
        q
      );
    }
    function u(A) {
      h(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === P && (A._payload.status === "fulfilled" ? h(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function h(A) {
      return typeof A == "object" && A !== null && A.$$typeof === y;
    }
    var p = _, y = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), I = Symbol.for("react.client.reference"), D = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, j = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var V, Y = {}, T = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), W = B(r(s)), oe = {};
    Qo.Fragment = b, Qo.jsx = function(A, N, F) {
      var z = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        A,
        N,
        F,
        !1,
        z ? Error("react-stack-top-frame") : T,
        z ? B(r(A)) : W
      );
    }, Qo.jsxs = function(A, N, F) {
      var z = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        A,
        N,
        F,
        !0,
        z ? Error("react-stack-top-frame") : T,
        z ? B(r(A)) : W
      );
    };
  })()), Qo;
}
var nh;
function Z1() {
  return nh || (nh = 1, process.env.NODE_ENV === "production" ? Pa.exports = q1() : Pa.exports = X1()), Pa.exports;
}
var d = Z1();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Q1 = {
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
const Oe = (e, t, n, r) => {
  const o = Zp(
    ({ color: s = "currentColor", size: a = 24, stroke: i = 2, title: c, className: l, children: f, ...u }, h) => Xc(
      "svg",
      {
        ref: h,
        ...Q1[e],
        width: a,
        height: a,
        className: ["tabler-icon", `tabler-icon-${t}`, l].join(" "),
        ...e === "filled" ? {
          fill: s
        } : {
          strokeWidth: i,
          stroke: s
        },
        ...u
      },
      [
        c && Xc("title", { key: "svg-title" }, c),
        ...r.map(([p, y]) => Xc(p, y)),
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
const J1 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], e2 = Oe("outline", "alert-circle", "AlertCircle", J1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], n2 = Oe("outline", "calendar-event", "CalendarEvent", t2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Qp = Oe("outline", "check", "Check", r2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ea = Oe("outline", "chevron-down", "ChevronDown", o2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], a2 = Oe("outline", "chevron-left", "ChevronLeft", s2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Ud = Oe("outline", "chevron-right", "ChevronRight", i2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], l2 = Oe("outline", "chevron-up", "ChevronUp", c2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], u2 = Oe("outline", "circle-check", "CircleCheck", d2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], h2 = Oe("outline", "cloud-up", "CloudUp", f2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], m2 = Oe("outline", "dots-vertical", "DotsVertical", p2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = [["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], Jp = Oe("outline", "grip-vertical", "GripVertical", v2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], y2 = Oe("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", g2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], x2 = Oe("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", b2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], C2 = Oe("outline", "loader", "Loader", w2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = [["path", { d: "M4 6l16 0", key: "svg-0" }], ["path", { d: "M4 12l16 0", key: "svg-1" }], ["path", { d: "M4 18l16 0", key: "svg-2" }]], _2 = Oe("outline", "menu-2", "Menu2", S2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k2 = [["path", { d: "M5 12l14 0", key: "svg-0" }]], E2 = Oe("outline", "minus", "Minus", k2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], em = Oe("outline", "pencil", "Pencil", M2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], tm = Oe("outline", "restore", "Restore", N2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], qd = Oe("outline", "search", "Search", P2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], R2 = Oe("outline", "trash-x", "TrashX", A2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], nm = Oe("outline", "trash", "Trash", O2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], I2 = Oe("outline", "user", "User", D2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Xd = Oe("outline", "x", "X", j2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], $2 = Oe("filled", "alert-circle-filled", "AlertCircleFilled", T2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], rm = Oe("filled", "circle-check-filled", "CircleCheckFilled", W2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], rh = Oe("filled", "exclamation-circle-filled", "ExclamationCircleFilled", L2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], oh = Oe("filled", "folder-filled", "FolderFilled", F2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], ni = Oe("filled", "info-circle-filled", "InfoCircleFilled", V2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], B2 = Oe("filled", "lock-filled", "LockFilled", z2);
function sh(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Vn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = sh(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : sh(e[o], null);
        }
      };
  };
}
function be(...e) {
  return v.useCallback(Vn(...e), e);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  const t = /* @__PURE__ */ H2(e), n = v.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = v.Children.toArray(s), c = i.find(G2);
    if (c) {
      const l = c.props.children, f = i.map((u) => u === c ? v.Children.count(l) > 1 ? v.Children.only(null) : v.isValidElement(l) ? l.props.children : null : u);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: v.isValidElement(l) ? v.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var jr = /* @__PURE__ */ or("Slot");
// @__NO_SIDE_EFFECTS__
function H2(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (v.isValidElement(o)) {
      const a = K2(o), i = Y2(s, o.props);
      return o.type !== v.Fragment && (i.ref = r ? Vn(r, a) : a), v.cloneElement(o, i);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var om = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function sm(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = om, t;
}
var am = /* @__PURE__ */ sm("Slottable");
function G2(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === om;
}
function Y2(e, t) {
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
function K2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var U2 = [
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
], ne = U2.reduce((e, t) => {
  const n = /* @__PURE__ */ or(`Primitive.${t}`), r = v.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Zd(e, t) {
  e && Js.flushSync(() => e.dispatchEvent(t));
}
var im = Object.freeze({
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
}), q2 = "VisuallyHidden", Ki = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    ne.span,
    {
      ...e,
      ref: t,
      style: { ...im, ...e.style }
    }
  )
);
Ki.displayName = q2;
var X2 = Ki;
function Z2(e, t) {
  const n = v.createContext(t), r = (s) => {
    const { children: a, ...i } = s, c = v.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d.jsx(n.Provider, { value: c, children: a });
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
function dt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = v.createContext(a), c = n.length;
    n = [...n, a];
    const l = (u) => {
      var C;
      const { scope: h, children: p, ...y } = u, m = ((C = h == null ? void 0 : h[e]) == null ? void 0 : C[c]) || i, b = v.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: b, children: p });
    };
    l.displayName = s + "Provider";
    function f(u, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || i, y = v.useContext(p);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
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
  return o.scopeName = e, [r, Q2(o, ...t)];
}
function Q2(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: l }) => {
        const u = c(s)[`__scope${l}`];
        return { ...i, ...u };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function ta(e) {
  const t = e + "CollectionProvider", [n, r] = dt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: b, children: C } = m, x = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: b, itemMap: g, collectionRef: x, children: C });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ or(i), l = _.forwardRef(
    (m, b) => {
      const { scope: C, children: x } = m, g = s(i, C), S = be(b, g.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: S, children: x });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ or(f), p = _.forwardRef(
    (m, b) => {
      const { scope: C, children: x, ...g } = m, S = _.useRef(null), w = be(b, S), k = s(f, C);
      return _.useEffect(() => (k.itemMap.set(S, { ref: S, ...g }), () => void k.itemMap.delete(S))), /* @__PURE__ */ d.jsx(h, { [u]: "", ref: w, children: x });
    }
  );
  p.displayName = f;
  function y(m) {
    const b = s(e + "CollectionConsumer", m);
    return _.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const g = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, E) => g.indexOf(k.ref.current) - g.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    y,
    r
  ];
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var lt = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, J2 = v[" useInsertionEffect ".trim().toString()] || lt;
function kt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = eC({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const f = v.useRef(e !== void 0);
    v.useEffect(() => {
      const u = f.current;
      u !== i && console.warn(
        `${r} is changing from ${u ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const l = v.useCallback(
    (f) => {
      var u;
      if (i) {
        const h = tC(f) ? f(e) : f;
        h !== e && ((u = a.current) == null || u.call(a, h));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function eC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = v.useState(e), o = v.useRef(n), s = v.useRef(t);
  return J2(() => {
    s.current = t;
  }, [t]), v.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function tC(e) {
  return typeof e == "function";
}
function nC(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var mt = (e) => {
  const { present: t, children: n } = e, r = rC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), s = be(r.ref, oC(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: s }) : null;
};
mt.displayName = "Presence";
function rC(e) {
  const [t, n] = v.useState(), r = v.useRef(null), o = v.useRef(e), s = v.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = nC(a, {
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
    const l = Aa(r.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), lt(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = s.current, p = Aa(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), lt(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, u = (p) => {
        const m = Aa(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && m && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = Aa(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
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
function Aa(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function oC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var sC = v[" useId ".trim().toString()] || (() => {
}), aC = 0;
function Ze(e) {
  const [t, n] = v.useState(sC());
  return lt(() => {
    n((r) => r ?? String(aC++));
  }, [e]), t ? `radix-${t}` : "";
}
var Ui = "Collapsible", [iC, cm] = dt(Ui), [cC, Qd] = iC(Ui), lm = v.forwardRef(
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
      caller: Ui
    });
    return /* @__PURE__ */ d.jsx(
      cC,
      {
        scope: n,
        disabled: s,
        contentId: Ze(),
        open: c,
        onOpenToggle: v.useCallback(() => l((f) => !f), [l]),
        children: /* @__PURE__ */ d.jsx(
          ne.div,
          {
            "data-state": eu(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
lm.displayName = Ui;
var dm = "CollapsibleTrigger", um = v.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Qd(dm, n);
    return /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": eu(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
um.displayName = dm;
var Jd = "CollapsibleContent", fm = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Qd(Jd, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(mt, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ d.jsx(lC, { ...r, ref: t, present: s }) });
  }
);
fm.displayName = Jd;
var lC = v.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = Qd(Jd, n), [i, c] = v.useState(r), l = v.useRef(null), f = be(t, l), u = v.useRef(0), h = u.current, p = v.useRef(0), y = p.current, m = a.open || i, b = v.useRef(m), C = v.useRef(void 0);
  return v.useEffect(() => {
    const x = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), lt(() => {
    const x = l.current;
    if (x) {
      C.current = C.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const g = x.getBoundingClientRect();
      u.current = g.height, p.current = g.width, b.current || (x.style.transitionDuration = C.current.transitionDuration, x.style.animationName = C.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ d.jsx(
    ne.div,
    {
      "data-state": eu(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function eu(e) {
  return e ? "open" : "closed";
}
var dC = lm, uC = um, fC = fm, hC = v.createContext(void 0);
function Oo(e) {
  const t = v.useContext(hC);
  return e || t || "ltr";
}
var ln = "Accordion", pC = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [tu, mC, vC] = ta(ln), [qi] = dt(ln, [
  vC,
  cm
]), nu = cm(), hm = _.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ d.jsx(tu.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ d.jsx(xC, { ...s, ref: t }) : /* @__PURE__ */ d.jsx(bC, { ...o, ref: t }) });
  }
);
hm.displayName = ln;
var [pm, gC] = qi(ln), [mm, yC] = qi(
  ln,
  { collapsible: !1 }
), bC = _.forwardRef(
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
      caller: ln
    });
    return /* @__PURE__ */ d.jsx(
      pm,
      {
        scope: e.__scopeAccordion,
        value: _.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: _.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ d.jsx(mm, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ d.jsx(vm, { ...a, ref: t }) })
      }
    );
  }
), xC = _.forwardRef((e, t) => {
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
    caller: ln
  }), c = _.useCallback(
    (f) => i((u = []) => [...u, f]),
    [i]
  ), l = _.useCallback(
    (f) => i((u = []) => u.filter((h) => h !== f)),
    [i]
  );
  return /* @__PURE__ */ d.jsx(
    pm,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ d.jsx(mm, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(vm, { ...s, ref: t }) })
    }
  );
}), [wC, Xi] = qi(ln), vm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = _.useRef(null), c = be(i, t), l = mC(n), u = Oo(o) === "ltr", h = X(e.onKeyDown, (p) => {
      var M;
      if (!pC.includes(p.key)) return;
      const y = p.target, m = l().filter((P) => {
        var O;
        return !((O = P.ref.current) != null && O.disabled);
      }), b = m.findIndex((P) => P.ref.current === y), C = m.length;
      if (b === -1) return;
      p.preventDefault();
      let x = b;
      const g = 0, S = C - 1, w = () => {
        x = b + 1, x > S && (x = g);
      }, k = () => {
        x = b - 1, x < g && (x = S);
      };
      switch (p.key) {
        case "Home":
          x = g;
          break;
        case "End":
          x = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (u ? w() : k());
          break;
        case "ArrowDown":
          s === "vertical" && w();
          break;
        case "ArrowLeft":
          s === "horizontal" && (u ? k() : w());
          break;
        case "ArrowUp":
          s === "vertical" && k();
          break;
      }
      const E = x % C;
      (M = m[E].ref.current) == null || M.focus();
    });
    return /* @__PURE__ */ d.jsx(
      wC,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ d.jsx(tu.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
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
), yi = "AccordionItem", [CC, ru] = qi(yi), gm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Xi(yi, n), a = gC(yi, n), i = nu(n), c = Ze(), l = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ d.jsx(
      CC,
      {
        scope: n,
        open: l,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ d.jsx(
          dC,
          {
            "data-orientation": s.orientation,
            "data-state": Sm(l),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: l,
            onOpenChange: (u) => {
              u ? a.onItemOpen(r) : a.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
gm.displayName = yi;
var ym = "AccordionHeader", bm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xi(ln, n), s = ru(ym, n);
    return /* @__PURE__ */ d.jsx(
      ne.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Sm(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
bm.displayName = ym;
var Tl = "AccordionTrigger", xm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xi(ln, n), s = ru(Tl, n), a = yC(Tl, n), i = nu(n);
    return /* @__PURE__ */ d.jsx(tu.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
      uC,
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
xm.displayName = Tl;
var wm = "AccordionContent", Cm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xi(ln, n), s = ru(wm, n), a = nu(n);
    return /* @__PURE__ */ d.jsx(
      fC,
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
Cm.displayName = wm;
function Sm(e) {
  return e ? "open" : "closed";
}
var ah = hm, SC = gm, _C = bm, kC = xm, EC = Cm;
function Rt(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function MC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var NC = "DismissableLayer", $l = "dismissableLayer.update", PC = "dismissableLayer.pointerDownOutside", AC = "dismissableLayer.focusOutside", ih, _m = v.createContext({
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
    } = e, l = v.useContext(_m), [f, u] = v.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), y = be(t, (E) => u(E)), m = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = m.indexOf(b), x = f ? m.indexOf(f) : -1, g = l.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= C, w = OC((E) => {
      const M = E.target, P = [...l.branches].some((O) => O.contains(M));
      !S || P || (o == null || o(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, h), k = DC((E) => {
      const M = E.target;
      [...l.branches].some((O) => O.contains(M)) || (s == null || s(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, h);
    return MC((E) => {
      x === l.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, h), v.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ih = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), ch(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ih);
        };
    }, [f, h, n, l]), v.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), ch());
    }, [f, l]), v.useEffect(() => {
      const E = () => p({});
      return document.addEventListener($l, E), () => document.removeEventListener($l, E);
    }, []), /* @__PURE__ */ d.jsx(
      ne.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: g ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = NC;
var RC = "DismissableLayerBranch", km = v.forwardRef((e, t) => {
  const n = v.useContext(_m), r = v.useRef(null), o = be(t, r);
  return v.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(ne.div, { ...e, ref: o });
});
km.displayName = RC;
function OC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          Em(
            PC,
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
function DC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Em(AC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ch() {
  const e = new CustomEvent($l);
  document.dispatchEvent(e);
}
function Em(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Zd(o, s) : o.dispatchEvent(s);
}
var IC = Tr, jC = km, Zc = "focusScope.autoFocusOnMount", Qc = "focusScope.autoFocusOnUnmount", lh = { bubbles: !1, cancelable: !0 }, TC = "FocusScope", na = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = v.useState(null), l = Rt(o), f = Rt(s), u = v.useRef(null), h = be(t, (m) => c(m)), p = v.useRef({
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
      let m = function(g) {
        if (p.paused || !i) return;
        const S = g.target;
        i.contains(S) ? u.current = S : Un(u.current, { select: !0 });
      }, b = function(g) {
        if (p.paused || !i) return;
        const S = g.relatedTarget;
        S !== null && (i.contains(S) || Un(u.current, { select: !0 }));
      }, C = function(g) {
        if (document.activeElement === document.body)
          for (const w of g)
            w.removedNodes.length > 0 && Un(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const x = new MutationObserver(C);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [r, i, p.paused]), v.useEffect(() => {
    if (i) {
      uh.add(p);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const C = new CustomEvent(Zc, lh);
        i.addEventListener(Zc, l), i.dispatchEvent(C), C.defaultPrevented || ($C(zC(Mm(i)), { select: !0 }), document.activeElement === m && Un(i));
      }
      return () => {
        i.removeEventListener(Zc, l), setTimeout(() => {
          const C = new CustomEvent(Qc, lh);
          i.addEventListener(Qc, f), i.dispatchEvent(C), C.defaultPrevented || Un(m ?? document.body, { select: !0 }), i.removeEventListener(Qc, f), uh.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const y = v.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, C = document.activeElement;
      if (b && C) {
        const x = m.currentTarget, [g, S] = WC(x);
        g && S ? !m.shiftKey && C === S ? (m.preventDefault(), n && Un(g, { select: !0 })) : m.shiftKey && C === g && (m.preventDefault(), n && Un(S, { select: !0 })) : C === x && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d.jsx(ne.div, { tabIndex: -1, ...a, ref: h, onKeyDown: y });
});
na.displayName = TC;
function $C(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n) return;
}
function WC(e) {
  const t = Mm(e), n = dh(t, e), r = dh(t.reverse(), e);
  return [n, r];
}
function Mm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function dh(e, t) {
  for (const n of e)
    if (!LC(n, { upTo: t })) return n;
}
function LC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function FC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Un(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && FC(e) && t && e.select();
  }
}
var uh = VC();
function VC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = fh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = fh(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function fh(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function zC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var BC = "Portal", $r = v.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = v.useState(!1);
  lt(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? U1.createPortal(/* @__PURE__ */ d.jsx(ne.div, { ...r, ref: t }), a) : null;
});
$r.displayName = BC;
var Jc = 0;
function Zi() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? hh()), document.body.insertAdjacentElement("beforeend", e[1] ?? hh()), Jc++, () => {
      Jc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Jc--;
    };
  }, []);
}
function hh() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var gn = function() {
  return gn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, gn.apply(this, arguments);
};
function Nm(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function HC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ri = "right-scroll-bar-position", oi = "width-before-scroll-bar", GC = "with-scroll-bars-hidden", YC = "--removed-body-scroll-bar-size";
function el(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function KC(e, t) {
  var n = tt(function() {
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
var UC = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ph = /* @__PURE__ */ new WeakMap();
function qC(e, t) {
  var n = KC(null, function(r) {
    return e.forEach(function(o) {
      return el(o, r);
    });
  });
  return UC(function() {
    var r = ph.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || el(i, null);
      }), s.forEach(function(i) {
        o.has(i) || el(i, a);
      });
    }
    ph.set(n, e);
  }, [e]), n;
}
function XC(e) {
  return e;
}
function ZC(e, t) {
  t === void 0 && (t = XC);
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
function QC(e) {
  e === void 0 && (e = {});
  var t = ZC(null);
  return t.options = gn({ async: !0, ssr: !1 }, e), t;
}
var Pm = function(e) {
  var t = e.sideCar, n = Nm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, gn({}, n));
};
Pm.isSideCarExport = !0;
function JC(e, t) {
  return e.useMedium(t), Pm;
}
var Am = QC(), tl = function() {
}, Qi = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: tl,
    onWheelCapture: tl,
    onTouchMoveCapture: tl
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, m = e.inert, b = e.allowPinchZoom, C = e.as, x = C === void 0 ? "div" : C, g = e.gapMode, S = Nm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, k = qC([n, t]), E = gn(gn({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    f && v.createElement(w, { sideCar: Am, removeScrollBar: l, shards: u, noRelative: p, noIsolation: y, inert: m, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: g }),
    a ? v.cloneElement(v.Children.only(i), gn(gn({}, E), { ref: k })) : v.createElement(x, gn({}, E, { className: c, ref: k }), i)
  );
});
Qi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qi.classNames = {
  fullWidth: oi,
  zeroRight: ri
};
var eS = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = eS();
  return t && e.setAttribute("nonce", t), e;
}
function nS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var oS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = tS()) && (nS(t, n), rS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, sS = function() {
  var e = oS();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Rm = function() {
  var e = sS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, aS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nl = function(e) {
  return parseInt(e || "", 10) || 0;
}, iS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [nl(n), nl(r), nl(o)];
}, cS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return aS;
  var t = iS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, lS = Rm(), mo = "data-scroll-locked", dS = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(GC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(mo, `] {
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
  
  .`).concat(ri, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(oi, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ri, " .").concat(ri, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(oi, " .").concat(oi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(mo, `] {
    `).concat(YC, ": ").concat(i, `px;
  }
`);
}, mh = function() {
  var e = parseInt(document.body.getAttribute(mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, uS = function() {
  v.useEffect(function() {
    return document.body.setAttribute(mo, (mh() + 1).toString()), function() {
      var e = mh() - 1;
      e <= 0 ? document.body.removeAttribute(mo) : document.body.setAttribute(mo, e.toString());
    };
  }, []);
}, fS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  uS();
  var s = v.useMemo(function() {
    return cS(o);
  }, [o]);
  return v.createElement(lS, { styles: dS(s, !t, o, n ? "" : "!important") });
}, Wl = !1;
if (typeof window < "u")
  try {
    var Ra = Object.defineProperty({}, "passive", {
      get: function() {
        return Wl = !0, !0;
      }
    });
    window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    Wl = !1;
  }
var Gr = Wl ? { passive: !1 } : !1, hS = function(e) {
  return e.tagName === "TEXTAREA";
}, Om = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !hS(e) && n[t] === "visible")
  );
}, pS = function(e) {
  return Om(e, "overflowY");
}, mS = function(e) {
  return Om(e, "overflowX");
}, vh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Dm(e, r);
    if (o) {
      var s = Im(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, vS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, gS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Dm = function(e, t) {
  return e === "v" ? pS(t) : mS(t);
}, Im = function(e, t) {
  return e === "v" ? vS(t) : gS(t);
}, yS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, bS = function(e, t, n, r, o) {
  var s = yS(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, u = 0, h = 0;
  do {
    if (!i)
      break;
    var p = Im(e, i), y = p[0], m = p[1], b = p[2], C = m - b - s * y;
    (y || C) && Dm(e, i) && (u += C, h += y);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, Oa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, gh = function(e) {
  return [e.deltaX, e.deltaY];
}, yh = function(e) {
  return e && "current" in e ? e.current : e;
}, xS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, CS = 0, Yr = [];
function SS(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(CS++)[0], s = v.useState(Rm)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = HC([e.lockRef.current], (e.shards || []).map(yh), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = v.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var C = Oa(m), x = n.current, g = "deltaX" in m ? m.deltaX : x[0] - C[0], S = "deltaY" in m ? m.deltaY : x[1] - C[1], w, k = m.target, E = Math.abs(g) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && E === "h" && k.type === "range")
      return !1;
    var M = vh(E, k);
    if (!M)
      return !0;
    if (M ? w = E : (w = E === "v" ? "h" : "v", M = vh(E, k)), !M)
      return !1;
    if (!r.current && "changedTouches" in m && (g || S) && (r.current = w), !w)
      return !0;
    var P = r.current || w;
    return bS(P, b, m, P === "h" ? g : S);
  }, []), c = v.useCallback(function(m) {
    var b = m;
    if (!(!Yr.length || Yr[Yr.length - 1] !== s)) {
      var C = "deltaY" in b ? gh(b) : Oa(b), x = t.current.filter(function(w) {
        return w.name === b.type && (w.target === b.target || b.target === w.shadowParent) && xS(w.delta, C);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var g = (a.current.shards || []).map(yh).filter(Boolean).filter(function(w) {
          return w.contains(b.target);
        }), S = g.length > 0 ? i(b, g[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = v.useCallback(function(m, b, C, x) {
    var g = { name: m, delta: b, target: C, should: x, shadowParent: _S(C) };
    t.current.push(g), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== g;
      });
    }, 1);
  }, []), f = v.useCallback(function(m) {
    n.current = Oa(m), r.current = void 0;
  }, []), u = v.useCallback(function(m) {
    l(m.type, gh(m), m.target, i(m, e.lockRef.current));
  }, []), h = v.useCallback(function(m) {
    l(m.type, Oa(m), m.target, i(m, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return Yr.push(s), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Gr), document.addEventListener("touchmove", c, Gr), document.addEventListener("touchstart", f, Gr), function() {
      Yr = Yr.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", c, Gr), document.removeEventListener("touchmove", c, Gr), document.removeEventListener("touchstart", f, Gr);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    y ? v.createElement(s, { styles: wS(o) }) : null,
    p ? v.createElement(fS, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function _S(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const kS = JC(Am, SS);
var ra = v.forwardRef(function(e, t) {
  return v.createElement(Qi, gn({}, e, { ref: t, sideCar: kS }));
});
ra.classNames = Qi.classNames;
var ES = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {}, rl = 0, jm = function(e) {
  return e && (e.host || jm(e.parentNode));
}, MS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = jm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, NS = function(e, t, n, r) {
  var o = MS(t, Array.isArray(e) ? e : [e]);
  Ia[n] || (Ia[n] = /* @__PURE__ */ new WeakMap());
  var s = Ia[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(u) {
    !u || i.has(u) || (i.add(u), l(u.parentNode));
  };
  o.forEach(l);
  var f = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), y = p !== null && p !== "false", m = (Kr.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          Kr.set(h, m), s.set(h, b), a.push(h), m === 1 && y && Da.set(h, !0), b === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return f(t), i.clear(), rl++, function() {
    a.forEach(function(u) {
      var h = Kr.get(u) - 1, p = s.get(u) - 1;
      Kr.set(u, h), s.set(u, p), h || (Da.has(u) || u.removeAttribute(r), Da.delete(u)), p || u.removeAttribute(n);
    }), rl--, rl || (Kr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {});
  };
}, Ji = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ES(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), NS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ec = "Dialog", [Tm] = dt(ec), [PS, dn] = Tm(ec), $m = (e) => {
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
    caller: ec
  });
  return /* @__PURE__ */ d.jsx(
    PS,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Ze(),
      titleId: Ze(),
      descriptionId: Ze(),
      open: l,
      onOpenChange: f,
      onOpenToggle: v.useCallback(() => f((u) => !u), [f]),
      modal: a,
      children: n
    }
  );
};
$m.displayName = ec;
var Wm = "DialogTrigger", Lm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Wm, n), s = be(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": au(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Lm.displayName = Wm;
var ou = "DialogPortal", [AS, Fm] = Tm(ou, {
  forceMount: void 0
}), Vm = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = dn(ou, t);
  return /* @__PURE__ */ d.jsx(AS, { scope: t, forceMount: n, children: v.Children.map(r, (a) => /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: a }) })) });
};
Vm.displayName = ou;
var bi = "DialogOverlay", zm = v.forwardRef(
  (e, t) => {
    const n = Fm(bi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(bi, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx(OS, { ...o, ref: t }) }) : null;
  }
);
zm.displayName = bi;
var RS = /* @__PURE__ */ or("DialogOverlay.RemoveScroll"), OS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(bi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(ra, { as: RS, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        ne.div,
        {
          "data-state": au(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Nr = "DialogContent", Bm = v.forwardRef(
  (e, t) => {
    const n = Fm(Nr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(Nr, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(DS, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(IS, { ...o, ref: t }) });
  }
);
Bm.displayName = Nr;
var DS = v.forwardRef(
  (e, t) => {
    const n = dn(Nr, e.__scopeDialog), r = v.useRef(null), o = be(t, n.contentRef, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return Ji(s);
    }, []), /* @__PURE__ */ d.jsx(
      Hm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: X(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: X(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), IS = v.forwardRef(
  (e, t) => {
    const n = dn(Nr, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Hm,
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
), Hm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = dn(Nr, n), c = v.useRef(null), l = be(t, c);
    return Zi(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        na,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d.jsx(
            Tr,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": au(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(TS, { titleId: i.titleId }),
        /* @__PURE__ */ d.jsx(WS, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), su = "DialogTitle", Gm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(su, n);
    return /* @__PURE__ */ d.jsx(ne.h2, { id: o.titleId, ...r, ref: t });
  }
);
Gm.displayName = su;
var Ym = "DialogDescription", jS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Ym, n);
    return /* @__PURE__ */ d.jsx(ne.p, { id: o.descriptionId, ...r, ref: t });
  }
);
jS.displayName = Ym;
var Km = "DialogClose", Um = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Km, n);
    return /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Um.displayName = Km;
function au(e) {
  return e ? "open" : "closed";
}
var qm = "DialogTitleWarning", [ZT, Xm] = Z2(qm, {
  contentName: Nr,
  titleName: su,
  docsSlug: "dialog"
}), TS = ({ titleId: e }) => {
  const t = Xm(qm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, $S = "DialogDescriptionWarning", WS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Xm($S).contentName}}.`;
  return v.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, tc = $m, LS = Lm, nc = Vm, rc = zm, oc = Bm, iu = Gm, Zm = Um;
function sc(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ac(e) {
  const [t, n] = v.useState(void 0);
  return lt(() => {
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
var ic = "Checkbox", [FS] = dt(ic), [VS, cu] = FS(ic);
function zS(e) {
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
    internal_do_not_use_render: u
  } = e, [h, p] = kt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ic
  }), [y, m] = v.useState(null), [b, C] = v.useState(null), x = v.useRef(!1), g = y ? !!a || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: s,
    setChecked: p,
    control: y,
    setControl: m,
    name: i,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: x,
    required: l,
    defaultChecked: rr(o) ? !1 : o,
    isFormControl: g,
    bubbleInput: b,
    setBubbleInput: C
  };
  return /* @__PURE__ */ d.jsx(
    VS,
    {
      scope: t,
      ...S,
      children: BS(u) ? u(S) : r
    }
  );
}
var Qm = "CheckboxTrigger", Jm = v.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: c,
      required: l,
      setControl: f,
      setChecked: u,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: p,
      bubbleInput: y
    } = cu(Qm, e), m = be(o, f), b = v.useRef(c);
    return v.useEffect(() => {
      const C = s == null ? void 0 : s.form;
      if (C) {
        const x = () => u(b.current);
        return C.addEventListener("reset", x), () => C.removeEventListener("reset", x);
      }
    }, [s, u]), /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": rr(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": sv(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: m,
        onKeyDown: X(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: X(n, (C) => {
          u((x) => rr(x) ? !0 : !x), y && p && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
        })
      }
    );
  }
);
Jm.displayName = Qm;
var ev = v.forwardRef(
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
      ...u
    } = e;
    return /* @__PURE__ */ d.jsx(
      zS,
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
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Jm,
            {
              ...u,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ d.jsx(
            ov,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ev.displayName = ic;
var tv = "CheckboxIndicator", nv = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = cu(tv, n);
    return /* @__PURE__ */ d.jsx(
      mt,
      {
        present: r || rr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          ne.span,
          {
            "data-state": sv(s.checked),
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
nv.displayName = tv;
var rv = "CheckboxBubbleInput", ov = v.forwardRef(
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
      form: u,
      bubbleInput: h,
      setBubbleInput: p
    } = cu(rv, e), y = be(n, p), m = sc(s), b = ac(r);
    v.useEffect(() => {
      const x = h;
      if (!x) return;
      const g = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(
        g,
        "checked"
      ).set, k = !o.current;
      if (m !== s && w) {
        const E = new Event("click", { bubbles: k });
        x.indeterminate = rr(s), w.call(x, rr(s) ? !1 : s), x.dispatchEvent(E);
      }
    }, [h, m, s, o]);
    const C = v.useRef(rr(s) ? !1 : s);
    return /* @__PURE__ */ d.jsx(
      ne.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? C.current,
        required: i,
        disabled: c,
        name: l,
        value: f,
        form: u,
        ...t,
        tabIndex: -1,
        ref: y,
        style: {
          ...t.style,
          ...b,
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
ov.displayName = rv;
function BS(e) {
  return typeof e == "function";
}
function rr(e) {
  return e === "indeterminate";
}
function sv(e) {
  return rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const HS = ["top", "right", "bottom", "left"], sr = Math.min, Wt = Math.max, xi = Math.round, ja = Math.floor, Cn = (e) => ({
  x: e,
  y: e
}), GS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, YS = {
  start: "end",
  end: "start"
};
function Ll(e, t, n) {
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
function lu(e) {
  return e === "x" ? "y" : "x";
}
function du(e) {
  return e === "y" ? "height" : "width";
}
const KS = /* @__PURE__ */ new Set(["top", "bottom"]);
function xn(e) {
  return KS.has(Bn(e)) ? "y" : "x";
}
function uu(e) {
  return lu(xn(e));
}
function US(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = uu(e), s = du(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = wi(a)), [a, wi(a)];
}
function qS(e) {
  const t = wi(e);
  return [Fl(e), t, Fl(t)];
}
function Fl(e) {
  return e.replace(/start|end/g, (t) => YS[t]);
}
const bh = ["left", "right"], xh = ["right", "left"], XS = ["top", "bottom"], ZS = ["bottom", "top"];
function QS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? xh : bh : t ? bh : xh;
    case "left":
    case "right":
      return t ? XS : ZS;
    default:
      return [];
  }
}
function JS(e, t, n, r) {
  const o = Do(e);
  let s = QS(Bn(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Fl)))), s;
}
function wi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => GS[t]);
}
function e_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function av(e) {
  return typeof e != "number" ? e_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ci(e) {
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
function wh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = xn(t), a = uu(t), i = du(a), c = Bn(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
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
const t_ = async (e, t, n) => {
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
    y: u
  } = wh(l, r, c), h = r, p = {}, y = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: b,
      fn: C
    } = i[m], {
      x,
      y: g,
      data: S,
      reset: w
    } = await C({
      x: f,
      y: u,
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
    f = x ?? f, u = g ?? u, p = {
      ...p,
      [b]: {
        ...p[b],
        ...S
      }
    }, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: f,
      y: u
    } = wh(l, h, c)), m = -1);
  }
  return {
    x: f,
    y: u,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function js(e, t) {
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
    elementContext: u = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = zn(t, e), y = av(p), b = i[h ? u === "floating" ? "reference" : "floating" : u], C = Ci(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), x = u === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, g = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(g)) ? await (s.getScale == null ? void 0 : s.getScale(g)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ci(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: g,
    strategy: c
  }) : x);
  return {
    top: (C.top - w.top + y.top) / S.y,
    bottom: (w.bottom - C.bottom + y.bottom) / S.y,
    left: (C.left - w.left + y.left) / S.x,
    right: (w.right - C.right + y.right) / S.x
  };
}
const n_ = (e) => ({
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
    const u = av(f), h = {
      x: n,
      y: r
    }, p = uu(o), y = du(p), m = await a.getDimensions(l), b = p === "y", C = b ? "top" : "left", x = b ? "bottom" : "right", g = b ? "clientHeight" : "clientWidth", S = s.reference[y] + s.reference[p] - h[p] - s.floating[y], w = h[p] - s.reference[p], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let E = k ? k[g] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(k))) && (E = i.floating[g] || s.floating[y]);
    const M = S / 2 - w / 2, P = E / 2 - m[y] / 2 - 1, O = sr(u[C], P), I = sr(u[x], P), D = O, L = E - m[y] - I, j = E / 2 - m[y] / 2 + M, B = Ll(D, j, L), V = !c.arrow && Do(o) != null && j !== B && s.reference[y] / 2 - (j < D ? O : I) - m[y] / 2 < 0, Y = V ? j < D ? j - D : j - L : 0;
    return {
      [p]: h[p] + Y,
      data: {
        [p]: B,
        centerOffset: j - B - Y,
        ...V && {
          alignmentOffset: Y
        }
      },
      reset: V
    };
  }
}), r_ = function(e) {
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
        crossAxis: u = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: m = !0,
        ...b
      } = zn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Bn(o), x = xn(i), g = Bn(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = h || (g || !m ? [wi(i)] : qS(i)), k = y !== "none";
      !h && k && w.push(...JS(i, m, y, S));
      const E = [i, ...w], M = await js(t, b), P = [];
      let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(M[C]), u) {
        const j = US(o, a, S);
        P.push(M[j[0]], M[j[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: P
      }], !P.every((j) => j <= 0)) {
        var I, D;
        const j = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, B = E[j];
        if (B && (!(u === "alignment" ? x !== xn(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((T) => xn(T.placement) === x ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: O
            },
            reset: {
              placement: B
            }
          };
        let V = (D = O.filter((Y) => Y.overflows[0] <= 0).sort((Y, T) => Y.overflows[1] - T.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var L;
              const Y = (L = O.filter((T) => {
                if (k) {
                  const W = xn(T.placement);
                  return W === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((W) => W > 0).reduce((W, oe) => W + oe, 0)]).sort((T, W) => T[1] - W[1])[0]) == null ? void 0 : L[0];
              Y && (V = Y);
              break;
            }
            case "initialPlacement":
              V = i;
              break;
          }
        if (o !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
function Ch(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Sh(e) {
  return HS.some((t) => e[t] >= 0);
}
const o_ = function(e) {
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
          const s = await js(t, {
            ...o,
            elementContext: "reference"
          }), a = Ch(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Sh(a)
            }
          };
        }
        case "escaped": {
          const s = await js(t, {
            ...o,
            altBoundary: !0
          }), a = Ch(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Sh(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, iv = /* @__PURE__ */ new Set(["left", "top"]);
async function s_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Bn(n), i = Do(n), c = xn(n) === "y", l = iv.has(a) ? -1 : 1, f = s && c ? -1 : 1, u = zn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: y
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof y == "number" && (p = i === "end" ? y * -1 : y), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const a_ = function(e) {
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
      } = t, c = await s_(t, e);
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
}, i_ = function(e) {
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
          fn: (b) => {
            let {
              x: C,
              y: x
            } = b;
            return {
              x: C,
              y: x
            };
          }
        },
        ...c
      } = zn(e, t), l = {
        x: n,
        y: r
      }, f = await js(t, c), u = xn(Bn(o)), h = lu(u);
      let p = l[h], y = l[u];
      if (s) {
        const b = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", x = p + f[b], g = p - f[C];
        p = Ll(x, p, g);
      }
      if (a) {
        const b = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", x = y + f[b], g = y - f[C];
        y = Ll(x, y, g);
      }
      const m = i.fn({
        ...t,
        [h]: p,
        [u]: y
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: s,
            [u]: a
          }
        }
      };
    }
  };
}, c_ = function(e) {
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
      }, u = xn(o), h = lu(u);
      let p = f[h], y = f[u];
      const m = zn(i, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + b.mainAxis, w = s.reference[h] + s.reference[g] - b.mainAxis;
        p < S ? p = S : p > w && (p = w);
      }
      if (l) {
        var C, x;
        const g = h === "y" ? "width" : "height", S = iv.has(Bn(o)), w = s.reference[u] - s.floating[g] + (S && ((C = a.offset) == null ? void 0 : C[u]) || 0) + (S ? 0 : b.crossAxis), k = s.reference[u] + s.reference[g] + (S ? 0 : ((x = a.offset) == null ? void 0 : x[u]) || 0) - (S ? b.crossAxis : 0);
        y < w ? y = w : y > k && (y = k);
      }
      return {
        [h]: p,
        [u]: y
      };
    }
  };
}, l_ = function(e) {
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
      } = zn(e, t), f = await js(t, l), u = Bn(o), h = Do(o), p = xn(o) === "y", {
        width: y,
        height: m
      } = s.floating;
      let b, C;
      u === "top" || u === "bottom" ? (b = u, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = u, b = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, g = y - f.left - f.right, S = sr(m - f[b], x), w = sr(y - f[C], g), k = !t.middlewareData.shift;
      let E = S, M = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = g), (r = t.middlewareData.shift) != null && r.enabled.y && (E = x), k && !h) {
        const O = Wt(f.left, 0), I = Wt(f.right, 0), D = Wt(f.top, 0), L = Wt(f.bottom, 0);
        p ? M = y - 2 * (O !== 0 || I !== 0 ? O + I : Wt(f.left, f.right)) : E = m - 2 * (D !== 0 || L !== 0 ? D + L : Wt(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: M,
        availableHeight: E
      });
      const P = await a.getDimensions(i.floating);
      return y !== P.width || m !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function cc() {
  return typeof window < "u";
}
function Io(e) {
  return cv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nn(e) {
  var t;
  return (t = (cv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function cv(e) {
  return cc() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function an(e) {
  return cc() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function _n(e) {
  return cc() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function _h(e) {
  return !cc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
}
const d_ = /* @__PURE__ */ new Set(["inline", "contents"]);
function oa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d_.has(o);
}
const u_ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function f_(e) {
  return u_.has(Io(e));
}
const h_ = [":popover-open", ":modal"];
function lc(e) {
  return h_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const p_ = ["transform", "translate", "scale", "rotate", "perspective"], m_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], v_ = ["paint", "layout", "strict", "content"];
function fu(e) {
  const t = hu(), n = an(e) ? cn(e) : e;
  return p_.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || m_.some((r) => (n.willChange || "").includes(r)) || v_.some((r) => (n.contain || "").includes(r));
}
function g_(e) {
  let t = ar(e);
  for (; _n(t) && !wo(t); ) {
    if (fu(t))
      return t;
    if (lc(t))
      return null;
    t = ar(t);
  }
  return null;
}
function hu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const y_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function wo(e) {
  return y_.has(Io(e));
}
function cn(e) {
  return Ft(e).getComputedStyle(e);
}
function dc(e) {
  return an(e) ? {
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
    _h(e) && e.host || // Fallback.
    Nn(e)
  );
  return _h(t) ? t.host : t;
}
function lv(e) {
  const t = ar(e);
  return wo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && oa(t) ? t : lv(t);
}
function Ts(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = lv(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ft(o);
  if (s) {
    const i = Vl(a);
    return t.concat(a, a.visualViewport || [], oa(o) ? o : [], i && n ? Ts(i) : []);
  }
  return t.concat(o, Ts(o, [], n));
}
function Vl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function dv(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = xi(n) !== s || xi(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function pu(e) {
  return an(e) ? e : e.contextElement;
}
function vo(e) {
  const t = pu(e);
  if (!_n(t))
    return Cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = dv(t);
  let a = (s ? xi(n.width) : n.width) / r, i = (s ? xi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const b_ = /* @__PURE__ */ Cn(0);
function uv(e) {
  const t = Ft(e);
  return !hu() || !t.visualViewport ? b_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t;
}
function Pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = pu(e);
  let a = Cn(1);
  t && (r ? an(r) && (a = vo(r)) : a = vo(e));
  const i = x_(s, n, r) ? uv(s) : Cn(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (s) {
    const h = Ft(s), p = r && an(r) ? Ft(r) : r;
    let y = h, m = Vl(y);
    for (; m && r && p !== y; ) {
      const b = vo(m), C = m.getBoundingClientRect(), x = cn(m), g = C.left + (m.clientLeft + parseFloat(x.paddingLeft)) * b.x, S = C.top + (m.clientTop + parseFloat(x.paddingTop)) * b.y;
      c *= b.x, l *= b.y, f *= b.x, u *= b.y, c += g, l += S, y = Ft(m), m = Vl(y);
    }
  }
  return Ci({
    width: f,
    height: u,
    x: c,
    y: l
  });
}
function uc(e, t) {
  const n = dc(e).scrollLeft;
  return t ? t.left + n : Pr(Nn(e)).left + n;
}
function fv(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - uc(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function w_(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Nn(r), i = t ? lc(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Cn(1);
  const f = Cn(0), u = _n(r);
  if ((u || !u && !s) && ((Io(r) !== "body" || oa(a)) && (c = dc(r)), _n(r))) {
    const p = Pr(r);
    l = vo(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !u && !s ? fv(a, c) : Cn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function C_(e) {
  return Array.from(e.getClientRects());
}
function S_(e) {
  const t = Nn(e), n = dc(e), r = e.ownerDocument.body, o = Wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + uc(e);
  const i = -n.scrollTop;
  return cn(r).direction === "rtl" && (a += Wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const kh = 25;
function __(e, t) {
  const n = Ft(e), r = Nn(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = hu();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = uc(r);
  if (l <= 0) {
    const f = r.ownerDocument, u = f.body, h = getComputedStyle(u), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - u.clientWidth - p);
    y <= kh && (s -= y);
  } else l <= kh && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const k_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function E_(e, t) {
  const n = Pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = _n(e) ? vo(e) : Cn(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Eh(e, t, n) {
  let r;
  if (t === "viewport")
    r = __(e, n);
  else if (t === "document")
    r = S_(Nn(e));
  else if (an(t))
    r = E_(t, n);
  else {
    const o = uv(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ci(r);
}
function hv(e, t) {
  const n = ar(e);
  return n === t || !an(n) || wo(n) ? !1 : cn(n).position === "fixed" || hv(n, t);
}
function M_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ts(e, [], !1).filter((i) => an(i) && Io(i) !== "body"), o = null;
  const s = cn(e).position === "fixed";
  let a = s ? ar(e) : e;
  for (; an(a) && !wo(a); ) {
    const i = cn(a), c = fu(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && k_.has(o.position) || oa(a) && !c && hv(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = ar(a);
  }
  return t.set(e, r), r;
}
function N_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? lc(t) ? [] : M_(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((l, f) => {
    const u = Eh(t, f, o);
    return l.top = Wt(u.top, l.top), l.right = sr(u.right, l.right), l.bottom = sr(u.bottom, l.bottom), l.left = Wt(u.left, l.left), l;
  }, Eh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function P_(e) {
  const {
    width: t,
    height: n
  } = dv(e);
  return {
    width: t,
    height: n
  };
}
function A_(e, t, n) {
  const r = _n(t), o = Nn(t), s = n === "fixed", a = Pr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Cn(0);
  function l() {
    c.x = uc(o);
  }
  if (r || !r && !s)
    if ((Io(t) !== "body" || oa(o)) && (i = dc(t)), r) {
      const p = Pr(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const f = o && !r && !s ? fv(o, i) : Cn(0), u = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function ol(e) {
  return cn(e).position === "static";
}
function Mh(e, t) {
  if (!_n(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Nn(e) === n && (n = n.ownerDocument.body), n;
}
function pv(e, t) {
  const n = Ft(e);
  if (lc(e))
    return n;
  if (!_n(e)) {
    let o = ar(e);
    for (; o && !wo(o); ) {
      if (an(o) && !ol(o))
        return o;
      o = ar(o);
    }
    return n;
  }
  let r = Mh(e, t);
  for (; r && f_(r) && ol(r); )
    r = Mh(r, t);
  return r && wo(r) && ol(r) && !fu(r) ? n : r || g_(e) || n;
}
const R_ = async function(e) {
  const t = this.getOffsetParent || pv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: A_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function O_(e) {
  return cn(e).direction === "rtl";
}
const D_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: w_,
  getDocumentElement: Nn,
  getClippingRect: N_,
  getOffsetParent: pv,
  getElementRects: R_,
  getClientRects: C_,
  getDimensions: P_,
  getScale: vo,
  isElement: an,
  isRTL: O_
};
function mv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function I_(e, t) {
  let n = null, r;
  const o = Nn(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: u,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const y = ja(u), m = ja(o.clientWidth - (f + h)), b = ja(o.clientHeight - (u + p)), C = ja(f), g = {
      rootMargin: -y + "px " + -m + "px " + -b + "px " + -C + "px",
      threshold: Wt(0, sr(1, c)) || 1
    };
    let S = !0;
    function w(k) {
      const E = k[0].intersectionRatio;
      if (E !== c) {
        if (!S)
          return a();
        E ? a(!1, E) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !mv(l, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...g,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, g);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function j_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = pu(e), f = o || s ? [...l ? Ts(l) : [], ...Ts(t)] : [];
  f.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const u = l && i ? I_(l, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((C) => {
    let [x] = C;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var g;
      (g = p) == null || g.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let y, m = c ? Pr(e) : null;
  c && b();
  function b() {
    const C = Pr(e);
    m && !mv(m, C) && n(), m = C, y = requestAnimationFrame(b);
  }
  return n(), () => {
    var C;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null || u(), (C = p) == null || C.disconnect(), p = null, c && cancelAnimationFrame(y);
  };
}
const T_ = a_, $_ = i_, W_ = r_, L_ = l_, F_ = o_, Nh = n_, V_ = c_, z_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: D_,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return t_(e, t, {
    ...o,
    platform: s
  });
};
var B_ = typeof document < "u", H_ = function() {
}, si = B_ ? Kd : H_;
function Si(e, t) {
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
        if (!Si(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Si(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function vv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ph(e, t) {
  const n = vv(e);
  return Math.round(t * n) / n;
}
function sl(e) {
  const t = v.useRef(e);
  return si(() => {
    t.current = e;
  }), t;
}
function G_(e) {
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
  } = e, [f, u] = v.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = v.useState(r);
  Si(h, r) || p(r);
  const [y, m] = v.useState(null), [b, C] = v.useState(null), x = v.useCallback((T) => {
    T !== k.current && (k.current = T, m(T));
  }, []), g = v.useCallback((T) => {
    T !== E.current && (E.current = T, C(T));
  }, []), S = s || y, w = a || b, k = v.useRef(null), E = v.useRef(null), M = v.useRef(f), P = c != null, O = sl(c), I = sl(o), D = sl(l), L = v.useCallback(() => {
    if (!k.current || !E.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: h
    };
    I.current && (T.platform = I.current), z_(k.current, E.current, T).then((W) => {
      const oe = {
        ...W,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      j.current && !Si(M.current, oe) && (M.current = oe, Js.flushSync(() => {
        u(oe);
      }));
    });
  }, [h, t, n, I, D]);
  si(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, u((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [l]);
  const j = v.useRef(!1);
  si(() => (j.current = !0, () => {
    j.current = !1;
  }), []), si(() => {
    if (S && (k.current = S), w && (E.current = w), S && w) {
      if (O.current)
        return O.current(S, w, L);
      L();
    }
  }, [S, w, L, O, P]);
  const B = v.useMemo(() => ({
    reference: k,
    floating: E,
    setReference: x,
    setFloating: g
  }), [x, g]), V = v.useMemo(() => ({
    reference: S,
    floating: w
  }), [S, w]), Y = v.useMemo(() => {
    const T = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return T;
    const W = Ph(V.floating, f.x), oe = Ph(V.floating, f.y);
    return i ? {
      ...T,
      transform: "translate(" + W + "px, " + oe + "px)",
      ...vv(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: W,
      top: oe
    };
  }, [n, i, V.floating, f.x, f.y]);
  return v.useMemo(() => ({
    ...f,
    update: L,
    refs: B,
    elements: V,
    floatingStyles: Y
  }), [f, L, B, V, Y]);
}
const Y_ = (e) => {
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
      return r && t(r) ? r.current != null ? Nh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Nh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, K_ = (e, t) => ({
  ...T_(e),
  options: [e, t]
}), U_ = (e, t) => ({
  ...$_(e),
  options: [e, t]
}), q_ = (e, t) => ({
  ...V_(e),
  options: [e, t]
}), X_ = (e, t) => ({
  ...W_(e),
  options: [e, t]
}), Z_ = (e, t) => ({
  ...L_(e),
  options: [e, t]
}), Q_ = (e, t) => ({
  ...F_(e),
  options: [e, t]
}), J_ = (e, t) => ({
  ...Y_(e),
  options: [e, t]
});
var ek = "Arrow", gv = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    ne.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
gv.displayName = ek;
var tk = gv, mu = "Popper", [yv, dr] = dt(mu), [nk, bv] = yv(mu), xv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ d.jsx(nk, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
xv.displayName = mu;
var wv = "PopperAnchor", Cv = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = bv(wv, n), a = v.useRef(null), i = be(t, a), c = v.useRef(null);
    return v.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d.jsx(ne.div, { ...o, ref: i });
  }
);
Cv.displayName = wv;
var vu = "PopperContent", [rk, ok] = yv(vu), Sv = v.forwardRef(
  (e, t) => {
    var $, J, re, de, me, ge;
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
      sticky: u = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: y,
      ...m
    } = e, b = bv(vu, n), [C, x] = v.useState(null), g = be(t, (Se) => x(Se)), [S, w] = v.useState(null), k = ac(S), E = (k == null ? void 0 : k.width) ?? 0, M = (k == null ? void 0 : k.height) ?? 0, P = r + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, I = Array.isArray(l) ? l : [l], D = I.length > 0, L = {
      padding: O,
      boundary: I.filter(ak),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: j, floatingStyles: B, placement: V, isPositioned: Y, middlewareData: T } = G_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...Se) => j_(...Se, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        K_({ mainAxis: o + M, alignmentAxis: a }),
        c && U_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? q_() : void 0,
          ...L
        }),
        c && X_({ ...L }),
        Z_({
          ...L,
          apply: ({ elements: Se, rects: Ie, availableWidth: Te, availableHeight: ut }) => {
            const { width: Xe, height: ot } = Ie.reference, vt = Se.floating.style;
            vt.setProperty("--radix-popper-available-width", `${Te}px`), vt.setProperty("--radix-popper-available-height", `${ut}px`), vt.setProperty("--radix-popper-anchor-width", `${Xe}px`), vt.setProperty("--radix-popper-anchor-height", `${ot}px`);
          }
        }),
        S && J_({ element: S, padding: i }),
        ik({ arrowWidth: E, arrowHeight: M }),
        h && Q_({ strategy: "referenceHidden", ...L })
      ]
    }), [W, oe] = Ev(V), A = Rt(y);
    lt(() => {
      Y && (A == null || A());
    }, [Y, A]);
    const N = ($ = T.arrow) == null ? void 0 : $.x, F = (J = T.arrow) == null ? void 0 : J.y, z = ((re = T.arrow) == null ? void 0 : re.centerOffset) !== 0, [Z, q] = v.useState();
    return lt(() => {
      C && q(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: Y ? B.transform : "translate(0, -200%)",
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
        children: /* @__PURE__ */ d.jsx(
          rk,
          {
            scope: n,
            placedSide: W,
            onArrowChange: w,
            arrowX: N,
            arrowY: F,
            shouldHideArrow: z,
            children: /* @__PURE__ */ d.jsx(
              ne.div,
              {
                "data-side": W,
                "data-align": oe,
                ...m,
                ref: g,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Sv.displayName = vu;
var _v = "PopperArrow", sk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, kv = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = ok(_v, r), a = sk[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
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
        children: /* @__PURE__ */ d.jsx(
          tk,
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
kv.displayName = _v;
function ak(e) {
  return e !== null;
}
var ik = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, C, x;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = Ev(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let y = "", m = "";
    return l === "bottom" ? (y = a ? u : `${h}px`, m = `${-c}px`) : l === "top" ? (y = a ? u : `${h}px`, m = `${r.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, m = a ? u : `${p}px`) : l === "left" && (y = `${r.floating.width + c}px`, m = a ? u : `${p}px`), { data: { x: y, y: m } };
  }
});
function Ev(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fc = xv, sa = Cv, hc = Sv, pc = kv, al = "rovingFocusGroup.onEntryFocus", ck = { bubbles: !1, cancelable: !0 }, aa = "RovingFocusGroup", [zl, Mv, lk] = ta(aa), [dk, jo] = dt(
  aa,
  [lk]
), [uk, fk] = dk(aa), Nv = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(zl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(zl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(hk, { ...e, ref: t }) }) })
);
Nv.displayName = aa;
var hk = v.forwardRef((e, t) => {
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
    ...u
  } = e, h = v.useRef(null), p = be(t, h), y = Oo(s), [m, b] = kt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: aa
  }), [C, x] = v.useState(!1), g = Rt(l), S = Mv(n), w = v.useRef(!1), [k, E] = v.useState(0);
  return v.useEffect(() => {
    const M = h.current;
    if (M)
      return M.addEventListener(al, g), () => M.removeEventListener(al, g);
  }, [g]), /* @__PURE__ */ d.jsx(
    uk,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: m,
      onItemFocus: v.useCallback(
        (M) => b(M),
        [b]
      ),
      onItemShiftTab: v.useCallback(() => x(!0), []),
      onFocusableItemAdd: v.useCallback(
        () => E((M) => M + 1),
        []
      ),
      onFocusableItemRemove: v.useCallback(
        () => E((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        ne.div,
        {
          tabIndex: C || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: X(e.onFocus, (M) => {
            const P = !w.current;
            if (M.target === M.currentTarget && P && !C) {
              const O = new CustomEvent(al, ck);
              if (M.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const I = S().filter((V) => V.focusable), D = I.find((V) => V.active), L = I.find((V) => V.id === m), B = [D, L, ...I].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Rv(B, f);
              }
            }
            w.current = !1;
          }),
          onBlur: X(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Pv = "RovingFocusGroupItem", Av = v.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Ze(), l = s || c, f = fk(Pv, n), u = f.currentTabStopId === l, h = Mv(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: m } = f;
    return v.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ d.jsx(
      zl.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          ne.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: X(e.onMouseDown, (b) => {
              r ? f.onItemFocus(l) : b.preventDefault();
            }),
            onFocus: X(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: X(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const C = vk(b, f.orientation, f.dir);
              if (C !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let g = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (C === "last") g.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && g.reverse();
                  const S = g.indexOf(b.currentTarget);
                  g = f.loop ? gk(g, S + 1) : g.slice(S + 1);
                }
                setTimeout(() => Rv(g));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
Av.displayName = Pv;
var pk = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function mk(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function vk(e, t, n) {
  const r = mk(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return pk[r];
}
function Rv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function gk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var gu = Nv, yu = Av, Bl = ["Enter", " "], yk = ["ArrowDown", "PageUp", "Home"], Ov = ["ArrowUp", "PageDown", "End"], bk = [...yk, ...Ov], xk = {
  ltr: [...Bl, "ArrowRight"],
  rtl: [...Bl, "ArrowLeft"]
}, wk = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ia = "Menu", [$s, Ck, Sk] = ta(ia), [Wr, Dv] = dt(ia, [
  Sk,
  dr,
  jo
]), mc = dr(), Iv = jo(), [_k, Lr] = Wr(ia), [kk, ca] = Wr(ia), jv = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = mc(t), [c, l] = v.useState(null), f = v.useRef(!1), u = Rt(s), h = Oo(o);
  return v.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(fc, { ...i, children: /* @__PURE__ */ d.jsx(
    _k,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ d.jsx(
        kk,
        {
          scope: t,
          onClose: v.useCallback(() => u(!1), [u]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
jv.displayName = ia;
var Ek = "MenuAnchor", bu = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = mc(n);
    return /* @__PURE__ */ d.jsx(sa, { ...o, ...r, ref: t });
  }
);
bu.displayName = Ek;
var xu = "MenuPortal", [Mk, Tv] = Wr(xu, {
  forceMount: void 0
}), $v = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Lr(xu, t);
  return /* @__PURE__ */ d.jsx(Mk, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
$v.displayName = xu;
var Yt = "MenuContent", [Nk, wu] = Wr(Yt), Wv = v.forwardRef(
  (e, t) => {
    const n = Tv(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(Yt, e.__scopeMenu), a = ca(Yt, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ d.jsx(Pk, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Ak, { ...o, ref: t }) }) }) });
  }
), Pk = v.forwardRef(
  (e, t) => {
    const n = Lr(Yt, e.__scopeMenu), r = v.useRef(null), o = be(t, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return Ji(s);
    }, []), /* @__PURE__ */ d.jsx(
      Cu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: X(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Ak = v.forwardRef((e, t) => {
  const n = Lr(Yt, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    Cu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Rk = /* @__PURE__ */ or("MenuContent.ScrollLock"), Cu = v.forwardRef(
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
      onFocusOutside: u,
      onInteractOutside: h,
      onDismiss: p,
      disableOutsideScroll: y,
      ...m
    } = e, b = Lr(Yt, n), C = ca(Yt, n), x = mc(n), g = Iv(n), S = Ck(n), [w, k] = v.useState(null), E = v.useRef(null), M = be(t, E, b.onContentChange), P = v.useRef(0), O = v.useRef(""), I = v.useRef(0), D = v.useRef(null), L = v.useRef("right"), j = v.useRef(0), B = y ? ra : v.Fragment, V = y ? { as: Rk, allowPinchZoom: !0 } : void 0, Y = (W) => {
      var $, J;
      const oe = O.current + W, A = S().filter((re) => !re.disabled), N = document.activeElement, F = ($ = A.find((re) => re.ref.current === N)) == null ? void 0 : $.textValue, z = A.map((re) => re.textValue), Z = Bk(z, oe, F), q = (J = A.find((re) => re.textValue === Z)) == null ? void 0 : J.ref.current;
      (function re(de) {
        O.current = de, window.clearTimeout(P.current), de !== "" && (P.current = window.setTimeout(() => re(""), 1e3));
      })(oe), q && setTimeout(() => q.focus());
    };
    v.useEffect(() => () => window.clearTimeout(P.current), []), Zi();
    const T = v.useCallback((W) => {
      var A, N;
      return L.current === ((A = D.current) == null ? void 0 : A.side) && Gk(W, (N = D.current) == null ? void 0 : N.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      Nk,
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
            T(W) || ((oe = E.current) == null || oe.focus(), k(null));
          },
          [T]
        ),
        onTriggerLeave: v.useCallback(
          (W) => {
            T(W) && W.preventDefault();
          },
          [T]
        ),
        pointerGraceTimerRef: I,
        onPointerGraceIntentChange: v.useCallback((W) => {
          D.current = W;
        }, []),
        children: /* @__PURE__ */ d.jsx(B, { ...V, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(s, (W) => {
              var oe;
              W.preventDefault(), (oe = E.current) == null || oe.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ d.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: l,
                onPointerDownOutside: f,
                onFocusOutside: u,
                onInteractOutside: h,
                onDismiss: p,
                children: /* @__PURE__ */ d.jsx(
                  gu,
                  {
                    asChild: !0,
                    ...g,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: X(c, (W) => {
                      C.isUsingKeyboardRef.current || W.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      hc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": eg(b.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...x,
                        ...m,
                        ref: M,
                        style: { outline: "none", ...m.style },
                        onKeyDown: X(m.onKeyDown, (W) => {
                          const A = W.target.closest("[data-radix-menu-content]") === W.currentTarget, N = W.ctrlKey || W.altKey || W.metaKey, F = W.key.length === 1;
                          A && (W.key === "Tab" && W.preventDefault(), !N && F && Y(W.key));
                          const z = E.current;
                          if (W.target !== z || !bk.includes(W.key)) return;
                          W.preventDefault();
                          const q = S().filter(($) => !$.disabled).map(($) => $.ref.current);
                          Ov.includes(W.key) && q.reverse(), Vk(q);
                        }),
                        onBlur: X(e.onBlur, (W) => {
                          W.currentTarget.contains(W.target) || (window.clearTimeout(P.current), O.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          Ws((W) => {
                            const oe = W.target, A = j.current !== W.clientX;
                            if (W.currentTarget.contains(oe) && A) {
                              const N = W.clientX > j.current ? "right" : "left";
                              L.current = N, j.current = W.clientX;
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
Wv.displayName = Yt;
var Ok = "MenuGroup", Su = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ne.div, { role: "group", ...r, ref: t });
  }
);
Su.displayName = Ok;
var Dk = "MenuLabel", Lv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ne.div, { ...r, ref: t });
  }
);
Lv.displayName = Dk;
var _i = "MenuItem", Ah = "menu.itemSelect", vc = v.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = v.useRef(null), a = ca(_i, e.__scopeMenu), i = wu(_i, e.__scopeMenu), c = be(t, s), l = v.useRef(!1), f = () => {
      const u = s.current;
      if (!n && u) {
        const h = new CustomEvent(Ah, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Ah, (p) => r == null ? void 0 : r(p), { once: !0 }), Zd(u, h), h.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      Fv,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: X(e.onClick, f),
        onPointerDown: (u) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, u), l.current = !0;
        },
        onPointerUp: X(e.onPointerUp, (u) => {
          var h;
          l.current || (h = u.currentTarget) == null || h.click();
        }),
        onKeyDown: X(e.onKeyDown, (u) => {
          const h = i.searchRef.current !== "";
          n || h && u.key === " " || Bl.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
vc.displayName = _i;
var Fv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = wu(_i, n), i = Iv(n), c = v.useRef(null), l = be(t, c), [f, u] = v.useState(!1), [h, p] = v.useState("");
    return v.useEffect(() => {
      const y = c.current;
      y && p((y.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ d.jsx(
      $s.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ d.jsx(yu, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ d.jsx(
          ne.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: X(
              e.onPointerMove,
              Ws((y) => {
                r ? a.onItemLeave(y) : (a.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              Ws((y) => a.onItemLeave(y))
            ),
            onFocus: X(e.onFocus, () => u(!0)),
            onBlur: X(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Ik = "MenuCheckboxItem", Vv = v.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(Yv, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      vc,
      {
        role: "menuitemcheckbox",
        "aria-checked": ki(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ku(n),
        onSelect: X(
          o.onSelect,
          () => r == null ? void 0 : r(ki(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Vv.displayName = Ik;
var zv = "MenuRadioGroup", [jk, Tk] = Wr(
  zv,
  { value: void 0, onValueChange: () => {
  } }
), Bv = v.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = Rt(r);
    return /* @__PURE__ */ d.jsx(jk, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ d.jsx(Su, { ...o, ref: t }) });
  }
);
Bv.displayName = zv;
var Hv = "MenuRadioItem", Gv = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Tk(Hv, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ d.jsx(Yv, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ d.jsx(
      vc,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": ku(s),
        onSelect: X(
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
Gv.displayName = Hv;
var _u = "MenuItemIndicator", [Yv, $k] = Wr(
  _u,
  { checked: !1 }
), Kv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = $k(_u, n);
    return /* @__PURE__ */ d.jsx(
      mt,
      {
        present: r || ki(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          ne.span,
          {
            ...o,
            ref: t,
            "data-state": ku(s.checked)
          }
        )
      }
    );
  }
);
Kv.displayName = _u;
var Wk = "MenuSeparator", Uv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
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
Uv.displayName = Wk;
var Lk = "MenuArrow", qv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = mc(n);
    return /* @__PURE__ */ d.jsx(pc, { ...o, ...r, ref: t });
  }
);
qv.displayName = Lk;
var Fk = "MenuSub", [QT, Xv] = Wr(Fk), ss = "MenuSubTrigger", Zv = v.forwardRef(
  (e, t) => {
    const n = Lr(ss, e.__scopeMenu), r = ca(ss, e.__scopeMenu), o = Xv(ss, e.__scopeMenu), s = wu(ss, e.__scopeMenu), a = v.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, l = { __scopeMenu: e.__scopeMenu }, f = v.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return v.useEffect(() => f, [f]), v.useEffect(() => {
      const u = i.current;
      return () => {
        window.clearTimeout(u), c(null);
      };
    }, [i, c]), /* @__PURE__ */ d.jsx(bu, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      Fv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": eg(n.open),
        ...e,
        ref: Vn(t, o.onTriggerChange),
        onClick: (u) => {
          var h;
          (h = e.onClick) == null || h.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: X(
          e.onPointerMove,
          Ws((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: X(
          e.onPointerLeave,
          Ws((u) => {
            var p, y;
            f();
            const h = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (h) {
              const m = (y = n.content) == null ? void 0 : y.dataset.side, b = m === "right", C = b ? -5 : 5, x = h[b ? "left" : "right"], g = h[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + C, y: u.clientY },
                  { x, y: h.top },
                  { x: g, y: h.top },
                  { x: g, y: h.bottom },
                  { x, y: h.bottom }
                ],
                side: m
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(u), u.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: X(e.onKeyDown, (u) => {
          var p;
          const h = s.searchRef.current !== "";
          e.disabled || h && u.key === " " || xk[r.dir].includes(u.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Zv.displayName = ss;
var Qv = "MenuSubContent", Jv = v.forwardRef(
  (e, t) => {
    const n = Tv(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(Yt, e.__scopeMenu), a = ca(Yt, e.__scopeMenu), i = Xv(Qv, e.__scopeMenu), c = v.useRef(null), l = be(t, c);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      Cu,
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
          var u;
          a.isUsingKeyboardRef.current && ((u = c.current) == null || u.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: X(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: X(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: X(e.onKeyDown, (f) => {
          var p;
          const u = f.currentTarget.contains(f.target), h = wk[a.dir].includes(f.key);
          u && h && (s.onOpenChange(!1), (p = i.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Jv.displayName = Qv;
function eg(e) {
  return e ? "open" : "closed";
}
function ki(e) {
  return e === "indeterminate";
}
function ku(e) {
  return ki(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Vk(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function zk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Bk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = zk(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Hk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, u = c.x, h = c.y;
    f > r != h > r && n < (u - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function Gk(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Hk(n, t);
}
function Ws(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Yk = jv, Kk = bu, Uk = $v, qk = Wv, Xk = Su, Zk = Lv, Qk = vc, Jk = Vv, eE = Bv, tE = Gv, nE = Kv, rE = Uv, oE = qv, sE = Zv, aE = Jv, gc = "DropdownMenu", [iE] = dt(
  gc,
  [Dv]
), Et = Dv(), [cE, tg] = iE(gc), ng = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Et(t), l = v.useRef(null), [f, u] = kt({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: gc
  });
  return /* @__PURE__ */ d.jsx(
    cE,
    {
      scope: t,
      triggerId: Ze(),
      triggerRef: l,
      contentId: Ze(),
      open: f,
      onOpenChange: u,
      onOpenToggle: v.useCallback(() => u((h) => !h), [u]),
      modal: i,
      children: /* @__PURE__ */ d.jsx(Yk, { ...c, open: f, onOpenChange: u, dir: r, modal: i, children: n })
    }
  );
};
ng.displayName = gc;
var rg = "DropdownMenuTrigger", og = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = tg(rg, n), a = Et(n);
    return /* @__PURE__ */ d.jsx(Kk, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
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
        onPointerDown: X(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: X(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
og.displayName = rg;
var lE = "DropdownMenuPortal", sg = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Et(t);
  return /* @__PURE__ */ d.jsx(Uk, { ...r, ...n });
};
sg.displayName = lE;
var ag = "DropdownMenuContent", ig = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = tg(ag, n), s = Et(n), a = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      qk,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (i) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: X(e.onInteractOutside, (i) => {
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
ig.displayName = ag;
var dE = "DropdownMenuGroup", uE = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Xk, { ...o, ...r, ref: t });
  }
);
uE.displayName = dE;
var fE = "DropdownMenuLabel", cg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Zk, { ...o, ...r, ref: t });
  }
);
cg.displayName = fE;
var hE = "DropdownMenuItem", lg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Qk, { ...o, ...r, ref: t });
  }
);
lg.displayName = hE;
var pE = "DropdownMenuCheckboxItem", mE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(Jk, { ...o, ...r, ref: t });
});
mE.displayName = pE;
var vE = "DropdownMenuRadioGroup", gE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(eE, { ...o, ...r, ref: t });
});
gE.displayName = vE;
var yE = "DropdownMenuRadioItem", bE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(tE, { ...o, ...r, ref: t });
});
bE.displayName = yE;
var xE = "DropdownMenuItemIndicator", wE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(nE, { ...o, ...r, ref: t });
});
wE.displayName = xE;
var CE = "DropdownMenuSeparator", dg = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(rE, { ...o, ...r, ref: t });
});
dg.displayName = CE;
var SE = "DropdownMenuArrow", _E = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(oE, { ...o, ...r, ref: t });
  }
);
_E.displayName = SE;
var kE = "DropdownMenuSubTrigger", EE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(sE, { ...o, ...r, ref: t });
});
EE.displayName = kE;
var ME = "DropdownMenuSubContent", NE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(
    aE,
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
NE.displayName = ME;
var PE = ng, AE = og, RE = sg, OE = ig, DE = cg, Rh = lg, IE = dg;
function Oh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var yc = "Popover", [ug] = dt(yc, [
  dr
]), la = dr(), [jE, ur] = ug(yc), fg = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = la(t), c = v.useRef(null), [l, f] = v.useState(!1), [u, h] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: yc
  });
  return /* @__PURE__ */ d.jsx(fc, { ...i, children: /* @__PURE__ */ d.jsx(
    jE,
    {
      scope: t,
      contentId: Ze(),
      triggerRef: c,
      open: u,
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
fg.displayName = yc;
var hg = "PopoverAnchor", pg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(hg, n), s = la(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return v.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ d.jsx(sa, { ...s, ...r, ref: t });
  }
);
pg.displayName = hg;
var mg = "PopoverTrigger", vg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(mg, n), s = la(n), a = be(t, o.triggerRef), i = /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": wg(o.open),
        ...r,
        ref: a,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: i });
  }
);
vg.displayName = mg;
var Eu = "PopoverPortal", [TE, $E] = ug(Eu, {
  forceMount: void 0
}), gg = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ur(Eu, t);
  return /* @__PURE__ */ d.jsx(TE, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
gg.displayName = Eu;
var Co = "PopoverContent", yg = v.forwardRef(
  (e, t) => {
    const n = $E(Co, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ur(Co, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(LE, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(FE, { ...o, ref: t }) });
  }
);
yg.displayName = Co;
var WE = /* @__PURE__ */ or("PopoverContent.RemoveScroll"), LE = v.forwardRef(
  (e, t) => {
    const n = ur(Co, e.__scopePopover), r = v.useRef(null), o = be(t, r), s = v.useRef(!1);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return Ji(a);
    }, []), /* @__PURE__ */ d.jsx(ra, { as: WE, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      bg,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: X(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: X(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), FE = v.forwardRef(
  (e, t) => {
    const n = ur(Co, e.__scopePopover), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      bg,
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
), bg = v.forwardRef(
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
      ...u
    } = e, h = ur(Co, n), p = la(n);
    return Zi(), /* @__PURE__ */ d.jsx(
      na,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ d.jsx(
          Tr,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ d.jsx(
              hc,
              {
                "data-state": wg(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...u,
                ref: t,
                style: {
                  ...u.style,
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
), xg = "PopoverClose", VE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(xg, n);
    return /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
VE.displayName = xg;
var zE = "PopoverArrow", BE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = la(n);
    return /* @__PURE__ */ d.jsx(pc, { ...o, ...r, ref: t });
  }
);
BE.displayName = zE;
function wg(e) {
  return e ? "open" : "closed";
}
var Cg = fg, HE = pg, Sg = vg, _g = gg, Mu = yg, Nu = "Progress", Pu = 100, [GE] = dt(Nu), [YE, KE] = GE(Nu), kg = v.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = UE,
      ...a
    } = e;
    (o || o === 0) && !Dh(o) && console.error(qE(`${o}`, "Progress"));
    const i = Dh(o) ? o : Pu;
    r !== null && !Ih(r, i) && console.error(XE(`${r}`, "Progress"));
    const c = Ih(r, i) ? r : null, l = Ei(c) ? s(c, i) : void 0;
    return /* @__PURE__ */ d.jsx(YE, { scope: n, value: c, max: i, children: /* @__PURE__ */ d.jsx(
      ne.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Ei(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": Ng(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
kg.displayName = Nu;
var Eg = "ProgressIndicator", Mg = v.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = KE(Eg, n);
    return /* @__PURE__ */ d.jsx(
      ne.div,
      {
        "data-state": Ng(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Mg.displayName = Eg;
function UE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ng(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ei(e) {
  return typeof e == "number";
}
function Dh(e) {
  return Ei(e) && !isNaN(e) && e > 0;
}
function Ih(e, t) {
  return Ei(e) && !isNaN(e) && e <= t && e >= 0;
}
function qE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Pu}\`.`;
}
function XE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Pu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ZE = kg, QE = Mg, Au = "Radio", [JE, Pg] = dt(Au), [eM, tM] = JE(Au), Ag = v.forwardRef(
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
    } = e, [u, h] = v.useState(null), p = be(t, (b) => h(b)), y = v.useRef(!1), m = u ? l || !!u.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(eM, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        ne.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Ig(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: p,
          onClick: X(e.onClick, (b) => {
            o || c == null || c(), m && (y.current = b.isPropagationStopped(), y.current || b.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ d.jsx(
        Dg,
        {
          control: u,
          bubbles: !y.current,
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
Ag.displayName = Au;
var Rg = "RadioIndicator", Og = v.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = tM(Rg, n);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.checked, children: /* @__PURE__ */ d.jsx(
      ne.span,
      {
        "data-state": Ig(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Og.displayName = Rg;
var nM = "RadioBubbleInput", Dg = v.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = be(a, s), c = sc(n), l = ac(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const y = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(y);
      }
    }, [c, n, r]), /* @__PURE__ */ d.jsx(
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
Dg.displayName = nM;
function Ig(e) {
  return e ? "checked" : "unchecked";
}
var rM = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], bc = "RadioGroup", [oM] = dt(bc, [
  jo,
  Pg
]), jg = jo(), Tg = Pg(), [sM, aM] = oM(bc), $g = v.forwardRef(
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
      onValueChange: u,
      ...h
    } = e, p = jg(n), y = Oo(l), [m, b] = kt({
      prop: s,
      defaultProp: o ?? null,
      onChange: u,
      caller: bc
    });
    return /* @__PURE__ */ d.jsx(
      sM,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: m,
        onValueChange: b,
        children: /* @__PURE__ */ d.jsx(
          gu,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: y,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              ne.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: y,
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
$g.displayName = bc;
var Wg = "RadioGroupItem", Lg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = aM(Wg, n), a = s.disabled || r, i = jg(n), c = Tg(n), l = v.useRef(null), f = be(t, l), u = s.value === o.value, h = v.useRef(!1);
    return v.useEffect(() => {
      const p = (m) => {
        rM.includes(m.key) && (h.current = !0);
      }, y = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ d.jsx(
      yu,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: u,
        children: /* @__PURE__ */ d.jsx(
          Ag,
          {
            disabled: a,
            required: s.required,
            checked: u,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: X((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: X(o.onFocus, () => {
              var p;
              h.current && ((p = l.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Lg.displayName = Wg;
var iM = "RadioGroupIndicator", Fg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Tg(n);
    return /* @__PURE__ */ d.jsx(Og, { ...o, ...r, ref: t });
  }
);
Fg.displayName = iM;
var cM = $g, lM = Lg, dM = Fg, uM = [" ", "Enter", "ArrowUp", "ArrowDown"], fM = [" ", "Enter"], Ar = "Select", [xc, wc, hM] = ta(Ar), [To] = dt(Ar, [
  hM,
  dr
]), Cc = dr(), [pM, fr] = To(Ar), [mM, vM] = To(Ar), Vg = (e) => {
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
    autoComplete: u,
    disabled: h,
    required: p,
    form: y
  } = e, m = Cc(t), [b, C] = v.useState(null), [x, g] = v.useState(null), [S, w] = v.useState(!1), k = Oo(l), [E, M] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ar
  }), [P, O] = kt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Ar
  }), I = v.useRef(null), D = b ? y || !!b.closest("form") : !0, [L, j] = v.useState(/* @__PURE__ */ new Set()), B = Array.from(L).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ d.jsx(fc, { ...m, children: /* @__PURE__ */ d.jsxs(
    pM,
    {
      required: p,
      scope: t,
      trigger: b,
      onTriggerChange: C,
      valueNode: x,
      onValueNodeChange: g,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: w,
      contentId: Ze(),
      value: P,
      onValueChange: O,
      open: E,
      onOpenChange: M,
      dir: k,
      triggerPointerDownPosRef: I,
      disabled: h,
      children: [
        /* @__PURE__ */ d.jsx(xc.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          mM,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((V) => {
              j((Y) => new Set(Y).add(V));
            }, []),
            onNativeOptionRemove: v.useCallback((V) => {
              j((Y) => {
                const T = new Set(Y);
                return T.delete(V), T;
              });
            }, []),
            children: n
          }
        ) }),
        D ? /* @__PURE__ */ d.jsxs(
          hy,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: P,
            onChange: (V) => O(V.target.value),
            disabled: h,
            form: y,
            children: [
              P === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(L)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
Vg.displayName = Ar;
var zg = "SelectTrigger", Bg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Cc(n), a = fr(zg, n), i = a.disabled || r, c = be(t, a.onTriggerChange), l = wc(n), f = v.useRef("touch"), [u, h, p] = my((m) => {
      const b = l().filter((g) => !g.disabled), C = b.find((g) => g.value === a.value), x = vy(b, m, C);
      x !== void 0 && a.onValueChange(x.value);
    }), y = (m) => {
      i || (a.onOpenChange(!0), p()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
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
        "data-placeholder": py(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: X(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && y(m);
        }),
        onPointerDown: X(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const b = m.target;
          b.hasPointerCapture(m.pointerId) && b.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (y(m), m.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (m) => {
          const b = u.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(b && m.key === " ") && uM.includes(m.key) && (y(), m.preventDefault());
        })
      }
    ) });
  }
);
Bg.displayName = zg;
var Hg = "SelectValue", Gg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = fr(Hg, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, u = be(t, c.onValueNodeChange);
    return lt(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d.jsx(
      ne.span,
      {
        ...i,
        ref: u,
        style: { pointerEvents: "none" },
        children: py(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: a }) : s
      }
    );
  }
);
Gg.displayName = Hg;
var gM = "SelectIcon", Yg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(ne.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Yg.displayName = gM;
var yM = "SelectPortal", Kg = (e) => /* @__PURE__ */ d.jsx($r, { asChild: !0, ...e });
Kg.displayName = yM;
var Rr = "SelectContent", Ug = v.forwardRef(
  (e, t) => {
    const n = fr(Rr, e.__scopeSelect), [r, o] = v.useState();
    if (lt(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Js.createPortal(
        /* @__PURE__ */ d.jsx(qg, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(xc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Xg, { ...e, ref: t });
  }
);
Ug.displayName = Rr;
var tn = 10, [qg, hr] = To(Rr), bM = "SelectContentImpl", xM = /* @__PURE__ */ or("SelectContent.RemoveScroll"), Xg = v.forwardRef(
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
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: m,
      avoidCollisions: b,
      //
      ...C
    } = e, x = fr(Rr, n), [g, S] = v.useState(null), [w, k] = v.useState(null), E = be(t, ($) => S($)), [M, P] = v.useState(null), [O, I] = v.useState(
      null
    ), D = wc(n), [L, j] = v.useState(!1), B = v.useRef(!1);
    v.useEffect(() => {
      if (g) return Ji(g);
    }, [g]), Zi();
    const V = v.useCallback(
      ($) => {
        const [J, ...re] = D().map((ge) => ge.ref.current), [de] = re.slice(-1), me = document.activeElement;
        for (const ge of $)
          if (ge === me || (ge == null || ge.scrollIntoView({ block: "nearest" }), ge === J && w && (w.scrollTop = 0), ge === de && w && (w.scrollTop = w.scrollHeight), ge == null || ge.focus(), document.activeElement !== me)) return;
      },
      [D, w]
    ), Y = v.useCallback(
      () => V([M, g]),
      [V, M, g]
    );
    v.useEffect(() => {
      L && Y();
    }, [L, Y]);
    const { onOpenChange: T, triggerPointerDownPosRef: W } = x;
    v.useEffect(() => {
      if (g) {
        let $ = { x: 0, y: 0 };
        const J = (de) => {
          var me, ge;
          $ = {
            x: Math.abs(Math.round(de.pageX) - (((me = W.current) == null ? void 0 : me.x) ?? 0)),
            y: Math.abs(Math.round(de.pageY) - (((ge = W.current) == null ? void 0 : ge.y) ?? 0))
          };
        }, re = (de) => {
          $.x <= 10 && $.y <= 10 ? de.preventDefault() : g.contains(de.target) || T(!1), document.removeEventListener("pointermove", J), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", re, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", re, { capture: !0 });
        };
      }
    }, [g, T, W]), v.useEffect(() => {
      const $ = () => T(!1);
      return window.addEventListener("blur", $), window.addEventListener("resize", $), () => {
        window.removeEventListener("blur", $), window.removeEventListener("resize", $);
      };
    }, [T]);
    const [oe, A] = my(($) => {
      const J = D().filter((me) => !me.disabled), re = J.find((me) => me.ref.current === document.activeElement), de = vy(J, $, re);
      de && setTimeout(() => de.ref.current.focus());
    }), N = v.useCallback(
      ($, J, re) => {
        const de = !B.current && !re;
        (x.value !== void 0 && x.value === J || de) && (P($), de && (B.current = !0));
      },
      [x.value]
    ), F = v.useCallback(() => g == null ? void 0 : g.focus(), [g]), z = v.useCallback(
      ($, J, re) => {
        const de = !B.current && !re;
        (x.value !== void 0 && x.value === J || de) && I($);
      },
      [x.value]
    ), Z = r === "popper" ? Hl : Zg, q = Z === Hl ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: m,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d.jsx(
      qg,
      {
        scope: n,
        content: g,
        viewport: w,
        onViewportChange: k,
        itemRefCallback: N,
        selectedItem: M,
        onItemLeave: F,
        itemTextRefCallback: z,
        focusSelectedItem: Y,
        selectedItemText: O,
        position: r,
        isPositioned: L,
        searchRef: oe,
        children: /* @__PURE__ */ d.jsx(ra, { as: xM, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: ($) => {
              $.preventDefault();
            },
            onUnmountAutoFocus: X(o, ($) => {
              var J;
              (J = x.trigger) == null || J.focus({ preventScroll: !0 }), $.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: ($) => $.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  Z,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: ($) => $.preventDefault(),
                    ...C,
                    ...q,
                    onPlaced: () => j(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: X(C.onKeyDown, ($) => {
                      const J = $.ctrlKey || $.altKey || $.metaKey;
                      if ($.key === "Tab" && $.preventDefault(), !J && $.key.length === 1 && A($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
                        let de = D().filter((me) => !me.disabled).map((me) => me.ref.current);
                        if (["ArrowUp", "End"].includes($.key) && (de = de.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
                          const me = $.target, ge = de.indexOf(me);
                          de = de.slice(ge + 1);
                        }
                        setTimeout(() => V(de)), $.preventDefault();
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
Xg.displayName = bM;
var wM = "SelectItemAlignedPosition", Zg = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = fr(Rr, n), a = hr(Rr, n), [i, c] = v.useState(null), [l, f] = v.useState(null), u = be(t, (E) => f(E)), h = wc(n), p = v.useRef(!1), y = v.useRef(!0), { viewport: m, selectedItem: b, selectedItemText: C, focusSelectedItem: x } = a, g = v.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && m && b && C) {
      const E = s.trigger.getBoundingClientRect(), M = l.getBoundingClientRect(), P = s.valueNode.getBoundingClientRect(), O = C.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const me = O.left - M.left, ge = P.left - me, Se = E.left - ge, Ie = E.width + Se, Te = Math.max(Ie, M.width), ut = window.innerWidth - tn, Xe = Oh(ge, [
          tn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(tn, ut - Te)
        ]);
        i.style.minWidth = Ie + "px", i.style.left = Xe + "px";
      } else {
        const me = M.right - O.right, ge = window.innerWidth - P.right - me, Se = window.innerWidth - E.right - ge, Ie = E.width + Se, Te = Math.max(Ie, M.width), ut = window.innerWidth - tn, Xe = Oh(ge, [
          tn,
          Math.max(tn, ut - Te)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = Xe + "px";
      }
      const I = h(), D = window.innerHeight - tn * 2, L = m.scrollHeight, j = window.getComputedStyle(l), B = parseInt(j.borderTopWidth, 10), V = parseInt(j.paddingTop, 10), Y = parseInt(j.borderBottomWidth, 10), T = parseInt(j.paddingBottom, 10), W = B + V + L + T + Y, oe = Math.min(b.offsetHeight * 5, W), A = window.getComputedStyle(m), N = parseInt(A.paddingTop, 10), F = parseInt(A.paddingBottom, 10), z = E.top + E.height / 2 - tn, Z = D - z, q = b.offsetHeight / 2, $ = b.offsetTop + q, J = B + V + $, re = W - J;
      if (J <= z) {
        const me = I.length > 0 && b === I[I.length - 1].ref.current;
        i.style.bottom = "0px";
        const ge = l.clientHeight - m.offsetTop - m.offsetHeight, Se = Math.max(
          Z,
          q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (me ? F : 0) + ge + Y
        ), Ie = J + Se;
        i.style.height = Ie + "px";
      } else {
        const me = I.length > 0 && b === I[0].ref.current;
        i.style.top = "0px";
        const Se = Math.max(
          z,
          B + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (me ? N : 0) + q
        ) + re;
        i.style.height = Se + "px", m.scrollTop = J - z + m.offsetTop;
      }
      i.style.margin = `${tn}px 0`, i.style.minHeight = oe + "px", i.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    l,
    m,
    b,
    C,
    s.dir,
    r
  ]);
  lt(() => g(), [g]);
  const [S, w] = v.useState();
  lt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const k = v.useCallback(
    (E) => {
      E && y.current === !0 && (g(), x == null || x(), y.current = !1);
    },
    [g, x]
  );
  return /* @__PURE__ */ d.jsx(
    SM,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ d.jsx(
            ne.div,
            {
              ...o,
              ref: u,
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
Zg.displayName = wM;
var CM = "SelectPopperPosition", Hl = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = tn,
    ...s
  } = e, a = Cc(n);
  return /* @__PURE__ */ d.jsx(
    hc,
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
Hl.displayName = CM;
var [SM, Ru] = To(Rr, {}), Gl = "SelectViewport", Qg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = hr(Gl, n), a = Ru(Gl, n), i = be(t, s.onViewportChange), c = v.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d.jsx(xc.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
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
          onScroll: X(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && u) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - tn * 2, m = parseFloat(u.style.minHeight), b = parseFloat(u.style.height), C = Math.max(m, b);
                if (C < y) {
                  const x = C + p, g = Math.min(y, x), S = x - g;
                  u.style.height = g + "px", u.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
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
Qg.displayName = Gl;
var Jg = "SelectGroup", [_M, kM] = To(Jg), ey = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ze();
    return /* @__PURE__ */ d.jsx(_M, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(ne.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ey.displayName = Jg;
var ty = "SelectLabel", ny = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = kM(ty, n);
    return /* @__PURE__ */ d.jsx(ne.div, { id: o.id, ...r, ref: t });
  }
);
ny.displayName = ty;
var Mi = "SelectItem", [EM, ry] = To(Mi), oy = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = fr(Mi, n), c = hr(Mi, n), l = i.value === r, [f, u] = v.useState(s ?? ""), [h, p] = v.useState(!1), y = be(
      t,
      (x) => {
        var g;
        return (g = c.itemRefCallback) == null ? void 0 : g.call(c, x, r, o);
      }
    ), m = Ze(), b = v.useRef("touch"), C = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      EM,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: l,
        onItemTextChange: v.useCallback((x) => {
          u((g) => g || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          xc.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
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
                ref: y,
                onFocus: X(a.onFocus, () => p(!0)),
                onBlur: X(a.onBlur, () => p(!1)),
                onClick: X(a.onClick, () => {
                  b.current !== "mouse" && C();
                }),
                onPointerUp: X(a.onPointerUp, () => {
                  b.current === "mouse" && C();
                }),
                onPointerDown: X(a.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: X(a.onPointerMove, (x) => {
                  var g;
                  b.current = x.pointerType, o ? (g = c.onItemLeave) == null || g.call(c) : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(a.onPointerLeave, (x) => {
                  var g;
                  x.currentTarget === document.activeElement && ((g = c.onItemLeave) == null || g.call(c));
                }),
                onKeyDown: X(a.onKeyDown, (x) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (fM.includes(x.key) && C(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
oy.displayName = Mi;
var as = "SelectItemText", sy = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = fr(as, n), i = hr(as, n), c = ry(as, n), l = vM(as, n), [f, u] = v.useState(null), h = be(
      t,
      (C) => u(C),
      c.onItemTextChange,
      (C) => {
        var x;
        return (x = i.itemTextRefCallback) == null ? void 0 : x.call(i, C, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, y = v.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: b } = l;
    return lt(() => (m(y), () => b(y)), [m, b, y]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(ne.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Js.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
sy.displayName = as;
var ay = "SelectItemIndicator", iy = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ry(ay, n).isSelected ? /* @__PURE__ */ d.jsx(ne.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
iy.displayName = ay;
var Yl = "SelectScrollUpButton", cy = v.forwardRef((e, t) => {
  const n = hr(Yl, e.__scopeSelect), r = Ru(Yl, e.__scopeSelect), [o, s] = v.useState(!1), a = be(t, r.onScrollButtonChange);
  return lt(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    dy,
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
cy.displayName = Yl;
var Kl = "SelectScrollDownButton", ly = v.forwardRef((e, t) => {
  const n = hr(Kl, e.__scopeSelect), r = Ru(Kl, e.__scopeSelect), [o, s] = v.useState(!1), a = be(t, r.onScrollButtonChange);
  return lt(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    dy,
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
ly.displayName = Kl;
var dy = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = hr("SelectScrollButton", n), a = v.useRef(null), i = wc(n), c = v.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return v.useEffect(() => () => c(), [c]), lt(() => {
    var f;
    const l = i().find((u) => u.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d.jsx(
    ne.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: X(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: X(o.onPointerMove, () => {
        var l;
        (l = s.onItemLeave) == null || l.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: X(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), MM = "SelectSeparator", uy = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ne.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
uy.displayName = MM;
var Ul = "SelectArrow", fy = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Cc(n), s = fr(Ul, n), a = hr(Ul, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d.jsx(pc, { ...o, ...r, ref: t }) : null;
  }
);
fy.displayName = Ul;
var NM = "SelectBubbleInput", hy = v.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = v.useRef(null), s = be(r, o), a = sc(t);
    return v.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(u);
      }
    }, [a, t]), /* @__PURE__ */ d.jsx(
      ne.select,
      {
        ...n,
        style: { ...im, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
hy.displayName = NM;
function py(e) {
  return e === "" || e === void 0;
}
function my(e) {
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
function vy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = PM(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function PM(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AM = Vg, RM = Bg, OM = Gg, DM = Yg, IM = Kg, jM = Ug, TM = Qg, $M = ey, WM = ny, LM = oy, FM = sy, VM = iy, zM = cy, BM = ly, HM = uy, GM = fy, Sc = "Switch", [YM] = dt(Sc), [KM, UM] = YM(Sc), gy = v.forwardRef(
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
      ...u
    } = e, [h, p] = v.useState(null), y = be(t, (g) => p(g)), m = v.useRef(!1), b = h ? f || !!h.closest("form") : !0, [C, x] = kt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: Sc
    });
    return /* @__PURE__ */ d.jsxs(KM, { scope: n, checked: C, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        ne.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": a,
          "data-state": wy(C),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...u,
          ref: y,
          onClick: X(e.onClick, (g) => {
            x((S) => !S), b && (m.current = g.isPropagationStopped(), m.current || g.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d.jsx(
        xy,
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
gy.displayName = Sc;
var yy = "SwitchThumb", by = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = UM(yy, n);
    return /* @__PURE__ */ d.jsx(
      ne.span,
      {
        "data-state": wy(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
by.displayName = yy;
var qM = "SwitchBubbleInput", xy = v.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = be(a, s), c = sc(n), l = ac(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const y = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(y);
      }
    }, [c, n, r]), /* @__PURE__ */ d.jsx(
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
xy.displayName = qM;
function wy(e) {
  return e ? "checked" : "unchecked";
}
var XM = gy, ZM = by, _c = "Tabs", [QM] = dt(_c, [
  jo
]), Cy = jo(), [JM, Ou] = QM(_c), Sy = v.forwardRef(
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
    } = e, f = Oo(i), [u, h] = kt({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: _c
    });
    return /* @__PURE__ */ d.jsx(
      JM,
      {
        scope: n,
        baseId: Ze(),
        value: u,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d.jsx(
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
Sy.displayName = _c;
var _y = "TabsList", ky = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Ou(_y, n), a = Cy(n);
    return /* @__PURE__ */ d.jsx(
      gu,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ d.jsx(
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
ky.displayName = _y;
var Ey = "TabsTrigger", My = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Ou(Ey, n), i = Cy(n), c = Py(a.baseId, r), l = Ay(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ d.jsx(
      yu,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d.jsx(
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
            onMouseDown: X(e.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(r) : u.preventDefault();
            }),
            onKeyDown: X(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && a.onValueChange(r);
            }),
            onFocus: X(e.onFocus, () => {
              const u = a.activationMode !== "manual";
              !f && !o && u && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
My.displayName = Ey;
var Ny = "TabsContent", eN = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Ou(Ny, n), c = Py(i.baseId, r), l = Ay(i.baseId, r), f = r === i.value, u = v.useRef(f);
    return v.useEffect(() => {
      const h = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ d.jsx(mt, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ d.jsx(
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
          animationDuration: u.current ? "0s" : void 0
        },
        children: h && s
      }
    ) });
  }
);
eN.displayName = Ny;
function Py(e, t) {
  return `${e}-trigger-${t}`;
}
function Ay(e, t) {
  return `${e}-content-${t}`;
}
var tN = Sy, nN = ky, rN = My, Du = "ToastProvider", [Iu, oN, sN] = ta("Toast"), [Ry] = dt("Toast", [sN]), [aN, kc] = Ry(Du), Oy = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = v.useState(null), [l, f] = v.useState(0), u = v.useRef(!1), h = v.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Du}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(Iu.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
    aN,
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
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: h,
      children: a
    }
  ) });
};
Oy.displayName = Du;
var Dy = "ToastViewport", iN = ["F8"], ql = "toast.viewportPause", Xl = "toast.viewportResume", Iy = v.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = iN,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = kc(Dy, n), i = oN(n), c = v.useRef(null), l = v.useRef(null), f = v.useRef(null), u = v.useRef(null), h = be(t, u, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = a.toastCount > 0;
    v.useEffect(() => {
      const b = (C) => {
        var g;
        r.length !== 0 && r.every((S) => C[S] || C.code === S) && ((g = u.current) == null || g.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), v.useEffect(() => {
      const b = c.current, C = u.current;
      if (y && b && C) {
        const x = () => {
          if (!a.isClosePausedRef.current) {
            const k = new CustomEvent(ql);
            C.dispatchEvent(k), a.isClosePausedRef.current = !0;
          }
        }, g = () => {
          if (a.isClosePausedRef.current) {
            const k = new CustomEvent(Xl);
            C.dispatchEvent(k), a.isClosePausedRef.current = !1;
          }
        }, S = (k) => {
          !b.contains(k.relatedTarget) && g();
        }, w = () => {
          b.contains(document.activeElement) || g();
        };
        return b.addEventListener("focusin", x), b.addEventListener("focusout", S), b.addEventListener("pointermove", x), b.addEventListener("pointerleave", w), window.addEventListener("blur", x), window.addEventListener("focus", g), () => {
          b.removeEventListener("focusin", x), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", x), b.removeEventListener("pointerleave", w), window.removeEventListener("blur", x), window.removeEventListener("focus", g);
        };
      }
    }, [y, a.isClosePausedRef]);
    const m = v.useCallback(
      ({ tabbingDirection: b }) => {
        const x = i().map((g) => {
          const S = g.ref.current, w = [S, ...xN(S)];
          return b === "forwards" ? w : w.reverse();
        });
        return (b === "forwards" ? x.reverse() : x).flat();
      },
      [i]
    );
    return v.useEffect(() => {
      const b = u.current;
      if (b) {
        const C = (x) => {
          var w, k, E;
          const g = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !g) {
            const M = document.activeElement, P = x.shiftKey;
            if (x.target === b && P) {
              (w = l.current) == null || w.focus();
              return;
            }
            const D = m({ tabbingDirection: P ? "backwards" : "forwards" }), L = D.findIndex((j) => j === M);
            il(D.slice(L + 1)) ? x.preventDefault() : P ? (k = l.current) == null || k.focus() : (E = f.current) == null || E.focus();
          }
        };
        return b.addEventListener("keydown", C), () => b.removeEventListener("keydown", C);
      }
    }, [i, m]), /* @__PURE__ */ d.jsxs(
      jC,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ d.jsx(
            Zl,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const b = m({
                  tabbingDirection: "forwards"
                });
                il(b);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(Iu.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(ne.ol, { tabIndex: -1, ...s, ref: h }) }),
          y && /* @__PURE__ */ d.jsx(
            Zl,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const b = m({
                  tabbingDirection: "backwards"
                });
                il(b);
              }
            }
          )
        ]
      }
    );
  }
);
Iy.displayName = Dy;
var jy = "ToastFocusProxy", Zl = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = kc(jy, n);
    return /* @__PURE__ */ d.jsx(
      Ki,
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
Zl.displayName = jy;
var da = "Toast", cN = "toast.swipeStart", lN = "toast.swipeMove", dN = "toast.swipeCancel", uN = "toast.swipeEnd", Ty = v.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = kt({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: da
    });
    return /* @__PURE__ */ d.jsx(mt, { present: n || i, children: /* @__PURE__ */ d.jsx(
      pN,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Rt(e.onPause),
        onResume: Rt(e.onResume),
        onSwipeStart: X(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: X(e.onSwipeMove, (l) => {
          const { x: f, y: u } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${u}px`);
        }),
        onSwipeCancel: X(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: X(e.onSwipeEnd, (l) => {
          const { x: f, y: u } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), c(!1);
        })
      }
    ) });
  }
);
Ty.displayName = da;
var [fN, hN] = Ry(da, {
  onClose() {
  }
}), pN = v.forwardRef(
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
      onSwipeMove: u,
      onSwipeCancel: h,
      onSwipeEnd: p,
      ...y
    } = e, m = kc(da, n), [b, C] = v.useState(null), x = be(t, (j) => C(j)), g = v.useRef(null), S = v.useRef(null), w = o || m.duration, k = v.useRef(0), E = v.useRef(w), M = v.useRef(0), { onToastAdd: P, onToastRemove: O } = m, I = Rt(() => {
      var B;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((B = m.viewport) == null || B.focus()), a();
    }), D = v.useCallback(
      (j) => {
        !j || j === 1 / 0 || (window.clearTimeout(M.current), k.current = (/* @__PURE__ */ new Date()).getTime(), M.current = window.setTimeout(I, j));
      },
      [I]
    );
    v.useEffect(() => {
      const j = m.viewport;
      if (j) {
        const B = () => {
          D(E.current), l == null || l();
        }, V = () => {
          const Y = (/* @__PURE__ */ new Date()).getTime() - k.current;
          E.current = E.current - Y, window.clearTimeout(M.current), c == null || c();
        };
        return j.addEventListener(ql, V), j.addEventListener(Xl, B), () => {
          j.removeEventListener(ql, V), j.removeEventListener(Xl, B);
        };
      }
    }, [m.viewport, w, c, l, D]), v.useEffect(() => {
      s && !m.isClosePausedRef.current && D(w);
    }, [s, w, m.isClosePausedRef, D]), v.useEffect(() => (P(), () => O()), [P, O]);
    const L = v.useMemo(() => b ? Hy(b) : null, [b]);
    return m.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      L && /* @__PURE__ */ d.jsx(
        mN,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: L
        }
      ),
      /* @__PURE__ */ d.jsx(fN, { scope: n, onClose: I, children: Js.createPortal(
        /* @__PURE__ */ d.jsx(Iu.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
          IC,
          {
            asChild: !0,
            onEscapeKeyDown: X(i, () => {
              m.isFocusedToastEscapeKeyDownRef.current || I(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d.jsx(
              ne.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...y,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: X(e.onKeyDown, (j) => {
                  j.key === "Escape" && (i == null || i(j.nativeEvent), j.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, I()));
                }),
                onPointerDown: X(e.onPointerDown, (j) => {
                  j.button === 0 && (g.current = { x: j.clientX, y: j.clientY });
                }),
                onPointerMove: X(e.onPointerMove, (j) => {
                  if (!g.current) return;
                  const B = j.clientX - g.current.x, V = j.clientY - g.current.y, Y = !!S.current, T = ["left", "right"].includes(m.swipeDirection), W = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, oe = T ? W(0, B) : 0, A = T ? 0 : W(0, V), N = j.pointerType === "touch" ? 10 : 2, F = { x: oe, y: A }, z = { originalEvent: j, delta: F };
                  Y ? (S.current = F, Ta(lN, u, z, {
                    discrete: !1
                  })) : jh(F, m.swipeDirection, N) ? (S.current = F, Ta(cN, f, z, {
                    discrete: !1
                  }), j.target.setPointerCapture(j.pointerId)) : (Math.abs(B) > N || Math.abs(V) > N) && (g.current = null);
                }),
                onPointerUp: X(e.onPointerUp, (j) => {
                  const B = S.current, V = j.target;
                  if (V.hasPointerCapture(j.pointerId) && V.releasePointerCapture(j.pointerId), S.current = null, g.current = null, B) {
                    const Y = j.currentTarget, T = { originalEvent: j, delta: B };
                    jh(B, m.swipeDirection, m.swipeThreshold) ? Ta(uN, p, T, {
                      discrete: !0
                    }) : Ta(
                      dN,
                      h,
                      T,
                      {
                        discrete: !0
                      }
                    ), Y.addEventListener("click", (W) => W.preventDefault(), {
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
), mN = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = kc(da, t), [s, a] = v.useState(!1), [i, c] = v.useState(!1);
  return yN(() => a(!0)), v.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ d.jsx($r, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ki, { ...r, children: s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, vN = "ToastTitle", $y = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ne.div, { ...r, ref: t });
  }
);
$y.displayName = vN;
var gN = "ToastDescription", Wy = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(ne.div, { ...r, ref: t });
  }
);
Wy.displayName = gN;
var Ly = "ToastAction", Fy = v.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ d.jsx(By, { altText: n, asChild: !0, children: /* @__PURE__ */ d.jsx(zy, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Ly}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Fy.displayName = Ly;
var Vy = "ToastClose", zy = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = hN(Vy, n);
    return /* @__PURE__ */ d.jsx(By, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      ne.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
zy.displayName = Vy;
var By = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    ne.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Hy(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), bN(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Hy(r));
    }
  }), t;
}
function Ta(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Zd(o, s) : o.dispatchEvent(s);
}
var jh = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function yN(e = () => {
}) {
  const t = Rt(e);
  lt(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function bN(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function xN(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function il(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var wN = Oy, CN = Iy, SN = Ty, _N = $y, kN = Wy, EN = Fy, [Ec] = dt("Tooltip", [
  dr
]), Mc = dr(), Gy = "TooltipProvider", MN = 700, Ql = "tooltip.open", [NN, ju] = Ec(Gy), Yy = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = MN,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = v.useRef(!0), i = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    NN,
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
Yy.displayName = Gy;
var Ls = "Tooltip", [PN, ua] = Ec(Ls), Ky = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = ju(Ls, e.__scopeTooltip), l = Mc(t), [f, u] = v.useState(null), h = Ze(), p = v.useRef(0), y = a ?? c.disableHoverableContent, m = i ?? c.delayDuration, b = v.useRef(!1), [C, x] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ql))) : c.onClose(), s == null || s(E);
    },
    caller: Ls
  }), g = v.useMemo(() => C ? b.current ? "delayed-open" : "instant-open" : "closed", [C]), S = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b.current = !1, x(!0);
  }, [x]), w = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x(!1);
  }, [x]), k = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      b.current = !0, x(!0), p.current = 0;
    }, m);
  }, [m, x]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ d.jsx(fc, { ...l, children: /* @__PURE__ */ d.jsx(
    PN,
    {
      scope: t,
      contentId: h,
      open: C,
      stateAttribute: g,
      trigger: f,
      onTriggerChange: u,
      onTriggerEnter: v.useCallback(() => {
        c.isOpenDelayedRef.current ? k() : S();
      }, [c.isOpenDelayedRef, k, S]),
      onTriggerLeave: v.useCallback(() => {
        y ? w() : (window.clearTimeout(p.current), p.current = 0);
      }, [w, y]),
      onOpen: S,
      onClose: w,
      disableHoverableContent: y,
      children: n
    }
  ) });
};
Ky.displayName = Ls;
var Jl = "TooltipTrigger", Uy = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ua(Jl, n), s = ju(Jl, n), a = Mc(n), i = v.useRef(null), c = be(t, i, o.onTriggerChange), l = v.useRef(!1), f = v.useRef(!1), u = v.useCallback(() => l.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      ne.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: X(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: X(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: X(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: X(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: X(e.onBlur, o.onClose),
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
Uy.displayName = Jl;
var Tu = "TooltipPortal", [AN, RN] = Ec(Tu, {
  forceMount: void 0
}), qy = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = ua(Tu, t);
  return /* @__PURE__ */ d.jsx(AN, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
qy.displayName = Tu;
var So = "TooltipContent", Xy = v.forwardRef(
  (e, t) => {
    const n = RN(So, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = ua(So, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(mt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d.jsx(Zy, { side: o, ...s, ref: t }) : /* @__PURE__ */ d.jsx(ON, { side: o, ...s, ref: t }) });
  }
), ON = v.forwardRef((e, t) => {
  const n = ua(So, e.__scopeTooltip), r = ju(So, e.__scopeTooltip), o = v.useRef(null), s = be(t, o), [a, i] = v.useState(null), { trigger: c, onClose: l } = n, f = o.current, { onPointerInTransitChange: u } = r, h = v.useCallback(() => {
    i(null), u(!1);
  }, [u]), p = v.useCallback(
    (y, m) => {
      const b = y.currentTarget, C = { x: y.clientX, y: y.clientY }, x = $N(C, b.getBoundingClientRect()), g = WN(C, x), S = LN(m.getBoundingClientRect()), w = VN([...g, ...S]);
      i(w), u(!0);
    },
    [u]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (c && f) {
      const y = (b) => p(b, f), m = (b) => p(b, c);
      return c.addEventListener("pointerleave", y), f.addEventListener("pointerleave", m), () => {
        c.removeEventListener("pointerleave", y), f.removeEventListener("pointerleave", m);
      };
    }
  }, [c, f, p, h]), v.useEffect(() => {
    if (a) {
      const y = (m) => {
        const b = m.target, C = { x: m.clientX, y: m.clientY }, x = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b)), g = !FN(C, a);
        x ? h() : g && (h(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, f, a, l, h]), /* @__PURE__ */ d.jsx(Zy, { ...e, ref: s });
}), [DN, IN] = Ec(Ls, { isInside: !1 }), jN = /* @__PURE__ */ sm("TooltipContent"), Zy = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = ua(So, n), l = Mc(n), { onClose: f } = c;
    return v.useEffect(() => (document.addEventListener(Ql, f), () => document.removeEventListener(Ql, f)), [f]), v.useEffect(() => {
      if (c.trigger) {
        const u = (h) => {
          const p = h.target;
          p != null && p.contains(c.trigger) && f();
        };
        return window.addEventListener("scroll", u, { capture: !0 }), () => window.removeEventListener("scroll", u, { capture: !0 });
      }
    }, [c.trigger, f]), /* @__PURE__ */ d.jsx(
      Tr,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (u) => u.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ d.jsxs(
          hc,
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
              /* @__PURE__ */ d.jsx(jN, { children: r }),
              /* @__PURE__ */ d.jsx(DN, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(X2, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Xy.displayName = So;
var Qy = "TooltipArrow", TN = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Mc(n);
    return IN(
      Qy,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(pc, { ...o, ...r, ref: t });
  }
);
TN.displayName = Qy;
function $N(e, t) {
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
function WN(e, t, n = 5) {
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
function LN(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function FN(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, u = c.x, h = c.y;
    f > r != h > r && n < (u - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function VN(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), zN(t);
}
function zN(e) {
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
var BN = Yy, HN = Ky, GN = Uy, YN = qy, KN = Xy;
function Jy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Jy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function eb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Jy(e)) && (r && (r += " "), r += t);
  return r;
}
const Th = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $h = eb, pe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return $h(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], u = s == null ? void 0 : s[l];
    if (f === null) return null;
    const h = Th(f) || Th(u);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [u, h] = f;
    return h === void 0 || (l[u] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: u, className: h, ...p } = f;
    return Object.entries(p).every((y) => {
      let [m, b] = y;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === b;
    }) ? [
      ...l,
      u,
      h
    ] : l;
  }, []);
  return $h(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, $u = "-", UN = (e) => {
  const t = XN(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split($u);
      return i[0] === "" && i.length !== 1 && i.shift(), tb(i, t) || qN(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, tb = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? tb(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join($u);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Wh = /^\[(.+)\]$/, qN = (e) => {
  if (Wh.test(e)) {
    const t = Wh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, XN = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    ed(n[o], r, o, t);
  return r;
}, ed = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Lh(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ZN(o)) {
        ed(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      ed(a, Lh(t, s), n, r);
    });
  });
}, Lh = (e, t) => {
  let n = e;
  return t.split($u).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ZN = (e) => e.isThemeGetter, QN = (e) => {
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
}, td = "!", nd = ":", JN = nd.length, eP = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    for (let y = 0; y < o.length; y++) {
      let m = o[y];
      if (a === 0 && i === 0) {
        if (m === nd) {
          s.push(o.slice(c, y)), c = y + JN;
          continue;
        }
        if (m === "/") {
          l = y;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(c), u = tP(f), h = u !== f, p = l && l > c ? l - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: u,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + nd, s = r;
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
}, tP = (e) => e.endsWith(td) ? e.substring(0, e.length - 1) : e.startsWith(td) ? e.substring(1) : e, nP = (e) => {
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
}, rP = (e) => ({
  cache: QN(e.cacheSize),
  parseClassName: eP(e),
  sortModifiers: nP(e),
  ...UN(e)
}), oP = /\s+/, sP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(oP);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: u,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: m
    } = n(f);
    if (u) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!m, C = r(b ? y.substring(0, m) : y);
    if (!C) {
      if (!b) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(y), !C) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const x = s(h).join(":"), g = p ? x + td : x, S = g + C;
    if (a.includes(S))
      continue;
    a.push(S);
    const w = o(C, b);
    for (let k = 0; k < w.length; ++k) {
      const E = w[k];
      a.push(g + E);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function aP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = nb(t)) && (r && (r += " "), r += n);
  return r;
}
const nb = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = nb(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Fh(e, ...t) {
  let n, r, o, s = a;
  function a(c) {
    const l = t.reduce((f, u) => u(f), e());
    return n = rP(l), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const f = sP(c, n);
    return o(c, f), f;
  }
  return function() {
    return s(aP.apply(null, arguments));
  };
}
const Je = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, rb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ob = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iP = /^\d+\/\d+$/, cP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, uP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (e) => iP.test(e), Ce = (e) => !!e && !Number.isNaN(Number(e)), Yn = (e) => !!e && Number.isInteger(Number(e)), cl = (e) => e.endsWith("%") && Ce(e.slice(0, -1)), Tn = (e) => cP.test(e), hP = () => !0, pP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lP.test(e) && !dP.test(e)
), sb = () => !1, mP = (e) => uP.test(e), vP = (e) => fP.test(e), gP = (e) => !se(e) && !ae(e), yP = (e) => $o(e, cb, sb), se = (e) => rb.test(e), vr = (e) => $o(e, lb, pP), ll = (e) => $o(e, SP, Ce), Vh = (e) => $o(e, ab, sb), bP = (e) => $o(e, ib, vP), $a = (e) => $o(e, db, mP), ae = (e) => ob.test(e), Jo = (e) => Wo(e, lb), xP = (e) => Wo(e, _P), zh = (e) => Wo(e, ab), wP = (e) => Wo(e, cb), CP = (e) => Wo(e, ib), Wa = (e) => Wo(e, db, !0), $o = (e, t, n) => {
  const r = rb.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Wo = (e, t, n = !1) => {
  const r = ob.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ab = (e) => e === "position" || e === "percentage", ib = (e) => e === "image" || e === "url", cb = (e) => e === "length" || e === "size" || e === "bg-size", lb = (e) => e === "length", SP = (e) => e === "number", _P = (e) => e === "family-name", db = (e) => e === "shadow", Bh = () => {
  const e = Je("color"), t = Je("font"), n = Je("text"), r = Je("font-weight"), o = Je("tracking"), s = Je("leading"), a = Je("breakpoint"), i = Je("container"), c = Je("spacing"), l = Je("radius"), f = Je("shadow"), u = Je("inset-shadow"), h = Je("text-shadow"), p = Je("drop-shadow"), y = Je("blur"), m = Je("perspective"), b = Je("aspect"), C = Je("ease"), x = Je("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], w = () => [...S(), ae, se], k = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], M = () => [ae, se, c], P = () => [Ur, "full", "auto", ...M()], O = () => [Yn, "none", "subgrid", ae, se], I = () => ["auto", {
    span: ["full", Yn, ae, se]
  }, Yn, ae, se], D = () => [Yn, "auto", ae, se], L = () => ["auto", "min", "max", "fr", ae, se], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...M()], Y = () => [Ur, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], T = () => [e, ae, se], W = () => [...S(), zh, Vh, {
    position: [ae, se]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", wP, yP, {
    size: [ae, se]
  }], N = () => [cl, Jo, vr], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ae,
    se
  ], z = () => ["", Ce, Jo, vr], Z = () => ["solid", "dashed", "dotted", "double"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [Ce, cl, zh, Vh], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    ae,
    se
  ], re = () => ["none", Ce, ae, se], de = () => ["none", Ce, ae, se], me = () => [Ce, ae, se], ge = () => [Ur, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Tn],
      breakpoint: [Tn],
      color: [hP],
      container: [Tn],
      "drop-shadow": [Tn],
      ease: ["in", "out", "in-out"],
      font: [gP],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Tn],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Tn],
      shadow: [Tn],
      spacing: ["px", Ce],
      text: [Tn],
      "text-shadow": [Tn],
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
        aspect: ["auto", "square", Ur, se, ae, b]
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
        "break-after": g()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": g()
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
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        basis: [Ur, "full", "auto", i, ...M()]
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
        flex: [Ce, Ur, "auto", "initial", "none", se]
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
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
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
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": L()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": L()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: M()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": M()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": M()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...j(), "normal"]
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
        content: ["normal", ...j()]
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
        "place-content": j()
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
        p: M()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: M()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: M()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: M()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: M()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: M()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: M()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: M()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: M()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": M()
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
        "space-y": M()
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
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...Y()]
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
          ...Y()
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
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
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
        font: [r, ae, ll]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", cl, se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [xP, se, t]
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
        "line-clamp": [Ce, "none", ae, ll]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...M()
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
        indent: M()
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
        bg: A()
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
        }, CP, bP]
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
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
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
        rounded: F()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": F()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": F()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": F()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": F()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": F()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": F()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": F()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": F()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": F()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": F()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": F()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": F()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": F()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": F()
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
          Wa,
          $a
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
        "inset-shadow": ["none", u, Wa, $a]
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
        "text-shadow": ["none", h, Wa, $a]
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
        "mix-blend": [...q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
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
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
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
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
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
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
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
        mask: A()
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
          Wa,
          $a
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
        "border-spacing": M()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": M()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": M()
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
        animate: ["none", x, ae, se]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        stroke: [Ce, Jo, vr, ll]
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
}, kP = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: s = {}
}) => (is(e, "cacheSize", t), is(e, "prefix", n), is(e, "experimentalParseClassName", r), La(e.theme, s.theme), La(e.classGroups, s.classGroups), La(e.conflictingClassGroups, s.conflictingClassGroups), La(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), is(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), Fa(e.theme, o.theme), Fa(e.classGroups, o.classGroups), Fa(e.conflictingClassGroups, o.conflictingClassGroups), Fa(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), ub(e, o, "orderSensitiveModifiers"), e), is = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, La = (e, t) => {
  if (t)
    for (const n in t)
      is(e, n, t[n]);
}, Fa = (e, t) => {
  if (t)
    for (const n in t)
      ub(e, t, n);
}, ub = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, EP = (e, ...t) => typeof e == "function" ? Fh(Bh, e, ...t) : Fh(() => kP(Bh(), e), ...t), MP = [
  "xxxs",
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl"
], NP = EP({
  extend: {
    theme: {
      spacing: [...MP]
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
}), R = (...e) => NP(eb(e)), it = (e, t = {}) => {
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
}, fb = (e, t) => {
  if (typeof e == "string" || typeof e == "number") return e;
  if (e !== null && typeof e == "object" && "id" in e) {
    const { id: n } = e;
    if (typeof n == "string" || typeof n == "number") return n;
  }
  throw new Error(
    `${t}: values must be strings, numbers, or objects with a string or number \`id\`. Pass \`getItemValue\` for any other shape.`
  );
}, PP = pe(
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
), AP = pe(
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
), rd = _.forwardRef(
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
      className: R(AP({ intent: r }), s),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), a ? /* @__PURE__ */ d.jsx(Rh, { ...l, children: e }) : /* @__PURE__ */ d.jsxs(Rh, { ...l, children: [
      it(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
rd.displayName = "DropdownItem";
const RP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  IE,
  {
    ref: n,
    className: R(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
RP.displayName = "DropdownSeparator";
const OP = _.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  DE,
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
OP.displayName = "DropdownLabel";
const Wu = _.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(RE, { children: /* @__PURE__ */ d.jsx(
  OE,
  {
    ref: o,
    className: R(PP({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Wu.displayName = "DropdownContent";
const Lu = ({
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
  return t !== void 0 && (s.open = t), n !== void 0 && (s.onOpenChange = n), /* @__PURE__ */ d.jsx(PE, { ...s, children: e });
};
Lu.displayName = "Dropdown";
const Fu = _.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ d.jsx(
  AE,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Fu.displayName = "DropdownTrigger";
const JT = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ d.jsx("div", { className: r, children: /* @__PURE__ */ d.jsxs(Lu, { children: [
  /* @__PURE__ */ d.jsx(
    Fu,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ d.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ d.jsx(I2, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ d.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ d.jsx(
          ea,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ d.jsxs(Wu, { align: "end", className: "py-0 min-w-auto", children: [
    /* @__PURE__ */ d.jsxs(
      "p",
      {
        className: `h-6.75 px-3 py-0 text-sm font-medium leading-6.75
              text-body-success border-b-surface-default border-b text-center`,
        children: [
          /* @__PURE__ */ d.jsx(
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
] }) }), hb = _.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...s
  }, a) => e === "single" ? /* @__PURE__ */ d.jsx(
    ah,
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
  ) : /* @__PURE__ */ d.jsx(
    ah,
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
hb.displayName = "Accordion";
const pb = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
    SC,
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
pb.displayName = "AccordionItem";
const mb = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(_C, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  kC,
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
      /* @__PURE__ */ d.jsx(
        ea,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
mb.displayName = "AccordionTrigger";
const vb = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  EC,
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
vb.displayName = "AccordionContent";
const e7 = Object.assign(hb, {
  Item: pb,
  Trigger: mb,
  Content: vb
}), Hh = pe(
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
), DP = _.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...s
  }, a) => {
    const c = t || (e === "danger" ? $2 : void 0);
    return o ? /* @__PURE__ */ d.jsx(
      jr,
      {
        className: R(Hh({ intent: e }), n),
        ref: a,
        ...s,
        children: r
      }
    ) : /* @__PURE__ */ d.jsxs(
      "span",
      {
        className: R(Hh({ intent: e }), n),
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
DP.displayName = "Badge";
const IP = pe("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Va = pe(
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
), jP = pe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), TP = _.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Ud,
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
    return /* @__PURE__ */ d.jsx(
      "nav",
      {
        ref: i,
        "aria-label": s,
        className: R(IP({ size: t }), o),
        ...a,
        children: /* @__PURE__ */ d.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: c.map((l, f) => {
          const u = f === c.length - 1, h = l.label === "…";
          return /* @__PURE__ */ d.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ d.jsx("li", { className: "min-w-0 flex items-center", children: h ? /* @__PURE__ */ d.jsx(
              "span",
              {
                className: R(Va({ isActive: !0 })),
                children: l.label
              }
            ) : l.asChild ? /* @__PURE__ */ d.jsx(
              jr,
              {
                onClick: l.onClick,
                className: R(
                  Va({ isActive: u })
                ),
                "aria-current": u ? "page" : void 0,
                children: l.label
              }
            ) : l.href || l.onClick ? /* @__PURE__ */ d.jsx(
              "a",
              {
                href: l.href,
                onClick: l.onClick,
                className: R(
                  Va({ isActive: u })
                ),
                "aria-current": u ? "page" : void 0,
                children: l.label
              }
            ) : /* @__PURE__ */ d.jsx(
              "span",
              {
                className: R(Va({ isActive: !0 })),
                "aria-current": u ? "page" : void 0,
                children: l.label
              }
            ) }),
            !u && /* @__PURE__ */ d.jsx(
              "li",
              {
                className: "flex items-center",
                "aria-hidden": "true",
                role: "presentation",
                children: /* @__PURE__ */ d.jsx(
                  n,
                  {
                    className: R(jP({ size: t }))
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
TP.displayName = "Breadcrumbs";
const $P = pe(
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
), gb = _.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...s
  }, a) => /* @__PURE__ */ d.jsx(
    ZE,
    {
      ref: a,
      className: R($P({ size: r }), o),
      value: e,
      max: t,
      ...s,
      children: /* @__PURE__ */ d.jsx(
        QE,
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
gb.displayName = "ProgressIndicator.Linear";
const WP = pe("flex items-center", {
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
}), LP = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Ni = {
  sm: 12,
  md: 10
}, Gh = {
  sm: (50 - Ni.sm / 2).toString(),
  md: (50 - Ni.md / 2).toString()
}, yb = _.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, s) => /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: s,
      role: "status",
      className: R(WP({ size: t, layout: e }), r),
      ...o,
      children: [
        /* @__PURE__ */ d.jsxs(
          "svg",
          {
            width: "100",
            height: "100",
            viewBox: "0 0 100 100",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: R(LP[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ d.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Gh[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Ni[t]
                }
              ),
              /* @__PURE__ */ d.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Gh[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: Ni[t],
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
yb.displayName = "ProgressIndicator.Circular";
const Nc = {
  Linear: gb,
  Circular: yb
}, dl = pe(
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
), za = pe("", {
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
    const u = s ? jr : "button", h = !!((r || o) && !c && !(r && o)), p = !!(c && !r && !o), y = a || l.disabled;
    return a ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          dl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          "relative",
          n
        ),
        ...l,
        disabled: y,
        children: [
          /* @__PURE__ */ d.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            it(r, {
              className: R(
                za({ size: t, iconOnly: h, text: e === "text" })
              )
            }),
            c,
            it(o, {
              className: R(
                za({ size: t, iconOnly: h, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ d.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ d.jsx(Nc.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          dl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          n
        ),
        ...l,
        disabled: y,
        children: [
          it(r, {
            className: R(
              za({ size: t, iconOnly: h, text: e === "text" })
            )
          }),
          c,
          it(o, {
            className: R(
              za({ size: t, iconOnly: h, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ d.jsx(
      u,
      {
        ref: f,
        className: R(
          dl({ intent: e, size: t, textOnly: p, danger: i }),
          n
        ),
        children: c,
        ...l,
        disabled: y
      }
    );
  }
);
He.displayName = "Button";
function FP(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ul = {}, cs = {};
function Mr(e, t) {
  try {
    const r = (ul[e] || (ul[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in cs ? cs[r] : Yh(r, r.split(":"));
  } catch {
    if (e in cs) return cs[e];
    const n = e == null ? void 0 : e.match(VP);
    return n ? Yh(e, n.slice(1)) : NaN;
  }
}
const VP = /([+-]\d\d):?(\d\d)?/;
function Yh(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return cs[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class wn extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Mr(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), bb(this), od(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new wn(...n, t) : new wn(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new wn(+this, t);
  }
  getTimezoneOffset() {
    const t = -Mr(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), od(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new wn(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Kh = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Kh.test(e)) return;
  const t = e.replace(Kh, "$1UTC");
  wn.prototype[t] && (e.startsWith("get") ? wn.prototype[e] = function() {
    return this.internal[t]();
  } : (wn.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), zP(this), +this;
  }, wn.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), od(this), +this;
  }));
});
function od(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Mr(e.timeZone, e) * 60));
}
function zP(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), bb(e);
}
function bb(e) {
  const t = Mr(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, u = Math.round(-(Mr(e.timeZone, e) * 60)) % 60;
  (u || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + f));
  const h = Mr(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), m = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, b = p !== n, C = m - c;
  if (b && C) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C);
    const x = Mr(e.timeZone, e), g = x > 0 ? Math.floor(x) : Math.ceil(x), S = p - g;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class xt extends wn {
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
    return `${t} GMT${n}${r}${o} (${FP(this.timeZone, this)})`;
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
const xb = 6048e5, BP = 864e5, Uh = Symbol.for("constructDateFrom");
function rt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Uh in e ? e[Uh](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function De(e, t) {
  return rt(t || e, e);
}
function wb(e, t, n) {
  const r = De(e, n == null ? void 0 : n.in);
  return isNaN(t) ? rt(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Cb(e, t, n) {
  const r = De(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return rt(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = rt(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let HP = {};
function fa() {
  return HP;
}
function _o(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Fs(e, t) {
  return _o(e, { ...t, weekStartsOn: 1 });
}
function Sb(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = rt(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Fs(o), a = rt(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Fs(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function qh(e) {
  const t = De(e), n = new Date(
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
  const n = rt.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Vs(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function _b(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Vs(r), a = Vs(o), i = +s - qh(s), c = +a - qh(a);
  return Math.round((i - c) / BP);
}
function GP(e, t) {
  const n = Sb(e, t), r = rt(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Fs(r);
}
function YP(e, t, n) {
  return wb(e, t * 7, n);
}
function KP(e, t, n) {
  return Cb(e, t * 12, n);
}
function UP(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = rt.bind(null, o));
    const s = De(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), rt(r, n || NaN);
}
function qP(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = rt.bind(null, o));
    const s = De(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), rt(r, n || NaN);
}
function XP(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Vs(r) == +Vs(o);
}
function kb(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ZP(e) {
  return !(!kb(e) && typeof e != "number" || isNaN(+De(e)));
}
function QP(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function JP(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function e4(e, t) {
  const [n, r] = Lo(e, t.start, t.end);
  return { start: n, end: r };
}
function t4(e, t) {
  const { start: n, end: r } = e4(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(rt(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function n4(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function r4(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Eb(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Mb(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function o4(e, t) {
  return Mb(e, { ...t, weekStartsOn: 1 });
}
const s4 = {
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
}, a4 = (e, t, n) => {
  let r;
  const o = s4[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function go(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const i4 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, c4 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, l4 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, d4 = {
  date: go({
    formats: i4,
    defaultWidth: "full"
  }),
  time: go({
    formats: c4,
    defaultWidth: "full"
  }),
  dateTime: go({
    formats: l4,
    defaultWidth: "full"
  })
}, u4 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, f4 = (e, t, n, r) => u4[e];
function yn(e) {
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
const h4 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, p4 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, m4 = {
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
}, v4 = {
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
}, g4 = {
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
}, y4 = {
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
}, b4 = (e, t) => {
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
}, x4 = {
  ordinalNumber: b4,
  era: yn({
    values: h4,
    defaultWidth: "wide"
  }),
  quarter: yn({
    values: p4,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: yn({
    values: m4,
    defaultWidth: "wide"
  }),
  day: yn({
    values: v4,
    defaultWidth: "wide"
  }),
  dayPeriod: yn({
    values: g4,
    defaultWidth: "wide",
    formattingValues: y4,
    defaultFormattingWidth: "wide"
  })
};
function bn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? C4(i, (u) => u.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      w4(i, (u) => u.test(a))
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
function w4(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function C4(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Nb(e) {
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
const S4 = /^(\d+)(th|st|nd|rd)?/i, _4 = /\d+/i, k4 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, E4 = {
  any: [/^b/i, /^(a|c)/i]
}, M4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, N4 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, P4 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, A4 = {
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
}, R4 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, O4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, D4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, I4 = {
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
}, j4 = {
  ordinalNumber: Nb({
    matchPattern: S4,
    parsePattern: _4,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: bn({
    matchPatterns: k4,
    defaultMatchWidth: "wide",
    parsePatterns: E4,
    defaultParseWidth: "any"
  }),
  quarter: bn({
    matchPatterns: M4,
    defaultMatchWidth: "wide",
    parsePatterns: N4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: bn({
    matchPatterns: P4,
    defaultMatchWidth: "wide",
    parsePatterns: A4,
    defaultParseWidth: "any"
  }),
  day: bn({
    matchPatterns: R4,
    defaultMatchWidth: "wide",
    parsePatterns: O4,
    defaultParseWidth: "any"
  }),
  dayPeriod: bn({
    matchPatterns: D4,
    defaultMatchWidth: "any",
    parsePatterns: I4,
    defaultParseWidth: "any"
  })
}, Pc = {
  code: "en-US",
  formatDistance: a4,
  formatLong: d4,
  formatRelative: f4,
  localize: x4,
  match: j4,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function T4(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return _b(n, Eb(n)) + 1;
}
function Pb(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +Fs(n) - +GP(n);
  return Math.round(r / xb) + 1;
}
function Ab(e, t) {
  var f, u, h, p;
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = fa(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = rt((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = _o(a, t), c = rt((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const l = _o(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function $4(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Ab(e, t), s = rt((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), _o(s, t);
}
function Rb(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +_o(n, t) - +$4(n, t);
  return Math.round(r / xb) + 1;
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
}, qr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Xh = {
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
    const o = Ab(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Ae(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ae(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Sb(e);
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
    const o = Rb(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ae(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Pb(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ae(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Kn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = T4(e);
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
    switch (r === 12 ? o = qr.noon : r === 0 ? o = qr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = qr.evening : r >= 12 ? o = qr.afternoon : r >= 4 ? o = qr.morning : o = qr.night, t) {
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
        return Qh(r);
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
        return Qh(r);
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
        return "GMT" + Zh(r, ":");
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
        return "GMT" + Zh(r, ":");
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
function Zh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Ae(s, 2);
}
function Qh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ae(Math.abs(e) / 60, 2) : yr(e, t);
}
function yr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ae(Math.trunc(r / 60), 2), s = Ae(r % 60, 2);
  return n + o + t + s;
}
const Jh = (e, t) => {
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
}, Ob = (e, t) => {
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
}, W4 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Jh(e, t);
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
  return s.replace("{{date}}", Jh(r, t)).replace("{{time}}", Ob(o, t));
}, L4 = {
  p: Ob,
  P: W4
}, F4 = /^D+$/, V4 = /^Y+$/, z4 = ["D", "DD", "YY", "YYYY"];
function B4(e) {
  return F4.test(e);
}
function H4(e) {
  return V4.test(e);
}
function G4(e, t, n) {
  const r = Y4(e, t, n);
  if (console.warn(r), z4.includes(e)) throw new RangeError(r);
}
function Y4(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const K4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, U4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, q4 = /^'([^]*?)'?$/, X4 = /''/g, Z4 = /[a-zA-Z]/;
function Q4(e, t, n) {
  var f, u, h, p, y, m, b, C;
  const r = fa(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Pc, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((C = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : C.weekStartsOn) ?? 0, i = De(e, n == null ? void 0 : n.in);
  if (!ZP(i))
    throw new RangeError("Invalid time value");
  let c = t.match(U4).map((x) => {
    const g = x[0];
    if (g === "p" || g === "P") {
      const S = L4[g];
      return S(x, o.formatLong);
    }
    return x;
  }).join("").match(K4).map((x) => {
    if (x === "''")
      return { isToken: !1, value: "'" };
    const g = x[0];
    if (g === "'")
      return { isToken: !1, value: J4(x) };
    if (Xh[g])
      return { isToken: !0, value: x };
    if (g.match(Z4))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: x };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((x) => {
    if (!x.isToken) return x.value;
    const g = x.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && H4(g) || !(n != null && n.useAdditionalDayOfYearTokens) && B4(g)) && G4(g, t, String(e));
    const S = Xh[g[0]];
    return S(i, g, o.localize, l);
  }).join("");
}
function J4(e) {
  const t = e.match(q4);
  return t ? t[1].replace(X4, "'") : e;
}
function eA(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), s = rt(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function tA(e, t) {
  return De(e, t == null ? void 0 : t.in).getMonth();
}
function nA(e, t) {
  return De(e, t == null ? void 0 : t.in).getFullYear();
}
function rA(e, t) {
  return +De(e) > +De(t);
}
function oA(e, t) {
  return +De(e) < +De(t);
}
function sA(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function aA(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function iA(e, t, n) {
  const r = De(e, n == null ? void 0 : n.in), o = r.getFullYear(), s = r.getDate(), a = rt(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = eA(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function cA(e, t, n) {
  const r = De(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? rt(e, NaN) : (r.setFullYear(t), r);
}
const ep = 5, lA = 4;
function dA(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, ep * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? ep : lA;
}
function Db(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function uA(e, t) {
  const n = Db(e, t), r = dA(e, t);
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
      return (s = this.overrides) != null && s.addDays ? this.overrides.addDays(r, o) : wb(r, o);
    }, this.addMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addMonths ? this.overrides.addMonths(r, o) : Cb(r, o);
    }, this.addWeeks = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addWeeks ? this.overrides.addWeeks(r, o) : YP(r, o);
    }, this.addYears = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addYears ? this.overrides.addYears(r, o) : KP(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : _b(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : QP(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : t4(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : uA(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : o4(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : JP(r);
    }, this.endOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.endOfWeek ? this.overrides.endOfWeek(r, o) : Mb(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : r4(r);
    }, this.format = (r, o, s) => {
      var i;
      const a = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Q4(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Pb(r);
    }, this.getMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getMonth ? this.overrides.getMonth(r, this.options) : tA(r, this.options);
    }, this.getYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getYear ? this.overrides.getYear(r, this.options) : nA(r, this.options);
    }, this.getWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getWeek ? this.overrides.getWeek(r, this.options) : Rb(r, this.options);
    }, this.isAfter = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isAfter ? this.overrides.isAfter(r, o) : rA(r, o);
    }, this.isBefore = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isBefore ? this.overrides.isBefore(r, o) : oA(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : kb(r);
    }, this.isSameDay = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameDay ? this.overrides.isSameDay(r, o) : XP(r, o);
    }, this.isSameMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameMonth ? this.overrides.isSameMonth(r, o) : sA(r, o);
    }, this.isSameYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameYear ? this.overrides.isSameYear(r, o) : aA(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : UP(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : qP(r);
    }, this.setMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setMonth ? this.overrides.setMonth(r, o) : iA(r, o);
    }, this.setYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setYear ? this.overrides.setYear(r, o) : cA(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Db(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Vs(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Fs(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : n4(r);
    }, this.startOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfWeek ? this.overrides.startOfWeek(r, this.options) : _o(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Eb(r);
    }, this.options = { locale: Pc, ...t }, this.overrides = n;
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
const Pn = new Vt();
class Ib {
  constructor(t, n, r = Pn) {
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
class fA {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class hA {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function pA(e) {
  return _.createElement("button", { ...e });
}
function mA(e) {
  return _.createElement("span", { ...e });
}
function vA(e) {
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
function gA(e) {
  const { day: t, modifiers: n, ...r } = e;
  return _.createElement("td", { ...r });
}
function yA(e) {
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
var rn;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(rn || (rn = {}));
var Tt;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Tt || (Tt = {}));
function bA(e) {
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
function xA(e) {
  return _.createElement("div", { ...e });
}
function wA(e) {
  return _.createElement("div", { ...e });
}
function CA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r }, e.children);
}
function SA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r });
}
function _A(e) {
  return _.createElement("table", { ...e });
}
function kA(e) {
  return _.createElement("div", { ...e });
}
const jb = Qs(void 0);
function ha() {
  const e = Is(jb);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function EA(e) {
  const { components: t } = ha();
  return _.createElement(t.Dropdown, { ...e });
}
function MA(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: l } } = ha(), f = ke((h) => {
    o && (n == null || n(h));
  }, [o, n]), u = ke((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return _.createElement(
    "nav",
    { ...s },
    _.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[fe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: u },
      _.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[fe.Chevron], orientation: "left" })
    ),
    _.createElement(
      a.NextMonthButton,
      { type: "button", className: i[fe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      _.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[fe.Chevron] })
    )
  );
}
function NA(e) {
  const { components: t } = ha();
  return _.createElement(t.Button, { ...e });
}
function PA(e) {
  return _.createElement("option", { ...e });
}
function AA(e) {
  const { components: t } = ha();
  return _.createElement(t.Button, { ...e });
}
function RA(e) {
  const { rootRef: t, ...n } = e;
  return _.createElement("div", { ...n, ref: t });
}
function OA(e) {
  return _.createElement("select", { ...e });
}
function DA(e) {
  const { week: t, ...n } = e;
  return _.createElement("tr", { ...n });
}
function IA(e) {
  return _.createElement("th", { ...e });
}
function jA(e) {
  return _.createElement(
    "thead",
    { "aria-hidden": !0 },
    _.createElement("tr", { ...e })
  );
}
function TA(e) {
  const { week: t, ...n } = e;
  return _.createElement("th", { ...n });
}
function $A(e) {
  return _.createElement("th", { ...e });
}
function WA(e) {
  return _.createElement("tbody", { ...e });
}
function LA(e) {
  const { components: t } = ha();
  return _.createElement(t.Dropdown, { ...e });
}
const FA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: pA,
  CaptionLabel: mA,
  Chevron: vA,
  Day: gA,
  DayButton: yA,
  Dropdown: bA,
  DropdownNav: xA,
  Footer: wA,
  Month: CA,
  MonthCaption: SA,
  MonthGrid: _A,
  Months: kA,
  MonthsDropdown: EA,
  Nav: MA,
  NextMonthButton: NA,
  Option: PA,
  PreviousMonthButton: AA,
  Root: RA,
  Select: OA,
  Week: DA,
  WeekNumber: TA,
  WeekNumberHeader: $A,
  Weekday: IA,
  Weekdays: jA,
  Weeks: WA,
  YearsDropdown: LA
}, Symbol.toStringTag, { value: "Module" }));
function $n(e, t, n = !1, r = Pn) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function Tb(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Vu(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function $b(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Wb(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Lb(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Fb(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Wn(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Fb(i, n))
      return i.includes(e);
    if (Vu(i))
      return $n(i, e, !1, n);
    if (Lb(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Tb(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, u = l < 0;
      return a(i.before, i.after) ? u && f : f || u;
    }
    return $b(i) ? s(e, i.after) > 0 : Wb(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function VA(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f } = t, { isSameDay: u, isSameMonth: h, startOfMonth: p, isBefore: y, endOfMonth: m, isAfter: b } = o, C = n && p(n), x = r && m(r), g = {
    [Fe.focused]: [],
    [Fe.outside]: [],
    [Fe.disabled]: [],
    [Fe.hidden]: [],
    [Fe.today]: []
  }, S = {};
  for (const w of e) {
    const { date: k, displayMonth: E } = w, M = !!(E && !h(k, E)), P = !!(C && y(k, C)), O = !!(x && b(k, x)), I = !!(s && Wn(k, s, o)), D = !!(a && Wn(k, a, o)) || P || O || // Broadcast calendar will show outside days as default
    !l && !c && M || l && c === !1 && M, L = u(k, f ?? o.today());
    M && g.outside.push(w), I && g.disabled.push(w), D && g.hidden.push(w), L && g.today.push(w), i && Object.keys(i).forEach((j) => {
      const B = i == null ? void 0 : i[j];
      B && Wn(k, B, o) && (S[j] ? S[j].push(w) : S[j] = [w]);
    });
  }
  return (w) => {
    const k = {
      [Fe.focused]: !1,
      [Fe.disabled]: !1,
      [Fe.hidden]: !1,
      [Fe.outside]: !1,
      [Fe.today]: !1
    }, E = {};
    for (const M in g) {
      const P = g[M];
      k[M] = P.some((O) => O === w);
    }
    for (const M in S)
      E[M] = S[M].some((P) => P === w);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function zA(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[Fe[s]] ? o.push(t[Fe[s]]) : t[rn[s]] && o.push(t[rn[s]]), o), [t[fe.Day]]);
}
function BA(e) {
  return {
    ...FA,
    ...e
  };
}
function HA(e) {
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
function Vb() {
  const e = {};
  for (const t in fe)
    e[fe[t]] = `rdp-${fe[t]}`;
  for (const t in Fe)
    e[Fe[t]] = `rdp-${Fe[t]}`;
  for (const t in rn)
    e[rn[t]] = `rdp-${rn[t]}`;
  for (const t in Tt)
    e[Tt[t]] = `rdp-${Tt[t]}`;
  return e;
}
function zb(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const GA = zb;
function YA(e, t, n) {
  return (n ?? new Vt(t)).format(e, "d");
}
function KA(e, t = Pn) {
  return t.format(e, "LLLL");
}
function UA(e, t, n) {
  return (n ?? new Vt(t)).format(e, "cccccc");
}
function qA(e, t = Pn) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function XA() {
  return "";
}
function Bb(e, t = Pn) {
  return t.format(e, "yyyy");
}
const ZA = Bb, QA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: zb,
  formatDay: YA,
  formatMonthCaption: GA,
  formatMonthDropdown: KA,
  formatWeekNumber: qA,
  formatWeekNumberHeader: XA,
  formatWeekdayName: UA,
  formatYearCaption: ZA,
  formatYearDropdown: Bb
}, Symbol.toStringTag, { value: "Module" }));
function JA(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...QA,
    ...e
  };
}
function eR(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), y = l(h), m = t && h < s(t) || n && h > s(n) || !1;
    return { value: y, label: p, disabled: m };
  });
}
function tR(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[fe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function nR(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), s = [];
  for (let a = 0; a < 7; a++) {
    const i = e.addDays(o, a);
    s.push(i);
  }
  return s;
}
function rR(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, addYears: i, getYear: c, isBefore: l, isSameYear: f } = r, u = s(e), h = a(t), p = [];
  let y = u;
  for (; l(y, h) || f(y, h); )
    p.push(y), y = i(y, 1);
  return o && p.reverse(), p.map((m) => {
    const b = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: b,
      disabled: !1
    };
  });
}
function Hb(e, t, n, r) {
  let o = (r ?? new Vt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const oR = Hb;
function Gb(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const sR = Gb;
function aR(e, t, n, r) {
  let o = (r ?? new Vt(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function iR(e) {
  return "Choose the Month";
}
function cR() {
  return "";
}
function lR(e) {
  return "Go to the Next Month";
}
function dR(e) {
  return "Go to the Previous Month";
}
function uR(e, t, n) {
  return (n ?? new Vt(t)).format(e, "cccc");
}
function fR(e, t) {
  return `Week ${e}`;
}
function hR(e) {
  return "Week Number";
}
function pR(e) {
  return "Choose the Year";
}
const mR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: sR,
  labelDay: oR,
  labelDayButton: Hb,
  labelGrid: Gb,
  labelGridcell: aR,
  labelMonthDropdown: iR,
  labelNav: cR,
  labelNext: lR,
  labelPrevious: dR,
  labelWeekNumber: fR,
  labelWeekNumberHeader: hR,
  labelWeekday: uR,
  labelYearDropdown: pR
}, Symbol.toStringTag, { value: "Module" })), pa = (e) => e instanceof HTMLElement ? e : null, fl = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], vR = (e) => pa(e.querySelector("[data-animated-month]")), hl = (e) => pa(e.querySelector("[data-animated-caption]")), pl = (e) => pa(e.querySelector("[data-animated-weeks]")), gR = (e) => pa(e.querySelector("[data-animated-nav]")), yR = (e) => pa(e.querySelector("[data-animated-weekdays]"));
function bR(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = ct(null), i = ct(r), c = ct(!1);
  Kd(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), u = s.isAfter(r[0].date, l[0].date), h = u ? n[Tt.caption_after_enter] : n[Tt.caption_before_enter], p = u ? n[Tt.weeks_after_enter] : n[Tt.weeks_before_enter], y = a.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (fl(m).forEach((g) => {
      if (!(g instanceof HTMLElement))
        return;
      const S = vR(g);
      S && g.contains(S) && g.removeChild(S);
      const w = hl(g);
      w && w.classList.remove(h);
      const k = pl(g);
      k && k.classList.remove(p);
    }), a.current = m) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = y instanceof HTMLElement ? fl(y) : [], C = fl(e.current);
    if (C != null && C.every((x) => x instanceof HTMLElement) && b && b.every((x) => x instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const x = gR(e.current);
      x && (x.style.zIndex = "1"), C.forEach((g, S) => {
        const w = b[S];
        if (!w)
          return;
        g.style.position = "relative", g.style.overflow = "hidden";
        const k = hl(g);
        k && k.classList.add(h);
        const E = pl(g);
        E && E.classList.add(p);
        const M = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), k && k.classList.remove(h), E && E.classList.remove(p), g.style.position = "", g.style.overflow = "", g.contains(w) && g.removeChild(w);
        };
        w.style.pointerEvents = "none", w.style.position = "absolute", w.style.overflow = "hidden", w.setAttribute("aria-hidden", "true");
        const P = yR(w);
        P && (P.style.opacity = "0");
        const O = hl(w);
        O && (O.classList.add(u ? n[Tt.caption_before_exit] : n[Tt.caption_after_exit]), O.addEventListener("animationend", M));
        const I = pl(w);
        I && I.classList.add(u ? n[Tt.weeks_before_exit] : n[Tt.weeks_after_exit]), g.insertBefore(w, g.firstChild);
      });
    }
  });
}
function xR(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: u, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: y, endOfWeek: m, isAfter: b, startOfBroadcastWeek: C, startOfISOWeek: x, startOfWeek: g } = r, S = c ? C(o, r) : a ? x(o) : g(o), w = c ? h(s) : a ? p(y(s)) : m(y(s)), k = f(w, S), E = u(s, o) + 1, M = [];
  for (let I = 0; I <= k; I++) {
    const D = l(S, I);
    if (t && b(D, t))
      break;
    M.push(D);
  }
  const O = (c ? 35 : 42) * E;
  if (i && M.length < O) {
    const I = O - M.length;
    for (let D = 0; D < I; D++) {
      const L = l(M[M.length - 1], 1);
      M.push(L);
    }
  }
  return M;
}
function wR(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function CR(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function tp(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: u } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), u(c);
}
function SR(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: u, startOfISOWeek: h, startOfWeek: p } = r, y = e.reduce((m, b) => {
    const C = n.broadcastCalendar ? u(b, r) : n.ISOWeek ? h(b) : p(b), x = n.broadcastCalendar ? s(b) : n.ISOWeek ? a(i(b)) : c(i(b)), g = t.filter((E) => E >= C && E <= x), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && g.length < S) {
      const E = t.filter((M) => {
        const P = S - g.length;
        return M > x && M <= o(x, P);
      });
      g.push(...E);
    }
    const w = g.reduce((E, M) => {
      const P = n.ISOWeek ? l(M) : f(M), O = E.find((D) => D.weekNumber === P), I = new Ib(M, b, r);
      return O ? O.days.push(I) : E.push(new hA(P, [I])), E;
    }, []), k = new fA(b, w);
    return m.push(k), m;
  }, []);
  return n.reverseMonths ? y.reverse() : y;
}
function _R(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: u } = t, { fromYear: h, toYear: p, fromMonth: y, toMonth: m } = e;
  !n && y && (n = y), !n && h && (n = t.newDate(h, 0, 1)), !r && m && (r = m), !r && p && (r = f(p, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && b && (n = o(c(e.today ?? u(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && b && (r = l(e.today ?? u())), [
    n && s(n),
    r && s(r)
  ];
}
function kR(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s : 1, f = a(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < s))
    return i(f, l);
}
function ER(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -l);
  if (!(c(f, t) <= 0))
    return i(f, -l);
}
function MR(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Ac(e, t) {
  const [n, r] = tt(e);
  return [t === void 0 ? n : t, r];
}
function NR(e, t) {
  const [n, r] = _R(e, t), { startOfMonth: o, endOfMonth: s } = t, a = tp(e, n, r, t), [i, c] = Ac(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  on(() => {
    const k = tp(e, n, r, t);
    c(k);
  }, [e.timeZone]);
  const l = CR(i, r, e, t), f = xR(l, e.endMonth ? s(e.endMonth) : void 0, e, t), u = SR(l, f, e, t), h = MR(u), p = wR(u), y = ER(i, n, e, t), m = kR(i, r, e, t), { disableNavigation: b, onMonthChange: C } = e, x = (k) => h.some((E) => E.days.some((M) => M.isEqualTo(k))), g = (k) => {
    if (b)
      return;
    let E = o(k);
    n && E < o(n) && (E = o(n)), r && E > o(r) && (E = o(r)), c(E), C == null || C(E);
  };
  return {
    months: u,
    weeks: h,
    days: p,
    navStart: n,
    navEnd: r,
    previousMonth: y,
    nextMonth: m,
    goToMonth: g,
    goToDay: (k) => {
      x(k) || g(k.date);
    }
  };
}
var pn;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(pn || (pn = {}));
function np(e) {
  return !e[Fe.disabled] && !e[Fe.hidden] && !e[Fe.outside];
}
function PR(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    np(i) && (i[Fe.focused] && s < pn.FocusedModifier ? (o = a, s = pn.FocusedModifier) : r != null && r.isEqualTo(a) && s < pn.LastFocused ? (o = a, s = pn.LastFocused) : n(a.date) && s < pn.Selected ? (o = a, s = pn.Selected) : i[Fe.today] && s < pn.Today && (o = a, s = pn.Today));
  }
  return o || (o = e.find((a) => np(t(a)))), o;
}
function AR(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: u, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: y, endOfWeek: m, max: b, min: C, startOfBroadcastWeek: x, startOfISOWeek: g, startOfWeek: S } = a;
  let k = {
    day: l,
    week: u,
    month: f,
    year: h,
    startOfWeek: (E) => c ? x(E, a) : i ? g(E) : S(E),
    endOfWeek: (E) => c ? p(E) : i ? y(E) : m(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = b([r, k]) : t === "after" && o && (k = C([o, k])), k;
}
function Yb(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = AR(e, t, n.date, r, o, s, a), l = !!(s.disabled && Wn(c, s.disabled, a)), f = !!(s.hidden && Wn(c, s.hidden, a)), u = c, h = new Ib(c, u, a);
  return !l && !f ? h : Yb(e, t, h, r, o, s, a, i + 1);
}
function RR(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = tt(), c = PR(t.days, n, r || (() => !1), a), [l, f] = tt(s ? c : void 0);
  return {
    isFocusTarget: (m) => !!(c != null && c.isEqualTo(m)),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (m, b) => {
      if (!l)
        return;
      const C = Yb(m, b, l, t.navStart, t.navEnd, e, o);
      C && (t.goToDay(C), f(C));
    }
  };
}
function OR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ac(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((y) => c(y, p))) ?? !1, { min: f, max: u } = e;
  return {
    selected: i,
    select: (p, y, m) => {
      let b = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        b = i == null ? void 0 : i.filter((C) => !c(C, p));
      } else
        (i == null ? void 0 : i.length) === u ? b = [p] : b = [...b, p];
      return o || a(b), o == null || o(b, p, y, m), b;
    },
    isSelected: l
  };
}
function DR(e, t, n = 0, r = 0, o = !1, s = Pn) {
  const { from: a, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: f } = s;
  let u;
  if (!a && !i)
    u = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !i)
    c(a, e) ? n === 0 ? u = { from: a, to: e } : o ? u = { from: a, to: void 0 } : u = void 0 : f(e, a) ? u = { from: e, to: a } : u = { from: a, to: e };
  else if (a && i)
    if (c(a, e) && c(i, e))
      o ? u = { from: a, to: i } : u = void 0;
    else if (c(a, e))
      u = { from: a, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      u = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, a))
      u = { from: e, to: i };
    else if (l(e, a))
      u = { from: a, to: e };
    else if (l(e, i))
      u = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (u != null && u.from && (u != null && u.to)) {
    const h = s.differenceInCalendarDays(u.to, u.from);
    r > 0 && h > r ? u = { from: e, to: void 0 } : n > 1 && h < n && (u = { from: e, to: void 0 });
  }
  return u;
}
function IR(e, t, n = Pn) {
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
function rp(e, t, n = Pn) {
  return $n(e, t.from, !1, n) || $n(e, t.to, !1, n) || $n(t, e.from, !1, n) || $n(t, e.to, !1, n);
}
function jR(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? $n(e, i, !1, n) : Fb(i, n) ? i.some((c) => $n(e, c, !1, n)) : Vu(i) ? i.from && i.to ? rp(e, { from: i.from, to: i.to }, n) : !1 : Lb(i) ? IR(e, i.dayOfWeek, n) : Tb(i) ? n.isAfter(i.before, i.after) ? rp(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Wn(e.from, i, n) || Wn(e.to, i, n) : $b(i) || Wb(i) ? Wn(e.from, i, n) || Wn(e.to, i, n) : !1))
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
function TR(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Ac(o, a ? o : void 0), l = a ? o : i;
  return {
    selected: l,
    select: (h, p, y) => {
      const { min: m, max: b } = e, C = h ? DR(h, l, m, b, s, t) : void 0;
      return r && n && (C != null && C.from) && C.to && jR({ from: C.from, to: C.to }, n, t) && (C.from = h, C.to = void 0), a || c(C), a == null || a(C, h, p, y), C;
    },
    isSelected: (h) => l && $n(l, h, !1, t)
  };
}
function $R(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ac(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (u, h, p) => {
      let y = u;
      return !r && i && i && c(u, i) && (y = void 0), o || a(y), o == null || o(y, u, h, p), y;
    },
    isSelected: (u) => i ? c(i, u) : !1
  };
}
function WR(e, t) {
  const n = $R(e, t), r = OR(e, t), o = TR(e, t);
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
function LR(e) {
  var Q;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new xt(t.today, t.timeZone)), t.month && (t.month = new xt(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new xt(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new xt(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new xt(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new xt(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Q = t.selected) == null ? void 0 : Q.map((G) => new xt(G, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new xt(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new xt(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: s, locale: a, classNames: i } = po(() => {
    const G = { ...Pc, ...t.locale };
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
      components: BA(t.components),
      formatters: JA(t.formatters),
      labels: { ...mR, ...t.labels },
      locale: G,
      classNames: { ...Vb(), ...t.classNames }
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
  ]), { captionLayout: c, mode: l, navLayout: f, numberOfMonths: u = 1, onDayBlur: h, onDayClick: p, onDayFocus: y, onDayKeyDown: m, onDayMouseEnter: b, onDayMouseLeave: C, onNextClick: x, onPrevClick: g, showWeekNumber: S, styles: w } = t, { formatCaption: k, formatDay: E, formatMonthDropdown: M, formatWeekNumber: P, formatWeekNumberHeader: O, formatWeekdayName: I, formatYearDropdown: D } = r, L = NR(t, s), { days: j, months: B, navStart: V, navEnd: Y, previousMonth: T, nextMonth: W, goToMonth: oe } = L, A = VA(j, t, V, Y, s), { isSelected: N, select: F, selected: z } = WR(t, s) ?? {}, { blur: Z, focused: q, isFocusTarget: $, moveFocus: J, setFocused: re } = RR(t, L, A, N ?? (() => !1), s), { labelDayButton: de, labelGridcell: me, labelGrid: ge, labelMonthDropdown: Se, labelNav: Ie, labelPrevious: Te, labelNext: ut, labelWeekday: Xe, labelWeekNumber: ot, labelWeekNumberHeader: vt, labelYearDropdown: We } = o, Ge = po(() => nR(s, t.ISOWeek), [s, t.ISOWeek]), Qe = l !== void 0 || p !== void 0, Dt = ke(() => {
    T && (oe(T), g == null || g(T));
  }, [T, oe, g]), Nt = ke(() => {
    W && (oe(W), x == null || x(W));
  }, [oe, W, x]), ve = ke((G, ce) => (U) => {
    U.preventDefault(), U.stopPropagation(), re(G), F == null || F(G.date, ce, U), p == null || p(G.date, ce, U);
  }, [F, p, re]), Zt = ke((G, ce) => (U) => {
    re(G), y == null || y(G.date, ce, U);
  }, [y, re]), It = ke((G, ce) => (U) => {
    Z(), h == null || h(G.date, ce, U);
  }, [Z, h]), fn = ke((G, ce) => (U) => {
    const ie = {
      ArrowLeft: [
        U.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        U.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [U.shiftKey ? "year" : "week", "after"],
      ArrowUp: [U.shiftKey ? "year" : "week", "before"],
      PageUp: [U.shiftKey ? "year" : "month", "before"],
      PageDown: [U.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ie[U.key]) {
      U.preventDefault(), U.stopPropagation();
      const [he, le] = ie[U.key];
      J(he, le);
    }
    m == null || m(G.date, ce, U);
  }, [J, m, t.dir]), hn = ke((G, ce) => (U) => {
    b == null || b(G.date, ce, U);
  }, [b]), Rn = ke((G, ce) => (U) => {
    C == null || C(G.date, ce, U);
  }, [C]), Qt = ke((G) => (ce) => {
    const U = Number(ce.target.value), ie = s.setMonth(s.startOfMonth(G), U);
    oe(ie);
  }, [s, oe]), Jt = ke((G) => (ce) => {
    const U = Number(ce.target.value), ie = s.setYear(s.startOfMonth(G), U);
    oe(ie);
  }, [s, oe]), { className: On, style: Pt } = po(() => ({
    className: [i[fe.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[fe.Root], ...t.style }
  }), [i, t.className, t.style, w]), st = HA(t), H = ct(null);
  bR(H, !!t.animate, {
    classNames: i,
    months: B,
    focused: q,
    dateLib: s
  });
  const ee = {
    dayPickerProps: t,
    selected: z,
    select: F,
    isSelected: N,
    months: B,
    nextMonth: W,
    previousMonth: T,
    goToMonth: oe,
    getModifiers: A,
    components: n,
    classNames: i,
    styles: w,
    labels: o,
    formatters: r
  };
  return _.createElement(
    jb.Provider,
    { value: ee },
    _.createElement(
      n.Root,
      { rootRef: t.animate ? H : void 0, className: On, style: Pt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...st },
      _.createElement(
        n.Months,
        { className: i[fe.Months], style: w == null ? void 0 : w[fe.Months] },
        !t.hideNavigation && !f && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Nt, previousMonth: T, nextMonth: W }),
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
            { type: "button", className: i[fe.PreviousMonthButton], tabIndex: T ? void 0 : -1, "aria-disabled": T ? void 0 : !0, "aria-label": Te(T), onClick: Dt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: T ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          _.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[fe.MonthCaption], style: w == null ? void 0 : w[fe.MonthCaption], calendarMonth: G, displayIndex: ce }, c != null && c.startsWith("dropdown") ? _.createElement(
            n.DropdownNav,
            { className: i[fe.Dropdowns], style: w == null ? void 0 : w[fe.Dropdowns] },
            (() => {
              const U = c === "dropdown" || c === "dropdown-months" ? _.createElement(n.MonthsDropdown, { key: "month", className: i[fe.MonthsDropdown], "aria-label": Se(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Qt(G.date), options: eR(G.date, V, Y, r, s), style: w == null ? void 0 : w[fe.Dropdown], value: s.getMonth(G.date) }) : _.createElement("span", { key: "month" }, M(G.date, s)), ie = c === "dropdown" || c === "dropdown-years" ? _.createElement(n.YearsDropdown, { key: "year", className: i[fe.YearsDropdown], "aria-label": We(s.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Jt(G.date), options: rR(V, Y, r, s, !!t.reverseYears), style: w == null ? void 0 : w[fe.Dropdown], value: s.getYear(G.date) }) : _.createElement("span", { key: "year" }, D(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [ie, U] : [U, ie];
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
            } }, k(G.date, s.options, s))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            _.createElement(n.CaptionLabel, { className: i[fe.CaptionLabel], role: "status", "aria-live": "polite" }, k(G.date, s.options, s))
          )),
          f === "around" && !t.hideNavigation && ce === u - 1 && _.createElement(
            n.NextMonthButton,
            { type: "button", className: i[fe.NextMonthButton], tabIndex: W ? void 0 : -1, "aria-disabled": W ? void 0 : !0, "aria-label": ut(W), onClick: Nt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: W ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === u - 1 && f === "after" && !t.hideNavigation && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Nt, previousMonth: T, nextMonth: W }),
          _.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": ge(G.date, s.options, s) || void 0, className: i[fe.MonthGrid], style: w == null ? void 0 : w[fe.MonthGrid] },
            !t.hideWeekdays && _.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[fe.Weekdays], style: w == null ? void 0 : w[fe.Weekdays] },
              S && _.createElement(n.WeekNumberHeader, { "aria-label": vt(s.options), className: i[fe.WeekNumberHeader], style: w == null ? void 0 : w[fe.WeekNumberHeader], scope: "col" }, O()),
              Ge.map((U) => _.createElement(n.Weekday, { "aria-label": Xe(U, s.options, s), className: i[fe.Weekday], key: String(U), style: w == null ? void 0 : w[fe.Weekday], scope: "col" }, I(U, s.options, s)))
            ),
            _.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[fe.Weeks], style: w == null ? void 0 : w[fe.Weeks] }, G.weeks.map((U) => _.createElement(
              n.Week,
              { className: i[fe.Week], key: U.weekNumber, style: w == null ? void 0 : w[fe.Week], week: U },
              S && // biome-ignore lint/a11y/useSemanticElements: react component
              _.createElement(n.WeekNumber, { week: U, style: w == null ? void 0 : w[fe.WeekNumber], "aria-label": ot(U.weekNumber, {
                locale: a
              }), className: i[fe.WeekNumber], scope: "row", role: "rowheader" }, P(U.weekNumber, s)),
              U.days.map((ie) => {
                const { date: he } = ie, le = A(ie);
                if (le[Fe.focused] = !le.hidden && !!(q != null && q.isEqualTo(ie)), le[rn.selected] = (N == null ? void 0 : N(he)) || le.selected, Vu(z)) {
                  const { from: ft, to: Ye } = z;
                  le[rn.range_start] = !!(ft && Ye && s.isSameDay(he, ft)), le[rn.range_end] = !!(ft && Ye && s.isSameDay(he, Ye)), le[rn.range_middle] = $n(z, he, !0, s);
                }
                const Ve = tR(le, w, t.modifiersStyles), jt = zA(le, i, t.modifiersClassNames), en = !Qe && !le.hidden ? me(he, le, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  _.createElement(n.Day, { key: `${s.format(he, "yyyy-MM-dd")}_${s.format(ie.displayMonth, "yyyy-MM")}`, day: ie, modifiers: le, className: jt.join(" "), style: Ve, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": en, "data-day": s.format(he, "yyyy-MM-dd"), "data-month": ie.outside ? s.format(he, "yyyy-MM") : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": ie.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && Qe ? _.createElement(n.DayButton, { className: i[fe.DayButton], style: w == null ? void 0 : w[fe.DayButton], type: "button", day: ie, modifiers: le, disabled: le.disabled || void 0, tabIndex: $(ie) ? 0 : -1, "aria-label": de(he, le, s.options, s), onClick: ve(ie, le), onBlur: It(ie, le), onFocus: Zt(ie, le), onKeyDown: fn(ie, le), onMouseEnter: hn(ie, le), onMouseLeave: Rn(ie, le) }, E(he, s.options, s)) : !le.hidden && E(ie.date, s.options, s))
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
const FR = {
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
}, VR = (e, t, n) => {
  n = n || {};
  let r;
  const o = FR[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, zR = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, BR = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, HR = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, GR = {
  date: go({
    formats: zR,
    defaultWidth: "full"
  }),
  time: go({
    formats: BR,
    defaultWidth: "full"
  }),
  dateTime: go({
    formats: HR,
    defaultWidth: "full"
  })
}, YR = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, KR = (e, t, n, r) => YR[e], UR = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, qR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, XR = {
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
}, ZR = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, QR = {
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
}, JR = {
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
}, eO = (e, t) => {
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
}, tO = {
  ordinalNumber: eO,
  era: yn({
    values: UR,
    defaultWidth: "wide"
  }),
  quarter: yn({
    values: qR,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: yn({
    values: XR,
    defaultWidth: "wide"
  }),
  day: yn({
    values: ZR,
    defaultWidth: "wide"
  }),
  dayPeriod: yn({
    values: QR,
    defaultWidth: "wide",
    formattingValues: JR,
    defaultFormattingWidth: "wide"
  })
}, nO = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, rO = /\d+/i, oO = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, sO = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, aO = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, iO = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, cO = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, lO = {
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
}, dO = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, uO = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, fO = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, hO = {
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
}, pO = {
  ordinalNumber: Nb({
    matchPattern: nO,
    parsePattern: rO,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: bn({
    matchPatterns: oO,
    defaultMatchWidth: "wide",
    parsePatterns: sO,
    defaultParseWidth: "any"
  }),
  quarter: bn({
    matchPatterns: aO,
    defaultMatchWidth: "wide",
    parsePatterns: iO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: bn({
    matchPatterns: cO,
    defaultMatchWidth: "wide",
    parsePatterns: lO,
    defaultParseWidth: "any"
  }),
  day: bn({
    matchPatterns: dO,
    defaultMatchWidth: "wide",
    parsePatterns: uO,
    defaultParseWidth: "any"
  }),
  dayPeriod: bn({
    matchPatterns: fO,
    defaultMatchWidth: "any",
    parsePatterns: hO,
    defaultParseWidth: "any"
  })
}, mO = {
  code: "ja",
  formatDistance: VR,
  formatLong: GR,
  formatRelative: KR,
  localize: tO,
  match: pO,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, vO = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Ba = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Kb = _.forwardRef(
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
    locale: u = "ja",
    ...h
  }, p) => {
    const [y, m] = _.useState(
      () => Ba(n || null)
    ), b = e !== void 0, C = b ? Ba(e) : y, x = _.useMemo(
      () => Ba(r || null),
      [r]
    ), g = _.useMemo(
      () => Ba(o || null),
      [o]
    ), S = _.useMemo(() => !x || !g ? !0 : x <= g, [x, g]), w = _.useMemo(() => {
      if (g) return g;
      const E = /* @__PURE__ */ new Date();
      return new Date(E.getFullYear() + 10, 11, 31);
    }, [g]), k = (E) => {
      const M = E || null;
      b || m(M), t == null || t(M);
    };
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: p,
        className: R(vO(f), a),
        ...h,
        children: /* @__PURE__ */ d.jsx(
          LR,
          {
            animate: !1,
            mode: "single",
            selected: C || void 0,
            onSelect: k,
            locale: u === "ja" ? mO : Pc,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (E) => `${E.getFullYear()}${u === "ja" ? "年" : ""}`
            },
            disabled: S ? [
              ...x ? [{ before: x }] : [],
              ...g ? [{ after: g }] : [],
              ...s ? [{ before: /* @__PURE__ */ new Date("3000-01-01") }] : []
            ] : [
              {
                before: /* @__PURE__ */ new Date("1900-01-01"),
                after: /* @__PURE__ */ new Date("1899-12-31")
              }
            ],
            ...x ? { startMonth: x } : {},
            endMonth: w,
            showOutsideDays: i,
            fixedWeeks: c,
            defaultMonth: l || C || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const E = Vb(), M = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${E.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
                button_previous: `${M} flex items-center justify-center`,
                button_next: `${M} flex items-center justify-center`,
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
Kb.displayName = "Calendar";
const op = pe(
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
), gO = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, zs = _.forwardRef(
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
    const f = r ? jr : "a", h = gO[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ d.jsx(
      f,
      {
        ref: l,
        className: R(
          op({ intent: t, size: n, disabled: o }),
          e
        ),
        ...c,
        children: i
      }
    ) : /* @__PURE__ */ d.jsxs(
      f,
      {
        ref: l,
        className: R(op({ intent: t, size: n, disabled: o }), e),
        ...c,
        children: [
          s && /* @__PURE__ */ d.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: it(s, { size: h }) }),
          i,
          a && /* @__PURE__ */ d.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: it(a, { size: h }) })
        ]
      }
    );
  }
);
zs.displayName = "TextLink";
const yO = pe(
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
), bO = pe("size-5 shrink-0", {
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
}), xO = pe("font-bold text-md", {
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
}), wO = pe(
  "text-body-primary font-normal leading-6 text-md"
), CO = pe("min-w-0 gap-xxxs flex flex-1 flex-col"), SO = {
  info: ni,
  success: rm,
  warning: ni,
  alert: ni,
  paid: B2
}, _O = _.forwardRef(
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
    const l = a || SO[t];
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: c,
        className: R(yO({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ d.jsxs("div", { className: R(CO()), children: [
          n && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: R(bO({ intent: t }), "top-0.5 relative"),
                  children: it(l, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ d.jsx("div", { className: R(xO({ intent: t })), children: n })
            ] }),
            s && (s.href ? /* @__PURE__ */ d.jsx(
              zs,
              {
                href: s.href,
                target: s.target,
                rel: s.rel,
                intent: "primary",
                size: "sm",
                children: s.label
              }
            ) : /* @__PURE__ */ d.jsx(
              zs,
              {
                onClick: s.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ d.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ d.jsx("div", { className: R(wO()), children: o || r })
        ] })
      }
    );
  }
);
_O.displayName = "Callout";
const Ub = _.createContext(!1), kO = pe("grid grid-cols-1", {
  variants: {
    columns: {
      1: "",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4"
    },
    gap: {
      xxxs: "gap-xxxs",
      xxs: "gap-xxs",
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
      xxl: "gap-xxl",
      xxxl: "gap-xxxl"
    }
  }
}), qb = _.forwardRef(
  ({ columns: e = 1, gap: t = "xs", className: n, children: r, ...o }, s) => (
    // WebKit drops the list semantics of a `ul` without list markers
    /* @__PURE__ */ d.jsx(
      "ul",
      {
        ref: s,
        role: "list",
        className: R(kO({ columns: e, gap: t }), n),
        ...o,
        children: /* @__PURE__ */ d.jsx(Ub.Provider, { value: !0, children: r })
      }
    )
  )
);
qb.displayName = "Card.List";
const EO = pe(
  `bg-surface-primary border-surface-default text-body-primary px-md py-sm
  gap-xxs rounded-lg min-w-0 flex w-full flex-col border text-start`,
  {
    variants: {
      interactive: {
        true: `hover:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active
        focus-visible:ring-interactive-focused cursor-pointer transition-colors
        focus-visible:ring-4 focus-visible:outline-none`
      }
    }
  }
), es = (e) => e != null && e !== !1 && e !== !0 && e !== "", Ha = (e, ...t) => t.some((n) => (e == null ? void 0 : e[n]) !== void 0), Xb = _.forwardRef(
  ({
    asChild: e = !1,
    children: t,
    interactive: n = e,
    status: r,
    trailing: o,
    title: s,
    content: a,
    className: i,
    ...c
  }, l) => {
    const f = _.useContext(Ub), u = _.useId(), h = `${u}-title`, p = `${u}-top`, y = `${u}-content`, m = e ? jr : "div", b = t == null ? void 0 : t.props, C = es(r) || es(o), x = es(a), g = e && !Ha(c, "aria-label", "aria-labelledby") && !Ha(b, "aria-label", "aria-labelledby"), S = e && !Ha(c, "aria-describedby") && !Ha(b, "aria-describedby") && [C && p, x && y].filter(Boolean).join(" ") || void 0, w = {
      ...g && { "aria-labelledby": h },
      ...S && { "aria-describedby": S }
    }, k = /* @__PURE__ */ d.jsxs(
      m,
      {
        ref: l,
        className: R(
          EO({ interactive: e && n }),
          i
        ),
        ...c,
        children: [
          C && /* @__PURE__ */ d.jsxs(
            "div",
            {
              id: S ? p : void 0,
              "data-slot": "top",
              className: "gap-xs flex items-center",
              children: [
                es(r) && /* @__PURE__ */ d.jsx("div", { "data-slot": "status", className: "max-w-full shrink-0", children: r }),
                es(o) && /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    "data-slot": "trailing",
                    className: `text-body-secondary min-w-0 text-sm leading-normal
                  ms-auto text-end`,
                    children: o
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex flex-col", children: [
            /* @__PURE__ */ d.jsx(
              "div",
              {
                id: g ? h : void 0,
                "data-slot": "title",
                className: "text-md min-w-0 font-bold leading-[1.2] wrap-anywhere",
                children: s
              }
            ),
            x && /* @__PURE__ */ d.jsx(
              "div",
              {
                id: S ? y : void 0,
                "data-slot": "content",
                className: "min-w-0",
                children: a
              }
            )
          ] }),
          e && t && /* @__PURE__ */ d.jsx(am, { children: _.cloneElement(t, w) })
        ]
      }
    );
    return f ? /* @__PURE__ */ d.jsx("li", { className: "flex", children: k }) : k;
  }
);
Xb.displayName = "Card.Item";
const t7 = {
  Item: Xb,
  List: qb
}, MO = pe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), NO = pe(
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
), yo = ({
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
  return /* @__PURE__ */ d.jsxs("div", { className: R(MO({ disabled: e }), a), children: [
    /* @__PURE__ */ d.jsx(
      ev,
      {
        id: c,
        className: R(NO({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ d.jsx(
          nv,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ d.jsx(E2, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ d.jsx(Qp, { style: { strokeWidth: 3 } })
          }
        )
      }
    ),
    (r || s) && /* @__PURE__ */ d.jsxs(
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
yo.displayName = "Checkbox";
const PO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx("div", { className: R("gap-xs flex flex-col", t), children: e });
PO.displayName = "CheckboxGroup";
const AO = pe(
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
), RO = _.forwardRef(
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
    return /* @__PURE__ */ d.jsx(
      "button",
      {
        ref: a,
        type: "button",
        role: "option",
        "aria-selected": e,
        "aria-disabled": t,
        disabled: t,
        className: R(AO({ selected: e, disabled: t }), n),
        onClick: i,
        ...s,
        children: r
      }
    );
  }
);
RO.displayName = "ChoiceChip";
const OO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx("div", { role: "listbox", className: R("gap-xs flex flex-wrap", t), children: e });
OO.displayName = "ChoiceChipGroup";
const DO = (e, t) => {
  const [n, r] = tt(e);
  return on(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, Rc = () => {
  const e = ct(!1), t = ke(() => {
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
};
function IO() {
  const e = ct(null), [t, n] = tt(!1);
  return on(() => {
    const r = e.current;
    if (!r) return;
    const o = () => n(r.scrollWidth > r.clientWidth);
    o();
    const s = new ResizeObserver(o);
    return s.observe(r), () => s.disconnect();
  }, []), { ref: e, isTruncated: t };
}
const sp = 48, ap = (e) => Math.min(1, Math.max(0, e)), Zb = (e) => {
  const [t, n] = _.useState({
    hasOverflow: !1,
    startShadow: 0,
    endShadow: 0
  });
  return _.useEffect(() => {
    const r = e.current;
    if (!r) return;
    let o = 0;
    const s = () => {
      o = 0;
      const { scrollWidth: c, clientWidth: l, scrollLeft: f } = r, u = {
        hasOverflow: c > l,
        startShadow: ap(f / sp),
        endShadow: ap(
          (c - l - f) / sp
        )
      };
      n(
        (h) => h.hasOverflow === u.hasOverflow && h.startShadow === u.startShadow && h.endShadow === u.endShadow ? h : u
      );
    }, a = () => {
      o || (o = requestAnimationFrame(s));
    }, i = new ResizeObserver(a);
    return i.observe(r), Array.from(r.children).forEach((c) => i.observe(c)), r.addEventListener("scroll", a, { passive: !0 }), s(), () => {
      i.disconnect(), r.removeEventListener("scroll", a), o && cancelAnimationFrame(o);
    };
  }, [e]), t;
};
function Qb({
  startShadow: e,
  endShadow: t
}) {
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      "aria-hidden": !0,
      className: `z-slight inset-0 pointer-events-none absolute flex
        justify-between`,
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "bg-scroll-shadow-start w-8",
            style: { opacity: e }
          }
        ),
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: "bg-scroll-shadow-end w-8",
            style: { opacity: t }
          }
        )
      ]
    }
  );
}
const jO = pe(
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
), n7 = BN, Kt = _.forwardRef(
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
    className: u,
    ...h
  }, p) => t ? /* @__PURE__ */ d.jsxs(
    HN,
    {
      ...i !== void 0 && { delayDuration: i },
      ...l !== void 0 && { open: l },
      ...f !== void 0 && { onOpenChange: f },
      ...c !== void 0 && {
        disableHoverableContent: c
      },
      children: [
        /* @__PURE__ */ d.jsx(GN, { asChild: !0, children: e }),
        /* @__PURE__ */ d.jsx(YN, { children: /* @__PURE__ */ d.jsx(
          KN,
          {
            ref: p,
            side: r,
            sideOffset: o,
            align: s,
            ...a !== void 0 && { alignOffset: a },
            className: R(jO({ intent: n }), u),
            ...h,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: e })
);
Kt.displayName = "Tooltip";
const TO = pe("space-y-md w-full", {
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
}), Jb = _.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: o,
      className: R(TO({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
Jb.displayName = "DataSheet";
const $O = pe(
  "px-0 py-xs text-body-primary leading-[1.2]",
  {
    variants: {
      variant: {
        primary: "text-md font-bold",
        table: `text-sm font-bold bg-surface-tertiary px-xs py-xxs
        leading-tight`
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
), ex = _.forwardRef(
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
    const u = a || i || c;
    return /* @__PURE__ */ d.jsxs(
      "header",
      {
        ref: f,
        className: R(
          $O({ variant: t }),
          u && "flex items-center justify-between",
          e
        ),
        ...l,
        children: [
          /* @__PURE__ */ d.jsx("div", { className: R(r && "line-through opacity-60"), children: n }),
          u && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
            a && /* @__PURE__ */ d.jsx(
              Kt,
              {
                content: r ? null : (s == null ? void 0 : s.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: em,
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
            i && !r && /* @__PURE__ */ d.jsx(
              Kt,
              {
                content: (s == null ? void 0 : s.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: nm,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            c && r && /* @__PURE__ */ d.jsx(
              Kt,
              {
                content: (s == null ? void 0 : s.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  He,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: tm,
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
ex.displayName = "DataSheetHeader";
const tx = _.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
    "section",
    {
      ref: r,
      className: R("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
tx.displayName = "DataSheetSection";
const WO = pe("py-sm", {
  variants: {
    orientation: {
      vertical: "gap-xxs flex flex-col",
      horizontal: `px-0 py-0 min-h-11 max-md:gap-xxs max-md:flex-col
      max-md:items-stretch flex items-center`
    },
    spacing: {
      default: "",
      compact: "py-xxs min-h-0 border-none"
    }
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "default", class: "max-md:py-sm" }
  ],
  defaultVariants: {
    orientation: "vertical",
    spacing: "default"
  }
}), LO = pe(
  "font-normal text-body-secondary text-sm",
  {
    variants: {
      orientation: {
        vertical: "leading-none",
        horizontal: `max-md:w-auto max-md:leading-none w-[7.5rem] shrink-0
        leading-[1.5]`
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
), FO = pe(
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
), nx = _.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...s }, a) => {
  const i = _.useId(), c = _.Children.map(o, (l) => {
    if (!_.isValidElement(l)) return l;
    const u = l.props["aria-labelledby"];
    return _.cloneElement(
      l,
      {
        "aria-labelledby": u ? `${u} ${i}` : i
      }
    );
  });
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: a,
      className: R(
        WO({ orientation: n, spacing: r }),
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            id: i,
            className: R(LO({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: R(FO({ orientation: n })), children: c })
      ]
    }
  );
});
nx.displayName = "DataSheetKeyValue";
const VO = {
  actionsColumnParts: 10
}, rx = _.createContext(
  VO
), zO = () => _.useContext(rx), ox = _.createContext({}), sx = () => _.useContext(
  ox
);
function BO({
  className: e,
  children: t,
  onEditRow: n,
  onRemoveRow: r,
  onRestoreRow: o,
  actionsColumnParts: s = 10,
  mobileMinWidth: a = "40rem",
  style: i,
  ...c
}, l) {
  const f = _.useRef(null);
  _.useImperativeHandle(l, () => f.current);
  const { hasOverflow: u, startShadow: h, endShadow: p } = Zb(f), y = _.useMemo(
    () => ({
      actionsColumnParts: s,
      ...n && { onEditRow: n },
      ...r && { onRemoveRow: r },
      ...o && { onRestoreRow: o }
    }),
    [s, n, r, o]
  );
  return /* @__PURE__ */ d.jsx(
    rx.Provider,
    {
      value: y,
      children: /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            ref: f,
            role: "region",
            tabIndex: u ? 0 : void 0,
            className: R(
              `focus-visible:ring-interactive-focused overflow-x-auto
            focus-visible:ring-2 focus-visible:outline-none
            focus-visible:ring-inset`,
              e
            ),
            style: {
              "--cc-data-sheet-table-min-width": a,
              ...i
            },
            ...c,
            children: /* @__PURE__ */ d.jsx(
              "table",
              {
                className: `max-md:min-w-(--cc-data-sheet-table-min-width) w-full
              table-fixed`,
                children: t
              }
            )
          }
        ),
        u && /* @__PURE__ */ d.jsx(Qb, { startShadow: h, endShadow: p })
      ] })
    }
  );
}
const ax = _.forwardRef(BO);
ax.displayName = "DataSheetTable";
const ix = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("thead", { ref: r, className: R("", e), ...n, children: t }));
ix.displayName = "DataSheetTableHeader";
const cx = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tbody", { ref: r, className: R("", e), ...n, children: t }));
cx.displayName = "DataSheetTableBody";
function HO({
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
    let u = 0;
    return _.Children.forEach(a, (h) => {
      _.isValidElement(h) && typeof h.props.parts == "number" && (u += h.props.parts);
    }), u > 0 ? u : void 0;
  }, [a]), f = {
    ...n !== void 0 && { item: n },
    ...l !== void 0 && { totalParts: l },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...s && { tooltipMessages: s }
  };
  return /* @__PURE__ */ d.jsx(
    ox.Provider,
    {
      value: f,
      children: /* @__PURE__ */ d.jsx(
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
const lx = _.forwardRef(HO);
lx.displayName = "DataSheetTableRow";
const Pi = _.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...s }, a) => {
  const i = t ? "th" : "td", { totalParts: c, isDeleted: l } = sx(), f = n !== void 0 && c !== void 0 ? { width: `${n / c * 100}%`, ...o } : o, u = typeof r == "string" ? r.trim() : String(r || ""), h = l && !t && u !== "" && u !== "-";
  return /* @__PURE__ */ d.jsx(
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
Pi.displayName = "DataSheetTableCell";
function GO({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, s) {
  const { onEditRow: a, onRemoveRow: i, onRestoreRow: c, actionsColumnParts: l } = zO(), {
    item: f,
    isDeleted: u,
    ariaLabels: h,
    tooltipMessages: p
  } = sx(), y = n ?? f;
  return t ? /* @__PURE__ */ d.jsx(
    Pi,
    {
      ref: s,
      header: !0,
      parts: l,
      className: e,
      ...o,
      children: r
    }
  ) : a || i || c ? /* @__PURE__ */ d.jsx(
    Pi,
    {
      ref: s,
      parts: l,
      className: R("align-top", e),
      ...o,
      children: /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
        a && y && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: u ? null : (p == null ? void 0 : p.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: em,
                disabled: u,
                onClick: () => a(y),
                className: R(
                  "text-shape-primary [&_svg]:size-5!",
                  u && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && y && !u && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: (p == null ? void 0 : p.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: nm,
                onClick: () => i(y),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        c && y && u && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: (p == null ? void 0 : p.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              He,
              {
                "aria-label": (h == null ? void 0 : h.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: tm,
                onClick: () => c(y),
                className: "text-shape-primary [&_svg]:!size-5"
              }
            )
          }
        )
      ] })
    }
  ) : null;
}
const dx = _.forwardRef(
  GO
);
dx.displayName = "DataSheetTableActionsCell";
const ux = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(He, { ref: n, className: R("w-full", e), ...t }));
ux.displayName = "DataSheetAction";
const r7 = Object.assign(Jb, {
  Header: ex,
  Section: tx,
  KeyValue: nx,
  Table: ax,
  TableHeader: ix,
  TableBody: cx,
  TableRow: lx,
  TableCell: Pi,
  TableActionsCell: dx,
  Action: ux
}), fx = pe(
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
), YO = pe(
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
), ks = pe(
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
), Oc = _.forwardRef(
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
    ...u
  }, h) => {
    const p = !!t, y = !!n, m = !!r, b = u.type === "number", { compositionHandlers: C, guardKeyHandler: x } = Rc(), g = (w) => {
      C.onCompositionStart(w), l == null || l(w);
    }, S = (w) => {
      C.onCompositionEnd(w), f == null || f(w);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: R(fx({ invalid: e }), a), children: [
      t && /* @__PURE__ */ d.jsx(
        "div",
        {
          className: ks({ position: "prefix", interactive: !1 }),
          children: it(t, { size: s })
        }
      ),
      /* @__PURE__ */ d.jsx(
        "input",
        {
          ref: h,
          className: YO({ hasPrefix: p, hasTrailing: y, isNumeric: b }),
          ...u,
          onKeyDown: x(i),
          onKeyUp: x(c),
          onCompositionStart: g,
          onCompositionEnd: S
        }
      ),
      n && /* @__PURE__ */ d.jsx(d.Fragment, { children: m ? /* @__PURE__ */ d.jsx(
        "button",
        {
          type: "button",
          className: ks({
            position: "trailing",
            interactive: !0
          }),
          disabled: u.disabled,
          onClick: r,
          children: it(n, { size: o })
        }
      ) : /* @__PURE__ */ d.jsx(
        "div",
        {
          className: ks({
            position: "trailing",
            interactive: !1
          }),
          children: it(n, { size: o })
        }
      ) })
    ] });
  }
);
Oc.displayName = "Input";
const KO = `bg-surface-primary rounded-lg z-dropdown w-auto max-w-none shadow-lg
  max-h-[var(--radix-popover-content-available-height)] overflow-y-auto`, Ga = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, UO = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), qO = _.forwardRef(
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
    formatDate: u = UO,
    className: h,
    contentClassName: p,
    defaultOpen: y = !1,
    open: m,
    onOpenChange: b,
    side: C = "bottom",
    locale: x = "ja",
    ...g
  }, S) => {
    const [w, k] = _.useState(
      () => Ga(n || null)
    ), [E, M] = _.useState(y), P = e !== void 0, O = P ? Ga(e) : w, I = m !== void 0 ? m : E, D = _.useMemo(
      () => Ga(r || null),
      [r]
    ), L = _.useMemo(
      () => Ga(o || null),
      [o]
    ), j = _.useMemo(() => !D || !L ? !0 : D <= L, [D, L]), B = (W) => {
      const oe = W || null;
      P || k(oe), t == null || t(oe), oe && (m === void 0 && M(!1), b == null || b(!1));
    }, V = (W) => {
      m === void 0 && M(W), b == null || b(W);
    }, Y = (W) => {
      switch (W.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          W.preventDefault(), I || V(!0);
          break;
        case "Escape":
          I && (W.preventDefault(), V(!1));
          break;
      }
    };
    return /* @__PURE__ */ d.jsxs(Cg, { open: I, onOpenChange: V, children: [
      /* @__PURE__ */ d.jsx(Sg, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Oc,
        {
          ...g,
          ref: S,
          type: "text",
          readOnly: !0,
          placeholder: f,
          value: O ? u(O) : "",
          disabled: s,
          invalid: a || i,
          trailingIcon: c || n2,
          trailingIconSize: l,
          onTrailingIconClick: () => !s && V(!I),
          className: R(
            I && "ring-interactive-focused ring-4",
            h
          ),
          onKeyDown: Y,
          onClick: () => !s && V(!I),
          "aria-expanded": I,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ d.jsx(_g, { children: /* @__PURE__ */ d.jsx(
        Mu,
        {
          className: R(KO, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: C,
          collisionPadding: 16,
          onEscapeKeyDown: () => V(!1),
          onPointerDownOutside: () => V(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ d.jsx(
            Kb,
            {
              value: O,
              onChange: B,
              ...D && { minDate: D },
              ...L && { maxDate: L },
              disabled: !j,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: O || /* @__PURE__ */ new Date(),
              locale: x
            }
          )
        }
      ) })
    ] });
  }
);
qO.displayName = "DatePicker";
const XO = /* @__PURE__ */ new Set([
  "text",
  "search",
  "email",
  "url",
  "tel",
  "number",
  "password"
]), ZO = 'input, textarea, select, [role="combobox"], [contenteditable="true"]';
function QO(e) {
  var n;
  if (e.hasAttribute("hidden") || e.closest('[aria-hidden="true"]') || e instanceof HTMLInputElement && e.type === "hidden")
    return !1;
  const t = (n = e.ownerDocument.defaultView) == null ? void 0 : n.getComputedStyle(e);
  return (t == null ? void 0 : t.display) !== "none" && (t == null ? void 0 : t.visibility) !== "hidden";
}
function JO(e) {
  if (e.getAttribute("aria-disabled") === "true") return !1;
  const t = e;
  return !t.disabled && !t.readOnly;
}
function eD(e) {
  const t = e.getAttribute("role");
  return t !== null && t !== "textbox" || e.hasAttribute("aria-autocomplete") || e.hasAttribute("aria-haspopup") ? !1 : e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? XO.has(e.type) : !1;
}
function tD(e) {
  const t = Array.from(
    e.querySelectorAll(ZO)
  ).filter(QO).filter(JO), n = t[0];
  return !n || !eD(n) || n.value.trim() !== "" && t.length > 1 ? null : n;
}
function nD(e) {
  e.preventDefault();
  const t = e.currentTarget instanceof HTMLElement ? e.currentTarget : e.target;
  if (!(t instanceof HTMLElement)) return;
  const n = tD(t);
  if (!n) {
    t.focus();
    return;
  }
  n.focus(), n.value !== "" && n.select();
}
const rD = {
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg"
}, oD = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], o7 = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: s,
  actions: a = oD,
  cancellable: i = !0,
  cancelButtonLabel: c = "キャンセル",
  allowClickOutside: l = !0,
  onOpenAutoFocus: f = nD,
  bodyClassName: u,
  size: h = "md"
}) => {
  const [p, y] = _.useState(-1), b = s !== void 0 ? s : p !== -1, C = async (w) => {
    const k = a.indexOf(w);
    if (w.onAction) {
      y(k);
      const E = await w.onAction(t);
      if (y(-1), E === !1)
        return;
    } else
      y(-1);
    e && t(w.value);
  }, x = () => {
    n(t);
  }, g = (w) => {
    w.preventDefault(), i && !b && l && n(t);
  }, S = (w) => {
    if (b) {
      w.preventDefault();
      return;
    }
    w.preventDefault(), n(t);
  };
  return /* @__PURE__ */ d.jsx(tc, { open: e, onOpenChange: t, children: /* @__PURE__ */ d.jsx(nc, { children: /* @__PURE__ */ d.jsx(
    rc,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ d.jsxs(
        oc,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: g,
          onEscapeKeyDown: S,
          onOpenAutoFocus: f,
          className: R(
            `bg-surface-primary rounded-lg z-dialog min-w-96 max-md:flex
              max-md:max-h-[calc(100dvh-2rem)] max-md:w-[calc(100vw-2rem)]
              max-md:min-w-0 max-md:flex-col fixed top-1/2 left-1/2 w-2/3
              -translate-x-1/2 -translate-y-1/2 transform`,
            rD[h]
          ),
          children: [
            /* @__PURE__ */ d.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ d.jsx(
              iu,
              {
                className: `text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,
                children: r
              }
            ) }),
            /* @__PURE__ */ d.jsx(
              "div",
              {
                className: R(
                  `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-md:max-h-none max-md:min-h-0 max-md:flex-1
                max-h-[calc(100dvh-40px-68px-78px)] overflow-hidden
                overflow-y-auto border-y-1`,
                  u
                ),
                children: o
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "footer",
              {
                className: `px-xl py-md max-md:gap-xs max-md:flex-col-reverse flex
                justify-between`,
                children: [
                  i && /* @__PURE__ */ d.jsx(
                    He,
                    {
                      intent: "tertiary",
                      onClick: x,
                      disabled: b,
                      className: "max-md:w-full",
                      children: c
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      className: R(
                        `gap-xs max-md:ml-0 max-md:flex-col-reverse max-md:*:w-full
                  flex`,
                        { "ml-auto": !i }
                      ),
                      children: a.map((w, k) => {
                        const { label: E, classNames: M, onAction: P, value: O, ...I } = w;
                        return /* @__PURE__ */ d.jsx(
                          He,
                          {
                            loading: p === k,
                            ...I,
                            intent: w.intent || "primary",
                            className: M,
                            onClick: () => C(w),
                            children: E
                          },
                          k
                        );
                      })
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  ) }) });
}, hx = Qs(void 0), zu = () => {
  const e = Is(hx);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, sD = ({
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
  const [l, f] = tt(o), u = s !== void 0 ? s : l, h = _.Children.toArray(r).filter(
    (w) => _.isValidElement(w) && w.type === px
  ), p = h.length, y = (w) => {
    w >= 0 && w < p && (s === void 0 && f(w), c == null || c(w));
  }, m = () => y(u + 1), b = () => y(u - 1), C = (w) => {
    s === void 0 && f(o), t(w);
  }, x = (w) => {
    w.preventDefault(), a && i && n(C);
  }, g = (w) => {
    w.preventDefault(), a && n(C);
  }, S = {
    currentStep: u,
    totalSteps: p,
    goToStep: y,
    nextStep: m,
    prevStep: b,
    isFirstStep: u === 0,
    isLastStep: u === p - 1,
    cancellable: a,
    onClose: C,
    onCancel: n
  };
  return /* @__PURE__ */ d.jsx(hx.Provider, { value: S, children: /* @__PURE__ */ d.jsx(tc, { open: e, onOpenChange: C, children: /* @__PURE__ */ d.jsx(nc, { children: /* @__PURE__ */ d.jsx(
    rc,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ d.jsx(
        oc,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 max-md:flex max-md:max-h-[calc(100dvh-2rem)]
                max-md:w-[calc(100vw-2rem)] max-md:min-w-0 max-md:flex-col fixed
                top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2
                transform`,
          onPointerDownOutside: x,
          onEscapeKeyDown: g,
          children: h[u]
        }
      )
    }
  ) }) }) });
}, px = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "max-md:min-h-0 flex flex-col", children: e }), aD = ({ children: e }) => /* @__PURE__ */ d.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ d.jsx(
  iu,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), iD = ({ children: e, className: t }) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: R(
      `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary max-md:max-h-none max-md:min-h-0 max-md:flex-1
        max-h-[calc(100dvh-40px-68px-78px)] overflow-hidden overflow-y-auto
        border-y-1`,
      t
    ),
    children: e
  }
), cD = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: s, cancellable: a } = zu(), i = () => {
    r && r(), o(s);
  };
  return /* @__PURE__ */ d.jsxs(
    "footer",
    {
      className: `px-xl py-md max-md:gap-xs max-md:flex-col-reverse flex
        justify-between`,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "gap-xs max-md:empty:hidden max-md:*:w-full flex", children: t && a && /* @__PURE__ */ d.jsx(He, { intent: "tertiary", onClick: i, children: n }) }),
        e && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `gap-xs max-md:ml-0 max-md:flex-col-reverse max-md:*:w-full
            ml-auto flex`,
            children: e
          }
        )
      ]
    }
  );
}, lD = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const s = zu(), a = {
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
  return r ? /* @__PURE__ */ d.jsx(Zm, { asChild: !0, children: /* @__PURE__ */ d.jsx(He, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ d.jsx(He, { ...o, onClick: i, children: e });
}, s7 = {
  Root: sD,
  Step: px,
  Header: aD,
  Body: iD,
  Footer: cD,
  Action: lD,
  useMultiStepDialog: zu
}, a7 = ({
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
  return /* @__PURE__ */ d.jsxs("div", { className: R("min-w-0", n), children: [
    e && /* @__PURE__ */ d.jsxs(
      "label",
      {
        htmlFor: r,
        className: `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
        children: [
          /* @__PURE__ */ d.jsx("span", { children: e }),
          a && /* @__PURE__ */ d.jsx("span", { className: "text-body-secondary", children: "(任意)" })
        ]
      }
    ),
    i,
    o && /* @__PURE__ */ d.jsx("p", { className: "mt-xxs text-body-alert text-sm font-normal leading-[1.5]", children: o }),
    s && /* @__PURE__ */ d.jsx(
      "p",
      {
        className: `mt-xxs text-body-secondary text-sm font-normal
            leading-[1.5]`,
        children: s
      }
    )
  ] });
}, mx = Qs(void 0), vx = Qs(!1), gx = ({
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
  return /* @__PURE__ */ d.jsx(mx.Provider, { value: s, children: t });
}, dD = ({
  children: e
}) => /* @__PURE__ */ d.jsx(vx.Provider, { value: !0, children: e }), ma = () => {
  const e = Is(mx);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = Is(vx);
  return { ...e, isInFooter: t };
}, uD = pe(
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
), yx = _.forwardRef(
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
    const { isCollapsed: f, isInFooter: u } = ma(), h = r ? jr : "button", p = i ? "disabled" : t, y = /* @__PURE__ */ d.jsx(
      h,
      {
        ref: l,
        className: R(
          uD({
            variant: p,
            size: n,
            collapsed: f
          }),
          !u && "font-bold",
          e
        ),
        disabled: i,
        ...c,
        children: a || o
      }
    );
    return f && s ? /* @__PURE__ */ d.jsx(Kt, { content: s, side: "right", delayDuration: 0, children: y }) : y;
  }
);
yx.displayName = "SideNavigationItem";
const fD = pe("flex flex-col", {
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
}), bx = _.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, s) => {
  const { isCollapsed: a } = ma();
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: s,
      className: R(
        fD({ isCollapsed: a, isLast: r }),
        e
      ),
      ...o,
      children: [
        t && !a && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: `text-body-secondary px-xxs py-xxs mb-xxs text-xs
            font-medium leading-none`,
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: "space-y-xxxs w-full", children: n })
      ]
    }
  );
});
bx.displayName = "SideNavigationSection";
const hD = {
  in: "animate-in slide-in-from-top",
  out: "animate-out slide-out-to-top",
  duration: 270
}, xx = _.createContext(null), ip = `bg-surface-secondary px-md gap-sm flex
  h-(--cc-mobile-header-height) items-center justify-between`, sd = _.forwardRef(({ icon: e, label: t, className: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
  "button",
  {
    ref: o,
    type: "button",
    className: R(
      `text-shape-primary hover:bg-interactive-neutral-hover
      focus-visible:ring-interactive-focused size-10 rounded-sm inline-flex
      shrink-0 cursor-pointer items-center justify-center focus-visible:ring-2
      focus-visible:outline-none`,
      n
    ),
    ...r,
    children: [
      /* @__PURE__ */ d.jsx(e, { className: "size-6", "aria-hidden": !0 }),
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: t })
    ]
  }
));
sd.displayName = "MobileNavigationMenuButton";
const pD = _.forwardRef(
  ({
    header: e,
    end: t,
    menuEnd: n,
    menuTop: r,
    children: o,
    open: s,
    defaultOpen: a = !1,
    onOpenChange: i,
    animation: c,
    openMenuLabel: l = "メニューを開く",
    closeMenuLabel: f = "メニューを閉じる",
    menuLabel: u = "メニュー",
    className: h,
    ...p
  }, y) => {
    const m = _.useRef(null);
    _.useImperativeHandle(y, () => m.current);
    const b = _.useId(), [C, x] = _.useState(a), g = s !== void 0, S = g ? s : C, w = _.useRef(i);
    _.useEffect(() => {
      w.current = i;
    });
    const k = _.useCallback(
      (I) => {
        var D;
        g || x(I), (D = w.current) == null || D.call(w, I);
      },
      [g]
    );
    _.useEffect(() => {
      const I = m.current;
      if (!S || !I) return;
      const D = () => {
        getComputedStyle(I).display === "none" && k(!1);
      };
      D();
      const L = new ResizeObserver(D);
      return L.observe(I), () => L.disconnect();
    }, [S, k]);
    const E = _.useMemo(
      () => ({ close: () => k(!1) }),
      [k]
    ), M = c === !1 ? null : { ...hD, ...c }, P = M ? {
      animationDuration: `${M.duration}ms`,
      animationTimingFunction: M.easing,
      // Holds the closed state between the end of the animation and the
      // unmount, which would otherwise flash the open menu for a frame
      animationFillMode: S ? void 0 : "forwards"
    } : void 0, O = (I, D) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex items-center", children: e }),
      /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex shrink-0 items-center", children: [
        I,
        D
      ] })
    ] });
    return /* @__PURE__ */ d.jsx(gx, { children: /* @__PURE__ */ d.jsxs(tc, { open: S, onOpenChange: k, children: [
      /* @__PURE__ */ d.jsx(
        "div",
        {
          "aria-hidden": !0,
          className: "md:hidden h-(--cc-mobile-header-height) shrink-0"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "header",
        {
          ref: m,
          className: R(
            ip,
            "z-navigation inset-x-0 top-0 md:hidden fixed",
            h
          ),
          ...p,
          children: O(
            t,
            /* @__PURE__ */ d.jsx(LS, { asChild: !0, children: /* @__PURE__ */ d.jsx(sd, { icon: _2, label: l }) })
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(nc, { children: [
        /* @__PURE__ */ d.jsx(rc, { className: "z-drawer inset-0 md:hidden fixed" }),
        /* @__PURE__ */ d.jsxs(
          oc,
          {
            "aria-describedby": void 0,
            className: R(
              "z-drawer inset-0 md:hidden fixed flex flex-col",
              M && (S ? "animate-in" : "animate-out"),
              "motion-reduce:animate-none"
            ),
            style: P,
            children: [
              /* @__PURE__ */ d.jsx(iu, { className: "sr-only", children: u }),
              /* @__PURE__ */ d.jsx("div", { className: R(ip, "z-slight relative", h), children: O(
                n,
                /* @__PURE__ */ d.jsx(Zm, { asChild: !0, children: /* @__PURE__ */ d.jsx(sd, { icon: Xd, label: f }) })
              ) }),
              /* @__PURE__ */ d.jsxs(
                "nav",
                {
                  "aria-labelledby": b,
                  className: R(
                    `bg-surface-primary p-md gap-md flex flex-1 flex-col
                  overflow-y-auto`,
                    M && (S ? M.in : M.out),
                    "motion-reduce:animate-none"
                  ),
                  style: P,
                  children: [
                    /* @__PURE__ */ d.jsx("span", { id: b, className: "sr-only", children: u }),
                    r && /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        className: `bg-interactive-neutral-selected text-body-primary
                      py-xs px-sm rounded-sm text-sm text-center`,
                        children: r
                      }
                    ),
                    /* @__PURE__ */ d.jsx(xx.Provider, { value: E, children: o })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }) });
  }
);
pD.displayName = "MobileNavigation";
const mD = _.forwardRef(
  ({ className: e, onClick: t, closeOnSelect: n = !0, tooltipLabel: r, size: o, ...s }, a) => {
    const i = _.useContext(xx);
    return /* @__PURE__ */ d.jsx(
      yx,
      {
        ref: a,
        className: R("h-11", e),
        onClick: (c) => {
          t == null || t(c), n && (i == null || i.close());
        },
        ...s
      }
    );
  }
);
mD.displayName = "MobileNavigationItem";
const vD = _.forwardRef(({ className: e, isLast: t, isCollapsed: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  bx,
  {
    ref: o,
    className: R("px-0 items-stretch", e),
    ...r
  }
));
vD.displayName = "MobileNavigationSection";
const wx = Cg, gD = Sg, yD = HE, Bu = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(_g, { children: /* @__PURE__ */ d.jsx(
  Mu,
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
Bu.displayName = Mu.displayName;
const bD = (e) => typeof e == "string" ? e : e.label || e.value || String(e), xD = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, Cx = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: s,
      onSelect: a,
      renderSuggestion: i,
      getSuggestionValue: c = bD,
      getSuggestionKey: l = xD,
      debounceMs: f = 300,
      minQueryLength: u = 0,
      loadingText: h = "Loading...",
      disabled: p,
      onFocus: y,
      onBlur: m,
      onKeyDown: b,
      ...C
    } = e, [x, g] = tt(!1), [S, w] = tt(
      []
    ), [k, E] = tt(!1), M = ct(null), [P, O] = tt(0), I = ct([]), D = DO(n, f), L = po(() => {
      if (!o)
        return S;
      if (!n || n.length < u)
        return o;
      const A = n.toLowerCase();
      return o.filter((N) => c(N).toLowerCase().includes(A));
    }, [
      o,
      S,
      n,
      u,
      c
    ]);
    on(() => {
      if (s) {
        if (D.length < u) {
          w([]), g(!1), E(!1);
          return;
        }
        return M.current && M.current.abort(), M.current = new AbortController(), E(!0), s(D).then((A) => {
          w(A);
        }).catch((A) => {
          A.name !== "AbortError" && console.debug("AutoSuggest search failed:", A), w([]);
        }).finally(() => {
          E(!1);
        }), () => {
          M.current && M.current.abort();
        };
      }
    }, [D, s, u]);
    const j = ke(
      (A) => {
        const N = c(A);
        r(N), a == null || a(A), g(!1);
      },
      [r, a, c]
    ), B = ke(
      (A) => {
        p || g(!0), y == null || y(A);
      },
      [p, y]
    ), V = ke(
      (A) => {
        g(!1), m == null || m(A);
      },
      [m]
    ), Y = ke(
      (A) => {
        const N = A.target.value;
        r(N), !x && L.length > 0 && g(!0);
      },
      [r, x, L.length]
    );
    on(() => {
      O(0), I.current = [];
    }, [L]), on(() => {
      var A;
      x && P >= 0 && I.current[P] && ((A = I.current[P]) == null || A.scrollIntoView({
        block: "nearest"
      }));
    }, [P, x]);
    const T = ke(
      (A) => {
        if (!x) {
          b == null || b(A);
          return;
        }
        switch (A.key) {
          case "Escape":
            A.preventDefault(), g(!1);
            break;
          case "Enter": {
            A.preventDefault();
            const N = L[P];
            N && j(N);
            break;
          }
          case "ArrowDown":
            A.preventDefault(), O(
              (N) => N < L.length - 1 ? N + 1 : N
            );
            break;
          case "ArrowUp":
            A.preventDefault(), O((N) => N > 0 ? N - 1 : N);
            break;
        }
        b == null || b(A);
      },
      [x, P, L, j, b]
    ), W = x && !p && (L.length > 0 || k), oe = W && P >= 0 ? `autosuggest-item-${P}` : void 0;
    return /* @__PURE__ */ d.jsxs(wx, { open: W, children: [
      /* @__PURE__ */ d.jsx(yD, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Oc,
        {
          ref: t,
          value: n,
          onChange: Y,
          onFocus: B,
          onBlur: V,
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
      /* @__PURE__ */ d.jsx(
        Bu,
        {
          align: "start",
          sideOffset: 4,
          className: "p-0",
          style: {
            width: "var(--radix-popover-trigger-width)",
            maxWidth: "37.5rem"
          },
          onOpenAutoFocus: (A) => {
            A.preventDefault();
          },
          children: k ? /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ d.jsx(C2, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ d.jsx("span", { className: "text-sm", children: h })
              ]
            }
          ) : /* @__PURE__ */ d.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: R(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: L.map((A, N) => {
                const F = c(A), z = N === P, Z = `autosuggest-item-${N}`;
                return /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    id: Z,
                    ref: (q) => {
                      I.current[N] = q;
                    },
                    role: "option",
                    "aria-selected": z,
                    "data-value": F,
                    onClick: () => j(A),
                    onPointerDown: (q) => {
                      q.preventDefault(), j(A);
                    },
                    onMouseEnter: () => O(N),
                    className: R(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      z && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(A) : c(A)
                  },
                  l(A, N)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
Cx.displayName = "AutoSuggest";
var _e = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(_e || {}), te = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(te || {});
const wD = [
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
], CD = pe(
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
), Ai = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  removeAriaLabel: o,
  onClick: s,
  size: a = "md",
  style: i,
  selected: c = !1,
  variant: l = "primary",
  icon: f,
  disabled: u = !1,
  asChild: h = !1
}) => {
  const p = wD.find(
    (x) => x.code === e
  ), y = () => l === "secondary" ? `var(${p == null ? void 0 : p.iconColor})` : `var(${p == null ? void 0 : p.textColor})`, m = R(
    CD({
      size: a,
      selected: u ? !1 : c,
      interactive: !!s && !u,
      variant: l,
      disabled: u
    }),
    n
  ), b = {
    // Only apply accent background for primary variant
    // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
    ...l === "primary" && {
      backgroundColor: `var(${p == null ? void 0 : p.backgroundColor})`
    },
    // Only apply inline color when not disabled (Tailwind class handles disabled state)
    ...!u && { color: `var(${p == null ? void 0 : p.textColor})` },
    ...i
  }, C = h ? jr : "div";
  return /* @__PURE__ */ d.jsxs(
    C,
    {
      className: m,
      style: b,
      onClick: u ? void 0 : s,
      role: !h && s ? "button" : void 0,
      "aria-disabled": u || void 0,
      children: [
        f && /* @__PURE__ */ d.jsx(
          "span",
          {
            className: R(
              "shrink-0",
              u && "text-shape-interactive-disabled"
            ),
            style: u ? void 0 : { color: y() },
            children: it(f, { size: 14 })
          }
        ),
        h ? /* @__PURE__ */ d.jsx(am, { children: t }) : /* @__PURE__ */ d.jsx("div", { className: "pt-0.25 relative h-full truncate", children: t }),
        !!r && !u && /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            "aria-label": o,
            className: R(
              `bg-interactive-neutral-default hover:border-interactive-hover h-3.5
            w-3.5 box-border flex shrink-0 cursor-pointer items-center
            justify-center rounded-full border border-transparent leading-none
            transition-colors`
            ),
            onClick: r,
            children: /* @__PURE__ */ d.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "text-shape-primary h-1.25 w-1.25",
                viewBox: "0 0 5 5",
                fill: "none",
                children: [
                  /* @__PURE__ */ d.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.54884 0.117831C4.70594 0.274938 4.70594 0.52966 4.54884 0.686767L0.686767 4.54884C0.52966 4.70594 0.274938 4.70594 0.117831 4.54884C-0.0392769 4.39173 -0.0392769 4.13701 0.117831 3.9799L3.9799 0.117831C4.13701 -0.0392769 4.39173 -0.0392769 4.54884 0.117831Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
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
}, Sx = _.forwardRef(
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
    trailingIconSize: u = 14,
    prefixIconSize: h = 14,
    invalid: p,
    disabled: y,
    className: m,
    onValidateTag: b,
    defaultValidationError: C = "Invalid tag",
    ...x
  }, g) => {
    const [S, w] = tt(""), k = a ?? S, E = i ?? w, [M, P] = tt(!1), { compositionHandlers: O, guardKeyHandler: I } = Rc(), [D, L] = tt(null), j = ct(null);
    _.useImperativeHandle(g, () => j.current);
    const B = _.useMemo(() => {
      const q = o.map(
        ($) => $.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(q.join("|"));
    }, [o]), V = ke(
      (q) => !(!q || !r && e.includes(q) || n && e.length >= n),
      [e, r, n]
    ), Y = ke(
      (q) => {
        const $ = q.trim();
        if (V($)) {
          if (b) {
            const J = b($);
            if (!J.valid) {
              L(
                J.error ?? C
              );
              return;
            }
          }
          t([...e, $]), E(""), L(null);
        }
      },
      [
        e,
        t,
        V,
        E,
        b,
        C
      ]
    ), T = ke(
      (q) => {
        const $ = e.filter((J, re) => re !== q);
        t($);
      },
      [e, t]
    ), W = ke(
      (q) => {
        const $ = q.target.value, J = $[$.length - 1];
        if (J && o.includes(J)) {
          const de = $.slice(0, -1);
          de && Y(de);
          return;
        }
        const re = $.split(B);
        if (re.length > 1) {
          re.filter(Boolean).forEach((de) => Y(de));
          return;
        }
        E($);
      },
      [o, B, Y, E]
    ), oe = ke(
      (q) => {
        q.key === "Enter" && k.trim() && (q.preventDefault(), Y(k)), (q.key === "Backspace" || q.key === "Delete") && !k && e.length > 0 && (q.preventDefault(), T(e.length - 1));
      },
      [k, e.length, Y, T]
    ), A = ke(() => {
      k.trim() && Y(k), P(!1), L(null);
    }, [k, Y]), N = y || (n ? e.length >= n : !1), F = e.length === 0 && !k, z = !!l, Z = !!f;
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: R(
            fx({ invalid: p }),
            "min-h-11.5 !h-auto max-h-[12.5rem] overflow-y-auto",
            m
          ),
          children: [
            l && /* @__PURE__ */ d.jsx(
              "div",
              {
                className: ks({
                  position: "prefix"
                }),
                children: it(l, { size: h })
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "div",
              {
                className: R(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  z ? "pl-0" : "pl-sm",
                  Z ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((q, $) => /* @__PURE__ */ d.jsx(
                    Ai,
                    {
                      ...!y && { onRemove: () => T($) },
                      children: q
                    },
                    $
                  )),
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      ref: j,
                      value: k,
                      onChange: W,
                      onKeyDown: I(oe),
                      onFocus: () => P(!0),
                      onBlur: A,
                      onCompositionStart: O.onCompositionStart,
                      onCompositionEnd: O.onCompositionEnd,
                      placeholder: F ? s : "",
                      disabled: N,
                      className: R(
                        "min-w-24 min-h-6 flex-1 bg-transparent outline-none",
                        "text-body-primary placeholder:text-body-placeholder",
                        "disabled:text-body-disabled py-0 px-0 leading-[100%]"
                      ),
                      ...x
                    }
                  )
                ]
              }
            ),
            f && /* @__PURE__ */ d.jsx(
              "div",
              {
                className: ks({
                  position: "trailing"
                }),
                children: it(f, { size: u })
              }
            )
          ]
        }
      ),
      (c || D) && /* @__PURE__ */ d.jsx(
        "p",
        {
          className: R(
            "mt-xxs text-sm",
            D ? "text-body-alert" : "text-body-secondary",
            !D && !M && "invisible"
          ),
          children: D || c
        }
      )
    ] });
  }
);
Sx.displayName = "TagInput";
const i7 = Object.assign(Oc, {
  AutoSuggest: Cx,
  TagInput: Sx
});
var cp = 1, SD = 0.9, _D = 0.8, kD = 0.17, ml = 0.1, vl = 0.999, ED = 0.9999, MD = 0.99, ND = /[\\\/_+.#"@\[\(\{&]/, PD = /[\\\/_+.#"@\[\(\{&]/g, AD = /[\s-]/, _x = /[\s-]/g;
function ad(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? cp : MD;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), l = n.indexOf(c, o), f = 0, u, h, p, y; l >= 0; ) u = ad(e, t, n, r, l + 1, s + 1, a), u > f && (l === o ? u *= cp : ND.test(e.charAt(l - 1)) ? (u *= _D, p = e.slice(o, l - 1).match(PD), p && o > 0 && (u *= Math.pow(vl, p.length))) : AD.test(e.charAt(l - 1)) ? (u *= SD, y = e.slice(o, l - 1).match(_x), y && o > 0 && (u *= Math.pow(vl, y.length))) : (u *= kD, o > 0 && (u *= Math.pow(vl, l - o))), e.charAt(l) !== t.charAt(s) && (u *= ED)), (u < ml && n.charAt(l - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(l - 1) !== r.charAt(s)) && (h = ad(e, t, n, r, l + 1, s + 2, a), h * ml > u && (u = h * ml)), u > f && (f = u), l = n.indexOf(c, l + 1);
  return a[i] = f, f;
}
function lp(e) {
  return e.toLowerCase().replace(_x, " ");
}
function RD(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ad(e, t, lp(e), lp(t), 0, 0, {});
}
var ts = '[cmdk-group=""]', gl = '[cmdk-group-items=""]', OD = '[cmdk-group-heading=""]', kx = '[cmdk-item=""]', dp = `${kx}:not([aria-disabled="true"])`, id = "cmdk-item-select", no = "data-value", DD = (e, t, n) => RD(e, t, n), Ex = v.createContext(void 0), va = () => v.useContext(Ex), Mx = v.createContext(void 0), Hu = () => v.useContext(Mx), Nx = v.createContext(void 0), Px = v.forwardRef((e, t) => {
  let n = ro(() => {
    var N, F;
    return { search: "", value: (F = (N = e.value) != null ? N : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = ro(() => /* @__PURE__ */ new Set()), o = ro(() => /* @__PURE__ */ new Map()), s = ro(() => /* @__PURE__ */ new Map()), a = ro(() => /* @__PURE__ */ new Set()), i = Ax(e), { label: c, children: l, value: f, onValueChange: u, filter: h, shouldFilter: p, loop: y, disablePointerSelection: m = !1, vimBindings: b = !0, ...C } = e, x = Ze(), g = Ze(), S = Ze(), w = v.useRef(null), k = HD();
  Or(() => {
    if (f !== void 0) {
      let N = f.trim();
      n.current.value = N, E.emit();
    }
  }, [f]), Or(() => {
    k(6, L);
  }, []);
  let E = v.useMemo(() => ({ subscribe: (N) => (a.current.add(N), () => a.current.delete(N)), snapshot: () => n.current, setState: (N, F, z) => {
    var Z, q, $, J;
    if (!Object.is(n.current[N], F)) {
      if (n.current[N] = F, N === "search") D(), O(), k(1, I);
      else if (N === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let re = document.getElementById(S);
          re ? re.focus() : (Z = document.getElementById(x)) == null || Z.focus();
        }
        if (k(7, () => {
          var re;
          n.current.selectedItemId = (re = j()) == null ? void 0 : re.id, E.emit();
        }), z || k(5, L), ((q = i.current) == null ? void 0 : q.value) !== void 0) {
          let re = F ?? "";
          (J = ($ = i.current).onValueChange) == null || J.call($, re);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    a.current.forEach((N) => N());
  } }), []), M = v.useMemo(() => ({ value: (N, F, z) => {
    var Z;
    F !== ((Z = s.current.get(N)) == null ? void 0 : Z.value) && (s.current.set(N, { value: F, keywords: z }), n.current.filtered.items.set(N, P(F, z)), k(2, () => {
      O(), E.emit();
    }));
  }, item: (N, F) => (r.current.add(N), F && (o.current.has(F) ? o.current.get(F).add(N) : o.current.set(F, /* @__PURE__ */ new Set([N]))), k(3, () => {
    D(), O(), n.current.value || I(), E.emit();
  }), () => {
    s.current.delete(N), r.current.delete(N), n.current.filtered.items.delete(N);
    let z = j();
    k(4, () => {
      D(), (z == null ? void 0 : z.getAttribute("id")) === N && I(), E.emit();
    });
  }), group: (N) => (o.current.has(N) || o.current.set(N, /* @__PURE__ */ new Set()), () => {
    s.current.delete(N), o.current.delete(N);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: x, inputId: S, labelId: g, listInnerRef: w }), []);
  function P(N, F) {
    var z, Z;
    let q = (Z = (z = i.current) == null ? void 0 : z.filter) != null ? Z : DD;
    return N ? q(N, n.current.search, F) : 0;
  }
  function O() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let N = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((Z) => {
      let q = o.current.get(Z), $ = 0;
      q.forEach((J) => {
        let re = N.get(J);
        $ = Math.max(re, $);
      }), F.push([Z, $]);
    });
    let z = w.current;
    B().sort((Z, q) => {
      var $, J;
      let re = Z.getAttribute("id"), de = q.getAttribute("id");
      return (($ = N.get(de)) != null ? $ : 0) - ((J = N.get(re)) != null ? J : 0);
    }).forEach((Z) => {
      let q = Z.closest(gl);
      q ? q.appendChild(Z.parentElement === q ? Z : Z.closest(`${gl} > *`)) : z.appendChild(Z.parentElement === z ? Z : Z.closest(`${gl} > *`));
    }), F.sort((Z, q) => q[1] - Z[1]).forEach((Z) => {
      var q;
      let $ = (q = w.current) == null ? void 0 : q.querySelector(`${ts}[${no}="${encodeURIComponent(Z[0])}"]`);
      $ == null || $.parentElement.appendChild($);
    });
  }
  function I() {
    let N = B().find((z) => z.getAttribute("aria-disabled") !== "true"), F = N == null ? void 0 : N.getAttribute(no);
    E.setState("value", F || void 0);
  }
  function D() {
    var N, F, z, Z;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let q = 0;
    for (let $ of r.current) {
      let J = (F = (N = s.current.get($)) == null ? void 0 : N.value) != null ? F : "", re = (Z = (z = s.current.get($)) == null ? void 0 : z.keywords) != null ? Z : [], de = P(J, re);
      n.current.filtered.items.set($, de), de > 0 && q++;
    }
    for (let [$, J] of o.current) for (let re of J) if (n.current.filtered.items.get(re) > 0) {
      n.current.filtered.groups.add($);
      break;
    }
    n.current.filtered.count = q;
  }
  function L() {
    var N, F, z;
    let Z = j();
    Z && (((N = Z.parentElement) == null ? void 0 : N.firstChild) === Z && ((z = (F = Z.closest(ts)) == null ? void 0 : F.querySelector(OD)) == null || z.scrollIntoView({ block: "nearest" })), Z.scrollIntoView({ block: "nearest" }));
  }
  function j() {
    var N;
    return (N = w.current) == null ? void 0 : N.querySelector(`${kx}[aria-selected="true"]`);
  }
  function B() {
    var N;
    return Array.from(((N = w.current) == null ? void 0 : N.querySelectorAll(dp)) || []);
  }
  function V(N) {
    let F = B()[N];
    F && E.setState("value", F.getAttribute(no));
  }
  function Y(N) {
    var F;
    let z = j(), Z = B(), q = Z.findIndex((J) => J === z), $ = Z[q + N];
    (F = i.current) != null && F.loop && ($ = q + N < 0 ? Z[Z.length - 1] : q + N === Z.length ? Z[0] : Z[q + N]), $ && E.setState("value", $.getAttribute(no));
  }
  function T(N) {
    let F = j(), z = F == null ? void 0 : F.closest(ts), Z;
    for (; z && !Z; ) z = N > 0 ? zD(z, ts) : BD(z, ts), Z = z == null ? void 0 : z.querySelector(dp);
    Z ? E.setState("value", Z.getAttribute(no)) : Y(N);
  }
  let W = () => V(B().length - 1), oe = (N) => {
    N.preventDefault(), N.metaKey ? W() : N.altKey ? T(1) : Y(1);
  }, A = (N) => {
    N.preventDefault(), N.metaKey ? V(0) : N.altKey ? T(-1) : Y(-1);
  };
  return v.createElement(ne.div, { ref: t, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (N) => {
    var F;
    (F = C.onKeyDown) == null || F.call(C, N);
    let z = N.nativeEvent.isComposing || N.keyCode === 229;
    if (!(N.defaultPrevented || z)) switch (N.key) {
      case "n":
      case "j": {
        b && N.ctrlKey && oe(N);
        break;
      }
      case "ArrowDown": {
        oe(N);
        break;
      }
      case "p":
      case "k": {
        b && N.ctrlKey && A(N);
        break;
      }
      case "ArrowUp": {
        A(N);
        break;
      }
      case "Home": {
        N.preventDefault(), V(0);
        break;
      }
      case "End": {
        N.preventDefault(), W();
        break;
      }
      case "Enter": {
        N.preventDefault();
        let Z = j();
        if (Z) {
          let q = new Event(id);
          Z.dispatchEvent(q);
        }
      }
    }
  } }, v.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: YD }, c), Dc(e, (N) => v.createElement(Mx.Provider, { value: E }, v.createElement(Ex.Provider, { value: M }, N))));
}), ID = v.forwardRef((e, t) => {
  var n, r;
  let o = Ze(), s = v.useRef(null), a = v.useContext(Nx), i = va(), c = Ax(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  Or(() => {
    if (!l) return i.item(o, a == null ? void 0 : a.id);
  }, [l]);
  let f = Rx(o, s, [e.value, e.children, s], e.keywords), u = Hu(), h = ir((k) => k.value && k.value === f.current), p = ir((k) => l || i.filter() === !1 ? !0 : k.search ? k.filtered.items.get(o) > 0 : !0);
  v.useEffect(() => {
    let k = s.current;
    if (!(!k || e.disabled)) return k.addEventListener(id, y), () => k.removeEventListener(id, y);
  }, [p, e.onSelect, e.disabled]);
  function y() {
    var k, E;
    m(), (E = (k = c.current).onSelect) == null || E.call(k, f.current);
  }
  function m() {
    u.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: b, value: C, onSelect: x, forceMount: g, keywords: S, ...w } = e;
  return v.createElement(ne.div, { ref: Vn(s, t), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!b, "aria-selected": !!h, "data-disabled": !!b, "data-selected": !!h, onPointerMove: b || i.getDisablePointerSelection() ? void 0 : m, onClick: b ? void 0 : y }, e.children);
}), jD = v.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = Ze(), i = v.useRef(null), c = v.useRef(null), l = Ze(), f = va(), u = ir((p) => o || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Or(() => f.group(a), []), Rx(a, i, [e.value, e.heading, c]);
  let h = v.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return v.createElement(ne.div, { ref: Vn(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && v.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Dc(e, (p) => v.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, v.createElement(Nx.Provider, { value: h }, p))));
}), TD = v.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = v.useRef(null), s = ir((a) => !a.search);
  return !n && !s ? null : v.createElement(ne.div, { ref: Vn(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), $D = v.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Hu(), a = ir((l) => l.search), i = ir((l) => l.selectedItemId), c = va();
  return v.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), v.createElement(ne.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (l) => {
    o || s.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), WD = v.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = v.useRef(null), a = v.useRef(null), i = ir((l) => l.selectedItemId), c = va();
  return v.useEffect(() => {
    if (a.current && s.current) {
      let l = a.current, f = s.current, u, h = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let p = l.offsetHeight;
          f.style.setProperty("--cmdk-list-height", p.toFixed(1) + "px");
        });
      });
      return h.observe(l), () => {
        cancelAnimationFrame(u), h.unobserve(l);
      };
    }
  }, []), v.createElement(ne.div, { ref: Vn(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Dc(e, (l) => v.createElement("div", { ref: Vn(a, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), LD = v.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return v.createElement(tc, { open: n, onOpenChange: r }, v.createElement(nc, { container: a }, v.createElement(rc, { "cmdk-overlay": "", className: o }), v.createElement(oc, { "aria-label": e.label, "cmdk-dialog": "", className: s }, v.createElement(Px, { ref: t, ...i }))));
}), FD = v.forwardRef((e, t) => ir((n) => n.filtered.count === 0) ? v.createElement(ne.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), VD = v.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return v.createElement(ne.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Dc(e, (a) => v.createElement("div", { "aria-hidden": !0 }, a)));
}), Ot = Object.assign(Px, { List: WD, Item: ID, Input: $D, Group: jD, Separator: TD, Dialog: LD, Empty: FD, Loading: VD });
function zD(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function BD(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Ax(e) {
  let t = v.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
var Or = typeof window > "u" ? v.useEffect : v.useLayoutEffect;
function ro(e) {
  let t = v.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ir(e) {
  let t = Hu(), n = () => e(t.snapshot());
  return v.useSyncExternalStore(t.subscribe, n, n);
}
function Rx(e, t, n, r = []) {
  let o = v.useRef(), s = va();
  return Or(() => {
    var a;
    let i = (() => {
      var l;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (l = f.current.textContent) == null ? void 0 : l.trim() : o.current;
      }
    })(), c = r.map((l) => l.trim());
    s.value(e, i, c), (a = t.current) == null || a.setAttribute(no, i), o.current = i;
  }), o;
}
var HD = () => {
  let [e, t] = v.useState(), n = ro(() => /* @__PURE__ */ new Map());
  return Or(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function GD(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Dc({ asChild: e, children: t }, n) {
  return e && v.isValidElement(t) ? v.cloneElement(GD(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var YD = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Ox = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
Ox.displayName = Ot.displayName;
const Dx = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "div",
  {
    className: "border-divider-default py-sm px-md flex items-center border-b",
    "cmdk-input-wrapper": "",
    children: /* @__PURE__ */ d.jsxs(
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
          /* @__PURE__ */ d.jsx(qd, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ d.jsx(
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
Dx.displayName = Ot.Input.displayName;
const Ix = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
Ix.displayName = Ot.List.displayName;
const jx = _.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Ot.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
jx.displayName = Ot.Empty.displayName;
const ai = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
ai.displayName = Ot.Group.displayName;
const KD = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
KD.displayName = Ot.Separator.displayName;
const ii = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
ii.displayName = Ot.Item.displayName;
const up = pe("ease-in-out transition-all duration-300", {
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
}), UD = ({
  options: e,
  onValueChange: t = (ot) => ot,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: s = (ot) => ot,
  variant: a,
  defaultValue: i = [],
  value: c,
  placeholder: l = "選択してください",
  placeholderAriaLabel: f = "選択してください",
  triggerDescription: u = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: h = "オプションが選択されていません",
  searchHelpText: p = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: y = "利用可能なオプションを検索",
  optionsListAriaLabel: m = "利用可能なオプション",
  selectAllLabel: b = "すべて選択",
  selectAllCountLabel: C = "オプション",
  clearAllLabel: x = "すべてクリア",
  closeLabel: g = "閉じる",
  footerContent: S,
  moreSelectedLabel: w = "その他",
  searchPlaceholder: k = "オプションを検索...",
  maxCount: E = 10,
  maxSelected: M,
  maxSelectedReachedLabel: P = "選択できる上限に達しました。",
  modalPopover: O = !1,
  className: I,
  hideSelectAll: D = !1,
  searchable: L = !0,
  emptyIndicator: j = "結果が見つかりません。",
  noOptionsIndicator: B = "利用可能なオプションがありません。",
  autoSize: V = !1,
  singleLine: Y = !1,
  popoverClassName: T,
  disabled: W = !1,
  invalid: oe = !1,
  responsive: A,
  minWidth: N,
  maxWidth: F,
  deduplicateOptions: z = !1,
  resetOnDefaultValueChange: Z = !0,
  closeOnSelect: q = !1,
  filterByValueAndLabel: $ = !1,
  filterOption: J,
  renderOption: re,
  customTrigger: de,
  selectionDisplayMode: me = "default",
  hideSelection: ge = !1,
  maxDisplayedOptions: Se,
  totalOptionsCount: Ie,
  moreOptionsLabel: Te = (ot) => `検索テキストを入力して他${ot}件を表示`,
  ...ut
}, Xe) => {
  const [ot, vt] = _.useState(i), [We, Ge] = _.useState(!1), [Qe, Dt] = _.useState(""), Nt = c !== void 0, ve = Nt ? c : ot, Zt = M !== void 0 && ve.length >= M, [It, fn] = _.useState(""), [hn, Rn] = _.useState(""), Qt = _.useRef(ve.length), Jt = _.useRef(We), On = _.useRef(Qe), Pt = _.useCallback(
    (K, ue = "polite") => {
      ue === "assertive" ? (Rn(K), setTimeout(() => Rn(""), 100)) : (fn(K), setTimeout(() => fn(""), 100));
    },
    []
  ), st = _.useCallback(
    (K) => {
      Nt || vt(K), t(K);
    },
    [Nt, t]
  ), H = _.useId(), ee = `${H}-listbox`, Q = `${H}-description`, G = `${H}-count`, ce = _.useRef(i), U = _.useCallback(
    (K) => {
      const ue = K[0];
      return !!(ue && typeof ue == "object" && "heading" in ue);
    },
    []
  ), ie = _.useCallback((K, ue) => {
    if (K.length !== ue.length) return !1;
    const ye = [...K].sort(), Pe = [...ue].sort();
    return ye.every((je, at) => je === Pe[at]);
  }, []), he = _.useCallback(() => {
    Ge(!1), Dt(""), st(i);
  }, [i, st]), le = _.useRef(null);
  _.useImperativeHandle(
    Xe,
    () => ({
      reset: he,
      getSelectedValues: () => ve,
      setSelectedValues: st,
      clear: () => st([]),
      focus: () => {
        if (le.current) {
          le.current.focus();
          const K = le.current.style.outline, ue = le.current.style.outlineOffset;
          le.current.style.outline = "2px solid hsl(var(--ring))", le.current.style.outlineOffset = "2px", setTimeout(() => {
            le.current && (le.current.style.outline = K, le.current.style.outlineOffset = ue);
          }, 1e3);
        }
      }
    }),
    [he, ve, st]
  );
  const [Ve, jt] = _.useState("desktop");
  _.useEffect(() => {
    if (typeof window > "u") return;
    const K = () => {
      const ue = window.innerWidth;
      ue < 640 ? jt("mobile") : ue < 1024 ? jt("tablet") : jt("desktop");
    };
    return K(), window.addEventListener("resize", K), () => {
      typeof window < "u" && window.removeEventListener("resize", K);
    };
  }, []);
  const ft = (() => {
    if (!A)
      return {
        maxCount: E,
        compactMode: !1
      };
    if (A === !0) {
      const ye = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ve];
      return {
        maxCount: (ye == null ? void 0 : ye.maxCount) ?? E,
        compactMode: (ye == null ? void 0 : ye.compactMode) ?? !1
      };
    }
    const K = A[Ve];
    return {
      maxCount: (K == null ? void 0 : K.maxCount) ?? E,
      compactMode: (K == null ? void 0 : K.compactMode) ?? !1
    };
  })(), Ye = _.useCallback(() => {
    if (e.length === 0) return [];
    let K;
    U(e) ? K = e.flatMap((je) => je.options) : K = e;
    const ue = /* @__PURE__ */ new Set(), ye = [], Pe = [];
    return K.forEach((je) => {
      ue.has(je.value) ? (ye.push(je.value), z || Pe.push(je)) : (ue.add(je.value), Pe.push(je));
    }), process.env.NODE_ENV === "development" && ye.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${z ? "automatically removed" : "detected"}: ${ye.join(
        ", "
      )}. ${z ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), z ? Pe : K;
  }, [e, z, U]), Dn = _.useCallback(
    (K) => {
      const ue = Ye().find((ye) => ye.value === K);
      return !ue && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${K}" not found in options list`
      ), ue;
    },
    [Ye]
  ), pr = _.useCallback(
    (K, ue) => {
      const [ye, Pe] = K.split(":");
      if (!$)
        return Pe && Pe.toLowerCase().includes(ue.toLowerCase()) ? 1 : 0;
      const je = ue.toLowerCase();
      return Pe && Pe.toLowerCase().includes(je) || ye && ye.toLowerCase().includes(je) ? 1 : 0;
    },
    [$]
  ), Ea = (K) => {
    if (K.key === "Enter")
      Ge(!0);
    else if (K.key === "Backspace" && !K.currentTarget.value) {
      const ue = [...ve];
      ue.pop(), st(ue);
    }
  }, In = (K) => {
    if (W) return;
    const ue = Dn(K);
    if (ue != null && ue.disabled) return;
    const ye = ve.includes(K);
    if (!ye && Zt) {
      Pt(P, "assertive");
      return;
    }
    const Pe = ye ? ve.filter((je) => je !== K) : [...ve, K];
    st(Pe), q && Ge(!1);
  }, Xf = () => {
    W || st([]);
  }, F1 = () => {
    W || Ge((K) => !K);
  }, V1 = () => {
    if (W) return;
    const K = ve.slice(
      0,
      ft.maxCount
    );
    st(K);
  }, z1 = () => {
    if (W) return;
    const K = Ye().filter((ue) => !ue.disabled);
    M !== void 0 && K.length > M || (ve.length === K.length ? Xf() : st(K.map((ue) => ue.value)), q && Ge(!1));
  }, Kc = re || ((K) => {
    const { option: ue, location: ye, onRemove: Pe, disabled: je } = K;
    return ye === "badge" ? /* @__PURE__ */ d.jsx(
      Ai,
      {
        className: R(
          up({ variant: a }),
          ft.compactMode && "text-xs px-1.5 py-0.5",
          Ve === "mobile" && "max-w-[7.5rem] truncate",
          Y && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          je && "cursor-not-allowed"
        ),
        ...!je && { onRemove: Pe },
        children: ue.label
      }
    ) : ue.label;
  }), Uc = Ye().length > 0, Xo = Qe.trim(), Ma = !!Xo, Zf = !!J && Ma, mr = _.useMemo(() => !J || !Xo ? e : U(e) ? e.map((K) => ({
    ...K,
    options: K.options.filter(
      (ue) => J(ue, Xo)
    )
  })) : e.filter((K) => J(K, Xo)), [e, J, Xo, U]), Na = Se !== void 0 && (!Ma || !!n || !!J), Qf = _.useCallback(
    (K) => !!K.disabled || Zt && !ve.includes(K.value),
    [Zt, ve]
  ), B1 = M !== void 0 && Ye().filter((K) => !K.disabled).length > M;
  _.useEffect(() => {
    if (!Z || Nt) return;
    const K = ce.current;
    ie(K, i) || (ie(ve, i) || vt(i), ce.current = [...i]);
  }, [
    i,
    ve,
    ie,
    Z,
    Nt
  ]);
  const qc = {
    minWidth: N || (Ve === "mobile" ? "0px" : "12.5rem"),
    maxWidth: F || "100%",
    popoverMaxWidth: F || "32rem",
    width: V ? "auto" : "100%"
  }, Jf = _.useMemo(() => me === "default" || ve.length === 0 ? l : ve.map((K) => {
    var ue;
    return (ue = Dn(K)) == null ? void 0 : ue.label;
  }).filter(Boolean).join(", "), [ve, Dn, l, me]);
  return _.useEffect(() => {
    We || Dt("");
  }, [We]), _.useEffect(() => {
    const K = ve.length, ue = Ye(), ye = ue.filter((Pe) => !Pe.disabled).length;
    if (K !== Qt.current) {
      const Pe = K - Qt.current;
      if (Pe > 0) {
        const at = ve.slice(-Pe).map((gt) => {
          var jn;
          return (jn = ue.find((Hr) => Hr.value === gt)) == null ? void 0 : jn.label;
        }).filter(Boolean);
        at.length === 1 ? Pt(
          `${at[0]} selected. ${K} of ${ye} options selected.`
        ) : Pt(
          `${at.length} options selected. ${K} of ${ye} total selected.`
        );
      } else Pe < 0 && Pt(
        `Option removed. ${K} of ${ye} options selected.`
      );
      Qt.current = K;
    }
    We !== Jt.current && (Pt(
      We ? `Dropdown opened. ${ye} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), Jt.current = We), Qe !== On.current && Qe !== void 0 && (Qe && We && Pt(`Searching for "${Qe}"`), On.current = Qe);
  }, [ve, We, Qe, Pt, Ye]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ d.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: It }),
      /* @__PURE__ */ d.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: hn })
    ] }),
    /* @__PURE__ */ d.jsxs(
      wx,
      {
        open: We,
        onOpenChange: Ge,
        modal: O,
        children: [
          /* @__PURE__ */ d.jsx("div", { id: Q, className: "sr-only", children: u }),
          /* @__PURE__ */ d.jsx("div", { id: G, className: "sr-only", "aria-live": "polite", children: ve.length === 0 ? h : `${ve.length} option${ve.length === 1 ? "" : "s"} selected: ${ve.map((K) => {
            var ue;
            return (ue = Dn(K)) == null ? void 0 : ue.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ d.jsxs("div", { className: R(V && "w-auto", I), children: [
            /* @__PURE__ */ d.jsx(gD, { asChild: !0, children: de || /* @__PURE__ */ d.jsx(
              "button",
              {
                ref: le,
                ...ut,
                onClick: F1,
                disabled: W,
                className: R(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  V ? "w-auto" : "w-full",
                  !oe && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  oe && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  ft.compactMode && "min-h-8 text-sm",
                  Ve === "mobile" && "min-h-12"
                ),
                style: {
                  ...qc,
                  maxWidth: `min(${qc.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": We,
                "aria-haspopup": "listbox",
                "aria-controls": We ? ee : void 0,
                "aria-describedby": `${Q} ${G}`,
                "aria-label": `Multi-select: ${ve.length} of ${Ye().length} options selected. ${f}`,
                children: /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ d.jsx(
                        "span",
                        {
                          className: R(
                            "mx-sm",
                            me === "inline" && "truncate",
                            W ? "text-body-disabled" : We || me === "inline" && Jf !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: Jf
                        }
                      ),
                      /* @__PURE__ */ d.jsx(
                        ea,
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
            !(ge || me === "inline") && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              ve.slice(0, ft.maxCount).map((K) => {
                const ue = Dn(K);
                return ue ? /* @__PURE__ */ d.jsx(_.Fragment, { children: Kc({
                  option: ue,
                  location: "badge",
                  onRemove: () => In(K),
                  disabled: W
                }) }, K) : null;
              }).filter(Boolean),
              ve.length > ft.maxCount && /* @__PURE__ */ d.jsxs(
                Ai,
                {
                  className: R(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    up({ variant: a }),
                    ft.compactMode && "text-xs px-1.5 py-0.5",
                    Y && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    W && "cursor-not-allowed"
                  ),
                  ...!W && { onRemove: V1 },
                  children: [
                    "+ ",
                    ve.length - ft.maxCount,
                    " ",
                    w
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ d.jsx(
            Bu,
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
                maxWidth: `min(${qc.popoverMaxWidth}, 85vw)`,
                maxHeight: Ve === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ d.jsxs(
                Ox,
                {
                  filter: pr,
                  shouldFilter: !n && !J,
                  children: [
                    L && /* @__PURE__ */ d.jsxs("header", { children: [
                      /* @__PURE__ */ d.jsx("div", { id: `${H}-search-help`, className: "sr-only", children: p }),
                      /* @__PURE__ */ d.jsx(
                        Dx,
                        {
                          placeholder: k,
                          onKeyDown: Ea,
                          value: Qe,
                          onValueChange: (K) => {
                            Dt(K), n == null || n(K);
                          },
                          "aria-label": y,
                          "aria-describedby": `${H}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d.jsxs(
                      Ix,
                      {
                        className: R(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          Ve === "mobile" && "max-h-[calc(50vh-56px)]"
                        ),
                        style: { overscrollBehaviorY: "contain" },
                        children: [
                          r && /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                              children: /* @__PURE__ */ d.jsx(Nc.Circular, { size: "sm", children: o })
                            }
                          ),
                          !r && (Uc || Ma) && /* @__PURE__ */ d.jsx(jx, { children: j }),
                          !r && !Uc && !Ma && /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: B
                            }
                          ),
                          !r && !D && !B1 && !Qe && Uc && /* @__PURE__ */ d.jsx(ai, { children: /* @__PURE__ */ d.jsxs(
                            ii,
                            {
                              value: "select-all",
                              onSelect: z1,
                              role: "option",
                              "aria-selected": ve.length === Ye().filter((K) => !K.disabled).length,
                              "aria-label": `Select all ${Ye().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ d.jsx(
                                  yo,
                                  {
                                    className: "mr-xs",
                                    checked: ve.length === Ye().filter((K) => !K.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ d.jsxs("span", { children: [
                                  "(",
                                  b,
                                  Ye().length > 20 ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
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
                          !r && (U(mr) ? (() => {
                            let K = 0;
                            const ue = mr.reduce(
                              (at, gt) => at + gt.options.length,
                              0
                            ), ye = mr.map((at) => {
                              const gt = Na ? at.options.filter(
                                (jn) => K++ < Se || ve.includes(jn.value)
                              ) : at.options;
                              return { ...at, options: gt };
                            }), Pe = ye.reduce(
                              (at, gt) => at + gt.options.length,
                              0
                            ), je = (Zf ? ue : Ie ?? ue) - Pe;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              ye.map((at) => at.options.length === 0 ? null : /* @__PURE__ */ d.jsx(
                                ai,
                                {
                                  heading: at.heading,
                                  children: at.options.map((gt) => {
                                    const jn = ve.includes(
                                      gt.value
                                    ), Hr = Qf(gt);
                                    return /* @__PURE__ */ d.jsxs(
                                      ii,
                                      {
                                        value: `${gt.value}:${gt.label}`,
                                        onSelect: () => In(gt.value),
                                        role: "option",
                                        "aria-selected": jn,
                                        "aria-disabled": Hr,
                                        "aria-label": `${gt.label}${jn ? ", selected" : ", not selected"}${Hr ? ", disabled" : ""}`,
                                        className: R(
                                          "cursor-pointer",
                                          Hr && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                        ),
                                        disabled: Hr,
                                        children: [
                                          /* @__PURE__ */ d.jsx(
                                            yo,
                                            {
                                              className: "mr-xs",
                                              checked: jn
                                            }
                                          ),
                                          /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Kc({
                                            option: gt,
                                            location: "dropdown",
                                            isSelected: jn
                                          }) })
                                        ]
                                      },
                                      gt.value
                                    );
                                  })
                                },
                                at.heading
                              )),
                              Na && je > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: Te(je) })
                            ] });
                          })() : /* @__PURE__ */ d.jsx(ai, { children: (() => {
                            const K = Na ? mr.filter(
                              (ye, Pe) => Pe < Se || ve.includes(ye.value)
                            ) : mr, ue = (Zf ? mr.length : Ie ?? mr.length) - K.length;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              K.map((ye) => {
                                const Pe = ve.includes(
                                  ye.value
                                ), je = Qf(ye);
                                return /* @__PURE__ */ d.jsxs(
                                  ii,
                                  {
                                    value: `${ye.value}:${ye.label}`,
                                    onSelect: () => In(ye.value),
                                    role: "option",
                                    "aria-selected": Pe,
                                    "aria-disabled": je,
                                    "aria-label": `${ye.label}${Pe ? ", selected" : ", not selected"}${je ? ", disabled" : ""}`,
                                    className: R(
                                      "cursor-pointer",
                                      je && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: je,
                                    children: [
                                      /* @__PURE__ */ d.jsx(
                                        yo,
                                        {
                                          className: "mr-xs",
                                          checked: Pe
                                        }
                                      ),
                                      /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Kc({
                                        option: ye,
                                        location: "dropdown",
                                        isSelected: Pe
                                      }) })
                                    ]
                                  },
                                  ye.value
                                );
                              }),
                              Na && ue > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: Te(ue) })
                            ] });
                          })() }))
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsxs(
                      "footer",
                      {
                        className: `bg-surface-primary bottom-0 border-t-divider-default
                border-t`,
                        children: [
                          S && /* @__PURE__ */ d.jsx("div", { className: "px-md pt-sm text-body-secondary text-sm", children: S }),
                          /* @__PURE__ */ d.jsxs("div", { className: "px-md py-sm flex items-center justify-between", children: [
                            /* @__PURE__ */ d.jsx(
                              He,
                              {
                                intent: "text",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: Xf,
                                disabled: ve.length === 0,
                                children: x
                              }
                            ),
                            /* @__PURE__ */ d.jsx(
                              He,
                              {
                                intent: "primary",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: () => {
                                  s(ve), Ge(!1);
                                },
                                children: g
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
}, qD = _.forwardRef(
  UD
);
qD.displayName = "MultiSelect";
const XD = pe(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  [&[data-placeholder]]:text-body-placeholder
  disabled:[&[data-placeholder]]:text-body-disabled inline-flex items-center
  justify-between border focus-visible:ring-4 focus-visible:outline-none
  enabled:cursor-pointer data-[state=open]:ring-4`,
  {
    variants: {
      variant: {
        default: "border-interactive-default rounded gap-xs w-full",
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover max-w-62 h-[1.625rem] w-fit
        border-transparent`
      },
      size: {
        default: "",
        sm: ""
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
      },
      { variant: "default", size: "default", class: "p-md h-11.5" },
      { variant: "default", size: "sm", class: "px-sm py-xs h-7.5" }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      intent: "primary"
    }
  }
), ZD = pe(
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
), QD = pe(
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
), cd = ({
  options: e,
  placeholder: t,
  className: n,
  icon: r,
  invalid: o = !1,
  variant: s = "default",
  size: a = "default",
  intent: i = "primary",
  value: c,
  hideChevron: l = !1,
  onValueChange: f,
  searchPlaceholder: u = "Search...",
  searchThreshold: h = 7,
  renderValue: p,
  ...y
}) => {
  const [m, b] = _.useState(""), C = _.useRef(null), g = e.filter(
    (P) => !("type" in P) || P.type === "Option" || P.type === void 0
  ).length >= h, S = (P) => {
    if (typeof P == "string") return P;
    if (typeof P == "number") return String(P);
    if (Array.isArray(P)) return P.map(S).join("");
    if (_.isValidElement(P)) {
      const { children: O } = P.props;
      if (O) return S(O);
    }
    return "";
  }, w = (P) => !g || !m || "type" in P && (P.type === "Group" || P.type === "Separator") ? !0 : "label" in P ? S(P.label).toLowerCase().includes(m.toLowerCase()) : !0, k = {
    ...y
  }, E = c !== void 0 ? String(c) : void 0, M = (P) => {
    const O = e.find(
      (I) => "value" in I && String(I.value) === P
    );
    return O && "value" in O ? O.value : P;
  };
  return E !== void 0 && (k.value = E), f && (k.onValueChange = (P) => {
    const O = M(P);
    f(O);
  }), /* @__PURE__ */ d.jsxs(
    AM,
    {
      ...k,
      onOpenChange: (P) => {
        var O;
        P || b(""), (O = k.onOpenChange) == null || O.call(k, P);
      },
      children: [
        /* @__PURE__ */ d.jsxs(
          RM,
          {
            className: R(
              XD({ variant: s, size: a, intent: i, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ d.jsxs("div", { className: "inline-flex items-center truncate", children: [
                it(r, {
                  className: R("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ d.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ d.jsx(
                  OM,
                  {
                    placeholder: t || "Select an option",
                    className: R("hidden", {
                      "text-sm": s === "compact"
                    }),
                    children: p
                  }
                ) })
              ] }),
              !l && /* @__PURE__ */ d.jsx(
                DM,
                {
                  className: R("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": y.disabled
                  }),
                  children: /* @__PURE__ */ d.jsx(
                    ea,
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
        /* @__PURE__ */ d.jsx(IM, { children: /* @__PURE__ */ d.jsxs(
          jM,
          {
            position: "popper",
            sideOffset: -1,
            className: R(ZD({ variant: s }), n),
            children: [
              g && /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ d.jsx(qd, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: C,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: u,
                        value: m,
                        onChange: (P) => b(P.target.value),
                        onKeyDown: (P) => P.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx(zM, {}),
              /* @__PURE__ */ d.jsx(TM, { children: e.map((P, O) => {
                const I = w(P);
                switch (P.type) {
                  case "Group":
                    return /* @__PURE__ */ d.jsx(
                      $M,
                      {
                        className: R(!I && "hidden"),
                        children: /* @__PURE__ */ d.jsx(WM, { children: P.label })
                      },
                      O
                    );
                  case "Separator":
                    return /* @__PURE__ */ d.jsx(
                      HM,
                      {
                        className: R(
                          "border-divider-default h-px border-b",
                          !I && "hidden"
                        )
                      },
                      O
                    );
                  default:
                    return /* @__PURE__ */ d.jsxs(
                      LM,
                      {
                        value: String(P.value),
                        disabled: P.disabled ?? !1,
                        className: R(
                          QD({
                            variant: s,
                            isSelected: c === P.value
                          }),
                          !I && "hidden"
                        ),
                        children: [
                          it(P.icon, {
                            className: R("h-5 w-5", {
                              "-ml-xxs": s === "default",
                              "mr-xxs": s === "compact",
                              "text-interactive-disabled": P.disabled
                            })
                          }),
                          /* @__PURE__ */ d.jsx(
                            FM,
                            {
                              className: R("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": P.disabled
                              }),
                              children: P.label
                            }
                          ),
                          /* @__PURE__ */ d.jsx(VM, {})
                        ]
                      },
                      O
                    );
                }
              }) }),
              /* @__PURE__ */ d.jsx(BM, {}),
              /* @__PURE__ */ d.jsx(GM, {})
            ]
          }
        ) })
      ]
    }
  );
};
cd.displayName = "Select";
const JD = pe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "",
      sm: ""
    }
  },
  defaultVariants: {
    size: "default"
  }
}), fp = pe(
  "text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"
), e5 = _.forwardRef(
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
    formatPageOption: l = (S, w) => `${S} / ${w}`,
    formatPageValue: f = (S, w) => `${S} / ${w}`,
    showNavigation: u = !0,
    showRowsPerPage: h = !0,
    hideRowsPerPageOnMobile: p = !1,
    previousPageLabel: y = "Previous page",
    nextPageLabel: m = "Next page",
    size: b,
    className: C,
    ...x
  }, g) => {
    const S = b === "sm" ? "xs" : "sm", w = () => {
      e > 1 && r(e - 1);
    }, k = () => {
      e < t && r(e + 1);
    }, E = (D) => {
      const L = parseInt(D, 10);
      a(L), e > 1 && r(1);
    }, M = (D) => {
      const L = parseInt(D, 10);
      r(L);
    }, P = s.map((D) => ({
      value: D.toString(),
      label: D.toString()
    })), O = Math.max(t, 1), I = Array.from(
      { length: O },
      (D, L) => L + 1
    ).map((D) => ({
      value: D.toString(),
      label: l(D, O, n)
    }));
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: g,
        className: R(JD({ size: b }), C),
        ...x,
        children: [
          h && /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R("gap-xs flex items-center", {
                "max-md:hidden": p
              }),
              children: [
                /* @__PURE__ */ d.jsx("span", { className: R(fp()), children: i }),
                /* @__PURE__ */ d.jsx(
                  cd,
                  {
                    size: b,
                    value: o.toString(),
                    onValueChange: E,
                    options: P
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ d.jsx("span", { className: R(fp()), children: c }),
            /* @__PURE__ */ d.jsx(
              cd,
              {
                size: b,
                value: e.toString(),
                onValueChange: M,
                options: I,
                disabled: n === 0,
                renderValue: f(
                  e,
                  O,
                  n
                ),
                searchThreshold: 1 / 0
              }
            )
          ] }),
          u && /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R("gap-md flex items-center", {
                "gap-xs": b === "sm"
              }),
              children: [
                /* @__PURE__ */ d.jsx(
                  He,
                  {
                    intent: "text",
                    size: S,
                    icon: a2,
                    onClick: w,
                    disabled: e <= 1,
                    "aria-label": y
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  He,
                  {
                    intent: "text",
                    size: S,
                    icon: Ud,
                    onClick: k,
                    disabled: e >= t,
                    "aria-label": m
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
e5.displayName = "Pagination";
const t5 = pe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), n5 = pe(
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
), r5 = pe(
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
), c7 = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: s = !1,
  ...a
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ d.jsxs("div", { className: R(t5({ disabled: o })), children: [
    /* @__PURE__ */ d.jsx(
      lM,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": s,
        className: R(
          n5({
            disabled: o,
            invalid: s
          })
        ),
        ...a,
        children: /* @__PURE__ */ d.jsx(dM, { className: R(r5({ invalid: s })) })
      }
    ),
    /* @__PURE__ */ d.jsxs(
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
}, l7 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  cM,
  {
    className: R("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), o5 = pe(
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
), s5 = "gap-xxs px-sm py-xxs disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 items-center", a5 = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 flex-row
  flex-wrap items-center justify-start`, i5 = `min-w-24 min-h-5.5 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, c5 = pe(
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
), l5 = "gap-xs text-sm text-body-inverse flex-row", d5 = ({
  keyword: e,
  size: t,
  disabled: n,
  onRemove: r,
  removeAriaLabel: o
}) => {
  const { ref: s, isTruncated: a } = IO(), [i, c] = _.useState(!1);
  return (
    // Keep the input focused when the chip or its remove button is clicked
    /* @__PURE__ */ d.jsx(
      "span",
      {
        className: "min-w-0 flex max-w-full",
        onMouseDown: (l) => l.preventDefault(),
        children: /* @__PURE__ */ d.jsx(
          Ai,
          {
            variant: "secondary",
            size: t,
            disabled: n,
            onRemove: r,
            removeAriaLabel: o,
            children: /* @__PURE__ */ d.jsx(
              Kt,
              {
                content: e,
                open: i,
                onOpenChange: (l) => c(l && a),
                children: /* @__PURE__ */ d.jsx("span", { ref: s, className: "block h-full truncate", children: e })
              }
            )
          }
        )
      }
    )
  );
}, u5 = _.forwardRef(
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
    initialKeywords: u,
    removeKeywordAriaLabel: h = "Remove keyword",
    ...p
  }, y) => {
    const m = i || t === "disabled", [b, C] = _.useState(
      u ?? []
    ), [x, g] = _.useState(!1);
    let S;
    typeof t == "string" ? S = t : m ? S = "disabled" : b.length > 0 ? S = "filled" : S = "default";
    const w = _.useRef(S), { compositionHandlers: k, guardKeyHandler: E } = Rc();
    on(() => {
      w.current === "filled" && S !== "filled" && C([]), w.current = S;
    }, [S]);
    const M = (I) => {
      m || o && o(I);
    }, P = (I) => {
      if (!m) {
        if (I.key === "Enter" && n.trim()) {
          const D = [...b, n.trim()];
          if (C(D), o) {
            const L = {
              ...I,
              target: { value: "" }
            };
            o(L);
          }
          f && s && s(D), I.preventDefault();
        }
        if ((I.key === "Backspace" || I.key === "Delete") && !n && b.length > 0) {
          const D = b.slice(0, -1);
          C(D), f && s && s(D), I.preventDefault();
        }
      }
    }, O = (I) => {
      if (m) return;
      const D = b.filter((L, j) => j !== I);
      C(D), f && s && s(D);
    };
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: R(
          "group relative flex flex-col",
          m ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": m ? "true" : void 0,
        children: [
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R(
                o5({
                  size: e,
                  state: S
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ d.jsxs("div", { className: R(s5), children: [
                  /* @__PURE__ */ d.jsx(
                    "span",
                    {
                      className: `text-shape-primary
                disabled:text-shape-interactive-disabled flex items-center`,
                      children: /* @__PURE__ */ d.jsx(qd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ d.jsxs("div", { className: R(a5), children: [
                    b.map((I, D) => /* @__PURE__ */ d.jsx(
                      d5,
                      {
                        keyword: I,
                        size: e === "sm" ? "sm" : "md",
                        disabled: m,
                        onRemove: () => O(D),
                        removeAriaLabel: h
                      },
                      `${D}-${I}`
                    )),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: y,
                        className: R(i5),
                        type: "text",
                        value: n,
                        onChange: M,
                        onKeyDown: E(P),
                        onCompositionStart: k.onCompositionStart,
                        onCompositionEnd: k.onCompositionEnd,
                        onFocus: (I) => {
                          var D;
                          g(!0), (D = p.onFocus) == null || D.call(p, I);
                        },
                        onBlur: (I) => {
                          var D;
                          g(!1), (D = p.onBlur) == null || D.call(p, I);
                        },
                        placeholder: S === "filled" || b.length > 0 ? "" : a,
                        disabled: m,
                        ...p
                      }
                    )
                  ] }),
                  (n || b.length > 0) && !m && /* @__PURE__ */ d.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), s == null || s([]), C([]);
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ d.jsx(Xd, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    className: R(
                      c5({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let I = b;
                      n.trim() && (I = [...b, n.trim()], C(I), o && o({
                        target: { value: "" }
                      })), s == null || s(I);
                    },
                    disabled: m,
                    children: l
                  }
                )
              ]
            }
          ),
          c && /* @__PURE__ */ d.jsx(
            "div",
            {
              className: R(
                l5,
                `z-tooltip bg-surface-tooltip-neutral rounded-sm px-xs py-xxs
              leading-tight left-0 mt-xxs absolute top-full`,
                x ? "flex" : "hidden"
              ),
              children: c
            }
          )
        ]
      }
    );
  }
);
u5.displayName = "SearchBar";
const Tx = _.createContext(null), f5 = () => {
  const e = _.useContext(Tx);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, h5 = pe(
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
), $x = _.forwardRef(
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
    const u = _.useId(), h = a ?? `segmented-control-${u}`, p = t !== void 0, [y, m] = _.useState(n), b = p ? t : y, C = _.useCallback(
      (g) => {
        p || m(g), r == null || r(g);
      },
      [p, r]
    ), x = _.useMemo(
      () => ({
        name: e,
        idPrefix: h,
        value: b,
        disabled: s,
        invalid: o,
        onValueChange: C
      }),
      [e, h, b, s, o, C]
    );
    return /* @__PURE__ */ d.jsx(Tx.Provider, { value: x, children: /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: f,
        id: a,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": s || void 0,
        className: R(h5({ invalid: o }), i),
        ...l,
        children: c
      }
    ) });
  }
);
$x.displayName = "SegmentedControl.Group";
const p5 = pe(
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
), Wx = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: s
}) => {
  const a = f5(), i = a.value !== void 0 && String(a.value) === String(e), c = t || a.disabled, l = r ?? `${a.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ d.jsxs(
    "label",
    {
      htmlFor: l,
      className: R(p5({ selected: i, disabled: c }), o),
      children: [
        /* @__PURE__ */ d.jsx(
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
Wx.displayName = "SegmentedControl.Option";
const d7 = {
  Group: $x,
  Option: Wx
}, Lx = _.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: s, toggleCollapsed: a } = ma(), i = s ? n : t, c = /* @__PURE__ */ d.jsx(
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
      children: s ? /* @__PURE__ */ d.jsx(x2, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ d.jsx(y2, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ d.jsx(Kt, { content: i, side: "right", delayDuration: 0, children: c }) : c;
});
Lx.displayName = "SideNavigationCollapseButton";
const m5 = pe(
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
), v5 = _.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ d.jsx(gx, { defaultCollapsed: e, children: /* @__PURE__ */ d.jsx(Fx, { ref: n, ...t }) }));
v5.displayName = "SideNavigation";
const Fx = _.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: s = !1,
    collapseLabel: a,
    expandLabel: i,
    responsive: c = !1,
    ...l
  }, f) => {
    const { isCollapsed: u } = ma(), h = t || (u ? "collapsed" : "expanded");
    return /* @__PURE__ */ d.jsxs(
      "nav",
      {
        ref: f,
        className: R(
          m5({ width: h }),
          "group",
          { "max-md:hidden": c },
          e
        ),
        "data-cc-side-navigation": "",
        "data-collapsed": h === "collapsed",
        "data-responsive": c || void 0,
        ...l,
        children: [
          n && /* @__PURE__ */ d.jsx(
            "div",
            {
              className: R(
                "p-sm",
                u ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ d.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ d.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ d.jsx(dD, { children: r }) }),
          s && /* @__PURE__ */ d.jsx(
            Lx,
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
Fx.displayName = "SideNavigationContent";
const g5 = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", y5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", u7 = () => {
  const { isCollapsed: e } = ma();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ d.jsx(
      "img",
      {
        src: g5,
        alt: "SDS管理",
        className: `h-auto w-[5.8125rem] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ d.jsx(
      "img",
      {
        src: y5,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
};
var b5 = Object.defineProperty, x5 = Object.defineProperties, w5 = Object.getOwnPropertyDescriptors, hp = Object.getOwnPropertySymbols, C5 = Object.prototype.hasOwnProperty, S5 = Object.prototype.propertyIsEnumerable, pp = (e, t, n) => t in e ? b5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    C5.call(t, n) && pp(e, n, t[n]);
  if (hp)
    for (var n of hp(t))
      S5.call(t, n) && pp(e, n, t[n]);
  return e;
}, Zr = (e, t) => x5(e, w5(t));
function _5(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ya(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function yl(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function k5(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (g, S) => g === S || g !== null && typeof g == "object" && "id" in g && g.id === S;
  if (Array.isArray(e)) {
    const g = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (g === -1 || S === -1) {
      if (yl(s)) {
        const w = s.initialIndex, k = s.index;
        return w === k || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, k);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== g)
        return n(e, g, w);
    }
    return n(e, g, S);
  }
  const l = Object.entries(e);
  let f = -1, u, h = -1, p;
  for (const [g, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (u = g)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = g)), f !== -1 && h !== -1)
      break;
  if (f === -1 && yl(s)) {
    const g = s.initialGroup == null ? void 0 : Ya(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ya(e, s.group), k = s.index;
    if (g == null || w == null || g === w && S === k)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return Zr(Xr({}, e), {
        [g]: n(e[g], S, k)
      });
    const E = e[g][S];
    return Zr(Xr({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, k),
        E,
        ...e[w].slice(k)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: y } = s.manager, m = (o = (r = y.shape) == null ? void 0 : r.current.center) != null ? o : y.position.current;
  if (p == null) {
    const g = Ya(e, a.id);
    if (g != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && yl(s)) {
      const g = s.group == null ? void 0 : Ya(e, s.group), S = s.group != null && g !== u, w = s.index !== f;
      if (S || w) {
        const k = s.group == null ? u : g;
        if (k != null) {
          if (u === k)
            return Zr(Xr({}, e), {
              [u]: n(
                e[u],
                f,
                s.index
              )
            });
          const E = e[u][f];
          return Zr(Xr({}, e), {
            [u]: [
              ...e[u].slice(0, f),
              ...e[u].slice(f + 1)
            ],
            [k]: [
              ...e[k].slice(0, s.index),
              E,
              ...e[k].slice(s.index)
            ]
          });
        }
      }
    }
    return "preventDefault" in t && t.preventDefault(), e;
  }
  if (u === p)
    return Zr(Xr({}, e), {
      [u]: n(e[u], f, h)
    });
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, x = e[u][f];
  return Zr(Xr({}, e), {
    [u]: [
      ...e[u].slice(0, f),
      ...e[u].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      x,
      ...e[p].slice(h + C)
    ]
  });
}
function E5(e, t) {
  return k5(e, t, _5);
}
var M5 = Symbol.for("preact-signals");
function Ic() {
  if (Ln > 1)
    Ln--;
  else {
    var e, t = !1;
    for ((function() {
      var o = Oi;
      for (Oi = void 0; o !== void 0; ) {
        var s = o.S;
        if (s.v === o.v) for (var a = s.t; a !== void 0; a = a.x) a.i === o.i && (a.i = s.i);
        o = o.o;
      }
    })(); Ms !== void 0; ) {
      var n = Ms;
      for (Ms = void 0, Ri++; n !== void 0; ) {
        var r = n.u;
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && zx(n)) try {
          n.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        n = r;
      }
    }
    if (Ri = 0, Ln--, t) throw e;
  }
}
function Be(e) {
  if (Ln > 0) return e();
  ld = ++N5, Ln++;
  try {
    return e();
  } finally {
    Ic();
  }
}
var Es, Le = void 0;
function Ee(e) {
  var t = Le, n = Es;
  Le = void 0, Es = void 0;
  try {
    return e();
  } finally {
    Le = t, Es = n;
  }
}
var Ms = void 0, Ln = 0, Ri = 0, N5 = 0, ld = 0, Oi = void 0, Di = 0;
function Vx(e) {
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
Mt.prototype.brand = M5;
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
  return qt(function() {
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
  var e = Vx(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Ri > 100) throw new Error("Cycle detected");
    (function(n) {
      Ln !== 0 && Ri === 0 && n.l !== ld && (n.l = ld, Oi = { S: n, v: n.v, i: n.i, o: Oi });
    })(this), this.v = e, this.i++, Di++, Ln++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Ic();
    }
  }
} });
function Fo(e, t) {
  return new Mt(e, t);
}
function zx(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function Bx(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function Hx(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Fr(e, t) {
  Mt.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Di - 1, this.f = 4;
}
Fr.prototype = new Mt();
Fr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Di)) return !0;
  if (this.g = Di, this.f |= 1, this.i > 0 && !zx(this))
    return this.f &= -2, !0;
  var e = Le;
  try {
    Bx(this), Le = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return Le = e, Hx(this), this.f &= -2, !0;
};
Fr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Mt.prototype.S.call(this, e);
};
Fr.prototype.U = function(e) {
  if (this.t !== void 0 && (Mt.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
  }
};
Fr.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var e = this.t; e !== void 0; e = e.x) e.t.N();
  }
};
Object.defineProperty(Fr.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var e = Vx(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function mp(e, t) {
  return new Fr(e, t);
}
function Gx(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    Ln++;
    var n = Le;
    Le = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Gu(e), r;
    } finally {
      Le = n, Ic();
    }
  }
}
function Gu(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, Gx(e);
}
function P5(e) {
  if (Le !== this) throw new Error("Out-of-order effect");
  Hx(this), Le = e, this.f &= -2, 8 & this.f && Gu(this), Ic();
}
function Vo(e, t) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t == null ? void 0 : t.name, Es && Es.push(this);
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
  this.f |= 1, this.f &= -9, Gx(this), Bx(this), Ln++;
  var e = Le;
  return Le = this, P5.bind(this, e);
};
Vo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = Ms, Ms = this);
};
Vo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Gu(this);
};
Vo.prototype.dispose = function() {
  this.d();
};
function qt(e, t) {
  var n = new Vo(e, t);
  try {
    n.c();
  } catch (o) {
    throw n.d(), o;
  }
  var r = n.d.bind(n);
  return r[Symbol.dispose] = r, r;
}
var A5 = Object.create, Yu = Object.defineProperty, R5 = Object.defineProperties, O5 = Object.getOwnPropertyDescriptor, D5 = Object.getOwnPropertyDescriptors, vp = Object.getOwnPropertySymbols, I5 = Object.prototype.hasOwnProperty, j5 = Object.prototype.propertyIsEnumerable, T5 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), zo = (e) => {
  throw TypeError(e);
}, dd = (e, t, n) => t in e ? Yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $5 = (e, t) => {
  for (var n in t || (t = {}))
    I5.call(t, n) && dd(e, n, t[n]);
  if (vp)
    for (var n of vp(t))
      j5.call(t, n) && dd(e, n, t[n]);
  return e;
}, W5 = (e, t) => R5(e, D5(t)), gp = (e, t) => Yu(e, "name", { value: t, configurable: !0 }), L5 = (e) => {
  var t;
  return [, , , A5((t = void 0) != null ? t : null)];
}, Yx = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ls = (e) => e !== void 0 && typeof e != "function" ? zo("Function expected") : e, F5 = (e, t, n, r, o) => ({ kind: Yx[e], name: t, metadata: r, addInitializer: (s) => n._ ? zo("Already initialized") : o.push(ls(s || null)) }), Kx = (e, t) => dd(t, T5("metadata"), e[3]), gr = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Bo = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), y = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = Yx[u + 5], b = u > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && O5(u < 4 ? o : { get [n]() {
    return Bt(this, s);
  }, set [n](S) {
    return Zn(this, s, S);
  } }, n));
  u ? p && u < 4 && gp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : gp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = F5(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => V5(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Bt : z5)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Zn(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? ls(i) && (u > 4 ? b.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? zo("Object expected") : (ls(a = i.get) && (x.get = a), ls(a = i.set) && (x.set = a), ls(a = i.init) && b.unshift(a));
  return u || Kx(e, o), x && Yu(o, n, x), p ? u ^ 4 ? s : x : o;
}, Ku = (e, t, n) => t.has(e) || zo("Cannot " + n), V5 = (e, t) => Object(t) !== t ? zo('Cannot use the "in" operator on this value') : e.has(t), Bt = (e, t, n) => (Ku(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ds = (e, t, n) => t.has(e) ? zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zn = (e, t, n, r) => (Ku(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), z5 = (e, t, n) => (Ku(e, t, "access private method"), n);
function ud(e, t) {
  if (t) {
    let n;
    return mp(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return mp(e);
}
function vn(e, t) {
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
      (r, o) => !vn(r, t[o])
    );
  if (typeof e == "object" && typeof t == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    return n.length !== r.length ? !1 : !n.some(
      (s) => !vn(e[s], t[s])
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
    return r || (r = ud(e.bind(this)), n.set(this, r)), r.value;
  };
}
function bl(e = !0) {
  return function(t, n) {
    n.addInitializer(function() {
      const r = n.kind === "field" ? this : n.static ? this : Object.getPrototypeOf(this), o = Object.getOwnPropertyDescriptor(r, n.name);
      o && Object.defineProperty(r, n.name, W5($5({}, o), { enumerable: e }));
    });
  };
}
function ga(...e) {
  const t = e.map((n) => qt(n));
  return () => t.forEach((n) => n());
}
var Ux, qx, Xx, Zx, Qx, Jx, Ct, Uu, xl, fd, hd, bt, qu, wl, e0, pd, Xu, Cl, md, vd;
Jx = [Me], Qx = [Me], Zx = [Me], Xx = [bl()], qx = [bl()], Ux = [bl()];
var Vr = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, gr(Ct, 5, this), ds(this, bt), ds(this, Uu, gr(Ct, 8, this)), gr(Ct, 11, this), ds(this, qu, gr(Ct, 12, this)), gr(Ct, 15, this), ds(this, Xu, gr(Ct, 16, this)), gr(Ct, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return Bt(this, bt, md);
  }
  get initial() {
    return Bt(this, bt, fd);
  }
  get previous() {
    return Bt(this, bt, e0);
  }
  /** Set the current value */
  set current(e) {
    const t = Ee(() => Bt(this, bt, md));
    e && t && this.equals(t, e) || Be(() => {
      Bt(this, bt, fd) || Zn(this, bt, e, hd), Zn(this, bt, t, pd), Zn(this, bt, e, vd);
    });
  }
  /** Reset the state to the initial value */
  reset(e = this.defaultValue) {
    Be(() => {
      Zn(this, bt, void 0, pd), Zn(this, bt, e, hd), Zn(this, bt, e, vd);
    });
  }
};
Ct = L5();
Uu = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakSet();
qu = /* @__PURE__ */ new WeakMap();
Xu = /* @__PURE__ */ new WeakMap();
xl = Bo(Ct, 20, "#initial", Jx, bt, Uu), fd = xl.get, hd = xl.set;
wl = Bo(Ct, 20, "#previous", Qx, bt, qu), e0 = wl.get, pd = wl.set;
Cl = Bo(Ct, 20, "#current", Zx, bt, Xu), md = Cl.get, vd = Cl.set;
Bo(Ct, 2, "current", Xx, Vr);
Bo(Ct, 2, "initial", qx, Vr);
Bo(Ct, 2, "previous", Ux, Vr);
Kx(Ct, Vr);
function Sl(e) {
  return Ee(() => {
    const t = {};
    for (const n in e)
      t[n] = e[n];
    return t;
  });
}
var br, B5 = class {
  constructor() {
    ds(this, br, /* @__PURE__ */ new WeakMap());
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
var H5 = Object.create, t0 = Object.defineProperty, G5 = Object.getOwnPropertyDescriptor, yp = Object.getOwnPropertySymbols, Y5 = Object.prototype.hasOwnProperty, K5 = Object.prototype.propertyIsEnumerable, n0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), jc = (e) => {
  throw TypeError(e);
}, bp = Math.pow, gd = (e, t, n) => t in e ? t0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, U5 = (e, t) => {
  for (var n in t || (t = {}))
    Y5.call(t, n) && gd(e, n, t[n]);
  if (yp)
    for (var n of yp(t))
      K5.call(t, n) && gd(e, n, t[n]);
  return e;
}, q5 = (e) => {
  var t;
  return [, , , H5((t = e == null ? void 0 : e[n0("metadata")]) != null ? t : null)];
}, r0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], o0 = (e) => e !== void 0 && typeof e != "function" ? jc("Function expected") : e, X5 = (e, t, n, r, o) => ({ kind: r0[e], name: t, metadata: r, addInitializer: (s) => n._ ? jc("Already initialized") : o.push(o0(s || null)) }), Z5 = (e, t) => gd(t, n0("metadata"), e[3]), Q5 = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, s0 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, y = r0[f + 5], m = e[p] || (e[p] = []), b = (o = o.prototype, G5(o, n)), C = r.length - 1; C >= 0; C--)
    c = X5(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (x) => n in x }, l.get = (x) => x[n], a = (0, r[C])(b[y], c), i._ = 1, o0(a) && (b[y] = a);
  return b && t0(o, n, b), o;
}, a0 = (e, t, n) => t.has(e) || jc("Cannot " + n), J5 = (e, t, n) => (a0(e, t, "read from private field"), t.get(e)), eI = (e, t, n) => t.has(e) ? jc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), tI = (e, t, n, r) => (a0(e, t, "write to private field"), t.set(e, n), n), Ht = class yd {
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
    return new yd(t.x - n.x, t.y - n.y);
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
    return new yd(t, n);
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
    return c.scale = U5({}, i), c;
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
    return t instanceof xr ? nI(this, t) : 0;
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
function nI(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), a = o - r, i = s - n;
  return r < o && n < s ? a * i : 0;
}
var i0, c0, bd, ci, ya, Tc = class extends (bd = Vr, c0 = [Ue], i0 = [Ue], bd) {
  constructor(t) {
    const n = Ht.from(t);
    super(n, (r, o) => Ht.equals(r, o)), Q5(ya, 5, this), eI(this, ci, 0), this.velocity = { x: 0, y: 0 };
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
    }, s = Date.now(), a = s - J5(this, ci), i = (c) => Math.round(c / a * 100);
    Be(() => {
      tI(this, ci, s), this.velocity = {
        x: i(o.x),
        y: i(o.y)
      }, super.current = r;
    });
  }
  reset(t = this.defaultValue) {
    super.reset(Ht.from(t)), this.velocity = { x: 0, y: 0 };
  }
};
ya = q5(bd);
ci = /* @__PURE__ */ new WeakMap();
s0(ya, 2, "delta", c0, Tc);
s0(ya, 2, "direction", i0, Tc);
Z5(ya, Tc);
function xd({ x: e, y: t }, n) {
  const r = Math.abs(e), o = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(bp(r, 2) + bp(o, 2)) > n : "x" in n && "y" in n ? r > n.x && o > n.y : "x" in n ? r > n.x : "y" in n ? o > n.y : !1;
}
var l0 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(l0 || {}), d0 = Object.values(l0), rI = Object.create, Zu = Object.defineProperty, oI = Object.defineProperties, sI = Object.getOwnPropertyDescriptor, aI = Object.getOwnPropertyDescriptors, Ii = Object.getOwnPropertySymbols, u0 = Object.prototype.hasOwnProperty, f0 = Object.prototype.propertyIsEnumerable, h0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ho = (e) => {
  throw TypeError(e);
}, wd = (e, t, n) => t in e ? Zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qu = (e, t) => {
  for (var n in t || (t = {}))
    u0.call(t, n) && wd(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      f0.call(t, n) && wd(e, n, t[n]);
  return e;
}, Ju = (e, t) => oI(e, aI(t)), xp = (e, t) => Zu(e, "name", { value: t, configurable: !0 }), p0 = (e, t) => {
  var n = {};
  for (var r in e)
    u0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ii)
    for (var r of Ii(e))
      t.indexOf(r) < 0 && f0.call(e, r) && (n[r] = e[r]);
  return n;
}, Go = (e) => {
  var t;
  return [, , , rI((t = e == null ? void 0 : e[h0("metadata")]) != null ? t : null)];
}, m0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], us = (e) => e !== void 0 && typeof e != "function" ? Ho("Function expected") : e, iI = (e, t, n, r, o) => ({ kind: m0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ho("Already initialized") : o.push(us(s || null)) }), zr = (e, t) => wd(t, h0("metadata"), e[3]), we = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Ne = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), y = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = m0[u + 5], b = u > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && sI(u < 4 ? o : { get [n]() {
    return Ke(this, s);
  }, set [n](S) {
    return Lt(this, s, S);
  } }, n));
  u ? p && u < 4 && xp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : xp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = iI(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => cI(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Ke : v0)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Lt(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? us(i) && (u > 4 ? b.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? Ho("Object expected") : (us(a = i.get) && (x.get = a), us(a = i.set) && (x.set = a), us(a = i.init) && b.unshift(a));
  return u || zr(e, o), x && Zu(o, n, x), p ? u ^ 4 ? s : x : o;
}, ef = (e, t, n) => t.has(e) || Ho("Cannot " + n), cI = (e, t) => Object(t) !== t ? Ho('Cannot use the "in" operator on this value') : e.has(t), Ke = (e, t, n) => (ef(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Re = (e, t, n) => t.has(e) ? Ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Lt = (e, t, n, r) => (ef(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), v0 = (e, t, n) => (ef(e, t, "access private method"), n);
function g0(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function ba(e) {
  return (t) => g0(e, t);
}
function Bs(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var y0, Hs, tf, li;
y0 = [Me];
var wt = class {
  /**
   * Creates a new plugin instance.
   *
   * @param manager - The drag and drop manager that owns this plugin
   * @param options - Optional configuration for the plugin
   */
  constructor(e, t) {
    this.manager = e, this.options = t, Re(this, tf, we(Hs, 8, this, !1)), we(Hs, 11, this), Re(this, li, /* @__PURE__ */ new Set());
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
    const t = qt(e.bind(this));
    return Ke(this, li).add(t), t;
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
    Ke(this, li).forEach((e) => e());
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
    return g0(this, e);
  }
};
Hs = Go(null);
tf = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
Ne(Hs, 4, "disabled", y0, wt, tf);
zr(Hs, wt);
var xa = class extends wt {
}, di, _l = class {
  /**
   * Creates a new plugin registry.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), Re(this, di, []);
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
    const t = e.map(Bs).reduce((r, o) => {
      const s = r.find(({ plugin: a }) => a === o.plugin);
      return s ? (s.options = o.options, r) : [...r, o];
    }, []), n = t.map(({ plugin: r }) => r);
    for (const r of Ke(this, di))
      if (!n.includes(r)) {
        if (r.prototype instanceof xa)
          continue;
        this.unregister(r);
      }
    for (const { plugin: r, options: o } of t)
      this.register(r, o);
    Lt(this, di, n);
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
di = /* @__PURE__ */ new WeakMap();
function lI(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Ka = [], oo, so, dI = class extends wt {
  /**
   * Creates a new CollisionObserver instance.
   *
   * @param manager - The drag drop manager instance
   */
  constructor(e) {
    super(e), Re(this, oo), Re(this, so), this.computeCollisions = this.computeCollisions.bind(this), Lt(this, so, Fo(Ka)), this.destroy = ga(
      () => {
        const t = this.computeCollisions(), n = Ee(
          () => this.manager.dragOperation.position.current
        );
        if (t !== Ka) {
          const r = Ke(this, oo);
          if (Lt(this, oo, n), r && n.x == r.x && n.y == r.y)
            return;
        } else
          Lt(this, oo, void 0);
        Ke(this, so).value = t;
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
      e ? Ke(this, so).value = this.computeCollisions() : Lt(this, oo, void 0);
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
      return Ka;
    const i = [], c = [];
    for (const l of e ?? n.droppables) {
      if (l.disabled || o && !l.accepts(o))
        continue;
      const f = t ?? l.collisionDetector;
      if (!f)
        continue;
      c.push(l), l.shape;
      const u = Ee(
        () => f({
          droppable: l,
          dragOperation: r
        })
      );
      u && (l.collisionPriority != null && (u.priority = l.collisionPriority), i.push(u));
    }
    return c.length === 0 ? Ka : (i.sort(lI), i);
  }
  /**
   * Gets the current collisions signal value.
   */
  get collisions() {
    return Ke(this, so).value;
  }
};
oo = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
var b0, x0, w0, nf, C0, nn, rf, fo, of, sf;
w0 = [Me], x0 = [Me], b0 = [Me];
var Hn = class wr {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(t, n) {
    Re(this, rf, we(nn, 8, this)), we(nn, 11, this), Re(this, fo), Re(this, of, we(nn, 12, this)), we(nn, 15, this), Re(this, sf, we(nn, 16, this)), we(nn, 19, this);
    const { effects: r, id: o, data: s = {}, disabled: a = !1, register: i = !0 } = t;
    let c = o;
    Lt(this, fo, Fo(o)), this.manager = n, this.data = s, this.disabled = a, this.effects = () => {
      var l;
      return [
        () => {
          const { id: f, manager: u } = this;
          if (f !== c)
            return c = f, u == null || u.registry.register(this), () => u == null ? void 0 : u.registry.unregister(this);
        },
        ...(l = r == null ? void 0 : r()) != null ? l : []
      ];
    }, this.register = this.register.bind(this), this.unregister = this.unregister.bind(this), this.destroy = this.destroy.bind(this), n && i && queueMicrotask(this.register);
  }
  get id() {
    var t, n;
    const r = Ke(this, fo).value;
    return (n = (t = wr.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? n : r;
  }
  set id(t) {
    var n, r;
    const o = (r = (n = wr.pendingIdChanges) == null ? void 0 : n.get(this)) != null ? r : Ke(this, fo).peek();
    t !== o && (wr.pendingIdChanges || (wr.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var s;
      return v0(s = wr, nf, C0).call(s);
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
nn = Go(null);
nf = /* @__PURE__ */ new WeakSet();
C0 = function() {
  const e = Hn.pendingIdChanges;
  Hn.pendingIdChanges = null, e && Be(() => {
    for (const [t, n] of e)
      Ke(t, fo).value = n;
  });
};
rf = /* @__PURE__ */ new WeakMap();
fo = /* @__PURE__ */ new WeakMap();
of = /* @__PURE__ */ new WeakMap();
sf = /* @__PURE__ */ new WeakMap();
Ne(nn, 4, "manager", w0, Hn, rf);
Ne(nn, 4, "data", x0, Hn, of);
Ne(nn, 4, "disabled", b0, Hn, sf);
Re(Hn, nf);
zr(nn, Hn);
Hn.pendingIdChanges = null;
var $c = Hn, wp = class {
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
      const a = ga(...t.effects());
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
}, S0, _0, k0, E0, M0, N0, Cd, St, af, cf, lf, En = class extends (Cd = $c, N0 = [Me], M0 = [Me], E0 = [Me], k0 = [Ue], _0 = [Ue], S0 = [Ue], Cd) {
  constructor(t, n) {
    var r = t, { modifiers: o, type: s, sensors: a, plugins: i, effects: c } = r, l = p0(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(
      Ju(Qu({}, l), {
        effects: () => {
          var f;
          return [
            ...(f = c == null ? void 0 : c()) != null ? f : [],
            () => {
              const { manager: u, plugins: h } = this;
              if (!(!u || !h))
                for (const p of h) {
                  const { plugin: y } = Bs(p);
                  u.registry.plugins.register(y);
                }
            }
          ];
        }
      }),
      n
    ), we(St, 5, this), Re(this, af, we(St, 8, this)), we(St, 11, this), Re(this, cf, we(St, 12, this)), we(St, 15, this), Re(this, lf, we(St, 16, this, this.isDragSource ? "dragging" : "idle")), we(St, 19, this), this.type = s, this.sensors = a, this.modifiers = o, this.alignment = l.alignment, this.plugins = i;
  }
  /**
   * Look up per-entity options for a given plugin constructor.
   */
  pluginConfig(t) {
    if (this.plugins)
      for (const n of this.plugins) {
        const r = Bs(n);
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
St = Go(Cd);
af = /* @__PURE__ */ new WeakMap();
cf = /* @__PURE__ */ new WeakMap();
lf = /* @__PURE__ */ new WeakMap();
Ne(St, 4, "type", N0, En, af);
Ne(St, 4, "modifiers", M0, En, cf);
Ne(St, 4, "status", E0, En, lf);
Ne(St, 2, "isDropping", k0, En);
Ne(St, 2, "isDragging", _0, En);
Ne(St, 2, "isDragSource", S0, En);
zr(St, En);
var P0, A0, R0, O0, D0, I0, Sd, et, df, uf, ff, hf, pf, Mn = class extends (Sd = $c, I0 = [Me], D0 = [Me], O0 = [Me], R0 = [Me], A0 = [Me], P0 = [Ue], Sd) {
  constructor(t, n) {
    var r = t, { accept: o, collisionDetector: s, collisionPriority: a, type: i } = r, c = p0(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, n), we(et, 5, this), Re(this, df, we(et, 8, this)), we(et, 11, this), Re(this, uf, we(et, 12, this)), we(et, 15, this), Re(this, ff, we(et, 16, this)), we(et, 19, this), Re(this, hf, we(et, 20, this)), we(et, 23, this), Re(this, pf, we(et, 24, this)), we(et, 27, this), this.accept = o, this.collisionDetector = s, this.collisionPriority = a, this.type = i;
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
et = Go(Sd);
df = /* @__PURE__ */ new WeakMap();
uf = /* @__PURE__ */ new WeakMap();
ff = /* @__PURE__ */ new WeakMap();
hf = /* @__PURE__ */ new WeakMap();
pf = /* @__PURE__ */ new WeakMap();
Ne(et, 4, "accept", I0, Mn, df);
Ne(et, 4, "type", D0, Mn, uf);
Ne(et, 4, "collisionDetector", O0, Mn, ff);
Ne(et, 4, "collisionPriority", R0, Mn, hf);
Ne(et, 4, "shape", A0, Mn, pf);
Ne(et, 2, "isDropTarget", P0, Mn);
zr(et, Mn);
var uI = class {
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
}, fI = class extends uI {
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
function ui(e, t = !0) {
  let n = !1;
  return Ju(Qu({}, e), {
    cancelable: t,
    get defaultPrevented() {
      return n;
    },
    preventDefault() {
      t && (n = !0);
    }
  });
}
var hI = class extends xa {
  constructor(e) {
    super(e);
    const t = (r, o) => r.map(({ id: s }) => s).join("") === o.map(({ id: s }) => s).join("");
    let n = [];
    this.destroy = ga(
      () => {
        const { dragOperation: r, collisionObserver: o } = e;
        r.status.initializing && (n = [], o.enable());
      },
      () => {
        const { collisionObserver: r, monitor: o } = e, { collisions: s } = r;
        if (r.isDisabled() || $c.pendingIdChanges)
          return;
        const a = ui({
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
}, Wc = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Wc || {}), Lc = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Lc || {}), j0, T0, $0, W0, L0, F0, V0, Ut, mf;
V0 = [Me], F0 = [Ue], L0 = [Ue], W0 = [Ue], $0 = [Ue], T0 = [Ue], j0 = [Ue];
var Gn = class {
  constructor() {
    we(Ut, 5, this), Re(this, mf, we(
      Ut,
      8,
      this,
      "idle"
      /* Idle */
    )), we(Ut, 11, this);
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
Ut = Go(null);
mf = /* @__PURE__ */ new WeakMap();
Ne(Ut, 4, "value", V0, Gn, mf);
Ne(Ut, 2, "current", F0, Gn);
Ne(Ut, 2, "idle", L0, Gn);
Ne(Ut, 2, "initializing", W0, Gn);
Ne(Ut, 2, "initialized", $0, Gn);
Ne(Ut, 2, "dragging", T0, Gn);
Ne(Ut, 2, "dropped", j0, Gn);
zr(Ut, Gn);
var pI = class {
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
      const r = ui({
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
      const a = ui({
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
      const a = ui(
        {
          nativeEvent: e.event,
          operation: r.snapshot(),
          by: e.by,
          to: e.to
        },
        (t = e.cancelable) != null ? t : !0
      );
      ((n = e.propagate) == null || n) && this.manager.monitor.dispatch("dragmove", a), queueMicrotask(() => {
        var i, c, l, f, u;
        if (a.defaultPrevented)
          return;
        const h = (u = e.to) != null ? u : {
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
            const { source: f } = r, u = qt(() => {
              (f == null ? void 0 : f.status) === "idle" && (u(), l());
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
}, ko = class extends wt {
  /**
   * Creates a new sensor instance.
   *
   * @param manager - The drag drop manager instance
   * @param options - Optional sensor configuration
   */
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, mI = class extends AbortController {
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
}, fi, z0 = class {
  constructor(e) {
    this.options = e, Re(this, fi);
  }
  set controller(e) {
    Lt(this, fi, e), e.signal.addEventListener("abort", () => this.abort());
  }
  /**
   * Called when the activation is triggered.
   */
  activate(e) {
    var t;
    (t = Ke(this, fi)) == null || t.activate(e);
  }
};
fi = /* @__PURE__ */ new WeakMap();
var Cp = class extends wt {
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
}, vI = class {
  /**
   * Creates a new registry instance.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.draggables = new wp(), this.droppables = new wp(), this.plugins = new _l(e), this.sensors = new _l(e), this.modifiers = new _l(e);
  }
  register(e, t) {
    if (e instanceof En)
      return this.draggables.register(e.id, e);
    if (e instanceof Mn)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof Cp)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof ko)
      return this.sensors.register(e, t);
    if (e.prototype instanceof wt)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof $c)
      return e instanceof En ? this.draggables.unregister(e.id, e) : e instanceof Mn ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof Cp)
      return this.modifiers.unregister(e);
    if (e.prototype instanceof ko)
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
}, B0, H0, G0, Y0, K0, U0, q0, X0, Z0, fs, hi, ao, ze, vf, gf, yf, bf, xf, hs;
Z0 = [Ue], X0 = [Me], q0 = [Me], U0 = [Me], K0 = [Me], Y0 = [Me], G0 = [Ue], H0 = [Ue], B0 = [Ue];
var un = class {
  /**
   * Creates a new drag operation instance.
   *
   * @param manager - The drag and drop manager that owns this operation
   */
  constructor(e) {
    we(ze, 5, this), Re(this, fs), Re(this, hi), Re(this, ao, new Vr(
      void 0,
      (t, n) => t && n ? t.equals(n) : t === n
    )), this.status = new Gn(), Re(this, vf, we(ze, 8, this, !1)), we(ze, 11, this), Re(this, gf, we(ze, 12, this, null)), we(ze, 15, this), Re(this, yf, we(ze, 16, this, null)), we(ze, 19, this), Re(this, bf, we(ze, 20, this, null)), we(ze, 23, this), Re(this, xf, we(ze, 24, this, [])), we(ze, 27, this), this.position = new Tc({ x: 0, y: 0 }), Re(this, hs, { x: 0, y: 0 }), Lt(this, fs, e);
  }
  get shape() {
    const { current: e, initial: t, previous: n } = Ke(this, ao);
    return !e || !t ? null : { current: e, initial: t, previous: n };
  }
  /**
   * Sets the shape of the dragged entity.
   *
   * @param value - The new shape or null to reset
   */
  set shape(e) {
    e ? Ke(this, ao).current = e : Ke(this, ao).reset();
  }
  get source() {
    var e;
    const t = this.sourceIdentifier;
    if (t == null) return null;
    const n = Ke(this, fs).registry.draggables.get(t);
    return n && Lt(this, hi, n), (e = n ?? Ke(this, hi)) != null ? e : null;
  }
  get target() {
    var e;
    const t = this.targetIdentifier;
    return t != null && (e = Ke(this, fs).registry.droppables.get(t)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: t } = this.position.delta;
    let n = { x: e, y: t };
    for (const r of this.modifiers)
      n = r.apply(Ju(Qu({}, this.snapshot()), {
        transform: n
      }));
    return Lt(this, hs, n), n;
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
      transform: Ke(this, hs),
      shape: this.shape ? Sl(this.shape) : null,
      position: Sl(this.position),
      status: Sl(this.status),
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
      ), this.sourceIdentifier = null, this.targetIdentifier = null, Ke(this, ao).reset(), this.position.reset({ x: 0, y: 0 }), Lt(this, hs, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
ze = Go(null);
fs = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
ao = /* @__PURE__ */ new WeakMap();
vf = /* @__PURE__ */ new WeakMap();
gf = /* @__PURE__ */ new WeakMap();
yf = /* @__PURE__ */ new WeakMap();
bf = /* @__PURE__ */ new WeakMap();
xf = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
Ne(ze, 2, "shape", Z0, un);
Ne(ze, 4, "canceled", X0, un, vf);
Ne(ze, 4, "activatorEvent", q0, un, gf);
Ne(ze, 4, "sourceIdentifier", U0, un, yf);
Ne(ze, 4, "targetIdentifier", K0, un, bf);
Ne(ze, 4, "modifiers", Y0, un, xf);
Ne(ze, 2, "source", G0, un);
Ne(ze, 2, "target", H0, un);
Ne(ze, 2, "transform", B0, un);
zr(ze, un);
var gI = {
  get rendering() {
    return Promise.resolve();
  }
};
function sn(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var yI = class {
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
    const r = t ?? {}, o = sn(r.plugins, []), s = sn(r.sensors, []), a = sn(r.modifiers, []), i = (n = r.renderer) != null ? n : gI, c = new fI(this), l = new vI(this);
    this.registry = l, this.monitor = c, this.renderer = i, this.actions = new pI(this), this.dragOperation = new un(this), this.collisionObserver = new dI(this), this.plugins = [hI, ...o], this.modifiers = a, this.sensors = s;
    const { destroy: f } = this, u = ga(() => {
      var h, p, y;
      const m = Ee(() => this.dragOperation.modifiers), b = this.modifiers;
      for (const C of m)
        b.includes(C) || C.destroy();
      this.dragOperation.modifiers = (y = (p = (h = this.dragOperation.source) == null ? void 0 : h.modifiers) == null ? void 0 : p.map((C) => {
        const { plugin: x, options: g } = Bs(C);
        return new x(this, g);
      })) != null ? y : b;
    });
    this.destroy = () => {
      u(), f();
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
}, Q0 = (e) => {
  throw TypeError(e);
}, wf = (e, t, n) => t.has(e) || Q0("Cannot " + n), xe = (e, t, n) => (wf(e, t, "read from private field"), t.get(e)), At = (e, t, n) => t.has(e) ? Q0("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $t = (e, t, n, r) => (wf(e, t, "write to private field"), t.set(e, n), n), J0 = (e, t, n) => (wf(e, t, "access private method"), n);
function Fc(e) {
  return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function ew(e, t) {
  const n = e.getAnimations();
  let r = null;
  for (const o of n) {
    if (o.playState !== "running") continue;
    const { effect: s } = o, i = (Fc(s) ? s.getKeyframes() : []).filter(t);
    i.length > 0 && (r = [i[i.length - 1], o]);
  }
  return r;
}
function Vc(e) {
  const { width: t, height: n, top: r, left: o, bottom: s, right: a } = e.getBoundingClientRect();
  return { width: t, height: n, top: r, left: o, bottom: s, right: a };
}
function Cf(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function wa(e) {
  return "nodeType" in e;
}
function zt(e) {
  var t, n, r;
  return e ? Cf(e) ? e : wa(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function Sf(e) {
  const { Document: t } = zt(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function cr(e) {
  return !e || Cf(e) ? !1 : e instanceof zt(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function tw(e) {
  return e instanceof zt(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Yo(e) {
  return e ? Cf(e) ? e.document : wa(e) ? Sf(e) ? e : cr(e) || tw(e) ? e.ownerDocument : document : document : document;
}
function bI(e) {
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
function xI(e, t) {
  if (wI(e) && e.open === !1)
    return !1;
  const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(e);
  return n === "visible" && r === "visible" && o === "visible";
}
function wI(e) {
  return e.tagName === "DETAILS";
}
function Gs(e, t = e.getBoundingClientRect(), n = 0) {
  var r, o, s, a, i;
  let c = t;
  const { ownerDocument: l } = e, f = (r = l.defaultView) != null ? r : window;
  let u = e.parentElement;
  for (; u && u !== l.documentElement; ) {
    if (!xI(u)) {
      const g = u.getBoundingClientRect(), S = n * (g.bottom - g.top), w = n * (g.right - g.left), k = n * (g.bottom - g.top), E = n * (g.right - g.left);
      c = {
        top: Math.max(c.top, g.top - S),
        right: Math.min(c.right, g.right + w),
        bottom: Math.min(c.bottom, g.bottom + k),
        left: Math.max(c.left, g.left - E),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, c.width = c.right - c.left, c.height = c.bottom - c.top;
    }
    u = u.parentElement;
  }
  const h = f.visualViewport, p = (o = h == null ? void 0 : h.offsetTop) != null ? o : 0, y = (s = h == null ? void 0 : h.offsetLeft) != null ? s : 0, m = (a = h == null ? void 0 : h.width) != null ? a : f.innerWidth, b = (i = h == null ? void 0 : h.height) != null ? i : f.innerHeight, C = n * b, x = n * m;
  return c = {
    top: Math.max(c.top, p - C),
    right: Math.min(
      c.right,
      y + m + x
    ),
    bottom: Math.min(
      c.bottom,
      p + b + C
    ),
    left: Math.max(c.left, y - x),
    width: 0,
    // Will be calculated next
    height: 0
    // Will be calculated next
  }, c.width = c.right - c.left, c.height = c.bottom - c.top, c.width < 0 && (c.width = 0), c.height < 0 && (c.height = 0), c;
}
function Eo(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
var nw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function _d(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(
    e.querySelectorAll("iframe, frame")
  ))
    try {
      const o = r.contentDocument;
      o && !t.has(o) && n.push(..._d(o, t));
    } catch {
    }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const o = r.parent;
      o && o.document && o.document !== e && n.push(..._d(o.document, t));
    }
  } catch {
  }
  return n;
}
function _f() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function rw() {
  var e, t;
  const n = _f() ? window.visualViewport : null;
  return {
    x: (e = n == null ? void 0 : n.offsetLeft) != null ? e : 0,
    y: (t = n == null ? void 0 : n.offsetTop) != null ? t : 0
  };
}
function kf(e) {
  return !e || !wa(e) ? !1 : e instanceof zt(e).ShadowRoot;
}
function ji(e) {
  if (e && wa(e)) {
    let t = e.getRootNode();
    if (kf(t))
      return t;
    if (t instanceof Document)
      return t;
  }
  return Yo(e);
}
function Ef(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CI(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((s, a) => {
    const i = r[a];
    if (Sp(s) && Sp(i) && (s.type !== "file" && (s.value = i.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), _p(s) && _p(i) && i.width > 0 && i.height > 0) {
      const c = s.getContext("2d");
      c == null || c.drawImage(i, 0, 0);
    }
  }), n;
}
function Sp(e) {
  return "value" in e;
}
function _p(e) {
  return e.tagName === "CANVAS";
}
function ow(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (SI(r)) {
    const { contentDocument: o } = r;
    if (o) {
      const { left: s, top: a } = r.getBoundingClientRect();
      return ow(o, {
        x: t - s,
        y: n - a
      });
    }
  }
  return r;
}
function SI(e) {
  return (e == null ? void 0 : e.tagName) === "IFRAME";
}
var kd = /* @__PURE__ */ new WeakMap();
function _I(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var sw = class {
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
        const { type: c, listener: l, options: f } = i, u = [a, i];
        a.addEventListener(c, l, f), this.entries.add(u), o.push(u);
      }
    const s = this.entries;
    return function() {
      for (const i of o) {
        const [c, { type: l, listener: f, options: u }] = i;
        c.removeEventListener(l, f, u), s.delete(i);
      }
    };
  }
};
function Mo(e) {
  const t = e == null ? void 0 : e.ownerDocument.defaultView;
  if (t && t.self !== t.parent)
    return t.frameElement;
}
function kI(e) {
  const t = /* @__PURE__ */ new Set();
  let n = Mo(e);
  for (; n; )
    t.add(n), n = Mo(n);
  return t;
}
function EI(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function aw(e, t) {
  const n = () => performance.now();
  let r, o;
  return function(...s) {
    const a = this;
    o ? (r == null || r(), r = EI(
      () => {
        e.apply(a, s), o = n();
      },
      t - (n() - o)
    )) : (e.apply(a, s), o = n());
  };
}
function MI(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function NI(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = Gs(
    e,
    t
  );
  return n > 0 && r > 0;
}
var PI = nw ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, pi, AI = class extends PI {
  constructor(e) {
    super((t) => {
      if (!xe(this, pi)) {
        $t(this, pi, !0);
        return;
      }
      e(t, this);
    }), At(this, pi, !1);
  }
};
pi = /* @__PURE__ */ new WeakMap();
var kp = Array.from({ length: 100 }, (e, t) => t / 100), iw = 75, Cr, Ti, qn, Sr, ps, pt, Ns, ms, $i, cw, lw, dw = class {
  constructor(e, t, n = {
    debug: !1,
    skipInitial: !1
  }) {
    this.element = e, this.callback = t, At(this, $i), this.disconnect = () => {
      var s, a, i;
      $t(this, Ns, !0), (s = xe(this, qn)) == null || s.disconnect(), (a = xe(this, Sr)) == null || a.disconnect(), xe(this, ps).disconnect(), (i = xe(this, pt)) == null || i.remove();
    }, At(this, Cr, !0), At(this, Ti), At(this, qn), At(this, Sr), At(this, ps), At(this, pt), At(this, Ns, !1), At(this, ms, aw(() => {
      var s, a, i;
      const { element: c } = this;
      if ((s = xe(this, Sr)) == null || s.disconnect(), xe(this, Ns) || !xe(this, Cr) || !c.isConnected)
        return;
      const l = (a = c.ownerDocument) != null ? a : document, { innerHeight: f, innerWidth: u } = (i = l.defaultView) != null ? i : window, h = c.getBoundingClientRect(), p = Gs(c, h), { top: y, left: m, bottom: b, right: C } = p, x = -Math.floor(y), g = -Math.floor(m), S = -Math.floor(u - C), w = -Math.floor(f - b), k = `${x}px ${S}px ${w}px ${g}px`;
      this.boundingClientRect = h, $t(this, Sr, new IntersectionObserver(
        (E) => {
          const [M] = E, { intersectionRect: P } = M;
          (M.intersectionRatio !== 1 ? M.intersectionRatio : kn.intersectionRatio(
            P,
            Gs(c)
          )) !== 1 && xe(this, ms).call(this);
        },
        {
          threshold: kp,
          rootMargin: k,
          root: l
        }
      )), xe(this, Sr).observe(c), J0(this, $i, cw).call(this);
    }, iw)), this.boundingClientRect = e.getBoundingClientRect(), $t(this, Cr, NI(e, this.boundingClientRect));
    let r = !0;
    this.callback = (s) => {
      r && (r = !1, n.skipInitial) || t(s);
    };
    const o = e.ownerDocument;
    n != null && n.debug && ($t(this, pt, document.createElement("div")), xe(this, pt).style.background = "rgba(0,0,0,0.15)", xe(this, pt).style.position = "fixed", xe(this, pt).style.pointerEvents = "none", o.body.appendChild(xe(this, pt))), $t(this, ps, new IntersectionObserver(
      (s) => {
        var a, i;
        const c = s[s.length - 1], { boundingClientRect: l, isIntersecting: f } = c, { width: u, height: h } = l, p = xe(this, Cr);
        $t(this, Cr, f), !(!u && !h) && (p && !f ? ((a = xe(this, Sr)) == null || a.disconnect(), this.callback(null), (i = xe(this, qn)) == null || i.disconnect(), $t(this, qn, void 0), xe(this, pt) && (xe(this, pt).style.visibility = "hidden")) : xe(this, ms).call(this), f && !xe(this, qn) && ($t(this, qn, new AI(xe(this, ms))), xe(this, qn).observe(e)));
      },
      {
        threshold: kp,
        root: o
      }
    )), xe(this, Cr) && !n.skipInitial && this.callback(this.boundingClientRect), xe(this, ps).observe(e);
  }
};
Cr = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
ms = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakSet();
cw = function() {
  xe(this, Ns) || (J0(this, $i, lw).call(this), !MI(this.boundingClientRect, xe(this, Ti)) && (this.callback(this.boundingClientRect), $t(this, Ti, this.boundingClientRect)));
};
lw = function() {
  if (xe(this, pt)) {
    const { top: e, left: t, width: n, height: r } = Gs(
      this.element
    );
    xe(this, pt).style.overflow = "hidden", xe(this, pt).style.visibility = "visible", xe(this, pt).style.top = `${Math.floor(e)}px`, xe(this, pt).style.left = `${Math.floor(t)}px`, xe(this, pt).style.width = `${Math.floor(n)}px`, xe(this, pt).style.height = `${Math.floor(r)}px`;
  }
};
var Ua = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
function RI(e, t) {
  let n = Ua.get(e);
  return n || (n = { disconnect: new dw(
    e,
    (o) => {
      const s = Ua.get(e);
      s && s.callbacks.forEach((a) => a(o));
    },
    { skipInitial: !0 }
  ).disconnect, callbacks: /* @__PURE__ */ new Set() }), n.callbacks.add(t), Ua.set(e, n), () => {
    n.callbacks.delete(t), n.callbacks.size === 0 && (Ua.delete(e), n.disconnect());
  };
}
function OI(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = RI(r, t);
    n.add(o);
  }
  return () => n.forEach((r) => r());
}
function DI(e, t) {
  var n;
  const r = e.ownerDocument;
  if (!qa.has(r)) {
    const a = new AbortController(), i = /* @__PURE__ */ new Set();
    document.addEventListener(
      "scroll",
      (c) => i.forEach((l) => l(c)),
      {
        capture: !0,
        passive: !0,
        signal: a.signal
      }
    ), qa.set(r, { disconnect: () => a.abort(), listeners: i });
  }
  const { listeners: o, disconnect: s } = (n = qa.get(r)) != null ? n : {};
  return !o || !s ? () => {
  } : (o.add(t), () => {
    o.delete(t), o.size === 0 && (s(), qa.delete(r));
  });
}
var vs, gs, mi, Ed, II = class {
  constructor(e, t, n) {
    this.callback = t, At(this, vs), At(this, gs, !1), At(this, mi), At(this, Ed, aw((a) => {
      if (!xe(this, gs) && a.target && "contains" in a.target && typeof a.target.contains == "function") {
        for (const i of xe(this, mi))
          if (a.target.contains(i)) {
            this.callback(xe(this, vs).boundingClientRect);
            break;
          }
      }
    }, iw));
    const r = kI(e), o = OI(r, t), s = DI(e, xe(this, Ed));
    $t(this, mi, r), $t(this, vs, new dw(e, t, n)), this.disconnect = () => {
      xe(this, gs) || ($t(this, gs, !0), o(), s(), xe(this, vs).disconnect());
    };
  }
};
vs = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Ed = /* @__PURE__ */ new WeakMap();
function Md(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function bo(e) {
  try {
    Md(e) && e.isConnected && e.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
    !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function Ep(e) {
  return !nw || !e ? !1 : e === Yo(e).scrollingElement;
}
function uw(e) {
  var t, n;
  const r = zt(e), o = Ep(e) ? bI(e) : Vc(e), s = r.visualViewport, a = Ep(e) ? {
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
  }, c = i.current.y <= 0, l = i.current.x <= 0, f = i.current.y >= i.max.y, u = i.current.x >= i.max.x;
  return {
    rect: o,
    position: i,
    isTop: c,
    isLeft: l,
    isBottom: f,
    isRight: u
  };
}
function jI(e, t) {
  const { isTop: n, isBottom: r, isLeft: o, isRight: s, position: a } = uw(e), { x: i, y: c } = t ?? { x: 0, y: 0 }, l = !n && a.current.y + c > 0, f = !r && a.current.y + c < a.max.y, u = !o && a.current.x + i > 0, h = !s && a.current.x + i < a.max.x;
  return {
    top: l,
    bottom: f,
    left: u,
    right: h,
    x: u || h,
    y: l || f
  };
}
var Mf = class {
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
}, Wi = new Mf((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), TI = new Mf((e) => setTimeout(e, 50)), Li = /* @__PURE__ */ new Map(), $I = Li.clear.bind(Li);
function An(e, t = !1) {
  if (!t) return Mp(e);
  let n = Li.get(e);
  return n || (n = Mp(e), Li.set(e, n), TI.schedule($I), n);
}
function Mp(e) {
  return zt(e).getComputedStyle(e);
}
function WI(e, t = An(e, !0)) {
  return t.position === "fixed" || t.position === "sticky";
}
function LI(e, t = An(e, !0)) {
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
var FI = {
  excludeElement: !0,
  escapeShadowDOM: !0
};
function Nd(e, t = FI) {
  const { limit: n, excludeElement: r, escapeShadowDOM: o } = t, s = /* @__PURE__ */ new Set();
  function a(i) {
    if (n != null && s.size >= n || !i)
      return s;
    if (Sf(i) && i.scrollingElement != null && !s.has(i.scrollingElement))
      return s.add(i.scrollingElement), s;
    if (o && kf(i))
      return a(i.host);
    if (!cr(i))
      return tw(i) ? a(i.parentElement) : s;
    if (s.has(i))
      return s;
    const c = An(i, !0);
    if (r && i === e || LI(i, c) && s.add(i), WI(i, c)) {
      const { scrollingElement: l } = i.ownerDocument;
      return l && s.add(l), s;
    }
    return a(i.parentNode);
  }
  return e ? a(e) : s;
}
function No(e, t = window.frameElement) {
  const n = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!e) return n;
  let r = Mo(e);
  for (; r; ) {
    if (r === t)
      return n;
    const o = Vc(r), { x: s, y: a } = VI(r, o);
    n.x = n.x + o.left, n.y = n.y + o.top, n.scaleX = n.scaleX * s, n.scaleY = n.scaleY * a, r = Mo(r);
  }
  return n;
}
function VI(e, t = Vc(e)) {
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
function zI(e) {
  if (!e || e === "none")
    return null;
  const t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
  return isNaN(n) && isNaN(r) ? null : {
    x: isNaN(n) ? r : n,
    y: isNaN(r) ? n : r
  };
}
function Ys(e) {
  if (!e || e === "none")
    return null;
  const [t, n, r = "0"] = e.split(" "), o = { x: parseFloat(t), y: parseFloat(n), z: parseInt(r, 10) };
  return isNaN(o.x) && isNaN(o.y) ? null : {
    x: isNaN(o.x) ? 0 : o.x,
    y: isNaN(o.y) ? 0 : o.y,
    z: isNaN(o.z) ? 0 : o.z
  };
}
function zc(e) {
  var t, n, r, o, s, a, i, c, l;
  const { scale: f, transform: u, translate: h } = e, p = zI(f), y = Ys(h), m = BI(u);
  if (!m && !p && !y)
    return null;
  const b = {
    x: (t = p == null ? void 0 : p.x) != null ? t : 1,
    y: (n = p == null ? void 0 : p.y) != null ? n : 1
  }, C = {
    x: (r = y == null ? void 0 : y.x) != null ? r : 0,
    y: (o = y == null ? void 0 : y.y) != null ? o : 0
  }, x = {
    x: (s = m == null ? void 0 : m.x) != null ? s : 0,
    y: (a = m == null ? void 0 : m.y) != null ? a : 0,
    scaleX: (i = m == null ? void 0 : m.scaleX) != null ? i : 1,
    scaleY: (c = m == null ? void 0 : m.scaleY) != null ? c : 1
  };
  return {
    x: C.x + x.x,
    y: C.y + x.y,
    z: (l = y == null ? void 0 : y.z) != null ? l : 0,
    scaleX: b.x * x.scaleX,
    scaleY: b.y * x.scaleY
  };
}
function BI(e) {
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
var Gt = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Gt || {}), HI = {
  x: 0.2,
  y: 0.2
}, GI = {
  x: 10,
  y: 10
};
function YI(e, t, n, r = 25, o = HI, s = GI) {
  const { x: a, y: i } = t, { rect: c, isTop: l, isBottom: f, isLeft: u, isRight: h } = uw(e), p = No(e), y = An(e, !0), m = zc(y), b = m !== null ? (m == null ? void 0 : m.scaleX) < 0 : !1, C = m !== null ? (m == null ? void 0 : m.scaleY) < 0 : !1, x = new kn(
    c.left * p.scaleX + p.x,
    c.top * p.scaleY + p.y,
    c.width * p.scaleX,
    c.height * p.scaleY
  ), g = {
    x: 0,
    y: 0
    /* Idle */
  }, S = {
    x: 0,
    y: 0
  }, w = {
    height: x.height * o.y,
    width: x.width * o.x
  };
  return w.height > 0 && (!l || C && !f) && i <= x.top + w.height && (n == null ? void 0 : n.y) !== 1 && a >= x.left - s.x && a <= x.right + s.x ? (g.y = C ? 1 : -1, S.y = r * Math.abs(
    (x.top + w.height - i) / w.height
  )) : w.height > 0 && (!f || C && !l) && i >= x.bottom - w.height && (n == null ? void 0 : n.y) !== -1 && a >= x.left - s.x && a <= x.right + s.x && (g.y = C ? -1 : 1, S.y = r * Math.abs(
    (x.bottom - w.height - i) / w.height
  )), w.width > 0 && (!h || b && !u) && a >= x.right - w.width && (n == null ? void 0 : n.x) !== -1 && i >= x.top - s.y && i <= x.bottom + s.y ? (g.x = b ? -1 : 1, S.x = r * Math.abs(
    (x.right - w.width - a) / w.width
  )) : w.width > 0 && (!u || b && !h) && a <= x.left + w.width && (n == null ? void 0 : n.x) !== 1 && i >= x.top - s.y && i <= x.bottom + s.y && (g.x = b ? 1 : -1, S.x = r * Math.abs(
    (x.left + w.width - a) / w.width
  )), {
    direction: g,
    speed: S
  };
}
function fw(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!cr(e))
    return;
  const r = Nd(e), o = [];
  for (const s of r) {
    if (!cr(s))
      continue;
    const { top: a, left: i } = KI(e, s);
    let c = a, l = i;
    for (const f of o)
      c -= f.scrollTop, l -= f.scrollLeft;
    if (t !== "none") {
      const f = c < s.scrollTop, u = c + e.offsetHeight > s.scrollTop + s.clientHeight;
      f !== u && (t === "center" ? s.scrollTop = c - s.clientHeight / 2 + e.offsetHeight / 2 : f ? s.scrollTop = c : s.scrollTop = c + e.offsetHeight - s.clientHeight);
    }
    if (n !== "none") {
      const f = l < s.scrollLeft, u = l + e.offsetWidth > s.scrollLeft + s.clientWidth;
      f !== u && (n === "center" ? s.scrollLeft = l - s.clientWidth / 2 + e.offsetWidth / 2 : f ? s.scrollLeft = l : s.scrollLeft = l + e.offsetWidth - s.clientWidth);
    }
    o.push(s);
  }
}
function Np(e) {
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
function KI(e, t) {
  const n = Np(e), r = Np(t);
  return {
    top: n.top - r.top - t.clientTop,
    left: n.left - r.left - t.clientLeft
  };
}
function UI(e, t, n) {
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
function qI(e, t, n) {
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
function hw({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function Pp(e, t = An(e).translate, n = !0) {
  if (n) {
    const r = ew(
      e,
      (o) => "translate" in o
    );
    if (r) {
      const { translate: o = "" } = r[0];
      if (typeof o == "string") {
        const s = Ys(o);
        if (s)
          return s;
      }
    }
  }
  if (t) {
    const r = Ys(t);
    if (r)
      return r;
  }
  return { x: 0, y: 0, z: 0 };
}
var XI = new Mf((e) => setTimeout(e, 0)), Ps = /* @__PURE__ */ new Map(), ZI = Ps.clear.bind(Ps);
function QI(e) {
  const t = e.ownerDocument;
  let n = Ps.get(t);
  if (n) return n;
  n = t.getAnimations(), Ps.set(t, n), XI.schedule(ZI);
  const r = n.filter(
    (o) => Fc(o.effect) && o.effect.target === e
  );
  return Ps.set(e, r), n;
}
function JI(e, t) {
  const n = QI(e).filter((r) => {
    var o, s;
    if (Fc(r.effect)) {
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
      frameTransform: a = No(e),
      ignoreTransforms: i,
      getBoundingClientRect: c = Vc
    } = t, l = JI(e, {
      properties: ["transform", "translate", "scale", "width", "height"],
      isValidTarget: (w) => (w !== e || _f()) && w.contains(e)
    }), f = c(e);
    let { top: u, left: h, width: p, height: y } = f, m;
    const b = An(e), C = zc(b), x = {
      x: (n = C == null ? void 0 : C.scaleX) != null ? n : 1,
      y: (r = C == null ? void 0 : C.scaleY) != null ? r : 1
    }, g = e3(e, b);
    l == null || l(), C && (m = qI(
      f,
      C,
      b.transformOrigin
    ), (i || g) && (u = m.top, h = m.left, p = m.width, y = m.height));
    const S = {
      width: (o = m == null ? void 0 : m.width) != null ? o : p,
      height: (s = m == null ? void 0 : m.height) != null ? s : y
    };
    if (g && !i && m) {
      const w = UI(
        m,
        g,
        b.transformOrigin
      );
      u = w.top, h = w.left, p = w.width, y = w.height, x.x = g.scaleX, x.y = g.scaleY;
    }
    a && (i || (h *= a.scaleX, p *= a.scaleX, u *= a.scaleY, y *= a.scaleY), h += a.x, u += a.y), super(h, u, p, y), this.scale = x, this.intrinsicWidth = S.width, this.intrinsicHeight = S.height;
  }
};
function e3(e, t) {
  const n = e.getAnimations();
  if (!n.length) return null;
  let r, o, s, a = !1;
  for (const i of n) {
    if (i.playState !== "running") continue;
    const c = Fc(i.effect) ? i.effect.getKeyframes() : [], l = c[c.length - 1];
    if (!l) continue;
    const { transform: f, translate: u, scale: h } = l;
    typeof f == "string" && f && (r = f, a = !0), typeof u == "string" && u && (o = u, a = !0), typeof h == "string" && h && (s = h, a = !0);
  }
  return a ? zc({
    transform: r ?? t.transform,
    translate: o ?? t.translate,
    scale: s ?? t.scale
  }) : null;
}
function As(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var t3 = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, t = "") {
    const { element: n } = this;
    if (As(n))
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
    if (As(n))
      for (const r of e) {
        const o = `${t}${r}`;
        n.style.removeProperty(o);
      }
  }
  reset() {
    const { element: e } = this;
    if (As(e)) {
      for (const [t, n] of this.initial)
        e.style.setProperty(t, n);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function Dr(e) {
  return e ? e instanceof zt(e).Element || wa(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function Ks(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = zt(e.target);
  return e instanceof t;
}
function n3(e) {
  if (!e) return !1;
  const { PointerEvent: t } = zt(e.target);
  return e instanceof t;
}
function r3(e) {
  if (!Dr(e)) return !1;
  const { tagName: t } = e;
  return t === "INPUT" || t === "TEXTAREA" || o3(e);
}
function o3(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var kl = {};
function Pd(e) {
  const t = kl[e] == null ? 0 : kl[e] + 1;
  return kl[e] = t, `${e}-${t}`;
}
var s3 = ({
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
      type: Lc.PointerIntersection,
      priority: Wc.High
    };
  }
  return null;
}, a3 = ({
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
      type: Lc.ShapeIntersection,
      priority: Wc.Normal
    };
  }
  return null;
}, pw = (e) => {
  var t;
  return (t = s3(e)) != null ? t : a3(e);
}, i3 = (e) => {
  const { dragOperation: t, droppable: n } = e, { shape: r, position: o } = t;
  if (!n.shape)
    return null;
  const s = r ? kn.from(r.current.boundingRectangle).corners : void 0, i = kn.from(
    n.shape.boundingRectangle
  ).corners.reduce(
    (c, l, f) => {
      var u;
      return c + Ht.distance(
        Ht.from(l),
        (u = s == null ? void 0 : s[f]) != null ? u : o.current
      );
    },
    0
  ) / 4;
  return {
    id: n.id,
    value: 1 / i,
    type: Lc.Collision,
    priority: Wc.Normal
  };
}, c3 = Object.create, Nf = Object.defineProperty, l3 = Object.defineProperties, d3 = Object.getOwnPropertyDescriptor, u3 = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, mw = Object.prototype.hasOwnProperty, vw = Object.prototype.propertyIsEnumerable, gw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ko = (e) => {
  throw TypeError(e);
}, Ad = (e, t, n) => t in e ? Nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Us = (e, t) => {
  for (var n in t || (t = {}))
    mw.call(t, n) && Ad(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      vw.call(t, n) && Ad(e, n, t[n]);
  return e;
}, Pf = (e, t) => l3(e, u3(t)), Ap = (e, t) => Nf(e, "name", { value: t, configurable: !0 }), yw = (e, t) => {
  var n = {};
  for (var r in e)
    mw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fi)
    for (var r of Fi(e))
      t.indexOf(r) < 0 && vw.call(e, r) && (n[r] = e[r]);
  return n;
}, Uo = (e) => {
  var t;
  return [, , , c3((t = e == null ? void 0 : e[gw("metadata")]) != null ? t : null)];
}, bw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ys = (e) => e !== void 0 && typeof e != "function" ? Ko("Function expected") : e, f3 = (e, t, n, r, o) => ({ kind: bw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ko("Already initialized") : o.push(ys(s || null)) }), Br = (e, t) => Ad(t, gw("metadata"), e[3]), nt = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Xt = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), y = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = bw[u + 5], b = u > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && d3(u < 4 ? o : { get [n]() {
    return $e(this, s);
  }, set [n](S) {
    return _t(this, s, S);
  } }, n));
  u ? p && u < 4 && Ap(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : Ap(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = f3(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => h3(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? $e : Ir)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => _t(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? ys(i) && (u > 4 ? b.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? Ko("Object expected") : (ys(a = i.get) && (x.get = a), ys(a = i.set) && (x.set = a), ys(a = i.init) && b.unshift(a));
  return u || Br(e, o), x && Nf(o, n, x), p ? u ^ 4 ? s : x : o;
}, Af = (e, t, n) => t.has(e) || Ko("Cannot " + n), h3 = (e, t) => Object(t) !== t ? Ko('Cannot use the "in" operator on this value') : e.has(t), $e = (e, t, n) => (Af(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => t.has(e) ? Ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _t = (e, t, n, r) => (Af(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ir = (e, t, n) => (Af(e, t, "access private method"), n), Rp = {
  role: "button",
  roleDescription: "draggable"
}, p3 = "dnd-kit-description", m3 = "dnd-kit-announcement", v3 = {
  draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."
}, g3 = {
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
function y3(e) {
  const t = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(t);
}
function b3(e, t) {
  const n = document.createElement("div");
  return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function x3(e) {
  const t = document.createElement("div");
  return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var w3 = ["dragover", "dragmove"], C3 = class extends wt {
  constructor(e, t) {
    super(e);
    const {
      id: n,
      idPrefix: {
        description: r = p3,
        announcement: o = m3
      } = {},
      announcements: s = g3,
      screenReaderInstructions: a = v3,
      debounce: i = 500
    } = t ?? {}, c = n ? `${r}-${n}` : Pd(r), l = n ? `${o}-${n}` : Pd(o);
    let f, u, h, p;
    const y = (w = p) => {
      !h || !w || (h == null ? void 0 : h.nodeValue) !== w && (h.nodeValue = w);
    }, m = () => Wi.schedule(y), b = S3(
      m,
      i
    ), C = Object.entries(s).map(
      ([w, k]) => this.manager.monitor.addEventListener(
        w,
        (E, M) => {
          const P = h;
          if (!P) return;
          const O = k == null ? void 0 : k(E, M);
          O && P.nodeValue !== O && (p = O, w3.includes(w) ? b() : (m(), b.cancel()));
        }
      )
    ), x = () => {
      let w = [];
      f != null && f.isConnected || (f = b3(
        c,
        a.draggable
      ), w.push(f)), u != null && u.isConnected || (u = x3(l), h = document.createTextNode(""), u.appendChild(h), w.push(u)), w.length > 0 && document.body.append(...w);
    }, g = /* @__PURE__ */ new Set();
    function S() {
      for (const w of g)
        w();
    }
    this.registerEffect(() => {
      var w;
      g.clear();
      for (const k of this.manager.registry.draggables.value) {
        const E = (w = k.handle) != null ? w : k.element;
        if (E) {
          (!f || !u) && g.add(x), (!y3(E) || _f()) && !E.hasAttribute("tabindex") && g.add(() => E.setAttribute("tabindex", "0")), !E.hasAttribute("role") && E.tagName.toLowerCase() !== "button" && g.add(
            () => E.setAttribute("role", Rp.role)
          ), E.hasAttribute("aria-roledescription") || g.add(
            () => E.setAttribute(
              "aria-roledescription",
              Rp.roleDescription
            )
          ), E.hasAttribute("aria-describedby") || g.add(
            () => E.setAttribute("aria-describedby", c)
          );
          for (const P of ["aria-pressed", "aria-grabbed"]) {
            const O = String(k.isDragging);
            E.getAttribute(P) !== O && g.add(() => E.setAttribute(P, O));
          }
          const M = String(k.disabled);
          E.getAttribute("aria-disabled") !== M && g.add(
            () => E.setAttribute("aria-disabled", M)
          );
        }
      }
      g.size > 0 && Wi.schedule(S);
    }), this.destroy = () => {
      super.destroy(), f == null || f.remove(), u == null || u.remove(), C.forEach((w) => w());
    };
  }
};
function S3(e, t) {
  let n;
  const r = () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
  return r.cancel = () => clearTimeout(n), r;
}
var Vi = /* @__PURE__ */ new Map(), xw, ww, Cw, Sw, Rd, Rs, Fn, Rf, Po, _w, kw, Ew, Mw, lr = class extends (Rd = xa, Sw = [Me], Cw = [Ue], ww = [Ue], xw = [Ue], Rd) {
  constructor(t, n) {
    super(t, n), nt(Fn, 5, this), qe(this, Po), qe(this, Rs, /* @__PURE__ */ new Set()), qe(this, Rf, nt(Fn, 8, this, /* @__PURE__ */ new Set())), nt(Fn, 11, this), this.registerEffect(Ir(this, Po, _w));
  }
  /**
   * Registers CSS rules to be injected into the active drag operation's
   * document and shadow roots. The StyleInjector handles tracking
   * which roots need the styles and cleaning up when they're no longer needed.
   *
   * Returns a cleanup function that unregisters the rules.
   */
  register(t) {
    return $e(this, Rs).add(t), () => {
      $e(this, Rs).delete(t);
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
    return ji((t = n == null ? void 0 : n.element) != null ? t : null);
  }
  get targetRoot() {
    var t;
    const { target: n } = this.manager.dragOperation;
    return ji((t = n == null ? void 0 : n.element) != null ? t : null);
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
Fn = Uo(Rd);
Rs = /* @__PURE__ */ new WeakMap();
Rf = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
_w = function() {
  const { roots: e } = this, t = [];
  for (const n of e)
    for (const r of $e(this, Rs))
      t.push(Ir(this, Po, kw).call(this, n, r));
  return () => {
    for (const n of t)
      n();
  };
};
kw = function(e, t) {
  let n = Vi.get(e);
  n || (n = /* @__PURE__ */ new Map(), Vi.set(e, n));
  let r = n.get(t);
  if (!r) {
    const s = Sf(e) ? Ir(this, Po, Ew).call(this, e, n, t) : Ir(this, Po, Mw).call(this, e, n, t);
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
Ew = function(e, t, n) {
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
      a.disconnect(), o.remove(), t.delete(n), t.size === 0 && Vi.delete(e);
    }
  };
};
Mw = function(e, t, n) {
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
      if (kf(e) && ((a = e.host) != null && a.isConnected)) {
        const i = e.adoptedStyleSheets.indexOf(s);
        i !== -1 && e.adoptedStyleSheets.splice(i, 1);
      }
      t.delete(n), t.size === 0 && Vi.delete(e);
    }
  };
};
Xt(Fn, 4, "additionalRoots", Sw, lr, Rf);
Xt(Fn, 2, "sourceRoot", Cw, lr);
Xt(Fn, 2, "targetRoot", ww, lr);
Xt(Fn, 2, "roots", xw, lr);
Br(Fn, lr);
lr.configure = ba(lr);
var Bc = lr, _3 = class extends wt {
  constructor(e, t) {
    super(e, t), this.manager = e;
    const { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(
      Bc
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
}, Ca = "data-dnd-", Od = `${Ca}dropping`, ht = "--dnd-", mn = `${Ca}dragging`, zi = `${Ca}placeholder`, k3 = [
  mn,
  zi,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], E3 = ["view-transition-name"], M3 = `
  :is(:root,:host) [${mn}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${ht}top, 0px) !important;
    left: var(${ht}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${ht}width, auto);
    max-width: var(${ht}width, auto);
    height: var(${ht}height, auto);
    max-height: var(${ht}height, auto);
    transform: var(${ht}transform, none) !important;
    transition: var(${ht}transition) !important;
  }

  :is(:root,:host) [${zi}] {
    transition: none;
  }

  :is(:root,:host) [${zi}='hidden'] {
    visibility: hidden;
  }

  [${mn}] * {
    pointer-events: none !important;
  }

  [${mn}]:not([${Od}]) {
    translate: var(${ht}translate) !important;
  }

  [${mn}][style*='${ht}scale'] {
    scale: var(${ht}scale) !important;
    transform-origin: var(${ht}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${mn}][popover]) {
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
  [${mn}]::backdrop, [${Ca}overlay]:not([${mn}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function N3(e, t = "hidden") {
  return Ee(() => {
    const { element: n, manager: r } = e;
    if (!n || !r) return;
    const o = P3(
      n,
      r.registry.droppables
    ), s = [], a = CI(n), { remove: i } = a;
    return A3(o, a, s), R3(a, t), a.remove = () => {
      s.forEach((c) => c()), i.call(a);
    }, a;
  });
}
function P3(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    if (r.element && (e === r.element || e.contains(r.element))) {
      const o = `${Ca}${Pd("dom-id")}`;
      r.element.setAttribute(o, ""), n.set(r, o);
    }
  return n;
}
function A3(e, t, n) {
  for (const [r, o] of e) {
    if (!r.element) continue;
    const s = `[${o}]`, a = t.matches(s) ? t : t.querySelector(s);
    if (r.element.removeAttribute(o), !a) continue;
    const i = r.element;
    r.proxy = a, a.removeAttribute(o), kd.set(i, a), n.push(() => {
      kd.delete(i), r.proxy = void 0;
    });
  }
}
function R3(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(zi, t);
}
function Nw(e, t) {
  return e === t ? !0 : Mo(e) === Mo(t);
}
function Op(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && Dr(t) && t.hasAttribute("popover") && requestAnimationFrame(() => bo(t));
}
function Dd(e) {
  return e.tagName === "TR";
}
function O3(e, t, n) {
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
      if (i.startsWith("aria-") || k3.includes(i))
        continue;
      const c = e.getAttribute(i);
      if (i === "style") {
        if (As(e) && As(t)) {
          const l = e.style;
          for (const f of Array.from(t.style))
            l.getPropertyValue(f) === "" && t.style.removeProperty(f);
          for (const f of Array.from(l)) {
            if (E3.includes(f) || f.startsWith(ht))
              continue;
            const u = l.getPropertyValue(f);
            t.style.setProperty(f, u);
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
function D3(e, t, n) {
  const r = new MutationObserver((o) => {
    for (const s of o)
      if (s.addedNodes.length !== 0)
        for (const a of Array.from(s.addedNodes)) {
          if (a.contains(e) && e.nextElementSibling !== t) {
            e.insertAdjacentElement("afterend", t), bo(n);
            return;
          }
          if (a.contains(t) && t.previousElementSibling !== e) {
            t.insertAdjacentElement("beforebegin", e), bo(n);
            return;
          }
        }
    e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), bo(n));
  });
  return r.observe(e.ownerDocument.body, {
    childList: !0,
    subtree: !0
  }), r;
}
function I3(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const o = new Sn(e.placeholder, {
      frameTransform: e.frameTransform,
      ignoreTransforms: !0
    }), s = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, a = (e.width - o.width) * s.x + e.delta.x, i = (e.height - o.height) * s.y + e.delta.y, c = rw();
    if (e.styles.set(
      {
        width: o.width - e.widthOffset,
        height: o.height - e.heightOffset,
        top: e.top + i + c.y,
        left: e.left + a + c.x
      },
      ht
    ), (n = e.getElementMutationObserver()) == null || n.takeRecords(), Dd(e.element) && Dd(e.placeholder)) {
      const m = Array.from(e.element.cells), b = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(m.map((C) => C.style.width));
      for (const [C, x] of m.entries()) {
        const g = b[C];
        x.style.width = `${g.getBoundingClientRect().width}px`;
      }
    }
    const l = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, f = e.left + a + c.x + l.x, u = e.top + i + c.y + l.y, h = o.width - e.widthOffset, p = o.height - e.heightOffset, y = e.frameTransform;
    e.dragOperation.shape = new kn(
      f * y.scaleX + y.x,
      u * y.scaleY + y.y,
      h * y.scaleX,
      p * y.scaleY
    );
  });
}
var j3 = 250, T3 = "ease";
function $3(e) {
  var t, n, r, o;
  const { animation: s } = e;
  if (typeof s == "function") {
    const x = s({
      source: e.source,
      element: e.element,
      feedbackElement: e.feedbackElement,
      placeholder: e.placeholder,
      translate: e.translate,
      moved: e.moved
    });
    Promise.resolve(x).then(() => {
      e.cleanup(), requestAnimationFrame(e.restoreFocus);
    });
    return;
  }
  const {
    duration: a = j3,
    easing: i = T3
  } = s ?? {};
  bo(e.feedbackElement);
  const [, c] = (t = ew(
    e.feedbackElement,
    (x) => "translate" in x
  )) != null ? t : [];
  c == null || c.pause();
  const l = (n = e.placeholder) != null ? n : e.element, f = {
    frameTransform: Nw(e.feedbackElement, l) ? null : void 0
  }, u = new Sn(e.feedbackElement, f), h = (r = Ys(An(e.feedbackElement).translate)) != null ? r : e.translate, p = new Sn(l, f), y = kn.delta(u, p, e.alignment), m = {
    x: h.x - y.x,
    y: h.y - y.y
  }, b = Math.round(u.intrinsicHeight) !== Math.round(p.intrinsicHeight) ? {
    minHeight: [
      `${u.intrinsicHeight}px`,
      `${p.intrinsicHeight}px`
    ],
    maxHeight: [
      `${u.intrinsicHeight}px`,
      `${p.intrinsicHeight}px`
    ]
  } : {}, C = Math.round(u.intrinsicWidth) !== Math.round(p.intrinsicWidth) ? {
    minWidth: [
      `${u.intrinsicWidth}px`,
      `${p.intrinsicWidth}px`
    ],
    maxWidth: [
      `${u.intrinsicWidth}px`,
      `${p.intrinsicWidth}px`
    ]
  } : {};
  e.styles.set({ transition: e.transition }, ht), e.feedbackElement.setAttribute(Od, ""), (o = e.getElementMutationObserver()) == null || o.takeRecords(), hw({
    element: e.feedbackElement,
    keyframes: Pf(Us(Us({}, b), C), {
      translate: [
        `${h.x}px ${h.y}px 0`,
        `${m.x}px ${m.y}px 0`
      ]
    }),
    options: {
      duration: Ef(zt(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? a : 0,
      easing: i
    }
  }).then(() => {
    e.feedbackElement.removeAttribute(Od), c == null || c.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Pw, Id, qs, Of, vi, Aw, Rw, Ao = class extends (Id = wt, Pw = [Me], Id) {
  constructor(t, n) {
    super(t, n), qe(this, vi), qe(this, Of, nt(qs, 8, this)), nt(qs, 11, this), this.state = {
      initial: {},
      current: {}
    };
    const r = t.registry.plugins.get(Bc), o = r == null ? void 0 : r.register(M3);
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
    this.registerEffect(Ir(this, vi, Aw).bind(this, r)), this.registerEffect(Ir(this, vi, Rw));
  }
};
qs = Uo(Id);
Of = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakSet();
Aw = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = ji(t);
  if (n)
    return e.addRoot(n);
};
Rw = function() {
  var e, t, n, r, o, s, a;
  const { state: i, manager: c, options: l } = this, { dragOperation: f } = c, { position: u, source: h, status: p } = f;
  if (p.idle) {
    i.current = {}, i.initial = {};
    return;
  }
  if (!h) return;
  const { element: y } = h, m = h.pluginConfig(Ao), b = (t = (e = m == null ? void 0 : m.feedback) != null ? e : l == null ? void 0 : l.feedback) != null ? t : "default", C = typeof b == "function" ? b(h, c) : b;
  if (!y || C === "none" || !p.initialized || p.initializing)
    return;
  const { initial: x } = i, g = (n = this.overlay) != null ? n : y, S = No(g), w = No(y), k = !Nw(y, g), E = new Sn(y, {
    frameTransform: k ? w : null,
    ignoreTransforms: !k
  }), M = {
    x: w.scaleX / S.scaleX,
    y: w.scaleY / S.scaleY
  };
  let { width: P, height: O, top: I, left: D } = E;
  k && (P = P / M.x, O = O / M.y);
  const L = new t3(g), j = An(y), {
    transition: B,
    translate: V,
    boxSizing: Y,
    paddingBlockStart: T,
    paddingBlockEnd: W,
    paddingInlineStart: oe,
    paddingInlineEnd: A,
    borderInlineStartWidth: N,
    borderInlineEndWidth: F,
    borderBlockStartWidth: z,
    borderBlockEndWidth: Z
  } = j, q = B.split(",").filter((U) => !/^\s*(transform|translate|scale)\b/.test(U)).join(","), $ = zc(j), J = j.transform, re = C === "clone", de = Y === "content-box", me = de ? parseInt(oe) + parseInt(A) + parseInt(N) + parseInt(F) : 0, ge = de ? parseInt(T) + parseInt(W) + parseInt(z) + parseInt(Z) : 0, Se = C !== "move" && !this.overlay ? N3(h, re ? "clone" : "hidden") : null, Ie = Ee(
    () => Ks(c.dragOperation.activatorEvent)
  );
  if (!x.translate) {
    if (this.overlay && $)
      x.translate = { x: $.x, y: $.y };
    else if (V !== "none") {
      const U = Ys(V);
      U && (x.translate = U);
    }
  }
  if (!x.transformOrigin) {
    const U = Ee(() => u.current), ie = D + ((r = $ == null ? void 0 : $.x) != null ? r : 0), he = I + ((o = $ == null ? void 0 : $.y) != null ? o : 0);
    x.transformOrigin = {
      x: (U.x - ie * S.scaleX - S.x) / (P * S.scaleX),
      y: (U.y - he * S.scaleY - S.y) / (O * S.scaleY)
    };
  }
  const { transformOrigin: Te } = x, ut = I * S.scaleY + S.y, Xe = D * S.scaleX + S.x;
  if (!x.coordinates && (x.coordinates = {
    x: Xe,
    y: ut
  }, M.x !== 1 || M.y !== 1)) {
    const { scaleX: U, scaleY: ie } = w, { x: he, y: le } = Te;
    x.coordinates.x += (P * U - P) * he, x.coordinates.y += (O * ie - O) * le;
  }
  x.dimensions || (x.dimensions = { width: P, height: O }), x.frameTransform || (x.frameTransform = S);
  const ot = {
    x: x.coordinates.x - Xe,
    y: x.coordinates.y - ut
  }, vt = {
    width: (x.dimensions.width * x.frameTransform.scaleX - P * S.scaleX) * Te.x,
    height: (x.dimensions.height * x.frameTransform.scaleY - O * S.scaleY) * Te.y
  }, We = {
    x: ot.x / S.scaleX + vt.width,
    y: ot.y / S.scaleY + vt.height
  }, Ge = {
    left: D + We.x,
    top: I + We.y
  };
  g.setAttribute(mn, "true");
  const Qe = Ee(() => f.transform), Dt = (s = x.translate) != null ? s : { x: 0, y: 0 }, Nt = Qe.x * S.scaleX + Dt.x, ve = Qe.y * S.scaleY + Dt.y, Zt = rw();
  L.set(
    {
      width: P - me,
      height: O - ge,
      top: Ge.top + Zt.y,
      left: Ge.left + Zt.x,
      translate: `${Nt}px ${ve}px 0`,
      transform: this.overlay ? "none" : J,
      transition: q ? `${q}, translate 0ms linear` : "translate 0ms linear",
      scale: k ? `${M.x} ${M.y}` : "",
      "transform-origin": `${Te.x * 100}% ${Te.y * 100}%`
    },
    ht
  ), Se && (y.insertAdjacentElement("afterend", Se), l != null && l.rootElement && (typeof l.rootElement == "function" ? l.rootElement(h) : l.rootElement).appendChild(y)), Md(g) && (g.hasAttribute("popover") || g.setAttribute("popover", "manual"), bo(g), g.addEventListener("beforetoggle", Op));
  let It, fn, hn;
  const Rn = I3({
    placeholder: Se,
    element: y,
    feedbackElement: g,
    frameTransform: S,
    transformOrigin: Te,
    width: P,
    height: O,
    top: I,
    left: D,
    widthOffset: me,
    heightOffset: ge,
    delta: We,
    styles: L,
    dragOperation: f,
    getTranslate: () => i.current.translate,
    getElementMutationObserver: () => It,
    getSavedCellWidths: () => hn,
    setSavedCellWidths: (U) => {
      hn = U;
    }
  }), Qt = new Sn(g);
  Ee(() => f.shape = Qt);
  const Jt = zt(g), On = (U) => {
    this.manager.actions.stop({ event: U });
  }, Pt = Ef(Jt);
  Ie && Jt.addEventListener("resize", On), Ee(() => h.status) === "idle" && requestAnimationFrame(() => h.status = "dragging"), Se && (Rn.observe(Se), It = O3(
    y,
    Se,
    re
  ), fn = D3(
    y,
    Se,
    g
  ));
  const st = (a = c.dragOperation.source) == null ? void 0 : a.id, H = () => {
    var U;
    if (!Ie || st == null) return;
    const ie = c.registry.draggables.get(st), he = (U = ie == null ? void 0 : ie.handle) != null ? U : ie == null ? void 0 : ie.element;
    cr(he) && he.focus();
  }, ee = () => {
    It == null || It.disconnect(), fn == null || fn.disconnect(), Rn.disconnect(), Jt.removeEventListener("resize", On), Md(g) && (g.removeEventListener(
      "beforetoggle",
      Op
    ), g.removeAttribute("popover")), g.removeAttribute(mn), L.reset();
    const U = () => {
      var ie;
      if (hn && Dd(y)) {
        const Ve = Array.from(y.cells);
        for (const [jt, en] of Ve.entries())
          en.style.width = (ie = hn[jt]) != null ? ie : "";
      }
      h.status = "idle";
      const he = i.current.translate != null, le = f.status.dragging;
      Se && (!le && he || Se.parentElement !== g.parentElement) && g.isConnected && Se.replaceWith(g), Se == null || Se.remove();
    };
    g === this.overlay ? setTimeout(U, 0) : U();
  }, Q = l == null ? void 0 : l.dropAnimation, G = this, ce = ga(
    // Update transform on move
    () => {
      var U, ie, he;
      const { transform: le, status: Ve } = f;
      if (!(!le.x && !le.y && !i.current.translate) && Ve.dragging) {
        const jt = (U = x.translate) != null ? U : { x: 0, y: 0 }, en = {
          x: le.x / S.scaleX + jt.x,
          y: le.y / S.scaleY + jt.y
        }, ft = i.current.translate, Ye = Ee(() => f.modifiers), Dn = Ee(() => {
          var In;
          return (In = f.shape) == null ? void 0 : In.current;
        }), pr = l == null ? void 0 : l.keyboardTransition, Ea = Ie && !Pt && pr !== null ? `${(ie = pr == null ? void 0 : pr.duration) != null ? ie : 250}ms ${(he = pr == null ? void 0 : pr.easing) != null ? he : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        if (L.set(
          {
            transition: q ? `${q}, translate ${Ea}` : `translate ${Ea}`,
            translate: `${en.x}px ${en.y}px 0`
          },
          ht
        ), It == null || It.takeRecords(), Dn && Dn !== Qt && ft && !Ye.length) {
          const In = Ht.delta(en, ft);
          f.shape = kn.from(
            Dn.boundingRectangle
          ).translate(
            In.x * S.scaleX,
            In.y * S.scaleY
          );
        } else
          f.shape = new Sn(g);
        i.current.translate = en;
      }
    },
    // Drop animation
    function() {
      if (f.status.dropped) {
        this.dispose(), h.status = "dropping";
        const U = (m == null ? void 0 : m.dropAnimation) !== void 0 ? m.dropAnimation : G.dropAnimation !== void 0 ? G.dropAnimation : Q;
        let ie = i.current.translate;
        const he = ie != null;
        if (!ie && y !== g && (ie = { x: 0, y: 0 }), !ie || U === null) {
          ee();
          return;
        }
        c.renderer.rendering.then(() => {
          $3({
            source: h,
            element: y,
            feedbackElement: g,
            placeholder: Se,
            translate: ie,
            moved: he,
            transition: B,
            alignment: h.alignment,
            styles: L,
            animation: U ?? void 0,
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
Xt(qs, 4, "overlay", Pw, Ao, Of);
Br(qs, Ao);
Ao.configure = ba(Ao);
var Ow = Ao, ns = !0, W3 = !1, Dw, Iw, jw, Tw, Qn, Df, If;
Tw = (jw = [Me], Gt.Forward), Iw = (Dw = [Me], Gt.Reverse);
var Xs = class {
  constructor() {
    qe(this, Df, nt(Qn, 8, this, ns)), nt(Qn, 11, this), qe(this, If, nt(Qn, 12, this, ns)), nt(Qn, 15, this);
  }
  isLocked(e) {
    return e === Gt.Idle ? !1 : e == null ? this[Gt.Forward] === ns && this[Gt.Reverse] === ns : this[e] === ns;
  }
  unlock(e) {
    e !== Gt.Idle && (this[e] = W3);
  }
};
Qn = Uo(null);
Df = /* @__PURE__ */ new WeakMap();
If = /* @__PURE__ */ new WeakMap();
Xt(Qn, 4, Tw, jw, Xs, Df);
Xt(Qn, 4, Iw, Dw, Xs, If);
Br(Qn, Xs);
var L3 = [Gt.Forward, Gt.Reverse], Dp = class {
  constructor() {
    this.x = new Xs(), this.y = new Xs();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, F3 = class extends wt {
  constructor(e) {
    super(e);
    const t = Fo(new Dp());
    let n = null;
    this.signal = t, qt(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new Dp();
        return;
      }
      const { delta: o } = e.dragOperation.position;
      if (n) {
        const s = {
          x: Ip(o.x, n.x),
          y: Ip(o.y, n.y)
        }, a = t.peek();
        Be(() => {
          for (const i of d0)
            for (const c of L3)
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
function Ip(e, t) {
  return Math.sign(e - t);
}
var $w, jd, Zs, jf, Xn, Td, Sa = class extends (jd = xa, $w = [Me], jd) {
  constructor(e) {
    super(e), qe(this, jf, nt(Zs, 8, this, !1)), nt(Zs, 11, this), qe(this, Xn), qe(this, Td, () => {
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
        const { by: u } = s ?? {}, h = u ? {
          x: jp(u.x),
          y: jp(u.y)
        } : void 0, p = h ? void 0 : this.scrollIntentTracker.current;
        if (p != null && p.isLocked())
          return !1;
        for (const y of c) {
          const m = jI(y, u);
          if (m.x || m.y) {
            const { speed: b, direction: C } = YI(
              y,
              f,
              h,
              a == null ? void 0 : a.acceleration,
              a == null ? void 0 : a.threshold
            );
            if (p)
              for (const x of d0)
                p[x].isLocked(C[x]) && (b[x] = 0, C[x] = 0);
            if (C.x || C.y) {
              const { x, y: g } = u ?? C, S = x * b.x, w = g * b.y;
              if (S || w) {
                const k = (i = $e(this, Xn)) == null ? void 0 : i.by;
                if (this.autoScrolling && k && (k.x && !S || k.y && !w))
                  continue;
                return _t(this, Xn, {
                  element: y,
                  by: {
                    x: S,
                    y: w
                  }
                }), Wi.schedule($e(this, Td)), !0;
              }
            }
          }
        }
      }
      return _t(this, Xn, void 0), !1;
    };
    let t = null, n = null;
    const r = ud(() => {
      const { position: s, source: a } = e.dragOperation;
      if (!s)
        return null;
      const i = ow(
        ji(a == null ? void 0 : a.element),
        s.current
      );
      return i && (t = i), i ?? t;
    }), o = ud(() => {
      const s = r.value, { documentElement: a } = Yo(s);
      if (!s || s === a) {
        const { target: i } = e.dragOperation, c = i == null ? void 0 : i.element;
        if (c) {
          const l = Nd(c, {
            excludeElement: !1
          });
          return n = l, l;
        }
      }
      if (s) {
        const i = Nd(s, {
          excludeElement: !1
        });
        return this.autoScrolling && n && i.size < (n == null ? void 0 : n.size) ? n : (n = i, i);
      }
      return n = null, null;
    }, vn);
    this.getScrollableElements = () => o.value, this.scrollIntentTracker = new F3(e), this.destroy = e.monitor.addEventListener("dragmove", (s) => {
      this.disabled || s.defaultPrevented || !Ks(e.dragOperation.activatorEvent) || !s.by || this.scroll({ by: s.by }) && s.preventDefault();
    });
  }
};
Zs = Uo(jd);
jf = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
Td = /* @__PURE__ */ new WeakMap();
Xt(Zs, 4, "autoScrolling", $w, Sa, jf);
Br(Zs, Sa);
function jp(e) {
  return e > 0 ? Gt.Forward : e < 0 ? Gt.Reverse : Gt.Idle;
}
var V3 = class {
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
}, z3 = new V3((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), B3 = 10, $d = class extends wt {
  constructor(t, n) {
    super(t, n);
    const r = t.registry.plugins.get(Sa);
    if (!r)
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = qt(() => {
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
          const u = setInterval(
            () => z3.schedule(
              () => r.scroll(void 0, l)
            ),
            B3
          );
          return () => {
            clearInterval(u);
          };
        } else
          r.autoScrolling = !1;
      }
    });
  }
};
$d.configure = ba($d);
var Ww = $d, Tp = {
  capture: !0,
  passive: !0
}, bs, H3 = class extends xa {
  constructor(e) {
    super(e), qe(this, bs), this.handleScroll = () => {
      $e(this, bs) == null && _t(this, bs, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), _t(this, bs, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = qt(() => {
      var n, r, o;
      if (t.status.dragging) {
        const a = (o = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? o : document;
        return a.addEventListener("scroll", this.handleScroll, Tp), () => {
          a.removeEventListener(
            "scroll",
            this.handleScroll,
            Tp
          );
        };
      }
    });
  }
};
bs = /* @__PURE__ */ new WeakMap();
var G3 = "* { user-select: none !important; -webkit-user-select: none !important; }", Y3 = class extends wt {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(
      Bc
    ), n = t == null ? void 0 : t.register(G3);
    if (this.destroy = qt(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized)
        return El(), document.addEventListener("selectionchange", El, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", El, {
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
function El() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var xs = Object.freeze({
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
}), io, Bi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, io, []), this.listeners = new sw(), this.handleSourceKeyDown = (r, o, s) => {
      if (this.disabled || r.defaultPrevented || !Dr(r.target) || o.disabled)
        return;
      const {
        keyboardCodes: a = xs.keyboardCodes,
        preventActivation: i = xs.preventActivation
      } = s ?? {};
      a.start.includes(r.code) && this.manager.dragOperation.status.idle && (i != null && i(r, o) || this.handleStart(r, o, s));
    };
  }
  bind(t, n = this.options) {
    return qt(() => {
      var o;
      const s = (o = t.handle) != null ? o : t.element, a = (i) => {
        Ks(i) && this.handleSourceKeyDown(i, t, n);
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
    t.preventDefault(), t.stopImmediatePropagation(), fw(o);
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
    $e(this, io).push(...c);
  }
  handleKeyDown(t, n, r) {
    const { keyboardCodes: o = xs.keyboardCodes } = r ?? {};
    if (Qr(t, [...o.end, ...o.cancel])) {
      t.preventDefault();
      const s = Qr(t, o.cancel);
      this.handleEnd(t, s);
      return;
    }
    Qr(t, o.up) ? this.handleMove("up", t) : Qr(t, o.down) && this.handleMove("down", t), Qr(t, o.left) ? this.handleMove("left", t) : Qr(t, o.right) && this.handleMove("right", t);
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
    }, c = (o = (r = this.options) == null ? void 0 : r.offset) != null ? o : xs.offset;
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
    const t = this.manager.registry.plugins.get(Ww);
    (t == null ? void 0 : t.disabled) === !1 && (t.disable(), $e(this, io).push(() => {
      t.enable();
    }));
  }
  cleanup() {
    $e(this, io).forEach((t) => t()), _t(this, io, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
io = /* @__PURE__ */ new WeakMap();
Bi.configure = ba(Bi);
Bi.defaults = xs;
var Lw = Bi;
function Qr(e, t) {
  return t.includes(e.code);
}
var _r, K3 = class extends z0 {
  constructor() {
    super(...arguments), qe(this, _r);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        _t(this, _r, Eo(e));
        break;
      case "pointermove":
        if (!$e(this, _r)) return;
        const { x: t, y: n } = Eo(e), r = {
          x: t - $e(this, _r).x,
          y: n - $e(this, _r).y
        }, { tolerance: o } = this.options;
        if (o && xd(r, o)) {
          this.abort();
          return;
        }
        xd(r, this.options.value) && this.activate(e);
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
var co, kr, U3 = class extends z0 {
  constructor() {
    super(...arguments), qe(this, co), qe(this, kr);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        _t(this, kr, Eo(e)), _t(this, co, setTimeout(
          () => this.activate(e),
          this.options.value
        ));
        break;
      case "pointermove":
        if (!$e(this, kr)) return;
        const { x: t, y: n } = Eo(e), r = {
          x: t - $e(this, kr).x,
          y: n - $e(this, kr).y
        };
        xd(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    $e(this, co) && (clearTimeout($e(this, co)), _t(this, kr, void 0), _t(this, co, void 0));
  }
};
co = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakMap();
var ho = class {
};
ho.Delay = U3;
ho.Distance = K3;
var Wd = Object.freeze({
  activationConstraints(e, t) {
    var n;
    const { pointerType: r, target: o } = e;
    if (!(r === "mouse" && Dr(o) && (t.handle === o || (n = t.handle) != null && n.contains(o))))
      return r === "touch" ? [
        new ho.Delay({ value: 250, tolerance: 5 })
      ] : r3(o) && !e.defaultPrevented ? [
        new ho.Delay({ value: 200, tolerance: 0 })
      ] : [
        new ho.Delay({ value: 200, tolerance: 10 }),
        new ho.Distance({ value: 5 })
      ];
  },
  preventActivation(e, t) {
    var n;
    const { target: r } = e;
    if (r === t.element || r === t.handle || !Dr(r) || (n = t.handle) != null && n.contains(r)) return !1;
    const o = _I(r);
    return o === t.element ? !1 : !!o;
  }
}), lo, Hi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, lo, /* @__PURE__ */ new Set()), this.listeners = new sw(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, this.handleMove = () => {
      const { event: r, coordinates: o } = this.latest;
      !r || !o || this.manager.actions.move({ event: r, to: o });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: o = Wd.activationConstraints } = r ?? {};
    return typeof o == "function" ? o(t, n) : o;
  }
  bind(t, n = this.options) {
    return qt(() => {
      var o;
      const s = new AbortController(), { signal: a } = s, i = (l) => {
        n3(l) && this.handlePointerDown(l, t, n);
      };
      let c = [(o = t.handle) != null ? o : t.element];
      n != null && n.activatorElements && (Array.isArray(n.activatorElements) ? c = n.activatorElements : c = n.activatorElements(t));
      for (const l of c)
        l && (Z3(l.ownerDocument.defaultView), l.addEventListener("pointerdown", i, { signal: a }));
      return () => s.abort();
    });
  }
  handlePointerDown(t, n, r) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !Dr(t.target) || n.disabled || q3(t) || !this.manager.dragOperation.status.idle)
      return;
    const { preventActivation: o = Wd.preventActivation } = r ?? {};
    if (o != null && o(t, n))
      return;
    const { target: s } = t, a = cr(s) && s.draggable && s.getAttribute("draggable") === "true", i = No(n.element), { x: c, y: l } = Eo(t);
    this.initialCoordinates = {
      x: c * i.scaleX + i.x,
      y: l * i.scaleY + i.y
    };
    const f = this.activationConstraints(t, n, r);
    t.sensor = this;
    const u = new mI(
      f,
      (m) => this.handleStart(n, m)
    );
    u.signal.onabort = () => this.handleCancel(t), u.onEvent(t), this.controller = u;
    const h = _d(), p = this.listeners.bind(h, [
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
        listener: a ? this.handleCancel : Xa,
        options: {
          capture: !0
        }
      }
    ]), y = () => {
      p(), this.initialCoordinates = void 0;
    };
    $e(this, lo).add(y);
  }
  handlePointerMove(t, n) {
    var r, o;
    if (((r = this.controller) == null ? void 0 : r.activated) === !1) {
      (o = this.controller) == null || o.onEvent(t);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const s = Eo(t), a = No(n.element);
      s.x = s.x * a.scaleX + a.x, s.y = s.y * a.scaleY + a.y, t.preventDefault(), t.stopPropagation(), this.latest.event = t, this.latest.coordinates = s, Wi.schedule(this.handleMove);
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
        listener: Xa,
        options: {
          passive: !1
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: Xa
      },
      {
        type: "contextmenu",
        listener: Xa
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    $e(this, lo).add(l);
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
    }, $e(this, lo).forEach((n) => n()), $e(this, lo).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
lo = /* @__PURE__ */ new WeakMap();
Hi.configure = ba(Hi);
Hi.defaults = Wd;
var Fw = Hi;
function q3(e) {
  return "sensor" in e;
}
function Xa(e) {
  e.preventDefault();
}
function X3() {
}
var $p = /* @__PURE__ */ new WeakSet();
function Z3(e) {
  !e || $p.has(e) || (e.addEventListener("touchmove", X3, {
    capture: !1,
    passive: !1
  }), $p.add(e));
}
var xo = {
  modifiers: [],
  plugins: [C3, Ww, _3, Ow, Y3],
  sensors: [Fw, Lw]
}, Vw = class extends yI {
  constructor(e = {}) {
    const t = sn(e.plugins, xo.plugins), n = sn(e.sensors, xo.sensors), r = sn(
      e.modifiers,
      xo.modifiers
    );
    super(Pf(Us({}, e), {
      plugins: [H3, Sa, Bc, ...t],
      sensors: n,
      modifiers: r
    }));
  }
}, zw, Bw, Ld, Jn, Tf, $f, Hc = class extends (Ld = En, Bw = [Me], zw = [Me], Ld) {
  constructor(e, t) {
    var n = e, {
      element: r,
      effects: o = () => [],
      handle: s
    } = n, a = yw(n, [
      "element",
      "effects",
      "handle"
    ]);
    super(
      Us({
        effects: () => [
          ...o(),
          () => {
            var i, c;
            const { manager: l } = this;
            if (!l) return;
            const u = ((c = (i = this.sensors) == null ? void 0 : i.map(Bs)) != null ? c : [
              ...l.sensors
            ]).map((h) => {
              const p = h instanceof ko ? h : l.registry.register(h.plugin), y = h instanceof ko ? void 0 : h.options;
              return p.bind(this, y);
            });
            return function() {
              u.forEach((p) => p());
            };
          }
        ]
      }, a),
      t
    ), qe(this, Tf, nt(Jn, 8, this)), nt(Jn, 11, this), qe(this, $f, nt(Jn, 12, this)), nt(Jn, 15, this), this.element = r, this.handle = s;
  }
};
Jn = Uo(Ld);
Tf = /* @__PURE__ */ new WeakMap();
$f = /* @__PURE__ */ new WeakMap();
Xt(Jn, 4, "handle", Bw, Hc, Tf);
Xt(Jn, 4, "element", zw, Hc, $f);
Br(Jn, Hc);
var Hw, Gw, Fd, er, Wf, Ml, Yw, Kw, Os, Lf, Ff = class extends (Fd = Mn, Gw = [Me], Hw = [Me], Fd) {
  constructor(e, t) {
    var n = e, { element: r, effects: o = () => [] } = n, s = yw(n, ["element", "effects"]);
    const { collisionDetector: a = pw } = s, i = (l) => {
      const { manager: f, element: u } = this;
      if (!u || l === null) {
        this.shape = void 0;
        return;
      }
      if (!f) return;
      const h = new Sn(u), p = Ee(() => this.shape);
      return h && (p != null && p.equals(h)) ? p : (this.shape = h, h);
    }, c = Fo(!1);
    super(
      Pf(Us({}, s), {
        collisionDetector: a,
        effects: () => [
          ...o(),
          () => {
            const { element: l, manager: f } = this;
            if (!f) return;
            const { dragOperation: u } = f, { source: h } = u;
            c.value = !!(h && u.status.initialized && l && !this.disabled && this.accepts(h));
          },
          () => {
            const { element: l } = this;
            if (c.value && l) {
              const f = new II(
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
    ), qe(this, Os), qe(this, Wf, nt(er, 8, this)), nt(er, 11, this), qe(this, Lf, nt(er, 12, this)), nt(er, 15, this), this.element = r, this.refreshShape = () => i();
  }
  set element(e) {
    _t(this, Os, e, Kw);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : $e(this, Os, Yw);
  }
};
er = Uo(Fd);
Wf = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakSet();
Lf = /* @__PURE__ */ new WeakMap();
Ml = Xt(er, 20, "#element", Gw, Os, Wf), Yw = Ml.get, Kw = Ml.set;
Xt(er, 4, "proxy", Hw, Ff, Lf);
Br(er, Ff);
function Q3(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Ds(e) {
  var t;
  if (e != null)
    return Q3(e) ? (t = e.current) != null ? t : void 0 : e;
}
var J3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = J3 ? Kd : on;
function ej() {
  const e = tt(0)[1];
  return ke(() => {
    e((t) => t + 1);
  }, [e]);
}
function tj(e, t) {
  const n = ct(/* @__PURE__ */ new Map()), r = ej();
  return qo(() => {
    if (!e) {
      n.current.clear();
      return;
    }
    return qt(() => {
      var o;
      let s = !1, a = !1;
      for (const i of n.current) {
        const [c] = i, l = Ee(() => i[1]), f = e[c];
        l !== f && (s = !0, n.current.set(c, f), a = (o = t == null ? void 0 : t(c, l, f)) != null ? o : !1);
      }
      s && (a ? queueMicrotask(() => jl(r)) : r());
    });
  }, [e]), po(
    () => e && new Proxy(e, {
      get(o, s) {
        const a = o[s];
        return n.current.set(s, a), a;
      }
    }),
    [e]
  );
}
function nj(e, t) {
  e();
}
function Jr(e) {
  const t = ct(e);
  return qo(() => {
    t.current = e;
  }, [e]), t;
}
function yt(e, t, n = on, r = Object.is) {
  const o = ct(e);
  n(() => {
    const s = o.current;
    r(e, s) || (o.current = e, t(e, s));
  }, [t, e]);
}
function Nl(e, t) {
  const n = ct(Ds(e));
  qo(() => {
    const r = Ds(e);
    r !== n.current && (n.current = r, t(r));
  });
}
var Wp = Object.getOwnPropertySymbols, rj = Object.prototype.hasOwnProperty, oj = Object.prototype.propertyIsEnumerable, sj = (e, t) => {
  var n = {};
  for (var r in e)
    rj.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wp)
    for (var r of Wp(e))
      t.indexOf(r) < 0 && oj.call(e, r) && (n[r] = e[r]);
  return n;
}, aj = new Vw(), Uw = Qs(
  aj
), ij = G1(
  Zp(({ children: e }, t) => {
    const [n, r] = tt(0), o = ct(null), s = ct(null), a = po(
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
          })), Y1(() => {
            i(), r((c) => c + 1);
          });
        }
      }),
      []
    );
    return qo(() => {
      var i;
      (i = s.current) == null || i.call(s), o.current = null;
    }, [e, n]), K1(t, () => a), null;
  })
), Pl = [void 0, vn];
function qw(e) {
  var t = e, {
    children: n,
    onCollision: r,
    onBeforeDragStart: o,
    onDragStart: s,
    onDragMove: a,
    onDragOver: i,
    onDragEnd: c
  } = t, l = sj(t, [
    "children",
    "onCollision",
    "onBeforeDragStart",
    "onDragStart",
    "onDragMove",
    "onDragOver",
    "onDragEnd"
  ]);
  const f = ct(null), {
    plugins: u,
    modifiers: h,
    sensors: p
  } = l, y = sn(u, xo.plugins), m = sn(p, xo.sensors), b = sn(
    h,
    xo.modifiers
  ), C = Jr(o), x = Jr(s), g = Jr(i), S = Jr(a), w = Jr(c), k = Jr(r), E = cj(() => {
    var M;
    return (M = l.manager) != null ? M : new Vw(l);
  });
  return on(() => {
    if (!f.current) throw new Error("Renderer not found");
    const { renderer: M, trackRendering: P } = f.current, { monitor: O } = E;
    E.renderer = M;
    const I = [
      O.addEventListener("beforedragstart", (D) => {
        const L = C.current;
        L && P(() => L(D, E));
      }),
      O.addEventListener(
        "dragstart",
        (D) => {
          var L;
          return (L = x.current) == null ? void 0 : L.call(x, D, E);
        }
      ),
      O.addEventListener("dragover", (D) => {
        const L = g.current;
        L && P(() => L(D, E));
      }),
      O.addEventListener("dragmove", (D) => {
        const L = S.current;
        L && P(() => L(D, E));
      }),
      O.addEventListener("dragend", (D) => {
        const L = w.current;
        L && P(() => L(D, E));
      }),
      O.addEventListener(
        "collision",
        (D) => {
          var L;
          return (L = k.current) == null ? void 0 : L.call(k, D, E);
        }
      )
    ];
    return () => I.forEach((D) => D());
  }, [E]), yt(
    y,
    () => E && (E.plugins = y),
    ...Pl
  ), yt(
    m,
    () => E && (E.sensors = m),
    ...Pl
  ), yt(
    b,
    () => E && (E.modifiers = b),
    ...Pl
  ), /* @__PURE__ */ d.jsxs(Uw.Provider, { value: E, children: [
    /* @__PURE__ */ d.jsx(ij, { ref: f, children: n }),
    n
  ] });
}
function cj(e) {
  const t = ct(null);
  return t.current || (t.current = e()), H1(() => () => {
    var n;
    return (n = t.current) == null ? void 0 : n.destroy();
  }, []), t.current;
}
function lj() {
  return Is(Uw);
}
function dj(e) {
  var t;
  const n = (t = lj()) != null ? t : void 0, [r] = tt(() => e(n));
  return r.manager !== n && (r.manager = n), qo(r.register, [n, r]), r;
}
var uj = Object.create, Xw = Object.defineProperty, fj = Object.getOwnPropertyDescriptor, Zw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Gc = (e) => {
  throw TypeError(e);
}, hj = (e, t, n) => t in e ? Xw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pj = (e) => {
  var t;
  return [, , , uj((t = e == null ? void 0 : e[Zw("metadata")]) != null ? t : null)];
}, Qw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Jw = (e) => e !== void 0 && typeof e != "function" ? Gc("Function expected") : e, mj = (e, t, n, r, o) => ({ kind: Qw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Gc("Already initialized") : o.push(Jw(s || null)) }), vj = (e, t) => hj(t, Zw("metadata"), e[3]), gj = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, e1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, y = Qw[f + 5], m = e[p] || (e[p] = []), b = (o = o.prototype, fj(o, n)), C = r.length - 1; C >= 0; C--)
    c = mj(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (x) => n in x }, l.get = (x) => x[n], a = (0, r[C])(b[y], c), i._ = 1, Jw(a) && (b[y] = a);
  return b && Xw(o, n, b), o;
}, t1 = (e, t, n) => t.has(e) || Gc("Cannot " + n), yj = (e, t, n) => (t1(e, t, "read from private field"), t.get(e)), bj = (e, t, n) => t.has(e) ? Gc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xj = (e, t, n, r) => (t1(e, t, "write to private field"), t.set(e, n), n), rs = class Vd {
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
    return new Vd(t.x - n.x, t.y - n.y);
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
    return new Vd(t, n);
  }
}, n1, r1, zd, gi, _a, Vf = class extends (zd = Vr, r1 = [Ue], n1 = [Ue], zd) {
  constructor(e) {
    const t = rs.from(e);
    super(t, (n, r) => rs.equals(n, r)), gj(_a, 5, this), bj(this, gi, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return rs.delta(this.current, this.initial);
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
    const { current: t } = this, n = rs.from(e), r = {
      x: n.x - t.x,
      y: n.y - t.y
    }, o = Date.now(), s = o - yj(this, gi), a = (i) => Math.round(i / s * 100);
    Be(() => {
      xj(this, gi, o), this.velocity = {
        x: a(r.x),
        y: a(r.y)
      }, super.current = n;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(rs.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
_a = pj(zd);
gi = /* @__PURE__ */ new WeakMap();
e1(_a, 2, "delta", r1, Vf);
e1(_a, 2, "direction", n1, Vf);
vj(_a, Vf);
var o1 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(o1 || {});
Object.values(o1);
var wj = Object.create, s1 = Object.defineProperty, Cj = Object.defineProperties, Sj = Object.getOwnPropertyDescriptor, _j = Object.getOwnPropertyDescriptors, Gi = Object.getOwnPropertySymbols, a1 = Object.prototype.hasOwnProperty, i1 = Object.prototype.propertyIsEnumerable, kj = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ka = (e) => {
  throw TypeError(e);
}, Bd = (e, t, n) => t in e ? s1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Al = (e, t) => {
  for (var n in t || (t = {}))
    a1.call(t, n) && Bd(e, n, t[n]);
  if (Gi)
    for (var n of Gi(t))
      i1.call(t, n) && Bd(e, n, t[n]);
  return e;
}, Rl = (e, t) => Cj(e, _j(t)), Ej = (e, t) => {
  var n = {};
  for (var r in e)
    a1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Gi)
    for (var r of Gi(e))
      t.indexOf(r) < 0 && i1.call(e, r) && (n[r] = e[r]);
  return n;
}, Mj = (e) => {
  var t;
  return [, , , wj((t = void 0) != null ? t : null)];
}, c1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ws = (e) => e !== void 0 && typeof e != "function" ? ka("Function expected") : e, Nj = (e, t, n, r, o) => ({ kind: c1[e], name: t, metadata: r, addInitializer: (s) => n._ ? ka("Already initialized") : o.push(ws(s || null)) }), Pj = (e, t) => Bd(t, kj("metadata"), e[3]), Za = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, l1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f, u = t & 7, h = !1, p = !1, y = e.length + 1, m = c1[u + 5], b = e[y - 1] = [], C = e[y] || (e[y] = []), x = (o = o.prototype, Sj({ get [n]() {
    return Cs(this, s);
  }, set [n](S) {
    return Er(this, s, S);
  } }, n)), g = r.length - 1; g >= 0; g--)
    l = Nj(u, n, c = {}, e[3], C), l.static = h, l.private = p, f = l.access = { has: (S) => n in S }, f.get = (S) => S[n], f.set = (S, w) => S[n] = w, i = (0, r[g])({ get: x.get, set: x.set }, l), c._ = 1, i === void 0 ? ws(i) && (x[m] = i) : typeof i != "object" || i === null ? ka("Object expected") : (ws(a = i.get) && (x.get = a), ws(a = i.set) && (x.set = a), ws(a = i.init) && b.unshift(a));
  return x && s1(o, n, x), o;
}, d1 = (e, t, n) => t.has(e) || ka("Cannot " + n), Cs = (e, t, n) => (d1(e, t, "read from private field"), t.get(e)), os = (e, t, n) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Er = (e, t, n, r) => (d1(e, t, "write to private field"), t.set(e, n), n);
function tr(e) {
  return e instanceof Hf || e instanceof p1;
}
var Qa = 10, Aj = class extends wt {
  constructor(e) {
    super(e);
    const t = qt(() => {
      const { dragOperation: r } = e;
      if (Ks(r.activatorEvent) && tr(r.source) && r.status.initialized) {
        const o = e.registry.plugins.get(Sa);
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
          if (!Ks(r.nativeEvent) || !tr(s.source) || !s.shape)
            return;
          const { actions: a, collisionObserver: i, registry: c } = o, { by: l } = r;
          if (!l)
            return;
          const f = Rj(l), { source: u, target: h } = s, { center: p } = s.shape.current, y = [], m = [];
          Be(() => {
            for (const w of c.droppables) {
              const { id: k } = w;
              if (!w.accepts(u) || k === (h == null ? void 0 : h.id) && tr(w) || !w.element)
                continue;
              let E = w.shape;
              const M = new Sn(w.element, {
                getBoundingClientRect: (P) => Gs(P, void 0, 0.2)
              });
              !M.height || !M.width || (f == "down" && p.y + Qa < M.center.y || f == "up" && p.y - Qa > M.center.y || f == "left" && p.x - Qa > M.center.x || f == "right" && p.x + Qa < M.center.x) && (y.push(w), w.shape = M, m.push(() => w.shape = E));
            }
          }), r.preventDefault(), i.disable();
          const b = i.computeCollisions(
            y,
            i3
          );
          Be(() => m.forEach((w) => w()));
          const [C] = b;
          if (!C)
            return;
          const { id: x } = C, { index: g, group: S } = u.sortable;
          a.setDropTarget(x).then(() => {
            const { source: w, target: k, shape: E } = s;
            if (!w || !tr(w) || !E)
              return;
            const {
              index: M,
              group: P,
              target: O
            } = w.sortable, I = g !== M || S !== P, D = I ? O : k == null ? void 0 : k.element;
            if (!D) return;
            fw(D);
            const L = new Sn(D);
            if (!L)
              return;
            const j = kn.delta(
              L,
              kn.from(E.current.boundingRectangle),
              w.alignment
            );
            a.move({
              by: j
            }), I ? a.setDropTarget(w.id).then(() => i.enable()) : i.enable();
          });
        });
      }
    );
    this.destroy = () => {
      n(), t();
    };
  }
};
function Rj(e) {
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
var Oj = Object.defineProperty, Dj = Object.defineProperties, Ij = Object.getOwnPropertyDescriptors, Lp = Object.getOwnPropertySymbols, jj = Object.prototype.hasOwnProperty, Tj = Object.prototype.propertyIsEnumerable, Fp = (e, t, n) => t in e ? Oj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, eo = (e, t) => {
  for (var n in t || (t = {}))
    jj.call(t, n) && Fp(e, n, t[n]);
  if (Lp)
    for (var n of Lp(t))
      Tj.call(t, n) && Fp(e, n, t[n]);
  return e;
}, to = (e, t) => Dj(e, Ij(t));
function $j(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ja(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function Ol(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Wj(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (g, S) => g === S || g !== null && typeof g == "object" && "id" in g && g.id === S;
  if (Array.isArray(e)) {
    const g = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (g === -1 || S === -1) {
      if (Ol(s)) {
        const w = s.initialIndex, k = s.index;
        return w === k || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, k);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== g)
        return n(e, g, w);
    }
    return n(e, g, S);
  }
  const l = Object.entries(e);
  let f = -1, u, h = -1, p;
  for (const [g, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (u = g)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = g)), f !== -1 && h !== -1)
      break;
  if (f === -1 && Ol(s)) {
    const g = s.initialGroup == null ? void 0 : Ja(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ja(e, s.group), k = s.index;
    if (g == null || w == null || g === w && S === k)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return to(eo({}, e), {
        [g]: n(e[g], S, k)
      });
    const E = e[g][S];
    return to(eo({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, k),
        E,
        ...e[w].slice(k)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: y } = s.manager, m = (o = (r = y.shape) == null ? void 0 : r.current.center) != null ? o : y.position.current;
  if (p == null) {
    const g = Ja(e, a.id);
    if (g != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && Ol(s)) {
      const g = s.group == null ? void 0 : Ja(e, s.group), S = s.group != null && g !== u, w = s.index !== f;
      if (S || w) {
        const k = s.group == null ? u : g;
        if (k != null) {
          if (u === k)
            return to(eo({}, e), {
              [u]: n(
                e[u],
                f,
                s.index
              )
            });
          const E = e[u][f];
          return to(eo({}, e), {
            [u]: [
              ...e[u].slice(0, f),
              ...e[u].slice(f + 1)
            ],
            [k]: [
              ...e[k].slice(0, s.index),
              E,
              ...e[k].slice(s.index)
            ]
          });
        }
      }
    }
    return "preventDefault" in t && t.preventDefault(), e;
  }
  if (u === p)
    return to(eo({}, e), {
      [u]: n(e[u], f, h)
    });
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, x = e[u][f];
  return to(eo({}, e), {
    [u]: [
      ...e[u].slice(0, f),
      ...e[u].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      x,
      ...e[p].slice(h + C)
    ]
  });
}
function Lj(e, t) {
  return Wj(e, t, $j);
}
function Vp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e)
    for (const r of n)
      t.set(r.id, r.index);
  return t;
}
function zp(e, t, n) {
  var r;
  for (const [o, s] of t)
    for (const a of s) {
      const i = e.get(a.id);
      if (a.index !== i || a.group !== o || !((r = n.get(o)) != null && r.has(a)))
        return !0;
    }
  return !1;
}
var Bp = "__default__", Fj = class extends wt {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const o of e.registry.droppables)
        if (o instanceof Hf) {
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
        const c = t(), l = Vp(c), f = a.sortable.group === i.sortable.group, u = c.get(a.sortable.group), h = f ? u : c.get(i.sortable.group);
        !u || !h || queueMicrotask(() => {
          r.defaultPrevented || o.renderer.rendering.then(() => {
            var p, y;
            const m = t();
            if (zp(l, c, m))
              return;
            const b = a.sortable.element, C = i.sortable.element;
            if (!C || !b || !f && i.id === a.sortable.group)
              return;
            const x = ei(u), g = f ? x : ei(h), S = (p = a.sortable.group) != null ? p : Bp, w = (y = i.sortable.group) != null ? y : Bp, k = {
              [S]: x,
              [w]: g
            }, E = Lj(k, r);
            if (k === E) return;
            const M = E[w].indexOf(a.sortable), P = E[w].indexOf(i.sortable);
            o.collisionObserver.disable(), Hp(b, M, C, P), Be(() => {
              for (const [O, I] of E[S].entries())
                I.index = O;
              if (!f)
                for (const [O, I] of E[w].entries())
                  I.group = i.sortable.group, I.index = O;
            }), o.actions.setDropTarget(a.id).then(() => o.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (r, o) => {
        if (!r.canceled)
          return;
        const { dragOperation: s } = o, { source: a } = s;
        tr(a) && (a.sortable.initialIndex === a.sortable.index && a.sortable.initialGroup === a.sortable.group || queueMicrotask(() => {
          const i = t(), c = Vp(i), l = i.get(
            a.sortable.initialGroup
          );
          l && o.renderer.rendering.then(() => {
            const f = t();
            if (zp(c, i, f))
              return;
            const u = ei(l), h = ei(
              l,
              zj
            ), p = a.sortable.element, y = h.indexOf(a.sortable), m = u[y], b = m == null ? void 0 : m.element;
            !m || !b || !p || (Hp(p, m.index, b, a.index), Be(() => {
              for (const C of i.values()) {
                const x = Array.from(C).values();
                for (const g of x)
                  g.index = g.initialIndex, g.group = g.initialGroup;
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
function Hp(e, t, n, r) {
  const o = r < t ? "afterend" : "beforebegin";
  n.insertAdjacentElement(o, e);
}
function Vj(e, t) {
  return e.index - t.index;
}
function zj(e, t) {
  return e.initialIndex - t.initialIndex;
}
function ei(e, t = Vj) {
  return Array.from(e).sort(t);
}
var Gp = [
  Aj,
  Fj
], u1 = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
};
function Yp(e) {
  var t, n;
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : {
    draggable: (t = e == null ? void 0 : e.draggable) != null ? t : !1,
    droppable: (n = e == null ? void 0 : e.droppable) != null ? n : !1
  };
}
var ti = new B5(), f1, h1, nr, zf, Ss, _s, Bf, uo;
h1 = [Me], f1 = [Me];
var Yc = class {
  constructor(e, t) {
    os(this, zf, Za(nr, 8, this)), Za(nr, 11, this), os(this, Ss), os(this, _s), os(this, Bf, Za(nr, 12, this)), Za(nr, 15, this), os(this, uo), this.register = () => (Be(() => {
      var y, m;
      (y = this.manager) == null || y.registry.register(this.droppable), (m = this.manager) == null || m.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      Be(() => {
        var y, m;
        (y = this.manager) == null || y.registry.unregister(this.droppable), (m = this.manager) == null || m.registry.unregister(this.draggable);
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
      transition: l = u1,
      plugins: f
    } = n, u = Ej(n, [
      "effects",
      "disabled",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    const h = sn(f, Gp), p = Yp(o);
    this.droppable = new Hf(
      Rl(Al({}, u), { disabled: p.droppable }),
      t,
      this
    ), this.draggable = new p1(
      Rl(Al({}, u), {
        disabled: p.draggable,
        plugins: h,
        effects: () => [
          () => {
            var y, m, b;
            const C = (y = this.manager) == null ? void 0 : y.dragOperation.status;
            C != null && C.initializing && this.id === ((b = (m = this.manager) == null ? void 0 : m.dragOperation.source) == null ? void 0 : b.id) && ti.clear(this.manager), C != null && C.dragging && ti.set(
              this.manager,
              this.id,
              Ee(() => ({
                initialIndex: this.index,
                initialGroup: this.group
              }))
            );
          },
          () => {
            const { index: y, group: m, manager: b } = this, C = Cs(this, _s), x = Cs(this, Ss);
            (y !== C || m !== x) && (Er(this, _s, y), Er(this, Ss, m), this.animate());
          },
          () => {
            var y, m;
            const { target: b } = this, { isDragSource: C } = this.draggable;
            ((m = (y = this.draggable.pluginConfig(Ow)) == null ? void 0 : y.feedback) != null ? m : "default") === "move" && C && (this.droppable.disabled = !b);
          },
          ...r()
        ],
        type: c,
        sensors: i
      }),
      t,
      this
    ), Er(this, uo, u.element), this.manager = t, this.index = a, Er(this, _s, a), this.group = s, Er(this, Ss, s), this.type = c, this.transition = l;
  }
  get initialIndex() {
    var e, t;
    return (t = (e = ti.get(this.manager, this.id)) == null ? void 0 : e.initialIndex) != null ? t : this.index;
  }
  get initialGroup() {
    var e, t;
    return (t = (e = ti.get(this.manager, this.id)) == null ? void 0 : e.initialGroup) != null ? t : this.group;
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
        }, { translate: i } = An(o), c = Pp(o, i, !1), l = Pp(o, i);
        if (a.x || a.y) {
          const f = Ef(zt(o)) ? Rl(Al({}, t), { duration: 0 }) : t;
          hw({
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
      const t = Cs(this, uo), n = this.droppable.element, r = this.draggable.element;
      (!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Er(this, uo, e);
    });
  }
  get element() {
    var e, t;
    const n = Cs(this, uo);
    if (n)
      return (t = (e = kd.get(n)) != null ? e : n) != null ? t : this.droppable.element;
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
    this.draggable.plugins = sn(e, Gp);
  }
  set disabled(e) {
    const t = Yp(e);
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
    this.droppable.collisionDetector = e ?? pw;
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
nr = Mj();
zf = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
Bf = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
l1(nr, 4, "index", h1, Yc, zf);
l1(nr, 4, "group", f1, Yc, Bf);
Pj(nr, Yc);
var p1 = class extends Hc {
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
}, Hf = class extends Ff {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
}, Bj = Object.defineProperty, Hj = Object.defineProperties, Gj = Object.getOwnPropertyDescriptors, Kp = Object.getOwnPropertySymbols, Yj = Object.prototype.hasOwnProperty, Kj = Object.prototype.propertyIsEnumerable, Up = (e, t, n) => t in e ? Bj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dl = (e, t) => {
  for (var n in t || (t = {}))
    Yj.call(t, n) && Up(e, n, t[n]);
  if (Kp)
    for (var n of Kp(t))
      Kj.call(t, n) && Up(e, n, t[n]);
  return e;
}, Uj = (e, t) => Hj(e, Gj(t));
function m1(e) {
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
    modifiers: u,
    sensors: h,
    target: p,
    type: y,
    plugins: m
  } = e, b = Dl(Dl({}, u1), e.transition), C = dj((g) => new Yc(
    Uj(Dl({}, e), {
      transition: b,
      register: !1,
      handle: Ds(i),
      element: Ds(a),
      target: Ds(p)
    }),
    g
  )), x = tj(C, qj);
  return yt(o, () => C.id = o), qo(() => {
    Be(() => {
      C.group = l, C.index = c;
    });
  }, [C, l, c]), yt(y, () => C.type = y), yt(
    t,
    () => C.accept = t,
    void 0,
    vn
  ), yt(s, () => s && (C.data = s)), yt(
    c,
    () => {
      var g;
      (g = C.manager) != null && g.dragOperation.status.idle && (b != null && b.idle) && C.refreshShape();
    },
    nj
  ), Nl(i, (g) => C.handle = g), Nl(a, (g) => C.element = g), Nl(p, (g) => C.target = g), yt(
    f,
    () => C.disabled = f ?? !1,
    void 0,
    vn
  ), yt(
    h,
    () => C.sensors = h,
    void 0,
    vn
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
    vn
  ), yt(
    b,
    () => C.transition = b,
    void 0,
    vn
  ), yt(
    u,
    () => C.modifiers = u,
    void 0,
    vn
  ), yt(
    e.alignment,
    () => C.alignment = e.alignment
  ), {
    sortable: x,
    get isDragging() {
      return x.isDragging;
    },
    get isDropping() {
      return x.isDropping;
    },
    get isDragSource() {
      return x.isDragSource;
    },
    get isDropTarget() {
      return x.isDropTarget;
    },
    handleRef: ke(
      (g) => {
        C.handle = g ?? void 0;
      },
      [C]
    ),
    ref: ke(
      (g) => {
        var S, w;
        !g && ((S = C.element) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.element = g ?? void 0);
      },
      [C]
    ),
    sourceRef: ke(
      (g) => {
        var S, w;
        !g && ((S = C.source) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.source = g ?? void 0);
      },
      [C]
    ),
    targetRef: ke(
      (g) => {
        var S, w;
        !g && ((S = C.target) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.target = g ?? void 0);
      },
      [C]
    )
  };
}
function qj(e, t, n) {
  return !!(e === "isDragSource" && !n && t);
}
const v1 = _.createContext(null), Xj = () => {
  const e = _.useContext(v1);
  if (!e)
    throw new Error("Sortable.Item must be rendered inside Sortable.Container");
  return e;
}, Zj = (e) => fb(e, "Sortable.Container");
function Qj({
  value: e,
  onValueChange: t,
  getItemValue: n = Zj,
  disabled: r = !1,
  className: o,
  children: s
}, a) {
  const i = _.useMemo(
    () => e.map((f) => n(f)),
    [e, n]
  ), c = _.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    i.forEach((p, y) => f.set(p, y));
    const u = (p) => f.get(p) ?? -1;
    return { getIndex: u, moveItem: (p, y) => {
      const m = u(p), b = m + y;
      if (m < 0 || b < 0 || b >= e.length)
        return;
      const C = [...e], [x] = C.splice(m, 1);
      x !== void 0 && (C.splice(b, 0, x), t(C));
    }, count: i.length, disabled: r };
  }, [i, e, t, r]), l = (f) => {
    const u = E5(i, f);
    if (u === i)
      return;
    const h = /* @__PURE__ */ new Map();
    e.forEach((y) => h.set(n(y), y));
    const p = [];
    u.forEach((y) => {
      const m = h.get(y);
      m !== void 0 && p.push(m);
    }), t(p);
  };
  return /* @__PURE__ */ d.jsx(v1.Provider, { value: c, children: /* @__PURE__ */ d.jsx(qw, { onDragEnd: l, children: /* @__PURE__ */ d.jsx("ul", { ref: a, className: R("gap-xs flex flex-col", o), children: s }) }) });
}
const g1 = _.forwardRef(Qj);
g1.displayName = "Sortable.Container";
const y1 = _.forwardRef(
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
      disabled: u
    } = Xj(), h = c(e), p = t || u, { ref: y, isDragging: m } = m1({
      id: e,
      index: h,
      disabled: p
    }), b = (o == null ? void 0 : o.moveUp) ?? "Move up", C = (o == null ? void 0 : o.moveDown) ?? "Move down";
    return /* @__PURE__ */ d.jsxs(
      "li",
      {
        ref: (x) => {
          y(x), typeof i == "function" ? i(x) : i && (i.current = x);
        },
        "data-dragging": m || void 0,
        className: R(
          `rounded-sm p-2 gap-xxs border-interactive-default bg-surface-primary
          hover:border-interactive-hover flex cursor-grab items-center border
          transition-colors`,
          s
        ),
        children: [
          /* @__PURE__ */ d.jsx(Jp, { size: 16, className: "text-shape-light" }),
          /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex-1", children: a }),
          (n || r) && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex shrink-0 items-center", children: [
            n && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsx(Kt, { content: b, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
                He,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: l2,
                  "aria-label": b,
                  className: "h-6 w-6",
                  disabled: p || h <= 0,
                  onClick: () => l(e, -1)
                }
              ) }),
              /* @__PURE__ */ d.jsx(Kt, { content: C, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
                He,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: ea,
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
y1.displayName = "Sortable.Item";
const S7 = {
  Container: g1,
  Item: y1
}, Jj = pe(
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
), eT = pe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), _7 = ({
  children: e,
  className: t,
  level: n,
  customColor: r,
  size: o = "md",
  onRemove: s,
  indicator: a
}) => {
  const i = !!a;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: R(
        Jj({
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
        i && a && /* @__PURE__ */ d.jsx("div", { className: eT({ indicator: a }) }),
        /* @__PURE__ */ d.jsx("div", { className: "truncate", children: e }),
        !!s && /* @__PURE__ */ d.jsx(
          "button",
          {
            className: R(
              `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
            items-center justify-center rounded-full`
            ),
            onClick: s,
            children: /* @__PURE__ */ d.jsxs(
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
                  /* @__PURE__ */ d.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ d.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, tT = _.forwardRef(
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
    return o === "radial" ? /* @__PURE__ */ d.jsx(
      b1,
      {
        ref: a,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...s
      }
    ) : /* @__PURE__ */ d.jsxs("div", { ref: a, className: R("px-xxl w-full", e), ...s, children: [
      /* @__PURE__ */ d.jsx("div", { className: "gap-sm flex items-center", children: i.map((c, l) => /* @__PURE__ */ d.jsxs(_.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ d.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ d.jsx(
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
                  children: c.status === "completed" && /* @__PURE__ */ d.jsx(
                    Qp,
                    {
                      className: "text-interactive-inverse h-2.5 w-2.5"
                    }
                  )
                }
              )
            }
          ),
          r && /* @__PURE__ */ d.jsx(
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
        l < i.length - 1 && /* @__PURE__ */ d.jsx(
          "div",
          {
            className: R(
              "h-0.25 flex-1 transition-colors",
              c.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, c.id)) }),
      r && /* @__PURE__ */ d.jsx("div", { className: "h-8" })
    ] });
  }
), b1 = _.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const s = t.length, a = n !== void 0 ? n : t.findIndex((p) => p.status === "active"), i = Math.max(
    0,
    Math.min(a, s - 1)
  ), c = t[i] || t[0], l = s > 0 ? (i + 1) / s * 100 : 0, f = 2 * Math.PI * 24, u = f, h = f - l / 100 * f;
  return /* @__PURE__ */ d.jsx("div", { ref: o, className: R("space-y-6", e), ...r, children: /* @__PURE__ */ d.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
    /* @__PURE__ */ d.jsx("div", { className: "h-13 w-13 flex flex-shrink-0", children: /* @__PURE__ */ d.jsxs("div", { className: "relative h-full w-full", children: [
      /* @__PURE__ */ d.jsxs(
        "svg",
        {
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          className: "-rotate-90 transform",
          children: [
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                className: "stroke-shape-accent-gray-soft stroke-[4]"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeDasharray: u,
                strokeDashoffset: h,
                strokeLinecap: "round",
                className: `text-interactive-primary-default ease-in-out
                  transition-all duration-500`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ d.jsxs(
        "svg",
        {
          width: "24",
          height: "20",
          viewBox: "0 0 24 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ d.jsx(
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
            /* @__PURE__ */ d.jsx(
              "path",
              {
                d: "M17.5 6.5L11 18",
                stroke: "currentColor",
                className: "text-shape-accent-gray-soft stroke-1"
              }
            ),
            /* @__PURE__ */ d.jsx(
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
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "gap-xxxs flex w-auto flex-col items-start justify-center",
        children: c && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            "span",
            {
              className: "text-lg font-bold text-body-primary leading-[1.2]",
              children: c.title || c.label
            }
          ),
          c.description && /* @__PURE__ */ d.jsx(
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
b1.displayName = "RadialStepper";
tT.displayName = "Stepper";
const nT = v.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const s = n || (t ? `switch-${t}` : void 0), a = /* @__PURE__ */ d.jsx(
    XM,
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
      children: /* @__PURE__ */ d.jsx(
        ZM,
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
  return t ? /* @__PURE__ */ d.jsxs("div", { className: "gap-3 flex items-center", children: [
    a,
    /* @__PURE__ */ d.jsx(
      "label",
      {
        htmlFor: s,
        className: "text-body-primary font-semibold cursor-pointer select-none",
        children: t
      }
    )
  ] }) : a;
});
nT.displayName = "Switch";
const Hd = {
  loading: !1,
  loadingText: "ローディング中…"
}, x1 = _.createContext(
  Hd
), w1 = () => _.useContext(x1), rT = _.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Hd.loading,
    loadingText: r = Hd.loadingText,
    ...o
  }, s) => {
    const a = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ d.jsx(x1.Provider, { value: a, children: /* @__PURE__ */ d.jsx(
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
rT.displayName = "Table";
const oT = _.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: s } = w1(), a = t ?? s;
    return /* @__PURE__ */ d.jsxs(
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
          a && /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ d.jsx(
            Nc.Linear,
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
oT.displayName = "TableHeader";
const C1 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ d.jsx("td", { colSpan: 100, className: "p-0", children: /* @__PURE__ */ d.jsx(
  "div",
  {
    className: `py-sm min-h-12 sticky
          left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] w-fit
          text-center`,
    children: /* @__PURE__ */ d.jsx(
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
) }) }));
C1.displayName = "TableCoverMessage";
const sT = _.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, s) => {
    const { loading: a, loadingText: i } = w1(), c = t ?? a, l = n ?? i;
    return /* @__PURE__ */ d.jsx("tbody", { ref: s, className: e, ...o, children: c ? /* @__PURE__ */ d.jsx(C1, { className: "text-body-secondary", children: l }) : r });
  }
);
sT.displayName = "TableBody";
const aT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
aT.displayName = "TableFooter";
const iT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tr",
  {
    ref: n,
    className: R(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover
      [tbody_&]:has-[:focus-visible]:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
iT.displayName = "TableRow";
const cT = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
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
    children: /* @__PURE__ */ d.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
cT.displayName = "TableHead";
const lT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
lT.displayName = "TableCell";
const dT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: R("text-body-primary mt-md text-sm", e),
    ...t
  }
));
dT.displayName = "TableCaption";
const k7 = _.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
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
      /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Sort" }),
      /* @__PURE__ */ d.jsxs(
        "svg",
        {
          className: "size-4",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ d.jsxs("g", { clipPath: "url(#clip0_24993_1396)", children: [
              /* @__PURE__ */ d.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",
                  fill: e === "asc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              ),
              /* @__PURE__ */ d.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",
                  fill: e === "desc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              )
            ] }),
            /* @__PURE__ */ d.jsx("defs", { children: /* @__PURE__ */ d.jsx("clipPath", { id: "clip0_24993_1396", children: /* @__PURE__ */ d.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
          ]
        }
      )
    ]
  }
)), uT = _.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ d.jsx(
  "td",
  {
    ref: r,
    className: R(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ d.jsx(
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
          e ? "opacity-100" : `opacity-0 transition-opacity group-hover:opacity-100
            group-has-[:focus-visible]:opacity-100`,
          t
        ),
        children: /* @__PURE__ */ d.jsx("div", { className: "gap-xs flex items-center", children: n })
      }
    )
  }
));
uT.displayName = "TableRowOverlay";
const fT = pe("inline-flex", {
  variants: {
    size: {
      normal: "h-12 max-md:h-10",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), hT = pe(
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
        normal: "p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",
        small: "p-sm h-9.5 text-md"
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
), pT = pe(
  `text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,
  {
    variants: {
      size: {
        normal: "p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",
        small: "p-sm h-9.5 text-md"
      }
    },
    defaultVariants: {
      size: "normal"
    }
  }
);
function mT() {
  const [e, t] = _.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return _.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function vT(e) {
  const t = [];
  return _.Children.forEach(e, (n) => {
    _.isValidElement(n) && n.type === S1 && t.push(n);
  }), t;
}
const gT = _.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, s) => {
  const a = t ?? "normal", i = mT(), c = _.useRef(null), l = _.useRef(null), f = _.useRef(/* @__PURE__ */ new Map()), u = _.useRef(/* @__PURE__ */ new Map()), {
    hasOverflow: h,
    startShadow: p,
    endShadow: y
  } = Zb(c), m = _.useMemo(() => vT(n), [n]), [b, C] = _.useState(m.length), [x, g] = _.useState(!1), S = _.useCallback(() => {
    if (!i) {
      C(m.length), g(!0);
      return;
    }
    const O = c.current;
    if (!O) return;
    f.current.forEach((Y, T) => {
      const W = Y.offsetWidth;
      W > 0 && u.current.set(T, W);
    });
    const I = O.clientWidth, D = l.current, L = D ? D.offsetWidth + 8 : 80;
    let j = 0;
    for (const Y of m)
      j += u.current.get(Y.props.value) ?? 0;
    if (j <= I) {
      C(m.length), g(!0);
      return;
    }
    let B = 0, V = 0;
    for (const Y of m) {
      const T = u.current.get(Y.props.value) ?? 0;
      if (B + T + L <= I)
        B += T, V++;
      else
        break;
    }
    C(Math.max(V, 1)), g(!0);
  }, [m, i]);
  _.useEffect(() => {
    const O = c.current;
    if (!O) return;
    const I = new ResizeObserver(() => {
      S();
    });
    return I.observe(O), S(), () => I.disconnect();
  }, [S]);
  const w = m.slice(b), k = w.length > 0, E = o.value ?? o.defaultValue, M = w.some(
    (O) => O.props.value === E
  ), P = r ?? ((O) => `${O} more`);
  return /* @__PURE__ */ d.jsxs(
    tN,
    {
      ref: s,
      className: R("relative w-full", e),
      ...o,
      children: [
        /* @__PURE__ */ d.jsxs(
          nN,
          {
            ref: c,
            className: R(
              fT({ size: a }),
              "w-full",
              !i && `overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden`
            ),
            role: "tablist",
            children: [
              m.map(
                (O, I) => _.cloneElement(O, {
                  key: O.props.value,
                  size: a,
                  ref: (D) => {
                    D ? f.current.set(O.props.value, D) : f.current.delete(O.props.value);
                  },
                  className: R(
                    O.props.className,
                    x && I >= b && "hidden"
                  )
                })
              ),
              k && x && /* @__PURE__ */ d.jsx("div", { ref: l, className: "inline-flex shrink-0", children: /* @__PURE__ */ d.jsxs(Lu, { children: [
                /* @__PURE__ */ d.jsx(Fu, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    className: R(
                      pT({ size: a }),
                      M && "font-bold text-interactive-primary-default"
                    ),
                    children: [
                      /* @__PURE__ */ d.jsx(
                        m2,
                        {
                          size: a === "small" ? 16 : 20,
                          className: "mr-xxs"
                        }
                      ),
                      P(w.length)
                    ]
                  }
                ) }),
                /* @__PURE__ */ d.jsx(Wu, { align: "end", size: "sm", children: w.map((O) => {
                  const { value: I, disabled: D, asChild: L, children: j } = O.props, B = R(
                    I === E && "font-bold text-interactive-primary-default"
                  );
                  return L && _.isValidElement(j) ? /* @__PURE__ */ d.jsx(
                    rd,
                    {
                      disabled: D ?? !1,
                      asChild: !0,
                      className: B,
                      children: j
                    },
                    I
                  ) : /* @__PURE__ */ d.jsx(
                    rd,
                    {
                      disabled: D ?? !1,
                      onSelect: () => {
                        o.onValueChange && o.onValueChange(I);
                      },
                      className: B,
                      children: j
                    },
                    I
                  );
                }) })
              ] }) })
            ]
          }
        ),
        !i && h && /* @__PURE__ */ d.jsx(Qb, { startShadow: p, endShadow: y })
      ]
    }
  );
});
gT.displayName = "TabBar";
const S1 = _.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ d.jsx(
    rN,
    {
      ref: r,
      className: R(hT({ size: o }), e),
      ...n
    }
  );
});
S1.displayName = "Tab";
const yT = pe(
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
), bT = _.forwardRef(
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
      value: u,
      ...h
    } = o, [p, y] = tt(o.value);
    on(() => {
      y(o.value);
    }, [o.value]);
    const { compositionHandlers: m, guardKeyHandler: b } = Rc(), C = (S) => {
      m.onCompositionStart(S), c == null || c(S);
    }, x = (S) => {
      m.onCompositionEnd(S), l == null || l(S);
    }, g = (S) => {
      if (n && S.target.value.length > n) {
        S.preventDefault();
        return;
      }
      y(S.target.value), f && f(S);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ d.jsx(
        "textarea",
        {
          ref: s,
          className: R(yT({ invalid: e }), t),
          ...h,
          value: p,
          onChange: g,
          onKeyDown: b(a),
          onKeyUp: b(i),
          onCompositionStart: C,
          onCompositionEnd: x
        }
      ),
      !!(n && r) && /* @__PURE__ */ d.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        (p == null ? void 0 : p.toString().length) || 0,
        "/",
        n
      ] })
    ] });
  }
);
bT.displayName = "TextArea";
const E7 = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ d.jsx(
  SN,
  {
    open: n,
    onOpenChange: r,
    className: `border-surface-default bg-surface-primary p-sm
        text-body-primary shadow-high w-96 rounded
        data-[state=open]:animate-slide-in data-[state=closed]:animate-hide
        data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:translate-x-0
        border-1 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]`,
    children: /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex items-start justify-between", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-start", children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          o === "success" && /* @__PURE__ */ d.jsx(
            rm,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ d.jsx(
            rh,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ d.jsx(
            rh,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ d.jsx(ni, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          t && /* @__PURE__ */ d.jsx(
            _N,
            {
              className: R("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsx(kN, { children: /* @__PURE__ */ d.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(EN, { asChild: !0, altText: "Close", children: /* @__PURE__ */ d.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ d.jsx(Xd, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), M7 = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ d.jsxs(wN, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ d.jsx(
    CN,
    {
      className: `gap-md bottom-0 right-0 m-0 z-toast fixed flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Gd = (e) => e.valueKey !== void 0, Yd = (e, t) => e.element.compareDocumentPosition(t.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, xT = (e) => {
  const t = /* @__PURE__ */ new Map();
  e.forEach((o) => {
    const s = t.get(o.parentKey);
    s ? s.push(o) : t.set(o.parentKey, [o]);
  });
  const n = /* @__PURE__ */ new Map(), r = (o) => {
    const s = [];
    (t.get(o.key) ?? []).forEach((i) => {
      i.kind === "group" ? s.push(...r(i)) : Gd(i) && s.push(i);
    });
    const a = s.length === 0 && Gd(o) ? [o] : s;
    return n.set(o.key, a), a;
  };
  return (t.get(null) ?? []).forEach((o) => {
    o.kind === "group" && r(o);
  }), n;
}, wT = (e, t) => {
  const n = e.filter((a) => !a.disabled), r = (a) => a.filter((i) => t(i.valueKey)).length, o = r(e);
  return { state: o === 0 ? "none" : o === e.length || n.length > 0 && r(n) === n.length ? "all" : "some", selectable: n.length > 0 };
}, CT = 600, ST = 2e3, _T = 300, Gf = "data-dnd-placeholder", Ro = (e, t) => Array.from(e.children).filter(
  (n) => n !== t && !n.hasAttribute(Gf)
), Yf = (e, t) => {
  let n = e.nextElementSibling;
  for (; n && (n === t || n.hasAttribute(Gf)); )
    n = n.nextElementSibling;
  return n;
}, _1 = (e, t, n) => {
  Array.from(t.values()).sort(Yd).forEach((o) => {
    const s = o.element.parentElement, a = e.registry.droppables.get(o.key);
    o !== n && s && a && tr(a) && (a.sortable.index = Ro(s).indexOf(o.element));
  });
}, k1 = (e, t, n, r, o) => {
  const { element: s } = n.node;
  !s.isConnected || o === s || s.parentElement === r && Yf(s, s) === o || (r.insertBefore(s, o), _1(e, t, n.node), window.requestAnimationFrame(() => {
    t.forEach((a) => {
      var i;
      (i = e.registry.droppables.get(a.key)) == null || i.refreshShape();
    });
  }));
}, kT = (e, t, n) => {
  let r;
  return e.forEach((o) => {
    var a;
    if (o === n) return;
    const s = (a = o.element.firstElementChild) == null ? void 0 : a.getBoundingClientRect();
    s && s.height > 0 && t.y >= s.top && t.y < s.bottom && t.x >= s.left && t.x < s.right && (r = o);
  }), r;
}, Il = (e, t, n, r) => {
  var p, y;
  const o = kT(t, r, n.node), s = o == null ? void 0 : o.element.parentElement, a = (p = o == null ? void 0 : o.element.firstElementChild) == null ? void 0 : p.getBoundingClientRect();
  if (!o || !s || !a || a.height === 0 || (y = n.nodeOf(s.parentElement)) != null && y.disabled) return;
  const i = (r.y - a.top) / a.height, c = o.kind === "group" ? o.element.querySelector(":scope > ul") : null, l = o.element.getAttribute("aria-expanded"), f = n.node.element, u = (m, b) => k1(e, t, n, m, b), h = !o.disabled;
  c && l === "true" && h ? i < 0.5 ? u(s, o.element) : u(c, Ro(c, f)[0] ?? null) : c && l === null && h && i >= 0.25 && i <= 0.75 ? u(c, null) : i < 0.5 ? u(s, o.element) : u(s, Yf(o.element, f));
}, ET = (e, t) => {
  const n = [], r = t.node.element, o = (s) => {
    var a;
    (a = t.nodeOf(s.parentElement)) != null && a.disabled || (Ro(s, r).forEach((i) => {
      n.push({ list: s, before: i });
      const c = t.nodeOf(i), l = i.querySelector(":scope > ul");
      if (!c || !l || c.disabled) return;
      const f = i.getAttribute("aria-expanded");
      f === "true" ? o(l) : f === null && n.push({ list: l, before: null });
    }), n.push({ list: s, before: null }));
  };
  return o(e), n;
}, MT = (e, t, n, r, o) => {
  const s = n.node.element, a = s.parentElement;
  if (!a) return;
  const i = Yf(s, s), c = ET(r, n), l = c.findIndex(
    (u) => u.list === a && u.before === i
  ), f = l === -1 ? void 0 : c[l + o];
  f && k1(e, t, n, f.list, f.before);
}, qp = ({ node: e, originList: t, originIndex: n }) => {
  const r = Ro(t, e.element)[n] ?? null;
  t.insertBefore(e.element, r);
}, N7 = (e, t, n) => {
  const { getKey: r, getChildren: o, withChildren: s } = n, a = t.kind === "group";
  let i;
  const c = (h, p, y) => h.map((m, b) => b === p ? y : m), l = (h) => {
    for (let p = 0; p < h.length; p += 1) {
      const y = h[p], m = o(y);
      if (r(y) === t.key && m !== void 0 === a)
        return i = y, h.filter((b, C) => C !== p);
      if (m) {
        const b = l(m);
        if (b !== m)
          return c(h, p, s(y, b));
      }
    }
    return h;
  }, f = (h, p) => {
    const { parentKey: y, index: m } = t.to;
    if (y === null)
      return [...h.slice(0, m), p, ...h.slice(m)];
    for (let b = 0; b < h.length; b += 1) {
      const C = h[b], x = o(C);
      if (x === void 0) continue;
      const g = r(C) === y ? [...x.slice(0, m), p, ...x.slice(m)] : f(x, p);
      if (g !== void 0)
        return c(h, b, s(C, g));
    }
  }, u = l(e);
  return i === void 0 ? e : f(u, i) ?? e;
}, NT = (e, { getItemValue: t, getParentKey: n, getOrder: r }) => {
  const o = /* @__PURE__ */ new Set();
  e.forEach((a) => o.add(t(a)));
  const s = /* @__PURE__ */ new Map();
  return e.forEach((a) => {
    const i = n(a) ?? null, c = i !== null && o.has(i) ? i : null, l = s.get(c);
    l ? l.push(a) : s.set(c, [a]);
  }), r && s.forEach(
    (a) => a.sort((i, c) => r(i) - r(c))
  ), s;
}, E1 = (e) => fb(e, "Tree"), M1 = _.createContext(null), N1 = _.createContext({
  parentKey: null,
  depth: 0,
  disabled: !1
}), Kf = () => {
  const e = _.useContext(M1);
  if (!e)
    throw new Error("Tree.Group and Tree.Item must be rendered inside Tree");
  return e;
}, PT = (e) => Array.from(e.querySelectorAll('[role="treeitem"]')).filter(
  (t) => !t.closest("ul[hidden]") && !t.closest(`[${Gf}]`)
), P1 = (e) => {
  const t = e.currentTarget.closest('[role="treeitem"]');
  t instanceof HTMLElement && t.focus();
};
function AT({
  defaultCollapsed: e = !1,
  selectable: t = !1,
  selected: n,
  defaultSelected: r,
  onSelectedChange: o,
  getItemValue: s = E1,
  sortable: a = !1,
  onMove: i,
  size: c = "md",
  indentBase: l = "sm",
  indentStep: f = "xl",
  onExpandedCountChange: u,
  ariaLabels: h,
  onFocus: p,
  onKeyDown: y,
  className: m,
  style: b,
  children: C,
  ...x
}, g) {
  const S = _.useRef(/* @__PURE__ */ new Map()), [w, k] = _.useState(
    () => ({ nodes: S.current })
  ), E = _.useRef(/* @__PURE__ */ new WeakMap()), M = _.useCallback((H) => {
    const ee = S.current, Q = E.current;
    return ee.has(H.key) && console.warn(
      `Tree: duplicate node key "${String(H.key)}". Item values must resolve to unique keys across the whole tree.`
    ), ee.set(H.key, H), Q.set(H.element, H), k({ nodes: ee }), () => {
      ee.get(H.key) === H && ee.delete(H.key), Q.get(H.element) === H && Q.delete(H.element), k({ nodes: ee });
    };
  }, []), [P, O] = _.useState(() => ({
    overrides: /* @__PURE__ */ new Map()
  })), I = _.useCallback(
    (H, ee) => P.overrides.get(H) ?? P.all ?? ee ?? !e,
    [P, e]
  ), D = _.useCallback((H, ee) => {
    O((Q) => ({
      ...Q,
      overrides: new Map(Q.overrides).set(H, ee)
    }));
  }, []);
  _.useImperativeHandle(
    g,
    () => ({
      collapseAll: () => O({ all: !1, overrides: /* @__PURE__ */ new Map() }),
      expandAll: () => O({ all: !0, overrides: /* @__PURE__ */ new Map() })
    }),
    []
  );
  const L = _.useCallback(
    (H) => H ? E.current.get(H) : void 0,
    []
  ), j = _.useCallback(
    (H) => {
      const ee = S.current;
      for (let Q = H.parentKey === null ? void 0 : ee.get(H.parentKey); Q; Q = Q.parentKey === null ? void 0 : ee.get(Q.parentKey))
        if (!I(Q.key, Q.defaultOpen)) return !1;
      return !0;
    },
    [I]
  ), B = _.useMemo(
    () => {
      var H;
      return ((H = Array.from(w.nodes.values()).filter((ee) => ee.parentKey === null).sort(Yd)[0]) == null ? void 0 : H.key) ?? null;
    },
    [w]
  ), V = _.useRef(null), Y = _.useRef(null), T = _.useCallback((H) => {
    const ee = Y.current;
    ee && ee !== H && (ee.tabIndex = -1), H && (H.tabIndex = 0), Y.current = H;
  }, []);
  _.useLayoutEffect(() => {
    const H = w.nodes, ee = V.current, Q = ee === null ? void 0 : H.get(ee), G = Q && j(Q) ? Q : B === null ? void 0 : H.get(B);
    T((G == null ? void 0 : G.element) ?? null);
  }, [w, j, B, T]);
  const W = _.useRef(null);
  _.useEffect(() => {
    if (!u) return;
    let H = 0, ee = 0;
    w.nodes.forEach((G) => {
      G.kind !== "group" || !G.hasChildren || (H += 1, I(G.key, G.defaultOpen) && (ee += 1));
    });
    const Q = W.current;
    (Q == null ? void 0 : Q.expandableCount) === H && Q.openCount === ee || (W.current = { expandableCount: H, openCount: ee }, u({ expandableCount: H, openCount: ee }));
  }, [u, w, I]);
  const oe = n !== void 0, [A, N] = _.useState(
    () => r ?? []
  ), F = n ?? A, z = _.useMemo(
    () => new Set(F.map((H) => s(H))),
    [F, s]
  ), Z = _.useMemo(
    () => t ? xT(w.nodes) : /* @__PURE__ */ new Map(),
    [t, w]
  ), q = _.useCallback(
    (H, ee) => {
      let Q;
      if (ee) {
        const G = H.filter((ce) => !z.has(ce.valueKey)).sort(Yd);
        if (G.length === 0) return;
        Q = [...F, ...G.map((ce) => ce.getValue())];
      } else {
        const G = new Set(H.map((ce) => ce.valueKey));
        if (Q = F.filter(
          (ce) => !G.has(s(ce))
        ), Q.length === F.length) return;
      }
      oe || N(Q), o == null || o(Q);
    },
    [
      z,
      F,
      s,
      oe,
      o
    ]
  ), $ = _.useCallback(
    (H) => z.has(H),
    [z]
  ), J = _.useCallback(
    (H) => wT(
      Z.get(H) ?? [],
      (ee) => z.has(ee)
    ),
    [Z, z]
  ), re = _.useCallback(
    (H) => {
      const ee = S.current.get(H);
      ee && Gd(ee) && q([ee], !z.has(ee.valueKey));
    },
    [q, z]
  ), de = _.useCallback(
    (H, ee) => q(
      (Z.get(H) ?? []).filter((Q) => !Q.disabled),
      ee
    ),
    [q, Z]
  ), me = (H) => {
    p == null || p(H);
    const ee = L(
      H.target.closest('[role="treeitem"]')
    );
    ee && (V.current = ee.key, T(ee.element));
  }, ge = (H) => {
    var le;
    if (y == null || y(H), H.defaultPrevented) return;
    const ee = H.target, Q = ee.getAttribute("role") === "treeitem" ? L(ee) : void 0, G = Se.current;
    if (!Q || !G) return;
    const ce = PT(G), U = ce.indexOf(ee), ie = Q.hasChildren && I(Q.key, Q.defaultOpen), he = (Ve) => {
      Ve instanceof HTMLElement && Ve.focus();
    };
    switch (H.key) {
      case "ArrowDown":
        he(ce[U + 1]);
        break;
      case "ArrowUp":
        he(ce[U - 1]);
        break;
      case "ArrowRight":
        if (!Q.hasChildren) return;
        ie ? he(ce[U + 1]) : D(Q.key, !0);
        break;
      case "ArrowLeft":
        if (ie) D(Q.key, !1);
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
        D(Q.key, !ie);
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
  }, Se = _.useRef(null), Ie = _.useRef(null), Te = _.useRef(null), ut = _.useRef(null), Xe = _.useRef(null), ot = () => {
    Te.current && window.clearTimeout(Te.current.timer), Te.current = null;
  }, vt = () => {
    Xe.current !== null && (window.clearTimeout(Xe.current), Xe.current = null);
  }, We = _.useRef(null), Ge = _.useRef(null), Qe = () => {
    Ge.current !== null && (window.cancelAnimationFrame(Ge.current), Ge.current = null);
    const H = We.current;
    We.current = null, H == null || H();
  }, Dt = (H, ee) => {
    Qe(), We.current = ee;
    const Q = performance.now() + ST, G = () => {
      Ge.current = null, We.current === ee && (H.dragOperation.status.idle || performance.now() > Q ? (We.current = null, ee()) : Ge.current = window.requestAnimationFrame(G));
    };
    Ge.current = window.requestAnimationFrame(G);
  };
  _.useEffect(
    () => () => {
      Te.current && window.clearTimeout(Te.current.timer), Xe.current !== null && window.clearTimeout(Xe.current), Ge.current !== null && window.cancelAnimationFrame(Ge.current), We.current = null;
    },
    []
  );
  const Nt = _.useCallback(
    (H, ee) => {
      const Q = S.current;
      for (let G = Q.get(ee); G; G = G.parentKey === null ? void 0 : Q.get(G.parentKey))
        if (G.key === H) return !1;
      return !0;
    },
    []
  ), ve = (H) => H === Se.current ? null : L(H.parentElement), Zt = (H, ee) => ({
    parentKey: H ? H.valueKey ?? H.key : null,
    parentValue: H == null ? void 0 : H.getValue(),
    index: ee
  }), It = (H, ee) => {
    Qe();
    const Q = H.operation.source, G = Q ? S.current.get(Q.id) : void 0, ce = G == null ? void 0 : G.element.parentElement;
    if (!G || !ce) return;
    const U = G.element.getAttribute("aria-expanded") === "true";
    U && jl(() => D(G.key, !1)), Ie.current = {
      node: G,
      originList: ce,
      originIndex: Ro(ce).indexOf(G.element),
      reopen: U,
      nodeOf: L,
      keyboard: !1
    }, ut.current = null, vt(), _1(ee, S.current);
  }, fn = (H, ee) => {
    const Q = Ie.current, G = Se.current;
    if (!Q || !G) return;
    if (H.by) {
      if (Q.keyboard = !0, H.by.y !== 0) {
        const he = H.by.y > 0 ? 1 : -1;
        MT(ee, S.current, Q, G, he);
      }
      return;
    }
    const { x: ce, y: U } = H.to ?? ee.dragOperation.position.current, ie = { x: ce, y: U };
    ut.current = ie, Il(ee, S.current, Q, ie), vt(), Xe.current = window.setTimeout(() => {
      Xe.current = null;
      const he = Ie.current, le = ut.current;
      he === Q && !he.keyboard && le && Il(ee, S.current, he, le);
    }, _T);
  }, hn = (H, ee) => {
    var ie;
    const { source: Q, target: G } = H.operation, ce = Ie.current;
    if (!Q || !G || !ce || ce.keyboard) {
      ot();
      return;
    }
    if (Il(
      ee,
      S.current,
      ce,
      ut.current ?? ee.dragOperation.position.current
    ), G.id === Q.id || ((ie = Te.current) == null ? void 0 : ie.key) === G.id) return;
    ot();
    const U = window.setTimeout(() => {
      Te.current = null;
      const he = S.current.get(G.id);
      (he == null ? void 0 : he.element.getAttribute("aria-expanded")) === "false" && D(he.key, !0);
    }, CT);
    Te.current = { key: G.id, timer: U };
  }, Rn = (H, ee) => {
    const Q = Ie.current;
    if (Ie.current = null, ot(), vt(), !Q) return;
    const { node: G, originList: ce, originIndex: U, reopen: ie } = Q;
    if (!G.element.isConnected || !ce.isConnected) return;
    const he = G.element.parentElement, le = he ? Ro(he).indexOf(G.element) : -1, Ve = ve(ce), jt = he ? ve(he) : void 0, en = he !== ce || le !== U, ft = () => {
      ie && D(G.key, !0);
    };
    if (H.canceled || !i || !en || Ve === void 0 || jt === void 0) {
      qp(Q), Dt(ee, ft);
      return;
    }
    const Ye = {
      key: G.valueKey ?? G.key,
      kind: G.kind,
      value: G.getValue(),
      from: Zt(Ve, U),
      to: Zt(jt, le)
    };
    Dt(ee, () => {
      !G.element.isConnected || !ce.isConnected || (qp(Q), jl(() => {
        ft(), i(Ye);
      }));
    });
  }, Qt = (h == null ? void 0 : h.dragHandle) ?? "Drag to reorder", Jt = c === "lg" ? 48 : 40, On = _.useMemo(
    () => [
      Fw,
      Lw.configure({ offset: { x: 0, y: Jt } })
    ],
    [Jt]
  ), Pt = _.useMemo(
    () => ({
      selectable: t,
      sortable: a,
      size: c,
      ariaLabels: { dragHandle: Qt },
      resolveKey: s,
      register: M,
      isOpen: I,
      setOpen: D,
      isSelected: $,
      getGroupSelection: J,
      toggleItem: re,
      setGroupSelected: de,
      canDrop: Nt
    }),
    [
      t,
      a,
      c,
      Qt,
      s,
      M,
      I,
      D,
      $,
      J,
      re,
      de,
      Nt
    ]
  ), st = /* @__PURE__ */ d.jsx(M1.Provider, { value: Pt, children: /* @__PURE__ */ d.jsx(
    "ul",
    {
      ref: Se,
      role: "tree",
      ...x,
      onFocus: me,
      onKeyDown: ge,
      className: R(
        `border-divider-default divide-divider-default bg-surface-primary
          rounded-sm divide-y overflow-hidden border`,
        a && WT,
        m
      ),
      style: {
        "--tree-indent-base": `var(--token-spacing-${l})`,
        "--tree-indent-step": `var(--token-spacing-${f})`,
        ...D1(0),
        ...b
      },
      children: C
    }
  ) });
  return a ? /* @__PURE__ */ d.jsx(
    qw,
    {
      sensors: On,
      onBeforeDragStart: It,
      onDragMove: fn,
      onDragOver: hn,
      onDragEnd: Rn,
      children: st
    }
  ) : st;
}
const A1 = _.forwardRef(AT);
A1.displayName = "Tree";
const Yi = _.forwardRef(
  ({ forceVisible: e = !1, className: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsx(
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
      children: /* @__PURE__ */ d.jsx("div", { className: "gap-xs pointer-events-auto flex items-center", children: n })
    }
  )
);
Yi.displayName = "Tree.RowOverlay";
const R1 = (e, t) => {
  if (e === void 0 || !t) return null;
  const n = t(e);
  return n == null || typeof n == "boolean" ? null : _.isValidElement(n) && n.type === Yi ? n : /* @__PURE__ */ d.jsx(Yi, { children: n });
}, RT = `group relative gap-xxs pr-md py-xxs text-md
  text-body-primary hover:bg-interactive-neutral-hover
  has-[:focus-visible]:bg-interactive-neutral-hover
  has-[[data-force-visible]]:bg-interactive-neutral-hover flex items-center
  transition-colors`, OT = {
  md: "min-h-10",
  lg: "min-h-12"
}, DT = `data-[dragging]:border-interactive-default
  data-[dragging]:bg-surface-primary data-[dragging]:rounded-sm
  data-[dragging]:border`, IT = `text-shape-light rounded-xs
  hover:bg-interactive-neutral-active flex size-6 shrink-0 cursor-pointer
  items-center justify-center`, O1 = `[&:focus-visible>div]:ring-interactive-focused
  [&:focus-visible>div]:bg-interactive-neutral-hover outline-none
  [&:focus-visible>div]:ring-4 [&:focus-visible>div]:ring-inset`, jT = (e) => e === "some" ? "mixed" : e === "all", TT = `text-shape-light rounded-xs
  focus-visible:ring-interactive-focused group-hover:opacity-100
  group-data-[dragging]:opacity-100 pointer-coarse:opacity-100 flex size-6
  shrink-0 cursor-grab touch-none items-center justify-center opacity-0
  transition-opacity focus-visible:opacity-100 focus-visible:ring-4
  focus-visible:outline-none active:cursor-grabbing`, Uf = "size-6 shrink-0", $T = "size-[1.125rem] shrink-0", qf = (e) => `calc(var(--tree-indent-base) + ${e} * var(--tree-indent-step))`, D1 = (e) => ({ "--tree-indent": qf(e) }), WT = `[&_[data-dnd-placeholder]]:relative
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
  [&_[data-dnd-placeholder]]:after:content-['']`, I1 = (e, t, n) => R(
  RT,
  OT[e],
  t && "text-body-disabled",
  n
), LT = ({
  nodeKey: e,
  elementRef: t,
  depth: n,
  disabled: r,
  children: o
}) => {
  const { size: s, ariaLabels: a, canDrop: i } = Kf(), { targetRef: c, handleRef: l, isDragging: f } = m1({
    id: e,
    // Rows are numbered from the DOM while dragging; see `syncIndexes`.
    index: 0,
    accept: (u) => i(u.id, e),
    // A disabled row cannot be dragged but stays a drop target, so the gap
    // can still be placed next to it.
    disabled: { draggable: r, droppable: !1 },
    element: t,
    // The tree moves rows itself, so dnd-kit's optimistic and keyboard sorting stay off.
    plugins: []
  });
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: c,
      "data-dragging": f || void 0,
      className: I1(s, r, DT),
      style: { paddingLeft: qf(n) },
      children: [
        r ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Uf }) : /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            ref: l,
            "aria-label": a.dragHandle,
            className: TT,
            children: /* @__PURE__ */ d.jsx(Jp, { size: 16 })
          }
        ),
        o
      ]
    }
  );
}, j1 = (e) => {
  const { sortable: t, size: n } = Kf();
  return t ? /* @__PURE__ */ d.jsx(LT, { ...e }) : /* @__PURE__ */ d.jsx(
    "div",
    {
      className: I1(n, e.disabled),
      style: { paddingLeft: qf(e.depth) },
      children: e.children
    }
  );
}, T1 = (e) => _.Children.toArray(e).reduce(
  (t, n) => t + (_.isValidElement(n) && n.type === _.Fragment ? T1(n.props.children) : 1),
  0
), $1 = ({ kind: e, value: t, disabled: n, hasChildren: r = !1, defaultOpen: o }, s) => {
  const a = Kf(), i = _.useContext(N1), c = _.useId(), l = t === void 0 ? void 0 : a.resolveKey(t);
  if (e === "item" && t !== void 0 && typeof l != "string" && typeof l != "number")
    throw new Error(
      "Tree.Item: `getItemValue` must return a string or number for every Item value."
    );
  const f = l === void 0 ? c : e === "group" ? `group:${String(l)}` : l, u = n || i.disabled, h = _.useRef(t);
  _.useLayoutEffect(() => {
    h.current = t;
  });
  const p = _.useRef(null), y = _.useCallback(
    (C) => {
      p.current = C, typeof s == "function" ? s(C) : s && (s.current = C);
    },
    [s]
  ), { register: m } = a, { parentKey: b } = i;
  return _.useLayoutEffect(() => {
    const C = p.current;
    return C ? m({
      key: f,
      valueKey: l,
      parentKey: b,
      kind: e,
      disabled: u,
      hasChildren: r,
      defaultOpen: o,
      element: C,
      getValue: () => h.current
    }) : void 0;
  }, [
    m,
    f,
    l,
    b,
    e,
    u,
    r,
    o
  ]), {
    ctx: a,
    depth: i.depth,
    key: f,
    valueKey: l,
    isDisabled: u,
    id: c,
    setElement: y,
    elementRef: p
  };
};
function FT({
  label: e,
  value: t,
  renderRowOverlay: n,
  defaultOpen: r,
  disabled: o = !1,
  className: s,
  children: a,
  ...i
}, c) {
  const l = T1(a) > 0, { ctx: f, depth: u, key: h, isDisabled: p, id: y, setElement: m, elementRef: b } = $1(
    { kind: "group", value: t, disabled: o, hasChildren: l, defaultOpen: r },
    c
  ), C = t !== void 0;
  _.useEffect(() => {
    f.sortable && !C && console.warn(
      "Tree.Group: give every Group a `value` in a sortable tree, so `onMove` can name it as a parent."
    );
  }, [f.sortable, C]);
  const x = `${y}-label`, g = `${y}-group`, S = !l || f.isOpen(h, r), w = f.selectable ? f.getGroupSelection(h) : null, k = () => f.setOpen(h, !S);
  return /* @__PURE__ */ d.jsxs(
    "li",
    {
      ref: m,
      role: "treeitem",
      "aria-labelledby": x,
      "aria-expanded": l ? S : void 0,
      "aria-level": u + 1,
      "aria-disabled": p || void 0,
      "aria-checked": w != null && w.selectable ? jT(w.state) : void 0,
      "data-state": l ? S ? "open" : "closed" : void 0,
      ...i,
      tabIndex: -1,
      className: R(O1, s),
      children: [
        /* @__PURE__ */ d.jsxs(
          j1,
          {
            nodeKey: h,
            elementRef: b,
            depth: u,
            disabled: p,
            children: [
              l ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, onClick: k, className: IT, children: /* @__PURE__ */ d.jsx(
                Ud,
                {
                  size: 14,
                  className: R(
                    "transition-transform duration-200",
                    S && "rotate-90"
                  )
                }
              ) }) : /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Uf }),
              w && /* @__PURE__ */ d.jsx(
                yo,
                {
                  id: `${y}-checkbox`,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  onFocus: P1,
                  checked: w.state === "all",
                  indeterminate: w.state === "some",
                  disabled: p || !w.selectable,
                  onCheckedChange: (E) => f.setGroupSelected(h, E === !0),
                  className: "shrink-0"
                }
              ),
              /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: x,
                  onClick: l ? k : void 0,
                  className: R(
                    "min-w-0 flex-1 truncate select-none",
                    l && "cursor-pointer"
                  ),
                  children: e
                }
              ),
              R1(t, n)
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(
          N1.Provider,
          {
            value: { parentKey: h, depth: u + 1, disabled: p },
            children: /* @__PURE__ */ d.jsx(
              "ul",
              {
                role: "group",
                id: g,
                hidden: !S,
                className: `border-divider-default divide-divider-default divide-y
            border-t empty:hidden`,
                style: D1(u + 1),
                children: a
              }
            )
          }
        )
      ]
    }
  );
}
const W1 = _.forwardRef(FT);
W1.displayName = "Tree.Group";
function VT({
  value: e,
  renderRowOverlay: t,
  disabled: n = !1,
  className: r,
  children: o,
  ...s
}, a) {
  const { ctx: i, depth: c, key: l, valueKey: f, isDisabled: u, id: h, setElement: p, elementRef: y } = $1({ kind: "item", value: e, disabled: n }, a), m = `${h}-label`, b = `${h}-checkbox`, C = i.selectable && f !== void 0, x = f !== void 0 && i.isSelected(f);
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      ref: p,
      role: "treeitem",
      "aria-labelledby": m,
      "aria-level": c + 1,
      "aria-disabled": u || void 0,
      "aria-checked": C ? x : void 0,
      ...s,
      tabIndex: -1,
      className: R(O1, r),
      children: /* @__PURE__ */ d.jsxs(
        j1,
        {
          nodeKey: l,
          elementRef: y,
          depth: c,
          disabled: u,
          children: [
            /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Uf }),
            i.selectable && (C ? /* @__PURE__ */ d.jsx(
              yo,
              {
                id: b,
                "aria-hidden": !0,
                tabIndex: -1,
                onFocus: P1,
                checked: x,
                disabled: u,
                onCheckedChange: () => i.toggleItem(l),
                className: "shrink-0"
              }
            ) : /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: $T })),
            C ? /* @__PURE__ */ d.jsx(
              "label",
              {
                id: m,
                htmlFor: b,
                className: R(
                  "min-w-0 flex-1 select-none",
                  u ? "cursor-not-allowed" : "cursor-pointer"
                ),
                children: o
              }
            ) : /* @__PURE__ */ d.jsx("span", { id: m, className: "min-w-0 flex-1", children: o }),
            R1(e, t)
          ]
        }
      )
    }
  );
}
const L1 = _.forwardRef(VT);
L1.displayName = "Tree.Item";
const Xp = Object.assign(A1, {
  Group: W1,
  Item: L1,
  RowOverlay: Yi
}), zT = (e, t, n) => {
  const { getItemValue: r, getParentKey: o, getOrder: s, withPlacement: a } = n, i = e.find((u) => r(u) === t.key);
  if (!i) return e;
  const c = (u) => e.filter(
    (h) => (o(h) ?? null) === u && r(h) !== t.key
  ).sort((h, p) => s(h) - s(p)), l = /* @__PURE__ */ new Map(), f = c(t.to.parentKey);
  return f.splice(t.to.index, 0, i), f.forEach(
    (u, h) => l.set(r(u), [t.to.parentKey, h])
  ), t.from.parentKey !== t.to.parentKey && c(t.from.parentKey).forEach(
    (u, h) => l.set(r(u), [t.from.parentKey, h])
  ), e.map((u) => {
    const h = l.get(r(u));
    return h ? a(u, h[0], h[1]) : u;
  });
};
function BT({
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
  onSelectedChange: u,
  getItemValue: h = E1,
  className: p,
  style: y,
  ...m
}, b) {
  const C = _.useRef(null), x = _.useId(), g = m["aria-label"] !== void 0 || m["aria-labelledby"] !== void 0;
  _.useImperativeHandle(
    b,
    () => ({
      collapseAll: () => {
        var j;
        return (j = C.current) == null ? void 0 : j.collapseAll();
      },
      expandAll: () => {
        var j;
        return (j = C.current) == null ? void 0 : j.expandAll();
      }
    }),
    []
  );
  const [S, w] = _.useState({
    expandableCount: 0,
    openCount: 0
  }), k = _.useMemo(
    () => NT(e, {
      getItemValue: h,
      getParentKey: t,
      ...r && { getOrder: r }
    }),
    [e, h, t, r]
  ), E = _.useRef(null);
  _.useEffect(() => {
    if (E.current === e) return;
    let j = 0;
    const B = (V) => (k.get(V) ?? []).forEach((Y) => {
      j += 1, B(h(Y));
    });
    B(null), j < e.length && (E.current = e, console.warn(
      `TreeList: ${e.length - j} item(s) cannot be reached from the top level. Check \`getParentKey\` for cycles.`
    ));
  }, [e, k, h]);
  const M = _.useMemo(() => {
    const j = /* @__PURE__ */ new Set();
    if (!a) return j;
    const B = (V, Y) => (k.get(V) ?? []).forEach((T) => {
      const W = h(T);
      Y && j.add(W), B(W, Y || a(T));
    });
    return B(null, !1), j;
  }, [k, h, a]), P = _.useMemo(
    () => s ? (j) => {
      const B = s(j, {
        ancestorDisabled: M.has(h(j))
      });
      return B.length === 0 ? null : /* @__PURE__ */ d.jsx(d.Fragment, { children: B.map((V) => /* @__PURE__ */ d.jsx(
        He,
        {
          type: "button",
          intent: V.intent ?? "secondary",
          size: "xs",
          danger: V.danger ?? !1,
          "aria-label": V.ariaLabel ?? (typeof V.label == "string" ? V.label : V.key),
          disabled: V.disabled ?? !1,
          onClick: () => V.onAction(j),
          children: V.label
        },
        V.key
      )) });
    } : void 0,
    [s, M, h]
  ), O = _.useMemo(() => {
    const j = (B) => (k.get(B) ?? []).map((V) => {
      const Y = h(V);
      return /* @__PURE__ */ d.jsx(
        Xp.Group,
        {
          value: V,
          label: n(V),
          disabled: (a == null ? void 0 : a(V)) ?? !1,
          ...P && { renderRowOverlay: P },
          children: j(Y)
        },
        Y
      );
    });
    return j(null);
  }, [
    k,
    h,
    n,
    a,
    P
  ]), I = c ? (j) => {
    c(
      zT(e, j, {
        getItemValue: h,
        getParentKey: t,
        getOrder: r,
        withPlacement: l
      })
    ), f == null || f(j);
  } : f, D = S.expandableCount > 0 && S.openCount < S.expandableCount, L = S.openCount > 0;
  return /* @__PURE__ */ d.jsxs("div", { className: R("flex w-full flex-col", p), style: y, children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: `gap-xs pb-sm text-sm text-body-secondary flex items-center
          justify-end`,
        children: [
          /* @__PURE__ */ d.jsx(zs, { asChild: !0, intent: "tertiary", disabled: !D, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              disabled: !D,
              onClick: () => {
                var j;
                return (j = C.current) == null ? void 0 : j.expandAll();
              },
              children: i.expandAll
            }
          ) }),
          /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, children: "|" }),
          /* @__PURE__ */ d.jsx(zs, { asChild: !0, intent: "tertiary", disabled: !L, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              type: "button",
              disabled: !L,
              onClick: () => {
                var j;
                return (j = C.current) == null ? void 0 : j.collapseAll();
              },
              children: i.collapseAll
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "border-surface-default bg-surface-primary border-y", children: [
      /* @__PURE__ */ d.jsx("div", { className: "bg-surface-tertiary pl-xs h-10 flex items-center", children: /* @__PURE__ */ d.jsx(
        "div",
        {
          id: x,
          className: "px-md text-sm text-body-secondary truncate",
          children: o
        }
      ) }),
      /* @__PURE__ */ d.jsx(
        Xp,
        {
          ref: C,
          size: "lg",
          "aria-labelledby": g ? void 0 : x,
          getItemValue: h,
          ...u && { onSelectedChange: u },
          onExpandedCountChange: w,
          ...I && { onMove: I },
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
const HT = _.forwardRef(BT);
HT.displayName = "TreeList";
const GT = pe(
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
), YT = _.forwardRef(
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
    successMessage: u,
    onFileRemove: h,
    dragDropText: p = "ここにドラッグ&ドロップ",
    orText: y = "または",
    selectFileText: m = "ファイルを選択",
    dropFilesText: b = "ここにファイルをドロップ",
    uploadingText: C = "アップロード中…",
    uploadCompletedText: x = "アップロードが完了しました",
    uploadFailedText: g = "アップロードに失敗しました",
    ...S
  }, w) => {
    const [k, E] = tt(!1), M = ct(null), P = ke(
      (N) => {
        N.preventDefault(), N.stopPropagation(), k || E(!0);
      },
      [k]
    ), O = ke((N) => {
      N.preventDefault(), N.stopPropagation(), E(!1);
    }, []), I = ke((N) => {
      N.preventDefault(), N.stopPropagation();
    }, []), D = ke(
      (N) => {
        if (N.preventDefault(), N.stopPropagation(), E(!1), a) return;
        const F = N.dataTransfer.files;
        F && F.length > 0 && (r == null || r(F));
      },
      [a, r]
    ), L = ke(() => {
      var N;
      a || (N = M.current) == null || N.click();
    }, [a]), j = ke(
      (N) => {
        const F = N.target.files;
        F && F.length > 0 && (r == null || r(F));
      },
      [r]
    ), B = k ? "dragging" : n, V = () => /* @__PURE__ */ d.jsx(
      h2,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Y = () => /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary", children: p }),
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary text-sm", children: y })
      ] }),
      /* @__PURE__ */ d.jsx(
        He,
        {
          size: "xs",
          intent: "tertiary",
          className: k ? "" : "z-10",
          icon: oh,
          onClick: (N) => {
            N.stopPropagation(), L();
          },
          children: m
        }
      )
    ] }), T = () => /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      V(),
      /* @__PURE__ */ d.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        b,
        " ",
        /* @__PURE__ */ d.jsx("span", { className: "text-sm", children: y })
      ] }),
      /* @__PURE__ */ d.jsx(
        He,
        {
          size: "xs",
          intent: "tertiary",
          className: k ? "" : "z-10",
          icon: oh,
          onClick: (N) => {
            N.stopPropagation(), L();
          },
          children: m
        }
      )
    ] }), W = () => {
      const N = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return B === "inProgress" && i !== void 0 ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ d.jsx("p", { className: "text-body-primary", children: c || N }),
          /* @__PURE__ */ d.jsxs("div", { className: "text-body-secondary flex", children: [
            /* @__PURE__ */ d.jsxs("span", { children: [
              "（",
              l || "12kb",
              "）"
            ] }),
            /* @__PURE__ */ d.jsx("span", { children: C })
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "w-full", children: /* @__PURE__ */ d.jsx(
          Nc.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : B === "success" ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ d.jsx("p", { className: "text-body-primary", children: c || N }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (F) => {
                F.stopPropagation(), h == null || h();
              },
              children: /* @__PURE__ */ d.jsx(R2, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(
            u2,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ d.jsx("p", { className: "text-interactive-primary-default", children: u || x })
        ] })
      ] }) : B === "error" ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: c || N }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(e2, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: f || g })
        ] })
      ] }) : null;
    }, oe = () => t === "small" ? Y() : T(), A = () => /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: P,
        onDragLeave: O,
        onDragOver: I,
        onDrop: D
      }
    );
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: w,
          className: R(
            "relative",
            GT({ size: t, state: B, disabled: a }),
            e
          ),
          onClick: L,
          role: "button",
          tabIndex: a ? -1 : 0,
          "aria-disabled": a,
          ...S,
          children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                ref: M,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: s,
                onChange: j,
                disabled: a
              }
            ),
            A(),
            oe()
          ]
        }
      ),
      (B === "inProgress" && i !== void 0 || B === "success" || B === "error") && W()
    ] });
  }
);
YT.displayName = "FileUploader";
export {
  e7 as Accordion,
  JT as AccountMenu,
  Cx as AutoSuggest,
  DP as Badge,
  TP as Breadcrumbs,
  He as Button,
  Kb as Calendar,
  _O as Callout,
  t7 as Card,
  yo as Checkbox,
  PO as CheckboxGroup,
  RO as ChoiceChip,
  OO as ChoiceChipGroup,
  r7 as DataSheet,
  ux as DataSheetAction,
  ex as DataSheetHeader,
  nx as DataSheetKeyValue,
  tx as DataSheetSection,
  ax as DataSheetTable,
  dx as DataSheetTableActionsCell,
  cx as DataSheetTableBody,
  Pi as DataSheetTableCell,
  ix as DataSheetTableHeader,
  lx as DataSheetTableRow,
  qO as DatePicker,
  o7 as Dialog,
  Lu as Dropdown,
  Wu as DropdownContent,
  rd as DropdownItem,
  OP as DropdownLabel,
  RP as DropdownSeparator,
  Fu as DropdownTrigger,
  YT as FileUploader,
  dD as FooterProvider,
  a7 as FormField,
  u7 as Logo,
  pD as MobileNavigation,
  mD as MobileNavigationItem,
  vD as MobileNavigationSection,
  qD as MultiSelect,
  s7 as MultiStepDialog,
  e5 as Pagination,
  Nc as ProgressIndicator,
  c7 as RadioButton,
  l7 as RadioButtonGroup,
  u5 as SearchBar,
  d7 as SegmentedControl,
  cd as Select,
  v5 as SideNavigation,
  Lx as SideNavigationCollapseButton,
  yx as SideNavigationItem,
  gx as SideNavigationProvider,
  bx as SideNavigationSection,
  S7 as Sortable,
  _7 as StatusIndicator,
  tT as Stepper,
  nT as Switch,
  S1 as Tab,
  gT as TabBar,
  rT as Table,
  sT as TableBody,
  dT as TableCaption,
  lT as TableCell,
  C1 as TableCoverMessage,
  aT as TableFooter,
  cT as TableHead,
  k7 as TableHeadSortButton,
  oT as TableHeader,
  iT as TableRow,
  uT as TableRowOverlay,
  Ai as Tag,
  Sx as TagInput,
  bT as TextArea,
  i7 as TextField,
  zs as TextLink,
  E7 as ToastItem,
  M7 as ToastProvider,
  Kt as Tooltip,
  n7 as TooltipProvider,
  Xp as Tree,
  HT as TreeList,
  zT as applyTreeListMove,
  N7 as applyTreeMove,
  wD as colorCodeToTokenMap,
  nD as focusFirstTextField,
  NT as groupFlatTreeItems,
  ks as iconVariants,
  YO as inputVariants,
  fx as inputWrapperVariants,
  E1 as resolveTreeValue,
  ma as useSideNavigation
};
