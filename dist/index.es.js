import * as m from "react";
import k, { forwardRef as Bm, createElement as Xo, useState as Ve, useLayoutEffect as rc, createContext as no, useContext as zr, useCallback as ge, useRef as yt, useEffect as Ht, useMemo as Ir } from "react";
import * as Yn from "react-dom";
import zm from "react-dom";
var br = { exports: {} }, An = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ks;
function Hm() {
  if (Ks) return An;
  Ks = 1;
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
var Us;
function Gm() {
  return Us || (Us = 1, process.env.NODE_ENV !== "production" && (function() {
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
        case I:
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
            var M = R.render;
            return R = R.displayName, R || (R = M.displayName || M.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case E:
            return M = R.displayName || null, M !== null ? M : e(R.type) || "Memo";
          case O:
            M = R._payload, R = R._init;
            try {
              return e(R(M));
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
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var _ = M.error, B = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return _.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(R);
      }
    }
    function r(R) {
      if (R === g) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === O)
        return "<...>";
      try {
        var M = e(R);
        return M ? "<" + M + ">" : "<...>";
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
        var M = Object.getOwnPropertyDescriptor(R, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, M) {
      function _() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: _,
        configurable: !0
      });
    }
    function l() {
      var R = e(this.type);
      return U[R] || (U[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function d(R, M, _, B, K, G) {
      var D = _.ref;
      return R = {
        $$typeof: x,
        type: R,
        key: M,
        props: _,
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
        value: G
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function u(R, M, _, B, K, G) {
      var D = M.children;
      if (D !== void 0)
        if (B)
          if (T(D)) {
            for (B = 0; B < D.length; B++)
              f(D[B]);
            Object.freeze && Object.freeze(D);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(D);
      if (H.call(M, "key")) {
        D = e(R);
        var Z = Object.keys(M).filter(function(se) {
          return se !== "key";
        });
        B = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", Q[D + B] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          D,
          Z,
          D
        ), Q[D + B] = !0);
      }
      if (D = null, _ !== void 0 && (n(_), D = "" + _), s(M) && (n(M.key), D = "" + M.key), "key" in M) {
        _ = {};
        for (var J in M)
          J !== "key" && (_[J] = M[J]);
      } else _ = M;
      return D && i(
        _,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), d(
        R,
        D,
        _,
        o(),
        K,
        G
      );
    }
    function f(R) {
      p(R) ? R._store && (R._store.validated = 1) : typeof R == "object" && R !== null && R.$$typeof === O && (R._payload.status === "fulfilled" ? p(R._payload.value) && R._payload.value._store && (R._payload.value._store.validated = 1) : R._store && (R._store.validated = 1));
    }
    function p(R) {
      return typeof R == "object" && R !== null && R.$$typeof === x;
    }
    var h = k, x = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), N = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), L = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, T = Array.isArray, W = console.createTask ? console.createTask : function() {
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
    )(), $ = W(r(a)), Q = {};
    Dn.Fragment = g, Dn.jsx = function(R, M, _) {
      var B = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        R,
        M,
        _,
        !1,
        B ? Error("react-stack-top-frame") : j,
        B ? W(r(R)) : $
      );
    }, Dn.jsxs = function(R, M, _) {
      var B = 1e4 > L.recentlyCreatedOwnerStacks++;
      return u(
        R,
        M,
        _,
        !0,
        B ? Error("react-stack-top-frame") : j,
        B ? W(r(R)) : $
      );
    };
  })()), Dn;
}
var qs;
function Ym() {
  return qs || (qs = 1, process.env.NODE_ENV === "production" ? br.exports = Hm() : br.exports = Gm()), br.exports;
}
var c = Ym();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Km = {
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
  const o = Bm(
    ({ color: a = "currentColor", size: s = 24, stroke: i = 2, title: l, className: d, children: u, ...f }, p) => Xo(
      "svg",
      {
        ref: p,
        ...Km[e],
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
        l && Xo("title", { key: "svg-title" }, l),
        ...r.map(([h, x]) => Xo(h, x)),
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
const Um = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], qm = Ce("outline", "alert-circle", "AlertCircle", Um);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xm = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], Zm = Ce("outline", "calendar-event", "CalendarEvent", Xm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qm = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], oc = Ce("outline", "check", "Check", Qm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ro = Ce("outline", "chevron-down", "ChevronDown", Jm);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], tp = Ce("outline", "chevron-left", "ChevronLeft", ep);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], ac = Ce("outline", "chevron-right", "ChevronRight", np);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], op = Ce("outline", "circle-check", "CircleCheck", rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], sp = Ce("outline", "cloud-up", "CloudUp", ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], cp = Ce("outline", "dots-vertical", "DotsVertical", ip);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], dp = Ce("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", lp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], fp = Ce("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", up);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], pp = Ce("outline", "loader", "Loader", mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [["path", { d: "M5 12l14 0", key: "svg-0" }]], vp = Ce("outline", "minus", "Minus", hp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], sc = Ce("outline", "pencil", "Pencil", gp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], ic = Ce("outline", "restore", "Restore", xp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Ua = Ce("outline", "search", "Search", bp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], wp = Ce("outline", "trash-x", "TrashX", yp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], cc = Ce("outline", "trash", "Trash", Cp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], kp = Ce("outline", "user", "User", Sp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], xa = Ce("outline", "x", "X", Np);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Ep = Ce("filled", "alert-circle-filled", "AlertCircleFilled", Mp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], lc = Ce("filled", "circle-check-filled", "CircleCheckFilled", Pp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Xs = Ce("filled", "exclamation-circle-filled", "ExclamationCircleFilled", Rp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], Zs = Ce("filled", "folder-filled", "FolderFilled", Ap);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Tr = Ce("filled", "info-circle-filled", "InfoCircleFilled", Dp);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], Op = Ce("filled", "lock-filled", "LockFilled", jp);
function Qs(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ct(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Qs(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Qs(e[o], null);
        }
      };
  };
}
function de(...e) {
  return m.useCallback(Ct(...e), e);
}
// @__NO_SIDE_EFFECTS__
function At(e) {
  const t = /* @__PURE__ */ _p(e), n = m.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = m.Children.toArray(a), l = i.find(Tp);
    if (l) {
      const d = l.props.children, u = i.map((f) => f === l ? m.Children.count(d) > 1 ? m.Children.only(null) : m.isValidElement(d) ? d.props.children : null : f);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: m.isValidElement(d) ? m.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var vn = /* @__PURE__ */ At("Slot");
// @__NO_SIDE_EFFECTS__
function _p(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (m.isValidElement(o)) {
      const s = Fp(o), i = $p(a, o.props);
      return o.type !== m.Fragment && (i.ref = r ? Ct(r, s) : s), m.cloneElement(o, i);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var dc = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function uc(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = dc, t;
}
var Ip = /* @__PURE__ */ uc("Slottable");
function Tp(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === dc;
}
function $p(e, t) {
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
function Fp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Lp = [
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
], X = Lp.reduce((e, t) => {
  const n = /* @__PURE__ */ At(`Primitive.${t}`), r = m.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function qa(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
var fc = Object.freeze({
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
}), Wp = "VisuallyHidden", oo = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    X.span,
    {
      ...e,
      ref: t,
      style: { ...fc, ...e.style }
    }
  )
);
oo.displayName = Wp;
var Vp = oo;
function Bp(e, t) {
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
function Te(e, t = []) {
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
  return o.scopeName = e, [r, zp(o, ...t)];
}
function zp(...e) {
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
  const t = e + "CollectionProvider", [n, r] = Te(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (v) => {
    const { scope: g, children: w } = v, b = k.useRef(null), y = k.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: g, itemMap: y, collectionRef: b, children: w });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ At(i), d = k.forwardRef(
    (v, g) => {
      const { scope: w, children: b } = v, y = a(i, w), N = de(g, y.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: N, children: b });
    }
  );
  d.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", p = /* @__PURE__ */ At(u), h = k.forwardRef(
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
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Ie = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, Hp = m[" useInsertionEffect ".trim().toString()] || Ie;
function Be({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Gp({
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
        const p = Yp(u) ? u(e) : u;
        p !== e && ((f = s.current) == null || f.call(s, p));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [l, d];
}
function Gp({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), a = m.useRef(t);
  return Hp(() => {
    a.current = t;
  }, [t]), m.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Yp(e) {
  return typeof e == "function";
}
function Kp(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var $e = (e) => {
  const { present: t, children: n } = e, r = Up(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), a = de(r.ref, qp(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: a }) : null;
};
$e.displayName = "Presence";
function Up(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), a = m.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Kp(s, {
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
    const d = yr(r.current);
    a.current = i === "mounted" ? d : "none";
  }, [i]), Ie(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const p = a.current, h = yr(d);
      e ? l("MOUNT") : h === "none" || (d == null ? void 0 : d.display) === "none" ? l("UNMOUNT") : l(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ie(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = yr(r.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (l("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, p = (h) => {
        h.target === t && (a.current = yr(r.current));
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
function yr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function qp(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Xp = m[" useId ".trim().toString()] || (() => {
}), Zp = 0;
function Ee(e) {
  const [t, n] = m.useState(Xp());
  return Ie(() => {
    n((r) => r ?? String(Zp++));
  }, [e]), t ? `radix-${t}` : "";
}
var ao = "Collapsible", [Qp, mc] = Te(ao), [Jp, Xa] = Qp(ao), pc = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [l, d] = Be({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: ao
    });
    return /* @__PURE__ */ c.jsx(
      Jp,
      {
        scope: n,
        disabled: a,
        contentId: Ee(),
        open: l,
        onOpenToggle: m.useCallback(() => d((u) => !u), [d]),
        children: /* @__PURE__ */ c.jsx(
          X.div,
          {
            "data-state": Qa(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
pc.displayName = ao;
var hc = "CollapsibleTrigger", vc = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Xa(hc, n);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Qa(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
vc.displayName = hc;
var Za = "CollapsibleContent", gc = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Xa(Za, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx($e, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(eh, { ...r, ref: t, present: a }) });
  }
);
gc.displayName = Za;
var eh = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = Xa(Za, n), [i, l] = m.useState(r), d = m.useRef(null), u = de(t, d), f = m.useRef(0), p = f.current, h = m.useRef(0), x = h.current, v = s.open || i, g = m.useRef(v), w = m.useRef(void 0);
  return m.useEffect(() => {
    const b = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Ie(() => {
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
      "data-state": Qa(s.open),
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
function Qa(e) {
  return e ? "open" : "closed";
}
var th = pc, nh = vc, rh = gc, oh = m.createContext(void 0);
function gn(e) {
  const t = m.useContext(oh);
  return e || t || "ltr";
}
var rt = "Accordion", ah = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Ja, sh, ih] = Kn(rt), [so] = Te(rt, [
  ih,
  mc
]), es = mc(), xc = k.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(Ja.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(uh, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(dh, { ...o, ref: t }) });
  }
);
xc.displayName = rt;
var [bc, ch] = so(rt), [yc, lh] = so(
  rt,
  { collapsible: !1 }
), dh = k.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, l] = Be({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: rt
    });
    return /* @__PURE__ */ c.jsx(
      bc,
      {
        scope: e.__scopeAccordion,
        value: k.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: k.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(yc, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(wc, { ...s, ref: t }) })
      }
    );
  }
), uh = k.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Be({
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
    bc,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: d,
      children: /* @__PURE__ */ c.jsx(yc, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(wc, { ...a, ref: t }) })
    }
  );
}), [fh, io] = so(rt), wc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = k.useRef(null), l = de(i, t), d = sh(n), f = gn(o) === "ltr", p = z(e.onKeyDown, (h) => {
      var E;
      if (!ah.includes(h.key)) return;
      const x = h.target, v = d().filter((O) => {
        var I;
        return !((I = O.ref.current) != null && I.disabled);
      }), g = v.findIndex((O) => O.ref.current === x), w = v.length;
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
      (E = v[S].ref.current) == null || E.focus();
    });
    return /* @__PURE__ */ c.jsx(
      fh,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(Ja.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
), Hr = "AccordionItem", [mh, ts] = so(Hr), Cc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = io(Hr, n), s = ch(Hr, n), i = es(n), l = Ee(), d = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      mh,
      {
        scope: n,
        open: d,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          th,
          {
            "data-orientation": a.orientation,
            "data-state": Pc(d),
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
Cc.displayName = Hr;
var Sc = "AccordionHeader", kc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = io(rt, n), a = ts(Sc, n);
    return /* @__PURE__ */ c.jsx(
      X.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Pc(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
kc.displayName = Sc;
var ba = "AccordionTrigger", Nc = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = io(rt, n), a = ts(ba, n), s = lh(ba, n), i = es(n);
    return /* @__PURE__ */ c.jsx(Ja.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      nh,
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
Nc.displayName = ba;
var Mc = "AccordionContent", Ec = k.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = io(rt, n), a = ts(Mc, n), s = es(n);
    return /* @__PURE__ */ c.jsx(
      rh,
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
Ec.displayName = Mc;
function Pc(e) {
  return e ? "open" : "closed";
}
var Js = xc, ph = Cc, hh = kc, vh = Nc, gh = Ec;
function He(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function xh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bh = "DismissableLayer", ya = "dismissableLayer.update", yh = "dismissableLayer.pointerDownOutside", wh = "dismissableLayer.focusOutside", ei, Rc = m.createContext({
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
    } = e, d = m.useContext(Rc), [u, f] = m.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = m.useState({}), x = de(t, (S) => f(S)), v = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = v.indexOf(g), b = u ? v.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, N = b >= w, C = Sh((S) => {
      const E = S.target, O = [...d.branches].some((I) => I.contains(E));
      !N || O || (o == null || o(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p), P = kh((S) => {
      const E = S.target;
      [...d.branches].some((I) => I.contains(E)) || (a == null || a(S), s == null || s(S), S.defaultPrevented || i == null || i());
    }, p);
    return xh((S) => {
      b === d.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
    }, p), m.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (ei = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), ti(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = ei);
        };
    }, [u, p, n, d]), m.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), ti());
    }, [u, d]), m.useEffect(() => {
      const S = () => h({});
      return document.addEventListener(ya, S), () => document.removeEventListener(ya, S);
    }, []), /* @__PURE__ */ c.jsx(
      X.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: y ? N ? "auto" : "none" : void 0,
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
Xt.displayName = bh;
var Ch = "DismissableLayerBranch", Ac = m.forwardRef((e, t) => {
  const n = m.useContext(Rc), r = m.useRef(null), o = de(t, r);
  return m.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(X.div, { ...e, ref: o });
});
Ac.displayName = Ch;
function Sh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Dc(
            yh,
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
function kh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = He(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Dc(wh, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ti() {
  const e = new CustomEvent(ya);
  document.dispatchEvent(e);
}
function Dc(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? qa(o, a) : o.dispatchEvent(a);
}
var Nh = Xt, Mh = Ac, Zo = "focusScope.autoFocusOnMount", Qo = "focusScope.autoFocusOnUnmount", ni = { bubbles: !1, cancelable: !0 }, Eh = "FocusScope", Un = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = m.useState(null), d = He(o), u = He(a), f = m.useRef(null), p = de(t, (v) => l(v)), h = m.useRef({
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
        i.contains(N) ? f.current = N : Pt(f.current, { select: !0 });
      }, g = function(y) {
        if (h.paused || !i) return;
        const N = y.relatedTarget;
        N !== null && (i.contains(N) || Pt(f.current, { select: !0 }));
      }, w = function(y) {
        if (document.activeElement === document.body)
          for (const C of y)
            C.removedNodes.length > 0 && Pt(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", g);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [r, i, h.paused]), m.useEffect(() => {
    if (i) {
      oi.add(h);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const w = new CustomEvent(Zo, ni);
        i.addEventListener(Zo, d), i.dispatchEvent(w), w.defaultPrevented || (Ph(Oh(jc(i)), { select: !0 }), document.activeElement === v && Pt(i));
      }
      return () => {
        i.removeEventListener(Zo, d), setTimeout(() => {
          const w = new CustomEvent(Qo, ni);
          i.addEventListener(Qo, u), i.dispatchEvent(w), w.defaultPrevented || Pt(v ?? document.body, { select: !0 }), i.removeEventListener(Qo, u), oi.remove(h);
        }, 0);
      };
    }
  }, [i, d, u, h]);
  const x = m.useCallback(
    (v) => {
      if (!n && !r || h.paused) return;
      const g = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, w = document.activeElement;
      if (g && w) {
        const b = v.currentTarget, [y, N] = Rh(b);
        y && N ? !v.shiftKey && w === N ? (v.preventDefault(), n && Pt(y, { select: !0 })) : v.shiftKey && w === y && (v.preventDefault(), n && Pt(N, { select: !0 })) : w === b && v.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ c.jsx(X.div, { tabIndex: -1, ...s, ref: p, onKeyDown: x });
});
Un.displayName = Eh;
function Ph(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Pt(r, { select: t }), document.activeElement !== n) return;
}
function Rh(e) {
  const t = jc(e), n = ri(t, e), r = ri(t.reverse(), e);
  return [n, r];
}
function jc(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ri(e, t) {
  for (const n of e)
    if (!Ah(n, { upTo: t })) return n;
}
function Ah(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Dh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Dh(e) && t && e.select();
  }
}
var oi = jh();
function jh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ai(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ai(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ai(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Oh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var _h = "Portal", Zt = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = m.useState(!1);
  Ie(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? zm.createPortal(/* @__PURE__ */ c.jsx(X.div, { ...r, ref: t }), s) : null;
});
Zt.displayName = _h;
var Jo = 0;
function co() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? si()), document.body.insertAdjacentElement("beforeend", e[1] ?? si()), Jo++, () => {
      Jo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Jo--;
    };
  }, []);
}
function si() {
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
function Oc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ih(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var $r = "right-scroll-bar-position", Fr = "width-before-scroll-bar", Th = "with-scroll-bars-hidden", $h = "--removed-body-scroll-bar-size";
function ea(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Fh(e, t) {
  var n = Ve(function() {
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
var Lh = typeof window < "u" ? m.useLayoutEffect : m.useEffect, ii = /* @__PURE__ */ new WeakMap();
function Wh(e, t) {
  var n = Fh(null, function(r) {
    return e.forEach(function(o) {
      return ea(o, r);
    });
  });
  return Lh(function() {
    var r = ii.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || ea(i, null);
      }), a.forEach(function(i) {
        o.has(i) || ea(i, s);
      });
    }
    ii.set(n, e);
  }, [e]), n;
}
function Vh(e) {
  return e;
}
function Bh(e, t) {
  t === void 0 && (t = Vh);
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
function zh(e) {
  e === void 0 && (e = {});
  var t = Bh(null);
  return t.options = st({ async: !0, ssr: !1 }, e), t;
}
var _c = function(e) {
  var t = e.sideCar, n = Oc(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, st({}, n));
};
_c.isSideCarExport = !0;
function Hh(e, t) {
  return e.useMedium(t), _c;
}
var Ic = zh(), ta = function() {
}, lo = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: ta,
    onWheelCapture: ta,
    onTouchMoveCapture: ta
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, d = e.removeScrollBar, u = e.enabled, f = e.shards, p = e.sideCar, h = e.noRelative, x = e.noIsolation, v = e.inert, g = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, N = Oc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, P = Wh([n, t]), S = st(st({}, N), o);
  return m.createElement(
    m.Fragment,
    null,
    u && m.createElement(C, { sideCar: Ic, removeScrollBar: d, shards: f, noRelative: h, noIsolation: x, inert: v, setCallbacks: a, allowPinchZoom: !!g, lockRef: n, gapMode: y }),
    s ? m.cloneElement(m.Children.only(i), st(st({}, S), { ref: P })) : m.createElement(b, st({}, S, { className: l, ref: P }), i)
  );
});
lo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
lo.classNames = {
  fullWidth: Fr,
  zeroRight: $r
};
var Gh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Yh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Gh();
  return t && e.setAttribute("nonce", t), e;
}
function Kh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Uh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Yh()) && (Kh(t, n), Uh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Xh = function() {
  var e = qh();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Tc = function() {
  var e = Xh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Zh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, na = function(e) {
  return parseInt(e || "", 10) || 0;
}, Qh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [na(n), na(r), na(o)];
}, Jh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zh;
  var t = Qh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ev = Tc(), ln = "data-scroll-locked", tv = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Th, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ln, `] {
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
  
  .`).concat($r, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Fr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat($r, " .").concat($r, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Fr, " .").concat(Fr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ln, `] {
    `).concat($h, ": ").concat(i, `px;
  }
`);
}, ci = function() {
  var e = parseInt(document.body.getAttribute(ln) || "0", 10);
  return isFinite(e) ? e : 0;
}, nv = function() {
  m.useEffect(function() {
    return document.body.setAttribute(ln, (ci() + 1).toString()), function() {
      var e = ci() - 1;
      e <= 0 ? document.body.removeAttribute(ln) : document.body.setAttribute(ln, e.toString());
    };
  }, []);
}, rv = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  nv();
  var a = m.useMemo(function() {
    return Jh(o);
  }, [o]);
  return m.createElement(ev, { styles: tv(a, !t, o, n ? "" : "!important") });
}, wa = !1;
if (typeof window < "u")
  try {
    var wr = Object.defineProperty({}, "passive", {
      get: function() {
        return wa = !0, !0;
      }
    });
    window.addEventListener("test", wr, wr), window.removeEventListener("test", wr, wr);
  } catch {
    wa = !1;
  }
var tn = wa ? { passive: !1 } : !1, ov = function(e) {
  return e.tagName === "TEXTAREA";
}, $c = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !ov(e) && n[t] === "visible")
  );
}, av = function(e) {
  return $c(e, "overflowY");
}, sv = function(e) {
  return $c(e, "overflowX");
}, li = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Fc(e, r);
    if (o) {
      var a = Lc(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, iv = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, cv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Fc = function(e, t) {
  return e === "v" ? av(t) : sv(t);
}, Lc = function(e, t) {
  return e === "v" ? iv(t) : cv(t);
}, lv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, dv = function(e, t, n, r, o) {
  var a = lv(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), d = !1, u = s > 0, f = 0, p = 0;
  do {
    if (!i)
      break;
    var h = Lc(e, i), x = h[0], v = h[1], g = h[2], w = v - g - a * x;
    (x || w) && Fc(e, i) && (f += w, p += x);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(p) < 1) && (d = !0), d;
}, Cr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, di = function(e) {
  return [e.deltaX, e.deltaY];
}, ui = function(e) {
  return e && "current" in e ? e.current : e;
}, uv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, fv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, mv = 0, nn = [];
function pv(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(mv++)[0], a = m.useState(Tc)[0], s = m.useRef(e);
  m.useEffect(function() {
    s.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Ih([e.lockRef.current], (e.shards || []).map(ui), !0).filter(Boolean);
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
    var w = Cr(v), b = n.current, y = "deltaX" in v ? v.deltaX : b[0] - w[0], N = "deltaY" in v ? v.deltaY : b[1] - w[1], C, P = v.target, S = Math.abs(y) > Math.abs(N) ? "h" : "v";
    if ("touches" in v && S === "h" && P.type === "range")
      return !1;
    var E = li(S, P);
    if (!E)
      return !0;
    if (E ? C = S : (C = S === "v" ? "h" : "v", E = li(S, P)), !E)
      return !1;
    if (!r.current && "changedTouches" in v && (y || N) && (r.current = C), !C)
      return !0;
    var O = r.current || C;
    return dv(O, g, v, O === "h" ? y : N);
  }, []), l = m.useCallback(function(v) {
    var g = v;
    if (!(!nn.length || nn[nn.length - 1] !== a)) {
      var w = "deltaY" in g ? di(g) : Cr(g), b = t.current.filter(function(C) {
        return C.name === g.type && (C.target === g.target || g.target === C.shadowParent) && uv(C.delta, w);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var y = (s.current.shards || []).map(ui).filter(Boolean).filter(function(C) {
          return C.contains(g.target);
        }), N = y.length > 0 ? i(g, y[0]) : !s.current.noIsolation;
        N && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = m.useCallback(function(v, g, w, b) {
    var y = { name: v, delta: g, target: w, should: b, shadowParent: hv(w) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(N) {
        return N !== y;
      });
    }, 1);
  }, []), u = m.useCallback(function(v) {
    n.current = Cr(v), r.current = void 0;
  }, []), f = m.useCallback(function(v) {
    d(v.type, di(v), v.target, i(v, e.lockRef.current));
  }, []), p = m.useCallback(function(v) {
    d(v.type, Cr(v), v.target, i(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return nn.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, tn), document.addEventListener("touchmove", l, tn), document.addEventListener("touchstart", u, tn), function() {
      nn = nn.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", l, tn), document.removeEventListener("touchmove", l, tn), document.removeEventListener("touchstart", u, tn);
    };
  }, []);
  var h = e.removeScrollBar, x = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    x ? m.createElement(a, { styles: fv(o) }) : null,
    h ? m.createElement(rv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function hv(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const vv = Hh(Ic, pv);
var qn = m.forwardRef(function(e, t) {
  return m.createElement(lo, st({}, e, { ref: t, sideCar: vv }));
});
qn.classNames = lo.classNames;
var gv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rn = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), kr = {}, ra = 0, Wc = function(e) {
  return e && (e.host || Wc(e.parentNode));
}, xv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Wc(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, bv = function(e, t, n, r) {
  var o = xv(t, Array.isArray(e) ? e : [e]);
  kr[n] || (kr[n] = /* @__PURE__ */ new WeakMap());
  var a = kr[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  o.forEach(d);
  var u = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), x = h !== null && h !== "false", v = (rn.get(p) || 0) + 1, g = (a.get(p) || 0) + 1;
          rn.set(p, v), a.set(p, g), s.push(p), v === 1 && x && Sr.set(p, !0), g === 1 && p.setAttribute(n, "true"), x || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), i.clear(), ra++, function() {
    s.forEach(function(f) {
      var p = rn.get(f) - 1, h = a.get(f) - 1;
      rn.set(f, p), a.set(f, h), p || (Sr.has(f) || f.removeAttribute(r), Sr.delete(f)), h || f.removeAttribute(n);
    }), ra--, ra || (rn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), kr = {});
  };
}, uo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = gv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), bv(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, fo = "Dialog", [Vc] = Te(fo), [yv, ot] = Vc(fo), Bc = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = m.useRef(null), l = m.useRef(null), [d, u] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: fo
  });
  return /* @__PURE__ */ c.jsx(
    yv,
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
Bc.displayName = fo;
var zc = "DialogTrigger", wv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(zc, n), a = de(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": os(o.open),
        ...r,
        ref: a,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wv.displayName = zc;
var ns = "DialogPortal", [Cv, Hc] = Vc(ns, {
  forceMount: void 0
}), Gc = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ot(ns, t);
  return /* @__PURE__ */ c.jsx(Cv, { scope: t, forceMount: n, children: m.Children.map(r, (s) => /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: s }) })) });
};
Gc.displayName = ns;
var Gr = "DialogOverlay", Yc = m.forwardRef(
  (e, t) => {
    const n = Hc(Gr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ot(Gr, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(kv, { ...o, ref: t }) }) : null;
  }
);
Yc.displayName = Gr;
var Sv = /* @__PURE__ */ At("DialogOverlay.RemoveScroll"), kv = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Gr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(qn, { as: Sv, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        X.div,
        {
          "data-state": os(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Gt = "DialogContent", Kc = m.forwardRef(
  (e, t) => {
    const n = Hc(Gt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ot(Gt, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(Nv, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Mv, { ...o, ref: t }) });
  }
);
Kc.displayName = Gt;
var Nv = m.forwardRef(
  (e, t) => {
    const n = ot(Gt, e.__scopeDialog), r = m.useRef(null), o = de(t, n.contentRef, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return uo(a);
    }, []), /* @__PURE__ */ c.jsx(
      Uc,
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
), Mv = m.forwardRef(
  (e, t) => {
    const n = ot(Gt, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Uc,
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
), Uc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = ot(Gt, n), l = m.useRef(null), d = de(t, l);
    return co(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
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
              "data-state": os(i.open),
              ...s,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Pv, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(Av, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), rs = "DialogTitle", qc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(rs, n);
    return /* @__PURE__ */ c.jsx(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
qc.displayName = rs;
var Xc = "DialogDescription", Ev = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Xc, n);
    return /* @__PURE__ */ c.jsx(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ev.displayName = Xc;
var Zc = "DialogClose", Qc = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ot(Zc, n);
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
Qc.displayName = Zc;
function os(e) {
  return e ? "open" : "closed";
}
var Jc = "DialogTitleWarning", [MN, el] = Bp(Jc, {
  contentName: Gt,
  titleName: rs,
  docsSlug: "dialog"
}), Pv = ({ titleId: e }) => {
  const t = el(Jc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Rv = "DialogDescriptionWarning", Av = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${el(Rv).contentName}}.`;
  return m.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, as = Bc, ss = Gc, is = Yc, cs = Kc, tl = qc, Dv = Qc;
function mo(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function po(e) {
  const [t, n] = m.useState(void 0);
  return Ie(() => {
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
var ho = "Checkbox", [jv] = Te(ho), [Ov, ls] = jv(ho);
function _v(e) {
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
  } = e, [p, h] = Be({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: ho
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
    defaultChecked: Rt(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: g,
    setBubbleInput: w
  };
  return /* @__PURE__ */ c.jsx(
    Ov,
    {
      scope: t,
      ...N,
      children: Iv(f) ? f(N) : r
    }
  );
}
var nl = "CheckboxTrigger", rl = m.forwardRef(
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
    } = ls(nl, e), v = de(o, u), g = m.useRef(l);
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
        "aria-checked": Rt(l) ? "mixed" : l,
        "aria-required": d,
        "data-state": ll(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: v,
        onKeyDown: z(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: z(n, (w) => {
          f((b) => Rt(b) ? !0 : !b), x && h && (p.current = w.isPropagationStopped(), p.current || w.stopPropagation());
        })
      }
    );
  }
);
rl.displayName = nl;
var ol = m.forwardRef(
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
      _v,
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
            rl,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          p && /* @__PURE__ */ c.jsx(
            cl,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ol.displayName = ho;
var al = "CheckboxIndicator", sl = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = ls(al, n);
    return /* @__PURE__ */ c.jsx(
      $e,
      {
        present: r || Rt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            "data-state": ll(a.checked),
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
sl.displayName = al;
var il = "CheckboxBubbleInput", cl = m.forwardRef(
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
    } = ls(il, e), x = de(n, h), v = mo(a), g = po(r);
    m.useEffect(() => {
      const b = p;
      if (!b) return;
      const y = window.HTMLInputElement.prototype, C = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, P = !o.current;
      if (v !== a && C) {
        const S = new Event("click", { bubbles: P });
        b.indeterminate = Rt(a), C.call(b, Rt(a) ? !1 : a), b.dispatchEvent(S);
      }
    }, [p, v, a, o]);
    const w = m.useRef(Rt(a) ? !1 : a);
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
cl.displayName = il;
function Iv(e) {
  return typeof e == "function";
}
function Rt(e) {
  return e === "indeterminate";
}
function ll(e) {
  return Rt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Tv = ["top", "right", "bottom", "left"], Dt = Math.min, Ue = Math.max, Yr = Math.round, Nr = Math.floor, ut = (e) => ({
  x: e,
  y: e
}), $v = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fv = {
  start: "end",
  end: "start"
};
function Ca(e, t, n) {
  return Ue(e, Dt(t, n));
}
function St(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kt(e) {
  return e.split("-")[0];
}
function xn(e) {
  return e.split("-")[1];
}
function ds(e) {
  return e === "x" ? "y" : "x";
}
function us(e) {
  return e === "y" ? "height" : "width";
}
const Lv = /* @__PURE__ */ new Set(["top", "bottom"]);
function lt(e) {
  return Lv.has(kt(e)) ? "y" : "x";
}
function fs(e) {
  return ds(lt(e));
}
function Wv(e, t, n) {
  n === void 0 && (n = !1);
  const r = xn(e), o = fs(e), a = us(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Kr(s)), [s, Kr(s)];
}
function Vv(e) {
  const t = Kr(e);
  return [Sa(e), t, Sa(t)];
}
function Sa(e) {
  return e.replace(/start|end/g, (t) => Fv[t]);
}
const fi = ["left", "right"], mi = ["right", "left"], Bv = ["top", "bottom"], zv = ["bottom", "top"];
function Hv(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? mi : fi : t ? fi : mi;
    case "left":
    case "right":
      return t ? Bv : zv;
    default:
      return [];
  }
}
function Gv(e, t, n, r) {
  const o = xn(e);
  let a = Hv(kt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Sa)))), a;
}
function Kr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $v[t]);
}
function Yv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function dl(e) {
  return typeof e != "number" ? Yv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ur(e) {
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
function pi(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = lt(t), s = fs(t), i = us(s), l = kt(t), d = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, p = r[i] / 2 - o[i] / 2;
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
  switch (xn(t)) {
    case "start":
      h[s] -= p * (n && d ? -1 : 1);
      break;
    case "end":
      h[s] += p * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const Kv = async (e, t, n) => {
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
  } = pi(d, r, l), p = r, h = {}, x = 0;
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
    } = pi(d, p, l)), v = -1);
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
  } = St(t, e), x = dl(h), g = i[p ? f === "floating" ? "reference" : "floating" : f], w = Ur(await a.getClippingRect({
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
  }, C = Ur(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Uv = (e) => ({
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
    } = St(e, t) || {};
    if (d == null)
      return {};
    const f = dl(u), p = {
      x: n,
      y: r
    }, h = fs(o), x = us(h), v = await s.getDimensions(d), g = h === "y", w = g ? "top" : "left", b = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", N = a.reference[x] + a.reference[h] - p[h] - a.floating[x], C = p[h] - a.reference[h], P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let S = P ? P[y] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(P))) && (S = i.floating[y] || a.floating[x]);
    const E = N / 2 - C / 2, O = S / 2 - v[x] / 2 - 1, I = Dt(f[w], O), F = Dt(f[b], O), L = I, H = S - v[x] - F, T = S / 2 - v[x] / 2 + E, W = Ca(L, T, H), V = !l.arrow && xn(o) != null && T !== W && a.reference[x] / 2 - (T < L ? I : F) - v[x] / 2 < 0, U = V ? T < L ? T - L : T - H : 0;
    return {
      [h]: p[h] + U,
      data: {
        [h]: W,
        centerOffset: T - W - U,
        ...V && {
          alignmentOffset: U
        }
      },
      reset: V
    };
  }
}), qv = function(e) {
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
      } = St(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = kt(o), b = lt(i), y = kt(i) === i, N = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), C = p || (y || !v ? [Kr(i)] : Vv(i)), P = x !== "none";
      !p && P && C.push(...Gv(i, v, x, N));
      const S = [i, ...C], E = await Ln(t, g), O = [];
      let I = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(E[w]), f) {
        const T = Wv(o, s, N);
        O.push(E[T[0]], E[T[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: O
      }], !O.every((T) => T <= 0)) {
        var F, L;
        const T = (((F = a.flip) == null ? void 0 : F.index) || 0) + 1, W = S[T];
        if (W && (!(f === "alignment" ? b !== lt(W) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((j) => lt(j.placement) === b ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: T,
              overflows: I
            },
            reset: {
              placement: W
            }
          };
        let V = (L = I.filter((U) => U.overflows[0] <= 0).sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null ? void 0 : L.placement;
        if (!V)
          switch (h) {
            case "bestFit": {
              var H;
              const U = (H = I.filter((j) => {
                if (P) {
                  const $ = lt(j.placement);
                  return $ === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  $ === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter(($) => $ > 0).reduce(($, Q) => $ + Q, 0)]).sort((j, $) => j[1] - $[1])[0]) == null ? void 0 : H[0];
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
function hi(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function vi(e) {
  return Tv.some((t) => e[t] >= 0);
}
const Xv = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = St(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await Ln(t, {
            ...o,
            elementContext: "reference"
          }), s = hi(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: vi(s)
            }
          };
        }
        case "escaped": {
          const a = await Ln(t, {
            ...o,
            altBoundary: !0
          }), s = hi(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: vi(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ul = /* @__PURE__ */ new Set(["left", "top"]);
async function Zv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = kt(n), i = xn(n), l = lt(n) === "y", d = ul.has(s) ? -1 : 1, u = a && l ? -1 : 1, f = St(t, e);
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
const Qv = function(e) {
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
      } = t, l = await Zv(t, e);
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
}, Jv = function(e) {
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
      } = St(e, t), d = {
        x: n,
        y: r
      }, u = await Ln(t, l), f = lt(kt(o)), p = ds(f);
      let h = d[p], x = d[f];
      if (a) {
        const g = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", b = h + u[g], y = h - u[w];
        h = Ca(b, h, y);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", b = x + u[g], y = x - u[w];
        x = Ca(b, x, y);
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
}, eg = function(e) {
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
      } = St(e, t), u = {
        x: n,
        y: r
      }, f = lt(o), p = ds(f);
      let h = u[p], x = u[f];
      const v = St(i, t), g = typeof v == "number" ? {
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
        const y = p === "y" ? "width" : "height", N = ul.has(kt(o)), C = a.reference[f] - a.floating[y] + (N && ((w = s.offset) == null ? void 0 : w[f]) || 0) + (N ? 0 : g.crossAxis), P = a.reference[f] + a.reference[y] + (N ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) - (N ? g.crossAxis : 0);
        x < C ? x = C : x > P && (x = P);
      }
      return {
        [p]: h,
        [f]: x
      };
    }
  };
}, tg = function(e) {
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
      } = St(e, t), u = await Ln(t, d), f = kt(o), p = xn(o), h = lt(o) === "y", {
        width: x,
        height: v
      } = a.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = p === "end" ? "top" : "bottom");
      const b = v - u.top - u.bottom, y = x - u.left - u.right, N = Dt(v - u[g], b), C = Dt(x - u[w], y), P = !t.middlewareData.shift;
      let S = N, E = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = y), (r = t.middlewareData.shift) != null && r.enabled.y && (S = b), P && !p) {
        const I = Ue(u.left, 0), F = Ue(u.right, 0), L = Ue(u.top, 0), H = Ue(u.bottom, 0);
        h ? E = x - 2 * (I !== 0 || F !== 0 ? I + F : Ue(u.left, u.right)) : S = v - 2 * (L !== 0 || H !== 0 ? L + H : Ue(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: S
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
function vo() {
  return typeof window < "u";
}
function bn(e) {
  return fl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  var t;
  return (t = (fl(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function fl(e) {
  return vo() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function tt(e) {
  return vo() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function ft(e) {
  return vo() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function gi(e) {
  return !vo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
const ng = /* @__PURE__ */ new Set(["inline", "contents"]);
function Xn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ng.has(o);
}
const rg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function og(e) {
  return rg.has(bn(e));
}
const ag = [":popover-open", ":modal"];
function go(e) {
  return ag.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const sg = ["transform", "translate", "scale", "rotate", "perspective"], ig = ["transform", "translate", "scale", "rotate", "perspective", "filter"], cg = ["paint", "layout", "strict", "content"];
function ms(e) {
  const t = ps(), n = tt(e) ? nt(e) : e;
  return sg.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ig.some((r) => (n.willChange || "").includes(r)) || cg.some((r) => (n.contain || "").includes(r));
}
function lg(e) {
  let t = jt(e);
  for (; ft(t) && !fn(t); ) {
    if (ms(t))
      return t;
    if (go(t))
      return null;
    t = jt(t);
  }
  return null;
}
function ps() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const dg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function fn(e) {
  return dg.has(bn(e));
}
function nt(e) {
  return qe(e).getComputedStyle(e);
}
function xo(e) {
  return tt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (bn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    gi(e) && e.host || // Fallback.
    mt(e)
  );
  return gi(t) ? t.host : t;
}
function ml(e) {
  const t = jt(e);
  return fn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ft(t) && Xn(t) ? t : ml(t);
}
function Wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ml(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = qe(o);
  if (a) {
    const i = ka(s);
    return t.concat(s, s.visualViewport || [], Xn(o) ? o : [], i && n ? Wn(i) : []);
  }
  return t.concat(o, Wn(o, [], n));
}
function ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function pl(e) {
  const t = nt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ft(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Yr(n) !== a || Yr(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function hs(e) {
  return tt(e) ? e : e.contextElement;
}
function dn(e) {
  const t = hs(e);
  if (!ft(t))
    return ut(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = pl(t);
  let s = (a ? Yr(n.width) : n.width) / r, i = (a ? Yr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const ug = /* @__PURE__ */ ut(0);
function hl(e) {
  const t = qe(e);
  return !ps() || !t.visualViewport ? ug : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== qe(e) ? !1 : t;
}
function Yt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = hs(e);
  let s = ut(1);
  t && (r ? tt(r) && (s = dn(r)) : s = dn(e));
  const i = fg(a, n, r) ? hl(a) : ut(0);
  let l = (o.left + i.x) / s.x, d = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const p = qe(a), h = r && tt(r) ? qe(r) : r;
    let x = p, v = ka(x);
    for (; v && r && h !== x; ) {
      const g = dn(v), w = v.getBoundingClientRect(), b = nt(v), y = w.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, N = w.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, d *= g.y, u *= g.x, f *= g.y, l += y, d += N, x = qe(v), v = ka(x);
    }
  }
  return Ur({
    width: u,
    height: f,
    x: l,
    y: d
  });
}
function bo(e, t) {
  const n = xo(e).scrollLeft;
  return t ? t.left + n : Yt(mt(e)).left + n;
}
function vl(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - bo(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function mg(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = mt(r), i = t ? go(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ut(1);
  const u = ut(0), f = ft(r);
  if ((f || !f && !a) && ((bn(r) !== "body" || Xn(s)) && (l = xo(r)), ft(r))) {
    const h = Yt(r);
    d = dn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const p = s && !f && !a ? vl(s, l) : ut(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - l.scrollLeft * d.x + u.x + p.x,
    y: n.y * d.y - l.scrollTop * d.y + u.y + p.y
  };
}
function pg(e) {
  return Array.from(e.getClientRects());
}
function hg(e) {
  const t = mt(e), n = xo(e), r = e.ownerDocument.body, o = Ue(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ue(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bo(e);
  const i = -n.scrollTop;
  return nt(r).direction === "rtl" && (s += Ue(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const xi = 25;
function vg(e, t) {
  const n = qe(e), r = mt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = ps();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  const d = bo(r);
  if (d <= 0) {
    const u = r.ownerDocument, f = u.body, p = getComputedStyle(f), h = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - h);
    x <= xi && (a -= x);
  } else d <= xi && (a += d);
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const gg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function xg(e, t) {
  const n = Yt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ft(e) ? dn(e) : ut(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, d = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: d
  };
}
function bi(e, t, n) {
  let r;
  if (t === "viewport")
    r = vg(e, n);
  else if (t === "document")
    r = hg(mt(e));
  else if (tt(t))
    r = xg(t, n);
  else {
    const o = hl(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ur(r);
}
function gl(e, t) {
  const n = jt(e);
  return n === t || !tt(n) || fn(n) ? !1 : nt(n).position === "fixed" || gl(n, t);
}
function bg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wn(e, [], !1).filter((i) => tt(i) && bn(i) !== "body"), o = null;
  const a = nt(e).position === "fixed";
  let s = a ? jt(e) : e;
  for (; tt(s) && !fn(s); ) {
    const i = nt(s), l = ms(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && gg.has(o.position) || Xn(s) && !l && gl(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = jt(s);
  }
  return t.set(e, r), r;
}
function yg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? go(t) ? [] : bg(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((d, u) => {
    const f = bi(t, u, o);
    return d.top = Ue(f.top, d.top), d.right = Dt(f.right, d.right), d.bottom = Dt(f.bottom, d.bottom), d.left = Ue(f.left, d.left), d;
  }, bi(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function wg(e) {
  const {
    width: t,
    height: n
  } = pl(e);
  return {
    width: t,
    height: n
  };
}
function Cg(e, t, n) {
  const r = ft(t), o = mt(t), a = n === "fixed", s = Yt(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ut(0);
  function d() {
    l.x = bo(o);
  }
  if (r || !r && !a)
    if ((bn(t) !== "body" || Xn(o)) && (i = xo(t)), r) {
      const h = Yt(t, !0, a, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else o && d();
  a && !r && o && d();
  const u = o && !r && !a ? vl(o, i) : ut(0), f = s.left + i.scrollLeft - l.x - u.x, p = s.top + i.scrollTop - l.y - u.y;
  return {
    x: f,
    y: p,
    width: s.width,
    height: s.height
  };
}
function oa(e) {
  return nt(e).position === "static";
}
function yi(e, t) {
  if (!ft(e) || nt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mt(e) === n && (n = n.ownerDocument.body), n;
}
function xl(e, t) {
  const n = qe(e);
  if (go(e))
    return n;
  if (!ft(e)) {
    let o = jt(e);
    for (; o && !fn(o); ) {
      if (tt(o) && !oa(o))
        return o;
      o = jt(o);
    }
    return n;
  }
  let r = yi(e, t);
  for (; r && og(r) && oa(r); )
    r = yi(r, t);
  return r && fn(r) && oa(r) && !ms(r) ? n : r || lg(e) || n;
}
const Sg = async function(e) {
  const t = this.getOffsetParent || xl, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Cg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function kg(e) {
  return nt(e).direction === "rtl";
}
const Ng = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mg,
  getDocumentElement: mt,
  getClippingRect: yg,
  getOffsetParent: xl,
  getElementRects: Sg,
  getClientRects: pg,
  getDimensions: wg,
  getScale: dn,
  isElement: tt,
  isRTL: kg
};
function bl(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Mg(e, t) {
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
      height: h
    } = d;
    if (i || t(), !p || !h)
      return;
    const x = Nr(f), v = Nr(o.clientWidth - (u + p)), g = Nr(o.clientHeight - (f + h)), w = Nr(u), y = {
      rootMargin: -x + "px " + -v + "px " + -g + "px " + -w + "px",
      threshold: Ue(0, Dt(1, l)) || 1
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
      S === 1 && !bl(d, e.getBoundingClientRect()) && s(), N = !1;
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
function Eg(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, d = hs(e), u = o || a ? [...d ? Wn(d) : [], ...Wn(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = d && i ? Mg(d, n) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === d && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = h) == null || y.observe(t);
    })), n();
  }), d && !l && h.observe(d), h.observe(t));
  let x, v = l ? Yt(e) : null;
  l && g();
  function g() {
    const w = Yt(e);
    v && !bl(v, w) && n(), v = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f == null || f(), (w = h) == null || w.disconnect(), h = null, l && cancelAnimationFrame(x);
  };
}
const Pg = Qv, Rg = Jv, Ag = qv, Dg = tg, jg = Xv, wi = Uv, Og = eg, _g = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ng,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Kv(e, t, {
    ...o,
    platform: a
  });
};
var Ig = typeof document < "u", Tg = function() {
}, Lr = Ig ? rc : Tg;
function qr(e, t) {
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
        if (!qr(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !qr(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function yl(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ci(e, t) {
  const n = yl(e);
  return Math.round(t * n) / n;
}
function aa(e) {
  const t = m.useRef(e);
  return Lr(() => {
    t.current = e;
  }), t;
}
function $g(e) {
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
  qr(p, r) || h(r);
  const [x, v] = m.useState(null), [g, w] = m.useState(null), b = m.useCallback((j) => {
    j !== P.current && (P.current = j, v(j));
  }, []), y = m.useCallback((j) => {
    j !== S.current && (S.current = j, w(j));
  }, []), N = a || x, C = s || g, P = m.useRef(null), S = m.useRef(null), E = m.useRef(u), O = l != null, I = aa(l), F = aa(o), L = aa(d), H = m.useCallback(() => {
    if (!P.current || !S.current)
      return;
    const j = {
      placement: t,
      strategy: n,
      middleware: p
    };
    F.current && (j.platform = F.current), _g(P.current, S.current, j).then(($) => {
      const Q = {
        ...$,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: L.current !== !1
      };
      T.current && !qr(E.current, Q) && (E.current = Q, Yn.flushSync(() => {
        f(Q);
      }));
    });
  }, [p, t, n, F, L]);
  Lr(() => {
    d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, f((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [d]);
  const T = m.useRef(!1);
  Lr(() => (T.current = !0, () => {
    T.current = !1;
  }), []), Lr(() => {
    if (N && (P.current = N), C && (S.current = C), N && C) {
      if (I.current)
        return I.current(N, C, H);
      H();
    }
  }, [N, C, H, I, O]);
  const W = m.useMemo(() => ({
    reference: P,
    floating: S,
    setReference: b,
    setFloating: y
  }), [b, y]), V = m.useMemo(() => ({
    reference: N,
    floating: C
  }), [N, C]), U = m.useMemo(() => {
    const j = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return j;
    const $ = Ci(V.floating, u.x), Q = Ci(V.floating, u.y);
    return i ? {
      ...j,
      transform: "translate(" + $ + "px, " + Q + "px)",
      ...yl(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: $,
      top: Q
    };
  }, [n, i, V.floating, u.x, u.y]);
  return m.useMemo(() => ({
    ...u,
    update: H,
    refs: W,
    elements: V,
    floatingStyles: U
  }), [u, H, W, V, U]);
}
const Fg = (e) => {
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
      return r && t(r) ? r.current != null ? wi({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? wi({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Lg = (e, t) => ({
  ...Pg(e),
  options: [e, t]
}), Wg = (e, t) => ({
  ...Rg(e),
  options: [e, t]
}), Vg = (e, t) => ({
  ...Og(e),
  options: [e, t]
}), Bg = (e, t) => ({
  ...Ag(e),
  options: [e, t]
}), zg = (e, t) => ({
  ...Dg(e),
  options: [e, t]
}), Hg = (e, t) => ({
  ...jg(e),
  options: [e, t]
}), Gg = (e, t) => ({
  ...Fg(e),
  options: [e, t]
});
var Yg = "Arrow", wl = m.forwardRef((e, t) => {
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
wl.displayName = Yg;
var Kg = wl, vs = "Popper", [Cl, _t] = Te(vs), [Ug, Sl] = Cl(vs), kl = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ c.jsx(Ug, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
kl.displayName = vs;
var Nl = "PopperAnchor", Ml = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Sl(Nl, n), s = m.useRef(null), i = de(t, s), l = m.useRef(null);
    return m.useEffect(() => {
      const d = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, d !== l.current && a.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ c.jsx(X.div, { ...o, ref: i });
  }
);
Ml.displayName = Nl;
var gs = "PopperContent", [qg, Xg] = Cl(gs), El = m.forwardRef(
  (e, t) => {
    var D, Z, J, se, he, fe;
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
    } = e, g = Sl(gs, n), [w, b] = m.useState(null), y = de(t, (oe) => b(oe)), [N, C] = m.useState(null), P = po(N), S = (P == null ? void 0 : P.width) ?? 0, E = (P == null ? void 0 : P.height) ?? 0, O = r + (a !== "center" ? "-" + a : ""), I = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, F = Array.isArray(d) ? d : [d], L = F.length > 0, H = {
      padding: I,
      boundary: F.filter(Qg),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: L
    }, { refs: T, floatingStyles: W, placement: V, isPositioned: U, middlewareData: j } = $g({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...oe) => Eg(...oe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Lg({ mainAxis: o + E, alignmentAxis: s }),
        l && Wg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Vg() : void 0,
          ...H
        }),
        l && Bg({ ...H }),
        zg({
          ...H,
          apply: ({ elements: oe, rects: Se, availableWidth: Ne, availableHeight: Le }) => {
            const { width: je, height: Ft } = Se.reference, Nt = oe.floating.style;
            Nt.setProperty("--radix-popper-available-width", `${Ne}px`), Nt.setProperty("--radix-popper-available-height", `${Le}px`), Nt.setProperty("--radix-popper-anchor-width", `${je}px`), Nt.setProperty("--radix-popper-anchor-height", `${Ft}px`);
          }
        }),
        N && Gg({ element: N, padding: i }),
        Jg({ arrowWidth: S, arrowHeight: E }),
        p && Hg({ strategy: "referenceHidden", ...H })
      ]
    }), [$, Q] = Al(V), R = He(x);
    Ie(() => {
      U && (R == null || R());
    }, [U, R]);
    const M = (D = j.arrow) == null ? void 0 : D.x, _ = (Z = j.arrow) == null ? void 0 : Z.y, B = ((J = j.arrow) == null ? void 0 : J.centerOffset) !== 0, [K, G] = m.useState();
    return Ie(() => {
      w && G(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: T.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: U ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K,
          "--radix-popper-transform-origin": [
            (se = j.transformOrigin) == null ? void 0 : se.x,
            (he = j.transformOrigin) == null ? void 0 : he.y
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
          qg,
          {
            scope: n,
            placedSide: $,
            onArrowChange: C,
            arrowX: M,
            arrowY: _,
            shouldHideArrow: B,
            children: /* @__PURE__ */ c.jsx(
              X.div,
              {
                "data-side": $,
                "data-align": Q,
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
El.displayName = gs;
var Pl = "PopperArrow", Zg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Rl = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Xg(Pl, r), s = Zg[a.placedSide];
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
          Kg,
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
Rl.displayName = Pl;
function Qg(e) {
  return e !== null;
}
var Jg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, b;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [d, u] = Al(n), f = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, h = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let x = "", v = "";
    return d === "bottom" ? (x = s ? f : `${p}px`, v = `${-l}px`) : d === "top" ? (x = s ? f : `${p}px`, v = `${r.floating.height + l}px`) : d === "right" ? (x = `${-l}px`, v = s ? f : `${h}px`) : d === "left" && (x = `${r.floating.width + l}px`, v = s ? f : `${h}px`), { data: { x, y: v } };
  }
});
function Al(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var yo = kl, Zn = Ml, wo = El, Co = Rl, sa = "rovingFocusGroup.onEntryFocus", ex = { bubbles: !1, cancelable: !0 }, Qn = "RovingFocusGroup", [Na, Dl, tx] = Kn(Qn), [nx, yn] = Te(
  Qn,
  [tx]
), [rx, ox] = nx(Qn), jl = m.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Na.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Na.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(ax, { ...e, ref: t }) }) })
);
jl.displayName = Qn;
var ax = m.forwardRef((e, t) => {
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
  } = e, p = m.useRef(null), h = de(t, p), x = gn(a), [v, g] = Be({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Qn
  }), [w, b] = m.useState(!1), y = He(d), N = Dl(n), C = m.useRef(!1), [P, S] = m.useState(0);
  return m.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(sa, y), () => E.removeEventListener(sa, y);
  }, [y]), /* @__PURE__ */ c.jsx(
    rx,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (E) => g(E),
        [g]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => S((E) => E + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => S((E) => E - 1),
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
          onFocus: z(e.onFocus, (E) => {
            const O = !C.current;
            if (E.target === E.currentTarget && O && !w) {
              const I = new CustomEvent(sa, ex);
              if (E.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const F = N().filter((V) => V.focusable), L = F.find((V) => V.active), H = F.find((V) => V.id === v), W = [L, H, ...F].filter(
                  Boolean
                ).map((V) => V.ref.current);
                Il(W, u);
              }
            }
            C.current = !1;
          }),
          onBlur: z(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Ol = "RovingFocusGroupItem", _l = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = Ee(), d = a || l, u = ox(Ol, n), f = u.currentTabStopId === d, p = Dl(n), { onFocusableItemAdd: h, onFocusableItemRemove: x, currentTabStopId: v } = u;
    return m.useEffect(() => {
      if (r)
        return h(), () => x();
    }, [r, h, x]), /* @__PURE__ */ c.jsx(
      Na.ItemSlot,
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
              const w = cx(g, u.orientation, u.dir);
              if (w !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let y = p().filter((N) => N.focusable).map((N) => N.ref.current);
                if (w === "last") y.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && y.reverse();
                  const N = y.indexOf(g.currentTarget);
                  y = u.loop ? lx(y, N + 1) : y.slice(N + 1);
                }
                setTimeout(() => Il(y));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: v != null }) : s
          }
        )
      }
    );
  }
);
_l.displayName = Ol;
var sx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ix(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cx(e, t, n) {
  const r = ix(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return sx[r];
}
function Il(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function lx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var xs = jl, bs = _l, Ma = ["Enter", " "], dx = ["ArrowDown", "PageUp", "Home"], Tl = ["ArrowUp", "PageDown", "End"], ux = [...dx, ...Tl], fx = {
  ltr: [...Ma, "ArrowRight"],
  rtl: [...Ma, "ArrowLeft"]
}, mx = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Jn = "Menu", [Vn, px, hx] = Kn(Jn), [Qt, $l] = Te(Jn, [
  hx,
  _t,
  yn
]), So = _t(), Fl = yn(), [vx, Jt] = Qt(Jn), [gx, er] = Qt(Jn), Ll = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = So(t), [l, d] = m.useState(null), u = m.useRef(!1), f = He(a), p = gn(o);
  return m.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(yo, { ...i, children: /* @__PURE__ */ c.jsx(
    vx,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: l,
      onContentChange: d,
      children: /* @__PURE__ */ c.jsx(
        gx,
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
Ll.displayName = Jn;
var xx = "MenuAnchor", ys = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = So(n);
    return /* @__PURE__ */ c.jsx(Zn, { ...o, ...r, ref: t });
  }
);
ys.displayName = xx;
var ws = "MenuPortal", [bx, Wl] = Qt(ws, {
  forceMount: void 0
}), Vl = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Jt(ws, t);
  return /* @__PURE__ */ c.jsx(bx, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
Vl.displayName = ws;
var Qe = "MenuContent", [yx, Cs] = Qt(Qe), Bl = m.forwardRef(
  (e, t) => {
    const n = Wl(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Jt(Qe, e.__scopeMenu), s = er(Qe, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Vn.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(wx, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(Cx, { ...o, ref: t }) }) }) });
  }
), wx = m.forwardRef(
  (e, t) => {
    const n = Jt(Qe, e.__scopeMenu), r = m.useRef(null), o = de(t, r);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return uo(a);
    }, []), /* @__PURE__ */ c.jsx(
      Ss,
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
), Cx = m.forwardRef((e, t) => {
  const n = Jt(Qe, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    Ss,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Sx = /* @__PURE__ */ At("MenuContent.ScrollLock"), Ss = m.forwardRef(
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
    } = e, g = Jt(Qe, n), w = er(Qe, n), b = So(n), y = Fl(n), N = px(n), [C, P] = m.useState(null), S = m.useRef(null), E = de(t, S, g.onContentChange), O = m.useRef(0), I = m.useRef(""), F = m.useRef(0), L = m.useRef(null), H = m.useRef("right"), T = m.useRef(0), W = x ? qn : m.Fragment, V = x ? { as: Sx, allowPinchZoom: !0 } : void 0, U = ($) => {
      var D, Z;
      const Q = I.current + $, R = N().filter((J) => !J.disabled), M = document.activeElement, _ = (D = R.find((J) => J.ref.current === M)) == null ? void 0 : D.textValue, B = R.map((J) => J.textValue), K = Ix(B, Q, _), G = (Z = R.find((J) => J.textValue === K)) == null ? void 0 : Z.ref.current;
      (function J(se) {
        I.current = se, window.clearTimeout(O.current), se !== "" && (O.current = window.setTimeout(() => J(""), 1e3));
      })(Q), G && setTimeout(() => G.focus());
    };
    m.useEffect(() => () => window.clearTimeout(O.current), []), co();
    const j = m.useCallback(($) => {
      var R, M;
      return H.current === ((R = L.current) == null ? void 0 : R.side) && $x($, (M = L.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      yx,
      {
        scope: n,
        searchRef: I,
        onItemEnter: m.useCallback(
          ($) => {
            j($) && $.preventDefault();
          },
          [j]
        ),
        onItemLeave: m.useCallback(
          ($) => {
            var Q;
            j($) || ((Q = S.current) == null || Q.focus(), P(null));
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
        children: /* @__PURE__ */ c.jsx(W, { ...V, children: /* @__PURE__ */ c.jsx(
          Un,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: z(a, ($) => {
              var Q;
              $.preventDefault(), (Q = S.current) == null || Q.focus({ preventScroll: !0 });
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
                  xs,
                  {
                    asChild: !0,
                    ...y,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: C,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: z(l, ($) => {
                      w.isUsingKeyboardRef.current || $.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      wo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": od(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...v,
                        ref: E,
                        style: { outline: "none", ...v.style },
                        onKeyDown: z(v.onKeyDown, ($) => {
                          const R = $.target.closest("[data-radix-menu-content]") === $.currentTarget, M = $.ctrlKey || $.altKey || $.metaKey, _ = $.key.length === 1;
                          R && ($.key === "Tab" && $.preventDefault(), !M && _ && U($.key));
                          const B = S.current;
                          if ($.target !== B || !ux.includes($.key)) return;
                          $.preventDefault();
                          const G = N().filter((D) => !D.disabled).map((D) => D.ref.current);
                          Tl.includes($.key) && G.reverse(), Ox(G);
                        }),
                        onBlur: z(e.onBlur, ($) => {
                          $.currentTarget.contains($.target) || (window.clearTimeout(O.current), I.current = "");
                        }),
                        onPointerMove: z(
                          e.onPointerMove,
                          Bn(($) => {
                            const Q = $.target, R = T.current !== $.clientX;
                            if ($.currentTarget.contains(Q) && R) {
                              const M = $.clientX > T.current ? "right" : "left";
                              H.current = M, T.current = $.clientX;
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
Bl.displayName = Qe;
var kx = "MenuGroup", ks = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { role: "group", ...r, ref: t });
  }
);
ks.displayName = kx;
var Nx = "MenuLabel", zl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
zl.displayName = Nx;
var Xr = "MenuItem", Si = "menu.itemSelect", ko = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = m.useRef(null), s = er(Xr, e.__scopeMenu), i = Cs(Xr, e.__scopeMenu), l = de(t, a), d = m.useRef(!1), u = () => {
      const f = a.current;
      if (!n && f) {
        const p = new CustomEvent(Si, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Si, (h) => r == null ? void 0 : r(h), { once: !0 }), qa(f, p), p.defaultPrevented ? d.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      Hl,
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
          n || p && f.key === " " || Ma.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
ko.displayName = Xr;
var Hl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Cs(Xr, n), i = Fl(n), l = m.useRef(null), d = de(t, l), [u, f] = m.useState(!1), [p, h] = m.useState("");
    return m.useEffect(() => {
      const x = l.current;
      x && h((x.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      Vn.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ c.jsx(bs, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
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
              Bn((x) => {
                r ? s.onItemLeave(x) : (s.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: z(
              e.onPointerLeave,
              Bn((x) => s.onItemLeave(x))
            ),
            onFocus: z(e.onFocus, () => f(!0)),
            onBlur: z(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Mx = "MenuCheckboxItem", Gl = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Xl, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      ko,
      {
        role: "menuitemcheckbox",
        "aria-checked": Zr(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ms(n),
        onSelect: z(
          o.onSelect,
          () => r == null ? void 0 : r(Zr(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Gl.displayName = Mx;
var Yl = "MenuRadioGroup", [Ex, Px] = Qt(
  Yl,
  { value: void 0, onValueChange: () => {
  } }
), Kl = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = He(r);
    return /* @__PURE__ */ c.jsx(Ex, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(ks, { ...o, ref: t }) });
  }
);
Kl.displayName = Yl;
var Ul = "MenuRadioItem", ql = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Px(Ul, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(Xl, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      ko,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Ms(a),
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
ql.displayName = Ul;
var Ns = "MenuItemIndicator", [Xl, Rx] = Qt(
  Ns,
  { checked: !1 }
), Zl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Rx(Ns, n);
    return /* @__PURE__ */ c.jsx(
      $e,
      {
        present: r || Zr(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          X.span,
          {
            ...o,
            ref: t,
            "data-state": Ms(a.checked)
          }
        )
      }
    );
  }
);
Zl.displayName = Ns;
var Ax = "MenuSeparator", Ql = m.forwardRef(
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
Ql.displayName = Ax;
var Dx = "MenuArrow", Jl = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = So(n);
    return /* @__PURE__ */ c.jsx(Co, { ...o, ...r, ref: t });
  }
);
Jl.displayName = Dx;
var jx = "MenuSub", [EN, ed] = Qt(jx), _n = "MenuSubTrigger", td = m.forwardRef(
  (e, t) => {
    const n = Jt(_n, e.__scopeMenu), r = er(_n, e.__scopeMenu), o = ed(_n, e.__scopeMenu), a = Cs(_n, e.__scopeMenu), s = m.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, d = { __scopeMenu: e.__scopeMenu }, u = m.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return m.useEffect(() => u, [u]), m.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(ys, { asChild: !0, ...d, children: /* @__PURE__ */ c.jsx(
      Hl,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": od(n.open),
        ...e,
        ref: Ct(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: z(
          e.onPointerMove,
          Bn((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: z(
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
        onKeyDown: z(e.onKeyDown, (f) => {
          var h;
          const p = a.searchRef.current !== "";
          e.disabled || p && f.key === " " || fx[r.dir].includes(f.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
td.displayName = _n;
var nd = "MenuSubContent", rd = m.forwardRef(
  (e, t) => {
    const n = Wl(Qe, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Jt(Qe, e.__scopeMenu), s = er(Qe, e.__scopeMenu), i = ed(nd, e.__scopeMenu), l = m.useRef(null), d = de(t, l);
    return /* @__PURE__ */ c.jsx(Vn.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: /* @__PURE__ */ c.jsx(Vn.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      Ss,
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
          const f = u.currentTarget.contains(u.target), p = mx[s.dir].includes(u.key);
          f && p && (a.onOpenChange(!1), (h = i.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
rd.displayName = nd;
function od(e) {
  return e ? "open" : "closed";
}
function Zr(e) {
  return e === "indeterminate";
}
function Ms(e) {
  return Zr(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Ox(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _x(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ix(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = _x(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function Tx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function $x(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Tx(n, t);
}
function Bn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Fx = Ll, Lx = ys, Wx = Vl, Vx = Bl, Bx = ks, zx = zl, Hx = ko, Gx = Gl, Yx = Kl, Kx = ql, Ux = Zl, qx = Ql, Xx = Jl, Zx = td, Qx = rd, No = "DropdownMenu", [Jx] = Te(
  No,
  [$l]
), ze = $l(), [e0, ad] = Jx(No), sd = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = ze(t), d = m.useRef(null), [u, f] = Be({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: No
  });
  return /* @__PURE__ */ c.jsx(
    e0,
    {
      scope: t,
      triggerId: Ee(),
      triggerRef: d,
      contentId: Ee(),
      open: u,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(Fx, { ...l, open: u, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
sd.displayName = No;
var id = "DropdownMenuTrigger", cd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ad(id, n), s = ze(n);
    return /* @__PURE__ */ c.jsx(Lx, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
        ref: Ct(t, a.triggerRef),
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
cd.displayName = id;
var t0 = "DropdownMenuPortal", ld = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ze(t);
  return /* @__PURE__ */ c.jsx(Wx, { ...r, ...n });
};
ld.displayName = t0;
var dd = "DropdownMenuContent", ud = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ad(dd, n), a = ze(n), s = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Vx,
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
ud.displayName = dd;
var n0 = "DropdownMenuGroup", r0 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ c.jsx(Bx, { ...o, ...r, ref: t });
  }
);
r0.displayName = n0;
var o0 = "DropdownMenuLabel", fd = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ c.jsx(zx, { ...o, ...r, ref: t });
  }
);
fd.displayName = o0;
var a0 = "DropdownMenuItem", md = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ c.jsx(Hx, { ...o, ...r, ref: t });
  }
);
md.displayName = a0;
var s0 = "DropdownMenuCheckboxItem", i0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(Gx, { ...o, ...r, ref: t });
});
i0.displayName = s0;
var c0 = "DropdownMenuRadioGroup", l0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(Yx, { ...o, ...r, ref: t });
});
l0.displayName = c0;
var d0 = "DropdownMenuRadioItem", u0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(Kx, { ...o, ...r, ref: t });
});
u0.displayName = d0;
var f0 = "DropdownMenuItemIndicator", m0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(Ux, { ...o, ...r, ref: t });
});
m0.displayName = f0;
var p0 = "DropdownMenuSeparator", pd = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(qx, { ...o, ...r, ref: t });
});
pd.displayName = p0;
var h0 = "DropdownMenuArrow", v0 = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
    return /* @__PURE__ */ c.jsx(Xx, { ...o, ...r, ref: t });
  }
);
v0.displayName = h0;
var g0 = "DropdownMenuSubTrigger", x0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(Zx, { ...o, ...r, ref: t });
});
x0.displayName = g0;
var b0 = "DropdownMenuSubContent", y0 = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ze(n);
  return /* @__PURE__ */ c.jsx(
    Qx,
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
y0.displayName = b0;
var w0 = sd, C0 = cd, S0 = ld, k0 = ud, N0 = fd, ki = md, M0 = pd;
function Ni(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Mo = "Popover", [hd] = Te(Mo, [
  _t
]), tr = _t(), [E0, It] = hd(Mo), vd = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = tr(t), l = m.useRef(null), [d, u] = m.useState(!1), [f, p] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Mo
  });
  return /* @__PURE__ */ c.jsx(yo, { ...i, children: /* @__PURE__ */ c.jsx(
    E0,
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
vd.displayName = Mo;
var gd = "PopoverAnchor", xd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(gd, n), a = tr(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Zn, { ...a, ...r, ref: t });
  }
);
xd.displayName = gd;
var bd = "PopoverTrigger", yd = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(bd, n), a = tr(n), s = de(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Nd(o.open),
        ...r,
        ref: s,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...a, children: i });
  }
);
yd.displayName = bd;
var Es = "PopoverPortal", [P0, R0] = hd(Es, {
  forceMount: void 0
}), wd = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = It(Es, t);
  return /* @__PURE__ */ c.jsx(P0, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
wd.displayName = Es;
var mn = "PopoverContent", Cd = m.forwardRef(
  (e, t) => {
    const n = R0(mn, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = It(mn, e.__scopePopover);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(D0, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(j0, { ...o, ref: t }) });
  }
);
Cd.displayName = mn;
var A0 = /* @__PURE__ */ At("PopoverContent.RemoveScroll"), D0 = m.forwardRef(
  (e, t) => {
    const n = It(mn, e.__scopePopover), r = m.useRef(null), o = de(t, r), a = m.useRef(!1);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return uo(s);
    }, []), /* @__PURE__ */ c.jsx(qn, { as: A0, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      Sd,
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
), j0 = m.forwardRef(
  (e, t) => {
    const n = It(mn, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Sd,
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
), Sd = m.forwardRef(
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
    } = e, p = It(mn, n), h = tr(n);
    return co(), /* @__PURE__ */ c.jsx(
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
              wo,
              {
                "data-state": Nd(p.open),
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
), kd = "PopoverClose", O0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = It(kd, n);
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
O0.displayName = kd;
var _0 = "PopoverArrow", I0 = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = tr(n);
    return /* @__PURE__ */ c.jsx(Co, { ...o, ...r, ref: t });
  }
);
I0.displayName = _0;
function Nd(e) {
  return e ? "open" : "closed";
}
var Md = vd, T0 = xd, Ed = yd, Pd = wd, Ps = Cd, Rs = "Progress", As = 100, [$0] = Te(Rs), [F0, L0] = $0(Rs), Rd = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = W0,
      ...s
    } = e;
    (o || o === 0) && !Mi(o) && console.error(V0(`${o}`, "Progress"));
    const i = Mi(o) ? o : As;
    r !== null && !Ei(r, i) && console.error(B0(`${r}`, "Progress"));
    const l = Ei(r, i) ? r : null, d = Qr(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(F0, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      X.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Qr(l) ? l : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": jd(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
Rd.displayName = Rs;
var Ad = "ProgressIndicator", Dd = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = L0(Ad, n);
    return /* @__PURE__ */ c.jsx(
      X.div,
      {
        "data-state": jd(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
Dd.displayName = Ad;
function W0(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function jd(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Qr(e) {
  return typeof e == "number";
}
function Mi(e) {
  return Qr(e) && !isNaN(e) && e > 0;
}
function Ei(e, t) {
  return Qr(e) && !isNaN(e) && e <= t && e >= 0;
}
function V0(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${As}\`.`;
}
function B0(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${As} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var z0 = Rd, H0 = Dd, Ds = "Radio", [G0, Od] = Te(Ds), [Y0, K0] = G0(Ds), _d = m.forwardRef(
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
    return /* @__PURE__ */ c.jsxs(Y0, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Fd(o),
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
        $d,
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
_d.displayName = Ds;
var Id = "RadioIndicator", Td = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = K0(Id, n);
    return /* @__PURE__ */ c.jsx($e, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": Fd(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Td.displayName = Id;
var U0 = "RadioBubbleInput", $d = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = de(s, a), l = mo(n), d = po(t);
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
$d.displayName = U0;
function Fd(e) {
  return e ? "checked" : "unchecked";
}
var q0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Eo = "RadioGroup", [X0] = Te(Eo, [
  yn,
  Od
]), Ld = yn(), Wd = Od(), [Z0, Q0] = X0(Eo), Vd = m.forwardRef(
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
    } = e, h = Ld(n), x = gn(d), [v, g] = Be({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: Eo
    });
    return /* @__PURE__ */ c.jsx(
      Z0,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: v,
        onValueChange: g,
        children: /* @__PURE__ */ c.jsx(
          xs,
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
Vd.displayName = Eo;
var Bd = "RadioGroupItem", zd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Q0(Bd, n), s = a.disabled || r, i = Ld(n), l = Wd(n), d = m.useRef(null), u = de(t, d), f = a.value === o.value, p = m.useRef(!1);
    return m.useEffect(() => {
      const h = (v) => {
        q0.includes(v.key) && (p.current = !0);
      }, x = () => p.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ c.jsx(
      bs,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          _d,
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
zd.displayName = Bd;
var J0 = "RadioGroupIndicator", Hd = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Wd(n);
    return /* @__PURE__ */ c.jsx(Td, { ...o, ...r, ref: t });
  }
);
Hd.displayName = J0;
var eb = Vd, tb = zd, nb = Hd, rb = [" ", "Enter", "ArrowUp", "ArrowDown"], ob = [" ", "Enter"], Kt = "Select", [Po, Ro, ab] = Kn(Kt), [wn] = Te(Kt, [
  ab,
  _t
]), Ao = _t(), [sb, Tt] = wn(Kt), [ib, cb] = wn(Kt), Gd = (e) => {
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
  } = e, v = Ao(t), [g, w] = m.useState(null), [b, y] = m.useState(null), [N, C] = m.useState(!1), P = gn(d), [S, E] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Kt
  }), [O, I] = Be({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: Kt
  }), F = m.useRef(null), L = g ? x || !!g.closest("form") : !0, [H, T] = m.useState(/* @__PURE__ */ new Set()), W = Array.from(H).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ c.jsx(yo, { ...v, children: /* @__PURE__ */ c.jsxs(
    sb,
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
      value: O,
      onValueChange: I,
      open: S,
      onOpenChange: E,
      dir: P,
      triggerPointerDownPosRef: F,
      disabled: p,
      children: [
        /* @__PURE__ */ c.jsx(Po.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          ib,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((V) => {
              T((U) => new Set(U).add(V));
            }, []),
            onNativeOptionRemove: m.useCallback((V) => {
              T((U) => {
                const j = new Set(U);
                return j.delete(V), j;
              });
            }, []),
            children: n
          }
        ) }),
        L ? /* @__PURE__ */ c.jsxs(
          gu,
          {
            "aria-hidden": !0,
            required: h,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: O,
            onChange: (V) => I(V.target.value),
            disabled: p,
            form: x,
            children: [
              O === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(H)
            ]
          },
          W
        ) : null
      ]
    }
  ) });
};
Gd.displayName = Kt;
var Yd = "SelectTrigger", Kd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Ao(n), s = Tt(Yd, n), i = s.disabled || r, l = de(t, s.onTriggerChange), d = Ro(n), u = m.useRef("touch"), [f, p, h] = bu((v) => {
      const g = d().filter((y) => !y.disabled), w = g.find((y) => y.value === s.value), b = yu(g, v, w);
      b !== void 0 && s.onValueChange(b.value);
    }), x = (v) => {
      i || (s.onOpenChange(!0), h()), v && (s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
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
        "data-placeholder": xu(s.value) ? "" : void 0,
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
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && p(v.key), !(g && v.key === " ") && rb.includes(v.key) && (x(), v.preventDefault());
        })
      }
    ) });
  }
);
Kd.displayName = Yd;
var Ud = "SelectValue", qd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Tt(Ud, n), { onValueNodeHasChildrenChange: d } = l, u = a !== void 0, f = de(t, l.onValueNodeChange);
    return Ie(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ c.jsx(
      X.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: xu(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
qd.displayName = Ud;
var lb = "SelectIcon", Xd = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Xd.displayName = lb;
var db = "SelectPortal", Zd = (e) => /* @__PURE__ */ c.jsx(Zt, { asChild: !0, ...e });
Zd.displayName = db;
var Ut = "SelectContent", Qd = m.forwardRef(
  (e, t) => {
    const n = Tt(Ut, e.__scopeSelect), [r, o] = m.useState();
    if (Ie(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Yn.createPortal(
        /* @__PURE__ */ c.jsx(Jd, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Po.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(eu, { ...e, ref: t });
  }
);
Qd.displayName = Ut;
var Je = 10, [Jd, $t] = wn(Ut), ub = "SelectContentImpl", fb = /* @__PURE__ */ At("SelectContent.RemoveScroll"), eu = m.forwardRef(
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
    } = e, b = Tt(Ut, n), [y, N] = m.useState(null), [C, P] = m.useState(null), S = de(t, (D) => N(D)), [E, O] = m.useState(null), [I, F] = m.useState(
      null
    ), L = Ro(n), [H, T] = m.useState(!1), W = m.useRef(!1);
    m.useEffect(() => {
      if (y) return uo(y);
    }, [y]), co();
    const V = m.useCallback(
      (D) => {
        const [Z, ...J] = L().map((fe) => fe.ref.current), [se] = J.slice(-1), he = document.activeElement;
        for (const fe of D)
          if (fe === he || (fe == null || fe.scrollIntoView({ block: "nearest" }), fe === Z && C && (C.scrollTop = 0), fe === se && C && (C.scrollTop = C.scrollHeight), fe == null || fe.focus(), document.activeElement !== he)) return;
      },
      [L, C]
    ), U = m.useCallback(
      () => V([E, y]),
      [V, E, y]
    );
    m.useEffect(() => {
      H && U();
    }, [H, U]);
    const { onOpenChange: j, triggerPointerDownPosRef: $ } = b;
    m.useEffect(() => {
      if (y) {
        let D = { x: 0, y: 0 };
        const Z = (se) => {
          var he, fe;
          D = {
            x: Math.abs(Math.round(se.pageX) - (((he = $.current) == null ? void 0 : he.x) ?? 0)),
            y: Math.abs(Math.round(se.pageY) - (((fe = $.current) == null ? void 0 : fe.y) ?? 0))
          };
        }, J = (se) => {
          D.x <= 10 && D.y <= 10 ? se.preventDefault() : y.contains(se.target) || j(!1), document.removeEventListener("pointermove", Z), $.current = null;
        };
        return $.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [y, j, $]), m.useEffect(() => {
      const D = () => j(!1);
      return window.addEventListener("blur", D), window.addEventListener("resize", D), () => {
        window.removeEventListener("blur", D), window.removeEventListener("resize", D);
      };
    }, [j]);
    const [Q, R] = bu((D) => {
      const Z = L().filter((he) => !he.disabled), J = Z.find((he) => he.ref.current === document.activeElement), se = yu(Z, D, J);
      se && setTimeout(() => se.ref.current.focus());
    }), M = m.useCallback(
      (D, Z, J) => {
        const se = !W.current && !J;
        (b.value !== void 0 && b.value === Z || se) && (O(D), se && (W.current = !0));
      },
      [b.value]
    ), _ = m.useCallback(() => y == null ? void 0 : y.focus(), [y]), B = m.useCallback(
      (D, Z, J) => {
        const se = !W.current && !J;
        (b.value !== void 0 && b.value === Z || se) && F(D);
      },
      [b.value]
    ), K = r === "popper" ? Ea : tu, G = K === Ea ? {
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
      Jd,
      {
        scope: n,
        content: y,
        viewport: C,
        onViewportChange: P,
        itemRefCallback: M,
        selectedItem: E,
        onItemLeave: _,
        itemTextRefCallback: B,
        focusSelectedItem: U,
        selectedItemText: I,
        position: r,
        isPositioned: H,
        searchRef: Q,
        children: /* @__PURE__ */ c.jsx(qn, { as: fb, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Un,
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
              Xt,
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
                    ...G,
                    onPlaced: () => T(!0),
                    ref: S,
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
                        let se = L().filter((he) => !he.disabled).map((he) => he.ref.current);
                        if (["ArrowUp", "End"].includes(D.key) && (se = se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
                          const he = D.target, fe = se.indexOf(he);
                          se = se.slice(fe + 1);
                        }
                        setTimeout(() => V(se)), D.preventDefault();
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
eu.displayName = ub;
var mb = "SelectItemAlignedPosition", tu = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Tt(Ut, n), s = $t(Ut, n), [i, l] = m.useState(null), [d, u] = m.useState(null), f = de(t, (S) => u(S)), p = Ro(n), h = m.useRef(!1), x = m.useRef(!0), { viewport: v, selectedItem: g, selectedItemText: w, focusSelectedItem: b } = s, y = m.useCallback(() => {
    if (a.trigger && a.valueNode && i && d && v && g && w) {
      const S = a.trigger.getBoundingClientRect(), E = d.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), I = w.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = I.left - E.left, fe = O.left - he, oe = S.left - fe, Se = S.width + oe, Ne = Math.max(Se, E.width), Le = window.innerWidth - Je, je = Ni(fe, [
          Je,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Je, Le - Ne)
        ]);
        i.style.minWidth = Se + "px", i.style.left = je + "px";
      } else {
        const he = E.right - I.right, fe = window.innerWidth - O.right - he, oe = window.innerWidth - S.right - fe, Se = S.width + oe, Ne = Math.max(Se, E.width), Le = window.innerWidth - Je, je = Ni(fe, [
          Je,
          Math.max(Je, Le - Ne)
        ]);
        i.style.minWidth = Se + "px", i.style.right = je + "px";
      }
      const F = p(), L = window.innerHeight - Je * 2, H = v.scrollHeight, T = window.getComputedStyle(d), W = parseInt(T.borderTopWidth, 10), V = parseInt(T.paddingTop, 10), U = parseInt(T.borderBottomWidth, 10), j = parseInt(T.paddingBottom, 10), $ = W + V + H + j + U, Q = Math.min(g.offsetHeight * 5, $), R = window.getComputedStyle(v), M = parseInt(R.paddingTop, 10), _ = parseInt(R.paddingBottom, 10), B = S.top + S.height / 2 - Je, K = L - B, G = g.offsetHeight / 2, D = g.offsetTop + G, Z = W + V + D, J = $ - Z;
      if (Z <= B) {
        const he = F.length > 0 && g === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const fe = d.clientHeight - v.offsetTop - v.offsetHeight, oe = Math.max(
          K,
          G + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (he ? _ : 0) + fe + U
        ), Se = Z + oe;
        i.style.height = Se + "px";
      } else {
        const he = F.length > 0 && g === F[0].ref.current;
        i.style.top = "0px";
        const oe = Math.max(
          B,
          W + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (he ? M : 0) + G
        ) + J;
        i.style.height = oe + "px", v.scrollTop = Z - B + v.offsetTop;
      }
      i.style.margin = `${Je}px 0`, i.style.minHeight = Q + "px", i.style.maxHeight = L + "px", r == null || r(), requestAnimationFrame(() => h.current = !0);
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
  Ie(() => y(), [y]);
  const [N, C] = m.useState();
  Ie(() => {
    d && C(window.getComputedStyle(d).zIndex);
  }, [d]);
  const P = m.useCallback(
    (S) => {
      S && x.current === !0 && (y(), b == null || b(), x.current = !1);
    },
    [y, b]
  );
  return /* @__PURE__ */ c.jsx(
    hb,
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
tu.displayName = mb;
var pb = "SelectPopperPosition", Ea = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Je,
    ...a
  } = e, s = Ao(n);
  return /* @__PURE__ */ c.jsx(
    wo,
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
Ea.displayName = pb;
var [hb, js] = wn(Ut, {}), Pa = "SelectViewport", nu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = $t(Pa, n), s = js(Pa, n), i = de(t, a.onViewportChange), l = m.useRef(0);
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
      /* @__PURE__ */ c.jsx(Po.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
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
nu.displayName = Pa;
var ru = "SelectGroup", [vb, gb] = wn(ru), ou = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ee();
    return /* @__PURE__ */ c.jsx(vb, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ou.displayName = ru;
var au = "SelectLabel", su = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = gb(au, n);
    return /* @__PURE__ */ c.jsx(X.div, { id: o.id, ...r, ref: t });
  }
);
su.displayName = au;
var Jr = "SelectItem", [xb, iu] = wn(Jr), cu = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Tt(Jr, n), l = $t(Jr, n), d = i.value === r, [u, f] = m.useState(a ?? ""), [p, h] = m.useState(!1), x = de(
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
      xb,
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
          Po.ItemSlot,
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
                  var N;
                  ((N = l.searchRef) == null ? void 0 : N.current) !== "" && b.key === " " || (ob.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cu.displayName = Jr;
var In = "SelectItemText", lu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Tt(In, n), i = $t(In, n), l = iu(In, n), d = cb(In, n), [u, f] = m.useState(null), p = de(
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
    return Ie(() => (v(x), () => g(x)), [v, g, x]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(X.span, { id: l.textId, ...a, ref: p }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Yn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
lu.displayName = In;
var du = "SelectItemIndicator", uu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return iu(du, n).isSelected ? /* @__PURE__ */ c.jsx(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
uu.displayName = du;
var Ra = "SelectScrollUpButton", fu = m.forwardRef((e, t) => {
  const n = $t(Ra, e.__scopeSelect), r = js(Ra, e.__scopeSelect), [o, a] = m.useState(!1), s = de(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollTop > 0;
        a(d);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    pu,
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
fu.displayName = Ra;
var Aa = "SelectScrollDownButton", mu = m.forwardRef((e, t) => {
  const n = $t(Aa, e.__scopeSelect), r = js(Aa, e.__scopeSelect), [o, a] = m.useState(!1), s = de(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = l.scrollHeight - l.clientHeight, u = Math.ceil(l.scrollTop) < d;
        a(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    pu,
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
mu.displayName = Aa;
var pu = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = $t("SelectScrollButton", n), s = m.useRef(null), i = Ro(n), l = m.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return m.useEffect(() => () => l(), [l]), Ie(() => {
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
}), bb = "SelectSeparator", hu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
hu.displayName = bb;
var Da = "SelectArrow", vu = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ao(n), a = Tt(Da, n), s = $t(Da, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(Co, { ...o, ...r, ref: t }) : null;
  }
);
vu.displayName = Da;
var yb = "SelectBubbleInput", gu = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = m.useRef(null), a = de(r, o), s = mo(t);
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
        style: { ...fc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
gu.displayName = yb;
function xu(e) {
  return e === "" || e === void 0;
}
function bu(e) {
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
function yu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = wb(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((d) => d !== n));
  const l = s.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function wb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Cb = Gd, Sb = Kd, kb = qd, Nb = Xd, Mb = Zd, Eb = Qd, Pb = nu, Rb = ou, Ab = su, Db = cu, jb = lu, Ob = uu, _b = fu, Ib = mu, Tb = hu, $b = vu, Do = "Switch", [Fb] = Te(Do), [Lb, Wb] = Fb(Do), wu = m.forwardRef(
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
    } = e, [p, h] = m.useState(null), x = de(t, (y) => h(y)), v = m.useRef(!1), g = p ? u || !!p.closest("form") : !0, [w, b] = Be({
      prop: o,
      defaultProp: a ?? !1,
      onChange: d,
      caller: Do
    });
    return /* @__PURE__ */ c.jsxs(Lb, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": s,
          "data-state": Nu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...f,
          ref: x,
          onClick: z(e.onClick, (y) => {
            b((N) => !N), g && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ c.jsx(
        ku,
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
wu.displayName = Do;
var Cu = "SwitchThumb", Su = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Wb(Cu, n);
    return /* @__PURE__ */ c.jsx(
      X.span,
      {
        "data-state": Nu(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Su.displayName = Cu;
var Vb = "SwitchBubbleInput", ku = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = m.useRef(null), i = de(s, a), l = mo(n), d = po(t);
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
ku.displayName = Vb;
function Nu(e) {
  return e ? "checked" : "unchecked";
}
var Bb = wu, zb = Su, jo = "Tabs", [Hb] = Te(jo, [
  yn
]), Mu = yn(), [Gb, Os] = Hb(jo), Eu = m.forwardRef(
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
    } = e, u = gn(i), [f, p] = Be({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: jo
    });
    return /* @__PURE__ */ c.jsx(
      Gb,
      {
        scope: n,
        baseId: Ee(),
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
Eu.displayName = jo;
var Pu = "TabsList", Ru = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Os(Pu, n), s = Mu(n);
    return /* @__PURE__ */ c.jsx(
      xs,
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
Ru.displayName = Pu;
var Au = "TabsTrigger", Du = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Os(Au, n), i = Mu(n), l = Ou(s.baseId, r), d = _u(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ c.jsx(
      bs,
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
Du.displayName = Au;
var ju = "TabsContent", Yb = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Os(ju, n), l = Ou(i.baseId, r), d = _u(i.baseId, r), u = r === i.value, f = m.useRef(u);
    return m.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ c.jsx($e, { present: o || u, children: ({ present: p }) => /* @__PURE__ */ c.jsx(
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
Yb.displayName = ju;
function Ou(e, t) {
  return `${e}-trigger-${t}`;
}
function _u(e, t) {
  return `${e}-content-${t}`;
}
var Kb = Eu, Ub = Ru, qb = Du, _s = "ToastProvider", [Is, Xb, Zb] = Kn("Toast"), [Iu] = Te("Toast", [Zb]), [Qb, Oo] = Iu(_s), Tu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: a = 50,
    children: s
  } = e, [i, l] = m.useState(null), [d, u] = m.useState(0), f = m.useRef(!1), p = m.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${_s}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ c.jsx(Is.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
    Qb,
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
Tu.displayName = _s;
var $u = "ToastViewport", Jb = ["F8"], ja = "toast.viewportPause", Oa = "toast.viewportResume", Fu = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Jb,
      label: o = "Notifications ({hotkey})",
      ...a
    } = e, s = Oo($u, n), i = Xb(n), l = m.useRef(null), d = m.useRef(null), u = m.useRef(null), f = m.useRef(null), p = de(t, f, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
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
            const P = new CustomEvent(ja);
            w.dispatchEvent(P), s.isClosePausedRef.current = !0;
          }
        }, y = () => {
          if (s.isClosePausedRef.current) {
            const P = new CustomEvent(Oa);
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
          const N = y.ref.current, C = [N, ...fy(N)];
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
            const E = document.activeElement, O = b.shiftKey;
            if (b.target === g && O) {
              (C = d.current) == null || C.focus();
              return;
            }
            const L = v({ tabbingDirection: O ? "backwards" : "forwards" }), H = L.findIndex((T) => T === E);
            ia(L.slice(H + 1)) ? b.preventDefault() : O ? (P = d.current) == null || P.focus() : (S = u.current) == null || S.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, v]), /* @__PURE__ */ c.jsxs(
      Mh,
      {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ c.jsx(
            _a,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "forwards"
                });
                ia(g);
              }
            }
          ),
          /* @__PURE__ */ c.jsx(Is.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(X.ol, { tabIndex: -1, ...a, ref: p }) }),
          x && /* @__PURE__ */ c.jsx(
            _a,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const g = v({
                  tabbingDirection: "backwards"
                });
                ia(g);
              }
            }
          )
        ]
      }
    );
  }
);
Fu.displayName = $u;
var Lu = "ToastFocusProxy", _a = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, a = Oo(Lu, n);
    return /* @__PURE__ */ c.jsx(
      oo,
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
_a.displayName = Lu;
var nr = "Toast", ey = "toast.swipeStart", ty = "toast.swipeMove", ny = "toast.swipeCancel", ry = "toast.swipeEnd", Wu = m.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e, [i, l] = Be({
      prop: r,
      defaultProp: o ?? !0,
      onChange: a,
      caller: nr
    });
    return /* @__PURE__ */ c.jsx($e, { present: n || i, children: /* @__PURE__ */ c.jsx(
      sy,
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
Wu.displayName = nr;
var [oy, ay] = Iu(nr, {
  onClose() {
  }
}), sy = m.forwardRef(
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
    } = e, v = Oo(nr, n), [g, w] = m.useState(null), b = de(t, (T) => w(T)), y = m.useRef(null), N = m.useRef(null), C = o || v.duration, P = m.useRef(0), S = m.useRef(C), E = m.useRef(0), { onToastAdd: O, onToastRemove: I } = v, F = He(() => {
      var W;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((W = v.viewport) == null || W.focus()), s();
    }), L = m.useCallback(
      (T) => {
        !T || T === 1 / 0 || (window.clearTimeout(E.current), P.current = (/* @__PURE__ */ new Date()).getTime(), E.current = window.setTimeout(F, T));
      },
      [F]
    );
    m.useEffect(() => {
      const T = v.viewport;
      if (T) {
        const W = () => {
          L(S.current), d == null || d();
        }, V = () => {
          const U = (/* @__PURE__ */ new Date()).getTime() - P.current;
          S.current = S.current - U, window.clearTimeout(E.current), l == null || l();
        };
        return T.addEventListener(ja, V), T.addEventListener(Oa, W), () => {
          T.removeEventListener(ja, V), T.removeEventListener(Oa, W);
        };
      }
    }, [v.viewport, C, l, d, L]), m.useEffect(() => {
      a && !v.isClosePausedRef.current && L(C);
    }, [a, C, v.isClosePausedRef, L]), m.useEffect(() => (O(), () => I()), [O, I]);
    const H = m.useMemo(() => g ? Uu(g) : null, [g]);
    return v.viewport ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      H && /* @__PURE__ */ c.jsx(
        iy,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: H
        }
      ),
      /* @__PURE__ */ c.jsx(oy, { scope: n, onClose: F, children: Yn.createPortal(
        /* @__PURE__ */ c.jsx(Is.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Nh,
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
                onKeyDown: z(e.onKeyDown, (T) => {
                  T.key === "Escape" && (i == null || i(T.nativeEvent), T.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, F()));
                }),
                onPointerDown: z(e.onPointerDown, (T) => {
                  T.button === 0 && (y.current = { x: T.clientX, y: T.clientY });
                }),
                onPointerMove: z(e.onPointerMove, (T) => {
                  if (!y.current) return;
                  const W = T.clientX - y.current.x, V = T.clientY - y.current.y, U = !!N.current, j = ["left", "right"].includes(v.swipeDirection), $ = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, Q = j ? $(0, W) : 0, R = j ? 0 : $(0, V), M = T.pointerType === "touch" ? 10 : 2, _ = { x: Q, y: R }, B = { originalEvent: T, delta: _ };
                  U ? (N.current = _, Mr(ty, f, B, {
                    discrete: !1
                  })) : Pi(_, v.swipeDirection, M) ? (N.current = _, Mr(ey, u, B, {
                    discrete: !1
                  }), T.target.setPointerCapture(T.pointerId)) : (Math.abs(W) > M || Math.abs(V) > M) && (y.current = null);
                }),
                onPointerUp: z(e.onPointerUp, (T) => {
                  const W = N.current, V = T.target;
                  if (V.hasPointerCapture(T.pointerId) && V.releasePointerCapture(T.pointerId), N.current = null, y.current = null, W) {
                    const U = T.currentTarget, j = { originalEvent: T, delta: W };
                    Pi(W, v.swipeDirection, v.swipeThreshold) ? Mr(ry, h, j, {
                      discrete: !0
                    }) : Mr(
                      ny,
                      p,
                      j,
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
), iy = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = Oo(nr, t), [a, s] = m.useState(!1), [i, l] = m.useState(!1);
  return dy(() => s(!0)), m.useEffect(() => {
    const d = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ c.jsx(Zt, { asChild: !0, children: /* @__PURE__ */ c.jsx(oo, { ...r, children: a && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, cy = "ToastTitle", Vu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
Vu.displayName = cy;
var ly = "ToastDescription", Bu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(X.div, { ...r, ref: t });
  }
);
Bu.displayName = ly;
var zu = "ToastAction", Hu = m.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ c.jsx(Ku, { altText: n, asChild: !0, children: /* @__PURE__ */ c.jsx(Yu, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${zu}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Hu.displayName = zu;
var Gu = "ToastClose", Yu = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = ay(Gu, n);
    return /* @__PURE__ */ c.jsx(Ku, { asChild: !0, children: /* @__PURE__ */ c.jsx(
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
Yu.displayName = Gu;
var Ku = m.forwardRef((e, t) => {
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
function Uu(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), uy(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", a = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (a) {
          const s = r.dataset.radixToastAnnounceAlt;
          s && t.push(s);
        } else
          t.push(...Uu(r));
    }
  }), t;
}
function Mr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? qa(o, a) : o.dispatchEvent(a);
}
var Pi = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), a = r > o;
  return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function dy(e = () => {
}) {
  const t = He(e);
  Ie(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function uy(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function fy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ia(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var my = Tu, py = Fu, hy = Wu, vy = Vu, gy = Bu, xy = Hu, [_o] = Te("Tooltip", [
  _t
]), Io = _t(), qu = "TooltipProvider", by = 700, Ia = "tooltip.open", [yy, Ts] = _o(qu), Xu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = by,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = m.useRef(!0), i = m.useRef(!1), l = m.useRef(0);
  return m.useEffect(() => {
    const d = l.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ c.jsx(
    yy,
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
Xu.displayName = qu;
var zn = "Tooltip", [wy, rr] = _o(zn), Zu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = Ts(zn, e.__scopeTooltip), d = Io(t), [u, f] = m.useState(null), p = Ee(), h = m.useRef(0), x = s ?? l.disableHoverableContent, v = i ?? l.delayDuration, g = m.useRef(!1), [w, b] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (l.onOpen(), document.dispatchEvent(new CustomEvent(Ia))) : l.onClose(), a == null || a(S);
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
  }, []), /* @__PURE__ */ c.jsx(yo, { ...d, children: /* @__PURE__ */ c.jsx(
    wy,
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
Zu.displayName = zn;
var Ta = "TooltipTrigger", Qu = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = rr(Ta, n), a = Ts(Ta, n), s = Io(n), i = m.useRef(null), l = de(t, i, o.onTriggerChange), d = m.useRef(!1), u = m.useRef(!1), f = m.useCallback(() => d.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ c.jsx(Zn, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
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
Qu.displayName = Ta;
var $s = "TooltipPortal", [Cy, Sy] = _o($s, {
  forceMount: void 0
}), Ju = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = rr($s, t);
  return /* @__PURE__ */ c.jsx(Cy, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx($e, { present: n || a.open, children: /* @__PURE__ */ c.jsx(Zt, { asChild: !0, container: o, children: r }) }) });
};
Ju.displayName = $s;
var pn = "TooltipContent", ef = m.forwardRef(
  (e, t) => {
    const n = Sy(pn, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = rr(pn, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx($e, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(tf, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(ky, { side: o, ...a, ref: t }) });
  }
), ky = m.forwardRef((e, t) => {
  const n = rr(pn, e.__scopeTooltip), r = Ts(pn, e.__scopeTooltip), o = m.useRef(null), a = de(t, o), [s, i] = m.useState(null), { trigger: l, onClose: d } = n, u = o.current, { onPointerInTransitChange: f } = r, p = m.useCallback(() => {
    i(null), f(!1);
  }, [f]), h = m.useCallback(
    (x, v) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, b = Ry(w, g.getBoundingClientRect()), y = Ay(w, b), N = Dy(v.getBoundingClientRect()), C = Oy([...y, ...N]);
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
        const g = v.target, w = { x: v.clientX, y: v.clientY }, b = (l == null ? void 0 : l.contains(g)) || (u == null ? void 0 : u.contains(g)), y = !jy(w, s);
        b ? p() : y && (p(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, u, s, d, p]), /* @__PURE__ */ c.jsx(tf, { ...e, ref: a });
}), [Ny, My] = _o(zn, { isInside: !1 }), Ey = /* @__PURE__ */ uc("TooltipContent"), tf = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = rr(pn, n), d = Io(n), { onClose: u } = l;
    return m.useEffect(() => (document.addEventListener(Ia, u), () => document.removeEventListener(Ia, u)), [u]), m.useEffect(() => {
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
          wo,
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
              /* @__PURE__ */ c.jsx(Ey, { children: r }),
              /* @__PURE__ */ c.jsx(Ny, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx(Vp, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
ef.displayName = pn;
var nf = "TooltipArrow", Py = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Io(n);
    return My(
      nf,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(Co, { ...o, ...r, ref: t });
  }
);
Py.displayName = nf;
function Ry(e, t) {
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
function Ay(e, t, n = 5) {
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
function Dy(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function jy(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], d = i.x, u = i.y, f = l.x, p = l.y;
    u > r != p > r && n < (f - d) * (r - u) / (p - u) + d && (o = !o);
  }
  return o;
}
function Oy(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), _y(t);
}
function _y(e) {
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
var Iy = Xu, Ty = Zu, $y = Qu, Fy = Ju, Ly = ef;
function rf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = rf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function of() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = rf(e)) && (r && (r += " "), r += t);
  return r;
}
const Ri = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ai = of, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Ai(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], f = a == null ? void 0 : a[d];
    if (u === null) return null;
    const p = Ri(u) || Ri(f);
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
  return Ai(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Fs = "-", Wy = (e) => {
  const t = By(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(Fs);
      return i[0] === "" && i.length !== 1 && i.shift(), af(i, t) || Vy(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, af = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? af(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(Fs);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Di = /^\[(.+)\]$/, Vy = (e) => {
  if (Di.test(e)) {
    const t = Di.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, By = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    $a(n[o], r, o, t);
  return r;
}, $a = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : ji(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (zy(o)) {
        $a(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      $a(s, ji(t, a), n, r);
    });
  });
}, ji = (e, t) => {
  let n = e;
  return t.split(Fs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, zy = (e) => e.isThemeGetter, Hy = (e) => {
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
}, Fa = "!", La = ":", Gy = La.length, Yy = (e) => {
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
        if (v === La) {
          a.push(o.slice(l, x)), l = x + Gy;
          continue;
        }
        if (v === "/") {
          d = x;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? i++ : v === ")" && i--;
    }
    const u = a.length === 0 ? o : o.substring(l), f = Ky(u), p = f !== u, h = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const o = t + La, a = r;
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
}, Ky = (e) => e.endsWith(Fa) ? e.substring(0, e.length - 1) : e.startsWith(Fa) ? e.substring(1) : e, Uy = (e) => {
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
}, qy = (e) => ({
  cache: Hy(e.cacheSize),
  parseClassName: Yy(e),
  sortModifiers: Uy(e),
  ...Wy(e)
}), Xy = /\s+/, Zy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Xy);
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
    const b = a(p).join(":"), y = h ? b + Fa : b, N = y + w;
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
function Qy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = sf(t)) && (r && (r += " "), r += n);
  return r;
}
const sf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = sf(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Oi(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const d = t.reduce((u, f) => f(u), e());
    return n = qy(d), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const d = r(l);
    if (d)
      return d;
    const u = Zy(l, n);
    return o(l, u), u;
  }
  return function() {
    return a(Qy.apply(null, arguments));
  };
}
const Re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, cf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, lf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jy = /^\d+\/\d+$/, ew = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ow = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, on = (e) => Jy.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), Mt = (e) => !!e && Number.isInteger(Number(e)), ca = (e) => e.endsWith("%") && ue(e.slice(0, -1)), gt = (e) => ew.test(e), aw = () => !0, sw = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tw.test(e) && !nw.test(e)
), df = () => !1, iw = (e) => rw.test(e), cw = (e) => ow.test(e), lw = (e) => !ee(e) && !te(e), dw = (e) => Cn(e, mf, df), ee = (e) => cf.test(e), Vt = (e) => Cn(e, pf, sw), la = (e) => Cn(e, hw, ue), _i = (e) => Cn(e, uf, df), uw = (e) => Cn(e, ff, cw), Er = (e) => Cn(e, hf, iw), te = (e) => lf.test(e), jn = (e) => Sn(e, pf), fw = (e) => Sn(e, vw), Ii = (e) => Sn(e, uf), mw = (e) => Sn(e, mf), pw = (e) => Sn(e, ff), Pr = (e) => Sn(e, hf, !0), Cn = (e, t, n) => {
  const r = cf.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Sn = (e, t, n = !1) => {
  const r = lf.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, uf = (e) => e === "position" || e === "percentage", ff = (e) => e === "image" || e === "url", mf = (e) => e === "length" || e === "size" || e === "bg-size", pf = (e) => e === "length", hw = (e) => e === "number", vw = (e) => e === "family-name", hf = (e) => e === "shadow", Ti = () => {
  const e = Re("color"), t = Re("font"), n = Re("text"), r = Re("font-weight"), o = Re("tracking"), a = Re("leading"), s = Re("breakpoint"), i = Re("container"), l = Re("spacing"), d = Re("radius"), u = Re("shadow"), f = Re("inset-shadow"), p = Re("text-shadow"), h = Re("drop-shadow"), x = Re("blur"), v = Re("perspective"), g = Re("aspect"), w = Re("ease"), b = Re("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
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
  ], C = () => [...N(), te, ee], P = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], E = () => [te, ee, l], O = () => [on, "full", "auto", ...E()], I = () => [Mt, "none", "subgrid", te, ee], F = () => ["auto", {
    span: ["full", Mt, te, ee]
  }, Mt, te, ee], L = () => [Mt, "auto", te, ee], H = () => ["auto", "min", "max", "fr", te, ee], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...E()], U = () => [on, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...E()], j = () => [e, te, ee], $ = () => [...N(), Ii, _i, {
    position: [te, ee]
  }], Q = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], R = () => ["auto", "cover", "contain", mw, dw, {
    size: [te, ee]
  }], M = () => [ca, jn, Vt], _ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    te,
    ee
  ], B = () => ["", ue, jn, Vt], K = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [ue, ca, Ii, _i], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    te,
    ee
  ], J = () => ["none", ue, te, ee], se = () => ["none", ue, te, ee], he = () => [ue, te, ee], fe = () => [on, "full", ...E()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [gt],
      breakpoint: [gt],
      color: [aw],
      container: [gt],
      "drop-shadow": [gt],
      ease: ["in", "out", "in-out"],
      font: [lw],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [gt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [gt],
      shadow: [gt],
      spacing: ["px", ue],
      text: [gt],
      "text-shadow": [gt],
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
        aspect: ["auto", "square", on, ee, te, g]
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
        basis: [on, "full", "auto", i, ...E()]
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
        flex: [ue, on, "auto", "initial", "none", ee]
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
        "grid-cols": I()
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
        "grid-rows": I()
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
        justify: [...T(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...T()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": T()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
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
        font: [r, te, la]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ca, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fw, ee, t]
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
        "line-clamp": [ue, "none", te, la]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...E()
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
        indent: E()
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
        bg: Q()
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
        }, pw, uw]
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
        rounded: _()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": _()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": _()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": _()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": _()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": _()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": _()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": _()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": _()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": _()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": _()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": _()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": _()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": _()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": _()
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
          Pr,
          Er
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
        "inset-shadow": ["none", f, Pr, Er]
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
        "text-shadow": ["none", p, Pr, Er]
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
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        mask: Q()
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
        blur: Z()
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
          Pr,
          Er
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
        "backdrop-blur": Z()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
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
        stroke: [ue, jn, Vt, la]
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
}, gw = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: a = {}
}) => (Tn(e, "cacheSize", t), Tn(e, "prefix", n), Tn(e, "experimentalParseClassName", r), Rr(e.theme, a.theme), Rr(e.classGroups, a.classGroups), Rr(e.conflictingClassGroups, a.conflictingClassGroups), Rr(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), Tn(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), Ar(e.theme, o.theme), Ar(e.classGroups, o.classGroups), Ar(e.conflictingClassGroups, o.conflictingClassGroups), Ar(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), vf(e, o, "orderSensitiveModifiers"), e), Tn = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Rr = (e, t) => {
  if (t)
    for (const n in t)
      Tn(e, n, t[n]);
}, Ar = (e, t) => {
  if (t)
    for (const n in t)
      vf(e, t, n);
}, vf = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, xw = (e, ...t) => typeof e == "function" ? Oi(Ti, e, ...t) : Oi(() => gw(Ti(), e), ...t), bw = xw({
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
}), A = (...e) => bw(of(e)), _e = (e, t = {}) => {
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
}, yw = ae(
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
), ww = ae(
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
), Wa = k.forwardRef(
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
      className: A(ww({ intent: r }), a),
      ...i
    };
    return t !== void 0 && (d.onSelect = t), n !== void 0 && (d.disabled = n), s ? /* @__PURE__ */ c.jsx(ki, { ...d, children: e }) : /* @__PURE__ */ c.jsxs(ki, { ...d, children: [
      _e(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Wa.displayName = "DropdownItem";
const Cw = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  M0,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
Cw.displayName = "DropdownSeparator";
const Sw = k.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  N0,
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
Sw.displayName = "DropdownLabel";
const Ls = k.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(S0, { children: /* @__PURE__ */ c.jsx(
  k0,
  {
    ref: o,
    className: A(yw({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Ls.displayName = "DropdownContent";
const Ws = ({
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
  return t !== void 0 && (a.open = t), n !== void 0 && (a.onOpenChange = n), /* @__PURE__ */ c.jsx(w0, { ...a, children: e });
};
Ws.displayName = "Dropdown";
const Vs = k.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ c.jsx(
  C0,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Vs.displayName = "DropdownTrigger";
const PN = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ c.jsx("div", { className: r, children: /* @__PURE__ */ c.jsxs(Ws, { children: [
  /* @__PURE__ */ c.jsx(
    Vs,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ c.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ c.jsx(kp, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ c.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ c.jsx(
          ro,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ c.jsxs(Ls, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), gf = k.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...a
  }, s) => e === "single" ? /* @__PURE__ */ c.jsx(
    Js,
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
    Js,
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
gf.displayName = "Accordion";
const xf = k.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    ph,
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
xf.displayName = "AccordionItem";
const bf = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(hh, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  vh,
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
        ro,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
bf.displayName = "AccordionTrigger";
const yf = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  gh,
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
yf.displayName = "AccordionContent";
const RN = Object.assign(gf, {
  Item: xf,
  Trigger: bf,
  Content: yf
}), $i = ae(
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
), kw = k.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...a
  }, s) => {
    const l = t || (e === "danger" ? Ep : void 0);
    return o ? /* @__PURE__ */ c.jsx(
      vn,
      {
        className: A($i({ intent: e }), n),
        ref: s,
        ...a,
        children: r
      }
    ) : /* @__PURE__ */ c.jsxs(
      "span",
      {
        className: A($i({ intent: e }), n),
        ref: s,
        ...a,
        children: [
          e === "danger" && l && _e(l, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
kw.displayName = "Badge";
const Nw = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Dr = ae(
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
), Mw = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), Ew = k.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = ac,
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
        className: A(Nw({ size: t }), o),
        ...s,
        children: /* @__PURE__ */ c.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: l.map((d, u) => {
          const f = u === l.length - 1, p = d.label === "…";
          return /* @__PURE__ */ c.jsxs(k.Fragment, { children: [
            /* @__PURE__ */ c.jsx("li", { className: "min-w-0 flex items-center", children: p ? /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Dr({ isActive: !0 })),
                children: d.label
              }
            ) : d.asChild ? /* @__PURE__ */ c.jsx(
              vn,
              {
                onClick: d.onClick,
                className: A(
                  Dr({ isActive: f })
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
                  Dr({ isActive: f })
                ),
                "aria-current": f ? "page" : void 0,
                children: d.label
              }
            ) : /* @__PURE__ */ c.jsx(
              "span",
              {
                className: A(Dr({ isActive: !0 })),
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
                    className: A(Mw({ size: t }))
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
Ew.displayName = "Breadcrumbs";
const Pw = ae(
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
), wf = k.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...a
  }, s) => /* @__PURE__ */ c.jsx(
    z0,
    {
      ref: s,
      className: A(Pw({ size: r }), o),
      value: e,
      max: t,
      ...a,
      children: /* @__PURE__ */ c.jsx(
        H0,
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
wf.displayName = "ProgressIndicator.Linear";
const Rw = ae("flex items-center", {
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
}), Aw = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, eo = {
  sm: 12,
  md: 10
}, Fi = {
  sm: (50 - eo.sm / 2).toString(),
  md: (50 - eo.md / 2).toString()
}, Cf = k.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, a) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      role: "status",
      className: A(Rw({ size: t, layout: e }), r),
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
            className: A(Aw[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Fi[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: eo[t]
                }
              ),
              /* @__PURE__ */ c.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Fi[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: eo[t],
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
Cf.displayName = "ProgressIndicator.Circular";
const To = {
  Linear: wf,
  Circular: Cf
}, da = ae(
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
), jr = ae("", {
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
}), Ae = k.forwardRef(
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
    const f = a ? vn : "button", p = !!((r || o) && !l && !(r && o)), h = !!(l && !r && !o), x = s || d.disabled;
    return s ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          da({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          "relative",
          n
        ),
        ...d,
        disabled: x,
        children: [
          /* @__PURE__ */ c.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            _e(r, {
              className: A(
                jr({ size: t, iconOnly: p, text: e === "text" })
              )
            }),
            l,
            _e(o, {
              className: A(
                jr({ size: t, iconOnly: p, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ c.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ c.jsx(To.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ c.jsxs(
      f,
      {
        ref: u,
        className: A(
          da({ intent: e, size: t, iconOnly: p, textOnly: h, danger: i }),
          n
        ),
        ...d,
        disabled: x,
        children: [
          _e(r, {
            className: A(
              jr({ size: t, iconOnly: p, text: e === "text" })
            )
          }),
          l,
          _e(o, {
            className: A(
              jr({ size: t, iconOnly: p, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ c.jsx(
      f,
      {
        ref: u,
        className: A(
          da({ intent: e, size: t, textOnly: h, danger: i }),
          n
        ),
        children: l,
        ...d,
        disabled: x
      }
    );
  }
);
Ae.displayName = "Button";
function Dw(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const ua = {}, $n = {};
function zt(e, t) {
  try {
    const r = (ua[e] || (ua[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in $n ? $n[r] : Li(r, r.split(":"));
  } catch {
    if (e in $n) return $n[e];
    const n = e == null ? void 0 : e.match(jw);
    return n ? Li(e, n.slice(1)) : NaN;
  }
}
const jw = /([+-]\d\d):?(\d\d)?/;
function Li(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return $n[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class dt extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(zt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Sf(this), Va(this)) : this.setTime(Date.now());
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
    const t = -zt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Va(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Wi = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Wi.test(e)) return;
  const t = e.replace(Wi, "$1UTC");
  dt.prototype[t] && (e.startsWith("get") ? dt.prototype[e] = function() {
    return this.internal[t]();
  } : (dt.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Ow(this), +this;
  }, dt.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Va(this), +this;
  }));
});
function Va(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-zt(e.timeZone, e) * 60));
}
function Ow(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Sf(e);
}
function Sf(e) {
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
class Fe extends dt {
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
    return `${t} GMT${n}${r}${o} (${Dw(this.timeZone, this)})`;
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
const kf = 6048e5, _w = 864e5, Vi = Symbol.for("constructDateFrom");
function De(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Vi in e ? e[Vi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function we(e, t) {
  return De(t || e, e);
}
function Nf(e, t, n) {
  const r = we(e, n == null ? void 0 : n.in);
  return isNaN(t) ? De(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Mf(e, t, n) {
  const r = we(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return De(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = De(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let Iw = {};
function or() {
  return Iw;
}
function hn(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = we(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Hn(e, t) {
  return hn(e, { ...t, weekStartsOn: 1 });
}
function Ef(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = De(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Hn(o), s = De(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Hn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Bi(e) {
  const t = we(e), n = new Date(
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
function kn(e, ...t) {
  const n = De.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Gn(e, t) {
  const n = we(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Pf(e, t, n) {
  const [r, o] = kn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Gn(r), s = Gn(o), i = +a - Bi(a), l = +s - Bi(s);
  return Math.round((i - l) / _w);
}
function Tw(e, t) {
  const n = Ef(e, t), r = De(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Hn(r);
}
function $w(e, t, n) {
  return Nf(e, t * 7, n);
}
function Fw(e, t, n) {
  return Mf(e, t * 12, n);
}
function Lw(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = we(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function Ww(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = De.bind(null, o));
    const a = we(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), De(r, n || NaN);
}
function Vw(e, t, n) {
  const [r, o] = kn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Gn(r) == +Gn(o);
}
function Rf(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Bw(e) {
  return !(!Rf(e) && typeof e != "number" || isNaN(+we(e)));
}
function zw(e, t, n) {
  const [r, o] = kn(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Hw(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Gw(e, t) {
  const [n, r] = kn(e, t.start, t.end);
  return { start: n, end: r };
}
function Yw(e, t) {
  const { start: n, end: r } = Gw(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(De(n, s)), s.setMonth(s.getMonth() + i);
  return o ? l.reverse() : l;
}
function Kw(e, t) {
  const n = we(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Uw(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Af(e, t) {
  const n = we(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Df(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = we(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function qw(e, t) {
  return Df(e, { ...t, weekStartsOn: 1 });
}
const Xw = {
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
}, Zw = (e, t, n) => {
  let r;
  const o = Xw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function un(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Qw = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Jw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, e1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, t1 = {
  date: un({
    formats: Qw,
    defaultWidth: "full"
  }),
  time: un({
    formats: Jw,
    defaultWidth: "full"
  }),
  dateTime: un({
    formats: e1,
    defaultWidth: "full"
  })
}, n1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, r1 = (e, t, n, r) => n1[e];
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
const o1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, a1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, s1 = {
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
}, i1 = {
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
}, c1 = {
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
}, l1 = {
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
}, d1 = (e, t) => {
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
}, u1 = {
  ordinalNumber: d1,
  era: it({
    values: o1,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: a1,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: it({
    values: s1,
    defaultWidth: "wide"
  }),
  day: it({
    values: i1,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: c1,
    defaultWidth: "wide",
    formattingValues: l1,
    defaultFormattingWidth: "wide"
  })
};
function ct(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? m1(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      f1(i, (f) => f.test(s))
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
function f1(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function m1(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function jf(e) {
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
const p1 = /^(\d+)(th|st|nd|rd)?/i, h1 = /\d+/i, v1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, g1 = {
  any: [/^b/i, /^(a|c)/i]
}, x1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, b1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, y1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, w1 = {
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
}, C1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, S1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, k1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, N1 = {
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
}, M1 = {
  ordinalNumber: jf({
    matchPattern: p1,
    parsePattern: h1,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ct({
    matchPatterns: v1,
    defaultMatchWidth: "wide",
    parsePatterns: g1,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: x1,
    defaultMatchWidth: "wide",
    parsePatterns: b1,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: y1,
    defaultMatchWidth: "wide",
    parsePatterns: w1,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: C1,
    defaultMatchWidth: "wide",
    parsePatterns: S1,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: k1,
    defaultMatchWidth: "any",
    parsePatterns: N1,
    defaultParseWidth: "any"
  })
}, $o = {
  code: "en-US",
  formatDistance: Zw,
  formatLong: t1,
  formatRelative: r1,
  localize: u1,
  match: M1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function E1(e, t) {
  const n = we(e, t == null ? void 0 : t.in);
  return Pf(n, Af(n)) + 1;
}
function Of(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = +Hn(n) - +Tw(n);
  return Math.round(r / kf) + 1;
}
function _f(e, t) {
  var u, f, p, h;
  const n = we(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = or(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((h = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = De((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = hn(s, t), l = De((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const d = hn(l, t);
  return +n >= +i ? r + 1 : +n >= +d ? r : r - 1;
}
function P1(e, t) {
  var i, l, d, u;
  const n = or(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = _f(e, t), a = De((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), hn(a, t);
}
function If(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = +hn(n, t) - +P1(n, t);
  return Math.round(r / kf) + 1;
}
function be(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Et = {
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
}, an = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zi = {
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
    return Et.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = _f(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return be(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : be(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Ef(e);
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
        return Et.M(e, t);
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
    const o = If(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : be(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Of(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : be(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Et.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = E1(e);
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
    switch (r === 12 ? o = an.noon : r === 0 ? o = an.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = an.evening : r >= 12 ? o = an.afternoon : r >= 4 ? o = an.morning : o = an.night, t) {
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
    return Et.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Et.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Et.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Et.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Et.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Gi(r);
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
        return Gi(r);
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
        return "GMT" + Hi(r, ":");
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
        return "GMT" + Hi(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + Bt(r, ":");
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
function Hi(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + be(a, 2);
}
function Gi(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + be(Math.abs(e) / 60, 2) : Bt(e, t);
}
function Bt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = be(Math.trunc(r / 60), 2), a = be(r % 60, 2);
  return n + o + t + a;
}
const Yi = (e, t) => {
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
}, Tf = (e, t) => {
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
}, R1 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Yi(e, t);
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
  return a.replace("{{date}}", Yi(r, t)).replace("{{time}}", Tf(o, t));
}, A1 = {
  p: Tf,
  P: R1
}, D1 = /^D+$/, j1 = /^Y+$/, O1 = ["D", "DD", "YY", "YYYY"];
function _1(e) {
  return D1.test(e);
}
function I1(e) {
  return j1.test(e);
}
function T1(e, t, n) {
  const r = $1(e, t, n);
  if (console.warn(r), O1.includes(e)) throw new RangeError(r);
}
function $1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const F1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, L1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, W1 = /^'([^]*?)'?$/, V1 = /''/g, B1 = /[a-zA-Z]/;
function z1(e, t, n) {
  var u, f, p, h, x, v, g, w;
  const r = or(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? $o, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((h = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : h.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((w = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : w.weekStartsOn) ?? 0, i = we(e, n == null ? void 0 : n.in);
  if (!Bw(i))
    throw new RangeError("Invalid time value");
  let l = t.match(L1).map((b) => {
    const y = b[0];
    if (y === "p" || y === "P") {
      const N = A1[y];
      return N(b, o.formatLong);
    }
    return b;
  }).join("").match(F1).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const y = b[0];
    if (y === "'")
      return { isToken: !1, value: H1(b) };
    if (zi[y])
      return { isToken: !0, value: b };
    if (y.match(B1))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && I1(y) || !(n != null && n.useAdditionalDayOfYearTokens) && _1(y)) && T1(y, t, String(e));
    const N = zi[y[0]];
    return N(i, y, o.localize, d);
  }).join("");
}
function H1(e) {
  const t = e.match(W1);
  return t ? t[1].replace(V1, "'") : e;
}
function G1(e, t) {
  const n = we(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = De(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Y1(e, t) {
  return we(e, t == null ? void 0 : t.in).getMonth();
}
function K1(e, t) {
  return we(e, t == null ? void 0 : t.in).getFullYear();
}
function U1(e, t) {
  return +we(e) > +we(t);
}
function q1(e, t) {
  return +we(e) < +we(t);
}
function X1(e, t, n) {
  const [r, o] = kn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Z1(e, t, n) {
  const [r, o] = kn(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Q1(e, t, n) {
  const r = we(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = De(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = G1(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function J1(e, t, n) {
  const r = we(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? De(e, NaN) : (r.setFullYear(t), r);
}
const Ki = 5, e2 = 4;
function t2(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Ki * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Ki : e2;
}
function $f(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function n2(e, t) {
  const n = $f(e, t), r = t2(e, t);
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
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? Fe.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new Fe(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : Nf(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Mf(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : $w(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Fw(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : Pf(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : zw(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Yw(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : n2(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : qw(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Hw(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Df(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Uw(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : z1(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : Of(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Y1(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : K1(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : If(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : U1(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : q1(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Rf(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Vw(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : X1(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : Z1(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Lw(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : Ww(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : Q1(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : J1(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : $f(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Gn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Hn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Kw(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : hn(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Af(r);
    }, this.options = { locale: $o, ...t }, this.overrides = n;
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
const pt = new Xe();
class Ff {
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
class r2 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class o2 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function a2(e) {
  return k.createElement("button", { ...e });
}
function s2(e) {
  return k.createElement("span", { ...e });
}
function i2(e) {
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
function c2(e) {
  const { day: t, modifiers: n, ...r } = e;
  return k.createElement("td", { ...r });
}
function l2(e) {
  const { day: t, modifiers: n, ...r } = e, o = k.useRef(null);
  return k.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), k.createElement("button", { ref: o, ...r });
}
var re;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(re || (re = {}));
var ke;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ke || (ke = {}));
var et;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(et || (et = {}));
var Ke;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ke || (Ke = {}));
function d2(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[re.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: l }) => l === a.value);
  return k.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[re.DropdownRoot] },
    k.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: l, label: d, disabled: u }) => k.createElement(r.Option, { key: l, value: l, disabled: u }, d))),
    k.createElement(
      "span",
      { className: o[re.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      k.createElement(r.Chevron, { orientation: "down", size: 18, className: o[re.Chevron] })
    )
  );
}
function u2(e) {
  return k.createElement("div", { ...e });
}
function f2(e) {
  return k.createElement("div", { ...e });
}
function m2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return k.createElement("div", { ...r }, e.children);
}
function p2(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return k.createElement("div", { ...r });
}
function h2(e) {
  return k.createElement("table", { ...e });
}
function v2(e) {
  return k.createElement("div", { ...e });
}
const Lf = no(void 0);
function ar() {
  const e = zr(Lf);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function g2(e) {
  const { components: t } = ar();
  return k.createElement(t.Dropdown, { ...e });
}
function x2(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: l, labelNext: d } } = ar(), u = ge((p) => {
    o && (n == null || n(p));
  }, [o, n]), f = ge((p) => {
    r && (t == null || t(p));
  }, [r, t]);
  return k.createElement(
    "nav",
    { ...a },
    k.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[re.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": l(r), onClick: f },
      k.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[re.Chevron], orientation: "left" })
    ),
    k.createElement(
      s.NextMonthButton,
      { type: "button", className: i[re.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": d(o), onClick: u },
      k.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[re.Chevron] })
    )
  );
}
function b2(e) {
  const { components: t } = ar();
  return k.createElement(t.Button, { ...e });
}
function y2(e) {
  return k.createElement("option", { ...e });
}
function w2(e) {
  const { components: t } = ar();
  return k.createElement(t.Button, { ...e });
}
function C2(e) {
  const { rootRef: t, ...n } = e;
  return k.createElement("div", { ...n, ref: t });
}
function S2(e) {
  return k.createElement("select", { ...e });
}
function k2(e) {
  const { week: t, ...n } = e;
  return k.createElement("tr", { ...n });
}
function N2(e) {
  return k.createElement("th", { ...e });
}
function M2(e) {
  return k.createElement(
    "thead",
    { "aria-hidden": !0 },
    k.createElement("tr", { ...e })
  );
}
function E2(e) {
  const { week: t, ...n } = e;
  return k.createElement("th", { ...n });
}
function P2(e) {
  return k.createElement("th", { ...e });
}
function R2(e) {
  return k.createElement("tbody", { ...e });
}
function A2(e) {
  const { components: t } = ar();
  return k.createElement(t.Dropdown, { ...e });
}
const D2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: a2,
  CaptionLabel: s2,
  Chevron: i2,
  Day: c2,
  DayButton: l2,
  Dropdown: d2,
  DropdownNav: u2,
  Footer: f2,
  Month: m2,
  MonthCaption: p2,
  MonthGrid: h2,
  Months: v2,
  MonthsDropdown: g2,
  Nav: x2,
  NextMonthButton: b2,
  Option: y2,
  PreviousMonthButton: w2,
  Root: C2,
  Select: S2,
  Week: k2,
  WeekNumber: E2,
  WeekNumberHeader: P2,
  Weekday: N2,
  Weekdays: M2,
  Weeks: R2,
  YearsDropdown: A2
}, Symbol.toStringTag, { value: "Module" }));
function xt(e, t, n = !1, r = pt) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function Wf(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Bs(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function Vf(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function Bf(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function zf(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Hf(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function bt(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Hf(i, n))
      return i.includes(e);
    if (Bs(i))
      return xt(i, e, !1, n);
    if (zf(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (Wf(i)) {
      const l = a(i.before, e), d = a(i.after, e), u = l > 0, f = d < 0;
      return s(i.before, i.after) ? f && u : u || f;
    }
    return Vf(i) ? a(e, i.after) > 0 : Bf(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function j2(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: l, broadcastCalendar: d, today: u } = t, { isSameDay: f, isSameMonth: p, startOfMonth: h, isBefore: x, endOfMonth: v, isAfter: g } = o, w = n && h(n), b = r && v(r), y = {
    [ke.focused]: [],
    [ke.outside]: [],
    [ke.disabled]: [],
    [ke.hidden]: [],
    [ke.today]: []
  }, N = {};
  for (const C of e) {
    const { date: P, displayMonth: S } = C, E = !!(S && !p(P, S)), O = !!(w && x(P, w)), I = !!(b && g(P, b)), F = !!(a && bt(P, a, o)), L = !!(s && bt(P, s, o)) || O || I || // Broadcast calendar will show outside days as default
    !d && !l && E || d && l === !1 && E, H = f(P, u ?? o.today());
    E && y.outside.push(C), F && y.disabled.push(C), L && y.hidden.push(C), H && y.today.push(C), i && Object.keys(i).forEach((T) => {
      const W = i == null ? void 0 : i[T];
      W && bt(P, W, o) && (N[T] ? N[T].push(C) : N[T] = [C]);
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
    for (const E in y) {
      const O = y[E];
      P[E] = O.some((I) => I === C);
    }
    for (const E in N)
      S[E] = N[E].some((O) => O === C);
    return {
      ...P,
      // custom modifiers should override all the previous ones
      ...S
    };
  };
}
function O2(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ke[a]] ? o.push(t[ke[a]]) : t[et[a]] && o.push(t[et[a]]), o), [t[re.Day]]);
}
function _2(e) {
  return {
    ...D2,
    ...e
  };
}
function I2(e) {
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
function Gf() {
  const e = {};
  for (const t in re)
    e[re[t]] = `rdp-${re[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  for (const t in et)
    e[et[t]] = `rdp-${et[t]}`;
  for (const t in Ke)
    e[Ke[t]] = `rdp-${Ke[t]}`;
  return e;
}
function Yf(e, t, n) {
  return (n ?? new Xe(t)).formatMonthYear(e);
}
const T2 = Yf;
function $2(e, t, n) {
  return (n ?? new Xe(t)).format(e, "d");
}
function F2(e, t = pt) {
  return t.format(e, "LLLL");
}
function L2(e, t, n) {
  return (n ?? new Xe(t)).format(e, "cccccc");
}
function W2(e, t = pt) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function V2() {
  return "";
}
function Kf(e, t = pt) {
  return t.format(e, "yyyy");
}
const B2 = Kf, z2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Yf,
  formatDay: $2,
  formatMonthCaption: T2,
  formatMonthDropdown: F2,
  formatWeekNumber: W2,
  formatWeekNumberHeader: V2,
  formatWeekdayName: L2,
  formatYearCaption: B2,
  formatYearDropdown: Kf
}, Symbol.toStringTag, { value: "Module" }));
function H2(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...z2,
    ...e
  };
}
function G2(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: l, getMonth: d } = o;
  return l({
    start: s(e),
    end: i(e)
  }).map((p) => {
    const h = r.formatMonthDropdown(p, o), x = d(p), v = t && p < a(t) || n && p > a(n) || !1;
    return { value: x, label: h, disabled: v };
  });
}
function Y2(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[re.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function K2(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
  for (let s = 0; s < 7; s++) {
    const i = e.addDays(o, s);
    a.push(i);
  }
  return a;
}
function U2(e, t, n, r, o = !1) {
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
function Uf(e, t, n, r) {
  let o = (r ?? new Xe(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const q2 = Uf;
function qf(e, t, n) {
  return (n ?? new Xe(t)).formatMonthYear(e);
}
const X2 = qf;
function Z2(e, t, n, r) {
  let o = (r ?? new Xe(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Q2(e) {
  return "Choose the Month";
}
function J2() {
  return "";
}
function eC(e) {
  return "Go to the Next Month";
}
function tC(e) {
  return "Go to the Previous Month";
}
function nC(e, t, n) {
  return (n ?? new Xe(t)).format(e, "cccc");
}
function rC(e, t) {
  return `Week ${e}`;
}
function oC(e) {
  return "Week Number";
}
function aC(e) {
  return "Choose the Year";
}
const sC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: X2,
  labelDay: q2,
  labelDayButton: Uf,
  labelGrid: qf,
  labelGridcell: Z2,
  labelMonthDropdown: Q2,
  labelNav: J2,
  labelNext: eC,
  labelPrevious: tC,
  labelWeekNumber: rC,
  labelWeekNumberHeader: oC,
  labelWeekday: nC,
  labelYearDropdown: aC
}, Symbol.toStringTag, { value: "Module" })), sr = (e) => e instanceof HTMLElement ? e : null, fa = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], iC = (e) => sr(e.querySelector("[data-animated-month]")), ma = (e) => sr(e.querySelector("[data-animated-caption]")), pa = (e) => sr(e.querySelector("[data-animated-weeks]")), cC = (e) => sr(e.querySelector("[data-animated-nav]")), lC = (e) => sr(e.querySelector("[data-animated-weekdays]"));
function dC(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = yt(null), i = yt(r), l = yt(!1);
  rc(() => {
    const d = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || d.length === 0 || r.length !== d.length)
      return;
    const u = a.isSameMonth(r[0].date, d[0].date), f = a.isAfter(r[0].date, d[0].date), p = f ? n[Ke.caption_after_enter] : n[Ke.caption_before_enter], h = f ? n[Ke.weeks_after_enter] : n[Ke.weeks_before_enter], x = s.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (fa(v).forEach((y) => {
      if (!(y instanceof HTMLElement))
        return;
      const N = iC(y);
      N && y.contains(N) && y.removeChild(N);
      const C = ma(y);
      C && C.classList.remove(p);
      const P = pa(y);
      P && P.classList.remove(h);
    }), s.current = v) : s.current = null, l.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const g = x instanceof HTMLElement ? fa(x) : [], w = fa(e.current);
    if (w != null && w.every((b) => b instanceof HTMLElement) && g && g.every((b) => b instanceof HTMLElement)) {
      l.current = !0, e.current.style.isolation = "isolate";
      const b = cC(e.current);
      b && (b.style.zIndex = "1"), w.forEach((y, N) => {
        const C = g[N];
        if (!C)
          return;
        y.style.position = "relative", y.style.overflow = "hidden";
        const P = ma(y);
        P && P.classList.add(p);
        const S = pa(y);
        S && S.classList.add(h);
        const E = () => {
          l.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), P && P.classList.remove(p), S && S.classList.remove(h), y.style.position = "", y.style.overflow = "", y.contains(C) && y.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const O = lC(C);
        O && (O.style.opacity = "0");
        const I = ma(C);
        I && (I.classList.add(f ? n[Ke.caption_before_exit] : n[Ke.caption_after_exit]), I.addEventListener("animationend", E));
        const F = pa(C);
        F && F.classList.add(f ? n[Ke.weeks_before_exit] : n[Ke.weeks_after_exit]), y.insertBefore(C, y.firstChild);
      });
    }
  });
}
function uC(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: l } = n ?? {}, { addDays: d, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: p, endOfISOWeek: h, endOfMonth: x, endOfWeek: v, isAfter: g, startOfBroadcastWeek: w, startOfISOWeek: b, startOfWeek: y } = r, N = l ? w(o, r) : s ? b(o) : y(o), C = l ? p(a) : s ? h(x(a)) : v(x(a)), P = u(C, N), S = f(a, o) + 1, E = [];
  for (let F = 0; F <= P; F++) {
    const L = d(N, F);
    if (t && g(L, t))
      break;
    E.push(L);
  }
  const I = (l ? 35 : 42) * S;
  if (i && E.length < I) {
    const F = I - E.length;
    for (let L = 0; L < F; L++) {
      const H = d(E[E.length - 1], 1);
      E.push(H);
    }
  }
  return E;
}
function fC(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function mC(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Ui(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let l = o || a || s;
  const { differenceInCalendarMonths: d, addMonths: u, startOfMonth: f } = r;
  if (n && d(n, l) < i - 1) {
    const p = -1 * (i - 1);
    l = u(n, p);
  }
  return t && d(l, t) < 0 && (l = t), f(l);
}
function pC(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: l, getISOWeek: d, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: p, startOfWeek: h } = r, x = e.reduce((v, g) => {
    const w = n.broadcastCalendar ? f(g, r) : n.ISOWeek ? p(g) : h(g), b = n.broadcastCalendar ? a(g) : n.ISOWeek ? s(i(g)) : l(i(g)), y = t.filter((S) => S >= w && S <= b), N = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && y.length < N) {
      const S = t.filter((E) => {
        const O = N - y.length;
        return E > b && E <= o(b, O);
      });
      y.push(...S);
    }
    const C = y.reduce((S, E) => {
      const O = n.ISOWeek ? d(E) : u(E), I = S.find((L) => L.weekNumber === O), F = new Ff(E, g, r);
      return I ? I.days.push(F) : S.push(new o2(O, [F])), S;
    }, []), P = new r2(g, C);
    return v.push(P), v;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function hC(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: l, endOfYear: d, newDate: u, today: f } = t, { fromYear: p, toYear: h, fromMonth: x, toMonth: v } = e;
  !n && x && (n = x), !n && p && (n = t.newDate(p, 0, 1)), !r && v && (r = v), !r && h && (r = u(h, 11, 31));
  const g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : p ? n = u(p, 0, 1) : !n && g && (n = o(l(e.today ?? f(), -100))), r ? r = i(r) : h ? r = u(h, 11, 31) : !r && g && (r = d(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function vC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a : 1, u = s(e);
  if (!t)
    return i(u, d);
  if (!(l(t, e) < a))
    return i(u, d);
}
function gC(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: l } = r, d = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -d);
  if (!(l(u, t) <= 0))
    return i(u, -d);
}
function xC(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Fo(e, t) {
  const [n, r] = Ve(e);
  return [t === void 0 ? n : t, r];
}
function bC(e, t) {
  const [n, r] = hC(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Ui(e, n, r, t), [i, l] = Fo(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Ht(() => {
    const P = Ui(e, n, r, t);
    l(P);
  }, [e.timeZone]);
  const d = mC(i, r, e, t), u = uC(d, e.endMonth ? a(e.endMonth) : void 0, e, t), f = pC(d, u, e, t), p = xC(f), h = fC(f), x = gC(i, n, e, t), v = vC(i, r, e, t), { disableNavigation: g, onMonthChange: w } = e, b = (P) => p.some((S) => S.days.some((E) => E.isEqualTo(P))), y = (P) => {
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
var at;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(at || (at = {}));
function qi(e) {
  return !e[ke.disabled] && !e[ke.hidden] && !e[ke.outside];
}
function yC(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    qi(i) && (i[ke.focused] && a < at.FocusedModifier ? (o = s, a = at.FocusedModifier) : r != null && r.isEqualTo(s) && a < at.LastFocused ? (o = s, a = at.LastFocused) : n(s.date) && a < at.Selected ? (o = s, a = at.Selected) : i[ke.today] && a < at.Today && (o = s, a = at.Today));
  }
  return o || (o = e.find((s) => qi(t(s)))), o;
}
function wC(e, t, n, r, o, a, s) {
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
function Xf(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const l = wC(e, t, n.date, r, o, a, s), d = !!(a.disabled && bt(l, a.disabled, s)), u = !!(a.hidden && bt(l, a.hidden, s)), f = l, p = new Ff(l, f, s);
  return !d && !u ? p : Xf(e, t, p, r, o, a, s, i + 1);
}
function CC(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Ve(), l = yC(t.days, n, r || (() => !1), s), [d, u] = Ve(a ? l : void 0);
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
      const w = Xf(v, g, d, t.navStart, t.navEnd, e, o);
      w && (t.goToDay(w), u(w));
    }
  };
}
function SC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Fo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t, d = (h) => (i == null ? void 0 : i.some((x) => l(x, h))) ?? !1, { min: u, max: f } = e;
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
function kC(e, t, n = 0, r = 0, o = !1, a = pt) {
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
function NC(e, t, n = pt) {
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
function Xi(e, t, n = pt) {
  return xt(e, t.from, !1, n) || xt(e, t.to, !1, n) || xt(t, e.from, !1, n) || xt(t, e.to, !1, n);
}
function MC(e, t, n = pt) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? xt(e, i, !1, n) : Hf(i, n) ? i.some((l) => xt(e, l, !1, n)) : Bs(i) ? i.from && i.to ? Xi(e, { from: i.from, to: i.to }, n) : !1 : zf(i) ? NC(e, i.dayOfWeek, n) : Wf(i) ? n.isAfter(i.before, i.after) ? Xi(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : bt(e.from, i, n) || bt(e.to, i, n) : Vf(i) || Bf(i) ? bt(e.from, i, n) || bt(e.to, i, n) : !1))
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
function EC(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: a, onSelect: s } = e, [i, l] = Fo(o, s ? o : void 0), d = s ? o : i;
  return {
    selected: d,
    select: (p, h, x) => {
      const { min: v, max: g } = e, w = p ? kC(p, d, v, g, a, t) : void 0;
      return r && n && (w != null && w.from) && w.to && MC({ from: w.from, to: w.to }, n, t) && (w.from = p, w.to = void 0), s || l(w), s == null || s(w, p, h, x), w;
    },
    isSelected: (p) => d && xt(d, p, !1, t)
  };
}
function PC(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Fo(n, o ? n : void 0), i = o ? n : a, { isSameDay: l } = t;
  return {
    selected: i,
    select: (f, p, h) => {
      let x = f;
      return !r && i && i && l(f, i) && (x = void 0), o || s(x), o == null || o(x, f, p, h), x;
    },
    isSelected: (f) => i ? l(i, f) : !1
  };
}
function RC(e, t) {
  const n = PC(e, t), r = SC(e, t), o = EC(e, t);
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
function AC(e) {
  var zo;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new Fe(t.today, t.timeZone)), t.month && (t.month = new Fe(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new Fe(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new Fe(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new Fe(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new Fe(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (zo = t.selected) == null ? void 0 : zo.map((le) => new Fe(le, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new Fe(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new Fe(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: a, locale: s, classNames: i } = Ir(() => {
    const le = { ...$o, ...t.locale };
    return {
      dateLib: new Xe({
        locale: le,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: _2(t.components),
      formatters: H2(t.formatters),
      labels: { ...sC, ...t.labels },
      locale: le,
      classNames: { ...Gf(), ...t.classNames }
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
  ]), { captionLayout: l, mode: d, navLayout: u, numberOfMonths: f = 1, onDayBlur: p, onDayClick: h, onDayFocus: x, onDayKeyDown: v, onDayMouseEnter: g, onDayMouseLeave: w, onNextClick: b, onPrevClick: y, showWeekNumber: N, styles: C } = t, { formatCaption: P, formatDay: S, formatMonthDropdown: E, formatWeekNumber: O, formatWeekNumberHeader: I, formatWeekdayName: F, formatYearDropdown: L } = r, H = bC(t, a), { days: T, months: W, navStart: V, navEnd: U, previousMonth: j, nextMonth: $, goToMonth: Q } = H, R = j2(T, t, V, U, a), { isSelected: M, select: _, selected: B } = RC(t, a) ?? {}, { blur: K, focused: G, isFocusTarget: D, moveFocus: Z, setFocused: J } = CC(t, H, R, M ?? (() => !1), a), { labelDayButton: se, labelGridcell: he, labelGrid: fe, labelMonthDropdown: oe, labelNav: Se, labelPrevious: Ne, labelNext: Le, labelWeekday: je, labelWeekNumber: Ft, labelWeekNumberHeader: Nt, labelYearDropdown: lr } = o, Bo = Ir(() => K2(a, t.ISOWeek), [a, t.ISOWeek]), Nn = d !== void 0 || h !== void 0, Lt = ge(() => {
    j && (Q(j), y == null || y(j));
  }, [j, Q, y]), en = ge(() => {
    $ && (Q($), b == null || b($));
  }, [Q, $, b]), dr = ge((le, me) => (ie) => {
    ie.preventDefault(), ie.stopPropagation(), J(le), _ == null || _(le.date, me, ie), h == null || h(le.date, me, ie);
  }, [_, h, J]), ht = ge((le, me) => (ie) => {
    J(le), x == null || x(le.date, me, ie);
  }, [x, J]), Wt = ge((le, me) => (ie) => {
    K(), p == null || p(le.date, me, ie);
  }, [K, p]), ur = ge((le, me) => (ie) => {
    const ye = {
      ArrowLeft: [
        ie.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        ie.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [ie.shiftKey ? "year" : "week", "after"],
      ArrowUp: [ie.shiftKey ? "year" : "week", "before"],
      PageUp: [ie.shiftKey ? "year" : "month", "before"],
      PageDown: [ie.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ye[ie.key]) {
      ie.preventDefault(), ie.stopPropagation();
      const [We, ve] = ye[ie.key];
      Z(We, ve);
    }
    v == null || v(le.date, me, ie);
  }, [Z, v, t.dir]), fr = ge((le, me) => (ie) => {
    g == null || g(le.date, me, ie);
  }, [g]), mr = ge((le, me) => (ie) => {
    w == null || w(le.date, me, ie);
  }, [w]), pr = ge((le) => (me) => {
    const ie = Number(me.target.value), ye = a.setMonth(a.startOfMonth(le), ie);
    Q(ye);
  }, [a, Q]), Mn = ge((le) => (me) => {
    const ie = Number(me.target.value), ye = a.setYear(a.startOfMonth(le), ie);
    Q(ye);
  }, [a, Q]), { className: En, style: hr } = Ir(() => ({
    className: [i[re.Root], t.className].filter(Boolean).join(" "),
    style: { ...C == null ? void 0 : C[re.Root], ...t.style }
  }), [i, t.className, t.style, C]), Ze = I2(t), Ye = yt(null);
  dC(Ye, !!t.animate, {
    classNames: i,
    months: W,
    focused: G,
    dateLib: a
  });
  const Pn = {
    dayPickerProps: t,
    selected: B,
    select: _,
    isSelected: M,
    months: W,
    nextMonth: $,
    previousMonth: j,
    goToMonth: Q,
    getModifiers: R,
    components: n,
    classNames: i,
    styles: C,
    labels: o,
    formatters: r
  };
  return k.createElement(
    Lf.Provider,
    { value: Pn },
    k.createElement(
      n.Root,
      { rootRef: t.animate ? Ye : void 0, className: En, style: hr, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Ze },
      k.createElement(
        n.Months,
        { className: i[re.Months], style: C == null ? void 0 : C[re.Months] },
        !t.hideNavigation && !u && k.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Se(), onPreviousClick: Lt, onNextClick: en, previousMonth: j, nextMonth: $ }),
        W.map((le, me) => k.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[re.Month],
            style: C == null ? void 0 : C[re.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: me,
            displayIndex: me,
            calendarMonth: le
          },
          u === "around" && !t.hideNavigation && me === 0 && k.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[re.PreviousMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": Ne(j), onClick: Lt, "data-animated-button": t.animate ? "true" : void 0 },
            k.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          k.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[re.MonthCaption], style: C == null ? void 0 : C[re.MonthCaption], calendarMonth: le, displayIndex: me }, l != null && l.startsWith("dropdown") ? k.createElement(
            n.DropdownNav,
            { className: i[re.Dropdowns], style: C == null ? void 0 : C[re.Dropdowns] },
            (() => {
              const ie = l === "dropdown" || l === "dropdown-months" ? k.createElement(n.MonthsDropdown, { key: "month", className: i[re.MonthsDropdown], "aria-label": oe(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: pr(le.date), options: G2(le.date, V, U, r, a), style: C == null ? void 0 : C[re.Dropdown], value: a.getMonth(le.date) }) : k.createElement("span", { key: "month" }, E(le.date, a)), ye = l === "dropdown" || l === "dropdown-years" ? k.createElement(n.YearsDropdown, { key: "year", className: i[re.YearsDropdown], "aria-label": lr(a.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Mn(le.date), options: U2(V, U, r, a, !!t.reverseYears), style: C == null ? void 0 : C[re.Dropdown], value: a.getYear(le.date) }) : k.createElement("span", { key: "year" }, L(le.date, a));
              return a.getMonthYearOrder() === "year-first" ? [ye, ie] : [ie, ye];
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
            } }, P(le.date, a.options, a))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            k.createElement(n.CaptionLabel, { className: i[re.CaptionLabel], role: "status", "aria-live": "polite" }, P(le.date, a.options, a))
          )),
          u === "around" && !t.hideNavigation && me === f - 1 && k.createElement(
            n.NextMonthButton,
            { type: "button", className: i[re.NextMonthButton], tabIndex: $ ? void 0 : -1, "aria-disabled": $ ? void 0 : !0, "aria-label": Le($), onClick: en, "data-animated-button": t.animate ? "true" : void 0 },
            k.createElement(n.Chevron, { disabled: $ ? void 0 : !0, className: i[re.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          me === f - 1 && u === "after" && !t.hideNavigation && k.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[re.Nav], style: C == null ? void 0 : C[re.Nav], "aria-label": Se(), onPreviousClick: Lt, onNextClick: en, previousMonth: j, nextMonth: $ }),
          k.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": d === "multiple" || d === "range", "aria-label": fe(le.date, a.options, a) || void 0, className: i[re.MonthGrid], style: C == null ? void 0 : C[re.MonthGrid] },
            !t.hideWeekdays && k.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[re.Weekdays], style: C == null ? void 0 : C[re.Weekdays] },
              N && k.createElement(n.WeekNumberHeader, { "aria-label": Nt(a.options), className: i[re.WeekNumberHeader], style: C == null ? void 0 : C[re.WeekNumberHeader], scope: "col" }, I()),
              Bo.map((ie) => k.createElement(n.Weekday, { "aria-label": je(ie, a.options, a), className: i[re.Weekday], key: String(ie), style: C == null ? void 0 : C[re.Weekday], scope: "col" }, F(ie, a.options, a)))
            ),
            k.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[re.Weeks], style: C == null ? void 0 : C[re.Weeks] }, le.weeks.map((ie) => k.createElement(
              n.Week,
              { className: i[re.Week], key: ie.weekNumber, style: C == null ? void 0 : C[re.Week], week: ie },
              N && // biome-ignore lint/a11y/useSemanticElements: react component
              k.createElement(n.WeekNumber, { week: ie, style: C == null ? void 0 : C[re.WeekNumber], "aria-label": Ft(ie.weekNumber, {
                locale: s
              }), className: i[re.WeekNumber], scope: "row", role: "rowheader" }, O(ie.weekNumber, a)),
              ie.days.map((ye) => {
                const { date: We } = ye, ve = R(ye);
                if (ve[ke.focused] = !ve.hidden && !!(G != null && G.isEqualTo(ye)), ve[et.selected] = (M == null ? void 0 : M(We)) || ve.selected, Bs(B)) {
                  const { from: Rn, to: gr } = B;
                  ve[et.range_start] = !!(Rn && gr && a.isSameDay(We, Rn)), ve[et.range_end] = !!(Rn && gr && a.isSameDay(We, gr)), ve[et.range_middle] = xt(B, We, !0, a);
                }
                const vr = Y2(ve, C, t.modifiersStyles), Ho = O2(ve, i, t.modifiersClassNames), Go = !Nn && !ve.hidden ? he(We, ve, a.options, a) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  k.createElement(n.Day, { key: `${a.format(We, "yyyy-MM-dd")}_${a.format(ye.displayMonth, "yyyy-MM")}`, day: ye, modifiers: ve, className: Ho.join(" "), style: vr, role: "gridcell", "aria-selected": ve.selected || void 0, "aria-label": Go, "data-day": a.format(We, "yyyy-MM-dd"), "data-month": ye.outside ? a.format(We, "yyyy-MM") : void 0, "data-selected": ve.selected || void 0, "data-disabled": ve.disabled || void 0, "data-hidden": ve.hidden || void 0, "data-outside": ye.outside || void 0, "data-focused": ve.focused || void 0, "data-today": ve.today || void 0 }, !ve.hidden && Nn ? k.createElement(n.DayButton, { className: i[re.DayButton], style: C == null ? void 0 : C[re.DayButton], type: "button", day: ye, modifiers: ve, disabled: ve.disabled || void 0, tabIndex: D(ye) ? 0 : -1, "aria-label": se(We, ve, a.options, a), onClick: dr(ye, ve), onBlur: Wt(ye, ve), onFocus: ht(ye, ve), onKeyDown: ur(ye, ve), onMouseEnter: fr(ye, ve), onMouseLeave: mr(ye, ve) }, S(We, a.options, a)) : !ve.hidden && S(ye.date, a.options, a))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      k.createElement(n.Footer, { className: i[re.Footer], style: C == null ? void 0 : C[re.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const DC = {
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
}, jC = (e, t, n) => {
  n = n || {};
  let r;
  const o = DC[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, OC = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, _C = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, IC = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, TC = {
  date: un({
    formats: OC,
    defaultWidth: "full"
  }),
  time: un({
    formats: _C,
    defaultWidth: "full"
  }),
  dateTime: un({
    formats: IC,
    defaultWidth: "full"
  })
}, $C = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, FC = (e, t, n, r) => $C[e], LC = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, WC = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, VC = {
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
}, BC = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, zC = {
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
}, HC = {
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
}, GC = (e, t) => {
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
}, YC = {
  ordinalNumber: GC,
  era: it({
    values: LC,
    defaultWidth: "wide"
  }),
  quarter: it({
    values: WC,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: it({
    values: VC,
    defaultWidth: "wide"
  }),
  day: it({
    values: BC,
    defaultWidth: "wide"
  }),
  dayPeriod: it({
    values: zC,
    defaultWidth: "wide",
    formattingValues: HC,
    defaultFormattingWidth: "wide"
  })
}, KC = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, UC = /\d+/i, qC = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, XC = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, ZC = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, QC = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, JC = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, eS = {
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
}, tS = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, nS = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, rS = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, oS = {
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
}, aS = {
  ordinalNumber: jf({
    matchPattern: KC,
    parsePattern: UC,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ct({
    matchPatterns: qC,
    defaultMatchWidth: "wide",
    parsePatterns: XC,
    defaultParseWidth: "any"
  }),
  quarter: ct({
    matchPatterns: ZC,
    defaultMatchWidth: "wide",
    parsePatterns: QC,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ct({
    matchPatterns: JC,
    defaultMatchWidth: "wide",
    parsePatterns: eS,
    defaultParseWidth: "any"
  }),
  day: ct({
    matchPatterns: tS,
    defaultMatchWidth: "wide",
    parsePatterns: nS,
    defaultParseWidth: "any"
  }),
  dayPeriod: ct({
    matchPatterns: rS,
    defaultMatchWidth: "any",
    parsePatterns: oS,
    defaultParseWidth: "any"
  })
}, sS = {
  code: "ja",
  formatDistance: jC,
  formatLong: TC,
  formatRelative: FC,
  localize: YC,
  match: aS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, iS = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, Or = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Zf = k.forwardRef(
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
      () => Or(n || null)
    ), g = e !== void 0, w = g ? Or(e) : x, b = k.useMemo(
      () => Or(r || null),
      [r]
    ), y = k.useMemo(
      () => Or(o || null),
      [o]
    ), N = k.useMemo(() => !b || !y ? !0 : b <= y, [b, y]), C = k.useMemo(() => {
      if (y) return y;
      const S = /* @__PURE__ */ new Date();
      return new Date(S.getFullYear() + 10, 11, 31);
    }, [y]), P = (S) => {
      const E = S || null;
      g || v(E), t == null || t(E);
    };
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: h,
        className: A(iS(u), s),
        ...p,
        children: /* @__PURE__ */ c.jsx(
          AC,
          {
            animate: !1,
            mode: "single",
            selected: w || void 0,
            onSelect: P,
            locale: f === "ja" ? sS : $o,
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
              const S = Gf(), E = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
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
Zf.displayName = "Calendar";
const Zi = ae(
  `font-normal inline-flex items-baseline justify-center border
  border-transparent decoration-solid decoration-from-font
  underline-offset-[3px] transition-colors duration-75`,
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
), cS = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Ba = k.forwardRef(
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
    const u = r ? vn : "a", p = cS[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ c.jsx(
      u,
      {
        ref: d,
        className: A(
          Zi({ intent: t, size: n, disabled: o }),
          e
        ),
        ...l,
        children: i
      }
    ) : /* @__PURE__ */ c.jsxs(
      u,
      {
        ref: d,
        className: A(Zi({ intent: t, size: n, disabled: o }), e),
        ...l,
        children: [
          a && /* @__PURE__ */ c.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: _e(a, { size: p }) }),
          i,
          s && /* @__PURE__ */ c.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: _e(s, { size: p }) })
        ]
      }
    );
  }
);
Ba.displayName = "TextLink";
const lS = ae(
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
), dS = ae("size-5 shrink-0", {
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
}), uS = ae("font-bold text-md", {
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
}), fS = ae(
  "text-body-primary font-normal leading-6 text-md"
), mS = ae("min-w-0 gap-xxxs flex flex-1 flex-col"), pS = {
  info: Tr,
  success: lc,
  warning: Tr,
  alert: Tr,
  paid: Op
}, hS = k.forwardRef(
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
    const d = s || pS[t];
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: l,
        className: A(lS({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ c.jsxs("div", { className: A(mS()), children: [
          n && /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: A(dS({ intent: t }), "top-0.5 relative"),
                  children: _e(d, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: A(uS({ intent: t })), children: n })
            ] }),
            a && (a.href ? /* @__PURE__ */ c.jsx(
              Ba,
              {
                href: a.href,
                target: a.target,
                rel: a.rel,
                intent: "primary",
                size: "sm",
                children: a.label
              }
            ) : /* @__PURE__ */ c.jsx(
              Ba,
              {
                onClick: a.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ c.jsx("button", { type: "button", className: "cursor-pointer", children: a.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ c.jsx("div", { className: A(fS()), children: o || r })
        ] })
      }
    );
  }
);
hS.displayName = "Callout";
const vS = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), gS = ae(
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
), Wr = ({
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
  return /* @__PURE__ */ c.jsxs("div", { className: A(vS({ disabled: e }), s), children: [
    /* @__PURE__ */ c.jsx(
      ol,
      {
        id: l,
        className: A(gS({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ c.jsx(
          sl,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ c.jsx(vp, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ c.jsx(oc, { style: { strokeWidth: 3 } })
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
Wr.displayName = "Checkbox";
const xS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
xS.displayName = "CheckboxGroup";
const bS = ae(
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
), yS = k.forwardRef(
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
        className: A(bS({ selected: e, disabled: t }), n),
        onClick: i,
        ...a,
        children: r
      }
    );
  }
);
yS.displayName = "ChoiceChip";
const wS = ({
  children: e,
  className: t
}) => /* @__PURE__ */ c.jsx("div", { role: "listbox", className: A("gap-xs flex flex-wrap", t), children: e });
wS.displayName = "ChoiceChipGroup";
const CS = ae(
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
), AN = Iy, wt = k.forwardRef(
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
    Ty,
    {
      delayDuration: i,
      ...d !== void 0 && { open: d },
      ...u !== void 0 && { onOpenChange: u },
      ...l !== void 0 && {
        disableHoverableContent: l
      },
      children: [
        /* @__PURE__ */ c.jsx($y, { asChild: !0, children: e }),
        /* @__PURE__ */ c.jsx(Fy, { children: /* @__PURE__ */ c.jsx(
          Ly,
          {
            ref: h,
            side: r,
            sideOffset: o,
            align: a,
            ...s !== void 0 && { alignOffset: s },
            className: A(CS({ intent: n }), f),
            ...p,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ c.jsx(c.Fragment, { children: e })
);
wt.displayName = "Tooltip";
const SS = ae("space-y-md w-full", {
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
}), Qf = k.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: o,
      className: A(SS({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
Qf.displayName = "DataSheet";
const kS = ae(
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
), Jf = k.forwardRef(
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
          kS({ variant: t }),
          f && "flex items-center justify-between",
          e
        ),
        ...d,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: A(r && "line-through opacity-60"), children: n }),
          f && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
            s && /* @__PURE__ */ c.jsx(
              wt,
              {
                content: r ? null : (a == null ? void 0 : a.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ae,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: sc,
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
              wt,
              {
                content: (a == null ? void 0 : a.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ae,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: cc,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            l && r && /* @__PURE__ */ c.jsx(
              wt,
              {
                content: (a == null ? void 0 : a.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ c.jsx(
                  Ae,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: ic,
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
Jf.displayName = "DataSheetHeader";
const em = k.forwardRef(
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
em.displayName = "DataSheetSection";
const NS = ae("py-sm", {
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
}), MS = ae(
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
), ES = ae(
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
), tm = k.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...a }, s) => {
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
        NS({ orientation: n, spacing: r }),
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ c.jsx(
          "div",
          {
            id: i,
            className: A(MS({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: A(ES({ orientation: n })), children: l })
      ]
    }
  );
});
tm.displayName = "DataSheetKeyValue";
const PS = {
  actionsColumnParts: 10
}, nm = k.createContext(
  PS
), RS = () => k.useContext(nm), rm = k.createContext({}), om = () => k.useContext(
  rm
);
function AS({
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
    nm.Provider,
    {
      value: l,
      children: /* @__PURE__ */ c.jsx("div", { ref: i, className: A("overflow-x-auto", e), ...s, children: /* @__PURE__ */ c.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const am = k.forwardRef(AS);
am.displayName = "DataSheetTable";
const sm = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("thead", { ref: r, className: A("", e), ...n, children: t }));
sm.displayName = "DataSheetTableHeader";
const im = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tbody", { ref: r, className: A("", e), ...n, children: t }));
im.displayName = "DataSheetTableBody";
function DS({
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
    rm.Provider,
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
const cm = k.forwardRef(DS);
cm.displayName = "DataSheetTableRow";
const to = k.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...a }, s) => {
  const i = t ? "th" : "td", { totalParts: l, isDeleted: d } = om(), u = n !== void 0 && l !== void 0 ? { width: `${n / l * 100}%`, ...o } : o, f = typeof r == "string" ? r.trim() : String(r || ""), p = d && !t && f !== "" && f !== "-";
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
to.displayName = "DataSheetTableCell";
function jS({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, a) {
  const { onEditRow: s, onRemoveRow: i, onRestoreRow: l, actionsColumnParts: d } = RS(), {
    item: u,
    isDeleted: f,
    ariaLabels: p,
    tooltipMessages: h
  } = om(), x = n ?? u;
  return t ? /* @__PURE__ */ c.jsx(
    to,
    {
      ref: a,
      header: !0,
      parts: d,
      className: e,
      ...o,
      children: r
    }
  ) : s || i || l ? /* @__PURE__ */ c.jsx(
    to,
    {
      ref: a,
      parts: d,
      className: A("align-top", e),
      ...o,
      children: /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex", children: [
        s && x && /* @__PURE__ */ c.jsx(
          wt,
          {
            content: f ? null : (h == null ? void 0 : h.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ae,
              {
                "aria-label": (p == null ? void 0 : p.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: sc,
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
          wt,
          {
            content: (h == null ? void 0 : h.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ae,
              {
                "aria-label": (p == null ? void 0 : p.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: cc,
                onClick: () => i(x),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        l && x && f && /* @__PURE__ */ c.jsx(
          wt,
          {
            content: (h == null ? void 0 : h.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ c.jsx(
              Ae,
              {
                "aria-label": (p == null ? void 0 : p.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: ic,
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
const lm = k.forwardRef(
  jS
);
lm.displayName = "DataSheetTableActionsCell";
const dm = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Ae, { ref: n, className: A("w-full", e), ...t }));
dm.displayName = "DataSheetAction";
const DN = Object.assign(Qf, {
  Header: Jf,
  Section: em,
  KeyValue: tm,
  Table: am,
  TableHeader: sm,
  TableBody: im,
  TableRow: cm,
  TableCell: to,
  TableActionsCell: lm,
  Action: dm
}), OS = (e, t) => {
  const [n, r] = Ve(e);
  return Ht(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, Lo = () => {
  const e = yt(!1), t = ge(() => {
    e.current = !0;
  }, []), n = ge(() => {
    e.current = !1;
  }, []), r = ge(
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
}, um = ae(
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
), _S = ae(
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
), Wo = k.forwardRef(
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
    const h = !!t, x = !!n, v = !!r, g = f.type === "number", { compositionHandlers: w, guardKeyHandler: b } = Lo(), y = (C) => {
      w.onCompositionStart(C), d == null || d(C);
    }, N = (C) => {
      w.onCompositionEnd(C), u == null || u(C);
    };
    return /* @__PURE__ */ c.jsxs("div", { className: A(um({ invalid: e }), s), children: [
      t && /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Fn({ position: "prefix", interactive: !1 }),
          children: _e(t, { size: a })
        }
      ),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: p,
          className: _S({ hasPrefix: h, hasTrailing: x, isNumeric: g }),
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
          children: _e(n, { size: o })
        }
      ) : /* @__PURE__ */ c.jsx(
        "div",
        {
          className: Fn({
            position: "trailing",
            interactive: !1
          }),
          children: _e(n, { size: o })
        }
      ) })
    ] });
  }
);
Wo.displayName = "Input";
const IS = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", _r = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, TS = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), $S = k.forwardRef(
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
    formatDate: f = TS,
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
      () => _r(n || null)
    ), [S, E] = k.useState(x), O = e !== void 0, I = O ? _r(e) : C, F = v !== void 0 ? v : S, L = k.useMemo(
      () => _r(r || null),
      [r]
    ), H = k.useMemo(
      () => _r(o || null),
      [o]
    ), T = k.useMemo(() => !L || !H ? !0 : L <= H, [L, H]), W = ($) => {
      const Q = $ || null;
      O || P(Q), t == null || t(Q), Q && (v === void 0 && E(!1), g == null || g(!1));
    }, V = ($) => {
      v === void 0 && E($), g == null || g($);
    }, U = ($) => {
      switch ($.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          $.preventDefault(), F || V(!0);
          break;
        case "Escape":
          F && ($.preventDefault(), V(!1));
          break;
      }
    };
    return /* @__PURE__ */ c.jsxs(Md, { open: F, onOpenChange: V, children: [
      /* @__PURE__ */ c.jsx(Ed, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Wo,
        {
          ...y,
          ref: N,
          type: "text",
          readOnly: !0,
          placeholder: u,
          value: I ? f(I) : "",
          disabled: a,
          invalid: s || i,
          trailingIcon: l || Zm,
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
      /* @__PURE__ */ c.jsx(Pd, { children: /* @__PURE__ */ c.jsx(
        Ps,
        {
          className: A(IS, h),
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
            Zf,
            {
              value: I,
              onChange: W,
              ...L && { minDate: L },
              ...H && { maxDate: H },
              disabled: !T,
              showOutsideDays: !0,
              fixedWeeks: !0,
              defaultMonth: I || /* @__PURE__ */ new Date(),
              locale: b
            }
          )
        }
      ) })
    ] });
  }
);
$S.displayName = "DatePicker";
const FS = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], jN = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: a,
  actions: s = FS,
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
  return /* @__PURE__ */ c.jsx(as, { open: e, onOpenChange: t, children: /* @__PURE__ */ c.jsx(ss, { children: /* @__PURE__ */ c.jsx(
    is,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ c.jsxs(
        cs,
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
              tl,
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
                Ae,
                {
                  intent: "tertiary",
                  onClick: w,
                  disabled: v,
                  children: l
                }
              ),
              /* @__PURE__ */ c.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: s.map((N, C) => {
                const { label: P, classNames: S, onAction: E, value: O, ...I } = N;
                return /* @__PURE__ */ c.jsx(
                  Ae,
                  {
                    loading: p === C,
                    ...I,
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
}, fm = no(void 0), zs = () => {
  const e = zr(fm);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, LS = ({
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
  const [d, u] = Ve(o), f = a !== void 0 ? a : d, p = k.Children.toArray(r).filter(
    (C) => k.isValidElement(C) && C.type === mm
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
  return /* @__PURE__ */ c.jsx(fm.Provider, { value: N, children: /* @__PURE__ */ c.jsx(as, { open: e, onOpenChange: w, children: /* @__PURE__ */ c.jsx(ss, { children: /* @__PURE__ */ c.jsx(
    is,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ c.jsx(
        cs,
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
}, mm = ({ children: e }) => /* @__PURE__ */ c.jsx("div", { className: "flex flex-col", children: e }), WS = ({ children: e }) => /* @__PURE__ */ c.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ c.jsx(
  tl,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), VS = ({ children: e, className: t }) => /* @__PURE__ */ c.jsx(
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
), BS = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: a, cancellable: s } = zs(), i = () => {
    r && r(), o(a);
  };
  return /* @__PURE__ */ c.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ c.jsx("div", { className: "gap-xs flex", children: t && s && /* @__PURE__ */ c.jsx(Ae, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ c.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, zS = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const a = zs(), s = {
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
  return r ? /* @__PURE__ */ c.jsx(Dv, { asChild: !0, children: /* @__PURE__ */ c.jsx(Ae, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ c.jsx(Ae, { ...o, onClick: i, children: e });
}, ON = {
  Root: LS,
  Step: mm,
  Header: WS,
  Body: VS,
  Footer: BS,
  Action: zS,
  useMultiStepDialog: zs
}, _N = ({
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
}, pm = Md, HS = Ed, GS = T0, Hs = k.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(Pd, { children: /* @__PURE__ */ c.jsx(
  Ps,
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
Hs.displayName = Ps.displayName;
const YS = (e) => typeof e == "string" ? e : e.label || e.value || String(e), KS = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, hm = k.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: a,
      onSelect: s,
      renderSuggestion: i,
      getSuggestionValue: l = YS,
      getSuggestionKey: d = KS,
      debounceMs: u = 300,
      minQueryLength: f = 0,
      loadingText: p = "Loading...",
      disabled: h,
      onFocus: x,
      onBlur: v,
      onKeyDown: g,
      ...w
    } = e, [b, y] = Ve(!1), [N, C] = Ve(
      []
    ), [P, S] = Ve(!1), E = yt(null), [O, I] = Ve(0), F = yt([]), L = OS(n, u), H = Ir(() => {
      if (!o)
        return N;
      if (!n || n.length < f)
        return o;
      const R = n.toLowerCase();
      return o.filter((M) => l(M).toLowerCase().includes(R));
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
        return E.current && E.current.abort(), E.current = new AbortController(), S(!0), a(L).then((R) => {
          C(R);
        }).catch((R) => {
          R.name !== "AbortError" && console.debug("AutoSuggest search failed:", R), C([]);
        }).finally(() => {
          S(!1);
        }), () => {
          E.current && E.current.abort();
        };
      }
    }, [L, a, f]);
    const T = ge(
      (R) => {
        const M = l(R);
        r(M), s == null || s(R), y(!1);
      },
      [r, s, l]
    ), W = ge(
      (R) => {
        h || y(!0), x == null || x(R);
      },
      [h, x]
    ), V = ge(
      (R) => {
        y(!1), v == null || v(R);
      },
      [v]
    ), U = ge(
      (R) => {
        const M = R.target.value;
        r(M), !b && H.length > 0 && y(!0);
      },
      [r, b, H.length]
    );
    Ht(() => {
      I(0), F.current = [];
    }, [H]), Ht(() => {
      var R;
      b && O >= 0 && F.current[O] && ((R = F.current[O]) == null || R.scrollIntoView({
        block: "nearest"
      }));
    }, [O, b]);
    const j = ge(
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
            const M = H[O];
            M && T(M);
            break;
          }
          case "ArrowDown":
            R.preventDefault(), I(
              (M) => M < H.length - 1 ? M + 1 : M
            );
            break;
          case "ArrowUp":
            R.preventDefault(), I((M) => M > 0 ? M - 1 : M);
            break;
        }
        g == null || g(R);
      },
      [b, O, H, T, g]
    ), $ = b && !h && (H.length > 0 || P), Q = $ && O >= 0 ? `autosuggest-item-${O}` : void 0;
    return /* @__PURE__ */ c.jsxs(pm, { open: $, children: [
      /* @__PURE__ */ c.jsx(GS, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        Wo,
        {
          ref: t,
          value: n,
          onChange: U,
          onFocus: W,
          onBlur: V,
          onKeyDown: j,
          disabled: h,
          role: "combobox",
          "aria-expanded": $,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": Q,
          "aria-autocomplete": "list",
          ...w
        }
      ) }),
      /* @__PURE__ */ c.jsx(
        Hs,
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
                /* @__PURE__ */ c.jsx(pp, { className: "h-4 w-4 animate-spin" }),
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
              children: H.map((R, M) => {
                const _ = l(R), B = M === O, K = `autosuggest-item-${M}`;
                return /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    id: K,
                    ref: (G) => {
                      F.current[M] = G;
                    },
                    role: "option",
                    "aria-selected": B,
                    "data-value": _,
                    onClick: () => T(R),
                    onPointerDown: (G) => {
                      G.preventDefault(), T(R);
                    },
                    onMouseEnter: () => I(M),
                    className: A(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      B && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(R) : l(R)
                  },
                  d(R, M)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
hm.displayName = "AutoSuggest";
var pe = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(pe || {}), q = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(q || {});
const US = [
  {
    backgroundColor: q.AccentSunSoft,
    textColor: pe.AccentSunStrong,
    iconColor: q.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: q.AccentSunPale,
    textColor: pe.AccentSunStrong,
    iconColor: q.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: q.AccentWoodSoft,
    textColor: pe.AccentWoodStrong,
    iconColor: q.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: q.AccentWoodPale,
    textColor: pe.AccentWoodStrong,
    iconColor: q.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: q.AccentOrangeSoft,
    textColor: pe.AccentOrangeStrong,
    iconColor: q.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: q.AccentOrangePale,
    textColor: pe.AccentOrangeStrong,
    iconColor: q.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: q.AccentYellowSoft,
    textColor: pe.AccentYellowStrong,
    iconColor: q.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: q.AccentYellowPale,
    textColor: pe.AccentYellowStrong,
    iconColor: q.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: q.AccentLemonSoft,
    textColor: pe.AccentLemonStrong,
    iconColor: q.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: q.AccentLemonPale,
    textColor: pe.AccentLemonStrong,
    iconColor: q.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: q.AccentGrassSoft,
    textColor: pe.AccentGrassStrong,
    iconColor: q.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: q.AccentGrassPale,
    textColor: pe.AccentGrassStrong,
    iconColor: q.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: q.AccentLimeSoft,
    textColor: pe.AccentLimeStrong,
    iconColor: q.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: q.AccentLimePale,
    textColor: pe.AccentLimeStrong,
    iconColor: q.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: q.AccentGreenSoft,
    textColor: pe.AccentGreenStrong,
    iconColor: q.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: q.AccentGreenPale,
    textColor: pe.AccentGreenStrong,
    iconColor: q.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: q.AccentPeacockSoft,
    textColor: pe.AccentPeacockStrong,
    iconColor: q.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: q.AccentPeacockPale,
    textColor: pe.AccentPeacockStrong,
    iconColor: q.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: q.AccentCyanSoft,
    textColor: pe.AccentCyanStrong,
    iconColor: q.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: q.AccentCyanPale,
    textColor: pe.AccentCyanStrong,
    iconColor: q.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: q.AccentSkySoft,
    textColor: pe.AccentSkyStrong,
    iconColor: q.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: q.AccentSkyPale,
    textColor: pe.AccentSkyStrong,
    iconColor: q.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: q.AccentSeaSoft,
    textColor: pe.AccentSeaStrong,
    iconColor: q.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: q.AccentSeaPale,
    textColor: pe.AccentSeaStrong,
    iconColor: q.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: q.AccentVioletSoft,
    textColor: pe.AccentVioletStrong,
    iconColor: q.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: q.AccentVioletPale,
    textColor: pe.AccentVioletStrong,
    iconColor: q.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: q.AccentPurpleSoft,
    textColor: pe.AccentPurpleStrong,
    iconColor: q.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: q.AccentPurplePale,
    textColor: pe.AccentPurpleStrong,
    iconColor: q.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: q.AccentMagentaSoft,
    textColor: pe.AccentMagentaStrong,
    iconColor: q.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: q.AccentMagentaPale,
    textColor: pe.AccentMagentaStrong,
    iconColor: q.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: q.AccentCharcoalSoft,
    textColor: pe.AccentCharchoalStrong,
    iconColor: q.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: q.AccentCharcoalPale,
    textColor: pe.AccentCharchoalStrong,
    iconColor: q.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: q.AccentGraySoft,
    textColor: pe.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: q.AccentGrayPale,
    textColor: pe.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: q.AccentGrayPale,
    textColor: pe.AccentGrayStrong,
    iconColor: q.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: q.AccentBambooPale,
    textColor: pe.AccentBambooStrong,
    iconColor: q.AccentBambooStrong,
    code: 10
  }
], qS = ae(
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
), za = ({
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
  const p = US.find(
    (w) => w.code === e
  ), h = () => l === "secondary" ? `var(${p == null ? void 0 : p.iconColor})` : `var(${p == null ? void 0 : p.textColor})`, x = A(
    qS({
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
  }, g = f ? vn : "div";
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
            children: _e(d, { size: 14 })
          }
        ),
        f ? /* @__PURE__ */ c.jsx(Ip, { children: t }) : /* @__PURE__ */ c.jsx("div", { className: "pt-0.5 relative h-full truncate", children: t }),
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
}, vm = k.forwardRef(
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
    const [N, C] = Ve(""), P = s ?? N, S = i ?? C, [E, O] = Ve(!1), { compositionHandlers: I, guardKeyHandler: F } = Lo(), [L, H] = Ve(null), T = yt(null);
    k.useImperativeHandle(y, () => T.current);
    const W = k.useMemo(() => {
      const G = o.map(
        (D) => D.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(G.join("|"));
    }, [o]), V = ge(
      (G) => !(!G || !r && e.includes(G) || n && e.length >= n),
      [e, r, n]
    ), U = ge(
      (G) => {
        const D = G.trim();
        if (V(D)) {
          if (g) {
            const Z = g(D);
            if (!Z.valid) {
              H(
                Z.error ?? w
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
        V,
        S,
        g,
        w
      ]
    ), j = ge(
      (G) => {
        const D = e.filter((Z, J) => J !== G);
        t(D);
      },
      [e, t]
    ), $ = ge(
      (G) => {
        const D = G.target.value, Z = D[D.length - 1];
        if (Z && o.includes(Z)) {
          const se = D.slice(0, -1);
          se && U(se);
          return;
        }
        const J = D.split(W);
        if (J.length > 1) {
          J.filter(Boolean).forEach((se) => U(se));
          return;
        }
        S(D);
      },
      [o, W, U, S]
    ), Q = ge(
      (G) => {
        G.key === "Enter" && P.trim() && (G.preventDefault(), U(P)), (G.key === "Backspace" || G.key === "Delete") && !P && e.length > 0 && (G.preventDefault(), j(e.length - 1));
      },
      [P, e.length, U, j]
    ), R = ge(() => {
      P.trim() && U(P), O(!1), H(null);
    }, [P, U]), M = x || (n ? e.length >= n : !1), _ = e.length === 0 && !P, B = !!d, K = !!u;
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: A(
            um({ invalid: h }),
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
                children: _e(d, { size: p })
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
                  e.map((G, D) => /* @__PURE__ */ c.jsx(
                    za,
                    {
                      ...!x && { onRemove: () => j(D) },
                      children: G
                    },
                    D
                  )),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      ref: T,
                      value: P,
                      onChange: $,
                      onKeyDown: F(Q),
                      onFocus: () => O(!0),
                      onBlur: R,
                      onCompositionStart: I.onCompositionStart,
                      onCompositionEnd: I.onCompositionEnd,
                      placeholder: _ ? a : "",
                      disabled: M,
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
                children: _e(u, { size: f })
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
            !L && !E && "invisible"
          ),
          children: L || l
        }
      )
    ] });
  }
);
vm.displayName = "TagInput";
const IN = Object.assign(Wo, {
  AutoSuggest: hm,
  TagInput: vm
});
var Qi = 1, XS = 0.9, ZS = 0.8, QS = 0.17, ha = 0.1, va = 0.999, JS = 0.9999, ek = 0.99, tk = /[\\\/_+.#"@\[\(\{&]/, nk = /[\\\/_+.#"@\[\(\{&]/g, rk = /[\s-]/, gm = /[\s-]/g;
function Ha(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? Qi : ek;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), d = n.indexOf(l, o), u = 0, f, p, h, x; d >= 0; ) f = Ha(e, t, n, r, d + 1, a + 1, s), f > u && (d === o ? f *= Qi : tk.test(e.charAt(d - 1)) ? (f *= ZS, h = e.slice(o, d - 1).match(nk), h && o > 0 && (f *= Math.pow(va, h.length))) : rk.test(e.charAt(d - 1)) ? (f *= XS, x = e.slice(o, d - 1).match(gm), x && o > 0 && (f *= Math.pow(va, x.length))) : (f *= QS, o > 0 && (f *= Math.pow(va, d - o))), e.charAt(d) !== t.charAt(a) && (f *= JS)), (f < ha && n.charAt(d - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(d - 1) !== r.charAt(a)) && (p = Ha(e, t, n, r, d + 1, a + 2, s), p * ha > f && (f = p * ha)), f > u && (u = f), d = n.indexOf(l, d + 1);
  return s[i] = u, u;
}
function Ji(e) {
  return e.toLowerCase().replace(gm, " ");
}
function ok(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ha(e, t, Ji(e), Ji(t), 0, 0, {});
}
var On = '[cmdk-group=""]', ga = '[cmdk-group-items=""]', ak = '[cmdk-group-heading=""]', xm = '[cmdk-item=""]', ec = `${xm}:not([aria-disabled="true"])`, Ga = "cmdk-item-select", sn = "data-value", sk = (e, t, n) => ok(e, t, n), bm = m.createContext(void 0), ir = () => m.useContext(bm), ym = m.createContext(void 0), Gs = () => m.useContext(ym), wm = m.createContext(void 0), Cm = m.forwardRef((e, t) => {
  let n = cn(() => {
    var M, _;
    return { search: "", value: (_ = (M = e.value) != null ? M : e.defaultValue) != null ? _ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = cn(() => /* @__PURE__ */ new Set()), o = cn(() => /* @__PURE__ */ new Map()), a = cn(() => /* @__PURE__ */ new Map()), s = cn(() => /* @__PURE__ */ new Set()), i = Sm(e), { label: l, children: d, value: u, onValueChange: f, filter: p, shouldFilter: h, loop: x, disablePointerSelection: v = !1, vimBindings: g = !0, ...w } = e, b = Ee(), y = Ee(), N = Ee(), C = m.useRef(null), P = gk();
  qt(() => {
    if (u !== void 0) {
      let M = u.trim();
      n.current.value = M, S.emit();
    }
  }, [u]), qt(() => {
    P(6, H);
  }, []);
  let S = m.useMemo(() => ({ subscribe: (M) => (s.current.add(M), () => s.current.delete(M)), snapshot: () => n.current, setState: (M, _, B) => {
    var K, G, D, Z;
    if (!Object.is(n.current[M], _)) {
      if (n.current[M] = _, M === "search") L(), I(), P(1, F);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(N);
          J ? J.focus() : (K = document.getElementById(b)) == null || K.focus();
        }
        if (P(7, () => {
          var J;
          n.current.selectedItemId = (J = T()) == null ? void 0 : J.id, S.emit();
        }), B || P(5, H), ((G = i.current) == null ? void 0 : G.value) !== void 0) {
          let J = _ ?? "";
          (Z = (D = i.current).onValueChange) == null || Z.call(D, J);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    s.current.forEach((M) => M());
  } }), []), E = m.useMemo(() => ({ value: (M, _, B) => {
    var K;
    _ !== ((K = a.current.get(M)) == null ? void 0 : K.value) && (a.current.set(M, { value: _, keywords: B }), n.current.filtered.items.set(M, O(_, B)), P(2, () => {
      I(), S.emit();
    }));
  }, item: (M, _) => (r.current.add(M), _ && (o.current.has(_) ? o.current.get(_).add(M) : o.current.set(_, /* @__PURE__ */ new Set([M]))), P(3, () => {
    L(), I(), n.current.value || F(), S.emit();
  }), () => {
    a.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let B = T();
    P(4, () => {
      L(), (B == null ? void 0 : B.getAttribute("id")) === M && F(), S.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    a.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: N, labelId: y, listInnerRef: C }), []);
  function O(M, _) {
    var B, K;
    let G = (K = (B = i.current) == null ? void 0 : B.filter) != null ? K : sk;
    return M ? G(M, n.current.search, _) : 0;
  }
  function I() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, _ = [];
    n.current.filtered.groups.forEach((K) => {
      let G = o.current.get(K), D = 0;
      G.forEach((Z) => {
        let J = M.get(Z);
        D = Math.max(J, D);
      }), _.push([K, D]);
    });
    let B = C.current;
    W().sort((K, G) => {
      var D, Z;
      let J = K.getAttribute("id"), se = G.getAttribute("id");
      return ((D = M.get(se)) != null ? D : 0) - ((Z = M.get(J)) != null ? Z : 0);
    }).forEach((K) => {
      let G = K.closest(ga);
      G ? G.appendChild(K.parentElement === G ? K : K.closest(`${ga} > *`)) : B.appendChild(K.parentElement === B ? K : K.closest(`${ga} > *`));
    }), _.sort((K, G) => G[1] - K[1]).forEach((K) => {
      var G;
      let D = (G = C.current) == null ? void 0 : G.querySelector(`${On}[${sn}="${encodeURIComponent(K[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function F() {
    let M = W().find((B) => B.getAttribute("aria-disabled") !== "true"), _ = M == null ? void 0 : M.getAttribute(sn);
    S.setState("value", _ || void 0);
  }
  function L() {
    var M, _, B, K;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let G = 0;
    for (let D of r.current) {
      let Z = (_ = (M = a.current.get(D)) == null ? void 0 : M.value) != null ? _ : "", J = (K = (B = a.current.get(D)) == null ? void 0 : B.keywords) != null ? K : [], se = O(Z, J);
      n.current.filtered.items.set(D, se), se > 0 && G++;
    }
    for (let [D, Z] of o.current) for (let J of Z) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(D);
      break;
    }
    n.current.filtered.count = G;
  }
  function H() {
    var M, _, B;
    let K = T();
    K && (((M = K.parentElement) == null ? void 0 : M.firstChild) === K && ((B = (_ = K.closest(On)) == null ? void 0 : _.querySelector(ak)) == null || B.scrollIntoView({ block: "nearest" })), K.scrollIntoView({ block: "nearest" }));
  }
  function T() {
    var M;
    return (M = C.current) == null ? void 0 : M.querySelector(`${xm}[aria-selected="true"]`);
  }
  function W() {
    var M;
    return Array.from(((M = C.current) == null ? void 0 : M.querySelectorAll(ec)) || []);
  }
  function V(M) {
    let _ = W()[M];
    _ && S.setState("value", _.getAttribute(sn));
  }
  function U(M) {
    var _;
    let B = T(), K = W(), G = K.findIndex((Z) => Z === B), D = K[G + M];
    (_ = i.current) != null && _.loop && (D = G + M < 0 ? K[K.length - 1] : G + M === K.length ? K[0] : K[G + M]), D && S.setState("value", D.getAttribute(sn));
  }
  function j(M) {
    let _ = T(), B = _ == null ? void 0 : _.closest(On), K;
    for (; B && !K; ) B = M > 0 ? hk(B, On) : vk(B, On), K = B == null ? void 0 : B.querySelector(ec);
    K ? S.setState("value", K.getAttribute(sn)) : U(M);
  }
  let $ = () => V(W().length - 1), Q = (M) => {
    M.preventDefault(), M.metaKey ? $() : M.altKey ? j(1) : U(1);
  }, R = (M) => {
    M.preventDefault(), M.metaKey ? V(0) : M.altKey ? j(-1) : U(-1);
  };
  return m.createElement(X.div, { ref: t, tabIndex: -1, ...w, "cmdk-root": "", onKeyDown: (M) => {
    var _;
    (_ = w.onKeyDown) == null || _.call(w, M);
    let B = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || B)) switch (M.key) {
      case "n":
      case "j": {
        g && M.ctrlKey && Q(M);
        break;
      }
      case "ArrowDown": {
        Q(M);
        break;
      }
      case "p":
      case "k": {
        g && M.ctrlKey && R(M);
        break;
      }
      case "ArrowUp": {
        R(M);
        break;
      }
      case "Home": {
        M.preventDefault(), V(0);
        break;
      }
      case "End": {
        M.preventDefault(), $();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let K = T();
        if (K) {
          let G = new Event(Ga);
          K.dispatchEvent(G);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: E.inputId, id: E.labelId, style: bk }, l), Vo(e, (M) => m.createElement(ym.Provider, { value: S }, m.createElement(bm.Provider, { value: E }, M))));
}), ik = m.forwardRef((e, t) => {
  var n, r;
  let o = Ee(), a = m.useRef(null), s = m.useContext(wm), i = ir(), l = Sm(e), d = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  qt(() => {
    if (!d) return i.item(o, s == null ? void 0 : s.id);
  }, [d]);
  let u = km(o, a, [e.value, e.children, a], e.keywords), f = Gs(), p = Ot((P) => P.value && P.value === u.current), h = Ot((P) => d || i.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let P = a.current;
    if (!(!P || e.disabled)) return P.addEventListener(Ga, x), () => P.removeEventListener(Ga, x);
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
  return m.createElement(X.div, { ref: Ct(a, t), ...C, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!g, "aria-selected": !!p, "data-disabled": !!g, "data-selected": !!p, onPointerMove: g || i.getDisablePointerSelection() ? void 0 : v, onClick: g ? void 0 : x }, e.children);
}), ck = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = Ee(), i = m.useRef(null), l = m.useRef(null), d = Ee(), u = ir(), f = Ot((h) => o || u.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(s) : !0);
  qt(() => u.group(s), []), km(s, i, [e.value, e.heading, l]);
  let p = m.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return m.createElement(X.div, { ref: Ct(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: f ? void 0 : !0 }, n && m.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: d }, n), Vo(e, (h) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? d : void 0 }, m.createElement(wm.Provider, { value: p }, h))));
}), lk = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), a = Ot((s) => !s.search);
  return !n && !a ? null : m.createElement(X.div, { ref: Ct(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), dk = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = Gs(), s = Ot((d) => d.search), i = Ot((d) => d.selectedItemId), l = ir();
  return m.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), m.createElement(X.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (d) => {
    o || a.setState("search", d.target.value), n == null || n(d.target.value);
  } });
}), uk = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = m.useRef(null), s = m.useRef(null), i = Ot((d) => d.selectedItemId), l = ir();
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
  }, []), m.createElement(X.div, { ref: Ct(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, Vo(e, (d) => m.createElement("div", { ref: Ct(s, l.listInnerRef), "cmdk-list-sizer": "" }, d)));
}), fk = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return m.createElement(as, { open: n, onOpenChange: r }, m.createElement(ss, { container: s }, m.createElement(is, { "cmdk-overlay": "", className: o }), m.createElement(cs, { "aria-label": e.label, "cmdk-dialog": "", className: a }, m.createElement(Cm, { ref: t, ...i }))));
}), mk = m.forwardRef((e, t) => Ot((n) => n.filtered.count === 0) ? m.createElement(X.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), pk = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return m.createElement(X.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Vo(e, (s) => m.createElement("div", { "aria-hidden": !0 }, s)));
}), Ge = Object.assign(Cm, { List: uk, Item: ik, Input: dk, Group: ck, Separator: lk, Dialog: fk, Empty: mk, Loading: pk });
function hk(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function vk(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Sm(e) {
  let t = m.useRef(e);
  return qt(() => {
    t.current = e;
  }), t;
}
var qt = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function cn(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ot(e) {
  let t = Gs(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function km(e, t, n, r = []) {
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
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(sn, i), o.current = i;
  }), o;
}
var gk = () => {
  let [e, t] = m.useState(), n = cn(() => /* @__PURE__ */ new Map());
  return qt(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function xk(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Vo({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement(xk(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var bk = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Nm = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ge,
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
Nm.displayName = Ge.displayName;
const Mm = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(Ua, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ c.jsx(
            Ge.Input,
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
Mm.displayName = Ge.Input.displayName;
const Em = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ge.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-x-hidden overflow-y-auto", e),
    ...t
  }
));
Em.displayName = Ge.List.displayName;
const Pm = k.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Ge.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
Pm.displayName = Ge.Empty.displayName;
const Vr = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ge.Group,
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
Vr.displayName = Ge.Group.displayName;
const yk = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ge.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
yk.displayName = Ge.Separator.displayName;
const Br = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ge.Item,
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
Br.displayName = Ge.Item.displayName;
const tc = ae("ease-in-out transition-all duration-300", {
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
}), wk = ({
  options: e,
  onValueChange: t = (oe) => oe,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: a = (oe) => oe,
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
  hideSelectAll: E = !1,
  searchable: O = !0,
  emptyIndicator: I = "結果が見つかりません。",
  noOptionsIndicator: F = "利用可能なオプションがありません。",
  autoSize: L = !1,
  singleLine: H = !1,
  popoverClassName: T,
  disabled: W = !1,
  invalid: V = !1,
  responsive: U,
  minWidth: j,
  maxWidth: $,
  deduplicateOptions: Q = !1,
  resetOnDefaultValueChange: R = !0,
  closeOnSelect: M = !1,
  filterByValueAndLabel: _ = !1,
  renderOption: B,
  customTrigger: K,
  selectionDisplayMode: G = "default",
  hideSelection: D = !1,
  maxDisplayedOptions: Z,
  totalOptionsCount: J,
  moreOptionsLabel: se = (oe) => `検索テキストを入力して他${oe}件を表示`,
  ...he
}, fe) => {
  const [oe, Se] = k.useState(i), [Ne, Le] = k.useState(!1), [je, Ft] = k.useState(""), [Nt, lr] = k.useState(""), [Bo, Nn] = k.useState(""), Lt = k.useRef(oe.length), en = k.useRef(Ne), dr = k.useRef(je), ht = k.useCallback(
    (Y, ne = "polite") => {
      ne === "assertive" ? (Nn(Y), setTimeout(() => Nn(""), 100)) : (lr(Y), setTimeout(() => lr(""), 100));
    },
    []
  ), Wt = k.useId(), ur = `${Wt}-listbox`, fr = `${Wt}-description`, mr = `${Wt}-count`, pr = k.useRef(i), Mn = k.useCallback(
    (Y) => {
      const ne = Y[0];
      return !!(ne && typeof ne == "object" && "heading" in ne);
    },
    []
  ), En = k.useCallback((Y, ne) => {
    if (Y.length !== ne.length) return !1;
    const ce = [...Y].sort(), xe = [...ne].sort();
    return ce.every((Me, Oe) => Me === xe[Oe]);
  }, []), hr = k.useCallback(() => {
    Se(i), Le(!1), Ft(""), t(i);
  }, [i, t]), Ze = k.useRef(null);
  k.useImperativeHandle(
    fe,
    () => ({
      reset: hr,
      getSelectedValues: () => oe,
      setSelectedValues: (Y) => {
        Se(Y), t(Y);
      },
      clear: () => {
        Se([]), t([]);
      },
      focus: () => {
        if (Ze.current) {
          Ze.current.focus();
          const Y = Ze.current.style.outline, ne = Ze.current.style.outlineOffset;
          Ze.current.style.outline = "2px solid hsl(var(--ring))", Ze.current.style.outlineOffset = "2px", setTimeout(() => {
            Ze.current && (Ze.current.style.outline = Y, Ze.current.style.outlineOffset = ne);
          }, 1e3);
        }
      }
    }),
    [hr, oe, t]
  );
  const [Ye, Pn] = k.useState("desktop");
  k.useEffect(() => {
    if (typeof window > "u") return;
    const Y = () => {
      const ne = window.innerWidth;
      ne < 640 ? Pn("mobile") : ne < 1024 ? Pn("tablet") : Pn("desktop");
    };
    return Y(), window.addEventListener("resize", Y), () => {
      typeof window < "u" && window.removeEventListener("resize", Y);
    };
  }, []);
  const le = (() => {
    if (!U)
      return {
        maxCount: C,
        compactMode: !1
      };
    if (U === !0) {
      const ce = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[Ye];
      return {
        maxCount: (ce == null ? void 0 : ce.maxCount) ?? C,
        compactMode: (ce == null ? void 0 : ce.compactMode) ?? !1
      };
    }
    const Y = U[Ye];
    return {
      maxCount: (Y == null ? void 0 : Y.maxCount) ?? C,
      compactMode: (Y == null ? void 0 : Y.compactMode) ?? !1
    };
  })(), me = k.useCallback(() => {
    if (e.length === 0) return [];
    let Y;
    Mn(e) ? Y = e.flatMap((Me) => Me.options) : Y = e;
    const ne = /* @__PURE__ */ new Set(), ce = [], xe = [];
    return Y.forEach((Me) => {
      ne.has(Me.value) ? (ce.push(Me.value), Q || xe.push(Me)) : (ne.add(Me.value), xe.push(Me));
    }), process.env.NODE_ENV === "development" && ce.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${Q ? "automatically removed" : "detected"}: ${ce.join(
        ", "
      )}. ${Q ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), Q ? xe : Y;
  }, [e, Q, Mn]), ie = k.useCallback(
    (Y) => {
      const ne = me().find((ce) => ce.value === Y);
      return !ne && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${Y}" not found in options list`
      ), ne;
    },
    [me]
  ), ye = k.useCallback(
    (Y, ne) => {
      const [ce, xe] = Y.split(":");
      if (!_)
        return xe && xe.toLowerCase().includes(ne.toLowerCase()) ? 1 : 0;
      const Me = ne.toLowerCase();
      return xe && xe.toLowerCase().includes(Me) || ce && ce.toLowerCase().includes(Me) ? 1 : 0;
    },
    [_]
  ), We = (Y) => {
    if (Y.key === "Enter")
      Le(!0);
    else if (Y.key === "Backspace" && !Y.currentTarget.value) {
      const ne = [...oe];
      ne.pop(), Se(ne), t(ne);
    }
  }, ve = (Y) => {
    if (W) return;
    const ne = ie(Y);
    if (ne != null && ne.disabled) return;
    const ce = oe.includes(Y) ? oe.filter((xe) => xe !== Y) : [...oe, Y];
    Se(ce), t(ce), M && Le(!1);
  }, vr = () => {
    W || (Se([]), a([]), t([]));
  }, Ho = () => {
    W || Le((Y) => !Y);
  }, Go = () => {
    if (W) return;
    const Y = oe.slice(
      0,
      le.maxCount
    );
    Se(Y), t(Y);
  }, Rn = () => {
    if (W) return;
    const Y = me().filter((ne) => !ne.disabled);
    if (oe.length === Y.length)
      vr();
    else {
      const ne = Y.map((ce) => ce.value);
      Se(ne), t(ne);
    }
    M && Le(!1);
  }, Yo = B || ((Y) => {
    const { option: ne, location: ce, onRemove: xe, disabled: Me } = Y;
    return ce === "badge" ? /* @__PURE__ */ c.jsx(
      za,
      {
        className: A(
          tc({ variant: s }),
          le.compactMode && "text-xs px-1.5 py-0.5",
          Ye === "mobile" && "max-w-[120px] truncate",
          H && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Me && "cursor-not-allowed"
        ),
        ...!Me && { onRemove: xe },
        children: ne.label
      }
    ) : ne.label;
  }), Ko = me().length > 0, Uo = !!je.trim(), xr = Z !== void 0 && (!Uo || !!n);
  k.useEffect(() => {
    if (!R) return;
    const Y = pr.current;
    En(Y, i) || (En(oe, i) || Se(i), pr.current = [...i]);
  }, [i, oe, En, R]);
  const qo = {
    minWidth: j || (Ye === "mobile" ? "0px" : "200px"),
    maxWidth: $ || "100%",
    popoverMaxWidth: $ || "32rem",
    width: L ? "auto" : "100%"
  }, Ys = k.useMemo(() => G === "default" || oe.length === 0 ? l : oe.map((Y) => {
    var ne;
    return (ne = ie(Y)) == null ? void 0 : ne.label;
  }).filter(Boolean).join(", "), [oe, ie, l, G]);
  return k.useEffect(() => {
    Ne || Ft("");
  }, [Ne]), k.useEffect(() => {
    const Y = oe.length, ne = me(), ce = ne.filter((xe) => !xe.disabled).length;
    if (Y !== Lt.current) {
      const xe = Y - Lt.current;
      if (xe > 0) {
        const Oe = oe.slice(-xe).map((Pe) => {
          var vt;
          return (vt = ne.find((Vm) => Vm.value === Pe)) == null ? void 0 : vt.label;
        }).filter(Boolean);
        Oe.length === 1 ? ht(
          `${Oe[0]} selected. ${Y} of ${ce} options selected.`
        ) : ht(
          `${Oe.length} options selected. ${Y} of ${ce} total selected.`
        );
      } else xe < 0 && ht(
        `Option removed. ${Y} of ${ce} options selected.`
      );
      Lt.current = Y;
    }
    Ne !== en.current && (ht(
      Ne ? `Dropdown opened. ${ce} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), en.current = Ne), je !== dr.current && je !== void 0 && (je && Ne && ht(`Searching for "${je}"`), dr.current = je);
  }, [oe, Ne, je, ht, me]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ c.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: Nt }),
      /* @__PURE__ */ c.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Bo })
    ] }),
    /* @__PURE__ */ c.jsxs(
      pm,
      {
        open: Ne,
        onOpenChange: Le,
        modal: P,
        children: [
          /* @__PURE__ */ c.jsx("div", { id: fr, className: "sr-only", children: u }),
          /* @__PURE__ */ c.jsx("div", { id: mr, className: "sr-only", "aria-live": "polite", children: oe.length === 0 ? f : `${oe.length} option${oe.length === 1 ? "" : "s"} selected: ${oe.map((Y) => {
            var ne;
            return (ne = ie(Y)) == null ? void 0 : ne.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ c.jsxs("div", { className: A(L && "w-auto", S), children: [
            /* @__PURE__ */ c.jsx(HS, { asChild: !0, children: K || /* @__PURE__ */ c.jsx(
              "button",
              {
                ref: Ze,
                ...he,
                onClick: Ho,
                disabled: W,
                className: A(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  L ? "w-auto" : "w-full",
                  !V && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  V && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  le.compactMode && "min-h-8 text-sm",
                  Ye === "mobile" && "min-h-12"
                ),
                style: {
                  ...qo,
                  maxWidth: `min(${qo.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": Ne,
                "aria-haspopup": "listbox",
                "aria-controls": Ne ? ur : void 0,
                "aria-describedby": `${fr} ${mr}`,
                "aria-label": `Multi-select: ${oe.length} of ${me().length} options selected. ${d}`,
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
                            G === "inline" && "truncate",
                            W ? "text-body-disabled" : Ne || G === "inline" && Ys !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: Ys
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        ro,
                        {
                          className: A(
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
            !(D || G === "inline") && /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              oe.slice(0, le.maxCount).map((Y) => {
                const ne = ie(Y);
                return ne ? /* @__PURE__ */ c.jsx(k.Fragment, { children: Yo({
                  option: ne,
                  location: "badge",
                  onRemove: () => ve(Y),
                  disabled: W
                }) }, Y) : null;
              }).filter(Boolean),
              oe.length > le.maxCount && /* @__PURE__ */ c.jsxs(
                za,
                {
                  className: A(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    tc({ variant: s }),
                    le.compactMode && "text-xs px-1.5 py-0.5",
                    H && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    W && "cursor-not-allowed"
                  ),
                  ...!W && { onRemove: Go },
                  children: [
                    "+ ",
                    oe.length - le.maxCount,
                    " ",
                    y
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(
            Hs,
            {
              id: ur,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": x,
              className: A(
                "p-0 w-auto",
                Ye === "mobile" && "w-[85vw] max-w-[280px]",
                Ye === "tablet" && "max-w-md w-[70vw]",
                Ye === "desktop" && "min-w-[300px]",
                T
              ),
              style: {
                maxWidth: `min(${qo.popoverMaxWidth}, 85vw)`,
                maxHeight: Ye === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ c.jsxs(Nm, { filter: ye, shouldFilter: !n, children: [
                O && /* @__PURE__ */ c.jsxs("header", { children: [
                  /* @__PURE__ */ c.jsx("div", { id: `${Wt}-search-help`, className: "sr-only", children: p }),
                  /* @__PURE__ */ c.jsx(
                    Mm,
                    {
                      placeholder: N,
                      onKeyDown: We,
                      value: je,
                      onValueChange: (Y) => {
                        Ft(Y), n == null || n(Y);
                      },
                      "aria-label": h,
                      "aria-describedby": `${Wt}-search-help`
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsxs(
                  Em,
                  {
                    className: A(
                      "max-h-[calc(40vh-56px)] overflow-y-auto",
                      Ye === "mobile" && "max-h-[calc(50vh-56px)]"
                    ),
                    style: { overscrollBehaviorY: "contain" },
                    children: [
                      r && /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          role: "status",
                          className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                          children: /* @__PURE__ */ c.jsx(To.Circular, { size: "sm", children: o })
                        }
                      ),
                      !r && (Ko || Uo) && /* @__PURE__ */ c.jsx(Pm, { children: I }),
                      !r && !Ko && !Uo && /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          role: "status",
                          className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                          children: F
                        }
                      ),
                      !r && !E && !je && Ko && /* @__PURE__ */ c.jsx(Vr, { children: /* @__PURE__ */ c.jsxs(
                        Br,
                        {
                          value: "select-all",
                          onSelect: Rn,
                          role: "option",
                          "aria-selected": oe.length === me().filter((Y) => !Y.disabled).length,
                          "aria-label": `Select all ${me().length} options`,
                          className: "cursor-pointer",
                          children: [
                            /* @__PURE__ */ c.jsx(
                              Wr,
                              {
                                className: "mr-xs",
                                checked: oe.length === me().filter((Y) => !Y.disabled).length
                              }
                            ),
                            /* @__PURE__ */ c.jsxs("span", { children: [
                              "(",
                              v,
                              me().length > 20 ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                                " - ",
                                me().length,
                                " ",
                                g
                              ] }) : null,
                              ")"
                            ] })
                          ]
                        },
                        "all"
                      ) }),
                      !r && (Mn(e) ? (() => {
                        let Y = 0;
                        const ne = e.reduce(
                          (Oe, Pe) => Oe + Pe.options.length,
                          0
                        ), ce = e.map((Oe) => {
                          const Pe = xr ? Oe.options.filter(
                            (vt) => Y++ < Z || oe.includes(vt.value)
                          ) : Oe.options;
                          return { ...Oe, options: Pe };
                        }), xe = ce.reduce(
                          (Oe, Pe) => Oe + Pe.options.length,
                          0
                        ), Me = (J ?? ne) - xe;
                        return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                          ce.map((Oe) => Oe.options.length === 0 ? null : /* @__PURE__ */ c.jsx(
                            Vr,
                            {
                              heading: Oe.heading,
                              children: Oe.options.map((Pe) => {
                                const vt = oe.includes(
                                  Pe.value
                                );
                                return /* @__PURE__ */ c.jsxs(
                                  Br,
                                  {
                                    value: `${Pe.value}:${Pe.label}`,
                                    onSelect: () => ve(Pe.value),
                                    role: "option",
                                    "aria-selected": vt,
                                    "aria-disabled": Pe.disabled ?? !1,
                                    "aria-label": `${Pe.label}${vt ? ", selected" : ", not selected"}${Pe.disabled ? ", disabled" : ""}`,
                                    className: A(
                                      "cursor-pointer",
                                      Pe.disabled && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: !!Pe.disabled,
                                    children: [
                                      /* @__PURE__ */ c.jsx(
                                        Wr,
                                        {
                                          className: "mr-xs",
                                          checked: vt
                                        }
                                      ),
                                      /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Yo({
                                        option: Pe,
                                        location: "dropdown",
                                        isSelected: vt
                                      }) })
                                    ]
                                  },
                                  Pe.value
                                );
                              })
                            },
                            Oe.heading
                          )),
                          xr && Me > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: se(Me) })
                        ] });
                      })() : /* @__PURE__ */ c.jsx(Vr, { children: (() => {
                        const Y = xr ? e.filter(
                          (ce, xe) => xe < Z || oe.includes(ce.value)
                        ) : e, ne = (J ?? e.length) - Y.length;
                        return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
                          Y.map((ce) => {
                            const xe = oe.includes(
                              ce.value
                            );
                            return /* @__PURE__ */ c.jsxs(
                              Br,
                              {
                                value: `${ce.value}:${ce.label}`,
                                onSelect: () => ve(ce.value),
                                role: "option",
                                "aria-selected": xe,
                                "aria-disabled": ce.disabled ?? !1,
                                "aria-label": `${ce.label}${xe ? ", selected" : ", not selected"}${ce.disabled ? ", disabled" : ""}`,
                                className: A(
                                  "cursor-pointer",
                                  ce.disabled && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                ),
                                disabled: !!ce.disabled,
                                children: [
                                  /* @__PURE__ */ c.jsx(
                                    Wr,
                                    {
                                      className: "mr-xs",
                                      checked: xe
                                    }
                                  ),
                                  /* @__PURE__ */ c.jsx("span", { className: "min-w-0 overflow-hidden", children: Yo({
                                    option: ce,
                                    location: "dropdown",
                                    isSelected: xe
                                  }) })
                                ]
                              },
                              ce.value
                            );
                          }),
                          xr && ne > 0 && /* @__PURE__ */ c.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: se(ne) })
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
                        Ae,
                        {
                          intent: "text",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: vr,
                          disabled: oe.length === 0,
                          children: w
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
                        Ae,
                        {
                          intent: "primary",
                          size: "xs",
                          className: "min-w-auto",
                          onClick: () => {
                            a(oe), Le(!1);
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
}, Ck = k.forwardRef(
  wk
);
Ck.displayName = "MultiSelect";
const Sk = ae(
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
), kk = ae(
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
), Nk = ae(
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
), Ya = ({
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
      const { children: E } = S.props;
      if (E) return b(E);
    }
    return "";
  }, y = (S) => !w || !h || "type" in S && (S.type === "Group" || S.type === "Separator") ? !0 : "label" in S ? b(S.label).toLowerCase().includes(h.toLowerCase()) : !0, N = {
    ...p
  }, C = i !== void 0 ? String(i) : void 0, P = (S) => {
    const E = e.find(
      (O) => "value" in O && String(O.value) === S
    );
    return E && "value" in E ? E.value : S;
  };
  return C !== void 0 && (N.value = C), d && (N.onValueChange = (S) => {
    const E = P(S);
    d(E);
  }), /* @__PURE__ */ c.jsxs(
    Cb,
    {
      ...N,
      onOpenChange: (S) => {
        var E;
        S || x(""), (E = N.onOpenChange) == null || E.call(N, S);
      },
      children: [
        /* @__PURE__ */ c.jsxs(
          Sb,
          {
            className: A(
              Sk({ variant: a, intent: s, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ c.jsxs("div", { className: "inline-flex items-center truncate", children: [
                _e(r, {
                  className: A("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ c.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ c.jsx(
                  kb,
                  {
                    placeholder: t || "Select an option",
                    className: A("hidden", {
                      "text-sm": a === "compact"
                    })
                  }
                ) })
              ] }),
              !l && /* @__PURE__ */ c.jsx(
                Nb,
                {
                  className: A("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": p.disabled
                  }),
                  children: /* @__PURE__ */ c.jsx(
                    ro,
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
        /* @__PURE__ */ c.jsx(Mb, { children: /* @__PURE__ */ c.jsxs(
          Eb,
          {
            position: "popper",
            sideOffset: -1,
            className: A(kk({ variant: a }), n),
            children: [
              w && /* @__PURE__ */ c.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ c.jsx(Ua, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
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
              /* @__PURE__ */ c.jsx(_b, {}),
              /* @__PURE__ */ c.jsx(Pb, { children: e.map((S, E) => {
                const O = y(S);
                switch (S.type) {
                  case "Group":
                    return /* @__PURE__ */ c.jsx(
                      Rb,
                      {
                        className: A(!O && "hidden"),
                        children: /* @__PURE__ */ c.jsx(Ab, { children: S.label })
                      },
                      E
                    );
                  case "Separator":
                    return /* @__PURE__ */ c.jsx(
                      Tb,
                      {
                        className: A(
                          "border-divider-default h-px border-b",
                          !O && "hidden"
                        )
                      },
                      E
                    );
                  default:
                    return /* @__PURE__ */ c.jsxs(
                      Db,
                      {
                        value: String(S.value),
                        disabled: S.disabled ?? !1,
                        className: A(
                          Nk({
                            variant: a,
                            isSelected: i === S.value
                          }),
                          !O && "hidden"
                        ),
                        children: [
                          _e(S.icon, {
                            className: A("h-5 w-5", {
                              "-ml-xxs": a === "default",
                              "mr-xxs": a === "compact",
                              "text-interactive-disabled": S.disabled
                            })
                          }),
                          /* @__PURE__ */ c.jsx(
                            jb,
                            {
                              className: A("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": S.disabled
                              }),
                              children: S.label
                            }
                          ),
                          /* @__PURE__ */ c.jsx(Ob, {})
                        ]
                      },
                      E
                    );
                }
              }) }),
              /* @__PURE__ */ c.jsx(Ib, {}),
              /* @__PURE__ */ c.jsx($b, {})
            ]
          }
        ) })
      ]
    }
  );
};
Ya.displayName = "Select";
const Mk = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), nc = ae(
  "text-md text-body-primary text-right leading-[14px] whitespace-nowrap"
), Ek = k.forwardRef(
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
        className: A(Mk({ size: f }), p),
        ...h,
        children: [
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(nc()), children: i }),
            /* @__PURE__ */ c.jsx(
              Ya,
              {
                value: o.toString(),
                onValueChange: w,
                options: y
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ c.jsx("span", { className: A(nc()), children: l }),
            /* @__PURE__ */ c.jsx(
              Ya,
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
              Ae,
              {
                intent: "text",
                size: "sm",
                icon: tp,
                onClick: v,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Ae,
              {
                intent: "text",
                size: "sm",
                icon: ac,
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
Ek.displayName = "Pagination";
const Pk = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), Rk = ae(
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
), Ak = ae(
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
), TN = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: a = !1,
  ...s
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ c.jsxs("div", { className: A(Pk({ disabled: o })), children: [
    /* @__PURE__ */ c.jsx(
      tb,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": a,
        className: A(
          Rk({
            disabled: o,
            invalid: a
          })
        ),
        ...s,
        children: /* @__PURE__ */ c.jsx(nb, { className: A(Ak({ invalid: a })) })
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
}, $N = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  eb,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), Dk = ae(
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
), jk = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", Ok = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, _k = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, Ik = ae(
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
), Tk = "gap-xs text-sm text-body-inverse flex-row", $k = ae(
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
), Fk = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, Lk = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", Wk = k.forwardRef(
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
    const N = k.useRef(y), { compositionHandlers: C, guardKeyHandler: P } = Lo();
    Ht(() => {
      N.current === "filled" && y !== "filled" && g([]), N.current = y;
    }, [y]);
    const S = (I) => {
      x || o && o(I);
    }, E = (I) => {
      if (!x) {
        if (I.key === "Enter" && n.trim()) {
          const F = [...v, n.trim()];
          if (g(F), o) {
            const L = {
              ...I,
              target: { value: "" }
            };
            o(L);
          }
          u && a && a(F), I.preventDefault();
        }
        if ((I.key === "Backspace" || I.key === "Delete") && !n && v.length > 0) {
          const F = v.slice(0, -1);
          g(F), u && a && a(F), I.preventDefault();
        }
      }
    }, O = (I) => {
      if (x) return;
      const F = v.filter((L, H) => H !== I);
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
                Dk({
                  size: e,
                  state: y
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ c.jsxs("div", { className: A(jk), children: [
                  /* @__PURE__ */ c.jsxs("div", { className: A(Lk, Ok), children: [
                    /* @__PURE__ */ c.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ c.jsx(Ua, { size: 20 })
                      }
                    ),
                    v.map((I, F) => /* @__PURE__ */ c.jsxs("span", { className: $k({ size: e }), children: [
                      /* @__PURE__ */ c.jsx("span", { children: I }),
                      /* @__PURE__ */ c.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            Fk,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (L) => {
                            L.stopPropagation(), L.preventDefault(), O(F);
                          },
                          onMouseDown: (L) => {
                            L.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: x,
                          children: /* @__PURE__ */ c.jsx(xa, { size: 8 })
                        }
                      )
                    ] }, F)),
                    /* @__PURE__ */ c.jsx(
                      "input",
                      {
                        ref: h,
                        className: A(_k),
                        type: "text",
                        value: n,
                        onChange: S,
                        onKeyDown: P(E),
                        onCompositionStart: C.onCompositionStart,
                        onCompositionEnd: C.onCompositionEnd,
                        onFocus: (I) => {
                          var F;
                          b(!0), (F = p.onFocus) == null || F.call(p, I);
                        },
                        onBlur: (I) => {
                          var F;
                          b(!1), (F = p.onBlur) == null || F.call(p, I);
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
                      children: /* @__PURE__ */ c.jsx(xa, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ c.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      Ik({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let I = v;
                      n.trim() && (I = [...v, n.trim()], g(I), o && o({
                        target: { value: "" }
                      })), a == null || a(I);
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
                Tk,
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
Wk.displayName = "SearchBar";
const Rm = k.createContext(null), Vk = () => {
  const e = k.useContext(Rm);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, Bk = ae(
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
), Am = k.forwardRef(
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
    return /* @__PURE__ */ c.jsx(Rm.Provider, { value: b, children: /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: u,
        id: s,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": a || void 0,
        className: A(Bk({ invalid: o }), i),
        ...d,
        children: l
      }
    ) });
  }
);
Am.displayName = "SegmentedControl.Group";
const zk = ae(
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
), Dm = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: a
}) => {
  const s = Vk(), i = s.value !== void 0 && String(s.value) === String(e), l = t || s.disabled, d = r ?? `${s.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ c.jsxs(
    "label",
    {
      htmlFor: d,
      className: A(zk({ selected: i, disabled: l }), o),
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
        n && _e(n, { size: 16, className: "shrink-0" }),
        a
      ]
    }
  );
};
Dm.displayName = "SegmentedControl.Option";
const FN = {
  Group: Am,
  Option: Dm
}, jm = no(void 0), Om = no(!1), Hk = ({
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
  return /* @__PURE__ */ c.jsx(jm.Provider, { value: a, children: t });
}, Gk = ({
  children: e
}) => /* @__PURE__ */ c.jsx(Om.Provider, { value: !0, children: e }), cr = () => {
  const e = zr(jm);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = zr(Om);
  return { ...e, isInFooter: t };
}, _m = k.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
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
      children: a ? /* @__PURE__ */ c.jsx(fp, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ c.jsx(dp, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ c.jsx(wt, { content: i, side: "right", delayDuration: 0, children: l }) : l;
});
_m.displayName = "SideNavigationCollapseButton";
const Yk = ae(
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
), Kk = k.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ c.jsx(Hk, { defaultCollapsed: e, children: /* @__PURE__ */ c.jsx(Im, { ref: n, ...t }) }));
Kk.displayName = "SideNavigation";
const Im = k.forwardRef(
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
    const { isCollapsed: u } = cr(), f = t || (u ? "collapsed" : "expanded");
    return /* @__PURE__ */ c.jsxs(
      "nav",
      {
        ref: d,
        className: A(
          Yk({ width: f }),
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
          r && /* @__PURE__ */ c.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ c.jsx(Gk, { children: r }) }),
          a && /* @__PURE__ */ c.jsx(
            _m,
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
Im.displayName = "SideNavigationContent";
const Uk = ae(
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
), qk = k.forwardRef(
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
    const { isCollapsed: u, isInFooter: f } = cr(), p = r ? vn : "button", h = i ? "disabled" : t, x = /* @__PURE__ */ c.jsx(
      p,
      {
        ref: d,
        className: A(
          Uk({
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
    return u && a ? /* @__PURE__ */ c.jsx(wt, { content: a, side: "right", delayDuration: 0, children: x }) : x;
  }
);
qk.displayName = "SideNavigationItem";
const Xk = ae("flex flex-col", {
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
}), Zk = k.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, a) => {
  const { isCollapsed: s } = cr();
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: a,
      className: A(
        Xk({ isCollapsed: s, isLast: r }),
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
Zk.displayName = "SideNavigationSection";
const Qk = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Jk = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", LN = () => {
  const { isCollapsed: e } = cr();
  return /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Qk,
        alt: "SDS管理",
        className: `h-[22px] w-[93px] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ c.jsx(
      "img",
      {
        src: Jk,
        alt: "SDS管理",
        className: `h-[22px] w-[22px] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
}, eN = ae(
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
), tN = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), WN = ({
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
        eN({
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
        i && s && /* @__PURE__ */ c.jsx("div", { className: tN({ indicator: s }) }),
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
}, nN = k.forwardRef(
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
      Tm,
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
                    oc,
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
), Tm = k.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
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
Tm.displayName = "RadialStepper";
nN.displayName = "Stepper";
const rN = m.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const a = n || (t ? `switch-${t}` : void 0), s = /* @__PURE__ */ c.jsx(
    Bb,
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
        zb,
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
rN.displayName = "Switch";
const Ka = {
  loading: !1,
  loadingText: "ローディング中…"
}, $m = k.createContext(
  Ka
), Fm = () => k.useContext($m), oN = k.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Ka.loading,
    loadingText: r = Ka.loadingText,
    ...o
  }, a) => {
    const s = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ c.jsx($m.Provider, { value: s, children: /* @__PURE__ */ c.jsx(
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
oN.displayName = "Table";
const aN = k.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: a } = Fm(), s = t ?? a;
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
            To.Linear,
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
aN.displayName = "TableHeader";
const Lm = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ c.jsx(
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
Lm.displayName = "TableCoverMessage";
const sN = k.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, a) => {
    const { loading: s, loadingText: i } = Fm(), l = t ?? s, d = n ?? i;
    return /* @__PURE__ */ c.jsx("tbody", { ref: a, className: e, ...o, children: l ? /* @__PURE__ */ c.jsx(Lm, { className: "text-body-secondary", children: d }) : r });
  }
);
sN.displayName = "TableBody";
const iN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
iN.displayName = "TableFooter";
const cN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
cN.displayName = "TableRow";
const lN = k.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
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
lN.displayName = "TableHead";
const dN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
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
dN.displayName = "TableCell";
const uN = k.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
uN.displayName = "TableCaption";
const VN = k.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
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
)), fN = k.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ c.jsx(
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
fN.displayName = "TableRowOverlay";
const mN = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), pN = ae(
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
), hN = ae(
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
function vN() {
  const [e, t] = k.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return k.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function gN(e) {
  const t = [];
  return k.Children.forEach(e, (n) => {
    k.isValidElement(n) && n.type === Wm && t.push(n);
  }), t;
}
const xN = k.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, a) => {
  const s = t ?? "normal", i = vN(), l = k.useRef(null), d = k.useRef(null), u = k.useRef(/* @__PURE__ */ new Map()), f = k.useRef(/* @__PURE__ */ new Map()), p = k.useMemo(() => gN(n), [n]), [h, x] = k.useState(p.length), [v, g] = k.useState(!1), w = k.useCallback(() => {
    if (!i) {
      x(p.length), g(!0);
      return;
    }
    const S = l.current;
    if (!S) return;
    u.current.forEach((T, W) => {
      const V = T.offsetWidth;
      V > 0 && f.current.set(W, V);
    });
    const E = S.clientWidth, O = d.current, I = O ? O.offsetWidth + 8 : 80;
    let F = 0;
    for (const T of p)
      F += f.current.get(T.props.value) ?? 0;
    if (F <= E) {
      x(p.length), g(!0);
      return;
    }
    let L = 0, H = 0;
    for (const T of p) {
      const W = f.current.get(T.props.value) ?? 0;
      if (L + W + I <= E)
        L += W, H++;
      else
        break;
    }
    x(Math.max(H, 1)), g(!0);
  }, [p, i]);
  k.useEffect(() => {
    const S = l.current;
    if (!S) return;
    const E = new ResizeObserver(() => {
      w();
    });
    return E.observe(S), w(), () => E.disconnect();
  }, [w]);
  const b = p.slice(h), y = b.length > 0, N = o.value ?? o.defaultValue, C = b.some(
    (S) => S.props.value === N
  ), P = r ?? ((S) => `${S} more`);
  return /* @__PURE__ */ c.jsx(Kb, { ref: a, className: A("w-full", e), ...o, children: /* @__PURE__ */ c.jsxs(
    Ub,
    {
      ref: l,
      className: A(
        mN({ size: s }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        p.map(
          (S, E) => k.cloneElement(S, {
            key: S.props.value,
            size: s,
            ref: (O) => {
              O ? u.current.set(S.props.value, O) : u.current.delete(S.props.value);
            },
            className: A(
              S.props.className,
              v && E >= h && "hidden"
            )
          })
        ),
        y && v && /* @__PURE__ */ c.jsx("div", { ref: d, className: "inline-flex shrink-0", children: /* @__PURE__ */ c.jsxs(Ws, { children: [
          /* @__PURE__ */ c.jsx(Vs, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              className: A(
                hN({ size: s }),
                C && "font-bold text-interactive-primary-default"
              ),
              children: [
                /* @__PURE__ */ c.jsx(
                  cp,
                  {
                    size: s === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                P(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ c.jsx(Ls, { align: "end", size: "sm", children: b.map((S) => {
            const { value: E, disabled: O, asChild: I, children: F } = S.props, L = A(
              E === N && "font-bold text-interactive-primary-default"
            );
            return I && k.isValidElement(F) ? /* @__PURE__ */ c.jsx(
              Wa,
              {
                disabled: O ?? !1,
                asChild: !0,
                className: L,
                children: F
              },
              E
            ) : /* @__PURE__ */ c.jsx(
              Wa,
              {
                disabled: O ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(E);
                },
                className: L,
                children: F
              },
              E
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
xN.displayName = "TabBar";
const Wm = k.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ c.jsx(
    qb,
    {
      ref: r,
      className: A(pN({ size: o }), e),
      ...n
    }
  );
});
Wm.displayName = "Tab";
const bN = ae(
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
), yN = k.forwardRef(
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
    } = o, [h, x] = Ve(o.value);
    Ht(() => {
      x(o.value);
    }, [o.value]);
    const { compositionHandlers: v, guardKeyHandler: g } = Lo(), w = (N) => {
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
          className: A(bN({ invalid: e }), t),
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
yN.displayName = "TextArea";
const BN = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ c.jsx(
  hy,
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
            lc,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ c.jsx(
            Xs,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ c.jsx(
            Xs,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ c.jsx(Tr, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { children: [
          t && /* @__PURE__ */ c.jsx(
            vy,
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
          /* @__PURE__ */ c.jsx(gy, { children: /* @__PURE__ */ c.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { children: /* @__PURE__ */ c.jsx(xy, { asChild: !0, altText: "Close", children: /* @__PURE__ */ c.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ c.jsx(xa, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), zN = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ c.jsxs(my, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ c.jsx(
    py,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), wN = ae(
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
), CN = k.forwardRef(
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
    const [P, S] = Ve(!1), E = yt(null), O = ge(
      (M) => {
        M.preventDefault(), M.stopPropagation(), P || S(!0);
      },
      [P]
    ), I = ge((M) => {
      M.preventDefault(), M.stopPropagation(), S(!1);
    }, []), F = ge((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), L = ge(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), S(!1), s) return;
        const _ = M.dataTransfer.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [s, r]
    ), H = ge(() => {
      var M;
      s || (M = E.current) == null || M.click();
    }, [s]), T = ge(
      (M) => {
        const _ = M.target.files;
        _ && _.length > 0 && (r == null || r(_));
      },
      [r]
    ), W = P ? "dragging" : n, V = () => /* @__PURE__ */ c.jsx(
      sp,
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
        Ae,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: Zs,
          onClick: (M) => {
            M.stopPropagation(), H();
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
        Ae,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: Zs,
          onClick: (M) => {
            M.stopPropagation(), H();
          },
          children: v
        }
      )
    ] }), $ = () => {
      const M = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return W === "inProgress" && i !== void 0 ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || M }),
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
          To.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : W === "success" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-body-primary", children: l || M }),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: (_) => {
                _.stopPropagation(), p == null || p();
              },
              children: /* @__PURE__ */ c.jsx(wp, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(
            op,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ c.jsx("p", { className: "text-interactive-primary-default", children: f || b })
        ] })
      ] }) : W === "error" ? /* @__PURE__ */ c.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: l || M }) }),
        /* @__PURE__ */ c.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ c.jsx(qm, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-body-alert", children: u || y })
        ] })
      ] }) : null;
    }, Q = () => t === "small" ? U() : j(), R = () => /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: O,
        onDragLeave: I,
        onDragOver: F,
        onDrop: L
      }
    );
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsxs(
        "div",
        {
          ref: C,
          className: A(
            "relative",
            wN({ size: t, state: W, disabled: s }),
            e
          ),
          onClick: H,
          role: "button",
          tabIndex: s ? -1 : 0,
          "aria-disabled": s,
          ...N,
          children: [
            /* @__PURE__ */ c.jsx(
              "input",
              {
                ref: E,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: a,
                onChange: T,
                disabled: s
              }
            ),
            R(),
            Q()
          ]
        }
      ),
      (W === "inProgress" && i !== void 0 || W === "success" || W === "error") && $()
    ] });
  }
);
CN.displayName = "FileUploader";
export {
  RN as Accordion,
  PN as AccountMenu,
  hm as AutoSuggest,
  kw as Badge,
  Ew as Breadcrumbs,
  Ae as Button,
  Zf as Calendar,
  hS as Callout,
  Wr as Checkbox,
  xS as CheckboxGroup,
  yS as ChoiceChip,
  wS as ChoiceChipGroup,
  DN as DataSheet,
  dm as DataSheetAction,
  Jf as DataSheetHeader,
  tm as DataSheetKeyValue,
  em as DataSheetSection,
  am as DataSheetTable,
  lm as DataSheetTableActionsCell,
  im as DataSheetTableBody,
  to as DataSheetTableCell,
  sm as DataSheetTableHeader,
  cm as DataSheetTableRow,
  $S as DatePicker,
  jN as Dialog,
  Ws as Dropdown,
  Ls as DropdownContent,
  Wa as DropdownItem,
  Sw as DropdownLabel,
  Cw as DropdownSeparator,
  Vs as DropdownTrigger,
  CN as FileUploader,
  Gk as FooterProvider,
  _N as FormField,
  LN as Logo,
  Ck as MultiSelect,
  ON as MultiStepDialog,
  Ek as Pagination,
  To as ProgressIndicator,
  TN as RadioButton,
  $N as RadioButtonGroup,
  Wk as SearchBar,
  FN as SegmentedControl,
  Ya as Select,
  Kk as SideNavigation,
  _m as SideNavigationCollapseButton,
  qk as SideNavigationItem,
  Hk as SideNavigationProvider,
  Zk as SideNavigationSection,
  WN as StatusIndicator,
  nN as Stepper,
  rN as Switch,
  Wm as Tab,
  xN as TabBar,
  oN as Table,
  sN as TableBody,
  uN as TableCaption,
  dN as TableCell,
  Lm as TableCoverMessage,
  iN as TableFooter,
  lN as TableHead,
  VN as TableHeadSortButton,
  aN as TableHeader,
  cN as TableRow,
  fN as TableRowOverlay,
  za as Tag,
  vm as TagInput,
  yN as TextArea,
  IN as TextField,
  Ba as TextLink,
  BN as ToastItem,
  zN as ToastProvider,
  wt as Tooltip,
  AN as TooltipProvider,
  US as colorCodeToTokenMap,
  Fn as iconVariants,
  _S as inputVariants,
  um as inputWrapperVariants,
  cr as useSideNavigation
};
