import * as v from "react";
import _, { forwardRef as Qp, createElement as tl, useState as tt, useLayoutEffect as Qd, createContext as Qs, useContext as Is, useCallback as _e, useRef as it, useEffect as on, useMemo as po, useInsertionEffect as Y1, memo as K1, startTransition as U1, useImperativeHandle as q1 } from "react";
import * as Js from "react-dom";
import X1, { flushSync as Vl } from "react-dom";
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
var nh;
function Z1() {
  if (nh) return Zo;
  nh = 1;
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
var rh;
function Q1() {
  return rh || (rh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === j ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case y:
          return "Fragment";
        case b:
          return "Profiler";
        case C:
          return "StrictMode";
        case E:
          return "Suspense";
        case k:
          return "SuspenseList";
        case T:
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
          case x:
            return (A._context.displayName || "Context") + ".Consumer";
          case w:
            var M = A.render;
            return A = A.displayName, A || (A = M.displayName || M.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case N:
            return M = A.displayName || null, M !== null ? M : e(A.type) || "Memo";
          case P:
            M = A._payload, A = A._init;
            try {
              return e(A(M));
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
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var V = M.error, z = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return V.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(A);
      }
    }
    function r(A) {
      if (A === y) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === P)
        return "<...>";
      try {
        var M = e(A);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var A = O.A;
      return A === null ? null : A.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(A) {
      if ($.call(A, "key")) {
        var M = Object.getOwnPropertyDescriptor(A, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function i(A, M) {
      function V() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: V,
        configurable: !0
      });
    }
    function c() {
      var A = e(this.type);
      return Y[A] || (Y[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function l(A, M, V, z, K, q) {
      var I = V.ref;
      return A = {
        $$typeof: g,
        type: A,
        key: M,
        props: V,
        _owner: z
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(A, "ref", {
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
        value: K
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, M, V, z, K, q) {
      var I = M.children;
      if (I !== void 0)
        if (z)
          if (F(I)) {
            for (z = 0; z < I.length; z++)
              u(I[z]);
            Object.freeze && Object.freeze(I);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(I);
      if ($.call(M, "key")) {
        I = e(A);
        var re = Object.keys(M).filter(function(de) {
          return de !== "key";
        });
        z = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", Q[I + z] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          I,
          re,
          I
        ), Q[I + z] = !0);
      }
      if (I = null, V !== void 0 && (n(V), I = "" + V), a(M) && (n(M.key), I = "" + M.key), "key" in M) {
        V = {};
        for (var te in M)
          te !== "key" && (V[te] = M[te]);
      } else V = M;
      return I && i(
        V,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), l(
        A,
        I,
        V,
        o(),
        K,
        q
      );
    }
    function u(A) {
      h(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === P && (A._payload.status === "fulfilled" ? h(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function h(A) {
      return typeof A == "object" && A !== null && A.$$typeof === g;
    }
    var p = _, g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, F = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var W, Y = {}, D = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), L = B(r(s)), Q = {};
    Qo.Fragment = y, Qo.jsx = function(A, M, V) {
      var z = 1e4 > O.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        V,
        !1,
        z ? Error("react-stack-top-frame") : D,
        z ? B(r(A)) : L
      );
    }, Qo.jsxs = function(A, M, V) {
      var z = 1e4 > O.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        V,
        !0,
        z ? Error("react-stack-top-frame") : D,
        z ? B(r(A)) : L
      );
    };
  })()), Qo;
}
var oh;
function J1() {
  return oh || (oh = 1, process.env.NODE_ENV === "production" ? Pa.exports = Z1() : Pa.exports = Q1()), Pa.exports;
}
var d = J1();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var e2 = {
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
  const o = Qp(
    ({ color: s = "currentColor", size: a = 24, stroke: i = 2, title: c, className: l, children: f, ...u }, h) => tl(
      "svg",
      {
        ref: h,
        ...e2[e],
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
        c && tl("title", { key: "svg-title" }, c),
        ...r.map(([p, g]) => tl(p, g)),
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
const t2 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], n2 = Oe("outline", "alert-circle", "AlertCircle", t2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], o2 = Oe("outline", "calendar-event", "CalendarEvent", r2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Jp = Oe("outline", "check", "Check", s2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ea = Oe("outline", "chevron-down", "ChevronDown", a2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], c2 = Oe("outline", "chevron-left", "ChevronLeft", i2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Jd = Oe("outline", "chevron-right", "ChevronRight", l2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], u2 = Oe("outline", "chevron-up", "ChevronUp", d2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], h2 = Oe("outline", "circle-check", "CircleCheck", f2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], m2 = Oe("outline", "cloud-up", "CloudUp", p2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], em = Oe("outline", "dots-vertical", "DotsVertical", v2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = [["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], tm = Oe("outline", "grip-vertical", "GripVertical", g2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], x2 = Oe("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", b2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], w2 = Oe("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", y2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], S2 = Oe("outline", "loader", "Loader", C2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = [["path", { d: "M4 6l16 0", key: "svg-0" }], ["path", { d: "M4 12l16 0", key: "svg-1" }], ["path", { d: "M4 18l16 0", key: "svg-2" }]], k2 = Oe("outline", "menu-2", "Menu2", _2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = [["path", { d: "M5 12l14 0", key: "svg-0" }]], N2 = Oe("outline", "minus", "Minus", E2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], nm = Oe("outline", "pencil", "Pencil", M2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], rm = Oe("outline", "restore", "Restore", P2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], eu = Oe("outline", "search", "Search", A2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], O2 = Oe("outline", "trash-x", "TrashX", R2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], om = Oe("outline", "trash", "Trash", D2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], j2 = Oe("outline", "user", "User", I2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], tu = Oe("outline", "x", "X", T2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], W2 = Oe("filled", "alert-circle-filled", "AlertCircleFilled", $2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], sm = Oe("filled", "circle-check-filled", "CircleCheckFilled", L2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], sh = Oe("filled", "exclamation-circle-filled", "ExclamationCircleFilled", F2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V2 = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], ah = Oe("filled", "folder-filled", "FolderFilled", V2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], ni = Oe("filled", "info-circle-filled", "InfoCircleFilled", z2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B2 = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], H2 = Oe("filled", "lock-filled", "LockFilled", B2);
function ih(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ln(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = ih(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : ih(e[o], null);
        }
      };
  };
}
function xe(...e) {
  return v.useCallback(Ln(...e), e);
}
// @__NO_SIDE_EFFECTS__
function or(e) {
  const t = /* @__PURE__ */ G2(e), n = v.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = v.Children.toArray(s), c = i.find(Y2);
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
function G2(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (v.isValidElement(o)) {
      const a = U2(o), i = K2(s, o.props);
      return o.type !== v.Fragment && (i.ref = r ? Ln(r, a) : a), v.cloneElement(o, i);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var am = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function im(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = am, t;
}
var cm = /* @__PURE__ */ im("Slottable");
function Y2(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === am;
}
function K2(e, t) {
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
function U2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var q2 = [
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
], oe = q2.reduce((e, t) => {
  const n = /* @__PURE__ */ or(`Primitive.${t}`), r = v.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function nu(e, t) {
  e && Js.flushSync(() => e.dispatchEvent(t));
}
var lm = Object.freeze({
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
}), X2 = "VisuallyHidden", Ui = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    oe.span,
    {
      ...e,
      ref: t,
      style: { ...lm, ...e.style }
    }
  )
);
Ui.displayName = X2;
var Z2 = Ui;
function Q2(e, t) {
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
function lt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = v.createContext(a), c = n.length;
    n = [...n, a];
    const l = (u) => {
      var C;
      const { scope: h, children: p, ...g } = u, m = ((C = h == null ? void 0 : h[e]) == null ? void 0 : C[c]) || i, y = v.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: y, children: p });
    };
    l.displayName = s + "Provider";
    function f(u, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || i, g = v.useContext(p);
      if (g) return g;
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
  return o.scopeName = e, [r, J2(o, ...t)];
}
function J2(...e) {
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
  const t = e + "CollectionProvider", [n, r] = lt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: y, children: C } = m, b = _.useRef(null), x = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: y, itemMap: x, collectionRef: b, children: C });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ or(i), l = _.forwardRef(
    (m, y) => {
      const { scope: C, children: b } = m, x = s(i, C), S = xe(y, x.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: S, children: b });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ or(f), p = _.forwardRef(
    (m, y) => {
      const { scope: C, children: b, ...x } = m, S = _.useRef(null), w = xe(y, S), E = s(f, C);
      return _.useEffect(() => (E.itemMap.set(S, { ref: S, ...x }), () => void E.itemMap.delete(S))), /* @__PURE__ */ d.jsx(h, { [u]: "", ref: w, children: b });
    }
  );
  p.displayName = f;
  function g(m) {
    const y = s(e + "CollectionConsumer", m);
    return _.useCallback(() => {
      const b = y.collectionRef.current;
      if (!b) return [];
      const x = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, k) => x.indexOf(E.ref.current) - x.indexOf(k.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    g,
    r
  ];
}
function X(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var ct = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, eC = v[" useInsertionEffect ".trim().toString()] || ct;
function Nt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = tC({
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
        const h = nC(f) ? f(e) : f;
        h !== e && ((u = a.current) == null || u.call(a, h));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function tC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = v.useState(e), o = v.useRef(n), s = v.useRef(t);
  return eC(() => {
    s.current = t;
  }, [t]), v.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function nC(e) {
  return typeof e == "function";
}
function rC(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var ht = (e) => {
  const { present: t, children: n } = e, r = oC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), s = xe(r.ref, sC(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: s }) : null;
};
ht.displayName = "Presence";
function oC(e) {
  const [t, n] = v.useState(), r = v.useRef(null), o = v.useRef(e), s = v.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = rC(a, {
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
  }, [i]), ct(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = s.current, p = Aa(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ct(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, u = (p) => {
        const m = Aa(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && m && (c("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
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
function sC(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var aC = v[" useId ".trim().toString()] || (() => {
}), iC = 0;
function Qe(e) {
  const [t, n] = v.useState(aC());
  return ct(() => {
    n((r) => r ?? String(iC++));
  }, [e]), t ? `radix-${t}` : "";
}
var qi = "Collapsible", [cC, dm] = lt(qi), [lC, ru] = cC(qi), um = v.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, l] = Nt({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: qi
    });
    return /* @__PURE__ */ d.jsx(
      lC,
      {
        scope: n,
        disabled: s,
        contentId: Qe(),
        open: c,
        onOpenToggle: v.useCallback(() => l((f) => !f), [l]),
        children: /* @__PURE__ */ d.jsx(
          oe.div,
          {
            "data-state": su(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
um.displayName = qi;
var fm = "CollapsibleTrigger", hm = v.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ru(fm, n);
    return /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": su(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
hm.displayName = fm;
var ou = "CollapsibleContent", pm = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ru(ou, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(ht, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ d.jsx(dC, { ...r, ref: t, present: s }) });
  }
);
pm.displayName = ou;
var dC = v.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = ru(ou, n), [i, c] = v.useState(r), l = v.useRef(null), f = xe(t, l), u = v.useRef(0), h = u.current, p = v.useRef(0), g = p.current, m = a.open || i, y = v.useRef(m), C = v.useRef(void 0);
  return v.useEffect(() => {
    const b = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), ct(() => {
    const b = l.current;
    if (b) {
      C.current = C.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const x = b.getBoundingClientRect();
      u.current = x.height, p.current = x.width, y.current || (b.style.transitionDuration = C.current.transitionDuration, b.style.animationName = C.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ d.jsx(
    oe.div,
    {
      "data-state": su(a.open),
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
function su(e) {
  return e ? "open" : "closed";
}
var uC = um, fC = hm, hC = pm, pC = v.createContext(void 0);
function Oo(e) {
  const t = v.useContext(pC);
  return e || t || "ltr";
}
var ln = "Accordion", mC = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [au, vC, gC] = ta(ln), [Xi] = lt(ln, [
  gC,
  dm
]), iu = dm(), mm = _.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ d.jsx(au.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ d.jsx(wC, { ...s, ref: t }) : /* @__PURE__ */ d.jsx(yC, { ...o, ref: t }) });
  }
);
mm.displayName = ln;
var [vm, bC] = Xi(ln), [gm, xC] = Xi(
  ln,
  { collapsible: !1 }
), yC = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = Nt({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: ln
    });
    return /* @__PURE__ */ d.jsx(
      vm,
      {
        scope: e.__scopeAccordion,
        value: _.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: _.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ d.jsx(gm, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ d.jsx(bm, { ...a, ref: t }) })
      }
    );
  }
), wC = _.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = Nt({
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
    vm,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ d.jsx(gm, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(bm, { ...s, ref: t }) })
    }
  );
}), [CC, Zi] = Xi(ln), bm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = _.useRef(null), c = xe(i, t), l = vC(n), u = Oo(o) === "ltr", h = X(e.onKeyDown, (p) => {
      var N;
      if (!mC.includes(p.key)) return;
      const g = p.target, m = l().filter((P) => {
        var T;
        return !((T = P.ref.current) != null && T.disabled);
      }), y = m.findIndex((P) => P.ref.current === g), C = m.length;
      if (y === -1) return;
      p.preventDefault();
      let b = y;
      const x = 0, S = C - 1, w = () => {
        b = y + 1, b > S && (b = x);
      }, E = () => {
        b = y - 1, b < x && (b = S);
      };
      switch (p.key) {
        case "Home":
          b = x;
          break;
        case "End":
          b = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (u ? w() : E());
          break;
        case "ArrowDown":
          s === "vertical" && w();
          break;
        case "ArrowLeft":
          s === "horizontal" && (u ? E() : w());
          break;
        case "ArrowUp":
          s === "vertical" && E();
          break;
      }
      const k = b % C;
      (N = m[k].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ d.jsx(
      CC,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ d.jsx(au.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
          oe.div,
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
), bi = "AccordionItem", [SC, cu] = Xi(bi), xm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Zi(bi, n), a = bC(bi, n), i = iu(n), c = Qe(), l = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ d.jsx(
      SC,
      {
        scope: n,
        open: l,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ d.jsx(
          uC,
          {
            "data-orientation": s.orientation,
            "data-state": km(l),
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
xm.displayName = bi;
var ym = "AccordionHeader", wm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = cu(ym, n);
    return /* @__PURE__ */ d.jsx(
      oe.h3,
      {
        "data-orientation": o.orientation,
        "data-state": km(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wm.displayName = ym;
var zl = "AccordionTrigger", Cm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = cu(zl, n), a = xC(zl, n), i = iu(n);
    return /* @__PURE__ */ d.jsx(au.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
      fC,
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
Cm.displayName = zl;
var Sm = "AccordionContent", _m = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = cu(Sm, n), a = iu(n);
    return /* @__PURE__ */ d.jsx(
      hC,
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
_m.displayName = Sm;
function km(e) {
  return e ? "open" : "closed";
}
var ch = mm, _C = xm, kC = wm, EC = Cm, NC = _m;
function Ot(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function MC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var PC = "DismissableLayer", Bl = "dismissableLayer.update", AC = "dismissableLayer.pointerDownOutside", RC = "dismissableLayer.focusOutside", lh, Em = v.createContext({
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
    } = e, l = v.useContext(Em), [f, u] = v.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), g = xe(t, (k) => u(k)), m = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = m.indexOf(y), b = f ? m.indexOf(f) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= C, w = DC((k) => {
      const N = k.target, P = [...l.branches].some((T) => T.contains(N));
      !S || P || (o == null || o(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h), E = IC((k) => {
      const N = k.target;
      [...l.branches].some((T) => T.contains(N)) || (s == null || s(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h);
    return MC((k) => {
      b === l.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && i && (k.preventDefault(), i()));
    }, h), v.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (lh = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), dh(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = lh);
        };
    }, [f, h, n, l]), v.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), dh());
    }, [f, l]), v.useEffect(() => {
      const k = () => p({});
      return document.addEventListener(Bl, k), () => document.removeEventListener(Bl, k);
    }, []), /* @__PURE__ */ d.jsx(
      oe.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: x ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: X(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: X(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: X(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = PC;
var OC = "DismissableLayerBranch", Nm = v.forwardRef((e, t) => {
  const n = v.useContext(Em), r = v.useRef(null), o = xe(t, r);
  return v.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(oe.div, { ...e, ref: o });
});
Nm.displayName = OC;
function DC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          Mm(
            AC,
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
function IC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Mm(RC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function dh() {
  const e = new CustomEvent(Bl);
  document.dispatchEvent(e);
}
function Mm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? nu(o, s) : o.dispatchEvent(s);
}
var jC = Tr, TC = Nm, nl = "focusScope.autoFocusOnMount", rl = "focusScope.autoFocusOnUnmount", uh = { bubbles: !1, cancelable: !0 }, $C = "FocusScope", na = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = v.useState(null), l = Ot(o), f = Ot(s), u = v.useRef(null), h = xe(t, (m) => c(m)), p = v.useRef({
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
      let m = function(x) {
        if (p.paused || !i) return;
        const S = x.target;
        i.contains(S) ? u.current = S : Un(u.current, { select: !0 });
      }, y = function(x) {
        if (p.paused || !i) return;
        const S = x.relatedTarget;
        S !== null && (i.contains(S) || Un(u.current, { select: !0 }));
      }, C = function(x) {
        if (document.activeElement === document.body)
          for (const w of x)
            w.removedNodes.length > 0 && Un(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const b = new MutationObserver(C);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, i, p.paused]), v.useEffect(() => {
    if (i) {
      hh.add(p);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const C = new CustomEvent(nl, uh);
        i.addEventListener(nl, l), i.dispatchEvent(C), C.defaultPrevented || (WC(BC(Pm(i)), { select: !0 }), document.activeElement === m && Un(i));
      }
      return () => {
        i.removeEventListener(nl, l), setTimeout(() => {
          const C = new CustomEvent(rl, uh);
          i.addEventListener(rl, f), i.dispatchEvent(C), C.defaultPrevented || Un(m ?? document.body, { select: !0 }), i.removeEventListener(rl, f), hh.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const g = v.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, C = document.activeElement;
      if (y && C) {
        const b = m.currentTarget, [x, S] = LC(b);
        x && S ? !m.shiftKey && C === S ? (m.preventDefault(), n && Un(x, { select: !0 })) : m.shiftKey && C === x && (m.preventDefault(), n && Un(S, { select: !0 })) : C === b && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d.jsx(oe.div, { tabIndex: -1, ...a, ref: h, onKeyDown: g });
});
na.displayName = $C;
function WC(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n) return;
}
function LC(e) {
  const t = Pm(e), n = fh(t, e), r = fh(t.reverse(), e);
  return [n, r];
}
function Pm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function fh(e, t) {
  for (const n of e)
    if (!FC(n, { upTo: t })) return n;
}
function FC(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function VC(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Un(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && VC(e) && t && e.select();
  }
}
var hh = zC();
function zC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ph(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ph(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ph(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function BC(e) {
  return e.filter((t) => t.tagName !== "A");
}
var HC = "Portal", $r = v.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = v.useState(!1);
  ct(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? X1.createPortal(/* @__PURE__ */ d.jsx(oe.div, { ...r, ref: t }), a) : null;
});
$r.displayName = HC;
var ol = 0;
function Qi() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? mh()), document.body.insertAdjacentElement("beforeend", e[1] ?? mh()), ol++, () => {
      ol === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ol--;
    };
  }, []);
}
function mh() {
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
function Am(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function GC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ri = "right-scroll-bar-position", oi = "width-before-scroll-bar", YC = "with-scroll-bars-hidden", KC = "--removed-body-scroll-bar-size";
function sl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function UC(e, t) {
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
var qC = typeof window < "u" ? v.useLayoutEffect : v.useEffect, vh = /* @__PURE__ */ new WeakMap();
function XC(e, t) {
  var n = UC(null, function(r) {
    return e.forEach(function(o) {
      return sl(o, r);
    });
  });
  return qC(function() {
    var r = vh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || sl(i, null);
      }), s.forEach(function(i) {
        o.has(i) || sl(i, a);
      });
    }
    vh.set(n, e);
  }, [e]), n;
}
function ZC(e) {
  return e;
}
function QC(e, t) {
  t === void 0 && (t = ZC);
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
function JC(e) {
  e === void 0 && (e = {});
  var t = QC(null);
  return t.options = gn({ async: !0, ssr: !1 }, e), t;
}
var Rm = function(e) {
  var t = e.sideCar, n = Am(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, gn({}, n));
};
Rm.isSideCarExport = !0;
function eS(e, t) {
  return e.useMedium(t), Rm;
}
var Om = JC(), al = function() {
}, Ji = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: al,
    onWheelCapture: al,
    onTouchMoveCapture: al
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noRelative, g = e.noIsolation, m = e.inert, y = e.allowPinchZoom, C = e.as, b = C === void 0 ? "div" : C, x = e.gapMode, S = Am(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, E = XC([n, t]), k = gn(gn({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    f && v.createElement(w, { sideCar: Om, removeScrollBar: l, shards: u, noRelative: p, noIsolation: g, inert: m, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: x }),
    a ? v.cloneElement(v.Children.only(i), gn(gn({}, k), { ref: E })) : v.createElement(b, gn({}, k, { className: c, ref: E }), i)
  );
});
Ji.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ji.classNames = {
  fullWidth: oi,
  zeroRight: ri
};
var tS = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nS() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = tS();
  return t && e.setAttribute("nonce", t), e;
}
function rS(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function oS(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var sS = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = nS()) && (rS(t, n), oS(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, aS = function() {
  var e = sS();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Dm = function() {
  var e = aS(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, iS = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, il = function(e) {
  return parseInt(e || "", 10) || 0;
}, cS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [il(n), il(r), il(o)];
}, lS = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return iS;
  var t = cS(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, dS = Dm(), mo = "data-scroll-locked", uS = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(YC, ` {
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
    `).concat(KC, ": ").concat(i, `px;
  }
`);
}, gh = function() {
  var e = parseInt(document.body.getAttribute(mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, fS = function() {
  v.useEffect(function() {
    return document.body.setAttribute(mo, (gh() + 1).toString()), function() {
      var e = gh() - 1;
      e <= 0 ? document.body.removeAttribute(mo) : document.body.setAttribute(mo, e.toString());
    };
  }, []);
}, hS = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  fS();
  var s = v.useMemo(function() {
    return lS(o);
  }, [o]);
  return v.createElement(dS, { styles: uS(s, !t, o, n ? "" : "!important") });
}, Hl = !1;
if (typeof window < "u")
  try {
    var Ra = Object.defineProperty({}, "passive", {
      get: function() {
        return Hl = !0, !0;
      }
    });
    window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    Hl = !1;
  }
var Gr = Hl ? { passive: !1 } : !1, pS = function(e) {
  return e.tagName === "TEXTAREA";
}, Im = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pS(e) && n[t] === "visible")
  );
}, mS = function(e) {
  return Im(e, "overflowY");
}, vS = function(e) {
  return Im(e, "overflowX");
}, bh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = jm(e, r);
    if (o) {
      var s = Tm(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, gS = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, bS = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, jm = function(e, t) {
  return e === "v" ? mS(t) : vS(t);
}, Tm = function(e, t) {
  return e === "v" ? gS(t) : bS(t);
}, xS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yS = function(e, t, n, r, o) {
  var s = xS(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, u = 0, h = 0;
  do {
    if (!i)
      break;
    var p = Tm(e, i), g = p[0], m = p[1], y = p[2], C = m - y - s * g;
    (g || C) && jm(e, i) && (u += C, h += g);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(u) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, Oa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xh = function(e) {
  return [e.deltaX, e.deltaY];
}, yh = function(e) {
  return e && "current" in e ? e.current : e;
}, wS = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, CS = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, SS = 0, Yr = [];
function _S(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(SS++)[0], s = v.useState(Dm)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = GC([e.lockRef.current], (e.shards || []).map(yh), !0).filter(Boolean);
      return m.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = v.useCallback(function(m, y) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var C = Oa(m), b = n.current, x = "deltaX" in m ? m.deltaX : b[0] - C[0], S = "deltaY" in m ? m.deltaY : b[1] - C[1], w, E = m.target, k = Math.abs(x) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && k === "h" && E.type === "range")
      return !1;
    var N = bh(k, E);
    if (!N)
      return !0;
    if (N ? w = k : (w = k === "v" ? "h" : "v", N = bh(k, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in m && (x || S) && (r.current = w), !w)
      return !0;
    var P = r.current || w;
    return yS(P, y, m, P === "h" ? x : S);
  }, []), c = v.useCallback(function(m) {
    var y = m;
    if (!(!Yr.length || Yr[Yr.length - 1] !== s)) {
      var C = "deltaY" in y ? xh(y) : Oa(y), b = t.current.filter(function(w) {
        return w.name === y.type && (w.target === y.target || y.target === w.shadowParent) && wS(w.delta, C);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var x = (a.current.shards || []).map(yh).filter(Boolean).filter(function(w) {
          return w.contains(y.target);
        }), S = x.length > 0 ? i(y, x[0]) : !a.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = v.useCallback(function(m, y, C, b) {
    var x = { name: m, delta: y, target: C, should: b, shadowParent: kS(C) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== x;
      });
    }, 1);
  }, []), f = v.useCallback(function(m) {
    n.current = Oa(m), r.current = void 0;
  }, []), u = v.useCallback(function(m) {
    l(m.type, xh(m), m.target, i(m, e.lockRef.current));
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
  var p = e.removeScrollBar, g = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    g ? v.createElement(s, { styles: CS(o) }) : null,
    p ? v.createElement(hS, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function kS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ES = eS(Om, _S);
var ra = v.forwardRef(function(e, t) {
  return v.createElement(Ji, gn({}, e, { ref: t, sideCar: ES }));
});
ra.classNames = Ji.classNames;
var NS = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {}, cl = 0, $m = function(e) {
  return e && (e.host || $m(e.parentNode));
}, MS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $m(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, PS = function(e, t, n, r) {
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
          var p = h.getAttribute(r), g = p !== null && p !== "false", m = (Kr.get(h) || 0) + 1, y = (s.get(h) || 0) + 1;
          Kr.set(h, m), s.set(h, y), a.push(h), m === 1 && g && Da.set(h, !0), y === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return f(t), i.clear(), cl++, function() {
    a.forEach(function(u) {
      var h = Kr.get(u) - 1, p = s.get(u) - 1;
      Kr.set(u, h), s.set(u, p), h || (Da.has(u) || u.removeAttribute(r), Da.delete(u)), p || u.removeAttribute(n);
    }), cl--, cl || (Kr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {});
  };
}, ec = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = NS(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), PS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, tc = "Dialog", [Wm] = lt(tc), [AS, dn] = Wm(tc), Lm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = v.useRef(null), c = v.useRef(null), [l, f] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: tc
  });
  return /* @__PURE__ */ d.jsx(
    AS,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Qe(),
      titleId: Qe(),
      descriptionId: Qe(),
      open: l,
      onOpenChange: f,
      onOpenToggle: v.useCallback(() => f((u) => !u), [f]),
      modal: a,
      children: n
    }
  );
};
Lm.displayName = tc;
var Fm = "DialogTrigger", Vm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Fm, n), s = xe(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": uu(o.open),
        ...r,
        ref: s,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Vm.displayName = Fm;
var lu = "DialogPortal", [RS, zm] = Wm(lu, {
  forceMount: void 0
}), Bm = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = dn(lu, t);
  return /* @__PURE__ */ d.jsx(RS, { scope: t, forceMount: n, children: v.Children.map(r, (a) => /* @__PURE__ */ d.jsx(ht, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: a }) })) });
};
Bm.displayName = lu;
var xi = "DialogOverlay", Hm = v.forwardRef(
  (e, t) => {
    const n = zm(xi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(xi, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d.jsx(ht, { present: r || s.open, children: /* @__PURE__ */ d.jsx(DS, { ...o, ref: t }) }) : null;
  }
);
Hm.displayName = xi;
var OS = /* @__PURE__ */ or("DialogOverlay.RemoveScroll"), DS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(xi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(ra, { as: OS, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        oe.div,
        {
          "data-state": uu(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Mr = "DialogContent", Gm = v.forwardRef(
  (e, t) => {
    const n = zm(Mr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(Mr, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(ht, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(IS, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(jS, { ...o, ref: t }) });
  }
);
Gm.displayName = Mr;
var IS = v.forwardRef(
  (e, t) => {
    const n = dn(Mr, e.__scopeDialog), r = v.useRef(null), o = xe(t, n.contentRef, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return ec(s);
    }, []), /* @__PURE__ */ d.jsx(
      Ym,
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
), jS = v.forwardRef(
  (e, t) => {
    const n = dn(Mr, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Ym,
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
), Ym = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = dn(Mr, n), c = v.useRef(null), l = xe(t, c);
    return Qi(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
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
              "data-state": uu(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx($S, { titleId: i.titleId }),
        /* @__PURE__ */ d.jsx(LS, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), du = "DialogTitle", Km = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(du, n);
    return /* @__PURE__ */ d.jsx(oe.h2, { id: o.titleId, ...r, ref: t });
  }
);
Km.displayName = du;
var Um = "DialogDescription", TS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Um, n);
    return /* @__PURE__ */ d.jsx(oe.p, { id: o.descriptionId, ...r, ref: t });
  }
);
TS.displayName = Um;
var qm = "DialogClose", Xm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(qm, n);
    return /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Xm.displayName = qm;
function uu(e) {
  return e ? "open" : "closed";
}
var Zm = "DialogTitleWarning", [JT, Qm] = Q2(Zm, {
  contentName: Mr,
  titleName: du,
  docsSlug: "dialog"
}), $S = ({ titleId: e }) => {
  const t = Qm(Zm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, WS = "DialogDescriptionWarning", LS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Qm(WS).contentName}}.`;
  return v.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, nc = Lm, FS = Vm, rc = Bm, oc = Hm, sc = Gm, fu = Km, Jm = Xm;
function ac(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ic(e) {
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
var cc = "Checkbox", [VS] = lt(cc), [zS, hu] = VS(cc);
function BS(e) {
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
  } = e, [h, p] = Nt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: cc
  }), [g, m] = v.useState(null), [y, C] = v.useState(null), b = v.useRef(!1), x = g ? !!a || !!g.closest("form") : (
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
    isFormControl: x,
    bubbleInput: y,
    setBubbleInput: C
  };
  return /* @__PURE__ */ d.jsx(
    zS,
    {
      scope: t,
      ...S,
      children: HS(u) ? u(S) : r
    }
  );
}
var ev = "CheckboxTrigger", tv = v.forwardRef(
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
      bubbleInput: g
    } = hu(ev, e), m = xe(o, f), y = v.useRef(c);
    return v.useEffect(() => {
      const C = s == null ? void 0 : s.form;
      if (C) {
        const b = () => u(y.current);
        return C.addEventListener("reset", b), () => C.removeEventListener("reset", b);
      }
    }, [s, u]), /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": rr(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": iv(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: m,
        onKeyDown: X(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: X(n, (C) => {
          u((b) => rr(b) ? !0 : !b), g && p && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
        })
      }
    );
  }
);
tv.displayName = ev;
var nv = v.forwardRef(
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
      BS,
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
            tv,
            {
              ...u,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ d.jsx(
            av,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
nv.displayName = cc;
var rv = "CheckboxIndicator", ov = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = hu(rv, n);
    return /* @__PURE__ */ d.jsx(
      ht,
      {
        present: r || rr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          oe.span,
          {
            "data-state": iv(s.checked),
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
ov.displayName = rv;
var sv = "CheckboxBubbleInput", av = v.forwardRef(
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
    } = hu(sv, e), g = xe(n, p), m = ac(s), y = ic(r);
    v.useEffect(() => {
      const b = h;
      if (!b) return;
      const x = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, E = !o.current;
      if (m !== s && w) {
        const k = new Event("click", { bubbles: E });
        b.indeterminate = rr(s), w.call(b, rr(s) ? !1 : s), b.dispatchEvent(k);
      }
    }, [h, m, s, o]);
    const C = v.useRef(rr(s) ? !1 : s);
    return /* @__PURE__ */ d.jsx(
      oe.input,
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
        ref: g,
        style: {
          ...t.style,
          ...y,
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
av.displayName = sv;
function HS(e) {
  return typeof e == "function";
}
function rr(e) {
  return e === "indeterminate";
}
function iv(e) {
  return rr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const GS = ["top", "right", "bottom", "left"], sr = Math.min, Tt = Math.max, yi = Math.round, ja = Math.floor, Cn = (e) => ({
  x: e,
  y: e
}), YS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, KS = {
  start: "end",
  end: "start"
};
function Gl(e, t, n) {
  return Tt(e, sr(t, n));
}
function Fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Do(e) {
  return e.split("-")[1];
}
function pu(e) {
  return e === "x" ? "y" : "x";
}
function mu(e) {
  return e === "y" ? "height" : "width";
}
const US = /* @__PURE__ */ new Set(["top", "bottom"]);
function yn(e) {
  return US.has(Vn(e)) ? "y" : "x";
}
function vu(e) {
  return pu(yn(e));
}
function qS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = vu(e), s = mu(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = wi(a)), [a, wi(a)];
}
function XS(e) {
  const t = wi(e);
  return [Yl(e), t, Yl(t)];
}
function Yl(e) {
  return e.replace(/start|end/g, (t) => KS[t]);
}
const wh = ["left", "right"], Ch = ["right", "left"], ZS = ["top", "bottom"], QS = ["bottom", "top"];
function JS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ch : wh : t ? wh : Ch;
    case "left":
    case "right":
      return t ? ZS : QS;
    default:
      return [];
  }
}
function e_(e, t, n, r) {
  const o = Do(e);
  let s = JS(Vn(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Yl)))), s;
}
function wi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => YS[t]);
}
function t_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function cv(e) {
  return typeof e != "number" ? t_(e) : {
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
function Sh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = yn(t), a = vu(t), i = mu(a), c = Vn(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
const n_ = async (e, t, n) => {
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
  } = Sh(l, r, c), h = r, p = {}, g = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: y,
      fn: C
    } = i[m], {
      x: b,
      y: x,
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
    f = b ?? f, u = x ?? u, p = {
      ...p,
      [y]: {
        ...p[y],
        ...S
      }
    }, w && g <= 50 && (g++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: f,
      y: u
    } = Sh(l, h, c)), m = -1);
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
  } = Fn(t, e), g = cv(p), y = i[h ? u === "floating" ? "reference" : "floating" : u], C = Ci(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), b = u === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Ci(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: x,
    strategy: c
  }) : b);
  return {
    top: (C.top - w.top + g.top) / S.y,
    bottom: (w.bottom - C.bottom + g.bottom) / S.y,
    left: (C.left - w.left + g.left) / S.x,
    right: (w.right - C.right + g.right) / S.x
  };
}
const r_ = (e) => ({
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
    } = Fn(e, t) || {};
    if (l == null)
      return {};
    const u = cv(f), h = {
      x: n,
      y: r
    }, p = vu(o), g = mu(p), m = await a.getDimensions(l), y = p === "y", C = y ? "top" : "left", b = y ? "bottom" : "right", x = y ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[p] - h[p] - s.floating[g], w = h[p] - s.reference[p], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = E ? E[x] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(E))) && (k = i.floating[x] || s.floating[g]);
    const N = S / 2 - w / 2, P = k / 2 - m[g] / 2 - 1, T = sr(u[C], P), j = sr(u[b], P), O = T, $ = k - m[g] - j, F = k / 2 - m[g] / 2 + N, B = Gl(O, F, $), W = !c.arrow && Do(o) != null && F !== B && s.reference[g] / 2 - (F < O ? T : j) - m[g] / 2 < 0, Y = W ? F < O ? F - O : F - $ : 0;
    return {
      [p]: h[p] + Y,
      data: {
        [p]: B,
        centerOffset: F - B - Y,
        ...W && {
          alignmentOffset: Y
        }
      },
      reset: W
    };
  }
}), o_ = function(e) {
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
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...y
      } = Fn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Vn(o), b = yn(i), x = Vn(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = h || (x || !m ? [wi(i)] : XS(i)), E = g !== "none";
      !h && E && w.push(...e_(i, m, g, S));
      const k = [i, ...w], N = await js(t, y), P = [];
      let T = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(N[C]), u) {
        const F = qS(o, a, S);
        P.push(N[F[0]], N[F[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: P
      }], !P.every((F) => F <= 0)) {
        var j, O;
        const F = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, B = k[F];
        if (B && (!(u === "alignment" ? b !== yn(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((D) => yn(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: T
            },
            reset: {
              placement: B
            }
          };
        let W = (O = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, D) => Y.overflows[1] - D.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!W)
          switch (p) {
            case "bestFit": {
              var $;
              const Y = ($ = T.filter((D) => {
                if (E) {
                  const L = yn(D.placement);
                  return L === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  L === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((L) => L > 0).reduce((L, Q) => L + Q, 0)]).sort((D, L) => D[1] - L[1])[0]) == null ? void 0 : $[0];
              Y && (W = Y);
              break;
            }
            case "initialPlacement":
              W = i;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function _h(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function kh(e) {
  return GS.some((t) => e[t] >= 0);
}
const s_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Fn(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await js(t, {
            ...o,
            elementContext: "reference"
          }), a = _h(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: kh(a)
            }
          };
        }
        case "escaped": {
          const s = await js(t, {
            ...o,
            altBoundary: !0
          }), a = _h(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: kh(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, lv = /* @__PURE__ */ new Set(["left", "top"]);
async function a_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Vn(n), i = Do(n), c = yn(n) === "y", l = lv.has(a) ? -1 : 1, f = s && c ? -1 : 1, u = Fn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: g
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof g == "number" && (p = i === "end" ? g * -1 : g), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const i_ = function(e) {
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
      } = t, c = await a_(t, e);
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
}, c_ = function(e) {
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
          fn: (y) => {
            let {
              x: C,
              y: b
            } = y;
            return {
              x: C,
              y: b
            };
          }
        },
        ...c
      } = Fn(e, t), l = {
        x: n,
        y: r
      }, f = await js(t, c), u = yn(Vn(o)), h = pu(u);
      let p = l[h], g = l[u];
      if (s) {
        const y = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", b = p + f[y], x = p - f[C];
        p = Gl(b, p, x);
      }
      if (a) {
        const y = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", b = g + f[y], x = g - f[C];
        g = Gl(b, g, x);
      }
      const m = i.fn({
        ...t,
        [h]: p,
        [u]: g
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
}, l_ = function(e) {
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
      } = Fn(e, t), f = {
        x: n,
        y: r
      }, u = yn(o), h = pu(u);
      let p = f[h], g = f[u];
      const m = Fn(i, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const x = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[x] + y.mainAxis, w = s.reference[h] + s.reference[x] - y.mainAxis;
        p < S ? p = S : p > w && (p = w);
      }
      if (l) {
        var C, b;
        const x = h === "y" ? "width" : "height", S = lv.has(Vn(o)), w = s.reference[u] - s.floating[x] + (S && ((C = a.offset) == null ? void 0 : C[u]) || 0) + (S ? 0 : y.crossAxis), E = s.reference[u] + s.reference[x] + (S ? 0 : ((b = a.offset) == null ? void 0 : b[u]) || 0) - (S ? y.crossAxis : 0);
        g < w ? g = w : g > E && (g = E);
      }
      return {
        [h]: p,
        [u]: g
      };
    }
  };
}, d_ = function(e) {
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
      } = Fn(e, t), f = await js(t, l), u = Vn(o), h = Do(o), p = yn(o) === "y", {
        width: g,
        height: m
      } = s.floating;
      let y, C;
      u === "top" || u === "bottom" ? (y = u, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = u, y = h === "end" ? "top" : "bottom");
      const b = m - f.top - f.bottom, x = g - f.left - f.right, S = sr(m - f[y], b), w = sr(g - f[C], x), E = !t.middlewareData.shift;
      let k = S, N = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = x), (r = t.middlewareData.shift) != null && r.enabled.y && (k = b), E && !h) {
        const T = Tt(f.left, 0), j = Tt(f.right, 0), O = Tt(f.top, 0), $ = Tt(f.bottom, 0);
        p ? N = g - 2 * (T !== 0 || j !== 0 ? T + j : Tt(f.left, f.right)) : k = m - 2 * (O !== 0 || $ !== 0 ? O + $ : Tt(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: k
      });
      const P = await a.getDimensions(i.floating);
      return g !== P.width || m !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function lc() {
  return typeof window < "u";
}
function Io(e) {
  return dv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mn(e) {
  var t;
  return (t = (dv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function dv(e) {
  return lc() ? e instanceof Node || e instanceof Wt(e).Node : !1;
}
function an(e) {
  return lc() ? e instanceof Element || e instanceof Wt(e).Element : !1;
}
function _n(e) {
  return lc() ? e instanceof HTMLElement || e instanceof Wt(e).HTMLElement : !1;
}
function Eh(e) {
  return !lc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Wt(e).ShadowRoot;
}
const u_ = /* @__PURE__ */ new Set(["inline", "contents"]);
function oa(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = cn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !u_.has(o);
}
const f_ = /* @__PURE__ */ new Set(["table", "td", "th"]);
function h_(e) {
  return f_.has(Io(e));
}
const p_ = [":popover-open", ":modal"];
function dc(e) {
  return p_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const m_ = ["transform", "translate", "scale", "rotate", "perspective"], v_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], g_ = ["paint", "layout", "strict", "content"];
function gu(e) {
  const t = bu(), n = an(e) ? cn(e) : e;
  return m_.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || v_.some((r) => (n.willChange || "").includes(r)) || g_.some((r) => (n.contain || "").includes(r));
}
function b_(e) {
  let t = ar(e);
  for (; _n(t) && !wo(t); ) {
    if (gu(t))
      return t;
    if (dc(t))
      return null;
    t = ar(t);
  }
  return null;
}
function bu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const x_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function wo(e) {
  return x_.has(Io(e));
}
function cn(e) {
  return Wt(e).getComputedStyle(e);
}
function uc(e) {
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
    Eh(e) && e.host || // Fallback.
    Mn(e)
  );
  return Eh(t) ? t.host : t;
}
function uv(e) {
  const t = ar(e);
  return wo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && oa(t) ? t : uv(t);
}
function Ts(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = uv(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Wt(o);
  if (s) {
    const i = Kl(a);
    return t.concat(a, a.visualViewport || [], oa(o) ? o : [], i && n ? Ts(i) : []);
  }
  return t.concat(o, Ts(o, [], n));
}
function Kl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function fv(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = yi(n) !== s || yi(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function xu(e) {
  return an(e) ? e : e.contextElement;
}
function vo(e) {
  const t = xu(e);
  if (!_n(t))
    return Cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = fv(t);
  let a = (s ? yi(n.width) : n.width) / r, i = (s ? yi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const y_ = /* @__PURE__ */ Cn(0);
function hv(e) {
  const t = Wt(e);
  return !bu() || !t.visualViewport ? y_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function w_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function Pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = xu(e);
  let a = Cn(1);
  t && (r ? an(r) && (a = vo(r)) : a = vo(e));
  const i = w_(s, n, r) ? hv(s) : Cn(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (s) {
    const h = Wt(s), p = r && an(r) ? Wt(r) : r;
    let g = h, m = Kl(g);
    for (; m && r && p !== g; ) {
      const y = vo(m), C = m.getBoundingClientRect(), b = cn(m), x = C.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = C.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      c *= y.x, l *= y.y, f *= y.x, u *= y.y, c += x, l += S, g = Wt(m), m = Kl(g);
    }
  }
  return Ci({
    width: f,
    height: u,
    x: c,
    y: l
  });
}
function fc(e, t) {
  const n = uc(e).scrollLeft;
  return t ? t.left + n : Pr(Mn(e)).left + n;
}
function pv(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - fc(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function C_(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Mn(r), i = t ? dc(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Cn(1);
  const f = Cn(0), u = _n(r);
  if ((u || !u && !s) && ((Io(r) !== "body" || oa(a)) && (c = uc(r)), _n(r))) {
    const p = Pr(r);
    l = vo(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !u && !s ? pv(a, c) : Cn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function S_(e) {
  return Array.from(e.getClientRects());
}
function __(e) {
  const t = Mn(e), n = uc(e), r = e.ownerDocument.body, o = Tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + fc(e);
  const i = -n.scrollTop;
  return cn(r).direction === "rtl" && (a += Tt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const Nh = 25;
function k_(e, t) {
  const n = Wt(e), r = Mn(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = bu();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = fc(r);
  if (l <= 0) {
    const f = r.ownerDocument, u = f.body, h = getComputedStyle(u), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, g = Math.abs(r.clientWidth - u.clientWidth - p);
    g <= Nh && (s -= g);
  } else l <= Nh && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const E_ = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function N_(e, t) {
  const n = Pr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = _n(e) ? vo(e) : Cn(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Mh(e, t, n) {
  let r;
  if (t === "viewport")
    r = k_(e, n);
  else if (t === "document")
    r = __(Mn(e));
  else if (an(t))
    r = N_(t, n);
  else {
    const o = hv(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ci(r);
}
function mv(e, t) {
  const n = ar(e);
  return n === t || !an(n) || wo(n) ? !1 : cn(n).position === "fixed" || mv(n, t);
}
function M_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ts(e, [], !1).filter((i) => an(i) && Io(i) !== "body"), o = null;
  const s = cn(e).position === "fixed";
  let a = s ? ar(e) : e;
  for (; an(a) && !wo(a); ) {
    const i = cn(a), c = gu(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && E_.has(o.position) || oa(a) && !c && mv(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = ar(a);
  }
  return t.set(e, r), r;
}
function P_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? dc(t) ? [] : M_(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((l, f) => {
    const u = Mh(t, f, o);
    return l.top = Tt(u.top, l.top), l.right = sr(u.right, l.right), l.bottom = sr(u.bottom, l.bottom), l.left = Tt(u.left, l.left), l;
  }, Mh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function A_(e) {
  const {
    width: t,
    height: n
  } = fv(e);
  return {
    width: t,
    height: n
  };
}
function R_(e, t, n) {
  const r = _n(t), o = Mn(t), s = n === "fixed", a = Pr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Cn(0);
  function l() {
    c.x = fc(o);
  }
  if (r || !r && !s)
    if ((Io(t) !== "body" || oa(o)) && (i = uc(t)), r) {
      const p = Pr(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const f = o && !r && !s ? pv(o, i) : Cn(0), u = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function ll(e) {
  return cn(e).position === "static";
}
function Ph(e, t) {
  if (!_n(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Mn(e) === n && (n = n.ownerDocument.body), n;
}
function vv(e, t) {
  const n = Wt(e);
  if (dc(e))
    return n;
  if (!_n(e)) {
    let o = ar(e);
    for (; o && !wo(o); ) {
      if (an(o) && !ll(o))
        return o;
      o = ar(o);
    }
    return n;
  }
  let r = Ph(e, t);
  for (; r && h_(r) && ll(r); )
    r = Ph(r, t);
  return r && wo(r) && ll(r) && !gu(r) ? n : r || b_(e) || n;
}
const O_ = async function(e) {
  const t = this.getOffsetParent || vv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: R_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function D_(e) {
  return cn(e).direction === "rtl";
}
const I_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: C_,
  getDocumentElement: Mn,
  getClippingRect: P_,
  getOffsetParent: vv,
  getElementRects: O_,
  getClientRects: S_,
  getDimensions: A_,
  getScale: vo,
  isElement: an,
  isRTL: D_
};
function gv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function j_(e, t) {
  let n = null, r;
  const o = Mn(e);
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
    const g = ja(u), m = ja(o.clientWidth - (f + h)), y = ja(o.clientHeight - (u + p)), C = ja(f), x = {
      rootMargin: -g + "px " + -m + "px " + -y + "px " + -C + "px",
      threshold: Tt(0, sr(1, c)) || 1
    };
    let S = !0;
    function w(E) {
      const k = E[0].intersectionRatio;
      if (k !== c) {
        if (!S)
          return a();
        k ? a(!1, k) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !gv(l, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, x);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function T_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = xu(e), f = o || s ? [...l ? Ts(l) : [], ...Ts(t)] : [];
  f.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const u = l && i ? j_(l, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let g, m = c ? Pr(e) : null;
  c && y();
  function y() {
    const C = Pr(e);
    m && !gv(m, C) && n(), m = C, g = requestAnimationFrame(y);
  }
  return n(), () => {
    var C;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), u == null || u(), (C = p) == null || C.disconnect(), p = null, c && cancelAnimationFrame(g);
  };
}
const $_ = i_, W_ = c_, L_ = o_, F_ = d_, V_ = s_, Ah = r_, z_ = l_, B_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: I_,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return n_(e, t, {
    ...o,
    platform: s
  });
};
var H_ = typeof document < "u", G_ = function() {
}, si = H_ ? Qd : G_;
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
function bv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rh(e, t) {
  const n = bv(e);
  return Math.round(t * n) / n;
}
function dl(e) {
  const t = v.useRef(e);
  return si(() => {
    t.current = e;
  }), t;
}
function Y_(e) {
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
  const [g, m] = v.useState(null), [y, C] = v.useState(null), b = v.useCallback((D) => {
    D !== E.current && (E.current = D, m(D));
  }, []), x = v.useCallback((D) => {
    D !== k.current && (k.current = D, C(D));
  }, []), S = s || g, w = a || y, E = v.useRef(null), k = v.useRef(null), N = v.useRef(f), P = c != null, T = dl(c), j = dl(o), O = dl(l), $ = v.useCallback(() => {
    if (!E.current || !k.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: h
    };
    j.current && (D.platform = j.current), B_(E.current, k.current, D).then((L) => {
      const Q = {
        ...L,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      F.current && !Si(N.current, Q) && (N.current = Q, Js.flushSync(() => {
        u(Q);
      }));
    });
  }, [h, t, n, j, O]);
  si(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, u((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [l]);
  const F = v.useRef(!1);
  si(() => (F.current = !0, () => {
    F.current = !1;
  }), []), si(() => {
    if (S && (E.current = S), w && (k.current = w), S && w) {
      if (T.current)
        return T.current(S, w, $);
      $();
    }
  }, [S, w, $, T, P]);
  const B = v.useMemo(() => ({
    reference: E,
    floating: k,
    setReference: b,
    setFloating: x
  }), [b, x]), W = v.useMemo(() => ({
    reference: S,
    floating: w
  }), [S, w]), Y = v.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return D;
    const L = Rh(W.floating, f.x), Q = Rh(W.floating, f.y);
    return i ? {
      ...D,
      transform: "translate(" + L + "px, " + Q + "px)",
      ...bv(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: Q
    };
  }, [n, i, W.floating, f.x, f.y]);
  return v.useMemo(() => ({
    ...f,
    update: $,
    refs: B,
    elements: W,
    floatingStyles: Y
  }), [f, $, B, W, Y]);
}
const K_ = (e) => {
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
      return r && t(r) ? r.current != null ? Ah({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ah({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, U_ = (e, t) => ({
  ...$_(e),
  options: [e, t]
}), q_ = (e, t) => ({
  ...W_(e),
  options: [e, t]
}), X_ = (e, t) => ({
  ...z_(e),
  options: [e, t]
}), Z_ = (e, t) => ({
  ...L_(e),
  options: [e, t]
}), Q_ = (e, t) => ({
  ...F_(e),
  options: [e, t]
}), J_ = (e, t) => ({
  ...V_(e),
  options: [e, t]
}), ek = (e, t) => ({
  ...K_(e),
  options: [e, t]
});
var tk = "Arrow", xv = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    oe.svg,
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
xv.displayName = tk;
var nk = xv, yu = "Popper", [yv, dr] = lt(yu), [rk, wv] = yv(yu), Cv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ d.jsx(rk, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Cv.displayName = yu;
var Sv = "PopperAnchor", _v = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = wv(Sv, n), a = v.useRef(null), i = xe(t, a), c = v.useRef(null);
    return v.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d.jsx(oe.div, { ...o, ref: i });
  }
);
_v.displayName = Sv;
var wu = "PopperContent", [ok, sk] = yv(wu), kv = v.forwardRef(
  (e, t) => {
    var I, re, te, de, ge, me;
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
      onPlaced: g,
      ...m
    } = e, y = wv(wu, n), [C, b] = v.useState(null), x = xe(t, (ke) => b(ke)), [S, w] = v.useState(null), E = ic(S), k = (E == null ? void 0 : E.width) ?? 0, N = (E == null ? void 0 : E.height) ?? 0, P = r + (s !== "center" ? "-" + s : ""), T = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, j = Array.isArray(l) ? l : [l], O = j.length > 0, $ = {
      padding: T,
      boundary: j.filter(ik),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: O
    }, { refs: F, floatingStyles: B, placement: W, isPositioned: Y, middlewareData: D } = Y_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...ke) => T_(...ke, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        U_({ mainAxis: o + N, alignmentAxis: a }),
        c && q_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: u === "partial" ? X_() : void 0,
          ...$
        }),
        c && Z_({ ...$ }),
        Q_({
          ...$,
          apply: ({ elements: ke, rects: De, availableWidth: Te, availableHeight: ot }) => {
            const { width: qe, height: zt } = De.reference, Ge = ke.floating.style;
            Ge.setProperty("--radix-popper-available-width", `${Te}px`), Ge.setProperty("--radix-popper-available-height", `${ot}px`), Ge.setProperty("--radix-popper-anchor-width", `${qe}px`), Ge.setProperty("--radix-popper-anchor-height", `${zt}px`);
          }
        }),
        S && ek({ element: S, padding: i }),
        ck({ arrowWidth: k, arrowHeight: N }),
        h && J_({ strategy: "referenceHidden", ...$ })
      ]
    }), [L, Q] = Mv(W), A = Ot(g);
    ct(() => {
      Y && (A == null || A());
    }, [Y, A]);
    const M = (I = D.arrow) == null ? void 0 : I.x, V = (re = D.arrow) == null ? void 0 : re.y, z = ((te = D.arrow) == null ? void 0 : te.centerOffset) !== 0, [K, q] = v.useState();
    return ct(() => {
      C && q(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: Y ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
          "--radix-popper-transform-origin": [
            (de = D.transformOrigin) == null ? void 0 : de.x,
            (ge = D.transformOrigin) == null ? void 0 : ge.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((me = D.hide) == null ? void 0 : me.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          ok,
          {
            scope: n,
            placedSide: L,
            onArrowChange: w,
            arrowX: M,
            arrowY: V,
            shouldHideArrow: z,
            children: /* @__PURE__ */ d.jsx(
              oe.div,
              {
                "data-side": L,
                "data-align": Q,
                ...m,
                ref: x,
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
kv.displayName = wu;
var Ev = "PopperArrow", ak = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Nv = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = sk(Ev, r), a = ak[s.placedSide];
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
          nk,
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
Nv.displayName = Ev;
function ik(e) {
  return e !== null;
}
var ck = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, C, b;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = Mv(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let g = "", m = "";
    return l === "bottom" ? (g = a ? u : `${h}px`, m = `${-c}px`) : l === "top" ? (g = a ? u : `${h}px`, m = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, m = a ? u : `${p}px`) : l === "left" && (g = `${r.floating.width + c}px`, m = a ? u : `${p}px`), { data: { x: g, y: m } };
  }
});
function Mv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hc = Cv, sa = _v, pc = kv, mc = Nv, ul = "rovingFocusGroup.onEntryFocus", lk = { bubbles: !1, cancelable: !0 }, aa = "RovingFocusGroup", [Ul, Pv, dk] = ta(aa), [uk, jo] = lt(
  aa,
  [dk]
), [fk, hk] = uk(aa), Av = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(Ul.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Ul.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(pk, { ...e, ref: t }) }) })
);
Av.displayName = aa;
var pk = v.forwardRef((e, t) => {
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
  } = e, h = v.useRef(null), p = xe(t, h), g = Oo(s), [m, y] = Nt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: aa
  }), [C, b] = v.useState(!1), x = Ot(l), S = Pv(n), w = v.useRef(!1), [E, k] = v.useState(0);
  return v.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(ul, x), () => N.removeEventListener(ul, x);
  }, [x]), /* @__PURE__ */ d.jsx(
    fk,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: m,
      onItemFocus: v.useCallback(
        (N) => y(N),
        [y]
      ),
      onItemShiftTab: v.useCallback(() => b(!0), []),
      onFocusableItemAdd: v.useCallback(
        () => k((N) => N + 1),
        []
      ),
      onFocusableItemRemove: v.useCallback(
        () => k((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        oe.div,
        {
          tabIndex: C || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: X(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: X(e.onFocus, (N) => {
            const P = !w.current;
            if (N.target === N.currentTarget && P && !C) {
              const T = new CustomEvent(ul, lk);
              if (N.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const j = S().filter((W) => W.focusable), O = j.find((W) => W.active), $ = j.find((W) => W.id === m), B = [O, $, ...j].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Dv(B, f);
              }
            }
            w.current = !1;
          }),
          onBlur: X(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Rv = "RovingFocusGroupItem", Ov = v.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Qe(), l = s || c, f = hk(Rv, n), u = f.currentTabStopId === l, h = Pv(n), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: m } = f;
    return v.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ d.jsx(
      Ul.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          oe.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: X(e.onMouseDown, (y) => {
              r ? f.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: X(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: X(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const C = gk(y, f.orientation, f.dir);
              if (C !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let x = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (C === "last") x.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && x.reverse();
                  const S = x.indexOf(y.currentTarget);
                  x = f.loop ? bk(x, S + 1) : x.slice(S + 1);
                }
                setTimeout(() => Dv(x));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
Ov.displayName = Rv;
var mk = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function vk(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gk(e, t, n) {
  const r = vk(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return mk[r];
}
function Dv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function bk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Cu = Av, Su = Ov, ql = ["Enter", " "], xk = ["ArrowDown", "PageUp", "Home"], Iv = ["ArrowUp", "PageDown", "End"], yk = [...xk, ...Iv], wk = {
  ltr: [...ql, "ArrowRight"],
  rtl: [...ql, "ArrowLeft"]
}, Ck = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ia = "Menu", [$s, Sk, _k] = ta(ia), [Wr, jv] = lt(ia, [
  _k,
  dr,
  jo
]), vc = dr(), Tv = jo(), [kk, Lr] = Wr(ia), [Ek, ca] = Wr(ia), $v = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = vc(t), [c, l] = v.useState(null), f = v.useRef(!1), u = Ot(s), h = Oo(o);
  return v.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(hc, { ...i, children: /* @__PURE__ */ d.jsx(
    kk,
    {
      scope: t,
      open: n,
      onOpenChange: u,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ d.jsx(
        Ek,
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
$v.displayName = ia;
var Nk = "MenuAnchor", _u = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = vc(n);
    return /* @__PURE__ */ d.jsx(sa, { ...o, ...r, ref: t });
  }
);
_u.displayName = Nk;
var ku = "MenuPortal", [Mk, Wv] = Wr(ku, {
  forceMount: void 0
}), Lv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Lr(ku, t);
  return /* @__PURE__ */ d.jsx(Mk, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(ht, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
Lv.displayName = ku;
var qt = "MenuContent", [Pk, Eu] = Wr(qt), Fv = v.forwardRef(
  (e, t) => {
    const n = Wv(qt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(qt, e.__scopeMenu), a = ca(qt, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(ht, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ d.jsx(Ak, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Rk, { ...o, ref: t }) }) }) });
  }
), Ak = v.forwardRef(
  (e, t) => {
    const n = Lr(qt, e.__scopeMenu), r = v.useRef(null), o = xe(t, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return ec(s);
    }, []), /* @__PURE__ */ d.jsx(
      Nu,
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
), Rk = v.forwardRef((e, t) => {
  const n = Lr(qt, e.__scopeMenu);
  return /* @__PURE__ */ d.jsx(
    Nu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Ok = /* @__PURE__ */ or("MenuContent.ScrollLock"), Nu = v.forwardRef(
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
      disableOutsideScroll: g,
      ...m
    } = e, y = Lr(qt, n), C = ca(qt, n), b = vc(n), x = Tv(n), S = Sk(n), [w, E] = v.useState(null), k = v.useRef(null), N = xe(t, k, y.onContentChange), P = v.useRef(0), T = v.useRef(""), j = v.useRef(0), O = v.useRef(null), $ = v.useRef("right"), F = v.useRef(0), B = g ? ra : v.Fragment, W = g ? { as: Ok, allowPinchZoom: !0 } : void 0, Y = (L) => {
      var I, re;
      const Q = T.current + L, A = S().filter((te) => !te.disabled), M = document.activeElement, V = (I = A.find((te) => te.ref.current === M)) == null ? void 0 : I.textValue, z = A.map((te) => te.textValue), K = Hk(z, Q, V), q = (re = A.find((te) => te.textValue === K)) == null ? void 0 : re.ref.current;
      (function te(de) {
        T.current = de, window.clearTimeout(P.current), de !== "" && (P.current = window.setTimeout(() => te(""), 1e3));
      })(Q), q && setTimeout(() => q.focus());
    };
    v.useEffect(() => () => window.clearTimeout(P.current), []), Qi();
    const D = v.useCallback((L) => {
      var A, M;
      return $.current === ((A = O.current) == null ? void 0 : A.side) && Yk(L, (M = O.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      Pk,
      {
        scope: n,
        searchRef: T,
        onItemEnter: v.useCallback(
          (L) => {
            D(L) && L.preventDefault();
          },
          [D]
        ),
        onItemLeave: v.useCallback(
          (L) => {
            var Q;
            D(L) || ((Q = k.current) == null || Q.focus(), E(null));
          },
          [D]
        ),
        onTriggerLeave: v.useCallback(
          (L) => {
            D(L) && L.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: v.useCallback((L) => {
          O.current = L;
        }, []),
        children: /* @__PURE__ */ d.jsx(B, { ...W, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: X(s, (L) => {
              var Q;
              L.preventDefault(), (Q = k.current) == null || Q.focus({ preventScroll: !0 });
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
                  Cu,
                  {
                    asChild: !0,
                    ...x,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: X(c, (L) => {
                      C.isUsingKeyboardRef.current || L.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      pc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ng(y.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...b,
                        ...m,
                        ref: N,
                        style: { outline: "none", ...m.style },
                        onKeyDown: X(m.onKeyDown, (L) => {
                          const A = L.target.closest("[data-radix-menu-content]") === L.currentTarget, M = L.ctrlKey || L.altKey || L.metaKey, V = L.key.length === 1;
                          A && (L.key === "Tab" && L.preventDefault(), !M && V && Y(L.key));
                          const z = k.current;
                          if (L.target !== z || !yk.includes(L.key)) return;
                          L.preventDefault();
                          const q = S().filter((I) => !I.disabled).map((I) => I.ref.current);
                          Iv.includes(L.key) && q.reverse(), zk(q);
                        }),
                        onBlur: X(e.onBlur, (L) => {
                          L.currentTarget.contains(L.target) || (window.clearTimeout(P.current), T.current = "");
                        }),
                        onPointerMove: X(
                          e.onPointerMove,
                          Ws((L) => {
                            const Q = L.target, A = F.current !== L.clientX;
                            if (L.currentTarget.contains(Q) && A) {
                              const M = L.clientX > F.current ? "right" : "left";
                              $.current = M, F.current = L.clientX;
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
Fv.displayName = qt;
var Dk = "MenuGroup", Mu = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(oe.div, { role: "group", ...r, ref: t });
  }
);
Mu.displayName = Dk;
var Ik = "MenuLabel", Vv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(oe.div, { ...r, ref: t });
  }
);
Vv.displayName = Ik;
var _i = "MenuItem", Oh = "menu.itemSelect", gc = v.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = v.useRef(null), a = ca(_i, e.__scopeMenu), i = Eu(_i, e.__scopeMenu), c = xe(t, s), l = v.useRef(!1), f = () => {
      const u = s.current;
      if (!n && u) {
        const h = new CustomEvent(Oh, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Oh, (p) => r == null ? void 0 : r(p), { once: !0 }), nu(u, h), h.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      zv,
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
          n || h && u.key === " " || ql.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
gc.displayName = _i;
var zv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = Eu(_i, n), i = Tv(n), c = v.useRef(null), l = xe(t, c), [f, u] = v.useState(!1), [h, p] = v.useState("");
    return v.useEffect(() => {
      const g = c.current;
      g && p((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ d.jsx(
      $s.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ d.jsx(Su, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ d.jsx(
          oe.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: X(
              e.onPointerMove,
              Ws((g) => {
                r ? a.onItemLeave(g) : (a.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: X(
              e.onPointerLeave,
              Ws((g) => a.onItemLeave(g))
            ),
            onFocus: X(e.onFocus, () => u(!0)),
            onBlur: X(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), jk = "MenuCheckboxItem", Bv = v.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(Uv, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      gc,
      {
        role: "menuitemcheckbox",
        "aria-checked": ki(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Au(n),
        onSelect: X(
          o.onSelect,
          () => r == null ? void 0 : r(ki(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bv.displayName = jk;
var Hv = "MenuRadioGroup", [Tk, $k] = Wr(
  Hv,
  { value: void 0, onValueChange: () => {
  } }
), Gv = v.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = Ot(r);
    return /* @__PURE__ */ d.jsx(Tk, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ d.jsx(Mu, { ...o, ref: t }) });
  }
);
Gv.displayName = Hv;
var Yv = "MenuRadioItem", Kv = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = $k(Yv, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ d.jsx(Uv, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ d.jsx(
      gc,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Au(s),
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
Kv.displayName = Yv;
var Pu = "MenuItemIndicator", [Uv, Wk] = Wr(
  Pu,
  { checked: !1 }
), qv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = Wk(Pu, n);
    return /* @__PURE__ */ d.jsx(
      ht,
      {
        present: r || ki(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          oe.span,
          {
            ...o,
            ref: t,
            "data-state": Au(s.checked)
          }
        )
      }
    );
  }
);
qv.displayName = Pu;
var Lk = "MenuSeparator", Xv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      oe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Xv.displayName = Lk;
var Fk = "MenuArrow", Zv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = vc(n);
    return /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
Zv.displayName = Fk;
var Vk = "MenuSub", [e7, Qv] = Wr(Vk), ss = "MenuSubTrigger", Jv = v.forwardRef(
  (e, t) => {
    const n = Lr(ss, e.__scopeMenu), r = ca(ss, e.__scopeMenu), o = Qv(ss, e.__scopeMenu), s = Eu(ss, e.__scopeMenu), a = v.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, l = { __scopeMenu: e.__scopeMenu }, f = v.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return v.useEffect(() => f, [f]), v.useEffect(() => {
      const u = i.current;
      return () => {
        window.clearTimeout(u), c(null);
      };
    }, [i, c]), /* @__PURE__ */ d.jsx(_u, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      zv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": ng(n.open),
        ...e,
        ref: Ln(t, o.onTriggerChange),
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
            var p, g;
            f();
            const h = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (h) {
              const m = (g = n.content) == null ? void 0 : g.dataset.side, y = m === "right", C = y ? -5 : 5, b = h[y ? "left" : "right"], x = h[y ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: u.clientX + C, y: u.clientY },
                  { x: b, y: h.top },
                  { x, y: h.top },
                  { x, y: h.bottom },
                  { x: b, y: h.bottom }
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
          e.disabled || h && u.key === " " || wk[r.dir].includes(u.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Jv.displayName = ss;
var eg = "MenuSubContent", tg = v.forwardRef(
  (e, t) => {
    const n = Wv(qt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(qt, e.__scopeMenu), a = ca(qt, e.__scopeMenu), i = Qv(eg, e.__scopeMenu), c = v.useRef(null), l = xe(t, c);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(ht, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      Nu,
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
          const u = f.currentTarget.contains(f.target), h = Ck[a.dir].includes(f.key);
          u && h && (s.onOpenChange(!1), (p = i.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
tg.displayName = eg;
function ng(e) {
  return e ? "open" : "closed";
}
function ki(e) {
  return e === "indeterminate";
}
function Au(e) {
  return ki(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function zk(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Bk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Hk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Bk(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Gk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, u = c.x, h = c.y;
    f > r != h > r && n < (u - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function Yk(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Gk(n, t);
}
function Ws(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Kk = $v, Uk = _u, qk = Lv, Xk = Fv, Zk = Mu, Qk = Vv, Jk = gc, eE = Bv, tE = Gv, nE = Kv, rE = qv, oE = Xv, sE = Zv, aE = Jv, iE = tg, bc = "DropdownMenu", [cE] = lt(
  bc,
  [jv]
), Mt = jv(), [lE, rg] = cE(bc), og = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = Mt(t), l = v.useRef(null), [f, u] = Nt({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: bc
  });
  return /* @__PURE__ */ d.jsx(
    lE,
    {
      scope: t,
      triggerId: Qe(),
      triggerRef: l,
      contentId: Qe(),
      open: f,
      onOpenChange: u,
      onOpenToggle: v.useCallback(() => u((h) => !h), [u]),
      modal: i,
      children: /* @__PURE__ */ d.jsx(Kk, { ...c, open: f, onOpenChange: u, dir: r, modal: i, children: n })
    }
  );
};
og.displayName = bc;
var sg = "DropdownMenuTrigger", ag = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = rg(sg, n), a = Mt(n);
    return /* @__PURE__ */ d.jsx(Uk, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      oe.button,
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
        ref: Ln(t, s.triggerRef),
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
ag.displayName = sg;
var dE = "DropdownMenuPortal", ig = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Mt(t);
  return /* @__PURE__ */ d.jsx(qk, { ...r, ...n });
};
ig.displayName = dE;
var cg = "DropdownMenuContent", lg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = rg(cg, n), s = Mt(n), a = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Xk,
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
lg.displayName = cg;
var uE = "DropdownMenuGroup", fE = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
    return /* @__PURE__ */ d.jsx(Zk, { ...o, ...r, ref: t });
  }
);
fE.displayName = uE;
var hE = "DropdownMenuLabel", dg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
    return /* @__PURE__ */ d.jsx(Qk, { ...o, ...r, ref: t });
  }
);
dg.displayName = hE;
var pE = "DropdownMenuItem", ug = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
    return /* @__PURE__ */ d.jsx(Jk, { ...o, ...r, ref: t });
  }
);
ug.displayName = pE;
var mE = "DropdownMenuCheckboxItem", vE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(eE, { ...o, ...r, ref: t });
});
vE.displayName = mE;
var gE = "DropdownMenuRadioGroup", bE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(tE, { ...o, ...r, ref: t });
});
bE.displayName = gE;
var xE = "DropdownMenuRadioItem", yE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(nE, { ...o, ...r, ref: t });
});
yE.displayName = xE;
var wE = "DropdownMenuItemIndicator", CE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(rE, { ...o, ...r, ref: t });
});
CE.displayName = wE;
var SE = "DropdownMenuSeparator", fg = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(oE, { ...o, ...r, ref: t });
});
fg.displayName = SE;
var _E = "DropdownMenuArrow", kE = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
    return /* @__PURE__ */ d.jsx(sE, { ...o, ...r, ref: t });
  }
);
kE.displayName = _E;
var EE = "DropdownMenuSubTrigger", NE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(aE, { ...o, ...r, ref: t });
});
NE.displayName = EE;
var ME = "DropdownMenuSubContent", PE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Mt(n);
  return /* @__PURE__ */ d.jsx(
    iE,
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
PE.displayName = ME;
var AE = og, RE = ag, OE = ig, DE = lg, IE = dg, Dh = ug, jE = fg;
function Ih(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var xc = "Popover", [hg] = lt(xc, [
  dr
]), la = dr(), [TE, ur] = hg(xc), pg = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = la(t), c = v.useRef(null), [l, f] = v.useState(!1), [u, h] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: xc
  });
  return /* @__PURE__ */ d.jsx(hc, { ...i, children: /* @__PURE__ */ d.jsx(
    TE,
    {
      scope: t,
      contentId: Qe(),
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
pg.displayName = xc;
var mg = "PopoverAnchor", vg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(mg, n), s = la(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return v.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ d.jsx(sa, { ...s, ...r, ref: t });
  }
);
vg.displayName = mg;
var gg = "PopoverTrigger", bg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(gg, n), s = la(n), a = xe(t, o.triggerRef), i = /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Sg(o.open),
        ...r,
        ref: a,
        onClick: X(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: i });
  }
);
bg.displayName = gg;
var Ru = "PopoverPortal", [$E, WE] = hg(Ru, {
  forceMount: void 0
}), xg = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ur(Ru, t);
  return /* @__PURE__ */ d.jsx($E, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(ht, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
xg.displayName = Ru;
var Co = "PopoverContent", yg = v.forwardRef(
  (e, t) => {
    const n = WE(Co, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ur(Co, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(ht, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(FE, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(VE, { ...o, ref: t }) });
  }
);
yg.displayName = Co;
var LE = /* @__PURE__ */ or("PopoverContent.RemoveScroll"), FE = v.forwardRef(
  (e, t) => {
    const n = ur(Co, e.__scopePopover), r = v.useRef(null), o = xe(t, r), s = v.useRef(!1);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return ec(a);
    }, []), /* @__PURE__ */ d.jsx(ra, { as: LE, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      wg,
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
), VE = v.forwardRef(
  (e, t) => {
    const n = ur(Co, e.__scopePopover), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      wg,
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
), wg = v.forwardRef(
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
    return Qi(), /* @__PURE__ */ d.jsx(
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
              pc,
              {
                "data-state": Sg(h.open),
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
), Cg = "PopoverClose", zE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(Cg, n);
    return /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
zE.displayName = Cg;
var BE = "PopoverArrow", HE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = la(n);
    return /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
HE.displayName = BE;
function Sg(e) {
  return e ? "open" : "closed";
}
var _g = pg, GE = vg, kg = bg, Eg = xg, Ou = yg, Du = "Progress", Iu = 100, [YE] = lt(Du), [KE, UE] = YE(Du), Ng = v.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = qE,
      ...a
    } = e;
    (o || o === 0) && !jh(o) && console.error(XE(`${o}`, "Progress"));
    const i = jh(o) ? o : Iu;
    r !== null && !Th(r, i) && console.error(ZE(`${r}`, "Progress"));
    const c = Th(r, i) ? r : null, l = Ei(c) ? s(c, i) : void 0;
    return /* @__PURE__ */ d.jsx(KE, { scope: n, value: c, max: i, children: /* @__PURE__ */ d.jsx(
      oe.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Ei(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": Ag(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
Ng.displayName = Du;
var Mg = "ProgressIndicator", Pg = v.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = UE(Mg, n);
    return /* @__PURE__ */ d.jsx(
      oe.div,
      {
        "data-state": Ag(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Pg.displayName = Mg;
function qE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ag(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ei(e) {
  return typeof e == "number";
}
function jh(e) {
  return Ei(e) && !isNaN(e) && e > 0;
}
function Th(e, t) {
  return Ei(e) && !isNaN(e) && e <= t && e >= 0;
}
function XE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Iu}\`.`;
}
function ZE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Iu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var QE = Ng, JE = Pg, ju = "Radio", [eN, Rg] = lt(ju), [tN, nN] = eN(ju), Og = v.forwardRef(
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
    } = e, [u, h] = v.useState(null), p = xe(t, (y) => h(y)), g = v.useRef(!1), m = u ? l || !!u.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(tN, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        oe.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Tg(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: p,
          onClick: X(e.onClick, (y) => {
            o || c == null || c(), m && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ d.jsx(
        jg,
        {
          control: u,
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
Og.displayName = ju;
var Dg = "RadioIndicator", Ig = v.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = nN(Dg, n);
    return /* @__PURE__ */ d.jsx(ht, { present: r || s.checked, children: /* @__PURE__ */ d.jsx(
      oe.span,
      {
        "data-state": Tg(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Ig.displayName = Dg;
var rN = "RadioBubbleInput", jg = v.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = xe(a, s), c = ac(n), l = ic(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const g = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ d.jsx(
      oe.input,
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
jg.displayName = rN;
function Tg(e) {
  return e ? "checked" : "unchecked";
}
var oN = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yc = "RadioGroup", [sN] = lt(yc, [
  jo,
  Rg
]), $g = jo(), Wg = Rg(), [aN, iN] = sN(yc), Lg = v.forwardRef(
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
    } = e, p = $g(n), g = Oo(l), [m, y] = Nt({
      prop: s,
      defaultProp: o ?? null,
      onChange: u,
      caller: yc
    });
    return /* @__PURE__ */ d.jsx(
      aN,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: m,
        onValueChange: y,
        children: /* @__PURE__ */ d.jsx(
          Cu,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: g,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              oe.div,
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
Lg.displayName = yc;
var Fg = "RadioGroupItem", Vg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = iN(Fg, n), a = s.disabled || r, i = $g(n), c = Wg(n), l = v.useRef(null), f = xe(t, l), u = s.value === o.value, h = v.useRef(!1);
    return v.useEffect(() => {
      const p = (m) => {
        oN.includes(m.key) && (h.current = !0);
      }, g = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ d.jsx(
      Su,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: u,
        children: /* @__PURE__ */ d.jsx(
          Og,
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
Vg.displayName = Fg;
var cN = "RadioGroupIndicator", zg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Wg(n);
    return /* @__PURE__ */ d.jsx(Ig, { ...o, ...r, ref: t });
  }
);
zg.displayName = cN;
var lN = Lg, dN = Vg, uN = zg, fN = [" ", "Enter", "ArrowUp", "ArrowDown"], hN = [" ", "Enter"], Ar = "Select", [wc, Cc, pN] = ta(Ar), [To] = lt(Ar, [
  pN,
  dr
]), Sc = dr(), [mN, fr] = To(Ar), [vN, gN] = To(Ar), Bg = (e) => {
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
    form: g
  } = e, m = Sc(t), [y, C] = v.useState(null), [b, x] = v.useState(null), [S, w] = v.useState(!1), E = Oo(l), [k, N] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ar
  }), [P, T] = Nt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Ar
  }), j = v.useRef(null), O = y ? g || !!y.closest("form") : !0, [$, F] = v.useState(/* @__PURE__ */ new Set()), B = Array.from($).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ d.jsx(hc, { ...m, children: /* @__PURE__ */ d.jsxs(
    mN,
    {
      required: p,
      scope: t,
      trigger: y,
      onTriggerChange: C,
      valueNode: b,
      onValueNodeChange: x,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: w,
      contentId: Qe(),
      value: P,
      onValueChange: T,
      open: k,
      onOpenChange: N,
      dir: E,
      triggerPointerDownPosRef: j,
      disabled: h,
      children: [
        /* @__PURE__ */ d.jsx(wc.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          vN,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((W) => {
              F((Y) => new Set(Y).add(W));
            }, []),
            onNativeOptionRemove: v.useCallback((W) => {
              F((Y) => {
                const D = new Set(Y);
                return D.delete(W), D;
              });
            }, []),
            children: n
          }
        ) }),
        O ? /* @__PURE__ */ d.jsxs(
          mb,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: P,
            onChange: (W) => T(W.target.value),
            disabled: h,
            form: g,
            children: [
              P === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from($)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
Bg.displayName = Ar;
var Hg = "SelectTrigger", Gg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Sc(n), a = fr(Hg, n), i = a.disabled || r, c = xe(t, a.onTriggerChange), l = Cc(n), f = v.useRef("touch"), [u, h, p] = gb((m) => {
      const y = l().filter((x) => !x.disabled), C = y.find((x) => x.value === a.value), b = bb(y, m, C);
      b !== void 0 && a.onValueChange(b.value);
    }), g = (m) => {
      i || (a.onOpenChange(!0), p()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
      oe.button,
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
        "data-placeholder": vb(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: X(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && g(m);
        }),
        onPointerDown: X(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const y = m.target;
          y.hasPointerCapture(m.pointerId) && y.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (g(m), m.preventDefault());
        }),
        onKeyDown: X(o.onKeyDown, (m) => {
          const y = u.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(y && m.key === " ") && fN.includes(m.key) && (g(), m.preventDefault());
        })
      }
    ) });
  }
);
Gg.displayName = Hg;
var Yg = "SelectValue", Kg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = fr(Yg, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, u = xe(t, c.onValueNodeChange);
    return ct(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d.jsx(
      oe.span,
      {
        ...i,
        ref: u,
        style: { pointerEvents: "none" },
        children: vb(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: a }) : s
      }
    );
  }
);
Kg.displayName = Yg;
var bN = "SelectIcon", Ug = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(oe.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Ug.displayName = bN;
var xN = "SelectPortal", qg = (e) => /* @__PURE__ */ d.jsx($r, { asChild: !0, ...e });
qg.displayName = xN;
var Rr = "SelectContent", Xg = v.forwardRef(
  (e, t) => {
    const n = fr(Rr, e.__scopeSelect), [r, o] = v.useState();
    if (ct(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Js.createPortal(
        /* @__PURE__ */ d.jsx(Zg, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(wc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Qg, { ...e, ref: t });
  }
);
Xg.displayName = Rr;
var tn = 10, [Zg, hr] = To(Rr), yN = "SelectContentImpl", wN = /* @__PURE__ */ or("SelectContent.RemoveScroll"), Qg = v.forwardRef(
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
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: y,
      //
      ...C
    } = e, b = fr(Rr, n), [x, S] = v.useState(null), [w, E] = v.useState(null), k = xe(t, (I) => S(I)), [N, P] = v.useState(null), [T, j] = v.useState(
      null
    ), O = Cc(n), [$, F] = v.useState(!1), B = v.useRef(!1);
    v.useEffect(() => {
      if (x) return ec(x);
    }, [x]), Qi();
    const W = v.useCallback(
      (I) => {
        const [re, ...te] = O().map((me) => me.ref.current), [de] = te.slice(-1), ge = document.activeElement;
        for (const me of I)
          if (me === ge || (me == null || me.scrollIntoView({ block: "nearest" }), me === re && w && (w.scrollTop = 0), me === de && w && (w.scrollTop = w.scrollHeight), me == null || me.focus(), document.activeElement !== ge)) return;
      },
      [O, w]
    ), Y = v.useCallback(
      () => W([N, x]),
      [W, N, x]
    );
    v.useEffect(() => {
      $ && Y();
    }, [$, Y]);
    const { onOpenChange: D, triggerPointerDownPosRef: L } = b;
    v.useEffect(() => {
      if (x) {
        let I = { x: 0, y: 0 };
        const re = (de) => {
          var ge, me;
          I = {
            x: Math.abs(Math.round(de.pageX) - (((ge = L.current) == null ? void 0 : ge.x) ?? 0)),
            y: Math.abs(Math.round(de.pageY) - (((me = L.current) == null ? void 0 : me.y) ?? 0))
          };
        }, te = (de) => {
          I.x <= 10 && I.y <= 10 ? de.preventDefault() : x.contains(de.target) || D(!1), document.removeEventListener("pointermove", re), L.current = null;
        };
        return L.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [x, D, L]), v.useEffect(() => {
      const I = () => D(!1);
      return window.addEventListener("blur", I), window.addEventListener("resize", I), () => {
        window.removeEventListener("blur", I), window.removeEventListener("resize", I);
      };
    }, [D]);
    const [Q, A] = gb((I) => {
      const re = O().filter((ge) => !ge.disabled), te = re.find((ge) => ge.ref.current === document.activeElement), de = bb(re, I, te);
      de && setTimeout(() => de.ref.current.focus());
    }), M = v.useCallback(
      (I, re, te) => {
        const de = !B.current && !te;
        (b.value !== void 0 && b.value === re || de) && (P(I), de && (B.current = !0));
      },
      [b.value]
    ), V = v.useCallback(() => x == null ? void 0 : x.focus(), [x]), z = v.useCallback(
      (I, re, te) => {
        const de = !B.current && !te;
        (b.value !== void 0 && b.value === re || de) && j(I);
      },
      [b.value]
    ), K = r === "popper" ? Xl : Jg, q = K === Xl ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: g,
      hideWhenDetached: m,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ d.jsx(
      Zg,
      {
        scope: n,
        content: x,
        viewport: w,
        onViewportChange: E,
        itemRefCallback: M,
        selectedItem: N,
        onItemLeave: V,
        itemTextRefCallback: z,
        focusSelectedItem: Y,
        selectedItemText: T,
        position: r,
        isPositioned: $,
        searchRef: Q,
        children: /* @__PURE__ */ d.jsx(ra, { as: wN, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (I) => {
              I.preventDefault();
            },
            onUnmountAutoFocus: X(o, (I) => {
              var re;
              (re = b.trigger) == null || re.focus({ preventScroll: !0 }), I.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (I) => I.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  K,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (I) => I.preventDefault(),
                    ...C,
                    ...q,
                    onPlaced: () => F(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: X(C.onKeyDown, (I) => {
                      const re = I.ctrlKey || I.altKey || I.metaKey;
                      if (I.key === "Tab" && I.preventDefault(), !re && I.key.length === 1 && A(I.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(I.key)) {
                        let de = O().filter((ge) => !ge.disabled).map((ge) => ge.ref.current);
                        if (["ArrowUp", "End"].includes(I.key) && (de = de.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(I.key)) {
                          const ge = I.target, me = de.indexOf(ge);
                          de = de.slice(me + 1);
                        }
                        setTimeout(() => W(de)), I.preventDefault();
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
Qg.displayName = yN;
var CN = "SelectItemAlignedPosition", Jg = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = fr(Rr, n), a = hr(Rr, n), [i, c] = v.useState(null), [l, f] = v.useState(null), u = xe(t, (k) => f(k)), h = Cc(n), p = v.useRef(!1), g = v.useRef(!0), { viewport: m, selectedItem: y, selectedItemText: C, focusSelectedItem: b } = a, x = v.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && m && y && C) {
      const k = s.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), P = s.valueNode.getBoundingClientRect(), T = C.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ge = T.left - N.left, me = P.left - ge, ke = k.left - me, De = k.width + ke, Te = Math.max(De, N.width), ot = window.innerWidth - tn, qe = Ih(me, [
          tn,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(tn, ot - Te)
        ]);
        i.style.minWidth = De + "px", i.style.left = qe + "px";
      } else {
        const ge = N.right - T.right, me = window.innerWidth - P.right - ge, ke = window.innerWidth - k.right - me, De = k.width + ke, Te = Math.max(De, N.width), ot = window.innerWidth - tn, qe = Ih(me, [
          tn,
          Math.max(tn, ot - Te)
        ]);
        i.style.minWidth = De + "px", i.style.right = qe + "px";
      }
      const j = h(), O = window.innerHeight - tn * 2, $ = m.scrollHeight, F = window.getComputedStyle(l), B = parseInt(F.borderTopWidth, 10), W = parseInt(F.paddingTop, 10), Y = parseInt(F.borderBottomWidth, 10), D = parseInt(F.paddingBottom, 10), L = B + W + $ + D + Y, Q = Math.min(y.offsetHeight * 5, L), A = window.getComputedStyle(m), M = parseInt(A.paddingTop, 10), V = parseInt(A.paddingBottom, 10), z = k.top + k.height / 2 - tn, K = O - z, q = y.offsetHeight / 2, I = y.offsetTop + q, re = B + W + I, te = L - re;
      if (re <= z) {
        const ge = j.length > 0 && y === j[j.length - 1].ref.current;
        i.style.bottom = "0px";
        const me = l.clientHeight - m.offsetTop - m.offsetHeight, ke = Math.max(
          K,
          q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ge ? V : 0) + me + Y
        ), De = re + ke;
        i.style.height = De + "px";
      } else {
        const ge = j.length > 0 && y === j[0].ref.current;
        i.style.top = "0px";
        const ke = Math.max(
          z,
          B + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ge ? M : 0) + q
        ) + te;
        i.style.height = ke + "px", m.scrollTop = re - z + m.offsetTop;
      }
      i.style.margin = `${tn}px 0`, i.style.minHeight = Q + "px", i.style.maxHeight = O + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    l,
    m,
    y,
    C,
    s.dir,
    r
  ]);
  ct(() => x(), [x]);
  const [S, w] = v.useState();
  ct(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = v.useCallback(
    (k) => {
      k && g.current === !0 && (x(), b == null || b(), g.current = !1);
    },
    [x, b]
  );
  return /* @__PURE__ */ d.jsx(
    _N,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: E,
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
            oe.div,
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
Jg.displayName = CN;
var SN = "SelectPopperPosition", Xl = v.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = tn,
    ...s
  } = e, a = Sc(n);
  return /* @__PURE__ */ d.jsx(
    pc,
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
Xl.displayName = SN;
var [_N, Tu] = To(Rr, {}), Zl = "SelectViewport", eb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = hr(Zl, n), a = Tu(Zl, n), i = xe(t, s.onViewportChange), c = v.useRef(0);
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
      /* @__PURE__ */ d.jsx(wc.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
        oe.div,
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
                const g = window.innerHeight - tn * 2, m = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), C = Math.max(m, y);
                if (C < g) {
                  const b = C + p, x = Math.min(g, b), S = b - x;
                  u.style.height = x + "px", u.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, u.style.justifyContent = "flex-end");
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
eb.displayName = Zl;
var tb = "SelectGroup", [kN, EN] = To(tb), nb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qe();
    return /* @__PURE__ */ d.jsx(kN, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(oe.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
nb.displayName = tb;
var rb = "SelectLabel", ob = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = EN(rb, n);
    return /* @__PURE__ */ d.jsx(oe.div, { id: o.id, ...r, ref: t });
  }
);
ob.displayName = rb;
var Ni = "SelectItem", [NN, sb] = To(Ni), ab = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = fr(Ni, n), c = hr(Ni, n), l = i.value === r, [f, u] = v.useState(s ?? ""), [h, p] = v.useState(!1), g = xe(
      t,
      (b) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, b, r, o);
      }
    ), m = Qe(), y = v.useRef("touch"), C = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      NN,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: m,
        isSelected: l,
        onItemTextChange: v.useCallback((b) => {
          u((x) => x || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          wc.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              oe.div,
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
                onFocus: X(a.onFocus, () => p(!0)),
                onBlur: X(a.onBlur, () => p(!1)),
                onClick: X(a.onClick, () => {
                  y.current !== "mouse" && C();
                }),
                onPointerUp: X(a.onPointerUp, () => {
                  y.current === "mouse" && C();
                }),
                onPointerDown: X(a.onPointerDown, (b) => {
                  y.current = b.pointerType;
                }),
                onPointerMove: X(a.onPointerMove, (b) => {
                  var x;
                  y.current = b.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : y.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: X(a.onPointerLeave, (b) => {
                  var x;
                  b.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: X(a.onKeyDown, (b) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (hN.includes(b.key) && C(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
ab.displayName = Ni;
var as = "SelectItemText", ib = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = fr(as, n), i = hr(as, n), c = sb(as, n), l = gN(as, n), [f, u] = v.useState(null), h = xe(
      t,
      (C) => u(C),
      c.onItemTextChange,
      (C) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, C, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, g = v.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: y } = l;
    return ct(() => (m(g), () => y(g)), [m, y, g]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(oe.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Js.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
ib.displayName = as;
var cb = "SelectItemIndicator", lb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return sb(cb, n).isSelected ? /* @__PURE__ */ d.jsx(oe.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
lb.displayName = cb;
var Ql = "SelectScrollUpButton", db = v.forwardRef((e, t) => {
  const n = hr(Ql, e.__scopeSelect), r = Tu(Ql, e.__scopeSelect), [o, s] = v.useState(!1), a = xe(t, r.onScrollButtonChange);
  return ct(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    fb,
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
db.displayName = Ql;
var Jl = "SelectScrollDownButton", ub = v.forwardRef((e, t) => {
  const n = hr(Jl, e.__scopeSelect), r = Tu(Jl, e.__scopeSelect), [o, s] = v.useState(!1), a = xe(t, r.onScrollButtonChange);
  return ct(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    fb,
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
ub.displayName = Jl;
var fb = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = hr("SelectScrollButton", n), a = v.useRef(null), i = Cc(n), c = v.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return v.useEffect(() => () => c(), [c]), ct(() => {
    var f;
    const l = i().find((u) => u.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d.jsx(
    oe.div,
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
}), MN = "SelectSeparator", hb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(oe.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
hb.displayName = MN;
var ed = "SelectArrow", pb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Sc(n), s = fr(ed, n), a = hr(ed, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t }) : null;
  }
);
pb.displayName = ed;
var PN = "SelectBubbleInput", mb = v.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = v.useRef(null), s = xe(r, o), a = ac(t);
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
      oe.select,
      {
        ...n,
        style: { ...lm, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
mb.displayName = PN;
function vb(e) {
  return e === "" || e === void 0;
}
function gb(e) {
  const t = Ot(e), n = v.useRef(""), r = v.useRef(0), o = v.useCallback(
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
function bb(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = AN(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function AN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var RN = Bg, ON = Gg, DN = Kg, IN = Ug, jN = qg, TN = Xg, $N = eb, WN = nb, LN = ob, FN = ab, VN = ib, zN = lb, BN = db, HN = ub, GN = hb, YN = pb, _c = "Switch", [KN] = lt(_c), [UN, qN] = KN(_c), xb = v.forwardRef(
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
    } = e, [h, p] = v.useState(null), g = xe(t, (x) => p(x)), m = v.useRef(!1), y = h ? f || !!h.closest("form") : !0, [C, b] = Nt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: _c
    });
    return /* @__PURE__ */ d.jsxs(UN, { scope: n, checked: C, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        oe.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": a,
          "data-state": Sb(C),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...u,
          ref: g,
          onClick: X(e.onClick, (x) => {
            b((S) => !S), y && (m.current = x.isPropagationStopped(), m.current || x.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ d.jsx(
        Cb,
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
xb.displayName = _c;
var yb = "SwitchThumb", wb = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = qN(yb, n);
    return /* @__PURE__ */ d.jsx(
      oe.span,
      {
        "data-state": Sb(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wb.displayName = yb;
var XN = "SwitchBubbleInput", Cb = v.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = xe(a, s), c = ac(n), l = ic(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const g = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(g);
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
Cb.displayName = XN;
function Sb(e) {
  return e ? "checked" : "unchecked";
}
var ZN = xb, QN = wb, kc = "Tabs", [JN] = lt(kc, [
  jo
]), _b = jo(), [eM, $u] = JN(kc), kb = v.forwardRef(
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
    } = e, f = Oo(i), [u, h] = Nt({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: kc
    });
    return /* @__PURE__ */ d.jsx(
      eM,
      {
        scope: n,
        baseId: Qe(),
        value: u,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d.jsx(
          oe.div,
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
kb.displayName = kc;
var Eb = "TabsList", Nb = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = $u(Eb, n), a = _b(n);
    return /* @__PURE__ */ d.jsx(
      Cu,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ d.jsx(
          oe.div,
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
Nb.displayName = Eb;
var Mb = "TabsTrigger", Pb = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = $u(Mb, n), i = _b(n), c = Rb(a.baseId, r), l = Ob(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ d.jsx(
      Su,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d.jsx(
          oe.button,
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
Pb.displayName = Mb;
var Ab = "TabsContent", tM = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = $u(Ab, n), c = Rb(i.baseId, r), l = Ob(i.baseId, r), f = r === i.value, u = v.useRef(f);
    return v.useEffect(() => {
      const h = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ d.jsx(ht, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ d.jsx(
      oe.div,
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
tM.displayName = Ab;
function Rb(e, t) {
  return `${e}-trigger-${t}`;
}
function Ob(e, t) {
  return `${e}-content-${t}`;
}
var nM = kb, rM = Nb, oM = Pb, Wu = "ToastProvider", [Lu, sM, aM] = ta("Toast"), [Db] = lt("Toast", [aM]), [iM, Ec] = Db(Wu), Ib = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = v.useState(null), [l, f] = v.useState(0), u = v.useRef(!1), h = v.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Wu}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(Lu.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
    iM,
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
Ib.displayName = Wu;
var jb = "ToastViewport", cM = ["F8"], td = "toast.viewportPause", nd = "toast.viewportResume", Tb = v.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = cM,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = Ec(jb, n), i = sM(n), c = v.useRef(null), l = v.useRef(null), f = v.useRef(null), u = v.useRef(null), h = xe(t, u, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), g = a.toastCount > 0;
    v.useEffect(() => {
      const y = (C) => {
        var x;
        r.length !== 0 && r.every((S) => C[S] || C.code === S) && ((x = u.current) == null || x.focus());
      };
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, [r]), v.useEffect(() => {
      const y = c.current, C = u.current;
      if (g && y && C) {
        const b = () => {
          if (!a.isClosePausedRef.current) {
            const E = new CustomEvent(td);
            C.dispatchEvent(E), a.isClosePausedRef.current = !0;
          }
        }, x = () => {
          if (a.isClosePausedRef.current) {
            const E = new CustomEvent(nd);
            C.dispatchEvent(E), a.isClosePausedRef.current = !1;
          }
        }, S = (E) => {
          !y.contains(E.relatedTarget) && x();
        }, w = () => {
          y.contains(document.activeElement) || x();
        };
        return y.addEventListener("focusin", b), y.addEventListener("focusout", S), y.addEventListener("pointermove", b), y.addEventListener("pointerleave", w), window.addEventListener("blur", b), window.addEventListener("focus", x), () => {
          y.removeEventListener("focusin", b), y.removeEventListener("focusout", S), y.removeEventListener("pointermove", b), y.removeEventListener("pointerleave", w), window.removeEventListener("blur", b), window.removeEventListener("focus", x);
        };
      }
    }, [g, a.isClosePausedRef]);
    const m = v.useCallback(
      ({ tabbingDirection: y }) => {
        const b = i().map((x) => {
          const S = x.ref.current, w = [S, ...wM(S)];
          return y === "forwards" ? w : w.reverse();
        });
        return (y === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return v.useEffect(() => {
      const y = u.current;
      if (y) {
        const C = (b) => {
          var w, E, k;
          const x = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !x) {
            const N = document.activeElement, P = b.shiftKey;
            if (b.target === y && P) {
              (w = l.current) == null || w.focus();
              return;
            }
            const O = m({ tabbingDirection: P ? "backwards" : "forwards" }), $ = O.findIndex((F) => F === N);
            fl(O.slice($ + 1)) ? b.preventDefault() : P ? (E = l.current) == null || E.focus() : (k = f.current) == null || k.focus();
          }
        };
        return y.addEventListener("keydown", C), () => y.removeEventListener("keydown", C);
      }
    }, [i, m]), /* @__PURE__ */ d.jsxs(
      TC,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: g ? void 0 : "none" },
        children: [
          g && /* @__PURE__ */ d.jsx(
            rd,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const y = m({
                  tabbingDirection: "forwards"
                });
                fl(y);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(Lu.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(oe.ol, { tabIndex: -1, ...s, ref: h }) }),
          g && /* @__PURE__ */ d.jsx(
            rd,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const y = m({
                  tabbingDirection: "backwards"
                });
                fl(y);
              }
            }
          )
        ]
      }
    );
  }
);
Tb.displayName = jb;
var $b = "ToastFocusProxy", rd = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = Ec($b, n);
    return /* @__PURE__ */ d.jsx(
      Ui,
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
rd.displayName = $b;
var da = "Toast", lM = "toast.swipeStart", dM = "toast.swipeMove", uM = "toast.swipeCancel", fM = "toast.swipeEnd", Wb = v.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = Nt({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: da
    });
    return /* @__PURE__ */ d.jsx(ht, { present: n || i, children: /* @__PURE__ */ d.jsx(
      mM,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Ot(e.onPause),
        onResume: Ot(e.onResume),
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
Wb.displayName = da;
var [hM, pM] = Db(da, {
  onClose() {
  }
}), mM = v.forwardRef(
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
      ...g
    } = e, m = Ec(da, n), [y, C] = v.useState(null), b = xe(t, (F) => C(F)), x = v.useRef(null), S = v.useRef(null), w = o || m.duration, E = v.useRef(0), k = v.useRef(w), N = v.useRef(0), { onToastAdd: P, onToastRemove: T } = m, j = Ot(() => {
      var B;
      (y == null ? void 0 : y.contains(document.activeElement)) && ((B = m.viewport) == null || B.focus()), a();
    }), O = v.useCallback(
      (F) => {
        !F || F === 1 / 0 || (window.clearTimeout(N.current), E.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(j, F));
      },
      [j]
    );
    v.useEffect(() => {
      const F = m.viewport;
      if (F) {
        const B = () => {
          O(k.current), l == null || l();
        }, W = () => {
          const Y = (/* @__PURE__ */ new Date()).getTime() - E.current;
          k.current = k.current - Y, window.clearTimeout(N.current), c == null || c();
        };
        return F.addEventListener(td, W), F.addEventListener(nd, B), () => {
          F.removeEventListener(td, W), F.removeEventListener(nd, B);
        };
      }
    }, [m.viewport, w, c, l, O]), v.useEffect(() => {
      s && !m.isClosePausedRef.current && O(w);
    }, [s, w, m.isClosePausedRef, O]), v.useEffect(() => (P(), () => T()), [P, T]);
    const $ = v.useMemo(() => y ? Yb(y) : null, [y]);
    return m.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      $ && /* @__PURE__ */ d.jsx(
        vM,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: $
        }
      ),
      /* @__PURE__ */ d.jsx(hM, { scope: n, onClose: j, children: Js.createPortal(
        /* @__PURE__ */ d.jsx(Lu.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
          jC,
          {
            asChild: !0,
            onEscapeKeyDown: X(i, () => {
              m.isFocusedToastEscapeKeyDownRef.current || j(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d.jsx(
              oe.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...g,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: X(e.onKeyDown, (F) => {
                  F.key === "Escape" && (i == null || i(F.nativeEvent), F.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, j()));
                }),
                onPointerDown: X(e.onPointerDown, (F) => {
                  F.button === 0 && (x.current = { x: F.clientX, y: F.clientY });
                }),
                onPointerMove: X(e.onPointerMove, (F) => {
                  if (!x.current) return;
                  const B = F.clientX - x.current.x, W = F.clientY - x.current.y, Y = !!S.current, D = ["left", "right"].includes(m.swipeDirection), L = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, Q = D ? L(0, B) : 0, A = D ? 0 : L(0, W), M = F.pointerType === "touch" ? 10 : 2, V = { x: Q, y: A }, z = { originalEvent: F, delta: V };
                  Y ? (S.current = V, Ta(dM, u, z, {
                    discrete: !1
                  })) : $h(V, m.swipeDirection, M) ? (S.current = V, Ta(lM, f, z, {
                    discrete: !1
                  }), F.target.setPointerCapture(F.pointerId)) : (Math.abs(B) > M || Math.abs(W) > M) && (x.current = null);
                }),
                onPointerUp: X(e.onPointerUp, (F) => {
                  const B = S.current, W = F.target;
                  if (W.hasPointerCapture(F.pointerId) && W.releasePointerCapture(F.pointerId), S.current = null, x.current = null, B) {
                    const Y = F.currentTarget, D = { originalEvent: F, delta: B };
                    $h(B, m.swipeDirection, m.swipeThreshold) ? Ta(fM, p, D, {
                      discrete: !0
                    }) : Ta(
                      uM,
                      h,
                      D,
                      {
                        discrete: !0
                      }
                    ), Y.addEventListener("click", (L) => L.preventDefault(), {
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
), vM = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Ec(da, t), [s, a] = v.useState(!1), [i, c] = v.useState(!1);
  return xM(() => a(!0)), v.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ d.jsx($r, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ui, { ...r, children: s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, gM = "ToastTitle", Lb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(oe.div, { ...r, ref: t });
  }
);
Lb.displayName = gM;
var bM = "ToastDescription", Fb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(oe.div, { ...r, ref: t });
  }
);
Fb.displayName = bM;
var Vb = "ToastAction", zb = v.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ d.jsx(Gb, { altText: n, asChild: !0, children: /* @__PURE__ */ d.jsx(Hb, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Vb}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
zb.displayName = Vb;
var Bb = "ToastClose", Hb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = pM(Bb, n);
    return /* @__PURE__ */ d.jsx(Gb, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      oe.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: X(e.onClick, o.onClose)
      }
    ) });
  }
);
Hb.displayName = Bb;
var Gb = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    oe.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Yb(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), yM(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Yb(r));
    }
  }), t;
}
function Ta(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? nu(o, s) : o.dispatchEvent(s);
}
var $h = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function xM(e = () => {
}) {
  const t = Ot(e);
  ct(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function yM(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function wM(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function fl(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var CM = Ib, SM = Tb, _M = Wb, kM = Lb, EM = Fb, NM = zb, [Nc] = lt("Tooltip", [
  dr
]), Mc = dr(), Kb = "TooltipProvider", MM = 700, od = "tooltip.open", [PM, Fu] = Nc(Kb), Ub = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = MM,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = v.useRef(!0), i = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    PM,
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
Ub.displayName = Kb;
var Ls = "Tooltip", [AM, ua] = Nc(Ls), qb = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Fu(Ls, e.__scopeTooltip), l = Mc(t), [f, u] = v.useState(null), h = Qe(), p = v.useRef(0), g = a ?? c.disableHoverableContent, m = i ?? c.delayDuration, y = v.useRef(!1), [C, b] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(od))) : c.onClose(), s == null || s(k);
    },
    caller: Ls
  }), x = v.useMemo(() => C ? y.current ? "delayed-open" : "instant-open" : "closed", [C]), S = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y.current = !1, b(!0);
  }, [b]), w = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b(!1);
  }, [b]), E = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      y.current = !0, b(!0), p.current = 0;
    }, m);
  }, [m, b]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ d.jsx(hc, { ...l, children: /* @__PURE__ */ d.jsx(
    AM,
    {
      scope: t,
      contentId: h,
      open: C,
      stateAttribute: x,
      trigger: f,
      onTriggerChange: u,
      onTriggerEnter: v.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : S();
      }, [c.isOpenDelayedRef, E, S]),
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
qb.displayName = Ls;
var sd = "TooltipTrigger", Xb = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ua(sd, n), s = Fu(sd, n), a = Mc(n), i = v.useRef(null), c = xe(t, i, o.onTriggerChange), l = v.useRef(!1), f = v.useRef(!1), u = v.useCallback(() => l.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      oe.button,
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
Xb.displayName = sd;
var Vu = "TooltipPortal", [RM, OM] = Nc(Vu, {
  forceMount: void 0
}), Zb = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = ua(Vu, t);
  return /* @__PURE__ */ d.jsx(RM, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(ht, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
Zb.displayName = Vu;
var So = "TooltipContent", Qb = v.forwardRef(
  (e, t) => {
    const n = OM(So, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = ua(So, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(ht, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d.jsx(Jb, { side: o, ...s, ref: t }) : /* @__PURE__ */ d.jsx(DM, { side: o, ...s, ref: t }) });
  }
), DM = v.forwardRef((e, t) => {
  const n = ua(So, e.__scopeTooltip), r = Fu(So, e.__scopeTooltip), o = v.useRef(null), s = xe(t, o), [a, i] = v.useState(null), { trigger: c, onClose: l } = n, f = o.current, { onPointerInTransitChange: u } = r, h = v.useCallback(() => {
    i(null), u(!1);
  }, [u]), p = v.useCallback(
    (g, m) => {
      const y = g.currentTarget, C = { x: g.clientX, y: g.clientY }, b = WM(C, y.getBoundingClientRect()), x = LM(C, b), S = FM(m.getBoundingClientRect()), w = zM([...x, ...S]);
      i(w), u(!0);
    },
    [u]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (c && f) {
      const g = (y) => p(y, f), m = (y) => p(y, c);
      return c.addEventListener("pointerleave", g), f.addEventListener("pointerleave", m), () => {
        c.removeEventListener("pointerleave", g), f.removeEventListener("pointerleave", m);
      };
    }
  }, [c, f, p, h]), v.useEffect(() => {
    if (a) {
      const g = (m) => {
        const y = m.target, C = { x: m.clientX, y: m.clientY }, b = (c == null ? void 0 : c.contains(y)) || (f == null ? void 0 : f.contains(y)), x = !VM(C, a);
        b ? h() : x && (h(), l());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, f, a, l, h]), /* @__PURE__ */ d.jsx(Jb, { ...e, ref: s });
}), [IM, jM] = Nc(Ls, { isInside: !1 }), TM = /* @__PURE__ */ im("TooltipContent"), Jb = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = ua(So, n), l = Mc(n), { onClose: f } = c;
    return v.useEffect(() => (document.addEventListener(od, f), () => document.removeEventListener(od, f)), [f]), v.useEffect(() => {
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
          pc,
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
              /* @__PURE__ */ d.jsx(TM, { children: r }),
              /* @__PURE__ */ d.jsx(IM, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(Z2, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Qb.displayName = So;
var ex = "TooltipArrow", $M = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Mc(n);
    return jM(
      ex,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
$M.displayName = ex;
function WM(e, t) {
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
function LM(e, t, n = 5) {
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
function FM(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function VM(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, u = c.x, h = c.y;
    f > r != h > r && n < (u - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function zM(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), BM(t);
}
function BM(e) {
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
var HM = Ub, GM = qb, YM = Xb, KM = Zb, UM = Qb;
function tx(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = tx(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function nx() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = tx(e)) && (r && (r += " "), r += t);
  return r;
}
const Wh = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Lh = nx, he = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Lh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], u = s == null ? void 0 : s[l];
    if (f === null) return null;
    const h = Wh(f) || Wh(u);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [u, h] = f;
    return h === void 0 || (l[u] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: u, className: h, ...p } = f;
    return Object.entries(p).every((g) => {
      let [m, y] = g;
      return Array.isArray(y) ? y.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === y;
    }) ? [
      ...l,
      u,
      h
    ] : l;
  }, []);
  return Lh(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, zu = "-", qM = (e) => {
  const t = ZM(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(zu);
      return i[0] === "" && i.length !== 1 && i.shift(), rx(i, t) || XM(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, rx = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? rx(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(zu);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Fh = /^\[(.+)\]$/, XM = (e) => {
  if (Fh.test(e)) {
    const t = Fh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ZM = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    ad(n[o], r, o, t);
  return r;
}, ad = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Vh(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (QM(o)) {
        ad(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      ad(a, Vh(t, s), n, r);
    });
  });
}, Vh = (e, t) => {
  let n = e;
  return t.split(zu).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, QM = (e) => e.isThemeGetter, JM = (e) => {
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
}, id = "!", cd = ":", eP = cd.length, tP = (e) => {
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
        if (m === cd) {
          s.push(o.slice(c, g)), c = g + eP;
          continue;
        }
        if (m === "/") {
          l = g;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(c), u = nP(f), h = u !== f, p = l && l > c ? l - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: u,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + cd, s = r;
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
}, nP = (e) => e.endsWith(id) ? e.substring(0, e.length - 1) : e.startsWith(id) ? e.substring(1) : e, rP = (e) => {
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
}, oP = (e) => ({
  cache: JM(e.cacheSize),
  parseClassName: tP(e),
  sortModifiers: rP(e),
  ...qM(e)
}), sP = /\s+/, aP = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(sP);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: u,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = n(f);
    if (u) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let y = !!m, C = r(y ? g.substring(0, m) : g);
    if (!C) {
      if (!y) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(g), !C) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      y = !1;
    }
    const b = s(h).join(":"), x = p ? b + id : b, S = x + C;
    if (a.includes(S))
      continue;
    a.push(S);
    const w = o(C, y);
    for (let E = 0; E < w.length; ++E) {
      const k = w[E];
      a.push(x + k);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function iP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ox(t)) && (r && (r += " "), r += n);
  return r;
}
const ox = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ox(e[r])) && (n && (n += " "), n += t);
  return n;
};
function zh(e, ...t) {
  let n, r, o, s = a;
  function a(c) {
    const l = t.reduce((f, u) => u(f), e());
    return n = oP(l), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const f = aP(c, n);
    return o(c, f), f;
  }
  return function() {
    return s(iP.apply(null, arguments));
  };
}
const Je = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, sx = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ax = /^\((?:(\w[\w-]*):)?(.+)\)$/i, cP = /^\d+\/\d+$/, lP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, uP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, fP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, hP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (e) => cP.test(e), Ce = (e) => !!e && !Number.isNaN(Number(e)), Yn = (e) => !!e && Number.isInteger(Number(e)), hl = (e) => e.endsWith("%") && Ce(e.slice(0, -1)), In = (e) => lP.test(e), pP = () => !0, mP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  dP.test(e) && !uP.test(e)
), ix = () => !1, vP = (e) => fP.test(e), gP = (e) => hP.test(e), bP = (e) => !ae(e) && !ie(e), xP = (e) => $o(e, dx, ix), ae = (e) => sx.test(e), vr = (e) => $o(e, ux, mP), pl = (e) => $o(e, _P, Ce), Bh = (e) => $o(e, cx, ix), yP = (e) => $o(e, lx, gP), $a = (e) => $o(e, fx, vP), ie = (e) => ax.test(e), Jo = (e) => Wo(e, ux), wP = (e) => Wo(e, kP), Hh = (e) => Wo(e, cx), CP = (e) => Wo(e, dx), SP = (e) => Wo(e, lx), Wa = (e) => Wo(e, fx, !0), $o = (e, t, n) => {
  const r = sx.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Wo = (e, t, n = !1) => {
  const r = ax.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, cx = (e) => e === "position" || e === "percentage", lx = (e) => e === "image" || e === "url", dx = (e) => e === "length" || e === "size" || e === "bg-size", ux = (e) => e === "length", _P = (e) => e === "number", kP = (e) => e === "family-name", fx = (e) => e === "shadow", Gh = () => {
  const e = Je("color"), t = Je("font"), n = Je("text"), r = Je("font-weight"), o = Je("tracking"), s = Je("leading"), a = Je("breakpoint"), i = Je("container"), c = Je("spacing"), l = Je("radius"), f = Je("shadow"), u = Je("inset-shadow"), h = Je("text-shadow"), p = Je("drop-shadow"), g = Je("blur"), m = Je("perspective"), y = Je("aspect"), C = Je("ease"), b = Je("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], w = () => [...S(), ie, ae], E = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], N = () => [ie, ae, c], P = () => [Ur, "full", "auto", ...N()], T = () => [Yn, "none", "subgrid", ie, ae], j = () => ["auto", {
    span: ["full", Yn, ie, ae]
  }, Yn, ie, ae], O = () => [Yn, "auto", ie, ae], $ = () => ["auto", "min", "max", "fr", ie, ae], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...N()], Y = () => [Ur, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], D = () => [e, ie, ae], L = () => [...S(), Hh, Bh, {
    position: [ie, ae]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", CP, xP, {
    size: [ie, ae]
  }], M = () => [hl, Jo, vr], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ie,
    ae
  ], z = () => ["", Ce, Jo, vr], K = () => ["solid", "dashed", "dotted", "double"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], I = () => [Ce, hl, Hh, Bh], re = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    ie,
    ae
  ], te = () => ["none", Ce, ie, ae], de = () => ["none", Ce, ie, ae], ge = () => [Ce, ie, ae], me = () => [Ur, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [In],
      breakpoint: [In],
      color: [pP],
      container: [In],
      "drop-shadow": [In],
      ease: ["in", "out", "in-out"],
      font: [bP],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [In],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [In],
      shadow: [In],
      spacing: ["px", Ce],
      text: [In],
      "text-shadow": [In],
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
        aspect: ["auto", "square", Ur, ae, ie, y]
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
        columns: [Ce, ae, ie, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
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
        z: [Yn, "auto", ie, ae]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ur, "full", "auto", i, ...N()]
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
        flex: [Ce, Ur, "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ce, ie, ae]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ce, ie, ae]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Yn, "first", "last", "none", ie, ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": T()
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
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": T()
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
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
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
        content: ["normal", ...F()]
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
        "place-content": F()
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
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: W()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: W()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: W()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: W()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: W()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: W()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: W()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: W()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: W()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        font: [r, ie, pl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", hl, ae]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wP, ae, t]
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
        tracking: [o, ie, ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ce, "none", ie, pl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ie, ae]
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
        list: ["disc", "decimal", "none", ie, ae]
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ce, "from-font", "auto", ie, vr]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ce, "auto", ie, ae]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie, ae]
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
        content: ["none", ie, ae]
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
        bg: L()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Q()
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
          }, Yn, ie, ae],
          radial: ["", ie, ae],
          conic: [Yn, ie, ae]
        }, SP, yP]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: V()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": V()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": V()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": V()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": V()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": V()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": V()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": V()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": V()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": V()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": V()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": V()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": V()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": V()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": V()
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ce, ie, ae]
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
        outline: D()
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
        shadow: D()
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
        "inset-shadow": D()
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
        ring: D()
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
        "ring-offset": D()
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
        "inset-ring": D()
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
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ce, ie, ae]
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
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": I()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": I()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": I()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": I()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": I()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": I()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": I()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [ie, ae]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": I()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: L()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Q()
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
        mask: ["none", ie, ae]
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
          ie,
          ae
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: re()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ce, ie, ae]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ce, ie, ae]
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
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ce, ie, ae]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ce, ie, ae]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ce, ie, ae]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ce, ie, ae]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ce, ie, ae]
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
          ie,
          ae
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": re()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ce, ie, ae]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ce, ie, ae]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ce, ie, ae]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ce, ie, ae]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ce, ie, ae]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ce, ie, ae]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ce, ie, ae]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ce, ie, ae]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ie, ae]
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
        duration: [Ce, "initial", ie, ae]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", C, ie, ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ce, ie, ae]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, ie, ae]
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
        perspective: [m, ie, ae]
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
        rotate: te()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": te()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": te()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": te()
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
        skew: ge()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ge()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ge()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ie, ae, "", "none", "gpu", "cpu"]
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
        translate: me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": me()
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
        accent: D()
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
        caret: D()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie, ae]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", ie, ae]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Jo, vr, pl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, EP = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: s = {}
}) => (is(e, "cacheSize", t), is(e, "prefix", n), is(e, "experimentalParseClassName", r), La(e.theme, s.theme), La(e.classGroups, s.classGroups), La(e.conflictingClassGroups, s.conflictingClassGroups), La(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), is(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), Fa(e.theme, o.theme), Fa(e.classGroups, o.classGroups), Fa(e.conflictingClassGroups, o.conflictingClassGroups), Fa(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), hx(e, o, "orderSensitiveModifiers"), e), is = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, La = (e, t) => {
  if (t)
    for (const n in t)
      is(e, n, t[n]);
}, Fa = (e, t) => {
  if (t)
    for (const n in t)
      hx(e, t, n);
}, hx = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, NP = (e, ...t) => typeof e == "function" ? zh(Gh, e, ...t) : zh(() => EP(Gh(), e), ...t), MP = [
  "xxxs",
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl"
], PP = NP({
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
}), R = (...e) => PP(nx(e)), at = (e, t = {}) => {
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
}, px = (e, t) => {
  if (typeof e == "string" || typeof e == "number") return e;
  if (e !== null && typeof e == "object" && "id" in e) {
    const { id: n } = e;
    if (typeof n == "string" || typeof n == "number") return n;
  }
  throw new Error(
    `${t}: values must be strings, numbers, or objects with a string or number \`id\`. Pass \`getItemValue\` for any other shape.`
  );
}, AP = he(
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
), RP = he(
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
), Mi = _.forwardRef(
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
      className: R(RP({ intent: r }), s),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), a ? /* @__PURE__ */ d.jsx(Dh, { ...l, children: e }) : /* @__PURE__ */ d.jsxs(Dh, { ...l, children: [
      at(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Mi.displayName = "DropdownItem";
const OP = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  jE,
  {
    ref: n,
    className: R(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
OP.displayName = "DropdownSeparator";
const DP = _.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  IE,
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
DP.displayName = "DropdownLabel";
const Pc = _.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(OE, { children: /* @__PURE__ */ d.jsx(
  DE,
  {
    ref: o,
    className: R(AP({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Pc.displayName = "DropdownContent";
const Ac = ({
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
  return t !== void 0 && (s.open = t), n !== void 0 && (s.onOpenChange = n), /* @__PURE__ */ d.jsx(AE, { ...s, children: e });
};
Ac.displayName = "Dropdown";
const Rc = _.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ d.jsx(
  RE,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Rc.displayName = "DropdownTrigger";
const t7 = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ d.jsx("div", { className: r, children: /* @__PURE__ */ d.jsxs(Ac, { children: [
  /* @__PURE__ */ d.jsx(
    Rc,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ d.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ d.jsx(j2, { size: 16, className: "flex-[0_0_16px]" }),
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
  /* @__PURE__ */ d.jsxs(Pc, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), mx = _.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...s
  }, a) => e === "single" ? /* @__PURE__ */ d.jsx(
    ch,
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
    ch,
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
mx.displayName = "Accordion";
const vx = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
    _C,
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
vx.displayName = "AccordionItem";
const gx = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(kC, { className: "flex", children: /* @__PURE__ */ d.jsxs(
  EC,
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
gx.displayName = "AccordionTrigger";
const bx = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
  NC,
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
bx.displayName = "AccordionContent";
const n7 = Object.assign(mx, {
  Item: vx,
  Trigger: gx,
  Content: bx
}), Yh = he(
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
), IP = _.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...s
  }, a) => {
    const c = t || (e === "danger" ? W2 : void 0);
    return o ? /* @__PURE__ */ d.jsx(
      jr,
      {
        className: R(Yh({ intent: e }), n),
        ref: a,
        ...s,
        children: r
      }
    ) : /* @__PURE__ */ d.jsxs(
      "span",
      {
        className: R(Yh({ intent: e }), n),
        ref: a,
        ...s,
        children: [
          e === "danger" && c && at(c, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
IP.displayName = "Badge";
const jP = he("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Va = he(
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
), TP = he("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), $P = _.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Jd,
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
        className: R(jP({ size: t }), o),
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
                    className: R(TP({ size: t }))
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
$P.displayName = "Breadcrumbs";
const WP = he(
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
), xx = _.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...s
  }, a) => /* @__PURE__ */ d.jsx(
    QE,
    {
      ref: a,
      className: R(WP({ size: r }), o),
      value: e,
      max: t,
      ...s,
      children: /* @__PURE__ */ d.jsx(
        JE,
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
xx.displayName = "ProgressIndicator.Linear";
const LP = he("flex items-center", {
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
}), FP = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Pi = {
  sm: 12,
  md: 10
}, Kh = {
  sm: (50 - Pi.sm / 2).toString(),
  md: (50 - Pi.md / 2).toString()
}, yx = _.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, s) => /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: s,
      role: "status",
      className: R(LP({ size: t, layout: e }), r),
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
            className: R(FP[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ d.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Kh[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Pi[t]
                }
              ),
              /* @__PURE__ */ d.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Kh[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: Pi[t],
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
yx.displayName = "ProgressIndicator.Circular";
const Oc = {
  Linear: xx,
  Circular: yx
}, ml = he(
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
), za = he("", {
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
}), Ve = _.forwardRef(
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
    const u = s ? jr : "button", h = !!((r || o) && !c && !(r && o)), p = !!(c && !r && !o), g = a || l.disabled;
    return a ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          ml({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          "relative",
          n
        ),
        ...l,
        disabled: g,
        children: [
          /* @__PURE__ */ d.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            at(r, {
              className: R(
                za({ size: t, iconOnly: h, text: e === "text" })
              )
            }),
            c,
            at(o, {
              className: R(
                za({ size: t, iconOnly: h, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ d.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ d.jsx(Oc.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          ml({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          n
        ),
        ...l,
        disabled: g,
        children: [
          at(r, {
            className: R(
              za({ size: t, iconOnly: h, text: e === "text" })
            )
          }),
          c,
          at(o, {
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
          ml({ intent: e, size: t, textOnly: p, danger: i }),
          n
        ),
        children: c,
        ...l,
        disabled: g
      }
    );
  }
);
Ve.displayName = "Button";
function VP(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const vl = {}, cs = {};
function Nr(e, t) {
  try {
    const r = (vl[e] || (vl[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in cs ? cs[r] : Uh(r, r.split(":"));
  } catch {
    if (e in cs) return cs[e];
    const n = e == null ? void 0 : e.match(zP);
    return n ? Uh(e, n.slice(1)) : NaN;
  }
}
const zP = /([+-]\d\d):?(\d\d)?/;
function Uh(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return cs[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class wn extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Nr(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), wx(this), ld(this)) : this.setTime(Date.now());
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
    const t = -Nr(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), ld(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new wn(+new Date(t), this.timeZone);
  }
  //#endregion
}
const qh = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!qh.test(e)) return;
  const t = e.replace(qh, "$1UTC");
  wn.prototype[t] && (e.startsWith("get") ? wn.prototype[e] = function() {
    return this.internal[t]();
  } : (wn.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), BP(this), +this;
  }, wn.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), ld(this), +this;
  }));
});
function ld(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Nr(e.timeZone, e) * 60));
}
function BP(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), wx(e);
}
function wx(e) {
  const t = Nr(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, u = Math.round(-(Nr(e.timeZone, e) * 60)) % 60;
  (u || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + f));
  const h = Nr(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), m = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, y = p !== n, C = m - c;
  if (y && C) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C);
    const b = Nr(e.timeZone, e), x = b > 0 ? Math.floor(b) : Math.ceil(b), S = p - x;
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
    return `${t} GMT${n}${r}${o} (${VP(this.timeZone, this)})`;
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
const Cx = 6048e5, HP = 864e5, Xh = Symbol.for("constructDateFrom");
function rt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Xh in e ? e[Xh](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ie(e, t) {
  return rt(t || e, e);
}
function Sx(e, t, n) {
  const r = Ie(e, n == null ? void 0 : n.in);
  return isNaN(t) ? rt(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function _x(e, t, n) {
  const r = Ie(e, n == null ? void 0 : n.in);
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
let GP = {};
function fa() {
  return GP;
}
function _o(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Ie(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function Fs(e, t) {
  return _o(e, { ...t, weekStartsOn: 1 });
}
function kx(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = rt(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Fs(o), a = rt(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Fs(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Zh(e) {
  const t = Ie(e), n = new Date(
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
  const n = Ie(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Ex(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Vs(r), a = Vs(o), i = +s - Zh(s), c = +a - Zh(a);
  return Math.round((i - c) / HP);
}
function YP(e, t) {
  const n = kx(e, t), r = rt(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Fs(r);
}
function KP(e, t, n) {
  return Sx(e, t * 7, n);
}
function UP(e, t, n) {
  return _x(e, t * 12, n);
}
function qP(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = rt.bind(null, o));
    const s = Ie(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), rt(r, n || NaN);
}
function XP(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = rt.bind(null, o));
    const s = Ie(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), rt(r, n || NaN);
}
function ZP(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Vs(r) == +Vs(o);
}
function Nx(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function QP(e) {
  return !(!Nx(e) && typeof e != "number" || isNaN(+Ie(e)));
}
function JP(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function e4(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function t4(e, t) {
  const [n, r] = Lo(e, t.start, t.end);
  return { start: n, end: r };
}
function n4(e, t) {
  const { start: n, end: r } = t4(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(rt(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function r4(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function o4(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Mx(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Px(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Ie(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function s4(e, t) {
  return Px(e, { ...t, weekStartsOn: 1 });
}
const a4 = {
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
}, i4 = (e, t, n) => {
  let r;
  const o = a4[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function go(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const c4 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, l4 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, d4 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, u4 = {
  date: go({
    formats: c4,
    defaultWidth: "full"
  }),
  time: go({
    formats: l4,
    defaultWidth: "full"
  }),
  dateTime: go({
    formats: d4,
    defaultWidth: "full"
  })
}, f4 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, h4 = (e, t, n, r) => f4[e];
function bn(e) {
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
const p4 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, m4 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, v4 = {
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
}, g4 = {
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
}, b4 = {
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
}, x4 = {
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
}, y4 = (e, t) => {
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
}, w4 = {
  ordinalNumber: y4,
  era: bn({
    values: p4,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: m4,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bn({
    values: v4,
    defaultWidth: "wide"
  }),
  day: bn({
    values: g4,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: b4,
    defaultWidth: "wide",
    formattingValues: x4,
    defaultFormattingWidth: "wide"
  })
};
function xn(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? S4(i, (u) => u.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      C4(i, (u) => u.test(a))
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
function C4(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function S4(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ax(e) {
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
const _4 = /^(\d+)(th|st|nd|rd)?/i, k4 = /\d+/i, E4 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, N4 = {
  any: [/^b/i, /^(a|c)/i]
}, M4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, P4 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, A4 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, R4 = {
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
}, O4 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, D4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, I4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, j4 = {
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
}, T4 = {
  ordinalNumber: Ax({
    matchPattern: _4,
    parsePattern: k4,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xn({
    matchPatterns: E4,
    defaultMatchWidth: "wide",
    parsePatterns: N4,
    defaultParseWidth: "any"
  }),
  quarter: xn({
    matchPatterns: M4,
    defaultMatchWidth: "wide",
    parsePatterns: P4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xn({
    matchPatterns: A4,
    defaultMatchWidth: "wide",
    parsePatterns: R4,
    defaultParseWidth: "any"
  }),
  day: xn({
    matchPatterns: O4,
    defaultMatchWidth: "wide",
    parsePatterns: D4,
    defaultParseWidth: "any"
  }),
  dayPeriod: xn({
    matchPatterns: I4,
    defaultMatchWidth: "any",
    parsePatterns: j4,
    defaultParseWidth: "any"
  })
}, Dc = {
  code: "en-US",
  formatDistance: i4,
  formatLong: u4,
  formatRelative: h4,
  localize: w4,
  match: T4,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function $4(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in);
  return Ex(n, Mx(n)) + 1;
}
function Rx(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = +Fs(n) - +YP(n);
  return Math.round(r / Cx) + 1;
}
function Ox(e, t) {
  var f, u, h, p;
  const n = Ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = fa(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = rt((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = _o(a, t), c = rt((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const l = _o(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function W4(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Ox(e, t), s = rt((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), _o(s, t);
}
function Dx(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = +_o(n, t) - +W4(n, t);
  return Math.round(r / Cx) + 1;
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
}, Qh = {
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
    const o = Ox(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Ae(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ae(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = kx(e);
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
    const o = Dx(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ae(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Rx(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ae(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Kn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = $4(e);
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
        return ep(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return br(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return br(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return ep(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return br(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return br(r, ":");
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
        return "GMT" + Jh(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + br(r, ":");
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
        return "GMT" + Jh(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + br(r, ":");
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
function Jh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Ae(s, 2);
}
function ep(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ae(Math.abs(e) / 60, 2) : br(e, t);
}
function br(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ae(Math.trunc(r / 60), 2), s = Ae(r % 60, 2);
  return n + o + t + s;
}
const tp = (e, t) => {
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
}, Ix = (e, t) => {
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
}, L4 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return tp(e, t);
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
  return s.replace("{{date}}", tp(r, t)).replace("{{time}}", Ix(o, t));
}, F4 = {
  p: Ix,
  P: L4
}, V4 = /^D+$/, z4 = /^Y+$/, B4 = ["D", "DD", "YY", "YYYY"];
function H4(e) {
  return V4.test(e);
}
function G4(e) {
  return z4.test(e);
}
function Y4(e, t, n) {
  const r = K4(e, t, n);
  if (console.warn(r), B4.includes(e)) throw new RangeError(r);
}
function K4(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const U4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, q4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, X4 = /^'([^]*?)'?$/, Z4 = /''/g, Q4 = /[a-zA-Z]/;
function J4(e, t, n) {
  var f, u, h, p, g, m, y, C;
  const r = fa(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Dc, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, i = Ie(e, n == null ? void 0 : n.in);
  if (!QP(i))
    throw new RangeError("Invalid time value");
  let c = t.match(q4).map((b) => {
    const x = b[0];
    if (x === "p" || x === "P") {
      const S = F4[x];
      return S(b, o.formatLong);
    }
    return b;
  }).join("").match(U4).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const x = b[0];
    if (x === "'")
      return { isToken: !1, value: eA(b) };
    if (Qh[x])
      return { isToken: !0, value: b };
    if (x.match(Q4))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + x + "`"
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
    const x = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && G4(x) || !(n != null && n.useAdditionalDayOfYearTokens) && H4(x)) && Y4(x, t, String(e));
    const S = Qh[x[0]];
    return S(i, x, o.localize, l);
  }).join("");
}
function eA(e) {
  const t = e.match(X4);
  return t ? t[1].replace(Z4, "'") : e;
}
function tA(e, t) {
  const n = Ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), s = rt(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function nA(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getMonth();
}
function rA(e, t) {
  return Ie(e, t == null ? void 0 : t.in).getFullYear();
}
function oA(e, t) {
  return +Ie(e) > +Ie(t);
}
function sA(e, t) {
  return +Ie(e) < +Ie(t);
}
function aA(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function iA(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function cA(e, t, n) {
  const r = Ie(e, n == null ? void 0 : n.in), o = r.getFullYear(), s = r.getDate(), a = rt(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = tA(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function lA(e, t, n) {
  const r = Ie(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? rt(e, NaN) : (r.setFullYear(t), r);
}
const np = 5, dA = 4;
function uA(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, np * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? np : dA;
}
function jx(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function fA(e, t) {
  const n = jx(e, t), r = uA(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Ft {
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
      return (s = this.overrides) != null && s.addDays ? this.overrides.addDays(r, o) : Sx(r, o);
    }, this.addMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addMonths ? this.overrides.addMonths(r, o) : _x(r, o);
    }, this.addWeeks = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addWeeks ? this.overrides.addWeeks(r, o) : KP(r, o);
    }, this.addYears = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addYears ? this.overrides.addYears(r, o) : UP(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Ex(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : JP(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : n4(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : fA(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : s4(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : e4(r);
    }, this.endOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.endOfWeek ? this.overrides.endOfWeek(r, o) : Px(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : o4(r);
    }, this.format = (r, o, s) => {
      var i;
      const a = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : J4(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Rx(r);
    }, this.getMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getMonth ? this.overrides.getMonth(r, this.options) : nA(r, this.options);
    }, this.getYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getYear ? this.overrides.getYear(r, this.options) : rA(r, this.options);
    }, this.getWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getWeek ? this.overrides.getWeek(r, this.options) : Dx(r, this.options);
    }, this.isAfter = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isAfter ? this.overrides.isAfter(r, o) : oA(r, o);
    }, this.isBefore = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isBefore ? this.overrides.isBefore(r, o) : sA(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Nx(r);
    }, this.isSameDay = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameDay ? this.overrides.isSameDay(r, o) : ZP(r, o);
    }, this.isSameMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameMonth ? this.overrides.isSameMonth(r, o) : aA(r, o);
    }, this.isSameYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameYear ? this.overrides.isSameYear(r, o) : iA(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : qP(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : XP(r);
    }, this.setMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setMonth ? this.overrides.setMonth(r, o) : cA(r, o);
    }, this.setYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setYear ? this.overrides.setYear(r, o) : lA(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : jx(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Vs(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Fs(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : r4(r);
    }, this.startOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfWeek ? this.overrides.startOfWeek(r, this.options) : _o(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Mx(r);
    }, this.options = { locale: Dc, ...t }, this.overrides = n;
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
    return t && Ft.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n == null ? void 0 : n.code;
    if (s && Ft.yearFirstLocales.has(s))
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
Ft.yearFirstLocales = /* @__PURE__ */ new Set([
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
const Pn = new Ft();
class Tx {
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
class hA {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class pA {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function mA(e) {
  return _.createElement("button", { ...e });
}
function vA(e) {
  return _.createElement("span", { ...e });
}
function gA(e) {
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
function bA(e) {
  const { day: t, modifiers: n, ...r } = e;
  return _.createElement("td", { ...r });
}
function xA(e) {
  const { day: t, modifiers: n, ...r } = e, o = _.useRef(null);
  return _.useEffect(() => {
    var s;
    n.focused && ((s = o.current) == null || s.focus());
  }, [n.focused]), _.createElement("button", { ref: o, ...r });
}
var ue;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ue || (ue = {}));
var Fe;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Fe || (Fe = {}));
var rn;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(rn || (rn = {}));
var It;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(It || (It = {}));
function yA(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[ue.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === s.value);
  return _.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[ue.DropdownRoot] },
    _.createElement(r.Select, { className: a, ...s }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: f }) => _.createElement(r.Option, { key: c, value: c, disabled: f }, l))),
    _.createElement(
      "span",
      { className: o[ue.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      _.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ue.Chevron] })
    )
  );
}
function wA(e) {
  return _.createElement("div", { ...e });
}
function CA(e) {
  return _.createElement("div", { ...e });
}
function SA(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r }, e.children);
}
function _A(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return _.createElement("div", { ...r });
}
function kA(e) {
  return _.createElement("table", { ...e });
}
function EA(e) {
  return _.createElement("div", { ...e });
}
const $x = Qs(void 0);
function ha() {
  const e = Is($x);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function NA(e) {
  const { components: t } = ha();
  return _.createElement(t.Dropdown, { ...e });
}
function MA(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: l } } = ha(), f = _e((h) => {
    o && (n == null || n(h));
  }, [o, n]), u = _e((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return _.createElement(
    "nav",
    { ...s },
    _.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[ue.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: u },
      _.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[ue.Chevron], orientation: "left" })
    ),
    _.createElement(
      a.NextMonthButton,
      { type: "button", className: i[ue.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      _.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ue.Chevron] })
    )
  );
}
function PA(e) {
  const { components: t } = ha();
  return _.createElement(t.Button, { ...e });
}
function AA(e) {
  return _.createElement("option", { ...e });
}
function RA(e) {
  const { components: t } = ha();
  return _.createElement(t.Button, { ...e });
}
function OA(e) {
  const { rootRef: t, ...n } = e;
  return _.createElement("div", { ...n, ref: t });
}
function DA(e) {
  return _.createElement("select", { ...e });
}
function IA(e) {
  const { week: t, ...n } = e;
  return _.createElement("tr", { ...n });
}
function jA(e) {
  return _.createElement("th", { ...e });
}
function TA(e) {
  return _.createElement(
    "thead",
    { "aria-hidden": !0 },
    _.createElement("tr", { ...e })
  );
}
function $A(e) {
  const { week: t, ...n } = e;
  return _.createElement("th", { ...n });
}
function WA(e) {
  return _.createElement("th", { ...e });
}
function LA(e) {
  return _.createElement("tbody", { ...e });
}
function FA(e) {
  const { components: t } = ha();
  return _.createElement(t.Dropdown, { ...e });
}
const VA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: mA,
  CaptionLabel: vA,
  Chevron: gA,
  Day: bA,
  DayButton: xA,
  Dropdown: yA,
  DropdownNav: wA,
  Footer: CA,
  Month: SA,
  MonthCaption: _A,
  MonthGrid: kA,
  Months: EA,
  MonthsDropdown: NA,
  Nav: MA,
  NextMonthButton: PA,
  Option: AA,
  PreviousMonthButton: RA,
  Root: OA,
  Select: DA,
  Week: IA,
  WeekNumber: $A,
  WeekNumberHeader: WA,
  Weekday: jA,
  Weekdays: TA,
  Weeks: LA,
  YearsDropdown: FA
}, Symbol.toStringTag, { value: "Module" }));
function jn(e, t, n = !1, r = Pn) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function Wx(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Bu(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Lx(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Fx(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Vx(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function zx(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Tn(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (zx(i, n))
      return i.includes(e);
    if (Bu(i))
      return jn(i, e, !1, n);
    if (Vx(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Wx(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, u = l < 0;
      return a(i.before, i.after) ? u && f : f || u;
    }
    return Lx(i) ? s(e, i.after) > 0 : Fx(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function zA(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f } = t, { isSameDay: u, isSameMonth: h, startOfMonth: p, isBefore: g, endOfMonth: m, isAfter: y } = o, C = n && p(n), b = r && m(r), x = {
    [Fe.focused]: [],
    [Fe.outside]: [],
    [Fe.disabled]: [],
    [Fe.hidden]: [],
    [Fe.today]: []
  }, S = {};
  for (const w of e) {
    const { date: E, displayMonth: k } = w, N = !!(k && !h(E, k)), P = !!(C && g(E, C)), T = !!(b && y(E, b)), j = !!(s && Tn(E, s, o)), O = !!(a && Tn(E, a, o)) || P || T || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, $ = u(E, f ?? o.today());
    N && x.outside.push(w), j && x.disabled.push(w), O && x.hidden.push(w), $ && x.today.push(w), i && Object.keys(i).forEach((F) => {
      const B = i == null ? void 0 : i[F];
      B && Tn(E, B, o) && (S[F] ? S[F].push(w) : S[F] = [w]);
    });
  }
  return (w) => {
    const E = {
      [Fe.focused]: !1,
      [Fe.disabled]: !1,
      [Fe.hidden]: !1,
      [Fe.outside]: !1,
      [Fe.today]: !1
    }, k = {};
    for (const N in x) {
      const P = x[N];
      E[N] = P.some((T) => T === w);
    }
    for (const N in S)
      k[N] = S[N].some((P) => P === w);
    return {
      ...E,
      // custom modifiers should override all the previous ones
      ...k
    };
  };
}
function BA(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[Fe[s]] ? o.push(t[Fe[s]]) : t[rn[s]] && o.push(t[rn[s]]), o), [t[ue.Day]]);
}
function HA(e) {
  return {
    ...VA,
    ...e
  };
}
function GA(e) {
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
function Bx() {
  const e = {};
  for (const t in ue)
    e[ue[t]] = `rdp-${ue[t]}`;
  for (const t in Fe)
    e[Fe[t]] = `rdp-${Fe[t]}`;
  for (const t in rn)
    e[rn[t]] = `rdp-${rn[t]}`;
  for (const t in It)
    e[It[t]] = `rdp-${It[t]}`;
  return e;
}
function Hx(e, t, n) {
  return (n ?? new Ft(t)).formatMonthYear(e);
}
const YA = Hx;
function KA(e, t, n) {
  return (n ?? new Ft(t)).format(e, "d");
}
function UA(e, t = Pn) {
  return t.format(e, "LLLL");
}
function qA(e, t, n) {
  return (n ?? new Ft(t)).format(e, "cccccc");
}
function XA(e, t = Pn) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function ZA() {
  return "";
}
function Gx(e, t = Pn) {
  return t.format(e, "yyyy");
}
const QA = Gx, JA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Hx,
  formatDay: KA,
  formatMonthCaption: YA,
  formatMonthDropdown: UA,
  formatWeekNumber: XA,
  formatWeekNumberHeader: ZA,
  formatWeekdayName: qA,
  formatYearCaption: QA,
  formatYearDropdown: Gx
}, Symbol.toStringTag, { value: "Module" }));
function eR(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...JA,
    ...e
  };
}
function tR(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), g = l(h), m = t && h < s(t) || n && h > s(n) || !1;
    return { value: g, label: p, disabled: m };
  });
}
function nR(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ue.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function rR(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), s = [];
  for (let a = 0; a < 7; a++) {
    const i = e.addDays(o, a);
    s.push(i);
  }
  return s;
}
function oR(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, addYears: i, getYear: c, isBefore: l, isSameYear: f } = r, u = s(e), h = a(t), p = [];
  let g = u;
  for (; l(g, h) || f(g, h); )
    p.push(g), g = i(g, 1);
  return o && p.reverse(), p.map((m) => {
    const y = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: y,
      disabled: !1
    };
  });
}
function Yx(e, t, n, r) {
  let o = (r ?? new Ft(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const sR = Yx;
function Kx(e, t, n) {
  return (n ?? new Ft(t)).formatMonthYear(e);
}
const aR = Kx;
function iR(e, t, n, r) {
  let o = (r ?? new Ft(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function cR(e) {
  return "Choose the Month";
}
function lR() {
  return "";
}
function dR(e) {
  return "Go to the Next Month";
}
function uR(e) {
  return "Go to the Previous Month";
}
function fR(e, t, n) {
  return (n ?? new Ft(t)).format(e, "cccc");
}
function hR(e, t) {
  return `Week ${e}`;
}
function pR(e) {
  return "Week Number";
}
function mR(e) {
  return "Choose the Year";
}
const vR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: aR,
  labelDay: sR,
  labelDayButton: Yx,
  labelGrid: Kx,
  labelGridcell: iR,
  labelMonthDropdown: cR,
  labelNav: lR,
  labelNext: dR,
  labelPrevious: uR,
  labelWeekNumber: hR,
  labelWeekNumberHeader: pR,
  labelWeekday: fR,
  labelYearDropdown: mR
}, Symbol.toStringTag, { value: "Module" })), pa = (e) => e instanceof HTMLElement ? e : null, gl = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], gR = (e) => pa(e.querySelector("[data-animated-month]")), bl = (e) => pa(e.querySelector("[data-animated-caption]")), xl = (e) => pa(e.querySelector("[data-animated-weeks]")), bR = (e) => pa(e.querySelector("[data-animated-nav]")), xR = (e) => pa(e.querySelector("[data-animated-weekdays]"));
function yR(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = it(null), i = it(r), c = it(!1);
  Qd(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), u = s.isAfter(r[0].date, l[0].date), h = u ? n[It.caption_after_enter] : n[It.caption_before_enter], p = u ? n[It.weeks_after_enter] : n[It.weeks_before_enter], g = a.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (gl(m).forEach((x) => {
      if (!(x instanceof HTMLElement))
        return;
      const S = gR(x);
      S && x.contains(S) && x.removeChild(S);
      const w = bl(x);
      w && w.classList.remove(h);
      const E = xl(x);
      E && E.classList.remove(p);
    }), a.current = m) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const y = g instanceof HTMLElement ? gl(g) : [], C = gl(e.current);
    if (C != null && C.every((b) => b instanceof HTMLElement) && y && y.every((b) => b instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const b = bR(e.current);
      b && (b.style.zIndex = "1"), C.forEach((x, S) => {
        const w = y[S];
        if (!w)
          return;
        x.style.position = "relative", x.style.overflow = "hidden";
        const E = bl(x);
        E && E.classList.add(h);
        const k = xl(x);
        k && k.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), E && E.classList.remove(h), k && k.classList.remove(p), x.style.position = "", x.style.overflow = "", x.contains(w) && x.removeChild(w);
        };
        w.style.pointerEvents = "none", w.style.position = "absolute", w.style.overflow = "hidden", w.setAttribute("aria-hidden", "true");
        const P = xR(w);
        P && (P.style.opacity = "0");
        const T = bl(w);
        T && (T.classList.add(u ? n[It.caption_before_exit] : n[It.caption_after_exit]), T.addEventListener("animationend", N));
        const j = xl(w);
        j && j.classList.add(u ? n[It.weeks_before_exit] : n[It.weeks_after_exit]), x.insertBefore(w, x.firstChild);
      });
    }
  });
}
function wR(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: u, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: g, endOfWeek: m, isAfter: y, startOfBroadcastWeek: C, startOfISOWeek: b, startOfWeek: x } = r, S = c ? C(o, r) : a ? b(o) : x(o), w = c ? h(s) : a ? p(g(s)) : m(g(s)), E = f(w, S), k = u(s, o) + 1, N = [];
  for (let j = 0; j <= E; j++) {
    const O = l(S, j);
    if (t && y(O, t))
      break;
    N.push(O);
  }
  const T = (c ? 35 : 42) * k;
  if (i && N.length < T) {
    const j = T - N.length;
    for (let O = 0; O < j; O++) {
      const $ = l(N[N.length - 1], 1);
      N.push($);
    }
  }
  return N;
}
function CR(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function SR(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function rp(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: u } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), u(c);
}
function _R(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: u, startOfISOWeek: h, startOfWeek: p } = r, g = e.reduce((m, y) => {
    const C = n.broadcastCalendar ? u(y, r) : n.ISOWeek ? h(y) : p(y), b = n.broadcastCalendar ? s(y) : n.ISOWeek ? a(i(y)) : c(i(y)), x = t.filter((k) => k >= C && k <= b), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && x.length < S) {
      const k = t.filter((N) => {
        const P = S - x.length;
        return N > b && N <= o(b, P);
      });
      x.push(...k);
    }
    const w = x.reduce((k, N) => {
      const P = n.ISOWeek ? l(N) : f(N), T = k.find((O) => O.weekNumber === P), j = new Tx(N, y, r);
      return T ? T.days.push(j) : k.push(new pA(P, [j])), k;
    }, []), E = new hA(y, w);
    return m.push(E), m;
  }, []);
  return n.reverseMonths ? g.reverse() : g;
}
function kR(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: u } = t, { fromYear: h, toYear: p, fromMonth: g, toMonth: m } = e;
  !n && g && (n = g), !n && h && (n = t.newDate(h, 0, 1)), !r && m && (r = m), !r && p && (r = f(p, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && y && (n = o(c(e.today ?? u(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && y && (r = l(e.today ?? u())), [
    n && s(n),
    r && s(r)
  ];
}
function ER(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s : 1, f = a(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < s))
    return i(f, l);
}
function NR(e, t, n, r) {
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
function Ic(e, t) {
  const [n, r] = tt(e);
  return [t === void 0 ? n : t, r];
}
function PR(e, t) {
  const [n, r] = kR(e, t), { startOfMonth: o, endOfMonth: s } = t, a = rp(e, n, r, t), [i, c] = Ic(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  on(() => {
    const E = rp(e, n, r, t);
    c(E);
  }, [e.timeZone]);
  const l = SR(i, r, e, t), f = wR(l, e.endMonth ? s(e.endMonth) : void 0, e, t), u = _R(l, f, e, t), h = MR(u), p = CR(u), g = NR(i, n, e, t), m = ER(i, r, e, t), { disableNavigation: y, onMonthChange: C } = e, b = (E) => h.some((k) => k.days.some((N) => N.isEqualTo(E))), x = (E) => {
    if (y)
      return;
    let k = o(E);
    n && k < o(n) && (k = o(n)), r && k > o(r) && (k = o(r)), c(k), C == null || C(k);
  };
  return {
    months: u,
    weeks: h,
    days: p,
    navStart: n,
    navEnd: r,
    previousMonth: g,
    nextMonth: m,
    goToMonth: x,
    goToDay: (E) => {
      b(E) || x(E.date);
    }
  };
}
var pn;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(pn || (pn = {}));
function op(e) {
  return !e[Fe.disabled] && !e[Fe.hidden] && !e[Fe.outside];
}
function AR(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    op(i) && (i[Fe.focused] && s < pn.FocusedModifier ? (o = a, s = pn.FocusedModifier) : r != null && r.isEqualTo(a) && s < pn.LastFocused ? (o = a, s = pn.LastFocused) : n(a.date) && s < pn.Selected ? (o = a, s = pn.Selected) : i[Fe.today] && s < pn.Today && (o = a, s = pn.Today));
  }
  return o || (o = e.find((a) => op(t(a)))), o;
}
function RR(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: u, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: g, endOfWeek: m, max: y, min: C, startOfBroadcastWeek: b, startOfISOWeek: x, startOfWeek: S } = a;
  let E = {
    day: l,
    week: u,
    month: f,
    year: h,
    startOfWeek: (k) => c ? b(k, a) : i ? x(k) : S(k),
    endOfWeek: (k) => c ? p(k) : i ? g(k) : m(k)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = y([r, E]) : t === "after" && o && (E = C([o, E])), E;
}
function Ux(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = RR(e, t, n.date, r, o, s, a), l = !!(s.disabled && Tn(c, s.disabled, a)), f = !!(s.hidden && Tn(c, s.hidden, a)), u = c, h = new Tx(c, u, a);
  return !l && !f ? h : Ux(e, t, h, r, o, s, a, i + 1);
}
function OR(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = tt(), c = AR(t.days, n, r || (() => !1), a), [l, f] = tt(s ? c : void 0);
  return {
    isFocusTarget: (m) => !!(c != null && c.isEqualTo(m)),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (m, y) => {
      if (!l)
        return;
      const C = Ux(m, y, l, t.navStart, t.navEnd, e, o);
      C && (t.goToDay(C), f(C));
    }
  };
}
function DR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ic(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((g) => c(g, p))) ?? !1, { min: f, max: u } = e;
  return {
    selected: i,
    select: (p, g, m) => {
      let y = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        y = i == null ? void 0 : i.filter((C) => !c(C, p));
      } else
        (i == null ? void 0 : i.length) === u ? y = [p] : y = [...y, p];
      return o || a(y), o == null || o(y, p, g, m), y;
    },
    isSelected: l
  };
}
function IR(e, t, n = 0, r = 0, o = !1, s = Pn) {
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
function jR(e, t, n = Pn) {
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
function sp(e, t, n = Pn) {
  return jn(e, t.from, !1, n) || jn(e, t.to, !1, n) || jn(t, e.from, !1, n) || jn(t, e.to, !1, n);
}
function TR(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? jn(e, i, !1, n) : zx(i, n) ? i.some((c) => jn(e, c, !1, n)) : Bu(i) ? i.from && i.to ? sp(e, { from: i.from, to: i.to }, n) : !1 : Vx(i) ? jR(e, i.dayOfWeek, n) : Wx(i) ? n.isAfter(i.before, i.after) ? sp(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Tn(e.from, i, n) || Tn(e.to, i, n) : Lx(i) || Fx(i) ? Tn(e.from, i, n) || Tn(e.to, i, n) : !1))
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
function $R(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Ic(o, a ? o : void 0), l = a ? o : i;
  return {
    selected: l,
    select: (h, p, g) => {
      const { min: m, max: y } = e, C = h ? IR(h, l, m, y, s, t) : void 0;
      return r && n && (C != null && C.from) && C.to && TR({ from: C.from, to: C.to }, n, t) && (C.from = h, C.to = void 0), a || c(C), a == null || a(C, h, p, g), C;
    },
    isSelected: (h) => l && jn(l, h, !1, t)
  };
}
function WR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ic(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (u, h, p) => {
      let g = u;
      return !r && i && i && c(u, i) && (g = void 0), o || a(g), o == null || o(g, u, h, p), g;
    },
    isSelected: (u) => i ? c(i, u) : !1
  };
}
function LR(e, t) {
  const n = WR(e, t), r = DR(e, t), o = $R(e, t);
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
function FR(e) {
  var ee;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new xt(t.today, t.timeZone)), t.month && (t.month = new xt(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new xt(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new xt(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new xt(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new xt(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (ee = t.selected) == null ? void 0 : ee.map((G) => new xt(G, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new xt(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new xt(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: s, locale: a, classNames: i } = po(() => {
    const G = { ...Dc, ...t.locale };
    return {
      dateLib: new Ft({
        locale: G,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: HA(t.components),
      formatters: eR(t.formatters),
      labels: { ...vR, ...t.labels },
      locale: G,
      classNames: { ...Bx(), ...t.classNames }
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
  ]), { captionLayout: c, mode: l, navLayout: f, numberOfMonths: u = 1, onDayBlur: h, onDayClick: p, onDayFocus: g, onDayKeyDown: m, onDayMouseEnter: y, onDayMouseLeave: C, onNextClick: b, onPrevClick: x, showWeekNumber: S, styles: w } = t, { formatCaption: E, formatDay: k, formatMonthDropdown: N, formatWeekNumber: P, formatWeekNumberHeader: T, formatWeekdayName: j, formatYearDropdown: O } = r, $ = PR(t, s), { days: F, months: B, navStart: W, navEnd: Y, previousMonth: D, nextMonth: L, goToMonth: Q } = $, A = zA(F, t, W, Y, s), { isSelected: M, select: V, selected: z } = LR(t, s) ?? {}, { blur: K, focused: q, isFocusTarget: I, moveFocus: re, setFocused: te } = OR(t, $, A, M ?? (() => !1), s), { labelDayButton: de, labelGridcell: ge, labelGrid: me, labelMonthDropdown: ke, labelNav: De, labelPrevious: Te, labelNext: ot, labelWeekday: qe, labelWeekNumber: zt, labelWeekNumberHeader: Ge, labelYearDropdown: wt } = o, $e = po(() => rR(s, t.ISOWeek), [s, t.ISOWeek]), pt = l !== void 0 || p !== void 0, Xe = _e(() => {
    D && (Q(D), x == null || x(D));
  }, [D, Q, x]), Bt = _e(() => {
    L && (Q(L), b == null || b(L));
  }, [Q, L, b]), Ht = _e((G, ce) => (Z) => {
    Z.preventDefault(), Z.stopPropagation(), te(G), V == null || V(G.date, ce, Z), p == null || p(G.date, ce, Z);
  }, [V, p, te]), ve = _e((G, ce) => (Z) => {
    te(G), g == null || g(G.date, ce, Z);
  }, [g, te]), Ct = _e((G, ce) => (Z) => {
    K(), h == null || h(G.date, ce, Z);
  }, [K, h]), Rn = _e((G, ce) => (Z) => {
    const se = {
      ArrowLeft: [
        Z.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        Z.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [Z.shiftKey ? "year" : "week", "after"],
      ArrowUp: [Z.shiftKey ? "year" : "week", "before"],
      PageUp: [Z.shiftKey ? "year" : "month", "before"],
      PageDown: [Z.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (se[Z.key]) {
      Z.preventDefault(), Z.stopPropagation();
      const [fe, pe] = se[Z.key];
      re(fe, pe);
    }
    m == null || m(G.date, ce, Z);
  }, [re, m, t.dir]), Jt = _e((G, ce) => (Z) => {
    y == null || y(G.date, ce, Z);
  }, [y]), Hn = _e((G, ce) => (Z) => {
    C == null || C(G.date, ce, Z);
  }, [C]), fn = _e((G) => (ce) => {
    const Z = Number(ce.target.value), se = s.setMonth(s.startOfMonth(G), Z);
    Q(se);
  }, [s, Q]), Gt = _e((G) => (ce) => {
    const Z = Number(ce.target.value), se = s.setYear(s.startOfMonth(G), Z);
    Q(se);
  }, [s, Q]), { className: On, style: Gn } = po(() => ({
    className: [i[ue.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[ue.Root], ...t.style }
  }), [i, t.className, t.style, w]), mt = GA(t), H = it(null);
  yR(H, !!t.animate, {
    classNames: i,
    months: B,
    focused: q,
    dateLib: s
  });
  const J = {
    dayPickerProps: t,
    selected: z,
    select: V,
    isSelected: M,
    months: B,
    nextMonth: L,
    previousMonth: D,
    goToMonth: Q,
    getModifiers: A,
    components: n,
    classNames: i,
    styles: w,
    labels: o,
    formatters: r
  };
  return _.createElement(
    $x.Provider,
    { value: J },
    _.createElement(
      n.Root,
      { rootRef: t.animate ? H : void 0, className: On, style: Gn, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...mt },
      _.createElement(
        n.Months,
        { className: i[ue.Months], style: w == null ? void 0 : w[ue.Months] },
        !t.hideNavigation && !f && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ue.Nav], style: w == null ? void 0 : w[ue.Nav], "aria-label": De(), onPreviousClick: Xe, onNextClick: Bt, previousMonth: D, nextMonth: L }),
        B.map((G, ce) => _.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[ue.Month],
            style: w == null ? void 0 : w[ue.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ce,
            displayIndex: ce,
            calendarMonth: G
          },
          f === "around" && !t.hideNavigation && ce === 0 && _.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[ue.PreviousMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": Te(D), onClick: Xe, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: D ? void 0 : !0, className: i[ue.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          _.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[ue.MonthCaption], style: w == null ? void 0 : w[ue.MonthCaption], calendarMonth: G, displayIndex: ce }, c != null && c.startsWith("dropdown") ? _.createElement(
            n.DropdownNav,
            { className: i[ue.Dropdowns], style: w == null ? void 0 : w[ue.Dropdowns] },
            (() => {
              const Z = c === "dropdown" || c === "dropdown-months" ? _.createElement(n.MonthsDropdown, { key: "month", className: i[ue.MonthsDropdown], "aria-label": ke(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: fn(G.date), options: tR(G.date, W, Y, r, s), style: w == null ? void 0 : w[ue.Dropdown], value: s.getMonth(G.date) }) : _.createElement("span", { key: "month" }, N(G.date, s)), se = c === "dropdown" || c === "dropdown-years" ? _.createElement(n.YearsDropdown, { key: "year", className: i[ue.YearsDropdown], "aria-label": wt(s.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Gt(G.date), options: oR(W, Y, r, s, !!t.reverseYears), style: w == null ? void 0 : w[ue.Dropdown], value: s.getYear(G.date) }) : _.createElement("span", { key: "year" }, O(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [se, Z] : [Z, se];
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
            } }, E(G.date, s.options, s))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            _.createElement(n.CaptionLabel, { className: i[ue.CaptionLabel], role: "status", "aria-live": "polite" }, E(G.date, s.options, s))
          )),
          f === "around" && !t.hideNavigation && ce === u - 1 && _.createElement(
            n.NextMonthButton,
            { type: "button", className: i[ue.NextMonthButton], tabIndex: L ? void 0 : -1, "aria-disabled": L ? void 0 : !0, "aria-label": ot(L), onClick: Bt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: L ? void 0 : !0, className: i[ue.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === u - 1 && f === "after" && !t.hideNavigation && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ue.Nav], style: w == null ? void 0 : w[ue.Nav], "aria-label": De(), onPreviousClick: Xe, onNextClick: Bt, previousMonth: D, nextMonth: L }),
          _.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": me(G.date, s.options, s) || void 0, className: i[ue.MonthGrid], style: w == null ? void 0 : w[ue.MonthGrid] },
            !t.hideWeekdays && _.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[ue.Weekdays], style: w == null ? void 0 : w[ue.Weekdays] },
              S && _.createElement(n.WeekNumberHeader, { "aria-label": Ge(s.options), className: i[ue.WeekNumberHeader], style: w == null ? void 0 : w[ue.WeekNumberHeader], scope: "col" }, T()),
              $e.map((Z) => _.createElement(n.Weekday, { "aria-label": qe(Z, s.options, s), className: i[ue.Weekday], key: String(Z), style: w == null ? void 0 : w[ue.Weekday], scope: "col" }, j(Z, s.options, s)))
            ),
            _.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[ue.Weeks], style: w == null ? void 0 : w[ue.Weeks] }, G.weeks.map((Z) => _.createElement(
              n.Week,
              { className: i[ue.Week], key: Z.weekNumber, style: w == null ? void 0 : w[ue.Week], week: Z },
              S && // biome-ignore lint/a11y/useSemanticElements: react component
              _.createElement(n.WeekNumber, { week: Z, style: w == null ? void 0 : w[ue.WeekNumber], "aria-label": zt(Z.weekNumber, {
                locale: a
              }), className: i[ue.WeekNumber], scope: "row", role: "rowheader" }, P(Z.weekNumber, s)),
              Z.days.map((se) => {
                const { date: fe } = se, pe = A(se);
                if (pe[Fe.focused] = !pe.hidden && !!(q != null && q.isEqualTo(se)), pe[rn.selected] = (M == null ? void 0 : M(fe)) || pe.selected, Bu(z)) {
                  const { from: hn, to: St } = z;
                  pe[rn.range_start] = !!(hn && St && s.isSameDay(fe, hn)), pe[rn.range_end] = !!(hn && St && s.isSameDay(fe, St)), pe[rn.range_middle] = jn(z, fe, !0, s);
                }
                const ze = nR(pe, w, t.modifiersStyles), Ze = BA(pe, i, t.modifiersClassNames), At = !pt && !pe.hidden ? ge(fe, pe, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  _.createElement(n.Day, { key: `${s.format(fe, "yyyy-MM-dd")}_${s.format(se.displayMonth, "yyyy-MM")}`, day: se, modifiers: pe, className: Ze.join(" "), style: ze, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": At, "data-day": s.format(fe, "yyyy-MM-dd"), "data-month": se.outside ? s.format(fe, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": se.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && pt ? _.createElement(n.DayButton, { className: i[ue.DayButton], style: w == null ? void 0 : w[ue.DayButton], type: "button", day: se, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: I(se) ? 0 : -1, "aria-label": de(fe, pe, s.options, s), onClick: Ht(se, pe), onBlur: Ct(se, pe), onFocus: ve(se, pe), onKeyDown: Rn(se, pe), onMouseEnter: Jt(se, pe), onMouseLeave: Hn(se, pe) }, k(fe, s.options, s)) : !pe.hidden && k(se.date, s.options, s))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      _.createElement(n.Footer, { className: i[ue.Footer], style: w == null ? void 0 : w[ue.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const VR = {
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
}, zR = (e, t, n) => {
  n = n || {};
  let r;
  const o = VR[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, BR = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, HR = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, GR = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, YR = {
  date: go({
    formats: BR,
    defaultWidth: "full"
  }),
  time: go({
    formats: HR,
    defaultWidth: "full"
  }),
  dateTime: go({
    formats: GR,
    defaultWidth: "full"
  })
}, KR = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, UR = (e, t, n, r) => KR[e], qR = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, XR = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, ZR = {
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
}, QR = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
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
}, eO = {
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
}, tO = (e, t) => {
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
}, nO = {
  ordinalNumber: tO,
  era: bn({
    values: qR,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: XR,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: bn({
    values: ZR,
    defaultWidth: "wide"
  }),
  day: bn({
    values: QR,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: JR,
    defaultWidth: "wide",
    formattingValues: eO,
    defaultFormattingWidth: "wide"
  })
}, rO = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, oO = /\d+/i, sO = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, aO = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, iO = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, cO = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, lO = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, dO = {
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
}, uO = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, fO = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, hO = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, pO = {
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
}, mO = {
  ordinalNumber: Ax({
    matchPattern: rO,
    parsePattern: oO,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: xn({
    matchPatterns: sO,
    defaultMatchWidth: "wide",
    parsePatterns: aO,
    defaultParseWidth: "any"
  }),
  quarter: xn({
    matchPatterns: iO,
    defaultMatchWidth: "wide",
    parsePatterns: cO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xn({
    matchPatterns: lO,
    defaultMatchWidth: "wide",
    parsePatterns: dO,
    defaultParseWidth: "any"
  }),
  day: xn({
    matchPatterns: uO,
    defaultMatchWidth: "wide",
    parsePatterns: fO,
    defaultParseWidth: "any"
  }),
  dayPeriod: xn({
    matchPatterns: hO,
    defaultMatchWidth: "any",
    parsePatterns: pO,
    defaultParseWidth: "any"
  })
}, vO = {
  code: "ja",
  formatDistance: zR,
  formatLong: YR,
  formatRelative: UR,
  localize: nO,
  match: mO,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, gO = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Ba = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, qx = _.forwardRef(
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
    const [g, m] = _.useState(
      () => Ba(n || null)
    ), y = e !== void 0, C = y ? Ba(e) : g, b = _.useMemo(
      () => Ba(r || null),
      [r]
    ), x = _.useMemo(
      () => Ba(o || null),
      [o]
    ), S = _.useMemo(() => !b || !x ? !0 : b <= x, [b, x]), w = _.useMemo(() => {
      if (x) return x;
      const k = /* @__PURE__ */ new Date();
      return new Date(k.getFullYear() + 10, 11, 31);
    }, [x]), E = (k) => {
      const N = k || null;
      y || m(N), t == null || t(N);
    };
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: p,
        className: R(gO(f), a),
        ...h,
        children: /* @__PURE__ */ d.jsx(
          FR,
          {
            animate: !1,
            mode: "single",
            selected: C || void 0,
            onSelect: E,
            locale: u === "ja" ? vO : Dc,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (k) => `${k.getFullYear()}${u === "ja" ? "年" : ""}`
            },
            disabled: S ? [
              ...b ? [{ before: b }] : [],
              ...x ? [{ after: x }] : [],
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
              const k = Bx(), N = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
                button_previous: `${N} flex items-center justify-center`,
                button_next: `${N} flex items-center justify-center`,
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
qx.displayName = "Calendar";
const ap = he(
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
), bO = {
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
    const f = r ? jr : "a", h = bO[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ d.jsx(
      f,
      {
        ref: l,
        className: R(
          ap({ intent: t, size: n, disabled: o }),
          e
        ),
        ...c,
        children: i
      }
    ) : /* @__PURE__ */ d.jsxs(
      f,
      {
        ref: l,
        className: R(ap({ intent: t, size: n, disabled: o }), e),
        ...c,
        children: [
          s && /* @__PURE__ */ d.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: at(s, { size: h }) }),
          i,
          a && /* @__PURE__ */ d.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: at(a, { size: h }) })
        ]
      }
    );
  }
);
zs.displayName = "TextLink";
const xO = he(
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
), yO = he("size-5 shrink-0", {
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
}), wO = he("font-bold text-md", {
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
}), CO = he(
  "text-body-primary font-normal leading-6 text-md"
), SO = he("min-w-0 gap-xxxs flex flex-1 flex-col"), _O = {
  info: ni,
  success: sm,
  warning: ni,
  alert: ni,
  paid: H2
}, kO = _.forwardRef(
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
    const l = a || _O[t];
    return /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: c,
        className: R(xO({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ d.jsxs("div", { className: R(SO()), children: [
          n && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: R(yO({ intent: t }), "top-0.5 relative"),
                  children: at(l, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ d.jsx("div", { className: R(wO({ intent: t })), children: n })
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
          (o || r) && /* @__PURE__ */ d.jsx("div", { className: R(CO()), children: o || r })
        ] })
      }
    );
  }
);
kO.displayName = "Callout";
const Xx = _.createContext(!1), EO = he("grid grid-cols-1", {
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
}), Zx = _.forwardRef(
  ({ columns: e = 1, gap: t = "xs", className: n, children: r, ...o }, s) => (
    // WebKit drops the list semantics of a `ul` without list markers
    /* @__PURE__ */ d.jsx(
      "ul",
      {
        ref: s,
        role: "list",
        className: R(EO({ columns: e, gap: t }), n),
        ...o,
        children: /* @__PURE__ */ d.jsx(Xx.Provider, { value: !0, children: r })
      }
    )
  )
);
Zx.displayName = "Card.List";
const NO = he(
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
), es = (e) => e != null && e !== !1 && e !== !0 && e !== "", Ha = (e, ...t) => t.some((n) => (e == null ? void 0 : e[n]) !== void 0), Qx = _.forwardRef(
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
    const f = _.useContext(Xx), u = _.useId(), h = `${u}-title`, p = `${u}-top`, g = `${u}-content`, m = e ? jr : "div", y = t == null ? void 0 : t.props, C = es(r) || es(o), b = es(a), x = e && !Ha(c, "aria-label", "aria-labelledby") && !Ha(y, "aria-label", "aria-labelledby"), S = e && !Ha(c, "aria-describedby") && !Ha(y, "aria-describedby") && [C && p, b && g].filter(Boolean).join(" ") || void 0, w = {
      ...x && { "aria-labelledby": h },
      ...S && { "aria-describedby": S }
    }, E = /* @__PURE__ */ d.jsxs(
      m,
      {
        ref: l,
        className: R(
          NO({ interactive: e && n }),
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
                id: x ? h : void 0,
                "data-slot": "title",
                className: "text-md min-w-0 font-bold leading-[1.2] wrap-anywhere",
                children: s
              }
            ),
            b && /* @__PURE__ */ d.jsx(
              "div",
              {
                id: S ? g : void 0,
                "data-slot": "content",
                className: "min-w-0",
                children: a
              }
            )
          ] }),
          e && t && /* @__PURE__ */ d.jsx(cm, { children: _.cloneElement(t, w) })
        ]
      }
    );
    return f ? /* @__PURE__ */ d.jsx("li", { className: "flex", children: E }) : E;
  }
);
Qx.displayName = "Card.Item";
const r7 = {
  Item: Qx,
  List: Zx
}, MO = he("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), PO = he(
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
), bo = ({
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
      nv,
      {
        id: c,
        className: R(PO({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ d.jsx(
          ov,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ d.jsx(N2, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ d.jsx(Jp, { style: { strokeWidth: 3 } })
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
bo.displayName = "Checkbox";
const AO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx("div", { className: R("gap-xs flex flex-col", t), children: e });
AO.displayName = "CheckboxGroup";
const RO = he(
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
), OO = _.forwardRef(
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
        className: R(RO({ selected: e, disabled: t }), n),
        onClick: i,
        ...s,
        children: r
      }
    );
  }
);
OO.displayName = "ChoiceChip";
const DO = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d.jsx("div", { role: "listbox", className: R("gap-xs flex flex-wrap", t), children: e });
DO.displayName = "ChoiceChipGroup";
const IO = (e, t) => {
  const [n, r] = tt(e);
  return on(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, jc = () => {
  const e = it(!1), t = _e(() => {
    e.current = !0;
  }, []), n = _e(() => {
    e.current = !1;
  }, []), r = _e(
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
function jO() {
  const e = it(null), [t, n] = tt(!1);
  return on(() => {
    const r = e.current;
    if (!r) return;
    const o = () => n(r.scrollWidth > r.clientWidth);
    o();
    const s = new ResizeObserver(o);
    return s.observe(r), () => s.disconnect();
  }, []), { ref: e, isTruncated: t };
}
const ip = 48, cp = (e) => Math.min(1, Math.max(0, e)), Jx = (e) => {
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
        startShadow: cp(f / ip),
        endShadow: cp(
          (c - l - f) / ip
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
function ey({
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
const TO = he(
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
), o7 = HM, Lt = _.forwardRef(
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
    GM,
    {
      ...i !== void 0 && { delayDuration: i },
      ...l !== void 0 && { open: l },
      ...f !== void 0 && { onOpenChange: f },
      ...c !== void 0 && {
        disableHoverableContent: c
      },
      children: [
        /* @__PURE__ */ d.jsx(YM, { asChild: !0, children: e }),
        /* @__PURE__ */ d.jsx(KM, { children: /* @__PURE__ */ d.jsx(
          UM,
          {
            ref: p,
            side: r,
            sideOffset: o,
            align: s,
            ...a !== void 0 && { alignOffset: a },
            className: R(TO({ intent: n }), u),
            ...h,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ d.jsx(d.Fragment, { children: e })
);
Lt.displayName = "Tooltip";
const $O = he("space-y-md w-full", {
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
}), ty = _.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ d.jsx(
    "div",
    {
      ref: o,
      className: R($O({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
ty.displayName = "DataSheet";
const WO = he(
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
), ny = _.forwardRef(
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
          WO({ variant: t }),
          u && "flex items-center justify-between",
          e
        ),
        ...l,
        children: [
          /* @__PURE__ */ d.jsx("div", { className: R(r && "line-through opacity-60"), children: n }),
          u && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
            a && /* @__PURE__ */ d.jsx(
              Lt,
              {
                content: r ? null : (s == null ? void 0 : s.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: nm,
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
              Lt,
              {
                content: (s == null ? void 0 : s.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: om,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            c && r && /* @__PURE__ */ d.jsx(
              Lt,
              {
                content: (s == null ? void 0 : s.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: rm,
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
ny.displayName = "DataSheetHeader";
const ry = _.forwardRef(
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
ry.displayName = "DataSheetSection";
const LO = he("py-sm", {
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
}), FO = he(
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
), VO = he(
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
), oy = _.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...s }, a) => {
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
        LO({ orientation: n, spacing: r }),
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            id: i,
            className: R(FO({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx("div", { className: R(VO({ orientation: n })), children: c })
      ]
    }
  );
});
oy.displayName = "DataSheetKeyValue";
const zO = {
  actionsColumnParts: 10
}, sy = _.createContext(
  zO
), BO = () => _.useContext(sy), ay = _.createContext({}), iy = () => _.useContext(
  ay
);
function HO({
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
  const { hasOverflow: u, startShadow: h, endShadow: p } = Jx(f), g = _.useMemo(
    () => ({
      actionsColumnParts: s,
      ...n && { onEditRow: n },
      ...r && { onRemoveRow: r },
      ...o && { onRestoreRow: o }
    }),
    [s, n, r, o]
  );
  return /* @__PURE__ */ d.jsx(
    sy.Provider,
    {
      value: g,
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
        u && /* @__PURE__ */ d.jsx(ey, { startShadow: h, endShadow: p })
      ] })
    }
  );
}
const cy = _.forwardRef(HO);
cy.displayName = "DataSheetTable";
const ly = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("thead", { ref: r, className: R("", e), ...n, children: t }));
ly.displayName = "DataSheetTableHeader";
const dy = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tbody", { ref: r, className: R("", e), ...n, children: t }));
dy.displayName = "DataSheetTableBody";
function GO({
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
    ay.Provider,
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
const uy = _.forwardRef(GO);
uy.displayName = "DataSheetTableRow";
const Ai = _.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...s }, a) => {
  const i = t ? "th" : "td", { totalParts: c, isDeleted: l } = iy(), f = n !== void 0 && c !== void 0 ? { width: `${n / c * 100}%`, ...o } : o, u = typeof r == "string" ? r.trim() : String(r || ""), h = l && !t && u !== "" && u !== "-";
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
Ai.displayName = "DataSheetTableCell";
function YO({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, s) {
  const { onEditRow: a, onRemoveRow: i, onRestoreRow: c, actionsColumnParts: l } = BO(), {
    item: f,
    isDeleted: u,
    ariaLabels: h,
    tooltipMessages: p
  } = iy(), g = n ?? f;
  return t ? /* @__PURE__ */ d.jsx(
    Ai,
    {
      ref: s,
      header: !0,
      parts: l,
      className: e,
      ...o,
      children: r
    }
  ) : a || i || c ? /* @__PURE__ */ d.jsx(
    Ai,
    {
      ref: s,
      parts: l,
      className: R("align-top", e),
      ...o,
      children: /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
        a && g && /* @__PURE__ */ d.jsx(
          Lt,
          {
            content: u ? null : (p == null ? void 0 : p.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: nm,
                disabled: u,
                onClick: () => a(g),
                className: R(
                  "text-shape-primary [&_svg]:size-5!",
                  u && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && g && !u && /* @__PURE__ */ d.jsx(
          Lt,
          {
            content: (p == null ? void 0 : p.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: om,
                onClick: () => i(g),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        c && g && u && /* @__PURE__ */ d.jsx(
          Lt,
          {
            content: (p == null ? void 0 : p.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: rm,
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
const fy = _.forwardRef(
  YO
);
fy.displayName = "DataSheetTableActionsCell";
const hy = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(Ve, { ref: n, className: R("w-full", e), ...t }));
hy.displayName = "DataSheetAction";
const s7 = Object.assign(ty, {
  Header: ny,
  Section: ry,
  KeyValue: oy,
  Table: cy,
  TableHeader: ly,
  TableBody: dy,
  TableRow: uy,
  TableCell: Ai,
  TableActionsCell: fy,
  Action: hy
}), py = he(
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
), KO = he(
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
), ks = he(
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
), Tc = _.forwardRef(
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
    const p = !!t, g = !!n, m = !!r, y = u.type === "number", { compositionHandlers: C, guardKeyHandler: b } = jc(), x = (w) => {
      C.onCompositionStart(w), l == null || l(w);
    }, S = (w) => {
      C.onCompositionEnd(w), f == null || f(w);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: R(py({ invalid: e }), a), children: [
      t && /* @__PURE__ */ d.jsx(
        "div",
        {
          className: ks({ position: "prefix", interactive: !1 }),
          children: at(t, { size: s })
        }
      ),
      /* @__PURE__ */ d.jsx(
        "input",
        {
          ref: h,
          className: KO({ hasPrefix: p, hasTrailing: g, isNumeric: y }),
          ...u,
          onKeyDown: b(i),
          onKeyUp: b(c),
          onCompositionStart: x,
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
          children: at(n, { size: o })
        }
      ) : /* @__PURE__ */ d.jsx(
        "div",
        {
          className: ks({
            position: "trailing",
            interactive: !1
          }),
          children: at(n, { size: o })
        }
      ) })
    ] });
  }
);
Tc.displayName = "Input";
const UO = `bg-surface-primary rounded-lg z-dropdown w-auto max-w-none shadow-lg
  max-h-[var(--radix-popover-content-available-height)] overflow-y-auto`, Ga = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, qO = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), XO = _.forwardRef(
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
    formatDate: u = qO,
    className: h,
    contentClassName: p,
    defaultOpen: g = !1,
    open: m,
    onOpenChange: y,
    side: C = "bottom",
    locale: b = "ja",
    ...x
  }, S) => {
    const [w, E] = _.useState(
      () => Ga(n || null)
    ), [k, N] = _.useState(g), P = e !== void 0, T = P ? Ga(e) : w, j = m !== void 0 ? m : k, O = _.useMemo(
      () => Ga(r || null),
      [r]
    ), $ = _.useMemo(
      () => Ga(o || null),
      [o]
    ), F = _.useMemo(() => !O || !$ ? !0 : O <= $, [O, $]), B = (L) => {
      const Q = L || null;
      P || E(Q), t == null || t(Q), Q && (m === void 0 && N(!1), y == null || y(!1));
    }, W = (L) => {
      m === void 0 && N(L), y == null || y(L);
    }, Y = (L) => {
      switch (L.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          L.preventDefault(), j || W(!0);
          break;
        case "Escape":
          j && (L.preventDefault(), W(!1));
          break;
      }
    };
    return /* @__PURE__ */ d.jsxs(_g, { open: j, onOpenChange: W, children: [
      /* @__PURE__ */ d.jsx(kg, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Tc,
        {
          ...x,
          ref: S,
          type: "text",
          readOnly: !0,
          placeholder: f,
          value: T ? u(T) : "",
          disabled: s,
          invalid: a || i,
          trailingIcon: c || o2,
          trailingIconSize: l,
          onTrailingIconClick: () => !s && W(!j),
          className: R(
            j && "ring-interactive-focused ring-4",
            h
          ),
          onKeyDown: Y,
          onClick: () => !s && W(!j),
          "aria-expanded": j,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ d.jsx(Eg, { children: /* @__PURE__ */ d.jsx(
        Ou,
        {
          className: R(UO, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: C,
          collisionPadding: 16,
          onEscapeKeyDown: () => W(!1),
          onPointerDownOutside: () => W(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ d.jsx(
            qx,
            {
              value: T,
              onChange: B,
              ...O && { minDate: O },
              ...$ && { maxDate: $ },
              disabled: !F,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: T || /* @__PURE__ */ new Date(),
              locale: b
            }
          )
        }
      ) })
    ] });
  }
);
XO.displayName = "DatePicker";
const ZO = /* @__PURE__ */ new Set([
  "text",
  "search",
  "email",
  "url",
  "tel",
  "number",
  "password"
]), QO = 'input, textarea, select, [role="combobox"], [contenteditable="true"]';
function JO(e) {
  var n;
  if (e.hasAttribute("hidden") || e.closest('[aria-hidden="true"]') || e instanceof HTMLInputElement && e.type === "hidden")
    return !1;
  const t = (n = e.ownerDocument.defaultView) == null ? void 0 : n.getComputedStyle(e);
  return (t == null ? void 0 : t.display) !== "none" && (t == null ? void 0 : t.visibility) !== "hidden";
}
function eD(e) {
  if (e.getAttribute("aria-disabled") === "true") return !1;
  const t = e;
  return !t.disabled && !t.readOnly;
}
function tD(e) {
  const t = e.getAttribute("role");
  return t !== null && t !== "textbox" || e.hasAttribute("aria-autocomplete") || e.hasAttribute("aria-haspopup") ? !1 : e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? ZO.has(e.type) : !1;
}
function nD(e) {
  const t = Array.from(
    e.querySelectorAll(QO)
  ).filter(JO).filter(eD), n = t[0];
  return !n || !tD(n) || n.value.trim() !== "" && t.length > 1 ? null : n;
}
function rD(e) {
  e.preventDefault();
  const t = e.currentTarget instanceof HTMLElement ? e.currentTarget : e.target;
  if (!(t instanceof HTMLElement)) return;
  const n = nD(t);
  if (!n) {
    t.focus();
    return;
  }
  n.focus(), n.value !== "" && n.select();
}
const oD = {
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg"
}, sD = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], a7 = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: s,
  actions: a = sD,
  cancellable: i = !0,
  cancelButtonLabel: c = "キャンセル",
  allowClickOutside: l = !0,
  onOpenAutoFocus: f = rD,
  bodyClassName: u,
  size: h = "md"
}) => {
  const [p, g] = _.useState(-1), y = s !== void 0 ? s : p !== -1, C = async (w) => {
    const E = a.indexOf(w);
    if (w.onAction) {
      g(E);
      const k = await w.onAction(t);
      if (g(-1), k === !1)
        return;
    } else
      g(-1);
    e && t(w.value);
  }, b = () => {
    n(t);
  }, x = (w) => {
    w.preventDefault(), i && !y && l && n(t);
  }, S = (w) => {
    if (y) {
      w.preventDefault();
      return;
    }
    w.preventDefault(), n(t);
  };
  return /* @__PURE__ */ d.jsx(nc, { open: e, onOpenChange: t, children: /* @__PURE__ */ d.jsx(rc, { children: /* @__PURE__ */ d.jsx(
    oc,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ d.jsxs(
        sc,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: x,
          onEscapeKeyDown: S,
          onOpenAutoFocus: f,
          className: R(
            `bg-surface-primary rounded-lg z-dialog min-w-96 max-md:flex
              max-md:max-h-[calc(100dvh-2rem)] max-md:w-[calc(100vw-2rem)]
              max-md:min-w-0 max-md:flex-col fixed top-1/2 left-1/2 w-2/3
              -translate-x-1/2 -translate-y-1/2 transform`,
            oD[h]
          ),
          children: [
            /* @__PURE__ */ d.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ d.jsx(
              fu,
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
                    Ve,
                    {
                      intent: "tertiary",
                      onClick: b,
                      disabled: y,
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
                      children: a.map((w, E) => {
                        const { label: k, classNames: N, onAction: P, value: T, ...j } = w;
                        return /* @__PURE__ */ d.jsx(
                          Ve,
                          {
                            loading: p === E,
                            ...j,
                            intent: w.intent || "primary",
                            className: N,
                            onClick: () => C(w),
                            children: k
                          },
                          E
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
}, my = Qs(void 0), Hu = () => {
  const e = Is(my);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, aD = ({
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
    (w) => _.isValidElement(w) && w.type === vy
  ), p = h.length, g = (w) => {
    w >= 0 && w < p && (s === void 0 && f(w), c == null || c(w));
  }, m = () => g(u + 1), y = () => g(u - 1), C = (w) => {
    s === void 0 && f(o), t(w);
  }, b = (w) => {
    w.preventDefault(), a && i && n(C);
  }, x = (w) => {
    w.preventDefault(), a && n(C);
  }, S = {
    currentStep: u,
    totalSteps: p,
    goToStep: g,
    nextStep: m,
    prevStep: y,
    isFirstStep: u === 0,
    isLastStep: u === p - 1,
    cancellable: a,
    onClose: C,
    onCancel: n
  };
  return /* @__PURE__ */ d.jsx(my.Provider, { value: S, children: /* @__PURE__ */ d.jsx(nc, { open: e, onOpenChange: C, children: /* @__PURE__ */ d.jsx(rc, { children: /* @__PURE__ */ d.jsx(
    oc,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ d.jsx(
        sc,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 max-md:flex max-md:max-h-[calc(100dvh-2rem)]
                max-md:w-[calc(100vw-2rem)] max-md:min-w-0 max-md:flex-col fixed
                top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2
                transform`,
          onPointerDownOutside: b,
          onEscapeKeyDown: x,
          children: h[u]
        }
      )
    }
  ) }) }) });
}, vy = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "max-md:min-h-0 flex flex-col", children: e }), iD = ({ children: e }) => /* @__PURE__ */ d.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ d.jsx(
  fu,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), cD = ({ children: e, className: t }) => /* @__PURE__ */ d.jsx(
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
), lD = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: s, cancellable: a } = Hu(), i = () => {
    r && r(), o(s);
  };
  return /* @__PURE__ */ d.jsxs(
    "footer",
    {
      className: `px-xl py-md max-md:gap-xs max-md:flex-col-reverse flex
        justify-between`,
      children: [
        /* @__PURE__ */ d.jsx("div", { className: "gap-xs max-md:empty:hidden max-md:*:w-full flex", children: t && a && /* @__PURE__ */ d.jsx(Ve, { intent: "tertiary", onClick: i, children: n }) }),
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
}, dD = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const s = Hu(), a = {
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
  return r ? /* @__PURE__ */ d.jsx(Jm, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ve, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ d.jsx(Ve, { ...o, onClick: i, children: e });
}, i7 = {
  Root: aD,
  Step: vy,
  Header: iD,
  Body: cD,
  Footer: lD,
  Action: dD,
  useMultiStepDialog: Hu
}, c7 = ({
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
}, gy = Qs(void 0), by = Qs(!1), xy = ({
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
  return /* @__PURE__ */ d.jsx(gy.Provider, { value: s, children: t });
}, uD = ({
  children: e
}) => /* @__PURE__ */ d.jsx(by.Provider, { value: !0, children: e }), ma = () => {
  const e = Is(gy);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = Is(by);
  return { ...e, isInFooter: t };
}, fD = he(
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
), yy = _.forwardRef(
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
    const { isCollapsed: f, isInFooter: u } = ma(), h = r ? jr : "button", p = i ? "disabled" : t, g = /* @__PURE__ */ d.jsx(
      h,
      {
        ref: l,
        className: R(
          fD({
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
    return f && s ? /* @__PURE__ */ d.jsx(Lt, { content: s, side: "right", delayDuration: 0, children: g }) : g;
  }
);
yy.displayName = "SideNavigationItem";
const hD = he("flex flex-col", {
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
}), wy = _.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, s) => {
  const { isCollapsed: a } = ma();
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      ref: s,
      className: R(
        hD({ isCollapsed: a, isLast: r }),
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
wy.displayName = "SideNavigationSection";
const pD = {
  in: "animate-in slide-in-from-top",
  out: "animate-out slide-out-to-top",
  duration: 270
}, Cy = _.createContext(null), lp = `bg-surface-secondary px-md gap-sm flex
  h-(--cc-mobile-header-height) items-center justify-between`, dd = _.forwardRef(({ icon: e, label: t, className: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
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
dd.displayName = "MobileNavigationMenuButton";
const mD = _.forwardRef(
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
  }, g) => {
    const m = _.useRef(null);
    _.useImperativeHandle(g, () => m.current);
    const y = _.useId(), [C, b] = _.useState(a), x = s !== void 0, S = x ? s : C, w = _.useRef(i);
    _.useEffect(() => {
      w.current = i;
    });
    const E = _.useCallback(
      (j) => {
        var O;
        x || b(j), (O = w.current) == null || O.call(w, j);
      },
      [x]
    );
    _.useEffect(() => {
      const j = m.current;
      if (!S || !j) return;
      const O = () => {
        getComputedStyle(j).display === "none" && E(!1);
      };
      O();
      const $ = new ResizeObserver(O);
      return $.observe(j), () => $.disconnect();
    }, [S, E]);
    const k = _.useMemo(
      () => ({ close: () => E(!1) }),
      [E]
    ), N = c === !1 ? null : { ...pD, ...c }, P = N ? {
      animationDuration: `${N.duration}ms`,
      animationTimingFunction: N.easing,
      // Holds the closed state between the end of the animation and the
      // unmount, which would otherwise flash the open menu for a frame
      animationFillMode: S ? void 0 : "forwards"
    } : void 0, T = (j, O) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex items-center", children: e }),
      /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex shrink-0 items-center", children: [
        j,
        O
      ] })
    ] });
    return /* @__PURE__ */ d.jsx(xy, { children: /* @__PURE__ */ d.jsxs(nc, { open: S, onOpenChange: E, children: [
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
            lp,
            "z-navigation inset-x-0 top-0 md:hidden fixed",
            h
          ),
          ...p,
          children: T(
            t,
            /* @__PURE__ */ d.jsx(FS, { asChild: !0, children: /* @__PURE__ */ d.jsx(dd, { icon: k2, label: l }) })
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(rc, { children: [
        /* @__PURE__ */ d.jsx(oc, { className: "z-drawer inset-0 md:hidden fixed" }),
        /* @__PURE__ */ d.jsxs(
          sc,
          {
            "aria-describedby": void 0,
            className: R(
              "z-drawer inset-0 md:hidden fixed flex flex-col",
              N && (S ? "animate-in" : "animate-out"),
              "motion-reduce:animate-none"
            ),
            style: P,
            children: [
              /* @__PURE__ */ d.jsx(fu, { className: "sr-only", children: u }),
              /* @__PURE__ */ d.jsx("div", { className: R(lp, "z-slight relative", h), children: T(
                n,
                /* @__PURE__ */ d.jsx(Jm, { asChild: !0, children: /* @__PURE__ */ d.jsx(dd, { icon: tu, label: f }) })
              ) }),
              /* @__PURE__ */ d.jsxs(
                "nav",
                {
                  "aria-labelledby": y,
                  className: R(
                    `bg-surface-primary p-md gap-md flex flex-1 flex-col
                  overflow-y-auto`,
                    N && (S ? N.in : N.out),
                    "motion-reduce:animate-none"
                  ),
                  style: P,
                  children: [
                    /* @__PURE__ */ d.jsx("span", { id: y, className: "sr-only", children: u }),
                    r && /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        className: `bg-interactive-neutral-selected text-body-primary
                      py-xs px-sm rounded-sm text-sm text-center`,
                        children: r
                      }
                    ),
                    /* @__PURE__ */ d.jsx(Cy.Provider, { value: k, children: o })
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
mD.displayName = "MobileNavigation";
const vD = _.forwardRef(
  ({ className: e, onClick: t, closeOnSelect: n = !0, tooltipLabel: r, size: o, ...s }, a) => {
    const i = _.useContext(Cy);
    return /* @__PURE__ */ d.jsx(
      yy,
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
vD.displayName = "MobileNavigationItem";
const gD = _.forwardRef(({ className: e, isLast: t, isCollapsed: n, ...r }, o) => /* @__PURE__ */ d.jsx(
  wy,
  {
    ref: o,
    className: R("px-0 items-stretch", e),
    ...r
  }
));
gD.displayName = "MobileNavigationSection";
const Sy = _g, bD = kg, xD = GE, Gu = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(Eg, { children: /* @__PURE__ */ d.jsx(
  Ou,
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
Gu.displayName = Ou.displayName;
const yD = (e) => typeof e == "string" ? e : e.label || e.value || String(e), wD = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, _y = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: s,
      onSelect: a,
      renderSuggestion: i,
      getSuggestionValue: c = yD,
      getSuggestionKey: l = wD,
      debounceMs: f = 300,
      minQueryLength: u = 0,
      loadingText: h = "Loading...",
      disabled: p,
      onFocus: g,
      onBlur: m,
      onKeyDown: y,
      ...C
    } = e, [b, x] = tt(!1), [S, w] = tt(
      []
    ), [E, k] = tt(!1), N = it(null), [P, T] = tt(0), j = it([]), O = IO(n, f), $ = po(() => {
      if (!o)
        return S;
      if (!n || n.length < u)
        return o;
      const A = n.toLowerCase();
      return o.filter((M) => c(M).toLowerCase().includes(A));
    }, [
      o,
      S,
      n,
      u,
      c
    ]);
    on(() => {
      if (s) {
        if (O.length < u) {
          w([]), x(!1), k(!1);
          return;
        }
        return N.current && N.current.abort(), N.current = new AbortController(), k(!0), s(O).then((A) => {
          w(A);
        }).catch((A) => {
          A.name !== "AbortError" && console.debug("AutoSuggest search failed:", A), w([]);
        }).finally(() => {
          k(!1);
        }), () => {
          N.current && N.current.abort();
        };
      }
    }, [O, s, u]);
    const F = _e(
      (A) => {
        const M = c(A);
        r(M), a == null || a(A), x(!1);
      },
      [r, a, c]
    ), B = _e(
      (A) => {
        p || x(!0), g == null || g(A);
      },
      [p, g]
    ), W = _e(
      (A) => {
        x(!1), m == null || m(A);
      },
      [m]
    ), Y = _e(
      (A) => {
        const M = A.target.value;
        r(M), !b && $.length > 0 && x(!0);
      },
      [r, b, $.length]
    );
    on(() => {
      T(0), j.current = [];
    }, [$]), on(() => {
      var A;
      b && P >= 0 && j.current[P] && ((A = j.current[P]) == null || A.scrollIntoView({
        block: "nearest"
      }));
    }, [P, b]);
    const D = _e(
      (A) => {
        if (!b) {
          y == null || y(A);
          return;
        }
        switch (A.key) {
          case "Escape":
            A.preventDefault(), x(!1);
            break;
          case "Enter": {
            A.preventDefault();
            const M = $[P];
            M && F(M);
            break;
          }
          case "ArrowDown":
            A.preventDefault(), T(
              (M) => M < $.length - 1 ? M + 1 : M
            );
            break;
          case "ArrowUp":
            A.preventDefault(), T((M) => M > 0 ? M - 1 : M);
            break;
        }
        y == null || y(A);
      },
      [b, P, $, F, y]
    ), L = b && !p && ($.length > 0 || E), Q = L && P >= 0 ? `autosuggest-item-${P}` : void 0;
    return /* @__PURE__ */ d.jsxs(Sy, { open: L, children: [
      /* @__PURE__ */ d.jsx(xD, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Tc,
        {
          ref: t,
          value: n,
          onChange: Y,
          onFocus: B,
          onBlur: W,
          onKeyDown: D,
          disabled: p,
          role: "combobox",
          "aria-expanded": L,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": Q,
          "aria-autocomplete": "list",
          ...C
        }
      ) }),
      /* @__PURE__ */ d.jsx(
        Gu,
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
          children: E ? /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ d.jsx(S2, { className: "h-4 w-4 animate-spin" }),
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
              children: $.map((A, M) => {
                const V = c(A), z = M === P, K = `autosuggest-item-${M}`;
                return /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    id: K,
                    ref: (q) => {
                      j.current[M] = q;
                    },
                    role: "option",
                    "aria-selected": z,
                    "data-value": V,
                    onClick: () => F(A),
                    onPointerDown: (q) => {
                      q.preventDefault(), F(A);
                    },
                    onMouseEnter: () => T(M),
                    className: R(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      z && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(A) : c(A)
                  },
                  l(A, M)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
_y.displayName = "AutoSuggest";
var Se = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(Se || {}), ne = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(ne || {});
const CD = [
  {
    backgroundColor: ne.AccentSunSoft,
    textColor: Se.AccentSunStrong,
    iconColor: ne.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: ne.AccentSunPale,
    textColor: Se.AccentSunStrong,
    iconColor: ne.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: ne.AccentWoodSoft,
    textColor: Se.AccentWoodStrong,
    iconColor: ne.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: ne.AccentWoodPale,
    textColor: Se.AccentWoodStrong,
    iconColor: ne.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: ne.AccentOrangeSoft,
    textColor: Se.AccentOrangeStrong,
    iconColor: ne.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: ne.AccentOrangePale,
    textColor: Se.AccentOrangeStrong,
    iconColor: ne.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: ne.AccentYellowSoft,
    textColor: Se.AccentYellowStrong,
    iconColor: ne.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: ne.AccentYellowPale,
    textColor: Se.AccentYellowStrong,
    iconColor: ne.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: ne.AccentLemonSoft,
    textColor: Se.AccentLemonStrong,
    iconColor: ne.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: ne.AccentLemonPale,
    textColor: Se.AccentLemonStrong,
    iconColor: ne.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: ne.AccentGrassSoft,
    textColor: Se.AccentGrassStrong,
    iconColor: ne.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: ne.AccentGrassPale,
    textColor: Se.AccentGrassStrong,
    iconColor: ne.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: ne.AccentLimeSoft,
    textColor: Se.AccentLimeStrong,
    iconColor: ne.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: ne.AccentLimePale,
    textColor: Se.AccentLimeStrong,
    iconColor: ne.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: ne.AccentGreenSoft,
    textColor: Se.AccentGreenStrong,
    iconColor: ne.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: ne.AccentGreenPale,
    textColor: Se.AccentGreenStrong,
    iconColor: ne.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: ne.AccentPeacockSoft,
    textColor: Se.AccentPeacockStrong,
    iconColor: ne.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: ne.AccentPeacockPale,
    textColor: Se.AccentPeacockStrong,
    iconColor: ne.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: ne.AccentCyanSoft,
    textColor: Se.AccentCyanStrong,
    iconColor: ne.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: ne.AccentCyanPale,
    textColor: Se.AccentCyanStrong,
    iconColor: ne.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: ne.AccentSkySoft,
    textColor: Se.AccentSkyStrong,
    iconColor: ne.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: ne.AccentSkyPale,
    textColor: Se.AccentSkyStrong,
    iconColor: ne.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: ne.AccentSeaSoft,
    textColor: Se.AccentSeaStrong,
    iconColor: ne.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: ne.AccentSeaPale,
    textColor: Se.AccentSeaStrong,
    iconColor: ne.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: ne.AccentVioletSoft,
    textColor: Se.AccentVioletStrong,
    iconColor: ne.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: ne.AccentVioletPale,
    textColor: Se.AccentVioletStrong,
    iconColor: ne.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: ne.AccentPurpleSoft,
    textColor: Se.AccentPurpleStrong,
    iconColor: ne.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: ne.AccentPurplePale,
    textColor: Se.AccentPurpleStrong,
    iconColor: ne.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: ne.AccentMagentaSoft,
    textColor: Se.AccentMagentaStrong,
    iconColor: ne.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: ne.AccentMagentaPale,
    textColor: Se.AccentMagentaStrong,
    iconColor: ne.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: ne.AccentCharcoalSoft,
    textColor: Se.AccentCharchoalStrong,
    iconColor: ne.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: ne.AccentCharcoalPale,
    textColor: Se.AccentCharchoalStrong,
    iconColor: ne.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: ne.AccentGraySoft,
    textColor: Se.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: ne.AccentGrayPale,
    textColor: Se.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: ne.AccentGrayPale,
    textColor: Se.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: ne.AccentBambooPale,
    textColor: Se.AccentBambooStrong,
    iconColor: ne.AccentBambooStrong,
    code: 10
  }
], SD = he(
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
), Ri = ({
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
  const p = CD.find(
    (b) => b.code === e
  ), g = () => l === "secondary" ? `var(${p == null ? void 0 : p.iconColor})` : `var(${p == null ? void 0 : p.textColor})`, m = R(
    SD({
      size: a,
      selected: u ? !1 : c,
      interactive: !!s && !u,
      variant: l,
      disabled: u
    }),
    n
  ), y = {
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
      style: y,
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
            style: u ? void 0 : { color: g() },
            children: at(f, { size: 14 })
          }
        ),
        h ? /* @__PURE__ */ d.jsx(cm, { children: t }) : /* @__PURE__ */ d.jsx("div", { className: "pt-0.25 relative h-full truncate", children: t }),
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
}, ky = _.forwardRef(
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
    disabled: g,
    className: m,
    onValidateTag: y,
    defaultValidationError: C = "Invalid tag",
    ...b
  }, x) => {
    const [S, w] = tt(""), E = a ?? S, k = i ?? w, [N, P] = tt(!1), { compositionHandlers: T, guardKeyHandler: j } = jc(), [O, $] = tt(null), F = it(null);
    _.useImperativeHandle(x, () => F.current);
    const B = _.useMemo(() => {
      const q = o.map(
        (I) => I.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(q.join("|"));
    }, [o]), W = _e(
      (q) => !(!q || !r && e.includes(q) || n && e.length >= n),
      [e, r, n]
    ), Y = _e(
      (q) => {
        const I = q.trim();
        if (W(I)) {
          if (y) {
            const re = y(I);
            if (!re.valid) {
              $(
                re.error ?? C
              );
              return;
            }
          }
          t([...e, I]), k(""), $(null);
        }
      },
      [
        e,
        t,
        W,
        k,
        y,
        C
      ]
    ), D = _e(
      (q) => {
        const I = e.filter((re, te) => te !== q);
        t(I);
      },
      [e, t]
    ), L = _e(
      (q) => {
        const I = q.target.value, re = I[I.length - 1];
        if (re && o.includes(re)) {
          const de = I.slice(0, -1);
          de && Y(de);
          return;
        }
        const te = I.split(B);
        if (te.length > 1) {
          te.filter(Boolean).forEach((de) => Y(de));
          return;
        }
        k(I);
      },
      [o, B, Y, k]
    ), Q = _e(
      (q) => {
        q.key === "Enter" && E.trim() && (q.preventDefault(), Y(E)), (q.key === "Backspace" || q.key === "Delete") && !E && e.length > 0 && (q.preventDefault(), D(e.length - 1));
      },
      [E, e.length, Y, D]
    ), A = _e(() => {
      E.trim() && Y(E), P(!1), $(null);
    }, [E, Y]), M = g || (n ? e.length >= n : !1), V = e.length === 0 && !E, z = !!l, K = !!f;
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: R(
            py({ invalid: p }),
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
                children: at(l, { size: h })
              }
            ),
            /* @__PURE__ */ d.jsxs(
              "div",
              {
                className: R(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  z ? "pl-0" : "pl-sm",
                  K ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((q, I) => /* @__PURE__ */ d.jsx(
                    Ri,
                    {
                      ...!g && { onRemove: () => D(I) },
                      children: q
                    },
                    I
                  )),
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      ref: F,
                      value: E,
                      onChange: L,
                      onKeyDown: j(Q),
                      onFocus: () => P(!0),
                      onBlur: A,
                      onCompositionStart: T.onCompositionStart,
                      onCompositionEnd: T.onCompositionEnd,
                      placeholder: V ? s : "",
                      disabled: M,
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
            f && /* @__PURE__ */ d.jsx(
              "div",
              {
                className: ks({
                  position: "trailing"
                }),
                children: at(f, { size: u })
              }
            )
          ]
        }
      ),
      (c || O) && /* @__PURE__ */ d.jsx(
        "p",
        {
          className: R(
            "mt-xxs text-sm",
            O ? "text-body-alert" : "text-body-secondary",
            !O && !N && "invisible"
          ),
          children: O || c
        }
      )
    ] });
  }
);
ky.displayName = "TagInput";
const l7 = Object.assign(Tc, {
  AutoSuggest: _y,
  TagInput: ky
});
var dp = 1, _D = 0.9, kD = 0.8, ED = 0.17, yl = 0.1, wl = 0.999, ND = 0.9999, MD = 0.99, PD = /[\\\/_+.#"@\[\(\{&]/, AD = /[\\\/_+.#"@\[\(\{&]/g, RD = /[\s-]/, Ey = /[\s-]/g;
function ud(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? dp : MD;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), l = n.indexOf(c, o), f = 0, u, h, p, g; l >= 0; ) u = ud(e, t, n, r, l + 1, s + 1, a), u > f && (l === o ? u *= dp : PD.test(e.charAt(l - 1)) ? (u *= kD, p = e.slice(o, l - 1).match(AD), p && o > 0 && (u *= Math.pow(wl, p.length))) : RD.test(e.charAt(l - 1)) ? (u *= _D, g = e.slice(o, l - 1).match(Ey), g && o > 0 && (u *= Math.pow(wl, g.length))) : (u *= ED, o > 0 && (u *= Math.pow(wl, l - o))), e.charAt(l) !== t.charAt(s) && (u *= ND)), (u < yl && n.charAt(l - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(l - 1) !== r.charAt(s)) && (h = ud(e, t, n, r, l + 1, s + 2, a), h * yl > u && (u = h * yl)), u > f && (f = u), l = n.indexOf(c, l + 1);
  return a[i] = f, f;
}
function up(e) {
  return e.toLowerCase().replace(Ey, " ");
}
function OD(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ud(e, t, up(e), up(t), 0, 0, {});
}
var ts = '[cmdk-group=""]', Cl = '[cmdk-group-items=""]', DD = '[cmdk-group-heading=""]', Ny = '[cmdk-item=""]', fp = `${Ny}:not([aria-disabled="true"])`, fd = "cmdk-item-select", no = "data-value", ID = (e, t, n) => OD(e, t, n), My = v.createContext(void 0), va = () => v.useContext(My), Py = v.createContext(void 0), Yu = () => v.useContext(Py), Ay = v.createContext(void 0), Ry = v.forwardRef((e, t) => {
  let n = ro(() => {
    var M, V;
    return { search: "", value: (V = (M = e.value) != null ? M : e.defaultValue) != null ? V : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = ro(() => /* @__PURE__ */ new Set()), o = ro(() => /* @__PURE__ */ new Map()), s = ro(() => /* @__PURE__ */ new Map()), a = ro(() => /* @__PURE__ */ new Set()), i = Oy(e), { label: c, children: l, value: f, onValueChange: u, filter: h, shouldFilter: p, loop: g, disablePointerSelection: m = !1, vimBindings: y = !0, ...C } = e, b = Qe(), x = Qe(), S = Qe(), w = v.useRef(null), E = GD();
  Or(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, k.emit();
    }
  }, [f]), Or(() => {
    E(6, $);
  }, []);
  let k = v.useMemo(() => ({ subscribe: (M) => (a.current.add(M), () => a.current.delete(M)), snapshot: () => n.current, setState: (M, V, z) => {
    var K, q, I, re;
    if (!Object.is(n.current[M], V)) {
      if (n.current[M] = V, M === "search") O(), T(), E(1, j);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let te = document.getElementById(S);
          te ? te.focus() : (K = document.getElementById(b)) == null || K.focus();
        }
        if (E(7, () => {
          var te;
          n.current.selectedItemId = (te = F()) == null ? void 0 : te.id, k.emit();
        }), z || E(5, $), ((q = i.current) == null ? void 0 : q.value) !== void 0) {
          let te = V ?? "";
          (re = (I = i.current).onValueChange) == null || re.call(I, te);
          return;
        }
      }
      k.emit();
    }
  }, emit: () => {
    a.current.forEach((M) => M());
  } }), []), N = v.useMemo(() => ({ value: (M, V, z) => {
    var K;
    V !== ((K = s.current.get(M)) == null ? void 0 : K.value) && (s.current.set(M, { value: V, keywords: z }), n.current.filtered.items.set(M, P(V, z)), E(2, () => {
      T(), k.emit();
    }));
  }, item: (M, V) => (r.current.add(M), V && (o.current.has(V) ? o.current.get(V).add(M) : o.current.set(V, /* @__PURE__ */ new Set([M]))), E(3, () => {
    O(), T(), n.current.value || j(), k.emit();
  }), () => {
    s.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let z = F();
    E(4, () => {
      O(), (z == null ? void 0 : z.getAttribute("id")) === M && j(), k.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: S, labelId: x, listInnerRef: w }), []);
  function P(M, V) {
    var z, K;
    let q = (K = (z = i.current) == null ? void 0 : z.filter) != null ? K : ID;
    return M ? q(M, n.current.search, V) : 0;
  }
  function T() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, V = [];
    n.current.filtered.groups.forEach((K) => {
      let q = o.current.get(K), I = 0;
      q.forEach((re) => {
        let te = M.get(re);
        I = Math.max(te, I);
      }), V.push([K, I]);
    });
    let z = w.current;
    B().sort((K, q) => {
      var I, re;
      let te = K.getAttribute("id"), de = q.getAttribute("id");
      return ((I = M.get(de)) != null ? I : 0) - ((re = M.get(te)) != null ? re : 0);
    }).forEach((K) => {
      let q = K.closest(Cl);
      q ? q.appendChild(K.parentElement === q ? K : K.closest(`${Cl} > *`)) : z.appendChild(K.parentElement === z ? K : K.closest(`${Cl} > *`));
    }), V.sort((K, q) => q[1] - K[1]).forEach((K) => {
      var q;
      let I = (q = w.current) == null ? void 0 : q.querySelector(`${ts}[${no}="${encodeURIComponent(K[0])}"]`);
      I == null || I.parentElement.appendChild(I);
    });
  }
  function j() {
    let M = B().find((z) => z.getAttribute("aria-disabled") !== "true"), V = M == null ? void 0 : M.getAttribute(no);
    k.setState("value", V || void 0);
  }
  function O() {
    var M, V, z, K;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let q = 0;
    for (let I of r.current) {
      let re = (V = (M = s.current.get(I)) == null ? void 0 : M.value) != null ? V : "", te = (K = (z = s.current.get(I)) == null ? void 0 : z.keywords) != null ? K : [], de = P(re, te);
      n.current.filtered.items.set(I, de), de > 0 && q++;
    }
    for (let [I, re] of o.current) for (let te of re) if (n.current.filtered.items.get(te) > 0) {
      n.current.filtered.groups.add(I);
      break;
    }
    n.current.filtered.count = q;
  }
  function $() {
    var M, V, z;
    let K = F();
    K && (((M = K.parentElement) == null ? void 0 : M.firstChild) === K && ((z = (V = K.closest(ts)) == null ? void 0 : V.querySelector(DD)) == null || z.scrollIntoView({ block: "nearest" })), K.scrollIntoView({ block: "nearest" }));
  }
  function F() {
    var M;
    return (M = w.current) == null ? void 0 : M.querySelector(`${Ny}[aria-selected="true"]`);
  }
  function B() {
    var M;
    return Array.from(((M = w.current) == null ? void 0 : M.querySelectorAll(fp)) || []);
  }
  function W(M) {
    let V = B()[M];
    V && k.setState("value", V.getAttribute(no));
  }
  function Y(M) {
    var V;
    let z = F(), K = B(), q = K.findIndex((re) => re === z), I = K[q + M];
    (V = i.current) != null && V.loop && (I = q + M < 0 ? K[K.length - 1] : q + M === K.length ? K[0] : K[q + M]), I && k.setState("value", I.getAttribute(no));
  }
  function D(M) {
    let V = F(), z = V == null ? void 0 : V.closest(ts), K;
    for (; z && !K; ) z = M > 0 ? BD(z, ts) : HD(z, ts), K = z == null ? void 0 : z.querySelector(fp);
    K ? k.setState("value", K.getAttribute(no)) : Y(M);
  }
  let L = () => W(B().length - 1), Q = (M) => {
    M.preventDefault(), M.metaKey ? L() : M.altKey ? D(1) : Y(1);
  }, A = (M) => {
    M.preventDefault(), M.metaKey ? W(0) : M.altKey ? D(-1) : Y(-1);
  };
  return v.createElement(oe.div, { ref: t, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (M) => {
    var V;
    (V = C.onKeyDown) == null || V.call(C, M);
    let z = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || z)) switch (M.key) {
      case "n":
      case "j": {
        y && M.ctrlKey && Q(M);
        break;
      }
      case "ArrowDown": {
        Q(M);
        break;
      }
      case "p":
      case "k": {
        y && M.ctrlKey && A(M);
        break;
      }
      case "ArrowUp": {
        A(M);
        break;
      }
      case "Home": {
        M.preventDefault(), W(0);
        break;
      }
      case "End": {
        M.preventDefault(), L();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let K = F();
        if (K) {
          let q = new Event(fd);
          K.dispatchEvent(q);
        }
      }
    }
  } }, v.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: KD }, c), $c(e, (M) => v.createElement(Py.Provider, { value: k }, v.createElement(My.Provider, { value: N }, M))));
}), jD = v.forwardRef((e, t) => {
  var n, r;
  let o = Qe(), s = v.useRef(null), a = v.useContext(Ay), i = va(), c = Oy(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  Or(() => {
    if (!l) return i.item(o, a == null ? void 0 : a.id);
  }, [l]);
  let f = Dy(o, s, [e.value, e.children, s], e.keywords), u = Yu(), h = ir((E) => E.value && E.value === f.current), p = ir((E) => l || i.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  v.useEffect(() => {
    let E = s.current;
    if (!(!E || e.disabled)) return E.addEventListener(fd, g), () => E.removeEventListener(fd, g);
  }, [p, e.onSelect, e.disabled]);
  function g() {
    var E, k;
    m(), (k = (E = c.current).onSelect) == null || k.call(E, f.current);
  }
  function m() {
    u.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: y, value: C, onSelect: b, forceMount: x, keywords: S, ...w } = e;
  return v.createElement(oe.div, { ref: Ln(s, t), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!h, "data-disabled": !!y, "data-selected": !!h, onPointerMove: y || i.getDisablePointerSelection() ? void 0 : m, onClick: y ? void 0 : g }, e.children);
}), TD = v.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = Qe(), i = v.useRef(null), c = v.useRef(null), l = Qe(), f = va(), u = ir((p) => o || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Or(() => f.group(a), []), Dy(a, i, [e.value, e.heading, c]);
  let h = v.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return v.createElement(oe.div, { ref: Ln(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && v.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), $c(e, (p) => v.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, v.createElement(Ay.Provider, { value: h }, p))));
}), $D = v.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = v.useRef(null), s = ir((a) => !a.search);
  return !n && !s ? null : v.createElement(oe.div, { ref: Ln(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), WD = v.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Yu(), a = ir((l) => l.search), i = ir((l) => l.selectedItemId), c = va();
  return v.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), v.createElement(oe.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (l) => {
    o || s.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), LD = v.forwardRef((e, t) => {
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
  }, []), v.createElement(oe.div, { ref: Ln(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, $c(e, (l) => v.createElement("div", { ref: Ln(a, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), FD = v.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return v.createElement(nc, { open: n, onOpenChange: r }, v.createElement(rc, { container: a }, v.createElement(oc, { "cmdk-overlay": "", className: o }), v.createElement(sc, { "aria-label": e.label, "cmdk-dialog": "", className: s }, v.createElement(Ry, { ref: t, ...i }))));
}), VD = v.forwardRef((e, t) => ir((n) => n.filtered.count === 0) ? v.createElement(oe.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), zD = v.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return v.createElement(oe.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, $c(e, (a) => v.createElement("div", { "aria-hidden": !0 }, a)));
}), Dt = Object.assign(Ry, { List: LD, Item: jD, Input: WD, Group: TD, Separator: $D, Dialog: FD, Empty: VD, Loading: zD });
function BD(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function HD(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Oy(e) {
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
  let t = Yu(), n = () => e(t.snapshot());
  return v.useSyncExternalStore(t.subscribe, n, n);
}
function Dy(e, t, n, r = []) {
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
var GD = () => {
  let [e, t] = v.useState(), n = ro(() => /* @__PURE__ */ new Map());
  return Or(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function YD(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function $c({ asChild: e, children: t }, n) {
  return e && v.isValidElement(t) ? v.cloneElement(YD(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var KD = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Iy = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Dt,
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
Iy.displayName = Dt.displayName;
const jy = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsx(eu, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ d.jsx(
            Dt.Input,
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
jy.displayName = Dt.Input.displayName;
const Ty = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Dt.List,
  {
    ref: n,
    className: R(
      "max-h-[18.75rem] overflow-x-hidden overflow-y-auto",
      e
    ),
    ...t
  }
));
Ty.displayName = Dt.List.displayName;
const $y = _.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Dt.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
$y.displayName = Dt.Empty.displayName;
const ai = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Dt.Group,
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
ai.displayName = Dt.Group.displayName;
const UD = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Dt.Separator,
  {
    ref: n,
    className: R(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
UD.displayName = Dt.Separator.displayName;
const ii = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  Dt.Item,
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
ii.displayName = Dt.Item.displayName;
const hp = he("ease-in-out transition-all duration-300", {
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
}), qD = ({
  options: e,
  onValueChange: t = (Ge) => Ge,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: s = (Ge) => Ge,
  variant: a,
  defaultValue: i = [],
  value: c,
  placeholder: l = "選択してください",
  placeholderAriaLabel: f = "選択してください",
  triggerDescription: u = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: h = "オプションが選択されていません",
  searchHelpText: p = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: g = "利用可能なオプションを検索",
  optionsListAriaLabel: m = "利用可能なオプション",
  selectAllLabel: y = "すべて選択",
  selectAllCountLabel: C = "オプション",
  clearAllLabel: b = "すべてクリア",
  closeLabel: x = "閉じる",
  footerContent: S,
  moreSelectedLabel: w = "その他",
  searchPlaceholder: E = "オプションを検索...",
  maxCount: k = 10,
  maxSelected: N,
  maxSelectedReachedLabel: P = "選択できる上限に達しました。",
  modalPopover: T = !1,
  className: j,
  hideSelectAll: O = !1,
  searchable: $ = !0,
  emptyIndicator: F = "結果が見つかりません。",
  noOptionsIndicator: B = "利用可能なオプションがありません。",
  autoSize: W = !1,
  singleLine: Y = !1,
  popoverClassName: D,
  side: L = "bottom",
  disabled: Q = !1,
  invalid: A = !1,
  responsive: M,
  minWidth: V,
  maxWidth: z,
  deduplicateOptions: K = !1,
  resetOnDefaultValueChange: q = !0,
  closeOnSelect: I = !1,
  filterByValueAndLabel: re = !1,
  filterOption: te,
  renderOption: de,
  customTrigger: ge,
  selectionDisplayMode: me = "default",
  hideSelection: ke = !1,
  maxDisplayedOptions: De,
  totalOptionsCount: Te,
  moreOptionsLabel: ot = (Ge) => `検索テキストを入力して他${Ge}件を表示`,
  ...qe
}, zt) => {
  const [Ge, wt] = _.useState(i), [$e, pt] = _.useState(!1), [Xe, Bt] = _.useState(""), Ht = c !== void 0, ve = Ht ? c : Ge, Ct = N !== void 0 && ve.length >= N, [Rn, Jt] = _.useState(""), [Hn, fn] = _.useState(""), Gt = _.useRef(ve.length), On = _.useRef($e), Gn = _.useRef(Xe), mt = _.useCallback(
    (U, le = "polite") => {
      le === "assertive" ? (fn(U), setTimeout(() => fn(""), 100)) : (Jt(U), setTimeout(() => Jt(""), 100));
    },
    []
  ), H = _.useCallback(
    (U) => {
      Ht || wt(U), t(U);
    },
    [Ht, t]
  ), J = _.useId(), ee = `${J}-listbox`, G = `${J}-description`, ce = `${J}-count`, Z = _.useRef(i), se = _.useCallback(
    (U) => {
      const le = U[0];
      return !!(le && typeof le == "object" && "heading" in le);
    },
    []
  ), fe = _.useCallback((U, le) => {
    if (U.length !== le.length) return !1;
    const be = [...U].sort(), Pe = [...le].sort();
    return be.every((je, st) => je === Pe[st]);
  }, []), pe = _.useCallback(() => {
    pt(!1), Bt(""), H(i);
  }, [i, H]), ze = _.useRef(null);
  _.useImperativeHandle(
    zt,
    () => ({
      reset: pe,
      getSelectedValues: () => ve,
      setSelectedValues: H,
      clear: () => H([]),
      focus: () => {
        if (ze.current) {
          ze.current.focus();
          const U = ze.current.style.outline, le = ze.current.style.outlineOffset;
          ze.current.style.outline = "2px solid hsl(var(--ring))", ze.current.style.outlineOffset = "2px", setTimeout(() => {
            ze.current && (ze.current.style.outline = U, ze.current.style.outlineOffset = le);
          }, 1e3);
        }
      }
    }),
    [pe, ve, H]
  );
  const [Ze, At] = _.useState("desktop");
  _.useEffect(() => {
    if (typeof window > "u") return;
    const U = () => {
      const le = window.innerWidth;
      le < 640 ? At("mobile") : le < 1024 ? At("tablet") : At("desktop");
    };
    return U(), window.addEventListener("resize", U), () => {
      typeof window < "u" && window.removeEventListener("resize", U);
    };
  }, []);
  const St = (() => {
    if (!M)
      return {
        maxCount: k,
        compactMode: !1
      };
    if (M === !0) {
      const be = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ze];
      return {
        maxCount: (be == null ? void 0 : be.maxCount) ?? k,
        compactMode: (be == null ? void 0 : be.compactMode) ?? !1
      };
    }
    const U = M[Ze];
    return {
      maxCount: (U == null ? void 0 : U.maxCount) ?? k,
      compactMode: (U == null ? void 0 : U.compactMode) ?? !1
    };
  })(), dt = _.useCallback(() => {
    if (e.length === 0) return [];
    let U;
    se(e) ? U = e.flatMap((je) => je.options) : U = e;
    const le = /* @__PURE__ */ new Set(), be = [], Pe = [];
    return U.forEach((je) => {
      le.has(je.value) ? (be.push(je.value), K || Pe.push(je)) : (le.add(je.value), Pe.push(je));
    }), process.env.NODE_ENV === "development" && be.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${K ? "automatically removed" : "detected"}: ${be.join(
        ", "
      )}. ${K ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), K ? Pe : U;
  }, [e, K, se]), en = _.useCallback(
    (U) => {
      const le = dt().find((be) => be.value === U);
      return !le && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${U}" not found in options list`
      ), le;
    },
    [dt]
  ), Ea = _.useCallback(
    (U, le) => {
      const [be, Pe] = U.split(":");
      if (!re)
        return Pe && Pe.toLowerCase().includes(le.toLowerCase()) ? 1 : 0;
      const je = le.toLowerCase();
      return Pe && Pe.toLowerCase().includes(je) || be && be.toLowerCase().includes(je) ? 1 : 0;
    },
    [re]
  ), pr = (U) => {
    if (U.key === "Enter")
      pt(!0);
    else if (U.key === "Backspace" && !U.currentTarget.value) {
      const le = [...ve];
      le.pop(), H(le);
    }
  }, Zc = (U) => {
    if (Q) return;
    const le = en(U);
    if (le != null && le.disabled) return;
    const be = ve.includes(U);
    if (!be && Ct) {
      mt(P, "assertive");
      return;
    }
    const Pe = be ? ve.filter((je) => je !== U) : [...ve, U];
    H(Pe), I && pt(!1);
  }, Qf = () => {
    Q || H([]);
  }, z1 = () => {
    Q || pt((U) => !U);
  }, B1 = () => {
    if (Q) return;
    const U = ve.slice(
      0,
      St.maxCount
    );
    H(U);
  }, H1 = () => {
    if (Q) return;
    const U = dt().filter((le) => !le.disabled);
    N !== void 0 && U.length > N || (ve.length === U.length ? Qf() : H(U.map((le) => le.value)), I && pt(!1));
  }, Qc = de || ((U) => {
    const { option: le, location: be, onRemove: Pe, disabled: je } = U;
    return be === "badge" ? /* @__PURE__ */ d.jsx(
      Ri,
      {
        className: R(
          hp({ variant: a }),
          St.compactMode && "text-xs px-1.5 py-0.5",
          Ze === "mobile" && "max-w-[7.5rem] truncate",
          Y && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          je && "cursor-not-allowed"
        ),
        ...!je && { onRemove: Pe },
        children: le.label
      }
    ) : le.label;
  }), Jc = dt().length > 0, Xo = Xe.trim(), Na = !!Xo, Jf = !!te && Na, mr = _.useMemo(() => !te || !Xo ? e : se(e) ? e.map((U) => ({
    ...U,
    options: U.options.filter(
      (le) => te(le, Xo)
    )
  })) : e.filter((U) => te(U, Xo)), [e, te, Xo, se]), Ma = De !== void 0 && (!Na || !!n || !!te), eh = _.useCallback(
    (U) => !!U.disabled || Ct && !ve.includes(U.value),
    [Ct, ve]
  ), G1 = N !== void 0 && dt().filter((U) => !U.disabled).length > N;
  _.useEffect(() => {
    if (!q || Ht) return;
    const U = Z.current;
    fe(U, i) || (fe(ve, i) || wt(i), Z.current = [...i]);
  }, [
    i,
    ve,
    fe,
    q,
    Ht
  ]);
  const el = {
    minWidth: V || (Ze === "mobile" ? "0px" : "12.5rem"),
    maxWidth: z || "100%",
    popoverMaxWidth: z || "32rem",
    width: W ? "auto" : "100%"
  }, th = _.useMemo(() => me === "default" || ve.length === 0 ? l : ve.map((U) => {
    var le;
    return (le = en(U)) == null ? void 0 : le.label;
  }).filter(Boolean).join(", "), [ve, en, l, me]);
  return _.useEffect(() => {
    $e || Bt("");
  }, [$e]), _.useEffect(() => {
    const U = ve.length, le = dt(), be = le.filter((Pe) => !Pe.disabled).length;
    if (U !== Gt.current) {
      const Pe = U - Gt.current;
      if (Pe > 0) {
        const st = ve.slice(-Pe).map((vt) => {
          var Dn;
          return (Dn = le.find((Hr) => Hr.value === vt)) == null ? void 0 : Dn.label;
        }).filter(Boolean);
        st.length === 1 ? mt(
          `${st[0]} selected. ${U} of ${be} options selected.`
        ) : mt(
          `${st.length} options selected. ${U} of ${be} total selected.`
        );
      } else Pe < 0 && mt(
        `Option removed. ${U} of ${be} options selected.`
      );
      Gt.current = U;
    }
    $e !== On.current && (mt(
      $e ? `Dropdown opened. ${be} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), On.current = $e), Xe !== Gn.current && Xe !== void 0 && (Xe && $e && mt(`Searching for "${Xe}"`), Gn.current = Xe);
  }, [ve, $e, Xe, mt, dt]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ d.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: Rn }),
      /* @__PURE__ */ d.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Hn })
    ] }),
    /* @__PURE__ */ d.jsxs(
      Sy,
      {
        open: $e,
        onOpenChange: pt,
        modal: T,
        children: [
          /* @__PURE__ */ d.jsx("div", { id: G, className: "sr-only", children: u }),
          /* @__PURE__ */ d.jsx("div", { id: ce, className: "sr-only", "aria-live": "polite", children: ve.length === 0 ? h : `${ve.length} option${ve.length === 1 ? "" : "s"} selected: ${ve.map((U) => {
            var le;
            return (le = en(U)) == null ? void 0 : le.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ d.jsxs("div", { className: R(W && "w-auto", j), children: [
            /* @__PURE__ */ d.jsx(bD, { asChild: !0, children: ge || /* @__PURE__ */ d.jsx(
              "button",
              {
                ref: ze,
                ...qe,
                onClick: z1,
                disabled: Q,
                className: R(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  W ? "w-auto" : "w-full",
                  !A && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  A && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  St.compactMode && "min-h-8 text-sm",
                  Ze === "mobile" && "min-h-12"
                ),
                style: {
                  ...el,
                  maxWidth: `min(${el.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": $e,
                "aria-haspopup": "listbox",
                "aria-controls": $e ? ee : void 0,
                "aria-describedby": `${G} ${ce}`,
                "aria-label": `Multi-select: ${ve.length} of ${dt().length} options selected. ${f}`,
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
                            Q ? "text-body-disabled" : $e || me === "inline" && th !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: th
                        }
                      ),
                      /* @__PURE__ */ d.jsx(
                        ea,
                        {
                          className: R(
                            "h-4 mx-xs cursor-pointer",
                            Q ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(ke || me === "inline") && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              ve.slice(0, St.maxCount).map((U) => {
                const le = en(U);
                return le ? /* @__PURE__ */ d.jsx(_.Fragment, { children: Qc({
                  option: le,
                  location: "badge",
                  onRemove: () => Zc(U),
                  disabled: Q
                }) }, U) : null;
              }).filter(Boolean),
              ve.length > St.maxCount && /* @__PURE__ */ d.jsxs(
                Ri,
                {
                  className: R(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    hp({ variant: a }),
                    St.compactMode && "text-xs px-1.5 py-0.5",
                    Y && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    Q && "cursor-not-allowed"
                  ),
                  ...!Q && { onRemove: B1 },
                  children: [
                    "+ ",
                    ve.length - St.maxCount,
                    " ",
                    w
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ d.jsx(
            Gu,
            {
              id: ee,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: R(
                "p-0 w-auto",
                Ze === "mobile" && "w-[85vw] max-w-[17.5rem]",
                Ze === "tablet" && "max-w-md w-[70vw]",
                Ze === "desktop" && "min-w-[18.75rem]",
                D
              ),
              style: {
                maxWidth: `min(${el.popoverMaxWidth}, 85vw)`,
                maxHeight: Ze === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              side: L,
              align: "start",
              children: /* @__PURE__ */ d.jsxs(
                Iy,
                {
                  filter: Ea,
                  shouldFilter: !n && !te,
                  children: [
                    $ && /* @__PURE__ */ d.jsxs("header", { children: [
                      /* @__PURE__ */ d.jsx("div", { id: `${J}-search-help`, className: "sr-only", children: p }),
                      /* @__PURE__ */ d.jsx(
                        jy,
                        {
                          placeholder: E,
                          onKeyDown: pr,
                          value: Xe,
                          onValueChange: (U) => {
                            Bt(U), n == null || n(U);
                          },
                          "aria-label": g,
                          "aria-describedby": `${J}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d.jsxs(
                      Ty,
                      {
                        className: R(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          Ze === "mobile" && "max-h-[calc(50vh-56px)]"
                        ),
                        style: { overscrollBehaviorY: "contain" },
                        children: [
                          r && /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                              children: /* @__PURE__ */ d.jsx(Oc.Circular, { size: "sm", children: o })
                            }
                          ),
                          !r && (Jc || Na) && /* @__PURE__ */ d.jsx($y, { children: F }),
                          !r && !Jc && !Na && /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: B
                            }
                          ),
                          !r && !O && !G1 && !Xe && Jc && /* @__PURE__ */ d.jsx(ai, { children: /* @__PURE__ */ d.jsxs(
                            ii,
                            {
                              value: "select-all",
                              onSelect: H1,
                              role: "option",
                              "aria-selected": ve.length === dt().filter((U) => !U.disabled).length,
                              "aria-label": `Select all ${dt().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ d.jsx(
                                  bo,
                                  {
                                    className: "mr-xs",
                                    checked: ve.length === dt().filter((U) => !U.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ d.jsxs("span", { children: [
                                  "(",
                                  y,
                                  dt().length > 20 ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                                    " - ",
                                    dt().length,
                                    " ",
                                    C
                                  ] }) : null,
                                  ")"
                                ] })
                              ]
                            },
                            "all"
                          ) }),
                          !r && (se(mr) ? (() => {
                            let U = 0;
                            const le = mr.reduce(
                              (st, vt) => st + vt.options.length,
                              0
                            ), be = mr.map((st) => {
                              const vt = Ma ? st.options.filter(
                                (Dn) => U++ < De || ve.includes(Dn.value)
                              ) : st.options;
                              return { ...st, options: vt };
                            }), Pe = be.reduce(
                              (st, vt) => st + vt.options.length,
                              0
                            ), je = (Jf ? le : Te ?? le) - Pe;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              be.map((st) => st.options.length === 0 ? null : /* @__PURE__ */ d.jsx(
                                ai,
                                {
                                  heading: st.heading,
                                  children: st.options.map((vt) => {
                                    const Dn = ve.includes(
                                      vt.value
                                    ), Hr = eh(vt);
                                    return /* @__PURE__ */ d.jsxs(
                                      ii,
                                      {
                                        value: `${vt.value}:${vt.label}`,
                                        onSelect: () => Zc(vt.value),
                                        role: "option",
                                        "aria-selected": Dn,
                                        "aria-disabled": Hr,
                                        "aria-label": `${vt.label}${Dn ? ", selected" : ", not selected"}${Hr ? ", disabled" : ""}`,
                                        className: R(
                                          "cursor-pointer",
                                          Hr && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                        ),
                                        disabled: Hr,
                                        children: [
                                          /* @__PURE__ */ d.jsx(
                                            bo,
                                            {
                                              className: "mr-xs",
                                              checked: Dn
                                            }
                                          ),
                                          /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Qc({
                                            option: vt,
                                            location: "dropdown",
                                            isSelected: Dn
                                          }) })
                                        ]
                                      },
                                      vt.value
                                    );
                                  })
                                },
                                st.heading
                              )),
                              Ma && je > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: ot(je) })
                            ] });
                          })() : /* @__PURE__ */ d.jsx(ai, { children: (() => {
                            const U = Ma ? mr.filter(
                              (be, Pe) => Pe < De || ve.includes(be.value)
                            ) : mr, le = (Jf ? mr.length : Te ?? mr.length) - U.length;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              U.map((be) => {
                                const Pe = ve.includes(
                                  be.value
                                ), je = eh(be);
                                return /* @__PURE__ */ d.jsxs(
                                  ii,
                                  {
                                    value: `${be.value}:${be.label}`,
                                    onSelect: () => Zc(be.value),
                                    role: "option",
                                    "aria-selected": Pe,
                                    "aria-disabled": je,
                                    "aria-label": `${be.label}${Pe ? ", selected" : ", not selected"}${je ? ", disabled" : ""}`,
                                    className: R(
                                      "cursor-pointer",
                                      je && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: je,
                                    children: [
                                      /* @__PURE__ */ d.jsx(
                                        bo,
                                        {
                                          className: "mr-xs",
                                          checked: Pe
                                        }
                                      ),
                                      /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Qc({
                                        option: be,
                                        location: "dropdown",
                                        isSelected: Pe
                                      }) })
                                    ]
                                  },
                                  be.value
                                );
                              }),
                              Ma && le > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: ot(le) })
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
                              Ve,
                              {
                                intent: "text",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: Qf,
                                disabled: ve.length === 0,
                                children: b
                              }
                            ),
                            /* @__PURE__ */ d.jsx(
                              Ve,
                              {
                                intent: "primary",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: () => {
                                  s(ve), pt(!1);
                                },
                                children: x
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
}, XD = _.forwardRef(
  qD
);
XD.displayName = "MultiSelect";
const ZD = he(
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
), QD = he(
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
), JD = he(
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
), hd = ({
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
  ...g
}) => {
  const [m, y] = _.useState(""), C = _.useRef(null), x = e.filter(
    (P) => !("type" in P) || P.type === "Option" || P.type === void 0
  ).length >= h, S = (P) => {
    if (typeof P == "string") return P;
    if (typeof P == "number") return String(P);
    if (Array.isArray(P)) return P.map(S).join("");
    if (_.isValidElement(P)) {
      const { children: T } = P.props;
      if (T) return S(T);
    }
    return "";
  }, w = (P) => !x || !m || "type" in P && (P.type === "Group" || P.type === "Separator") ? !0 : "label" in P ? S(P.label).toLowerCase().includes(m.toLowerCase()) : !0, E = {
    ...g
  }, k = c !== void 0 ? String(c) : void 0, N = (P) => {
    const T = e.find(
      (j) => "value" in j && String(j.value) === P
    );
    return T && "value" in T ? T.value : P;
  };
  return k !== void 0 && (E.value = k), f && (E.onValueChange = (P) => {
    const T = N(P);
    f(T);
  }), /* @__PURE__ */ d.jsxs(
    RN,
    {
      ...E,
      onOpenChange: (P) => {
        var T;
        P || y(""), (T = E.onOpenChange) == null || T.call(E, P);
      },
      children: [
        /* @__PURE__ */ d.jsxs(
          ON,
          {
            className: R(
              ZD({ variant: s, size: a, intent: i, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ d.jsxs("div", { className: "inline-flex items-center truncate", children: [
                at(r, {
                  className: R("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ d.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ d.jsx(
                  DN,
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
                IN,
                {
                  className: R("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": g.disabled
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
        /* @__PURE__ */ d.jsx(jN, { children: /* @__PURE__ */ d.jsxs(
          TN,
          {
            position: "popper",
            sideOffset: -1,
            className: R(QD({ variant: s }), n),
            children: [
              x && /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ d.jsx(eu, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: C,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: u,
                        value: m,
                        onChange: (P) => y(P.target.value),
                        onKeyDown: (P) => P.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx(BN, {}),
              /* @__PURE__ */ d.jsx($N, { children: e.map((P, T) => {
                const j = w(P);
                switch (P.type) {
                  case "Group":
                    return /* @__PURE__ */ d.jsx(
                      WN,
                      {
                        className: R(!j && "hidden"),
                        children: /* @__PURE__ */ d.jsx(LN, { children: P.label })
                      },
                      T
                    );
                  case "Separator":
                    return /* @__PURE__ */ d.jsx(
                      GN,
                      {
                        className: R(
                          "border-divider-default h-px border-b",
                          !j && "hidden"
                        )
                      },
                      T
                    );
                  default:
                    return /* @__PURE__ */ d.jsxs(
                      FN,
                      {
                        value: String(P.value),
                        disabled: P.disabled ?? !1,
                        className: R(
                          JD({
                            variant: s,
                            isSelected: c === P.value
                          }),
                          !j && "hidden"
                        ),
                        children: [
                          at(P.icon, {
                            className: R("h-5 w-5", {
                              "-ml-xxs": s === "default",
                              "mr-xxs": s === "compact",
                              "text-interactive-disabled": P.disabled
                            })
                          }),
                          /* @__PURE__ */ d.jsx(
                            VN,
                            {
                              className: R("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": P.disabled
                              }),
                              children: P.label
                            }
                          ),
                          /* @__PURE__ */ d.jsx(zN, {})
                        ]
                      },
                      T
                    );
                }
              }) }),
              /* @__PURE__ */ d.jsx(HN, {}),
              /* @__PURE__ */ d.jsx(YN, {})
            ]
          }
        ) })
      ]
    }
  );
};
hd.displayName = "Select";
const e5 = he("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "",
      sm: ""
    }
  },
  defaultVariants: {
    size: "default"
  }
}), pp = he(
  "text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"
), t5 = _.forwardRef(
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
    previousPageLabel: g = "Previous page",
    nextPageLabel: m = "Next page",
    size: y,
    className: C,
    ...b
  }, x) => {
    const S = y === "sm" ? "xs" : "sm", w = () => {
      e > 1 && r(e - 1);
    }, E = () => {
      e < t && r(e + 1);
    }, k = (O) => {
      const $ = parseInt(O, 10);
      a($), e > 1 && r(1);
    }, N = (O) => {
      const $ = parseInt(O, 10);
      r($);
    }, P = s.map((O) => ({
      value: O.toString(),
      label: O.toString()
    })), T = Math.max(t, 1), j = Array.from(
      { length: T },
      (O, $) => $ + 1
    ).map((O) => ({
      value: O.toString(),
      label: l(O, T, n)
    }));
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: x,
        className: R(e5({ size: y }), C),
        ...b,
        children: [
          h && /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R("gap-xs flex items-center", {
                "max-md:hidden": p
              }),
              children: [
                /* @__PURE__ */ d.jsx("span", { className: R(pp()), children: i }),
                /* @__PURE__ */ d.jsx(
                  hd,
                  {
                    size: y,
                    value: o.toString(),
                    onValueChange: k,
                    options: P
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ d.jsx("span", { className: R(pp()), children: c }),
            /* @__PURE__ */ d.jsx(
              hd,
              {
                size: y,
                value: e.toString(),
                onValueChange: N,
                options: j,
                disabled: n === 0,
                renderValue: f(
                  e,
                  T,
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
                "gap-xs": y === "sm"
              }),
              children: [
                /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    intent: "text",
                    size: S,
                    icon: c2,
                    onClick: w,
                    disabled: e <= 1,
                    "aria-label": g
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    intent: "text",
                    size: S,
                    icon: Jd,
                    onClick: E,
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
t5.displayName = "Pagination";
const n5 = he("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), r5 = he(
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
), o5 = he(
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
), d7 = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: s = !1,
  ...a
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ d.jsxs("div", { className: R(n5({ disabled: o })), children: [
    /* @__PURE__ */ d.jsx(
      dN,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": s,
        className: R(
          r5({
            disabled: o,
            invalid: s
          })
        ),
        ...a,
        children: /* @__PURE__ */ d.jsx(uN, { className: R(o5({ invalid: s })) })
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
}, u7 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  lN,
  {
    className: R("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), s5 = he(
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
), a5 = "gap-xxs px-sm py-xxs disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 items-center", i5 = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full min-w-0 flex-1 flex-row
  flex-wrap items-center justify-start`, c5 = `min-w-24 min-h-5.5 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, l5 = he(
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
), d5 = "gap-xs text-sm text-body-inverse flex-row", u5 = ({
  keyword: e,
  size: t,
  disabled: n,
  onRemove: r,
  removeAriaLabel: o
}) => {
  const { ref: s, isTruncated: a } = jO(), [i, c] = _.useState(!1);
  return (
    // Keep the input focused when the chip or its remove button is clicked
    /* @__PURE__ */ d.jsx(
      "span",
      {
        className: "min-w-0 flex max-w-full",
        onMouseDown: (l) => l.preventDefault(),
        children: /* @__PURE__ */ d.jsx(
          Ri,
          {
            variant: "secondary",
            size: t,
            disabled: n,
            onRemove: r,
            removeAriaLabel: o,
            children: /* @__PURE__ */ d.jsx(
              Lt,
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
}, f5 = _.forwardRef(
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
    hideKeywords: p = !1,
    ...g
  }, m) => {
    const y = i || t === "disabled", [C, b] = _.useState(
      u ?? []
    ), [x, S] = _.useState(!1);
    let w;
    typeof t == "string" ? w = t : y ? w = "disabled" : C.length > 0 ? w = "filled" : w = "default";
    const E = _.useRef(w), { compositionHandlers: k, guardKeyHandler: N } = jc();
    on(() => {
      E.current === "filled" && w !== "filled" && b([]), E.current = w;
    }, [w]);
    const P = (O) => {
      y || o && o(O);
    }, T = (O) => {
      if (!y) {
        if (O.key === "Enter" && n.trim()) {
          const $ = [...C, n.trim()];
          if (b($), o) {
            const F = {
              ...O,
              target: { value: "" }
            };
            o(F);
          }
          f && s && s($), O.preventDefault();
        }
        if ((O.key === "Backspace" || O.key === "Delete") && !n && C.length > 0 && !p) {
          const $ = C.slice(0, -1);
          b($), f && s && s($), O.preventDefault();
        }
      }
    }, j = (O) => {
      if (y) return;
      const $ = C.filter((F, B) => B !== O);
      b($), f && s && s($);
    };
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: R(
          "group relative flex flex-col",
          y ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": y ? "true" : void 0,
        children: [
          /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R(
                s5({
                  size: e,
                  state: w
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ d.jsxs("div", { className: R(a5), children: [
                  /* @__PURE__ */ d.jsx(
                    "span",
                    {
                      className: `text-shape-primary
                disabled:text-shape-interactive-disabled flex items-center`,
                      children: /* @__PURE__ */ d.jsx(eu, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ d.jsxs("div", { className: R(i5), children: [
                    !p && C.map((O, $) => /* @__PURE__ */ d.jsx(
                      u5,
                      {
                        keyword: O,
                        size: e === "sm" ? "sm" : "md",
                        disabled: y,
                        onRemove: () => j($),
                        removeAriaLabel: h
                      },
                      `${$}-${O}`
                    )),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: m,
                        className: R(c5),
                        type: "text",
                        value: n,
                        onChange: P,
                        onKeyDown: N(T),
                        onCompositionStart: k.onCompositionStart,
                        onCompositionEnd: k.onCompositionEnd,
                        onFocus: (O) => {
                          var $;
                          S(!0), ($ = g.onFocus) == null || $.call(g, O);
                        },
                        onBlur: (O) => {
                          var $;
                          S(!1), ($ = g.onBlur) == null || $.call(g, O);
                        },
                        placeholder: !p && (w === "filled" || C.length > 0) ? "" : a,
                        disabled: y,
                        ...g
                      }
                    )
                  ] }),
                  (n || C.length > 0 && !p) && !y && /* @__PURE__ */ d.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), !p && (s == null || s([]), b([]));
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ d.jsx(tu, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    type: "button",
                    className: R(
                      l5({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let O = C;
                      n.trim() && (O = [...C, n.trim()], b(O), o && o({
                        target: { value: "" }
                      })), s == null || s(O);
                    },
                    disabled: y,
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
                d5,
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
f5.displayName = "SearchBar";
const Wy = _.createContext(null), h5 = () => {
  const e = _.useContext(Wy);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, p5 = he(
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
), Ly = _.forwardRef(
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
    const u = _.useId(), h = a ?? `segmented-control-${u}`, p = t !== void 0, [g, m] = _.useState(n), y = p ? t : g, C = _.useCallback(
      (x) => {
        p || m(x), r == null || r(x);
      },
      [p, r]
    ), b = _.useMemo(
      () => ({
        name: e,
        idPrefix: h,
        value: y,
        disabled: s,
        invalid: o,
        onValueChange: C
      }),
      [e, h, y, s, o, C]
    );
    return /* @__PURE__ */ d.jsx(Wy.Provider, { value: b, children: /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: f,
        id: a,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": s || void 0,
        className: R(p5({ invalid: o }), i),
        ...l,
        children: c
      }
    ) });
  }
);
Ly.displayName = "SegmentedControl.Group";
const m5 = he(
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
), Fy = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: s
}) => {
  const a = h5(), i = a.value !== void 0 && String(a.value) === String(e), c = t || a.disabled, l = r ?? `${a.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ d.jsxs(
    "label",
    {
      htmlFor: l,
      className: R(m5({ selected: i, disabled: c }), o),
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
        n && at(n, { size: 16, className: "shrink-0" }),
        s
      ]
    }
  );
};
Fy.displayName = "SegmentedControl.Option";
const f7 = {
  Group: Ly,
  Option: Fy
}, Vy = _.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
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
      children: s ? /* @__PURE__ */ d.jsx(w2, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ d.jsx(x2, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ d.jsx(Lt, { content: i, side: "right", delayDuration: 0, children: c }) : c;
});
Vy.displayName = "SideNavigationCollapseButton";
const v5 = he(
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
), g5 = _.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ d.jsx(xy, { defaultCollapsed: e, children: /* @__PURE__ */ d.jsx(zy, { ref: n, ...t }) }));
g5.displayName = "SideNavigation";
const zy = _.forwardRef(
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
          v5({ width: h }),
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
          r && /* @__PURE__ */ d.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ d.jsx(uD, { children: r }) }),
          s && /* @__PURE__ */ d.jsx(
            Vy,
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
zy.displayName = "SideNavigationContent";
const b5 = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", x5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", h7 = () => {
  const { isCollapsed: e } = ma();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ d.jsx(
      "img",
      {
        src: b5,
        alt: "SDS管理",
        className: `h-auto w-[5.8125rem] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ d.jsx(
      "img",
      {
        src: x5,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
};
var y5 = Object.defineProperty, w5 = Object.defineProperties, C5 = Object.getOwnPropertyDescriptors, mp = Object.getOwnPropertySymbols, S5 = Object.prototype.hasOwnProperty, _5 = Object.prototype.propertyIsEnumerable, vp = (e, t, n) => t in e ? y5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    S5.call(t, n) && vp(e, n, t[n]);
  if (mp)
    for (var n of mp(t))
      _5.call(t, n) && vp(e, n, t[n]);
  return e;
}, Zr = (e, t) => w5(e, C5(t));
function k5(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ya(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function Sl(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function E5(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (x, S) => x === S || x !== null && typeof x == "object" && "id" in x && x.id === S;
  if (Array.isArray(e)) {
    const x = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (x === -1 || S === -1) {
      if (Sl(s)) {
        const w = s.initialIndex, E = s.index;
        return w === E || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, E);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== x)
        return n(e, x, w);
    }
    return n(e, x, S);
  }
  const l = Object.entries(e);
  let f = -1, u, h = -1, p;
  for (const [x, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (u = x)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = x)), f !== -1 && h !== -1)
      break;
  if (f === -1 && Sl(s)) {
    const x = s.initialGroup == null ? void 0 : Ya(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ya(e, s.group), E = s.index;
    if (x == null || w == null || x === w && S === E)
      return "preventDefault" in t && t.preventDefault(), e;
    if (x === w)
      return Zr(Xr({}, e), {
        [x]: n(e[x], S, E)
      });
    const k = e[x][S];
    return Zr(Xr({}, e), {
      [x]: [
        ...e[x].slice(0, S),
        ...e[x].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, E),
        k,
        ...e[w].slice(E)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: g } = s.manager, m = (o = (r = g.shape) == null ? void 0 : r.current.center) != null ? o : g.position.current;
  if (p == null) {
    const x = Ya(e, a.id);
    if (x != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[x].length : 0;
      p = x, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && Sl(s)) {
      const x = s.group == null ? void 0 : Ya(e, s.group), S = s.group != null && x !== u, w = s.index !== f;
      if (S || w) {
        const E = s.group == null ? u : x;
        if (E != null) {
          if (u === E)
            return Zr(Xr({}, e), {
              [u]: n(
                e[u],
                f,
                s.index
              )
            });
          const k = e[u][f];
          return Zr(Xr({}, e), {
            [u]: [
              ...e[u].slice(0, f),
              ...e[u].slice(f + 1)
            ],
            [E]: [
              ...e[E].slice(0, s.index),
              k,
              ...e[E].slice(s.index)
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
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[u][f];
  return Zr(Xr({}, e), {
    [u]: [
      ...e[u].slice(0, f),
      ...e[u].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      b,
      ...e[p].slice(h + C)
    ]
  });
}
function N5(e, t) {
  return E5(e, t, k5);
}
var M5 = Symbol.for("preact-signals");
function Wc() {
  if ($n > 1)
    $n--;
  else {
    var e, t = !1;
    for ((function() {
      var o = Di;
      for (Di = void 0; o !== void 0; ) {
        var s = o.S;
        if (s.v === o.v) for (var a = s.t; a !== void 0; a = a.x) a.i === o.i && (a.i = s.i);
        o = o.o;
      }
    })(); Ns !== void 0; ) {
      var n = Ns;
      for (Ns = void 0, Oi++; n !== void 0; ) {
        var r = n.u;
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && Hy(n)) try {
          n.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        n = r;
      }
    }
    if (Oi = 0, $n--, t) throw e;
  }
}
function He(e) {
  if ($n > 0) return e();
  pd = ++P5, $n++;
  try {
    return e();
  } finally {
    Wc();
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
var Ns = void 0, $n = 0, Oi = 0, P5 = 0, pd = 0, Di = void 0, Ii = 0;
function By(e) {
  if (Le !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== Le)
      return t = { i: 0, S: e, p: Le.s, n: void 0, t: Le, e: void 0, x: void 0, r: t }, Le.s !== void 0 && (Le.s.n = t), Le.s = t, e.n = t, 32 & Le.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = Le.s, t.n = void 0, Le.s.n = t, Le.s = t), t;
  }
}
function Pt(e, t) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
Pt.prototype.brand = M5;
Pt.prototype.h = function() {
  return !0;
};
Pt.prototype.S = function(e) {
  var t = this, n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Ee(function() {
    var r;
    (r = t.W) == null || r.call(t);
  }));
};
Pt.prototype.U = function(e) {
  var t = this;
  if (this.t !== void 0) {
    var n = e.e, r = e.x;
    n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && Ee(function() {
      var o;
      (o = t.Z) == null || o.call(t);
    }));
  }
};
Pt.prototype.subscribe = function(e) {
  var t = this;
  return Zt(function() {
    var n = t.value;
    Ee(function() {
      return e(n);
    });
  }, { name: "sub" });
};
Pt.prototype.valueOf = function() {
  return this.value;
};
Pt.prototype.toString = function() {
  return this.value + "";
};
Pt.prototype.toJSON = function() {
  return this.value;
};
Pt.prototype.peek = function() {
  var e = this;
  return Ee(function() {
    return e.value;
  });
};
Object.defineProperty(Pt.prototype, "value", { get: function() {
  var e = By(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Oi > 100) throw new Error("Cycle detected");
    (function(n) {
      $n !== 0 && Oi === 0 && n.l !== pd && (n.l = pd, Di = { S: n, v: n.v, i: n.i, o: Di });
    })(this), this.v = e, this.i++, Ii++, $n++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Wc();
    }
  }
} });
function Fo(e, t) {
  return new Pt(e, t);
}
function Hy(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function Gy(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function Yy(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Fr(e, t) {
  Pt.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Ii - 1, this.f = 4;
}
Fr.prototype = new Pt();
Fr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ii)) return !0;
  if (this.g = Ii, this.f |= 1, this.i > 0 && !Hy(this))
    return this.f &= -2, !0;
  var e = Le;
  try {
    Gy(this), Le = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return Le = e, Yy(this), this.f &= -2, !0;
};
Fr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Pt.prototype.S.call(this, e);
};
Fr.prototype.U = function(e) {
  if (this.t !== void 0 && (Pt.prototype.U.call(this, e), this.t === void 0)) {
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
  var e = By(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function gp(e, t) {
  return new Fr(e, t);
}
function Ky(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    $n++;
    var n = Le;
    Le = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Ku(e), r;
    } finally {
      Le = n, Wc();
    }
  }
}
function Ku(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, Ky(e);
}
function A5(e) {
  if (Le !== this) throw new Error("Out-of-order effect");
  Yy(this), Le = e, this.f &= -2, 8 & this.f && Ku(this), Wc();
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
  this.f |= 1, this.f &= -9, Ky(this), Gy(this), $n++;
  var e = Le;
  return Le = this, A5.bind(this, e);
};
Vo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = Ns, Ns = this);
};
Vo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Ku(this);
};
Vo.prototype.dispose = function() {
  this.d();
};
function Zt(e, t) {
  var n = new Vo(e, t);
  try {
    n.c();
  } catch (o) {
    throw n.d(), o;
  }
  var r = n.d.bind(n);
  return r[Symbol.dispose] = r, r;
}
var R5 = Object.create, Uu = Object.defineProperty, O5 = Object.defineProperties, D5 = Object.getOwnPropertyDescriptor, I5 = Object.getOwnPropertyDescriptors, bp = Object.getOwnPropertySymbols, j5 = Object.prototype.hasOwnProperty, T5 = Object.prototype.propertyIsEnumerable, $5 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), zo = (e) => {
  throw TypeError(e);
}, md = (e, t, n) => t in e ? Uu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, W5 = (e, t) => {
  for (var n in t || (t = {}))
    j5.call(t, n) && md(e, n, t[n]);
  if (bp)
    for (var n of bp(t))
      T5.call(t, n) && md(e, n, t[n]);
  return e;
}, L5 = (e, t) => O5(e, I5(t)), xp = (e, t) => Uu(e, "name", { value: t, configurable: !0 }), F5 = (e) => {
  var t;
  return [, , , R5((t = void 0) != null ? t : null)];
}, Uy = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ls = (e) => e !== void 0 && typeof e != "function" ? zo("Function expected") : e, V5 = (e, t, n, r, o) => ({ kind: Uy[e], name: t, metadata: r, addInitializer: (s) => n._ ? zo("Already initialized") : o.push(ls(s || null)) }), qy = (e, t) => md(t, $5("metadata"), e[3]), gr = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Bo = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), g = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = Uy[u + 5], y = u > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && D5(u < 4 ? o : { get [n]() {
    return Yt(this, s);
  }, set [n](S) {
    return Zn(this, s, S);
  } }, n));
  u ? p && u < 4 && xp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : xp(o, n);
  for (var x = r.length - 1; x >= 0; x--)
    l = V5(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => z5(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Yt : B5)(S, o, u ^ 4 ? s : b.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Zn(S, o, w, u ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[x])(u ? u < 4 ? p ? s : b[m] : u > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? ls(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? zo("Object expected") : (ls(a = i.get) && (b.get = a), ls(a = i.set) && (b.set = a), ls(a = i.init) && y.unshift(a));
  return u || qy(e, o), b && Uu(o, n, b), p ? u ^ 4 ? s : b : o;
}, qu = (e, t, n) => t.has(e) || zo("Cannot " + n), z5 = (e, t) => Object(t) !== t ? zo('Cannot use the "in" operator on this value') : e.has(t), Yt = (e, t, n) => (qu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ds = (e, t, n) => t.has(e) ? zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zn = (e, t, n, r) => (qu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), B5 = (e, t, n) => (qu(e, t, "access private method"), n);
function vd(e, t) {
  if (t) {
    let n;
    return gp(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return gp(e);
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
function Ne({ get: e }, t) {
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
function Ke(e, t) {
  const n = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = n.get(this);
    return r || (r = vd(e.bind(this)), n.set(this, r)), r.value;
  };
}
function _l(e = !0) {
  return function(t, n) {
    n.addInitializer(function() {
      const r = n.kind === "field" ? this : n.static ? this : Object.getPrototypeOf(this), o = Object.getOwnPropertyDescriptor(r, n.name);
      o && Object.defineProperty(r, n.name, L5(W5({}, o), { enumerable: e }));
    });
  };
}
function ga(...e) {
  const t = e.map((n) => Zt(n));
  return () => t.forEach((n) => n());
}
var Xy, Zy, Qy, Jy, e0, t0, _t, Xu, kl, gd, bd, bt, Zu, El, n0, xd, Qu, Nl, yd, wd;
t0 = [Ne], e0 = [Ne], Jy = [Ne], Qy = [_l()], Zy = [_l()], Xy = [_l()];
var Vr = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, gr(_t, 5, this), ds(this, bt), ds(this, Xu, gr(_t, 8, this)), gr(_t, 11, this), ds(this, Zu, gr(_t, 12, this)), gr(_t, 15, this), ds(this, Qu, gr(_t, 16, this)), gr(_t, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return Yt(this, bt, yd);
  }
  get initial() {
    return Yt(this, bt, gd);
  }
  get previous() {
    return Yt(this, bt, n0);
  }
  /** Set the current value */
  set current(e) {
    const t = Ee(() => Yt(this, bt, yd));
    e && t && this.equals(t, e) || He(() => {
      Yt(this, bt, gd) || Zn(this, bt, e, bd), Zn(this, bt, t, xd), Zn(this, bt, e, wd);
    });
  }
  /** Reset the state to the initial value */
  reset(e = this.defaultValue) {
    He(() => {
      Zn(this, bt, void 0, xd), Zn(this, bt, e, bd), Zn(this, bt, e, wd);
    });
  }
};
_t = F5();
Xu = /* @__PURE__ */ new WeakMap();
bt = /* @__PURE__ */ new WeakSet();
Zu = /* @__PURE__ */ new WeakMap();
Qu = /* @__PURE__ */ new WeakMap();
kl = Bo(_t, 20, "#initial", t0, bt, Xu), gd = kl.get, bd = kl.set;
El = Bo(_t, 20, "#previous", e0, bt, Zu), n0 = El.get, xd = El.set;
Nl = Bo(_t, 20, "#current", Jy, bt, Qu), yd = Nl.get, wd = Nl.set;
Bo(_t, 2, "current", Qy, Vr);
Bo(_t, 2, "initial", Zy, Vr);
Bo(_t, 2, "previous", Xy, Vr);
qy(_t, Vr);
function Ml(e) {
  return Ee(() => {
    const t = {};
    for (const n in e)
      t[n] = e[n];
    return t;
  });
}
var xr, H5 = class {
  constructor() {
    ds(this, xr, /* @__PURE__ */ new WeakMap());
  }
  get(e, t) {
    var n;
    return e ? (n = Yt(this, xr).get(e)) == null ? void 0 : n.get(t) : void 0;
  }
  set(e, t, n) {
    var r;
    if (e)
      return Yt(this, xr).has(e) || Yt(this, xr).set(e, /* @__PURE__ */ new Map()), (r = Yt(this, xr).get(e)) == null ? void 0 : r.set(t, n);
  }
  clear(e) {
    var t;
    return e ? (t = Yt(this, xr).get(e)) == null ? void 0 : t.clear() : void 0;
  }
};
xr = /* @__PURE__ */ new WeakMap();
var G5 = Object.create, r0 = Object.defineProperty, Y5 = Object.getOwnPropertyDescriptor, yp = Object.getOwnPropertySymbols, K5 = Object.prototype.hasOwnProperty, U5 = Object.prototype.propertyIsEnumerable, o0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Lc = (e) => {
  throw TypeError(e);
}, wp = Math.pow, Cd = (e, t, n) => t in e ? r0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q5 = (e, t) => {
  for (var n in t || (t = {}))
    K5.call(t, n) && Cd(e, n, t[n]);
  if (yp)
    for (var n of yp(t))
      U5.call(t, n) && Cd(e, n, t[n]);
  return e;
}, X5 = (e) => {
  var t;
  return [, , , G5((t = e == null ? void 0 : e[o0("metadata")]) != null ? t : null)];
}, s0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], a0 = (e) => e !== void 0 && typeof e != "function" ? Lc("Function expected") : e, Z5 = (e, t, n, r, o) => ({ kind: s0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Lc("Already initialized") : o.push(a0(s || null)) }), Q5 = (e, t) => Cd(t, o0("metadata"), e[3]), J5 = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, i0 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, g = s0[f + 5], m = e[p] || (e[p] = []), y = (o = o.prototype, Y5(o, n)), C = r.length - 1; C >= 0; C--)
    c = Z5(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(y[g], c), i._ = 1, a0(a) && (y[g] = a);
  return y && r0(o, n, y), o;
}, c0 = (e, t, n) => t.has(e) || Lc("Cannot " + n), eI = (e, t, n) => (c0(e, t, "read from private field"), t.get(e)), tI = (e, t, n) => t.has(e) ? Lc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), nI = (e, t, n, r) => (c0(e, t, "write to private field"), t.set(e, n), n), Kt = class Sd {
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
    return new Sd(t.x - n.x, t.y - n.y);
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
    return new Sd(t, n);
  }
}, kn = class yr {
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
    const { top: r, left: o, width: s, height: a, scale: i } = this, c = new yr(o + t, r + n, s, a);
    return c.scale = q5({}, i), c;
  }
  get boundingRectangle() {
    const { width: t, height: n, left: r, top: o, right: s, bottom: a } = this;
    return { width: t, height: n, left: r, top: o, right: s, bottom: a };
  }
  get center() {
    const { left: t, top: n, right: r, bottom: o } = this;
    return new Kt((t + r) / 2, (n + o) / 2);
  }
  get area() {
    const { width: t, height: n } = this;
    return t * n;
  }
  equals(t) {
    if (!(t instanceof yr))
      return !1;
    const { left: n, top: r, width: o, height: s } = this;
    return n === t.left && r === t.top && o === t.width && s === t.height;
  }
  containsPoint(t) {
    const { top: n, left: r, bottom: o, right: s } = this;
    return n <= t.y && t.y <= o && r <= t.x && t.x <= s;
  }
  intersectionArea(t) {
    return t instanceof yr ? rI(this, t) : 0;
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
    return new yr(n, t, r, o);
  }
  static delta(t, n, r = { x: "center", y: "center" }) {
    const o = (s, a) => {
      const i = r[a], c = a === "x" ? s.left : s.top, l = a === "x" ? s.width : s.height;
      return i == "start" ? c : i == "end" ? c + l : c + l / 2;
    };
    return Kt.delta(
      { x: o(t, "x"), y: o(t, "y") },
      { x: o(n, "x"), y: o(n, "y") }
    );
  }
  static intersectionRatio(t, n) {
    return yr.from(t).intersectionRatio(yr.from(n));
  }
};
function rI(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), a = o - r, i = s - n;
  return r < o && n < s ? a * i : 0;
}
var l0, d0, _d, ci, ba, Fc = class extends (_d = Vr, d0 = [Ke], l0 = [Ke], _d) {
  constructor(t) {
    const n = Kt.from(t);
    super(n, (r, o) => Kt.equals(r, o)), J5(ba, 5, this), tI(this, ci, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return Kt.delta(this.current, this.initial);
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
    const { current: n } = this, r = Kt.from(t), o = {
      x: r.x - n.x,
      y: r.y - n.y
    }, s = Date.now(), a = s - eI(this, ci), i = (c) => Math.round(c / a * 100);
    He(() => {
      nI(this, ci, s), this.velocity = {
        x: i(o.x),
        y: i(o.y)
      }, super.current = r;
    });
  }
  reset(t = this.defaultValue) {
    super.reset(Kt.from(t)), this.velocity = { x: 0, y: 0 };
  }
};
ba = X5(_d);
ci = /* @__PURE__ */ new WeakMap();
i0(ba, 2, "delta", d0, Fc);
i0(ba, 2, "direction", l0, Fc);
Q5(ba, Fc);
function kd({ x: e, y: t }, n) {
  const r = Math.abs(e), o = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(wp(r, 2) + wp(o, 2)) > n : "x" in n && "y" in n ? r > n.x && o > n.y : "x" in n ? r > n.x : "y" in n ? o > n.y : !1;
}
var u0 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(u0 || {}), f0 = Object.values(u0), oI = Object.create, Ju = Object.defineProperty, sI = Object.defineProperties, aI = Object.getOwnPropertyDescriptor, iI = Object.getOwnPropertyDescriptors, ji = Object.getOwnPropertySymbols, h0 = Object.prototype.hasOwnProperty, p0 = Object.prototype.propertyIsEnumerable, m0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ho = (e) => {
  throw TypeError(e);
}, Ed = (e, t, n) => t in e ? Ju(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ef = (e, t) => {
  for (var n in t || (t = {}))
    h0.call(t, n) && Ed(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      p0.call(t, n) && Ed(e, n, t[n]);
  return e;
}, tf = (e, t) => sI(e, iI(t)), Cp = (e, t) => Ju(e, "name", { value: t, configurable: !0 }), v0 = (e, t) => {
  var n = {};
  for (var r in e)
    h0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ji)
    for (var r of ji(e))
      t.indexOf(r) < 0 && p0.call(e, r) && (n[r] = e[r]);
  return n;
}, Go = (e) => {
  var t;
  return [, , , oI((t = e == null ? void 0 : e[m0("metadata")]) != null ? t : null)];
}, g0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], us = (e) => e !== void 0 && typeof e != "function" ? Ho("Function expected") : e, cI = (e, t, n, r, o) => ({ kind: g0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ho("Already initialized") : o.push(us(s || null)) }), zr = (e, t) => Ed(t, m0("metadata"), e[3]), we = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Me = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), g = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = g0[u + 5], y = u > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && aI(u < 4 ? o : { get [n]() {
    return Ye(this, s);
  }, set [n](S) {
    return $t(this, s, S);
  } }, n));
  u ? p && u < 4 && Cp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : Cp(o, n);
  for (var x = r.length - 1; x >= 0; x--)
    l = cI(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => lI(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Ye : b0)(S, o, u ^ 4 ? s : b.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => $t(S, o, w, u ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[x])(u ? u < 4 ? p ? s : b[m] : u > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? us(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? Ho("Object expected") : (us(a = i.get) && (b.get = a), us(a = i.set) && (b.set = a), us(a = i.init) && y.unshift(a));
  return u || zr(e, o), b && Ju(o, n, b), p ? u ^ 4 ? s : b : o;
}, nf = (e, t, n) => t.has(e) || Ho("Cannot " + n), lI = (e, t) => Object(t) !== t ? Ho('Cannot use the "in" operator on this value') : e.has(t), Ye = (e, t, n) => (nf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Re = (e, t, n) => t.has(e) ? Ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $t = (e, t, n, r) => (nf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), b0 = (e, t, n) => (nf(e, t, "access private method"), n);
function x0(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function xa(e) {
  return (t) => x0(e, t);
}
function Bs(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var y0, Hs, rf, li;
y0 = [Ne];
var yt = class {
  /**
   * Creates a new plugin instance.
   *
   * @param manager - The drag and drop manager that owns this plugin
   * @param options - Optional configuration for the plugin
   */
  constructor(e, t) {
    this.manager = e, this.options = t, Re(this, rf, we(Hs, 8, this, !1)), we(Hs, 11, this), Re(this, li, /* @__PURE__ */ new Set());
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
    const t = Zt(e.bind(this));
    return Ye(this, li).add(t), t;
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
    Ye(this, li).forEach((e) => e());
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
    return x0(this, e);
  }
};
Hs = Go(null);
rf = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
Me(Hs, 4, "disabled", y0, yt, rf);
zr(Hs, yt);
var ya = class extends yt {
}, di, Pl = class {
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
    for (const r of Ye(this, di))
      if (!n.includes(r)) {
        if (r.prototype instanceof ya)
          continue;
        this.unregister(r);
      }
    for (const { plugin: r, options: o } of t)
      this.register(r, o);
    $t(this, di, n);
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
function dI(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var Ka = [], oo, so, uI = class extends yt {
  /**
   * Creates a new CollisionObserver instance.
   *
   * @param manager - The drag drop manager instance
   */
  constructor(e) {
    super(e), Re(this, oo), Re(this, so), this.computeCollisions = this.computeCollisions.bind(this), $t(this, so, Fo(Ka)), this.destroy = ga(
      () => {
        const t = this.computeCollisions(), n = Ee(
          () => this.manager.dragOperation.position.current
        );
        if (t !== Ka) {
          const r = Ye(this, oo);
          if ($t(this, oo, n), r && n.x == r.x && n.y == r.y)
            return;
        } else
          $t(this, oo, void 0);
        Ye(this, so).value = t;
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
      e ? Ye(this, so).value = this.computeCollisions() : $t(this, oo, void 0);
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
    return c.length === 0 ? Ka : (i.sort(dI), i);
  }
  /**
   * Gets the current collisions signal value.
   */
  get collisions() {
    return Ye(this, so).value;
  }
};
oo = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
var w0, C0, S0, of, _0, nn, sf, fo, af, cf;
S0 = [Ne], C0 = [Ne], w0 = [Ne];
var zn = class wr {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(t, n) {
    Re(this, sf, we(nn, 8, this)), we(nn, 11, this), Re(this, fo), Re(this, af, we(nn, 12, this)), we(nn, 15, this), Re(this, cf, we(nn, 16, this)), we(nn, 19, this);
    const { effects: r, id: o, data: s = {}, disabled: a = !1, register: i = !0 } = t;
    let c = o;
    $t(this, fo, Fo(o)), this.manager = n, this.data = s, this.disabled = a, this.effects = () => {
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
    const r = Ye(this, fo).value;
    return (n = (t = wr.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? n : r;
  }
  set id(t) {
    var n, r;
    const o = (r = (n = wr.pendingIdChanges) == null ? void 0 : n.get(this)) != null ? r : Ye(this, fo).peek();
    t !== o && (wr.pendingIdChanges || (wr.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var s;
      return b0(s = wr, of, _0).call(s);
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
of = /* @__PURE__ */ new WeakSet();
_0 = function() {
  const e = zn.pendingIdChanges;
  zn.pendingIdChanges = null, e && He(() => {
    for (const [t, n] of e)
      Ye(t, fo).value = n;
  });
};
sf = /* @__PURE__ */ new WeakMap();
fo = /* @__PURE__ */ new WeakMap();
af = /* @__PURE__ */ new WeakMap();
cf = /* @__PURE__ */ new WeakMap();
Me(nn, 4, "manager", S0, zn, sf);
Me(nn, 4, "data", C0, zn, af);
Me(nn, 4, "disabled", w0, zn, cf);
Re(zn, of);
zr(nn, zn);
zn.pendingIdChanges = null;
var Vc = zn, Sp = class {
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
}, k0, E0, N0, M0, P0, A0, Nd, kt, lf, df, uf, En = class extends (Nd = Vc, A0 = [Ne], P0 = [Ne], M0 = [Ne], N0 = [Ke], E0 = [Ke], k0 = [Ke], Nd) {
  constructor(t, n) {
    var r = t, { modifiers: o, type: s, sensors: a, plugins: i, effects: c } = r, l = v0(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(
      tf(ef({}, l), {
        effects: () => {
          var f;
          return [
            ...(f = c == null ? void 0 : c()) != null ? f : [],
            () => {
              const { manager: u, plugins: h } = this;
              if (!(!u || !h))
                for (const p of h) {
                  const { plugin: g } = Bs(p);
                  u.registry.plugins.register(g);
                }
            }
          ];
        }
      }),
      n
    ), we(kt, 5, this), Re(this, lf, we(kt, 8, this)), we(kt, 11, this), Re(this, df, we(kt, 12, this)), we(kt, 15, this), Re(this, uf, we(kt, 16, this, this.isDragSource ? "dragging" : "idle")), we(kt, 19, this), this.type = s, this.sensors = a, this.modifiers = o, this.alignment = l.alignment, this.plugins = i;
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
kt = Go(Nd);
lf = /* @__PURE__ */ new WeakMap();
df = /* @__PURE__ */ new WeakMap();
uf = /* @__PURE__ */ new WeakMap();
Me(kt, 4, "type", A0, En, lf);
Me(kt, 4, "modifiers", P0, En, df);
Me(kt, 4, "status", M0, En, uf);
Me(kt, 2, "isDropping", N0, En);
Me(kt, 2, "isDragging", E0, En);
Me(kt, 2, "isDragSource", k0, En);
zr(kt, En);
var R0, O0, D0, I0, j0, T0, Md, et, ff, hf, pf, mf, vf, Nn = class extends (Md = Vc, T0 = [Ne], j0 = [Ne], I0 = [Ne], D0 = [Ne], O0 = [Ne], R0 = [Ke], Md) {
  constructor(t, n) {
    var r = t, { accept: o, collisionDetector: s, collisionPriority: a, type: i } = r, c = v0(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, n), we(et, 5, this), Re(this, ff, we(et, 8, this)), we(et, 11, this), Re(this, hf, we(et, 12, this)), we(et, 15, this), Re(this, pf, we(et, 16, this)), we(et, 19, this), Re(this, mf, we(et, 20, this)), we(et, 23, this), Re(this, vf, we(et, 24, this)), we(et, 27, this), this.accept = o, this.collisionDetector = s, this.collisionPriority = a, this.type = i;
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
et = Go(Md);
ff = /* @__PURE__ */ new WeakMap();
hf = /* @__PURE__ */ new WeakMap();
pf = /* @__PURE__ */ new WeakMap();
mf = /* @__PURE__ */ new WeakMap();
vf = /* @__PURE__ */ new WeakMap();
Me(et, 4, "accept", T0, Nn, ff);
Me(et, 4, "type", j0, Nn, hf);
Me(et, 4, "collisionDetector", I0, Nn, pf);
Me(et, 4, "collisionPriority", D0, Nn, mf);
Me(et, 4, "shape", O0, Nn, vf);
Me(et, 2, "isDropTarget", R0, Nn);
zr(et, Nn);
var fI = class {
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
}, hI = class extends fI {
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
  return tf(ef({}, e), {
    cancelable: t,
    get defaultPrevented() {
      return n;
    },
    preventDefault() {
      t && (n = !0);
    }
  });
}
var pI = class extends ya {
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
        if (r.isDisabled() || Vc.pendingIdChanges)
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
}, zc = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(zc || {}), Bc = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Bc || {}), $0, W0, L0, F0, V0, z0, B0, Xt, gf;
B0 = [Ne], z0 = [Ke], V0 = [Ke], F0 = [Ke], L0 = [Ke], W0 = [Ke], $0 = [Ke];
var Bn = class {
  constructor() {
    we(Xt, 5, this), Re(this, gf, we(
      Xt,
      8,
      this,
      "idle"
      /* Idle */
    )), we(Xt, 11, this);
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
Xt = Go(null);
gf = /* @__PURE__ */ new WeakMap();
Me(Xt, 4, "value", B0, Bn, gf);
Me(Xt, 2, "current", z0, Bn);
Me(Xt, 2, "idle", V0, Bn);
Me(Xt, 2, "initializing", F0, Bn);
Me(Xt, 2, "initialized", L0, Bn);
Me(Xt, 2, "dragging", W0, Bn);
Me(Xt, 2, "dropped", $0, Bn);
zr(Xt, Bn);
var mI = class {
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
      He(() => {
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
        i.current === "initializing" && He(() => {
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
            const { source: f } = r, u = Zt(() => {
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
}, ko = class extends yt {
  /**
   * Creates a new sensor instance.
   *
   * @param manager - The drag drop manager instance
   * @param options - Optional sensor configuration
   */
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, vI = class extends AbortController {
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
}, fi, H0 = class {
  constructor(e) {
    this.options = e, Re(this, fi);
  }
  set controller(e) {
    $t(this, fi, e), e.signal.addEventListener("abort", () => this.abort());
  }
  /**
   * Called when the activation is triggered.
   */
  activate(e) {
    var t;
    (t = Ye(this, fi)) == null || t.activate(e);
  }
};
fi = /* @__PURE__ */ new WeakMap();
var _p = class extends yt {
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
}, gI = class {
  /**
   * Creates a new registry instance.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.draggables = new Sp(), this.droppables = new Sp(), this.plugins = new Pl(e), this.sensors = new Pl(e), this.modifiers = new Pl(e);
  }
  register(e, t) {
    if (e instanceof En)
      return this.draggables.register(e.id, e);
    if (e instanceof Nn)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof _p)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof ko)
      return this.sensors.register(e, t);
    if (e.prototype instanceof yt)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Vc)
      return e instanceof En ? this.draggables.unregister(e.id, e) : e instanceof Nn ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof _p)
      return this.modifiers.unregister(e);
    if (e.prototype instanceof ko)
      return this.sensors.unregister(e);
    if (e.prototype instanceof yt)
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
}, G0, Y0, K0, U0, q0, X0, Z0, Q0, J0, fs, hi, ao, Be, bf, xf, yf, wf, Cf, hs;
J0 = [Ke], Q0 = [Ne], Z0 = [Ne], X0 = [Ne], q0 = [Ne], U0 = [Ne], K0 = [Ke], Y0 = [Ke], G0 = [Ke];
var un = class {
  /**
   * Creates a new drag operation instance.
   *
   * @param manager - The drag and drop manager that owns this operation
   */
  constructor(e) {
    we(Be, 5, this), Re(this, fs), Re(this, hi), Re(this, ao, new Vr(
      void 0,
      (t, n) => t && n ? t.equals(n) : t === n
    )), this.status = new Bn(), Re(this, bf, we(Be, 8, this, !1)), we(Be, 11, this), Re(this, xf, we(Be, 12, this, null)), we(Be, 15, this), Re(this, yf, we(Be, 16, this, null)), we(Be, 19, this), Re(this, wf, we(Be, 20, this, null)), we(Be, 23, this), Re(this, Cf, we(Be, 24, this, [])), we(Be, 27, this), this.position = new Fc({ x: 0, y: 0 }), Re(this, hs, { x: 0, y: 0 }), $t(this, fs, e);
  }
  get shape() {
    const { current: e, initial: t, previous: n } = Ye(this, ao);
    return !e || !t ? null : { current: e, initial: t, previous: n };
  }
  /**
   * Sets the shape of the dragged entity.
   *
   * @param value - The new shape or null to reset
   */
  set shape(e) {
    e ? Ye(this, ao).current = e : Ye(this, ao).reset();
  }
  get source() {
    var e;
    const t = this.sourceIdentifier;
    if (t == null) return null;
    const n = Ye(this, fs).registry.draggables.get(t);
    return n && $t(this, hi, n), (e = n ?? Ye(this, hi)) != null ? e : null;
  }
  get target() {
    var e;
    const t = this.targetIdentifier;
    return t != null && (e = Ye(this, fs).registry.droppables.get(t)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: t } = this.position.delta;
    let n = { x: e, y: t };
    for (const r of this.modifiers)
      n = r.apply(tf(ef({}, this.snapshot()), {
        transform: n
      }));
    return $t(this, hs, n), n;
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
      transform: Ye(this, hs),
      shape: this.shape ? Ml(this.shape) : null,
      position: Ml(this.position),
      status: Ml(this.status),
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
    He(() => {
      this.status.set(
        "idle"
        /* Idle */
      ), this.sourceIdentifier = null, this.targetIdentifier = null, Ye(this, ao).reset(), this.position.reset({ x: 0, y: 0 }), $t(this, hs, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
Be = Go(null);
fs = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
ao = /* @__PURE__ */ new WeakMap();
bf = /* @__PURE__ */ new WeakMap();
xf = /* @__PURE__ */ new WeakMap();
yf = /* @__PURE__ */ new WeakMap();
wf = /* @__PURE__ */ new WeakMap();
Cf = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
Me(Be, 2, "shape", J0, un);
Me(Be, 4, "canceled", Q0, un, bf);
Me(Be, 4, "activatorEvent", Z0, un, xf);
Me(Be, 4, "sourceIdentifier", X0, un, yf);
Me(Be, 4, "targetIdentifier", q0, un, wf);
Me(Be, 4, "modifiers", U0, un, Cf);
Me(Be, 2, "source", K0, un);
Me(Be, 2, "target", Y0, un);
Me(Be, 2, "transform", G0, un);
zr(Be, un);
var bI = {
  get rendering() {
    return Promise.resolve();
  }
};
function sn(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var xI = class {
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
    const r = t ?? {}, o = sn(r.plugins, []), s = sn(r.sensors, []), a = sn(r.modifiers, []), i = (n = r.renderer) != null ? n : bI, c = new hI(this), l = new gI(this);
    this.registry = l, this.monitor = c, this.renderer = i, this.actions = new mI(this), this.dragOperation = new un(this), this.collisionObserver = new uI(this), this.plugins = [pI, ...o], this.modifiers = a, this.sensors = s;
    const { destroy: f } = this, u = ga(() => {
      var h, p, g;
      const m = Ee(() => this.dragOperation.modifiers), y = this.modifiers;
      for (const C of m)
        y.includes(C) || C.destroy();
      this.dragOperation.modifiers = (g = (p = (h = this.dragOperation.source) == null ? void 0 : h.modifiers) == null ? void 0 : p.map((C) => {
        const { plugin: b, options: x } = Bs(C);
        return new b(this, x);
      })) != null ? g : y;
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
}, ew = (e) => {
  throw TypeError(e);
}, Sf = (e, t, n) => t.has(e) || ew("Cannot " + n), ye = (e, t, n) => (Sf(e, t, "read from private field"), t.get(e)), Rt = (e, t, n) => t.has(e) ? ew("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), jt = (e, t, n, r) => (Sf(e, t, "write to private field"), t.set(e, n), n), tw = (e, t, n) => (Sf(e, t, "access private method"), n);
function Hc(e) {
  return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function nw(e, t) {
  const n = e.getAnimations();
  let r = null;
  for (const o of n) {
    if (o.playState !== "running") continue;
    const { effect: s } = o, i = (Hc(s) ? s.getKeyframes() : []).filter(t);
    i.length > 0 && (r = [i[i.length - 1], o]);
  }
  return r;
}
function Gc(e) {
  const { width: t, height: n, top: r, left: o, bottom: s, right: a } = e.getBoundingClientRect();
  return { width: t, height: n, top: r, left: o, bottom: s, right: a };
}
function _f(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function wa(e) {
  return "nodeType" in e;
}
function Vt(e) {
  var t, n, r;
  return e ? _f(e) ? e : wa(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function kf(e) {
  const { Document: t } = Vt(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function cr(e) {
  return !e || _f(e) ? !1 : e instanceof Vt(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function rw(e) {
  return e instanceof Vt(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Yo(e) {
  return e ? _f(e) ? e.document : wa(e) ? kf(e) ? e : cr(e) || rw(e) ? e.ownerDocument : document : document : document;
}
function yI(e) {
  var t, n, r, o;
  const { documentElement: s } = Yo(e), a = Vt(e).visualViewport, i = (t = a == null ? void 0 : a.width) != null ? t : s.clientWidth, c = (n = a == null ? void 0 : a.height) != null ? n : s.clientHeight, l = (r = a == null ? void 0 : a.offsetTop) != null ? r : 0, f = (o = a == null ? void 0 : a.offsetLeft) != null ? o : 0;
  return {
    top: l,
    left: f,
    right: f + i,
    bottom: l + c,
    width: i,
    height: c
  };
}
function wI(e, t) {
  if (CI(e) && e.open === !1)
    return !1;
  const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(e);
  return n === "visible" && r === "visible" && o === "visible";
}
function CI(e) {
  return e.tagName === "DETAILS";
}
function Gs(e, t = e.getBoundingClientRect(), n = 0) {
  var r, o, s, a, i;
  let c = t;
  const { ownerDocument: l } = e, f = (r = l.defaultView) != null ? r : window;
  let u = e.parentElement;
  for (; u && u !== l.documentElement; ) {
    if (!wI(u)) {
      const x = u.getBoundingClientRect(), S = n * (x.bottom - x.top), w = n * (x.right - x.left), E = n * (x.bottom - x.top), k = n * (x.right - x.left);
      c = {
        top: Math.max(c.top, x.top - S),
        right: Math.min(c.right, x.right + w),
        bottom: Math.min(c.bottom, x.bottom + E),
        left: Math.max(c.left, x.left - k),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, c.width = c.right - c.left, c.height = c.bottom - c.top;
    }
    u = u.parentElement;
  }
  const h = f.visualViewport, p = (o = h == null ? void 0 : h.offsetTop) != null ? o : 0, g = (s = h == null ? void 0 : h.offsetLeft) != null ? s : 0, m = (a = h == null ? void 0 : h.width) != null ? a : f.innerWidth, y = (i = h == null ? void 0 : h.height) != null ? i : f.innerHeight, C = n * y, b = n * m;
  return c = {
    top: Math.max(c.top, p - C),
    right: Math.min(
      c.right,
      g + m + b
    ),
    bottom: Math.min(
      c.bottom,
      p + y + C
    ),
    left: Math.max(c.left, g - b),
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
var ow = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Pd(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(
    e.querySelectorAll("iframe, frame")
  ))
    try {
      const o = r.contentDocument;
      o && !t.has(o) && n.push(...Pd(o, t));
    } catch {
    }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const o = r.parent;
      o && o.document && o.document !== e && n.push(...Pd(o.document, t));
    }
  } catch {
  }
  return n;
}
function Ef() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function sw() {
  var e, t;
  const n = Ef() ? window.visualViewport : null;
  return {
    x: (e = n == null ? void 0 : n.offsetLeft) != null ? e : 0,
    y: (t = n == null ? void 0 : n.offsetTop) != null ? t : 0
  };
}
function Nf(e) {
  return !e || !wa(e) ? !1 : e instanceof Vt(e).ShadowRoot;
}
function Ti(e) {
  if (e && wa(e)) {
    let t = e.getRootNode();
    if (Nf(t))
      return t;
    if (t instanceof Document)
      return t;
  }
  return Yo(e);
}
function Mf(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function SI(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((s, a) => {
    const i = r[a];
    if (kp(s) && kp(i) && (s.type !== "file" && (s.value = i.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), Ep(s) && Ep(i) && i.width > 0 && i.height > 0) {
      const c = s.getContext("2d");
      c == null || c.drawImage(i, 0, 0);
    }
  }), n;
}
function kp(e) {
  return "value" in e;
}
function Ep(e) {
  return e.tagName === "CANVAS";
}
function aw(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (_I(r)) {
    const { contentDocument: o } = r;
    if (o) {
      const { left: s, top: a } = r.getBoundingClientRect();
      return aw(o, {
        x: t - s,
        y: n - a
      });
    }
  }
  return r;
}
function _I(e) {
  return (e == null ? void 0 : e.tagName) === "IFRAME";
}
var Ad = /* @__PURE__ */ new WeakMap();
function kI(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var iw = class {
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
function No(e) {
  const t = e == null ? void 0 : e.ownerDocument.defaultView;
  if (t && t.self !== t.parent)
    return t.frameElement;
}
function EI(e) {
  const t = /* @__PURE__ */ new Set();
  let n = No(e);
  for (; n; )
    t.add(n), n = No(n);
  return t;
}
function NI(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function cw(e, t) {
  const n = () => performance.now();
  let r, o;
  return function(...s) {
    const a = this;
    o ? (r == null || r(), r = NI(
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
function PI(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = Gs(
    e,
    t
  );
  return n > 0 && r > 0;
}
var AI = ow ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, pi, RI = class extends AI {
  constructor(e) {
    super((t) => {
      if (!ye(this, pi)) {
        jt(this, pi, !0);
        return;
      }
      e(t, this);
    }), Rt(this, pi, !1);
  }
};
pi = /* @__PURE__ */ new WeakMap();
var Np = Array.from({ length: 100 }, (e, t) => t / 100), lw = 75, Cr, $i, qn, Sr, ps, ft, Ms, ms, Wi, dw, uw, fw = class {
  constructor(e, t, n = {
    debug: !1,
    skipInitial: !1
  }) {
    this.element = e, this.callback = t, Rt(this, Wi), this.disconnect = () => {
      var s, a, i;
      jt(this, Ms, !0), (s = ye(this, qn)) == null || s.disconnect(), (a = ye(this, Sr)) == null || a.disconnect(), ye(this, ps).disconnect(), (i = ye(this, ft)) == null || i.remove();
    }, Rt(this, Cr, !0), Rt(this, $i), Rt(this, qn), Rt(this, Sr), Rt(this, ps), Rt(this, ft), Rt(this, Ms, !1), Rt(this, ms, cw(() => {
      var s, a, i;
      const { element: c } = this;
      if ((s = ye(this, Sr)) == null || s.disconnect(), ye(this, Ms) || !ye(this, Cr) || !c.isConnected)
        return;
      const l = (a = c.ownerDocument) != null ? a : document, { innerHeight: f, innerWidth: u } = (i = l.defaultView) != null ? i : window, h = c.getBoundingClientRect(), p = Gs(c, h), { top: g, left: m, bottom: y, right: C } = p, b = -Math.floor(g), x = -Math.floor(m), S = -Math.floor(u - C), w = -Math.floor(f - y), E = `${b}px ${S}px ${w}px ${x}px`;
      this.boundingClientRect = h, jt(this, Sr, new IntersectionObserver(
        (k) => {
          const [N] = k, { intersectionRect: P } = N;
          (N.intersectionRatio !== 1 ? N.intersectionRatio : kn.intersectionRatio(
            P,
            Gs(c)
          )) !== 1 && ye(this, ms).call(this);
        },
        {
          threshold: Np,
          rootMargin: E,
          root: l
        }
      )), ye(this, Sr).observe(c), tw(this, Wi, dw).call(this);
    }, lw)), this.boundingClientRect = e.getBoundingClientRect(), jt(this, Cr, PI(e, this.boundingClientRect));
    let r = !0;
    this.callback = (s) => {
      r && (r = !1, n.skipInitial) || t(s);
    };
    const o = e.ownerDocument;
    n != null && n.debug && (jt(this, ft, document.createElement("div")), ye(this, ft).style.background = "rgba(0,0,0,0.15)", ye(this, ft).style.position = "fixed", ye(this, ft).style.pointerEvents = "none", o.body.appendChild(ye(this, ft))), jt(this, ps, new IntersectionObserver(
      (s) => {
        var a, i;
        const c = s[s.length - 1], { boundingClientRect: l, isIntersecting: f } = c, { width: u, height: h } = l, p = ye(this, Cr);
        jt(this, Cr, f), !(!u && !h) && (p && !f ? ((a = ye(this, Sr)) == null || a.disconnect(), this.callback(null), (i = ye(this, qn)) == null || i.disconnect(), jt(this, qn, void 0), ye(this, ft) && (ye(this, ft).style.visibility = "hidden")) : ye(this, ms).call(this), f && !ye(this, qn) && (jt(this, qn, new RI(ye(this, ms))), ye(this, qn).observe(e)));
      },
      {
        threshold: Np,
        root: o
      }
    )), ye(this, Cr) && !n.skipInitial && this.callback(this.boundingClientRect), ye(this, ps).observe(e);
  }
};
Cr = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
ft = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ms = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakSet();
dw = function() {
  ye(this, Ms) || (tw(this, Wi, uw).call(this), !MI(this.boundingClientRect, ye(this, $i)) && (this.callback(this.boundingClientRect), jt(this, $i, this.boundingClientRect)));
};
uw = function() {
  if (ye(this, ft)) {
    const { top: e, left: t, width: n, height: r } = Gs(
      this.element
    );
    ye(this, ft).style.overflow = "hidden", ye(this, ft).style.visibility = "visible", ye(this, ft).style.top = `${Math.floor(e)}px`, ye(this, ft).style.left = `${Math.floor(t)}px`, ye(this, ft).style.width = `${Math.floor(n)}px`, ye(this, ft).style.height = `${Math.floor(r)}px`;
  }
};
var Ua = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap();
function OI(e, t) {
  let n = Ua.get(e);
  return n || (n = { disconnect: new fw(
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
function DI(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = OI(r, t);
    n.add(o);
  }
  return () => n.forEach((r) => r());
}
function II(e, t) {
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
var vs, gs, mi, Rd, jI = class {
  constructor(e, t, n) {
    this.callback = t, Rt(this, vs), Rt(this, gs, !1), Rt(this, mi), Rt(this, Rd, cw((a) => {
      if (!ye(this, gs) && a.target && "contains" in a.target && typeof a.target.contains == "function") {
        for (const i of ye(this, mi))
          if (a.target.contains(i)) {
            this.callback(ye(this, vs).boundingClientRect);
            break;
          }
      }
    }, lw));
    const r = EI(e), o = DI(r, t), s = II(e, ye(this, Rd));
    jt(this, mi, r), jt(this, vs, new fw(e, t, n)), this.disconnect = () => {
      ye(this, gs) || (jt(this, gs, !0), o(), s(), ye(this, vs).disconnect());
    };
  }
};
vs = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Rd = /* @__PURE__ */ new WeakMap();
function Od(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function xo(e) {
  try {
    Od(e) && e.isConnected && e.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
    !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function Mp(e) {
  return !ow || !e ? !1 : e === Yo(e).scrollingElement;
}
function hw(e) {
  var t, n;
  const r = Vt(e), o = Mp(e) ? yI(e) : Gc(e), s = r.visualViewport, a = Mp(e) ? {
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
function TI(e, t) {
  const { isTop: n, isBottom: r, isLeft: o, isRight: s, position: a } = hw(e), { x: i, y: c } = t ?? { x: 0, y: 0 }, l = !n && a.current.y + c > 0, f = !r && a.current.y + c < a.max.y, u = !o && a.current.x + i > 0, h = !s && a.current.x + i < a.max.x;
  return {
    top: l,
    bottom: f,
    left: u,
    right: h,
    x: u || h,
    y: l || f
  };
}
var Pf = class {
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
}, Li = new Pf((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), $I = new Pf((e) => setTimeout(e, 50)), Fi = /* @__PURE__ */ new Map(), WI = Fi.clear.bind(Fi);
function An(e, t = !1) {
  if (!t) return Pp(e);
  let n = Fi.get(e);
  return n || (n = Pp(e), Fi.set(e, n), $I.schedule(WI), n);
}
function Pp(e) {
  return Vt(e).getComputedStyle(e);
}
function LI(e, t = An(e, !0)) {
  return t.position === "fixed" || t.position === "sticky";
}
function FI(e, t = An(e, !0)) {
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
var VI = {
  excludeElement: !0,
  escapeShadowDOM: !0
};
function Dd(e, t = VI) {
  const { limit: n, excludeElement: r, escapeShadowDOM: o } = t, s = /* @__PURE__ */ new Set();
  function a(i) {
    if (n != null && s.size >= n || !i)
      return s;
    if (kf(i) && i.scrollingElement != null && !s.has(i.scrollingElement))
      return s.add(i.scrollingElement), s;
    if (o && Nf(i))
      return a(i.host);
    if (!cr(i))
      return rw(i) ? a(i.parentElement) : s;
    if (s.has(i))
      return s;
    const c = An(i, !0);
    if (r && i === e || FI(i, c) && s.add(i), LI(i, c)) {
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
  let r = No(e);
  for (; r; ) {
    if (r === t)
      return n;
    const o = Gc(r), { x: s, y: a } = zI(r, o);
    n.x = n.x + o.left, n.y = n.y + o.top, n.scaleX = n.scaleX * s, n.scaleY = n.scaleY * a, r = No(r);
  }
  return n;
}
function zI(e, t = Gc(e)) {
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
function BI(e) {
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
function Yc(e) {
  var t, n, r, o, s, a, i, c, l;
  const { scale: f, transform: u, translate: h } = e, p = BI(f), g = Ys(h), m = HI(u);
  if (!m && !p && !g)
    return null;
  const y = {
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
    scaleX: y.x * b.scaleX,
    scaleY: y.y * b.scaleY
  };
}
function HI(e) {
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
var Ut = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Ut || {}), GI = {
  x: 0.2,
  y: 0.2
}, YI = {
  x: 10,
  y: 10
};
function KI(e, t, n, r = 25, o = GI, s = YI) {
  const { x: a, y: i } = t, { rect: c, isTop: l, isBottom: f, isLeft: u, isRight: h } = hw(e), p = Mo(e), g = An(e, !0), m = Yc(g), y = m !== null ? (m == null ? void 0 : m.scaleX) < 0 : !1, C = m !== null ? (m == null ? void 0 : m.scaleY) < 0 : !1, b = new kn(
    c.left * p.scaleX + p.x,
    c.top * p.scaleY + p.y,
    c.width * p.scaleX,
    c.height * p.scaleY
  ), x = {
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
  return w.height > 0 && (!l || C && !f) && i <= b.top + w.height && (n == null ? void 0 : n.y) !== 1 && a >= b.left - s.x && a <= b.right + s.x ? (x.y = C ? 1 : -1, S.y = r * Math.abs(
    (b.top + w.height - i) / w.height
  )) : w.height > 0 && (!f || C && !l) && i >= b.bottom - w.height && (n == null ? void 0 : n.y) !== -1 && a >= b.left - s.x && a <= b.right + s.x && (x.y = C ? -1 : 1, S.y = r * Math.abs(
    (b.bottom - w.height - i) / w.height
  )), w.width > 0 && (!h || y && !u) && a >= b.right - w.width && (n == null ? void 0 : n.x) !== -1 && i >= b.top - s.y && i <= b.bottom + s.y ? (x.x = y ? -1 : 1, S.x = r * Math.abs(
    (b.right - w.width - a) / w.width
  )) : w.width > 0 && (!u || y && !h) && a <= b.left + w.width && (n == null ? void 0 : n.x) !== 1 && i >= b.top - s.y && i <= b.bottom + s.y && (x.x = y ? 1 : -1, S.x = r * Math.abs(
    (b.left + w.width - a) / w.width
  )), {
    direction: x,
    speed: S
  };
}
function pw(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!cr(e))
    return;
  const r = Dd(e), o = [];
  for (const s of r) {
    if (!cr(s))
      continue;
    const { top: a, left: i } = UI(e, s);
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
function Ap(e) {
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
function UI(e, t) {
  const n = Ap(e), r = Ap(t);
  return {
    top: n.top - r.top - t.clientTop,
    left: n.left - r.left - t.clientLeft
  };
}
function qI(e, t, n) {
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
function XI(e, t, n) {
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
function mw({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function Rp(e, t = An(e).translate, n = !0) {
  if (n) {
    const r = nw(
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
var ZI = new Pf((e) => setTimeout(e, 0)), Ps = /* @__PURE__ */ new Map(), QI = Ps.clear.bind(Ps);
function JI(e) {
  const t = e.ownerDocument;
  let n = Ps.get(t);
  if (n) return n;
  n = t.getAnimations(), Ps.set(t, n), ZI.schedule(QI);
  const r = n.filter(
    (o) => Hc(o.effect) && o.effect.target === e
  );
  return Ps.set(e, r), n;
}
function e3(e, t) {
  const n = JI(e).filter((r) => {
    var o, s;
    if (Hc(r.effect)) {
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
      getBoundingClientRect: c = Gc
    } = t, l = e3(e, {
      properties: ["transform", "translate", "scale", "width", "height"],
      isValidTarget: (w) => (w !== e || Ef()) && w.contains(e)
    }), f = c(e);
    let { top: u, left: h, width: p, height: g } = f, m;
    const y = An(e), C = Yc(y), b = {
      x: (n = C == null ? void 0 : C.scaleX) != null ? n : 1,
      y: (r = C == null ? void 0 : C.scaleY) != null ? r : 1
    }, x = t3(e, y);
    l == null || l(), C && (m = XI(
      f,
      C,
      y.transformOrigin
    ), (i || x) && (u = m.top, h = m.left, p = m.width, g = m.height));
    const S = {
      width: (o = m == null ? void 0 : m.width) != null ? o : p,
      height: (s = m == null ? void 0 : m.height) != null ? s : g
    };
    if (x && !i && m) {
      const w = qI(
        m,
        x,
        y.transformOrigin
      );
      u = w.top, h = w.left, p = w.width, g = w.height, b.x = x.scaleX, b.y = x.scaleY;
    }
    a && (i || (h *= a.scaleX, p *= a.scaleX, u *= a.scaleY, g *= a.scaleY), h += a.x, u += a.y), super(h, u, p, g), this.scale = b, this.intrinsicWidth = S.width, this.intrinsicHeight = S.height;
  }
};
function t3(e, t) {
  const n = e.getAnimations();
  if (!n.length) return null;
  let r, o, s, a = !1;
  for (const i of n) {
    if (i.playState !== "running") continue;
    const c = Hc(i.effect) ? i.effect.getKeyframes() : [], l = c[c.length - 1];
    if (!l) continue;
    const { transform: f, translate: u, scale: h } = l;
    typeof f == "string" && f && (r = f, a = !0), typeof u == "string" && u && (o = u, a = !0), typeof h == "string" && h && (s = h, a = !0);
  }
  return a ? Yc({
    transform: r ?? t.transform,
    translate: o ?? t.translate,
    scale: s ?? t.scale
  }) : null;
}
function As(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var n3 = class {
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
  return e ? e instanceof Vt(e).Element || wa(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function Ks(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = Vt(e.target);
  return e instanceof t;
}
function r3(e) {
  if (!e) return !1;
  const { PointerEvent: t } = Vt(e.target);
  return e instanceof t;
}
function o3(e) {
  if (!Dr(e)) return !1;
  const { tagName: t } = e;
  return t === "INPUT" || t === "TEXTAREA" || s3(e);
}
function s3(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var Al = {};
function Id(e) {
  const t = Al[e] == null ? 0 : Al[e] + 1;
  return Al[e] = t, `${e}-${t}`;
}
var a3 = ({
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
    const o = Kt.distance(t.shape.center, n);
    return {
      id: r,
      value: 1 / o,
      type: Bc.PointerIntersection,
      priority: zc.High
    };
  }
  return null;
}, i3 = ({
  dragOperation: e,
  droppable: t
}) => {
  const { shape: n } = e;
  if (!t.shape || !(n != null && n.current))
    return null;
  const r = n.current.intersectionArea(t.shape);
  if (r) {
    const { position: o } = e, s = Kt.distance(t.shape.center, o.current), i = r / (n.current.area + t.shape.area - r) / s;
    return {
      id: t.id,
      value: i,
      type: Bc.ShapeIntersection,
      priority: zc.Normal
    };
  }
  return null;
}, vw = (e) => {
  var t;
  return (t = a3(e)) != null ? t : i3(e);
}, c3 = (e) => {
  const { dragOperation: t, droppable: n } = e, { shape: r, position: o } = t;
  if (!n.shape)
    return null;
  const s = r ? kn.from(r.current.boundingRectangle).corners : void 0, i = kn.from(
    n.shape.boundingRectangle
  ).corners.reduce(
    (c, l, f) => {
      var u;
      return c + Kt.distance(
        Kt.from(l),
        (u = s == null ? void 0 : s[f]) != null ? u : o.current
      );
    },
    0
  ) / 4;
  return {
    id: n.id,
    value: 1 / i,
    type: Bc.Collision,
    priority: zc.Normal
  };
}, l3 = Object.create, Af = Object.defineProperty, d3 = Object.defineProperties, u3 = Object.getOwnPropertyDescriptor, f3 = Object.getOwnPropertyDescriptors, Vi = Object.getOwnPropertySymbols, gw = Object.prototype.hasOwnProperty, bw = Object.prototype.propertyIsEnumerable, xw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ko = (e) => {
  throw TypeError(e);
}, jd = (e, t, n) => t in e ? Af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Us = (e, t) => {
  for (var n in t || (t = {}))
    gw.call(t, n) && jd(e, n, t[n]);
  if (Vi)
    for (var n of Vi(t))
      bw.call(t, n) && jd(e, n, t[n]);
  return e;
}, Rf = (e, t) => d3(e, f3(t)), Op = (e, t) => Af(e, "name", { value: t, configurable: !0 }), yw = (e, t) => {
  var n = {};
  for (var r in e)
    gw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Vi)
    for (var r of Vi(e))
      t.indexOf(r) < 0 && bw.call(e, r) && (n[r] = e[r]);
  return n;
}, Uo = (e) => {
  var t;
  return [, , , l3((t = e == null ? void 0 : e[xw("metadata")]) != null ? t : null)];
}, ww = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], bs = (e) => e !== void 0 && typeof e != "function" ? Ko("Function expected") : e, h3 = (e, t, n, r, o) => ({ kind: ww[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ko("Already initialized") : o.push(bs(s || null)) }), Br = (e, t) => jd(t, xw("metadata"), e[3]), nt = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Qt = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), g = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = ww[u + 5], y = u > 3 && (e[g - 1] = []), C = e[g] || (e[g] = []), b = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && u3(u < 4 ? o : { get [n]() {
    return We(this, s);
  }, set [n](S) {
    return Et(this, s, S);
  } }, n));
  u ? p && u < 4 && Op(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : Op(o, n);
  for (var x = r.length - 1; x >= 0; x--)
    l = h3(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => p3(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? We : Ir)(S, o, u ^ 4 ? s : b.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Et(S, o, w, u ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[x])(u ? u < 4 ? p ? s : b[m] : u > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? bs(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : b[m] = i : o = i) : typeof i != "object" || i === null ? Ko("Object expected") : (bs(a = i.get) && (b.get = a), bs(a = i.set) && (b.set = a), bs(a = i.init) && y.unshift(a));
  return u || Br(e, o), b && Af(o, n, b), p ? u ^ 4 ? s : b : o;
}, Of = (e, t, n) => t.has(e) || Ko("Cannot " + n), p3 = (e, t) => Object(t) !== t ? Ko('Cannot use the "in" operator on this value') : e.has(t), We = (e, t, n) => (Of(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => t.has(e) ? Ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Et = (e, t, n, r) => (Of(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ir = (e, t, n) => (Of(e, t, "access private method"), n), Dp = {
  role: "button",
  roleDescription: "draggable"
}, m3 = "dnd-kit-description", v3 = "dnd-kit-announcement", g3 = {
  draggable: "To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel."
}, b3 = {
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
function x3(e) {
  const t = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(t);
}
function y3(e, t) {
  const n = document.createElement("div");
  return n.id = e, n.style.setProperty("display", "none"), n.textContent = t, n;
}
function w3(e) {
  const t = document.createElement("div");
  return t.id = e, t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), t.setAttribute("aria-atomic", "true"), t.style.setProperty("position", "fixed"), t.style.setProperty("width", "1px"), t.style.setProperty("height", "1px"), t.style.setProperty("margin", "-1px"), t.style.setProperty("border", "0"), t.style.setProperty("padding", "0"), t.style.setProperty("overflow", "hidden"), t.style.setProperty("clip", "rect(0 0 0 0)"), t.style.setProperty("clip-path", "inset(100%)"), t.style.setProperty("white-space", "nowrap"), t;
}
var C3 = ["dragover", "dragmove"], S3 = class extends yt {
  constructor(e, t) {
    super(e);
    const {
      id: n,
      idPrefix: {
        description: r = m3,
        announcement: o = v3
      } = {},
      announcements: s = b3,
      screenReaderInstructions: a = g3,
      debounce: i = 500
    } = t ?? {}, c = n ? `${r}-${n}` : Id(r), l = n ? `${o}-${n}` : Id(o);
    let f, u, h, p;
    const g = (w = p) => {
      !h || !w || (h == null ? void 0 : h.nodeValue) !== w && (h.nodeValue = w);
    }, m = () => Li.schedule(g), y = _3(
      m,
      i
    ), C = Object.entries(s).map(
      ([w, E]) => this.manager.monitor.addEventListener(
        w,
        (k, N) => {
          const P = h;
          if (!P) return;
          const T = E == null ? void 0 : E(k, N);
          T && P.nodeValue !== T && (p = T, C3.includes(w) ? y() : (m(), y.cancel()));
        }
      )
    ), b = () => {
      let w = [];
      f != null && f.isConnected || (f = y3(
        c,
        a.draggable
      ), w.push(f)), u != null && u.isConnected || (u = w3(l), h = document.createTextNode(""), u.appendChild(h), w.push(u)), w.length > 0 && document.body.append(...w);
    }, x = /* @__PURE__ */ new Set();
    function S() {
      for (const w of x)
        w();
    }
    this.registerEffect(() => {
      var w;
      x.clear();
      for (const E of this.manager.registry.draggables.value) {
        const k = (w = E.handle) != null ? w : E.element;
        if (k) {
          (!f || !u) && x.add(b), (!x3(k) || Ef()) && !k.hasAttribute("tabindex") && x.add(() => k.setAttribute("tabindex", "0")), !k.hasAttribute("role") && k.tagName.toLowerCase() !== "button" && x.add(
            () => k.setAttribute("role", Dp.role)
          ), k.hasAttribute("aria-roledescription") || x.add(
            () => k.setAttribute(
              "aria-roledescription",
              Dp.roleDescription
            )
          ), k.hasAttribute("aria-describedby") || x.add(
            () => k.setAttribute("aria-describedby", c)
          );
          for (const P of ["aria-pressed", "aria-grabbed"]) {
            const T = String(E.isDragging);
            k.getAttribute(P) !== T && x.add(() => k.setAttribute(P, T));
          }
          const N = String(E.disabled);
          k.getAttribute("aria-disabled") !== N && x.add(
            () => k.setAttribute("aria-disabled", N)
          );
        }
      }
      x.size > 0 && Li.schedule(S);
    }), this.destroy = () => {
      super.destroy(), f == null || f.remove(), u == null || u.remove(), C.forEach((w) => w());
    };
  }
};
function _3(e, t) {
  let n;
  const r = () => {
    clearTimeout(n), n = setTimeout(e, t);
  };
  return r.cancel = () => clearTimeout(n), r;
}
var zi = /* @__PURE__ */ new Map(), Cw, Sw, _w, kw, Td, Rs, Wn, Df, Po, Ew, Nw, Mw, Pw, lr = class extends (Td = ya, kw = [Ne], _w = [Ke], Sw = [Ke], Cw = [Ke], Td) {
  constructor(t, n) {
    super(t, n), nt(Wn, 5, this), Ue(this, Po), Ue(this, Rs, /* @__PURE__ */ new Set()), Ue(this, Df, nt(Wn, 8, this, /* @__PURE__ */ new Set())), nt(Wn, 11, this), this.registerEffect(Ir(this, Po, Ew));
  }
  /**
   * Registers CSS rules to be injected into the active drag operation's
   * document and shadow roots. The StyleInjector handles tracking
   * which roots need the styles and cleaning up when they're no longer needed.
   *
   * Returns a cleanup function that unregisters the rules.
   */
  register(t) {
    return We(this, Rs).add(t), () => {
      We(this, Rs).delete(t);
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
    return Ti((t = n == null ? void 0 : n.element) != null ? t : null);
  }
  get targetRoot() {
    var t;
    const { target: n } = this.manager.dragOperation;
    return Ti((t = n == null ? void 0 : n.element) != null ? t : null);
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
Wn = Uo(Td);
Rs = /* @__PURE__ */ new WeakMap();
Df = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
Ew = function() {
  const { roots: e } = this, t = [];
  for (const n of e)
    for (const r of We(this, Rs))
      t.push(Ir(this, Po, Nw).call(this, n, r));
  return () => {
    for (const n of t)
      n();
  };
};
Nw = function(e, t) {
  let n = zi.get(e);
  n || (n = /* @__PURE__ */ new Map(), zi.set(e, n));
  let r = n.get(t);
  if (!r) {
    const s = kf(e) ? Ir(this, Po, Mw).call(this, e, n, t) : Ir(this, Po, Pw).call(this, e, n, t);
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
Mw = function(e, t, n) {
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
      a.disconnect(), o.remove(), t.delete(n), t.size === 0 && zi.delete(e);
    }
  };
};
Pw = function(e, t, n) {
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
      if (Nf(e) && ((a = e.host) != null && a.isConnected)) {
        const i = e.adoptedStyleSheets.indexOf(s);
        i !== -1 && e.adoptedStyleSheets.splice(i, 1);
      }
      t.delete(n), t.size === 0 && zi.delete(e);
    }
  };
};
Qt(Wn, 4, "additionalRoots", kw, lr, Df);
Qt(Wn, 2, "sourceRoot", _w, lr);
Qt(Wn, 2, "targetRoot", Sw, lr);
Qt(Wn, 2, "roots", Cw, lr);
Br(Wn, lr);
lr.configure = xa(lr);
var Kc = lr, k3 = class extends yt {
  constructor(e, t) {
    super(e, t), this.manager = e;
    const { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(
      Kc
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
}, Ca = "data-dnd-", $d = `${Ca}dropping`, ut = "--dnd-", mn = `${Ca}dragging`, Bi = `${Ca}placeholder`, E3 = [
  mn,
  Bi,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], N3 = ["view-transition-name"], M3 = `
  :is(:root,:host) [${mn}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${ut}top, 0px) !important;
    left: var(${ut}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${ut}width, auto);
    max-width: var(${ut}width, auto);
    height: var(${ut}height, auto);
    max-height: var(${ut}height, auto);
    transform: var(${ut}transform, none) !important;
    transition: var(${ut}transition) !important;
  }

  :is(:root,:host) [${Bi}] {
    transition: none;
  }

  :is(:root,:host) [${Bi}='hidden'] {
    visibility: hidden;
  }

  [${mn}] * {
    pointer-events: none !important;
  }

  [${mn}]:not([${$d}]) {
    translate: var(${ut}translate) !important;
  }

  [${mn}][style*='${ut}scale'] {
    scale: var(${ut}scale) !important;
    transform-origin: var(${ut}transform-origin) !important;
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
function P3(e, t = "hidden") {
  return Ee(() => {
    const { element: n, manager: r } = e;
    if (!n || !r) return;
    const o = A3(
      n,
      r.registry.droppables
    ), s = [], a = SI(n), { remove: i } = a;
    return R3(o, a, s), O3(a, t), a.remove = () => {
      s.forEach((c) => c()), i.call(a);
    }, a;
  });
}
function A3(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    if (r.element && (e === r.element || e.contains(r.element))) {
      const o = `${Ca}${Id("dom-id")}`;
      r.element.setAttribute(o, ""), n.set(r, o);
    }
  return n;
}
function R3(e, t, n) {
  for (const [r, o] of e) {
    if (!r.element) continue;
    const s = `[${o}]`, a = t.matches(s) ? t : t.querySelector(s);
    if (r.element.removeAttribute(o), !a) continue;
    const i = r.element;
    r.proxy = a, a.removeAttribute(o), Ad.set(i, a), n.push(() => {
      Ad.delete(i), r.proxy = void 0;
    });
  }
}
function O3(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Bi, t);
}
function Aw(e, t) {
  return e === t ? !0 : No(e) === No(t);
}
function Ip(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && Dr(t) && t.hasAttribute("popover") && requestAnimationFrame(() => xo(t));
}
function Wd(e) {
  return e.tagName === "TR";
}
function D3(e, t, n) {
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
      if (i.startsWith("aria-") || E3.includes(i))
        continue;
      const c = e.getAttribute(i);
      if (i === "style") {
        if (As(e) && As(t)) {
          const l = e.style;
          for (const f of Array.from(t.style))
            l.getPropertyValue(f) === "" && t.style.removeProperty(f);
          for (const f of Array.from(l)) {
            if (N3.includes(f) || f.startsWith(ut))
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
function I3(e, t, n) {
  const r = new MutationObserver((o) => {
    for (const s of o)
      if (s.addedNodes.length !== 0)
        for (const a of Array.from(s.addedNodes)) {
          if (a.contains(e) && e.nextElementSibling !== t) {
            e.insertAdjacentElement("afterend", t), xo(n);
            return;
          }
          if (a.contains(t) && t.previousElementSibling !== e) {
            t.insertAdjacentElement("beforebegin", e), xo(n);
            return;
          }
        }
    e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), xo(n));
  });
  return r.observe(e.ownerDocument.body, {
    childList: !0,
    subtree: !0
  }), r;
}
function j3(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const o = new Sn(e.placeholder, {
      frameTransform: e.frameTransform,
      ignoreTransforms: !0
    }), s = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, a = (e.width - o.width) * s.x + e.delta.x, i = (e.height - o.height) * s.y + e.delta.y, c = sw();
    if (e.styles.set(
      {
        width: o.width - e.widthOffset,
        height: o.height - e.heightOffset,
        top: e.top + i + c.y,
        left: e.left + a + c.x
      },
      ut
    ), (n = e.getElementMutationObserver()) == null || n.takeRecords(), Wd(e.element) && Wd(e.placeholder)) {
      const m = Array.from(e.element.cells), y = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(m.map((C) => C.style.width));
      for (const [C, b] of m.entries()) {
        const x = y[C];
        b.style.width = `${x.getBoundingClientRect().width}px`;
      }
    }
    const l = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, f = e.left + a + c.x + l.x, u = e.top + i + c.y + l.y, h = o.width - e.widthOffset, p = o.height - e.heightOffset, g = e.frameTransform;
    e.dragOperation.shape = new kn(
      f * g.scaleX + g.x,
      u * g.scaleY + g.y,
      h * g.scaleX,
      p * g.scaleY
    );
  });
}
var T3 = 250, $3 = "ease";
function W3(e) {
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
    duration: a = T3,
    easing: i = $3
  } = s ?? {};
  xo(e.feedbackElement);
  const [, c] = (t = nw(
    e.feedbackElement,
    (b) => "translate" in b
  )) != null ? t : [];
  c == null || c.pause();
  const l = (n = e.placeholder) != null ? n : e.element, f = {
    frameTransform: Aw(e.feedbackElement, l) ? null : void 0
  }, u = new Sn(e.feedbackElement, f), h = (r = Ys(An(e.feedbackElement).translate)) != null ? r : e.translate, p = new Sn(l, f), g = kn.delta(u, p, e.alignment), m = {
    x: h.x - g.x,
    y: h.y - g.y
  }, y = Math.round(u.intrinsicHeight) !== Math.round(p.intrinsicHeight) ? {
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
  e.styles.set({ transition: e.transition }, ut), e.feedbackElement.setAttribute($d, ""), (o = e.getElementMutationObserver()) == null || o.takeRecords(), mw({
    element: e.feedbackElement,
    keyframes: Rf(Us(Us({}, y), C), {
      translate: [
        `${h.x}px ${h.y}px 0`,
        `${m.x}px ${m.y}px 0`
      ]
    }),
    options: {
      duration: Mf(Vt(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? a : 0,
      easing: i
    }
  }).then(() => {
    e.feedbackElement.removeAttribute($d), c == null || c.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Rw, Ld, qs, If, vi, Ow, Dw, Ao = class extends (Ld = yt, Rw = [Ne], Ld) {
  constructor(t, n) {
    super(t, n), Ue(this, vi), Ue(this, If, nt(qs, 8, this)), nt(qs, 11, this), this.state = {
      initial: {},
      current: {}
    };
    const r = t.registry.plugins.get(Kc), o = r == null ? void 0 : r.register(M3);
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
    this.registerEffect(Ir(this, vi, Ow).bind(this, r)), this.registerEffect(Ir(this, vi, Dw));
  }
};
qs = Uo(Ld);
If = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakSet();
Ow = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = Ti(t);
  if (n)
    return e.addRoot(n);
};
Dw = function() {
  var e, t, n, r, o, s, a;
  const { state: i, manager: c, options: l } = this, { dragOperation: f } = c, { position: u, source: h, status: p } = f;
  if (p.idle) {
    i.current = {}, i.initial = {};
    return;
  }
  if (!h) return;
  const { element: g } = h, m = h.pluginConfig(Ao), y = (t = (e = m == null ? void 0 : m.feedback) != null ? e : l == null ? void 0 : l.feedback) != null ? t : "default", C = typeof y == "function" ? y(h, c) : y;
  if (!g || C === "none" || !p.initialized || p.initializing)
    return;
  const { initial: b } = i, x = (n = this.overlay) != null ? n : g, S = Mo(x), w = Mo(g), E = !Aw(g, x), k = new Sn(g, {
    frameTransform: E ? w : null,
    ignoreTransforms: !E
  }), N = {
    x: w.scaleX / S.scaleX,
    y: w.scaleY / S.scaleY
  };
  let { width: P, height: T, top: j, left: O } = k;
  E && (P = P / N.x, T = T / N.y);
  const $ = new n3(x), F = An(g), {
    transition: B,
    translate: W,
    boxSizing: Y,
    paddingBlockStart: D,
    paddingBlockEnd: L,
    paddingInlineStart: Q,
    paddingInlineEnd: A,
    borderInlineStartWidth: M,
    borderInlineEndWidth: V,
    borderBlockStartWidth: z,
    borderBlockEndWidth: K
  } = F, q = B.split(",").filter((Z) => !/^\s*(transform|translate|scale)\b/.test(Z)).join(","), I = Yc(F), re = F.transform, te = C === "clone", de = Y === "content-box", ge = de ? parseInt(Q) + parseInt(A) + parseInt(M) + parseInt(V) : 0, me = de ? parseInt(D) + parseInt(L) + parseInt(z) + parseInt(K) : 0, ke = C !== "move" && !this.overlay ? P3(h, te ? "clone" : "hidden") : null, De = Ee(
    () => Ks(c.dragOperation.activatorEvent)
  );
  if (!b.translate) {
    if (this.overlay && I)
      b.translate = { x: I.x, y: I.y };
    else if (W !== "none") {
      const Z = Ys(W);
      Z && (b.translate = Z);
    }
  }
  if (!b.transformOrigin) {
    const Z = Ee(() => u.current), se = O + ((r = I == null ? void 0 : I.x) != null ? r : 0), fe = j + ((o = I == null ? void 0 : I.y) != null ? o : 0);
    b.transformOrigin = {
      x: (Z.x - se * S.scaleX - S.x) / (P * S.scaleX),
      y: (Z.y - fe * S.scaleY - S.y) / (T * S.scaleY)
    };
  }
  const { transformOrigin: Te } = b, ot = j * S.scaleY + S.y, qe = O * S.scaleX + S.x;
  if (!b.coordinates && (b.coordinates = {
    x: qe,
    y: ot
  }, N.x !== 1 || N.y !== 1)) {
    const { scaleX: Z, scaleY: se } = w, { x: fe, y: pe } = Te;
    b.coordinates.x += (P * Z - P) * fe, b.coordinates.y += (T * se - T) * pe;
  }
  b.dimensions || (b.dimensions = { width: P, height: T }), b.frameTransform || (b.frameTransform = S);
  const zt = {
    x: b.coordinates.x - qe,
    y: b.coordinates.y - ot
  }, Ge = {
    width: (b.dimensions.width * b.frameTransform.scaleX - P * S.scaleX) * Te.x,
    height: (b.dimensions.height * b.frameTransform.scaleY - T * S.scaleY) * Te.y
  }, wt = {
    x: zt.x / S.scaleX + Ge.width,
    y: zt.y / S.scaleY + Ge.height
  }, $e = {
    left: O + wt.x,
    top: j + wt.y
  };
  x.setAttribute(mn, "true");
  const pt = Ee(() => f.transform), Xe = (s = b.translate) != null ? s : { x: 0, y: 0 }, Bt = pt.x * S.scaleX + Xe.x, Ht = pt.y * S.scaleY + Xe.y, ve = sw();
  $.set(
    {
      width: P - ge,
      height: T - me,
      top: $e.top + ve.y,
      left: $e.left + ve.x,
      translate: `${Bt}px ${Ht}px 0`,
      transform: this.overlay ? "none" : re,
      transition: q ? `${q}, translate 0ms linear` : "translate 0ms linear",
      scale: E ? `${N.x} ${N.y}` : "",
      "transform-origin": `${Te.x * 100}% ${Te.y * 100}%`
    },
    ut
  ), ke && (g.insertAdjacentElement("afterend", ke), l != null && l.rootElement && (typeof l.rootElement == "function" ? l.rootElement(h) : l.rootElement).appendChild(g)), Od(x) && (x.hasAttribute("popover") || x.setAttribute("popover", "manual"), xo(x), x.addEventListener("beforetoggle", Ip));
  let Ct, Rn, Jt;
  const Hn = j3({
    placeholder: ke,
    element: g,
    feedbackElement: x,
    frameTransform: S,
    transformOrigin: Te,
    width: P,
    height: T,
    top: j,
    left: O,
    widthOffset: ge,
    heightOffset: me,
    delta: wt,
    styles: $,
    dragOperation: f,
    getTranslate: () => i.current.translate,
    getElementMutationObserver: () => Ct,
    getSavedCellWidths: () => Jt,
    setSavedCellWidths: (Z) => {
      Jt = Z;
    }
  }), fn = new Sn(x);
  Ee(() => f.shape = fn);
  const Gt = Vt(x), On = (Z) => {
    this.manager.actions.stop({ event: Z });
  }, Gn = Mf(Gt);
  De && Gt.addEventListener("resize", On), Ee(() => h.status) === "idle" && requestAnimationFrame(() => h.status = "dragging"), ke && (Hn.observe(ke), Ct = D3(
    g,
    ke,
    te
  ), Rn = I3(
    g,
    ke,
    x
  ));
  const mt = (a = c.dragOperation.source) == null ? void 0 : a.id, H = () => {
    var Z;
    if (!De || mt == null) return;
    const se = c.registry.draggables.get(mt), fe = (Z = se == null ? void 0 : se.handle) != null ? Z : se == null ? void 0 : se.element;
    cr(fe) && fe.focus();
  }, J = () => {
    Ct == null || Ct.disconnect(), Rn == null || Rn.disconnect(), Hn.disconnect(), Gt.removeEventListener("resize", On), Od(x) && (x.removeEventListener(
      "beforetoggle",
      Ip
    ), x.removeAttribute("popover")), x.removeAttribute(mn), $.reset();
    const Z = () => {
      var se;
      if (Jt && Wd(g)) {
        const ze = Array.from(g.cells);
        for (const [Ze, At] of ze.entries())
          At.style.width = (se = Jt[Ze]) != null ? se : "";
      }
      h.status = "idle";
      const fe = i.current.translate != null, pe = f.status.dragging;
      ke && (!pe && fe || ke.parentElement !== x.parentElement) && x.isConnected && ke.replaceWith(x), ke == null || ke.remove();
    };
    x === this.overlay ? setTimeout(Z, 0) : Z();
  }, ee = l == null ? void 0 : l.dropAnimation, G = this, ce = ga(
    // Update transform on move
    () => {
      var Z, se, fe;
      const { transform: pe, status: ze } = f;
      if (!(!pe.x && !pe.y && !i.current.translate) && ze.dragging) {
        const Ze = (Z = b.translate) != null ? Z : { x: 0, y: 0 }, At = {
          x: pe.x / S.scaleX + Ze.x,
          y: pe.y / S.scaleY + Ze.y
        }, hn = i.current.translate, St = Ee(() => f.modifiers), dt = Ee(() => {
          var pr;
          return (pr = f.shape) == null ? void 0 : pr.current;
        }), en = l == null ? void 0 : l.keyboardTransition, Ea = De && !Gn && en !== null ? `${(se = en == null ? void 0 : en.duration) != null ? se : 250}ms ${(fe = en == null ? void 0 : en.easing) != null ? fe : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        if ($.set(
          {
            transition: q ? `${q}, translate ${Ea}` : `translate ${Ea}`,
            translate: `${At.x}px ${At.y}px 0`
          },
          ut
        ), Ct == null || Ct.takeRecords(), dt && dt !== fn && hn && !St.length) {
          const pr = Kt.delta(At, hn);
          f.shape = kn.from(
            dt.boundingRectangle
          ).translate(
            pr.x * S.scaleX,
            pr.y * S.scaleY
          );
        } else
          f.shape = new Sn(x);
        i.current.translate = At;
      }
    },
    // Drop animation
    function() {
      if (f.status.dropped) {
        this.dispose(), h.status = "dropping";
        const Z = (m == null ? void 0 : m.dropAnimation) !== void 0 ? m.dropAnimation : G.dropAnimation !== void 0 ? G.dropAnimation : ee;
        let se = i.current.translate;
        const fe = se != null;
        if (!se && g !== x && (se = { x: 0, y: 0 }), !se || Z === null) {
          J();
          return;
        }
        c.renderer.rendering.then(() => {
          W3({
            source: h,
            element: g,
            feedbackElement: x,
            placeholder: ke,
            translate: se,
            moved: fe,
            transition: B,
            alignment: h.alignment,
            styles: $,
            animation: Z ?? void 0,
            getElementMutationObserver: () => Ct,
            cleanup: J,
            restoreFocus: H
          });
        });
      }
    }
  );
  return () => {
    J(), ce();
  };
};
Qt(qs, 4, "overlay", Rw, Ao, If);
Br(qs, Ao);
Ao.configure = xa(Ao);
var Iw = Ao, ns = !0, L3 = !1, jw, Tw, $w, Ww, Qn, jf, Tf;
Ww = ($w = [Ne], Ut.Forward), Tw = (jw = [Ne], Ut.Reverse);
var Xs = class {
  constructor() {
    Ue(this, jf, nt(Qn, 8, this, ns)), nt(Qn, 11, this), Ue(this, Tf, nt(Qn, 12, this, ns)), nt(Qn, 15, this);
  }
  isLocked(e) {
    return e === Ut.Idle ? !1 : e == null ? this[Ut.Forward] === ns && this[Ut.Reverse] === ns : this[e] === ns;
  }
  unlock(e) {
    e !== Ut.Idle && (this[e] = L3);
  }
};
Qn = Uo(null);
jf = /* @__PURE__ */ new WeakMap();
Tf = /* @__PURE__ */ new WeakMap();
Qt(Qn, 4, Ww, $w, Xs, jf);
Qt(Qn, 4, Tw, jw, Xs, Tf);
Br(Qn, Xs);
var F3 = [Ut.Forward, Ut.Reverse], jp = class {
  constructor() {
    this.x = new Xs(), this.y = new Xs();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, V3 = class extends yt {
  constructor(e) {
    super(e);
    const t = Fo(new jp());
    let n = null;
    this.signal = t, Zt(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new jp();
        return;
      }
      const { delta: o } = e.dragOperation.position;
      if (n) {
        const s = {
          x: Tp(o.x, n.x),
          y: Tp(o.y, n.y)
        }, a = t.peek();
        He(() => {
          for (const i of f0)
            for (const c of F3)
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
function Tp(e, t) {
  return Math.sign(e - t);
}
var Lw, Fd, Zs, $f, Xn, Vd, Sa = class extends (Fd = ya, Lw = [Ne], Fd) {
  constructor(e) {
    super(e), Ue(this, $f, nt(Zs, 8, this, !1)), nt(Zs, 11, this), Ue(this, Xn), Ue(this, Vd, () => {
      if (!We(this, Xn))
        return;
      const { element: s, by: a } = We(this, Xn);
      a.y && (s.scrollTop += a.y), a.x && (s.scrollLeft += a.x);
    }), this.scroll = (s, a) => {
      var i;
      if (this.disabled)
        return !1;
      const c = this.getScrollableElements();
      if (!c)
        return Et(this, Xn, void 0), !1;
      const { position: l } = this.manager.dragOperation, f = l == null ? void 0 : l.current;
      if (f) {
        const { by: u } = s ?? {}, h = u ? {
          x: $p(u.x),
          y: $p(u.y)
        } : void 0, p = h ? void 0 : this.scrollIntentTracker.current;
        if (p != null && p.isLocked())
          return !1;
        for (const g of c) {
          const m = TI(g, u);
          if (m.x || m.y) {
            const { speed: y, direction: C } = KI(
              g,
              f,
              h,
              a == null ? void 0 : a.acceleration,
              a == null ? void 0 : a.threshold
            );
            if (p)
              for (const b of f0)
                p[b].isLocked(C[b]) && (y[b] = 0, C[b] = 0);
            if (C.x || C.y) {
              const { x: b, y: x } = u ?? C, S = b * y.x, w = x * y.y;
              if (S || w) {
                const E = (i = We(this, Xn)) == null ? void 0 : i.by;
                if (this.autoScrolling && E && (E.x && !S || E.y && !w))
                  continue;
                return Et(this, Xn, {
                  element: g,
                  by: {
                    x: S,
                    y: w
                  }
                }), Li.schedule(We(this, Vd)), !0;
              }
            }
          }
        }
      }
      return Et(this, Xn, void 0), !1;
    };
    let t = null, n = null;
    const r = vd(() => {
      const { position: s, source: a } = e.dragOperation;
      if (!s)
        return null;
      const i = aw(
        Ti(a == null ? void 0 : a.element),
        s.current
      );
      return i && (t = i), i ?? t;
    }), o = vd(() => {
      const s = r.value, { documentElement: a } = Yo(s);
      if (!s || s === a) {
        const { target: i } = e.dragOperation, c = i == null ? void 0 : i.element;
        if (c) {
          const l = Dd(c, {
            excludeElement: !1
          });
          return n = l, l;
        }
      }
      if (s) {
        const i = Dd(s, {
          excludeElement: !1
        });
        return this.autoScrolling && n && i.size < (n == null ? void 0 : n.size) ? n : (n = i, i);
      }
      return n = null, null;
    }, vn);
    this.getScrollableElements = () => o.value, this.scrollIntentTracker = new V3(e), this.destroy = e.monitor.addEventListener("dragmove", (s) => {
      this.disabled || s.defaultPrevented || !Ks(e.dragOperation.activatorEvent) || !s.by || this.scroll({ by: s.by }) && s.preventDefault();
    });
  }
};
Zs = Uo(Fd);
$f = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
Vd = /* @__PURE__ */ new WeakMap();
Qt(Zs, 4, "autoScrolling", Lw, Sa, $f);
Br(Zs, Sa);
function $p(e) {
  return e > 0 ? Ut.Forward : e < 0 ? Ut.Reverse : Ut.Idle;
}
var z3 = class {
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
}, B3 = new z3((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), H3 = 10, zd = class extends yt {
  constructor(t, n) {
    super(t, n);
    const r = t.registry.plugins.get(Sa);
    if (!r)
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = Zt(() => {
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
            () => B3.schedule(
              () => r.scroll(void 0, l)
            ),
            H3
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
zd.configure = xa(zd);
var Fw = zd, Wp = {
  capture: !0,
  passive: !0
}, xs, G3 = class extends ya {
  constructor(e) {
    super(e), Ue(this, xs), this.handleScroll = () => {
      We(this, xs) == null && Et(this, xs, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), Et(this, xs, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = Zt(() => {
      var n, r, o;
      if (t.status.dragging) {
        const a = (o = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? o : document;
        return a.addEventListener("scroll", this.handleScroll, Wp), () => {
          a.removeEventListener(
            "scroll",
            this.handleScroll,
            Wp
          );
        };
      }
    });
  }
};
xs = /* @__PURE__ */ new WeakMap();
var Y3 = "* { user-select: none !important; -webkit-user-select: none !important; }", K3 = class extends yt {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(
      Kc
    ), n = t == null ? void 0 : t.register(Y3);
    if (this.destroy = Zt(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized)
        return Rl(), document.addEventListener("selectionchange", Rl, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", Rl, {
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
function Rl() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var ys = Object.freeze({
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
}), io, Hi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, Ue(this, io, []), this.listeners = new iw(), this.handleSourceKeyDown = (r, o, s) => {
      if (this.disabled || r.defaultPrevented || !Dr(r.target) || o.disabled)
        return;
      const {
        keyboardCodes: a = ys.keyboardCodes,
        preventActivation: i = ys.preventActivation
      } = s ?? {};
      a.start.includes(r.code) && this.manager.dragOperation.status.idle && (i != null && i(r, o) || this.handleStart(r, o, s));
    };
  }
  bind(t, n = this.options) {
    return Zt(() => {
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
    t.preventDefault(), t.stopImmediatePropagation(), pw(o);
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
    We(this, io).push(...c);
  }
  handleKeyDown(t, n, r) {
    const { keyboardCodes: o = ys.keyboardCodes } = r ?? {};
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
    }, c = (o = (r = this.options) == null ? void 0 : r.offset) != null ? o : ys.offset;
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
    const t = this.manager.registry.plugins.get(Fw);
    (t == null ? void 0 : t.disabled) === !1 && (t.disable(), We(this, io).push(() => {
      t.enable();
    }));
  }
  cleanup() {
    We(this, io).forEach((t) => t()), Et(this, io, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
io = /* @__PURE__ */ new WeakMap();
Hi.configure = xa(Hi);
Hi.defaults = ys;
var Vw = Hi;
function Qr(e, t) {
  return t.includes(e.code);
}
var _r, U3 = class extends H0 {
  constructor() {
    super(...arguments), Ue(this, _r);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        Et(this, _r, Eo(e));
        break;
      case "pointermove":
        if (!We(this, _r)) return;
        const { x: t, y: n } = Eo(e), r = {
          x: t - We(this, _r).x,
          y: n - We(this, _r).y
        }, { tolerance: o } = this.options;
        if (o && kd(r, o)) {
          this.abort();
          return;
        }
        kd(r, this.options.value) && this.activate(e);
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    Et(this, _r, void 0);
  }
};
_r = /* @__PURE__ */ new WeakMap();
var co, kr, q3 = class extends H0 {
  constructor() {
    super(...arguments), Ue(this, co), Ue(this, kr);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        Et(this, kr, Eo(e)), Et(this, co, setTimeout(
          () => this.activate(e),
          this.options.value
        ));
        break;
      case "pointermove":
        if (!We(this, kr)) return;
        const { x: t, y: n } = Eo(e), r = {
          x: t - We(this, kr).x,
          y: n - We(this, kr).y
        };
        kd(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    We(this, co) && (clearTimeout(We(this, co)), Et(this, kr, void 0), Et(this, co, void 0));
  }
};
co = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakMap();
var ho = class {
};
ho.Delay = q3;
ho.Distance = U3;
var Bd = Object.freeze({
  activationConstraints(e, t) {
    var n;
    const { pointerType: r, target: o } = e;
    if (!(r === "mouse" && Dr(o) && (t.handle === o || (n = t.handle) != null && n.contains(o))))
      return r === "touch" ? [
        new ho.Delay({ value: 250, tolerance: 5 })
      ] : o3(o) && !e.defaultPrevented ? [
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
    const o = kI(r);
    return o === t.element ? !1 : !!o;
  }
}), lo, Gi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, Ue(this, lo, /* @__PURE__ */ new Set()), this.listeners = new iw(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, this.handleMove = () => {
      const { event: r, coordinates: o } = this.latest;
      !r || !o || this.manager.actions.move({ event: r, to: o });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: o = Bd.activationConstraints } = r ?? {};
    return typeof o == "function" ? o(t, n) : o;
  }
  bind(t, n = this.options) {
    return Zt(() => {
      var o;
      const s = new AbortController(), { signal: a } = s, i = (l) => {
        r3(l) && this.handlePointerDown(l, t, n);
      };
      let c = [(o = t.handle) != null ? o : t.element];
      n != null && n.activatorElements && (Array.isArray(n.activatorElements) ? c = n.activatorElements : c = n.activatorElements(t));
      for (const l of c)
        l && (Q3(l.ownerDocument.defaultView), l.addEventListener("pointerdown", i, { signal: a }));
      return () => s.abort();
    });
  }
  handlePointerDown(t, n, r) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !Dr(t.target) || n.disabled || X3(t) || !this.manager.dragOperation.status.idle)
      return;
    const { preventActivation: o = Bd.preventActivation } = r ?? {};
    if (o != null && o(t, n))
      return;
    const { target: s } = t, a = cr(s) && s.draggable && s.getAttribute("draggable") === "true", i = Mo(n.element), { x: c, y: l } = Eo(t);
    this.initialCoordinates = {
      x: c * i.scaleX + i.x,
      y: l * i.scaleY + i.y
    };
    const f = this.activationConstraints(t, n, r);
    t.sensor = this;
    const u = new vI(
      f,
      (m) => this.handleStart(n, m)
    );
    u.signal.onabort = () => this.handleCancel(t), u.onEvent(t), this.controller = u;
    const h = Pd(), p = this.listeners.bind(h, [
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
    ]), g = () => {
      p(), this.initialCoordinates = void 0;
    };
    We(this, lo).add(g);
  }
  handlePointerMove(t, n) {
    var r, o;
    if (((r = this.controller) == null ? void 0 : r.activated) === !1) {
      (o = this.controller) == null || o.onEvent(t);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const s = Eo(t), a = Mo(n.element);
      s.x = s.x * a.scaleX + a.x, s.y = s.y * a.scaleY + a.y, t.preventDefault(), t.stopPropagation(), this.latest.event = t, this.latest.coordinates = s, Li.schedule(this.handleMove);
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
    We(this, lo).add(l);
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
    }, We(this, lo).forEach((n) => n()), We(this, lo).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
lo = /* @__PURE__ */ new WeakMap();
Gi.configure = xa(Gi);
Gi.defaults = Bd;
var zw = Gi;
function X3(e) {
  return "sensor" in e;
}
function Xa(e) {
  e.preventDefault();
}
function Z3() {
}
var Lp = /* @__PURE__ */ new WeakSet();
function Q3(e) {
  !e || Lp.has(e) || (e.addEventListener("touchmove", Z3, {
    capture: !1,
    passive: !1
  }), Lp.add(e));
}
var yo = {
  modifiers: [],
  plugins: [S3, Fw, k3, Iw, K3],
  sensors: [zw, Vw]
}, Bw = class extends xI {
  constructor(e = {}) {
    const t = sn(e.plugins, yo.plugins), n = sn(e.sensors, yo.sensors), r = sn(
      e.modifiers,
      yo.modifiers
    );
    super(Rf(Us({}, e), {
      plugins: [G3, Sa, Kc, ...t],
      sensors: n,
      modifiers: r
    }));
  }
}, Hw, Gw, Hd, Jn, Wf, Lf, Uc = class extends (Hd = En, Gw = [Ne], Hw = [Ne], Hd) {
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
              const p = h instanceof ko ? h : l.registry.register(h.plugin), g = h instanceof ko ? void 0 : h.options;
              return p.bind(this, g);
            });
            return function() {
              u.forEach((p) => p());
            };
          }
        ]
      }, a),
      t
    ), Ue(this, Wf, nt(Jn, 8, this)), nt(Jn, 11, this), Ue(this, Lf, nt(Jn, 12, this)), nt(Jn, 15, this), this.element = r, this.handle = s;
  }
};
Jn = Uo(Hd);
Wf = /* @__PURE__ */ new WeakMap();
Lf = /* @__PURE__ */ new WeakMap();
Qt(Jn, 4, "handle", Gw, Uc, Wf);
Qt(Jn, 4, "element", Hw, Uc, Lf);
Br(Jn, Uc);
var Yw, Kw, Gd, er, Ff, Ol, Uw, qw, Os, Vf, zf = class extends (Gd = Nn, Kw = [Ne], Yw = [Ne], Gd) {
  constructor(e, t) {
    var n = e, { element: r, effects: o = () => [] } = n, s = yw(n, ["element", "effects"]);
    const { collisionDetector: a = vw } = s, i = (l) => {
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
      Rf(Us({}, s), {
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
              const f = new jI(
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
    ), Ue(this, Os), Ue(this, Ff, nt(er, 8, this)), nt(er, 11, this), Ue(this, Vf, nt(er, 12, this)), nt(er, 15, this), this.element = r, this.refreshShape = () => i();
  }
  set element(e) {
    Et(this, Os, e, qw);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : We(this, Os, Uw);
  }
};
er = Uo(Gd);
Ff = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakSet();
Vf = /* @__PURE__ */ new WeakMap();
Ol = Qt(er, 20, "#element", Kw, Os, Ff), Uw = Ol.get, qw = Ol.set;
Qt(er, 4, "proxy", Yw, zf, Vf);
Br(er, zf);
function J3(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Ds(e) {
  var t;
  if (e != null)
    return J3(e) ? (t = e.current) != null ? t : void 0 : e;
}
var ej = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = ej ? Qd : on;
function tj() {
  const e = tt(0)[1];
  return _e(() => {
    e((t) => t + 1);
  }, [e]);
}
function nj(e, t) {
  const n = it(/* @__PURE__ */ new Map()), r = tj();
  return qo(() => {
    if (!e) {
      n.current.clear();
      return;
    }
    return Zt(() => {
      var o;
      let s = !1, a = !1;
      for (const i of n.current) {
        const [c] = i, l = Ee(() => i[1]), f = e[c];
        l !== f && (s = !0, n.current.set(c, f), a = (o = t == null ? void 0 : t(c, l, f)) != null ? o : !1);
      }
      s && (a ? queueMicrotask(() => Vl(r)) : r());
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
function rj(e, t) {
  e();
}
function Jr(e) {
  const t = it(e);
  return qo(() => {
    t.current = e;
  }, [e]), t;
}
function gt(e, t, n = on, r = Object.is) {
  const o = it(e);
  n(() => {
    const s = o.current;
    r(e, s) || (o.current = e, t(e, s));
  }, [t, e]);
}
function Dl(e, t) {
  const n = it(Ds(e));
  qo(() => {
    const r = Ds(e);
    r !== n.current && (n.current = r, t(r));
  });
}
var Fp = Object.getOwnPropertySymbols, oj = Object.prototype.hasOwnProperty, sj = Object.prototype.propertyIsEnumerable, aj = (e, t) => {
  var n = {};
  for (var r in e)
    oj.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fp)
    for (var r of Fp(e))
      t.indexOf(r) < 0 && sj.call(e, r) && (n[r] = e[r]);
  return n;
}, ij = new Bw(), Xw = Qs(
  ij
), cj = K1(
  Qp(({ children: e }, t) => {
    const [n, r] = tt(0), o = it(null), s = it(null), a = po(
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
          })), U1(() => {
            i(), r((c) => c + 1);
          });
        }
      }),
      []
    );
    return qo(() => {
      var i;
      (i = s.current) == null || i.call(s), o.current = null;
    }, [e, n]), q1(t, () => a), null;
  })
), Il = [void 0, vn];
function Zw(e) {
  var t = e, {
    children: n,
    onCollision: r,
    onBeforeDragStart: o,
    onDragStart: s,
    onDragMove: a,
    onDragOver: i,
    onDragEnd: c
  } = t, l = aj(t, [
    "children",
    "onCollision",
    "onBeforeDragStart",
    "onDragStart",
    "onDragMove",
    "onDragOver",
    "onDragEnd"
  ]);
  const f = it(null), {
    plugins: u,
    modifiers: h,
    sensors: p
  } = l, g = sn(u, yo.plugins), m = sn(p, yo.sensors), y = sn(
    h,
    yo.modifiers
  ), C = Jr(o), b = Jr(s), x = Jr(i), S = Jr(a), w = Jr(c), E = Jr(r), k = lj(() => {
    var N;
    return (N = l.manager) != null ? N : new Bw(l);
  });
  return on(() => {
    if (!f.current) throw new Error("Renderer not found");
    const { renderer: N, trackRendering: P } = f.current, { monitor: T } = k;
    k.renderer = N;
    const j = [
      T.addEventListener("beforedragstart", (O) => {
        const $ = C.current;
        $ && P(() => $(O, k));
      }),
      T.addEventListener(
        "dragstart",
        (O) => {
          var $;
          return ($ = b.current) == null ? void 0 : $.call(b, O, k);
        }
      ),
      T.addEventListener("dragover", (O) => {
        const $ = x.current;
        $ && P(() => $(O, k));
      }),
      T.addEventListener("dragmove", (O) => {
        const $ = S.current;
        $ && P(() => $(O, k));
      }),
      T.addEventListener("dragend", (O) => {
        const $ = w.current;
        $ && P(() => $(O, k));
      }),
      T.addEventListener(
        "collision",
        (O) => {
          var $;
          return ($ = E.current) == null ? void 0 : $.call(E, O, k);
        }
      )
    ];
    return () => j.forEach((O) => O());
  }, [k]), gt(
    g,
    () => k && (k.plugins = g),
    ...Il
  ), gt(
    m,
    () => k && (k.sensors = m),
    ...Il
  ), gt(
    y,
    () => k && (k.modifiers = y),
    ...Il
  ), /* @__PURE__ */ d.jsxs(Xw.Provider, { value: k, children: [
    /* @__PURE__ */ d.jsx(cj, { ref: f, children: n }),
    n
  ] });
}
function lj(e) {
  const t = it(null);
  return t.current || (t.current = e()), Y1(() => () => {
    var n;
    return (n = t.current) == null ? void 0 : n.destroy();
  }, []), t.current;
}
function dj() {
  return Is(Xw);
}
function uj(e) {
  var t;
  const n = (t = dj()) != null ? t : void 0, [r] = tt(() => e(n));
  return r.manager !== n && (r.manager = n), qo(r.register, [n, r]), r;
}
var fj = Object.create, Qw = Object.defineProperty, hj = Object.getOwnPropertyDescriptor, Jw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), qc = (e) => {
  throw TypeError(e);
}, pj = (e, t, n) => t in e ? Qw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mj = (e) => {
  var t;
  return [, , , fj((t = e == null ? void 0 : e[Jw("metadata")]) != null ? t : null)];
}, e1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], t1 = (e) => e !== void 0 && typeof e != "function" ? qc("Function expected") : e, vj = (e, t, n, r, o) => ({ kind: e1[e], name: t, metadata: r, addInitializer: (s) => n._ ? qc("Already initialized") : o.push(t1(s || null)) }), gj = (e, t) => pj(t, Jw("metadata"), e[3]), bj = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, n1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, g = e1[f + 5], m = e[p] || (e[p] = []), y = (o = o.prototype, hj(o, n)), C = r.length - 1; C >= 0; C--)
    c = vj(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(y[g], c), i._ = 1, t1(a) && (y[g] = a);
  return y && Qw(o, n, y), o;
}, r1 = (e, t, n) => t.has(e) || qc("Cannot " + n), xj = (e, t, n) => (r1(e, t, "read from private field"), t.get(e)), yj = (e, t, n) => t.has(e) ? qc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), wj = (e, t, n, r) => (r1(e, t, "write to private field"), t.set(e, n), n), rs = class Yd {
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
    return new Yd(t.x - n.x, t.y - n.y);
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
    return new Yd(t, n);
  }
}, o1, s1, Kd, gi, _a, Bf = class extends (Kd = Vr, s1 = [Ke], o1 = [Ke], Kd) {
  constructor(e) {
    const t = rs.from(e);
    super(t, (n, r) => rs.equals(n, r)), bj(_a, 5, this), yj(this, gi, 0), this.velocity = { x: 0, y: 0 };
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
    }, o = Date.now(), s = o - xj(this, gi), a = (i) => Math.round(i / s * 100);
    He(() => {
      wj(this, gi, o), this.velocity = {
        x: a(r.x),
        y: a(r.y)
      }, super.current = n;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(rs.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
_a = mj(Kd);
gi = /* @__PURE__ */ new WeakMap();
n1(_a, 2, "delta", s1, Bf);
n1(_a, 2, "direction", o1, Bf);
gj(_a, Bf);
var a1 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(a1 || {});
Object.values(a1);
var Cj = Object.create, i1 = Object.defineProperty, Sj = Object.defineProperties, _j = Object.getOwnPropertyDescriptor, kj = Object.getOwnPropertyDescriptors, Yi = Object.getOwnPropertySymbols, c1 = Object.prototype.hasOwnProperty, l1 = Object.prototype.propertyIsEnumerable, Ej = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ka = (e) => {
  throw TypeError(e);
}, Ud = (e, t, n) => t in e ? i1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jl = (e, t) => {
  for (var n in t || (t = {}))
    c1.call(t, n) && Ud(e, n, t[n]);
  if (Yi)
    for (var n of Yi(t))
      l1.call(t, n) && Ud(e, n, t[n]);
  return e;
}, Tl = (e, t) => Sj(e, kj(t)), Nj = (e, t) => {
  var n = {};
  for (var r in e)
    c1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Yi)
    for (var r of Yi(e))
      t.indexOf(r) < 0 && l1.call(e, r) && (n[r] = e[r]);
  return n;
}, Mj = (e) => {
  var t;
  return [, , , Cj((t = void 0) != null ? t : null)];
}, d1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ws = (e) => e !== void 0 && typeof e != "function" ? ka("Function expected") : e, Pj = (e, t, n, r, o) => ({ kind: d1[e], name: t, metadata: r, addInitializer: (s) => n._ ? ka("Already initialized") : o.push(ws(s || null)) }), Aj = (e, t) => Ud(t, Ej("metadata"), e[3]), Za = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, u1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f, u = t & 7, h = !1, p = !1, g = e.length + 1, m = d1[u + 5], y = e[g - 1] = [], C = e[g] || (e[g] = []), b = (o = o.prototype, _j({ get [n]() {
    return Cs(this, s);
  }, set [n](S) {
    return Er(this, s, S);
  } }, n)), x = r.length - 1; x >= 0; x--)
    l = Pj(u, n, c = {}, e[3], C), l.static = h, l.private = p, f = l.access = { has: (S) => n in S }, f.get = (S) => S[n], f.set = (S, w) => S[n] = w, i = (0, r[x])({ get: b.get, set: b.set }, l), c._ = 1, i === void 0 ? ws(i) && (b[m] = i) : typeof i != "object" || i === null ? ka("Object expected") : (ws(a = i.get) && (b.get = a), ws(a = i.set) && (b.set = a), ws(a = i.init) && y.unshift(a));
  return b && i1(o, n, b), o;
}, f1 = (e, t, n) => t.has(e) || ka("Cannot " + n), Cs = (e, t, n) => (f1(e, t, "read from private field"), t.get(e)), os = (e, t, n) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Er = (e, t, n, r) => (f1(e, t, "write to private field"), t.set(e, n), n);
function tr(e) {
  return e instanceof Yf || e instanceof v1;
}
var Qa = 10, Rj = class extends yt {
  constructor(e) {
    super(e);
    const t = Zt(() => {
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
          const f = Oj(l), { source: u, target: h } = s, { center: p } = s.shape.current, g = [], m = [];
          He(() => {
            for (const w of c.droppables) {
              const { id: E } = w;
              if (!w.accepts(u) || E === (h == null ? void 0 : h.id) && tr(w) || !w.element)
                continue;
              let k = w.shape;
              const N = new Sn(w.element, {
                getBoundingClientRect: (P) => Gs(P, void 0, 0.2)
              });
              !N.height || !N.width || (f == "down" && p.y + Qa < N.center.y || f == "up" && p.y - Qa > N.center.y || f == "left" && p.x - Qa > N.center.x || f == "right" && p.x + Qa < N.center.x) && (g.push(w), w.shape = N, m.push(() => w.shape = k));
            }
          }), r.preventDefault(), i.disable();
          const y = i.computeCollisions(
            g,
            c3
          );
          He(() => m.forEach((w) => w()));
          const [C] = y;
          if (!C)
            return;
          const { id: b } = C, { index: x, group: S } = u.sortable;
          a.setDropTarget(b).then(() => {
            const { source: w, target: E, shape: k } = s;
            if (!w || !tr(w) || !k)
              return;
            const {
              index: N,
              group: P,
              target: T
            } = w.sortable, j = x !== N || S !== P, O = j ? T : E == null ? void 0 : E.element;
            if (!O) return;
            pw(O);
            const $ = new Sn(O);
            if (!$)
              return;
            const F = kn.delta(
              $,
              kn.from(k.current.boundingRectangle),
              w.alignment
            );
            a.move({
              by: F
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
function Oj(e) {
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
var Dj = Object.defineProperty, Ij = Object.defineProperties, jj = Object.getOwnPropertyDescriptors, Vp = Object.getOwnPropertySymbols, Tj = Object.prototype.hasOwnProperty, $j = Object.prototype.propertyIsEnumerable, zp = (e, t, n) => t in e ? Dj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, eo = (e, t) => {
  for (var n in t || (t = {}))
    Tj.call(t, n) && zp(e, n, t[n]);
  if (Vp)
    for (var n of Vp(t))
      $j.call(t, n) && zp(e, n, t[n]);
  return e;
}, to = (e, t) => Ij(e, jj(t));
function Wj(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ja(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function $l(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function Lj(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (x, S) => x === S || x !== null && typeof x == "object" && "id" in x && x.id === S;
  if (Array.isArray(e)) {
    const x = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (x === -1 || S === -1) {
      if ($l(s)) {
        const w = s.initialIndex, E = s.index;
        return w === E || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, E);
      }
      return e;
    }
    if (!i && "index" in s && typeof s.index == "number") {
      const w = s.index;
      if (w !== x)
        return n(e, x, w);
    }
    return n(e, x, S);
  }
  const l = Object.entries(e);
  let f = -1, u, h = -1, p;
  for (const [x, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (u = x)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = x)), f !== -1 && h !== -1)
      break;
  if (f === -1 && $l(s)) {
    const x = s.initialGroup == null ? void 0 : Ja(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ja(e, s.group), E = s.index;
    if (x == null || w == null || x === w && S === E)
      return "preventDefault" in t && t.preventDefault(), e;
    if (x === w)
      return to(eo({}, e), {
        [x]: n(e[x], S, E)
      });
    const k = e[x][S];
    return to(eo({}, e), {
      [x]: [
        ...e[x].slice(0, S),
        ...e[x].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, E),
        k,
        ...e[w].slice(E)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: g } = s.manager, m = (o = (r = g.shape) == null ? void 0 : r.current.center) != null ? o : g.position.current;
  if (p == null) {
    const x = Ja(e, a.id);
    if (x != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[x].length : 0;
      p = x, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && $l(s)) {
      const x = s.group == null ? void 0 : Ja(e, s.group), S = s.group != null && x !== u, w = s.index !== f;
      if (S || w) {
        const E = s.group == null ? u : x;
        if (E != null) {
          if (u === E)
            return to(eo({}, e), {
              [u]: n(
                e[u],
                f,
                s.index
              )
            });
          const k = e[u][f];
          return to(eo({}, e), {
            [u]: [
              ...e[u].slice(0, f),
              ...e[u].slice(f + 1)
            ],
            [E]: [
              ...e[E].slice(0, s.index),
              k,
              ...e[E].slice(s.index)
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
  const C = a.shape && Math.round(m.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[u][f];
  return to(eo({}, e), {
    [u]: [
      ...e[u].slice(0, f),
      ...e[u].slice(f + 1)
    ],
    [p]: [
      ...e[p].slice(0, h + C),
      b,
      ...e[p].slice(h + C)
    ]
  });
}
function Fj(e, t) {
  return Lj(e, t, Wj);
}
function Bp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e)
    for (const r of n)
      t.set(r.id, r.index);
  return t;
}
function Hp(e, t, n) {
  var r;
  for (const [o, s] of t)
    for (const a of s) {
      const i = e.get(a.id);
      if (a.index !== i || a.group !== o || !((r = n.get(o)) != null && r.has(a)))
        return !0;
    }
  return !1;
}
var Gp = "__default__", Vj = class extends yt {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const o of e.registry.droppables)
        if (o instanceof Yf) {
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
        const c = t(), l = Bp(c), f = a.sortable.group === i.sortable.group, u = c.get(a.sortable.group), h = f ? u : c.get(i.sortable.group);
        !u || !h || queueMicrotask(() => {
          r.defaultPrevented || o.renderer.rendering.then(() => {
            var p, g;
            const m = t();
            if (Hp(l, c, m))
              return;
            const y = a.sortable.element, C = i.sortable.element;
            if (!C || !y || !f && i.id === a.sortable.group)
              return;
            const b = ei(u), x = f ? b : ei(h), S = (p = a.sortable.group) != null ? p : Gp, w = (g = i.sortable.group) != null ? g : Gp, E = {
              [S]: b,
              [w]: x
            }, k = Fj(E, r);
            if (E === k) return;
            const N = k[w].indexOf(a.sortable), P = k[w].indexOf(i.sortable);
            o.collisionObserver.disable(), Yp(y, N, C, P), He(() => {
              for (const [T, j] of k[S].entries())
                j.index = T;
              if (!f)
                for (const [T, j] of k[w].entries())
                  j.group = i.sortable.group, j.index = T;
            }), o.actions.setDropTarget(a.id).then(() => o.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (r, o) => {
        if (!r.canceled)
          return;
        const { dragOperation: s } = o, { source: a } = s;
        tr(a) && (a.sortable.initialIndex === a.sortable.index && a.sortable.initialGroup === a.sortable.group || queueMicrotask(() => {
          const i = t(), c = Bp(i), l = i.get(
            a.sortable.initialGroup
          );
          l && o.renderer.rendering.then(() => {
            const f = t();
            if (Hp(c, i, f))
              return;
            const u = ei(l), h = ei(
              l,
              Bj
            ), p = a.sortable.element, g = h.indexOf(a.sortable), m = u[g], y = m == null ? void 0 : m.element;
            !m || !y || !p || (Yp(p, m.index, y, a.index), He(() => {
              for (const C of i.values()) {
                const b = Array.from(C).values();
                for (const x of b)
                  x.index = x.initialIndex, x.group = x.initialGroup;
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
function Yp(e, t, n, r) {
  const o = r < t ? "afterend" : "beforebegin";
  n.insertAdjacentElement(o, e);
}
function zj(e, t) {
  return e.index - t.index;
}
function Bj(e, t) {
  return e.initialIndex - t.initialIndex;
}
function ei(e, t = zj) {
  return Array.from(e).sort(t);
}
var Kp = [
  Rj,
  Vj
], h1 = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
};
function Up(e) {
  var t, n;
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : {
    draggable: (t = e == null ? void 0 : e.draggable) != null ? t : !1,
    droppable: (n = e == null ? void 0 : e.droppable) != null ? n : !1
  };
}
var ti = new H5(), p1, m1, nr, Hf, Ss, _s, Gf, uo;
m1 = [Ne], p1 = [Ne];
var Xc = class {
  constructor(e, t) {
    os(this, Hf, Za(nr, 8, this)), Za(nr, 11, this), os(this, Ss), os(this, _s), os(this, Gf, Za(nr, 12, this)), Za(nr, 15, this), os(this, uo), this.register = () => (He(() => {
      var g, m;
      (g = this.manager) == null || g.registry.register(this.droppable), (m = this.manager) == null || m.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      He(() => {
        var g, m;
        (g = this.manager) == null || g.registry.unregister(this.droppable), (m = this.manager) == null || m.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      He(() => {
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
      transition: l = h1,
      plugins: f
    } = n, u = Nj(n, [
      "effects",
      "disabled",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    const h = sn(f, Kp), p = Up(o);
    this.droppable = new Yf(
      Tl(jl({}, u), { disabled: p.droppable }),
      t,
      this
    ), this.draggable = new v1(
      Tl(jl({}, u), {
        disabled: p.draggable,
        plugins: h,
        effects: () => [
          () => {
            var g, m, y;
            const C = (g = this.manager) == null ? void 0 : g.dragOperation.status;
            C != null && C.initializing && this.id === ((y = (m = this.manager) == null ? void 0 : m.dragOperation.source) == null ? void 0 : y.id) && ti.clear(this.manager), C != null && C.dragging && ti.set(
              this.manager,
              this.id,
              Ee(() => ({
                initialIndex: this.index,
                initialGroup: this.group
              }))
            );
          },
          () => {
            const { index: g, group: m, manager: y } = this, C = Cs(this, _s), b = Cs(this, Ss);
            (g !== C || m !== b) && (Er(this, _s, g), Er(this, Ss, m), this.animate());
          },
          () => {
            var g, m;
            const { target: y } = this, { isDragSource: C } = this.draggable;
            ((m = (g = this.draggable.pluginConfig(Iw)) == null ? void 0 : g.feedback) != null ? m : "default") === "move" && C && (this.droppable.disabled = !y);
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
        }, { translate: i } = An(o), c = Rp(o, i, !1), l = Rp(o, i);
        if (a.x || a.y) {
          const f = Mf(Vt(o)) ? Tl(jl({}, t), { duration: 0 }) : t;
          mw({
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
    He(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    He(() => {
      const t = Cs(this, uo), n = this.droppable.element, r = this.draggable.element;
      (!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), Er(this, uo, e);
    });
  }
  get element() {
    var e, t;
    const n = Cs(this, uo);
    if (n)
      return (t = (e = Ad.get(n)) != null ? e : n) != null ? t : this.droppable.element;
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
    this.draggable.plugins = sn(e, Kp);
  }
  set disabled(e) {
    const t = Up(e);
    He(() => {
      this.droppable.disabled = t.droppable, this.draggable.disabled = t.draggable;
    });
  }
  set data(e) {
    He(() => {
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
    this.droppable.collisionDetector = e ?? vw;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    He(() => {
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
Hf = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
Gf = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
u1(nr, 4, "index", m1, Xc, Hf);
u1(nr, 4, "group", p1, Xc, Gf);
Aj(nr, Xc);
var v1 = class extends Uc {
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
}, Yf = class extends zf {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
}, Hj = Object.defineProperty, Gj = Object.defineProperties, Yj = Object.getOwnPropertyDescriptors, qp = Object.getOwnPropertySymbols, Kj = Object.prototype.hasOwnProperty, Uj = Object.prototype.propertyIsEnumerable, Xp = (e, t, n) => t in e ? Hj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wl = (e, t) => {
  for (var n in t || (t = {}))
    Kj.call(t, n) && Xp(e, n, t[n]);
  if (qp)
    for (var n of qp(t))
      Uj.call(t, n) && Xp(e, n, t[n]);
  return e;
}, qj = (e, t) => Gj(e, Yj(t));
function g1(e) {
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
    type: g,
    plugins: m
  } = e, y = Wl(Wl({}, h1), e.transition), C = uj((x) => new Xc(
    qj(Wl({}, e), {
      transition: y,
      register: !1,
      handle: Ds(i),
      element: Ds(a),
      target: Ds(p)
    }),
    x
  )), b = nj(C, Xj);
  return gt(o, () => C.id = o), qo(() => {
    He(() => {
      C.group = l, C.index = c;
    });
  }, [C, l, c]), gt(g, () => C.type = g), gt(
    t,
    () => C.accept = t,
    void 0,
    vn
  ), gt(s, () => s && (C.data = s)), gt(
    c,
    () => {
      var x;
      (x = C.manager) != null && x.dragOperation.status.idle && (y != null && y.idle) && C.refreshShape();
    },
    rj
  ), Dl(i, (x) => C.handle = x), Dl(a, (x) => C.element = x), Dl(p, (x) => C.target = x), gt(
    f,
    () => C.disabled = f ?? !1,
    void 0,
    vn
  ), gt(
    h,
    () => C.sensors = h,
    void 0,
    vn
  ), gt(
    n,
    () => C.collisionDetector = n
  ), gt(
    r,
    () => C.collisionPriority = r
  ), gt(
    m,
    () => C.plugins = m,
    void 0,
    vn
  ), gt(
    y,
    () => C.transition = y,
    void 0,
    vn
  ), gt(
    u,
    () => C.modifiers = u,
    void 0,
    vn
  ), gt(
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
    handleRef: _e(
      (x) => {
        C.handle = x ?? void 0;
      },
      [C]
    ),
    ref: _e(
      (x) => {
        var S, w;
        !x && ((S = C.element) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.element = x ?? void 0);
      },
      [C]
    ),
    sourceRef: _e(
      (x) => {
        var S, w;
        !x && ((S = C.source) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.source = x ?? void 0);
      },
      [C]
    ),
    targetRef: _e(
      (x) => {
        var S, w;
        !x && ((S = C.target) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.target = x ?? void 0);
      },
      [C]
    )
  };
}
function Xj(e, t, n) {
  return !!(e === "isDragSource" && !n && t);
}
const b1 = _.createContext(null), Zj = () => {
  const e = _.useContext(b1);
  if (!e)
    throw new Error("Sortable.Item must be rendered inside Sortable.Container");
  return e;
}, Qj = (e) => px(e, "Sortable.Container");
function Jj({
  value: e,
  onValueChange: t,
  getItemValue: n = Qj,
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
    const u = (p) => f.get(p) ?? -1;
    return { getIndex: u, moveItem: (p, g) => {
      const m = u(p), y = m + g;
      if (m < 0 || y < 0 || y >= e.length)
        return;
      const C = [...e], [b] = C.splice(m, 1);
      b !== void 0 && (C.splice(y, 0, b), t(C));
    }, count: i.length, disabled: r };
  }, [i, e, t, r]), l = (f) => {
    const u = N5(i, f);
    if (u === i)
      return;
    const h = /* @__PURE__ */ new Map();
    e.forEach((g) => h.set(n(g), g));
    const p = [];
    u.forEach((g) => {
      const m = h.get(g);
      m !== void 0 && p.push(m);
    }), t(p);
  };
  return /* @__PURE__ */ d.jsx(b1.Provider, { value: c, children: /* @__PURE__ */ d.jsx(Zw, { onDragEnd: l, children: /* @__PURE__ */ d.jsx("ul", { ref: a, className: R("gap-xs flex flex-col", o), children: s }) }) });
}
const x1 = _.forwardRef(Jj);
x1.displayName = "Sortable.Container";
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
    } = Zj(), h = c(e), p = t || u, { ref: g, isDragging: m } = g1({
      id: e,
      index: h,
      disabled: p
    }), y = (o == null ? void 0 : o.moveUp) ?? "Move up", C = (o == null ? void 0 : o.moveDown) ?? "Move down";
    return /* @__PURE__ */ d.jsxs(
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
          /* @__PURE__ */ d.jsx(tm, { size: 16, className: "text-shape-light" }),
          /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex-1", children: a }),
          (n || r) && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex shrink-0 items-center", children: [
            n && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsx(Lt, { content: y, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
                Ve,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: u2,
                  "aria-label": y,
                  className: "h-6 w-6",
                  disabled: p || h <= 0,
                  onClick: () => l(e, -1)
                }
              ) }),
              /* @__PURE__ */ d.jsx(Lt, { content: C, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
                Ve,
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
const k7 = {
  Container: x1,
  Item: y1
}, eT = he(
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
), tT = he("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), E7 = ({
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
        eT({
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
        i && a && /* @__PURE__ */ d.jsx("div", { className: tT({ indicator: a }) }),
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
}, nT = _.forwardRef(
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
      w1,
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
                    Jp,
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
), w1 = _.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
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
w1.displayName = "RadialStepper";
nT.displayName = "Stepper";
const rT = v.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const s = n || (t ? `switch-${t}` : void 0), a = /* @__PURE__ */ d.jsx(
    ZN,
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
        QN,
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
rT.displayName = "Switch";
const qd = {
  loading: !1,
  loadingText: "ローディング中…"
}, C1 = _.createContext(
  qd
), S1 = () => _.useContext(C1), oT = _.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = qd.loading,
    loadingText: r = qd.loadingText,
    ...o
  }, s) => {
    const a = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ d.jsx(C1.Provider, { value: a, children: /* @__PURE__ */ d.jsx(
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
oT.displayName = "Table";
const sT = _.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: s } = S1(), a = t ?? s;
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
            Oc.Linear,
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
sT.displayName = "TableHeader";
const _1 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ d.jsx("td", { colSpan: 100, className: "p-0", children: /* @__PURE__ */ d.jsx(
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
_1.displayName = "TableCoverMessage";
const aT = _.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, s) => {
    const { loading: a, loadingText: i } = S1(), c = t ?? a, l = n ?? i;
    return /* @__PURE__ */ d.jsx("tbody", { ref: s, className: e, ...o, children: c ? /* @__PURE__ */ d.jsx(_1, { className: "text-body-secondary", children: l }) : r });
  }
);
aT.displayName = "TableBody";
const iT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "tfoot",
  {
    ref: n,
    className: R("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
iT.displayName = "TableFooter";
const cT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
cT.displayName = "TableRow";
const lT = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
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
lT.displayName = "TableHead";
const dT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
dT.displayName = "TableCell";
const uT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
  "caption",
  {
    ref: n,
    className: R("text-body-primary mt-md text-sm", e),
    ...t
  }
));
uT.displayName = "TableCaption";
const N7 = _.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
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
)), fT = _.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ d.jsx(
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
fT.displayName = "TableRowOverlay";
const hT = he("inline-flex", {
  variants: {
    size: {
      normal: "h-12 max-md:h-10",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), pT = he(
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
), mT = he(
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
function vT() {
  const [e, t] = _.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return _.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function gT(e) {
  const t = [];
  return _.Children.forEach(e, (n) => {
    _.isValidElement(n) && n.type === k1 && t.push(n);
  }), t;
}
const bT = _.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, s) => {
  const a = t ?? "normal", i = vT(), c = _.useRef(null), l = _.useRef(null), f = _.useRef(/* @__PURE__ */ new Map()), u = _.useRef(/* @__PURE__ */ new Map()), {
    hasOverflow: h,
    startShadow: p,
    endShadow: g
  } = Jx(c), m = _.useMemo(() => gT(n), [n]), [y, C] = _.useState(m.length), [b, x] = _.useState(!1), S = _.useCallback(() => {
    if (!i) {
      C(m.length), x(!0);
      return;
    }
    const j = c.current;
    if (!j) return;
    f.current.forEach((D, L) => {
      const Q = D.offsetWidth;
      Q > 0 && u.current.set(L, Q);
    });
    const O = j.clientWidth, $ = l.current, F = $ ? $.offsetWidth + 8 : 80;
    let B = 0;
    for (const D of m)
      B += u.current.get(D.props.value) ?? 0;
    if (B <= O) {
      C(m.length), x(!0);
      return;
    }
    let W = 0, Y = 0;
    for (const D of m) {
      const L = u.current.get(D.props.value) ?? 0;
      if (W + L + F <= O)
        W += L, Y++;
      else
        break;
    }
    C(Math.max(Y, 1)), x(!0);
  }, [m, i]);
  _.useEffect(() => {
    const j = c.current;
    if (!j) return;
    const O = new ResizeObserver(() => {
      S();
    });
    return O.observe(j), S(), () => O.disconnect();
  }, [S]);
  const w = o.value ?? o.defaultValue, E = m.map((j) => j.props.value).join(`
`);
  _.useEffect(() => {
    if (i) return;
    const j = c.current;
    if (!j) return;
    const O = () => {
      const F = j.querySelector('[role="tab"][data-state="active"]');
      if (!F) return;
      const B = j.getBoundingClientRect(), W = F.getBoundingClientRect();
      W.left < B.left ? j.scrollLeft += W.left - B.left : W.right > B.right && (j.scrollLeft += W.right - B.right);
    }, $ = new ResizeObserver(O);
    return f.current.forEach((F) => $.observe(F)), () => $.disconnect();
  }, [w, i, E]);
  const k = m.slice(y), N = k.length > 0, P = k.some(
    (j) => j.props.value === w
  ), T = r ?? ((j) => `${j} more`);
  return /* @__PURE__ */ d.jsxs(
    nM,
    {
      ref: s,
      className: R("relative w-full", e),
      ...o,
      children: [
        /* @__PURE__ */ d.jsxs(
          rM,
          {
            ref: c,
            className: R(
              hT({ size: a }),
              "w-full",
              !i && `overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden`
            ),
            role: "tablist",
            children: [
              m.map(
                (j, O) => _.cloneElement(j, {
                  key: j.props.value,
                  size: a,
                  ref: ($) => {
                    $ ? f.current.set(j.props.value, $) : f.current.delete(j.props.value);
                  },
                  className: R(
                    j.props.className,
                    b && O >= y && "hidden"
                  )
                })
              ),
              N && b && /* @__PURE__ */ d.jsx("div", { ref: l, className: "inline-flex shrink-0", children: /* @__PURE__ */ d.jsxs(Ac, { children: [
                /* @__PURE__ */ d.jsx(Rc, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    className: R(
                      mT({ size: a }),
                      P && "font-bold text-interactive-primary-default"
                    ),
                    children: [
                      /* @__PURE__ */ d.jsx(
                        em,
                        {
                          size: a === "small" ? 16 : 20,
                          className: "mr-xxs"
                        }
                      ),
                      T(k.length)
                    ]
                  }
                ) }),
                /* @__PURE__ */ d.jsx(Pc, { align: "end", size: "sm", children: k.map((j) => {
                  const { value: O, disabled: $, asChild: F, children: B } = j.props, W = R(
                    O === w && "font-bold text-interactive-primary-default"
                  );
                  return F && _.isValidElement(B) ? /* @__PURE__ */ d.jsx(
                    Mi,
                    {
                      disabled: $ ?? !1,
                      asChild: !0,
                      className: W,
                      children: B
                    },
                    O
                  ) : /* @__PURE__ */ d.jsx(
                    Mi,
                    {
                      disabled: $ ?? !1,
                      onSelect: () => {
                        o.onValueChange && o.onValueChange(O);
                      },
                      className: W,
                      children: B
                    },
                    O
                  );
                }) })
              ] }) })
            ]
          }
        ),
        !i && h && /* @__PURE__ */ d.jsx(ey, { startShadow: p, endShadow: g })
      ]
    }
  );
});
bT.displayName = "TabBar";
const k1 = _.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ d.jsx(
    oM,
    {
      ref: r,
      className: R(pT({ size: o }), e),
      ...n
    }
  );
});
k1.displayName = "Tab";
const xT = he(
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
), yT = _.forwardRef(
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
    } = o, [p, g] = tt(o.value);
    on(() => {
      g(o.value);
    }, [o.value]);
    const { compositionHandlers: m, guardKeyHandler: y } = jc(), C = (S) => {
      m.onCompositionStart(S), c == null || c(S);
    }, b = (S) => {
      m.onCompositionEnd(S), l == null || l(S);
    }, x = (S) => {
      if (n && S.target.value.length > n) {
        S.preventDefault();
        return;
      }
      g(S.target.value), f && f(S);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ d.jsx(
        "textarea",
        {
          ref: s,
          className: R(xT({ invalid: e }), t),
          ...h,
          value: p,
          onChange: x,
          onKeyDown: y(a),
          onKeyUp: y(i),
          onCompositionStart: C,
          onCompositionEnd: b
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
yT.displayName = "TextArea";
const M7 = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ d.jsx(
  _M,
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
            sm,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ d.jsx(
            sh,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ d.jsx(
            sh,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ d.jsx(ni, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          t && /* @__PURE__ */ d.jsx(
            kM,
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
          /* @__PURE__ */ d.jsx(EM, { children: /* @__PURE__ */ d.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(NM, { asChild: !0, altText: "Close", children: /* @__PURE__ */ d.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ d.jsx(tu, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), P7 = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ d.jsxs(CM, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ d.jsx(
    SM,
    {
      className: `gap-md bottom-0 right-0 m-0 z-toast fixed flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Xd = (e) => e.valueKey !== void 0, Zd = (e, t) => e.element.compareDocumentPosition(t.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, wT = (e) => {
  const t = /* @__PURE__ */ new Map();
  e.forEach((o) => {
    const s = t.get(o.parentKey);
    s ? s.push(o) : t.set(o.parentKey, [o]);
  });
  const n = /* @__PURE__ */ new Map(), r = (o) => {
    const s = [];
    (t.get(o.key) ?? []).forEach((i) => {
      i.kind === "group" ? s.push(...r(i)) : Xd(i) && s.push(i);
    });
    const a = s.length === 0 && Xd(o) ? [o] : s;
    return n.set(o.key, a), a;
  };
  return (t.get(null) ?? []).forEach((o) => {
    o.kind === "group" && r(o);
  }), n;
}, CT = (e, t) => {
  const n = e.filter((a) => !a.disabled), r = (a) => a.filter((i) => t(i.valueKey)).length, o = r(e);
  return { state: o === 0 ? "none" : o === e.length || n.length > 0 && r(n) === n.length ? "all" : "some", selectable: n.length > 0 };
}, ST = 600, _T = 2e3, kT = 300, Kf = "data-dnd-placeholder", Ro = (e, t) => Array.from(e.children).filter(
  (n) => n !== t && !n.hasAttribute(Kf)
), Uf = (e, t) => {
  let n = e.nextElementSibling;
  for (; n && (n === t || n.hasAttribute(Kf)); )
    n = n.nextElementSibling;
  return n;
}, E1 = (e, t, n) => {
  Array.from(t.values()).sort(Zd).forEach((o) => {
    const s = o.element.parentElement, a = e.registry.droppables.get(o.key);
    o !== n && s && a && tr(a) && (a.sortable.index = Ro(s).indexOf(o.element));
  });
}, N1 = (e, t, n, r, o) => {
  const { element: s } = n.node;
  !s.isConnected || o === s || s.parentElement === r && Uf(s, s) === o || (r.insertBefore(s, o), E1(e, t, n.node), window.requestAnimationFrame(() => {
    t.forEach((a) => {
      var i;
      (i = e.registry.droppables.get(a.key)) == null || i.refreshShape();
    });
  }));
}, ET = (e, t, n) => {
  let r;
  return e.forEach((o) => {
    var a;
    if (o === n) return;
    const s = (a = o.element.firstElementChild) == null ? void 0 : a.getBoundingClientRect();
    s && s.height > 0 && t.y >= s.top && t.y < s.bottom && t.x >= s.left && t.x < s.right && (r = o);
  }), r;
}, Ll = (e, t, n, r) => {
  var p, g;
  const o = ET(t, r, n.node), s = o == null ? void 0 : o.element.parentElement, a = (p = o == null ? void 0 : o.element.firstElementChild) == null ? void 0 : p.getBoundingClientRect();
  if (!o || !s || !a || a.height === 0 || (g = n.nodeOf(s.parentElement)) != null && g.disabled) return;
  const i = (r.y - a.top) / a.height, c = o.kind === "group" ? o.element.querySelector(":scope > ul") : null, l = o.element.getAttribute("aria-expanded"), f = n.node.element, u = (m, y) => N1(e, t, n, m, y), h = !o.disabled;
  c && l === "true" && h ? i < 0.5 ? u(s, o.element) : u(c, Ro(c, f)[0] ?? null) : c && l === null && h && i >= 0.25 && i <= 0.75 ? u(c, null) : i < 0.5 ? u(s, o.element) : u(s, Uf(o.element, f));
}, NT = (e, t) => {
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
  const i = Uf(s, s), c = NT(r, n), l = c.findIndex(
    (u) => u.list === a && u.before === i
  ), f = l === -1 ? void 0 : c[l + o];
  f && N1(e, t, n, f.list, f.before);
}, Zp = ({ node: e, originList: t, originIndex: n }) => {
  const r = Ro(t, e.element)[n] ?? null;
  t.insertBefore(e.element, r);
}, A7 = (e, t, n) => {
  const { getKey: r, getChildren: o, withChildren: s } = n, a = t.kind === "group";
  let i;
  const c = (h, p, g) => h.map((m, y) => y === p ? g : m), l = (h) => {
    for (let p = 0; p < h.length; p += 1) {
      const g = h[p], m = o(g);
      if (r(g) === t.key && m !== void 0 === a)
        return i = g, h.filter((y, C) => C !== p);
      if (m) {
        const y = l(m);
        if (y !== m)
          return c(h, p, s(g, y));
      }
    }
    return h;
  }, f = (h, p) => {
    const { parentKey: g, index: m } = t.to;
    if (g === null)
      return [...h.slice(0, m), p, ...h.slice(m)];
    for (let y = 0; y < h.length; y += 1) {
      const C = h[y], b = o(C);
      if (b === void 0) continue;
      const x = r(C) === g ? [...b.slice(0, m), p, ...b.slice(m)] : f(b, p);
      if (x !== void 0)
        return c(h, y, s(C, x));
    }
  }, u = l(e);
  return i === void 0 ? e : f(u, i) ?? e;
}, PT = (e, { getItemValue: t, getParentKey: n, getOrder: r }) => {
  const o = /* @__PURE__ */ new Set();
  e.forEach((a) => o.add(t(a)));
  const s = /* @__PURE__ */ new Map();
  return e.forEach((a) => {
    const i = n(a) ?? null, c = i !== null && o.has(i) ? i : null, l = s.get(c);
    l ? l.push(a) : s.set(c, [a]);
  }), r && s.forEach(
    (a) => a.sort((i, c) => r(i) - r(c))
  ), s;
}, M1 = (e) => px(e, "Tree"), P1 = _.createContext(null), A1 = _.createContext({
  parentKey: null,
  depth: 0,
  disabled: !1
}), qf = () => {
  const e = _.useContext(P1);
  if (!e)
    throw new Error("Tree.Group and Tree.Item must be rendered inside Tree");
  return e;
}, AT = (e) => Array.from(e.querySelectorAll('[role="treeitem"]')).filter(
  (t) => !t.closest("ul[hidden]") && !t.closest(`[${Kf}]`)
), R1 = (e) => {
  const t = e.currentTarget.closest('[role="treeitem"]');
  t instanceof HTMLElement && t.focus();
};
function RT({
  defaultCollapsed: e = !1,
  selectable: t = !1,
  selected: n,
  defaultSelected: r,
  onSelectedChange: o,
  getItemValue: s = M1,
  sortable: a = !1,
  onMove: i,
  size: c = "md",
  indentBase: l = "sm",
  indentStep: f = "xl",
  onExpandedCountChange: u,
  ariaLabels: h,
  onFocus: p,
  onKeyDown: g,
  className: m,
  style: y,
  children: C,
  ...b
}, x) {
  const S = _.useRef(/* @__PURE__ */ new Map()), [w, E] = _.useState(
    () => ({ nodes: S.current })
  ), k = _.useRef(/* @__PURE__ */ new WeakMap()), N = _.useCallback((H) => {
    const J = S.current, ee = k.current;
    return J.has(H.key) && console.warn(
      `Tree: duplicate node key "${String(H.key)}". Item values must resolve to unique keys across the whole tree.`
    ), J.set(H.key, H), ee.set(H.element, H), E({ nodes: J }), () => {
      J.get(H.key) === H && J.delete(H.key), ee.get(H.element) === H && ee.delete(H.element), E({ nodes: J });
    };
  }, []), [P, T] = _.useState(() => ({
    overrides: /* @__PURE__ */ new Map()
  })), j = _.useCallback(
    (H, J) => P.overrides.get(H) ?? P.all ?? J ?? !e,
    [P, e]
  ), O = _.useCallback((H, J) => {
    T((ee) => ({
      ...ee,
      overrides: new Map(ee.overrides).set(H, J)
    }));
  }, []);
  _.useImperativeHandle(
    x,
    () => ({
      collapseAll: () => T({ all: !1, overrides: /* @__PURE__ */ new Map() }),
      expandAll: () => T({ all: !0, overrides: /* @__PURE__ */ new Map() })
    }),
    []
  );
  const $ = _.useCallback(
    (H) => H ? k.current.get(H) : void 0,
    []
  ), F = _.useCallback(
    (H) => {
      const J = S.current;
      for (let ee = H.parentKey === null ? void 0 : J.get(H.parentKey); ee; ee = ee.parentKey === null ? void 0 : J.get(ee.parentKey))
        if (!j(ee.key, ee.defaultOpen)) return !1;
      return !0;
    },
    [j]
  ), B = _.useMemo(
    () => {
      var H;
      return ((H = Array.from(w.nodes.values()).filter((J) => J.parentKey === null).sort(Zd)[0]) == null ? void 0 : H.key) ?? null;
    },
    [w]
  ), W = _.useRef(null), Y = _.useRef(null), D = _.useCallback((H) => {
    const J = Y.current;
    J && J !== H && (J.tabIndex = -1), H && (H.tabIndex = 0), Y.current = H;
  }, []);
  _.useLayoutEffect(() => {
    const H = w.nodes, J = W.current, ee = J === null ? void 0 : H.get(J), G = ee && F(ee) ? ee : B === null ? void 0 : H.get(B);
    D((G == null ? void 0 : G.element) ?? null);
  }, [w, F, B, D]);
  const L = _.useRef(null);
  _.useEffect(() => {
    if (!u) return;
    let H = 0, J = 0;
    w.nodes.forEach((G) => {
      G.kind !== "group" || !G.hasChildren || (H += 1, j(G.key, G.defaultOpen) && (J += 1));
    });
    const ee = L.current;
    (ee == null ? void 0 : ee.expandableCount) === H && ee.openCount === J || (L.current = { expandableCount: H, openCount: J }, u({ expandableCount: H, openCount: J }));
  }, [u, w, j]);
  const Q = n !== void 0, [A, M] = _.useState(
    () => r ?? []
  ), V = n ?? A, z = _.useMemo(
    () => new Set(V.map((H) => s(H))),
    [V, s]
  ), K = _.useMemo(
    () => t ? wT(w.nodes) : /* @__PURE__ */ new Map(),
    [t, w]
  ), q = _.useCallback(
    (H, J) => {
      let ee;
      if (J) {
        const G = H.filter((ce) => !z.has(ce.valueKey)).sort(Zd);
        if (G.length === 0) return;
        ee = [...V, ...G.map((ce) => ce.getValue())];
      } else {
        const G = new Set(H.map((ce) => ce.valueKey));
        if (ee = V.filter(
          (ce) => !G.has(s(ce))
        ), ee.length === V.length) return;
      }
      Q || M(ee), o == null || o(ee);
    },
    [
      z,
      V,
      s,
      Q,
      o
    ]
  ), I = _.useCallback(
    (H) => z.has(H),
    [z]
  ), re = _.useCallback(
    (H) => CT(
      K.get(H) ?? [],
      (J) => z.has(J)
    ),
    [K, z]
  ), te = _.useCallback(
    (H) => {
      const J = S.current.get(H);
      J && Xd(J) && q([J], !z.has(J.valueKey));
    },
    [q, z]
  ), de = _.useCallback(
    (H, J) => q(
      (K.get(H) ?? []).filter((ee) => !ee.disabled),
      J
    ),
    [q, K]
  ), ge = (H) => {
    p == null || p(H);
    const J = $(
      H.target.closest('[role="treeitem"]')
    );
    J && (W.current = J.key, D(J.element));
  }, me = (H) => {
    var pe;
    if (g == null || g(H), H.defaultPrevented) return;
    const J = H.target, ee = J.getAttribute("role") === "treeitem" ? $(J) : void 0, G = ke.current;
    if (!ee || !G) return;
    const ce = AT(G), Z = ce.indexOf(J), se = ee.hasChildren && j(ee.key, ee.defaultOpen), fe = (ze) => {
      ze instanceof HTMLElement && ze.focus();
    };
    switch (H.key) {
      case "ArrowDown":
        fe(ce[Z + 1]);
        break;
      case "ArrowUp":
        fe(ce[Z - 1]);
        break;
      case "ArrowRight":
        if (!ee.hasChildren) return;
        se ? fe(ce[Z + 1]) : O(ee.key, !0);
        break;
      case "ArrowLeft":
        if (se) O(ee.key, !1);
        else if (ee.parentKey !== null)
          fe((pe = S.current.get(ee.parentKey)) == null ? void 0 : pe.element);
        else return;
        break;
      case "Home":
        fe(ce[0]);
        break;
      case "End":
        fe(ce[ce.length - 1]);
        break;
      case "Enter":
        if (!ee.hasChildren) return;
        O(ee.key, !se);
        break;
      case " ":
        if (!t || ee.disabled) return;
        ee.kind === "item" ? te(ee.key) : de(
          ee.key,
          re(ee.key).state !== "all"
        );
        break;
      default:
        return;
    }
    H.preventDefault();
  }, ke = _.useRef(null), De = _.useRef(null), Te = _.useRef(null), ot = _.useRef(null), qe = _.useRef(null), zt = () => {
    Te.current && window.clearTimeout(Te.current.timer), Te.current = null;
  }, Ge = () => {
    qe.current !== null && (window.clearTimeout(qe.current), qe.current = null);
  }, wt = _.useRef(null), $e = _.useRef(null), pt = () => {
    $e.current !== null && (window.cancelAnimationFrame($e.current), $e.current = null);
    const H = wt.current;
    wt.current = null, H == null || H();
  }, Xe = (H, J) => {
    pt(), wt.current = J;
    const ee = performance.now() + _T, G = () => {
      $e.current = null, wt.current === J && (H.dragOperation.status.idle || performance.now() > ee ? (wt.current = null, J()) : $e.current = window.requestAnimationFrame(G));
    };
    $e.current = window.requestAnimationFrame(G);
  };
  _.useEffect(
    () => () => {
      Te.current && window.clearTimeout(Te.current.timer), qe.current !== null && window.clearTimeout(qe.current), $e.current !== null && window.cancelAnimationFrame($e.current), wt.current = null;
    },
    []
  );
  const Bt = _.useCallback(
    (H, J) => {
      const ee = S.current;
      for (let G = ee.get(J); G; G = G.parentKey === null ? void 0 : ee.get(G.parentKey))
        if (G.key === H) return !1;
      return !0;
    },
    []
  ), Ht = (H) => H === ke.current ? null : $(H.parentElement), ve = (H, J) => ({
    parentKey: H ? H.valueKey ?? H.key : null,
    parentValue: H == null ? void 0 : H.getValue(),
    index: J
  }), Ct = (H, J) => {
    pt();
    const ee = H.operation.source, G = ee ? S.current.get(ee.id) : void 0, ce = G == null ? void 0 : G.element.parentElement;
    if (!G || !ce) return;
    const Z = G.element.getAttribute("aria-expanded") === "true";
    Z && Vl(() => O(G.key, !1)), De.current = {
      node: G,
      originList: ce,
      originIndex: Ro(ce).indexOf(G.element),
      reopen: Z,
      nodeOf: $,
      keyboard: !1
    }, ot.current = null, Ge(), E1(J, S.current);
  }, Rn = (H, J) => {
    const ee = De.current, G = ke.current;
    if (!ee || !G) return;
    if (H.by) {
      if (ee.keyboard = !0, H.by.y !== 0) {
        const fe = H.by.y > 0 ? 1 : -1;
        MT(J, S.current, ee, G, fe);
      }
      return;
    }
    const { x: ce, y: Z } = H.to ?? J.dragOperation.position.current, se = { x: ce, y: Z };
    ot.current = se, Ll(J, S.current, ee, se), Ge(), qe.current = window.setTimeout(() => {
      qe.current = null;
      const fe = De.current, pe = ot.current;
      fe === ee && !fe.keyboard && pe && Ll(J, S.current, fe, pe);
    }, kT);
  }, Jt = (H, J) => {
    var se;
    const { source: ee, target: G } = H.operation, ce = De.current;
    if (!ee || !G || !ce || ce.keyboard) {
      zt();
      return;
    }
    if (Ll(
      J,
      S.current,
      ce,
      ot.current ?? J.dragOperation.position.current
    ), G.id === ee.id || ((se = Te.current) == null ? void 0 : se.key) === G.id) return;
    zt();
    const Z = window.setTimeout(() => {
      Te.current = null;
      const fe = S.current.get(G.id);
      (fe == null ? void 0 : fe.element.getAttribute("aria-expanded")) === "false" && O(fe.key, !0);
    }, ST);
    Te.current = { key: G.id, timer: Z };
  }, Hn = (H, J) => {
    const ee = De.current;
    if (De.current = null, zt(), Ge(), !ee) return;
    const { node: G, originList: ce, originIndex: Z, reopen: se } = ee;
    if (!G.element.isConnected || !ce.isConnected) return;
    const fe = G.element.parentElement, pe = fe ? Ro(fe).indexOf(G.element) : -1, ze = Ht(ce), Ze = fe ? Ht(fe) : void 0, At = fe !== ce || pe !== Z, hn = () => {
      se && O(G.key, !0);
    };
    if (H.canceled || !i || !At || ze === void 0 || Ze === void 0) {
      Zp(ee), Xe(J, hn);
      return;
    }
    const St = {
      key: G.valueKey ?? G.key,
      kind: G.kind,
      value: G.getValue(),
      from: ve(ze, Z),
      to: ve(Ze, pe)
    };
    Xe(J, () => {
      !G.element.isConnected || !ce.isConnected || (Zp(ee), Vl(() => {
        hn(), i(St);
      }));
    });
  }, fn = (h == null ? void 0 : h.dragHandle) ?? "Drag to reorder", Gt = c === "lg" ? 48 : 40, On = _.useMemo(
    () => [
      zw,
      Vw.configure({ offset: { x: 0, y: Gt } })
    ],
    [Gt]
  ), Gn = _.useMemo(
    () => ({
      selectable: t,
      sortable: a,
      size: c,
      ariaLabels: { dragHandle: fn },
      resolveKey: s,
      register: N,
      isOpen: j,
      setOpen: O,
      isSelected: I,
      getGroupSelection: re,
      toggleItem: te,
      setGroupSelected: de,
      canDrop: Bt
    }),
    [
      t,
      a,
      c,
      fn,
      s,
      N,
      j,
      O,
      I,
      re,
      te,
      de,
      Bt
    ]
  ), mt = /* @__PURE__ */ d.jsx(P1.Provider, { value: Gn, children: /* @__PURE__ */ d.jsx(
    "ul",
    {
      ref: ke,
      role: "tree",
      ...b,
      onFocus: ge,
      onKeyDown: me,
      className: R(
        `border-divider-default divide-divider-default bg-surface-primary
          rounded-sm divide-y overflow-hidden border`,
        a && LT,
        m
      ),
      style: {
        "--tree-indent-base": `var(--token-spacing-${l})`,
        "--tree-indent-step": `var(--token-spacing-${f})`,
        ...j1(0),
        ...y
      },
      children: C
    }
  ) });
  return a ? /* @__PURE__ */ d.jsx(
    Zw,
    {
      sensors: On,
      onBeforeDragStart: Ct,
      onDragMove: Rn,
      onDragOver: Jt,
      onDragEnd: Hn,
      children: mt
    }
  ) : mt;
}
const O1 = _.forwardRef(RT);
O1.displayName = "Tree";
const Ki = _.forwardRef(
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
Ki.displayName = "Tree.RowOverlay";
const D1 = (e, t) => {
  if (e === void 0 || !t) return null;
  const n = t(e);
  return n == null || typeof n == "boolean" ? null : _.isValidElement(n) && n.type === Ki ? n : /* @__PURE__ */ d.jsx(Ki, { children: n });
}, OT = `group relative gap-xxs pr-md py-xxs text-md
  text-body-primary hover:bg-interactive-neutral-hover
  has-[:focus-visible]:bg-interactive-neutral-hover
  has-[[data-force-visible]]:bg-interactive-neutral-hover flex items-center
  transition-colors`, DT = {
  md: "min-h-10",
  lg: "min-h-12"
}, IT = `data-[dragging]:border-interactive-default
  data-[dragging]:bg-surface-primary data-[dragging]:rounded-sm
  data-[dragging]:border`, jT = `text-shape-light rounded-xs
  hover:bg-interactive-neutral-active flex size-6 shrink-0 cursor-pointer
  items-center justify-center`, I1 = `[&:focus-visible>div]:ring-interactive-focused
  [&:focus-visible>div]:bg-interactive-neutral-hover outline-none
  [&:focus-visible>div]:ring-4 [&:focus-visible>div]:ring-inset`, TT = (e) => e === "some" ? "mixed" : e === "all", $T = `text-shape-light rounded-xs
  focus-visible:ring-interactive-focused group-hover:opacity-100
  group-data-[dragging]:opacity-100 pointer-coarse:opacity-100 flex size-6
  shrink-0 cursor-grab touch-none items-center justify-center opacity-0
  transition-opacity focus-visible:opacity-100 focus-visible:ring-4
  focus-visible:outline-none active:cursor-grabbing`, Xf = "size-6 shrink-0", WT = "size-[1.125rem] shrink-0", Zf = (e) => `calc(var(--tree-indent-base) + ${e} * var(--tree-indent-step))`, j1 = (e) => ({ "--tree-indent": Zf(e) }), LT = `[&_[data-dnd-placeholder]]:relative
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
  [&_[data-dnd-placeholder]]:after:content-['']`, T1 = (e, t, n) => R(
  OT,
  DT[e],
  t && "text-body-disabled",
  n
), FT = ({
  nodeKey: e,
  elementRef: t,
  depth: n,
  disabled: r,
  children: o
}) => {
  const { size: s, ariaLabels: a, canDrop: i } = qf(), { targetRef: c, handleRef: l, isDragging: f } = g1({
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
      className: T1(s, r, IT),
      style: { paddingLeft: Zf(n) },
      children: [
        r ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Xf }) : /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            ref: l,
            "aria-label": a.dragHandle,
            className: $T,
            children: /* @__PURE__ */ d.jsx(tm, { size: 16 })
          }
        ),
        o
      ]
    }
  );
}, $1 = (e) => {
  const { sortable: t, size: n } = qf();
  return t ? /* @__PURE__ */ d.jsx(FT, { ...e }) : /* @__PURE__ */ d.jsx(
    "div",
    {
      className: T1(n, e.disabled),
      style: { paddingLeft: Zf(e.depth) },
      children: e.children
    }
  );
}, W1 = (e) => _.Children.toArray(e).reduce(
  (t, n) => t + (_.isValidElement(n) && n.type === _.Fragment ? W1(n.props.children) : 1),
  0
), L1 = ({ kind: e, value: t, disabled: n, hasChildren: r = !1, defaultOpen: o }, s) => {
  const a = qf(), i = _.useContext(A1), c = _.useId(), l = t === void 0 ? void 0 : a.resolveKey(t);
  if (e === "item" && t !== void 0 && typeof l != "string" && typeof l != "number")
    throw new Error(
      "Tree.Item: `getItemValue` must return a string or number for every Item value."
    );
  const f = l === void 0 ? c : e === "group" ? `group:${String(l)}` : l, u = n || i.disabled, h = _.useRef(t);
  _.useLayoutEffect(() => {
    h.current = t;
  });
  const p = _.useRef(null), g = _.useCallback(
    (C) => {
      p.current = C, typeof s == "function" ? s(C) : s && (s.current = C);
    },
    [s]
  ), { register: m } = a, { parentKey: y } = i;
  return _.useLayoutEffect(() => {
    const C = p.current;
    return C ? m({
      key: f,
      valueKey: l,
      parentKey: y,
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
    y,
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
    setElement: g,
    elementRef: p
  };
};
function VT({
  label: e,
  value: t,
  renderRowOverlay: n,
  defaultOpen: r,
  disabled: o = !1,
  className: s,
  children: a,
  ...i
}, c) {
  const l = W1(a) > 0, { ctx: f, depth: u, key: h, isDisabled: p, id: g, setElement: m, elementRef: y } = L1(
    { kind: "group", value: t, disabled: o, hasChildren: l, defaultOpen: r },
    c
  ), C = t !== void 0;
  _.useEffect(() => {
    f.sortable && !C && console.warn(
      "Tree.Group: give every Group a `value` in a sortable tree, so `onMove` can name it as a parent."
    );
  }, [f.sortable, C]);
  const b = `${g}-label`, x = `${g}-group`, S = !l || f.isOpen(h, r), w = f.selectable ? f.getGroupSelection(h) : null, E = () => f.setOpen(h, !S);
  return /* @__PURE__ */ d.jsxs(
    "li",
    {
      ref: m,
      role: "treeitem",
      "aria-labelledby": b,
      "aria-expanded": l ? S : void 0,
      "aria-level": u + 1,
      "aria-disabled": p || void 0,
      "aria-checked": w != null && w.selectable ? TT(w.state) : void 0,
      "data-state": l ? S ? "open" : "closed" : void 0,
      ...i,
      tabIndex: -1,
      className: R(I1, s),
      children: [
        /* @__PURE__ */ d.jsxs(
          $1,
          {
            nodeKey: h,
            elementRef: y,
            depth: u,
            disabled: p,
            children: [
              l ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, onClick: E, className: jT, children: /* @__PURE__ */ d.jsx(
                Jd,
                {
                  size: 14,
                  className: R(
                    "transition-transform duration-200",
                    S && "rotate-90"
                  )
                }
              ) }) : /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Xf }),
              w && /* @__PURE__ */ d.jsx(
                bo,
                {
                  id: `${g}-checkbox`,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  onFocus: R1,
                  checked: w.state === "all",
                  indeterminate: w.state === "some",
                  disabled: p || !w.selectable,
                  onCheckedChange: (k) => f.setGroupSelected(h, k === !0),
                  className: "shrink-0"
                }
              ),
              /* @__PURE__ */ d.jsx(
                "span",
                {
                  id: b,
                  onClick: l ? E : void 0,
                  className: R(
                    "min-w-0 flex-1 truncate select-none",
                    l && "cursor-pointer"
                  ),
                  children: e
                }
              ),
              D1(t, n)
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(
          A1.Provider,
          {
            value: { parentKey: h, depth: u + 1, disabled: p },
            children: /* @__PURE__ */ d.jsx(
              "ul",
              {
                role: "group",
                id: x,
                hidden: !S,
                className: `border-divider-default divide-divider-default divide-y
            border-t empty:hidden`,
                style: j1(u + 1),
                children: a
              }
            )
          }
        )
      ]
    }
  );
}
const F1 = _.forwardRef(VT);
F1.displayName = "Tree.Group";
function zT({
  value: e,
  renderRowOverlay: t,
  disabled: n = !1,
  className: r,
  children: o,
  ...s
}, a) {
  const { ctx: i, depth: c, key: l, valueKey: f, isDisabled: u, id: h, setElement: p, elementRef: g } = L1({ kind: "item", value: e, disabled: n }, a), m = `${h}-label`, y = `${h}-checkbox`, C = i.selectable && f !== void 0, b = f !== void 0 && i.isSelected(f);
  return /* @__PURE__ */ d.jsx(
    "li",
    {
      ref: p,
      role: "treeitem",
      "aria-labelledby": m,
      "aria-level": c + 1,
      "aria-disabled": u || void 0,
      "aria-checked": C ? b : void 0,
      ...s,
      tabIndex: -1,
      className: R(I1, r),
      children: /* @__PURE__ */ d.jsxs(
        $1,
        {
          nodeKey: l,
          elementRef: g,
          depth: c,
          disabled: u,
          children: [
            /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: Xf }),
            i.selectable && (C ? /* @__PURE__ */ d.jsx(
              bo,
              {
                id: y,
                "aria-hidden": !0,
                tabIndex: -1,
                onFocus: R1,
                checked: b,
                disabled: u,
                onCheckedChange: () => i.toggleItem(l),
                className: "shrink-0"
              }
            ) : /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: WT })),
            C ? /* @__PURE__ */ d.jsx(
              "label",
              {
                id: m,
                htmlFor: y,
                className: R(
                  "min-w-0 flex-1 select-none",
                  u ? "cursor-not-allowed" : "cursor-pointer"
                ),
                children: o
              }
            ) : /* @__PURE__ */ d.jsx("span", { id: m, className: "min-w-0 flex-1", children: o }),
            D1(e, t)
          ]
        }
      )
    }
  );
}
const V1 = _.forwardRef(zT);
V1.displayName = "Tree.Item";
const Fl = Object.assign(O1, {
  Group: F1,
  Item: V1,
  RowOverlay: Ki
}), BT = (e, t, n) => {
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
function HT({
  items: e,
  getParentKey: t,
  getLabel: n,
  getOrder: r,
  header: o,
  actions: s,
  actionsLayout: a = "auto",
  isItemDisabled: i,
  labels: c,
  onItemsChange: l,
  withPlacement: f,
  onMove: u,
  onSelectedChange: h,
  getItemValue: p = M1,
  className: g,
  style: m,
  ...y
}, C) {
  const b = _.useRef(null), x = _.useId(), S = y["aria-label"] !== void 0 || y["aria-labelledby"] !== void 0;
  _.useImperativeHandle(
    C,
    () => ({
      collapseAll: () => {
        var W;
        return (W = b.current) == null ? void 0 : W.collapseAll();
      },
      expandAll: () => {
        var W;
        return (W = b.current) == null ? void 0 : W.expandAll();
      }
    }),
    []
  );
  const [w, E] = _.useState({
    expandableCount: 0,
    openCount: 0
  }), k = _.useMemo(
    () => PT(e, {
      getItemValue: p,
      getParentKey: t,
      ...r && { getOrder: r }
    }),
    [e, p, t, r]
  ), N = _.useRef(null);
  _.useEffect(() => {
    if (N.current === e) return;
    let W = 0;
    const Y = (D) => (k.get(D) ?? []).forEach((L) => {
      W += 1, Y(p(L));
    });
    Y(null), W < e.length && (N.current = e, console.warn(
      `TreeList: ${e.length - W} item(s) cannot be reached from the top level. Check \`getParentKey\` for cycles.`
    ));
  }, [e, k, p]);
  const P = _.useMemo(() => {
    const W = /* @__PURE__ */ new Set();
    if (!i) return W;
    const Y = (D, L) => (k.get(D) ?? []).forEach((Q) => {
      const A = p(Q);
      L && W.add(A), Y(A, L || i(Q));
    });
    return Y(null, !1), W;
  }, [k, p, i]), T = c.actions ?? "Actions", j = _.useMemo(
    () => s ? (W) => {
      const Y = p(W), D = s(W, {
        ancestorDisabled: P.has(Y)
      });
      if (D.length === 0) return null;
      const L = a !== "buttons", Q = (I) => /* @__PURE__ */ d.jsx(
        Ve,
        {
          type: "button",
          intent: I.intent ?? "secondary",
          size: "xs",
          danger: I.danger ?? !1,
          "aria-label": I.ariaLabel ?? (typeof I.label == "string" ? I.label : I.key),
          disabled: I.disabled ?? !1,
          onClick: () => I.onAction(W),
          className: R(I.intent === "text" && "min-w-0 px-0"),
          children: I.label
        },
        I.key
      ), A = a !== "menu" && /* @__PURE__ */ d.jsx(
        "span",
        {
          className: R(
            "contents",
            a === "auto" && "@max-4xl/tree-list:hidden max-md:hidden"
          ),
          children: D.map(Q)
        }
      ), M = D.filter(
        (I) => I.besideMenu
      ), V = L && M.length > 0 && /* @__PURE__ */ d.jsx(
        "span",
        {
          className: a === "auto" ? "md:@max-4xl/tree-list:contents hidden" : "md:contents hidden",
          children: M.map(Q)
        }
      ), z = L && M.length > 0, K = M.length === D.length, q = L && /* @__PURE__ */ d.jsx(
        GT,
        {
          item: W,
          actions: D,
          label: T,
          fadeIn: z,
          className: K ? "max-md:contents hidden" : a === "auto" ? "@max-4xl/tree-list:contents max-md:contents hidden" : "contents"
        }
      );
      return /* @__PURE__ */ d.jsxs(
        Fl.RowOverlay,
        {
          className: R(
            "has-[[data-force-visible]]:opacity-100",
            L && `max-md:static max-md:bg-none max-md:px-0
                      max-md:opacity-100`,
            z && (a === "auto" ? `@max-4xl/tree-list:static @max-4xl/tree-list:bg-none
                        @max-4xl/tree-list:px-0 @max-4xl/tree-list:opacity-100` : "px-0 static bg-none opacity-100")
          ),
          children: [
            A,
            V,
            q
          ]
        }
      );
    } : void 0,
    [s, a, T, P, p]
  ), O = _.useMemo(() => {
    const W = (Y) => (k.get(Y) ?? []).map((D) => {
      const L = p(D);
      return /* @__PURE__ */ d.jsx(
        Fl.Group,
        {
          value: D,
          label: n(D),
          disabled: (i == null ? void 0 : i(D)) ?? !1,
          ...j && { renderRowOverlay: j },
          children: W(L)
        },
        L
      );
    });
    return W(null);
  }, [
    k,
    p,
    n,
    i,
    j
  ]), $ = l ? (W) => {
    l(
      BT(e, W, {
        getItemValue: p,
        getParentKey: t,
        getOrder: r,
        withPlacement: f
      })
    ), u == null || u(W);
  } : u, F = w.expandableCount > 0 && w.openCount < w.expandableCount, B = w.openCount > 0;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: R("@container/tree-list flex w-full flex-col", g),
      style: m,
      children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `gap-xs pb-sm text-sm text-body-secondary flex items-center
          justify-end`,
            children: [
              /* @__PURE__ */ d.jsx(zs, { asChild: !0, intent: "tertiary", disabled: !F, children: /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  disabled: !F,
                  onClick: () => {
                    var W;
                    return (W = b.current) == null ? void 0 : W.expandAll();
                  },
                  children: c.expandAll
                }
              ) }),
              /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, children: "|" }),
              /* @__PURE__ */ d.jsx(zs, { asChild: !0, intent: "tertiary", disabled: !B, children: /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  disabled: !B,
                  onClick: () => {
                    var W;
                    return (W = b.current) == null ? void 0 : W.collapseAll();
                  },
                  children: c.collapseAll
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
            Fl,
            {
              ref: b,
              size: "lg",
              "aria-labelledby": S ? void 0 : x,
              getItemValue: p,
              ...h && { onSelectedChange: h },
              onExpandedCountChange: E,
              ...$ && { onMove: $ },
              className: `border-surface-default divide-surface-default rounded-none
            border-x-0 border-t border-b-0`,
              indentBase: "xl",
              indentStep: "lg",
              ...y,
              children: O
            }
          )
        ] })
      ]
    }
  );
}
function GT({
  item: e,
  actions: t,
  label: n,
  fadeIn: r,
  className: o
}) {
  const [s, a] = _.useState(!1), [i, c] = _.useState(!1), l = _.useRef(!1);
  return /* @__PURE__ */ d.jsx("span", { className: o, "data-force-visible": s || void 0, children: /* @__PURE__ */ d.jsxs(Ac, { open: s, onOpenChange: a, children: [
    /* @__PURE__ */ d.jsx(
      Lt,
      {
        content: n,
        disableHoverableContent: !0,
        open: i,
        onOpenChange: (f) => c(f && !l.current),
        children: /* @__PURE__ */ d.jsx(Rc, { asChild: !0, children: /* @__PURE__ */ d.jsx(
          Ve,
          {
            type: "button",
            intent: "tertiary",
            size: "xs",
            icon: em,
            "aria-label": n,
            className: R(
              r && `max-md:opacity-100 opacity-0 transition-opacity
                  group-hover:opacity-100 group-has-[:focus-visible]:opacity-100
                  data-[state=open]:opacity-100
                  [li:focus-visible>div_&]:opacity-100`
            )
          }
        ) })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Pc,
      {
        align: "end",
        onCloseAutoFocus: () => {
          l.current = !0, setTimeout(() => {
            l.current = !1;
          });
        },
        children: t.map((f) => /* @__PURE__ */ d.jsx(
          Mi,
          {
            intent: f.danger ? "danger" : "default",
            disabled: f.disabled ?? !1,
            onSelect: () => f.onAction(e),
            className: R(f.besideMenu && "md:hidden"),
            children: f.menuLabel ?? f.label
          },
          f.key
        ))
      }
    )
  ] }) });
}
const YT = _.forwardRef(HT);
YT.displayName = "TreeList";
const KT = he(
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
), UT = _.forwardRef(
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
    orText: g = "または",
    selectFileText: m = "ファイルを選択",
    dropFilesText: y = "ここにファイルをドロップ",
    uploadingText: C = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: x = "アップロードに失敗しました",
    ...S
  }, w) => {
    const [E, k] = tt(!1), N = it(null), P = _e(
      (M) => {
        M.preventDefault(), M.stopPropagation(), E || k(!0);
      },
      [E]
    ), T = _e((M) => {
      M.preventDefault(), M.stopPropagation(), k(!1);
    }, []), j = _e((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), O = _e(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), k(!1), a) return;
        const V = M.dataTransfer.files;
        V && V.length > 0 && (r == null || r(V));
      },
      [a, r]
    ), $ = _e(() => {
      var M;
      a || (M = N.current) == null || M.click();
    }, [a]), F = _e(
      (M) => {
        const V = M.target.files;
        V && V.length > 0 && (r == null || r(V));
      },
      [r]
    ), B = E ? "dragging" : n, W = () => /* @__PURE__ */ d.jsx(
      m2,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Y = () => /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary", children: p }),
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary text-sm", children: g })
      ] }),
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "xs",
          intent: "tertiary",
          className: E ? "" : "z-10",
          icon: ah,
          onClick: (M) => {
            M.stopPropagation(), $();
          },
          children: m
        }
      )
    ] }), D = () => /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      W(),
      /* @__PURE__ */ d.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        y,
        " ",
        /* @__PURE__ */ d.jsx("span", { className: "text-sm", children: g })
      ] }),
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "xs",
          intent: "tertiary",
          className: E ? "" : "z-10",
          icon: ah,
          onClick: (M) => {
            M.stopPropagation(), $();
          },
          children: m
        }
      )
    ] }), L = () => {
      const M = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return B === "inProgress" && i !== void 0 ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ d.jsx("p", { className: "text-body-primary", children: c || M }),
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
          Oc.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : B === "success" ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ d.jsx("p", { className: "text-body-primary", children: c || M }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (V) => {
                V.stopPropagation(), h == null || h();
              },
              children: /* @__PURE__ */ d.jsx(O2, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(
            h2,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ d.jsx("p", { className: "text-interactive-primary-default", children: u || b })
        ] })
      ] }) : B === "error" ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: c || M }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(n2, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: f || x })
        ] })
      ] }) : null;
    }, Q = () => t === "small" ? Y() : D(), A = () => /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: P,
        onDragLeave: T,
        onDragOver: j,
        onDrop: O
      }
    );
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: w,
          className: R(
            "relative",
            KT({ size: t, state: B, disabled: a }),
            e
          ),
          onClick: $,
          role: "button",
          tabIndex: a ? -1 : 0,
          "aria-disabled": a,
          ...S,
          children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                ref: N,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: s,
                onChange: F,
                disabled: a
              }
            ),
            A(),
            Q()
          ]
        }
      ),
      (B === "inProgress" && i !== void 0 || B === "success" || B === "error") && L()
    ] });
  }
);
UT.displayName = "FileUploader";
export {
  n7 as Accordion,
  t7 as AccountMenu,
  _y as AutoSuggest,
  IP as Badge,
  $P as Breadcrumbs,
  Ve as Button,
  qx as Calendar,
  kO as Callout,
  r7 as Card,
  bo as Checkbox,
  AO as CheckboxGroup,
  OO as ChoiceChip,
  DO as ChoiceChipGroup,
  s7 as DataSheet,
  hy as DataSheetAction,
  ny as DataSheetHeader,
  oy as DataSheetKeyValue,
  ry as DataSheetSection,
  cy as DataSheetTable,
  fy as DataSheetTableActionsCell,
  dy as DataSheetTableBody,
  Ai as DataSheetTableCell,
  ly as DataSheetTableHeader,
  uy as DataSheetTableRow,
  XO as DatePicker,
  a7 as Dialog,
  Ac as Dropdown,
  Pc as DropdownContent,
  Mi as DropdownItem,
  DP as DropdownLabel,
  OP as DropdownSeparator,
  Rc as DropdownTrigger,
  UT as FileUploader,
  uD as FooterProvider,
  c7 as FormField,
  h7 as Logo,
  mD as MobileNavigation,
  vD as MobileNavigationItem,
  gD as MobileNavigationSection,
  XD as MultiSelect,
  i7 as MultiStepDialog,
  t5 as Pagination,
  Oc as ProgressIndicator,
  d7 as RadioButton,
  u7 as RadioButtonGroup,
  f5 as SearchBar,
  f7 as SegmentedControl,
  hd as Select,
  g5 as SideNavigation,
  Vy as SideNavigationCollapseButton,
  yy as SideNavigationItem,
  xy as SideNavigationProvider,
  wy as SideNavigationSection,
  k7 as Sortable,
  E7 as StatusIndicator,
  nT as Stepper,
  rT as Switch,
  k1 as Tab,
  bT as TabBar,
  oT as Table,
  aT as TableBody,
  uT as TableCaption,
  dT as TableCell,
  _1 as TableCoverMessage,
  iT as TableFooter,
  lT as TableHead,
  N7 as TableHeadSortButton,
  sT as TableHeader,
  cT as TableRow,
  fT as TableRowOverlay,
  Ri as Tag,
  ky as TagInput,
  yT as TextArea,
  l7 as TextField,
  zs as TextLink,
  M7 as ToastItem,
  P7 as ToastProvider,
  Lt as Tooltip,
  o7 as TooltipProvider,
  Fl as Tree,
  YT as TreeList,
  BT as applyTreeListMove,
  A7 as applyTreeMove,
  CD as colorCodeToTokenMap,
  rD as focusFirstTextField,
  PT as groupFlatTreeItems,
  ks as iconVariants,
  KO as inputVariants,
  py as inputWrapperVariants,
  M1 as resolveTreeValue,
  ma as useSideNavigation
};
