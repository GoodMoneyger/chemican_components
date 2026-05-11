import * as m from "react";
import S, { forwardRef as Am, createElement as $o, useState as Te, useLayoutEffect as Ki, createContext as Xr, useContext as $r, useCallback as he, useRef as bt, useEffect as Vt, useMemo as Rr } from "react";
import * as Kn from "react-dom";
import Dm from "react-dom";
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
var Ts;
function jm() {
  if (Ts) return Dn;
  Ts = 1;
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
var jn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $s;
function _m() {
  return $s || ($s = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === _ ? null : R.displayName || R.name || null;
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
        case E:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case h:
            return "Portal";
          case k:
            return R.displayName || "Context";
          case y:
            return (R._context.displayName || "Context") + ".Consumer";
          case C:
            var N = R.render;
            return R = R.displayName, R || (R = N.displayName || N.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case P:
            return N = R.displayName || null, N !== null ? N : e(R.type) || "Memo";
          case I:
            N = R._payload, R = R._init;
            try {
              return e(R(N));
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
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var O = N.error, B = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return O.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === I)
        return "<...>";
      try {
        var N = e(R);
        return N ? "<" + N + ">" : "<...>";
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
        var N = Object.getOwnPropertyDescriptor(R, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, N) {
      function O() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: O,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return U[R] || (U[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, N, O, B, K, L) {
      var D = O.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: N,
        props: O,
        _owner: B
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
        value: K
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, N, O, B, K, L) {
      var D = N.children;
      if (D !== void 0)
        if (B)
          if ($(D)) {
            for (B = 0; B < D.length; B++)
              f(D[B]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (Y.call(N, "key")) {
        D = e(R);
        var q = Object.keys(N).filter(function(re) {
          return re !== "key";
        });
        B = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", ne[D + B] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          D,
          q,
          D
        ), ne[D + B] = !0);
      }
      if (D = null, O !== void 0 && (n(O), D = "" + O), s(N) && (n(N.key), D = "" + N.key), "key" in N) {
        O = {};
        for (var J in N)
          J !== "key" && (O[J] = N[J]);
      } else O = N;
      return D && i(
        O,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        D,
        O,
        o(),
        K,
        L
      );
    }
    function f(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === I && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var v = S, x = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), W = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, $ = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var V, U = {}, j = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), F = G(r(a)), ne = {};
    jn.Fragment = g, jn.jsx = function(R, N, O) {
      var B = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        R,
        N,
        O,
        !1,
        B ? Error("react-stack-top-frame") : j,
        B ? G(r(R)) : F
      );
    }, jn.jsxs = function(R, N, O) {
      var B = 1e4 > W.recentlyCreatedOwnerStacks++;
      return u(
        R,
        N,
        O,
        !0,
        B ? Error("react-stack-top-frame") : j,
        B ? G(r(R)) : F
      );
    };
  })()), jn;
}
var Fs;
function Om() {
  return Fs || (Fs = 1, process.env.NODE_ENV === "production" ? pr.exports = jm() : pr.exports = _m()), pr.exports;
}
var c = Om();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Im = {
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
  const o = Am(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: u, ...f }, p) => $o(
      "svg",
      {
        ref: p,
        ...Im[e],
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
        l && $o("title", { key: "svg-title" }, l),
        ...r.map(([v, x]) => $o(v, x)),
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
const Tm = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], $m = ye("outline", "alert-circle", "AlertCircle", Tm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fm = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], Lm = ye("outline", "calendar-event", "CalendarEvent", Fm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Ui = ye("outline", "check", "Check", Wm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vm = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Zr = ye("outline", "chevron-down", "ChevronDown", Vm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], zm = ye("outline", "chevron-left", "ChevronLeft", Bm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hm = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], qi = ye("outline", "chevron-right", "ChevronRight", Hm);
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
const Km = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], Um = ye("outline", "cloud-up", "CloudUp", Km);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Xm = ye("outline", "dots-vertical", "DotsVertical", qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zm = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], Qm = ye("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", Zm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], ep = ye("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", Jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], np = ye("outline", "loader", "Loader", tp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [["path", { d: "M5 12l14 0", key: "svg-0" }]], op = ye("outline", "minus", "Minus", rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Xi = ye("outline", "pencil", "Pencil", ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Zi = ye("outline", "restore", "Restore", sp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Qi = ye("outline", "search", "Search", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], lp = ye("outline", "trash-x", "TrashX", cp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], Ji = ye("outline", "trash", "Trash", dp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], fp = ye("outline", "user", "User", up);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], sa = ye("outline", "x", "X", mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], hp = ye("filled", "alert-circle-filled", "AlertCircleFilled", pp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], ec = ye("filled", "circle-check-filled", "CircleCheckFilled", vp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Ls = ye("filled", "exclamation-circle-filled", "ExclamationCircleFilled", gp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Ws = ye("filled", "folder-filled", "FolderFilled", xp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Ar = ye("filled", "info-circle-filled", "InfoCircleFilled", bp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], wp = ye("filled", "lock-filled", "LockFilled", yp);
function Vs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function wt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Vs(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Vs(e[o], null);
        }
      };
  };
}
function ie(...e) {
  return m.useCallback(wt(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
  const t = /* @__PURE__ */ Cp(e), n = m.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = m.Children.toArray(a), l = i.find(kp);
    if (l) {
      const d = l.props.children, u = i.map((f) => f === l ? m.Children.count(d) > 1 ? m.Children.only(null) : m.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: m.isValidElement(d) ? m.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Qr = /* @__PURE__ */ Pt("Slot");
// @__NO_SIDE_EFFECTS__
function Cp(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (m.isValidElement(o)) {
      const s = Ep(o), i = Np(a, o.props);
      return o.type !== m.Fragment && (i.ref = r ? wt(r, s) : s), m.cloneElement(o, i);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var tc = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Sp(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = tc, t;
}
function kp(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === tc;
}
function Np(e, t) {
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
function Ep(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Mp = [
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
], Q = Mp.reduce((e, t) => {
  const n = /* @__PURE__ */ Pt(`Primitive.${t}`), r = m.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ta(e, t) {
  e && Kn.flushSync(() => e.dispatchEvent(t));
}
var nc = Object.freeze({
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
}), Pp = "VisuallyHidden", Jr = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...nc, ...e.style }
    }
  )
);
Jr.displayName = Pp;
var Rp = Jr;
function Ap(e, t) {
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
function Re(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = m.createContext(s), l = n.length;
    n = [...n, s];
    const d = (f) => {
      var w;
      const { scope: p, children: v, ...x } = f, h = ((w = p == null ? void 0 : p[e]) == null ? void 0 : w[l]) || i, g = m.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ c.jsx(h.Provider, { value: g, children: v });
    };
    d.displayName = a + "Provider";
    function u(f, p) {
      var h;
      const v = ((h = p == null ? void 0 : p[e]) == null ? void 0 : h[l]) || i, x = m.useContext(v);
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
  return o.scopeName = e, [r, Dp(o, ...t)];
}
function Dp(...e) {
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
function Un(e) {
  const t = e + "CollectionProvider", [n, r] = Re(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: g, children: w } = h, b = S.useRef(null), y = S.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ Pt(i), d = S.forwardRef(
    (h, g) => {
      const { scope: w, children: b } = h, y = a(i, w), k = ie(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: k, children: b });
    }
  );
  d.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ Pt(u), v = S.forwardRef(
    (h, g) => {
      const { scope: w, children: b, ...y } = h, k = S.useRef(null), C = ie(g, k), M = a(u, w);
      return S.useEffect(() => (M.itemMap.set(k, { ref: k, ...y }), () => void M.itemMap.delete(k))), /* @__PURE__ */ c.jsx(p, { [f]: "", ref: C, children: b });
    }
  );
  v.displayName = u;
  function x(h) {
    const g = a(e + "CollectionConsumer", h);
    return S.useCallback(() => {
      const b = g.collectionRef.current;
      if (!b) return [];
      const y = Array.from(b.querySelectorAll(`[${f}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, E) => y.indexOf(M.ref.current) - y.indexOf(E.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: s, Slot: d, ItemSlot: v },
    x,
    r
  ];
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Pe = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, jp = m[" useInsertionEffect ".trim().toString()] || Pe;
function $e({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = _p({
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
        const p = Op(u) ? u(e) : u;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function _p({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), a = m.useRef(t);
  return jp(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Op(e) {
  return typeof e == "function";
}
function Ip(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var _e = (e) => {
  const { present: t, children: n } = e, r = Tp(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = ie(r.ref, $p(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
_e.displayName = "Presence";
function Tp(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Ip(s, {
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
    const d = hr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Pe(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, v = hr(d);
      e ? l("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(u && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Pe(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = (v) => {
        const h = hr(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (v) => {
        v.target === t && (a.current = hr(r.current));
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
function hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $p(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Fp = m[" useId ".trim().toString()] || (() => {
}), Lp = 0;
function Se(e) {
  const [t, n] = m.useState(Fp());
  return Pe(() => {
    n((r) => r ?? String(Lp++));
  }, [e]), t ? `radix-${t}` : "";
}
var eo = "Collapsible", [Wp, rc] = Re(eo), [Vp, $a] = Wp(eo), oc = m.forwardRef(
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
      Vp,
      {
        scope: n,
        disabled: a,
        contentId: Se(),
        open: l,
        onOpenToggle: m.useCallback(() => d((u) => !u), [d]),
        children: /* @__PURE__ */ c.jsx(
          Q.div,
          {
            "data-state": La(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
oc.displayName = eo;
var ac = "CollapsibleTrigger", sc = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = $a(ac, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": La(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
sc.displayName = ac;
var Fa = "CollapsibleContent", ic = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = $a(Fa, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(_e, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(Bp, { ...r, ref: t, present: a }) });
  }
);
ic.displayName = Fa;
var Bp = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = $a(Fa, n), [i, l] = m.useState(r), d = m.useRef(null), u = ie(t, d), f = m.useRef(0), p = f.current, v = m.useRef(0), x = v.current, h = s.open || i, g = m.useRef(h), w = m.useRef(void 0);
  return m.useEffect(() => {
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
      f.current = y.height, v.current = y.width, g.current || (b.style.transitionDuration = w.current.transitionDuration, b.style.animationName = w.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    Q.div,
    {
      "data-state": La(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !h,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function La(e) {
  return e ? "open" : "closed";
}
var zp = oc, Hp = sc, Yp = ic, Gp = m.createContext(void 0);
function hn(e) {
  const t = m.useContext(Gp);
  return e || t || "ltr";
}
var tt = "Accordion", Kp = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Wa, Up, qp] = Un(tt), [to] = Re(tt, [
  qp,
  rc
]), Va = rc(), cc = S.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(Wa.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Jp, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Qp, { ...o, ref: t }) });
  }
);
cc.displayName = tt;
var [lc, Xp] = to(tt), [dc, Zp] = to(
  tt,
  { collapsible: !1 }
), Qp = S.forwardRef(
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
      lc,
      {
        scope: e.__scopeAccordion,
        value: S.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: S.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(dc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(uc, { ...s, ref: t }) })
      }
    );
  }
), Jp = S.forwardRef((e, t) => {
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
    (u) => i((f = []) => [...f, u]),
    [i]
  ), d = S.useCallback(
    (u) => i((f = []) => f.filter((p) => p !== u)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    lc,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(dc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(uc, { ...a, ref: t }) })
    }
  );
}), [eh, no] = to(tt), uc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = S.useRef(null), l = ie(i, t), d = Up(n), f = hn(o) === "ltr", p = H(e.onKeyDown, (v) => {
      var P;
      if (!Kp.includes(v.key)) return;
      const x = v.target, h = d().filter((I) => {
        var T;
        return !((T = I.ref.current) != null && T.disabled);
      }), g = h.findIndex((I) => I.ref.current === x), w = h.length;
      if (g === -1) return;
      v.preventDefault();
      let b = g;
      const y = 0, k = w - 1, C = () => {
        b = g + 1, b > k && (b = y);
      }, M = () => {
        b = g - 1, b < y && (b = k);
      };
      switch (v.key) {
        case "Home":
          b = y;
          break;
        case "End":
          b = k;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? C() : M());
          break;
        case "ArrowDown":
          a === "vertical" && C();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? M() : C());
          break;
        case "ArrowUp":
          a === "vertical" && M();
          break;
      }
      const E = b % w;
      (P = h[E].ref.current) == null || P.focus();
    });
    return /* @__PURE__ */ c.jsx(
      eh,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(Wa.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Q.div,
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
), Fr = "AccordionItem", [th, Ba] = to(Fr), fc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = no(Fr, n), s = Xp(Fr, n), i = Va(n), l = Se(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      th,
      {
        scope: n,
        open: d,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          zp,
          {
            "data-orientation": a.orientation,
            "data-state": xc(d),
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
fc.displayName = Fr;
var mc = "AccordionHeader", pc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Ba(mc, n);
    return /* @__PURE__ */ c.jsx(
      Q.h3,
      {
        "data-orientation": o.orientation,
        "data-state": xc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
pc.displayName = mc;
var ia = "AccordionTrigger", hc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Ba(ia, n), s = Zp(ia, n), i = Va(n);
    return /* @__PURE__ */ c.jsx(Wa.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Hp,
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
hc.displayName = ia;
var vc = "AccordionContent", gc = S.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = no(tt, n), a = Ba(vc, n), s = Va(n);
    return /* @__PURE__ */ c.jsx(
      Yp,
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
gc.displayName = vc;
function xc(e) {
  return e ? "open" : "closed";
}
var Bs = cc, nh = fc, rh = pc, oh = hc, ah = gc;
function We(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function sh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ih = "DismissableLayer", ca = "dismissableLayer.update", ch = "dismissableLayer.pointerDownOutside", lh = "dismissableLayer.focusOutside", zs, bc = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kt = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, d = m.useContext(bc), [u, f] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = m.useState({}), x = ie(t, (E) => f(E)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), b = u ? h.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, k = b >= w, C = uh((E) => {
      const P = E.target, I = [...d.branches].some((T) => T.contains(P));
      !k || I || (o == null || o(E), s == null || s(E), E.defaultPrevented || i == null || i());
    }, p), M = fh((E) => {
      const P = E.target;
      [...d.branches].some((T) => T.contains(P)) || (a == null || a(E), s == null || s(E), E.defaultPrevented || i == null || i());
    }, p);
    return sh((E) => {
      b === d.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (zs = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Hs(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = zs);
        };
    }, [u, p, n, d]), m.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Hs());
    }, [u, d]), m.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(ca, E), () => document.removeEventListener(ca, E);
    }, []), /* @__PURE__ */ c.jsx(
      Q.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Kt.displayName = ih;
var dh = "DismissableLayerBranch", yc = m.forwardRef((e, t) => {
  const n = m.useContext(bc), r = m.useRef(null), o = ie(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Q.div, { ...e, ref: o });
});
yc.displayName = dh;
function uh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          wc(
            ch,
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
function fh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && wc(lh, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Hs() {
  const e = new CustomEvent(ca);
  document.dispatchEvent(e);
}
function wc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ta(o, a) : o.dispatchEvent(a);
}
var mh = Kt, ph = yc, Fo = "focusScope.autoFocusOnMount", Lo = "focusScope.autoFocusOnUnmount", Ys = { bubbles: !1, cancelable: !0 }, hh = "FocusScope", qn = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = m.useState(null), d = We(o), u = We(a), f = m.useRef(null), p = ie(t, (h) => l(h)), v = m.useRef({
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
      let h = function(y) {
        if (v.paused || !i) return;
        const k = y.target;
        i.contains(k) ? f.current = k : Et(f.current, { select: !0 });
      }, g = function(y) {
        if (v.paused || !i) return;
        const k = y.relatedTarget;
        k !== null && (i.contains(k) || Et(f.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && Et(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, v.paused]), m.useEffect(() => {
    if (i) {
      Ks.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const w = new CustomEvent(Fo, Ys);
        i.addEventListener(Fo, d), i.dispatchEvent(w), w.defaultPrevented || (vh(wh(Cc(i)), { select: !0 }), document.activeElement === h && Et(i));
      }
      return () => {
        i.removeEventListener(Fo, d), setTimeout(() => {
          const w = new CustomEvent(Lo, Ys);
          i.addEventListener(Lo, u), i.dispatchEvent(w), w.defaultPrevented || Et(h ?? document.body, { select: !0 }), i.removeEventListener(Lo, u), Ks.remove(v);
        }, 0);
      };
    }
  }, [i, d, u, v]);
  const x = m.useCallback(
    (h) => {
      if (!n && !r || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const b = h.currentTarget, [y, k] = gh(b);
        y && k ? !h.shiftKey && w === k ? (h.preventDefault(), n && Et(y, { select: !0 })) : h.shiftKey && w === y && (h.preventDefault(), n && Et(k, { select: !0 })) : w === b && h.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ c.jsx(Q.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
qn.displayName = hh;
function vh(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Et(r, { select: t }), document.activeElement !== n) return;
}
function gh(e) {
  const t = Cc(e), n = Gs(t, e), r = Gs(t.reverse(), e);
  return [n, r];
}
function Cc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Gs(e, t) {
  for (const n of e)
    if (!xh(n, { upTo: t })) return n;
}
function xh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function bh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Et(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && bh(e) && t && e.select();
  }
}
var Ks = yh();
function yh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Us(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Us(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Us(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function wh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ch = "Portal", Ut = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  Pe(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Dm.createPortal(/* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t }), s) : null;
});
Ut.displayName = Ch;
var Wo = 0;
function ro() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? qs()), document.body.insertAdjacentElement("beforeend", e[1] ?? qs()), Wo++, () => {
      Wo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Wo--;
    };
  }, []);
}
function qs() {
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
function Sc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Sh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Dr = "right-scroll-bar-position", jr = "width-before-scroll-bar", kh = "with-scroll-bars-hidden", Nh = "--removed-body-scroll-bar-size";
function Vo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Eh(e, t) {
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
var Mh = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Xs = /* @__PURE__ */ new WeakMap();
function Ph(e, t) {
  var n = Eh(null, function(r) {
    return e.forEach(function(o) {
      return Vo(o, r);
    });
  });
  return Mh(function() {
    var r = Xs.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Vo(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Vo(i, s);
      });
    }
    Xs.set(n, e);
  }, [e]), n;
}
function Rh(e) {
  return e;
}
function Ah(e, t) {
  t === void 0 && (t = Rh);
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
function Dh(e) {
  e === void 0 && (e = {});
  var t = Ah(null);
  return t.options = st({ async: !0, ssr: !1 }, e), t;
}
var kc = function(e) {
  var t = e.sideCar, n = Sc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, st({}, n));
};
kc.isSideCarExport = !0;
function jh(e, t) {
  return e.useMedium(t), kc;
}
var Nc = Dh(), Bo = function() {
}, oo = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Bo,
    onWheelCapture: Bo,
    onTouchMoveCapture: Bo
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, v = e.noRelative, x = e.noIsolation, h = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, k = Sc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, M = Ph([n, t]), E = st(st({}, k), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(C, { sideCar: Nc, removeScrollBar: d, shards: f, noRelative: v, noIsolation: x, inert: h, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(i), st(st({}, E), { ref: M })) : m.createElement(b, st({}, E, { className: l, ref: M }), i)
  );
});
oo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
oo.classNames = {
  fullWidth: jr,
  zeroRight: Dr
};
var _h = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Oh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = _h();
  return t && e.setAttribute("nonce", t), e;
}
function Ih(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Th(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var $h = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Oh()) && (Ih(t, n), Th(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Fh = function() {
  var e = $h();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ec = function() {
  var e = Fh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Lh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zo = function(e) {
  return parseInt(e || "", 10) || 0;
}, Wh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zo(n), zo(r), zo(o)];
}, Vh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Lh;
  var t = Wh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Bh = Ec(), cn = "data-scroll-locked", zh = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(kh, ` {
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
  
  .`).concat(jr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Dr, " .").concat(Dr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(jr, " .").concat(jr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(cn, `] {
    `).concat(Nh, ": ").concat(i, `px;
  }
`);
}, Zs = function() {
  var e = parseInt(document.body.getAttribute(cn) || "0", 10);
  return isFinite(e) ? e : 0;
}, Hh = function() {
  m.useEffect(function() {
    return document.body.setAttribute(cn, (Zs() + 1).toString()), function() {
      var e = Zs() - 1;
      e <= 0 ? document.body.removeAttribute(cn) : document.body.setAttribute(cn, e.toString());
    };
  }, []);
}, Yh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Hh();
  var a = m.useMemo(function() {
    return Vh(o);
  }, [o]);
  return m.createElement(Bh, { styles: zh(a, !t, o, n ? "" : "!important") });
}, la = !1;
if (typeof window < "u")
  try {
    var vr = Object.defineProperty({}, "passive", {
      get: function() {
        return la = !0, !0;
      }
    });
    window.addEventListener("test", vr, vr), window.removeEventListener("test", vr, vr);
  } catch {
    la = !1;
  }
var en = la ? { passive: !1 } : !1, Gh = function(e) {
  return e.tagName === "TEXTAREA";
}, Mc = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gh(e) && n[t] === "visible")
  );
}, Kh = function(e) {
  return Mc(e, "overflowY");
}, Uh = function(e) {
  return Mc(e, "overflowX");
}, Qs = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Pc(e, r);
    if (o) {
      var a = Rc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, qh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Xh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Pc = function(e, t) {
  return e === "v" ? Kh(t) : Uh(t);
}, Rc = function(e, t) {
  return e === "v" ? qh(t) : Xh(t);
}, Zh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Qh = function(e, t, n, r, o) {
  var a = Zh(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var v = Rc(e, i), x = v[0], h = v[1], g = v[2], w = h - g - a * x;
    (x || w) && Pc(e, i) && (f += w, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(p) < 1) && (d = !0), d;
}, gr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Js = function(e) {
  return [e.deltaX, e.deltaY];
}, ei = function(e) {
  return e && "current" in e ? e.current : e;
}, Jh = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ev = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, tv = 0, tn = [];
function nv(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(tv++)[0], a = m.useState(Ec)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Sh([e.lockRef.current], (e.shards || []).map(ei), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = m.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var w = gr(h), b = n.current, y = "deltaX" in h ? h.deltaX : b[0] - w[0], k = "deltaY" in h ? h.deltaY : b[1] - w[1], C, M = h.target, E = Math.abs(y) > Math.abs(k) ? "h" : "v";
    if ("touches" in h && E === "h" && M.type === "range")
      return !1;
    var P = Qs(E, M);
    if (!P)
      return !0;
    if (P ? C = E : (C = E === "v" ? "h" : "v", P = Qs(E, M)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (y || k) && (r.current = C), !C)
      return !0;
    var I = r.current || C;
    return Qh(I, g, h, I === "h" ? y : k);
  }, []), l = m.useCallback(function(h) {
    var g = h;
    if (!(!tn.length || tn[tn.length - 1] !== a)) {
      var w = "deltaY" in g ? Js(g) : gr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && Jh(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(ei).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), k = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        k && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = m.useCallback(function(h, g, w, b) {
    var y = { name: h, delta: g, target: w, should: b, shadowParent: rv(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(h) {
    n.current = gr(h), r.current = void 0;
  }, []), f = m.useCallback(function(h) {
    d(h.type, Js(h), h.target, i(h, e.lockRef.current));
  }, []), p = m.useCallback(function(h) {
    d(h.type, gr(h), h.target, i(h, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return tn.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, en), document.addEventListener("touchmove", l, en), document.addEventListener("touchstart", u, en), function() {
      tn = tn.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, en), document.removeEventListener("touchmove", l, en), document.removeEventListener("touchstart", u, en);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(a, { styles: ev(o) }) : null,
    v ? m.createElement(Yh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function rv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ov = jh(Nc, nv);
var Xn = m.forwardRef(function(e, t) {
  return m.createElement(oo, st({}, e, { ref: t, sideCar: ov }));
});
Xn.classNames = oo.classNames;
var av = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {}, Ho = 0, Ac = function(e) {
  return e && (e.host || Ac(e.parentNode));
}, sv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ac(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, iv = function(e, t, n, r) {
  var o = sv(t, Array.isArray(e) ? e : [e]);
  br[n] || (br[n] = /* @__PURE__ */ new WeakMap());
  var a = br[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var v = p.getAttribute(r), x = v !== null && v !== "false", h = (nn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          nn.set(p, h), a.set(p, g), s.push(p), h === 1 && x && xr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), i.clear(), Ho++, function() {
    s.forEach(function(f) {
      var p = nn.get(f) - 1, v = a.get(f) - 1;
      nn.set(f, p), a.set(f, v), p || (xr.has(f) || f.removeAttribute(r), xr.delete(f)), v || f.removeAttribute(n);
    }), Ho--, Ho || (nn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), br = {});
  };
}, ao = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = av(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), iv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, so = "Dialog", [Dc] = Re(so), [cv, nt] = Dc(so), jc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = m.useRef(null), l = m.useRef(null), [d, u] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: so
  });
  return /* @__PURE__ */ c.jsx(
    cv,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: Se(),
      titleId: Se(),
      descriptionId: Se(),
      open: d,
      onOpenChange: u,
      onOpenToggle: m.useCallback(() => u((f) => !f), [u]),
      modal: s,
      children: n
    }
  );
};
jc.displayName = so;
var _c = "DialogTrigger", lv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(_c, n), a = ie(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ya(o.open),
        ...r,
        ref: a,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
lv.displayName = _c;
var za = "DialogPortal", [dv, Oc] = Dc(za, {
  forceMount: void 0
}), Ic = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = nt(za, t);
  return /* @__PURE__ */ c.jsx(dv, { scope: t, forceMount: n, children: m.Children.map(r, (s) => /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ut, { asChild: !0, container: o, children: s }) })) });
};
Ic.displayName = za;
var Lr = "DialogOverlay", Tc = m.forwardRef(
  (e, t) => {
    const n = Oc(Lr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Lr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(fv, { ...o, ref: t }) }) : null;
  }
);
Tc.displayName = Lr;
var uv = /* @__PURE__ */ Pt("DialogOverlay.RemoveScroll"), fv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Lr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Xn, { as: uv, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          "data-state": Ya(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Bt = "DialogContent", $c = m.forwardRef(
  (e, t) => {
    const n = Oc(Bt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = nt(Bt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(mv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(pv, { ...o, ref: t }) });
  }
);
$c.displayName = Bt;
var mv = m.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = m.useRef(null), o = ie(t, n.contentRef, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ c.jsx(
      Fc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), pv = m.forwardRef(
  (e, t) => {
    const n = nt(Bt, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Fc,
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
), Fc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = nt(Bt, n), l = m.useRef(null), d = ie(t, l);
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
            Kt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Ya(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(vv, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(xv, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ha = "DialogTitle", Lc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Ha, n);
    return /* @__PURE__ */ c.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
Lc.displayName = Ha;
var Wc = "DialogDescription", hv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Wc, n);
    return /* @__PURE__ */ c.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
hv.displayName = Wc;
var Vc = "DialogClose", Bc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = nt(Vc, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Bc.displayName = Vc;
function Ya(e) {
  return e ? "open" : "closed";
}
var zc = "DialogTitleWarning", [lN, Hc] = Ap(zc, {
  contentName: Bt,
  titleName: Ha,
  docsSlug: "dialog"
}), vv = ({ titleId: e }) => {
  const t = Hc(zc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, gv = "DialogDescriptionWarning", xv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Hc(gv).contentName}}.`;
  return m.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ga = jc, Ka = Ic, Ua = Tc, qa = $c, Yc = Lc, bv = Bc;
function io(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function co(e) {
  const [t, n] = m.useState(void 0);
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
var lo = "Checkbox", [yv] = Re(lo), [wv, Xa] = yv(lo);
function Cv(e) {
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
  } = e, [p, v] = $e({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: lo
  }), [x, h] = m.useState(null), [g, w] = m.useState(null), b = m.useRef(!1), y = x ? !!s || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), k = {
    checked: p,
    disabled: a,
    setChecked: v,
    control: x,
    setControl: h,
    name: i,
    form: s,
    value: u,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: Mt(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    wv,
    {
      scope: t,
      ...k,
      children: Sv(f) ? f(k) : r
    }
  );
}
var Gc = "CheckboxTrigger", Kc = m.forwardRef(
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
      isFormControl: v,
      bubbleInput: x
    } = Xa(Gc, e), h = ie(o, u), g = m.useRef(l);
    return m.useEffect(() => {
      const w = a == null ? void 0 : a.form;
      if (w) {
        const b = () => f(g.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, f]), /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Mt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": Jc(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: H(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: H(n, (w) => {
          f((b) => Mt(b) ? !0 : !b), x && v && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
Kc.displayName = Gc;
var Uc = m.forwardRef(
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
      Cv,
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
            Kc,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            Qc,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Uc.displayName = lo;
var qc = "CheckboxIndicator", Xc = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = Xa(qc, n);
    return /* @__PURE__ */ c.jsx(
      _e,
      {
        present: r || Mt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            "data-state": Jc(a.checked),
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
Xc.displayName = qc;
var Zc = "CheckboxBubbleInput", Qc = m.forwardRef(
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
      setBubbleInput: v
    } = Xa(Zc, e), x = ie(n, v), h = io(a), g = co(r);
    m.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, M = !o.current;
      if (h !== a && C) {
        const E = new Event("click", { bubbles: M });
        b.indeterminate = Mt(a), C.call(b, Mt(a) ? !1 : a), b.dispatchEvent(E);
      }
    }, [p, h, a, o]);
    const w = m.useRef(Mt(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Q.input,
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
Qc.displayName = Zc;
function Sv(e) {
  return typeof e == "function";
}
function Mt(e) {
  return e === "indeterminate";
}
function Jc(e) {
  return Mt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const kv = ["top", "right", "bottom", "left"], Rt = Math.min, He = Math.max, Wr = Math.round, yr = Math.floor, ut = (e) => ({
  x: e,
  y: e
}), Nv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ev = {
  start: "end",
  end: "start"
};
function da(e, t, n) {
  return He(e, Rt(t, n));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function St(e) {
  return e.split("-")[0];
}
function vn(e) {
  return e.split("-")[1];
}
function Za(e) {
  return e === "x" ? "y" : "x";
}
function Qa(e) {
  return e === "y" ? "height" : "width";
}
const Mv = /* @__PURE__ */ new Set(["top", "bottom"]);
function lt(e) {
  return Mv.has(St(e)) ? "y" : "x";
}
function Ja(e) {
  return Za(lt(e));
}
function Pv(e, t, n) {
  n === void 0 && (n = !1);
  const r = vn(e), o = Ja(e), a = Qa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Vr(s)), [s, Vr(s)];
}
function Rv(e) {
  const t = Vr(e);
  return [ua(e), t, ua(t)];
}
function ua(e) {
  return e.replace(/start|end/g, (t) => Ev[t]);
}
const ti = ["left", "right"], ni = ["right", "left"], Av = ["top", "bottom"], Dv = ["bottom", "top"];
function jv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ni : ti : t ? ti : ni;
    case "left":
    case "right":
      return t ? Av : Dv;
    default:
      return [];
  }
}
function _v(e, t, n, r) {
  const o = vn(e);
  let a = jv(St(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ua)))), a;
}
function Vr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Nv[t]);
}
function Ov(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function el(e) {
  return typeof e != "number" ? Ov(e) : {
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
function ri(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = lt(t), s = Ja(t), i = Qa(s), l = St(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (vn(t)) {
    case "start":
      v[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      v[s] += p * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Iv = async (e, t, n) => {
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
  } = ri(d, r, l), p = r, v = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: w
    } = i[h], {
      x: b,
      y,
      data: k,
      reset: C
    } = await w({
      x: u,
      y: f,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: d,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = b ?? u, f = y ?? f, v = {
      ...v,
      [g]: {
        ...v[g],
        ...k
      }
    }, C && x <= 50 && (x++, typeof C == "object" && (C.placement && (p = C.placement), C.rects && (d = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: u,
      y: f
    } = ri(d, p, l)), h = -1);
  }
  return {
    x: u,
    y: f,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function Wn(e, t) {
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
    padding: v = 0
  } = Ct(t, e), x = el(v), g = i[p ? f === "floating" ? "reference" : "floating" : f], w = Br(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), b = f === "floating" ? {
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
const Tv = (e) => ({
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
    } = Ct(e, t) || {};
    if (d == null)
      return {};
    const f = el(u), p = {
      x: n,
      y: r
    }, v = Ja(o), x = Qa(v), h = await s.getDimensions(d), g = v === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[v] - p[v] - a.floating[x], C = p[v] - a.reference[v], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let E = M ? M[y] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(M))) && (E = i.floating[y] || a.floating[x]);
    const P = k / 2 - C / 2, I = E / 2 - h[x] / 2 - 1, T = Rt(f[w], I), _ = Rt(f[b], I), W = T, Y = E - h[x] - _, $ = E / 2 - h[x] / 2 + P, G = da(W, $, Y), V = !l.arrow && vn(o) != null && $ !== G && a.reference[x] / 2 - ($ < W ? T : _) - h[x] / 2 < 0, U = V ? $ < W ? $ - W : $ - Y : 0;
    return {
      [v]: p[v] + U,
      data: {
        [v]: G,
        centerOffset: $ - G - U,
        ...V && {
          alignmentOffset: U
        }
      },
      reset: V
    };
  }
}), $v = function(e) {
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
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...g
      } = Ct(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = St(o), b = lt(i), y = St(i) === i, k = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !h ? [Vr(i)] : Rv(i)), M = x !== "none";
      !p && M && C.push(..._v(i, h, x, k));
      const E = [i, ...C], P = await Wn(t, g), I = [];
      let T = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && I.push(P[w]), f) {
        const $ = Pv(o, s, k);
        I.push(P[$[0]], P[$[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: I
      }], !I.every(($) => $ <= 0)) {
        var _, W;
        const $ = (((_ = a.flip) == null ? void 0 : _.index) || 0) + 1, G = E[$];
        if (G && (!(f === "alignment" ? b !== lt(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((j) => lt(j.placement) === b ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: T
            },
            reset: {
              placement: G
            }
          };
        let V = (W = T.filter((U) => U.overflows[0] <= 0).sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!V)
          switch (v) {
            case "bestFit": {
              var Y;
              const U = (Y = T.filter((j) => {
                if (M) {
                  const F = lt(j.placement);
                  return F === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((F) => F > 0).reduce((F, ne) => F + ne, 0)]).sort((j, F) => j[1] - F[1])[0]) == null ? void 0 : Y[0];
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
function oi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ai(e) {
  return kv.some((t) => e[t] >= 0);
}
const Fv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ct(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Wn(t, {
            ...o,
            elementContext: "reference"
          }), s = oi(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ai(s)
            }
          };
        }
        case "escaped": {
          const a = await Wn(t, {
            ...o,
            altBoundary: !0
          }), s = oi(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ai(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, tl = /* @__PURE__ */ new Set(["left", "top"]);
async function Lv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = St(n), i = vn(n), l = lt(n) === "y", d = tl.has(s) ? -1 : 1, u = a && l ? -1 : 1, f = Ct(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
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
  return i && typeof x == "number" && (v = i === "end" ? x * -1 : x), l ? {
    x: v * u,
    y: p * d
  } : {
    x: p * d,
    y: v * u
  };
}
const Wv = function(e) {
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
      } = t, l = await Lv(t, e);
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
}, Vv = function(e) {
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
      } = Ct(e, t), d = {
        x: n,
        y: r
      }, u = await Wn(t, l), f = lt(St(o)), p = Za(f);
      let v = d[p], x = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = v + u[g], y = v - u[w];
        v = da(b, v, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + u[g], y = x - u[w];
        x = da(b, x, y);
      }
      const h = i.fn({
        ...t,
        [p]: v,
        [f]: x
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [p]: a,
            [f]: s
          }
        }
      };
    }
  };
}, Bv = function(e) {
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
      } = Ct(e, t), u = {
        x: n,
        y: r
      }, f = lt(o), p = Za(f);
      let v = u[p], x = u[f];
      const h = Ct(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const y = p === "y" ? "height" : "width", k = a.reference[p] - a.floating[y] + g.mainAxis, C = a.reference[p] + a.reference[y] - g.mainAxis;
        v < k ? v = k : v > C && (v = C);
      }
      if (d) {
        var w, b;
        const y = p === "y" ? "width" : "height", k = tl.has(St(o)), C = a.reference[f] - a.floating[y] + (k && ((w = s.offset) == null ? void 0 : w[f]) || 0) + (k ? 0 : g.crossAxis), M = a.reference[f] + a.reference[y] + (k ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) - (k ? g.crossAxis : 0);
        x < C ? x = C : x > M && (x = M);
      }
      return {
        [p]: v,
        [f]: x
      };
    }
  };
}, zv = function(e) {
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
      } = Ct(e, t), u = await Wn(t, d), f = St(o), p = vn(o), v = lt(o) === "y", {
        width: x,
        height: h
      } = a.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = p === "end" ? "top" : "bottom");
      const b = h - u.top - u.bottom, y = x - u.left - u.right, k = Rt(h - u[g], b), C = Rt(x - u[w], y), M = !t.middlewareData.shift;
      let E = k, P = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y), (r = t.middlewareData.shift) != null && r.enabled.y && (E = b), M && !p) {
        const T = He(u.left, 0), _ = He(u.right, 0), W = He(u.top, 0), Y = He(u.bottom, 0);
        v ? P = x - 2 * (T !== 0 || _ !== 0 ? T + _ : He(u.left, u.right)) : E = h - 2 * (W !== 0 || Y !== 0 ? W + Y : He(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: P,
        availableHeight: E
      });
      const I = await s.getDimensions(i.floating);
      return x !== I.width || h !== I.height ? {
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
  return nl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (nl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function nl(e) {
  return uo() ? e instanceof Node || e instanceof Ye(e).Node : !1;
}
function Je(e) {
  return uo() ? e instanceof Element || e instanceof Ye(e).Element : !1;
}
function ft(e) {
  return uo() ? e instanceof HTMLElement || e instanceof Ye(e).HTMLElement : !1;
}
function si(e) {
  return !uo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
const Hv = /* @__PURE__ */ new Set(["inline", "contents"]);
function Zn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Hv.has(o);
}
const Yv = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Gv(e) {
  return Yv.has(gn(e));
}
const Kv = [":popover-open", ":modal"];
function fo(e) {
  return Kv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Uv = ["transform", "translate", "scale", "rotate", "perspective"], qv = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Xv = ["paint", "layout", "strict", "content"];
function es(e) {
  const t = ts(), n = Je(e) ? et(e) : e;
  return Uv.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || qv.some((r) => (n.willChange || "").includes(r)) || Xv.some((r) => (n.contain || "").includes(r));
}
function Zv(e) {
  let t = At(e);
  for (; ft(t) && !un(t); ) {
    if (es(t))
      return t;
    if (fo(t))
      return null;
    t = At(t);
  }
  return null;
}
function ts() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Qv = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function un(e) {
  return Qv.has(gn(e));
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
function At(e) {
  if (gn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    si(e) && e.host || // Fallback.
    mt(e)
  );
  return si(t) ? t.host : t;
}
function rl(e) {
  const t = At(e);
  return un(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Zn(t) ? t : rl(t);
}
function Vn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = rl(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ye(o);
  if (a) {
    const i = fa(s);
    return t.concat(s, s.visualViewport || [], Zn(o) ? o : [], i && n ? Vn(i) : []);
  }
  return t.concat(o, Vn(o, [], n));
}
function fa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ol(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ft(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Wr(n) !== a || Wr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function ns(e) {
  return Je(e) ? e : e.contextElement;
}
function ln(e) {
  const t = ns(e);
  if (!ft(t))
    return ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ol(t);
  let s = (a ? Wr(n.width) : n.width) / r, i = (a ? Wr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Jv = /* @__PURE__ */ ut(0);
function al(e) {
  const t = Ye(e);
  return !ts() || !t.visualViewport ? Jv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function eg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ye(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ns(e);
  let s = ut(1);
  t && (r ? Je(r) && (s = ln(r)) : s = ln(e));
  const i = eg(a, n, r) ? al(a) : ut(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = Ye(a), v = r && Je(r) ? Ye(r) : r;
    let x = p, h = fa(x);
    for (; h && r && v !== x; ) {
      const g = ln(h), w = h.getBoundingClientRect(), b = et(h), y = w.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, k = w.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, u *= g.x, f *= g.y, l += y, d += k, x = Ye(h), h = fa(x);
    }
  }
  return Br({
    width: u,
    height: f,
    x: l,
    y: d
  });
}
function po(e, t) {
  const n = mo(e).scrollLeft;
  return t ? t.left + n : zt(mt(e)).left + n;
}
function sl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - po(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function tg(e) {
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
  const u = ut(0), f = ft(r);
  if ((f || !f && !a) && ((gn(r) !== "body" || Zn(s)) && (l = mo(r)), ft(r))) {
    const v = zt(r);
    d = ln(r), u.x = v.x + r.clientLeft, u.y = v.y + r.clientTop;
  }
  const p = s && !f && !a ? sl(s, l) : ut(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + u.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + u.y + p.y
  };
}
function ng(e) {
  return Array.from(e.getClientRects());
}
function rg(e) {
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
const ii = 25;
function og(e, t) {
  const n = Ye(e), r = mt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = ts();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = po(r);
  if (d <= 0) {
    const u = r.ownerDocument, f = u.body, p = getComputedStyle(f), v = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - v);
    x <= ii && (a -= x);
  } else d <= ii && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const ag = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function sg(e, t) {
  const n = zt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ft(e) ? ln(e) : ut(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function ci(e, t, n) {
  let r;
  if (t === "viewport")
    r = og(e, n);
  else if (t === "document")
    r = rg(mt(e));
  else if (Je(t))
    r = sg(t, n);
  else {
    const o = al(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Br(r);
}
function il(e, t) {
  const n = At(e);
  return n === t || !Je(n) || un(n) ? !1 : et(n).position === "fixed" || il(n, t);
}
function ig(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Vn(e, [], !1).filter((i) => Je(i) && gn(i) !== "body"), o = null;
  const a = et(e).position === "fixed";
  let s = a ? At(e) : e;
  for (; Je(s) && !un(s); ) {
    const i = et(s), l = es(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && ag.has(o.position) || Zn(s) && !l && il(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = At(s);
  }
  return t.set(e, r), r;
}
function cg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? fo(t) ? [] : ig(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, u) => {
    const f = ci(t, u, o);
    return d.top = He(f.top, d.top), d.right = Rt(f.right, d.right), d.bottom = Rt(f.bottom, d.bottom), d.left = He(f.left, d.left), d;
  }, ci(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function lg(e) {
  const {
    width: t,
    height: n
  } = ol(e);
  return {
    width: t,
    height: n
  };
}
function dg(e, t, n) {
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
      const v = zt(t, !0, a, t);
      l.x = v.x + t.clientLeft, l.y = v.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const u = o && !r && !a ? sl(o, i) : ut(0), f = s.left + i.scrollLeft - l.x - u.x, p = s.top + i.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function Yo(e) {
  return et(e).position === "static";
}
function li(e, t) {
  if (!ft(e) || et(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function cl(e, t) {
  const n = Ye(e);
  if (fo(e))
    return n;
  if (!ft(e)) {
    let o = At(e);
    for (; o && !un(o); ) {
      if (Je(o) && !Yo(o))
        return o;
      o = At(o);
    }
    return n;
  }
  let r = li(e, t);
  for (; r && Gv(r) && Yo(r); )
    r = li(r, t);
  return r && un(r) && Yo(r) && !es(r) ? n : r || Zv(e) || n;
}
const ug = async function(e) {
  const t = this.getOffsetParent || cl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function fg(e) {
  return et(e).direction === "rtl";
}
const mg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: tg,
  getDocumentElement: mt,
  getClippingRect: cg,
  getOffsetParent: cl,
  getElementRects: ug,
  getClientRects: ng,
  getDimensions: lg,
  getScale: ln,
  isElement: Je,
  isRTL: fg
};
function ll(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function pg(e, t) {
  let n = null, r;
  const o = mt(e);
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
      height: v
    } = d;
    if (i || t(), !p || !v)
      return;
    const x = yr(f), h = yr(o.clientWidth - (u + p)), g = yr(o.clientHeight - (f + v)), w = yr(u), y = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: He(0, Rt(1, l)) || 1
    };
    let k = !0;
    function C(M) {
      const E = M[0].intersectionRatio;
      if (E !== l) {
        if (!k)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !ll(d, e.getBoundingClientRect()) && s(), k = !1;
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
function hg(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = ns(e), u = o || a ? [...d ? Vn(d) : [], ...Vn(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = d && i ? pg(d, n) : null;
  let p = -1, v = null;
  s && (v = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = v) == null || y.observe(t);
    })), n();
  }), d && !l && v.observe(d), v.observe(t));
  let x, h = l ? zt(e) : null;
  l && g();
  function g() {
    const w = zt(e);
    h && !ll(h, w) && n(), h = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f == null || f(), (w = v) == null || w.disconnect(), v = null, l && cancelAnimationFrame(x);
  };
}
const vg = Wv, gg = Vv, xg = $v, bg = zv, yg = Fv, di = Tv, wg = Bv, Cg = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: mg,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Iv(e, t, {
    ...o,
    platform: a
  });
};
var Sg = typeof document < "u", kg = function() {
}, _r = Sg ? Ki : kg;
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
function dl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ui(e, t) {
  const n = dl(e);
  return Math.round(t * n) / n;
}
function Go(e) {
  const t = m.useRef(e);
  return _r(() => {
    t.current = e;
  }), t;
}
function Ng(e) {
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
  }), [p, v] = m.useState(r);
  zr(p, r) || v(r);
  const [x, h] = m.useState(null), [g, w] = m.useState(null), b = m.useCallback((j) => {
    j !== M.current && (M.current = j, h(j));
  }, []), y = m.useCallback((j) => {
    j !== E.current && (E.current = j, w(j));
  }, []), k = a || x, C = s || g, M = m.useRef(null), E = m.useRef(null), P = m.useRef(u), I = l != null, T = Go(l), _ = Go(o), W = Go(d), Y = m.useCallback(() => {
    if (!M.current || !E.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    _.current && (j.platform = _.current), Cg(M.current, E.current, j).then((F) => {
      const ne = {
        ...F,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      $.current && !zr(P.current, ne) && (P.current = ne, Kn.flushSync(() => {
        f(ne);
      }));
    });
  }, [p, t, n, _, W]);
  _r(() => {
    d === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [d]);
  const $ = m.useRef(!1);
  _r(() => ($.current = !0, () => {
    $.current = !1;
  }), []), _r(() => {
    if (k && (M.current = k), C && (E.current = C), k && C) {
      if (T.current)
        return T.current(k, C, Y);
      Y();
    }
  }, [k, C, Y, T, I]);
  const G = m.useMemo(() => ({
    reference: M,
    floating: E,
    setReference: b,
    setFloating: y
  }), [b, y]), V = m.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), U = m.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return j;
    const F = ui(V.floating, u.x), ne = ui(V.floating, u.y);
    return i ? {
      ...j,
      transform: "translate(" + F + "px, " + ne + "px)",
      ...dl(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: ne
    };
  }, [n, i, V.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: Y,
    refs: G,
    elements: V,
    floatingStyles: U
  }), [u, Y, G, V, U]);
}
const Eg = (e) => {
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
      return r && t(r) ? r.current != null ? di({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? di({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Mg = (e, t) => ({
  ...vg(e),
  options: [e, t]
}), Pg = (e, t) => ({
  ...gg(e),
  options: [e, t]
}), Rg = (e, t) => ({
  ...wg(e),
  options: [e, t]
}), Ag = (e, t) => ({
  ...xg(e),
  options: [e, t]
}), Dg = (e, t) => ({
  ...bg(e),
  options: [e, t]
}), jg = (e, t) => ({
  ...yg(e),
  options: [e, t]
}), _g = (e, t) => ({
  ...Eg(e),
  options: [e, t]
});
var Og = "Arrow", ul = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    Q.svg,
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
ul.displayName = Og;
var Ig = ul, rs = "Popper", [fl, jt] = Re(rs), [Tg, ml] = fl(rs), pl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ c.jsx(Tg, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
pl.displayName = rs;
var hl = "PopperAnchor", vl = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = ml(hl, n), s = m.useRef(null), i = ie(t, s), l = m.useRef(null);
    return m.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Q.div, { ...o, ref: i });
  }
);
vl.displayName = hl;
var os = "PopperContent", [$g, Fg] = fl(os), gl = m.forwardRef(
  (e, t) => {
    var D, q, J, re, ue, fe;
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
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...h
    } = e, g = ml(os, n), [w, b] = m.useState(null), y = ie(t, (Me) => b(Me)), [k, C] = m.useState(null), M = co(k), E = (M == null ? void 0 : M.width) ?? 0, P = (M == null ? void 0 : M.height) ?? 0, I = r + (a !== "center" ? "-" + a : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, _ = Array.isArray(d) ? d : [d], W = _.length > 0, Y = {
      padding: T,
      boundary: _.filter(Wg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: $, floatingStyles: G, placement: V, isPositioned: U, middlewareData: j } = Ng({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...Me) => hg(...Me, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Mg({ mainAxis: o + P, alignmentAxis: s }),
        l && Pg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Rg() : void 0,
          ...Y
        }),
        l && Ag({ ...Y }),
        Dg({
          ...Y,
          apply: ({ elements: Me, rects: Ie, availableWidth: rt, availableHeight: Xe }) => {
            const { width: ot, height: Zt } = Ie.reference, Le = Me.floating.style;
            Le.setProperty("--radix-popper-available-width", `${rt}px`), Le.setProperty("--radix-popper-available-height", `${Xe}px`), Le.setProperty("--radix-popper-anchor-width", `${ot}px`), Le.setProperty("--radix-popper-anchor-height", `${Zt}px`);
          }
        }),
        k && _g({ element: k, padding: i }),
        Vg({ arrowWidth: E, arrowHeight: P }),
        p && jg({ strategy: "referenceHidden", ...Y })
      ]
    }), [F, ne] = yl(V), R = We(x);
    Pe(() => {
      U && (R == null || R());
    }, [U, R]);
    const N = (D = j.arrow) == null ? void 0 : D.x, O = (q = j.arrow) == null ? void 0 : q.y, B = ((J = j.arrow) == null ? void 0 : J.centerOffset) !== 0, [K, L] = m.useState();
    return Pe(() => {
      w && L(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: U ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
          "--radix-popper-transform-origin": [
            (re = j.transformOrigin) == null ? void 0 : re.x,
            (ue = j.transformOrigin) == null ? void 0 : ue.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((fe = j.hide) == null ? void 0 : fe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          $g,
          {
            scope: n,
            placedSide: F,
            onArrowChange: C,
            arrowX: N,
            arrowY: O,
            shouldHideArrow: B,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
              {
                "data-side": F,
                "data-align": ne,
                ...h,
                ref: y,
                style: {
                  ...h.style,
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
gl.displayName = os;
var xl = "PopperArrow", Lg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bl = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Fg(xl, r), s = Lg[a.placedSide];
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
          Ig,
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
bl.displayName = xl;
function Wg(e) {
  return e !== null;
}
var Vg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, u] = yl(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, v = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = s ? f : `${p}px`, h = `${-l}px`) : d === "top" ? (x = s ? f : `${p}px`, h = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, h = s ? f : `${v}px`) : d === "left" && (x = `${r.floating.width + l}px`, h = s ? f : `${v}px`), { data: { x, y: h } };
  }
});
function yl(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ho = pl, Qn = vl, vo = gl, go = bl, Ko = "rovingFocusGroup.onEntryFocus", Bg = { bubbles: !1, cancelable: !0 }, Jn = "RovingFocusGroup", [ma, wl, zg] = Un(Jn), [Hg, xn] = Re(
  Jn,
  [zg]
), [Yg, Gg] = Hg(Jn), Cl = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(ma.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(ma.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Kg, { ...e, ref: t }) }) })
);
Cl.displayName = Jn;
var Kg = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), v = ie(t, p), x = hn(a), [h, g] = $e({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Jn
  }), [w, b] = m.useState(!1), y = We(d), k = wl(n), C = m.useRef(!1), [M, E] = m.useState(0);
  return m.useEffect(() => {
    const P = p.current;
    if (P)
      return P.addEventListener(Ko, y), () => P.removeEventListener(Ko, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    Yg,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: h,
      onItemFocus: m.useCallback(
        (P) => g(P),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => E((P) => P + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => E((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        Q.div,
        {
          tabIndex: w || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: H(e.onFocus, (P) => {
            const I = !C.current;
            if (P.target === P.currentTarget && I && !w) {
              const T = new CustomEvent(Ko, Bg);
              if (P.currentTarget.dispatchEvent(T), !T.defaultPrevented) {
                const _ = k().filter((V) => V.focusable), W = _.find((V) => V.active), Y = _.find((V) => V.id === h), G = [W, Y, ..._].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Nl(G, u);
              }
            }
            C.current = !1;
          }),
          onBlur: H(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Sl = "RovingFocusGroupItem", kl = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Se(), d = a || l, u = Gg(Sl, n), f = u.currentTabStopId === d, p = wl(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: h } = u;
    return m.useEffect(() => {
      if (r)
        return v(), () => x();
    }, [r, v, x]), /* @__PURE__ */ c.jsx(
      ma.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: H(e.onMouseDown, (g) => {
              r ? u.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: H(e.onFocus, () => u.onItemFocus(d)),
            onKeyDown: H(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const w = Xg(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((k) => k.focusable).map((k) => k.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const k = y.indexOf(g.currentTarget);
                  y = u.loop ? Zg(y, k + 1) : y.slice(k + 1);
                }
                setTimeout(() => Nl(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
kl.displayName = Sl;
var Ug = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function qg(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Xg(e, t, n) {
  const r = qg(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Ug[r];
}
function Nl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Zg(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var as = Cl, ss = kl, pa = ["Enter", " "], Qg = ["ArrowDown", "PageUp", "Home"], El = ["ArrowUp", "PageDown", "End"], Jg = [...Qg, ...El], ex = {
  ltr: [...pa, "ArrowRight"],
  rtl: [...pa, "ArrowLeft"]
}, tx = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, er = "Menu", [Bn, nx, rx] = Un(er), [qt, Ml] = Re(er, [
  rx,
  jt,
  xn
]), xo = jt(), Pl = xn(), [ox, Xt] = qt(er), [ax, tr] = qt(er), Rl = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = xo(t), [l, d] = m.useState(null), u = m.useRef(!1), f = We(a), p = hn(o);
  return m.useEffect(() => {
    const v = () => {
      u.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => u.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(ho, { ...i, children: /* @__PURE__ */ c.jsx(
    ox,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        ax,
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
Rl.displayName = er;
var sx = "MenuAnchor", is = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(Qn, { ...o, ...r, ref: t });
  }
);
is.displayName = sx;
var cs = "MenuPortal", [ix, Al] = qt(cs, {
  forceMount: void 0
}), Dl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Xt(cs, t);
  return /* @__PURE__ */ c.jsx(ix, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ut, { asChild: !0, container: o, children: r }) }) });
};
Dl.displayName = cs;
var qe = "MenuContent", [cx, ls] = qt(qe), jl = m.forwardRef(
  (e, t) => {
    const n = Al(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(lx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(dx, { ...o, ref: t }) }) }) });
  }
), lx = m.forwardRef(
  (e, t) => {
    const n = Xt(qe, e.__scopeMenu), r = m.useRef(null), o = ie(t, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ c.jsx(
      ds,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), dx = m.forwardRef((e, t) => {
  const n = Xt(qe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    ds,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), ux = /* @__PURE__ */ Pt("MenuContent.ScrollLock"), ds = m.forwardRef(
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
      onDismiss: v,
      disableOutsideScroll: x,
      ...h
    } = e, g = Xt(qe, n), w = tr(qe, n), b = xo(n), y = Pl(n), k = nx(n), [C, M] = m.useState(null), E = m.useRef(null), P = ie(t, E, g.onContentChange), I = m.useRef(0), T = m.useRef(""), _ = m.useRef(0), W = m.useRef(null), Y = m.useRef("right"), $ = m.useRef(0), G = x ? Xn : m.Fragment, V = x ? { as: ux, allowPinchZoom: !0 } : void 0, U = (F) => {
      var D, q;
      const ne = T.current + F, R = k().filter((J) => !J.disabled), N = document.activeElement, O = (D = R.find((J) => J.ref.current === N)) == null ? void 0 : D.textValue, B = R.map((J) => J.textValue), K = Sx(B, ne, O), L = (q = R.find((J) => J.textValue === K)) == null ? void 0 : q.ref.current;
      (function J(re) {
        T.current = re, window.clearTimeout(I.current), re !== "" && (I.current = window.setTimeout(() => J(""), 1e3));
      })(ne), L && setTimeout(() => L.focus());
    };
    m.useEffect(() => () => window.clearTimeout(I.current), []), ro();
    const j = m.useCallback((F) => {
      var R, N;
      return Y.current === ((R = W.current) == null ? void 0 : R.side) && Nx(F, (N = W.current) == null ? void 0 : N.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      cx,
      {
        scope: n,
        searchRef: T,
        onItemEnter: m.useCallback(
          (F) => {
            j(F) && F.preventDefault();
          },
          [j]
        ),
        onItemLeave: m.useCallback(
          (F) => {
            var ne;
            j(F) || ((ne = E.current) == null || ne.focus(), M(null));
          },
          [j]
        ),
        onTriggerLeave: m.useCallback(
          (F) => {
            j(F) && F.preventDefault();
          },
          [j]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: m.useCallback((F) => {
          W.current = F;
        }, []),
        children: /* @__PURE__ */ c.jsx(G, { ...V, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: H(a, (F) => {
              var ne;
              F.preventDefault(), (ne = E.current) == null || ne.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              Kt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: u,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: v,
                children: /* @__PURE__ */ c.jsx(
                  as,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: M,
                    onEntryFocus: H(l, (F) => {
                      w.isUsingKeyboardRef.current || F.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      vo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ul(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...h,
                        ref: P,
                        style: { outline: "none", ...h.style },
                        onKeyDown: H(h.onKeyDown, (F) => {
                          const R = F.target.closest("[data-radix-menu-content]") === F.currentTarget, N = F.ctrlKey || F.altKey || F.metaKey, O = F.key.length === 1;
                          R && (F.key === "Tab" && F.preventDefault(), !N && O && U(F.key));
                          const B = E.current;
                          if (F.target !== B || !Jg.includes(F.key)) return;
                          F.preventDefault();
                          const L = k().filter((D) => !D.disabled).map((D) => D.ref.current);
                          El.includes(F.key) && L.reverse(), wx(L);
                        }),
                        onBlur: H(e.onBlur, (F) => {
                          F.currentTarget.contains(F.target) || (window.clearTimeout(I.current), T.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          zn((F) => {
                            const ne = F.target, R = $.current !== F.clientX;
                            if (F.currentTarget.contains(ne) && R) {
                              const N = F.clientX > $.current ? "right" : "left";
                              Y.current = N, $.current = F.clientX;
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
jl.displayName = qe;
var fx = "MenuGroup", us = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { role: "group", ...r, ref: t });
  }
);
us.displayName = fx;
var mx = "MenuLabel", _l = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
_l.displayName = mx;
var Hr = "MenuItem", fi = "menu.itemSelect", bo = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = m.useRef(null), s = tr(Hr, e.__scopeMenu), i = ls(Hr, e.__scopeMenu), l = ie(t, a), d = m.useRef(!1), u = () => {
      const f = a.current;
      if (!n && f) {
        const p = new CustomEvent(fi, { bubbles: !0, cancelable: !0 });
        f.addEventListener(fi, (v) => r == null ? void 0 : r(v), { once: !0 }), Ta(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Ol,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: H(e.onClick, u),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), d.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (f) => {
          var p;
          d.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          const p = i.searchRef.current !== "";
          n || p && f.key === " " || pa.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
bo.displayName = Hr;
var Ol = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = ls(Hr, n), i = Pl(n), l = m.useRef(null), d = ie(t, l), [u, f] = m.useState(!1), [p, v] = m.useState("");
    return m.useEffect(() => {
      const x = l.current;
      x && v((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Bn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(ss, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: d,
            onPointerMove: H(
              e.onPointerMove,
              zn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: H(
              e.onPointerLeave,
              zn((x) => s.onItemLeave(x))
            ),
            onFocus: H(e.onFocus, () => f(!0)),
            onBlur: H(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), px = "MenuCheckboxItem", Il = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Wl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Yr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": ms(n),
        onSelect: H(
          o.onSelect,
          () => r == null ? void 0 : r(Yr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Il.displayName = px;
var Tl = "MenuRadioGroup", [hx, vx] = qt(
  Tl,
  { value: void 0, onValueChange: () => {
  } }
), $l = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = We(r);
    return /* @__PURE__ */ c.jsx(hx, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(us, { ...o, ref: t }) });
  }
);
$l.displayName = Tl;
var Fl = "MenuRadioItem", Ll = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = vx(Fl, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Wl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      bo,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": ms(a),
        onSelect: H(
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
Ll.displayName = Fl;
var fs = "MenuItemIndicator", [Wl, gx] = qt(
  fs,
  { checked: !1 }
), Vl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = gx(fs, n);
    return /* @__PURE__ */ c.jsx(
      _e,
      {
        present: r || Yr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": ms(a.checked)
          }
        )
      }
    );
  }
);
Vl.displayName = fs;
var xx = "MenuSeparator", Bl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      Q.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Bl.displayName = xx;
var bx = "MenuArrow", zl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = xo(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
zl.displayName = bx;
var yx = "MenuSub", [dN, Hl] = qt(yx), In = "MenuSubTrigger", Yl = m.forwardRef(
  (e, t) => {
    const n = Xt(In, e.__scopeMenu), r = tr(In, e.__scopeMenu), o = Hl(In, e.__scopeMenu), a = ls(In, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(is, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Ol,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ul(n.open),
        ...e,
        ref: wt(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          zn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          zn((f) => {
            var v, x;
            u();
            const p = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (p) {
              const h = (x = n.content) == null ? void 0 : x.dataset.side, g = h === "right", w = g ? -5 : 5, b = p[g ? "left" : "right"], y = p[g ? "right" : "left"];
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
                side: h
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
        onKeyDown: H(e.onKeyDown, (f) => {
          var v;
          const p = a.searchRef.current !== "";
          e.disabled || p && f.key === " " || ex[r.dir].includes(f.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Yl.displayName = In;
var Gl = "MenuSubContent", Kl = m.forwardRef(
  (e, t) => {
    const n = Al(qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Xt(qe, e.__scopeMenu), s = tr(qe, e.__scopeMenu), i = Hl(Gl, e.__scopeMenu), l = m.useRef(null), d = ie(t, l);
    return /* @__PURE__ */ c.jsx(Bn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Bn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      ds,
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
        onFocusOutside: H(e.onFocusOutside, (u) => {
          u.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (u) => {
          var v;
          const f = u.currentTarget.contains(u.target), p = tx[s.dir].includes(u.key);
          f && p && (a.onOpenChange(!1), (v = i.trigger) == null || v.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Kl.displayName = Gl;
function Ul(e) {
  return e ? "open" : "closed";
}
function Yr(e) {
  return e === "indeterminate";
}
function ms(e) {
  return Yr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function wx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Cx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Sx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Cx(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function kx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function Nx(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return kx(n, t);
}
function zn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ex = Rl, Mx = is, Px = Dl, Rx = jl, Ax = us, Dx = _l, jx = bo, _x = Il, Ox = $l, Ix = Ll, Tx = Vl, $x = Bl, Fx = zl, Lx = Yl, Wx = Kl, yo = "DropdownMenu", [Vx] = Re(
  yo,
  [Ml]
), Fe = Ml(), [Bx, ql] = Vx(yo), Xl = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = Fe(t), d = m.useRef(null), [u, f] = $e({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: yo
  });
  return /* @__PURE__ */ c.jsx(
    Bx,
    {
      scope: t,
      triggerId: Se(),
      triggerRef: d,
      contentId: Se(),
      open: u,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(Ex, { ...l, open: u, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
Xl.displayName = yo;
var Zl = "DropdownMenuTrigger", Ql = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ql(Zl, n), s = Fe(n);
    return /* @__PURE__ */ c.jsx(Mx, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Q.button,
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
        ref: wt(t, a.triggerRef),
        onPointerDown: H(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: H(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Ql.displayName = Zl;
var zx = "DropdownMenuPortal", Jl = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Fe(t);
  return /* @__PURE__ */ c.jsx(Px, { ...r, ...n });
};
Jl.displayName = zx;
var ed = "DropdownMenuContent", td = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ql(ed, n), a = Fe(n), s = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Rx,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, (i) => {
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
td.displayName = ed;
var Hx = "DropdownMenuGroup", Yx = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Ax, { ...o, ...r, ref: t });
  }
);
Yx.displayName = Hx;
var Gx = "DropdownMenuLabel", nd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Dx, { ...o, ...r, ref: t });
  }
);
nd.displayName = Gx;
var Kx = "DropdownMenuItem", rd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(jx, { ...o, ...r, ref: t });
  }
);
rd.displayName = Kx;
var Ux = "DropdownMenuCheckboxItem", qx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(_x, { ...o, ...r, ref: t });
});
qx.displayName = Ux;
var Xx = "DropdownMenuRadioGroup", Zx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Ox, { ...o, ...r, ref: t });
});
Zx.displayName = Xx;
var Qx = "DropdownMenuRadioItem", Jx = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Ix, { ...o, ...r, ref: t });
});
Jx.displayName = Qx;
var e0 = "DropdownMenuItemIndicator", t0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Tx, { ...o, ...r, ref: t });
});
t0.displayName = e0;
var n0 = "DropdownMenuSeparator", od = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx($x, { ...o, ...r, ref: t });
});
od.displayName = n0;
var r0 = "DropdownMenuArrow", o0 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
    return /* @__PURE__ */ c.jsx(Fx, { ...o, ...r, ref: t });
  }
);
o0.displayName = r0;
var a0 = "DropdownMenuSubTrigger", s0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(Lx, { ...o, ...r, ref: t });
});
s0.displayName = a0;
var i0 = "DropdownMenuSubContent", c0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Fe(n);
  return /* @__PURE__ */ c.jsx(
    Wx,
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
c0.displayName = i0;
var l0 = Xl, d0 = Ql, u0 = Jl, f0 = td, m0 = nd, mi = rd, p0 = od;
function pi(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var wo = "Popover", [ad] = Re(wo, [
  jt
]), nr = jt(), [h0, _t] = ad(wo), sd = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = nr(t), l = m.useRef(null), [d, u] = m.useState(!1), [f, p] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: wo
  });
  return /* @__PURE__ */ c.jsx(ho, { ...i, children: /* @__PURE__ */ c.jsx(
    h0,
    {
      scope: t,
      contentId: Se(),
      triggerRef: l,
      open: f,
      onOpenChange: p,
      onOpenToggle: m.useCallback(() => p((v) => !v), [p]),
      hasCustomAnchor: d,
      onCustomAnchorAdd: m.useCallback(() => u(!0), []),
      onCustomAnchorRemove: m.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
sd.displayName = wo;
var id = "PopoverAnchor", cd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(id, n), a = nr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Qn, { ...a, ...r, ref: t });
  }
);
cd.displayName = id;
var ld = "PopoverTrigger", dd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(ld, n), a = nr(n), s = ie(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": hd(o.open),
        ...r,
        ref: s,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...a, children: i });
  }
);
dd.displayName = ld;
var ps = "PopoverPortal", [v0, g0] = ad(ps, {
  forceMount: void 0
}), ud = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = _t(ps, t);
  return /* @__PURE__ */ c.jsx(v0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ut, { asChild: !0, container: o, children: r }) }) });
};
ud.displayName = ps;
var fn = "PopoverContent", fd = m.forwardRef(
  (e, t) => {
    const n = g0(fn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = _t(fn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(b0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(y0, { ...o, ref: t }) });
  }
);
fd.displayName = fn;
var x0 = /* @__PURE__ */ Pt("PopoverContent.RemoveScroll"), b0 = m.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = m.useRef(null), o = ie(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return ao(s);
    }, []), /* @__PURE__ */ c.jsx(Xn, { as: x0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      md,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: H(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, d = i.button === 2 || l;
            a.current = d;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: H(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), y0 = m.forwardRef(
  (e, t) => {
    const n = _t(fn, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      md,
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
), md = m.forwardRef(
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
    } = e, p = _t(fn, n), v = nr(n);
    return ro(), /* @__PURE__ */ c.jsx(
      qn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          Kt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: d,
            onDismiss: () => p.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              vo,
              {
                "data-state": hd(p.open),
                role: "dialog",
                id: p.contentId,
                ...v,
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
), pd = "PopoverClose", w0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = _t(pd, n);
    return /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
w0.displayName = pd;
var C0 = "PopoverArrow", S0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = nr(n);
    return /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
S0.displayName = C0;
function hd(e) {
  return e ? "open" : "closed";
}
var vd = sd, k0 = cd, gd = dd, xd = ud, hs = fd, vs = "Progress", gs = 100, [N0] = Re(vs), [E0, M0] = N0(vs), bd = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = P0,
      ...s
    } = e;
    (o || o === 0) && !hi(o) && console.error(R0(`${o}`, "Progress"));
    const i = hi(o) ? o : gs;
    r !== null && !vi(r, i) && console.error(A0(`${r}`, "Progress"));
    const l = vi(r, i) ? r : null, d = Gr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(E0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Gr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Cd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
bd.displayName = vs;
var yd = "ProgressIndicator", wd = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = M0(yd, n);
    return /* @__PURE__ */ c.jsx(
      Q.div,
      {
        "data-state": Cd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
wd.displayName = yd;
function P0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Cd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Gr(e) {
  return typeof e == "number";
}
function hi(e) {
  return Gr(e) && !isNaN(e) && e > 0;
}
function vi(e, t) {
  return Gr(e) && !isNaN(e) && e <= t && e >= 0;
}
function R0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${gs}\`.`;
}
function A0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${gs} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var D0 = bd, j0 = wd, xs = "Radio", [_0, Sd] = Re(xs), [O0, I0] = _0(xs), kd = m.forwardRef(
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
    } = e, [f, p] = m.useState(null), v = ie(t, (g) => p(g)), x = m.useRef(!1), h = f ? d || !!f.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(O0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Pd(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...u,
          ref: v,
          onClick: H(e.onClick, (g) => {
            o || l == null || l(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        Md,
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
kd.displayName = xs;
var Nd = "RadioIndicator", Ed = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = I0(Nd, n);
    return /* @__PURE__ */ c.jsx(_e, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": Pd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Ed.displayName = Nd;
var T0 = "RadioBubbleInput", Md = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = ie(s, a), l = io(n), d = co(t);
    return m.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && v) {
        const x = new Event("click", { bubbles: r });
        v.call(u, n), u.dispatchEvent(x);
      }
    }, [l, n, r]), /* @__PURE__ */ c.jsx(
      Q.input,
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
Md.displayName = T0;
function Pd(e) {
  return e ? "checked" : "unchecked";
}
var $0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Co = "RadioGroup", [F0] = Re(Co, [
  xn,
  Sd
]), Rd = xn(), Ad = Sd(), [L0, W0] = F0(Co), Dd = m.forwardRef(
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
    } = e, v = Rd(n), x = hn(d), [h, g] = $e({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: Co
    });
    return /* @__PURE__ */ c.jsx(
      L0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          as,
          {
            asChild: !0,
            ...v,
            orientation: l,
            dir: x,
            loop: u,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
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
Dd.displayName = Co;
var jd = "RadioGroupItem", _d = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = W0(jd, n), s = a.disabled || r, i = Rd(n), l = Ad(n), d = m.useRef(null), u = ie(t, d), f = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const v = (h) => {
        $0.includes(h.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      ss,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          kd,
          {
            disabled: s,
            required: a.required,
            checked: f,
            ...l,
            ...o,
            name: a.name,
            ref: u,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: H((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: H(o.onFocus, () => {
              var v;
              p.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
_d.displayName = jd;
var V0 = "RadioGroupIndicator", Od = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Ad(n);
    return /* @__PURE__ */ c.jsx(Ed, { ...o, ...r, ref: t });
  }
);
Od.displayName = V0;
var B0 = Dd, z0 = _d, H0 = Od, Y0 = [" ", "Enter", "ArrowUp", "ArrowDown"], G0 = [" ", "Enter"], Ht = "Select", [So, ko, K0] = Un(Ht), [bn] = Re(Ht, [
  K0,
  jt
]), No = jt(), [U0, Ot] = bn(Ht), [q0, X0] = bn(Ht), Id = (e) => {
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
    required: v,
    form: x
  } = e, h = No(t), [g, w] = m.useState(null), [b, y] = m.useState(null), [k, C] = m.useState(!1), M = hn(d), [E, P] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ht
  }), [I, T] = $e({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Ht
  }), _ = m.useRef(null), W = g ? x || !!g.closest("form") : !0, [Y, $] = m.useState(/* @__PURE__ */ new Set()), G = Array.from(Y).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ c.jsx(ho, { ...h, children: /* @__PURE__ */ c.jsxs(
    U0,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: Se(),
      value: I,
      onValueChange: T,
      open: E,
      onOpenChange: P,
      dir: M,
      triggerPointerDownPosRef: _,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(So.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          q0,
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
          iu,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: I,
            onChange: (V) => T(V.target.value),
            disabled: p,
            form: x,
            children: [
              I === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          G
        ) : null
      ]
    }
  ) });
};
Id.displayName = Ht;
var Td = "SelectTrigger", $d = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = No(n), s = Ot(Td, n), i = s.disabled || r, l = ie(t, s.onTriggerChange), d = ko(n), u = m.useRef("touch"), [f, p, v] = lu((h) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === s.value), b = du(g, h, w);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (h) => {
      i || (s.onOpenChange(!0), v()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      Q.button,
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
        "data-placeholder": cu(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: H(o.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && x(h);
        }),
        onPointerDown: H(o.onPointerDown, (h) => {
          u.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (h) => {
          const g = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && p(h.key), !(g && h.key === " ") && Y0.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
$d.displayName = Td;
var Fd = "SelectValue", Ld = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Ot(Fd, n), { onValueNodeHasChildrenChange: d } = l, u = a !== void 0, f = ie(t, l.onValueNodeChange);
    return Pe(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ c.jsx(
      Q.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: cu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Ld.displayName = Fd;
var Z0 = "SelectIcon", Wd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Wd.displayName = Z0;
var Q0 = "SelectPortal", Vd = (e) => /* @__PURE__ */ c.jsx(Ut, { asChild: !0, ...e });
Vd.displayName = Q0;
var Yt = "SelectContent", Bd = m.forwardRef(
  (e, t) => {
    const n = Ot(Yt, e.__scopeSelect), [r, o] = m.useState();
    if (Pe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Kn.createPortal(
        /* @__PURE__ */ c.jsx(zd, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(So.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Hd, { ...e, ref: t });
  }
);
Bd.displayName = Yt;
var Ze = 10, [zd, It] = bn(Yt), J0 = "SelectContentImpl", eb = /* @__PURE__ */ Pt("SelectContent.RemoveScroll"), Hd = m.forwardRef(
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
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...w
    } = e, b = Ot(Yt, n), [y, k] = m.useState(null), [C, M] = m.useState(null), E = ie(t, (D) => k(D)), [P, I] = m.useState(null), [T, _] = m.useState(
      null
    ), W = ko(n), [Y, $] = m.useState(!1), G = m.useRef(!1);
    m.useEffect(() => {
      if (y) return ao(y);
    }, [y]), ro();
    const V = m.useCallback(
      (D) => {
        const [q, ...J] = W().map((fe) => fe.ref.current), [re] = J.slice(-1), ue = document.activeElement;
        for (const fe of D)
          if (fe === ue || (fe == null || fe.scrollIntoView({ block: "nearest" }), fe === q && C && (C.scrollTop = 0), fe === re && C && (C.scrollTop = C.scrollHeight), fe == null || fe.focus(), document.activeElement !== ue)) return;
      },
      [W, C]
    ), U = m.useCallback(
      () => V([P, y]),
      [V, P, y]
    );
    m.useEffect(() => {
      Y && U();
    }, [Y, U]);
    const { onOpenChange: j, triggerPointerDownPosRef: F } = b;
    m.useEffect(() => {
      if (y) {
        let D = { x: 0, y: 0 };
        const q = (re) => {
          var ue, fe;
          D = {
            x: Math.abs(Math.round(re.pageX) - (((ue = F.current) == null ? void 0 : ue.x) ?? 0)),
            y: Math.abs(Math.round(re.pageY) - (((fe = F.current) == null ? void 0 : fe.y) ?? 0))
          };
        }, J = (re) => {
          D.x <= 10 && D.y <= 10 ? re.preventDefault() : y.contains(re.target) || j(!1), document.removeEventListener("pointermove", q), F.current = null;
        };
        return F.current !== null && (document.addEventListener("pointermove", q), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", q), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [y, j, F]), m.useEffect(() => {
      const D = () => j(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [j]);
    const [ne, R] = lu((D) => {
      const q = W().filter((ue) => !ue.disabled), J = q.find((ue) => ue.ref.current === document.activeElement), re = du(q, D, J);
      re && setTimeout(() => re.ref.current.focus());
    }), N = m.useCallback(
      (D, q, J) => {
        const re = !G.current && !J;
        (b.value !== void 0 && b.value === q || re) && (I(D), re && (G.current = !0));
      },
      [b.value]
    ), O = m.useCallback(() => y == null ? void 0 : y.focus(), [y]), B = m.useCallback(
      (D, q, J) => {
        const re = !G.current && !J;
        (b.value !== void 0 && b.value === q || re) && _(D);
      },
      [b.value]
    ), K = r === "popper" ? ha : Yd, L = K === ha ? {
      side: i,
      sideOffset: l,
      align: d,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ c.jsx(
      zd,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: M,
        itemRefCallback: N,
        selectedItem: P,
        onItemLeave: O,
        itemTextRefCallback: B,
        focusSelectedItem: U,
        selectedItemText: T,
        position: r,
        isPositioned: Y,
        searchRef: ne,
        children: /* @__PURE__ */ c.jsx(Xn, { as: eb, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          qn,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: H(o, (D) => {
              var q;
              (q = b.trigger) == null || q.focus({ preventScroll: !0 }), D.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              Kt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (D) => D.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  K,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (D) => D.preventDefault(),
                    ...w,
                    ...L,
                    onPlaced: () => $(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: H(w.onKeyDown, (D) => {
                      const q = D.ctrlKey || D.altKey || D.metaKey;
                      if (D.key === "Tab" && D.preventDefault(), !q && D.key.length === 1 && R(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
                        let re = W().filter((ue) => !ue.disabled).map((ue) => ue.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (re = re.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const ue = D.target, fe = re.indexOf(ue);
                          re = re.slice(fe + 1);
                        }
                        setTimeout(() => V(re)), D.preventDefault();
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
Hd.displayName = J0;
var tb = "SelectItemAlignedPosition", Yd = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Ot(Yt, n), s = It(Yt, n), [i, l] = m.useState(null), [d, u] = m.useState(null), f = ie(t, (E) => u(E)), p = ko(n), v = m.useRef(!1), x = m.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = s, y = m.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && h && g && w) {
      const E = a.trigger.getBoundingClientRect(), P = d.getBoundingClientRect(), I = a.valueNode.getBoundingClientRect(), T = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ue = T.left - P.left, fe = I.left - ue, Me = E.left - fe, Ie = E.width + Me, rt = Math.max(Ie, P.width), Xe = window.innerWidth - Ze, ot = pi(fe, [
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
        const ue = P.right - T.right, fe = window.innerWidth - I.right - ue, Me = window.innerWidth - E.right - fe, Ie = E.width + Me, rt = Math.max(Ie, P.width), Xe = window.innerWidth - Ze, ot = pi(fe, [
          Ze,
          Math.max(Ze, Xe - rt)
        ]);
        i.style.minWidth = Ie + "px", i.style.right = ot + "px";
      }
      const _ = p(), W = window.innerHeight - Ze * 2, Y = h.scrollHeight, $ = window.getComputedStyle(d), G = parseInt($.borderTopWidth, 10), V = parseInt($.paddingTop, 10), U = parseInt($.borderBottomWidth, 10), j = parseInt($.paddingBottom, 10), F = G + V + Y + j + U, ne = Math.min(g.offsetHeight * 5, F), R = window.getComputedStyle(h), N = parseInt(R.paddingTop, 10), O = parseInt(R.paddingBottom, 10), B = E.top + E.height / 2 - Ze, K = W - B, L = g.offsetHeight / 2, D = g.offsetTop + L, q = G + V + D, J = F - q;
      if (q <= B) {
        const ue = _.length > 0 && g === _[_.length - 1].ref.current;
        i.style.bottom = "0px";
        const fe = d.clientHeight - h.offsetTop - h.offsetHeight, Me = Math.max(
          K,
          L + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ue ? O : 0) + fe + U
        ), Ie = q + Me;
        i.style.height = Ie + "px";
      } else {
        const ue = _.length > 0 && g === _[0].ref.current;
        i.style.top = "0px";
        const Me = Math.max(
          B,
          G + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ue ? N : 0) + L
        ) + J;
        i.style.height = Me + "px", h.scrollTop = q - B + h.offsetTop;
      }
      i.style.margin = `${Ze}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    a.trigger,
    a.valueNode,
    i,
    d,
    h,
    g,
    w,
    a.dir,
    r
  ]);
  Pe(() => y(), [y]);
  const [k, C] = m.useState();
  Pe(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const M = m.useCallback(
    (E) => {
      E && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    rb,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
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
            Q.div,
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
Yd.displayName = tb;
var nb = "SelectPopperPosition", ha = m.forwardRef((e, t) => {
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
ha.displayName = nb;
var [rb, bs] = bn(Yt, {}), va = "SelectViewport", Gd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = It(va, n), s = bs(va, n), i = ie(t, a.onViewportChange), l = m.useRef(0);
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
        Q.div,
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
          onScroll: H(o.onScroll, (d) => {
            const u = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = s;
            if (p != null && p.current && f) {
              const v = Math.abs(l.current - u.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ze * 2, h = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(h, g);
                if (w < x) {
                  const b = w + v, y = Math.min(x, b), k = b - y;
                  f.style.height = y + "px", f.style.bottom === "0px" && (u.scrollTop = k > 0 ? k : 0, f.style.justifyContent = "flex-end");
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
Gd.displayName = va;
var Kd = "SelectGroup", [ob, ab] = bn(Kd), Ud = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Se();
    return /* @__PURE__ */ c.jsx(ob, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ud.displayName = Kd;
var qd = "SelectLabel", Xd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ab(qd, n);
    return /* @__PURE__ */ c.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
Xd.displayName = qd;
var Kr = "SelectItem", [sb, Zd] = bn(Kr), Qd = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Ot(Kr, n), l = It(Kr, n), d = i.value === r, [u, f] = m.useState(a ?? ""), [p, v] = m.useState(!1), x = ie(
      t,
      (b) => {
        var y;
        return (y = l.itemRefCallback) == null ? void 0 : y.call(l, b, r, o);
      }
    ), h = Se(), g = m.useRef("touch"), w = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      sb,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: m.useCallback((b) => {
          f((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          So.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ c.jsx(
              Q.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: x,
                onFocus: H(s.onFocus, () => v(!0)),
                onBlur: H(s.onBlur, () => v(!1)),
                onClick: H(s.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: H(s.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: H(s.onPointerDown, (b) => {
                  g.current = b.pointerType;
                }),
                onPointerMove: H(s.onPointerMove, (b) => {
                  var y;
                  g.current = b.pointerType, o ? (y = l.onItemLeave) == null || y.call(l) : g.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(s.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                }),
                onKeyDown: H(s.onKeyDown, (b) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && b.key === " " || (G0.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Qd.displayName = Kr;
var Tn = "SelectItemText", Jd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Ot(Tn, n), i = It(Tn, n), l = Zd(Tn, n), d = X0(Tn, n), [u, f] = m.useState(null), p = ie(
      t,
      (w) => f(w),
      l.onItemTextChange,
      (w) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, w, l.value, l.disabled);
      }
    ), v = u == null ? void 0 : u.textContent, x = m.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: v }, l.value),
      [l.disabled, l.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = d;
    return Pe(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Q.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Kn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Jd.displayName = Tn;
var eu = "SelectItemIndicator", tu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Zd(eu, n).isSelected ? /* @__PURE__ */ c.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
tu.displayName = eu;
var ga = "SelectScrollUpButton", nu = m.forwardRef((e, t) => {
  const n = It(ga, e.__scopeSelect), r = bs(ga, e.__scopeSelect), [o, a] = m.useState(!1), s = ie(t, r.onScrollButtonChange);
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
    ou,
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
nu.displayName = ga;
var xa = "SelectScrollDownButton", ru = m.forwardRef((e, t) => {
  const n = It(xa, e.__scopeSelect), r = bs(xa, e.__scopeSelect), [o, a] = m.useState(!1), s = ie(t, r.onScrollButtonChange);
  return Pe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < d;
        a(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    ou,
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
ru.displayName = xa;
var ou = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = It("SelectScrollButton", n), s = m.useRef(null), i = ko(n), l = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), Pe(() => {
    var u;
    const d = i().find((f) => f.ref.current === document.activeElement);
    (u = d == null ? void 0 : d.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        var d;
        (d = a.onItemLeave) == null || d.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), ib = "SelectSeparator", au = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
au.displayName = ib;
var ba = "SelectArrow", su = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = No(n), a = Ot(ba, n), s = It(ba, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t }) : null;
  }
);
su.displayName = ba;
var cb = "SelectBubbleInput", iu = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = m.useRef(null), a = ie(r, o), s = io(t);
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
      Q.select,
      {
        ...n,
        style: { ...nc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
iu.displayName = cb;
function cu(e) {
  return e === "" || e === void 0;
}
function lu(e) {
  const t = We(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
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
function du(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = lb(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function lb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var db = Id, ub = $d, fb = Ld, mb = Wd, pb = Vd, hb = Bd, vb = Gd, gb = Ud, xb = Xd, bb = Qd, yb = Jd, wb = tu, Cb = nu, Sb = ru, kb = au, Nb = su, Eo = "Switch", [Eb] = Re(Eo), [Mb, Pb] = Eb(Eo), uu = m.forwardRef(
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
    } = e, [p, v] = m.useState(null), x = ie(t, (y) => v(y)), h = m.useRef(!1), g = p ? u || !!p.closest("form") : !0, [w, b] = $e({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Eo
    });
    return /* @__PURE__ */ c.jsxs(Mb, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": hu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: x,
          onClick: H(e.onClick, (y) => {
            b((k) => !k), g && (h.current = y.isPropagationStopped(), h.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        pu,
        {
          control: p,
          bubbles: !h.current,
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
uu.displayName = Eo;
var fu = "SwitchThumb", mu = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Pb(fu, n);
    return /* @__PURE__ */ c.jsx(
      Q.span,
      {
        "data-state": hu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
mu.displayName = fu;
var Rb = "SwitchBubbleInput", pu = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = ie(s, a), l = io(n), d = co(t);
    return m.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (l !== n && v) {
        const x = new Event("click", { bubbles: r });
        v.call(u, n), u.dispatchEvent(x);
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
pu.displayName = Rb;
function hu(e) {
  return e ? "checked" : "unchecked";
}
var Ab = uu, Db = mu, Mo = "Tabs", [jb] = Re(Mo, [
  xn
]), vu = xn(), [_b, ys] = jb(Mo), gu = m.forwardRef(
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
    } = e, u = hn(i), [f, p] = $e({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Mo
    });
    return /* @__PURE__ */ c.jsx(
      _b,
      {
        scope: n,
        baseId: Se(),
        value: f,
        onValueChange: p,
        orientation: s,
        dir: u,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Q.div,
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
gu.displayName = Mo;
var xu = "TabsList", bu = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = ys(xu, n), s = vu(n);
    return /* @__PURE__ */ c.jsx(
      as,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          Q.div,
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
bu.displayName = xu;
var yu = "TabsTrigger", wu = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = ys(yu, n), i = vu(n), l = Su(s.baseId, r), d = ku(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ c.jsx(
      ss,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ c.jsx(
          Q.button,
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
            onMouseDown: H(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: H(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !u && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
wu.displayName = yu;
var Cu = "TabsContent", Ob = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = ys(Cu, n), l = Su(i.baseId, r), d = ku(i.baseId, r), u = r === i.value, f = m.useRef(u);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx(_e, { present: o || u, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
      Q.div,
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
Ob.displayName = Cu;
function Su(e, t) {
  return `${e}-trigger-${t}`;
}
function ku(e, t) {
  return `${e}-content-${t}`;
}
var Ib = gu, Tb = bu, $b = wu, ws = "ToastProvider", [Cs, Fb, Lb] = Un("Toast"), [Nu] = Re("Toast", [Lb]), [Wb, Po] = Nu(ws), Eu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = m.useState(null), [d, u] = m.useState(0), f = m.useRef(!1), p = m.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${ws}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(Cs.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    Wb,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: a,
      toastCount: d,
      viewport: i,
      onViewportChange: l,
      onToastAdd: m.useCallback(() => u((v) => v + 1), []),
      onToastRemove: m.useCallback(() => u((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: p,
      children: s
    }
  ) });
};
Eu.displayName = ws;
var Mu = "ToastViewport", Vb = ["F8"], ya = "toast.viewportPause", wa = "toast.viewportResume", Pu = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Vb,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Po(Mu, n), i = Fb(n), l = m.useRef(null), d = m.useRef(null), u = m.useRef(null), f = m.useRef(null), p = ie(t, f, s.onViewportChange), v = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
    m.useEffect(() => {
      const g = (w) => {
        var y;
        r.length !== 0 && r.every((k) => w[k] || w.code === k) && ((y = f.current) == null || y.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [r]), m.useEffect(() => {
      const g = l.current, w = f.current;
      if (x && g && w) {
        const b = () => {
          if (!s.isClosePausedRef.current) {
            const M = new CustomEvent(ya);
            w.dispatchEvent(M), s.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (s.isClosePausedRef.current) {
            const M = new CustomEvent(wa);
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
    const h = m.useCallback(
      ({ tabbingDirection: g }) => {
        const b = i().map((y) => {
          const k = y.ref.current, C = [k, ...ey(k)];
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
          var C, M, E;
          const y = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !y) {
            const P = document.activeElement, I = b.shiftKey;
            if (b.target === g && I) {
              (C = d.current) == null || C.focus();
              return;
            }
            const W = h({ tabbingDirection: I ? "backwards" : "forwards" }), Y = W.findIndex(($) => $ === P);
            Uo(W.slice(Y + 1)) ? b.preventDefault() : I ? (M = d.current) == null || M.focus() : (E = u.current) == null || E.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, h]), /* @__PURE__ */ c.jsxs(
      ph,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            Ca,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                Uo(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(Cs.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Q.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            Ca,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = h({
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
Pu.displayName = Mu;
var Ru = "ToastFocusProxy", Ca = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Po(Ru, n);
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
Ca.displayName = Ru;
var rr = "Toast", Bb = "toast.swipeStart", zb = "toast.swipeMove", Hb = "toast.swipeCancel", Yb = "toast.swipeEnd", Au = m.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = $e({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: rr
    });
    return /* @__PURE__ */ c.jsx(_e, { present: n || i, children: /* @__PURE__ */ c.jsx(
      Ub,
      {
        open: i,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: We(e.onPause),
        onResume: We(e.onResume),
        onSwipeStart: H(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: H(e.onSwipeMove, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: H(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: H(e.onSwipeEnd, (d) => {
          const { x: u, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), l(!1);
        })
      }
    ) });
  }
);
Au.displayName = rr;
var [Gb, Kb] = Nu(rr, {
  onClose() {
  }
}), Ub = m.forwardRef(
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
      onSwipeEnd: v,
      ...x
    } = e, h = Po(rr, n), [g, w] = m.useState(null), b = ie(t, ($) => w($)), y = m.useRef(null), k = m.useRef(null), C = o || h.duration, M = m.useRef(0), E = m.useRef(C), P = m.useRef(0), { onToastAdd: I, onToastRemove: T } = h, _ = We(() => {
      var G;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((G = h.viewport) == null || G.focus()), s();
    }), W = m.useCallback(
      ($) => {
        !$ || $ === 1 / 0 || (window.clearTimeout(P.current), M.current = (/* @__PURE__ */ new Date()).getTime(), P.current = window.setTimeout(_, $));
      },
      [_]
    );
    m.useEffect(() => {
      const $ = h.viewport;
      if ($) {
        const G = () => {
          W(E.current), d == null || d();
        }, V = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - M.current;
          E.current = E.current - U, window.clearTimeout(P.current), l == null || l();
        };
        return $.addEventListener(ya, V), $.addEventListener(wa, G), () => {
          $.removeEventListener(ya, V), $.removeEventListener(wa, G);
        };
      }
    }, [h.viewport, C, l, d, W]), m.useEffect(() => {
      a && !h.isClosePausedRef.current && W(C);
    }, [a, C, h.isClosePausedRef, W]), m.useEffect(() => (I(), () => T()), [I, T]);
    const Y = m.useMemo(() => g ? Fu(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      Y && /* @__PURE__ */ c.jsx(
        qb,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: Y
        }
      ),
      /* @__PURE__ */ c.jsx(Gb, { scope: n, onClose: _, children: Kn.createPortal(
        /* @__PURE__ */ c.jsx(Cs.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          mh,
          {
            asChild: !0,
            onEscapeKeyDown: H(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || _(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ c.jsx(
              Q.li,
              {
                tabIndex: 0,
                "data-state": a ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...x,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: H(e.onKeyDown, ($) => {
                  $.key === "Escape" && (i == null || i($.nativeEvent), $.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, _()));
                }),
                onPointerDown: H(e.onPointerDown, ($) => {
                  $.button === 0 && (y.current = { x: $.clientX, y: $.clientY });
                }),
                onPointerMove: H(e.onPointerMove, ($) => {
                  if (!y.current) return;
                  const G = $.clientX - y.current.x, V = $.clientY - y.current.y, U = !!k.current, j = ["left", "right"].includes(h.swipeDirection), F = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, ne = j ? F(0, G) : 0, R = j ? 0 : F(0, V), N = $.pointerType === "touch" ? 10 : 2, O = { x: ne, y: R }, B = { originalEvent: $, delta: O };
                  U ? (k.current = O, wr(zb, f, B, {
                    discrete: !1
                  })) : gi(O, h.swipeDirection, N) ? (k.current = O, wr(Bb, u, B, {
                    discrete: !1
                  }), $.target.setPointerCapture($.pointerId)) : (Math.abs(G) > N || Math.abs(V) > N) && (y.current = null);
                }),
                onPointerUp: H(e.onPointerUp, ($) => {
                  const G = k.current, V = $.target;
                  if (V.hasPointerCapture($.pointerId) && V.releasePointerCapture($.pointerId), k.current = null, y.current = null, G) {
                    const U = $.currentTarget, j = { originalEvent: $, delta: G };
                    gi(G, h.swipeDirection, h.swipeThreshold) ? wr(Yb, v, j, {
                      discrete: !0
                    }) : wr(
                      Hb,
                      p,
                      j,
                      {
                        discrete: !0
                      }
                    ), U.addEventListener("click", (F) => F.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }
), qb = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Po(rr, t), [a, s] = m.useState(!1), [i, l] = m.useState(!1);
  return Qb(() => s(!0)), m.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Ut, { asChild: !0, children: /* @__PURE__ */ c.jsx(Jr, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, Xb = "ToastTitle", Du = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
Du.displayName = Xb;
var Zb = "ToastDescription", ju = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Q.div, { ...r, ref: t });
  }
);
ju.displayName = Zb;
var _u = "ToastAction", Ou = m.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx($u, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Tu, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${_u}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Ou.displayName = _u;
var Iu = "ToastClose", Tu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = Kb(Iu, n);
    return /* @__PURE__ */ c.jsx($u, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
Tu.displayName = Iu;
var $u = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ c.jsx(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Fu(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), Jb(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Fu(r));
    }
  }), t;
}
function wr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ta(o, a) : o.dispatchEvent(a);
}
var gi = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function Qb(e = () => {
}) {
  const t = We(e);
  Pe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function Jb(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function ey(e) {
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
var ty = Eu, ny = Pu, ry = Au, oy = Du, ay = ju, sy = Ou, [Ro] = Re("Tooltip", [
  jt
]), Ao = jt(), Lu = "TooltipProvider", iy = 700, Sa = "tooltip.open", [cy, Ss] = Ro(Lu), Wu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = iy,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = m.useRef(!0), i = m.useRef(!1), l = m.useRef(0);
  return m.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    cy,
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
Wu.displayName = Lu;
var Hn = "Tooltip", [ly, or] = Ro(Hn), Vu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = Ss(Hn, e.__scopeTooltip), d = Ao(t), [u, f] = m.useState(null), p = Se(), v = m.useRef(0), x = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, g = m.useRef(!1), [w, b] = $e({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Sa))) : l.onClose(), a == null || a(E);
    },
    caller: Hn
  }), y = m.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), k = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, b(!0);
  }, [b]), C = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, b(!1);
  }, [b]), M = m.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, b(!0), v.current = 0;
    }, h);
  }, [h, b]);
  return m.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ c.jsx(ho, { ...d, children: /* @__PURE__ */ c.jsx(
    ly,
    {
      scope: t,
      contentId: p,
      open: w,
      stateAttribute: y,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: m.useCallback(() => {
        l.isOpenDelayedRef.current ? M() : k();
      }, [l.isOpenDelayedRef, M, k]),
      onTriggerLeave: m.useCallback(() => {
        x ? C() : (window.clearTimeout(v.current), v.current = 0);
      }, [C, x]),
      onOpen: k,
      onClose: C,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
Vu.displayName = Hn;
var ka = "TooltipTrigger", Bu = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = or(ka, n), a = Ss(ka, n), s = Ao(n), i = m.useRef(null), l = ie(t, i, o.onTriggerChange), d = m.useRef(!1), u = m.useRef(!1), f = m.useCallback(() => d.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(Qn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: H(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: H(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: H(e.onPointerDown, () => {
          o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: H(e.onFocus, () => {
          d.current || o.onOpen();
        }),
        onBlur: H(e.onBlur, o.onClose),
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
Bu.displayName = ka;
var ks = "TooltipPortal", [dy, uy] = Ro(ks, {
  forceMount: void 0
}), zu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = or(ks, t);
  return /* @__PURE__ */ c.jsx(dy, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(_e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Ut, { asChild: !0, container: o, children: r }) }) });
};
zu.displayName = ks;
var mn = "TooltipContent", Hu = m.forwardRef(
  (e, t) => {
    const n = uy(mn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = or(mn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(_e, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(Yu, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(fy, { side: o, ...a, ref: t }) });
  }
), fy = m.forwardRef((e, t) => {
  const n = or(mn, e.__scopeTooltip), r = Ss(mn, e.__scopeTooltip), o = m.useRef(null), a = ie(t, o), [s, i] = m.useState(null), { trigger: l, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = m.useCallback(() => {
    i(null), f(!1);
  }, [f]), v = m.useCallback(
    (x, h) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = gy(w, g.getBoundingClientRect()), y = xy(w, b), k = by(h.getBoundingClientRect()), C = wy([...y, ...k]);
      i(C), f(!0);
    },
    [f]
  );
  return m.useEffect(() => () => p(), [p]), m.useEffect(() => {
    if (l && u) {
      const x = (g) => v(g, u), h = (g) => v(g, l);
      return l.addEventListener("pointerleave", x), u.addEventListener("pointerleave", h), () => {
        l.removeEventListener("pointerleave", x), u.removeEventListener("pointerleave", h);
      };
    }
  }, [l, u, v, p]), m.useEffect(() => {
    if (s) {
      const x = (h) => {
        const g = h.target, w = { x: h.clientX, y: h.clientY }, b = (l == null ? void 0 : l.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !yy(w, s);
        b ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, u, s, d, p]), /* @__PURE__ */ c.jsx(Yu, { ...e, ref: a });
}), [my, py] = Ro(Hn, { isInside: !1 }), hy = /* @__PURE__ */ Sp("TooltipContent"), Yu = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = or(mn, n), d = Ao(n), { onClose: u } = l;
    return m.useEffect(() => (document.addEventListener(Sa, u), () => document.removeEventListener(Sa, u)), [u]), m.useEffect(() => {
      if (l.trigger) {
        const f = (p) => {
          const v = p.target;
          v != null && v.contains(l.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [l.trigger, u]), /* @__PURE__ */ c.jsx(
      Kt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
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
              /* @__PURE__ */ c.jsx(hy, { children: r }),
              /* @__PURE__ */ c.jsx(my, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Rp, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
Hu.displayName = mn;
var Gu = "TooltipArrow", vy = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ao(n);
    return py(
      Gu,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(go, { ...o, ...r, ref: t });
  }
);
vy.displayName = Gu;
function gy(e, t) {
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
function xy(e, t, n = 5) {
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
function by(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function yy(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function wy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Cy(t);
}
function Cy(e) {
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
var Sy = Wu, ky = Vu, Ny = Bu, Ey = zu, My = Hu;
function Ku(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ku(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Uu() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ku(e)) && (r && (r += " "), r += t);
  return r;
}
const xi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, bi = Uu, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return bi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null) return null;
    const p = xi(u) || xi(f);
    return o[d][p];
  }), i = n && Object.entries(n).reduce((d, u) => {
    let [f, p] = u;
    return p === void 0 || (d[f] = p), d;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: f, className: p, ...v } = u;
    return Object.entries(v).every((x) => {
      let [h, g] = x;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[h]) : {
        ...a,
        ...i
      }[h] === g;
    }) ? [
      ...d,
      f,
      p
    ] : d;
  }, []);
  return bi(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Ns = "-", Py = (e) => {
  const t = Ay(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Ns);
      return i[0] === "" && i.length !== 1 && i.shift(), qu(i, t) || Ry(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, qu = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? qu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Ns);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, yi = /^\[(.+)\]$/, Ry = (e) => {
  if (yi.test(e)) {
    const t = yi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ay = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Na(n[o], r, o, t);
  return r;
}, Na = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : wi(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Dy(o)) {
        Na(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Na(s, wi(t, a), n, r);
    });
  });
}, wi = (e, t) => {
  let n = e;
  return t.split(Ns).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Dy = (e) => e.isThemeGetter, jy = (e) => {
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
}, Ea = "!", Ma = ":", _y = Ma.length, Oy = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, i = 0, l = 0, d;
    for (let x = 0; x < o.length; x++) {
      let h = o[x];
      if (s === 0 && i === 0) {
        if (h === Ma) {
          a.push(o.slice(l, x)), l = x + _y;
          continue;
        }
        if (h === "/") {
          d = x;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" ? s-- : h === "(" ? i++ : h === ")" && i--;
    }
    const u = a.length === 0 ? o : o.substring(l), f = Iy(u), p = f !== u, v = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + Ma, a = r;
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
}, Iy = (e) => e.endsWith(Ea) ? e.substring(0, e.length - 1) : e.startsWith(Ea) ? e.substring(1) : e, Ty = (e) => {
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
}, $y = (e) => ({
  cache: jy(e.cacheSize),
  parseClassName: Oy(e),
  sortModifiers: Ty(e),
  ...Py(e)
}), Fy = /\s+/, Ly = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Fy);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      isExternal: f,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: h
    } = n(u);
    if (f) {
      l = u + (l.length > 0 ? " " + l : l);
      continue;
    }
    let g = !!h, w = r(g ? x.substring(0, h) : x);
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
    const b = a(p).join(":"), y = v ? b + Ea : b, k = y + w;
    if (s.includes(k))
      continue;
    s.push(k);
    const C = o(w, g);
    for (let M = 0; M < C.length; ++M) {
      const E = C[M];
      s.push(y + E);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Wy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Xu(t)) && (r && (r += " "), r += n);
  return r;
}
const Xu = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xu(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Ci(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((u, f) => f(u), e());
    return n = $y(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const u = Ly(l, n);
    return o(l, u), u;
  }
  return function() {
    return a(Wy.apply(null, arguments));
  };
}
const ke = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Zu = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qu = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Vy = /^\d+\/\d+$/, By = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Hy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rn = (e) => Vy.test(e), de = (e) => !!e && !Number.isNaN(Number(e)), kt = (e) => !!e && Number.isInteger(Number(e)), qo = (e) => e.endsWith("%") && de(e.slice(0, -1)), vt = (e) => By.test(e), Ky = () => !0, Uy = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zy.test(e) && !Hy.test(e)
), Ju = () => !1, qy = (e) => Yy.test(e), Xy = (e) => Gy.test(e), Zy = (e) => !ee(e) && !te(e), Qy = (e) => yn(e, nf, Ju), ee = (e) => Zu.test(e), Ft = (e) => yn(e, rf, Uy), Xo = (e) => yn(e, rw, de), Si = (e) => yn(e, ef, Ju), Jy = (e) => yn(e, tf, Xy), Cr = (e) => yn(e, of, qy), te = (e) => Qu.test(e), _n = (e) => wn(e, rf), ew = (e) => wn(e, ow), ki = (e) => wn(e, ef), tw = (e) => wn(e, nf), nw = (e) => wn(e, tf), Sr = (e) => wn(e, of, !0), yn = (e, t, n) => {
  const r = Zu.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, wn = (e, t, n = !1) => {
  const r = Qu.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ef = (e) => e === "position" || e === "percentage", tf = (e) => e === "image" || e === "url", nf = (e) => e === "length" || e === "size" || e === "bg-size", rf = (e) => e === "length", rw = (e) => e === "number", ow = (e) => e === "family-name", of = (e) => e === "shadow", Ni = () => {
  const e = ke("color"), t = ke("font"), n = ke("text"), r = ke("font-weight"), o = ke("tracking"), a = ke("leading"), s = ke("breakpoint"), i = ke("container"), l = ke("spacing"), d = ke("radius"), u = ke("shadow"), f = ke("inset-shadow"), p = ke("text-shadow"), v = ke("drop-shadow"), x = ke("blur"), h = ke("perspective"), g = ke("aspect"), w = ke("ease"), b = ke("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), te, ee], M = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], P = () => [te, ee, l], I = () => [rn, "full", "auto", ...P()], T = () => [kt, "none", "subgrid", te, ee], _ = () => ["auto", {
    span: ["full", kt, te, ee]
  }, kt, te, ee], W = () => [kt, "auto", te, ee], Y = () => ["auto", "min", "max", "fr", te, ee], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], G = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...P()], U = () => [rn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], j = () => [e, te, ee], F = () => [...k(), ki, Si, {
    position: [te, ee]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", tw, Qy, {
    size: [te, ee]
  }], N = () => [qo, _n, Ft], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], B = () => ["", de, _n, Ft], K = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [de, qo, ki, Si], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", de, te, ee], re = () => ["none", de, te, ee], ue = () => [de, te, ee], fe = () => [rn, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [vt],
      breakpoint: [vt],
      color: [Ky],
      container: [vt],
      "drop-shadow": [vt],
      ease: ["in", "out", "in-out"],
      font: [Zy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [vt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [vt],
      shadow: [vt],
      spacing: ["px", de],
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
        columns: [de, ee, te, i]
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        z: [kt, "auto", te, ee]
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
        flex: [de, rn, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", de, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", de, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [kt, "first", "last", "none", te, ee]
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
        col: _()
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
        row: _()
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
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...G(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...G()]
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
        items: [...G(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...G(), {
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
        "place-items": [...G(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...G()]
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
        text: ["base", n, _n, Ft]
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
        font: [r, te, Xo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qo, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ew, ee, t]
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
        "line-clamp": [de, "none", te, Xo]
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [de, "from-font", "auto", te, Ft]
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
        "underline-offset": [de, "auto", te, ee]
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
        bg: F()
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
          }, kt, te, ee],
          radial: ["", te, ee],
          conic: [kt, te, ee]
        }, nw, Jy]
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
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: B()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": B()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": B()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": B()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": B()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": B()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": B()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": B()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": B()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": B()
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
        "divide-y": B()
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
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [de, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", de, _n, Ft]
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
          Sr,
          Cr
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
        "inset-shadow": ["none", f, Sr, Cr]
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
        ring: B()
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
        "ring-offset": [de, Ft]
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
        "inset-ring": B()
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
        "text-shadow": ["none", p, Sr, Cr]
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
        opacity: [de, te, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
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
        "mask-linear": [de]
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [de]
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
        mask: F()
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
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [de, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [de, te, ee]
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
          v,
          Sr,
          Cr
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
        grayscale: ["", de, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [de, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", de, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [de, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", de, te, ee]
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
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [de, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [de, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", de, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [de, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", de, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [de, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [de, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", de, te, ee]
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
        duration: [de, "initial", te, ee]
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
        delay: [de, te, ee]
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
        perspective: [h, te, ee]
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
        skew: ue()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ue()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ue()
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
        translate: fe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": fe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": fe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": fe()
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
        fill: ["none", ...j()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [de, _n, Ft, Xo]
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
}, aw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => ($n(e, "cacheSize", t), $n(e, "prefix", n), $n(e, "experimentalParseClassName", r), kr(e.theme, a.theme), kr(e.classGroups, a.classGroups), kr(e.conflictingClassGroups, a.conflictingClassGroups), kr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), $n(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Nr(e.theme, o.theme), Nr(e.classGroups, o.classGroups), Nr(e.conflictingClassGroups, o.conflictingClassGroups), Nr(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), af(e, o, "orderSensitiveModifiers"), e), $n = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, kr = (e, t) => {
  if (t)
    for (const n in t)
      $n(e, n, t[n]);
}, Nr = (e, t) => {
  if (t)
    for (const n in t)
      af(e, t, n);
}, af = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, sw = (e, ...t) => typeof e == "function" ? Ci(Ni, e, ...t) : Ci(() => aw(Ni(), e), ...t), iw = sw({
  extend: {
    theme: {
      spacing: ["xxs", "xs", "sm", "md", "lg", "xl", "xxxl"]
    }
  }
}), A = (...e) => iw(Uu(e)), je = (e, t = {}) => {
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
}, cw = ae(
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
), lw = ae(
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
), Pa = S.forwardRef(
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
      className: A(lw({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (d.onSelect = t), n !== void 0 && (d.disabled = n), s ? /* @__PURE__ */ c.jsx(mi, { ...d, children: e }) : /* @__PURE__ */ c.jsxs(mi, { ...d, children: [
      je(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Pa.displayName = "DropdownItem";
const dw = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  p0,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
dw.displayName = "DropdownSeparator";
const uw = S.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  m0,
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
uw.displayName = "DropdownLabel";
const Es = S.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(u0, { children: /* @__PURE__ */ c.jsx(
  f0,
  {
    ref: o,
    className: A(cw({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Es.displayName = "DropdownContent";
const Ms = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(l0, { ...a, children: e });
};
Ms.displayName = "Dropdown";
const Ps = S.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  d0,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Ps.displayName = "DropdownTrigger";
const uN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(Ms, { children: [
  /* @__PURE__ */ c.jsx(
    Ps,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(fp, { size: 16, className: "flex-[0_0_16px]" }),
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
  /* @__PURE__ */ c.jsxs(Es, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), sf = S.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Bs,
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
    Bs,
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
sf.displayName = "Accordion";
const cf = S.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    nh,
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
cf.displayName = "AccordionItem";
const lf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(rh, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  oh,
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
lf.displayName = "AccordionTrigger";
const df = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  ah,
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
df.displayName = "AccordionContent";
const fN = Object.assign(sf, {
  Item: cf,
  Trigger: lf,
  Content: df
}), Ei = ae(
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
), fw = S.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? hp : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      Qr,
      {
        className: A(Ei({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: A(Ei({ intent: e }), n),
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
fw.displayName = "Badge";
const mw = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Zo = ae(
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
), pw = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), hw = S.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = qi,
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
        className: A(mw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: l.map((d, u) => {
          const f = u === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(S.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "min-w-0 flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Zo({ isActive: !0 })),
                children: d.label
              }
            ) : d.href || d.onClick ? /* @__PURE__ */ c.jsx(
              "a",
              {
                href: d.href,
                onClick: d.onClick,
                className: A(
                  Zo({ isActive: f })
                ),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Zo({ isActive: !0 })),
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
                    className: A(pw({ size: t }))
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
hw.displayName = "Breadcrumbs";
const vw = ae(
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
), uf = S.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    D0,
    {
      ref: s,
      className: A(vw({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        j0,
        {
          className: A(
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
uf.displayName = "ProgressIndicator.Linear";
const gw = ae("flex items-center", {
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
}), xw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, Ur = {
  sm: 12,
  md: 10
}, Mi = {
  sm: (50 - Ur.sm / 2).toString(),
  md: (50 - Ur.md / 2).toString()
}, ff = S.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: A(gw({ size: t, layout: e }), r),
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
            className: A(xw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Mi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: Ur[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Mi[t],
                  stroke: "var(--token-color-shape-accent-green-strong)",
                  strokeWidth: Ur[t],
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
ff.displayName = "ProgressIndicator.Circular";
const Rs = {
  Linear: uf,
  Circular: ff
}, Qo = ae(
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
), Er = ae("", {
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
  }, u) => {
    const f = a ? Qr : "button", p = !!((r || o) && !l && !(r && o)), v = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          Qo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            je(r, {
              className: A(
                Er({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            je(o, {
              className: A(
                Er({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Rs.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          Qo({ intent: e, size: t, iconOnly: p, textOnly: v, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          je(r, {
            className: A(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          je(o, {
            className: A(
              Er({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      f,
      {
        ref: u,
        className: A(
          Qo({ intent: e, size: t, textOnly: v, danger: i }),
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
function bw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Jo = {}, Fn = {};
function Wt(e, t) {
  try {
    const r = (Jo[e] || (Jo[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Fn ? Fn[r] : Pi(r, r.split(":"));
  } catch {
    if (e in Fn) return Fn[e];
    const n = e == null ? void 0 : e.match(yw);
    return n ? Pi(e, n.slice(1)) : NaN;
  }
}
const yw = /([+-]\d\d):?(\d\d)?/;
function Pi(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Fn[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Wt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), mf(this), Ra(this)) : this.setTime(Date.now());
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
    return Date.prototype.setTime.apply(this, arguments), Ra(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ri = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ri.test(e)) return;
  const t = e.replace(Ri, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), ww(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ra(this), +this;
  }));
});
function Ra(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Wt(e.timeZone, e) * 60));
}
function ww(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), mf(e);
}
function mf(e) {
  const t = Wt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const l = o - n;
  l && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + l);
  const d = /* @__PURE__ */ new Date(+e);
  d.setUTCSeconds(0);
  const u = o > 0 ? d.getSeconds() : (d.getSeconds() - 60) % 60, f = Math.round(-(Wt(e.timeZone, e) * 60)) % 60;
  (f || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + u));
  const p = Wt(e.timeZone, e), v = p > 0 ? Math.floor(p) : Math.ceil(p), h = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - v, g = v !== n, w = h - l;
  if (g && w) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + w);
    const b = Wt(e.timeZone, e), y = b > 0 ? Math.floor(b) : Math.ceil(b), k = v - y;
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
    return `${t} GMT${n}${r}${o} (${bw(this.timeZone, this)})`;
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
const pf = 6048e5, Cw = 864e5, Ai = Symbol.for("constructDateFrom");
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Ai in e ? e[Ai](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ge(e, t) {
  return Ee(t || e, e);
}
function hf(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ee(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function vf(e, t, n) {
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
let Sw = {};
function ar() {
  return Sw;
}
function pn(e, t) {
  var i, l, d, u;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Yn(e, t) {
  return pn(e, { ...t, weekStartsOn: 1 });
}
function gf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ee(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Yn(o), s = Ee(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Yn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Di(e) {
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
function xf(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Gn(r), s = Gn(o), i = +a - Di(a), l = +s - Di(s);
  return Math.round((i - l) / Cw);
}
function kw(e, t) {
  const n = gf(e, t), r = Ee(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Yn(r);
}
function Nw(e, t, n) {
  return hf(e, t * 7, n);
}
function Ew(e, t, n) {
  return vf(e, t * 12, n);
}
function Mw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function Pw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ee.bind(null, o));
    const a = ge(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), Ee(r, n || NaN);
}
function Rw(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Gn(r) == +Gn(o);
}
function bf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Aw(e) {
  return !(!bf(e) && typeof e != "number" || isNaN(+ge(e)));
}
function Dw(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function jw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function _w(e, t) {
  const [n, r] = Cn(e, t.start, t.end);
  return { start: n, end: r };
}
function Ow(e, t) {
  const { start: n, end: r } = _w(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(Ee(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Iw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Tw(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function yf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function wf(e, t) {
  var i, l, d, u;
  const n = ar(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ge(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function $w(e, t) {
  return wf(e, { ...t, weekStartsOn: 1 });
}
const Fw = {
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
}, Lw = (e, t, n) => {
  let r;
  const o = Fw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function dn(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ww = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Vw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, zw = {
  date: dn({
    formats: Ww,
    defaultWidth: "full"
  }),
  time: dn({
    formats: Vw,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: Bw,
    defaultWidth: "full"
  })
}, Hw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Yw = (e, t, n, r) => Hw[e];
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
const Gw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Uw = {
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
}, qw = {
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
}, Xw = {
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
}, Zw = {
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
}, Qw = (e, t) => {
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
}, Jw = {
  ordinalNumber: Qw,
  era: it({
    values: Gw,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: Kw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: it({
    values: Uw,
    defaultWidth: "wide"
  }),
  day: it({
    values: qw,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: Xw,
    defaultWidth: "wide",
    formattingValues: Zw,
    defaultFormattingWidth: "wide"
  })
};
function ct(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? t1(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      e1(i, (f) => f.test(s))
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
function e1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function t1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Cf(e) {
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
const n1 = /^(\d+)(th|st|nd|rd)?/i, r1 = /\d+/i, o1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, a1 = {
  any: [/^b/i, /^(a|c)/i]
}, s1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, i1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, l1 = {
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
}, d1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, u1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, f1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, m1 = {
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
}, p1 = {
  ordinalNumber: Cf({
    matchPattern: n1,
    parsePattern: r1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ct({
    matchPatterns: o1,
    defaultMatchWidth: "wide",
    parsePatterns: a1,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: s1,
    defaultMatchWidth: "wide",
    parsePatterns: i1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: c1,
    defaultMatchWidth: "wide",
    parsePatterns: l1,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: d1,
    defaultMatchWidth: "wide",
    parsePatterns: u1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: f1,
    defaultMatchWidth: "any",
    parsePatterns: m1,
    defaultParseWidth: "any"
  })
}, Do = {
  code: "en-US",
  formatDistance: Lw,
  formatLong: zw,
  formatRelative: Yw,
  localize: Jw,
  match: p1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function h1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in);
  return xf(n, yf(n)) + 1;
}
function Sf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +Yn(n) - +kw(n);
  return Math.round(r / pf) + 1;
}
function kf(e, t) {
  var u, f, p, v;
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ar(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((v = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = Ee((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = pn(s, t), l = Ee((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = pn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function v1(e, t) {
  var i, l, d, u;
  const n = ar(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = kf(e, t), a = Ee((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), pn(a, t);
}
function Nf(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = +pn(n, t) - +v1(n, t);
  return Math.round(r / pf) + 1;
}
function ve(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Nt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ve(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ve(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ve(e.getDate(), t.length);
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
    return ve(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ve(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ve(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ve(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ve(o, t.length);
  }
}, on = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ji = {
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
    return Nt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = kf(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return ve(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ve(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = gf(e);
    return ve(n, t.length);
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
    return ve(n, t.length);
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
        return ve(r, 2);
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
        return ve(r, 2);
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
        return Nt.M(e, t);
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
        return ve(r + 1, 2);
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
    const o = Nf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ve(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Sf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ve(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Nt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = h1(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ve(r, t.length);
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
        return ve(a, 2);
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
        return ve(a, t.length);
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
        return ve(o, t.length);
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
    return Nt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Nt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ve(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Nt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Nt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Nt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Oi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return Lt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return Lt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Oi(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return Lt(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return Lt(r, ":");
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
        return "GMT" + _i(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + Lt(r, ":");
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
        return "GMT" + _i(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Lt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ve(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ve(+e, t.length);
  }
};
function _i(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ve(a, 2);
}
function Oi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ve(Math.abs(e) / 60, 2) : Lt(e, t);
}
function Lt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ve(Math.trunc(r / 60), 2), a = ve(r % 60, 2);
  return n + o + t + a;
}
const Ii = (e, t) => {
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
}, Ef = (e, t) => {
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
}, g1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Ii(e, t);
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
  return a.replace("{{date}}", Ii(r, t)).replace("{{time}}", Ef(o, t));
}, x1 = {
  p: Ef,
  P: g1
}, b1 = /^D+$/, y1 = /^Y+$/, w1 = ["D", "DD", "YY", "YYYY"];
function C1(e) {
  return b1.test(e);
}
function S1(e) {
  return y1.test(e);
}
function k1(e, t, n) {
  const r = N1(e, t, n);
  if (console.warn(r), w1.includes(e)) throw new RangeError(r);
}
function N1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const E1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, M1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, P1 = /^'([^]*?)'?$/, R1 = /''/g, A1 = /[a-zA-Z]/;
function D1(e, t, n) {
  var u, f, p, v, x, h, g, w;
  const r = ar(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Do, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = ge(e, n == null ? void 0 : n.in);
  if (!Aw(i))
    throw new RangeError("Invalid time value");
  let l = t.match(M1).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const k = x1[y];
      return k(b, o.formatLong);
    }
    return b;
  }).join("").match(E1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: j1(b) };
    if (ji[y])
      return { isToken: !0, value: b };
    if (y.match(A1))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && S1(y) || !(n != null && n.useAdditionalDayOfYearTokens) && C1(y)) && k1(y, t, String(e));
    const k = ji[y[0]];
    return k(i, y, o.localize, d);
  }).join("");
}
function j1(e) {
  const t = e.match(P1);
  return t ? t[1].replace(R1, "'") : e;
}
function _1(e, t) {
  const n = ge(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = Ee(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function O1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getMonth();
}
function I1(e, t) {
  return ge(e, t == null ? void 0 : t.in).getFullYear();
}
function T1(e, t) {
  return +ge(e) > +ge(t);
}
function $1(e, t) {
  return +ge(e) < +ge(t);
}
function F1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function L1(e, t, n) {
  const [r, o] = Cn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function W1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = Ee(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = _1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function V1(e, t, n) {
  const r = ge(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ee(e, NaN) : (r.setFullYear(t), r);
}
const Ti = 5, B1 = 4;
function z1(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ti * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ti : B1;
}
function Mf(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function H1(e, t) {
  const n = Mf(e, t), r = z1(e, t);
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
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : hf(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : vf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Nw(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Ew(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : xf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Dw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Ow(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : H1(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : $w(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : jw(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : wf(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Tw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : D1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Sf(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : O1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : I1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : Nf(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : T1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : $1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : bf(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Rw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : F1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : L1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Mw(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Pw(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : W1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : V1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Mf(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Gn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Yn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Iw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : pn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : yf(r);
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
class Pf {
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
class Y1 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class G1 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function K1(e) {
  return S.createElement("button", { ...e });
}
function U1(e) {
  return S.createElement("span", { ...e });
}
function q1(e) {
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
function X1(e) {
  const { day: t, modifiers: n, ...r } = e;
  return S.createElement("td", { ...r });
}
function Z1(e) {
  const { day: t, modifiers: n, ...r } = e, o = S.useRef(null);
  return S.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), S.createElement("button", { ref: o, ...r });
}
var oe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(oe || (oe = {}));
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
function Q1(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[oe.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return S.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[oe.DropdownRoot] },
    S.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: u }) => S.createElement(r.Option, { key: l, value: l, disabled: u }, d))),
    S.createElement(
      "span",
      { className: o[oe.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      S.createElement(r.Chevron, { orientation: "down", size: 18, className: o[oe.Chevron] })
    )
  );
}
function J1(e) {
  return S.createElement("div", { ...e });
}
function e2(e) {
  return S.createElement("div", { ...e });
}
function t2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r }, e.children);
}
function n2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return S.createElement("div", { ...r });
}
function r2(e) {
  return S.createElement("table", { ...e });
}
function o2(e) {
  return S.createElement("div", { ...e });
}
const Rf = Xr(void 0);
function sr() {
  const e = $r(Rf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function a2(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
function s2(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = sr(), u = he((p) => {
    o && (n == null || n(p));
  }, [o, n]), f = he((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return S.createElement(
    "nav",
    { ...a },
    S.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[oe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      S.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[oe.Chevron], orientation: "left" })
    ),
    S.createElement(
      s.NextMonthButton,
      { type: "button", className: i[oe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: u },
      S.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[oe.Chevron] })
    )
  );
}
function i2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function c2(e) {
  return S.createElement("option", { ...e });
}
function l2(e) {
  const { components: t } = sr();
  return S.createElement(t.Button, { ...e });
}
function d2(e) {
  const { rootRef: t, ...n } = e;
  return S.createElement("div", { ...n, ref: t });
}
function u2(e) {
  return S.createElement("select", { ...e });
}
function f2(e) {
  const { week: t, ...n } = e;
  return S.createElement("tr", { ...n });
}
function m2(e) {
  return S.createElement("th", { ...e });
}
function p2(e) {
  return S.createElement(
    "thead",
    { "aria-hidden": !0 },
    S.createElement("tr", { ...e })
  );
}
function h2(e) {
  const { week: t, ...n } = e;
  return S.createElement("th", { ...n });
}
function v2(e) {
  return S.createElement("th", { ...e });
}
function g2(e) {
  return S.createElement("tbody", { ...e });
}
function x2(e) {
  const { components: t } = sr();
  return S.createElement(t.Dropdown, { ...e });
}
const b2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: K1,
  CaptionLabel: U1,
  Chevron: q1,
  Day: X1,
  DayButton: Z1,
  Dropdown: Q1,
  DropdownNav: J1,
  Footer: e2,
  Month: t2,
  MonthCaption: n2,
  MonthGrid: r2,
  Months: o2,
  MonthsDropdown: a2,
  Nav: s2,
  NextMonthButton: i2,
  Option: c2,
  PreviousMonthButton: l2,
  Root: d2,
  Select: u2,
  Week: f2,
  WeekNumber: h2,
  WeekNumberHeader: v2,
  Weekday: m2,
  Weekdays: p2,
  Weeks: g2,
  YearsDropdown: x2
}, Symbol.toStringTag, { value: "Module" }));
function gt(e, t, n = !1, r = pt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Af(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function As(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Df(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function jf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function _f(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Of(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function xt(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Of(i, n))
      return i.includes(e);
    if (As(i))
      return gt(i, e, !1, n);
    if (_f(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Af(i)) {
      const l = a(i.before, e), d = a(i.after, e), u = l > 0, f = d < 0;
      return s(i.before, i.after) ? f && u : u || f;
    }
    return Df(i) ? a(e, i.after) > 0 : jf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function y2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: u } = t, { isSameDay: f, isSameMonth: p, startOfMonth: v, isBefore: x, endOfMonth: h, isAfter: g } = o, w = n && v(n), b = r && h(r), y = {
    [we.focused]: [],
    [we.outside]: [],
    [we.disabled]: [],
    [we.hidden]: [],
    [we.today]: []
  }, k = {};
  for (const C of e) {
    const { date: M, displayMonth: E } = C, P = !!(E && !p(M, E)), I = !!(w && x(M, w)), T = !!(b && g(M, b)), _ = !!(a && xt(M, a, o)), W = !!(s && xt(M, s, o)) || I || T || // Broadcast calendar will show outside days as default
    !d && !l && P || d && l === !1 && P, Y = f(M, u ?? o.today());
    P && y.outside.push(C), _ && y.disabled.push(C), W && y.hidden.push(C), Y && y.today.push(C), i && Object.keys(i).forEach(($) => {
      const G = i == null ? void 0 : i[$];
      G && xt(M, G, o) && (k[$] ? k[$].push(C) : k[$] = [C]);
    });
  }
  return (C) => {
    const M = {
      [we.focused]: !1,
      [we.disabled]: !1,
      [we.hidden]: !1,
      [we.outside]: !1,
      [we.today]: !1
    }, E = {};
    for (const P in y) {
      const I = y[P];
      M[P] = I.some((T) => T === C);
    }
    for (const P in k)
      E[P] = k[P].some((I) => I === C);
    return {
      ...M,
      // custom modifiers should override all the previous ones
      ...E
    };
  };
}
function w2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[we[a]] ? o.push(t[we[a]]) : t[Qe[a]] && o.push(t[Qe[a]]), o), [t[oe.Day]]);
}
function C2(e) {
  return {
    ...b2,
    ...e
  };
}
function S2(e) {
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
function If() {
  const e = {};
  for (const t in oe)
    e[oe[t]] = `rdp-${oe[t]}`;
  for (const t in we)
    e[we[t]] = `rdp-${we[t]}`;
  for (const t in Qe)
    e[Qe[t]] = `rdp-${Qe[t]}`;
  for (const t in ze)
    e[ze[t]] = `rdp-${ze[t]}`;
  return e;
}
function Tf(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const k2 = Tf;
function N2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "d");
}
function E2(e, t = pt) {
  return t.format(e, "LLLL");
}
function M2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccccc");
}
function P2(e, t = pt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function R2() {
  return "";
}
function $f(e, t = pt) {
  return t.format(e, "yyyy");
}
const A2 = $f, D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Tf,
  formatDay: N2,
  formatMonthCaption: k2,
  formatMonthDropdown: E2,
  formatWeekNumber: P2,
  formatWeekNumberHeader: R2,
  formatWeekdayName: M2,
  formatYearCaption: A2,
  formatYearDropdown: $f
}, Symbol.toStringTag, { value: "Module" }));
function j2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...D2,
    ...e
  };
}
function _2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const v = r.formatMonthDropdown(p, o), x = d(p), h = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: v, disabled: h };
  });
}
function O2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[oe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function I2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function T2(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, addYears: i, getYear: l, isBefore: d, isSameYear: u } = r, f = a(e), p = s(t), v = [];
  let x = f;
  for (; d(x, p) || u(x, p); )
    v.push(x), x = i(x, 1);
  return o && v.reverse(), v.map((h) => {
    const g = n.formatYearDropdown(h, r);
    return {
      value: l(h),
      label: g,
      disabled: !1
    };
  });
}
function Ff(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const $2 = Ff;
function Lf(e, t, n) {
  return (n ?? new Ge(t)).formatMonthYear(e);
}
const F2 = Lf;
function L2(e, t, n, r) {
  let o = (r ?? new Ge(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function W2(e) {
  return "Choose the Month";
}
function V2() {
  return "";
}
function B2(e) {
  return "Go to the Next Month";
}
function z2(e) {
  return "Go to the Previous Month";
}
function H2(e, t, n) {
  return (n ?? new Ge(t)).format(e, "cccc");
}
function Y2(e, t) {
  return `Week ${e}`;
}
function G2(e) {
  return "Week Number";
}
function K2(e) {
  return "Choose the Year";
}
const U2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: F2,
  labelDay: $2,
  labelDayButton: Ff,
  labelGrid: Lf,
  labelGridcell: L2,
  labelMonthDropdown: W2,
  labelNav: V2,
  labelNext: B2,
  labelPrevious: z2,
  labelWeekNumber: Y2,
  labelWeekNumberHeader: G2,
  labelWeekday: H2,
  labelYearDropdown: K2
}, Symbol.toStringTag, { value: "Module" })), ir = (e) => e instanceof HTMLElement ? e : null, ea = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], q2 = (e) => ir(e.querySelector("[data-animated-month]")), ta = (e) => ir(e.querySelector("[data-animated-caption]")), na = (e) => ir(e.querySelector("[data-animated-weeks]")), X2 = (e) => ir(e.querySelector("[data-animated-nav]")), Z2 = (e) => ir(e.querySelector("[data-animated-weekdays]"));
function Q2(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = bt(null), i = bt(r), l = bt(!1);
  Ki(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const u = a.isSameMonth(r[0].date, d[0].date), f = a.isAfter(r[0].date, d[0].date), p = f ? n[ze.caption_after_enter] : n[ze.caption_before_enter], v = f ? n[ze.weeks_after_enter] : n[ze.weeks_before_enter], x = s.current, h = e.current.cloneNode(!0);
    if (h instanceof HTMLElement ? (ea(h).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const k = q2(y);
      k && y.contains(k) && y.removeChild(k);
      const C = ta(y);
      C && C.classList.remove(p);
      const M = na(y);
      M && M.classList.remove(v);
    }), s.current = h) : s.current = null, l.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? ea(x) : [], w = ea(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = X2(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, k) => {
        const C = g[k];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const M = ta(y);
        M && M.classList.add(p);
        const E = na(y);
        E && E.classList.add(v);
        const P = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), M && M.classList.remove(p), E && E.classList.remove(v), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const I = Z2(C);
        I && (I.style.opacity = "0");
        const T = ta(C);
        T && (T.classList.add(f ? n[ze.caption_before_exit] : n[ze.caption_after_exit]), T.addEventListener("animationend", P));
        const _ = na(C);
        _ && _.classList.add(f ? n[ze.weeks_before_exit] : n[ze.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function J2(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: v, endOfMonth: x, endOfWeek: h, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, k = l ? w(o, r) : s ? b(o) : y(o), C = l ? p(a) : s ? v(x(a)) : h(x(a)), M = u(C, k), E = f(a, o) + 1, P = [];
  for (let _ = 0; _ <= M; _++) {
    const W = d(k, _);
    if (t && g(W, t))
      break;
    P.push(W);
  }
  const T = (l ? 35 : 42) * E;
  if (i && P.length < T) {
    const _ = T - P.length;
    for (let W = 0; W < _; W++) {
      const Y = d(P[P.length - 1], 1);
      P.push(Y);
    }
  }
  return P;
}
function eC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function tC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function $i(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: u, startOfMonth: f } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = u(n, p);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function nC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: v } = r, x = e.reduce((h, g) => {
    const w = n.broadcastCalendar ? f(g, r) : n.ISOWeek ? p(g) : v(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), y = t.filter((E) => E >= w && E <= b), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < k) {
      const E = t.filter((P) => {
        const I = k - y.length;
        return P > b && P <= o(b, I);
      });
      y.push(...E);
    }
    const C = y.reduce((E, P) => {
      const I = n.ISOWeek ? d(P) : u(P), T = E.find((W) => W.weekNumber === I), _ = new Pf(P, g, r);
      return T ? T.days.push(_) : E.push(new G1(I, [_])), E;
    }, []), M = new Y1(g, C);
    return h.push(M), h;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function rC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: u, today: f } = t, { fromYear: p, toYear: v, fromMonth: x, toMonth: h } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && h && (r = h), !r && v && (r = u(v, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = u(p, 0, 1) : !n && g && (n = o(l(e.today ?? f(), -100))), r ? r = i(r) : v ? r = u(v, 11, 31) : !r && g && (r = d(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function oC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, u = s(e);
  if (!t)
    return i(u, d);
  if (!(l(t, e) < a))
    return i(u, d);
}
function aC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -d);
  if (!(l(u, t) <= 0))
    return i(u, -d);
}
function sC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function jo(e, t) {
  const [n, r] = Te(e);
  return [t === void 0 ? n : t, r];
}
function iC(e, t) {
  const [n, r] = rC(e, t), { startOfMonth: o, endOfMonth: a } = t, s = $i(e, n, r, t), [i, l] = jo(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Vt(() => {
    const M = $i(e, n, r, t);
    l(M);
  }, [e.timeZone]);
  const d = tC(i, r, e, t), u = J2(d, e.endMonth ? a(e.endMonth) : void 0, e, t), f = nC(d, u, e, t), p = sC(f), v = eC(f), x = aC(i, n, e, t), h = oC(i, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (M) => p.some((E) => E.days.some((P) => P.isEqualTo(M))), y = (M) => {
    if (g)
      return;
    let E = o(M);
    n && E < o(n) && (E = o(n)), r && E > o(r) && (E = o(r)), l(E), w == null || w(E);
  };
  return {
    months: f,
    weeks: p,
    days: v,
    navStart: n,
    navEnd: r,
    previousMonth: x,
    nextMonth: h,
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
function Fi(e) {
  return !e[we.disabled] && !e[we.hidden] && !e[we.outside];
}
function cC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Fi(i) && (i[we.focused] && a < at.FocusedModifier ? (o = s, a = at.FocusedModifier) : r != null && r.isEqualTo(s) && a < at.LastFocused ? (o = s, a = at.LastFocused) : n(s.date) && a < at.Selected ? (o = s, a = at.Selected) : i[we.today] && a < at.Today && (o = s, a = at.Today));
  }
  return o || (o = e.find((s) => Fi(t(s)))), o;
}
function lC(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: l } = a, { addDays: d, addMonths: u, addWeeks: f, addYears: p, endOfBroadcastWeek: v, endOfISOWeek: x, endOfWeek: h, max: g, min: w, startOfBroadcastWeek: b, startOfISOWeek: y, startOfWeek: k } = s;
  let M = {
    day: d,
    week: f,
    month: u,
    year: p,
    startOfWeek: (E) => l ? b(E, s) : i ? y(E) : k(E),
    endOfWeek: (E) => l ? v(E) : i ? x(E) : h(E)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? M = g([r, M]) : t === "after" && o && (M = w([o, M])), M;
}
function Wf(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = lC(e, t, n.date, r, o, a, s), d = !!(a.disabled && xt(l, a.disabled, s)), u = !!(a.hidden && xt(l, a.hidden, s)), f = l, p = new Pf(l, f, s);
  return !d && !u ? p : Wf(e, t, p, r, o, a, s, i + 1);
}
function dC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Te(), l = cC(t.days, n, r || (() => !1), s), [d, u] = Te(a ? l : void 0);
  return {
    isFocusTarget: (h) => !!(l != null && l.isEqualTo(h)),
    setFocused: u,
    focused: d,
    blur: () => {
      i(d), u(void 0);
    },
    moveFocus: (h, g) => {
      if (!d)
        return;
      const w = Wf(h, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), u(w));
    }
  };
}
function uC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = jo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (v) => (i == null ? void 0 : i.some((x) => l(x, v))) ?? !1, { min: u, max: f } = e;
  return {
    selected: i,
    select: (v, x, h) => {
      let g = [...i ?? []];
      if (d(v)) {
        if ((i == null ? void 0 : i.length) === u || r && (i == null ? void 0 : i.length) === 1)
          return;
        g = i == null ? void 0 : i.filter((w) => !l(w, v));
      } else
        (i == null ? void 0 : i.length) === f ? g = [v] : g = [...g, v];
      return o || s(g), o == null || o(g, v, x, h), g;
    },
    isSelected: d
  };
}
function fC(e, t, n = 0, r = 0, o = !1, a = pt) {
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
function mC(e, t, n = pt) {
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
function Li(e, t, n = pt) {
  return gt(e, t.from, !1, n) || gt(e, t.to, !1, n) || gt(t, e.from, !1, n) || gt(t, e.to, !1, n);
}
function pC(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? gt(e, i, !1, n) : Of(i, n) ? i.some((l) => gt(e, l, !1, n)) : As(i) ? i.from && i.to ? Li(e, { from: i.from, to: i.to }, n) : !1 : _f(i) ? mC(e, i.dayOfWeek, n) : Af(i) ? n.isAfter(i.before, i.after) ? Li(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : xt(e.from, i, n) || xt(e.to, i, n) : Df(i) || jf(i) ? xt(e.from, i, n) || xt(e.to, i, n) : !1))
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
function hC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = jo(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, v, x) => {
      const { min: h, max: g } = e, w = p ? fC(p, d, h, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && pC({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), s || l(w), s == null || s(w, p, v, x), w;
    },
    isSelected: (p) => d && gt(d, p, !1, t)
  };
}
function vC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = jo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (f, p, v) => {
      let x = f;
      return !r && i && i && l(f, i) && (x = void 0), o || s(x), o == null || o(x, f, p, v), x;
    },
    isSelected: (f) => i ? l(i, f) : !1
  };
}
function gC(e, t) {
  const n = vC(e, t), r = uC(e, t), o = hC(e, t);
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
function xC(e) {
  var Pn;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Oe(t.today, t.timeZone)), t.month && (t.month = new Oe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Oe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Oe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Oe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Oe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (Pn = t.selected) == null ? void 0 : Pn.map((ce) => new Oe(ce, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Oe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Oe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Rr(() => {
    const ce = { ...Do, ...t.locale };
    return {
      dateLib: new Ge({
        locale: ce,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: C2(t.components),
      formatters: j2(t.formatters),
      labels: { ...U2, ...t.labels },
      locale: ce,
      classNames: { ...If(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: u, numberOfMonths: f = 1, onDayBlur: p, onDayClick: v, onDayFocus: x, onDayKeyDown: h, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: k, styles: C } = t, { formatCaption: M, formatDay: E, formatMonthDropdown: P, formatWeekNumber: I, formatWeekNumberHeader: T, formatWeekdayName: _, formatYearDropdown: W } = r, Y = iC(t, a), { days: $, months: G, navStart: V, navEnd: U, previousMonth: j, nextMonth: F, goToMonth: ne } = Y, R = y2($, t, V, U, a), { isSelected: N, select: O, selected: B } = gC(t, a) ?? {}, { blur: K, focused: L, isFocusTarget: D, moveFocus: q, setFocused: J } = dC(t, Y, R, N ?? (() => !1), a), { labelDayButton: re, labelGridcell: ue, labelGrid: fe, labelMonthDropdown: Me, labelNav: Ie, labelPrevious: rt, labelNext: Xe, labelWeekday: ot, labelWeekNumber: Zt, labelWeekNumberHeader: Le, labelYearDropdown: Tt } = o, dr = Rr(() => I2(a, t.ISOWeek), [a, t.ISOWeek]), Sn = d !== void 0 || v !== void 0, Qt = he(() => {
    j && (ne(j), y == null || y(j));
  }, [j, ne, y]), Jt = he(() => {
    F && (ne(F), b == null || b(F));
  }, [ne, F, b]), kn = he((ce, be) => (se) => {
    se.preventDefault(), se.stopPropagation(), J(ce), O == null || O(ce.date, be, se), v == null || v(ce.date, be, se);
  }, [O, v, J]), Nn = he((ce, be) => (se) => {
    J(ce), x == null || x(ce.date, be, se);
  }, [x, J]), ur = he((ce, be) => (se) => {
    K(), p == null || p(ce.date, be, se);
  }, [K, p]), Ke = he((ce, be) => (se) => {
    const xe = {
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
    if (xe[se.key]) {
      se.preventDefault(), se.stopPropagation();
      const [Ae, pe] = xe[se.key];
      q(Ae, pe);
    }
    h == null || h(ce.date, be, se);
  }, [q, h, t.dir]), Ue = he((ce, be) => (se) => {
    g == null || g(ce.date, be, se);
  }, [g]), En = he((ce, be) => (se) => {
    w == null || w(ce.date, be, se);
  }, [w]), Os = he((ce) => (be) => {
    const se = Number(be.target.value), xe = a.setMonth(a.startOfMonth(ce), se);
    ne(xe);
  }, [a, ne]), ht = he((ce) => (be) => {
    const se = Number(be.target.value), xe = a.setYear(a.startOfMonth(ce), se);
    ne(xe);
  }, [a, ne]), { className: Be, style: $t } = Rr(() => ({
    className: [i[oe.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[oe.Root], ...t.style }
  }), [i, t.className, t.style, C]), To = S2(t), fr = bt(null);
  Q2(fr, !!t.animate, {
    classNames: i,
    months: G,
    focused: L,
    dateLib: a
  });
  const Mn = {
    dayPickerProps: t,
    selected: B,
    select: O,
    isSelected: N,
    months: G,
    nextMonth: F,
    previousMonth: j,
    goToMonth: ne,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return S.createElement(
    Rf.Provider,
    { value: Mn },
    S.createElement(
      n.Root,
      { rootRef: t.animate ? fr : void 0, className: Be, style: $t, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...To },
      S.createElement(
        n.Months,
        { className: i[oe.Months], style: C == null ? void 0 : C[oe.Months] },
        !t.hideNavigation && !u && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: C == null ? void 0 : C[oe.Nav], "aria-label": Ie(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: j, nextMonth: F }),
        G.map((ce, be) => S.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[oe.Month],
            style: C == null ? void 0 : C[oe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: be,
            displayIndex: be,
            calendarMonth: ce
          },
          u === "around" && !t.hideNavigation && be === 0 && S.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[oe.PreviousMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": rt(j), onClick: Qt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          S.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[oe.MonthCaption], style: C == null ? void 0 : C[oe.MonthCaption], calendarMonth: ce, displayIndex: be }, l != null && l.startsWith("dropdown") ? S.createElement(
            n.DropdownNav,
            { className: i[oe.Dropdowns], style: C == null ? void 0 : C[oe.Dropdowns] },
            (() => {
              const se = l === "dropdown" || l === "dropdown-months" ? S.createElement(n.MonthsDropdown, { key: "month", className: i[oe.MonthsDropdown], "aria-label": Me(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Os(ce.date), options: _2(ce.date, V, U, r, a), style: C == null ? void 0 : C[oe.Dropdown], value: a.getMonth(ce.date) }) : S.createElement("span", { key: "month" }, P(ce.date, a)), xe = l === "dropdown" || l === "dropdown-years" ? S.createElement(n.YearsDropdown, { key: "year", className: i[oe.YearsDropdown], "aria-label": Tt(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: ht(ce.date), options: T2(V, U, r, a, !!t.reverseYears), style: C == null ? void 0 : C[oe.Dropdown], value: a.getYear(ce.date) }) : S.createElement("span", { key: "year" }, W(ce.date, a));
              return a.getMonthYearOrder() === "year-first" ? [xe, se] : [se, xe];
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
            } }, M(ce.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            S.createElement(n.CaptionLabel, { className: i[oe.CaptionLabel], role: "status", "aria-live": "polite" }, M(ce.date, a.options, a))
          )),
          u === "around" && !t.hideNavigation && be === f - 1 && S.createElement(
            n.NextMonthButton,
            { type: "button", className: i[oe.NextMonthButton], tabIndex: F ? void 0 : -1, "aria-disabled": F ? void 0 : !0, "aria-label": Xe(F), onClick: Jt, "data-animated-button": t.animate ? "true" : void 0 },
            S.createElement(n.Chevron, { disabled: F ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          be === f - 1 && u === "after" && !t.hideNavigation && S.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: C == null ? void 0 : C[oe.Nav], "aria-label": Ie(), onPreviousClick: Qt, onNextClick: Jt, previousMonth: j, nextMonth: F }),
          S.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": fe(ce.date, a.options, a) || void 0, className: i[oe.MonthGrid], style: C == null ? void 0 : C[oe.MonthGrid] },
            !t.hideWeekdays && S.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[oe.Weekdays], style: C == null ? void 0 : C[oe.Weekdays] },
              k && S.createElement(n.WeekNumberHeader, { "aria-label": Le(a.options), className: i[oe.WeekNumberHeader], style: C == null ? void 0 : C[oe.WeekNumberHeader], scope: "col" }, T()),
              dr.map((se) => S.createElement(n.Weekday, { "aria-label": ot(se, a.options, a), className: i[oe.Weekday], key: String(se), style: C == null ? void 0 : C[oe.Weekday], scope: "col" }, _(se, a.options, a)))
            ),
            S.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[oe.Weeks], style: C == null ? void 0 : C[oe.Weeks] }, ce.weeks.map((se) => S.createElement(
              n.Week,
              { className: i[oe.Week], key: se.weekNumber, style: C == null ? void 0 : C[oe.Week], week: se },
              k && // biome-ignore lint/a11y/useSemanticElements: react component
              S.createElement(n.WeekNumber, { week: se, style: C == null ? void 0 : C[oe.WeekNumber], "aria-label": Zt(se.weekNumber, {
                locale: s
              }), className: i[oe.WeekNumber], scope: "row", role: "rowheader" }, I(se.weekNumber, a)),
              se.days.map((xe) => {
                const { date: Ae } = xe, pe = R(xe);
                if (pe[we.focused] = !pe.hidden && !!(L != null && L.isEqualTo(xe)), pe[Qe.selected] = (N == null ? void 0 : N(Ae)) || pe.selected, As(B)) {
                  const { from: X, to: le } = B;
                  pe[Qe.range_start] = !!(X && le && a.isSameDay(Ae, X)), pe[Qe.range_end] = !!(X && le && a.isSameDay(Ae, le)), pe[Qe.range_middle] = gt(B, Ae, !0, a);
                }
                const Rn = O2(pe, C, t.modifiersStyles), mr = w2(pe, i, t.modifiersClassNames), z = !Sn && !pe.hidden ? ue(Ae, pe, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  S.createElement(n.Day, { key: `${a.format(Ae, "yyyy-MM-dd")}_${a.format(xe.displayMonth, "yyyy-MM")}`, day: xe, modifiers: pe, className: mr.join(" "), style: Rn, role: "gridcell", "aria-selected": pe.selected || void 0, "aria-label": z, "data-day": a.format(Ae, "yyyy-MM-dd"), "data-month": xe.outside ? a.format(Ae, "yyyy-MM") : void 0, "data-selected": pe.selected || void 0, "data-disabled": pe.disabled || void 0, "data-hidden": pe.hidden || void 0, "data-outside": xe.outside || void 0, "data-focused": pe.focused || void 0, "data-today": pe.today || void 0 }, !pe.hidden && Sn ? S.createElement(n.DayButton, { className: i[oe.DayButton], style: C == null ? void 0 : C[oe.DayButton], type: "button", day: xe, modifiers: pe, disabled: pe.disabled || void 0, tabIndex: D(xe) ? 0 : -1, "aria-label": re(Ae, pe, a.options, a), onClick: kn(xe, pe), onBlur: ur(xe, pe), onFocus: Nn(xe, pe), onKeyDown: Ke(xe, pe), onMouseEnter: Ue(xe, pe), onMouseLeave: En(xe, pe) }, E(Ae, a.options, a)) : !pe.hidden && E(xe.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      S.createElement(n.Footer, { className: i[oe.Footer], style: C == null ? void 0 : C[oe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const bC = {
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
}, yC = (e, t, n) => {
  n = n || {};
  let r;
  const o = bC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, wC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, CC = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, SC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, kC = {
  date: dn({
    formats: wC,
    defaultWidth: "full"
  }),
  time: dn({
    formats: CC,
    defaultWidth: "full"
  }),
  dateTime: dn({
    formats: SC,
    defaultWidth: "full"
  })
}, NC = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, EC = (e, t, n, r) => NC[e], MC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, PC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, RC = {
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
}, AC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, DC = {
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
}, jC = {
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
}, _C = (e, t) => {
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
}, OC = {
  ordinalNumber: _C,
  era: it({
    values: MC,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: PC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: it({
    values: RC,
    defaultWidth: "wide"
  }),
  day: it({
    values: AC,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: DC,
    defaultWidth: "wide",
    formattingValues: jC,
    defaultFormattingWidth: "wide"
  })
}, IC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, TC = /\d+/i, $C = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, FC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, LC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, WC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, VC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, BC = {
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
}, zC = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, HC = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, YC = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, GC = {
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
}, KC = {
  ordinalNumber: Cf({
    matchPattern: IC,
    parsePattern: TC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ct({
    matchPatterns: $C,
    defaultMatchWidth: "wide",
    parsePatterns: FC,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: LC,
    defaultMatchWidth: "wide",
    parsePatterns: WC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: VC,
    defaultMatchWidth: "wide",
    parsePatterns: BC,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: zC,
    defaultMatchWidth: "wide",
    parsePatterns: HC,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: YC,
    defaultMatchWidth: "any",
    parsePatterns: GC,
    defaultParseWidth: "any"
  })
}, UC = {
  code: "ja",
  formatDistance: yC,
  formatLong: kC,
  formatRelative: EC,
  localize: OC,
  match: KC,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, qC = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Mr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Vf = S.forwardRef(
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
  }, v) => {
    const [x, h] = S.useState(
      () => Mr(n || null)
    ), g = e !== void 0, w = g ? Mr(e) : x, b = S.useMemo(
      () => Mr(r || null),
      [r]
    ), y = S.useMemo(
      () => Mr(o || null),
      [o]
    ), k = S.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = (M) => {
      const E = M || null;
      g || h(E), t == null || t(E);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: v,
        className: A(qC(u), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          xC,
          {
            animate: !1,
            mode: "single",
            selected: w || void 0,
            onSelect: C,
            locale: f === "ja" ? UC : Do,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (M) => `${M.getFullYear()}${f === "ja" ? "年" : ""}`
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
              const M = If(), E = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
Vf.displayName = "Calendar";
const Wi = ae(
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
), XC = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Aa = S.forwardRef(
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
    const d = r ? Qr : "a", f = XC[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      d,
      {
        ref: l,
        className: A(Wi({ intent: t, size: n }), e),
        ...i,
        children: s
      }
    ) : /* @__PURE__ */ c.jsxs(
      d,
      {
        ref: l,
        className: A(Wi({ intent: t, size: n }), e),
        ...i,
        children: [
          o && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: je(o, { size: f }) }),
          s,
          a && /* @__PURE__ */ c.jsx("span", { className: "flex-shrink-0", children: je(a, { size: f }) })
        ]
      }
    );
  }
);
Aa.displayName = "TextLink";
const ZC = ae(
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
), QC = ae("size-5 shrink-0", {
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
}), JC = ae("font-bold text-md", {
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
}), eS = ae(
  "text-body-primary font-normal leading-6 text-md"
), tS = ae("min-w-0 gap-xxxs flex flex-1 flex-col"), nS = {
  info: Ar,
  success: ec,
  warning: Ar,
  alert: Ar,
  paid: wp
}, rS = S.forwardRef(
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
    const d = s || nS[t];
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: l,
        className: A(ZC({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ c.jsxs("div", { className: A(tS()), children: [
          n && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A(QC({ intent: t }), "top-0.5 relative"),
                  children: je(d, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: A(JC({ intent: t })), children: n })
            ] }),
            a && (a.href ? /* @__PURE__ */ c.jsx(
              Aa,
              {
                href: a.href,
                target: a.target,
                rel: a.rel,
                intent: "primary",
                size: "sm",
                children: a.label
              }
            ) : /* @__PURE__ */ c.jsx(
              Aa,
              {
                onClick: a.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: a.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ c.jsx("div", { className: A(eS()), children: o || r })
        ] })
      }
    );
  }
);
rS.displayName = "Callout";
const oS = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), aS = ae(
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
), Or = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: A(oS({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      Uc,
      {
        id: l,
        className: A(aS({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          Xc,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(op, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(Ui, { style: { strokeWidth: 3 } })
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
Or.displayName = "Checkbox";
const sS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
sS.displayName = "CheckboxGroup";
const iS = ae(
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
), cS = S.forwardRef(
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
        className: A(iS({ selected: e, disabled: t }), n),
        onClick: i,
        ...a,
        children: r
      }
    );
  }
);
cS.displayName = "ChoiceChip";
const lS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { role: "listbox", className: A("gap-xs flex flex-wrap", t), children: e });
lS.displayName = "ChoiceChipGroup";
const dS = ae(
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
), mN = Sy, yt = S.forwardRef(
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
  }, v) => t ? /* @__PURE__ */ c.jsxs(
    ky,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...u !== void 0 && { onOpenChange: u },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx(Ny, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(Ey, { children: /* @__PURE__ */ c.jsx(
          My,
          {
            ref: v,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: A(dS({ intent: n }), f),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
yt.displayName = "Tooltip";
const uS = ae("space-y-md w-full", {
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
}), Bf = S.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: A(uS({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
Bf.displayName = "DataSheet";
const fS = ae(
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
), zf = S.forwardRef(
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
          fS({ variant: t }),
          f && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: A(r && "line-through opacity-60"), children: n }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
            s && /* @__PURE__ */ c.jsx(
              yt,
              {
                content: r ? null : (a == null ? void 0 : a.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Xi,
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
              yt,
              {
                content: (a == null ? void 0 : a.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Ji,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            l && r && /* @__PURE__ */ c.jsx(
              yt,
              {
                content: (a == null ? void 0 : a.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Zi,
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
zf.displayName = "DataSheetHeader";
const Hf = S.forwardRef(
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
Hf.displayName = "DataSheetSection";
const mS = ae("py-sm", {
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
}), pS = ae(
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
), hS = ae(
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
), Yf = S.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => {
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
        mS({ orientation: n, spacing: r }),
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            id: i,
            className: A(pS({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: A(hS({ orientation: n })), children: l })
      ]
    }
  );
});
Yf.displayName = "DataSheetKeyValue";
const vS = {
  actionsColumnParts: 10
}, Gf = S.createContext(
  vS
), gS = () => S.useContext(Gf), Kf = S.createContext({}), Uf = () => S.useContext(
  Kf
);
function xS({
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
    Gf.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: A("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const qf = S.forwardRef(xS);
qf.displayName = "DataSheetTable";
const Xf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: A("", e), ...n, children: t }));
Xf.displayName = "DataSheetTableHeader";
const Zf = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: A("", e), ...n, children: t }));
Zf.displayName = "DataSheetTableBody";
function bS({
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
    Kf.Provider,
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
const Qf = S.forwardRef(bS);
Qf.displayName = "DataSheetTableRow";
const qr = S.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = Uf(), u = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, f = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && f !== "" && f !== "-";
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
qr.displayName = "DataSheetTableCell";
function yS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = gS(), {
    item: u,
    isDeleted: f,
    ariaLabels: p,
    tooltipMessages: v
  } = Uf(), x = n ?? u;
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
      className: A("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          yt,
          {
            content: f ? null : (v == null ? void 0 : v.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Xi,
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
          yt,
          {
            content: (v == null ? void 0 : v.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Ji,
                onClick: () => i(x),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        l && x && f && /* @__PURE__ */ c.jsx(
          yt,
          {
            content: (v == null ? void 0 : v.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ne,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Zi,
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
const Jf = S.forwardRef(
  yS
);
Jf.displayName = "DataSheetTableActionsCell";
const em = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Ne, { ref: n, className: A("w-full", e), ...t }));
em.displayName = "DataSheetAction";
const pN = Object.assign(Bf, {
  Header: zf,
  Section: Hf,
  KeyValue: Yf,
  Table: qf,
  TableHeader: Xf,
  TableBody: Zf,
  TableRow: Qf,
  TableCell: qr,
  TableActionsCell: Jf,
  Action: em
}), wS = (e, t) => {
  const [n, r] = Te(e);
  return Vt(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, _o = () => {
  const e = bt(!1), t = he(() => {
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
}, tm = ae(
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
), CS = ae(
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
), Ln = ae(
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
    onKeyDown: i,
    onKeyUp: l,
    onCompositionStart: d,
    onCompositionEnd: u,
    ...f
  }, p) => {
    const v = !!t, x = !!n, h = !!r, g = f.type === "number", { compositionHandlers: w, guardKeyHandler: b } = _o(), y = (C) => {
      w.onCompositionStart(C), d == null || d(C);
    }, k = (C) => {
      w.onCompositionEnd(C), u == null || u(C);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: A(tm({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Ln({ position: "prefix", interactive: !1 }),
          children: je(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: p,
          className: CS({ hasPrefix: v, hasTrailing: x, isNumeric: g }),
          ...f,
          onKeyDown: b(i),
          onKeyUp: b(l),
          onCompositionStart: y,
          onCompositionEnd: k
        }
      ),
      n && /* @__PURE__ */ c.jsx(c.Fragment, { children: h ? /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          className: Ln({
            position: "trailing",
            interactive: !0
          }),
          disabled: f.disabled,
          onClick: r,
          children: je(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Ln({
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
const SS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Pr = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, kS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), NS = S.forwardRef(
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
    formatDate: f = kS,
    className: p,
    contentClassName: v,
    defaultOpen: x = !1,
    open: h,
    onOpenChange: g,
    side: w = "bottom",
    locale: b = "ja",
    ...y
  }, k) => {
    const [C, M] = S.useState(
      () => Pr(n || null)
    ), [E, P] = S.useState(x), I = e !== void 0, T = I ? Pr(e) : C, _ = h !== void 0 ? h : E, W = S.useMemo(
      () => Pr(r || null),
      [r]
    ), Y = S.useMemo(
      () => Pr(o || null),
      [o]
    ), $ = S.useMemo(() => !W || !Y ? !0 : W <= Y, [W, Y]), G = (F) => {
      const ne = F || null;
      I || M(ne), t == null || t(ne), ne && (h === void 0 && P(!1), g == null || g(!1));
    }, V = (F) => {
      h === void 0 && P(F), g == null || g(F);
    }, U = (F) => {
      switch (F.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          F.preventDefault(), _ || V(!0);
          break;
        case "Escape":
          _ && (F.preventDefault(), V(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(vd, { open: _, onOpenChange: V, children: [
      /* @__PURE__ */ c.jsx(gd, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ...y,
          ref: k,
          type: "text",
          readOnly: !0,
          placeholder: u,
          value: T ? f(T) : "",
          disabled: a,
          invalid: s || i,
          trailingIcon: l || Lm,
          trailingIconSize: d,
          onTrailingIconClick: () => !a && V(!_),
          className: A(
            _ && "ring-interactive-focused ring-4",
            p
          ),
          onKeyDown: U,
          onClick: () => !a && V(!_),
          "aria-expanded": _,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ c.jsx(xd, { children: /* @__PURE__ */ c.jsx(
        hs,
        {
          className: A(SS, v),
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
            Vf,
            {
              value: T,
              onChange: G,
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
NS.displayName = "DatePicker";
const ES = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], hN = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: a,
  actions: s = ES,
  cancellable: i = !0,
  cancelButtonLabel: l = "キャンセル",
  allowClickOutside: d = !0,
  onOpenAutoFocus: u,
  bodyClassName: f
}) => {
  const [p, v] = S.useState(-1), h = a !== void 0 ? a : p !== -1, g = async (k) => {
    const C = s.indexOf(k);
    if (k.onAction) {
      v(C);
      const M = await k.onAction(t);
      if (v(-1), M === !1)
        return;
    } else
      v(-1);
    e && t(k.value);
  }, w = () => {
    n(t);
  }, b = (k) => {
    k.preventDefault(), i && !h && d && n(t);
  }, y = (k) => {
    if (h) {
      k.preventDefault();
      return;
    }
    k.preventDefault(), n(t);
  };
  return /* @__PURE__ */ c.jsx(Ga, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(Ka, { children: /* @__PURE__ */ c.jsx(
    Ua,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        qa,
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
              Yc,
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
                Ne,
                {
                  intent: "tertiary",
                  onClick: w,
                  disabled: h,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((k, C) => {
                const { label: M, classNames: E, onAction: P, value: I, ...T } = k;
                return /* @__PURE__ */ c.jsx(
                  Ne,
                  {
                    loading: p === C,
                    ...T,
                    intent: k.intent || "primary",
                    className: E,
                    onClick: () => g(k),
                    children: M
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
}, nm = Xr(void 0), Ds = () => {
  const e = $r(nm);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, MS = ({
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
  const [d, u] = Te(o), f = a !== void 0 ? a : d, p = S.Children.toArray(r).filter(
    (C) => S.isValidElement(C) && C.type === rm
  ), v = p.length, x = (C) => {
    C >= 0 && C < v && (a === void 0 && u(C), l == null || l(C));
  }, h = () => x(f + 1), g = () => x(f - 1), w = (C) => {
    a === void 0 && u(o), t(C);
  }, b = (C) => {
    C.preventDefault(), s && i && n(w);
  }, y = (C) => {
    C.preventDefault(), s && n(w);
  }, k = {
    currentStep: f,
    totalSteps: v,
    goToStep: x,
    nextStep: h,
    prevStep: g,
    isFirstStep: f === 0,
    isLastStep: f === v - 1,
    cancellable: s,
    onClose: w,
    onCancel: n
  };
  return /* @__PURE__ */ c.jsx(nm.Provider, { value: k, children: /* @__PURE__ */ c.jsx(Ga, { open: e, onOpenChange: w, children: /* @__PURE__ */ c.jsx(Ka, { children: /* @__PURE__ */ c.jsx(
    Ua,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        qa,
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
}, rm = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), PS = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "px-xl py-lg flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
  Yc,
  {
    className: `text-xxl text-body-primary font-bold min-h-4.5 flex
          items-center leading-none`,
    children: e
  }
) }), RS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: `border-divider-default bg-surface-secondary px-xl pt-md pb-xxl
        text-body-primary flex-grow-0 border-y-1 ${t || ""}`,
    children: e
  }
), AS = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = Ds(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(Ne, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, DS = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = Ds(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(bv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ne, { ...o, onClick: i, children: e });
}, vN = {
  Root: MS,
  Step: rm,
  Header: PS,
  Body: RS,
  Footer: AS,
  Action: DS,
  useMultiStepDialog: Ds
}, gN = ({
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
}, om = vd, jS = gd, _S = k0, js = S.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(xd, { children: /* @__PURE__ */ c.jsx(
  hs,
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
js.displayName = hs.displayName;
const OS = (e) => typeof e == "string" ? e : e.label || e.value || String(e), IS = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, am = S.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = OS,
      getSuggestionKey: d = IS,
      debounceMs: u = 300,
      minQueryLength: f = 0,
      loadingText: p = "Loading...",
      disabled: v,
      onFocus: x,
      onBlur: h,
      onKeyDown: g,
      ...w
    } = e, [b, y] = Te(!1), [k, C] = Te(
      []
    ), [M, E] = Te(!1), P = bt(null), [I, T] = Te(0), _ = bt([]), W = wS(n, u), Y = Rr(() => {
      if (!o)
        return k;
      if (!n || n.length < f)
        return o;
      const R = n.toLowerCase();
      return o.filter((N) => l(N).toLowerCase().includes(R));
    }, [
      o,
      k,
      n,
      f,
      l
    ]);
    Vt(() => {
      if (a) {
        if (W.length < f) {
          C([]), y(!1), E(!1);
          return;
        }
        return P.current && P.current.abort(), P.current = new AbortController(), E(!0), a(W).then((R) => {
          C(R);
        }).catch((R) => {
          R.name !== "AbortError" && console.debug("AutoSuggest search failed:", R), C([]);
        }).finally(() => {
          E(!1);
        }), () => {
          P.current && P.current.abort();
        };
      }
    }, [W, a, f]);
    const $ = he(
      (R) => {
        const N = l(R);
        r(N), s == null || s(R), y(!1);
      },
      [r, s, l]
    ), G = he(
      (R) => {
        v || y(!0), x == null || x(R);
      },
      [v, x]
    ), V = he(
      (R) => {
        y(!1), h == null || h(R);
      },
      [h]
    ), U = he(
      (R) => {
        const N = R.target.value;
        r(N), !b && Y.length > 0 && y(!0);
      },
      [r, b, Y.length]
    );
    Vt(() => {
      T(0), _.current = [];
    }, [Y]), Vt(() => {
      var R;
      b && I >= 0 && _.current[I] && ((R = _.current[I]) == null || R.scrollIntoView({
        block: "nearest"
      }));
    }, [I, b]);
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
            const N = Y[I];
            N && $(N);
            break;
          }
          case "ArrowDown":
            R.preventDefault(), T(
              (N) => N < Y.length - 1 ? N + 1 : N
            );
            break;
          case "ArrowUp":
            R.preventDefault(), T((N) => N > 0 ? N - 1 : N);
            break;
        }
        g == null || g(R);
      },
      [b, I, Y, $, g]
    ), F = b && !v && (Y.length > 0 || M), ne = F && I >= 0 ? `autosuggest-item-${I}` : void 0;
    return /* @__PURE__ */ c.jsxs(om, { open: F, children: [
      /* @__PURE__ */ c.jsx(_S, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Oo,
        {
          ref: t,
          value: n,
          onChange: U,
          onFocus: G,
          onBlur: V,
          onKeyDown: j,
          disabled: v,
          role: "combobox",
          "aria-expanded": F,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": ne,
          "aria-autocomplete": "list",
          ...w
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        js,
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
          children: M ? /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ c.jsx(np, { className: "h-4 w-4 animate-spin" }),
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
              children: Y.map((R, N) => {
                const O = l(R), B = N === I, K = `autosuggest-item-${N}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: K,
                    ref: (L) => {
                      _.current[N] = L;
                    },
                    role: "option",
                    "aria-selected": B,
                    "data-value": O,
                    onClick: () => $(R),
                    onPointerDown: (L) => {
                      L.preventDefault(), $(R);
                    },
                    onMouseEnter: () => T(N),
                    className: A(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      B && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(R) : l(R)
                  },
                  d(R, N)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
am.displayName = "AutoSuggest";
var me = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(me || {}), Z = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(Z || {});
const TS = [
  {
    backgroundColor: Z.AccentSunSoft,
    textColor: me.AccentSunStrong,
    iconColor: Z.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: Z.AccentSunPale,
    textColor: me.AccentSunStrong,
    iconColor: Z.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: Z.AccentWoodSoft,
    textColor: me.AccentWoodStrong,
    iconColor: Z.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: Z.AccentWoodPale,
    textColor: me.AccentWoodStrong,
    iconColor: Z.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: Z.AccentOrangeSoft,
    textColor: me.AccentOrangeStrong,
    iconColor: Z.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: Z.AccentOrangePale,
    textColor: me.AccentOrangeStrong,
    iconColor: Z.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: Z.AccentYellowSoft,
    textColor: me.AccentYellowStrong,
    iconColor: Z.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: Z.AccentYellowPale,
    textColor: me.AccentYellowStrong,
    iconColor: Z.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: Z.AccentLemonSoft,
    textColor: me.AccentLemonStrong,
    iconColor: Z.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: Z.AccentLemonPale,
    textColor: me.AccentLemonStrong,
    iconColor: Z.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: Z.AccentGrassSoft,
    textColor: me.AccentGrassStrong,
    iconColor: Z.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: Z.AccentGrassPale,
    textColor: me.AccentGrassStrong,
    iconColor: Z.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: Z.AccentLimeSoft,
    textColor: me.AccentLimeStrong,
    iconColor: Z.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: Z.AccentLimePale,
    textColor: me.AccentLimeStrong,
    iconColor: Z.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: Z.AccentGreenSoft,
    textColor: me.AccentGreenStrong,
    iconColor: Z.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: Z.AccentGreenPale,
    textColor: me.AccentGreenStrong,
    iconColor: Z.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: Z.AccentPeacockSoft,
    textColor: me.AccentPeacockStrong,
    iconColor: Z.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: Z.AccentPeacockPale,
    textColor: me.AccentPeacockStrong,
    iconColor: Z.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: Z.AccentCyanSoft,
    textColor: me.AccentCyanStrong,
    iconColor: Z.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: Z.AccentCyanPale,
    textColor: me.AccentCyanStrong,
    iconColor: Z.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: Z.AccentSkySoft,
    textColor: me.AccentSkyStrong,
    iconColor: Z.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: Z.AccentSkyPale,
    textColor: me.AccentSkyStrong,
    iconColor: Z.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: Z.AccentSeaSoft,
    textColor: me.AccentSeaStrong,
    iconColor: Z.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: Z.AccentSeaPale,
    textColor: me.AccentSeaStrong,
    iconColor: Z.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: Z.AccentVioletSoft,
    textColor: me.AccentVioletStrong,
    iconColor: Z.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: Z.AccentVioletPale,
    textColor: me.AccentVioletStrong,
    iconColor: Z.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: Z.AccentPurpleSoft,
    textColor: me.AccentPurpleStrong,
    iconColor: Z.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: Z.AccentPurplePale,
    textColor: me.AccentPurpleStrong,
    iconColor: Z.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: Z.AccentMagentaSoft,
    textColor: me.AccentMagentaStrong,
    iconColor: Z.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: Z.AccentMagentaPale,
    textColor: me.AccentMagentaStrong,
    iconColor: Z.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: Z.AccentCharcoalSoft,
    textColor: me.AccentCharchoalStrong,
    iconColor: Z.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: Z.AccentCharcoalPale,
    textColor: me.AccentCharchoalStrong,
    iconColor: Z.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: Z.AccentGraySoft,
    textColor: me.AccentGrayStrong,
    iconColor: Z.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: Z.AccentGrayPale,
    textColor: me.AccentGrayStrong,
    iconColor: Z.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: Z.AccentGrayPale,
    textColor: me.AccentGrayStrong,
    iconColor: Z.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: Z.AccentBambooPale,
    textColor: me.AccentBambooStrong,
    iconColor: Z.AccentBambooStrong,
    code: 10
  }
], $S = ae(
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
), Da = ({
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
  const f = TS.find(
    (v) => v.code === e
  ), p = () => l === "secondary" ? `var(${f == null ? void 0 : f.iconColor})` : `var(${f == null ? void 0 : f.textColor})`;
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: A(
        $S({
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
            children: je(d, { size: 14 })
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "pt-0.5 relative h-full truncate", children: t }),
        !!r && !u && /* @__PURE__ */ c.jsx(
          "button",
          {
            className: A(
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
}, sm = S.forwardRef(
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
    invalid: v,
    disabled: x,
    className: h,
    onValidateTag: g,
    defaultValidationError: w = "Invalid tag",
    ...b
  }, y) => {
    const [k, C] = Te(""), M = s ?? k, E = i ?? C, [P, I] = Te(!1), { compositionHandlers: T, guardKeyHandler: _ } = _o(), [W, Y] = Te(null), $ = bt(null);
    S.useImperativeHandle(y, () => $.current);
    const G = S.useMemo(() => {
      const L = o.map(
        (D) => D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(L.join("|"));
    }, [o]), V = he(
      (L) => !(!L || !r && e.includes(L) || n && e.length >= n),
      [e, r, n]
    ), U = he(
      (L) => {
        const D = L.trim();
        if (V(D)) {
          if (g) {
            const q = g(D);
            if (!q.valid) {
              Y(
                q.error ?? w
              );
              return;
            }
          }
          t([...e, D]), E(""), Y(null);
        }
      },
      [
        e,
        t,
        V,
        E,
        g,
        w
      ]
    ), j = he(
      (L) => {
        const D = e.filter((q, J) => J !== L);
        t(D);
      },
      [e, t]
    ), F = he(
      (L) => {
        const D = L.target.value, q = D[D.length - 1];
        if (q && o.includes(q)) {
          const re = D.slice(0, -1);
          re && U(re);
          return;
        }
        const J = D.split(G);
        if (J.length > 1) {
          J.filter(Boolean).forEach((re) => U(re));
          return;
        }
        E(D);
      },
      [o, G, U, E]
    ), ne = he(
      (L) => {
        L.key === "Enter" && M.trim() && (L.preventDefault(), U(M)), (L.key === "Backspace" || L.key === "Delete") && !M && e.length > 0 && (L.preventDefault(), j(e.length - 1));
      },
      [M, e.length, U, j]
    ), R = he(() => {
      M.trim() && U(M), I(!1), Y(null);
    }, [M, U]), N = x || (n ? e.length >= n : !1), O = e.length === 0 && !M, B = !!d, K = !!u;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: A(
            tm({ invalid: v }),
            "min-h-11.5 !h-auto max-h-[200px] overflow-y-auto",
            h
          ),
          children: [
            d && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: Ln({
                  position: "prefix"
                }),
                children: je(d, { size: p })
              }
            ),
            /* @__PURE__ */ c.jsxs(
              "div",
              {
                className: A(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  B ? "pl-0" : "pl-sm",
                  K ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((L, D) => /* @__PURE__ */ c.jsx(
                    Da,
                    {
                      ...!x && { onRemove: () => j(D) },
                      children: L
                    },
                    D
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: $,
                      value: M,
                      onChange: F,
                      onKeyDown: _(ne),
                      onFocus: () => I(!0),
                      onBlur: R,
                      onCompositionStart: T.onCompositionStart,
                      onCompositionEnd: T.onCompositionEnd,
                      placeholder: O ? a : "",
                      disabled: N,
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
                className: Ln({
                  position: "trailing"
                }),
                children: je(u, { size: f })
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
            !W && !P && "invisible"
          ),
          children: W || l
        }
      )
    ] });
  }
);
sm.displayName = "TagInput";
const xN = Object.assign(Oo, {
  AutoSuggest: am,
  TagInput: sm
});
var Vi = 1, FS = 0.9, LS = 0.8, WS = 0.17, ra = 0.1, oa = 0.999, VS = 0.9999, BS = 0.99, zS = /[\\\/_+.#"@\[\(\{&]/, HS = /[\\\/_+.#"@\[\(\{&]/g, YS = /[\s-]/, im = /[\s-]/g;
function ja(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Vi : BS;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), u = 0, f, p, v, x; d >= 0; ) f = ja(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= Vi : zS.test(e.charAt(d - 1)) ? (f *= LS, v = e.slice(o, d - 1).match(HS), v && o > 0 && (f *= Math.pow(oa, v.length))) : YS.test(e.charAt(d - 1)) ? (f *= FS, x = e.slice(o, d - 1).match(im), x && o > 0 && (f *= Math.pow(oa, x.length))) : (f *= WS, o > 0 && (f *= Math.pow(oa, d - o))), e.charAt(d) !== t.charAt(a) && (f *= VS)), (f < ra && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = ja(e, t, n, r, d + 1, a + 2, s), p * ra > f && (f = p * ra)), f > u && (u = f), d = n.indexOf(l, d + 1);
  return s[i] = u, u;
}
function Bi(e) {
  return e.toLowerCase().replace(im, " ");
}
function GS(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, ja(e, t, Bi(e), Bi(t), 0, 0, {});
}
var On = '[cmdk-group=""]', aa = '[cmdk-group-items=""]', KS = '[cmdk-group-heading=""]', cm = '[cmdk-item=""]', zi = `${cm}:not([aria-disabled="true"])`, _a = "cmdk-item-select", an = "data-value", US = (e, t, n) => GS(e, t, n), lm = m.createContext(void 0), cr = () => m.useContext(lm), dm = m.createContext(void 0), _s = () => m.useContext(dm), um = m.createContext(void 0), fm = m.forwardRef((e, t) => {
  let n = sn(() => {
    var N, O;
    return { search: "", value: (O = (N = e.value) != null ? N : e.defaultValue) != null ? O : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = sn(() => /* @__PURE__ */ new Set()), o = sn(() => /* @__PURE__ */ new Map()), a = sn(() => /* @__PURE__ */ new Map()), s = sn(() => /* @__PURE__ */ new Set()), i = mm(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: v, loop: x, disablePointerSelection: h = !1, vimBindings: g = !0, ...w } = e, b = Se(), y = Se(), k = Se(), C = m.useRef(null), M = ak();
  Gt(() => {
    if (u !== void 0) {
      let N = u.trim();
      n.current.value = N, E.emit();
    }
  }, [u]), Gt(() => {
    M(6, Y);
  }, []);
  let E = m.useMemo(() => ({ subscribe: (N) => (s.current.add(N), () => s.current.delete(N)), snapshot: () => n.current, setState: (N, O, B) => {
    var K, L, D, q;
    if (!Object.is(n.current[N], O)) {
      if (n.current[N] = O, N === "search") W(), T(), M(1, _);
      else if (N === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(k);
          J ? J.focus() : (K = document.getElementById(b)) == null || K.focus();
        }
        if (M(7, () => {
          var J;
          n.current.selectedItemId = (J = $()) == null ? void 0 : J.id, E.emit();
        }), B || M(5, Y), ((L = i.current) == null ? void 0 : L.value) !== void 0) {
          let J = O ?? "";
          (q = (D = i.current).onValueChange) == null || q.call(D, J);
          return;
        }
      }
      E.emit();
    }
  }, emit: () => {
    s.current.forEach((N) => N());
  } }), []), P = m.useMemo(() => ({ value: (N, O, B) => {
    var K;
    O !== ((K = a.current.get(N)) == null ? void 0 : K.value) && (a.current.set(N, { value: O, keywords: B }), n.current.filtered.items.set(N, I(O, B)), M(2, () => {
      T(), E.emit();
    }));
  }, item: (N, O) => (r.current.add(N), O && (o.current.has(O) ? o.current.get(O).add(N) : o.current.set(O, /* @__PURE__ */ new Set([N]))), M(3, () => {
    W(), T(), n.current.value || _(), E.emit();
  }), () => {
    a.current.delete(N), r.current.delete(N), n.current.filtered.items.delete(N);
    let B = $();
    M(4, () => {
      W(), (B == null ? void 0 : B.getAttribute("id")) === N && _(), E.emit();
    });
  }), group: (N) => (o.current.has(N) || o.current.set(N, /* @__PURE__ */ new Set()), () => {
    a.current.delete(N), o.current.delete(N);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: k, labelId: y, listInnerRef: C }), []);
  function I(N, O) {
    var B, K;
    let L = (K = (B = i.current) == null ? void 0 : B.filter) != null ? K : US;
    return N ? L(N, n.current.search, O) : 0;
  }
  function T() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let N = n.current.filtered.items, O = [];
    n.current.filtered.groups.forEach((K) => {
      let L = o.current.get(K), D = 0;
      L.forEach((q) => {
        let J = N.get(q);
        D = Math.max(J, D);
      }), O.push([K, D]);
    });
    let B = C.current;
    G().sort((K, L) => {
      var D, q;
      let J = K.getAttribute("id"), re = L.getAttribute("id");
      return ((D = N.get(re)) != null ? D : 0) - ((q = N.get(J)) != null ? q : 0);
    }).forEach((K) => {
      let L = K.closest(aa);
      L ? L.appendChild(K.parentElement === L ? K : K.closest(`${aa} > *`)) : B.appendChild(K.parentElement === B ? K : K.closest(`${aa} > *`));
    }), O.sort((K, L) => L[1] - K[1]).forEach((K) => {
      var L;
      let D = (L = C.current) == null ? void 0 : L.querySelector(`${On}[${an}="${encodeURIComponent(K[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function _() {
    let N = G().find((B) => B.getAttribute("aria-disabled") !== "true"), O = N == null ? void 0 : N.getAttribute(an);
    E.setState("value", O || void 0);
  }
  function W() {
    var N, O, B, K;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let L = 0;
    for (let D of r.current) {
      let q = (O = (N = a.current.get(D)) == null ? void 0 : N.value) != null ? O : "", J = (K = (B = a.current.get(D)) == null ? void 0 : B.keywords) != null ? K : [], re = I(q, J);
      n.current.filtered.items.set(D, re), re > 0 && L++;
    }
    for (let [D, q] of o.current) for (let J of q) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = L;
  }
  function Y() {
    var N, O, B;
    let K = $();
    K && (((N = K.parentElement) == null ? void 0 : N.firstChild) === K && ((B = (O = K.closest(On)) == null ? void 0 : O.querySelector(KS)) == null || B.scrollIntoView({ block: "nearest" })), K.scrollIntoView({ block: "nearest" }));
  }
  function $() {
    var N;
    return (N = C.current) == null ? void 0 : N.querySelector(`${cm}[aria-selected="true"]`);
  }
  function G() {
    var N;
    return Array.from(((N = C.current) == null ? void 0 : N.querySelectorAll(zi)) || []);
  }
  function V(N) {
    let O = G()[N];
    O && E.setState("value", O.getAttribute(an));
  }
  function U(N) {
    var O;
    let B = $(), K = G(), L = K.findIndex((q) => q === B), D = K[L + N];
    (O = i.current) != null && O.loop && (D = L + N < 0 ? K[K.length - 1] : L + N === K.length ? K[0] : K[L + N]), D && E.setState("value", D.getAttribute(an));
  }
  function j(N) {
    let O = $(), B = O == null ? void 0 : O.closest(On), K;
    for (; B && !K; ) B = N > 0 ? rk(B, On) : ok(B, On), K = B == null ? void 0 : B.querySelector(zi);
    K ? E.setState("value", K.getAttribute(an)) : U(N);
  }
  let F = () => V(G().length - 1), ne = (N) => {
    N.preventDefault(), N.metaKey ? F() : N.altKey ? j(1) : U(1);
  }, R = (N) => {
    N.preventDefault(), N.metaKey ? V(0) : N.altKey ? j(-1) : U(-1);
  };
  return m.createElement(Q.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (N) => {
    var O;
    (O = w.onKeyDown) == null || O.call(w, N);
    let B = N.nativeEvent.isComposing || N.keyCode === 229;
    if (!(N.defaultPrevented || B)) switch (N.key) {
      case "n":
      case "j": {
        g && N.ctrlKey && ne(N);
        break;
      }
      case "ArrowDown": {
        ne(N);
        break;
      }
      case "p":
      case "k": {
        g && N.ctrlKey && R(N);
        break;
      }
      case "ArrowUp": {
        R(N);
        break;
      }
      case "Home": {
        N.preventDefault(), V(0);
        break;
      }
      case "End": {
        N.preventDefault(), F();
        break;
      }
      case "Enter": {
        N.preventDefault();
        let K = $();
        if (K) {
          let L = new Event(_a);
          K.dispatchEvent(L);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: P.inputId, id: P.labelId, style: ik }, l), Io(e, (N) => m.createElement(dm.Provider, { value: E }, m.createElement(lm.Provider, { value: P }, N))));
}), qS = m.forwardRef((e, t) => {
  var n, r;
  let o = Se(), a = m.useRef(null), s = m.useContext(um), i = cr(), l = mm(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  Gt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = pm(o, a, [e.value, e.children, a], e.keywords), f = _s(), p = Dt((M) => M.value && M.value === u.current), v = Dt((M) => d || i.filter() === !1 ? !0 : M.search ? M.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let M = a.current;
    if (!(!M || e.disabled)) return M.addEventListener(_a, x), () => M.removeEventListener(_a, x);
  }, [v, e.onSelect, e.disabled]);
  function x() {
    var M, E;
    h(), (E = (M = l.current).onSelect) == null || E.call(M, u.current);
  }
  function h() {
    f.setState("value", u.current, !0);
  }
  if (!v) return null;
  let { disabled: g, value: w, onSelect: b, forceMount: y, keywords: k, ...C } = e;
  return m.createElement(Q.div, { ref: wt(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : h, onClick: g ? void 0 : x }, e.children);
}), XS = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Se(), i = m.useRef(null), l = m.useRef(null), d = Se(), u = cr(), f = Dt((v) => o || u.filter() === !1 ? !0 : v.search ? v.filtered.groups.has(s) : !0);
  Gt(() => u.group(s), []), pm(s, i, [e.value, e.heading, l]);
  let p = m.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return m.createElement(Q.div, { ref: wt(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && m.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Io(e, (v) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, m.createElement(um.Provider, { value: p }, v))));
}), ZS = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), a = Dt((s) => !s.search);
  return !n && !a ? null : m.createElement(Q.div, { ref: wt(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), QS = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = _s(), s = Dt((d) => d.search), i = Dt((d) => d.selectedItemId), l = cr();
  return m.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), m.createElement(Q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), JS = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = m.useRef(null), s = m.useRef(null), i = Dt((d) => d.selectedItemId), l = cr();
  return m.useEffect(() => {
    if (s.current && a.current) {
      let d = s.current, u = a.current, f, p = new ResizeObserver(() => {
        f = requestAnimationFrame(() => {
          let v = d.offsetHeight;
          u.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
        });
      });
      return p.observe(d), () => {
        cancelAnimationFrame(f), p.unobserve(d);
      };
    }
  }, []), m.createElement(Q.div, { ref: wt(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, Io(e, (d) => m.createElement("div", { ref: wt(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), ek = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return m.createElement(Ga, { open: n, onOpenChange: r }, m.createElement(Ka, { container: s }, m.createElement(Ua, { "cmdk-overlay": "", className: o }), m.createElement(qa, { "aria-label": e.label, "cmdk-dialog": "", className: a }, m.createElement(fm, { ref: t, ...i }))));
}), tk = m.forwardRef((e, t) => Dt((n) => n.filtered.count === 0) ? m.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), nk = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return m.createElement(Q.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Io(e, (s) => m.createElement("div", { "aria-hidden": !0 }, s)));
}), Ve = Object.assign(fm, { List: JS, Item: qS, Input: QS, Group: XS, Separator: ZS, Dialog: ek, Empty: tk, Loading: nk });
function rk(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function ok(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function mm(e) {
  let t = m.useRef(e);
  return Gt(() => {
    t.current = e;
  }), t;
}
var Gt = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function sn(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Dt(e) {
  let t = _s(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function pm(e, t, n, r = []) {
  let o = m.useRef(), a = cr();
  return Gt(() => {
    var s;
    let i = (() => {
      var d;
      for (let u of n) {
        if (typeof u == "string") return u.trim();
        if (typeof u == "object" && "current" in u) return u.current ? (d = u.current.textContent) == null ? void 0 : d.trim() : o.current;
      }
    })(), l = r.map((d) => d.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(an, i), o.current = i;
  }), o;
}
var ak = () => {
  let [e, t] = m.useState(), n = sn(() => /* @__PURE__ */ new Map());
  return Gt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function sk(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Io({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement(sk(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var ik = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const hm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve,
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
hm.displayName = Ve.displayName;
const vm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Qi, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Ve.Input,
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
vm.displayName = Ve.Input.displayName;
const gm = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
gm.displayName = Ve.List.displayName;
const xm = S.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Ve.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
xm.displayName = Ve.Empty.displayName;
const Ir = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Group,
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
Ir.displayName = Ve.Group.displayName;
const ck = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
ck.displayName = Ve.Separator.displayName;
const Tr = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ve.Item,
  {
    ref: n,
    className: A(
      `hover:bg-interactive-neutral-hover
      data-[selected=true]:bg-interactive-neutral-hover
      data-[selected=true]:text-body-primary px-lg min-h-10 py-1.5 relative flex
      cursor-default items-center outline-none select-none
      data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50`,
      e
    ),
    ...t
  }
));
Tr.displayName = Ve.Item.displayName;
const Hi = ae("ease-in-out transition-all duration-300", {
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
}), lk = ({
  options: e,
  onValueChange: t = (L) => L,
  onApplySelection: n = (L) => L,
  variant: r,
  defaultValue: o = [],
  placeholder: a = "選択してください",
  placeholderAriaLabel: s = "選択してください",
  triggerDescription: i = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: l = "オプションが選択されていません",
  searchHelpText: d = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: u = "利用可能なオプションを検索",
  optionsListAriaLabel: f = "利用可能なオプション",
  selectAllLabel: p = "すべて選択",
  selectAllCountLabel: v = "オプション",
  clearAllLabel: x = "すべてクリア",
  closeLabel: h = "閉じる",
  moreSelectedLabel: g = "その他",
  searchPlaceholder: w = "オプションを検索...",
  maxCount: b = 10,
  modalPopover: y = !1,
  className: k,
  hideSelectAll: C = !1,
  searchable: M = !0,
  emptyIndicator: E = "結果が見つかりません。",
  autoSize: P = !1,
  singleLine: I = !1,
  popoverClassName: T,
  disabled: _ = !1,
  invalid: W = !1,
  responsive: Y,
  minWidth: $,
  maxWidth: G,
  deduplicateOptions: V = !1,
  resetOnDefaultValueChange: U = !0,
  closeOnSelect: j = !1,
  filterByValueAndLabel: F = !1,
  renderOption: ne,
  customTrigger: R,
  selectionDisplayMode: N = "default",
  hideSelection: O = !1,
  ...B
}, K) => {
  const [L, D] = S.useState(o), [q, J] = S.useState(!1), [re, ue] = S.useState(""), [fe, Me] = S.useState(""), [Ie, rt] = S.useState(""), Xe = S.useRef(L.length), ot = S.useRef(q), Zt = S.useRef(re), Le = S.useCallback(
    (z, X = "polite") => {
      X === "assertive" ? (rt(z), setTimeout(() => rt(""), 100)) : (Me(z), setTimeout(() => Me(""), 100));
    },
    []
  ), Tt = S.useId(), dr = `${Tt}-listbox`, Sn = `${Tt}-description`, Qt = `${Tt}-count`, Jt = S.useRef(o), kn = S.useCallback(
    (z) => {
      const X = z[0];
      return !!(X && typeof X == "object" && "heading" in X);
    },
    []
  ), Nn = S.useCallback((z, X) => {
    if (z.length !== X.length) return !1;
    const le = [...z].sort(), Ce = [...X].sort();
    return le.every((De, An) => De === Ce[An]);
  }, []), ur = S.useCallback(() => {
    D(o), J(!1), ue(""), t(o);
  }, [o, t]), Ke = S.useRef(null);
  S.useImperativeHandle(
    K,
    () => ({
      reset: ur,
      getSelectedValues: () => L,
      setSelectedValues: (z) => {
        D(z), t(z);
      },
      clear: () => {
        D([]), t([]);
      },
      focus: () => {
        if (Ke.current) {
          Ke.current.focus();
          const z = Ke.current.style.outline, X = Ke.current.style.outlineOffset;
          Ke.current.style.outline = "2px solid hsl(var(--ring))", Ke.current.style.outlineOffset = "2px", setTimeout(() => {
            Ke.current && (Ke.current.style.outline = z, Ke.current.style.outlineOffset = X);
          }, 1e3);
        }
      }
    }),
    [ur, L, t]
  );
  const [Ue, En] = S.useState("desktop");
  S.useEffect(() => {
    if (typeof window > "u") return;
    const z = () => {
      const X = window.innerWidth;
      X < 640 ? En("mobile") : X < 1024 ? En("tablet") : En("desktop");
    };
    return z(), window.addEventListener("resize", z), () => {
      typeof window < "u" && window.removeEventListener("resize", z);
    };
  }, []);
  const ht = (() => {
    if (!Y)
      return {
        maxCount: b,
        compactMode: !1
      };
    if (Y === !0) {
      const le = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ue];
      return {
        maxCount: (le == null ? void 0 : le.maxCount) ?? b,
        compactMode: (le == null ? void 0 : le.compactMode) ?? !1
      };
    }
    const z = Y[Ue];
    return {
      maxCount: (z == null ? void 0 : z.maxCount) ?? b,
      compactMode: (z == null ? void 0 : z.compactMode) ?? !1
    };
  })(), Be = S.useCallback(() => {
    if (e.length === 0) return [];
    let z;
    kn(e) ? z = e.flatMap((De) => De.options) : z = e;
    const X = /* @__PURE__ */ new Set(), le = [], Ce = [];
    return z.forEach((De) => {
      X.has(De.value) ? (le.push(De.value), V || Ce.push(De)) : (X.add(De.value), Ce.push(De));
    }), process.env.NODE_ENV === "development" && le.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${V ? "automatically removed" : "detected"}: ${le.join(
        ", "
      )}. ${V ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), V ? Ce : z;
  }, [e, V, kn]), $t = S.useCallback(
    (z) => {
      const X = Be().find((le) => le.value === z);
      return !X && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${z}" not found in options list`
      ), X;
    },
    [Be]
  ), To = S.useCallback(
    (z, X) => {
      const [le, Ce] = z.split(":");
      if (!F)
        return Ce && Ce.toLowerCase().includes(X.toLowerCase()) ? 1 : 0;
      const De = X.toLowerCase();
      return Ce && Ce.toLowerCase().includes(De) || le && le.toLowerCase().includes(De) ? 1 : 0;
    },
    [F]
  ), fr = (z) => {
    if (z.key === "Enter")
      J(!0);
    else if (z.key === "Backspace" && !z.currentTarget.value) {
      const X = [...L];
      X.pop(), D(X), t(X);
    }
  }, Mn = (z) => {
    if (_) return;
    const X = $t(z);
    if (X != null && X.disabled) return;
    const le = L.includes(z) ? L.filter((Ce) => Ce !== z) : [...L, z];
    D(le), t(le), j && J(!1);
  }, Pn = () => {
    _ || (D([]), n([]), t([]));
  }, ce = () => {
    _ || J((z) => !z);
  }, be = () => {
    if (_) return;
    const z = L.slice(
      0,
      ht.maxCount
    );
    D(z), t(z);
  }, se = () => {
    if (_) return;
    const z = Be().filter((X) => !X.disabled);
    if (L.length === z.length)
      Pn();
    else {
      const X = z.map((le) => le.value);
      D(X), t(X);
    }
    j && J(!1);
  }, Ae = ne || ((z) => {
    const { option: X, location: le, onRemove: Ce, disabled: De } = z;
    return le === "badge" ? /* @__PURE__ */ c.jsx(
      Da,
      {
        className: A(
          Hi({ variant: r }),
          ht.compactMode && "text-xs px-1.5 py-0.5",
          Ue === "mobile" && "max-w-[120px] truncate",
          I && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          De && "cursor-not-allowed"
        ),
        ...!De && { onRemove: Ce },
        children: X.label
      }
    ) : X.label;
  });
  S.useEffect(() => {
    if (!U) return;
    const z = Jt.current;
    Nn(z, o) || (Nn(L, o) || D(o), Jt.current = [...o]);
  }, [o, L, Nn, U]);
  const Rn = {
    minWidth: $ || (Ue === "mobile" ? "0px" : "200px"),
    maxWidth: G || "100%",
    width: P ? "auto" : "100%"
  }, mr = S.useMemo(() => N === "default" || L.length === 0 ? a : L.map((z) => {
    var X;
    return (X = $t(z)) == null ? void 0 : X.label;
  }).filter(Boolean).join(", "), [L, $t, a, N]);
  return S.useEffect(() => {
    q || ue("");
  }, [q]), S.useEffect(() => {
    const z = L.length, X = Be(), le = X.filter((Ce) => !Ce.disabled).length;
    if (z !== Xe.current) {
      const Ce = z - Xe.current;
      if (Ce > 0) {
        const An = L.slice(-Ce).map((Pm) => {
          var Is;
          return (Is = X.find((Rm) => Rm.value === Pm)) == null ? void 0 : Is.label;
        }).filter(Boolean);
        An.length === 1 ? Le(
          `${An[0]} selected. ${z} of ${le} options selected.`
        ) : Le(
          `${An.length} options selected. ${z} of ${le} total selected.`
        );
      } else Ce < 0 && Le(
        `Option removed. ${z} of ${le} options selected.`
      );
      Xe.current = z;
    }
    q !== ot.current && (Le(
      q ? `Dropdown opened. ${le} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), ot.current = q), re !== Zt.current && re !== void 0 && (re && q && Le(`Searching for "${re}"`), Zt.current = re);
  }, [L, q, re, Le, Be]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: fe }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Ie })
    ] }),
    /* @__PURE__ */ c.jsxs(
      om,
      {
        open: q,
        onOpenChange: J,
        modal: y,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: Sn, className: "sr-only", children: i }),
          /* @__PURE__ */ c.jsx("div", { id: Qt, className: "sr-only", "aria-live": "polite", children: L.length === 0 ? l : `${L.length} option${L.length === 1 ? "" : "s"} selected: ${L.map((z) => {
            var X;
            return (X = $t(z)) == null ? void 0 : X.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: A(P && "w-auto", k), children: [
            /* @__PURE__ */ c.jsx(jS, { asChild: !0, children: R || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ke,
                ...B,
                onClick: ce,
                disabled: _,
                className: A(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  P ? "w-auto" : "w-full",
                  !W && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  W && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  ht.compactMode && "min-h-8 text-sm",
                  Ue === "mobile" && "min-h-12"
                ),
                style: {
                  ...Rn,
                  maxWidth: `min(${Rn.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": q,
                "aria-haspopup": "listbox",
                "aria-controls": q ? dr : void 0,
                "aria-describedby": `${Sn} ${Qt}`,
                "aria-label": `Multi-select: ${L.length} of ${Be().length} options selected. ${s}`,
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
                            N === "inline" && "truncate",
                            _ ? "text-body-disabled" : q || N === "inline" && mr !== a ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: mr
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Zr,
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
            !(O || N === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              L.slice(0, ht.maxCount).map((z) => {
                const X = $t(z);
                return X ? /* @__PURE__ */ c.jsx("div", { children: Ae({
                  option: X,
                  location: "badge",
                  onRemove: () => Mn(z),
                  disabled: _
                }) }, z) : null;
              }).filter(Boolean),
              L.length > ht.maxCount && /* @__PURE__ */ c.jsxs(
                Da,
                {
                  className: A(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    Hi({ variant: r }),
                    ht.compactMode && "text-xs px-1.5 py-0.5",
                    I && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    _ && "cursor-not-allowed"
                  ),
                  ...!_ && { onRemove: be },
                  children: [
                    "+ ",
                    L.length - ht.maxCount,
                    " ",
                    g
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            js,
            {
              id: dr,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": f,
              className: A(
                "p-0 w-auto",
                Ue === "mobile" && "w-[85vw] max-w-[280px]",
                Ue === "tablet" && "max-w-md w-[70vw]",
                Ue === "desktop" && "min-w-[300px]",
                T
              ),
              style: {
                maxWidth: `min(${Rn.maxWidth}, 85vw)`,
                maxHeight: Ue === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(hm, { filter: To, children: [
                M && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${Tt}-search-help`, className: "sr-only", children: d }),
                  /* @__PURE__ */ c.jsx(
                    vm,
                    {
                      placeholder: w,
                      onKeyDown: fr,
                      value: re,
                      onValueChange: ue,
                      "aria-label": u,
                      "aria-describedby": `${Tt}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  gm,
                  {
                    className: A(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ue === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      /* @__PURE__ */ c.jsx(xm, { children: E }),
                      !C && !re && /* @__PURE__ */ c.jsx(Ir, { children: /* @__PURE__ */ c.jsxs(
                        Tr,
                        {
                          value: "select-all",
                          onSelect: se,
                          role: "option",
                          "aria-selected": L.length === Be().filter((z) => !z.disabled).length,
                          "aria-label": `Select all ${Be().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              Or,
                              {
                                className: "mr-xs",
                                checked: L.length === Be().filter((z) => !z.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              p,
                              Be().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                Be().length,
                                " ",
                                v
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      kn(e) ? e.map((z) => /* @__PURE__ */ c.jsx(Ir, { heading: z.heading, children: z.options.map((X) => {
                        const le = L.includes(X.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${X.value}:${X.label}`,
                            onSelect: () => Mn(X.value),
                            role: "option",
                            "aria-selected": le,
                            "aria-disabled": X.disabled ?? !1,
                            "aria-label": `${X.label}${le ? ", selected" : ", not selected"}${X.disabled ? ", disabled" : ""}`,
                            className: A(
                              "cursor-pointer",
                              X.disabled && `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!X.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Or, { className: "mr-xs", checked: le }),
                              Ae({
                                option: X,
                                location: "dropdown",
                                isSelected: le
                              })
                            ]
                          },
                          X.value
                        );
                      }) }, z.heading)) : /* @__PURE__ */ c.jsx(Ir, { children: e.map((z) => {
                        const X = L.includes(z.value);
                        return /* @__PURE__ */ c.jsxs(
                          Tr,
                          {
                            value: `${z.value}:${z.label}`,
                            onSelect: () => Mn(z.value),
                            role: "option",
                            "aria-selected": X,
                            "aria-disabled": z.disabled ?? !1,
                            "aria-label": `${z.label}${X ? ", selected" : ", not selected"}${z.disabled ? ", disabled" : ""}`,
                            className: A(
                              "cursor-pointer",
                              z.disabled && `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                            ),
                            disabled: !!z.disabled,
                            children: [
                              /* @__PURE__ */ c.jsx(Or, { className: "mr-xs", checked: X }),
                              Ae({
                                option: z,
                                location: "dropdown",
                                isSelected: X
                              })
                            ]
                          },
                          z.value
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
                          disabled: L.length === 0,
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
                            n(L), J(!1);
                          },
                          children: h
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
}, dk = S.forwardRef(
  lk
);
dk.displayName = "MultiSelect";
const uk = ae(
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
), fk = ae(
  `bg-surface-primary z-dropdown relative w-full
  max-w-[var(--radix-select-trigger-width)]
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
), mk = ae(
  `disabled:bg-surface-disabled disabled:text-interactive-disabled
  data-[disabled]:text-interactive-disabled flex cursor-pointer items-center
  border-0 ring-0 focus:outline-0 disabled:cursor-not-allowed
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
), Oa = ({
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
  ...u
}) => {
  const f = {
    ...u
  }, p = i !== void 0 ? String(i) : void 0, v = (x) => {
    const h = e.find(
      (g) => "value" in g && String(g.value) === x
    );
    return h && "value" in h ? h.value : x;
  };
  return p !== void 0 && (f.value = p), d && (f.onValueChange = (x) => {
    const h = v(x);
    d(h);
  }), /* @__PURE__ */ c.jsxs(db, { ...f, children: [
    /* @__PURE__ */ c.jsxs(
      ub,
      {
        className: A(
          uk({ variant: a, intent: s, invalid: o }),
          "group",
          n
        ),
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center", children: [
            je(r, {
              className: A("text-body-secondary mr-xxs h-3.5 w-3.5")
            }),
            /* @__PURE__ */ c.jsx(
              fb,
              {
                placeholder: t || "Select an option",
                className: A({
                  "text-sm": a === "compact"
                })
              }
            )
          ] }),
          !l && /* @__PURE__ */ c.jsx(
            mb,
            {
              className: A("text-body-primary h-3.5 w-3.5", {
                "text-body-disabled": u.disabled
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
    /* @__PURE__ */ c.jsx(pb, { children: /* @__PURE__ */ c.jsxs(
      hb,
      {
        position: "popper",
        sideOffset: -1,
        className: A(fk({ variant: a }), n),
        children: [
          /* @__PURE__ */ c.jsx(Cb, {}),
          /* @__PURE__ */ c.jsx(vb, { children: e.map((x, h) => {
            switch (x.type) {
              case "Group":
                return /* @__PURE__ */ c.jsx(gb, { children: /* @__PURE__ */ c.jsx(xb, { children: x.label }) }, h);
              case "Separator":
                return /* @__PURE__ */ c.jsx(
                  kb,
                  {
                    className: "border-divider-default h-px border-b"
                  },
                  h
                );
              default:
                return /* @__PURE__ */ c.jsxs(
                  bb,
                  {
                    value: String(x.value),
                    disabled: x.disabled ?? !1,
                    className: mk({
                      variant: a,
                      isSelected: i === x.value
                    }),
                    children: [
                      je(x.icon, {
                        className: A("h-5 w-5", {
                          "-ml-xxs": a === "default",
                          "mr-xxs": a === "compact",
                          "text-interactive-disabled": x.disabled
                        })
                      }),
                      /* @__PURE__ */ c.jsx(
                        yb,
                        {
                          className: A("flex-1 break-words whitespace-normal", {
                            "text-interactive-disabled": x.disabled
                          }),
                          children: x.label
                        }
                      ),
                      /* @__PURE__ */ c.jsx(wb, {})
                    ]
                  },
                  h
                );
            }
          }) }),
          /* @__PURE__ */ c.jsx(Sb, {}),
          /* @__PURE__ */ c.jsx(Nb, {})
        ]
      }
    ) })
  ] });
};
Oa.displayName = "Select";
const pk = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Yi = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), hk = S.forwardRef(
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
    formatPageOption: d = (h, g, w) => `${h} / ${g}（全${w}件）`,
    showNavigation: u = !0,
    size: f,
    className: p,
    ...v
  }, x) => {
    const h = () => {
      e > 1 && r(e - 1);
    }, g = () => {
      e < t && r(e + 1);
    }, w = (M) => {
      const E = parseInt(M, 10);
      s(E), e > 1 && r(1);
    }, b = (M) => {
      const E = parseInt(M, 10);
      r(E);
    }, y = a.map((M) => ({
      value: M.toString(),
      label: M.toString()
    })), k = Math.max(t, 1), C = Array.from(
      { length: k },
      (M, E) => E + 1
    ).map((M) => ({
      value: M.toString(),
      label: d(M, k, n)
    }));
    return /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: x,
        className: A(pk({ size: f }), p),
        ...v,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Yi()), children: i }),
            /* @__PURE__ */ c.jsx(
              Oa,
              {
                value: o.toString(),
                onValueChange: w,
                options: y
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(Yi()), children: l }),
            /* @__PURE__ */ c.jsx(
              Oa,
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
              Ne,
              {
                intent: "text",
                size: "sm",
                icon: zm,
                onClick: h,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ne,
              {
                intent: "text",
                size: "sm",
                icon: qi,
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
hk.displayName = "Pagination";
const vk = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), gk = ae(
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
), xk = ae(
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
), bN = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(vk({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      z0,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: A(
          gk({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(H0, { className: A(xk({ invalid: a })) })
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
}, yN = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  B0,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), bk = ae(
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
), yk = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", wk = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, Ck = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, Sk = ae(
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
), kk = "gap-xs text-sm text-body-inverse flex-row", Nk = ae(
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
), Ek = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, Mk = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", Pk = S.forwardRef(
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
  }, v) => {
    const x = i || t === "disabled", [h, g] = S.useState(
      f ?? []
    ), [w, b] = S.useState(!1);
    let y;
    typeof t == "string" ? y = t : x ? y = "disabled" : h.length > 0 ? y = "filled" : y = "default";
    const k = S.useRef(y), { compositionHandlers: C, guardKeyHandler: M } = _o();
    Vt(() => {
      k.current === "filled" && y !== "filled" && g([]), k.current = y;
    }, [y]);
    const E = (T) => {
      x || o && o(T);
    }, P = (T) => {
      if (!x) {
        if (T.key === "Enter" && n.trim()) {
          const _ = [...h, n.trim()];
          if (g(_), o) {
            const W = {
              ...T,
              target: { value: "" }
            };
            o(W);
          }
          u && a && a(_), T.preventDefault();
        }
        if ((T.key === "Backspace" || T.key === "Delete") && !n && h.length > 0) {
          const _ = h.slice(0, -1);
          g(_), u && a && a(_), T.preventDefault();
        }
      }
    }, I = (T) => {
      if (x) return;
      const _ = h.filter((W, Y) => Y !== T);
      g(_), u && a && a(_);
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
                bk({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: A(yk), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: A(Mk, wk), children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ c.jsx(Qi, { size: 20 })
                      }
                    ),
                    h.map((T, _) => /* @__PURE__ */ c.jsxs("span", { className: Nk({ size: e }), children: [
                      /* @__PURE__ */ c.jsx("span", { children: T }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            Ek,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (W) => {
                            W.stopPropagation(), W.preventDefault(), I(_);
                          },
                          onMouseDown: (W) => {
                            W.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: x,
                          children: /* @__PURE__ */ c.jsx(sa, { size: 8 })
                        }
                      )
                    ] }, _)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: v,
                        className: A(Ck),
                        type: "text",
                        value: n,
                        onChange: E,
                        onKeyDown: M(P),
                        onCompositionStart: C.onCompositionStart,
                        onCompositionEnd: C.onCompositionEnd,
                        onFocus: (T) => {
                          var _;
                          b(!0), (_ = p.onFocus) == null || _.call(p, T);
                        },
                        onBlur: (T) => {
                          var _;
                          b(!1), (_ = p.onBlur) == null || _.call(p, T);
                        },
                        placeholder: y === "filled" || h.length > 0 ? "" : s,
                        disabled: x,
                        ...p
                      }
                    )
                  ] }),
                  (n || h.length > 0) && !x && /* @__PURE__ */ c.jsx(
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
                      children: /* @__PURE__ */ c.jsx(sa, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      Sk({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let T = h;
                      n.trim() && (T = [...h, n.trim()], g(T), o && o({
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
                kk,
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
Pk.displayName = "SearchBar";
const bm = Xr(void 0), ym = Xr(!1), Rk = ({
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
  return /* @__PURE__ */ c.jsx(bm.Provider, { value: a, children: t });
}, Ak = ({
  children: e
}) => /* @__PURE__ */ c.jsx(ym.Provider, { value: !0, children: e }), lr = () => {
  const e = $r(bm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = $r(ym);
  return { ...e, isInFooter: t };
}, wm = S.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: a, toggleCollapsed: s } = lr(), i = a ? n : t, l = /* @__PURE__ */ c.jsx(
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
      children: a ? /* @__PURE__ */ c.jsx(ep, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(Qm, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ c.jsx(yt, { content: i, side: "right", delayDuration: 0, children: l }) : l;
});
wm.displayName = "SideNavigationCollapseButton";
const Dk = ae(
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
), jk = S.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(Rk, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(Cm, { ref: n, ...t }) }));
jk.displayName = "SideNavigation";
const Cm = S.forwardRef(
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
    const { isCollapsed: u } = lr();
    S.useEffect(() => {
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
          Dk({ width: f }),
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
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(Ak, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(
            wm,
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
Cm.displayName = "SideNavigationContent";
const _k = ae(
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
), Ok = S.forwardRef(
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
    const { isCollapsed: u, isInFooter: f } = lr(), p = r ? Qr : "button", v = i ? "disabled" : t, x = /* @__PURE__ */ c.jsx(
      p,
      {
        ref: d,
        className: A(
          _k({
            variant: v,
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
    return u && a ? /* @__PURE__ */ c.jsx(yt, { content: a, side: "right", delayDuration: 0, children: x }) : x;
  }
);
Ok.displayName = "SideNavigationItem";
const Ik = ae("flex flex-col", {
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
}), Tk = S.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = lr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: A(
        Ik({ isCollapsed: s, isLast: r }),
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
Tk.displayName = "SideNavigationSection";
const $k = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Fk = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", wN = () => {
  const { isCollapsed: e } = lr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: $k,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Fk,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, Lk = ae(
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
), Wk = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), CN = ({
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
        Lk({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: Wk({ indicator: s }) }),
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
}, Vk = S.forwardRef(
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
      Sm,
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
                    Ui,
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
), Sm = S.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const a = t.length, s = n !== void 0 ? n : t.findIndex((v) => v.status === "active"), i = Math.max(
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
Sm.displayName = "RadialStepper";
Vk.displayName = "Stepper";
const Bk = m.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    Ab,
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
        inline-flex shrink-0 cursor-pointer items-center rounded-full
        transition-all outline-none focus-visible:ring-[3px]
        focus-visible:ring-[var(--token-color-background-interactive-neutral-active)]
        disabled:cursor-not-allowed`,
        e
      ),
      ...r,
      children: /* @__PURE__ */ c.jsx(
        Db,
        {
          "data-slot": "switch-thumb",
          className: A(
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
Bk.displayName = "Switch";
const Ia = {
  loading: !1,
  loadingText: "ローディング中…"
}, km = S.createContext(
  Ia
), Nm = () => S.useContext(km), zk = S.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Ia.loading,
    loadingText: r = Ia.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx(km.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
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
zk.displayName = "Table";
const Hk = S.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Nm(), s = t ?? a;
    return /* @__PURE__ */ c.jsxs(
      "thead",
      {
        ref: o,
        className: A("text-sm bg-surface-tertiary top-0 sticky", e),
        ...r,
        children: [
          n,
          s && /* @__PURE__ */ c.jsx("tr", { children: /* @__PURE__ */ c.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ c.jsx(
            Rs.Linear,
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
Hk.displayName = "TableHeader";
const Em = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ c.jsx(
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
Em.displayName = "TableCoverMessage";
const Yk = S.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Nm(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx(Em, { className: "text-body-secondary", children: d }) : r });
  }
);
Yk.displayName = "TableBody";
const Gk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
Gk.displayName = "TableFooter";
const Kk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
Kk.displayName = "TableRow";
const Uk = S.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
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
Uk.displayName = "TableHead";
const qk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
qk.displayName = "TableCell";
const Xk = S.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
Xk.displayName = "TableCaption";
const SN = S.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), Zk = S.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
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
Zk.displayName = "TableRowOverlay";
const Qk = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), Jk = ae(
  `text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 relative inline-flex cursor-pointer items-center
  justify-center border-b leading-[100%] tracking-[0] whitespace-nowrap
  transition-colors after:absolute after:bottom-[-1px] after:w-full
  after:transition-all after:content-[''] hover:after:h-[2px]
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
), eN = ae(
  `text-body-primary border-divider-default relative inline-flex cursor-pointer
  items-center justify-center border-b leading-[100%] tracking-[0]
  whitespace-nowrap transition-colors hover:text-[var(--chemican-green-800)]`,
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
function tN() {
  const [e, t] = S.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return S.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function nN(e) {
  const t = [];
  return S.Children.forEach(e, (n) => {
    S.isValidElement(n) && n.type === Mm && t.push(n);
  }), t;
}
const rN = S.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, a) => {
  const s = t ?? "normal", i = tN(), l = S.useRef(null), d = S.useRef(null), u = S.useRef(/* @__PURE__ */ new Map()), f = S.useRef(/* @__PURE__ */ new Map()), p = S.useMemo(() => nN(n), [n]), [v, x] = S.useState(p.length), [h, g] = S.useState(!1), w = S.useCallback(() => {
    if (!i) {
      x(p.length), g(!0);
      return;
    }
    const E = l.current;
    if (!E) return;
    u.current.forEach(($, G) => {
      const V = $.offsetWidth;
      V > 0 && f.current.set(G, V);
    });
    const P = E.clientWidth, I = d.current, T = I ? I.offsetWidth + 8 : 80;
    let _ = 0;
    for (const $ of p)
      _ += f.current.get($.props.value) ?? 0;
    if (_ <= P) {
      x(p.length), g(!0);
      return;
    }
    let W = 0, Y = 0;
    for (const $ of p) {
      const G = f.current.get($.props.value) ?? 0;
      if (W + G + T <= P)
        W += G, Y++;
      else
        break;
    }
    x(Math.max(Y, 1)), g(!0);
  }, [p, i]);
  S.useEffect(() => {
    const E = l.current;
    if (!E) return;
    const P = new ResizeObserver(() => {
      w();
    });
    return P.observe(E), w(), () => P.disconnect();
  }, [w]);
  const b = p.slice(v), y = b.length > 0, k = o.value ?? o.defaultValue, C = b.some(
    (E) => E.props.value === k
  ), M = r ?? ((E) => `${E} more`);
  return /* @__PURE__ */ c.jsx(Ib, { ref: a, className: A("w-full", e), ...o, children: /* @__PURE__ */ c.jsxs(
    Tb,
    {
      ref: l,
      className: A(
        Qk({ size: s }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        p.map(
          (E, P) => S.cloneElement(E, {
            key: E.props.value,
            size: s,
            ref: (I) => {
              I ? u.current.set(E.props.value, I) : u.current.delete(E.props.value);
            },
            className: A(
              E.props.className,
              h && P >= v && "hidden"
            )
          })
        ),
        y && h && /* @__PURE__ */ c.jsx("div", { ref: d, className: "inline-flex shrink-0", children: /* @__PURE__ */ c.jsxs(Ms, { children: [
          /* @__PURE__ */ c.jsx(Ps, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              className: A(
                eN({ size: s }),
                C && "font-bold text-[var(--chemican-green-800)]"
              ),
              children: [
                /* @__PURE__ */ c.jsx(
                  Xm,
                  {
                    size: s === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                M(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ c.jsx(Es, { align: "end", size: "sm", children: b.map((E) => {
            const { value: P, disabled: I, asChild: T, children: _ } = E.props, W = A(
              P === k && "font-bold text-[var(--chemican-green-800)]"
            );
            return T && S.isValidElement(_) ? /* @__PURE__ */ c.jsx(
              Pa,
              {
                disabled: I ?? !1,
                asChild: !0,
                className: W,
                children: _
              },
              P
            ) : /* @__PURE__ */ c.jsx(
              Pa,
              {
                disabled: I ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(P);
                },
                className: W,
                children: _
              },
              P
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
rN.displayName = "TabBar";
const Mm = S.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ c.jsx(
    $b,
    {
      ref: r,
      className: A(Jk({ size: o }), e),
      ...n
    }
  );
});
Mm.displayName = "Tab";
const oN = ae(
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
), aN = S.forwardRef(
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
    } = o, [v, x] = Te(o.value);
    Vt(() => {
      x(o.value);
    }, [o.value]);
    const { compositionHandlers: h, guardKeyHandler: g } = _o(), w = (k) => {
      h.onCompositionStart(k), l == null || l(k);
    }, b = (k) => {
      h.onCompositionEnd(k), d == null || d(k);
    }, y = (k) => {
      if (n && k.target.value.length > n) {
        k.preventDefault();
        return;
      }
      x(k.target.value), u && u(k);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          ref: a,
          className: A(oN({ invalid: e }), t),
          ...p,
          value: v,
          onChange: y,
          onKeyDown: g(s),
          onKeyUp: g(i),
          onCompositionStart: w,
          onCompositionEnd: b
        }
      ),
      !!(n && r) && /* @__PURE__ */ c.jsxs("div", { className: "text-body-secondary text-sm text-right", children: [
        (v == null ? void 0 : v.toString().length) || 0,
        "/",
        n
      ] })
    ] });
  }
);
aN.displayName = "TextArea";
const kN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  ry,
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
            ec,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Ls,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Ls,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Ar, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            oy,
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
          /* @__PURE__ */ c.jsx(ay, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(sy, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(sa, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), NN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(ty, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    ny,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), Gi = ae(
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
), sN = S.forwardRef(
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
    dragDropText: v = "ここにドラッグ&ドロップ",
    orText: x = "または",
    selectFileText: h = "ファイルを選択",
    dropFilesText: g = "ここにファイルをドロップ",
    uploadingText: w = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: y = "アップロードに失敗しました",
    ...k
  }, C) => {
    const [M, E] = Te(!1), P = bt(null), I = he(
      (N) => {
        N.preventDefault(), N.stopPropagation(), M || E(!0);
      },
      [M]
    ), T = he((N) => {
      N.preventDefault(), N.stopPropagation(), E(!1);
    }, []), _ = he((N) => {
      N.preventDefault(), N.stopPropagation();
    }, []), W = he(
      (N) => {
        if (N.preventDefault(), N.stopPropagation(), E(!1), s) return;
        const O = N.dataTransfer.files;
        O && O.length > 0 && (r == null || r(O));
      },
      [s, r]
    ), Y = he(() => {
      var N;
      s || (N = P.current) == null || N.click();
    }, [s]), $ = he(
      (N) => {
        const O = N.target.files;
        O && O.length > 0 && (r == null || r(O));
      },
      [r]
    ), G = M ? "dragging" : n, V = () => /* @__PURE__ */ c.jsx(
      Um,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), U = () => /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary", children: v }),
        /* @__PURE__ */ c.jsx("p", { className: "text-body-secondary text-sm", children: x })
      ] }),
      /* @__PURE__ */ c.jsx(
        Ne,
        {
          size: "xs",
          intent: "tertiary",
          icon: Ws,
          onClick: (N) => {
            N.stopPropagation(), Y();
          },
          children: h
        }
      )
    ] }), j = () => /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
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
          icon: Ws,
          onClick: (N) => {
            N.stopPropagation(), Y();
          },
          children: h
        }
      )
    ] }), F = () => /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: A(Gi({ size: t, state: "default", disabled: s })),
        onDragEnter: I,
        onDragLeave: T,
        onDragOver: _,
        onDrop: W,
        onClick: Y,
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
              onChange: $,
              disabled: s
            }
          ),
          t === "small" ? U() : j()
        ]
      }
    ), ne = () => {
      const N = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return G === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || N }),
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
          Rs.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : G === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || N }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (O) => {
                O.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(lp, { size: 24, className: "text-shape-primary" })
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
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: f || b })
        ] })
      ] }) : G === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || N }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx($m, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: u || y })
        ] })
      ] }) : null;
    }, R = () => t === "small" ? U() : j();
    return G === "inProgress" && i !== void 0 || G === "success" || G === "error" ? /* @__PURE__ */ c.jsxs("div", { ref: C, className: A(e), ...k, children: [
      F(),
      ne()
    ] }) : /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: C,
        className: A(
          Gi({ size: t, state: G, disabled: s }),
          e
        ),
        onDragEnter: I,
        onDragLeave: T,
        onDragOver: _,
        onDrop: W,
        onClick: Y,
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
              onChange: $,
              disabled: s
            }
          ),
          R()
        ]
      }
    );
  }
);
sN.displayName = "FileUploader";
export {
  fN as Accordion,
  uN as AccountMenu,
  am as AutoSuggest,
  fw as Badge,
  hw as Breadcrumbs,
  Ne as Button,
  Vf as Calendar,
  rS as Callout,
  Or as Checkbox,
  sS as CheckboxGroup,
  cS as ChoiceChip,
  lS as ChoiceChipGroup,
  pN as DataSheet,
  em as DataSheetAction,
  zf as DataSheetHeader,
  Yf as DataSheetKeyValue,
  Hf as DataSheetSection,
  qf as DataSheetTable,
  Jf as DataSheetTableActionsCell,
  Zf as DataSheetTableBody,
  qr as DataSheetTableCell,
  Xf as DataSheetTableHeader,
  Qf as DataSheetTableRow,
  NS as DatePicker,
  hN as Dialog,
  Ms as Dropdown,
  Es as DropdownContent,
  Pa as DropdownItem,
  uw as DropdownLabel,
  dw as DropdownSeparator,
  Ps as DropdownTrigger,
  sN as FileUploader,
  Ak as FooterProvider,
  gN as FormField,
  wN as Logo,
  dk as MultiSelect,
  vN as MultiStepDialog,
  hk as Pagination,
  Rs as ProgressIndicator,
  bN as RadioButton,
  yN as RadioButtonGroup,
  Pk as SearchBar,
  Oa as Select,
  jk as SideNavigation,
  wm as SideNavigationCollapseButton,
  Ok as SideNavigationItem,
  Rk as SideNavigationProvider,
  Tk as SideNavigationSection,
  CN as StatusIndicator,
  Vk as Stepper,
  Bk as Switch,
  Mm as Tab,
  rN as TabBar,
  zk as Table,
  Yk as TableBody,
  Xk as TableCaption,
  qk as TableCell,
  Em as TableCoverMessage,
  Gk as TableFooter,
  Uk as TableHead,
  SN as TableHeadSortButton,
  Hk as TableHeader,
  Kk as TableRow,
  Zk as TableRowOverlay,
  Da as Tag,
  sm as TagInput,
  aN as TextArea,
  xN as TextField,
  Aa as TextLink,
  kN as ToastItem,
  NN as ToastProvider,
  yt as Tooltip,
  mN as TooltipProvider,
  TS as colorCodeToTokenMap,
  Ln as iconVariants,
  CS as inputVariants,
  tm as inputWrapperVariants,
  lr as useSideNavigation
};
