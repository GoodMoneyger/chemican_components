import * as u from "react";
import S, { forwardRef as Em, createElement as To, useState as Te, useLayoutEffect as Li, createContext as Xr, useContext as $r, useCallback as ve, useRef as Nt, useEffect as Lt, useMemo as Rr } from "react";
import * as Un from "react-dom";
import Mm from "react-dom";
var pr = { exports: {} }, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function Pm() {
  if (As) return Dn;
  As = 1;
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
  return Dn.Fragment = t, Dn.jsx = n, Dn.jsxs = n, Dn;
}
var _n = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function Rm() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case M:
          return "Suspense";
        case N:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case v:
            return "Portal";
          case k:
            return R.displayName || "Context";
          case y:
            return (R._context.displayName || "Context") + ".Consumer";
          case C:
            var E = R.render;
            return R = R.displayName, R || (R = E.displayName || E.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case P:
            return E = R.displayName || null, E !== null ? E : e(R.type) || "Memo";
          case T:
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
        var A = E.error, j = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return A.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === T)
        return "<...>";
      try {
        var E = e(R);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = Y.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (Q.call(R, "key")) {
        var E = Object.getOwnPropertyDescriptor(R, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, E) {
      function A() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: A,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return U[R] || (U[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, E, A, j, G, W) {
      var O = A.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: E,
        props: A,
        _owner: j
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(R, "ref", {
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
        value: W
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, E, A, j, G, W) {
      var O = E.children;
      if (O !== void 0)
        if (j)
          if (I(O)) {
            for (j = 0; j < O.length; j++)
              m(O[j]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(O);
      if (Q.call(E, "key")) {
        O = e(R);
        var X = Object.keys(E).filter(function(re) {
          return re !== "key";
        });
        j = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", K[O + j] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          O,
          X,
          O
        ), K[O + j] = !0);
      }
      if (O = null, A !== void 0 && (n(A), O = "" + A), s(E) && (n(E.key), O = "" + E.key), "key" in E) {
        A = {};
        for (var J in E)
          J !== "key" && (A[J] = E[J]);
      } else A = E;
      return O && i(
        A,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        O,
        A,
        o(),
        G,
        W
      );
    }
    function m(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === T && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = S, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), Y = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, I = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var V, U = {}, D = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), $ = H(r(a)), K = {};
    _n.Fragment = g, _n.jsx = function(R, E, A) {
      var j = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        R,
        E,
        A,
        !1,
        j ? Error("react-stack-top-frame") : D,
        j ? H(r(R)) : $
      );
    }, _n.jsxs = function(R, E, A) {
      var j = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return f(
        R,
        E,
        A,
        !0,
        j ? Error("react-stack-top-frame") : D,
        j ? H(r(R)) : $
      );
    };
  })()), _n;
}
var _s;
function Am() {
  return _s || (_s = 1, process.env.NODE_ENV === "production" ? pr.exports = Pm() : pr.exports = Rm()), pr.exports;
}
var c = Am();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dm = {
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
const ye = (e, t, n, r) => {
  const o = Em(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: f, ...m }, p) => To(
      "svg",
      {
        ref: p,
        ...Dm[e],
        width: s,
        height: s,
        className: ["tabler-icon", `tabler-icon-${t}`, d].join(" "),
        ...e === "filled" ? {
          fill: a
        } : {
          strokeWidth: i,
          stroke: a
        },
        ...m
      },
      [
        l && To("title", { key: "svg-title" }, l),
        ...r.map(([h, x]) => To(h, x)),
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
const _m = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Om = ye("outline", "alert-circle", "AlertCircle", _m);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jm = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], Im = ye("outline", "calendar-event", "CalendarEvent", jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Vi = ye("outline", "check", "Check", Tm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Zr = ye("outline", "chevron-down", "ChevronDown", $m);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [["path", { d: "M7 6v12", key: "svg-0" }], ["path", { d: "M18 6l-6 6l6 6", key: "svg-1" }]], Wm = ye("outline", "chevron-left-pipe", "ChevronLeftPipe", Fm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lm = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Vm = ye("outline", "chevron-left", "ChevronLeft", Lm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = [["path", { d: "M6 6l6 6l-6 6", key: "svg-0" }], ["path", { d: "M17 5v13", key: "svg-1" }]], zm = ye("outline", "chevron-right-pipe", "ChevronRightPipe", Bm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Bi = ye("outline", "chevron-right", "ChevronRight", Hm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], Gm = ye("outline", "circle-check", "CircleCheck", Ym);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Um = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Km = ye("outline", "cloud-up", "CloudUp", Um);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], Xm = ye("outline", "loader", "Loader", qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["path", { d: "M5 12l14 0", key: "svg-0" }]], Qm = ye("outline", "minus", "Minus", Zm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], zi = ye("outline", "pencil", "Pencil", Jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Hi = ye("outline", "restore", "Restore", ep);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Yi = ye("outline", "search", "Search", tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], rp = ye("outline", "trash-x", "TrashX", np);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], Gi = ye("outline", "trash", "Trash", op);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], sp = ye("outline", "user", "User", ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], aa = ye("outline", "x", "X", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], lp = ye("filled", "alert-circle-filled", "AlertCircleFilled", cp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], Ui = ye("filled", "circle-check-filled", "CircleCheckFilled", dp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Os = ye("filled", "exclamation-circle-filled", "ExclamationCircleFilled", up);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], js = ye("filled", "folder-filled", "FolderFilled", fp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Ar = ye("filled", "info-circle-filled", "InfoCircleFilled", mp);
function Is(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function bt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Is(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Is(e[o], null);
        }
      };
  };
}
function se(...e) {
  return u.useCallback(bt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ pp(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), l = i.find(vp);
    if (l) {
      const d = l.props.children, f = i.map((m) => m === l ? u.Children.count(d) > 1 ? u.Children.only(null) : u.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: u.isValidElement(d) ? u.cloneElement(d, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Qr = /* @__PURE__ */ Mt("Slot");
// @__NO_SIDE_EFFECTS__
function pp(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = xp(o), i = gp(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? bt(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ki = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function hp(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Ki, t;
}
function vp(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ki;
}
function gp(e, t) {
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
function xp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bp = [
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
], Z = bp.reduce((e, t) => {
  const n = /* @__PURE__ */ Mt(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Oa(e, t) {
  e && Un.flushSync(() => e.dispatchEvent(t));
}
var qi = Object.freeze({
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
}), yp = "VisuallyHidden", Jr = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...qi, ...e.style }
    }
  )
);
Jr.displayName = yp;
var wp = Jr;
function Cp(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: s, ...i } = a, l = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ c.jsx(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = u.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Re(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = u.createContext(s), l = n.length;
    n = [...n, s];
    const d = (m) => {
      var w;
      const { scope: p, children: h, ...x } = m, v = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || i, g = u.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(v.Provider, { value: g, children: h });
    };
    d.displayName = a + "Provider";
    function f(m, p) {
      var v;
      const h = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || i, x = u.useContext(h);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [d, f];
  }
  const o = () => {
    const a = n.map((s) => u.createContext(s));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, Sp(o, ...t)];
}
function Sp(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: l, scopeName: d }) => {
        const m = l(a)[`__scope${d}`];
        return { ...i, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Kn(e) {
  const t = e + "CollectionProvider", [n, r] = Re(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, b = S.useRef(null), y = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Mt(i), d = S.forwardRef(
    (v, g) => {
      const { scope: w, children: b } = v, y = a(i, w), k = se(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: k, children: b });
    }
  );
  d.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", p = /* @__PURE__ */ Mt(f), h = S.forwardRef(
    (v, g) => {
      const { scope: w, children: b, ...y } = v, k = S.useRef(null), C = se(g, k), M = a(f, w);
      return S.useEffect(() => (M.itemMap.set(k, { ref: k, ...y }), () => void M.itemMap.delete(k))), /* @__PURE__ */ c.jsx(p, { [m]: "", ref: C, children: b });
    }
  );
  h.displayName = f;
  function x(v) {
    const g = a(e + "CollectionConsumer", v);
    return S.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, N) => y.indexOf(M.ref.current) - y.indexOf(N.ref.current)
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
var Pe = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, kp = u[" useInsertionEffect ".trim().toString()] || Pe;
function $e({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Np({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = f.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const d = u.useCallback(
    (f) => {
      var m;
      if (i) {
        const p = Ep(f) ? f(e) : f;
        p !== e && ((m = s.current) == null || m.call(s, p));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function Np({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return kp(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Ep(e) {
  return typeof e == "function";
}
function Mp(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var _e = (e) => {
  const { present: t, children: n } = e, r = Pp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = se(r.ref, Rp(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
_e.displayName = "Presence";
function Pp(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Mp(s, {
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
  return u.useEffect(() => {
    const d = hr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Pe(() => {
    const d = r.current, f = o.current;
    if (f !== e) {
      const p = a.current, h = hr(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(f && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Pe(() => {
    if (t) {
      let d;
      const f = t.ownerDocument.defaultView ?? window, m = (h) => {
        const v = hr(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = hr(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(d), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Rp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ap = u[" useId ".trim().toString()] || (() => {
}), Dp = 0;
function Se(e) {
  const [t, n] = u.useState(Ap());
  return Pe(() => {
    n((r) => r ?? String(Dp++));
  }, [e]), t ? `radix-${t}` : "";
}
var eo = "Collapsible", [_p, Xi] = Re(eo), [Op, ja] = _p(eo), Zi = u.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [l, d] = $e({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: eo
    });
    return /* @__PURE__ */ c.jsx(
      Op,
      {
        scope: n,
        disabled: a,
        contentId: Se(),
        open: l,
        onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            "data-state": Ta(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Zi.displayName = eo;
var Qi = "CollapsibleTrigger", Ji = u.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = ja(Qi, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ta(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ji.displayName = Qi;
var Ia = "CollapsibleContent", ec = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ja(Ia, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(_e, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(jp, { ...r, ref: t, present: a }) });
  }
);
ec.displayName = Ia;
var jp = u.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = ja(Ia, n), [i, l] = u.useState(r), d = u.useRef(null), f = se(t, d), m = u.useRef(0), p = m.current, h = u.useRef(0), x = h.current, v = s.open || i, g = u.useRef(v), w = u.useRef(void 0);
  return u.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Pe(() => {
    const b = d.current;
    if (b) {
      w.current = w.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const y = b.getBoundingClientRect();
      m.current = y.height, h.current = y.width, g.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-state": Ta(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !v,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Ta(e) {
  return e ? "open" : "closed";
}
var Ip = Zi, Tp = Ji, $p = ec, Fp = u.createContext(void 0);
function hn(e) {
  const t = u.useContext(Fp);
  return e || t || "ltr";
}
var tt = "Accordion", Wp = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [$a, Lp, Vp] = Kn(tt), [to] = Re(tt, [
  Vp,
  Xi
]), Fa = Xi(), tc = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx($a.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Yp, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Hp, { ...o, ref: t }) });
  }
);
tc.displayName = tt;
var [nc, Bp] = to(tt), [rc, zp] = to(
  tt,
  { collapsible: !1 }
), Hp = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, l] = $e({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: tt
    });
    return /* @__PURE__ */ c.jsx(
      nc,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(rc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(oc, { ...s, ref: t }) })
      }
    );
  }
), Yp = S.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = $e({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: tt
  }), l = S.useCallback(
    (f) => i((m = []) => [...m, f]),
    [i]
  ), d = S.useCallback(
    (f) => i((m = []) => m.filter((p) => p !== f)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    nc,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(rc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(oc, { ...a, ref: t }) })
    }
  );
}), [Gp, no] = to(tt), oc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = se(i, t), d = Lp(n), m = hn(o) === "ltr", p = z(e.onKeyDown, (h) => {
      var P;
      if (!Wp.includes(h.key)) return;
      const x = h.target, v = d().filter((T) => {
        var B;
        return !((B = T.ref.current) != null && B.disabled);
      }), g = v.findIndex((T) => T.ref.current === x), w = v.length;
      if (g === -1) return;
      h.preventDefault();
      let b = g;
      const y = 0, k = w - 1, C = () => {
        b = g + 1, b > k && (b = y);
      }, M = () => {
        b = g - 1, b < y && (b = k);
      };
      switch (h.key) {
        case "Home":
          b = y;
          break;
        case "End":
          b = k;
          break;
        case "ArrowRight":
          a === "horizontal" && (m ? C() : M());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (m ? M() : C());
          break;
        case "ArrowUp":
          a === "vertical" && M();
          break;
      }
      const N = b % w;
      (P = v[N].ref.current) == null || P.focus();
    });
    return /* @__PURE__ */ c.jsx(
      Gp,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx($a.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
), Fr = "AccordionItem", [Up, Wa] = to(Fr), ac = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = no(Fr, n), s = Bp(Fr, n), i = Fa(n), l = Se(), d = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      Up,
      {
        scope: n,
        open: d,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          Ip,
          {
            "data-orientation": a.orientation,
            "data-state": uc(d),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: d,
            onOpenChange: (m) => {
              m ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
ac.displayName = Fr;
var sc = "AccordionHeader", ic = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(sc, n);
    return /* @__PURE__ */ c.jsx(
      Z.h3,
      {
        "data-orientation": o.orientation,
        "data-state": uc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ic.displayName = sc;
var sa = "AccordionTrigger", cc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(sa, n), s = zp(sa, n), i = Fa(n);
    return /* @__PURE__ */ c.jsx($a.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Tp,
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
cc.displayName = sa;
var lc = "AccordionContent", dc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Wa(lc, n), s = Fa(n);
    return /* @__PURE__ */ c.jsx(
      $p,
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
dc.displayName = lc;
function uc(e) {
  return e ? "open" : "closed";
}
var Ts = tc, Kp = ac, qp = ic, Xp = cc, Zp = dc;
function Le(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Qp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Jp = "DismissableLayer", ia = "dismissableLayer.update", eh = "dismissableLayer.pointerDownOutside", th = "dismissableLayer.focusOutside", $s, fc = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ut = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = u.useContext(fc), [f, m] = u.useState(null), p = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = u.useState({}), x = se(t, (N) => m(N)), v = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), b = f ? v.indexOf(f) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, k = b >= w, C = rh((N) => {
      const P = N.target, T = [...d.branches].some((B) => B.contains(P));
      !k || T || (o == null || o(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p), M = oh((N) => {
      const P = N.target;
      [...d.branches].some((B) => B.contains(P)) || (a == null || a(N), s == null || s(N), N.defaultPrevented || i == null || i());
    }, p);
    return Qp((N) => {
      b === d.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
    }, p), u.useEffect(() => {
      if (f)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && ($s = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Fs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = $s);
        };
    }, [f, p, n, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Fs());
    }, [f, d]), u.useEffect(() => {
      const N = () => h({});
      return document.addEventListener(ia, N), () => document.removeEventListener(ia, N);
    }, []), /* @__PURE__ */ c.jsx(
      Z.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Ut.displayName = Jp;
var nh = "DismissableLayerBranch", mc = u.forwardRef((e, t) => {
  const n = u.useContext(fc), r = u.useRef(null), o = se(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Z.div, { ...e, ref: o });
});
mc.displayName = nh;
function rh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          pc(
            eh,
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
function oh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Le(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && pc(th, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Fs() {
  const e = new CustomEvent(ia);
  document.dispatchEvent(e);
}
function pc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Oa(o, a) : o.dispatchEvent(a);
}
var ah = Ut, sh = mc, $o = "focusScope.autoFocusOnMount", Fo = "focusScope.autoFocusOnUnmount", Ws = { bubbles: !1, cancelable: !0 }, ih = "FocusScope", qn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = u.useState(null), d = Le(o), f = Le(a), m = u.useRef(null), p = se(t, (v) => l(v)), h = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let v = function(y) {
        if (h.paused || !i) return;
        const k = y.target;
        i.contains(k) ? m.current = k : kt(m.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !i) return;
        const k = y.relatedTarget;
        k !== null && (i.contains(k) || kt(m.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && kt(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, h.paused]), u.useEffect(() => {
    if (i) {
      Vs.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const w = new CustomEvent($o, Ws);
        i.addEventListener($o, d), i.dispatchEvent(w), w.defaultPrevented || (ch(mh(hc(i)), { select: !0 }), document.activeElement === v && kt(i));
      }
      return () => {
        i.removeEventListener($o, d), setTimeout(() => {
          const w = new CustomEvent(Fo, Ws);
          i.addEventListener(Fo, f), i.dispatchEvent(w), w.defaultPrevented || kt(v ?? document.body, { select: !0 }), i.removeEventListener(Fo, f), Vs.remove(h);
        }, 0);
      };
    }
  }, [i, d, f, h]);
  const x = u.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const b = v.currentTarget, [y, k] = lh(b);
        y && k ? !v.shiftKey && w === k ? (v.preventDefault(), n && kt(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && kt(k, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(Z.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
qn.displayName = ih;
function ch(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (kt(r, { select: t }), document.activeElement !== n) return;
}
function lh(e) {
  const t = hc(e), n = Ls(t, e), r = Ls(t.reverse(), e);
  return [n, r];
}
function hc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ls(e, t) {
  for (const n of e)
    if (!dh(n, { upTo: t })) return n;
}
function dh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function uh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uh(e) && t && e.select();
  }
}
var Vs = fh();
function fh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Bs(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Bs(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Bs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function mh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ph = "Portal", Kt = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  Pe(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Mm.createPortal(/* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t }), s) : null;
});
Kt.displayName = ph;
var Wo = 0;
function ro() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? zs()), document.body.insertAdjacentElement("beforeend", e[1] ?? zs()), Wo++, () => {
      Wo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Wo--;
    };
  }, []);
}
function zs() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var st = function() {
  return st = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, st.apply(this, arguments);
};
function vc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function hh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Dr = "right-scroll-bar-position", _r = "width-before-scroll-bar", vh = "with-scroll-bars-hidden", gh = "--removed-body-scroll-bar-size";
function Lo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function xh(e, t) {
  var n = Te(function() {
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
var bh = typeof window < "u" ? u.useLayoutEffect : u.useEffect, Hs = /* @__PURE__ */ new WeakMap();
function yh(e, t) {
  var n = xh(null, function(r) {
    return e.forEach(function(o) {
      return Lo(o, r);
    });
  });
  return bh(function() {
    var r = Hs.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Lo(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Lo(i, s);
      });
    }
    Hs.set(n, e);
  }, [e]), n;
}
function wh(e) {
  return e;
}
function Ch(e, t) {
  t === void 0 && (t = wh);
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
        var f = s;
        s = [], f.forEach(a);
      }, d = function() {
        return Promise.resolve().then(l);
      };
      d(), n = {
        push: function(f) {
          s.push(f), d();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function Sh(e) {
  e === void 0 && (e = {});
  var t = Ch(null);
  return t.options = st({ async: !0, ssr: !1 }, e), t;
}
var gc = function(e) {
  var t = e.sideCar, n = vc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, st({}, n));
};
gc.isSideCarExport = !0;
function kh(e, t) {
  return e.useMedium(t), gc;
}
var xc = Sh(), Vo = function() {
}, oo = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Vo,
    onWheelCapture: Vo,
    onTouchMoveCapture: Vo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, f = e.enabled, m = e.shards, p = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, k = vc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, M = yh([n, t]), N = st(st({}, k), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: xc, removeScrollBar: d, shards: m, noRelative: h, noIsolation: x, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? u.cloneElement(u.Children.only(i), st(st({}, N), { ref: M })) : u.createElement(b, st({}, N, { className: l, ref: M }), i)
  );
});
oo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
oo.classNames = {
  fullWidth: _r,
  zeroRight: Dr
};
var Nh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Eh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Nh();
  return t && e.setAttribute("nonce", t), e;
}
function Mh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ph(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Rh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Eh()) && (Mh(t, n), Ph(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ah = function() {
  var e = Rh();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, bc = function() {
  var e = Ah(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Dh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bo = function(e) {
  return parseInt(e || "", 10) || 0;
}, _h = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bo(n), Bo(r), Bo(o)];
}, Oh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Dh;
  var t = _h(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, jh = bc(), cn = "data-scroll-locked", Ih = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(vh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(cn, `] {
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
  
  .`).concat(Dr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(_r, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Dr, " .").concat(Dr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_r, " .").concat(_r, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(cn, `] {
    `).concat(gh, ": ").concat(i, `px;
  }
`);
}, Ys = function() {
  var e = parseInt(document.body.getAttribute(cn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Th = function() {
  u.useEffect(function() {
    return document.body.setAttribute(cn, (Ys() + 1).toString()), function() {
      var e = Ys() - 1;
      e <= 0 ? document.body.removeAttribute(cn) : document.body.setAttribute(cn, e.toString());
    };
  }, []);
}, $h = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Th();
  var a = u.useMemo(function() {
    return Oh(o);
  }, [o]);
  return u.createElement(jh, { styles: Ih(a, !t, o, n ? "" : "!important") });
}, ca = !1;
if (typeof window < "u")
  try {
    var vr = Object.defineProperty({}, "passive", {
      get: function() {
        return ca = !0, !0;
      }
    });
    window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
  } catch {
    ca = !1;
  }
var en = ca ? { passive: !1 } : !1, Fh = function(e) {
  return e.tagName === "TEXTAREA";
}, yc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Fh(e) && n[t] === "visible")
  );
}, Wh = function(e) {
  return yc(e, "overflowY");
}, Lh = function(e) {
  return yc(e, "overflowX");
}, Gs = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = wc(e, r);
    if (o) {
      var a = Cc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Vh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Bh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, wc = function(e, t) {
  return e === "v" ? Wh(t) : Lh(t);
}, Cc = function(e, t) {
  return e === "v" ? Vh(t) : Bh(t);
}, zh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Hh = function(e, t, n, r, o) {
  var a = zh(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, f = s > 0, m = 0, p = 0;
  do {
    if (!i)
      break;
    var h = Cc(e, i), x = h[0], v = h[1], g = h[2], w = v - g - a * x;
    (x || w) && wc(e, i) && (m += w, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(p) < 1) && (d = !0), d;
}, gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Us = function(e) {
  return [e.deltaX, e.deltaY];
}, Ks = function(e) {
  return e && "current" in e ? e.current : e;
}, Yh = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Gh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Uh = 0, tn = [];
function Kh(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Uh++)[0], a = u.useState(bc)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = hh([e.lockRef.current], (e.shards || []).map(Ks), !0).filter(Boolean);
      return v.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(v, g) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = gr(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - w[0], k = "deltaY" in v ? v.deltaY : b[1] - w[1], C, M = v.target, N = Math.abs(y) > Math.abs(k) ? "h" : "v";
    if ("touches" in v && N === "h" && M.type === "range")
      return !1;
    var P = Gs(N, M);
    if (!P)
      return !0;
    if (P ? C = N : (C = N === "v" ? "h" : "v", P = Gs(N, M)), !P)
      return !1;
    if (!r.current && "changedTouches" in v && (y || k) && (r.current = C), !C)
      return !0;
    var T = r.current || C;
    return Hh(T, g, v, T === "h" ? y : k);
  }, []), l = u.useCallback(function(v) {
    var g = v;
    if (!(!tn.length || tn[tn.length - 1] !== a)) {
      var w = "deltaY" in g ? Us(g) : gr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Yh(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(Ks).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = u.useCallback(function(v, g, w, b) {
    var y = { name: v, delta: g, target: w, should: b, shadowParent: qh(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== y;
      });
    }, 1);
  }, []), f = u.useCallback(function(v) {
    n.current = gr(v), r.current = void 0;
  }, []), m = u.useCallback(function(v) {
    d(v.type, Us(v), v.target, i(v, e.lockRef.current));
  }, []), p = u.useCallback(function(v) {
    d(v.type, gr(v), v.target, i(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return tn.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, en), document.addEventListener("touchmove", l, en), document.addEventListener("touchstart", f, en), function() {
      tn = tn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, en), document.removeEventListener("touchmove", l, en), document.removeEventListener("touchstart", f, en);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    x ? u.createElement(a, { styles: Gh(o) }) : null,
    h ? u.createElement($h, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function qh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Xh = kh(xc, Kh);
var Xn = u.forwardRef(function(e, t) {
  return u.createElement(oo, st({}, e, { ref: t, sideCar: Xh }));
});
Xn.classNames = oo.classNames;
var Zh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {}, zo = 0, Sc = function(e) {
  return e && (e.host || Sc(e.parentNode));
}, Qh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Sc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Jh = function(e, t, n, r) {
  var o = Qh(t, Array.isArray(e) ? e : [e]);
  br[n] || (br[n] = /* @__PURE__ */ new WeakMap());
  var a = br[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(m) {
    !m || i.has(m) || (i.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var f = function(m) {
    !m || l.has(m) || Array.prototype.forEach.call(m.children, function(p) {
      if (i.has(p))
        f(p);
      else
        try {
          var h = p.getAttribute(r), x = h !== null && h !== "false", v = (nn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          nn.set(p, v), a.set(p, g), s.push(p), v === 1 && x && xr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return f(t), i.clear(), zo++, function() {
    s.forEach(function(m) {
      var p = nn.get(m) - 1, h = a.get(m) - 1;
      nn.set(m, p), a.set(m, h), p || (xr.has(m) || m.removeAttribute(r), xr.delete(m)), h || m.removeAttribute(n);
    }), zo--, zo || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {});
  };
}, ao = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Zh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Jh(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, so = "Dialog", [kc] = Re(so), [ev, nt] = kc(so), Nc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), l = u.useRef(null), [d, f] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: so
  });
  return /* @__PURE__ */ c.jsx(
    ev,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Se(),
      titleId: Se(),
      descriptionId: Se(),
      open: d,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
Nc.displayName = so;
var Ec = "DialogTrigger", tv = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Ec, n), a = se(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ba(o.open),
        ...r,
        ref: a,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
tv.displayName = Ec;
var La = "DialogPortal", [nv, Mc] = kc(La, {
  forceMount: void 0
}), Pc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = nt(La, t);
  return /* @__PURE__ */ c.jsx(nv, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: s }) })) });
};
Pc.displayName = La;
var Wr = "DialogOverlay", Rc = u.forwardRef(
  (e, t) => {
    const n = Mc(Wr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Wr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(ov, { ...o, ref: t }) }) : null;
  }
);
Rc.displayName = Wr;
var rv = /* @__PURE__ */ Mt("DialogOverlay.RemoveScroll"), ov = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Wr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Xn, { as: rv, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          "data-state": Ba(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Bt = "DialogContent", Ac = u.forwardRef(
  (e, t) => {
    const n = Mc(Bt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Bt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(av, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(sv, { ...o, ref: t }) });
  }
);
Ac.displayName = Bt;
var av = u.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = u.useRef(null), o = se(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ c.jsx(
      Dc,
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
), sv = u.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Dc,
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
), Dc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = nt(Bt, n), l = u.useRef(null), d = se(t, l);
    return ro(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        qn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            Ut,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Ba(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(cv, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(dv, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Va = "DialogTitle", _c = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Va, n);
    return /* @__PURE__ */ c.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
_c.displayName = Va;
var Oc = "DialogDescription", iv = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Oc, n);
    return /* @__PURE__ */ c.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
iv.displayName = Oc;
var jc = "DialogClose", Ic = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(jc, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ic.displayName = jc;
function Ba(e) {
  return e ? "open" : "closed";
}
var Tc = "DialogTitleWarning", [tN, $c] = Cp(Tc, {
  contentName: Bt,
  titleName: Va,
  docsSlug: "dialog"
}), cv = ({ titleId: e }) => {
  const t = $c(Tc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, lv = "DialogDescriptionWarning", dv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${$c(lv).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, za = Nc, Ha = Pc, Ya = Rc, Ga = Ac, Fc = _c, uv = Ic;
function io(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function co(e) {
  const [t, n] = u.useState(void 0);
  return Pe(() => {
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
var lo = "Checkbox", [fv] = Re(lo), [mv, Ua] = fv(lo);
function pv(e) {
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
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: m
  } = e, [p, h] = $e({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: lo
  }), [x, v] = u.useState(null), [g, w] = u.useState(null), b = u.useRef(!1), y = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: p,
    disabled: a,
    setChecked: h,
    control: x,
    setControl: v,
    name: i,
    form: s,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: Et(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    mv,
    {
      scope: t,
      ...k,
      children: hv(m) ? m(k) : r
    }
  );
}
var Wc = "CheckboxTrigger", Lc = u.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: i,
      checked: l,
      required: d,
      setControl: f,
      setChecked: m,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: h,
      bubbleInput: x
    } = Ua(Wc, e), v = se(o, f), g = u.useRef(l);
    return u.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const b = () => m(g.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, m]), /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Et(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Gc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: z(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: z(n, (w) => {
          m((b) => Et(b) ? !0 : !b), x && h && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
Lc.displayName = Wc;
var Vc = u.forwardRef(
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
      form: f,
      ...m
    } = e;
    return /* @__PURE__ */ c.jsx(
      pv,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: d,
        name: r,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            Lc,
            {
              ...m,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            Yc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Vc.displayName = lo;
var Bc = "CheckboxIndicator", zc = u.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Ua(Bc, n);
    return /* @__PURE__ */ c.jsx(
      _e,
      {
        present: r || Et(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            "data-state": Gc(a.checked),
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
zc.displayName = Bc;
var Hc = "CheckboxBubbleInput", Yc = u.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: l,
      name: d,
      value: f,
      form: m,
      bubbleInput: p,
      setBubbleInput: h
    } = Ua(Hc, e), x = se(n, h), v = io(a), g = co(r);
    u.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, M = !o.current;
      if (v !== a && C) {
        const N = new Event("click", { bubbles: M });
        b.indeterminate = Et(a), C.call(b, Et(a) ? !1 : a), b.dispatchEvent(N);
      }
    }, [p, v, a, o]);
    const w = u.useRef(Et(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? w.current,
        required: i,
        disabled: l,
        name: d,
        value: f,
        form: m,
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
Yc.displayName = Hc;
function hv(e) {
  return typeof e == "function";
}
function Et(e) {
  return e === "indeterminate";
}
function Gc(e) {
  return Et(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const vv = ["top", "right", "bottom", "left"], Pt = Math.min, He = Math.max, Lr = Math.round, yr = Math.floor, ut = (e) => ({
  x: e,
  y: e
}), gv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xv = {
  start: "end",
  end: "start"
};
function la(e, t, n) {
  return He(e, Pt(t, n));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wt(e) {
  return e.split("-")[0];
}
function vn(e) {
  return e.split("-")[1];
}
function Ka(e) {
  return e === "x" ? "y" : "x";
}
function qa(e) {
  return e === "y" ? "height" : "width";
}
const bv = /* @__PURE__ */ new Set(["top", "bottom"]);
function lt(e) {
  return bv.has(wt(e)) ? "y" : "x";
}
function Xa(e) {
  return Ka(lt(e));
}
function yv(e, t, n) {
  n === void 0 && (n = !1);
  const r = vn(e), o = Xa(e), a = qa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Vr(s)), [s, Vr(s)];
}
function wv(e) {
  const t = Vr(e);
  return [da(e), t, da(t)];
}
function da(e) {
  return e.replace(/start|end/g, (t) => xv[t]);
}
const qs = ["left", "right"], Xs = ["right", "left"], Cv = ["top", "bottom"], Sv = ["bottom", "top"];
function kv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xs : qs : t ? qs : Xs;
    case "left":
    case "right":
      return t ? Cv : Sv;
    default:
      return [];
  }
}
function Nv(e, t, n, r) {
  const o = vn(e);
  let a = kv(wt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(da)))), a;
}
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gv[t]);
}
function Ev(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Uc(e) {
  return typeof e != "number" ? Ev(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Br(e) {
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
function Zs(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = lt(t), s = Xa(t), i = qa(s), l = wt(t), d = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (vn(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const Mv = async (e, t, n) => {
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
    x: f,
    y: m
  } = Zs(d, r, l), p = r, h = {}, x = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: g,
      fn: w
    } = i[v], {
      x: b,
      y,
      data: k,
      reset: C
    } = await w({
      x: f,
      y: m,
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
    f = b ?? f, m = y ?? m, h = {
      ...h,
      [g]: {
        ...h[g],
        ...k
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = Zs(d, p, l)), v = -1);
  }
  return {
    x: f,
    y: m,
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
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = yt(t, e), x = Uc(h), g = i[p ? m === "floating" ? "reference" : "floating" : m], w = Br(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: f,
    strategy: l
  })), b = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), k = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Br(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: y,
    strategy: l
  }) : b);
  return {
    top: (w.top - C.top + x.top) / k.y,
    bottom: (C.bottom - w.bottom + x.bottom) / k.y,
    left: (w.left - C.left + x.left) / k.x,
    right: (C.right - w.right + x.right) / k.x
  };
}
const Pv = (e) => ({
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
      padding: f = 0
    } = yt(e, t) || {};
    if (d == null)
      return {};
    const m = Uc(f), p = {
      x: n,
      y: r
    }, h = Xa(o), x = qa(h), v = await s.getDimensions(d), g = h === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[h] - p[h] - a.floating[x], C = p[h] - a.reference[h], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let N = M ? M[y] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(M))) && (N = i.floating[y] || a.floating[x]);
    const P = k / 2 - C / 2, T = N / 2 - v[x] / 2 - 1, B = Pt(m[w], T), F = Pt(m[b], T), Y = B, Q = N - v[x] - F, I = N / 2 - v[x] / 2 + P, H = la(Y, I, Q), V = !l.arrow && vn(o) != null && I !== H && a.reference[x] / 2 - (I < Y ? B : F) - v[x] / 2 < 0, U = V ? I < Y ? I - Y : I - Q : 0;
    return {
      [h]: p[h] + U,
      data: {
        [h]: H,
        centerOffset: I - H - U,
        ...V && {
          alignmentOffset: U
        }
      },
      reset: V
    };
  }
}), Rv = function(e) {
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
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: v = !0,
        ...g
      } = yt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = wt(o), b = lt(i), y = wt(i) === i, k = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !v ? [Vr(i)] : wv(i)), M = x !== "none";
      !p && M && C.push(...Nv(i, v, x, k));
      const N = [i, ...C], P = await Ln(t, g), T = [];
      let B = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && T.push(P[w]), m) {
        const I = yv(o, s, k);
        T.push(P[I[0]], P[I[1]]);
      }
      if (B = [...B, {
        placement: o,
        overflows: T
      }], !T.every((I) => I <= 0)) {
        var F, Y;
        const I = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, H = N[I];
        if (H && (!(m === "alignment" ? b !== lt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        B.every((D) => lt(D.placement) === b ? D.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: B
            },
            reset: {
              placement: H
            }
          };
        let V = (Y = B.filter((U) => U.overflows[0] <= 0).sort((U, D) => U.overflows[1] - D.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var Q;
              const U = (Q = B.filter((D) => {
                if (M) {
                  const $ = lt(D.placement);
                  return $ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter(($) => $ > 0).reduce(($, K) => $ + K, 0)]).sort((D, $) => D[1] - $[1])[0]) == null ? void 0 : Q[0];
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
function Qs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Js(e) {
  return vv.some((t) => e[t] >= 0);
}
const Av = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = yt(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ln(t, {
            ...o,
            elementContext: "reference"
          }), s = Qs(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Js(s)
            }
          };
        }
        case "escaped": {
          const a = await Ln(t, {
            ...o,
            altBoundary: !0
          }), s = Qs(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Js(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Kc = /* @__PURE__ */ new Set(["left", "top"]);
async function Dv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = wt(n), i = vn(n), l = lt(n) === "y", d = Kc.has(s) ? -1 : 1, f = a && l ? -1 : 1, m = yt(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: x
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return i && typeof x == "number" && (h = i === "end" ? x * -1 : x), l ? {
    x: h * f,
    y: p * d
  } : {
    x: p * d,
    y: h * f
  };
}
const _v = function(e) {
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
      } = t, l = await Dv(t, e);
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
}, Ov = function(e) {
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
      } = yt(e, t), d = {
        x: n,
        y: r
      }, f = await Ln(t, l), m = lt(wt(o)), p = Ka(m);
      let h = d[p], x = d[m];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = h + f[g], y = h - f[w];
        h = la(b, h, y);
      }
      if (s) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", b = x + f[g], y = x - f[w];
        x = la(b, x, y);
      }
      const v = i.fn({
        ...t,
        [p]: h,
        [m]: x
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [p]: a,
            [m]: s
          }
        }
      };
    }
  };
}, jv = function(e) {
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
      } = yt(e, t), f = {
        x: n,
        y: r
      }, m = lt(o), p = Ka(m);
      let h = f[p], x = f[m];
      const v = yt(i, t), g = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (l) {
        const y = p === "y" ? "height" : "width", k = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        h < k ? h = k : h > C && (h = C);
      }
      if (d) {
        var w, b;
        const y = p === "y" ? "width" : "height", k = Kc.has(wt(o)), C = a.reference[m] - a.floating[y] + (k && ((w = s.offset) == null ? void 0 : w[m]) || 0) + (k ? 0 : g.crossAxis), M = a.reference[m] + a.reference[y] + (k ? 0 : ((b = s.offset) == null ? void 0 : b[m]) || 0) - (k ? g.crossAxis : 0);
        x < C ? x = C : x > M && (x = M);
      }
      return {
        [p]: h,
        [m]: x
      };
    }
  };
}, Iv = function(e) {
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
      } = yt(e, t), f = await Ln(t, d), m = wt(o), p = vn(o), h = lt(o) === "y", {
        width: x,
        height: v
      } = a.floating;
      let g, w;
      m === "top" || m === "bottom" ? (g = m, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = m, g = p === "end" ? "top" : "bottom");
      const b = v - f.top - f.bottom, y = x - f.left - f.right, k = Pt(v - f[g], b), C = Pt(x - f[w], y), M = !t.middlewareData.shift;
      let N = k, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y), (r = t.middlewareData.shift) != null && r.enabled.y && (N = b), M && !p) {
        const B = He(f.left, 0), F = He(f.right, 0), Y = He(f.top, 0), Q = He(f.bottom, 0);
        h ? P = x - 2 * (B !== 0 || F !== 0 ? B + F : He(f.left, f.right)) : N = v - 2 * (Y !== 0 || Q !== 0 ? Y + Q : He(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: N
      });
      const T = await s.getDimensions(i.floating);
      return x !== T.width || v !== T.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function uo() {
  return typeof window < "u";
}
function gn(e) {
  return qc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (qc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function qc(e) {
  return uo() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function Je(e) {
  return uo() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function ft(e) {
  return uo() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function ei(e) {
  return !uo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
const Tv = /* @__PURE__ */ new Set(["inline", "contents"]);
function Zn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Tv.has(o);
}
const $v = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Fv(e) {
  return $v.has(gn(e));
}
const Wv = [":popover-open", ":modal"];
function fo(e) {
  return Wv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Lv = ["transform", "translate", "scale", "rotate", "perspective"], Vv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Bv = ["paint", "layout", "strict", "content"];
function Za(e) {
  const t = Qa(), n = Je(e) ? et(e) : e;
  return Lv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Vv.some((r) => (n.willChange || "").includes(r)) || Bv.some((r) => (n.contain || "").includes(r));
}
function zv(e) {
  let t = Rt(e);
  for (; ft(t) && !un(t); ) {
    if (Za(t))
      return t;
    if (fo(t))
      return null;
    t = Rt(t);
  }
  return null;
}
function Qa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Hv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function un(e) {
  return Hv.has(gn(e));
}
function et(e) {
  return Ye(e).getComputedStyle(e);
}
function mo(e) {
  return Je(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Rt(e) {
  if (gn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ei(e) && e.host || // Fallback.
    mt(e)
  );
  return ei(t) ? t.host : t;
}
function Xc(e) {
  const t = Rt(e);
  return un(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Zn(t) ? t : Xc(t);
}
function Vn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Xc(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ye(o);
  if (a) {
    const i = ua(s);
    return t.concat(s, s.visualViewport || [], Zn(o) ? o : [], i && n ? Vn(i) : []);
  }
  return t.concat(o, Vn(o, [], n));
}
function ua(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zc(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ft(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Lr(n) !== a || Lr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Ja(e) {
  return Je(e) ? e : e.contextElement;
}
function ln(e) {
  const t = Ja(e);
  if (!ft(t))
    return ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Zc(t);
  let s = (a ? Lr(n.width) : n.width) / r, i = (a ? Lr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Yv = /* @__PURE__ */ ut(0);
function Qc(e) {
  const t = Ye(e);
  return !Qa() || !t.visualViewport ? Yv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ja(e);
  let s = ut(1);
  t && (r ? Je(r) && (s = ln(r)) : s = ln(e));
  const i = Gv(a, n, r) ? Qc(a) : ut(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const p = Ye(a), h = r && Je(r) ? Ye(r) : r;
    let x = p, v = ua(x);
    for (; v && r && h !== x; ) {
      const g = ln(v), w = v.getBoundingClientRect(), b = et(v), y = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = w.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, f *= g.x, m *= g.y, l += y, d += k, x = Ye(v), v = ua(x);
    }
  }
  return Br({
    width: f,
    height: m,
    x: l,
    y: d
  });
}
function po(e, t) {
  const n = mo(e).scrollLeft;
  return t ? t.left + n : zt(mt(e)).left + n;
}
function Jc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - po(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Uv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = mt(r), i = t ? fo(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ut(1);
  const f = ut(0), m = ft(r);
  if ((m || !m && !a) && ((gn(r) !== "body" || Zn(s)) && (l = mo(r)), ft(r))) {
    const h = zt(r);
    d = ln(r), f.x = h.x + r.clientLeft, f.y = h.y + r.clientTop;
  }
  const p = s && !m && !a ? Jc(s, l) : ut(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + f.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + f.y + p.y
  };
}
function Kv(e) {
  return Array.from(e.getClientRects());
}
function qv(e) {
  const t = mt(e), n = mo(e), r = e.ownerDocument.body, o = He(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = He(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + po(e);
  const i = -n.scrollTop;
  return et(r).direction === "rtl" && (s += He(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const ti = 25;
function Xv(e, t) {
  const n = Ye(e), r = mt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = Qa();
    (!f || f && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = po(r);
  if (d <= 0) {
    const f = r.ownerDocument, m = f.body, p = getComputedStyle(m), h = f.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - h);
    x <= ti && (a -= x);
  } else d <= ti && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const Zv = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Qv(e, t) {
  const n = zt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ft(e) ? ln(e) : ut(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function ni(e, t, n) {
  let r;
  if (t === "viewport")
    r = Xv(e, n);
  else if (t === "document")
    r = qv(mt(e));
  else if (Je(t))
    r = Qv(t, n);
  else {
    const o = Qc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Br(r);
}
function el(e, t) {
  const n = Rt(e);
  return n === t || !Je(n) || un(n) ? !1 : et(n).position === "fixed" || el(n, t);
}
function Jv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vn(e, [], !1).filter((i) => Je(i) && gn(i) !== "body"), o = null;
  const a = et(e).position === "fixed";
  let s = a ? Rt(e) : e;
  for (; Je(s) && !un(s); ) {
    const i = et(s), l = Za(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && Zv.has(o.position) || Zn(s) && !l && el(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = Rt(s);
  }
  return t.set(e, r), r;
}
function eg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? fo(t) ? [] : Jv(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, f) => {
    const m = ni(t, f, o);
    return d.top = He(m.top, d.top), d.right = Pt(m.right, d.right), d.bottom = Pt(m.bottom, d.bottom), d.left = He(m.left, d.left), d;
  }, ni(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function tg(e) {
  const {
    width: t,
    height: n
  } = Zc(e);
  return {
    width: t,
    height: n
  };
}
function ng(e, t, n) {
  const r = ft(t), o = mt(t), a = n === "fixed", s = zt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ut(0);
  function d() {
    l.x = po(o);
  }
  if (r || !r && !a)
    if ((gn(t) !== "body" || Zn(o)) && (i = mo(t)), r) {
      const h = zt(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const f = o && !r && !a ? Jc(o, i) : ut(0), m = s.left + i.scrollLeft - l.x - f.x, p = s.top + i.scrollTop - l.y - f.y;
  return {
    x: m,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Ho(e) {
  return et(e).position === "static";
}
function ri(e, t) {
  if (!ft(e) || et(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function tl(e, t) {
  const n = Ye(e);
  if (fo(e))
    return n;
  if (!ft(e)) {
    let o = Rt(e);
    for (; o && !un(o); ) {
      if (Je(o) && !Ho(o))
        return o;
      o = Rt(o);
    }
    return n;
  }
  let r = ri(e, t);
  for (; r && Fv(r) && Ho(r); )
    r = ri(r, t);
  return r && un(r) && Ho(r) && !Za(r) ? n : r || zv(e) || n;
}
const rg = async function(e) {
  const t = this.getOffsetParent || tl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ng(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function og(e) {
  return et(e).direction === "rtl";
}
const ag = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uv,
  getDocumentElement: mt,
  getClippingRect: eg,
  getOffsetParent: tl,
  getElementRects: rg,
  getClientRects: Kv,
  getDimensions: tg,
  getScale: ln,
  isElement: Je,
  isRTL: og
};
function nl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sg(e, t) {
  let n = null, r;
  const o = mt(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const d = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: p,
      height: h
    } = d;
    if (i || t(), !p || !h)
      return;
    const x = yr(m), v = yr(o.clientWidth - (f + p)), g = yr(o.clientHeight - (m + h)), w = yr(f), y = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: He(0, Pt(1, l)) || 1
    };
    let k = !0;
    function C(M) {
      const N = M[0].intersectionRatio;
      if (N !== l) {
        if (!k)
          return s();
        N ? s(!1, N) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !nl(d, e.getBoundingClientRect()) && s(), k = !1;
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
function ig(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = Ja(e), f = o || a ? [...d ? Vn(d) : [], ...Vn(t)] : [];
  f.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const m = d && i ? sg(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let x, v = l ? zt(e) : null;
  l && g();
  function g() {
    const w = zt(e);
    v && !nl(v, w) && n(), v = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), m == null || m(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const cg = _v, lg = Ov, dg = Rv, ug = Iv, fg = Av, oi = Pv, mg = jv, pg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ag,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Mv(e, t, {
    ...o,
    platform: a
  });
};
var hg = typeof document < "u", vg = function() {
}, Or = hg ? Li : vg;
function zr(e, t) {
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
        if (!zr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !zr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ai(e, t) {
  const n = rl(e);
  return Math.round(t * n) / n;
}
function Yo(e) {
  const t = u.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
function gg(e) {
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
  } = e, [f, m] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = u.useState(r);
  zr(p, r) || h(r);
  const [x, v] = u.useState(null), [g, w] = u.useState(null), b = u.useCallback((D) => {
    D !== M.current && (M.current = D, v(D));
  }, []), y = u.useCallback((D) => {
    D !== N.current && (N.current = D, w(D));
  }, []), k = a || x, C = s || g, M = u.useRef(null), N = u.useRef(null), P = u.useRef(f), T = l != null, B = Yo(l), F = Yo(o), Y = Yo(d), Q = u.useCallback(() => {
    if (!M.current || !N.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (D.platform = F.current), pg(M.current, N.current, D).then(($) => {
      const K = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      I.current && !zr(P.current, K) && (P.current = K, Un.flushSync(() => {
        m(K);
      }));
    });
  }, [p, t, n, F, Y]);
  Or(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, m((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [d]);
  const I = u.useRef(!1);
  Or(() => (I.current = !0, () => {
    I.current = !1;
  }), []), Or(() => {
    if (k && (M.current = k), C && (N.current = C), k && C) {
      if (B.current)
        return B.current(k, C, Q);
      Q();
    }
  }, [k, C, Q, B, T]);
  const H = u.useMemo(() => ({
    reference: M,
    floating: N,
    setReference: b,
    setFloating: y
  }), [b, y]), V = u.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), U = u.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return D;
    const $ = ai(V.floating, f.x), K = ai(V.floating, f.y);
    return i ? {
      ...D,
      transform: "translate(" + $ + "px, " + K + "px)",
      ...rl(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: K
    };
  }, [n, i, V.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: Q,
    refs: H,
    elements: V,
    floatingStyles: U
  }), [f, Q, H, V, U]);
}
const xg = (e) => {
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
      return r && t(r) ? r.current != null ? oi({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? oi({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, bg = (e, t) => ({
  ...cg(e),
  options: [e, t]
}), yg = (e, t) => ({
  ...lg(e),
  options: [e, t]
}), wg = (e, t) => ({
  ...mg(e),
  options: [e, t]
}), Cg = (e, t) => ({
  ...dg(e),
  options: [e, t]
}), Sg = (e, t) => ({
  ...ug(e),
  options: [e, t]
}), kg = (e, t) => ({
  ...fg(e),
  options: [e, t]
}), Ng = (e, t) => ({
  ...xg(e),
  options: [e, t]
});
var Eg = "Arrow", ol = u.forwardRef((e, t) => {
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
ol.displayName = Eg;
var Mg = ol, es = "Popper", [al, Dt] = Re(es), [Pg, sl] = al(es), il = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ c.jsx(Pg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
il.displayName = es;
var cl = "PopperAnchor", ll = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = sl(cl, n), s = u.useRef(null), i = se(t, s), l = u.useRef(null);
    return u.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Z.div, { ...o, ref: i });
  }
);
ll.displayName = cl;
var ts = "PopperContent", [Rg, Ag] = al(ts), dl = u.forwardRef(
  (e, t) => {
    var O, X, J, re, de, ue;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: d = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: x,
      ...v
    } = e, g = sl(ts, n), [w, b] = u.useState(null), y = se(t, (Me) => b(Me)), [k, C] = u.useState(null), M = co(k), N = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, T = r + (a !== "center" ? "-" + a : ""), B = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(d) ? d : [d], Y = F.length > 0, Q = {
      padding: B,
      boundary: F.filter(_g),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: I, floatingStyles: H, placement: V, isPositioned: U, middlewareData: D } = gg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: T,
      whileElementsMounted: (...Me) => ig(...Me, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        bg({ mainAxis: o + P, alignmentAxis: s }),
        l && yg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? wg() : void 0,
          ...Q
        }),
        l && Cg({ ...Q }),
        Sg({
          ...Q,
          apply: ({ elements: Me, rects: Ie, availableWidth: rt, availableHeight: Xe }) => {
            const { width: ot, height: Zt } = Ie.reference, We = Me.floating.style;
            We.setProperty("--radix-popper-available-width", `${rt}px`), We.setProperty("--radix-popper-available-height", `${Xe}px`), We.setProperty("--radix-popper-anchor-width", `${ot}px`), We.setProperty("--radix-popper-anchor-height", `${Zt}px`);
          }
        }),
        k && Ng({ element: k, padding: i }),
        Og({ arrowWidth: N, arrowHeight: P }),
        p && kg({ strategy: "referenceHidden", ...Q })
      ]
    }), [$, K] = ml(V), R = Le(x);
    Pe(() => {
      U && (R == null || R());
    }, [U, R]);
    const E = (O = D.arrow) == null ? void 0 : O.x, A = (X = D.arrow) == null ? void 0 : X.y, j = ((J = D.arrow) == null ? void 0 : J.centerOffset) !== 0, [G, W] = u.useState();
    return Pe(() => {
      w && W(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: U ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G,
          "--radix-popper-transform-origin": [
            (re = D.transformOrigin) == null ? void 0 : re.x,
            (de = D.transformOrigin) == null ? void 0 : de.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ue = D.hide) == null ? void 0 : ue.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          Rg,
          {
            scope: n,
            placedSide: $,
            onArrowChange: C,
            arrowX: E,
            arrowY: A,
            shouldHideArrow: j,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                "data-side": $,
                "data-align": K,
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
dl.displayName = ts;
var ul = "PopperArrow", Dg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, fl = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Ag(ul, r), s = Dg[a.placedSide];
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
          Mg,
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
fl.displayName = ul;
function _g(e) {
  return e !== null;
}
var Og = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, f] = ml(n), m = { start: "0%", center: "50%", end: "100%" }[f], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", v = "";
    return d === "bottom" ? (x = s ? m : `${p}px`, v = `${-l}px`) : d === "top" ? (x = s ? m : `${p}px`, v = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, v = s ? m : `${h}px`) : d === "left" && (x = `${r.floating.width + l}px`, v = s ? m : `${h}px`), { data: { x, y: v } };
  }
});
function ml(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ho = il, Qn = ll, vo = dl, go = fl, Go = "rovingFocusGroup.onEntryFocus", jg = { bubbles: !1, cancelable: !0 }, Jn = "RovingFocusGroup", [fa, pl, Ig] = Kn(Jn), [Tg, xn] = Re(
  Jn,
  [Ig]
), [$g, Fg] = Tg(Jn), hl = u.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(fa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(fa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Wg, { ...e, ref: t }) }) })
);
hl.displayName = Jn;
var Wg = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: d,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, p = u.useRef(null), h = se(t, p), x = hn(a), [v, g] = $e({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Jn
  }), [w, b] = u.useState(!1), y = Le(d), k = pl(n), C = u.useRef(!1), [M, N] = u.useState(0);
  return u.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Go, y), () => P.removeEventListener(Go, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    $g,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: u.useCallback(
        (P) => g(P),
        [g]
      ),
      onItemShiftTab: u.useCallback(() => b(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => N((P) => P + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => N((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          tabIndex: w || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: z(e.onFocus, (P) => {
            const T = !C.current;
            if (P.target === P.currentTarget && T && !w) {
              const B = new CustomEvent(Go, jg);
              if (P.currentTarget.dispatchEvent(B), !B.defaultPrevented) {
                const F = k().filter((V) => V.focusable), Y = F.find((V) => V.active), Q = F.find((V) => V.id === v), H = [Y, Q, ...F].filter(
                  Boolean
                ).map((V) => V.ref.current);
                xl(H, f);
              }
            }
            C.current = !1;
          }),
          onBlur: z(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), vl = "RovingFocusGroupItem", gl = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Se(), d = a || l, f = Fg(vl, n), m = f.currentTabStopId === d, p = pl(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = f;
    return u.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ c.jsx(
      fa.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: z(e.onMouseDown, (g) => {
              r ? f.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: z(e.onFocus, () => f.onItemFocus(d)),
            onKeyDown: z(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = Bg(g, f.orientation, f.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((k) => k.focusable).map((k) => k.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const k = y.indexOf(g.currentTarget);
                  y = f.loop ? zg(y, k + 1) : y.slice(k + 1);
                }
                setTimeout(() => xl(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
gl.displayName = vl;
var Lg = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Vg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Bg(e, t, n) {
  const r = Vg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Lg[r];
}
function xl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function zg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var ns = hl, rs = gl, ma = ["Enter", " "], Hg = ["ArrowDown", "PageUp", "Home"], bl = ["ArrowUp", "PageDown", "End"], Yg = [...Hg, ...bl], Gg = {
  ltr: [...ma, "ArrowRight"],
  rtl: [...ma, "ArrowLeft"]
}, Ug = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, er = "Menu", [Bn, Kg, qg] = Kn(er), [qt, yl] = Re(er, [
  qg,
  Dt,
  xn
]), xo = Dt(), wl = xn(), [Xg, Xt] = qt(er), [Zg, tr] = qt(er), Cl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = xo(t), [l, d] = u.useState(null), f = u.useRef(!1), m = Le(a), p = hn(o);
  return u.useEffect(() => {
    const h = () => {
      f.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => f.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(ho, { ...i, children: /* @__PURE__ */ c.jsx(
    Xg,
    {
      scope: t,
      open: n,
      onOpenChange: m,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        Zg,
        {
          scope: t,
          onClose: u.useCallback(() => m(!1), [m]),
          isUsingKeyboardRef: f,
          dir: p,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
Cl.displayName = er;
var Qg = "MenuAnchor", os = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(Qn, { ...o, ...r, ref: t });
  }
);
os.displayName = Qg;
var as = "MenuPortal", [Jg, Sl] = qt(as, {
  forceMount: void 0
}), kl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Xt(as, t);
  return /* @__PURE__ */ c.jsx(Jg, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
kl.displayName = as;
var qe = "MenuContent", [ex, ss] = qt(qe), Nl = u.forwardRef(
  (e, t) => {
    const n = Sl(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(tx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(nx, { ...o, ref: t }) }) }) });
  }
), tx = u.forwardRef(
  (e, t) => {
    const n = Xt(qe, e.__scopeMenu), r = u.useRef(null), o = se(t, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ c.jsx(
      is,
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
), nx = u.forwardRef((e, t) => {
  const n = Xt(qe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    is,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), rx = /* @__PURE__ */ Mt("MenuContent.ScrollLock"), is = u.forwardRef(
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
      onPointerDownOutside: f,
      onFocusOutside: m,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: x,
      ...v
    } = e, g = Xt(qe, n), w = tr(qe, n), b = xo(n), y = wl(n), k = Kg(n), [C, M] = u.useState(null), N = u.useRef(null), P = se(t, N, g.onContentChange), T = u.useRef(0), B = u.useRef(""), F = u.useRef(0), Y = u.useRef(null), Q = u.useRef("right"), I = u.useRef(0), H = x ? Xn : u.Fragment, V = x ? { as: rx, allowPinchZoom: !0 } : void 0, U = ($) => {
      var O, X;
      const K = B.current + $, R = k().filter((J) => !J.disabled), E = document.activeElement, A = (O = R.find((J) => J.ref.current === E)) == null ? void 0 : O.textValue, j = R.map((J) => J.textValue), G = hx(j, K, A), W = (X = R.find((J) => J.textValue === G)) == null ? void 0 : X.ref.current;
      (function J(re) {
        B.current = re, window.clearTimeout(T.current), re !== "" && (T.current = window.setTimeout(() => J(""), 1e3));
      })(K), W && setTimeout(() => W.focus());
    };
    u.useEffect(() => () => window.clearTimeout(T.current), []), ro();
    const D = u.useCallback(($) => {
      var R, E;
      return Q.current === ((R = Y.current) == null ? void 0 : R.side) && gx($, (E = Y.current) == null ? void 0 : E.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      ex,
      {
        scope: n,
        searchRef: B,
        onItemEnter: u.useCallback(
          ($) => {
            D($) && $.preventDefault();
          },
          [D]
        ),
        onItemLeave: u.useCallback(
          ($) => {
            var K;
            D($) || ((K = N.current) == null || K.focus(), M(null));
          },
          [D]
        ),
        onTriggerLeave: u.useCallback(
          ($) => {
            D($) && $.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: F,
        onPointerGraceIntentChange: u.useCallback(($) => {
          Y.current = $;
        }, []),
        children: /* @__PURE__ */ c.jsx(H, { ...V, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: z(a, ($) => {
              var K;
              $.preventDefault(), (K = N.current) == null || K.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              Ut,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: f,
                onFocusOutside: m,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ c.jsx(
                  ns,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: z(l, ($) => {
                      w.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      vo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Vl(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: P,
                        style: { outline: "none", ...v.style },
                        onKeyDown: z(v.onKeyDown, ($) => {
                          const R = $.target.closest("[data-radix-menu-content]") === $.currentTarget, E = $.ctrlKey || $.altKey || $.metaKey, A = $.key.length === 1;
                          R && ($.key === "Tab" && $.preventDefault(), !E && A && U($.key));
                          const j = N.current;
                          if ($.target !== j || !Yg.includes($.key)) return;
                          $.preventDefault();
                          const W = k().filter((O) => !O.disabled).map((O) => O.ref.current);
                          bl.includes($.key) && W.reverse(), mx(W);
                        }),
                        onBlur: z(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(T.current), B.current = "");
                        }),
                        onPointerMove: z(
                          e.onPointerMove,
                          zn(($) => {
                            const K = $.target, R = I.current !== $.clientX;
                            if ($.currentTarget.contains(K) && R) {
                              const E = $.clientX > I.current ? "right" : "left";
                              Q.current = E, I.current = $.clientX;
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
Nl.displayName = qe;
var ox = "MenuGroup", cs = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { role: "group", ...r, ref: t });
  }
);
cs.displayName = ox;
var ax = "MenuLabel", El = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
El.displayName = ax;
var Hr = "MenuItem", si = "menu.itemSelect", bo = u.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = u.useRef(null), s = tr(Hr, e.__scopeMenu), i = ss(Hr, e.__scopeMenu), l = se(t, a), d = u.useRef(!1), f = () => {
      const m = a.current;
      if (!n && m) {
        const p = new CustomEvent(si, { bubbles: !0, cancelable: !0 });
        m.addEventListener(si, (h) => r == null ? void 0 : r(h), { once: !0 }), Oa(m, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Ml,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: z(e.onClick, f),
        onPointerDown: (m) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, m), d.current = !0;
        },
        onPointerUp: z(e.onPointerUp, (m) => {
          var p;
          d.current || (p = m.currentTarget) == null || p.click();
        }),
        onKeyDown: z(e.onKeyDown, (m) => {
          const p = i.searchRef.current !== "";
          n || p && m.key === " " || ma.includes(m.key) && (m.currentTarget.click(), m.preventDefault());
        })
      }
    );
  }
);
bo.displayName = Hr;
var Ml = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ss(Hr, n), i = wl(n), l = u.useRef(null), d = se(t, l), [f, m] = u.useState(!1), [p, h] = u.useState("");
    return u.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Bn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(rs, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: z(
              e.onPointerMove,
              zn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: z(
              e.onPointerLeave,
              zn((x) => s.onItemLeave(x))
            ),
            onFocus: z(e.onFocus, () => m(!0)),
            onBlur: z(e.onBlur, () => m(!1))
          }
        ) })
      }
    );
  }
), sx = "MenuCheckboxItem", Pl = u.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Ol, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ds(n),
        onSelect: z(
          o.onSelect,
          () => r == null ? void 0 : r(Yr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Pl.displayName = sx;
var Rl = "MenuRadioGroup", [ix, cx] = qt(
  Rl,
  { value: void 0, onValueChange: () => {
  } }
), Al = u.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Le(r);
    return /* @__PURE__ */ c.jsx(ix, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(cs, { ...o, ref: t }) });
  }
);
Al.displayName = Rl;
var Dl = "MenuRadioItem", _l = u.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = cx(Dl, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Ol, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ds(a),
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
_l.displayName = Dl;
var ls = "MenuItemIndicator", [Ol, lx] = qt(
  ls,
  { checked: !1 }
), jl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = lx(ls, n);
    return /* @__PURE__ */ c.jsx(
      _e,
      {
        present: r || Yr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            ...o,
            ref: t,
            "data-state": ds(a.checked)
          }
        )
      }
    );
  }
);
jl.displayName = ls;
var dx = "MenuSeparator", Il = u.forwardRef(
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
Il.displayName = dx;
var ux = "MenuArrow", Tl = u.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
Tl.displayName = ux;
var fx = "MenuSub", [nN, $l] = qt(fx), In = "MenuSubTrigger", Fl = u.forwardRef(
  (e, t) => {
    const n = Xt(In, e.__scopeMenu), r = tr(In, e.__scopeMenu), o = $l(In, e.__scopeMenu), a = ss(In, e.__scopeMenu), s = u.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, f = u.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return u.useEffect(() => f, [f]), u.useEffect(() => {
      const m = i.current;
      return () => {
        window.clearTimeout(m), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(os, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Ml,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Vl(n.open),
        ...e,
        ref: bt(t, o.onTriggerChange),
        onClick: (m) => {
          var p;
          (p = e.onClick) == null || p.call(e, m), !(e.disabled || m.defaultPrevented) && (m.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: z(
          e.onPointerMove,
          zn((m) => {
            a.onItemEnter(m), !m.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: z(
          e.onPointerLeave,
          zn((m) => {
            var h, x;
            f();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const v = (x = n.content) == null ? void 0 : x.dataset.side, g = v === "right", w = g ? -5 : 5, b = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: m.clientX + w, y: m.clientY },
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
              if (a.onTriggerLeave(m), m.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: z(e.onKeyDown, (m) => {
          var h;
          const p = a.searchRef.current !== "";
          e.disabled || p && m.key === " " || Gg[r.dir].includes(m.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), m.preventDefault());
        })
      }
    ) });
  }
);
Fl.displayName = In;
var Wl = "MenuSubContent", Ll = u.forwardRef(
  (e, t) => {
    const n = Sl(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu), i = $l(Wl, e.__scopeMenu), l = u.useRef(null), d = se(t, l);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      is,
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
        onOpenAutoFocus: (f) => {
          var m;
          s.isUsingKeyboardRef.current && ((m = l.current) == null || m.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: z(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: z(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: z(e.onKeyDown, (f) => {
          var h;
          const m = f.currentTarget.contains(f.target), p = Ug[s.dir].includes(f.key);
          m && p && (a.onOpenChange(!1), (h = i.trigger) == null || h.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ll.displayName = Wl;
function Vl(e) {
  return e ? "open" : "closed";
}
function Yr(e) {
  return e === "indeterminate";
}
function ds(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function mx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function px(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function hx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = px(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function vx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function gx(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return vx(n, t);
}
function zn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var xx = Cl, bx = os, yx = kl, wx = Nl, Cx = cs, Sx = El, kx = bo, Nx = Pl, Ex = Al, Mx = _l, Px = jl, Rx = Il, Ax = Tl, Dx = Fl, _x = Ll, yo = "DropdownMenu", [Ox] = Re(
  yo,
  [yl]
), Fe = yl(), [jx, Bl] = Ox(yo), zl = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Fe(t), d = u.useRef(null), [f, m] = $e({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: yo
  });
  return /* @__PURE__ */ c.jsx(
    jx,
    {
      scope: t,
      triggerId: Se(),
      triggerRef: d,
      contentId: Se(),
      open: f,
      onOpenChange: m,
      onOpenToggle: u.useCallback(() => m((p) => !p), [m]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(xx, { ...l, open: f, onOpenChange: m, dir: r, modal: i, children: n })
    }
  );
};
zl.displayName = yo;
var Hl = "DropdownMenuTrigger", Yl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Bl(Hl, n), s = Fe(n);
    return /* @__PURE__ */ c.jsx(bx, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
        ref: bt(t, a.triggerRef),
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
Yl.displayName = Hl;
var Ix = "DropdownMenuPortal", Gl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Fe(t);
  return /* @__PURE__ */ c.jsx(yx, { ...r, ...n });
};
Gl.displayName = Ix;
var Ul = "DropdownMenuContent", Kl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Bl(Ul, n), a = Fe(n), s = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      wx,
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
          const l = i.detail.originalEvent, d = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || d;
          (!o.modal || f) && (s.current = !0);
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
Kl.displayName = Ul;
var Tx = "DropdownMenuGroup", $x = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Cx, { ...o, ...r, ref: t });
  }
);
$x.displayName = Tx;
var Fx = "DropdownMenuLabel", ql = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Sx, { ...o, ...r, ref: t });
  }
);
ql.displayName = Fx;
var Wx = "DropdownMenuItem", Xl = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(kx, { ...o, ...r, ref: t });
  }
);
Xl.displayName = Wx;
var Lx = "DropdownMenuCheckboxItem", Vx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Nx, { ...o, ...r, ref: t });
});
Vx.displayName = Lx;
var Bx = "DropdownMenuRadioGroup", zx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Ex, { ...o, ...r, ref: t });
});
zx.displayName = Bx;
var Hx = "DropdownMenuRadioItem", Yx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Mx, { ...o, ...r, ref: t });
});
Yx.displayName = Hx;
var Gx = "DropdownMenuItemIndicator", Ux = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Px, { ...o, ...r, ref: t });
});
Ux.displayName = Gx;
var Kx = "DropdownMenuSeparator", Zl = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Rx, { ...o, ...r, ref: t });
});
Zl.displayName = Kx;
var qx = "DropdownMenuArrow", Xx = u.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Ax, { ...o, ...r, ref: t });
  }
);
Xx.displayName = qx;
var Zx = "DropdownMenuSubTrigger", Qx = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Dx, { ...o, ...r, ref: t });
});
Qx.displayName = Zx;
var Jx = "DropdownMenuSubContent", e0 = u.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(
    _x,
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
e0.displayName = Jx;
var t0 = zl, n0 = Yl, r0 = Gl, o0 = Kl, a0 = ql, s0 = Xl, i0 = Zl;
function ii(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var wo = "Popover", [Ql] = Re(wo, [
  Dt
]), nr = Dt(), [c0, _t] = Ql(wo), Jl = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = nr(t), l = u.useRef(null), [d, f] = u.useState(!1), [m, p] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: wo
  });
  return /* @__PURE__ */ c.jsx(ho, { ...i, children: /* @__PURE__ */ c.jsx(
    c0,
    {
      scope: t,
      contentId: Se(),
      triggerRef: l,
      open: m,
      onOpenChange: p,
      onOpenToggle: u.useCallback(() => p((h) => !h), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Jl.displayName = wo;
var ed = "PopoverAnchor", td = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(ed, n), a = nr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Qn, { ...a, ...r, ref: t });
  }
);
td.displayName = ed;
var nd = "PopoverTrigger", rd = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(nd, n), a = nr(n), s = se(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": cd(o.open),
        ...r,
        ref: s,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...a, children: i });
  }
);
rd.displayName = nd;
var us = "PopoverPortal", [l0, d0] = Ql(us, {
  forceMount: void 0
}), od = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = _t(us, t);
  return /* @__PURE__ */ c.jsx(l0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
od.displayName = us;
var fn = "PopoverContent", ad = u.forwardRef(
  (e, t) => {
    const n = d0(fn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = _t(fn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(f0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(m0, { ...o, ref: t }) });
  }
);
ad.displayName = fn;
var u0 = /* @__PURE__ */ Mt("PopoverContent.RemoveScroll"), f0 = u.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = u.useRef(null), o = se(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return ao(s);
    }, []), /* @__PURE__ */ c.jsx(Xn, { as: u0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      sd,
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
), m0 = u.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      sd,
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
), sd = u.forwardRef(
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
      onInteractOutside: f,
      ...m
    } = e, p = _t(fn, n), h = nr(n);
    return ro(), /* @__PURE__ */ c.jsx(
      qn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          Ut,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              vo,
              {
                "data-state": cd(p.open),
                role: "dialog",
                id: p.contentId,
                ...h,
                ...m,
                ref: t,
                style: {
                  ...m.style,
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
), id = "PopoverClose", p0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(id, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
p0.displayName = id;
var h0 = "PopoverArrow", v0 = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = nr(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
v0.displayName = h0;
function cd(e) {
  return e ? "open" : "closed";
}
var ld = Jl, g0 = td, dd = rd, ud = od, fs = ad, ms = "Progress", ps = 100, [x0] = Re(ms), [b0, y0] = x0(ms), fd = u.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = w0,
      ...s
    } = e;
    (o || o === 0) && !ci(o) && console.error(C0(`${o}`, "Progress"));
    const i = ci(o) ? o : ps;
    r !== null && !li(r, i) && console.error(S0(`${r}`, "Progress"));
    const l = li(r, i) ? r : null, d = Gr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(b0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Gr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": hd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
fd.displayName = ms;
var md = "ProgressIndicator", pd = u.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = y0(md, n);
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": hd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
pd.displayName = md;
function w0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function hd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gr(e) {
  return typeof e == "number";
}
function ci(e) {
  return Gr(e) && !isNaN(e) && e > 0;
}
function li(e, t) {
  return Gr(e) && !isNaN(e) && e <= t && e >= 0;
}
function C0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ps}\`.`;
}
function S0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ps} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var k0 = fd, N0 = pd, hs = "Radio", [E0, vd] = Re(hs), [M0, P0] = E0(hs), gd = u.forwardRef(
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
      ...f
    } = e, [m, p] = u.useState(null), h = se(t, (g) => p(g)), x = u.useRef(!1), v = m ? d || !!m.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(M0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": wd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: h,
          onClick: z(e.onClick, (g) => {
            o || l == null || l(), v && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ c.jsx(
        yd,
        {
          control: m,
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
gd.displayName = hs;
var xd = "RadioIndicator", bd = u.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = P0(xd, n);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": wd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
bd.displayName = xd;
var R0 = "RadioBubbleInput", yd = u.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = io(n), d = co(t);
    return u.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== n && h) {
        const x = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(x);
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
yd.displayName = R0;
function wd(e) {
  return e ? "checked" : "unchecked";
}
var A0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Co = "RadioGroup", [D0] = Re(Co, [
  xn,
  vd
]), Cd = xn(), Sd = vd(), [_0, O0] = D0(Co), kd = u.forwardRef(
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
      loop: f = !0,
      onValueChange: m,
      ...p
    } = e, h = Cd(n), x = hn(d), [v, g] = $e({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: Co
    });
    return /* @__PURE__ */ c.jsx(
      _0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          ns,
          {
            asChild: !0,
            ...h,
            orientation: l,
            dir: x,
            loop: f,
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
kd.displayName = Co;
var Nd = "RadioGroupItem", Ed = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = O0(Nd, n), s = a.disabled || r, i = Cd(n), l = Sd(n), d = u.useRef(null), f = se(t, d), m = a.value === o.value, p = u.useRef(!1);
    return u.useEffect(() => {
      const h = (v) => {
        A0.includes(v.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      rs,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ c.jsx(
          gd,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: f,
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
Ed.displayName = Nd;
var j0 = "RadioGroupIndicator", Md = u.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Sd(n);
    return /* @__PURE__ */ c.jsx(bd, { ...o, ...r, ref: t });
  }
);
Md.displayName = j0;
var I0 = kd, T0 = Ed, $0 = Md, F0 = [" ", "Enter", "ArrowUp", "ArrowDown"], W0 = [" ", "Enter"], Ht = "Select", [So, ko, L0] = Kn(Ht), [bn] = Re(Ht, [
  L0,
  Dt
]), No = Dt(), [V0, Ot] = bn(Ht), [B0, z0] = bn(Ht), Pd = (e) => {
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
    name: f,
    autoComplete: m,
    disabled: p,
    required: h,
    form: x
  } = e, v = No(t), [g, w] = u.useState(null), [b, y] = u.useState(null), [k, C] = u.useState(!1), M = hn(d), [N, P] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ht
  }), [T, B] = $e({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ht
  }), F = u.useRef(null), Y = g ? x || !!g.closest("form") : !0, [Q, I] = u.useState(/* @__PURE__ */ new Set()), H = Array.from(Q).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ c.jsx(ho, { ...v, children: /* @__PURE__ */ c.jsxs(
    V0,
    {
      required: h,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: Se(),
      value: T,
      onValueChange: B,
      open: N,
      onOpenChange: P,
      dir: M,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(So.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          B0,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((V) => {
              I((U) => new Set(U).add(V));
            }, []),
            onNativeOptionRemove: u.useCallback((V) => {
              I((U) => {
                const D = new Set(U);
                return D.delete(V), D;
              });
            }, []),
            children: n
          }
        ) }),
        Y ? /* @__PURE__ */ c.jsxs(
          eu,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: T,
            onChange: (V) => B(V.target.value),
            disabled: p,
            form: x,
            children: [
              T === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Q)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
Pd.displayName = Ht;
var Rd = "SelectTrigger", Ad = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = No(n), s = Ot(Rd, n), i = s.disabled || r, l = se(t, s.onTriggerChange), d = ko(n), f = u.useRef("touch"), [m, p, h] = nu((v) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === s.value), b = ru(g, v, w);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": tu(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: z(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && x(v);
        }),
        onPointerDown: z(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const g = v.target;
          g.hasPointerCapture(v.pointerId) && g.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (x(v), v.preventDefault());
        }),
        onKeyDown: z(o.onKeyDown, (v) => {
          const g = m.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(g && v.key === " ") && F0.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
Ad.displayName = Rd;
var Dd = "SelectValue", _d = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Ot(Dd, n), { onValueNodeHasChildrenChange: d } = l, f = a !== void 0, m = se(t, l.onValueNodeChange);
    return Pe(() => {
      d(f);
    }, [d, f]), /* @__PURE__ */ c.jsx(
      Z.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: tu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
_d.displayName = Dd;
var H0 = "SelectIcon", Od = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Od.displayName = H0;
var Y0 = "SelectPortal", jd = (e) => /* @__PURE__ */ c.jsx(Kt, { asChild: !0, ...e });
jd.displayName = Y0;
var Yt = "SelectContent", Id = u.forwardRef(
  (e, t) => {
    const n = Ot(Yt, e.__scopeSelect), [r, o] = u.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Un.createPortal(
        /* @__PURE__ */ c.jsx(Td, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(So.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx($d, { ...e, ref: t });
  }
);
Id.displayName = Yt;
var Ze = 10, [Td, jt] = bn(Yt), G0 = "SelectContentImpl", U0 = /* @__PURE__ */ Mt("SelectContent.RemoveScroll"), $d = u.forwardRef(
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
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g,
      //
      ...w
    } = e, b = Ot(Yt, n), [y, k] = u.useState(null), [C, M] = u.useState(null), N = se(t, (O) => k(O)), [P, T] = u.useState(null), [B, F] = u.useState(
      null
    ), Y = ko(n), [Q, I] = u.useState(!1), H = u.useRef(!1);
    u.useEffect(() => {
      if (y) return ao(y);
    }, [y]), ro();
    const V = u.useCallback(
      (O) => {
        const [X, ...J] = Y().map((ue) => ue.ref.current), [re] = J.slice(-1), de = document.activeElement;
        for (const ue of O)
          if (ue === de || (ue == null || ue.scrollIntoView({ block: "nearest" }), ue === X && C && (C.scrollTop = 0), ue === re && C && (C.scrollTop = C.scrollHeight), ue == null || ue.focus(), document.activeElement !== de)) return;
      },
      [Y, C]
    ), U = u.useCallback(
      () => V([P, y]),
      [V, P, y]
    );
    u.useEffect(() => {
      Q && U();
    }, [Q, U]);
    const { onOpenChange: D, triggerPointerDownPosRef: $ } = b;
    u.useEffect(() => {
      if (y) {
        let O = { x: 0, y: 0 };
        const X = (re) => {
          var de, ue;
          O = {
            x: Math.abs(Math.round(re.pageX) - (((de = $.current) == null ? void 0 : de.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((ue = $.current) == null ? void 0 : ue.y) ?? 0))
          };
        }, J = (re) => {
          O.x <= 10 && O.y <= 10 ? re.preventDefault() : y.contains(re.target) || D(!1), document.removeEventListener("pointermove", X), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [y, D, $]), u.useEffect(() => {
      const O = () => D(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [D]);
    const [K, R] = nu((O) => {
      const X = Y().filter((de) => !de.disabled), J = X.find((de) => de.ref.current === document.activeElement), re = ru(X, O, J);
      re && setTimeout(() => re.ref.current.focus());
    }), E = u.useCallback(
      (O, X, J) => {
        const re = !H.current && !J;
        (b.value !== void 0 && b.value === X || re) && (T(O), re && (H.current = !0));
      },
      [b.value]
    ), A = u.useCallback(() => y == null ? void 0 : y.focus(), [y]), j = u.useCallback(
      (O, X, J) => {
        const re = !H.current && !J;
        (b.value !== void 0 && b.value === X || re) && F(O);
      },
      [b.value]
    ), G = r === "popper" ? pa : Fd, W = G === pa ? {
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: x,
      hideWhenDetached: v,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ c.jsx(
      Td,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: M,
        itemRefCallback: E,
        selectedItem: P,
        onItemLeave: A,
        itemTextRefCallback: j,
        focusSelectedItem: U,
        selectedItemText: B,
        position: r,
        isPositioned: Q,
        searchRef: K,
        children: /* @__PURE__ */ c.jsx(Xn, { as: U0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: z(o, (O) => {
              var X;
              (X = b.trigger) == null || X.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Ut,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  G,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...w,
                    ...W,
                    onPlaced: () => I(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: z(w.onKeyDown, (O) => {
                      const X = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !X && O.key.length === 1 && R(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let re = Y().filter((de) => !de.disabled).map((de) => de.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const de = O.target, ue = re.indexOf(de);
                          re = re.slice(ue + 1);
                        }
                        setTimeout(() => V(re)), O.preventDefault();
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
$d.displayName = G0;
var K0 = "SelectItemAlignedPosition", Fd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Ot(Yt, n), s = jt(Yt, n), [i, l] = u.useState(null), [d, f] = u.useState(null), m = se(t, (N) => f(N)), p = ko(n), h = u.useRef(!1), x = u.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = s, y = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && v && g && w) {
      const N = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), T = a.valueNode.getBoundingClientRect(), B = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const de = B.left - P.left, ue = T.left - de, Me = N.left - ue, Ie = N.width + Me, rt = Math.max(Ie, P.width), Xe = window.innerWidth - Ze, ot = ii(ue, [
          Ze,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ze, Xe - rt)
        ]);
        i.style.minWidth = Ie + "px", i.style.left = ot + "px";
      } else {
        const de = P.right - B.right, ue = window.innerWidth - T.right - de, Me = window.innerWidth - N.right - ue, Ie = N.width + Me, rt = Math.max(Ie, P.width), Xe = window.innerWidth - Ze, ot = ii(ue, [
          Ze,
          Math.max(Ze, Xe - rt)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = ot + "px";
      }
      const F = p(), Y = window.innerHeight - Ze * 2, Q = v.scrollHeight, I = window.getComputedStyle(d), H = parseInt(I.borderTopWidth, 10), V = parseInt(I.paddingTop, 10), U = parseInt(I.borderBottomWidth, 10), D = parseInt(I.paddingBottom, 10), $ = H + V + Q + D + U, K = Math.min(g.offsetHeight * 5, $), R = window.getComputedStyle(v), E = parseInt(R.paddingTop, 10), A = parseInt(R.paddingBottom, 10), j = N.top + N.height / 2 - Ze, G = Y - j, W = g.offsetHeight / 2, O = g.offsetTop + W, X = H + V + O, J = $ - X;
      if (X <= j) {
        const de = F.length > 0 && g === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const ue = d.clientHeight - v.offsetTop - v.offsetHeight, Me = Math.max(
          G,
          W + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (de ? A : 0) + ue + U
        ), Ie = X + Me;
        i.style.height = Ie + "px";
      } else {
        const de = F.length > 0 && g === F[0].ref.current;
        i.style.top = "0px";
        const Me = Math.max(
          j,
          H + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (de ? E : 0) + W
        ) + J;
        i.style.height = Me + "px", v.scrollTop = X - j + v.offsetTop;
      }
      i.style.margin = `${Ze}px 0`, i.style.minHeight = K + "px", i.style.maxHeight = Y + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
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
  Pe(() => y(), [y]);
  const [k, C] = u.useState();
  Pe(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const M = u.useCallback(
    (N) => {
      N && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    X0,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: M,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: k
          },
          children: /* @__PURE__ */ c.jsx(
            Z.div,
            {
              ...o,
              ref: m,
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
Fd.displayName = K0;
var q0 = "SelectPopperPosition", pa = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ze,
    ...a
  } = e, s = No(n);
  return /* @__PURE__ */ c.jsx(
    vo,
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
pa.displayName = q0;
var [X0, vs] = bn(Yt, {}), ha = "SelectViewport", Wd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = jt(ha, n), s = vs(ha, n), i = se(t, a.onViewportChange), l = u.useRef(0);
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
      /* @__PURE__ */ c.jsx(So.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
          onScroll: z(o.onScroll, (d) => {
            const f = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && m) {
              const h = Math.abs(l.current - f.scrollTop);
              if (h > 0) {
                const x = window.innerHeight - Ze * 2, v = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), w = Math.max(v, g);
                if (w < x) {
                  const b = w + h, y = Math.min(x, b), k = b - y;
                  m.style.height = y + "px", m.style.bottom === "0px" && (f.scrollTop = k > 0 ? k : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Wd.displayName = ha;
var Ld = "SelectGroup", [Z0, Q0] = bn(Ld), Vd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Se();
    return /* @__PURE__ */ c.jsx(Z0, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Vd.displayName = Ld;
var Bd = "SelectLabel", zd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Q0(Bd, n);
    return /* @__PURE__ */ c.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
zd.displayName = Bd;
var Ur = "SelectItem", [J0, Hd] = bn(Ur), Yd = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Ot(Ur, n), l = jt(Ur, n), d = i.value === r, [f, m] = u.useState(a ?? ""), [p, h] = u.useState(!1), x = se(
      t,
      (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, r, o);
      }
    ), v = Se(), g = u.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      J0,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: d,
        onItemTextChange: u.useCallback((b) => {
          m((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          So.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
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
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && b.key === " " || (W0.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Yd.displayName = Ur;
var Tn = "SelectItemText", Gd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Ot(Tn, n), i = jt(Tn, n), l = Hd(Tn, n), d = z0(Tn, n), [f, m] = u.useState(null), p = se(
      t,
      (w) => m(w),
      l.onItemTextChange,
      (w) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, w, l.value, l.disabled);
      }
    ), h = f == null ? void 0 : f.textContent, x = u.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: h }, l.value),
      [l.disabled, l.value, h]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: g } = d;
    return Pe(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Z.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Un.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Gd.displayName = Tn;
var Ud = "SelectItemIndicator", Kd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Hd(Ud, n).isSelected ? /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Kd.displayName = Ud;
var va = "SelectScrollUpButton", qd = u.forwardRef((e, t) => {
  const n = jt(va, e.__scopeSelect), r = vs(va, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Zd,
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
qd.displayName = va;
var ga = "SelectScrollDownButton", Xd = u.forwardRef((e, t) => {
  const n = jt(ga, e.__scopeSelect), r = vs(ga, e.__scopeSelect), [o, a] = u.useState(!1), s = se(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < d;
        a(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Zd,
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
Xd.displayName = ga;
var Zd = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = jt("SelectScrollButton", n), s = u.useRef(null), i = ko(n), l = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => l(), [l]), Pe(() => {
    var f;
    const d = i().find((m) => m.ref.current === document.activeElement);
    (f = d == null ? void 0 : d.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    Z.div,
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
}), eb = "SelectSeparator", Qd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Qd.displayName = eb;
var xa = "SelectArrow", Jd = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = No(n), a = Ot(xa, n), s = jt(xa, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t }) : null;
  }
);
Jd.displayName = xa;
var tb = "SelectBubbleInput", eu = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = se(r, o), s = io(t);
    return u.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(m);
      }
    }, [s, t]), /* @__PURE__ */ c.jsx(
      Z.select,
      {
        ...n,
        style: { ...qi, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
eu.displayName = tb;
function tu(e) {
  return e === "" || e === void 0;
}
function nu(e) {
  const t = Le(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), (function l(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      })(i);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function ru(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = nb(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function nb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var rb = Pd, ob = Ad, ab = _d, sb = Od, ib = jd, cb = Id, lb = Wd, db = Vd, ub = zd, fb = Yd, mb = Gd, pb = Kd, hb = qd, vb = Xd, gb = Qd, xb = Jd, Eo = "Switch", [bb] = Re(Eo), [yb, wb] = bb(Eo), ou = u.forwardRef(
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
      form: f,
      ...m
    } = e, [p, h] = u.useState(null), x = se(t, (y) => h(y)), v = u.useRef(!1), g = p ? f || !!p.closest("form") : !0, [w, b] = $e({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Eo
    });
    return /* @__PURE__ */ c.jsxs(yb, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": cu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...m,
          ref: x,
          onClick: z(e.onClick, (y) => {
            b((k) => !k), g && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        iu,
        {
          control: p,
          bubbles: !v.current,
          name: r,
          value: l,
          checked: w,
          required: s,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ou.displayName = Eo;
var au = "SwitchThumb", su = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = wb(au, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": cu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
su.displayName = au;
var Cb = "SwitchBubbleInput", iu = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = se(s, a), l = io(n), d = co(t);
    return u.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== n && h) {
        const x = new Event("click", { bubbles: r });
        h.call(f, n), f.dispatchEvent(x);
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
iu.displayName = Cb;
function cu(e) {
  return e ? "checked" : "unchecked";
}
var Sb = ou, kb = su, Mo = "Tabs", [Nb] = Re(Mo, [
  xn
]), lu = xn(), [Eb, gs] = Nb(Mo), du = u.forwardRef(
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
    } = e, f = hn(i), [m, p] = $e({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Mo
    });
    return /* @__PURE__ */ c.jsx(
      Eb,
      {
        scope: n,
        baseId: Se(),
        value: m,
        onValueChange: p,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            dir: f,
            "data-orientation": s,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
du.displayName = Mo;
var uu = "TabsList", fu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = gs(uu, n), s = lu(n);
    return /* @__PURE__ */ c.jsx(
      ns,
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
fu.displayName = uu;
var mu = "TabsTrigger", pu = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = gs(mu, n), i = lu(n), l = vu(s.baseId, r), d = gu(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      rs,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          Z.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": d,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: z(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: z(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
pu.displayName = mu;
var hu = "TabsContent", Mb = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = gs(hu, n), l = vu(i.baseId, r), d = gu(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(_e, { present: o || f, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": f ? "active" : "inactive",
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
          animationDuration: m.current ? "0s" : void 0
        },
        children: p && a
      }
    ) });
  }
);
Mb.displayName = hu;
function vu(e, t) {
  return `${e}-trigger-${t}`;
}
function gu(e, t) {
  return `${e}-content-${t}`;
}
var Pb = du, Rb = fu, Ab = pu, xs = "ToastProvider", [bs, Db, _b] = Kn("Toast"), [xu] = Re("Toast", [_b]), [Ob, Po] = xu(xs), bu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = u.useState(null), [d, f] = u.useState(0), m = u.useRef(!1), p = u.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${xs}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(bs.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    Ob,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: i,
      onViewportChange: l,
      onToastAdd: u.useCallback(() => f((h) => h + 1), []),
      onToastRemove: u.useCallback(() => f((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: m,
      isClosePausedRef: p,
      children: s
    }
  ) });
};
bu.displayName = xs;
var yu = "ToastViewport", jb = ["F8"], ba = "toast.viewportPause", ya = "toast.viewportResume", wu = u.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = jb,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Po(yu, n), i = Db(n), l = u.useRef(null), d = u.useRef(null), f = u.useRef(null), m = u.useRef(null), p = se(t, m, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    u.useEffect(() => {
      const g = (w) => {
        var y;
        r.length !== 0 && r.every((k) => w[k] || w.code === k) && ((y = m.current) == null || y.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), u.useEffect(() => {
      const g = l.current, w = m.current;
      if (x && g && w) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const M = new CustomEvent(ba);
            w.dispatchEvent(M), s.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (s.isClosePausedRef.current) {
            const M = new CustomEvent(ya);
            w.dispatchEvent(M), s.isClosePausedRef.current = !1;
          }
        }, k = (M) => {
          !g.contains(M.relatedTarget) && y();
        }, C = () => {
          g.contains(document.activeElement) || y();
        };
        return g.addEventListener("focusin", b), g.addEventListener("focusout", k), g.addEventListener("pointermove", b), g.addEventListener("pointerleave", C), window.addEventListener("blur", b), window.addEventListener("focus", y), () => {
          g.removeEventListener("focusin", b), g.removeEventListener("focusout", k), g.removeEventListener("pointermove", b), g.removeEventListener("pointerleave", C), window.removeEventListener("blur", b), window.removeEventListener("focus", y);
        };
      }
    }, [x, s.isClosePausedRef]);
    const v = u.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((y) => {
          const k = y.ref.current, C = [k, ...Ub(k)];
          return g === "forwards" ? C : C.reverse();
        });
        return (g === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return u.useEffect(() => {
      const g = m.current;
      if (g) {
        const w = (b) => {
          var C, M, N;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const P = document.activeElement, T = b.shiftKey;
            if (b.target === g && T) {
              (C = d.current) == null || C.focus();
              return;
            }
            const Y = v({ tabbingDirection: T ? "backwards" : "forwards" }), Q = Y.findIndex((I) => I === P);
            Uo(Y.slice(Q + 1)) ? b.preventDefault() : T ? (M = d.current) == null || M.focus() : (N = f.current) == null || N.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, v]), /* @__PURE__ */ c.jsxs(
      sh,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            wa,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                Uo(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(bs.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Z.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            wa,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                Uo(g);
              }
            }
          )
        ]
      }
    );
  }
);
wu.displayName = yu;
var Cu = "ToastFocusProxy", wa = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Po(Cu, n);
    return /* @__PURE__ */ c.jsx(
      Jr,
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
wa.displayName = Cu;
var rr = "Toast", Ib = "toast.swipeStart", Tb = "toast.swipeMove", $b = "toast.swipeCancel", Fb = "toast.swipeEnd", Su = u.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = $e({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: rr
    });
    return /* @__PURE__ */ c.jsx(_e, { present: n || i, children: /* @__PURE__ */ c.jsx(
      Vb,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: Le(e.onPause),
        onResume: Le(e.onResume),
        onSwipeStart: z(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: z(e.onSwipeMove, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${m}px`);
        }),
        onSwipeCancel: z(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: z(e.onSwipeEnd, (d) => {
          const { x: f, y: m } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${m}px`), l(!1);
        })
      }
    ) });
  }
);
Su.displayName = rr;
var [Wb, Lb] = xu(rr, {
  onClose() {
  }
}), Vb = u.forwardRef(
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
      onSwipeStart: f,
      onSwipeMove: m,
      onSwipeCancel: p,
      onSwipeEnd: h,
      ...x
    } = e, v = Po(rr, n), [g, w] = u.useState(null), b = se(t, (I) => w(I)), y = u.useRef(null), k = u.useRef(null), C = o || v.duration, M = u.useRef(0), N = u.useRef(C), P = u.useRef(0), { onToastAdd: T, onToastRemove: B } = v, F = Le(() => {
      var H;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()), s();
    }), Y = u.useCallback(
      (I) => {
        !I || I === 1 / 0 || (window.clearTimeout(P.current), M.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(F, I));
      },
      [F]
    );
    u.useEffect(() => {
      const I = v.viewport;
      if (I) {
        const H = () => {
          Y(N.current), d == null || d();
        }, V = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - M.current;
          N.current = N.current - U, window.clearTimeout(P.current), l == null || l();
        };
        return I.addEventListener(ba, V), I.addEventListener(ya, H), () => {
          I.removeEventListener(ba, V), I.removeEventListener(ya, H);
        };
      }
    }, [v.viewport, C, l, d, Y]), u.useEffect(() => {
      a && !v.isClosePausedRef.current && Y(C);
    }, [a, C, v.isClosePausedRef, Y]), u.useEffect(() => (T(), () => B()), [T, B]);
    const Q = u.useMemo(() => g ? Du(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      Q && /* @__PURE__ */ c.jsx(
        Bb,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Q
        }
      ),
      /* @__PURE__ */ c.jsx(Wb, { scope: n, onClose: F, children: Un.createPortal(
        /* @__PURE__ */ c.jsx(bs.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          ah,
          {
            asChild: !0,
            onEscapeKeyDown: z(i, () => {
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
                onKeyDown: z(e.onKeyDown, (I) => {
                  I.key === "Escape" && (i == null || i(I.nativeEvent), I.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: z(e.onPointerDown, (I) => {
                  I.button === 0 && (y.current = { x: I.clientX, y: I.clientY });
                }),
                onPointerMove: z(e.onPointerMove, (I) => {
                  if (!y.current) return;
                  const H = I.clientX - y.current.x, V = I.clientY - y.current.y, U = !!k.current, D = ["left", "right"].includes(v.swipeDirection), $ = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, K = D ? $(0, H) : 0, R = D ? 0 : $(0, V), E = I.pointerType === "touch" ? 10 : 2, A = { x: K, y: R }, j = { originalEvent: I, delta: A };
                  U ? (k.current = A, wr(Tb, m, j, {
                    discrete: !1
                  })) : di(A, v.swipeDirection, E) ? (k.current = A, wr(Ib, f, j, {
                    discrete: !1
                  }), I.target.setPointerCapture(I.pointerId)) : (Math.abs(H) > E || Math.abs(V) > E) && (y.current = null);
                }),
                onPointerUp: z(e.onPointerUp, (I) => {
                  const H = k.current, V = I.target;
                  if (V.hasPointerCapture(I.pointerId) && V.releasePointerCapture(I.pointerId), k.current = null, y.current = null, H) {
                    const U = I.currentTarget, D = { originalEvent: I, delta: H };
                    di(H, v.swipeDirection, v.swipeThreshold) ? wr(Fb, h, D, {
                      discrete: !0
                    }) : wr(
                      $b,
                      p,
                      D,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", ($) => $.preventDefault(), {
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
), Bb = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Po(rr, t), [a, s] = u.useState(!1), [i, l] = u.useState(!1);
  return Yb(() => s(!0)), u.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Kt, { asChild: !0, children: /* @__PURE__ */ c.jsx(Jr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, zb = "ToastTitle", ku = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
ku.displayName = zb;
var Hb = "ToastDescription", Nu = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
Nu.displayName = Hb;
var Eu = "ToastAction", Mu = u.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Au, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Ru, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Eu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Mu.displayName = Eu;
var Pu = "ToastClose", Ru = u.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Lb(Pu, n);
    return /* @__PURE__ */ c.jsx(Au, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: z(e.onClick, o.onClose)
      }
    ) });
  }
);
Ru.displayName = Pu;
var Au = u.forwardRef((e, t) => {
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
function Du(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Gb(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Du(r));
    }
  }), t;
}
function wr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Oa(o, a) : o.dispatchEvent(a);
}
var di = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Yb(e = () => {
}) {
  const t = Le(e);
  Pe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Gb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ub(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Uo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var Kb = bu, qb = wu, Xb = Su, Zb = ku, Qb = Nu, Jb = Mu, [Ro] = Re("Tooltip", [
  Dt
]), Ao = Dt(), _u = "TooltipProvider", ey = 700, Ca = "tooltip.open", [ty, ys] = Ro(_u), Ou = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ey,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = u.useRef(!0), i = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    ty,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: u.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: u.useCallback((d) => {
        i.current = d;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
Ou.displayName = _u;
var Hn = "Tooltip", [ny, or] = Ro(Hn), ju = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = ys(Hn, e.__scopeTooltip), d = Ao(t), [f, m] = u.useState(null), p = Se(), h = u.useRef(0), x = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, g = u.useRef(!1), [w, b] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (N) => {
      N ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ca))) : l.onClose(), a == null || a(N);
    },
    caller: Hn
  }), y = u.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), k = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, g.current = !1, b(!0);
  }, [b]), C = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = 0, b(!1);
  }, [b]), M = u.useCallback(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      g.current = !0, b(!0), h.current = 0;
    }, v);
  }, [v, b]);
  return u.useEffect(() => () => {
    h.current && (window.clearTimeout(h.current), h.current = 0);
  }, []), /* @__PURE__ */ c.jsx(ho, { ...d, children: /* @__PURE__ */ c.jsx(
    ny,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: f,
      onTriggerChange: m,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? M() : k();
      }, [l.isOpenDelayedRef, M, k]),
      onTriggerLeave: u.useCallback(() => {
        x ? C() : (window.clearTimeout(h.current), h.current = 0);
      }, [C, x]),
      onOpen: k,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
ju.displayName = Hn;
var Sa = "TooltipTrigger", Iu = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = or(Sa, n), a = ys(Sa, n), s = Ao(n), i = u.useRef(null), l = se(t, i, o.onTriggerChange), d = u.useRef(!1), f = u.useRef(!1), m = u.useCallback(() => d.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: z(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: z(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: z(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
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
Iu.displayName = Sa;
var ws = "TooltipPortal", [ry, oy] = Ro(ws, {
  forceMount: void 0
}), Tu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = or(ws, t);
  return /* @__PURE__ */ c.jsx(ry, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Kt, { asChild: !0, container: o, children: r }) }) });
};
Tu.displayName = ws;
var mn = "TooltipContent", $u = u.forwardRef(
  (e, t) => {
    const n = oy(mn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = or(mn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(_e, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Fu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(ay, { side: o, ...a, ref: t }) });
  }
), ay = u.forwardRef((e, t) => {
  const n = or(mn, e.__scopeTooltip), r = ys(mn, e.__scopeTooltip), o = u.useRef(null), a = se(t, o), [s, i] = u.useState(null), { trigger: l, onClose: d } = n, f = o.current, { onPointerInTransitChange: m } = r, p = u.useCallback(() => {
    i(null), m(!1);
  }, [m]), h = u.useCallback(
    (x, v) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = dy(w, g.getBoundingClientRect()), y = uy(w, b), k = fy(v.getBoundingClientRect()), C = py([...y, ...k]);
      i(C), m(!0);
    },
    [m]
  );
  return u.useEffect(() => () => p(), [p]), u.useEffect(() => {
    if (l && f) {
      const x = (g) => h(g, f), v = (g) => h(g, l);
      return l.addEventListener("pointerleave", x), f.addEventListener("pointerleave", v), () => {
        l.removeEventListener("pointerleave", x), f.removeEventListener("pointerleave", v);
      };
    }
  }, [l, f, h, p]), u.useEffect(() => {
    if (s) {
      const x = (v) => {
        const g = v.target, w = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(g)) || (f == null ? void 0 : f.contains(g)), y = !my(w, s);
        b ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, f, s, d, p]), /* @__PURE__ */ c.jsx(Fu, { ...e, ref: a });
}), [sy, iy] = Ro(Hn, { isInside: !1 }), cy = /* @__PURE__ */ hp("TooltipContent"), Fu = u.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = or(mn, n), d = Ao(n), { onClose: f } = l;
    return u.useEffect(() => (document.addEventListener(Ca, f), () => document.removeEventListener(Ca, f)), [f]), u.useEffect(() => {
      if (l.trigger) {
        const m = (p) => {
          const h = p.target;
          h != null && h.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", m, { capture: !0 }), () => window.removeEventListener("scroll", m, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ c.jsx(
      Ut,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ c.jsxs(
          vo,
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
              /* @__PURE__ */ c.jsx(cy, { children: r }),
              /* @__PURE__ */ c.jsx(sy, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(wp, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
$u.displayName = mn;
var Wu = "TooltipArrow", ly = u.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ao(n);
    return iy(
      Wu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
ly.displayName = Wu;
function dy(e, t) {
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
function uy(e, t, n = 5) {
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
function fy(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function my(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, f = i.y, m = l.x, p = l.y;
    f > r != p > r && n < (m - d) * (r - f) / (p - f) + d && (o = !o);
  }
  return o;
}
function py(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), hy(t);
}
function hy(e) {
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
var vy = Ou, gy = ju, xy = Iu, by = Tu, yy = $u;
function Lu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Lu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Vu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Lu(e)) && (r && (r += " "), r += t);
  return r;
}
const ui = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, fi = Vu, oe = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return fi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const f = n == null ? void 0 : n[d], m = a == null ? void 0 : a[d];
    if (f === null) return null;
    const p = ui(f) || ui(m);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, f) => {
    let [m, p] = f;
    return p === void 0 || (d[m] = p), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, f) => {
    let { class: m, className: p, ...h } = f;
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
      m,
      p
    ] : d;
  }, []);
  return fi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Cs = "-", wy = (e) => {
  const t = Sy(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Cs);
      return i[0] === "" && i.length !== 1 && i.shift(), Bu(i, t) || Cy(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, Bu = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? Bu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Cs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, mi = /^\[(.+)\]$/, Cy = (e) => {
  if (mi.test(e)) {
    const t = mi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Sy = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    ka(n[o], r, o, t);
  return r;
}, ka = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : pi(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ky(o)) {
        ka(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      ka(s, pi(t, a), n, r);
    });
  });
}, pi = (e, t) => {
  let n = e;
  return t.split(Cs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ky = (e) => e.isThemeGetter, Ny = (e) => {
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
}, Na = "!", Ea = ":", Ey = Ea.length, My = (e) => {
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
        if (v === Ea) {
          a.push(o.slice(l, x)), l = x + Ey;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const f = a.length === 0 ? o : o.substring(l), m = Py(f), p = m !== f, h = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + Ea, a = r;
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
}, Py = (e) => e.endsWith(Na) ? e.substring(0, e.length - 1) : e.startsWith(Na) ? e.substring(1) : e, Ry = (e) => {
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
}, Ay = (e) => ({
  cache: Ny(e.cacheSize),
  parseClassName: My(e),
  sortModifiers: Ry(e),
  ...wy(e)
}), Dy = /\s+/, _y = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Dy);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const f = i[d], {
      isExternal: m,
      modifiers: p,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: v
    } = n(f);
    if (m) {
      l = f + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!v, w = r(g ? x.substring(0, v) : x);
    if (!w) {
      if (!g) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (w = r(x), !w) {
        l = f + (l.length > 0 ? " " + l : l);
        continue;
      }
      g = !1;
    }
    const b = a(p).join(":"), y = h ? b + Na : b, k = y + w;
    if (s.includes(k))
      continue;
    s.push(k);
    const C = o(w, g);
    for (let M = 0; M < C.length; ++M) {
      const N = C[M];
      s.push(y + N);
    }
    l = f + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Oy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = zu(t)) && (r && (r += " "), r += n);
  return r;
}
const zu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = zu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function hi(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((f, m) => m(f), e());
    return n = Ay(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const f = _y(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(Oy.apply(null, arguments));
  };
}
const ke = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Hu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jy = /^\d+\/\d+$/, Iy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ty = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $y = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rn = (e) => jy.test(e), le = (e) => !!e && !Number.isNaN(Number(e)), Ct = (e) => !!e && Number.isInteger(Number(e)), Ko = (e) => e.endsWith("%") && le(e.slice(0, -1)), vt = (e) => Iy.test(e), Ly = () => !0, Vy = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ty.test(e) && !$y.test(e)
), Gu = () => !1, By = (e) => Fy.test(e), zy = (e) => Wy.test(e), Hy = (e) => !ee(e) && !te(e), Yy = (e) => yn(e, qu, Gu), ee = (e) => Hu.test(e), $t = (e) => yn(e, Xu, Vy), qo = (e) => yn(e, Xy, le), vi = (e) => yn(e, Uu, Gu), Gy = (e) => yn(e, Ku, zy), Cr = (e) => yn(e, Zu, By), te = (e) => Yu.test(e), On = (e) => wn(e, Xu), Uy = (e) => wn(e, Zy), gi = (e) => wn(e, Uu), Ky = (e) => wn(e, qu), qy = (e) => wn(e, Ku), Sr = (e) => wn(e, Zu, !0), yn = (e, t, n) => {
  const r = Hu.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, wn = (e, t, n = !1) => {
  const r = Yu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Uu = (e) => e === "position" || e === "percentage", Ku = (e) => e === "image" || e === "url", qu = (e) => e === "length" || e === "size" || e === "bg-size", Xu = (e) => e === "length", Xy = (e) => e === "number", Zy = (e) => e === "family-name", Zu = (e) => e === "shadow", xi = () => {
  const e = ke("color"), t = ke("font"), n = ke("text"), r = ke("font-weight"), o = ke("tracking"), a = ke("leading"), s = ke("breakpoint"), i = ke("container"), l = ke("spacing"), d = ke("radius"), f = ke("shadow"), m = ke("inset-shadow"), p = ke("text-shadow"), h = ke("drop-shadow"), x = ke("blur"), v = ke("perspective"), g = ke("aspect"), w = ke("ease"), b = ke("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), te, ee], M = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], P = () => [te, ee, l], T = () => [rn, "full", "auto", ...P()], B = () => [Ct, "none", "subgrid", te, ee], F = () => ["auto", {
    span: ["full", Ct, te, ee]
  }, Ct, te, ee], Y = () => [Ct, "auto", te, ee], Q = () => ["auto", "min", "max", "fr", te, ee], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...P()], U = () => [rn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], D = () => [e, te, ee], $ = () => [...k(), gi, vi, {
    position: [te, ee]
  }], K = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", Ky, Yy, {
    size: [te, ee]
  }], E = () => [Ko, On, $t], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], j = () => ["", le, On, $t], G = () => ["solid", "dashed", "dotted", "double"], W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], O = () => [le, Ko, gi, vi], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", le, te, ee], re = () => ["none", le, te, ee], de = () => [le, te, ee], ue = () => [rn, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Ly],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [Hy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", le],
      text: [vt],
      "text-shadow": [vt],
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
        aspect: ["auto", "square", rn, ee, te, g]
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
        columns: [le, ee, te, i]
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
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
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
        z: [Ct, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [rn, "full", "auto", i, ...P()]
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
        flex: [le, rn, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", le, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", le, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ct, "first", "last", "none", te, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
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
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
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
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": Q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...I(), "normal"]
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
        content: ["normal", ...I()]
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
        "place-content": I()
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
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
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
        "space-x": P()
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
        "space-y": P()
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
        text: ["base", n, On, $t]
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
        font: [r, te, qo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ko, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Uy, ee, t]
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
        "line-clamp": [le, "none", te, qo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...P()
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [le, "from-font", "auto", te, $t]
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
        "underline-offset": [le, "auto", te, ee]
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
        indent: P()
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
        bg: K()
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
          }, Ct, te, ee],
          radial: ["", te, ee],
          conic: [Ct, te, ee]
        }, qy, Gy]
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
        rounded: A()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": A()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": A()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": A()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": A()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": A()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": A()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": A()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": A()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": A()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": A()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": A()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": A()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": A()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": A()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: j()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": j()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": j()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": j()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": j()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": j()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": j()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": j()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": j()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": j()
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
        "divide-y": j()
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
        outline: [...G(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [le, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", le, On, $t]
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
          Sr,
          Cr
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
        "inset-shadow": ["none", m, Sr, Cr]
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
        ring: j()
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
        "ring-offset": [le, $t]
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
        "inset-ring": j()
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
        "text-shadow": ["none", p, Sr, Cr]
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
        opacity: [le, te, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...W(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        "mask-linear": [le]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": O()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": O()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": O()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": O()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": O()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": O()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": O()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [te, ee]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": O()
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [le]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": O()
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
        mask: $()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: K()
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
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [le, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [le, te, ee]
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
          Sr,
          Cr
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
        grayscale: ["", le, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [le, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", le, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [le, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", le, te, ee]
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
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [le, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [le, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", le, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [le, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", le, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [le, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [le, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", le, te, ee]
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
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
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
        duration: [le, "initial", te, ee]
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
        delay: [le, te, ee]
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
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        translate: ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ue()
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [le, On, $t, qo]
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
}, Qy = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => ($n(e, "cacheSize", t), $n(e, "prefix", n), $n(e, "experimentalParseClassName", r), kr(e.theme, a.theme), kr(e.classGroups, a.classGroups), kr(e.conflictingClassGroups, a.conflictingClassGroups), kr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), $n(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Nr(e.theme, o.theme), Nr(e.classGroups, o.classGroups), Nr(e.conflictingClassGroups, o.conflictingClassGroups), Nr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Qu(e, o, "orderSensitiveModifiers"), e), $n = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, kr = (e, t) => {
  if (t)
    for (const n in t)
      $n(e, n, t[n]);
}, Nr = (e, t) => {
  if (t)
    for (const n in t)
      Qu(e, t, n);
}, Qu = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, Jy = (e, ...t) => typeof e == "function" ? hi(xi, e, ...t) : hi(() => Qy(xi(), e), ...t), ew = Jy({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), _ = (...e) => ew(Vu(e)), je = (e, t = {}) => {
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
}, tw = oe(
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
), nw = oe(
  `focus:bg-interactive-neutral-hover px-md h-10 py-1.5 relative flex
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
), rw = S.forwardRef(
  ({
    children: e,
    onSelect: t,
    disabled: n,
    intent: r = "default",
    icon: o,
    className: a,
    ...s
  }, i) => {
    const l = {
      ref: i,
      className: _(nw({ intent: r }), a),
      ...s
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), /* @__PURE__ */ c.jsxs(s0, { ...l, children: [
      je(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
rw.displayName = "DropdownItem";
const ow = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  i0,
  {
    ref: n,
    className: _(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
ow.displayName = "DropdownSeparator";
const aw = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  a0,
  {
    ref: r,
    className: _(
      "text-body-secondary px-xs py-1.5 text-sm font-semibold",
      t
    ),
    ...n,
    children: e
  }
));
aw.displayName = "DropdownLabel";
const Ju = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(r0, { children: /* @__PURE__ */ c.jsx(
  o0,
  {
    ref: o,
    className: _(tw({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Ju.displayName = "DropdownContent";
const ef = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(t0, { ...a, children: e });
};
ef.displayName = "Dropdown";
const tf = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  n0,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
tf.displayName = "DropdownTrigger";
const rN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(ef, { children: [
  /* @__PURE__ */ c.jsx(
    tf,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(sp, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ c.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ c.jsx(
          Zr,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ c.jsxs(Ju, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), nf = S.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Ts,
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
    Ts,
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
nf.displayName = "Accordion";
const rf = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    Kp,
    {
      ref: n,
      className: _(
        `bg-surface-primary rounded-sm mt-2 first:mt-0 overflow-hidden
        data-[disabled]:opacity-30`,
        e
      ),
      ...t
    }
  )
);
rf.displayName = "AccordionItem";
const of = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(qp, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Xp,
  {
    ref: r,
    className: _(
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
        Zr,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
of.displayName = "AccordionTrigger";
const af = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Zp,
  {
    ref: r,
    className: _(
      "text-body-secondary px-md pt-xs pb-md overflow-hidden",
      e
    ),
    ...n,
    children: t
  }
));
af.displayName = "AccordionContent";
const oN = Object.assign(nf, {
  Item: rf,
  Trigger: of,
  Content: af
}), bi = oe(
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
), sw = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? lp : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Qr,
      {
        className: _(bi({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: _(bi({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && je(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
sw.displayName = "Badge";
const iw = oe("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Xo = oe(
  `text-body-primary hover:text-interactive-primary-hover
  focus-visible:ring-interactive-focused rounded transition-colors
  focus-visible:ring-2 focus-visible:outline-none`,
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
), cw = oe("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), lw = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Bi,
    maxItems: r,
    className: o,
    "aria-label": a = "breadcrumb",
    ...s
  }, i) => {
    let l = e;
    if (r && e.length > r) {
      const d = e[0], f = e.slice(-(r - 1));
      l = [d, { label: "…" }, ...f];
    }
    return /* @__PURE__ */ c.jsx(
      "nav",
      {
        ref: i,
        "aria-label": a,
        className: _(iw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 flex list-none items-center", children: l.map((d, f) => {
          const m = f === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: _(Xo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: _(
                  Xo({ isActive: m })
                ),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: _(Xo({ isActive: !0 })),
                "aria-current": m ? "page" : void 0,
                children: d.label
              }
            ) }),
            !m && /* @__PURE__ */ c.jsx(
              "li",
              {
                className: "flex items-center",
                "aria-hidden": "true",
                role: "presentation",
                children: /* @__PURE__ */ c.jsx(
                  n,
                  {
                    className: _(cw({ size: t }))
                  }
                )
              }
            )
          ] }, `${d.label}-${f}`);
        }) })
      }
    );
  }
);
lw.displayName = "Breadcrumbs";
const dw = oe(
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
), sf = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    k0,
    {
      ref: s,
      className: _(dw({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        N0,
        {
          className: _(
            "bg-shape-accent-green-strong h-full transition-transform",
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
sf.displayName = "ProgressIndicator.Linear";
const uw = oe("flex items-center", {
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
}), fw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Kr = {
  sm: 12,
  md: 10
}, yi = {
  sm: (50 - Kr.sm / 2).toString(),
  md: (50 - Kr.md / 2).toString()
}, cf = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: _(uw({ size: t, layout: e }), r),
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
            className: _(fw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: yi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Kr[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: yi[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: Kr[t],
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
cf.displayName = "ProgressIndicator.Circular";
const Ss = {
  Linear: sf,
  Circular: cf
}, Zo = oe(
  `gap-xxs rounded font-normal box-border inline-flex cursor-pointer
  items-center justify-center border decoration-1 focus-visible:ring-4
  focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline`,
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
), Er = oe("", {
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
}), Ne = S.forwardRef(
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
  }, f) => {
    const m = a ? Qr : "button", p = !!((r || o) && !l && !(r && o)), h = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: _(
          Zo({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            je(r, {
              className: _(
                Er({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            je(o, {
              className: _(
                Er({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Ss.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      m,
      {
        ref: f,
        className: _(
          Zo({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          je(r, {
            className: _(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          je(o, {
            className: _(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      m,
      {
        ref: f,
        className: _(
          Zo({ intent: e, size: t, textOnly: h, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
Ne.displayName = "Button";
function mw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Qo = {}, Fn = {};
function Wt(e, t) {
  try {
    const r = (Qo[e] || (Qo[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Fn ? Fn[r] : wi(r, r.split(":"));
  } catch {
    if (e in Fn) return Fn[e];
    const n = e == null ? void 0 : e.match(pw);
    return n ? wi(e, n.slice(1)) : NaN;
  }
}
const pw = /([+-]\d\d):?(\d\d)?/;
function wi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Fn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Wt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), lf(this), Ma(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new dt(...n, t) : new dt(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new dt(+this, t);
  }
  getTimezoneOffset() {
    const t = -Wt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ma(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ci = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ci.test(e)) return;
  const t = e.replace(Ci, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), hw(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ma(this), +this;
  }));
});
function Ma(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Wt(e.timeZone, e) * 60));
}
function hw(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), lf(e);
}
function lf(e) {
  const t = Wt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const f = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, m = Math.round(-(Wt(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const p = Wt(e.timeZone, e), h = p > 0 ? Math.floor(p) : Math.ceil(p), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - h, g = h !== n, w = v - l;
  if (g && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = Wt(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), k = h - y;
    k && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + k), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + k));
  }
}
class Oe extends dt {
  //#region static
  static tz(t, ...n) {
    return n.length ? new Oe(...n, t) : new Oe(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${mw(this.timeZone, this)})`;
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
    return new Oe(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Oe(+new Date(t), this.timeZone);
  }
  //#endregion
}
const df = 6048e5, vw = 864e5, Si = Symbol.for("constructDateFrom");
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Si in e ? e[Si](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  return Ee(t || e, e);
}
function uf(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ee(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function ff(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Ee(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = Ee(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let gw = {};
function ar() {
  return gw;
}
function pn(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Yn(e, t) {
  return pn(e, { ...t, weekStartsOn: 1 });
}
function mf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ee(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Yn(o), s = Ee(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Yn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function ki(e) {
  const t = ge(e), n = new Date(
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
function Cn(e, ...t) {
  const n = Ee.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Gn(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function pf(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Gn(r), s = Gn(o), i = +a - ki(a), l = +s - ki(s);
  return Math.round((i - l) / vw);
}
function xw(e, t) {
  const n = mf(e, t), r = Ee(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Yn(r);
}
function bw(e, t, n) {
  return uf(e, t * 7, n);
}
function yw(e, t, n) {
  return ff(e, t * 12, n);
}
function ww(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function Cw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function Sw(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Gn(r) == +Gn(o);
}
function hf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function kw(e) {
  return !(!hf(e) && typeof e != "number" || isNaN(+ge(e)));
}
function Nw(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Ew(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Mw(e, t) {
  const [n, r] = Cn(e, t.start, t.end);
  return { start: n, end: r };
}
function Pw(e, t) {
  const { start: n, end: r } = Mw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Ee(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Rw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Aw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function vf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function gf(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Dw(e, t) {
  return gf(e, { ...t, weekStartsOn: 1 });
}
const _w = {
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
}, Ow = (e, t, n) => {
  let r;
  const o = _w[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function dn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const jw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Iw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Tw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, $w = {
  date: dn({
    formats: jw,
    defaultWidth: "full"
  }),
  time: dn({
    formats: Iw,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: Tw,
    defaultWidth: "full"
  })
}, Fw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ww = (e, t, n, r) => Fw[e];
function it(e) {
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
const Lw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Vw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Bw = {
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
}, zw = {
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
}, Hw = {
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
}, Yw = {
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
}, Gw = (e, t) => {
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
}, Uw = {
  ordinalNumber: Gw,
  era: it({
    values: Lw,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: Vw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: it({
    values: Bw,
    defaultWidth: "wide"
  }),
  day: it({
    values: zw,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: Hw,
    defaultWidth: "wide",
    formattingValues: Yw,
    defaultFormattingWidth: "wide"
  })
};
function ct(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? qw(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Kw(i, (m) => m.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(d)
    ) : d;
    const f = t.slice(s.length);
    return { value: d, rest: f };
  };
}
function Kw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function qw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function xf(e) {
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
const Xw = /^(\d+)(th|st|nd|rd)?/i, Zw = /\d+/i, Qw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Jw = {
  any: [/^b/i, /^(a|c)/i]
}, e1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, t1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, n1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, r1 = {
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
}, o1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, a1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, s1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, i1 = {
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
}, c1 = {
  ordinalNumber: xf({
    matchPattern: Xw,
    parsePattern: Zw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ct({
    matchPatterns: Qw,
    defaultMatchWidth: "wide",
    parsePatterns: Jw,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: e1,
    defaultMatchWidth: "wide",
    parsePatterns: t1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: n1,
    defaultMatchWidth: "wide",
    parsePatterns: r1,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: o1,
    defaultMatchWidth: "wide",
    parsePatterns: a1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: s1,
    defaultMatchWidth: "any",
    parsePatterns: i1,
    defaultParseWidth: "any"
  })
}, Do = {
  code: "en-US",
  formatDistance: Ow,
  formatLong: $w,
  formatRelative: Ww,
  localize: Uw,
  match: c1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function l1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return pf(n, vf(n)) + 1;
}
function bf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +Yn(n) - +xw(n);
  return Math.round(r / df) + 1;
}
function yf(e, t) {
  var f, m, p, h;
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ar(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = Ee((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = pn(s, t), l = Ee((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = pn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function d1(e, t) {
  var i, l, d, f;
  const n = ar(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = yf(e, t), a = Ee((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), pn(a, t);
}
function wf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +pn(n, t) - +d1(n, t);
  return Math.round(r / df) + 1;
}
function he(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const St = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return he(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : he(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return he(e.getDate(), t.length);
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
    return he(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return he(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return he(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return he(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return he(o, t.length);
  }
}, on = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ni = {
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
    return St.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = yf(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return he(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : he(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = mf(e);
    return he(n, t.length);
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
    return he(n, t.length);
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
        return he(r, 2);
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
        return he(r, 2);
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
        return St.M(e, t);
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
        return he(r + 1, 2);
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
    const o = wf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : he(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = bf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : he(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : St.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = l1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : he(r, t.length);
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
        return he(a, 2);
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
        return he(a, t.length);
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
        return he(o, t.length);
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
    switch (r === 12 ? o = on.noon : r === 0 ? o = on.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = on.evening : r >= 12 ? o = on.afternoon : r >= 4 ? o = on.morning : o = on.night, t) {
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
    return St.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : St.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : he(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : St.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : St.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return St.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Mi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Ft(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Ft(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Mi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Ft(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Ft(r, ":");
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
        return "GMT" + Ei(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Ft(r, ":");
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
        return "GMT" + Ei(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Ft(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return he(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return he(+e, t.length);
  }
};
function Ei(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + he(a, 2);
}
function Mi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + he(Math.abs(e) / 60, 2) : Ft(e, t);
}
function Ft(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = he(Math.trunc(r / 60), 2), a = he(r % 60, 2);
  return n + o + t + a;
}
const Pi = (e, t) => {
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
}, Cf = (e, t) => {
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
}, u1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Pi(e, t);
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
  return a.replace("{{date}}", Pi(r, t)).replace("{{time}}", Cf(o, t));
}, f1 = {
  p: Cf,
  P: u1
}, m1 = /^D+$/, p1 = /^Y+$/, h1 = ["D", "DD", "YY", "YYYY"];
function v1(e) {
  return m1.test(e);
}
function g1(e) {
  return p1.test(e);
}
function x1(e, t, n) {
  const r = b1(e, t, n);
  if (console.warn(r), h1.includes(e)) throw new RangeError(r);
}
function b1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const y1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, w1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, C1 = /^'([^]*?)'?$/, S1 = /''/g, k1 = /[a-zA-Z]/;
function N1(e, t, n) {
  var f, m, p, h, x, v, g, w;
  const r = ar(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Do, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = ge(e, n == null ? void 0 : n.in);
  if (!kw(i))
    throw new RangeError("Invalid time value");
  let l = t.match(w1).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const k = f1[y];
      return k(b, o.formatLong);
    }
    return b;
  }).join("").match(y1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: E1(b) };
    if (Ni[y])
      return { isToken: !0, value: b };
    if (y.match(k1))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && g1(y) || !(n != null && n.useAdditionalDayOfYearTokens) && v1(y)) && x1(y, t, String(e));
    const k = Ni[y[0]];
    return k(i, y, o.localize, d);
  }).join("");
}
function E1(e) {
  const t = e.match(C1);
  return t ? t[1].replace(S1, "'") : e;
}
function M1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ee(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function P1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getMonth();
}
function R1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getFullYear();
}
function A1(e, t) {
  return +ge(e) > +ge(t);
}
function D1(e, t) {
  return +ge(e) < +ge(t);
}
function _1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function O1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function j1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Ee(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = M1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function I1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ee(e, NaN) : (r.setFullYear(t), r);
}
const Ri = 5, T1 = 4;
function $1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ri * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ri : T1;
}
function Sf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function F1(e, t) {
  const n = Sf(e, t), r = $1(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Ge {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Oe.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Oe(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : uf(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : ff(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : bw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : yw(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : pf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Nw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Pw(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : F1(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Dw(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Ew(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : gf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Aw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : N1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : bf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : P1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : R1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : wf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : A1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : D1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : hf(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Sw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : _1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : O1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : ww(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Cw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : j1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : I1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Sf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Gn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Yn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Rw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : pn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : vf(r);
    }, this.options = { locale: Do, ...t }, this.overrides = n;
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
    return t && Ge.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Ge.yearFirstLocales.has(a))
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
Ge.yearFirstLocales = /* @__PURE__ */ new Set([
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
const pt = new Ge();
class kf {
  constructor(t, n, r = pt) {
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
class W1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class L1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function V1(e) {
  return S.createElement("button", { ...e });
}
function B1(e) {
  return S.createElement("span", { ...e });
}
function z1(e) {
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
function H1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function Y1(e) {
  const { day: t, modifiers: n, ...r } = e, o = S.useRef(null);
  return S.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), S.createElement("button", { ref: o, ...r });
}
var ne;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(ne || (ne = {}));
var we;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(we || (we = {}));
var Qe;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Qe || (Qe = {}));
var ze;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(ze || (ze = {}));
function G1(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[ne.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[ne.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: f }) => S.createElement(r.Option, { key: l, value: l, disabled: f }, d))),
    S.createElement(
      "span",
      { className: o[ne.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[ne.Chevron] })
    )
  );
}
function U1(e) {
  return S.createElement("div", { ...e });
}
function K1(e) {
  return S.createElement("div", { ...e });
}
function q1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function X1(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function Z1(e) {
  return S.createElement("table", { ...e });
}
function Q1(e) {
  return S.createElement("div", { ...e });
}
const Nf = Xr(void 0);
function sr() {
  const e = $r(Nf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function J1(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
function e2(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = sr(), f = ve((p) => {
    o && (n == null || n(p));
  }, [o, n]), m = ve((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return S.createElement(
    "nav",
    { ...a },
    S.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[ne.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: m },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[ne.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[ne.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: f },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[ne.Chevron] })
    )
  );
}
function t2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function n2(e) {
  return S.createElement("option", { ...e });
}
function r2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function o2(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function a2(e) {
  return S.createElement("select", { ...e });
}
function s2(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function i2(e) {
  return S.createElement("th", { ...e });
}
function c2(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function l2(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function d2(e) {
  return S.createElement("th", { ...e });
}
function u2(e) {
  return S.createElement("tbody", { ...e });
}
function f2(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
const m2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: V1,
  CaptionLabel: B1,
  Chevron: z1,
  Day: H1,
  DayButton: Y1,
  Dropdown: G1,
  DropdownNav: U1,
  Footer: K1,
  Month: q1,
  MonthCaption: X1,
  MonthGrid: Z1,
  Months: Q1,
  MonthsDropdown: J1,
  Nav: e2,
  NextMonthButton: t2,
  Option: n2,
  PreviousMonthButton: r2,
  Root: o2,
  Select: a2,
  Week: s2,
  WeekNumber: l2,
  WeekNumberHeader: d2,
  Weekday: i2,
  Weekdays: c2,
  Weeks: u2,
  YearsDropdown: f2
}, Symbol.toStringTag, { value: "Module" }));
function gt(e, t, n = !1, r = pt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Ef(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ks(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Mf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Pf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Rf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Af(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function xt(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Af(i, n))
      return i.includes(e);
    if (ks(i))
      return gt(i, e, !1, n);
    if (Rf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Ef(i)) {
      const l = a(i.before, e), d = a(i.after, e), f = l > 0, m = d < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return Mf(i) ? a(e, i.after) > 0 : Pf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function p2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: f } = t, { isSameDay: m, isSameMonth: p, startOfMonth: h, isBefore: x, endOfMonth: v, isAfter: g } = o, w = n && h(n), b = r && v(r), y = {
    [we.focused]: [],
    [we.outside]: [],
    [we.disabled]: [],
    [we.hidden]: [],
    [we.today]: []
  }, k = {};
  for (const C of e) {
    const { date: M, displayMonth: N } = C, P = !!(N && !p(M, N)), T = !!(w && x(M, w)), B = !!(b && g(M, b)), F = !!(a && xt(M, a, o)), Y = !!(s && xt(M, s, o)) || T || B || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, Q = m(M, f ?? o.today());
    P && y.outside.push(C), F && y.disabled.push(C), Y && y.hidden.push(C), Q && y.today.push(C), i && Object.keys(i).forEach((I) => {
      const H = i == null ? void 0 : i[I];
      H && xt(M, H, o) && (k[I] ? k[I].push(C) : k[I] = [C]);
    });
  }
  return (C) => {
    const M = {
      [we.focused]: !1,
      [we.disabled]: !1,
      [we.hidden]: !1,
      [we.outside]: !1,
      [we.today]: !1
    }, N = {};
    for (const P in y) {
      const T = y[P];
      M[P] = T.some((B) => B === C);
    }
    for (const P in k)
      N[P] = k[P].some((T) => T === C);
    return {
      ...M,
      // custom modifiers should override all the previous ones
      ...N
    };
  };
}
function h2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[we[a]] ? o.push(t[we[a]]) : t[Qe[a]] && o.push(t[Qe[a]]), o), [t[ne.Day]]);
}
function v2(e) {
  return {
    ...m2,
    ...e
  };
}
function g2(e) {
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
function Df() {
  const e = {};
  for (const t in ne)
    e[ne[t]] = `rdp-${ne[t]}`;
  for (const t in we)
    e[we[t]] = `rdp-${we[t]}`;
  for (const t in Qe)
    e[Qe[t]] = `rdp-${Qe[t]}`;
  for (const t in ze)
    e[ze[t]] = `rdp-${ze[t]}`;
  return e;
}
function _f(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const x2 = _f;
function b2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "d");
}
function y2(e, t = pt) {
  return t.format(e, "LLLL");
}
function w2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccccc");
}
function C2(e, t = pt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function S2() {
  return "";
}
function Of(e, t = pt) {
  return t.format(e, "yyyy");
}
const k2 = Of, N2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: _f,
  formatDay: b2,
  formatMonthCaption: x2,
  formatMonthDropdown: y2,
  formatWeekNumber: C2,
  formatWeekNumberHeader: S2,
  formatWeekdayName: w2,
  formatYearCaption: k2,
  formatYearDropdown: Of
}, Symbol.toStringTag, { value: "Module" }));
function E2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...N2,
    ...e
  };
}
function M2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), x = d(p), v = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: h, disabled: v };
  });
}
function P2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[ne.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function R2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function A2(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, addYears: i, getYear: l, isBefore: d, isSameYear: f } = r, m = a(e), p = s(t), h = [];
  let x = m;
  for (; d(x, p) || f(x, p); )
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
function jf(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const D2 = jf;
function If(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const _2 = If;
function O2(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function j2(e) {
  return "Choose the Month";
}
function I2() {
  return "";
}
function T2(e) {
  return "Go to the Next Month";
}
function $2(e) {
  return "Go to the Previous Month";
}
function F2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccc");
}
function W2(e, t) {
  return `Week ${e}`;
}
function L2(e) {
  return "Week Number";
}
function V2(e) {
  return "Choose the Year";
}
const B2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: _2,
  labelDay: D2,
  labelDayButton: jf,
  labelGrid: If,
  labelGridcell: O2,
  labelMonthDropdown: j2,
  labelNav: I2,
  labelNext: T2,
  labelPrevious: $2,
  labelWeekNumber: W2,
  labelWeekNumberHeader: L2,
  labelWeekday: F2,
  labelYearDropdown: V2
}, Symbol.toStringTag, { value: "Module" })), ir = (e) => e instanceof HTMLElement ? e : null, Jo = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], z2 = (e) => ir(e.querySelector("[data-animated-month]")), ea = (e) => ir(e.querySelector("[data-animated-caption]")), ta = (e) => ir(e.querySelector("[data-animated-weeks]")), H2 = (e) => ir(e.querySelector("[data-animated-nav]")), Y2 = (e) => ir(e.querySelector("[data-animated-weekdays]"));
function G2(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Nt(null), i = Nt(r), l = Nt(!1);
  Li(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const f = a.isSameMonth(r[0].date, d[0].date), m = a.isAfter(r[0].date, d[0].date), p = m ? n[ze.caption_after_enter] : n[ze.caption_before_enter], h = m ? n[ze.weeks_after_enter] : n[ze.weeks_before_enter], x = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (Jo(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const k = z2(y);
      k && y.contains(k) && y.removeChild(k);
      const C = ea(y);
      C && C.classList.remove(p);
      const M = ta(y);
      M && M.classList.remove(h);
    }), s.current = v) : s.current = null, l.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? Jo(x) : [], w = Jo(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = H2(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, k) => {
        const C = g[k];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const M = ea(y);
        M && M.classList.add(p);
        const N = ta(y);
        N && N.classList.add(h);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(p), N && N.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const T = Y2(C);
        T && (T.style.opacity = "0");
        const B = ea(C);
        B && (B.classList.add(m ? n[ze.caption_before_exit] : n[ze.caption_after_exit]), B.addEventListener("animationend", P));
        const F = ta(C);
        F && F.classList.add(m ? n[ze.weeks_before_exit] : n[ze.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function U2(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: x, endOfWeek: v, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, k = l ? w(o, r) : s ? b(o) : y(o), C = l ? p(a) : s ? h(x(a)) : v(x(a)), M = f(C, k), N = m(a, o) + 1, P = [];
  for (let F = 0; F <= M; F++) {
    const Y = d(k, F);
    if (t && g(Y, t))
      break;
    P.push(Y);
  }
  const B = (l ? 35 : 42) * N;
  if (i && P.length < B) {
    const F = B - P.length;
    for (let Y = 0; Y < F; Y++) {
      const Q = d(P[P.length - 1], 1);
      P.push(Q);
    }
  }
  return P;
}
function K2(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function q2(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Ai(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: f, startOfMonth: m } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = f(n, p);
  }
  return t && d(l, t) < 0 && (l = t), m(l);
}
function X2(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: p, startOfWeek: h } = r, x = e.reduce((v, g) => {
    const w = n.broadcastCalendar ? m(g, r) : n.ISOWeek ? p(g) : h(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), y = t.filter((N) => N >= w && N <= b), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < k) {
      const N = t.filter((P) => {
        const T = k - y.length;
        return P > b && P <= o(b, T);
      });
      y.push(...N);
    }
    const C = y.reduce((N, P) => {
      const T = n.ISOWeek ? d(P) : f(P), B = N.find((Y) => Y.weekNumber === T), F = new kf(P, g, r);
      return B ? B.days.push(F) : N.push(new L1(T, [F])), N;
    }, []), M = new W1(g, C);
    return v.push(M), v;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function Z2(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: f, today: m } = t, { fromYear: p, toYear: h, fromMonth: x, toMonth: v } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = f(h, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = f(p, 0, 1) : !n && g && (n = o(l(e.today ?? m(), -100))), r ? r = i(r) : h ? r = f(h, 11, 31) : !r && g && (r = d(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function Q2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, f = s(e);
  if (!t)
    return i(f, d);
  if (!(l(t, e) < a))
    return i(f, d);
}
function J2(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -d);
  if (!(l(f, t) <= 0))
    return i(f, -d);
}
function eC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function _o(e, t) {
  const [n, r] = Te(e);
  return [t === void 0 ? n : t, r];
}
function tC(e, t) {
  const [n, r] = Z2(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Ai(e, n, r, t), [i, l] = _o(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Lt(() => {
    const M = Ai(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const d = q2(i, r, e, t), f = U2(d, e.endMonth ? a(e.endMonth) : void 0, e, t), m = X2(d, f, e, t), p = eC(m), h = K2(m), x = J2(i, n, e, t), v = Q2(i, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (M) => p.some((N) => N.days.some((P) => P.isEqualTo(M))), y = (M) => {
    if (g)
      return;
    let N = o(M);
    n && N < o(n) && (N = o(n)), r && N > o(r) && (N = o(r)), l(N), w == null || w(N);
  };
  return {
    months: m,
    weeks: p,
    days: h,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: v,
    goToMonth: y,
    goToDay: (M) => {
      b(M) || y(M.date);
    }
  };
}
var at;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(at || (at = {}));
function Di(e) {
  return !e[we.disabled] && !e[we.hidden] && !e[we.outside];
}
function nC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Di(i) && (i[we.focused] && a < at.FocusedModifier ? (o = s, a = at.FocusedModifier) : r != null && r.isEqualTo(s) && a < at.LastFocused ? (o = s, a = at.LastFocused) : n(s.date) && a < at.Selected ? (o = s, a = at.Selected) : i[we.today] && a < at.Today && (o = s, a = at.Today));
  }
  return o || (o = e.find((s) => Di(t(s)))), o;
}
function rC(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: f, addWeeks: m, addYears: p, endOfBroadcastWeek: h, endOfISOWeek: x, endOfWeek: v, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: k } = s;
  let M = {
    day: d,
    week: m,
    month: f,
    year: p,
    startOfWeek: (N) => l ? b(N, s) : i ? y(N) : k(N),
    endOfWeek: (N) => l ? h(N) : i ? x(N) : v(N)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? M = g([r, M]) : t === "after" && o && (M = w([o, M])), M;
}
function Tf(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = rC(e, t, n.date, r, o, a, s), d = !!(a.disabled && xt(l, a.disabled, s)), f = !!(a.hidden && xt(l, a.hidden, s)), m = l, p = new kf(l, m, s);
  return !d && !f ? p : Tf(e, t, p, r, o, a, s, i + 1);
}
function oC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Te(), l = nC(t.days, n, r || (() => !1), s), [d, f] = Te(a ? l : void 0);
  return {
    isFocusTarget: (v) => !!(l != null && l.isEqualTo(v)),
    setFocused: f,
    focused: d,
    blur: () => {
      i(d), f(void 0);
    },
    moveFocus: (v, g) => {
      if (!d)
        return;
      const w = Tf(v, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), f(w));
    }
  };
}
function aC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _o(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (h) => (i == null ? void 0 : i.some((x) => l(x, h))) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (h, x, v) => {
      let g = [...i ?? []];
      if (d(h)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        g = i == null ? void 0 : i.filter((w) => !l(w, h));
      } else
        (i == null ? void 0 : i.length) === m ? g = [h] : g = [...g, h];
      return o || s(g), o == null || o(g, h, x, v), g;
    },
    isSelected: d
  };
}
function sC(e, t, n = 0, r = 0, o = !1, a = pt) {
  const { from: s, to: i } = t || {}, { isSameDay: l, isAfter: d, isBefore: f } = a;
  let m;
  if (!s && !i)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    l(s, e) ? n === 0 ? m = { from: s, to: e } : o ? m = { from: s, to: void 0 } : m = void 0 : f(e, s) ? m = { from: e, to: s } : m = { from: s, to: e };
  else if (s && i)
    if (l(s, e) && l(i, e))
      o ? m = { from: s, to: i } : m = void 0;
    else if (l(s, e))
      m = { from: s, to: n > 0 ? void 0 : e };
    else if (l(i, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, s))
      m = { from: e, to: i };
    else if (d(e, s))
      m = { from: s, to: e };
    else if (d(e, i))
      m = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (m != null && m.from && (m != null && m.to)) {
    const p = a.differenceInCalendarDays(m.to, m.from);
    r > 0 && p > r ? m = { from: e, to: void 0 } : n > 1 && p < n && (m = { from: e, to: void 0 });
  }
  return m;
}
function iC(e, t, n = pt) {
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
function _i(e, t, n = pt) {
  return gt(e, t.from, !1, n) || gt(e, t.to, !1, n) || gt(t, e.from, !1, n) || gt(t, e.to, !1, n);
}
function cC(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? gt(e, i, !1, n) : Af(i, n) ? i.some((l) => gt(e, l, !1, n)) : ks(i) ? i.from && i.to ? _i(e, { from: i.from, to: i.to }, n) : !1 : Rf(i) ? iC(e, i.dayOfWeek, n) : Ef(i) ? n.isAfter(i.before, i.after) ? _i(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : xt(e.from, i, n) || xt(e.to, i, n) : Mf(i) || Pf(i) ? xt(e.from, i, n) || xt(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const l = n.differenceInCalendarDays(e.to, e.from);
    for (let d = 0; d <= l; d++) {
      if (s.some((f) => f(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function lC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = _o(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, h, x) => {
      const { min: v, max: g } = e, w = p ? sC(p, d, v, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && cC({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), s || l(w), s == null || s(w, p, h, x), w;
    },
    isSelected: (p) => d && gt(d, p, !1, t)
  };
}
function dC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = _o(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (m, p, h) => {
      let x = m;
      return !r && i && i && l(m, i) && (x = void 0), o || s(x), o == null || o(x, m, p, h), x;
    },
    isSelected: (m) => i ? l(i, m) : !1
  };
}
function uC(e, t) {
  const n = dC(e, t), r = aC(e, t), o = lC(e, t);
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
function fC(e) {
  var Pn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Oe(t.today, t.timeZone)), t.month && (t.month = new Oe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Oe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Oe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Oe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Oe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Pn = t.selected) == null ? void 0 : Pn.map((ie) => new Oe(ie, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Oe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Oe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Rr(() => {
    const ie = { ...Do, ...t.locale };
    return {
      dateLib: new Ge({
        locale: ie,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: v2(t.components),
      formatters: E2(t.formatters),
      labels: { ...B2, ...t.labels },
      locale: ie,
      classNames: { ...Df(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: f, numberOfMonths: m = 1, onDayBlur: p, onDayClick: h, onDayFocus: x, onDayKeyDown: v, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: k, styles: C } = t, { formatCaption: M, formatDay: N, formatMonthDropdown: P, formatWeekNumber: T, formatWeekNumberHeader: B, formatWeekdayName: F, formatYearDropdown: Y } = r, Q = tC(t, a), { days: I, months: H, navStart: V, navEnd: U, previousMonth: D, nextMonth: $, goToMonth: K } = Q, R = p2(I, t, V, U, a), { isSelected: E, select: A, selected: j } = uC(t, a) ?? {}, { blur: G, focused: W, isFocusTarget: O, moveFocus: X, setFocused: J } = oC(t, Q, R, E ?? (() => !1), a), { labelDayButton: re, labelGridcell: de, labelGrid: ue, labelMonthDropdown: Me, labelNav: Ie, labelPrevious: rt, labelNext: Xe, labelWeekday: ot, labelWeekNumber: Zt, labelWeekNumberHeader: We, labelYearDropdown: It } = o, dr = Rr(() => R2(a, t.ISOWeek), [a, t.ISOWeek]), Sn = d !== void 0 || h !== void 0, Qt = ve(() => {
    D && (K(D), y == null || y(D));
  }, [D, K, y]), Jt = ve(() => {
    $ && (K($), b == null || b($));
  }, [K, $, b]), kn = ve((ie, be) => (ae) => {
    ae.preventDefault(), ae.stopPropagation(), J(ie), A == null || A(ie.date, be, ae), h == null || h(ie.date, be, ae);
  }, [A, h, J]), Nn = ve((ie, be) => (ae) => {
    J(ie), x == null || x(ie.date, be, ae);
  }, [x, J]), ur = ve((ie, be) => (ae) => {
    G(), p == null || p(ie.date, be, ae);
  }, [G, p]), Ue = ve((ie, be) => (ae) => {
    const xe = {
      ArrowLeft: [
        ae.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        ae.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [ae.shiftKey ? "year" : "week", "after"],
      ArrowUp: [ae.shiftKey ? "year" : "week", "before"],
      PageUp: [ae.shiftKey ? "year" : "month", "before"],
      PageDown: [ae.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (xe[ae.key]) {
      ae.preventDefault(), ae.stopPropagation();
      const [Ae, pe] = xe[ae.key];
      X(Ae, pe);
    }
    v == null || v(ie.date, be, ae);
  }, [X, v, t.dir]), Ke = ve((ie, be) => (ae) => {
    g == null || g(ie.date, be, ae);
  }, [g]), En = ve((ie, be) => (ae) => {
    w == null || w(ie.date, be, ae);
  }, [w]), Ps = ve((ie) => (be) => {
    const ae = Number(be.target.value), xe = a.setMonth(a.startOfMonth(ie), ae);
    K(xe);
  }, [a, K]), ht = ve((ie) => (be) => {
    const ae = Number(be.target.value), xe = a.setYear(a.startOfMonth(ie), ae);
    K(xe);
  }, [a, K]), { className: Be, style: Tt } = Rr(() => ({
    className: [i[ne.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[ne.Root], ...t.style }
  }), [i, t.className, t.style, C]), Io = g2(t), fr = Nt(null);
  G2(fr, !!t.animate, {
    classNames: i,
    months: H,
    focused: W,
    dateLib: a
  });
  const Mn = {
    dayPickerProps: t,
    selected: j,
    select: A,
    isSelected: E,
    months: H,
    nextMonth: $,
    previousMonth: D,
    goToMonth: K,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return S.createElement(
    Nf.Provider,
    { value: Mn },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? fr : void 0, className: Be, style: Tt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Io },
      S.createElement(
        n.Months,
        { className: i[ne.Months], style: C == null ? void 0 : C[ne.Months] },
        !t.hideNavigation && !f && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": Ie(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: D, nextMonth: $ }),
        H.map((ie, be) => S.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[ne.Month],
            style: C == null ? void 0 : C[ne.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: be,
            displayIndex: be,
            calendarMonth: ie
          },
          f === "around" && !t.hideNavigation && be === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[ne.PreviousMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": rt(D), onClick: Qt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: D ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[ne.MonthCaption], style: C == null ? void 0 : C[ne.MonthCaption], calendarMonth: ie, displayIndex: be }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[ne.Dropdowns], style: C == null ? void 0 : C[ne.Dropdowns] },
            (() => {
              const ae = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[ne.MonthsDropdown], "aria-label": Me(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Ps(ie.date), options: M2(ie.date, V, U, r, a), style: C == null ? void 0 : C[ne.Dropdown], value: a.getMonth(ie.date) }) : S.createElement("span", { key: "month" }, P(ie.date, a)), xe = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[ne.YearsDropdown], "aria-label": It(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: ht(ie.date), options: A2(V, U, r, a, !!t.reverseYears), style: C == null ? void 0 : C[ne.Dropdown], value: a.getYear(ie.date) }) : S.createElement("span", { key: "year" }, Y(ie.date, a));
              return a.getMonthYearOrder() === "year-first" ? [xe, ae] : [ae, xe];
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
            } }, M(ie.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            S.createElement(n.CaptionLabel, { className: i[ne.CaptionLabel], role: "status", "aria-live": "polite" }, M(ie.date, a.options, a))
          )),
          f === "around" && !t.hideNavigation && be === m - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[ne.NextMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": Xe($), onClick: Jt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: $ ? void 0 : !0, className: i[ne.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          be === m - 1 && f === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[ne.Nav], style: C == null ? void 0 : C[ne.Nav], "aria-label": Ie(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: D, nextMonth: $ }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": ue(ie.date, a.options, a) || void 0, className: i[ne.MonthGrid], style: C == null ? void 0 : C[ne.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[ne.Weekdays], style: C == null ? void 0 : C[ne.Weekdays] },
              k && S.createElement(n.WeekNumberHeader, { "aria-label": We(a.options), className: i[ne.WeekNumberHeader], style: C == null ? void 0 : C[ne.WeekNumberHeader], scope: "col" }, B()),
              dr.map((ae) => S.createElement(n.Weekday, { "aria-label": ot(ae, a.options, a), className: i[ne.Weekday], key: String(ae), style: C == null ? void 0 : C[ne.Weekday], scope: "col" }, F(ae, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[ne.Weeks], style: C == null ? void 0 : C[ne.Weeks] }, ie.weeks.map((ae) => S.createElement(
              n.Week,
              { className: i[ne.Week], key: ae.weekNumber, style: C == null ? void 0 : C[ne.Week], week: ae },
              k && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: ae, style: C == null ? void 0 : C[ne.WeekNumber], "aria-label": Zt(ae.weekNumber, {
                locale: s
              }), className: i[ne.WeekNumber], scope: "row", role: "rowheader" }, T(ae.weekNumber, a)),
              ae.days.map((xe) => {
                const { date: Ae } = xe, pe = R(xe);
                if (pe[we.focused] = !pe.hidden && !!(W != null && W.isEqualTo(xe)), pe[Qe.selected] = (E == null ? void 0 : E(Ae)) || pe.selected, ks(j)) {
                  const { from: q, to: ce } = j;
                  pe[Qe.range_start] = !!(q && ce && a.isSameDay(Ae, q)), pe[Qe.range_end] = !!(q && ce && a.isSameDay(Ae, ce)), pe[Qe.range_middle] = gt(j, Ae, !0, a);
                }
                const Rn = P2(pe, C, t.modifiersStyles), mr = h2(pe, i, t.modifiersClassNames), L = !Sn && !pe.hidden ? de(Ae, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format(Ae, "yyyy-MM-dd")}_${a.format(xe.displayMonth, "yyyy-MM")}`, day: xe, modifiers: pe, className: mr.join(" "), style: Rn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": L, "data-day": a.format(Ae, "yyyy-MM-dd"), "data-month": xe.outside ? a.format(Ae, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": xe.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && Sn ? S.createElement(n.DayButton, { className: i[ne.DayButton], style: C == null ? void 0 : C[ne.DayButton], type: "button", day: xe, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: O(xe) ? 0 : -1, "aria-label": re(Ae, pe, a.options, a), onClick: kn(xe, pe), onBlur: ur(xe, pe), onFocus: Nn(xe, pe), onKeyDown: Ue(xe, pe), onMouseEnter: Ke(xe, pe), onMouseLeave: En(xe, pe) }, N(Ae, a.options, a)) : !pe.hidden && N(xe.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      S.createElement(n.Footer, { className: i[ne.Footer], style: C == null ? void 0 : C[ne.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const mC = {
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
}, pC = (e, t, n) => {
  n = n || {};
  let r;
  const o = mC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, hC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, vC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, gC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, xC = {
  date: dn({
    formats: hC,
    defaultWidth: "full"
  }),
  time: dn({
    formats: vC,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: gC,
    defaultWidth: "full"
  })
}, bC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, yC = (e, t, n, r) => bC[e], wC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, CC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, SC = {
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
}, kC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, NC = {
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
}, EC = {
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
}, MC = (e, t) => {
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
}, PC = {
  ordinalNumber: MC,
  era: it({
    values: wC,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: CC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: it({
    values: SC,
    defaultWidth: "wide"
  }),
  day: it({
    values: kC,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: NC,
    defaultWidth: "wide",
    formattingValues: EC,
    defaultFormattingWidth: "wide"
  })
}, RC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, AC = /\d+/i, DC = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, _C = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, OC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, jC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, IC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, TC = {
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
}, $C = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, FC = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, WC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, LC = {
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
}, VC = {
  ordinalNumber: xf({
    matchPattern: RC,
    parsePattern: AC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ct({
    matchPatterns: DC,
    defaultMatchWidth: "wide",
    parsePatterns: _C,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: OC,
    defaultMatchWidth: "wide",
    parsePatterns: jC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: IC,
    defaultMatchWidth: "wide",
    parsePatterns: TC,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: $C,
    defaultMatchWidth: "wide",
    parsePatterns: FC,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: WC,
    defaultMatchWidth: "any",
    parsePatterns: LC,
    defaultParseWidth: "any"
  })
}, BC = {
  code: "ja",
  formatDistance: pC,
  formatLong: xC,
  formatRelative: yC,
  localize: PC,
  match: VC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, zC = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Mr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, $f = S.forwardRef(
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
    inline: f = !1,
    locale: m = "ja",
    ...p
  }, h) => {
    const [x, v] = S.useState(
      () => Mr(n || null)
    ), g = e !== void 0, w = g ? Mr(e) : x, b = S.useMemo(
      () => Mr(r || null),
      [r]
    ), y = S.useMemo(
      () => Mr(o || null),
      [o]
    ), k = S.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = (M) => {
      const N = M || null;
      g || v(N), t == null || t(N);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: h,
        className: _(zC(f), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          fC,
          {
            animate: !1,
            mode: "single",
            selected: w || void 0,
            onSelect: C,
            locale: m === "ja" ? BC : Do,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (M) => `${M.getFullYear()}${m === "ja" ? "年" : ""}`
            },
            disabled: k ? [
              ...b ? [{ before: b }] : [],
              ...y ? [{ after: y }] : [],
              ...a ? [{ before: /* @__PURE__ */ new Date("3000-01-01") }] : []
            ] : [
              {
                before: /* @__PURE__ */ new Date("1900-01-01"),
                after: /* @__PURE__ */ new Date("1899-12-31")
              }
            ],
            showOutsideDays: i,
            fixedWeeks: l,
            defaultMonth: d || w || /* @__PURE__ */ new Date(),
            autoFocus: !1,
            classNames: (() => {
              const M = Df(), N = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${M.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
$f.displayName = "Calendar";
const Oi = oe(
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
), HC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Ff = S.forwardRef(
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
    const d = r ? Qr : "a", m = HC[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: _(Oi({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: _(Oi({ intent: t, size: n }), e),
        ...i,
        children: [
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: je(o, { size: m }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: je(a, { size: m }) })
        ]
      }
    );
  }
);
Ff.displayName = "TextLink";
const YC = oe(
  "rounded-sm gap-xxs flex items-start overflow-hidden border",
  {
    variants: {
      intent: {
        info: "bg-surface-inprogress border-surface-info",
        success: "bg-surface-success border-surface-success",
        warning: "bg-surface-warning border-surface-warning",
        alert: "bg-surface-alert border-surface-alert"
      },
      size: {
        default: "pt-xs pr-sm pb-xs pl-xs",
        large: "pt-sm pr-lg pb-sm pl-md"
      }
    },
    defaultVariants: {
      intent: "info",
      size: "default"
    }
  }
), GC = oe("shrink-0", {
  variants: {
    intent: {
      info: "text-shape-status-info",
      success: "text-shape-status-success",
      warning: "text-shape-status-warning",
      alert: "text-shape-status-alert"
    },
    size: {
      default: "size-5",
      large: "size-5"
    }
  },
  defaultVariants: {
    intent: "info",
    size: "default"
  }
}), UC = oe("text-body-primary font-bold text-md"), KC = oe(
  "text-body-primary font-normal leading-6 text-md"
), qC = oe("min-w-0 flex flex-1 flex-col", {
  variants: {
    size: {
      default: "gap-xxxs",
      large: "gap-xxs"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), XC = {
  info: Ar,
  success: Ui,
  warning: Ar,
  alert: Ar
}, ZC = S.forwardRef(
  ({
    className: e,
    intent: t = "info",
    size: n = "default",
    title: r,
    description: o,
    children: a,
    action: s,
    icon: i,
    ...l
  }, d) => {
    const f = i || XC[t];
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: d,
        className: _(YC({ intent: t, size: n }), e),
        ...l,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: _(GC({ intent: t, size: n }), "top-0.5 relative"), children: je(f, { className: "size-full" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: _(qC({ size: n })), children: [
            r && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsx("div", { className: _(UC()), children: r }),
              s && /* @__PURE__ */ c.jsx(
                Ff,
                {
                  onClick: s.onClick,
                  intent: "primary",
                  size: "sm",
                  asChild: !0,
                  children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
                }
              )
            ] }),
            (a || o) && /* @__PURE__ */ c.jsx("div", { className: _(KC()), children: a || o })
          ] })
        ]
      }
    );
  }
);
ZC.displayName = "Callout";
const QC = oe("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), JC = oe(
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
), jr = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: _(QC({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      Vc,
      {
        id: l,
        className: _(JC({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          zc,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(Qm, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(Vi, { style: { strokeWidth: 3 } })
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
jr.displayName = "Checkbox";
const eS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: _("gap-xs flex flex-col", t), children: e });
eS.displayName = "CheckboxGroup";
const tS = oe(
  `px-sm py-xs rounded-sm text-sm font-normal min-w-36 max-w-110 z-tooltip
  w-full leading-[1.5] tracking-[0] break-all`,
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
), aN = vy, Vt = S.forwardRef(
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
    onOpenChange: f,
    className: m,
    ...p
  }, h) => t ? /* @__PURE__ */ c.jsxs(
    gy,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...f !== void 0 && { onOpenChange: f },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(xy, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(by, { children: /* @__PURE__ */ c.jsx(
          yy,
          {
            ref: h,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: _(tS({ intent: n }), m),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
Vt.displayName = "Tooltip";
const nS = oe("space-y-md w-full bg-inherit", {
  variants: {}
}), Wf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("div", { ref: r, className: _(nS(), e), ...n, children: t })
);
Wf.displayName = "DataSheet";
const rS = oe(
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
), Lf = S.forwardRef(
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
  }, f) => {
    const m = s || i || l;
    return /* @__PURE__ */ c.jsxs(
      "header",
      {
        ref: f,
        className: _(
          rS({ variant: t }),
          m && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: _(r && "line-through opacity-60"), children: n }),
          m && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
            s && /* @__PURE__ */ c.jsx(
              Vt,
              {
                content: r ? null : (a == null ? void 0 : a.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: zi,
                    disabled: r,
                    onClick: s,
                    className: _(
                      "text-shape-primary [&_svg]:!size-5",
                      r && "cursor-not-allowed!"
                    )
                  }
                )
              }
            ),
            i && !r && /* @__PURE__ */ c.jsx(
              Vt,
              {
                content: (a == null ? void 0 : a.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Gi,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            l && r && /* @__PURE__ */ c.jsx(
              Vt,
              {
                content: (a == null ? void 0 : a.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Hi,
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
Lf.displayName = "DataSheetHeader";
const Vf = S.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "section",
    {
      ref: r,
      className: _("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
Vf.displayName = "DataSheetSection";
const oS = oe("py-sm", {
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
}), aS = oe(
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
), sS = oe(
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
), Bf = S.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    ref: s,
    className: _(
      oS({ orientation: n, spacing: r }),
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ c.jsx("div", { className: _(aS({ orientation: n })), children: t }),
      /* @__PURE__ */ c.jsx("div", { className: _(sS({ orientation: n })), children: o })
    ]
  }
));
Bf.displayName = "DataSheetKeyValue";
const iS = {
  actionsColumnParts: 10
}, zf = S.createContext(
  iS
), cS = () => S.useContext(zf), Hf = S.createContext({}), Yf = () => S.useContext(
  Hf
);
function lS({
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
    zf.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: _("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const Gf = S.forwardRef(lS);
Gf.displayName = "DataSheetTable";
const Uf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: _("", e), ...n, children: t }));
Uf.displayName = "DataSheetTableHeader";
const Kf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: _("", e), ...n, children: t }));
Kf.displayName = "DataSheetTableBody";
function dS({
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
    let m = 0;
    return S.Children.forEach(s, (p) => {
      S.isValidElement(p) && typeof p.props.parts == "number" && (m += p.props.parts);
    }), m > 0 ? m : void 0;
  }, [s]), f = {
    ...n !== void 0 && { item: n },
    ...d !== void 0 && { totalParts: d },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...a && { tooltipMessages: a }
  };
  return /* @__PURE__ */ c.jsx(
    Hf.Provider,
    {
      value: f,
      children: /* @__PURE__ */ c.jsx(
        "tr",
        {
          ref: l,
          className: _(
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
const qf = S.forwardRef(dS);
qf.displayName = "DataSheetTableRow";
const qr = S.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = Yf(), f = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, m = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && m !== "" && m !== "-";
  return /* @__PURE__ */ c.jsx(
    i,
    {
      ref: s,
      className: _(
        "py-xs text-left align-top",
        "first:pl-0 last:pr-0 px-xs",
        t ? "text-body-secondary text-sm font-normal leading-[1.5]" : "text-body-primary font-normal leading-[1.5]",
        p && "line-through",
        e
      ),
      style: f,
      ...a,
      children: r
    }
  );
});
qr.displayName = "DataSheetTableCell";
function uS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = cS(), {
    item: f,
    isDeleted: m,
    ariaLabels: p,
    tooltipMessages: h
  } = Yf(), x = n ?? f;
  return t ? /* @__PURE__ */ c.jsx(
    qr,
    {
      ref: a,
      header: !0,
      parts: d,
      className: e,
      ...o,
      children: r
    }
  ) : s || i || l ? /* @__PURE__ */ c.jsx(
    qr,
    {
      ref: a,
      parts: d,
      className: _("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          Vt,
          {
            content: m ? null : (h == null ? void 0 : h.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: zi,
                disabled: m,
                onClick: () => s(x),
                className: _(
                  "text-shape-primary [&_svg]:size-5!",
                  m && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && x && !m && /* @__PURE__ */ c.jsx(
          Vt,
          {
            content: (h == null ? void 0 : h.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Gi,
                onClick: () => i(x),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        l && x && m && /* @__PURE__ */ c.jsx(
          Vt,
          {
            content: (h == null ? void 0 : h.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Hi,
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
const Xf = S.forwardRef(
  uS
);
Xf.displayName = "DataSheetTableActionsCell";
const Zf = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Ne, { ref: n, className: _("w-full", e), ...t }));
Zf.displayName = "DataSheetAction";
const sN = Object.assign(Wf, {
  Header: Lf,
  Section: Vf,
  KeyValue: Bf,
  Table: Gf,
  TableHeader: Uf,
  TableBody: Kf,
  TableRow: qf,
  TableCell: qr,
  TableActionsCell: Xf,
  Action: Zf
}), Qf = oe(
  `border-interactive-default bg-surface-primary
  has-[>input:enabled]:hover:border-interactive-hover
  has-[:disabled]:bg-surface-disabled has-[:focus]:ring-interactive-focused
  h-11.5 rounded relative flex w-full items-center border
  has-[:focus]:border-[var(--chemican-green-800)] has-[:focus]:ring-4
  has-[:focus]:outline-0`,
  {
    variants: {
      invalid: {
        false: "",
        true: `border-interactive-alert-default!
        has-[:focus]:ring-interactive-alert-focused`
      }
    }
  }
), fS = oe(
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
      }
    }
  }
), Wn = oe(
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
), Oo = S.forwardRef(
  ({
    invalid: e,
    prefixIcon: t,
    trailingIcon: n,
    onTrailingIconClick: r,
    trailingIconSize: o = 14,
    prefixIconSize: a = 14,
    className: s,
    ...i
  }, l) => {
    const d = !!t, f = !!n, m = !!r;
    return /* @__PURE__ */ c.jsxs("div", { className: _(Qf({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Wn({ position: "prefix", interactive: !1 }),
          children: je(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: l,
          className: fS({ hasPrefix: d, hasTrailing: f }),
          ...i
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: m ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Wn({
            position: "trailing",
            interactive: !0
          }),
          disabled: i.disabled,
          onClick: r,
          children: je(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Wn({
            position: "trailing",
            interactive: !1
          }),
          children: je(n, { size: o })
        }
      ) })
    ] });
  }
);
Oo.displayName = "Input";
const mS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Pr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, pS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), hS = S.forwardRef(
  ({
    value: e,
    onChange: t,
    defaultValue: n,
    minDate: r,
    maxDate: o,
    disabled: a = !1,
    error: s = !1,
    icon: i,
    iconSize: l = 14,
    placeholder: d,
    formatDate: f = pS,
    className: m,
    contentClassName: p,
    defaultOpen: h = !1,
    open: x,
    onOpenChange: v,
    side: g = "bottom",
    locale: w = "ja"
  }, b) => {
    const [y, k] = S.useState(
      () => Pr(n || null)
    ), [C, M] = S.useState(h), N = e !== void 0, P = N ? Pr(e) : y, T = x !== void 0 ? x : C, B = S.useMemo(
      () => Pr(r || null),
      [r]
    ), F = S.useMemo(
      () => Pr(o || null),
      [o]
    ), Y = S.useMemo(() => !B || !F ? !0 : B <= F, [B, F]), Q = (U) => {
      const D = U || null;
      N || k(D), t == null || t(D), D && (x === void 0 && M(!1), v == null || v(!1));
    }, I = (U) => {
      x === void 0 && M(U), v == null || v(U);
    }, H = (U) => {
      switch (U.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          U.preventDefault(), T || I(!0);
          break;
        case "Escape":
          T && (U.preventDefault(), I(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(ld, { open: T, onOpenChange: I, children: [
      /* @__PURE__ */ c.jsx(dd, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ref: b,
          type: "text",
          readOnly: !0,
          placeholder: d,
          value: P ? f(P) : void 0,
          disabled: a,
          invalid: s,
          trailingIcon: i || Im,
          trailingIconSize: l,
          onTrailingIconClick: () => !a && I(!T),
          className: _(
            "pl-0 py-md rounded-sm gap-xs text-md min-h-11.5 cursor-pointer",
            T && "ring-interactive-focused ring-4",
            m
          ),
          onKeyDown: H,
          onClick: () => !a && I(!T),
          "aria-expanded": T,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(ud, { children: /* @__PURE__ */ c.jsx(
        fs,
        {
          className: _(mS, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: g,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => I(!1),
          onPointerDownOutside: () => I(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ c.jsx(
            $f,
            {
              value: P,
              onChange: Q,
              ...B && { minDate: B },
              ...F && { maxDate: F },
              disabled: !Y,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: P || /* @__PURE__ */ new Date(),
              locale: w
            }
          )
        }
      ) })
    ] });
  }
);
hS.displayName = "DatePicker";
const vS = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], iN = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (f) => f(),
  title: r,
  children: o,
  busy: a,
  actions: s = vS,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0
}) => {
  const [f, m] = S.useState(-1), h = a !== void 0 ? a : f !== -1, x = async (b) => {
    const y = s.indexOf(b);
    if (b.onAction) {
      m(y);
      const k = await b.onAction(t);
      if (m(-1), k === !1)
        return;
    } else
      m(-1);
    e && t(b.value);
  }, v = () => {
    n(t);
  }, g = (b) => {
    b.preventDefault(), i && !h && d && n(t);
  }, w = (b) => {
    if (h) {
      b.preventDefault();
      return;
    }
    b.preventDefault(), n(t);
  };
  return /* @__PURE__ */ c.jsx(za, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(Ha, { children: /* @__PURE__ */ c.jsx(
    Ya,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        Ga,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: g,
          onEscapeKeyDown: w,
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
              min-w-96 fixed top-1/2 left-1/2 flex max-h-[90vh] w-2/3
              -translate-x-1/2 -translate-y-1/2 transform flex-col
              overflow-auto`,
          children: [
            /* @__PURE__ */ c.jsx(
              "div",
              {
                className: `px-xl py-lg flex flex-shrink-0 items-center
                justify-between`,
                children: r && /* @__PURE__ */ c.jsx(
                  Fc,
                  {
                    className: `text-xxl text-body-primary font-bold h-4.5 flex
                    items-center`,
                    children: r
                  }
                )
              }
            ),
            /* @__PURE__ */ c.jsx(
              "div",
              {
                className: `border-divider-default bg-surface-secondary px-xl pt-md
                pb-xxl text-body-primary flex-1 border-y-1`,
                children: o
              }
            ),
            /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex flex-shrink-0 justify-between", children: [
              i && /* @__PURE__ */ c.jsx(
                Ne,
                {
                  intent: "tertiary",
                  onClick: v,
                  disabled: h,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((b, y) => {
                const { label: k, classNames: C, onAction: M, value: N, ...P } = b;
                return /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    loading: f === y,
                    ...P,
                    intent: b.intent || "primary",
                    className: C,
                    onClick: () => x(b),
                    children: k
                  },
                  y
                );
              }) })
            ] })
          ]
        }
      )
    }
  ) }) });
}, Jf = Xr(void 0), Ns = () => {
  const e = $r(Jf);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, gS = ({
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
  const [d, f] = Te(o), m = a !== void 0 ? a : d, p = S.Children.toArray(r).filter(
    (C) => S.isValidElement(C) && C.type === em
  ), h = p.length, x = (C) => {
    C >= 0 && C < h && (a === void 0 && f(C), l == null || l(C));
  }, v = () => x(m + 1), g = () => x(m - 1), w = (C) => {
    a === void 0 && f(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(w);
  }, y = (C) => {
    C.preventDefault(), s && n(w);
  }, k = {
    currentStep: m,
    totalSteps: h,
    goToStep: x,
    nextStep: v,
    prevStep: g,
    isFirstStep: m === 0,
    isLastStep: m === h - 1,
    cancellable: s,
    onClose: w,
    onCancel: n
  };
  return /* @__PURE__ */ c.jsx(Jf.Provider, { value: k, children: /* @__PURE__ */ c.jsx(za, { open: e, onOpenChange: w, children: /* @__PURE__ */ c.jsx(Ha, { children: /* @__PURE__ */ c.jsx(
    Ya,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        Ga,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform overflow-auto`,
          onPointerDownOutside: b,
          onEscapeKeyDown: y,
          children: p[m]
        }
      )
    }
  ) }) }) });
}, em = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), xS = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  Fc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), bS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), yS = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = Ns(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(Ne, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, wS = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Ns(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(uv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e });
}, cN = {
  Root: gS,
  Step: em,
  Header: xS,
  Body: bS,
  Footer: yS,
  Action: wS,
  useMultiStepDialog: Ns
}, lN = ({
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
      name: r
    }
  ) : t;
  return /* @__PURE__ */ c.jsxs("div", { className: n, children: [
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
}, tm = ld, CS = dd, SS = g0, Es = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(ud, { children: /* @__PURE__ */ c.jsx(
  fs,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: _(
      // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
      // but we can add them later as needed.
      `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-50 border outline-none`,
      e
    ),
    ...r
  }
) }));
Es.displayName = fs.displayName;
const kS = (e, t) => {
  const [n, r] = Te(e);
  return Lt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, NS = (e) => typeof e == "string" ? e : e.label || e.value || String(e), ES = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, nm = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = NS,
      getSuggestionKey: d = ES,
      debounceMs: f = 300,
      minQueryLength: m = 0,
      loadingText: p = "Loading...",
      disabled: h,
      onFocus: x,
      onBlur: v,
      onKeyDown: g,
      ...w
    } = e, [b, y] = Te(!1), [k, C] = Te(
      []
    ), [M, N] = Te(!1), P = Nt(null), [T, B] = Te(0), F = Nt([]), [Y, Q] = Te(!1), I = kS(n, f), H = Rr(() => {
      if (!o)
        return k;
      if (!n || n.length < m)
        return o;
      const A = n.toLowerCase();
      return o.filter((j) => l(j).toLowerCase().includes(A));
    }, [
      o,
      k,
      n,
      m,
      l
    ]);
    Lt(() => {
      if (a) {
        if (I.length < m) {
          C([]), y(!1), N(!1);
          return;
        }
        return P.current && P.current.abort(), P.current = new AbortController(), N(!0), a(I).then((A) => {
          C(A);
        }).catch((A) => {
          A.name !== "AbortError" && console.debug("AutoSuggest search failed:", A), C([]);
        }).finally(() => {
          N(!1);
        }), () => {
          P.current && P.current.abort();
        };
      }
    }, [I, a, m]);
    const V = ve(
      (A) => {
        const j = l(A);
        r(j), s == null || s(A), y(!1);
      },
      [r, s, l]
    ), U = ve(
      (A) => {
        h || y(!0), x == null || x(A);
      },
      [h, x]
    ), D = ve(
      (A) => {
        y(!1), v == null || v(A);
      },
      [v]
    ), $ = ve(
      (A) => {
        const j = A.target.value;
        r(j), !b && H.length > 0 && y(!0);
      },
      [r, b, H.length]
    );
    Lt(() => {
      B(0), F.current = [];
    }, [H]), Lt(() => {
      var A;
      b && T >= 0 && F.current[T] && ((A = F.current[T]) == null || A.scrollIntoView({
        block: "nearest"
      }));
    }, [T, b]);
    const K = ve(
      (A) => {
        if (!Y) {
          if (!b) {
            g == null || g(A);
            return;
          }
          switch (A.key) {
            case "Escape":
              A.preventDefault(), y(!1);
              break;
            case "Enter": {
              A.preventDefault();
              const j = H[T];
              j && V(j);
              break;
            }
            case "ArrowDown":
              A.preventDefault(), B(
                (j) => j < H.length - 1 ? j + 1 : j
              );
              break;
            case "ArrowUp":
              A.preventDefault(), B((j) => j > 0 ? j - 1 : j);
              break;
          }
          g == null || g(A);
        }
      },
      [
        Y,
        b,
        T,
        H,
        V,
        g
      ]
    ), R = b && !h && (H.length > 0 || M), E = R && T >= 0 ? `autosuggest-item-${T}` : void 0;
    return /* @__PURE__ */ c.jsxs(tm, { open: R, children: [
      /* @__PURE__ */ c.jsx(SS, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ref: t,
          value: n,
          onChange: $,
          onFocus: U,
          onBlur: D,
          onKeyDown: K,
          onCompositionStart: () => Q(!0),
          onCompositionEnd: () => Q(!1),
          disabled: h,
          role: "combobox",
          "aria-expanded": R,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": E,
          "aria-autocomplete": "list",
          ...w
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        Es,
        {
          align: "start",
          sideOffset: 4,
          className: "p-0",
          style: {
            width: "var(--radix-popover-trigger-width)",
            maxWidth: "600px"
          },
          onOpenAutoFocus: (A) => {
            A.preventDefault();
          },
          children: M ? /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ c.jsx(Xm, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: p })
              ]
            }
          ) : /* @__PURE__ */ c.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: _(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: H.map((A, j) => {
                const G = l(A), W = j === T, O = `autosuggest-item-${j}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: O,
                    ref: (X) => {
                      F.current[j] = X;
                    },
                    role: "option",
                    "aria-selected": W,
                    "data-value": G,
                    onClick: () => V(A),
                    onPointerDown: (X) => {
                      X.preventDefault(), V(A);
                    },
                    onMouseEnter: () => B(j),
                    className: _(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      W && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(A) : l(A)
                  },
                  d(A, j)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
nm.displayName = "AutoSuggest";
var fe = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(fe || {}), me = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(me || {});
const MS = [
  {
    backgroundColor: me.AccentSunSoft,
    textColor: fe.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: me.AccentSunPale,
    textColor: fe.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: me.AccentWoodSoft,
    textColor: fe.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: me.AccentWoodPale,
    textColor: fe.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: me.AccentOrangeSoft,
    textColor: fe.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: me.AccentOrangePale,
    textColor: fe.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: me.AccentYellowSoft,
    textColor: fe.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: me.AccentYellowPale,
    textColor: fe.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: me.AccentLemonSoft,
    textColor: fe.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: me.AccentLemonPale,
    textColor: fe.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: me.AccentGrassSoft,
    textColor: fe.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: me.AccentGrassPale,
    textColor: fe.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: me.AccentLimeSoft,
    textColor: fe.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: me.AccentLimePale,
    textColor: fe.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: me.AccentGreenSoft,
    textColor: fe.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: me.AccentGreenPale,
    textColor: fe.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: me.AccentPeacockSoft,
    textColor: fe.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: me.AccentPeacockPale,
    textColor: fe.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: me.AccentCyanSoft,
    textColor: fe.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: me.AccentCyanPale,
    textColor: fe.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: me.AccentSkySoft,
    textColor: fe.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: me.AccentSkyPale,
    textColor: fe.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: me.AccentSeaSoft,
    textColor: fe.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: me.AccentSeaPale,
    textColor: fe.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: me.AccentVioletSoft,
    textColor: fe.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: me.AccentVioletPale,
    textColor: fe.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: me.AccentPurpleSoft,
    textColor: fe.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: me.AccentPurplePale,
    textColor: fe.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: me.AccentMagentaSoft,
    textColor: fe.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: me.AccentMagentaPale,
    textColor: fe.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: me.AccentCharcoalSoft,
    textColor: fe.AccentCharchoalStrong,
    code: 35
  },
  {
    backgroundColor: me.AccentCharcoalPale,
    textColor: fe.AccentCharchoalStrong,
    code: 17
  },
  {
    backgroundColor: me.AccentGraySoft,
    textColor: fe.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: me.AccentGrayPale,
    textColor: fe.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: me.AccentGrayPale,
    textColor: fe.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: me.AccentBambooPale,
    textColor: fe.AccentBambooStrong,
    code: 10
  }
], PS = oe(
  `gap-xxs py-xxs px-xs h-5.5 bg-shape-accent-gray-pale text-accent-gray-strong
  inline-flex items-center rounded-full border border-transparent leading-none`,
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
      }
    },
    defaultVariants: {
      size: "md",
      selected: !1
    }
  }
), Pa = ({
  colorCode: e = 0,
  children: t,
  className: n,
  onRemove: r,
  onClick: o,
  size: a = "md",
  style: s,
  selected: i = !1
}) => {
  const l = MS.find(
    (d) => d.code === e
  );
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: _(
        PS({ size: a, selected: i, interactive: !!o }),
        n
      ),
      style: {
        backgroundColor: `var(${l == null ? void 0 : l.backgroundColor})`,
        color: `var(${l == null ? void 0 : l.textColor})`,
        ...s
      },
      onClick: o,
      role: o ? "button" : void 0,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: t }),
        !!r && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: _(
              `bg-interactive-neutral-default h-3 w-3 flex cursor-pointer
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
}, rm = S.forwardRef(
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
    trailingIcon: f,
    trailingIconSize: m = 14,
    prefixIconSize: p = 14,
    invalid: h,
    disabled: x,
    className: v,
    ...g
  }, w) => {
    const [b, y] = Te(""), k = s ?? b, C = i ?? y, [M, N] = Te(!1), P = Nt(null);
    S.useImperativeHandle(w, () => P.current);
    const T = S.useMemo(() => {
      const K = o.map(
        (R) => R.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(K.join("|"));
    }, [o]), B = ve(
      (K) => !(!K || !r && e.includes(K) || n && e.length >= n),
      [e, r, n]
    ), F = ve(
      (K) => {
        const R = K.trim();
        B(R) && (t([...e, R]), C(""));
      },
      [e, t, B, C]
    ), Y = ve(
      (K) => {
        const R = e.filter((E, A) => A !== K);
        t(R);
      },
      [e, t]
    ), Q = ve(
      (K) => {
        const R = K.target.value, E = R[R.length - 1];
        if (E && o.includes(E)) {
          const j = R.slice(0, -1);
          j && F(j);
          return;
        }
        const A = R.split(T);
        if (A.length > 1) {
          A.filter(Boolean).forEach((j) => F(j));
          return;
        }
        C(R);
      },
      [o, T, F, C]
    ), I = ve(
      (K) => {
        K.key === "Enter" && k.trim() && (K.preventDefault(), F(k)), (K.key === "Backspace" || K.key === "Delete") && !k && e.length > 0 && (K.preventDefault(), Y(e.length - 1));
      },
      [k, e.length, F, Y]
    ), H = ve(() => {
      k.trim() && F(k), N(!1);
    }, [k, F]), V = x || (n ? e.length >= n : !1), U = e.length === 0 && !k, D = !!d, $ = !!f;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: _(
            Qf({ invalid: h }),
            "min-h-11.5 !h-auto max-h-[200px] overflow-y-auto",
            v
          ),
          children: [
            d && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Wn({
                  position: "prefix"
                }),
                children: je(d, { size: p })
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: _(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  D ? "pl-0" : "pl-sm",
                  $ ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((K, R) => /* @__PURE__ */ c.jsx(
                    Pa,
                    {
                      ...!x && { onRemove: () => Y(R) },
                      children: K
                    },
                    R
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: P,
                      value: k,
                      onChange: Q,
                      onKeyDown: I,
                      onFocus: () => N(!0),
                      onBlur: H,
                      placeholder: U ? a : "",
                      disabled: V,
                      className: _(
                        "min-w-24 min-h-6 flex-1 bg-transparent outline-none",
                        "text-body-primary placeholder:text-body-placeholder",
                        "disabled:text-body-disabled py-0 px-0 leading-[100%]"
                      ),
                      ...g
                    }
                  )
                ]
              }
            ),
            f && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Wn({
                  position: "trailing"
                }),
                children: je(f, { size: m })
              }
            )
          ]
        }
      ),
      l && /* @__PURE__ */ c.jsx(
        "p",
        {
          className: _(
            "text-body-secondary mt-xxs text-sm",
            !M && "invisible"
          ),
          children: l
        }
      )
    ] });
  }
);
rm.displayName = "TagInput";
const dN = Object.assign(Oo, {
  AutoSuggest: nm,
  TagInput: rm
});
var ji = 1, RS = 0.9, AS = 0.8, DS = 0.17, na = 0.1, ra = 0.999, _S = 0.9999, OS = 0.99, jS = /[\\\/_+.#"@\[\(\{&]/, IS = /[\\\/_+.#"@\[\(\{&]/g, TS = /[\s-]/, om = /[\s-]/g;
function Ra(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? ji : OS;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), f = 0, m, p, h, x; d >= 0; ) m = Ra(e, t, n, r, d + 1, a + 1, s), m > f && (d === o ? m *= ji : jS.test(e.charAt(d - 1)) ? (m *= AS, h = e.slice(o, d - 1).match(IS), h && o > 0 && (m *= Math.pow(ra, h.length))) : TS.test(e.charAt(d - 1)) ? (m *= RS, x = e.slice(o, d - 1).match(om), x && o > 0 && (m *= Math.pow(ra, x.length))) : (m *= DS, o > 0 && (m *= Math.pow(ra, d - o))), e.charAt(d) !== t.charAt(a) && (m *= _S)), (m < na && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Ra(e, t, n, r, d + 1, a + 2, s), p * na > m && (m = p * na)), m > f && (f = m), d = n.indexOf(l, d + 1);
  return s[i] = f, f;
}
function Ii(e) {
  return e.toLowerCase().replace(om, " ");
}
function $S(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ra(e, t, Ii(e), Ii(t), 0, 0, {});
}
var jn = '[cmdk-group=""]', oa = '[cmdk-group-items=""]', FS = '[cmdk-group-heading=""]', am = '[cmdk-item=""]', Ti = `${am}:not([aria-disabled="true"])`, Aa = "cmdk-item-select", an = "data-value", WS = (e, t, n) => $S(e, t, n), sm = u.createContext(void 0), cr = () => u.useContext(sm), im = u.createContext(void 0), Ms = () => u.useContext(im), cm = u.createContext(void 0), lm = u.forwardRef((e, t) => {
  let n = sn(() => {
    var E, A;
    return { search: "", value: (A = (E = e.value) != null ? E : e.defaultValue) != null ? A : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = sn(() => /* @__PURE__ */ new Set()), o = sn(() => /* @__PURE__ */ new Map()), a = sn(() => /* @__PURE__ */ new Map()), s = sn(() => /* @__PURE__ */ new Set()), i = dm(e), { label: l, children: d, value: f, onValueChange: m, filter: p, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: g = !0, ...w } = e, b = Se(), y = Se(), k = Se(), C = u.useRef(null), M = XS();
  Gt(() => {
    if (f !== void 0) {
      let E = f.trim();
      n.current.value = E, N.emit();
    }
  }, [f]), Gt(() => {
    M(6, Q);
  }, []);
  let N = u.useMemo(() => ({ subscribe: (E) => (s.current.add(E), () => s.current.delete(E)), snapshot: () => n.current, setState: (E, A, j) => {
    var G, W, O, X;
    if (!Object.is(n.current[E], A)) {
      if (n.current[E] = A, E === "search") Y(), B(), M(1, F);
      else if (E === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(k);
          J ? J.focus() : (G = document.getElementById(b)) == null || G.focus();
        }
        if (M(7, () => {
          var J;
          n.current.selectedItemId = (J = I()) == null ? void 0 : J.id, N.emit();
        }), j || M(5, Q), ((W = i.current) == null ? void 0 : W.value) !== void 0) {
          let J = A ?? "";
          (X = (O = i.current).onValueChange) == null || X.call(O, J);
          return;
        }
      }
      N.emit();
    }
  }, emit: () => {
    s.current.forEach((E) => E());
  } }), []), P = u.useMemo(() => ({ value: (E, A, j) => {
    var G;
    A !== ((G = a.current.get(E)) == null ? void 0 : G.value) && (a.current.set(E, { value: A, keywords: j }), n.current.filtered.items.set(E, T(A, j)), M(2, () => {
      B(), N.emit();
    }));
  }, item: (E, A) => (r.current.add(E), A && (o.current.has(A) ? o.current.get(A).add(E) : o.current.set(A, /* @__PURE__ */ new Set([E]))), M(3, () => {
    Y(), B(), n.current.value || F(), N.emit();
  }), () => {
    a.current.delete(E), r.current.delete(E), n.current.filtered.items.delete(E);
    let j = I();
    M(4, () => {
      Y(), (j == null ? void 0 : j.getAttribute("id")) === E && F(), N.emit();
    });
  }), group: (E) => (o.current.has(E) || o.current.set(E, /* @__PURE__ */ new Set()), () => {
    a.current.delete(E), o.current.delete(E);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: k, labelId: y, listInnerRef: C }), []);
  function T(E, A) {
    var j, G;
    let W = (G = (j = i.current) == null ? void 0 : j.filter) != null ? G : WS;
    return E ? W(E, n.current.search, A) : 0;
  }
  function B() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let E = n.current.filtered.items, A = [];
    n.current.filtered.groups.forEach((G) => {
      let W = o.current.get(G), O = 0;
      W.forEach((X) => {
        let J = E.get(X);
        O = Math.max(J, O);
      }), A.push([G, O]);
    });
    let j = C.current;
    H().sort((G, W) => {
      var O, X;
      let J = G.getAttribute("id"), re = W.getAttribute("id");
      return ((O = E.get(re)) != null ? O : 0) - ((X = E.get(J)) != null ? X : 0);
    }).forEach((G) => {
      let W = G.closest(oa);
      W ? W.appendChild(G.parentElement === W ? G : G.closest(`${oa} > *`)) : j.appendChild(G.parentElement === j ? G : G.closest(`${oa} > *`));
    }), A.sort((G, W) => W[1] - G[1]).forEach((G) => {
      var W;
      let O = (W = C.current) == null ? void 0 : W.querySelector(`${jn}[${an}="${encodeURIComponent(G[0])}"]`);
      O == null || O.parentElement.appendChild(O);
    });
  }
  function F() {
    let E = H().find((j) => j.getAttribute("aria-disabled") !== "true"), A = E == null ? void 0 : E.getAttribute(an);
    N.setState("value", A || void 0);
  }
  function Y() {
    var E, A, j, G;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let W = 0;
    for (let O of r.current) {
      let X = (A = (E = a.current.get(O)) == null ? void 0 : E.value) != null ? A : "", J = (G = (j = a.current.get(O)) == null ? void 0 : j.keywords) != null ? G : [], re = T(X, J);
      n.current.filtered.items.set(O, re), re > 0 && W++;
    }
    for (let [O, X] of o.current) for (let J of X) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(O);
      break;
    }
    n.current.filtered.count = W;
  }
  function Q() {
    var E, A, j;
    let G = I();
    G && (((E = G.parentElement) == null ? void 0 : E.firstChild) === G && ((j = (A = G.closest(jn)) == null ? void 0 : A.querySelector(FS)) == null || j.scrollIntoView({ block: "nearest" })), G.scrollIntoView({ block: "nearest" }));
  }
  function I() {
    var E;
    return (E = C.current) == null ? void 0 : E.querySelector(`${am}[aria-selected="true"]`);
  }
  function H() {
    var E;
    return Array.from(((E = C.current) == null ? void 0 : E.querySelectorAll(Ti)) || []);
  }
  function V(E) {
    let A = H()[E];
    A && N.setState("value", A.getAttribute(an));
  }
  function U(E) {
    var A;
    let j = I(), G = H(), W = G.findIndex((X) => X === j), O = G[W + E];
    (A = i.current) != null && A.loop && (O = W + E < 0 ? G[G.length - 1] : W + E === G.length ? G[0] : G[W + E]), O && N.setState("value", O.getAttribute(an));
  }
  function D(E) {
    let A = I(), j = A == null ? void 0 : A.closest(jn), G;
    for (; j && !G; ) j = E > 0 ? KS(j, jn) : qS(j, jn), G = j == null ? void 0 : j.querySelector(Ti);
    G ? N.setState("value", G.getAttribute(an)) : U(E);
  }
  let $ = () => V(H().length - 1), K = (E) => {
    E.preventDefault(), E.metaKey ? $() : E.altKey ? D(1) : U(1);
  }, R = (E) => {
    E.preventDefault(), E.metaKey ? V(0) : E.altKey ? D(-1) : U(-1);
  };
  return u.createElement(Z.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (E) => {
    var A;
    (A = w.onKeyDown) == null || A.call(w, E);
    let j = E.nativeEvent.isComposing || E.keyCode === 229;
    if (!(E.defaultPrevented || j)) switch (E.key) {
      case "n":
      case "j": {
        g && E.ctrlKey && K(E);
        break;
      }
      case "ArrowDown": {
        K(E);
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
        E.preventDefault(), $();
        break;
      }
      case "Enter": {
        E.preventDefault();
        let G = I();
        if (G) {
          let W = new Event(Aa);
          G.dispatchEvent(W);
        }
      }
    }
  } }, u.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: QS }, l), jo(e, (E) => u.createElement(im.Provider, { value: N }, u.createElement(sm.Provider, { value: P }, E))));
}), LS = u.forwardRef((e, t) => {
  var n, r;
  let o = Se(), a = u.useRef(null), s = u.useContext(cm), i = cr(), l = dm(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Gt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let f = um(o, a, [e.value, e.children, a], e.keywords), m = Ms(), p = At((M) => M.value && M.value === f.current), h = At((M) => d || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  u.useEffect(() => {
    let M = a.current;
    if (!(!M || e.disabled)) return M.addEventListener(Aa, x), () => M.removeEventListener(Aa, x);
  }, [h, e.onSelect, e.disabled]);
  function x() {
    var M, N;
    v(), (N = (M = l.current).onSelect) == null || N.call(M, f.current);
  }
  function v() {
    m.setState("value", f.current, !0);
  }
  if (!h) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: y, keywords: k, ...C } = e;
  return u.createElement(Z.div, { ref: bt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : x }, e.children);
}), VS = u.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Se(), i = u.useRef(null), l = u.useRef(null), d = Se(), f = cr(), m = At((h) => o || f.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  Gt(() => f.group(s), []), um(s, i, [e.value, e.heading, l]);
  let p = u.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return u.createElement(Z.div, { ref: bt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: m ? void 0 : !0 }, n && u.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), jo(e, (h) => u.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, u.createElement(cm.Provider, { value: p }, h))));
}), BS = u.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = u.useRef(null), a = At((s) => !s.search);
  return !n && !a ? null : u.createElement(Z.div, { ref: bt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), zS = u.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Ms(), s = At((d) => d.search), i = At((d) => d.selectedItemId), l = cr();
  return u.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), u.createElement(Z.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), HS = u.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = u.useRef(null), s = u.useRef(null), i = At((d) => d.selectedItemId), l = cr();
  return u.useEffect(() => {
    if (s.current && a.current) {
      let d = s.current, f = a.current, m, p = new ResizeObserver(() => {
        m = requestAnimationFrame(() => {
          let h = d.offsetHeight;
          f.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(m), p.unobserve(d);
      };
    }
  }, []), u.createElement(Z.div, { ref: bt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, jo(e, (d) => u.createElement("div", { ref: bt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), YS = u.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return u.createElement(za, { open: n, onOpenChange: r }, u.createElement(Ha, { container: s }, u.createElement(Ya, { "cmdk-overlay": "", className: o }), u.createElement(Ga, { "aria-label": e.label, "cmdk-dialog": "", className: a }, u.createElement(lm, { ref: t, ...i }))));
}), GS = u.forwardRef((e, t) => At((n) => n.filtered.count === 0) ? u.createElement(Z.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), US = u.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return u.createElement(Z.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, jo(e, (s) => u.createElement("div", { "aria-hidden": !0 }, s)));
}), Ve = Object.assign(lm, { List: HS, Item: LS, Input: zS, Group: VS, Separator: BS, Dialog: YS, Empty: GS, Loading: US });
function KS(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function qS(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function dm(e) {
  let t = u.useRef(e);
  return Gt(() => {
    t.current = e;
  }), t;
}
var Gt = typeof window > "u" ? u.useEffect : u.useLayoutEffect;
function sn(e) {
  let t = u.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function At(e) {
  let t = Ms(), n = () => e(t.snapshot());
  return u.useSyncExternalStore(t.subscribe, n, n);
}
function um(e, t, n, r = []) {
  let o = u.useRef(), a = cr();
  return Gt(() => {
    var s;
    let i = (() => {
      var d;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (d = f.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(an, i), o.current = i;
  }), o;
}
var XS = () => {
  let [e, t] = u.useState(), n = sn(() => /* @__PURE__ */ new Map());
  return Gt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function ZS(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function jo({ asChild: e, children: t }, n) {
  return e && u.isValidElement(t) ? u.cloneElement(ZS(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var QS = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const fm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve,
  {
    ref: n,
    className: _(
      `bg-surface-primary text-body-primary rounded-md flex h-full w-full
      flex-col overflow-hidden`,
      e
    ),
    ...t
  }
));
fm.displayName = Ve.displayName;
const mm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Yi, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Ve.Input,
            {
              ref: n,
              className: _(
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
mm.displayName = Ve.Input.displayName;
const pm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.List,
  {
    ref: n,
    className: _("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
pm.displayName = Ve.List.displayName;
const hm = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Ve.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
hm.displayName = Ve.Empty.displayName;
const Ir = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Group,
  {
    ref: n,
    className: _(
      `text-body-primary [&_[cmdk-group-heading]]:px-2
      [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
      [&_[cmdk-group-heading]]:font-medium
      [&_[cmdk-group-heading]]:text-body-secondary overflow-hidden`,
      e
    ),
    ...t
  }
));
Ir.displayName = Ve.Group.displayName;
const JS = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Separator,
  {
    ref: n,
    className: _(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
JS.displayName = Ve.Separator.displayName;
const Tr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Item,
  {
    ref: n,
    className: _(
      `hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg h-10 py-1.5 relative flex
      cursor-default items-center outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,
      e
    ),
    ...t
  }
));
Tr.displayName = Ve.Item.displayName;
const $i = oe("ease-in-out transition-all duration-300", {
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
}), ek = ({
  options: e,
  onValueChange: t = (W) => W,
  onApplySelection: n = (W) => W,
  variant: r,
  defaultValue: o = [],
  placeholder: a = "選択してください",
  placeholderAriaLabel: s = "選択してください",
  triggerDescription: i = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: l = "オプションが選択されていません",
  searchHelpText: d = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: f = "利用可能なオプションを検索",
  optionsListAriaLabel: m = "利用可能なオプション",
  selectAllLabel: p = "すべて選択",
  selectAllCountLabel: h = "オプション",
  clearAllLabel: x = "すべてクリア",
  closeLabel: v = "閉じる",
  moreSelectedLabel: g = "その他",
  searchPlaceholder: w = "オプションを検索...",
  maxCount: b = 10,
  modalPopover: y = !1,
  className: k,
  hideSelectAll: C = !1,
  searchable: M = !0,
  emptyIndicator: N = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: T = !1,
  popoverClassName: B,
  disabled: F = !1,
  invalid: Y = !1,
  responsive: Q,
  minWidth: I,
  maxWidth: H,
  deduplicateOptions: V = !1,
  resetOnDefaultValueChange: U = !0,
  closeOnSelect: D = !1,
  filterByValueAndLabel: $ = !1,
  renderOption: K,
  customTrigger: R,
  selectionDisplayMode: E = "default",
  hideSelection: A = !1,
  ...j
}, G) => {
  const [W, O] = S.useState(o), [X, J] = S.useState(!1), [re, de] = S.useState(""), [ue, Me] = S.useState(""), [Ie, rt] = S.useState(""), Xe = S.useRef(W.length), ot = S.useRef(X), Zt = S.useRef(re), We = S.useCallback(
    (L, q = "polite") => {
      q === "assertive" ? (rt(L), setTimeout(() => rt(""), 100)) : (Me(L), setTimeout(() => Me(""), 100));
    },
    []
  ), It = S.useId(), dr = `${It}-listbox`, Sn = `${It}-description`, Qt = `${It}-count`, Jt = S.useRef(o), kn = S.useCallback(
    (L) => {
      const q = L[0];
      return !!(q && typeof q == "object" && "heading" in q);
    },
    []
  ), Nn = S.useCallback((L, q) => {
    if (L.length !== q.length) return !1;
    const ce = [...L].sort(), Ce = [...q].sort();
    return ce.every((De, An) => De === Ce[An]);
  }, []), ur = S.useCallback(() => {
    O(o), J(!1), de(""), t(o);
  }, [o, t]), Ue = S.useRef(null);
  S.useImperativeHandle(
    G,
    () => ({
      reset: ur,
      getSelectedValues: () => W,
      setSelectedValues: (L) => {
        O(L), t(L);
      },
      clear: () => {
        O([]), t([]);
      },
      focus: () => {
        if (Ue.current) {
          Ue.current.focus();
          const L = Ue.current.style.outline, q = Ue.current.style.outlineOffset;
          Ue.current.style.outline = "2px solid hsl(var(--ring))", Ue.current.style.outlineOffset = "2px", setTimeout(() => {
            Ue.current && (Ue.current.style.outline = L, Ue.current.style.outlineOffset = q);
          }, 1e3);
        }
      }
    }),
    [ur, W, t]
  );
  const [Ke, En] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const L = () => {
      const q = window.innerWidth;
      q < 640 ? En("mobile") : q < 1024 ? En("tablet") : En("desktop");
    };
    return L(), window.addEventListener("resize", L), () => {
      typeof window < "u" && window.removeEventListener("resize", L);
    };
  }, []);
  const ht = (() => {
    if (!Q)
      return {
        maxCount: b,
        compactMode: !1
      };
    if (Q === !0) {
      const ce = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ke];
      return {
        maxCount: (ce == null ? void 0 : ce.maxCount) ?? b,
        compactMode: (ce == null ? void 0 : ce.compactMode) ?? !1
      };
    }
    const L = Q[Ke];
    return {
      maxCount: (L == null ? void 0 : L.maxCount) ?? b,
      compactMode: (L == null ? void 0 : L.compactMode) ?? !1
    };
  })(), Be = S.useCallback(() => {
    if (e.length === 0) return [];
    let L;
    kn(e) ? L = e.flatMap((De) => De.options) : L = e;
    const q = /* @__PURE__ */ new Set(), ce = [], Ce = [];
    return L.forEach((De) => {
      q.has(De.value) ? (ce.push(De.value), V || Ce.push(De)) : (q.add(De.value), Ce.push(De));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${V ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${V ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), V ? Ce : L;
  }, [e, V, kn]), Tt = S.useCallback(
    (L) => {
      const q = Be().find((ce) => ce.value === L);
      return !q && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${L}" not found in options list`
      ), q;
    },
    [Be]
  ), Io = S.useCallback(
    (L, q) => {
      const [ce, Ce] = L.split(":");
      if (!$)
        return Ce && Ce.toLowerCase().includes(q.toLowerCase()) ? 1 : 0;
      const De = q.toLowerCase();
      return Ce && Ce.toLowerCase().includes(De) || ce && ce.toLowerCase().includes(De) ? 1 : 0;
    },
    [$]
  ), fr = (L) => {
    if (L.key === "Enter")
      J(!0);
    else if (L.key === "Backspace" && !L.currentTarget.value) {
      const q = [...W];
      q.pop(), O(q), t(q);
    }
  }, Mn = (L) => {
    if (F) return;
    const q = Tt(L);
    if (q != null && q.disabled) return;
    const ce = W.includes(L) ? W.filter((Ce) => Ce !== L) : [...W, L];
    O(ce), t(ce), D && J(!1);
  }, Pn = () => {
    F || (O([]), n([]), t([]));
  }, ie = () => {
    F || J((L) => !L);
  }, be = () => {
    if (F) return;
    const L = W.slice(
      0,
      ht.maxCount
    );
    O(L), t(L);
  }, ae = () => {
    if (F) return;
    const L = Be().filter((q) => !q.disabled);
    if (W.length === L.length)
      Pn();
    else {
      const q = L.map((ce) => ce.value);
      O(q), t(q);
    }
    D && J(!1);
  }, Ae = K || ((L) => {
    const { option: q, location: ce, onRemove: Ce, disabled: De } = L;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      Pa,
      {
        className: _(
          $i({ variant: r }),
          ht.compactMode && "text-xs px-1.5 py-0.5",
          Ke === "mobile" && "max-w-[120px] truncate",
          T && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          De && "cursor-not-allowed"
        ),
        ...!De && { onRemove: Ce },
        children: q.label
      }
    ) : q.label;
  });
  S.useEffect(() => {
    if (!U) return;
    const L = Jt.current;
    Nn(L, o) || (Nn(W, o) || O(o), Jt.current = [...o]);
  }, [o, W, Nn, U]);
  const Rn = {
    minWidth: I || (Ke === "mobile" ? "0px" : "200px"),
    maxWidth: H || "100%",
    width: P ? "auto" : "100%"
  }, mr = S.useMemo(() => E === "default" || W.length === 0 ? a : W.map((L) => {
    var q;
    return (q = Tt(L)) == null ? void 0 : q.label;
  }).filter(Boolean).join(", "), [W, Tt, a, E]);
  return S.useEffect(() => {
    X || de("");
  }, [X]), S.useEffect(() => {
    const L = W.length, q = Be(), ce = q.filter((Ce) => !Ce.disabled).length;
    if (L !== Xe.current) {
      const Ce = L - Xe.current;
      if (Ce > 0) {
        const An = W.slice(-Ce).map((km) => {
          var Rs;
          return (Rs = q.find((Nm) => Nm.value === km)) == null ? void 0 : Rs.label;
        }).filter(Boolean);
        An.length === 1 ? We(
          `${An[0]} selected. ${L} of ${ce} options selected.`
        ) : We(
          `${An.length} options selected. ${L} of ${ce} total selected.`
        );
      } else Ce < 0 && We(
        `Option removed. ${L} of ${ce} options selected.`
      );
      Xe.current = L;
    }
    X !== ot.current && (We(
      X ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), ot.current = X), re !== Zt.current && re !== void 0 && (re && X && We(`Searching for "${re}"`), Zt.current = re);
  }, [W, X, re, We, Be]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: ue }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Ie })
    ] }),
    /* @__PURE__ */ c.jsxs(
      tm,
      {
        open: X,
        onOpenChange: J,
        modal: y,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: Sn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Qt, className: "sr-only", "aria-live": "polite", children: W.length === 0 ? l : `${W.length} option${W.length === 1 ? "" : "s"} selected: ${W.map((L) => {
            var q;
            return (q = Tt(L)) == null ? void 0 : q.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: _(P && "w-auto", k), children: [
            /* @__PURE__ */ c.jsx(CS, { asChild: !0, children: R || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ue,
                ...j,
                onClick: ie,
                disabled: F,
                className: _(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  P ? "w-auto" : "w-full",
                  !Y && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  Y && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  ht.compactMode && "min-h-8 text-sm",
                  Ke === "mobile" && "min-h-12"
                ),
                style: {
                  ...Rn,
                  maxWidth: `min(${Rn.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": X,
                "aria-haspopup": "listbox",
                "aria-controls": X ? dr : void 0,
                "aria-describedby": `${Sn} ${Qt}`,
                "aria-label": `Multi-select: ${W.length} of ${Be().length} options selected. ${s}`,
                children: /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "span",
                        {
                          className: _(
                            "mx-sm",
                            E === "inline" && "truncate",
                            F ? "text-body-disabled" : X || E === "inline" && mr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: mr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Zr,
                        {
                          className: _(
                            "h-4 mx-xs cursor-pointer",
                            F ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(A || E === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              W.slice(0, ht.maxCount).map((L) => {
                const q = Tt(L);
                return q ? /* @__PURE__ */ c.jsx("div", { children: Ae({
                  option: q,
                  location: "badge",
                  onRemove: () => Mn(L),
                  disabled: F
                }) }, L) : null;
              }).filter(Boolean),
              W.length > ht.maxCount && /* @__PURE__ */ c.jsxs(
                Pa,
                {
                  className: _(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    $i({ variant: r }),
                    ht.compactMode && "text-xs px-1.5 py-0.5",
                    T && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    F && "cursor-not-allowed"
                  ),
                  ...!F && { onRemove: be },
                  children: [
                    "+ ",
                    W.length - ht.maxCount,
                    " ",
                    g
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Es,
            {
              id: dr,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": m,
              className: _(
                "p-0 w-auto",
                Ke === "mobile" && "w-[85vw] max-w-[280px]",
                Ke === "tablet" && "max-w-md w-[70vw]",
                Ke === "desktop" && "min-w-[300px]",
                B
              ),
              style: {
                maxWidth: `min(${Rn.maxWidth}, 85vw)`,
                maxHeight: Ke === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(fm, { filter: Io, children: [
                M && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${It}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    mm,
                    {
                      placeholder: w,
                      onKeyDown: fr,
                      value: re,
                      onValueChange: de,
                      "aria-label": f,
                      "aria-describedby": `${It}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  pm,
                  {
                    className: _(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ke === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(hm, { children: N }),
                      !C && !re && /* @__PURE__ */ c.jsx(Ir, { children: /* @__PURE__ */ c.jsxs(
                        Tr,
                        {
                          value: "select-all",
                          onSelect: ae,
                          role: "option",
                          "aria-selected": W.length === Be().filter((L) => !L.disabled).length,
                          "aria-label": `Select all ${Be().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              jr,
                              {
                                className: "mr-xs",
                                checked: W.length === Be().filter((L) => !L.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              p,
                              Be().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                Be().length,
                                " ",
                                h
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      kn(e) ? e.map((L) => /* @__PURE__ */ c.jsx(Ir, { heading: L.heading, children: L.options.map((q) => {
                        const ce = W.includes(q.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${q.value}:${q.label}`,
                            onSelect: () => Mn(q.value),
                            role: "option",
                            "aria-selected": ce,
                            "aria-disabled": q.disabled ?? !1,
                            "aria-label": `${q.label}${ce ? ", selected" : ", not selected"}${q.disabled ? ", disabled" : ""}`,
                            className: _(
                              "cursor-pointer",
                              q.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!q.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(jr, { className: "mr-xs", checked: ce }),
                              Ae({
                                option: q,
                                location: "dropdown",
                                isSelected: ce
                              })
                            ]
                          },
                          q.value
                        );
                      }) }, L.heading)) : /* @__PURE__ */ c.jsx(Ir, { children: e.map((L) => {
                        const q = W.includes(L.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${L.value}:${L.label}`,
                            onSelect: () => Mn(L.value),
                            role: "option",
                            "aria-selected": q,
                            "aria-disabled": L.disabled ?? !1,
                            "aria-label": `${L.label}${q ? ", selected" : ", not selected"}${L.disabled ? ", disabled" : ""}`,
                            className: _(
                              "cursor-pointer",
                              L.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!L.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(jr, { className: "mr-xs", checked: q }),
                              Ae({
                                option: L,
                                location: "dropdown",
                                isSelected: q
                              })
                            ]
                          },
                          L.value
                        );
                      }) })
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
                        Ne,
                        {
                          intent: "text",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: Pn,
                          disabled: W.length === 0,
                          children: x
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Ne,
                        {
                          intent: "primary",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: () => {
                            n(W), J(!1);
                          },
                          children: v
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
}, tk = S.forwardRef(
  ek
);
tk.displayName = "MultiSelect";
const nk = oe(
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
        hover:bg-interactive-neutral-hover h-[26px] w-fit border-transparent`
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
), rk = oe(
  `bg-surface-primary z-dropdown relative w-full
  min-w-[var(--radix-select-trigger-width)] overflow-hidden border`,
  {
    variants: {
      variant: {
        default: "border-interactive-default max-h-96 rounded",
        compact: `border-divider-default rounded-sm
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ok = oe(
  `disabled:bg-surface-disabled disabled:text-interactive-disabled
  data-[disabled]:text-interactive-disabled flex cursor-pointer items-center
  border-0 ring-0 focus:outline-0 disabled:cursor-not-allowed
  data-[disabled]:cursor-not-allowed`,
  {
    variants: {
      variant: {
        default: `gap-xs px-md text-body-primary
        hover:bg-interactive-neutral-hover focus:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active h-[2.75rem]`,
        compact: `px-md text-body-primary hover:bg-interactive-neutral-hover
        focus:bg-interactive-neutral-hover h-10`
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
), Da = ({
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
  ...f
}) => {
  const m = {
    ...f
  }, p = i !== void 0 ? String(i) : void 0, h = (x) => {
    const v = e.find(
      (g) => "value" in g && String(g.value) === x
    );
    return v && "value" in v ? v.value : x;
  };
  return p !== void 0 && (m.value = p), d && (m.onValueChange = (x) => {
    const v = h(x);
    d(v);
  }), /* @__PURE__ */ c.jsxs(rb, { ...m, children: [
    /* @__PURE__ */ c.jsxs(
      ob,
      {
        className: _(
          nk({ variant: a, intent: s, invalid: o }),
          "group",
          n
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            je(r, {
              className: _("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              ab,
              {
                placeholder: t || "Select an option",
                className: _({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            sb,
            {
              className: _("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": f.disabled
              }),
              children: /* @__PURE__ */ c.jsx(
                Zr,
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
    /* @__PURE__ */ c.jsx(ib, { children: /* @__PURE__ */ c.jsxs(
      cb,
      {
        position: "popper",
        sideOffset: -1,
        className: _(rk({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(hb, {}),
          /* @__PURE__ */ c.jsx(lb, { children: e.map((x, v) => {
            switch (x.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(db, { children: /* @__PURE__ */ c.jsx(ub, { children: x.label }) }, v);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  gb,
                  {
                    className: "border-divider-default h-px border-b"
                  },
                  v
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  fb,
                  {
                    value: String(x.value),
                    disabled: x.disabled ?? !1,
                    className: ok({
                      variant: a,
                      isSelected: i === x.value
                    }),
                    children: [
                      je(x.icon, {
                        className: _("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": x.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        mb,
                        {
                          className: _("flex-1", {
                            "text-interactive-disabled": x.disabled
                          }),
                          children: x.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(pb, {})
                    ]
                  },
                  v
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(vb, {}),
          /* @__PURE__ */ c.jsx(xb, {})
        ]
      }
    ) })
  ] });
};
Da.displayName = "Select";
const ak = oe("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Fi = oe(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), sk = S.forwardRef(
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
    showNavigation: f = !0,
    size: m,
    className: p,
    ...h
  }, x) => {
    const v = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, w = (M) => {
      const N = parseInt(M, 10);
      s(N), e > 1 && r(1);
    }, b = (M) => {
      const N = parseInt(M, 10);
      r(N);
    }, y = a.map((M) => ({
      value: M.toString(),
      label: M.toString()
    })), k = Math.max(t, 1), C = Array.from(
      { length: k },
      (M, N) => N + 1
    ).map((M) => ({
      value: M.toString(),
      label: d(M, k, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: _(ak({ size: m }), p),
        ...h,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: _(Fi()), children: i }),
            /* @__PURE__ */ c.jsx(
              Da,
              {
                value: o.toString(),
                onValueChange: w,
                options: y
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: _(Fi()), children: l }),
            /* @__PURE__ */ c.jsx(
              Da,
              {
                value: e.toString(),
                onValueChange: b,
                options: C,
                disabled: n === 0
              }
            )
          ] }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-md flex items-center", children: [
            /* @__PURE__ */ c.jsx(
              Ne,
              {
                intent: "text",
                size: "sm",
                icon: Vm,
                onClick: v,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ne,
              {
                intent: "text",
                size: "sm",
                icon: Bi,
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
sk.displayName = "Pagination";
const ik = oe("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), ck = oe(
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
), lk = oe(
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
), uN = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: _(ik({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      T0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: _(
          ck({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx($0, { className: _(lk({ invalid: a })) })
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
}, fN = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  I0,
  {
    className: _("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), dk = oe(
  `rounded-sm bg-surface-primary border-interactive-default
  hover:border-interactive-hover focus-within:border-interactive-hover
  focus-within:ring-interactive-focused flex w-auto overflow-hidden border
  focus-within:ring-4`,
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
), uk = "gap-xxs px-sm py-xs disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", fk = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, mk = oe(
  `text-shape-primary disabled:text-shape-interactive-disabled flex
  items-center`,
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), pk = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, hk = oe(
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
), vk = "gap-xs text-sm text-body-secondary flex-row", gk = oe(
  `gap-xxs bg-shape-accent-gray-pale px-xs py-xxs text-md
  text-accent-gray-strong flex items-center rounded-full`,
  {
    variants: {
      size: {
        sm: "h-5",
        md: "h-6",
        lg: "h-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), xk = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, bk = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", yk = {
  sm: 16,
  // 50% of h-8 (32px)
  md: 20,
  // 50% of h-10 (40px)
  lg: 24
  // 50% of h-12 (48px)
}, wk = S.forwardRef(
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
    searchOnKeywordAdd: f = !1,
    ...m
  }, p) => {
    const h = i || t === "disabled", [x, v] = S.useState([]);
    let g;
    typeof t == "string" ? g = t : h ? g = "disabled" : x.length > 0 ? g = "filled" : g = "default";
    const w = S.useRef(g);
    Lt(() => {
      w.current === "filled" && g !== "filled" && v([]), w.current = g;
    }, [g]);
    const b = (C) => {
      h || o && o(C);
    }, y = (C) => {
      if (!h) {
        if (C.key === "Enter" && n.trim()) {
          const M = [...x, n.trim()];
          if (v(M), o) {
            const N = {
              ...C,
              target: { value: "" }
            };
            o(N);
          }
          f && a && a(M), C.preventDefault();
        }
        if ((C.key === "Backspace" || C.key === "Delete") && !n && x.length > 0) {
          const M = x.slice(0, -1);
          v(M), f && a && a(M), C.preventDefault();
        }
      }
    }, k = (C) => {
      if (h) return;
      const M = x.filter((N, P) => P !== C);
      v(M), f && a && a(M);
    };
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: _(
          "gap-xxs group flex flex-col",
          h ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": h ? "true" : void 0,
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: _(
                dk({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: _(uk), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: _(bk, fk), children: [
                    /* @__PURE__ */ c.jsx("span", { className: _(mk({ size: e })), children: /* @__PURE__ */ c.jsx(Yi, { size: yk[e] }) }),
                    x.map((C, M) => /* @__PURE__ */ c.jsxs("span", { className: gk(), children: [
                      /* @__PURE__ */ c.jsx("span", { children: C }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: _(
                            xk,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (N) => {
                            N.stopPropagation(), N.preventDefault(), k(M);
                          },
                          onMouseDown: (N) => {
                            N.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: h,
                          children: /* @__PURE__ */ c.jsx(aa, { size: 8 })
                        }
                      )
                    ] }, M)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: p,
                        className: _(pk),
                        type: "text",
                        value: n,
                        onChange: b,
                        onKeyDown: y,
                        placeholder: g === "filled" || x.length > 0 ? "" : s,
                        disabled: h,
                        ...m
                      }
                    )
                  ] }),
                  (n || x.length > 0) && !h && /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      type: "button",
                      "aria-label": "Clear",
                      className: "text-shape-primary cursor-pointer",
                      onClick: () => {
                        o && o({
                          target: { value: "" }
                        }), a == null || a([]), v([]);
                      },
                      tabIndex: -1,
                      children: /* @__PURE__ */ c.jsx(aa, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: _(
                      hk({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let C = x;
                      n.trim() && (C = [...x, n.trim()], v(C), o && o({
                        target: { value: "" }
                      })), a == null || a(C);
                    },
                    disabled: h,
                    children: d
                  }
                )
              ]
            }
          ),
          l && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: _(
                vk,
                "hidden group-focus-within:flex",
                g === "filled" && "flex"
              ),
              children: l
            }
          )
        ]
      }
    );
  }
);
wk.displayName = "SearchBar";
const vm = Xr(void 0), gm = Xr(!1), Ck = ({
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
  return /* @__PURE__ */ c.jsx(vm.Provider, { value: a, children: t });
}, Sk = ({
  children: e
}) => /* @__PURE__ */ c.jsx(gm.Provider, { value: !0, children: e }), lr = () => {
  const e = $r(vm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = $r(gm);
  return { ...e, isInFooter: t };
}, xm = S.forwardRef(({ className: e, ...t }, n) => {
  const { isCollapsed: r, toggleCollapsed: o } = lr();
  return /* @__PURE__ */ c.jsx(
    "button",
    {
      ref: n,
      className: _(
        `p-xxs bg-surface-primary text-interactive-primary-default top-2.5
        right-0 rounded ease-in-out z-slight absolute cursor-pointer
        transition-all duration-200`,
        e
      ),
      style: {
        transform: "translateX(50%)"
      },
      onClick: o,
      ...t,
      children: r ? /* @__PURE__ */ c.jsx(zm, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Wm, { className: "size-5", strokeWidth: 2 })
    }
  );
});
xm.displayName = "SideNavigationCollapseButton";
const kk = oe(
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
), Nk = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(Ck, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(bm, { ref: n, ...t }) }));
Nk.displayName = "SideNavigation";
const bm = S.forwardRef(
  ({
    className: e,
    width: t,
    header: n,
    footer: r,
    children: o,
    showCollapseButton: a = !1,
    ...s
  }, i) => {
    const { isCollapsed: l } = lr();
    S.useEffect(() => {
      const f = l ? "3.25rem" : "12.5rem";
      return document.documentElement.style.setProperty(
        // Using a chemican component prefix to avoid conflicts in consuming projects
        "--cc-side-navigation-width",
        f
      ), () => {
        document.documentElement.style.removeProperty(
          "--cc-side-navigation-width"
        );
      };
    }, [l]);
    const d = t || (l ? "collapsed" : "expanded");
    return /* @__PURE__ */ c.jsxs(
      "nav",
      {
        ref: i,
        className: _(
          kk({ width: d }),
          "group",
          e
        ),
        "data-collapsed": l,
        ...s,
        children: [
          n && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: _(
                "p-sm",
                l ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(Sk, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(xm, {})
        ]
      }
    );
  }
);
bm.displayName = "SideNavigationContent";
const Ek = oe(
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
), Mk = S.forwardRef(
  ({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    label: o,
    children: a,
    disabled: s,
    ...i
  }, l) => {
    const { isCollapsed: d, isInFooter: f } = lr(), m = r ? Qr : "button", p = s ? "disabled" : t;
    return /* @__PURE__ */ c.jsx(
      m,
      {
        ref: l,
        className: _(
          Ek({
            variant: p,
            size: n,
            collapsed: d
          }),
          !f && "font-bold",
          e
        ),
        disabled: s,
        ...i,
        children: a || o
      }
    );
  }
);
Mk.displayName = "SideNavigationItem";
const Pk = oe("flex flex-col", {
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
}), Rk = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = lr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: _(
        Pk({ isCollapsed: s, isLast: r }),
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
Rk.displayName = "SideNavigationSection";
const Ak = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Dk = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", mN = () => {
  const { isCollapsed: e } = lr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Ak,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Dk,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, _k = oe(
  "px-xs py-xxs text-interactive-inverse inline-flex items-center rounded-full",
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
), Ok = oe("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), pN = ({
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
      className: _(
        _k({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: Ok({ indicator: s }) }),
        /* @__PURE__ */ c.jsx("div", { className: "truncate", children: e }),
        !!a && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: _(
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
}, jk = S.forwardRef(
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
      ym,
      {
        ref: s,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...a
      }
    ) : /* @__PURE__ */ c.jsxs("div", { ref: s, className: _("px-xxl w-full", e), ...a, children: [
      /* @__PURE__ */ c.jsx("div", { className: "gap-sm flex items-center", children: i.map((l, d) => /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: _(
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
                    Vi,
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
              className: _(
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
            className: _(
              "h-0.25 flex-1 transition-colors",
              l.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, l.id)) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "h-8" })
    ] });
  }
), ym = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((h) => h.status === "active"), i = Math.max(
    0,
    Math.min(s, a - 1)
  ), l = t[i] || t[0], d = a > 0 ? (i + 1) / a * 100 : 0, f = 2 * Math.PI * 24, m = f, p = f - d / 100 * f;
  return /* @__PURE__ */ c.jsx("div", { ref: o, className: _("space-y-6", e), ...r, children: /* @__PURE__ */ c.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
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
                strokeDasharray: m,
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
ym.displayName = "RadialStepper";
jk.displayName = "Stepper";
const Ik = u.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    Sb,
    {
      ref: o,
      id: a,
      "data-slot": "switch",
      className: _(
        `peer data-[state=checked]:enabled:bg-status-success
        data-[state=unchecked]:enabled:bg-shape-accent-gray-soft
        data-[state=checked]:disabled:bg-interactive-neutral-selected
        data-[state=unchecked]:disabled:bg-interactive-disabled h-6 w-10
        data-[state=checked]:enabled:hover:bg-shape-interactive-primary-hover
        data-[state=unchecked]:enabled:hover:bg-shape-accent-gray-strong
        inline-flex shrink-0 cursor-pointer items-center rounded-full
        transition-all outline-none focus-visible:ring-[3px]
        focus-visible:ring-[var(--token-color-background-interactive-neutral-active)]
        disabled:cursor-not-allowed`,
        e
      ),
      ...r,
      children: /* @__PURE__ */ c.jsx(
        kb,
        {
          "data-slot": "switch-thumb",
          className: _(
            `data-[state=checked]:bg-shape-interactive-inverse size-4
          data-[state=unchecked]:bg-shape-accent-gray-pale
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
Ik.displayName = "Switch";
const _a = {
  loading: !1,
  loadingText: "ローディング中…"
}, wm = S.createContext(
  _a
), Cm = () => S.useContext(wm), Tk = S.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = _a.loading,
    loadingText: r = _a.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(wm.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "border-surface-default bg-surface-primary relative border",
        children: /* @__PURE__ */ c.jsx(
          "table",
          {
            ref: a,
            className: _("w-full caption-bottom", e),
            ...o,
            children: t
          }
        )
      }
    ) });
  }
);
Tk.displayName = "Table";
const $k = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Cm(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: _("text-sm bg-surface-tertiary top-0 sticky", e),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            Ss.Linear,
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
$k.displayName = "TableHeader";
const Fk = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Cm(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx(
      "td",
      {
        className: `py-sm h-12 sticky
                left-[calc((100vw+var(--cc-side-navigation-width,0px))/2)]
                min-w-fit px-[1.44rem] text-center align-middle`,
        children: /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `top-0 absolute flex h-full w-max -translate-x-1/2
                  transform items-center`,
            children: d
          }
        )
      }
    ) }) : r });
  }
);
Fk.displayName = "TableBody";
const Wk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: _("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
Wk.displayName = "TableFooter";
const Lk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: _(
      `border-surface-default [thead_&]:h-10 h-12
      [tbody_&]:hover:bg-interactive-neutral-hover group relative
      transition-colors [:not(:last-child)]:border-b`,
      e
    ),
    ...t
  }
));
Lk.displayName = "TableRow";
const Vk = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: r,
    className: _(
      `text-body-secondary font-medium h-10 [&:has([role=checkbox])]:w-9
      [&:has([role=checkbox])]:pt-xs [&:has([role=checkbox])]:pb-xs
      [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      max-w-[400px] text-left leading-[1.2] [&:has([role=checkbox])]:max-w-none`,
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
Vk.displayName = "TableHead";
const Bk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: _(
      `py-sm [&:has([role=checkbox])]:pl-xl [&:has([role=checkbox])]:pr-0 px-md
      text-md align-middle leading-[1.5]`,
      e
    ),
    ...t
  }
));
Bk.displayName = "TableCell";
const zk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: _("text-body-primary mt-md text-sm", e),
    ...t
  }
));
zk.displayName = "TableCaption";
const hN = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  "button",
  {
    ref: r,
    className: _(
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
)), Hk = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: r,
    className: _(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ c.jsx(
      "div",
      {
        className: _(
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
Hk.displayName = "TableRowOverlay";
const Sm = S.createContext({
  size: "normal"
}), Yk = () => S.useContext(Sm), Gk = oe("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), Uk = oe(
  `text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 relative inline-flex cursor-pointer items-center
  justify-center border-b leading-[100%] tracking-[0] transition-colors
  after:absolute after:bottom-[-1px] after:w-full after:transition-all
  after:content-[''] hover:after:h-[2px]
  hover:after:bg-[var(--chemican-green-800)] disabled:cursor-not-allowed
  data-[state=active]:text-[var(--chemican-green-800)]
  data-[state=active]:after:h-[2px]
  data-[state=active]:after:bg-[var(--chemican-green-800)]`,
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
), Kk = S.forwardRef(({ className: e, size: t, children: n, ...r }, o) => {
  const a = t ? { size: t } : {};
  return /* @__PURE__ */ c.jsx(Sm.Provider, { value: a, children: /* @__PURE__ */ c.jsx(Pb, { ref: o, className: _("w-full", e), ...r, children: /* @__PURE__ */ c.jsx(Rb, { className: _(Gk({ size: t })), role: "tablist", children: n }) }) });
});
Kk.displayName = "TabBar";
const qk = S.forwardRef(({ className: e, size: t, label: n, disabled: r, ...o }, a) => {
  const { size: s } = Yk(), i = t ?? s;
  return /* @__PURE__ */ c.jsx(
    Ab,
    {
      ref: a,
      className: _(Uk({ size: i }), e),
      disabled: r,
      ...o,
      children: n
    }
  );
});
qk.displayName = "Tab";
const Xk = oe(
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
), Zk = S.forwardRef(
  ({
    invalid: e,
    className: t,
    characterLimit: n = 0,
    showCharacterLimit: r = !0,
    ...o
  }, a) => {
    const [s, i] = Te(o.value);
    Lt(() => {
      i(o.value);
    }, [o.value]);
    const l = (d) => {
      if (n && d.target.value.length > n) {
        d.preventDefault();
        return;
      }
      i(d.target.value), o.onChange && o.onChange(d);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          ref: a,
          className: _(Xk({ invalid: e }), t),
          ...o,
          value: s,
          onChange: l
        }
      ),
      !!(n && r) && /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        (s == null ? void 0 : s.toString().length) || 0,
        "/",
        n
      ] })
    ] });
  }
);
Zk.displayName = "TextArea";
const vN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  Xb,
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
            Ui,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Os,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Os,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Ar, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            Zb,
            {
              className: _("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ c.jsx(
                "h5",
                {
                  className: _("text-md leading-none", {
                    "mb-xs": !!e
                  }),
                  children: t
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(Qb, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(Jb, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(aa, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), gN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(Kb, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    qb,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Wi = oe(
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
), Qk = S.forwardRef(
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
    errorMessage: f,
    successMessage: m,
    onFileRemove: p,
    dragDropText: h = "ここにドラッグ&ドロップ",
    orText: x = "または",
    selectFileText: v = "ファイルを選択",
    dropFilesText: g = "ここにファイルをドロップ",
    uploadingText: w = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: y = "アップロードに失敗しました",
    ...k
  }, C) => {
    const [M, N] = Te(!1), P = Nt(null), T = ve(
      (E) => {
        E.preventDefault(), E.stopPropagation(), M || N(!0);
      },
      [M]
    ), B = ve((E) => {
      E.preventDefault(), E.stopPropagation(), N(!1);
    }, []), F = ve((E) => {
      E.preventDefault(), E.stopPropagation();
    }, []), Y = ve(
      (E) => {
        if (E.preventDefault(), E.stopPropagation(), N(!1), s) return;
        const A = E.dataTransfer.files;
        A && A.length > 0 && (r == null || r(A));
      },
      [s, r]
    ), Q = ve(() => {
      var E;
      s || (E = P.current) == null || E.click();
    }, [s]), I = ve(
      (E) => {
        const A = E.target.files;
        A && A.length > 0 && (r == null || r(A));
      },
      [r]
    ), H = M ? "dragging" : n, V = () => /* @__PURE__ */ c.jsx(
      Km,
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
        Ne,
        {
          size: "xs",
          intent: "tertiary",
          icon: js,
          onClick: (E) => {
            E.stopPropagation(), Q();
          },
          children: v
        }
      )
    ] }), D = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
      V(),
      /* @__PURE__ */ c.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        g,
        " ",
        /* @__PURE__ */ c.jsx("span", { className: "text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ne,
        {
          size: "xs",
          intent: "tertiary",
          className: "self-center",
          icon: js,
          onClick: (E) => {
            E.stopPropagation(), Q();
          },
          children: v
        }
      )
    ] }), $ = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: _(Wi({ size: t, state: "default", disabled: s })),
        onDragEnter: T,
        onDragLeave: B,
        onDragOver: F,
        onDrop: Y,
        onClick: Q,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              ref: P,
              type: "file",
              className: "sr-only",
              accept: o,
              multiple: a,
              onChange: I,
              disabled: s
            }
          ),
          t === "small" ? U() : D()
        ]
      }
    ), K = () => {
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
          Ss.Linear,
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
              onClick: (A) => {
                A.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(rp, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            Gm,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: m || b })
        ] })
      ] }) : H === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || E }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(Om, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: f || y })
        ] })
      ] }) : null;
    }, R = () => t === "small" ? U() : D();
    return H === "inProgress" && i !== void 0 || H === "success" || H === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: _(e), ...k, children: [
      $(),
      K()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: _(
          Wi({ size: t, state: H, disabled: s }),
          e
        ),
        onDragEnter: T,
        onDragLeave: B,
        onDragOver: F,
        onDrop: Y,
        onClick: Q,
        role: "button",
        tabIndex: s ? -1 : 0,
        "aria-disabled": s,
        ...k,
        children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              ref: P,
              type: "file",
              className: "sr-only",
              accept: o,
              multiple: a,
              onChange: I,
              disabled: s
            }
          ),
          R()
        ]
      }
    );
  }
);
Qk.displayName = "FileUploader";
export {
  oN as Accordion,
  rN as AccountMenu,
  nm as AutoSuggest,
  sw as Badge,
  lw as Breadcrumbs,
  Ne as Button,
  $f as Calendar,
  ZC as Callout,
  jr as Checkbox,
  eS as CheckboxGroup,
  sN as DataSheet,
  Zf as DataSheetAction,
  Lf as DataSheetHeader,
  Bf as DataSheetKeyValue,
  Vf as DataSheetSection,
  Gf as DataSheetTable,
  Xf as DataSheetTableActionsCell,
  Kf as DataSheetTableBody,
  qr as DataSheetTableCell,
  Uf as DataSheetTableHeader,
  qf as DataSheetTableRow,
  hS as DatePicker,
  iN as Dialog,
  ef as Dropdown,
  Ju as DropdownContent,
  rw as DropdownItem,
  aw as DropdownLabel,
  ow as DropdownSeparator,
  tf as DropdownTrigger,
  Qk as FileUploader,
  Sk as FooterProvider,
  lN as FormField,
  mN as Logo,
  tk as MultiSelect,
  cN as MultiStepDialog,
  sk as Pagination,
  Ss as ProgressIndicator,
  uN as RadioButton,
  fN as RadioButtonGroup,
  wk as SearchBar,
  Da as Select,
  Nk as SideNavigation,
  xm as SideNavigationCollapseButton,
  Mk as SideNavigationItem,
  Ck as SideNavigationProvider,
  Rk as SideNavigationSection,
  pN as StatusIndicator,
  jk as Stepper,
  Ik as Switch,
  qk as Tab,
  Kk as TabBar,
  Tk as Table,
  Fk as TableBody,
  zk as TableCaption,
  Bk as TableCell,
  Wk as TableFooter,
  Vk as TableHead,
  hN as TableHeadSortButton,
  $k as TableHeader,
  Lk as TableRow,
  Hk as TableRowOverlay,
  Pa as Tag,
  rm as TagInput,
  Zk as TextArea,
  dN as TextField,
  Ff as TextLink,
  vN as ToastItem,
  gN as ToastProvider,
  Vt as Tooltip,
  aN as TooltipProvider,
  MS as colorCodeToTokenMap,
  Wn as iconVariants,
  fS as inputVariants,
  Qf as inputWrapperVariants,
  lr as useSideNavigation
};
