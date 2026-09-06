import * as m from "react";
import S, { forwardRef as tp, createElement as ea, useState as We, useLayoutEffect as uc, createContext as co, useContext as qr, useCallback as ve, useRef as Rt, useEffect as Qt, useMemo as Vr } from "react";
import * as tr from "react-dom";
import np from "react-dom";
var Nr = { exports: {} }, Ln = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function rp() {
  if (ti) return Ln;
  ti = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var i in o)
        i !== "key" && (a[i] = o[i]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Ln.Fragment = t, Ln.jsx = n, Ln.jsxs = n, Ln;
}
var Wn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ni;
function op() {
  return ni || (ni = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === F ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case g:
          return "Fragment";
        case b:
          return "Profiler";
        case w:
          return "StrictMode";
        case P:
          return "Suspense";
        case N:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case v:
            return "Portal";
          case M:
            return R.displayName || "Context";
          case y:
            return (R._context.displayName || "Context") + ".Consumer";
          case C:
            var E = R.render;
            return R = R.displayName, R || (R = E.displayName || E.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case k:
            return E = R.displayName || null, E !== null ? E : e(R.type) || "Memo";
          case O:
            E = R._payload, R = R._init;
            try {
              return e(R(E));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var I = E.error, L = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return I.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === O)
        return "<...>";
      try {
        var E = e(R);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = W.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (Y.call(R, "key")) {
        var E = Object.getOwnPropertyDescriptor(R, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, E) {
      function I() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: I,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return U[R] || (U[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, E, I, L, G, K) {
      var D = I.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: E,
        props: I,
        _owner: L
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, E, I, L, G, K) {
      var D = E.children;
      if (D !== void 0)
        if (L)
          if ($(D)) {
            for (L = 0; L < D.length; L++)
              f(D[L]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (Y.call(E, "key")) {
        D = e(R);
        var Z = Object.keys(E).filter(function(ae) {
          return ae !== "key";
        });
        L = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", te[D + L] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          D,
          Z,
          D
        ), te[D + L] = !0);
      }
      if (D = null, I !== void 0 && (n(I), D = "" + I), s(E) && (n(E.key), D = "" + E.key), "key" in E) {
        I = {};
        for (var ee in E)
          ee !== "key" && (I[ee] = E[ee]);
      } else I = E;
      return D && i(
        I,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        D,
        I,
        o(),
        G,
        K
      );
    }
    function f(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === O && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = S, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), M = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), W = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, $ = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var V, U = {}, j = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), _ = H(r(a)), te = {};
    Wn.Fragment = g, Wn.jsx = function(R, E, I) {
      var L = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        R,
        E,
        I,
        !1,
        L ? Error("react-stack-top-frame") : j,
        L ? H(r(R)) : _
      );
    }, Wn.jsxs = function(R, E, I) {
      var L = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        R,
        E,
        I,
        !0,
        L ? Error("react-stack-top-frame") : j,
        L ? H(r(R)) : _
      );
    };
  })()), Wn;
}
var ri;
function ap() {
  return ri || (ri = 1, process.env.NODE_ENV === "production" ? Nr.exports = rp() : Nr.exports = op()), Nr.exports;
}
var c = ap();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sp = {
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
const Se = (e, t, n, r) => {
  const o = tp(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: u, ...f }, p) => ea(
      "svg",
      {
        ref: p,
        ...sp[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, d].join(" "),
        ...e === "filled" ? {
          fill: a
        } : {
          strokeWidth: i,
          stroke: a
        },
        ...f
      },
      [
        l && ea("title", { key: "svg-title" }, l),
        ...r.map(([h, x]) => ea(h, x)),
        ...Array.isArray(u) ? u : [u]
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
const ip = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], cp = Se("outline", "alert-circle", "AlertCircle", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], dp = Se("outline", "calendar-event", "CalendarEvent", lp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], fc = Se("outline", "check", "Check", up);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], lo = Se("outline", "chevron-down", "ChevronDown", fp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], pp = Se("outline", "chevron-left", "ChevronLeft", mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], mc = Se("outline", "chevron-right", "ChevronRight", hp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], gp = Se("outline", "circle-check", "CircleCheck", vp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], bp = Se("outline", "cloud-up", "CloudUp", xp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], wp = Se("outline", "dots-vertical", "DotsVertical", yp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], Sp = Se("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", Cp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], Np = Se("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", kp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], Ep = Se("outline", "loader", "Loader", Mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = [["path", { d: "M5 12l14 0", key: "svg-0" }]], Rp = Se("outline", "minus", "Minus", Pp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], pc = Se("outline", "pencil", "Pencil", Ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], hc = Se("outline", "restore", "Restore", Dp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Qa = Se("outline", "search", "Search", jp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], _p = Se("outline", "trash-x", "TrashX", Op);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], vc = Se("outline", "trash", "Trash", Tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], $p = Se("outline", "user", "User", Ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Ca = Se("outline", "x", "X", Fp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Wp = Se("filled", "alert-circle-filled", "AlertCircleFilled", Lp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], gc = Se("filled", "circle-check-filled", "CircleCheckFilled", Vp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], oi = Se("filled", "exclamation-circle-filled", "ExclamationCircleFilled", Bp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], ai = Se("filled", "folder-filled", "FolderFilled", zp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Br = Se("filled", "info-circle-filled", "InfoCircleFilled", Hp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], Gp = Se("filled", "lock-filled", "LockFilled", Yp);
function si(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = si(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : si(e[o], null);
        }
      };
  };
}
function le(...e) {
  return m.useCallback(Dt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ Kp(e), n = m.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = m.Children.toArray(a), l = i.find(qp);
    if (l) {
      const d = l.props.children, u = i.map((f) => f === l ? m.Children.count(d) > 1 ? m.Children.only(null) : m.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: m.isValidElement(d) ? m.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var kn = /* @__PURE__ */ Lt("Slot");
// @__NO_SIDE_EFFECTS__
function Kp(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (m.isValidElement(o)) {
      const s = Zp(o), i = Xp(a, o.props);
      return o.type !== m.Fragment && (i.ref = r ? Dt(r, s) : s), m.cloneElement(o, i);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xc = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function bc(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = xc, t;
}
var Up = /* @__PURE__ */ bc("Slottable");
function qp(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xc;
}
function Xp(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const l = a(...i);
      return o(...i), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Zp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Qp = [
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
], X = Qp.reduce((e, t) => {
  const n = /* @__PURE__ */ Lt(`Primitive.${t}`), r = m.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ja(e, t) {
  e && tr.flushSync(() => e.dispatchEvent(t));
}
var yc = Object.freeze({
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
}), Jp = "VisuallyHidden", uo = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    X.span,
    {
      ...e,
      ref: t,
      style: { ...yc, ...e.style }
    }
  )
);
uo.displayName = Jp;
var eh = uo;
function th(e, t) {
  const n = m.createContext(t), r = (a) => {
    const { children: s, ...i } = a, l = m.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ c.jsx(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = m.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Oe(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), l = n.length;
    n = [...n, s];
    const d = (f) => {
      var w;
      const { scope: p, children: h, ...x } = f, v = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || i, g = m.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(v.Provider, { value: g, children: h });
    };
    d.displayName = a + "Provider";
    function u(f, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || i, x = m.useContext(h);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [d, u];
  }
  const o = () => {
    const a = n.map((s) => m.createContext(s));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, nh(o, ...t)];
}
function nh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: l, scopeName: d }) => {
        const f = l(a)[`__scope${d}`];
        return { ...i, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function nr(e) {
  const t = e + "CollectionProvider", [n, r] = Oe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, b = S.useRef(null), y = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Lt(i), d = S.forwardRef(
    (v, g) => {
      const { scope: w, children: b } = v, y = a(i, w), M = le(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: M, children: b });
    }
  );
  d.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Lt(u), h = S.forwardRef(
    (v, g) => {
      const { scope: w, children: b, ...y } = v, M = S.useRef(null), C = le(g, M), P = a(u, w);
      return S.useEffect(() => (P.itemMap.set(M, { ref: M, ...y }), () => void P.itemMap.delete(M))), /* @__PURE__ */ c.jsx(p, { [f]: "", ref: C, children: b });
    }
  );
  h.displayName = u;
  function x(v) {
    const g = a(e + "CollectionConsumer", v);
    return S.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, N) => y.indexOf(P.ref.current) - y.indexOf(N.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: h },
    x,
    r
  ];
}
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var je = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, rh = m[" useInsertionEffect ".trim().toString()] || je;
function Ve({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = oh({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const u = m.useRef(e !== void 0);
    m.useEffect(() => {
      const f = u.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, r]);
  }
  const d = m.useCallback(
    (u) => {
      var f;
      if (i) {
        const p = ah(u) ? u(e) : u;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function oh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), a = m.useRef(t);
  return rh(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function ah(e) {
  return typeof e == "function";
}
function sh(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Te = (e) => {
  const { present: t, children: n } = e, r = ih(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = le(r.ref, ch(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
Te.displayName = "Presence";
function ih(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = sh(s, {
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
  return m.useEffect(() => {
    const d = Mr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), je(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, h = Mr(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), je(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = Mr(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = Mr(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: m.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function Mr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function ch(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lh = m[" useId ".trim().toString()] || (() => {
}), dh = 0;
function Ne(e) {
  const [t, n] = m.useState(lh());
  return je(() => {
    n((r) => r ?? String(dh++));
  }, [e]), t ? `radix-${t}` : "";
}
var fo = "Collapsible", [uh, wc] = Oe(fo), [fh, es] = uh(fo), Cc = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [l, d] = Ve({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: fo
    });
    return /* @__PURE__ */ c.jsx(
      fh,
      {
        scope: n,
        disabled: a,
        contentId: Ne(),
        open: l,
        onOpenToggle: m.useCallback(() => d((u) => !u), [d]),
        children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            "data-state": ns(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Cc.displayName = fo;
var Sc = "CollapsibleTrigger", kc = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = es(Sc, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": ns(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
kc.displayName = Sc;
var ts = "CollapsibleContent", Nc = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = es(ts, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(Te, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(mh, { ...r, ref: t, present: a }) });
  }
);
Nc.displayName = ts;
var mh = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = es(ts, n), [i, l] = m.useState(r), d = m.useRef(null), u = le(t, d), f = m.useRef(0), p = f.current, h = m.useRef(0), x = h.current, v = s.open || i, g = m.useRef(v), w = m.useRef(void 0);
  return m.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), je(() => {
    const b = d.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const y = b.getBoundingClientRect();
      f.current = y.height, h.current = y.width, g.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    X.div,
    {
      "data-state": ns(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function ns(e) {
  return e ? "open" : "closed";
}
var ph = Cc, hh = kc, vh = Nc, gh = m.createContext(void 0);
function Nn(e) {
  const t = m.useContext(gh);
  return e || t || "ltr";
}
var st = "Accordion", xh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [rs, bh, yh] = nr(st), [mo] = Oe(st, [
  yh,
  wc
]), os = wc(), Mc = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(rs.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(kh, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Sh, { ...o, ref: t }) });
  }
);
Mc.displayName = st;
var [Ec, wh] = mo(st), [Pc, Ch] = mo(
  st,
  { collapsible: !1 }
), Sh = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, l] = Ve({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: st
    });
    return /* @__PURE__ */ c.jsx(
      Ec,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(Pc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(Rc, { ...s, ref: t }) })
      }
    );
  }
), kh = S.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Ve({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: st
  }), l = S.useCallback(
    (u) => i((f = []) => [...f, u]),
    [i]
  ), d = S.useCallback(
    (u) => i((f = []) => f.filter((p) => p !== u)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    Ec,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(Pc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(Rc, { ...a, ref: t }) })
    }
  );
}), [Nh, po] = mo(st), Rc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = le(i, t), d = bh(n), f = Nn(o) === "ltr", p = z(e.onKeyDown, (h) => {
      var k;
      if (!xh.includes(h.key)) return;
      const x = h.target, v = d().filter((O) => {
        var T;
        return !((T = O.ref.current) != null && T.disabled);
      }), g = v.findIndex((O) => O.ref.current === x), w = v.length;
      if (g === -1) return;
      h.preventDefault();
      let b = g;
      const y = 0, M = w - 1, C = () => {
        b = g + 1, b > M && (b = y);
      }, P = () => {
        b = g - 1, b < y && (b = M);
      };
      switch (h.key) {
        case "Home":
          b = y;
          break;
        case "End":
          b = M;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? C() : P());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? P() : C());
          break;
        case "ArrowUp":
          a === "vertical" && P();
          break;
      }
      const N = b % w;
      (k = v[N].ref.current) == null || k.focus();
    });
    return /* @__PURE__ */ c.jsx(
      Nh,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(rs.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            ...s,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : p
          }
        ) })
      }
    );
  }
), Xr = "AccordionItem", [Mh, as] = mo(Xr), Ac = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = po(Xr, n), s = wh(Xr, n), i = os(n), l = Ne(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      Mh,
      {
        scope: n,
        open: d,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          ph,
          {
            "data-orientation": a.orientation,
            "data-state": Ic(d),
            ...i,
            ...o,
            ref: t,
            disabled: u,
            open: d,
            onOpenChange: (f) => {
              f ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
Ac.displayName = Xr;
var Dc = "AccordionHeader", jc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = po(st, n), a = as(Dc, n);
    return /* @__PURE__ */ c.jsx(
      X.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Ic(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
jc.displayName = Dc;
var Sa = "AccordionTrigger", Oc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = po(st, n), a = as(Sa, n), s = Ch(Sa, n), i = os(n);
    return /* @__PURE__ */ c.jsx(rs.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      hh,
      {
        "aria-disabled": a.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...i,
        ...r,
        ref: t
      }
    ) });
  }
);
Oc.displayName = Sa;
var _c = "AccordionContent", Tc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = po(st, n), a = as(_c, n), s = os(n);
    return /* @__PURE__ */ c.jsx(
      vh,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...s,
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
Tc.displayName = _c;
function Ic(e) {
  return e ? "open" : "closed";
}
var ii = Mc, Eh = Ac, Ph = jc, Rh = Oc, Ah = Tc;
function He(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Dh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var jh = "DismissableLayer", ka = "dismissableLayer.update", Oh = "dismissableLayer.pointerDownOutside", _h = "dismissableLayer.focusOutside", ci, $c = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), on = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = m.useContext($c), [u, f] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), x = le(t, (N) => f(N)), v = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), b = u ? v.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, M = b >= w, C = Ih((N) => {
      const k = N.target, O = [...d.branches].some((T) => T.contains(k));
      !M || O || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p), P = $h((N) => {
      const k = N.target;
      [...d.branches].some((T) => T.contains(k)) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p);
    return Dh((N) => {
      b === d.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (ci = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), li(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = ci);
        };
    }, [u, p, n, d]), m.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), li());
    }, [u, d]), m.useEffect(() => {
      const N = () => h({});
      return document.addEventListener(ka, N), () => document.removeEventListener(ka, N);
    }, []), /* @__PURE__ */ c.jsx(
      X.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? M ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
on.displayName = jh;
var Th = "DismissableLayerBranch", Fc = m.forwardRef((e, t) => {
  const n = m.useContext($c), r = m.useRef(null), o = le(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(X.div, { ...e, ref: o });
});
Fc.displayName = Th;
function Ih(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Lc(
            Oh,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function $h(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Lc(_h, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function li() {
  const e = new CustomEvent(ka);
  document.dispatchEvent(e);
}
function Lc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ja(o, a) : o.dispatchEvent(a);
}
var Fh = on, Lh = Fc, ta = "focusScope.autoFocusOnMount", na = "focusScope.autoFocusOnUnmount", di = { bubbles: !1, cancelable: !0 }, Wh = "FocusScope", rr = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = m.useState(null), d = He(o), u = He(a), f = m.useRef(null), p = le(t, (v) => l(v)), h = m.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  m.useEffect(() => {
    if (r) {
      let v = function(y) {
        if (h.paused || !i) return;
        const M = y.target;
        i.contains(M) ? f.current = M : $t(f.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !i) return;
        const M = y.relatedTarget;
        M !== null && (i.contains(M) || $t(f.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && $t(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, h.paused]), m.useEffect(() => {
    if (i) {
      fi.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const w = new CustomEvent(ta, di);
        i.addEventListener(ta, d), i.dispatchEvent(w), w.defaultPrevented || (Vh(Gh(Wc(i)), { select: !0 }), document.activeElement === v && $t(i));
      }
      return () => {
        i.removeEventListener(ta, d), setTimeout(() => {
          const w = new CustomEvent(na, di);
          i.addEventListener(na, u), i.dispatchEvent(w), w.defaultPrevented || $t(v ?? document.body, { select: !0 }), i.removeEventListener(na, u), fi.remove(h);
        }, 0);
      };
    }
  }, [i, d, u, h]);
  const x = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const b = v.currentTarget, [y, M] = Bh(b);
        y && M ? !v.shiftKey && w === M ? (v.preventDefault(), n && $t(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && $t(M, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(X.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
rr.displayName = Wh;
function Vh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($t(r, { select: t }), document.activeElement !== n) return;
}
function Bh(e) {
  const t = Wc(e), n = ui(t, e), r = ui(t.reverse(), e);
  return [n, r];
}
function Wc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ui(e, t) {
  for (const n of e)
    if (!zh(n, { upTo: t })) return n;
}
function zh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Hh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $t(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Hh(e) && t && e.select();
  }
}
var fi = Yh();
function Yh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = mi(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = mi(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function mi(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Kh = "Portal", an = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  je(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? np.createPortal(/* @__PURE__ */ c.jsx(X.div, { ...r, ref: t }), s) : null;
});
an.displayName = Kh;
var ra = 0;
function ho() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? pi()), document.body.insertAdjacentElement("beforeend", e[1] ?? pi()), ra++, () => {
      ra === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ra--;
    };
  }, []);
}
function pi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ut = function() {
  return ut = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ut.apply(this, arguments);
};
function Vc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Uh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var zr = "right-scroll-bar-position", Hr = "width-before-scroll-bar", qh = "with-scroll-bars-hidden", Xh = "--removed-body-scroll-bar-size";
function oa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zh(e, t) {
  var n = We(function() {
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
var Qh = typeof window < "u" ? m.useLayoutEffect : m.useEffect, hi = /* @__PURE__ */ new WeakMap();
function Jh(e, t) {
  var n = Zh(null, function(r) {
    return e.forEach(function(o) {
      return oa(o, r);
    });
  });
  return Qh(function() {
    var r = hi.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || oa(i, null);
      }), a.forEach(function(i) {
        o.has(i) || oa(i, s);
      });
    }
    hi.set(n, e);
  }, [e]), n;
}
function ev(e) {
  return e;
}
function tv(e, t) {
  t === void 0 && (t = ev);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var l = function() {
        var u = s;
        s = [], u.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(u) {
          s.push(u), d();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function nv(e) {
  e === void 0 && (e = {});
  var t = tv(null);
  return t.options = ut({ async: !0, ssr: !1 }, e), t;
}
var Bc = function(e) {
  var t = e.sideCar, n = Vc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, ut({}, n));
};
Bc.isSideCarExport = !0;
function rv(e, t) {
  return e.useMedium(t), Bc;
}
var zc = nv(), aa = function() {
}, vo = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: aa,
    onWheelCapture: aa,
    onTouchMoveCapture: aa
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, M = Vc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, P = Jh([n, t]), N = ut(ut({}, M), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(C, { sideCar: zc, removeScrollBar: d, shards: f, noRelative: h, noIsolation: x, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(i), ut(ut({}, N), { ref: P })) : m.createElement(b, ut({}, N, { className: l, ref: P }), i)
  );
});
vo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vo.classNames = {
  fullWidth: Hr,
  zeroRight: zr
};
var ov = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function av() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ov();
  return t && e.setAttribute("nonce", t), e;
}
function sv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function iv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var cv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = av()) && (sv(t, n), iv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, lv = function() {
  var e = cv();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Hc = function() {
  var e = lv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sa = function(e) {
  return parseInt(e || "", 10) || 0;
}, uv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [sa(n), sa(r), sa(o)];
}, fv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dv;
  var t = uv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mv = Hc(), gn = "data-scroll-locked", pv = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(qh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(gn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(zr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Hr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(zr, " .").concat(zr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Hr, " .").concat(Hr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(gn, `] {
    `).concat(Xh, ": ").concat(i, `px;
  }
`);
}, vi = function() {
  var e = parseInt(document.body.getAttribute(gn) || "0", 10);
  return isFinite(e) ? e : 0;
}, hv = function() {
  m.useEffect(function() {
    return document.body.setAttribute(gn, (vi() + 1).toString()), function() {
      var e = vi() - 1;
      e <= 0 ? document.body.removeAttribute(gn) : document.body.setAttribute(gn, e.toString());
    };
  }, []);
}, vv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  hv();
  var a = m.useMemo(function() {
    return fv(o);
  }, [o]);
  return m.createElement(mv, { styles: pv(a, !t, o, n ? "" : "!important") });
}, Na = !1;
if (typeof window < "u")
  try {
    var Er = Object.defineProperty({}, "passive", {
      get: function() {
        return Na = !0, !0;
      }
    });
    window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
  } catch {
    Na = !1;
  }
var dn = Na ? { passive: !1 } : !1, gv = function(e) {
  return e.tagName === "TEXTAREA";
}, Yc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !gv(e) && n[t] === "visible")
  );
}, xv = function(e) {
  return Yc(e, "overflowY");
}, bv = function(e) {
  return Yc(e, "overflowX");
}, gi = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Gc(e, r);
    if (o) {
      var a = Kc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, yv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, wv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Gc = function(e, t) {
  return e === "v" ? xv(t) : bv(t);
}, Kc = function(e, t) {
  return e === "v" ? yv(t) : wv(t);
}, Cv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Sv = function(e, t, n, r, o) {
  var a = Cv(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var h = Kc(e, i), x = h[0], v = h[1], g = h[2], w = v - g - a * x;
    (x || w) && Gc(e, i) && (f += w, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(p) < 1) && (d = !0), d;
}, Pr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xi = function(e) {
  return [e.deltaX, e.deltaY];
}, bi = function(e) {
  return e && "current" in e ? e.current : e;
}, kv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Nv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mv = 0, un = [];
function Ev(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(Mv++)[0], a = m.useState(Hc)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Uh([e.lockRef.current], (e.shards || []).map(bi), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = m.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = Pr(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - w[0], M = "deltaY" in v ? v.deltaY : b[1] - w[1], C, P = v.target, N = Math.abs(y) > Math.abs(M) ? "h" : "v";
    if ("touches" in v && N === "h" && P.type === "range")
      return !1;
    var k = gi(N, P);
    if (!k)
      return !0;
    if (k ? C = N : (C = N === "v" ? "h" : "v", k = gi(N, P)), !k)
      return !1;
    if (!r.current && "changedTouches" in v && (y || M) && (r.current = C), !C)
      return !0;
    var O = r.current || C;
    return Sv(O, g, v, O === "h" ? y : M);
  }, []), l = m.useCallback(function(v) {
    var g = v;
    if (!(!un.length || un[un.length - 1] !== a)) {
      var w = "deltaY" in g ? xi(g) : Pr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && kv(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(bi).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), M = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        M && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = m.useCallback(function(v, g, w, b) {
    var y = { name: v, delta: g, target: w, should: b, shadowParent: Pv(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = Pr(v), r.current = void 0;
  }, []), f = m.useCallback(function(v) {
    d(v.type, xi(v), v.target, i(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    d(v.type, Pr(v), v.target, i(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return un.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, dn), document.addEventListener("touchmove", l, dn), document.addEventListener("touchstart", u, dn), function() {
      un = un.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, dn), document.removeEventListener("touchmove", l, dn), document.removeEventListener("touchstart", u, dn);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(a, { styles: Nv(o) }) : null,
    h ? m.createElement(vv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Pv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Rv = rv(zc, Ev);
var or = m.forwardRef(function(e, t) {
  return m.createElement(vo, ut({}, e, { ref: t, sideCar: Rv }));
});
or.classNames = vo.classNames;
var Av = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fn = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ar = {}, ia = 0, Uc = function(e) {
  return e && (e.host || Uc(e.parentNode));
}, Dv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Uc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jv = function(e, t, n, r) {
  var o = Dv(t, Array.isArray(e) ? e : [e]);
  Ar[n] || (Ar[n] = /* @__PURE__ */ new WeakMap());
  var a = Ar[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), x = h !== null && h !== "false", v = (fn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          fn.set(p, v), a.set(p, g), s.push(p), v === 1 && x && Rr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), i.clear(), ia++, function() {
    s.forEach(function(f) {
      var p = fn.get(f) - 1, h = a.get(f) - 1;
      fn.set(f, p), a.set(f, h), p || (Rr.has(f) || f.removeAttribute(r), Rr.delete(f)), h || f.removeAttribute(n);
    }), ia--, ia || (fn = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ar = {});
  };
}, go = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Av(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), jv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, xo = "Dialog", [qc] = Oe(xo), [Ov, it] = qc(xo), Xc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = m.useRef(null), l = m.useRef(null), [d, u] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: xo
  });
  return /* @__PURE__ */ c.jsx(
    Ov,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Ne(),
      titleId: Ne(),
      descriptionId: Ne(),
      open: d,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((f) => !f), [u]),
      modal: s,
      children: n
    }
  );
};
Xc.displayName = xo;
var Zc = "DialogTrigger", _v = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Zc, n), a = le(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": cs(o.open),
        ...r,
        ref: a,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
_v.displayName = Zc;
var ss = "DialogPortal", [Tv, Qc] = qc(ss, {
  forceMount: void 0
}), Jc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = it(ss, t);
  return /* @__PURE__ */ c.jsx(Tv, { scope: t, forceMount: n, children: m.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Te, { present: n || a.open, children: /* @__PURE__ */ c.jsx(an, { asChild: !0, container: o, children: s }) })) });
};
Jc.displayName = ss;
var Zr = "DialogOverlay", el = m.forwardRef(
  (e, t) => {
    const n = Qc(Zr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = it(Zr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Te, { present: r || a.open, children: /* @__PURE__ */ c.jsx($v, { ...o, ref: t }) }) : null;
  }
);
el.displayName = Zr;
var Iv = /* @__PURE__ */ Lt("DialogOverlay.RemoveScroll"), $v = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(Zr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(or, { as: Iv, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        X.div,
        {
          "data-state": cs(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Jt = "DialogContent", tl = m.forwardRef(
  (e, t) => {
    const n = Qc(Jt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = it(Jt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Te, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Fv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Lv, { ...o, ref: t }) });
  }
);
tl.displayName = Jt;
var Fv = m.forwardRef(
  (e, t) => {
    const n = it(Jt, e.__scopeDialog), r = m.useRef(null), o = le(t, n.contentRef, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return go(a);
    }, []), /* @__PURE__ */ c.jsx(
      nl,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: z(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: z(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Lv = m.forwardRef(
  (e, t) => {
    const n = it(Jt, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      nl,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), nl = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = it(Jt, n), l = m.useRef(null), d = le(t, l);
    return ho(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        rr,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            on,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": cs(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Vv, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(zv, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), is = "DialogTitle", rl = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(is, n);
    return /* @__PURE__ */ c.jsx(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
rl.displayName = is;
var ol = "DialogDescription", Wv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(ol, n);
    return /* @__PURE__ */ c.jsx(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Wv.displayName = ol;
var al = "DialogClose", sl = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = it(al, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
sl.displayName = al;
function cs(e) {
  return e ? "open" : "closed";
}
var il = "DialogTitleWarning", [UN, cl] = th(il, {
  contentName: Jt,
  titleName: is,
  docsSlug: "dialog"
}), Vv = ({ titleId: e }) => {
  const t = cl(il), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Bv = "DialogDescriptionWarning", zv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${cl(Bv).contentName}}.`;
  return m.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ls = Xc, ds = Jc, us = el, fs = tl, ll = rl, Hv = sl;
function bo(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function yo(e) {
  const [t, n] = m.useState(void 0);
  return je(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, d = Array.isArray(l) ? l[0] : l;
          s = d.inlineSize, i = d.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var wo = "Checkbox", [Yv] = Oe(wo), [Gv, ms] = Yv(wo);
function Kv(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: l,
    required: d,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [p, h] = Ve({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: wo
  }), [x, v] = m.useState(null), [g, w] = m.useState(null), b = m.useRef(!1), y = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), M = {
    checked: p,
    disabled: a,
    setChecked: h,
    control: x,
    setControl: v,
    name: i,
    form: s,
    value: u,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: Ft(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    Gv,
    {
      scope: t,
      ...M,
      children: Uv(f) ? f(M) : r
    }
  );
}
var dl = "CheckboxTrigger", ul = m.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: i,
      checked: l,
      required: d,
      setControl: u,
      setChecked: f,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: x
    } = ms(dl, e), v = le(o, u), g = m.useRef(l);
    return m.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const b = () => f(g.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, f]), /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Ft(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": gl(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: z(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: z(n, (w) => {
          f((b) => Ft(b) ? !0 : !b), x && h && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
ul.displayName = dl;
var fl = m.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: l,
      onCheckedChange: d,
      form: u,
      ...f
    } = e;
    return /* @__PURE__ */ c.jsx(
      Kv,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: d,
        name: r,
        form: u,
        value: l,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            ul,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            vl,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
fl.displayName = wo;
var ml = "CheckboxIndicator", pl = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ms(ml, n);
    return /* @__PURE__ */ c.jsx(
      Te,
      {
        present: r || Ft(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            "data-state": gl(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
pl.displayName = ml;
var hl = "CheckboxBubbleInput", vl = m.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: l,
      name: d,
      value: u,
      form: f,
      bubbleInput: p,
      setBubbleInput: h
    } = ms(hl, e), x = le(n, h), v = bo(a), g = yo(r);
    m.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, P = !o.current;
      if (v !== a && C) {
        const N = new Event("click", { bubbles: P });
        b.indeterminate = Ft(a), C.call(b, Ft(a) ? !1 : a), b.dispatchEvent(N);
      }
    }, [p, v, a, o]);
    const w = m.useRef(Ft(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      X.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? w.current,
        required: i,
        disabled: l,
        name: d,
        value: u,
        form: f,
        ...t,
        tabIndex: -1,
        ref: x,
        style: {
          ...t.style,
          ...g,
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
vl.displayName = hl;
function Uv(e) {
  return typeof e == "function";
}
function Ft(e) {
  return e === "indeterminate";
}
function gl(e) {
  return Ft(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const qv = ["top", "right", "bottom", "left"], Wt = Math.min, Ue = Math.max, Qr = Math.round, Dr = Math.floor, vt = (e) => ({
  x: e,
  y: e
}), Xv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zv = {
  start: "end",
  end: "start"
};
function Ma(e, t, n) {
  return Ue(e, Wt(t, n));
}
function jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ot(e) {
  return e.split("-")[0];
}
function Mn(e) {
  return e.split("-")[1];
}
function ps(e) {
  return e === "x" ? "y" : "x";
}
function hs(e) {
  return e === "y" ? "height" : "width";
}
const Qv = /* @__PURE__ */ new Set(["top", "bottom"]);
function pt(e) {
  return Qv.has(Ot(e)) ? "y" : "x";
}
function vs(e) {
  return ps(pt(e));
}
function Jv(e, t, n) {
  n === void 0 && (n = !1);
  const r = Mn(e), o = vs(e), a = hs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Jr(s)), [s, Jr(s)];
}
function eg(e) {
  const t = Jr(e);
  return [Ea(e), t, Ea(t)];
}
function Ea(e) {
  return e.replace(/start|end/g, (t) => Zv[t]);
}
const yi = ["left", "right"], wi = ["right", "left"], tg = ["top", "bottom"], ng = ["bottom", "top"];
function rg(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? wi : yi : t ? yi : wi;
    case "left":
    case "right":
      return t ? tg : ng;
    default:
      return [];
  }
}
function og(e, t, n, r) {
  const o = Mn(e);
  let a = rg(Ot(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Ea)))), a;
}
function Jr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xv[t]);
}
function ag(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xl(e) {
  return typeof e != "number" ? ag(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function eo(e) {
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
function Ci(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = pt(t), s = vs(t), i = hs(s), l = Ot(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mn(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const sg = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = Ci(d, r, l), p = r, h = {}, x = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: w
    } = i[v], {
      x: b,
      y,
      data: M,
      reset: C
    } = await w({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, f = y ?? f, h = {
      ...h,
      [g]: {
        ...h[g],
        ...M
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: f
    } = Ci(d, p, l)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Un(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = jt(t, e), x = xl(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], w = eo(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), M = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = eo(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: y,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + x.top) / M.y,
    bottom: (C.bottom - w.bottom + x.bottom) / M.y,
    left: (w.left - C.left + x.left) / M.x,
    right: (C.right - w.right + x.right) / M.x
  };
}
const ig = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: d,
      padding: u = 0
    } = jt(e, t) || {};
    if (d == null)
      return {};
    const f = xl(u), p = {
      x: n,
      y: r
    }, h = vs(o), x = hs(h), v = await s.getDimensions(d), g = h === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", M = a.reference[x] + a.reference[h] - p[h] - a.floating[x], C = p[h] - a.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let N = P ? P[y] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(P))) && (N = i.floating[y] || a.floating[x]);
    const k = M / 2 - C / 2, O = N / 2 - v[x] / 2 - 1, T = Wt(f[w], O), F = Wt(f[b], O), W = T, Y = N - v[x] - F, $ = N / 2 - v[x] / 2 + k, H = Ma(W, $, Y), V = !l.arrow && Mn(o) != null && $ !== H && a.reference[x] / 2 - ($ < W ? T : F) - v[x] / 2 < 0, U = V ? $ < W ? $ - W : $ - Y : 0;
    return {
      [h]: p[h] + U,
      data: {
        [h]: H,
        centerOffset: $ - H - U,
        ...V && {
          alignmentOffset: U
        }
      },
      reset: V
    };
  }
}), cg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: v = !0,
        ...g
      } = jt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ot(o), b = pt(i), y = Ot(i) === i, M = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !v ? [Jr(i)] : eg(i)), P = x !== "none";
      !p && P && C.push(...og(i, v, x, M));
      const N = [i, ...C], k = await Un(t, g), O = [];
      let T = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(k[w]), f) {
        const $ = Jv(o, s, M);
        O.push(k[$[0]], k[$[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: O
      }], !O.every(($) => $ <= 0)) {
        var F, W;
        const $ = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, H = N[$];
        if (H && (!(f === "alignment" ? b !== pt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((j) => pt(j.placement) === b ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: T
            },
            reset: {
              placement: H
            }
          };
        let V = (W = T.filter((U) => U.overflows[0] <= 0).sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var Y;
              const U = (Y = T.filter((j) => {
                if (P) {
                  const _ = pt(j.placement);
                  return _ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((_) => _ > 0).reduce((_, te) => _ + te, 0)]).sort((j, _) => j[1] - _[1])[0]) == null ? void 0 : Y[0];
              U && (V = U);
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
function Si(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ki(e) {
  return qv.some((t) => e[t] >= 0);
}
const lg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = jt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Un(t, {
            ...o,
            elementContext: "reference"
          }), s = Si(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ki(s)
            }
          };
        }
        case "escaped": {
          const a = await Un(t, {
            ...o,
            altBoundary: !0
          }), s = Si(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ki(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, bl = /* @__PURE__ */ new Set(["left", "top"]);
async function dg(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ot(n), i = Mn(n), l = pt(n) === "y", d = bl.has(s) ? -1 : 1, u = a && l ? -1 : 1, f = jt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: x
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof x == "number" && (h = i === "end" ? x * -1 : x), l ? {
    x: h * u,
    y: p * d
  } : {
    x: p * d,
    y: h * u
  };
}
const ug = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, l = await dg(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, fg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: w,
              y: b
            } = g;
            return {
              x: w,
              y: b
            };
          }
        },
        ...l
      } = jt(e, t), d = {
        x: n,
        y: r
      }, u = await Un(t, l), f = pt(Ot(o)), p = ps(f);
      let h = d[p], x = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = h + u[g], y = h - u[w];
        h = Ma(b, h, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + u[g], y = x - u[w];
        x = Ma(b, x, y);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [f]: x
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: a,
            [f]: s
          }
        }
      };
    }
  };
}, mg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: d = !0
      } = jt(e, t), u = {
        x: n,
        y: r
      }, f = pt(o), p = ps(f);
      let h = u[p], x = u[f];
      const v = jt(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = p === "y" ? "height" : "width", M = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        h < M ? h = M : h > C && (h = C);
      }
      if (d) {
        var w, b;
        const y = p === "y" ? "width" : "height", M = bl.has(Ot(o)), C = a.reference[f] - a.floating[y] + (M && ((w = s.offset) == null ? void 0 : w[f]) || 0) + (M ? 0 : g.crossAxis), P = a.reference[f] + a.reference[y] + (M ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) - (M ? g.crossAxis : 0);
        x < C ? x = C : x > P && (x = P);
      }
      return {
        [p]: h,
        [f]: x
      };
    }
  };
}, pg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...d
      } = jt(e, t), u = await Un(t, d), f = Ot(o), p = Mn(o), h = pt(o) === "y", {
        width: x,
        height: v
      } = a.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = p === "end" ? "top" : "bottom");
      const b = v - u.top - u.bottom, y = x - u.left - u.right, M = Wt(v - u[g], b), C = Wt(x - u[w], y), P = !t.middlewareData.shift;
      let N = M, k = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = y), (r = t.middlewareData.shift) != null && r.enabled.y && (N = b), P && !p) {
        const T = Ue(u.left, 0), F = Ue(u.right, 0), W = Ue(u.top, 0), Y = Ue(u.bottom, 0);
        h ? k = x - 2 * (T !== 0 || F !== 0 ? T + F : Ue(u.left, u.right)) : N = v - 2 * (W !== 0 || Y !== 0 ? W + Y : Ue(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: k,
        availableHeight: N
      });
      const O = await s.getDimensions(i.floating);
      return x !== O.width || v !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Co() {
  return typeof window < "u";
}
function En(e) {
  return yl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  var t;
  return (t = (yl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function yl(e) {
  return Co() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function ot(e) {
  return Co() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function gt(e) {
  return Co() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function Ni(e) {
  return !Co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
const hg = /* @__PURE__ */ new Set(["inline", "contents"]);
function ar(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = at(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hg.has(o);
}
const vg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function gg(e) {
  return vg.has(En(e));
}
const xg = [":popover-open", ":modal"];
function So(e) {
  return xg.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const bg = ["transform", "translate", "scale", "rotate", "perspective"], yg = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wg = ["paint", "layout", "strict", "content"];
function gs(e) {
  const t = xs(), n = ot(e) ? at(e) : e;
  return bg.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || yg.some((r) => (n.willChange || "").includes(r)) || wg.some((r) => (n.contain || "").includes(r));
}
function Cg(e) {
  let t = Vt(e);
  for (; gt(t) && !yn(t); ) {
    if (gs(t))
      return t;
    if (So(t))
      return null;
    t = Vt(t);
  }
  return null;
}
function xs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Sg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function yn(e) {
  return Sg.has(En(e));
}
function at(e) {
  return qe(e).getComputedStyle(e);
}
function ko(e) {
  return ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Vt(e) {
  if (En(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ni(e) && e.host || // Fallback.
    xt(e)
  );
  return Ni(t) ? t.host : t;
}
function wl(e) {
  const t = Vt(e);
  return yn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gt(t) && ar(t) ? t : wl(t);
}
function qn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = wl(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = qe(o);
  if (a) {
    const i = Pa(s);
    return t.concat(s, s.visualViewport || [], ar(o) ? o : [], i && n ? qn(i) : []);
  }
  return t.concat(o, qn(o, [], n));
}
function Pa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Cl(e) {
  const t = at(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = gt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Qr(n) !== a || Qr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function bs(e) {
  return ot(e) ? e : e.contextElement;
}
function xn(e) {
  const t = bs(e);
  if (!gt(t))
    return vt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Cl(t);
  let s = (a ? Qr(n.width) : n.width) / r, i = (a ? Qr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const kg = /* @__PURE__ */ vt(0);
function Sl(e) {
  const t = qe(e);
  return !xs() || !t.visualViewport ? kg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ng(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qe(e) ? !1 : t;
}
function en(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = bs(e);
  let s = vt(1);
  t && (r ? ot(r) && (s = xn(r)) : s = xn(e));
  const i = Ng(a, n, r) ? Sl(a) : vt(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = qe(a), h = r && ot(r) ? qe(r) : r;
    let x = p, v = Pa(x);
    for (; v && r && h !== x; ) {
      const g = xn(v), w = v.getBoundingClientRect(), b = at(v), y = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, M = w.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, u *= g.x, f *= g.y, l += y, d += M, x = qe(v), v = Pa(x);
    }
  }
  return eo({
    width: u,
    height: f,
    x: l,
    y: d
  });
}
function No(e, t) {
  const n = ko(e).scrollLeft;
  return t ? t.left + n : en(xt(e)).left + n;
}
function kl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - No(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Mg(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = xt(r), i = t ? So(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = vt(1);
  const u = vt(0), f = gt(r);
  if ((f || !f && !a) && ((En(r) !== "body" || ar(s)) && (l = ko(r)), gt(r))) {
    const h = en(r);
    d = xn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !f && !a ? kl(s, l) : vt(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + u.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + u.y + p.y
  };
}
function Eg(e) {
  return Array.from(e.getClientRects());
}
function Pg(e) {
  const t = xt(e), n = ko(e), r = e.ownerDocument.body, o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + No(e);
  const i = -n.scrollTop;
  return at(r).direction === "rtl" && (s += Ue(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Mi = 25;
function Rg(e, t) {
  const n = qe(e), r = xt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = xs();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = No(r);
  if (d <= 0) {
    const u = r.ownerDocument, f = u.body, p = getComputedStyle(f), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= Mi && (a -= x);
  } else d <= Mi && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Ag = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Dg(e, t) {
  const n = en(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = gt(e) ? xn(e) : vt(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function Ei(e, t, n) {
  let r;
  if (t === "viewport")
    r = Rg(e, n);
  else if (t === "document")
    r = Pg(xt(e));
  else if (ot(t))
    r = Dg(t, n);
  else {
    const o = Sl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return eo(r);
}
function Nl(e, t) {
  const n = Vt(e);
  return n === t || !ot(n) || yn(n) ? !1 : at(n).position === "fixed" || Nl(n, t);
}
function jg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = qn(e, [], !1).filter((i) => ot(i) && En(i) !== "body"), o = null;
  const a = at(e).position === "fixed";
  let s = a ? Vt(e) : e;
  for (; ot(s) && !yn(s); ) {
    const i = at(s), l = gs(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Ag.has(o.position) || ar(s) && !l && Nl(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Vt(s);
  }
  return t.set(e, r), r;
}
function Og(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? So(t) ? [] : jg(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, u) => {
    const f = Ei(t, u, o);
    return d.top = Ue(f.top, d.top), d.right = Wt(f.right, d.right), d.bottom = Wt(f.bottom, d.bottom), d.left = Ue(f.left, d.left), d;
  }, Ei(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _g(e) {
  const {
    width: t,
    height: n
  } = Cl(e);
  return {
    width: t,
    height: n
  };
}
function Tg(e, t, n) {
  const r = gt(t), o = xt(t), a = n === "fixed", s = en(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vt(0);
  function d() {
    l.x = No(o);
  }
  if (r || !r && !a)
    if ((En(t) !== "body" || ar(o)) && (i = ko(t)), r) {
      const h = en(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const u = o && !r && !a ? kl(o, i) : vt(0), f = s.left + i.scrollLeft - l.x - u.x, p = s.top + i.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function ca(e) {
  return at(e).position === "static";
}
function Pi(e, t) {
  if (!gt(e) || at(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return xt(e) === n && (n = n.ownerDocument.body), n;
}
function Ml(e, t) {
  const n = qe(e);
  if (So(e))
    return n;
  if (!gt(e)) {
    let o = Vt(e);
    for (; o && !yn(o); ) {
      if (ot(o) && !ca(o))
        return o;
      o = Vt(o);
    }
    return n;
  }
  let r = Pi(e, t);
  for (; r && gg(r) && ca(r); )
    r = Pi(r, t);
  return r && yn(r) && ca(r) && !gs(r) ? n : r || Cg(e) || n;
}
const Ig = async function(e) {
  const t = this.getOffsetParent || Ml, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Tg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function $g(e) {
  return at(e).direction === "rtl";
}
const Fg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mg,
  getDocumentElement: xt,
  getClippingRect: Og,
  getOffsetParent: Ml,
  getElementRects: Ig,
  getClientRects: Eg,
  getDimensions: _g,
  getScale: xn,
  isElement: ot,
  isRTL: $g
};
function El(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Lg(e, t) {
  let n = null, r;
  const o = xt(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: p,
      height: h
    } = d;
    if (i || t(), !p || !h)
      return;
    const x = Dr(f), v = Dr(o.clientWidth - (u + p)), g = Dr(o.clientHeight - (f + h)), w = Dr(u), y = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: Ue(0, Wt(1, l)) || 1
    };
    let M = !0;
    function C(P) {
      const N = P[0].intersectionRatio;
      if (N !== l) {
        if (!M)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !El(d, e.getBoundingClientRect()) && s(), M = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function Wg(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = bs(e), u = o || a ? [...d ? qn(d) : [], ...qn(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = d && i ? Lg(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let x, v = l ? en(e) : null;
  l && g();
  function g() {
    const w = en(e);
    v && !El(v, w) && n(), v = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f == null || f(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const Vg = ug, Bg = fg, zg = cg, Hg = pg, Yg = lg, Ri = ig, Gg = mg, Kg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Fg,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return sg(e, t, {
    ...o,
    platform: a
  });
};
var Ug = typeof document < "u", qg = function() {
}, Yr = Ug ? uc : qg;
function to(e, t) {
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
        if (!to(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !to(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Pl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ai(e, t) {
  const n = Pl(e);
  return Math.round(t * n) / n;
}
function la(e) {
  const t = m.useRef(e);
  return Yr(() => {
    t.current = e;
  }), t;
}
function Xg(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: d
  } = e, [u, f] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = m.useState(r);
  to(p, r) || h(r);
  const [x, v] = m.useState(null), [g, w] = m.useState(null), b = m.useCallback((j) => {
    j !== P.current && (P.current = j, v(j));
  }, []), y = m.useCallback((j) => {
    j !== N.current && (N.current = j, w(j));
  }, []), M = a || x, C = s || g, P = m.useRef(null), N = m.useRef(null), k = m.useRef(u), O = l != null, T = la(l), F = la(o), W = la(d), Y = m.useCallback(() => {
    if (!P.current || !N.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (j.platform = F.current), Kg(P.current, N.current, j).then((_) => {
      const te = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      $.current && !to(k.current, te) && (k.current = te, tr.flushSync(() => {
        f(te);
      }));
    });
  }, [p, t, n, F, W]);
  Yr(() => {
    d === !1 && k.current.isPositioned && (k.current.isPositioned = !1, f((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [d]);
  const $ = m.useRef(!1);
  Yr(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Yr(() => {
    if (M && (P.current = M), C && (N.current = C), M && C) {
      if (T.current)
        return T.current(M, C, Y);
      Y();
    }
  }, [M, C, Y, T, O]);
  const H = m.useMemo(() => ({
    reference: P,
    floating: N,
    setReference: b,
    setFloating: y
  }), [b, y]), V = m.useMemo(() => ({
    reference: M,
    floating: C
  }), [M, C]), U = m.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return j;
    const _ = Ai(V.floating, u.x), te = Ai(V.floating, u.y);
    return i ? {
      ...j,
      transform: "translate(" + _ + "px, " + te + "px)",
      ...Pl(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: te
    };
  }, [n, i, V.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: Y,
    refs: H,
    elements: V,
    floatingStyles: U
  }), [u, Y, H, V, U]);
}
const Zg = (e) => {
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
      return r && t(r) ? r.current != null ? Ri({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Ri({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Qg = (e, t) => ({
  ...Vg(e),
  options: [e, t]
}), Jg = (e, t) => ({
  ...Bg(e),
  options: [e, t]
}), e0 = (e, t) => ({
  ...Gg(e),
  options: [e, t]
}), t0 = (e, t) => ({
  ...zg(e),
  options: [e, t]
}), n0 = (e, t) => ({
  ...Hg(e),
  options: [e, t]
}), r0 = (e, t) => ({
  ...Yg(e),
  options: [e, t]
}), o0 = (e, t) => ({
  ...Zg(e),
  options: [e, t]
});
var a0 = "Arrow", Rl = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    X.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Rl.displayName = a0;
var s0 = Rl, ys = "Popper", [Al, zt] = Oe(ys), [i0, Dl] = Al(ys), jl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ c.jsx(i0, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
jl.displayName = ys;
var Ol = "PopperAnchor", _l = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Dl(Ol, n), s = m.useRef(null), i = le(t, s), l = m.useRef(null);
    return m.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(X.div, { ...o, ref: i });
  }
);
_l.displayName = Ol;
var ws = "PopperContent", [c0, l0] = Al(ws), Tl = m.forwardRef(
  (e, t) => {
    var D, Z, ee, ae, de, pe;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...v
    } = e, g = Dl(ws, n), [w, b] = m.useState(null), y = le(t, (Me) => b(Me)), [M, C] = m.useState(null), P = yo(M), N = (P == null ? void 0 : P.width) ?? 0, k = (P == null ? void 0 : P.height) ?? 0, O = r + (a !== "center" ? "-" + a : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, F = Array.isArray(d) ? d : [d], W = F.length > 0, Y = {
      padding: T,
      boundary: F.filter(u0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: $, floatingStyles: H, placement: V, isPositioned: U, middlewareData: j } = Xg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...Me) => Wg(...Me, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Qg({ mainAxis: o + k, alignmentAxis: s }),
        l && Jg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? e0() : void 0,
          ...Y
        }),
        l && t0({ ...Y }),
        n0({
          ...Y,
          apply: ({ elements: Me, rects: Ie, availableWidth: ct, availableHeight: yt }) => {
            const { width: wt, height: et } = Ie.reference, Ct = Me.floating.style;
            Ct.setProperty("--radix-popper-available-width", `${ct}px`), Ct.setProperty("--radix-popper-available-height", `${yt}px`), Ct.setProperty("--radix-popper-anchor-width", `${wt}px`), Ct.setProperty("--radix-popper-anchor-height", `${et}px`);
          }
        }),
        M && o0({ element: M, padding: i }),
        f0({ arrowWidth: N, arrowHeight: k }),
        p && r0({ strategy: "referenceHidden", ...Y })
      ]
    }), [_, te] = Fl(V), R = He(x);
    je(() => {
      U && (R == null || R());
    }, [U, R]);
    const E = (D = j.arrow) == null ? void 0 : D.x, I = (Z = j.arrow) == null ? void 0 : Z.y, L = ((ee = j.arrow) == null ? void 0 : ee.centerOffset) !== 0, [G, K] = m.useState();
    return je(() => {
      w && K(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: U ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (ae = j.transformOrigin) == null ? void 0 : ae.x,
            (de = j.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((pe = j.hide) == null ? void 0 : pe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          c0,
          {
            scope: n,
            placedSide: _,
            onArrowChange: C,
            arrowX: E,
            arrowY: I,
            shouldHideArrow: L,
            children: /* @__PURE__ */ c.jsx(
              X.div,
              {
                "data-side": _,
                "data-align": te,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Tl.displayName = ws;
var Il = "PopperArrow", d0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, $l = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = l0(Il, r), s = d0[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ c.jsx(
          s0,
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
$l.displayName = Il;
function u0(e) {
  return e !== null;
}
var f0 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, u] = Fl(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", v = "";
    return d === "bottom" ? (x = s ? f : `${p}px`, v = `${-l}px`) : d === "top" ? (x = s ? f : `${p}px`, v = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, v = s ? f : `${h}px`) : d === "left" && (x = `${r.floating.width + l}px`, v = s ? f : `${h}px`), { data: { x, y: v } };
  }
});
function Fl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Mo = jl, sr = _l, Eo = Tl, Po = $l, da = "rovingFocusGroup.onEntryFocus", m0 = { bubbles: !1, cancelable: !0 }, ir = "RovingFocusGroup", [Ra, Ll, p0] = nr(ir), [h0, Pn] = Oe(
  ir,
  [p0]
), [v0, g0] = h0(ir), Wl = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Ra.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Ra.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(x0, { ...e, ref: t }) }) })
);
Wl.displayName = ir;
var x0 = m.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = e, p = m.useRef(null), h = le(t, p), x = Nn(a), [v, g] = Ve({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: ir
  }), [w, b] = m.useState(!1), y = He(d), M = Ll(n), C = m.useRef(!1), [P, N] = m.useState(0);
  return m.useEffect(() => {
    const k = p.current;
    if (k)
      return k.addEventListener(da, y), () => k.removeEventListener(da, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    v0,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (k) => g(k),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => N((k) => k + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => N((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        X.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: z(e.onFocus, (k) => {
            const O = !C.current;
            if (k.target === k.currentTarget && O && !w) {
              const T = new CustomEvent(da, m0);
              if (k.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const F = M().filter((V) => V.focusable), W = F.find((V) => V.active), Y = F.find((V) => V.id === v), H = [W, Y, ...F].filter(
                  Boolean
                ).map((V) => V.ref.current);
                zl(H, u);
              }
            }
            C.current = !1;
          }),
          onBlur: z(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Vl = "RovingFocusGroupItem", Bl = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ne(), d = a || l, u = g0(Vl, n), f = u.currentTabStopId === d, p = Ll(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ c.jsx(
      Ra.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: z(e.onMouseDown, (g) => {
              r ? u.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: z(e.onFocus, () => u.onItemFocus(d)),
            onKeyDown: z(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = w0(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((M) => M.focusable).map((M) => M.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const M = y.indexOf(g.currentTarget);
                  y = u.loop ? C0(y, M + 1) : y.slice(M + 1);
                }
                setTimeout(() => zl(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
Bl.displayName = Vl;
var b0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function y0(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function w0(e, t, n) {
  const r = y0(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return b0[r];
}
function zl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function C0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Cs = Wl, Ss = Bl, Aa = ["Enter", " "], S0 = ["ArrowDown", "PageUp", "Home"], Hl = ["ArrowUp", "PageDown", "End"], k0 = [...S0, ...Hl], N0 = {
  ltr: [...Aa, "ArrowRight"],
  rtl: [...Aa, "ArrowLeft"]
}, M0 = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, cr = "Menu", [Xn, E0, P0] = nr(cr), [sn, Yl] = Oe(cr, [
  P0,
  zt,
  Pn
]), Ro = zt(), Gl = Pn(), [R0, cn] = sn(cr), [A0, lr] = sn(cr), Kl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Ro(t), [l, d] = m.useState(null), u = m.useRef(!1), f = He(a), p = Nn(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(Mo, { ...i, children: /* @__PURE__ */ c.jsx(
    R0,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        A0,
        {
          scope: t,
          onClose: m.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
Kl.displayName = cr;
var D0 = "MenuAnchor", ks = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ro(n);
    return /* @__PURE__ */ c.jsx(sr, { ...o, ...r, ref: t });
  }
);
ks.displayName = D0;
var Ns = "MenuPortal", [j0, Ul] = sn(Ns, {
  forceMount: void 0
}), ql = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = cn(Ns, t);
  return /* @__PURE__ */ c.jsx(j0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Te, { present: n || a.open, children: /* @__PURE__ */ c.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
ql.displayName = Ns;
var Je = "MenuContent", [O0, Ms] = sn(Je), Xl = m.forwardRef(
  (e, t) => {
    const n = Ul(Je, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = cn(Je, e.__scopeMenu), s = lr(Je, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Xn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Te, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Xn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(_0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(T0, { ...o, ref: t }) }) }) });
  }
), _0 = m.forwardRef(
  (e, t) => {
    const n = cn(Je, e.__scopeMenu), r = m.useRef(null), o = le(t, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return go(a);
    }, []), /* @__PURE__ */ c.jsx(
      Es,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: z(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), T0 = m.forwardRef((e, t) => {
  const n = cn(Je, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    Es,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), I0 = /* @__PURE__ */ Lt("MenuContent.ScrollLock"), Es = m.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: l,
      onEscapeKeyDown: d,
      onPointerDownOutside: u,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: x,
      ...v
    } = e, g = cn(Je, n), w = lr(Je, n), b = Ro(n), y = Gl(n), M = E0(n), [C, P] = m.useState(null), N = m.useRef(null), k = le(t, N, g.onContentChange), O = m.useRef(0), T = m.useRef(""), F = m.useRef(0), W = m.useRef(null), Y = m.useRef("right"), $ = m.useRef(0), H = x ? or : m.Fragment, V = x ? { as: I0, allowPinchZoom: !0 } : void 0, U = (_) => {
      var D, Z;
      const te = T.current + _, R = M().filter((ee) => !ee.disabled), E = document.activeElement, I = (D = R.find((ee) => ee.ref.current === E)) == null ? void 0 : D.textValue, L = R.map((ee) => ee.textValue), G = U0(L, te, I), K = (Z = R.find((ee) => ee.textValue === G)) == null ? void 0 : Z.ref.current;
      (function ee(ae) {
        T.current = ae, window.clearTimeout(O.current), ae !== "" && (O.current = window.setTimeout(() => ee(""), 1e3));
      })(te), K && setTimeout(() => K.focus());
    };
    m.useEffect(() => () => window.clearTimeout(O.current), []), ho();
    const j = m.useCallback((_) => {
      var R, E;
      return Y.current === ((R = W.current) == null ? void 0 : R.side) && X0(_, (E = W.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      O0,
      {
        scope: n,
        searchRef: T,
        onItemEnter: m.useCallback(
          (_) => {
            j(_) && _.preventDefault();
          },
          [j]
        ),
        onItemLeave: m.useCallback(
          (_) => {
            var te;
            j(_) || ((te = N.current) == null || te.focus(), P(null));
          },
          [j]
        ),
        onTriggerLeave: m.useCallback(
          (_) => {
            j(_) && _.preventDefault();
          },
          [j]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: m.useCallback((_) => {
          W.current = _;
        }, []),
        children: /* @__PURE__ */ c.jsx(H, { ...V, children: /* @__PURE__ */ c.jsx(
          rr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: z(a, (_) => {
              var te;
              _.preventDefault(), (te = N.current) == null || te.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              on,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  Cs,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: z(l, (_) => {
                      w.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Eo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": fd(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: k,
                        style: { outline: "none", ...v.style },
                        onKeyDown: z(v.onKeyDown, (_) => {
                          const R = _.target.closest("[data-radix-menu-content]") === _.currentTarget, E = _.ctrlKey || _.altKey || _.metaKey, I = _.key.length === 1;
                          R && (_.key === "Tab" && _.preventDefault(), !E && I && U(_.key));
                          const L = N.current;
                          if (_.target !== L || !k0.includes(_.key)) return;
                          _.preventDefault();
                          const K = M().filter((D) => !D.disabled).map((D) => D.ref.current);
                          Hl.includes(_.key) && K.reverse(), G0(K);
                        }),
                        onBlur: z(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(O.current), T.current = "");
                        }),
                        onPointerMove: z(
                          e.onPointerMove,
                          Zn((_) => {
                            const te = _.target, R = $.current !== _.clientX;
                            if (_.currentTarget.contains(te) && R) {
                              const E = _.clientX > $.current ? "right" : "left";
                              Y.current = E, $.current = _.clientX;
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
Xl.displayName = Je;
var $0 = "MenuGroup", Ps = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { role: "group", ...r, ref: t });
  }
);
Ps.displayName = $0;
var F0 = "MenuLabel", Zl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
Zl.displayName = F0;
var no = "MenuItem", Di = "menu.itemSelect", Ao = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = m.useRef(null), s = lr(no, e.__scopeMenu), i = Ms(no, e.__scopeMenu), l = le(t, a), d = m.useRef(!1), u = () => {
      const f = a.current;
      if (!n && f) {
        const p = new CustomEvent(Di, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Di, (h) => r == null ? void 0 : r(h), { once: !0 }), Ja(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Ql,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: z(e.onClick, u),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), d.current = !0;
        },
        onPointerUp: z(e.onPointerUp, (f) => {
          var p;
          d.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: z(e.onKeyDown, (f) => {
          const p = i.searchRef.current !== "";
          n || p && f.key === " " || Aa.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Ao.displayName = no;
var Ql = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Ms(no, n), i = Gl(n), l = m.useRef(null), d = le(t, l), [u, f] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Xn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(Ss, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: z(
              e.onPointerMove,
              Zn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: z(
              e.onPointerLeave,
              Zn((x) => s.onItemLeave(x))
            ),
            onFocus: z(e.onFocus, () => f(!0)),
            onBlur: z(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), L0 = "MenuCheckboxItem", Jl = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(od, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      Ao,
      {
        role: "menuitemcheckbox",
        "aria-checked": ro(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": As(n),
        onSelect: z(
          o.onSelect,
          () => r == null ? void 0 : r(ro(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Jl.displayName = L0;
var ed = "MenuRadioGroup", [W0, V0] = sn(
  ed,
  { value: void 0, onValueChange: () => {
  } }
), td = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = He(r);
    return /* @__PURE__ */ c.jsx(W0, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(Ps, { ...o, ref: t }) });
  }
);
td.displayName = ed;
var nd = "MenuRadioItem", rd = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = V0(nd, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(od, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      Ao,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": As(a),
        onSelect: z(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
rd.displayName = nd;
var Rs = "MenuItemIndicator", [od, B0] = sn(
  Rs,
  { checked: !1 }
), ad = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = B0(Rs, n);
    return /* @__PURE__ */ c.jsx(
      Te,
      {
        present: r || ro(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            ...o,
            ref: t,
            "data-state": As(a.checked)
          }
        )
      }
    );
  }
);
ad.displayName = Rs;
var z0 = "MenuSeparator", sd = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      X.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
sd.displayName = z0;
var H0 = "MenuArrow", id = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ro(n);
    return /* @__PURE__ */ c.jsx(Po, { ...o, ...r, ref: t });
  }
);
id.displayName = H0;
var Y0 = "MenuSub", [qN, cd] = sn(Y0), zn = "MenuSubTrigger", ld = m.forwardRef(
  (e, t) => {
    const n = cn(zn, e.__scopeMenu), r = lr(zn, e.__scopeMenu), o = cd(zn, e.__scopeMenu), a = Ms(zn, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(ks, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Ql,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": fd(n.open),
        ...e,
        ref: Dt(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: z(
          e.onPointerMove,
          Zn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: z(
          e.onPointerLeave,
          Zn((f) => {
            var h, x;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (x = n.content) == null ? void 0 : x.dataset.side, g = v === "right", w = g ? -5 : 5, b = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + w, y: f.clientY },
                  { x: b, y: p.top },
                  { x: y, y: p.top },
                  { x: y, y: p.bottom },
                  { x: b, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: z(e.onKeyDown, (f) => {
          var h;
          const p = a.searchRef.current !== "";
          e.disabled || p && f.key === " " || N0[r.dir].includes(f.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
ld.displayName = zn;
var dd = "MenuSubContent", ud = m.forwardRef(
  (e, t) => {
    const n = Ul(Je, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = cn(Je, e.__scopeMenu), s = lr(Je, e.__scopeMenu), i = cd(dd, e.__scopeMenu), l = m.useRef(null), d = le(t, l);
    return /* @__PURE__ */ c.jsx(Xn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Te, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Xn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      Es,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: d,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var f;
          s.isUsingKeyboardRef.current && ((f = l.current) == null || f.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: z(e.onFocusOutside, (u) => {
          u.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: z(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: z(e.onKeyDown, (u) => {
          var h;
          const f = u.currentTarget.contains(u.target), p = M0[s.dir].includes(u.key);
          f && p && (a.onOpenChange(!1), (h = i.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
ud.displayName = dd;
function fd(e) {
  return e ? "open" : "closed";
}
function ro(e) {
  return e === "indeterminate";
}
function As(e) {
  return ro(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function G0(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function K0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function U0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = K0(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function q0(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function X0(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return q0(n, t);
}
function Zn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Z0 = Kl, Q0 = ks, J0 = ql, ex = Xl, tx = Ps, nx = Zl, rx = Ao, ox = Jl, ax = td, sx = rd, ix = ad, cx = sd, lx = id, dx = ld, ux = ud, Do = "DropdownMenu", [fx] = Oe(
  Do,
  [Yl]
), Be = Yl(), [mx, md] = fx(Do), pd = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Be(t), d = m.useRef(null), [u, f] = Ve({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: Do
  });
  return /* @__PURE__ */ c.jsx(
    mx,
    {
      scope: t,
      triggerId: Ne(),
      triggerRef: d,
      contentId: Ne(),
      open: u,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(Z0, { ...l, open: u, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
pd.displayName = Do;
var hd = "DropdownMenuTrigger", vd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = md(hd, n), s = Be(n);
    return /* @__PURE__ */ c.jsx(Q0, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: Dt(t, a.triggerRef),
        onPointerDown: z(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: z(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
vd.displayName = hd;
var px = "DropdownMenuPortal", gd = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ c.jsx(J0, { ...r, ...n });
};
gd.displayName = px;
var xd = "DropdownMenuContent", bd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = md(xd, n), a = Be(n), s = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      ex,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: z(e.onInteractOutside, (i) => {
          const l = i.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || d;
          (!o.modal || u) && (s.current = !0);
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
bd.displayName = xd;
var hx = "DropdownMenuGroup", vx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(tx, { ...o, ...r, ref: t });
  }
);
vx.displayName = hx;
var gx = "DropdownMenuLabel", yd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(nx, { ...o, ...r, ref: t });
  }
);
yd.displayName = gx;
var xx = "DropdownMenuItem", wd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(rx, { ...o, ...r, ref: t });
  }
);
wd.displayName = xx;
var bx = "DropdownMenuCheckboxItem", yx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(ox, { ...o, ...r, ref: t });
});
yx.displayName = bx;
var wx = "DropdownMenuRadioGroup", Cx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(ax, { ...o, ...r, ref: t });
});
Cx.displayName = wx;
var Sx = "DropdownMenuRadioItem", kx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(sx, { ...o, ...r, ref: t });
});
kx.displayName = Sx;
var Nx = "DropdownMenuItemIndicator", Mx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(ix, { ...o, ...r, ref: t });
});
Mx.displayName = Nx;
var Ex = "DropdownMenuSeparator", Cd = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(cx, { ...o, ...r, ref: t });
});
Cd.displayName = Ex;
var Px = "DropdownMenuArrow", Rx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(lx, { ...o, ...r, ref: t });
  }
);
Rx.displayName = Px;
var Ax = "DropdownMenuSubTrigger", Dx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(dx, { ...o, ...r, ref: t });
});
Dx.displayName = Ax;
var jx = "DropdownMenuSubContent", Ox = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(
    ux,
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
Ox.displayName = jx;
var _x = pd, Tx = vd, Ix = gd, $x = bd, Fx = yd, ji = wd, Lx = Cd;
function Oi(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var jo = "Popover", [Sd] = Oe(jo, [
  zt
]), dr = zt(), [Wx, Ht] = Sd(jo), kd = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = dr(t), l = m.useRef(null), [d, u] = m.useState(!1), [f, p] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: jo
  });
  return /* @__PURE__ */ c.jsx(Mo, { ...i, children: /* @__PURE__ */ c.jsx(
    Wx,
    {
      scope: t,
      contentId: Ne(),
      triggerRef: l,
      open: f,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: m.useCallback(() => u(!0), []),
      onCustomAnchorRemove: m.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
kd.displayName = jo;
var Nd = "PopoverAnchor", Md = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ht(Nd, n), a = dr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(sr, { ...a, ...r, ref: t });
  }
);
Md.displayName = Nd;
var Ed = "PopoverTrigger", Pd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ht(Ed, n), a = dr(n), s = le(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Od(o.open),
        ...r,
        ref: s,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(sr, { asChild: !0, ...a, children: i });
  }
);
Pd.displayName = Ed;
var Ds = "PopoverPortal", [Vx, Bx] = Sd(Ds, {
  forceMount: void 0
}), Rd = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ht(Ds, t);
  return /* @__PURE__ */ c.jsx(Vx, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Te, { present: n || a.open, children: /* @__PURE__ */ c.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
Rd.displayName = Ds;
var wn = "PopoverContent", Ad = m.forwardRef(
  (e, t) => {
    const n = Bx(wn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ht(wn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Te, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Hx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Yx, { ...o, ref: t }) });
  }
);
Ad.displayName = wn;
var zx = /* @__PURE__ */ Lt("PopoverContent.RemoveScroll"), Hx = m.forwardRef(
  (e, t) => {
    const n = Ht(wn, e.__scopePopover), r = m.useRef(null), o = le(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return go(s);
    }, []), /* @__PURE__ */ c.jsx(or, { as: zx, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      Dd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: z(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: z(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Yx = m.forwardRef(
  (e, t) => {
    const n = Ht(wn, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Dd,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, d;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Dd = m.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: d,
      onInteractOutside: u,
      ...f
    } = e, p = Ht(wn, n), h = dr(n);
    return ho(), /* @__PURE__ */ c.jsx(
      rr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          on,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              Eo,
              {
                "data-state": Od(p.open),
                role: "dialog",
                id: p.contentId,
                ...h,
                ...f,
                ref: t,
                style: {
                  ...f.style,
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
), jd = "PopoverClose", Gx = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ht(jd, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Gx.displayName = jd;
var Kx = "PopoverArrow", Ux = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = dr(n);
    return /* @__PURE__ */ c.jsx(Po, { ...o, ...r, ref: t });
  }
);
Ux.displayName = Kx;
function Od(e) {
  return e ? "open" : "closed";
}
var _d = kd, qx = Md, Td = Pd, Id = Rd, js = Ad, Os = "Progress", _s = 100, [Xx] = Oe(Os), [Zx, Qx] = Xx(Os), $d = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = Jx,
      ...s
    } = e;
    (o || o === 0) && !_i(o) && console.error(eb(`${o}`, "Progress"));
    const i = _i(o) ? o : _s;
    r !== null && !Ti(r, i) && console.error(tb(`${r}`, "Progress"));
    const l = Ti(r, i) ? r : null, d = oo(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(Zx, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      X.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": oo(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Wd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
$d.displayName = Os;
var Fd = "ProgressIndicator", Ld = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = Qx(Fd, n);
    return /* @__PURE__ */ c.jsx(
      X.div,
      {
        "data-state": Wd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Ld.displayName = Fd;
function Jx(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Wd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function oo(e) {
  return typeof e == "number";
}
function _i(e) {
  return oo(e) && !isNaN(e) && e > 0;
}
function Ti(e, t) {
  return oo(e) && !isNaN(e) && e <= t && e >= 0;
}
function eb(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${_s}\`.`;
}
function tb(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${_s} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var nb = $d, rb = Ld, Ts = "Radio", [ob, Vd] = Oe(Ts), [ab, sb] = ob(Ts), Bd = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: s,
      value: i = "on",
      onCheck: l,
      form: d,
      ...u
    } = e, [f, p] = m.useState(null), h = le(t, (g) => p(g)), x = m.useRef(!1), v = f ? d || !!f.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(ab, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Gd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...u,
          ref: h,
          onClick: z(e.onClick, (g) => {
            o || l == null || l(), v && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ c.jsx(
        Yd,
        {
          control: f,
          bubbles: !x.current,
          name: r,
          value: i,
          checked: o,
          required: a,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Bd.displayName = Ts;
var zd = "RadioIndicator", Hd = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = sb(zd, n);
    return /* @__PURE__ */ c.jsx(Te, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": Gd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Hd.displayName = zd;
var ib = "RadioBubbleInput", Yd = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = le(s, a), l = bo(n), d = yo(t);
    return m.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && h) {
        const x = new Event("click", { bubbles: r });
        h.call(u, n), u.dispatchEvent(x);
      }
    }, [l, n, r]), /* @__PURE__ */ c.jsx(
      X.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Yd.displayName = ib;
function Gd(e) {
  return e ? "checked" : "unchecked";
}
var cb = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Oo = "RadioGroup", [lb] = Oe(Oo, [
  Pn,
  Vd
]), Kd = Pn(), Ud = Vd(), [db, ub] = lb(Oo), qd = m.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: l,
      dir: d,
      loop: u = !0,
      onValueChange: f,
      ...p
    } = e, h = Kd(n), x = Nn(d), [v, g] = Ve({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: Oo
    });
    return /* @__PURE__ */ c.jsx(
      db,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          Cs,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: x,
            loop: u,
            children: /* @__PURE__ */ c.jsx(
              X.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: x,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
qd.displayName = Oo;
var Xd = "RadioGroupItem", Zd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = ub(Xd, n), s = a.disabled || r, i = Kd(n), l = Ud(n), d = m.useRef(null), u = le(t, d), f = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (v) => {
        cb.includes(v.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Ss,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          Bd,
          {
            disabled: s,
            required: a.required,
            checked: f,
            ...l,
            ...o,
            name: a.name,
            ref: u,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: z((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: z(o.onFocus, () => {
              var h;
              p.current && ((h = d.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
Zd.displayName = Xd;
var fb = "RadioGroupIndicator", Qd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ud(n);
    return /* @__PURE__ */ c.jsx(Hd, { ...o, ...r, ref: t });
  }
);
Qd.displayName = fb;
var mb = qd, pb = Zd, hb = Qd, vb = [" ", "Enter", "ArrowUp", "ArrowDown"], gb = [" ", "Enter"], tn = "Select", [_o, To, xb] = nr(tn), [Rn] = Oe(tn, [
  xb,
  zt
]), Io = zt(), [bb, Yt] = Rn(tn), [yb, wb] = Rn(tn), Jd = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: l,
    dir: d,
    name: u,
    autoComplete: f,
    disabled: p,
    required: h,
    form: x
  } = e, v = Io(t), [g, w] = m.useState(null), [b, y] = m.useState(null), [M, C] = m.useState(!1), P = Nn(d), [N, k] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: tn
  }), [O, T] = Ve({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: tn
  }), F = m.useRef(null), W = g ? x || !!g.closest("form") : !0, [Y, $] = m.useState(/* @__PURE__ */ new Set()), H = Array.from(Y).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ c.jsx(Mo, { ...v, children: /* @__PURE__ */ c.jsxs(
    bb,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: M,
      onValueNodeHasChildrenChange: C,
      contentId: Ne(),
      value: O,
      onValueChange: T,
      open: N,
      onOpenChange: k,
      dir: P,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(_o.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          yb,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((V) => {
              $((U) => new Set(U).add(V));
            }, []),
            onNativeOptionRemove: m.useCallback((V) => {
              $((U) => {
                const j = new Set(U);
                return j.delete(V), j;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ c.jsxs(
          Nu,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: O,
            onChange: (V) => T(V.target.value),
            disabled: p,
            form: x,
            children: [
              O === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Jd.displayName = tn;
var eu = "SelectTrigger", tu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Io(n), s = Yt(eu, n), i = s.disabled || r, l = le(t, s.onTriggerChange), d = To(n), u = m.useRef("touch"), [f, p, h] = Eu((v) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === s.value), b = Pu(g, v, w);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(sr, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Mu(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: z(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && x(v);
        }),
        onPointerDown: z(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: z(o.onKeyDown, (v) => {
          const g = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(g && v.key === " ") && vb.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
tu.displayName = eu;
var nu = "SelectValue", ru = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Yt(nu, n), { onValueNodeHasChildrenChange: d } = l, u = a !== void 0, f = le(t, l.onValueNodeChange);
    return je(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ c.jsx(
      X.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Mu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
ru.displayName = nu;
var Cb = "SelectIcon", ou = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
ou.displayName = Cb;
var Sb = "SelectPortal", au = (e) => /* @__PURE__ */ c.jsx(an, { asChild: !0, ...e });
au.displayName = Sb;
var nn = "SelectContent", su = m.forwardRef(
  (e, t) => {
    const n = Yt(nn, e.__scopeSelect), [r, o] = m.useState();
    if (je(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? tr.createPortal(
        /* @__PURE__ */ c.jsx(iu, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(_o.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(cu, { ...e, ref: t });
  }
);
su.displayName = nn;
var nt = 10, [iu, Gt] = Rn(nn), kb = "SelectContentImpl", Nb = /* @__PURE__ */ Lt("SelectContent.RemoveScroll"), cu = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g,
      //
      ...w
    } = e, b = Yt(nn, n), [y, M] = m.useState(null), [C, P] = m.useState(null), N = le(t, (D) => M(D)), [k, O] = m.useState(null), [T, F] = m.useState(
      null
    ), W = To(n), [Y, $] = m.useState(!1), H = m.useRef(!1);
    m.useEffect(() => {
      if (y) return go(y);
    }, [y]), ho();
    const V = m.useCallback(
      (D) => {
        const [Z, ...ee] = W().map((pe) => pe.ref.current), [ae] = ee.slice(-1), de = document.activeElement;
        for (const pe of D)
          if (pe === de || (pe == null || pe.scrollIntoView({ block: "nearest" }), pe === Z && C && (C.scrollTop = 0), pe === ae && C && (C.scrollTop = C.scrollHeight), pe == null || pe.focus(), document.activeElement !== de)) return;
      },
      [W, C]
    ), U = m.useCallback(
      () => V([k, y]),
      [V, k, y]
    );
    m.useEffect(() => {
      Y && U();
    }, [Y, U]);
    const { onOpenChange: j, triggerPointerDownPosRef: _ } = b;
    m.useEffect(() => {
      if (y) {
        let D = { x: 0, y: 0 };
        const Z = (ae) => {
          var de, pe;
          D = {
            x: Math.abs(Math.round(ae.pageX) - (((de = _.current) == null ? void 0 : de.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((pe = _.current) == null ? void 0 : pe.y) ?? 0))
          };
        }, ee = (ae) => {
          D.x <= 10 && D.y <= 10 ? ae.preventDefault() : y.contains(ae.target) || j(!1), document.removeEventListener("pointermove", Z), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", ee, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", ee, { capture: !0 });
        };
      }
    }, [y, j, _]), m.useEffect(() => {
      const D = () => j(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [j]);
    const [te, R] = Eu((D) => {
      const Z = W().filter((de) => !de.disabled), ee = Z.find((de) => de.ref.current === document.activeElement), ae = Pu(Z, D, ee);
      ae && setTimeout(() => ae.ref.current.focus());
    }), E = m.useCallback(
      (D, Z, ee) => {
        const ae = !H.current && !ee;
        (b.value !== void 0 && b.value === Z || ae) && (O(D), ae && (H.current = !0));
      },
      [b.value]
    ), I = m.useCallback(() => y == null ? void 0 : y.focus(), [y]), L = m.useCallback(
      (D, Z, ee) => {
        const ae = !H.current && !ee;
        (b.value !== void 0 && b.value === Z || ae) && F(D);
      },
      [b.value]
    ), G = r === "popper" ? Da : lu, K = G === Da ? {
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ c.jsx(
      iu,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: P,
        itemRefCallback: E,
        selectedItem: k,
        onItemLeave: I,
        itemTextRefCallback: L,
        focusSelectedItem: U,
        selectedItemText: T,
        position: r,
        isPositioned: Y,
        searchRef: te,
        children: /* @__PURE__ */ c.jsx(or, { as: Nb, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          rr,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: z(o, (D) => {
              var Z;
              (Z = b.trigger) == null || Z.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              on,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  G,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...w,
                    ...K,
                    onPlaced: () => $(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: z(w.onKeyDown, (D) => {
                      const Z = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !Z && D.key.length === 1 && R(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let ae = W().filter((de) => !de.disabled).map((de) => de.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const de = D.target, pe = ae.indexOf(de);
                          ae = ae.slice(pe + 1);
                        }
                        setTimeout(() => V(ae)), D.preventDefault();
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
cu.displayName = kb;
var Mb = "SelectItemAlignedPosition", lu = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Yt(nn, n), s = Gt(nn, n), [i, l] = m.useState(null), [d, u] = m.useState(null), f = le(t, (N) => u(N)), p = To(n), h = m.useRef(!1), x = m.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = s, y = m.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && v && g && w) {
      const N = a.trigger.getBoundingClientRect(), k = d.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), T = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = T.left - k.left, pe = O.left - de, Me = N.left - pe, Ie = N.width + Me, ct = Math.max(Ie, k.width), yt = window.innerWidth - nt, wt = Oi(pe, [
          nt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(nt, yt - ct)
        ]);
        i.style.minWidth = Ie + "px", i.style.left = wt + "px";
      } else {
        const de = k.right - T.right, pe = window.innerWidth - O.right - de, Me = window.innerWidth - N.right - pe, Ie = N.width + Me, ct = Math.max(Ie, k.width), yt = window.innerWidth - nt, wt = Oi(pe, [
          nt,
          Math.max(nt, yt - ct)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = wt + "px";
      }
      const F = p(), W = window.innerHeight - nt * 2, Y = v.scrollHeight, $ = window.getComputedStyle(d), H = parseInt($.borderTopWidth, 10), V = parseInt($.paddingTop, 10), U = parseInt($.borderBottomWidth, 10), j = parseInt($.paddingBottom, 10), _ = H + V + Y + j + U, te = Math.min(g.offsetHeight * 5, _), R = window.getComputedStyle(v), E = parseInt(R.paddingTop, 10), I = parseInt(R.paddingBottom, 10), L = N.top + N.height / 2 - nt, G = W - L, K = g.offsetHeight / 2, D = g.offsetTop + K, Z = H + V + D, ee = _ - Z;
      if (Z <= L) {
        const de = F.length > 0 && g === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const pe = d.clientHeight - v.offsetTop - v.offsetHeight, Me = Math.max(
          G,
          K + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (de ? I : 0) + pe + U
        ), Ie = Z + Me;
        i.style.height = Ie + "px";
      } else {
        const de = F.length > 0 && g === F[0].ref.current;
        i.style.top = "0px";
        const Me = Math.max(
          L,
          H + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (de ? E : 0) + K
        ) + ee;
        i.style.height = Me + "px", v.scrollTop = Z - L + v.offsetTop;
      }
      i.style.margin = `${nt}px 0`, i.style.minHeight = te + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    d,
    v,
    g,
    w,
    a.dir,
    r
  ]);
  je(() => y(), [y]);
  const [M, C] = m.useState();
  je(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const P = m.useCallback(
    (N) => {
      N && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    Pb,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: P,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: M
          },
          children: /* @__PURE__ */ c.jsx(
            X.div,
            {
              ...o,
              ref: f,
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
lu.displayName = Mb;
var Eb = "SelectPopperPosition", Da = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = nt,
    ...a
  } = e, s = Io(n);
  return /* @__PURE__ */ c.jsx(
    Eo,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Da.displayName = Eb;
var [Pb, Is] = Rn(nn, {}), ja = "SelectViewport", du = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Gt(ja, n), s = Is(ja, n), i = le(t, a.onViewportChange), l = m.useRef(0);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ c.jsx(_o.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        X.div,
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
          onScroll: z(o.onScroll, (d) => {
            const u = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && f) {
              const h = Math.abs(l.current - u.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - nt * 2, v = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(v, g);
                if (w < x) {
                  const b = w + h, y = Math.min(x, b), M = b - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (u.scrollTop = M > 0 ? M : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
du.displayName = ja;
var uu = "SelectGroup", [Rb, Ab] = Rn(uu), fu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ne();
    return /* @__PURE__ */ c.jsx(Rb, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
fu.displayName = uu;
var mu = "SelectLabel", pu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ab(mu, n);
    return /* @__PURE__ */ c.jsx(X.div, { id: o.id, ...r, ref: t });
  }
);
pu.displayName = mu;
var ao = "SelectItem", [Db, hu] = Rn(ao), vu = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Yt(ao, n), l = Gt(ao, n), d = i.value === r, [u, f] = m.useState(a ?? ""), [p, h] = m.useState(!1), x = le(
      t,
      (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, r, o);
      }
    ), v = Ne(), g = m.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      Db,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: d,
        onItemTextChange: m.useCallback((b) => {
          f((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          _o.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ c.jsx(
              X.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: x,
                onFocus: z(s.onFocus, () => h(!0)),
                onBlur: z(s.onBlur, () => h(!1)),
                onClick: z(s.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: z(s.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: z(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: z(s.onPointerMove, (b) => {
                  var y;
                  g.current = b.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: z(s.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: z(s.onKeyDown, (b) => {
                  var M;
                  ((M = l.searchRef) == null ? void 0 : M.current) !== "" && b.key === " " || (gb.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
vu.displayName = ao;
var Hn = "SelectItemText", gu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Yt(Hn, n), i = Gt(Hn, n), l = hu(Hn, n), d = wb(Hn, n), [u, f] = m.useState(null), p = le(
      t,
      (w) => f(w),
      l.onItemTextChange,
      (w) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, w, l.value, l.disabled);
      }
    ), h = u == null ? void 0 : u.textContent, x = m.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = d;
    return je(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(X.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? tr.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
gu.displayName = Hn;
var xu = "SelectItemIndicator", bu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return hu(xu, n).isSelected ? /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
bu.displayName = xu;
var Oa = "SelectScrollUpButton", yu = m.forwardRef((e, t) => {
  const n = Gt(Oa, e.__scopeSelect), r = Is(Oa, e.__scopeSelect), [o, a] = m.useState(!1), s = le(t, r.onScrollButtonChange);
  return je(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Cu,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
yu.displayName = Oa;
var _a = "SelectScrollDownButton", wu = m.forwardRef((e, t) => {
  const n = Gt(_a, e.__scopeSelect), r = Is(_a, e.__scopeSelect), [o, a] = m.useState(!1), s = le(t, r.onScrollButtonChange);
  return je(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < d;
        a(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Cu,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
wu.displayName = _a;
var Cu = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Gt("SelectScrollButton", n), s = m.useRef(null), i = To(n), l = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), je(() => {
    var u;
    const d = i().find((f) => f.ref.current === document.activeElement);
    (u = d == null ? void 0 : d.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    X.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: z(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: z(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: z(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), jb = "SelectSeparator", Su = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Su.displayName = jb;
var Ta = "SelectArrow", ku = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Io(n), a = Yt(Ta, n), s = Gt(Ta, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(Po, { ...o, ...r, ref: t }) : null;
  }
);
ku.displayName = Ta;
var Ob = "SelectBubbleInput", Nu = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = m.useRef(null), a = le(r, o), s = bo(t);
    return m.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== t && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(f);
      }
    }, [s, t]), /* @__PURE__ */ c.jsx(
      X.select,
      {
        ...n,
        style: { ...yc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
Nu.displayName = Ob;
function Mu(e) {
  return e === "" || e === void 0;
}
function Eu(e) {
  const t = He(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), (function l(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(i);
    },
    [t]
  ), a = m.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Pu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = _b(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function _b(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Tb = Jd, Ib = tu, $b = ru, Fb = ou, Lb = au, Wb = su, Vb = du, Bb = fu, zb = pu, Hb = vu, Yb = gu, Gb = bu, Kb = yu, Ub = wu, qb = Su, Xb = ku, $o = "Switch", [Zb] = Oe($o), [Qb, Jb] = Zb($o), Ru = m.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: l = "on",
      onCheckedChange: d,
      form: u,
      ...f
    } = e, [p, h] = m.useState(null), x = le(t, (y) => h(y)), v = m.useRef(!1), g = p ? u || !!p.closest("form") : !0, [w, b] = Ve({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: $o
    });
    return /* @__PURE__ */ c.jsxs(Qb, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": Ou(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: x,
          onClick: z(e.onClick, (y) => {
            b((M) => !M), g && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        ju,
        {
          control: p,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: w,
          required: s,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Ru.displayName = $o;
var Au = "SwitchThumb", Du = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Jb(Au, n);
    return /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": Ou(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Du.displayName = Au;
var ey = "SwitchBubbleInput", ju = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = le(s, a), l = bo(n), d = yo(t);
    return m.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && h) {
        const x = new Event("click", { bubbles: r });
        h.call(u, n), u.dispatchEvent(x);
      }
    }, [l, n, r]), /* @__PURE__ */ c.jsx(
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
          ...d,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
ju.displayName = ey;
function Ou(e) {
  return e ? "checked" : "unchecked";
}
var ty = Ru, ny = Du, Fo = "Tabs", [ry] = Oe(Fo, [
  Pn
]), _u = Pn(), [oy, $s] = ry(Fo), Tu = m.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: l = "automatic",
      ...d
    } = e, u = Nn(i), [f, p] = Ve({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Fo
    });
    return /* @__PURE__ */ c.jsx(
      oy,
      {
        scope: n,
        baseId: Ne(),
        value: f,
        onValueChange: p,
        orientation: s,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            dir: u,
            "data-orientation": s,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
Tu.displayName = Fo;
var Iu = "TabsList", $u = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = $s(Iu, n), s = _u(n);
    return /* @__PURE__ */ c.jsx(
      Cs,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
$u.displayName = Iu;
var Fu = "TabsTrigger", Lu = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = $s(Fu, n), i = _u(n), l = Vu(s.baseId, r), d = Bu(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ c.jsx(
      Ss,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ c.jsx(
          X.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": d,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: z(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: z(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !u && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Lu.displayName = Fu;
var Wu = "TabsContent", ay = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = $s(Wu, n), l = Vu(i.baseId, r), d = Bu(i.baseId, r), u = r === i.value, f = m.useRef(u);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(Te, { present: o || u, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      X.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !p,
        id: d,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
ay.displayName = Wu;
function Vu(e, t) {
  return `${e}-trigger-${t}`;
}
function Bu(e, t) {
  return `${e}-content-${t}`;
}
var sy = Tu, iy = $u, cy = Lu, Fs = "ToastProvider", [Ls, ly, dy] = nr("Toast"), [zu] = Oe("Toast", [dy]), [uy, Lo] = zu(Fs), Hu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = m.useState(null), [d, u] = m.useState(0), f = m.useRef(!1), p = m.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Fs}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(Ls.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    uy,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: i,
      onViewportChange: l,
      onToastAdd: m.useCallback(() => u((h) => h + 1), []),
      onToastRemove: m.useCallback(() => u((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: p,
      children: s
    }
  ) });
};
Hu.displayName = Fs;
var Yu = "ToastViewport", fy = ["F8"], Ia = "toast.viewportPause", $a = "toast.viewportResume", Gu = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = fy,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Lo(Yu, n), i = ly(n), l = m.useRef(null), d = m.useRef(null), u = m.useRef(null), f = m.useRef(null), p = le(t, f, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    m.useEffect(() => {
      const g = (w) => {
        var y;
        r.length !== 0 && r.every((M) => w[M] || w.code === M) && ((y = f.current) == null || y.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), m.useEffect(() => {
      const g = l.current, w = f.current;
      if (x && g && w) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const P = new CustomEvent(Ia);
            w.dispatchEvent(P), s.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (s.isClosePausedRef.current) {
            const P = new CustomEvent($a);
            w.dispatchEvent(P), s.isClosePausedRef.current = !1;
          }
        }, M = (P) => {
          !g.contains(P.relatedTarget) && y();
        }, C = () => {
          g.contains(document.activeElement) || y();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", M), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", M), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [x, s.isClosePausedRef]);
    const v = m.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((y) => {
          const M = y.ref.current, C = [M, ...Ny(M)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return m.useEffect(() => {
      const g = f.current;
      if (g) {
        const w = (b) => {
          var C, P, N;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const k = document.activeElement, O = b.shiftKey;
            if (b.target === g && O) {
              (C = d.current) == null || C.focus();
              return;
            }
            const W = v({ tabbingDirection: O ? "backwards" : "forwards" }), Y = W.findIndex(($) => $ === k);
            ua(W.slice(Y + 1)) ? b.preventDefault() : O ? (P = d.current) == null || P.focus() : (N = u.current) == null || N.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, v]), /* @__PURE__ */ c.jsxs(
      Lh,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            Fa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                ua(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(Ls.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(X.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            Fa,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                ua(g);
              }
            }
          )
        ]
      }
    );
  }
);
Gu.displayName = Yu;
var Ku = "ToastFocusProxy", Fa = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Lo(Ku, n);
    return /* @__PURE__ */ c.jsx(
      uo,
      {
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (s) => {
          var d;
          const i = s.relatedTarget;
          !((d = a.viewport) != null && d.contains(i)) && r();
        }
      }
    );
  }
);
Fa.displayName = Ku;
var ur = "Toast", my = "toast.swipeStart", py = "toast.swipeMove", hy = "toast.swipeCancel", vy = "toast.swipeEnd", Uu = m.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Ve({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: ur
    });
    return /* @__PURE__ */ c.jsx(Te, { present: n || i, children: /* @__PURE__ */ c.jsx(
      by,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: He(e.onPause),
        onResume: He(e.onResume),
        onSwipeStart: z(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: z(e.onSwipeMove, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: z(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: z(e.onSwipeEnd, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1);
        })
      }
    ) });
  }
);
Uu.displayName = ur;
var [gy, xy] = zu(ur, {
  onClose() {
  }
}), by = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: a,
      onClose: s,
      onEscapeKeyDown: i,
      onPause: l,
      onResume: d,
      onSwipeStart: u,
      onSwipeMove: f,
      onSwipeCancel: p,
      onSwipeEnd: h,
      ...x
    } = e, v = Lo(ur, n), [g, w] = m.useState(null), b = le(t, ($) => w($)), y = m.useRef(null), M = m.useRef(null), C = o || v.duration, P = m.useRef(0), N = m.useRef(C), k = m.useRef(0), { onToastAdd: O, onToastRemove: T } = v, F = He(() => {
      var H;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()), s();
    }), W = m.useCallback(
      ($) => {
        !$ || $ === 1 / 0 || (window.clearTimeout(k.current), P.current = (/* @__PURE__ */ new Date()).getTime(), k.current = window.setTimeout(F, $));
      },
      [F]
    );
    m.useEffect(() => {
      const $ = v.viewport;
      if ($) {
        const H = () => {
          W(N.current), d == null || d();
        }, V = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - P.current;
          N.current = N.current - U, window.clearTimeout(k.current), l == null || l();
        };
        return $.addEventListener(Ia, V), $.addEventListener($a, H), () => {
          $.removeEventListener(Ia, V), $.removeEventListener($a, H);
        };
      }
    }, [v.viewport, C, l, d, W]), m.useEffect(() => {
      a && !v.isClosePausedRef.current && W(C);
    }, [a, C, v.isClosePausedRef, W]), m.useEffect(() => (O(), () => T()), [O, T]);
    const Y = m.useMemo(() => g ? nf(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      Y && /* @__PURE__ */ c.jsx(
        yy,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Y
        }
      ),
      /* @__PURE__ */ c.jsx(gy, { scope: n, onClose: F, children: tr.createPortal(
        /* @__PURE__ */ c.jsx(Ls.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Fh,
          {
            asChild: !0,
            onEscapeKeyDown: z(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || F(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              X.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: z(e.onKeyDown, ($) => {
                  $.key === "Escape" && (i == null || i($.nativeEvent), $.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: z(e.onPointerDown, ($) => {
                  $.button === 0 && (y.current = { x: $.clientX, y: $.clientY });
                }),
                onPointerMove: z(e.onPointerMove, ($) => {
                  if (!y.current) return;
                  const H = $.clientX - y.current.x, V = $.clientY - y.current.y, U = !!M.current, j = ["left", "right"].includes(v.swipeDirection), _ = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, te = j ? _(0, H) : 0, R = j ? 0 : _(0, V), E = $.pointerType === "touch" ? 10 : 2, I = { x: te, y: R }, L = { originalEvent: $, delta: I };
                  U ? (M.current = I, jr(py, f, L, {
                    discrete: !1
                  })) : Ii(I, v.swipeDirection, E) ? (M.current = I, jr(my, u, L, {
                    discrete: !1
                  }), $.target.setPointerCapture($.pointerId)) : (Math.abs(H) > E || Math.abs(V) > E) && (y.current = null);
                }),
                onPointerUp: z(e.onPointerUp, ($) => {
                  const H = M.current, V = $.target;
                  if (V.hasPointerCapture($.pointerId) && V.releasePointerCapture($.pointerId), M.current = null, y.current = null, H) {
                    const U = $.currentTarget, j = { originalEvent: $, delta: H };
                    Ii(H, v.swipeDirection, v.swipeThreshold) ? jr(vy, h, j, {
                      discrete: !0
                    }) : jr(
                      hy,
                      p,
                      j,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", (_) => _.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        v.viewport
      ) })
    ] }) : null;
  }
), yy = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Lo(ur, t), [a, s] = m.useState(!1), [i, l] = m.useState(!1);
  return Sy(() => s(!0)), m.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(an, { asChild: !0, children: /* @__PURE__ */ c.jsx(uo, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, wy = "ToastTitle", qu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
qu.displayName = wy;
var Cy = "ToastDescription", Xu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
Xu.displayName = Cy;
var Zu = "ToastAction", Qu = m.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(tf, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(ef, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Zu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Qu.displayName = Zu;
var Ju = "ToastClose", ef = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = xy(Ju, n);
    return /* @__PURE__ */ c.jsx(tf, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, o.onClose)
      }
    ) });
  }
);
ef.displayName = Ju;
var tf = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ c.jsx(
    X.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function nf(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), ky(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...nf(r));
    }
  }), t;
}
function jr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ja(o, a) : o.dispatchEvent(a);
}
var Ii = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Sy(e = () => {
}) {
  const t = He(e);
  je(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function ky(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ny(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ua(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var My = Hu, Ey = Gu, Py = Uu, Ry = qu, Ay = Xu, Dy = Qu, [Wo] = Oe("Tooltip", [
  zt
]), Vo = zt(), rf = "TooltipProvider", jy = 700, La = "tooltip.open", [Oy, Ws] = Wo(rf), of = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = jy,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = m.useRef(!0), i = m.useRef(!1), l = m.useRef(0);
  return m.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    Oy,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: m.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: m.useCallback((d) => {
        i.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
of.displayName = rf;
var Qn = "Tooltip", [_y, fr] = Wo(Qn), af = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = Ws(Qn, e.__scopeTooltip), d = Vo(t), [u, f] = m.useState(null), p = Ne(), h = m.useRef(0), x = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, g = m.useRef(!1), [w, b] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (N) => {
      N ? (l.onOpen(), document.dispatchEvent(new CustomEvent(La))) : l.onClose(), a == null || a(N);
    },
    caller: Qn
  }), y = m.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), M = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, b(!0);
  }, [b]), C = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b(!1);
  }, [b]), P = m.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, b(!0), h.current = 0;
    }, v);
  }, [v, b]);
  return m.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ c.jsx(Mo, { ...d, children: /* @__PURE__ */ c.jsx(
    _y,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: m.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : M();
      }, [l.isOpenDelayedRef, P, M]),
      onTriggerLeave: m.useCallback(() => {
        x ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, x]),
      onOpen: M,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
af.displayName = Qn;
var Wa = "TooltipTrigger", sf = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = fr(Wa, n), a = Ws(Wa, n), s = Vo(n), i = m.useRef(null), l = le(t, i, o.onTriggerChange), d = m.useRef(!1), u = m.useRef(!1), f = m.useCallback(() => d.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(sr, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      X.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: z(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: z(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: z(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: z(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: z(e.onBlur, o.onClose),
        onClick: z(e.onClick, o.onClose)
      }
    ) });
  }
);
sf.displayName = Wa;
var Vs = "TooltipPortal", [Ty, Iy] = Wo(Vs, {
  forceMount: void 0
}), cf = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = fr(Vs, t);
  return /* @__PURE__ */ c.jsx(Ty, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Te, { present: n || a.open, children: /* @__PURE__ */ c.jsx(an, { asChild: !0, container: o, children: r }) }) });
};
cf.displayName = Vs;
var Cn = "TooltipContent", lf = m.forwardRef(
  (e, t) => {
    const n = Iy(Cn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = fr(Cn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Te, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(df, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx($y, { side: o, ...a, ref: t }) });
  }
), $y = m.forwardRef((e, t) => {
  const n = fr(Cn, e.__scopeTooltip), r = Ws(Cn, e.__scopeTooltip), o = m.useRef(null), a = le(t, o), [s, i] = m.useState(null), { trigger: l, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = m.useCallback(() => {
    i(null), f(!1);
  }, [f]), h = m.useCallback(
    (x, v) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = By(w, g.getBoundingClientRect()), y = zy(w, b), M = Hy(v.getBoundingClientRect()), C = Gy([...y, ...M]);
      i(C), f(!0);
    },
    [f]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (l && u) {
      const x = (g) => h(g, u), v = (g) => h(g, l);
      return l.addEventListener("pointerleave", x), u.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", x), u.removeEventListener("pointerleave", v);
      };
    }
  }, [l, u, h, p]), m.useEffect(() => {
    if (s) {
      const x = (v) => {
        const g = v.target, w = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !Yy(w, s);
        b ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, u, s, d, p]), /* @__PURE__ */ c.jsx(df, { ...e, ref: a });
}), [Fy, Ly] = Wo(Qn, { isInside: !1 }), Wy = /* @__PURE__ */ bc("TooltipContent"), df = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = fr(Cn, n), d = Vo(n), { onClose: u } = l;
    return m.useEffect(() => (document.addEventListener(La, u), () => document.removeEventListener(La, u)), [u]), m.useEffect(() => {
      if (l.trigger) {
        const f = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ c.jsx(
      on,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ c.jsxs(
          Eo,
          {
            "data-state": l.stateAttribute,
            ...d,
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
              /* @__PURE__ */ c.jsx(Wy, { children: r }),
              /* @__PURE__ */ c.jsx(Fy, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(eh, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
lf.displayName = Cn;
var uf = "TooltipArrow", Vy = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Vo(n);
    return Ly(
      uf,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(Po, { ...o, ...r, ref: t });
  }
);
Vy.displayName = uf;
function By(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
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
function zy(e, t, n = 5) {
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
function Hy(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Yy(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function Gy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ky(t);
}
function Ky(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Uy = of, qy = af, Xy = sf, Zy = cf, Qy = lf;
function ff(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ff(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function mf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ff(e)) && (r && (r += " "), r += t);
  return r;
}
const $i = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fi = mf, oe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Fi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null) return null;
    const p = $i(u) || $i(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, u) => {
    let [f, p] = u;
    return p === void 0 || (d[f] = p), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: f, className: p, ...h } = u;
    return Object.entries(h).every((x) => {
      let [v, g] = x;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[v]) : {
        ...a,
        ...i
      }[v] === g;
    }) ? [
      ...d,
      f,
      p
    ] : d;
  }, []);
  return Fi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Bs = "-", Jy = (e) => {
  const t = tw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Bs);
      return i[0] === "" && i.length !== 1 && i.shift(), pf(i, t) || ew(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, pf = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? pf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Bs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Li = /^\[(.+)\]$/, ew = (e) => {
  if (Li.test(e)) {
    const t = Li.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tw = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Va(n[o], r, o, t);
  return r;
}, Va = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Wi(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (nw(o)) {
        Va(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Va(s, Wi(t, a), n, r);
    });
  });
}, Wi = (e, t) => {
  let n = e;
  return t.split(Bs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, nw = (e) => e.isThemeGetter, rw = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}, Ba = "!", za = ":", ow = za.length, aw = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, i = 0, l = 0, d;
    for (let x = 0; x < o.length; x++) {
      let v = o[x];
      if (s === 0 && i === 0) {
        if (v === za) {
          a.push(o.slice(l, x)), l = x + ow;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const u = a.length === 0 ? o : o.substring(l), f = sw(u), p = f !== u, h = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + za, a = r;
    r = (s) => s.startsWith(o) ? a(s.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: s,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, sw = (e) => e.endsWith(Ba) ? e.substring(0, e.length - 1) : e.startsWith(Ba) ? e.substring(1) : e, iw = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let a = [];
    return r.forEach((s) => {
      s[0] === "[" || t[s] ? (o.push(...a.sort(), s), a = []) : a.push(s);
    }), o.push(...a.sort()), o;
  };
}, cw = (e) => ({
  cache: rw(e.cacheSize),
  parseClassName: aw(e),
  sortModifiers: iw(e),
  ...Jy(e)
}), lw = /\s+/, dw = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(lw);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      isExternal: f,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: v
    } = n(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!v, w = r(g ? x.substring(0, v) : x);
    if (!w) {
      if (!g) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(x), !w) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const b = a(p).join(":"), y = h ? b + Ba : b, M = y + w;
    if (s.includes(M))
      continue;
    s.push(M);
    const C = o(w, g);
    for (let P = 0; P < C.length; ++P) {
      const N = C[P];
      s.push(y + N);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function uw() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = hf(t)) && (r && (r += " "), r += n);
  return r;
}
const hf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = hf(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Vi(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((u, f) => f(u), e());
    return n = cw(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const u = dw(l, n);
    return o(l, u), u;
  }
  return function() {
    return a(uw.apply(null, arguments));
  };
}
const Ee = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, vf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, gf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fw = /^\d+\/\d+$/, mw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, vw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, mn = (e) => fw.test(e), fe = (e) => !!e && !Number.isNaN(Number(e)), Tt = (e) => !!e && Number.isInteger(Number(e)), fa = (e) => e.endsWith("%") && fe(e.slice(0, -1)), Mt = (e) => mw.test(e), xw = () => !0, bw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pw.test(e) && !hw.test(e)
), xf = () => !1, yw = (e) => vw.test(e), ww = (e) => gw.test(e), Cw = (e) => !Q(e) && !J(e), Sw = (e) => An(e, wf, xf), Q = (e) => vf.test(e), qt = (e) => An(e, Cf, bw), ma = (e) => An(e, Pw, fe), Bi = (e) => An(e, bf, xf), kw = (e) => An(e, yf, ww), Or = (e) => An(e, Sf, yw), J = (e) => gf.test(e), Vn = (e) => Dn(e, Cf), Nw = (e) => Dn(e, Rw), zi = (e) => Dn(e, bf), Mw = (e) => Dn(e, wf), Ew = (e) => Dn(e, yf), _r = (e) => Dn(e, Sf, !0), An = (e, t, n) => {
  const r = vf.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Dn = (e, t, n = !1) => {
  const r = gf.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, bf = (e) => e === "position" || e === "percentage", yf = (e) => e === "image" || e === "url", wf = (e) => e === "length" || e === "size" || e === "bg-size", Cf = (e) => e === "length", Pw = (e) => e === "number", Rw = (e) => e === "family-name", Sf = (e) => e === "shadow", Hi = () => {
  const e = Ee("color"), t = Ee("font"), n = Ee("text"), r = Ee("font-weight"), o = Ee("tracking"), a = Ee("leading"), s = Ee("breakpoint"), i = Ee("container"), l = Ee("spacing"), d = Ee("radius"), u = Ee("shadow"), f = Ee("inset-shadow"), p = Ee("text-shadow"), h = Ee("drop-shadow"), x = Ee("blur"), v = Ee("perspective"), g = Ee("aspect"), w = Ee("ease"), b = Ee("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [
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
  ], C = () => [...M(), J, Q], P = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], k = () => [J, Q, l], O = () => [mn, "full", "auto", ...k()], T = () => [Tt, "none", "subgrid", J, Q], F = () => ["auto", {
    span: ["full", Tt, J, Q]
  }, Tt, J, Q], W = () => [Tt, "auto", J, Q], Y = () => ["auto", "min", "max", "fr", J, Q], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...k()], U = () => [mn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], j = () => [e, J, Q], _ = () => [...M(), zi, Bi, {
    position: [J, Q]
  }], te = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", Mw, Sw, {
    size: [J, Q]
  }], E = () => [fa, Vn, qt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    J,
    Q
  ], L = () => ["", fe, Vn, qt], G = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [fe, fa, zi, Bi], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    J,
    Q
  ], ee = () => ["none", fe, J, Q], ae = () => ["none", fe, J, Q], de = () => [fe, J, Q], pe = () => [mn, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Mt],
      breakpoint: [Mt],
      color: [xw],
      container: [Mt],
      "drop-shadow": [Mt],
      ease: ["in", "out", "in-out"],
      font: [Cw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Mt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Mt],
      shadow: [Mt],
      spacing: ["px", fe],
      text: [Mt],
      "text-shadow": [Mt],
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
        aspect: ["auto", "square", mn, Q, J, g]
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
        columns: [fe, Q, J, i]
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [Tt, "auto", J, Q]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [mn, "full", "auto", i, ...k()]
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
        flex: [fe, mn, "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", fe, J, Q]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", fe, J, Q]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Tt, "first", "last", "none", J, Q]
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
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
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
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
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
        "space-x": k()
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
        "space-y": k()
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
        size: U()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...U()]
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
          ...U()
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
            screen: [s]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Vn, qt]
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
        font: [r, J, ma]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fa, Q]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nw, Q, t]
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
        tracking: [o, J, Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [fe, "none", J, ma]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", J, Q]
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
        list: ["disc", "decimal", "none", J, Q]
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
        placeholder: j()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: j()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [fe, "from-font", "auto", J, qt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: j()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [fe, "auto", J, Q]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, Q]
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
        content: ["none", J, Q]
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
        bg: _()
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
        bg: R()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Tt, J, Q],
          radial: ["", J, Q],
          conic: [Tt, J, Q]
        }, Ew, kw]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: j()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: E()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: E()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: j()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
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
        "divide-y": L()
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
        border: [...G(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...G(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: j()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": j()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": j()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": j()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": j()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": j()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": j()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": j()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": j()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: j()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [fe, J, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", fe, Vn, qt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: j()
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
          u,
          _r,
          Or
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: j()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, _r, Or]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": j()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
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
        ring: j()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [fe, qt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": j()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": j()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, _r, Or]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": j()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [fe, J, Q]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
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
        "mask-linear": [fe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": j()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": j()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": j()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": j()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": j()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": j()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": j()
      }],
      "mask-image-radial": [{
        "mask-radial": [J, Q]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": j()
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
        "mask-radial-at": M()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [fe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": j()
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
        mask: _()
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
        mask: R()
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
        mask: ["none", J, Q]
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
          J,
          Q
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Z()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [fe, J, Q]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [fe, J, Q]
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
          h,
          _r,
          Or
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": j()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", fe, J, Q]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [fe, J, Q]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", fe, J, Q]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [fe, J, Q]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", fe, J, Q]
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
          J,
          Q
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Z()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [fe, J, Q]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [fe, J, Q]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", fe, J, Q]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [fe, J, Q]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", fe, J, Q]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [fe, J, Q]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [fe, J, Q]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", fe, J, Q]
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
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, Q]
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
        duration: [fe, "initial", J, Q]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, J, Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [fe, J, Q]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, J, Q]
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
        perspective: [v, J, Q]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ee()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ee()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ee()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ee()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ae()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ae()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ae()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ae()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [J, Q, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        translate: pe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": pe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": pe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": pe()
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
        accent: j()
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
        caret: j()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, Q]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", J, Q]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [fe, Vn, qt, ma]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...j()]
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
}, Aw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (Yn(e, "cacheSize", t), Yn(e, "prefix", n), Yn(e, "experimentalParseClassName", r), Tr(e.theme, a.theme), Tr(e.classGroups, a.classGroups), Tr(e.conflictingClassGroups, a.conflictingClassGroups), Tr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Yn(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ir(e.theme, o.theme), Ir(e.classGroups, o.classGroups), Ir(e.conflictingClassGroups, o.conflictingClassGroups), Ir(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), kf(e, o, "orderSensitiveModifiers"), e), Yn = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Tr = (e, t) => {
  if (t)
    for (const n in t)
      Yn(e, n, t[n]);
}, Ir = (e, t) => {
  if (t)
    for (const n in t)
      kf(e, t, n);
}, kf = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Dw = (e, ...t) => typeof e == "function" ? Vi(Hi, e, ...t) : Vi(() => Aw(Hi(), e), ...t), jw = Dw({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    },
    classGroups: {
      z: [
        {
          z: [
            "slight",
            "navigation",
            "drawer",
            "dialog",
            "dropdown",
            "tooltip",
            "max"
          ]
        }
      ]
    }
  }
}), A = (...e) => jw(mf(e)), De = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return S.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return S.createElement(o, { size: n, className: r });
  }
  return e;
}, Ow = oe(
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
), _w = oe(
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
), Ha = S.forwardRef(
  ({
    children: e,
    onSelect: t,
    disabled: n,
    intent: r = "default",
    icon: o,
    className: a,
    asChild: s = !1,
    ...i
  }, l) => {
    const d = {
      ref: l,
      asChild: s,
      className: A(_w({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (d.onSelect = t), n !== void 0 && (d.disabled = n), s ? /* @__PURE__ */ c.jsx(ji, { ...d, children: e }) : /* @__PURE__ */ c.jsxs(ji, { ...d, children: [
      De(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Ha.displayName = "DropdownItem";
const Tw = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Lx,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
Tw.displayName = "DropdownSeparator";
const Iw = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Fx,
  {
    ref: r,
    className: A(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
Iw.displayName = "DropdownLabel";
const zs = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Ix, { children: /* @__PURE__ */ c.jsx(
  $x,
  {
    ref: o,
    className: A(Ow({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
zs.displayName = "DropdownContent";
const Hs = ({
  children: e,
  open: t,
  onOpenChange: n,
  modal: r = !0,
  ...o
}) => {
  const a = {
    modal: r,
    ...o
  };
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(_x, { ...a, children: e });
};
Hs.displayName = "Dropdown";
const Ys = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  Tx,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Ys.displayName = "DropdownTrigger";
const XN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(Hs, { children: [
  /* @__PURE__ */ c.jsx(
    Ys,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx($p, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ c.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ c.jsx(
          lo,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ c.jsxs(zs, { align: "end", className: "py-0 min-w-auto", children: [
    /* @__PURE__ */ c.jsxs(
      "p",
      {
        className: `h-6.75 px-3 py-0 text-sm font-medium leading-6.75
              text-body-success border-b-surface-default border-b text-center`,
        children: [
          /* @__PURE__ */ c.jsx(
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
] }) }), Nf = S.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    ii,
    {
      ref: s,
      type: "single",
      collapsible: t,
      ...n !== void 0 && { value: n },
      ...r !== void 0 && {
        defaultValue: r
      },
      ...o !== void 0 && {
        onValueChange: o
      },
      ...a
    }
  ) : /* @__PURE__ */ c.jsx(
    ii,
    {
      ref: s,
      type: "multiple",
      ...n !== void 0 && { value: n },
      ...r !== void 0 && {
        defaultValue: r
      },
      ...o !== void 0 && {
        onValueChange: o
      },
      ...a
    }
  )
);
Nf.displayName = "Accordion";
const Mf = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    Eh,
    {
      ref: n,
      className: A(
        `bg-surface-primary rounded-sm mt-2 first:mt-0 overflow-hidden
        data-[disabled]:opacity-30`,
        e
      ),
      ...t
    }
  )
);
Mf.displayName = "AccordionItem";
const Ef = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(Ph, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Rh,
  {
    ref: r,
    className: A(
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
      /* @__PURE__ */ c.jsx(
        lo,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
Ef.displayName = "AccordionTrigger";
const Pf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Ah,
  {
    ref: r,
    className: A(
      "text-body-secondary px-md pt-xs pb-md overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
Pf.displayName = "AccordionContent";
const ZN = Object.assign(Nf, {
  Item: Mf,
  Trigger: Ef,
  Content: Pf
}), Yi = oe(
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
), $w = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Wp : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      kn,
      {
        className: A(Yi({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: A(Yi({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && De(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
$w.displayName = "Badge";
const Fw = oe("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), $r = oe(
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
), Lw = oe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Ww = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = mc,
    maxItems: r,
    className: o,
    "aria-label": a = "breadcrumb",
    ...s
  }, i) => {
    let l = e;
    if (r && e.length > r) {
      const d = e[0], u = e.slice(-(r - 1));
      l = [d, { label: "…" }, ...u];
    }
    return /* @__PURE__ */ c.jsx(
      "nav",
      {
        ref: i,
        "aria-label": a,
        className: A(Fw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: l.map((d, u) => {
          const f = u === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "min-w-0 flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A($r({ isActive: !0 })),
                children: d.label
              }
            ) : d.asChild ? /* @__PURE__ */ c.jsx(
              kn,
              {
                onClick: d.onClick,
                className: A(
                  $r({ isActive: f })
                ),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: A(
                  $r({ isActive: f })
                ),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A($r({ isActive: !0 })),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) }),
            !f && /* @__PURE__ */ c.jsx(
              "li",
              {
                className: "flex items-center",
                "aria-hidden": "true",
                role: "presentation",
                children: /* @__PURE__ */ c.jsx(
                  n,
                  {
                    className: A(Lw({ size: t }))
                  }
                )
              }
            )
          ] }, `${d.label}-${u}`);
        }) })
      }
    );
  }
);
Ww.displayName = "Breadcrumbs";
const Vw = oe(
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
), Rf = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    nb,
    {
      ref: s,
      className: A(Vw({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        rb,
        {
          className: A(
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
Rf.displayName = "ProgressIndicator.Linear";
const Bw = oe("flex items-center", {
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
}), zw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, so = {
  sm: 12,
  md: 10
}, Gi = {
  sm: (50 - so.sm / 2).toString(),
  md: (50 - so.md / 2).toString()
}, Af = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: A(Bw({ size: t, layout: e }), r),
      ...o,
      children: [
        /* @__PURE__ */ c.jsxs(
          "svg",
          {
            width: "100",
            height: "100",
            viewBox: "0 0 100 100",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: A(zw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Gi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: so[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Gi[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: so[t],
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
Af.displayName = "ProgressIndicator.Circular";
const Bo = {
  Linear: Rf,
  Circular: Af
}, pa = oe(
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
), Fr = oe("", {
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
}), Pe = S.forwardRef(
  ({
    intent: e,
    size: t,
    className: n,
    icon: r,
    trailingIcon: o,
    asChild: a = !1,
    loading: s = !1,
    danger: i = !1,
    children: l,
    ...d
  }, u) => {
    const f = a ? kn : "button", p = !!((r || o) && !l && !(r && o)), h = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          pa({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            De(r, {
              className: A(
                Fr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            De(o, {
              className: A(
                Fr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Bo.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          pa({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          De(r, {
            className: A(
              Fr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          De(o, {
            className: A(
              Fr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      f,
      {
        ref: u,
        className: A(
          pa({ intent: e, size: t, textOnly: h, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
Pe.displayName = "Button";
function Hw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ha = {}, Gn = {};
function Zt(e, t) {
  try {
    const r = (ha[e] || (ha[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Gn ? Gn[r] : Ki(r, r.split(":"));
  } catch {
    if (e in Gn) return Gn[e];
    const n = e == null ? void 0 : e.match(Yw);
    return n ? Ki(e, n.slice(1)) : NaN;
  }
}
const Yw = /([+-]\d\d):?(\d\d)?/;
function Ki(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Gn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class ht extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Zt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Df(this), Ya(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new ht(...n, t) : new ht(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new ht(+this, t);
  }
  getTimezoneOffset() {
    const t = -Zt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ya(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ht(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ui = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ui.test(e)) return;
  const t = e.replace(Ui, "$1UTC");
  ht.prototype[t] && (e.startsWith("get") ? ht.prototype[e] = function() {
    return this.internal[t]();
  } : (ht.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Gw(this), +this;
  }, ht.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ya(this), +this;
  }));
});
function Ya(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Zt(e.timeZone, e) * 60));
}
function Gw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Df(e);
}
function Df(e) {
  const t = Zt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const u = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, f = Math.round(-(Zt(e.timeZone, e) * 60)) % 60;
  (f || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + u));
  const p = Zt(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, g = h !== n, w = v - l;
  if (g && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = Zt(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), M = h - y;
    M && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + M), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + M));
  }
}
class Le extends ht {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Le(...n, t) : new Le(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Hw(this.timeZone, this)})`;
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
    return new Le(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Le(+new Date(t), this.timeZone);
  }
  //#endregion
}
const jf = 6048e5, Kw = 864e5, qi = Symbol.for("constructDateFrom");
function Re(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && qi in e ? e[qi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ye(e, t) {
  return Re(t || e, e);
}
function Of(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Re(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function _f(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Re(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Re(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Uw = {};
function mr() {
  return Uw;
}
function Sn(e, t) {
  var i, l, d, u;
  const n = mr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Jn(e, t) {
  return Sn(e, { ...t, weekStartsOn: 1 });
}
function Tf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Re(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Jn(o), s = Re(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Jn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Xi(e) {
  const t = ye(e), n = new Date(
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
function jn(e, ...t) {
  const n = Re.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function er(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function If(e, t, n) {
  const [r, o] = jn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = er(r), s = er(o), i = +a - Xi(a), l = +s - Xi(s);
  return Math.round((i - l) / Kw);
}
function qw(e, t) {
  const n = Tf(e, t), r = Re(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Jn(r);
}
function Xw(e, t, n) {
  return Of(e, t * 7, n);
}
function Zw(e, t, n) {
  return _f(e, t * 12, n);
}
function Qw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Re.bind(null, o));
    const a = ye(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Re(r, n || NaN);
}
function Jw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Re.bind(null, o));
    const a = ye(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Re(r, n || NaN);
}
function e1(e, t, n) {
  const [r, o] = jn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +er(r) == +er(o);
}
function $f(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function t1(e) {
  return !(!$f(e) && typeof e != "number" || isNaN(+ye(e)));
}
function n1(e, t, n) {
  const [r, o] = jn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function r1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function o1(e, t) {
  const [n, r] = jn(e, t.start, t.end);
  return { start: n, end: r };
}
function a1(e, t) {
  const { start: n, end: r } = o1(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Re(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function s1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function i1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Ff(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Lf(e, t) {
  var i, l, d, u;
  const n = mr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function c1(e, t) {
  return Lf(e, { ...t, weekStartsOn: 1 });
}
const l1 = {
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
}, d1 = (e, t, n) => {
  let r;
  const o = l1[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function bn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const u1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, f1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, m1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, p1 = {
  date: bn({
    formats: u1,
    defaultWidth: "full"
  }),
  time: bn({
    formats: f1,
    defaultWidth: "full"
  }),
  dateTime: bn({
    formats: m1,
    defaultWidth: "full"
  })
}, h1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, v1 = (e, t, n, r) => h1[e];
function ft(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const g1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, x1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, b1 = {
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
}, y1 = {
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
}, w1 = {
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
}, C1 = {
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
}, S1 = (e, t) => {
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
}, k1 = {
  ordinalNumber: S1,
  era: ft({
    values: g1,
    defaultWidth: "wide"
  }),
  quarter: ft({
    values: x1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ft({
    values: b1,
    defaultWidth: "wide"
  }),
  day: ft({
    values: y1,
    defaultWidth: "wide"
  }),
  dayPeriod: ft({
    values: w1,
    defaultWidth: "wide",
    formattingValues: C1,
    defaultFormattingWidth: "wide"
  })
};
function mt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? M1(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      N1(i, (f) => f.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const u = t.slice(s.length);
    return { value: d, rest: u };
  };
}
function N1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function M1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Wf(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const E1 = /^(\d+)(th|st|nd|rd)?/i, P1 = /\d+/i, R1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, A1 = {
  any: [/^b/i, /^(a|c)/i]
}, D1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, j1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, O1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, _1 = {
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
}, T1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, I1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, F1 = {
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
}, L1 = {
  ordinalNumber: Wf({
    matchPattern: E1,
    parsePattern: P1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: mt({
    matchPatterns: R1,
    defaultMatchWidth: "wide",
    parsePatterns: A1,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: D1,
    defaultMatchWidth: "wide",
    parsePatterns: j1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: O1,
    defaultMatchWidth: "wide",
    parsePatterns: _1,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: T1,
    defaultMatchWidth: "wide",
    parsePatterns: I1,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: $1,
    defaultMatchWidth: "any",
    parsePatterns: F1,
    defaultParseWidth: "any"
  })
}, zo = {
  code: "en-US",
  formatDistance: d1,
  formatLong: p1,
  formatRelative: v1,
  localize: k1,
  match: L1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function W1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return If(n, Ff(n)) + 1;
}
function Vf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = +Jn(n) - +qw(n);
  return Math.round(r / jf) + 1;
}
function Bf(e, t) {
  var u, f, p, h;
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = mr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Re((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Sn(s, t), l = Re((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = Sn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function V1(e, t) {
  var i, l, d, u;
  const n = mr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Bf(e, t), a = Re((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Sn(a, t);
}
function zf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = +Sn(n, t) - +V1(n, t);
  return Math.round(r / jf) + 1;
}
function be(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const It = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return be(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : be(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return be(e.getDate(), t.length);
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
    return be(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return be(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return be(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return be(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return be(o, t.length);
  }
}, pn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Zi = {
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
    return It.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Bf(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return be(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : be(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Tf(e);
    return be(n, t.length);
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
    return be(n, t.length);
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
        return be(r, 2);
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
        return be(r, 2);
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
        return It.M(e, t);
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
        return be(r + 1, 2);
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
    const o = zf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : be(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Vf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : be(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : It.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = W1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : be(r, t.length);
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return be(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return be(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
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
        return be(o, t.length);
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
    switch (r === 12 ? o = pn.noon : r === 0 ? o = pn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = pn.evening : r >= 12 ? o = pn.afternoon : r >= 4 ? o = pn.morning : o = pn.night, t) {
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
    return It.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : It.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : be(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : be(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : It.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : It.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return It.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Ji(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Xt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Xt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Ji(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Xt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Xt(r, ":");
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
        return "GMT" + Qi(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Xt(r, ":");
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
        return "GMT" + Qi(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Xt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return be(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return be(+e, t.length);
  }
};
function Qi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + be(a, 2);
}
function Ji(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + be(Math.abs(e) / 60, 2) : Xt(e, t);
}
function Xt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = be(Math.trunc(r / 60), 2), a = be(r % 60, 2);
  return n + o + t + a;
}
const ec = (e, t) => {
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
}, Hf = (e, t) => {
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
}, B1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ec(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ec(r, t)).replace("{{time}}", Hf(o, t));
}, z1 = {
  p: Hf,
  P: B1
}, H1 = /^D+$/, Y1 = /^Y+$/, G1 = ["D", "DD", "YY", "YYYY"];
function K1(e) {
  return H1.test(e);
}
function U1(e) {
  return Y1.test(e);
}
function q1(e, t, n) {
  const r = X1(e, t, n);
  if (console.warn(r), G1.includes(e)) throw new RangeError(r);
}
function X1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Z1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Q1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, J1 = /^'([^]*?)'?$/, e2 = /''/g, t2 = /[a-zA-Z]/;
function n2(e, t, n) {
  var u, f, p, h, x, v, g, w;
  const r = mr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? zo, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = ye(e, n == null ? void 0 : n.in);
  if (!t1(i))
    throw new RangeError("Invalid time value");
  let l = t.match(Q1).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const M = z1[y];
      return M(b, o.formatLong);
    }
    return b;
  }).join("").match(Z1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: r2(b) };
    if (Zi[y])
      return { isToken: !0, value: b };
    if (y.match(t2))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: b };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
  const d = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return l.map((b) => {
    if (!b.isToken) return b.value;
    const y = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && U1(y) || !(n != null && n.useAdditionalDayOfYearTokens) && K1(y)) && q1(y, t, String(e));
    const M = Zi[y[0]];
    return M(i, y, o.localize, d);
  }).join("");
}
function r2(e) {
  const t = e.match(J1);
  return t ? t[1].replace(e2, "'") : e;
}
function o2(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Re(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function a2(e, t) {
  return ye(e, t == null ? void 0 : t.in).getMonth();
}
function s2(e, t) {
  return ye(e, t == null ? void 0 : t.in).getFullYear();
}
function i2(e, t) {
  return +ye(e) > +ye(t);
}
function c2(e, t) {
  return +ye(e) < +ye(t);
}
function l2(e, t, n) {
  const [r, o] = jn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function d2(e, t, n) {
  const [r, o] = jn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function u2(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Re(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = o2(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function f2(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Re(e, NaN) : (r.setFullYear(t), r);
}
const tc = 5, m2 = 4;
function p2(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, tc * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? tc : m2;
}
function Yf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function h2(e, t) {
  const n = Yf(e, t), r = p2(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Xe {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Le.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Le(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : Of(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : _f(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Xw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Zw(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : If(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : n1(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : a1(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : h2(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : c1(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : r1(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Lf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : i1(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : n2(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Vf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : a2(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : s2(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : zf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : i2(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : c2(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : $f(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : e1(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : l2(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : d2(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Qw(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Jw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : u2(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : f2(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Yf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : er(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Jn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : s1(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Sn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Ff(r);
    }, this.options = { locale: zo, ...t }, this.overrides = n;
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
    return t && Xe.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Xe.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
  }
}
Xe.yearFirstLocales = /* @__PURE__ */ new Set([
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
const bt = new Xe();
class Gf {
  constructor(t, n, r = bt) {
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
class v2 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class g2 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function x2(e) {
  return S.createElement("button", { ...e });
}
function b2(e) {
  return S.createElement("span", { ...e });
}
function y2(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    S.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && S.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && S.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && S.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && S.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function w2(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function C2(e) {
  const { day: t, modifiers: n, ...r } = e, o = S.useRef(null);
  return S.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), S.createElement("button", { ref: o, ...r });
}
var re;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(re || (re = {}));
var ke;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ke || (ke = {}));
var rt;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(rt || (rt = {}));
var Ke;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ke || (Ke = {}));
function S2(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[re.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[re.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: u }) => S.createElement(r.Option, { key: l, value: l, disabled: u }, d))),
    S.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function k2(e) {
  return S.createElement("div", { ...e });
}
function N2(e) {
  return S.createElement("div", { ...e });
}
function M2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function E2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function P2(e) {
  return S.createElement("table", { ...e });
}
function R2(e) {
  return S.createElement("div", { ...e });
}
const Kf = co(void 0);
function pr() {
  const e = qr(Kf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function A2(e) {
  const { components: t } = pr();
  return S.createElement(t.Dropdown, { ...e });
}
function D2(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = pr(), u = ve((p) => {
    o && (n == null || n(p));
  }, [o, n]), f = ve((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return S.createElement(
    "nav",
    { ...a },
    S.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[re.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[re.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: u },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[re.Chevron] })
    )
  );
}
function j2(e) {
  const { components: t } = pr();
  return S.createElement(t.Button, { ...e });
}
function O2(e) {
  return S.createElement("option", { ...e });
}
function _2(e) {
  const { components: t } = pr();
  return S.createElement(t.Button, { ...e });
}
function T2(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function I2(e) {
  return S.createElement("select", { ...e });
}
function $2(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function F2(e) {
  return S.createElement("th", { ...e });
}
function L2(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function W2(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function V2(e) {
  return S.createElement("th", { ...e });
}
function B2(e) {
  return S.createElement("tbody", { ...e });
}
function z2(e) {
  const { components: t } = pr();
  return S.createElement(t.Dropdown, { ...e });
}
const H2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: x2,
  CaptionLabel: b2,
  Chevron: y2,
  Day: w2,
  DayButton: C2,
  Dropdown: S2,
  DropdownNav: k2,
  Footer: N2,
  Month: M2,
  MonthCaption: E2,
  MonthGrid: P2,
  Months: R2,
  MonthsDropdown: A2,
  Nav: D2,
  NextMonthButton: j2,
  Option: O2,
  PreviousMonthButton: _2,
  Root: T2,
  Select: I2,
  Week: $2,
  WeekNumber: W2,
  WeekNumberHeader: V2,
  Weekday: F2,
  Weekdays: L2,
  Weeks: B2,
  YearsDropdown: z2
}, Symbol.toStringTag, { value: "Module" }));
function Et(e, t, n = !1, r = bt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Uf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Gs(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function qf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Xf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Zf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Qf(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Pt(e, t, n = bt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Qf(i, n))
      return i.includes(e);
    if (Gs(i))
      return Et(i, e, !1, n);
    if (Zf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Uf(i)) {
      const l = a(i.before, e), d = a(i.after, e), u = l > 0, f = d < 0;
      return s(i.before, i.after) ? f && u : u || f;
    }
    return qf(i) ? a(e, i.after) > 0 : Xf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Y2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: u } = t, { isSameDay: f, isSameMonth: p, startOfMonth: h, isBefore: x, endOfMonth: v, isAfter: g } = o, w = n && h(n), b = r && v(r), y = {
    [ke.focused]: [],
    [ke.outside]: [],
    [ke.disabled]: [],
    [ke.hidden]: [],
    [ke.today]: []
  }, M = {};
  for (const C of e) {
    const { date: P, displayMonth: N } = C, k = !!(N && !p(P, N)), O = !!(w && x(P, w)), T = !!(b && g(P, b)), F = !!(a && Pt(P, a, o)), W = !!(s && Pt(P, s, o)) || O || T || // Broadcast calendar will show outside days as default
    !d && !l && k || d && l === !1 && k, Y = f(P, u ?? o.today());
    k && y.outside.push(C), F && y.disabled.push(C), W && y.hidden.push(C), Y && y.today.push(C), i && Object.keys(i).forEach(($) => {
      const H = i == null ? void 0 : i[$];
      H && Pt(P, H, o) && (M[$] ? M[$].push(C) : M[$] = [C]);
    });
  }
  return (C) => {
    const P = {
      [ke.focused]: !1,
      [ke.disabled]: !1,
      [ke.hidden]: !1,
      [ke.outside]: !1,
      [ke.today]: !1
    }, N = {};
    for (const k in y) {
      const O = y[k];
      P[k] = O.some((T) => T === C);
    }
    for (const k in M)
      N[k] = M[k].some((O) => O === C);
    return {
      ...P,
      // custom modifiers should override all the previous ones
      ...N
    };
  };
}
function G2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ke[a]] ? o.push(t[ke[a]]) : t[rt[a]] && o.push(t[rt[a]]), o), [t[re.Day]]);
}
function K2(e) {
  return {
    ...H2,
    ...e
  };
}
function U2(e) {
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
function Jf() {
  const e = {};
  for (const t in re)
    e[re[t]] = `rdp-${re[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  for (const t in rt)
    e[rt[t]] = `rdp-${rt[t]}`;
  for (const t in Ke)
    e[Ke[t]] = `rdp-${Ke[t]}`;
  return e;
}
function em(e, t, n) {
  return (n ?? new Xe(t)).formatMonthYear(e);
}
const q2 = em;
function X2(e, t, n) {
  return (n ?? new Xe(t)).format(e, "d");
}
function Z2(e, t = bt) {
  return t.format(e, "LLLL");
}
function Q2(e, t, n) {
  return (n ?? new Xe(t)).format(e, "cccccc");
}
function J2(e, t = bt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function eC() {
  return "";
}
function tm(e, t = bt) {
  return t.format(e, "yyyy");
}
const tC = tm, nC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: em,
  formatDay: X2,
  formatMonthCaption: q2,
  formatMonthDropdown: Z2,
  formatWeekNumber: J2,
  formatWeekNumberHeader: eC,
  formatWeekdayName: Q2,
  formatYearCaption: tC,
  formatYearDropdown: tm
}, Symbol.toStringTag, { value: "Module" }));
function rC(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...nC,
    ...e
  };
}
function oC(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), x = d(p), v = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: h, disabled: v };
  });
}
function aC(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function sC(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function iC(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, addYears: i, getYear: l, isBefore: d, isSameYear: u } = r, f = a(e), p = s(t), h = [];
  let x = f;
  for (; d(x, p) || u(x, p); )
    h.push(x), x = i(x, 1);
  return o && h.reverse(), h.map((v) => {
    const g = n.formatYearDropdown(v, r);
    return {
      value: l(v),
      label: g,
      disabled: !1
    };
  });
}
function nm(e, t, n, r) {
  let o = (r ?? new Xe(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const cC = nm;
function rm(e, t, n) {
  return (n ?? new Xe(t)).formatMonthYear(e);
}
const lC = rm;
function dC(e, t, n, r) {
  let o = (r ?? new Xe(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function uC(e) {
  return "Choose the Month";
}
function fC() {
  return "";
}
function mC(e) {
  return "Go to the Next Month";
}
function pC(e) {
  return "Go to the Previous Month";
}
function hC(e, t, n) {
  return (n ?? new Xe(t)).format(e, "cccc");
}
function vC(e, t) {
  return `Week ${e}`;
}
function gC(e) {
  return "Week Number";
}
function xC(e) {
  return "Choose the Year";
}
const bC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: lC,
  labelDay: cC,
  labelDayButton: nm,
  labelGrid: rm,
  labelGridcell: dC,
  labelMonthDropdown: uC,
  labelNav: fC,
  labelNext: mC,
  labelPrevious: pC,
  labelWeekNumber: vC,
  labelWeekNumberHeader: gC,
  labelWeekday: hC,
  labelYearDropdown: xC
}, Symbol.toStringTag, { value: "Module" })), hr = (e) => e instanceof HTMLElement ? e : null, va = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], yC = (e) => hr(e.querySelector("[data-animated-month]")), ga = (e) => hr(e.querySelector("[data-animated-caption]")), xa = (e) => hr(e.querySelector("[data-animated-weeks]")), wC = (e) => hr(e.querySelector("[data-animated-nav]")), CC = (e) => hr(e.querySelector("[data-animated-weekdays]"));
function SC(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Rt(null), i = Rt(r), l = Rt(!1);
  uc(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const u = a.isSameMonth(r[0].date, d[0].date), f = a.isAfter(r[0].date, d[0].date), p = f ? n[Ke.caption_after_enter] : n[Ke.caption_before_enter], h = f ? n[Ke.weeks_after_enter] : n[Ke.weeks_before_enter], x = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (va(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const M = yC(y);
      M && y.contains(M) && y.removeChild(M);
      const C = ga(y);
      C && C.classList.remove(p);
      const P = xa(y);
      P && P.classList.remove(h);
    }), s.current = v) : s.current = null, l.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? va(x) : [], w = va(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = wC(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, M) => {
        const C = g[M];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const P = ga(y);
        P && P.classList.add(p);
        const N = xa(y);
        N && N.classList.add(h);
        const k = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), P && P.classList.remove(p), N && N.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const O = CC(C);
        O && (O.style.opacity = "0");
        const T = ga(C);
        T && (T.classList.add(f ? n[Ke.caption_before_exit] : n[Ke.caption_after_exit]), T.addEventListener("animationend", k));
        const F = xa(C);
        F && F.classList.add(f ? n[Ke.weeks_before_exit] : n[Ke.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function kC(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: x, endOfWeek: v, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, M = l ? w(o, r) : s ? b(o) : y(o), C = l ? p(a) : s ? h(x(a)) : v(x(a)), P = u(C, M), N = f(a, o) + 1, k = [];
  for (let F = 0; F <= P; F++) {
    const W = d(M, F);
    if (t && g(W, t))
      break;
    k.push(W);
  }
  const T = (l ? 35 : 42) * N;
  if (i && k.length < T) {
    const F = T - k.length;
    for (let W = 0; W < F; W++) {
      const Y = d(k[k.length - 1], 1);
      k.push(Y);
    }
  }
  return k;
}
function NC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function MC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function nc(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: u, startOfMonth: f } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = u(n, p);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function EC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: h } = r, x = e.reduce((v, g) => {
    const w = n.broadcastCalendar ? f(g, r) : n.ISOWeek ? p(g) : h(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), y = t.filter((N) => N >= w && N <= b), M = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < M) {
      const N = t.filter((k) => {
        const O = M - y.length;
        return k > b && k <= o(b, O);
      });
      y.push(...N);
    }
    const C = y.reduce((N, k) => {
      const O = n.ISOWeek ? d(k) : u(k), T = N.find((W) => W.weekNumber === O), F = new Gf(k, g, r);
      return T ? T.days.push(F) : N.push(new g2(O, [F])), N;
    }, []), P = new v2(g, C);
    return v.push(P), v;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function PC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: u, today: f } = t, { fromYear: p, toYear: h, fromMonth: x, toMonth: v } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = u(h, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = u(p, 0, 1) : !n && g && (n = o(l(e.today ?? f(), -100))), r ? r = i(r) : h ? r = u(h, 11, 31) : !r && g && (r = d(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function RC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, u = s(e);
  if (!t)
    return i(u, d);
  if (!(l(t, e) < a))
    return i(u, d);
}
function AC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -d);
  if (!(l(u, t) <= 0))
    return i(u, -d);
}
function DC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Ho(e, t) {
  const [n, r] = We(e);
  return [t === void 0 ? n : t, r];
}
function jC(e, t) {
  const [n, r] = PC(e, t), { startOfMonth: o, endOfMonth: a } = t, s = nc(e, n, r, t), [i, l] = Ho(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Qt(() => {
    const P = nc(e, n, r, t);
    l(P);
  }, [e.timeZone]);
  const d = MC(i, r, e, t), u = kC(d, e.endMonth ? a(e.endMonth) : void 0, e, t), f = EC(d, u, e, t), p = DC(f), h = NC(f), x = AC(i, n, e, t), v = RC(i, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (P) => p.some((N) => N.days.some((k) => k.isEqualTo(P))), y = (P) => {
    if (g)
      return;
    let N = o(P);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), l(N), w == null || w(N);
  };
  return {
    months: f,
    weeks: p,
    days: h,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: v,
    goToMonth: y,
    goToDay: (P) => {
      b(P) || y(P.date);
    }
  };
}
var dt;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(dt || (dt = {}));
function rc(e) {
  return !e[ke.disabled] && !e[ke.hidden] && !e[ke.outside];
}
function OC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    rc(i) && (i[ke.focused] && a < dt.FocusedModifier ? (o = s, a = dt.FocusedModifier) : r != null && r.isEqualTo(s) && a < dt.LastFocused ? (o = s, a = dt.LastFocused) : n(s.date) && a < dt.Selected ? (o = s, a = dt.Selected) : i[ke.today] && a < dt.Today && (o = s, a = dt.Today));
  }
  return o || (o = e.find((s) => rc(t(s)))), o;
}
function _C(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: u, addWeeks: f, addYears: p, endOfBroadcastWeek: h, endOfISOWeek: x, endOfWeek: v, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: M } = s;
  let P = {
    day: d,
    week: f,
    month: u,
    year: p,
    startOfWeek: (N) => l ? b(N, s) : i ? y(N) : M(N),
    endOfWeek: (N) => l ? h(N) : i ? x(N) : v(N)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? P = g([r, P]) : t === "after" && o && (P = w([o, P])), P;
}
function om(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = _C(e, t, n.date, r, o, a, s), d = !!(a.disabled && Pt(l, a.disabled, s)), u = !!(a.hidden && Pt(l, a.hidden, s)), f = l, p = new Gf(l, f, s);
  return !d && !u ? p : om(e, t, p, r, o, a, s, i + 1);
}
function TC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = We(), l = OC(t.days, n, r || (() => !1), s), [d, u] = We(a ? l : void 0);
  return {
    isFocusTarget: (v) => !!(l != null && l.isEqualTo(v)),
    setFocused: u,
    focused: d,
    blur: () => {
      i(d), u(void 0);
    },
    moveFocus: (v, g) => {
      if (!d)
        return;
      const w = om(v, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), u(w));
    }
  };
}
function IC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Ho(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (h) => (i == null ? void 0 : i.some((x) => l(x, h))) ?? !1, { min: u, max: f } = e;
  return {
    selected: i,
    select: (h, x, v) => {
      let g = [...i ?? []];
      if (d(h)) {
        if ((i == null ? void 0 : i.length) === u || r && (i == null ? void 0 : i.length) === 1)
          return;
        g = i == null ? void 0 : i.filter((w) => !l(w, h));
      } else
        (i == null ? void 0 : i.length) === f ? g = [h] : g = [...g, h];
      return o || s(g), o == null || o(g, h, x, v), g;
    },
    isSelected: d
  };
}
function $C(e, t, n = 0, r = 0, o = !1, a = bt) {
  const { from: s, to: i } = t || {}, { isSameDay: l, isAfter: d, isBefore: u } = a;
  let f;
  if (!s && !i)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    l(s, e) ? n === 0 ? f = { from: s, to: e } : o ? f = { from: s, to: void 0 } : f = void 0 : u(e, s) ? f = { from: e, to: s } : f = { from: s, to: e };
  else if (s && i)
    if (l(s, e) && l(i, e))
      o ? f = { from: s, to: i } : f = void 0;
    else if (l(s, e))
      f = { from: s, to: n > 0 ? void 0 : e };
    else if (l(i, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, s))
      f = { from: e, to: i };
    else if (d(e, s))
      f = { from: s, to: e };
    else if (d(e, i))
      f = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (f != null && f.from && (f != null && f.to)) {
    const p = a.differenceInCalendarDays(f.to, f.from);
    r > 0 && p > r ? f = { from: e, to: void 0 } : n > 1 && p < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function FC(e, t, n = bt) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), s = Math.min(a, 6);
  for (let i = 0; i <= s; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function oc(e, t, n = bt) {
  return Et(e, t.from, !1, n) || Et(e, t.to, !1, n) || Et(t, e.from, !1, n) || Et(t, e.to, !1, n);
}
function LC(e, t, n = bt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Et(e, i, !1, n) : Qf(i, n) ? i.some((l) => Et(e, l, !1, n)) : Gs(i) ? i.from && i.to ? oc(e, { from: i.from, to: i.to }, n) : !1 : Zf(i) ? FC(e, i.dayOfWeek, n) : Uf(i) ? n.isAfter(i.before, i.after) ? oc(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Pt(e.from, i, n) || Pt(e.to, i, n) : qf(i) || Xf(i) ? Pt(e.from, i, n) || Pt(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= l; d++) {
      if (s.some((u) => u(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function WC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = Ho(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, h, x) => {
      const { min: v, max: g } = e, w = p ? $C(p, d, v, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && LC({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), s || l(w), s == null || s(w, p, h, x), w;
    },
    isSelected: (p) => d && Et(d, p, !1, t)
  };
}
function VC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Ho(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (f, p, h) => {
      let x = f;
      return !r && i && i && l(f, i) && (x = void 0), o || s(x), o == null || o(x, f, p, h), x;
    },
    isSelected: (f) => i ? l(i, f) : !1
  };
}
function BC(e, t) {
  const n = VC(e, t), r = IC(e, t), o = WC(e, t);
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
function zC(e) {
  var Tn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Le(t.today, t.timeZone)), t.month && (t.month = new Le(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Le(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Le(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Le(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Le(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Tn = t.selected) == null ? void 0 : Tn.map((ue) => new Le(ue, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Le(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Le(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Vr(() => {
    const ue = { ...zo, ...t.locale };
    return {
      dateLib: new Xe({
        locale: ue,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: K2(t.components),
      formatters: rC(t.formatters),
      labels: { ...bC, ...t.labels },
      locale: ue,
      classNames: { ...Jf(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: u, numberOfMonths: f = 1, onDayBlur: p, onDayClick: h, onDayFocus: x, onDayKeyDown: v, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: M, styles: C } = t, { formatCaption: P, formatDay: N, formatMonthDropdown: k, formatWeekNumber: O, formatWeekNumberHeader: T, formatWeekdayName: F, formatYearDropdown: W } = r, Y = jC(t, a), { days: $, months: H, navStart: V, navEnd: U, previousMonth: j, nextMonth: _, goToMonth: te } = Y, R = Y2($, t, V, U, a), { isSelected: E, select: I, selected: L } = BC(t, a) ?? {}, { blur: G, focused: K, isFocusTarget: D, moveFocus: Z, setFocused: ee } = TC(t, Y, R, E ?? (() => !1), a), { labelDayButton: ae, labelGridcell: de, labelGrid: pe, labelMonthDropdown: Me, labelNav: Ie, labelPrevious: ct, labelNext: yt, labelWeekday: wt, labelWeekNumber: et, labelWeekNumberHeader: Ct, labelYearDropdown: ze } = o, St = Vr(() => sC(a, t.ISOWeek), [a, t.ISOWeek]), Ge = d !== void 0 || h !== void 0, Kt = ve(() => {
    j && (te(j), y == null || y(j));
  }, [j, te, y]), kt = ve(() => {
    _ && (te(_), b == null || b(_));
  }, [te, _, b]), me = ve((ue, we) => (se) => {
    se.preventDefault(), se.stopPropagation(), ee(ue), I == null || I(ue.date, we, se), h == null || h(ue.date, we, se);
  }, [I, h, ee]), On = ve((ue, we) => (se) => {
    ee(ue), x == null || x(ue.date, we, se);
  }, [x, ee]), Uo = ve((ue, we) => (se) => {
    G(), p == null || p(ue.date, we, se);
  }, [G, p]), xr = ve((ue, we) => (se) => {
    const ge = {
      ArrowLeft: [
        se.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        se.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [se.shiftKey ? "year" : "week", "after"],
      ArrowUp: [se.shiftKey ? "year" : "week", "before"],
      PageUp: [se.shiftKey ? "year" : "month", "before"],
      PageDown: [se.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ge[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [$e, ie] = ge[se.key];
      Z($e, ie);
    }
    v == null || v(ue.date, we, se);
  }, [Z, v, t.dir]), qo = ve((ue, we) => (se) => {
    g == null || g(ue.date, we, se);
  }, [g]), br = ve((ue, we) => (se) => {
    w == null || w(ue.date, we, se);
  }, [w]), _n = ve((ue) => (we) => {
    const se = Number(we.target.value), ge = a.setMonth(a.startOfMonth(ue), se);
    te(ge);
  }, [a, te]), yr = ve((ue) => (we) => {
    const se = Number(we.target.value), ge = a.setYear(a.startOfMonth(ue), se);
    te(ge);
  }, [a, te]), { className: wr, style: lt } = Vr(() => ({
    className: [i[re.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[re.Root], ...t.style }
  }), [i, t.className, t.style, C]), Ze = U2(t), _t = Rt(null);
  SC(_t, !!t.animate, {
    classNames: i,
    months: H,
    focused: K,
    dateLib: a
  });
  const Cr = {
    dayPickerProps: t,
    selected: L,
    select: I,
    isSelected: E,
    months: H,
    nextMonth: _,
    previousMonth: j,
    goToMonth: te,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return S.createElement(
    Kf.Provider,
    { value: Cr },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? _t : void 0, className: wr, style: lt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ze },
      S.createElement(
        n.Months,
        { className: i[re.Months], style: C == null ? void 0 : C[re.Months] },
        !t.hideNavigation && !u && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Ie(), onPreviousClick: Kt, onNextClick: kt, previousMonth: j, nextMonth: _ }),
        H.map((ue, we) => S.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[re.Month],
            style: C == null ? void 0 : C[re.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: we,
            displayIndex: we,
            calendarMonth: ue
          },
          u === "around" && !t.hideNavigation && we === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[re.PreviousMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": ct(j), onClick: Kt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[re.MonthCaption], style: C == null ? void 0 : C[re.MonthCaption], calendarMonth: ue, displayIndex: we }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[re.Dropdowns], style: C == null ? void 0 : C[re.Dropdowns] },
            (() => {
              const se = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[re.MonthsDropdown], "aria-label": Me(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: _n(ue.date), options: oC(ue.date, V, U, r, a), style: C == null ? void 0 : C[re.Dropdown], value: a.getMonth(ue.date) }) : S.createElement("span", { key: "month" }, k(ue.date, a)), ge = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[re.YearsDropdown], "aria-label": ze(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: yr(ue.date), options: iC(V, U, r, a, !!t.reverseYears), style: C == null ? void 0 : C[re.Dropdown], value: a.getYear(ue.date) }) : S.createElement("span", { key: "year" }, W(ue.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ge, se] : [se, ge];
            })(),
            S.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, P(ue.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            S.createElement(n.CaptionLabel, { className: i[re.CaptionLabel], role: "status", "aria-live": "polite" }, P(ue.date, a.options, a))
          )),
          u === "around" && !t.hideNavigation && we === f - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[re.NextMonthButton], tabIndex: _ ? void 0 : -1, "aria-disabled": _ ? void 0 : !0, "aria-label": yt(_), onClick: kt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: _ ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          we === f - 1 && u === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Ie(), onPreviousClick: Kt, onNextClick: kt, previousMonth: j, nextMonth: _ }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": pe(ue.date, a.options, a) || void 0, className: i[re.MonthGrid], style: C == null ? void 0 : C[re.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[re.Weekdays], style: C == null ? void 0 : C[re.Weekdays] },
              M && S.createElement(n.WeekNumberHeader, { "aria-label": Ct(a.options), className: i[re.WeekNumberHeader], style: C == null ? void 0 : C[re.WeekNumberHeader], scope: "col" }, T()),
              St.map((se) => S.createElement(n.Weekday, { "aria-label": wt(se, a.options, a), className: i[re.Weekday], key: String(se), style: C == null ? void 0 : C[re.Weekday], scope: "col" }, F(se, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[re.Weeks], style: C == null ? void 0 : C[re.Weeks] }, ue.weeks.map((se) => S.createElement(
              n.Week,
              { className: i[re.Week], key: se.weekNumber, style: C == null ? void 0 : C[re.Week], week: se },
              M && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: se, style: C == null ? void 0 : C[re.WeekNumber], "aria-label": et(se.weekNumber, {
                locale: s
              }), className: i[re.WeekNumber], scope: "row", role: "rowheader" }, O(se.weekNumber, a)),
              se.days.map((ge) => {
                const { date: $e } = ge, ie = R(ge);
                if (ie[ke.focused] = !ie.hidden && !!(K != null && K.isEqualTo(ge)), ie[rt.selected] = (E == null ? void 0 : E($e)) || ie.selected, Gs(L)) {
                  const { from: tt, to: _e } = L;
                  ie[rt.range_start] = !!(tt && _e && a.isSameDay($e, tt)), ie[rt.range_end] = !!(tt && _e && a.isSameDay($e, _e)), ie[rt.range_middle] = Et(L, $e, !0, a);
                }
                const Qe = aC(ie, C, t.modifiersStyles), In = G2(ie, i, t.modifiersClassNames), Xs = !Ge && !ie.hidden ? de($e, ie, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format($e, "yyyy-MM-dd")}_${a.format(ge.displayMonth, "yyyy-MM")}`, day: ge, modifiers: ie, className: In.join(" "), style: Qe, role: "gridcell", "aria-selected": ie.selected || void 0, "aria-label": Xs, "data-day": a.format($e, "yyyy-MM-dd"), "data-month": ge.outside ? a.format($e, "yyyy-MM") : void 0, "data-selected": ie.selected || void 0, "data-disabled": ie.disabled || void 0, "data-hidden": ie.hidden || void 0, "data-outside": ge.outside || void 0, "data-focused": ie.focused || void 0, "data-today": ie.today || void 0 }, !ie.hidden && Ge ? S.createElement(n.DayButton, { className: i[re.DayButton], style: C == null ? void 0 : C[re.DayButton], type: "button", day: ge, modifiers: ie, disabled: ie.disabled || void 0, tabIndex: D(ge) ? 0 : -1, "aria-label": ae($e, ie, a.options, a), onClick: me(ge, ie), onBlur: Uo(ge, ie), onFocus: On(ge, ie), onKeyDown: xr(ge, ie), onMouseEnter: qo(ge, ie), onMouseLeave: br(ge, ie) }, N($e, a.options, a)) : !ie.hidden && N(ge.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      S.createElement(n.Footer, { className: i[re.Footer], style: C == null ? void 0 : C[re.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const HC = {
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
}, YC = (e, t, n) => {
  n = n || {};
  let r;
  const o = HC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, GC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, KC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, UC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, qC = {
  date: bn({
    formats: GC,
    defaultWidth: "full"
  }),
  time: bn({
    formats: KC,
    defaultWidth: "full"
  }),
  dateTime: bn({
    formats: UC,
    defaultWidth: "full"
  })
}, XC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, ZC = (e, t, n, r) => XC[e], QC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, JC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, eS = {
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
}, tS = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, nS = {
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
}, rS = {
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
}, oS = (e, t) => {
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
}, aS = {
  ordinalNumber: oS,
  era: ft({
    values: QC,
    defaultWidth: "wide"
  }),
  quarter: ft({
    values: JC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: ft({
    values: eS,
    defaultWidth: "wide"
  }),
  day: ft({
    values: tS,
    defaultWidth: "wide"
  }),
  dayPeriod: ft({
    values: nS,
    defaultWidth: "wide",
    formattingValues: rS,
    defaultFormattingWidth: "wide"
  })
}, sS = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, iS = /\d+/i, cS = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, lS = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, dS = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, uS = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, fS = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, mS = {
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
}, pS = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, hS = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, vS = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, gS = {
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
}, xS = {
  ordinalNumber: Wf({
    matchPattern: sS,
    parsePattern: iS,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: mt({
    matchPatterns: cS,
    defaultMatchWidth: "wide",
    parsePatterns: lS,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: dS,
    defaultMatchWidth: "wide",
    parsePatterns: uS,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: mt({
    matchPatterns: fS,
    defaultMatchWidth: "wide",
    parsePatterns: mS,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: pS,
    defaultMatchWidth: "wide",
    parsePatterns: hS,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: vS,
    defaultMatchWidth: "any",
    parsePatterns: gS,
    defaultParseWidth: "any"
  })
}, bS = {
  code: "ja",
  formatDistance: YC,
  formatLong: qC,
  formatRelative: ZC,
  localize: aS,
  match: xS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, yS = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Lr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, am = S.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: a = !1,
    className: s,
    showOutsideDays: i = !0,
    fixedWeeks: l = !0,
    defaultMonth: d,
    inline: u = !1,
    locale: f = "ja",
    ...p
  }, h) => {
    const [x, v] = S.useState(
      () => Lr(n || null)
    ), g = e !== void 0, w = g ? Lr(e) : x, b = S.useMemo(
      () => Lr(r || null),
      [r]
    ), y = S.useMemo(
      () => Lr(o || null),
      [o]
    ), M = S.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = S.useMemo(() => {
      if (y) return y;
      const N = /* @__PURE__ */ new Date();
      return new Date(N.getFullYear() + 10, 11, 31);
    }, [y]), P = (N) => {
      const k = N || null;
      g || v(k), t == null || t(k);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: h,
        className: A(yS(u), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          zC,
          {
            animate: !1,
            mode: "single",
            selected: w || void 0,
            onSelect: P,
            locale: f === "ja" ? bS : zo,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (N) => `${N.getFullYear()}${f === "ja" ? "年" : ""}`
            },
            disabled: M ? [
              ...b ? [{ before: b }] : [],
              ...y ? [{ after: y }] : [],
              ...a ? [{ before: /* @__PURE__ */ new Date("3000-01-01") }] : []
            ] : [
              {
                before: /* @__PURE__ */ new Date("1900-01-01"),
                after: /* @__PURE__ */ new Date("1899-12-31")
              }
            ],
            ...b ? { startMonth: b } : {},
            endMonth: C,
            showOutsideDays: i,
            fixedWeeks: l,
            defaultMonth: d || w || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const N = Jf(), k = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${N.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
                button_previous: `${k} flex items-center justify-center`,
                button_next: `${k} flex items-center justify-center`,
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
am.displayName = "Calendar";
const ac = oe(
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
), wS = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Ga = S.forwardRef(
  ({
    className: e,
    intent: t = "primary",
    size: n = "inherit",
    asChild: r = !1,
    disabled: o,
    leadingIcon: a,
    trailingIcon: s,
    children: i,
    ...l
  }, d) => {
    const u = r ? kn : "a", p = wS[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      u,
      {
        ref: d,
        className: A(
          ac({ intent: t, size: n, disabled: o }),
          e
        ),
        ...l,
        children: i
      }
    ) : /* @__PURE__ */ c.jsxs(
      u,
      {
        ref: d,
        className: A(ac({ intent: t, size: n, disabled: o }), e),
        ...l,
        children: [
          a && /* @__PURE__ */ c.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: De(a, { size: p }) }),
          i,
          s && /* @__PURE__ */ c.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: De(s, { size: p }) })
        ]
      }
    );
  }
);
Ga.displayName = "TextLink";
const CS = oe(
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
), SS = oe("size-5 shrink-0", {
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
}), kS = oe("font-bold text-md", {
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
}), NS = oe(
  "text-body-primary font-normal leading-6 text-md"
), MS = oe("min-w-0 gap-xxxs flex flex-1 flex-col"), ES = {
  info: Br,
  success: gc,
  warning: Br,
  alert: Br,
  paid: Gp
}, PS = S.forwardRef(
  ({
    className: e,
    intent: t = "info",
    title: n,
    description: r,
    children: o,
    action: a,
    icon: s,
    ...i
  }, l) => {
    const d = s || ES[t];
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: l,
        className: A(CS({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ c.jsxs("div", { className: A(MS()), children: [
          n && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A(SS({ intent: t }), "top-0.5 relative"),
                  children: De(d, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: A(kS({ intent: t })), children: n })
            ] }),
            a && (a.href ? /* @__PURE__ */ c.jsx(
              Ga,
              {
                href: a.href,
                target: a.target,
                rel: a.rel,
                intent: "primary",
                size: "sm",
                children: a.label
              }
            ) : /* @__PURE__ */ c.jsx(
              Ga,
              {
                onClick: a.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: a.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ c.jsx("div", { className: A(NS()), children: o || r })
        ] })
      }
    );
  }
);
PS.displayName = "Callout";
const RS = oe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), AS = oe(
  `border-interactive-default text-body-primary
  focus-visible:ring-interactive-focused rounded-xs size-[1.0625rem]
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
), Gr = ({
  disabled: e,
  invalid: t,
  indeterminate: n,
  label: r,
  id: o,
  children: a,
  className: s,
  ...i
}) => {
  const l = o || `checkbox-${r}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(RS({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      fl,
      {
        id: l,
        className: A(AS({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          pl,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(Rp, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(fc, { style: { strokeWidth: 3 } })
          }
        )
      }
    ),
    (r || a) && /* @__PURE__ */ c.jsxs(
      "label",
      {
        htmlFor: l,
        className: `gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`,
        children: [
          r,
          a
        ]
      }
    )
  ] });
};
Gr.displayName = "Checkbox";
const DS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
DS.displayName = "CheckboxGroup";
const jS = oe(
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
), OS = S.forwardRef(
  ({
    selected: e = !1,
    disabled: t = !1,
    className: n,
    children: r,
    onClick: o,
    ...a
  }, s) => {
    const i = (l) => {
      t || o == null || o(l);
    };
    return /* @__PURE__ */ c.jsx(
      "button",
      {
        ref: s,
        type: "button",
        role: "option",
        "aria-selected": e,
        "aria-disabled": t,
        disabled: t,
        className: A(jS({ selected: e, disabled: t }), n),
        onClick: i,
        ...a,
        children: r
      }
    );
  }
);
OS.displayName = "ChoiceChip";
const _S = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { role: "listbox", className: A("gap-xs flex flex-wrap", t), children: e });
_S.displayName = "ChoiceChipGroup";
const TS = oe(
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
), QN = Uy, At = S.forwardRef(
  ({
    children: e,
    content: t,
    intent: n,
    side: r = "top",
    sideOffset: o = 4,
    align: a = "center",
    alignOffset: s,
    delayDuration: i = 700,
    disableHoverableContent: l,
    open: d,
    onOpenChange: u,
    className: f,
    ...p
  }, h) => t ? /* @__PURE__ */ c.jsxs(
    qy,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...u !== void 0 && { onOpenChange: u },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(Xy, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(Zy, { children: /* @__PURE__ */ c.jsx(
          Qy,
          {
            ref: h,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: A(TS({ intent: n }), f),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
At.displayName = "Tooltip";
const IS = oe("space-y-md w-full", {
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
}), sm = S.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: A(IS({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
sm.displayName = "DataSheet";
const $S = oe(
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
), im = S.forwardRef(
  ({
    className: e,
    variant: t,
    children: n,
    isDeleted: r = !1,
    ariaLabels: o,
    tooltipMessages: a,
    onEdit: s,
    onRemove: i,
    onRestore: l,
    ...d
  }, u) => {
    const f = s || i || l;
    return /* @__PURE__ */ c.jsxs(
      "header",
      {
        ref: u,
        className: A(
          $S({ variant: t }),
          f && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: A(r && "line-through opacity-60"), children: n }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
            s && /* @__PURE__ */ c.jsx(
              At,
              {
                content: r ? null : (a == null ? void 0 : a.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Pe,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: pc,
                    disabled: r,
                    onClick: s,
                    className: A(
                      "text-shape-primary [&_svg]:!size-5",
                      r && "cursor-not-allowed!"
                    )
                  }
                )
              }
            ),
            i && !r && /* @__PURE__ */ c.jsx(
              At,
              {
                content: (a == null ? void 0 : a.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Pe,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: vc,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            l && r && /* @__PURE__ */ c.jsx(
              At,
              {
                content: (a == null ? void 0 : a.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Pe,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: hc,
                    onClick: l,
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
im.displayName = "DataSheetHeader";
const cm = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "section",
    {
      ref: r,
      className: A("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
cm.displayName = "DataSheetSection";
const FS = oe("py-sm", {
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
}), LS = oe(
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
), WS = oe(
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
), lm = S.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => {
  const i = S.useId(), l = S.Children.map(o, (d) => {
    if (!S.isValidElement(d)) return d;
    const f = d.props["aria-labelledby"];
    return S.cloneElement(
      d,
      {
        "aria-labelledby": f ? `${f} ${i}` : i
      }
    );
  });
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: s,
      className: A(
        FS({ orientation: n, spacing: r }),
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            id: i,
            className: A(LS({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: A(WS({ orientation: n })), children: l })
      ]
    }
  );
});
lm.displayName = "DataSheetKeyValue";
const VS = {
  actionsColumnParts: 10
}, dm = S.createContext(
  VS
), BS = () => S.useContext(dm), um = S.createContext({}), fm = () => S.useContext(
  um
);
function zS({
  className: e,
  children: t,
  onEditRow: n,
  onRemoveRow: r,
  onRestoreRow: o,
  actionsColumnParts: a = 10,
  ...s
}, i) {
  const l = {
    actionsColumnParts: a,
    ...n && { onEditRow: n },
    ...r && { onRemoveRow: r },
    ...o && { onRestoreRow: o }
  };
  return /* @__PURE__ */ c.jsx(
    dm.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: A("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const mm = S.forwardRef(zS);
mm.displayName = "DataSheetTable";
const pm = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: A("", e), ...n, children: t }));
pm.displayName = "DataSheetTableHeader";
const hm = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: A("", e), ...n, children: t }));
hm.displayName = "DataSheetTableBody";
function HS({
  className: e,
  header: t,
  item: n,
  isDeleted: r = !1,
  ariaLabels: o,
  tooltipMessages: a,
  children: s,
  ...i
}, l) {
  const d = S.useMemo(() => {
    let f = 0;
    return S.Children.forEach(s, (p) => {
      S.isValidElement(p) && typeof p.props.parts == "number" && (f += p.props.parts);
    }), f > 0 ? f : void 0;
  }, [s]), u = {
    ...n !== void 0 && { item: n },
    ...d !== void 0 && { totalParts: d },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...a && { tooltipMessages: a }
  };
  return /* @__PURE__ */ c.jsx(
    um.Provider,
    {
      value: u,
      children: /* @__PURE__ */ c.jsx(
        "tr",
        {
          ref: l,
          className: A(
            t ? "h-[1.125rem]" : "border-surface-default border-t",
            r && "opacity-60",
            e
          ),
          ...i,
          children: s
        }
      )
    }
  );
}
const vm = S.forwardRef(HS);
vm.displayName = "DataSheetTableRow";
const io = S.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = fm(), u = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, f = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && f !== "" && f !== "-";
  return /* @__PURE__ */ c.jsx(
    i,
    {
      ref: s,
      className: A(
        "py-xs text-left align-top",
        "first:pl-0 last:pr-0 px-xs",
        t ? "text-body-secondary text-sm font-normal leading-[1.5]" : "text-body-primary font-normal leading-[1.5]",
        p && "line-through",
        e
      ),
      style: u,
      ...a,
      children: r
    }
  );
});
io.displayName = "DataSheetTableCell";
function YS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = BS(), {
    item: u,
    isDeleted: f,
    ariaLabels: p,
    tooltipMessages: h
  } = fm(), x = n ?? u;
  return t ? /* @__PURE__ */ c.jsx(
    io,
    {
      ref: a,
      header: !0,
      parts: d,
      className: e,
      ...o,
      children: r
    }
  ) : s || i || l ? /* @__PURE__ */ c.jsx(
    io,
    {
      ref: a,
      parts: d,
      className: A("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          At,
          {
            content: f ? null : (h == null ? void 0 : h.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Pe,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: pc,
                disabled: f,
                onClick: () => s(x),
                className: A(
                  "text-shape-primary [&_svg]:size-5!",
                  f && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && x && !f && /* @__PURE__ */ c.jsx(
          At,
          {
            content: (h == null ? void 0 : h.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Pe,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: vc,
                onClick: () => i(x),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        l && x && f && /* @__PURE__ */ c.jsx(
          At,
          {
            content: (h == null ? void 0 : h.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Pe,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: hc,
                onClick: () => l(x),
                className: "text-shape-primary [&_svg]:!size-5"
              }
            )
          }
        )
      ] })
    }
  ) : null;
}
const gm = S.forwardRef(
  YS
);
gm.displayName = "DataSheetTableActionsCell";
const xm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Pe, { ref: n, className: A("w-full", e), ...t }));
xm.displayName = "DataSheetAction";
const JN = Object.assign(sm, {
  Header: im,
  Section: cm,
  KeyValue: lm,
  Table: mm,
  TableHeader: pm,
  TableBody: hm,
  TableRow: vm,
  TableCell: io,
  TableActionsCell: gm,
  Action: xm
}), GS = (e, t) => {
  const [n, r] = We(e);
  return Qt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, Yo = () => {
  const e = Rt(!1), t = ve(() => {
    e.current = !0;
  }, []), n = ve(() => {
    e.current = !1;
  }, []), r = ve(
    (o) => {
      if (o)
        return (a) => {
          const s = a.nativeEvent;
          e.current || s.isComposing === !0 || o(a);
        };
    },
    []
  );
  return {
    compositionHandlers: { onCompositionStart: t, onCompositionEnd: n },
    guardKeyHandler: r,
    isComposingRef: e
  };
}, bm = oe(
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
), KS = oe(
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
), Kn = oe(
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
), Go = S.forwardRef(
  ({
    invalid: e,
    prefixIcon: t,
    trailingIcon: n,
    onTrailingIconClick: r,
    trailingIconSize: o = 14,
    prefixIconSize: a = 14,
    className: s,
    onKeyDown: i,
    onKeyUp: l,
    onCompositionStart: d,
    onCompositionEnd: u,
    ...f
  }, p) => {
    const h = !!t, x = !!n, v = !!r, g = f.type === "number", { compositionHandlers: w, guardKeyHandler: b } = Yo(), y = (C) => {
      w.onCompositionStart(C), d == null || d(C);
    }, M = (C) => {
      w.onCompositionEnd(C), u == null || u(C);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: A(bm({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Kn({ position: "prefix", interactive: !1 }),
          children: De(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: p,
          className: KS({ hasPrefix: h, hasTrailing: x, isNumeric: g }),
          ...f,
          onKeyDown: b(i),
          onKeyUp: b(l),
          onCompositionStart: y,
          onCompositionEnd: M
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: v ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Kn({
            position: "trailing",
            interactive: !0
          }),
          disabled: f.disabled,
          onClick: r,
          children: De(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Kn({
            position: "trailing",
            interactive: !1
          }),
          children: De(n, { size: o })
        }
      ) })
    ] });
  }
);
Go.displayName = "Input";
const US = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Wr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, qS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), XS = S.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: a = !1,
    error: s = !1,
    invalid: i = !1,
    icon: l,
    iconSize: d = 14,
    placeholder: u,
    formatDate: f = qS,
    className: p,
    contentClassName: h,
    defaultOpen: x = !1,
    open: v,
    onOpenChange: g,
    side: w = "bottom",
    locale: b = "ja",
    ...y
  }, M) => {
    const [C, P] = S.useState(
      () => Wr(n || null)
    ), [N, k] = S.useState(x), O = e !== void 0, T = O ? Wr(e) : C, F = v !== void 0 ? v : N, W = S.useMemo(
      () => Wr(r || null),
      [r]
    ), Y = S.useMemo(
      () => Wr(o || null),
      [o]
    ), $ = S.useMemo(() => !W || !Y ? !0 : W <= Y, [W, Y]), H = (_) => {
      const te = _ || null;
      O || P(te), t == null || t(te), te && (v === void 0 && k(!1), g == null || g(!1));
    }, V = (_) => {
      v === void 0 && k(_), g == null || g(_);
    }, U = (_) => {
      switch (_.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          _.preventDefault(), F || V(!0);
          break;
        case "Escape":
          F && (_.preventDefault(), V(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(_d, { open: F, onOpenChange: V, children: [
      /* @__PURE__ */ c.jsx(Td, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Go,
        {
          ...y,
          ref: M,
          type: "text",
          readOnly: !0,
          placeholder: u,
          value: T ? f(T) : "",
          disabled: a,
          invalid: s || i,
          trailingIcon: l || dp,
          trailingIconSize: d,
          onTrailingIconClick: () => !a && V(!F),
          className: A(
            F && "ring-interactive-focused ring-4",
            p
          ),
          onKeyDown: U,
          onClick: () => !a && V(!F),
          "aria-expanded": F,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(Id, { children: /* @__PURE__ */ c.jsx(
        js,
        {
          className: A(US, h),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: w,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => V(!1),
          onPointerDownOutside: () => V(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            am,
            {
              value: T,
              onChange: H,
              ...W && { minDate: W },
              ...Y && { maxDate: Y },
              disabled: !$,
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
XS.displayName = "DatePicker";
const ZS = /* @__PURE__ */ new Set([
  "text",
  "search",
  "email",
  "url",
  "tel",
  "number",
  "password"
]), QS = 'input, textarea, select, [role="combobox"], [contenteditable="true"]';
function JS(e) {
  var n;
  if (e.hasAttribute("hidden") || e.closest('[aria-hidden="true"]') || e instanceof HTMLInputElement && e.type === "hidden")
    return !1;
  const t = (n = e.ownerDocument.defaultView) == null ? void 0 : n.getComputedStyle(e);
  return (t == null ? void 0 : t.display) !== "none" && (t == null ? void 0 : t.visibility) !== "hidden";
}
function ek(e) {
  if (e.getAttribute("aria-disabled") === "true") return !1;
  const t = e;
  return !t.disabled && !t.readOnly;
}
function tk(e) {
  const t = e.getAttribute("role");
  return t !== null && t !== "textbox" || e.hasAttribute("aria-autocomplete") || e.hasAttribute("aria-haspopup") ? !1 : e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? ZS.has(e.type) : !1;
}
function nk(e) {
  const t = Array.from(
    e.querySelectorAll(QS)
  ).filter(JS).filter(ek), n = t[0];
  return !n || !tk(n) || n.value.trim() !== "" && t.length > 1 ? null : n;
}
function rk(e) {
  e.preventDefault();
  const t = e.currentTarget instanceof HTMLElement ? e.currentTarget : e.target;
  t instanceof HTMLElement && (nk(t) ?? t).focus();
}
const ok = {
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg"
}, ak = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], e4 = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (h) => h(),
  title: r,
  children: o,
  busy: a,
  actions: s = ak,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0,
  onOpenAutoFocus: u = rk,
  bodyClassName: f,
  size: p = "md"
}) => {
  const [h, x] = S.useState(-1), g = a !== void 0 ? a : h !== -1, w = async (C) => {
    const P = s.indexOf(C);
    if (C.onAction) {
      x(P);
      const N = await C.onAction(t);
      if (x(-1), N === !1)
        return;
    } else
      x(-1);
    e && t(C.value);
  }, b = () => {
    n(t);
  }, y = (C) => {
    C.preventDefault(), i && !g && d && n(t);
  }, M = (C) => {
    if (g) {
      C.preventDefault();
      return;
    }
    C.preventDefault(), n(t);
  };
  return /* @__PURE__ */ c.jsx(ls, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(ds, { children: /* @__PURE__ */ c.jsx(
    us,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        fs,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: y,
          onEscapeKeyDown: M,
          onOpenAutoFocus: u,
          className: A(
            `bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,
            ok[p]
          ),
          children: [
            /* @__PURE__ */ c.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ c.jsx(
              ll,
              {
                className: `text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,
                children: r
              }
            ) }),
            /* @__PURE__ */ c.jsx(
              "div",
              {
                className: A(
                  `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
                text-body-primary max-h-[calc(100vh-40px-68px-78px)]
                overflow-hidden overflow-y-auto border-y-1`,
                  f
                ),
                children: o
              }
            ),
            /* @__PURE__ */ c.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
              i && /* @__PURE__ */ c.jsx(
                Pe,
                {
                  intent: "tertiary",
                  onClick: b,
                  disabled: g,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((C, P) => {
                const { label: N, classNames: k, onAction: O, value: T, ...F } = C;
                return /* @__PURE__ */ c.jsx(
                  Pe,
                  {
                    loading: h === P,
                    ...F,
                    intent: C.intent || "primary",
                    className: k,
                    onClick: () => w(C),
                    children: N
                  },
                  P
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, ym = co(void 0), Ks = () => {
  const e = qr(ym);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, sk = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (d) => d(),
  children: r,
  initialStep: o = 0,
  currentStep: a,
  cancellable: s = !0,
  allowClickOutside: i = !0,
  onStepChange: l
}) => {
  const [d, u] = We(o), f = a !== void 0 ? a : d, p = S.Children.toArray(r).filter(
    (C) => S.isValidElement(C) && C.type === wm
  ), h = p.length, x = (C) => {
    C >= 0 && C < h && (a === void 0 && u(C), l == null || l(C));
  }, v = () => x(f + 1), g = () => x(f - 1), w = (C) => {
    a === void 0 && u(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(w);
  }, y = (C) => {
    C.preventDefault(), s && n(w);
  }, M = {
    currentStep: f,
    totalSteps: h,
    goToStep: x,
    nextStep: v,
    prevStep: g,
    isFirstStep: f === 0,
    isLastStep: f === h - 1,
    cancellable: s,
    onClose: w,
    onCancel: n
  };
  return /* @__PURE__ */ c.jsx(ym.Provider, { value: M, children: /* @__PURE__ */ c.jsx(ls, { open: e, onOpenChange: w, children: /* @__PURE__ */ c.jsx(ds, { children: /* @__PURE__ */ c.jsx(
    us,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        fs,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform`,
          onPointerDownOutside: b,
          onEscapeKeyDown: y,
          children: p[f]
        }
      )
    }
  ) }) }) });
}, wm = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), ik = ({ children: e }) => /* @__PURE__ */ c.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ c.jsx(
  ll,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), ck = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: A(
      `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary max-h-[calc(100vh-40px-68px-78px)] overflow-hidden
        overflow-y-auto border-y-1`,
      t
    ),
    children: e
  }
), lk = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = Ks(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(Pe, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, dk = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Ks(), s = {
    nextStep: a.nextStep,
    prevStep: a.prevStep,
    goToStep: a.goToStep,
    currentStep: a.currentStep,
    totalSteps: a.totalSteps,
    isFirstStep: a.isFirstStep,
    isLastStep: a.isLastStep
  }, i = async () => {
    t && await t(s);
  };
  return r ? /* @__PURE__ */ c.jsx(Hv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Pe, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Pe, { ...o, onClick: i, children: e });
}, t4 = {
  Root: sk,
  Step: wm,
  Header: ik,
  Body: ck,
  Footer: lk,
  Action: dk,
  useMultiStepDialog: Ks
}, n4 = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: a,
  optional: s
}) => {
  const i = S.isValidElement(t) ? S.cloneElement(
    t,
    {
      id: r,
      name: r,
      invalid: !!o
    }
  ) : t;
  return /* @__PURE__ */ c.jsxs("div", { className: A("min-w-0", n), children: [
    e && /* @__PURE__ */ c.jsxs(
      "label",
      {
        htmlFor: r,
        className: `text-body-secondary gap-xxs pb-xs text-sm font-normal flex
            items-center leading-none`,
        children: [
          /* @__PURE__ */ c.jsx("span", { children: e }),
          s && /* @__PURE__ */ c.jsx("span", { className: "text-body-secondary", children: "(任意)" })
        ]
      }
    ),
    i,
    o && /* @__PURE__ */ c.jsx("p", { className: "mt-xxs text-body-alert text-sm font-normal leading-[1.5]", children: o }),
    a && /* @__PURE__ */ c.jsx(
      "p",
      {
        className: `mt-xxs text-body-secondary text-sm font-normal
            leading-[1.5]`,
        children: a
      }
    )
  ] });
}, Cm = _d, uk = Td, fk = qx, Us = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Id, { children: /* @__PURE__ */ c.jsx(
  js,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
      // but we can add them later as needed.
      `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-50 border outline-none`,
      e
    ),
    ...r
  }
) }));
Us.displayName = js.displayName;
const mk = (e) => typeof e == "string" ? e : e.label || e.value || String(e), pk = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, Sm = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = mk,
      getSuggestionKey: d = pk,
      debounceMs: u = 300,
      minQueryLength: f = 0,
      loadingText: p = "Loading...",
      disabled: h,
      onFocus: x,
      onBlur: v,
      onKeyDown: g,
      ...w
    } = e, [b, y] = We(!1), [M, C] = We(
      []
    ), [P, N] = We(!1), k = Rt(null), [O, T] = We(0), F = Rt([]), W = GS(n, u), Y = Vr(() => {
      if (!o)
        return M;
      if (!n || n.length < f)
        return o;
      const R = n.toLowerCase();
      return o.filter((E) => l(E).toLowerCase().includes(R));
    }, [
      o,
      M,
      n,
      f,
      l
    ]);
    Qt(() => {
      if (a) {
        if (W.length < f) {
          C([]), y(!1), N(!1);
          return;
        }
        return k.current && k.current.abort(), k.current = new AbortController(), N(!0), a(W).then((R) => {
          C(R);
        }).catch((R) => {
          R.name !== "AbortError" && console.debug("AutoSuggest search failed:", R), C([]);
        }).finally(() => {
          N(!1);
        }), () => {
          k.current && k.current.abort();
        };
      }
    }, [W, a, f]);
    const $ = ve(
      (R) => {
        const E = l(R);
        r(E), s == null || s(R), y(!1);
      },
      [r, s, l]
    ), H = ve(
      (R) => {
        h || y(!0), x == null || x(R);
      },
      [h, x]
    ), V = ve(
      (R) => {
        y(!1), v == null || v(R);
      },
      [v]
    ), U = ve(
      (R) => {
        const E = R.target.value;
        r(E), !b && Y.length > 0 && y(!0);
      },
      [r, b, Y.length]
    );
    Qt(() => {
      T(0), F.current = [];
    }, [Y]), Qt(() => {
      var R;
      b && O >= 0 && F.current[O] && ((R = F.current[O]) == null || R.scrollIntoView({
        block: "nearest"
      }));
    }, [O, b]);
    const j = ve(
      (R) => {
        if (!b) {
          g == null || g(R);
          return;
        }
        switch (R.key) {
          case "Escape":
            R.preventDefault(), y(!1);
            break;
          case "Enter": {
            R.preventDefault();
            const E = Y[O];
            E && $(E);
            break;
          }
          case "ArrowDown":
            R.preventDefault(), T(
              (E) => E < Y.length - 1 ? E + 1 : E
            );
            break;
          case "ArrowUp":
            R.preventDefault(), T((E) => E > 0 ? E - 1 : E);
            break;
        }
        g == null || g(R);
      },
      [b, O, Y, $, g]
    ), _ = b && !h && (Y.length > 0 || P), te = _ && O >= 0 ? `autosuggest-item-${O}` : void 0;
    return /* @__PURE__ */ c.jsxs(Cm, { open: _, children: [
      /* @__PURE__ */ c.jsx(fk, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Go,
        {
          ref: t,
          value: n,
          onChange: U,
          onFocus: H,
          onBlur: V,
          onKeyDown: j,
          disabled: h,
          role: "combobox",
          "aria-expanded": _,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": te,
          "aria-autocomplete": "list",
          ...w
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        Us,
        {
          align: "start",
          sideOffset: 4,
          className: "p-0",
          style: {
            width: "var(--radix-popover-trigger-width)",
            maxWidth: "37.5rem"
          },
          onOpenAutoFocus: (R) => {
            R.preventDefault();
          },
          children: P ? /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ c.jsx(Ep, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: p })
              ]
            }
          ) : /* @__PURE__ */ c.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: A(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: Y.map((R, E) => {
                const I = l(R), L = E === O, G = `autosuggest-item-${E}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: G,
                    ref: (K) => {
                      F.current[E] = K;
                    },
                    role: "option",
                    "aria-selected": L,
                    "data-value": I,
                    onClick: () => $(R),
                    onPointerDown: (K) => {
                      K.preventDefault(), $(R);
                    },
                    onMouseEnter: () => T(E),
                    className: A(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      L && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(R) : l(R)
                  },
                  d(R, E)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
Sm.displayName = "AutoSuggest";
var he = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(he || {}), q = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(q || {});
const hk = [
  {
    backgroundColor: q.AccentSunSoft,
    textColor: he.AccentSunStrong,
    iconColor: q.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: q.AccentSunPale,
    textColor: he.AccentSunStrong,
    iconColor: q.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: q.AccentWoodSoft,
    textColor: he.AccentWoodStrong,
    iconColor: q.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: q.AccentWoodPale,
    textColor: he.AccentWoodStrong,
    iconColor: q.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: q.AccentOrangeSoft,
    textColor: he.AccentOrangeStrong,
    iconColor: q.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: q.AccentOrangePale,
    textColor: he.AccentOrangeStrong,
    iconColor: q.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: q.AccentYellowSoft,
    textColor: he.AccentYellowStrong,
    iconColor: q.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: q.AccentYellowPale,
    textColor: he.AccentYellowStrong,
    iconColor: q.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: q.AccentLemonSoft,
    textColor: he.AccentLemonStrong,
    iconColor: q.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: q.AccentLemonPale,
    textColor: he.AccentLemonStrong,
    iconColor: q.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: q.AccentGrassSoft,
    textColor: he.AccentGrassStrong,
    iconColor: q.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: q.AccentGrassPale,
    textColor: he.AccentGrassStrong,
    iconColor: q.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: q.AccentLimeSoft,
    textColor: he.AccentLimeStrong,
    iconColor: q.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: q.AccentLimePale,
    textColor: he.AccentLimeStrong,
    iconColor: q.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: q.AccentGreenSoft,
    textColor: he.AccentGreenStrong,
    iconColor: q.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: q.AccentGreenPale,
    textColor: he.AccentGreenStrong,
    iconColor: q.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: q.AccentPeacockSoft,
    textColor: he.AccentPeacockStrong,
    iconColor: q.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: q.AccentPeacockPale,
    textColor: he.AccentPeacockStrong,
    iconColor: q.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: q.AccentCyanSoft,
    textColor: he.AccentCyanStrong,
    iconColor: q.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: q.AccentCyanPale,
    textColor: he.AccentCyanStrong,
    iconColor: q.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: q.AccentSkySoft,
    textColor: he.AccentSkyStrong,
    iconColor: q.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: q.AccentSkyPale,
    textColor: he.AccentSkyStrong,
    iconColor: q.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: q.AccentSeaSoft,
    textColor: he.AccentSeaStrong,
    iconColor: q.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: q.AccentSeaPale,
    textColor: he.AccentSeaStrong,
    iconColor: q.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: q.AccentVioletSoft,
    textColor: he.AccentVioletStrong,
    iconColor: q.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: q.AccentVioletPale,
    textColor: he.AccentVioletStrong,
    iconColor: q.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: q.AccentPurpleSoft,
    textColor: he.AccentPurpleStrong,
    iconColor: q.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: q.AccentPurplePale,
    textColor: he.AccentPurpleStrong,
    iconColor: q.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: q.AccentMagentaSoft,
    textColor: he.AccentMagentaStrong,
    iconColor: q.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: q.AccentMagentaPale,
    textColor: he.AccentMagentaStrong,
    iconColor: q.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: q.AccentCharcoalSoft,
    textColor: he.AccentCharchoalStrong,
    iconColor: q.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: q.AccentCharcoalPale,
    textColor: he.AccentCharchoalStrong,
    iconColor: q.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: q.AccentGraySoft,
    textColor: he.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: q.AccentGrayPale,
    textColor: he.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: q.AccentGrayPale,
    textColor: he.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: q.AccentBambooPale,
    textColor: he.AccentBambooStrong,
    iconColor: q.AccentBambooStrong,
    code: 10
  }
], vk = oe(
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
), Ka = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: a = "md",
  style: s,
  selected: i = !1,
  variant: l = "primary",
  icon: d,
  disabled: u = !1,
  asChild: f = !1
}) => {
  const p = hk.find(
    (w) => w.code === e
  ), h = () => l === "secondary" ? `var(${p == null ? void 0 : p.iconColor})` : `var(${p == null ? void 0 : p.textColor})`, x = A(
    vk({
      size: a,
      selected: u ? !1 : i,
      interactive: !!o && !u,
      variant: l,
      disabled: u
    }),
    n
  ), v = {
    // Only apply accent background for primary variant
    // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
    ...l === "primary" && {
      backgroundColor: `var(${p == null ? void 0 : p.backgroundColor})`
    },
    // Only apply inline color when not disabled (Tailwind class handles disabled state)
    ...!u && { color: `var(${p == null ? void 0 : p.textColor})` },
    ...s
  }, g = f ? kn : "div";
  return /* @__PURE__ */ c.jsxs(
    g,
    {
      className: x,
      style: v,
      onClick: u ? void 0 : o,
      role: !f && o ? "button" : void 0,
      "aria-disabled": u || void 0,
      children: [
        d && /* @__PURE__ */ c.jsx(
          "span",
          {
            className: A(
              "shrink-0",
              u && "text-shape-interactive-disabled"
            ),
            style: u ? void 0 : { color: h() },
            children: De(d, { size: 14 })
          }
        ),
        f ? /* @__PURE__ */ c.jsx(Up, { children: t }) : /* @__PURE__ */ c.jsx("div", { className: "pt-0.5 relative h-full truncate", children: t }),
        !!r && !u && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: A(
              `bg-interactive-neutral-default hover:border-interactive-hover h-3.5
            w-3.5 box-border flex shrink-0 cursor-pointer items-center
            justify-center rounded-full border border-transparent leading-none
            transition-colors`
            ),
            onClick: r,
            children: /* @__PURE__ */ c.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "text-shape-primary h-1.25 w-1.25",
                viewBox: "0 0 5 5",
                fill: "none",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M4.54884 0.117831C4.70594 0.274938 4.70594 0.52966 4.54884 0.686767L0.686767 4.54884C0.52966 4.70594 0.274938 4.70594 0.117831 4.54884C-0.0392769 4.39173 -0.0392769 4.13701 0.117831 3.9799L3.9799 0.117831C4.13701 -0.0392769 4.39173 -0.0392769 4.54884 0.117831Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
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
}, km = S.forwardRef(
  ({
    value: e,
    onChange: t,
    maxTags: n,
    allowDuplicates: r = !0,
    separators: o = [",", "、"],
    placeholder: a = "Add tags...",
    inputValue: s,
    onInputChange: i,
    helperText: l,
    prefixIcon: d,
    trailingIcon: u,
    trailingIconSize: f = 14,
    prefixIconSize: p = 14,
    invalid: h,
    disabled: x,
    className: v,
    onValidateTag: g,
    defaultValidationError: w = "Invalid tag",
    ...b
  }, y) => {
    const [M, C] = We(""), P = s ?? M, N = i ?? C, [k, O] = We(!1), { compositionHandlers: T, guardKeyHandler: F } = Yo(), [W, Y] = We(null), $ = Rt(null);
    S.useImperativeHandle(y, () => $.current);
    const H = S.useMemo(() => {
      const K = o.map(
        (D) => D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(K.join("|"));
    }, [o]), V = ve(
      (K) => !(!K || !r && e.includes(K) || n && e.length >= n),
      [e, r, n]
    ), U = ve(
      (K) => {
        const D = K.trim();
        if (V(D)) {
          if (g) {
            const Z = g(D);
            if (!Z.valid) {
              Y(
                Z.error ?? w
              );
              return;
            }
          }
          t([...e, D]), N(""), Y(null);
        }
      },
      [
        e,
        t,
        V,
        N,
        g,
        w
      ]
    ), j = ve(
      (K) => {
        const D = e.filter((Z, ee) => ee !== K);
        t(D);
      },
      [e, t]
    ), _ = ve(
      (K) => {
        const D = K.target.value, Z = D[D.length - 1];
        if (Z && o.includes(Z)) {
          const ae = D.slice(0, -1);
          ae && U(ae);
          return;
        }
        const ee = D.split(H);
        if (ee.length > 1) {
          ee.filter(Boolean).forEach((ae) => U(ae));
          return;
        }
        N(D);
      },
      [o, H, U, N]
    ), te = ve(
      (K) => {
        K.key === "Enter" && P.trim() && (K.preventDefault(), U(P)), (K.key === "Backspace" || K.key === "Delete") && !P && e.length > 0 && (K.preventDefault(), j(e.length - 1));
      },
      [P, e.length, U, j]
    ), R = ve(() => {
      P.trim() && U(P), O(!1), Y(null);
    }, [P, U]), E = x || (n ? e.length >= n : !1), I = e.length === 0 && !P, L = !!d, G = !!u;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: A(
            bm({ invalid: h }),
            "min-h-11.5 !h-auto max-h-[12.5rem] overflow-y-auto",
            v
          ),
          children: [
            d && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Kn({
                  position: "prefix"
                }),
                children: De(d, { size: p })
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: A(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  L ? "pl-0" : "pl-sm",
                  G ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((K, D) => /* @__PURE__ */ c.jsx(
                    Ka,
                    {
                      ...!x && { onRemove: () => j(D) },
                      children: K
                    },
                    D
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: $,
                      value: P,
                      onChange: _,
                      onKeyDown: F(te),
                      onFocus: () => O(!0),
                      onBlur: R,
                      onCompositionStart: T.onCompositionStart,
                      onCompositionEnd: T.onCompositionEnd,
                      placeholder: I ? a : "",
                      disabled: E,
                      className: A(
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
            u && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Kn({
                  position: "trailing"
                }),
                children: De(u, { size: f })
              }
            )
          ]
        }
      ),
      (l || W) && /* @__PURE__ */ c.jsx(
        "p",
        {
          className: A(
            "mt-xxs text-sm",
            W ? "text-body-alert" : "text-body-secondary",
            !W && !k && "invisible"
          ),
          children: W || l
        }
      )
    ] });
  }
);
km.displayName = "TagInput";
const r4 = Object.assign(Go, {
  AutoSuggest: Sm,
  TagInput: km
});
var sc = 1, gk = 0.9, xk = 0.8, bk = 0.17, ba = 0.1, ya = 0.999, yk = 0.9999, wk = 0.99, Ck = /[\\\/_+.#"@\[\(\{&]/, Sk = /[\\\/_+.#"@\[\(\{&]/g, kk = /[\s-]/, Nm = /[\s-]/g;
function Ua(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? sc : wk;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), u = 0, f, p, h, x; d >= 0; ) f = Ua(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= sc : Ck.test(e.charAt(d - 1)) ? (f *= xk, h = e.slice(o, d - 1).match(Sk), h && o > 0 && (f *= Math.pow(ya, h.length))) : kk.test(e.charAt(d - 1)) ? (f *= gk, x = e.slice(o, d - 1).match(Nm), x && o > 0 && (f *= Math.pow(ya, x.length))) : (f *= bk, o > 0 && (f *= Math.pow(ya, d - o))), e.charAt(d) !== t.charAt(a) && (f *= yk)), (f < ba && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Ua(e, t, n, r, d + 1, a + 2, s), p * ba > f && (f = p * ba)), f > u && (u = f), d = n.indexOf(l, d + 1);
  return s[i] = u, u;
}
function ic(e) {
  return e.toLowerCase().replace(Nm, " ");
}
function Nk(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ua(e, t, ic(e), ic(t), 0, 0, {});
}
var Bn = '[cmdk-group=""]', wa = '[cmdk-group-items=""]', Mk = '[cmdk-group-heading=""]', Mm = '[cmdk-item=""]', cc = `${Mm}:not([aria-disabled="true"])`, qa = "cmdk-item-select", hn = "data-value", Ek = (e, t, n) => Nk(e, t, n), Em = m.createContext(void 0), vr = () => m.useContext(Em), Pm = m.createContext(void 0), qs = () => m.useContext(Pm), Rm = m.createContext(void 0), Am = m.forwardRef((e, t) => {
  let n = vn(() => {
    var E, I;
    return { search: "", value: (I = (E = e.value) != null ? E : e.defaultValue) != null ? I : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = vn(() => /* @__PURE__ */ new Set()), o = vn(() => /* @__PURE__ */ new Map()), a = vn(() => /* @__PURE__ */ new Map()), s = vn(() => /* @__PURE__ */ new Set()), i = Dm(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: g = !0, ...w } = e, b = Ne(), y = Ne(), M = Ne(), C = m.useRef(null), P = Fk();
  rn(() => {
    if (u !== void 0) {
      let E = u.trim();
      n.current.value = E, N.emit();
    }
  }, [u]), rn(() => {
    P(6, Y);
  }, []);
  let N = m.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, I, L) => {
    var G, K, D, Z;
    if (!Object.is(n.current[E], I)) {
      if (n.current[E] = I, E === "search") W(), T(), P(1, F);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let ee = document.getElementById(M);
          ee ? ee.focus() : (G = document.getElementById(b)) == null || G.focus();
        }
        if (P(7, () => {
          var ee;
          n.current.selectedItemId = (ee = $()) == null ? void 0 : ee.id, N.emit();
        }), L || P(5, Y), ((K = i.current) == null ? void 0 : K.value) !== void 0) {
          let ee = I ?? "";
          (Z = (D = i.current).onValueChange) == null || Z.call(D, ee);
          return;
        }
      }
      N.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), k = m.useMemo(() => ({ value: (E, I, L) => {
    var G;
    I !== ((G = a.current.get(E)) == null ? void 0 : G.value) && (a.current.set(E, { value: I, keywords: L }), n.current.filtered.items.set(E, O(I, L)), P(2, () => {
      T(), N.emit();
    }));
  }, item: (E, I) => (r.current.add(E), I && (o.current.has(I) ? o.current.get(I).add(E) : o.current.set(I, /* @__PURE__ */ new Set([E]))), P(3, () => {
    W(), T(), n.current.value || F(), N.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let L = $();
    P(4, () => {
      W(), (L == null ? void 0 : L.getAttribute("id")) === E && F(), N.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: M, labelId: y, listInnerRef: C }), []);
  function O(E, I) {
    var L, G;
    let K = (G = (L = i.current) == null ? void 0 : L.filter) != null ? G : Ek;
    return E ? K(E, n.current.search, I) : 0;
  }
  function T() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, I = [];
    n.current.filtered.groups.forEach((G) => {
      let K = o.current.get(G), D = 0;
      K.forEach((Z) => {
        let ee = E.get(Z);
        D = Math.max(ee, D);
      }), I.push([G, D]);
    });
    let L = C.current;
    H().sort((G, K) => {
      var D, Z;
      let ee = G.getAttribute("id"), ae = K.getAttribute("id");
      return ((D = E.get(ae)) != null ? D : 0) - ((Z = E.get(ee)) != null ? Z : 0);
    }).forEach((G) => {
      let K = G.closest(wa);
      K ? K.appendChild(G.parentElement === K ? G : G.closest(`${wa} > *`)) : L.appendChild(G.parentElement === L ? G : G.closest(`${wa} > *`));
    }), I.sort((G, K) => K[1] - G[1]).forEach((G) => {
      var K;
      let D = (K = C.current) == null ? void 0 : K.querySelector(`${Bn}[${hn}="${encodeURIComponent(G[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function F() {
    let E = H().find((L) => L.getAttribute("aria-disabled") !== "true"), I = E == null ? void 0 : E.getAttribute(hn);
    N.setState("value", I || void 0);
  }
  function W() {
    var E, I, L, G;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let K = 0;
    for (let D of r.current) {
      let Z = (I = (E = a.current.get(D)) == null ? void 0 : E.value) != null ? I : "", ee = (G = (L = a.current.get(D)) == null ? void 0 : L.keywords) != null ? G : [], ae = O(Z, ee);
      n.current.filtered.items.set(D, ae), ae > 0 && K++;
    }
    for (let [D, Z] of o.current) for (let ee of Z) if (n.current.filtered.items.get(ee) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = K;
  }
  function Y() {
    var E, I, L;
    let G = $();
    G && (((E = G.parentElement) == null ? void 0 : E.firstChild) === G && ((L = (I = G.closest(Bn)) == null ? void 0 : I.querySelector(Mk)) == null || L.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function $() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${Mm}[aria-selected="true"]`);
  }
  function H() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(cc)) || []);
  }
  function V(E) {
    let I = H()[E];
    I && N.setState("value", I.getAttribute(hn));
  }
  function U(E) {
    var I;
    let L = $(), G = H(), K = G.findIndex((Z) => Z === L), D = G[K + E];
    (I = i.current) != null && I.loop && (D = K + E < 0 ? G[G.length - 1] : K + E === G.length ? G[0] : G[K + E]), D && N.setState("value", D.getAttribute(hn));
  }
  function j(E) {
    let I = $(), L = I == null ? void 0 : I.closest(Bn), G;
    for (; L && !G; ) L = E > 0 ? Ik(L, Bn) : $k(L, Bn), G = L == null ? void 0 : L.querySelector(cc);
    G ? N.setState("value", G.getAttribute(hn)) : U(E);
  }
  let _ = () => V(H().length - 1), te = (E) => {
    E.preventDefault(), E.metaKey ? _() : E.altKey ? j(1) : U(1);
  }, R = (E) => {
    E.preventDefault(), E.metaKey ? V(0) : E.altKey ? j(-1) : U(-1);
  };
  return m.createElement(X.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (E) => {
    var I;
    (I = w.onKeyDown) == null || I.call(w, E);
    let L = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || L)) switch (E.key) {
      case "n":
      case "j": {
        g && E.ctrlKey && te(E);
        break;
      }
      case "ArrowDown": {
        te(E);
        break;
      }
      case "p":
      case "k": {
        g && E.ctrlKey && R(E);
        break;
      }
      case "ArrowUp": {
        R(E);
        break;
      }
      case "Home": {
        E.preventDefault(), V(0);
        break;
      }
      case "End": {
        E.preventDefault(), _();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let G = $();
        if (G) {
          let K = new Event(qa);
          G.dispatchEvent(K);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: k.inputId, id: k.labelId, style: Wk }, l), Ko(e, (E) => m.createElement(Pm.Provider, { value: N }, m.createElement(Em.Provider, { value: k }, E))));
}), Pk = m.forwardRef((e, t) => {
  var n, r;
  let o = Ne(), a = m.useRef(null), s = m.useContext(Rm), i = vr(), l = Dm(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  rn(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = jm(o, a, [e.value, e.children, a], e.keywords), f = qs(), p = Bt((P) => P.value && P.value === u.current), h = Bt((P) => d || i.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(qa, x), () => P.removeEventListener(qa, x);
  }, [h, e.onSelect, e.disabled]);
  function x() {
    var P, N;
    v(), (N = (P = l.current).onSelect) == null || N.call(P, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: y, keywords: M, ...C } = e;
  return m.createElement(X.div, { ref: Dt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : x }, e.children);
}), Rk = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ne(), i = m.useRef(null), l = m.useRef(null), d = Ne(), u = vr(), f = Bt((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  rn(() => u.group(s), []), jm(s, i, [e.value, e.heading, l]);
  let p = m.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return m.createElement(X.div, { ref: Dt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && m.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Ko(e, (h) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, m.createElement(Rm.Provider, { value: p }, h))));
}), Ak = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), a = Bt((s) => !s.search);
  return !n && !a ? null : m.createElement(X.div, { ref: Dt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), Dk = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = qs(), s = Bt((d) => d.search), i = Bt((d) => d.selectedItemId), l = vr();
  return m.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), m.createElement(X.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), jk = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = m.useRef(null), s = m.useRef(null), i = Bt((d) => d.selectedItemId), l = vr();
  return m.useEffect(() => {
    if (s.current && a.current) {
      let d = s.current, u = a.current, f, p = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let h = d.offsetHeight;
          u.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(f), p.unobserve(d);
      };
    }
  }, []), m.createElement(X.div, { ref: Dt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, Ko(e, (d) => m.createElement("div", { ref: Dt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), Ok = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return m.createElement(ls, { open: n, onOpenChange: r }, m.createElement(ds, { container: s }, m.createElement(us, { "cmdk-overlay": "", className: o }), m.createElement(fs, { "aria-label": e.label, "cmdk-dialog": "", className: a }, m.createElement(Am, { ref: t, ...i }))));
}), _k = m.forwardRef((e, t) => Bt((n) => n.filtered.count === 0) ? m.createElement(X.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Tk = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return m.createElement(X.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Ko(e, (s) => m.createElement("div", { "aria-hidden": !0 }, s)));
}), Ye = Object.assign(Am, { List: jk, Item: Pk, Input: Dk, Group: Rk, Separator: Ak, Dialog: Ok, Empty: _k, Loading: Tk });
function Ik(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function $k(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Dm(e) {
  let t = m.useRef(e);
  return rn(() => {
    t.current = e;
  }), t;
}
var rn = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function vn(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Bt(e) {
  let t = qs(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function jm(e, t, n, r = []) {
  let o = m.useRef(), a = vr();
  return rn(() => {
    var s;
    let i = (() => {
      var d;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (d = u.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(hn, i), o.current = i;
  }), o;
}
var Fk = () => {
  let [e, t] = m.useState(), n = vn(() => /* @__PURE__ */ new Map());
  return rn(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function Lk(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ko({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement(Lk(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Wk = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Om = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ye,
  {
    ref: n,
    className: A(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
Om.displayName = Ye.displayName;
const _m = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: "border-divider-default py-sm px-md flex items-center border-b",
    "cmdk-input-wrapper": "",
    children: /* @__PURE__ */ c.jsxs(
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
          /* @__PURE__ */ c.jsx(Qa, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Ye.Input,
            {
              ref: n,
              className: A(
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
_m.displayName = Ye.Input.displayName;
const Tm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ye.List,
  {
    ref: n,
    className: A(
      "max-h-[18.75rem] overflow-x-hidden overflow-y-auto",
      e
    ),
    ...t
  }
));
Tm.displayName = Ye.List.displayName;
const Im = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Ye.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Im.displayName = Ye.Empty.displayName;
const Kr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ye.Group,
  {
    ref: n,
    className: A(
      `text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,
      e
    ),
    ...t
  }
));
Kr.displayName = Ye.Group.displayName;
const Vk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ye.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
Vk.displayName = Ye.Separator.displayName;
const Ur = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ye.Item,
  {
    ref: n,
    className: A(
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
Ur.displayName = Ye.Item.displayName;
const lc = oe("ease-in-out transition-all duration-300", {
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
}), Bk = ({
  options: e,
  onValueChange: t = (et) => et,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: a = (et) => et,
  variant: s,
  defaultValue: i = [],
  value: l,
  placeholder: d = "選択してください",
  placeholderAriaLabel: u = "選択してください",
  triggerDescription: f = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: p = "オプションが選択されていません",
  searchHelpText: h = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: x = "利用可能なオプションを検索",
  optionsListAriaLabel: v = "利用可能なオプション",
  selectAllLabel: g = "すべて選択",
  selectAllCountLabel: w = "オプション",
  clearAllLabel: b = "すべてクリア",
  closeLabel: y = "閉じる",
  footerContent: M,
  moreSelectedLabel: C = "その他",
  searchPlaceholder: P = "オプションを検索...",
  maxCount: N = 10,
  maxSelected: k,
  maxSelectedReachedLabel: O = "選択できる上限に達しました。",
  modalPopover: T = !1,
  className: F,
  hideSelectAll: W = !1,
  searchable: Y = !0,
  emptyIndicator: $ = "結果が見つかりません。",
  noOptionsIndicator: H = "利用可能なオプションがありません。",
  autoSize: V = !1,
  singleLine: U = !1,
  popoverClassName: j,
  disabled: _ = !1,
  invalid: te = !1,
  responsive: R,
  minWidth: E,
  maxWidth: I,
  deduplicateOptions: L = !1,
  resetOnDefaultValueChange: G = !0,
  closeOnSelect: K = !1,
  filterByValueAndLabel: D = !1,
  filterOption: Z,
  renderOption: ee,
  customTrigger: ae,
  selectionDisplayMode: de = "default",
  hideSelection: pe = !1,
  maxDisplayedOptions: Me,
  totalOptionsCount: Ie,
  moreOptionsLabel: ct = (et) => `検索テキストを入力して他${et}件を表示`,
  ...yt
}, wt) => {
  const [et, Ct] = S.useState(i), [ze, St] = S.useState(!1), [Ge, Kt] = S.useState(""), kt = l !== void 0, me = kt ? l : et, On = k !== void 0 && me.length >= k, [Uo, xr] = S.useState(""), [qo, br] = S.useState(""), _n = S.useRef(me.length), yr = S.useRef(ze), wr = S.useRef(Ge), lt = S.useCallback(
    (B, ne = "polite") => {
      ne === "assertive" ? (br(B), setTimeout(() => br(""), 100)) : (xr(B), setTimeout(() => xr(""), 100));
    },
    []
  ), Ze = S.useCallback(
    (B) => {
      kt || Ct(B), t(B);
    },
    [kt, t]
  ), _t = S.useId(), Cr = `${_t}-listbox`, Tn = `${_t}-description`, ue = `${_t}-count`, we = S.useRef(i), se = S.useCallback(
    (B) => {
      const ne = B[0];
      return !!(ne && typeof ne == "object" && "heading" in ne);
    },
    []
  ), ge = S.useCallback((B, ne) => {
    if (B.length !== ne.length) return !1;
    const ce = [...B].sort(), xe = [...ne].sort();
    return ce.every((Ce, Ae) => Ce === xe[Ae]);
  }, []), $e = S.useCallback(() => {
    St(!1), Kt(""), Ze(i);
  }, [i, Ze]), ie = S.useRef(null);
  S.useImperativeHandle(
    wt,
    () => ({
      reset: $e,
      getSelectedValues: () => me,
      setSelectedValues: Ze,
      clear: () => Ze([]),
      focus: () => {
        if (ie.current) {
          ie.current.focus();
          const B = ie.current.style.outline, ne = ie.current.style.outlineOffset;
          ie.current.style.outline = "2px solid hsl(var(--ring))", ie.current.style.outlineOffset = "2px", setTimeout(() => {
            ie.current && (ie.current.style.outline = B, ie.current.style.outlineOffset = ne);
          }, 1e3);
        }
      }
    }),
    [$e, me, Ze]
  );
  const [Qe, In] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const B = () => {
      const ne = window.innerWidth;
      ne < 640 ? In("mobile") : ne < 1024 ? In("tablet") : In("desktop");
    };
    return B(), window.addEventListener("resize", B), () => {
      typeof window < "u" && window.removeEventListener("resize", B);
    };
  }, []);
  const tt = (() => {
    if (!R)
      return {
        maxCount: N,
        compactMode: !1
      };
    if (R === !0) {
      const ce = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Qe];
      return {
        maxCount: (ce == null ? void 0 : ce.maxCount) ?? N,
        compactMode: (ce == null ? void 0 : ce.compactMode) ?? !1
      };
    }
    const B = R[Qe];
    return {
      maxCount: (B == null ? void 0 : B.maxCount) ?? N,
      compactMode: (B == null ? void 0 : B.compactMode) ?? !1
    };
  })(), _e = S.useCallback(() => {
    if (e.length === 0) return [];
    let B;
    se(e) ? B = e.flatMap((Ce) => Ce.options) : B = e;
    const ne = /* @__PURE__ */ new Set(), ce = [], xe = [];
    return B.forEach((Ce) => {
      ne.has(Ce.value) ? (ce.push(Ce.value), L || xe.push(Ce)) : (ne.add(Ce.value), xe.push(Ce));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${L ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${L ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), L ? xe : B;
  }, [e, L, se]), $n = S.useCallback(
    (B) => {
      const ne = _e().find((ce) => ce.value === B);
      return !ne && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${B}" not found in options list`
      ), ne;
    },
    [_e]
  ), qm = S.useCallback(
    (B, ne) => {
      const [ce, xe] = B.split(":");
      if (!D)
        return xe && xe.toLowerCase().includes(ne.toLowerCase()) ? 1 : 0;
      const Ce = ne.toLowerCase();
      return xe && xe.toLowerCase().includes(Ce) || ce && ce.toLowerCase().includes(Ce) ? 1 : 0;
    },
    [D]
  ), Xm = (B) => {
    if (B.key === "Enter")
      St(!0);
    else if (B.key === "Backspace" && !B.currentTarget.value) {
      const ne = [...me];
      ne.pop(), Ze(ne);
    }
  }, Xo = (B) => {
    if (_) return;
    const ne = $n(B);
    if (ne != null && ne.disabled) return;
    const ce = me.includes(B);
    if (!ce && On) {
      lt(O, "assertive");
      return;
    }
    const xe = ce ? me.filter((Ce) => Ce !== B) : [...me, B];
    Ze(xe), K && St(!1);
  }, Zs = () => {
    _ || Ze([]);
  }, Zm = () => {
    _ || St((B) => !B);
  }, Qm = () => {
    if (_) return;
    const B = me.slice(
      0,
      tt.maxCount
    );
    Ze(B);
  }, Jm = () => {
    if (_) return;
    const B = _e().filter((ne) => !ne.disabled);
    k !== void 0 && B.length > k || (me.length === B.length ? Zs() : Ze(B.map((ne) => ne.value)), K && St(!1));
  }, Zo = ee || ((B) => {
    const { option: ne, location: ce, onRemove: xe, disabled: Ce } = B;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      Ka,
      {
        className: A(
          lc({ variant: s }),
          tt.compactMode && "text-xs px-1.5 py-0.5",
          Qe === "mobile" && "max-w-[7.5rem] truncate",
          U && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Ce && "cursor-not-allowed"
        ),
        ...!Ce && { onRemove: xe },
        children: ne.label
      }
    ) : ne.label;
  }), Qo = _e().length > 0, Fn = Ge.trim(), Sr = !!Fn, Qs = !!Z && Sr, Ut = S.useMemo(() => !Z || !Fn ? e : se(e) ? e.map((B) => ({
    ...B,
    options: B.options.filter(
      (ne) => Z(ne, Fn)
    )
  })) : e.filter((B) => Z(B, Fn)), [e, Z, Fn, se]), kr = Me !== void 0 && (!Sr || !!n || !!Z), Js = S.useCallback(
    (B) => !!B.disabled || On && !me.includes(B.value),
    [On, me]
  ), ep = k !== void 0 && _e().filter((B) => !B.disabled).length > k;
  S.useEffect(() => {
    if (!G || kt) return;
    const B = we.current;
    ge(B, i) || (ge(me, i) || Ct(i), we.current = [...i]);
  }, [
    i,
    me,
    ge,
    G,
    kt
  ]);
  const Jo = {
    minWidth: E || (Qe === "mobile" ? "0px" : "12.5rem"),
    maxWidth: I || "100%",
    popoverMaxWidth: I || "32rem",
    width: V ? "auto" : "100%"
  }, ei = S.useMemo(() => de === "default" || me.length === 0 ? d : me.map((B) => {
    var ne;
    return (ne = $n(B)) == null ? void 0 : ne.label;
  }).filter(Boolean).join(", "), [me, $n, d, de]);
  return S.useEffect(() => {
    ze || Kt("");
  }, [ze]), S.useEffect(() => {
    const B = me.length, ne = _e(), ce = ne.filter((xe) => !xe.disabled).length;
    if (B !== _n.current) {
      const xe = B - _n.current;
      if (xe > 0) {
        const Ae = me.slice(-xe).map((Fe) => {
          var Nt;
          return (Nt = ne.find((ln) => ln.value === Fe)) == null ? void 0 : Nt.label;
        }).filter(Boolean);
        Ae.length === 1 ? lt(
          `${Ae[0]} selected. ${B} of ${ce} options selected.`
        ) : lt(
          `${Ae.length} options selected. ${B} of ${ce} total selected.`
        );
      } else xe < 0 && lt(
        `Option removed. ${B} of ${ce} options selected.`
      );
      _n.current = B;
    }
    ze !== yr.current && (lt(
      ze ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), yr.current = ze), Ge !== wr.current && Ge !== void 0 && (Ge && ze && lt(`Searching for "${Ge}"`), wr.current = Ge);
  }, [me, ze, Ge, lt, _e]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: Uo }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: qo })
    ] }),
    /* @__PURE__ */ c.jsxs(
      Cm,
      {
        open: ze,
        onOpenChange: St,
        modal: T,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: Tn, className: "sr-only", children: f }),
          /* @__PURE__ */ c.jsx("div", { id: ue, className: "sr-only", "aria-live": "polite", children: me.length === 0 ? p : `${me.length} option${me.length === 1 ? "" : "s"} selected: ${me.map((B) => {
            var ne;
            return (ne = $n(B)) == null ? void 0 : ne.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: A(V && "w-auto", F), children: [
            /* @__PURE__ */ c.jsx(uk, { asChild: !0, children: ae || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: ie,
                ...yt,
                onClick: Zm,
                disabled: _,
                className: A(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  V ? "w-auto" : "w-full",
                  !te && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  te && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  tt.compactMode && "min-h-8 text-sm",
                  Qe === "mobile" && "min-h-12"
                ),
                style: {
                  ...Jo,
                  maxWidth: `min(${Jo.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": ze,
                "aria-haspopup": "listbox",
                "aria-controls": ze ? Cr : void 0,
                "aria-describedby": `${Tn} ${ue}`,
                "aria-label": `Multi-select: ${me.length} of ${_e().length} options selected. ${u}`,
                children: /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "span",
                        {
                          className: A(
                            "mx-sm",
                            de === "inline" && "truncate",
                            _ ? "text-body-disabled" : ze || de === "inline" && ei !== d ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: ei
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        lo,
                        {
                          className: A(
                            "h-4 mx-xs cursor-pointer",
                            _ ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(pe || de === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              me.slice(0, tt.maxCount).map((B) => {
                const ne = $n(B);
                return ne ? /* @__PURE__ */ c.jsx(S.Fragment, { children: Zo({
                  option: ne,
                  location: "badge",
                  onRemove: () => Xo(B),
                  disabled: _
                }) }, B) : null;
              }).filter(Boolean),
              me.length > tt.maxCount && /* @__PURE__ */ c.jsxs(
                Ka,
                {
                  className: A(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    lc({ variant: s }),
                    tt.compactMode && "text-xs px-1.5 py-0.5",
                    U && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    _ && "cursor-not-allowed"
                  ),
                  ...!_ && { onRemove: Qm },
                  children: [
                    "+ ",
                    me.length - tt.maxCount,
                    " ",
                    C
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Us,
            {
              id: Cr,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": v,
              className: A(
                "p-0 w-auto",
                Qe === "mobile" && "w-[85vw] max-w-[17.5rem]",
                Qe === "tablet" && "max-w-md w-[70vw]",
                Qe === "desktop" && "min-w-[18.75rem]",
                j
              ),
              style: {
                maxWidth: `min(${Jo.popoverMaxWidth}, 85vw)`,
                maxHeight: Qe === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(
                Om,
                {
                  filter: qm,
                  shouldFilter: !n && !Z,
                  children: [
                    Y && /* @__PURE__ */ c.jsxs("header", { children: [
                      /* @__PURE__ */ c.jsx("div", { id: `${_t}-search-help`, className: "sr-only", children: h }),
                      /* @__PURE__ */ c.jsx(
                        _m,
                        {
                          placeholder: P,
                          onKeyDown: Xm,
                          value: Ge,
                          onValueChange: (B) => {
                            Kt(B), n == null || n(B);
                          },
                          "aria-label": x,
                          "aria-describedby": `${_t}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ c.jsxs(
                      Tm,
                      {
                        className: A(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          Qe === "mobile" && "max-h-[calc(50vh-56px)]"
                        ),
                        style: { overscrollBehaviorY: "contain" },
                        children: [
                          r && /* @__PURE__ */ c.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                              children: /* @__PURE__ */ c.jsx(Bo.Circular, { size: "sm", children: o })
                            }
                          ),
                          !r && (Qo || Sr) && /* @__PURE__ */ c.jsx(Im, { children: $ }),
                          !r && !Qo && !Sr && /* @__PURE__ */ c.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: H
                            }
                          ),
                          !r && !W && !ep && !Ge && Qo && /* @__PURE__ */ c.jsx(Kr, { children: /* @__PURE__ */ c.jsxs(
                            Ur,
                            {
                              value: "select-all",
                              onSelect: Jm,
                              role: "option",
                              "aria-selected": me.length === _e().filter((B) => !B.disabled).length,
                              "aria-label": `Select all ${_e().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ c.jsx(
                                  Gr,
                                  {
                                    className: "mr-xs",
                                    checked: me.length === _e().filter((B) => !B.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ c.jsxs("span", { children: [
                                  "(",
                                  g,
                                  _e().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                    " - ",
                                    _e().length,
                                    " ",
                                    w
                                  ] }) : null,
                                  ")"
                                ] })
                              ]
                            },
                            "all"
                          ) }),
                          !r && (se(Ut) ? (() => {
                            let B = 0;
                            const ne = Ut.reduce(
                              (Ae, Fe) => Ae + Fe.options.length,
                              0
                            ), ce = Ut.map((Ae) => {
                              const Fe = kr ? Ae.options.filter(
                                (Nt) => B++ < Me || me.includes(Nt.value)
                              ) : Ae.options;
                              return { ...Ae, options: Fe };
                            }), xe = ce.reduce(
                              (Ae, Fe) => Ae + Fe.options.length,
                              0
                            ), Ce = (Qs ? ne : Ie ?? ne) - xe;
                            return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                              ce.map((Ae) => Ae.options.length === 0 ? null : /* @__PURE__ */ c.jsx(
                                Kr,
                                {
                                  heading: Ae.heading,
                                  children: Ae.options.map((Fe) => {
                                    const Nt = me.includes(
                                      Fe.value
                                    ), ln = Js(Fe);
                                    return /* @__PURE__ */ c.jsxs(
                                      Ur,
                                      {
                                        value: `${Fe.value}:${Fe.label}`,
                                        onSelect: () => Xo(Fe.value),
                                        role: "option",
                                        "aria-selected": Nt,
                                        "aria-disabled": ln,
                                        "aria-label": `${Fe.label}${Nt ? ", selected" : ", not selected"}${ln ? ", disabled" : ""}`,
                                        className: A(
                                          "cursor-pointer",
                                          ln && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                        ),
                                        disabled: ln,
                                        children: [
                                          /* @__PURE__ */ c.jsx(
                                            Gr,
                                            {
                                              className: "mr-xs",
                                              checked: Nt
                                            }
                                          ),
                                          /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Zo({
                                            option: Fe,
                                            location: "dropdown",
                                            isSelected: Nt
                                          }) })
                                        ]
                                      },
                                      Fe.value
                                    );
                                  })
                                },
                                Ae.heading
                              )),
                              kr && Ce > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: ct(Ce) })
                            ] });
                          })() : /* @__PURE__ */ c.jsx(Kr, { children: (() => {
                            const B = kr ? Ut.filter(
                              (ce, xe) => xe < Me || me.includes(ce.value)
                            ) : Ut, ne = (Qs ? Ut.length : Ie ?? Ut.length) - B.length;
                            return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                              B.map((ce) => {
                                const xe = me.includes(
                                  ce.value
                                ), Ce = Js(ce);
                                return /* @__PURE__ */ c.jsxs(
                                  Ur,
                                  {
                                    value: `${ce.value}:${ce.label}`,
                                    onSelect: () => Xo(ce.value),
                                    role: "option",
                                    "aria-selected": xe,
                                    "aria-disabled": Ce,
                                    "aria-label": `${ce.label}${xe ? ", selected" : ", not selected"}${Ce ? ", disabled" : ""}`,
                                    className: A(
                                      "cursor-pointer",
                                      Ce && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: Ce,
                                    children: [
                                      /* @__PURE__ */ c.jsx(
                                        Gr,
                                        {
                                          className: "mr-xs",
                                          checked: xe
                                        }
                                      ),
                                      /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Zo({
                                        option: ce,
                                        location: "dropdown",
                                        isSelected: xe
                                      }) })
                                    ]
                                  },
                                  ce.value
                                );
                              }),
                              kr && ne > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: ct(ne) })
                            ] });
                          })() }))
                        ]
                      }
                    ),
                    /* @__PURE__ */ c.jsxs(
                      "footer",
                      {
                        className: `bg-surface-primary bottom-0 border-t-divider-default
                border-t`,
                        children: [
                          M && /* @__PURE__ */ c.jsx("div", { className: "px-md pt-sm text-body-secondary text-sm", children: M }),
                          /* @__PURE__ */ c.jsxs("div", { className: "px-md py-sm flex items-center justify-between", children: [
                            /* @__PURE__ */ c.jsx(
                              Pe,
                              {
                                intent: "text",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: Zs,
                                disabled: me.length === 0,
                                children: b
                              }
                            ),
                            /* @__PURE__ */ c.jsx(
                              Pe,
                              {
                                intent: "primary",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: () => {
                                  a(me), St(!1);
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
}, zk = S.forwardRef(
  Bk
);
zk.displayName = "MultiSelect";
const Hk = oe(
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
), Yk = oe(
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
), Gk = oe(
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
), Xa = ({
  options: e,
  placeholder: t,
  className: n,
  icon: r,
  invalid: o = !1,
  variant: a = "default",
  intent: s = "primary",
  value: i,
  hideChevron: l = !1,
  onValueChange: d,
  searchPlaceholder: u = "Search...",
  searchThreshold: f = 7,
  renderValue: p,
  ...h
}) => {
  const [x, v] = S.useState(""), g = S.useRef(null), b = e.filter(
    (k) => !("type" in k) || k.type === "Option" || k.type === void 0
  ).length >= f, y = (k) => {
    if (typeof k == "string") return k;
    if (typeof k == "number") return String(k);
    if (Array.isArray(k)) return k.map(y).join("");
    if (S.isValidElement(k)) {
      const { children: O } = k.props;
      if (O) return y(O);
    }
    return "";
  }, M = (k) => !b || !x || "type" in k && (k.type === "Group" || k.type === "Separator") ? !0 : "label" in k ? y(k.label).toLowerCase().includes(x.toLowerCase()) : !0, C = {
    ...h
  }, P = i !== void 0 ? String(i) : void 0, N = (k) => {
    const O = e.find(
      (T) => "value" in T && String(T.value) === k
    );
    return O && "value" in O ? O.value : k;
  };
  return P !== void 0 && (C.value = P), d && (C.onValueChange = (k) => {
    const O = N(k);
    d(O);
  }), /* @__PURE__ */ c.jsxs(
    Tb,
    {
      ...C,
      onOpenChange: (k) => {
        var O;
        k || v(""), (O = C.onOpenChange) == null || O.call(C, k);
      },
      children: [
        /* @__PURE__ */ c.jsxs(
          Ib,
          {
            className: A(
              Hk({ variant: a, intent: s, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center truncate", children: [
                De(r, {
                  className: A("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ c.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ c.jsx(
                  $b,
                  {
                    placeholder: t || "Select an option",
                    className: A("hidden", {
                      "text-sm": a === "compact"
                    }),
                    children: p
                  }
                ) })
              ] }),
              !l && /* @__PURE__ */ c.jsx(
                Fb,
                {
                  className: A("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": h.disabled
                  }),
                  children: /* @__PURE__ */ c.jsx(
                    lo,
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
        /* @__PURE__ */ c.jsx(Lb, { children: /* @__PURE__ */ c.jsxs(
          Wb,
          {
            position: "popper",
            sideOffset: -1,
            className: A(Yk({ variant: a }), n),
            children: [
              b && /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ c.jsx(Qa, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: g,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: u,
                        value: x,
                        onChange: (k) => v(k.target.value),
                        onKeyDown: (k) => k.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx(Kb, {}),
              /* @__PURE__ */ c.jsx(Vb, { children: e.map((k, O) => {
                const T = M(k);
                switch (k.type) {
                  case "Group":
                    return /* @__PURE__ */ c.jsx(
                      Bb,
                      {
                        className: A(!T && "hidden"),
                        children: /* @__PURE__ */ c.jsx(zb, { children: k.label })
                      },
                      O
                    );
                  case "Separator":
                    return /* @__PURE__ */ c.jsx(
                      qb,
                      {
                        className: A(
                          "border-divider-default h-px border-b",
                          !T && "hidden"
                        )
                      },
                      O
                    );
                  default:
                    return /* @__PURE__ */ c.jsxs(
                      Hb,
                      {
                        value: String(k.value),
                        disabled: k.disabled ?? !1,
                        className: A(
                          Gk({
                            variant: a,
                            isSelected: i === k.value
                          }),
                          !T && "hidden"
                        ),
                        children: [
                          De(k.icon, {
                            className: A("h-5 w-5", {
                              "-ml-xxs": a === "default",
                              "mr-xxs": a === "compact",
                              "text-interactive-disabled": k.disabled
                            })
                          }),
                          /* @__PURE__ */ c.jsx(
                            Yb,
                            {
                              className: A("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": k.disabled
                              }),
                              children: k.label
                            }
                          ),
                          /* @__PURE__ */ c.jsx(Gb, {})
                        ]
                      },
                      O
                    );
                }
              }) }),
              /* @__PURE__ */ c.jsx(Ub, {}),
              /* @__PURE__ */ c.jsx(Xb, {})
            ]
          }
        ) })
      ]
    }
  );
};
Xa.displayName = "Select";
const Kk = oe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), dc = oe(
  "text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"
), Uk = S.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    totalItems: n,
    onPageChange: r,
    rowsPerPage: o,
    rowsPerPageOptions: a = [50, 100, 200],
    onRowsPerPageChange: s,
    rowsPerPageLabel: i = "表示行数",
    pageSelectLabel: l = "ページ選択",
    formatPageOption: d = (g, w) => `${g} / ${w}`,
    formatPageValue: u = (g, w, b) => `${g} / ${w}（全${b}件）`,
    showNavigation: f = !0,
    size: p,
    className: h,
    ...x
  }, v) => {
    const g = () => {
      e > 1 && r(e - 1);
    }, w = () => {
      e < t && r(e + 1);
    }, b = (N) => {
      const k = parseInt(N, 10);
      s(k), e > 1 && r(1);
    }, y = (N) => {
      const k = parseInt(N, 10);
      r(k);
    }, M = a.map((N) => ({
      value: N.toString(),
      label: N.toString()
    })), C = Math.max(t, 1), P = Array.from(
      { length: C },
      (N, k) => k + 1
    ).map((N) => ({
      value: N.toString(),
      label: d(N, C, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: v,
        className: A(Kk({ size: p }), h),
        ...x,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(dc()), children: i }),
            /* @__PURE__ */ c.jsx(
              Xa,
              {
                value: o.toString(),
                onValueChange: b,
                options: M
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(dc()), children: l }),
            /* @__PURE__ */ c.jsx(
              Xa,
              {
                value: e.toString(),
                onValueChange: y,
                options: P,
                disabled: n === 0,
                renderValue: u(
                  e,
                  C,
                  n
                ),
                searchThreshold: 1 / 0
              }
            )
          ] }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-md flex items-center", children: [
            /* @__PURE__ */ c.jsx(
              Pe,
              {
                intent: "text",
                size: "sm",
                icon: pp,
                onClick: g,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Pe,
              {
                intent: "text",
                size: "sm",
                icon: mc,
                onClick: w,
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
Uk.displayName = "Pagination";
const qk = oe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), Xk = oe(
  `border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[1.1875rem] cursor-[inherit]
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
), Zk = oe(
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
), o4 = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(qk({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      pb,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: A(
          Xk({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(hb, { className: A(Zk({ invalid: a })) })
      }
    ),
    /* @__PURE__ */ c.jsxs(
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
}, a4 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  mb,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), Qk = oe(
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
), Jk = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", eN = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, tN = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, nN = oe(
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
), rN = "gap-xs text-sm text-body-inverse flex-row", oN = oe(
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
), aN = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, sN = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", iN = S.forwardRef(
  ({
    size: e = "md",
    state: t,
    value: n = "",
    className: r,
    onChange: o,
    onSearch: a,
    placeholder: s,
    disabled: i,
    supportText: l,
    searchButtonText: d = "検索",
    searchOnKeywordAdd: u = !1,
    initialKeywords: f,
    ...p
  }, h) => {
    const x = i || t === "disabled", [v, g] = S.useState(
      f ?? []
    ), [w, b] = S.useState(!1);
    let y;
    typeof t == "string" ? y = t : x ? y = "disabled" : v.length > 0 ? y = "filled" : y = "default";
    const M = S.useRef(y), { compositionHandlers: C, guardKeyHandler: P } = Yo();
    Qt(() => {
      M.current === "filled" && y !== "filled" && g([]), M.current = y;
    }, [y]);
    const N = (T) => {
      x || o && o(T);
    }, k = (T) => {
      if (!x) {
        if (T.key === "Enter" && n.trim()) {
          const F = [...v, n.trim()];
          if (g(F), o) {
            const W = {
              ...T,
              target: { value: "" }
            };
            o(W);
          }
          u && a && a(F), T.preventDefault();
        }
        if ((T.key === "Backspace" || T.key === "Delete") && !n && v.length > 0) {
          const F = v.slice(0, -1);
          g(F), u && a && a(F), T.preventDefault();
        }
      }
    }, O = (T) => {
      if (x) return;
      const F = v.filter((W, Y) => Y !== T);
      g(F), u && a && a(F);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: A(
          "group relative flex flex-col",
          x ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": x ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: A(
                Qk({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: A(Jk), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: A(sN, eN), children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ c.jsx(Qa, { size: 20 })
                      }
                    ),
                    v.map((T, F) => /* @__PURE__ */ c.jsxs("span", { className: oN({ size: e }), children: [
                      /* @__PURE__ */ c.jsx("span", { children: T }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            aN,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (W) => {
                            W.stopPropagation(), W.preventDefault(), O(F);
                          },
                          onMouseDown: (W) => {
                            W.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: x,
                          children: /* @__PURE__ */ c.jsx(Ca, { size: 8 })
                        }
                      )
                    ] }, F)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: h,
                        className: A(tN),
                        type: "text",
                        value: n,
                        onChange: N,
                        onKeyDown: P(k),
                        onCompositionStart: C.onCompositionStart,
                        onCompositionEnd: C.onCompositionEnd,
                        onFocus: (T) => {
                          var F;
                          b(!0), (F = p.onFocus) == null || F.call(p, T);
                        },
                        onBlur: (T) => {
                          var F;
                          b(!1), (F = p.onBlur) == null || F.call(p, T);
                        },
                        placeholder: y === "filled" || v.length > 0 ? "" : s,
                        disabled: x,
                        ...p
                      }
                    )
                  ] }),
                  (n || v.length > 0) && !x && /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), a == null || a([]), g([]);
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ c.jsx(Ca, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      nN({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let T = v;
                      n.trim() && (T = [...v, n.trim()], g(T), o && o({
                        target: { value: "" }
                      })), a == null || a(T);
                    },
                    disabled: x,
                    children: d
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: A(
                rN,
                `z-tooltip bg-surface-tooltip-neutral rounded-sm px-xs py-xxs
              leading-tight left-0 mt-xxs absolute top-full`,
                w ? "flex" : "hidden"
              ),
              children: l
            }
          )
        ]
      }
    );
  }
);
iN.displayName = "SearchBar";
const $m = S.createContext(null), cN = () => {
  const e = S.useContext($m);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, lN = oe(
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
), Fm = S.forwardRef(
  ({
    name: e,
    value: t,
    defaultValue: n,
    onValueChange: r,
    invalid: o = !1,
    disabled: a = !1,
    id: s,
    className: i,
    children: l,
    ...d
  }, u) => {
    const f = S.useId(), p = s ?? `segmented-control-${f}`, h = t !== void 0, [x, v] = S.useState(n), g = h ? t : x, w = S.useCallback(
      (y) => {
        h || v(y), r == null || r(y);
      },
      [h, r]
    ), b = S.useMemo(
      () => ({
        name: e,
        idPrefix: p,
        value: g,
        disabled: a,
        invalid: o,
        onValueChange: w
      }),
      [e, p, g, a, o, w]
    );
    return /* @__PURE__ */ c.jsx($m.Provider, { value: b, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: u,
        id: s,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": a || void 0,
        className: A(lN({ invalid: o }), i),
        ...d,
        children: l
      }
    ) });
  }
);
Fm.displayName = "SegmentedControl.Group";
const dN = oe(
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
), Lm = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: a
}) => {
  const s = cN(), i = s.value !== void 0 && String(s.value) === String(e), l = t || s.disabled, d = r ?? `${s.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: d,
      className: A(dN({ selected: i, disabled: l }), o),
      children: [
        /* @__PURE__ */ c.jsx(
          "input",
          {
            id: d,
            type: "radio",
            name: s.name,
            value: String(e),
            checked: i,
            disabled: l,
            "aria-invalid": s.invalid || void 0,
            onChange: () => s.onValueChange(e),
            className: "sr-only"
          }
        ),
        n && De(n, { size: 16, className: "shrink-0" }),
        a
      ]
    }
  );
};
Lm.displayName = "SegmentedControl.Option";
const s4 = {
  Group: Fm,
  Option: Lm
}, Wm = co(void 0), Vm = co(!1), uN = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = S.useState(e), o = S.useCallback(() => {
    r((s) => !s);
  }, []), a = S.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ c.jsx(Wm.Provider, { value: a, children: t });
}, fN = ({
  children: e
}) => /* @__PURE__ */ c.jsx(Vm.Provider, { value: !0, children: e }), gr = () => {
  const e = qr(Wm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = qr(Vm);
  return { ...e, isInFooter: t };
}, Bm = S.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: a, toggleCollapsed: s } = gr(), i = a ? n : t, l = /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: o,
      className: A(
        `p-xxs bg-surface-primary text-interactive-primary-default top-2.5
        right-0 rounded ease-in-out z-slight absolute cursor-pointer
        transition-all duration-200`,
        e
      ),
      style: {
        transform: "translateX(50%)"
      },
      onClick: s,
      ...r,
      children: a ? /* @__PURE__ */ c.jsx(Np, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Sp, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ c.jsx(At, { content: i, side: "right", delayDuration: 0, children: l }) : l;
});
Bm.displayName = "SideNavigationCollapseButton";
const mN = oe(
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
), pN = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(uN, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(zm, { ref: n, ...t }) }));
pN.displayName = "SideNavigation";
const zm = S.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    collapseLabel: s,
    expandLabel: i,
    ...l
  }, d) => {
    const { isCollapsed: u } = gr(), f = t || (u ? "collapsed" : "expanded");
    return /* @__PURE__ */ c.jsxs(
      "nav",
      {
        ref: d,
        className: A(
          mN({ width: f }),
          "group",
          e
        ),
        "data-cc-side-navigation": "",
        "data-collapsed": f === "collapsed",
        ...l,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: A(
                "p-sm",
                u ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(fN, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(
            Bm,
            {
              collapseLabel: s,
              expandLabel: i
            }
          )
        ]
      }
    );
  }
);
zm.displayName = "SideNavigationContent";
const hN = oe(
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
), vN = S.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    label: o,
    tooltipLabel: a,
    children: s,
    disabled: i,
    ...l
  }, d) => {
    const { isCollapsed: u, isInFooter: f } = gr(), p = r ? kn : "button", h = i ? "disabled" : t, x = /* @__PURE__ */ c.jsx(
      p,
      {
        ref: d,
        className: A(
          hN({
            variant: h,
            size: n,
            collapsed: u
          }),
          !f && "font-bold",
          e
        ),
        disabled: i,
        ...l,
        children: s || o
      }
    );
    return u && a ? /* @__PURE__ */ c.jsx(At, { content: a, side: "right", delayDuration: 0, children: x }) : x;
  }
);
vN.displayName = "SideNavigationItem";
const gN = oe("flex flex-col", {
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
}), xN = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = gr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: A(
        gN({ isCollapsed: s, isLast: r }),
        e
      ),
      ...o,
      children: [
        t && !s && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `text-body-secondary px-xxs py-xxs mb-xxs text-xs
            font-medium leading-none`,
            children: t
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "space-y-xxxs w-full", children: n })
      ]
    }
  );
});
xN.displayName = "SideNavigationSection";
const bN = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", yN = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", i4 = () => {
  const { isCollapsed: e } = gr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: bN,
        alt: "SDS管理",
        className: `h-auto w-[5.8125rem] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: yN,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, wN = oe(
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
), CN = oe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), c4 = ({
  children: e,
  className: t,
  level: n,
  customColor: r,
  size: o = "md",
  onRemove: a,
  indicator: s
}) => {
  const i = !!s;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: A(
        wN({
          size: o,
          hasRemove: !!a,
          hasIndicator: i,
          level: s ? void 0 : n,
          indicator: s
        }),
        t
      ),
      style: !s && r ? {
        backgroundColor: `var(${r})`
      } : void 0,
      children: [
        i && s && /* @__PURE__ */ c.jsx("div", { className: CN({ indicator: s }) }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: e }),
        !!a && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: A(
              `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
            items-center justify-center rounded-full`
            ),
            onClick: a,
            children: /* @__PURE__ */ c.jsxs(
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
                  /* @__PURE__ */ c.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ c.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ]
              }
            )
          }
        )
      ]
    }
  );
}, SN = S.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...a
  }, s) => {
    const i = S.useMemo(() => n !== void 0 ? t.map((l, d) => ({
      ...l,
      status: d < n ? "completed" : d === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ c.jsx(
      Hm,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: A("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A(
                    `relative box-content flex items-center justify-center
                      rounded-full transition-colors`,
                    l.status === "completed" ? `bg-shape-interactive-primary-default
                          text-interactive-inverse size-4.5` : void 0,
                    l.status === "active" ? `bg-shape-interactive-primary-default
                          text-interactive-inverse
                          ring-shape-interactive-primary-active/20 size-2.5
                          ring-4` : void 0,
                    l.status === "upcoming" ? `bg-shape-interactive-disabled text-body-primary
                          size-2.5` : void 0
                  ),
                  children: l.status === "completed" && /* @__PURE__ */ c.jsx(
                    fc,
                    {
                      className: "text-interactive-inverse h-2.5 w-2.5"
                    }
                  )
                }
              )
            }
          ),
          r && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: A(
                `max-w-20 mt-1.5 absolute top-full min-w-max text-center
                      break-words transition-colors`,
                l.status === "completed" || l.status === "active" ? "text-body-primary font-medium" : void 0,
                l.status === "upcoming" ? "text-body-primary" : void 0
              ),
              children: l.label
            }
          )
        ] }),
        d < i.length - 1 && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: A(
              "h-0.25 flex-1 transition-colors",
              l.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, l.id)) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "h-8" })
    ] });
  }
), Hm = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((h) => h.status === "active"), i = Math.max(
    0,
    Math.min(s, a - 1)
  ), l = t[i] || t[0], d = a > 0 ? (i + 1) / a * 100 : 0, u = 2 * Math.PI * 24, f = u, p = u - d / 100 * u;
  return /* @__PURE__ */ c.jsx("div", { ref: o, className: A("space-y-6", e), ...r, children: /* @__PURE__ */ c.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
    /* @__PURE__ */ c.jsx("div", { className: "h-13 w-13 flex flex-shrink-0", children: /* @__PURE__ */ c.jsxs("div", { className: "relative h-full w-full", children: [
      /* @__PURE__ */ c.jsxs(
        "svg",
        {
          width: "52",
          height: "52",
          viewBox: "0 0 52 52",
          className: "-rotate-90 transform",
          children: [
            /* @__PURE__ */ c.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                className: "stroke-shape-accent-gray-soft stroke-[4]"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "circle",
              {
                cx: "26",
                cy: "26",
                r: "24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeDasharray: f,
                strokeDashoffset: p,
                strokeLinecap: "round",
                className: `text-interactive-primary-default ease-in-out
                  transition-all duration-500`
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c.jsx("div", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ c.jsxs(
        "svg",
        {
          width: "24",
          height: "20",
          viewBox: "0 0 24 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ c.jsx(
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
            /* @__PURE__ */ c.jsx(
              "path",
              {
                d: "M17.5 6.5L11 18",
                stroke: "currentColor",
                className: "text-shape-accent-gray-soft stroke-1"
              }
            ),
            /* @__PURE__ */ c.jsx(
              "text",
              {
                x: "19.5",
                y: "14",
                fill: "currentColor",
                dominantBaseline: "central",
                textAnchor: "middle",
                className: "text-body-secondary text-sm font-normal",
                children: a
              }
            )
          ]
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "gap-xxxs flex w-auto flex-col items-start justify-center",
        children: l && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            "span",
            {
              className: "text-lg font-bold text-body-primary leading-[1.2]",
              children: l.title || l.label
            }
          ),
          l.description && /* @__PURE__ */ c.jsx(
            "p",
            {
              className: `text-md font-normal text-body-primary
                    leading-[1.5]`,
              children: l.description
            }
          )
        ] })
      }
    )
  ] }) });
});
Hm.displayName = "RadialStepper";
SN.displayName = "Stepper";
const kN = m.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    ty,
    {
      ref: o,
      id: a,
      "data-slot": "switch",
      className: A(
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
      children: /* @__PURE__ */ c.jsx(
        ny,
        {
          "data-slot": "switch-thumb",
          className: A(
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
  return t ? /* @__PURE__ */ c.jsxs("div", { className: "gap-3 flex items-center", children: [
    s,
    /* @__PURE__ */ c.jsx(
      "label",
      {
        htmlFor: a,
        className: "text-body-primary font-semibold cursor-pointer select-none",
        children: t
      }
    )
  ] }) : s;
});
kN.displayName = "Switch";
const Za = {
  loading: !1,
  loadingText: "ローディング中…"
}, Ym = S.createContext(
  Za
), Gm = () => S.useContext(Ym), NN = S.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Za.loading,
    loadingText: r = Za.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(Ym.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
      "table",
      {
        ref: a,
        className: A(
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
NN.displayName = "Table";
const MN = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Gm(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: A(
          "text-sm bg-surface-tertiary top-0 z-slight sticky",
          e
        ),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            Bo.Linear,
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
MN.displayName = "TableHeader";
const Km = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ c.jsx(
  "td",
  {
    className: `py-sm min-h-12 sticky
        left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] block w-fit
        text-center align-middle`,
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: A(
          "flex w-max -translate-x-1/2 transform items-center",
          e
        ),
        children: t
      }
    )
  }
) }));
Km.displayName = "TableCoverMessage";
const EN = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Gm(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx(Km, { className: "text-body-secondary", children: d }) : r });
  }
);
EN.displayName = "TableBody";
const PN = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
PN.displayName = "TableFooter";
const RN = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: A(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
RN.displayName = "TableRow";
const AN = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: A(
      `text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
AN.displayName = "TableHead";
const DN = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: A(
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
      e
    ),
    ...t
  }
));
DN.displayName = "TableCell";
const jN = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
jN.displayName = "TableCaption";
const l4 = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  "button",
  {
    ref: r,
    className: A(
      `text-body-secondary bg-interactive-neutral-default
      border-interactive-default size-6 inline-flex cursor-pointer items-center
      justify-center border focus:outline-none`,
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Sort" }),
      /* @__PURE__ */ c.jsxs(
        "svg",
        {
          className: "size-4",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ c.jsxs("g", { clipPath: "url(#clip0_24993_1396)", children: [
              /* @__PURE__ */ c.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.19542 2.66377C4.45577 2.40342 4.87788 2.40342 5.13823 2.66377L7.8049 5.33043C8.06525 5.59078 8.06525 6.01289 7.8049 6.27324C7.54455 6.53359 7.12244 6.53359 6.86209 6.27324L5.3335 4.74465V12.4685C5.3335 12.8367 5.03502 13.1352 4.66683 13.1352C4.29864 13.1352 4.00016 12.8367 4.00016 12.4685V4.74465L2.47157 6.27324C2.21122 6.53359 1.78911 6.53359 1.52876 6.27324C1.26841 6.01289 1.26841 5.59078 1.52876 5.33043L4.19542 2.66377Z",
                  fill: e === "asc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.3333 2.46851C11.7015 2.46851 12 2.76698 12 3.13517V10.859L13.5286 9.33043C13.7889 9.07009 14.2111 9.07009 14.4714 9.33043C14.7318 9.59078 14.7318 10.0129 14.4714 10.2732L11.8047 12.9399C11.5444 13.2003 11.1223 13.2003 10.8619 12.9399L8.19526 10.2732C7.93491 10.0129 7.93491 9.59078 8.19526 9.33043C8.45561 9.07009 8.87772 9.07009 9.13807 9.33043L10.6667 10.859V3.13517C10.6667 2.76698 10.9651 2.46851 11.3333 2.46851Z",
                  fill: e === "desc" ? "var(--color-shape-interactive-primary-default)" : e === void 0 ? "var(--color-shape-light)" : "var(--color-shape-interactive-disabled)"
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_24993_1396", children: /* @__PURE__ */ c.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
          ]
        }
      )
    ]
  }
)), ON = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: r,
    className: A(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: A(
          // Position at right edge of row, vertically centered
          "right-0 top-0 bottom-0 absolute flex items-center",
          // Padding for content spacing, max-content width
          "pr-md pl-16 w-max",
          // Z-index above other cells
          "z-slight",
          // Visibility control
          e ? "opacity-100" : "opacity-0 transition-opacity group-hover:opacity-100",
          t
        ),
        style: {
          background: "linear-gradient(to right, transparent 0rem, var(--token-color-background-interactive-neutral-hover) 3rem, var(--token-color-background-interactive-neutral-hover) 100%)"
        },
        children: /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex items-center", children: n })
      }
    )
  }
));
ON.displayName = "TableRowOverlay";
const _N = oe("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), TN = oe(
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
), IN = oe(
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
function $N() {
  const [e, t] = S.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return S.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function FN(e) {
  const t = [];
  return S.Children.forEach(e, (n) => {
    S.isValidElement(n) && n.type === Um && t.push(n);
  }), t;
}
const LN = S.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, a) => {
  const s = t ?? "normal", i = $N(), l = S.useRef(null), d = S.useRef(null), u = S.useRef(/* @__PURE__ */ new Map()), f = S.useRef(/* @__PURE__ */ new Map()), p = S.useMemo(() => FN(n), [n]), [h, x] = S.useState(p.length), [v, g] = S.useState(!1), w = S.useCallback(() => {
    if (!i) {
      x(p.length), g(!0);
      return;
    }
    const N = l.current;
    if (!N) return;
    u.current.forEach(($, H) => {
      const V = $.offsetWidth;
      V > 0 && f.current.set(H, V);
    });
    const k = N.clientWidth, O = d.current, T = O ? O.offsetWidth + 8 : 80;
    let F = 0;
    for (const $ of p)
      F += f.current.get($.props.value) ?? 0;
    if (F <= k) {
      x(p.length), g(!0);
      return;
    }
    let W = 0, Y = 0;
    for (const $ of p) {
      const H = f.current.get($.props.value) ?? 0;
      if (W + H + T <= k)
        W += H, Y++;
      else
        break;
    }
    x(Math.max(Y, 1)), g(!0);
  }, [p, i]);
  S.useEffect(() => {
    const N = l.current;
    if (!N) return;
    const k = new ResizeObserver(() => {
      w();
    });
    return k.observe(N), w(), () => k.disconnect();
  }, [w]);
  const b = p.slice(h), y = b.length > 0, M = o.value ?? o.defaultValue, C = b.some(
    (N) => N.props.value === M
  ), P = r ?? ((N) => `${N} more`);
  return /* @__PURE__ */ c.jsx(sy, { ref: a, className: A("w-full", e), ...o, children: /* @__PURE__ */ c.jsxs(
    iy,
    {
      ref: l,
      className: A(
        _N({ size: s }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        p.map(
          (N, k) => S.cloneElement(N, {
            key: N.props.value,
            size: s,
            ref: (O) => {
              O ? u.current.set(N.props.value, O) : u.current.delete(N.props.value);
            },
            className: A(
              N.props.className,
              v && k >= h && "hidden"
            )
          })
        ),
        y && v && /* @__PURE__ */ c.jsx("div", { ref: d, className: "inline-flex shrink-0", children: /* @__PURE__ */ c.jsxs(Hs, { children: [
          /* @__PURE__ */ c.jsx(Ys, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              className: A(
                IN({ size: s }),
                C && "font-bold text-interactive-primary-default"
              ),
              children: [
                /* @__PURE__ */ c.jsx(
                  wp,
                  {
                    size: s === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                P(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ c.jsx(zs, { align: "end", size: "sm", children: b.map((N) => {
            const { value: k, disabled: O, asChild: T, children: F } = N.props, W = A(
              k === M && "font-bold text-interactive-primary-default"
            );
            return T && S.isValidElement(F) ? /* @__PURE__ */ c.jsx(
              Ha,
              {
                disabled: O ?? !1,
                asChild: !0,
                className: W,
                children: F
              },
              k
            ) : /* @__PURE__ */ c.jsx(
              Ha,
              {
                disabled: O ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(k);
                },
                className: W,
                children: F
              },
              k
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
LN.displayName = "TabBar";
const Um = S.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ c.jsx(
    cy,
    {
      ref: r,
      className: A(TN({ size: o }), e),
      ...n
    }
  );
});
Um.displayName = "Tab";
const WN = oe(
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
), VN = S.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const {
      onKeyDown: s,
      onKeyUp: i,
      onCompositionStart: l,
      onCompositionEnd: d,
      onChange: u,
      value: f,
      ...p
    } = o, [h, x] = We(o.value);
    Qt(() => {
      x(o.value);
    }, [o.value]);
    const { compositionHandlers: v, guardKeyHandler: g } = Yo(), w = (M) => {
      v.onCompositionStart(M), l == null || l(M);
    }, b = (M) => {
      v.onCompositionEnd(M), d == null || d(M);
    }, y = (M) => {
      if (n && M.target.value.length > n) {
        M.preventDefault();
        return;
      }
      x(M.target.value), u && u(M);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          ref: a,
          className: A(WN({ invalid: e }), t),
          ...p,
          value: h,
          onChange: y,
          onKeyDown: g(s),
          onKeyUp: g(i),
          onCompositionStart: w,
          onCompositionEnd: b
        }
      ),
      !!(n && r) && /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        (h == null ? void 0 : h.toString().length) || 0,
        "/",
        n
      ] })
    ] });
  }
);
VN.displayName = "TextArea";
const d4 = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  Py,
  {
    open: n,
    onOpenChange: r,
    className: `border-surface-default bg-surface-primary p-sm
        text-body-primary shadow-high w-96 rounded
        data-[state=open]:animate-slide-in data-[state=closed]:animate-hide
        data-[swipe=end]:animate-swipe-out data-[swipe=cancel]:translate-x-0
        border-1 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
        data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]`,
    children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-start justify-between", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-start", children: [
        /* @__PURE__ */ c.jsxs("div", { children: [
          o === "success" && /* @__PURE__ */ c.jsx(
            gc,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            oi,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            oi,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Br, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            Ry,
            {
              className: A("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ c.jsx(
                "h5",
                {
                  className: A("text-md leading-none", {
                    "mb-xs": !!e
                  }),
                  children: t
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(Ay, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(Dy, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(Ca, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), u4 = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(My, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    Ey,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), BN = oe(
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
), zN = S.forwardRef(
  ({
    className: e,
    size: t,
    state: n,
    onFileSelect: r,
    accept: o,
    multiple: a = !1,
    disabled: s = !1,
    progress: i,
    fileName: l,
    fileSize: d,
    errorMessage: u,
    successMessage: f,
    onFileRemove: p,
    dragDropText: h = "ここにドラッグ&ドロップ",
    orText: x = "または",
    selectFileText: v = "ファイルを選択",
    dropFilesText: g = "ここにファイルをドロップ",
    uploadingText: w = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: y = "アップロードに失敗しました",
    ...M
  }, C) => {
    const [P, N] = We(!1), k = Rt(null), O = ve(
      (E) => {
        E.preventDefault(), E.stopPropagation(), P || N(!0);
      },
      [P]
    ), T = ve((E) => {
      E.preventDefault(), E.stopPropagation(), N(!1);
    }, []), F = ve((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), W = ve(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), N(!1), s) return;
        const I = E.dataTransfer.files;
        I && I.length > 0 && (r == null || r(I));
      },
      [s, r]
    ), Y = ve(() => {
      var E;
      s || (E = k.current) == null || E.click();
    }, [s]), $ = ve(
      (E) => {
        const I = E.target.files;
        I && I.length > 0 && (r == null || r(I));
      },
      [r]
    ), H = P ? "dragging" : n, V = () => /* @__PURE__ */ c.jsx(
      bp,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), U = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: h }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Pe,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: ai,
          onClick: (E) => {
            E.stopPropagation(), Y();
          },
          children: v
        }
      )
    ] }), j = () => /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      V(),
      /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        g,
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Pe,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: ai,
          onClick: (E) => {
            E.stopPropagation(), Y();
          },
          children: v
        }
      )
    ] }), _ = () => {
      const E = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return H === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary flex", children: [
            /* @__PURE__ */ c.jsxs("span", { children: [
              "（",
              d || "12kb",
              "）"
            ] }),
            /* @__PURE__ */ c.jsx("span", { children: w })
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "w-full", children: /* @__PURE__ */ c.jsx(
          Bo.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : H === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (I) => {
                I.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(_p, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            gp,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: f || b })
        ] })
      ] }) : H === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || E }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(cp, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: u || y })
        ] })
      ] }) : null;
    }, te = () => t === "small" ? U() : j(), R = () => /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: O,
        onDragLeave: T,
        onDragOver: F,
        onDrop: W
      }
    );
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          ref: C,
          className: A(
            "relative",
            BN({ size: t, state: H, disabled: s }),
            e
          ),
          onClick: Y,
          role: "button",
          tabIndex: s ? -1 : 0,
          "aria-disabled": s,
          ...M,
          children: [
            /* @__PURE__ */ c.jsx(
              "input",
              {
                ref: k,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: a,
                onChange: $,
                disabled: s
              }
            ),
            R(),
            te()
          ]
        }
      ),
      (H === "inProgress" && i !== void 0 || H === "success" || H === "error") && _()
    ] });
  }
);
zN.displayName = "FileUploader";
export {
  ZN as Accordion,
  XN as AccountMenu,
  Sm as AutoSuggest,
  $w as Badge,
  Ww as Breadcrumbs,
  Pe as Button,
  am as Calendar,
  PS as Callout,
  Gr as Checkbox,
  DS as CheckboxGroup,
  OS as ChoiceChip,
  _S as ChoiceChipGroup,
  JN as DataSheet,
  xm as DataSheetAction,
  im as DataSheetHeader,
  lm as DataSheetKeyValue,
  cm as DataSheetSection,
  mm as DataSheetTable,
  gm as DataSheetTableActionsCell,
  hm as DataSheetTableBody,
  io as DataSheetTableCell,
  pm as DataSheetTableHeader,
  vm as DataSheetTableRow,
  XS as DatePicker,
  e4 as Dialog,
  Hs as Dropdown,
  zs as DropdownContent,
  Ha as DropdownItem,
  Iw as DropdownLabel,
  Tw as DropdownSeparator,
  Ys as DropdownTrigger,
  zN as FileUploader,
  fN as FooterProvider,
  n4 as FormField,
  i4 as Logo,
  zk as MultiSelect,
  t4 as MultiStepDialog,
  Uk as Pagination,
  Bo as ProgressIndicator,
  o4 as RadioButton,
  a4 as RadioButtonGroup,
  iN as SearchBar,
  s4 as SegmentedControl,
  Xa as Select,
  pN as SideNavigation,
  Bm as SideNavigationCollapseButton,
  vN as SideNavigationItem,
  uN as SideNavigationProvider,
  xN as SideNavigationSection,
  c4 as StatusIndicator,
  SN as Stepper,
  kN as Switch,
  Um as Tab,
  LN as TabBar,
  NN as Table,
  EN as TableBody,
  jN as TableCaption,
  DN as TableCell,
  Km as TableCoverMessage,
  PN as TableFooter,
  AN as TableHead,
  l4 as TableHeadSortButton,
  MN as TableHeader,
  RN as TableRow,
  ON as TableRowOverlay,
  Ka as Tag,
  km as TagInput,
  VN as TextArea,
  r4 as TextField,
  Ga as TextLink,
  d4 as ToastItem,
  u4 as ToastProvider,
  At as Tooltip,
  QN as TooltipProvider,
  hk as colorCodeToTokenMap,
  rk as focusFirstTextField,
  Kn as iconVariants,
  KS as inputVariants,
  bm as inputWrapperVariants,
  gr as useSideNavigation
};
