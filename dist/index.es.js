import * as v from "react";
import _, { forwardRef as Zp, createElement as el, useState as tt, useLayoutEffect as Zd, createContext as Qs, useContext as Is, useCallback as ke, useRef as ct, useEffect as on, useMemo as po, useInsertionEffect as G1, memo as Y1, startTransition as K1, useImperativeHandle as U1 } from "react";
import * as Js from "react-dom";
import q1, { flushSync as Fl } from "react-dom";
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
var th;
function X1() {
  if (th) return Zo;
  th = 1;
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
var nh;
function Z1() {
  return nh || (nh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === O ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case y:
          return "Fragment";
        case x:
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
          case g:
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
        var F = M.error, z = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return F.call(
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
      var A = D.A;
      return A === null ? null : A.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(A) {
      if (L.call(A, "key")) {
        var M = Object.getOwnPropertyDescriptor(A, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function i(A, M) {
      function F() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
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
    function l(A, M, F, z, X, U) {
      var j = F.ref;
      return A = {
        $$typeof: b,
        type: A,
        key: M,
        props: F,
        _owner: z
      }, (j !== void 0 ? j : null) !== null ? Object.defineProperty(A, "ref", {
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
        value: X
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: U
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function f(A, M, F, z, X, U) {
      var j = M.children;
      if (j !== void 0)
        if (z)
          if (V(j)) {
            for (z = 0; z < j.length; z++)
              u(j[z]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(j);
      if (L.call(M, "key")) {
        j = e(A);
        var J = Object.keys(M).filter(function(de) {
          return de !== "key";
        });
        z = 0 < J.length ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}", te[j + z] || (J = 0 < J.length ? "{" + J.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          j,
          J,
          j
        ), te[j + z] = !0);
      }
      if (j = null, F !== void 0 && (n(F), j = "" + F), a(M) && (n(M.key), j = "" + M.key), "key" in M) {
        F = {};
        for (var oe in M)
          oe !== "key" && (F[oe] = M[oe]);
      } else F = M;
      return j && i(
        F,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), l(
        A,
        j,
        F,
        o(),
        X,
        U
      );
    }
    function u(A) {
      h(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === P && (A._payload.status === "fulfilled" ? h(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function h(A) {
      return typeof A == "object" && A !== null && A.$$typeof === b;
    }
    var p = _, b = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), O = Symbol.for("react.client.reference"), D = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, V = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var W, Y = {}, I = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), $ = B(r(s)), te = {};
    Qo.Fragment = y, Qo.jsx = function(A, M, F) {
      var z = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        F,
        !1,
        z ? Error("react-stack-top-frame") : I,
        z ? B(r(A)) : $
      );
    }, Qo.jsxs = function(A, M, F) {
      var z = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        A,
        M,
        F,
        !0,
        z ? Error("react-stack-top-frame") : I,
        z ? B(r(A)) : $
      );
    };
  })()), Qo;
}
var rh;
function Q1() {
  return rh || (rh = 1, process.env.NODE_ENV === "production" ? Pa.exports = X1() : Pa.exports = Z1()), Pa.exports;
}
var d = Q1();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var J1 = {
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
    ({ color: s = "currentColor", size: a = 24, stroke: i = 2, title: c, className: l, children: f, ...u }, h) => el(
      "svg",
      {
        ref: h,
        ...J1[e],
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
        c && el("title", { key: "svg-title" }, c),
        ...r.map(([p, b]) => el(p, b)),
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
const e2 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], t2 = Oe("outline", "alert-circle", "AlertCircle", e2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], r2 = Oe("outline", "calendar-event", "CalendarEvent", n2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Qp = Oe("outline", "check", "Check", o2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ea = Oe("outline", "chevron-down", "ChevronDown", s2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], i2 = Oe("outline", "chevron-left", "ChevronLeft", a2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Qd = Oe("outline", "chevron-right", "ChevronRight", c2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], d2 = Oe("outline", "chevron-up", "ChevronUp", l2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], f2 = Oe("outline", "circle-check", "CircleCheck", u2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], p2 = Oe("outline", "cloud-up", "CloudUp", h2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Jp = Oe("outline", "dots-vertical", "DotsVertical", m2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = [["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], em = Oe("outline", "grip-vertical", "GripVertical", v2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], b2 = Oe("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", g2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], x2 = Oe("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", y2);
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
const N2 = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], tm = Oe("outline", "pencil", "Pencil", N2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], nm = Oe("outline", "restore", "Restore", M2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Jd = Oe("outline", "search", "Search", P2);
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
const O2 = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], rm = Oe("outline", "trash", "Trash", O2);
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
const j2 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], eu = Oe("outline", "x", "X", j2);
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
const W2 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], om = Oe("filled", "circle-check-filled", "CircleCheckFilled", W2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], oh = Oe("filled", "exclamation-circle-filled", "ExclamationCircleFilled", L2);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], sh = Oe("filled", "folder-filled", "FolderFilled", F2);
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
function ah(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Vn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = ah(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : ah(e[o], null);
        }
      };
  };
}
function ye(...e) {
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
var sm = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function am(e) {
  const t = ({ children: n }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = sm, t;
}
var im = /* @__PURE__ */ am("Slottable");
function G2(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sm;
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
], re = U2.reduce((e, t) => {
  const n = /* @__PURE__ */ or(`Primitive.${t}`), r = v.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function tu(e, t) {
  e && Js.flushSync(() => e.dispatchEvent(t));
}
var cm = Object.freeze({
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
}), q2 = "VisuallyHidden", Ui = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    re.span,
    {
      ...e,
      ref: t,
      style: { ...cm, ...e.style }
    }
  )
);
Ui.displayName = q2;
var X2 = Ui;
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
      const { scope: h, children: p, ...b } = u, m = ((C = h == null ? void 0 : h[e]) == null ? void 0 : C[c]) || i, y = v.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ d.jsx(m.Provider, { value: y, children: p });
    };
    l.displayName = s + "Provider";
    function f(u, h) {
      var m;
      const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || i, b = v.useContext(p);
      if (b) return b;
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
    const { scope: y, children: C } = m, x = _.useRef(null), g = _.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: y, itemMap: g, collectionRef: x, children: C });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ or(i), l = _.forwardRef(
    (m, y) => {
      const { scope: C, children: x } = m, g = s(i, C), S = ye(y, g.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: S, children: x });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", u = "data-radix-collection-item", h = /* @__PURE__ */ or(f), p = _.forwardRef(
    (m, y) => {
      const { scope: C, children: x, ...g } = m, S = _.useRef(null), w = ye(y, S), E = s(f, C);
      return _.useEffect(() => (E.itemMap.set(S, { ref: S, ...g }), () => void E.itemMap.delete(S))), /* @__PURE__ */ d.jsx(h, { [u]: "", ref: w, children: x });
    }
  );
  p.displayName = f;
  function b(m) {
    const y = s(e + "CollectionConsumer", m);
    return _.useCallback(() => {
      const x = y.collectionRef.current;
      if (!x) return [];
      const g = Array.from(x.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (E, k) => g.indexOf(E.ref.current) - g.indexOf(k.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    b,
    r
  ];
}
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
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
  const { present: t, children: n } = e, r = rC(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), s = ye(r.ref, oC(o));
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
var qi = "Collapsible", [iC, lm] = dt(qi), [cC, nu] = iC(qi), dm = v.forwardRef(
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
      caller: qi
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
          re.div,
          {
            "data-state": ou(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
dm.displayName = qi;
var um = "CollapsibleTrigger", fm = v.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = nu(um, n);
    return /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": ou(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: Z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
fm.displayName = um;
var ru = "CollapsibleContent", hm = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nu(ru, e.__scopeCollapsible);
    return /* @__PURE__ */ d.jsx(mt, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ d.jsx(lC, { ...r, ref: t, present: s }) });
  }
);
hm.displayName = ru;
var lC = v.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = nu(ru, n), [i, c] = v.useState(r), l = v.useRef(null), f = ye(t, l), u = v.useRef(0), h = u.current, p = v.useRef(0), b = p.current, m = a.open || i, y = v.useRef(m), C = v.useRef(void 0);
  return v.useEffect(() => {
    const x = requestAnimationFrame(() => y.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), lt(() => {
    const x = l.current;
    if (x) {
      C.current = C.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const g = x.getBoundingClientRect();
      u.current = g.height, p.current = g.width, y.current || (x.style.transitionDuration = C.current.transitionDuration, x.style.animationName = C.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ d.jsx(
    re.div,
    {
      "data-state": ou(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !m,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function ou(e) {
  return e ? "open" : "closed";
}
var dC = dm, uC = fm, fC = hm, hC = v.createContext(void 0);
function Oo(e) {
  const t = v.useContext(hC);
  return e || t || "ltr";
}
var ln = "Accordion", pC = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [su, mC, vC] = ta(ln), [Xi] = dt(ln, [
  vC,
  lm
]), au = lm(), pm = _.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ d.jsx(su.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ d.jsx(xC, { ...s, ref: t }) : /* @__PURE__ */ d.jsx(yC, { ...o, ref: t }) });
  }
);
pm.displayName = ln;
var [mm, gC] = Xi(ln), [vm, bC] = Xi(
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
    } = e, [i, c] = kt({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: ln
    });
    return /* @__PURE__ */ d.jsx(
      mm,
      {
        scope: e.__scopeAccordion,
        value: _.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: _.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ d.jsx(vm, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ d.jsx(gm, { ...a, ref: t }) })
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
    mm,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ d.jsx(vm, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ d.jsx(gm, { ...s, ref: t }) })
    }
  );
}), [wC, Zi] = Xi(ln), gm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = _.useRef(null), c = ye(i, t), l = mC(n), u = Oo(o) === "ltr", h = Z(e.onKeyDown, (p) => {
      var N;
      if (!pC.includes(p.key)) return;
      const b = p.target, m = l().filter((P) => {
        var T;
        return !((T = P.ref.current) != null && T.disabled);
      }), y = m.findIndex((P) => P.ref.current === b), C = m.length;
      if (y === -1) return;
      p.preventDefault();
      let x = y;
      const g = 0, S = C - 1, w = () => {
        x = y + 1, x > S && (x = g);
      }, E = () => {
        x = y - 1, x < g && (x = S);
      };
      switch (p.key) {
        case "Home":
          x = g;
          break;
        case "End":
          x = S;
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
      const k = x % C;
      (N = m[k].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ d.jsx(
      wC,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ d.jsx(su.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(
          re.div,
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
), bi = "AccordionItem", [CC, iu] = Xi(bi), bm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Zi(bi, n), a = gC(bi, n), i = au(n), c = Ze(), l = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
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
            "data-state": _m(l),
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
bm.displayName = bi;
var ym = "AccordionHeader", xm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = iu(ym, n);
    return /* @__PURE__ */ d.jsx(
      re.h3,
      {
        "data-orientation": o.orientation,
        "data-state": _m(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
xm.displayName = ym;
var Vl = "AccordionTrigger", wm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = iu(Vl, n), a = bC(Vl, n), i = au(n);
    return /* @__PURE__ */ d.jsx(su.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
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
wm.displayName = Vl;
var Cm = "AccordionContent", Sm = _.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Zi(ln, n), s = iu(Cm, n), a = au(n);
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
Sm.displayName = Cm;
function _m(e) {
  return e ? "open" : "closed";
}
var ih = pm, SC = bm, _C = xm, kC = wm, EC = Sm;
function Rt(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function NC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var MC = "DismissableLayer", zl = "dismissableLayer.update", PC = "dismissableLayer.pointerDownOutside", AC = "dismissableLayer.focusOutside", ch, km = v.createContext({
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
    } = e, l = v.useContext(km), [f, u] = v.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = v.useState({}), b = ye(t, (k) => u(k)), m = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = m.indexOf(y), x = f ? m.indexOf(f) : -1, g = l.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= C, w = OC((k) => {
      const N = k.target, P = [...l.branches].some((T) => T.contains(N));
      !S || P || (o == null || o(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h), E = DC((k) => {
      const N = k.target;
      [...l.branches].some((T) => T.contains(N)) || (s == null || s(k), a == null || a(k), k.defaultPrevented || i == null || i());
    }, h);
    return NC((k) => {
      x === l.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && i && (k.preventDefault(), i()));
    }, h), v.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (ch = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), lh(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = ch);
        };
    }, [f, h, n, l]), v.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), lh());
    }, [f, l]), v.useEffect(() => {
      const k = () => p({});
      return document.addEventListener(zl, k), () => document.removeEventListener(zl, k);
    }, []), /* @__PURE__ */ d.jsx(
      re.div,
      {
        ...c,
        ref: b,
        style: {
          pointerEvents: g ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Z(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = MC;
var RC = "DismissableLayerBranch", Em = v.forwardRef((e, t) => {
  const n = v.useContext(km), r = v.useRef(null), o = ye(t, r);
  return v.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d.jsx(re.div, { ...e, ref: o });
});
Em.displayName = RC;
function OC(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Rt(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          Nm(
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
      s.target && !r.current && Nm(AC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function lh() {
  const e = new CustomEvent(zl);
  document.dispatchEvent(e);
}
function Nm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? tu(o, s) : o.dispatchEvent(s);
}
var IC = Tr, jC = Em, tl = "focusScope.autoFocusOnMount", nl = "focusScope.autoFocusOnUnmount", dh = { bubbles: !1, cancelable: !0 }, TC = "FocusScope", na = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = v.useState(null), l = Rt(o), f = Rt(s), u = v.useRef(null), h = ye(t, (m) => c(m)), p = v.useRef({
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
      }, y = function(g) {
        if (p.paused || !i) return;
        const S = g.relatedTarget;
        S !== null && (i.contains(S) || Un(u.current, { select: !0 }));
      }, C = function(g) {
        if (document.activeElement === document.body)
          for (const w of g)
            w.removedNodes.length > 0 && Un(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const x = new MutationObserver(C);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), x.disconnect();
      };
    }
  }, [r, i, p.paused]), v.useEffect(() => {
    if (i) {
      fh.add(p);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const C = new CustomEvent(tl, dh);
        i.addEventListener(tl, l), i.dispatchEvent(C), C.defaultPrevented || ($C(zC(Mm(i)), { select: !0 }), document.activeElement === m && Un(i));
      }
      return () => {
        i.removeEventListener(tl, l), setTimeout(() => {
          const C = new CustomEvent(nl, dh);
          i.addEventListener(nl, f), i.dispatchEvent(C), C.defaultPrevented || Un(m ?? document.body, { select: !0 }), i.removeEventListener(nl, f), fh.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const b = v.useCallback(
    (m) => {
      if (!n && !r || p.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, C = document.activeElement;
      if (y && C) {
        const x = m.currentTarget, [g, S] = WC(x);
        g && S ? !m.shiftKey && C === S ? (m.preventDefault(), n && Un(g, { select: !0 })) : m.shiftKey && C === g && (m.preventDefault(), n && Un(S, { select: !0 })) : C === x && m.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d.jsx(re.div, { tabIndex: -1, ...a, ref: h, onKeyDown: b });
});
na.displayName = TC;
function $C(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n) return;
}
function WC(e) {
  const t = Mm(e), n = uh(t, e), r = uh(t.reverse(), e);
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
function uh(e, t) {
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
var fh = VC();
function VC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = hh(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = hh(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function hh(e, t) {
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
  return a ? q1.createPortal(/* @__PURE__ */ d.jsx(re.div, { ...r, ref: t }), a) : null;
});
$r.displayName = BC;
var rl = 0;
function Qi() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ph()), document.body.insertAdjacentElement("beforeend", e[1] ?? ph()), rl++, () => {
      rl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), rl--;
    };
  }, []);
}
function ph() {
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
function Pm(e, t) {
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
function ol(e, t) {
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
var UC = typeof window < "u" ? v.useLayoutEffect : v.useEffect, mh = /* @__PURE__ */ new WeakMap();
function qC(e, t) {
  var n = KC(null, function(r) {
    return e.forEach(function(o) {
      return ol(o, r);
    });
  });
  return UC(function() {
    var r = mh.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || ol(i, null);
      }), s.forEach(function(i) {
        o.has(i) || ol(i, a);
      });
    }
    mh.set(n, e);
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
var Am = function(e) {
  var t = e.sideCar, n = Pm(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, gn({}, n));
};
Am.isSideCarExport = !0;
function JC(e, t) {
  return e.useMedium(t), Am;
}
var Rm = QC(), sl = function() {
}, Ji = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: sl,
    onWheelCapture: sl,
    onTouchMoveCapture: sl
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noRelative, b = e.noIsolation, m = e.inert, y = e.allowPinchZoom, C = e.as, x = C === void 0 ? "div" : C, g = e.gapMode, S = Pm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, E = qC([n, t]), k = gn(gn({}, S), o);
  return v.createElement(
    v.Fragment,
    null,
    f && v.createElement(w, { sideCar: Rm, removeScrollBar: l, shards: u, noRelative: p, noIsolation: b, inert: m, setCallbacks: s, allowPinchZoom: !!y, lockRef: n, gapMode: g }),
    a ? v.cloneElement(v.Children.only(i), gn(gn({}, k), { ref: E })) : v.createElement(x, gn({}, k, { className: c, ref: E }), i)
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
}, Om = function() {
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
}, al = function(e) {
  return parseInt(e || "", 10) || 0;
}, iS = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [al(n), al(r), al(o)];
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
}, lS = Om(), mo = "data-scroll-locked", dS = function(e, t, n, r) {
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
}, vh = function() {
  var e = parseInt(document.body.getAttribute(mo) || "0", 10);
  return isFinite(e) ? e : 0;
}, uS = function() {
  v.useEffect(function() {
    return document.body.setAttribute(mo, (vh() + 1).toString()), function() {
      var e = vh() - 1;
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
}, Bl = !1;
if (typeof window < "u")
  try {
    var Ra = Object.defineProperty({}, "passive", {
      get: function() {
        return Bl = !0, !0;
      }
    });
    window.addEventListener("test", Ra, Ra), window.removeEventListener("test", Ra, Ra);
  } catch {
    Bl = !1;
  }
var Gr = Bl ? { passive: !1 } : !1, hS = function(e) {
  return e.tagName === "TEXTAREA";
}, Dm = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !hS(e) && n[t] === "visible")
  );
}, pS = function(e) {
  return Dm(e, "overflowY");
}, mS = function(e) {
  return Dm(e, "overflowX");
}, gh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Im(e, r);
    if (o) {
      var s = jm(e, r), a = s[1], i = s[2];
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
}, Im = function(e, t) {
  return e === "v" ? pS(t) : mS(t);
}, jm = function(e, t) {
  return e === "v" ? vS(t) : gS(t);
}, bS = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yS = function(e, t, n, r, o) {
  var s = bS(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, u = 0, h = 0;
  do {
    if (!i)
      break;
    var p = jm(e, i), b = p[0], m = p[1], y = p[2], C = m - y - s * b;
    (b || C) && Im(e, i) && (u += C, h += b);
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
}, bh = function(e) {
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
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(CS++)[0], s = v.useState(Om)[0], a = v.useRef(e);
  v.useEffect(function() {
    a.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = HC([e.lockRef.current], (e.shards || []).map(yh), !0).filter(Boolean);
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
    var C = Oa(m), x = n.current, g = "deltaX" in m ? m.deltaX : x[0] - C[0], S = "deltaY" in m ? m.deltaY : x[1] - C[1], w, E = m.target, k = Math.abs(g) > Math.abs(S) ? "h" : "v";
    if ("touches" in m && k === "h" && E.type === "range")
      return !1;
    var N = gh(k, E);
    if (!N)
      return !0;
    if (N ? w = k : (w = k === "v" ? "h" : "v", N = gh(k, E)), !N)
      return !1;
    if (!r.current && "changedTouches" in m && (g || S) && (r.current = w), !w)
      return !0;
    var P = r.current || w;
    return yS(P, y, m, P === "h" ? g : S);
  }, []), c = v.useCallback(function(m) {
    var y = m;
    if (!(!Yr.length || Yr[Yr.length - 1] !== s)) {
      var C = "deltaY" in y ? bh(y) : Oa(y), x = t.current.filter(function(w) {
        return w.name === y.type && (w.target === y.target || y.target === w.shadowParent) && xS(w.delta, C);
      })[0];
      if (x && x.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!x) {
        var g = (a.current.shards || []).map(yh).filter(Boolean).filter(function(w) {
          return w.contains(y.target);
        }), S = g.length > 0 ? i(y, g[0]) : !a.current.noIsolation;
        S && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = v.useCallback(function(m, y, C, x) {
    var g = { name: m, delta: y, target: C, should: x, shadowParent: _S(C) };
    t.current.push(g), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== g;
      });
    }, 1);
  }, []), f = v.useCallback(function(m) {
    n.current = Oa(m), r.current = void 0;
  }, []), u = v.useCallback(function(m) {
    l(m.type, bh(m), m.target, i(m, e.lockRef.current));
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
  var p = e.removeScrollBar, b = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    b ? v.createElement(s, { styles: wS(o) }) : null,
    p ? v.createElement(fS, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function _S(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const kS = JC(Rm, SS);
var ra = v.forwardRef(function(e, t) {
  return v.createElement(Ji, gn({}, e, { ref: t, sideCar: kS }));
});
ra.classNames = Ji.classNames;
var ES = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {}, il = 0, Tm = function(e) {
  return e && (e.host || Tm(e.parentNode));
}, NS = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Tm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, MS = function(e, t, n, r) {
  var o = NS(t, Array.isArray(e) ? e : [e]);
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
          var p = h.getAttribute(r), b = p !== null && p !== "false", m = (Kr.get(h) || 0) + 1, y = (s.get(h) || 0) + 1;
          Kr.set(h, m), s.set(h, y), a.push(h), m === 1 && b && Da.set(h, !0), y === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return f(t), i.clear(), il++, function() {
    a.forEach(function(u) {
      var h = Kr.get(u) - 1, p = s.get(u) - 1;
      Kr.set(u, h), s.set(u, p), h || (Da.has(u) || u.removeAttribute(r), Da.delete(u)), p || u.removeAttribute(n);
    }), il--, il || (Kr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), Da = /* @__PURE__ */ new WeakMap(), Ia = {});
  };
}, ec = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ES(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), MS(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, tc = "Dialog", [$m] = dt(tc), [PS, dn] = $m(tc), Wm = (e) => {
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
    caller: tc
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
Wm.displayName = tc;
var Lm = "DialogTrigger", Fm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Lm, n), s = ye(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": du(o.open),
        ...r,
        ref: s,
        onClick: Z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Fm.displayName = Lm;
var cu = "DialogPortal", [AS, Vm] = $m(cu, {
  forceMount: void 0
}), zm = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = dn(cu, t);
  return /* @__PURE__ */ d.jsx(AS, { scope: t, forceMount: n, children: v.Children.map(r, (a) => /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: a }) })) });
};
zm.displayName = cu;
var yi = "DialogOverlay", Bm = v.forwardRef(
  (e, t) => {
    const n = Vm(yi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(yi, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx(OS, { ...o, ref: t }) }) : null;
  }
);
Bm.displayName = yi;
var RS = /* @__PURE__ */ or("DialogOverlay.RemoveScroll"), OS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(yi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(ra, { as: RS, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        re.div,
        {
          "data-state": du(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Mr = "DialogContent", Hm = v.forwardRef(
  (e, t) => {
    const n = Vm(Mr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = dn(Mr, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(DS, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(IS, { ...o, ref: t }) });
  }
);
Hm.displayName = Mr;
var DS = v.forwardRef(
  (e, t) => {
    const n = dn(Mr, e.__scopeDialog), r = v.useRef(null), o = ye(t, n.contentRef, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return ec(s);
    }, []), /* @__PURE__ */ d.jsx(
      Gm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Z(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: Z(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), IS = v.forwardRef(
  (e, t) => {
    const n = dn(Mr, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Gm,
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
), Gm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = dn(Mr, n), c = v.useRef(null), l = ye(t, c);
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
              "data-state": du(i.open),
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
), lu = "DialogTitle", Ym = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(lu, n);
    return /* @__PURE__ */ d.jsx(re.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ym.displayName = lu;
var Km = "DialogDescription", jS = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Km, n);
    return /* @__PURE__ */ d.jsx(re.p, { id: o.descriptionId, ...r, ref: t });
  }
);
jS.displayName = Km;
var Um = "DialogClose", qm = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = dn(Um, n);
    return /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
qm.displayName = Um;
function du(e) {
  return e ? "open" : "closed";
}
var Xm = "DialogTitleWarning", [QT, Zm] = Z2(Xm, {
  contentName: Mr,
  titleName: lu,
  docsSlug: "dialog"
}), TS = ({ titleId: e }) => {
  const t = Zm(Xm), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, $S = "DialogDescriptionWarning", WS = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zm($S).contentName}}.`;
  return v.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, nc = Wm, LS = Fm, rc = zm, oc = Bm, sc = Hm, uu = Ym, Qm = qm;
function ac(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ic(e) {
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
var cc = "Checkbox", [FS] = dt(cc), [VS, fu] = FS(cc);
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
    caller: cc
  }), [b, m] = v.useState(null), [y, C] = v.useState(null), x = v.useRef(!1), g = b ? !!a || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: s,
    setChecked: p,
    control: b,
    setControl: m,
    name: i,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: x,
    required: l,
    defaultChecked: rr(o) ? !1 : o,
    isFormControl: g,
    bubbleInput: y,
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
var Jm = "CheckboxTrigger", ev = v.forwardRef(
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
      bubbleInput: b
    } = fu(Jm, e), m = ye(o, f), y = v.useRef(c);
    return v.useEffect(() => {
      const C = s == null ? void 0 : s.form;
      if (C) {
        const x = () => u(y.current);
        return C.addEventListener("reset", x), () => C.removeEventListener("reset", x);
      }
    }, [s, u]), /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": rr(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": av(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: m,
        onKeyDown: Z(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: Z(n, (C) => {
          u((x) => rr(x) ? !0 : !x), b && p && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
        })
      }
    );
  }
);
ev.displayName = Jm;
var tv = v.forwardRef(
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
            ev,
            {
              ...u,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ d.jsx(
            sv,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
tv.displayName = cc;
var nv = "CheckboxIndicator", rv = v.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = fu(nv, n);
    return /* @__PURE__ */ d.jsx(
      mt,
      {
        present: r || rr(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          re.span,
          {
            "data-state": av(s.checked),
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
rv.displayName = nv;
var ov = "CheckboxBubbleInput", sv = v.forwardRef(
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
    } = fu(ov, e), b = ye(n, p), m = ac(s), y = ic(r);
    v.useEffect(() => {
      const x = h;
      if (!x) return;
      const g = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(
        g,
        "checked"
      ).set, E = !o.current;
      if (m !== s && w) {
        const k = new Event("click", { bubbles: E });
        x.indeterminate = rr(s), w.call(x, rr(s) ? !1 : s), x.dispatchEvent(k);
      }
    }, [h, m, s, o]);
    const C = v.useRef(rr(s) ? !1 : s);
    return /* @__PURE__ */ d.jsx(
      re.input,
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
        ref: b,
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
sv.displayName = ov;
function BS(e) {
  return typeof e == "function";
}
function rr(e) {
  return e === "indeterminate";
}
function av(e) {
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
function Hl(e, t, n) {
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
function hu(e) {
  return e === "x" ? "y" : "x";
}
function pu(e) {
  return e === "y" ? "height" : "width";
}
const KS = /* @__PURE__ */ new Set(["top", "bottom"]);
function xn(e) {
  return KS.has(Bn(e)) ? "y" : "x";
}
function mu(e) {
  return hu(xn(e));
}
function US(e, t, n) {
  n === void 0 && (n = !1);
  const r = Do(e), o = mu(e), s = pu(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = wi(a)), [a, wi(a)];
}
function qS(e) {
  const t = wi(e);
  return [Gl(e), t, Gl(t)];
}
function Gl(e) {
  return e.replace(/start|end/g, (t) => YS[t]);
}
const xh = ["left", "right"], wh = ["right", "left"], XS = ["top", "bottom"], ZS = ["bottom", "top"];
function QS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? wh : xh : t ? xh : wh;
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
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Gl)))), s;
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
function iv(e) {
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
function Ch(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = xn(t), a = mu(t), i = pu(a), c = Bn(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
  } = Ch(l, r, c), h = r, p = {}, b = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: y,
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
      [y]: {
        ...p[y],
        ...S
      }
    }, w && b <= 50 && (b++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: f,
      y: u
    } = Ch(l, h, c)), m = -1);
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
  } = zn(t, e), b = iv(p), y = i[h ? u === "floating" ? "reference" : "floating" : u], C = Ci(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(y))) == null || n ? y : y.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
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
    top: (C.top - w.top + b.top) / S.y,
    bottom: (w.bottom - C.bottom + b.bottom) / S.y,
    left: (C.left - w.left + b.left) / S.x,
    right: (w.right - C.right + b.right) / S.x
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
    const u = iv(f), h = {
      x: n,
      y: r
    }, p = mu(o), b = pu(p), m = await a.getDimensions(l), y = p === "y", C = y ? "top" : "left", x = y ? "bottom" : "right", g = y ? "clientHeight" : "clientWidth", S = s.reference[b] + s.reference[p] - h[p] - s.floating[b], w = h[p] - s.reference[p], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = E ? E[g] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(E))) && (k = i.floating[g] || s.floating[b]);
    const N = S / 2 - w / 2, P = k / 2 - m[b] / 2 - 1, T = sr(u[C], P), O = sr(u[x], P), D = T, L = k - m[b] - O, V = k / 2 - m[b] / 2 + N, B = Hl(D, V, L), W = !c.arrow && Do(o) != null && V !== B && s.reference[b] / 2 - (V < D ? T : O) - m[b] / 2 < 0, Y = W ? V < D ? V - D : V - L : 0;
    return {
      [p]: h[p] + Y,
      data: {
        [p]: B,
        centerOffset: V - B - Y,
        ...W && {
          alignmentOffset: Y
        }
      },
      reset: W
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
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...y
      } = zn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = Bn(o), x = xn(i), g = Bn(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = h || (g || !m ? [wi(i)] : qS(i)), E = b !== "none";
      !h && E && w.push(...JS(i, m, b, S));
      const k = [i, ...w], N = await js(t, y), P = [];
      let T = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(N[C]), u) {
        const V = US(o, a, S);
        P.push(N[V[0]], N[V[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: P
      }], !P.every((V) => V <= 0)) {
        var O, D;
        const V = (((O = s.flip) == null ? void 0 : O.index) || 0) + 1, B = k[V];
        if (B && (!(u === "alignment" ? x !== xn(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((I) => xn(I.placement) === x ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: V,
              overflows: T
            },
            reset: {
              placement: B
            }
          };
        let W = (D = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, I) => Y.overflows[1] - I.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!W)
          switch (p) {
            case "bestFit": {
              var L;
              const Y = (L = T.filter((I) => {
                if (E) {
                  const $ = xn(I.placement);
                  return $ === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter(($) => $ > 0).reduce(($, te) => $ + te, 0)]).sort((I, $) => I[1] - $[1])[0]) == null ? void 0 : L[0];
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
function Sh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _h(e) {
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
          }), a = Sh(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: _h(a)
            }
          };
        }
        case "escaped": {
          const s = await js(t, {
            ...o,
            altBoundary: !0
          }), a = Sh(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: _h(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cv = /* @__PURE__ */ new Set(["left", "top"]);
async function s_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Bn(n), i = Do(n), c = xn(n) === "y", l = cv.has(a) ? -1 : 1, f = s && c ? -1 : 1, u = zn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: b
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return i && typeof b == "number" && (p = i === "end" ? b * -1 : b), c ? {
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
          fn: (y) => {
            let {
              x: C,
              y: x
            } = y;
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
      }, f = await js(t, c), u = xn(Bn(o)), h = hu(u);
      let p = l[h], b = l[u];
      if (s) {
        const y = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", x = p + f[y], g = p - f[C];
        p = Hl(x, p, g);
      }
      if (a) {
        const y = u === "y" ? "top" : "left", C = u === "y" ? "bottom" : "right", x = b + f[y], g = b - f[C];
        b = Hl(x, b, g);
      }
      const m = i.fn({
        ...t,
        [h]: p,
        [u]: b
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
      }, u = xn(o), h = hu(u);
      let p = f[h], b = f[u];
      const m = zn(i, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + y.mainAxis, w = s.reference[h] + s.reference[g] - y.mainAxis;
        p < S ? p = S : p > w && (p = w);
      }
      if (l) {
        var C, x;
        const g = h === "y" ? "width" : "height", S = cv.has(Bn(o)), w = s.reference[u] - s.floating[g] + (S && ((C = a.offset) == null ? void 0 : C[u]) || 0) + (S ? 0 : y.crossAxis), E = s.reference[u] + s.reference[g] + (S ? 0 : ((x = a.offset) == null ? void 0 : x[u]) || 0) - (S ? y.crossAxis : 0);
        b < w ? b = w : b > E && (b = E);
      }
      return {
        [h]: p,
        [u]: b
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
        width: b,
        height: m
      } = s.floating;
      let y, C;
      u === "top" || u === "bottom" ? (y = u, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = u, y = h === "end" ? "top" : "bottom");
      const x = m - f.top - f.bottom, g = b - f.left - f.right, S = sr(m - f[y], x), w = sr(b - f[C], g), E = !t.middlewareData.shift;
      let k = S, N = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = g), (r = t.middlewareData.shift) != null && r.enabled.y && (k = x), E && !h) {
        const T = Wt(f.left, 0), O = Wt(f.right, 0), D = Wt(f.top, 0), L = Wt(f.bottom, 0);
        p ? N = b - 2 * (T !== 0 || O !== 0 ? T + O : Wt(f.left, f.right)) : k = m - 2 * (D !== 0 || L !== 0 ? D + L : Wt(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: k
      });
      const P = await a.getDimensions(i.floating);
      return b !== P.width || m !== P.height ? {
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
  return lv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ft(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mn(e) {
  var t;
  return (t = (lv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function lv(e) {
  return lc() ? e instanceof Node || e instanceof Ft(e).Node : !1;
}
function an(e) {
  return lc() ? e instanceof Element || e instanceof Ft(e).Element : !1;
}
function _n(e) {
  return lc() ? e instanceof HTMLElement || e instanceof Ft(e).HTMLElement : !1;
}
function kh(e) {
  return !lc() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ft(e).ShadowRoot;
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
function dc(e) {
  return h_.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const p_ = ["transform", "translate", "scale", "rotate", "perspective"], m_ = ["transform", "translate", "scale", "rotate", "perspective", "filter"], v_ = ["paint", "layout", "strict", "content"];
function vu(e) {
  const t = gu(), n = an(e) ? cn(e) : e;
  return p_.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || m_.some((r) => (n.willChange || "").includes(r)) || v_.some((r) => (n.contain || "").includes(r));
}
function g_(e) {
  let t = ar(e);
  for (; _n(t) && !wo(t); ) {
    if (vu(t))
      return t;
    if (dc(t))
      return null;
    t = ar(t);
  }
  return null;
}
function gu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const b_ = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function wo(e) {
  return b_.has(Io(e));
}
function cn(e) {
  return Ft(e).getComputedStyle(e);
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
    kh(e) && e.host || // Fallback.
    Mn(e)
  );
  return kh(t) ? t.host : t;
}
function dv(e) {
  const t = ar(e);
  return wo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _n(t) && oa(t) ? t : dv(t);
}
function Ts(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = dv(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ft(o);
  if (s) {
    const i = Yl(a);
    return t.concat(a, a.visualViewport || [], oa(o) ? o : [], i && n ? Ts(i) : []);
  }
  return t.concat(o, Ts(o, [], n));
}
function Yl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function uv(e) {
  const t = cn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = _n(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = xi(n) !== s || xi(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function bu(e) {
  return an(e) ? e : e.contextElement;
}
function vo(e) {
  const t = bu(e);
  if (!_n(t))
    return Cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = uv(t);
  let a = (s ? xi(n.width) : n.width) / r, i = (s ? xi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const y_ = /* @__PURE__ */ Cn(0);
function fv(e) {
  const t = Ft(e);
  return !gu() || !t.visualViewport ? y_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ft(e) ? !1 : t;
}
function Pr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = bu(e);
  let a = Cn(1);
  t && (r ? an(r) && (a = vo(r)) : a = vo(e));
  const i = x_(s, n, r) ? fv(s) : Cn(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, u = o.height / a.y;
  if (s) {
    const h = Ft(s), p = r && an(r) ? Ft(r) : r;
    let b = h, m = Yl(b);
    for (; m && r && p !== b; ) {
      const y = vo(m), C = m.getBoundingClientRect(), x = cn(m), g = C.left + (m.clientLeft + parseFloat(x.paddingLeft)) * y.x, S = C.top + (m.clientTop + parseFloat(x.paddingTop)) * y.y;
      c *= y.x, l *= y.y, f *= y.x, u *= y.y, c += g, l += S, b = Ft(m), m = Yl(b);
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
function hv(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - fc(e, n), o = n.top + t.scrollTop;
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
  const h = a && !u && !s ? hv(a, c) : Cn(0);
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
  const t = Mn(e), n = uc(e), r = e.ownerDocument.body, o = Wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + fc(e);
  const i = -n.scrollTop;
  return cn(r).direction === "rtl" && (a += Wt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const Eh = 25;
function __(e, t) {
  const n = Ft(e), r = Mn(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = gu();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = fc(r);
  if (l <= 0) {
    const f = r.ownerDocument, u = f.body, h = getComputedStyle(u), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - u.clientWidth - p);
    b <= Eh && (s -= b);
  } else l <= Eh && (s += l);
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
function Nh(e, t, n) {
  let r;
  if (t === "viewport")
    r = __(e, n);
  else if (t === "document")
    r = S_(Mn(e));
  else if (an(t))
    r = E_(t, n);
  else {
    const o = fv(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ci(r);
}
function pv(e, t) {
  const n = ar(e);
  return n === t || !an(n) || wo(n) ? !1 : cn(n).position === "fixed" || pv(n, t);
}
function N_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ts(e, [], !1).filter((i) => an(i) && Io(i) !== "body"), o = null;
  const s = cn(e).position === "fixed";
  let a = s ? ar(e) : e;
  for (; an(a) && !wo(a); ) {
    const i = cn(a), c = vu(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && k_.has(o.position) || oa(a) && !c && pv(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = ar(a);
  }
  return t.set(e, r), r;
}
function M_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? dc(t) ? [] : N_(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((l, f) => {
    const u = Nh(t, f, o);
    return l.top = Wt(u.top, l.top), l.right = sr(u.right, l.right), l.bottom = sr(u.bottom, l.bottom), l.left = Wt(u.left, l.left), l;
  }, Nh(t, i, o));
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
  } = uv(e);
  return {
    width: t,
    height: n
  };
}
function A_(e, t, n) {
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
  const f = o && !r && !s ? hv(o, i) : Cn(0), u = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: u,
    y: h,
    width: a.width,
    height: a.height
  };
}
function cl(e) {
  return cn(e).position === "static";
}
function Mh(e, t) {
  if (!_n(e) || cn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Mn(e) === n && (n = n.ownerDocument.body), n;
}
function mv(e, t) {
  const n = Ft(e);
  if (dc(e))
    return n;
  if (!_n(e)) {
    let o = ar(e);
    for (; o && !wo(o); ) {
      if (an(o) && !cl(o))
        return o;
      o = ar(o);
    }
    return n;
  }
  let r = Mh(e, t);
  for (; r && f_(r) && cl(r); )
    r = Mh(r, t);
  return r && wo(r) && cl(r) && !vu(r) ? n : r || g_(e) || n;
}
const R_ = async function(e) {
  const t = this.getOffsetParent || mv, n = this.getDimensions, r = await n(e.floating);
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
  getDocumentElement: Mn,
  getClippingRect: M_,
  getOffsetParent: mv,
  getElementRects: R_,
  getClientRects: C_,
  getDimensions: P_,
  getScale: vo,
  isElement: an,
  isRTL: O_
};
function vv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function I_(e, t) {
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
    const b = ja(u), m = ja(o.clientWidth - (f + h)), y = ja(o.clientHeight - (u + p)), C = ja(f), g = {
      rootMargin: -b + "px " + -m + "px " + -y + "px " + -C + "px",
      threshold: Wt(0, sr(1, c)) || 1
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
      k === 1 && !vv(l, e.getBoundingClientRect()) && a(), S = !1;
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
  } = r, l = bu(e), f = o || s ? [...l ? Ts(l) : [], ...Ts(t)] : [];
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
  let b, m = c ? Pr(e) : null;
  c && y();
  function y() {
    const C = Pr(e);
    m && !vv(m, C) && n(), m = C, b = requestAnimationFrame(y);
  }
  return n(), () => {
    var C;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null || u(), (C = p) == null || C.disconnect(), p = null, c && cancelAnimationFrame(b);
  };
}
const T_ = a_, $_ = i_, W_ = r_, L_ = l_, F_ = o_, Ph = n_, V_ = c_, z_ = (e, t, n) => {
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
}, si = B_ ? Zd : H_;
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
function gv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ah(e, t) {
  const n = gv(e);
  return Math.round(t * n) / n;
}
function ll(e) {
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
  const [b, m] = v.useState(null), [y, C] = v.useState(null), x = v.useCallback((I) => {
    I !== E.current && (E.current = I, m(I));
  }, []), g = v.useCallback((I) => {
    I !== k.current && (k.current = I, C(I));
  }, []), S = s || b, w = a || y, E = v.useRef(null), k = v.useRef(null), N = v.useRef(f), P = c != null, T = ll(c), O = ll(o), D = ll(l), L = v.useCallback(() => {
    if (!E.current || !k.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: h
    };
    O.current && (I.platform = O.current), z_(E.current, k.current, I).then(($) => {
      const te = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: D.current !== !1
      };
      V.current && !Si(N.current, te) && (N.current = te, Js.flushSync(() => {
        u(te);
      }));
    });
  }, [h, t, n, O, D]);
  si(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, u((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const V = v.useRef(!1);
  si(() => (V.current = !0, () => {
    V.current = !1;
  }), []), si(() => {
    if (S && (E.current = S), w && (k.current = w), S && w) {
      if (T.current)
        return T.current(S, w, L);
      L();
    }
  }, [S, w, L, T, P]);
  const B = v.useMemo(() => ({
    reference: E,
    floating: k,
    setReference: x,
    setFloating: g
  }), [x, g]), W = v.useMemo(() => ({
    reference: S,
    floating: w
  }), [S, w]), Y = v.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return I;
    const $ = Ah(W.floating, f.x), te = Ah(W.floating, f.y);
    return i ? {
      ...I,
      transform: "translate(" + $ + "px, " + te + "px)",
      ...gv(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: te
    };
  }, [n, i, W.floating, f.x, f.y]);
  return v.useMemo(() => ({
    ...f,
    update: L,
    refs: B,
    elements: W,
    floatingStyles: Y
  }), [f, L, B, W, Y]);
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
      return r && t(r) ? r.current != null ? Ph({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ph({
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
var ek = "Arrow", bv = v.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    re.svg,
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
bv.displayName = ek;
var tk = bv, yu = "Popper", [yv, dr] = dt(yu), [nk, xv] = yv(yu), wv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return /* @__PURE__ */ d.jsx(nk, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
wv.displayName = yu;
var Cv = "PopperAnchor", Sv = v.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = xv(Cv, n), a = v.useRef(null), i = ye(t, a), c = v.useRef(null);
    return v.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d.jsx(re.div, { ...o, ref: i });
  }
);
Sv.displayName = Cv;
var xu = "PopperContent", [rk, ok] = yv(xu), _v = v.forwardRef(
  (e, t) => {
    var j, J, oe, de, me, ge;
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
      onPlaced: b,
      ...m
    } = e, y = xv(xu, n), [C, x] = v.useState(null), g = ye(t, (Se) => x(Se)), [S, w] = v.useState(null), E = ic(S), k = (E == null ? void 0 : E.width) ?? 0, N = (E == null ? void 0 : E.height) ?? 0, P = r + (s !== "center" ? "-" + s : ""), T = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, O = Array.isArray(l) ? l : [l], D = O.length > 0, L = {
      padding: T,
      boundary: O.filter(ak),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: V, floatingStyles: B, placement: W, isPositioned: Y, middlewareData: I } = G_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...Se) => j_(...Se, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        K_({ mainAxis: o + N, alignmentAxis: a }),
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
        ik({ arrowWidth: k, arrowHeight: N }),
        h && Q_({ strategy: "referenceHidden", ...L })
      ]
    }), [$, te] = Nv(W), A = Rt(b);
    lt(() => {
      Y && (A == null || A());
    }, [Y, A]);
    const M = (j = I.arrow) == null ? void 0 : j.x, F = (J = I.arrow) == null ? void 0 : J.y, z = ((oe = I.arrow) == null ? void 0 : oe.centerOffset) !== 0, [X, U] = v.useState();
    return lt(() => {
      C && U(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: Y ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: X,
          "--radix-popper-transform-origin": [
            (de = I.transformOrigin) == null ? void 0 : de.x,
            (me = I.transformOrigin) == null ? void 0 : me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ge = I.hide) == null ? void 0 : ge.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          rk,
          {
            scope: n,
            placedSide: $,
            onArrowChange: w,
            arrowX: M,
            arrowY: F,
            shouldHideArrow: z,
            children: /* @__PURE__ */ d.jsx(
              re.div,
              {
                "data-side": $,
                "data-align": te,
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
_v.displayName = xu;
var kv = "PopperArrow", sk = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ev = v.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = ok(kv, r), a = sk[s.placedSide];
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
Ev.displayName = kv;
function ak(e) {
  return e !== null;
}
var ik = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var y, C, x;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((y = o.arrow) == null ? void 0 : y.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = Nv(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let b = "", m = "";
    return l === "bottom" ? (b = a ? u : `${h}px`, m = `${-c}px`) : l === "top" ? (b = a ? u : `${h}px`, m = `${r.floating.height + c}px`) : l === "right" ? (b = `${-c}px`, m = a ? u : `${p}px`) : l === "left" && (b = `${r.floating.width + c}px`, m = a ? u : `${p}px`), { data: { x: b, y: m } };
  }
});
function Nv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var hc = wv, sa = Sv, pc = _v, mc = Ev, dl = "rovingFocusGroup.onEntryFocus", ck = { bubbles: !1, cancelable: !0 }, aa = "RovingFocusGroup", [Kl, Mv, lk] = ta(aa), [dk, jo] = dt(
  aa,
  [lk]
), [uk, fk] = dk(aa), Pv = v.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(Kl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Kl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(hk, { ...e, ref: t }) }) })
);
Pv.displayName = aa;
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
  } = e, h = v.useRef(null), p = ye(t, h), b = Oo(s), [m, y] = kt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: aa
  }), [C, x] = v.useState(!1), g = Rt(l), S = Mv(n), w = v.useRef(!1), [E, k] = v.useState(0);
  return v.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(dl, g), () => N.removeEventListener(dl, g);
  }, [g]), /* @__PURE__ */ d.jsx(
    uk,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: m,
      onItemFocus: v.useCallback(
        (N) => y(N),
        [y]
      ),
      onItemShiftTab: v.useCallback(() => x(!0), []),
      onFocusableItemAdd: v.useCallback(
        () => k((N) => N + 1),
        []
      ),
      onFocusableItemRemove: v.useCallback(
        () => k((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        re.div,
        {
          tabIndex: C || E === 0 ? -1 : 0,
          "data-orientation": r,
          ...u,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Z(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: Z(e.onFocus, (N) => {
            const P = !w.current;
            if (N.target === N.currentTarget && P && !C) {
              const T = new CustomEvent(dl, ck);
              if (N.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const O = S().filter((W) => W.focusable), D = O.find((W) => W.active), L = O.find((W) => W.id === m), B = [D, L, ...O].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Ov(B, f);
              }
            }
            w.current = !1;
          }),
          onBlur: Z(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Av = "RovingFocusGroupItem", Rv = v.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Ze(), l = s || c, f = fk(Av, n), u = f.currentTabStopId === l, h = Mv(n), { onFocusableItemAdd: p, onFocusableItemRemove: b, currentTabStopId: m } = f;
    return v.useEffect(() => {
      if (r)
        return p(), () => b();
    }, [r, p, b]), /* @__PURE__ */ d.jsx(
      Kl.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          re.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: Z(e.onMouseDown, (y) => {
              r ? f.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: Z(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: Z(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const C = vk(y, f.orientation, f.dir);
              if (C !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let g = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (C === "last") g.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && g.reverse();
                  const S = g.indexOf(y.currentTarget);
                  g = f.loop ? gk(g, S + 1) : g.slice(S + 1);
                }
                setTimeout(() => Ov(g));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: u, hasTabStop: m != null }) : a
          }
        )
      }
    );
  }
);
Rv.displayName = Av;
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
function Ov(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function gk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var wu = Pv, Cu = Rv, Ul = ["Enter", " "], bk = ["ArrowDown", "PageUp", "Home"], Dv = ["ArrowUp", "PageDown", "End"], yk = [...bk, ...Dv], xk = {
  ltr: [...Ul, "ArrowRight"],
  rtl: [...Ul, "ArrowLeft"]
}, wk = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ia = "Menu", [$s, Ck, Sk] = ta(ia), [Wr, Iv] = dt(ia, [
  Sk,
  dr,
  jo
]), vc = dr(), jv = jo(), [_k, Lr] = Wr(ia), [kk, ca] = Wr(ia), Tv = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = vc(t), [c, l] = v.useState(null), f = v.useRef(!1), u = Rt(s), h = Oo(o);
  return v.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ d.jsx(hc, { ...i, children: /* @__PURE__ */ d.jsx(
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
Tv.displayName = ia;
var Ek = "MenuAnchor", Su = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = vc(n);
    return /* @__PURE__ */ d.jsx(sa, { ...o, ...r, ref: t });
  }
);
Su.displayName = Ek;
var _u = "MenuPortal", [Nk, $v] = Wr(_u, {
  forceMount: void 0
}), Wv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Lr(_u, t);
  return /* @__PURE__ */ d.jsx(Nk, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
Wv.displayName = _u;
var Yt = "MenuContent", [Mk, ku] = Wr(Yt), Lv = v.forwardRef(
  (e, t) => {
    const n = $v(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(Yt, e.__scopeMenu), a = ca(Yt, e.__scopeMenu);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ d.jsx(Pk, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(Ak, { ...o, ref: t }) }) }) });
  }
), Pk = v.forwardRef(
  (e, t) => {
    const n = Lr(Yt, e.__scopeMenu), r = v.useRef(null), o = ye(t, r);
    return v.useEffect(() => {
      const s = r.current;
      if (s) return ec(s);
    }, []), /* @__PURE__ */ d.jsx(
      Eu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Z(
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
    Eu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Rk = /* @__PURE__ */ or("MenuContent.ScrollLock"), Eu = v.forwardRef(
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
      disableOutsideScroll: b,
      ...m
    } = e, y = Lr(Yt, n), C = ca(Yt, n), x = vc(n), g = jv(n), S = Ck(n), [w, E] = v.useState(null), k = v.useRef(null), N = ye(t, k, y.onContentChange), P = v.useRef(0), T = v.useRef(""), O = v.useRef(0), D = v.useRef(null), L = v.useRef("right"), V = v.useRef(0), B = b ? ra : v.Fragment, W = b ? { as: Rk, allowPinchZoom: !0 } : void 0, Y = ($) => {
      var j, J;
      const te = T.current + $, A = S().filter((oe) => !oe.disabled), M = document.activeElement, F = (j = A.find((oe) => oe.ref.current === M)) == null ? void 0 : j.textValue, z = A.map((oe) => oe.textValue), X = Bk(z, te, F), U = (J = A.find((oe) => oe.textValue === X)) == null ? void 0 : J.ref.current;
      (function oe(de) {
        T.current = de, window.clearTimeout(P.current), de !== "" && (P.current = window.setTimeout(() => oe(""), 1e3));
      })(te), U && setTimeout(() => U.focus());
    };
    v.useEffect(() => () => window.clearTimeout(P.current), []), Qi();
    const I = v.useCallback(($) => {
      var A, M;
      return L.current === ((A = D.current) == null ? void 0 : A.side) && Gk($, (M = D.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ d.jsx(
      Mk,
      {
        scope: n,
        searchRef: T,
        onItemEnter: v.useCallback(
          ($) => {
            I($) && $.preventDefault();
          },
          [I]
        ),
        onItemLeave: v.useCallback(
          ($) => {
            var te;
            I($) || ((te = k.current) == null || te.focus(), E(null));
          },
          [I]
        ),
        onTriggerLeave: v.useCallback(
          ($) => {
            I($) && $.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: v.useCallback(($) => {
          D.current = $;
        }, []),
        children: /* @__PURE__ */ d.jsx(B, { ...W, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Z(s, ($) => {
              var te;
              $.preventDefault(), (te = k.current) == null || te.focus({ preventScroll: !0 });
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
                  wu,
                  {
                    asChild: !0,
                    ...g,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: E,
                    onEntryFocus: Z(c, ($) => {
                      C.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ d.jsx(
                      pc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": tg(y.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...x,
                        ...m,
                        ref: N,
                        style: { outline: "none", ...m.style },
                        onKeyDown: Z(m.onKeyDown, ($) => {
                          const A = $.target.closest("[data-radix-menu-content]") === $.currentTarget, M = $.ctrlKey || $.altKey || $.metaKey, F = $.key.length === 1;
                          A && ($.key === "Tab" && $.preventDefault(), !M && F && Y($.key));
                          const z = k.current;
                          if ($.target !== z || !yk.includes($.key)) return;
                          $.preventDefault();
                          const U = S().filter((j) => !j.disabled).map((j) => j.ref.current);
                          Dv.includes($.key) && U.reverse(), Vk(U);
                        }),
                        onBlur: Z(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(P.current), T.current = "");
                        }),
                        onPointerMove: Z(
                          e.onPointerMove,
                          Ws(($) => {
                            const te = $.target, A = V.current !== $.clientX;
                            if ($.currentTarget.contains(te) && A) {
                              const M = $.clientX > V.current ? "right" : "left";
                              L.current = M, V.current = $.clientX;
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
Lv.displayName = Yt;
var Ok = "MenuGroup", Nu = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(re.div, { role: "group", ...r, ref: t });
  }
);
Nu.displayName = Ok;
var Dk = "MenuLabel", Fv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(re.div, { ...r, ref: t });
  }
);
Fv.displayName = Dk;
var _i = "MenuItem", Rh = "menu.itemSelect", gc = v.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = v.useRef(null), a = ca(_i, e.__scopeMenu), i = ku(_i, e.__scopeMenu), c = ye(t, s), l = v.useRef(!1), f = () => {
      const u = s.current;
      if (!n && u) {
        const h = new CustomEvent(Rh, { bubbles: !0, cancelable: !0 });
        u.addEventListener(Rh, (p) => r == null ? void 0 : r(p), { once: !0 }), tu(u, h), h.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ d.jsx(
      Vv,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: Z(e.onClick, f),
        onPointerDown: (u) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, u), l.current = !0;
        },
        onPointerUp: Z(e.onPointerUp, (u) => {
          var h;
          l.current || (h = u.currentTarget) == null || h.click();
        }),
        onKeyDown: Z(e.onKeyDown, (u) => {
          const h = i.searchRef.current !== "";
          n || h && u.key === " " || Ul.includes(u.key) && (u.currentTarget.click(), u.preventDefault());
        })
      }
    );
  }
);
gc.displayName = _i;
var Vv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = ku(_i, n), i = jv(n), c = v.useRef(null), l = ye(t, c), [f, u] = v.useState(!1), [h, p] = v.useState("");
    return v.useEffect(() => {
      const b = c.current;
      b && p((b.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ d.jsx(
      $s.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ d.jsx(Cu, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ d.jsx(
          re.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: Z(
              e.onPointerMove,
              Ws((b) => {
                r ? a.onItemLeave(b) : (a.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Z(
              e.onPointerLeave,
              Ws((b) => a.onItemLeave(b))
            ),
            onFocus: Z(e.onFocus, () => u(!0)),
            onBlur: Z(e.onBlur, () => u(!1))
          }
        ) })
      }
    );
  }
), Ik = "MenuCheckboxItem", zv = v.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(Kv, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ d.jsx(
      gc,
      {
        role: "menuitemcheckbox",
        "aria-checked": ki(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Pu(n),
        onSelect: Z(
          o.onSelect,
          () => r == null ? void 0 : r(ki(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
zv.displayName = Ik;
var Bv = "MenuRadioGroup", [jk, Tk] = Wr(
  Bv,
  { value: void 0, onValueChange: () => {
  } }
), Hv = v.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = Rt(r);
    return /* @__PURE__ */ d.jsx(jk, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ d.jsx(Nu, { ...o, ref: t }) });
  }
);
Hv.displayName = Bv;
var Gv = "MenuRadioItem", Yv = v.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Tk(Gv, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ d.jsx(Kv, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ d.jsx(
      gc,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Pu(s),
        onSelect: Z(
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
Yv.displayName = Gv;
var Mu = "MenuItemIndicator", [Kv, $k] = Wr(
  Mu,
  { checked: !1 }
), Uv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = $k(Mu, n);
    return /* @__PURE__ */ d.jsx(
      mt,
      {
        present: r || ki(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          re.span,
          {
            ...o,
            ref: t,
            "data-state": Pu(s.checked)
          }
        )
      }
    );
  }
);
Uv.displayName = Mu;
var Wk = "MenuSeparator", qv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(
      re.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
qv.displayName = Wk;
var Lk = "MenuArrow", Xv = v.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = vc(n);
    return /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
Xv.displayName = Lk;
var Fk = "MenuSub", [JT, Zv] = Wr(Fk), ss = "MenuSubTrigger", Qv = v.forwardRef(
  (e, t) => {
    const n = Lr(ss, e.__scopeMenu), r = ca(ss, e.__scopeMenu), o = Zv(ss, e.__scopeMenu), s = ku(ss, e.__scopeMenu), a = v.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, l = { __scopeMenu: e.__scopeMenu }, f = v.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return v.useEffect(() => f, [f]), v.useEffect(() => {
      const u = i.current;
      return () => {
        window.clearTimeout(u), c(null);
      };
    }, [i, c]), /* @__PURE__ */ d.jsx(Su, { asChild: !0, ...l, children: /* @__PURE__ */ d.jsx(
      Vv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": tg(n.open),
        ...e,
        ref: Vn(t, o.onTriggerChange),
        onClick: (u) => {
          var h;
          (h = e.onClick) == null || h.call(e, u), !(e.disabled || u.defaultPrevented) && (u.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Z(
          e.onPointerMove,
          Ws((u) => {
            s.onItemEnter(u), !u.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: Z(
          e.onPointerLeave,
          Ws((u) => {
            var p, b;
            f();
            const h = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (h) {
              const m = (b = n.content) == null ? void 0 : b.dataset.side, y = m === "right", C = y ? -5 : 5, x = h[y ? "left" : "right"], g = h[y ? "right" : "left"];
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
        onKeyDown: Z(e.onKeyDown, (u) => {
          var p;
          const h = s.searchRef.current !== "";
          e.disabled || h && u.key === " " || xk[r.dir].includes(u.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), u.preventDefault());
        })
      }
    ) });
  }
);
Qv.displayName = ss;
var Jv = "MenuSubContent", eg = v.forwardRef(
  (e, t) => {
    const n = $v(Yt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Lr(Yt, e.__scopeMenu), a = ca(Yt, e.__scopeMenu), i = Zv(Jv, e.__scopeMenu), c = v.useRef(null), l = ye(t, c);
    return /* @__PURE__ */ d.jsx($s.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: /* @__PURE__ */ d.jsx($s.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ d.jsx(
      Eu,
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
        onFocusOutside: Z(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: Z(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: Z(e.onKeyDown, (f) => {
          var p;
          const u = f.currentTarget.contains(f.target), h = wk[a.dir].includes(f.key);
          u && h && (s.onOpenChange(!1), (p = i.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
eg.displayName = Jv;
function tg(e) {
  return e ? "open" : "closed";
}
function ki(e) {
  return e === "indeterminate";
}
function Pu(e) {
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
var Yk = Tv, Kk = Su, Uk = Wv, qk = Lv, Xk = Nu, Zk = Fv, Qk = gc, Jk = zv, eE = Hv, tE = Yv, nE = Uv, rE = qv, oE = Xv, sE = Qv, aE = eg, bc = "DropdownMenu", [iE] = dt(
  bc,
  [Iv]
), Et = Iv(), [cE, ng] = iE(bc), rg = (e) => {
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
    caller: bc
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
rg.displayName = bc;
var og = "DropdownMenuTrigger", sg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = ng(og, n), a = Et(n);
    return /* @__PURE__ */ d.jsx(Kk, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      re.button,
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
        onPointerDown: Z(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: Z(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
sg.displayName = og;
var lE = "DropdownMenuPortal", ag = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Et(t);
  return /* @__PURE__ */ d.jsx(Uk, { ...r, ...n });
};
ag.displayName = lE;
var ig = "DropdownMenuContent", cg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ng(ig, n), s = Et(n), a = v.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      qk,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (i) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: Z(e.onInteractOutside, (i) => {
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
cg.displayName = ig;
var dE = "DropdownMenuGroup", uE = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Xk, { ...o, ...r, ref: t });
  }
);
uE.displayName = dE;
var fE = "DropdownMenuLabel", lg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Zk, { ...o, ...r, ref: t });
  }
);
lg.displayName = fE;
var hE = "DropdownMenuItem", dg = v.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
    return /* @__PURE__ */ d.jsx(Qk, { ...o, ...r, ref: t });
  }
);
dg.displayName = hE;
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
var bE = "DropdownMenuRadioItem", yE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(tE, { ...o, ...r, ref: t });
});
yE.displayName = bE;
var xE = "DropdownMenuItemIndicator", wE = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(nE, { ...o, ...r, ref: t });
});
wE.displayName = xE;
var CE = "DropdownMenuSeparator", ug = v.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Et(n);
  return /* @__PURE__ */ d.jsx(rE, { ...o, ...r, ref: t });
});
ug.displayName = CE;
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
var NE = "DropdownMenuSubContent", ME = v.forwardRef((e, t) => {
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
ME.displayName = NE;
var PE = rg, AE = sg, RE = ag, OE = cg, DE = lg, Oh = dg, IE = ug;
function Dh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var yc = "Popover", [fg] = dt(yc, [
  dr
]), la = dr(), [jE, ur] = fg(yc), hg = (e) => {
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
  return /* @__PURE__ */ d.jsx(hc, { ...i, children: /* @__PURE__ */ d.jsx(
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
hg.displayName = yc;
var pg = "PopoverAnchor", mg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(pg, n), s = la(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return v.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ d.jsx(sa, { ...s, ...r, ref: t });
  }
);
mg.displayName = pg;
var vg = "PopoverTrigger", gg = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(vg, n), s = la(n), a = ye(t, o.triggerRef), i = /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Cg(o.open),
        ...r,
        ref: a,
        onClick: Z(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: i });
  }
);
gg.displayName = vg;
var Au = "PopoverPortal", [TE, $E] = fg(Au, {
  forceMount: void 0
}), bg = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ur(Au, t);
  return /* @__PURE__ */ d.jsx(TE, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
bg.displayName = Au;
var Co = "PopoverContent", yg = v.forwardRef(
  (e, t) => {
    const n = $E(Co, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ur(Co, e.__scopePopover);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(LE, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(FE, { ...o, ref: t }) });
  }
);
yg.displayName = Co;
var WE = /* @__PURE__ */ or("PopoverContent.RemoveScroll"), LE = v.forwardRef(
  (e, t) => {
    const n = ur(Co, e.__scopePopover), r = v.useRef(null), o = ye(t, r), s = v.useRef(!1);
    return v.useEffect(() => {
      const a = r.current;
      if (a) return ec(a);
    }, []), /* @__PURE__ */ d.jsx(ra, { as: WE, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
      xg,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Z(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Z(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Z(
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
      xg,
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
), xg = v.forwardRef(
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
                "data-state": Cg(h.open),
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
), wg = "PopoverClose", VE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ur(wg, n);
    return /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
VE.displayName = wg;
var zE = "PopoverArrow", BE = v.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = la(n);
    return /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
BE.displayName = zE;
function Cg(e) {
  return e ? "open" : "closed";
}
var Sg = hg, HE = mg, _g = gg, kg = bg, Ru = yg, Ou = "Progress", Du = 100, [GE] = dt(Ou), [YE, KE] = GE(Ou), Eg = v.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = UE,
      ...a
    } = e;
    (o || o === 0) && !Ih(o) && console.error(qE(`${o}`, "Progress"));
    const i = Ih(o) ? o : Du;
    r !== null && !jh(r, i) && console.error(XE(`${r}`, "Progress"));
    const c = jh(r, i) ? r : null, l = Ei(c) ? s(c, i) : void 0;
    return /* @__PURE__ */ d.jsx(YE, { scope: n, value: c, max: i, children: /* @__PURE__ */ d.jsx(
      re.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Ei(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": Pg(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
Eg.displayName = Ou;
var Ng = "ProgressIndicator", Mg = v.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = KE(Ng, n);
    return /* @__PURE__ */ d.jsx(
      re.div,
      {
        "data-state": Pg(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Mg.displayName = Ng;
function UE(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Pg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ei(e) {
  return typeof e == "number";
}
function Ih(e) {
  return Ei(e) && !isNaN(e) && e > 0;
}
function jh(e, t) {
  return Ei(e) && !isNaN(e) && e <= t && e >= 0;
}
function qE(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Du}\`.`;
}
function XE(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Du} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ZE = Eg, QE = Mg, Iu = "Radio", [JE, Ag] = dt(Iu), [eN, tN] = JE(Iu), Rg = v.forwardRef(
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
    } = e, [u, h] = v.useState(null), p = ye(t, (y) => h(y)), b = v.useRef(!1), m = u ? l || !!u.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(eN, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        re.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": jg(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: p,
          onClick: Z(e.onClick, (y) => {
            o || c == null || c(), m && (b.current = y.isPropagationStopped(), b.current || y.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ d.jsx(
        Ig,
        {
          control: u,
          bubbles: !b.current,
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
Rg.displayName = Iu;
var Og = "RadioIndicator", Dg = v.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = tN(Og, n);
    return /* @__PURE__ */ d.jsx(mt, { present: r || s.checked, children: /* @__PURE__ */ d.jsx(
      re.span,
      {
        "data-state": jg(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Dg.displayName = Og;
var nN = "RadioBubbleInput", Ig = v.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = ye(a, s), c = ac(n), l = ic(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const b = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(b);
      }
    }, [c, n, r]), /* @__PURE__ */ d.jsx(
      re.input,
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
Ig.displayName = nN;
function jg(e) {
  return e ? "checked" : "unchecked";
}
var rN = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xc = "RadioGroup", [oN] = dt(xc, [
  jo,
  Ag
]), Tg = jo(), $g = Ag(), [sN, aN] = oN(xc), Wg = v.forwardRef(
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
    } = e, p = Tg(n), b = Oo(l), [m, y] = kt({
      prop: s,
      defaultProp: o ?? null,
      onChange: u,
      caller: xc
    });
    return /* @__PURE__ */ d.jsx(
      sN,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: m,
        onValueChange: y,
        children: /* @__PURE__ */ d.jsx(
          wu,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: b,
            loop: f,
            children: /* @__PURE__ */ d.jsx(
              re.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: b,
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
Wg.displayName = xc;
var Lg = "RadioGroupItem", Fg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = aN(Lg, n), a = s.disabled || r, i = Tg(n), c = $g(n), l = v.useRef(null), f = ye(t, l), u = s.value === o.value, h = v.useRef(!1);
    return v.useEffect(() => {
      const p = (m) => {
        rN.includes(m.key) && (h.current = !0);
      }, b = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ d.jsx(
      Cu,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: u,
        children: /* @__PURE__ */ d.jsx(
          Rg,
          {
            disabled: a,
            required: s.required,
            checked: u,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: Z((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: Z(o.onFocus, () => {
              var p;
              h.current && ((p = l.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Fg.displayName = Lg;
var iN = "RadioGroupIndicator", Vg = v.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = $g(n);
    return /* @__PURE__ */ d.jsx(Dg, { ...o, ...r, ref: t });
  }
);
Vg.displayName = iN;
var cN = Wg, lN = Fg, dN = Vg, uN = [" ", "Enter", "ArrowUp", "ArrowDown"], fN = [" ", "Enter"], Ar = "Select", [wc, Cc, hN] = ta(Ar), [To] = dt(Ar, [
  hN,
  dr
]), Sc = dr(), [pN, fr] = To(Ar), [mN, vN] = To(Ar), zg = (e) => {
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
    form: b
  } = e, m = Sc(t), [y, C] = v.useState(null), [x, g] = v.useState(null), [S, w] = v.useState(!1), E = Oo(l), [k, N] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ar
  }), [P, T] = kt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Ar
  }), O = v.useRef(null), D = y ? b || !!y.closest("form") : !0, [L, V] = v.useState(/* @__PURE__ */ new Set()), B = Array.from(L).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ d.jsx(hc, { ...m, children: /* @__PURE__ */ d.jsxs(
    pN,
    {
      required: p,
      scope: t,
      trigger: y,
      onTriggerChange: C,
      valueNode: x,
      onValueNodeChange: g,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: w,
      contentId: Ze(),
      value: P,
      onValueChange: T,
      open: k,
      onOpenChange: N,
      dir: E,
      triggerPointerDownPosRef: O,
      disabled: h,
      children: [
        /* @__PURE__ */ d.jsx(wc.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          mN,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: v.useCallback((W) => {
              V((Y) => new Set(Y).add(W));
            }, []),
            onNativeOptionRemove: v.useCallback((W) => {
              V((Y) => {
                const I = new Set(Y);
                return I.delete(W), I;
              });
            }, []),
            children: n
          }
        ) }),
        D ? /* @__PURE__ */ d.jsxs(
          pb,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: u,
            value: P,
            onChange: (W) => T(W.target.value),
            disabled: h,
            form: b,
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
zg.displayName = Ar;
var Bg = "SelectTrigger", Hg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Sc(n), a = fr(Bg, n), i = a.disabled || r, c = ye(t, a.onTriggerChange), l = Cc(n), f = v.useRef("touch"), [u, h, p] = vb((m) => {
      const y = l().filter((g) => !g.disabled), C = y.find((g) => g.value === a.value), x = gb(y, m, C);
      x !== void 0 && a.onValueChange(x.value);
    }), b = (m) => {
      i || (a.onOpenChange(!0), p()), m && (a.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
      re.button,
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
        "data-placeholder": mb(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Z(o.onClick, (m) => {
          m.currentTarget.focus(), f.current !== "mouse" && b(m);
        }),
        onPointerDown: Z(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const y = m.target;
          y.hasPointerCapture(m.pointerId) && y.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && m.pointerType === "mouse" && (b(m), m.preventDefault());
        }),
        onKeyDown: Z(o.onKeyDown, (m) => {
          const y = u.current !== "";
          !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && h(m.key), !(y && m.key === " ") && uN.includes(m.key) && (b(), m.preventDefault());
        })
      }
    ) });
  }
);
Hg.displayName = Bg;
var Gg = "SelectValue", Yg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = fr(Gg, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, u = ye(t, c.onValueNodeChange);
    return lt(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d.jsx(
      re.span,
      {
        ...i,
        ref: u,
        style: { pointerEvents: "none" },
        children: mb(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: a }) : s
      }
    );
  }
);
Yg.displayName = Gg;
var gN = "SelectIcon", Kg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d.jsx(re.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Kg.displayName = gN;
var bN = "SelectPortal", Ug = (e) => /* @__PURE__ */ d.jsx($r, { asChild: !0, ...e });
Ug.displayName = bN;
var Rr = "SelectContent", qg = v.forwardRef(
  (e, t) => {
    const n = fr(Rr, e.__scopeSelect), [r, o] = v.useState();
    if (lt(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Js.createPortal(
        /* @__PURE__ */ d.jsx(Xg, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(wc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Zg, { ...e, ref: t });
  }
);
qg.displayName = Rr;
var tn = 10, [Xg, hr] = To(Rr), yN = "SelectContentImpl", xN = /* @__PURE__ */ or("SelectContent.RemoveScroll"), Zg = v.forwardRef(
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
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: y,
      //
      ...C
    } = e, x = fr(Rr, n), [g, S] = v.useState(null), [w, E] = v.useState(null), k = ye(t, (j) => S(j)), [N, P] = v.useState(null), [T, O] = v.useState(
      null
    ), D = Cc(n), [L, V] = v.useState(!1), B = v.useRef(!1);
    v.useEffect(() => {
      if (g) return ec(g);
    }, [g]), Qi();
    const W = v.useCallback(
      (j) => {
        const [J, ...oe] = D().map((ge) => ge.ref.current), [de] = oe.slice(-1), me = document.activeElement;
        for (const ge of j)
          if (ge === me || (ge == null || ge.scrollIntoView({ block: "nearest" }), ge === J && w && (w.scrollTop = 0), ge === de && w && (w.scrollTop = w.scrollHeight), ge == null || ge.focus(), document.activeElement !== me)) return;
      },
      [D, w]
    ), Y = v.useCallback(
      () => W([N, g]),
      [W, N, g]
    );
    v.useEffect(() => {
      L && Y();
    }, [L, Y]);
    const { onOpenChange: I, triggerPointerDownPosRef: $ } = x;
    v.useEffect(() => {
      if (g) {
        let j = { x: 0, y: 0 };
        const J = (de) => {
          var me, ge;
          j = {
            x: Math.abs(Math.round(de.pageX) - (((me = $.current) == null ? void 0 : me.x) ?? 0)),
            y: Math.abs(Math.round(de.pageY) - (((ge = $.current) == null ? void 0 : ge.y) ?? 0))
          };
        }, oe = (de) => {
          j.x <= 10 && j.y <= 10 ? de.preventDefault() : g.contains(de.target) || I(!1), document.removeEventListener("pointermove", J), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", J), document.addEventListener("pointerup", oe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", J), document.removeEventListener("pointerup", oe, { capture: !0 });
        };
      }
    }, [g, I, $]), v.useEffect(() => {
      const j = () => I(!1);
      return window.addEventListener("blur", j), window.addEventListener("resize", j), () => {
        window.removeEventListener("blur", j), window.removeEventListener("resize", j);
      };
    }, [I]);
    const [te, A] = vb((j) => {
      const J = D().filter((me) => !me.disabled), oe = J.find((me) => me.ref.current === document.activeElement), de = gb(J, j, oe);
      de && setTimeout(() => de.ref.current.focus());
    }), M = v.useCallback(
      (j, J, oe) => {
        const de = !B.current && !oe;
        (x.value !== void 0 && x.value === J || de) && (P(j), de && (B.current = !0));
      },
      [x.value]
    ), F = v.useCallback(() => g == null ? void 0 : g.focus(), [g]), z = v.useCallback(
      (j, J, oe) => {
        const de = !B.current && !oe;
        (x.value !== void 0 && x.value === J || de) && O(j);
      },
      [x.value]
    ), X = r === "popper" ? ql : Qg, U = X === ql ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: u,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: b,
      hideWhenDetached: m,
      avoidCollisions: y
    } : {};
    return /* @__PURE__ */ d.jsx(
      Xg,
      {
        scope: n,
        content: g,
        viewport: w,
        onViewportChange: E,
        itemRefCallback: M,
        selectedItem: N,
        onItemLeave: F,
        itemTextRefCallback: z,
        focusSelectedItem: Y,
        selectedItemText: T,
        position: r,
        isPositioned: L,
        searchRef: te,
        children: /* @__PURE__ */ d.jsx(ra, { as: xN, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          na,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (j) => {
              j.preventDefault();
            },
            onUnmountAutoFocus: Z(o, (j) => {
              var J;
              (J = x.trigger) == null || J.focus({ preventScroll: !0 }), j.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (j) => j.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  X,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (j) => j.preventDefault(),
                    ...C,
                    ...U,
                    onPlaced: () => V(!0),
                    ref: k,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: Z(C.onKeyDown, (j) => {
                      const J = j.ctrlKey || j.altKey || j.metaKey;
                      if (j.key === "Tab" && j.preventDefault(), !J && j.key.length === 1 && A(j.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(j.key)) {
                        let de = D().filter((me) => !me.disabled).map((me) => me.ref.current);
                        if (["ArrowUp", "End"].includes(j.key) && (de = de.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(j.key)) {
                          const me = j.target, ge = de.indexOf(me);
                          de = de.slice(ge + 1);
                        }
                        setTimeout(() => W(de)), j.preventDefault();
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
Zg.displayName = yN;
var wN = "SelectItemAlignedPosition", Qg = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = fr(Rr, n), a = hr(Rr, n), [i, c] = v.useState(null), [l, f] = v.useState(null), u = ye(t, (k) => f(k)), h = Cc(n), p = v.useRef(!1), b = v.useRef(!0), { viewport: m, selectedItem: y, selectedItemText: C, focusSelectedItem: x } = a, g = v.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && m && y && C) {
      const k = s.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), P = s.valueNode.getBoundingClientRect(), T = C.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const me = T.left - N.left, ge = P.left - me, Se = k.left - ge, Ie = k.width + Se, Te = Math.max(Ie, N.width), ut = window.innerWidth - tn, Xe = Dh(ge, [
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
        const me = N.right - T.right, ge = window.innerWidth - P.right - me, Se = window.innerWidth - k.right - ge, Ie = k.width + Se, Te = Math.max(Ie, N.width), ut = window.innerWidth - tn, Xe = Dh(ge, [
          tn,
          Math.max(tn, ut - Te)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = Xe + "px";
      }
      const O = h(), D = window.innerHeight - tn * 2, L = m.scrollHeight, V = window.getComputedStyle(l), B = parseInt(V.borderTopWidth, 10), W = parseInt(V.paddingTop, 10), Y = parseInt(V.borderBottomWidth, 10), I = parseInt(V.paddingBottom, 10), $ = B + W + L + I + Y, te = Math.min(y.offsetHeight * 5, $), A = window.getComputedStyle(m), M = parseInt(A.paddingTop, 10), F = parseInt(A.paddingBottom, 10), z = k.top + k.height / 2 - tn, X = D - z, U = y.offsetHeight / 2, j = y.offsetTop + U, J = B + W + j, oe = $ - J;
      if (J <= z) {
        const me = O.length > 0 && y === O[O.length - 1].ref.current;
        i.style.bottom = "0px";
        const ge = l.clientHeight - m.offsetTop - m.offsetHeight, Se = Math.max(
          X,
          U + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (me ? F : 0) + ge + Y
        ), Ie = J + Se;
        i.style.height = Ie + "px";
      } else {
        const me = O.length > 0 && y === O[0].ref.current;
        i.style.top = "0px";
        const Se = Math.max(
          z,
          B + m.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (me ? M : 0) + U
        ) + oe;
        i.style.height = Se + "px", m.scrollTop = J - z + m.offsetTop;
      }
      i.style.margin = `${tn}px 0`, i.style.minHeight = te + "px", i.style.maxHeight = D + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
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
  lt(() => g(), [g]);
  const [S, w] = v.useState();
  lt(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = v.useCallback(
    (k) => {
      k && b.current === !0 && (g(), x == null || x(), b.current = !1);
    },
    [g, x]
  );
  return /* @__PURE__ */ d.jsx(
    SN,
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
            re.div,
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
Qg.displayName = wN;
var CN = "SelectPopperPosition", ql = v.forwardRef((e, t) => {
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
ql.displayName = CN;
var [SN, ju] = To(Rr, {}), Xl = "SelectViewport", Jg = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = hr(Xl, n), a = ju(Xl, n), i = ye(t, s.onViewportChange), c = v.useRef(0);
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
        re.div,
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
          onScroll: Z(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && u) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const b = window.innerHeight - tn * 2, m = parseFloat(u.style.minHeight), y = parseFloat(u.style.height), C = Math.max(m, y);
                if (C < b) {
                  const x = C + p, g = Math.min(b, x), S = x - g;
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
Jg.displayName = Xl;
var eb = "SelectGroup", [_N, kN] = To(eb), tb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ze();
    return /* @__PURE__ */ d.jsx(_N, { scope: n, id: o, children: /* @__PURE__ */ d.jsx(re.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
tb.displayName = eb;
var nb = "SelectLabel", rb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = kN(nb, n);
    return /* @__PURE__ */ d.jsx(re.div, { id: o.id, ...r, ref: t });
  }
);
rb.displayName = nb;
var Ni = "SelectItem", [EN, ob] = To(Ni), sb = v.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = fr(Ni, n), c = hr(Ni, n), l = i.value === r, [f, u] = v.useState(s ?? ""), [h, p] = v.useState(!1), b = ye(
      t,
      (x) => {
        var g;
        return (g = c.itemRefCallback) == null ? void 0 : g.call(c, x, r, o);
      }
    ), m = Ze(), y = v.useRef("touch"), C = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      EN,
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
          wc.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d.jsx(
              re.div,
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
                ref: b,
                onFocus: Z(a.onFocus, () => p(!0)),
                onBlur: Z(a.onBlur, () => p(!1)),
                onClick: Z(a.onClick, () => {
                  y.current !== "mouse" && C();
                }),
                onPointerUp: Z(a.onPointerUp, () => {
                  y.current === "mouse" && C();
                }),
                onPointerDown: Z(a.onPointerDown, (x) => {
                  y.current = x.pointerType;
                }),
                onPointerMove: Z(a.onPointerMove, (x) => {
                  var g;
                  y.current = x.pointerType, o ? (g = c.onItemLeave) == null || g.call(c) : y.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Z(a.onPointerLeave, (x) => {
                  var g;
                  x.currentTarget === document.activeElement && ((g = c.onItemLeave) == null || g.call(c));
                }),
                onKeyDown: Z(a.onKeyDown, (x) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (fN.includes(x.key) && C(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
sb.displayName = Ni;
var as = "SelectItemText", ab = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = fr(as, n), i = hr(as, n), c = ob(as, n), l = vN(as, n), [f, u] = v.useState(null), h = ye(
      t,
      (C) => u(C),
      c.onItemTextChange,
      (C) => {
        var x;
        return (x = i.itemTextRefCallback) == null ? void 0 : x.call(i, C, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, b = v.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: m, onNativeOptionRemove: y } = l;
    return lt(() => (m(b), () => y(b)), [m, y, b]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(re.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Js.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
ab.displayName = as;
var ib = "SelectItemIndicator", cb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ob(ib, n).isSelected ? /* @__PURE__ */ d.jsx(re.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
cb.displayName = ib;
var Zl = "SelectScrollUpButton", lb = v.forwardRef((e, t) => {
  const n = hr(Zl, e.__scopeSelect), r = ju(Zl, e.__scopeSelect), [o, s] = v.useState(!1), a = ye(t, r.onScrollButtonChange);
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
    ub,
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
lb.displayName = Zl;
var Ql = "SelectScrollDownButton", db = v.forwardRef((e, t) => {
  const n = hr(Ql, e.__scopeSelect), r = ju(Ql, e.__scopeSelect), [o, s] = v.useState(!1), a = ye(t, r.onScrollButtonChange);
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
    ub,
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
db.displayName = Ql;
var ub = v.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = hr("SelectScrollButton", n), a = v.useRef(null), i = Cc(n), c = v.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return v.useEffect(() => () => c(), [c]), lt(() => {
    var f;
    const l = i().find((u) => u.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d.jsx(
    re.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Z(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: Z(o.onPointerMove, () => {
        var l;
        (l = s.onItemLeave) == null || l.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Z(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), NN = "SelectSeparator", fb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(re.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
fb.displayName = NN;
var Jl = "SelectArrow", hb = v.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Sc(n), s = fr(Jl, n), a = hr(Jl, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t }) : null;
  }
);
hb.displayName = Jl;
var MN = "SelectBubbleInput", pb = v.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = v.useRef(null), s = ye(r, o), a = ac(t);
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
      re.select,
      {
        ...n,
        style: { ...cm, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
pb.displayName = MN;
function mb(e) {
  return e === "" || e === void 0;
}
function vb(e) {
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
function gb(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = PN(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function PN(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var AN = zg, RN = Hg, ON = Yg, DN = Kg, IN = Ug, jN = qg, TN = Jg, $N = tb, WN = rb, LN = sb, FN = ab, VN = cb, zN = lb, BN = db, HN = fb, GN = hb, _c = "Switch", [YN] = dt(_c), [KN, UN] = YN(_c), bb = v.forwardRef(
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
    } = e, [h, p] = v.useState(null), b = ye(t, (g) => p(g)), m = v.useRef(!1), y = h ? f || !!h.closest("form") : !0, [C, x] = kt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: _c
    });
    return /* @__PURE__ */ d.jsxs(KN, { scope: n, checked: C, disabled: i, children: [
      /* @__PURE__ */ d.jsx(
        re.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": a,
          "data-state": Cb(C),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...u,
          ref: b,
          onClick: Z(e.onClick, (g) => {
            x((S) => !S), y && (m.current = g.isPropagationStopped(), m.current || g.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ d.jsx(
        wb,
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
bb.displayName = _c;
var yb = "SwitchThumb", xb = v.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = UN(yb, n);
    return /* @__PURE__ */ d.jsx(
      re.span,
      {
        "data-state": Cb(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
xb.displayName = yb;
var qN = "SwitchBubbleInput", wb = v.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = v.useRef(null), i = ye(a, s), c = ac(n), l = ic(t);
    return v.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const u = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "checked"
      ).set;
      if (c !== n && p) {
        const b = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(b);
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
wb.displayName = qN;
function Cb(e) {
  return e ? "checked" : "unchecked";
}
var XN = bb, ZN = xb, kc = "Tabs", [QN] = dt(kc, [
  jo
]), Sb = jo(), [JN, Tu] = QN(kc), _b = v.forwardRef(
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
      caller: kc
    });
    return /* @__PURE__ */ d.jsx(
      JN,
      {
        scope: n,
        baseId: Ze(),
        value: u,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d.jsx(
          re.div,
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
_b.displayName = kc;
var kb = "TabsList", Eb = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Tu(kb, n), a = Sb(n);
    return /* @__PURE__ */ d.jsx(
      wu,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ d.jsx(
          re.div,
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
Eb.displayName = kb;
var Nb = "TabsTrigger", Mb = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Tu(Nb, n), i = Sb(n), c = Ab(a.baseId, r), l = Rb(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ d.jsx(
      Cu,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d.jsx(
          re.button,
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
            onMouseDown: Z(e.onMouseDown, (u) => {
              !o && u.button === 0 && u.ctrlKey === !1 ? a.onValueChange(r) : u.preventDefault();
            }),
            onKeyDown: Z(e.onKeyDown, (u) => {
              [" ", "Enter"].includes(u.key) && a.onValueChange(r);
            }),
            onFocus: Z(e.onFocus, () => {
              const u = a.activationMode !== "manual";
              !f && !o && u && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Mb.displayName = Nb;
var Pb = "TabsContent", eM = v.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Tu(Pb, n), c = Ab(i.baseId, r), l = Rb(i.baseId, r), f = r === i.value, u = v.useRef(f);
    return v.useEffect(() => {
      const h = requestAnimationFrame(() => u.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ d.jsx(mt, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ d.jsx(
      re.div,
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
eM.displayName = Pb;
function Ab(e, t) {
  return `${e}-trigger-${t}`;
}
function Rb(e, t) {
  return `${e}-content-${t}`;
}
var tM = _b, nM = Eb, rM = Mb, $u = "ToastProvider", [Wu, oM, sM] = ta("Toast"), [Ob] = dt("Toast", [sM]), [aM, Ec] = Ob($u), Db = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = v.useState(null), [l, f] = v.useState(0), u = v.useRef(!1), h = v.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${$u}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ d.jsx(Wu.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
    aM,
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
Db.displayName = $u;
var Ib = "ToastViewport", iM = ["F8"], ed = "toast.viewportPause", td = "toast.viewportResume", jb = v.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = iM,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = Ec(Ib, n), i = oM(n), c = v.useRef(null), l = v.useRef(null), f = v.useRef(null), u = v.useRef(null), h = ye(t, u, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), b = a.toastCount > 0;
    v.useEffect(() => {
      const y = (C) => {
        var g;
        r.length !== 0 && r.every((S) => C[S] || C.code === S) && ((g = u.current) == null || g.focus());
      };
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
    }, [r]), v.useEffect(() => {
      const y = c.current, C = u.current;
      if (b && y && C) {
        const x = () => {
          if (!a.isClosePausedRef.current) {
            const E = new CustomEvent(ed);
            C.dispatchEvent(E), a.isClosePausedRef.current = !0;
          }
        }, g = () => {
          if (a.isClosePausedRef.current) {
            const E = new CustomEvent(td);
            C.dispatchEvent(E), a.isClosePausedRef.current = !1;
          }
        }, S = (E) => {
          !y.contains(E.relatedTarget) && g();
        }, w = () => {
          y.contains(document.activeElement) || g();
        };
        return y.addEventListener("focusin", x), y.addEventListener("focusout", S), y.addEventListener("pointermove", x), y.addEventListener("pointerleave", w), window.addEventListener("blur", x), window.addEventListener("focus", g), () => {
          y.removeEventListener("focusin", x), y.removeEventListener("focusout", S), y.removeEventListener("pointermove", x), y.removeEventListener("pointerleave", w), window.removeEventListener("blur", x), window.removeEventListener("focus", g);
        };
      }
    }, [b, a.isClosePausedRef]);
    const m = v.useCallback(
      ({ tabbingDirection: y }) => {
        const x = i().map((g) => {
          const S = g.ref.current, w = [S, ...xM(S)];
          return y === "forwards" ? w : w.reverse();
        });
        return (y === "forwards" ? x.reverse() : x).flat();
      },
      [i]
    );
    return v.useEffect(() => {
      const y = u.current;
      if (y) {
        const C = (x) => {
          var w, E, k;
          const g = x.altKey || x.ctrlKey || x.metaKey;
          if (x.key === "Tab" && !g) {
            const N = document.activeElement, P = x.shiftKey;
            if (x.target === y && P) {
              (w = l.current) == null || w.focus();
              return;
            }
            const D = m({ tabbingDirection: P ? "backwards" : "forwards" }), L = D.findIndex((V) => V === N);
            ul(D.slice(L + 1)) ? x.preventDefault() : P ? (E = l.current) == null || E.focus() : (k = f.current) == null || k.focus();
          }
        };
        return y.addEventListener("keydown", C), () => y.removeEventListener("keydown", C);
      }
    }, [i, m]), /* @__PURE__ */ d.jsxs(
      jC,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: b ? void 0 : "none" },
        children: [
          b && /* @__PURE__ */ d.jsx(
            nd,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const y = m({
                  tabbingDirection: "forwards"
                });
                ul(y);
              }
            }
          ),
          /* @__PURE__ */ d.jsx(Wu.Slot, { scope: n, children: /* @__PURE__ */ d.jsx(re.ol, { tabIndex: -1, ...s, ref: h }) }),
          b && /* @__PURE__ */ d.jsx(
            nd,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const y = m({
                  tabbingDirection: "backwards"
                });
                ul(y);
              }
            }
          )
        ]
      }
    );
  }
);
jb.displayName = Ib;
var Tb = "ToastFocusProxy", nd = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = Ec(Tb, n);
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
nd.displayName = Tb;
var da = "Toast", cM = "toast.swipeStart", lM = "toast.swipeMove", dM = "toast.swipeCancel", uM = "toast.swipeEnd", $b = v.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = kt({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: da
    });
    return /* @__PURE__ */ d.jsx(mt, { present: n || i, children: /* @__PURE__ */ d.jsx(
      pM,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Rt(e.onPause),
        onResume: Rt(e.onResume),
        onSwipeStart: Z(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Z(e.onSwipeMove, (l) => {
          const { x: f, y: u } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${u}px`);
        }),
        onSwipeCancel: Z(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Z(e.onSwipeEnd, (l) => {
          const { x: f, y: u } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${u}px`), c(!1);
        })
      }
    ) });
  }
);
$b.displayName = da;
var [fM, hM] = Ob(da, {
  onClose() {
  }
}), pM = v.forwardRef(
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
      ...b
    } = e, m = Ec(da, n), [y, C] = v.useState(null), x = ye(t, (V) => C(V)), g = v.useRef(null), S = v.useRef(null), w = o || m.duration, E = v.useRef(0), k = v.useRef(w), N = v.useRef(0), { onToastAdd: P, onToastRemove: T } = m, O = Rt(() => {
      var B;
      (y == null ? void 0 : y.contains(document.activeElement)) && ((B = m.viewport) == null || B.focus()), a();
    }), D = v.useCallback(
      (V) => {
        !V || V === 1 / 0 || (window.clearTimeout(N.current), E.current = (/* @__PURE__ */ new Date()).getTime(), N.current = window.setTimeout(O, V));
      },
      [O]
    );
    v.useEffect(() => {
      const V = m.viewport;
      if (V) {
        const B = () => {
          D(k.current), l == null || l();
        }, W = () => {
          const Y = (/* @__PURE__ */ new Date()).getTime() - E.current;
          k.current = k.current - Y, window.clearTimeout(N.current), c == null || c();
        };
        return V.addEventListener(ed, W), V.addEventListener(td, B), () => {
          V.removeEventListener(ed, W), V.removeEventListener(td, B);
        };
      }
    }, [m.viewport, w, c, l, D]), v.useEffect(() => {
      s && !m.isClosePausedRef.current && D(w);
    }, [s, w, m.isClosePausedRef, D]), v.useEffect(() => (P(), () => T()), [P, T]);
    const L = v.useMemo(() => y ? Gb(y) : null, [y]);
    return m.viewport ? /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      L && /* @__PURE__ */ d.jsx(
        mM,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: L
        }
      ),
      /* @__PURE__ */ d.jsx(fM, { scope: n, onClose: O, children: Js.createPortal(
        /* @__PURE__ */ d.jsx(Wu.ItemSlot, { scope: n, children: /* @__PURE__ */ d.jsx(
          IC,
          {
            asChild: !0,
            onEscapeKeyDown: Z(i, () => {
              m.isFocusedToastEscapeKeyDownRef.current || O(), m.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ d.jsx(
              re.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": m.swipeDirection,
                ...b,
                ref: x,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: Z(e.onKeyDown, (V) => {
                  V.key === "Escape" && (i == null || i(V.nativeEvent), V.nativeEvent.defaultPrevented || (m.isFocusedToastEscapeKeyDownRef.current = !0, O()));
                }),
                onPointerDown: Z(e.onPointerDown, (V) => {
                  V.button === 0 && (g.current = { x: V.clientX, y: V.clientY });
                }),
                onPointerMove: Z(e.onPointerMove, (V) => {
                  if (!g.current) return;
                  const B = V.clientX - g.current.x, W = V.clientY - g.current.y, Y = !!S.current, I = ["left", "right"].includes(m.swipeDirection), $ = ["left", "up"].includes(m.swipeDirection) ? Math.min : Math.max, te = I ? $(0, B) : 0, A = I ? 0 : $(0, W), M = V.pointerType === "touch" ? 10 : 2, F = { x: te, y: A }, z = { originalEvent: V, delta: F };
                  Y ? (S.current = F, Ta(lM, u, z, {
                    discrete: !1
                  })) : Th(F, m.swipeDirection, M) ? (S.current = F, Ta(cM, f, z, {
                    discrete: !1
                  }), V.target.setPointerCapture(V.pointerId)) : (Math.abs(B) > M || Math.abs(W) > M) && (g.current = null);
                }),
                onPointerUp: Z(e.onPointerUp, (V) => {
                  const B = S.current, W = V.target;
                  if (W.hasPointerCapture(V.pointerId) && W.releasePointerCapture(V.pointerId), S.current = null, g.current = null, B) {
                    const Y = V.currentTarget, I = { originalEvent: V, delta: B };
                    Th(B, m.swipeDirection, m.swipeThreshold) ? Ta(uM, p, I, {
                      discrete: !0
                    }) : Ta(
                      dM,
                      h,
                      I,
                      {
                        discrete: !0
                      }
                    ), Y.addEventListener("click", ($) => $.preventDefault(), {
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
), mM = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Ec(da, t), [s, a] = v.useState(!1), [i, c] = v.useState(!1);
  return bM(() => a(!0)), v.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ d.jsx($r, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ui, { ...r, children: s && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, vM = "ToastTitle", Wb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(re.div, { ...r, ref: t });
  }
);
Wb.displayName = vM;
var gM = "ToastDescription", Lb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ d.jsx(re.div, { ...r, ref: t });
  }
);
Lb.displayName = gM;
var Fb = "ToastAction", Vb = v.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ d.jsx(Hb, { altText: n, asChild: !0, children: /* @__PURE__ */ d.jsx(Bb, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Fb}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Vb.displayName = Fb;
var zb = "ToastClose", Bb = v.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = hM(zb, n);
    return /* @__PURE__ */ d.jsx(Hb, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      re.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Z(e.onClick, o.onClose)
      }
    ) });
  }
);
Bb.displayName = zb;
var Hb = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    re.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Gb(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), yM(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Gb(r));
    }
  }), t;
}
function Ta(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? tu(o, s) : o.dispatchEvent(s);
}
var Th = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function bM(e = () => {
}) {
  const t = Rt(e);
  lt(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function yM(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function xM(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ul(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var wM = Db, CM = jb, SM = $b, _M = Wb, kM = Lb, EM = Vb, [Nc] = dt("Tooltip", [
  dr
]), Mc = dr(), Yb = "TooltipProvider", NM = 700, rd = "tooltip.open", [MM, Lu] = Nc(Yb), Kb = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = NM,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = v.useRef(!0), i = v.useRef(!1), c = v.useRef(0);
  return v.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    MM,
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
Kb.displayName = Yb;
var Ls = "Tooltip", [PM, ua] = Nc(Ls), Ub = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Lu(Ls, e.__scopeTooltip), l = Mc(t), [f, u] = v.useState(null), h = Ze(), p = v.useRef(0), b = a ?? c.disableHoverableContent, m = i ?? c.delayDuration, y = v.useRef(!1), [C, x] = kt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(rd))) : c.onClose(), s == null || s(k);
    },
    caller: Ls
  }), g = v.useMemo(() => C ? y.current ? "delayed-open" : "instant-open" : "closed", [C]), S = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, y.current = !1, x(!0);
  }, [x]), w = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x(!1);
  }, [x]), E = v.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      y.current = !0, x(!0), p.current = 0;
    }, m);
  }, [m, x]);
  return v.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ d.jsx(hc, { ...l, children: /* @__PURE__ */ d.jsx(
    PM,
    {
      scope: t,
      contentId: h,
      open: C,
      stateAttribute: g,
      trigger: f,
      onTriggerChange: u,
      onTriggerEnter: v.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : S();
      }, [c.isOpenDelayedRef, E, S]),
      onTriggerLeave: v.useCallback(() => {
        b ? w() : (window.clearTimeout(p.current), p.current = 0);
      }, [w, b]),
      onOpen: S,
      onClose: w,
      disableHoverableContent: b,
      children: n
    }
  ) });
};
Ub.displayName = Ls;
var od = "TooltipTrigger", qb = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ua(od, n), s = Lu(od, n), a = Mc(n), i = v.useRef(null), c = ye(t, i, o.onTriggerChange), l = v.useRef(!1), f = v.useRef(!1), u = v.useCallback(() => l.current = !1, []);
    return v.useEffect(() => () => document.removeEventListener("pointerup", u), [u]), /* @__PURE__ */ d.jsx(sa, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      re.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Z(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: Z(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: Z(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", u, { once: !0 });
        }),
        onFocus: Z(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: Z(e.onBlur, o.onClose),
        onClick: Z(e.onClick, o.onClose)
      }
    ) });
  }
);
qb.displayName = od;
var Fu = "TooltipPortal", [AM, RM] = Nc(Fu, {
  forceMount: void 0
}), Xb = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = ua(Fu, t);
  return /* @__PURE__ */ d.jsx(AM, { scope: t, forceMount: n, children: /* @__PURE__ */ d.jsx(mt, { present: n || s.open, children: /* @__PURE__ */ d.jsx($r, { asChild: !0, container: o, children: r }) }) });
};
Xb.displayName = Fu;
var So = "TooltipContent", Zb = v.forwardRef(
  (e, t) => {
    const n = RM(So, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = ua(So, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(mt, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d.jsx(Qb, { side: o, ...s, ref: t }) : /* @__PURE__ */ d.jsx(OM, { side: o, ...s, ref: t }) });
  }
), OM = v.forwardRef((e, t) => {
  const n = ua(So, e.__scopeTooltip), r = Lu(So, e.__scopeTooltip), o = v.useRef(null), s = ye(t, o), [a, i] = v.useState(null), { trigger: c, onClose: l } = n, f = o.current, { onPointerInTransitChange: u } = r, h = v.useCallback(() => {
    i(null), u(!1);
  }, [u]), p = v.useCallback(
    (b, m) => {
      const y = b.currentTarget, C = { x: b.clientX, y: b.clientY }, x = $M(C, y.getBoundingClientRect()), g = WM(C, x), S = LM(m.getBoundingClientRect()), w = VM([...g, ...S]);
      i(w), u(!0);
    },
    [u]
  );
  return v.useEffect(() => () => h(), [h]), v.useEffect(() => {
    if (c && f) {
      const b = (y) => p(y, f), m = (y) => p(y, c);
      return c.addEventListener("pointerleave", b), f.addEventListener("pointerleave", m), () => {
        c.removeEventListener("pointerleave", b), f.removeEventListener("pointerleave", m);
      };
    }
  }, [c, f, p, h]), v.useEffect(() => {
    if (a) {
      const b = (m) => {
        const y = m.target, C = { x: m.clientX, y: m.clientY }, x = (c == null ? void 0 : c.contains(y)) || (f == null ? void 0 : f.contains(y)), g = !FM(C, a);
        x ? h() : g && (h(), l());
      };
      return document.addEventListener("pointermove", b), () => document.removeEventListener("pointermove", b);
    }
  }, [c, f, a, l, h]), /* @__PURE__ */ d.jsx(Qb, { ...e, ref: s });
}), [DM, IM] = Nc(Ls, { isInside: !1 }), jM = /* @__PURE__ */ am("TooltipContent"), Qb = v.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = ua(So, n), l = Mc(n), { onClose: f } = c;
    return v.useEffect(() => (document.addEventListener(rd, f), () => document.removeEventListener(rd, f)), [f]), v.useEffect(() => {
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
              /* @__PURE__ */ d.jsx(jM, { children: r }),
              /* @__PURE__ */ d.jsx(DM, { scope: n, isInside: !0, children: /* @__PURE__ */ d.jsx(X2, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Zb.displayName = So;
var Jb = "TooltipArrow", TM = v.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Mc(n);
    return IM(
      Jb,
      n
    ).isInside ? null : /* @__PURE__ */ d.jsx(mc, { ...o, ...r, ref: t });
  }
);
TM.displayName = Jb;
function $M(e, t) {
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
function WM(e, t, n = 5) {
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
function LM(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function FM(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, u = c.x, h = c.y;
    f > r != h > r && n < (u - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function VM(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), zM(t);
}
function zM(e) {
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
var BM = Kb, HM = Ub, GM = qb, YM = Xb, KM = Zb;
function ey(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ey(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ty() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ey(e)) && (r && (r += " "), r += t);
  return r;
}
const $h = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wh = ty, pe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Wh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], u = s == null ? void 0 : s[l];
    if (f === null) return null;
    const h = $h(f) || $h(u);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [u, h] = f;
    return h === void 0 || (l[u] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: u, className: h, ...p } = f;
    return Object.entries(p).every((b) => {
      let [m, y] = b;
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
  return Wh(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Vu = "-", UM = (e) => {
  const t = XM(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Vu);
      return i[0] === "" && i.length !== 1 && i.shift(), ny(i, t) || qM(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, ny = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? ny(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Vu);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Lh = /^\[(.+)\]$/, qM = (e) => {
  if (Lh.test(e)) {
    const t = Lh.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, XM = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    sd(n[o], r, o, t);
  return r;
}, sd = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Fh(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ZM(o)) {
        sd(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      sd(a, Fh(t, s), n, r);
    });
  });
}, Fh = (e, t) => {
  let n = e;
  return t.split(Vu).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ZM = (e) => e.isThemeGetter, QM = (e) => {
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
}, ad = "!", id = ":", JM = id.length, eP = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    for (let b = 0; b < o.length; b++) {
      let m = o[b];
      if (a === 0 && i === 0) {
        if (m === id) {
          s.push(o.slice(c, b)), c = b + JM;
          continue;
        }
        if (m === "/") {
          l = b;
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
    const o = t + id, s = r;
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
}, tP = (e) => e.endsWith(ad) ? e.substring(0, e.length - 1) : e.startsWith(ad) ? e.substring(1) : e, nP = (e) => {
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
  cache: QM(e.cacheSize),
  parseClassName: eP(e),
  sortModifiers: nP(e),
  ...UM(e)
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
      baseClassName: b,
      maybePostfixModifierPosition: m
    } = n(f);
    if (u) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let y = !!m, C = r(y ? b.substring(0, m) : b);
    if (!C) {
      if (!y) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(b), !C) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      y = !1;
    }
    const x = s(h).join(":"), g = p ? x + ad : x, S = g + C;
    if (a.includes(S))
      continue;
    a.push(S);
    const w = o(C, y);
    for (let E = 0; E < w.length; ++E) {
      const k = w[E];
      a.push(g + k);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function aP() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = ry(t)) && (r && (r += " "), r += n);
  return r;
}
const ry = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ry(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Vh(e, ...t) {
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
}, oy = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sy = /^\((?:(\w[\w-]*):)?(.+)\)$/i, iP = /^\d+\/\d+$/, cP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lP = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, uP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fP = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (e) => iP.test(e), Ce = (e) => !!e && !Number.isNaN(Number(e)), Yn = (e) => !!e && Number.isInteger(Number(e)), fl = (e) => e.endsWith("%") && Ce(e.slice(0, -1)), Tn = (e) => cP.test(e), hP = () => !0, pP = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lP.test(e) && !dP.test(e)
), ay = () => !1, mP = (e) => uP.test(e), vP = (e) => fP.test(e), gP = (e) => !se(e) && !ae(e), bP = (e) => $o(e, ly, ay), se = (e) => oy.test(e), vr = (e) => $o(e, dy, pP), hl = (e) => $o(e, SP, Ce), zh = (e) => $o(e, iy, ay), yP = (e) => $o(e, cy, vP), $a = (e) => $o(e, uy, mP), ae = (e) => sy.test(e), Jo = (e) => Wo(e, dy), xP = (e) => Wo(e, _P), Bh = (e) => Wo(e, iy), wP = (e) => Wo(e, ly), CP = (e) => Wo(e, cy), Wa = (e) => Wo(e, uy, !0), $o = (e, t, n) => {
  const r = oy.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Wo = (e, t, n = !1) => {
  const r = sy.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, iy = (e) => e === "position" || e === "percentage", cy = (e) => e === "image" || e === "url", ly = (e) => e === "length" || e === "size" || e === "bg-size", dy = (e) => e === "length", SP = (e) => e === "number", _P = (e) => e === "family-name", uy = (e) => e === "shadow", Hh = () => {
  const e = Je("color"), t = Je("font"), n = Je("text"), r = Je("font-weight"), o = Je("tracking"), s = Je("leading"), a = Je("breakpoint"), i = Je("container"), c = Je("spacing"), l = Je("radius"), f = Je("shadow"), u = Je("inset-shadow"), h = Je("text-shadow"), p = Je("drop-shadow"), b = Je("blur"), m = Je("perspective"), y = Je("aspect"), C = Je("ease"), x = Je("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], w = () => [...S(), ae, se], E = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], N = () => [ae, se, c], P = () => [Ur, "full", "auto", ...N()], T = () => [Yn, "none", "subgrid", ae, se], O = () => ["auto", {
    span: ["full", Yn, ae, se]
  }, Yn, ae, se], D = () => [Yn, "auto", ae, se], L = () => ["auto", "min", "max", "fr", ae, se], V = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...N()], Y = () => [Ur, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], I = () => [e, ae, se], $ = () => [...S(), Bh, zh, {
    position: [ae, se]
  }], te = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", wP, bP, {
    size: [ae, se]
  }], M = () => [fl, Jo, vr], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ae,
    se
  ], z = () => ["", Ce, Jo, vr], X = () => ["solid", "dashed", "dotted", "double"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [Ce, fl, Bh, zh], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    ae,
    se
  ], oe = () => ["none", Ce, ae, se], de = () => ["none", Ce, ae, se], me = () => [Ce, ae, se], ge = () => [Ur, "full", ...N()];
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
        aspect: ["auto", "square", Ur, se, ae, y]
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
        "grid-cols": T()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: O()
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
        "grid-rows": T()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: O()
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
        justify: [...V(), "normal"]
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
        content: ["normal", ...V()]
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
        "place-content": V()
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
        font: [r, ae, hl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fl, se]
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
        "line-clamp": [Ce, "none", ae, hl]
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
        placeholder: I()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: I()
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
        decoration: [...X(), "wavy"]
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
        decoration: I()
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
        indent: N()
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
        bg: $()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: te()
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
        }, CP, yP]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: I()
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
        from: I()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: I()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: I()
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
        border: [...X(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...X(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: I()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": I()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": I()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": I()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": I()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": I()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": I()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": I()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": I()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: I()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...X(), "none", "hidden"]
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
        outline: I()
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
        shadow: I()
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
        "inset-shadow": I()
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
        ring: I()
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
        "ring-offset": I()
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
        "inset-ring": I()
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
        "text-shadow": I()
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
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": j()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": I()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": j()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": I()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": j()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": I()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": j()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": I()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": j()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": I()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": j()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": I()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": j()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": I()
      }],
      "mask-image-radial": [{
        "mask-radial": [ae, se]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": I()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": I()
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
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": j()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": I()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": I()
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
        mask: $()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: te()
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
        "drop-shadow": I()
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
        rotate: oe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": oe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": oe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": oe()
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
        accent: I()
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
        caret: I()
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
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ce, Jo, vr, hl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...I()]
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
}) => (is(e, "cacheSize", t), is(e, "prefix", n), is(e, "experimentalParseClassName", r), La(e.theme, s.theme), La(e.classGroups, s.classGroups), La(e.conflictingClassGroups, s.conflictingClassGroups), La(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), is(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), Fa(e.theme, o.theme), Fa(e.classGroups, o.classGroups), Fa(e.conflictingClassGroups, o.conflictingClassGroups), Fa(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), fy(e, o, "orderSensitiveModifiers"), e), is = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, La = (e, t) => {
  if (t)
    for (const n in t)
      is(e, n, t[n]);
}, Fa = (e, t) => {
  if (t)
    for (const n in t)
      fy(e, t, n);
}, fy = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, EP = (e, ...t) => typeof e == "function" ? Vh(Hh, e, ...t) : Vh(() => kP(Hh(), e), ...t), NP = [
  "xxxs",
  "xxs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "xxl",
  "xxxl"
], MP = EP({
  extend: {
    theme: {
      spacing: [...NP]
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
}), R = (...e) => MP(ty(e)), it = (e, t = {}) => {
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
}, hy = (e, t) => {
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
      className: R(AP({ intent: r }), s),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), a ? /* @__PURE__ */ d.jsx(Oh, { ...l, children: e }) : /* @__PURE__ */ d.jsxs(Oh, { ...l, children: [
      it(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Mi.displayName = "DropdownItem";
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
const Pc = _.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(RE, { children: /* @__PURE__ */ d.jsx(
  OE,
  {
    ref: o,
    className: R(PP({ size: t }), e),
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
  return t !== void 0 && (s.open = t), n !== void 0 && (s.onOpenChange = n), /* @__PURE__ */ d.jsx(PE, { ...s, children: e });
};
Ac.displayName = "Dropdown";
const Rc = _.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ d.jsx(
  AE,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Rc.displayName = "DropdownTrigger";
const e7 = ({
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
] }) }), py = _.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...s
  }, a) => e === "single" ? /* @__PURE__ */ d.jsx(
    ih,
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
    ih,
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
py.displayName = "Accordion";
const my = _.forwardRef(
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
my.displayName = "AccordionItem";
const vy = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(_C, { className: "flex", children: /* @__PURE__ */ d.jsxs(
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
vy.displayName = "AccordionTrigger";
const gy = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx(
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
gy.displayName = "AccordionContent";
const t7 = Object.assign(py, {
  Item: my,
  Trigger: vy,
  Content: gy
}), Gh = pe(
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
        className: R(Gh({ intent: e }), n),
        ref: a,
        ...s,
        children: r
      }
    ) : /* @__PURE__ */ d.jsxs(
      "span",
      {
        className: R(Gh({ intent: e }), n),
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
    separator: n = Qd,
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
), by = _.forwardRef(
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
by.displayName = "ProgressIndicator.Linear";
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
}, Pi = {
  sm: 12,
  md: 10
}, Yh = {
  sm: (50 - Pi.sm / 2).toString(),
  md: (50 - Pi.md / 2).toString()
}, yy = _.forwardRef(
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
                  r: Yh[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Pi[t]
                }
              ),
              /* @__PURE__ */ d.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Yh[t],
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
yy.displayName = "ProgressIndicator.Circular";
const Oc = {
  Linear: by,
  Circular: yy
}, pl = pe(
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
    const u = s ? jr : "button", h = !!((r || o) && !c && !(r && o)), p = !!(c && !r && !o), b = a || l.disabled;
    return a ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          pl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          "relative",
          n
        ),
        ...l,
        disabled: b,
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
          /* @__PURE__ */ d.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ d.jsx(Oc.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ d.jsxs(
      u,
      {
        ref: f,
        className: R(
          pl({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          n
        ),
        ...l,
        disabled: b,
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
          pl({ intent: e, size: t, textOnly: p, danger: i }),
          n
        ),
        children: c,
        ...l,
        disabled: b
      }
    );
  }
);
Ve.displayName = "Button";
function FP(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ml = {}, cs = {};
function Nr(e, t) {
  try {
    const r = (ml[e] || (ml[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in cs ? cs[r] : Kh(r, r.split(":"));
  } catch {
    if (e in cs) return cs[e];
    const n = e == null ? void 0 : e.match(VP);
    return n ? Kh(e, n.slice(1)) : NaN;
  }
}
const VP = /([+-]\d\d):?(\d\d)?/;
function Kh(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return cs[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class wn extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Nr(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), xy(this), cd(this)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), cd(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new wn(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Uh = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Uh.test(e)) return;
  const t = e.replace(Uh, "$1UTC");
  wn.prototype[t] && (e.startsWith("get") ? wn.prototype[e] = function() {
    return this.internal[t]();
  } : (wn.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), zP(this), +this;
  }, wn.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), cd(this), +this;
  }));
});
function cd(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Nr(e.timeZone, e) * 60));
}
function zP(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), xy(e);
}
function xy(e) {
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
    const x = Nr(e.timeZone, e), g = x > 0 ? Math.floor(x) : Math.ceil(x), S = p - g;
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
const wy = 6048e5, BP = 864e5, qh = Symbol.for("constructDateFrom");
function rt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && qh in e ? e[qh](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function De(e, t) {
  return rt(t || e, e);
}
function Cy(e, t, n) {
  const r = De(e, n == null ? void 0 : n.in);
  return isNaN(t) ? rt(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Sy(e, t, n) {
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
function _y(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = rt(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Fs(o), a = rt(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Fs(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Xh(e) {
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
function ky(e, t, n) {
  const [r, o] = Lo(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Vs(r), a = Vs(o), i = +s - Xh(s), c = +a - Xh(a);
  return Math.round((i - c) / BP);
}
function GP(e, t) {
  const n = _y(e, t), r = rt(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Fs(r);
}
function YP(e, t, n) {
  return Cy(e, t * 7, n);
}
function KP(e, t, n) {
  return Sy(e, t * 12, n);
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
function Ey(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ZP(e) {
  return !(!Ey(e) && typeof e != "number" || isNaN(+De(e)));
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
function Ny(e, t) {
  const n = De(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function My(e, t) {
  var i, c, l, f;
  const n = fa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = De(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function o4(e, t) {
  return My(e, { ...t, weekStartsOn: 1 });
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
}, b4 = {
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
}, x4 = {
  ordinalNumber: y4,
  era: bn({
    values: h4,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: p4,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bn({
    values: m4,
    defaultWidth: "wide"
  }),
  day: bn({
    values: v4,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: g4,
    defaultWidth: "wide",
    formattingValues: b4,
    defaultFormattingWidth: "wide"
  })
};
function yn(e) {
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
function Py(e) {
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
}, N4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, M4 = {
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
  ordinalNumber: Py({
    matchPattern: S4,
    parsePattern: _4,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: yn({
    matchPatterns: k4,
    defaultMatchWidth: "wide",
    parsePatterns: E4,
    defaultParseWidth: "any"
  }),
  quarter: yn({
    matchPatterns: N4,
    defaultMatchWidth: "wide",
    parsePatterns: M4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yn({
    matchPatterns: P4,
    defaultMatchWidth: "wide",
    parsePatterns: A4,
    defaultParseWidth: "any"
  }),
  day: yn({
    matchPatterns: R4,
    defaultMatchWidth: "wide",
    parsePatterns: O4,
    defaultParseWidth: "any"
  }),
  dayPeriod: yn({
    matchPatterns: D4,
    defaultMatchWidth: "any",
    parsePatterns: I4,
    defaultParseWidth: "any"
  })
}, Dc = {
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
  return ky(n, Ny(n)) + 1;
}
function Ay(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +Fs(n) - +GP(n);
  return Math.round(r / wy) + 1;
}
function Ry(e, t) {
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
  const n = fa(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Ry(e, t), s = rt((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), _o(s, t);
}
function Oy(e, t) {
  const n = De(e, t == null ? void 0 : t.in), r = +_o(n, t) - +$4(n, t);
  return Math.round(r / wy) + 1;
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
}, Zh = {
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
    const o = Ry(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Ae(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Ae(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = _y(e);
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
    const o = Oy(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ae(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ay(e);
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
        return Jh(r);
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
        return Jh(r);
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
        return "GMT" + Qh(r, ":");
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
        return "GMT" + Qh(r, ":");
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
function Qh(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Ae(s, 2);
}
function Jh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ae(Math.abs(e) / 60, 2) : br(e, t);
}
function br(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ae(Math.trunc(r / 60), 2), s = Ae(r % 60, 2);
  return n + o + t + s;
}
const ep = (e, t) => {
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
}, Dy = (e, t) => {
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
    return ep(e, t);
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
  return s.replace("{{date}}", ep(r, t)).replace("{{time}}", Dy(o, t));
}, L4 = {
  p: Dy,
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
  var f, u, h, p, b, m, y, C;
  const r = fa(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Dc, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (b = n == null ? void 0 : n.locale) == null ? void 0 : b.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((C = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : C.weekStartsOn) ?? 0, i = De(e, n == null ? void 0 : n.in);
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
    if (Zh[g])
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
    const S = Zh[g[0]];
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
const tp = 5, lA = 4;
function dA(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, tp * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? tp : lA;
}
function Iy(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function uA(e, t) {
  const n = Iy(e, t), r = dA(e, t);
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
      return (s = this.overrides) != null && s.addDays ? this.overrides.addDays(r, o) : Cy(r, o);
    }, this.addMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addMonths ? this.overrides.addMonths(r, o) : Sy(r, o);
    }, this.addWeeks = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addWeeks ? this.overrides.addWeeks(r, o) : YP(r, o);
    }, this.addYears = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addYears ? this.overrides.addYears(r, o) : KP(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ky(r, o);
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
      return (s = this.overrides) != null && s.endOfWeek ? this.overrides.endOfWeek(r, o) : My(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : r4(r);
    }, this.format = (r, o, s) => {
      var i;
      const a = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Q4(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Ay(r);
    }, this.getMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getMonth ? this.overrides.getMonth(r, this.options) : tA(r, this.options);
    }, this.getYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getYear ? this.overrides.getYear(r, this.options) : nA(r, this.options);
    }, this.getWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getWeek ? this.overrides.getWeek(r, this.options) : Oy(r, this.options);
    }, this.isAfter = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isAfter ? this.overrides.isAfter(r, o) : rA(r, o);
    }, this.isBefore = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isBefore ? this.overrides.isBefore(r, o) : oA(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Ey(r);
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
      return (s = this.overrides) != null && s.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Iy(r, this);
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
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Ny(r);
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
class jy {
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
function bA(e) {
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
function yA(e) {
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
const Ty = Qs(void 0);
function ha() {
  const e = Is(Ty);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function EA(e) {
  const { components: t } = ha();
  return _.createElement(t.Dropdown, { ...e });
}
function NA(e) {
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
function MA(e) {
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
  DayButton: bA,
  Dropdown: yA,
  DropdownNav: xA,
  Footer: wA,
  Month: CA,
  MonthCaption: SA,
  MonthGrid: _A,
  Months: kA,
  MonthsDropdown: EA,
  Nav: NA,
  NextMonthButton: MA,
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
function $y(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function zu(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Wy(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Ly(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Fy(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Vy(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Wn(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Vy(i, n))
      return i.includes(e);
    if (zu(i))
      return $n(i, e, !1, n);
    if (Fy(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if ($y(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, u = l < 0;
      return a(i.before, i.after) ? u && f : f || u;
    }
    return Wy(i) ? s(e, i.after) > 0 : Ly(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function VA(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f } = t, { isSameDay: u, isSameMonth: h, startOfMonth: p, isBefore: b, endOfMonth: m, isAfter: y } = o, C = n && p(n), x = r && m(r), g = {
    [Fe.focused]: [],
    [Fe.outside]: [],
    [Fe.disabled]: [],
    [Fe.hidden]: [],
    [Fe.today]: []
  }, S = {};
  for (const w of e) {
    const { date: E, displayMonth: k } = w, N = !!(k && !h(E, k)), P = !!(C && b(E, C)), T = !!(x && y(E, x)), O = !!(s && Wn(E, s, o)), D = !!(a && Wn(E, a, o)) || P || T || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, L = u(E, f ?? o.today());
    N && g.outside.push(w), O && g.disabled.push(w), D && g.hidden.push(w), L && g.today.push(w), i && Object.keys(i).forEach((V) => {
      const B = i == null ? void 0 : i[V];
      B && Wn(E, B, o) && (S[V] ? S[V].push(w) : S[V] = [w]);
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
    for (const N in g) {
      const P = g[N];
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
function zy() {
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
function By(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const GA = By;
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
function Hy(e, t = Pn) {
  return t.format(e, "yyyy");
}
const ZA = Hy, QA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: By,
  formatDay: YA,
  formatMonthCaption: GA,
  formatMonthDropdown: KA,
  formatWeekNumber: qA,
  formatWeekNumberHeader: XA,
  formatWeekdayName: UA,
  formatYearCaption: ZA,
  formatYearDropdown: Hy
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
    const p = r.formatMonthDropdown(h, o), b = l(h), m = t && h < s(t) || n && h > s(n) || !1;
    return { value: b, label: p, disabled: m };
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
  let b = u;
  for (; l(b, h) || f(b, h); )
    p.push(b), b = i(b, 1);
  return o && p.reverse(), p.map((m) => {
    const y = n.formatYearDropdown(m, r);
    return {
      value: c(m),
      label: y,
      disabled: !1
    };
  });
}
function Gy(e, t, n, r) {
  let o = (r ?? new Vt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const oR = Gy;
function Yy(e, t, n) {
  return (n ?? new Vt(t)).formatMonthYear(e);
}
const sR = Yy;
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
  labelDayButton: Gy,
  labelGrid: Yy,
  labelGridcell: aR,
  labelMonthDropdown: iR,
  labelNav: cR,
  labelNext: lR,
  labelPrevious: dR,
  labelWeekNumber: fR,
  labelWeekNumberHeader: hR,
  labelWeekday: uR,
  labelYearDropdown: pR
}, Symbol.toStringTag, { value: "Module" })), pa = (e) => e instanceof HTMLElement ? e : null, vl = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], vR = (e) => pa(e.querySelector("[data-animated-month]")), gl = (e) => pa(e.querySelector("[data-animated-caption]")), bl = (e) => pa(e.querySelector("[data-animated-weeks]")), gR = (e) => pa(e.querySelector("[data-animated-nav]")), bR = (e) => pa(e.querySelector("[data-animated-weekdays]"));
function yR(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = ct(null), i = ct(r), c = ct(!1);
  Zd(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), u = s.isAfter(r[0].date, l[0].date), h = u ? n[Tt.caption_after_enter] : n[Tt.caption_before_enter], p = u ? n[Tt.weeks_after_enter] : n[Tt.weeks_before_enter], b = a.current, m = e.current.cloneNode(!0);
    if (m instanceof HTMLElement ? (vl(m).forEach((g) => {
      if (!(g instanceof HTMLElement))
        return;
      const S = vR(g);
      S && g.contains(S) && g.removeChild(S);
      const w = gl(g);
      w && w.classList.remove(h);
      const E = bl(g);
      E && E.classList.remove(p);
    }), a.current = m) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const y = b instanceof HTMLElement ? vl(b) : [], C = vl(e.current);
    if (C != null && C.every((x) => x instanceof HTMLElement) && y && y.every((x) => x instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const x = gR(e.current);
      x && (x.style.zIndex = "1"), C.forEach((g, S) => {
        const w = y[S];
        if (!w)
          return;
        g.style.position = "relative", g.style.overflow = "hidden";
        const E = gl(g);
        E && E.classList.add(h);
        const k = bl(g);
        k && k.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), E && E.classList.remove(h), k && k.classList.remove(p), g.style.position = "", g.style.overflow = "", g.contains(w) && g.removeChild(w);
        };
        w.style.pointerEvents = "none", w.style.position = "absolute", w.style.overflow = "hidden", w.setAttribute("aria-hidden", "true");
        const P = bR(w);
        P && (P.style.opacity = "0");
        const T = gl(w);
        T && (T.classList.add(u ? n[Tt.caption_before_exit] : n[Tt.caption_after_exit]), T.addEventListener("animationend", N));
        const O = bl(w);
        O && O.classList.add(u ? n[Tt.weeks_before_exit] : n[Tt.weeks_after_exit]), g.insertBefore(w, g.firstChild);
      });
    }
  });
}
function xR(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: u, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: b, endOfWeek: m, isAfter: y, startOfBroadcastWeek: C, startOfISOWeek: x, startOfWeek: g } = r, S = c ? C(o, r) : a ? x(o) : g(o), w = c ? h(s) : a ? p(b(s)) : m(b(s)), E = f(w, S), k = u(s, o) + 1, N = [];
  for (let O = 0; O <= E; O++) {
    const D = l(S, O);
    if (t && y(D, t))
      break;
    N.push(D);
  }
  const T = (c ? 35 : 42) * k;
  if (i && N.length < T) {
    const O = T - N.length;
    for (let D = 0; D < O; D++) {
      const L = l(N[N.length - 1], 1);
      N.push(L);
    }
  }
  return N;
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
function np(e, t, n, r) {
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
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: u, startOfISOWeek: h, startOfWeek: p } = r, b = e.reduce((m, y) => {
    const C = n.broadcastCalendar ? u(y, r) : n.ISOWeek ? h(y) : p(y), x = n.broadcastCalendar ? s(y) : n.ISOWeek ? a(i(y)) : c(i(y)), g = t.filter((k) => k >= C && k <= x), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && g.length < S) {
      const k = t.filter((N) => {
        const P = S - g.length;
        return N > x && N <= o(x, P);
      });
      g.push(...k);
    }
    const w = g.reduce((k, N) => {
      const P = n.ISOWeek ? l(N) : f(N), T = k.find((D) => D.weekNumber === P), O = new jy(N, y, r);
      return T ? T.days.push(O) : k.push(new hA(P, [O])), k;
    }, []), E = new fA(y, w);
    return m.push(E), m;
  }, []);
  return n.reverseMonths ? b.reverse() : b;
}
function _R(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: u } = t, { fromYear: h, toYear: p, fromMonth: b, toMonth: m } = e;
  !n && b && (n = b), !n && h && (n = t.newDate(h, 0, 1)), !r && m && (r = m), !r && p && (r = f(p, 11, 31));
  const y = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && y && (n = o(c(e.today ?? u(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && y && (r = l(e.today ?? u())), [
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
function NR(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Ic(e, t) {
  const [n, r] = tt(e);
  return [t === void 0 ? n : t, r];
}
function MR(e, t) {
  const [n, r] = _R(e, t), { startOfMonth: o, endOfMonth: s } = t, a = np(e, n, r, t), [i, c] = Ic(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  on(() => {
    const E = np(e, n, r, t);
    c(E);
  }, [e.timeZone]);
  const l = CR(i, r, e, t), f = xR(l, e.endMonth ? s(e.endMonth) : void 0, e, t), u = SR(l, f, e, t), h = NR(u), p = wR(u), b = ER(i, n, e, t), m = kR(i, r, e, t), { disableNavigation: y, onMonthChange: C } = e, x = (E) => h.some((k) => k.days.some((N) => N.isEqualTo(E))), g = (E) => {
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
    previousMonth: b,
    nextMonth: m,
    goToMonth: g,
    goToDay: (E) => {
      x(E) || g(E.date);
    }
  };
}
var pn;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(pn || (pn = {}));
function rp(e) {
  return !e[Fe.disabled] && !e[Fe.hidden] && !e[Fe.outside];
}
function PR(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    rp(i) && (i[Fe.focused] && s < pn.FocusedModifier ? (o = a, s = pn.FocusedModifier) : r != null && r.isEqualTo(a) && s < pn.LastFocused ? (o = a, s = pn.LastFocused) : n(a.date) && s < pn.Selected ? (o = a, s = pn.Selected) : i[Fe.today] && s < pn.Today && (o = a, s = pn.Today));
  }
  return o || (o = e.find((a) => rp(t(a)))), o;
}
function AR(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: u, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: b, endOfWeek: m, max: y, min: C, startOfBroadcastWeek: x, startOfISOWeek: g, startOfWeek: S } = a;
  let E = {
    day: l,
    week: u,
    month: f,
    year: h,
    startOfWeek: (k) => c ? x(k, a) : i ? g(k) : S(k),
    endOfWeek: (k) => c ? p(k) : i ? b(k) : m(k)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? E = y([r, E]) : t === "after" && o && (E = C([o, E])), E;
}
function Ky(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = AR(e, t, n.date, r, o, s, a), l = !!(s.disabled && Wn(c, s.disabled, a)), f = !!(s.hidden && Wn(c, s.hidden, a)), u = c, h = new jy(c, u, a);
  return !l && !f ? h : Ky(e, t, h, r, o, s, a, i + 1);
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
    moveFocus: (m, y) => {
      if (!l)
        return;
      const C = Ky(m, y, l, t.navStart, t.navEnd, e, o);
      C && (t.goToDay(C), f(C));
    }
  };
}
function OR(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ic(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((b) => c(b, p))) ?? !1, { min: f, max: u } = e;
  return {
    selected: i,
    select: (p, b, m) => {
      let y = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        y = i == null ? void 0 : i.filter((C) => !c(C, p));
      } else
        (i == null ? void 0 : i.length) === u ? y = [p] : y = [...y, p];
      return o || a(y), o == null || o(y, p, b, m), y;
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
function op(e, t, n = Pn) {
  return $n(e, t.from, !1, n) || $n(e, t.to, !1, n) || $n(t, e.from, !1, n) || $n(t, e.to, !1, n);
}
function jR(e, t, n = Pn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? $n(e, i, !1, n) : Vy(i, n) ? i.some((c) => $n(e, c, !1, n)) : zu(i) ? i.from && i.to ? op(e, { from: i.from, to: i.to }, n) : !1 : Fy(i) ? IR(e, i.dayOfWeek, n) : $y(i) ? n.isAfter(i.before, i.after) ? op(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Wn(e.from, i, n) || Wn(e.to, i, n) : Wy(i) || Ly(i) ? Wn(e.from, i, n) || Wn(e.to, i, n) : !1))
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
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = Ic(o, a ? o : void 0), l = a ? o : i;
  return {
    selected: l,
    select: (h, p, b) => {
      const { min: m, max: y } = e, C = h ? DR(h, l, m, y, s, t) : void 0;
      return r && n && (C != null && C.from) && C.to && jR({ from: C.from, to: C.to }, n, t) && (C.from = h, C.to = void 0), a || c(C), a == null || a(C, h, p, b), C;
    },
    isSelected: (h) => l && $n(l, h, !1, t)
  };
}
function $R(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = Ic(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (u, h, p) => {
      let b = u;
      return !r && i && i && c(u, i) && (b = void 0), o || a(b), o == null || o(b, u, h, p), b;
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
    const G = { ...Dc, ...t.locale };
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
      classNames: { ...zy(), ...t.classNames }
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
  ]), { captionLayout: c, mode: l, navLayout: f, numberOfMonths: u = 1, onDayBlur: h, onDayClick: p, onDayFocus: b, onDayKeyDown: m, onDayMouseEnter: y, onDayMouseLeave: C, onNextClick: x, onPrevClick: g, showWeekNumber: S, styles: w } = t, { formatCaption: E, formatDay: k, formatMonthDropdown: N, formatWeekNumber: P, formatWeekNumberHeader: T, formatWeekdayName: O, formatYearDropdown: D } = r, L = MR(t, s), { days: V, months: B, navStart: W, navEnd: Y, previousMonth: I, nextMonth: $, goToMonth: te } = L, A = VA(V, t, W, Y, s), { isSelected: M, select: F, selected: z } = WR(t, s) ?? {}, { blur: X, focused: U, isFocusTarget: j, moveFocus: J, setFocused: oe } = RR(t, L, A, M ?? (() => !1), s), { labelDayButton: de, labelGridcell: me, labelGrid: ge, labelMonthDropdown: Se, labelNav: Ie, labelPrevious: Te, labelNext: ut, labelWeekday: Xe, labelWeekNumber: ot, labelWeekNumberHeader: vt, labelYearDropdown: We } = o, Ge = po(() => nR(s, t.ISOWeek), [s, t.ISOWeek]), Qe = l !== void 0 || p !== void 0, Dt = ke(() => {
    I && (te(I), g == null || g(I));
  }, [I, te, g]), Mt = ke(() => {
    $ && (te($), x == null || x($));
  }, [te, $, x]), ve = ke((G, ce) => (q) => {
    q.preventDefault(), q.stopPropagation(), oe(G), F == null || F(G.date, ce, q), p == null || p(G.date, ce, q);
  }, [F, p, oe]), Zt = ke((G, ce) => (q) => {
    oe(G), b == null || b(G.date, ce, q);
  }, [b, oe]), It = ke((G, ce) => (q) => {
    X(), h == null || h(G.date, ce, q);
  }, [X, h]), fn = ke((G, ce) => (q) => {
    const ie = {
      ArrowLeft: [
        q.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        q.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [q.shiftKey ? "year" : "week", "after"],
      ArrowUp: [q.shiftKey ? "year" : "week", "before"],
      PageUp: [q.shiftKey ? "year" : "month", "before"],
      PageDown: [q.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ie[q.key]) {
      q.preventDefault(), q.stopPropagation();
      const [he, le] = ie[q.key];
      J(he, le);
    }
    m == null || m(G.date, ce, q);
  }, [J, m, t.dir]), hn = ke((G, ce) => (q) => {
    y == null || y(G.date, ce, q);
  }, [y]), Rn = ke((G, ce) => (q) => {
    C == null || C(G.date, ce, q);
  }, [C]), Qt = ke((G) => (ce) => {
    const q = Number(ce.target.value), ie = s.setMonth(s.startOfMonth(G), q);
    te(ie);
  }, [s, te]), Jt = ke((G) => (ce) => {
    const q = Number(ce.target.value), ie = s.setYear(s.startOfMonth(G), q);
    te(ie);
  }, [s, te]), { className: On, style: Pt } = po(() => ({
    className: [i[fe.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[fe.Root], ...t.style }
  }), [i, t.className, t.style, w]), st = HA(t), H = ct(null);
  yR(H, !!t.animate, {
    classNames: i,
    months: B,
    focused: U,
    dateLib: s
  });
  const ee = {
    dayPickerProps: t,
    selected: z,
    select: F,
    isSelected: M,
    months: B,
    nextMonth: $,
    previousMonth: I,
    goToMonth: te,
    getModifiers: A,
    components: n,
    classNames: i,
    styles: w,
    labels: o,
    formatters: r
  };
  return _.createElement(
    Ty.Provider,
    { value: ee },
    _.createElement(
      n.Root,
      { rootRef: t.animate ? H : void 0, className: On, style: Pt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...st },
      _.createElement(
        n.Months,
        { className: i[fe.Months], style: w == null ? void 0 : w[fe.Months] },
        !t.hideNavigation && !f && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Mt, previousMonth: I, nextMonth: $ }),
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
            { type: "button", className: i[fe.PreviousMonthButton], tabIndex: I ? void 0 : -1, "aria-disabled": I ? void 0 : !0, "aria-label": Te(I), onClick: Dt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: I ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          _.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[fe.MonthCaption], style: w == null ? void 0 : w[fe.MonthCaption], calendarMonth: G, displayIndex: ce }, c != null && c.startsWith("dropdown") ? _.createElement(
            n.DropdownNav,
            { className: i[fe.Dropdowns], style: w == null ? void 0 : w[fe.Dropdowns] },
            (() => {
              const q = c === "dropdown" || c === "dropdown-months" ? _.createElement(n.MonthsDropdown, { key: "month", className: i[fe.MonthsDropdown], "aria-label": Se(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Qt(G.date), options: eR(G.date, W, Y, r, s), style: w == null ? void 0 : w[fe.Dropdown], value: s.getMonth(G.date) }) : _.createElement("span", { key: "month" }, N(G.date, s)), ie = c === "dropdown" || c === "dropdown-years" ? _.createElement(n.YearsDropdown, { key: "year", className: i[fe.YearsDropdown], "aria-label": We(s.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Jt(G.date), options: rR(W, Y, r, s, !!t.reverseYears), style: w == null ? void 0 : w[fe.Dropdown], value: s.getYear(G.date) }) : _.createElement("span", { key: "year" }, D(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [ie, q] : [q, ie];
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
            _.createElement(n.CaptionLabel, { className: i[fe.CaptionLabel], role: "status", "aria-live": "polite" }, E(G.date, s.options, s))
          )),
          f === "around" && !t.hideNavigation && ce === u - 1 && _.createElement(
            n.NextMonthButton,
            { type: "button", className: i[fe.NextMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": ut($), onClick: Mt, "data-animated-button": t.animate ? "true" : void 0 },
            _.createElement(n.Chevron, { disabled: $ ? void 0 : !0, className: i[fe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ce === u - 1 && f === "after" && !t.hideNavigation && _.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[fe.Nav], style: w == null ? void 0 : w[fe.Nav], "aria-label": Ie(), onPreviousClick: Dt, onNextClick: Mt, previousMonth: I, nextMonth: $ }),
          _.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": ge(G.date, s.options, s) || void 0, className: i[fe.MonthGrid], style: w == null ? void 0 : w[fe.MonthGrid] },
            !t.hideWeekdays && _.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[fe.Weekdays], style: w == null ? void 0 : w[fe.Weekdays] },
              S && _.createElement(n.WeekNumberHeader, { "aria-label": vt(s.options), className: i[fe.WeekNumberHeader], style: w == null ? void 0 : w[fe.WeekNumberHeader], scope: "col" }, T()),
              Ge.map((q) => _.createElement(n.Weekday, { "aria-label": Xe(q, s.options, s), className: i[fe.Weekday], key: String(q), style: w == null ? void 0 : w[fe.Weekday], scope: "col" }, O(q, s.options, s)))
            ),
            _.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[fe.Weeks], style: w == null ? void 0 : w[fe.Weeks] }, G.weeks.map((q) => _.createElement(
              n.Week,
              { className: i[fe.Week], key: q.weekNumber, style: w == null ? void 0 : w[fe.Week], week: q },
              S && // biome-ignore lint/a11y/useSemanticElements: react component
              _.createElement(n.WeekNumber, { week: q, style: w == null ? void 0 : w[fe.WeekNumber], "aria-label": ot(q.weekNumber, {
                locale: a
              }), className: i[fe.WeekNumber], scope: "row", role: "rowheader" }, P(q.weekNumber, s)),
              q.days.map((ie) => {
                const { date: he } = ie, le = A(ie);
                if (le[Fe.focused] = !le.hidden && !!(U != null && U.isEqualTo(ie)), le[rn.selected] = (M == null ? void 0 : M(he)) || le.selected, zu(z)) {
                  const { from: ft, to: Ye } = z;
                  le[rn.range_start] = !!(ft && Ye && s.isSameDay(he, ft)), le[rn.range_end] = !!(ft && Ye && s.isSameDay(he, Ye)), le[rn.range_middle] = $n(z, he, !0, s);
                }
                const ze = tR(le, w, t.modifiersStyles), jt = zA(le, i, t.modifiersClassNames), en = !Qe && !le.hidden ? me(he, le, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  _.createElement(n.Day, { key: `${s.format(he, "yyyy-MM-dd")}_${s.format(ie.displayMonth, "yyyy-MM")}`, day: ie, modifiers: le, className: jt.join(" "), style: ze, role: "gridcell", "aria-selected": le.selected || void 0, "aria-label": en, "data-day": s.format(he, "yyyy-MM-dd"), "data-month": ie.outside ? s.format(he, "yyyy-MM") : void 0, "data-selected": le.selected || void 0, "data-disabled": le.disabled || void 0, "data-hidden": le.hidden || void 0, "data-outside": ie.outside || void 0, "data-focused": le.focused || void 0, "data-today": le.today || void 0 }, !le.hidden && Qe ? _.createElement(n.DayButton, { className: i[fe.DayButton], style: w == null ? void 0 : w[fe.DayButton], type: "button", day: ie, modifiers: le, disabled: le.disabled || void 0, tabIndex: j(ie) ? 0 : -1, "aria-label": de(he, le, s.options, s), onClick: ve(ie, le), onBlur: It(ie, le), onFocus: Zt(ie, le), onKeyDown: fn(ie, le), onMouseEnter: hn(ie, le), onMouseLeave: Rn(ie, le) }, k(he, s.options, s)) : !le.hidden && k(ie.date, s.options, s))
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
  era: bn({
    values: UR,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: qR,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: bn({
    values: XR,
    defaultWidth: "wide"
  }),
  day: bn({
    values: ZR,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
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
  ordinalNumber: Py({
    matchPattern: nO,
    parsePattern: rO,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: yn({
    matchPatterns: oO,
    defaultMatchWidth: "wide",
    parsePatterns: sO,
    defaultParseWidth: "any"
  }),
  quarter: yn({
    matchPatterns: aO,
    defaultMatchWidth: "wide",
    parsePatterns: iO,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: yn({
    matchPatterns: cO,
    defaultMatchWidth: "wide",
    parsePatterns: lO,
    defaultParseWidth: "any"
  }),
  day: yn({
    matchPatterns: dO,
    defaultMatchWidth: "wide",
    parsePatterns: uO,
    defaultParseWidth: "any"
  }),
  dayPeriod: yn({
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
}, Uy = _.forwardRef(
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
    const [b, m] = _.useState(
      () => Ba(n || null)
    ), y = e !== void 0, C = y ? Ba(e) : b, x = _.useMemo(
      () => Ba(r || null),
      [r]
    ), g = _.useMemo(
      () => Ba(o || null),
      [o]
    ), S = _.useMemo(() => !x || !g ? !0 : x <= g, [x, g]), w = _.useMemo(() => {
      if (g) return g;
      const k = /* @__PURE__ */ new Date();
      return new Date(k.getFullYear() + 10, 11, 31);
    }, [g]), E = (k) => {
      const N = k || null;
      y || m(N), t == null || t(N);
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
            onSelect: E,
            locale: u === "ja" ? mO : Dc,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (k) => `${k.getFullYear()}${u === "ja" ? "年" : ""}`
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
              const k = zy(), N = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
Uy.displayName = "Calendar";
const sp = pe(
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
          sp({ intent: t, size: n, disabled: o }),
          e
        ),
        ...c,
        children: i
      }
    ) : /* @__PURE__ */ d.jsxs(
      f,
      {
        ref: l,
        className: R(sp({ intent: t, size: n, disabled: o }), e),
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
const bO = pe(
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
), yO = pe("size-5 shrink-0", {
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
  success: om,
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
        className: R(bO({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ d.jsxs("div", { className: R(CO()), children: [
          n && /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  className: R(yO({ intent: t }), "top-0.5 relative"),
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
const qy = _.createContext(!1), kO = pe("grid grid-cols-1", {
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
}), Xy = _.forwardRef(
  ({ columns: e = 1, gap: t = "xs", className: n, children: r, ...o }, s) => (
    // WebKit drops the list semantics of a `ul` without list markers
    /* @__PURE__ */ d.jsx(
      "ul",
      {
        ref: s,
        role: "list",
        className: R(kO({ columns: e, gap: t }), n),
        ...o,
        children: /* @__PURE__ */ d.jsx(qy.Provider, { value: !0, children: r })
      }
    )
  )
);
Xy.displayName = "Card.List";
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
), es = (e) => e != null && e !== !1 && e !== !0 && e !== "", Ha = (e, ...t) => t.some((n) => (e == null ? void 0 : e[n]) !== void 0), Zy = _.forwardRef(
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
    const f = _.useContext(qy), u = _.useId(), h = `${u}-title`, p = `${u}-top`, b = `${u}-content`, m = e ? jr : "div", y = t == null ? void 0 : t.props, C = es(r) || es(o), x = es(a), g = e && !Ha(c, "aria-label", "aria-labelledby") && !Ha(y, "aria-label", "aria-labelledby"), S = e && !Ha(c, "aria-describedby") && !Ha(y, "aria-describedby") && [C && p, x && b].filter(Boolean).join(" ") || void 0, w = {
      ...g && { "aria-labelledby": h },
      ...S && { "aria-describedby": S }
    }, E = /* @__PURE__ */ d.jsxs(
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
                id: S ? b : void 0,
                "data-slot": "content",
                className: "min-w-0",
                children: a
              }
            )
          ] }),
          e && t && /* @__PURE__ */ d.jsx(im, { children: _.cloneElement(t, w) })
        ]
      }
    );
    return f ? /* @__PURE__ */ d.jsx("li", { className: "flex", children: E }) : E;
  }
);
Zy.displayName = "Card.Item";
const n7 = {
  Item: Zy,
  List: Xy
}, NO = pe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), MO = pe(
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
  return /* @__PURE__ */ d.jsxs("div", { className: R(NO({ disabled: e }), a), children: [
    /* @__PURE__ */ d.jsx(
      tv,
      {
        id: c,
        className: R(MO({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ d.jsx(
          rv,
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
bo.displayName = "Checkbox";
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
}, jc = () => {
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
const ap = 48, ip = (e) => Math.min(1, Math.max(0, e)), Qy = (e) => {
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
        startShadow: ip(f / ap),
        endShadow: ip(
          (c - l - f) / ap
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
function Jy({
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
), r7 = BM, Kt = _.forwardRef(
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
    HM,
    {
      ...i !== void 0 && { delayDuration: i },
      ...l !== void 0 && { open: l },
      ...f !== void 0 && { onOpenChange: f },
      ...c !== void 0 && {
        disableHoverableContent: c
      },
      children: [
        /* @__PURE__ */ d.jsx(GM, { asChild: !0, children: e }),
        /* @__PURE__ */ d.jsx(YM, { children: /* @__PURE__ */ d.jsx(
          KM,
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
}), ex = _.forwardRef(
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
ex.displayName = "DataSheet";
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
), tx = _.forwardRef(
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
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: tm,
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
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: rm,
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
                  Ve,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: nm,
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
tx.displayName = "DataSheetHeader";
const nx = _.forwardRef(
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
nx.displayName = "DataSheetSection";
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
), rx = _.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...s }, a) => {
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
rx.displayName = "DataSheetKeyValue";
const VO = {
  actionsColumnParts: 10
}, ox = _.createContext(
  VO
), zO = () => _.useContext(ox), sx = _.createContext({}), ax = () => _.useContext(
  sx
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
  const { hasOverflow: u, startShadow: h, endShadow: p } = Qy(f), b = _.useMemo(
    () => ({
      actionsColumnParts: s,
      ...n && { onEditRow: n },
      ...r && { onRemoveRow: r },
      ...o && { onRestoreRow: o }
    }),
    [s, n, r, o]
  );
  return /* @__PURE__ */ d.jsx(
    ox.Provider,
    {
      value: b,
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
        u && /* @__PURE__ */ d.jsx(Jy, { startShadow: h, endShadow: p })
      ] })
    }
  );
}
const ix = _.forwardRef(BO);
ix.displayName = "DataSheetTable";
const cx = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("thead", { ref: r, className: R("", e), ...n, children: t }));
cx.displayName = "DataSheetTableHeader";
const lx = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tbody", { ref: r, className: R("", e), ...n, children: t }));
lx.displayName = "DataSheetTableBody";
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
    sx.Provider,
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
const dx = _.forwardRef(HO);
dx.displayName = "DataSheetTableRow";
const Ai = _.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...s }, a) => {
  const i = t ? "th" : "td", { totalParts: c, isDeleted: l } = ax(), f = n !== void 0 && c !== void 0 ? { width: `${n / c * 100}%`, ...o } : o, u = typeof r == "string" ? r.trim() : String(r || ""), h = l && !t && u !== "" && u !== "-";
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
  } = ax(), b = n ?? f;
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
        a && b && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: u ? null : (p == null ? void 0 : p.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: tm,
                disabled: u,
                onClick: () => a(b),
                className: R(
                  "text-shape-primary [&_svg]:size-5!",
                  u && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && b && !u && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: (p == null ? void 0 : p.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: rm,
                onClick: () => i(b),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        c && b && u && /* @__PURE__ */ d.jsx(
          Kt,
          {
            content: (p == null ? void 0 : p.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ d.jsx(
              Ve,
              {
                "aria-label": (h == null ? void 0 : h.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: nm,
                onClick: () => c(b),
                className: "text-shape-primary [&_svg]:!size-5"
              }
            )
          }
        )
      ] })
    }
  ) : null;
}
const ux = _.forwardRef(
  GO
);
ux.displayName = "DataSheetTableActionsCell";
const fx = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(Ve, { ref: n, className: R("w-full", e), ...t }));
fx.displayName = "DataSheetAction";
const o7 = Object.assign(ex, {
  Header: tx,
  Section: nx,
  KeyValue: rx,
  Table: ix,
  TableHeader: cx,
  TableBody: lx,
  TableRow: dx,
  TableCell: Ai,
  TableActionsCell: ux,
  Action: fx
}), hx = pe(
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
    const p = !!t, b = !!n, m = !!r, y = u.type === "number", { compositionHandlers: C, guardKeyHandler: x } = jc(), g = (w) => {
      C.onCompositionStart(w), l == null || l(w);
    }, S = (w) => {
      C.onCompositionEnd(w), f == null || f(w);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: R(hx({ invalid: e }), a), children: [
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
          className: YO({ hasPrefix: p, hasTrailing: b, isNumeric: y }),
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
Tc.displayName = "Input";
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
    defaultOpen: b = !1,
    open: m,
    onOpenChange: y,
    side: C = "bottom",
    locale: x = "ja",
    ...g
  }, S) => {
    const [w, E] = _.useState(
      () => Ga(n || null)
    ), [k, N] = _.useState(b), P = e !== void 0, T = P ? Ga(e) : w, O = m !== void 0 ? m : k, D = _.useMemo(
      () => Ga(r || null),
      [r]
    ), L = _.useMemo(
      () => Ga(o || null),
      [o]
    ), V = _.useMemo(() => !D || !L ? !0 : D <= L, [D, L]), B = ($) => {
      const te = $ || null;
      P || E(te), t == null || t(te), te && (m === void 0 && N(!1), y == null || y(!1));
    }, W = ($) => {
      m === void 0 && N($), y == null || y($);
    }, Y = ($) => {
      switch ($.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          $.preventDefault(), O || W(!0);
          break;
        case "Escape":
          O && ($.preventDefault(), W(!1));
          break;
      }
    };
    return /* @__PURE__ */ d.jsxs(Sg, { open: O, onOpenChange: W, children: [
      /* @__PURE__ */ d.jsx(_g, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Tc,
        {
          ...g,
          ref: S,
          type: "text",
          readOnly: !0,
          placeholder: f,
          value: T ? u(T) : "",
          disabled: s,
          invalid: a || i,
          trailingIcon: c || r2,
          trailingIconSize: l,
          onTrailingIconClick: () => !s && W(!O),
          className: R(
            O && "ring-interactive-focused ring-4",
            h
          ),
          onKeyDown: Y,
          onClick: () => !s && W(!O),
          "aria-expanded": O,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ d.jsx(kg, { children: /* @__PURE__ */ d.jsx(
        Ru,
        {
          className: R(KO, p),
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
            Uy,
            {
              value: T,
              onChange: B,
              ...D && { minDate: D },
              ...L && { maxDate: L },
              disabled: !V,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: T || /* @__PURE__ */ new Date(),
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
], s7 = ({
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
  const [p, b] = _.useState(-1), y = s !== void 0 ? s : p !== -1, C = async (w) => {
    const E = a.indexOf(w);
    if (w.onAction) {
      b(E);
      const k = await w.onAction(t);
      if (b(-1), k === !1)
        return;
    } else
      b(-1);
    e && t(w.value);
  }, x = () => {
    n(t);
  }, g = (w) => {
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
              uu,
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
                      onClick: x,
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
                        const { label: k, classNames: N, onAction: P, value: T, ...O } = w;
                        return /* @__PURE__ */ d.jsx(
                          Ve,
                          {
                            loading: p === E,
                            ...O,
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
}, px = Qs(void 0), Bu = () => {
  const e = Is(px);
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
    (w) => _.isValidElement(w) && w.type === mx
  ), p = h.length, b = (w) => {
    w >= 0 && w < p && (s === void 0 && f(w), c == null || c(w));
  }, m = () => b(u + 1), y = () => b(u - 1), C = (w) => {
    s === void 0 && f(o), t(w);
  }, x = (w) => {
    w.preventDefault(), a && i && n(C);
  }, g = (w) => {
    w.preventDefault(), a && n(C);
  }, S = {
    currentStep: u,
    totalSteps: p,
    goToStep: b,
    nextStep: m,
    prevStep: y,
    isFirstStep: u === 0,
    isLastStep: u === p - 1,
    cancellable: a,
    onClose: C,
    onCancel: n
  };
  return /* @__PURE__ */ d.jsx(px.Provider, { value: S, children: /* @__PURE__ */ d.jsx(nc, { open: e, onOpenChange: C, children: /* @__PURE__ */ d.jsx(rc, { children: /* @__PURE__ */ d.jsx(
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
          onPointerDownOutside: x,
          onEscapeKeyDown: g,
          children: h[u]
        }
      )
    }
  ) }) }) });
}, mx = ({ children: e }) => /* @__PURE__ */ d.jsx("div", { className: "max-md:min-h-0 flex flex-col", children: e }), aD = ({ children: e }) => /* @__PURE__ */ d.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ d.jsx(
  uu,
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
  const { onCancel: o, onClose: s, cancellable: a } = Bu(), i = () => {
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
}, lD = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const s = Bu(), a = {
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
  return r ? /* @__PURE__ */ d.jsx(Qm, { asChild: !0, children: /* @__PURE__ */ d.jsx(Ve, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ d.jsx(Ve, { ...o, onClick: i, children: e });
}, a7 = {
  Root: sD,
  Step: mx,
  Header: aD,
  Body: iD,
  Footer: cD,
  Action: lD,
  useMultiStepDialog: Bu
}, i7 = ({
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
}, vx = Qs(void 0), gx = Qs(!1), bx = ({
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
  return /* @__PURE__ */ d.jsx(vx.Provider, { value: s, children: t });
}, dD = ({
  children: e
}) => /* @__PURE__ */ d.jsx(gx.Provider, { value: !0, children: e }), ma = () => {
  const e = Is(vx);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = Is(gx);
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
    const { isCollapsed: f, isInFooter: u } = ma(), h = r ? jr : "button", p = i ? "disabled" : t, b = /* @__PURE__ */ d.jsx(
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
    return f && s ? /* @__PURE__ */ d.jsx(Kt, { content: s, side: "right", delayDuration: 0, children: b }) : b;
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
}), xx = _.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, s) => {
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
xx.displayName = "SideNavigationSection";
const hD = {
  in: "animate-in slide-in-from-top",
  out: "animate-out slide-out-to-top",
  duration: 270
}, wx = _.createContext(null), cp = `bg-surface-secondary px-md gap-sm flex
  h-(--cc-mobile-header-height) items-center justify-between`, ld = _.forwardRef(({ icon: e, label: t, className: n, ...r }, o) => /* @__PURE__ */ d.jsxs(
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
ld.displayName = "MobileNavigationMenuButton";
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
  }, b) => {
    const m = _.useRef(null);
    _.useImperativeHandle(b, () => m.current);
    const y = _.useId(), [C, x] = _.useState(a), g = s !== void 0, S = g ? s : C, w = _.useRef(i);
    _.useEffect(() => {
      w.current = i;
    });
    const E = _.useCallback(
      (O) => {
        var D;
        g || x(O), (D = w.current) == null || D.call(w, O);
      },
      [g]
    );
    _.useEffect(() => {
      const O = m.current;
      if (!S || !O) return;
      const D = () => {
        getComputedStyle(O).display === "none" && E(!1);
      };
      D();
      const L = new ResizeObserver(D);
      return L.observe(O), () => L.disconnect();
    }, [S, E]);
    const k = _.useMemo(
      () => ({ close: () => E(!1) }),
      [E]
    ), N = c === !1 ? null : { ...hD, ...c }, P = N ? {
      animationDuration: `${N.duration}ms`,
      animationTimingFunction: N.easing,
      // Holds the closed state between the end of the animation and the
      // unmount, which would otherwise flash the open menu for a frame
      animationFillMode: S ? void 0 : "forwards"
    } : void 0, T = (O, D) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex items-center", children: e }),
      /* @__PURE__ */ d.jsxs("div", { className: "gap-xs flex shrink-0 items-center", children: [
        O,
        D
      ] })
    ] });
    return /* @__PURE__ */ d.jsx(bx, { children: /* @__PURE__ */ d.jsxs(nc, { open: S, onOpenChange: E, children: [
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
            cp,
            "z-navigation inset-x-0 top-0 md:hidden fixed",
            h
          ),
          ...p,
          children: T(
            t,
            /* @__PURE__ */ d.jsx(LS, { asChild: !0, children: /* @__PURE__ */ d.jsx(ld, { icon: _2, label: l }) })
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
              /* @__PURE__ */ d.jsx(uu, { className: "sr-only", children: u }),
              /* @__PURE__ */ d.jsx("div", { className: R(cp, "z-slight relative", h), children: T(
                n,
                /* @__PURE__ */ d.jsx(Qm, { asChild: !0, children: /* @__PURE__ */ d.jsx(ld, { icon: eu, label: f }) })
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
                    /* @__PURE__ */ d.jsx(wx.Provider, { value: k, children: o })
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
    const i = _.useContext(wx);
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
  xx,
  {
    ref: o,
    className: R("px-0 items-stretch", e),
    ...r
  }
));
vD.displayName = "MobileNavigationSection";
const Cx = Sg, gD = _g, bD = HE, Hu = _.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d.jsx(kg, { children: /* @__PURE__ */ d.jsx(
  Ru,
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
Hu.displayName = Ru.displayName;
const yD = (e) => typeof e == "string" ? e : e.label || e.value || String(e), xD = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, Sx = _.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: s,
      onSelect: a,
      renderSuggestion: i,
      getSuggestionValue: c = yD,
      getSuggestionKey: l = xD,
      debounceMs: f = 300,
      minQueryLength: u = 0,
      loadingText: h = "Loading...",
      disabled: p,
      onFocus: b,
      onBlur: m,
      onKeyDown: y,
      ...C
    } = e, [x, g] = tt(!1), [S, w] = tt(
      []
    ), [E, k] = tt(!1), N = ct(null), [P, T] = tt(0), O = ct([]), D = DO(n, f), L = po(() => {
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
        if (D.length < u) {
          w([]), g(!1), k(!1);
          return;
        }
        return N.current && N.current.abort(), N.current = new AbortController(), k(!0), s(D).then((A) => {
          w(A);
        }).catch((A) => {
          A.name !== "AbortError" && console.debug("AutoSuggest search failed:", A), w([]);
        }).finally(() => {
          k(!1);
        }), () => {
          N.current && N.current.abort();
        };
      }
    }, [D, s, u]);
    const V = ke(
      (A) => {
        const M = c(A);
        r(M), a == null || a(A), g(!1);
      },
      [r, a, c]
    ), B = ke(
      (A) => {
        p || g(!0), b == null || b(A);
      },
      [p, b]
    ), W = ke(
      (A) => {
        g(!1), m == null || m(A);
      },
      [m]
    ), Y = ke(
      (A) => {
        const M = A.target.value;
        r(M), !x && L.length > 0 && g(!0);
      },
      [r, x, L.length]
    );
    on(() => {
      T(0), O.current = [];
    }, [L]), on(() => {
      var A;
      x && P >= 0 && O.current[P] && ((A = O.current[P]) == null || A.scrollIntoView({
        block: "nearest"
      }));
    }, [P, x]);
    const I = ke(
      (A) => {
        if (!x) {
          y == null || y(A);
          return;
        }
        switch (A.key) {
          case "Escape":
            A.preventDefault(), g(!1);
            break;
          case "Enter": {
            A.preventDefault();
            const M = L[P];
            M && V(M);
            break;
          }
          case "ArrowDown":
            A.preventDefault(), T(
              (M) => M < L.length - 1 ? M + 1 : M
            );
            break;
          case "ArrowUp":
            A.preventDefault(), T((M) => M > 0 ? M - 1 : M);
            break;
        }
        y == null || y(A);
      },
      [x, P, L, V, y]
    ), $ = x && !p && (L.length > 0 || E), te = $ && P >= 0 ? `autosuggest-item-${P}` : void 0;
    return /* @__PURE__ */ d.jsxs(Cx, { open: $, children: [
      /* @__PURE__ */ d.jsx(bD, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Tc,
        {
          ref: t,
          value: n,
          onChange: Y,
          onFocus: B,
          onBlur: W,
          onKeyDown: I,
          disabled: p,
          role: "combobox",
          "aria-expanded": $,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": te,
          "aria-autocomplete": "list",
          ...C
        }
      ) }),
      /* @__PURE__ */ d.jsx(
        Hu,
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
              children: L.map((A, M) => {
                const F = c(A), z = M === P, X = `autosuggest-item-${M}`;
                return /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    id: X,
                    ref: (U) => {
                      O.current[M] = U;
                    },
                    role: "option",
                    "aria-selected": z,
                    "data-value": F,
                    onClick: () => V(A),
                    onPointerDown: (U) => {
                      U.preventDefault(), V(A);
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
Sx.displayName = "AutoSuggest";
var _e = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(_e || {}), ne = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(ne || {});
const wD = [
  {
    backgroundColor: ne.AccentSunSoft,
    textColor: _e.AccentSunStrong,
    iconColor: ne.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: ne.AccentSunPale,
    textColor: _e.AccentSunStrong,
    iconColor: ne.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: ne.AccentWoodSoft,
    textColor: _e.AccentWoodStrong,
    iconColor: ne.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: ne.AccentWoodPale,
    textColor: _e.AccentWoodStrong,
    iconColor: ne.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: ne.AccentOrangeSoft,
    textColor: _e.AccentOrangeStrong,
    iconColor: ne.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: ne.AccentOrangePale,
    textColor: _e.AccentOrangeStrong,
    iconColor: ne.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: ne.AccentYellowSoft,
    textColor: _e.AccentYellowStrong,
    iconColor: ne.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: ne.AccentYellowPale,
    textColor: _e.AccentYellowStrong,
    iconColor: ne.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: ne.AccentLemonSoft,
    textColor: _e.AccentLemonStrong,
    iconColor: ne.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: ne.AccentLemonPale,
    textColor: _e.AccentLemonStrong,
    iconColor: ne.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: ne.AccentGrassSoft,
    textColor: _e.AccentGrassStrong,
    iconColor: ne.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: ne.AccentGrassPale,
    textColor: _e.AccentGrassStrong,
    iconColor: ne.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: ne.AccentLimeSoft,
    textColor: _e.AccentLimeStrong,
    iconColor: ne.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: ne.AccentLimePale,
    textColor: _e.AccentLimeStrong,
    iconColor: ne.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: ne.AccentGreenSoft,
    textColor: _e.AccentGreenStrong,
    iconColor: ne.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: ne.AccentGreenPale,
    textColor: _e.AccentGreenStrong,
    iconColor: ne.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: ne.AccentPeacockSoft,
    textColor: _e.AccentPeacockStrong,
    iconColor: ne.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: ne.AccentPeacockPale,
    textColor: _e.AccentPeacockStrong,
    iconColor: ne.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: ne.AccentCyanSoft,
    textColor: _e.AccentCyanStrong,
    iconColor: ne.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: ne.AccentCyanPale,
    textColor: _e.AccentCyanStrong,
    iconColor: ne.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: ne.AccentSkySoft,
    textColor: _e.AccentSkyStrong,
    iconColor: ne.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: ne.AccentSkyPale,
    textColor: _e.AccentSkyStrong,
    iconColor: ne.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: ne.AccentSeaSoft,
    textColor: _e.AccentSeaStrong,
    iconColor: ne.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: ne.AccentSeaPale,
    textColor: _e.AccentSeaStrong,
    iconColor: ne.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: ne.AccentVioletSoft,
    textColor: _e.AccentVioletStrong,
    iconColor: ne.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: ne.AccentVioletPale,
    textColor: _e.AccentVioletStrong,
    iconColor: ne.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: ne.AccentPurpleSoft,
    textColor: _e.AccentPurpleStrong,
    iconColor: ne.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: ne.AccentPurplePale,
    textColor: _e.AccentPurpleStrong,
    iconColor: ne.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: ne.AccentMagentaSoft,
    textColor: _e.AccentMagentaStrong,
    iconColor: ne.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: ne.AccentMagentaPale,
    textColor: _e.AccentMagentaStrong,
    iconColor: ne.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: ne.AccentCharcoalSoft,
    textColor: _e.AccentCharchoalStrong,
    iconColor: ne.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: ne.AccentCharcoalPale,
    textColor: _e.AccentCharchoalStrong,
    iconColor: ne.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: ne.AccentGraySoft,
    textColor: _e.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: ne.AccentGrayPale,
    textColor: _e.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: ne.AccentGrayPale,
    textColor: _e.AccentGrayStrong,
    iconColor: ne.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: ne.AccentBambooPale,
    textColor: _e.AccentBambooStrong,
    iconColor: ne.AccentBambooStrong,
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
  const p = wD.find(
    (x) => x.code === e
  ), b = () => l === "secondary" ? `var(${p == null ? void 0 : p.iconColor})` : `var(${p == null ? void 0 : p.textColor})`, m = R(
    CD({
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
            style: u ? void 0 : { color: b() },
            children: it(f, { size: 14 })
          }
        ),
        h ? /* @__PURE__ */ d.jsx(im, { children: t }) : /* @__PURE__ */ d.jsx("div", { className: "pt-0.25 relative h-full truncate", children: t }),
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
}, _x = _.forwardRef(
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
    disabled: b,
    className: m,
    onValidateTag: y,
    defaultValidationError: C = "Invalid tag",
    ...x
  }, g) => {
    const [S, w] = tt(""), E = a ?? S, k = i ?? w, [N, P] = tt(!1), { compositionHandlers: T, guardKeyHandler: O } = jc(), [D, L] = tt(null), V = ct(null);
    _.useImperativeHandle(g, () => V.current);
    const B = _.useMemo(() => {
      const U = o.map(
        (j) => j.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(U.join("|"));
    }, [o]), W = ke(
      (U) => !(!U || !r && e.includes(U) || n && e.length >= n),
      [e, r, n]
    ), Y = ke(
      (U) => {
        const j = U.trim();
        if (W(j)) {
          if (y) {
            const J = y(j);
            if (!J.valid) {
              L(
                J.error ?? C
              );
              return;
            }
          }
          t([...e, j]), k(""), L(null);
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
    ), I = ke(
      (U) => {
        const j = e.filter((J, oe) => oe !== U);
        t(j);
      },
      [e, t]
    ), $ = ke(
      (U) => {
        const j = U.target.value, J = j[j.length - 1];
        if (J && o.includes(J)) {
          const de = j.slice(0, -1);
          de && Y(de);
          return;
        }
        const oe = j.split(B);
        if (oe.length > 1) {
          oe.filter(Boolean).forEach((de) => Y(de));
          return;
        }
        k(j);
      },
      [o, B, Y, k]
    ), te = ke(
      (U) => {
        U.key === "Enter" && E.trim() && (U.preventDefault(), Y(E)), (U.key === "Backspace" || U.key === "Delete") && !E && e.length > 0 && (U.preventDefault(), I(e.length - 1));
      },
      [E, e.length, Y, I]
    ), A = ke(() => {
      E.trim() && Y(E), P(!1), L(null);
    }, [E, Y]), M = b || (n ? e.length >= n : !1), F = e.length === 0 && !E, z = !!l, X = !!f;
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          className: R(
            hx({ invalid: p }),
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
                  X ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((U, j) => /* @__PURE__ */ d.jsx(
                    Ri,
                    {
                      ...!b && { onRemove: () => I(j) },
                      children: U
                    },
                    j
                  )),
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      ref: V,
                      value: E,
                      onChange: $,
                      onKeyDown: O(te),
                      onFocus: () => P(!0),
                      onBlur: A,
                      onCompositionStart: T.onCompositionStart,
                      onCompositionEnd: T.onCompositionEnd,
                      placeholder: F ? s : "",
                      disabled: M,
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
            !D && !N && "invisible"
          ),
          children: D || c
        }
      )
    ] });
  }
);
_x.displayName = "TagInput";
const c7 = Object.assign(Tc, {
  AutoSuggest: Sx,
  TagInput: _x
});
var lp = 1, SD = 0.9, _D = 0.8, kD = 0.17, yl = 0.1, xl = 0.999, ED = 0.9999, ND = 0.99, MD = /[\\\/_+.#"@\[\(\{&]/, PD = /[\\\/_+.#"@\[\(\{&]/g, AD = /[\s-]/, kx = /[\s-]/g;
function dd(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? lp : ND;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), l = n.indexOf(c, o), f = 0, u, h, p, b; l >= 0; ) u = dd(e, t, n, r, l + 1, s + 1, a), u > f && (l === o ? u *= lp : MD.test(e.charAt(l - 1)) ? (u *= _D, p = e.slice(o, l - 1).match(PD), p && o > 0 && (u *= Math.pow(xl, p.length))) : AD.test(e.charAt(l - 1)) ? (u *= SD, b = e.slice(o, l - 1).match(kx), b && o > 0 && (u *= Math.pow(xl, b.length))) : (u *= kD, o > 0 && (u *= Math.pow(xl, l - o))), e.charAt(l) !== t.charAt(s) && (u *= ED)), (u < yl && n.charAt(l - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(l - 1) !== r.charAt(s)) && (h = dd(e, t, n, r, l + 1, s + 2, a), h * yl > u && (u = h * yl)), u > f && (f = u), l = n.indexOf(c, l + 1);
  return a[i] = f, f;
}
function dp(e) {
  return e.toLowerCase().replace(kx, " ");
}
function RD(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, dd(e, t, dp(e), dp(t), 0, 0, {});
}
var ts = '[cmdk-group=""]', wl = '[cmdk-group-items=""]', OD = '[cmdk-group-heading=""]', Ex = '[cmdk-item=""]', up = `${Ex}:not([aria-disabled="true"])`, ud = "cmdk-item-select", no = "data-value", DD = (e, t, n) => RD(e, t, n), Nx = v.createContext(void 0), va = () => v.useContext(Nx), Mx = v.createContext(void 0), Gu = () => v.useContext(Mx), Px = v.createContext(void 0), Ax = v.forwardRef((e, t) => {
  let n = ro(() => {
    var M, F;
    return { search: "", value: (F = (M = e.value) != null ? M : e.defaultValue) != null ? F : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = ro(() => /* @__PURE__ */ new Set()), o = ro(() => /* @__PURE__ */ new Map()), s = ro(() => /* @__PURE__ */ new Map()), a = ro(() => /* @__PURE__ */ new Set()), i = Rx(e), { label: c, children: l, value: f, onValueChange: u, filter: h, shouldFilter: p, loop: b, disablePointerSelection: m = !1, vimBindings: y = !0, ...C } = e, x = Ze(), g = Ze(), S = Ze(), w = v.useRef(null), E = HD();
  Or(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, k.emit();
    }
  }, [f]), Or(() => {
    E(6, L);
  }, []);
  let k = v.useMemo(() => ({ subscribe: (M) => (a.current.add(M), () => a.current.delete(M)), snapshot: () => n.current, setState: (M, F, z) => {
    var X, U, j, J;
    if (!Object.is(n.current[M], F)) {
      if (n.current[M] = F, M === "search") D(), T(), E(1, O);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let oe = document.getElementById(S);
          oe ? oe.focus() : (X = document.getElementById(x)) == null || X.focus();
        }
        if (E(7, () => {
          var oe;
          n.current.selectedItemId = (oe = V()) == null ? void 0 : oe.id, k.emit();
        }), z || E(5, L), ((U = i.current) == null ? void 0 : U.value) !== void 0) {
          let oe = F ?? "";
          (J = (j = i.current).onValueChange) == null || J.call(j, oe);
          return;
        }
      }
      k.emit();
    }
  }, emit: () => {
    a.current.forEach((M) => M());
  } }), []), N = v.useMemo(() => ({ value: (M, F, z) => {
    var X;
    F !== ((X = s.current.get(M)) == null ? void 0 : X.value) && (s.current.set(M, { value: F, keywords: z }), n.current.filtered.items.set(M, P(F, z)), E(2, () => {
      T(), k.emit();
    }));
  }, item: (M, F) => (r.current.add(M), F && (o.current.has(F) ? o.current.get(F).add(M) : o.current.set(F, /* @__PURE__ */ new Set([M]))), E(3, () => {
    D(), T(), n.current.value || O(), k.emit();
  }), () => {
    s.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let z = V();
    E(4, () => {
      D(), (z == null ? void 0 : z.getAttribute("id")) === M && O(), k.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: x, inputId: S, labelId: g, listInnerRef: w }), []);
  function P(M, F) {
    var z, X;
    let U = (X = (z = i.current) == null ? void 0 : z.filter) != null ? X : DD;
    return M ? U(M, n.current.search, F) : 0;
  }
  function T() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, F = [];
    n.current.filtered.groups.forEach((X) => {
      let U = o.current.get(X), j = 0;
      U.forEach((J) => {
        let oe = M.get(J);
        j = Math.max(oe, j);
      }), F.push([X, j]);
    });
    let z = w.current;
    B().sort((X, U) => {
      var j, J;
      let oe = X.getAttribute("id"), de = U.getAttribute("id");
      return ((j = M.get(de)) != null ? j : 0) - ((J = M.get(oe)) != null ? J : 0);
    }).forEach((X) => {
      let U = X.closest(wl);
      U ? U.appendChild(X.parentElement === U ? X : X.closest(`${wl} > *`)) : z.appendChild(X.parentElement === z ? X : X.closest(`${wl} > *`));
    }), F.sort((X, U) => U[1] - X[1]).forEach((X) => {
      var U;
      let j = (U = w.current) == null ? void 0 : U.querySelector(`${ts}[${no}="${encodeURIComponent(X[0])}"]`);
      j == null || j.parentElement.appendChild(j);
    });
  }
  function O() {
    let M = B().find((z) => z.getAttribute("aria-disabled") !== "true"), F = M == null ? void 0 : M.getAttribute(no);
    k.setState("value", F || void 0);
  }
  function D() {
    var M, F, z, X;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let U = 0;
    for (let j of r.current) {
      let J = (F = (M = s.current.get(j)) == null ? void 0 : M.value) != null ? F : "", oe = (X = (z = s.current.get(j)) == null ? void 0 : z.keywords) != null ? X : [], de = P(J, oe);
      n.current.filtered.items.set(j, de), de > 0 && U++;
    }
    for (let [j, J] of o.current) for (let oe of J) if (n.current.filtered.items.get(oe) > 0) {
      n.current.filtered.groups.add(j);
      break;
    }
    n.current.filtered.count = U;
  }
  function L() {
    var M, F, z;
    let X = V();
    X && (((M = X.parentElement) == null ? void 0 : M.firstChild) === X && ((z = (F = X.closest(ts)) == null ? void 0 : F.querySelector(OD)) == null || z.scrollIntoView({ block: "nearest" })), X.scrollIntoView({ block: "nearest" }));
  }
  function V() {
    var M;
    return (M = w.current) == null ? void 0 : M.querySelector(`${Ex}[aria-selected="true"]`);
  }
  function B() {
    var M;
    return Array.from(((M = w.current) == null ? void 0 : M.querySelectorAll(up)) || []);
  }
  function W(M) {
    let F = B()[M];
    F && k.setState("value", F.getAttribute(no));
  }
  function Y(M) {
    var F;
    let z = V(), X = B(), U = X.findIndex((J) => J === z), j = X[U + M];
    (F = i.current) != null && F.loop && (j = U + M < 0 ? X[X.length - 1] : U + M === X.length ? X[0] : X[U + M]), j && k.setState("value", j.getAttribute(no));
  }
  function I(M) {
    let F = V(), z = F == null ? void 0 : F.closest(ts), X;
    for (; z && !X; ) z = M > 0 ? zD(z, ts) : BD(z, ts), X = z == null ? void 0 : z.querySelector(up);
    X ? k.setState("value", X.getAttribute(no)) : Y(M);
  }
  let $ = () => W(B().length - 1), te = (M) => {
    M.preventDefault(), M.metaKey ? $() : M.altKey ? I(1) : Y(1);
  }, A = (M) => {
    M.preventDefault(), M.metaKey ? W(0) : M.altKey ? I(-1) : Y(-1);
  };
  return v.createElement(re.div, { ref: t, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (M) => {
    var F;
    (F = C.onKeyDown) == null || F.call(C, M);
    let z = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || z)) switch (M.key) {
      case "n":
      case "j": {
        y && M.ctrlKey && te(M);
        break;
      }
      case "ArrowDown": {
        te(M);
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
        M.preventDefault(), $();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let X = V();
        if (X) {
          let U = new Event(ud);
          X.dispatchEvent(U);
        }
      }
    }
  } }, v.createElement("label", { "cmdk-label": "", htmlFor: N.inputId, id: N.labelId, style: YD }, c), $c(e, (M) => v.createElement(Mx.Provider, { value: k }, v.createElement(Nx.Provider, { value: N }, M))));
}), ID = v.forwardRef((e, t) => {
  var n, r;
  let o = Ze(), s = v.useRef(null), a = v.useContext(Px), i = va(), c = Rx(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  Or(() => {
    if (!l) return i.item(o, a == null ? void 0 : a.id);
  }, [l]);
  let f = Ox(o, s, [e.value, e.children, s], e.keywords), u = Gu(), h = ir((E) => E.value && E.value === f.current), p = ir((E) => l || i.filter() === !1 ? !0 : E.search ? E.filtered.items.get(o) > 0 : !0);
  v.useEffect(() => {
    let E = s.current;
    if (!(!E || e.disabled)) return E.addEventListener(ud, b), () => E.removeEventListener(ud, b);
  }, [p, e.onSelect, e.disabled]);
  function b() {
    var E, k;
    m(), (k = (E = c.current).onSelect) == null || k.call(E, f.current);
  }
  function m() {
    u.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: y, value: C, onSelect: x, forceMount: g, keywords: S, ...w } = e;
  return v.createElement(re.div, { ref: Vn(s, t), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!y, "aria-selected": !!h, "data-disabled": !!y, "data-selected": !!h, onPointerMove: y || i.getDisablePointerSelection() ? void 0 : m, onClick: y ? void 0 : b }, e.children);
}), jD = v.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = Ze(), i = v.useRef(null), c = v.useRef(null), l = Ze(), f = va(), u = ir((p) => o || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Or(() => f.group(a), []), Ox(a, i, [e.value, e.heading, c]);
  let h = v.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return v.createElement(re.div, { ref: Vn(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && v.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), $c(e, (p) => v.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, v.createElement(Px.Provider, { value: h }, p))));
}), TD = v.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = v.useRef(null), s = ir((a) => !a.search);
  return !n && !s ? null : v.createElement(re.div, { ref: Vn(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), $D = v.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Gu(), a = ir((l) => l.search), i = ir((l) => l.selectedItemId), c = va();
  return v.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), v.createElement(re.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (l) => {
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
  }, []), v.createElement(re.div, { ref: Vn(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, $c(e, (l) => v.createElement("div", { ref: Vn(a, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), LD = v.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return v.createElement(nc, { open: n, onOpenChange: r }, v.createElement(rc, { container: a }, v.createElement(oc, { "cmdk-overlay": "", className: o }), v.createElement(sc, { "aria-label": e.label, "cmdk-dialog": "", className: s }, v.createElement(Ax, { ref: t, ...i }))));
}), FD = v.forwardRef((e, t) => ir((n) => n.filtered.count === 0) ? v.createElement(re.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), VD = v.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return v.createElement(re.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, $c(e, (a) => v.createElement("div", { "aria-hidden": !0 }, a)));
}), Ot = Object.assign(Ax, { List: WD, Item: ID, Input: $D, Group: jD, Separator: TD, Dialog: LD, Empty: FD, Loading: VD });
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
function Rx(e) {
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
  let t = Gu(), n = () => e(t.snapshot());
  return v.useSyncExternalStore(t.subscribe, n, n);
}
function Ox(e, t, n, r = []) {
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
function $c({ asChild: e, children: t }, n) {
  return e && v.isValidElement(t) ? v.cloneElement(GD(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var YD = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Dx = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
Dx.displayName = Ot.displayName;
const Ix = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsx(Jd, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
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
Ix.displayName = Ot.Input.displayName;
const jx = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d.jsx(
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
jx.displayName = Ot.List.displayName;
const Tx = _.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  Ot.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Tx.displayName = Ot.Empty.displayName;
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
const fp = pe("ease-in-out transition-all duration-300", {
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
  searchAriaLabel: b = "利用可能なオプションを検索",
  optionsListAriaLabel: m = "利用可能なオプション",
  selectAllLabel: y = "すべて選択",
  selectAllCountLabel: C = "オプション",
  clearAllLabel: x = "すべてクリア",
  closeLabel: g = "閉じる",
  footerContent: S,
  moreSelectedLabel: w = "その他",
  searchPlaceholder: E = "オプションを検索...",
  maxCount: k = 10,
  maxSelected: N,
  maxSelectedReachedLabel: P = "選択できる上限に達しました。",
  modalPopover: T = !1,
  className: O,
  hideSelectAll: D = !1,
  searchable: L = !0,
  emptyIndicator: V = "結果が見つかりません。",
  noOptionsIndicator: B = "利用可能なオプションがありません。",
  autoSize: W = !1,
  singleLine: Y = !1,
  popoverClassName: I,
  disabled: $ = !1,
  invalid: te = !1,
  responsive: A,
  minWidth: M,
  maxWidth: F,
  deduplicateOptions: z = !1,
  resetOnDefaultValueChange: X = !0,
  closeOnSelect: U = !1,
  filterByValueAndLabel: j = !1,
  filterOption: J,
  renderOption: oe,
  customTrigger: de,
  selectionDisplayMode: me = "default",
  hideSelection: ge = !1,
  maxDisplayedOptions: Se,
  totalOptionsCount: Ie,
  moreOptionsLabel: Te = (ot) => `検索テキストを入力して他${ot}件を表示`,
  ...ut
}, Xe) => {
  const [ot, vt] = _.useState(i), [We, Ge] = _.useState(!1), [Qe, Dt] = _.useState(""), Mt = c !== void 0, ve = Mt ? c : ot, Zt = N !== void 0 && ve.length >= N, [It, fn] = _.useState(""), [hn, Rn] = _.useState(""), Qt = _.useRef(ve.length), Jt = _.useRef(We), On = _.useRef(Qe), Pt = _.useCallback(
    (K, ue = "polite") => {
      ue === "assertive" ? (Rn(K), setTimeout(() => Rn(""), 100)) : (fn(K), setTimeout(() => fn(""), 100));
    },
    []
  ), st = _.useCallback(
    (K) => {
      Mt || vt(K), t(K);
    },
    [Mt, t]
  ), H = _.useId(), ee = `${H}-listbox`, Q = `${H}-description`, G = `${H}-count`, ce = _.useRef(i), q = _.useCallback(
    (K) => {
      const ue = K[0];
      return !!(ue && typeof ue == "object" && "heading" in ue);
    },
    []
  ), ie = _.useCallback((K, ue) => {
    if (K.length !== ue.length) return !1;
    const be = [...K].sort(), Pe = [...ue].sort();
    return be.every((je, at) => je === Pe[at]);
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
  const [ze, jt] = _.useState("desktop");
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
        maxCount: k,
        compactMode: !1
      };
    if (A === !0) {
      const be = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[ze];
      return {
        maxCount: (be == null ? void 0 : be.maxCount) ?? k,
        compactMode: (be == null ? void 0 : be.compactMode) ?? !1
      };
    }
    const K = A[ze];
    return {
      maxCount: (K == null ? void 0 : K.maxCount) ?? k,
      compactMode: (K == null ? void 0 : K.compactMode) ?? !1
    };
  })(), Ye = _.useCallback(() => {
    if (e.length === 0) return [];
    let K;
    q(e) ? K = e.flatMap((je) => je.options) : K = e;
    const ue = /* @__PURE__ */ new Set(), be = [], Pe = [];
    return K.forEach((je) => {
      ue.has(je.value) ? (be.push(je.value), z || Pe.push(je)) : (ue.add(je.value), Pe.push(je));
    }), process.env.NODE_ENV === "development" && be.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${z ? "automatically removed" : "detected"}: ${be.join(
        ", "
      )}. ${z ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), z ? Pe : K;
  }, [e, z, q]), Dn = _.useCallback(
    (K) => {
      const ue = Ye().find((be) => be.value === K);
      return !ue && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${K}" not found in options list`
      ), ue;
    },
    [Ye]
  ), pr = _.useCallback(
    (K, ue) => {
      const [be, Pe] = K.split(":");
      if (!j)
        return Pe && Pe.toLowerCase().includes(ue.toLowerCase()) ? 1 : 0;
      const je = ue.toLowerCase();
      return Pe && Pe.toLowerCase().includes(je) || be && be.toLowerCase().includes(je) ? 1 : 0;
    },
    [j]
  ), Ea = (K) => {
    if (K.key === "Enter")
      Ge(!0);
    else if (K.key === "Backspace" && !K.currentTarget.value) {
      const ue = [...ve];
      ue.pop(), st(ue);
    }
  }, In = (K) => {
    if ($) return;
    const ue = Dn(K);
    if (ue != null && ue.disabled) return;
    const be = ve.includes(K);
    if (!be && Zt) {
      Pt(P, "assertive");
      return;
    }
    const Pe = be ? ve.filter((je) => je !== K) : [...ve, K];
    st(Pe), U && Ge(!1);
  }, Zf = () => {
    $ || st([]);
  }, V1 = () => {
    $ || Ge((K) => !K);
  }, z1 = () => {
    if ($) return;
    const K = ve.slice(
      0,
      ft.maxCount
    );
    st(K);
  }, B1 = () => {
    if ($) return;
    const K = Ye().filter((ue) => !ue.disabled);
    N !== void 0 && K.length > N || (ve.length === K.length ? Zf() : st(K.map((ue) => ue.value)), U && Ge(!1));
  }, Zc = oe || ((K) => {
    const { option: ue, location: be, onRemove: Pe, disabled: je } = K;
    return be === "badge" ? /* @__PURE__ */ d.jsx(
      Ri,
      {
        className: R(
          fp({ variant: a }),
          ft.compactMode && "text-xs px-1.5 py-0.5",
          ze === "mobile" && "max-w-[7.5rem] truncate",
          Y && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          je && "cursor-not-allowed"
        ),
        ...!je && { onRemove: Pe },
        children: ue.label
      }
    ) : ue.label;
  }), Qc = Ye().length > 0, Xo = Qe.trim(), Na = !!Xo, Qf = !!J && Na, mr = _.useMemo(() => !J || !Xo ? e : q(e) ? e.map((K) => ({
    ...K,
    options: K.options.filter(
      (ue) => J(ue, Xo)
    )
  })) : e.filter((K) => J(K, Xo)), [e, J, Xo, q]), Ma = Se !== void 0 && (!Na || !!n || !!J), Jf = _.useCallback(
    (K) => !!K.disabled || Zt && !ve.includes(K.value),
    [Zt, ve]
  ), H1 = N !== void 0 && Ye().filter((K) => !K.disabled).length > N;
  _.useEffect(() => {
    if (!X || Mt) return;
    const K = ce.current;
    ie(K, i) || (ie(ve, i) || vt(i), ce.current = [...i]);
  }, [
    i,
    ve,
    ie,
    X,
    Mt
  ]);
  const Jc = {
    minWidth: M || (ze === "mobile" ? "0px" : "12.5rem"),
    maxWidth: F || "100%",
    popoverMaxWidth: F || "32rem",
    width: W ? "auto" : "100%"
  }, eh = _.useMemo(() => me === "default" || ve.length === 0 ? l : ve.map((K) => {
    var ue;
    return (ue = Dn(K)) == null ? void 0 : ue.label;
  }).filter(Boolean).join(", "), [ve, Dn, l, me]);
  return _.useEffect(() => {
    We || Dt("");
  }, [We]), _.useEffect(() => {
    const K = ve.length, ue = Ye(), be = ue.filter((Pe) => !Pe.disabled).length;
    if (K !== Qt.current) {
      const Pe = K - Qt.current;
      if (Pe > 0) {
        const at = ve.slice(-Pe).map((gt) => {
          var jn;
          return (jn = ue.find((Hr) => Hr.value === gt)) == null ? void 0 : jn.label;
        }).filter(Boolean);
        at.length === 1 ? Pt(
          `${at[0]} selected. ${K} of ${be} options selected.`
        ) : Pt(
          `${at.length} options selected. ${K} of ${be} total selected.`
        );
      } else Pe < 0 && Pt(
        `Option removed. ${K} of ${be} options selected.`
      );
      Qt.current = K;
    }
    We !== Jt.current && (Pt(
      We ? `Dropdown opened. ${be} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), Jt.current = We), Qe !== On.current && Qe !== void 0 && (Qe && We && Pt(`Searching for "${Qe}"`), On.current = Qe);
  }, [ve, We, Qe, Pt, Ye]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ d.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: It }),
      /* @__PURE__ */ d.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: hn })
    ] }),
    /* @__PURE__ */ d.jsxs(
      Cx,
      {
        open: We,
        onOpenChange: Ge,
        modal: T,
        children: [
          /* @__PURE__ */ d.jsx("div", { id: Q, className: "sr-only", children: u }),
          /* @__PURE__ */ d.jsx("div", { id: G, className: "sr-only", "aria-live": "polite", children: ve.length === 0 ? h : `${ve.length} option${ve.length === 1 ? "" : "s"} selected: ${ve.map((K) => {
            var ue;
            return (ue = Dn(K)) == null ? void 0 : ue.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ d.jsxs("div", { className: R(W && "w-auto", O), children: [
            /* @__PURE__ */ d.jsx(gD, { asChild: !0, children: de || /* @__PURE__ */ d.jsx(
              "button",
              {
                ref: le,
                ...ut,
                onClick: V1,
                disabled: $,
                className: R(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  W ? "w-auto" : "w-full",
                  !te && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  te && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  ft.compactMode && "min-h-8 text-sm",
                  ze === "mobile" && "min-h-12"
                ),
                style: {
                  ...Jc,
                  maxWidth: `min(${Jc.maxWidth}, 100%)`
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
                            $ ? "text-body-disabled" : We || me === "inline" && eh !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: eh
                        }
                      ),
                      /* @__PURE__ */ d.jsx(
                        ea,
                        {
                          className: R(
                            "h-4 mx-xs cursor-pointer",
                            $ ? "text-body-disabled" : "text-body-primary"
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
                return ue ? /* @__PURE__ */ d.jsx(_.Fragment, { children: Zc({
                  option: ue,
                  location: "badge",
                  onRemove: () => In(K),
                  disabled: $
                }) }, K) : null;
              }).filter(Boolean),
              ve.length > ft.maxCount && /* @__PURE__ */ d.jsxs(
                Ri,
                {
                  className: R(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    fp({ variant: a }),
                    ft.compactMode && "text-xs px-1.5 py-0.5",
                    Y && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    $ && "cursor-not-allowed"
                  ),
                  ...!$ && { onRemove: z1 },
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
            Hu,
            {
              id: ee,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: R(
                "p-0 w-auto",
                ze === "mobile" && "w-[85vw] max-w-[17.5rem]",
                ze === "tablet" && "max-w-md w-[70vw]",
                ze === "desktop" && "min-w-[18.75rem]",
                I
              ),
              style: {
                maxWidth: `min(${Jc.popoverMaxWidth}, 85vw)`,
                maxHeight: ze === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ d.jsxs(
                Dx,
                {
                  filter: pr,
                  shouldFilter: !n && !J,
                  children: [
                    L && /* @__PURE__ */ d.jsxs("header", { children: [
                      /* @__PURE__ */ d.jsx("div", { id: `${H}-search-help`, className: "sr-only", children: p }),
                      /* @__PURE__ */ d.jsx(
                        Ix,
                        {
                          placeholder: E,
                          onKeyDown: Ea,
                          value: Qe,
                          onValueChange: (K) => {
                            Dt(K), n == null || n(K);
                          },
                          "aria-label": b,
                          "aria-describedby": `${H}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d.jsxs(
                      jx,
                      {
                        className: R(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          ze === "mobile" && "max-h-[calc(50vh-56px)]"
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
                          !r && (Qc || Na) && /* @__PURE__ */ d.jsx(Tx, { children: V }),
                          !r && !Qc && !Na && /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: B
                            }
                          ),
                          !r && !D && !H1 && !Qe && Qc && /* @__PURE__ */ d.jsx(ai, { children: /* @__PURE__ */ d.jsxs(
                            ii,
                            {
                              value: "select-all",
                              onSelect: B1,
                              role: "option",
                              "aria-selected": ve.length === Ye().filter((K) => !K.disabled).length,
                              "aria-label": `Select all ${Ye().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ d.jsx(
                                  bo,
                                  {
                                    className: "mr-xs",
                                    checked: ve.length === Ye().filter((K) => !K.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ d.jsxs("span", { children: [
                                  "(",
                                  y,
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
                          !r && (q(mr) ? (() => {
                            let K = 0;
                            const ue = mr.reduce(
                              (at, gt) => at + gt.options.length,
                              0
                            ), be = mr.map((at) => {
                              const gt = Ma ? at.options.filter(
                                (jn) => K++ < Se || ve.includes(jn.value)
                              ) : at.options;
                              return { ...at, options: gt };
                            }), Pe = be.reduce(
                              (at, gt) => at + gt.options.length,
                              0
                            ), je = (Qf ? ue : Ie ?? ue) - Pe;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              be.map((at) => at.options.length === 0 ? null : /* @__PURE__ */ d.jsx(
                                ai,
                                {
                                  heading: at.heading,
                                  children: at.options.map((gt) => {
                                    const jn = ve.includes(
                                      gt.value
                                    ), Hr = Jf(gt);
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
                                            bo,
                                            {
                                              className: "mr-xs",
                                              checked: jn
                                            }
                                          ),
                                          /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Zc({
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
                              Ma && je > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: Te(je) })
                            ] });
                          })() : /* @__PURE__ */ d.jsx(ai, { children: (() => {
                            const K = Ma ? mr.filter(
                              (be, Pe) => Pe < Se || ve.includes(be.value)
                            ) : mr, ue = (Qf ? mr.length : Ie ?? mr.length) - K.length;
                            return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                              K.map((be) => {
                                const Pe = ve.includes(
                                  be.value
                                ), je = Jf(be);
                                return /* @__PURE__ */ d.jsxs(
                                  ii,
                                  {
                                    value: `${be.value}:${be.label}`,
                                    onSelect: () => In(be.value),
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
                                      /* @__PURE__ */ d.jsx("span", { className: "min-w-0 overflow-hidden", children: Zc({
                                        option: be,
                                        location: "dropdown",
                                        isSelected: Pe
                                      }) })
                                    ]
                                  },
                                  be.value
                                );
                              }),
                              Ma && ue > 0 && /* @__PURE__ */ d.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: Te(ue) })
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
                                onClick: Zf,
                                disabled: ve.length === 0,
                                children: x
                              }
                            ),
                            /* @__PURE__ */ d.jsx(
                              Ve,
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
), fd = ({
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
  ...b
}) => {
  const [m, y] = _.useState(""), C = _.useRef(null), g = e.filter(
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
  }, w = (P) => !g || !m || "type" in P && (P.type === "Group" || P.type === "Separator") ? !0 : "label" in P ? S(P.label).toLowerCase().includes(m.toLowerCase()) : !0, E = {
    ...b
  }, k = c !== void 0 ? String(c) : void 0, N = (P) => {
    const T = e.find(
      (O) => "value" in O && String(O.value) === P
    );
    return T && "value" in T ? T.value : P;
  };
  return k !== void 0 && (E.value = k), f && (E.onValueChange = (P) => {
    const T = N(P);
    f(T);
  }), /* @__PURE__ */ d.jsxs(
    AN,
    {
      ...E,
      onOpenChange: (P) => {
        var T;
        P || y(""), (T = E.onOpenChange) == null || T.call(E, P);
      },
      children: [
        /* @__PURE__ */ d.jsxs(
          RN,
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
                  ON,
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
                DN,
                {
                  className: R("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": b.disabled
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
        /* @__PURE__ */ d.jsx(IN, { children: /* @__PURE__ */ d.jsxs(
          jN,
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
                    /* @__PURE__ */ d.jsx(Jd, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
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
              /* @__PURE__ */ d.jsx(zN, {}),
              /* @__PURE__ */ d.jsx(TN, { children: e.map((P, T) => {
                const O = w(P);
                switch (P.type) {
                  case "Group":
                    return /* @__PURE__ */ d.jsx(
                      $N,
                      {
                        className: R(!O && "hidden"),
                        children: /* @__PURE__ */ d.jsx(WN, { children: P.label })
                      },
                      T
                    );
                  case "Separator":
                    return /* @__PURE__ */ d.jsx(
                      HN,
                      {
                        className: R(
                          "border-divider-default h-px border-b",
                          !O && "hidden"
                        )
                      },
                      T
                    );
                  default:
                    return /* @__PURE__ */ d.jsxs(
                      LN,
                      {
                        value: String(P.value),
                        disabled: P.disabled ?? !1,
                        className: R(
                          QD({
                            variant: s,
                            isSelected: c === P.value
                          }),
                          !O && "hidden"
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
                            FN,
                            {
                              className: R("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": P.disabled
                              }),
                              children: P.label
                            }
                          ),
                          /* @__PURE__ */ d.jsx(VN, {})
                        ]
                      },
                      T
                    );
                }
              }) }),
              /* @__PURE__ */ d.jsx(BN, {}),
              /* @__PURE__ */ d.jsx(GN, {})
            ]
          }
        ) })
      ]
    }
  );
};
fd.displayName = "Select";
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
}), hp = pe(
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
    previousPageLabel: b = "Previous page",
    nextPageLabel: m = "Next page",
    size: y,
    className: C,
    ...x
  }, g) => {
    const S = y === "sm" ? "xs" : "sm", w = () => {
      e > 1 && r(e - 1);
    }, E = () => {
      e < t && r(e + 1);
    }, k = (D) => {
      const L = parseInt(D, 10);
      a(L), e > 1 && r(1);
    }, N = (D) => {
      const L = parseInt(D, 10);
      r(L);
    }, P = s.map((D) => ({
      value: D.toString(),
      label: D.toString()
    })), T = Math.max(t, 1), O = Array.from(
      { length: T },
      (D, L) => L + 1
    ).map((D) => ({
      value: D.toString(),
      label: l(D, T, n)
    }));
    return /* @__PURE__ */ d.jsxs(
      "div",
      {
        ref: g,
        className: R(JD({ size: y }), C),
        ...x,
        children: [
          h && /* @__PURE__ */ d.jsxs(
            "div",
            {
              className: R("gap-xs flex items-center", {
                "max-md:hidden": p
              }),
              children: [
                /* @__PURE__ */ d.jsx("span", { className: R(hp()), children: i }),
                /* @__PURE__ */ d.jsx(
                  fd,
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
            /* @__PURE__ */ d.jsx("span", { className: R(hp()), children: c }),
            /* @__PURE__ */ d.jsx(
              fd,
              {
                size: y,
                value: e.toString(),
                onValueChange: N,
                options: O,
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
                    icon: i2,
                    onClick: w,
                    disabled: e <= 1,
                    "aria-label": b
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  Ve,
                  {
                    intent: "text",
                    size: S,
                    icon: Qd,
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
), l7 = ({
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
      lN,
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
        children: /* @__PURE__ */ d.jsx(dN, { className: R(r5({ invalid: s })) })
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
}, d7 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ d.jsx(
  cN,
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
          Ri,
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
  }, b) => {
    const m = i || t === "disabled", [y, C] = _.useState(
      u ?? []
    ), [x, g] = _.useState(!1);
    let S;
    typeof t == "string" ? S = t : m ? S = "disabled" : y.length > 0 ? S = "filled" : S = "default";
    const w = _.useRef(S), { compositionHandlers: E, guardKeyHandler: k } = jc();
    on(() => {
      w.current === "filled" && S !== "filled" && C([]), w.current = S;
    }, [S]);
    const N = (O) => {
      m || o && o(O);
    }, P = (O) => {
      if (!m) {
        if (O.key === "Enter" && n.trim()) {
          const D = [...y, n.trim()];
          if (C(D), o) {
            const L = {
              ...O,
              target: { value: "" }
            };
            o(L);
          }
          f && s && s(D), O.preventDefault();
        }
        if ((O.key === "Backspace" || O.key === "Delete") && !n && y.length > 0) {
          const D = y.slice(0, -1);
          C(D), f && s && s(D), O.preventDefault();
        }
      }
    }, T = (O) => {
      if (m) return;
      const D = y.filter((L, V) => V !== O);
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
                      children: /* @__PURE__ */ d.jsx(Jd, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ d.jsxs("div", { className: R(a5), children: [
                    y.map((O, D) => /* @__PURE__ */ d.jsx(
                      d5,
                      {
                        keyword: O,
                        size: e === "sm" ? "sm" : "md",
                        disabled: m,
                        onRemove: () => T(D),
                        removeAriaLabel: h
                      },
                      `${D}-${O}`
                    )),
                    /* @__PURE__ */ d.jsx(
                      "input",
                      {
                        ref: b,
                        className: R(i5),
                        type: "text",
                        value: n,
                        onChange: N,
                        onKeyDown: k(P),
                        onCompositionStart: E.onCompositionStart,
                        onCompositionEnd: E.onCompositionEnd,
                        onFocus: (O) => {
                          var D;
                          g(!0), (D = p.onFocus) == null || D.call(p, O);
                        },
                        onBlur: (O) => {
                          var D;
                          g(!1), (D = p.onBlur) == null || D.call(p, O);
                        },
                        placeholder: S === "filled" || y.length > 0 ? "" : a,
                        disabled: m,
                        ...p
                      }
                    )
                  ] }),
                  (n || y.length > 0) && !m && /* @__PURE__ */ d.jsx(
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
                      children: /* @__PURE__ */ d.jsx(eu, { size: 20 })
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
                      let O = y;
                      n.trim() && (O = [...y, n.trim()], C(O), o && o({
                        target: { value: "" }
                      })), s == null || s(O);
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
const $x = _.createContext(null), f5 = () => {
  const e = _.useContext($x);
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
), Wx = _.forwardRef(
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
    const u = _.useId(), h = a ?? `segmented-control-${u}`, p = t !== void 0, [b, m] = _.useState(n), y = p ? t : b, C = _.useCallback(
      (g) => {
        p || m(g), r == null || r(g);
      },
      [p, r]
    ), x = _.useMemo(
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
    return /* @__PURE__ */ d.jsx($x.Provider, { value: x, children: /* @__PURE__ */ d.jsx(
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
Wx.displayName = "SegmentedControl.Group";
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
), Lx = ({
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
Lx.displayName = "SegmentedControl.Option";
const u7 = {
  Group: Wx,
  Option: Lx
}, Fx = _.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
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
      children: s ? /* @__PURE__ */ d.jsx(x2, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ d.jsx(b2, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ d.jsx(Kt, { content: i, side: "right", delayDuration: 0, children: c }) : c;
});
Fx.displayName = "SideNavigationCollapseButton";
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
), v5 = _.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ d.jsx(bx, { defaultCollapsed: e, children: /* @__PURE__ */ d.jsx(Vx, { ref: n, ...t }) }));
v5.displayName = "SideNavigation";
const Vx = _.forwardRef(
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
            Fx,
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
Vx.displayName = "SideNavigationContent";
const g5 = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", b5 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", f7 = () => {
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
        src: b5,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
};
var y5 = Object.defineProperty, x5 = Object.defineProperties, w5 = Object.getOwnPropertyDescriptors, pp = Object.getOwnPropertySymbols, C5 = Object.prototype.hasOwnProperty, S5 = Object.prototype.propertyIsEnumerable, mp = (e, t, n) => t in e ? y5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Xr = (e, t) => {
  for (var n in t || (t = {}))
    C5.call(t, n) && mp(e, n, t[n]);
  if (pp)
    for (var n of pp(t))
      S5.call(t, n) && mp(e, n, t[n]);
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
function Cl(e) {
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
      if (Cl(s)) {
        const w = s.initialIndex, E = s.index;
        return w === E || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, E);
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
  if (f === -1 && Cl(s)) {
    const g = s.initialGroup == null ? void 0 : Ya(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ya(e, s.group), E = s.index;
    if (g == null || w == null || g === w && S === E)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return Zr(Xr({}, e), {
        [g]: n(e[g], S, E)
      });
    const k = e[g][S];
    return Zr(Xr({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, E),
        k,
        ...e[w].slice(E)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: b } = s.manager, m = (o = (r = b.shape) == null ? void 0 : r.current.center) != null ? o : b.position.current;
  if (p == null) {
    const g = Ya(e, a.id);
    if (g != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && Cl(s)) {
      const g = s.group == null ? void 0 : Ya(e, s.group), S = s.group != null && g !== u, w = s.index !== f;
      if (S || w) {
        const E = s.group == null ? u : g;
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
var N5 = Symbol.for("preact-signals");
function Wc() {
  if (Ln > 1)
    Ln--;
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
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && Bx(n)) try {
          n.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        n = r;
      }
    }
    if (Oi = 0, Ln--, t) throw e;
  }
}
function He(e) {
  if (Ln > 0) return e();
  hd = ++M5, Ln++;
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
var Ns = void 0, Ln = 0, Oi = 0, M5 = 0, hd = 0, Di = void 0, Ii = 0;
function zx(e) {
  if (Le !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== Le)
      return t = { i: 0, S: e, p: Le.s, n: void 0, t: Le, e: void 0, x: void 0, r: t }, Le.s !== void 0 && (Le.s.n = t), Le.s = t, e.n = t, 32 & Le.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = Le.s, t.n = void 0, Le.s.n = t, Le.s = t), t;
  }
}
function Nt(e, t) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
Nt.prototype.brand = N5;
Nt.prototype.h = function() {
  return !0;
};
Nt.prototype.S = function(e) {
  var t = this, n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Ee(function() {
    var r;
    (r = t.W) == null || r.call(t);
  }));
};
Nt.prototype.U = function(e) {
  var t = this;
  if (this.t !== void 0) {
    var n = e.e, r = e.x;
    n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && Ee(function() {
      var o;
      (o = t.Z) == null || o.call(t);
    }));
  }
};
Nt.prototype.subscribe = function(e) {
  var t = this;
  return qt(function() {
    var n = t.value;
    Ee(function() {
      return e(n);
    });
  }, { name: "sub" });
};
Nt.prototype.valueOf = function() {
  return this.value;
};
Nt.prototype.toString = function() {
  return this.value + "";
};
Nt.prototype.toJSON = function() {
  return this.value;
};
Nt.prototype.peek = function() {
  var e = this;
  return Ee(function() {
    return e.value;
  });
};
Object.defineProperty(Nt.prototype, "value", { get: function() {
  var e = zx(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Oi > 100) throw new Error("Cycle detected");
    (function(n) {
      Ln !== 0 && Oi === 0 && n.l !== hd && (n.l = hd, Di = { S: n, v: n.v, i: n.i, o: Di });
    })(this), this.v = e, this.i++, Ii++, Ln++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      Wc();
    }
  }
} });
function Fo(e, t) {
  return new Nt(e, t);
}
function Bx(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function Hx(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function Gx(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Fr(e, t) {
  Nt.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Ii - 1, this.f = 4;
}
Fr.prototype = new Nt();
Fr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ii)) return !0;
  if (this.g = Ii, this.f |= 1, this.i > 0 && !Bx(this))
    return this.f &= -2, !0;
  var e = Le;
  try {
    Hx(this), Le = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return Le = e, Gx(this), this.f &= -2, !0;
};
Fr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  Nt.prototype.S.call(this, e);
};
Fr.prototype.U = function(e) {
  if (this.t !== void 0 && (Nt.prototype.U.call(this, e), this.t === void 0)) {
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
  var e = zx(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function vp(e, t) {
  return new Fr(e, t);
}
function Yx(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    Ln++;
    var n = Le;
    Le = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Yu(e), r;
    } finally {
      Le = n, Wc();
    }
  }
}
function Yu(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, Yx(e);
}
function P5(e) {
  if (Le !== this) throw new Error("Out-of-order effect");
  Gx(this), Le = e, this.f &= -2, 8 & this.f && Yu(this), Wc();
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
  this.f |= 1, this.f &= -9, Yx(this), Hx(this), Ln++;
  var e = Le;
  return Le = this, P5.bind(this, e);
};
Vo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = Ns, Ns = this);
};
Vo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Yu(this);
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
var A5 = Object.create, Ku = Object.defineProperty, R5 = Object.defineProperties, O5 = Object.getOwnPropertyDescriptor, D5 = Object.getOwnPropertyDescriptors, gp = Object.getOwnPropertySymbols, I5 = Object.prototype.hasOwnProperty, j5 = Object.prototype.propertyIsEnumerable, T5 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), zo = (e) => {
  throw TypeError(e);
}, pd = (e, t, n) => t in e ? Ku(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $5 = (e, t) => {
  for (var n in t || (t = {}))
    I5.call(t, n) && pd(e, n, t[n]);
  if (gp)
    for (var n of gp(t))
      j5.call(t, n) && pd(e, n, t[n]);
  return e;
}, W5 = (e, t) => R5(e, D5(t)), bp = (e, t) => Ku(e, "name", { value: t, configurable: !0 }), L5 = (e) => {
  var t;
  return [, , , A5((t = void 0) != null ? t : null)];
}, Kx = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ls = (e) => e !== void 0 && typeof e != "function" ? zo("Function expected") : e, F5 = (e, t, n, r, o) => ({ kind: Kx[e], name: t, metadata: r, addInitializer: (s) => n._ ? zo("Already initialized") : o.push(ls(s || null)) }), Ux = (e, t) => pd(t, T5("metadata"), e[3]), gr = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Bo = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), b = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = Kx[u + 5], y = u > 3 && (e[b - 1] = []), C = e[b] || (e[b] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && O5(u < 4 ? o : { get [n]() {
    return Bt(this, s);
  }, set [n](S) {
    return Zn(this, s, S);
  } }, n));
  u ? p && u < 4 && bp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : bp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = F5(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => V5(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Bt : z5)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Zn(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? ls(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? zo("Object expected") : (ls(a = i.get) && (x.get = a), ls(a = i.set) && (x.set = a), ls(a = i.init) && y.unshift(a));
  return u || Ux(e, o), x && Ku(o, n, x), p ? u ^ 4 ? s : x : o;
}, Uu = (e, t, n) => t.has(e) || zo("Cannot " + n), V5 = (e, t) => Object(t) !== t ? zo('Cannot use the "in" operator on this value') : e.has(t), Bt = (e, t, n) => (Uu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ds = (e, t, n) => t.has(e) ? zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Zn = (e, t, n, r) => (Uu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), z5 = (e, t, n) => (Uu(e, t, "access private method"), n);
function md(e, t) {
  if (t) {
    let n;
    return vp(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return vp(e);
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
function Ue(e, t) {
  const n = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = n.get(this);
    return r || (r = md(e.bind(this)), n.set(this, r)), r.value;
  };
}
function Sl(e = !0) {
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
var qx, Xx, Zx, Qx, Jx, e0, Ct, qu, _l, vd, gd, yt, Xu, kl, t0, bd, Zu, El, yd, xd;
e0 = [Ne], Jx = [Ne], Qx = [Ne], Zx = [Sl()], Xx = [Sl()], qx = [Sl()];
var Vr = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, gr(Ct, 5, this), ds(this, yt), ds(this, qu, gr(Ct, 8, this)), gr(Ct, 11, this), ds(this, Xu, gr(Ct, 12, this)), gr(Ct, 15, this), ds(this, Zu, gr(Ct, 16, this)), gr(Ct, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return Bt(this, yt, yd);
  }
  get initial() {
    return Bt(this, yt, vd);
  }
  get previous() {
    return Bt(this, yt, t0);
  }
  /** Set the current value */
  set current(e) {
    const t = Ee(() => Bt(this, yt, yd));
    e && t && this.equals(t, e) || He(() => {
      Bt(this, yt, vd) || Zn(this, yt, e, gd), Zn(this, yt, t, bd), Zn(this, yt, e, xd);
    });
  }
  /** Reset the state to the initial value */
  reset(e = this.defaultValue) {
    He(() => {
      Zn(this, yt, void 0, bd), Zn(this, yt, e, gd), Zn(this, yt, e, xd);
    });
  }
};
Ct = L5();
qu = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakSet();
Xu = /* @__PURE__ */ new WeakMap();
Zu = /* @__PURE__ */ new WeakMap();
_l = Bo(Ct, 20, "#initial", e0, yt, qu), vd = _l.get, gd = _l.set;
kl = Bo(Ct, 20, "#previous", Jx, yt, Xu), t0 = kl.get, bd = kl.set;
El = Bo(Ct, 20, "#current", Qx, yt, Zu), yd = El.get, xd = El.set;
Bo(Ct, 2, "current", Zx, Vr);
Bo(Ct, 2, "initial", Xx, Vr);
Bo(Ct, 2, "previous", qx, Vr);
Ux(Ct, Vr);
function Nl(e) {
  return Ee(() => {
    const t = {};
    for (const n in e)
      t[n] = e[n];
    return t;
  });
}
var yr, B5 = class {
  constructor() {
    ds(this, yr, /* @__PURE__ */ new WeakMap());
  }
  get(e, t) {
    var n;
    return e ? (n = Bt(this, yr).get(e)) == null ? void 0 : n.get(t) : void 0;
  }
  set(e, t, n) {
    var r;
    if (e)
      return Bt(this, yr).has(e) || Bt(this, yr).set(e, /* @__PURE__ */ new Map()), (r = Bt(this, yr).get(e)) == null ? void 0 : r.set(t, n);
  }
  clear(e) {
    var t;
    return e ? (t = Bt(this, yr).get(e)) == null ? void 0 : t.clear() : void 0;
  }
};
yr = /* @__PURE__ */ new WeakMap();
var H5 = Object.create, n0 = Object.defineProperty, G5 = Object.getOwnPropertyDescriptor, yp = Object.getOwnPropertySymbols, Y5 = Object.prototype.hasOwnProperty, K5 = Object.prototype.propertyIsEnumerable, r0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Lc = (e) => {
  throw TypeError(e);
}, xp = Math.pow, wd = (e, t, n) => t in e ? n0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, U5 = (e, t) => {
  for (var n in t || (t = {}))
    Y5.call(t, n) && wd(e, n, t[n]);
  if (yp)
    for (var n of yp(t))
      K5.call(t, n) && wd(e, n, t[n]);
  return e;
}, q5 = (e) => {
  var t;
  return [, , , H5((t = e == null ? void 0 : e[r0("metadata")]) != null ? t : null)];
}, o0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], s0 = (e) => e !== void 0 && typeof e != "function" ? Lc("Function expected") : e, X5 = (e, t, n, r, o) => ({ kind: o0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Lc("Already initialized") : o.push(s0(s || null)) }), Z5 = (e, t) => wd(t, r0("metadata"), e[3]), Q5 = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, a0 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, b = o0[f + 5], m = e[p] || (e[p] = []), y = (o = o.prototype, G5(o, n)), C = r.length - 1; C >= 0; C--)
    c = X5(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (x) => n in x }, l.get = (x) => x[n], a = (0, r[C])(y[b], c), i._ = 1, s0(a) && (y[b] = a);
  return y && n0(o, n, y), o;
}, i0 = (e, t, n) => t.has(e) || Lc("Cannot " + n), J5 = (e, t, n) => (i0(e, t, "read from private field"), t.get(e)), eI = (e, t, n) => t.has(e) ? Lc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), tI = (e, t, n, r) => (i0(e, t, "write to private field"), t.set(e, n), n), Ht = class Cd {
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
    return new Cd(t.x - n.x, t.y - n.y);
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
    return new Cd(t, n);
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
var c0, l0, Sd, ci, ba, Fc = class extends (Sd = Vr, l0 = [Ue], c0 = [Ue], Sd) {
  constructor(t) {
    const n = Ht.from(t);
    super(n, (r, o) => Ht.equals(r, o)), Q5(ba, 5, this), eI(this, ci, 0), this.velocity = { x: 0, y: 0 };
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
    He(() => {
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
ba = q5(Sd);
ci = /* @__PURE__ */ new WeakMap();
a0(ba, 2, "delta", l0, Fc);
a0(ba, 2, "direction", c0, Fc);
Z5(ba, Fc);
function _d({ x: e, y: t }, n) {
  const r = Math.abs(e), o = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(xp(r, 2) + xp(o, 2)) > n : "x" in n && "y" in n ? r > n.x && o > n.y : "x" in n ? r > n.x : "y" in n ? o > n.y : !1;
}
var d0 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(d0 || {}), u0 = Object.values(d0), rI = Object.create, Qu = Object.defineProperty, oI = Object.defineProperties, sI = Object.getOwnPropertyDescriptor, aI = Object.getOwnPropertyDescriptors, ji = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, h0 = Object.prototype.propertyIsEnumerable, p0 = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ho = (e) => {
  throw TypeError(e);
}, kd = (e, t, n) => t in e ? Qu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ju = (e, t) => {
  for (var n in t || (t = {}))
    f0.call(t, n) && kd(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      h0.call(t, n) && kd(e, n, t[n]);
  return e;
}, ef = (e, t) => oI(e, aI(t)), wp = (e, t) => Qu(e, "name", { value: t, configurable: !0 }), m0 = (e, t) => {
  var n = {};
  for (var r in e)
    f0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ji)
    for (var r of ji(e))
      t.indexOf(r) < 0 && h0.call(e, r) && (n[r] = e[r]);
  return n;
}, Go = (e) => {
  var t;
  return [, , , rI((t = e == null ? void 0 : e[p0("metadata")]) != null ? t : null)];
}, v0 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], us = (e) => e !== void 0 && typeof e != "function" ? Ho("Function expected") : e, iI = (e, t, n, r, o) => ({ kind: v0[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ho("Already initialized") : o.push(us(s || null)) }), zr = (e, t) => kd(t, p0("metadata"), e[3]), we = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Me = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), b = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = v0[u + 5], y = u > 3 && (e[b - 1] = []), C = e[b] || (e[b] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && sI(u < 4 ? o : { get [n]() {
    return Ke(this, s);
  }, set [n](S) {
    return Lt(this, s, S);
  } }, n));
  u ? p && u < 4 && wp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : wp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = iI(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => cI(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? Ke : g0)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => Lt(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? us(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? Ho("Object expected") : (us(a = i.get) && (x.get = a), us(a = i.set) && (x.set = a), us(a = i.init) && y.unshift(a));
  return u || zr(e, o), x && Qu(o, n, x), p ? u ^ 4 ? s : x : o;
}, tf = (e, t, n) => t.has(e) || Ho("Cannot " + n), cI = (e, t) => Object(t) !== t ? Ho('Cannot use the "in" operator on this value') : e.has(t), Ke = (e, t, n) => (tf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Re = (e, t, n) => t.has(e) ? Ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Lt = (e, t, n, r) => (tf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), g0 = (e, t, n) => (tf(e, t, "access private method"), n);
function b0(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function ya(e) {
  return (t) => b0(e, t);
}
function Bs(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var y0, Hs, nf, li;
y0 = [Ne];
var wt = class {
  /**
   * Creates a new plugin instance.
   *
   * @param manager - The drag and drop manager that owns this plugin
   * @param options - Optional configuration for the plugin
   */
  constructor(e, t) {
    this.manager = e, this.options = t, Re(this, nf, we(Hs, 8, this, !1)), we(Hs, 11, this), Re(this, li, /* @__PURE__ */ new Set());
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
    return b0(this, e);
  }
};
Hs = Go(null);
nf = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
Me(Hs, 4, "disabled", y0, wt, nf);
zr(Hs, wt);
var xa = class extends wt {
}, di, Ml = class {
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
var x0, w0, C0, rf, S0, nn, of, fo, sf, af;
C0 = [Ne], w0 = [Ne], x0 = [Ne];
var Hn = class wr {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(t, n) {
    Re(this, of, we(nn, 8, this)), we(nn, 11, this), Re(this, fo), Re(this, sf, we(nn, 12, this)), we(nn, 15, this), Re(this, af, we(nn, 16, this)), we(nn, 19, this);
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
      return g0(s = wr, rf, S0).call(s);
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
rf = /* @__PURE__ */ new WeakSet();
S0 = function() {
  const e = Hn.pendingIdChanges;
  Hn.pendingIdChanges = null, e && He(() => {
    for (const [t, n] of e)
      Ke(t, fo).value = n;
  });
};
of = /* @__PURE__ */ new WeakMap();
fo = /* @__PURE__ */ new WeakMap();
sf = /* @__PURE__ */ new WeakMap();
af = /* @__PURE__ */ new WeakMap();
Me(nn, 4, "manager", C0, Hn, of);
Me(nn, 4, "data", w0, Hn, sf);
Me(nn, 4, "disabled", x0, Hn, af);
Re(Hn, rf);
zr(nn, Hn);
Hn.pendingIdChanges = null;
var Vc = Hn, Cp = class {
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
}, _0, k0, E0, N0, M0, P0, Ed, St, cf, lf, df, En = class extends (Ed = Vc, P0 = [Ne], M0 = [Ne], N0 = [Ne], E0 = [Ue], k0 = [Ue], _0 = [Ue], Ed) {
  constructor(t, n) {
    var r = t, { modifiers: o, type: s, sensors: a, plugins: i, effects: c } = r, l = m0(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(
      ef(Ju({}, l), {
        effects: () => {
          var f;
          return [
            ...(f = c == null ? void 0 : c()) != null ? f : [],
            () => {
              const { manager: u, plugins: h } = this;
              if (!(!u || !h))
                for (const p of h) {
                  const { plugin: b } = Bs(p);
                  u.registry.plugins.register(b);
                }
            }
          ];
        }
      }),
      n
    ), we(St, 5, this), Re(this, cf, we(St, 8, this)), we(St, 11, this), Re(this, lf, we(St, 12, this)), we(St, 15, this), Re(this, df, we(St, 16, this, this.isDragSource ? "dragging" : "idle")), we(St, 19, this), this.type = s, this.sensors = a, this.modifiers = o, this.alignment = l.alignment, this.plugins = i;
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
St = Go(Ed);
cf = /* @__PURE__ */ new WeakMap();
lf = /* @__PURE__ */ new WeakMap();
df = /* @__PURE__ */ new WeakMap();
Me(St, 4, "type", P0, En, cf);
Me(St, 4, "modifiers", M0, En, lf);
Me(St, 4, "status", N0, En, df);
Me(St, 2, "isDropping", E0, En);
Me(St, 2, "isDragging", k0, En);
Me(St, 2, "isDragSource", _0, En);
zr(St, En);
var A0, R0, O0, D0, I0, j0, Nd, et, uf, ff, hf, pf, mf, Nn = class extends (Nd = Vc, j0 = [Ne], I0 = [Ne], D0 = [Ne], O0 = [Ne], R0 = [Ne], A0 = [Ue], Nd) {
  constructor(t, n) {
    var r = t, { accept: o, collisionDetector: s, collisionPriority: a, type: i } = r, c = m0(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, n), we(et, 5, this), Re(this, uf, we(et, 8, this)), we(et, 11, this), Re(this, ff, we(et, 12, this)), we(et, 15, this), Re(this, hf, we(et, 16, this)), we(et, 19, this), Re(this, pf, we(et, 20, this)), we(et, 23, this), Re(this, mf, we(et, 24, this)), we(et, 27, this), this.accept = o, this.collisionDetector = s, this.collisionPriority = a, this.type = i;
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
et = Go(Nd);
uf = /* @__PURE__ */ new WeakMap();
ff = /* @__PURE__ */ new WeakMap();
hf = /* @__PURE__ */ new WeakMap();
pf = /* @__PURE__ */ new WeakMap();
mf = /* @__PURE__ */ new WeakMap();
Me(et, 4, "accept", j0, Nn, uf);
Me(et, 4, "type", I0, Nn, ff);
Me(et, 4, "collisionDetector", D0, Nn, hf);
Me(et, 4, "collisionPriority", O0, Nn, pf);
Me(et, 4, "shape", R0, Nn, mf);
Me(et, 2, "isDropTarget", A0, Nn);
zr(et, Nn);
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
  return ef(Ju({}, e), {
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
}, zc = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(zc || {}), Bc = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Bc || {}), T0, $0, W0, L0, F0, V0, z0, Ut, vf;
z0 = [Ne], V0 = [Ue], F0 = [Ue], L0 = [Ue], W0 = [Ue], $0 = [Ue], T0 = [Ue];
var Gn = class {
  constructor() {
    we(Ut, 5, this), Re(this, vf, we(
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
vf = /* @__PURE__ */ new WeakMap();
Me(Ut, 4, "value", z0, Gn, vf);
Me(Ut, 2, "current", V0, Gn);
Me(Ut, 2, "idle", F0, Gn);
Me(Ut, 2, "initializing", L0, Gn);
Me(Ut, 2, "initialized", W0, Gn);
Me(Ut, 2, "dragging", $0, Gn);
Me(Ut, 2, "dropped", T0, Gn);
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
}, fi, B0 = class {
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
var Sp = class extends wt {
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
    this.draggables = new Cp(), this.droppables = new Cp(), this.plugins = new Ml(e), this.sensors = new Ml(e), this.modifiers = new Ml(e);
  }
  register(e, t) {
    if (e instanceof En)
      return this.draggables.register(e.id, e);
    if (e instanceof Nn)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof Sp)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof ko)
      return this.sensors.register(e, t);
    if (e.prototype instanceof wt)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Vc)
      return e instanceof En ? this.draggables.unregister(e.id, e) : e instanceof Nn ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof Sp)
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
}, H0, G0, Y0, K0, U0, q0, X0, Z0, Q0, fs, hi, ao, Be, gf, bf, yf, xf, wf, hs;
Q0 = [Ue], Z0 = [Ne], X0 = [Ne], q0 = [Ne], U0 = [Ne], K0 = [Ne], Y0 = [Ue], G0 = [Ue], H0 = [Ue];
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
    )), this.status = new Gn(), Re(this, gf, we(Be, 8, this, !1)), we(Be, 11, this), Re(this, bf, we(Be, 12, this, null)), we(Be, 15, this), Re(this, yf, we(Be, 16, this, null)), we(Be, 19, this), Re(this, xf, we(Be, 20, this, null)), we(Be, 23, this), Re(this, wf, we(Be, 24, this, [])), we(Be, 27, this), this.position = new Fc({ x: 0, y: 0 }), Re(this, hs, { x: 0, y: 0 }), Lt(this, fs, e);
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
      n = r.apply(ef(Ju({}, this.snapshot()), {
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
      shape: this.shape ? Nl(this.shape) : null,
      position: Nl(this.position),
      status: Nl(this.status),
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
      ), this.sourceIdentifier = null, this.targetIdentifier = null, Ke(this, ao).reset(), this.position.reset({ x: 0, y: 0 }), Lt(this, hs, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
Be = Go(null);
fs = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
ao = /* @__PURE__ */ new WeakMap();
gf = /* @__PURE__ */ new WeakMap();
bf = /* @__PURE__ */ new WeakMap();
yf = /* @__PURE__ */ new WeakMap();
xf = /* @__PURE__ */ new WeakMap();
wf = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
Me(Be, 2, "shape", Q0, un);
Me(Be, 4, "canceled", Z0, un, gf);
Me(Be, 4, "activatorEvent", X0, un, bf);
Me(Be, 4, "sourceIdentifier", q0, un, yf);
Me(Be, 4, "targetIdentifier", U0, un, xf);
Me(Be, 4, "modifiers", K0, un, wf);
Me(Be, 2, "source", Y0, un);
Me(Be, 2, "target", G0, un);
Me(Be, 2, "transform", H0, un);
zr(Be, un);
var gI = {
  get rendering() {
    return Promise.resolve();
  }
};
function sn(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var bI = class {
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
      var h, p, b;
      const m = Ee(() => this.dragOperation.modifiers), y = this.modifiers;
      for (const C of m)
        y.includes(C) || C.destroy();
      this.dragOperation.modifiers = (b = (p = (h = this.dragOperation.source) == null ? void 0 : h.modifiers) == null ? void 0 : p.map((C) => {
        const { plugin: x, options: g } = Bs(C);
        return new x(this, g);
      })) != null ? b : y;
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
}, J0 = (e) => {
  throw TypeError(e);
}, Cf = (e, t, n) => t.has(e) || J0("Cannot " + n), xe = (e, t, n) => (Cf(e, t, "read from private field"), t.get(e)), At = (e, t, n) => t.has(e) ? J0("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), $t = (e, t, n, r) => (Cf(e, t, "write to private field"), t.set(e, n), n), ew = (e, t, n) => (Cf(e, t, "access private method"), n);
function Hc(e) {
  return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function tw(e, t) {
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
function Sf(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function wa(e) {
  return "nodeType" in e;
}
function zt(e) {
  var t, n, r;
  return e ? Sf(e) ? e : wa(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function _f(e) {
  const { Document: t } = zt(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function cr(e) {
  return !e || Sf(e) ? !1 : e instanceof zt(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function nw(e) {
  return e instanceof zt(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Yo(e) {
  return e ? Sf(e) ? e.document : wa(e) ? _f(e) ? e : cr(e) || nw(e) ? e.ownerDocument : document : document : document;
}
function yI(e) {
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
      const g = u.getBoundingClientRect(), S = n * (g.bottom - g.top), w = n * (g.right - g.left), E = n * (g.bottom - g.top), k = n * (g.right - g.left);
      c = {
        top: Math.max(c.top, g.top - S),
        right: Math.min(c.right, g.right + w),
        bottom: Math.min(c.bottom, g.bottom + E),
        left: Math.max(c.left, g.left - k),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, c.width = c.right - c.left, c.height = c.bottom - c.top;
    }
    u = u.parentElement;
  }
  const h = f.visualViewport, p = (o = h == null ? void 0 : h.offsetTop) != null ? o : 0, b = (s = h == null ? void 0 : h.offsetLeft) != null ? s : 0, m = (a = h == null ? void 0 : h.width) != null ? a : f.innerWidth, y = (i = h == null ? void 0 : h.height) != null ? i : f.innerHeight, C = n * y, x = n * m;
  return c = {
    top: Math.max(c.top, p - C),
    right: Math.min(
      c.right,
      b + m + x
    ),
    bottom: Math.min(
      c.bottom,
      p + y + C
    ),
    left: Math.max(c.left, b - x),
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
var rw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Md(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(
    e.querySelectorAll("iframe, frame")
  ))
    try {
      const o = r.contentDocument;
      o && !t.has(o) && n.push(...Md(o, t));
    } catch {
    }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const o = r.parent;
      o && o.document && o.document !== e && n.push(...Md(o.document, t));
    }
  } catch {
  }
  return n;
}
function kf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function ow() {
  var e, t;
  const n = kf() ? window.visualViewport : null;
  return {
    x: (e = n == null ? void 0 : n.offsetLeft) != null ? e : 0,
    y: (t = n == null ? void 0 : n.offsetTop) != null ? t : 0
  };
}
function Ef(e) {
  return !e || !wa(e) ? !1 : e instanceof zt(e).ShadowRoot;
}
function Ti(e) {
  if (e && wa(e)) {
    let t = e.getRootNode();
    if (Ef(t))
      return t;
    if (t instanceof Document)
      return t;
  }
  return Yo(e);
}
function Nf(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CI(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((s, a) => {
    const i = r[a];
    if (_p(s) && _p(i) && (s.type !== "file" && (s.value = i.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), kp(s) && kp(i) && i.width > 0 && i.height > 0) {
      const c = s.getContext("2d");
      c == null || c.drawImage(i, 0, 0);
    }
  }), n;
}
function _p(e) {
  return "value" in e;
}
function kp(e) {
  return e.tagName === "CANVAS";
}
function sw(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (SI(r)) {
    const { contentDocument: o } = r;
    if (o) {
      const { left: s, top: a } = r.getBoundingClientRect();
      return sw(o, {
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
var Pd = /* @__PURE__ */ new WeakMap();
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
var aw = class {
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
function kI(e) {
  const t = /* @__PURE__ */ new Set();
  let n = No(e);
  for (; n; )
    t.add(n), n = No(n);
  return t;
}
function EI(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function iw(e, t) {
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
function NI(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function MI(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = Gs(
    e,
    t
  );
  return n > 0 && r > 0;
}
var PI = rw ? ResizeObserver : class {
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
var Ep = Array.from({ length: 100 }, (e, t) => t / 100), cw = 75, Cr, $i, qn, Sr, ps, pt, Ms, ms, Wi, lw, dw, uw = class {
  constructor(e, t, n = {
    debug: !1,
    skipInitial: !1
  }) {
    this.element = e, this.callback = t, At(this, Wi), this.disconnect = () => {
      var s, a, i;
      $t(this, Ms, !0), (s = xe(this, qn)) == null || s.disconnect(), (a = xe(this, Sr)) == null || a.disconnect(), xe(this, ps).disconnect(), (i = xe(this, pt)) == null || i.remove();
    }, At(this, Cr, !0), At(this, $i), At(this, qn), At(this, Sr), At(this, ps), At(this, pt), At(this, Ms, !1), At(this, ms, iw(() => {
      var s, a, i;
      const { element: c } = this;
      if ((s = xe(this, Sr)) == null || s.disconnect(), xe(this, Ms) || !xe(this, Cr) || !c.isConnected)
        return;
      const l = (a = c.ownerDocument) != null ? a : document, { innerHeight: f, innerWidth: u } = (i = l.defaultView) != null ? i : window, h = c.getBoundingClientRect(), p = Gs(c, h), { top: b, left: m, bottom: y, right: C } = p, x = -Math.floor(b), g = -Math.floor(m), S = -Math.floor(u - C), w = -Math.floor(f - y), E = `${x}px ${S}px ${w}px ${g}px`;
      this.boundingClientRect = h, $t(this, Sr, new IntersectionObserver(
        (k) => {
          const [N] = k, { intersectionRect: P } = N;
          (N.intersectionRatio !== 1 ? N.intersectionRatio : kn.intersectionRatio(
            P,
            Gs(c)
          )) !== 1 && xe(this, ms).call(this);
        },
        {
          threshold: Ep,
          rootMargin: E,
          root: l
        }
      )), xe(this, Sr).observe(c), ew(this, Wi, lw).call(this);
    }, cw)), this.boundingClientRect = e.getBoundingClientRect(), $t(this, Cr, MI(e, this.boundingClientRect));
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
        threshold: Ep,
        root: o
      }
    )), xe(this, Cr) && !n.skipInitial && this.callback(this.boundingClientRect), xe(this, ps).observe(e);
  }
};
Cr = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ms = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakSet();
lw = function() {
  xe(this, Ms) || (ew(this, Wi, dw).call(this), !NI(this.boundingClientRect, xe(this, $i)) && (this.callback(this.boundingClientRect), $t(this, $i, this.boundingClientRect)));
};
dw = function() {
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
  return n || (n = { disconnect: new uw(
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
var vs, gs, mi, Ad, II = class {
  constructor(e, t, n) {
    this.callback = t, At(this, vs), At(this, gs, !1), At(this, mi), At(this, Ad, iw((a) => {
      if (!xe(this, gs) && a.target && "contains" in a.target && typeof a.target.contains == "function") {
        for (const i of xe(this, mi))
          if (a.target.contains(i)) {
            this.callback(xe(this, vs).boundingClientRect);
            break;
          }
      }
    }, cw));
    const r = kI(e), o = OI(r, t), s = DI(e, xe(this, Ad));
    $t(this, mi, r), $t(this, vs, new uw(e, t, n)), this.disconnect = () => {
      xe(this, gs) || ($t(this, gs, !0), o(), s(), xe(this, vs).disconnect());
    };
  }
};
vs = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Ad = /* @__PURE__ */ new WeakMap();
function Rd(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function yo(e) {
  try {
    Rd(e) && e.isConnected && e.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
    !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function Np(e) {
  return !rw || !e ? !1 : e === Yo(e).scrollingElement;
}
function fw(e) {
  var t, n;
  const r = zt(e), o = Np(e) ? yI(e) : Gc(e), s = r.visualViewport, a = Np(e) ? {
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
  const { isTop: n, isBottom: r, isLeft: o, isRight: s, position: a } = fw(e), { x: i, y: c } = t ?? { x: 0, y: 0 }, l = !n && a.current.y + c > 0, f = !r && a.current.y + c < a.max.y, u = !o && a.current.x + i > 0, h = !s && a.current.x + i < a.max.x;
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
}, Li = new Mf((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), TI = new Mf((e) => setTimeout(e, 50)), Fi = /* @__PURE__ */ new Map(), $I = Fi.clear.bind(Fi);
function An(e, t = !1) {
  if (!t) return Mp(e);
  let n = Fi.get(e);
  return n || (n = Mp(e), Fi.set(e, n), TI.schedule($I), n);
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
function Od(e, t = FI) {
  const { limit: n, excludeElement: r, escapeShadowDOM: o } = t, s = /* @__PURE__ */ new Set();
  function a(i) {
    if (n != null && s.size >= n || !i)
      return s;
    if (_f(i) && i.scrollingElement != null && !s.has(i.scrollingElement))
      return s.add(i.scrollingElement), s;
    if (o && Ef(i))
      return a(i.host);
    if (!cr(i))
      return nw(i) ? a(i.parentElement) : s;
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
    const o = Gc(r), { x: s, y: a } = VI(r, o);
    n.x = n.x + o.left, n.y = n.y + o.top, n.scaleX = n.scaleX * s, n.scaleY = n.scaleY * a, r = No(r);
  }
  return n;
}
function VI(e, t = Gc(e)) {
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
function Yc(e) {
  var t, n, r, o, s, a, i, c, l;
  const { scale: f, transform: u, translate: h } = e, p = zI(f), b = Ys(h), m = BI(u);
  if (!m && !p && !b)
    return null;
  const y = {
    x: (t = p == null ? void 0 : p.x) != null ? t : 1,
    y: (n = p == null ? void 0 : p.y) != null ? n : 1
  }, C = {
    x: (r = b == null ? void 0 : b.x) != null ? r : 0,
    y: (o = b == null ? void 0 : b.y) != null ? o : 0
  }, x = {
    x: (s = m == null ? void 0 : m.x) != null ? s : 0,
    y: (a = m == null ? void 0 : m.y) != null ? a : 0,
    scaleX: (i = m == null ? void 0 : m.scaleX) != null ? i : 1,
    scaleY: (c = m == null ? void 0 : m.scaleY) != null ? c : 1
  };
  return {
    x: C.x + x.x,
    y: C.y + x.y,
    z: (l = b == null ? void 0 : b.z) != null ? l : 0,
    scaleX: y.x * x.scaleX,
    scaleY: y.y * x.scaleY
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
  const { x: a, y: i } = t, { rect: c, isTop: l, isBottom: f, isLeft: u, isRight: h } = fw(e), p = Mo(e), b = An(e, !0), m = Yc(b), y = m !== null ? (m == null ? void 0 : m.scaleX) < 0 : !1, C = m !== null ? (m == null ? void 0 : m.scaleY) < 0 : !1, x = new kn(
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
  )), w.width > 0 && (!h || y && !u) && a >= x.right - w.width && (n == null ? void 0 : n.x) !== -1 && i >= x.top - s.y && i <= x.bottom + s.y ? (g.x = y ? -1 : 1, S.x = r * Math.abs(
    (x.right - w.width - a) / w.width
  )) : w.width > 0 && (!u || y && !h) && a <= x.left + w.width && (n == null ? void 0 : n.x) !== 1 && i >= x.top - s.y && i <= x.bottom + s.y && (g.x = y ? 1 : -1, S.x = r * Math.abs(
    (x.left + w.width - a) / w.width
  )), {
    direction: g,
    speed: S
  };
}
function hw(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!cr(e))
    return;
  const r = Od(e), o = [];
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
function Pp(e) {
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
  const n = Pp(e), r = Pp(t);
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
function pw({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function Ap(e, t = An(e).translate, n = !0) {
  if (n) {
    const r = tw(
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
    (o) => Hc(o.effect) && o.effect.target === e
  );
  return Ps.set(e, r), n;
}
function JI(e, t) {
  const n = QI(e).filter((r) => {
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
    } = t, l = JI(e, {
      properties: ["transform", "translate", "scale", "width", "height"],
      isValidTarget: (w) => (w !== e || kf()) && w.contains(e)
    }), f = c(e);
    let { top: u, left: h, width: p, height: b } = f, m;
    const y = An(e), C = Yc(y), x = {
      x: (n = C == null ? void 0 : C.scaleX) != null ? n : 1,
      y: (r = C == null ? void 0 : C.scaleY) != null ? r : 1
    }, g = e3(e, y);
    l == null || l(), C && (m = qI(
      f,
      C,
      y.transformOrigin
    ), (i || g) && (u = m.top, h = m.left, p = m.width, b = m.height));
    const S = {
      width: (o = m == null ? void 0 : m.width) != null ? o : p,
      height: (s = m == null ? void 0 : m.height) != null ? s : b
    };
    if (g && !i && m) {
      const w = UI(
        m,
        g,
        y.transformOrigin
      );
      u = w.top, h = w.left, p = w.width, b = w.height, x.x = g.scaleX, x.y = g.scaleY;
    }
    a && (i || (h *= a.scaleX, p *= a.scaleX, u *= a.scaleY, b *= a.scaleY), h += a.x, u += a.y), super(h, u, p, b), this.scale = x, this.intrinsicWidth = S.width, this.intrinsicHeight = S.height;
  }
};
function e3(e, t) {
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
var Pl = {};
function Dd(e) {
  const t = Pl[e] == null ? 0 : Pl[e] + 1;
  return Pl[e] = t, `${e}-${t}`;
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
      type: Bc.PointerIntersection,
      priority: zc.High
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
      type: Bc.ShapeIntersection,
      priority: zc.Normal
    };
  }
  return null;
}, mw = (e) => {
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
    type: Bc.Collision,
    priority: zc.Normal
  };
}, c3 = Object.create, Pf = Object.defineProperty, l3 = Object.defineProperties, d3 = Object.getOwnPropertyDescriptor, u3 = Object.getOwnPropertyDescriptors, Vi = Object.getOwnPropertySymbols, vw = Object.prototype.hasOwnProperty, gw = Object.prototype.propertyIsEnumerable, bw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Ko = (e) => {
  throw TypeError(e);
}, Id = (e, t, n) => t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Us = (e, t) => {
  for (var n in t || (t = {}))
    vw.call(t, n) && Id(e, n, t[n]);
  if (Vi)
    for (var n of Vi(t))
      gw.call(t, n) && Id(e, n, t[n]);
  return e;
}, Af = (e, t) => l3(e, u3(t)), Rp = (e, t) => Pf(e, "name", { value: t, configurable: !0 }), yw = (e, t) => {
  var n = {};
  for (var r in e)
    vw.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Vi)
    for (var r of Vi(e))
      t.indexOf(r) < 0 && gw.call(e, r) && (n[r] = e[r]);
  return n;
}, Uo = (e) => {
  var t;
  return [, , , c3((t = e == null ? void 0 : e[bw("metadata")]) != null ? t : null)];
}, xw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], bs = (e) => e !== void 0 && typeof e != "function" ? Ko("Function expected") : e, f3 = (e, t, n, r, o) => ({ kind: xw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Ko("Already initialized") : o.push(bs(s || null)) }), Br = (e, t) => Id(t, bw("metadata"), e[3]), nt = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Xt = (e, t, n, r, o, s) => {
  var a, i, c, l, f, u = t & 7, h = !!(t & 8), p = !!(t & 16), b = u > 3 ? e.length + 1 : u ? h ? 1 : 2 : 0, m = xw[u + 5], y = u > 3 && (e[b - 1] = []), C = e[b] || (e[b] = []), x = u && (!p && !h && (o = o.prototype), u < 5 && (u > 3 || !p) && d3(u < 4 ? o : { get [n]() {
    return $e(this, s);
  }, set [n](S) {
    return _t(this, s, S);
  } }, n));
  u ? p && u < 4 && Rp(s, (u > 2 ? "set " : u > 1 ? "get " : "") + n) : Rp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = f3(u, n, c = {}, e[3], C), u && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => h3(o, S) : (S) => n in S }, u ^ 3 && (f.get = p ? (S) => (u ^ 1 ? $e : Ir)(S, o, u ^ 4 ? s : x.get) : (S) => S[n]), u > 2 && (f.set = p ? (S, w) => _t(S, o, w, u ^ 4 ? s : x.set) : (S, w) => S[n] = w)), i = (0, r[g])(u ? u < 4 ? p ? s : x[m] : u > 4 ? void 0 : { get: x.get, set: x.set } : o, l), c._ = 1, u ^ 4 || i === void 0 ? bs(i) && (u > 4 ? y.unshift(i) : u ? p ? s = i : x[m] = i : o = i) : typeof i != "object" || i === null ? Ko("Object expected") : (bs(a = i.get) && (x.get = a), bs(a = i.set) && (x.set = a), bs(a = i.init) && y.unshift(a));
  return u || Br(e, o), x && Pf(o, n, x), p ? u ^ 4 ? s : x : o;
}, Rf = (e, t, n) => t.has(e) || Ko("Cannot " + n), h3 = (e, t) => Object(t) !== t ? Ko('Cannot use the "in" operator on this value') : e.has(t), $e = (e, t, n) => (Rf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => t.has(e) ? Ko("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), _t = (e, t, n, r) => (Rf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ir = (e, t, n) => (Rf(e, t, "access private method"), n), Op = {
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
function b3(e) {
  const t = e.tagName.toLowerCase();
  return ["input", "select", "textarea", "a", "button"].includes(t);
}
function y3(e, t) {
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
    } = t ?? {}, c = n ? `${r}-${n}` : Dd(r), l = n ? `${o}-${n}` : Dd(o);
    let f, u, h, p;
    const b = (w = p) => {
      !h || !w || (h == null ? void 0 : h.nodeValue) !== w && (h.nodeValue = w);
    }, m = () => Li.schedule(b), y = S3(
      m,
      i
    ), C = Object.entries(s).map(
      ([w, E]) => this.manager.monitor.addEventListener(
        w,
        (k, N) => {
          const P = h;
          if (!P) return;
          const T = E == null ? void 0 : E(k, N);
          T && P.nodeValue !== T && (p = T, w3.includes(w) ? y() : (m(), y.cancel()));
        }
      )
    ), x = () => {
      let w = [];
      f != null && f.isConnected || (f = y3(
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
      for (const E of this.manager.registry.draggables.value) {
        const k = (w = E.handle) != null ? w : E.element;
        if (k) {
          (!f || !u) && g.add(x), (!b3(k) || kf()) && !k.hasAttribute("tabindex") && g.add(() => k.setAttribute("tabindex", "0")), !k.hasAttribute("role") && k.tagName.toLowerCase() !== "button" && g.add(
            () => k.setAttribute("role", Op.role)
          ), k.hasAttribute("aria-roledescription") || g.add(
            () => k.setAttribute(
              "aria-roledescription",
              Op.roleDescription
            )
          ), k.hasAttribute("aria-describedby") || g.add(
            () => k.setAttribute("aria-describedby", c)
          );
          for (const P of ["aria-pressed", "aria-grabbed"]) {
            const T = String(E.isDragging);
            k.getAttribute(P) !== T && g.add(() => k.setAttribute(P, T));
          }
          const N = String(E.disabled);
          k.getAttribute("aria-disabled") !== N && g.add(
            () => k.setAttribute("aria-disabled", N)
          );
        }
      }
      g.size > 0 && Li.schedule(S);
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
var zi = /* @__PURE__ */ new Map(), ww, Cw, Sw, _w, jd, Rs, Fn, Of, Po, kw, Ew, Nw, Mw, lr = class extends (jd = xa, _w = [Ne], Sw = [Ue], Cw = [Ue], ww = [Ue], jd) {
  constructor(t, n) {
    super(t, n), nt(Fn, 5, this), qe(this, Po), qe(this, Rs, /* @__PURE__ */ new Set()), qe(this, Of, nt(Fn, 8, this, /* @__PURE__ */ new Set())), nt(Fn, 11, this), this.registerEffect(Ir(this, Po, kw));
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
Fn = Uo(jd);
Rs = /* @__PURE__ */ new WeakMap();
Of = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
kw = function() {
  const { roots: e } = this, t = [];
  for (const n of e)
    for (const r of $e(this, Rs))
      t.push(Ir(this, Po, Ew).call(this, n, r));
  return () => {
    for (const n of t)
      n();
  };
};
Ew = function(e, t) {
  let n = zi.get(e);
  n || (n = /* @__PURE__ */ new Map(), zi.set(e, n));
  let r = n.get(t);
  if (!r) {
    const s = _f(e) ? Ir(this, Po, Nw).call(this, e, n, t) : Ir(this, Po, Mw).call(this, e, n, t);
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
Nw = function(e, t, n) {
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
      if (Ef(e) && ((a = e.host) != null && a.isConnected)) {
        const i = e.adoptedStyleSheets.indexOf(s);
        i !== -1 && e.adoptedStyleSheets.splice(i, 1);
      }
      t.delete(n), t.size === 0 && zi.delete(e);
    }
  };
};
Xt(Fn, 4, "additionalRoots", _w, lr, Of);
Xt(Fn, 2, "sourceRoot", Sw, lr);
Xt(Fn, 2, "targetRoot", Cw, lr);
Xt(Fn, 2, "roots", ww, lr);
Br(Fn, lr);
lr.configure = ya(lr);
var Kc = lr, _3 = class extends wt {
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
}, Ca = "data-dnd-", Td = `${Ca}dropping`, ht = "--dnd-", mn = `${Ca}dragging`, Bi = `${Ca}placeholder`, k3 = [
  mn,
  Bi,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], E3 = ["view-transition-name"], N3 = `
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

  :is(:root,:host) [${Bi}] {
    transition: none;
  }

  :is(:root,:host) [${Bi}='hidden'] {
    visibility: hidden;
  }

  [${mn}] * {
    pointer-events: none !important;
  }

  [${mn}]:not([${Td}]) {
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
function M3(e, t = "hidden") {
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
      const o = `${Ca}${Dd("dom-id")}`;
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
    r.proxy = a, a.removeAttribute(o), Pd.set(i, a), n.push(() => {
      Pd.delete(i), r.proxy = void 0;
    });
  }
}
function R3(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute(Bi, t);
}
function Pw(e, t) {
  return e === t ? !0 : No(e) === No(t);
}
function Dp(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && Dr(t) && t.hasAttribute("popover") && requestAnimationFrame(() => yo(t));
}
function $d(e) {
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
function I3(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const o = new Sn(e.placeholder, {
      frameTransform: e.frameTransform,
      ignoreTransforms: !0
    }), s = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, a = (e.width - o.width) * s.x + e.delta.x, i = (e.height - o.height) * s.y + e.delta.y, c = ow();
    if (e.styles.set(
      {
        width: o.width - e.widthOffset,
        height: o.height - e.heightOffset,
        top: e.top + i + c.y,
        left: e.left + a + c.x
      },
      ht
    ), (n = e.getElementMutationObserver()) == null || n.takeRecords(), $d(e.element) && $d(e.placeholder)) {
      const m = Array.from(e.element.cells), y = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(m.map((C) => C.style.width));
      for (const [C, x] of m.entries()) {
        const g = y[C];
        x.style.width = `${g.getBoundingClientRect().width}px`;
      }
    }
    const l = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, f = e.left + a + c.x + l.x, u = e.top + i + c.y + l.y, h = o.width - e.widthOffset, p = o.height - e.heightOffset, b = e.frameTransform;
    e.dragOperation.shape = new kn(
      f * b.scaleX + b.x,
      u * b.scaleY + b.y,
      h * b.scaleX,
      p * b.scaleY
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
  yo(e.feedbackElement);
  const [, c] = (t = tw(
    e.feedbackElement,
    (x) => "translate" in x
  )) != null ? t : [];
  c == null || c.pause();
  const l = (n = e.placeholder) != null ? n : e.element, f = {
    frameTransform: Pw(e.feedbackElement, l) ? null : void 0
  }, u = new Sn(e.feedbackElement, f), h = (r = Ys(An(e.feedbackElement).translate)) != null ? r : e.translate, p = new Sn(l, f), b = kn.delta(u, p, e.alignment), m = {
    x: h.x - b.x,
    y: h.y - b.y
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
  e.styles.set({ transition: e.transition }, ht), e.feedbackElement.setAttribute(Td, ""), (o = e.getElementMutationObserver()) == null || o.takeRecords(), pw({
    element: e.feedbackElement,
    keyframes: Af(Us(Us({}, y), C), {
      translate: [
        `${h.x}px ${h.y}px 0`,
        `${m.x}px ${m.y}px 0`
      ]
    }),
    options: {
      duration: Nf(zt(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? a : 0,
      easing: i
    }
  }).then(() => {
    e.feedbackElement.removeAttribute(Td), c == null || c.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Aw, Wd, qs, Df, vi, Rw, Ow, Ao = class extends (Wd = wt, Aw = [Ne], Wd) {
  constructor(t, n) {
    super(t, n), qe(this, vi), qe(this, Df, nt(qs, 8, this)), nt(qs, 11, this), this.state = {
      initial: {},
      current: {}
    };
    const r = t.registry.plugins.get(Kc), o = r == null ? void 0 : r.register(N3);
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
    this.registerEffect(Ir(this, vi, Rw).bind(this, r)), this.registerEffect(Ir(this, vi, Ow));
  }
};
qs = Uo(Wd);
Df = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakSet();
Rw = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = Ti(t);
  if (n)
    return e.addRoot(n);
};
Ow = function() {
  var e, t, n, r, o, s, a;
  const { state: i, manager: c, options: l } = this, { dragOperation: f } = c, { position: u, source: h, status: p } = f;
  if (p.idle) {
    i.current = {}, i.initial = {};
    return;
  }
  if (!h) return;
  const { element: b } = h, m = h.pluginConfig(Ao), y = (t = (e = m == null ? void 0 : m.feedback) != null ? e : l == null ? void 0 : l.feedback) != null ? t : "default", C = typeof y == "function" ? y(h, c) : y;
  if (!b || C === "none" || !p.initialized || p.initializing)
    return;
  const { initial: x } = i, g = (n = this.overlay) != null ? n : b, S = Mo(g), w = Mo(b), E = !Pw(b, g), k = new Sn(b, {
    frameTransform: E ? w : null,
    ignoreTransforms: !E
  }), N = {
    x: w.scaleX / S.scaleX,
    y: w.scaleY / S.scaleY
  };
  let { width: P, height: T, top: O, left: D } = k;
  E && (P = P / N.x, T = T / N.y);
  const L = new t3(g), V = An(b), {
    transition: B,
    translate: W,
    boxSizing: Y,
    paddingBlockStart: I,
    paddingBlockEnd: $,
    paddingInlineStart: te,
    paddingInlineEnd: A,
    borderInlineStartWidth: M,
    borderInlineEndWidth: F,
    borderBlockStartWidth: z,
    borderBlockEndWidth: X
  } = V, U = B.split(",").filter((q) => !/^\s*(transform|translate|scale)\b/.test(q)).join(","), j = Yc(V), J = V.transform, oe = C === "clone", de = Y === "content-box", me = de ? parseInt(te) + parseInt(A) + parseInt(M) + parseInt(F) : 0, ge = de ? parseInt(I) + parseInt($) + parseInt(z) + parseInt(X) : 0, Se = C !== "move" && !this.overlay ? M3(h, oe ? "clone" : "hidden") : null, Ie = Ee(
    () => Ks(c.dragOperation.activatorEvent)
  );
  if (!x.translate) {
    if (this.overlay && j)
      x.translate = { x: j.x, y: j.y };
    else if (W !== "none") {
      const q = Ys(W);
      q && (x.translate = q);
    }
  }
  if (!x.transformOrigin) {
    const q = Ee(() => u.current), ie = D + ((r = j == null ? void 0 : j.x) != null ? r : 0), he = O + ((o = j == null ? void 0 : j.y) != null ? o : 0);
    x.transformOrigin = {
      x: (q.x - ie * S.scaleX - S.x) / (P * S.scaleX),
      y: (q.y - he * S.scaleY - S.y) / (T * S.scaleY)
    };
  }
  const { transformOrigin: Te } = x, ut = O * S.scaleY + S.y, Xe = D * S.scaleX + S.x;
  if (!x.coordinates && (x.coordinates = {
    x: Xe,
    y: ut
  }, N.x !== 1 || N.y !== 1)) {
    const { scaleX: q, scaleY: ie } = w, { x: he, y: le } = Te;
    x.coordinates.x += (P * q - P) * he, x.coordinates.y += (T * ie - T) * le;
  }
  x.dimensions || (x.dimensions = { width: P, height: T }), x.frameTransform || (x.frameTransform = S);
  const ot = {
    x: x.coordinates.x - Xe,
    y: x.coordinates.y - ut
  }, vt = {
    width: (x.dimensions.width * x.frameTransform.scaleX - P * S.scaleX) * Te.x,
    height: (x.dimensions.height * x.frameTransform.scaleY - T * S.scaleY) * Te.y
  }, We = {
    x: ot.x / S.scaleX + vt.width,
    y: ot.y / S.scaleY + vt.height
  }, Ge = {
    left: D + We.x,
    top: O + We.y
  };
  g.setAttribute(mn, "true");
  const Qe = Ee(() => f.transform), Dt = (s = x.translate) != null ? s : { x: 0, y: 0 }, Mt = Qe.x * S.scaleX + Dt.x, ve = Qe.y * S.scaleY + Dt.y, Zt = ow();
  L.set(
    {
      width: P - me,
      height: T - ge,
      top: Ge.top + Zt.y,
      left: Ge.left + Zt.x,
      translate: `${Mt}px ${ve}px 0`,
      transform: this.overlay ? "none" : J,
      transition: U ? `${U}, translate 0ms linear` : "translate 0ms linear",
      scale: E ? `${N.x} ${N.y}` : "",
      "transform-origin": `${Te.x * 100}% ${Te.y * 100}%`
    },
    ht
  ), Se && (b.insertAdjacentElement("afterend", Se), l != null && l.rootElement && (typeof l.rootElement == "function" ? l.rootElement(h) : l.rootElement).appendChild(b)), Rd(g) && (g.hasAttribute("popover") || g.setAttribute("popover", "manual"), yo(g), g.addEventListener("beforetoggle", Dp));
  let It, fn, hn;
  const Rn = I3({
    placeholder: Se,
    element: b,
    feedbackElement: g,
    frameTransform: S,
    transformOrigin: Te,
    width: P,
    height: T,
    top: O,
    left: D,
    widthOffset: me,
    heightOffset: ge,
    delta: We,
    styles: L,
    dragOperation: f,
    getTranslate: () => i.current.translate,
    getElementMutationObserver: () => It,
    getSavedCellWidths: () => hn,
    setSavedCellWidths: (q) => {
      hn = q;
    }
  }), Qt = new Sn(g);
  Ee(() => f.shape = Qt);
  const Jt = zt(g), On = (q) => {
    this.manager.actions.stop({ event: q });
  }, Pt = Nf(Jt);
  Ie && Jt.addEventListener("resize", On), Ee(() => h.status) === "idle" && requestAnimationFrame(() => h.status = "dragging"), Se && (Rn.observe(Se), It = O3(
    b,
    Se,
    oe
  ), fn = D3(
    b,
    Se,
    g
  ));
  const st = (a = c.dragOperation.source) == null ? void 0 : a.id, H = () => {
    var q;
    if (!Ie || st == null) return;
    const ie = c.registry.draggables.get(st), he = (q = ie == null ? void 0 : ie.handle) != null ? q : ie == null ? void 0 : ie.element;
    cr(he) && he.focus();
  }, ee = () => {
    It == null || It.disconnect(), fn == null || fn.disconnect(), Rn.disconnect(), Jt.removeEventListener("resize", On), Rd(g) && (g.removeEventListener(
      "beforetoggle",
      Dp
    ), g.removeAttribute("popover")), g.removeAttribute(mn), L.reset();
    const q = () => {
      var ie;
      if (hn && $d(b)) {
        const ze = Array.from(b.cells);
        for (const [jt, en] of ze.entries())
          en.style.width = (ie = hn[jt]) != null ? ie : "";
      }
      h.status = "idle";
      const he = i.current.translate != null, le = f.status.dragging;
      Se && (!le && he || Se.parentElement !== g.parentElement) && g.isConnected && Se.replaceWith(g), Se == null || Se.remove();
    };
    g === this.overlay ? setTimeout(q, 0) : q();
  }, Q = l == null ? void 0 : l.dropAnimation, G = this, ce = ga(
    // Update transform on move
    () => {
      var q, ie, he;
      const { transform: le, status: ze } = f;
      if (!(!le.x && !le.y && !i.current.translate) && ze.dragging) {
        const jt = (q = x.translate) != null ? q : { x: 0, y: 0 }, en = {
          x: le.x / S.scaleX + jt.x,
          y: le.y / S.scaleY + jt.y
        }, ft = i.current.translate, Ye = Ee(() => f.modifiers), Dn = Ee(() => {
          var In;
          return (In = f.shape) == null ? void 0 : In.current;
        }), pr = l == null ? void 0 : l.keyboardTransition, Ea = Ie && !Pt && pr !== null ? `${(ie = pr == null ? void 0 : pr.duration) != null ? ie : 250}ms ${(he = pr == null ? void 0 : pr.easing) != null ? he : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        if (L.set(
          {
            transition: U ? `${U}, translate ${Ea}` : `translate ${Ea}`,
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
        const q = (m == null ? void 0 : m.dropAnimation) !== void 0 ? m.dropAnimation : G.dropAnimation !== void 0 ? G.dropAnimation : Q;
        let ie = i.current.translate;
        const he = ie != null;
        if (!ie && b !== g && (ie = { x: 0, y: 0 }), !ie || q === null) {
          ee();
          return;
        }
        c.renderer.rendering.then(() => {
          $3({
            source: h,
            element: b,
            feedbackElement: g,
            placeholder: Se,
            translate: ie,
            moved: he,
            transition: B,
            alignment: h.alignment,
            styles: L,
            animation: q ?? void 0,
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
Xt(qs, 4, "overlay", Aw, Ao, Df);
Br(qs, Ao);
Ao.configure = ya(Ao);
var Dw = Ao, ns = !0, W3 = !1, Iw, jw, Tw, $w, Qn, If, jf;
$w = (Tw = [Ne], Gt.Forward), jw = (Iw = [Ne], Gt.Reverse);
var Xs = class {
  constructor() {
    qe(this, If, nt(Qn, 8, this, ns)), nt(Qn, 11, this), qe(this, jf, nt(Qn, 12, this, ns)), nt(Qn, 15, this);
  }
  isLocked(e) {
    return e === Gt.Idle ? !1 : e == null ? this[Gt.Forward] === ns && this[Gt.Reverse] === ns : this[e] === ns;
  }
  unlock(e) {
    e !== Gt.Idle && (this[e] = W3);
  }
};
Qn = Uo(null);
If = /* @__PURE__ */ new WeakMap();
jf = /* @__PURE__ */ new WeakMap();
Xt(Qn, 4, $w, Tw, Xs, If);
Xt(Qn, 4, jw, Iw, Xs, jf);
Br(Qn, Xs);
var L3 = [Gt.Forward, Gt.Reverse], Ip = class {
  constructor() {
    this.x = new Xs(), this.y = new Xs();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, F3 = class extends wt {
  constructor(e) {
    super(e);
    const t = Fo(new Ip());
    let n = null;
    this.signal = t, qt(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new Ip();
        return;
      }
      const { delta: o } = e.dragOperation.position;
      if (n) {
        const s = {
          x: jp(o.x, n.x),
          y: jp(o.y, n.y)
        }, a = t.peek();
        He(() => {
          for (const i of u0)
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
function jp(e, t) {
  return Math.sign(e - t);
}
var Ww, Ld, Zs, Tf, Xn, Fd, Sa = class extends (Ld = xa, Ww = [Ne], Ld) {
  constructor(e) {
    super(e), qe(this, Tf, nt(Zs, 8, this, !1)), nt(Zs, 11, this), qe(this, Xn), qe(this, Fd, () => {
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
          x: Tp(u.x),
          y: Tp(u.y)
        } : void 0, p = h ? void 0 : this.scrollIntentTracker.current;
        if (p != null && p.isLocked())
          return !1;
        for (const b of c) {
          const m = jI(b, u);
          if (m.x || m.y) {
            const { speed: y, direction: C } = YI(
              b,
              f,
              h,
              a == null ? void 0 : a.acceleration,
              a == null ? void 0 : a.threshold
            );
            if (p)
              for (const x of u0)
                p[x].isLocked(C[x]) && (y[x] = 0, C[x] = 0);
            if (C.x || C.y) {
              const { x, y: g } = u ?? C, S = x * y.x, w = g * y.y;
              if (S || w) {
                const E = (i = $e(this, Xn)) == null ? void 0 : i.by;
                if (this.autoScrolling && E && (E.x && !S || E.y && !w))
                  continue;
                return _t(this, Xn, {
                  element: b,
                  by: {
                    x: S,
                    y: w
                  }
                }), Li.schedule($e(this, Fd)), !0;
              }
            }
          }
        }
      }
      return _t(this, Xn, void 0), !1;
    };
    let t = null, n = null;
    const r = md(() => {
      const { position: s, source: a } = e.dragOperation;
      if (!s)
        return null;
      const i = sw(
        Ti(a == null ? void 0 : a.element),
        s.current
      );
      return i && (t = i), i ?? t;
    }), o = md(() => {
      const s = r.value, { documentElement: a } = Yo(s);
      if (!s || s === a) {
        const { target: i } = e.dragOperation, c = i == null ? void 0 : i.element;
        if (c) {
          const l = Od(c, {
            excludeElement: !1
          });
          return n = l, l;
        }
      }
      if (s) {
        const i = Od(s, {
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
Zs = Uo(Ld);
Tf = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
Fd = /* @__PURE__ */ new WeakMap();
Xt(Zs, 4, "autoScrolling", Ww, Sa, Tf);
Br(Zs, Sa);
function Tp(e) {
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
}), B3 = 10, Vd = class extends wt {
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
Vd.configure = ya(Vd);
var Lw = Vd, $p = {
  capture: !0,
  passive: !0
}, ys, H3 = class extends xa {
  constructor(e) {
    super(e), qe(this, ys), this.handleScroll = () => {
      $e(this, ys) == null && _t(this, ys, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), _t(this, ys, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = qt(() => {
      var n, r, o;
      if (t.status.dragging) {
        const a = (o = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? o : document;
        return a.addEventListener("scroll", this.handleScroll, $p), () => {
          a.removeEventListener(
            "scroll",
            this.handleScroll,
            $p
          );
        };
      }
    });
  }
};
ys = /* @__PURE__ */ new WeakMap();
var G3 = "* { user-select: none !important; -webkit-user-select: none !important; }", Y3 = class extends wt {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(
      Kc
    ), n = t == null ? void 0 : t.register(G3);
    if (this.destroy = qt(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized)
        return Al(), document.addEventListener("selectionchange", Al, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", Al, {
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
function Al() {
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
}), io, Hi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, io, []), this.listeners = new aw(), this.handleSourceKeyDown = (r, o, s) => {
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
    t.preventDefault(), t.stopImmediatePropagation(), hw(o);
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
    const t = this.manager.registry.plugins.get(Lw);
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
Hi.configure = ya(Hi);
Hi.defaults = xs;
var Fw = Hi;
function Qr(e, t) {
  return t.includes(e.code);
}
var _r, K3 = class extends B0 {
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
        if (o && _d(r, o)) {
          this.abort();
          return;
        }
        _d(r, this.options.value) && this.activate(e);
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
var co, kr, U3 = class extends B0 {
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
        _d(r, this.options.tolerance) && this.abort();
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
var zd = Object.freeze({
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
}), lo, Gi = class extends ko {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, qe(this, lo, /* @__PURE__ */ new Set()), this.listeners = new aw(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, this.handleMove = () => {
      const { event: r, coordinates: o } = this.latest;
      !r || !o || this.manager.actions.move({ event: r, to: o });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: o = zd.activationConstraints } = r ?? {};
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
    const { preventActivation: o = zd.preventActivation } = r ?? {};
    if (o != null && o(t, n))
      return;
    const { target: s } = t, a = cr(s) && s.draggable && s.getAttribute("draggable") === "true", i = Mo(n.element), { x: c, y: l } = Eo(t);
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
    const h = Md(), p = this.listeners.bind(h, [
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
    ]), b = () => {
      p(), this.initialCoordinates = void 0;
    };
    $e(this, lo).add(b);
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
Gi.configure = ya(Gi);
Gi.defaults = zd;
var Vw = Gi;
function q3(e) {
  return "sensor" in e;
}
function Xa(e) {
  e.preventDefault();
}
function X3() {
}
var Wp = /* @__PURE__ */ new WeakSet();
function Z3(e) {
  !e || Wp.has(e) || (e.addEventListener("touchmove", X3, {
    capture: !1,
    passive: !1
  }), Wp.add(e));
}
var xo = {
  modifiers: [],
  plugins: [C3, Lw, _3, Dw, Y3],
  sensors: [Vw, Fw]
}, zw = class extends bI {
  constructor(e = {}) {
    const t = sn(e.plugins, xo.plugins), n = sn(e.sensors, xo.sensors), r = sn(
      e.modifiers,
      xo.modifiers
    );
    super(Af(Us({}, e), {
      plugins: [H3, Sa, Kc, ...t],
      sensors: n,
      modifiers: r
    }));
  }
}, Bw, Hw, Bd, Jn, $f, Wf, Uc = class extends (Bd = En, Hw = [Ne], Bw = [Ne], Bd) {
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
              const p = h instanceof ko ? h : l.registry.register(h.plugin), b = h instanceof ko ? void 0 : h.options;
              return p.bind(this, b);
            });
            return function() {
              u.forEach((p) => p());
            };
          }
        ]
      }, a),
      t
    ), qe(this, $f, nt(Jn, 8, this)), nt(Jn, 11, this), qe(this, Wf, nt(Jn, 12, this)), nt(Jn, 15, this), this.element = r, this.handle = s;
  }
};
Jn = Uo(Bd);
$f = /* @__PURE__ */ new WeakMap();
Wf = /* @__PURE__ */ new WeakMap();
Xt(Jn, 4, "handle", Hw, Uc, $f);
Xt(Jn, 4, "element", Bw, Uc, Wf);
Br(Jn, Uc);
var Gw, Yw, Hd, er, Lf, Rl, Kw, Uw, Os, Ff, Vf = class extends (Hd = Nn, Yw = [Ne], Gw = [Ne], Hd) {
  constructor(e, t) {
    var n = e, { element: r, effects: o = () => [] } = n, s = yw(n, ["element", "effects"]);
    const { collisionDetector: a = mw } = s, i = (l) => {
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
      Af(Us({}, s), {
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
    ), qe(this, Os), qe(this, Lf, nt(er, 8, this)), nt(er, 11, this), qe(this, Ff, nt(er, 12, this)), nt(er, 15, this), this.element = r, this.refreshShape = () => i();
  }
  set element(e) {
    _t(this, Os, e, Uw);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : $e(this, Os, Kw);
  }
};
er = Uo(Hd);
Lf = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakSet();
Ff = /* @__PURE__ */ new WeakMap();
Rl = Xt(er, 20, "#element", Yw, Os, Lf), Kw = Rl.get, Uw = Rl.set;
Xt(er, 4, "proxy", Gw, Vf, Ff);
Br(er, Vf);
function Q3(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Ds(e) {
  var t;
  if (e != null)
    return Q3(e) ? (t = e.current) != null ? t : void 0 : e;
}
var J3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qo = J3 ? Zd : on;
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
      s && (a ? queueMicrotask(() => Fl(r)) : r());
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
function bt(e, t, n = on, r = Object.is) {
  const o = ct(e);
  n(() => {
    const s = o.current;
    r(e, s) || (o.current = e, t(e, s));
  }, [t, e]);
}
function Ol(e, t) {
  const n = ct(Ds(e));
  qo(() => {
    const r = Ds(e);
    r !== n.current && (n.current = r, t(r));
  });
}
var Lp = Object.getOwnPropertySymbols, rj = Object.prototype.hasOwnProperty, oj = Object.prototype.propertyIsEnumerable, sj = (e, t) => {
  var n = {};
  for (var r in e)
    rj.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Lp)
    for (var r of Lp(e))
      t.indexOf(r) < 0 && oj.call(e, r) && (n[r] = e[r]);
  return n;
}, aj = new zw(), qw = Qs(
  aj
), ij = Y1(
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
          })), K1(() => {
            i(), r((c) => c + 1);
          });
        }
      }),
      []
    );
    return qo(() => {
      var i;
      (i = s.current) == null || i.call(s), o.current = null;
    }, [e, n]), U1(t, () => a), null;
  })
), Dl = [void 0, vn];
function Xw(e) {
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
  } = l, b = sn(u, xo.plugins), m = sn(p, xo.sensors), y = sn(
    h,
    xo.modifiers
  ), C = Jr(o), x = Jr(s), g = Jr(i), S = Jr(a), w = Jr(c), E = Jr(r), k = cj(() => {
    var N;
    return (N = l.manager) != null ? N : new zw(l);
  });
  return on(() => {
    if (!f.current) throw new Error("Renderer not found");
    const { renderer: N, trackRendering: P } = f.current, { monitor: T } = k;
    k.renderer = N;
    const O = [
      T.addEventListener("beforedragstart", (D) => {
        const L = C.current;
        L && P(() => L(D, k));
      }),
      T.addEventListener(
        "dragstart",
        (D) => {
          var L;
          return (L = x.current) == null ? void 0 : L.call(x, D, k);
        }
      ),
      T.addEventListener("dragover", (D) => {
        const L = g.current;
        L && P(() => L(D, k));
      }),
      T.addEventListener("dragmove", (D) => {
        const L = S.current;
        L && P(() => L(D, k));
      }),
      T.addEventListener("dragend", (D) => {
        const L = w.current;
        L && P(() => L(D, k));
      }),
      T.addEventListener(
        "collision",
        (D) => {
          var L;
          return (L = E.current) == null ? void 0 : L.call(E, D, k);
        }
      )
    ];
    return () => O.forEach((D) => D());
  }, [k]), bt(
    b,
    () => k && (k.plugins = b),
    ...Dl
  ), bt(
    m,
    () => k && (k.sensors = m),
    ...Dl
  ), bt(
    y,
    () => k && (k.modifiers = y),
    ...Dl
  ), /* @__PURE__ */ d.jsxs(qw.Provider, { value: k, children: [
    /* @__PURE__ */ d.jsx(ij, { ref: f, children: n }),
    n
  ] });
}
function cj(e) {
  const t = ct(null);
  return t.current || (t.current = e()), G1(() => () => {
    var n;
    return (n = t.current) == null ? void 0 : n.destroy();
  }, []), t.current;
}
function lj() {
  return Is(qw);
}
function dj(e) {
  var t;
  const n = (t = lj()) != null ? t : void 0, [r] = tt(() => e(n));
  return r.manager !== n && (r.manager = n), qo(r.register, [n, r]), r;
}
var uj = Object.create, Zw = Object.defineProperty, fj = Object.getOwnPropertyDescriptor, Qw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), qc = (e) => {
  throw TypeError(e);
}, hj = (e, t, n) => t in e ? Zw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pj = (e) => {
  var t;
  return [, , , uj((t = e == null ? void 0 : e[Qw("metadata")]) != null ? t : null)];
}, Jw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], e1 = (e) => e !== void 0 && typeof e != "function" ? qc("Function expected") : e, mj = (e, t, n, r, o) => ({ kind: Jw[e], name: t, metadata: r, addInitializer: (s) => n._ ? qc("Already initialized") : o.push(e1(s || null)) }), vj = (e, t) => hj(t, Qw("metadata"), e[3]), gj = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, t1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, u = !1, h = !1, p = 2, b = Jw[f + 5], m = e[p] || (e[p] = []), y = (o = o.prototype, fj(o, n)), C = r.length - 1; C >= 0; C--)
    c = mj(f, n, i = {}, e[3], m), c.static = u, c.private = h, l = c.access = { has: (x) => n in x }, l.get = (x) => x[n], a = (0, r[C])(y[b], c), i._ = 1, e1(a) && (y[b] = a);
  return y && Zw(o, n, y), o;
}, n1 = (e, t, n) => t.has(e) || qc("Cannot " + n), bj = (e, t, n) => (n1(e, t, "read from private field"), t.get(e)), yj = (e, t, n) => t.has(e) ? qc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), xj = (e, t, n, r) => (n1(e, t, "write to private field"), t.set(e, n), n), rs = class Gd {
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
    return new Gd(t.x - n.x, t.y - n.y);
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
    return new Gd(t, n);
  }
}, r1, o1, Yd, gi, _a, zf = class extends (Yd = Vr, o1 = [Ue], r1 = [Ue], Yd) {
  constructor(e) {
    const t = rs.from(e);
    super(t, (n, r) => rs.equals(n, r)), gj(_a, 5, this), yj(this, gi, 0), this.velocity = { x: 0, y: 0 };
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
    }, o = Date.now(), s = o - bj(this, gi), a = (i) => Math.round(i / s * 100);
    He(() => {
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
_a = pj(Yd);
gi = /* @__PURE__ */ new WeakMap();
t1(_a, 2, "delta", o1, zf);
t1(_a, 2, "direction", r1, zf);
vj(_a, zf);
var s1 = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(s1 || {});
Object.values(s1);
var wj = Object.create, a1 = Object.defineProperty, Cj = Object.defineProperties, Sj = Object.getOwnPropertyDescriptor, _j = Object.getOwnPropertyDescriptors, Yi = Object.getOwnPropertySymbols, i1 = Object.prototype.hasOwnProperty, c1 = Object.prototype.propertyIsEnumerable, kj = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ka = (e) => {
  throw TypeError(e);
}, Kd = (e, t, n) => t in e ? a1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Il = (e, t) => {
  for (var n in t || (t = {}))
    i1.call(t, n) && Kd(e, n, t[n]);
  if (Yi)
    for (var n of Yi(t))
      c1.call(t, n) && Kd(e, n, t[n]);
  return e;
}, jl = (e, t) => Cj(e, _j(t)), Ej = (e, t) => {
  var n = {};
  for (var r in e)
    i1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Yi)
    for (var r of Yi(e))
      t.indexOf(r) < 0 && c1.call(e, r) && (n[r] = e[r]);
  return n;
}, Nj = (e) => {
  var t;
  return [, , , wj((t = void 0) != null ? t : null)];
}, l1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ws = (e) => e !== void 0 && typeof e != "function" ? ka("Function expected") : e, Mj = (e, t, n, r, o) => ({ kind: l1[e], name: t, metadata: r, addInitializer: (s) => n._ ? ka("Already initialized") : o.push(ws(s || null)) }), Pj = (e, t) => Kd(t, kj("metadata"), e[3]), Za = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, d1 = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f, u = t & 7, h = !1, p = !1, b = e.length + 1, m = l1[u + 5], y = e[b - 1] = [], C = e[b] || (e[b] = []), x = (o = o.prototype, Sj({ get [n]() {
    return Cs(this, s);
  }, set [n](S) {
    return Er(this, s, S);
  } }, n)), g = r.length - 1; g >= 0; g--)
    l = Mj(u, n, c = {}, e[3], C), l.static = h, l.private = p, f = l.access = { has: (S) => n in S }, f.get = (S) => S[n], f.set = (S, w) => S[n] = w, i = (0, r[g])({ get: x.get, set: x.set }, l), c._ = 1, i === void 0 ? ws(i) && (x[m] = i) : typeof i != "object" || i === null ? ka("Object expected") : (ws(a = i.get) && (x.get = a), ws(a = i.set) && (x.set = a), ws(a = i.init) && y.unshift(a));
  return x && a1(o, n, x), o;
}, u1 = (e, t, n) => t.has(e) || ka("Cannot " + n), Cs = (e, t, n) => (u1(e, t, "read from private field"), t.get(e)), os = (e, t, n) => t.has(e) ? ka("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Er = (e, t, n, r) => (u1(e, t, "write to private field"), t.set(e, n), n);
function tr(e) {
  return e instanceof Gf || e instanceof m1;
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
          const f = Rj(l), { source: u, target: h } = s, { center: p } = s.shape.current, b = [], m = [];
          He(() => {
            for (const w of c.droppables) {
              const { id: E } = w;
              if (!w.accepts(u) || E === (h == null ? void 0 : h.id) && tr(w) || !w.element)
                continue;
              let k = w.shape;
              const N = new Sn(w.element, {
                getBoundingClientRect: (P) => Gs(P, void 0, 0.2)
              });
              !N.height || !N.width || (f == "down" && p.y + Qa < N.center.y || f == "up" && p.y - Qa > N.center.y || f == "left" && p.x - Qa > N.center.x || f == "right" && p.x + Qa < N.center.x) && (b.push(w), w.shape = N, m.push(() => w.shape = k));
            }
          }), r.preventDefault(), i.disable();
          const y = i.computeCollisions(
            b,
            i3
          );
          He(() => m.forEach((w) => w()));
          const [C] = y;
          if (!C)
            return;
          const { id: x } = C, { index: g, group: S } = u.sortable;
          a.setDropTarget(x).then(() => {
            const { source: w, target: E, shape: k } = s;
            if (!w || !tr(w) || !k)
              return;
            const {
              index: N,
              group: P,
              target: T
            } = w.sortable, O = g !== N || S !== P, D = O ? T : E == null ? void 0 : E.element;
            if (!D) return;
            hw(D);
            const L = new Sn(D);
            if (!L)
              return;
            const V = kn.delta(
              L,
              kn.from(k.current.boundingRectangle),
              w.alignment
            );
            a.move({
              by: V
            }), O ? a.setDropTarget(w.id).then(() => i.enable()) : i.enable();
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
var Oj = Object.defineProperty, Dj = Object.defineProperties, Ij = Object.getOwnPropertyDescriptors, Fp = Object.getOwnPropertySymbols, jj = Object.prototype.hasOwnProperty, Tj = Object.prototype.propertyIsEnumerable, Vp = (e, t, n) => t in e ? Oj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, eo = (e, t) => {
  for (var n in t || (t = {}))
    jj.call(t, n) && Vp(e, n, t[n]);
  if (Fp)
    for (var n of Fp(t))
      Tj.call(t, n) && Vp(e, n, t[n]);
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
function Tl(e) {
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
      if (Tl(s)) {
        const w = s.initialIndex, E = s.index;
        return w === E || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, E);
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
  if (f === -1 && Tl(s)) {
    const g = s.initialGroup == null ? void 0 : Ja(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ja(e, s.group), E = s.index;
    if (g == null || w == null || g === w && S === E)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return to(eo({}, e), {
        [g]: n(e[g], S, E)
      });
    const k = e[g][S];
    return to(eo({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, E),
        k,
        ...e[w].slice(E)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: b } = s.manager, m = (o = (r = b.shape) == null ? void 0 : r.current.center) != null ? o : b.position.current;
  if (p == null) {
    const g = Ja(e, a.id);
    if (g != null) {
      const S = a.shape && m.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (u == null || p == null || u === p && f === h) {
    if (u != null && u === p && f === h && Tl(s)) {
      const g = s.group == null ? void 0 : Ja(e, s.group), S = s.group != null && g !== u, w = s.index !== f;
      if (S || w) {
        const E = s.group == null ? u : g;
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
function zp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e)
    for (const r of n)
      t.set(r.id, r.index);
  return t;
}
function Bp(e, t, n) {
  var r;
  for (const [o, s] of t)
    for (const a of s) {
      const i = e.get(a.id);
      if (a.index !== i || a.group !== o || !((r = n.get(o)) != null && r.has(a)))
        return !0;
    }
  return !1;
}
var Hp = "__default__", Fj = class extends wt {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const o of e.registry.droppables)
        if (o instanceof Gf) {
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
        const c = t(), l = zp(c), f = a.sortable.group === i.sortable.group, u = c.get(a.sortable.group), h = f ? u : c.get(i.sortable.group);
        !u || !h || queueMicrotask(() => {
          r.defaultPrevented || o.renderer.rendering.then(() => {
            var p, b;
            const m = t();
            if (Bp(l, c, m))
              return;
            const y = a.sortable.element, C = i.sortable.element;
            if (!C || !y || !f && i.id === a.sortable.group)
              return;
            const x = ei(u), g = f ? x : ei(h), S = (p = a.sortable.group) != null ? p : Hp, w = (b = i.sortable.group) != null ? b : Hp, E = {
              [S]: x,
              [w]: g
            }, k = Lj(E, r);
            if (E === k) return;
            const N = k[w].indexOf(a.sortable), P = k[w].indexOf(i.sortable);
            o.collisionObserver.disable(), Gp(y, N, C, P), He(() => {
              for (const [T, O] of k[S].entries())
                O.index = T;
              if (!f)
                for (const [T, O] of k[w].entries())
                  O.group = i.sortable.group, O.index = T;
            }), o.actions.setDropTarget(a.id).then(() => o.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (r, o) => {
        if (!r.canceled)
          return;
        const { dragOperation: s } = o, { source: a } = s;
        tr(a) && (a.sortable.initialIndex === a.sortable.index && a.sortable.initialGroup === a.sortable.group || queueMicrotask(() => {
          const i = t(), c = zp(i), l = i.get(
            a.sortable.initialGroup
          );
          l && o.renderer.rendering.then(() => {
            const f = t();
            if (Bp(c, i, f))
              return;
            const u = ei(l), h = ei(
              l,
              zj
            ), p = a.sortable.element, b = h.indexOf(a.sortable), m = u[b], y = m == null ? void 0 : m.element;
            !m || !y || !p || (Gp(p, m.index, y, a.index), He(() => {
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
function Gp(e, t, n, r) {
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
var Yp = [
  Aj,
  Fj
], f1 = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
};
function Kp(e) {
  var t, n;
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : {
    draggable: (t = e == null ? void 0 : e.draggable) != null ? t : !1,
    droppable: (n = e == null ? void 0 : e.droppable) != null ? n : !1
  };
}
var ti = new B5(), h1, p1, nr, Bf, Ss, _s, Hf, uo;
p1 = [Ne], h1 = [Ne];
var Xc = class {
  constructor(e, t) {
    os(this, Bf, Za(nr, 8, this)), Za(nr, 11, this), os(this, Ss), os(this, _s), os(this, Hf, Za(nr, 12, this)), Za(nr, 15, this), os(this, uo), this.register = () => (He(() => {
      var b, m;
      (b = this.manager) == null || b.registry.register(this.droppable), (m = this.manager) == null || m.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      He(() => {
        var b, m;
        (b = this.manager) == null || b.registry.unregister(this.droppable), (m = this.manager) == null || m.registry.unregister(this.draggable);
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
      transition: l = f1,
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
    const h = sn(f, Yp), p = Kp(o);
    this.droppable = new Gf(
      jl(Il({}, u), { disabled: p.droppable }),
      t,
      this
    ), this.draggable = new m1(
      jl(Il({}, u), {
        disabled: p.draggable,
        plugins: h,
        effects: () => [
          () => {
            var b, m, y;
            const C = (b = this.manager) == null ? void 0 : b.dragOperation.status;
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
            const { index: b, group: m, manager: y } = this, C = Cs(this, _s), x = Cs(this, Ss);
            (b !== C || m !== x) && (Er(this, _s, b), Er(this, Ss, m), this.animate());
          },
          () => {
            var b, m;
            const { target: y } = this, { isDragSource: C } = this.draggable;
            ((m = (b = this.draggable.pluginConfig(Dw)) == null ? void 0 : b.feedback) != null ? m : "default") === "move" && C && (this.droppable.disabled = !y);
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
        }, { translate: i } = An(o), c = Ap(o, i, !1), l = Ap(o, i);
        if (a.x || a.y) {
          const f = Nf(zt(o)) ? jl(Il({}, t), { duration: 0 }) : t;
          pw({
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
      return (t = (e = Pd.get(n)) != null ? e : n) != null ? t : this.droppable.element;
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
    this.draggable.plugins = sn(e, Yp);
  }
  set disabled(e) {
    const t = Kp(e);
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
    this.droppable.collisionDetector = e ?? mw;
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
nr = Nj();
Bf = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
Hf = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
d1(nr, 4, "index", p1, Xc, Bf);
d1(nr, 4, "group", h1, Xc, Hf);
Pj(nr, Xc);
var m1 = class extends Uc {
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
}, Gf = class extends Vf {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
}, Bj = Object.defineProperty, Hj = Object.defineProperties, Gj = Object.getOwnPropertyDescriptors, Up = Object.getOwnPropertySymbols, Yj = Object.prototype.hasOwnProperty, Kj = Object.prototype.propertyIsEnumerable, qp = (e, t, n) => t in e ? Bj(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $l = (e, t) => {
  for (var n in t || (t = {}))
    Yj.call(t, n) && qp(e, n, t[n]);
  if (Up)
    for (var n of Up(t))
      Kj.call(t, n) && qp(e, n, t[n]);
  return e;
}, Uj = (e, t) => Hj(e, Gj(t));
function v1(e) {
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
    type: b,
    plugins: m
  } = e, y = $l($l({}, f1), e.transition), C = dj((g) => new Xc(
    Uj($l({}, e), {
      transition: y,
      register: !1,
      handle: Ds(i),
      element: Ds(a),
      target: Ds(p)
    }),
    g
  )), x = tj(C, qj);
  return bt(o, () => C.id = o), qo(() => {
    He(() => {
      C.group = l, C.index = c;
    });
  }, [C, l, c]), bt(b, () => C.type = b), bt(
    t,
    () => C.accept = t,
    void 0,
    vn
  ), bt(s, () => s && (C.data = s)), bt(
    c,
    () => {
      var g;
      (g = C.manager) != null && g.dragOperation.status.idle && (y != null && y.idle) && C.refreshShape();
    },
    nj
  ), Ol(i, (g) => C.handle = g), Ol(a, (g) => C.element = g), Ol(p, (g) => C.target = g), bt(
    f,
    () => C.disabled = f ?? !1,
    void 0,
    vn
  ), bt(
    h,
    () => C.sensors = h,
    void 0,
    vn
  ), bt(
    n,
    () => C.collisionDetector = n
  ), bt(
    r,
    () => C.collisionPriority = r
  ), bt(
    m,
    () => C.plugins = m,
    void 0,
    vn
  ), bt(
    y,
    () => C.transition = y,
    void 0,
    vn
  ), bt(
    u,
    () => C.modifiers = u,
    void 0,
    vn
  ), bt(
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
const g1 = _.createContext(null), Xj = () => {
  const e = _.useContext(g1);
  if (!e)
    throw new Error("Sortable.Item must be rendered inside Sortable.Container");
  return e;
}, Zj = (e) => hy(e, "Sortable.Container");
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
    i.forEach((p, b) => f.set(p, b));
    const u = (p) => f.get(p) ?? -1;
    return { getIndex: u, moveItem: (p, b) => {
      const m = u(p), y = m + b;
      if (m < 0 || y < 0 || y >= e.length)
        return;
      const C = [...e], [x] = C.splice(m, 1);
      x !== void 0 && (C.splice(y, 0, x), t(C));
    }, count: i.length, disabled: r };
  }, [i, e, t, r]), l = (f) => {
    const u = E5(i, f);
    if (u === i)
      return;
    const h = /* @__PURE__ */ new Map();
    e.forEach((b) => h.set(n(b), b));
    const p = [];
    u.forEach((b) => {
      const m = h.get(b);
      m !== void 0 && p.push(m);
    }), t(p);
  };
  return /* @__PURE__ */ d.jsx(g1.Provider, { value: c, children: /* @__PURE__ */ d.jsx(Xw, { onDragEnd: l, children: /* @__PURE__ */ d.jsx("ul", { ref: a, className: R("gap-xs flex flex-col", o), children: s }) }) });
}
const b1 = _.forwardRef(Qj);
b1.displayName = "Sortable.Container";
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
    } = Xj(), h = c(e), p = t || u, { ref: b, isDragging: m } = v1({
      id: e,
      index: h,
      disabled: p
    }), y = (o == null ? void 0 : o.moveUp) ?? "Move up", C = (o == null ? void 0 : o.moveDown) ?? "Move down";
    return /* @__PURE__ */ d.jsxs(
      "li",
      {
        ref: (x) => {
          b(x), typeof i == "function" ? i(x) : i && (i.current = x);
        },
        "data-dragging": m || void 0,
        className: R(
          `rounded-sm p-2 gap-xxs border-interactive-default bg-surface-primary
          hover:border-interactive-hover flex cursor-grab items-center border
          transition-colors`,
          s
        ),
        children: [
          /* @__PURE__ */ d.jsx(em, { size: 16, className: "text-shape-light" }),
          /* @__PURE__ */ d.jsx("div", { className: "min-w-0 flex-1", children: a }),
          (n || r) && /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex shrink-0 items-center", children: [
            n && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
              /* @__PURE__ */ d.jsx(Kt, { content: y, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
                Ve,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: d2,
                  "aria-label": y,
                  className: "h-6 w-6",
                  disabled: p || h <= 0,
                  onClick: () => l(e, -1)
                }
              ) }),
              /* @__PURE__ */ d.jsx(Kt, { content: C, disableHoverableContent: !0, children: /* @__PURE__ */ d.jsx(
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
const _7 = {
  Container: b1,
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
}), k7 = ({
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
      x1,
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
), x1 = _.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
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
x1.displayName = "RadialStepper";
tT.displayName = "Stepper";
const nT = v.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const s = n || (t ? `switch-${t}` : void 0), a = /* @__PURE__ */ d.jsx(
    XN,
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
        ZN,
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
const Ud = {
  loading: !1,
  loadingText: "ローディング中…"
}, w1 = _.createContext(
  Ud
), C1 = () => _.useContext(w1), rT = _.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Ud.loading,
    loadingText: r = Ud.loadingText,
    ...o
  }, s) => {
    const a = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ d.jsx(w1.Provider, { value: a, children: /* @__PURE__ */ d.jsx(
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
    const { loading: s } = C1(), a = t ?? s;
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
oT.displayName = "TableHeader";
const S1 = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ d.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ d.jsx("td", { colSpan: 100, className: "p-0", children: /* @__PURE__ */ d.jsx(
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
S1.displayName = "TableCoverMessage";
const sT = _.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, s) => {
    const { loading: a, loadingText: i } = C1(), c = t ?? a, l = n ?? i;
    return /* @__PURE__ */ d.jsx("tbody", { ref: s, className: e, ...o, children: c ? /* @__PURE__ */ d.jsx(S1, { className: "text-body-secondary", children: l }) : r });
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
const E7 = _.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ d.jsxs(
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
    _.isValidElement(n) && n.type === _1 && t.push(n);
  }), t;
}
const gT = _.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, s) => {
  const a = t ?? "normal", i = mT(), c = _.useRef(null), l = _.useRef(null), f = _.useRef(/* @__PURE__ */ new Map()), u = _.useRef(/* @__PURE__ */ new Map()), {
    hasOverflow: h,
    startShadow: p,
    endShadow: b
  } = Qy(c), m = _.useMemo(() => vT(n), [n]), [y, C] = _.useState(m.length), [x, g] = _.useState(!1), S = _.useCallback(() => {
    if (!i) {
      C(m.length), g(!0);
      return;
    }
    const O = c.current;
    if (!O) return;
    f.current.forEach((I, $) => {
      const te = I.offsetWidth;
      te > 0 && u.current.set($, te);
    });
    const D = O.clientWidth, L = l.current, V = L ? L.offsetWidth + 8 : 80;
    let B = 0;
    for (const I of m)
      B += u.current.get(I.props.value) ?? 0;
    if (B <= D) {
      C(m.length), g(!0);
      return;
    }
    let W = 0, Y = 0;
    for (const I of m) {
      const $ = u.current.get(I.props.value) ?? 0;
      if (W + $ + V <= D)
        W += $, Y++;
      else
        break;
    }
    C(Math.max(Y, 1)), g(!0);
  }, [m, i]);
  _.useEffect(() => {
    const O = c.current;
    if (!O) return;
    const D = new ResizeObserver(() => {
      S();
    });
    return D.observe(O), S(), () => D.disconnect();
  }, [S]);
  const w = o.value ?? o.defaultValue, E = m.map((O) => O.props.value).join(`
`);
  _.useEffect(() => {
    if (i) return;
    const O = c.current;
    if (!O) return;
    const D = () => {
      const V = O.querySelector('[role="tab"][data-state="active"]');
      if (!V) return;
      const B = O.getBoundingClientRect(), W = V.getBoundingClientRect();
      W.left < B.left ? O.scrollLeft += W.left - B.left : W.right > B.right && (O.scrollLeft += W.right - B.right);
    }, L = new ResizeObserver(D);
    return f.current.forEach((V) => L.observe(V)), () => L.disconnect();
  }, [w, i, E]);
  const k = m.slice(y), N = k.length > 0, P = k.some(
    (O) => O.props.value === w
  ), T = r ?? ((O) => `${O} more`);
  return /* @__PURE__ */ d.jsxs(
    tM,
    {
      ref: s,
      className: R("relative w-full", e),
      ...o,
      children: [
        /* @__PURE__ */ d.jsxs(
          nM,
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
                (O, D) => _.cloneElement(O, {
                  key: O.props.value,
                  size: a,
                  ref: (L) => {
                    L ? f.current.set(O.props.value, L) : f.current.delete(O.props.value);
                  },
                  className: R(
                    O.props.className,
                    x && D >= y && "hidden"
                  )
                })
              ),
              N && x && /* @__PURE__ */ d.jsx("div", { ref: l, className: "inline-flex shrink-0", children: /* @__PURE__ */ d.jsxs(Ac, { children: [
                /* @__PURE__ */ d.jsx(Rc, { asChild: !0, children: /* @__PURE__ */ d.jsxs(
                  "button",
                  {
                    type: "button",
                    className: R(
                      pT({ size: a }),
                      P && "font-bold text-interactive-primary-default"
                    ),
                    children: [
                      /* @__PURE__ */ d.jsx(
                        Jp,
                        {
                          size: a === "small" ? 16 : 20,
                          className: "mr-xxs"
                        }
                      ),
                      T(k.length)
                    ]
                  }
                ) }),
                /* @__PURE__ */ d.jsx(Pc, { align: "end", size: "sm", children: k.map((O) => {
                  const { value: D, disabled: L, asChild: V, children: B } = O.props, W = R(
                    D === w && "font-bold text-interactive-primary-default"
                  );
                  return V && _.isValidElement(B) ? /* @__PURE__ */ d.jsx(
                    Mi,
                    {
                      disabled: L ?? !1,
                      asChild: !0,
                      className: W,
                      children: B
                    },
                    D
                  ) : /* @__PURE__ */ d.jsx(
                    Mi,
                    {
                      disabled: L ?? !1,
                      onSelect: () => {
                        o.onValueChange && o.onValueChange(D);
                      },
                      className: W,
                      children: B
                    },
                    D
                  );
                }) })
              ] }) })
            ]
          }
        ),
        !i && h && /* @__PURE__ */ d.jsx(Jy, { startShadow: p, endShadow: b })
      ]
    }
  );
});
gT.displayName = "TabBar";
const _1 = _.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ d.jsx(
    rM,
    {
      ref: r,
      className: R(hT({ size: o }), e),
      ...n
    }
  );
});
_1.displayName = "Tab";
const bT = pe(
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
    } = o, [p, b] = tt(o.value);
    on(() => {
      b(o.value);
    }, [o.value]);
    const { compositionHandlers: m, guardKeyHandler: y } = jc(), C = (S) => {
      m.onCompositionStart(S), c == null || c(S);
    }, x = (S) => {
      m.onCompositionEnd(S), l == null || l(S);
    }, g = (S) => {
      if (n && S.target.value.length > n) {
        S.preventDefault();
        return;
      }
      b(S.target.value), f && f(S);
    };
    return /* @__PURE__ */ d.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ d.jsx(
        "textarea",
        {
          ref: s,
          className: R(bT({ invalid: e }), t),
          ...h,
          value: p,
          onChange: g,
          onKeyDown: y(a),
          onKeyUp: y(i),
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
yT.displayName = "TextArea";
const N7 = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ d.jsx(
  SM,
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
            om,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ d.jsx(
            oh,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ d.jsx(
            oh,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ d.jsx(ni, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          t && /* @__PURE__ */ d.jsx(
            _M,
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
          /* @__PURE__ */ d.jsx(kM, { children: /* @__PURE__ */ d.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(EM, { asChild: !0, altText: "Close", children: /* @__PURE__ */ d.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ d.jsx(eu, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), M7 = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ d.jsxs(wM, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ d.jsx(
    CM,
    {
      className: `gap-md bottom-0 right-0 m-0 z-toast fixed flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), qd = (e) => e.valueKey !== void 0, Xd = (e, t) => e.element.compareDocumentPosition(t.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1, xT = (e) => {
  const t = /* @__PURE__ */ new Map();
  e.forEach((o) => {
    const s = t.get(o.parentKey);
    s ? s.push(o) : t.set(o.parentKey, [o]);
  });
  const n = /* @__PURE__ */ new Map(), r = (o) => {
    const s = [];
    (t.get(o.key) ?? []).forEach((i) => {
      i.kind === "group" ? s.push(...r(i)) : qd(i) && s.push(i);
    });
    const a = s.length === 0 && qd(o) ? [o] : s;
    return n.set(o.key, a), a;
  };
  return (t.get(null) ?? []).forEach((o) => {
    o.kind === "group" && r(o);
  }), n;
}, wT = (e, t) => {
  const n = e.filter((a) => !a.disabled), r = (a) => a.filter((i) => t(i.valueKey)).length, o = r(e);
  return { state: o === 0 ? "none" : o === e.length || n.length > 0 && r(n) === n.length ? "all" : "some", selectable: n.length > 0 };
}, CT = 600, ST = 2e3, _T = 300, Yf = "data-dnd-placeholder", Ro = (e, t) => Array.from(e.children).filter(
  (n) => n !== t && !n.hasAttribute(Yf)
), Kf = (e, t) => {
  let n = e.nextElementSibling;
  for (; n && (n === t || n.hasAttribute(Yf)); )
    n = n.nextElementSibling;
  return n;
}, k1 = (e, t, n) => {
  Array.from(t.values()).sort(Xd).forEach((o) => {
    const s = o.element.parentElement, a = e.registry.droppables.get(o.key);
    o !== n && s && a && tr(a) && (a.sortable.index = Ro(s).indexOf(o.element));
  });
}, E1 = (e, t, n, r, o) => {
  const { element: s } = n.node;
  !s.isConnected || o === s || s.parentElement === r && Kf(s, s) === o || (r.insertBefore(s, o), k1(e, t, n.node), window.requestAnimationFrame(() => {
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
}, Wl = (e, t, n, r) => {
  var p, b;
  const o = kT(t, r, n.node), s = o == null ? void 0 : o.element.parentElement, a = (p = o == null ? void 0 : o.element.firstElementChild) == null ? void 0 : p.getBoundingClientRect();
  if (!o || !s || !a || a.height === 0 || (b = n.nodeOf(s.parentElement)) != null && b.disabled) return;
  const i = (r.y - a.top) / a.height, c = o.kind === "group" ? o.element.querySelector(":scope > ul") : null, l = o.element.getAttribute("aria-expanded"), f = n.node.element, u = (m, y) => E1(e, t, n, m, y), h = !o.disabled;
  c && l === "true" && h ? i < 0.5 ? u(s, o.element) : u(c, Ro(c, f)[0] ?? null) : c && l === null && h && i >= 0.25 && i <= 0.75 ? u(c, null) : i < 0.5 ? u(s, o.element) : u(s, Kf(o.element, f));
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
}, NT = (e, t, n, r, o) => {
  const s = n.node.element, a = s.parentElement;
  if (!a) return;
  const i = Kf(s, s), c = ET(r, n), l = c.findIndex(
    (u) => u.list === a && u.before === i
  ), f = l === -1 ? void 0 : c[l + o];
  f && E1(e, t, n, f.list, f.before);
}, Xp = ({ node: e, originList: t, originIndex: n }) => {
  const r = Ro(t, e.element)[n] ?? null;
  t.insertBefore(e.element, r);
}, P7 = (e, t, n) => {
  const { getKey: r, getChildren: o, withChildren: s } = n, a = t.kind === "group";
  let i;
  const c = (h, p, b) => h.map((m, y) => y === p ? b : m), l = (h) => {
    for (let p = 0; p < h.length; p += 1) {
      const b = h[p], m = o(b);
      if (r(b) === t.key && m !== void 0 === a)
        return i = b, h.filter((y, C) => C !== p);
      if (m) {
        const y = l(m);
        if (y !== m)
          return c(h, p, s(b, y));
      }
    }
    return h;
  }, f = (h, p) => {
    const { parentKey: b, index: m } = t.to;
    if (b === null)
      return [...h.slice(0, m), p, ...h.slice(m)];
    for (let y = 0; y < h.length; y += 1) {
      const C = h[y], x = o(C);
      if (x === void 0) continue;
      const g = r(C) === b ? [...x.slice(0, m), p, ...x.slice(m)] : f(x, p);
      if (g !== void 0)
        return c(h, y, s(C, g));
    }
  }, u = l(e);
  return i === void 0 ? e : f(u, i) ?? e;
}, MT = (e, { getItemValue: t, getParentKey: n, getOrder: r }) => {
  const o = /* @__PURE__ */ new Set();
  e.forEach((a) => o.add(t(a)));
  const s = /* @__PURE__ */ new Map();
  return e.forEach((a) => {
    const i = n(a) ?? null, c = i !== null && o.has(i) ? i : null, l = s.get(c);
    l ? l.push(a) : s.set(c, [a]);
  }), r && s.forEach(
    (a) => a.sort((i, c) => r(i) - r(c))
  ), s;
}, N1 = (e) => hy(e, "Tree"), M1 = _.createContext(null), P1 = _.createContext({
  parentKey: null,
  depth: 0,
  disabled: !1
}), Uf = () => {
  const e = _.useContext(M1);
  if (!e)
    throw new Error("Tree.Group and Tree.Item must be rendered inside Tree");
  return e;
}, PT = (e) => Array.from(e.querySelectorAll('[role="treeitem"]')).filter(
  (t) => !t.closest("ul[hidden]") && !t.closest(`[${Yf}]`)
), A1 = (e) => {
  const t = e.currentTarget.closest('[role="treeitem"]');
  t instanceof HTMLElement && t.focus();
};
function AT({
  defaultCollapsed: e = !1,
  selectable: t = !1,
  selected: n,
  defaultSelected: r,
  onSelectedChange: o,
  getItemValue: s = N1,
  sortable: a = !1,
  onMove: i,
  size: c = "md",
  indentBase: l = "sm",
  indentStep: f = "xl",
  onExpandedCountChange: u,
  ariaLabels: h,
  onFocus: p,
  onKeyDown: b,
  className: m,
  style: y,
  children: C,
  ...x
}, g) {
  const S = _.useRef(/* @__PURE__ */ new Map()), [w, E] = _.useState(
    () => ({ nodes: S.current })
  ), k = _.useRef(/* @__PURE__ */ new WeakMap()), N = _.useCallback((H) => {
    const ee = S.current, Q = k.current;
    return ee.has(H.key) && console.warn(
      `Tree: duplicate node key "${String(H.key)}". Item values must resolve to unique keys across the whole tree.`
    ), ee.set(H.key, H), Q.set(H.element, H), E({ nodes: ee }), () => {
      ee.get(H.key) === H && ee.delete(H.key), Q.get(H.element) === H && Q.delete(H.element), E({ nodes: ee });
    };
  }, []), [P, T] = _.useState(() => ({
    overrides: /* @__PURE__ */ new Map()
  })), O = _.useCallback(
    (H, ee) => P.overrides.get(H) ?? P.all ?? ee ?? !e,
    [P, e]
  ), D = _.useCallback((H, ee) => {
    T((Q) => ({
      ...Q,
      overrides: new Map(Q.overrides).set(H, ee)
    }));
  }, []);
  _.useImperativeHandle(
    g,
    () => ({
      collapseAll: () => T({ all: !1, overrides: /* @__PURE__ */ new Map() }),
      expandAll: () => T({ all: !0, overrides: /* @__PURE__ */ new Map() })
    }),
    []
  );
  const L = _.useCallback(
    (H) => H ? k.current.get(H) : void 0,
    []
  ), V = _.useCallback(
    (H) => {
      const ee = S.current;
      for (let Q = H.parentKey === null ? void 0 : ee.get(H.parentKey); Q; Q = Q.parentKey === null ? void 0 : ee.get(Q.parentKey))
        if (!O(Q.key, Q.defaultOpen)) return !1;
      return !0;
    },
    [O]
  ), B = _.useMemo(
    () => {
      var H;
      return ((H = Array.from(w.nodes.values()).filter((ee) => ee.parentKey === null).sort(Xd)[0]) == null ? void 0 : H.key) ?? null;
    },
    [w]
  ), W = _.useRef(null), Y = _.useRef(null), I = _.useCallback((H) => {
    const ee = Y.current;
    ee && ee !== H && (ee.tabIndex = -1), H && (H.tabIndex = 0), Y.current = H;
  }, []);
  _.useLayoutEffect(() => {
    const H = w.nodes, ee = W.current, Q = ee === null ? void 0 : H.get(ee), G = Q && V(Q) ? Q : B === null ? void 0 : H.get(B);
    I((G == null ? void 0 : G.element) ?? null);
  }, [w, V, B, I]);
  const $ = _.useRef(null);
  _.useEffect(() => {
    if (!u) return;
    let H = 0, ee = 0;
    w.nodes.forEach((G) => {
      G.kind !== "group" || !G.hasChildren || (H += 1, O(G.key, G.defaultOpen) && (ee += 1));
    });
    const Q = $.current;
    (Q == null ? void 0 : Q.expandableCount) === H && Q.openCount === ee || ($.current = { expandableCount: H, openCount: ee }, u({ expandableCount: H, openCount: ee }));
  }, [u, w, O]);
  const te = n !== void 0, [A, M] = _.useState(
    () => r ?? []
  ), F = n ?? A, z = _.useMemo(
    () => new Set(F.map((H) => s(H))),
    [F, s]
  ), X = _.useMemo(
    () => t ? xT(w.nodes) : /* @__PURE__ */ new Map(),
    [t, w]
  ), U = _.useCallback(
    (H, ee) => {
      let Q;
      if (ee) {
        const G = H.filter((ce) => !z.has(ce.valueKey)).sort(Xd);
        if (G.length === 0) return;
        Q = [...F, ...G.map((ce) => ce.getValue())];
      } else {
        const G = new Set(H.map((ce) => ce.valueKey));
        if (Q = F.filter(
          (ce) => !G.has(s(ce))
        ), Q.length === F.length) return;
      }
      te || M(Q), o == null || o(Q);
    },
    [
      z,
      F,
      s,
      te,
      o
    ]
  ), j = _.useCallback(
    (H) => z.has(H),
    [z]
  ), J = _.useCallback(
    (H) => wT(
      X.get(H) ?? [],
      (ee) => z.has(ee)
    ),
    [X, z]
  ), oe = _.useCallback(
    (H) => {
      const ee = S.current.get(H);
      ee && qd(ee) && U([ee], !z.has(ee.valueKey));
    },
    [U, z]
  ), de = _.useCallback(
    (H, ee) => U(
      (X.get(H) ?? []).filter((Q) => !Q.disabled),
      ee
    ),
    [U, X]
  ), me = (H) => {
    p == null || p(H);
    const ee = L(
      H.target.closest('[role="treeitem"]')
    );
    ee && (W.current = ee.key, I(ee.element));
  }, ge = (H) => {
    var le;
    if (b == null || b(H), H.defaultPrevented) return;
    const ee = H.target, Q = ee.getAttribute("role") === "treeitem" ? L(ee) : void 0, G = Se.current;
    if (!Q || !G) return;
    const ce = PT(G), q = ce.indexOf(ee), ie = Q.hasChildren && O(Q.key, Q.defaultOpen), he = (ze) => {
      ze instanceof HTMLElement && ze.focus();
    };
    switch (H.key) {
      case "ArrowDown":
        he(ce[q + 1]);
        break;
      case "ArrowUp":
        he(ce[q - 1]);
        break;
      case "ArrowRight":
        if (!Q.hasChildren) return;
        ie ? he(ce[q + 1]) : D(Q.key, !0);
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
        Q.kind === "item" ? oe(Q.key) : de(
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
  const Mt = _.useCallback(
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
    const q = G.element.getAttribute("aria-expanded") === "true";
    q && Fl(() => D(G.key, !1)), Ie.current = {
      node: G,
      originList: ce,
      originIndex: Ro(ce).indexOf(G.element),
      reopen: q,
      nodeOf: L,
      keyboard: !1
    }, ut.current = null, vt(), k1(ee, S.current);
  }, fn = (H, ee) => {
    const Q = Ie.current, G = Se.current;
    if (!Q || !G) return;
    if (H.by) {
      if (Q.keyboard = !0, H.by.y !== 0) {
        const he = H.by.y > 0 ? 1 : -1;
        NT(ee, S.current, Q, G, he);
      }
      return;
    }
    const { x: ce, y: q } = H.to ?? ee.dragOperation.position.current, ie = { x: ce, y: q };
    ut.current = ie, Wl(ee, S.current, Q, ie), vt(), Xe.current = window.setTimeout(() => {
      Xe.current = null;
      const he = Ie.current, le = ut.current;
      he === Q && !he.keyboard && le && Wl(ee, S.current, he, le);
    }, _T);
  }, hn = (H, ee) => {
    var ie;
    const { source: Q, target: G } = H.operation, ce = Ie.current;
    if (!Q || !G || !ce || ce.keyboard) {
      ot();
      return;
    }
    if (Wl(
      ee,
      S.current,
      ce,
      ut.current ?? ee.dragOperation.position.current
    ), G.id === Q.id || ((ie = Te.current) == null ? void 0 : ie.key) === G.id) return;
    ot();
    const q = window.setTimeout(() => {
      Te.current = null;
      const he = S.current.get(G.id);
      (he == null ? void 0 : he.element.getAttribute("aria-expanded")) === "false" && D(he.key, !0);
    }, CT);
    Te.current = { key: G.id, timer: q };
  }, Rn = (H, ee) => {
    const Q = Ie.current;
    if (Ie.current = null, ot(), vt(), !Q) return;
    const { node: G, originList: ce, originIndex: q, reopen: ie } = Q;
    if (!G.element.isConnected || !ce.isConnected) return;
    const he = G.element.parentElement, le = he ? Ro(he).indexOf(G.element) : -1, ze = ve(ce), jt = he ? ve(he) : void 0, en = he !== ce || le !== q, ft = () => {
      ie && D(G.key, !0);
    };
    if (H.canceled || !i || !en || ze === void 0 || jt === void 0) {
      Xp(Q), Dt(ee, ft);
      return;
    }
    const Ye = {
      key: G.valueKey ?? G.key,
      kind: G.kind,
      value: G.getValue(),
      from: Zt(ze, q),
      to: Zt(jt, le)
    };
    Dt(ee, () => {
      !G.element.isConnected || !ce.isConnected || (Xp(Q), Fl(() => {
        ft(), i(Ye);
      }));
    });
  }, Qt = (h == null ? void 0 : h.dragHandle) ?? "Drag to reorder", Jt = c === "lg" ? 48 : 40, On = _.useMemo(
    () => [
      Vw,
      Fw.configure({ offset: { x: 0, y: Jt } })
    ],
    [Jt]
  ), Pt = _.useMemo(
    () => ({
      selectable: t,
      sortable: a,
      size: c,
      ariaLabels: { dragHandle: Qt },
      resolveKey: s,
      register: N,
      isOpen: O,
      setOpen: D,
      isSelected: j,
      getGroupSelection: J,
      toggleItem: oe,
      setGroupSelected: de,
      canDrop: Mt
    }),
    [
      t,
      a,
      c,
      Qt,
      s,
      N,
      O,
      D,
      j,
      J,
      oe,
      de,
      Mt
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
        ...I1(0),
        ...y
      },
      children: C
    }
  ) });
  return a ? /* @__PURE__ */ d.jsx(
    Xw,
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
const R1 = _.forwardRef(AT);
R1.displayName = "Tree";
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
const O1 = (e, t) => {
  if (e === void 0 || !t) return null;
  const n = t(e);
  return n == null || typeof n == "boolean" ? null : _.isValidElement(n) && n.type === Ki ? n : /* @__PURE__ */ d.jsx(Ki, { children: n });
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
  items-center justify-center`, D1 = `[&:focus-visible>div]:ring-interactive-focused
  [&:focus-visible>div]:bg-interactive-neutral-hover outline-none
  [&:focus-visible>div]:ring-4 [&:focus-visible>div]:ring-inset`, jT = (e) => e === "some" ? "mixed" : e === "all", TT = `text-shape-light rounded-xs
  focus-visible:ring-interactive-focused group-hover:opacity-100
  group-data-[dragging]:opacity-100 pointer-coarse:opacity-100 flex size-6
  shrink-0 cursor-grab touch-none items-center justify-center opacity-0
  transition-opacity focus-visible:opacity-100 focus-visible:ring-4
  focus-visible:outline-none active:cursor-grabbing`, qf = "size-6 shrink-0", $T = "size-[1.125rem] shrink-0", Xf = (e) => `calc(var(--tree-indent-base) + ${e} * var(--tree-indent-step))`, I1 = (e) => ({ "--tree-indent": Xf(e) }), WT = `[&_[data-dnd-placeholder]]:relative
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
  [&_[data-dnd-placeholder]]:after:content-['']`, j1 = (e, t, n) => R(
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
  const { size: s, ariaLabels: a, canDrop: i } = Uf(), { targetRef: c, handleRef: l, isDragging: f } = v1({
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
      className: j1(s, r, DT),
      style: { paddingLeft: Xf(n) },
      children: [
        r ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: qf }) : /* @__PURE__ */ d.jsx(
          "button",
          {
            type: "button",
            ref: l,
            "aria-label": a.dragHandle,
            className: TT,
            children: /* @__PURE__ */ d.jsx(em, { size: 16 })
          }
        ),
        o
      ]
    }
  );
}, T1 = (e) => {
  const { sortable: t, size: n } = Uf();
  return t ? /* @__PURE__ */ d.jsx(LT, { ...e }) : /* @__PURE__ */ d.jsx(
    "div",
    {
      className: j1(n, e.disabled),
      style: { paddingLeft: Xf(e.depth) },
      children: e.children
    }
  );
}, $1 = (e) => _.Children.toArray(e).reduce(
  (t, n) => t + (_.isValidElement(n) && n.type === _.Fragment ? $1(n.props.children) : 1),
  0
), W1 = ({ kind: e, value: t, disabled: n, hasChildren: r = !1, defaultOpen: o }, s) => {
  const a = Uf(), i = _.useContext(P1), c = _.useId(), l = t === void 0 ? void 0 : a.resolveKey(t);
  if (e === "item" && t !== void 0 && typeof l != "string" && typeof l != "number")
    throw new Error(
      "Tree.Item: `getItemValue` must return a string or number for every Item value."
    );
  const f = l === void 0 ? c : e === "group" ? `group:${String(l)}` : l, u = n || i.disabled, h = _.useRef(t);
  _.useLayoutEffect(() => {
    h.current = t;
  });
  const p = _.useRef(null), b = _.useCallback(
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
    setElement: b,
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
  const l = $1(a) > 0, { ctx: f, depth: u, key: h, isDisabled: p, id: b, setElement: m, elementRef: y } = W1(
    { kind: "group", value: t, disabled: o, hasChildren: l, defaultOpen: r },
    c
  ), C = t !== void 0;
  _.useEffect(() => {
    f.sortable && !C && console.warn(
      "Tree.Group: give every Group a `value` in a sortable tree, so `onMove` can name it as a parent."
    );
  }, [f.sortable, C]);
  const x = `${b}-label`, g = `${b}-group`, S = !l || f.isOpen(h, r), w = f.selectable ? f.getGroupSelection(h) : null, E = () => f.setOpen(h, !S);
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
      className: R(D1, s),
      children: [
        /* @__PURE__ */ d.jsxs(
          T1,
          {
            nodeKey: h,
            elementRef: y,
            depth: u,
            disabled: p,
            children: [
              l ? /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, onClick: E, className: IT, children: /* @__PURE__ */ d.jsx(
                Qd,
                {
                  size: 14,
                  className: R(
                    "transition-transform duration-200",
                    S && "rotate-90"
                  )
                }
              ) }) : /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: qf }),
              w && /* @__PURE__ */ d.jsx(
                bo,
                {
                  id: `${b}-checkbox`,
                  "aria-hidden": !0,
                  tabIndex: -1,
                  onFocus: A1,
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
                  id: x,
                  onClick: l ? E : void 0,
                  className: R(
                    "min-w-0 flex-1 truncate select-none",
                    l && "cursor-pointer"
                  ),
                  children: e
                }
              ),
              O1(t, n)
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(
          P1.Provider,
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
                style: I1(u + 1),
                children: a
              }
            )
          }
        )
      ]
    }
  );
}
const L1 = _.forwardRef(FT);
L1.displayName = "Tree.Group";
function VT({
  value: e,
  renderRowOverlay: t,
  disabled: n = !1,
  className: r,
  children: o,
  ...s
}, a) {
  const { ctx: i, depth: c, key: l, valueKey: f, isDisabled: u, id: h, setElement: p, elementRef: b } = W1({ kind: "item", value: e, disabled: n }, a), m = `${h}-label`, y = `${h}-checkbox`, C = i.selectable && f !== void 0, x = f !== void 0 && i.isSelected(f);
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
      className: R(D1, r),
      children: /* @__PURE__ */ d.jsxs(
        T1,
        {
          nodeKey: l,
          elementRef: b,
          depth: c,
          disabled: u,
          children: [
            /* @__PURE__ */ d.jsx("span", { "aria-hidden": !0, className: qf }),
            i.selectable && (C ? /* @__PURE__ */ d.jsx(
              bo,
              {
                id: y,
                "aria-hidden": !0,
                tabIndex: -1,
                onFocus: A1,
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
                htmlFor: y,
                className: R(
                  "min-w-0 flex-1 select-none",
                  u ? "cursor-not-allowed" : "cursor-pointer"
                ),
                children: o
              }
            ) : /* @__PURE__ */ d.jsx("span", { id: m, className: "min-w-0 flex-1", children: o }),
            O1(e, t)
          ]
        }
      )
    }
  );
}
const F1 = _.forwardRef(VT);
F1.displayName = "Tree.Item";
const Ll = Object.assign(R1, {
  Group: L1,
  Item: F1,
  RowOverlay: Ki
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
  actionsLayout: a = "auto",
  isItemDisabled: i,
  labels: c,
  onItemsChange: l,
  withPlacement: f,
  onMove: u,
  onSelectedChange: h,
  getItemValue: p = N1,
  className: b,
  style: m,
  ...y
}, C) {
  const x = _.useRef(null), g = _.useId(), S = y["aria-label"] !== void 0 || y["aria-labelledby"] !== void 0;
  _.useImperativeHandle(
    C,
    () => ({
      collapseAll: () => {
        var W;
        return (W = x.current) == null ? void 0 : W.collapseAll();
      },
      expandAll: () => {
        var W;
        return (W = x.current) == null ? void 0 : W.expandAll();
      }
    }),
    []
  );
  const [w, E] = _.useState({
    expandableCount: 0,
    openCount: 0
  }), k = _.useMemo(
    () => MT(e, {
      getItemValue: p,
      getParentKey: t,
      ...r && { getOrder: r }
    }),
    [e, p, t, r]
  ), N = _.useRef(null);
  _.useEffect(() => {
    if (N.current === e) return;
    let W = 0;
    const Y = (I) => (k.get(I) ?? []).forEach(($) => {
      W += 1, Y(p($));
    });
    Y(null), W < e.length && (N.current = e, console.warn(
      `TreeList: ${e.length - W} item(s) cannot be reached from the top level. Check \`getParentKey\` for cycles.`
    ));
  }, [e, k, p]);
  const P = _.useMemo(() => {
    const W = /* @__PURE__ */ new Set();
    if (!i) return W;
    const Y = (I, $) => (k.get(I) ?? []).forEach((te) => {
      const A = p(te);
      $ && W.add(A), Y(A, $ || i(te));
    });
    return Y(null, !1), W;
  }, [k, p, i]), T = c.actions ?? "Actions", O = _.useMemo(
    () => s ? (W) => {
      const Y = p(W), I = s(W, {
        ancestorDisabled: P.has(Y)
      });
      if (I.length === 0) return null;
      const $ = a !== "buttons", te = (j) => /* @__PURE__ */ d.jsx(
        Ve,
        {
          type: "button",
          intent: j.intent ?? "secondary",
          size: "xs",
          danger: j.danger ?? !1,
          "aria-label": j.ariaLabel ?? (typeof j.label == "string" ? j.label : j.key),
          disabled: j.disabled ?? !1,
          onClick: () => j.onAction(W),
          className: R(j.intent === "text" && "min-w-0 px-0"),
          children: j.label
        },
        j.key
      ), A = a !== "menu" && /* @__PURE__ */ d.jsx(
        "span",
        {
          className: R(
            "contents",
            a === "auto" && "@max-4xl/tree-list:hidden max-md:hidden"
          ),
          children: I.map(te)
        }
      ), M = I.filter(
        (j) => j.besideMenu
      ), F = $ && M.length > 0 && /* @__PURE__ */ d.jsx(
        "span",
        {
          className: a === "auto" ? "md:@max-4xl/tree-list:contents hidden" : "md:contents hidden",
          children: M.map(te)
        }
      ), z = $ && M.length > 0, X = M.length === I.length, U = $ && /* @__PURE__ */ d.jsx(
        HT,
        {
          item: W,
          actions: I,
          label: T,
          fadeIn: z,
          className: X ? "max-md:contents hidden" : a === "auto" ? "@max-4xl/tree-list:contents max-md:contents hidden" : "contents"
        }
      );
      return /* @__PURE__ */ d.jsxs(
        Ll.RowOverlay,
        {
          className: R(
            "has-[[data-force-visible]]:opacity-100",
            $ && `max-md:static max-md:bg-none max-md:px-0
                      max-md:opacity-100`,
            z && (a === "auto" ? `@max-4xl/tree-list:static @max-4xl/tree-list:bg-none
                        @max-4xl/tree-list:px-0 @max-4xl/tree-list:opacity-100` : "px-0 static bg-none opacity-100")
          ),
          children: [
            A,
            F,
            U
          ]
        }
      );
    } : void 0,
    [s, a, T, P, p]
  ), D = _.useMemo(() => {
    const W = (Y) => (k.get(Y) ?? []).map((I) => {
      const $ = p(I);
      return /* @__PURE__ */ d.jsx(
        Ll.Group,
        {
          value: I,
          label: n(I),
          disabled: (i == null ? void 0 : i(I)) ?? !1,
          ...O && { renderRowOverlay: O },
          children: W($)
        },
        $
      );
    });
    return W(null);
  }, [
    k,
    p,
    n,
    i,
    O
  ]), L = l ? (W) => {
    l(
      zT(e, W, {
        getItemValue: p,
        getParentKey: t,
        getOrder: r,
        withPlacement: f
      })
    ), u == null || u(W);
  } : u, V = w.expandableCount > 0 && w.openCount < w.expandableCount, B = w.openCount > 0;
  return /* @__PURE__ */ d.jsxs(
    "div",
    {
      className: R("@container/tree-list flex w-full flex-col", b),
      style: m,
      children: [
        /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: `gap-xs pb-sm text-sm text-body-secondary flex items-center
          justify-end`,
            children: [
              /* @__PURE__ */ d.jsx(zs, { asChild: !0, intent: "tertiary", disabled: !V, children: /* @__PURE__ */ d.jsx(
                "button",
                {
                  type: "button",
                  disabled: !V,
                  onClick: () => {
                    var W;
                    return (W = x.current) == null ? void 0 : W.expandAll();
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
                    return (W = x.current) == null ? void 0 : W.collapseAll();
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
              id: g,
              className: "px-md text-sm text-body-secondary truncate",
              children: o
            }
          ) }),
          /* @__PURE__ */ d.jsx(
            Ll,
            {
              ref: x,
              size: "lg",
              "aria-labelledby": S ? void 0 : g,
              getItemValue: p,
              ...h && { onSelectedChange: h },
              onExpandedCountChange: E,
              ...L && { onMove: L },
              className: `border-surface-default divide-surface-default rounded-none
            border-x-0 border-t border-b-0`,
              indentBase: "xl",
              indentStep: "lg",
              ...y,
              children: D
            }
          )
        ] })
      ]
    }
  );
}
function HT({
  item: e,
  actions: t,
  label: n,
  fadeIn: r,
  className: o
}) {
  const [s, a] = _.useState(!1);
  return /* @__PURE__ */ d.jsx("span", { className: o, "data-force-visible": s || void 0, children: /* @__PURE__ */ d.jsxs(Ac, { open: s, onOpenChange: a, children: [
    /* @__PURE__ */ d.jsx(Rc, { asChild: !0, children: /* @__PURE__ */ d.jsx(
      Ve,
      {
        type: "button",
        intent: "tertiary",
        size: "xs",
        icon: Jp,
        "aria-label": n,
        className: R(
          r && `max-md:opacity-100 opacity-0 transition-opacity
                group-hover:opacity-100 group-has-[:focus-visible]:opacity-100
                data-[state=open]:opacity-100
                [li:focus-visible>div_&]:opacity-100`
        )
      }
    ) }),
    /* @__PURE__ */ d.jsx(Pc, { align: "end", children: t.map((i) => /* @__PURE__ */ d.jsx(
      Mi,
      {
        intent: i.danger ? "danger" : "default",
        disabled: i.disabled ?? !1,
        onSelect: () => i.onAction(e),
        className: R(i.besideMenu && "md:hidden"),
        children: i.menuLabel ?? i.label
      },
      i.key
    )) })
  ] }) });
}
const GT = _.forwardRef(BT);
GT.displayName = "TreeList";
const YT = pe(
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
), KT = _.forwardRef(
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
    orText: b = "または",
    selectFileText: m = "ファイルを選択",
    dropFilesText: y = "ここにファイルをドロップ",
    uploadingText: C = "アップロード中…",
    uploadCompletedText: x = "アップロードが完了しました",
    uploadFailedText: g = "アップロードに失敗しました",
    ...S
  }, w) => {
    const [E, k] = tt(!1), N = ct(null), P = ke(
      (M) => {
        M.preventDefault(), M.stopPropagation(), E || k(!0);
      },
      [E]
    ), T = ke((M) => {
      M.preventDefault(), M.stopPropagation(), k(!1);
    }, []), O = ke((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), D = ke(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), k(!1), a) return;
        const F = M.dataTransfer.files;
        F && F.length > 0 && (r == null || r(F));
      },
      [a, r]
    ), L = ke(() => {
      var M;
      a || (M = N.current) == null || M.click();
    }, [a]), V = ke(
      (M) => {
        const F = M.target.files;
        F && F.length > 0 && (r == null || r(F));
      },
      [r]
    ), B = E ? "dragging" : n, W = () => /* @__PURE__ */ d.jsx(
      p2,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), Y = () => /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary", children: p }),
        /* @__PURE__ */ d.jsx("p", { className: "text-body-secondary text-sm", children: b })
      ] }),
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "xs",
          intent: "tertiary",
          className: E ? "" : "z-10",
          icon: sh,
          onClick: (M) => {
            M.stopPropagation(), L();
          },
          children: m
        }
      )
    ] }), I = () => /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      W(),
      /* @__PURE__ */ d.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        y,
        " ",
        /* @__PURE__ */ d.jsx("span", { className: "text-sm", children: b })
      ] }),
      /* @__PURE__ */ d.jsx(
        Ve,
        {
          size: "xs",
          intent: "tertiary",
          className: E ? "" : "z-10",
          icon: sh,
          onClick: (M) => {
            M.stopPropagation(), L();
          },
          children: m
        }
      )
    ] }), $ = () => {
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
              onClick: (F) => {
                F.stopPropagation(), h == null || h();
              },
              children: /* @__PURE__ */ d.jsx(R2, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(
            f2,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ d.jsx("p", { className: "text-interactive-primary-default", children: u || x })
        ] })
      ] }) : B === "error" ? /* @__PURE__ */ d.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ d.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: c || M }) }),
        /* @__PURE__ */ d.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ d.jsx(t2, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ d.jsx("p", { className: "text-body-alert", children: f || g })
        ] })
      ] }) : null;
    }, te = () => t === "small" ? Y() : I(), A = () => /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: P,
        onDragLeave: T,
        onDragOver: O,
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
            YT({ size: t, state: B, disabled: a }),
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
                ref: N,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: s,
                onChange: V,
                disabled: a
              }
            ),
            A(),
            te()
          ]
        }
      ),
      (B === "inProgress" && i !== void 0 || B === "success" || B === "error") && $()
    ] });
  }
);
KT.displayName = "FileUploader";
export {
  t7 as Accordion,
  e7 as AccountMenu,
  Sx as AutoSuggest,
  DP as Badge,
  TP as Breadcrumbs,
  Ve as Button,
  Uy as Calendar,
  _O as Callout,
  n7 as Card,
  bo as Checkbox,
  PO as CheckboxGroup,
  RO as ChoiceChip,
  OO as ChoiceChipGroup,
  o7 as DataSheet,
  fx as DataSheetAction,
  tx as DataSheetHeader,
  rx as DataSheetKeyValue,
  nx as DataSheetSection,
  ix as DataSheetTable,
  ux as DataSheetTableActionsCell,
  lx as DataSheetTableBody,
  Ai as DataSheetTableCell,
  cx as DataSheetTableHeader,
  dx as DataSheetTableRow,
  qO as DatePicker,
  s7 as Dialog,
  Ac as Dropdown,
  Pc as DropdownContent,
  Mi as DropdownItem,
  OP as DropdownLabel,
  RP as DropdownSeparator,
  Rc as DropdownTrigger,
  KT as FileUploader,
  dD as FooterProvider,
  i7 as FormField,
  f7 as Logo,
  pD as MobileNavigation,
  mD as MobileNavigationItem,
  vD as MobileNavigationSection,
  qD as MultiSelect,
  a7 as MultiStepDialog,
  e5 as Pagination,
  Oc as ProgressIndicator,
  l7 as RadioButton,
  d7 as RadioButtonGroup,
  u5 as SearchBar,
  u7 as SegmentedControl,
  fd as Select,
  v5 as SideNavigation,
  Fx as SideNavigationCollapseButton,
  yx as SideNavigationItem,
  bx as SideNavigationProvider,
  xx as SideNavigationSection,
  _7 as Sortable,
  k7 as StatusIndicator,
  tT as Stepper,
  nT as Switch,
  _1 as Tab,
  gT as TabBar,
  rT as Table,
  sT as TableBody,
  dT as TableCaption,
  lT as TableCell,
  S1 as TableCoverMessage,
  aT as TableFooter,
  cT as TableHead,
  E7 as TableHeadSortButton,
  oT as TableHeader,
  iT as TableRow,
  uT as TableRowOverlay,
  Ri as Tag,
  _x as TagInput,
  yT as TextArea,
  c7 as TextField,
  zs as TextLink,
  N7 as ToastItem,
  M7 as ToastProvider,
  Kt as Tooltip,
  r7 as TooltipProvider,
  Ll as Tree,
  GT as TreeList,
  zT as applyTreeListMove,
  P7 as applyTreeMove,
  wD as colorCodeToTokenMap,
  nD as focusFirstTextField,
  MT as groupFlatTreeItems,
  ks as iconVariants,
  YO as inputVariants,
  hx as inputWrapperVariants,
  N1 as resolveTreeValue,
  ma as useSideNavigation
};
