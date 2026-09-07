import * as m from "react";
import E, { forwardRef as Dp, createElement as Fc, useState as Xe, useLayoutEffect as Td, createContext as Ks, useContext as As, useCallback as be, useRef as rt, useEffect as fn, useMemo as ho, useInsertionEffect as Yw, memo as Gw, startTransition as Uw, useImperativeHandle as Kw } from "react";
import * as qs from "react-dom";
import qw, { flushSync as Xw } from "react-dom";
var ka = { exports: {} }, qo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wf;
function Zw() {
  if (Wf) return qo;
  Wf = 1;
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
  return qo.Fragment = t, qo.jsx = n, qo.jsxs = n, qo;
}
var Xo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lf;
function Qw() {
  return Lf || (Lf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === T ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case x:
          return "Fragment";
        case b:
          return "Profiler";
        case C:
          return "StrictMode";
        case P:
          return "Suspense";
        case _:
          return "SuspenseList";
        case O:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case v:
            return "Portal";
          case S:
            return N.displayName || "Context";
          case g:
            return (N._context.displayName || "Context") + ".Consumer";
          case w:
            var M = N.render;
            return N = N.displayName, N || (N = M.displayName || M.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case k:
            return M = N.displayName || null, M !== null ? M : e(N.type) || "Memo";
          case D:
            M = N._payload, N = N._init;
            try {
              return e(N(M));
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
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var $ = M.error, z = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return $.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), t(N);
      }
    }
    function r(N) {
      if (N === x) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === D)
        return "<...>";
      try {
        var M = e(N);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var N = W.A;
      return N === null ? null : N.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(N) {
      if (F.call(N, "key")) {
        var M = Object.getOwnPropertyDescriptor(N, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function i(N, M) {
      function $() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: $,
        configurable: !0
      });
    }
    function c() {
      var N = e(this.type);
      return K[N] || (K[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function l(N, M, $, z, U, G) {
      var R = $.ref;
      return N = {
        $$typeof: y,
        type: N,
        key: M,
        props: $,
        _owner: z
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(N, "ref", {
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
        value: U
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function f(N, M, $, z, U, G) {
      var R = M.children;
      if (R !== void 0)
        if (z)
          if (L(R)) {
            for (z = 0; z < R.length; z++)
              d(R[z]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (F.call(M, "key")) {
        R = e(N);
        var Z = Object.keys(M).filter(function(se) {
          return se !== "key";
        });
        z = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", ne[R + z] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          R,
          Z,
          R
        ), ne[R + z] = !0);
      }
      if (R = null, $ !== void 0 && (n($), R = "" + $), a(M) && (n(M.key), R = "" + M.key), "key" in M) {
        $ = {};
        for (var J in M)
          J !== "key" && ($[J] = M[J]);
      } else $ = M;
      return R && i(
        $,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), l(
        N,
        R,
        $,
        o(),
        U,
        G
      );
    }
    function d(N) {
      h(N) ? N._store && (N._store.validated = 1) : typeof N == "object" && N !== null && N.$$typeof === D && (N._payload.status === "fulfilled" ? h(N._payload.value) && N._payload.value._store && (N._payload.value._store.validated = 1) : N._store && (N._store.validated = 1));
    }
    function h(N) {
      return typeof N == "object" && N !== null && N.$$typeof === y;
    }
    var p = E, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), g = Symbol.for("react.consumer"), S = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), W = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, L = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var V, K = {}, I = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), j = H(r(s)), ne = {};
    Xo.Fragment = x, Xo.jsx = function(N, M, $) {
      var z = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        N,
        M,
        $,
        !1,
        z ? Error("react-stack-top-frame") : I,
        z ? H(r(N)) : j
      );
    }, Xo.jsxs = function(N, M, $) {
      var z = 1e4 > W.recentlyCreatedOwnerStacks++;
      return f(
        N,
        M,
        $,
        !0,
        z ? Error("react-stack-top-frame") : I,
        z ? H(r(N)) : j
      );
    };
  })()), Xo;
}
var Ff;
function Jw() {
  return Ff || (Ff = 1, process.env.NODE_ENV === "production" ? ka.exports = Zw() : ka.exports = Qw()), ka.exports;
}
var u = Jw();
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var e1 = {
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
  const o = Dp(
    ({ color: s = "currentColor", size: a = 24, stroke: i = 2, title: c, className: l, children: f, ...d }, h) => Fc(
      "svg",
      {
        ref: h,
        ...e1[e],
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
        c && Fc("title", { key: "svg-title" }, c),
        ...r.map(([p, y]) => Fc(p, y)),
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
const t1 = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], n1 = De("outline", "alert-circle", "AlertCircle", t1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r1 = [["path", { d: "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2z", key: "svg-4" }]], o1 = De("outline", "calendar-event", "CalendarEvent", r1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s1 = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Ap = De("outline", "check", "Check", s1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a1 = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Xs = De("outline", "chevron-down", "ChevronDown", a1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i1 = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], c1 = De("outline", "chevron-left", "ChevronLeft", i1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Op = De("outline", "chevron-right", "ChevronRight", l1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], u1 = De("outline", "chevron-up", "ChevronUp", d1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = [["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }], ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]], h1 = De("outline", "circle-check", "CircleCheck", f1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = [["path", { d: "M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.38 0 2.57 .811 3.128 1.986", key: "svg-0" }], ["path", { d: "M19 22v-6", key: "svg-1" }], ["path", { d: "M22 19l-3 -3l-3 3", key: "svg-2" }]], m1 = De("outline", "cloud-up", "CloudUp", p1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = [["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], g1 = De("outline", "dots-vertical", "DotsVertical", v1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = [["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }], ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }], ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }], ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]], b1 = De("outline", "grip-vertical", "GripVertical", y1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M15 10l-2 2l2 2", key: "svg-2" }]], w1 = De("outline", "layout-sidebar-left-collapse", "LayoutSidebarLeftCollapse", x1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }], ["path", { d: "M9 4v16", key: "svg-1" }], ["path", { d: "M14 10l2 2l-2 2", key: "svg-2" }]], S1 = De("outline", "layout-sidebar-left-expand", "LayoutSidebarLeftExpand", C1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = [["path", { d: "M12 6l0 -3", key: "svg-0" }], ["path", { d: "M16.25 7.75l2.15 -2.15", key: "svg-1" }], ["path", { d: "M18 12l3 0", key: "svg-2" }], ["path", { d: "M16.25 16.25l2.15 2.15", key: "svg-3" }], ["path", { d: "M12 18l0 3", key: "svg-4" }], ["path", { d: "M7.75 16.25l-2.15 2.15", key: "svg-5" }], ["path", { d: "M6 12l-3 0", key: "svg-6" }], ["path", { d: "M7.75 7.75l-2.15 -2.15", key: "svg-7" }]], k1 = De("outline", "loader", "Loader", _1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = [["path", { d: "M5 12l14 0", key: "svg-0" }]], P1 = De("outline", "minus", "Minus", E1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Rp = De("outline", "pencil", "Pencil", M1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Ip = De("outline", "restore", "Restore", N1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = [["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], jd = De("outline", "search", "Search", D1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = [["path", { d: "M4 7h16", key: "svg-0" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-1" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-2" }], ["path", { d: "M10 12l4 4m0 -4l-4 4", key: "svg-3" }]], O1 = De("outline", "trash-x", "TrashX", A1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], Tp = De("outline", "trash", "Trash", R1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I1 = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }]], T1 = De("outline", "user", "User", I1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], _l = De("outline", "x", "X", j1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], W1 = De("filled", "alert-circle-filled", "AlertCircleFilled", $1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", key: "svg-0" }]], jp = De("filled", "circle-check-filled", "CircleCheckFilled", L1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = [["path", { d: "M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1", key: "svg-0" }]], Vf = De("filled", "exclamation-circle-filled", "ExclamationCircleFilled", F1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = [["path", { d: "M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z", key: "svg-0" }]], zf = De("filled", "folder-filled", "FolderFilled", V1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = [["path", { d: "M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z", key: "svg-0" }]], Za = De("filled", "info-circle-filled", "InfoCircleFilled", z1);
/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = [["path", { d: "M12 2a5 5 0 0 1 5 5v3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3v-3a5 5 0 0 1 5 -5m0 12a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m0 -10a3 3 0 0 0 -3 3v3h6v-3a3 3 0 0 0 -3 -3", key: "svg-0" }]], H1 = De("filled", "lock-filled", "LockFilled", B1);
function Bf(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function On(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Bf(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Bf(e[o], null);
        }
      };
  };
}
function fe(...e) {
  return m.useCallback(On(...e), e);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  const t = /* @__PURE__ */ Y1(e), n = m.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = m.Children.toArray(s), c = i.find(U1);
    if (c) {
      const l = c.props.children, f = i.map((d) => d === c ? m.Children.count(l) > 1 ? m.Children.only(null) : m.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ u.jsx(t, { ...a, ref: o, children: m.isValidElement(l) ? m.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ u.jsx(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var No = /* @__PURE__ */ er("Slot");
// @__NO_SIDE_EFFECTS__
function Y1(e) {
  const t = m.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (m.isValidElement(o)) {
      const a = q1(o), i = K1(s, o.props);
      return o.type !== m.Fragment && (i.ref = r ? On(r, a) : a), m.cloneElement(o, i);
    }
    return m.Children.count(o) > 1 ? m.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var $p = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Wp(e) {
  const t = ({ children: n }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = $p, t;
}
var G1 = /* @__PURE__ */ Wp("Slottable");
function U1(e) {
  return m.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === $p;
}
function K1(e, t) {
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
function q1(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var X1 = [
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
], Q = X1.reduce((e, t) => {
  const n = /* @__PURE__ */ er(`Primitive.${t}`), r = m.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function $d(e, t) {
  e && qs.flushSync(() => e.dispatchEvent(t));
}
var Lp = Object.freeze({
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
}), Z1 = "VisuallyHidden", Vi = m.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(
    Q.span,
    {
      ...e,
      ref: t,
      style: { ...Lp, ...e.style }
    }
  )
);
Vi.displayName = Z1;
var Q1 = Vi;
function J1(e, t) {
  const n = m.createContext(t), r = (s) => {
    const { children: a, ...i } = s, c = m.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ u.jsx(n.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = m.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Je(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = m.createContext(a), c = n.length;
    n = [...n, a];
    const l = (d) => {
      var C;
      const { scope: h, children: p, ...y } = d, v = ((C = h == null ? void 0 : h[e]) == null ? void 0 : C[c]) || i, x = m.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ u.jsx(v.Provider, { value: x, children: p });
    };
    l.displayName = s + "Provider";
    function f(d, h) {
      var v;
      const p = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || i, y = m.useContext(p);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [l, f];
  }
  const o = () => {
    const s = n.map((a) => m.createContext(a));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || s;
      return m.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, e2(o, ...t)];
}
function e2(...e) {
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
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Zs(e) {
  const t = e + "CollectionProvider", [n, r] = Je(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: x, children: C } = v, b = E.useRef(null), g = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u.jsx(o, { scope: x, itemMap: g, collectionRef: b, children: C });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ er(i), l = E.forwardRef(
    (v, x) => {
      const { scope: C, children: b } = v, g = s(i, C), S = fe(x, g.collectionRef);
      return /* @__PURE__ */ u.jsx(c, { ref: S, children: b });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ er(f), p = E.forwardRef(
    (v, x) => {
      const { scope: C, children: b, ...g } = v, S = E.useRef(null), w = fe(x, S), P = s(f, C);
      return E.useEffect(() => (P.itemMap.set(S, { ref: S, ...g }), () => void P.itemMap.delete(S))), /* @__PURE__ */ u.jsx(h, { [d]: "", ref: w, children: b });
    }
  );
  p.displayName = f;
  function y(v) {
    const x = s(e + "CollectionConsumer", v);
    return E.useCallback(() => {
      const b = x.collectionRef.current;
      if (!b) return [];
      const g = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (P, _) => g.indexOf(P.ref.current) - g.indexOf(_.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    y,
    r
  ];
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Qe = globalThis != null && globalThis.document ? m.useLayoutEffect : () => {
}, t2 = m[" useInsertionEffect ".trim().toString()] || Qe;
function vt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = n2({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const f = m.useRef(e !== void 0);
    m.useEffect(() => {
      const d = f.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const l = m.useCallback(
    (f) => {
      var d;
      if (i) {
        const h = r2(f) ? f(e) : f;
        h !== e && ((d = a.current) == null || d.call(a, h));
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function n2({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = m.useState(e), o = m.useRef(n), s = m.useRef(t);
  return t2(() => {
    s.current = t;
  }, [t]), m.useEffect(() => {
    var a;
    o.current !== n && ((a = s.current) == null || a.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function r2(e) {
  return typeof e == "function";
}
function o2(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var ot = (e) => {
  const { present: t, children: n } = e, r = s2(t), o = typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n), s = fe(r.ref, a2(o));
  return typeof n == "function" || r.isPresent ? m.cloneElement(o, { ref: s }) : null;
};
ot.displayName = "Presence";
function s2(e) {
  const [t, n] = m.useState(), r = m.useRef(null), o = m.useRef(e), s = m.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = o2(a, {
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
    const l = Ea(r.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), Qe(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = s.current, p = Ea(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Qe(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, d = (p) => {
        const v = Ea(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = Ea(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: m.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Ea(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function a2(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var i2 = m[" useId ".trim().toString()] || (() => {
}), c2 = 0;
function ze(e) {
  const [t, n] = m.useState(i2());
  return Qe(() => {
    n((r) => r ?? String(c2++));
  }, [e]), t ? `radix-${t}` : "";
}
var zi = "Collapsible", [l2, Fp] = Je(zi), [d2, Wd] = l2(zi), Vp = m.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [c, l] = vt({
      prop: r,
      defaultProp: o ?? !1,
      onChange: a,
      caller: zi
    });
    return /* @__PURE__ */ u.jsx(
      d2,
      {
        scope: n,
        disabled: s,
        contentId: ze(),
        open: c,
        onOpenToggle: m.useCallback(() => l((f) => !f), [l]),
        children: /* @__PURE__ */ u.jsx(
          Q.div,
          {
            "data-state": Fd(c),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Vp.displayName = zi;
var zp = "CollapsibleTrigger", Bp = m.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Wd(zp, n);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Fd(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Bp.displayName = zp;
var Ld = "CollapsibleContent", Hp = m.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Wd(Ld, e.__scopeCollapsible);
    return /* @__PURE__ */ u.jsx(ot, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ u.jsx(u2, { ...r, ref: t, present: s }) });
  }
);
Hp.displayName = Ld;
var u2 = m.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, a = Wd(Ld, n), [i, c] = m.useState(r), l = m.useRef(null), f = fe(t, l), d = m.useRef(0), h = d.current, p = m.useRef(0), y = p.current, v = a.open || i, x = m.useRef(v), C = m.useRef(void 0);
  return m.useEffect(() => {
    const b = requestAnimationFrame(() => x.current = !1);
    return () => cancelAnimationFrame(b);
  }, []), Qe(() => {
    const b = l.current;
    if (b) {
      C.current = C.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const g = b.getBoundingClientRect();
      d.current = g.height, p.current = g.width, x.current || (b.style.transitionDuration = C.current.transitionDuration, b.style.animationName = C.current.animationName), c(r);
    }
  }, [a.open, r]), /* @__PURE__ */ u.jsx(
    Q.div,
    {
      "data-state": Fd(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !v,
      ...s,
      ref: f,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": y ? `${y}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Fd(e) {
  return e ? "open" : "closed";
}
var f2 = Vp, h2 = Bp, p2 = Hp, m2 = m.createContext(void 0);
function Do(e) {
  const t = m.useContext(m2);
  return e || t || "ltr";
}
var Zt = "Accordion", v2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Vd, g2, y2] = Zs(Zt), [Bi] = Je(Zt, [
  y2,
  Fp
]), zd = Fp(), Yp = E.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, s = r;
    return /* @__PURE__ */ u.jsx(Vd.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ u.jsx(C2, { ...s, ref: t }) : /* @__PURE__ */ u.jsx(w2, { ...o, ref: t }) });
  }
);
Yp.displayName = Zt;
var [Gp, b2] = Bi(Zt), [Up, x2] = Bi(
  Zt,
  { collapsible: !1 }
), w2 = E.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, c] = vt({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Zt
    });
    return /* @__PURE__ */ u.jsx(
      Gp,
      {
        scope: e.__scopeAccordion,
        value: E.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: c,
        onItemClose: E.useCallback(() => s && c(""), [s, c]),
        children: /* @__PURE__ */ u.jsx(Up, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ u.jsx(Kp, { ...a, ref: t }) })
      }
    );
  }
), C2 = E.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [a, i] = vt({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Zt
  }), c = E.useCallback(
    (f) => i((d = []) => [...d, f]),
    [i]
  ), l = E.useCallback(
    (f) => i((d = []) => d.filter((h) => h !== f)),
    [i]
  );
  return /* @__PURE__ */ u.jsx(
    Gp,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: c,
      onItemClose: l,
      children: /* @__PURE__ */ u.jsx(Up, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ u.jsx(Kp, { ...s, ref: t }) })
    }
  );
}), [S2, Hi] = Bi(Zt), Kp = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: s = "vertical", ...a } = e, i = E.useRef(null), c = fe(i, t), l = g2(n), d = Do(o) === "ltr", h = Y(e.onKeyDown, (p) => {
      var k;
      if (!v2.includes(p.key)) return;
      const y = p.target, v = l().filter((D) => {
        var O;
        return !((O = D.ref.current) != null && O.disabled);
      }), x = v.findIndex((D) => D.ref.current === y), C = v.length;
      if (x === -1) return;
      p.preventDefault();
      let b = x;
      const g = 0, S = C - 1, w = () => {
        b = x + 1, b > S && (b = g);
      }, P = () => {
        b = x - 1, b < g && (b = S);
      };
      switch (p.key) {
        case "Home":
          b = g;
          break;
        case "End":
          b = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (d ? w() : P());
          break;
        case "ArrowDown":
          s === "vertical" && w();
          break;
        case "ArrowLeft":
          s === "horizontal" && (d ? P() : w());
          break;
        case "ArrowUp":
          s === "vertical" && P();
          break;
      }
      const _ = b % C;
      (k = v[_].ref.current) == null || k.focus();
    });
    return /* @__PURE__ */ u.jsx(
      S2,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: s,
        children: /* @__PURE__ */ u.jsx(Vd.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
          Q.div,
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
), pi = "AccordionItem", [_2, Bd] = Bi(pi), qp = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, s = Hi(pi, n), a = b2(pi, n), i = zd(n), c = ze(), l = r && a.value.includes(r) || !1, f = s.disabled || e.disabled;
    return /* @__PURE__ */ u.jsx(
      _2,
      {
        scope: n,
        open: l,
        disabled: f,
        triggerId: c,
        children: /* @__PURE__ */ u.jsx(
          f2,
          {
            "data-orientation": s.orientation,
            "data-state": tm(l),
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
qp.displayName = pi;
var Xp = "AccordionHeader", Zp = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Hi(Zt, n), s = Bd(Xp, n);
    return /* @__PURE__ */ u.jsx(
      Q.h3,
      {
        "data-orientation": o.orientation,
        "data-state": tm(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Zp.displayName = Xp;
var kl = "AccordionTrigger", Qp = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Hi(Zt, n), s = Bd(kl, n), a = x2(kl, n), i = zd(n);
    return /* @__PURE__ */ u.jsx(Vd.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
      h2,
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
Qp.displayName = kl;
var Jp = "AccordionContent", em = E.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Hi(Zt, n), s = Bd(Jp, n), a = zd(n);
    return /* @__PURE__ */ u.jsx(
      p2,
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
em.displayName = Jp;
function tm(e) {
  return e ? "open" : "closed";
}
var Hf = Yp, k2 = qp, E2 = Zp, P2 = Qp, M2 = em;
function Ct(e) {
  const t = m.useRef(e);
  return m.useEffect(() => {
    t.current = e;
  }), m.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function N2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ct(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var D2 = "DismissableLayer", El = "dismissableLayer.update", A2 = "dismissableLayer.pointerDownOutside", O2 = "dismissableLayer.focusOutside", Yf, nm = m.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tr = m.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, l = m.useContext(nm), [f, d] = m.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = m.useState({}), y = fe(t, (_) => d(_)), v = Array.from(l.layers), [x] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = v.indexOf(x), b = f ? v.indexOf(f) : -1, g = l.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= C, w = I2((_) => {
      const k = _.target, D = [...l.branches].some((O) => O.contains(k));
      !S || D || (o == null || o(_), a == null || a(_), _.defaultPrevented || i == null || i());
    }, h), P = T2((_) => {
      const k = _.target;
      [...l.branches].some((O) => O.contains(k)) || (s == null || s(_), a == null || a(_), _.defaultPrevented || i == null || i());
    }, h);
    return N2((_) => {
      b === l.layers.size - 1 && (r == null || r(_), !_.defaultPrevented && i && (_.preventDefault(), i()));
    }, h), m.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Yf = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Gf(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Yf);
        };
    }, [f, h, n, l]), m.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Gf());
    }, [f, l]), m.useEffect(() => {
      const _ = () => p({});
      return document.addEventListener(El, _), () => document.removeEventListener(El, _);
    }, []), /* @__PURE__ */ u.jsx(
      Q.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: g ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = D2;
var R2 = "DismissableLayerBranch", rm = m.forwardRef((e, t) => {
  const n = m.useContext(nm), r = m.useRef(null), o = fe(t, r);
  return m.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ u.jsx(Q.div, { ...e, ref: o });
});
rm.displayName = R2;
function I2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ct(e), r = m.useRef(!1), o = m.useRef(() => {
  });
  return m.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          om(
            A2,
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
function T2(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ct(e), r = m.useRef(!1);
  return m.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && om(O2, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Gf() {
  const e = new CustomEvent(El);
  document.dispatchEvent(e);
}
function om(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? $d(o, s) : o.dispatchEvent(s);
}
var j2 = Tr, $2 = rm, Vc = "focusScope.autoFocusOnMount", zc = "focusScope.autoFocusOnUnmount", Uf = { bubbles: !1, cancelable: !0 }, W2 = "FocusScope", Qs = m.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = m.useState(null), l = Ct(o), f = Ct(s), d = m.useRef(null), h = fe(t, (v) => c(v)), p = m.useRef({
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
      let v = function(g) {
        if (p.paused || !i) return;
        const S = g.target;
        i.contains(S) ? d.current = S : Yn(d.current, { select: !0 });
      }, x = function(g) {
        if (p.paused || !i) return;
        const S = g.relatedTarget;
        S !== null && (i.contains(S) || Yn(d.current, { select: !0 }));
      }, C = function(g) {
        if (document.activeElement === document.body)
          for (const w of g)
            w.removedNodes.length > 0 && Yn(i);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", x);
      const b = new MutationObserver(C);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", x), b.disconnect();
      };
    }
  }, [r, i, p.paused]), m.useEffect(() => {
    if (i) {
      qf.add(p);
      const v = document.activeElement;
      if (!i.contains(v)) {
        const C = new CustomEvent(Vc, Uf);
        i.addEventListener(Vc, l), i.dispatchEvent(C), C.defaultPrevented || (L2(H2(sm(i)), { select: !0 }), document.activeElement === v && Yn(i));
      }
      return () => {
        i.removeEventListener(Vc, l), setTimeout(() => {
          const C = new CustomEvent(zc, Uf);
          i.addEventListener(zc, f), i.dispatchEvent(C), C.defaultPrevented || Yn(v ?? document.body, { select: !0 }), i.removeEventListener(zc, f), qf.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const y = m.useCallback(
    (v) => {
      if (!n && !r || p.paused) return;
      const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, C = document.activeElement;
      if (x && C) {
        const b = v.currentTarget, [g, S] = F2(b);
        g && S ? !v.shiftKey && C === S ? (v.preventDefault(), n && Yn(g, { select: !0 })) : v.shiftKey && C === g && (v.preventDefault(), n && Yn(S, { select: !0 })) : C === b && v.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ u.jsx(Q.div, { tabIndex: -1, ...a, ref: h, onKeyDown: y });
});
Qs.displayName = W2;
function L2(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Yn(r, { select: t }), document.activeElement !== n) return;
}
function F2(e) {
  const t = sm(e), n = Kf(t, e), r = Kf(t.reverse(), e);
  return [n, r];
}
function sm(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Kf(e, t) {
  for (const n of e)
    if (!V2(n, { upTo: t })) return n;
}
function V2(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function z2(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && z2(e) && t && e.select();
  }
}
var qf = B2();
function B2() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Xf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Xf(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Xf(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function H2(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Y2 = "Portal", jr = m.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, s] = m.useState(!1);
  Qe(() => s(!0), []);
  const a = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? qw.createPortal(/* @__PURE__ */ u.jsx(Q.div, { ...r, ref: t }), a) : null;
});
jr.displayName = Y2;
var Bc = 0;
function Yi() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Zf()), document.body.insertAdjacentElement("beforeend", e[1] ?? Zf()), Bc++, () => {
      Bc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Bc--;
    };
  }, []);
}
function Zf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var an = function() {
  return an = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, an.apply(this, arguments);
};
function am(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function G2(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Qa = "right-scroll-bar-position", Ja = "width-before-scroll-bar", U2 = "with-scroll-bars-hidden", K2 = "--removed-body-scroll-bar-size";
function Hc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function q2(e, t) {
  var n = Xe(function() {
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
var X2 = typeof window < "u" ? m.useLayoutEffect : m.useEffect, Qf = /* @__PURE__ */ new WeakMap();
function Z2(e, t) {
  var n = q2(null, function(r) {
    return e.forEach(function(o) {
      return Hc(o, r);
    });
  });
  return X2(function() {
    var r = Qf.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || Hc(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Hc(i, a);
      });
    }
    Qf.set(n, e);
  }, [e]), n;
}
function Q2(e) {
  return e;
}
function J2(e, t) {
  t === void 0 && (t = Q2);
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
function eC(e) {
  e === void 0 && (e = {});
  var t = J2(null);
  return t.options = an({ async: !0, ssr: !1 }, e), t;
}
var im = function(e) {
  var t = e.sideCar, n = am(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return m.createElement(r, an({}, n));
};
im.isSideCarExport = !0;
function tC(e, t) {
  return e.useMedium(t), im;
}
var cm = eC(), Yc = function() {
}, Gi = m.forwardRef(function(e, t) {
  var n = m.useRef(null), r = m.useState({
    onScrollCapture: Yc,
    onWheelCapture: Yc,
    onTouchMoveCapture: Yc
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, d = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, v = e.inert, x = e.allowPinchZoom, C = e.as, b = C === void 0 ? "div" : C, g = e.gapMode, S = am(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = h, P = Z2([n, t]), _ = an(an({}, S), o);
  return m.createElement(
    m.Fragment,
    null,
    f && m.createElement(w, { sideCar: cm, removeScrollBar: l, shards: d, noRelative: p, noIsolation: y, inert: v, setCallbacks: s, allowPinchZoom: !!x, lockRef: n, gapMode: g }),
    a ? m.cloneElement(m.Children.only(i), an(an({}, _), { ref: P })) : m.createElement(b, an({}, _, { className: c, ref: P }), i)
  );
});
Gi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gi.classNames = {
  fullWidth: Ja,
  zeroRight: Qa
};
var nC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function rC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = nC();
  return t && e.setAttribute("nonce", t), e;
}
function oC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function sC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var aC = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = rC()) && (oC(t, n), sC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, iC = function() {
  var e = aC();
  return function(t, n) {
    m.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, lm = function() {
  var e = iC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, cC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Gc = function(e) {
  return parseInt(e || "", 10) || 0;
}, lC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gc(n), Gc(r), Gc(o)];
}, dC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return cC;
  var t = lC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, uC = lm(), po = "data-scroll-locked", fC = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(U2, ` {
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
  
  .`).concat(Qa, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Qa, " .").concat(Qa, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(po, `] {
    `).concat(K2, ": ").concat(i, `px;
  }
`);
}, Jf = function() {
  var e = parseInt(document.body.getAttribute(po) || "0", 10);
  return isFinite(e) ? e : 0;
}, hC = function() {
  m.useEffect(function() {
    return document.body.setAttribute(po, (Jf() + 1).toString()), function() {
      var e = Jf() - 1;
      e <= 0 ? document.body.removeAttribute(po) : document.body.setAttribute(po, e.toString());
    };
  }, []);
}, pC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  hC();
  var s = m.useMemo(function() {
    return dC(o);
  }, [o]);
  return m.createElement(uC, { styles: fC(s, !t, o, n ? "" : "!important") });
}, Pl = !1;
if (typeof window < "u")
  try {
    var Pa = Object.defineProperty({}, "passive", {
      get: function() {
        return Pl = !0, !0;
      }
    });
    window.addEventListener("test", Pa, Pa), window.removeEventListener("test", Pa, Pa);
  } catch {
    Pl = !1;
  }
var Hr = Pl ? { passive: !1 } : !1, mC = function(e) {
  return e.tagName === "TEXTAREA";
}, dm = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !mC(e) && n[t] === "visible")
  );
}, vC = function(e) {
  return dm(e, "overflowY");
}, gC = function(e) {
  return dm(e, "overflowX");
}, eh = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = um(e, r);
    if (o) {
      var s = fm(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, yC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, bC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, um = function(e, t) {
  return e === "v" ? vC(t) : gC(t);
}, fm = function(e, t) {
  return e === "v" ? yC(t) : bC(t);
}, xC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, wC = function(e, t, n, r, o) {
  var s = xC(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, d = 0, h = 0;
  do {
    if (!i)
      break;
    var p = fm(e, i), y = p[0], v = p[1], x = p[2], C = v - x - s * y;
    (y || C) && um(e, i) && (d += C, h += y);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(d) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, Ma = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, th = function(e) {
  return [e.deltaX, e.deltaY];
}, nh = function(e) {
  return e && "current" in e ? e.current : e;
}, CC = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, SC = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, _C = 0, Yr = [];
function kC(e) {
  var t = m.useRef([]), n = m.useRef([0, 0]), r = m.useRef(), o = m.useState(_C++)[0], s = m.useState(lm)[0], a = m.useRef(e);
  m.useEffect(function() {
    a.current = e;
  }, [e]), m.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = G2([e.lockRef.current], (e.shards || []).map(nh), !0).filter(Boolean);
      return v.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = m.useCallback(function(v, x) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !a.current.allowPinchZoom;
    var C = Ma(v), b = n.current, g = "deltaX" in v ? v.deltaX : b[0] - C[0], S = "deltaY" in v ? v.deltaY : b[1] - C[1], w, P = v.target, _ = Math.abs(g) > Math.abs(S) ? "h" : "v";
    if ("touches" in v && _ === "h" && P.type === "range")
      return !1;
    var k = eh(_, P);
    if (!k)
      return !0;
    if (k ? w = _ : (w = _ === "v" ? "h" : "v", k = eh(_, P)), !k)
      return !1;
    if (!r.current && "changedTouches" in v && (g || S) && (r.current = w), !w)
      return !0;
    var D = r.current || w;
    return wC(D, x, v, D === "h" ? g : S);
  }, []), c = m.useCallback(function(v) {
    var x = v;
    if (!(!Yr.length || Yr[Yr.length - 1] !== s)) {
      var C = "deltaY" in x ? th(x) : Ma(x), b = t.current.filter(function(w) {
        return w.name === x.type && (w.target === x.target || x.target === w.shadowParent) && CC(w.delta, C);
      })[0];
      if (b && b.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!b) {
        var g = (a.current.shards || []).map(nh).filter(Boolean).filter(function(w) {
          return w.contains(x.target);
        }), S = g.length > 0 ? i(x, g[0]) : !a.current.noIsolation;
        S && x.cancelable && x.preventDefault();
      }
    }
  }, []), l = m.useCallback(function(v, x, C, b) {
    var g = { name: v, delta: x, target: C, should: b, shadowParent: EC(C) };
    t.current.push(g), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== g;
      });
    }, 1);
  }, []), f = m.useCallback(function(v) {
    n.current = Ma(v), r.current = void 0;
  }, []), d = m.useCallback(function(v) {
    l(v.type, th(v), v.target, i(v, e.lockRef.current));
  }, []), h = m.useCallback(function(v) {
    l(v.type, Ma(v), v.target, i(v, e.lockRef.current));
  }, []);
  m.useEffect(function() {
    return Yr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Hr), document.addEventListener("touchmove", c, Hr), document.addEventListener("touchstart", f, Hr), function() {
      Yr = Yr.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", c, Hr), document.removeEventListener("touchmove", c, Hr), document.removeEventListener("touchstart", f, Hr);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    y ? m.createElement(s, { styles: SC(o) }) : null,
    p ? m.createElement(pC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function EC(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const PC = tC(cm, kC);
var Js = m.forwardRef(function(e, t) {
  return m.createElement(Gi, an({}, e, { ref: t, sideCar: PC }));
});
Js.classNames = Gi.classNames;
var MC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Gr = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), Da = {}, Uc = 0, hm = function(e) {
  return e && (e.host || hm(e.parentNode));
}, NC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hm(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, DC = function(e, t, n, r) {
  var o = NC(t, Array.isArray(e) ? e : [e]);
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
          var p = h.getAttribute(r), y = p !== null && p !== "false", v = (Gr.get(h) || 0) + 1, x = (s.get(h) || 0) + 1;
          Gr.set(h, v), s.set(h, x), a.push(h), v === 1 && y && Na.set(h, !0), x === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", h, C);
        }
    });
  };
  return f(t), i.clear(), Uc++, function() {
    a.forEach(function(d) {
      var h = Gr.get(d) - 1, p = s.get(d) - 1;
      Gr.set(d, h), s.set(d, p), h || (Na.has(d) || d.removeAttribute(r), Na.delete(d)), p || d.removeAttribute(n);
    }), Uc--, Uc || (Gr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Na = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Ui = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = MC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), DC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Ki = "Dialog", [pm] = Je(Ki), [AC, Qt] = pm(Ki), mm = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = m.useRef(null), c = m.useRef(null), [l, f] = vt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ki
  });
  return /* @__PURE__ */ u.jsx(
    AC,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: ze(),
      titleId: ze(),
      descriptionId: ze(),
      open: l,
      onOpenChange: f,
      onOpenToggle: m.useCallback(() => f((d) => !d), [f]),
      modal: a,
      children: n
    }
  );
};
mm.displayName = Ki;
var vm = "DialogTrigger", OC = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(vm, n), s = fe(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Gd(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
OC.displayName = vm;
var Hd = "DialogPortal", [RC, gm] = pm(Hd, {
  forceMount: void 0
}), ym = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Qt(Hd, t);
  return /* @__PURE__ */ u.jsx(RC, { scope: t, forceMount: n, children: m.Children.map(r, (a) => /* @__PURE__ */ u.jsx(ot, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: a }) })) });
};
ym.displayName = Hd;
var mi = "DialogOverlay", bm = m.forwardRef(
  (e, t) => {
    const n = gm(mi, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Qt(mi, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u.jsx(ot, { present: r || s.open, children: /* @__PURE__ */ u.jsx(TC, { ...o, ref: t }) }) : null;
  }
);
bm.displayName = mi;
var IC = /* @__PURE__ */ er("DialogOverlay.RemoveScroll"), TC = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(mi, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Js, { as: IC, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        Q.div,
        {
          "data-state": Gd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Mr = "DialogContent", xm = m.forwardRef(
  (e, t) => {
    const n = gm(Mr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Qt(Mr, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(ot, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(jC, { ...o, ref: t }) : /* @__PURE__ */ u.jsx($C, { ...o, ref: t }) });
  }
);
xm.displayName = Mr;
var jC = m.forwardRef(
  (e, t) => {
    const n = Qt(Mr, e.__scopeDialog), r = m.useRef(null), o = fe(t, n.contentRef, r);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Ui(s);
    }, []), /* @__PURE__ */ u.jsx(
      wm,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Y(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: Y(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), $C = m.forwardRef(
  (e, t) => {
    const n = Qt(Mr, e.__scopeDialog), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      wm,
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
), wm = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Qt(Mr, n), c = m.useRef(null), l = fe(t, c);
    return Yi(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Qs,
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
              "data-state": Gd(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(LC, { titleId: i.titleId }),
        /* @__PURE__ */ u.jsx(VC, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Yd = "DialogTitle", Cm = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Yd, n);
    return /* @__PURE__ */ u.jsx(Q.h2, { id: o.titleId, ...r, ref: t });
  }
);
Cm.displayName = Yd;
var Sm = "DialogDescription", WC = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Sm, n);
    return /* @__PURE__ */ u.jsx(Q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
WC.displayName = Sm;
var _m = "DialogClose", km = m.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(_m, n);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
km.displayName = _m;
function Gd(e) {
  return e ? "open" : "closed";
}
var Em = "DialogTitleWarning", [DT, Pm] = J1(Em, {
  contentName: Mr,
  titleName: Yd,
  docsSlug: "dialog"
}), LC = ({ titleId: e }) => {
  const t = Pm(Em), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return m.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, FC = "DialogDescriptionWarning", VC = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Pm(FC).contentName}}.`;
  return m.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ud = mm, Kd = ym, qd = bm, Xd = xm, Mm = Cm, zC = km;
function qi(e) {
  const t = m.useRef({ value: e, previous: e });
  return m.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Xi(e) {
  const [t, n] = m.useState(void 0);
  return Qe(() => {
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
var Zi = "Checkbox", [BC] = Je(Zi), [HC, Zd] = BC(Zi);
function YC(e) {
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
  } = e, [h, p] = vt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: c,
    caller: Zi
  }), [y, v] = m.useState(null), [x, C] = m.useState(null), b = m.useRef(!1), g = y ? !!a || !!y.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: h,
    disabled: s,
    setChecked: p,
    control: y,
    setControl: v,
    name: i,
    form: a,
    value: f,
    hasConsumerStoppedPropagationRef: b,
    required: l,
    defaultChecked: Jn(o) ? !1 : o,
    isFormControl: g,
    bubbleInput: x,
    setBubbleInput: C
  };
  return /* @__PURE__ */ u.jsx(
    HC,
    {
      scope: t,
      ...S,
      children: GC(d) ? d(S) : r
    }
  );
}
var Nm = "CheckboxTrigger", Dm = m.forwardRef(
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
      bubbleInput: y
    } = Zd(Nm, e), v = fe(o, f), x = m.useRef(c);
    return m.useEffect(() => {
      const C = s == null ? void 0 : s.form;
      if (C) {
        const b = () => d(x.current);
        return C.addEventListener("reset", b), () => C.removeEventListener("reset", b);
      }
    }, [s, d]), /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": Jn(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": jm(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...r,
        ref: v,
        onKeyDown: Y(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: Y(n, (C) => {
          d((b) => Jn(b) ? !0 : !b), y && p && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
        })
      }
    );
  }
);
Dm.displayName = Nm;
var Am = m.forwardRef(
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
      YC,
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
            Dm,
            {
              ...d,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ u.jsx(
            Tm,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
Am.displayName = Zi;
var Om = "CheckboxIndicator", Rm = m.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, s = Zd(Om, n);
    return /* @__PURE__ */ u.jsx(
      ot,
      {
        present: r || Jn(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          Q.span,
          {
            "data-state": jm(s.checked),
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
Rm.displayName = Om;
var Im = "CheckboxBubbleInput", Tm = m.forwardRef(
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
    } = Zd(Im, e), y = fe(n, p), v = qi(s), x = Xi(r);
    m.useEffect(() => {
      const b = h;
      if (!b) return;
      const g = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(
        g,
        "checked"
      ).set, P = !o.current;
      if (v !== s && w) {
        const _ = new Event("click", { bubbles: P });
        b.indeterminate = Jn(s), w.call(b, Jn(s) ? !1 : s), b.dispatchEvent(_);
      }
    }, [h, v, s, o]);
    const C = m.useRef(Jn(s) ? !1 : s);
    return /* @__PURE__ */ u.jsx(
      Q.input,
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
        ref: y,
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
Tm.displayName = Im;
function GC(e) {
  return typeof e == "function";
}
function Jn(e) {
  return e === "indeterminate";
}
function jm(e) {
  return Jn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const UC = ["top", "right", "bottom", "left"], tr = Math.min, Et = Math.max, vi = Math.round, Aa = Math.floor, hn = (e) => ({
  x: e,
  y: e
}), KC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, qC = {
  start: "end",
  end: "start"
};
function Ml(e, t, n) {
  return Et(e, tr(t, n));
}
function Rn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function In(e) {
  return e.split("-")[0];
}
function Ao(e) {
  return e.split("-")[1];
}
function Qd(e) {
  return e === "x" ? "y" : "x";
}
function Jd(e) {
  return e === "y" ? "height" : "width";
}
const XC = /* @__PURE__ */ new Set(["top", "bottom"]);
function dn(e) {
  return XC.has(In(e)) ? "y" : "x";
}
function eu(e) {
  return Qd(dn(e));
}
function ZC(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ao(e), o = eu(e), s = Jd(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = gi(a)), [a, gi(a)];
}
function QC(e) {
  const t = gi(e);
  return [Nl(e), t, Nl(t)];
}
function Nl(e) {
  return e.replace(/start|end/g, (t) => qC[t]);
}
const rh = ["left", "right"], oh = ["right", "left"], JC = ["top", "bottom"], eS = ["bottom", "top"];
function tS(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? oh : rh : t ? rh : oh;
    case "left":
    case "right":
      return t ? JC : eS;
    default:
      return [];
  }
}
function nS(e, t, n, r) {
  const o = Ao(e);
  let s = tS(In(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Nl)))), s;
}
function gi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => KC[t]);
}
function rS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function $m(e) {
  return typeof e != "number" ? rS(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yi(e) {
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
function sh(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = dn(t), a = eu(t), i = Jd(a), c = In(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
  switch (Ao(t)) {
    case "start":
      p[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[a] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const oS = async (e, t, n) => {
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
  } = sh(l, r, c), h = r, p = {}, y = 0;
  for (let v = 0; v < i.length; v++) {
    const {
      name: x,
      fn: C
    } = i[v], {
      x: b,
      y: g,
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
    f = b ?? f, d = g ?? d, p = {
      ...p,
      [x]: {
        ...p[x],
        ...S
      }
    }, w && y <= 50 && (y++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: f,
      y: d
    } = sh(l, h, c)), v = -1);
  }
  return {
    x: f,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: p
  };
};
async function Os(e, t) {
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
  } = Rn(t, e), y = $m(p), x = i[h ? d === "floating" ? "reference" : "floating" : d], C = yi(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), b = d === "floating" ? {
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
  }, w = yi(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: g,
    strategy: c
  }) : b);
  return {
    top: (C.top - w.top + y.top) / S.y,
    bottom: (w.bottom - C.bottom + y.bottom) / S.y,
    left: (C.left - w.left + y.left) / S.x,
    right: (w.right - C.right + y.right) / S.x
  };
}
const sS = (e) => ({
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
    } = Rn(e, t) || {};
    if (l == null)
      return {};
    const d = $m(f), h = {
      x: n,
      y: r
    }, p = eu(o), y = Jd(p), v = await a.getDimensions(l), x = p === "y", C = x ? "top" : "left", b = x ? "bottom" : "right", g = x ? "clientHeight" : "clientWidth", S = s.reference[y] + s.reference[p] - h[p] - s.floating[y], w = h[p] - s.reference[p], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let _ = P ? P[g] : 0;
    (!_ || !await (a.isElement == null ? void 0 : a.isElement(P))) && (_ = i.floating[g] || s.floating[y]);
    const k = S / 2 - w / 2, D = _ / 2 - v[y] / 2 - 1, O = tr(d[C], D), T = tr(d[b], D), W = O, F = _ - v[y] - T, L = _ / 2 - v[y] / 2 + k, H = Ml(W, L, F), V = !c.arrow && Ao(o) != null && L !== H && s.reference[y] / 2 - (L < W ? O : T) - v[y] / 2 < 0, K = V ? L < W ? L - W : L - F : 0;
    return {
      [p]: h[p] + K,
      data: {
        [p]: H,
        centerOffset: L - H - K,
        ...V && {
          alignmentOffset: K
        }
      },
      reset: V
    };
  }
}), aS = function(e) {
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
        fallbackAxisSideDirection: y = "none",
        flipAlignment: v = !0,
        ...x
      } = Rn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const C = In(o), b = dn(i), g = In(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = h || (g || !v ? [gi(i)] : QC(i)), P = y !== "none";
      !h && P && w.push(...nS(i, v, y, S));
      const _ = [i, ...w], k = await Os(t, x), D = [];
      let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && D.push(k[C]), d) {
        const L = ZC(o, a, S);
        D.push(k[L[0]], k[L[1]]);
      }
      if (O = [...O, {
        placement: o,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var T, W;
        const L = (((T = s.flip) == null ? void 0 : T.index) || 0) + 1, H = _[L];
        if (H && (!(d === "alignment" ? b !== dn(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        O.every((I) => dn(I.placement) === b ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: O
            },
            reset: {
              placement: H
            }
          };
        let V = (W = O.filter((K) => K.overflows[0] <= 0).sort((K, I) => K.overflows[1] - I.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var F;
              const K = (F = O.filter((I) => {
                if (P) {
                  const j = dn(I.placement);
                  return j === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((I) => [I.placement, I.overflows.filter((j) => j > 0).reduce((j, ne) => j + ne, 0)]).sort((I, j) => I[1] - j[1])[0]) == null ? void 0 : F[0];
              K && (V = K);
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
function ah(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ih(e) {
  return UC.some((t) => e[t] >= 0);
}
const iS = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Rn(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await Os(t, {
            ...o,
            elementContext: "reference"
          }), a = ah(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ih(a)
            }
          };
        }
        case "escaped": {
          const s = await Os(t, {
            ...o,
            altBoundary: !0
          }), a = ah(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ih(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Wm = /* @__PURE__ */ new Set(["left", "top"]);
async function cS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = In(n), i = Ao(n), c = dn(n) === "y", l = Wm.has(a) ? -1 : 1, f = s && c ? -1 : 1, d = Rn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: y
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof y == "number" && (p = i === "end" ? y * -1 : y), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const lS = function(e) {
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
      } = t, c = await cS(t, e);
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
}, dS = function(e) {
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
      } = Rn(e, t), l = {
        x: n,
        y: r
      }, f = await Os(t, c), d = dn(In(o)), h = Qd(d);
      let p = l[h], y = l[d];
      if (s) {
        const x = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", b = p + f[x], g = p - f[C];
        p = Ml(b, p, g);
      }
      if (a) {
        const x = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", b = y + f[x], g = y - f[C];
        y = Ml(b, y, g);
      }
      const v = i.fn({
        ...t,
        [h]: p,
        [d]: y
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [h]: s,
            [d]: a
          }
        }
      };
    }
  };
}, uS = function(e) {
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
      } = Rn(e, t), f = {
        x: n,
        y: r
      }, d = dn(o), h = Qd(d);
      let p = f[h], y = f[d];
      const v = Rn(i, t), x = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...v
      };
      if (c) {
        const g = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[g] + x.mainAxis, w = s.reference[h] + s.reference[g] - x.mainAxis;
        p < S ? p = S : p > w && (p = w);
      }
      if (l) {
        var C, b;
        const g = h === "y" ? "width" : "height", S = Wm.has(In(o)), w = s.reference[d] - s.floating[g] + (S && ((C = a.offset) == null ? void 0 : C[d]) || 0) + (S ? 0 : x.crossAxis), P = s.reference[d] + s.reference[g] + (S ? 0 : ((b = a.offset) == null ? void 0 : b[d]) || 0) - (S ? x.crossAxis : 0);
        y < w ? y = w : y > P && (y = P);
      }
      return {
        [h]: p,
        [d]: y
      };
    }
  };
}, fS = function(e) {
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
      } = Rn(e, t), f = await Os(t, l), d = In(o), h = Ao(o), p = dn(o) === "y", {
        width: y,
        height: v
      } = s.floating;
      let x, C;
      d === "top" || d === "bottom" ? (x = d, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (C = d, x = h === "end" ? "top" : "bottom");
      const b = v - f.top - f.bottom, g = y - f.left - f.right, S = tr(v - f[x], b), w = tr(y - f[C], g), P = !t.middlewareData.shift;
      let _ = S, k = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = g), (r = t.middlewareData.shift) != null && r.enabled.y && (_ = b), P && !h) {
        const O = Et(f.left, 0), T = Et(f.right, 0), W = Et(f.top, 0), F = Et(f.bottom, 0);
        p ? k = y - 2 * (O !== 0 || T !== 0 ? O + T : Et(f.left, f.right)) : _ = v - 2 * (W !== 0 || F !== 0 ? W + F : Et(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: k,
        availableHeight: _
      });
      const D = await a.getDimensions(i.floating);
      return y !== D.width || v !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Qi() {
  return typeof window < "u";
}
function Oo(e) {
  return Lm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Mt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bn(e) {
  var t;
  return (t = (Lm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Lm(e) {
  return Qi() ? e instanceof Node || e instanceof Mt(e).Node : !1;
}
function qt(e) {
  return Qi() ? e instanceof Element || e instanceof Mt(e).Element : !1;
}
function mn(e) {
  return Qi() ? e instanceof HTMLElement || e instanceof Mt(e).HTMLElement : !1;
}
function ch(e) {
  return !Qi() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Mt(e).ShadowRoot;
}
const hS = /* @__PURE__ */ new Set(["inline", "contents"]);
function ea(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hS.has(o);
}
const pS = /* @__PURE__ */ new Set(["table", "td", "th"]);
function mS(e) {
  return pS.has(Oo(e));
}
const vS = [":popover-open", ":modal"];
function Ji(e) {
  return vS.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const gS = ["transform", "translate", "scale", "rotate", "perspective"], yS = ["transform", "translate", "scale", "rotate", "perspective", "filter"], bS = ["paint", "layout", "strict", "content"];
function tu(e) {
  const t = nu(), n = qt(e) ? Xt(e) : e;
  return gS.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || yS.some((r) => (n.willChange || "").includes(r)) || bS.some((r) => (n.contain || "").includes(r));
}
function xS(e) {
  let t = nr(e);
  for (; mn(t) && !bo(t); ) {
    if (tu(t))
      return t;
    if (Ji(t))
      return null;
    t = nr(t);
  }
  return null;
}
function nu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const wS = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function bo(e) {
  return wS.has(Oo(e));
}
function Xt(e) {
  return Mt(e).getComputedStyle(e);
}
function ec(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function nr(e) {
  if (Oo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ch(e) && e.host || // Fallback.
    bn(e)
  );
  return ch(t) ? t.host : t;
}
function Fm(e) {
  const t = nr(e);
  return bo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mn(t) && ea(t) ? t : Fm(t);
}
function Rs(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Fm(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Mt(o);
  if (s) {
    const i = Dl(a);
    return t.concat(a, a.visualViewport || [], ea(o) ? o : [], i && n ? Rs(i) : []);
  }
  return t.concat(o, Rs(o, [], n));
}
function Dl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Vm(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = mn(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = vi(n) !== s || vi(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function ru(e) {
  return qt(e) ? e : e.contextElement;
}
function mo(e) {
  const t = ru(e);
  if (!mn(t))
    return hn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Vm(t);
  let a = (s ? vi(n.width) : n.width) / r, i = (s ? vi(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const CS = /* @__PURE__ */ hn(0);
function zm(e) {
  const t = Mt(e);
  return !nu() || !t.visualViewport ? CS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function SS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Mt(e) ? !1 : t;
}
function Nr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = ru(e);
  let a = hn(1);
  t && (r ? qt(r) && (a = mo(r)) : a = mo(e));
  const i = SS(s, n, r) ? zm(s) : hn(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, d = o.height / a.y;
  if (s) {
    const h = Mt(s), p = r && qt(r) ? Mt(r) : r;
    let y = h, v = Dl(y);
    for (; v && r && p !== y; ) {
      const x = mo(v), C = v.getBoundingClientRect(), b = Xt(v), g = C.left + (v.clientLeft + parseFloat(b.paddingLeft)) * x.x, S = C.top + (v.clientTop + parseFloat(b.paddingTop)) * x.y;
      c *= x.x, l *= x.y, f *= x.x, d *= x.y, c += g, l += S, y = Mt(v), v = Dl(y);
    }
  }
  return yi({
    width: f,
    height: d,
    x: c,
    y: l
  });
}
function tc(e, t) {
  const n = ec(e).scrollLeft;
  return t ? t.left + n : Nr(bn(e)).left + n;
}
function Bm(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - tc(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function _S(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = bn(r), i = t ? Ji(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = hn(1);
  const f = hn(0), d = mn(r);
  if ((d || !d && !s) && ((Oo(r) !== "body" || ea(a)) && (c = ec(r)), mn(r))) {
    const p = Nr(r);
    l = mo(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !d && !s ? Bm(a, c) : hn(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function kS(e) {
  return Array.from(e.getClientRects());
}
function ES(e) {
  const t = bn(e), n = ec(e), r = e.ownerDocument.body, o = Et(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Et(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + tc(e);
  const i = -n.scrollTop;
  return Xt(r).direction === "rtl" && (a += Et(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const lh = 25;
function PS(e, t) {
  const n = Mt(e), r = bn(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = nu();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = tc(r);
  if (l <= 0) {
    const f = r.ownerDocument, d = f.body, h = getComputedStyle(d), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - d.clientWidth - p);
    y <= lh && (s -= y);
  } else l <= lh && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const MS = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function NS(e, t) {
  const n = Nr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = mn(e) ? mo(e) : hn(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function dh(e, t, n) {
  let r;
  if (t === "viewport")
    r = PS(e, n);
  else if (t === "document")
    r = ES(bn(e));
  else if (qt(t))
    r = NS(t, n);
  else {
    const o = zm(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return yi(r);
}
function Hm(e, t) {
  const n = nr(e);
  return n === t || !qt(n) || bo(n) ? !1 : Xt(n).position === "fixed" || Hm(n, t);
}
function DS(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Rs(e, [], !1).filter((i) => qt(i) && Oo(i) !== "body"), o = null;
  const s = Xt(e).position === "fixed";
  let a = s ? nr(e) : e;
  for (; qt(a) && !bo(a); ) {
    const i = Xt(a), c = tu(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && MS.has(o.position) || ea(a) && !c && Hm(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = nr(a);
  }
  return t.set(e, r), r;
}
function AS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Ji(t) ? [] : DS(t, this._c) : [].concat(n), r], i = a[0], c = a.reduce((l, f) => {
    const d = dh(t, f, o);
    return l.top = Et(d.top, l.top), l.right = tr(d.right, l.right), l.bottom = tr(d.bottom, l.bottom), l.left = Et(d.left, l.left), l;
  }, dh(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function OS(e) {
  const {
    width: t,
    height: n
  } = Vm(e);
  return {
    width: t,
    height: n
  };
}
function RS(e, t, n) {
  const r = mn(t), o = bn(t), s = n === "fixed", a = Nr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = hn(0);
  function l() {
    c.x = tc(o);
  }
  if (r || !r && !s)
    if ((Oo(t) !== "body" || ea(o)) && (i = ec(t)), r) {
      const p = Nr(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const f = o && !r && !s ? Bm(o, i) : hn(0), d = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: d,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Kc(e) {
  return Xt(e).position === "static";
}
function uh(e, t) {
  if (!mn(e) || Xt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return bn(e) === n && (n = n.ownerDocument.body), n;
}
function Ym(e, t) {
  const n = Mt(e);
  if (Ji(e))
    return n;
  if (!mn(e)) {
    let o = nr(e);
    for (; o && !bo(o); ) {
      if (qt(o) && !Kc(o))
        return o;
      o = nr(o);
    }
    return n;
  }
  let r = uh(e, t);
  for (; r && mS(r) && Kc(r); )
    r = uh(r, t);
  return r && bo(r) && Kc(r) && !tu(r) ? n : r || xS(e) || n;
}
const IS = async function(e) {
  const t = this.getOffsetParent || Ym, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: RS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function TS(e) {
  return Xt(e).direction === "rtl";
}
const jS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _S,
  getDocumentElement: bn,
  getClippingRect: AS,
  getOffsetParent: Ym,
  getElementRects: IS,
  getClientRects: kS,
  getDimensions: OS,
  getScale: mo,
  isElement: qt,
  isRTL: TS
};
function Gm(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function $S(e, t) {
  let n = null, r;
  const o = bn(e);
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
    const y = Aa(d), v = Aa(o.clientWidth - (f + h)), x = Aa(o.clientHeight - (d + p)), C = Aa(f), g = {
      rootMargin: -y + "px " + -v + "px " + -x + "px " + -C + "px",
      threshold: Et(0, tr(1, c)) || 1
    };
    let S = !0;
    function w(P) {
      const _ = P[0].intersectionRatio;
      if (_ !== c) {
        if (!S)
          return a();
        _ ? a(!1, _) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      _ === 1 && !Gm(l, e.getBoundingClientRect()) && a(), S = !1;
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
function WS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ru(e), f = o || s ? [...l ? Rs(l) : [], ...Rs(t)] : [];
  f.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), s && C.addEventListener("resize", n);
  });
  const d = l && i ? $S(l, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((C) => {
    let [b] = C;
    b && b.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var g;
      (g = p) == null || g.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let y, v = c ? Nr(e) : null;
  c && x();
  function x() {
    const C = Nr(e);
    v && !Gm(v, C) && n(), v = C, y = requestAnimationFrame(x);
  }
  return n(), () => {
    var C;
    f.forEach((b) => {
      o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n);
    }), d == null || d(), (C = p) == null || C.disconnect(), p = null, c && cancelAnimationFrame(y);
  };
}
const LS = lS, FS = dS, VS = aS, zS = fS, BS = iS, fh = sS, HS = uS, YS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: jS,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return oS(e, t, {
    ...o,
    platform: s
  });
};
var GS = typeof document < "u", US = function() {
}, ei = GS ? Td : US;
function bi(e, t) {
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
        if (!bi(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !bi(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Um(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hh(e, t) {
  const n = Um(e);
  return Math.round(t * n) / n;
}
function qc(e) {
  const t = m.useRef(e);
  return ei(() => {
    t.current = e;
  }), t;
}
function KS(e) {
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
  } = e, [f, d] = m.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = m.useState(r);
  bi(h, r) || p(r);
  const [y, v] = m.useState(null), [x, C] = m.useState(null), b = m.useCallback((I) => {
    I !== P.current && (P.current = I, v(I));
  }, []), g = m.useCallback((I) => {
    I !== _.current && (_.current = I, C(I));
  }, []), S = s || y, w = a || x, P = m.useRef(null), _ = m.useRef(null), k = m.useRef(f), D = c != null, O = qc(c), T = qc(o), W = qc(l), F = m.useCallback(() => {
    if (!P.current || !_.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: h
    };
    T.current && (I.platform = T.current), YS(P.current, _.current, I).then((j) => {
      const ne = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      L.current && !bi(k.current, ne) && (k.current = ne, qs.flushSync(() => {
        d(ne);
      }));
    });
  }, [h, t, n, T, W]);
  ei(() => {
    l === !1 && k.current.isPositioned && (k.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const L = m.useRef(!1);
  ei(() => (L.current = !0, () => {
    L.current = !1;
  }), []), ei(() => {
    if (S && (P.current = S), w && (_.current = w), S && w) {
      if (O.current)
        return O.current(S, w, F);
      F();
    }
  }, [S, w, F, O, D]);
  const H = m.useMemo(() => ({
    reference: P,
    floating: _,
    setReference: b,
    setFloating: g
  }), [b, g]), V = m.useMemo(() => ({
    reference: S,
    floating: w
  }), [S, w]), K = m.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return I;
    const j = hh(V.floating, f.x), ne = hh(V.floating, f.y);
    return i ? {
      ...I,
      transform: "translate(" + j + "px, " + ne + "px)",
      ...Um(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: ne
    };
  }, [n, i, V.floating, f.x, f.y]);
  return m.useMemo(() => ({
    ...f,
    update: F,
    refs: H,
    elements: V,
    floatingStyles: K
  }), [f, F, H, V, K]);
}
const qS = (e) => {
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
      return r && t(r) ? r.current != null ? fh({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? fh({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, XS = (e, t) => ({
  ...LS(e),
  options: [e, t]
}), ZS = (e, t) => ({
  ...FS(e),
  options: [e, t]
}), QS = (e, t) => ({
  ...HS(e),
  options: [e, t]
}), JS = (e, t) => ({
  ...VS(e),
  options: [e, t]
}), e_ = (e, t) => ({
  ...zS(e),
  options: [e, t]
}), t_ = (e, t) => ({
  ...BS(e),
  options: [e, t]
}), n_ = (e, t) => ({
  ...qS(e),
  options: [e, t]
});
var r_ = "Arrow", Km = m.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ u.jsx(
    Q.svg,
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
Km.displayName = r_;
var o_ = Km, ou = "Popper", [qm, ar] = Je(ou), [s_, Xm] = qm(ou), Zm = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = m.useState(null);
  return /* @__PURE__ */ u.jsx(s_, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Zm.displayName = ou;
var Qm = "PopperAnchor", Jm = m.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Xm(Qm, n), a = m.useRef(null), i = fe(t, a), c = m.useRef(null);
    return m.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ u.jsx(Q.div, { ...o, ref: i });
  }
);
Jm.displayName = Qm;
var su = "PopperContent", [a_, i_] = qm(su), ev = m.forwardRef(
  (e, t) => {
    var R, Z, J, se, le, he;
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
      onPlaced: y,
      ...v
    } = e, x = Xm(su, n), [C, b] = m.useState(null), g = fe(t, (xe) => b(xe)), [S, w] = m.useState(null), P = Xi(S), _ = (P == null ? void 0 : P.width) ?? 0, k = (P == null ? void 0 : P.height) ?? 0, D = r + (s !== "center" ? "-" + s : ""), O = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, T = Array.isArray(l) ? l : [l], W = T.length > 0, F = {
      padding: O,
      boundary: T.filter(l_),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: L, floatingStyles: H, placement: V, isPositioned: K, middlewareData: I } = KS({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...xe) => WS(...xe, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: x.anchor
      },
      middleware: [
        XS({ mainAxis: o + k, alignmentAxis: a }),
        c && ZS({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? QS() : void 0,
          ...F
        }),
        c && JS({ ...F }),
        e_({
          ...F,
          apply: ({ elements: xe, rects: Ve, availableWidth: et, availableHeight: At }) => {
            const { width: Ot, height: bt } = Ve.reference, Rt = xe.floating.style;
            Rt.setProperty("--radix-popper-available-width", `${et}px`), Rt.setProperty("--radix-popper-available-height", `${At}px`), Rt.setProperty("--radix-popper-anchor-width", `${Ot}px`), Rt.setProperty("--radix-popper-anchor-height", `${bt}px`);
          }
        }),
        S && n_({ element: S, padding: i }),
        d_({ arrowWidth: _, arrowHeight: k }),
        h && t_({ strategy: "referenceHidden", ...F })
      ]
    }), [j, ne] = rv(V), N = Ct(y);
    Qe(() => {
      K && (N == null || N());
    }, [K, N]);
    const M = (R = I.arrow) == null ? void 0 : R.x, $ = (Z = I.arrow) == null ? void 0 : Z.y, z = ((J = I.arrow) == null ? void 0 : J.centerOffset) !== 0, [U, G] = m.useState();
    return Qe(() => {
      C && G(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: K ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: U,
          "--radix-popper-transform-origin": [
            (se = I.transformOrigin) == null ? void 0 : se.x,
            (le = I.transformOrigin) == null ? void 0 : le.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((he = I.hide) == null ? void 0 : he.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ u.jsx(
          a_,
          {
            scope: n,
            placedSide: j,
            onArrowChange: w,
            arrowX: M,
            arrowY: $,
            shouldHideArrow: z,
            children: /* @__PURE__ */ u.jsx(
              Q.div,
              {
                "data-side": j,
                "data-align": ne,
                ...v,
                ref: g,
                style: {
                  ...v.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: K ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ev.displayName = su;
var tv = "PopperArrow", c_ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, nv = m.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = i_(tv, r), a = c_[s.placedSide];
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
          o_,
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
nv.displayName = tv;
function l_(e) {
  return e !== null;
}
var d_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, C, b;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = rv(n), d = { start: "0%", center: "50%", end: "100%" }[f], h = (((C = o.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
    let y = "", v = "";
    return l === "bottom" ? (y = a ? d : `${h}px`, v = `${-c}px`) : l === "top" ? (y = a ? d : `${h}px`, v = `${r.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, v = a ? d : `${p}px`) : l === "left" && (y = `${r.floating.width + c}px`, v = a ? d : `${p}px`), { data: { x: y, y: v } };
  }
});
function rv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var nc = Zm, ta = Jm, rc = ev, oc = nv, Xc = "rovingFocusGroup.onEntryFocus", u_ = { bubbles: !1, cancelable: !0 }, na = "RovingFocusGroup", [Al, ov, f_] = Zs(na), [h_, Ro] = Je(
  na,
  [f_]
), [p_, m_] = h_(na), sv = m.forwardRef(
  (e, t) => /* @__PURE__ */ u.jsx(Al.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(Al.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ u.jsx(v_, { ...e, ref: t }) }) })
);
sv.displayName = na;
var v_ = m.forwardRef((e, t) => {
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
  } = e, h = m.useRef(null), p = fe(t, h), y = Do(s), [v, x] = vt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: na
  }), [C, b] = m.useState(!1), g = Ct(l), S = ov(n), w = m.useRef(!1), [P, _] = m.useState(0);
  return m.useEffect(() => {
    const k = h.current;
    if (k)
      return k.addEventListener(Xc, g), () => k.removeEventListener(Xc, g);
  }, [g]), /* @__PURE__ */ u.jsx(
    p_,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: v,
      onItemFocus: m.useCallback(
        (k) => x(k),
        [x]
      ),
      onItemShiftTab: m.useCallback(() => b(!0), []),
      onFocusableItemAdd: m.useCallback(
        () => _((k) => k + 1),
        []
      ),
      onFocusableItemRemove: m.useCallback(
        () => _((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ u.jsx(
        Q.div,
        {
          tabIndex: C || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: Y(e.onFocus, (k) => {
            const D = !w.current;
            if (k.target === k.currentTarget && D && !C) {
              const O = new CustomEvent(Xc, u_);
              if (k.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const T = S().filter((V) => V.focusable), W = T.find((V) => V.active), F = T.find((V) => V.id === v), H = [W, F, ...T].filter(
                  Boolean
                ).map((V) => V.ref.current);
                cv(H, f);
              }
            }
            w.current = !1;
          }),
          onBlur: Y(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), av = "RovingFocusGroupItem", iv = m.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = ze(), l = s || c, f = m_(av, n), d = f.currentTabStopId === l, h = ov(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: v } = f;
    return m.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ u.jsx(
      Al.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ u.jsx(
          Q.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (x) => {
              r ? f.onItemFocus(l) : x.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: Y(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const C = b_(x, f.orientation, f.dir);
              if (C !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let g = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (C === "last") g.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && g.reverse();
                  const S = g.indexOf(x.currentTarget);
                  g = f.loop ? x_(g, S + 1) : g.slice(S + 1);
                }
                setTimeout(() => cv(g));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: d, hasTabStop: v != null }) : a
          }
        )
      }
    );
  }
);
iv.displayName = av;
var g_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function y_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function b_(e, t, n) {
  const r = y_(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return g_[r];
}
function cv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function x_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var au = sv, iu = iv, Ol = ["Enter", " "], w_ = ["ArrowDown", "PageUp", "Home"], lv = ["ArrowUp", "PageDown", "End"], C_ = [...w_, ...lv], S_ = {
  ltr: [...Ol, "ArrowRight"],
  rtl: [...Ol, "ArrowLeft"]
}, __ = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, ra = "Menu", [Is, k_, E_] = Zs(ra), [$r, dv] = Je(ra, [
  E_,
  ar,
  Ro
]), sc = ar(), uv = Ro(), [P_, Wr] = $r(ra), [M_, oa] = $r(ra), fv = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: a = !0 } = e, i = sc(t), [c, l] = m.useState(null), f = m.useRef(!1), d = Ct(s), h = Do(o);
  return m.useEffect(() => {
    const p = () => {
      f.current = !0, document.addEventListener("pointerdown", y, { capture: !0, once: !0 }), document.addEventListener("pointermove", y, { capture: !0, once: !0 });
    }, y = () => f.current = !1;
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", y, { capture: !0 }), document.removeEventListener("pointermove", y, { capture: !0 });
    };
  }, []), /* @__PURE__ */ u.jsx(nc, { ...i, children: /* @__PURE__ */ u.jsx(
    P_,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ u.jsx(
        M_,
        {
          scope: t,
          onClose: m.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: f,
          dir: h,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
fv.displayName = ra;
var N_ = "MenuAnchor", cu = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = sc(n);
    return /* @__PURE__ */ u.jsx(ta, { ...o, ...r, ref: t });
  }
);
cu.displayName = N_;
var lu = "MenuPortal", [D_, hv] = $r(lu, {
  forceMount: void 0
}), pv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Wr(lu, t);
  return /* @__PURE__ */ u.jsx(D_, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(ot, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
pv.displayName = lu;
var Lt = "MenuContent", [A_, du] = $r(Lt), mv = m.forwardRef(
  (e, t) => {
    const n = hv(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Wr(Lt, e.__scopeMenu), a = oa(Lt, e.__scopeMenu);
    return /* @__PURE__ */ u.jsx(Is.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(ot, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Is.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ u.jsx(O_, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(R_, { ...o, ref: t }) }) }) });
  }
), O_ = m.forwardRef(
  (e, t) => {
    const n = Wr(Lt, e.__scopeMenu), r = m.useRef(null), o = fe(t, r);
    return m.useEffect(() => {
      const s = r.current;
      if (s) return Ui(s);
    }, []), /* @__PURE__ */ u.jsx(
      uu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Y(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), R_ = m.forwardRef((e, t) => {
  const n = Wr(Lt, e.__scopeMenu);
  return /* @__PURE__ */ u.jsx(
    uu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), I_ = /* @__PURE__ */ er("MenuContent.ScrollLock"), uu = m.forwardRef(
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
      disableOutsideScroll: y,
      ...v
    } = e, x = Wr(Lt, n), C = oa(Lt, n), b = sc(n), g = uv(n), S = k_(n), [w, P] = m.useState(null), _ = m.useRef(null), k = fe(t, _, x.onContentChange), D = m.useRef(0), O = m.useRef(""), T = m.useRef(0), W = m.useRef(null), F = m.useRef("right"), L = m.useRef(0), H = y ? Js : m.Fragment, V = y ? { as: I_, allowPinchZoom: !0 } : void 0, K = (j) => {
      var R, Z;
      const ne = O.current + j, N = S().filter((J) => !J.disabled), M = document.activeElement, $ = (R = N.find((J) => J.ref.current === M)) == null ? void 0 : R.textValue, z = N.map((J) => J.textValue), U = G_(z, ne, $), G = (Z = N.find((J) => J.textValue === U)) == null ? void 0 : Z.ref.current;
      (function J(se) {
        O.current = se, window.clearTimeout(D.current), se !== "" && (D.current = window.setTimeout(() => J(""), 1e3));
      })(ne), G && setTimeout(() => G.focus());
    };
    m.useEffect(() => () => window.clearTimeout(D.current), []), Yi();
    const I = m.useCallback((j) => {
      var N, M;
      return F.current === ((N = W.current) == null ? void 0 : N.side) && K_(j, (M = W.current) == null ? void 0 : M.area);
    }, []);
    return /* @__PURE__ */ u.jsx(
      A_,
      {
        scope: n,
        searchRef: O,
        onItemEnter: m.useCallback(
          (j) => {
            I(j) && j.preventDefault();
          },
          [I]
        ),
        onItemLeave: m.useCallback(
          (j) => {
            var ne;
            I(j) || ((ne = _.current) == null || ne.focus(), P(null));
          },
          [I]
        ),
        onTriggerLeave: m.useCallback(
          (j) => {
            I(j) && j.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: T,
        onPointerGraceIntentChange: m.useCallback((j) => {
          W.current = j;
        }, []),
        children: /* @__PURE__ */ u.jsx(H, { ...V, children: /* @__PURE__ */ u.jsx(
          Qs,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Y(s, (j) => {
              var ne;
              j.preventDefault(), (ne = _.current) == null || ne.focus({ preventScroll: !0 });
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
                  au,
                  {
                    asChild: !0,
                    ...g,
                    dir: C.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: Y(c, (j) => {
                      C.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ u.jsx(
                      rc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Av(x.open),
                        "data-radix-menu-content": "",
                        dir: C.dir,
                        ...b,
                        ...v,
                        ref: k,
                        style: { outline: "none", ...v.style },
                        onKeyDown: Y(v.onKeyDown, (j) => {
                          const N = j.target.closest("[data-radix-menu-content]") === j.currentTarget, M = j.ctrlKey || j.altKey || j.metaKey, $ = j.key.length === 1;
                          N && (j.key === "Tab" && j.preventDefault(), !M && $ && K(j.key));
                          const z = _.current;
                          if (j.target !== z || !C_.includes(j.key)) return;
                          j.preventDefault();
                          const G = S().filter((R) => !R.disabled).map((R) => R.ref.current);
                          lv.includes(j.key) && G.reverse(), H_(G);
                        }),
                        onBlur: Y(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(D.current), O.current = "");
                        }),
                        onPointerMove: Y(
                          e.onPointerMove,
                          Ts((j) => {
                            const ne = j.target, N = L.current !== j.clientX;
                            if (j.currentTarget.contains(ne) && N) {
                              const M = j.clientX > L.current ? "right" : "left";
                              F.current = M, L.current = j.clientX;
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
mv.displayName = Lt;
var T_ = "MenuGroup", fu = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { role: "group", ...r, ref: t });
  }
);
fu.displayName = T_;
var j_ = "MenuLabel", vv = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { ...r, ref: t });
  }
);
vv.displayName = j_;
var xi = "MenuItem", ph = "menu.itemSelect", ac = m.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = m.useRef(null), a = oa(xi, e.__scopeMenu), i = du(xi, e.__scopeMenu), c = fe(t, s), l = m.useRef(!1), f = () => {
      const d = s.current;
      if (!n && d) {
        const h = new CustomEvent(ph, { bubbles: !0, cancelable: !0 });
        d.addEventListener(ph, (p) => r == null ? void 0 : r(p), { once: !0 }), $d(d, h), h.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ u.jsx(
      gv,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: Y(e.onClick, f),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) == null || h.call(e, d), l.current = !0;
        },
        onPointerUp: Y(e.onPointerUp, (d) => {
          var h;
          l.current || (h = d.currentTarget) == null || h.click();
        }),
        onKeyDown: Y(e.onKeyDown, (d) => {
          const h = i.searchRef.current !== "";
          n || h && d.key === " " || Ol.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
ac.displayName = xi;
var gv = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, a = du(xi, n), i = uv(n), c = m.useRef(null), l = fe(t, c), [f, d] = m.useState(!1), [h, p] = m.useState("");
    return m.useEffect(() => {
      const y = c.current;
      y && p((y.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ u.jsx(
      Is.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ u.jsx(iu, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ u.jsx(
          Q.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: l,
            onPointerMove: Y(
              e.onPointerMove,
              Ts((y) => {
                r ? a.onItemLeave(y) : (a.onItemEnter(y), y.defaultPrevented || y.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Y(
              e.onPointerLeave,
              Ts((y) => a.onItemLeave(y))
            ),
            onFocus: Y(e.onFocus, () => d(!0)),
            onBlur: Y(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), $_ = "MenuCheckboxItem", yv = m.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(Sv, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ u.jsx(
      ac,
      {
        role: "menuitemcheckbox",
        "aria-checked": wi(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": pu(n),
        onSelect: Y(
          o.onSelect,
          () => r == null ? void 0 : r(wi(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
yv.displayName = $_;
var bv = "MenuRadioGroup", [W_, L_] = $r(
  bv,
  { value: void 0, onValueChange: () => {
  } }
), xv = m.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = Ct(r);
    return /* @__PURE__ */ u.jsx(W_, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ u.jsx(fu, { ...o, ref: t }) });
  }
);
xv.displayName = bv;
var wv = "MenuRadioItem", Cv = m.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = L_(wv, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ u.jsx(Sv, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ u.jsx(
      ac,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": pu(s),
        onSelect: Y(
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
Cv.displayName = wv;
var hu = "MenuItemIndicator", [Sv, F_] = $r(
  hu,
  { checked: !1 }
), _v = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = F_(hu, n);
    return /* @__PURE__ */ u.jsx(
      ot,
      {
        present: r || wi(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ u.jsx(
          Q.span,
          {
            ...o,
            ref: t,
            "data-state": pu(s.checked)
          }
        )
      }
    );
  }
);
_v.displayName = hu;
var V_ = "MenuSeparator", kv = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(
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
kv.displayName = V_;
var z_ = "MenuArrow", Ev = m.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = sc(n);
    return /* @__PURE__ */ u.jsx(oc, { ...o, ...r, ref: t });
  }
);
Ev.displayName = z_;
var B_ = "MenuSub", [AT, Pv] = $r(B_), ns = "MenuSubTrigger", Mv = m.forwardRef(
  (e, t) => {
    const n = Wr(ns, e.__scopeMenu), r = oa(ns, e.__scopeMenu), o = Pv(ns, e.__scopeMenu), s = du(ns, e.__scopeMenu), a = m.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = s, l = { __scopeMenu: e.__scopeMenu }, f = m.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return m.useEffect(() => f, [f]), m.useEffect(() => {
      const d = i.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [i, c]), /* @__PURE__ */ u.jsx(cu, { asChild: !0, ...l, children: /* @__PURE__ */ u.jsx(
      gv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Av(n.open),
        ...e,
        ref: On(t, o.onTriggerChange),
        onClick: (d) => {
          var h;
          (h = e.onClick) == null || h.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Y(
          e.onPointerMove,
          Ts((d) => {
            s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: Y(
          e.onPointerLeave,
          Ts((d) => {
            var p, y;
            f();
            const h = (p = n.content) == null ? void 0 : p.getBoundingClientRect();
            if (h) {
              const v = (y = n.content) == null ? void 0 : y.dataset.side, x = v === "right", C = x ? -5 : 5, b = h[x ? "left" : "right"], g = h[x ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + C, y: d.clientY },
                  { x: b, y: h.top },
                  { x: g, y: h.top },
                  { x: g, y: h.bottom },
                  { x: b, y: h.bottom }
                ],
                side: v
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
        onKeyDown: Y(e.onKeyDown, (d) => {
          var p;
          const h = s.searchRef.current !== "";
          e.disabled || h && d.key === " " || S_[r.dir].includes(d.key) && (n.onOpenChange(!0), (p = n.content) == null || p.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Mv.displayName = ns;
var Nv = "MenuSubContent", Dv = m.forwardRef(
  (e, t) => {
    const n = hv(Lt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Wr(Lt, e.__scopeMenu), a = oa(Lt, e.__scopeMenu), i = Pv(Nv, e.__scopeMenu), c = m.useRef(null), l = fe(t, c);
    return /* @__PURE__ */ u.jsx(Is.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(ot, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Is.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ u.jsx(
      uu,
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
        onFocusOutside: Y(e.onFocusOutside, (f) => {
          f.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: Y(e.onEscapeKeyDown, (f) => {
          a.onClose(), f.preventDefault();
        }),
        onKeyDown: Y(e.onKeyDown, (f) => {
          var p;
          const d = f.currentTarget.contains(f.target), h = __[a.dir].includes(f.key);
          d && h && (s.onOpenChange(!1), (p = i.trigger) == null || p.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
Dv.displayName = Nv;
function Av(e) {
  return e ? "open" : "closed";
}
function wi(e) {
  return e === "indeterminate";
}
function pu(e) {
  return wi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function H_(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Y_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function G_(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Y_(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function U_(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, d = c.x, h = c.y;
    f > r != h > r && n < (d - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function K_(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return U_(n, t);
}
function Ts(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var q_ = fv, X_ = cu, Z_ = pv, Q_ = mv, J_ = fu, ek = vv, tk = ac, nk = yv, rk = xv, ok = Cv, sk = _v, ak = kv, ik = Ev, ck = Mv, lk = Dv, ic = "DropdownMenu", [dk] = Je(
  ic,
  [dv]
), gt = dv(), [uk, Ov] = dk(ic), Rv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, c = gt(t), l = m.useRef(null), [f, d] = vt({
    prop: o,
    defaultProp: s ?? !1,
    onChange: a,
    caller: ic
  });
  return /* @__PURE__ */ u.jsx(
    uk,
    {
      scope: t,
      triggerId: ze(),
      triggerRef: l,
      contentId: ze(),
      open: f,
      onOpenChange: d,
      onOpenToggle: m.useCallback(() => d((h) => !h), [d]),
      modal: i,
      children: /* @__PURE__ */ u.jsx(q_, { ...c, open: f, onOpenChange: d, dir: r, modal: i, children: n })
    }
  );
};
Rv.displayName = ic;
var Iv = "DropdownMenuTrigger", Tv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Ov(Iv, n), a = gt(n);
    return /* @__PURE__ */ u.jsx(X_, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      Q.button,
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
        ref: On(t, s.triggerRef),
        onPointerDown: Y(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: Y(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Tv.displayName = Iv;
var fk = "DropdownMenuPortal", jv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = gt(t);
  return /* @__PURE__ */ u.jsx(Z_, { ...r, ...n });
};
jv.displayName = fk;
var $v = "DropdownMenuContent", Wv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ov($v, n), s = gt(n), a = m.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Q_,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (i) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: Y(e.onInteractOutside, (i) => {
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
Wv.displayName = $v;
var hk = "DropdownMenuGroup", pk = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ u.jsx(J_, { ...o, ...r, ref: t });
  }
);
pk.displayName = hk;
var mk = "DropdownMenuLabel", Lv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ u.jsx(ek, { ...o, ...r, ref: t });
  }
);
Lv.displayName = mk;
var vk = "DropdownMenuItem", Fv = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ u.jsx(tk, { ...o, ...r, ref: t });
  }
);
Fv.displayName = vk;
var gk = "DropdownMenuCheckboxItem", yk = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(nk, { ...o, ...r, ref: t });
});
yk.displayName = gk;
var bk = "DropdownMenuRadioGroup", xk = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(rk, { ...o, ...r, ref: t });
});
xk.displayName = bk;
var wk = "DropdownMenuRadioItem", Ck = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(ok, { ...o, ...r, ref: t });
});
Ck.displayName = wk;
var Sk = "DropdownMenuItemIndicator", _k = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(sk, { ...o, ...r, ref: t });
});
_k.displayName = Sk;
var kk = "DropdownMenuSeparator", Vv = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(ak, { ...o, ...r, ref: t });
});
Vv.displayName = kk;
var Ek = "DropdownMenuArrow", Pk = m.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ u.jsx(ik, { ...o, ...r, ref: t });
  }
);
Pk.displayName = Ek;
var Mk = "DropdownMenuSubTrigger", Nk = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(ck, { ...o, ...r, ref: t });
});
Nk.displayName = Mk;
var Dk = "DropdownMenuSubContent", Ak = m.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ u.jsx(
    lk,
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
Ak.displayName = Dk;
var Ok = Rv, Rk = Tv, Ik = jv, Tk = Wv, jk = Lv, mh = Fv, $k = Vv;
function vh(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var cc = "Popover", [zv] = Je(cc, [
  ar
]), sa = ar(), [Wk, ir] = zv(cc), Bv = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = sa(t), c = m.useRef(null), [l, f] = m.useState(!1), [d, h] = vt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: cc
  });
  return /* @__PURE__ */ u.jsx(nc, { ...i, children: /* @__PURE__ */ u.jsx(
    Wk,
    {
      scope: t,
      contentId: ze(),
      triggerRef: c,
      open: d,
      onOpenChange: h,
      onOpenToggle: m.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: m.useCallback(() => f(!0), []),
      onCustomAnchorRemove: m.useCallback(() => f(!1), []),
      modal: a,
      children: n
    }
  ) });
};
Bv.displayName = cc;
var Hv = "PopoverAnchor", Yv = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ir(Hv, n), s = sa(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return m.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ u.jsx(ta, { ...s, ...r, ref: t });
  }
);
Yv.displayName = Hv;
var Gv = "PopoverTrigger", Uv = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ir(Gv, n), s = sa(n), a = fe(t, o.triggerRef), i = /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Qv(o.open),
        ...r,
        ref: a,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ u.jsx(ta, { asChild: !0, ...s, children: i });
  }
);
Uv.displayName = Gv;
var mu = "PopoverPortal", [Lk, Fk] = zv(mu, {
  forceMount: void 0
}), Kv = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = ir(mu, t);
  return /* @__PURE__ */ u.jsx(Lk, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(ot, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
Kv.displayName = mu;
var xo = "PopoverContent", qv = m.forwardRef(
  (e, t) => {
    const n = Fk(xo, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = ir(xo, e.__scopePopover);
    return /* @__PURE__ */ u.jsx(ot, { present: r || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(zk, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Bk, { ...o, ref: t }) });
  }
);
qv.displayName = xo;
var Vk = /* @__PURE__ */ er("PopoverContent.RemoveScroll"), zk = m.forwardRef(
  (e, t) => {
    const n = ir(xo, e.__scopePopover), r = m.useRef(null), o = fe(t, r), s = m.useRef(!1);
    return m.useEffect(() => {
      const a = r.current;
      if (a) return Ui(a);
    }, []), /* @__PURE__ */ u.jsx(Js, { as: Vk, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
      Xv,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (a) => {
          var i;
          a.preventDefault(), s.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Y(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Y(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Bk = m.forwardRef(
  (e, t) => {
    const n = ir(xo, e.__scopePopover), r = m.useRef(!1), o = m.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Xv,
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
), Xv = m.forwardRef(
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
    } = e, h = ir(xo, n), p = sa(n);
    return Yi(), /* @__PURE__ */ u.jsx(
      Qs,
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
              rc,
              {
                "data-state": Qv(h.open),
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
), Zv = "PopoverClose", Hk = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ir(Zv, n);
    return /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Hk.displayName = Zv;
var Yk = "PopoverArrow", Gk = m.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = sa(n);
    return /* @__PURE__ */ u.jsx(oc, { ...o, ...r, ref: t });
  }
);
Gk.displayName = Yk;
function Qv(e) {
  return e ? "open" : "closed";
}
var Jv = Bv, Uk = Yv, eg = Uv, tg = Kv, vu = qv, gu = "Progress", yu = 100, [Kk] = Je(gu), [qk, Xk] = Kk(gu), ng = m.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: s = Zk,
      ...a
    } = e;
    (o || o === 0) && !gh(o) && console.error(Qk(`${o}`, "Progress"));
    const i = gh(o) ? o : yu;
    r !== null && !yh(r, i) && console.error(Jk(`${r}`, "Progress"));
    const c = yh(r, i) ? r : null, l = Ci(c) ? s(c, i) : void 0;
    return /* @__PURE__ */ u.jsx(qk, { scope: n, value: c, max: i, children: /* @__PURE__ */ u.jsx(
      Q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Ci(c) ? c : void 0,
        "aria-valuetext": l,
        role: "progressbar",
        "data-state": sg(c, i),
        "data-value": c ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
ng.displayName = gu;
var rg = "ProgressIndicator", og = m.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = Xk(rg, n);
    return /* @__PURE__ */ u.jsx(
      Q.div,
      {
        "data-state": sg(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
og.displayName = rg;
function Zk(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function sg(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ci(e) {
  return typeof e == "number";
}
function gh(e) {
  return Ci(e) && !isNaN(e) && e > 0;
}
function yh(e, t) {
  return Ci(e) && !isNaN(e) && e <= t && e >= 0;
}
function Qk(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${yu}\`.`;
}
function Jk(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${yu} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var eE = ng, tE = og, bu = "Radio", [nE, ag] = Je(bu), [rE, oE] = nE(bu), ig = m.forwardRef(
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
    } = e, [d, h] = m.useState(null), p = fe(t, (x) => h(x)), y = m.useRef(!1), v = d ? l || !!d.closest("form") : !0;
    return /* @__PURE__ */ u.jsxs(rE, { scope: n, checked: o, disabled: a, children: [
      /* @__PURE__ */ u.jsx(
        Q.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": ug(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...f,
          ref: p,
          onClick: Y(e.onClick, (x) => {
            o || c == null || c(), v && (y.current = x.isPropagationStopped(), y.current || x.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ u.jsx(
        dg,
        {
          control: d,
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
ig.displayName = bu;
var cg = "RadioIndicator", lg = m.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, s = oE(cg, n);
    return /* @__PURE__ */ u.jsx(ot, { present: r || s.checked, children: /* @__PURE__ */ u.jsx(
      Q.span,
      {
        "data-state": ug(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
lg.displayName = cg;
var sE = "RadioBubbleInput", dg = m.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = m.useRef(null), i = fe(a, s), c = qi(n), l = Xi(t);
    return m.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== n && p) {
        const y = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(y);
      }
    }, [c, n, r]), /* @__PURE__ */ u.jsx(
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
dg.displayName = sE;
function ug(e) {
  return e ? "checked" : "unchecked";
}
var aE = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], lc = "RadioGroup", [iE] = Je(lc, [
  Ro,
  ag
]), fg = Ro(), hg = ag(), [cE, lE] = iE(lc), pg = m.forwardRef(
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
    } = e, p = fg(n), y = Do(l), [v, x] = vt({
      prop: s,
      defaultProp: o ?? null,
      onChange: d,
      caller: lc
    });
    return /* @__PURE__ */ u.jsx(
      cE,
      {
        scope: n,
        name: r,
        required: a,
        disabled: i,
        value: v,
        onValueChange: x,
        children: /* @__PURE__ */ u.jsx(
          au,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: y,
            loop: f,
            children: /* @__PURE__ */ u.jsx(
              Q.div,
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
pg.displayName = lc;
var mg = "RadioGroupItem", vg = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, s = lE(mg, n), a = s.disabled || r, i = fg(n), c = hg(n), l = m.useRef(null), f = fe(t, l), d = s.value === o.value, h = m.useRef(!1);
    return m.useEffect(() => {
      const p = (v) => {
        aE.includes(v.key) && (h.current = !0);
      }, y = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", y), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", y);
      };
    }, []), /* @__PURE__ */ u.jsx(
      iu,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: d,
        children: /* @__PURE__ */ u.jsx(
          ig,
          {
            disabled: a,
            required: s.required,
            checked: d,
            ...c,
            ...o,
            name: s.name,
            ref: f,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: Y((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: Y(o.onFocus, () => {
              var p;
              h.current && ((p = l.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
vg.displayName = mg;
var dE = "RadioGroupIndicator", gg = m.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = hg(n);
    return /* @__PURE__ */ u.jsx(lg, { ...o, ...r, ref: t });
  }
);
gg.displayName = dE;
var uE = pg, fE = vg, hE = gg, pE = [" ", "Enter", "ArrowUp", "ArrowDown"], mE = [" ", "Enter"], Dr = "Select", [dc, uc, vE] = Zs(Dr), [Io] = Je(Dr, [
  vE,
  ar
]), fc = ar(), [gE, cr] = Io(Dr), [yE, bE] = Io(Dr), yg = (e) => {
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
    form: y
  } = e, v = fc(t), [x, C] = m.useState(null), [b, g] = m.useState(null), [S, w] = m.useState(!1), P = Do(l), [_, k] = vt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Dr
  }), [D, O] = vt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Dr
  }), T = m.useRef(null), W = x ? y || !!x.closest("form") : !0, [F, L] = m.useState(/* @__PURE__ */ new Set()), H = Array.from(F).map((V) => V.props.value).join(";");
  return /* @__PURE__ */ u.jsx(nc, { ...v, children: /* @__PURE__ */ u.jsxs(
    gE,
    {
      required: p,
      scope: t,
      trigger: x,
      onTriggerChange: C,
      valueNode: b,
      onValueNodeChange: g,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: w,
      contentId: ze(),
      value: D,
      onValueChange: O,
      open: _,
      onOpenChange: k,
      dir: P,
      triggerPointerDownPosRef: T,
      disabled: h,
      children: [
        /* @__PURE__ */ u.jsx(dc.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
          yE,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: m.useCallback((V) => {
              L((K) => new Set(K).add(V));
            }, []),
            onNativeOptionRemove: m.useCallback((V) => {
              L((K) => {
                const I = new Set(K);
                return I.delete(V), I;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ u.jsxs(
          Hg,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: d,
            value: D,
            onChange: (V) => O(V.target.value),
            disabled: h,
            form: y,
            children: [
              D === void 0 ? /* @__PURE__ */ u.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          H
        ) : null
      ]
    }
  ) });
};
yg.displayName = Dr;
var bg = "SelectTrigger", xg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = fc(n), a = cr(bg, n), i = a.disabled || r, c = fe(t, a.onTriggerChange), l = uc(n), f = m.useRef("touch"), [d, h, p] = Gg((v) => {
      const x = l().filter((g) => !g.disabled), C = x.find((g) => g.value === a.value), b = Ug(x, v, C);
      b !== void 0 && a.onValueChange(b.value);
    }), y = (v) => {
      i || (a.onOpenChange(!0), p()), v && (a.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      });
    };
    return /* @__PURE__ */ u.jsx(ta, { asChild: !0, ...s, children: /* @__PURE__ */ u.jsx(
      Q.button,
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
        "data-placeholder": Yg(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Y(o.onClick, (v) => {
          v.currentTarget.focus(), f.current !== "mouse" && y(v);
        }),
        onPointerDown: Y(o.onPointerDown, (v) => {
          f.current = v.pointerType;
          const x = v.target;
          x.hasPointerCapture(v.pointerId) && x.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && v.pointerType === "mouse" && (y(v), v.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (v) => {
          const x = d.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && h(v.key), !(x && v.key === " ") && pE.includes(v.key) && (y(), v.preventDefault());
        })
      }
    ) });
  }
);
xg.displayName = bg;
var wg = "SelectValue", Cg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = cr(wg, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, d = fe(t, c.onValueNodeChange);
    return Qe(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ u.jsx(
      Q.span,
      {
        ...i,
        ref: d,
        style: { pointerEvents: "none" },
        children: Yg(c.value) ? /* @__PURE__ */ u.jsx(u.Fragment, { children: a }) : s
      }
    );
  }
);
Cg.displayName = wg;
var xE = "SelectIcon", Sg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ u.jsx(Q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Sg.displayName = xE;
var wE = "SelectPortal", _g = (e) => /* @__PURE__ */ u.jsx(jr, { asChild: !0, ...e });
_g.displayName = wE;
var Ar = "SelectContent", kg = m.forwardRef(
  (e, t) => {
    const n = cr(Ar, e.__scopeSelect), [r, o] = m.useState();
    if (Qe(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? qs.createPortal(
        /* @__PURE__ */ u.jsx(Eg, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx(dc.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ u.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ u.jsx(Pg, { ...e, ref: t });
  }
);
kg.displayName = Ar;
var Yt = 10, [Eg, lr] = Io(Ar), CE = "SelectContentImpl", SE = /* @__PURE__ */ er("SelectContent.RemoveScroll"), Pg = m.forwardRef(
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
      sticky: y,
      hideWhenDetached: v,
      avoidCollisions: x,
      //
      ...C
    } = e, b = cr(Ar, n), [g, S] = m.useState(null), [w, P] = m.useState(null), _ = fe(t, (R) => S(R)), [k, D] = m.useState(null), [O, T] = m.useState(
      null
    ), W = uc(n), [F, L] = m.useState(!1), H = m.useRef(!1);
    m.useEffect(() => {
      if (g) return Ui(g);
    }, [g]), Yi();
    const V = m.useCallback(
      (R) => {
        const [Z, ...J] = W().map((he) => he.ref.current), [se] = J.slice(-1), le = document.activeElement;
        for (const he of R)
          if (he === le || (he == null || he.scrollIntoView({ block: "nearest" }), he === Z && w && (w.scrollTop = 0), he === se && w && (w.scrollTop = w.scrollHeight), he == null || he.focus(), document.activeElement !== le)) return;
      },
      [W, w]
    ), K = m.useCallback(
      () => V([k, g]),
      [V, k, g]
    );
    m.useEffect(() => {
      F && K();
    }, [F, K]);
    const { onOpenChange: I, triggerPointerDownPosRef: j } = b;
    m.useEffect(() => {
      if (g) {
        let R = { x: 0, y: 0 };
        const Z = (se) => {
          var le, he;
          R = {
            x: Math.abs(Math.round(se.pageX) - (((le = j.current) == null ? void 0 : le.x) ?? 0)),
            y: Math.abs(Math.round(se.pageY) - (((he = j.current) == null ? void 0 : he.y) ?? 0))
          };
        }, J = (se) => {
          R.x <= 10 && R.y <= 10 ? se.preventDefault() : g.contains(se.target) || I(!1), document.removeEventListener("pointermove", Z), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [g, I, j]), m.useEffect(() => {
      const R = () => I(!1);
      return window.addEventListener("blur", R), window.addEventListener("resize", R), () => {
        window.removeEventListener("blur", R), window.removeEventListener("resize", R);
      };
    }, [I]);
    const [ne, N] = Gg((R) => {
      const Z = W().filter((le) => !le.disabled), J = Z.find((le) => le.ref.current === document.activeElement), se = Ug(Z, R, J);
      se && setTimeout(() => se.ref.current.focus());
    }), M = m.useCallback(
      (R, Z, J) => {
        const se = !H.current && !J;
        (b.value !== void 0 && b.value === Z || se) && (D(R), se && (H.current = !0));
      },
      [b.value]
    ), $ = m.useCallback(() => g == null ? void 0 : g.focus(), [g]), z = m.useCallback(
      (R, Z, J) => {
        const se = !H.current && !J;
        (b.value !== void 0 && b.value === Z || se) && T(R);
      },
      [b.value]
    ), U = r === "popper" ? Rl : Mg, G = U === Rl ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: d,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: v,
      avoidCollisions: x
    } : {};
    return /* @__PURE__ */ u.jsx(
      Eg,
      {
        scope: n,
        content: g,
        viewport: w,
        onViewportChange: P,
        itemRefCallback: M,
        selectedItem: k,
        onItemLeave: $,
        itemTextRefCallback: z,
        focusSelectedItem: K,
        selectedItemText: O,
        position: r,
        isPositioned: F,
        searchRef: ne,
        children: /* @__PURE__ */ u.jsx(Js, { as: SE, allowPinchZoom: !0, children: /* @__PURE__ */ u.jsx(
          Qs,
          {
            asChild: !0,
            trapped: b.open,
            onMountAutoFocus: (R) => {
              R.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (R) => {
              var Z;
              (Z = b.trigger) == null || Z.focus({ preventScroll: !0 }), R.preventDefault();
            }),
            children: /* @__PURE__ */ u.jsx(
              Tr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (R) => R.preventDefault(),
                onDismiss: () => b.onOpenChange(!1),
                children: /* @__PURE__ */ u.jsx(
                  U,
                  {
                    role: "listbox",
                    id: b.contentId,
                    "data-state": b.open ? "open" : "closed",
                    dir: b.dir,
                    onContextMenu: (R) => R.preventDefault(),
                    ...C,
                    ...G,
                    onPlaced: () => L(!0),
                    ref: _,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...C.style
                    },
                    onKeyDown: Y(C.onKeyDown, (R) => {
                      const Z = R.ctrlKey || R.altKey || R.metaKey;
                      if (R.key === "Tab" && R.preventDefault(), !Z && R.key.length === 1 && N(R.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(R.key)) {
                        let se = W().filter((le) => !le.disabled).map((le) => le.ref.current);
                        if (["ArrowUp", "End"].includes(R.key) && (se = se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(R.key)) {
                          const le = R.target, he = se.indexOf(le);
                          se = se.slice(he + 1);
                        }
                        setTimeout(() => V(se)), R.preventDefault();
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
Pg.displayName = CE;
var _E = "SelectItemAlignedPosition", Mg = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = cr(Ar, n), a = lr(Ar, n), [i, c] = m.useState(null), [l, f] = m.useState(null), d = fe(t, (_) => f(_)), h = uc(n), p = m.useRef(!1), y = m.useRef(!0), { viewport: v, selectedItem: x, selectedItemText: C, focusSelectedItem: b } = a, g = m.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && v && x && C) {
      const _ = s.trigger.getBoundingClientRect(), k = l.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), O = C.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const le = O.left - k.left, he = D.left - le, xe = _.left - he, Ve = _.width + xe, et = Math.max(Ve, k.width), At = window.innerWidth - Yt, Ot = vh(he, [
          Yt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Yt, At - et)
        ]);
        i.style.minWidth = Ve + "px", i.style.left = Ot + "px";
      } else {
        const le = k.right - O.right, he = window.innerWidth - D.right - le, xe = window.innerWidth - _.right - he, Ve = _.width + xe, et = Math.max(Ve, k.width), At = window.innerWidth - Yt, Ot = vh(he, [
          Yt,
          Math.max(Yt, At - et)
        ]);
        i.style.minWidth = Ve + "px", i.style.right = Ot + "px";
      }
      const T = h(), W = window.innerHeight - Yt * 2, F = v.scrollHeight, L = window.getComputedStyle(l), H = parseInt(L.borderTopWidth, 10), V = parseInt(L.paddingTop, 10), K = parseInt(L.borderBottomWidth, 10), I = parseInt(L.paddingBottom, 10), j = H + V + F + I + K, ne = Math.min(x.offsetHeight * 5, j), N = window.getComputedStyle(v), M = parseInt(N.paddingTop, 10), $ = parseInt(N.paddingBottom, 10), z = _.top + _.height / 2 - Yt, U = W - z, G = x.offsetHeight / 2, R = x.offsetTop + G, Z = H + V + R, J = j - Z;
      if (Z <= z) {
        const le = T.length > 0 && x === T[T.length - 1].ref.current;
        i.style.bottom = "0px";
        const he = l.clientHeight - v.offsetTop - v.offsetHeight, xe = Math.max(
          U,
          G + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (le ? $ : 0) + he + K
        ), Ve = Z + xe;
        i.style.height = Ve + "px";
      } else {
        const le = T.length > 0 && x === T[0].ref.current;
        i.style.top = "0px";
        const xe = Math.max(
          z,
          H + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (le ? M : 0) + G
        ) + J;
        i.style.height = xe + "px", v.scrollTop = Z - z + v.offsetTop;
      }
      i.style.margin = `${Yt}px 0`, i.style.minHeight = ne + "px", i.style.maxHeight = W + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    l,
    v,
    x,
    C,
    s.dir,
    r
  ]);
  Qe(() => g(), [g]);
  const [S, w] = m.useState();
  Qe(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [l]);
  const P = m.useCallback(
    (_) => {
      _ && y.current === !0 && (g(), b == null || b(), y.current = !1);
    },
    [g, b]
  );
  return /* @__PURE__ */ u.jsx(
    EE,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: P,
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
            Q.div,
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
Mg.displayName = _E;
var kE = "SelectPopperPosition", Rl = m.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Yt,
    ...s
  } = e, a = fc(n);
  return /* @__PURE__ */ u.jsx(
    rc,
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
Rl.displayName = kE;
var [EE, xu] = Io(Ar, {}), Il = "SelectViewport", Ng = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = lr(Il, n), a = xu(Il, n), i = fe(t, s.onViewportChange), c = m.useRef(0);
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
      /* @__PURE__ */ u.jsx(dc.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(
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
          onScroll: Y(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: h } = a;
            if (h != null && h.current && d) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - Yt * 2, v = parseFloat(d.style.minHeight), x = parseFloat(d.style.height), C = Math.max(v, x);
                if (C < y) {
                  const b = C + p, g = Math.min(y, b), S = b - g;
                  d.style.height = g + "px", d.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, d.style.justifyContent = "flex-end");
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
Ng.displayName = Il;
var Dg = "SelectGroup", [PE, ME] = Io(Dg), Ag = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ze();
    return /* @__PURE__ */ u.jsx(PE, { scope: n, id: o, children: /* @__PURE__ */ u.jsx(Q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Ag.displayName = Dg;
var Og = "SelectLabel", Rg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ME(Og, n);
    return /* @__PURE__ */ u.jsx(Q.div, { id: o.id, ...r, ref: t });
  }
);
Rg.displayName = Og;
var Si = "SelectItem", [NE, Ig] = Io(Si), Tg = m.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = cr(Si, n), c = lr(Si, n), l = i.value === r, [f, d] = m.useState(s ?? ""), [h, p] = m.useState(!1), y = fe(
      t,
      (b) => {
        var g;
        return (g = c.itemRefCallback) == null ? void 0 : g.call(c, b, r, o);
      }
    ), v = ze(), x = m.useRef("touch"), C = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ u.jsx(
      NE,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: l,
        onItemTextChange: m.useCallback((b) => {
          d((g) => g || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ u.jsx(
          dc.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ u.jsx(
              Q.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: y,
                onFocus: Y(a.onFocus, () => p(!0)),
                onBlur: Y(a.onBlur, () => p(!1)),
                onClick: Y(a.onClick, () => {
                  x.current !== "mouse" && C();
                }),
                onPointerUp: Y(a.onPointerUp, () => {
                  x.current === "mouse" && C();
                }),
                onPointerDown: Y(a.onPointerDown, (b) => {
                  x.current = b.pointerType;
                }),
                onPointerMove: Y(a.onPointerMove, (b) => {
                  var g;
                  x.current = b.pointerType, o ? (g = c.onItemLeave) == null || g.call(c) : x.current === "mouse" && b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(a.onPointerLeave, (b) => {
                  var g;
                  b.currentTarget === document.activeElement && ((g = c.onItemLeave) == null || g.call(c));
                }),
                onKeyDown: Y(a.onKeyDown, (b) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && b.key === " " || (mE.includes(b.key) && C(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Tg.displayName = Si;
var rs = "SelectItemText", jg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = cr(rs, n), i = lr(rs, n), c = Ig(rs, n), l = bE(rs, n), [f, d] = m.useState(null), h = fe(
      t,
      (C) => d(C),
      c.onItemTextChange,
      (C) => {
        var b;
        return (b = i.itemTextRefCallback) == null ? void 0 : b.call(i, C, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, y = m.useMemo(
      () => /* @__PURE__ */ u.jsx("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: x } = l;
    return Qe(() => (v(y), () => x(y)), [v, x, y]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(Q.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? qs.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
jg.displayName = rs;
var $g = "SelectItemIndicator", Wg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ig($g, n).isSelected ? /* @__PURE__ */ u.jsx(Q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Wg.displayName = $g;
var Tl = "SelectScrollUpButton", Lg = m.forwardRef((e, t) => {
  const n = lr(Tl, e.__scopeSelect), r = xu(Tl, e.__scopeSelect), [o, s] = m.useState(!1), a = fe(t, r.onScrollButtonChange);
  return Qe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Vg,
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
Lg.displayName = Tl;
var jl = "SelectScrollDownButton", Fg = m.forwardRef((e, t) => {
  const n = lr(jl, e.__scopeSelect), r = xu(jl, e.__scopeSelect), [o, s] = m.useState(!1), a = fe(t, r.onScrollButtonChange);
  return Qe(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ u.jsx(
    Vg,
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
Fg.displayName = jl;
var Vg = m.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = lr("SelectScrollButton", n), a = m.useRef(null), i = uc(n), c = m.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return m.useEffect(() => () => c(), [c]), Qe(() => {
    var f;
    const l = i().find((d) => d.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ u.jsx(
    Q.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        var l;
        (l = s.onItemLeave) == null || l.call(s), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), DE = "SelectSeparator", zg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
zg.displayName = DE;
var $l = "SelectArrow", Bg = m.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = fc(n), s = cr($l, n), a = lr($l, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ u.jsx(oc, { ...o, ...r, ref: t }) : null;
  }
);
Bg.displayName = $l;
var AE = "SelectBubbleInput", Hg = m.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = m.useRef(null), s = fe(r, o), a = qi(t);
    return m.useEffect(() => {
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
      Q.select,
      {
        ...n,
        style: { ...Lp, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Hg.displayName = AE;
function Yg(e) {
  return e === "" || e === void 0;
}
function Gg(e) {
  const t = Ct(e), n = m.useRef(""), r = m.useRef(0), o = m.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = m.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return m.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Ug(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = OE(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function OE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var RE = yg, IE = xg, TE = Cg, jE = Sg, $E = _g, WE = kg, LE = Ng, FE = Ag, VE = Rg, zE = Tg, BE = jg, HE = Wg, YE = Lg, GE = Fg, UE = zg, KE = Bg, hc = "Switch", [qE] = Je(hc), [XE, ZE] = qE(hc), Kg = m.forwardRef(
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
    } = e, [h, p] = m.useState(null), y = fe(t, (g) => p(g)), v = m.useRef(!1), x = h ? f || !!h.closest("form") : !0, [C, b] = vt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: hc
    });
    return /* @__PURE__ */ u.jsxs(XE, { scope: n, checked: C, disabled: i, children: [
      /* @__PURE__ */ u.jsx(
        Q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": a,
          "data-state": Qg(C),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...d,
          ref: y,
          onClick: Y(e.onClick, (g) => {
            b((S) => !S), x && (v.current = g.isPropagationStopped(), v.current || g.stopPropagation());
          })
        }
      ),
      x && /* @__PURE__ */ u.jsx(
        Zg,
        {
          control: h,
          bubbles: !v.current,
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
Kg.displayName = hc;
var qg = "SwitchThumb", Xg = m.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = ZE(qg, n);
    return /* @__PURE__ */ u.jsx(
      Q.span,
      {
        "data-state": Qg(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Xg.displayName = qg;
var QE = "SwitchBubbleInput", Zg = m.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = m.useRef(null), i = fe(a, s), c = qi(n), l = Xi(t);
    return m.useEffect(() => {
      const f = a.current;
      if (!f) return;
      const d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (c !== n && p) {
        const y = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(y);
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
Zg.displayName = QE;
function Qg(e) {
  return e ? "checked" : "unchecked";
}
var JE = Kg, eP = Xg, pc = "Tabs", [tP] = Je(pc, [
  Ro
]), Jg = Ro(), [nP, wu] = tP(pc), e0 = m.forwardRef(
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
    } = e, f = Do(i), [d, h] = vt({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: pc
    });
    return /* @__PURE__ */ u.jsx(
      nP,
      {
        scope: n,
        baseId: ze(),
        value: d,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ u.jsx(
          Q.div,
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
e0.displayName = pc;
var t0 = "TabsList", n0 = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = wu(t0, n), a = Jg(n);
    return /* @__PURE__ */ u.jsx(
      au,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ u.jsx(
          Q.div,
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
n0.displayName = t0;
var r0 = "TabsTrigger", o0 = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = wu(r0, n), i = Jg(n), c = a0(a.baseId, r), l = i0(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ u.jsx(
      iu,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ u.jsx(
          Q.button,
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
            onMouseDown: Y(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? a.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: Y(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && a.onValueChange(r);
            }),
            onFocus: Y(e.onFocus, () => {
              const d = a.activationMode !== "manual";
              !f && !o && d && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
o0.displayName = r0;
var s0 = "TabsContent", rP = m.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = wu(s0, n), c = a0(i.baseId, r), l = i0(i.baseId, r), f = r === i.value, d = m.useRef(f);
    return m.useEffect(() => {
      const h = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ u.jsx(ot, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ u.jsx(
      Q.div,
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
rP.displayName = s0;
function a0(e, t) {
  return `${e}-trigger-${t}`;
}
function i0(e, t) {
  return `${e}-content-${t}`;
}
var oP = e0, sP = n0, aP = o0, Cu = "ToastProvider", [Su, iP, cP] = Zs("Toast"), [c0] = Je("Toast", [cP]), [lP, mc] = c0(Cu), l0 = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, c] = m.useState(null), [l, f] = m.useState(0), d = m.useRef(!1), h = m.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Cu}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ u.jsx(Su.Provider, { scope: t, children: /* @__PURE__ */ u.jsx(
    lP,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: s,
      toastCount: l,
      viewport: i,
      onViewportChange: c,
      onToastAdd: m.useCallback(() => f((p) => p + 1), []),
      onToastRemove: m.useCallback(() => f((p) => p - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: h,
      children: a
    }
  ) });
};
l0.displayName = Cu;
var d0 = "ToastViewport", dP = ["F8"], Wl = "toast.viewportPause", Ll = "toast.viewportResume", u0 = m.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = dP,
      label: o = "Notifications ({hotkey})",
      ...s
    } = e, a = mc(d0, n), i = iP(n), c = m.useRef(null), l = m.useRef(null), f = m.useRef(null), d = m.useRef(null), h = fe(t, d, a.onViewportChange), p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), y = a.toastCount > 0;
    m.useEffect(() => {
      const x = (C) => {
        var g;
        r.length !== 0 && r.every((S) => C[S] || C.code === S) && ((g = d.current) == null || g.focus());
      };
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
    }, [r]), m.useEffect(() => {
      const x = c.current, C = d.current;
      if (y && x && C) {
        const b = () => {
          if (!a.isClosePausedRef.current) {
            const P = new CustomEvent(Wl);
            C.dispatchEvent(P), a.isClosePausedRef.current = !0;
          }
        }, g = () => {
          if (a.isClosePausedRef.current) {
            const P = new CustomEvent(Ll);
            C.dispatchEvent(P), a.isClosePausedRef.current = !1;
          }
        }, S = (P) => {
          !x.contains(P.relatedTarget) && g();
        }, w = () => {
          x.contains(document.activeElement) || g();
        };
        return x.addEventListener("focusin", b), x.addEventListener("focusout", S), x.addEventListener("pointermove", b), x.addEventListener("pointerleave", w), window.addEventListener("blur", b), window.addEventListener("focus", g), () => {
          x.removeEventListener("focusin", b), x.removeEventListener("focusout", S), x.removeEventListener("pointermove", b), x.removeEventListener("pointerleave", w), window.removeEventListener("blur", b), window.removeEventListener("focus", g);
        };
      }
    }, [y, a.isClosePausedRef]);
    const v = m.useCallback(
      ({ tabbingDirection: x }) => {
        const b = i().map((g) => {
          const S = g.ref.current, w = [S, ...SP(S)];
          return x === "forwards" ? w : w.reverse();
        });
        return (x === "forwards" ? b.reverse() : b).flat();
      },
      [i]
    );
    return m.useEffect(() => {
      const x = d.current;
      if (x) {
        const C = (b) => {
          var w, P, _;
          const g = b.altKey || b.ctrlKey || b.metaKey;
          if (b.key === "Tab" && !g) {
            const k = document.activeElement, D = b.shiftKey;
            if (b.target === x && D) {
              (w = l.current) == null || w.focus();
              return;
            }
            const W = v({ tabbingDirection: D ? "backwards" : "forwards" }), F = W.findIndex((L) => L === k);
            Zc(W.slice(F + 1)) ? b.preventDefault() : D ? (P = l.current) == null || P.focus() : (_ = f.current) == null || _.focus();
          }
        };
        return x.addEventListener("keydown", C), () => x.removeEventListener("keydown", C);
      }
    }, [i, v]), /* @__PURE__ */ u.jsxs(
      $2,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y && /* @__PURE__ */ u.jsx(
            Fl,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const x = v({
                  tabbingDirection: "forwards"
                });
                Zc(x);
              }
            }
          ),
          /* @__PURE__ */ u.jsx(Su.Slot, { scope: n, children: /* @__PURE__ */ u.jsx(Q.ol, { tabIndex: -1, ...s, ref: h }) }),
          y && /* @__PURE__ */ u.jsx(
            Fl,
            {
              ref: f,
              onFocusFromOutsideViewport: () => {
                const x = v({
                  tabbingDirection: "backwards"
                });
                Zc(x);
              }
            }
          )
        ]
      }
    );
  }
);
u0.displayName = d0;
var f0 = "ToastFocusProxy", Fl = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, s = mc(f0, n);
    return /* @__PURE__ */ u.jsx(
      Vi,
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
Fl.displayName = f0;
var aa = "Toast", uP = "toast.swipeStart", fP = "toast.swipeMove", hP = "toast.swipeCancel", pP = "toast.swipeEnd", h0 = m.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...a } = e, [i, c] = vt({
      prop: r,
      defaultProp: o ?? !0,
      onChange: s,
      caller: aa
    });
    return /* @__PURE__ */ u.jsx(ot, { present: n || i, children: /* @__PURE__ */ u.jsx(
      gP,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Ct(e.onPause),
        onResume: Ct(e.onResume),
        onSwipeStart: Y(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Y(e.onSwipeMove, (l) => {
          const { x: f, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: Y(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Y(e.onSwipeEnd, (l) => {
          const { x: f, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${f}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
h0.displayName = aa;
var [mP, vP] = c0(aa, {
  onClose() {
  }
}), gP = m.forwardRef(
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
      ...y
    } = e, v = mc(aa, n), [x, C] = m.useState(null), b = fe(t, (L) => C(L)), g = m.useRef(null), S = m.useRef(null), w = o || v.duration, P = m.useRef(0), _ = m.useRef(w), k = m.useRef(0), { onToastAdd: D, onToastRemove: O } = v, T = Ct(() => {
      var H;
      (x == null ? void 0 : x.contains(document.activeElement)) && ((H = v.viewport) == null || H.focus()), a();
    }), W = m.useCallback(
      (L) => {
        !L || L === 1 / 0 || (window.clearTimeout(k.current), P.current = (/* @__PURE__ */ new Date()).getTime(), k.current = window.setTimeout(T, L));
      },
      [T]
    );
    m.useEffect(() => {
      const L = v.viewport;
      if (L) {
        const H = () => {
          W(_.current), l == null || l();
        }, V = () => {
          const K = (/* @__PURE__ */ new Date()).getTime() - P.current;
          _.current = _.current - K, window.clearTimeout(k.current), c == null || c();
        };
        return L.addEventListener(Wl, V), L.addEventListener(Ll, H), () => {
          L.removeEventListener(Wl, V), L.removeEventListener(Ll, H);
        };
      }
    }, [v.viewport, w, c, l, W]), m.useEffect(() => {
      s && !v.isClosePausedRef.current && W(w);
    }, [s, w, v.isClosePausedRef, W]), m.useEffect(() => (D(), () => O()), [D, O]);
    const F = m.useMemo(() => x ? w0(x) : null, [x]);
    return v.viewport ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      F && /* @__PURE__ */ u.jsx(
        yP,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          children: F
        }
      ),
      /* @__PURE__ */ u.jsx(mP, { scope: n, onClose: T, children: qs.createPortal(
        /* @__PURE__ */ u.jsx(Su.ItemSlot, { scope: n, children: /* @__PURE__ */ u.jsx(
          j2,
          {
            asChild: !0,
            onEscapeKeyDown: Y(i, () => {
              v.isFocusedToastEscapeKeyDownRef.current || T(), v.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ u.jsx(
              Q.li,
              {
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": v.swipeDirection,
                ...y,
                ref: b,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: Y(e.onKeyDown, (L) => {
                  L.key === "Escape" && (i == null || i(L.nativeEvent), L.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0, T()));
                }),
                onPointerDown: Y(e.onPointerDown, (L) => {
                  L.button === 0 && (g.current = { x: L.clientX, y: L.clientY });
                }),
                onPointerMove: Y(e.onPointerMove, (L) => {
                  if (!g.current) return;
                  const H = L.clientX - g.current.x, V = L.clientY - g.current.y, K = !!S.current, I = ["left", "right"].includes(v.swipeDirection), j = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max, ne = I ? j(0, H) : 0, N = I ? 0 : j(0, V), M = L.pointerType === "touch" ? 10 : 2, $ = { x: ne, y: N }, z = { originalEvent: L, delta: $ };
                  K ? (S.current = $, Oa(fP, d, z, {
                    discrete: !1
                  })) : bh($, v.swipeDirection, M) ? (S.current = $, Oa(uP, f, z, {
                    discrete: !1
                  }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(H) > M || Math.abs(V) > M) && (g.current = null);
                }),
                onPointerUp: Y(e.onPointerUp, (L) => {
                  const H = S.current, V = L.target;
                  if (V.hasPointerCapture(L.pointerId) && V.releasePointerCapture(L.pointerId), S.current = null, g.current = null, H) {
                    const K = L.currentTarget, I = { originalEvent: L, delta: H };
                    bh(H, v.swipeDirection, v.swipeThreshold) ? Oa(pP, p, I, {
                      discrete: !0
                    }) : Oa(
                      hP,
                      h,
                      I,
                      {
                        discrete: !0
                      }
                    ), K.addEventListener("click", (j) => j.preventDefault(), {
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
), yP = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = mc(aa, t), [s, a] = m.useState(!1), [i, c] = m.useState(!1);
  return wP(() => a(!0)), m.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), i ? null : /* @__PURE__ */ u.jsx(jr, { asChild: !0, children: /* @__PURE__ */ u.jsx(Vi, { ...r, children: s && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, bP = "ToastTitle", p0 = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { ...r, ref: t });
  }
);
p0.displayName = bP;
var xP = "ToastDescription", m0 = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ u.jsx(Q.div, { ...r, ref: t });
  }
);
m0.displayName = xP;
var v0 = "ToastAction", g0 = m.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ u.jsx(x0, { altText: n, asChild: !0, children: /* @__PURE__ */ u.jsx(b0, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${v0}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
g0.displayName = v0;
var y0 = "ToastClose", b0 = m.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = vP(y0, n);
    return /* @__PURE__ */ u.jsx(x0, { asChild: !0, children: /* @__PURE__ */ u.jsx(
      Q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, o.onClose)
      }
    ) });
  }
);
b0.displayName = y0;
var x0 = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ u.jsx(
    Q.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function w0(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), CP(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", s = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (s) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...w0(r));
    }
  }), t;
}
function Oa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? $d(o, s) : o.dispatchEvent(s);
}
var bh = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function wP(e = () => {
}) {
  const t = Ct(e);
  Qe(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function CP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function SP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var _P = l0, kP = u0, EP = h0, PP = p0, MP = m0, NP = g0, [vc] = Je("Tooltip", [
  ar
]), gc = ar(), C0 = "TooltipProvider", DP = 700, Vl = "tooltip.open", [AP, _u] = vc(C0), S0 = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = DP,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = m.useRef(!0), i = m.useRef(!1), c = m.useRef(0);
  return m.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ u.jsx(
    AP,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: n,
      onOpen: m.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: m.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: m.useCallback((l) => {
        i.current = l;
      }, []),
      disableHoverableContent: o,
      children: s
    }
  );
};
S0.displayName = C0;
var js = "Tooltip", [OP, ia] = vc(js), _0 = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = _u(js, e.__scopeTooltip), l = gc(t), [f, d] = m.useState(null), h = ze(), p = m.useRef(0), y = a ?? c.disableHoverableContent, v = i ?? c.delayDuration, x = m.useRef(!1), [C, b] = vt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (_) => {
      _ ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Vl))) : c.onClose(), s == null || s(_);
    },
    caller: js
  }), g = m.useMemo(() => C ? x.current ? "delayed-open" : "instant-open" : "closed", [C]), S = m.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, x.current = !1, b(!0);
  }, [b]), w = m.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b(!1);
  }, [b]), P = m.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      x.current = !0, b(!0), p.current = 0;
    }, v);
  }, [v, b]);
  return m.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ u.jsx(nc, { ...l, children: /* @__PURE__ */ u.jsx(
    OP,
    {
      scope: t,
      contentId: h,
      open: C,
      stateAttribute: g,
      trigger: f,
      onTriggerChange: d,
      onTriggerEnter: m.useCallback(() => {
        c.isOpenDelayedRef.current ? P() : S();
      }, [c.isOpenDelayedRef, P, S]),
      onTriggerLeave: m.useCallback(() => {
        y ? w() : (window.clearTimeout(p.current), p.current = 0);
      }, [w, y]),
      onOpen: S,
      onClose: w,
      disableHoverableContent: y,
      children: n
    }
  ) });
};
_0.displayName = js;
var zl = "TooltipTrigger", k0 = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = ia(zl, n), s = _u(zl, n), a = gc(n), i = m.useRef(null), c = fe(t, i, o.onTriggerChange), l = m.useRef(!1), f = m.useRef(!1), d = m.useCallback(() => l.current = !1, []);
    return m.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ u.jsx(ta, { asChild: !0, ...a, children: /* @__PURE__ */ u.jsx(
      Q.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Y(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !f.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: Y(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: Y(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: Y(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: Y(e.onBlur, o.onClose),
        onClick: Y(e.onClick, o.onClose)
      }
    ) });
  }
);
k0.displayName = zl;
var ku = "TooltipPortal", [RP, IP] = vc(ku, {
  forceMount: void 0
}), E0 = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, s = ia(ku, t);
  return /* @__PURE__ */ u.jsx(RP, { scope: t, forceMount: n, children: /* @__PURE__ */ u.jsx(ot, { present: n || s.open, children: /* @__PURE__ */ u.jsx(jr, { asChild: !0, container: o, children: r }) }) });
};
E0.displayName = ku;
var wo = "TooltipContent", P0 = m.forwardRef(
  (e, t) => {
    const n = IP(wo, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...s } = e, a = ia(wo, e.__scopeTooltip);
    return /* @__PURE__ */ u.jsx(ot, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ u.jsx(M0, { side: o, ...s, ref: t }) : /* @__PURE__ */ u.jsx(TP, { side: o, ...s, ref: t }) });
  }
), TP = m.forwardRef((e, t) => {
  const n = ia(wo, e.__scopeTooltip), r = _u(wo, e.__scopeTooltip), o = m.useRef(null), s = fe(t, o), [a, i] = m.useState(null), { trigger: c, onClose: l } = n, f = o.current, { onPointerInTransitChange: d } = r, h = m.useCallback(() => {
    i(null), d(!1);
  }, [d]), p = m.useCallback(
    (y, v) => {
      const x = y.currentTarget, C = { x: y.clientX, y: y.clientY }, b = FP(C, x.getBoundingClientRect()), g = VP(C, b), S = zP(v.getBoundingClientRect()), w = HP([...g, ...S]);
      i(w), d(!0);
    },
    [d]
  );
  return m.useEffect(() => () => h(), [h]), m.useEffect(() => {
    if (c && f) {
      const y = (x) => p(x, f), v = (x) => p(x, c);
      return c.addEventListener("pointerleave", y), f.addEventListener("pointerleave", v), () => {
        c.removeEventListener("pointerleave", y), f.removeEventListener("pointerleave", v);
      };
    }
  }, [c, f, p, h]), m.useEffect(() => {
    if (a) {
      const y = (v) => {
        const x = v.target, C = { x: v.clientX, y: v.clientY }, b = (c == null ? void 0 : c.contains(x)) || (f == null ? void 0 : f.contains(x)), g = !BP(C, a);
        b ? h() : g && (h(), l());
      };
      return document.addEventListener("pointermove", y), () => document.removeEventListener("pointermove", y);
    }
  }, [c, f, a, l, h]), /* @__PURE__ */ u.jsx(M0, { ...e, ref: s });
}), [jP, $P] = vc(js, { isInside: !1 }), WP = /* @__PURE__ */ Wp("TooltipContent"), M0 = m.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = ia(wo, n), l = gc(n), { onClose: f } = c;
    return m.useEffect(() => (document.addEventListener(Vl, f), () => document.removeEventListener(Vl, f)), [f]), m.useEffect(() => {
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
          rc,
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
              /* @__PURE__ */ u.jsx(WP, { children: r }),
              /* @__PURE__ */ u.jsx(jP, { scope: n, isInside: !0, children: /* @__PURE__ */ u.jsx(Q1, { id: c.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
P0.displayName = wo;
var N0 = "TooltipArrow", LP = m.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = gc(n);
    return $P(
      N0,
      n
    ).isInside ? null : /* @__PURE__ */ u.jsx(oc, { ...o, ...r, ref: t });
  }
);
LP.displayName = N0;
function FP(e, t) {
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
function VP(e, t, n = 5) {
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
function zP(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function BP(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, f = i.y, d = c.x, h = c.y;
    f > r != h > r && n < (d - l) * (r - f) / (h - f) + l && (o = !o);
  }
  return o;
}
function HP(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), YP(t);
}
function YP(e) {
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
var GP = S0, UP = _0, KP = k0, qP = E0, XP = P0;
function D0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = D0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function A0() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = D0(e)) && (r && (r += " "), r += t);
  return r;
}
const xh = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, wh = A0, ae = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return wh(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], d = s == null ? void 0 : s[l];
    if (f === null) return null;
    const h = xh(f) || xh(d);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [d, h] = f;
    return h === void 0 || (l[d] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: d, className: h, ...p } = f;
    return Object.entries(p).every((y) => {
      let [v, x] = y;
      return Array.isArray(x) ? x.includes({
        ...s,
        ...i
      }[v]) : {
        ...s,
        ...i
      }[v] === x;
    }) ? [
      ...l,
      d,
      h
    ] : l;
  }, []);
  return wh(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Eu = "-", ZP = (e) => {
  const t = JP(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(Eu);
      return i[0] === "" && i.length !== 1 && i.shift(), O0(i, t) || QP(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const c = n[a] || [];
      return i && r[a] ? [...c, ...r[a]] : c;
    }
  };
}, O0 = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? O0(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Eu);
  return (a = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : a.classGroupId;
}, Ch = /^\[(.+)\]$/, QP = (e) => {
  if (Ch.test(e)) {
    const t = Ch.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, JP = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    Bl(n[o], r, o, t);
  return r;
}, Bl = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Sh(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (eM(o)) {
        Bl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, a]) => {
      Bl(a, Sh(t, s), n, r);
    });
  });
}, Sh = (e, t) => {
  let n = e;
  return t.split(Eu).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, eM = (e) => e.isThemeGetter, tM = (e) => {
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
}, Hl = "!", Yl = ":", nM = Yl.length, rM = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    for (let y = 0; y < o.length; y++) {
      let v = o[y];
      if (a === 0 && i === 0) {
        if (v === Yl) {
          s.push(o.slice(c, y)), c = y + nM;
          continue;
        }
        if (v === "/") {
          l = y;
          continue;
        }
      }
      v === "[" ? a++ : v === "]" ? a-- : v === "(" ? i++ : v === ")" && i--;
    }
    const f = s.length === 0 ? o : o.substring(c), d = oM(f), h = d !== f, p = l && l > c ? l - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const o = t + Yl, s = r;
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
}, oM = (e) => e.endsWith(Hl) ? e.substring(0, e.length - 1) : e.startsWith(Hl) ? e.substring(1) : e, sM = (e) => {
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
}, aM = (e) => ({
  cache: tM(e.cacheSize),
  parseClassName: rM(e),
  sortModifiers: sM(e),
  ...ZP(e)
}), iM = /\s+/, cM = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(iM);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: d,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: v
    } = n(f);
    if (d) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let x = !!v, C = r(x ? y.substring(0, v) : y);
    if (!C) {
      if (!x) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (C = r(y), !C) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      x = !1;
    }
    const b = s(h).join(":"), g = p ? b + Hl : b, S = g + C;
    if (a.includes(S))
      continue;
    a.push(S);
    const w = o(C, x);
    for (let P = 0; P < w.length; ++P) {
      const _ = w[P];
      a.push(g + _);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function lM() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = R0(t)) && (r && (r += " "), r += n);
  return r;
}
const R0 = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = R0(e[r])) && (n && (n += " "), n += t);
  return n;
};
function _h(e, ...t) {
  let n, r, o, s = a;
  function a(c) {
    const l = t.reduce((f, d) => d(f), e());
    return n = aM(l), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }
  function i(c) {
    const l = r(c);
    if (l)
      return l;
    const f = cM(c, n);
    return o(c, f), f;
  }
  return function() {
    return s(lM.apply(null, arguments));
  };
}
const He = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, I0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, T0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, dM = /^\d+\/\d+$/, uM = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fM = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hM = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, pM = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mM = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ur = (e) => dM.test(e), ge = (e) => !!e && !Number.isNaN(Number(e)), Bn = (e) => !!e && Number.isInteger(Number(e)), Qc = (e) => e.endsWith("%") && ge(e.slice(0, -1)), En = (e) => uM.test(e), vM = () => !0, gM = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  fM.test(e) && !hM.test(e)
), j0 = () => !1, yM = (e) => pM.test(e), bM = (e) => mM.test(e), xM = (e) => !ee(e) && !te(e), wM = (e) => To(e, L0, j0), ee = (e) => I0.test(e), mr = (e) => To(e, F0, gM), Jc = (e) => To(e, EM, ge), kh = (e) => To(e, $0, j0), CM = (e) => To(e, W0, bM), Ra = (e) => To(e, V0, yM), te = (e) => T0.test(e), Zo = (e) => jo(e, F0), SM = (e) => jo(e, PM), Eh = (e) => jo(e, $0), _M = (e) => jo(e, L0), kM = (e) => jo(e, W0), Ia = (e) => jo(e, V0, !0), To = (e, t, n) => {
  const r = I0.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, jo = (e, t, n = !1) => {
  const r = T0.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, $0 = (e) => e === "position" || e === "percentage", W0 = (e) => e === "image" || e === "url", L0 = (e) => e === "length" || e === "size" || e === "bg-size", F0 = (e) => e === "length", EM = (e) => e === "number", PM = (e) => e === "family-name", V0 = (e) => e === "shadow", Ph = () => {
  const e = He("color"), t = He("font"), n = He("text"), r = He("font-weight"), o = He("tracking"), s = He("leading"), a = He("breakpoint"), i = He("container"), c = He("spacing"), l = He("radius"), f = He("shadow"), d = He("inset-shadow"), h = He("text-shadow"), p = He("drop-shadow"), y = He("blur"), v = He("perspective"), x = He("aspect"), C = He("ease"), b = He("animate"), g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], w = () => [...S(), te, ee], P = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], k = () => [te, ee, c], D = () => [Ur, "full", "auto", ...k()], O = () => [Bn, "none", "subgrid", te, ee], T = () => ["auto", {
    span: ["full", Bn, te, ee]
  }, Bn, te, ee], W = () => [Bn, "auto", te, ee], F = () => ["auto", "min", "max", "fr", te, ee], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...k()], K = () => [Ur, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], I = () => [e, te, ee], j = () => [...S(), Eh, kh, {
    position: [te, ee]
  }], ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], N = () => ["auto", "cover", "contain", _M, wM, {
    size: [te, ee]
  }], M = () => [Qc, Zo, mr], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    te,
    ee
  ], z = () => ["", ge, Zo, mr], U = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => [ge, Qc, Eh, kh], Z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    te,
    ee
  ], J = () => ["none", ge, te, ee], se = () => ["none", ge, te, ee], le = () => [ge, te, ee], he = () => [Ur, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [En],
      breakpoint: [En],
      color: [vM],
      container: [En],
      "drop-shadow": [En],
      ease: ["in", "out", "in-out"],
      font: [xM],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [En],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [En],
      shadow: [En],
      spacing: ["px", ge],
      text: [En],
      "text-shadow": [En],
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
        aspect: ["auto", "square", Ur, ee, te, x]
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
        columns: [ge, ee, te, i]
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
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: D()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: D()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        z: [Bn, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ur, "full", "auto", i, ...k()]
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
        flex: [ge, Ur, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ge, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ge, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Bn, "first", "last", "none", te, ee]
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
        col: T()
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
        "grid-rows": O()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: T()
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
        "auto-cols": F()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": F()
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
        justify: [...L(), "normal"]
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
        content: ["normal", ...L()]
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
        "place-content": L()
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
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...K()]
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
          ...K()
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
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Zo, mr]
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
        font: [r, te, Jc]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qc, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [SM, ee, t]
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
        "line-clamp": [ge, "none", te, Jc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...k()
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ge, "from-font", "auto", te, mr]
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
        "underline-offset": [ge, "auto", te, ee]
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
        bg: j()
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
          }, Bn, te, ee],
          radial: ["", te, ee],
          conic: [Bn, te, ee]
        }, kM, CM]
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
        rounded: $()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": $()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": $()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": $()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": $()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": $()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": $()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": $()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": $()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": $()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": $()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": $()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": $()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": $()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": $()
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
        border: [...U(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...U(), "hidden", "none"]
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
        outline: [...U(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ge, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ge, Zo, mr]
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
          Ia,
          Ra
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
        "inset-shadow": ["none", d, Ia, Ra]
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
        "ring-offset": [ge, mr]
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
        "text-shadow": ["none", h, Ia, Ra]
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
        opacity: [ge, te, ee]
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
        "mask-linear": [ge]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": R()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": I()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": I()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": R()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": I()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": I()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": R()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": I()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": I()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": R()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": I()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": I()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": R()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": I()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": I()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": R()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": I()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": I()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": R()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": I()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": I()
      }],
      "mask-image-radial": [{
        "mask-radial": [te, ee]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": R()
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
        "mask-conic": [ge]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": R()
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
        mask: j()
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
        brightness: [ge, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ge, te, ee]
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
          Ia,
          Ra
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
        grayscale: ["", ge, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ge, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ge, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ge, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ge, te, ee]
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
        "backdrop-brightness": [ge, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ge, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ge, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ge, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ge, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ge, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ge, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ge, te, ee]
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
        duration: [ge, "initial", te, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", C, te, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ge, te, ee]
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
        "perspective-origin": w()
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
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
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
        translate: he()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": he()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": he()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": he()
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
        fill: ["none", ...I()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ge, Zo, mr, Jc]
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
}, MM = (e, {
  cacheSize: t,
  prefix: n,
  experimentalParseClassName: r,
  extend: o = {},
  override: s = {}
}) => (os(e, "cacheSize", t), os(e, "prefix", n), os(e, "experimentalParseClassName", r), Ta(e.theme, s.theme), Ta(e.classGroups, s.classGroups), Ta(e.conflictingClassGroups, s.conflictingClassGroups), Ta(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers), os(e, "orderSensitiveModifiers", s.orderSensitiveModifiers), ja(e.theme, o.theme), ja(e.classGroups, o.classGroups), ja(e.conflictingClassGroups, o.conflictingClassGroups), ja(e.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), z0(e, o, "orderSensitiveModifiers"), e), os = (e, t, n) => {
  n !== void 0 && (e[t] = n);
}, Ta = (e, t) => {
  if (t)
    for (const n in t)
      os(e, n, t[n]);
}, ja = (e, t) => {
  if (t)
    for (const n in t)
      z0(e, t, n);
}, z0 = (e, t, n) => {
  const r = t[n];
  r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
}, NM = (e, ...t) => typeof e == "function" ? _h(Ph, e, ...t) : _h(() => MM(Ph(), e), ...t), DM = NM({
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
}), A = (...e) => DM(A0(e)), Ze = (e, t = {}) => {
  if (!e) return null;
  const { size: n = 16, className: r } = t;
  if (typeof e == "function") {
    const o = e;
    return E.createElement(o, { size: n, className: r });
  }
  if (typeof e == "object" && e && "$$typeof" in e && "render" in e && typeof e.render == "function") {
    const o = e;
    return E.createElement(o, { size: n, className: r });
  }
  return e;
}, AM = ae(
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
), OM = ae(
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
), Gl = E.forwardRef(
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
      className: A(OM({ intent: r }), s),
      ...i
    };
    return t !== void 0 && (l.onSelect = t), n !== void 0 && (l.disabled = n), a ? /* @__PURE__ */ u.jsx(mh, { ...l, children: e }) : /* @__PURE__ */ u.jsxs(mh, { ...l, children: [
      Ze(o, { size: 16, className: "mr-xs" }),
      e
    ] });
  }
);
Gl.displayName = "DropdownItem";
const RM = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  $k,
  {
    ref: n,
    className: A(
      "border-divider-default -mx-xxs my-0 h-px border-b",
      e
    ),
    ...t
  }
));
RM.displayName = "DropdownSeparator";
const IM = E.forwardRef(({ children: e, className: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  jk,
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
IM.displayName = "DropdownLabel";
const Pu = E.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(Ik, { children: /* @__PURE__ */ u.jsx(
  Tk,
  {
    ref: o,
    className: A(AM({ size: t }), e),
    sideOffset: n,
    ...r
  }
) }));
Pu.displayName = "DropdownContent";
const Mu = ({
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
  return t !== void 0 && (s.open = t), n !== void 0 && (s.onOpenChange = n), /* @__PURE__ */ u.jsx(Ok, { ...s, children: e });
};
Mu.displayName = "Dropdown";
const Nu = E.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => /* @__PURE__ */ u.jsx(
  Rk,
  {
    ref: r,
    asChild: t,
    className: e,
    ...n
  }
));
Nu.displayName = "DropdownTrigger";
const OT = ({
  userName: e,
  loggedAsRole: t,
  children: n,
  className: r = ""
}) => /* @__PURE__ */ u.jsx("div", { className: r, children: /* @__PURE__ */ u.jsxs(Mu, { children: [
  /* @__PURE__ */ u.jsx(
    Nu,
    {
      asChild: !0,
      className: `rounded-sm bg-surface-tertiary ring-interactive-focused
            cursor-pointer hover:ring-4 data-[state=open]:ring-4`,
      children: /* @__PURE__ */ u.jsxs("div", { className: "group gap-0.5 h-6.5 py-0 px-2 flex items-center", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "gap-0.5 flex flex-1 items-center", children: [
          /* @__PURE__ */ u.jsx(T1, { size: 16, className: "flex-[0_0_16px]" }),
          /* @__PURE__ */ u.jsx("span", { className: "text-sm text-body-primary", children: e })
        ] }),
        /* @__PURE__ */ u.jsx(
          Xs,
          {
            size: 16,
            className: `text-shape-light flex-[0_0_16px]
                group-data-[state=open]:rotate-180`
          }
        )
      ] })
    }
  ),
  /* @__PURE__ */ u.jsxs(Pu, { align: "end", className: "py-0 min-w-auto", children: [
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
] }) }), B0 = E.forwardRef(
  ({
    type: e = "multiple",
    collapsible: t = !0,
    value: n,
    defaultValue: r,
    onValueChange: o,
    ...s
  }, a) => e === "single" ? /* @__PURE__ */ u.jsx(
    Hf,
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
    Hf,
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
B0.displayName = "Accordion";
const H0 = E.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
    k2,
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
H0.displayName = "AccordionItem";
const Y0 = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(E2, { className: "flex", children: /* @__PURE__ */ u.jsxs(
  P2,
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
      /* @__PURE__ */ u.jsx(
        Xs,
        {
          size: 22,
          className: `text-shape-primary shrink-0 transition-transform
          duration-200`
        }
      )
    ]
  }
) }));
Y0.displayName = "AccordionTrigger";
const G0 = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
  M2,
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
G0.displayName = "AccordionContent";
const RT = Object.assign(B0, {
  Item: H0,
  Trigger: Y0,
  Content: G0
}), Mh = ae(
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
), TM = E.forwardRef(
  ({
    intent: e = "default",
    icon: t,
    className: n,
    children: r,
    asChild: o = !1,
    ...s
  }, a) => {
    const c = t || (e === "danger" ? W1 : void 0);
    return o ? /* @__PURE__ */ u.jsx(
      No,
      {
        className: A(Mh({ intent: e }), n),
        ref: a,
        ...s,
        children: r
      }
    ) : /* @__PURE__ */ u.jsxs(
      "span",
      {
        className: A(Mh({ intent: e }), n),
        ref: a,
        ...s,
        children: [
          e === "danger" && c && Ze(c, {
            className: "w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"
          }),
          r
        ]
      }
    );
  }
);
TM.displayName = "Badge";
const jM = ae("gap-xxs flex items-center", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-md"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), $a = ae(
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
), $M = ae("text-shape-primary flex-shrink-0", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-5"
    }
  },
  defaultVariants: {
    size: "sm"
  }
}), WM = E.forwardRef(
  ({
    items: e,
    size: t,
    separator: n = Op,
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
        className: A(jM({ size: t }), o),
        ...a,
        children: /* @__PURE__ */ u.jsx("ol", { className: "gap-xxs m-0 p-0 min-w-0 flex list-none items-center", children: c.map((l, f) => {
          const d = f === c.length - 1, h = l.label === "…";
          return /* @__PURE__ */ u.jsxs(E.Fragment, { children: [
            /* @__PURE__ */ u.jsx("li", { className: "min-w-0 flex items-center", children: h ? /* @__PURE__ */ u.jsx(
              "span",
              {
                className: A($a({ isActive: !0 })),
                children: l.label
              }
            ) : l.asChild ? /* @__PURE__ */ u.jsx(
              No,
              {
                onClick: l.onClick,
                className: A(
                  $a({ isActive: d })
                ),
                "aria-current": d ? "page" : void 0,
                children: l.label
              }
            ) : l.href || l.onClick ? /* @__PURE__ */ u.jsx(
              "a",
              {
                href: l.href,
                onClick: l.onClick,
                className: A(
                  $a({ isActive: d })
                ),
                "aria-current": d ? "page" : void 0,
                children: l.label
              }
            ) : /* @__PURE__ */ u.jsx(
              "span",
              {
                className: A($a({ isActive: !0 })),
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
                    className: A($M({ size: t }))
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
WM.displayName = "Breadcrumbs";
const LM = ae(
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
), U0 = E.forwardRef(
  ({
    value: e,
    max: t = 100,
    indeterminate: n = !1,
    size: r = "sm",
    className: o,
    ...s
  }, a) => /* @__PURE__ */ u.jsx(
    eE,
    {
      ref: a,
      className: A(LM({ size: r }), o),
      value: e,
      max: t,
      ...s,
      children: /* @__PURE__ */ u.jsx(
        tE,
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
U0.displayName = "ProgressIndicator.Linear";
const FM = ae("flex items-center", {
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
}), VM = {
  sm: "h-5 w-5",
  md: "h-9 w-9"
}, _i = {
  sm: 12,
  md: 10
}, Nh = {
  sm: (50 - _i.sm / 2).toString(),
  md: (50 - _i.md / 2).toString()
}, K0 = E.forwardRef(
  ({ layout: e = "row", size: t = "md", children: n, className: r, ...o }, s) => /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      role: "status",
      className: A(FM({ size: t, layout: e }), r),
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
            className: A(VM[t], "animate-spin text-transparent"),
            children: [
              /* @__PURE__ */ u.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Nh[t],
                  stroke: "var(--token-color-shape-accent-gray-pale)",
                  strokeWidth: _i[t]
                }
              ),
              /* @__PURE__ */ u.jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: Nh[t],
                  stroke: "var(--token-color-shape-interactive-primary-default)",
                  strokeWidth: _i[t],
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
K0.displayName = "ProgressIndicator.Circular";
const yc = {
  Linear: U0,
  Circular: K0
}, el = ae(
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
), Wa = ae("", {
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
}), Le = E.forwardRef(
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
    const d = s ? No : "button", h = !!((r || o) && !c && !(r && o)), p = !!(c && !r && !o), y = a || l.disabled;
    return a ? /* @__PURE__ */ u.jsxs(
      d,
      {
        ref: f,
        className: A(
          el({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          "relative",
          n
        ),
        ...l,
        disabled: y,
        children: [
          /* @__PURE__ */ u.jsxs("span", { className: "gap-xxs invisible flex items-center", children: [
            Ze(r, {
              className: A(
                Wa({ size: t, iconOnly: h, text: e === "text" })
              )
            }),
            c,
            Ze(o, {
              className: A(
                Wa({ size: t, iconOnly: h, text: e === "text" })
              )
            })
          ] }),
          /* @__PURE__ */ u.jsx("span", { className: "inset-0 absolute flex items-center justify-center", children: /* @__PURE__ */ u.jsx(yc.Circular, { size: "sm", layout: "row" }) })
        ]
      }
    ) : r || o ? /* @__PURE__ */ u.jsxs(
      d,
      {
        ref: f,
        className: A(
          el({ intent: e, size: t, iconOnly: h, textOnly: p, danger: i }),
          n
        ),
        ...l,
        disabled: y,
        children: [
          Ze(r, {
            className: A(
              Wa({ size: t, iconOnly: h, text: e === "text" })
            )
          }),
          c,
          Ze(o, {
            className: A(
              Wa({ size: t, iconOnly: h, text: e === "text" })
            )
          })
        ]
      }
    ) : /* @__PURE__ */ u.jsx(
      d,
      {
        ref: f,
        className: A(
          el({ intent: e, size: t, textOnly: p, danger: i }),
          n
        ),
        children: c,
        ...l,
        disabled: y
      }
    );
  }
);
Le.displayName = "Button";
function zM(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const tl = {}, ss = {};
function Er(e, t) {
  try {
    const r = (tl[e] || (tl[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in ss ? ss[r] : Dh(r, r.split(":"));
  } catch {
    if (e in ss) return ss[e];
    const n = e == null ? void 0 : e.match(BM);
    return n ? Dh(e, n.slice(1)) : NaN;
  }
}
const BM = /([+-]\d\d):?(\d\d)?/;
function Dh(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return ss[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class un extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Er(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), q0(this), Ul(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new un(...n, t) : new un(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new un(+this, t);
  }
  getTimezoneOffset() {
    const t = -Er(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Ul(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new un(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ah = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ah.test(e)) return;
  const t = e.replace(Ah, "$1UTC");
  un.prototype[t] && (e.startsWith("get") ? un.prototype[e] = function() {
    return this.internal[t]();
  } : (un.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), HM(this), +this;
  }, un.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Ul(this), +this;
  }));
});
function Ul(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Er(e.timeZone, e) * 60));
}
function HM(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), q0(e);
}
function q0(e) {
  const t = Er(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, d = Math.round(-(Er(e.timeZone, e) * 60)) % 60;
  (d || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + d), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + d + f));
  const h = Er(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), v = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, x = p !== n, C = v - c;
  if (x && C) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C);
    const b = Er(e.timeZone, e), g = b > 0 ? Math.floor(b) : Math.ceil(b), S = p - g;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class dt extends un {
  //#region static
  static tz(t, ...n) {
    return n.length ? new dt(...n, t) : new dt(Date.now(), t);
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
    return `${t} GMT${n}${r}${o} (${zM(this.timeZone, this)})`;
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
    return new dt(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new dt(+new Date(t), this.timeZone);
  }
  //#endregion
}
const X0 = 6048e5, YM = 864e5, Oh = Symbol.for("constructDateFrom");
function Ue(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Oh in e ? e[Oh](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ne(e, t) {
  return Ue(t || e, e);
}
function Z0(e, t, n) {
  const r = Ne(e, n == null ? void 0 : n.in);
  return isNaN(t) ? Ue(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Q0(e, t, n) {
  const r = Ne(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return Ue(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = Ue(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let GM = {};
function ca() {
  return GM;
}
function Co(e, t) {
  var i, c, l, f;
  const n = ca(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Ne(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function $s(e, t) {
  return Co(e, { ...t, weekStartsOn: 1 });
}
function J0(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = Ue(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = $s(o), a = Ue(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = $s(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Rh(e) {
  const t = Ne(e), n = new Date(
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
function $o(e, ...t) {
  const n = Ue.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Ws(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ey(e, t, n) {
  const [r, o] = $o(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = Ws(r), a = Ws(o), i = +s - Rh(s), c = +a - Rh(a);
  return Math.round((i - c) / YM);
}
function UM(e, t) {
  const n = J0(e, t), r = Ue(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $s(r);
}
function KM(e, t, n) {
  return Z0(e, t * 7, n);
}
function qM(e, t, n) {
  return Q0(e, t * 12, n);
}
function XM(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ue.bind(null, o));
    const s = Ne(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), Ue(r, n || NaN);
}
function ZM(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = Ue.bind(null, o));
    const s = Ne(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), Ue(r, n || NaN);
}
function QM(e, t, n) {
  const [r, o] = $o(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Ws(r) == +Ws(o);
}
function ty(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function JM(e) {
  return !(!ty(e) && typeof e != "number" || isNaN(+Ne(e)));
}
function eN(e, t, n) {
  const [r, o] = $o(
    n == null ? void 0 : n.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function tN(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function nN(e, t) {
  const [n, r] = $o(e, t.start, t.end);
  return { start: n, end: r };
}
function rN(e, t) {
  const { start: n, end: r } = nN(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(Ue(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function oN(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function sN(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function ny(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ry(e, t) {
  var i, c, l, f;
  const n = ca(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = Ne(e, t == null ? void 0 : t.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function aN(e, t) {
  return ry(e, { ...t, weekStartsOn: 1 });
}
const iN = {
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
}, cN = (e, t, n) => {
  let r;
  const o = iN[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function vo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const lN = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, dN = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, uN = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, fN = {
  date: vo({
    formats: lN,
    defaultWidth: "full"
  }),
  time: vo({
    formats: dN,
    defaultWidth: "full"
  }),
  dateTime: vo({
    formats: uN,
    defaultWidth: "full"
  })
}, hN = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, pN = (e, t, n, r) => hN[e];
function cn(e) {
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
const mN = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vN = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gN = {
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
}, yN = {
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
}, bN = {
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
}, xN = {
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
}, wN = (e, t) => {
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
}, CN = {
  ordinalNumber: wN,
  era: cn({
    values: mN,
    defaultWidth: "wide"
  }),
  quarter: cn({
    values: vN,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: cn({
    values: gN,
    defaultWidth: "wide"
  }),
  day: cn({
    values: yN,
    defaultWidth: "wide"
  }),
  dayPeriod: cn({
    values: bN,
    defaultWidth: "wide",
    formattingValues: xN,
    defaultFormattingWidth: "wide"
  })
};
function ln(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? _N(i, (d) => d.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      SN(i, (d) => d.test(a))
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
function SN(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function _N(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function oy(e) {
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
const kN = /^(\d+)(th|st|nd|rd)?/i, EN = /\d+/i, PN = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, MN = {
  any: [/^b/i, /^(a|c)/i]
}, NN = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, DN = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, AN = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ON = {
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
}, RN = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, IN = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, TN = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jN = {
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
}, $N = {
  ordinalNumber: oy({
    matchPattern: kN,
    parsePattern: EN,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ln({
    matchPatterns: PN,
    defaultMatchWidth: "wide",
    parsePatterns: MN,
    defaultParseWidth: "any"
  }),
  quarter: ln({
    matchPatterns: NN,
    defaultMatchWidth: "wide",
    parsePatterns: DN,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ln({
    matchPatterns: AN,
    defaultMatchWidth: "wide",
    parsePatterns: ON,
    defaultParseWidth: "any"
  }),
  day: ln({
    matchPatterns: RN,
    defaultMatchWidth: "wide",
    parsePatterns: IN,
    defaultParseWidth: "any"
  }),
  dayPeriod: ln({
    matchPatterns: TN,
    defaultMatchWidth: "any",
    parsePatterns: jN,
    defaultParseWidth: "any"
  })
}, bc = {
  code: "en-US",
  formatDistance: cN,
  formatLong: fN,
  formatRelative: pN,
  localize: CN,
  match: $N,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function WN(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in);
  return ey(n, ny(n)) + 1;
}
function sy(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = +$s(n) - +UM(n);
  return Math.round(r / X0) + 1;
}
function ay(e, t) {
  var f, d, h, p;
  const n = Ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = ca(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = Ue((t == null ? void 0 : t.in) || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = Co(a, t), c = Ue((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const l = Co(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function LN(e, t) {
  var i, c, l, f;
  const n = ca(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = ay(e, t), s = Ue((t == null ? void 0 : t.in) || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), Co(s, t);
}
function iy(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = +Co(n, t) - +LN(n, t);
  return Math.round(r / X0) + 1;
}
function Pe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Hn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Pe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Pe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Pe(e.getDate(), t.length);
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
    return Pe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Pe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Pe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Pe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Pe(o, t.length);
  }
}, Kr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ih = {
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
    return Hn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ay(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return Pe(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : Pe(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = J0(e);
    return Pe(n, t.length);
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
    return Pe(n, t.length);
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
        return Pe(r, 2);
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
        return Pe(r, 2);
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
        return Hn.M(e, t);
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
        return Pe(r + 1, 2);
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
    const o = iy(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Pe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = sy(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Pe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Hn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = WN(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Pe(r, t.length);
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
        return Pe(s, 2);
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
        return Pe(s, t.length);
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
        return Pe(o, t.length);
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
    switch (r === 12 ? o = Kr.noon : r === 0 ? o = Kr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Kr.evening : r >= 12 ? o = Kr.afternoon : r >= 4 ? o = Kr.morning : o = Kr.night, t) {
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
    return Hn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Hn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Pe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Pe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Hn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Hn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Hn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return jh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return gr(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return gr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return jh(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return gr(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return gr(r, ":");
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
        return "GMT" + Th(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + gr(r, ":");
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
        return "GMT" + Th(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + gr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Pe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Pe(+e, t.length);
  }
};
function Th(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + Pe(s, 2);
}
function jh(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Pe(Math.abs(e) / 60, 2) : gr(e, t);
}
function gr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Pe(Math.trunc(r / 60), 2), s = Pe(r % 60, 2);
  return n + o + t + s;
}
const $h = (e, t) => {
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
}, cy = (e, t) => {
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
}, FN = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return $h(e, t);
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
  return s.replace("{{date}}", $h(r, t)).replace("{{time}}", cy(o, t));
}, VN = {
  p: cy,
  P: FN
}, zN = /^D+$/, BN = /^Y+$/, HN = ["D", "DD", "YY", "YYYY"];
function YN(e) {
  return zN.test(e);
}
function GN(e) {
  return BN.test(e);
}
function UN(e, t, n) {
  const r = KN(e, t, n);
  if (console.warn(r), HN.includes(e)) throw new RangeError(r);
}
function KN(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const qN = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, XN = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ZN = /^'([^]*?)'?$/, QN = /''/g, JN = /[a-zA-Z]/;
function e4(e, t, n) {
  var f, d, h, p, y, v, x, C;
  const r = ca(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? bc, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, a = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((C = (x = r.locale) == null ? void 0 : x.options) == null ? void 0 : C.weekStartsOn) ?? 0, i = Ne(e, n == null ? void 0 : n.in);
  if (!JM(i))
    throw new RangeError("Invalid time value");
  let c = t.match(XN).map((b) => {
    const g = b[0];
    if (g === "p" || g === "P") {
      const S = VN[g];
      return S(b, o.formatLong);
    }
    return b;
  }).join("").match(qN).map((b) => {
    if (b === "''")
      return { isToken: !1, value: "'" };
    const g = b[0];
    if (g === "'")
      return { isToken: !1, value: t4(b) };
    if (Ih[g])
      return { isToken: !0, value: b };
    if (g.match(JN))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
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
    const g = b.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && GN(g) || !(n != null && n.useAdditionalDayOfYearTokens) && YN(g)) && UN(g, t, String(e));
    const S = Ih[g[0]];
    return S(i, g, o.localize, l);
  }).join("");
}
function t4(e) {
  const t = e.match(ZN);
  return t ? t[1].replace(QN, "'") : e;
}
function n4(e, t) {
  const n = Ne(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), s = Ue(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function r4(e, t) {
  return Ne(e, t == null ? void 0 : t.in).getMonth();
}
function o4(e, t) {
  return Ne(e, t == null ? void 0 : t.in).getFullYear();
}
function s4(e, t) {
  return +Ne(e) > +Ne(t);
}
function a4(e, t) {
  return +Ne(e) < +Ne(t);
}
function i4(e, t, n) {
  const [r, o] = $o(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function c4(e, t, n) {
  const [r, o] = $o(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function l4(e, t, n) {
  const r = Ne(e, n == null ? void 0 : n.in), o = r.getFullYear(), s = r.getDate(), a = Ue(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = n4(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function d4(e, t, n) {
  const r = Ne(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? Ue(e, NaN) : (r.setFullYear(t), r);
}
const Wh = 5, u4 = 4;
function f4(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Wh * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Wh : u4;
}
function ly(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function h4(e, t) {
  const n = ly(e, t), r = f4(e, t);
  return t.addDays(n, r * 7 - 1);
}
class Nt {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? dt.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, s) => {
      var a;
      return (a = this.overrides) != null && a.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new dt(r, o, s, this.options.timeZone) : new Date(r, o, s);
    }, this.addDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addDays ? this.overrides.addDays(r, o) : Z0(r, o);
    }, this.addMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addMonths ? this.overrides.addMonths(r, o) : Q0(r, o);
    }, this.addWeeks = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addWeeks ? this.overrides.addWeeks(r, o) : KM(r, o);
    }, this.addYears = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.addYears ? this.overrides.addYears(r, o) : qM(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ey(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : eN(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : rN(r);
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : h4(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : aN(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : tN(r);
    }, this.endOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.endOfWeek ? this.overrides.endOfWeek(r, o) : ry(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : sN(r);
    }, this.format = (r, o, s) => {
      var i;
      const a = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : e4(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : sy(r);
    }, this.getMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getMonth ? this.overrides.getMonth(r, this.options) : r4(r, this.options);
    }, this.getYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getYear ? this.overrides.getYear(r, this.options) : o4(r, this.options);
    }, this.getWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.getWeek ? this.overrides.getWeek(r, this.options) : iy(r, this.options);
    }, this.isAfter = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isAfter ? this.overrides.isAfter(r, o) : s4(r, o);
    }, this.isBefore = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isBefore ? this.overrides.isBefore(r, o) : a4(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : ty(r);
    }, this.isSameDay = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameDay ? this.overrides.isSameDay(r, o) : QM(r, o);
    }, this.isSameMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameMonth ? this.overrides.isSameMonth(r, o) : i4(r, o);
    }, this.isSameYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.isSameYear ? this.overrides.isSameYear(r, o) : c4(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : XM(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : ZM(r);
    }, this.setMonth = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setMonth ? this.overrides.setMonth(r, o) : l4(r, o);
    }, this.setYear = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.setYear ? this.overrides.setYear(r, o) : d4(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : ly(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Ws(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : $s(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : oN(r);
    }, this.startOfWeek = (r, o) => {
      var s;
      return (s = this.overrides) != null && s.startOfWeek ? this.overrides.startOfWeek(r, this.options) : Co(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : ny(r);
    }, this.options = { locale: bc, ...t }, this.overrides = n;
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
    return t && Nt.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n == null ? void 0 : n.code;
    if (s && Nt.yearFirstLocales.has(s))
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
Nt.yearFirstLocales = /* @__PURE__ */ new Set([
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
const xn = new Nt();
class dy {
  constructor(t, n, r = xn) {
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
class p4 {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class m4 {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function v4(e) {
  return E.createElement("button", { ...e });
}
function g4(e) {
  return E.createElement("span", { ...e });
}
function y4(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    E.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && E.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && E.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && E.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && E.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function b4(e) {
  const { day: t, modifiers: n, ...r } = e;
  return E.createElement("td", { ...r });
}
function x4(e) {
  const { day: t, modifiers: n, ...r } = e, o = E.useRef(null);
  return E.useEffect(() => {
    var s;
    n.focused && ((s = o.current) == null || s.focus());
  }, [n.focused]), E.createElement("button", { ref: o, ...r });
}
var oe;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(oe || (oe = {}));
var Ie;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Ie || (Ie = {}));
var Ut;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ut || (Ut = {}));
var _t;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(_t || (_t = {}));
function w4(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[oe.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === s.value);
  return E.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[oe.DropdownRoot] },
    E.createElement(r.Select, { className: a, ...s }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: f }) => E.createElement(r.Option, { key: c, value: c, disabled: f }, l))),
    E.createElement(
      "span",
      { className: o[oe.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      E.createElement(r.Chevron, { orientation: "down", size: 18, className: o[oe.Chevron] })
    )
  );
}
function C4(e) {
  return E.createElement("div", { ...e });
}
function S4(e) {
  return E.createElement("div", { ...e });
}
function _4(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return E.createElement("div", { ...r }, e.children);
}
function k4(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return E.createElement("div", { ...r });
}
function E4(e) {
  return E.createElement("table", { ...e });
}
function P4(e) {
  return E.createElement("div", { ...e });
}
const uy = Ks(void 0);
function la() {
  const e = As(uy);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function M4(e) {
  const { components: t } = la();
  return E.createElement(t.Dropdown, { ...e });
}
function N4(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: l } } = la(), f = be((h) => {
    o && (n == null || n(h));
  }, [o, n]), d = be((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return E.createElement(
    "nav",
    { ...s },
    E.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[oe.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: d },
      E.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[oe.Chevron], orientation: "left" })
    ),
    E.createElement(
      a.NextMonthButton,
      { type: "button", className: i[oe.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      E.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[oe.Chevron] })
    )
  );
}
function D4(e) {
  const { components: t } = la();
  return E.createElement(t.Button, { ...e });
}
function A4(e) {
  return E.createElement("option", { ...e });
}
function O4(e) {
  const { components: t } = la();
  return E.createElement(t.Button, { ...e });
}
function R4(e) {
  const { rootRef: t, ...n } = e;
  return E.createElement("div", { ...n, ref: t });
}
function I4(e) {
  return E.createElement("select", { ...e });
}
function T4(e) {
  const { week: t, ...n } = e;
  return E.createElement("tr", { ...n });
}
function j4(e) {
  return E.createElement("th", { ...e });
}
function $4(e) {
  return E.createElement(
    "thead",
    { "aria-hidden": !0 },
    E.createElement("tr", { ...e })
  );
}
function W4(e) {
  const { week: t, ...n } = e;
  return E.createElement("th", { ...n });
}
function L4(e) {
  return E.createElement("th", { ...e });
}
function F4(e) {
  return E.createElement("tbody", { ...e });
}
function V4(e) {
  const { components: t } = la();
  return E.createElement(t.Dropdown, { ...e });
}
const z4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: v4,
  CaptionLabel: g4,
  Chevron: y4,
  Day: b4,
  DayButton: x4,
  Dropdown: w4,
  DropdownNav: C4,
  Footer: S4,
  Month: _4,
  MonthCaption: k4,
  MonthGrid: E4,
  Months: P4,
  MonthsDropdown: M4,
  Nav: N4,
  NextMonthButton: D4,
  Option: A4,
  PreviousMonthButton: O4,
  Root: R4,
  Select: I4,
  Week: T4,
  WeekNumber: W4,
  WeekNumberHeader: L4,
  Weekday: j4,
  Weekdays: $4,
  Weeks: F4,
  YearsDropdown: V4
}, Symbol.toStringTag, { value: "Module" }));
function Pn(e, t, n = !1, r = xn) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function fy(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Du(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function hy(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function py(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function my(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function vy(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Mn(e, t, n = xn) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (vy(i, n))
      return i.includes(e);
    if (Du(i))
      return Pn(i, e, !1, n);
    if (my(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (fy(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, d = l < 0;
      return a(i.before, i.after) ? d && f : f || d;
    }
    return hy(i) ? s(e, i.after) > 0 : py(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function B4(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f } = t, { isSameDay: d, isSameMonth: h, startOfMonth: p, isBefore: y, endOfMonth: v, isAfter: x } = o, C = n && p(n), b = r && v(r), g = {
    [Ie.focused]: [],
    [Ie.outside]: [],
    [Ie.disabled]: [],
    [Ie.hidden]: [],
    [Ie.today]: []
  }, S = {};
  for (const w of e) {
    const { date: P, displayMonth: _ } = w, k = !!(_ && !h(P, _)), D = !!(C && y(P, C)), O = !!(b && x(P, b)), T = !!(s && Mn(P, s, o)), W = !!(a && Mn(P, a, o)) || D || O || // Broadcast calendar will show outside days as default
    !l && !c && k || l && c === !1 && k, F = d(P, f ?? o.today());
    k && g.outside.push(w), T && g.disabled.push(w), W && g.hidden.push(w), F && g.today.push(w), i && Object.keys(i).forEach((L) => {
      const H = i == null ? void 0 : i[L];
      H && Mn(P, H, o) && (S[L] ? S[L].push(w) : S[L] = [w]);
    });
  }
  return (w) => {
    const P = {
      [Ie.focused]: !1,
      [Ie.disabled]: !1,
      [Ie.hidden]: !1,
      [Ie.outside]: !1,
      [Ie.today]: !1
    }, _ = {};
    for (const k in g) {
      const D = g[k];
      P[k] = D.some((O) => O === w);
    }
    for (const k in S)
      _[k] = S[k].some((D) => D === w);
    return {
      ...P,
      // custom modifiers should override all the previous ones
      ..._
    };
  };
}
function H4(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[Ie[s]] ? o.push(t[Ie[s]]) : t[Ut[s]] && o.push(t[Ut[s]]), o), [t[oe.Day]]);
}
function Y4(e) {
  return {
    ...z4,
    ...e
  };
}
function G4(e) {
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
function gy() {
  const e = {};
  for (const t in oe)
    e[oe[t]] = `rdp-${oe[t]}`;
  for (const t in Ie)
    e[Ie[t]] = `rdp-${Ie[t]}`;
  for (const t in Ut)
    e[Ut[t]] = `rdp-${Ut[t]}`;
  for (const t in _t)
    e[_t[t]] = `rdp-${_t[t]}`;
  return e;
}
function yy(e, t, n) {
  return (n ?? new Nt(t)).formatMonthYear(e);
}
const U4 = yy;
function K4(e, t, n) {
  return (n ?? new Nt(t)).format(e, "d");
}
function q4(e, t = xn) {
  return t.format(e, "LLLL");
}
function X4(e, t, n) {
  return (n ?? new Nt(t)).format(e, "cccccc");
}
function Z4(e, t = xn) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Q4() {
  return "";
}
function by(e, t = xn) {
  return t.format(e, "yyyy");
}
const J4 = by, e5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: yy,
  formatDay: K4,
  formatMonthCaption: U4,
  formatMonthDropdown: q4,
  formatWeekNumber: Z4,
  formatWeekNumberHeader: Q4,
  formatWeekdayName: X4,
  formatYearCaption: J4,
  formatYearDropdown: by
}, Symbol.toStringTag, { value: "Module" }));
function t5(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...e5,
    ...e
  };
}
function n5(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), y = l(h), v = t && h < s(t) || n && h > s(n) || !1;
    return { value: y, label: p, disabled: v };
  });
}
function r5(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[oe.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function o5(e, t, n) {
  const r = e.today(), o = t ? e.startOfISOWeek(r) : e.startOfWeek(r), s = [];
  for (let a = 0; a < 7; a++) {
    const i = e.addDays(o, a);
    s.push(i);
  }
  return s;
}
function s5(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, addYears: i, getYear: c, isBefore: l, isSameYear: f } = r, d = s(e), h = a(t), p = [];
  let y = d;
  for (; l(y, h) || f(y, h); )
    p.push(y), y = i(y, 1);
  return o && p.reverse(), p.map((v) => {
    const x = n.formatYearDropdown(v, r);
    return {
      value: c(v),
      label: x,
      disabled: !1
    };
  });
}
function xy(e, t, n, r) {
  let o = (r ?? new Nt(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const a5 = xy;
function wy(e, t, n) {
  return (n ?? new Nt(t)).formatMonthYear(e);
}
const i5 = wy;
function c5(e, t, n, r) {
  let o = (r ?? new Nt(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function l5(e) {
  return "Choose the Month";
}
function d5() {
  return "";
}
function u5(e) {
  return "Go to the Next Month";
}
function f5(e) {
  return "Go to the Previous Month";
}
function h5(e, t, n) {
  return (n ?? new Nt(t)).format(e, "cccc");
}
function p5(e, t) {
  return `Week ${e}`;
}
function m5(e) {
  return "Week Number";
}
function v5(e) {
  return "Choose the Year";
}
const g5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: i5,
  labelDay: a5,
  labelDayButton: xy,
  labelGrid: wy,
  labelGridcell: c5,
  labelMonthDropdown: l5,
  labelNav: d5,
  labelNext: u5,
  labelPrevious: f5,
  labelWeekNumber: p5,
  labelWeekNumberHeader: m5,
  labelWeekday: h5,
  labelYearDropdown: v5
}, Symbol.toStringTag, { value: "Module" })), da = (e) => e instanceof HTMLElement ? e : null, nl = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], y5 = (e) => da(e.querySelector("[data-animated-month]")), rl = (e) => da(e.querySelector("[data-animated-caption]")), ol = (e) => da(e.querySelector("[data-animated-weeks]")), b5 = (e) => da(e.querySelector("[data-animated-nav]")), x5 = (e) => da(e.querySelector("[data-animated-weekdays]"));
function w5(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = rt(null), i = rt(r), c = rt(!1);
  Td(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), d = s.isAfter(r[0].date, l[0].date), h = d ? n[_t.caption_after_enter] : n[_t.caption_before_enter], p = d ? n[_t.weeks_after_enter] : n[_t.weeks_before_enter], y = a.current, v = e.current.cloneNode(!0);
    if (v instanceof HTMLElement ? (nl(v).forEach((g) => {
      if (!(g instanceof HTMLElement))
        return;
      const S = y5(g);
      S && g.contains(S) && g.removeChild(S);
      const w = rl(g);
      w && w.classList.remove(h);
      const P = ol(g);
      P && P.classList.remove(p);
    }), a.current = v) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const x = y instanceof HTMLElement ? nl(y) : [], C = nl(e.current);
    if (C != null && C.every((b) => b instanceof HTMLElement) && x && x.every((b) => b instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const b = b5(e.current);
      b && (b.style.zIndex = "1"), C.forEach((g, S) => {
        const w = x[S];
        if (!w)
          return;
        g.style.position = "relative", g.style.overflow = "hidden";
        const P = rl(g);
        P && P.classList.add(h);
        const _ = ol(g);
        _ && _.classList.add(p);
        const k = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), b && (b.style.zIndex = ""), P && P.classList.remove(h), _ && _.classList.remove(p), g.style.position = "", g.style.overflow = "", g.contains(w) && g.removeChild(w);
        };
        w.style.pointerEvents = "none", w.style.position = "absolute", w.style.overflow = "hidden", w.setAttribute("aria-hidden", "true");
        const D = x5(w);
        D && (D.style.opacity = "0");
        const O = rl(w);
        O && (O.classList.add(d ? n[_t.caption_before_exit] : n[_t.caption_after_exit]), O.addEventListener("animationend", k));
        const T = ol(w);
        T && T.classList.add(d ? n[_t.weeks_before_exit] : n[_t.weeks_after_exit]), g.insertBefore(w, g.firstChild);
      });
    }
  });
}
function C5(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: d, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: y, endOfWeek: v, isAfter: x, startOfBroadcastWeek: C, startOfISOWeek: b, startOfWeek: g } = r, S = c ? C(o, r) : a ? b(o) : g(o), w = c ? h(s) : a ? p(y(s)) : v(y(s)), P = f(w, S), _ = d(s, o) + 1, k = [];
  for (let T = 0; T <= P; T++) {
    const W = l(S, T);
    if (t && x(W, t))
      break;
    k.push(W);
  }
  const O = (c ? 35 : 42) * _;
  if (i && k.length < O) {
    const T = O - k.length;
    for (let W = 0; W < T; W++) {
      const F = l(k[k.length - 1], 1);
      k.push(F);
    }
  }
  return k;
}
function S5(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function _5(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function Lh(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: d } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), d(c);
}
function k5(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: d, startOfISOWeek: h, startOfWeek: p } = r, y = e.reduce((v, x) => {
    const C = n.broadcastCalendar ? d(x, r) : n.ISOWeek ? h(x) : p(x), b = n.broadcastCalendar ? s(x) : n.ISOWeek ? a(i(x)) : c(i(x)), g = t.filter((_) => _ >= C && _ <= b), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && g.length < S) {
      const _ = t.filter((k) => {
        const D = S - g.length;
        return k > b && k <= o(b, D);
      });
      g.push(..._);
    }
    const w = g.reduce((_, k) => {
      const D = n.ISOWeek ? l(k) : f(k), O = _.find((W) => W.weekNumber === D), T = new dy(k, x, r);
      return O ? O.days.push(T) : _.push(new m4(D, [T])), _;
    }, []), P = new p4(x, w);
    return v.push(P), v;
  }, []);
  return n.reverseMonths ? y.reverse() : y;
}
function E5(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: d } = t, { fromYear: h, toYear: p, fromMonth: y, toMonth: v } = e;
  !n && y && (n = y), !n && h && (n = t.newDate(h, 0, 1)), !r && v && (r = v), !r && p && (r = f(p, 11, 31));
  const x = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && x && (n = o(c(e.today ?? d(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && x && (r = l(e.today ?? d())), [
    n && s(n),
    r && s(r)
  ];
}
function P5(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s : 1, f = a(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < s))
    return i(f, l);
}
function M5(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -l);
  if (!(c(f, t) <= 0))
    return i(f, -l);
}
function N5(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function xc(e, t) {
  const [n, r] = Xe(e);
  return [t === void 0 ? n : t, r];
}
function D5(e, t) {
  const [n, r] = E5(e, t), { startOfMonth: o, endOfMonth: s } = t, a = Lh(e, n, r, t), [i, c] = xc(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  fn(() => {
    const P = Lh(e, n, r, t);
    c(P);
  }, [e.timeZone]);
  const l = _5(i, r, e, t), f = C5(l, e.endMonth ? s(e.endMonth) : void 0, e, t), d = k5(l, f, e, t), h = N5(d), p = S5(d), y = M5(i, n, e, t), v = P5(i, r, e, t), { disableNavigation: x, onMonthChange: C } = e, b = (P) => h.some((_) => _.days.some((k) => k.isEqualTo(P))), g = (P) => {
    if (x)
      return;
    let _ = o(P);
    n && _ < o(n) && (_ = o(n)), r && _ > o(r) && (_ = o(r)), c(_), C == null || C(_);
  };
  return {
    months: d,
    weeks: h,
    days: p,
    navStart: n,
    navEnd: r,
    previousMonth: y,
    nextMonth: v,
    goToMonth: g,
    goToDay: (P) => {
      b(P) || g(P.date);
    }
  };
}
var rn;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(rn || (rn = {}));
function Fh(e) {
  return !e[Ie.disabled] && !e[Ie.hidden] && !e[Ie.outside];
}
function A5(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    Fh(i) && (i[Ie.focused] && s < rn.FocusedModifier ? (o = a, s = rn.FocusedModifier) : r != null && r.isEqualTo(a) && s < rn.LastFocused ? (o = a, s = rn.LastFocused) : n(a.date) && s < rn.Selected ? (o = a, s = rn.Selected) : i[Ie.today] && s < rn.Today && (o = a, s = rn.Today));
  }
  return o || (o = e.find((a) => Fh(t(a)))), o;
}
function O5(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: d, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: y, endOfWeek: v, max: x, min: C, startOfBroadcastWeek: b, startOfISOWeek: g, startOfWeek: S } = a;
  let P = {
    day: l,
    week: d,
    month: f,
    year: h,
    startOfWeek: (_) => c ? b(_, a) : i ? g(_) : S(_),
    endOfWeek: (_) => c ? p(_) : i ? y(_) : v(_)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? P = x([r, P]) : t === "after" && o && (P = C([o, P])), P;
}
function Cy(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = O5(e, t, n.date, r, o, s, a), l = !!(s.disabled && Mn(c, s.disabled, a)), f = !!(s.hidden && Mn(c, s.hidden, a)), d = c, h = new dy(c, d, a);
  return !l && !f ? h : Cy(e, t, h, r, o, s, a, i + 1);
}
function R5(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = Xe(), c = A5(t.days, n, r || (() => !1), a), [l, f] = Xe(s ? c : void 0);
  return {
    isFocusTarget: (v) => !!(c != null && c.isEqualTo(v)),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (v, x) => {
      if (!l)
        return;
      const C = Cy(v, x, l, t.navStart, t.navEnd, e, o);
      C && (t.goToDay(C), f(C));
    }
  };
}
function I5(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = xc(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((y) => c(y, p))) ?? !1, { min: f, max: d } = e;
  return {
    selected: i,
    select: (p, y, v) => {
      let x = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        x = i == null ? void 0 : i.filter((C) => !c(C, p));
      } else
        (i == null ? void 0 : i.length) === d ? x = [p] : x = [...x, p];
      return o || a(x), o == null || o(x, p, y, v), x;
    },
    isSelected: l
  };
}
function T5(e, t, n = 0, r = 0, o = !1, s = xn) {
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
function j5(e, t, n = xn) {
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
function Vh(e, t, n = xn) {
  return Pn(e, t.from, !1, n) || Pn(e, t.to, !1, n) || Pn(t, e.from, !1, n) || Pn(t, e.to, !1, n);
}
function $5(e, t, n = xn) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Pn(e, i, !1, n) : vy(i, n) ? i.some((c) => Pn(e, c, !1, n)) : Du(i) ? i.from && i.to ? Vh(e, { from: i.from, to: i.to }, n) : !1 : my(i) ? j5(e, i.dayOfWeek, n) : fy(i) ? n.isAfter(i.before, i.after) ? Vh(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Mn(e.from, i, n) || Mn(e.to, i, n) : hy(i) || py(i) ? Mn(e.from, i, n) || Mn(e.to, i, n) : !1))
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
function W5(e, t) {
  const { disabled: n, excludeDisabled: r, selected: o, required: s, onSelect: a } = e, [i, c] = xc(o, a ? o : void 0), l = a ? o : i;
  return {
    selected: l,
    select: (h, p, y) => {
      const { min: v, max: x } = e, C = h ? T5(h, l, v, x, s, t) : void 0;
      return r && n && (C != null && C.from) && C.to && $5({ from: C.from, to: C.to }, n, t) && (C.from = h, C.to = void 0), a || c(C), a == null || a(C, h, p, y), C;
    },
    isSelected: (h) => l && Pn(l, h, !1, t)
  };
}
function L5(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = xc(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (d, h, p) => {
      let y = d;
      return !r && i && i && c(d, i) && (y = void 0), o || a(y), o == null || o(y, d, h, p), y;
    },
    isSelected: (d) => i ? c(i, d) : !1
  };
}
function F5(e, t) {
  const n = L5(e, t), r = I5(e, t), o = W5(e, t);
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
function V5(e) {
  var fr;
  let t = e;
  t.timeZone && (t = {
    ...e
  }, t.today && (t.today = new dt(t.today, t.timeZone)), t.month && (t.month = new dt(t.month, t.timeZone)), t.defaultMonth && (t.defaultMonth = new dt(t.defaultMonth, t.timeZone)), t.startMonth && (t.startMonth = new dt(t.startMonth, t.timeZone)), t.endMonth && (t.endMonth = new dt(t.endMonth, t.timeZone)), t.mode === "single" && t.selected ? t.selected = new dt(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = (fr = t.selected) == null ? void 0 : fr.map((de) => new dt(de, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? new dt(t.selected.from, t.timeZone) : void 0,
    to: t.selected.to ? new dt(t.selected.to, t.timeZone) : void 0
  }));
  const { components: n, formatters: r, labels: o, dateLib: s, locale: a, classNames: i } = ho(() => {
    const de = { ...bc, ...t.locale };
    return {
      dateLib: new Nt({
        locale: de,
        weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
        firstWeekContainsDate: t.firstWeekContainsDate,
        useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
        timeZone: t.timeZone,
        numerals: t.numerals
      }, t.dateLib),
      components: Y4(t.components),
      formatters: t5(t.formatters),
      labels: { ...g5, ...t.labels },
      locale: de,
      classNames: { ...gy(), ...t.classNames }
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
  ]), { captionLayout: c, mode: l, navLayout: f, numberOfMonths: d = 1, onDayBlur: h, onDayClick: p, onDayFocus: y, onDayKeyDown: v, onDayMouseEnter: x, onDayMouseLeave: C, onNextClick: b, onPrevClick: g, showWeekNumber: S, styles: w } = t, { formatCaption: P, formatDay: _, formatMonthDropdown: k, formatWeekNumber: D, formatWeekNumberHeader: O, formatWeekdayName: T, formatYearDropdown: W } = r, F = D5(t, s), { days: L, months: H, navStart: V, navEnd: K, previousMonth: I, nextMonth: j, goToMonth: ne } = F, N = B4(L, t, V, K, s), { isSelected: M, select: $, selected: z } = F5(t, s) ?? {}, { blur: U, focused: G, isFocusTarget: R, moveFocus: Z, setFocused: J } = R5(t, F, N, M ?? (() => !1), s), { labelDayButton: se, labelGridcell: le, labelGrid: he, labelMonthDropdown: xe, labelNav: Ve, labelPrevious: et, labelNext: At, labelWeekday: Ot, labelWeekNumber: bt, labelWeekNumberHeader: Rt, labelYearDropdown: Ke } = o, It = ho(() => o5(s, t.ISOWeek), [s, t.ISOWeek]), st = l !== void 0 || p !== void 0, en = be(() => {
    I && (ne(I), g == null || g(I));
  }, [I, ne, g]), Bt = be(() => {
    j && (ne(j), b == null || b(j));
  }, [ne, j, b]), pe = be((de, ke) => (q) => {
    q.preventDefault(), q.stopPropagation(), J(de), $ == null || $(de.date, ke, q), p == null || p(de.date, ke, q);
  }, [$, p, J]), $n = be((de, ke) => (q) => {
    J(de), y == null || y(de.date, ke, q);
  }, [y, J]), Ht = be((de, ke) => (q) => {
    U(), h == null || h(de.date, ke, q);
  }, [U, h]), Wn = be((de, ke) => (q) => {
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
      const [_e, ce] = ie[q.key];
      Z(_e, ce);
    }
    v == null || v(de.date, ke, q);
  }, [Z, v, t.dir]), Ln = be((de, ke) => (q) => {
    x == null || x(de.date, ke, q);
  }, [x]), dr = be((de, ke) => (q) => {
    C == null || C(de.date, ke, q);
  }, [C]), Fn = be((de) => (ke) => {
    const q = Number(ke.target.value), ie = s.setMonth(s.startOfMonth(de), q);
    ne(ie);
  }, [s, ne]), Vn = be((de) => (ke) => {
    const q = Number(ke.target.value), ie = s.setYear(s.startOfMonth(de), q);
    ne(ie);
  }, [s, ne]), { className: ur, style: Tt } = ho(() => ({
    className: [i[oe.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[oe.Root], ...t.style }
  }), [i, t.className, t.style, w]), ft = G4(t), tn = rt(null);
  w5(tn, !!t.animate, {
    classNames: i,
    months: H,
    focused: G,
    dateLib: s
  });
  const zn = {
    dayPickerProps: t,
    selected: z,
    select: $,
    isSelected: M,
    months: H,
    nextMonth: j,
    previousMonth: I,
    goToMonth: ne,
    getModifiers: N,
    components: n,
    classNames: i,
    styles: w,
    labels: o,
    formatters: r
  };
  return E.createElement(
    uy.Provider,
    { value: zn },
    E.createElement(
      n.Root,
      { rootRef: t.animate ? tn : void 0, className: ur, style: Tt, dir: t.dir, id: t.id, lang: t.lang, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...ft },
      E.createElement(
        n.Months,
        { className: i[oe.Months], style: w == null ? void 0 : w[oe.Months] },
        !t.hideNavigation && !f && E.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: w == null ? void 0 : w[oe.Nav], "aria-label": Ve(), onPreviousClick: en, onNextClick: Bt, previousMonth: I, nextMonth: j }),
        H.map((de, ke) => E.createElement(
          n.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: i[oe.Month],
            style: w == null ? void 0 : w[oe.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: ke,
            displayIndex: ke,
            calendarMonth: de
          },
          f === "around" && !t.hideNavigation && ke === 0 && E.createElement(
            n.PreviousMonthButton,
            { type: "button", className: i[oe.PreviousMonthButton], tabIndex: I ? void 0 : -1, "aria-disabled": I ? void 0 : !0, "aria-label": et(I), onClick: en, "data-animated-button": t.animate ? "true" : void 0 },
            E.createElement(n.Chevron, { disabled: I ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          E.createElement(n.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: i[oe.MonthCaption], style: w == null ? void 0 : w[oe.MonthCaption], calendarMonth: de, displayIndex: ke }, c != null && c.startsWith("dropdown") ? E.createElement(
            n.DropdownNav,
            { className: i[oe.Dropdowns], style: w == null ? void 0 : w[oe.Dropdowns] },
            (() => {
              const q = c === "dropdown" || c === "dropdown-months" ? E.createElement(n.MonthsDropdown, { key: "month", className: i[oe.MonthsDropdown], "aria-label": xe(), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Fn(de.date), options: n5(de.date, V, K, r, s), style: w == null ? void 0 : w[oe.Dropdown], value: s.getMonth(de.date) }) : E.createElement("span", { key: "month" }, k(de.date, s)), ie = c === "dropdown" || c === "dropdown-years" ? E.createElement(n.YearsDropdown, { key: "year", className: i[oe.YearsDropdown], "aria-label": Ke(s.options), classNames: i, components: n, disabled: !!t.disableNavigation, onChange: Vn(de.date), options: s5(V, K, r, s, !!t.reverseYears), style: w == null ? void 0 : w[oe.Dropdown], value: s.getYear(de.date) }) : E.createElement("span", { key: "year" }, W(de.date, s));
              return s.getMonthYearOrder() === "year-first" ? [ie, q] : [q, ie];
            })(),
            E.createElement("span", { role: "status", "aria-live": "polite", style: {
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
            } }, P(de.date, s.options, s))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            E.createElement(n.CaptionLabel, { className: i[oe.CaptionLabel], role: "status", "aria-live": "polite" }, P(de.date, s.options, s))
          )),
          f === "around" && !t.hideNavigation && ke === d - 1 && E.createElement(
            n.NextMonthButton,
            { type: "button", className: i[oe.NextMonthButton], tabIndex: j ? void 0 : -1, "aria-disabled": j ? void 0 : !0, "aria-label": At(j), onClick: Bt, "data-animated-button": t.animate ? "true" : void 0 },
            E.createElement(n.Chevron, { disabled: j ? void 0 : !0, className: i[oe.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          ke === d - 1 && f === "after" && !t.hideNavigation && E.createElement(n.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: i[oe.Nav], style: w == null ? void 0 : w[oe.Nav], "aria-label": Ve(), onPreviousClick: en, onNextClick: Bt, previousMonth: I, nextMonth: j }),
          E.createElement(
            n.MonthGrid,
            { role: "grid", "aria-multiselectable": l === "multiple" || l === "range", "aria-label": he(de.date, s.options, s) || void 0, className: i[oe.MonthGrid], style: w == null ? void 0 : w[oe.MonthGrid] },
            !t.hideWeekdays && E.createElement(
              n.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: i[oe.Weekdays], style: w == null ? void 0 : w[oe.Weekdays] },
              S && E.createElement(n.WeekNumberHeader, { "aria-label": Rt(s.options), className: i[oe.WeekNumberHeader], style: w == null ? void 0 : w[oe.WeekNumberHeader], scope: "col" }, O()),
              It.map((q) => E.createElement(n.Weekday, { "aria-label": Ot(q, s.options, s), className: i[oe.Weekday], key: String(q), style: w == null ? void 0 : w[oe.Weekday], scope: "col" }, T(q, s.options, s)))
            ),
            E.createElement(n.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: i[oe.Weeks], style: w == null ? void 0 : w[oe.Weeks] }, de.weeks.map((q) => E.createElement(
              n.Week,
              { className: i[oe.Week], key: q.weekNumber, style: w == null ? void 0 : w[oe.Week], week: q },
              S && // biome-ignore lint/a11y/useSemanticElements: react component
              E.createElement(n.WeekNumber, { week: q, style: w == null ? void 0 : w[oe.WeekNumber], "aria-label": bt(q.weekNumber, {
                locale: a
              }), className: i[oe.WeekNumber], scope: "row", role: "rowheader" }, D(q.weekNumber, s)),
              q.days.map((ie) => {
                const { date: _e } = ie, ce = N(ie);
                if (ce[Ie.focused] = !ce.hidden && !!(G != null && G.isEqualTo(ie)), ce[Ut.selected] = (M == null ? void 0 : M(_e)) || ce.selected, Du(z)) {
                  const { from: xt, to: Be } = z;
                  ce[Ut.range_start] = !!(xt && Be && s.isSameDay(_e, xt)), ce[Ut.range_end] = !!(xt && Be && s.isSameDay(_e, Be)), ce[Ut.range_middle] = Pn(z, _e, !0, s);
                }
                const at = r5(ce, w, t.modifiersStyles), nn = H4(ce, i, t.modifiersClassNames), Cn = !st && !ce.hidden ? le(_e, ce, s.options, s) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  E.createElement(n.Day, { key: `${s.format(_e, "yyyy-MM-dd")}_${s.format(ie.displayMonth, "yyyy-MM")}`, day: ie, modifiers: ce, className: nn.join(" "), style: at, role: "gridcell", "aria-selected": ce.selected || void 0, "aria-label": Cn, "data-day": s.format(_e, "yyyy-MM-dd"), "data-month": ie.outside ? s.format(_e, "yyyy-MM") : void 0, "data-selected": ce.selected || void 0, "data-disabled": ce.disabled || void 0, "data-hidden": ce.hidden || void 0, "data-outside": ie.outside || void 0, "data-focused": ce.focused || void 0, "data-today": ce.today || void 0 }, !ce.hidden && st ? E.createElement(n.DayButton, { className: i[oe.DayButton], style: w == null ? void 0 : w[oe.DayButton], type: "button", day: ie, modifiers: ce, disabled: ce.disabled || void 0, tabIndex: R(ie) ? 0 : -1, "aria-label": se(_e, ce, s.options, s), onClick: pe(ie, ce), onBlur: Ht(ie, ce), onFocus: $n(ie, ce), onKeyDown: Wn(ie, ce), onMouseEnter: Ln(ie, ce), onMouseLeave: dr(ie, ce) }, _(_e, s.options, s)) : !ce.hidden && _(ie.date, s.options, s))
                );
              })
            )))
          )
        ))
      ),
      t.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      E.createElement(n.Footer, { className: i[oe.Footer], style: w == null ? void 0 : w[oe.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
const z5 = {
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
}, B5 = (e, t, n) => {
  n = n || {};
  let r;
  const o = z5[e];
  return typeof o == "string" ? r = o : t === 1 ? n.addSuffix && o.oneWithSuffix ? r = o.oneWithSuffix : r = o.one : n.addSuffix && o.otherWithSuffix ? r = o.otherWithSuffix.replace("{{count}}", String(t)) : r = o.other.replace("{{count}}", String(t)), n.addSuffix ? n.comparison && n.comparison > 0 ? r + "後" : r + "前" : r;
}, H5 = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, Y5 = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, G5 = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, U5 = {
  date: vo({
    formats: H5,
    defaultWidth: "full"
  }),
  time: vo({
    formats: Y5,
    defaultWidth: "full"
  }),
  dateTime: vo({
    formats: G5,
    defaultWidth: "full"
  })
}, K5 = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, q5 = (e, t, n, r) => K5[e], X5 = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, Z5 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, Q5 = {
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
}, J5 = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, eD = {
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
}, tD = {
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
}, nD = (e, t) => {
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
}, rD = {
  ordinalNumber: nD,
  era: cn({
    values: X5,
    defaultWidth: "wide"
  }),
  quarter: cn({
    values: Z5,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: cn({
    values: Q5,
    defaultWidth: "wide"
  }),
  day: cn({
    values: J5,
    defaultWidth: "wide"
  }),
  dayPeriod: cn({
    values: eD,
    defaultWidth: "wide",
    formattingValues: tD,
    defaultFormattingWidth: "wide"
  })
}, oD = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, sD = /\d+/i, aD = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, iD = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, cD = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, lD = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, dD = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, uD = {
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
}, fD = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, hD = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, pD = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, mD = {
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
}, vD = {
  ordinalNumber: oy({
    matchPattern: oD,
    parsePattern: sD,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ln({
    matchPatterns: aD,
    defaultMatchWidth: "wide",
    parsePatterns: iD,
    defaultParseWidth: "any"
  }),
  quarter: ln({
    matchPatterns: cD,
    defaultMatchWidth: "wide",
    parsePatterns: lD,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ln({
    matchPatterns: dD,
    defaultMatchWidth: "wide",
    parsePatterns: uD,
    defaultParseWidth: "any"
  }),
  day: ln({
    matchPatterns: fD,
    defaultMatchWidth: "wide",
    parsePatterns: hD,
    defaultParseWidth: "any"
  }),
  dayPeriod: ln({
    matchPatterns: pD,
    defaultMatchWidth: "any",
    parsePatterns: mD,
    defaultParseWidth: "any"
  })
}, gD = {
  code: "ja",
  formatDistance: B5,
  formatLong: U5,
  formatRelative: q5,
  localize: rD,
  match: vD,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, yD = (e) => `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${e ? "" : "shadow-overlay"}`, La = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, Sy = E.forwardRef(
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
    const [y, v] = E.useState(
      () => La(n || null)
    ), x = e !== void 0, C = x ? La(e) : y, b = E.useMemo(
      () => La(r || null),
      [r]
    ), g = E.useMemo(
      () => La(o || null),
      [o]
    ), S = E.useMemo(() => !b || !g ? !0 : b <= g, [b, g]), w = E.useMemo(() => {
      if (g) return g;
      const _ = /* @__PURE__ */ new Date();
      return new Date(_.getFullYear() + 10, 11, 31);
    }, [g]), P = (_) => {
      const k = _ || null;
      x || v(k), t == null || t(k);
    };
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: p,
        className: A(yD(f), a),
        ...h,
        children: /* @__PURE__ */ u.jsx(
          V5,
          {
            animate: !1,
            mode: "single",
            selected: C || void 0,
            onSelect: P,
            locale: d === "ja" ? gD : bc,
            captionLayout: "dropdown",
            navLayout: "after",
            formatters: {
              formatYearDropdown: (_) => `${_.getFullYear()}${d === "ja" ? "年" : ""}`
            },
            disabled: S ? [
              ...b ? [{ before: b }] : [],
              ...g ? [{ after: g }] : [],
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
              const _ = gy(), k = "text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer";
              return {
                // Root container
                root: `${_.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,
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
Sy.displayName = "Calendar";
const zh = ae(
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
), bD = {
  lg: 16,
  md: 14,
  sm: 12,
  xs: 10
}, Kl = E.forwardRef(
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
    const f = r ? No : "a", h = bD[n === "inherit" ? "md" : n];
    return r ? /* @__PURE__ */ u.jsx(
      f,
      {
        ref: l,
        className: A(
          zh({ intent: t, size: n, disabled: o }),
          e
        ),
        ...c,
        children: i
      }
    ) : /* @__PURE__ */ u.jsxs(
      f,
      {
        ref: l,
        className: A(zh({ intent: t, size: n, disabled: o }), e),
        ...c,
        children: [
          s && /* @__PURE__ */ u.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: Ze(s, { size: h }) }),
          i,
          a && /* @__PURE__ */ u.jsx("span", { className: "flex flex-shrink-0 items-center self-center", children: Ze(a, { size: h }) })
        ]
      }
    );
  }
);
Kl.displayName = "TextLink";
const xD = ae(
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
), wD = ae("size-5 shrink-0", {
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
}), CD = ae("font-bold text-md", {
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
}), SD = ae(
  "text-body-primary font-normal leading-6 text-md"
), _D = ae("min-w-0 gap-xxxs flex flex-1 flex-col"), kD = {
  info: Za,
  success: jp,
  warning: Za,
  alert: Za,
  paid: H1
}, ED = E.forwardRef(
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
    const l = a || kD[t];
    return /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: c,
        className: A(xD({ intent: t }), e),
        ...i,
        children: /* @__PURE__ */ u.jsxs("div", { className: A(_D()), children: [
          n && /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
              /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: A(wD({ intent: t }), "top-0.5 relative"),
                  children: Ze(l, { className: "size-full" })
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: A(CD({ intent: t })), children: n })
            ] }),
            s && (s.href ? /* @__PURE__ */ u.jsx(
              Kl,
              {
                href: s.href,
                target: s.target,
                rel: s.rel,
                intent: "primary",
                size: "sm",
                children: s.label
              }
            ) : /* @__PURE__ */ u.jsx(
              Kl,
              {
                onClick: s.onClick,
                intent: "primary",
                size: "sm",
                asChild: !0,
                children: /* @__PURE__ */ u.jsx("button", { type: "button", className: "cursor-pointer", children: s.label })
              }
            ))
          ] }),
          (o || r) && /* @__PURE__ */ u.jsx("div", { className: A(SD()), children: o || r })
        ] })
      }
    );
  }
);
ED.displayName = "Callout";
const PD = ae("gap-xs flex w-fit cursor-pointer items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), MD = ae(
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
), ti = ({
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
  return /* @__PURE__ */ u.jsxs("div", { className: A(PD({ disabled: e }), a), children: [
    /* @__PURE__ */ u.jsx(
      Am,
      {
        id: c,
        className: A(MD({ disabled: e, invalid: t })),
        disabled: e,
        ...i,
        ...n && { checked: "indeterminate" },
        children: /* @__PURE__ */ u.jsx(
          Rm,
          {
            className: `text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`,
            children: n ? /* @__PURE__ */ u.jsx(P1, { style: { strokeWidth: 3 } }) : /* @__PURE__ */ u.jsx(Ap, { style: { strokeWidth: 3 } })
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
ti.displayName = "Checkbox";
const ND = ({
  children: e,
  className: t
}) => /* @__PURE__ */ u.jsx("div", { className: A("gap-xs flex flex-col", t), children: e });
ND.displayName = "CheckboxGroup";
const DD = ae(
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
), AD = E.forwardRef(
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
        className: A(DD({ selected: e, disabled: t }), n),
        onClick: i,
        ...s,
        children: r
      }
    );
  }
);
AD.displayName = "ChoiceChip";
const OD = ({
  children: e,
  className: t
}) => /* @__PURE__ */ u.jsx("div", { role: "listbox", className: A("gap-xs flex flex-wrap", t), children: e });
OD.displayName = "ChoiceChipGroup";
const RD = ae(
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
), IT = GP, Nn = E.forwardRef(
  ({
    children: e,
    content: t,
    intent: n,
    side: r = "top",
    sideOffset: o = 4,
    align: s = "center",
    alignOffset: a,
    delayDuration: i = 700,
    disableHoverableContent: c,
    open: l,
    onOpenChange: f,
    className: d,
    ...h
  }, p) => t ? /* @__PURE__ */ u.jsxs(
    UP,
    {
      delayDuration: i,
      ...l !== void 0 && { open: l },
      ...f !== void 0 && { onOpenChange: f },
      ...c !== void 0 && {
        disableHoverableContent: c
      },
      children: [
        /* @__PURE__ */ u.jsx(KP, { asChild: !0, children: e }),
        /* @__PURE__ */ u.jsx(qP, { children: /* @__PURE__ */ u.jsx(
          XP,
          {
            ref: p,
            side: r,
            sideOffset: o,
            align: s,
            ...a !== void 0 && { alignOffset: a },
            className: A(RD({ intent: n }), d),
            ...h,
            children: t
          }
        ) })
      ]
    }
  ) : /* @__PURE__ */ u.jsx(u.Fragment, { children: e })
);
Nn.displayName = "Tooltip";
const ID = ae("space-y-md w-full", {
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
}), _y = E.forwardRef(
  ({ className: e, variant: t, children: n, ...r }, o) => /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: o,
      className: A(ID({ variant: t }), e),
      ...r,
      children: n
    }
  )
);
_y.displayName = "DataSheet";
const TD = ae(
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
), ky = E.forwardRef(
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
        className: A(
          TD({ variant: t }),
          d && "flex items-center justify-between",
          e
        ),
        ...l,
        children: [
          /* @__PURE__ */ u.jsx("div", { className: A(r && "line-through opacity-60"), children: n }),
          d && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
            a && /* @__PURE__ */ u.jsx(
              Nn,
              {
                content: r ? null : (s == null ? void 0 : s.edit) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  Le,
                  {
                    "aria-label": (o == null ? void 0 : o.edit) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Rp,
                    disabled: r,
                    onClick: a,
                    className: A(
                      "text-shape-primary [&_svg]:!size-5",
                      r && "cursor-not-allowed!"
                    )
                  }
                )
              }
            ),
            i && !r && /* @__PURE__ */ u.jsx(
              Nn,
              {
                content: (s == null ? void 0 : s.remove) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  Le,
                  {
                    "aria-label": (o == null ? void 0 : o.remove) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Tp,
                    onClick: i,
                    danger: !0,
                    className: "[&_svg]:!size-5"
                  }
                )
              }
            ),
            c && r && /* @__PURE__ */ u.jsx(
              Nn,
              {
                content: (s == null ? void 0 : s.restore) ?? null,
                disableHoverableContent: !0,
                children: /* @__PURE__ */ u.jsx(
                  Le,
                  {
                    "aria-label": (o == null ? void 0 : o.restore) ?? void 0,
                    size: "icon",
                    intent: "text",
                    icon: Ip,
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
ky.displayName = "DataSheetHeader";
const Ey = E.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
    "section",
    {
      ref: r,
      className: A("divide-surface-default divide-y", e),
      ...n,
      children: t
    }
  )
);
Ey.displayName = "DataSheetSection";
const jD = ae("py-sm", {
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
}), $D = ae(
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
), WD = ae(
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
), Py = E.forwardRef(({ className: e, label: t, orientation: n, spacing: r, children: o, ...s }, a) => {
  const i = E.useId(), c = E.Children.map(o, (l) => {
    if (!E.isValidElement(l)) return l;
    const d = l.props["aria-labelledby"];
    return E.cloneElement(
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
      className: A(
        jD({ orientation: n, spacing: r }),
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ u.jsx(
          "div",
          {
            id: i,
            className: A($D({ orientation: n })),
            children: t
          }
        ),
        /* @__PURE__ */ u.jsx("div", { className: A(WD({ orientation: n })), children: c })
      ]
    }
  );
});
Py.displayName = "DataSheetKeyValue";
const LD = {
  actionsColumnParts: 10
}, My = E.createContext(
  LD
), FD = () => E.useContext(My), Ny = E.createContext({}), Dy = () => E.useContext(
  Ny
);
function VD({
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
    My.Provider,
    {
      value: c,
      children: /* @__PURE__ */ u.jsx("div", { ref: i, className: A("overflow-x-auto", e), ...a, children: /* @__PURE__ */ u.jsx("table", { className: "w-full table-fixed", children: t }) })
    }
  );
}
const Ay = E.forwardRef(VD);
Ay.displayName = "DataSheetTable";
const Oy = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("thead", { ref: r, className: A("", e), ...n, children: t }));
Oy.displayName = "DataSheetTableHeader";
const Ry = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("tbody", { ref: r, className: A("", e), ...n, children: t }));
Ry.displayName = "DataSheetTableBody";
function zD({
  className: e,
  header: t,
  item: n,
  isDeleted: r = !1,
  ariaLabels: o,
  tooltipMessages: s,
  children: a,
  ...i
}, c) {
  const l = E.useMemo(() => {
    let d = 0;
    return E.Children.forEach(a, (h) => {
      E.isValidElement(h) && typeof h.props.parts == "number" && (d += h.props.parts);
    }), d > 0 ? d : void 0;
  }, [a]), f = {
    ...n !== void 0 && { item: n },
    ...l !== void 0 && { totalParts: l },
    isDeleted: r,
    ...o && { ariaLabels: o },
    ...s && { tooltipMessages: s }
  };
  return /* @__PURE__ */ u.jsx(
    Ny.Provider,
    {
      value: f,
      children: /* @__PURE__ */ u.jsx(
        "tr",
        {
          ref: c,
          className: A(
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
const Iy = E.forwardRef(zD);
Iy.displayName = "DataSheetTableRow";
const ki = E.forwardRef(({ className: e, header: t, parts: n, children: r, style: o, ...s }, a) => {
  const i = t ? "th" : "td", { totalParts: c, isDeleted: l } = Dy(), f = n !== void 0 && c !== void 0 ? { width: `${n / c * 100}%`, ...o } : o, d = typeof r == "string" ? r.trim() : String(r || ""), h = l && !t && d !== "" && d !== "-";
  return /* @__PURE__ */ u.jsx(
    i,
    {
      ref: a,
      className: A(
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
ki.displayName = "DataSheetTableCell";
function BD({
  className: e,
  header: t,
  item: n,
  children: r,
  ...o
}, s) {
  const { onEditRow: a, onRemoveRow: i, onRestoreRow: c, actionsColumnParts: l } = FD(), {
    item: f,
    isDeleted: d,
    ariaLabels: h,
    tooltipMessages: p
  } = Dy(), y = n ?? f;
  return t ? /* @__PURE__ */ u.jsx(
    ki,
    {
      ref: s,
      header: !0,
      parts: l,
      className: e,
      ...o,
      children: r
    }
  ) : a || i || c ? /* @__PURE__ */ u.jsx(
    ki,
    {
      ref: s,
      parts: l,
      className: A("align-top", e),
      ...o,
      children: /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex", children: [
        a && y && /* @__PURE__ */ u.jsx(
          Nn,
          {
            content: d ? null : (p == null ? void 0 : p.edit) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              Le,
              {
                "aria-label": (h == null ? void 0 : h.edit) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Rp,
                disabled: d,
                onClick: () => a(y),
                className: A(
                  "text-shape-primary [&_svg]:size-5!",
                  d && "cursor-not-allowed!"
                )
              }
            )
          }
        ),
        i && y && !d && /* @__PURE__ */ u.jsx(
          Nn,
          {
            content: (p == null ? void 0 : p.remove) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              Le,
              {
                "aria-label": (h == null ? void 0 : h.remove) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Tp,
                onClick: () => i(y),
                danger: !0,
                className: "[&_svg]:!size-5"
              }
            )
          }
        ),
        c && y && d && /* @__PURE__ */ u.jsx(
          Nn,
          {
            content: (p == null ? void 0 : p.restore) ?? null,
            disableHoverableContent: !0,
            children: /* @__PURE__ */ u.jsx(
              Le,
              {
                "aria-label": (h == null ? void 0 : h.restore) ?? void 0,
                size: "icon",
                intent: "text",
                icon: Ip,
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
const Ty = E.forwardRef(
  BD
);
Ty.displayName = "DataSheetTableActionsCell";
const jy = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(Le, { ref: n, className: A("w-full", e), ...t }));
jy.displayName = "DataSheetAction";
const TT = Object.assign(_y, {
  Header: ky,
  Section: Ey,
  KeyValue: Py,
  Table: Ay,
  TableHeader: Oy,
  TableBody: Ry,
  TableRow: Iy,
  TableCell: ki,
  TableActionsCell: Ty,
  Action: jy
}), HD = (e, t) => {
  const [n, r] = Xe(e);
  return fn(() => {
    const o = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(o);
    };
  }, [e, t]), n;
}, wc = () => {
  const e = rt(!1), t = be(() => {
    e.current = !0;
  }, []), n = be(() => {
    e.current = !1;
  }, []), r = be(
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
}, $y = ae(
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
), YD = ae(
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
), Cs = ae(
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
), Cc = E.forwardRef(
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
    const p = !!t, y = !!n, v = !!r, x = d.type === "number", { compositionHandlers: C, guardKeyHandler: b } = wc(), g = (w) => {
      C.onCompositionStart(w), l == null || l(w);
    }, S = (w) => {
      C.onCompositionEnd(w), f == null || f(w);
    };
    return /* @__PURE__ */ u.jsxs("div", { className: A($y({ invalid: e }), a), children: [
      t && /* @__PURE__ */ u.jsx(
        "div",
        {
          className: Cs({ position: "prefix", interactive: !1 }),
          children: Ze(t, { size: s })
        }
      ),
      /* @__PURE__ */ u.jsx(
        "input",
        {
          ref: h,
          className: YD({ hasPrefix: p, hasTrailing: y, isNumeric: x }),
          ...d,
          onKeyDown: b(i),
          onKeyUp: b(c),
          onCompositionStart: g,
          onCompositionEnd: S
        }
      ),
      n && /* @__PURE__ */ u.jsx(u.Fragment, { children: v ? /* @__PURE__ */ u.jsx(
        "button",
        {
          type: "button",
          className: Cs({
            position: "trailing",
            interactive: !0
          }),
          disabled: d.disabled,
          onClick: r,
          children: Ze(n, { size: o })
        }
      ) : /* @__PURE__ */ u.jsx(
        "div",
        {
          className: Cs({
            position: "trailing",
            interactive: !1
          }),
          children: Ze(n, { size: o })
        }
      ) })
    ] });
  }
);
Cc.displayName = "Input";
const GD = "bg-surface-primary rounded-lg z-dropdown w-auto  max-w-none shadow-lg", Fa = (e) => {
  if (!e) return null;
  if (e instanceof Date)
    return isNaN(e.getTime()) ? null : e;
  const t = new Date(e);
  return isNaN(t.getTime()) ? null : t;
}, UD = (e) => e.toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
}), KD = E.forwardRef(
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
    formatDate: d = UD,
    className: h,
    contentClassName: p,
    defaultOpen: y = !1,
    open: v,
    onOpenChange: x,
    side: C = "bottom",
    locale: b = "ja",
    ...g
  }, S) => {
    const [w, P] = E.useState(
      () => Fa(n || null)
    ), [_, k] = E.useState(y), D = e !== void 0, O = D ? Fa(e) : w, T = v !== void 0 ? v : _, W = E.useMemo(
      () => Fa(r || null),
      [r]
    ), F = E.useMemo(
      () => Fa(o || null),
      [o]
    ), L = E.useMemo(() => !W || !F ? !0 : W <= F, [W, F]), H = (j) => {
      const ne = j || null;
      D || P(ne), t == null || t(ne), ne && (v === void 0 && k(!1), x == null || x(!1));
    }, V = (j) => {
      v === void 0 && k(j), x == null || x(j);
    }, K = (j) => {
      switch (j.key) {
        case "ArrowDown":
        case "ArrowUp":
        case "Enter":
        case " ":
          j.preventDefault(), T || V(!0);
          break;
        case "Escape":
          T && (j.preventDefault(), V(!1));
          break;
      }
    };
    return /* @__PURE__ */ u.jsxs(Jv, { open: T, onOpenChange: V, children: [
      /* @__PURE__ */ u.jsx(eg, { asChild: !0, children: /* @__PURE__ */ u.jsx(
        Cc,
        {
          ...g,
          ref: S,
          type: "text",
          readOnly: !0,
          placeholder: f,
          value: O ? d(O) : "",
          disabled: s,
          invalid: a || i,
          trailingIcon: c || o1,
          trailingIconSize: l,
          onTrailingIconClick: () => !s && V(!T),
          className: A(
            T && "ring-interactive-focused ring-4",
            h
          ),
          onKeyDown: K,
          onClick: () => !s && V(!T),
          "aria-expanded": T,
          "aria-haspopup": "dialog"
        }
      ) }),
      /* @__PURE__ */ u.jsx(tg, { children: /* @__PURE__ */ u.jsx(
        vu,
        {
          className: A(GD, p),
          sideOffset: 4,
          align: "start",
          alignOffset: 0,
          side: C,
          avoidCollisions: !1,
          collisionPadding: 16,
          sticky: "always",
          onEscapeKeyDown: () => V(!1),
          onPointerDownOutside: () => V(!1),
          role: "dialog",
          "aria-label": "Date picker calendar",
          children: /* @__PURE__ */ u.jsx(
            Sy,
            {
              value: O,
              onChange: H,
              ...W && { minDate: W },
              ...F && { maxDate: F },
              disabled: !L,
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
KD.displayName = "DatePicker";
const qD = /* @__PURE__ */ new Set([
  "text",
  "search",
  "email",
  "url",
  "tel",
  "number",
  "password"
]), XD = 'input, textarea, select, [role="combobox"], [contenteditable="true"]';
function ZD(e) {
  var n;
  if (e.hasAttribute("hidden") || e.closest('[aria-hidden="true"]') || e instanceof HTMLInputElement && e.type === "hidden")
    return !1;
  const t = (n = e.ownerDocument.defaultView) == null ? void 0 : n.getComputedStyle(e);
  return (t == null ? void 0 : t.display) !== "none" && (t == null ? void 0 : t.visibility) !== "hidden";
}
function QD(e) {
  if (e.getAttribute("aria-disabled") === "true") return !1;
  const t = e;
  return !t.disabled && !t.readOnly;
}
function JD(e) {
  const t = e.getAttribute("role");
  return t !== null && t !== "textbox" || e.hasAttribute("aria-autocomplete") || e.hasAttribute("aria-haspopup") ? !1 : e instanceof HTMLTextAreaElement ? !0 : e instanceof HTMLInputElement ? qD.has(e.type) : !1;
}
function eA(e) {
  const t = Array.from(
    e.querySelectorAll(XD)
  ).filter(ZD).filter(QD), n = t[0];
  return !n || !JD(n) || n.value.trim() !== "" && t.length > 1 ? null : n;
}
function tA(e) {
  e.preventDefault();
  const t = e.currentTarget instanceof HTMLElement ? e.currentTarget : e.target;
  t instanceof HTMLElement && (eA(t) ?? t).focus();
}
const nA = {
  md: "max-w-screen-sm",
  lg: "max-w-screen-lg"
}, rA = [
  {
    label: "Confirm",
    value: !0,
    intent: "primary"
  }
], jT = ({
  isOpen: e,
  onClose: t,
  onCancel: n = (p) => p(),
  title: r,
  children: o,
  busy: s,
  actions: a = rA,
  cancellable: i = !0,
  cancelButtonLabel: c = "キャンセル",
  allowClickOutside: l = !0,
  onOpenAutoFocus: f = tA,
  bodyClassName: d,
  size: h = "md"
}) => {
  const [p, y] = E.useState(-1), x = s !== void 0 ? s : p !== -1, C = async (w) => {
    const P = a.indexOf(w);
    if (w.onAction) {
      y(P);
      const _ = await w.onAction(t);
      if (y(-1), _ === !1)
        return;
    } else
      y(-1);
    e && t(w.value);
  }, b = () => {
    n(t);
  }, g = (w) => {
    w.preventDefault(), i && !x && l && n(t);
  }, S = (w) => {
    if (x) {
      w.preventDefault();
      return;
    }
    w.preventDefault(), n(t);
  };
  return /* @__PURE__ */ u.jsx(Ud, { open: e, onOpenChange: t, children: /* @__PURE__ */ u.jsx(Kd, { children: /* @__PURE__ */ u.jsx(
    qd,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
            w-full`,
      children: /* @__PURE__ */ u.jsxs(
        Xd,
        {
          "aria-describedby": void 0,
          onPointerDownOutside: g,
          onEscapeKeyDown: S,
          onOpenAutoFocus: f,
          className: A(
            `bg-surface-primary rounded-lg z-dialog min-w-96 fixed top-1/2
              left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2 transform`,
            nA[h]
          ),
          children: [
            /* @__PURE__ */ u.jsx("header", { className: "px-xl py-lg", children: r && /* @__PURE__ */ u.jsx(
              Mm,
              {
                className: `text-xxl text-body-primary font-bold flex
                    items-center leading-[1.2]`,
                children: r
              }
            ) }),
            /* @__PURE__ */ u.jsx(
              "div",
              {
                className: A(
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
                Le,
                {
                  intent: "tertiary",
                  onClick: b,
                  disabled: x,
                  children: c
                }
              ),
              /* @__PURE__ */ u.jsx("div", { className: `gap-xs flex ${i ? "" : "ml-auto"}`, children: a.map((w, P) => {
                const { label: _, classNames: k, onAction: D, value: O, ...T } = w;
                return /* @__PURE__ */ u.jsx(
                  Le,
                  {
                    loading: p === P,
                    ...T,
                    intent: w.intent || "primary",
                    className: k,
                    onClick: () => C(w),
                    children: _
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
}, Wy = Ks(void 0), Au = () => {
  const e = As(Wy);
  if (!e)
    throw new Error(
      "MultiStepDialog components must be used within MultiStepDialog.Root"
    );
  return e;
}, oA = ({
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
  const [l, f] = Xe(o), d = s !== void 0 ? s : l, h = E.Children.toArray(r).filter(
    (w) => E.isValidElement(w) && w.type === Ly
  ), p = h.length, y = (w) => {
    w >= 0 && w < p && (s === void 0 && f(w), c == null || c(w));
  }, v = () => y(d + 1), x = () => y(d - 1), C = (w) => {
    s === void 0 && f(o), t(w);
  }, b = (w) => {
    w.preventDefault(), a && i && n(C);
  }, g = (w) => {
    w.preventDefault(), a && n(C);
  }, S = {
    currentStep: d,
    totalSteps: p,
    goToStep: y,
    nextStep: v,
    prevStep: x,
    isFirstStep: d === 0,
    isLastStep: d === p - 1,
    cancellable: a,
    onClose: C,
    onCancel: n
  };
  return /* @__PURE__ */ u.jsx(Wy.Provider, { value: S, children: /* @__PURE__ */ u.jsx(Ud, { open: e, onOpenChange: C, children: /* @__PURE__ */ u.jsx(Kd, { children: /* @__PURE__ */ u.jsx(
    qd,
    {
      className: `bg-surface-scrimmed top-0 left-0 z-dialog fixed h-full
              w-full`,
      children: /* @__PURE__ */ u.jsx(
        Xd,
        {
          className: `bg-surface-primary rounded-lg z-dialog max-w-screen-sm
                min-w-96 fixed top-1/2 left-1/2 w-2/3 -translate-x-1/2
                -translate-y-1/2 transform`,
          onPointerDownOutside: b,
          onEscapeKeyDown: g,
          children: h[d]
        }
      )
    }
  ) }) }) });
}, Ly = ({ children: e }) => /* @__PURE__ */ u.jsx("div", { className: "flex flex-col", children: e }), sA = ({ children: e }) => /* @__PURE__ */ u.jsx("header", { className: "px-xl py-lg", children: /* @__PURE__ */ u.jsx(
  Mm,
  {
    className: `text-xxl text-body-primary font-bold flex items-center
          leading-[1.2]`,
    children: e
  }
) }), aA = ({ children: e, className: t }) => /* @__PURE__ */ u.jsx(
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
), iA = ({
  children: e,
  showCancel: t = !0,
  cancelLabel: n = "キャンセル",
  onCancel: r
}) => {
  const { onCancel: o, onClose: s, cancellable: a } = Au(), i = () => {
    r && r(), o(s);
  };
  return /* @__PURE__ */ u.jsxs("footer", { className: "px-xl py-md flex justify-between", children: [
    /* @__PURE__ */ u.jsx("div", { className: "gap-xs flex", children: t && a && /* @__PURE__ */ u.jsx(Le, { intent: "tertiary", onClick: i, children: n }) }),
    e && /* @__PURE__ */ u.jsx("div", { className: "gap-xs ml-auto flex", children: e })
  ] });
}, cA = ({
  label: e,
  onAction: t,
  value: n,
  closeOnAction: r = !1,
  ...o
}) => {
  const s = Au(), a = {
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
  return r ? /* @__PURE__ */ u.jsx(zC, { asChild: !0, children: /* @__PURE__ */ u.jsx(Le, { ...o, onClick: i, children: e }) }) : /* @__PURE__ */ u.jsx(Le, { ...o, onClick: i, children: e });
}, $T = {
  Root: oA,
  Step: Ly,
  Header: sA,
  Body: aA,
  Footer: iA,
  Action: cA,
  useMultiStepDialog: Au
}, WT = ({
  label: e,
  children: t,
  className: n,
  name: r,
  error: o,
  description: s,
  optional: a
}) => {
  const i = E.isValidElement(t) ? E.cloneElement(
    t,
    {
      id: r,
      name: r,
      invalid: !!o
    }
  ) : t;
  return /* @__PURE__ */ u.jsxs("div", { className: A("min-w-0", n), children: [
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
}, Fy = Jv, lA = eg, dA = Uk, Ou = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ u.jsx(tg, { children: /* @__PURE__ */ u.jsx(
  vu,
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
Ou.displayName = vu.displayName;
const uA = (e) => typeof e == "string" ? e : e.label || e.value || String(e), fA = (e, t) => typeof e == "string" ? `${e}-${t}` : `${e.value || e}-${t}`, Vy = E.forwardRef(
  (e, t) => {
    const {
      value: n,
      onChange: r,
      suggestions: o,
      onSearch: s,
      onSelect: a,
      renderSuggestion: i,
      getSuggestionValue: c = uA,
      getSuggestionKey: l = fA,
      debounceMs: f = 300,
      minQueryLength: d = 0,
      loadingText: h = "Loading...",
      disabled: p,
      onFocus: y,
      onBlur: v,
      onKeyDown: x,
      ...C
    } = e, [b, g] = Xe(!1), [S, w] = Xe(
      []
    ), [P, _] = Xe(!1), k = rt(null), [D, O] = Xe(0), T = rt([]), W = HD(n, f), F = ho(() => {
      if (!o)
        return S;
      if (!n || n.length < d)
        return o;
      const N = n.toLowerCase();
      return o.filter((M) => c(M).toLowerCase().includes(N));
    }, [
      o,
      S,
      n,
      d,
      c
    ]);
    fn(() => {
      if (s) {
        if (W.length < d) {
          w([]), g(!1), _(!1);
          return;
        }
        return k.current && k.current.abort(), k.current = new AbortController(), _(!0), s(W).then((N) => {
          w(N);
        }).catch((N) => {
          N.name !== "AbortError" && console.debug("AutoSuggest search failed:", N), w([]);
        }).finally(() => {
          _(!1);
        }), () => {
          k.current && k.current.abort();
        };
      }
    }, [W, s, d]);
    const L = be(
      (N) => {
        const M = c(N);
        r(M), a == null || a(N), g(!1);
      },
      [r, a, c]
    ), H = be(
      (N) => {
        p || g(!0), y == null || y(N);
      },
      [p, y]
    ), V = be(
      (N) => {
        g(!1), v == null || v(N);
      },
      [v]
    ), K = be(
      (N) => {
        const M = N.target.value;
        r(M), !b && F.length > 0 && g(!0);
      },
      [r, b, F.length]
    );
    fn(() => {
      O(0), T.current = [];
    }, [F]), fn(() => {
      var N;
      b && D >= 0 && T.current[D] && ((N = T.current[D]) == null || N.scrollIntoView({
        block: "nearest"
      }));
    }, [D, b]);
    const I = be(
      (N) => {
        if (!b) {
          x == null || x(N);
          return;
        }
        switch (N.key) {
          case "Escape":
            N.preventDefault(), g(!1);
            break;
          case "Enter": {
            N.preventDefault();
            const M = F[D];
            M && L(M);
            break;
          }
          case "ArrowDown":
            N.preventDefault(), O(
              (M) => M < F.length - 1 ? M + 1 : M
            );
            break;
          case "ArrowUp":
            N.preventDefault(), O((M) => M > 0 ? M - 1 : M);
            break;
        }
        x == null || x(N);
      },
      [b, D, F, L, x]
    ), j = b && !p && (F.length > 0 || P), ne = j && D >= 0 ? `autosuggest-item-${D}` : void 0;
    return /* @__PURE__ */ u.jsxs(Fy, { open: j, children: [
      /* @__PURE__ */ u.jsx(dA, { asChild: !0, children: /* @__PURE__ */ u.jsx(
        Cc,
        {
          ref: t,
          value: n,
          onChange: K,
          onFocus: H,
          onBlur: V,
          onKeyDown: I,
          disabled: p,
          role: "combobox",
          "aria-expanded": j,
          "aria-controls": "autosuggest-listbox",
          "aria-activedescendant": ne,
          "aria-autocomplete": "list",
          ...C
        }
      ) }),
      /* @__PURE__ */ u.jsx(
        Ou,
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
          children: P ? /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: `gap-xs py-6 text-body-secondary flex items-center
                justify-center`,
              children: [
                /* @__PURE__ */ u.jsx(k1, { className: "h-4 w-4 animate-spin" }),
                /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: h })
              ]
            }
          ) : /* @__PURE__ */ u.jsx(
            "div",
            {
              id: "autosuggest-listbox",
              role: "listbox",
              className: A(
                "max-h-[calc(40vh-56px)] overflow-x-hidden overflow-y-auto"
              ),
              style: { overscrollBehaviorY: "contain" },
              children: F.map((N, M) => {
                const $ = c(N), z = M === D, U = `autosuggest-item-${M}`;
                return /* @__PURE__ */ u.jsx(
                  "div",
                  {
                    id: U,
                    ref: (G) => {
                      T.current[M] = G;
                    },
                    role: "option",
                    "aria-selected": z,
                    "data-value": $,
                    onClick: () => L(N),
                    onPointerDown: (G) => {
                      G.preventDefault(), L(N);
                    },
                    onMouseEnter: () => O(M),
                    className: A(
                      `min-h-10 px-lg py-1.5 relative flex cursor-default
                        items-center`,
                      "break-words whitespace-normal outline-none select-none",
                      "hover:bg-interactive-neutral-hover",
                      z && "bg-interactive-neutral-hover"
                    ),
                    children: i ? i(N) : c(N)
                  },
                  l(N, M)
                );
              })
            }
          )
        }
      )
    ] });
  }
);
Vy.displayName = "AutoSuggest";
var ye = /* @__PURE__ */ ((e) => (e.AccentBambooSoft = "--token-color-text-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-text-accent-bamboo-strong", e.AccentCharchoalSoft = "--token-color-text-accent-charchoal-soft", e.AccentCharchoalStrong = "--token-color-text-accent-charchoal-strong", e.AccentCyanSoft = "--token-color-text-accent-cyan-soft", e.AccentCyanStrong = "--token-color-text-accent-cyan-strong", e.AccentGrassSoft = "--token-color-text-accent-grass-soft", e.AccentGrassStrong = "--token-color-text-accent-grass-strong", e.AccentGraySoft = "--token-color-text-accent-gray-soft", e.AccentGrayStrong = "--token-color-text-accent-gray-strong", e.AccentGreenSoft = "--token-color-text-accent-green-soft", e.AccentGreenStrong = "--token-color-text-accent-green-strong", e.AccentLemonSoft = "--token-color-text-accent-lemon-soft", e.AccentLemonStrong = "--token-color-text-accent-lemon-strong", e.AccentLimeSoft = "--token-color-text-accent-lime-soft", e.AccentLimeStrong = "--token-color-text-accent-lime-strong", e.AccentMagentaSoft = "--token-color-text-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-text-accent-magenta-strong", e.AccentOrangeSoft = "--token-color-text-accent-orange-soft", e.AccentOrangeStrong = "--token-color-text-accent-orange-strong", e.AccentPeacockSoft = "--token-color-text-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-text-accent-peacock-strong", e.AccentPurpleSoft = "--token-color-text-accent-purple-soft", e.AccentPurpleStrong = "--token-color-text-accent-purple-strong", e.AccentSeaSoft = "--token-color-text-accent-sea-soft", e.AccentSeaStrong = "--token-color-text-accent-sea-strong", e.AccentSkySoft = "--token-color-text-accent-sky-soft", e.AccentSkyStrong = "--token-color-text-accent-sky-strong", e.AccentSunSoft = "--token-color-text-accent-sun-soft", e.AccentSunStrong = "--token-color-text-accent-sun-strong", e.AccentVioletSoft = "--token-color-text-accent-violet-soft", e.AccentVioletStrong = "--token-color-text-accent-violet-strong", e.AccentWoodSoft = "--token-color-text-accent-wood-soft", e.AccentWoodStrong = "--token-color-text-accent-wood-strong", e.AccentYellowSoft = "--token-color-text-accent-yellow-soft", e.AccentYellowStrong = "--token-color-text-accent-yellow-strong", e.BodyAlert = "--token-color-text-body-alert", e.BodyDisabled = "--token-color-text-body-disabled", e.BodyInverse = "--token-color-text-body-inverse", e.BodyPlaceholder = "--token-color-text-body-placeholder", e.BodyPrimary = "--token-color-text-body-primary", e.BodySecondary = "--token-color-text-body-secondary", e.BodySuccess = "--token-color-text-body-success", e.BodyWarning = "--token-color-text-body-warning", e.InteractiveAlertActive = "--token-color-text-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-text-interactive-alert-default", e.InteractiveAlertHover = "--token-color-text-interactive-alert-hover", e.InteractiveDisabled = "--token-color-text-interactive-disabled", e.InteractiveHeavy = "--token-color-text-interactive-heavy", e.InteractiveInverse = "--token-color-text-interactive-inverse", e.InteractivePrimaryActive = "--token-color-text-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-text-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-text-interactive-primary-hover", e))(ye || {}), X = /* @__PURE__ */ ((e) => (e.AccentBambooPale = "--token-color-shape-accent-bamboo-pale", e.AccentBambooSoft = "--token-color-shape-accent-bamboo-soft", e.AccentBambooStrong = "--token-color-shape-accent-bamboo-strong", e.AccentCharcoalPale = "--token-color-shape-accent-charcoal-pale", e.AccentCharcoalSoft = "--token-color-shape-accent-charcoal-soft", e.AccentCharcoalStrong = "--token-color-shape-accent-charcoal-strong", e.AccentCyanPale = "--token-color-shape-accent-cyan-pale", e.AccentCyanSoft = "--token-color-shape-accent-cyan-soft", e.AccentCyanStrong = "--token-color-shape-accent-cyan-strong", e.AccentGrassPale = "--token-color-shape-accent-grass-pale", e.AccentGrassSoft = "--token-color-shape-accent-grass-soft", e.AccentGrassStrong = "--token-color-shape-accent-grass-strong", e.AccentGrayPale = "--token-color-shape-accent-gray-pale", e.AccentGraySoft = "--token-color-shape-accent-gray-soft", e.AccentGrayStrong = "--token-color-shape-accent-gray-strong", e.AccentGreenPale = "--token-color-shape-accent-green-pale", e.AccentGreenSoft = "--token-color-shape-accent-green-soft", e.AccentGreenStrong = "--token-color-shape-accent-green-strong", e.AccentLemonPale = "--token-color-shape-accent-lemon-pale", e.AccentLemonSoft = "--token-color-shape-accent-lemon-soft", e.AccentLemonStrong = "--token-color-shape-accent-lemon-strong", e.AccentLimePale = "--token-color-shape-accent-lime-pale", e.AccentLimeSoft = "--token-color-shape-accent-lime-soft", e.AccentLimeStrong = "--token-color-shape-accent-lime-strong", e.AccentMagentaPale = "--token-color-shape-accent-magenta-pale", e.AccentMagentaSoft = "--token-color-shape-accent-magenta-soft", e.AccentMagentaStrong = "--token-color-shape-accent-magenta-strong", e.AccentOrangePale = "--token-color-shape-accent-orange-pale", e.AccentOrangeSoft = "--token-color-shape-accent-orange-soft", e.AccentOrangeStrong = "--token-color-shape-accent-orange-strong", e.AccentPeacockPale = "--token-color-shape-accent-peacock-pale", e.AccentPeacockSoft = "--token-color-shape-accent-peacock-soft", e.AccentPeacockStrong = "--token-color-shape-accent-peacock-strong", e.AccentPurplePale = "--token-color-shape-accent-purple-pale", e.AccentPurpleSoft = "--token-color-shape-accent-purple-soft", e.AccentPurpleStrong = "--token-color-shape-accent-purple-strong", e.AccentSeaPale = "--token-color-shape-accent-sea-pale", e.AccentSeaSoft = "--token-color-shape-accent-sea-soft", e.AccentSeaStrong = "--token-color-shape-accent-sea-strong", e.AccentSkyPale = "--token-color-shape-accent-sky-pale", e.AccentSkySoft = "--token-color-shape-accent-sky-soft", e.AccentSkyStrong = "--token-color-shape-accent-sky-strong", e.AccentSunPale = "--token-color-shape-accent-sun-pale", e.AccentSunSoft = "--token-color-shape-accent-sun-soft", e.AccentSunStrong = "--token-color-shape-accent-sun-strong", e.AccentVioletPale = "--token-color-shape-accent-violet-pale", e.AccentVioletSoft = "--token-color-shape-accent-violet-soft", e.AccentVioletStrong = "--token-color-shape-accent-violet-strong", e.AccentWoodPale = "--token-color-shape-accent-wood-pale", e.AccentWoodSoft = "--token-color-shape-accent-wood-soft", e.AccentWoodStrong = "--token-color-shape-accent-wood-strong", e.AccentYellowPale = "--token-color-shape-accent-yellow-pale", e.AccentYellowSoft = "--token-color-shape-accent-yellow-soft", e.AccentYellowStrong = "--token-color-shape-accent-yellow-strong", e.InteractiveAlertActive = "--token-color-shape-interactive-alert-active", e.InteractiveAlertDefault = "--token-color-shape-interactive-alert-default", e.InteractiveAlertHover = "--token-color-shape-interactive-alert-hover", e.InteractiveDisabled = "--token-color-shape-interactive-disabled", e.InteractiveHeavy = "--token-color-shape-interactive-heavy", e.InteractiveInverse = "--token-color-shape-interactive-inverse", e.InteractiveNeutralDefault = "--token-color-shape-interactive-neutral-default", e.InteractiveNeutralDisabled = "--token-color-shape-interactive-neutral-disabled", e.InteractiveNeutralHover = "--token-color-shape-interactive-neutral-hover", e.InteractivePrimaryActive = "--token-color-shape-interactive-primary-active", e.InteractivePrimaryDefault = "--token-color-shape-interactive-primary-default", e.InteractivePrimaryHover = "--token-color-shape-interactive-primary-hover", e.InteractivePrimarySelected = "--token-color-shape-interactive-primary-selected", e.Light = "--token-color-shape-light", e.Primary = "--token-color-shape-primary", e.StatusAlert = "--token-color-shape-status-alert", e.StatusInfo = "--token-color-shape-status-info", e.StatusSuccess = "--token-color-shape-status-success", e.StatusWarning = "--token-color-shape-status-warning", e))(X || {});
const hA = [
  {
    backgroundColor: X.AccentSunSoft,
    textColor: ye.AccentSunStrong,
    iconColor: X.AccentSunStrong,
    code: 19
  },
  {
    backgroundColor: X.AccentSunPale,
    textColor: ye.AccentSunStrong,
    iconColor: X.AccentSunStrong,
    code: 1
  },
  {
    backgroundColor: X.AccentWoodSoft,
    textColor: ye.AccentWoodStrong,
    iconColor: X.AccentWoodStrong,
    code: 34
  },
  {
    backgroundColor: X.AccentWoodPale,
    textColor: ye.AccentWoodStrong,
    iconColor: X.AccentWoodStrong,
    code: 16
  },
  {
    backgroundColor: X.AccentOrangeSoft,
    textColor: ye.AccentOrangeStrong,
    iconColor: X.AccentOrangeStrong,
    code: 33
  },
  {
    backgroundColor: X.AccentOrangePale,
    textColor: ye.AccentOrangeStrong,
    iconColor: X.AccentOrangeStrong,
    code: 15
  },
  {
    backgroundColor: X.AccentYellowSoft,
    textColor: ye.AccentYellowStrong,
    iconColor: X.AccentYellowStrong,
    code: 32
  },
  {
    backgroundColor: X.AccentYellowPale,
    textColor: ye.AccentYellowStrong,
    iconColor: X.AccentYellowStrong,
    code: 14
  },
  {
    backgroundColor: X.AccentLemonSoft,
    textColor: ye.AccentLemonStrong,
    iconColor: X.AccentLemonStrong,
    code: 31
  },
  {
    backgroundColor: X.AccentLemonPale,
    textColor: ye.AccentLemonStrong,
    iconColor: X.AccentLemonStrong,
    code: 13
  },
  {
    backgroundColor: X.AccentGrassSoft,
    textColor: ye.AccentGrassStrong,
    iconColor: X.AccentGrassStrong,
    code: 30
  },
  {
    backgroundColor: X.AccentGrassPale,
    textColor: ye.AccentGrassStrong,
    iconColor: X.AccentGrassStrong,
    code: 12
  },
  {
    backgroundColor: X.AccentLimeSoft,
    textColor: ye.AccentLimeStrong,
    iconColor: X.AccentLimeStrong,
    code: 29
  },
  {
    backgroundColor: X.AccentLimePale,
    textColor: ye.AccentLimeStrong,
    iconColor: X.AccentLimeStrong,
    code: 11
  },
  {
    backgroundColor: X.AccentGreenSoft,
    textColor: ye.AccentGreenStrong,
    iconColor: X.AccentGreenStrong,
    code: 27
  },
  {
    backgroundColor: X.AccentGreenPale,
    textColor: ye.AccentGreenStrong,
    iconColor: X.AccentGreenStrong,
    code: 9
  },
  {
    backgroundColor: X.AccentPeacockSoft,
    textColor: ye.AccentPeacockStrong,
    iconColor: X.AccentPeacockStrong,
    code: 26
  },
  {
    backgroundColor: X.AccentPeacockPale,
    textColor: ye.AccentPeacockStrong,
    iconColor: X.AccentPeacockStrong,
    code: 8
  },
  {
    backgroundColor: X.AccentCyanSoft,
    textColor: ye.AccentCyanStrong,
    iconColor: X.AccentCyanStrong,
    code: 25
  },
  {
    backgroundColor: X.AccentCyanPale,
    textColor: ye.AccentCyanStrong,
    iconColor: X.AccentCyanStrong,
    code: 7
  },
  {
    backgroundColor: X.AccentSkySoft,
    textColor: ye.AccentSkyStrong,
    iconColor: X.AccentSkyStrong,
    code: 24
  },
  {
    backgroundColor: X.AccentSkyPale,
    textColor: ye.AccentSkyStrong,
    iconColor: X.AccentSkyStrong,
    code: 6
  },
  {
    backgroundColor: X.AccentSeaSoft,
    textColor: ye.AccentSeaStrong,
    iconColor: X.AccentSeaStrong,
    code: 23
  },
  {
    backgroundColor: X.AccentSeaPale,
    textColor: ye.AccentSeaStrong,
    iconColor: X.AccentSeaStrong,
    code: 5
  },
  {
    backgroundColor: X.AccentVioletSoft,
    textColor: ye.AccentVioletStrong,
    iconColor: X.AccentVioletStrong,
    code: 22
  },
  {
    backgroundColor: X.AccentVioletPale,
    textColor: ye.AccentVioletStrong,
    iconColor: X.AccentVioletStrong,
    code: 4
  },
  {
    backgroundColor: X.AccentPurpleSoft,
    textColor: ye.AccentPurpleStrong,
    iconColor: X.AccentPurpleStrong,
    code: 21
  },
  {
    backgroundColor: X.AccentPurplePale,
    textColor: ye.AccentPurpleStrong,
    iconColor: X.AccentPurpleStrong,
    code: 3
  },
  {
    backgroundColor: X.AccentMagentaSoft,
    textColor: ye.AccentMagentaStrong,
    iconColor: X.AccentMagentaStrong,
    code: 20
  },
  {
    backgroundColor: X.AccentMagentaPale,
    textColor: ye.AccentMagentaStrong,
    iconColor: X.AccentMagentaStrong,
    code: 2
  },
  {
    backgroundColor: X.AccentCharcoalSoft,
    textColor: ye.AccentCharchoalStrong,
    iconColor: X.AccentCharcoalStrong,
    code: 35
  },
  {
    backgroundColor: X.AccentCharcoalPale,
    textColor: ye.AccentCharchoalStrong,
    iconColor: X.AccentCharcoalStrong,
    code: 17
  },
  {
    backgroundColor: X.AccentGraySoft,
    textColor: ye.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 36
  },
  {
    backgroundColor: X.AccentGrayPale,
    textColor: ye.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 18
  },
  // LegacyColor and fallback to default gray (0)
  {
    backgroundColor: X.AccentGrayPale,
    textColor: ye.AccentGrayStrong,
    iconColor: X.AccentGrayStrong,
    code: 0
  },
  {
    backgroundColor: X.AccentBambooPale,
    textColor: ye.AccentBambooStrong,
    iconColor: X.AccentBambooStrong,
    code: 10
  }
], pA = ae(
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
), ql = ({
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
  const h = hA.find(
    (C) => C.code === e
  ), p = () => c === "secondary" ? `var(${h == null ? void 0 : h.iconColor})` : `var(${h == null ? void 0 : h.textColor})`, y = A(
    pA({
      size: s,
      selected: f ? !1 : i,
      interactive: !!o && !f,
      variant: c,
      disabled: f
    }),
    n
  ), v = {
    // Only apply accent background for primary variant
    // Secondary variant uses bg-surface-disabled from CVA (or bg-interactive-disabled when disabled)
    ...c === "primary" && {
      backgroundColor: `var(${h == null ? void 0 : h.backgroundColor})`
    },
    // Only apply inline color when not disabled (Tailwind class handles disabled state)
    ...!f && { color: `var(${h == null ? void 0 : h.textColor})` },
    ...a
  }, x = d ? No : "div";
  return /* @__PURE__ */ u.jsxs(
    x,
    {
      className: y,
      style: v,
      onClick: f ? void 0 : o,
      role: !d && o ? "button" : void 0,
      "aria-disabled": f || void 0,
      children: [
        l && /* @__PURE__ */ u.jsx(
          "span",
          {
            className: A(
              "shrink-0",
              f && "text-shape-interactive-disabled"
            ),
            style: f ? void 0 : { color: p() },
            children: Ze(l, { size: 14 })
          }
        ),
        d ? /* @__PURE__ */ u.jsx(G1, { children: t }) : /* @__PURE__ */ u.jsx("div", { className: "pt-0.5 relative h-full truncate", children: t }),
        !!r && !f && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: A(
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
}, zy = E.forwardRef(
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
    disabled: y,
    className: v,
    onValidateTag: x,
    defaultValidationError: C = "Invalid tag",
    ...b
  }, g) => {
    const [S, w] = Xe(""), P = a ?? S, _ = i ?? w, [k, D] = Xe(!1), { compositionHandlers: O, guardKeyHandler: T } = wc(), [W, F] = Xe(null), L = rt(null);
    E.useImperativeHandle(g, () => L.current);
    const H = E.useMemo(() => {
      const G = o.map(
        (R) => R.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
      return new RegExp(G.join("|"));
    }, [o]), V = be(
      (G) => !(!G || !r && e.includes(G) || n && e.length >= n),
      [e, r, n]
    ), K = be(
      (G) => {
        const R = G.trim();
        if (V(R)) {
          if (x) {
            const Z = x(R);
            if (!Z.valid) {
              F(
                Z.error ?? C
              );
              return;
            }
          }
          t([...e, R]), _(""), F(null);
        }
      },
      [
        e,
        t,
        V,
        _,
        x,
        C
      ]
    ), I = be(
      (G) => {
        const R = e.filter((Z, J) => J !== G);
        t(R);
      },
      [e, t]
    ), j = be(
      (G) => {
        const R = G.target.value, Z = R[R.length - 1];
        if (Z && o.includes(Z)) {
          const se = R.slice(0, -1);
          se && K(se);
          return;
        }
        const J = R.split(H);
        if (J.length > 1) {
          J.filter(Boolean).forEach((se) => K(se));
          return;
        }
        _(R);
      },
      [o, H, K, _]
    ), ne = be(
      (G) => {
        G.key === "Enter" && P.trim() && (G.preventDefault(), K(P)), (G.key === "Backspace" || G.key === "Delete") && !P && e.length > 0 && (G.preventDefault(), I(e.length - 1));
      },
      [P, e.length, K, I]
    ), N = be(() => {
      P.trim() && K(P), D(!1), F(null);
    }, [P, K]), M = y || (n ? e.length >= n : !1), $ = e.length === 0 && !P, z = !!l, U = !!f;
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          className: A(
            $y({ invalid: p }),
            "min-h-11.5 !h-auto max-h-[12.5rem] overflow-y-auto",
            v
          ),
          children: [
            l && /* @__PURE__ */ u.jsx(
              "div",
              {
                className: Cs({
                  position: "prefix"
                }),
                children: Ze(l, { size: h })
              }
            ),
            /* @__PURE__ */ u.jsxs(
              "div",
              {
                className: A(
                  "gap-xxs min-h-6 flex flex-1 flex-wrap items-center",
                  z ? "pl-0" : "pl-sm",
                  U ? "pr-0" : "pr-sm",
                  "py-xxs"
                ),
                children: [
                  e.map((G, R) => /* @__PURE__ */ u.jsx(
                    ql,
                    {
                      ...!y && { onRemove: () => I(R) },
                      children: G
                    },
                    R
                  )),
                  /* @__PURE__ */ u.jsx(
                    "input",
                    {
                      ref: L,
                      value: P,
                      onChange: j,
                      onKeyDown: T(ne),
                      onFocus: () => D(!0),
                      onBlur: N,
                      onCompositionStart: O.onCompositionStart,
                      onCompositionEnd: O.onCompositionEnd,
                      placeholder: $ ? s : "",
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
            f && /* @__PURE__ */ u.jsx(
              "div",
              {
                className: Cs({
                  position: "trailing"
                }),
                children: Ze(f, { size: d })
              }
            )
          ]
        }
      ),
      (c || W) && /* @__PURE__ */ u.jsx(
        "p",
        {
          className: A(
            "mt-xxs text-sm",
            W ? "text-body-alert" : "text-body-secondary",
            !W && !k && "invisible"
          ),
          children: W || c
        }
      )
    ] });
  }
);
zy.displayName = "TagInput";
const LT = Object.assign(Cc, {
  AutoSuggest: Vy,
  TagInput: zy
});
var Bh = 1, mA = 0.9, vA = 0.8, gA = 0.17, sl = 0.1, al = 0.999, yA = 0.9999, bA = 0.99, xA = /[\\\/_+.#"@\[\(\{&]/, wA = /[\\\/_+.#"@\[\(\{&]/g, CA = /[\s-]/, By = /[\s-]/g;
function Xl(e, t, n, r, o, s, a) {
  if (s === t.length) return o === e.length ? Bh : bA;
  var i = `${o},${s}`;
  if (a[i] !== void 0) return a[i];
  for (var c = r.charAt(s), l = n.indexOf(c, o), f = 0, d, h, p, y; l >= 0; ) d = Xl(e, t, n, r, l + 1, s + 1, a), d > f && (l === o ? d *= Bh : xA.test(e.charAt(l - 1)) ? (d *= vA, p = e.slice(o, l - 1).match(wA), p && o > 0 && (d *= Math.pow(al, p.length))) : CA.test(e.charAt(l - 1)) ? (d *= mA, y = e.slice(o, l - 1).match(By), y && o > 0 && (d *= Math.pow(al, y.length))) : (d *= gA, o > 0 && (d *= Math.pow(al, l - o))), e.charAt(l) !== t.charAt(s) && (d *= yA)), (d < sl && n.charAt(l - 1) === r.charAt(s + 1) || r.charAt(s + 1) === r.charAt(s) && n.charAt(l - 1) !== r.charAt(s)) && (h = Xl(e, t, n, r, l + 1, s + 2, a), h * sl > d && (d = h * sl)), d > f && (f = d), l = n.indexOf(c, l + 1);
  return a[i] = f, f;
}
function Hh(e) {
  return e.toLowerCase().replace(By, " ");
}
function SA(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Xl(e, t, Hh(e), Hh(t), 0, 0, {});
}
var Qo = '[cmdk-group=""]', il = '[cmdk-group-items=""]', _A = '[cmdk-group-heading=""]', Hy = '[cmdk-item=""]', Yh = `${Hy}:not([aria-disabled="true"])`, Zl = "cmdk-item-select", to = "data-value", kA = (e, t, n) => SA(e, t, n), Yy = m.createContext(void 0), ua = () => m.useContext(Yy), Gy = m.createContext(void 0), Ru = () => m.useContext(Gy), Uy = m.createContext(void 0), Ky = m.forwardRef((e, t) => {
  let n = no(() => {
    var M, $;
    return { search: "", value: ($ = (M = e.value) != null ? M : e.defaultValue) != null ? $ : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = no(() => /* @__PURE__ */ new Set()), o = no(() => /* @__PURE__ */ new Map()), s = no(() => /* @__PURE__ */ new Map()), a = no(() => /* @__PURE__ */ new Set()), i = qy(e), { label: c, children: l, value: f, onValueChange: d, filter: h, shouldFilter: p, loop: y, disablePointerSelection: v = !1, vimBindings: x = !0, ...C } = e, b = ze(), g = ze(), S = ze(), w = m.useRef(null), P = jA();
  Or(() => {
    if (f !== void 0) {
      let M = f.trim();
      n.current.value = M, _.emit();
    }
  }, [f]), Or(() => {
    P(6, F);
  }, []);
  let _ = m.useMemo(() => ({ subscribe: (M) => (a.current.add(M), () => a.current.delete(M)), snapshot: () => n.current, setState: (M, $, z) => {
    var U, G, R, Z;
    if (!Object.is(n.current[M], $)) {
      if (n.current[M] = $, M === "search") W(), O(), P(1, T);
      else if (M === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(S);
          J ? J.focus() : (U = document.getElementById(b)) == null || U.focus();
        }
        if (P(7, () => {
          var J;
          n.current.selectedItemId = (J = L()) == null ? void 0 : J.id, _.emit();
        }), z || P(5, F), ((G = i.current) == null ? void 0 : G.value) !== void 0) {
          let J = $ ?? "";
          (Z = (R = i.current).onValueChange) == null || Z.call(R, J);
          return;
        }
      }
      _.emit();
    }
  }, emit: () => {
    a.current.forEach((M) => M());
  } }), []), k = m.useMemo(() => ({ value: (M, $, z) => {
    var U;
    $ !== ((U = s.current.get(M)) == null ? void 0 : U.value) && (s.current.set(M, { value: $, keywords: z }), n.current.filtered.items.set(M, D($, z)), P(2, () => {
      O(), _.emit();
    }));
  }, item: (M, $) => (r.current.add(M), $ && (o.current.has($) ? o.current.get($).add(M) : o.current.set($, /* @__PURE__ */ new Set([M]))), P(3, () => {
    W(), O(), n.current.value || T(), _.emit();
  }), () => {
    s.current.delete(M), r.current.delete(M), n.current.filtered.items.delete(M);
    let z = L();
    P(4, () => {
      W(), (z == null ? void 0 : z.getAttribute("id")) === M && T(), _.emit();
    });
  }), group: (M) => (o.current.has(M) || o.current.set(M, /* @__PURE__ */ new Set()), () => {
    s.current.delete(M), o.current.delete(M);
  }), filter: () => i.current.shouldFilter, label: c || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: b, inputId: S, labelId: g, listInnerRef: w }), []);
  function D(M, $) {
    var z, U;
    let G = (U = (z = i.current) == null ? void 0 : z.filter) != null ? U : kA;
    return M ? G(M, n.current.search, $) : 0;
  }
  function O() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let M = n.current.filtered.items, $ = [];
    n.current.filtered.groups.forEach((U) => {
      let G = o.current.get(U), R = 0;
      G.forEach((Z) => {
        let J = M.get(Z);
        R = Math.max(J, R);
      }), $.push([U, R]);
    });
    let z = w.current;
    H().sort((U, G) => {
      var R, Z;
      let J = U.getAttribute("id"), se = G.getAttribute("id");
      return ((R = M.get(se)) != null ? R : 0) - ((Z = M.get(J)) != null ? Z : 0);
    }).forEach((U) => {
      let G = U.closest(il);
      G ? G.appendChild(U.parentElement === G ? U : U.closest(`${il} > *`)) : z.appendChild(U.parentElement === z ? U : U.closest(`${il} > *`));
    }), $.sort((U, G) => G[1] - U[1]).forEach((U) => {
      var G;
      let R = (G = w.current) == null ? void 0 : G.querySelector(`${Qo}[${to}="${encodeURIComponent(U[0])}"]`);
      R == null || R.parentElement.appendChild(R);
    });
  }
  function T() {
    let M = H().find((z) => z.getAttribute("aria-disabled") !== "true"), $ = M == null ? void 0 : M.getAttribute(to);
    _.setState("value", $ || void 0);
  }
  function W() {
    var M, $, z, U;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let G = 0;
    for (let R of r.current) {
      let Z = ($ = (M = s.current.get(R)) == null ? void 0 : M.value) != null ? $ : "", J = (U = (z = s.current.get(R)) == null ? void 0 : z.keywords) != null ? U : [], se = D(Z, J);
      n.current.filtered.items.set(R, se), se > 0 && G++;
    }
    for (let [R, Z] of o.current) for (let J of Z) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(R);
      break;
    }
    n.current.filtered.count = G;
  }
  function F() {
    var M, $, z;
    let U = L();
    U && (((M = U.parentElement) == null ? void 0 : M.firstChild) === U && ((z = ($ = U.closest(Qo)) == null ? void 0 : $.querySelector(_A)) == null || z.scrollIntoView({ block: "nearest" })), U.scrollIntoView({ block: "nearest" }));
  }
  function L() {
    var M;
    return (M = w.current) == null ? void 0 : M.querySelector(`${Hy}[aria-selected="true"]`);
  }
  function H() {
    var M;
    return Array.from(((M = w.current) == null ? void 0 : M.querySelectorAll(Yh)) || []);
  }
  function V(M) {
    let $ = H()[M];
    $ && _.setState("value", $.getAttribute(to));
  }
  function K(M) {
    var $;
    let z = L(), U = H(), G = U.findIndex((Z) => Z === z), R = U[G + M];
    ($ = i.current) != null && $.loop && (R = G + M < 0 ? U[U.length - 1] : G + M === U.length ? U[0] : U[G + M]), R && _.setState("value", R.getAttribute(to));
  }
  function I(M) {
    let $ = L(), z = $ == null ? void 0 : $.closest(Qo), U;
    for (; z && !U; ) z = M > 0 ? IA(z, Qo) : TA(z, Qo), U = z == null ? void 0 : z.querySelector(Yh);
    U ? _.setState("value", U.getAttribute(to)) : K(M);
  }
  let j = () => V(H().length - 1), ne = (M) => {
    M.preventDefault(), M.metaKey ? j() : M.altKey ? I(1) : K(1);
  }, N = (M) => {
    M.preventDefault(), M.metaKey ? V(0) : M.altKey ? I(-1) : K(-1);
  };
  return m.createElement(Q.div, { ref: t, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (M) => {
    var $;
    ($ = C.onKeyDown) == null || $.call(C, M);
    let z = M.nativeEvent.isComposing || M.keyCode === 229;
    if (!(M.defaultPrevented || z)) switch (M.key) {
      case "n":
      case "j": {
        x && M.ctrlKey && ne(M);
        break;
      }
      case "ArrowDown": {
        ne(M);
        break;
      }
      case "p":
      case "k": {
        x && M.ctrlKey && N(M);
        break;
      }
      case "ArrowUp": {
        N(M);
        break;
      }
      case "Home": {
        M.preventDefault(), V(0);
        break;
      }
      case "End": {
        M.preventDefault(), j();
        break;
      }
      case "Enter": {
        M.preventDefault();
        let U = L();
        if (U) {
          let G = new Event(Zl);
          U.dispatchEvent(G);
        }
      }
    }
  } }, m.createElement("label", { "cmdk-label": "", htmlFor: k.inputId, id: k.labelId, style: WA }, c), Sc(e, (M) => m.createElement(Gy.Provider, { value: _ }, m.createElement(Yy.Provider, { value: k }, M))));
}), EA = m.forwardRef((e, t) => {
  var n, r;
  let o = ze(), s = m.useRef(null), a = m.useContext(Uy), i = ua(), c = qy(e), l = (r = (n = c.current) == null ? void 0 : n.forceMount) != null ? r : a == null ? void 0 : a.forceMount;
  Or(() => {
    if (!l) return i.item(o, a == null ? void 0 : a.id);
  }, [l]);
  let f = Xy(o, s, [e.value, e.children, s], e.keywords), d = Ru(), h = rr((P) => P.value && P.value === f.current), p = rr((P) => l || i.filter() === !1 ? !0 : P.search ? P.filtered.items.get(o) > 0 : !0);
  m.useEffect(() => {
    let P = s.current;
    if (!(!P || e.disabled)) return P.addEventListener(Zl, y), () => P.removeEventListener(Zl, y);
  }, [p, e.onSelect, e.disabled]);
  function y() {
    var P, _;
    v(), (_ = (P = c.current).onSelect) == null || _.call(P, f.current);
  }
  function v() {
    d.setState("value", f.current, !0);
  }
  if (!p) return null;
  let { disabled: x, value: C, onSelect: b, forceMount: g, keywords: S, ...w } = e;
  return m.createElement(Q.div, { ref: On(s, t), ...w, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!h, "data-disabled": !!x, "data-selected": !!h, onPointerMove: x || i.getDisablePointerSelection() ? void 0 : v, onClick: x ? void 0 : y }, e.children);
}), PA = m.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...s } = e, a = ze(), i = m.useRef(null), c = m.useRef(null), l = ze(), f = ua(), d = rr((p) => o || f.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(a) : !0);
  Or(() => f.group(a), []), Xy(a, i, [e.value, e.heading, c]);
  let h = m.useMemo(() => ({ id: a, forceMount: o }), [o]);
  return m.createElement(Q.div, { ref: On(i, t), ...s, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && m.createElement("div", { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: l }, n), Sc(e, (p) => m.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? l : void 0 }, m.createElement(Uy.Provider, { value: h }, p))));
}), MA = m.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = m.useRef(null), s = rr((a) => !a.search);
  return !n && !s ? null : m.createElement(Q.div, { ref: On(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), NA = m.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, s = Ru(), a = rr((l) => l.search), i = rr((l) => l.selectedItemId), c = ua();
  return m.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), m.createElement(Q.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": c.listId, "aria-labelledby": c.labelId, "aria-activedescendant": i, id: c.inputId, type: "text", value: o ? e.value : a, onChange: (l) => {
    o || s.setState("search", l.target.value), n == null || n(l.target.value);
  } });
}), DA = m.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, s = m.useRef(null), a = m.useRef(null), i = rr((l) => l.selectedItemId), c = ua();
  return m.useEffect(() => {
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
  }, []), m.createElement(Q.div, { ref: On(s, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: c.listId }, Sc(e, (l) => m.createElement("div", { ref: On(a, c.listInnerRef), "cmdk-list-sizer": "" }, l)));
}), AA = m.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: s, container: a, ...i } = e;
  return m.createElement(Ud, { open: n, onOpenChange: r }, m.createElement(Kd, { container: a }, m.createElement(qd, { "cmdk-overlay": "", className: o }), m.createElement(Xd, { "aria-label": e.label, "cmdk-dialog": "", className: s }, m.createElement(Ky, { ref: t, ...i }))));
}), OA = m.forwardRef((e, t) => rr((n) => n.filtered.count === 0) ? m.createElement(Q.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), RA = m.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...s } = e;
  return m.createElement(Q.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, Sc(e, (a) => m.createElement("div", { "aria-hidden": !0 }, a)));
}), St = Object.assign(Ky, { List: DA, Item: EA, Input: NA, Group: PA, Separator: MA, Dialog: AA, Empty: OA, Loading: RA });
function IA(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function TA(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function qy(e) {
  let t = m.useRef(e);
  return Or(() => {
    t.current = e;
  }), t;
}
var Or = typeof window > "u" ? m.useEffect : m.useLayoutEffect;
function no(e) {
  let t = m.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function rr(e) {
  let t = Ru(), n = () => e(t.snapshot());
  return m.useSyncExternalStore(t.subscribe, n, n);
}
function Xy(e, t, n, r = []) {
  let o = m.useRef(), s = ua();
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
var jA = () => {
  let [e, t] = m.useState(), n = no(() => /* @__PURE__ */ new Map());
  return Or(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function $A(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Sc({ asChild: e, children: t }, n) {
  return e && m.isValidElement(t) ? m.cloneElement($A(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var WA = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Zy = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  St,
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
Zy.displayName = St.displayName;
const Qy = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
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
          /* @__PURE__ */ u.jsx(jd, { className: "mr-xxs h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ u.jsx(
            St.Input,
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
Qy.displayName = St.Input.displayName;
const Jy = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  St.List,
  {
    ref: n,
    className: A(
      "max-h-[18.75rem] overflow-x-hidden overflow-y-auto",
      e
    ),
    ...t
  }
));
Jy.displayName = St.List.displayName;
const eb = E.forwardRef((e, t) => /* @__PURE__ */ u.jsx(
  St.Empty,
  {
    ref: t,
    className: "text-body-secondary py-6 text-center",
    ...e
  }
));
eb.displayName = St.Empty.displayName;
const ni = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  St.Group,
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
ni.displayName = St.Group.displayName;
const LA = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  St.Separator,
  {
    ref: n,
    className: A(
      "-mx-1 h-px bg-[var(--token-color-border-divider-default)]",
      e
    ),
    ...t
  }
));
LA.displayName = St.Separator.displayName;
const ri = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  St.Item,
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
ri.displayName = St.Item.displayName;
const Gh = ae("ease-in-out transition-all duration-300", {
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
}), FA = ({
  options: e,
  onValueChange: t = (bt) => bt,
  onSearchValueChange: n,
  loading: r = !1,
  loadingLabel: o = "読み込み中...",
  onApplySelection: s = (bt) => bt,
  variant: a,
  defaultValue: i = [],
  value: c,
  placeholder: l = "選択してください",
  placeholderAriaLabel: f = "選択してください",
  triggerDescription: d = "マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。",
  noSelectionLabel: h = "オプションが選択されていません",
  searchHelpText: p = "入力してオプションをフィルタリング。矢印キーで結果をナビゲート。",
  searchAriaLabel: y = "利用可能なオプションを検索",
  optionsListAriaLabel: v = "利用可能なオプション",
  selectAllLabel: x = "すべて選択",
  selectAllCountLabel: C = "オプション",
  clearAllLabel: b = "すべてクリア",
  closeLabel: g = "閉じる",
  footerContent: S,
  moreSelectedLabel: w = "その他",
  searchPlaceholder: P = "オプションを検索...",
  maxCount: _ = 10,
  maxSelected: k,
  maxSelectedReachedLabel: D = "選択できる上限に達しました。",
  modalPopover: O = !1,
  className: T,
  hideSelectAll: W = !1,
  searchable: F = !0,
  emptyIndicator: L = "結果が見つかりません。",
  noOptionsIndicator: H = "利用可能なオプションがありません。",
  autoSize: V = !1,
  singleLine: K = !1,
  popoverClassName: I,
  disabled: j = !1,
  invalid: ne = !1,
  responsive: N,
  minWidth: M,
  maxWidth: $,
  deduplicateOptions: z = !1,
  resetOnDefaultValueChange: U = !0,
  closeOnSelect: G = !1,
  filterByValueAndLabel: R = !1,
  filterOption: Z,
  renderOption: J,
  customTrigger: se,
  selectionDisplayMode: le = "default",
  hideSelection: he = !1,
  maxDisplayedOptions: xe,
  totalOptionsCount: Ve,
  moreOptionsLabel: et = (bt) => `検索テキストを入力して他${bt}件を表示`,
  ...At
}, Ot) => {
  const [bt, Rt] = E.useState(i), [Ke, It] = E.useState(!1), [st, en] = E.useState(""), Bt = c !== void 0, pe = Bt ? c : bt, $n = k !== void 0 && pe.length >= k, [Ht, Wn] = E.useState(""), [Ln, dr] = E.useState(""), Fn = E.useRef(pe.length), Vn = E.useRef(Ke), ur = E.useRef(st), Tt = E.useCallback(
    (B, re = "polite") => {
      re === "assertive" ? (dr(B), setTimeout(() => dr(""), 100)) : (Wn(B), setTimeout(() => Wn(""), 100));
    },
    []
  ), ft = E.useCallback(
    (B) => {
      Bt || Rt(B), t(B);
    },
    [Bt, t]
  ), tn = E.useId(), zn = `${tn}-listbox`, fr = `${tn}-description`, de = `${tn}-count`, ke = E.useRef(i), q = E.useCallback(
    (B) => {
      const re = B[0];
      return !!(re && typeof re == "object" && "heading" in re);
    },
    []
  ), ie = E.useCallback((B, re) => {
    if (B.length !== re.length) return !1;
    const ue = [...B].sort(), Ee = [...re].sort();
    return ue.every((Ae, qe) => Ae === Ee[qe]);
  }, []), _e = E.useCallback(() => {
    It(!1), en(""), ft(i);
  }, [i, ft]), ce = E.useRef(null);
  E.useImperativeHandle(
    Ot,
    () => ({
      reset: _e,
      getSelectedValues: () => pe,
      setSelectedValues: ft,
      clear: () => ft([]),
      focus: () => {
        if (ce.current) {
          ce.current.focus();
          const B = ce.current.style.outline, re = ce.current.style.outlineOffset;
          ce.current.style.outline = "2px solid hsl(var(--ring))", ce.current.style.outlineOffset = "2px", setTimeout(() => {
            ce.current && (ce.current.style.outline = B, ce.current.style.outlineOffset = re);
          }, 1e3);
        }
      }
    }),
    [_e, pe, ft]
  );
  const [at, nn] = E.useState("desktop");
  E.useEffect(() => {
    if (typeof window > "u") return;
    const B = () => {
      const re = window.innerWidth;
      re < 640 ? nn("mobile") : re < 1024 ? nn("tablet") : nn("desktop");
    };
    return B(), window.addEventListener("resize", B), () => {
      typeof window < "u" && window.removeEventListener("resize", B);
    };
  }, []);
  const xt = (() => {
    if (!N)
      return {
        maxCount: _,
        compactMode: !1
      };
    if (N === !0) {
      const ue = {
        mobile: { maxCount: 2, compactMode: !0 },
        tablet: { maxCount: 4, compactMode: !1 },
        desktop: { maxCount: 6, compactMode: !1 }
      }[at];
      return {
        maxCount: (ue == null ? void 0 : ue.maxCount) ?? _,
        compactMode: (ue == null ? void 0 : ue.compactMode) ?? !1
      };
    }
    const B = N[at];
    return {
      maxCount: (B == null ? void 0 : B.maxCount) ?? _,
      compactMode: (B == null ? void 0 : B.compactMode) ?? !1
    };
  })(), Be = E.useCallback(() => {
    if (e.length === 0) return [];
    let B;
    q(e) ? B = e.flatMap((Ae) => Ae.options) : B = e;
    const re = /* @__PURE__ */ new Set(), ue = [], Ee = [];
    return B.forEach((Ae) => {
      re.has(Ae.value) ? (ue.push(Ae.value), z || Ee.push(Ae)) : (re.add(Ae.value), Ee.push(Ae));
    }), process.env.NODE_ENV === "development" && ue.length > 0 && console.warn(
      `MultiSelect: Duplicate option values ${z ? "automatically removed" : "detected"}: ${ue.join(
        ", "
      )}. ${z ? "Duplicates have been removed automatically." : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."}`
    ), z ? Ee : B;
  }, [e, z, q]), Sn = E.useCallback(
    (B) => {
      const re = Be().find((ue) => ue.value === B);
      return !re && process.env.NODE_ENV === "development" && console.warn(
        `MultiSelect: Option with value "${B}" not found in options list`
      ), re;
    },
    [Be]
  ), hr = E.useCallback(
    (B, re) => {
      const [ue, Ee] = B.split(":");
      if (!R)
        return Ee && Ee.toLowerCase().includes(re.toLowerCase()) ? 1 : 0;
      const Ae = re.toLowerCase();
      return Ee && Ee.toLowerCase().includes(Ae) || ue && ue.toLowerCase().includes(Ae) ? 1 : 0;
    },
    [R]
  ), Ca = (B) => {
    if (B.key === "Enter")
      It(!0);
    else if (B.key === "Backspace" && !B.currentTarget.value) {
      const re = [...pe];
      re.pop(), ft(re);
    }
  }, _n = (B) => {
    if (j) return;
    const re = Sn(B);
    if (re != null && re.disabled) return;
    const ue = pe.includes(B);
    if (!ue && $n) {
      Tt(D, "assertive");
      return;
    }
    const Ee = ue ? pe.filter((Ae) => Ae !== B) : [...pe, B];
    ft(Ee), G && It(!1);
  }, If = () => {
    j || ft([]);
  }, Vw = () => {
    j || It((B) => !B);
  }, zw = () => {
    if (j) return;
    const B = pe.slice(
      0,
      xt.maxCount
    );
    ft(B);
  }, Bw = () => {
    if (j) return;
    const B = Be().filter((re) => !re.disabled);
    k !== void 0 && B.length > k || (pe.length === B.length ? If() : ft(B.map((re) => re.value)), G && It(!1));
  }, $c = J || ((B) => {
    const { option: re, location: ue, onRemove: Ee, disabled: Ae } = B;
    return ue === "badge" ? /* @__PURE__ */ u.jsx(
      ql,
      {
        className: A(
          Gh({ variant: a }),
          xt.compactMode && "text-xs px-1.5 py-0.5",
          at === "mobile" && "max-w-[7.5rem] truncate",
          K && "flex-shrink-0 whitespace-nowrap",
          "[&>svg]:pointer-events-auto",
          Ae && "cursor-not-allowed"
        ),
        ...!Ae && { onRemove: Ee },
        children: re.label
      }
    ) : re.label;
  }), Wc = Be().length > 0, Ko = st.trim(), Sa = !!Ko, Tf = !!Z && Sa, pr = E.useMemo(() => !Z || !Ko ? e : q(e) ? e.map((B) => ({
    ...B,
    options: B.options.filter(
      (re) => Z(re, Ko)
    )
  })) : e.filter((B) => Z(B, Ko)), [e, Z, Ko, q]), _a = xe !== void 0 && (!Sa || !!n || !!Z), jf = E.useCallback(
    (B) => !!B.disabled || $n && !pe.includes(B.value),
    [$n, pe]
  ), Hw = k !== void 0 && Be().filter((B) => !B.disabled).length > k;
  E.useEffect(() => {
    if (!U || Bt) return;
    const B = ke.current;
    ie(B, i) || (ie(pe, i) || Rt(i), ke.current = [...i]);
  }, [
    i,
    pe,
    ie,
    U,
    Bt
  ]);
  const Lc = {
    minWidth: M || (at === "mobile" ? "0px" : "12.5rem"),
    maxWidth: $ || "100%",
    popoverMaxWidth: $ || "32rem",
    width: V ? "auto" : "100%"
  }, $f = E.useMemo(() => le === "default" || pe.length === 0 ? l : pe.map((B) => {
    var re;
    return (re = Sn(B)) == null ? void 0 : re.label;
  }).filter(Boolean).join(", "), [pe, Sn, l, le]);
  return E.useEffect(() => {
    Ke || en("");
  }, [Ke]), E.useEffect(() => {
    const B = pe.length, re = Be(), ue = re.filter((Ee) => !Ee.disabled).length;
    if (B !== Fn.current) {
      const Ee = B - Fn.current;
      if (Ee > 0) {
        const qe = pe.slice(-Ee).map((it) => {
          var kn;
          return (kn = re.find((Br) => Br.value === it)) == null ? void 0 : kn.label;
        }).filter(Boolean);
        qe.length === 1 ? Tt(
          `${qe[0]} selected. ${B} of ${ue} options selected.`
        ) : Tt(
          `${qe.length} options selected. ${B} of ${ue} total selected.`
        );
      } else Ee < 0 && Tt(
        `Option removed. ${B} of ${ue} options selected.`
      );
      Fn.current = B;
    }
    Ke !== Vn.current && (Tt(
      Ke ? `Dropdown opened. ${ue} options available. Use arrow keys to navigate.` : "Dropdown closed."
    ), Vn.current = Ke), st !== ur.current && st !== void 0 && (st && Ke && Tt(`Searching for "${st}"`), ur.current = st);
  }, [pe, Ke, st, Tt, Be]), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ u.jsx("div", { "aria-live": "polite", "aria-atomic": "true", role: "status", children: Ht }),
      /* @__PURE__ */ u.jsx("div", { "aria-live": "assertive", "aria-atomic": "true", role: "alert", children: Ln })
    ] }),
    /* @__PURE__ */ u.jsxs(
      Fy,
      {
        open: Ke,
        onOpenChange: It,
        modal: O,
        children: [
          /* @__PURE__ */ u.jsx("div", { id: fr, className: "sr-only", children: d }),
          /* @__PURE__ */ u.jsx("div", { id: de, className: "sr-only", "aria-live": "polite", children: pe.length === 0 ? h : `${pe.length} option${pe.length === 1 ? "" : "s"} selected: ${pe.map((B) => {
            var re;
            return (re = Sn(B)) == null ? void 0 : re.label;
          }).filter(Boolean).join(", ")}` }),
          /* @__PURE__ */ u.jsxs("div", { className: A(V && "w-auto", T), children: [
            /* @__PURE__ */ u.jsx(lA, { asChild: !0, children: se || /* @__PURE__ */ u.jsx(
              "button",
              {
                ref: ce,
                ...At,
                onClick: Vw,
                disabled: j,
                className: A(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  V ? "w-auto" : "w-full",
                  !ne && `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  ne && `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  xt.compactMode && "min-h-8 text-sm",
                  at === "mobile" && "min-h-12"
                ),
                style: {
                  ...Lc,
                  maxWidth: `min(${Lc.maxWidth}, 100%)`
                },
                role: "combobox",
                "aria-expanded": Ke,
                "aria-haspopup": "listbox",
                "aria-controls": Ke ? zn : void 0,
                "aria-describedby": `${fr} ${de}`,
                "aria-label": `Multi-select: ${pe.length} of ${Be().length} options selected. ${f}`,
                children: /* @__PURE__ */ u.jsxs(
                  "div",
                  {
                    className: "mx-auto flex w-full items-center justify-between",
                    children: [
                      /* @__PURE__ */ u.jsx(
                        "span",
                        {
                          className: A(
                            "mx-sm",
                            le === "inline" && "truncate",
                            j ? "text-body-disabled" : Ke || le === "inline" && $f !== l ? "text-body-primary" : "text-body-placeholder"
                          ),
                          children: $f
                        }
                      ),
                      /* @__PURE__ */ u.jsx(
                        Xs,
                        {
                          className: A(
                            "h-4 mx-xs cursor-pointer",
                            j ? "text-body-disabled" : "text-body-primary"
                          )
                        }
                      )
                    ]
                  }
                )
              }
            ) }),
            !(he || le === "inline") && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs mt-xxs flex flex-wrap", children: [
              pe.slice(0, xt.maxCount).map((B) => {
                const re = Sn(B);
                return re ? /* @__PURE__ */ u.jsx(E.Fragment, { children: $c({
                  option: re,
                  location: "badge",
                  onRemove: () => _n(B),
                  disabled: j
                }) }, B) : null;
              }).filter(Boolean),
              pe.length > xt.maxCount && /* @__PURE__ */ u.jsxs(
                ql,
                {
                  className: A(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    Gh({ variant: a }),
                    xt.compactMode && "text-xs px-1.5 py-0.5",
                    K && "flex-shrink-0 whitespace-nowrap",
                    "[&>svg]:pointer-events-auto",
                    j && "cursor-not-allowed"
                  ),
                  ...!j && { onRemove: zw },
                  children: [
                    "+ ",
                    pe.length - xt.maxCount,
                    " ",
                    w
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ u.jsx(
            Ou,
            {
              id: zn,
              role: "listbox",
              "aria-multiselectable": "true",
              "aria-label": v,
              className: A(
                "p-0 w-auto",
                at === "mobile" && "w-[85vw] max-w-[17.5rem]",
                at === "tablet" && "max-w-md w-[70vw]",
                at === "desktop" && "min-w-[18.75rem]",
                I
              ),
              style: {
                maxWidth: `min(${Lc.popoverMaxWidth}, 85vw)`,
                maxHeight: at === "mobile" ? "70vh" : "60vh",
                touchAction: "manipulation"
              },
              align: "start",
              children: /* @__PURE__ */ u.jsxs(
                Zy,
                {
                  filter: hr,
                  shouldFilter: !n && !Z,
                  children: [
                    F && /* @__PURE__ */ u.jsxs("header", { children: [
                      /* @__PURE__ */ u.jsx("div", { id: `${tn}-search-help`, className: "sr-only", children: p }),
                      /* @__PURE__ */ u.jsx(
                        Qy,
                        {
                          placeholder: P,
                          onKeyDown: Ca,
                          value: st,
                          onValueChange: (B) => {
                            en(B), n == null || n(B);
                          },
                          "aria-label": y,
                          "aria-describedby": `${tn}-search-help`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ u.jsxs(
                      Jy,
                      {
                        className: A(
                          "max-h-[calc(40vh-56px)] overflow-y-auto",
                          at === "mobile" && "max-h-[calc(50vh-56px)]"
                        ),
                        style: { overscrollBehaviorY: "contain" },
                        children: [
                          r && /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center`,
                              children: /* @__PURE__ */ u.jsx(yc.Circular, { size: "sm", children: o })
                            }
                          ),
                          !r && (Wc || Sa) && /* @__PURE__ */ u.jsx(eb, { children: L }),
                          !r && !Wc && !Sa && /* @__PURE__ */ u.jsx(
                            "div",
                            {
                              role: "status",
                              className: `px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center`,
                              children: H
                            }
                          ),
                          !r && !W && !Hw && !st && Wc && /* @__PURE__ */ u.jsx(ni, { children: /* @__PURE__ */ u.jsxs(
                            ri,
                            {
                              value: "select-all",
                              onSelect: Bw,
                              role: "option",
                              "aria-selected": pe.length === Be().filter((B) => !B.disabled).length,
                              "aria-label": `Select all ${Be().length} options`,
                              className: "cursor-pointer",
                              children: [
                                /* @__PURE__ */ u.jsx(
                                  ti,
                                  {
                                    className: "mr-xs",
                                    checked: pe.length === Be().filter((B) => !B.disabled).length
                                  }
                                ),
                                /* @__PURE__ */ u.jsxs("span", { children: [
                                  "(",
                                  x,
                                  Be().length > 20 ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                                    " - ",
                                    Be().length,
                                    " ",
                                    C
                                  ] }) : null,
                                  ")"
                                ] })
                              ]
                            },
                            "all"
                          ) }),
                          !r && (q(pr) ? (() => {
                            let B = 0;
                            const re = pr.reduce(
                              (qe, it) => qe + it.options.length,
                              0
                            ), ue = pr.map((qe) => {
                              const it = _a ? qe.options.filter(
                                (kn) => B++ < xe || pe.includes(kn.value)
                              ) : qe.options;
                              return { ...qe, options: it };
                            }), Ee = ue.reduce(
                              (qe, it) => qe + it.options.length,
                              0
                            ), Ae = (Tf ? re : Ve ?? re) - Ee;
                            return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                              ue.map((qe) => qe.options.length === 0 ? null : /* @__PURE__ */ u.jsx(
                                ni,
                                {
                                  heading: qe.heading,
                                  children: qe.options.map((it) => {
                                    const kn = pe.includes(
                                      it.value
                                    ), Br = jf(it);
                                    return /* @__PURE__ */ u.jsxs(
                                      ri,
                                      {
                                        value: `${it.value}:${it.label}`,
                                        onSelect: () => _n(it.value),
                                        role: "option",
                                        "aria-selected": kn,
                                        "aria-disabled": Br,
                                        "aria-label": `${it.label}${kn ? ", selected" : ", not selected"}${Br ? ", disabled" : ""}`,
                                        className: A(
                                          "cursor-pointer",
                                          Br && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                        ),
                                        disabled: Br,
                                        children: [
                                          /* @__PURE__ */ u.jsx(
                                            ti,
                                            {
                                              className: "mr-xs",
                                              checked: kn
                                            }
                                          ),
                                          /* @__PURE__ */ u.jsx("span", { className: "min-w-0 overflow-hidden", children: $c({
                                            option: it,
                                            location: "dropdown",
                                            isSelected: kn
                                          }) })
                                        ]
                                      },
                                      it.value
                                    );
                                  })
                                },
                                qe.heading
                              )),
                              _a && Ae > 0 && /* @__PURE__ */ u.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: et(Ae) })
                            ] });
                          })() : /* @__PURE__ */ u.jsx(ni, { children: (() => {
                            const B = _a ? pr.filter(
                              (ue, Ee) => Ee < xe || pe.includes(ue.value)
                            ) : pr, re = (Tf ? pr.length : Ve ?? pr.length) - B.length;
                            return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
                              B.map((ue) => {
                                const Ee = pe.includes(
                                  ue.value
                                ), Ae = jf(ue);
                                return /* @__PURE__ */ u.jsxs(
                                  ri,
                                  {
                                    value: `${ue.value}:${ue.label}`,
                                    onSelect: () => _n(ue.value),
                                    role: "option",
                                    "aria-selected": Ee,
                                    "aria-disabled": Ae,
                                    "aria-label": `${ue.label}${Ee ? ", selected" : ", not selected"}${Ae ? ", disabled" : ""}`,
                                    className: A(
                                      "cursor-pointer",
                                      Ae && "text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100"
                                    ),
                                    disabled: Ae,
                                    children: [
                                      /* @__PURE__ */ u.jsx(
                                        ti,
                                        {
                                          className: "mr-xs",
                                          checked: Ee
                                        }
                                      ),
                                      /* @__PURE__ */ u.jsx("span", { className: "min-w-0 overflow-hidden", children: $c({
                                        option: ue,
                                        location: "dropdown",
                                        isSelected: Ee
                                      }) })
                                    ]
                                  },
                                  ue.value
                                );
                              }),
                              _a && re > 0 && /* @__PURE__ */ u.jsx("div", { className: "text-body-secondary px-lg py-sm text-sm italic", children: et(re) })
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
                              Le,
                              {
                                intent: "text",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: If,
                                disabled: pe.length === 0,
                                children: b
                              }
                            ),
                            /* @__PURE__ */ u.jsx(
                              Le,
                              {
                                intent: "primary",
                                size: "xs",
                                className: "min-w-auto",
                                onClick: () => {
                                  s(pe), It(!1);
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
}, VA = E.forwardRef(
  FA
);
VA.displayName = "MultiSelect";
const zA = ae(
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
), BA = ae(
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
), HA = ae(
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
), Ql = ({
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
  const [y, v] = E.useState(""), x = E.useRef(null), b = e.filter(
    (k) => !("type" in k) || k.type === "Option" || k.type === void 0
  ).length >= d, g = (k) => {
    if (typeof k == "string") return k;
    if (typeof k == "number") return String(k);
    if (Array.isArray(k)) return k.map(g).join("");
    if (E.isValidElement(k)) {
      const { children: D } = k.props;
      if (D) return g(D);
    }
    return "";
  }, S = (k) => !b || !y || "type" in k && (k.type === "Group" || k.type === "Separator") ? !0 : "label" in k ? g(k.label).toLowerCase().includes(y.toLowerCase()) : !0, w = {
    ...p
  }, P = i !== void 0 ? String(i) : void 0, _ = (k) => {
    const D = e.find(
      (O) => "value" in O && String(O.value) === k
    );
    return D && "value" in D ? D.value : k;
  };
  return P !== void 0 && (w.value = P), l && (w.onValueChange = (k) => {
    const D = _(k);
    l(D);
  }), /* @__PURE__ */ u.jsxs(
    RE,
    {
      ...w,
      onOpenChange: (k) => {
        var D;
        k || v(""), (D = w.onOpenChange) == null || D.call(w, k);
      },
      children: [
        /* @__PURE__ */ u.jsxs(
          IE,
          {
            className: A(
              zA({ variant: s, intent: a, invalid: o }),
              "group",
              n
            ),
            children: [
              /* @__PURE__ */ u.jsxs("div", { className: "inline-flex items-center truncate", children: [
                Ze(r, {
                  className: A("shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5")
                }),
                /* @__PURE__ */ u.jsx("span", { className: "truncate text-ellipsis", children: /* @__PURE__ */ u.jsx(
                  TE,
                  {
                    placeholder: t || "Select an option",
                    className: A("hidden", {
                      "text-sm": s === "compact"
                    }),
                    children: h
                  }
                ) })
              ] }),
              !c && /* @__PURE__ */ u.jsx(
                jE,
                {
                  className: A("text-body-primary h-3.5 w-3.5 shrink-0", {
                    "text-body-disabled": p.disabled
                  }),
                  children: /* @__PURE__ */ u.jsx(
                    Xs,
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
        /* @__PURE__ */ u.jsx($E, { children: /* @__PURE__ */ u.jsxs(
          WE,
          {
            position: "popper",
            sideOffset: -1,
            className: A(BA({ variant: s }), n),
            children: [
              b && /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: `border-divider-default gap-xs px-md py-xs flex
                items-center border-b`,
                  children: [
                    /* @__PURE__ */ u.jsx(jd, { className: "text-body-secondary h-3.5 w-3.5 shrink-0" }),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: x,
                        className: `text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none`,
                        placeholder: f,
                        value: y,
                        onChange: (k) => v(k.target.value),
                        onKeyDown: (k) => k.stopPropagation()
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ u.jsx(YE, {}),
              /* @__PURE__ */ u.jsx(LE, { children: e.map((k, D) => {
                const O = S(k);
                switch (k.type) {
                  case "Group":
                    return /* @__PURE__ */ u.jsx(
                      FE,
                      {
                        className: A(!O && "hidden"),
                        children: /* @__PURE__ */ u.jsx(VE, { children: k.label })
                      },
                      D
                    );
                  case "Separator":
                    return /* @__PURE__ */ u.jsx(
                      UE,
                      {
                        className: A(
                          "border-divider-default h-px border-b",
                          !O && "hidden"
                        )
                      },
                      D
                    );
                  default:
                    return /* @__PURE__ */ u.jsxs(
                      zE,
                      {
                        value: String(k.value),
                        disabled: k.disabled ?? !1,
                        className: A(
                          HA({
                            variant: s,
                            isSelected: i === k.value
                          }),
                          !O && "hidden"
                        ),
                        children: [
                          Ze(k.icon, {
                            className: A("h-5 w-5", {
                              "-ml-xxs": s === "default",
                              "mr-xxs": s === "compact",
                              "text-interactive-disabled": k.disabled
                            })
                          }),
                          /* @__PURE__ */ u.jsx(
                            BE,
                            {
                              className: A("flex-1 break-words whitespace-normal", {
                                "text-interactive-disabled": k.disabled
                              }),
                              children: k.label
                            }
                          ),
                          /* @__PURE__ */ u.jsx(HE, {})
                        ]
                      },
                      D
                    );
                }
              }) }),
              /* @__PURE__ */ u.jsx(GE, {}),
              /* @__PURE__ */ u.jsx(KE, {})
            ]
          }
        ) })
      ]
    }
  );
};
Ql.displayName = "Select";
const YA = ae("gap-md flex items-center justify-start", {
  variants: {
    size: {
      default: "gap-md"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Uh = ae(
  "text-md text-body-primary text-right leading-[0.875rem] whitespace-nowrap"
), GA = E.forwardRef(
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
    ...y
  }, v) => {
    const x = () => {
      e > 1 && r(e - 1);
    }, C = () => {
      e < t && r(e + 1);
    }, b = (_) => {
      const k = parseInt(_, 10);
      a(k), e > 1 && r(1);
    }, g = (_) => {
      const k = parseInt(_, 10);
      r(k);
    }, S = s.map((_) => ({
      value: _.toString(),
      label: _.toString()
    })), w = Math.max(t, 1), P = Array.from(
      { length: w },
      (_, k) => k + 1
    ).map((_) => ({
      value: _.toString(),
      label: l(_, w, n)
    }));
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        ref: v,
        className: A(YA({ size: h }), p),
        ...y,
        children: [
          /* @__PURE__ */ u.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ u.jsx("span", { className: A(Uh()), children: i }),
            /* @__PURE__ */ u.jsx(
              Ql,
              {
                value: o.toString(),
                onValueChange: b,
                options: S
              }
            )
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "gap-xs flex items-center", children: [
            /* @__PURE__ */ u.jsx("span", { className: A(Uh()), children: c }),
            /* @__PURE__ */ u.jsx(
              Ql,
              {
                value: e.toString(),
                onValueChange: g,
                options: P,
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
              Le,
              {
                intent: "text",
                size: "sm",
                icon: c1,
                onClick: x,
                disabled: e <= 1,
                "aria-label": "Previous page"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Le,
              {
                intent: "text",
                size: "sm",
                icon: Op,
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
GA.displayName = "Pagination";
const UA = ae("gap-xs flex w-fit items-center", {
  variants: {
    disabled: {
      true: "text-body-disabled cursor-not-allowed",
      false: "text-body-primary cursor-pointer"
    }
  }
}), KA = ae(
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
), qA = ae(
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
), FT = ({
  value: e,
  label: t,
  id: n,
  children: r,
  disabled: o = !1,
  invalid: s = !1,
  ...a
}) => {
  const i = n || `radio-${e}`;
  return /* @__PURE__ */ u.jsxs("div", { className: A(UA({ disabled: o })), children: [
    /* @__PURE__ */ u.jsx(
      fE,
      {
        id: i,
        value: e,
        disabled: o,
        "aria-invalid": s,
        className: A(
          KA({
            disabled: o,
            invalid: s
          })
        ),
        ...a,
        children: /* @__PURE__ */ u.jsx(hE, { className: A(qA({ invalid: s })) })
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
}, VT = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ u.jsx(
  uE,
  {
    className: A("gap-xs flex flex-col", t),
    ...n,
    children: e
  }
), XA = ae(
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
), ZA = "gap-xxs px-sm disabled:bg-input-disabled flex min-h-full flex-1 items-center flex-wrap", QA = `rounded-l-sm gap-1 disabled:bg-input-disabled flex min-h-full flex-1 flex-row
  flex-wrap items-center justify-start`, JA = `min-w-24 min-h-6 text-md text-body-primary disabled:bg-input-disabled
  disabled:text-body-disabled placeholder:text-body-disabled flex-1
  bg-transparent leading-[100%] tracking-[0%] outline-none
  focus:placeholder-transparent disabled:cursor-not-allowed h-full`, eO = ae(
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
), tO = "gap-xs text-sm text-body-inverse flex-row", nO = ae(
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
), rO = `h-3 w-3 text-shape-primary flex items-center justify-center rounded-full
  disabled:cursor-not-allowed disabled:opacity-50`, oO = "gap-xs flex min-h-full flex-1 flex-row flex-nowrap items-center", sO = E.forwardRef(
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
    const y = i || t === "disabled", [v, x] = E.useState(
      d ?? []
    ), [C, b] = E.useState(!1);
    let g;
    typeof t == "string" ? g = t : y ? g = "disabled" : v.length > 0 ? g = "filled" : g = "default";
    const S = E.useRef(g), { compositionHandlers: w, guardKeyHandler: P } = wc();
    fn(() => {
      S.current === "filled" && g !== "filled" && x([]), S.current = g;
    }, [g]);
    const _ = (O) => {
      y || o && o(O);
    }, k = (O) => {
      if (!y) {
        if (O.key === "Enter" && n.trim()) {
          const T = [...v, n.trim()];
          if (x(T), o) {
            const W = {
              ...O,
              target: { value: "" }
            };
            o(W);
          }
          f && s && s(T), O.preventDefault();
        }
        if ((O.key === "Backspace" || O.key === "Delete") && !n && v.length > 0) {
          const T = v.slice(0, -1);
          x(T), f && s && s(T), O.preventDefault();
        }
      }
    }, D = (O) => {
      if (y) return;
      const T = v.filter((W, F) => F !== O);
      x(T), f && s && s(T);
    };
    return /* @__PURE__ */ u.jsxs(
      "div",
      {
        className: A(
          "group relative flex flex-col",
          y ? "pointer-events-none" : "",
          r
        ),
        "aria-disabled": y ? "true" : void 0,
        children: [
          /* @__PURE__ */ u.jsxs(
            "div",
            {
              className: A(
                XA({
                  size: e,
                  state: g
                }),
                "group/wrapper"
              ),
              children: [
                /* @__PURE__ */ u.jsxs("div", { className: A(ZA), children: [
                  /* @__PURE__ */ u.jsxs("div", { className: A(oO, QA), children: [
                    /* @__PURE__ */ u.jsx(
                      "span",
                      {
                        className: `text-shape-primary
                  disabled:text-shape-interactive-disabled flex items-center`,
                        children: /* @__PURE__ */ u.jsx(jd, { size: 20 })
                      }
                    ),
                    v.map((O, T) => /* @__PURE__ */ u.jsxs("span", { className: nO({ size: e }), children: [
                      /* @__PURE__ */ u.jsx("span", { children: O }),
                      /* @__PURE__ */ u.jsx(
                        "button",
                        {
                          type: "button",
                          className: A(
                            rO,
                            "bg-surface-primary cursor-pointer"
                          ),
                          onClick: (W) => {
                            W.stopPropagation(), W.preventDefault(), D(T);
                          },
                          onMouseDown: (W) => {
                            W.preventDefault();
                          },
                          tabIndex: -1,
                          "aria-label": "Remove keyword",
                          disabled: y,
                          children: /* @__PURE__ */ u.jsx(_l, { size: 8 })
                        }
                      )
                    ] }, T)),
                    /* @__PURE__ */ u.jsx(
                      "input",
                      {
                        ref: p,
                        className: A(JA),
                        type: "text",
                        value: n,
                        onChange: _,
                        onKeyDown: P(k),
                        onCompositionStart: w.onCompositionStart,
                        onCompositionEnd: w.onCompositionEnd,
                        onFocus: (O) => {
                          var T;
                          b(!0), (T = h.onFocus) == null || T.call(h, O);
                        },
                        onBlur: (O) => {
                          var T;
                          b(!1), (T = h.onBlur) == null || T.call(h, O);
                        },
                        placeholder: g === "filled" || v.length > 0 ? "" : a,
                        disabled: y,
                        ...h
                      }
                    )
                  ] }),
                  (n || v.length > 0) && !y && /* @__PURE__ */ u.jsx(
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
                      children: /* @__PURE__ */ u.jsx(_l, { size: 20 })
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsx(
                  "button",
                  {
                    type: "button",
                    className: A(
                      eO({
                        size: e
                      })
                    ),
                    onClick: () => {
                      let O = v;
                      n.trim() && (O = [...v, n.trim()], x(O), o && o({
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
          c && /* @__PURE__ */ u.jsx(
            "div",
            {
              className: A(
                tO,
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
sO.displayName = "SearchBar";
const tb = E.createContext(null), aO = () => {
  const e = E.useContext(tb);
  if (!e)
    throw new Error(
      "SegmentedControl.Option must be rendered inside SegmentedControl.Group"
    );
  return e;
}, iO = ae(
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
), nb = E.forwardRef(
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
    const d = E.useId(), h = a ?? `segmented-control-${d}`, p = t !== void 0, [y, v] = E.useState(n), x = p ? t : y, C = E.useCallback(
      (g) => {
        p || v(g), r == null || r(g);
      },
      [p, r]
    ), b = E.useMemo(
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
    return /* @__PURE__ */ u.jsx(tb.Provider, { value: b, children: /* @__PURE__ */ u.jsx(
      "div",
      {
        ref: f,
        id: a,
        role: "radiogroup",
        "aria-invalid": o || void 0,
        "aria-disabled": s || void 0,
        className: A(iO({ invalid: o }), i),
        ...l,
        children: c
      }
    ) });
  }
);
nb.displayName = "SegmentedControl.Group";
const cO = ae(
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
), rb = ({
  value: e,
  disabled: t = !1,
  leadingIcon: n,
  id: r,
  className: o,
  children: s
}) => {
  const a = aO(), i = a.value !== void 0 && String(a.value) === String(e), c = t || a.disabled, l = r ?? `${a.idPrefix}-${encodeURIComponent(String(e))}`;
  return /* @__PURE__ */ u.jsxs(
    "label",
    {
      htmlFor: l,
      className: A(cO({ selected: i, disabled: c }), o),
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
        n && Ze(n, { size: 16, className: "shrink-0" }),
        s
      ]
    }
  );
};
rb.displayName = "SegmentedControl.Option";
const zT = {
  Group: nb,
  Option: rb
}, ob = Ks(void 0), sb = Ks(!1), lO = ({
  defaultCollapsed: e = !1,
  children: t
}) => {
  const [n, r] = E.useState(e), o = E.useCallback(() => {
    r((a) => !a);
  }, []), s = E.useMemo(
    () => ({
      isCollapsed: n,
      setIsCollapsed: r,
      toggleCollapsed: o
    }),
    [n, r, o]
  );
  return /* @__PURE__ */ u.jsx(ob.Provider, { value: s, children: t });
}, dO = ({
  children: e
}) => /* @__PURE__ */ u.jsx(sb.Provider, { value: !0, children: e }), fa = () => {
  const e = As(ob);
  if (e === void 0)
    throw new Error(
      "useSideNavigation must be used within a SideNavigationProvider"
    );
  const t = As(sb);
  return { ...e, isInFooter: t };
}, ab = E.forwardRef(({ className: e, collapseLabel: t, expandLabel: n, ...r }, o) => {
  const { isCollapsed: s, toggleCollapsed: a } = fa(), i = s ? n : t, c = /* @__PURE__ */ u.jsx(
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
      onClick: a,
      ...r,
      children: s ? /* @__PURE__ */ u.jsx(S1, { className: "size-5", strokeWidth: 2 }) : /* @__PURE__ */ u.jsx(w1, { className: "size-5", strokeWidth: 2 })
    }
  );
  return i ? /* @__PURE__ */ u.jsx(Nn, { content: i, side: "right", delayDuration: 0, children: c }) : c;
});
ab.displayName = "SideNavigationCollapseButton";
const uO = ae(
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
), fO = E.forwardRef(({ defaultCollapsed: e = !1, ...t }, n) => /* @__PURE__ */ u.jsx(lO, { defaultCollapsed: e, children: /* @__PURE__ */ u.jsx(ib, { ref: n, ...t }) }));
fO.displayName = "SideNavigation";
const ib = E.forwardRef(
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
    const { isCollapsed: f } = fa(), d = t || (f ? "collapsed" : "expanded");
    return /* @__PURE__ */ u.jsxs(
      "nav",
      {
        ref: l,
        className: A(
          uO({ width: d }),
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
              className: A(
                "p-sm",
                f ? "pr-sm flex justify-center" : "pr-md"
              ),
              children: n
            }
          ),
          /* @__PURE__ */ u.jsx("div", { className: "gap-sm flex flex-1 flex-col overflow-y-auto", children: o }),
          r && /* @__PURE__ */ u.jsx("div", { className: "px-xs py-md", children: /* @__PURE__ */ u.jsx(dO, { children: r }) }),
          s && /* @__PURE__ */ u.jsx(
            ab,
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
ib.displayName = "SideNavigationContent";
const hO = ae(
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
), pO = E.forwardRef(
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
    const { isCollapsed: f, isInFooter: d } = fa(), h = r ? No : "button", p = i ? "disabled" : t, y = /* @__PURE__ */ u.jsx(
      h,
      {
        ref: l,
        className: A(
          hO({
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
    return f && s ? /* @__PURE__ */ u.jsx(Nn, { content: s, side: "right", delayDuration: 0, children: y }) : y;
  }
);
pO.displayName = "SideNavigationItem";
const mO = ae("flex flex-col", {
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
}), vO = E.forwardRef(({ className: e, title: t, children: n, isLast: r, ...o }, s) => {
  const { isCollapsed: a } = fa();
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: s,
      className: A(
        mO({ isCollapsed: a, isLast: r }),
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
vO.displayName = "SideNavigationSection";
const gO = "data:image/svg+xml,%3csvg%20width='93'%20height='22'%20viewBox='0%200%2093%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_14241_217135)'%3e%3cpath%20d='M3.81635%2011.2513C3.81635%2011.0133%203.82802%2010.779%203.85138%2010.5468C5.9749%206.47983%2015.6303%209.35397%2017.5706%2010.4648C17.5998%2010.7226%2017.6144%2010.9855%2017.6144%2011.2513C17.6144%2015.0737%2014.5252%2018.1719%2010.7154%2018.1719C6.90562%2018.1719%203.81635%2015.073%203.81635%2011.2513Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M19.5233%205.12733L17.8801%206.77566C18.7094%208.10545%2019.1532%209.64467%2019.1532%2011.252C19.1532%2013.5125%2018.2758%2015.6383%2016.6822%2017.2368C15.0887%2018.8353%2012.9696%2019.7155%2010.7161%2019.7155C8.46266%2019.7155%206.34353%2018.8353%204.74998%2017.2368C3.15643%2015.6383%202.279%2013.5125%202.279%2011.252C2.279%208.99149%203.15643%206.86573%204.74998%205.26719C6.34353%203.66865%208.46266%202.78847%2010.7161%202.78847C12.3199%202.78847%2013.8558%203.23515%2015.1821%204.06847L16.8246%202.42087C15.0916%201.21263%2012.9863%200.503067%2010.7161%200.503067C4.79743%200.501602%200%205.31479%200%2011.2513C0%2017.1877%204.79743%2022.0009%2010.7161%2022.0009C16.6348%2022.0009%2021.4322%2017.1885%2021.4322%2011.2513C21.4322%208.97538%2020.7263%206.86499%2019.5233%205.12733Z'%20fill='%230F8277'/%3e%3cpath%20d='M19.0934%202.84778C19.554%203.30984%2019.9541%203.81584%2020.2913%204.35625L21.9345%202.70792C21.2031%201.65199%2020.2884%200.733731%2019.2365%200L17.594%201.6476C18.1313%201.98517%2018.635%202.38572%2019.0941%202.84705L19.0934%202.84778Z'%20fill='%230F8277'/%3e%3cpath%20d='M15.7953%207.5482C16.2211%207.5482%2016.5662%207.202%2016.5662%206.77493C16.5662%206.34787%2016.2211%206.00166%2015.7953%206.00166C15.3696%206.00166%2015.0245%206.34787%2015.0245%206.77493C15.0245%207.202%2015.3696%207.5482%2015.7953%207.5482Z'%20fill='%230F8277'/%3e%3cpath%20d='M11.8761%209.86655C12.4397%209.86655%2012.8966%209.40822%2012.8966%208.84284C12.8966%208.27746%2012.4397%207.81913%2011.8761%207.81913C11.3124%207.81913%2010.8555%208.27746%2010.8555%208.84284C10.8555%209.40822%2011.3124%209.86655%2011.8761%209.86655Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.1103%2014.5574C12.8198%2014.5574%2013.395%2013.9804%2013.395%2013.2687C13.395%2012.5569%2012.8198%2011.9799%2012.1103%2011.9799C11.4007%2011.9799%2010.8255%2012.5569%2010.8255%2013.2687C10.8255%2013.9804%2011.4007%2014.5574%2012.1103%2014.5574Z'%20fill='%230F8277'/%3e%3cpath%20d='M31.3234%2017.8885C30.4734%2017.8885%2029.6291%2017.7355%2028.7904%2017.4295C27.9631%2017.1121%2027.2321%2016.6588%2026.5974%2016.0695L28.3314%2013.9785C28.7848%2014.3638%2029.2834%2014.6755%2029.8274%2014.9135C30.3828%2015.1515%2030.9041%2015.2705%2031.3914%2015.2705C31.9354%2015.2705%2032.3434%2015.1741%2032.6154%2014.9815C32.8988%2014.7888%2033.0404%2014.5168%2033.0404%2014.1655C33.0404%2013.9388%2032.9724%2013.7518%2032.8364%2013.6045C32.7004%2013.4458%2032.5304%2013.3155%2032.3264%2013.2135C32.1224%2013.1115%2031.7654%2012.9528%2031.2554%2012.7375L29.6404%2012.0575C28.8924%2011.7628%2028.2748%2011.3265%2027.7874%2010.7485C27.3114%2010.1591%2027.0734%209.43947%2027.0734%208.58947C27.0734%207.8868%2027.2661%207.24647%2027.6514%206.66847C28.0481%206.07913%2028.5978%205.61447%2029.3004%205.27447C30.0031%204.93447%2030.7908%204.76447%2031.6634%204.76447C32.4114%204.76447%2033.1481%204.90613%2033.8734%205.18947C34.5988%205.4728%2035.2334%205.88647%2035.7774%206.43047L34.2644%208.33447C33.8338%208.0058%2033.4088%207.76213%2032.9894%207.60347C32.5814%207.4448%2032.1394%207.36547%2031.6634%207.36547C31.1988%207.36547%2030.8304%207.45613%2030.5584%207.63747C30.2978%207.8188%2030.1674%208.0738%2030.1674%208.40247C30.1674%208.62913%2030.2411%208.8218%2030.3884%208.98047C30.5471%209.1278%2030.7398%209.25813%2030.9664%209.37147C31.1931%209.47347%2031.5614%209.62647%2032.0714%209.83047L33.6524%2010.4595C34.4684%2010.7881%2035.0861%2011.2358%2035.5054%2011.8025C35.9361%2012.3578%2036.1514%2013.0661%2036.1514%2013.9275C36.1514%2014.6415%2035.9588%2015.2988%2035.5734%2015.8995C35.1881%2016.5001%2034.6271%2016.9818%2033.8904%2017.3445C33.1651%2017.7071%2032.3094%2017.8885%2031.3234%2017.8885ZM42.2319%204.98547C44.2379%204.98547%2045.8075%205.50113%2046.9409%206.53247C48.0742%207.55247%2048.6409%209.1278%2048.6409%2011.2585C48.6409%2013.3891%2048.0799%2014.9871%2046.9579%2016.0525C45.8472%2017.1178%2044.3285%2017.6505%2042.4019%2017.6505H38.5939V4.98547H42.2319ZM42.0449%2015.2025C43.1442%2015.2025%2043.9999%2014.9021%2044.6119%2014.3015C45.2239%2013.6895%2045.5299%2012.6751%2045.5299%2011.2585C45.5299%209.8418%2045.2239%208.85013%2044.6119%208.28347C44.0112%207.70547%2043.1555%207.41647%2042.0449%207.41647H41.6369V15.2025H42.0449ZM54.9056%2017.8885C54.0556%2017.8885%2053.2113%2017.7355%2052.3726%2017.4295C51.5453%2017.1121%2050.8143%2016.6588%2050.1796%2016.0695L51.9136%2013.9785C52.367%2014.3638%2052.8656%2014.6755%2053.4096%2014.9135C53.965%2015.1515%2054.4863%2015.2705%2054.9736%2015.2705C55.5176%2015.2705%2055.9256%2015.1741%2056.1976%2014.9815C56.481%2014.7888%2056.6226%2014.5168%2056.6226%2014.1655C56.6226%2013.9388%2056.5546%2013.7518%2056.4186%2013.6045C56.2826%2013.4458%2056.1126%2013.3155%2055.9086%2013.2135C55.7046%2013.1115%2055.3476%2012.9528%2054.8376%2012.7375L53.2226%2012.0575C52.4746%2011.7628%2051.857%2011.3265%2051.3696%2010.7485C50.8936%2010.1591%2050.6556%209.43947%2050.6556%208.58947C50.6556%207.8868%2050.8483%207.24647%2051.2336%206.66847C51.6303%206.07913%2052.18%205.61447%2052.8826%205.27447C53.5853%204.93447%2054.373%204.76447%2055.2456%204.76447C55.9936%204.76447%2056.7303%204.90613%2057.4556%205.18947C58.181%205.4728%2058.8156%205.88647%2059.3596%206.43047L57.8466%208.33447C57.416%208.0058%2056.991%207.76213%2056.5716%207.60347C56.1636%207.4448%2055.7216%207.36547%2055.2456%207.36547C54.781%207.36547%2054.4126%207.45613%2054.1406%207.63747C53.88%207.8188%2053.7496%208.0738%2053.7496%208.40247C53.7496%208.62913%2053.8233%208.8218%2053.9706%208.98047C54.1293%209.1278%2054.322%209.25813%2054.5486%209.37147C54.7753%209.47347%2055.1436%209.62647%2055.6536%209.83047L57.2346%2010.4595C58.0506%2010.7881%2058.6683%2011.2358%2059.0876%2011.8025C59.5183%2012.3578%2059.7336%2013.0661%2059.7336%2013.9275C59.7336%2014.6415%2059.541%2015.2988%2059.1556%2015.8995C58.7703%2016.5001%2058.2093%2016.9818%2057.4726%2017.3445C56.7473%2017.7071%2055.8916%2017.8885%2054.9056%2017.8885Z'%20fill='%231A3C40'/%3e%3cpath%20d='M73.3844%206.51046C73.6844%206.95046%2073.8644%207.24047%2073.9244%207.38047L71.8994%207.92047C71.7494%207.56047%2071.4744%207.09046%2071.0744%206.51046H70.3844C70.0844%206.88046%2069.7694%207.21546%2069.4394%207.51547L69.4244%207.50047V7.99547H75.1394V11.0855H73.0094V9.60047H63.9194V11.0855H61.8794V7.99547H67.3244V7.03547H68.6444C68.2544%206.81546%2067.8944%206.64046%2067.5644%206.51046H66.3794C66.5894%206.87046%2066.7344%207.15047%2066.8144%207.35047L64.8644%207.90547C64.7344%207.51547%2064.5094%207.05046%2064.1894%206.51046H64.1744C63.7844%207.02047%2063.3944%207.47047%2063.0044%207.86047C62.7944%207.68047%2062.5044%207.47546%2062.1344%207.24546C61.7744%207.00547%2061.4744%206.82047%2061.2344%206.69046C61.6944%206.33046%2062.1244%205.88046%2062.5244%205.34047C62.9344%204.79047%2063.2544%204.23546%2063.4844%203.67546L65.5094%204.23046C65.3894%204.49046%2065.2944%204.68546%2065.2244%204.81546H68.2094V5.92546C68.5294%205.61546%2068.8194%205.26546%2069.0794%204.87547C69.3394%204.47546%2069.5494%204.07546%2069.7094%203.67546L71.7794%204.18547C71.7194%204.32547%2071.6194%204.53547%2071.4794%204.81546H75.4394V6.51046H73.3844ZM66.3794%2013.6205V14.1005H73.9094V18.1055H71.7344V17.7455H66.3794V18.1055H64.3094V10.0655H72.6644V13.6205H66.3794ZM70.4894%2011.5955H66.3794V12.0905H70.4894V11.5955ZM71.7344%2015.6605H66.3794V16.1705H71.7344V15.6605ZM88.4594%2015.6455H91.9694V17.6105H82.3094V15.6455H86.2244V14.5655H83.2994V12.6155H86.2244V11.5955H83.3444V4.42546H91.3394V11.5955H88.4594V12.6155H91.4744V14.5655H88.4594V15.6455ZM83.0894%2015.1355C81.8294%2015.5655%2080.1444%2016.1205%2078.0344%2016.8005L77.5544%2014.5805C77.8544%2014.5105%2078.4294%2014.3555%2079.2794%2014.1155V10.9055H77.8694V8.91047H79.2794V6.61547H77.7344V4.60546H82.8794V6.61547H81.3494V8.91047H82.6094V10.9055H81.3494V13.5005L82.7144%2013.0655L83.0894%2015.1355ZM85.3094%206.25547V7.15547H86.4344V6.25547H85.3094ZM89.2694%207.15547V6.25547H88.2494V7.15547H89.2694ZM85.3094%208.85046V9.76547H86.4344V8.85046H85.3094ZM89.2694%209.76547V8.85046H88.2494V9.76547H89.2694Z'%20fill='%231A3C40'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_14241_217135'%3e%3crect%20width='92.9344'%20height='22.0009'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", yO = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_11812_198882)'%3e%3cpath%20d='M4.06805%2012.2716C4.06805%2012.016%204.08416%2011.7523%204.10831%2011.5047C6.45128%207.07058%2017.1033%2010.2024%2019.237%2011.4168C19.2692%2011.6964%2019.2853%2011.984%2019.2853%2012.2716C19.2853%2016.4421%2015.8795%2019.8216%2011.6767%2019.8216C7.47381%2019.8216%204.06805%2016.4421%204.06805%2012.2716Z'%20fill='%23DDEBE9'/%3e%3cpath%20d='M21.3947%205.59254L19.5832%207.39015C20.501%208.84421%2020.9841%2010.522%2020.9841%2012.2716C20.9841%2014.7403%2020.0179%2017.0573%2018.2547%2018.7989C16.4995%2020.5406%2014.1565%2021.5073%2011.6767%2021.5073C9.18876%2021.5073%206.85385%2020.5486%205.09863%2018.7989C3.34342%2017.0573%202.3692%2014.7324%202.3692%2012.2716C2.3692%209.80293%203.33537%207.48602%205.09863%205.74434C6.85385%204.00266%209.19681%203.03595%2011.6767%203.03595C13.448%203.03595%2015.1388%203.5233%2016.6041%204.43409L18.4157%202.63648C16.5075%201.31824%2014.1807%200.543276%2011.6767%200.543276C5.14694%200.543276%20-0.142853%205.79228%20-0.142853%2012.2716C-0.142853%2018.751%205.14694%2024%2011.6767%2024C18.2064%2024%2023.4962%2018.751%2023.4962%2012.2716C23.4962%209.78695%2022.7152%207.48602%2021.3947%205.59254ZM20.9197%203.10786C21.4269%203.61119%2021.8698%204.16245%2022.2401%204.75366L24.0517%202.95606C23.2466%201.80559%2022.2401%200.798935%2021.0727%200L19.2611%201.7976C19.8569%202.16511%2020.4125%202.60453%2020.9197%203.10786Z'%20fill='%230F8277'/%3e%3cpath%20d='M17.2805%208.23702C17.7518%208.23702%2018.1339%207.85786%2018.1339%207.39015C18.1339%206.92243%2017.7518%206.54328%2017.2805%206.54328C16.8091%206.54328%2016.427%206.92243%2016.427%207.39015C16.427%207.85786%2016.8091%208.23702%2017.2805%208.23702Z'%20fill='%230F8277'/%3e%3cpath%20d='M12.9569%2010.7617C13.5794%2010.7617%2014.0841%2010.2609%2014.0841%209.64314C14.0841%209.02541%2013.5794%208.52464%2012.9569%208.52464C12.3343%208.52464%2011.8297%209.02541%2011.8297%209.64314C11.8297%2010.2609%2012.3343%2010.7617%2012.9569%2010.7617Z'%20fill='%230F8277'/%3e%3cpath%20d='M13.2145%2015.8828C13.9971%2015.8828%2014.6315%2015.2533%2014.6315%2014.4767C14.6315%2013.7001%2013.9971%2013.0706%2013.2145%2013.0706C12.4319%2013.0706%2011.7974%2013.7001%2011.7974%2014.4767C11.7974%2015.2533%2012.4319%2015.8828%2013.2145%2015.8828Z'%20fill='%230F8277'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_11812_198882'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", BT = () => {
  const { isCollapsed: e } = fa();
  return /* @__PURE__ */ u.jsxs("div", { className: "flex", children: [
    /* @__PURE__ */ u.jsx(
      "img",
      {
        src: gO,
        alt: "SDS管理",
        className: `h-auto w-[5.8125rem] ${e ? "absolute opacity-0" : "opacity-100"}`
      }
    ),
    /* @__PURE__ */ u.jsx(
      "img",
      {
        src: yO,
        alt: "SDS管理",
        className: `h-auto w-[1.375rem] ${e ? "opacity-100" : "absolute opacity-0"}`
      }
    )
  ] });
};
var bO = Object.defineProperty, xO = Object.defineProperties, wO = Object.getOwnPropertyDescriptors, Kh = Object.getOwnPropertySymbols, CO = Object.prototype.hasOwnProperty, SO = Object.prototype.propertyIsEnumerable, qh = (e, t, n) => t in e ? bO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qr = (e, t) => {
  for (var n in t || (t = {}))
    CO.call(t, n) && qh(e, n, t[n]);
  if (Kh)
    for (var n of Kh(t))
      SO.call(t, n) && qh(e, n, t[n]);
  return e;
}, Xr = (e, t) => xO(e, wO(t));
function _O(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Va(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function cl(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function kO(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (g, S) => g === S || g !== null && typeof g == "object" && "id" in g && g.id === S;
  if (Array.isArray(e)) {
    const g = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (g === -1 || S === -1) {
      if (cl(s)) {
        const w = s.initialIndex, P = s.index;
        return w === P || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, P);
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
  let f = -1, d, h = -1, p;
  for (const [g, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (d = g)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = g)), f !== -1 && h !== -1)
      break;
  if (f === -1 && cl(s)) {
    const g = s.initialGroup == null ? void 0 : Va(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Va(e, s.group), P = s.index;
    if (g == null || w == null || g === w && S === P)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return Xr(qr({}, e), {
        [g]: n(e[g], S, P)
      });
    const _ = e[g][S];
    return Xr(qr({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, P),
        _,
        ...e[w].slice(P)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: y } = s.manager, v = (o = (r = y.shape) == null ? void 0 : r.current.center) != null ? o : y.position.current;
  if (p == null) {
    const g = Va(e, a.id);
    if (g != null) {
      const S = a.shape && v.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (d == null || p == null || d === p && f === h) {
    if (d != null && d === p && f === h && cl(s)) {
      const g = s.group == null ? void 0 : Va(e, s.group), S = s.group != null && g !== d, w = s.index !== f;
      if (S || w) {
        const P = s.group == null ? d : g;
        if (P != null) {
          if (d === P)
            return Xr(qr({}, e), {
              [d]: n(
                e[d],
                f,
                s.index
              )
            });
          const _ = e[d][f];
          return Xr(qr({}, e), {
            [d]: [
              ...e[d].slice(0, f),
              ...e[d].slice(f + 1)
            ],
            [P]: [
              ...e[P].slice(0, s.index),
              _,
              ...e[P].slice(s.index)
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
  const C = a.shape && Math.round(v.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[d][f];
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
function EO(e, t) {
  return kO(e, t, _O);
}
var PO = Symbol.for("preact-signals");
function _c() {
  if (Dn > 1)
    Dn--;
  else {
    var e, t = !1;
    for ((function() {
      var o = Pi;
      for (Pi = void 0; o !== void 0; ) {
        var s = o.S;
        if (s.v === o.v) for (var a = s.t; a !== void 0; a = a.x) a.i === o.i && (a.i = s.i);
        o = o.o;
      }
    })(); _s !== void 0; ) {
      var n = _s;
      for (_s = void 0, Ei++; n !== void 0; ) {
        var r = n.u;
        if (n.u = void 0, n.f &= -3, !(8 & n.f) && lb(n)) try {
          n.c();
        } catch (o) {
          t || (e = o, t = !0);
        }
        n = r;
      }
    }
    if (Ei = 0, Dn--, t) throw e;
  }
}
function je(e) {
  if (Dn > 0) return e();
  Jl = ++MO, Dn++;
  try {
    return e();
  } finally {
    _c();
  }
}
var Ss, Re = void 0;
function we(e) {
  var t = Re, n = Ss;
  Re = void 0, Ss = void 0;
  try {
    return e();
  } finally {
    Re = t, Ss = n;
  }
}
var _s = void 0, Dn = 0, Ei = 0, MO = 0, Jl = 0, Pi = void 0, Mi = 0;
function cb(e) {
  if (Re !== void 0) {
    var t = e.n;
    if (t === void 0 || t.t !== Re)
      return t = { i: 0, S: e, p: Re.s, n: void 0, t: Re, e: void 0, x: void 0, r: t }, Re.s !== void 0 && (Re.s.n = t), Re.s = t, e.n = t, 32 & Re.f && e.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = Re.s, t.n = void 0, Re.s.n = t, Re.s = t), t;
  }
}
function yt(e, t) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.l = 0, this.W = t == null ? void 0 : t.watched, this.Z = t == null ? void 0 : t.unwatched, this.name = t == null ? void 0 : t.name;
}
yt.prototype.brand = PO;
yt.prototype.h = function() {
  return !0;
};
yt.prototype.S = function(e) {
  var t = this, n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : we(function() {
    var r;
    (r = t.W) == null || r.call(t);
  }));
};
yt.prototype.U = function(e) {
  var t = this;
  if (this.t !== void 0) {
    var n = e.e, r = e.x;
    n !== void 0 && (n.x = r, e.e = void 0), r !== void 0 && (r.e = n, e.x = void 0), e === this.t && (this.t = r, r === void 0 && we(function() {
      var o;
      (o = t.Z) == null || o.call(t);
    }));
  }
};
yt.prototype.subscribe = function(e) {
  var t = this;
  return Vt(function() {
    var n = t.value;
    we(function() {
      return e(n);
    });
  }, { name: "sub" });
};
yt.prototype.valueOf = function() {
  return this.value;
};
yt.prototype.toString = function() {
  return this.value + "";
};
yt.prototype.toJSON = function() {
  return this.value;
};
yt.prototype.peek = function() {
  var e = this;
  return we(function() {
    return e.value;
  });
};
Object.defineProperty(yt.prototype, "value", { get: function() {
  var e = cb(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set: function(e) {
  if (e !== this.v) {
    if (Ei > 100) throw new Error("Cycle detected");
    (function(n) {
      Dn !== 0 && Ei === 0 && n.l !== Jl && (n.l = Jl, Pi = { S: n, v: n.v, i: n.i, o: Pi });
    })(this), this.v = e, this.i++, Mi++, Dn++;
    try {
      for (var t = this.t; t !== void 0; t = t.x) t.t.N();
    } finally {
      _c();
    }
  }
} });
function Wo(e, t) {
  return new yt(e, t);
}
function lb(e) {
  for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
  return !1;
}
function db(e) {
  for (var t = e.s; t !== void 0; t = t.n) {
    var n = t.S.n;
    if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
      e.s = t;
      break;
    }
  }
}
function ub(e) {
  for (var t = e.s, n = void 0; t !== void 0; ) {
    var r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Lr(e, t) {
  yt.call(this, void 0, t), this.x = e, this.s = void 0, this.g = Mi - 1, this.f = 4;
}
Lr.prototype = new yt();
Lr.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Mi)) return !0;
  if (this.g = Mi, this.f |= 1, this.i > 0 && !lb(this))
    return this.f &= -2, !0;
  var e = Re;
  try {
    db(this), Re = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return Re = e, ub(this), this.f &= -2, !0;
};
Lr.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
  }
  yt.prototype.S.call(this, e);
};
Lr.prototype.U = function(e) {
  if (this.t !== void 0 && (yt.prototype.U.call(this, e), this.t === void 0)) {
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
  var e = cb(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function Xh(e, t) {
  return new Lr(e, t);
}
function fb(e) {
  var t = e.m;
  if (e.m = void 0, typeof t == "function") {
    Dn++;
    var n = Re;
    Re = void 0;
    try {
      t();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Iu(e), r;
    } finally {
      Re = n, _c();
    }
  }
}
function Iu(e) {
  for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
  e.x = void 0, e.s = void 0, fb(e);
}
function NO(e) {
  if (Re !== this) throw new Error("Out-of-order effect");
  ub(this), Re = e, this.f &= -2, 8 & this.f && Iu(this), _c();
}
function Lo(e, t) {
  this.x = e, this.m = void 0, this.s = void 0, this.u = void 0, this.f = 32, this.name = t == null ? void 0 : t.name, Ss && Ss.push(this);
}
Lo.prototype.c = function() {
  var e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    var t = this.x();
    typeof t == "function" && (this.m = t);
  } finally {
    e();
  }
};
Lo.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, fb(this), db(this), Dn++;
  var e = Re;
  return Re = this, NO.bind(this, e);
};
Lo.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.u = _s, _s = this);
};
Lo.prototype.d = function() {
  this.f |= 8, 1 & this.f || Iu(this);
};
Lo.prototype.dispose = function() {
  this.d();
};
function Vt(e, t) {
  var n = new Lo(e, t);
  try {
    n.c();
  } catch (o) {
    throw n.d(), o;
  }
  var r = n.d.bind(n);
  return r[Symbol.dispose] = r, r;
}
var DO = Object.create, Tu = Object.defineProperty, AO = Object.defineProperties, OO = Object.getOwnPropertyDescriptor, RO = Object.getOwnPropertyDescriptors, Zh = Object.getOwnPropertySymbols, IO = Object.prototype.hasOwnProperty, TO = Object.prototype.propertyIsEnumerable, jO = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Fo = (e) => {
  throw TypeError(e);
}, ed = (e, t, n) => t in e ? Tu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $O = (e, t) => {
  for (var n in t || (t = {}))
    IO.call(t, n) && ed(e, n, t[n]);
  if (Zh)
    for (var n of Zh(t))
      TO.call(t, n) && ed(e, n, t[n]);
  return e;
}, WO = (e, t) => AO(e, RO(t)), Qh = (e, t) => Tu(e, "name", { value: t, configurable: !0 }), LO = (e) => {
  var t;
  return [, , , DO((t = void 0) != null ? t : null)];
}, hb = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], as = (e) => e !== void 0 && typeof e != "function" ? Fo("Function expected") : e, FO = (e, t, n, r, o) => ({ kind: hb[e], name: t, metadata: r, addInitializer: (s) => n._ ? Fo("Already initialized") : o.push(as(s || null)) }), pb = (e, t) => ed(t, jO("metadata"), e[3]), vr = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Vo = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, v = hb[d + 5], x = d > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && OO(d < 4 ? o : { get [n]() {
    return jt(this, s);
  }, set [n](S) {
    return Kn(this, s, S);
  } }, n));
  d ? p && d < 4 && Qh(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : Qh(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = FO(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => VO(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? jt : zO)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => Kn(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[g])(d ? d < 4 ? p ? s : b[v] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? as(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[v] = i : o = i) : typeof i != "object" || i === null ? Fo("Object expected") : (as(a = i.get) && (b.get = a), as(a = i.set) && (b.set = a), as(a = i.init) && x.unshift(a));
  return d || pb(e, o), b && Tu(o, n, b), p ? d ^ 4 ? s : b : o;
}, ju = (e, t, n) => t.has(e) || Fo("Cannot " + n), VO = (e, t) => Object(t) !== t ? Fo('Cannot use the "in" operator on this value') : e.has(t), jt = (e, t, n) => (ju(e, t, "read from private field"), n ? n.call(e) : t.get(e)), is = (e, t, n) => t.has(e) ? Fo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Kn = (e, t, n, r) => (ju(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), zO = (e, t, n) => (ju(e, t, "access private method"), n);
function td(e, t) {
  if (t) {
    let n;
    return Xh(() => {
      const r = e();
      return r && n && t(n, r) ? n : (n = r, r);
    });
  }
  return Xh(e);
}
function sn(e, t) {
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
      (r, o) => !sn(r, t[o])
    );
  if (typeof e == "object" && typeof t == "object") {
    const n = Object.keys(e), r = Object.keys(t);
    return n.length !== r.length ? !1 : !n.some(
      (s) => !sn(e[s], t[s])
    );
  }
  return !1;
}
function Ce({ get: e }, t) {
  return {
    init(n) {
      return Wo(n);
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
function We(e, t) {
  const n = /* @__PURE__ */ new WeakMap();
  return function() {
    let r = n.get(this);
    return r || (r = td(e.bind(this)), n.set(this, r)), r.value;
  };
}
function ll(e = !0) {
  return function(t, n) {
    n.addInitializer(function() {
      const r = n.kind === "field" ? this : n.static ? this : Object.getPrototypeOf(this), o = Object.getOwnPropertyDescriptor(r, n.name);
      o && Object.defineProperty(r, n.name, WO($O({}, o), { enumerable: e }));
    });
  };
}
function ha(...e) {
  const t = e.map((n) => Vt(n));
  return () => t.forEach((n) => n());
}
var mb, vb, gb, yb, bb, xb, ht, $u, dl, nd, rd, lt, Wu, ul, wb, od, Lu, fl, sd, ad;
xb = [Ce], bb = [Ce], yb = [Ce], gb = [ll()], vb = [ll()], mb = [ll()];
var Fr = class {
  constructor(e, t = Object.is) {
    this.defaultValue = e, this.equals = t, vr(ht, 5, this), is(this, lt), is(this, $u, vr(ht, 8, this)), vr(ht, 11, this), is(this, Wu, vr(ht, 12, this)), vr(ht, 15, this), is(this, Lu, vr(ht, 16, this)), vr(ht, 19, this), this.reset = this.reset.bind(this), this.reset();
  }
  get current() {
    return jt(this, lt, sd);
  }
  get initial() {
    return jt(this, lt, nd);
  }
  get previous() {
    return jt(this, lt, wb);
  }
  /** Set the current value */
  set current(e) {
    const t = we(() => jt(this, lt, sd));
    e && t && this.equals(t, e) || je(() => {
      jt(this, lt, nd) || Kn(this, lt, e, rd), Kn(this, lt, t, od), Kn(this, lt, e, ad);
    });
  }
  /** Reset the state to the initial value */
  reset(e = this.defaultValue) {
    je(() => {
      Kn(this, lt, void 0, od), Kn(this, lt, e, rd), Kn(this, lt, e, ad);
    });
  }
};
ht = LO();
$u = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakSet();
Wu = /* @__PURE__ */ new WeakMap();
Lu = /* @__PURE__ */ new WeakMap();
dl = Vo(ht, 20, "#initial", xb, lt, $u), nd = dl.get, rd = dl.set;
ul = Vo(ht, 20, "#previous", bb, lt, Wu), wb = ul.get, od = ul.set;
fl = Vo(ht, 20, "#current", yb, lt, Lu), sd = fl.get, ad = fl.set;
Vo(ht, 2, "current", gb, Fr);
Vo(ht, 2, "initial", vb, Fr);
Vo(ht, 2, "previous", mb, Fr);
pb(ht, Fr);
function hl(e) {
  return we(() => {
    const t = {};
    for (const n in e)
      t[n] = e[n];
    return t;
  });
}
var yr, BO = class {
  constructor() {
    is(this, yr, /* @__PURE__ */ new WeakMap());
  }
  get(e, t) {
    var n;
    return e ? (n = jt(this, yr).get(e)) == null ? void 0 : n.get(t) : void 0;
  }
  set(e, t, n) {
    var r;
    if (e)
      return jt(this, yr).has(e) || jt(this, yr).set(e, /* @__PURE__ */ new Map()), (r = jt(this, yr).get(e)) == null ? void 0 : r.set(t, n);
  }
  clear(e) {
    var t;
    return e ? (t = jt(this, yr).get(e)) == null ? void 0 : t.clear() : void 0;
  }
};
yr = /* @__PURE__ */ new WeakMap();
var HO = Object.create, Cb = Object.defineProperty, YO = Object.getOwnPropertyDescriptor, Jh = Object.getOwnPropertySymbols, GO = Object.prototype.hasOwnProperty, UO = Object.prototype.propertyIsEnumerable, Sb = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), kc = (e) => {
  throw TypeError(e);
}, ep = Math.pow, id = (e, t, n) => t in e ? Cb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, KO = (e, t) => {
  for (var n in t || (t = {}))
    GO.call(t, n) && id(e, n, t[n]);
  if (Jh)
    for (var n of Jh(t))
      UO.call(t, n) && id(e, n, t[n]);
  return e;
}, qO = (e) => {
  var t;
  return [, , , HO((t = e == null ? void 0 : e[Sb("metadata")]) != null ? t : null)];
}, _b = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], kb = (e) => e !== void 0 && typeof e != "function" ? kc("Function expected") : e, XO = (e, t, n, r, o) => ({ kind: _b[e], name: t, metadata: r, addInitializer: (s) => n._ ? kc("Already initialized") : o.push(kb(s || null)) }), ZO = (e, t) => id(t, Sb("metadata"), e[3]), QO = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, Eb = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, d = !1, h = !1, p = 2, y = _b[f + 5], v = e[p] || (e[p] = []), x = (o = o.prototype, YO(o, n)), C = r.length - 1; C >= 0; C--)
    c = XO(f, n, i = {}, e[3], v), c.static = d, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(x[y], c), i._ = 1, kb(a) && (x[y] = a);
  return x && Cb(o, n, x), o;
}, Pb = (e, t, n) => t.has(e) || kc("Cannot " + n), JO = (e, t, n) => (Pb(e, t, "read from private field"), t.get(e)), eR = (e, t, n) => t.has(e) ? kc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), tR = (e, t, n, r) => (Pb(e, t, "write to private field"), t.set(e, n), n), $t = class cd {
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
    return new cd(t.x - n.x, t.y - n.y);
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
    return new cd(t, n);
  }
}, vn = class br {
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
    const { top: r, left: o, width: s, height: a, scale: i } = this, c = new br(o + t, r + n, s, a);
    return c.scale = KO({}, i), c;
  }
  get boundingRectangle() {
    const { width: t, height: n, left: r, top: o, right: s, bottom: a } = this;
    return { width: t, height: n, left: r, top: o, right: s, bottom: a };
  }
  get center() {
    const { left: t, top: n, right: r, bottom: o } = this;
    return new $t((t + r) / 2, (n + o) / 2);
  }
  get area() {
    const { width: t, height: n } = this;
    return t * n;
  }
  equals(t) {
    if (!(t instanceof br))
      return !1;
    const { left: n, top: r, width: o, height: s } = this;
    return n === t.left && r === t.top && o === t.width && s === t.height;
  }
  containsPoint(t) {
    const { top: n, left: r, bottom: o, right: s } = this;
    return n <= t.y && t.y <= o && r <= t.x && t.x <= s;
  }
  intersectionArea(t) {
    return t instanceof br ? nR(this, t) : 0;
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
    return new br(n, t, r, o);
  }
  static delta(t, n, r = { x: "center", y: "center" }) {
    const o = (s, a) => {
      const i = r[a], c = a === "x" ? s.left : s.top, l = a === "x" ? s.width : s.height;
      return i == "start" ? c : i == "end" ? c + l : c + l / 2;
    };
    return $t.delta(
      { x: o(t, "x"), y: o(t, "y") },
      { x: o(n, "x"), y: o(n, "y") }
    );
  }
  static intersectionRatio(t, n) {
    return br.from(t).intersectionRatio(br.from(n));
  }
};
function nR(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), s = Math.min(t.top + t.height, e.top + e.height), a = o - r, i = s - n;
  return r < o && n < s ? a * i : 0;
}
var Mb, Nb, ld, oi, pa, Ec = class extends (ld = Fr, Nb = [We], Mb = [We], ld) {
  constructor(t) {
    const n = $t.from(t);
    super(n, (r, o) => $t.equals(r, o)), QO(pa, 5, this), eR(this, oi, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return $t.delta(this.current, this.initial);
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
    const { current: n } = this, r = $t.from(t), o = {
      x: r.x - n.x,
      y: r.y - n.y
    }, s = Date.now(), a = s - JO(this, oi), i = (c) => Math.round(c / a * 100);
    je(() => {
      tR(this, oi, s), this.velocity = {
        x: i(o.x),
        y: i(o.y)
      }, super.current = r;
    });
  }
  reset(t = this.defaultValue) {
    super.reset($t.from(t)), this.velocity = { x: 0, y: 0 };
  }
};
pa = qO(ld);
oi = /* @__PURE__ */ new WeakMap();
Eb(pa, 2, "delta", Nb, Ec);
Eb(pa, 2, "direction", Mb, Ec);
ZO(pa, Ec);
function dd({ x: e, y: t }, n) {
  const r = Math.abs(e), o = Math.abs(t);
  return typeof n == "number" ? Math.sqrt(ep(r, 2) + ep(o, 2)) > n : "x" in n && "y" in n ? r > n.x && o > n.y : "x" in n ? r > n.x : "y" in n ? o > n.y : !1;
}
var Db = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Db || {}), Ab = Object.values(Db), rR = Object.create, Fu = Object.defineProperty, oR = Object.defineProperties, sR = Object.getOwnPropertyDescriptor, aR = Object.getOwnPropertyDescriptors, Ni = Object.getOwnPropertySymbols, Ob = Object.prototype.hasOwnProperty, Rb = Object.prototype.propertyIsEnumerable, Ib = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), zo = (e) => {
  throw TypeError(e);
}, ud = (e, t, n) => t in e ? Fu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Vu = (e, t) => {
  for (var n in t || (t = {}))
    Ob.call(t, n) && ud(e, n, t[n]);
  if (Ni)
    for (var n of Ni(t))
      Rb.call(t, n) && ud(e, n, t[n]);
  return e;
}, zu = (e, t) => oR(e, aR(t)), tp = (e, t) => Fu(e, "name", { value: t, configurable: !0 }), Tb = (e, t) => {
  var n = {};
  for (var r in e)
    Ob.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ni)
    for (var r of Ni(e))
      t.indexOf(r) < 0 && Rb.call(e, r) && (n[r] = e[r]);
  return n;
}, Bo = (e) => {
  var t;
  return [, , , rR((t = e == null ? void 0 : e[Ib("metadata")]) != null ? t : null)];
}, jb = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], cs = (e) => e !== void 0 && typeof e != "function" ? zo("Function expected") : e, iR = (e, t, n, r, o) => ({ kind: jb[e], name: t, metadata: r, addInitializer: (s) => n._ ? zo("Already initialized") : o.push(cs(s || null)) }), Vr = (e, t) => ud(t, Ib("metadata"), e[3]), ve = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Se = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, v = jb[d + 5], x = d > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && sR(d < 4 ? o : { get [n]() {
    return $e(this, s);
  }, set [n](S) {
    return Pt(this, s, S);
  } }, n));
  d ? p && d < 4 && tp(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : tp(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = iR(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => cR(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? $e : $b)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => Pt(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[g])(d ? d < 4 ? p ? s : b[v] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? cs(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[v] = i : o = i) : typeof i != "object" || i === null ? zo("Object expected") : (cs(a = i.get) && (b.get = a), cs(a = i.set) && (b.set = a), cs(a = i.init) && x.unshift(a));
  return d || Vr(e, o), b && Fu(o, n, b), p ? d ^ 4 ? s : b : o;
}, Bu = (e, t, n) => t.has(e) || zo("Cannot " + n), cR = (e, t) => Object(t) !== t ? zo('Cannot use the "in" operator on this value') : e.has(t), $e = (e, t, n) => (Bu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Me = (e, t, n) => t.has(e) ? zo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Pt = (e, t, n, r) => (Bu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), $b = (e, t, n) => (Bu(e, t, "access private method"), n);
function Wb(e, t) {
  return {
    plugin: e,
    options: t
  };
}
function ma(e) {
  return (t) => Wb(e, t);
}
function Ls(e) {
  return typeof e == "function" ? {
    plugin: e,
    options: void 0
  } : e;
}
var Lb, Fs, Hu, si;
Lb = [Ce];
var ut = class {
  /**
   * Creates a new plugin instance.
   *
   * @param manager - The drag and drop manager that owns this plugin
   * @param options - Optional configuration for the plugin
   */
  constructor(e, t) {
    this.manager = e, this.options = t, Me(this, Hu, ve(Fs, 8, this, !1)), ve(Fs, 11, this), Me(this, si, /* @__PURE__ */ new Set());
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
    return we(() => this.disabled);
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
    const t = Vt(e.bind(this));
    return $e(this, si).add(t), t;
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
    $e(this, si).forEach((e) => e());
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
    return Wb(this, e);
  }
};
Fs = Bo(null);
Hu = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
Se(Fs, 4, "disabled", Lb, ut, Hu);
Vr(Fs, ut);
var va = class extends ut {
}, ai, pl = class {
  /**
   * Creates a new plugin registry.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.manager = e, this.instances = /* @__PURE__ */ new Map(), Me(this, ai, []);
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
    const t = e.map(Ls).reduce((r, o) => {
      const s = r.find(({ plugin: a }) => a === o.plugin);
      return s ? (s.options = o.options, r) : [...r, o];
    }, []), n = t.map(({ plugin: r }) => r);
    for (const r of $e(this, ai))
      if (!n.includes(r)) {
        if (r.prototype instanceof va)
          continue;
        this.unregister(r);
      }
    for (const { plugin: r, options: o } of t)
      this.register(r, o);
    Pt(this, ai, n);
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
ai = /* @__PURE__ */ new WeakMap();
function lR(e, t) {
  return e.priority === t.priority ? e.type === t.type ? t.value - e.value : t.type - e.type : t.priority - e.priority;
}
var za = [], ro, oo, dR = class extends ut {
  /**
   * Creates a new CollisionObserver instance.
   *
   * @param manager - The drag drop manager instance
   */
  constructor(e) {
    super(e), Me(this, ro), Me(this, oo), this.computeCollisions = this.computeCollisions.bind(this), Pt(this, oo, Wo(za)), this.destroy = ha(
      () => {
        const t = this.computeCollisions(), n = we(
          () => this.manager.dragOperation.position.current
        );
        if (t !== za) {
          const r = $e(this, ro);
          if (Pt(this, ro, n), r && n.x == r.x && n.y == r.y)
            return;
        } else
          Pt(this, ro, void 0);
        $e(this, oo).value = t;
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
    we(() => {
      e ? $e(this, oo).value = this.computeCollisions() : Pt(this, ro, void 0);
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
      return za;
    const i = [], c = [];
    for (const l of e ?? n.droppables) {
      if (l.disabled || o && !l.accepts(o))
        continue;
      const f = t ?? l.collisionDetector;
      if (!f)
        continue;
      c.push(l), l.shape;
      const d = we(
        () => f({
          droppable: l,
          dragOperation: r
        })
      );
      d && (l.collisionPriority != null && (d.priority = l.collisionPriority), i.push(d));
    }
    return c.length === 0 ? za : (i.sort(lR), i);
  }
  /**
   * Gets the current collisions signal value.
   */
  get collisions() {
    return $e(this, oo).value;
  }
};
ro = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakMap();
var Fb, Vb, zb, Yu, Bb, Gt, Gu, uo, Uu, Ku;
zb = [Ce], Vb = [Ce], Fb = [Ce];
var Tn = class xr {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(t, n) {
    Me(this, Gu, ve(Gt, 8, this)), ve(Gt, 11, this), Me(this, uo), Me(this, Uu, ve(Gt, 12, this)), ve(Gt, 15, this), Me(this, Ku, ve(Gt, 16, this)), ve(Gt, 19, this);
    const { effects: r, id: o, data: s = {}, disabled: a = !1, register: i = !0 } = t;
    let c = o;
    Pt(this, uo, Wo(o)), this.manager = n, this.data = s, this.disabled = a, this.effects = () => {
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
    const r = $e(this, uo).value;
    return (n = (t = xr.pendingIdChanges) == null ? void 0 : t.get(this)) != null ? n : r;
  }
  set id(t) {
    var n, r;
    const o = (r = (n = xr.pendingIdChanges) == null ? void 0 : n.get(this)) != null ? r : $e(this, uo).peek();
    t !== o && (xr.pendingIdChanges || (xr.pendingIdChanges = /* @__PURE__ */ new Map(), queueMicrotask(() => {
      var s;
      return $b(s = xr, Yu, Bb).call(s);
    })), xr.pendingIdChanges.set(this, t));
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
Gt = Bo(null);
Yu = /* @__PURE__ */ new WeakSet();
Bb = function() {
  const e = Tn.pendingIdChanges;
  Tn.pendingIdChanges = null, e && je(() => {
    for (const [t, n] of e)
      $e(t, uo).value = n;
  });
};
Gu = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
Uu = /* @__PURE__ */ new WeakMap();
Ku = /* @__PURE__ */ new WeakMap();
Se(Gt, 4, "manager", zb, Tn, Gu);
Se(Gt, 4, "data", Vb, Tn, Uu);
Se(Gt, 4, "disabled", Fb, Tn, Ku);
Me(Tn, Yu);
Vr(Gt, Tn);
Tn.pendingIdChanges = null;
var Pc = Tn, np = class {
  constructor() {
    this.map = Wo(/* @__PURE__ */ new Map()), this.cleanupFunctions = /* @__PURE__ */ new WeakMap(), this.register = (e, t) => {
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
      const a = ha(...t.effects());
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
}, Hb, Yb, Gb, Ub, Kb, qb, fd, pt, qu, Xu, Zu, gn = class extends (fd = Pc, qb = [Ce], Kb = [Ce], Ub = [Ce], Gb = [We], Yb = [We], Hb = [We], fd) {
  constructor(t, n) {
    var r = t, { modifiers: o, type: s, sensors: a, plugins: i, effects: c } = r, l = Tb(r, ["modifiers", "type", "sensors", "plugins", "effects"]);
    super(
      zu(Vu({}, l), {
        effects: () => {
          var f;
          return [
            ...(f = c == null ? void 0 : c()) != null ? f : [],
            () => {
              const { manager: d, plugins: h } = this;
              if (!(!d || !h))
                for (const p of h) {
                  const { plugin: y } = Ls(p);
                  d.registry.plugins.register(y);
                }
            }
          ];
        }
      }),
      n
    ), ve(pt, 5, this), Me(this, qu, ve(pt, 8, this)), ve(pt, 11, this), Me(this, Xu, ve(pt, 12, this)), ve(pt, 15, this), Me(this, Zu, ve(pt, 16, this, this.isDragSource ? "dragging" : "idle")), ve(pt, 19, this), this.type = s, this.sensors = a, this.modifiers = o, this.alignment = l.alignment, this.plugins = i;
  }
  /**
   * Look up per-entity options for a given plugin constructor.
   */
  pluginConfig(t) {
    if (this.plugins)
      for (const n of this.plugins) {
        const r = Ls(n);
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
pt = Bo(fd);
qu = /* @__PURE__ */ new WeakMap();
Xu = /* @__PURE__ */ new WeakMap();
Zu = /* @__PURE__ */ new WeakMap();
Se(pt, 4, "type", qb, gn, qu);
Se(pt, 4, "modifiers", Kb, gn, Xu);
Se(pt, 4, "status", Ub, gn, Zu);
Se(pt, 2, "isDropping", Gb, gn);
Se(pt, 2, "isDragging", Yb, gn);
Se(pt, 2, "isDragSource", Hb, gn);
Vr(pt, gn);
var Xb, Zb, Qb, Jb, ex, tx, hd, Ye, Qu, Ju, ef, tf, nf, yn = class extends (hd = Pc, tx = [Ce], ex = [Ce], Jb = [Ce], Qb = [Ce], Zb = [Ce], Xb = [We], hd) {
  constructor(t, n) {
    var r = t, { accept: o, collisionDetector: s, collisionPriority: a, type: i } = r, c = Tb(r, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(c, n), ve(Ye, 5, this), Me(this, Qu, ve(Ye, 8, this)), ve(Ye, 11, this), Me(this, Ju, ve(Ye, 12, this)), ve(Ye, 15, this), Me(this, ef, ve(Ye, 16, this)), ve(Ye, 19, this), Me(this, tf, ve(Ye, 20, this)), ve(Ye, 23, this), Me(this, nf, ve(Ye, 24, this)), ve(Ye, 27, this), this.accept = o, this.collisionDetector = s, this.collisionPriority = a, this.type = i;
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
Ye = Bo(hd);
Qu = /* @__PURE__ */ new WeakMap();
Ju = /* @__PURE__ */ new WeakMap();
ef = /* @__PURE__ */ new WeakMap();
tf = /* @__PURE__ */ new WeakMap();
nf = /* @__PURE__ */ new WeakMap();
Se(Ye, 4, "accept", tx, yn, Qu);
Se(Ye, 4, "type", ex, yn, Ju);
Se(Ye, 4, "collisionDetector", Jb, yn, ef);
Se(Ye, 4, "collisionPriority", Qb, yn, tf);
Se(Ye, 4, "shape", Zb, yn, nf);
Se(Ye, 2, "isDropTarget", Xb, yn);
Vr(Ye, yn);
var uR = class {
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
}, fR = class extends uR {
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
function ii(e, t = !0) {
  let n = !1;
  return zu(Vu({}, e), {
    cancelable: t,
    get defaultPrevented() {
      return n;
    },
    preventDefault() {
      t && (n = !0);
    }
  });
}
var hR = class extends va {
  constructor(e) {
    super(e);
    const t = (r, o) => r.map(({ id: s }) => s).join("") === o.map(({ id: s }) => s).join("");
    let n = [];
    this.destroy = ha(
      () => {
        const { dragOperation: r, collisionObserver: o } = e;
        r.status.initializing && (n = [], o.enable());
      },
      () => {
        const { collisionObserver: r, monitor: o } = e, { collisions: s } = r;
        if (r.isDisabled() || Pc.pendingIdChanges)
          return;
        const a = ii({
          collisions: s
        });
        if (o.dispatch("collision", a), a.defaultPrevented || t(s, n))
          return;
        n = s;
        const [i] = s;
        we(() => {
          var c;
          (i == null ? void 0 : i.id) !== ((c = e.dragOperation.target) == null ? void 0 : c.id) && (r.disable(), e.actions.setDropTarget(i == null ? void 0 : i.id).then(() => {
            r.enable();
          }));
        });
      }
    );
  }
}, Mc = /* @__PURE__ */ ((e) => (e[e.Lowest = 0] = "Lowest", e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Highest = 4] = "Highest", e))(Mc || {}), Nc = /* @__PURE__ */ ((e) => (e[e.Collision = 0] = "Collision", e[e.ShapeIntersection = 1] = "ShapeIntersection", e[e.PointerIntersection = 2] = "PointerIntersection", e))(Nc || {}), nx, rx, ox, sx, ax, ix, cx, Ft, rf;
cx = [Ce], ix = [We], ax = [We], sx = [We], ox = [We], rx = [We], nx = [We];
var jn = class {
  constructor() {
    ve(Ft, 5, this), Me(this, rf, ve(
      Ft,
      8,
      this,
      "idle"
      /* Idle */
    )), ve(Ft, 11, this);
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
Ft = Bo(null);
rf = /* @__PURE__ */ new WeakMap();
Se(Ft, 4, "value", cx, jn, rf);
Se(Ft, 2, "current", ix, jn);
Se(Ft, 2, "idle", ax, jn);
Se(Ft, 2, "initializing", sx, jn);
Se(Ft, 2, "initialized", ox, jn);
Se(Ft, 2, "dragging", rx, jn);
Se(Ft, 2, "dropped", nx, jn);
Vr(Ft, jn);
var pR = class {
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
    return we(() => {
      const { dragOperation: t } = this.manager, n = e ?? null;
      if (t.targetIdentifier === n)
        return Promise.resolve(!1);
      t.targetIdentifier = n;
      const r = ii({
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
    return we(() => {
      const { dragOperation: t } = this.manager;
      if (e.source != null && this.setDragSource(e.source), !t.source)
        throw new Error("Cannot start a drag operation without a drag source");
      if (!t.status.idle)
        throw new Error(
          "Cannot start a drag operation while another is active"
        );
      const r = new AbortController(), { event: o, coordinates: s } = e;
      je(() => {
        t.status.set(
          "initialization-pending"
          /* InitializationPending */
        ), t.shape = null, t.canceled = !1, t.activatorEvent = o ?? null, t.position.reset(s);
      });
      const a = ii({
        operation: t.snapshot()
      });
      return this.manager.monitor.dispatch("beforedragstart", a), a.defaultPrevented ? (t.reset(), r.abort(), r) : (t.status.set(
        "initializing"
        /* Initializing */
      ), t.controller = r, this.manager.renderer.rendering.then(() => {
        if (r.signal.aborted) return;
        const { status: i } = t;
        i.current === "initializing" && je(() => {
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
    return we(() => {
      var t, n;
      const { dragOperation: r } = this.manager, { status: o, controller: s } = r;
      if (!o.dragging || !s || s.signal.aborted)
        return;
      const a = ii(
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
    return we(() => {
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
          const c = we(
            () => {
              var f;
              return ((f = r.source) == null ? void 0 : f.status) === "dropping";
            }
          ), l = () => {
            r.controller === o && (r.controller = void 0), r.reset();
          };
          if (c) {
            const { source: f } = r, d = Vt(() => {
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
}, So = class extends ut {
  /**
   * Creates a new sensor instance.
   *
   * @param manager - The drag drop manager instance
   * @param options - Optional sensor configuration
   */
  constructor(e, t) {
    super(e, t), this.manager = e, this.options = t;
  }
}, mR = class extends AbortController {
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
}, ci, lx = class {
  constructor(e) {
    this.options = e, Me(this, ci);
  }
  set controller(e) {
    Pt(this, ci, e), e.signal.addEventListener("abort", () => this.abort());
  }
  /**
   * Called when the activation is triggered.
   */
  activate(e) {
    var t;
    (t = $e(this, ci)) == null || t.activate(e);
  }
};
ci = /* @__PURE__ */ new WeakMap();
var rp = class extends ut {
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
}, vR = class {
  /**
   * Creates a new registry instance.
   *
   * @param manager - The drag and drop manager that owns this registry
   */
  constructor(e) {
    this.draggables = new np(), this.droppables = new np(), this.plugins = new pl(e), this.sensors = new pl(e), this.modifiers = new pl(e);
  }
  register(e, t) {
    if (e instanceof gn)
      return this.draggables.register(e.id, e);
    if (e instanceof yn)
      return this.droppables.register(e.id, e);
    if (e.prototype instanceof rp)
      return this.modifiers.register(e, t);
    if (e.prototype instanceof So)
      return this.sensors.register(e, t);
    if (e.prototype instanceof ut)
      return this.plugins.register(e, t);
    throw new Error("Invalid instance type");
  }
  unregister(e) {
    if (e instanceof Pc)
      return e instanceof gn ? this.draggables.unregister(e.id, e) : e instanceof yn ? this.droppables.unregister(e.id, e) : () => {
      };
    if (e.prototype instanceof rp)
      return this.modifiers.unregister(e);
    if (e.prototype instanceof So)
      return this.sensors.unregister(e);
    if (e.prototype instanceof ut)
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
}, dx, ux, fx, hx, px, mx, vx, gx, yx, ls, li, so, Te, of, sf, af, cf, lf, ds;
yx = [We], gx = [Ce], vx = [Ce], mx = [Ce], px = [Ce], hx = [Ce], fx = [We], ux = [We], dx = [We];
var Jt = class {
  /**
   * Creates a new drag operation instance.
   *
   * @param manager - The drag and drop manager that owns this operation
   */
  constructor(e) {
    ve(Te, 5, this), Me(this, ls), Me(this, li), Me(this, so, new Fr(
      void 0,
      (t, n) => t && n ? t.equals(n) : t === n
    )), this.status = new jn(), Me(this, of, ve(Te, 8, this, !1)), ve(Te, 11, this), Me(this, sf, ve(Te, 12, this, null)), ve(Te, 15, this), Me(this, af, ve(Te, 16, this, null)), ve(Te, 19, this), Me(this, cf, ve(Te, 20, this, null)), ve(Te, 23, this), Me(this, lf, ve(Te, 24, this, [])), ve(Te, 27, this), this.position = new Ec({ x: 0, y: 0 }), Me(this, ds, { x: 0, y: 0 }), Pt(this, ls, e);
  }
  get shape() {
    const { current: e, initial: t, previous: n } = $e(this, so);
    return !e || !t ? null : { current: e, initial: t, previous: n };
  }
  /**
   * Sets the shape of the dragged entity.
   *
   * @param value - The new shape or null to reset
   */
  set shape(e) {
    e ? $e(this, so).current = e : $e(this, so).reset();
  }
  get source() {
    var e;
    const t = this.sourceIdentifier;
    if (t == null) return null;
    const n = $e(this, ls).registry.draggables.get(t);
    return n && Pt(this, li, n), (e = n ?? $e(this, li)) != null ? e : null;
  }
  get target() {
    var e;
    const t = this.targetIdentifier;
    return t != null && (e = $e(this, ls).registry.droppables.get(t)) != null ? e : null;
  }
  get transform() {
    const { x: e, y: t } = this.position.delta;
    let n = { x: e, y: t };
    for (const r of this.modifiers)
      n = r.apply(zu(Vu({}, this.snapshot()), {
        transform: n
      }));
    return Pt(this, ds, n), n;
  }
  /**
   * Creates a snapshot of the current drag operation state.
   *
   * @returns An immutable snapshot of the current operation state
   */
  snapshot() {
    return we(() => ({
      source: this.source,
      target: this.target,
      activatorEvent: this.activatorEvent,
      transform: $e(this, ds),
      shape: this.shape ? hl(this.shape) : null,
      position: hl(this.position),
      status: hl(this.status),
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
    je(() => {
      this.status.set(
        "idle"
        /* Idle */
      ), this.sourceIdentifier = null, this.targetIdentifier = null, $e(this, so).reset(), this.position.reset({ x: 0, y: 0 }), Pt(this, ds, { x: 0, y: 0 }), this.modifiers = [];
    });
  }
};
Te = Bo(null);
ls = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
of = /* @__PURE__ */ new WeakMap();
sf = /* @__PURE__ */ new WeakMap();
af = /* @__PURE__ */ new WeakMap();
cf = /* @__PURE__ */ new WeakMap();
lf = /* @__PURE__ */ new WeakMap();
ds = /* @__PURE__ */ new WeakMap();
Se(Te, 2, "shape", yx, Jt);
Se(Te, 4, "canceled", gx, Jt, of);
Se(Te, 4, "activatorEvent", vx, Jt, sf);
Se(Te, 4, "sourceIdentifier", mx, Jt, af);
Se(Te, 4, "targetIdentifier", px, Jt, cf);
Se(Te, 4, "modifiers", hx, Jt, lf);
Se(Te, 2, "source", fx, Jt);
Se(Te, 2, "target", ux, Jt);
Se(Te, 2, "transform", dx, Jt);
Vr(Te, Jt);
var gR = {
  get rendering() {
    return Promise.resolve();
  }
};
function Kt(e, t) {
  return typeof e == "function" ? e(t) : e ?? t;
}
var yR = class {
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
    const r = t ?? {}, o = Kt(r.plugins, []), s = Kt(r.sensors, []), a = Kt(r.modifiers, []), i = (n = r.renderer) != null ? n : gR, c = new fR(this), l = new vR(this);
    this.registry = l, this.monitor = c, this.renderer = i, this.actions = new pR(this), this.dragOperation = new Jt(this), this.collisionObserver = new dR(this), this.plugins = [hR, ...o], this.modifiers = a, this.sensors = s;
    const { destroy: f } = this, d = ha(() => {
      var h, p, y;
      const v = we(() => this.dragOperation.modifiers), x = this.modifiers;
      for (const C of v)
        x.includes(C) || C.destroy();
      this.dragOperation.modifiers = (y = (p = (h = this.dragOperation.source) == null ? void 0 : h.modifiers) == null ? void 0 : p.map((C) => {
        const { plugin: b, options: g } = Ls(C);
        return new b(this, g);
      })) != null ? y : x;
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
}, bx = (e) => {
  throw TypeError(e);
}, df = (e, t, n) => t.has(e) || bx("Cannot " + n), me = (e, t, n) => (df(e, t, "read from private field"), t.get(e)), wt = (e, t, n) => t.has(e) ? bx("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), kt = (e, t, n, r) => (df(e, t, "write to private field"), t.set(e, n), n), xx = (e, t, n) => (df(e, t, "access private method"), n);
function Dc(e) {
  return e ? e instanceof KeyframeEffect ? !0 : "getKeyframes" in e && typeof e.getKeyframes == "function" : !1;
}
function wx(e, t) {
  const n = e.getAnimations();
  let r = null;
  for (const o of n) {
    if (o.playState !== "running") continue;
    const { effect: s } = o, i = (Dc(s) ? s.getKeyframes() : []).filter(t);
    i.length > 0 && (r = [i[i.length - 1], o]);
  }
  return r;
}
function Ac(e) {
  const { width: t, height: n, top: r, left: o, bottom: s, right: a } = e.getBoundingClientRect();
  return { width: t, height: n, top: r, left: o, bottom: s, right: a };
}
function uf(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ga(e) {
  return "nodeType" in e;
}
function Dt(e) {
  var t, n, r;
  return e ? uf(e) ? e : ga(e) ? "defaultView" in e ? (t = e.defaultView) != null ? t : window : (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window : window : window;
}
function ff(e) {
  const { Document: t } = Dt(e);
  return e instanceof t || "nodeType" in e && e.nodeType === Node.DOCUMENT_NODE;
}
function or(e) {
  return !e || uf(e) ? !1 : e instanceof Dt(e).HTMLElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("html");
}
function Cx(e) {
  return e instanceof Dt(e).SVGElement || "namespaceURI" in e && typeof e.namespaceURI == "string" && e.namespaceURI.endsWith("svg");
}
function Ho(e) {
  return e ? uf(e) ? e.document : ga(e) ? ff(e) ? e : or(e) || Cx(e) ? e.ownerDocument : document : document : document;
}
function bR(e) {
  var t, n, r, o;
  const { documentElement: s } = Ho(e), a = Dt(e).visualViewport, i = (t = a == null ? void 0 : a.width) != null ? t : s.clientWidth, c = (n = a == null ? void 0 : a.height) != null ? n : s.clientHeight, l = (r = a == null ? void 0 : a.offsetTop) != null ? r : 0, f = (o = a == null ? void 0 : a.offsetLeft) != null ? o : 0;
  return {
    top: l,
    left: f,
    right: f + i,
    bottom: l + c,
    width: i,
    height: c
  };
}
function xR(e, t) {
  if (wR(e) && e.open === !1)
    return !1;
  const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(e);
  return n === "visible" && r === "visible" && o === "visible";
}
function wR(e) {
  return e.tagName === "DETAILS";
}
function Vs(e, t = e.getBoundingClientRect(), n = 0) {
  var r, o, s, a, i;
  let c = t;
  const { ownerDocument: l } = e, f = (r = l.defaultView) != null ? r : window;
  let d = e.parentElement;
  for (; d && d !== l.documentElement; ) {
    if (!xR(d)) {
      const g = d.getBoundingClientRect(), S = n * (g.bottom - g.top), w = n * (g.right - g.left), P = n * (g.bottom - g.top), _ = n * (g.right - g.left);
      c = {
        top: Math.max(c.top, g.top - S),
        right: Math.min(c.right, g.right + w),
        bottom: Math.min(c.bottom, g.bottom + P),
        left: Math.max(c.left, g.left - _),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      }, c.width = c.right - c.left, c.height = c.bottom - c.top;
    }
    d = d.parentElement;
  }
  const h = f.visualViewport, p = (o = h == null ? void 0 : h.offsetTop) != null ? o : 0, y = (s = h == null ? void 0 : h.offsetLeft) != null ? s : 0, v = (a = h == null ? void 0 : h.width) != null ? a : f.innerWidth, x = (i = h == null ? void 0 : h.height) != null ? i : f.innerHeight, C = n * x, b = n * v;
  return c = {
    top: Math.max(c.top, p - C),
    right: Math.min(
      c.right,
      y + v + b
    ),
    bottom: Math.min(
      c.bottom,
      p + x + C
    ),
    left: Math.max(c.left, y - b),
    width: 0,
    // Will be calculated next
    height: 0
    // Will be calculated next
  }, c.width = c.right - c.left, c.height = c.bottom - c.top, c.width < 0 && (c.width = 0), c.height < 0 && (c.height = 0), c;
}
function _o(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
var Sx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function pd(e = document, t = /* @__PURE__ */ new Set()) {
  if (t.has(e)) return [];
  t.add(e);
  const n = [e];
  for (const r of Array.from(
    e.querySelectorAll("iframe, frame")
  ))
    try {
      const o = r.contentDocument;
      o && !t.has(o) && n.push(...pd(o, t));
    } catch {
    }
  try {
    const r = e.defaultView;
    if (r && r !== window.top) {
      const o = r.parent;
      o && o.document && o.document !== e && n.push(...pd(o.document, t));
    }
  } catch {
  }
  return n;
}
function hf() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function _x() {
  var e, t;
  const n = hf() ? window.visualViewport : null;
  return {
    x: (e = n == null ? void 0 : n.offsetLeft) != null ? e : 0,
    y: (t = n == null ? void 0 : n.offsetTop) != null ? t : 0
  };
}
function pf(e) {
  return !e || !ga(e) ? !1 : e instanceof Dt(e).ShadowRoot;
}
function Di(e) {
  if (e && ga(e)) {
    let t = e.getRootNode();
    if (pf(t))
      return t;
    if (t instanceof Document)
      return t;
  }
  return Ho(e);
}
function mf(e) {
  return e.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function CR(e) {
  const t = "input, textarea, select, canvas, [contenteditable]", n = e.cloneNode(!0), r = Array.from(e.querySelectorAll(t));
  return Array.from(n.querySelectorAll(t)).forEach((s, a) => {
    const i = r[a];
    if (op(s) && op(i) && (s.type !== "file" && (s.value = i.value), s.type === "radio" && s.name && (s.name = `Cloned__${s.name}`)), sp(s) && sp(i) && i.width > 0 && i.height > 0) {
      const c = s.getContext("2d");
      c == null || c.drawImage(i, 0, 0);
    }
  }), n;
}
function op(e) {
  return "value" in e;
}
function sp(e) {
  return e.tagName === "CANVAS";
}
function kx(e, { x: t, y: n }) {
  const r = e.elementFromPoint(t, n);
  if (SR(r)) {
    const { contentDocument: o } = r;
    if (o) {
      const { left: s, top: a } = r.getBoundingClientRect();
      return kx(o, {
        x: t - s,
        y: n - a
      });
    }
  }
  return r;
}
function SR(e) {
  return (e == null ? void 0 : e.tagName) === "IFRAME";
}
var md = /* @__PURE__ */ new WeakMap();
function _R(e) {
  return e.closest(`
    input:not([disabled]),
    select:not([disabled]),
    textarea:not([disabled]),
    button:not([disabled]),
    a[href],
    [contenteditable]:not([contenteditable="false"])
  `);
}
var Ex = class {
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
function ko(e) {
  const t = e == null ? void 0 : e.ownerDocument.defaultView;
  if (t && t.self !== t.parent)
    return t.frameElement;
}
function kR(e) {
  const t = /* @__PURE__ */ new Set();
  let n = ko(e);
  for (; n; )
    t.add(n), n = ko(n);
  return t;
}
function ER(e, t) {
  const n = setTimeout(e, t);
  return () => clearTimeout(n);
}
function Px(e, t) {
  const n = () => performance.now();
  let r, o;
  return function(...s) {
    const a = this;
    o ? (r == null || r(), r = ER(
      () => {
        e.apply(a, s), o = n();
      },
      t - (n() - o)
    )) : (e.apply(a, s), o = n());
  };
}
function PR(e, t) {
  return e === t ? !0 : !e || !t ? !1 : e.top == t.top && e.left == t.left && e.right == t.right && e.bottom == t.bottom;
}
function MR(e, t = e.getBoundingClientRect()) {
  const { width: n, height: r } = Vs(
    e,
    t
  );
  return n > 0 && r > 0;
}
var NR = Sx ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}, di, DR = class extends NR {
  constructor(e) {
    super((t) => {
      if (!me(this, di)) {
        kt(this, di, !0);
        return;
      }
      e(t, this);
    }), wt(this, di, !1);
  }
};
di = /* @__PURE__ */ new WeakMap();
var ap = Array.from({ length: 100 }, (e, t) => t / 100), Mx = 75, wr, Ai, Gn, Cr, us, nt, ks, fs, Oi, Nx, Dx, Ax = class {
  constructor(e, t, n = {
    debug: !1,
    skipInitial: !1
  }) {
    this.element = e, this.callback = t, wt(this, Oi), this.disconnect = () => {
      var s, a, i;
      kt(this, ks, !0), (s = me(this, Gn)) == null || s.disconnect(), (a = me(this, Cr)) == null || a.disconnect(), me(this, us).disconnect(), (i = me(this, nt)) == null || i.remove();
    }, wt(this, wr, !0), wt(this, Ai), wt(this, Gn), wt(this, Cr), wt(this, us), wt(this, nt), wt(this, ks, !1), wt(this, fs, Px(() => {
      var s, a, i;
      const { element: c } = this;
      if ((s = me(this, Cr)) == null || s.disconnect(), me(this, ks) || !me(this, wr) || !c.isConnected)
        return;
      const l = (a = c.ownerDocument) != null ? a : document, { innerHeight: f, innerWidth: d } = (i = l.defaultView) != null ? i : window, h = c.getBoundingClientRect(), p = Vs(c, h), { top: y, left: v, bottom: x, right: C } = p, b = -Math.floor(y), g = -Math.floor(v), S = -Math.floor(d - C), w = -Math.floor(f - x), P = `${b}px ${S}px ${w}px ${g}px`;
      this.boundingClientRect = h, kt(this, Cr, new IntersectionObserver(
        (_) => {
          const [k] = _, { intersectionRect: D } = k;
          (k.intersectionRatio !== 1 ? k.intersectionRatio : vn.intersectionRatio(
            D,
            Vs(c)
          )) !== 1 && me(this, fs).call(this);
        },
        {
          threshold: ap,
          rootMargin: P,
          root: l
        }
      )), me(this, Cr).observe(c), xx(this, Oi, Nx).call(this);
    }, Mx)), this.boundingClientRect = e.getBoundingClientRect(), kt(this, wr, MR(e, this.boundingClientRect));
    let r = !0;
    this.callback = (s) => {
      r && (r = !1, n.skipInitial) || t(s);
    };
    const o = e.ownerDocument;
    n != null && n.debug && (kt(this, nt, document.createElement("div")), me(this, nt).style.background = "rgba(0,0,0,0.15)", me(this, nt).style.position = "fixed", me(this, nt).style.pointerEvents = "none", o.body.appendChild(me(this, nt))), kt(this, us, new IntersectionObserver(
      (s) => {
        var a, i;
        const c = s[s.length - 1], { boundingClientRect: l, isIntersecting: f } = c, { width: d, height: h } = l, p = me(this, wr);
        kt(this, wr, f), !(!d && !h) && (p && !f ? ((a = me(this, Cr)) == null || a.disconnect(), this.callback(null), (i = me(this, Gn)) == null || i.disconnect(), kt(this, Gn, void 0), me(this, nt) && (me(this, nt).style.visibility = "hidden")) : me(this, fs).call(this), f && !me(this, Gn) && (kt(this, Gn, new DR(me(this, fs))), me(this, Gn).observe(e)));
      },
      {
        threshold: ap,
        root: o
      }
    )), me(this, wr) && !n.skipInitial && this.callback(this.boundingClientRect), me(this, us).observe(e);
  }
};
wr = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakMap();
us = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakSet();
Nx = function() {
  me(this, ks) || (xx(this, Oi, Dx).call(this), !PR(this.boundingClientRect, me(this, Ai)) && (this.callback(this.boundingClientRect), kt(this, Ai, this.boundingClientRect)));
};
Dx = function() {
  if (me(this, nt)) {
    const { top: e, left: t, width: n, height: r } = Vs(
      this.element
    );
    me(this, nt).style.overflow = "hidden", me(this, nt).style.visibility = "visible", me(this, nt).style.top = `${Math.floor(e)}px`, me(this, nt).style.left = `${Math.floor(t)}px`, me(this, nt).style.width = `${Math.floor(n)}px`, me(this, nt).style.height = `${Math.floor(r)}px`;
  }
};
var Ba = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap();
function AR(e, t) {
  let n = Ba.get(e);
  return n || (n = { disconnect: new Ax(
    e,
    (o) => {
      const s = Ba.get(e);
      s && s.callbacks.forEach((a) => a(o));
    },
    { skipInitial: !0 }
  ).disconnect, callbacks: /* @__PURE__ */ new Set() }), n.callbacks.add(t), Ba.set(e, n), () => {
    n.callbacks.delete(t), n.callbacks.size === 0 && (Ba.delete(e), n.disconnect());
  };
}
function OR(e, t) {
  const n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = AR(r, t);
    n.add(o);
  }
  return () => n.forEach((r) => r());
}
function RR(e, t) {
  var n;
  const r = e.ownerDocument;
  if (!Ha.has(r)) {
    const a = new AbortController(), i = /* @__PURE__ */ new Set();
    document.addEventListener(
      "scroll",
      (c) => i.forEach((l) => l(c)),
      {
        capture: !0,
        passive: !0,
        signal: a.signal
      }
    ), Ha.set(r, { disconnect: () => a.abort(), listeners: i });
  }
  const { listeners: o, disconnect: s } = (n = Ha.get(r)) != null ? n : {};
  return !o || !s ? () => {
  } : (o.add(t), () => {
    o.delete(t), o.size === 0 && (s(), Ha.delete(r));
  });
}
var hs, ps, ui, vd, IR = class {
  constructor(e, t, n) {
    this.callback = t, wt(this, hs), wt(this, ps, !1), wt(this, ui), wt(this, vd, Px((a) => {
      if (!me(this, ps) && a.target && "contains" in a.target && typeof a.target.contains == "function") {
        for (const i of me(this, ui))
          if (a.target.contains(i)) {
            this.callback(me(this, hs).boundingClientRect);
            break;
          }
      }
    }, Mx));
    const r = kR(e), o = OR(r, t), s = RR(e, me(this, vd));
    kt(this, ui, r), kt(this, hs, new Ax(e, t, n)), this.disconnect = () => {
      me(this, ps) || (kt(this, ps, !0), o(), s(), me(this, hs).disconnect());
    };
  }
};
hs = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
vd = /* @__PURE__ */ new WeakMap();
function gd(e) {
  return "showPopover" in e && "hidePopover" in e && typeof e.showPopover == "function" && typeof e.hidePopover == "function";
}
function go(e) {
  try {
    gd(e) && e.isConnected && e.hasAttribute("popover") && // This selector can throw an error in browsers that don't support it
    !e.matches(":popover-open") && e.showPopover();
  } catch {
  }
}
function ip(e) {
  return !Sx || !e ? !1 : e === Ho(e).scrollingElement;
}
function Ox(e) {
  var t, n;
  const r = Dt(e), o = ip(e) ? bR(e) : Ac(e), s = r.visualViewport, a = ip(e) ? {
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
function TR(e, t) {
  const { isTop: n, isBottom: r, isLeft: o, isRight: s, position: a } = Ox(e), { x: i, y: c } = t ?? { x: 0, y: 0 }, l = !n && a.current.y + c > 0, f = !r && a.current.y + c < a.max.y, d = !o && a.current.x + i > 0, h = !s && a.current.x + i < a.max.x;
  return {
    top: l,
    bottom: f,
    left: d,
    right: h,
    x: d || h,
    y: l || f
  };
}
var vf = class {
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
}, Ri = new vf((e) => {
  typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : e();
}), jR = new vf((e) => setTimeout(e, 50)), Ii = /* @__PURE__ */ new Map(), $R = Ii.clear.bind(Ii);
function wn(e, t = !1) {
  if (!t) return cp(e);
  let n = Ii.get(e);
  return n || (n = cp(e), Ii.set(e, n), jR.schedule($R), n);
}
function cp(e) {
  return Dt(e).getComputedStyle(e);
}
function WR(e, t = wn(e, !0)) {
  return t.position === "fixed" || t.position === "sticky";
}
function LR(e, t = wn(e, !0)) {
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const s = t[o];
    return typeof s == "string" ? n.test(s) : !1;
  });
}
var FR = {
  excludeElement: !0,
  escapeShadowDOM: !0
};
function yd(e, t = FR) {
  const { limit: n, excludeElement: r, escapeShadowDOM: o } = t, s = /* @__PURE__ */ new Set();
  function a(i) {
    if (n != null && s.size >= n || !i)
      return s;
    if (ff(i) && i.scrollingElement != null && !s.has(i.scrollingElement))
      return s.add(i.scrollingElement), s;
    if (o && pf(i))
      return a(i.host);
    if (!or(i))
      return Cx(i) ? a(i.parentElement) : s;
    if (s.has(i))
      return s;
    const c = wn(i, !0);
    if (r && i === e || LR(i, c) && s.add(i), WR(i, c)) {
      const { scrollingElement: l } = i.ownerDocument;
      return l && s.add(l), s;
    }
    return a(i.parentNode);
  }
  return e ? a(e) : s;
}
function Eo(e, t = window.frameElement) {
  const n = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!e) return n;
  let r = ko(e);
  for (; r; ) {
    if (r === t)
      return n;
    const o = Ac(r), { x: s, y: a } = VR(r, o);
    n.x = n.x + o.left, n.y = n.y + o.top, n.scaleX = n.scaleX * s, n.scaleY = n.scaleY * a, r = ko(r);
  }
  return n;
}
function VR(e, t = Ac(e)) {
  const n = Math.round(t.width), r = Math.round(t.height);
  if (or(e))
    return {
      x: n / e.offsetWidth,
      y: r / e.offsetHeight
    };
  const o = wn(e, !0);
  return {
    x: (parseFloat(o.width) || n) / n,
    y: (parseFloat(o.height) || r) / r
  };
}
function zR(e) {
  if (!e || e === "none")
    return null;
  const t = e.split(" "), n = parseFloat(t[0]), r = parseFloat(t[1]);
  return isNaN(n) && isNaN(r) ? null : {
    x: isNaN(n) ? r : n,
    y: isNaN(r) ? n : r
  };
}
function zs(e) {
  if (!e || e === "none")
    return null;
  const [t, n, r = "0"] = e.split(" "), o = { x: parseFloat(t), y: parseFloat(n), z: parseInt(r, 10) };
  return isNaN(o.x) && isNaN(o.y) ? null : {
    x: isNaN(o.x) ? 0 : o.x,
    y: isNaN(o.y) ? 0 : o.y,
    z: isNaN(o.z) ? 0 : o.z
  };
}
function Oc(e) {
  var t, n, r, o, s, a, i, c, l;
  const { scale: f, transform: d, translate: h } = e, p = zR(f), y = zs(h), v = BR(d);
  if (!v && !p && !y)
    return null;
  const x = {
    x: (t = p == null ? void 0 : p.x) != null ? t : 1,
    y: (n = p == null ? void 0 : p.y) != null ? n : 1
  }, C = {
    x: (r = y == null ? void 0 : y.x) != null ? r : 0,
    y: (o = y == null ? void 0 : y.y) != null ? o : 0
  }, b = {
    x: (s = v == null ? void 0 : v.x) != null ? s : 0,
    y: (a = v == null ? void 0 : v.y) != null ? a : 0,
    scaleX: (i = v == null ? void 0 : v.scaleX) != null ? i : 1,
    scaleY: (c = v == null ? void 0 : v.scaleY) != null ? c : 1
  };
  return {
    x: C.x + b.x,
    y: C.y + b.y,
    z: (l = y == null ? void 0 : y.z) != null ? l : 0,
    scaleX: x.x * b.scaleX,
    scaleY: x.y * b.scaleY
  };
}
function BR(e) {
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
var Wt = /* @__PURE__ */ ((e) => (e[e.Idle = 0] = "Idle", e[e.Forward = 1] = "Forward", e[e.Reverse = -1] = "Reverse", e))(Wt || {}), HR = {
  x: 0.2,
  y: 0.2
}, YR = {
  x: 10,
  y: 10
};
function GR(e, t, n, r = 25, o = HR, s = YR) {
  const { x: a, y: i } = t, { rect: c, isTop: l, isBottom: f, isLeft: d, isRight: h } = Ox(e), p = Eo(e), y = wn(e, !0), v = Oc(y), x = v !== null ? (v == null ? void 0 : v.scaleX) < 0 : !1, C = v !== null ? (v == null ? void 0 : v.scaleY) < 0 : !1, b = new vn(
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
    height: b.height * o.y,
    width: b.width * o.x
  };
  return w.height > 0 && (!l || C && !f) && i <= b.top + w.height && (n == null ? void 0 : n.y) !== 1 && a >= b.left - s.x && a <= b.right + s.x ? (g.y = C ? 1 : -1, S.y = r * Math.abs(
    (b.top + w.height - i) / w.height
  )) : w.height > 0 && (!f || C && !l) && i >= b.bottom - w.height && (n == null ? void 0 : n.y) !== -1 && a >= b.left - s.x && a <= b.right + s.x && (g.y = C ? -1 : 1, S.y = r * Math.abs(
    (b.bottom - w.height - i) / w.height
  )), w.width > 0 && (!h || x && !d) && a >= b.right - w.width && (n == null ? void 0 : n.x) !== -1 && i >= b.top - s.y && i <= b.bottom + s.y ? (g.x = x ? -1 : 1, S.x = r * Math.abs(
    (b.right - w.width - a) / w.width
  )) : w.width > 0 && (!d || x && !h) && a <= b.left + w.width && (n == null ? void 0 : n.x) !== 1 && i >= b.top - s.y && i <= b.bottom + s.y && (g.x = x ? 1 : -1, S.x = r * Math.abs(
    (b.left + w.width - a) / w.width
  )), {
    direction: g,
    speed: S
  };
}
function Rx(e, { block: t = "nearest", inline: n = "nearest" } = {}) {
  if (!or(e))
    return;
  const r = yd(e), o = [];
  for (const s of r) {
    if (!or(s))
      continue;
    const { top: a, left: i } = UR(e, s);
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
function lp(e) {
  let t = 0, n = 0, r = e;
  for (; r; ) {
    t += r.offsetTop, n += r.offsetLeft;
    const o = r.offsetParent;
    if (!or(o))
      break;
    t += o.clientTop, n += o.clientLeft, r = o;
  }
  return { top: t, left: n };
}
function UR(e, t) {
  const n = lp(e), r = lp(t);
  return {
    top: n.top - r.top - t.clientTop,
    left: n.left - r.left - t.clientLeft
  };
}
function KR(e, t, n) {
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
function qR(e, t, n) {
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
function Ix({ element: e, keyframes: t, options: n }) {
  return e.animate(t, n).finished;
}
function dp(e, t = wn(e).translate, n = !0) {
  if (n) {
    const r = wx(
      e,
      (o) => "translate" in o
    );
    if (r) {
      const { translate: o = "" } = r[0];
      if (typeof o == "string") {
        const s = zs(o);
        if (s)
          return s;
      }
    }
  }
  if (t) {
    const r = zs(t);
    if (r)
      return r;
  }
  return { x: 0, y: 0, z: 0 };
}
var XR = new vf((e) => setTimeout(e, 0)), Es = /* @__PURE__ */ new Map(), ZR = Es.clear.bind(Es);
function QR(e) {
  const t = e.ownerDocument;
  let n = Es.get(t);
  if (n) return n;
  n = t.getAnimations(), Es.set(t, n), XR.schedule(ZR);
  const r = n.filter(
    (o) => Dc(o.effect) && o.effect.target === e
  );
  return Es.set(e, r), n;
}
function JR(e, t) {
  const n = QR(e).filter((r) => {
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
var pn = class extends vn {
  constructor(e, t = {}) {
    var n, r, o, s;
    const {
      frameTransform: a = Eo(e),
      ignoreTransforms: i,
      getBoundingClientRect: c = Ac
    } = t, l = JR(e, {
      properties: ["transform", "translate", "scale", "width", "height"],
      isValidTarget: (w) => (w !== e || hf()) && w.contains(e)
    }), f = c(e);
    let { top: d, left: h, width: p, height: y } = f, v;
    const x = wn(e), C = Oc(x), b = {
      x: (n = C == null ? void 0 : C.scaleX) != null ? n : 1,
      y: (r = C == null ? void 0 : C.scaleY) != null ? r : 1
    }, g = e3(e, x);
    l == null || l(), C && (v = qR(
      f,
      C,
      x.transformOrigin
    ), (i || g) && (d = v.top, h = v.left, p = v.width, y = v.height));
    const S = {
      width: (o = v == null ? void 0 : v.width) != null ? o : p,
      height: (s = v == null ? void 0 : v.height) != null ? s : y
    };
    if (g && !i && v) {
      const w = KR(
        v,
        g,
        x.transformOrigin
      );
      d = w.top, h = w.left, p = w.width, y = w.height, b.x = g.scaleX, b.y = g.scaleY;
    }
    a && (i || (h *= a.scaleX, p *= a.scaleX, d *= a.scaleY, y *= a.scaleY), h += a.x, d += a.y), super(h, d, p, y), this.scale = b, this.intrinsicWidth = S.width, this.intrinsicHeight = S.height;
  }
};
function e3(e, t) {
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
  return a ? Oc({
    transform: r ?? t.transform,
    translate: o ?? t.translate,
    scale: s ?? t.scale
  }) : null;
}
function Ps(e) {
  return "style" in e && typeof e.style == "object" && e.style !== null && "setProperty" in e.style && "removeProperty" in e.style && typeof e.style.setProperty == "function" && typeof e.style.removeProperty == "function";
}
var t3 = class {
  constructor(e) {
    this.element = e, this.initial = /* @__PURE__ */ new Map();
  }
  set(e, t = "") {
    const { element: n } = this;
    if (Ps(n))
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
    if (Ps(n))
      for (const r of e) {
        const o = `${t}${r}`;
        n.style.removeProperty(o);
      }
  }
  reset() {
    const { element: e } = this;
    if (Ps(e)) {
      for (const [t, n] of this.initial)
        e.style.setProperty(t, n);
      e.getAttribute("style") === "" && e.removeAttribute("style");
    }
  }
};
function Rr(e) {
  return e ? e instanceof Dt(e).Element || ga(e) && e.nodeType === Node.ELEMENT_NODE : !1;
}
function Bs(e) {
  if (!e) return !1;
  const { KeyboardEvent: t } = Dt(e.target);
  return e instanceof t;
}
function n3(e) {
  if (!e) return !1;
  const { PointerEvent: t } = Dt(e.target);
  return e instanceof t;
}
function r3(e) {
  if (!Rr(e)) return !1;
  const { tagName: t } = e;
  return t === "INPUT" || t === "TEXTAREA" || o3(e);
}
function o3(e) {
  return e.hasAttribute("contenteditable") && e.getAttribute("contenteditable") !== "false";
}
var ml = {};
function bd(e) {
  const t = ml[e] == null ? 0 : ml[e] + 1;
  return ml[e] = t, `${e}-${t}`;
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
    const o = $t.distance(t.shape.center, n);
    return {
      id: r,
      value: 1 / o,
      type: Nc.PointerIntersection,
      priority: Mc.High
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
    const { position: o } = e, s = $t.distance(t.shape.center, o.current), i = r / (n.current.area + t.shape.area - r) / s;
    return {
      id: t.id,
      value: i,
      type: Nc.ShapeIntersection,
      priority: Mc.Normal
    };
  }
  return null;
}, Tx = (e) => {
  var t;
  return (t = s3(e)) != null ? t : a3(e);
}, i3 = (e) => {
  const { dragOperation: t, droppable: n } = e, { shape: r, position: o } = t;
  if (!n.shape)
    return null;
  const s = r ? vn.from(r.current.boundingRectangle).corners : void 0, i = vn.from(
    n.shape.boundingRectangle
  ).corners.reduce(
    (c, l, f) => {
      var d;
      return c + $t.distance(
        $t.from(l),
        (d = s == null ? void 0 : s[f]) != null ? d : o.current
      );
    },
    0
  ) / 4;
  return {
    id: n.id,
    value: 1 / i,
    type: Nc.Collision,
    priority: Mc.Normal
  };
}, c3 = Object.create, gf = Object.defineProperty, l3 = Object.defineProperties, d3 = Object.getOwnPropertyDescriptor, u3 = Object.getOwnPropertyDescriptors, Ti = Object.getOwnPropertySymbols, jx = Object.prototype.hasOwnProperty, $x = Object.prototype.propertyIsEnumerable, Wx = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Yo = (e) => {
  throw TypeError(e);
}, xd = (e, t, n) => t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Hs = (e, t) => {
  for (var n in t || (t = {}))
    jx.call(t, n) && xd(e, n, t[n]);
  if (Ti)
    for (var n of Ti(t))
      $x.call(t, n) && xd(e, n, t[n]);
  return e;
}, yf = (e, t) => l3(e, u3(t)), up = (e, t) => gf(e, "name", { value: t, configurable: !0 }), Lx = (e, t) => {
  var n = {};
  for (var r in e)
    jx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ti)
    for (var r of Ti(e))
      t.indexOf(r) < 0 && $x.call(e, r) && (n[r] = e[r]);
  return n;
}, Go = (e) => {
  var t;
  return [, , , c3((t = e == null ? void 0 : e[Wx("metadata")]) != null ? t : null)];
}, Fx = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ms = (e) => e !== void 0 && typeof e != "function" ? Yo("Function expected") : e, f3 = (e, t, n, r, o) => ({ kind: Fx[e], name: t, metadata: r, addInitializer: (s) => n._ ? Yo("Already initialized") : o.push(ms(s || null)) }), zr = (e, t) => xd(t, Wx("metadata"), e[3]), Ge = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, zt = (e, t, n, r, o, s) => {
  var a, i, c, l, f, d = t & 7, h = !!(t & 8), p = !!(t & 16), y = d > 3 ? e.length + 1 : d ? h ? 1 : 2 : 0, v = Fx[d + 5], x = d > 3 && (e[y - 1] = []), C = e[y] || (e[y] = []), b = d && (!p && !h && (o = o.prototype), d < 5 && (d > 3 || !p) && d3(d < 4 ? o : { get [n]() {
    return Oe(this, s);
  }, set [n](S) {
    return mt(this, s, S);
  } }, n));
  d ? p && d < 4 && up(s, (d > 2 ? "set " : d > 1 ? "get " : "") + n) : up(o, n);
  for (var g = r.length - 1; g >= 0; g--)
    l = f3(d, n, c = {}, e[3], C), d && (l.static = h, l.private = p, f = l.access = { has: p ? (S) => h3(o, S) : (S) => n in S }, d ^ 3 && (f.get = p ? (S) => (d ^ 1 ? Oe : Ir)(S, o, d ^ 4 ? s : b.get) : (S) => S[n]), d > 2 && (f.set = p ? (S, w) => mt(S, o, w, d ^ 4 ? s : b.set) : (S, w) => S[n] = w)), i = (0, r[g])(d ? d < 4 ? p ? s : b[v] : d > 4 ? void 0 : { get: b.get, set: b.set } : o, l), c._ = 1, d ^ 4 || i === void 0 ? ms(i) && (d > 4 ? x.unshift(i) : d ? p ? s = i : b[v] = i : o = i) : typeof i != "object" || i === null ? Yo("Object expected") : (ms(a = i.get) && (b.get = a), ms(a = i.set) && (b.set = a), ms(a = i.init) && x.unshift(a));
  return d || zr(e, o), b && gf(o, n, b), p ? d ^ 4 ? s : b : o;
}, bf = (e, t, n) => t.has(e) || Yo("Cannot " + n), h3 = (e, t) => Object(t) !== t ? Yo('Cannot use the "in" operator on this value') : e.has(t), Oe = (e, t, n) => (bf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => t.has(e) ? Yo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), mt = (e, t, n, r) => (bf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ir = (e, t, n) => (bf(e, t, "access private method"), n), fp = {
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
var w3 = ["dragover", "dragmove"], C3 = class extends ut {
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
    } = t ?? {}, c = n ? `${r}-${n}` : bd(r), l = n ? `${o}-${n}` : bd(o);
    let f, d, h, p;
    const y = (w = p) => {
      !h || !w || (h == null ? void 0 : h.nodeValue) !== w && (h.nodeValue = w);
    }, v = () => Ri.schedule(y), x = S3(
      v,
      i
    ), C = Object.entries(s).map(
      ([w, P]) => this.manager.monitor.addEventListener(
        w,
        (_, k) => {
          const D = h;
          if (!D) return;
          const O = P == null ? void 0 : P(_, k);
          O && D.nodeValue !== O && (p = O, w3.includes(w) ? x() : (v(), x.cancel()));
        }
      )
    ), b = () => {
      let w = [];
      f != null && f.isConnected || (f = b3(
        c,
        a.draggable
      ), w.push(f)), d != null && d.isConnected || (d = x3(l), h = document.createTextNode(""), d.appendChild(h), w.push(d)), w.length > 0 && document.body.append(...w);
    }, g = /* @__PURE__ */ new Set();
    function S() {
      for (const w of g)
        w();
    }
    this.registerEffect(() => {
      var w;
      g.clear();
      for (const P of this.manager.registry.draggables.value) {
        const _ = (w = P.handle) != null ? w : P.element;
        if (_) {
          (!f || !d) && g.add(b), (!y3(_) || hf()) && !_.hasAttribute("tabindex") && g.add(() => _.setAttribute("tabindex", "0")), !_.hasAttribute("role") && _.tagName.toLowerCase() !== "button" && g.add(
            () => _.setAttribute("role", fp.role)
          ), _.hasAttribute("aria-roledescription") || g.add(
            () => _.setAttribute(
              "aria-roledescription",
              fp.roleDescription
            )
          ), _.hasAttribute("aria-describedby") || g.add(
            () => _.setAttribute("aria-describedby", c)
          );
          for (const D of ["aria-pressed", "aria-grabbed"]) {
            const O = String(P.isDragging);
            _.getAttribute(D) !== O && g.add(() => _.setAttribute(D, O));
          }
          const k = String(P.disabled);
          _.getAttribute("aria-disabled") !== k && g.add(
            () => _.setAttribute("aria-disabled", k)
          );
        }
      }
      g.size > 0 && Ri.schedule(S);
    }), this.destroy = () => {
      super.destroy(), f == null || f.remove(), d == null || d.remove(), C.forEach((w) => w());
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
var ji = /* @__PURE__ */ new Map(), Vx, zx, Bx, Hx, wd, Ms, An, xf, Po, Yx, Gx, Ux, Kx, sr = class extends (wd = va, Hx = [Ce], Bx = [We], zx = [We], Vx = [We], wd) {
  constructor(t, n) {
    super(t, n), Ge(An, 5, this), Fe(this, Po), Fe(this, Ms, /* @__PURE__ */ new Set()), Fe(this, xf, Ge(An, 8, this, /* @__PURE__ */ new Set())), Ge(An, 11, this), this.registerEffect(Ir(this, Po, Yx));
  }
  /**
   * Registers CSS rules to be injected into the active drag operation's
   * document and shadow roots. The StyleInjector handles tracking
   * which roots need the styles and cleaning up when they're no longer needed.
   *
   * Returns a cleanup function that unregisters the rules.
   */
  register(t) {
    return Oe(this, Ms).add(t), () => {
      Oe(this, Ms).delete(t);
    };
  }
  /**
   * Adds an additional root to track for style injection.
   * Returns a cleanup function that removes the root.
   */
  addRoot(t) {
    return we(() => {
      const n = new Set(this.additionalRoots);
      n.add(t), this.additionalRoots = n;
    }), () => {
      we(() => {
        const n = new Set(this.additionalRoots);
        n.delete(t), this.additionalRoots = n;
      });
    };
  }
  get sourceRoot() {
    var t;
    const { source: n } = this.manager.dragOperation;
    return Di((t = n == null ? void 0 : n.element) != null ? t : null);
  }
  get targetRoot() {
    var t;
    const { target: n } = this.manager.dragOperation;
    return Di((t = n == null ? void 0 : n.element) != null ? t : null);
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
An = Go(wd);
Ms = /* @__PURE__ */ new WeakMap();
xf = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
Yx = function() {
  const { roots: e } = this, t = [];
  for (const n of e)
    for (const r of Oe(this, Ms))
      t.push(Ir(this, Po, Gx).call(this, n, r));
  return () => {
    for (const n of t)
      n();
  };
};
Gx = function(e, t) {
  let n = ji.get(e);
  n || (n = /* @__PURE__ */ new Map(), ji.set(e, n));
  let r = n.get(t);
  if (!r) {
    const s = ff(e) ? Ir(this, Po, Ux).call(this, e, n, t) : Ir(this, Po, Kx).call(this, e, n, t);
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
Ux = function(e, t, n) {
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
      a.disconnect(), o.remove(), t.delete(n), t.size === 0 && ji.delete(e);
    }
  };
};
Kx = function(e, t, n) {
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
      if (pf(e) && ((a = e.host) != null && a.isConnected)) {
        const i = e.adoptedStyleSheets.indexOf(s);
        i !== -1 && e.adoptedStyleSheets.splice(i, 1);
      }
      t.delete(n), t.size === 0 && ji.delete(e);
    }
  };
};
zt(An, 4, "additionalRoots", Hx, sr, xf);
zt(An, 2, "sourceRoot", Bx, sr);
zt(An, 2, "targetRoot", zx, sr);
zt(An, 2, "roots", Vx, sr);
zr(An, sr);
sr.configure = ma(sr);
var Rc = sr, _3 = class extends ut {
  constructor(e, t) {
    super(e, t), this.manager = e;
    const { cursor: n = "grabbing" } = t ?? {}, r = e.registry.plugins.get(
      Rc
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
}, ya = "data-dnd-", Cd = `${ya}dropping`, tt = "--dnd-", on = `${ya}dragging`, $i = `${ya}placeholder`, k3 = [
  on,
  $i,
  "popover",
  "aria-pressed",
  "aria-grabbing"
], E3 = ["view-transition-name"], P3 = `
  :is(:root,:host) [${on}] {
    position: fixed !important;
    pointer-events: none !important;
    touch-action: none;
    z-index: calc(infinity);
    will-change: translate;
    top: var(${tt}top, 0px) !important;
    left: var(${tt}left, 0px) !important;
    right: unset !important;
    bottom: unset !important;
    width: var(${tt}width, auto);
    max-width: var(${tt}width, auto);
    height: var(${tt}height, auto);
    max-height: var(${tt}height, auto);
    transform: var(${tt}transform, none) !important;
    transition: var(${tt}transition) !important;
  }

  :is(:root,:host) [${$i}] {
    transition: none;
  }

  :is(:root,:host) [${$i}='hidden'] {
    visibility: hidden;
  }

  [${on}] * {
    pointer-events: none !important;
  }

  [${on}]:not([${Cd}]) {
    translate: var(${tt}translate) !important;
  }

  [${on}][style*='${tt}scale'] {
    scale: var(${tt}scale) !important;
    transform-origin: var(${tt}transform-origin) !important;
  }

  @layer dnd-kit {
    :where([${on}][popover]) {
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
  [${on}]::backdrop, [${ya}overlay]:not([${on}]) {
    display: none;
    visibility: hidden;
  }
`.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();
function M3(e, t = "hidden") {
  return we(() => {
    const { element: n, manager: r } = e;
    if (!n || !r) return;
    const o = N3(
      n,
      r.registry.droppables
    ), s = [], a = CR(n), { remove: i } = a;
    return D3(o, a, s), A3(a, t), a.remove = () => {
      s.forEach((c) => c()), i.call(a);
    }, a;
  });
}
function N3(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const r of t)
    if (r.element && (e === r.element || e.contains(r.element))) {
      const o = `${ya}${bd("dom-id")}`;
      r.element.setAttribute(o, ""), n.set(r, o);
    }
  return n;
}
function D3(e, t, n) {
  for (const [r, o] of e) {
    if (!r.element) continue;
    const s = `[${o}]`, a = t.matches(s) ? t : t.querySelector(s);
    if (r.element.removeAttribute(o), !a) continue;
    const i = r.element;
    r.proxy = a, a.removeAttribute(o), md.set(i, a), n.push(() => {
      md.delete(i), r.proxy = void 0;
    });
  }
}
function A3(e, t = "hidden") {
  e.setAttribute("inert", "true"), e.setAttribute("tab-index", "-1"), e.setAttribute("aria-hidden", "true"), e.setAttribute($i, t);
}
function qx(e, t) {
  return e === t ? !0 : ko(e) === ko(t);
}
function hp(e) {
  const { target: t } = e;
  "newState" in e && e.newState === "closed" && Rr(t) && t.hasAttribute("popover") && requestAnimationFrame(() => go(t));
}
function Sd(e) {
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
        if (Ps(e) && Ps(t)) {
          const l = e.style;
          for (const f of Array.from(t.style))
            l.getPropertyValue(f) === "" && t.style.removeProperty(f);
          for (const f of Array.from(l)) {
            if (E3.includes(f) || f.startsWith(tt))
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
function R3(e, t, n) {
  const r = new MutationObserver((o) => {
    for (const s of o)
      if (s.addedNodes.length !== 0)
        for (const a of Array.from(s.addedNodes)) {
          if (a.contains(e) && e.nextElementSibling !== t) {
            e.insertAdjacentElement("afterend", t), go(n);
            return;
          }
          if (a.contains(t) && t.previousElementSibling !== e) {
            t.insertAdjacentElement("beforebegin", e), go(n);
            return;
          }
        }
    e.isConnected && t.isConnected && e.nextElementSibling !== t && (e.insertAdjacentElement("afterend", t), go(n));
  });
  return r.observe(e.ownerDocument.body, {
    childList: !0,
    subtree: !0
  }), r;
}
function I3(e) {
  return new ResizeObserver(() => {
    var t, n, r;
    const o = new pn(e.placeholder, {
      frameTransform: e.frameTransform,
      ignoreTransforms: !0
    }), s = (t = e.transformOrigin) != null ? t : { x: 1, y: 1 }, a = (e.width - o.width) * s.x + e.delta.x, i = (e.height - o.height) * s.y + e.delta.y, c = _x();
    if (e.styles.set(
      {
        width: o.width - e.widthOffset,
        height: o.height - e.heightOffset,
        top: e.top + i + c.y,
        left: e.left + a + c.x
      },
      tt
    ), (n = e.getElementMutationObserver()) == null || n.takeRecords(), Sd(e.element) && Sd(e.placeholder)) {
      const v = Array.from(e.element.cells), x = Array.from(e.placeholder.cells);
      e.getSavedCellWidths() || e.setSavedCellWidths(v.map((C) => C.style.width));
      for (const [C, b] of v.entries()) {
        const g = x[C];
        b.style.width = `${g.getBoundingClientRect().width}px`;
      }
    }
    const l = (r = e.getTranslate()) != null ? r : { x: 0, y: 0 }, f = e.left + a + c.x + l.x, d = e.top + i + c.y + l.y, h = o.width - e.widthOffset, p = o.height - e.heightOffset, y = e.frameTransform;
    e.dragOperation.shape = new vn(
      f * y.scaleX + y.x,
      d * y.scaleY + y.y,
      h * y.scaleX,
      p * y.scaleY
    );
  });
}
var T3 = 250, j3 = "ease";
function $3(e) {
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
    easing: i = j3
  } = s ?? {};
  go(e.feedbackElement);
  const [, c] = (t = wx(
    e.feedbackElement,
    (b) => "translate" in b
  )) != null ? t : [];
  c == null || c.pause();
  const l = (n = e.placeholder) != null ? n : e.element, f = {
    frameTransform: qx(e.feedbackElement, l) ? null : void 0
  }, d = new pn(e.feedbackElement, f), h = (r = zs(wn(e.feedbackElement).translate)) != null ? r : e.translate, p = new pn(l, f), y = vn.delta(d, p, e.alignment), v = {
    x: h.x - y.x,
    y: h.y - y.y
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
  e.styles.set({ transition: e.transition }, tt), e.feedbackElement.setAttribute(Cd, ""), (o = e.getElementMutationObserver()) == null || o.takeRecords(), Ix({
    element: e.feedbackElement,
    keyframes: yf(Hs(Hs({}, x), C), {
      translate: [
        `${h.x}px ${h.y}px 0`,
        `${v.x}px ${v.y}px 0`
      ]
    }),
    options: {
      duration: mf(Dt(e.feedbackElement)) ? 0 : e.moved || e.feedbackElement !== e.element ? a : 0,
      easing: i
    }
  }).then(() => {
    e.feedbackElement.removeAttribute(Cd), c == null || c.finish(), e.cleanup(), requestAnimationFrame(e.restoreFocus);
  });
}
var Xx, _d, Ys, wf, fi, Zx, Qx, Mo = class extends (_d = ut, Xx = [Ce], _d) {
  constructor(t, n) {
    super(t, n), Fe(this, fi), Fe(this, wf, Ge(Ys, 8, this)), Ge(Ys, 11, this), this.state = {
      initial: {},
      current: {}
    };
    const r = t.registry.plugins.get(Rc), o = r == null ? void 0 : r.register(P3);
    if (o) {
      const s = this.destroy.bind(this);
      this.destroy = () => {
        o(), s();
      };
    }
    this.registerEffect(Ir(this, fi, Zx).bind(this, r)), this.registerEffect(Ir(this, fi, Qx));
  }
};
Ys = Go(_d);
wf = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakSet();
Zx = function(e) {
  const { overlay: t } = this;
  if (!t || !e) return;
  const n = Di(t);
  if (n)
    return e.addRoot(n);
};
Qx = function() {
  var e, t, n, r, o, s, a;
  const { state: i, manager: c, options: l } = this, { dragOperation: f } = c, { position: d, source: h, status: p } = f;
  if (p.idle) {
    i.current = {}, i.initial = {};
    return;
  }
  if (!h) return;
  const { element: y } = h, v = h.pluginConfig(Mo), x = (t = (e = v == null ? void 0 : v.feedback) != null ? e : l == null ? void 0 : l.feedback) != null ? t : "default", C = typeof x == "function" ? x(h, c) : x;
  if (!y || C === "none" || !p.initialized || p.initializing)
    return;
  const { initial: b } = i, g = (n = this.overlay) != null ? n : y, S = Eo(g), w = Eo(y), P = !qx(y, g), _ = new pn(y, {
    frameTransform: P ? w : null,
    ignoreTransforms: !P
  }), k = {
    x: w.scaleX / S.scaleX,
    y: w.scaleY / S.scaleY
  };
  let { width: D, height: O, top: T, left: W } = _;
  P && (D = D / k.x, O = O / k.y);
  const F = new t3(g), L = wn(y), {
    transition: H,
    translate: V,
    boxSizing: K,
    paddingBlockStart: I,
    paddingBlockEnd: j,
    paddingInlineStart: ne,
    paddingInlineEnd: N,
    borderInlineStartWidth: M,
    borderInlineEndWidth: $,
    borderBlockStartWidth: z,
    borderBlockEndWidth: U
  } = L, G = H.split(",").filter((q) => !/^\s*(transform|translate|scale)\b/.test(q)).join(","), R = Oc(L), Z = L.transform, J = C === "clone", se = K === "content-box", le = se ? parseInt(ne) + parseInt(N) + parseInt(M) + parseInt($) : 0, he = se ? parseInt(I) + parseInt(j) + parseInt(z) + parseInt(U) : 0, xe = C !== "move" && !this.overlay ? M3(h, J ? "clone" : "hidden") : null, Ve = we(
    () => Bs(c.dragOperation.activatorEvent)
  );
  if (!b.translate) {
    if (this.overlay && R)
      b.translate = { x: R.x, y: R.y };
    else if (V !== "none") {
      const q = zs(V);
      q && (b.translate = q);
    }
  }
  if (!b.transformOrigin) {
    const q = we(() => d.current), ie = W + ((r = R == null ? void 0 : R.x) != null ? r : 0), _e = T + ((o = R == null ? void 0 : R.y) != null ? o : 0);
    b.transformOrigin = {
      x: (q.x - ie * S.scaleX - S.x) / (D * S.scaleX),
      y: (q.y - _e * S.scaleY - S.y) / (O * S.scaleY)
    };
  }
  const { transformOrigin: et } = b, At = T * S.scaleY + S.y, Ot = W * S.scaleX + S.x;
  if (!b.coordinates && (b.coordinates = {
    x: Ot,
    y: At
  }, k.x !== 1 || k.y !== 1)) {
    const { scaleX: q, scaleY: ie } = w, { x: _e, y: ce } = et;
    b.coordinates.x += (D * q - D) * _e, b.coordinates.y += (O * ie - O) * ce;
  }
  b.dimensions || (b.dimensions = { width: D, height: O }), b.frameTransform || (b.frameTransform = S);
  const bt = {
    x: b.coordinates.x - Ot,
    y: b.coordinates.y - At
  }, Rt = {
    width: (b.dimensions.width * b.frameTransform.scaleX - D * S.scaleX) * et.x,
    height: (b.dimensions.height * b.frameTransform.scaleY - O * S.scaleY) * et.y
  }, Ke = {
    x: bt.x / S.scaleX + Rt.width,
    y: bt.y / S.scaleY + Rt.height
  }, It = {
    left: W + Ke.x,
    top: T + Ke.y
  };
  g.setAttribute(on, "true");
  const st = we(() => f.transform), en = (s = b.translate) != null ? s : { x: 0, y: 0 }, Bt = st.x * S.scaleX + en.x, pe = st.y * S.scaleY + en.y, $n = _x();
  F.set(
    {
      width: D - le,
      height: O - he,
      top: It.top + $n.y,
      left: It.left + $n.x,
      translate: `${Bt}px ${pe}px 0`,
      transform: this.overlay ? "none" : Z,
      transition: G ? `${G}, translate 0ms linear` : "translate 0ms linear",
      scale: P ? `${k.x} ${k.y}` : "",
      "transform-origin": `${et.x * 100}% ${et.y * 100}%`
    },
    tt
  ), xe && (y.insertAdjacentElement("afterend", xe), l != null && l.rootElement && (typeof l.rootElement == "function" ? l.rootElement(h) : l.rootElement).appendChild(y)), gd(g) && (g.hasAttribute("popover") || g.setAttribute("popover", "manual"), go(g), g.addEventListener("beforetoggle", hp));
  let Ht, Wn, Ln;
  const dr = I3({
    placeholder: xe,
    element: y,
    feedbackElement: g,
    frameTransform: S,
    transformOrigin: et,
    width: D,
    height: O,
    top: T,
    left: W,
    widthOffset: le,
    heightOffset: he,
    delta: Ke,
    styles: F,
    dragOperation: f,
    getTranslate: () => i.current.translate,
    getElementMutationObserver: () => Ht,
    getSavedCellWidths: () => Ln,
    setSavedCellWidths: (q) => {
      Ln = q;
    }
  }), Fn = new pn(g);
  we(() => f.shape = Fn);
  const Vn = Dt(g), ur = (q) => {
    this.manager.actions.stop({ event: q });
  }, Tt = mf(Vn);
  Ve && Vn.addEventListener("resize", ur), we(() => h.status) === "idle" && requestAnimationFrame(() => h.status = "dragging"), xe && (dr.observe(xe), Ht = O3(
    y,
    xe,
    J
  ), Wn = R3(
    y,
    xe,
    g
  ));
  const ft = (a = c.dragOperation.source) == null ? void 0 : a.id, tn = () => {
    var q;
    if (!Ve || ft == null) return;
    const ie = c.registry.draggables.get(ft), _e = (q = ie == null ? void 0 : ie.handle) != null ? q : ie == null ? void 0 : ie.element;
    or(_e) && _e.focus();
  }, zn = () => {
    Ht == null || Ht.disconnect(), Wn == null || Wn.disconnect(), dr.disconnect(), Vn.removeEventListener("resize", ur), gd(g) && (g.removeEventListener(
      "beforetoggle",
      hp
    ), g.removeAttribute("popover")), g.removeAttribute(on), F.reset();
    const q = () => {
      var ie;
      if (Ln && Sd(y)) {
        const at = Array.from(y.cells);
        for (const [nn, Cn] of at.entries())
          Cn.style.width = (ie = Ln[nn]) != null ? ie : "";
      }
      h.status = "idle";
      const _e = i.current.translate != null, ce = f.status.dragging;
      xe && (!ce && _e || xe.parentElement !== g.parentElement) && g.isConnected && xe.replaceWith(g), xe == null || xe.remove();
    };
    g === this.overlay ? setTimeout(q, 0) : q();
  }, fr = l == null ? void 0 : l.dropAnimation, de = this, ke = ha(
    // Update transform on move
    () => {
      var q, ie, _e;
      const { transform: ce, status: at } = f;
      if (!(!ce.x && !ce.y && !i.current.translate) && at.dragging) {
        const nn = (q = b.translate) != null ? q : { x: 0, y: 0 }, Cn = {
          x: ce.x / S.scaleX + nn.x,
          y: ce.y / S.scaleY + nn.y
        }, xt = i.current.translate, Be = we(() => f.modifiers), Sn = we(() => {
          var _n;
          return (_n = f.shape) == null ? void 0 : _n.current;
        }), hr = l == null ? void 0 : l.keyboardTransition, Ca = Ve && !Tt && hr !== null ? `${(ie = hr == null ? void 0 : hr.duration) != null ? ie : 250}ms ${(_e = hr == null ? void 0 : hr.easing) != null ? _e : "cubic-bezier(0.25, 1, 0.5, 1)"}` : "0ms linear";
        if (F.set(
          {
            transition: G ? `${G}, translate ${Ca}` : `translate ${Ca}`,
            translate: `${Cn.x}px ${Cn.y}px 0`
          },
          tt
        ), Ht == null || Ht.takeRecords(), Sn && Sn !== Fn && xt && !Be.length) {
          const _n = $t.delta(Cn, xt);
          f.shape = vn.from(
            Sn.boundingRectangle
          ).translate(
            _n.x * S.scaleX,
            _n.y * S.scaleY
          );
        } else
          f.shape = new pn(g);
        i.current.translate = Cn;
      }
    },
    // Drop animation
    function() {
      if (f.status.dropped) {
        this.dispose(), h.status = "dropping";
        const q = (v == null ? void 0 : v.dropAnimation) !== void 0 ? v.dropAnimation : de.dropAnimation !== void 0 ? de.dropAnimation : fr;
        let ie = i.current.translate;
        const _e = ie != null;
        if (!ie && y !== g && (ie = { x: 0, y: 0 }), !ie || q === null) {
          zn();
          return;
        }
        c.renderer.rendering.then(() => {
          $3({
            source: h,
            element: y,
            feedbackElement: g,
            placeholder: xe,
            translate: ie,
            moved: _e,
            transition: H,
            alignment: h.alignment,
            styles: F,
            animation: q ?? void 0,
            getElementMutationObserver: () => Ht,
            cleanup: zn,
            restoreFocus: tn
          });
        });
      }
    }
  );
  return () => {
    zn(), ke();
  };
};
zt(Ys, 4, "overlay", Xx, Mo, wf);
zr(Ys, Mo);
Mo.configure = ma(Mo);
var Jx = Mo, Jo = !0, W3 = !1, ew, tw, nw, rw, qn, Cf, Sf;
rw = (nw = [Ce], Wt.Forward), tw = (ew = [Ce], Wt.Reverse);
var Gs = class {
  constructor() {
    Fe(this, Cf, Ge(qn, 8, this, Jo)), Ge(qn, 11, this), Fe(this, Sf, Ge(qn, 12, this, Jo)), Ge(qn, 15, this);
  }
  isLocked(e) {
    return e === Wt.Idle ? !1 : e == null ? this[Wt.Forward] === Jo && this[Wt.Reverse] === Jo : this[e] === Jo;
  }
  unlock(e) {
    e !== Wt.Idle && (this[e] = W3);
  }
};
qn = Go(null);
Cf = /* @__PURE__ */ new WeakMap();
Sf = /* @__PURE__ */ new WeakMap();
zt(qn, 4, rw, nw, Gs, Cf);
zt(qn, 4, tw, ew, Gs, Sf);
zr(qn, Gs);
var L3 = [Wt.Forward, Wt.Reverse], pp = class {
  constructor() {
    this.x = new Gs(), this.y = new Gs();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
}, F3 = class extends ut {
  constructor(e) {
    super(e);
    const t = Wo(new pp());
    let n = null;
    this.signal = t, Vt(() => {
      const { status: r } = e.dragOperation;
      if (!r.initialized) {
        n = null, t.value = new pp();
        return;
      }
      const { delta: o } = e.dragOperation.position;
      if (n) {
        const s = {
          x: mp(o.x, n.x),
          y: mp(o.y, n.y)
        }, a = t.peek();
        je(() => {
          for (const i of Ab)
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
function mp(e, t) {
  return Math.sign(e - t);
}
var ow, kd, Us, _f, Un, Ed, ba = class extends (kd = va, ow = [Ce], kd) {
  constructor(e) {
    super(e), Fe(this, _f, Ge(Us, 8, this, !1)), Ge(Us, 11, this), Fe(this, Un), Fe(this, Ed, () => {
      if (!Oe(this, Un))
        return;
      const { element: s, by: a } = Oe(this, Un);
      a.y && (s.scrollTop += a.y), a.x && (s.scrollLeft += a.x);
    }), this.scroll = (s, a) => {
      var i;
      if (this.disabled)
        return !1;
      const c = this.getScrollableElements();
      if (!c)
        return mt(this, Un, void 0), !1;
      const { position: l } = this.manager.dragOperation, f = l == null ? void 0 : l.current;
      if (f) {
        const { by: d } = s ?? {}, h = d ? {
          x: vp(d.x),
          y: vp(d.y)
        } : void 0, p = h ? void 0 : this.scrollIntentTracker.current;
        if (p != null && p.isLocked())
          return !1;
        for (const y of c) {
          const v = TR(y, d);
          if (v.x || v.y) {
            const { speed: x, direction: C } = GR(
              y,
              f,
              h,
              a == null ? void 0 : a.acceleration,
              a == null ? void 0 : a.threshold
            );
            if (p)
              for (const b of Ab)
                p[b].isLocked(C[b]) && (x[b] = 0, C[b] = 0);
            if (C.x || C.y) {
              const { x: b, y: g } = d ?? C, S = b * x.x, w = g * x.y;
              if (S || w) {
                const P = (i = Oe(this, Un)) == null ? void 0 : i.by;
                if (this.autoScrolling && P && (P.x && !S || P.y && !w))
                  continue;
                return mt(this, Un, {
                  element: y,
                  by: {
                    x: S,
                    y: w
                  }
                }), Ri.schedule(Oe(this, Ed)), !0;
              }
            }
          }
        }
      }
      return mt(this, Un, void 0), !1;
    };
    let t = null, n = null;
    const r = td(() => {
      const { position: s, source: a } = e.dragOperation;
      if (!s)
        return null;
      const i = kx(
        Di(a == null ? void 0 : a.element),
        s.current
      );
      return i && (t = i), i ?? t;
    }), o = td(() => {
      const s = r.value, { documentElement: a } = Ho(s);
      if (!s || s === a) {
        const { target: i } = e.dragOperation, c = i == null ? void 0 : i.element;
        if (c) {
          const l = yd(c, {
            excludeElement: !1
          });
          return n = l, l;
        }
      }
      if (s) {
        const i = yd(s, {
          excludeElement: !1
        });
        return this.autoScrolling && n && i.size < (n == null ? void 0 : n.size) ? n : (n = i, i);
      }
      return n = null, null;
    }, sn);
    this.getScrollableElements = () => o.value, this.scrollIntentTracker = new F3(e), this.destroy = e.monitor.addEventListener("dragmove", (s) => {
      this.disabled || s.defaultPrevented || !Bs(e.dragOperation.activatorEvent) || !s.by || this.scroll({ by: s.by }) && s.preventDefault();
    });
  }
};
Us = Go(kd);
_f = /* @__PURE__ */ new WeakMap();
Un = /* @__PURE__ */ new WeakMap();
Ed = /* @__PURE__ */ new WeakMap();
zt(Us, 4, "autoScrolling", ow, ba, _f);
zr(Us, ba);
function vp(e) {
  return e > 0 ? Wt.Forward : e < 0 ? Wt.Reverse : Wt.Idle;
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
}), B3 = 10, Pd = class extends ut {
  constructor(t, n) {
    super(t, n);
    const r = t.registry.plugins.get(ba);
    if (!r)
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    this.destroy = Vt(() => {
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
            () => z3.schedule(
              () => r.scroll(void 0, l)
            ),
            B3
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
Pd.configure = ma(Pd);
var sw = Pd, gp = {
  capture: !0,
  passive: !0
}, vs, H3 = class extends va {
  constructor(e) {
    super(e), Fe(this, vs), this.handleScroll = () => {
      Oe(this, vs) == null && mt(this, vs, setTimeout(() => {
        this.manager.collisionObserver.forceUpdate(!1), mt(this, vs, void 0);
      }, 50));
    };
    const { dragOperation: t } = this.manager;
    this.destroy = Vt(() => {
      var n, r, o;
      if (t.status.dragging) {
        const a = (o = (r = (n = t.source) == null ? void 0 : n.element) == null ? void 0 : r.ownerDocument) != null ? o : document;
        return a.addEventListener("scroll", this.handleScroll, gp), () => {
          a.removeEventListener(
            "scroll",
            this.handleScroll,
            gp
          );
        };
      }
    });
  }
};
vs = /* @__PURE__ */ new WeakMap();
var Y3 = "* { user-select: none !important; -webkit-user-select: none !important; }", G3 = class extends ut {
  constructor(e) {
    super(e), this.manager = e;
    const t = e.registry.plugins.get(
      Rc
    ), n = t == null ? void 0 : t.register(Y3);
    if (this.destroy = Vt(() => {
      const { dragOperation: r } = this.manager;
      if (r.status.initialized)
        return vl(), document.addEventListener("selectionchange", vl, {
          capture: !0
        }), () => {
          document.removeEventListener("selectionchange", vl, {
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
function vl() {
  var e;
  (e = document.getSelection()) == null || e.removeAllRanges();
}
var gs = Object.freeze({
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
}), ao, Wi = class extends So {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, Fe(this, ao, []), this.listeners = new Ex(), this.handleSourceKeyDown = (r, o, s) => {
      if (this.disabled || r.defaultPrevented || !Rr(r.target) || o.disabled)
        return;
      const {
        keyboardCodes: a = gs.keyboardCodes,
        preventActivation: i = gs.preventActivation
      } = s ?? {};
      a.start.includes(r.code) && this.manager.dragOperation.status.idle && (i != null && i(r, o) || this.handleStart(r, o, s));
    };
  }
  bind(t, n = this.options) {
    return Vt(() => {
      var o;
      const s = (o = t.handle) != null ? o : t.element, a = (i) => {
        Bs(i) && this.handleSourceKeyDown(i, t, n);
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
    t.preventDefault(), t.stopImmediatePropagation(), Rx(o);
    const { center: s } = new pn(o);
    if (this.manager.actions.start({
      event: t,
      coordinates: {
        x: s.x,
        y: s.y
      },
      source: n
    }).signal.aborted) return this.cleanup();
    this.sideEffects();
    const i = Ho(o), c = [
      this.listeners.bind(i, [
        {
          type: "keydown",
          listener: (l) => this.handleKeyDown(l, n, r),
          options: { capture: !0 }
        }
      ])
    ];
    Oe(this, ao).push(...c);
  }
  handleKeyDown(t, n, r) {
    const { keyboardCodes: o = gs.keyboardCodes } = r ?? {};
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
    }, c = (o = (r = this.options) == null ? void 0 : r.offset) != null ? o : gs.offset;
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
    const t = this.manager.registry.plugins.get(sw);
    (t == null ? void 0 : t.disabled) === !1 && (t.disable(), Oe(this, ao).push(() => {
      t.enable();
    }));
  }
  cleanup() {
    Oe(this, ao).forEach((t) => t()), mt(this, ao, []);
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
ao = /* @__PURE__ */ new WeakMap();
Wi.configure = ma(Wi);
Wi.defaults = gs;
var U3 = Wi;
function Zr(e, t) {
  return t.includes(e.code);
}
var Sr, K3 = class extends lx {
  constructor() {
    super(...arguments), Fe(this, Sr);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        mt(this, Sr, _o(e));
        break;
      case "pointermove":
        if (!Oe(this, Sr)) return;
        const { x: t, y: n } = _o(e), r = {
          x: t - Oe(this, Sr).x,
          y: n - Oe(this, Sr).y
        }, { tolerance: o } = this.options;
        if (o && dd(r, o)) {
          this.abort();
          return;
        }
        dd(r, this.options.value) && this.activate(e);
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    mt(this, Sr, void 0);
  }
};
Sr = /* @__PURE__ */ new WeakMap();
var io, _r, q3 = class extends lx {
  constructor() {
    super(...arguments), Fe(this, io), Fe(this, _r);
  }
  onEvent(e) {
    switch (e.type) {
      case "pointerdown":
        mt(this, _r, _o(e)), mt(this, io, setTimeout(
          () => this.activate(e),
          this.options.value
        ));
        break;
      case "pointermove":
        if (!Oe(this, _r)) return;
        const { x: t, y: n } = _o(e), r = {
          x: t - Oe(this, _r).x,
          y: n - Oe(this, _r).y
        };
        dd(r, this.options.tolerance) && this.abort();
        break;
      case "pointerup":
        this.abort();
        break;
    }
  }
  abort() {
    Oe(this, io) && (clearTimeout(Oe(this, io)), mt(this, _r, void 0), mt(this, io, void 0));
  }
};
io = /* @__PURE__ */ new WeakMap();
_r = /* @__PURE__ */ new WeakMap();
var fo = class {
};
fo.Delay = q3;
fo.Distance = K3;
var Md = Object.freeze({
  activationConstraints(e, t) {
    var n;
    const { pointerType: r, target: o } = e;
    if (!(r === "mouse" && Rr(o) && (t.handle === o || (n = t.handle) != null && n.contains(o))))
      return r === "touch" ? [
        new fo.Delay({ value: 250, tolerance: 5 })
      ] : r3(o) && !e.defaultPrevented ? [
        new fo.Delay({ value: 200, tolerance: 0 })
      ] : [
        new fo.Delay({ value: 200, tolerance: 10 }),
        new fo.Distance({ value: 5 })
      ];
  },
  preventActivation(e, t) {
    var n;
    const { target: r } = e;
    if (r === t.element || r === t.handle || !Rr(r) || (n = t.handle) != null && n.contains(r)) return !1;
    const o = _R(r);
    return o === t.element ? !1 : !!o;
  }
}), co, Li = class extends So {
  constructor(t, n) {
    super(t), this.manager = t, this.options = n, Fe(this, co, /* @__PURE__ */ new Set()), this.listeners = new Ex(), this.latest = {
      event: void 0,
      coordinates: void 0
    }, this.handleMove = () => {
      const { event: r, coordinates: o } = this.latest;
      !r || !o || this.manager.actions.move({ event: r, to: o });
    }, this.handleCancel = this.handleCancel.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  activationConstraints(t, n, r = this.options) {
    const { activationConstraints: o = Md.activationConstraints } = r ?? {};
    return typeof o == "function" ? o(t, n) : o;
  }
  bind(t, n = this.options) {
    return Vt(() => {
      var o;
      const s = new AbortController(), { signal: a } = s, i = (l) => {
        n3(l) && this.handlePointerDown(l, t, n);
      };
      let c = [(o = t.handle) != null ? o : t.element];
      n != null && n.activatorElements && (Array.isArray(n.activatorElements) ? c = n.activatorElements : c = n.activatorElements(t));
      for (const l of c)
        l && (J3(l.ownerDocument.defaultView), l.addEventListener("pointerdown", i, { signal: a }));
      return () => s.abort();
    });
  }
  handlePointerDown(t, n, r) {
    if (this.disabled || !t.isPrimary || t.button !== 0 || !Rr(t.target) || n.disabled || Z3(t) || !this.manager.dragOperation.status.idle)
      return;
    const { preventActivation: o = Md.preventActivation } = r ?? {};
    if (o != null && o(t, n))
      return;
    const { target: s } = t, a = or(s) && s.draggable && s.getAttribute("draggable") === "true", i = Eo(n.element), { x: c, y: l } = _o(t);
    this.initialCoordinates = {
      x: c * i.scaleX + i.x,
      y: l * i.scaleY + i.y
    };
    const f = this.activationConstraints(t, n, r);
    t.sensor = this;
    const d = new mR(
      f,
      (v) => this.handleStart(n, v)
    );
    d.signal.onabort = () => this.handleCancel(t), d.onEvent(t), this.controller = d;
    const h = pd(), p = this.listeners.bind(h, [
      {
        type: "pointermove",
        listener: (v) => this.handlePointerMove(v, n)
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
        listener: a ? this.handleCancel : Ya,
        options: {
          capture: !0
        }
      }
    ]), y = () => {
      p(), this.initialCoordinates = void 0;
    };
    Oe(this, co).add(y);
  }
  handlePointerMove(t, n) {
    var r, o;
    if (((r = this.controller) == null ? void 0 : r.activated) === !1) {
      (o = this.controller) == null || o.onEvent(t);
      return;
    }
    if (this.manager.dragOperation.status.dragging) {
      const s = _o(t), a = Eo(n.element);
      s.x = s.x * a.scaleX + a.x, s.y = s.y * a.scaleY + a.y, t.preventDefault(), t.stopPropagation(), this.latest.event = t, this.latest.coordinates = s, Ri.schedule(this.handleMove);
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
    const i = Ho(n.target).body;
    try {
      i.setPointerCapture(n.pointerId);
    } catch {
      this.handleCancel(n);
      return;
    }
    const c = Rr(n.target) ? [n.target, i] : i, l = this.listeners.bind(c, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: Ya,
        options: {
          passive: !1
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: Ya
      },
      {
        type: "contextmenu",
        listener: Ya
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    Oe(this, co).add(l);
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
    }, Oe(this, co).forEach((n) => n()), Oe(this, co).clear();
  }
  destroy() {
    this.cleanup(), this.listeners.clear();
  }
};
co = /* @__PURE__ */ new WeakMap();
Li.configure = ma(Li);
Li.defaults = Md;
var X3 = Li;
function Z3(e) {
  return "sensor" in e;
}
function Ya(e) {
  e.preventDefault();
}
function Q3() {
}
var yp = /* @__PURE__ */ new WeakSet();
function J3(e) {
  !e || yp.has(e) || (e.addEventListener("touchmove", Q3, {
    capture: !1,
    passive: !1
  }), yp.add(e));
}
var yo = {
  modifiers: [],
  plugins: [C3, sw, _3, Jx, G3],
  sensors: [X3, U3]
}, aw = class extends yR {
  constructor(e = {}) {
    const t = Kt(e.plugins, yo.plugins), n = Kt(e.sensors, yo.sensors), r = Kt(
      e.modifiers,
      yo.modifiers
    );
    super(yf(Hs({}, e), {
      plugins: [H3, ba, Rc, ...t],
      sensors: n,
      modifiers: r
    }));
  }
}, iw, cw, Nd, Xn, kf, Ef, Ic = class extends (Nd = gn, cw = [Ce], iw = [Ce], Nd) {
  constructor(e, t) {
    var n = e, {
      element: r,
      effects: o = () => [],
      handle: s
    } = n, a = Lx(n, [
      "element",
      "effects",
      "handle"
    ]);
    super(
      Hs({
        effects: () => [
          ...o(),
          () => {
            var i, c;
            const { manager: l } = this;
            if (!l) return;
            const d = ((c = (i = this.sensors) == null ? void 0 : i.map(Ls)) != null ? c : [
              ...l.sensors
            ]).map((h) => {
              const p = h instanceof So ? h : l.registry.register(h.plugin), y = h instanceof So ? void 0 : h.options;
              return p.bind(this, y);
            });
            return function() {
              d.forEach((p) => p());
            };
          }
        ]
      }, a),
      t
    ), Fe(this, kf, Ge(Xn, 8, this)), Ge(Xn, 11, this), Fe(this, Ef, Ge(Xn, 12, this)), Ge(Xn, 15, this), this.element = r, this.handle = s;
  }
};
Xn = Go(Nd);
kf = /* @__PURE__ */ new WeakMap();
Ef = /* @__PURE__ */ new WeakMap();
zt(Xn, 4, "handle", cw, Ic, kf);
zt(Xn, 4, "element", iw, Ic, Ef);
zr(Xn, Ic);
var lw, dw, Dd, Zn, Pf, gl, uw, fw, Ns, Mf, Nf = class extends (Dd = yn, dw = [Ce], lw = [Ce], Dd) {
  constructor(e, t) {
    var n = e, { element: r, effects: o = () => [] } = n, s = Lx(n, ["element", "effects"]);
    const { collisionDetector: a = Tx } = s, i = (l) => {
      const { manager: f, element: d } = this;
      if (!d || l === null) {
        this.shape = void 0;
        return;
      }
      if (!f) return;
      const h = new pn(d), p = we(() => this.shape);
      return h && (p != null && p.equals(h)) ? p : (this.shape = h, h);
    }, c = Wo(!1);
    super(
      yf(Hs({}, s), {
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
              const f = new IR(
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
    ), Fe(this, Ns), Fe(this, Pf, Ge(Zn, 8, this)), Ge(Zn, 11, this), Fe(this, Mf, Ge(Zn, 12, this)), Ge(Zn, 15, this), this.element = r, this.refreshShape = () => i();
  }
  set element(e) {
    mt(this, Ns, e, fw);
  }
  get element() {
    var e;
    return (e = this.proxy) != null ? e : Oe(this, Ns, uw);
  }
};
Zn = Go(Dd);
Pf = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakSet();
Mf = /* @__PURE__ */ new WeakMap();
gl = zt(Zn, 20, "#element", dw, Ns, Pf), uw = gl.get, fw = gl.set;
zt(Zn, 4, "proxy", lw, Nf, Mf);
zr(Zn, Nf);
function eI(e) {
  return e != null && typeof e == "object" && "current" in e;
}
function Ds(e) {
  var t;
  if (e != null)
    return eI(e) ? (t = e.current) != null ? t : void 0 : e;
}
var tI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Uo = tI ? Td : fn;
function nI() {
  const e = Xe(0)[1];
  return be(() => {
    e((t) => t + 1);
  }, [e]);
}
function rI(e, t) {
  const n = rt(/* @__PURE__ */ new Map()), r = nI();
  return Uo(() => {
    if (!e) {
      n.current.clear();
      return;
    }
    return Vt(() => {
      var o;
      let s = !1, a = !1;
      for (const i of n.current) {
        const [c] = i, l = we(() => i[1]), f = e[c];
        l !== f && (s = !0, n.current.set(c, f), a = (o = t == null ? void 0 : t(c, l, f)) != null ? o : !1);
      }
      s && (a ? queueMicrotask(() => Xw(r)) : r());
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
function oI(e, t) {
  e();
}
function Qr(e) {
  const t = rt(e);
  return Uo(() => {
    t.current = e;
  }, [e]), t;
}
function ct(e, t, n = fn, r = Object.is) {
  const o = rt(e);
  n(() => {
    const s = o.current;
    r(e, s) || (o.current = e, t(e, s));
  }, [t, e]);
}
function yl(e, t) {
  const n = rt(Ds(e));
  Uo(() => {
    const r = Ds(e);
    r !== n.current && (n.current = r, t(r));
  });
}
var bp = Object.getOwnPropertySymbols, sI = Object.prototype.hasOwnProperty, aI = Object.prototype.propertyIsEnumerable, iI = (e, t) => {
  var n = {};
  for (var r in e)
    sI.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && bp)
    for (var r of bp(e))
      t.indexOf(r) < 0 && aI.call(e, r) && (n[r] = e[r]);
  return n;
}, cI = new aw(), hw = Ks(
  cI
), lI = Gw(
  Dp(({ children: e }, t) => {
    const [n, r] = Xe(0), o = rt(null), s = rt(null), a = ho(
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
          })), Uw(() => {
            i(), r((c) => c + 1);
          });
        }
      }),
      []
    );
    return Uo(() => {
      var i;
      (i = s.current) == null || i.call(s), o.current = null;
    }, [e, n]), Kw(t, () => a), null;
  })
), bl = [void 0, sn];
function dI(e) {
  var t = e, {
    children: n,
    onCollision: r,
    onBeforeDragStart: o,
    onDragStart: s,
    onDragMove: a,
    onDragOver: i,
    onDragEnd: c
  } = t, l = iI(t, [
    "children",
    "onCollision",
    "onBeforeDragStart",
    "onDragStart",
    "onDragMove",
    "onDragOver",
    "onDragEnd"
  ]);
  const f = rt(null), {
    plugins: d,
    modifiers: h,
    sensors: p
  } = l, y = Kt(d, yo.plugins), v = Kt(p, yo.sensors), x = Kt(
    h,
    yo.modifiers
  ), C = Qr(o), b = Qr(s), g = Qr(i), S = Qr(a), w = Qr(c), P = Qr(r), _ = uI(() => {
    var k;
    return (k = l.manager) != null ? k : new aw(l);
  });
  return fn(() => {
    if (!f.current) throw new Error("Renderer not found");
    const { renderer: k, trackRendering: D } = f.current, { monitor: O } = _;
    _.renderer = k;
    const T = [
      O.addEventListener("beforedragstart", (W) => {
        const F = C.current;
        F && D(() => F(W, _));
      }),
      O.addEventListener(
        "dragstart",
        (W) => {
          var F;
          return (F = b.current) == null ? void 0 : F.call(b, W, _);
        }
      ),
      O.addEventListener("dragover", (W) => {
        const F = g.current;
        F && D(() => F(W, _));
      }),
      O.addEventListener("dragmove", (W) => {
        const F = S.current;
        F && D(() => F(W, _));
      }),
      O.addEventListener("dragend", (W) => {
        const F = w.current;
        F && D(() => F(W, _));
      }),
      O.addEventListener(
        "collision",
        (W) => {
          var F;
          return (F = P.current) == null ? void 0 : F.call(P, W, _);
        }
      )
    ];
    return () => T.forEach((W) => W());
  }, [_]), ct(
    y,
    () => _ && (_.plugins = y),
    ...bl
  ), ct(
    v,
    () => _ && (_.sensors = v),
    ...bl
  ), ct(
    x,
    () => _ && (_.modifiers = x),
    ...bl
  ), /* @__PURE__ */ u.jsxs(hw.Provider, { value: _, children: [
    /* @__PURE__ */ u.jsx(lI, { ref: f, children: n }),
    n
  ] });
}
function uI(e) {
  const t = rt(null);
  return t.current || (t.current = e()), Yw(() => () => {
    var n;
    return (n = t.current) == null ? void 0 : n.destroy();
  }, []), t.current;
}
function fI() {
  return As(hw);
}
function hI(e) {
  var t;
  const n = (t = fI()) != null ? t : void 0, [r] = Xe(() => e(n));
  return r.manager !== n && (r.manager = n), Uo(r.register, [n, r]), r;
}
var pI = Object.create, pw = Object.defineProperty, mI = Object.getOwnPropertyDescriptor, mw = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), Tc = (e) => {
  throw TypeError(e);
}, vI = (e, t, n) => t in e ? pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gI = (e) => {
  var t;
  return [, , , pI((t = e == null ? void 0 : e[mw("metadata")]) != null ? t : null)];
}, vw = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], gw = (e) => e !== void 0 && typeof e != "function" ? Tc("Function expected") : e, yI = (e, t, n, r, o) => ({ kind: vw[e], name: t, metadata: r, addInitializer: (s) => n._ ? Tc("Already initialized") : o.push(gw(s || null)) }), bI = (e, t) => vI(t, mw("metadata"), e[3]), xI = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) s[o].call(n);
  return r;
}, yw = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f = t & 7, d = !1, h = !1, p = 2, y = vw[f + 5], v = e[p] || (e[p] = []), x = (o = o.prototype, mI(o, n)), C = r.length - 1; C >= 0; C--)
    c = yI(f, n, i = {}, e[3], v), c.static = d, c.private = h, l = c.access = { has: (b) => n in b }, l.get = (b) => b[n], a = (0, r[C])(x[y], c), i._ = 1, gw(a) && (x[y] = a);
  return x && pw(o, n, x), o;
}, bw = (e, t, n) => t.has(e) || Tc("Cannot " + n), wI = (e, t, n) => (bw(e, t, "read from private field"), t.get(e)), CI = (e, t, n) => t.has(e) ? Tc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), SI = (e, t, n, r) => (bw(e, t, "write to private field"), t.set(e, n), n), es = class Ad {
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
    return new Ad(t.x - n.x, t.y - n.y);
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
    return new Ad(t, n);
  }
}, xw, ww, Od, hi, xa, Df = class extends (Od = Fr, ww = [We], xw = [We], Od) {
  constructor(e) {
    const t = es.from(e);
    super(t, (n, r) => es.equals(n, r)), xI(xa, 5, this), CI(this, hi, 0), this.velocity = { x: 0, y: 0 };
  }
  get delta() {
    return es.delta(this.current, this.initial);
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
    const { current: t } = this, n = es.from(e), r = {
      x: n.x - t.x,
      y: n.y - t.y
    }, o = Date.now(), s = o - wI(this, hi), a = (i) => Math.round(i / s * 100);
    je(() => {
      SI(this, hi, o), this.velocity = {
        x: a(r.x),
        y: a(r.y)
      }, super.current = n;
    });
  }
  reset(e = this.defaultValue) {
    super.reset(es.from(e)), this.velocity = { x: 0, y: 0 };
  }
};
xa = gI(Od);
hi = /* @__PURE__ */ new WeakMap();
yw(xa, 2, "delta", ww, Df);
yw(xa, 2, "direction", xw, Df);
bI(xa, Df);
var Cw = /* @__PURE__ */ ((e) => (e.Horizontal = "x", e.Vertical = "y", e))(Cw || {});
Object.values(Cw);
var _I = Object.create, Sw = Object.defineProperty, kI = Object.defineProperties, EI = Object.getOwnPropertyDescriptor, PI = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, _w = Object.prototype.hasOwnProperty, kw = Object.prototype.propertyIsEnumerable, MI = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), wa = (e) => {
  throw TypeError(e);
}, Rd = (e, t, n) => t in e ? Sw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xl = (e, t) => {
  for (var n in t || (t = {}))
    _w.call(t, n) && Rd(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      kw.call(t, n) && Rd(e, n, t[n]);
  return e;
}, wl = (e, t) => kI(e, PI(t)), NI = (e, t) => {
  var n = {};
  for (var r in e)
    _w.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fi)
    for (var r of Fi(e))
      t.indexOf(r) < 0 && kw.call(e, r) && (n[r] = e[r]);
  return n;
}, DI = (e) => {
  var t;
  return [, , , _I((t = void 0) != null ? t : null)];
}, Ew = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], ys = (e) => e !== void 0 && typeof e != "function" ? wa("Function expected") : e, AI = (e, t, n, r, o) => ({ kind: Ew[e], name: t, metadata: r, addInitializer: (s) => n._ ? wa("Already initialized") : o.push(ys(s || null)) }), OI = (e, t) => Rd(t, MI("metadata"), e[3]), Ga = (e, t, n, r) => {
  for (var o = 0, s = e[t >> 1], a = s && s.length; o < a; o++) t & 1 ? s[o].call(n) : r = s[o].call(n, r);
  return r;
}, Pw = (e, t, n, r, o, s) => {
  for (var a, i, c, l, f, d = t & 7, h = !1, p = !1, y = e.length + 1, v = Ew[d + 5], x = e[y - 1] = [], C = e[y] || (e[y] = []), b = (o = o.prototype, EI({ get [n]() {
    return bs(this, s);
  }, set [n](S) {
    return kr(this, s, S);
  } }, n)), g = r.length - 1; g >= 0; g--)
    l = AI(d, n, c = {}, e[3], C), l.static = h, l.private = p, f = l.access = { has: (S) => n in S }, f.get = (S) => S[n], f.set = (S, w) => S[n] = w, i = (0, r[g])({ get: b.get, set: b.set }, l), c._ = 1, i === void 0 ? ys(i) && (b[v] = i) : typeof i != "object" || i === null ? wa("Object expected") : (ys(a = i.get) && (b.get = a), ys(a = i.set) && (b.set = a), ys(a = i.init) && x.unshift(a));
  return b && Sw(o, n, b), o;
}, Mw = (e, t, n) => t.has(e) || wa("Cannot " + n), bs = (e, t, n) => (Mw(e, t, "read from private field"), t.get(e)), ts = (e, t, n) => t.has(e) ? wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), kr = (e, t, n, r) => (Mw(e, t, "write to private field"), t.set(e, n), n);
function Pr(e) {
  return e instanceof Rf || e instanceof Ow;
}
var Ua = 10, RI = class extends ut {
  constructor(e) {
    super(e);
    const t = Vt(() => {
      const { dragOperation: r } = e;
      if (Bs(r.activatorEvent) && Pr(r.source) && r.status.initialized) {
        const o = e.registry.plugins.get(ba);
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
          if (!Bs(r.nativeEvent) || !Pr(s.source) || !s.shape)
            return;
          const { actions: a, collisionObserver: i, registry: c } = o, { by: l } = r;
          if (!l)
            return;
          const f = II(l), { source: d, target: h } = s, { center: p } = s.shape.current, y = [], v = [];
          je(() => {
            for (const w of c.droppables) {
              const { id: P } = w;
              if (!w.accepts(d) || P === (h == null ? void 0 : h.id) && Pr(w) || !w.element)
                continue;
              let _ = w.shape;
              const k = new pn(w.element, {
                getBoundingClientRect: (D) => Vs(D, void 0, 0.2)
              });
              !k.height || !k.width || (f == "down" && p.y + Ua < k.center.y || f == "up" && p.y - Ua > k.center.y || f == "left" && p.x - Ua > k.center.x || f == "right" && p.x + Ua < k.center.x) && (y.push(w), w.shape = k, v.push(() => w.shape = _));
            }
          }), r.preventDefault(), i.disable();
          const x = i.computeCollisions(
            y,
            i3
          );
          je(() => v.forEach((w) => w()));
          const [C] = x;
          if (!C)
            return;
          const { id: b } = C, { index: g, group: S } = d.sortable;
          a.setDropTarget(b).then(() => {
            const { source: w, target: P, shape: _ } = s;
            if (!w || !Pr(w) || !_)
              return;
            const {
              index: k,
              group: D,
              target: O
            } = w.sortable, T = g !== k || S !== D, W = T ? O : P == null ? void 0 : P.element;
            if (!W) return;
            Rx(W);
            const F = new pn(W);
            if (!F)
              return;
            const L = vn.delta(
              F,
              vn.from(_.current.boundingRectangle),
              w.alignment
            );
            a.move({
              by: L
            }), T ? a.setDropTarget(w.id).then(() => i.enable()) : i.enable();
          });
        });
      }
    );
    this.destroy = () => {
      n(), t();
    };
  }
};
function II(e) {
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
var TI = Object.defineProperty, jI = Object.defineProperties, $I = Object.getOwnPropertyDescriptors, xp = Object.getOwnPropertySymbols, WI = Object.prototype.hasOwnProperty, LI = Object.prototype.propertyIsEnumerable, wp = (e, t, n) => t in e ? TI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jr = (e, t) => {
  for (var n in t || (t = {}))
    WI.call(t, n) && wp(e, n, t[n]);
  if (xp)
    for (var n of xp(t))
      LI.call(t, n) && wp(e, n, t[n]);
  return e;
}, eo = (e, t) => jI(e, $I(t));
function FI(e, t, n) {
  if (t === n)
    return e;
  const r = e.slice();
  return r.splice(n, 0, r.splice(t, 1)[0]), r;
}
function Ka(e, t) {
  const n = String(t);
  return Object.prototype.hasOwnProperty.call(e, n) ? n : void 0;
}
function Cl(e) {
  return "initialIndex" in e && typeof e.initialIndex == "number" && "index" in e && typeof e.index == "number";
}
function VI(e, t, n) {
  var r, o;
  const { source: s, target: a, canceled: i } = t.operation;
  if (!s || !a || i)
    return "preventDefault" in t && t.preventDefault(), e;
  const c = (g, S) => g === S || g !== null && typeof g == "object" && "id" in g && g.id === S;
  if (Array.isArray(e)) {
    const g = e.findIndex((w) => c(w, s.id)), S = e.findIndex((w) => c(w, a.id));
    if (g === -1 || S === -1) {
      if (Cl(s)) {
        const w = s.initialIndex, P = s.index;
        return w === P || w < 0 || w >= e.length ? ("preventDefault" in t && t.preventDefault(), e) : n(e, w, P);
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
  let f = -1, d, h = -1, p;
  for (const [g, S] of l)
    if (f === -1 && (f = S.findIndex((w) => c(w, s.id)), f !== -1 && (d = g)), h === -1 && (h = S.findIndex((w) => c(w, a.id)), h !== -1 && (p = g)), f !== -1 && h !== -1)
      break;
  if (f === -1 && Cl(s)) {
    const g = s.initialGroup == null ? void 0 : Ka(e, s.initialGroup), S = s.initialIndex, w = s.group == null ? void 0 : Ka(e, s.group), P = s.index;
    if (g == null || w == null || g === w && S === P)
      return "preventDefault" in t && t.preventDefault(), e;
    if (g === w)
      return eo(Jr({}, e), {
        [g]: n(e[g], S, P)
      });
    const _ = e[g][S];
    return eo(Jr({}, e), {
      [g]: [
        ...e[g].slice(0, S),
        ...e[g].slice(S + 1)
      ],
      [w]: [
        ...e[w].slice(0, P),
        _,
        ...e[w].slice(P)
      ]
    });
  }
  if (!s.manager) return e;
  const { dragOperation: y } = s.manager, v = (o = (r = y.shape) == null ? void 0 : r.current.center) != null ? o : y.position.current;
  if (p == null) {
    const g = Ka(e, a.id);
    if (g != null) {
      const S = a.shape && v.y > a.shape.center.y ? e[g].length : 0;
      p = g, h = S;
    }
  }
  if (d == null || p == null || d === p && f === h) {
    if (d != null && d === p && f === h && Cl(s)) {
      const g = s.group == null ? void 0 : Ka(e, s.group), S = s.group != null && g !== d, w = s.index !== f;
      if (S || w) {
        const P = s.group == null ? d : g;
        if (P != null) {
          if (d === P)
            return eo(Jr({}, e), {
              [d]: n(
                e[d],
                f,
                s.index
              )
            });
          const _ = e[d][f];
          return eo(Jr({}, e), {
            [d]: [
              ...e[d].slice(0, f),
              ...e[d].slice(f + 1)
            ],
            [P]: [
              ...e[P].slice(0, s.index),
              _,
              ...e[P].slice(s.index)
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
  const C = a.shape && Math.round(v.y) > Math.round(a.shape.center.y) ? 1 : 0, b = e[d][f];
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
function zI(e, t) {
  return VI(e, t, FI);
}
function Cp(e) {
  const t = /* @__PURE__ */ new Map();
  for (const [, n] of e)
    for (const r of n)
      t.set(r.id, r.index);
  return t;
}
function Sp(e, t, n) {
  var r;
  for (const [o, s] of t)
    for (const a of s) {
      const i = e.get(a.id);
      if (a.index !== i || a.group !== o || !((r = n.get(o)) != null && r.has(a)))
        return !0;
    }
  return !1;
}
var _p = "__default__", BI = class extends ut {
  constructor(e) {
    super(e);
    const t = () => {
      const r = /* @__PURE__ */ new Map();
      for (const o of e.registry.droppables)
        if (o instanceof Rf) {
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
        if (!Pr(a) || !Pr(i) || a.sortable === i.sortable)
          return;
        const c = t(), l = Cp(c), f = a.sortable.group === i.sortable.group, d = c.get(a.sortable.group), h = f ? d : c.get(i.sortable.group);
        !d || !h || queueMicrotask(() => {
          r.defaultPrevented || o.renderer.rendering.then(() => {
            var p, y;
            const v = t();
            if (Sp(l, c, v))
              return;
            const x = a.sortable.element, C = i.sortable.element;
            if (!C || !x || !f && i.id === a.sortable.group)
              return;
            const b = qa(d), g = f ? b : qa(h), S = (p = a.sortable.group) != null ? p : _p, w = (y = i.sortable.group) != null ? y : _p, P = {
              [S]: b,
              [w]: g
            }, _ = zI(P, r);
            if (P === _) return;
            const k = _[w].indexOf(a.sortable), D = _[w].indexOf(i.sortable);
            o.collisionObserver.disable(), kp(x, k, C, D), je(() => {
              for (const [O, T] of _[S].entries())
                T.index = O;
              if (!f)
                for (const [O, T] of _[w].entries())
                  T.group = i.sortable.group, T.index = O;
            }), o.actions.setDropTarget(a.id).then(() => o.collisionObserver.enable());
          });
        });
      }),
      e.monitor.addEventListener("dragend", (r, o) => {
        if (!r.canceled)
          return;
        const { dragOperation: s } = o, { source: a } = s;
        Pr(a) && (a.sortable.initialIndex === a.sortable.index && a.sortable.initialGroup === a.sortable.group || queueMicrotask(() => {
          const i = t(), c = Cp(i), l = i.get(
            a.sortable.initialGroup
          );
          l && o.renderer.rendering.then(() => {
            const f = t();
            if (Sp(c, i, f))
              return;
            const d = qa(l), h = qa(
              l,
              YI
            ), p = a.sortable.element, y = h.indexOf(a.sortable), v = d[y], x = v == null ? void 0 : v.element;
            !v || !x || !p || (kp(p, v.index, x, a.index), je(() => {
              for (const C of i.values()) {
                const b = Array.from(C).values();
                for (const g of b)
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
function kp(e, t, n, r) {
  const o = r < t ? "afterend" : "beforebegin";
  n.insertAdjacentElement(o, e);
}
function HI(e, t) {
  return e.index - t.index;
}
function YI(e, t) {
  return e.initialIndex - t.initialIndex;
}
function qa(e, t = HI) {
  return Array.from(e).sort(t);
}
var Ep = [
  RI,
  BI
], Nw = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: !1
};
function Pp(e) {
  var t, n;
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : {
    draggable: (t = e == null ? void 0 : e.draggable) != null ? t : !1,
    droppable: (n = e == null ? void 0 : e.droppable) != null ? n : !1
  };
}
var Xa = new BO(), Dw, Aw, Qn, Af, xs, ws, Of, lo;
Aw = [Ce], Dw = [Ce];
var jc = class {
  constructor(e, t) {
    ts(this, Af, Ga(Qn, 8, this)), Ga(Qn, 11, this), ts(this, xs), ts(this, ws), ts(this, Of, Ga(Qn, 12, this)), Ga(Qn, 15, this), ts(this, lo), this.register = () => (je(() => {
      var y, v;
      (y = this.manager) == null || y.registry.register(this.droppable), (v = this.manager) == null || v.registry.register(this.draggable);
    }), () => this.unregister()), this.unregister = () => {
      je(() => {
        var y, v;
        (y = this.manager) == null || y.registry.unregister(this.droppable), (v = this.manager) == null || v.registry.unregister(this.draggable);
      });
    }, this.destroy = () => {
      je(() => {
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
      transition: l = Nw,
      plugins: f
    } = n, d = NI(n, [
      "effects",
      "disabled",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    const h = Kt(f, Ep), p = Pp(o);
    this.droppable = new Rf(
      wl(xl({}, d), { disabled: p.droppable }),
      t,
      this
    ), this.draggable = new Ow(
      wl(xl({}, d), {
        disabled: p.draggable,
        plugins: h,
        effects: () => [
          () => {
            var y, v, x;
            const C = (y = this.manager) == null ? void 0 : y.dragOperation.status;
            C != null && C.initializing && this.id === ((x = (v = this.manager) == null ? void 0 : v.dragOperation.source) == null ? void 0 : x.id) && Xa.clear(this.manager), C != null && C.dragging && Xa.set(
              this.manager,
              this.id,
              we(() => ({
                initialIndex: this.index,
                initialGroup: this.group
              }))
            );
          },
          () => {
            const { index: y, group: v, manager: x } = this, C = bs(this, ws), b = bs(this, xs);
            (y !== C || v !== b) && (kr(this, ws, y), kr(this, xs, v), this.animate());
          },
          () => {
            var y, v;
            const { target: x } = this, { isDragSource: C } = this.draggable;
            ((v = (y = this.draggable.pluginConfig(Jx)) == null ? void 0 : y.feedback) != null ? v : "default") === "move" && C && (this.droppable.disabled = !x);
          },
          ...r()
        ],
        type: c,
        sensors: i
      }),
      t,
      this
    ), kr(this, lo, d.element), this.manager = t, this.index = a, kr(this, ws, a), this.group = s, kr(this, xs, s), this.type = c, this.transition = l;
  }
  get initialIndex() {
    var e, t;
    return (t = (e = Xa.get(this.manager, this.id)) == null ? void 0 : e.initialIndex) != null ? t : this.index;
  }
  get initialGroup() {
    var e, t;
    return (t = (e = Xa.get(this.manager, this.id)) == null ? void 0 : e.initialGroup) != null ? t : this.group;
  }
  animate() {
    we(() => {
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
        }, { translate: i } = wn(o), c = dp(o, i, !1), l = dp(o, i);
        if (a.x || a.y) {
          const f = mf(Dt(o)) ? wl(xl({}, t), { duration: 0 }) : t;
          Ix({
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
    je(() => {
      this.draggable.manager = e, this.droppable.manager = e;
    });
  }
  set element(e) {
    je(() => {
      const t = bs(this, lo), n = this.droppable.element, r = this.draggable.element;
      (!n || n === t) && (this.droppable.element = e), (!r || r === t) && (this.draggable.element = e), kr(this, lo, e);
    });
  }
  get element() {
    var e, t;
    const n = bs(this, lo);
    if (n)
      return (t = (e = md.get(n)) != null ? e : n) != null ? t : this.droppable.element;
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
    this.draggable.plugins = Kt(e, Ep);
  }
  set disabled(e) {
    const t = Pp(e);
    je(() => {
      this.droppable.disabled = t.droppable, this.draggable.disabled = t.draggable;
    });
  }
  set data(e) {
    je(() => {
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
    this.droppable.collisionDetector = e ?? Tx;
  }
  set alignment(e) {
    this.draggable.alignment = e;
  }
  get alignment() {
    return this.draggable.alignment;
  }
  set type(e) {
    je(() => {
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
Qn = DI();
Af = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
Of = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakMap();
Pw(Qn, 4, "index", Aw, jc, Af);
Pw(Qn, 4, "group", Dw, jc, Of);
OI(Qn, jc);
var Ow = class extends Ic {
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
}, Rf = class extends Nf {
  constructor(e, t, n) {
    super(e, t), this.sortable = n;
  }
  get index() {
    return this.sortable.index;
  }
  get group() {
    return this.sortable.group;
  }
}, GI = Object.defineProperty, UI = Object.defineProperties, KI = Object.getOwnPropertyDescriptors, Mp = Object.getOwnPropertySymbols, qI = Object.prototype.hasOwnProperty, XI = Object.prototype.propertyIsEnumerable, Np = (e, t, n) => t in e ? GI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sl = (e, t) => {
  for (var n in t || (t = {}))
    qI.call(t, n) && Np(e, n, t[n]);
  if (Mp)
    for (var n of Mp(t))
      XI.call(t, n) && Np(e, n, t[n]);
  return e;
}, ZI = (e, t) => UI(e, KI(t));
function QI(e) {
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
    type: y,
    plugins: v
  } = e, x = Sl(Sl({}, Nw), e.transition), C = hI((g) => new jc(
    ZI(Sl({}, e), {
      transition: x,
      register: !1,
      handle: Ds(i),
      element: Ds(a),
      target: Ds(p)
    }),
    g
  )), b = rI(C, JI);
  return ct(o, () => C.id = o), Uo(() => {
    je(() => {
      C.group = l, C.index = c;
    });
  }, [C, l, c]), ct(y, () => C.type = y), ct(
    t,
    () => C.accept = t,
    void 0,
    sn
  ), ct(s, () => s && (C.data = s)), ct(
    c,
    () => {
      var g;
      (g = C.manager) != null && g.dragOperation.status.idle && (x != null && x.idle) && C.refreshShape();
    },
    oI
  ), yl(i, (g) => C.handle = g), yl(a, (g) => C.element = g), yl(p, (g) => C.target = g), ct(
    f,
    () => C.disabled = f ?? !1,
    void 0,
    sn
  ), ct(
    h,
    () => C.sensors = h,
    void 0,
    sn
  ), ct(
    n,
    () => C.collisionDetector = n
  ), ct(
    r,
    () => C.collisionPriority = r
  ), ct(
    v,
    () => C.plugins = v,
    void 0,
    sn
  ), ct(
    x,
    () => C.transition = x,
    void 0,
    sn
  ), ct(
    d,
    () => C.modifiers = d,
    void 0,
    sn
  ), ct(
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
    handleRef: be(
      (g) => {
        C.handle = g ?? void 0;
      },
      [C]
    ),
    ref: be(
      (g) => {
        var S, w;
        !g && ((S = C.element) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.element = g ?? void 0);
      },
      [C]
    ),
    sourceRef: be(
      (g) => {
        var S, w;
        !g && ((S = C.source) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.source = g ?? void 0);
      },
      [C]
    ),
    targetRef: be(
      (g) => {
        var S, w;
        !g && ((S = C.target) != null && S.isConnected) && !((w = C.manager) != null && w.dragOperation.status.idle) || (C.target = g ?? void 0);
      },
      [C]
    )
  };
}
function JI(e, t, n) {
  return !!(e === "isDragSource" && !n && t);
}
const Rw = E.createContext(null), eT = () => {
  const e = E.useContext(Rw);
  if (!e)
    throw new Error("Sortable.Item must be rendered inside Sortable.Container");
  return e;
}, tT = (e) => {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (e !== null && typeof e == "object" && "id" in e) {
    const { id: t } = e;
    if (typeof t == "string" || typeof t == "number")
      return t;
  }
  throw new Error(
    "Sortable.Container: items must be strings, numbers, or objects with a string or number `id`. Pass `getItemValue` for any other shape."
  );
};
function nT({
  value: e,
  onValueChange: t,
  getItemValue: n = tT,
  disabled: r = !1,
  className: o,
  children: s
}, a) {
  const i = E.useMemo(
    () => e.map((f) => n(f)),
    [e, n]
  ), c = E.useMemo(() => {
    const f = /* @__PURE__ */ new Map();
    i.forEach((p, y) => f.set(p, y));
    const d = (p) => f.get(p) ?? -1;
    return { getIndex: d, moveItem: (p, y) => {
      const v = d(p), x = v + y;
      if (v < 0 || x < 0 || x >= e.length)
        return;
      const C = [...e], [b] = C.splice(v, 1);
      b !== void 0 && (C.splice(x, 0, b), t(C));
    }, count: i.length, disabled: r };
  }, [i, e, t, r]), l = (f) => {
    const d = EO(i, f);
    if (d === i)
      return;
    const h = /* @__PURE__ */ new Map();
    e.forEach((y) => h.set(n(y), y));
    const p = [];
    d.forEach((y) => {
      const v = h.get(y);
      v !== void 0 && p.push(v);
    }), t(p);
  };
  return /* @__PURE__ */ u.jsx(Rw.Provider, { value: c, children: /* @__PURE__ */ u.jsx(dI, { onDragEnd: l, children: /* @__PURE__ */ u.jsx("ul", { ref: a, className: A("gap-xs flex flex-col", o), children: s }) }) });
}
const Iw = E.forwardRef(nT);
Iw.displayName = "Sortable.Container";
const Tw = E.forwardRef(
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
    } = eT(), h = c(e), p = t || d, { ref: y, isDragging: v } = QI({
      id: e,
      index: h,
      disabled: p
    });
    return /* @__PURE__ */ u.jsxs(
      "li",
      {
        ref: (x) => {
          y(x), typeof i == "function" ? i(x) : i && (i.current = x);
        },
        "data-dragging": v || void 0,
        className: A(
          `rounded-sm p-2 gap-xxs border-interactive-default bg-surface-primary
          hover:border-interactive-hover flex cursor-grab items-center border
          transition-colors`,
          s
        ),
        children: [
          /* @__PURE__ */ u.jsx(b1, { size: 16, className: "text-shape-light" }),
          /* @__PURE__ */ u.jsx("div", { className: "min-w-0 flex-1", children: a }),
          (n || r) && /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex shrink-0 items-center", children: [
            n && /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(
                Le,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: u1,
                  "aria-label": (o == null ? void 0 : o.moveUp) ?? "Move up",
                  className: "h-6 w-6",
                  disabled: p || h <= 0,
                  onClick: () => l(e, -1)
                }
              ),
              /* @__PURE__ */ u.jsx(
                Le,
                {
                  intent: "tertiary",
                  size: "icon",
                  icon: Xs,
                  "aria-label": (o == null ? void 0 : o.moveDown) ?? "Move down",
                  className: "h-6 w-6",
                  disabled: p || h < 0 || h >= f - 1,
                  onClick: () => l(e, 1)
                }
              )
            ] }),
            r
          ] })
        ]
      }
    );
  }
);
Tw.displayName = "Sortable.Item";
const tj = {
  Container: Iw,
  Item: Tw
}, rT = ae(
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
), oT = ae("h-2 w-2 rounded-full", {
  variants: {
    indicator: {
      valid: "bg-shape-accent-lime-soft",
      invalid: "bg-shape-light"
    }
  }
}), nj = ({
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
      className: A(
        rT({
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
        i && a && /* @__PURE__ */ u.jsx("div", { className: oT({ indicator: a }) }),
        /* @__PURE__ */ u.jsx("div", { className: "truncate", children: e }),
        !!s && /* @__PURE__ */ u.jsx(
          "button",
          {
            className: A(
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
}, sT = E.forwardRef(
  ({
    className: e,
    steps: t,
    currentStep: n,
    showLabels: r = !0,
    variant: o = "linear",
    ...s
  }, a) => {
    const i = E.useMemo(() => n !== void 0 ? t.map((c, l) => ({
      ...c,
      status: l < n ? "completed" : l === n ? "active" : "upcoming"
    })) : t, [t, n]);
    return o === "radial" ? /* @__PURE__ */ u.jsx(
      jw,
      {
        ref: a,
        className: e,
        steps: i,
        currentStep: n,
        showLabels: r,
        ...s
      }
    ) : /* @__PURE__ */ u.jsxs("div", { ref: a, className: A("px-xxl w-full", e), ...s, children: [
      /* @__PURE__ */ u.jsx("div", { className: "gap-sm flex items-center", children: i.map((c, l) => /* @__PURE__ */ u.jsxs(E.Fragment, { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "relative flex flex-col items-center", children: [
          /* @__PURE__ */ u.jsx(
            "div",
            {
              className: "size-5 flex flex-col items-center justify-center",
              children: /* @__PURE__ */ u.jsx(
                "div",
                {
                  className: A(
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
                    Ap,
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
              className: A(
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
            className: A(
              "h-0.25 flex-1 transition-colors",
              c.status === "completed" ? "bg-interactive-primary-default" : "bg-shape-accent-gray-soft"
            )
          }
        )
      ] }, c.id)) }),
      r && /* @__PURE__ */ u.jsx("div", { className: "h-8" })
    ] });
  }
), jw = E.forwardRef(({ className: e, steps: t, currentStep: n, ...r }, o) => {
  const s = t.length, a = n !== void 0 ? n : t.findIndex((p) => p.status === "active"), i = Math.max(
    0,
    Math.min(a, s - 1)
  ), c = t[i] || t[0], l = s > 0 ? (i + 1) / s * 100 : 0, f = 2 * Math.PI * 24, d = f, h = f - l / 100 * f;
  return /* @__PURE__ */ u.jsx("div", { ref: o, className: A("space-y-6", e), ...r, children: /* @__PURE__ */ u.jsxs("div", { className: "gap-md px-xxl mb-28 flex items-center", children: [
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
jw.displayName = "RadialStepper";
sT.displayName = "Stepper";
const aT = m.forwardRef(({ className: e, label: t, id: n, ...r }, o) => {
  const s = n || (t ? `switch-${t}` : void 0), a = /* @__PURE__ */ u.jsx(
    JE,
    {
      ref: o,
      id: s,
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
      children: /* @__PURE__ */ u.jsx(
        eP,
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
aT.displayName = "Switch";
const Id = {
  loading: !1,
  loadingText: "ローディング中…"
}, $w = E.createContext(
  Id
), Ww = () => E.useContext($w), iT = E.forwardRef(
  ({
    className: e,
    children: t,
    loading: n = Id.loading,
    loadingText: r = Id.loadingText,
    ...o
  }, s) => {
    const a = {
      loading: n,
      loadingText: r
    };
    return /* @__PURE__ */ u.jsx($w.Provider, { value: a, children: /* @__PURE__ */ u.jsx(
      "table",
      {
        ref: s,
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
iT.displayName = "Table";
const cT = E.forwardRef(
  ({ className: e, loading: t, children: n, ...r }, o) => {
    const { loading: s } = Ww(), a = t ?? s;
    return /* @__PURE__ */ u.jsxs(
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
          a && /* @__PURE__ */ u.jsx("tr", { children: /* @__PURE__ */ u.jsx("td", { colSpan: 100, className: "p-0 h-0", children: /* @__PURE__ */ u.jsx(
            yc.Linear,
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
cT.displayName = "TableHeader";
const Lw = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx("tr", { ref: r, ...n, children: /* @__PURE__ */ u.jsx(
  "td",
  {
    className: `py-sm min-h-12 sticky
        left-[calc((100%+var(--cc-side-navigation-width,0px))/2)] block w-fit
        text-center align-middle`,
    children: /* @__PURE__ */ u.jsx(
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
Lw.displayName = "TableCoverMessage";
const lT = E.forwardRef(
  ({
    className: e,
    loading: t,
    loadingText: n,
    children: r,
    ...o
  }, s) => {
    const { loading: a, loadingText: i } = Ww(), c = t ?? a, l = n ?? i;
    return /* @__PURE__ */ u.jsx("tbody", { ref: s, className: e, ...o, children: c ? /* @__PURE__ */ u.jsx(Lw, { className: "text-body-secondary", children: l }) : r });
  }
);
lT.displayName = "TableBody";
const dT = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-surface-secondary font-medium border-t", e),
    ...t
  }
));
dT.displayName = "TableFooter";
const uT = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
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
uT.displayName = "TableRow";
const fT = E.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ u.jsx(
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
    children: /* @__PURE__ */ u.jsx("div", { className: "gap-xxs flex items-center", children: t })
  }
));
fT.displayName = "TableHead";
const hT = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
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
hT.displayName = "TableCell";
const pT = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ u.jsx(
  "caption",
  {
    ref: n,
    className: A("text-body-primary mt-md text-sm", e),
    ...t
  }
));
pT.displayName = "TableCaption";
const rj = E.forwardRef(({ sortOrder: e, className: t, ...n }, r) => /* @__PURE__ */ u.jsxs(
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
)), mT = E.forwardRef(({ forceVisible: e = !1, className: t, children: n }, r) => /* @__PURE__ */ u.jsx(
  "td",
  {
    ref: r,
    className: A(
      // Zero-width anchor cell that sticks to right
      "right-0 w-0 p-0 sticky border-none",
      // No background on the cell itself
      "bg-transparent"
    ),
    children: /* @__PURE__ */ u.jsx(
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
        children: /* @__PURE__ */ u.jsx("div", { className: "gap-xs flex items-center", children: n })
      }
    )
  }
));
mT.displayName = "TableRowOverlay";
const vT = ae("inline-flex", {
  variants: {
    size: {
      normal: "h-12",
      small: "h-10"
    }
  },
  defaultVariants: {
    size: "normal"
  }
}), gT = ae(
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
), yT = ae(
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
function bT() {
  const [e, t] = E.useState(
    () => typeof window < "u" && window.matchMedia("(pointer: fine)").matches
  );
  return E.useEffect(() => {
    const n = window.matchMedia("(pointer: fine)"), r = () => t(n.matches);
    return n.addEventListener("change", r), () => n.removeEventListener("change", r);
  }, []), e;
}
function xT(e) {
  const t = [];
  return E.Children.forEach(e, (n) => {
    E.isValidElement(n) && n.type === Fw && t.push(n);
  }), t;
}
const wT = E.forwardRef(({ className: e, size: t, children: n, moreLabel: r, ...o }, s) => {
  const a = t ?? "normal", i = bT(), c = E.useRef(null), l = E.useRef(null), f = E.useRef(/* @__PURE__ */ new Map()), d = E.useRef(/* @__PURE__ */ new Map()), h = E.useMemo(() => xT(n), [n]), [p, y] = E.useState(h.length), [v, x] = E.useState(!1), C = E.useCallback(() => {
    if (!i) {
      y(h.length), x(!0);
      return;
    }
    const _ = c.current;
    if (!_) return;
    f.current.forEach((L, H) => {
      const V = L.offsetWidth;
      V > 0 && d.current.set(H, V);
    });
    const k = _.clientWidth, D = l.current, O = D ? D.offsetWidth + 8 : 80;
    let T = 0;
    for (const L of h)
      T += d.current.get(L.props.value) ?? 0;
    if (T <= k) {
      y(h.length), x(!0);
      return;
    }
    let W = 0, F = 0;
    for (const L of h) {
      const H = d.current.get(L.props.value) ?? 0;
      if (W + H + O <= k)
        W += H, F++;
      else
        break;
    }
    y(Math.max(F, 1)), x(!0);
  }, [h, i]);
  E.useEffect(() => {
    const _ = c.current;
    if (!_) return;
    const k = new ResizeObserver(() => {
      C();
    });
    return k.observe(_), C(), () => k.disconnect();
  }, [C]);
  const b = h.slice(p), g = b.length > 0, S = o.value ?? o.defaultValue, w = b.some(
    (_) => _.props.value === S
  ), P = r ?? ((_) => `${_} more`);
  return /* @__PURE__ */ u.jsx(oP, { ref: s, className: A("w-full", e), ...o, children: /* @__PURE__ */ u.jsxs(
    sP,
    {
      ref: c,
      className: A(
        vT({ size: a }),
        "w-full",
        !i && "overflow-x-auto"
      ),
      role: "tablist",
      children: [
        h.map(
          (_, k) => E.cloneElement(_, {
            key: _.props.value,
            size: a,
            ref: (D) => {
              D ? f.current.set(_.props.value, D) : f.current.delete(_.props.value);
            },
            className: A(
              _.props.className,
              v && k >= p && "hidden"
            )
          })
        ),
        g && v && /* @__PURE__ */ u.jsx("div", { ref: l, className: "inline-flex shrink-0", children: /* @__PURE__ */ u.jsxs(Mu, { children: [
          /* @__PURE__ */ u.jsx(Nu, { asChild: !0, children: /* @__PURE__ */ u.jsxs(
            "button",
            {
              type: "button",
              className: A(
                yT({ size: a }),
                w && "font-bold text-interactive-primary-default"
              ),
              children: [
                /* @__PURE__ */ u.jsx(
                  g1,
                  {
                    size: a === "small" ? 16 : 20,
                    className: "mr-xxs"
                  }
                ),
                P(b.length)
              ]
            }
          ) }),
          /* @__PURE__ */ u.jsx(Pu, { align: "end", size: "sm", children: b.map((_) => {
            const { value: k, disabled: D, asChild: O, children: T } = _.props, W = A(
              k === S && "font-bold text-interactive-primary-default"
            );
            return O && E.isValidElement(T) ? /* @__PURE__ */ u.jsx(
              Gl,
              {
                disabled: D ?? !1,
                asChild: !0,
                className: W,
                children: T
              },
              k
            ) : /* @__PURE__ */ u.jsx(
              Gl,
              {
                disabled: D ?? !1,
                onSelect: () => {
                  o.onValueChange && o.onValueChange(k);
                },
                className: W,
                children: T
              },
              k
            );
          }) })
        ] }) })
      ]
    }
  ) });
});
wT.displayName = "TabBar";
const Fw = E.forwardRef(({ className: e, size: t, ...n }, r) => {
  const o = t ?? "normal";
  return /* @__PURE__ */ u.jsx(
    aP,
    {
      ref: r,
      className: A(gT({ size: o }), e),
      ...n
    }
  );
});
Fw.displayName = "Tab";
const CT = ae(
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
), ST = E.forwardRef(
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
    } = o, [p, y] = Xe(o.value);
    fn(() => {
      y(o.value);
    }, [o.value]);
    const { compositionHandlers: v, guardKeyHandler: x } = wc(), C = (S) => {
      v.onCompositionStart(S), c == null || c(S);
    }, b = (S) => {
      v.onCompositionEnd(S), l == null || l(S);
    }, g = (S) => {
      if (n && S.target.value.length > n) {
        S.preventDefault();
        return;
      }
      y(S.target.value), f && f(S);
    };
    return /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ u.jsx(
        "textarea",
        {
          ref: s,
          className: A(CT({ invalid: e }), t),
          ...h,
          value: p,
          onChange: g,
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
ST.displayName = "TextArea";
const oj = ({
  message: e,
  title: t,
  isOpen: n,
  onClose: r,
  level: o
}) => /* @__PURE__ */ u.jsx(
  EP,
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
            jp,
            {
              className: "h-md text-shape-status-success w-md"
            }
          ),
          o === "error" && /* @__PURE__ */ u.jsx(
            Vf,
            {
              className: "h-md text-shape-status-alert w-md"
            }
          ),
          o === "warning" && /* @__PURE__ */ u.jsx(
            Vf,
            {
              className: "h-md text-shape-status-warning w-md"
            }
          ),
          o === "info" && /* @__PURE__ */ u.jsx(Za, { className: "h-md text-shape-status-info w-md" })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { children: [
          t && /* @__PURE__ */ u.jsx(
            PP,
            {
              className: A("font-bold", {
                "text-body-primary": o === "info",
                "text-body-success": o === "success",
                "text-body-alert": o === "error",
                "text-body-warning": o === "warning"
              }),
              children: /* @__PURE__ */ u.jsx(
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
          /* @__PURE__ */ u.jsx(MP, { children: /* @__PURE__ */ u.jsx("p", { className: "text-md -my-1", children: e }) })
        ] })
      ] }),
      /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx(NP, { asChild: !0, altText: "Close", children: /* @__PURE__ */ u.jsx("button", { onClick: r, className: "block", children: /* @__PURE__ */ u.jsx(_l, { className: "h-md text-body-primary w-md" }) }) }) })
    ] })
  }
), sj = ({
  children: e,
  swipeDirection: t = "right",
  ...n
}) => /* @__PURE__ */ u.jsxs(_P, { swipeDirection: t, ...n, children: [
  e,
  /* @__PURE__ */ u.jsx(
    kP,
    {
      className: `gap-md bottom-0 right-0 m-0 fixed z-[100] flex max-w-[100vw]
          flex-col p-[var(--viewport-padding)] [--viewport-padding:_16px]`
    }
  )
] }), _T = ae(
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
), kT = E.forwardRef(
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
    orText: y = "または",
    selectFileText: v = "ファイルを選択",
    dropFilesText: x = "ここにファイルをドロップ",
    uploadingText: C = "アップロード中…",
    uploadCompletedText: b = "アップロードが完了しました",
    uploadFailedText: g = "アップロードに失敗しました",
    ...S
  }, w) => {
    const [P, _] = Xe(!1), k = rt(null), D = be(
      (M) => {
        M.preventDefault(), M.stopPropagation(), P || _(!0);
      },
      [P]
    ), O = be((M) => {
      M.preventDefault(), M.stopPropagation(), _(!1);
    }, []), T = be((M) => {
      M.preventDefault(), M.stopPropagation();
    }, []), W = be(
      (M) => {
        if (M.preventDefault(), M.stopPropagation(), _(!1), a) return;
        const $ = M.dataTransfer.files;
        $ && $.length > 0 && (r == null || r($));
      },
      [a, r]
    ), F = be(() => {
      var M;
      a || (M = k.current) == null || M.click();
    }, [a]), L = be(
      (M) => {
        const $ = M.target.files;
        $ && $.length > 0 && (r == null || r($));
      },
      [r]
    ), H = P ? "dragging" : n, V = () => /* @__PURE__ */ u.jsx(
      m1,
      {
        className: `text-shape-interactive-primary-default mb-2.25 mx-auto
            block`,
        size: t === "large" ? 74 : 32
      }
    ), K = () => /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs leading-6 flex flex-col items-center", children: [
      /* @__PURE__ */ u.jsxs("div", { className: "mb-xxs text-center", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-body-secondary", children: p }),
        /* @__PURE__ */ u.jsx("p", { className: "text-body-secondary text-sm", children: y })
      ] }),
      /* @__PURE__ */ u.jsx(
        Le,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: zf,
          onClick: (M) => {
            M.stopPropagation(), F();
          },
          children: v
        }
      )
    ] }), I = () => /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      V(),
      /* @__PURE__ */ u.jsxs("p", { className: "text-body-secondary font-normal mb-2", children: [
        x,
        " ",
        /* @__PURE__ */ u.jsx("span", { className: "text-sm", children: y })
      ] }),
      /* @__PURE__ */ u.jsx(
        Le,
        {
          size: "xs",
          intent: "tertiary",
          className: P ? "" : "z-10",
          icon: zf,
          onClick: (M) => {
            M.stopPropagation(), F();
          },
          children: v
        }
      )
    ] }), j = () => {
      const M = t === "small" ? "document_file_name.csv" : "document_file_name.pdf";
      return H === "inProgress" && i !== void 0 ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs gap-xs flex flex-col", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex flex-col", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-body-primary", children: c || M }),
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
          yc.Linear,
          {
            indeterminate: !i,
            value: i,
            className: "h-1"
          }
        ) })
      ] }) : H === "success" ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs flex flex-col", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ u.jsx("p", { className: "text-body-primary", children: c || M }),
          /* @__PURE__ */ u.jsx(
            "button",
            {
              className: "hover:bg-surface-secondary rounded p-xxs",
              onClick: ($) => {
                $.stopPropagation(), h == null || h();
              },
              children: /* @__PURE__ */ u.jsx(O1, { size: 24, className: "text-shape-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ u.jsx(
            h1,
            {
              size: 24,
              className: "text-shape-status-success"
            }
          ),
          /* @__PURE__ */ u.jsx("p", { className: "text-interactive-primary-default", children: d || b })
        ] })
      ] }) : H === "error" ? /* @__PURE__ */ u.jsxs("div", { className: "mt-xxs gap-xxs flex flex-col", children: [
        /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("p", { className: "text-body-alert", children: c || M }) }),
        /* @__PURE__ */ u.jsxs("div", { className: "gap-xxs flex items-center", children: [
          /* @__PURE__ */ u.jsx(n1, { size: 24, className: "text-shape-status-alert" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-body-alert", children: f || g })
        ] })
      ] }) : null;
    }, ne = () => t === "small" ? K() : I(), N = () => /* @__PURE__ */ u.jsx(
      "div",
      {
        className: "top-0 left-0 absolute h-full w-full",
        onDragEnter: D,
        onDragLeave: O,
        onDragOver: T,
        onDrop: W
      }
    );
    return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsxs(
        "div",
        {
          ref: w,
          className: A(
            "relative",
            _T({ size: t, state: H, disabled: a }),
            e
          ),
          onClick: F,
          role: "button",
          tabIndex: a ? -1 : 0,
          "aria-disabled": a,
          ...S,
          children: [
            /* @__PURE__ */ u.jsx(
              "input",
              {
                ref: k,
                type: "file",
                className: "sr-only",
                accept: o,
                multiple: s,
                onChange: L,
                disabled: a
              }
            ),
            N(),
            ne()
          ]
        }
      ),
      (H === "inProgress" && i !== void 0 || H === "success" || H === "error") && j()
    ] });
  }
);
kT.displayName = "FileUploader";
export {
  RT as Accordion,
  OT as AccountMenu,
  Vy as AutoSuggest,
  TM as Badge,
  WM as Breadcrumbs,
  Le as Button,
  Sy as Calendar,
  ED as Callout,
  ti as Checkbox,
  ND as CheckboxGroup,
  AD as ChoiceChip,
  OD as ChoiceChipGroup,
  TT as DataSheet,
  jy as DataSheetAction,
  ky as DataSheetHeader,
  Py as DataSheetKeyValue,
  Ey as DataSheetSection,
  Ay as DataSheetTable,
  Ty as DataSheetTableActionsCell,
  Ry as DataSheetTableBody,
  ki as DataSheetTableCell,
  Oy as DataSheetTableHeader,
  Iy as DataSheetTableRow,
  KD as DatePicker,
  jT as Dialog,
  Mu as Dropdown,
  Pu as DropdownContent,
  Gl as DropdownItem,
  IM as DropdownLabel,
  RM as DropdownSeparator,
  Nu as DropdownTrigger,
  kT as FileUploader,
  dO as FooterProvider,
  WT as FormField,
  BT as Logo,
  VA as MultiSelect,
  $T as MultiStepDialog,
  GA as Pagination,
  yc as ProgressIndicator,
  FT as RadioButton,
  VT as RadioButtonGroup,
  sO as SearchBar,
  zT as SegmentedControl,
  Ql as Select,
  fO as SideNavigation,
  ab as SideNavigationCollapseButton,
  pO as SideNavigationItem,
  lO as SideNavigationProvider,
  vO as SideNavigationSection,
  tj as Sortable,
  nj as StatusIndicator,
  sT as Stepper,
  aT as Switch,
  Fw as Tab,
  wT as TabBar,
  iT as Table,
  lT as TableBody,
  pT as TableCaption,
  hT as TableCell,
  Lw as TableCoverMessage,
  dT as TableFooter,
  fT as TableHead,
  rj as TableHeadSortButton,
  cT as TableHeader,
  uT as TableRow,
  mT as TableRowOverlay,
  ql as Tag,
  zy as TagInput,
  ST as TextArea,
  LT as TextField,
  Kl as TextLink,
  oj as ToastItem,
  sj as ToastProvider,
  Nn as Tooltip,
  IT as TooltipProvider,
  hA as colorCodeToTokenMap,
  tA as focusFirstTextField,
  Cs as iconVariants,
  YD as inputVariants,
  $y as inputWrapperVariants,
  fa as useSideNavigation
};
