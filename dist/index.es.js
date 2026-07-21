import * as m from "react";
import k, { forwardRef as Wm, createElement as Yo, useState as We, useLayoutEffect as tc, createContext as Jr, useContext as Wr, useCallback as he, useRef as Ct, useEffect as Ht, useMemo as jr } from "react";
import * as Gn from "react-dom";
import Vm from "react-dom";
var gr = { exports: {} }, An = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hs;
function Bm() {
  if (Hs) return An;
  Hs = 1;
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
  return An.Fragment = t, An.jsx = n, An.jsxs = n, An;
}
var Dn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ys;
function zm() {
  return Ys || (Ys = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case S:
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
          case N:
            return R.displayName || "Context";
          case y:
            return (R._context.displayName || "Context") + ".Consumer";
          case C:
            var E = R.render;
            return R = R.displayName, R || (R = E.displayName || E.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case M:
            return E = R.displayName || null, E !== null ? E : e(R.type) || "Memo";
          case _:
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
        var I = E.error, V = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return I.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === _)
        return "<...>";
      try {
        var E = e(R);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = L.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (H.call(R, "key")) {
        var E = Object.getOwnPropertyDescriptor(R, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, E) {
      function I() {
        W || (W = !0, console.error(
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
      return q[R] || (q[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, E, I, V, Y, K) {
      var D = I.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: E,
        props: I,
        _owner: V
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
        value: Y
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, E, I, V, Y, K) {
      var D = E.children;
      if (D !== void 0)
        if (V)
          if (O(D)) {
            for (V = 0; V < D.length; V++)
              f(D[V]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (H.call(E, "key")) {
        D = e(R);
        var Q = Object.keys(E).filter(function(se) {
          return se !== "key";
        });
        V = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", ne[D + V] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          D,
          Q,
          D
        ), ne[D + V] = !0);
      }
      if (D = null, I !== void 0 && (n(I), D = "" + I), s(E) && (n(E.key), D = "" + E.key), "key" in E) {
        I = {};
        for (var J in E)
          J !== "key" && (I[J] = E[J]);
      } else I = E;
      return D && i(
        I,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        D,
        I,
        o(),
        Y,
        K
      );
    }
    function f(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === _ && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = k, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), N = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), L = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, O = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var W, q = {}, j = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), $ = z(r(a)), ne = {};
    Dn.Fragment = g, Dn.jsx = function(R, E, I) {
      var V = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        R,
        E,
        I,
        !1,
        V ? Error("react-stack-top-frame") : j,
        V ? z(r(R)) : $
      );
    }, Dn.jsxs = function(R, E, I) {
      var V = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        R,
        E,
        I,
        !0,
        V ? Error("react-stack-top-frame") : j,
        V ? z(r(R)) : $
      );
    };
  })()), Dn;
}
var Gs;
function Hm() {
  return Gs || (Gs = 1, process.env.NODE_ENV === "production" ? gr.exports = Bm() : gr.exports = zm()), gr.exports;
}
var c = Hm();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ym = {
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
const Ce = (e, t, n, r) => {
  const o = Wm(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: u, ...f }, p) => Yo(
      "svg",
      {
        ref: p,
        ...Ym[e],
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
        l && Yo("title", { key: "svg-title" }, l),
        ...r.map(([h, x]) => Yo(h, x)),
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
const Gm = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Km = Ce("outline", "alert-circle", "AlertCircle", Gm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], qm = Ce("outline", "calendar-event", "CalendarEvent", Um);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], nc = Ce("outline", "check", "Check", Xm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], eo = Ce("outline", "chevron-down", "ChevronDown", Zm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Jm = Ce("outline", "chevron-left", "ChevronLeft", Qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], rc = Ce("outline", "chevron-right", "ChevronRight", ep);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], np = Ce("outline", "circle-check", "CircleCheck", tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], op = Ce("outline", "cloud-up", "CloudUp", rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], sp = Ce("outline", "dots-vertical", "DotsVertical", ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], cp = Ce("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], dp = Ce("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", lp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], fp = Ce("outline", "loader", "Loader", up);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M5 12l14 0", key: "svg-0" }]], pp = Ce("outline", "minus", "Minus", mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], oc = Ce("outline", "pencil", "Pencil", hp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], ac = Ce("outline", "restore", "Restore", vp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Ha = Ce("outline", "search", "Search", gp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], bp = Ce("outline", "trash-x", "TrashX", xp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], sc = Ce("outline", "trash", "Trash", yp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], Cp = Ce("outline", "user", "User", wp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], pa = Ce("outline", "x", "X", Sp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Np = Ce("filled", "alert-circle-filled", "AlertCircleFilled", kp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], ic = Ce("filled", "circle-check-filled", "CircleCheckFilled", Ep);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Ks = Ce("filled", "exclamation-circle-filled", "ExclamationCircleFilled", Mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Us = Ce("filled", "folder-filled", "FolderFilled", Pp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Or = Ce("filled", "info-circle-filled", "InfoCircleFilled", Rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], Dp = Ce("filled", "lock-filled", "LockFilled", Ap);
function qs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function kt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = qs(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : qs(e[o], null);
        }
      };
  };
}
function de(...e) {
  return m.useCallback(kt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  const t = /* @__PURE__ */ jp(e), n = m.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = m.Children.toArray(a), l = i.find(_p);
    if (l) {
      const d = l.props.children, u = i.map((f) => f === l ? m.Children.count(d) > 1 ? m.Children.only(null) : m.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: m.isValidElement(d) ? m.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var to = /* @__PURE__ */ Dt("Slot");
// @__NO_SIDE_EFFECTS__
function jp(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (m.isValidElement(o)) {
      const s = Tp(o), i = Ip(a, o.props);
      return o.type !== m.Fragment && (i.ref = r ? kt(r, s) : s), m.cloneElement(o, i);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var cc = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Op(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = cc, t;
}
function _p(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cc;
}
function Ip(e, t) {
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
function Tp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $p = [
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
], Z = $p.reduce((e, t) => {
  const n = /* @__PURE__ */ Dt(`Primitive.${t}`), r = m.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ya(e, t) {
  e && Gn.flushSync(() => e.dispatchEvent(t));
}
var lc = Object.freeze({
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
}), Fp = "VisuallyHidden", no = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...lc, ...e.style }
    }
  )
);
no.displayName = Fp;
var Lp = no;
function Wp(e, t) {
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
function Ie(e, t = []) {
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
  return o.scopeName = e, [r, Vp(o, ...t)];
}
function Vp(...e) {
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
function Kn(e) {
  const t = e + "CollectionProvider", [n, r] = Ie(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, b = k.useRef(null), y = k.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Dt(i), d = k.forwardRef(
    (v, g) => {
      const { scope: w, children: b } = v, y = a(i, w), N = de(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: N, children: b });
    }
  );
  d.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Dt(u), h = k.forwardRef(
    (v, g) => {
      const { scope: w, children: b, ...y } = v, N = k.useRef(null), C = de(g, N), P = a(u, w);
      return k.useEffect(() => (P.itemMap.set(N, { ref: N, ...y }), () => void P.itemMap.delete(N))), /* @__PURE__ */ c.jsx(p, { [f]: "", ref: C, children: b });
    }
  );
  h.displayName = u;
  function x(v) {
    const g = a(e + "CollectionConsumer", v);
    return k.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (P, S) => y.indexOf(P.ref.current) - y.indexOf(S.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: h },
    x,
    r
  ];
}
function B(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var _e = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Bp = m[" useInsertionEffect ".trim().toString()] || _e;
function Ve({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = zp({
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
        const p = Hp(u) ? u(e) : u;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function zp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), a = m.useRef(t);
  return Bp(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Hp(e) {
  return typeof e == "function";
}
function Yp(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var $e = (e) => {
  const { present: t, children: n } = e, r = Gp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = de(r.ref, Kp(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
$e.displayName = "Presence";
function Gp(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Yp(s, {
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
    const d = xr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), _e(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, h = xr(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), _e(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = xr(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = xr(r.current));
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
function xr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Kp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Up = m[" useId ".trim().toString()] || (() => {
}), qp = 0;
function Ee(e) {
  const [t, n] = m.useState(Up());
  return _e(() => {
    n((r) => r ?? String(qp++));
  }, [e]), t ? `radix-${t}` : "";
}
var ro = "Collapsible", [Xp, dc] = Ie(ro), [Zp, Ga] = Xp(ro), uc = m.forwardRef(
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
      caller: ro
    });
    return /* @__PURE__ */ c.jsx(
      Zp,
      {
        scope: n,
        disabled: a,
        contentId: Ee(),
        open: l,
        onOpenToggle: m.useCallback(() => d((u) => !u), [d]),
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            "data-state": Ua(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
uc.displayName = ro;
var fc = "CollapsibleTrigger", mc = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Ga(fc, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ua(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
  }
);
mc.displayName = fc;
var Ka = "CollapsibleContent", pc = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ga(Ka, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx($e, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(Qp, { ...r, ref: t, present: a }) });
  }
);
pc.displayName = Ka;
var Qp = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Ga(Ka, n), [i, l] = m.useState(r), d = m.useRef(null), u = de(t, d), f = m.useRef(0), p = f.current, h = m.useRef(0), x = h.current, v = s.open || i, g = m.useRef(v), w = m.useRef(void 0);
  return m.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), _e(() => {
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
    Z.div,
    {
      "data-state": Ua(s.open),
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
function Ua(e) {
  return e ? "open" : "closed";
}
var Jp = uc, eh = mc, th = pc, nh = m.createContext(void 0);
function bn(e) {
  const t = m.useContext(nh);
  return e || t || "ltr";
}
var rt = "Accordion", rh = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [qa, oh, ah] = Kn(rt), [oo] = Ie(rt, [
  ah,
  dc
]), Xa = dc(), hc = k.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(qa.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(lh, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(ch, { ...o, ref: t }) });
  }
);
hc.displayName = rt;
var [vc, sh] = oo(rt), [gc, ih] = oo(
  rt,
  { collapsible: !1 }
), ch = k.forwardRef(
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
      caller: rt
    });
    return /* @__PURE__ */ c.jsx(
      vc,
      {
        scope: e.__scopeAccordion,
        value: k.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: k.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(gc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(xc, { ...s, ref: t }) })
      }
    );
  }
), lh = k.forwardRef((e, t) => {
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
    caller: rt
  }), l = k.useCallback(
    (u) => i((f = []) => [...f, u]),
    [i]
  ), d = k.useCallback(
    (u) => i((f = []) => f.filter((p) => p !== u)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    vc,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(gc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(xc, { ...a, ref: t }) })
    }
  );
}), [dh, ao] = oo(rt), xc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = k.useRef(null), l = de(i, t), d = oh(n), f = bn(o) === "ltr", p = B(e.onKeyDown, (h) => {
      var M;
      if (!rh.includes(h.key)) return;
      const x = h.target, v = d().filter((_) => {
        var T;
        return !((T = _.ref.current) != null && T.disabled);
      }), g = v.findIndex((_) => _.ref.current === x), w = v.length;
      if (g === -1) return;
      h.preventDefault();
      let b = g;
      const y = 0, N = w - 1, C = () => {
        b = g + 1, b > N && (b = y);
      }, P = () => {
        b = g - 1, b < y && (b = N);
      };
      switch (h.key) {
        case "Home":
          b = y;
          break;
        case "End":
          b = N;
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
      const S = b % w;
      (M = v[S].ref.current) == null || M.focus();
    });
    return /* @__PURE__ */ c.jsx(
      dh,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(qa.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Z.div,
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
), Vr = "AccordionItem", [uh, Za] = oo(Vr), bc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = ao(Vr, n), s = sh(Vr, n), i = Xa(n), l = Ee(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      uh,
      {
        scope: n,
        open: d,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          Jp,
          {
            "data-orientation": a.orientation,
            "data-state": Nc(d),
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
bc.displayName = Vr;
var yc = "AccordionHeader", wc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = ao(rt, n), a = Za(yc, n);
    return /* @__PURE__ */ c.jsx(
      Z.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Nc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wc.displayName = yc;
var ha = "AccordionTrigger", Cc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = ao(rt, n), a = Za(ha, n), s = ih(ha, n), i = Xa(n);
    return /* @__PURE__ */ c.jsx(qa.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      eh,
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
Cc.displayName = ha;
var Sc = "AccordionContent", kc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = ao(rt, n), a = Za(Sc, n), s = Xa(n);
    return /* @__PURE__ */ c.jsx(
      th,
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
kc.displayName = Sc;
function Nc(e) {
  return e ? "open" : "closed";
}
var Xs = hc, fh = bc, mh = wc, ph = Cc, hh = kc;
function ze(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function vh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var gh = "DismissableLayer", va = "dismissableLayer.update", xh = "dismissableLayer.pointerDownOutside", bh = "dismissableLayer.focusOutside", Zs, Ec = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xt = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = m.useContext(Ec), [u, f] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), x = de(t, (S) => f(S)), v = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), b = u ? v.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, N = b >= w, C = wh((S) => {
      const M = S.target, _ = [...d.branches].some((T) => T.contains(M));
      !N || _ || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p), P = Ch((S) => {
      const M = S.target;
      [...d.branches].some((T) => T.contains(M)) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p);
    return vh((S) => {
      b === d.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Zs = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Qs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Zs);
        };
    }, [u, p, n, d]), m.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Qs());
    }, [u, d]), m.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(va, S), () => document.removeEventListener(va, S);
    }, []), /* @__PURE__ */ c.jsx(
      Z.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? N ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: B(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: B(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: B(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Xt.displayName = gh;
var yh = "DismissableLayerBranch", Mc = m.forwardRef((e, t) => {
  const n = m.useContext(Ec), r = m.useRef(null), o = de(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Z.div, { ...e, ref: o });
});
Mc.displayName = yh;
function wh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Pc(
            xh,
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
function Ch(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ze(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Pc(bh, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qs() {
  const e = new CustomEvent(va);
  document.dispatchEvent(e);
}
function Pc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ya(o, a) : o.dispatchEvent(a);
}
var Sh = Xt, kh = Mc, Go = "focusScope.autoFocusOnMount", Ko = "focusScope.autoFocusOnUnmount", Js = { bubbles: !1, cancelable: !0 }, Nh = "FocusScope", Un = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = m.useState(null), d = ze(o), u = ze(a), f = m.useRef(null), p = de(t, (v) => l(v)), h = m.useRef({
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
        const N = y.target;
        i.contains(N) ? f.current = N : Rt(f.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !i) return;
        const N = y.relatedTarget;
        N !== null && (i.contains(N) || Rt(f.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && Rt(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, h.paused]), m.useEffect(() => {
    if (i) {
      ti.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const w = new CustomEvent(Go, Js);
        i.addEventListener(Go, d), i.dispatchEvent(w), w.defaultPrevented || (Eh(Dh(Rc(i)), { select: !0 }), document.activeElement === v && Rt(i));
      }
      return () => {
        i.removeEventListener(Go, d), setTimeout(() => {
          const w = new CustomEvent(Ko, Js);
          i.addEventListener(Ko, u), i.dispatchEvent(w), w.defaultPrevented || Rt(v ?? document.body, { select: !0 }), i.removeEventListener(Ko, u), ti.remove(h);
        }, 0);
      };
    }
  }, [i, d, u, h]);
  const x = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const b = v.currentTarget, [y, N] = Mh(b);
        y && N ? !v.shiftKey && w === N ? (v.preventDefault(), n && Rt(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && Rt(N, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(Z.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
Un.displayName = Nh;
function Eh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, { select: t }), document.activeElement !== n) return;
}
function Mh(e) {
  const t = Rc(e), n = ei(t, e), r = ei(t.reverse(), e);
  return [n, r];
}
function Rc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ei(e, t) {
  for (const n of e)
    if (!Ph(n, { upTo: t })) return n;
}
function Ph(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Rh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Rh(e) && t && e.select();
  }
}
var ti = Ah();
function Ah() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ni(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ni(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ni(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Dh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var jh = "Portal", Zt = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  _e(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Vm.createPortal(/* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t }), s) : null;
});
Zt.displayName = jh;
var Uo = 0;
function so() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ri()), document.body.insertAdjacentElement("beforeend", e[1] ?? ri()), Uo++, () => {
      Uo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Uo--;
    };
  }, []);
}
function ri() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var it = function() {
  return it = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, it.apply(this, arguments);
};
function Ac(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Oh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var _r = "right-scroll-bar-position", Ir = "width-before-scroll-bar", _h = "with-scroll-bars-hidden", Ih = "--removed-body-scroll-bar-size";
function qo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Th(e, t) {
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
var $h = typeof window < "u" ? m.useLayoutEffect : m.useEffect, oi = /* @__PURE__ */ new WeakMap();
function Fh(e, t) {
  var n = Th(null, function(r) {
    return e.forEach(function(o) {
      return qo(o, r);
    });
  });
  return $h(function() {
    var r = oi.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || qo(i, null);
      }), a.forEach(function(i) {
        o.has(i) || qo(i, s);
      });
    }
    oi.set(n, e);
  }, [e]), n;
}
function Lh(e) {
  return e;
}
function Wh(e, t) {
  t === void 0 && (t = Lh);
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
function Vh(e) {
  e === void 0 && (e = {});
  var t = Wh(null);
  return t.options = it({ async: !0, ssr: !1 }, e), t;
}
var Dc = function(e) {
  var t = e.sideCar, n = Ac(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, it({}, n));
};
Dc.isSideCarExport = !0;
function Bh(e, t) {
  return e.useMedium(t), Dc;
}
var jc = Vh(), Xo = function() {
}, io = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Xo,
    onWheelCapture: Xo,
    onTouchMoveCapture: Xo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, N = Ac(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, P = Fh([n, t]), S = it(it({}, N), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(C, { sideCar: jc, removeScrollBar: d, shards: f, noRelative: h, noIsolation: x, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(i), it(it({}, S), { ref: P })) : m.createElement(b, it({}, S, { className: l, ref: P }), i)
  );
});
io.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
io.classNames = {
  fullWidth: Ir,
  zeroRight: _r
};
var zh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Hh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zh();
  return t && e.setAttribute("nonce", t), e;
}
function Yh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Gh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Hh()) && (Yh(t, n), Gh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Uh = function() {
  var e = Kh();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Oc = function() {
  var e = Uh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, qh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Zo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Xh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Zo(n), Zo(r), Zo(o)];
}, Zh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return qh;
  var t = Xh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Qh = Oc(), fn = "data-scroll-locked", Jh = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(_h, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(fn, `] {
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
  
  .`).concat(_r, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ir, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(_r, " .").concat(_r, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ir, " .").concat(Ir, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(fn, `] {
    `).concat(Ih, ": ").concat(i, `px;
  }
`);
}, ai = function() {
  var e = parseInt(document.body.getAttribute(fn) || "0", 10);
  return isFinite(e) ? e : 0;
}, ev = function() {
  m.useEffect(function() {
    return document.body.setAttribute(fn, (ai() + 1).toString()), function() {
      var e = ai() - 1;
      e <= 0 ? document.body.removeAttribute(fn) : document.body.setAttribute(fn, e.toString());
    };
  }, []);
}, tv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ev();
  var a = m.useMemo(function() {
    return Zh(o);
  }, [o]);
  return m.createElement(Qh, { styles: Jh(a, !t, o, n ? "" : "!important") });
}, ga = !1;
if (typeof window < "u")
  try {
    var br = Object.defineProperty({}, "passive", {
      get: function() {
        return ga = !0, !0;
      }
    });
    window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
  } catch {
    ga = !1;
  }
var on = ga ? { passive: !1 } : !1, nv = function(e) {
  return e.tagName === "TEXTAREA";
}, _c = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !nv(e) && n[t] === "visible")
  );
}, rv = function(e) {
  return _c(e, "overflowY");
}, ov = function(e) {
  return _c(e, "overflowX");
}, si = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Ic(e, r);
    if (o) {
      var a = Tc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, av = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, sv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Ic = function(e, t) {
  return e === "v" ? rv(t) : ov(t);
}, Tc = function(e, t) {
  return e === "v" ? av(t) : sv(t);
}, iv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, cv = function(e, t, n, r, o) {
  var a = iv(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var h = Tc(e, i), x = h[0], v = h[1], g = h[2], w = v - g - a * x;
    (x || w) && Ic(e, i) && (f += w, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(p) < 1) && (d = !0), d;
}, yr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ii = function(e) {
  return [e.deltaX, e.deltaY];
}, ci = function(e) {
  return e && "current" in e ? e.current : e;
}, lv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, dv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, uv = 0, an = [];
function fv(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(uv++)[0], a = m.useState(Oc)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Oh([e.lockRef.current], (e.shards || []).map(ci), !0).filter(Boolean);
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
    var w = yr(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - w[0], N = "deltaY" in v ? v.deltaY : b[1] - w[1], C, P = v.target, S = Math.abs(y) > Math.abs(N) ? "h" : "v";
    if ("touches" in v && S === "h" && P.type === "range")
      return !1;
    var M = si(S, P);
    if (!M)
      return !0;
    if (M ? C = S : (C = S === "v" ? "h" : "v", M = si(S, P)), !M)
      return !1;
    if (!r.current && "changedTouches" in v && (y || N) && (r.current = C), !C)
      return !0;
    var _ = r.current || C;
    return cv(_, g, v, _ === "h" ? y : N);
  }, []), l = m.useCallback(function(v) {
    var g = v;
    if (!(!an.length || an[an.length - 1] !== a)) {
      var w = "deltaY" in g ? ii(g) : yr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && lv(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(ci).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), N = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = m.useCallback(function(v, g, w, b) {
    var y = { name: v, delta: g, target: w, should: b, shadowParent: mv(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = yr(v), r.current = void 0;
  }, []), f = m.useCallback(function(v) {
    d(v.type, ii(v), v.target, i(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    d(v.type, yr(v), v.target, i(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return an.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, on), document.addEventListener("touchmove", l, on), document.addEventListener("touchstart", u, on), function() {
      an = an.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, on), document.removeEventListener("touchmove", l, on), document.removeEventListener("touchstart", u, on);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(a, { styles: dv(o) }) : null,
    h ? m.createElement(tv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function mv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const pv = Bh(jc, fv);
var qn = m.forwardRef(function(e, t) {
  return m.createElement(io, it({}, e, { ref: t, sideCar: pv }));
});
qn.classNames = io.classNames;
var hv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, sn = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Cr = {}, Qo = 0, $c = function(e) {
  return e && (e.host || $c(e.parentNode));
}, vv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $c(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, gv = function(e, t, n, r) {
  var o = vv(t, Array.isArray(e) ? e : [e]);
  Cr[n] || (Cr[n] = /* @__PURE__ */ new WeakMap());
  var a = Cr[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), x = h !== null && h !== "false", v = (sn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          sn.set(p, v), a.set(p, g), s.push(p), v === 1 && x && wr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), i.clear(), Qo++, function() {
    s.forEach(function(f) {
      var p = sn.get(f) - 1, h = a.get(f) - 1;
      sn.set(f, p), a.set(f, h), p || (wr.has(f) || f.removeAttribute(r), wr.delete(f)), h || f.removeAttribute(n);
    }), Qo--, Qo || (sn = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Cr = {});
  };
}, co = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = hv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), gv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, lo = "Dialog", [Fc] = Ie(lo), [xv, ot] = Fc(lo), Lc = (e) => {
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
    caller: lo
  });
  return /* @__PURE__ */ c.jsx(
    xv,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Ee(),
      titleId: Ee(),
      descriptionId: Ee(),
      open: d,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((f) => !f), [u]),
      modal: s,
      children: n
    }
  );
};
Lc.displayName = lo;
var Wc = "DialogTrigger", bv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Wc, n), a = de(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": es(o.open),
        ...r,
        ref: a,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
  }
);
bv.displayName = Wc;
var Qa = "DialogPortal", [yv, Vc] = Fc(Qa, {
  forceMount: void 0
}), Bc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ot(Qa, t);
  return /* @__PURE__ */ c.jsx(yv, { scope: t, forceMount: n, children: m.Children.map(r, (s) => /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: s }) })) });
};
Bc.displayName = Qa;
var Br = "DialogOverlay", zc = m.forwardRef(
  (e, t) => {
    const n = Vc(Br, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ot(Br, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Cv, { ...o, ref: t }) }) : null;
  }
);
zc.displayName = Br;
var wv = /* @__PURE__ */ Dt("DialogOverlay.RemoveScroll"), Cv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Br, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(qn, { as: wv, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          "data-state": es(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Yt = "DialogContent", Hc = m.forwardRef(
  (e, t) => {
    const n = Vc(Yt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ot(Yt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Sv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(kv, { ...o, ref: t }) });
  }
);
Hc.displayName = Yt;
var Sv = m.forwardRef(
  (e, t) => {
    const n = ot(Yt, e.__scopeDialog), r = m.useRef(null), o = de(t, n.contentRef, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return co(a);
    }, []), /* @__PURE__ */ c.jsx(
      Yc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: B(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: B(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), kv = m.forwardRef(
  (e, t) => {
    const n = ot(Yt, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Yc,
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
), Yc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = ot(Yt, n), l = m.useRef(null), d = de(t, l);
    return so(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Un,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            Xt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": es(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Ev, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(Pv, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ja = "DialogTitle", Gc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Ja, n);
    return /* @__PURE__ */ c.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Gc.displayName = Ja;
var Kc = "DialogDescription", Nv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Kc, n);
    return /* @__PURE__ */ c.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Nv.displayName = Kc;
var Uc = "DialogClose", qc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Uc, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
qc.displayName = Uc;
function es(e) {
  return e ? "open" : "closed";
}
var Xc = "DialogTitleWarning", [SN, Zc] = Wp(Xc, {
  contentName: Yt,
  titleName: Ja,
  docsSlug: "dialog"
}), Ev = ({ titleId: e }) => {
  const t = Zc(Xc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Mv = "DialogDescriptionWarning", Pv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zc(Mv).contentName}}.`;
  return m.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, ts = Lc, ns = Bc, rs = zc, os = Hc, Qc = Gc, Rv = qc;
function uo(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function fo(e) {
  const [t, n] = m.useState(void 0);
  return _e(() => {
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
var mo = "Checkbox", [Av] = Ie(mo), [Dv, as] = Av(mo);
function jv(e) {
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
    caller: mo
  }), [x, v] = m.useState(null), [g, w] = m.useState(null), b = m.useRef(!1), y = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), N = {
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
    defaultChecked: At(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    Dv,
    {
      scope: t,
      ...N,
      children: Ov(f) ? f(N) : r
    }
  );
}
var Jc = "CheckboxTrigger", el = m.forwardRef(
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
    } = as(Jc, e), v = de(o, u), g = m.useRef(l);
    return m.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const b = () => f(g.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, f]), /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": At(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": sl(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: B(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: B(n, (w) => {
          f((b) => At(b) ? !0 : !b), x && h && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
el.displayName = Jc;
var tl = m.forwardRef(
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
      jv,
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
            el,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            al,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
tl.displayName = mo;
var nl = "CheckboxIndicator", rl = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = as(nl, n);
    return /* @__PURE__ */ c.jsx(
      $e,
      {
        present: r || At(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            "data-state": sl(a.checked),
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
rl.displayName = nl;
var ol = "CheckboxBubbleInput", al = m.forwardRef(
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
    } = as(ol, e), x = de(n, h), v = uo(a), g = fo(r);
    m.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, P = !o.current;
      if (v !== a && C) {
        const S = new Event("click", { bubbles: P });
        b.indeterminate = At(a), C.call(b, At(a) ? !1 : a), b.dispatchEvent(S);
      }
    }, [p, v, a, o]);
    const w = m.useRef(At(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Z.input,
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
al.displayName = ol;
function Ov(e) {
  return typeof e == "function";
}
function At(e) {
  return e === "indeterminate";
}
function sl(e) {
  return At(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const _v = ["top", "right", "bottom", "left"], jt = Math.min, Ge = Math.max, zr = Math.round, Sr = Math.floor, ft = (e) => ({
  x: e,
  y: e
}), Iv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tv = {
  start: "end",
  end: "start"
};
function xa(e, t, n) {
  return Ge(e, jt(t, n));
}
function Nt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e) {
  return e.split("-")[0];
}
function yn(e) {
  return e.split("-")[1];
}
function ss(e) {
  return e === "x" ? "y" : "x";
}
function is(e) {
  return e === "y" ? "height" : "width";
}
const $v = /* @__PURE__ */ new Set(["top", "bottom"]);
function dt(e) {
  return $v.has(Et(e)) ? "y" : "x";
}
function cs(e) {
  return ss(dt(e));
}
function Fv(e, t, n) {
  n === void 0 && (n = !1);
  const r = yn(e), o = cs(e), a = is(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Hr(s)), [s, Hr(s)];
}
function Lv(e) {
  const t = Hr(e);
  return [ba(e), t, ba(t)];
}
function ba(e) {
  return e.replace(/start|end/g, (t) => Tv[t]);
}
const li = ["left", "right"], di = ["right", "left"], Wv = ["top", "bottom"], Vv = ["bottom", "top"];
function Bv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? di : li : t ? li : di;
    case "left":
    case "right":
      return t ? Wv : Vv;
    default:
      return [];
  }
}
function zv(e, t, n, r) {
  const o = yn(e);
  let a = Bv(Et(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ba)))), a;
}
function Hr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Iv[t]);
}
function Hv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function il(e) {
  return typeof e != "number" ? Hv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Yr(e) {
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
function ui(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = dt(t), s = cs(t), i = is(s), l = Et(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (yn(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const Yv = async (e, t, n) => {
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
  } = ui(d, r, l), p = r, h = {}, x = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: w
    } = i[v], {
      x: b,
      y,
      data: N,
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
        ...N
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: f
    } = ui(d, p, l)), v = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Ln(e, t) {
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
  } = Nt(t, e), x = il(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], w = Yr(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), N = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Yr(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: y,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + x.top) / N.y,
    bottom: (C.bottom - w.bottom + x.bottom) / N.y,
    left: (w.left - C.left + x.left) / N.x,
    right: (C.right - w.right + x.right) / N.x
  };
}
const Gv = (e) => ({
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
    } = Nt(e, t) || {};
    if (d == null)
      return {};
    const f = il(u), p = {
      x: n,
      y: r
    }, h = cs(o), x = is(h), v = await s.getDimensions(d), g = h === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", N = a.reference[x] + a.reference[h] - p[h] - a.floating[x], C = p[h] - a.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let S = P ? P[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(P))) && (S = i.floating[y] || a.floating[x]);
    const M = N / 2 - C / 2, _ = S / 2 - v[x] / 2 - 1, T = jt(f[w], _), F = jt(f[b], _), L = T, H = S - v[x] - F, O = S / 2 - v[x] / 2 + M, z = xa(L, O, H), W = !l.arrow && yn(o) != null && O !== z && a.reference[x] / 2 - (O < L ? T : F) - v[x] / 2 < 0, q = W ? O < L ? O - L : O - H : 0;
    return {
      [h]: p[h] + q,
      data: {
        [h]: z,
        centerOffset: O - z - q,
        ...W && {
          alignmentOffset: q
        }
      },
      reset: W
    };
  }
}), Kv = function(e) {
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
      } = Nt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = Et(o), b = dt(i), y = Et(i) === i, N = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !v ? [Hr(i)] : Lv(i)), P = x !== "none";
      !p && P && C.push(...zv(i, v, x, N));
      const S = [i, ...C], M = await Ln(t, g), _ = [];
      let T = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && _.push(M[w]), f) {
        const O = Fv(o, s, N);
        _.push(M[O[0]], M[O[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: _
      }], !_.every((O) => O <= 0)) {
        var F, L;
        const O = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, z = S[O];
        if (z && (!(f === "alignment" ? b !== dt(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((j) => dt(j.placement) === b ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: T
            },
            reset: {
              placement: z
            }
          };
        let W = (L = T.filter((q) => q.overflows[0] <= 0).sort((q, j) => q.overflows[1] - j.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var H;
              const q = (H = T.filter((j) => {
                if (P) {
                  const $ = dt(j.placement);
                  return $ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter(($) => $ > 0).reduce(($, ne) => $ + ne, 0)]).sort((j, $) => j[1] - $[1])[0]) == null ? void 0 : H[0];
              q && (W = q);
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
function fi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mi(e) {
  return _v.some((t) => e[t] >= 0);
}
const Uv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Nt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ln(t, {
            ...o,
            elementContext: "reference"
          }), s = fi(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: mi(s)
            }
          };
        }
        case "escaped": {
          const a = await Ln(t, {
            ...o,
            altBoundary: !0
          }), s = fi(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: mi(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, cl = /* @__PURE__ */ new Set(["left", "top"]);
async function qv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Et(n), i = yn(n), l = dt(n) === "y", d = cl.has(s) ? -1 : 1, u = a && l ? -1 : 1, f = Nt(t, e);
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
const Xv = function(e) {
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
      } = t, l = await qv(t, e);
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
}, Zv = function(e) {
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
      } = Nt(e, t), d = {
        x: n,
        y: r
      }, u = await Ln(t, l), f = dt(Et(o)), p = ss(f);
      let h = d[p], x = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = h + u[g], y = h - u[w];
        h = xa(b, h, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + u[g], y = x - u[w];
        x = xa(b, x, y);
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
}, Qv = function(e) {
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
      } = Nt(e, t), u = {
        x: n,
        y: r
      }, f = dt(o), p = ss(f);
      let h = u[p], x = u[f];
      const v = Nt(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = p === "y" ? "height" : "width", N = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        h < N ? h = N : h > C && (h = C);
      }
      if (d) {
        var w, b;
        const y = p === "y" ? "width" : "height", N = cl.has(Et(o)), C = a.reference[f] - a.floating[y] + (N && ((w = s.offset) == null ? void 0 : w[f]) || 0) + (N ? 0 : g.crossAxis), P = a.reference[f] + a.reference[y] + (N ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) - (N ? g.crossAxis : 0);
        x < C ? x = C : x > P && (x = P);
      }
      return {
        [p]: h,
        [f]: x
      };
    }
  };
}, Jv = function(e) {
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
      } = Nt(e, t), u = await Ln(t, d), f = Et(o), p = yn(o), h = dt(o) === "y", {
        width: x,
        height: v
      } = a.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = p === "end" ? "top" : "bottom");
      const b = v - u.top - u.bottom, y = x - u.left - u.right, N = jt(v - u[g], b), C = jt(x - u[w], y), P = !t.middlewareData.shift;
      let S = N, M = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), P && !p) {
        const T = Ge(u.left, 0), F = Ge(u.right, 0), L = Ge(u.top, 0), H = Ge(u.bottom, 0);
        h ? M = x - 2 * (T !== 0 || F !== 0 ? T + F : Ge(u.left, u.right)) : S = v - 2 * (L !== 0 || H !== 0 ? L + H : Ge(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: S
      });
      const _ = await s.getDimensions(i.floating);
      return x !== _.width || v !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function po() {
  return typeof window < "u";
}
function wn(e) {
  return ll(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  var t;
  return (t = (ll(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ll(e) {
  return po() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function tt(e) {
  return po() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function mt(e) {
  return po() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function pi(e) {
  return !po() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
const eg = /* @__PURE__ */ new Set(["inline", "contents"]);
function Xn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !eg.has(o);
}
const tg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ng(e) {
  return tg.has(wn(e));
}
const rg = [":popover-open", ":modal"];
function ho(e) {
  return rg.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const og = ["transform", "translate", "scale", "rotate", "perspective"], ag = ["transform", "translate", "scale", "rotate", "perspective", "filter"], sg = ["paint", "layout", "strict", "content"];
function ls(e) {
  const t = ds(), n = tt(e) ? nt(e) : e;
  return og.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ag.some((r) => (n.willChange || "").includes(r)) || sg.some((r) => (n.contain || "").includes(r));
}
function ig(e) {
  let t = Ot(e);
  for (; mt(t) && !hn(t); ) {
    if (ls(t))
      return t;
    if (ho(t))
      return null;
    t = Ot(t);
  }
  return null;
}
function ds() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const cg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function hn(e) {
  return cg.has(wn(e));
}
function nt(e) {
  return Ke(e).getComputedStyle(e);
}
function vo(e) {
  return tt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ot(e) {
  if (wn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pi(e) && e.host || // Fallback.
    pt(e)
  );
  return pi(t) ? t.host : t;
}
function dl(e) {
  const t = Ot(e);
  return hn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mt(t) && Xn(t) ? t : dl(t);
}
function Wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = dl(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ke(o);
  if (a) {
    const i = ya(s);
    return t.concat(s, s.visualViewport || [], Xn(o) ? o : [], i && n ? Wn(i) : []);
  }
  return t.concat(o, Wn(o, [], n));
}
function ya(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ul(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = zr(n) !== a || zr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function us(e) {
  return tt(e) ? e : e.contextElement;
}
function mn(e) {
  const t = us(e);
  if (!mt(t))
    return ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ul(t);
  let s = (a ? zr(n.width) : n.width) / r, i = (a ? zr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const lg = /* @__PURE__ */ ft(0);
function fl(e) {
  const t = Ke(e);
  return !ds() || !t.visualViewport ? lg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function dg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ke(e) ? !1 : t;
}
function Gt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = us(e);
  let s = ft(1);
  t && (r ? tt(r) && (s = mn(r)) : s = mn(e));
  const i = dg(a, n, r) ? fl(a) : ft(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Ke(a), h = r && tt(r) ? Ke(r) : r;
    let x = p, v = ya(x);
    for (; v && r && h !== x; ) {
      const g = mn(v), w = v.getBoundingClientRect(), b = nt(v), y = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, N = w.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, u *= g.x, f *= g.y, l += y, d += N, x = Ke(v), v = ya(x);
    }
  }
  return Yr({
    width: u,
    height: f,
    x: l,
    y: d
  });
}
function go(e, t) {
  const n = vo(e).scrollLeft;
  return t ? t.left + n : Gt(pt(e)).left + n;
}
function ml(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - go(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function ug(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = pt(r), i = t ? ho(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ft(1);
  const u = ft(0), f = mt(r);
  if ((f || !f && !a) && ((wn(r) !== "body" || Xn(s)) && (l = vo(r)), mt(r))) {
    const h = Gt(r);
    d = mn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !f && !a ? ml(s, l) : ft(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + u.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + u.y + p.y
  };
}
function fg(e) {
  return Array.from(e.getClientRects());
}
function mg(e) {
  const t = pt(e), n = vo(e), r = e.ownerDocument.body, o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + go(e);
  const i = -n.scrollTop;
  return nt(r).direction === "rtl" && (s += Ge(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const hi = 25;
function pg(e, t) {
  const n = Ke(e), r = pt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = ds();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = go(r);
  if (d <= 0) {
    const u = r.ownerDocument, f = u.body, p = getComputedStyle(f), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= hi && (a -= x);
  } else d <= hi && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const hg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function vg(e, t) {
  const n = Gt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = mt(e) ? mn(e) : ft(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function vi(e, t, n) {
  let r;
  if (t === "viewport")
    r = pg(e, n);
  else if (t === "document")
    r = mg(pt(e));
  else if (tt(t))
    r = vg(t, n);
  else {
    const o = fl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Yr(r);
}
function pl(e, t) {
  const n = Ot(e);
  return n === t || !tt(n) || hn(n) ? !1 : nt(n).position === "fixed" || pl(n, t);
}
function gg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wn(e, [], !1).filter((i) => tt(i) && wn(i) !== "body"), o = null;
  const a = nt(e).position === "fixed";
  let s = a ? Ot(e) : e;
  for (; tt(s) && !hn(s); ) {
    const i = nt(s), l = ls(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && hg.has(o.position) || Xn(s) && !l && pl(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Ot(s);
  }
  return t.set(e, r), r;
}
function xg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? ho(t) ? [] : gg(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, u) => {
    const f = vi(t, u, o);
    return d.top = Ge(f.top, d.top), d.right = jt(f.right, d.right), d.bottom = jt(f.bottom, d.bottom), d.left = Ge(f.left, d.left), d;
  }, vi(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function bg(e) {
  const {
    width: t,
    height: n
  } = ul(e);
  return {
    width: t,
    height: n
  };
}
function yg(e, t, n) {
  const r = mt(t), o = pt(t), a = n === "fixed", s = Gt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ft(0);
  function d() {
    l.x = go(o);
  }
  if (r || !r && !a)
    if ((wn(t) !== "body" || Xn(o)) && (i = vo(t)), r) {
      const h = Gt(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const u = o && !r && !a ? ml(o, i) : ft(0), f = s.left + i.scrollLeft - l.x - u.x, p = s.top + i.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Jo(e) {
  return nt(e).position === "static";
}
function gi(e, t) {
  if (!mt(e) || nt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return pt(e) === n && (n = n.ownerDocument.body), n;
}
function hl(e, t) {
  const n = Ke(e);
  if (ho(e))
    return n;
  if (!mt(e)) {
    let o = Ot(e);
    for (; o && !hn(o); ) {
      if (tt(o) && !Jo(o))
        return o;
      o = Ot(o);
    }
    return n;
  }
  let r = gi(e, t);
  for (; r && ng(r) && Jo(r); )
    r = gi(r, t);
  return r && hn(r) && Jo(r) && !ls(r) ? n : r || ig(e) || n;
}
const wg = async function(e) {
  const t = this.getOffsetParent || hl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: yg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Cg(e) {
  return nt(e).direction === "rtl";
}
const Sg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ug,
  getDocumentElement: pt,
  getClippingRect: xg,
  getOffsetParent: hl,
  getElementRects: wg,
  getClientRects: fg,
  getDimensions: bg,
  getScale: mn,
  isElement: tt,
  isRTL: Cg
};
function vl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function kg(e, t) {
  let n = null, r;
  const o = pt(e);
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
    const x = Sr(f), v = Sr(o.clientWidth - (u + p)), g = Sr(o.clientHeight - (f + h)), w = Sr(u), y = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: Ge(0, jt(1, l)) || 1
    };
    let N = !0;
    function C(P) {
      const S = P[0].intersectionRatio;
      if (S !== l) {
        if (!N)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !vl(d, e.getBoundingClientRect()) && s(), N = !1;
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
function Ng(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = us(e), u = o || a ? [...d ? Wn(d) : [], ...Wn(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = d && i ? kg(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let x, v = l ? Gt(e) : null;
  l && g();
  function g() {
    const w = Gt(e);
    v && !vl(v, w) && n(), v = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f == null || f(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const Eg = Xv, Mg = Zv, Pg = Kv, Rg = Jv, Ag = Uv, xi = Gv, Dg = Qv, jg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Sg,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Yv(e, t, {
    ...o,
    platform: a
  });
};
var Og = typeof document < "u", _g = function() {
}, Tr = Og ? tc : _g;
function Gr(e, t) {
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
        if (!Gr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Gr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function gl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bi(e, t) {
  const n = gl(e);
  return Math.round(t * n) / n;
}
function ea(e) {
  const t = m.useRef(e);
  return Tr(() => {
    t.current = e;
  }), t;
}
function Ig(e) {
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
  Gr(p, r) || h(r);
  const [x, v] = m.useState(null), [g, w] = m.useState(null), b = m.useCallback((j) => {
    j !== P.current && (P.current = j, v(j));
  }, []), y = m.useCallback((j) => {
    j !== S.current && (S.current = j, w(j));
  }, []), N = a || x, C = s || g, P = m.useRef(null), S = m.useRef(null), M = m.useRef(u), _ = l != null, T = ea(l), F = ea(o), L = ea(d), H = m.useCallback(() => {
    if (!P.current || !S.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (j.platform = F.current), jg(P.current, S.current, j).then(($) => {
      const ne = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      O.current && !Gr(M.current, ne) && (M.current = ne, Gn.flushSync(() => {
        f(ne);
      }));
    });
  }, [p, t, n, F, L]);
  Tr(() => {
    d === !1 && M.current.isPositioned && (M.current.isPositioned = !1, f((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [d]);
  const O = m.useRef(!1);
  Tr(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Tr(() => {
    if (N && (P.current = N), C && (S.current = C), N && C) {
      if (T.current)
        return T.current(N, C, H);
      H();
    }
  }, [N, C, H, T, _]);
  const z = m.useMemo(() => ({
    reference: P,
    floating: S,
    setReference: b,
    setFloating: y
  }), [b, y]), W = m.useMemo(() => ({
    reference: N,
    floating: C
  }), [N, C]), q = m.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return j;
    const $ = bi(W.floating, u.x), ne = bi(W.floating, u.y);
    return i ? {
      ...j,
      transform: "translate(" + $ + "px, " + ne + "px)",
      ...gl(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: ne
    };
  }, [n, i, W.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: H,
    refs: z,
    elements: W,
    floatingStyles: q
  }), [u, H, z, W, q]);
}
const Tg = (e) => {
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
      return r && t(r) ? r.current != null ? xi({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? xi({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, $g = (e, t) => ({
  ...Eg(e),
  options: [e, t]
}), Fg = (e, t) => ({
  ...Mg(e),
  options: [e, t]
}), Lg = (e, t) => ({
  ...Dg(e),
  options: [e, t]
}), Wg = (e, t) => ({
  ...Pg(e),
  options: [e, t]
}), Vg = (e, t) => ({
  ...Rg(e),
  options: [e, t]
}), Bg = (e, t) => ({
  ...Ag(e),
  options: [e, t]
}), zg = (e, t) => ({
  ...Tg(e),
  options: [e, t]
});
var Hg = "Arrow", xl = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    Z.svg,
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
xl.displayName = Hg;
var Yg = xl, fs = "Popper", [bl, It] = Ie(fs), [Gg, yl] = bl(fs), wl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ c.jsx(Gg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
wl.displayName = fs;
var Cl = "PopperAnchor", Sl = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = yl(Cl, n), s = m.useRef(null), i = de(t, s), l = m.useRef(null);
    return m.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Z.div, { ...o, ref: i });
  }
);
Sl.displayName = Cl;
var ms = "PopperContent", [Kg, Ug] = bl(ms), kl = m.forwardRef(
  (e, t) => {
    var D, Q, J, se, me, U;
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
    } = e, g = yl(ms, n), [w, b] = m.useState(null), y = de(t, (Se) => b(Se)), [N, C] = m.useState(null), P = fo(N), S = (P == null ? void 0 : P.width) ?? 0, M = (P == null ? void 0 : P.height) ?? 0, _ = r + (a !== "center" ? "-" + a : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, F = Array.isArray(d) ? d : [d], L = F.length > 0, H = {
      padding: T,
      boundary: F.filter(Xg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: O, floatingStyles: z, placement: W, isPositioned: q, middlewareData: j } = Ig({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...Se) => Ng(...Se, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        $g({ mainAxis: o + M, alignmentAxis: s }),
        l && Fg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Lg() : void 0,
          ...H
        }),
        l && Wg({ ...H }),
        Vg({
          ...H,
          apply: ({ elements: Se, rects: we, availableWidth: Le, availableHeight: De }) => {
            const { width: Qe, height: Mn } = we.reference, vt = Se.floating.style;
            vt.setProperty("--radix-popper-available-width", `${Le}px`), vt.setProperty("--radix-popper-available-height", `${De}px`), vt.setProperty("--radix-popper-anchor-width", `${Qe}px`), vt.setProperty("--radix-popper-anchor-height", `${Mn}px`);
          }
        }),
        N && zg({ element: N, padding: i }),
        Zg({ arrowWidth: S, arrowHeight: M }),
        p && Bg({ strategy: "referenceHidden", ...H })
      ]
    }), [$, ne] = Ml(W), R = ze(x);
    _e(() => {
      q && (R == null || R());
    }, [q, R]);
    const E = (D = j.arrow) == null ? void 0 : D.x, I = (Q = j.arrow) == null ? void 0 : Q.y, V = ((J = j.arrow) == null ? void 0 : J.centerOffset) !== 0, [Y, K] = m.useState();
    return _e(() => {
      w && K(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...z,
          transform: q ? z.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Y,
          "--radix-popper-transform-origin": [
            (se = j.transformOrigin) == null ? void 0 : se.x,
            (me = j.transformOrigin) == null ? void 0 : me.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((U = j.hide) == null ? void 0 : U.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          Kg,
          {
            scope: n,
            placedSide: $,
            onArrowChange: C,
            arrowX: E,
            arrowY: I,
            shouldHideArrow: V,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                "data-side": $,
                "data-align": ne,
                ...v,
                ref: y,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: q ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
kl.displayName = ms;
var Nl = "PopperArrow", qg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, El = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Ug(Nl, r), s = qg[a.placedSide];
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
          Yg,
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
El.displayName = Nl;
function Xg(e) {
  return e !== null;
}
var Zg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, u] = Ml(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", v = "";
    return d === "bottom" ? (x = s ? f : `${p}px`, v = `${-l}px`) : d === "top" ? (x = s ? f : `${p}px`, v = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, v = s ? f : `${h}px`) : d === "left" && (x = `${r.floating.width + l}px`, v = s ? f : `${h}px`), { data: { x, y: v } };
  }
});
function Ml(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var xo = wl, Zn = Sl, bo = kl, yo = El, ta = "rovingFocusGroup.onEntryFocus", Qg = { bubbles: !1, cancelable: !0 }, Qn = "RovingFocusGroup", [wa, Pl, Jg] = Kn(Qn), [ex, Cn] = Ie(
  Qn,
  [Jg]
), [tx, nx] = ex(Qn), Rl = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(wa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(wa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(rx, { ...e, ref: t }) }) })
);
Rl.displayName = Qn;
var rx = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = de(t, p), x = bn(a), [v, g] = Ve({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Qn
  }), [w, b] = m.useState(!1), y = ze(d), N = Pl(n), C = m.useRef(!1), [P, S] = m.useState(0);
  return m.useEffect(() => {
    const M = p.current;
    if (M)
      return M.addEventListener(ta, y), () => M.removeEventListener(ta, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    tx,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (M) => g(M),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => S((M) => M + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => S((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          tabIndex: w || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: B(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: B(e.onFocus, (M) => {
            const _ = !C.current;
            if (M.target === M.currentTarget && _ && !w) {
              const T = new CustomEvent(ta, Qg);
              if (M.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const F = N().filter((W) => W.focusable), L = F.find((W) => W.active), H = F.find((W) => W.id === v), z = [L, H, ...F].filter(
                  Boolean
                ).map((W) => W.ref.current);
                jl(z, u);
              }
            }
            C.current = !1;
          }),
          onBlur: B(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Al = "RovingFocusGroupItem", Dl = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ee(), d = a || l, u = nx(Al, n), f = u.currentTabStopId === d, p = Pl(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ c.jsx(
      wa.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: B(e.onMouseDown, (g) => {
              r ? u.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: B(e.onFocus, () => u.onItemFocus(d)),
            onKeyDown: B(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = sx(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((N) => N.focusable).map((N) => N.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const N = y.indexOf(g.currentTarget);
                  y = u.loop ? ix(y, N + 1) : y.slice(N + 1);
                }
                setTimeout(() => jl(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
Dl.displayName = Al;
var ox = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ax(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function sx(e, t, n) {
  const r = ax(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ox[r];
}
function jl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ix(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ps = Rl, hs = Dl, Ca = ["Enter", " "], cx = ["ArrowDown", "PageUp", "Home"], Ol = ["ArrowUp", "PageDown", "End"], lx = [...cx, ...Ol], dx = {
  ltr: [...Ca, "ArrowRight"],
  rtl: [...Ca, "ArrowLeft"]
}, ux = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Jn = "Menu", [Vn, fx, mx] = Kn(Jn), [Qt, _l] = Ie(Jn, [
  mx,
  It,
  Cn
]), wo = It(), Il = Cn(), [px, Jt] = Qt(Jn), [hx, er] = Qt(Jn), Tl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = wo(t), [l, d] = m.useState(null), u = m.useRef(!1), f = ze(a), p = bn(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(xo, { ...i, children: /* @__PURE__ */ c.jsx(
    px,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        hx,
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
Tl.displayName = Jn;
var vx = "MenuAnchor", vs = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = wo(n);
    return /* @__PURE__ */ c.jsx(Zn, { ...o, ...r, ref: t });
  }
);
vs.displayName = vx;
var gs = "MenuPortal", [gx, $l] = Qt(gs, {
  forceMount: void 0
}), Fl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Jt(gs, t);
  return /* @__PURE__ */ c.jsx(gx, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
Fl.displayName = gs;
var Ze = "MenuContent", [xx, xs] = Qt(Ze), Ll = m.forwardRef(
  (e, t) => {
    const n = $l(Ze, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Jt(Ze, e.__scopeMenu), s = er(Ze, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Vn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(bx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(yx, { ...o, ref: t }) }) }) });
  }
), bx = m.forwardRef(
  (e, t) => {
    const n = Jt(Ze, e.__scopeMenu), r = m.useRef(null), o = de(t, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return co(a);
    }, []), /* @__PURE__ */ c.jsx(
      bs,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: B(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), yx = m.forwardRef((e, t) => {
  const n = Jt(Ze, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    bs,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), wx = /* @__PURE__ */ Dt("MenuContent.ScrollLock"), bs = m.forwardRef(
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
    } = e, g = Jt(Ze, n), w = er(Ze, n), b = wo(n), y = Il(n), N = fx(n), [C, P] = m.useState(null), S = m.useRef(null), M = de(t, S, g.onContentChange), _ = m.useRef(0), T = m.useRef(""), F = m.useRef(0), L = m.useRef(null), H = m.useRef("right"), O = m.useRef(0), z = x ? qn : m.Fragment, W = x ? { as: wx, allowPinchZoom: !0 } : void 0, q = ($) => {
      var D, Q;
      const ne = T.current + $, R = N().filter((J) => !J.disabled), E = document.activeElement, I = (D = R.find((J) => J.ref.current === E)) == null ? void 0 : D.textValue, V = R.map((J) => J.textValue), Y = Ox(V, ne, I), K = (Q = R.find((J) => J.textValue === Y)) == null ? void 0 : Q.ref.current;
      (function J(se) {
        T.current = se, window.clearTimeout(_.current), se !== "" && (_.current = window.setTimeout(() => J(""), 1e3));
      })(ne), K && setTimeout(() => K.focus());
    };
    m.useEffect(() => () => window.clearTimeout(_.current), []), so();
    const j = m.useCallback(($) => {
      var R, E;
      return H.current === ((R = L.current) == null ? void 0 : R.side) && Ix($, (E = L.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      xx,
      {
        scope: n,
        searchRef: T,
        onItemEnter: m.useCallback(
          ($) => {
            j($) && $.preventDefault();
          },
          [j]
        ),
        onItemLeave: m.useCallback(
          ($) => {
            var ne;
            j($) || ((ne = S.current) == null || ne.focus(), P(null));
          },
          [j]
        ),
        onTriggerLeave: m.useCallback(
          ($) => {
            j($) && $.preventDefault();
          },
          [j]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: m.useCallback(($) => {
          L.current = $;
        }, []),
        children: /* @__PURE__ */ c.jsx(z, { ...W, children: /* @__PURE__ */ c.jsx(
          Un,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: B(a, ($) => {
              var ne;
              $.preventDefault(), (ne = S.current) == null || ne.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              Xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  ps,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: B(l, ($) => {
                      w.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      bo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": td(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: M,
                        style: { outline: "none", ...v.style },
                        onKeyDown: B(v.onKeyDown, ($) => {
                          const R = $.target.closest("[data-radix-menu-content]") === $.currentTarget, E = $.ctrlKey || $.altKey || $.metaKey, I = $.key.length === 1;
                          R && ($.key === "Tab" && $.preventDefault(), !E && I && q($.key));
                          const V = S.current;
                          if ($.target !== V || !lx.includes($.key)) return;
                          $.preventDefault();
                          const K = N().filter((D) => !D.disabled).map((D) => D.ref.current);
                          Ol.includes($.key) && K.reverse(), Dx(K);
                        }),
                        onBlur: B(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(_.current), T.current = "");
                        }),
                        onPointerMove: B(
                          e.onPointerMove,
                          Bn(($) => {
                            const ne = $.target, R = O.current !== $.clientX;
                            if ($.currentTarget.contains(ne) && R) {
                              const E = $.clientX > O.current ? "right" : "left";
                              H.current = E, O.current = $.clientX;
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
Ll.displayName = Ze;
var Cx = "MenuGroup", ys = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { role: "group", ...r, ref: t });
  }
);
ys.displayName = Cx;
var Sx = "MenuLabel", Wl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Wl.displayName = Sx;
var Kr = "MenuItem", yi = "menu.itemSelect", Co = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = m.useRef(null), s = er(Kr, e.__scopeMenu), i = xs(Kr, e.__scopeMenu), l = de(t, a), d = m.useRef(!1), u = () => {
      const f = a.current;
      if (!n && f) {
        const p = new CustomEvent(yi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(yi, (h) => r == null ? void 0 : r(h), { once: !0 }), Ya(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Vl,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: B(e.onClick, u),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), d.current = !0;
        },
        onPointerUp: B(e.onPointerUp, (f) => {
          var p;
          d.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: B(e.onKeyDown, (f) => {
          const p = i.searchRef.current !== "";
          n || p && f.key === " " || Ca.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Co.displayName = Kr;
var Vl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = xs(Kr, n), i = Il(n), l = m.useRef(null), d = de(t, l), [u, f] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Vn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(hs, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: B(
              e.onPointerMove,
              Bn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: B(
              e.onPointerLeave,
              Bn((x) => s.onItemLeave(x))
            ),
            onFocus: B(e.onFocus, () => f(!0)),
            onBlur: B(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), kx = "MenuCheckboxItem", Bl = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Kl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      Co,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ur(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Cs(n),
        onSelect: B(
          o.onSelect,
          () => r == null ? void 0 : r(Ur(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Bl.displayName = kx;
var zl = "MenuRadioGroup", [Nx, Ex] = Qt(
  zl,
  { value: void 0, onValueChange: () => {
  } }
), Hl = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ze(r);
    return /* @__PURE__ */ c.jsx(Nx, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(ys, { ...o, ref: t }) });
  }
);
Hl.displayName = zl;
var Yl = "MenuRadioItem", Gl = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Ex(Yl, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Kl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      Co,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Cs(a),
        onSelect: B(
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
Gl.displayName = Yl;
var ws = "MenuItemIndicator", [Kl, Mx] = Qt(
  ws,
  { checked: !1 }
), Ul = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Mx(ws, n);
    return /* @__PURE__ */ c.jsx(
      $e,
      {
        present: r || Ur(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            ...o,
            ref: t,
            "data-state": Cs(a.checked)
          }
        )
      }
    );
  }
);
Ul.displayName = ws;
var Px = "MenuSeparator", ql = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
ql.displayName = Px;
var Rx = "MenuArrow", Xl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = wo(n);
    return /* @__PURE__ */ c.jsx(yo, { ...o, ...r, ref: t });
  }
);
Xl.displayName = Rx;
var Ax = "MenuSub", [kN, Zl] = Qt(Ax), _n = "MenuSubTrigger", Ql = m.forwardRef(
  (e, t) => {
    const n = Jt(_n, e.__scopeMenu), r = er(_n, e.__scopeMenu), o = Zl(_n, e.__scopeMenu), a = xs(_n, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(vs, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Vl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": td(n.open),
        ...e,
        ref: kt(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: B(
          e.onPointerMove,
          Bn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: B(
          e.onPointerLeave,
          Bn((f) => {
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
        onKeyDown: B(e.onKeyDown, (f) => {
          var h;
          const p = a.searchRef.current !== "";
          e.disabled || p && f.key === " " || dx[r.dir].includes(f.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Ql.displayName = _n;
var Jl = "MenuSubContent", ed = m.forwardRef(
  (e, t) => {
    const n = $l(Ze, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Jt(Ze, e.__scopeMenu), s = er(Ze, e.__scopeMenu), i = Zl(Jl, e.__scopeMenu), l = m.useRef(null), d = de(t, l);
    return /* @__PURE__ */ c.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Vn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      bs,
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
        onFocusOutside: B(e.onFocusOutside, (u) => {
          u.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: B(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: B(e.onKeyDown, (u) => {
          var h;
          const f = u.currentTarget.contains(u.target), p = ux[s.dir].includes(u.key);
          f && p && (a.onOpenChange(!1), (h = i.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
ed.displayName = Jl;
function td(e) {
  return e ? "open" : "closed";
}
function Ur(e) {
  return e === "indeterminate";
}
function Cs(e) {
  return Ur(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Dx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function jx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ox(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = jx(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function _x(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function Ix(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return _x(n, t);
}
function Bn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Tx = Tl, $x = vs, Fx = Fl, Lx = Ll, Wx = ys, Vx = Wl, Bx = Co, zx = Bl, Hx = Hl, Yx = Gl, Gx = Ul, Kx = ql, Ux = Xl, qx = Ql, Xx = ed, So = "DropdownMenu", [Zx] = Ie(
  So,
  [_l]
), Be = _l(), [Qx, nd] = Zx(So), rd = (e) => {
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
    caller: So
  });
  return /* @__PURE__ */ c.jsx(
    Qx,
    {
      scope: t,
      triggerId: Ee(),
      triggerRef: d,
      contentId: Ee(),
      open: u,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(Tx, { ...l, open: u, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
rd.displayName = So;
var od = "DropdownMenuTrigger", ad = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = nd(od, n), s = Be(n);
    return /* @__PURE__ */ c.jsx($x, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
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
        ref: kt(t, a.triggerRef),
        onPointerDown: B(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: B(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
ad.displayName = od;
var Jx = "DropdownMenuPortal", sd = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Be(t);
  return /* @__PURE__ */ c.jsx(Fx, { ...r, ...n });
};
sd.displayName = Jx;
var id = "DropdownMenuContent", cd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = nd(id, n), a = Be(n), s = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Lx,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: B(e.onInteractOutside, (i) => {
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
cd.displayName = id;
var e0 = "DropdownMenuGroup", t0 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(Wx, { ...o, ...r, ref: t });
  }
);
t0.displayName = e0;
var n0 = "DropdownMenuLabel", ld = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(Vx, { ...o, ...r, ref: t });
  }
);
ld.displayName = n0;
var r0 = "DropdownMenuItem", dd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(Bx, { ...o, ...r, ref: t });
  }
);
dd.displayName = r0;
var o0 = "DropdownMenuCheckboxItem", a0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(zx, { ...o, ...r, ref: t });
});
a0.displayName = o0;
var s0 = "DropdownMenuRadioGroup", i0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(Hx, { ...o, ...r, ref: t });
});
i0.displayName = s0;
var c0 = "DropdownMenuRadioItem", l0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(Yx, { ...o, ...r, ref: t });
});
l0.displayName = c0;
var d0 = "DropdownMenuItemIndicator", u0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(Gx, { ...o, ...r, ref: t });
});
u0.displayName = d0;
var f0 = "DropdownMenuSeparator", ud = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(Kx, { ...o, ...r, ref: t });
});
ud.displayName = f0;
var m0 = "DropdownMenuArrow", p0 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
    return /* @__PURE__ */ c.jsx(Ux, { ...o, ...r, ref: t });
  }
);
p0.displayName = m0;
var h0 = "DropdownMenuSubTrigger", v0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(qx, { ...o, ...r, ref: t });
});
v0.displayName = h0;
var g0 = "DropdownMenuSubContent", x0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Be(n);
  return /* @__PURE__ */ c.jsx(
    Xx,
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
x0.displayName = g0;
var b0 = rd, y0 = ad, w0 = sd, C0 = cd, S0 = ld, wi = dd, k0 = ud;
function Ci(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var ko = "Popover", [fd] = Ie(ko, [
  It
]), tr = It(), [N0, Tt] = fd(ko), md = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = tr(t), l = m.useRef(null), [d, u] = m.useState(!1), [f, p] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ko
  });
  return /* @__PURE__ */ c.jsx(xo, { ...i, children: /* @__PURE__ */ c.jsx(
    N0,
    {
      scope: t,
      contentId: Ee(),
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
md.displayName = ko;
var pd = "PopoverAnchor", hd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Tt(pd, n), a = tr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Zn, { ...a, ...r, ref: t });
  }
);
hd.displayName = pd;
var vd = "PopoverTrigger", gd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Tt(vd, n), a = tr(n), s = de(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Cd(o.open),
        ...r,
        ref: s,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...a, children: i });
  }
);
gd.displayName = vd;
var Ss = "PopoverPortal", [E0, M0] = fd(Ss, {
  forceMount: void 0
}), xd = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Tt(Ss, t);
  return /* @__PURE__ */ c.jsx(E0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
xd.displayName = Ss;
var vn = "PopoverContent", bd = m.forwardRef(
  (e, t) => {
    const n = M0(vn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Tt(vn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(R0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(A0, { ...o, ref: t }) });
  }
);
bd.displayName = vn;
var P0 = /* @__PURE__ */ Dt("PopoverContent.RemoveScroll"), R0 = m.forwardRef(
  (e, t) => {
    const n = Tt(vn, e.__scopePopover), r = m.useRef(null), o = de(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return co(s);
    }, []), /* @__PURE__ */ c.jsx(qn, { as: P0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      yd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: B(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: B(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), A0 = m.forwardRef(
  (e, t) => {
    const n = Tt(vn, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      yd,
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
), yd = m.forwardRef(
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
    } = e, p = Tt(vn, n), h = tr(n);
    return so(), /* @__PURE__ */ c.jsx(
      Un,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          Xt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              bo,
              {
                "data-state": Cd(p.open),
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
), wd = "PopoverClose", D0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Tt(wd, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
D0.displayName = wd;
var j0 = "PopoverArrow", O0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = tr(n);
    return /* @__PURE__ */ c.jsx(yo, { ...o, ...r, ref: t });
  }
);
O0.displayName = j0;
function Cd(e) {
  return e ? "open" : "closed";
}
var Sd = md, _0 = hd, kd = gd, Nd = xd, ks = bd, Ns = "Progress", Es = 100, [I0] = Ie(Ns), [T0, $0] = I0(Ns), Ed = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = F0,
      ...s
    } = e;
    (o || o === 0) && !Si(o) && console.error(L0(`${o}`, "Progress"));
    const i = Si(o) ? o : Es;
    r !== null && !ki(r, i) && console.error(W0(`${r}`, "Progress"));
    const l = ki(r, i) ? r : null, d = qr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(T0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": qr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Rd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
Ed.displayName = Ns;
var Md = "ProgressIndicator", Pd = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = $0(Md, n);
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": Rd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Pd.displayName = Md;
function F0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Rd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function qr(e) {
  return typeof e == "number";
}
function Si(e) {
  return qr(e) && !isNaN(e) && e > 0;
}
function ki(e, t) {
  return qr(e) && !isNaN(e) && e <= t && e >= 0;
}
function L0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Es}\`.`;
}
function W0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Es} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var V0 = Ed, B0 = Pd, Ms = "Radio", [z0, Ad] = Ie(Ms), [H0, Y0] = z0(Ms), Dd = m.forwardRef(
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
    } = e, [f, p] = m.useState(null), h = de(t, (g) => p(g)), x = m.useRef(!1), v = f ? d || !!f.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(H0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Id(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...u,
          ref: h,
          onClick: B(e.onClick, (g) => {
            o || l == null || l(), v && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ c.jsx(
        _d,
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
Dd.displayName = Ms;
var jd = "RadioIndicator", Od = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = Y0(jd, n);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": Id(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Od.displayName = jd;
var G0 = "RadioBubbleInput", _d = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = de(s, a), l = uo(n), d = fo(t);
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
      Z.input,
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
_d.displayName = G0;
function Id(e) {
  return e ? "checked" : "unchecked";
}
var K0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], No = "RadioGroup", [U0] = Ie(No, [
  Cn,
  Ad
]), Td = Cn(), $d = Ad(), [q0, X0] = U0(No), Fd = m.forwardRef(
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
    } = e, h = Td(n), x = bn(d), [v, g] = Ve({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: No
    });
    return /* @__PURE__ */ c.jsx(
      q0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          ps,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: x,
            loop: u,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
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
Fd.displayName = No;
var Ld = "RadioGroupItem", Wd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = X0(Ld, n), s = a.disabled || r, i = Td(n), l = $d(n), d = m.useRef(null), u = de(t, d), f = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (v) => {
        K0.includes(v.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      hs,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          Dd,
          {
            disabled: s,
            required: a.required,
            checked: f,
            ...l,
            ...o,
            name: a.name,
            ref: u,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: B((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: B(o.onFocus, () => {
              var h;
              p.current && ((h = d.current) == null || h.click());
            })
          }
        )
      }
    );
  }
);
Wd.displayName = Ld;
var Z0 = "RadioGroupIndicator", Vd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = $d(n);
    return /* @__PURE__ */ c.jsx(Od, { ...o, ...r, ref: t });
  }
);
Vd.displayName = Z0;
var Q0 = Fd, J0 = Wd, eb = Vd, tb = [" ", "Enter", "ArrowUp", "ArrowDown"], nb = [" ", "Enter"], Kt = "Select", [Eo, Mo, rb] = Kn(Kt), [Sn] = Ie(Kt, [
  rb,
  It
]), Po = It(), [ob, $t] = Sn(Kt), [ab, sb] = Sn(Kt), Bd = (e) => {
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
  } = e, v = Po(t), [g, w] = m.useState(null), [b, y] = m.useState(null), [N, C] = m.useState(!1), P = bn(d), [S, M] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Kt
  }), [_, T] = Ve({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Kt
  }), F = m.useRef(null), L = g ? x || !!g.closest("form") : !0, [H, O] = m.useState(/* @__PURE__ */ new Set()), z = Array.from(H).map((W) => W.props.value).join(";");
  return /* @__PURE__ */ c.jsx(xo, { ...v, children: /* @__PURE__ */ c.jsxs(
    ob,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: N,
      onValueNodeHasChildrenChange: C,
      contentId: Ee(),
      value: _,
      onValueChange: T,
      open: S,
      onOpenChange: M,
      dir: P,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(Eo.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          ab,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((W) => {
              O((q) => new Set(q).add(W));
            }, []),
            onNativeOptionRemove: m.useCallback((W) => {
              O((q) => {
                const j = new Set(q);
                return j.delete(W), j;
              });
            }, []),
            children: n
          }
        ) }),
        L ? /* @__PURE__ */ c.jsxs(
          pu,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: _,
            onChange: (W) => T(W.target.value),
            disabled: p,
            form: x,
            children: [
              _ === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          z
        ) : null
      ]
    }
  ) });
};
Bd.displayName = Kt;
var zd = "SelectTrigger", Hd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Po(n), s = $t(zd, n), i = s.disabled || r, l = de(t, s.onTriggerChange), d = Mo(n), u = m.useRef("touch"), [f, p, h] = vu((v) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === s.value), b = gu(g, v, w);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      Z.button,
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
        "data-placeholder": hu(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: B(o.onClick, (v) => {
          v.currentTarget.focus(), u.current !== "mouse" && x(v);
        }),
        onPointerDown: B(o.onPointerDown, (v) => {
          u.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: B(o.onKeyDown, (v) => {
          const g = f.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(g && v.key === " ") && tb.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
Hd.displayName = zd;
var Yd = "SelectValue", Gd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = $t(Yd, n), { onValueNodeHasChildrenChange: d } = l, u = a !== void 0, f = de(t, l.onValueNodeChange);
    return _e(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ c.jsx(
      Z.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: hu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Gd.displayName = Yd;
var ib = "SelectIcon", Kd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Kd.displayName = ib;
var cb = "SelectPortal", Ud = (e) => /* @__PURE__ */ c.jsx(Zt, { asChild: !0, ...e });
Ud.displayName = cb;
var Ut = "SelectContent", qd = m.forwardRef(
  (e, t) => {
    const n = $t(Ut, e.__scopeSelect), [r, o] = m.useState();
    if (_e(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Gn.createPortal(
        /* @__PURE__ */ c.jsx(Xd, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Eo.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Zd, { ...e, ref: t });
  }
);
qd.displayName = Ut;
var Je = 10, [Xd, Ft] = Sn(Ut), lb = "SelectContentImpl", db = /* @__PURE__ */ Dt("SelectContent.RemoveScroll"), Zd = m.forwardRef(
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
    } = e, b = $t(Ut, n), [y, N] = m.useState(null), [C, P] = m.useState(null), S = de(t, (D) => N(D)), [M, _] = m.useState(null), [T, F] = m.useState(
      null
    ), L = Mo(n), [H, O] = m.useState(!1), z = m.useRef(!1);
    m.useEffect(() => {
      if (y) return co(y);
    }, [y]), so();
    const W = m.useCallback(
      (D) => {
        const [Q, ...J] = L().map((U) => U.ref.current), [se] = J.slice(-1), me = document.activeElement;
        for (const U of D)
          if (U === me || (U == null || U.scrollIntoView({ block: "nearest" }), U === Q && C && (C.scrollTop = 0), U === se && C && (C.scrollTop = C.scrollHeight), U == null || U.focus(), document.activeElement !== me)) return;
      },
      [L, C]
    ), q = m.useCallback(
      () => W([M, y]),
      [W, M, y]
    );
    m.useEffect(() => {
      H && q();
    }, [H, q]);
    const { onOpenChange: j, triggerPointerDownPosRef: $ } = b;
    m.useEffect(() => {
      if (y) {
        let D = { x: 0, y: 0 };
        const Q = (se) => {
          var me, U;
          D = {
            x: Math.abs(Math.round(se.pageX) - (((me = $.current) == null ? void 0 : me.x) ?? 0)),
            y: Math.abs(Math.round(se.pageY) - (((U = $.current) == null ? void 0 : U.y) ?? 0))
          };
        }, J = (se) => {
          D.x <= 10 && D.y <= 10 ? se.preventDefault() : y.contains(se.target) || j(!1), document.removeEventListener("pointermove", Q), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", Q), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Q), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [y, j, $]), m.useEffect(() => {
      const D = () => j(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [j]);
    const [ne, R] = vu((D) => {
      const Q = L().filter((me) => !me.disabled), J = Q.find((me) => me.ref.current === document.activeElement), se = gu(Q, D, J);
      se && setTimeout(() => se.ref.current.focus());
    }), E = m.useCallback(
      (D, Q, J) => {
        const se = !z.current && !J;
        (b.value !== void 0 && b.value === Q || se) && (_(D), se && (z.current = !0));
      },
      [b.value]
    ), I = m.useCallback(() => y == null ? void 0 : y.focus(), [y]), V = m.useCallback(
      (D, Q, J) => {
        const se = !z.current && !J;
        (b.value !== void 0 && b.value === Q || se) && F(D);
      },
      [b.value]
    ), Y = r === "popper" ? Sa : Qd, K = Y === Sa ? {
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
      Xd,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: P,
        itemRefCallback: E,
        selectedItem: M,
        onItemLeave: I,
        itemTextRefCallback: V,
        focusSelectedItem: q,
        selectedItemText: T,
        position: r,
        isPositioned: H,
        searchRef: ne,
        children: /* @__PURE__ */ c.jsx(qn, { as: db, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Un,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: B(o, (D) => {
              var Q;
              (Q = b.trigger) == null || Q.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  Y,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...w,
                    ...K,
                    onPlaced: () => O(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: B(w.onKeyDown, (D) => {
                      const Q = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !Q && D.key.length === 1 && R(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let se = L().filter((me) => !me.disabled).map((me) => me.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (se = se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const me = D.target, U = se.indexOf(me);
                          se = se.slice(U + 1);
                        }
                        setTimeout(() => W(se)), D.preventDefault();
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
Zd.displayName = lb;
var ub = "SelectItemAlignedPosition", Qd = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = $t(Ut, n), s = Ft(Ut, n), [i, l] = m.useState(null), [d, u] = m.useState(null), f = de(t, (S) => u(S)), p = Mo(n), h = m.useRef(!1), x = m.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = s, y = m.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && v && g && w) {
      const S = a.trigger.getBoundingClientRect(), M = d.getBoundingClientRect(), _ = a.valueNode.getBoundingClientRect(), T = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const me = T.left - M.left, U = _.left - me, Se = S.left - U, we = S.width + Se, Le = Math.max(we, M.width), De = window.innerWidth - Je, Qe = Ci(U, [
          Je,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Je, De - Le)
        ]);
        i.style.minWidth = we + "px", i.style.left = Qe + "px";
      } else {
        const me = M.right - T.right, U = window.innerWidth - _.right - me, Se = window.innerWidth - S.right - U, we = S.width + Se, Le = Math.max(we, M.width), De = window.innerWidth - Je, Qe = Ci(U, [
          Je,
          Math.max(Je, De - Le)
        ]);
        i.style.minWidth = we + "px", i.style.right = Qe + "px";
      }
      const F = p(), L = window.innerHeight - Je * 2, H = v.scrollHeight, O = window.getComputedStyle(d), z = parseInt(O.borderTopWidth, 10), W = parseInt(O.paddingTop, 10), q = parseInt(O.borderBottomWidth, 10), j = parseInt(O.paddingBottom, 10), $ = z + W + H + j + q, ne = Math.min(g.offsetHeight * 5, $), R = window.getComputedStyle(v), E = parseInt(R.paddingTop, 10), I = parseInt(R.paddingBottom, 10), V = S.top + S.height / 2 - Je, Y = L - V, K = g.offsetHeight / 2, D = g.offsetTop + K, Q = z + W + D, J = $ - Q;
      if (Q <= V) {
        const me = F.length > 0 && g === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const U = d.clientHeight - v.offsetTop - v.offsetHeight, Se = Math.max(
          Y,
          K + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (me ? I : 0) + U + q
        ), we = Q + Se;
        i.style.height = we + "px";
      } else {
        const me = F.length > 0 && g === F[0].ref.current;
        i.style.top = "0px";
        const Se = Math.max(
          V,
          z + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (me ? E : 0) + K
        ) + J;
        i.style.height = Se + "px", v.scrollTop = Q - V + v.offsetTop;
      }
      i.style.margin = `${Je}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = L + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
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
  _e(() => y(), [y]);
  const [N, C] = m.useState();
  _e(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const P = m.useCallback(
    (S) => {
      S && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    mb,
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
            zIndex: N
          },
          children: /* @__PURE__ */ c.jsx(
            Z.div,
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
Qd.displayName = ub;
var fb = "SelectPopperPosition", Sa = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Je,
    ...a
  } = e, s = Po(n);
  return /* @__PURE__ */ c.jsx(
    bo,
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
Sa.displayName = fb;
var [mb, Ps] = Sn(Ut, {}), ka = "SelectViewport", Jd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Ft(ka, n), s = Ps(ka, n), i = de(t, a.onViewportChange), l = m.useRef(0);
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
      /* @__PURE__ */ c.jsx(Eo.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        Z.div,
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
          onScroll: B(o.onScroll, (d) => {
            const u = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && f) {
              const h = Math.abs(l.current - u.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - Je * 2, v = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(v, g);
                if (w < x) {
                  const b = w + h, y = Math.min(x, b), N = b - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (u.scrollTop = N > 0 ? N : 0, f.style.justifyContent = "flex-end");
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
Jd.displayName = ka;
var eu = "SelectGroup", [pb, hb] = Sn(eu), tu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ee();
    return /* @__PURE__ */ c.jsx(pb, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
tu.displayName = eu;
var nu = "SelectLabel", ru = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = hb(nu, n);
    return /* @__PURE__ */ c.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
ru.displayName = nu;
var Xr = "SelectItem", [vb, ou] = Sn(Xr), au = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = $t(Xr, n), l = Ft(Xr, n), d = i.value === r, [u, f] = m.useState(a ?? ""), [p, h] = m.useState(!1), x = de(
      t,
      (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, r, o);
      }
    ), v = Ee(), g = m.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      vb,
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
          Eo.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
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
                onFocus: B(s.onFocus, () => h(!0)),
                onBlur: B(s.onBlur, () => h(!1)),
                onClick: B(s.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: B(s.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: B(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: B(s.onPointerMove, (b) => {
                  var y;
                  g.current = b.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: B(s.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: B(s.onKeyDown, (b) => {
                  var N;
                  ((N = l.searchRef) == null ? void 0 : N.current) !== "" && b.key === " " || (nb.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
au.displayName = Xr;
var In = "SelectItemText", su = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = $t(In, n), i = Ft(In, n), l = ou(In, n), d = sb(In, n), [u, f] = m.useState(null), p = de(
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
    return _e(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Z.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Gn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
su.displayName = In;
var iu = "SelectItemIndicator", cu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ou(iu, n).isSelected ? /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
cu.displayName = iu;
var Na = "SelectScrollUpButton", lu = m.forwardRef((e, t) => {
  const n = Ft(Na, e.__scopeSelect), r = Ps(Na, e.__scopeSelect), [o, a] = m.useState(!1), s = de(t, r.onScrollButtonChange);
  return _e(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    uu,
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
lu.displayName = Na;
var Ea = "SelectScrollDownButton", du = m.forwardRef((e, t) => {
  const n = Ft(Ea, e.__scopeSelect), r = Ps(Ea, e.__scopeSelect), [o, a] = m.useState(!1), s = de(t, r.onScrollButtonChange);
  return _e(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < d;
        a(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    uu,
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
du.displayName = Ea;
var uu = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Ft("SelectScrollButton", n), s = m.useRef(null), i = Mo(n), l = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), _e(() => {
    var u;
    const d = i().find((f) => f.ref.current === document.activeElement);
    (u = d == null ? void 0 : d.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: B(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: B(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: B(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), gb = "SelectSeparator", fu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
fu.displayName = gb;
var Ma = "SelectArrow", mu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Po(n), a = $t(Ma, n), s = Ft(Ma, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(yo, { ...o, ...r, ref: t }) : null;
  }
);
mu.displayName = Ma;
var xb = "SelectBubbleInput", pu = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = m.useRef(null), a = de(r, o), s = uo(t);
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
      Z.select,
      {
        ...n,
        style: { ...lc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
pu.displayName = xb;
function hu(e) {
  return e === "" || e === void 0;
}
function vu(e) {
  const t = ze(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
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
function gu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = bb(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function bb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var yb = Bd, wb = Hd, Cb = Gd, Sb = Kd, kb = Ud, Nb = qd, Eb = Jd, Mb = tu, Pb = ru, Rb = au, Ab = su, Db = cu, jb = lu, Ob = du, _b = fu, Ib = mu, Ro = "Switch", [Tb] = Ie(Ro), [$b, Fb] = Tb(Ro), xu = m.forwardRef(
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
    } = e, [p, h] = m.useState(null), x = de(t, (y) => h(y)), v = m.useRef(!1), g = p ? u || !!p.closest("form") : !0, [w, b] = Ve({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Ro
    });
    return /* @__PURE__ */ c.jsxs($b, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": Cu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: x,
          onClick: B(e.onClick, (y) => {
            b((N) => !N), g && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        wu,
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
xu.displayName = Ro;
var bu = "SwitchThumb", yu = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Fb(bu, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": Cu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
yu.displayName = bu;
var Lb = "SwitchBubbleInput", wu = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = de(s, a), l = uo(n), d = fo(t);
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
wu.displayName = Lb;
function Cu(e) {
  return e ? "checked" : "unchecked";
}
var Wb = xu, Vb = yu, Ao = "Tabs", [Bb] = Ie(Ao, [
  Cn
]), Su = Cn(), [zb, Rs] = Bb(Ao), ku = m.forwardRef(
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
    } = e, u = bn(i), [f, p] = Ve({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Ao
    });
    return /* @__PURE__ */ c.jsx(
      zb,
      {
        scope: n,
        baseId: Ee(),
        value: f,
        onValueChange: p,
        orientation: s,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
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
ku.displayName = Ao;
var Nu = "TabsList", Eu = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Rs(Nu, n), s = Su(n);
    return /* @__PURE__ */ c.jsx(
      ps,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
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
Eu.displayName = Nu;
var Mu = "TabsTrigger", Pu = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Rs(Mu, n), i = Su(n), l = Au(s.baseId, r), d = Du(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ c.jsx(
      hs,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ c.jsx(
          Z.button,
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
            onMouseDown: B(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: B(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: B(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !u && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Pu.displayName = Mu;
var Ru = "TabsContent", Hb = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Rs(Ru, n), l = Au(i.baseId, r), d = Du(i.baseId, r), u = r === i.value, f = m.useRef(u);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx($e, { present: o || u, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      Z.div,
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
Hb.displayName = Ru;
function Au(e, t) {
  return `${e}-trigger-${t}`;
}
function Du(e, t) {
  return `${e}-content-${t}`;
}
var Yb = ku, Gb = Eu, Kb = Pu, As = "ToastProvider", [Ds, Ub, qb] = Kn("Toast"), [ju] = Ie("Toast", [qb]), [Xb, Do] = ju(As), Ou = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = m.useState(null), [d, u] = m.useState(0), f = m.useRef(!1), p = m.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${As}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(Ds.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    Xb,
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
Ou.displayName = As;
var _u = "ToastViewport", Zb = ["F8"], Pa = "toast.viewportPause", Ra = "toast.viewportResume", Iu = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Zb,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Do(_u, n), i = Ub(n), l = m.useRef(null), d = m.useRef(null), u = m.useRef(null), f = m.useRef(null), p = de(t, f, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    m.useEffect(() => {
      const g = (w) => {
        var y;
        r.length !== 0 && r.every((N) => w[N] || w.code === N) && ((y = f.current) == null || y.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), m.useEffect(() => {
      const g = l.current, w = f.current;
      if (x && g && w) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const P = new CustomEvent(Pa);
            w.dispatchEvent(P), s.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (s.isClosePausedRef.current) {
            const P = new CustomEvent(Ra);
            w.dispatchEvent(P), s.isClosePausedRef.current = !1;
          }
        }, N = (P) => {
          !g.contains(P.relatedTarget) && y();
        }, C = () => {
          g.contains(document.activeElement) || y();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", N), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", N), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [x, s.isClosePausedRef]);
    const v = m.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((y) => {
          const N = y.ref.current, C = [N, ...dy(N)];
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
          var C, P, S;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const M = document.activeElement, _ = b.shiftKey;
            if (b.target === g && _) {
              (C = d.current) == null || C.focus();
              return;
            }
            const L = v({ tabbingDirection: _ ? "backwards" : "forwards" }), H = L.findIndex((O) => O === M);
            na(L.slice(H + 1)) ? b.preventDefault() : _ ? (P = d.current) == null || P.focus() : (S = u.current) == null || S.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, v]), /* @__PURE__ */ c.jsxs(
      kh,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            Aa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                na(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(Ds.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Z.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            Aa,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                na(g);
              }
            }
          )
        ]
      }
    );
  }
);
Iu.displayName = _u;
var Tu = "ToastFocusProxy", Aa = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Do(Tu, n);
    return /* @__PURE__ */ c.jsx(
      no,
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
Aa.displayName = Tu;
var nr = "Toast", Qb = "toast.swipeStart", Jb = "toast.swipeMove", ey = "toast.swipeCancel", ty = "toast.swipeEnd", $u = m.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Ve({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: nr
    });
    return /* @__PURE__ */ c.jsx($e, { present: n || i, children: /* @__PURE__ */ c.jsx(
      oy,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: ze(e.onPause),
        onResume: ze(e.onResume),
        onSwipeStart: B(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: B(e.onSwipeMove, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: B(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: B(e.onSwipeEnd, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1);
        })
      }
    ) });
  }
);
$u.displayName = nr;
var [ny, ry] = ju(nr, {
  onClose() {
  }
}), oy = m.forwardRef(
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
    } = e, v = Do(nr, n), [g, w] = m.useState(null), b = de(t, (O) => w(O)), y = m.useRef(null), N = m.useRef(null), C = o || v.duration, P = m.useRef(0), S = m.useRef(C), M = m.useRef(0), { onToastAdd: _, onToastRemove: T } = v, F = ze(() => {
      var z;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((z = v.viewport) == null || z.focus()), s();
    }), L = m.useCallback(
      (O) => {
        !O || O === 1 / 0 || (window.clearTimeout(M.current), P.current = (/* @__PURE__ */ new Date()).getTime(), M.current = window.setTimeout(F, O));
      },
      [F]
    );
    m.useEffect(() => {
      const O = v.viewport;
      if (O) {
        const z = () => {
          L(S.current), d == null || d();
        }, W = () => {
          const q = (/* @__PURE__ */ new Date()).getTime() - P.current;
          S.current = S.current - q, window.clearTimeout(M.current), l == null || l();
        };
        return O.addEventListener(Pa, W), O.addEventListener(Ra, z), () => {
          O.removeEventListener(Pa, W), O.removeEventListener(Ra, z);
        };
      }
    }, [v.viewport, C, l, d, L]), m.useEffect(() => {
      a && !v.isClosePausedRef.current && L(C);
    }, [a, C, v.isClosePausedRef, L]), m.useEffect(() => (_(), () => T()), [_, T]);
    const H = m.useMemo(() => g ? Yu(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      H && /* @__PURE__ */ c.jsx(
        ay,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: H
        }
      ),
      /* @__PURE__ */ c.jsx(ny, { scope: n, onClose: F, children: Gn.createPortal(
        /* @__PURE__ */ c.jsx(Ds.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Sh,
          {
            asChild: !0,
            onEscapeKeyDown: B(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || F(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              Z.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: B(e.onKeyDown, (O) => {
                  O.key === "Escape" && (i == null || i(O.nativeEvent), O.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: B(e.onPointerDown, (O) => {
                  O.button === 0 && (y.current = { x: O.clientX, y: O.clientY });
                }),
                onPointerMove: B(e.onPointerMove, (O) => {
                  if (!y.current) return;
                  const z = O.clientX - y.current.x, W = O.clientY - y.current.y, q = !!N.current, j = ["left", "right"].includes(v.swipeDirection), $ = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, ne = j ? $(0, z) : 0, R = j ? 0 : $(0, W), E = O.pointerType === "touch" ? 10 : 2, I = { x: ne, y: R }, V = { originalEvent: O, delta: I };
                  q ? (N.current = I, kr(Jb, f, V, {
                    discrete: !1
                  })) : Ni(I, v.swipeDirection, E) ? (N.current = I, kr(Qb, u, V, {
                    discrete: !1
                  }), O.target.setPointerCapture(O.pointerId)) : (Math.abs(z) > E || Math.abs(W) > E) && (y.current = null);
                }),
                onPointerUp: B(e.onPointerUp, (O) => {
                  const z = N.current, W = O.target;
                  if (W.hasPointerCapture(O.pointerId) && W.releasePointerCapture(O.pointerId), N.current = null, y.current = null, z) {
                    const q = O.currentTarget, j = { originalEvent: O, delta: z };
                    Ni(z, v.swipeDirection, v.swipeThreshold) ? kr(ty, h, j, {
                      discrete: !0
                    }) : kr(
                      ey,
                      p,
                      j,
                      {
                        discrete: !0
                      }
                    ), q.addEventListener("click", ($) => $.preventDefault(), {
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
), ay = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Do(nr, t), [a, s] = m.useState(!1), [i, l] = m.useState(!1);
  return cy(() => s(!0)), m.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Zt, { asChild: !0, children: /* @__PURE__ */ c.jsx(no, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, sy = "ToastTitle", Fu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Fu.displayName = sy;
var iy = "ToastDescription", Lu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Lu.displayName = iy;
var Wu = "ToastAction", Vu = m.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Hu, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(zu, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Wu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Vu.displayName = Wu;
var Bu = "ToastClose", zu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = ry(Bu, n);
    return /* @__PURE__ */ c.jsx(Hu, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, o.onClose)
      }
    ) });
  }
);
zu.displayName = Bu;
var Hu = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Yu(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), ly(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Yu(r));
    }
  }), t;
}
function kr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ya(o, a) : o.dispatchEvent(a);
}
var Ni = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function cy(e = () => {
}) {
  const t = ze(e);
  _e(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function ly(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function dy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function na(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var uy = Ou, fy = Iu, my = $u, py = Fu, hy = Lu, vy = Vu, [jo] = Ie("Tooltip", [
  It
]), Oo = It(), Gu = "TooltipProvider", gy = 700, Da = "tooltip.open", [xy, js] = jo(Gu), Ku = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = gy,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = m.useRef(!0), i = m.useRef(!1), l = m.useRef(0);
  return m.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    xy,
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
Ku.displayName = Gu;
var zn = "Tooltip", [by, rr] = jo(zn), Uu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = js(zn, e.__scopeTooltip), d = Oo(t), [u, f] = m.useState(null), p = Ee(), h = m.useRef(0), x = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, g = m.useRef(!1), [w, b] = Ve({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Da))) : l.onClose(), a == null || a(S);
    },
    caller: zn
  }), y = m.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), N = m.useCallback(() => {
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
  }, []), /* @__PURE__ */ c.jsx(xo, { ...d, children: /* @__PURE__ */ c.jsx(
    by,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: m.useCallback(() => {
        l.isOpenDelayedRef.current ? P() : N();
      }, [l.isOpenDelayedRef, P, N]),
      onTriggerLeave: m.useCallback(() => {
        x ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, x]),
      onOpen: N,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Uu.displayName = zn;
var ja = "TooltipTrigger", qu = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = rr(ja, n), a = js(ja, n), s = Oo(n), i = m.useRef(null), l = de(t, i, o.onTriggerChange), d = m.useRef(!1), u = m.useRef(!1), f = m.useCallback(() => d.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: B(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: B(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: B(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: B(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: B(e.onBlur, o.onClose),
        onClick: B(e.onClick, o.onClose)
      }
    ) });
  }
);
qu.displayName = ja;
var Os = "TooltipPortal", [yy, wy] = jo(Os, {
  forceMount: void 0
}), Xu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = rr(Os, t);
  return /* @__PURE__ */ c.jsx(yy, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
Xu.displayName = Os;
var gn = "TooltipContent", Zu = m.forwardRef(
  (e, t) => {
    const n = wy(gn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = rr(gn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx($e, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Qu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(Cy, { side: o, ...a, ref: t }) });
  }
), Cy = m.forwardRef((e, t) => {
  const n = rr(gn, e.__scopeTooltip), r = js(gn, e.__scopeTooltip), o = m.useRef(null), a = de(t, o), [s, i] = m.useState(null), { trigger: l, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = m.useCallback(() => {
    i(null), f(!1);
  }, [f]), h = m.useCallback(
    (x, v) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = My(w, g.getBoundingClientRect()), y = Py(w, b), N = Ry(v.getBoundingClientRect()), C = Dy([...y, ...N]);
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
        const g = v.target, w = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !Ay(w, s);
        b ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, u, s, d, p]), /* @__PURE__ */ c.jsx(Qu, { ...e, ref: a });
}), [Sy, ky] = jo(zn, { isInside: !1 }), Ny = /* @__PURE__ */ Op("TooltipContent"), Qu = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = rr(gn, n), d = Oo(n), { onClose: u } = l;
    return m.useEffect(() => (document.addEventListener(Da, u), () => document.removeEventListener(Da, u)), [u]), m.useEffect(() => {
      if (l.trigger) {
        const f = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ c.jsx(
      Xt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ c.jsxs(
          bo,
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
              /* @__PURE__ */ c.jsx(Ny, { children: r }),
              /* @__PURE__ */ c.jsx(Sy, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Lp, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Zu.displayName = gn;
var Ju = "TooltipArrow", Ey = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Oo(n);
    return ky(
      Ju,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(yo, { ...o, ...r, ref: t });
  }
);
Ey.displayName = Ju;
function My(e, t) {
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
function Py(e, t, n = 5) {
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
function Ry(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Ay(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function Dy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), jy(t);
}
function jy(e) {
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
var Oy = Ku, _y = Uu, Iy = qu, Ty = Xu, $y = Zu;
function ef(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ef(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function tf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ef(e)) && (r && (r += " "), r += t);
  return r;
}
const Ei = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Mi = tf, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Mi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null) return null;
    const p = Ei(u) || Ei(f);
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
  return Mi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, _s = "-", Fy = (e) => {
  const t = Wy(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(_s);
      return i[0] === "" && i.length !== 1 && i.shift(), nf(i, t) || Ly(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, nf = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? nf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(_s);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Pi = /^\[(.+)\]$/, Ly = (e) => {
  if (Pi.test(e)) {
    const t = Pi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Wy = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Oa(n[o], r, o, t);
  return r;
}, Oa = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Ri(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Vy(o)) {
        Oa(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Oa(s, Ri(t, a), n, r);
    });
  });
}, Ri = (e, t) => {
  let n = e;
  return t.split(_s).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Vy = (e) => e.isThemeGetter, By = (e) => {
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
}, _a = "!", Ia = ":", zy = Ia.length, Hy = (e) => {
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
        if (v === Ia) {
          a.push(o.slice(l, x)), l = x + zy;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const u = a.length === 0 ? o : o.substring(l), f = Yy(u), p = f !== u, h = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Ia, a = r;
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
}, Yy = (e) => e.endsWith(_a) ? e.substring(0, e.length - 1) : e.startsWith(_a) ? e.substring(1) : e, Gy = (e) => {
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
}, Ky = (e) => ({
  cache: By(e.cacheSize),
  parseClassName: Hy(e),
  sortModifiers: Gy(e),
  ...Fy(e)
}), Uy = /\s+/, qy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Uy);
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
    const b = a(p).join(":"), y = h ? b + _a : b, N = y + w;
    if (s.includes(N))
      continue;
    s.push(N);
    const C = o(w, g);
    for (let P = 0; P < C.length; ++P) {
      const S = C[P];
      s.push(y + S);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Xy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = rf(t)) && (r && (r += " "), r += n);
  return r;
}
const rf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = rf(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ai(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((u, f) => f(u), e());
    return n = Ky(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const u = qy(l, n);
    return o(l, u), u;
  }
  return function() {
    return a(Xy.apply(null, arguments));
  };
}
const Pe = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, of = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, af = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Zy = /^\d+\/\d+$/, Qy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ew = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, tw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, nw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, cn = (e) => Zy.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), Mt = (e) => !!e && Number.isInteger(Number(e)), ra = (e) => e.endsWith("%") && ue(e.slice(0, -1)), bt = (e) => Qy.test(e), rw = () => !0, ow = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Jy.test(e) && !ew.test(e)
), sf = () => !1, aw = (e) => tw.test(e), sw = (e) => nw.test(e), iw = (e) => !ee(e) && !te(e), cw = (e) => kn(e, df, sf), ee = (e) => of.test(e), Vt = (e) => kn(e, uf, ow), oa = (e) => kn(e, mw, ue), Di = (e) => kn(e, cf, sf), lw = (e) => kn(e, lf, sw), Nr = (e) => kn(e, ff, aw), te = (e) => af.test(e), jn = (e) => Nn(e, uf), dw = (e) => Nn(e, pw), ji = (e) => Nn(e, cf), uw = (e) => Nn(e, df), fw = (e) => Nn(e, lf), Er = (e) => Nn(e, ff, !0), kn = (e, t, n) => {
  const r = of.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Nn = (e, t, n = !1) => {
  const r = af.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, cf = (e) => e === "position" || e === "percentage", lf = (e) => e === "image" || e === "url", df = (e) => e === "length" || e === "size" || e === "bg-size", uf = (e) => e === "length", mw = (e) => e === "number", pw = (e) => e === "family-name", ff = (e) => e === "shadow", Oi = () => {
  const e = Pe("color"), t = Pe("font"), n = Pe("text"), r = Pe("font-weight"), o = Pe("tracking"), a = Pe("leading"), s = Pe("breakpoint"), i = Pe("container"), l = Pe("spacing"), d = Pe("radius"), u = Pe("shadow"), f = Pe("inset-shadow"), p = Pe("text-shadow"), h = Pe("drop-shadow"), x = Pe("blur"), v = Pe("perspective"), g = Pe("aspect"), w = Pe("ease"), b = Pe("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], C = () => [...N(), te, ee], P = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], M = () => [te, ee, l], _ = () => [cn, "full", "auto", ...M()], T = () => [Mt, "none", "subgrid", te, ee], F = () => ["auto", {
    span: ["full", Mt, te, ee]
  }, Mt, te, ee], L = () => [Mt, "auto", te, ee], H = () => ["auto", "min", "max", "fr", te, ee], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], W = () => ["auto", ...M()], q = () => [cn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...M()], j = () => [e, te, ee], $ = () => [...N(), ji, Di, {
    position: [te, ee]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", uw, cw, {
    size: [te, ee]
  }], E = () => [ra, jn, Vt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], V = () => ["", ue, jn, Vt], Y = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [ue, ra, ji, Di], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", ue, te, ee], se = () => ["none", ue, te, ee], me = () => [ue, te, ee], U = () => [cn, "full", ...M()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [bt],
      breakpoint: [bt],
      color: [rw],
      container: [bt],
      "drop-shadow": [bt],
      ease: ["in", "out", "in-out"],
      font: [iw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [bt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [bt],
      shadow: [bt],
      spacing: ["px", ue],
      text: [bt],
      "text-shadow": [bt],
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
        aspect: ["auto", "square", cn, ee, te, g]
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
        columns: [ue, ee, te, i]
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
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: _()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: _()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        z: [Mt, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [cn, "full", "auto", i, ...M()]
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
        flex: [ue, cn, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Mt, "first", "last", "none", te, ee]
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
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": H()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": H()
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
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
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
        size: q()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...q()]
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
          ...q()
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
          ...q()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...q()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...q()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...q()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, jn, Vt]
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
        font: [r, te, oa]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ra, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [dw, ee, t]
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
        tracking: [o, te, ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", te, oa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...M()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te, ee]
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
        list: ["disc", "decimal", "none", te, ee]
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ue, "from-font", "auto", te, Vt]
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
        "underline-offset": [ue, "auto", te, ee]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te, ee]
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
        content: ["none", te, ee]
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
        bg: ne()
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
          }, Mt, te, ee],
          radial: ["", te, ee],
          conic: [Mt, te, ee]
        }, fw, lw]
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
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
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
        "divide-y": V()
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
        border: [...Y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Y(), "hidden", "none"]
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
        outline: [...Y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ue, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, jn, Vt]
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
          Er,
          Nr
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
        "inset-shadow": ["none", f, Er, Nr]
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
        ring: V()
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
        "ring-offset": [ue, Vt]
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
        "inset-ring": V()
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
        "text-shadow": ["none", p, Er, Nr]
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
        opacity: [ue, te, ee]
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
        "mask-linear": [ue]
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
        "mask-radial": [te, ee]
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
        "mask-radial-at": N()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ue]
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
        mask: $()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ne()
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
        mask: ["none", te, ee]
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
          te,
          ee
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ue, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, te, ee]
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
          Er,
          Nr
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
        grayscale: ["", ue, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, te, ee]
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
          te,
          ee
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ue, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, te, ee]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", te, ee]
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
        duration: [ue, "initial", te, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, te, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, te, ee]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", b, te, ee]
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
        perspective: [v, te, ee]
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
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        transform: [te, ee, "", "none", "gpu", "cpu"]
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
        translate: U()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": U()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": U()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": U()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te, ee]
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
        "will-change": ["auto", "scroll", "contents", "transform", te, ee]
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
        stroke: [ue, jn, Vt, oa]
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
}, hw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (Tn(e, "cacheSize", t), Tn(e, "prefix", n), Tn(e, "experimentalParseClassName", r), Mr(e.theme, a.theme), Mr(e.classGroups, a.classGroups), Mr(e.conflictingClassGroups, a.conflictingClassGroups), Mr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Tn(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Pr(e.theme, o.theme), Pr(e.classGroups, o.classGroups), Pr(e.conflictingClassGroups, o.conflictingClassGroups), Pr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), mf(e, o, "orderSensitiveModifiers"), e), Tn = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Mr = (e, t) => {
  if (t)
    for (const n in t)
      Tn(e, n, t[n]);
}, Pr = (e, t) => {
  if (t)
    for (const n in t)
      mf(e, t, n);
}, mf = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, vw = (e, ...t) => typeof e == "function" ? Ai(Oi, e, ...t) : Ai(() => hw(Oi(), e), ...t), gw = vw({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), A = (...e) => gw(tf(e)), Oe = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return k.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return k.createElement(o, { size: n, className: r });
  }
  return e;
}, xw = ae(
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
), bw = ae(
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
), Ta = k.forwardRef(
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
      className: A(bw({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (d.onSelect = t), n !== void 0 && (d.disabled = n), s ? /* @__PURE__ */ c.jsx(wi, { ...d, children: e }) : /* @__PURE__ */ c.jsxs(wi, { ...d, children: [
      Oe(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Ta.displayName = "DropdownItem";
const yw = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  k0,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
yw.displayName = "DropdownSeparator";
const ww = k.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  S0,
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
ww.displayName = "DropdownLabel";
const Is = k.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(w0, { children: /* @__PURE__ */ c.jsx(
  C0,
  {
    ref: o,
    className: A(xw({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Is.displayName = "DropdownContent";
const Ts = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(b0, { ...a, children: e });
};
Ts.displayName = "Dropdown";
const $s = k.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  y0,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
$s.displayName = "DropdownTrigger";
const NN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(Ts, { children: [
  /* @__PURE__ */ c.jsx(
    $s,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(Cp, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ c.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ c.jsx(
          eo,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ c.jsxs(Is, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), pf = k.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Xs,
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
    Xs,
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
pf.displayName = "Accordion";
const hf = k.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    fh,
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
hf.displayName = "AccordionItem";
const vf = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(mh, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  ph,
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
        eo,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
vf.displayName = "AccordionTrigger";
const gf = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  hh,
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
gf.displayName = "AccordionContent";
const EN = Object.assign(pf, {
  Item: hf,
  Trigger: vf,
  Content: gf
}), _i = ae(
  `px-xxs text-xs font-bold h-4.5 relative inline-flex flex-shrink-0
  items-center justify-center leading-none`,
  {
    variants: {
      intent: {
        default: `rounded-sm bg-shape-accent-lime-pale
        text-shape-interactive-primary-selected`,
        new: "rounded-sm text-accent-purple-soft bg-shape-accent-purple-pale",
        danger: `rounded-sm border-interactive-alert-default text-body-alert
        pl-4.5 border border-dashed`
      }
    },
    defaultVariants: {
      intent: "default"
    }
  }
), Cw = k.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Np : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      to,
      {
        className: A(_i({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: A(_i({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && Oe(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
Cw.displayName = "Badge";
const Sw = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), aa = ae(
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
), kw = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Nw = k.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = rc,
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
        className: A(Sw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: l.map((d, u) => {
          const f = u === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(k.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "min-w-0 flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(aa({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: A(
                  aa({ isActive: f })
                ),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(aa({ isActive: !0 })),
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
                    className: A(kw({ size: t }))
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
Nw.displayName = "Breadcrumbs";
const Ew = ae(
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
), xf = k.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    V0,
    {
      ref: s,
      className: A(Ew({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        B0,
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
xf.displayName = "ProgressIndicator.Linear";
const Mw = ae("flex items-center", {
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
}), Pw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Zr = {
  sm: 12,
  md: 10
}, Ii = {
  sm: (50 - Zr.sm / 2).toString(),
  md: (50 - Zr.md / 2).toString()
}, bf = k.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: A(Mw({ size: t, layout: e }), r),
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
            className: A(Pw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Ii[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Zr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Ii[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: Zr[t],
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
bf.displayName = "ProgressIndicator.Circular";
const _o = {
  Linear: xf,
  Circular: bf
}, sa = ae(
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
), Rr = ae("", {
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
}), Re = k.forwardRef(
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
    const f = a ? to : "button", p = !!((r || o) && !l && !(r && o)), h = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          sa({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Oe(r, {
              className: A(
                Rr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            Oe(o, {
              className: A(
                Rr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(_o.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          sa({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          Oe(r, {
            className: A(
              Rr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          Oe(o, {
            className: A(
              Rr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      f,
      {
        ref: u,
        className: A(
          sa({ intent: e, size: t, textOnly: h, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
Re.displayName = "Button";
function Rw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ia = {}, $n = {};
function zt(e, t) {
  try {
    const r = (ia[e] || (ia[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in $n ? $n[r] : Ti(r, r.split(":"));
  } catch {
    if (e in $n) return $n[e];
    const n = e == null ? void 0 : e.match(Aw);
    return n ? Ti(e, n.slice(1)) : NaN;
  }
}
const Aw = /([+-]\d\d):?(\d\d)?/;
function Ti(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return $n[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class ut extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(zt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), yf(this), $a(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new ut(...n, t) : new ut(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new ut(+this, t);
  }
  getTimezoneOffset() {
    const t = -zt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), $a(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ut(+new Date(t), this.timeZone);
  }
  //#endregion
}
const $i = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!$i.test(e)) return;
  const t = e.replace($i, "$1UTC");
  ut.prototype[t] && (e.startsWith("get") ? ut.prototype[e] = function() {
    return this.internal[t]();
  } : (ut.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Dw(this), +this;
  }, ut.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), $a(this), +this;
  }));
});
function $a(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-zt(e.timeZone, e) * 60));
}
function Dw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), yf(e);
}
function yf(e) {
  const t = zt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const u = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, f = Math.round(-(zt(e.timeZone, e) * 60)) % 60;
  (f || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + u));
  const p = zt(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, g = h !== n, w = v - l;
  if (g && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = zt(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), N = h - y;
    N && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + N), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + N));
  }
}
class Fe extends ut {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Fe(...n, t) : new Fe(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${Rw(this.timeZone, this)})`;
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
    return new Fe(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Fe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const wf = 6048e5, jw = 864e5, Fi = Symbol.for("constructDateFrom");
function Ae(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Fi in e ? e[Fi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ye(e, t) {
  return Ae(t || e, e);
}
function Cf(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ae(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Sf(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Ae(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Ae(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Ow = {};
function or() {
  return Ow;
}
function xn(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Hn(e, t) {
  return xn(e, { ...t, weekStartsOn: 1 });
}
function kf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ae(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Hn(o), s = Ae(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Hn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Li(e) {
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
function En(e, ...t) {
  const n = Ae.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Yn(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Nf(e, t, n) {
  const [r, o] = En(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Yn(r), s = Yn(o), i = +a - Li(a), l = +s - Li(s);
  return Math.round((i - l) / jw);
}
function _w(e, t) {
  const n = kf(e, t), r = Ae(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Hn(r);
}
function Iw(e, t, n) {
  return Cf(e, t * 7, n);
}
function Tw(e, t, n) {
  return Sf(e, t * 12, n);
}
function $w(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ae.bind(null, o));
    const a = ye(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ae(r, n || NaN);
}
function Fw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ae.bind(null, o));
    const a = ye(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ae(r, n || NaN);
}
function Lw(e, t, n) {
  const [r, o] = En(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Yn(r) == +Yn(o);
}
function Ef(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ww(e) {
  return !(!Ef(e) && typeof e != "number" || isNaN(+ye(e)));
}
function Vw(e, t, n) {
  const [r, o] = En(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Bw(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function zw(e, t) {
  const [n, r] = En(e, t.start, t.end);
  return { start: n, end: r };
}
function Hw(e, t) {
  const { start: n, end: r } = zw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Ae(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Yw(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Gw(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Mf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Pf(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ye(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Kw(e, t) {
  return Pf(e, { ...t, weekStartsOn: 1 });
}
const Uw = {
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
}, qw = (e, t, n) => {
  let r;
  const o = Uw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function pn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Xw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Zw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Jw = {
  date: pn({
    formats: Xw,
    defaultWidth: "full"
  }),
  time: pn({
    formats: Zw,
    defaultWidth: "full"
  }),
  dateTime: pn({
    formats: Qw,
    defaultWidth: "full"
  })
}, e1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, t1 = (e, t, n, r) => e1[e];
function ct(e) {
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
const n1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, r1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, o1 = {
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
}, a1 = {
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
}, s1 = {
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
}, i1 = {
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
}, c1 = (e, t) => {
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
}, l1 = {
  ordinalNumber: c1,
  era: ct({
    values: n1,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: r1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ct({
    values: o1,
    defaultWidth: "wide"
  }),
  day: ct({
    values: a1,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: s1,
    defaultWidth: "wide",
    formattingValues: i1,
    defaultFormattingWidth: "wide"
  })
};
function lt(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? u1(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      d1(i, (f) => f.test(s))
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
function d1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function u1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Rf(e) {
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
const f1 = /^(\d+)(th|st|nd|rd)?/i, m1 = /\d+/i, p1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, h1 = {
  any: [/^b/i, /^(a|c)/i]
}, v1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, g1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, x1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, b1 = {
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
}, y1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, w1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, C1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, S1 = {
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
}, k1 = {
  ordinalNumber: Rf({
    matchPattern: f1,
    parsePattern: m1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: lt({
    matchPatterns: p1,
    defaultMatchWidth: "wide",
    parsePatterns: h1,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: x1,
    defaultMatchWidth: "wide",
    parsePatterns: b1,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: y1,
    defaultMatchWidth: "wide",
    parsePatterns: w1,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: C1,
    defaultMatchWidth: "any",
    parsePatterns: S1,
    defaultParseWidth: "any"
  })
}, Io = {
  code: "en-US",
  formatDistance: qw,
  formatLong: Jw,
  formatRelative: t1,
  localize: l1,
  match: k1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function N1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in);
  return Nf(n, Mf(n)) + 1;
}
function Af(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = +Hn(n) - +_w(n);
  return Math.round(r / wf) + 1;
}
function Df(e, t) {
  var u, f, p, h;
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = or(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Ae((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = xn(s, t), l = Ae((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = xn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function E1(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = Df(e, t), a = Ae((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), xn(a, t);
}
function jf(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = +xn(n, t) - +E1(n, t);
  return Math.round(r / wf) + 1;
}
function xe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Pt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return xe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : xe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return xe(e.getDate(), t.length);
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
    return xe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return xe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return xe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return xe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return xe(o, t.length);
  }
}, ln = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Wi = {
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
    return Pt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Df(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return xe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : xe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = kf(e);
    return xe(n, t.length);
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
    return xe(n, t.length);
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
        return xe(r, 2);
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
        return xe(r, 2);
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
        return Pt.M(e, t);
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
        return xe(r + 1, 2);
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
    const o = jf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : xe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Af(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : xe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = N1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : xe(r, t.length);
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
        return xe(a, 2);
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
        return xe(a, t.length);
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
        return xe(o, t.length);
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
    switch (r === 12 ? o = ln.noon : r === 0 ? o = ln.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = ln.evening : r >= 12 ? o = ln.afternoon : r >= 4 ? o = ln.morning : o = ln.night, t) {
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
    return Pt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Pt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : xe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : xe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Pt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Bi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Bt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Bt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Bi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Bt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Bt(r, ":");
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
        return "GMT" + Vi(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Bt(r, ":");
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
        return "GMT" + Vi(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Bt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return xe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return xe(+e, t.length);
  }
};
function Vi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + xe(a, 2);
}
function Bi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + xe(Math.abs(e) / 60, 2) : Bt(e, t);
}
function Bt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = xe(Math.trunc(r / 60), 2), a = xe(r % 60, 2);
  return n + o + t + a;
}
const zi = (e, t) => {
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
}, Of = (e, t) => {
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
}, M1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return zi(e, t);
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
  return a.replace("{{date}}", zi(r, t)).replace("{{time}}", Of(o, t));
}, P1 = {
  p: Of,
  P: M1
}, R1 = /^D+$/, A1 = /^Y+$/, D1 = ["D", "DD", "YY", "YYYY"];
function j1(e) {
  return R1.test(e);
}
function O1(e) {
  return A1.test(e);
}
function _1(e, t, n) {
  const r = I1(e, t, n);
  if (console.warn(r), D1.includes(e)) throw new RangeError(r);
}
function I1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const T1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, $1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F1 = /^'([^]*?)'?$/, L1 = /''/g, W1 = /[a-zA-Z]/;
function V1(e, t, n) {
  var u, f, p, h, x, v, g, w;
  const r = or(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Io, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = ye(e, n == null ? void 0 : n.in);
  if (!Ww(i))
    throw new RangeError("Invalid time value");
  let l = t.match($1).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const N = P1[y];
      return N(b, o.formatLong);
    }
    return b;
  }).join("").match(T1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: B1(b) };
    if (Wi[y])
      return { isToken: !0, value: b };
    if (y.match(W1))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && O1(y) || !(n != null && n.useAdditionalDayOfYearTokens) && j1(y)) && _1(y, t, String(e));
    const N = Wi[y[0]];
    return N(i, y, o.localize, d);
  }).join("");
}
function B1(e) {
  const t = e.match(F1);
  return t ? t[1].replace(L1, "'") : e;
}
function z1(e, t) {
  const n = ye(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ae(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function H1(e, t) {
  return ye(e, t == null ? void 0 : t.in).getMonth();
}
function Y1(e, t) {
  return ye(e, t == null ? void 0 : t.in).getFullYear();
}
function G1(e, t) {
  return +ye(e) > +ye(t);
}
function K1(e, t) {
  return +ye(e) < +ye(t);
}
function U1(e, t, n) {
  const [r, o] = En(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function q1(e, t, n) {
  const [r, o] = En(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function X1(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Ae(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = z1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Z1(e, t, n) {
  const r = ye(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ae(e, NaN) : (r.setFullYear(t), r);
}
const Hi = 5, Q1 = 4;
function J1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Hi * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Hi : Q1;
}
function _f(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function e2(e, t) {
  const n = _f(e, t), r = J1(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Ue {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Fe.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Fe(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : Cf(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Sf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Iw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Tw(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Nf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Vw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Hw(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : e2(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Kw(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Bw(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Pf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Gw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : V1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Af(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : H1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Y1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : jf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : G1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : K1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Ef(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Lw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : U1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : q1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : $w(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Fw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : X1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : Z1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : _f(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Yn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Hn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Yw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : xn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Mf(r);
    }, this.options = { locale: Io, ...t }, this.overrides = n;
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
    return t && Ue.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Ue.yearFirstLocales.has(a))
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
Ue.yearFirstLocales = /* @__PURE__ */ new Set([
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
const ht = new Ue();
class If {
  constructor(t, n, r = ht) {
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
class t2 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class n2 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function r2(e) {
  return k.createElement("button", { ...e });
}
function o2(e) {
  return k.createElement("span", { ...e });
}
function a2(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    k.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && k.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && k.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && k.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && k.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function s2(e) {
  const { day: t, modifiers: n, ...r } = e;
  return k.createElement("td", { ...r });
}
function i2(e) {
  const { day: t, modifiers: n, ...r } = e, o = k.useRef(null);
  return k.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), k.createElement("button", { ref: o, ...r });
}
var oe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(oe || (oe = {}));
var ke;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ke || (ke = {}));
var et;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(et || (et = {}));
var Ye;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ye || (Ye = {}));
function c2(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[oe.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return k.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[oe.DropdownRoot] },
    k.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: u }) => k.createElement(r.Option, { key: l, value: l, disabled: u }, d))),
    k.createElement(
      "span",
      { className: o[oe.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      k.createElement(r.Chevron, { orientation: "down", size: 18, className: o[oe.Chevron] })
    )
  );
}
function l2(e) {
  return k.createElement("div", { ...e });
}
function d2(e) {
  return k.createElement("div", { ...e });
}
function u2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return k.createElement("div", { ...r }, e.children);
}
function f2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return k.createElement("div", { ...r });
}
function m2(e) {
  return k.createElement("table", { ...e });
}
function p2(e) {
  return k.createElement("div", { ...e });
}
const Tf = Jr(void 0);
function ar() {
  const e = Wr(Tf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function h2(e) {
  const { components: t } = ar();
  return k.createElement(t.Dropdown, { ...e });
}
function v2(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = ar(), u = he((p) => {
    o && (n == null || n(p));
  }, [o, n]), f = he((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return k.createElement(
    "nav",
    { ...a },
    k.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[oe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      k.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[oe.Chevron], orientation: "left" })
    ),
    k.createElement(
      s.NextMonthButton,
      { type: "button", className: i[oe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: u },
      k.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[oe.Chevron] })
    )
  );
}
function g2(e) {
  const { components: t } = ar();
  return k.createElement(t.Button, { ...e });
}
function x2(e) {
  return k.createElement("option", { ...e });
}
function b2(e) {
  const { components: t } = ar();
  return k.createElement(t.Button, { ...e });
}
function y2(e) {
  const { rootRef: t, ...n } = e;
  return k.createElement("div", { ...n, ref: t });
}
function w2(e) {
  return k.createElement("select", { ...e });
}
function C2(e) {
  const { week: t, ...n } = e;
  return k.createElement("tr", { ...n });
}
function S2(e) {
  return k.createElement("th", { ...e });
}
function k2(e) {
  return k.createElement(
    "thead",
    { "aria-hidden": !0 },
    k.createElement("tr", { ...e })
  );
}
function N2(e) {
  const { week: t, ...n } = e;
  return k.createElement("th", { ...n });
}
function E2(e) {
  return k.createElement("th", { ...e });
}
function M2(e) {
  return k.createElement("tbody", { ...e });
}
function P2(e) {
  const { components: t } = ar();
  return k.createElement(t.Dropdown, { ...e });
}
const R2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: r2,
  CaptionLabel: o2,
  Chevron: a2,
  Day: s2,
  DayButton: i2,
  Dropdown: c2,
  DropdownNav: l2,
  Footer: d2,
  Month: u2,
  MonthCaption: f2,
  MonthGrid: m2,
  Months: p2,
  MonthsDropdown: h2,
  Nav: v2,
  NextMonthButton: g2,
  Option: x2,
  PreviousMonthButton: b2,
  Root: y2,
  Select: w2,
  Week: C2,
  WeekNumber: N2,
  WeekNumberHeader: E2,
  Weekday: S2,
  Weekdays: k2,
  Weeks: M2,
  YearsDropdown: P2
}, Symbol.toStringTag, { value: "Module" }));
function yt(e, t, n = !1, r = ht) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function $f(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Fs(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Ff(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Lf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Wf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Vf(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function wt(e, t, n = ht) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Vf(i, n))
      return i.includes(e);
    if (Fs(i))
      return yt(i, e, !1, n);
    if (Wf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if ($f(i)) {
      const l = a(i.before, e), d = a(i.after, e), u = l > 0, f = d < 0;
      return s(i.before, i.after) ? f && u : u || f;
    }
    return Ff(i) ? a(e, i.after) > 0 : Lf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function A2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: u } = t, { isSameDay: f, isSameMonth: p, startOfMonth: h, isBefore: x, endOfMonth: v, isAfter: g } = o, w = n && h(n), b = r && v(r), y = {
    [ke.focused]: [],
    [ke.outside]: [],
    [ke.disabled]: [],
    [ke.hidden]: [],
    [ke.today]: []
  }, N = {};
  for (const C of e) {
    const { date: P, displayMonth: S } = C, M = !!(S && !p(P, S)), _ = !!(w && x(P, w)), T = !!(b && g(P, b)), F = !!(a && wt(P, a, o)), L = !!(s && wt(P, s, o)) || _ || T || // Broadcast calendar will show outside days as default
    !d && !l && M || d && l === !1 && M, H = f(P, u ?? o.today());
    M && y.outside.push(C), F && y.disabled.push(C), L && y.hidden.push(C), H && y.today.push(C), i && Object.keys(i).forEach((O) => {
      const z = i == null ? void 0 : i[O];
      z && wt(P, z, o) && (N[O] ? N[O].push(C) : N[O] = [C]);
    });
  }
  return (C) => {
    const P = {
      [ke.focused]: !1,
      [ke.disabled]: !1,
      [ke.hidden]: !1,
      [ke.outside]: !1,
      [ke.today]: !1
    }, S = {};
    for (const M in y) {
      const _ = y[M];
      P[M] = _.some((T) => T === C);
    }
    for (const M in N)
      S[M] = N[M].some((_) => _ === C);
    return {
      ...P,
      // custom modifiers should override all the previous ones
      ...S
    };
  };
}
function D2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ke[a]] ? o.push(t[ke[a]]) : t[et[a]] && o.push(t[et[a]]), o), [t[oe.Day]]);
}
function j2(e) {
  return {
    ...R2,
    ...e
  };
}
function O2(e) {
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
function Bf() {
  const e = {};
  for (const t in oe)
    e[oe[t]] = `rdp-${oe[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  for (const t in et)
    e[et[t]] = `rdp-${et[t]}`;
  for (const t in Ye)
    e[Ye[t]] = `rdp-${Ye[t]}`;
  return e;
}
function zf(e, t, n) {
  return (n ?? new Ue(t)).formatMonthYear(e);
}
const _2 = zf;
function I2(e, t, n) {
  return (n ?? new Ue(t)).format(e, "d");
}
function T2(e, t = ht) {
  return t.format(e, "LLLL");
}
function $2(e, t, n) {
  return (n ?? new Ue(t)).format(e, "cccccc");
}
function F2(e, t = ht) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function L2() {
  return "";
}
function Hf(e, t = ht) {
  return t.format(e, "yyyy");
}
const W2 = Hf, V2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: zf,
  formatDay: I2,
  formatMonthCaption: _2,
  formatMonthDropdown: T2,
  formatWeekNumber: F2,
  formatWeekNumberHeader: L2,
  formatWeekdayName: $2,
  formatYearCaption: W2,
  formatYearDropdown: Hf
}, Symbol.toStringTag, { value: "Module" }));
function B2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...V2,
    ...e
  };
}
function z2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), x = d(p), v = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: h, disabled: v };
  });
}
function H2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[oe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Y2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function G2(e, t, n, r, o = !1) {
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
function Yf(e, t, n, r) {
  let o = (r ?? new Ue(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const K2 = Yf;
function Gf(e, t, n) {
  return (n ?? new Ue(t)).formatMonthYear(e);
}
const U2 = Gf;
function q2(e, t, n, r) {
  let o = (r ?? new Ue(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function X2(e) {
  return "Choose the Month";
}
function Z2() {
  return "";
}
function Q2(e) {
  return "Go to the Next Month";
}
function J2(e) {
  return "Go to the Previous Month";
}
function eC(e, t, n) {
  return (n ?? new Ue(t)).format(e, "cccc");
}
function tC(e, t) {
  return `Week ${e}`;
}
function nC(e) {
  return "Week Number";
}
function rC(e) {
  return "Choose the Year";
}
const oC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: U2,
  labelDay: K2,
  labelDayButton: Yf,
  labelGrid: Gf,
  labelGridcell: q2,
  labelMonthDropdown: X2,
  labelNav: Z2,
  labelNext: Q2,
  labelPrevious: J2,
  labelWeekNumber: tC,
  labelWeekNumberHeader: nC,
  labelWeekday: eC,
  labelYearDropdown: rC
}, Symbol.toStringTag, { value: "Module" })), sr = (e) => e instanceof HTMLElement ? e : null, ca = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], aC = (e) => sr(e.querySelector("[data-animated-month]")), la = (e) => sr(e.querySelector("[data-animated-caption]")), da = (e) => sr(e.querySelector("[data-animated-weeks]")), sC = (e) => sr(e.querySelector("[data-animated-nav]")), iC = (e) => sr(e.querySelector("[data-animated-weekdays]"));
function cC(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Ct(null), i = Ct(r), l = Ct(!1);
  tc(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const u = a.isSameMonth(r[0].date, d[0].date), f = a.isAfter(r[0].date, d[0].date), p = f ? n[Ye.caption_after_enter] : n[Ye.caption_before_enter], h = f ? n[Ye.weeks_after_enter] : n[Ye.weeks_before_enter], x = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (ca(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const N = aC(y);
      N && y.contains(N) && y.removeChild(N);
      const C = la(y);
      C && C.classList.remove(p);
      const P = da(y);
      P && P.classList.remove(h);
    }), s.current = v) : s.current = null, l.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? ca(x) : [], w = ca(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = sC(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, N) => {
        const C = g[N];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const P = la(y);
        P && P.classList.add(p);
        const S = da(y);
        S && S.classList.add(h);
        const M = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), P && P.classList.remove(p), S && S.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const _ = iC(C);
        _ && (_.style.opacity = "0");
        const T = la(C);
        T && (T.classList.add(f ? n[Ye.caption_before_exit] : n[Ye.caption_after_exit]), T.addEventListener("animationend", M));
        const F = da(C);
        F && F.classList.add(f ? n[Ye.weeks_before_exit] : n[Ye.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function lC(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: x, endOfWeek: v, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, N = l ? w(o, r) : s ? b(o) : y(o), C = l ? p(a) : s ? h(x(a)) : v(x(a)), P = u(C, N), S = f(a, o) + 1, M = [];
  for (let F = 0; F <= P; F++) {
    const L = d(N, F);
    if (t && g(L, t))
      break;
    M.push(L);
  }
  const T = (l ? 35 : 42) * S;
  if (i && M.length < T) {
    const F = T - M.length;
    for (let L = 0; L < F; L++) {
      const H = d(M[M.length - 1], 1);
      M.push(H);
    }
  }
  return M;
}
function dC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function uC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Yi(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: u, startOfMonth: f } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = u(n, p);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function fC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: h } = r, x = e.reduce((v, g) => {
    const w = n.broadcastCalendar ? f(g, r) : n.ISOWeek ? p(g) : h(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), y = t.filter((S) => S >= w && S <= b), N = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < N) {
      const S = t.filter((M) => {
        const _ = N - y.length;
        return M > b && M <= o(b, _);
      });
      y.push(...S);
    }
    const C = y.reduce((S, M) => {
      const _ = n.ISOWeek ? d(M) : u(M), T = S.find((L) => L.weekNumber === _), F = new If(M, g, r);
      return T ? T.days.push(F) : S.push(new n2(_, [F])), S;
    }, []), P = new t2(g, C);
    return v.push(P), v;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function mC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: u, today: f } = t, { fromYear: p, toYear: h, fromMonth: x, toMonth: v } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = u(h, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = u(p, 0, 1) : !n && g && (n = o(l(e.today ?? f(), -100))), r ? r = i(r) : h ? r = u(h, 11, 31) : !r && g && (r = d(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function pC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, u = s(e);
  if (!t)
    return i(u, d);
  if (!(l(t, e) < a))
    return i(u, d);
}
function hC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -d);
  if (!(l(u, t) <= 0))
    return i(u, -d);
}
function vC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function To(e, t) {
  const [n, r] = We(e);
  return [t === void 0 ? n : t, r];
}
function gC(e, t) {
  const [n, r] = mC(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Yi(e, n, r, t), [i, l] = To(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Ht(() => {
    const P = Yi(e, n, r, t);
    l(P);
  }, [e.timeZone]);
  const d = uC(i, r, e, t), u = lC(d, e.endMonth ? a(e.endMonth) : void 0, e, t), f = fC(d, u, e, t), p = vC(f), h = dC(f), x = hC(i, n, e, t), v = pC(i, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (P) => p.some((S) => S.days.some((M) => M.isEqualTo(P))), y = (P) => {
    if (g)
      return;
    let S = o(P);
    n && S < o(n) && (S = o(n)), r && S > o(r) && (S = o(r)), l(S), w == null || w(S);
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
var st;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(st || (st = {}));
function Gi(e) {
  return !e[ke.disabled] && !e[ke.hidden] && !e[ke.outside];
}
function xC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Gi(i) && (i[ke.focused] && a < st.FocusedModifier ? (o = s, a = st.FocusedModifier) : r != null && r.isEqualTo(s) && a < st.LastFocused ? (o = s, a = st.LastFocused) : n(s.date) && a < st.Selected ? (o = s, a = st.Selected) : i[ke.today] && a < st.Today && (o = s, a = st.Today));
  }
  return o || (o = e.find((s) => Gi(t(s)))), o;
}
function bC(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: u, addWeeks: f, addYears: p, endOfBroadcastWeek: h, endOfISOWeek: x, endOfWeek: v, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: N } = s;
  let P = {
    day: d,
    week: f,
    month: u,
    year: p,
    startOfWeek: (S) => l ? b(S, s) : i ? y(S) : N(S),
    endOfWeek: (S) => l ? h(S) : i ? x(S) : v(S)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? P = g([r, P]) : t === "after" && o && (P = w([o, P])), P;
}
function Kf(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = bC(e, t, n.date, r, o, a, s), d = !!(a.disabled && wt(l, a.disabled, s)), u = !!(a.hidden && wt(l, a.hidden, s)), f = l, p = new If(l, f, s);
  return !d && !u ? p : Kf(e, t, p, r, o, a, s, i + 1);
}
function yC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = We(), l = xC(t.days, n, r || (() => !1), s), [d, u] = We(a ? l : void 0);
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
      const w = Kf(v, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), u(w));
    }
  };
}
function wC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = To(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (h) => (i == null ? void 0 : i.some((x) => l(x, h))) ?? !1, { min: u, max: f } = e;
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
function CC(e, t, n = 0, r = 0, o = !1, a = ht) {
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
function SC(e, t, n = ht) {
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
function Ki(e, t, n = ht) {
  return yt(e, t.from, !1, n) || yt(e, t.to, !1, n) || yt(t, e.from, !1, n) || yt(t, e.to, !1, n);
}
function kC(e, t, n = ht) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? yt(e, i, !1, n) : Vf(i, n) ? i.some((l) => yt(e, l, !1, n)) : Fs(i) ? i.from && i.to ? Ki(e, { from: i.from, to: i.to }, n) : !1 : Wf(i) ? SC(e, i.dayOfWeek, n) : $f(i) ? n.isAfter(i.before, i.after) ? Ki(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : wt(e.from, i, n) || wt(e.to, i, n) : Ff(i) || Lf(i) ? wt(e.from, i, n) || wt(e.to, i, n) : !1))
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
function NC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = To(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, h, x) => {
      const { min: v, max: g } = e, w = p ? CC(p, d, v, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && kC({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), s || l(w), s == null || s(w, p, h, x), w;
    },
    isSelected: (p) => d && yt(d, p, !1, t)
  };
}
function EC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = To(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (f, p, h) => {
      let x = f;
      return !r && i && i && l(f, i) && (x = void 0), o || s(x), o == null || o(x, f, p, h), x;
    },
    isSelected: (f) => i ? l(i, f) : !1
  };
}
function MC(e, t) {
  const n = EC(e, t), r = wC(e, t), o = NC(e, t);
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
function PC(e) {
  var at;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Fe(t.today, t.timeZone)), t.month && (t.month = new Fe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Fe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Fe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Fe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Fe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (at = t.selected) == null ? void 0 : at.map((ie) => new Fe(ie, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Fe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Fe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = jr(() => {
    const ie = { ...Io, ...t.locale };
    return {
      dateLib: new Ue({
        locale: ie,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: j2(t.components),
      formatters: B2(t.formatters),
      labels: { ...oC, ...t.labels },
      locale: ie,
      classNames: { ...Bf(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: u, numberOfMonths: f = 1, onDayBlur: p, onDayClick: h, onDayFocus: x, onDayKeyDown: v, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: N, styles: C } = t, { formatCaption: P, formatDay: S, formatMonthDropdown: M, formatWeekNumber: _, formatWeekNumberHeader: T, formatWeekdayName: F, formatYearDropdown: L } = r, H = gC(t, a), { days: O, months: z, navStart: W, navEnd: q, previousMonth: j, nextMonth: $, goToMonth: ne } = H, R = A2(O, t, W, q, a), { isSelected: E, select: I, selected: V } = MC(t, a) ?? {}, { blur: Y, focused: K, isFocusTarget: D, moveFocus: Q, setFocused: J } = yC(t, H, R, E ?? (() => !1), a), { labelDayButton: se, labelGridcell: me, labelGrid: U, labelMonthDropdown: Se, labelNav: we, labelPrevious: Le, labelNext: De, labelWeekday: Qe, labelWeekNumber: Mn, labelWeekNumberHeader: vt, labelYearDropdown: Wo } = o, lr = jr(() => Y2(a, t.ISOWeek), [a, t.ISOWeek]), en = d !== void 0 || h !== void 0, tn = he(() => {
    j && (ne(j), y == null || y(j));
  }, [j, ne, y]), nn = he(() => {
    $ && (ne($), b == null || b($));
  }, [ne, $, b]), gt = he((ie, ve) => (le) => {
    le.preventDefault(), le.stopPropagation(), J(ie), I == null || I(ie.date, ve, le), h == null || h(ie.date, ve, le);
  }, [I, h, J]), Lt = he((ie, ve) => (le) => {
    J(ie), x == null || x(ie.date, ve, le);
  }, [x, J]), dr = he((ie, ve) => (le) => {
    Y(), p == null || p(ie.date, ve, le);
  }, [Y, p]), ur = he((ie, ve) => (le) => {
    const be = {
      ArrowLeft: [
        le.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        le.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [le.shiftKey ? "year" : "week", "after"],
      ArrowUp: [le.shiftKey ? "year" : "week", "before"],
      PageUp: [le.shiftKey ? "year" : "month", "before"],
      PageDown: [le.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (be[le.key]) {
      le.preventDefault(), le.stopPropagation();
      const [Te, pe] = be[le.key];
      Q(Te, pe);
    }
    v == null || v(ie.date, ve, le);
  }, [Q, v, t.dir]), fr = he((ie, ve) => (le) => {
    g == null || g(ie.date, ve, le);
  }, [g]), mr = he((ie, ve) => (le) => {
    w == null || w(ie.date, ve, le);
  }, [w]), Pn = he((ie) => (ve) => {
    const le = Number(ve.target.value), be = a.setMonth(a.startOfMonth(ie), le);
    ne(be);
  }, [a, ne]), Rn = he((ie) => (ve) => {
    const le = Number(ve.target.value), be = a.setYear(a.startOfMonth(ie), le);
    ne(be);
  }, [a, ne]), { className: pr, style: qe } = jr(() => ({
    className: [i[oe.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[oe.Root], ...t.style }
  }), [i, t.className, t.style, C]), Xe = O2(t), rn = Ct(null);
  cC(rn, !!t.animate, {
    classNames: i,
    months: z,
    focused: K,
    dateLib: a
  });
  const Bs = {
    dayPickerProps: t,
    selected: V,
    select: I,
    isSelected: E,
    months: z,
    nextMonth: $,
    previousMonth: j,
    goToMonth: ne,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return k.createElement(
    Tf.Provider,
    { value: Bs },
    k.createElement(
      n.Root,
      { rootRef: t.animate ? rn : void 0, className: pr, style: qe, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Xe },
      k.createElement(
        n.Months,
        { className: i[oe.Months], style: C == null ? void 0 : C[oe.Months] },
        !t.hideNavigation && !u && k.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: C == null ? void 0 : C[oe.Nav], "aria-label": we(), onPreviousClick: tn, onNextClick: nn, previousMonth: j, nextMonth: $ }),
        z.map((ie, ve) => k.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[oe.Month],
            style: C == null ? void 0 : C[oe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ve,
            displayIndex: ve,
            calendarMonth: ie
          },
          u === "around" && !t.hideNavigation && ve === 0 && k.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[oe.PreviousMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": Le(j), onClick: tn, "data-animated-button": t.animate ? "true" : void 0 },
            k.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          k.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[oe.MonthCaption], style: C == null ? void 0 : C[oe.MonthCaption], calendarMonth: ie, displayIndex: ve }, l != null && l.startsWith("dropdown") ? k.createElement(
            n.DropdownNav,
            { className: i[oe.Dropdowns], style: C == null ? void 0 : C[oe.Dropdowns] },
            (() => {
              const le = l === "dropdown" || l === "dropdown-months" ? k.createElement(n.MonthsDropdown, { key: "month", className: i[oe.MonthsDropdown], "aria-label": Se(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Pn(ie.date), options: z2(ie.date, W, q, r, a), style: C == null ? void 0 : C[oe.Dropdown], value: a.getMonth(ie.date) }) : k.createElement("span", { key: "month" }, M(ie.date, a)), be = l === "dropdown" || l === "dropdown-years" ? k.createElement(n.YearsDropdown, { key: "year", className: i[oe.YearsDropdown], "aria-label": Wo(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Rn(ie.date), options: G2(W, q, r, a, !!t.reverseYears), style: C == null ? void 0 : C[oe.Dropdown], value: a.getYear(ie.date) }) : k.createElement("span", { key: "year" }, L(ie.date, a));
              return a.getMonthYearOrder() === "year-first" ? [be, le] : [le, be];
            })(),
            k.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, P(ie.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            k.createElement(n.CaptionLabel, { className: i[oe.CaptionLabel], role: "status", "aria-live": "polite" }, P(ie.date, a.options, a))
          )),
          u === "around" && !t.hideNavigation && ve === f - 1 && k.createElement(
            n.NextMonthButton,
            { type: "button", className: i[oe.NextMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": De($), onClick: nn, "data-animated-button": t.animate ? "true" : void 0 },
            k.createElement(n.Chevron, { disabled: $ ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ve === f - 1 && u === "after" && !t.hideNavigation && k.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: C == null ? void 0 : C[oe.Nav], "aria-label": we(), onPreviousClick: tn, onNextClick: nn, previousMonth: j, nextMonth: $ }),
          k.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": U(ie.date, a.options, a) || void 0, className: i[oe.MonthGrid], style: C == null ? void 0 : C[oe.MonthGrid] },
            !t.hideWeekdays && k.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[oe.Weekdays], style: C == null ? void 0 : C[oe.Weekdays] },
              N && k.createElement(n.WeekNumberHeader, { "aria-label": vt(a.options), className: i[oe.WeekNumberHeader], style: C == null ? void 0 : C[oe.WeekNumberHeader], scope: "col" }, T()),
              lr.map((le) => k.createElement(n.Weekday, { "aria-label": Qe(le, a.options, a), className: i[oe.Weekday], key: String(le), style: C == null ? void 0 : C[oe.Weekday], scope: "col" }, F(le, a.options, a)))
            ),
            k.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[oe.Weeks], style: C == null ? void 0 : C[oe.Weeks] }, ie.weeks.map((le) => k.createElement(
              n.Week,
              { className: i[oe.Week], key: le.weekNumber, style: C == null ? void 0 : C[oe.Week], week: le },
              N && // biome-ignore lint/a11y/useSemanticElements: react component
              k.createElement(n.WeekNumber, { week: le, style: C == null ? void 0 : C[oe.WeekNumber], "aria-label": Mn(le.weekNumber, {
                locale: s
              }), className: i[oe.WeekNumber], scope: "row", role: "rowheader" }, _(le.weekNumber, a)),
              le.days.map((be) => {
                const { date: Te } = be, pe = R(be);
                if (pe[ke.focused] = !pe.hidden && !!(K != null && K.isEqualTo(be)), pe[et.selected] = (E == null ? void 0 : E(Te)) || pe.selected, Fs(V)) {
                  const { from: hr, to: Wt } = V;
                  pe[et.range_start] = !!(hr && Wt && a.isSameDay(Te, hr)), pe[et.range_end] = !!(hr && Wt && a.isSameDay(Te, Wt)), pe[et.range_middle] = yt(V, Te, !0, a);
                }
                const Vo = H2(pe, C, t.modifiersStyles), Bo = D2(pe, i, t.modifiersClassNames), zo = !en && !pe.hidden ? me(Te, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  k.createElement(n.Day, { key: `${a.format(Te, "yyyy-MM-dd")}_${a.format(be.displayMonth, "yyyy-MM")}`, day: be, modifiers: pe, className: Bo.join(" "), style: Vo, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": zo, "data-day": a.format(Te, "yyyy-MM-dd"), "data-month": be.outside ? a.format(Te, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": be.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && en ? k.createElement(n.DayButton, { className: i[oe.DayButton], style: C == null ? void 0 : C[oe.DayButton], type: "button", day: be, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: D(be) ? 0 : -1, "aria-label": se(Te, pe, a.options, a), onClick: gt(be, pe), onBlur: dr(be, pe), onFocus: Lt(be, pe), onKeyDown: ur(be, pe), onMouseEnter: fr(be, pe), onMouseLeave: mr(be, pe) }, S(Te, a.options, a)) : !pe.hidden && S(be.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      k.createElement(n.Footer, { className: i[oe.Footer], style: C == null ? void 0 : C[oe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const RC = {
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
}, AC = (e, t, n) => {
  n = n || {};
  let r;
  const o = RC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, DC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, jC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, OC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, _C = {
  date: pn({
    formats: DC,
    defaultWidth: "full"
  }),
  time: pn({
    formats: jC,
    defaultWidth: "full"
  }),
  dateTime: pn({
    formats: OC,
    defaultWidth: "full"
  })
}, IC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, TC = (e, t, n, r) => IC[e], $C = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, FC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, LC = {
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
}, WC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, VC = {
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
}, BC = {
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
}, zC = (e, t) => {
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
}, HC = {
  ordinalNumber: zC,
  era: ct({
    values: $C,
    defaultWidth: "wide"
  }),
  quarter: ct({
    values: FC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: ct({
    values: LC,
    defaultWidth: "wide"
  }),
  day: ct({
    values: WC,
    defaultWidth: "wide"
  }),
  dayPeriod: ct({
    values: VC,
    defaultWidth: "wide",
    formattingValues: BC,
    defaultFormattingWidth: "wide"
  })
}, YC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, GC = /\d+/i, KC = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, UC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, qC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, XC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, ZC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, QC = {
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
}, JC = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, eS = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, tS = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, nS = {
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
}, rS = {
  ordinalNumber: Rf({
    matchPattern: YC,
    parsePattern: GC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: lt({
    matchPatterns: KC,
    defaultMatchWidth: "wide",
    parsePatterns: UC,
    defaultParseWidth: "any"
  }),
  quarter: lt({
    matchPatterns: qC,
    defaultMatchWidth: "wide",
    parsePatterns: XC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: lt({
    matchPatterns: ZC,
    defaultMatchWidth: "wide",
    parsePatterns: QC,
    defaultParseWidth: "any"
  }),
  day: lt({
    matchPatterns: JC,
    defaultMatchWidth: "wide",
    parsePatterns: eS,
    defaultParseWidth: "any"
  }),
  dayPeriod: lt({
    matchPatterns: tS,
    defaultMatchWidth: "any",
    parsePatterns: nS,
    defaultParseWidth: "any"
  })
}, oS = {
  code: "ja",
  formatDistance: AC,
  formatLong: _C,
  formatRelative: TC,
  localize: HC,
  match: rS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, aS = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Ar = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Uf = k.forwardRef(
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
    const [x, v] = k.useState(
      () => Ar(n || null)
    ), g = e !== void 0, w = g ? Ar(e) : x, b = k.useMemo(
      () => Ar(r || null),
      [r]
    ), y = k.useMemo(
      () => Ar(o || null),
      [o]
    ), N = k.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = k.useMemo(() => {
      if (y) return y;
      const S = /* @__PURE__ */ new Date();
      return new Date(S.getFullYear() + 10, 11, 31);
    }, [y]), P = (S) => {
      const M = S || null;
      g || v(M), t == null || t(M);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: h,
        className: A(aS(u), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          PC,
          {
            animate: !1,
            mode: "single",
            selected: w || void 0,
            onSelect: P,
            locale: f === "ja" ? oS : Io,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (S) => `${S.getFullYear()}${f === "ja" ? "年" : ""}`
            },
            disabled: N ? [
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
              const S = Bf(), M = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${S.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
                weekday: "text-body-secondary text-[13px] font-normal leading-5 tracking-normal text-center",
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
Uf.displayName = "Calendar";
const Ui = ae(
  `font-normal inline-flex items-center justify-center border border-transparent
  decoration-solid decoration-from-font underline-offset-[3px] transition-colors
  duration-75`,
  {
    variants: {
      intent: {
        primary: `text-interactive-primary-default
        hover:text-interactive-primary-hover
        active:text-interactive-primary-active
        [:not(:hover):not(:active)]:underline`,
        secondary: "text-body-primary [:not(:hover):not(:active)]:underline",
        tertiary: `text-body-primary [&_svg]:text-shape-primary hover:underline
        active:underline`
      },
      size: {
        lg: "gap-xxs text-lg",
        md: "gap-xxxs text-md",
        sm: "gap-xxxs text-sm",
        xs: "gap-xxxs text-xs",
        inherit: ""
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
), sS = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Fa = k.forwardRef(
  ({
    className: e,
    intent: t = "primary",
    size: n = "inherit",
    asChild: r = !1,
    leadingIcon: o,
    trailingIcon: a,
    children: s,
    ...i
  }, l) => {
    const d = r ? to : "a", f = sS[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: A(Ui({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: A(Ui({ intent: t, size: n }), e),
        ...i,
        children: [
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Oe(o, { size: f }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: Oe(a, { size: f }) })
        ]
      }
    );
  }
);
Fa.displayName = "TextLink";
const iS = ae(
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
), cS = ae("size-5 shrink-0", {
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
}), lS = ae("font-bold text-md", {
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
}), dS = ae(
  "text-body-primary font-normal leading-6 text-md"
), uS = ae("min-w-0 gap-xxxs flex flex-1 flex-col"), fS = {
  info: Or,
  success: ic,
  warning: Or,
  alert: Or,
  paid: Dp
}, mS = k.forwardRef(
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
    const d = s || fS[t];
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: l,
        className: A(iS({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ c.jsxs("div", { className: A(uS()), children: [
          n && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A(cS({ intent: t }), "top-0.5 relative"),
                  children: Oe(d, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: A(lS({ intent: t })), children: n })
            ] }),
            a && (a.href ? /* @__PURE__ */ c.jsx(
              Fa,
              {
                href: a.href,
                target: a.target,
                rel: a.rel,
                intent: "primary",
                size: "sm",
                children: a.label
              }
            ) : /* @__PURE__ */ c.jsx(
              Fa,
              {
                onClick: a.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: a.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ c.jsx("div", { className: A(dS()), children: o || r })
        ] })
      }
    );
  }
);
mS.displayName = "Callout";
const pS = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), hS = ae(
  `border-interactive-default text-body-primary
  focus-visible:ring-interactive-focused rounded-xs size-[17px] cursor-[inherit]
  border-[1.5px] outline-none focus-visible:ring-4
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
), $r = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: A(pS({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      tl,
      {
        id: l,
        className: A(hS({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          rl,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(pp, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(nc, { style: { strokeWidth: 3 } })
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
$r.displayName = "Checkbox";
const vS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
vS.displayName = "CheckboxGroup";
const gS = ae(
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
), xS = k.forwardRef(
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
        className: A(gS({ selected: e, disabled: t }), n),
        onClick: i,
        ...a,
        children: r
      }
    );
  }
);
xS.displayName = "ChoiceChip";
const bS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { role: "listbox", className: A("gap-xs flex flex-wrap", t), children: e });
bS.displayName = "ChoiceChipGroup";
const yS = ae(
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
), MN = Oy, St = k.forwardRef(
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
    _y,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...u !== void 0 && { onOpenChange: u },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(Iy, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(Ty, { children: /* @__PURE__ */ c.jsx(
          $y,
          {
            ref: h,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: A(yS({ intent: n }), f),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
St.displayName = "Tooltip";
const wS = ae("space-y-md w-full", {
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
}), qf = k.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: A(wS({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
qf.displayName = "DataSheet";
const CS = ae(
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
), Xf = k.forwardRef(
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
          CS({ variant: t }),
          f && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: A(r && "line-through opacity-60"), children: n }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
            s && /* @__PURE__ */ c.jsx(
              St,
              {
                content: r ? null : (a == null ? void 0 : a.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Re,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: oc,
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
              St,
              {
                content: (a == null ? void 0 : a.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Re,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: sc,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            l && r && /* @__PURE__ */ c.jsx(
              St,
              {
                content: (a == null ? void 0 : a.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Re,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: ac,
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
Xf.displayName = "DataSheetHeader";
const Zf = k.forwardRef(
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
Zf.displayName = "DataSheetSection";
const SS = ae("py-sm", {
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
}), kS = ae(
  "font-normal text-body-secondary text-sm",
  {
    variants: {
      orientation: {
        vertical: "leading-none",
        horizontal: "w-[120px] shrink-0 leading-[1.5]"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
), NS = ae(
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
), Qf = k.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => {
  const i = k.useId(), l = k.Children.map(o, (d) => {
    if (!k.isValidElement(d)) return d;
    const f = d.props["aria-labelledby"];
    return k.cloneElement(
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
        SS({ orientation: n, spacing: r }),
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            id: i,
            className: A(kS({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: A(NS({ orientation: n })), children: l })
      ]
    }
  );
});
Qf.displayName = "DataSheetKeyValue";
const ES = {
  actionsColumnParts: 10
}, Jf = k.createContext(
  ES
), MS = () => k.useContext(Jf), em = k.createContext({}), tm = () => k.useContext(
  em
);
function PS({
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
    Jf.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: A("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const nm = k.forwardRef(PS);
nm.displayName = "DataSheetTable";
const rm = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: A("", e), ...n, children: t }));
rm.displayName = "DataSheetTableHeader";
const om = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: A("", e), ...n, children: t }));
om.displayName = "DataSheetTableBody";
function RS({
  className: e,
  header: t,
  item: n,
  isDeleted: r = !1,
  ariaLabels: o,
  tooltipMessages: a,
  children: s,
  ...i
}, l) {
  const d = k.useMemo(() => {
    let f = 0;
    return k.Children.forEach(s, (p) => {
      k.isValidElement(p) && typeof p.props.parts == "number" && (f += p.props.parts);
    }), f > 0 ? f : void 0;
  }, [s]), u = {
    ...n !== void 0 && { item: n },
    ...d !== void 0 && { totalParts: d },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...a && { tooltipMessages: a }
  };
  return /* @__PURE__ */ c.jsx(
    em.Provider,
    {
      value: u,
      children: /* @__PURE__ */ c.jsx(
        "tr",
        {
          ref: l,
          className: A(
            t ? "h-[18px]" : "border-surface-default border-t",
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
const am = k.forwardRef(RS);
am.displayName = "DataSheetTableRow";
const Qr = k.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = tm(), u = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, f = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && f !== "" && f !== "-";
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
Qr.displayName = "DataSheetTableCell";
function AS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = MS(), {
    item: u,
    isDeleted: f,
    ariaLabels: p,
    tooltipMessages: h
  } = tm(), x = n ?? u;
  return t ? /* @__PURE__ */ c.jsx(
    Qr,
    {
      ref: a,
      header: !0,
      parts: d,
      className: e,
      ...o,
      children: r
    }
  ) : s || i || l ? /* @__PURE__ */ c.jsx(
    Qr,
    {
      ref: a,
      parts: d,
      className: A("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          St,
          {
            content: f ? null : (h == null ? void 0 : h.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Re,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: oc,
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
          St,
          {
            content: (h == null ? void 0 : h.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Re,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: sc,
                onClick: () => i(x),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        l && x && f && /* @__PURE__ */ c.jsx(
          St,
          {
            content: (h == null ? void 0 : h.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Re,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: ac,
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
const sm = k.forwardRef(
  AS
);
sm.displayName = "DataSheetTableActionsCell";
const im = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Re, { ref: n, className: A("w-full", e), ...t }));
im.displayName = "DataSheetAction";
const PN = Object.assign(qf, {
  Header: Xf,
  Section: Zf,
  KeyValue: Qf,
  Table: nm,
  TableHeader: rm,
  TableBody: om,
  TableRow: am,
  TableCell: Qr,
  TableActionsCell: sm,
  Action: im
}), DS = (e, t) => {
  const [n, r] = We(e);
  return Ht(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, $o = () => {
  const e = Ct(!1), t = he(() => {
    e.current = !0;
  }, []), n = he(() => {
    e.current = !1;
  }, []), r = he(
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
}, cm = ae(
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
), jS = ae(
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
), Fn = ae(
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
), Fo = k.forwardRef(
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
    const h = !!t, x = !!n, v = !!r, g = f.type === "number", { compositionHandlers: w, guardKeyHandler: b } = $o(), y = (C) => {
      w.onCompositionStart(C), d == null || d(C);
    }, N = (C) => {
      w.onCompositionEnd(C), u == null || u(C);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: A(cm({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Fn({ position: "prefix", interactive: !1 }),
          children: Oe(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: p,
          className: jS({ hasPrefix: h, hasTrailing: x, isNumeric: g }),
          ...f,
          onKeyDown: b(i),
          onKeyUp: b(l),
          onCompositionStart: y,
          onCompositionEnd: N
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: v ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Fn({
            position: "trailing",
            interactive: !0
          }),
          disabled: f.disabled,
          onClick: r,
          children: Oe(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Fn({
            position: "trailing",
            interactive: !1
          }),
          children: Oe(n, { size: o })
        }
      ) })
    ] });
  }
);
Fo.displayName = "Input";
const OS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Dr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, _S = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), IS = k.forwardRef(
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
    formatDate: f = _S,
    className: p,
    contentClassName: h,
    defaultOpen: x = !1,
    open: v,
    onOpenChange: g,
    side: w = "bottom",
    locale: b = "ja",
    ...y
  }, N) => {
    const [C, P] = k.useState(
      () => Dr(n || null)
    ), [S, M] = k.useState(x), _ = e !== void 0, T = _ ? Dr(e) : C, F = v !== void 0 ? v : S, L = k.useMemo(
      () => Dr(r || null),
      [r]
    ), H = k.useMemo(
      () => Dr(o || null),
      [o]
    ), O = k.useMemo(() => !L || !H ? !0 : L <= H, [L, H]), z = ($) => {
      const ne = $ || null;
      _ || P(ne), t == null || t(ne), ne && (v === void 0 && M(!1), g == null || g(!1));
    }, W = ($) => {
      v === void 0 && M($), g == null || g($);
    }, q = ($) => {
      switch ($.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          $.preventDefault(), F || W(!0);
          break;
        case "Escape":
          F && ($.preventDefault(), W(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(Sd, { open: F, onOpenChange: W, children: [
      /* @__PURE__ */ c.jsx(kd, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Fo,
        {
          ...y,
          ref: N,
          type: "text",
          readOnly: !0,
          placeholder: u,
          value: T ? f(T) : "",
          disabled: a,
          invalid: s || i,
          trailingIcon: l || qm,
          trailingIconSize: d,
          onTrailingIconClick: () => !a && W(!F),
          className: A(
            F && "ring-interactive-focused ring-4",
            p
          ),
          onKeyDown: q,
          onClick: () => !a && W(!F),
          "aria-expanded": F,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(Nd, { children: /* @__PURE__ */ c.jsx(
        ks,
        {
          className: A(OS, h),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: w,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => W(!1),
          onPointerDownOutside: () => W(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            Uf,
            {
              value: T,
              onChange: z,
              ...L && { minDate: L },
              ...H && { maxDate: H },
              disabled: !O,
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
IS.displayName = "DatePicker";
const TS = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], RN = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: a,
  actions: s = TS,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0,
  onOpenAutoFocus: u,
  bodyClassName: f
}) => {
  const [p, h] = k.useState(-1), v = a !== void 0 ? a : p !== -1, g = async (N) => {
    const C = s.indexOf(N);
    if (N.onAction) {
      h(C);
      const P = await N.onAction(t);
      if (h(-1), P === !1)
        return;
    } else
      h(-1);
    e && t(N.value);
  }, w = () => {
    n(t);
  }, b = (N) => {
    N.preventDefault(), i && !v && d && n(t);
  }, y = (N) => {
    if (v) {
      N.preventDefault();
      return;
    }
    N.preventDefault(), n(t);
  };
  return /* @__PURE__ */ c.jsx(ts, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(ns, { children: /* @__PURE__ */ c.jsx(
    rs,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        os,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: b,
          onEscapeKeyDown: y,
          onOpenAutoFocus: u,
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
              -translate-y-1/2 transform`,
          children: [
            /* @__PURE__ */ c.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ c.jsx(
              Qc,
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
                text-body-primary max-h-[70vh] flex-1 overflow-hidden
                overflow-y-auto border-y-1`,
                  f
                ),
                children: o
              }
            ),
            /* @__PURE__ */ c.jsxs("footer", { className: "px-xl py-md flex flex-shrink-0 justify-between", children: [
              i && /* @__PURE__ */ c.jsx(
                Re,
                {
                  intent: "tertiary",
                  onClick: w,
                  disabled: v,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((N, C) => {
                const { label: P, classNames: S, onAction: M, value: _, ...T } = N;
                return /* @__PURE__ */ c.jsx(
                  Re,
                  {
                    loading: p === C,
                    ...T,
                    intent: N.intent || "primary",
                    className: S,
                    onClick: () => g(N),
                    children: P
                  },
                  C
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, lm = Jr(void 0), Ls = () => {
  const e = Wr(lm);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, $S = ({
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
  const [d, u] = We(o), f = a !== void 0 ? a : d, p = k.Children.toArray(r).filter(
    (C) => k.isValidElement(C) && C.type === dm
  ), h = p.length, x = (C) => {
    C >= 0 && C < h && (a === void 0 && u(C), l == null || l(C));
  }, v = () => x(f + 1), g = () => x(f - 1), w = (C) => {
    a === void 0 && u(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(w);
  }, y = (C) => {
    C.preventDefault(), s && n(w);
  }, N = {
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
  return /* @__PURE__ */ c.jsx(lm.Provider, { value: N, children: /* @__PURE__ */ c.jsx(ts, { open: e, onOpenChange: w, children: /* @__PURE__ */ c.jsx(ns, { children: /* @__PURE__ */ c.jsx(
    rs,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        os,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform overflow-auto`,
          onPointerDownOutside: b,
          onEscapeKeyDown: y,
          children: p[f]
        }
      )
    }
  ) }) }) });
}, dm = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), FS = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  Qc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), LS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), WS = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = Ls(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(Re, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, VS = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Ls(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(Rv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Re, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Re, { ...o, onClick: i, children: e });
}, AN = {
  Root: $S,
  Step: dm,
  Header: FS,
  Body: LS,
  Footer: WS,
  Action: VS,
  useMultiStepDialog: Ls
}, DN = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: a,
  optional: s
}) => {
  const i = k.isValidElement(t) ? k.cloneElement(
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
}, um = Sd, BS = kd, zS = _0, Ws = k.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Nd, { children: /* @__PURE__ */ c.jsx(
  ks,
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
Ws.displayName = ks.displayName;
const HS = (e) => typeof e == "string" ? e : e.label || e.value || String(e), YS = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, fm = k.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = HS,
      getSuggestionKey: d = YS,
      debounceMs: u = 300,
      minQueryLength: f = 0,
      loadingText: p = "Loading...",
      disabled: h,
      onFocus: x,
      onBlur: v,
      onKeyDown: g,
      ...w
    } = e, [b, y] = We(!1), [N, C] = We(
      []
    ), [P, S] = We(!1), M = Ct(null), [_, T] = We(0), F = Ct([]), L = DS(n, u), H = jr(() => {
      if (!o)
        return N;
      if (!n || n.length < f)
        return o;
      const R = n.toLowerCase();
      return o.filter((E) => l(E).toLowerCase().includes(R));
    }, [
      o,
      N,
      n,
      f,
      l
    ]);
    Ht(() => {
      if (a) {
        if (L.length < f) {
          C([]), y(!1), S(!1);
          return;
        }
        return M.current && M.current.abort(), M.current = new AbortController(), S(!0), a(L).then((R) => {
          C(R);
        }).catch((R) => {
          R.name !== "AbortError" && console.debug("AutoSuggest search failed:", R), C([]);
        }).finally(() => {
          S(!1);
        }), () => {
          M.current && M.current.abort();
        };
      }
    }, [L, a, f]);
    const O = he(
      (R) => {
        const E = l(R);
        r(E), s == null || s(R), y(!1);
      },
      [r, s, l]
    ), z = he(
      (R) => {
        h || y(!0), x == null || x(R);
      },
      [h, x]
    ), W = he(
      (R) => {
        y(!1), v == null || v(R);
      },
      [v]
    ), q = he(
      (R) => {
        const E = R.target.value;
        r(E), !b && H.length > 0 && y(!0);
      },
      [r, b, H.length]
    );
    Ht(() => {
      T(0), F.current = [];
    }, [H]), Ht(() => {
      var R;
      b && _ >= 0 && F.current[_] && ((R = F.current[_]) == null || R.scrollIntoView({
        block: "nearest"
      }));
    }, [_, b]);
    const j = he(
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
            const E = H[_];
            E && O(E);
            break;
          }
          case "ArrowDown":
            R.preventDefault(), T(
              (E) => E < H.length - 1 ? E + 1 : E
            );
            break;
          case "ArrowUp":
            R.preventDefault(), T((E) => E > 0 ? E - 1 : E);
            break;
        }
        g == null || g(R);
      },
      [b, _, H, O, g]
    ), $ = b && !h && (H.length > 0 || P), ne = $ && _ >= 0 ? `autosuggest-item-${_}` : void 0;
    return /* @__PURE__ */ c.jsxs(um, { open: $, children: [
      /* @__PURE__ */ c.jsx(zS, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Fo,
        {
          ref: t,
          value: n,
          onChange: q,
          onFocus: z,
          onBlur: W,
          onKeyDown: j,
          disabled: h,
          role: "combobox",
          "aria-expanded": $,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": ne,
          "aria-autocomplete": "list",
          ...w
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        Ws,
        {
          align: "start",
          sideOffset: 4,
          className: "p-0",
          style: {
            width: "var(--radix-popover-trigger-width)",
            maxWidth: "600px"
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
                /* @__PURE__ */ c.jsx(fp, { className: "h-4 w-4 animate-spin" }),
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
              children: H.map((R, E) => {
                const I = l(R), V = E === _, Y = `autosuggest-item-${E}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: Y,
                    ref: (K) => {
                      F.current[E] = K;
                    },
                    role: "option",
                    "aria-selected": V,
                    "data-value": I,
                    onClick: () => O(R),
                    onPointerDown: (K) => {
                      K.preventDefault(), O(R);
                    },
                    onMouseEnter: () => T(E),
                    className: A(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      V && "bg-interactive-neutral-hover"
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
fm.displayName = "AutoSuggest";
var fe = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(fe || {}), X = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(X || {});
const GS = [
  {
    backgroundColor: X.AccentSunSoft,
    textColor: fe.AccentSunStrong,
    iconColor: X.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: X.AccentSunPale,
    textColor: fe.AccentSunStrong,
    iconColor: X.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: X.AccentWoodSoft,
    textColor: fe.AccentWoodStrong,
    iconColor: X.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: X.AccentWoodPale,
    textColor: fe.AccentWoodStrong,
    iconColor: X.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: X.AccentOrangeSoft,
    textColor: fe.AccentOrangeStrong,
    iconColor: X.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: X.AccentOrangePale,
    textColor: fe.AccentOrangeStrong,
    iconColor: X.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: X.AccentYellowSoft,
    textColor: fe.AccentYellowStrong,
    iconColor: X.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: X.AccentYellowPale,
    textColor: fe.AccentYellowStrong,
    iconColor: X.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: X.AccentLemonSoft,
    textColor: fe.AccentLemonStrong,
    iconColor: X.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: X.AccentLemonPale,
    textColor: fe.AccentLemonStrong,
    iconColor: X.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: X.AccentGrassSoft,
    textColor: fe.AccentGrassStrong,
    iconColor: X.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: X.AccentGrassPale,
    textColor: fe.AccentGrassStrong,
    iconColor: X.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: X.AccentLimeSoft,
    textColor: fe.AccentLimeStrong,
    iconColor: X.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: X.AccentLimePale,
    textColor: fe.AccentLimeStrong,
    iconColor: X.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: X.AccentGreenSoft,
    textColor: fe.AccentGreenStrong,
    iconColor: X.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: X.AccentGreenPale,
    textColor: fe.AccentGreenStrong,
    iconColor: X.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: X.AccentPeacockSoft,
    textColor: fe.AccentPeacockStrong,
    iconColor: X.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: X.AccentPeacockPale,
    textColor: fe.AccentPeacockStrong,
    iconColor: X.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: X.AccentCyanSoft,
    textColor: fe.AccentCyanStrong,
    iconColor: X.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: X.AccentCyanPale,
    textColor: fe.AccentCyanStrong,
    iconColor: X.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: X.AccentSkySoft,
    textColor: fe.AccentSkyStrong,
    iconColor: X.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: X.AccentSkyPale,
    textColor: fe.AccentSkyStrong,
    iconColor: X.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: X.AccentSeaSoft,
    textColor: fe.AccentSeaStrong,
    iconColor: X.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: X.AccentSeaPale,
    textColor: fe.AccentSeaStrong,
    iconColor: X.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: X.AccentVioletSoft,
    textColor: fe.AccentVioletStrong,
    iconColor: X.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: X.AccentVioletPale,
    textColor: fe.AccentVioletStrong,
    iconColor: X.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: X.AccentPurpleSoft,
    textColor: fe.AccentPurpleStrong,
    iconColor: X.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: X.AccentPurplePale,
    textColor: fe.AccentPurpleStrong,
    iconColor: X.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: X.AccentMagentaSoft,
    textColor: fe.AccentMagentaStrong,
    iconColor: X.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: X.AccentMagentaPale,
    textColor: fe.AccentMagentaStrong,
    iconColor: X.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: X.AccentCharcoalSoft,
    textColor: fe.AccentCharchoalStrong,
    iconColor: X.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: X.AccentCharcoalPale,
    textColor: fe.AccentCharchoalStrong,
    iconColor: X.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: X.AccentGraySoft,
    textColor: fe.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: X.AccentGrayPale,
    textColor: fe.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: X.AccentGrayPale,
    textColor: fe.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: X.AccentBambooPale,
    textColor: fe.AccentBambooStrong,
    iconColor: X.AccentBambooStrong,
    code: 10
  }
], KS = ae(
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
), La = ({
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
  disabled: u = !1
}) => {
  const f = GS.find(
    (h) => h.code === e
  ), p = () => l === "secondary" ? `var(${f == null ? void 0 : f.iconColor})` : `var(${f == null ? void 0 : f.textColor})`;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: A(
        KS({
          size: a,
          selected: u ? !1 : i,
          interactive: !!o && !u,
          variant: l,
          disabled: u
        }),
        n
      ),
      style: {
        // Only apply accent background for primary variant
        // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
        ...l === "primary" && {
          backgroundColor: `var(${f == null ? void 0 : f.backgroundColor})`
        },
        // Only apply inline color when not disabled (Tailwind class handles disabled state)
        ...!u && { color: `var(${f == null ? void 0 : f.textColor})` },
        ...s
      },
      onClick: u ? void 0 : o,
      role: o ? "button" : void 0,
      "aria-disabled": u || void 0,
      children: [
        d && /* @__PURE__ */ c.jsx(
          "span",
          {
            className: A(
              "shrink-0",
              u && "text-shape-interactive-disabled"
            ),
            style: u ? void 0 : { color: p() },
            children: Oe(d, { size: 14 })
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "pt-0.5 relative h-full truncate", children: t }),
        !!r && !u && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: A(
              `bg-interactive-neutral-default h-3 w-3 flex shrink-0 cursor-pointer
            items-center justify-center rounded-full leading-none`
            ),
            onClick: r,
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
}, mm = k.forwardRef(
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
    const [N, C] = We(""), P = s ?? N, S = i ?? C, [M, _] = We(!1), { compositionHandlers: T, guardKeyHandler: F } = $o(), [L, H] = We(null), O = Ct(null);
    k.useImperativeHandle(y, () => O.current);
    const z = k.useMemo(() => {
      const K = o.map(
        (D) => D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(K.join("|"));
    }, [o]), W = he(
      (K) => !(!K || !r && e.includes(K) || n && e.length >= n),
      [e, r, n]
    ), q = he(
      (K) => {
        const D = K.trim();
        if (W(D)) {
          if (g) {
            const Q = g(D);
            if (!Q.valid) {
              H(
                Q.error ?? w
              );
              return;
            }
          }
          t([...e, D]), S(""), H(null);
        }
      },
      [
        e,
        t,
        W,
        S,
        g,
        w
      ]
    ), j = he(
      (K) => {
        const D = e.filter((Q, J) => J !== K);
        t(D);
      },
      [e, t]
    ), $ = he(
      (K) => {
        const D = K.target.value, Q = D[D.length - 1];
        if (Q && o.includes(Q)) {
          const se = D.slice(0, -1);
          se && q(se);
          return;
        }
        const J = D.split(z);
        if (J.length > 1) {
          J.filter(Boolean).forEach((se) => q(se));
          return;
        }
        S(D);
      },
      [o, z, q, S]
    ), ne = he(
      (K) => {
        K.key === "Enter" && P.trim() && (K.preventDefault(), q(P)), (K.key === "Backspace" || K.key === "Delete") && !P && e.length > 0 && (K.preventDefault(), j(e.length - 1));
      },
      [P, e.length, q, j]
    ), R = he(() => {
      P.trim() && q(P), _(!1), H(null);
    }, [P, q]), E = x || (n ? e.length >= n : !1), I = e.length === 0 && !P, V = !!d, Y = !!u;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: A(
            cm({ invalid: h }),
            "min-h-11.5 !h-auto max-h-[200px] overflow-y-auto",
            v
          ),
          children: [
            d && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Fn({
                  position: "prefix"
                }),
                children: Oe(d, { size: p })
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: A(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  V ? "pl-0" : "pl-sm",
                  Y ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((K, D) => /* @__PURE__ */ c.jsx(
                    La,
                    {
                      ...!x && { onRemove: () => j(D) },
                      children: K
                    },
                    D
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: O,
                      value: P,
                      onChange: $,
                      onKeyDown: F(ne),
                      onFocus: () => _(!0),
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
                className: Fn({
                  position: "trailing"
                }),
                children: Oe(u, { size: f })
              }
            )
          ]
        }
      ),
      (l || L) && /* @__PURE__ */ c.jsx(
        "p",
        {
          className: A(
            "mt-xxs text-sm",
            L ? "text-body-alert" : "text-body-secondary",
            !L && !M && "invisible"
          ),
          children: L || l
        }
      )
    ] });
  }
);
mm.displayName = "TagInput";
const jN = Object.assign(Fo, {
  AutoSuggest: fm,
  TagInput: mm
});
var qi = 1, US = 0.9, qS = 0.8, XS = 0.17, ua = 0.1, fa = 0.999, ZS = 0.9999, QS = 0.99, JS = /[\\\/_+.#"@\[\(\{&]/, ek = /[\\\/_+.#"@\[\(\{&]/g, tk = /[\s-]/, pm = /[\s-]/g;
function Wa(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? qi : QS;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), u = 0, f, p, h, x; d >= 0; ) f = Wa(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= qi : JS.test(e.charAt(d - 1)) ? (f *= qS, h = e.slice(o, d - 1).match(ek), h && o > 0 && (f *= Math.pow(fa, h.length))) : tk.test(e.charAt(d - 1)) ? (f *= US, x = e.slice(o, d - 1).match(pm), x && o > 0 && (f *= Math.pow(fa, x.length))) : (f *= XS, o > 0 && (f *= Math.pow(fa, d - o))), e.charAt(d) !== t.charAt(a) && (f *= ZS)), (f < ua && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Wa(e, t, n, r, d + 1, a + 2, s), p * ua > f && (f = p * ua)), f > u && (u = f), d = n.indexOf(l, d + 1);
  return s[i] = u, u;
}
function Xi(e) {
  return e.toLowerCase().replace(pm, " ");
}
function nk(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Wa(e, t, Xi(e), Xi(t), 0, 0, {});
}
var On = '[cmdk-group=""]', ma = '[cmdk-group-items=""]', rk = '[cmdk-group-heading=""]', hm = '[cmdk-item=""]', Zi = `${hm}:not([aria-disabled="true"])`, Va = "cmdk-item-select", dn = "data-value", ok = (e, t, n) => nk(e, t, n), vm = m.createContext(void 0), ir = () => m.useContext(vm), gm = m.createContext(void 0), Vs = () => m.useContext(gm), xm = m.createContext(void 0), bm = m.forwardRef((e, t) => {
  let n = un(() => {
    var E, I;
    return { search: "", value: (I = (E = e.value) != null ? E : e.defaultValue) != null ? I : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = un(() => /* @__PURE__ */ new Set()), o = un(() => /* @__PURE__ */ new Map()), a = un(() => /* @__PURE__ */ new Map()), s = un(() => /* @__PURE__ */ new Set()), i = ym(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: g = !0, ...w } = e, b = Ee(), y = Ee(), N = Ee(), C = m.useRef(null), P = hk();
  qt(() => {
    if (u !== void 0) {
      let E = u.trim();
      n.current.value = E, S.emit();
    }
  }, [u]), qt(() => {
    P(6, H);
  }, []);
  let S = m.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, I, V) => {
    var Y, K, D, Q;
    if (!Object.is(n.current[E], I)) {
      if (n.current[E] = I, E === "search") L(), T(), P(1, F);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(N);
          J ? J.focus() : (Y = document.getElementById(b)) == null || Y.focus();
        }
        if (P(7, () => {
          var J;
          n.current.selectedItemId = (J = O()) == null ? void 0 : J.id, S.emit();
        }), V || P(5, H), ((K = i.current) == null ? void 0 : K.value) !== void 0) {
          let J = I ?? "";
          (Q = (D = i.current).onValueChange) == null || Q.call(D, J);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), M = m.useMemo(() => ({ value: (E, I, V) => {
    var Y;
    I !== ((Y = a.current.get(E)) == null ? void 0 : Y.value) && (a.current.set(E, { value: I, keywords: V }), n.current.filtered.items.set(E, _(I, V)), P(2, () => {
      T(), S.emit();
    }));
  }, item: (E, I) => (r.current.add(E), I && (o.current.has(I) ? o.current.get(I).add(E) : o.current.set(I, /* @__PURE__ */ new Set([E]))), P(3, () => {
    L(), T(), n.current.value || F(), S.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let V = O();
    P(4, () => {
      L(), (V == null ? void 0 : V.getAttribute("id")) === E && F(), S.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: N, labelId: y, listInnerRef: C }), []);
  function _(E, I) {
    var V, Y;
    let K = (Y = (V = i.current) == null ? void 0 : V.filter) != null ? Y : ok;
    return E ? K(E, n.current.search, I) : 0;
  }
  function T() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, I = [];
    n.current.filtered.groups.forEach((Y) => {
      let K = o.current.get(Y), D = 0;
      K.forEach((Q) => {
        let J = E.get(Q);
        D = Math.max(J, D);
      }), I.push([Y, D]);
    });
    let V = C.current;
    z().sort((Y, K) => {
      var D, Q;
      let J = Y.getAttribute("id"), se = K.getAttribute("id");
      return ((D = E.get(se)) != null ? D : 0) - ((Q = E.get(J)) != null ? Q : 0);
    }).forEach((Y) => {
      let K = Y.closest(ma);
      K ? K.appendChild(Y.parentElement === K ? Y : Y.closest(`${ma} > *`)) : V.appendChild(Y.parentElement === V ? Y : Y.closest(`${ma} > *`));
    }), I.sort((Y, K) => K[1] - Y[1]).forEach((Y) => {
      var K;
      let D = (K = C.current) == null ? void 0 : K.querySelector(`${On}[${dn}="${encodeURIComponent(Y[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function F() {
    let E = z().find((V) => V.getAttribute("aria-disabled") !== "true"), I = E == null ? void 0 : E.getAttribute(dn);
    S.setState("value", I || void 0);
  }
  function L() {
    var E, I, V, Y;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let K = 0;
    for (let D of r.current) {
      let Q = (I = (E = a.current.get(D)) == null ? void 0 : E.value) != null ? I : "", J = (Y = (V = a.current.get(D)) == null ? void 0 : V.keywords) != null ? Y : [], se = _(Q, J);
      n.current.filtered.items.set(D, se), se > 0 && K++;
    }
    for (let [D, Q] of o.current) for (let J of Q) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = K;
  }
  function H() {
    var E, I, V;
    let Y = O();
    Y && (((E = Y.parentElement) == null ? void 0 : E.firstChild) === Y && ((V = (I = Y.closest(On)) == null ? void 0 : I.querySelector(rk)) == null || V.scrollIntoView({ block: "nearest" })), Y.scrollIntoView({ block: "nearest" }));
  }
  function O() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${hm}[aria-selected="true"]`);
  }
  function z() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(Zi)) || []);
  }
  function W(E) {
    let I = z()[E];
    I && S.setState("value", I.getAttribute(dn));
  }
  function q(E) {
    var I;
    let V = O(), Y = z(), K = Y.findIndex((Q) => Q === V), D = Y[K + E];
    (I = i.current) != null && I.loop && (D = K + E < 0 ? Y[Y.length - 1] : K + E === Y.length ? Y[0] : Y[K + E]), D && S.setState("value", D.getAttribute(dn));
  }
  function j(E) {
    let I = O(), V = I == null ? void 0 : I.closest(On), Y;
    for (; V && !Y; ) V = E > 0 ? mk(V, On) : pk(V, On), Y = V == null ? void 0 : V.querySelector(Zi);
    Y ? S.setState("value", Y.getAttribute(dn)) : q(E);
  }
  let $ = () => W(z().length - 1), ne = (E) => {
    E.preventDefault(), E.metaKey ? $() : E.altKey ? j(1) : q(1);
  }, R = (E) => {
    E.preventDefault(), E.metaKey ? W(0) : E.altKey ? j(-1) : q(-1);
  };
  return m.createElement(Z.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (E) => {
    var I;
    (I = w.onKeyDown) == null || I.call(w, E);
    let V = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || V)) switch (E.key) {
      case "n":
      case "j": {
        g && E.ctrlKey && ne(E);
        break;
      }
      case "ArrowDown": {
        ne(E);
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
        E.preventDefault(), W(0);
        break;
      }
      case "End": {
        E.preventDefault(), $();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let Y = O();
        if (Y) {
          let K = new Event(Va);
          Y.dispatchEvent(K);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: gk }, l), Lo(e, (E) => m.createElement(gm.Provider, { value: S }, m.createElement(vm.Provider, { value: M }, E))));
}), ak = m.forwardRef((e, t) => {
  var n, r;
  let o = Ee(), a = m.useRef(null), s = m.useContext(xm), i = ir(), l = ym(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  qt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = wm(o, a, [e.value, e.children, a], e.keywords), f = Vs(), p = _t((P) => P.value && P.value === u.current), h = _t((P) => d || i.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(Va, x), () => P.removeEventListener(Va, x);
  }, [h, e.onSelect, e.disabled]);
  function x() {
    var P, S;
    v(), (S = (P = l.current).onSelect) == null || S.call(P, u.current);
  }
  function v() {
    f.setState("value", u.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: y, keywords: N, ...C } = e;
  return m.createElement(Z.div, { ref: kt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : x }, e.children);
}), sk = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ee(), i = m.useRef(null), l = m.useRef(null), d = Ee(), u = ir(), f = _t((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  qt(() => u.group(s), []), wm(s, i, [e.value, e.heading, l]);
  let p = m.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return m.createElement(Z.div, { ref: kt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && m.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Lo(e, (h) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, m.createElement(xm.Provider, { value: p }, h))));
}), ik = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), a = _t((s) => !s.search);
  return !n && !a ? null : m.createElement(Z.div, { ref: kt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), ck = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Vs(), s = _t((d) => d.search), i = _t((d) => d.selectedItemId), l = ir();
  return m.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), m.createElement(Z.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), lk = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = m.useRef(null), s = m.useRef(null), i = _t((d) => d.selectedItemId), l = ir();
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
  }, []), m.createElement(Z.div, { ref: kt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, Lo(e, (d) => m.createElement("div", { ref: kt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), dk = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return m.createElement(ts, { open: n, onOpenChange: r }, m.createElement(ns, { container: s }, m.createElement(rs, { "cmdk-overlay": "", className: o }), m.createElement(os, { "aria-label": e.label, "cmdk-dialog": "", className: a }, m.createElement(bm, { ref: t, ...i }))));
}), uk = m.forwardRef((e, t) => _t((n) => n.filtered.count === 0) ? m.createElement(Z.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), fk = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return m.createElement(Z.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Lo(e, (s) => m.createElement("div", { "aria-hidden": !0 }, s)));
}), He = Object.assign(bm, { List: lk, Item: ak, Input: ck, Group: sk, Separator: ik, Dialog: dk, Empty: uk, Loading: fk });
function mk(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function pk(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function ym(e) {
  let t = m.useRef(e);
  return qt(() => {
    t.current = e;
  }), t;
}
var qt = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function un(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function _t(e) {
  let t = Vs(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function wm(e, t, n, r = []) {
  let o = m.useRef(), a = ir();
  return qt(() => {
    var s;
    let i = (() => {
      var d;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (d = u.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(dn, i), o.current = i;
  }), o;
}
var hk = () => {
  let [e, t] = m.useState(), n = un(() => /* @__PURE__ */ new Map());
  return qt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function vk(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Lo({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement(vk(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var gk = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Cm = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  He,
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
Cm.displayName = He.displayName;
const Sm = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Ha, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            He.Input,
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
Sm.displayName = He.Input.displayName;
const km = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  He.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
km.displayName = He.List.displayName;
const Nm = k.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  He.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Nm.displayName = He.Empty.displayName;
const Fr = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  He.Group,
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
Fr.displayName = He.Group.displayName;
const xk = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  He.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
xk.displayName = He.Separator.displayName;
const Lr = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  He.Item,
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
Lr.displayName = He.Item.displayName;
const Qi = ae("ease-in-out transition-all duration-300", {
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
}), bk = ({
  options: e,
  onValueChange: t = (U) => U,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: a = (U) => U,
  variant: s,
  defaultValue: i = [],
  placeholder: l = "選択してください",
  placeholderAriaLabel: d = "選択してください",
  triggerDescription: u = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: f = "オプションが選択されていません",
  searchHelpText: p = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: h = "利用可能なオプションを検索",
  optionsListAriaLabel: x = "利用可能なオプション",
  selectAllLabel: v = "すべて選択",
  selectAllCountLabel: g = "オプション",
  clearAllLabel: w = "すべてクリア",
  closeLabel: b = "閉じる",
  moreSelectedLabel: y = "その他",
  searchPlaceholder: N = "オプションを検索...",
  maxCount: C = 10,
  modalPopover: P = !1,
  className: S,
  hideSelectAll: M = !1,
  searchable: _ = !0,
  emptyIndicator: T = "結果が見つかりません。",
  autoSize: F = !1,
  singleLine: L = !1,
  popoverClassName: H,
  disabled: O = !1,
  invalid: z = !1,
  responsive: W,
  minWidth: q,
  maxWidth: j,
  deduplicateOptions: $ = !1,
  resetOnDefaultValueChange: ne = !0,
  closeOnSelect: R = !1,
  filterByValueAndLabel: E = !1,
  renderOption: I,
  customTrigger: V,
  selectionDisplayMode: Y = "default",
  hideSelection: K = !1,
  maxDisplayedOptions: D,
  totalOptionsCount: Q,
  moreOptionsLabel: J = (U) => `検索テキストを入力して他${U}件を表示`,
  ...se
}, me) => {
  const [U, Se] = k.useState(i), [we, Le] = k.useState(!1), [De, Qe] = k.useState(""), [Mn, vt] = k.useState(""), [Wo, lr] = k.useState(""), en = k.useRef(U.length), tn = k.useRef(we), nn = k.useRef(De), gt = k.useCallback(
    (G, re = "polite") => {
      re === "assertive" ? (lr(G), setTimeout(() => lr(""), 100)) : (vt(G), setTimeout(() => vt(""), 100));
    },
    []
  ), Lt = k.useId(), dr = `${Lt}-listbox`, ur = `${Lt}-description`, fr = `${Lt}-count`, mr = k.useRef(i), Pn = k.useCallback(
    (G) => {
      const re = G[0];
      return !!(re && typeof re == "object" && "heading" in re);
    },
    []
  ), Rn = k.useCallback((G, re) => {
    if (G.length !== re.length) return !1;
    const ce = [...G].sort(), ge = [...re].sort();
    return ce.every((Ne, je) => Ne === ge[je]);
  }, []), pr = k.useCallback(() => {
    Se(i), Le(!1), Qe(""), t(i);
  }, [i, t]), qe = k.useRef(null);
  k.useImperativeHandle(
    me,
    () => ({
      reset: pr,
      getSelectedValues: () => U,
      setSelectedValues: (G) => {
        Se(G), t(G);
      },
      clear: () => {
        Se([]), t([]);
      },
      focus: () => {
        if (qe.current) {
          qe.current.focus();
          const G = qe.current.style.outline, re = qe.current.style.outlineOffset;
          qe.current.style.outline = "2px solid hsl(var(--ring))", qe.current.style.outlineOffset = "2px", setTimeout(() => {
            qe.current && (qe.current.style.outline = G, qe.current.style.outlineOffset = re);
          }, 1e3);
        }
      }
    }),
    [pr, U, t]
  );
  const [Xe, rn] = k.useState("desktop");
  k.useEffect(() => {
    if (typeof window > "u") return;
    const G = () => {
      const re = window.innerWidth;
      re < 640 ? rn("mobile") : re < 1024 ? rn("tablet") : rn("desktop");
    };
    return G(), window.addEventListener("resize", G), () => {
      typeof window < "u" && window.removeEventListener("resize", G);
    };
  }, []);
  const at = (() => {
    if (!W)
      return {
        maxCount: C,
        compactMode: !1
      };
    if (W === !0) {
      const ce = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Xe];
      return {
        maxCount: (ce == null ? void 0 : ce.maxCount) ?? C,
        compactMode: (ce == null ? void 0 : ce.compactMode) ?? !1
      };
    }
    const G = W[Xe];
    return {
      maxCount: (G == null ? void 0 : G.maxCount) ?? C,
      compactMode: (G == null ? void 0 : G.compactMode) ?? !1
    };
  })(), ie = k.useCallback(() => {
    if (e.length === 0) return [];
    let G;
    Pn(e) ? G = e.flatMap((Ne) => Ne.options) : G = e;
    const re = /* @__PURE__ */ new Set(), ce = [], ge = [];
    return G.forEach((Ne) => {
      re.has(Ne.value) ? (ce.push(Ne.value), $ || ge.push(Ne)) : (re.add(Ne.value), ge.push(Ne));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${$ ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${$ ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), $ ? ge : G;
  }, [e, $, Pn]), ve = k.useCallback(
    (G) => {
      const re = ie().find((ce) => ce.value === G);
      return !re && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${G}" not found in options list`
      ), re;
    },
    [ie]
  ), le = k.useCallback(
    (G, re) => {
      const [ce, ge] = G.split(":");
      if (!E)
        return ge && ge.toLowerCase().includes(re.toLowerCase()) ? 1 : 0;
      const Ne = re.toLowerCase();
      return ge && ge.toLowerCase().includes(Ne) || ce && ce.toLowerCase().includes(Ne) ? 1 : 0;
    },
    [E]
  ), be = (G) => {
    if (G.key === "Enter")
      Le(!0);
    else if (G.key === "Backspace" && !G.currentTarget.value) {
      const re = [...U];
      re.pop(), Se(re), t(re);
    }
  }, Te = (G) => {
    if (O) return;
    const re = ve(G);
    if (re != null && re.disabled) return;
    const ce = U.includes(G) ? U.filter((ge) => ge !== G) : [...U, G];
    Se(ce), t(ce), R && Le(!1);
  }, pe = () => {
    O || (Se([]), a([]), t([]));
  }, Vo = () => {
    O || Le((G) => !G);
  }, Bo = () => {
    if (O) return;
    const G = U.slice(
      0,
      at.maxCount
    );
    Se(G), t(G);
  }, zo = () => {
    if (O) return;
    const G = ie().filter((re) => !re.disabled);
    if (U.length === G.length)
      pe();
    else {
      const re = G.map((ce) => ce.value);
      Se(re), t(re);
    }
    R && Le(!1);
  }, Wt = I || ((G) => {
    const { option: re, location: ce, onRemove: ge, disabled: Ne } = G;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      La,
      {
        className: A(
          Qi({ variant: s }),
          at.compactMode && "text-xs px-1.5 py-0.5",
          Xe === "mobile" && "max-w-[120px] truncate",
          L && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Ne && "cursor-not-allowed"
        ),
        ...!Ne && { onRemove: ge },
        children: re.label
      }
    ) : re.label;
  }), Fm = !!De.trim(), vr = D !== void 0 && (!Fm || !!n);
  k.useEffect(() => {
    if (!ne) return;
    const G = mr.current;
    Rn(G, i) || (Rn(U, i) || Se(i), mr.current = [...i]);
  }, [i, U, Rn, ne]);
  const Ho = {
    minWidth: q || (Xe === "mobile" ? "0px" : "200px"),
    maxWidth: j || "100%",
    popoverMaxWidth: j || "32rem",
    width: F ? "auto" : "100%"
  }, zs = k.useMemo(() => Y === "default" || U.length === 0 ? l : U.map((G) => {
    var re;
    return (re = ve(G)) == null ? void 0 : re.label;
  }).filter(Boolean).join(", "), [U, ve, l, Y]);
  return k.useEffect(() => {
    we || Qe("");
  }, [we]), k.useEffect(() => {
    const G = U.length, re = ie(), ce = re.filter((ge) => !ge.disabled).length;
    if (G !== en.current) {
      const ge = G - en.current;
      if (ge > 0) {
        const je = U.slice(-ge).map((Me) => {
          var xt;
          return (xt = re.find((Lm) => Lm.value === Me)) == null ? void 0 : xt.label;
        }).filter(Boolean);
        je.length === 1 ? gt(
          `${je[0]} selected. ${G} of ${ce} options selected.`
        ) : gt(
          `${je.length} options selected. ${G} of ${ce} total selected.`
        );
      } else ge < 0 && gt(
        `Option removed. ${G} of ${ce} options selected.`
      );
      en.current = G;
    }
    we !== tn.current && (gt(
      we ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), tn.current = we), De !== nn.current && De !== void 0 && (De && we && gt(`Searching for "${De}"`), nn.current = De);
  }, [U, we, De, gt, ie]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: Mn }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Wo })
    ] }),
    /* @__PURE__ */ c.jsxs(
      um,
      {
        open: we,
        onOpenChange: Le,
        modal: P,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: ur, className: "sr-only", children: u }),
          /* @__PURE__ */ c.jsx("div", { id: fr, className: "sr-only", "aria-live": "polite", children: U.length === 0 ? f : `${U.length} option${U.length === 1 ? "" : "s"} selected: ${U.map((G) => {
            var re;
            return (re = ve(G)) == null ? void 0 : re.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: A(F && "w-auto", S), children: [
            /* @__PURE__ */ c.jsx(BS, { asChild: !0, children: V || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: qe,
                ...se,
                onClick: Vo,
                disabled: O,
                className: A(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  F ? "w-auto" : "w-full",
                  !z && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  z && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  at.compactMode && "min-h-8 text-sm",
                  Xe === "mobile" && "min-h-12"
                ),
                style: {
                  ...Ho,
                  maxWidth: `min(${Ho.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": we,
                "aria-haspopup": "listbox",
                "aria-controls": we ? dr : void 0,
                "aria-describedby": `${ur} ${fr}`,
                "aria-label": `Multi-select: ${U.length} of ${ie().length} options selected. ${d}`,
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
                            Y === "inline" && "truncate",
                            O ? "text-body-disabled" : we || Y === "inline" && zs !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: zs
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        eo,
                        {
                          className: A(
                            "h-4 mx-xs cursor-pointer",
                            O ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(K || Y === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              U.slice(0, at.maxCount).map((G) => {
                const re = ve(G);
                return re ? /* @__PURE__ */ c.jsx(k.Fragment, { children: Wt({
                  option: re,
                  location: "badge",
                  onRemove: () => Te(G),
                  disabled: O
                }) }, G) : null;
              }).filter(Boolean),
              U.length > at.maxCount && /* @__PURE__ */ c.jsxs(
                La,
                {
                  className: A(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    Qi({ variant: s }),
                    at.compactMode && "text-xs px-1.5 py-0.5",
                    L && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    O && "cursor-not-allowed"
                  ),
                  ...!O && { onRemove: Bo },
                  children: [
                    "+ ",
                    U.length - at.maxCount,
                    " ",
                    y
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Ws,
            {
              id: dr,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": x,
              className: A(
                "p-0 w-auto",
                Xe === "mobile" && "w-[85vw] max-w-[280px]",
                Xe === "tablet" && "max-w-md w-[70vw]",
                Xe === "desktop" && "min-w-[300px]",
                H
              ),
              style: {
                maxWidth: `min(${Ho.popoverMaxWidth}, 85vw)`,
                maxHeight: Xe === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(Cm, { filter: le, shouldFilter: !n, children: [
                _ && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${Lt}-search-help`, className: "sr-only", children: p }),
                  /* @__PURE__ */ c.jsx(
                    Sm,
                    {
                      placeholder: N,
                      onKeyDown: be,
                      value: De,
                      onValueChange: (G) => {
                        Qe(G), n == null || n(G);
                      },
                      "aria-label": h,
                      "aria-describedby": `${Lt}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  km,
                  {
                    className: A(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Xe === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      r && /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          role: "status",
                          className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                          children: /* @__PURE__ */ c.jsx(_o.Circular, { size: "sm", children: o })
                        }
                      ),
                      !r && /* @__PURE__ */ c.jsx(Nm, { children: T }),
                      !r && !M && !De && /* @__PURE__ */ c.jsx(Fr, { children: /* @__PURE__ */ c.jsxs(
                        Lr,
                        {
                          value: "select-all",
                          onSelect: zo,
                          role: "option",
                          "aria-selected": U.length === ie().filter((G) => !G.disabled).length,
                          "aria-label": `Select all ${ie().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              $r,
                              {
                                className: "mr-xs",
                                checked: U.length === ie().filter((G) => !G.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              v,
                              ie().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                ie().length,
                                " ",
                                g
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      !r && (Pn(e) ? (() => {
                        let G = 0;
                        const re = e.reduce(
                          (je, Me) => je + Me.options.length,
                          0
                        ), ce = e.map((je) => {
                          const Me = vr ? je.options.filter(
                            (xt) => G++ < D || U.includes(xt.value)
                          ) : je.options;
                          return { ...je, options: Me };
                        }), ge = ce.reduce(
                          (je, Me) => je + Me.options.length,
                          0
                        ), Ne = (Q ?? re) - ge;
                        return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                          ce.map((je) => je.options.length === 0 ? null : /* @__PURE__ */ c.jsx(
                            Fr,
                            {
                              heading: je.heading,
                              children: je.options.map((Me) => {
                                const xt = U.includes(
                                  Me.value
                                );
                                return /* @__PURE__ */ c.jsxs(
                                  Lr,
                                  {
                                    value: `${Me.value}:${Me.label}`,
                                    onSelect: () => Te(Me.value),
                                    role: "option",
                                    "aria-selected": xt,
                                    "aria-disabled": Me.disabled ?? !1,
                                    "aria-label": `${Me.label}${xt ? ", selected" : ", not selected"}${Me.disabled ? ", disabled" : ""}`,
                                    className: A(
                                      "cursor-pointer",
                                      Me.disabled && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: !!Me.disabled,
                                    children: [
                                      /* @__PURE__ */ c.jsx(
                                        $r,
                                        {
                                          className: "mr-xs",
                                          checked: xt
                                        }
                                      ),
                                      /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Wt({
                                        option: Me,
                                        location: "dropdown",
                                        isSelected: xt
                                      }) })
                                    ]
                                  },
                                  Me.value
                                );
                              })
                            },
                            je.heading
                          )),
                          vr && Ne > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: J(Ne) })
                        ] });
                      })() : /* @__PURE__ */ c.jsx(Fr, { children: (() => {
                        const G = vr ? e.filter(
                          (ce, ge) => ge < D || U.includes(ce.value)
                        ) : e, re = (Q ?? e.length) - G.length;
                        return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                          G.map((ce) => {
                            const ge = U.includes(
                              ce.value
                            );
                            return /* @__PURE__ */ c.jsxs(
                              Lr,
                              {
                                value: `${ce.value}:${ce.label}`,
                                onSelect: () => Te(ce.value),
                                role: "option",
                                "aria-selected": ge,
                                "aria-disabled": ce.disabled ?? !1,
                                "aria-label": `${ce.label}${ge ? ", selected" : ", not selected"}${ce.disabled ? ", disabled" : ""}`,
                                className: A(
                                  "cursor-pointer",
                                  ce.disabled && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                ),
                                disabled: !!ce.disabled,
                                children: [
                                  /* @__PURE__ */ c.jsx(
                                    $r,
                                    {
                                      className: "mr-xs",
                                      checked: ge
                                    }
                                  ),
                                  /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Wt({
                                    option: ce,
                                    location: "dropdown",
                                    isSelected: ge
                                  }) })
                                ]
                              },
                              ce.value
                            );
                          }),
                          vr && re > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: J(re) })
                        ] });
                      })() }))
                    ]
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  "footer",
                  {
                    className: `px-md py-sm bg-surface-primary bottom-0
                border-t-divider-default flex items-center justify-between
                border-t`,
                    children: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                      /* @__PURE__ */ c.jsx(
                        Re,
                        {
                          intent: "text",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: pe,
                          disabled: U.length === 0,
                          children: w
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Re,
                        {
                          intent: "primary",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: () => {
                            a(U), Le(!1);
                          },
                          children: b
                        }
                      )
                    ] })
                  }
                )
              ] })
            }
          )
        ]
      }
    )
  ] });
}, yk = k.forwardRef(
  bk
);
yk.displayName = "MultiSelect";
const wk = ae(
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
        hover:bg-interactive-neutral-hover max-w-62 h-[26px] w-fit
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
), Ck = ae(
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
), Sk = ae(
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
), Ba = ({
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
  ...p
}) => {
  const [h, x] = k.useState(""), v = k.useRef(null), w = e.filter(
    (S) => !("type" in S) || S.type === "Option" || S.type === void 0
  ).length >= f, b = (S) => {
    if (typeof S == "string") return S;
    if (typeof S == "number") return String(S);
    if (Array.isArray(S)) return S.map(b).join("");
    if (k.isValidElement(S)) {
      const { children: M } = S.props;
      if (M) return b(M);
    }
    return "";
  }, y = (S) => !w || !h || "type" in S && (S.type === "Group" || S.type === "Separator") ? !0 : "label" in S ? b(S.label).toLowerCase().includes(h.toLowerCase()) : !0, N = {
    ...p
  }, C = i !== void 0 ? String(i) : void 0, P = (S) => {
    const M = e.find(
      (_) => "value" in _ && String(_.value) === S
    );
    return M && "value" in M ? M.value : S;
  };
  return C !== void 0 && (N.value = C), d && (N.onValueChange = (S) => {
    const M = P(S);
    d(M);
  }), /* @__PURE__ */ c.jsxs(
    yb,
    {
      ...N,
      onOpenChange: (S) => {
        var M;
        S || x(""), (M = N.onOpenChange) == null || M.call(N, S);
      },
      children: [
        /* @__PURE__ */ c.jsxs(
          wb,
          {
            className: A(
              wk({ variant: a, intent: s, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center truncate", children: [
                Oe(r, {
                  className: A("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ c.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ c.jsx(
                  Cb,
                  {
                    placeholder: t || "Select an option",
                    className: A("hidden", {
                      "text-sm": a === "compact"
                    })
                  }
                ) })
              ] }),
              !l && /* @__PURE__ */ c.jsx(
                Sb,
                {
                  className: A("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": p.disabled
                  }),
                  children: /* @__PURE__ */ c.jsx(
                    eo,
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
        /* @__PURE__ */ c.jsx(kb, { children: /* @__PURE__ */ c.jsxs(
          Nb,
          {
            position: "popper",
            sideOffset: -1,
            className: A(Ck({ variant: a }), n),
            children: [
              w && /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ c.jsx(Ha, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: v,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: u,
                        value: h,
                        onChange: (S) => x(S.target.value),
                        onKeyDown: (S) => S.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ c.jsx(jb, {}),
              /* @__PURE__ */ c.jsx(Eb, { children: e.map((S, M) => {
                const _ = y(S);
                switch (S.type) {
                  case "Group":
                    return /* @__PURE__ */ c.jsx(
                      Mb,
                      {
                        className: A(!_ && "hidden"),
                        children: /* @__PURE__ */ c.jsx(Pb, { children: S.label })
                      },
                      M
                    );
                  case "Separator":
                    return /* @__PURE__ */ c.jsx(
                      _b,
                      {
                        className: A(
                          "border-divider-default h-px border-b",
                          !_ && "hidden"
                        )
                      },
                      M
                    );
                  default:
                    return /* @__PURE__ */ c.jsxs(
                      Rb,
                      {
                        value: String(S.value),
                        disabled: S.disabled ?? !1,
                        className: A(
                          Sk({
                            variant: a,
                            isSelected: i === S.value
                          }),
                          !_ && "hidden"
                        ),
                        children: [
                          Oe(S.icon, {
                            className: A("h-5 w-5", {
                              "-ml-xxs": a === "default",
                              "mr-xxs": a === "compact",
                              "text-interactive-disabled": S.disabled
                            })
                          }),
                          /* @__PURE__ */ c.jsx(
                            Ab,
                            {
                              className: A("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": S.disabled
                              }),
                              children: S.label
                            }
                          ),
                          /* @__PURE__ */ c.jsx(Db, {})
                        ]
                      },
                      M
                    );
                }
              }) }),
              /* @__PURE__ */ c.jsx(Ob, {}),
              /* @__PURE__ */ c.jsx(Ib, {})
            ]
          }
        ) })
      ]
    }
  );
};
Ba.displayName = "Select";
const kk = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Ji = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), Nk = k.forwardRef(
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
    formatPageOption: d = (v, g, w) => `${v} / ${g}（全${w}件）`,
    showNavigation: u = !0,
    size: f,
    className: p,
    ...h
  }, x) => {
    const v = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, w = (P) => {
      const S = parseInt(P, 10);
      s(S), e > 1 && r(1);
    }, b = (P) => {
      const S = parseInt(P, 10);
      r(S);
    }, y = a.map((P) => ({
      value: P.toString(),
      label: P.toString()
    })), N = Math.max(t, 1), C = Array.from(
      { length: N },
      (P, S) => S + 1
    ).map((P) => ({
      value: P.toString(),
      label: d(P, N, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: A(kk({ size: f }), p),
        ...h,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Ji()), children: i }),
            /* @__PURE__ */ c.jsx(
              Ba,
              {
                value: o.toString(),
                onValueChange: w,
                options: y
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Ji()), children: l }),
            /* @__PURE__ */ c.jsx(
              Ba,
              {
                value: e.toString(),
                onValueChange: b,
                options: C,
                disabled: n === 0
              }
            )
          ] }),
          u && /* @__PURE__ */ c.jsxs("div", { className: "gap-md flex items-center", children: [
            /* @__PURE__ */ c.jsx(
              Re,
              {
                intent: "text",
                size: "sm",
                icon: Jm,
                onClick: v,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Re,
              {
                intent: "text",
                size: "sm",
                icon: rc,
                onClick: g,
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
Nk.displayName = "Pagination";
const Ek = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), Mk = ae(
  `border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[19px] cursor-[inherit]
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
), Pk = ae(
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
), ON = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(Ek({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      J0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: A(
          Mk({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(eb, { className: A(Pk({ invalid: a })) })
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
}, _N = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  Q0,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), Rk = ae(
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
), Ak = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", Dk = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, jk = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, Ok = ae(
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
), _k = "gap-xs text-sm text-body-inverse flex-row", Ik = ae(
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
), Tk = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, $k = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", Fk = k.forwardRef(
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
    const x = i || t === "disabled", [v, g] = k.useState(
      f ?? []
    ), [w, b] = k.useState(!1);
    let y;
    typeof t == "string" ? y = t : x ? y = "disabled" : v.length > 0 ? y = "filled" : y = "default";
    const N = k.useRef(y), { compositionHandlers: C, guardKeyHandler: P } = $o();
    Ht(() => {
      N.current === "filled" && y !== "filled" && g([]), N.current = y;
    }, [y]);
    const S = (T) => {
      x || o && o(T);
    }, M = (T) => {
      if (!x) {
        if (T.key === "Enter" && n.trim()) {
          const F = [...v, n.trim()];
          if (g(F), o) {
            const L = {
              ...T,
              target: { value: "" }
            };
            o(L);
          }
          u && a && a(F), T.preventDefault();
        }
        if ((T.key === "Backspace" || T.key === "Delete") && !n && v.length > 0) {
          const F = v.slice(0, -1);
          g(F), u && a && a(F), T.preventDefault();
        }
      }
    }, _ = (T) => {
      if (x) return;
      const F = v.filter((L, H) => H !== T);
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
                Rk({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: A(Ak), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: A($k, Dk), children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ c.jsx(Ha, { size: 20 })
                      }
                    ),
                    v.map((T, F) => /* @__PURE__ */ c.jsxs("span", { className: Ik({ size: e }), children: [
                      /* @__PURE__ */ c.jsx("span", { children: T }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            Tk,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (L) => {
                            L.stopPropagation(), L.preventDefault(), _(F);
                          },
                          onMouseDown: (L) => {
                            L.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: x,
                          children: /* @__PURE__ */ c.jsx(pa, { size: 8 })
                        }
                      )
                    ] }, F)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: h,
                        className: A(jk),
                        type: "text",
                        value: n,
                        onChange: S,
                        onKeyDown: P(M),
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
                      children: /* @__PURE__ */ c.jsx(pa, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      Ok({
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
                _k,
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
Fk.displayName = "SearchBar";
const Em = k.createContext(null), Lk = () => {
  const e = k.useContext(Em);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, Wk = ae(
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
), Mm = k.forwardRef(
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
    const f = k.useId(), p = s ?? `segmented-control-${f}`, h = t !== void 0, [x, v] = k.useState(n), g = h ? t : x, w = k.useCallback(
      (y) => {
        h || v(y), r == null || r(y);
      },
      [h, r]
    ), b = k.useMemo(
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
    return /* @__PURE__ */ c.jsx(Em.Provider, { value: b, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: u,
        id: s,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": a || void 0,
        className: A(Wk({ invalid: o }), i),
        ...d,
        children: l
      }
    ) });
  }
);
Mm.displayName = "SegmentedControl.Group";
const Vk = ae(
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
), Pm = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: a
}) => {
  const s = Lk(), i = s.value !== void 0 && String(s.value) === String(e), l = t || s.disabled, d = r ?? `${s.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: d,
      className: A(Vk({ selected: i, disabled: l }), o),
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
        n && Oe(n, { size: 16, className: "shrink-0" }),
        a
      ]
    }
  );
};
Pm.displayName = "SegmentedControl.Option";
const IN = {
  Group: Mm,
  Option: Pm
}, Rm = Jr(void 0), Am = Jr(!1), Bk = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = k.useState(e), o = k.useCallback(() => {
    r((s) => !s);
  }, []), a = k.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ c.jsx(Rm.Provider, { value: a, children: t });
}, zk = ({
  children: e
}) => /* @__PURE__ */ c.jsx(Am.Provider, { value: !0, children: e }), cr = () => {
  const e = Wr(Rm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = Wr(Am);
  return { ...e, isInFooter: t };
}, Dm = k.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: a, toggleCollapsed: s } = cr(), i = a ? n : t, l = /* @__PURE__ */ c.jsx(
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
      children: a ? /* @__PURE__ */ c.jsx(dp, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(cp, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ c.jsx(St, { content: i, side: "right", delayDuration: 0, children: l }) : l;
});
Dm.displayName = "SideNavigationCollapseButton";
const Hk = ae(
  `bg-surface-primary shadow-overlay top-0 z-navigation fixed flex h-full
  flex-col overflow-visible`,
  {
    variants: {
      width: {
        expanded: "w-50",
        collapsed: "gap-sm w-13"
      }
    },
    defaultVariants: {
      width: "expanded"
    }
  }
), Yk = k.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(Bk, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(jm, { ref: n, ...t }) }));
Yk.displayName = "SideNavigation";
const jm = k.forwardRef(
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
    const { isCollapsed: u } = cr();
    k.useEffect(() => {
      const p = u ? "3.25rem" : "12.5rem";
      return document.documentElement.style.setProperty(
        // Using a chemican component prefix to avoid conflicts in consuming projects
        "--cc-side-navigation-width",
        p
      ), () => {
        document.documentElement.style.removeProperty(
          "--cc-side-navigation-width"
        );
      };
    }, [u]);
    const f = t || (u ? "collapsed" : "expanded");
    return /* @__PURE__ */ c.jsxs(
      "nav",
      {
        ref: d,
        className: A(
          Hk({ width: f }),
          "group",
          e
        ),
        "data-collapsed": u,
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
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(zk, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(
            Dm,
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
jm.displayName = "SideNavigationContent";
const Gk = ae(
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
), Kk = k.forwardRef(
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
    const { isCollapsed: u, isInFooter: f } = cr(), p = r ? to : "button", h = i ? "disabled" : t, x = /* @__PURE__ */ c.jsx(
      p,
      {
        ref: d,
        className: A(
          Gk({
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
    return u && a ? /* @__PURE__ */ c.jsx(St, { content: a, side: "right", delayDuration: 0, children: x }) : x;
  }
);
Kk.displayName = "SideNavigationItem";
const Uk = ae("flex flex-col", {
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
}), qk = k.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = cr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: A(
        Uk({ isCollapsed: s, isLast: r }),
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
qk.displayName = "SideNavigationSection";
const Xk = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Zk = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", TN = () => {
  const { isCollapsed: e } = cr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Xk,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Zk,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, Qk = ae(
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
), Jk = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), $N = ({
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
        Qk({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: Jk({ indicator: s }) }),
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
}, eN = k.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...a
  }, s) => {
    const i = k.useMemo(() => n !== void 0 ? t.map((l, d) => ({
      ...l,
      status: d < n ? "completed" : d === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ c.jsx(
      Om,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: A("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(k.Fragment, { children: [
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
                    nc,
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
), Om = k.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
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
Om.displayName = "RadialStepper";
eN.displayName = "Stepper";
const tN = m.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    Wb,
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
        Vb,
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
tN.displayName = "Switch";
const za = {
  loading: !1,
  loadingText: "ローディング中…"
}, _m = k.createContext(
  za
), Im = () => k.useContext(_m), nN = k.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = za.loading,
    loadingText: r = za.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(_m.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
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
nN.displayName = "Table";
const rN = k.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Im(), s = t ?? a;
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
            _o.Linear,
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
rN.displayName = "TableHeader";
const Tm = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ c.jsx(
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
Tm.displayName = "TableCoverMessage";
const oN = k.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Im(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx(Tm, { className: "text-body-secondary", children: d }) : r });
  }
);
oN.displayName = "TableBody";
const aN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
aN.displayName = "TableFooter";
const sN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
sN.displayName = "TableRow";
const iN = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
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
iN.displayName = "TableHead";
const cN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
cN.displayName = "TableCell";
const lN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
lN.displayName = "TableCaption";
const FN = k.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), dN = k.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
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
dN.displayName = "TableRowOverlay";
const uN = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), fN = ae(
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
), mN = ae(
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
function pN() {
  const [e, t] = k.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return k.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function hN(e) {
  const t = [];
  return k.Children.forEach(e, (n) => {
    k.isValidElement(n) && n.type === $m && t.push(n);
  }), t;
}
const vN = k.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, a) => {
  const s = t ?? "normal", i = pN(), l = k.useRef(null), d = k.useRef(null), u = k.useRef(/* @__PURE__ */ new Map()), f = k.useRef(/* @__PURE__ */ new Map()), p = k.useMemo(() => hN(n), [n]), [h, x] = k.useState(p.length), [v, g] = k.useState(!1), w = k.useCallback(() => {
    if (!i) {
      x(p.length), g(!0);
      return;
    }
    const S = l.current;
    if (!S) return;
    u.current.forEach((O, z) => {
      const W = O.offsetWidth;
      W > 0 && f.current.set(z, W);
    });
    const M = S.clientWidth, _ = d.current, T = _ ? _.offsetWidth + 8 : 80;
    let F = 0;
    for (const O of p)
      F += f.current.get(O.props.value) ?? 0;
    if (F <= M) {
      x(p.length), g(!0);
      return;
    }
    let L = 0, H = 0;
    for (const O of p) {
      const z = f.current.get(O.props.value) ?? 0;
      if (L + z + T <= M)
        L += z, H++;
      else
        break;
    }
    x(Math.max(H, 1)), g(!0);
  }, [p, i]);
  k.useEffect(() => {
    const S = l.current;
    if (!S) return;
    const M = new ResizeObserver(() => {
      w();
    });
    return M.observe(S), w(), () => M.disconnect();
  }, [w]);
  const b = p.slice(h), y = b.length > 0, N = o.value ?? o.defaultValue, C = b.some(
    (S) => S.props.value === N
  ), P = r ?? ((S) => `${S} more`);
  return /* @__PURE__ */ c.jsx(Yb, { ref: a, className: A("w-full", e), ...o, children: /* @__PURE__ */ c.jsxs(
    Gb,
    {
      ref: l,
      className: A(
        uN({ size: s }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        p.map(
          (S, M) => k.cloneElement(S, {
            key: S.props.value,
            size: s,
            ref: (_) => {
              _ ? u.current.set(S.props.value, _) : u.current.delete(S.props.value);
            },
            className: A(
              S.props.className,
              v && M >= h && "hidden"
            )
          })
        ),
        y && v && /* @__PURE__ */ c.jsx("div", { ref: d, className: "inline-flex shrink-0", children: /* @__PURE__ */ c.jsxs(Ts, { children: [
          /* @__PURE__ */ c.jsx($s, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              className: A(
                mN({ size: s }),
                C && "font-bold text-interactive-primary-default"
              ),
              children: [
                /* @__PURE__ */ c.jsx(
                  sp,
                  {
                    size: s === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                P(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ c.jsx(Is, { align: "end", size: "sm", children: b.map((S) => {
            const { value: M, disabled: _, asChild: T, children: F } = S.props, L = A(
              M === N && "font-bold text-interactive-primary-default"
            );
            return T && k.isValidElement(F) ? /* @__PURE__ */ c.jsx(
              Ta,
              {
                disabled: _ ?? !1,
                asChild: !0,
                className: L,
                children: F
              },
              M
            ) : /* @__PURE__ */ c.jsx(
              Ta,
              {
                disabled: _ ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(M);
                },
                className: L,
                children: F
              },
              M
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
vN.displayName = "TabBar";
const $m = k.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ c.jsx(
    Kb,
    {
      ref: r,
      className: A(fN({ size: o }), e),
      ...n
    }
  );
});
$m.displayName = "Tab";
const gN = ae(
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
), xN = k.forwardRef(
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
    Ht(() => {
      x(o.value);
    }, [o.value]);
    const { compositionHandlers: v, guardKeyHandler: g } = $o(), w = (N) => {
      v.onCompositionStart(N), l == null || l(N);
    }, b = (N) => {
      v.onCompositionEnd(N), d == null || d(N);
    }, y = (N) => {
      if (n && N.target.value.length > n) {
        N.preventDefault();
        return;
      }
      x(N.target.value), u && u(N);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          ref: a,
          className: A(gN({ invalid: e }), t),
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
xN.displayName = "TextArea";
const LN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  my,
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
            ic,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Ks,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Ks,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Or, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            py,
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
          /* @__PURE__ */ c.jsx(hy, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(vy, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(pa, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), WN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(uy, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    fy,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), ec = ae(
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
), bN = k.forwardRef(
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
    ...N
  }, C) => {
    const [P, S] = We(!1), M = Ct(null), _ = he(
      (E) => {
        E.preventDefault(), E.stopPropagation(), P || S(!0);
      },
      [P]
    ), T = he((E) => {
      E.preventDefault(), E.stopPropagation(), S(!1);
    }, []), F = he((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), L = he(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), S(!1), s) return;
        const I = E.dataTransfer.files;
        I && I.length > 0 && (r == null || r(I));
      },
      [s, r]
    ), H = he(() => {
      var E;
      s || (E = M.current) == null || E.click();
    }, [s]), O = he(
      (E) => {
        const I = E.target.files;
        I && I.length > 0 && (r == null || r(I));
      },
      [r]
    ), z = P ? "dragging" : n, W = () => /* @__PURE__ */ c.jsx(
      op,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), q = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: h }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Re,
        {
          size: "xs",
          intent: "tertiary",
          icon: Us,
          onClick: (E) => {
            E.stopPropagation(), H();
          },
          children: v
        }
      )
    ] }), j = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      W(),
      /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        g,
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Re,
        {
          size: "xs",
          intent: "tertiary",
          className: "self-center",
          icon: Us,
          onClick: (E) => {
            E.stopPropagation(), H();
          },
          children: v
        }
      )
    ] }), $ = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: A(ec({ size: t, state: "default", disabled: s })),
        onDragEnter: _,
        onDragLeave: T,
        onDragOver: F,
        onDrop: L,
        onClick: H,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              ref: M,
              type: "file",
              className: "sr-only",
              accept: o,
              multiple: a,
              onChange: O,
              disabled: s
            }
          ),
          t === "small" ? q() : j()
        ]
      }
    ), ne = () => {
      const E = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return z === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
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
          _o.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : z === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || E }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (I) => {
                I.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(bp, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            np,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: f || b })
        ] })
      ] }) : z === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || E }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(Km, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: u || y })
        ] })
      ] }) : null;
    }, R = () => t === "small" ? q() : j();
    return z === "inProgress" && i !== void 0 || z === "success" || z === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: A(e), ...N, children: [
      $(),
      ne()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: A(
          ec({ size: t, state: z, disabled: s }),
          e
        ),
        onDragEnter: _,
        onDragLeave: T,
        onDragOver: F,
        onDrop: L,
        onClick: H,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        ...N,
        children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              ref: M,
              type: "file",
              className: "sr-only",
              accept: o,
              multiple: a,
              onChange: O,
              disabled: s
            }
          ),
          R()
        ]
      }
    );
  }
);
bN.displayName = "FileUploader";
export {
  EN as Accordion,
  NN as AccountMenu,
  fm as AutoSuggest,
  Cw as Badge,
  Nw as Breadcrumbs,
  Re as Button,
  Uf as Calendar,
  mS as Callout,
  $r as Checkbox,
  vS as CheckboxGroup,
  xS as ChoiceChip,
  bS as ChoiceChipGroup,
  PN as DataSheet,
  im as DataSheetAction,
  Xf as DataSheetHeader,
  Qf as DataSheetKeyValue,
  Zf as DataSheetSection,
  nm as DataSheetTable,
  sm as DataSheetTableActionsCell,
  om as DataSheetTableBody,
  Qr as DataSheetTableCell,
  rm as DataSheetTableHeader,
  am as DataSheetTableRow,
  IS as DatePicker,
  RN as Dialog,
  Ts as Dropdown,
  Is as DropdownContent,
  Ta as DropdownItem,
  ww as DropdownLabel,
  yw as DropdownSeparator,
  $s as DropdownTrigger,
  bN as FileUploader,
  zk as FooterProvider,
  DN as FormField,
  TN as Logo,
  yk as MultiSelect,
  AN as MultiStepDialog,
  Nk as Pagination,
  _o as ProgressIndicator,
  ON as RadioButton,
  _N as RadioButtonGroup,
  Fk as SearchBar,
  IN as SegmentedControl,
  Ba as Select,
  Yk as SideNavigation,
  Dm as SideNavigationCollapseButton,
  Kk as SideNavigationItem,
  Bk as SideNavigationProvider,
  qk as SideNavigationSection,
  $N as StatusIndicator,
  eN as Stepper,
  tN as Switch,
  $m as Tab,
  vN as TabBar,
  nN as Table,
  oN as TableBody,
  lN as TableCaption,
  cN as TableCell,
  Tm as TableCoverMessage,
  aN as TableFooter,
  iN as TableHead,
  FN as TableHeadSortButton,
  rN as TableHeader,
  sN as TableRow,
  dN as TableRowOverlay,
  La as Tag,
  mm as TagInput,
  xN as TextArea,
  jN as TextField,
  Fa as TextLink,
  LN as ToastItem,
  WN as ToastProvider,
  St as Tooltip,
  MN as TooltipProvider,
  GS as colorCodeToTokenMap,
  Fn as iconVariants,
  jS as inputVariants,
  cm as inputWrapperVariants,
  cr as useSideNavigation
};
